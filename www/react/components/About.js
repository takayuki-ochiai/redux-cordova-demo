// modules/About.js
import React, { Component }  from 'react'

class About extends Component {
   constructor(props) {
     super(props);
   }

  render() {
    return (
      <div style={this.props.style} >
        <h2>About</h2>
      </div>
    )
  }
}

export default About;
