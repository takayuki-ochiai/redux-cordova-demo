import React from 'react'
import { shallow } from 'enzyme'
import chai from 'chai'
const expect = chai.expect
import AppBar from 'material-ui/AppBar'

import Header from '../../react/components/Header'

describe('Header', () => {
  it('正しく表示される', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper.find(AppBar)).to.have.length(1)
  })
})
