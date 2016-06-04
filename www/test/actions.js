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
    const firstText = 'First Todo'

    const firstResultAction = addTodo(firstText)
    expect(firstResultAction.type).equal(TODO_ACTIONS.ADD_TODO)
    expect(firstResultAction.payload.id).equal(0)
    expect(firstResultAction.payload.text).equal('First Todo')

    const secondText = 'Second Todo'

    const secondResultAction = addTodo(secondText)
    expect(secondResultAction.type).equal(TODO_ACTIONS.ADD_TODO)
    expect(secondResultAction.payload.id).equal(1)
    expect(secondResultAction.payload.text).equal('Second Todo')
  })

  it('setVisibilityFilter', () => {
    const filter = TODO_FILETER_ACTIONS.SHOW_ALL
    const resultAction = setVisibilityFilter(filter)

    expect(resultAction.type).equal(TODO_FILETER_ACTIONS.SET_VISIBILITY_FILTER)
    expect(resultAction.payload.filter).equal(TODO_FILETER_ACTIONS.SHOW_ALL)
  })

  it('toggleTodo', () => {
    const id = 0
    const resultAction = toggleTodo(id)

    expect(resultAction.type).equal(TODO_ACTIONS.TOGGLE_TODO)
    expect(resultAction.payload.id).equal(id)
  })


  it('setRouterTransition', () => {
    const resultAction = setRouterTransition(ROUTER_TRANSITION_ACTIONS.TRANSITION_SLIDE_LEFT)
    expect(resultAction.type).equal(ROUTER_TRANSITION_ACTIONS.TRANSITION_SLIDE_LEFT)
  })

  it('toggleAddTodoComponent', () => {
    const resultAction = toggleAddTodoComponent()

    expect(resultAction.type).equal(TODO_ACTIONS.TOGGLE_ADD_TODO_COMPONENT)
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
