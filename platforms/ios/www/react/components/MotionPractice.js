import React, { Component } from 'react'
import NavLink from '../containers/NavLink'
import { Motion, StaggeredMotion, spring } from 'react-motion'
import { ROUTER_TRANSITION_ACTIONS } from '../actions/constants'

class MotionPractice extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={this.props.style} >
          <h2>MotionPractice</h2>

          <StaggeredMotion
            defaultStyles={[{h: 0}, {h: 0}, {h: 0}]}
            styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
              return i === 0
                ? {h: spring(100)}
                : {h: spring(prevInterpolatedStyles[i - 1].h)}
            })}>
            {interpolatingStyles =>
              <div>
                {interpolatingStyles.map((style, i) =>
                  <div key={i} style={{border: '1px solid', height: style.h}} />)
                }
              </div>
            }
          </StaggeredMotion>

          <Motion defaultStyle={{x: 0}} style={{x: spring(10)}}>
            {value => <div>{value.x}</div>}
          </Motion>
          <NavLink transitionActionType={ROUTER_TRANSITION_ACTIONS.TRANSITION_POP} to="/" onlyActiveOnIndex={true}>Home</NavLink>
          <NavLink transitionActionType={ROUTER_TRANSITION_ACTIONS.TRANSITION_SLIDE_LEFT} to="/about">About</NavLink>
          <NavLink transitionActionType={ROUTER_TRANSITION_ACTIONS.TRANSITION_FADE} to="/motion-practice">MotionPractice</NavLink>
      </div>
    )
  }
}

export default MotionPractice;
