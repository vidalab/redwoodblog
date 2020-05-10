import { render, cleanup } from '@testing-library/react'

import HomePage from './HomePage'
import { renderTestRoutes } from '../../TestHelper'

describe('HomePage', () => {
  beforeEach(() => {
    renderTestRoutes()
  })

  afterEach(() => {
    cleanup()
  })

  it('renders successfully', () => {
    expect(() => {
      render(<HomePage />)
    }).not.toThrow()
  })
})
