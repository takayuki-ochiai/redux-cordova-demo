import { TODO_FILETER_ACTIONS } from '../actions/constants'

const initialState = TODO_FILETER_ACTIONS.SHOW_ALL
const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case TODO_FILETER_ACTIONS.SET_VISIBILITY_FILTER:
      return action.payload.filter
    default:
      return state
  }
}

export default visibilityFilter
