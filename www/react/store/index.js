import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import { hashHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'


import todoApp from '../reducers'

const loggerMiddleware = createLogger()

export default createStore(
  todoApp,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware, // neat middleware that logs actions
    routerMiddleware(hashHistory)
  )
)
