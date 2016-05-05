import { connect } from 'react-redux'
import Transition from '../components/Transition'

const mapStateToProps = state => {
  return {
    routerTransition: state.routerTransition
  }
}

const TransitionCtrl = connect(
  mapStateToProps
)(Transition)

export default TransitionCtrl
