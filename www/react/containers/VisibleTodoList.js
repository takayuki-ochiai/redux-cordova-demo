import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import { TODO_FILETER_ACTIONS } from '../actions/constants'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case TODO_FILETER_ACTIONS.SHOW_ALL:
      return todos
    case TODO_FILETER_ACTIONS.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case TODO_FILETER_ACTIONS.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
  }
}

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList;
