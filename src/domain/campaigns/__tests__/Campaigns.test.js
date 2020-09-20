import React from 'react'
import Campaigns from '../Campaigns'
import { shallow, mount } from 'enzyme';
import "whatwg-fetch";
import { renderHook } from "@testing-library/react-hooks";
import fetchMock from "fetch-mock";
import { act } from "react-test-renderer";

describe('testing the campaigns component', () => {
  let wrapper 

  beforeEach(() => {
    wrapper = shallow(<Campaigns />); 
  })

  it('shallow loads the component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('can load some campaigns into the state', () => {
    const fakeAPIResponse = 'example response'
  })

})

describe("API call campaigns", () => {
  beforeAll(() => {
    global.fetch = fetch;
  });
  afterAll(() => {
    fetchMock.restore();
  });

  it("testing the API call", async () => {
    // const { result } = renderHook(() => Campaigns());
    // fetchMock.mock("test.com", 500);
    // await act(async () => {
    //   result.current.callApi("test.com");
    // });
    // expect(result.current.data).toBe(null);
    // expect(result.current.error).toBe(true);
  });
});