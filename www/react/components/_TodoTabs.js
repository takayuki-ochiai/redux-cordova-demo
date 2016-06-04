import React, { Component, PropTypes } from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import { grey700 } from 'material-ui/styles/colors'
import { setVisibilityFilter } from '../actions'
import { TODO_FILETER_ACTIONS } from '../actions/constants'

const greyBackground = { backgroundColor: grey700 }

export default class TodoTabs extends Component {
  constructor(props) {
    super(props)
    this.onActive = this.onActive.bind(this)
  }

  onActive(event) {
    this.props.onActive(event.props.filter)
  }

  render() {
    return (
      <Tabs>
        <Tab label="すべて" style={greyBackground} onActive={this.onActive} filter={TODO_FILETER_ACTIONS.SHOW_ALL} />
        <Tab label="のこり" style={greyBackground} onActive={this.onActive} filter={TODO_FILETER_ACTIONS.SHOW_ACTIVE} />
        <Tab label="完了" style={greyBackground} onActive={this.onActive} filter={TODO_FILETER_ACTIONS.SHOW_COMPLETED} />
      </Tabs>
    );
  }
}

TodoTabs.propTypes = {
  onActive: PropTypes.func.isRequired
}
