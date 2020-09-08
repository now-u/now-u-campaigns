import React from 'react'
import { render } from '@testing-library/react'
import ExampleComponent from '../ExampleComponent'
import { shallow, mount } from 'enzyme';

describe('Example app testing for the Example Component', () => {
  
  let wrapper;

  beforeEach(() => {
    // shallow will NOT load child components inside of the one stated,
    // but rather just the component itself.
    // use console.log(wrapper.debug) to see the tree.
    // to see how to load all components including children, use mount
    wrapper = shallow(<ExampleComponent />); 
    // wrapper = mount(<ExampleComponent />); // This will load all children components
  })

  test("testing the title", () => {
    // console.log(wrapper.debug) use this command to debug
    expect(wrapper.find('h1').text()).toContain("Example Title")
  })

  test("render a button with text of `Instagram`", () => {
    expect(wrapper.find('#social-button').text()).toBe('Instagram')
  })

  test("render the initial value of state in a div", () => {
    expect(wrapper.find('#example-state').text()).toBe("0")
  })

  test("render the click event of a button and stateChange", () => {
    wrapper.find('#click-to-change-state').simulate('click');
    expect(wrapper.find('#example-state').text()).toBe('1')
  })
})
