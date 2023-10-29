import { render, renderHook, screen, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

// COMPONENTS
import { List } from './List'

// UTILS
import { wrapper } from '@utils/tests'
import { useGetPhotosList } from '@services/photos'

const mockedList = [
  {
    id: '0',
    author: 'Alejandro Escamilla',
    width: 5000,
    height: 3333,
    url: 'https://unsplash.com/photos/yC-Yzbqy7PY',
    download_url: 'https://picsum.photos/id/0/5000/3333',
  },
  {
    id: '1',
    author: 'Alejandro Escamilla',
    width: 5000,
    height: 3333,
    url: 'https://unsplash.com/photos/LNRyGwIJr5c',
    download_url: 'https://picsum.photos/id/1/5000/3333',
  },
]

describe('Header component', () => {
  it('should render the List component with loading state', () => {
    render(<List />, { wrapper })

    vi.mock('useGetPhotosList', () => ({
      useQuery: vi.fn().mockReturnValue({
        data: {},
        isLoading: true,
      }),
    }))

    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('should render List component', async () => {
    render(<List />, { wrapper })

    const { result } = renderHook(() => useGetPhotosList(), { wrapper })
    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(
      screen.getByText(
        'Calm down. Breathe. Relax. Scroll slowly and enjoy the moment.'
      )
    ).toBeInTheDocument()
    expect(screen.getAllByText(/Alejandro Escamilla/)[0]).toBeInTheDocument()
  })
})
