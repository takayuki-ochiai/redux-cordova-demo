import { connect } from 'react-redux'
import _TodoTabs from '../components/_TodoTabs'
import { setVisibilityFilter } from '../actions'

const mapDispatchToProps = dispatch => {
  return {
    onActive: filter => {
      dispatch(setVisibilityFilter(filter))
    }
  }
}

export default connect(null, mapDispatchToProps)(_TodoTabs)
