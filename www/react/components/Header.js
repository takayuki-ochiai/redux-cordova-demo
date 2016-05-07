import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import ContentCreate from 'material-ui/svg-icons/content/create'

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppBar
        title={<span>Title</span>}
        iconElementRight={<IconButton><ContentCreate /></IconButton>}
      />
    );
  }
}

export default Header
