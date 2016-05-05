import React, { Component, PropTypes } from 'react'
import Todo from './Todo'
import { List } from 'immutable'

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.todos.map(todo =>
          <Todo
            key={todo.id}
            completed={todo.completed}
            text={todo.text}
            onClick={() => this.props.onTodoClick(todo.id)}
          />
        )}
      </ul>
    );
  }

}

TodoList.propTypes = {
  todos: PropTypes.instanceOf(List),
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList;
