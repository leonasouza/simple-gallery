import { HttpResponse, http } from 'msw'

// SERVICES
import { BASEURL } from '@services/api'

export const mockedListPageOne = [
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

export const mockedListPageTwo = [
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
