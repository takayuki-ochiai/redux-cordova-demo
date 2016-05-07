import { connect } from 'react-redux'
import { setRouterTransition } from '../actions'
import _NavLink from '../components/_NavLink'

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setRouterTransition(ownProps.transitionActionType))
    }
  }
}

const NavLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(_NavLink)

export default NavLink
