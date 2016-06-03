import React from 'react'
import { shallow } from 'enzyme'
import chai from 'chai'
const expect = chai.expect
import { ListItem }from 'material-ui/List'
import sinon from 'sinon'

import Todo from '../../react/reducers/entities/Todo'
import TodoComponent from '../../react/components/Todo'

describe('Todo', () => {
  let firstTodo = Todo.fromJS({
    id: 0,
    text: 'First Todo'
  })

  it('Todoが完了していない時', () => {
    const wrapper = shallow(
      <TodoComponent
        key={firstTodo.id}
        completed={firstTodo.completed}
        text={firstTodo.text}
        onClick={function noRefCheck() {}}
      />
    )

    expect(wrapper.find(ListItem)).to.have.length(1)
    expect(wrapper.find(ListItem).node.props.style.textDecoration).equal('none')
    expect(wrapper.find(ListItem).node.props.primaryText).equal('First Todo')
  })

  it('Todoが完了した時', () => {
    firstTodo = firstTodo.set('completed', true)
    const wrapper = shallow(
      <TodoComponent
        key={firstTodo.id}
        completed={firstTodo.completed}
        text={firstTodo.text}
        onClick={function noRefCheck() {}}
      />
    )
    expect(wrapper.find(ListItem)).to.have.length(1)
    expect(wrapper.find(ListItem).node.props.style.textDecoration).equal('line-through')
    expect(wrapper.find(ListItem).node.props.primaryText).equal('First Todo')
  })

  it('Todoをクリックした時', () => {
    const onButtonClick = sinon.spy()
    const wrapper = shallow(
      <TodoComponent
        key={firstTodo.id}
        completed={firstTodo.completed}
        text={firstTodo.text}
        onClick={onButtonClick}
      />
    )

    wrapper.find(ListItem).simulate('click')
    expect(onButtonClick.calledOnce).to.equal(true)
  })
})
