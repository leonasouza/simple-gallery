import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

// COMPONENTS
import { Overlay } from './Overlay'
import { List } from '@components'

// UTILS
import { mockedPhoto } from '@tests/handlers/photo'
import { wrapper } from '@tests/utils'

describe('Overlay component', () => {
  it('should render Overlay component with an image', async () => {
    render(<Overlay testPhoto={mockedPhoto} />, { wrapper })
    const overlay = screen.getByTestId('overlay')
    const img = screen.getByRole('img')

    expect(overlay).toBeInTheDocument()
    expect(img).toHaveAttribute('src', 'https://picsum.photos/id/0/5000/3333')
    expect(await screen.findByText('Alejandro Escamilla')).toBeInTheDocument()
  })

  it('should render List component and open the overlay with an image', async () => {
    render(<List />, { wrapper })
    const author = await screen.findByText('Alejandro Escamilla')
    expect(author).toBeInTheDocument()
    fireEvent.click(author)

    const overlay = screen.getByTestId('overlay')
    expect(overlay).toBeVisible()
    const img = screen.getAllByRole('img')
    expect(img[0]).toHaveAttribute(
      'src',
      'https://picsum.photos/id/0/5000/3333'
    )
    const closeButton = screen.getByTestId('overlay:closeButton')
    expect(closeButton).toBeInTheDocument()

    fireEvent.click(closeButton)
    await waitFor(() => {
      expect(screen.queryByTestId('overlay')).not.toBeInTheDocument()
    })
  })
})
