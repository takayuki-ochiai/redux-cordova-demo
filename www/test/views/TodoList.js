import React from 'react'
import expect from 'expect'
import { createRenderer } from 'react-addons-test-utils'
import expectJSX from 'expect-jsx'
expect.extend(expectJSX)

import { List as ImmutableList } from 'immutable'
import { List }from 'material-ui/List'

import TodoList from '../../react/components/TodoList'
import Todo from '../../react/reducers/entities/Todo'


// https://gist.github.com/mmrko/288d159a55adf1916f71
//https://github.com/tarciosaraiva/tasker-react/blob/ddc5f33502fb22a40c0fb102cde2138295446819/test/utils/specHelper.js
describe('Header', () => {
  let renderer = createRenderer()
  it('Todoがないケース', () => {
    const todos = ImmutableList([])

    renderer.render(
      <TodoList todos={todos} onClick={function noRefCheck() {}} />
    )

    let resultElement = renderer.getRenderOutput()
    let expectedElement = (
      <List>
      </List>
    )


    expect(resultElement).toEqualJSX(expectedElement)
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


    const todos = ImmutableList([]).push(firstTodo).push(secondTodo)

    renderer.render(
      <TodoList todos={todos} onClick={function noRefCheck() {}} />
    )

    let resultElement = renderer.getRenderOutput()


    let expectedElement = (
      <List>
        <Todo
          key={firstTodo.id}
          completed={firstTodo.completed}
          text={firstTodo.text}
          onClick={function noRefCheck() {}}
        />
        <Todo
          key={secondTodo.id}
          completed={secondTodo.completed}
          text={secondTodo.text}
          onClick={function noRefCheck() {}}
        />
      </List>
    )

    expect(resultElement).toEqualJSX(expectedElement)
  })
})
