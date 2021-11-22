<template>

  <vue-command
      :key="commandKey"
      v-model:cursor="this.cursor"
      v-model:history="this.history"
      v-model:stdin="this.stdin"
      title="Cisco Switch console emulator"
      :autocompletion-resolver="this.autocompletionResolver"
      :commands="commands"
      :help-timeout="1250"
      :help-text="localHelp"
      :prompt="this.shell_prompt" show-help/>
</template>

<script>
import VueCommand, {createStdout, createStderr, createDummyStdout} from 'vue-command'
import 'vue-command/dist/vue-command.css'
import {h} from 'vue'


export default {
  name: "EmulateCiscoSwitch",
  components: {
    VueCommand
  },
  props: ["hostname", "helpText"],
  data() {
    return {
      commandKey: 0,
      shell_prompt: `${this.hostname}>`,
      autocompletionResolver: () => undefined,
      commands: {
        // Commands definitions
        enable: () => undefined,
        configure: () => undefined,
        interface: () => undefined,
        show: () => undefined,
        do: () => undefined,
        switchport: () => undefined,
      },
      // Terminal cursor position
      cursor: 0,
      history: [],
      options: {
        long: {},
        short: {},
        positional: {
          do: ['show'],
          show: ['port-security', 'mac-address-table'],
          configure: ['terminal'],
          interface: ['fastEthernet'],
          switchport: ['mode', 'port-security'],
        },
      },
      requirements: {
        stage2: {
          elevated: false,
          mac_table_show: false,
        },
        stage5: {
          mac_table_show: false,
        },
        stage9: {
          elevated: false,
          configure: false,
          interface_select: false,
          mode_access: false,
          enable_port_sec: false,
          port_sec_configured: false,
          port_sec_sticky: false,
          port_sec_sticky_mac: false,
          port_sec_static_mac: false,
        }
      },
      stdin: '',
      localHelp: ""
    }
  },
  methods: {
    forceRerender() {
      this.commandKey += 1;
    }
  },
  computed: {
    current_stage() {
      return this.$store.state.cam.current_stage
    },
    is_switch_flooded() {
      return this.$store.getters.is_cam_flooded;
    }
  },
  watch: {
    requirements: {
      handler(current_req, _) {
        if (current_req.stage2.elevated && current_req.stage2.mac_table_show) {
          this.$store.commit("pass_requirement", {
            activity: "cam",
            stage: "stage2",
            requirement: "switch"
          })
        }
        if (current_req.stage5.mac_table_show) {
          this.$store.commit("pass_requirement", {
            activity: "cam",
            stage: "stage5",
            requirement: "switch"
          })
        }
        if (current_req.stage9.port_sec_configured &&
            current_req.stage9.enable_port_sec &&
            current_req.stage9.interface_select &&
            current_req.stage9.port_sec_sticky &&
            current_req.stage9.port_sec_static_mac) {
          this.$store.commit("pass_requirement", {
            activity: "cam",
            stage: "stage9",
            requirement: "switch"
          })
          this.$store.commit("port_sec_configured")
        }
      },
      deep: true
    },
    helpText(val) {
      this.localHelp = val;
    },
    current_stage(val) {
      if (val === 7) {
        this.forceRerender()
        this.cursor = 0
        this.history = []
        this.stdin = ''
        this.shell_prompt = `${this.hostname}>`
      }
    },
  },
  mounted() {
    this.localHelp = this.helpText;
  },
  created() {
    // Switch to elevated mode
    this.commands.enable = () => {
      this.shell_prompt = `${this.hostname}#`
      // If stage 2 make sure to note student has entered elevated mode
      if (this.current_stage === 2) {
        this.requirements.stage2.elevated = true
        this.localHelp = "show mac-address-table count"
      } else if (this.current_stage === 9) {
        this.requirements.stage9.elevated = true
        this.localHelp = "configure terminal"
      }
      // Push dummy Stdout to show Stdin
      return createDummyStdout()
    }
    // Switch to configure mode
    this.commands.configure = ({_}) => {
      // Check if in elevated mode
      if (this.shell_prompt === `${this.hostname}#`) {
        if (_[1] === "terminal") {
          this.shell_prompt = `${this.hostname}(config)#`
          if (this.current_stage === 9) {
            this.requirements.stage9.configure = true
            this.localHelp = "interface FastEthernet 0/1"
          }
          return createDummyStdout()
        }
        // Return help if no match
        return createStderr(`Invalid command, enter configure terminal to configure switch`)
      } else {
        return createStderr(`Invalid command`)
      }

    }
    // Switch to interface config mode
    this.commands.interface = ({_}) => {
      // Move to interface config when match
      if (_[1].toLowerCase() === "fastethernet" && _[2].toLowerCase() === "0/1") {
        this.shell_prompt = `${this.hostname}(config-if)#`
        if (this.current_stage === 9) {
          this.requirements.stage9.interface_select = true
          this.localHelp = "switchport mode access"
        }
        return createDummyStdout()
      }
      return createStderr(`Invalid command, enter interface fastethernet 0/1 to configure switch port`)
    }
    // Show command
    this.commands.show = ({_}, from_do = false) => {
      if (from_do) {
        _.shift()
      }
      // If current mode is elevated
      if (this.shell_prompt === `${this.hostname}#` || from_do) {
        try {
          // If command valid
          if (_[1].toLowerCase() === "port-security" &&
              _[2].toLowerCase() === "interface" &&
              _[3].toLowerCase() === "fa" &&
              _[4].toLowerCase() === "0/1") {
            // TODO: Add real output for his command
            if (this.requirements.stage9.port_sec_configured) {
              return createStdout("Port Security              : Enabled\n" +
                  "Port Status                : Secure-up\n" +
                  "Violation Mode             : Shutdown\n" +
                  "Aging Time                 : 0 mins\n" +
                  "Aging Type                 : Absolute\n" +
                  "SecureStatic Address Aging : Disabled\n" +
                  "Maximum MAC Addresses      : 1\n" +
                  "Total MAC Addresses        : 1\n" +
                  "Configured MAC Addresses   : 1\n" +
                  "Sticky MAC Addresses       : 0\n" +
                  "Last Source Address:Vlan   : 0000.0000.0000:0\n" +
                  "Security Violation Count   : 0", true)
            } else {
              return createStdout("Port Security              : Disabled\n" +
                  "Port Status                : Secure-down\n" +
                  "Violation Mode             : Shutdown\n" +
                  "Aging Time                 : 0 mins\n" +
                  "Aging Type                 : Absolute\n" +
                  "SecureStatic Address Aging : Disabled\n" +
                  "Maximum MAC Addresses      : 1\n" +
                  "Total MAC Addresses        : 0\n" +
                  "Configured MAC Addresses   : 0\n" +
                  "Sticky MAC Addresses       : 0\n" +
                  "Last Source Address:Vlan   : 0000.0000.0000:0\n" +
                  "Security Violation Count   : 0", true)
            }
          } else if (_[1].toLowerCase() === "mac-address-table" &&
              _[2].toLowerCase() === "count") {
            if (this.current_stage === 2) {
              this.requirements.stage2.mac_table_show = true
            }
            if (!this.is_switch_flooded) {
              return createStdout("MAC address entries\n" +
                  "----------------------\n" +
                  "Dynamic Address Count  : 0\n" +
                  "Static Address Count   : 0\n" +
                  "Total MAC Addresses    : 0\n" +
                  "Total MAC Address Space Available: 3044\n", true)
            } else {
              this.requirements.stage5.mac_table_show = true
              return createStdout("MAC address entries\n" +
                  "----------------------\n" +
                  "Dynamic Address Count  : 3044\n" +
                  "Static Address Count   : 0\n" +
                  "Total MAC Addresses    : 3044\n" +
                  "Total MAC Address Space Available: 0\n", true)
            }
          }
          // invalid command
          return createStderr('Invalid command, enter show port-security interface fa 0/1 to see port-security status or show mac-address-table count')
        } catch (e) {
          return createStderr('Incomplete command, enter show port-security interface fa 0/1 to see port-security status or show mac-address-table count')
        }
      } else {
        // wrong shell mode
        return createStderr('Invalid command, check if you are in the correct shell mode')
      }
    }
    // Do command in cisco
    this.commands.do = (_) => {
      // Check if current mod is elevated/standard
      if (this.shell_prompt === `${this.hostname}#` || this.shell_prompt === `${this.hostname}>`) {
        // If true say its invalid
        return createStderr('Invalid command, check if you are in the correct shell mode')
      } else {
        return this.commands.show(_, true)
      }
    }
    // switchport int config command
    this.commands.switchport = ({_}) => {
      // Check if current mod is elevated/standard/config
      if (this.shell_prompt === `${this.hostname}#` || this.shell_prompt === `${this.hostname}>` || this.shell_prompt === `${this.hostname}(config)#`) {
        // If true say its invalid
        return createStderr('Invalid command, check if you are in the correct shell mode')
      } else {
        // If command valid
        if (_[1].toLowerCase() === "mode" &&
            _[2].toLowerCase() === "access") {
          if (this.current_stage === 9) {
            this.requirements.stage9.mode_access = true
            this.localHelp = "switchport port-security"
          }
          return createDummyStdout()
        }
        try {
          if (_[1].toLowerCase() === "port-security" &&
              _[2].toLowerCase() === "maximum" &&
              _[3].toLowerCase() === "1") {
            this.localHelp = "switchport port-security mac-address 1F:50:38:36:C2:D9"
            this.requirements.stage9.port_sec_configured = true
            return createDummyStdout()
          }
          if (_[1].toLowerCase() === "port-security" &&
              _[2].toLowerCase() === "mac-address" &&
              _[3] === "1F:50:38:36:C2:D9") {
            this.requirements.stage9.port_sec_static_mac = true
            this.localHelp = "switchport port-security maximum 1"
            return createDummyStdout()
          }
          if (_[1].toLowerCase() === "port-security" &&
              _[2].toLowerCase() === "mac-address" &&
              _[3].toLowerCase() === "sticky") {
            this.requirements.stage9.port_sec_sticky = true
            this.localHelp = "switchport port-security maximum 1"
            return createDummyStdout()
          }
        } catch (e) {
          if (_[1].toLowerCase() === "port-security") {
            if (this.current_stage === 9) {
              this.requirements.stage9.enable_port_sec = true
              this.localHelp = "switchport port-security mac-address sticky"
            }
            return createDummyStdout()
          }
        }
        return createStderr('Invalid command, Try again :)')
      }
    }

    // Autocomplete resolver
    this.autocompletionResolver = () => {
      // Preserve cursor position
      const cursor = this.cursor

      // Reverse concatenate autocompletable according to cursor
      let pointer = this.cursor
      let autocompleteableStdin = ''
      while (this.stdin[pointer - 1] !== ' ' && pointer - 1 > 0) {
        pointer--
        autocompleteableStdin = `${this.stdin[pointer]}${autocompleteableStdin}`
      }

      // Divide by arguments
      const command = this.stdin.split(' ')

      // Autocompleteable is program
      if (command.length === 1) {
        const autocompleteableProgram = command[0]
        // Collect all autocompletion candidates
        const candidates = []
        const programs = [...Object.keys(this.commands), 'reverse'].sort()
        programs.forEach(program => {
          if (this.shell_prompt === `${this.hostname}>`) {
            const valid_commands = ["enable"]
            // Check if command is valid in current shell mode
            if (program.startsWith(autocompleteableProgram) && valid_commands.indexOf(program) !== -1) {
              candidates.push(program)
            }
          } else if (this.shell_prompt === `${this.hostname}#`) {
            const valid_commands = ["configure", "show"]
            // Check if command is valid in current shell mode
            if (program.startsWith(autocompleteableProgram) && valid_commands.indexOf(program) !== -1) {
              candidates.push(program)
            }
          } else if (this.shell_prompt === `${this.hostname}(config-if)#`) {
            const valid_commands = ["switchport"]
            // Check if command is valid in current shell mode
            if (program.startsWith(autocompleteableProgram) && valid_commands.indexOf(program) !== -1) {
              candidates.push(program)
            }
          } else if (this.shell_prompt === `${this.hostname}(config)#`) {
            const valid_commands = ["interface"]
            // Check if command is valid in current shell mode
            if (program.startsWith(autocompleteableProgram) && valid_commands.indexOf(program) !== -1) {
              candidates.push(program)
            }
          }
        })

        // Autocompletion resolved into multiple results
        if (this.stdin !== '' && candidates.length > 1) {
          this.history.push({
            // Build table programmatically
            render: () => {
              const columns = candidates.length < 5 ? candidates.length : 4
              const rows = candidates.length < 5 ? 1 : Math.ceil(candidates.length / columns)

              let index = 0
              const table = []
              for (let i = 0; i < rows; i++) {
                const row = []
                for (let j = 0; j < columns; j++) {
                  row.push(h('td', null, candidates[index]))
                  index++
                }

                table.push(h('tr', null, row))
              }
              return h('table', {style: {width: '100%'}}, table)
            }
          })
        }

        // Autocompletion resolved into one result
        if (candidates.length === 1) {
          // Mutating Stdin mutates the cursor, so we've to wait to push it to the end
          const unwatch = this.$watch(() => this.cursor, () => {
            this.cursor = cursor + (candidates[0].length - autocompleteableStdin.length)

            unwatch()
          })

          this.stdin = candidates[0]
        }

        return
      }


      // Check if option might be completed already or option is last tokens
      if ((this.stdin[cursor] !== '' && this.stdin[cursor] !== ' ') && typeof this.stdin[cursor] !== 'undefined') {
        return
      }

      // Get the executable
      const program = command[0]

      // Check if any autocompleteable exists
      if (typeof this.options.long[program] === 'undefined' && typeof this.options.short[program] === 'undefined' && this.options.positional[program] === 'undefined') {
        return
      }

      // Autocompleteable is long option
      if (autocompleteableStdin.substring(0, 2) === '--') {
        const candidates = []
        this.options.long[program].forEach(option => {
          // If only dashes are presents, user requests all options
          if (`--${option}`.startsWith(autocompleteableStdin) || autocompleteableStdin === '--') {
            candidates.push(option)
          }
        })

        // Autocompletion resolved into one result
        if (candidates.length === 1) {
          const autocompleted = `${this.stdin.substring(0, pointer - 1)} --${candidates[0]}`
          const rest = `${this.stdin.substring(this.cursor)}`

          // Mutating Stdin mutates the cursor, so we've to wait to push it to the end
          const unwatch = this.$watch(() => this.cursor, () => {
            this.cursor = cursor + (candidates[0].length - autocompleteableStdin.length + 2)

            unwatch()
          })

          this.stdin = `${autocompleted}${rest}`

          return
        }

        // Autocompletion resolved into multiple result
        if (autocompleteableStdin === '--' || candidates.length > 1) {
          this.history.push({
            // Build table programmatically
            render: () => {
              const columns = candidates.length < 5 ? candidates.length : 4
              const rows = candidates.length < 5 ? 1 : Math.ceil(candidates.length / columns)

              let index = 0
              const table = []
              for (let i = 0; i < rows; i++) {
                const row = []
                for (let j = 0; j < columns; j++) {
                  row.push(h('td', null, `--${candidates[index]}`))
                  index++
                }

                table.push(h('tr', null, row))
              }
              return h('table', {style: {width: '100%'}}, table)
            }
          })
        }

        return
      }

      // Autocompleteable is option
      if (autocompleteableStdin.substring(0, 1) === '-') {
        const candidates = []
        this.options.short[program].forEach(option => {
          // If only one dash is present, user requests all options
          if (`-${option}`.startsWith(autocompleteableStdin) || autocompleteableStdin === '-') {
            candidates.push(option)
          }
        })

        // Autocompletion resolved into one result
        if (candidates.length === 1) {
          const autocompleted = `${this.stdin.substring(0, pointer - 1)} -${candidates[0]}`
          const rest = `${this.stdin.substring(this.cursor)}`

          // Mutating Stdin mutates the cursor, so we've to wait to push it to the end
          const unwatch = this.$watch(() => this.cursor, () => {
            this.cursor = cursor + (candidates[0].length - autocompleteableStdin.length + 1)

            unwatch()
          })

          this.stdin = `${autocompleted}${rest}`

          return
        }

        // Autocompletion resolved into multiple result
        if (autocompleteableStdin === '-' || candidates.length > 1) {
          this.history.push({
            // Build table programmatically
            render: () => {
              const columns = candidates.length < 5 ? candidates.length : 4
              const rows = candidates.length < 5 ? 1 : Math.ceil(candidates.length / columns)

              let index = 0
              const table = []
              for (let i = 0; i < rows; i++) {
                const row = []
                for (let j = 0; j < columns; j++) {
                  row.push(h('td', `-${candidates[index]}`))
                  index++
                }

                table.push(h('tr', [row]))
              }

              return h('table', {style: {width: '100%'}}, [table])
            }
          })
        }
      }

      // If command has positional arguments
      if (command.length > 1) {
        const candidates = []
        try {
          this.options.positional[program].forEach(option => {
            // If only dashes are presents, user requests all options
            if (option.startsWith(autocompleteableStdin) || autocompleteableStdin === '') {
              candidates.push(option)
            }
          })
        } catch (e){
          // If no positional arguments are present, do nothing
        }
        // Autocompletion resolved into one result
        if (candidates.length === 1) {
          const autocompleted = `${this.stdin.substring(0, pointer - 1)} ${candidates[0]}`
          const rest = `${this.stdin.substring(this.cursor)}`

          // Mutating Stdin mutates the cursor, so we've to wait to push it to the end
          const unwatch = this.$watch(() => this.cursor, () => {
            this.cursor = cursor + (candidates[0].length - autocompleteableStdin.length + 1)

            unwatch()
          })

          this.stdin = `${autocompleted}${rest}`

          return
        }

        // Autocompletion resolved into multiple result
        if (autocompleteableStdin === '' || candidates.length > 1) {
          this.history.push({
            // Build table programmatically
            render: () => {
              const columns = candidates.length < 5 ? candidates.length : 4
              const rows = candidates.length < 5 ? 1 : Math.ceil(candidates.length / columns)

              let index = 0
              const table = []
              for (let i = 0; i < rows; i++) {
                const row = []
                for (let j = 0; j < columns; j++) {
                  row.push(h('td', `${candidates[index]}  `))
                  index++
                }

                table.push(h('tr', [row]))
              }

              return h('table', {style: {width: '100%'}}, [table])
            }
          })
        }
      }
    }
  }
}
</script>

<style>


</style>