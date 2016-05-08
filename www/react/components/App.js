import React, { Component } from 'react'
import TodoTabs from '../containers/TodoTabs'
import VisibleTodoList from '../containers/VisibleTodoList'




class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div style={this.props.style} >
        <TodoTabs />
        <VisibleTodoList />
      </div>
    )
  }
}

export default App
