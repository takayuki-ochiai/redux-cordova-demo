import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import routerReducer from './router'
import routerTransition from './routerTransition'
import isOpenAddTodo from './isOpenAddTodo'

const todoApp = combineReducers({
  routing: routerReducer,
  todos,
  visibilityFilter,
  routerTransition,
  isOpenAddTodo
})

export default todoApp
