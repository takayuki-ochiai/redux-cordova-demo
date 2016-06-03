import React from 'react'
import { shallow } from 'enzyme'
import chai from 'chai'
const expect = chai.expect

import { List as ImmutableList } from 'immutable'
import { List }from 'material-ui/List'

import TodoList from '../../react/components/TodoList'
import Todo from '../../react/reducers/entities/Todo'

describe('TodoList', () => {
  let todos = ImmutableList([])
  Todo.displayName = 'Todo'
  it('Todoがないケース', () => {

    const wrapper = shallow(
      <TodoList todos={todos} />
    )

    expect(wrapper.find(List)).to.have.length(1)
    expect(wrapper.find('Todo')).to.have.length(0)
  })

  it('Todoが２つあるケース', () => {
    const firstTodo = Todo.fromJS({
      id: 0,
      text: 'First Todo'
    })

    const secondTodo = Todo.fromJS({
      id: 1,
      text: 'Second Todo'
    })


    todos = todos.push(firstTodo).push(secondTodo)

    const wrapper = shallow(
      <TodoList todos={todos} />
    )

    console.log(wrapper.find(List).childAt(0).node.props.text)
    expect(wrapper.find(List)).to.have.length(1)
    expect(wrapper.find(List).childAt(0).node.props.text).equal('First Todo')
    expect(wrapper.find(List).childAt(1).node.props.text).equal('Second Todo')
    expect(wrapper.find('Todo')).to.have.length(2)
  })
})
