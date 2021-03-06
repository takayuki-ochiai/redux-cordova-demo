import { connect } from 'react-redux'
import Layout from '../components/Layout'

const mapStateToProps = state => {
  return {
    routerTransition: state.routerTransition
  }
}

const LayoutCtrl = connect(
  mapStateToProps
)(Layout)

export default LayoutCtrl
