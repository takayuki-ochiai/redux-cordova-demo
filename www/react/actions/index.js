import { TODO_ACTIONS, TODO_FILETER_ACTIONS } from './constants'

let nextTodoId = 0
export const addTodo = text => {
  return {
    type: TODO_ACTIONS.ADD_TODO,
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: TODO_FILETER_ACTIONS.SET_VISIBILITY_FILTER,
    filter
  }
}

export const toggleTodo = id => {
  return {
    type: TODO_ACTIONS.TOGGLE_TODO,
    id
  }
}

export const setRouterTransition = type => {
  return {
    type: type
  }
}
