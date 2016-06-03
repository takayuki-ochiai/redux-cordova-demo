import React from 'react'
import { shallow } from 'enzyme'
import chai from 'chai'
const expect = chai.expect
import sinon from 'sinon'

import { Tab } from 'material-ui/Tabs'

import TodoTabs from '../../react/components/_TodoTabs'
import { TODO_FILETER_ACTIONS } from '../../react/actions/constants'


describe('TodoTabs', () => {
  const onTouchTap = sinon.spy()
  const wrapper = shallow(
      <TodoTabs  dispatch={onTouchTap} />
  )
  it('正しく表示される', () => {
    expect(wrapper.find(Tab)).to.have.length(3)

    expect(wrapper.find(Tab).nodes[0].props.filter).equal(TODO_FILETER_ACTIONS.SHOW_ALL)
    expect(wrapper.find(Tab).nodes[1].props.filter).equal(TODO_FILETER_ACTIONS.SHOW_ACTIVE)
    expect(wrapper.find(Tab).nodes[2].props.filter).equal(TODO_FILETER_ACTIONS.SHOW_COMPLETED)
    expect(wrapper.find(Tab).nodes[0].props.label).equal("すべて")
    expect(wrapper.find(Tab).nodes[1].props.label).equal("のこり")
    expect(wrapper.find(Tab).nodes[2].props.label).equal("完了")

    // 単純なコンポーネントならexpect-jsxのほうがよかったかもしれないので、コメントで残しておく

    // renderer.render(
    //   <TodoTabs  />
    // )
    //
    // let resultElement = renderer.getRenderOutput()
    // let expectedElement = (
    //   <Tabs>
    //     <Tab label="すべて" style={greyBackground} onActive={function noRefCheck() {}} filter={TODO_FILETER_ACTIONS.SHOW_ALL} />
    //     <Tab label="のこり" style={greyBackground} onActive={function noRefCheck() {}} filter={TODO_FILETER_ACTIONS.SHOW_ACTIVE} />
    //     <Tab label="完了" style={greyBackground} onActive={function noRefCheck() {}} filter={TODO_FILETER_ACTIONS.SHOW_COMPLETED} />
    //   </Tabs>
    // )
    //
    // expect(resultElement).toEqualJSX(expectedElement)
  })
})
