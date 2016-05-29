import { TODO_ACTIONS } from '../actions/constants'

const initialState = false
const isOpenAddTodo = (state = initialState, action) => {
  if (action.type === TODO_ACTIONS.TOGGLE_ADD_TODO_COMPONENT) {
    return !state
  }
  return state
}

export default isOpenAddTodo
