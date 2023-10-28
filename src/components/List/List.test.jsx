import { render, screen } from '@testing-library/react'
import { describe, it } from 'vitest'

// COMPONENTS
import { List } from './List'

describe('Header component', () => {
  it('should render List component', async () => {
    render(<List />)
    expect(
      await screen.getByText(
        'Calm down. Breathe. Relax. Scroll slowly and enjoy the moment.'
      )
    ).toBeInTheDocument()
  })
})
