import React from 'react'
import expect from 'expect'
import { createRenderer } from 'react-addons-test-utils'
import expectJSX from 'expect-jsx'
expect.extend(expectJSX)
import { Tabs, Tab } from 'material-ui/Tabs'
import { grey700 } from 'material-ui/styles/colors'
const greyBackground = { backgroundColor: grey700 }

import TodoTabs from '../../react/components/_TodoTabs'
import { TODO_FILETER_ACTIONS } from '../../react/actions/constants'



describe('TodoTabs', () => {
  let renderer = createRenderer()
  it('正しく表示される', () => {
    renderer.render(
      <TodoTabs  />
    )

    let resultElement = renderer.getRenderOutput()
    let expectedElement = (
      <Tabs>
        <Tab label="すべて" style={greyBackground} onActive={function noRefCheck() {}} filter={TODO_FILETER_ACTIONS.SHOW_ALL} />
        <Tab label="のこり" style={greyBackground} onActive={function noRefCheck() {}} filter={TODO_FILETER_ACTIONS.SHOW_ACTIVE} />
        <Tab label="完了" style={greyBackground} onActive={function noRefCheck() {}} filter={TODO_FILETER_ACTIONS.SHOW_COMPLETED} />
      </Tabs>
    )

    expect(resultElement).toEqualJSX(expectedElement)
  })
})
