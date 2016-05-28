import { default as presets } from '../utils/transitionPresets.js'
import { ROUTER_TRANSITION_ACTIONS } from '../actions/constants'


const routerTransition = (state = presets.noAnimation, action) => {
  switch (action.type) {
    case ROUTER_TRANSITION_ACTIONS.TRANSITION_FADE:
      return presets.fade
    case ROUTER_TRANSITION_ACTIONS.TRANSITION_POP:
      return presets.pop
    case ROUTER_TRANSITION_ACTIONS.TRANSITION_SLIDE_LEFT:
      return presets.slideLeft
    case ROUTER_TRANSITION_ACTIONS.TRANSITION_SLIDE_RIGHT:
      return presets.slideRight
    case ROUTER_TRANSITION_ACTIONS.TRANSITION_NO_ANIMATION:
      return presets.noAnimation
    default:
      return state
  }
}

export default routerTransition
