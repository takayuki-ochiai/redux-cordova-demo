import { List } from 'immutable'
import Todo from './entities/Todo'
import { TODO_ACTIONS } from '../actions/constants'

const initialStateList = List([])

const todo = (state, action) => {
  switch (action.type) {
    case TODO_ACTIONS.ADD_TODO:
      return Todo.fromJS({
        id: action.id,
        text: action.text
      })
    case TODO_ACTIONS.TOGGLE_TODO:
      if (state.id !== action.id) {
        return state
      }
      return state.set('completed', !state.completed)

    default:
      return state
  }
}

const todos = (state = initialStateList, action) => {
  switch (action.type) {
    case TODO_ACTIONS.ADD_TODO:
      return state.push(todo(undefined, action))
    case TODO_ACTIONS.TOGGLE_TODO:
      return state.map( t =>
        todo(t, action)
      )
    default:
      return state;
  }
}

export default todos;
