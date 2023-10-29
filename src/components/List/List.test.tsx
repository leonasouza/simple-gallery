import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { HttpResponse, http } from 'msw'

// COMPONENTS
import { List } from './List'

// UTILS
import { wrapper } from '@tests/utils'
import { BASEURL } from '@services/api'
import { mockServer } from '@tests/mockServer'

const mockedListPageOne = [
  {
    id: '0',
    author: 'Alejandro Escamilla',
    width: 5000,
    height: 3333,
    url: 'https://unsplash.com/photos/yC-Yzbqy7PY',
    download_url: 'https://picsum.photos/id/0/5000/3333',
  },
  {
    id: '10',
    author: 'Paul Jarvis',
    width: 2500,
    height: 1667,
    url: 'https://unsplash.com/photos/6J--NXulQCs',
    download_url: 'https://picsum.photos/id/10/2500/1667',
  },
]

const mockedListPageTwo = [
  {
    id: '20',
    author: 'Aleks Dorohovich',
    width: 3670,
    height: 2462,
    url: 'https://unsplash.com/photos/nJdwUHmaY8A',
    download_url: 'https://picsum.photos/id/20/3670/2462',
  },
  {
    id: '21',
    author: 'Alejandro Escamilla',
    width: 3008,
    height: 2008,
    url: 'https://unsplash.com/photos/jVb0mSn0LbE',
    download_url: 'https://picsum.photos/id/21/3008/2008',
  },
]

export const listHandlers = [
  http.get(`${BASEURL}/v2/list`, () => {
    return HttpResponse.json(mockedListPageOne, {
      status: 200,
    })
  }),
]

describe('List component', () => {
  it('should render the List component with loading state', () => {
    render(<List />, { wrapper })

    expect(
      screen.getByText(
        'Calm down. Breathe. Relax. Scroll slowly and enjoy the moment.'
      )
    ).toBeInTheDocument()

    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('should render List component with error state', async () => {
    mockServer.use(
      http.get(`${BASEURL}/v2/list`, () => {
        return HttpResponse.json([], {
          status: 500,
        })
      })
    )
    render(<List />, { wrapper })

    expect(await screen.findByText(/Error/)).toBeInTheDocument()
  })

  it('should render List component with success state', async () => {
    render(<List />, { wrapper })

    expect(await screen.findByText('Alejandro Escamilla')).toBeInTheDocument()
  })

  it('should navigate to page 2', async () => {
    render(<List />, { wrapper })

    expect(await screen.findByText('Alejandro Escamilla')).toBeInTheDocument()

    const moreButton = await screen.findByText('More')
    fireEvent.click(moreButton)

    mockServer.use(
      http.get(`${BASEURL}/v2/list`, () => {
        return HttpResponse.json(mockedListPageTwo, {
          status: 200,
        })
      })
    )

    render(<List />, { wrapper })

    expect(await screen.findByText('Aleks Dorohovich')).toBeInTheDocument()
  })
})
