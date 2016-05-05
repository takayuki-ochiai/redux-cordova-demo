import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'



class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  onSubmit(event) {
    event.preventDefault()
    if (!this.state.value.trim()) {
      return
    }
    this.props.dispatch(addTodo(this.state.value))
    this.setState({
      value: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <TextField value={this.state.value} onChange={this.onChange} hintText="Cordovaつーかな" />

          <RaisedButton label="Todo追加" type="submit"/>
        </form>
      </div>
    )
  }
}

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect()(AddTodo)
