import {createStore} from 'vuex'

const store = createStore({
  state() {
    return {
      cam: {
        env: {
          cam_flooded: false,
          port_sec_config: false,
        },
        stage2_pass: {
          switch: false,
        },
        stage3_pass: {
          attacker: false,
        },
        stage4_pass: {
          attacker: false,
        },
        stage5_pass: {
          switch: false,
        },
        stage9_pass: {
          switch: false,
        },
        stage11_pass: {
          attacker: false,
        },
        current_stage: 1,
      },
    }
  },
  mutations: {
    next_stage(state) {
      state.cam.current_stage++
    },
    pass_requirement(state, fields) {
      // State   activity          Stage                         Requirement
      // duh   CAM/Smurf ETC.  stage1/stage2    the requirement that passed (switch term/question etc.)
      state[fields.activity][`${fields.stage}_pass`][fields.requirement] = true
    },
    flood_cam(state) {
      state.cam.env.cam_flooded = true
    },
    port_sec_configured(state) {
      state.cam.env.port_sec_config = true
    },
    reset_cam_env(state) {
      state.cam.env = {
        cam_flooded: false,
        port_sec_config: false,
      }
    },
  },
  getters: {
    is_cam_stage2_pass(state) {
      return state.cam.stage2_pass.switch
    },
    is_cam_stage3_pass(state) {
      return state.cam.stage3_pass.attacker
    },
    is_cam_stage4_pass(state) {
      return state.cam.stage4_pass.attacker
    },
    is_cam_stage5_pass(state) {
      return state.cam.stage5_pass.switch
    },
    is_cam_stage9_pass(state) {
      return state.cam.stage9_pass.switch
    },
    is_cam_stage11_pass(state) {
      return state.cam.stage11_pass.attacker
    },
    is_cam_flooded(state) {
      return state.cam.env.cam_flooded && !state.cam.env.port_sec_config
    },
  },
});

export default store;