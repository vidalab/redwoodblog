import { render, cleanup } from '@testing-library/react'

import Routes from 'src/Routes'

export const renderTestRoutes = () => {
  expect(() => {
    render(<Routes />)
  }).not.toThrow()
}