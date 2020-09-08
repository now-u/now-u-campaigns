import React from 'react'
import { render } from '@testing-library/react'
import ExampleComponent from '../ExampleComponent'

describe('Counter testing', () => {
  test("renders learn react link", () => {
    const { getByText } = render(<ExampleComponent />);
    const linkElement = getByText("Example Title");
    expect(linkElement).toBeInTheDocument();
  })
})
