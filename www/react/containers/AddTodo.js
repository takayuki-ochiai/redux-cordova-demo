import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import TodoForm from '../components/TodoForm'
import { toggleAddTodoComponent, addTodo } from '../actions'

const mapStateToProps = state => {
  return {
    open: state.isOpenAddTodo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTapCloseIcon: () => {
      dispatch(toggleAddTodoComponent())
    },
    onTapDoneIconSuccess: value => {
      dispatch(addTodo(value))
      dispatch(push('/'))
      dispatch(toggleAddTodoComponent())
    },
    onTapDoneIconFailure: () => {
      dispatch(toggleAddTodoComponent())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm)
