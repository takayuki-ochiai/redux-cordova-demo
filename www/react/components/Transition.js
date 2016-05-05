import React,  { Component, PropTypes } from 'react';

import { RouteTransition } from 'react-router-transition';

import transitionStyle from '../../stylesheet/routerTransition.css'

// TODO presetだと右スライドと左スライドの感覚がiOSと違うっぽいので修正したほうがいい
class Transition extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
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
      </div>
    )
  }
}

Transition.propTypes = {
  location: PropTypes.object.isRequired,
  routerTransition: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
}

export default Transition;
