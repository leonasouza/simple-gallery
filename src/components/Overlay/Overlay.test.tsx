import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

// COMPONENTS
import { Overlay } from './Overlay'

// UTILS
import { mockedPhoto } from '@tests/handlers/photo'
import { OverlayContextProvider } from '@contexts'

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <OverlayContextProvider testPhoto={mockedPhoto}>
    {children}
  </OverlayContextProvider>
)

describe('Overlay component', () => {
  it('should render Overlay component with an image', async () => {
    render(<Overlay />, { wrapper })
    const overlay = screen.getByTestId('overlay')
    const img = screen.getByRole('img')

    expect(overlay).toBeInTheDocument()
    expect(img).toHaveAttribute('src', 'https://picsum.photos/id/0/5000/3333')
    expect(await screen.findByText('Alejandro Escamilla')).toBeInTheDocument()
  })

  it('should close Overlay component that had an image', async () => {
    render(<Overlay />, { wrapper })
    const overlay = screen.getByTestId('overlay')

    expect(overlay).toBeVisible()
    expect(screen.getByTestId('overlay:closeButton')).toBeInTheDocument()

    const closeButton = screen.getByTestId('overlay:closeButton')
    fireEvent.click(closeButton)
    await waitFor(() => {
      expect(screen.queryByTestId('overlay')).not.toBeInTheDocument()
    })
  })
})
