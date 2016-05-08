import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Tabs, Tab } from 'material-ui/Tabs'
import { grey700 } from 'material-ui/styles/colors'
import { setVisibilityFilter } from '../actions'
import { TODO_FILETER_ACTIONS } from '../actions/constants'

const greyBackground = { backgroundColor: grey700 }

// stateを聴講しているわけではないし、コンポーネントとしても十分小さいので現状はContainerとComponentは分けない
// 今後Componentが肥大化して見通しが悪くなった場合は分離する
class TodoTabs extends Component {
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
        <Tab label="すべて" style={greyBackground} onActive={this.onActive} filter={TODO_FILETER_ACTIONS.SHOW_ALL} />
        <Tab label="のこり" style={greyBackground} onActive={this.onActive} filter={TODO_FILETER_ACTIONS.SHOW_ACTIVE} />
        <Tab label="完了" style={greyBackground} onActive={this.onActive} filter={TODO_FILETER_ACTIONS.SHOW_COMPLETED} />
      </Tabs>
    );
  }
}

TodoTabs.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect()(TodoTabs)
