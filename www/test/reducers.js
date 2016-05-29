import chai from 'chai'
import { List, fromJS } from 'immutable'
import { LOCATION_CHANGE } from 'react-router-redux'

import Todo from '../react/reducers/entities/Todo'
import visibilityFilter from '../react/reducers/visibilityFilter'
import todos from '../react/reducers/todos'
import isOpenAddTodo from '../react/reducers/isOpenAddTodo'
import routerTransition from '../react/reducers/routerTransition'
import routing from '../react/reducers/router'

import { TODO_ACTIONS, TODO_FILETER_ACTIONS, ROUTER_TRANSITION_ACTIONS }  from '../react/actions/constants'
import { default as presets } from '../react/utils/transitionPresets'

const expect = chai.expect

describe('reducers', () => {
  describe('visibilityFilter', () => {
    const initialState = TODO_FILETER_ACTIONS.SHOW_ALL
    it('initial', () => {
      expect(visibilityFilter(undefined, {})).equal(initialState)
    })

    it('SET_VISIBILITY_FILTER', () => {
      const action = {
        type: TODO_FILETER_ACTIONS.SET_VISIBILITY_FILTER,
        filter: TODO_FILETER_ACTIONS.SHOW_COMPLETED
      }

      expect(visibilityFilter(undefined, action)).equal(TODO_FILETER_ACTIONS.SHOW_COMPLETED)
    })

    it('default', () => {
      expect(visibilityFilter(TODO_FILETER_ACTIONS.SHOW_COMPLETED, {})).equal(TODO_FILETER_ACTIONS.SHOW_COMPLETED)
      expect(visibilityFilter(TODO_FILETER_ACTIONS.SHOW_ACTIVE, {})).equal(TODO_FILETER_ACTIONS.SHOW_ACTIVE)
    })

  })

  describe('todos', () => {
    const initialStateList = List([])
    it('initial', () => {
      expect(todos(undefined, {})).equal(initialStateList)
    })

    it('ADD_TODO', () => {
      let nextTodoId = 0
      const firstText = 'First Todo'
      const firstAction = {
        type: TODO_ACTIONS.ADD_TODO,
        id: nextTodoId++,
        text: firstText
      }

      const firstTodo = Todo.fromJS({
        id: firstAction.id,
        text: firstAction.text
      })

      let resultStateList = todos(initialStateList, firstAction)
      let expectStateList = initialStateList.push(firstTodo)

      expect(resultStateList.get(0).id).equal(expectStateList.get(0).id)
      expect(resultStateList.get(0).text).equal(expectStateList.get(0).text)

      // 2つ目のTodo追加
      const secondText = 'Second Todo'
      const secondAction = {
        type: TODO_ACTIONS.ADD_TODO,
        id: nextTodoId++,
        text: secondText
      }

      const secondTodo = Todo.fromJS({
        id: secondAction.id,
        text: secondAction.text
      })

      resultStateList = todos(expectStateList, secondAction)
      expectStateList = expectStateList.push(secondTodo)

      expect(resultStateList.get(1).id).equal(expectStateList.get(1).id)
      expect(resultStateList.get(1).text).equal(expectStateList.get(1).text)
    })

    it('TOGGLE_TODO', () => {
      const firstText = 'First Todo'
      const addAction = {
        type: TODO_ACTIONS.ADD_TODO,
        id: 0,
        text: firstText
      }

      const firstTodo = Todo.fromJS({
        id: addAction.id,
        text: addAction.text
      })

      const toggleTodoAction = {
        type: TODO_ACTIONS.TOGGLE_TODO,
        id: 0
      }

      const todoList = initialStateList.push(firstTodo)
      const expectedTodoList = initialStateList.push(firstTodo.set('completed', !firstTodo.completed))
      const resultStateList = todos(todoList, toggleTodoAction)

      expect(resultStateList.get(0).id).equal(expectedTodoList.get(0).id)
      expect(resultStateList.get(0).text).equal(expectedTodoList.get(0).text)
      expect(resultStateList.get(0).completed).equal(expectedTodoList.get(0).completed)

    })

    it('default', () => {
      expect(visibilityFilter(initialStateList, { type: 'other action' })).deep.equal(initialStateList)
    })
  })

  describe('isOpenAddTodo', () => {
    const initialState = false
    it('initial', () => {
      expect(isOpenAddTodo(undefined, {})).equal(initialState)
    })

    it('TOGGLE_ADD_TODO_COMPONENT', () => {
      expect(isOpenAddTodo(false, { type: TODO_ACTIONS.TOGGLE_ADD_TODO_COMPONENT })).equal(true)
      expect(isOpenAddTodo(true, { type: TODO_ACTIONS.TOGGLE_ADD_TODO_COMPONENT })).equal(false)
    })

    it('default', () => {
      expect(isOpenAddTodo(initialState, { type: TODO_FILETER_ACTIONS.SHOW_COMPLETED })).equal(initialState)
    })
  })

  describe('routerTransition', () => {
    const initialAnimation = presets.noAnimation
    it('initial', () => {
      expect(routerTransition(undefined, {})).equal(initialAnimation)
    })

    it('TRANSITION_FADE', () => {
      expect(routerTransition(initialAnimation, { type: ROUTER_TRANSITION_ACTIONS.TRANSITION_FADE })).equal(presets.fade)
    })

    it('TRANSITION_POP', () => {
      expect(routerTransition(initialAnimation, { type: ROUTER_TRANSITION_ACTIONS.TRANSITION_POP })).equal(presets.pop)
    })

    it('TRANSITION_SLIDE_LEFT', () => {
      expect(routerTransition(initialAnimation, { type: ROUTER_TRANSITION_ACTIONS.TRANSITION_SLIDE_LEFT })).equal(presets.slideLeft)
    })

    it('TRANSITION_SLIDE_RIGHT', () => {
      expect(routerTransition(initialAnimation, { type: ROUTER_TRANSITION_ACTIONS.TRANSITION_SLIDE_RIGHT })).equal(presets.slideRight)
    })

    it('TRANSITION_NO_ANIMATION', () => {
      expect(routerTransition(initialAnimation, { type: ROUTER_TRANSITION_ACTIONS.TRANSITION_NO_ANIMATION })).equal(presets.noAnimation)
    })

    it('default', () => {
      expect(routerTransition(initialAnimation, { type: TODO_FILETER_ACTIONS.SHOW_COMPLETED })).equal(initialAnimation)
      expect(routerTransition(presets.slideLeft, { type: TODO_FILETER_ACTIONS.SHOW_COMPLETED })).equal(presets.slideLeft)
    })
  })

  describe('routing', () => {
    const initialState = fromJS({
      locationBeforeTransitions: null
    })

    it('initial', () => {
      expect(routing(undefined, {})).deep.equal(initialState)
    })

    it('LOCATION_CHANGE', () => {
      // 参考 https://github.com/reactjs/react-router-redux/blob/master/test/reducer.spec.js
      const action = {
        type: LOCATION_CHANGE,
        payload: {
          path: '/about',
          action: 'PUSH'
        }
      }

      const expectState = initialState.merge({
        locationBeforeTransitions: action.payload
      })

      expect(routing(initialState, action)).deep.equal(expectState)
    })

    it('default', () => {
      expect(routing(initialState, {})).deep.equal(initialState)
    })
  })
})
