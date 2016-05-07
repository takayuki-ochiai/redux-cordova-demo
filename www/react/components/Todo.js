import React, { Component, PropTypes } from 'react'
import { ListItem }from 'material-ui/List'

class Todo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ListItem
        onClick={this.props.onClick}
        style={{
          textDecoration: this.props.completed ? 'line-through' : 'none'
        }}
        primaryText={this.props.text}
      />
    )
  }

}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
