import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import styles from '../../stylesheet/index.css'

export default class _NavLink extends Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    this.props.onClick()
  }

  render() {
    return <Link {...this.props} activeClassName={styles.active} onClick={this.onClick} />
  }
}

_NavLink.propTypes = {
  onClick: PropTypes.func,
  transitionActionType: PropTypes.string
}
