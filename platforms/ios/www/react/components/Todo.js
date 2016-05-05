import React, { Component, PropTypes } from 'react'

class Todo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li
        onClick={this.props.onClick}
        style={{
          textDecoration: this.props.completed ? 'line-through' : 'none'
        }}
      >
        {this.props.text}
      </li>
    );
  }

}


// Stateless functional components
// React 0.14からの新機能
// const Todo = ({ onClick, completed, text }) => (
//   <li
//     onClick={onClick}
//     style={{
//       textDecoration: completed ? 'line-through' : 'none'
//     }}
//   >
//     {text}
//   </li>
// )

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
