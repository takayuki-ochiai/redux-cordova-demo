import React from 'react'
import { render } from 'react-dom'

// Redux 用ライブラリ
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

// ルーティング用ライブラリ
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'

// Material UI 用ライブラリ
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { indigo700, redA200 } from 'material-ui/styles/colors'

import todoApp from './reducers'
import LayoutCtrl from './containers/LayoutCtrl'
import App from './components/App'
import About from './components/About'

// Material UIを使用する場合、ReactがV1.0になるまでは必要らしい
injectTapEventPlugin()


const Layout = props => (
  <LayoutCtrl {...props} />
)

const loggerMiddleware = createLogger()



let store = createStore(
  todoApp,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware, // neat middleware that logs actions
    routerMiddleware(hashHistory)
  )
)

// immutable.jsとreact-router-reduxを併用する場合はselectLocationStateオプションに下記をセットする必要がある
// redux-immutableを使っていないのでstate.get('routing')ではない
const history = syncHistoryWithStore(hashHistory, store, {
  selectLocationState: state => state.routing.toJS()
})


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: indigo700,
    accent1Color: redA200
  }
})

render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={Layout}>
          <IndexRoute component={App} />
          <Route path="/about" component={About} />
        </Route>
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('app')
)
