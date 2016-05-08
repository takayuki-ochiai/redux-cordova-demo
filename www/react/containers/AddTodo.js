import { connect } from 'react-redux'
import TodoForm from '../components/TodoForm'

const mapStateToProps = state => {
  return {
    open: state.isOpenAddTodo
  }
}

export default connect(
  mapStateToProps
)(TodoForm)
