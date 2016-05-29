import chai from 'chai'
import * as Immutable from 'immutable'
import { push } from 'react-router-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { addTodo, setVisibilityFilter, toggleTodo, setRouterTransition, toggleAddTodoComponent, transition } from '../react/actions'
import { TODO_ACTIONS, TODO_FILETER_ACTIONS, ROUTER_TRANSITION_ACTIONS }  from '../react/actions/constants'
import { default as presets } from '../react/utils/transitionPresets'

const expect = chai.expect

describe('actions', () => {
  it('addTodo', () => {
    let nextTodoId = 0
    const firstText = 'First Todo'
    const firstExpectedAction = {
      type: TODO_ACTIONS.ADD_TODO,
      id: nextTodoId++,
      text: firstText
    }

    const firstResultAction = addTodo(firstText)
    expect(firstResultAction.type).equal(firstExpectedAction.type)
    expect(firstResultAction.id).equal(firstExpectedAction.id)
    expect(firstResultAction.text).equal(firstExpectedAction.text)

    const secondText = 'Second Todo'
    const secondExpectedAction = {
      type: TODO_ACTIONS.ADD_TODO,
      id: nextTodoId++,
      text: secondText
    }

    const secondResultAction = addTodo(secondText)
    expect(secondResultAction.type).equal(secondExpectedAction.type)
    expect(secondResultAction.id).equal(secondExpectedAction.id)
    expect(secondResultAction.text).equal(secondExpectedAction.text)
  })

  it('setVisibilityFilter', () => {
    const filter = TODO_FILETER_ACTIONS.SHOW_ALL
    const resultAction = setVisibilityFilter(filter)
    const expectedAction = {
      type: TODO_FILETER_ACTIONS.SET_VISIBILITY_FILTER,
      filter
    }

    expect(resultAction.type).equal(expectedAction.type)
    expect(resultAction.filter).equal(expectedAction.filter)
  })

  it('toggleTodo', () => {
    const id = 0
    const resultAction = toggleTodo(id)

    const expectedAction = {
      type: TODO_ACTIONS.TOGGLE_TODO,
      id
    }

    expect(resultAction.type).equal(expectedAction.type)
    expect(resultAction.id).equal(expectedAction.id)
  })


  it('setRouterTransition', () => {
    const resultAction = setRouterTransition(ROUTER_TRANSITION_ACTIONS.TRANSITION_SLIDE_LEFT)
    const expectedAction = {
      type: ROUTER_TRANSITION_ACTIONS.TRANSITION_SLIDE_LEFT
    }

    expect(resultAction.type).equal(expectedAction.type)
  })

  it('toggleAddTodoComponent', () => {
    const resultAction = toggleAddTodoComponent()
    const expectedAction = {
      type: TODO_ACTIONS.TOGGLE_ADD_TODO_COMPONENT
    }

    expect(resultAction.type).equal(expectedAction.type)
  })

  it('transition', () => {
    const middlewares = [ thunk ]
    const mockStore = configureMockStore(middlewares)

    const routing = Immutable.fromJS({
      locationBeforeTransitions: null
    })

    const routerTransition = presets.noAnimation

    const initialState = {
      routing,
      routerTransition
    }

    const expectedActions = [
      { type: ROUTER_TRANSITION_ACTIONS.TRANSITION_SLIDE_LEFT },
      push('/')
    ]

    const store = mockStore(initialState, expectedActions)
    store.dispatch(transition(ROUTER_TRANSITION_ACTIONS.TRANSITION_SLIDE_LEFT, '/'))

    expect(store.getActions()).deep.equal(expectedActions)
  })
})
