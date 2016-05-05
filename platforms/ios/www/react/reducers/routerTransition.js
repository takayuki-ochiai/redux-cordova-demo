import { presets } from 'react-router-transition'
import { ROUTER_TRANSITION_ACTIONS } from '../actions/constants'

const noAnimation = {
  atEnter: {
    opacity: 1
  },
  atLeave: {
    opacity: 1
  },
  atActive: {
    opacity: 1
  }
}

const routerTransition = (state = noAnimation, action) => {
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
      return noAnimation
    default:
      return state
  }
}

export default routerTransition
