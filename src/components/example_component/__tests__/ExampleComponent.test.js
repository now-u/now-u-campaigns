import React from 'react'
import { render } from '@testing-library/react'
import ExampleComponent from '../ExampleComponent'
import { shallow, mount } from 'enzyme';

// please see https://jest.io/docs/en for full information on testing
describe('Example app testing for the Example Component', () => {
  
  let wrapper;

  beforeEach(() => {
    // shallow will NOT load child components inside of the one stated,
    // but rather just the component itself.
    // use console.log(wrapper.debug) to see the tree.
    // to see how to load all components including children, use mount
    wrapper = shallow(<ExampleComponent />); 
    // wrapper = mount(<ExampleComponent />); // This will load all children components
    jest.useFakeTimers()
  })

  // Running all pending timers and switching to real timers using Jest
  afterEach(() => {
    jest.runOnlyPendingTimers()
    jest.useRealTimers()
  })

  test("the component renders", () => {
    expect(wrapper.exists()).toBe(true)
  })
  // Testing text
  test("testing the title", () => {
    // console.log(wrapper.debug) use this command to debug
    expect(wrapper.find('h1').text()).toContain("Example Title")
  })

  // Testing a button or ID
  test("render a button with text of `Instagram`", () => {
    expect(wrapper.find('#social-button').text()).toBe('Instagram')
  })

  // Testing state from an item
  test("render the initial value of state in a div", () => {
    expect(wrapper.find('#example-state').text()).toBe("0")
  })

  // Testing that state changes on an event
  test("render the click event of a button and stateChange", () => {
    wrapper.find('#click-to-change-state').simulate('click');
    expect(wrapper.find('#example-state').text()).toBe('1')
  })

  // Testing functions
  test("test hello world function", () => {
    // If you are using CLASS based components, use the syntax below
    // expect(wrapper.instance().sayHelloWorld()).toMatchSnapshot(); <----
    // If you are using Functional Components, test their behaviour as 
    // you wont be able to test their methods.
  })

  // Testing timers
  test("testing that timeout with fake timer", () => {
    wrapper.find("#trigger-timeout").simulate('click');
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 10000);
  })

  // Testing that preventDefault works
  test("Event is cancelled on form submit", () => {
    let prevented = false;
    wrapper.find("form").simulate('submit', {
      preventDefault: () => {
        prevented = true;
      }
    });
    expect(prevented).toBe(true)
  })


})
