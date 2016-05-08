import { TODO_FILETER_ACTIONS } from '../actions/constants'

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case TODO_FILETER_ACTIONS.SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
