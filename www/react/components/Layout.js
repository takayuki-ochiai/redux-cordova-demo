import React,  { Component, PropTypes } from 'react'

import { RouteTransition } from 'react-router-transition'
import Header from './Header'
import Footer from '../containers/Footer'
import AddTodo from '../containers/AddTodo'
import transitionStyle from '../../stylesheet/routerTransition.css'

class Layout extends Component {
  constructor(props) {
    super(props)
    this.pageTitle = this.pageTitle.bind(this)
  }

  pageTitle() {
    let pathName = this.props.location.pathname
    switch (true) {
      case /^\/$/.test(pathName):
        return "Todos"
      case /^\/about$/.test(pathName):
        return "About"
      default:
        return "Todos"
    }
  }

  render() {
    return (
      <div>
        <AddTodo />
        <Header title={this.pageTitle()} />
        <RouteTransition
          component={false}
          className={transitionStyle.wrapper}
          pathname={this.props.location.pathname}
          {...this.props.routerTransition}
        >
          <div className={transitionStyle.content}>
            {this.props.children}
          </div>
        </RouteTransition>
        <Footer />
      </div>
    )
  }
}


Layout.propTypes = {
  location: PropTypes.object.isRequired,
  routerTransition: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
}

export default Layout
