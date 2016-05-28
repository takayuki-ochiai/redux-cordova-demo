// modules/About.js
import React, { Component }  from 'react'
import { List, ListItem } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import Divider from 'material-ui/Divider'

class About extends Component {
   constructor(props) {
     super(props);
   }

  render() {
    return (
      <div style={this.props.style} >
        <List>
          <Subheader>なにこのアプリ</Subheader>
          <ListItem
            primaryText="SPA構成で作ったHTML5ハイブリッドアプリです。ぶっちゃけただのTodo"
          />
        </List>
        <Divider />
        <List>
          <Subheader>原材料</Subheader>
          <ListItem
            primaryText="ハイブリッドアプリ用フレームワーク： Apache Cordova"
          />
          <ListItem
            primaryText="言語： ECMAScript 2015 + Babel"
          />
          <ListItem
            primaryText="ビューライブラリ： React.js"
          />
          <ListItem
            primaryText="状態管理フレームワーク： Redux"
          />

        </List>
      </div>
    )
  }

}

{/*<ListItem
  primaryText="デザインフレームワーク： Material UI"
/>
<ListItem
  primaryText="ルーティング： react-router"
/>
<ListItem
  primaryText="アニメーション： react-motion"
/>
<ListItem
  primaryText="JSビルド・ホットリロードなど： WebPack"
/>
<ListItem
  primaryText="スタイル： CSS Modules"
/>
<ListItem
  primaryText="工期： OTIのゴールデンウィーク"
/>
<ListItem
  primaryText="コスト： ぷらいすれす"
/>*/}

export default About
