import { Record } from 'immutable'

const _Todo = Record({
  id: null,
  text: '',
  completed: false
})

export default class Todo extends _Todo {
  static fromJS(action = {}) {
    return (new this).merge({
      id: action.id,
      text: action.text
    })
  }
}
