import React from 'react'
import expect from 'expect'
import { createRenderer } from 'react-addons-test-utils'
import expectJSX from 'expect-jsx'
expect.extend(expectJSX)

import AppBar from 'material-ui/AppBar'

import Header from '../../react/components/Header'

describe('Header', () => {
  let renderer = createRenderer()
  it('正しく表示される', () => {
    renderer.render(
      <Header title="test" />
    )

    let resultElement = renderer.getRenderOutput()
    let expectedElement = (
      <div id="header">
        <AppBar
          title={<span>test</span>}
        />
      </div>
    )


    expect(resultElement).toEqualJSX(expectedElement)

  })


})
