// modules/About.js
import React, { Component }  from 'react'
import NavLink from '../containers/NavLink'

class About extends Component {
   constructor(props) {
     super(props);
   }

  render() {
    return (
      <div style={this.props.style} >
        <h2>About</h2>
        <NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/motion-practice">MotionPractice</NavLink>
      </div>
    )
  }
}

export default About;
