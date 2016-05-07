import React, { Component, PropTypes } from 'react'
import Todo from './Todo'
import { List as ImmutableList } from 'immutable'
import { List }from 'material-ui/List'

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <List>
        {this.props.todos.map(todo =>
          <Todo
            key={todo.id}
            completed={todo.completed}
            text={todo.text}
            onClick={() => this.props.onTodoClick(todo.id)}
          />
        )}
      </List>
    );
  }

}

TodoList.propTypes = {
  todos: PropTypes.instanceOf(ImmutableList),
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList;
