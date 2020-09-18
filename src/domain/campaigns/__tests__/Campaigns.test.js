import React from 'react'
import Campaigns from '../Campaigns'
import { shallow, mount } from 'enzyme';

describe('testing the campaigns component', () => {
  let wrapper 

  beforeEach(() => {
    wrapper = shallow(<Campaigns />); 
  })

  it('shallow loads the component', () => {
    console.log(wrapper.state('campaigns'))
    expect(wrapper.exists()).toBe(true)
  })

  it('can load some campaigns into the state', () => {
    const fakeAPIResponse = 'example response'
  })

})