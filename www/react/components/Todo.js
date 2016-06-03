import React, { Component, PropTypes } from 'react'
import { ListItem } from 'material-ui/List'
import styles from '../../stylesheet/todoList.css'

class Todo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.item}>
        <ListItem
          onClick={this.props.onClick}
          style={{
            textDecoration: this.props.completed ? 'line-through' : 'none'
          }}
          primaryText={this.props.text}
          secondaryTextLines={1}
        />
      </div>
    )
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
