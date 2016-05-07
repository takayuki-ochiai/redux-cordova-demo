import React, { Component, PropTypes } from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import { setVisibilityFilter } from '../actions'
import { TODO_FILETER_ACTIONS } from '../actions/constants'

class _TodoTabs extends Component {
  constructor(props) {
    super(props)
    this.onActive = this.onActive.bind(this)
  }

  onActive(event) {
    this.props.dispatch(setVisibilityFilter(event.props.filter))
  }

  render() {
    return (
      <Tabs>
        <Tab label="すべて" onActive={this.onActive} filter={TODO_FILETER_ACTIONS.SHOW_ALL} />
        <Tab label="のこり" onActive={this.onActive} filter={TODO_FILETER_ACTIONS.SHOW_ACTIVE} />
        <Tab label="完了" onActive={this.onActive} filter={TODO_FILETER_ACTIONS.SHOW_COMPLETED} />
      </Tabs>
    );
  }
}

_TodoTabs.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default _TodoTabs
