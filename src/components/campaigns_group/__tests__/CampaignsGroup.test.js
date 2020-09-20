import React from 'react'
import CampaignsGroup from '../CampaignsGroup'
import { render, fireEvent } from '@testing-library/react'

describe('testing the campaigns group component', () => {
  let container

  const mockTitle = 'Mock Campaigns Title'

  const mockCampaigns = [
    {
      id: 1,
      title: 'An example campaign title',
      description_app: 'Mock Description',
      header_image: 'www.header_image.com',
      description_web: 'I am a web description <br> hello I am another paragraph'
    }
  ]

  const mockCampaignsEmpty = {
    title: 'an empty mock campaigns!'
  }
  
  it('renders without crashing', () => {
    container = render(<CampaignsGroup title={mockTitle} campaigns={mockCampaigns}/>)
    expect(container).toBeTruthy()
  })

  it('Shows the title on the top of the page', () => {
    const {getByRole} = render(<CampaignsGroup title={mockTitle} campaigns={mockCampaigns}/>)
    expect(getByRole('heading', {name: 'Mock Campaigns Title'})).toBeInTheDocument()
  })

})

