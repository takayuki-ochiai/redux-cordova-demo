import React, { Component, PropTypes } from 'react'
import { spring, Motion } from 'react-motion'
import { push } from 'react-router-redux'

import TextField from 'material-ui/TextField'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import ActionDone from 'material-ui/svg-icons/action/done'
import { grey800, white, grey300, red300, green300 } from 'material-ui/styles/colors'

import { addTodo, toggleAddTodoComponent } from '../actions'
import styles from '../../stylesheet/todoForm.css'

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onTapCloseIcon = this.onTapCloseIcon.bind(this)
    this.onTapDoneIcon = this.onTapDoneIcon.bind(this)
    this.onRestSlideTop = this.onRestSlideTop.bind(this)
  }

  onRestSlideTop() {
    // Todoフォームの表示アニメーションが終わった段階で入力フォームにフォーカスする
    if (this.props.open) {
      this.refs.motion.refs.textField.focus()
    }
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
      <Motion ref="motion" style={{y: spring(this.props.open ? 0 : 100)}} onRest={this.onRestSlideTop} >
        {({y}) =>
          <div className={styles.wrapper} >
            <div className={styles.container} style={{
              WebkitTransform: `translate3d(0, ${y}%, 0)`,
              transform: `translate3d(0, ${y}%, 0)`
            }} >

              <AppBar
                title={<span>Todo追加</span>}
                iconElementLeft={<IconButton onTouchTap={this.onTapCloseIcon} iconStyle={{fill: red300}}><NavigationClose /></IconButton>}
                iconElementRight={<IconButton onTouchTap={this.onTapDoneIcon} iconStyle={{fill: green300}}><ActionDone /></IconButton>}
                style={{ backgroundColor: grey800 }}
              />
              <TextField ref="textField" value={this.state.value} onChange={this.onChange} hintText="Todoを入力してください" hintStyle={{ color: grey300 }} inputStyle={{ color: white }}/>
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
