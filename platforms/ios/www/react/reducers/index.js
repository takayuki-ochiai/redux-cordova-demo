import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import routerReducer from './router'
import routerTransition from './routerTransition'

const todoApp = combineReducers({
  routing: routerReducer,
  todos,
  visibilityFilter,
  routerTransition
})

export default todoApp;
