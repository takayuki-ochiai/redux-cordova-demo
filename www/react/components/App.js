import React, { Component } from 'react'
import TodoTabs from '../containers/TodoTabs'
import Header from './Header'
import NavLink from '../containers/NavLink'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import { ROUTER_TRANSITION_ACTIONS } from '../actions/constants'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div style={this.props.style} >
        <Header />
        <AddTodo />
        <VisibleTodoList />
        <TodoTabs />
        <NavLink transitionActionType={ROUTER_TRANSITION_ACTIONS.TRANSITION_POP} to="/" onlyActiveOnIndex={true}>Home</NavLink>
        <NavLink transitionActionType={ROUTER_TRANSITION_ACTIONS.TRANSITION_SLIDE_LEFT} to="/about">About</NavLink>
        <NavLink transitionActionType={ROUTER_TRANSITION_ACTIONS.TRANSITION_FADE} to="/motion-practice">MotionPractice</NavLink>
      </div>
    )
  }
}

export default App
