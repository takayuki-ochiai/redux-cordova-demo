import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Tabs, Tab } from 'material-ui/Tabs'
import ActionHome from 'material-ui/svg-icons/action/home'
import ActionHelp from 'material-ui/svg-icons/action/help'
import ContentAdd from 'material-ui/svg-icons/content/create'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import styles from '../../stylesheet/footer.css'
import { transitionNoAnimation, toggleAddTodoComponent } from '../actions/'

// stateを聴講しているわけではないし、コンポーネントとしても十分小さいので現状はContainerとComponentは分けない
// 今後Componentが肥大化して見通しが悪くなった場合は分離する
class Footer extends Component {
  constructor(props) {
    super(props)
    this.onActiveTab = this.onActiveTab.bind(this)
    this.onTouchTapFab = this.onTouchTapFab.bind(this)
  }

  onActiveTab(event) {
    this.props.dispatch(transitionNoAnimation(event.props.path))
  }

  onTouchTapFab() {
    this.props.dispatch(toggleAddTodoComponent())
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.fab}>
          <FloatingActionButton secondary={true} onTouchTap={this.onTouchTapFab} >
            <ContentAdd />
          </FloatingActionButton>
        </div>
        <Tabs>
          <Tab icon={<ActionHome />} onActive={this.onActiveTab} path="/" />
          <Tab icon={<ActionHelp />} onActive={this.onActiveTab} path="/about" />
        </Tabs>
      </div>
    );
  }
}

Footer.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect()(Footer)
