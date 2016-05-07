import React, { Component } from 'react'
import TodoTabs from '../containers/TodoTabs'
import NavLink from '../containers/NavLink'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import { ROUTER_TRANSITION_ACTIONS } from '../actions/constants'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div style={this.props.style} >
        <TodoTabs />
        <AddTodo />
        <VisibleTodoList />
      </div>
    )
  }
}

export default App
