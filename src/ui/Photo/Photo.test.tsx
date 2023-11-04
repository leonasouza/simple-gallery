import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

// COMPONENTS
import { Photo } from './Photo'

// MOCKS
import { mockedPhoto } from '@tests/handlers/photo'

describe('Photo component', () => {
  it('should render Photo component as shimmer', async () => {
    render(<Photo isShimmer />)
    expect(screen.getByTestId('shimmerImage')).toBeInTheDocument()
    expect(screen.getByTestId('shimmerAuthor')).toBeInTheDocument()
  })

  it('should render Photo component with an image', async () => {
    render(<Photo photo={mockedPhoto} />)
    const img = screen.getByRole('img')

    expect(img).toHaveAttribute('src', 'https://picsum.photos/id/0/5000/3333')
    expect(await screen.findByText('Alejandro Escamilla')).toBeInTheDocument()
  })
})
