<template>
  <div class="flex">
    <!--    Activity-->
    <div ref="activity" class="activity-layout shadow-md max-h-full px-8">
      <div ref="activityAnimation" class="py-3 max-h-[350px] min-h-[350px]">
        <img v-show="showOverflowAnimation" src="resources/overflow_packet.gif">
        <img v-show="showPortSecurity" src="resources/portsecure_cam.jpg">
        <img v-show="showNormal" src="resources/normal_cam.jpg">
      </div>
      <!--      Terminals -->
      <div ref="terminals" class="py-3 min-h-[510px]">
        <div ref="terminal-container">
          <emulate-switch :id="selectedTerm === 'Switch' ? 'active-term' : ''" v-show="selectedTerm === 'Switch'"
                          class="h-auto" hostname="Switch" :help-text="switch_help"/>
          <emulate-attacker-c-a-m :id="selectedTerm === 'Attacker' ? 'active-term' : ''"
                                  v-show="selectedTerm === 'Attacker'"
                                  class="h-auto" :help-text="attacker_help" :bus="bus"/>
        </div>
        <div class="mt-3">
          <div class="max-w-3xl mx-auto">
            <nav class="relative z-0 rounded-lg shadow flex flex-row divide-x divide-gray-200" aria-label="Tabs">
              <button @click="handle_term_select(x)" v-for="x in terminals"
                      :disabled="enabledTerms.indexOf(x) === -1"
                      class="text-gray-900 flex-none group relative min-w-0 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10 disabled:cursor-default">
                <span>{{ x }}</span>
                <span aria-hidden="true" v-if="selectedTerm === x"
                      class="bg-indigo-500 absolute inset-x-0 bottom-0 h-0.5"></span>
              </button>
              <div class="group relative min-w-0 flex-1 overflow-hidden bg-white"/>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <!--    Activity instructions-->
    <div ref="instructions" class="flex-1 font-serif">
      <div class="px-8 py-6">
        <h2 class="text-center text-4xl mb-4">CAM overflow</h2>
        <transition
            v-if="shown.indexOf(1) !== -1 || shown.indexOf(2) !== -1"
            enter-active-class="duration-300 ease-out"
            enter-from-class="transform opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="duration-200 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="transform opacity-0"
            mode="out-in" key="stage1">
          <div ref="Stage1" v-if="shown.indexOf(1) !== -1" key="stage1">
            <div class="mb-5">
              <p class="text-xl mb-2 font-bold">This example will show you</p>
              <ul class="list-inside list-disc text-lg">
                <li>Perspective of an attacker performing a CAM overflow attack</li>
                <li>Impact of a CAM overflow attack</li>
                <li>How proper configuration of port security on a switch can stop CAM overflow attack</li>
              </ul>
            </div>
            <div class="mb-5">
              <p class="text-xl mb-2 font-bold">Learning objectives:</p>
              <ul class="list-disc list-inside text-lg">
                <li>Learn how to use the macof tool to start a CAM overflow attack</li>
                <li>Learn how to configure switchport security to stop a CAM overflow attack.</li>
              </ul>
            </div>
          </div>
          <transition-group v-else-if="shown.indexOf(2) !== -1"
                            key="stage2-group"
                            enter-active-class="duration-300 ease-out"
                            enter-from-class="transform opacity-0"
                            enter-to-class="opacity-100"
                            leave-active-class="duration-200 ease-in"
                            leave-from-class="opacity-100"
                            leave-to-class="transform opacity-0">
            <div ref="Stage2" v-if="shown.indexOf(2) !== -1" key="stage2">
              <div class="mb-5">
                <p class="text-xl mb-2 font-bold">Normal Switch operations</p>
                <p class="text-lg">
                  Let's see how much available space is there in a typical switch CAM table. <br>
                  Switch to elevated mode using the <span class="bg-black text-yellow-200 inline">enable</span> in the
                  switch terminal. <br>
                  Use the <span class="bg-black text-yellow-200 inline">show mac-address-table count</span> command to
                  see
                  how much available space are there in the CAM table
                </p>
              </div>
            </div>
            <div ref="Stage3" v-if="shown.indexOf(3) !== -1" key="stage3">
              <div class="mb-5">
                <ok-banner title="Success"
                           description="Now we know that the switch can store 3044 MAC addresses in it's CAM table"/>
              </div>
              <div class="mb-5">
                <p class="text-xl mb-2 font-bold">Performing a CAM overflow attack</p>
                <p class="text-lg mb-5">
                  Now switch to the attacker machine terminal, the tool used to perform a CAM overflow attack has been
                  installed and ready to use<br>
                  First determine the network interface connected to switchport by entering the command
                  <span class="bg-black text-yellow-200 inline">ip addr</span> and observe the output.<br>
                </p>
                <div v-show="showIPAnswer" class="mb-5">
                  <ok-banner title="Success"
                             description="Now we know the target interface"/>
                  <p class="text-lg">
                    <span class="bg-gray-50 text-black inline italic">lo</span> refers to the machine's loopback
                    interface, it's not important here.<br>
                    <span class="bg-gray-50 text-black inline italic">eth0</span> is the interface connected to the
                    switchport. It's the interface name we need to know in order to attack the switch
                  </p>
                </div>
              </div>
            </div>
          </transition-group>
        </transition>
        <transition
            v-if="shown.indexOf(4) !== -1"
            enter-active-class="duration-300 ease-out"
            enter-from-class="transform opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="duration-200 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="transform opacity-0"
            mode="out-in" key="stage4">
          <transition-group v-else-if="shown.indexOf(4) !== -1"
                            key="stage4"
                            enter-active-class="duration-300 ease-out"
                            enter-from-class="transform opacity-0"
                            enter-to-class="opacity-100"
                            leave-active-class="duration-200 ease-in"
                            leave-from-class="opacity-100"
                            leave-to-class="transform opacity-0">
            <div ref="Stage4" v-if="shown.indexOf(4) !== -1" key="stage4">
              <div class="mb-5">
                <p class="text-xl mb-2 font-bold">Performing a CAM overflow attack</p>
                <p class="text-lg">
                  Now run the <span class="bg-black text-yellow-200 inline">macof -i eth0 -n 5000</span> command to
                  start
                  sending 5000 bogus MAC addresses to the switch.<br>
                </p>
              </div>
            </div>
            <div ref="Stage5" v-if="shown.indexOf(5) !== -1" key="stage5">
              <div class="mb-5">
                <ok-banner title="Success"
                           description="The switch has received those bogus frames"/>
              </div>
              <div class="mb-5">
                <p class="text-xl mb-2 font-bold">Impact of the attack</p>
                <p class="text-lg mb-1">
                  Now that bogus frames have been sent to the switch port fastEthernet 0/1, let's see how much space is
                  left in the CAM table.<br>
                  Open the switch terminal and enter the <span class="bg-black text-yellow-200 inline">show mac-address-table count</span>
                  command<br>
                </p>
                <p class="text-lg font-bold text-red-600" ref="Stage6" v-if="shown.indexOf(6) !== -1" key="stage6">
                  As you can see the switch no longer has space for more MAC addresses
                </p>
                <p v-if="shown.indexOf(6) !== -1" class="text-lg">
                  Now let's see what happens when PC 2 tries to visit a web page on the internet.<br>
                  PC 2 will likely first perform a DNS query sending a packet out of the LAN.<br>
                  The packet will be broadcast to all devices connected to the switch due to a full CAM table.<br>
                  The attacker will be able to see all packets sent by PC 2.
                </p>
                <p></p>
              </div>
            </div>
          </transition-group>
        </transition>
        <transition
            v-if="shown.indexOf(7) !== -1"
            enter-active-class="duration-300 ease-out"
            enter-from-class="transform opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="duration-200 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="transform opacity-0"
            mode="out-in" key="stage7">
          <transition-group v-else-if="shown.indexOf(7) !== -1"
                            key="stage7"
                            enter-active-class="duration-300 ease-out"
                            enter-from-class="transform opacity-0"
                            enter-to-class="opacity-100"
                            leave-active-class="duration-200 ease-in"
                            leave-from-class="opacity-100"
                            leave-to-class="transform opacity-0">
            <div ref="Stage7" v-if="shown.indexOf(7) !== -1" key="stage7">
              <div class="mb-5">
                <p class="text-xl mb-2 font-bold">Configuring port security on a switch</p>
                <p class="text-lg">
                  Now I'll show you how to defend against a CAM overflow attack.<br>
                  CAM overflow attacks succeed because the switch gets filled with bogus MAC addresses causing it to
                  fall
                  back <br>
                  to it's default behavior, which is to broadcast all incoming packets it receives.
                </p>
              </div>
            </div>
            <div ref="Stage8" v-if="shown.indexOf(8) !== -1" key="stage8">
              <div class="mb-5">
                <p class="text-lg">
                  With port security properly configured, the switch will limit the maximum number of MAC addresses each
                  port could save before action is taken.
                  Since an attack is unable to fill the CAM table before the switch port shuts down, the attacker will
                  not
                  be able to see the packets sent by PC 2. <br>
                </p>
              </div>
            </div>
            <div ref="Stage9" v-if="shown.indexOf(9) !== -1" key="stage9">
              <div class="mb-5">
                <p class="text-lg">
                  Run the following commands to configure port security on the switch:<br>
                  <span class="bg-black text-yellow-200 inline">enable</span> - switch to privileged mode<br>
                  <span class="bg-black text-yellow-200 inline">configure terminal</span> - enter configuration mode<br>
                  <span class="bg-black text-yellow-200 inline">interface fastEthernet 0/1</span> - configure port
                  0/1<br>
                  <span class="bg-black text-yellow-200 inline">switchport mode access</span> - set switchport mode to
                  access<br>
                  <span class="bg-black text-yellow-200 inline">switchport port-security</span> - enable port
                  security<br>
                  <span class="bg-black text-yellow-200 inline">switchport port-security mac-address sticky</span> - Set
                  mac-address sticky<br>
                  <span class="bg-black text-yellow-200 inline">switchport port-security maximum 1</span> - set the
                  maximum MAC address to 1<br>
                  <span
                      class="bg-black text-yellow-200 inline">switchport port-security mac-address 1F:50:38:36:C2:D9</span>
                  - set static MAC address to a known MAC address<br>
                </p>
              </div>
            </div>
          </transition-group>
        </transition>
        <transition
            v-if="shown.indexOf(10) !== -1"
            key="stage10"
            enter-active-class="duration-300 ease-out"
            enter-from-class="transform opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="duration-200 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="transform opacity-0"
            mode="out-in">
          <transition-group v-else-if="shown.indexOf(10) !== -1"
                            key="stage10"
                            enter-active-class="duration-300 ease-out"
                            enter-from-class="transform opacity-0"
                            enter-to-class="opacity-100"
                            leave-active-class="duration-200 ease-in"
                            leave-from-class="opacity-100"
                            leave-to-class="transform opacity-0">
            <div ref="Stage10" v-if="shown.indexOf(10) !== -1" key="stage10">
              <div class="mb-5">
                <ok-banner title="Success"
                           description="Port security is configured successfully"/>
              </div>
              <div class="mb-5">
                <p class="text-lg">
                  You can confirm that port security is enabled by using the <span
                    class="bg-black text-yellow-200 inline">do show port-security interface fa 0/1</span>
                  command in the interface configuration mode.
                </p>
              </div>
            </div>
            <div ref="Stage11" v-if="shown.indexOf(11) !== -1" key="stage11">
              <div class="mb-5">
                <p class="text-xl mb-2 font-bold">Attacker Strikes back!</p>
                <p class="text-lg">
                  Let's try to perform a CAM overflow attack again. Switch to the attacker terminal and enter the
                  command
                  <span class="bg-black text-yellow-200 inline">macof -i eth0 -n 5000</span> to start another CAM
                  overflow
                  attack.<br>
                  Observe what happens when the attacker tries to perform a CAM overflow attack.
                </p>
              </div>
            </div>
            <div ref="Stage12" v-if="shown.indexOf(12) !== -1" key="stage12">
              <div class="mb-5">
                <p class="text-lg font-bold text-red-600">
                  The switch port shuts down, and the attacker is not able to send any more frames through that port,
                  halting the attack
                </p>
              </div>
              <div class="mb-5">
                <ok-banner title="Success"
                           description="The switch is protected from CAM overflow attacks"/>
              </div>
            </div>
          </transition-group>

        </transition>
        <div class="px-4 py-8 bg-white">
          <next-button v-show="showNext" @click="next_stage()"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import EmulateAttackerCAM from "../components/EmulateAttackerCAM";
