import React, { Component, PropTypes } from 'react'
import { spring, Motion } from 'react-motion'

import TextField from 'material-ui/TextField'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import ActionDone from 'material-ui/svg-icons/action/done'
import { grey800, white, grey300, red300, green300 } from 'material-ui/styles/colors'

import styles from '../../stylesheet/todoForm.css'

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      // TodoForm自体の表示非表示の切り替えに使う。
      // this.props.open = trueが渡ってきたタイミングで表示し,
      // this.props.open = falseでTodoフォームが下に移動するアニメーションが終了したタイミングで非表示にしたいのでstateとして切り出す
      isShow: false
    }
    this.onChange = this.onChange.bind(this)
    this.onTapCloseIcon = this.onTapCloseIcon.bind(this)
    this.onTapDoneIcon = this.onTapDoneIcon.bind(this)
    this.onRestSlideTop = this.onRestSlideTop.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open) {
      this.setState({ isShow: true })
    }
  }

  onRestSlideTop() {
    // Todoフォームの表示アニメーションが終わった段階で入力フォームにフォーカスする
    if (this.props.open) {
      this.refs.motion.refs.textField.focus()
    } else {
      this.setState({ isShow: false })
    }
  }

  onChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  onTapCloseIcon() {
    this.props.onTapCloseIcon()
  }

  onTapDoneIcon() {
    // Todoを追加することができるか確認する
    // できるようだったら
    // Todo追加する
    // Todo画面へページ遷移する
    // TodoFormを消す
    if (this.state.value.trim()) {
      let value = this.state.value
      this.setState({
        value: ''
      })
      this.props.onTapDoneIconSuccess(value)
    } else {
      // できなかったらFormを消すだけ
      this.props.onTapDoneIconFailure()
    }
  }

  render() {
    return (
      <Motion ref="motion" style={{y: spring(this.props.open ? 0 : 100, {stiffness: 220, damping: 23})}} onRest={this.onRestSlideTop} >
        {({y}) =>
          <div className={styles.wrapper} style={{display: this.state.isShow ? 'inherit' : 'none'}}>
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
  onTapCloseIcon: PropTypes.func.isRequired,
  onTapDoneIconSuccess: PropTypes.func.isRequired,
  onTapDoneIconFailure: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
}

export default AddTodo
