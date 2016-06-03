import React from 'react'
import { shallow } from 'enzyme'
import chai from 'chai'
const expect = chai.expect
import sinon from 'sinon'

import TextField from 'material-ui/TextField'
import TodoForm from '../../react/components/TodoForm'

describe('TodoForm', () => {
  TextField.displayName = 'TextField'
  const dispatch = sinon.spy()
  it('初期表示: open=false', () => {

    const wrapper = shallow(
      <TodoForm open={false} dispatch={dispatch} />
    )

    expect(wrapper.node.props.children(100).props.style.display).equal('none')
    expect(wrapper.state().isShow).equal(false)
  })

  it('開いている状態: open=true', () => {

    const wrapper = shallow(
      <TodoForm open={false} dispatch={dispatch} />
    )

    // propsのopenにtrueが渡される
    wrapper.setProps({ open: true })

    // children(0)はMotion直下の関数yに0を渡していることと同じ
    expect(wrapper.node.props.children(0).props.style.display).equal('inherit')
    expect(wrapper.state().isShow).equal(true)
  })

  it('Todo入力が発生', () => {
    const wrapper = shallow(
      <TodoForm open={false} dispatch={dispatch} />
    )

    // propsのopenにtrueが渡される
    wrapper.setProps({ open: true })

    // wrapper.node.props.children(0)にはJSXが入っているのでさらにshallowでレンダリングする必要がある
    const motionContent = shallow(wrapper.node.props.children(0))
    // {target: {value: 'My new value'}はchangeイベントで呼び出される関数に渡されるeventのオブジェクト
    motionContent.find(TextField).simulate('change', {target: {value: '入力値'}})
    expect(wrapper.state().value).equal('入力値')

  })
})