import EmulateSwitch from "../components/EmulateSwitch";
import NextButton from "../components/NextButton";
import OkBanner from "../components/OkBanner";
import mitt from "mitt";

export default {
  name: "CAMOverflow",
  components: {OkBanner, NextButton, EmulateAttackerCAM, EmulateSwitch},
  data() {
    return {
      bus: mitt(),
      aniParentWidth: 0,
      enabledTerms: ["Switch"],
      shown: [1],
      showNext: true,
      selectedTerm: "Switch",
      terminals: ["Switch", "Attacker"],
      switch_help: "You use TAB for command autocompletion",
      attacker_help: "You use TAB for command autocompletion",
      showIPAnswer: false,
      showOverflowAnimation: false,
      showPortSecurity: false,
      showNormal: true,
    }
  },
  computed: {
    stage() {
      return this.$store.state.cam.current_stage;
    },
    stage2_pass() {
      return this.$store.getters.is_cam_stage2_pass;
    },
    stage3_pass() {
      return this.$store.getters.is_cam_stage3_pass;
    },
    stage4_pass() {
      return this.$store.getters.is_cam_stage4_pass;
    },
    stage5_pass() {
      return this.$store.getters.is_cam_stage5_pass;
    },
    stage9_pass() {
      return this.$store.getters.is_cam_stage9_pass;
    },
    stage11_pass() {
      return this.$store.getters.is_cam_stage11_pass;
    },
  },
  mounted() {
    this.aniParentWidth = 670
    this.toggle_term_input()
  },
  watch: {
    stage(val) {
      if (val === 2) {
        this.switch_help = "enable"
        this.toggle_term_input()
      } else if (val === 4) {
        this.attacker_help = "macof -i eth0 -n 5000"
        this.toggle_term_input()
      } else if (val === 7) {
        this.switch_help = "You use TAB for command autocompletion"
        this.showNormal = true
        this.showOverflowAnimation = false
        this.toggle_term_input()
        this.delay(5000).then(() => {
          this.next_stage(true)
        })
      } else if (val === 8) {
        this.delay(3000).then(() => {
          this.next_stage(true)
        })
      } else if (val === 9) {
        this.switch_help = "enable"
        this.toggle_term_input()
      } else if (val === 10) {
        this.switch_help = "do show port-security interface fa 0/1"
        this.toggle_term_input()
        this.delay(10000).then(() => {
          this.next_stage(true)
          this.toggle_term_input()
          this.enabledTerms = ["Attacker"]
          this.switch_help = "Switch to the attacker terminal"
          this.attacker_help = "macof -i eth0 -n 5000"
        })
      }
    },
    stage2_pass(val) {
      if (val) {
        this.toggle_term_input()
        this.next_stage(true)
        this.switch_help = "Use arrow keys 🔼/🔽 to run previously entered commands"
        this.enabledTerms = ["Attacker"]
        this.attacker_help = "ip addr"
      }
    },
    async stage3_pass(val) {
      if (val) {
        await this.delay(1000)
        this.showIPAnswer = true;
        this.showNext = true
        this.attacker_help = "Hooray 🎉"
        await this.toggle_term_input()
      }
    },
    stage4_pass(val) {
      if (val) {
        this.toggle_term_input()
        this.next_stage(true)
        this.attacker_help = "Hooray 🎉"
        this.switch_help = "show mac-address-table count"
        this.enabledTerms = ["Switch"]
      }
    },
    async stage5_pass(val) {
      if (val) {
        await this.toggle_term_input()
        this.next_stage(true)
        await this.delay(2000)
        this.showOverflowAnimation = true
        this.showNormal = false
        await this.delay(13600)
        this.showNext = true
      }
    },
    async stage9_pass(val) {
      if (val) {
        await this.toggle_term_input()
        this.showNext = true
      }
    },
    async stage11_pass(val) {
      if (val) {
        this.showNormal = false
        this.showPortSecurity = true
        this.next_stage(true)
      }
    },
  },
  methods: {
    next_stage(keep_last = false) {
      this.$store.commit('next_stage')
      let current_shown = this.shown
      if (!keep_last) {
        current_shown = [this.stage]
      } else {
        current_shown.push(this.stage)
      }
      this.shown = current_shown
      this.showNext = false
    },
    handle_term_select(term) {
      this.selectedTerm = term
      if (this.stage4_pass) {
        this.toggle_term_input()
      }
    },
    async toggle_term_input() {
      await this.delay(200)
      const term_input = window.document.querySelector('#active-term .term-hist:last-child input[type="text"]')
      term_input.disabled = !term_input.disabled
    },
    // Function to set timeout less painfully
    delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
  }
}

</script>

<style>
.activity-layout {
  display: grid;
  grid-template-rows: repeat(auto-fill, minmax(0, 1fr));
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

.vue-command input[type=text] {
  outline: none;
  border: none;
  padding: 0;
  margin: 0;
}

.vue-command input[type=text]:focus {
  outline: none;
  --tw-ring-color: none;
}

.vue-command .term-std {
  min-height: 390px;
  max-height: 390px;
  min-width: 700px;
  max-width: 700px;
  overflow-y: scroll;
}

</style>