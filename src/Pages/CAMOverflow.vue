<template>
  <div class="grid grid-rows-4 grid-cols-5 gap-1 h-full w-full">
    <div ref="activityInstructions" class="row-span-3 col-span-2 ">1</div>
    <div ref="activityAnimation" class="row-span-1 col-span-3 border-solid border-4 border-blue-300">
      <CAMAnimation v-if="this.aniParentWidth !== 0" :parent-width="this.aniParentWidth"/>
    </div>
    <div ref="activityTerminal" class="row-span-1 col-span-3 border-solid border-4 border-blue-700">
    </div>
  </div>
</template>

<script lang="js">
import 'xterm/css/xterm.css'
import pkg from 'xterm';
import CAMAnimation from "../components/CAMAnimation";

const {Terminal} = pkg;

export default {
  name: "CAMOverflow",
  components: {CAMAnimation},
  data() {
    return {
      aniParentWidth: 0,
    }
  },
  mounted() {
    this.aniParentWidth = this.$refs.activityAnimation.clientWidth;
    // xterm.js emulation
    // TODO: Add command handling logic
    // function runCommand(term, text) {
    //   const command = text.trim().split(' ')[0];
    //   if (command.length > 0) {
    //     term.writeln('');
    //     if (command in commands) {
    //       commands[command].f();
    //       return;
    //     }
    //     term.writeln(`${command}: command not found`);
    //   }
    //   prompt(term);
    // }

    const term = new Terminal();
    term.resize(100, 25);
    term.open(this.$refs.activityTerminal);
    let shell_prompt = '$ ';

    term.prompt = () => {
      term.write('\r\n' + shell_prompt);
    };

    term.writeln('Welcome to xterm.js');
    term.writeln('This is a local terminal emulation, without a real terminal in the back-end.');
    term.writeln('Type some keys and commands to play around.');
    term.writeln('');
    term.prompt();
    let command = "";
    term.onData(e => {
      switch (e) {
        case '\u0003': // Ctrl+C
          term.write('^C');
          term.prompt();
          break;
        case '\r': // Enter
          // runCommand(term, command);
          command = '';
          term.prompt();
          break;
        case '\u007F': // Backspace (DEL)
          // Do not delete the prompt
          if (term._core.buffer.x > shell_prompt.length) {
            term.write('\b \b');
            if (command.length > 0) {
              command = command.substr(0, command.length - 1);
            }
          }
          break;
        default: // Print all other characters for demo
          if (e >= String.fromCharCode(0x20) && e <= String.fromCharCode(0x7B) || e >= '\u00a0') {
            command += e;
            term.write(e);
          }
      }
    });
  }
}


</script>

<style scoped>

</style>