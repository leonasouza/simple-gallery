import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { HttpResponse, http } from 'msw'

// COMPONENTS
import { List } from './List'

// UTILS
import { wrapper } from '@tests/utils'
import { mockServer } from '@tests/mockServer'
import { BASEURL } from '@services/api'

// MOCKS
import { mockedListPageTwo } from '@tests/handlers/list'

describe('List component', () => {
  it('should render the List component with loading state', () => {
    render(<List />, { wrapper })

    expect(
      screen.getByText(
        'Calm down. Breathe. Relax. Scroll slowly and enjoy the moment.'
      )
    ).toBeInTheDocument()

    expect(screen.getByTestId('photoShimmer')).toBeInTheDocument()
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
