import { TODO_ACTIONS, TODO_FILETER_ACTIONS, ROUTER_TRANSITION_ACTIONS } from './constants'
import { push } from 'react-router-redux'


let nextTodoId = 0
export const addTodo = text => {
  return {
    type: TODO_ACTIONS.ADD_TODO,
    payload: {
      id: nextTodoId++,
      text
    }
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: TODO_FILETER_ACTIONS.SET_VISIBILITY_FILTER,
    payload: {
      filter
    }
  }
}

export const toggleTodo = id => {
  return {
    type: TODO_ACTIONS.TOGGLE_TODO,
    payload: {
      id
    }
  }
}

export const setRouterTransition = type => {
  return {
    type
  }
}

export const toggleAddTodoComponent = () => {
  return {
    type: TODO_ACTIONS.TOGGLE_ADD_TODO_COMPONENT
  }
}

// 画面遷移用のアクションを発行します
// どんなアニメーションで遷移するかと、どのURLに遷移するかを指示する２つのアクションを発行する関数です。
export const transition = (transitionType, path) => {
  return dispatch => {
    // どのアニメーションで遷移するかを決定するアクションを発行
    dispatch(setRouterTransition(transitionType))
    // どの画面に遷移するかを指示するアクションを発行
    dispatch(push(path))
  }
}

// popアニメーションで画面遷移するアクションを発行します
export const transitionPop = path => {
  return transition(ROUTER_TRANSITION_ACTIONS.TRANSITION_POP, path)
}

// fadeアニメーションで画面遷移するアクションを発行します
export const transitionFade = path => {
  return transition(ROUTER_TRANSITION_ACTIONS.TRANSITION_FADE, path)
}

// slideLeftアニメーションで画面遷移するアクションを発行します
export const transitionSlideLeft = path => {
  return transition(ROUTER_TRANSITION_ACTIONS.TRANSITION_SLIDE_LEFT, path)
}

// slideRightアニメーションで画面遷移するアクションを発行します
export const transitionSlideRight = path => {
  return transition(ROUTER_TRANSITION_ACTIONS.TRANSITION_SLIDE_RIGHT, path)
}

// アニメーションなしで画面遷移するアクションを発行します
export const transitionNoAnimation = path => {
  return transition(ROUTER_TRANSITION_ACTIONS.TRANSITION_NO_ANIMATION, path)
}
