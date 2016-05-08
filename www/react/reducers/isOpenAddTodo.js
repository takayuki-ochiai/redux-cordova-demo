import { TODO_ACTIONS } from '../actions/constants'

const isOpenAddTodo = (state = false, action) => {
  if (action.type === TODO_ACTIONS.TOGGLE_ADD_TODO_COMPONENT) {
    return !state
  }
  return state
}

export default isOpenAddTodo
