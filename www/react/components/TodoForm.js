import React, { Component, PropTypes } from 'react'
import { spring, Motion } from 'react-motion'
import { push } from 'react-router-redux'

import TextField from 'material-ui/TextField'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import ActionDone from 'material-ui/svg-icons/action/done'

import { addTodo, toggleAddTodoComponent } from '../actions'
import styles from '../../stylesheet/todoForm.css'

function handleTouchTap() {
  alert('onTouchTap triggered on the title component');
}

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onTapCloseIcon = this.onTapCloseIcon.bind(this)
    this.onTapDoneIcon = this.onTapDoneIcon.bind(this)
  }

  onChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  onTapCloseIcon() {
    this.props.dispatch(toggleAddTodoComponent())
  }

  onTapDoneIcon() {
    // Todoを追加することができるか確認する
    // できるようだったら
    // Todo追加する
    // Todo画面へページ遷移する
    // TodoFormを消す
    if (this.state.value.trim()) {
      this.props.dispatch(addTodo(this.state.value))
      this.setState({
        value: ''
      })
      this.props.dispatch(push('/'))
    }

    // できなかったらFormを消すだけ
    this.props.dispatch(toggleAddTodoComponent())
  }

  render() {
    return (
      <Motion style={{y: spring(this.props.open ? 0 : 100)}}>
        {({y}) =>
          <div className={styles.wrapper} >
            <div className={styles.container} style={{
              WebkitTransform: `translate3d(0, ${y}%, 0)`,
              transform: `translate3d(0, ${y}%, 0)`
            }} >

              <AppBar
                title={<span>Todo追加</span>}
                onTitleTouchTap={handleTouchTap}
                iconElementLeft={<IconButton onTouchTap={this.onTapCloseIcon}><NavigationClose /></IconButton>}
                iconElementRight={<IconButton onTouchTap={this.onTapDoneIcon}><ActionDone /></IconButton>}
              />
              <TextField value={this.state.value} onChange={this.onChange} hintText="Todoを入力してください" />
            </div>
          </div>
        }
      </Motion>
    )
  }
}

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
}

export default AddTodo
