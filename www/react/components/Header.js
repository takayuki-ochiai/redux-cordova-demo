import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="header">
        <AppBar
          title={<span>{this.props.title}</span>}
        />
      </div>
    );
  }
}

export default Header
