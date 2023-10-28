import { render, screen } from '@testing-library/react'
import { describe, it } from 'vitest'

// COMPONENTS
import { Header } from './Header'

describe('Header component', () => {
  it('should render Header component', async () => {
    render(<Header />)
    expect(await screen.getByText('Simple Gallery')).toBeInTheDocument()
  })

  it('should open a portfolio', async () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: 'Leona Souza' })).toHaveAttribute(
      'href',
      'https://www.leonasouza.dev'
    )
  })
})
