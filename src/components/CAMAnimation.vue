<template>
  <div ref="container"/>

</template>

<script>
import {Application, AppLoaderPlugin, Container, Graphics, Sprite, Text, TextStyle} from "pixi.js";

export default {
  name: "CAMAnimation",
  props: ["parentWidth"],
  mounted() {
    // Create the application helper and add its render target to the page
    // Background colour backgroundColor: 0xFFFFFF
    // Register plugin
    Application.registerPlugin(AppLoaderPlugin);
    console.log(this.parentWidth);
    const app = new Application({
      width: this.parentWidth,
      height: 600,
      backgroundColor: 0xFFFFFF,
    });
    this.$refs.container.append(app.view);
    // Def containers
    let switch_container = new Container();
    let pc1_contain = new Container();
    let pc2_contain = new Container();
    let pc3_contain = new Container();
    // def textures / load assets
    app.loader.add("pc", "resources/pc.jpg")
        .add("switch", "resources/switch.jpg");
    app.loader.load((loader, resources) => {
      // Const style and y pos for the most part
      const label_style = new TextStyle({
        fontFamily: "Arial",
        fontSize: 13,
      });
      const y_pos = app.screen.height / 2 - 30;
      const pc_y_pos = y_pos - 10;
      const pc_label_x = 15;
      const pc_label_y = 80;
      // Create PC 1
      let pc1 = new Sprite(resources.pc.texture);
      const pc1_label = new Text("PC 1", label_style);
      pc1_label.x = pc_label_x;
      pc1_label.y = pc_label_y;
      pc1_contain.addChild(pc1);
      pc1_contain.addChild(pc1_label);
      pc1_contain.y = pc_y_pos;
      pc1_contain.x = 300;
      // Create the switch item
      let switch1 = new Sprite(resources.switch.texture);
      const switch_label = new Text('Switch', label_style);
      switch_label.x = 15;
      switch_label.y = 60;
      switch_container.addChild(switch1);
      switch_container.addChild(switch_label);
      switch_container.y = y_pos;
      switch_container.x = pc1_contain.x + pc1_contain.width + 150;
      // Create PC 2
      let pc2 = new Sprite(resources.pc.texture);
      const pc2_label = new Text("PC 2", label_style);
      pc2_label.x = pc_label_x;
      pc2_label.y = pc_label_y;
      pc2_contain.addChild(pc2);
      pc2_contain.addChild(pc2_label);
      pc2_contain.y = pc_y_pos;
      pc2_contain.x = switch_container.x + switch_container.width + 150
      // Create PC 3
      let pc3 = new Sprite(resources.pc.texture);
      const pc3_label = new Text("PC 3", label_style);
      pc3_label.x = 25;
      pc3_label.y = -20;
      pc3_contain.addChild(pc3);
      pc3_contain.addChild(pc3_label);
      pc3_contain.y = pc_y_pos - 200;
      pc3_contain.x = switch_container.x + 10
      // Connections between objects
      let connections = new Graphics();
      connections.lineStyle(2, 0x000000);
      connections.moveTo(pc1_contain.x + pc1_contain.width, pc1_contain.y + pc1_contain.height / 2);
      connections.lineTo(switch_container.x, switch_container.y + switch_container.height / 2);
      connections.endFill();
      connections.lineStyle(2, 0x000000);
      connections.moveTo(switch_container.x + switch_container.width, switch_container.y + switch_container.height / 2);
      connections.lineTo(pc2_contain.x, pc2_contain.y + pc2_contain.height / 2);
      connections.endFill()
      connections.lineStyle(2, 0x000000);
      const switch_contain_source_val = switch_container.x + switch_container.width / 2;
      connections.moveTo(switch_contain_source_val, switch_container.y - switch_container.height / 2 + 35);
      connections.lineTo(switch_contain_source_val, pc3_contain.y + pc3_contain.height / 2 + 25);
      connections.endFill()
      app.stage.addChild(pc1_contain, pc2_contain, switch_container, pc3_contain, connections);
    })
  }
}
</script>

<style scoped>

</style>