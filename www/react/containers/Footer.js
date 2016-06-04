import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Tabs, Tab } from 'material-ui/Tabs'
import ActionHome from 'material-ui/svg-icons/action/home'
import ActionHelp from 'material-ui/svg-icons/action/help'
import ContentAdd from 'material-ui/svg-icons/content/create'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import styles from '../../stylesheet/footer.css'
import { transitionSlideLeft, transitionSlideRight, toggleAddTodoComponent } from '../actions/'

// stateを聴講しているわけではないし、コンポーネントとしても十分小さいので現状はContainerとComponentは分けない
// 今後Componentが肥大化して見通しが悪くなった場合は分離する
class Footer extends Component {
  constructor(props) {
    super(props)
    this.onActiveHomeTab = this.onActiveHomeTab.bind(this)
    this.onActiveHelpTap = this.onActiveHelpTap.bind(this)
    this.onTouchTapFab = this.onTouchTapFab.bind(this)
  }

  onActiveHomeTab(event) {
    this.props.onActiveHomeTab(event.props.path)
  }

  onActiveHelpTap(event) {
    this.props.onActiveHelpTap(event.props.path)
  }

  onTouchTapFab() {
    this.props.onTouchTapFab()
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
          <Tab icon={<ActionHome />} onActive={this.onActiveHomeTab} path="/" />
          <Tab icon={<ActionHelp />} onActive={this.onActiveHelpTap} path="/about" />
        </Tabs>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onActiveHomeTab: path => {
      dispatch(transitionSlideLeft(path))
    },
    onActiveHelpTap: path => {
      dispatch(transitionSlideRight(path))
    },
    onTouchTapFab: () => {
      dispatch(toggleAddTodoComponent())
    }
  }
}

Footer.propTypes = {
  onActiveHomeTab: PropTypes.func.isRequired,
  onActiveHelpTap: PropTypes.func.isRequired,
  onTouchTapFab: PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(Footer)
