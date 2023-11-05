import axios from 'axios'
import {
  InfiniteData,
  UseInfiniteQueryResult,
  useInfiniteQuery,
} from '@tanstack/react-query'

// TYPES
import { IPhoto } from '@types'

// API
import { BASEURL } from '@services/api'

interface RequestProps {
  pageParam: number
}

const STARTING_PAGE = 2

export const getPhotosList = async ({
  pageParam = STARTING_PAGE,
}: RequestProps): Promise<IPhoto[]> => {
  const { data } = await axios.get(
    `${BASEURL}/v2/list?page=${pageParam}&limit=20`
  )
  return data
}

export const useGetPhotosList = (): UseInfiniteQueryResult<
  InfiniteData<IPhoto[], unknown>,
  Error
> => {
  const PAGES_LIMIT = 50 // 1000 resultados na API, 20 resultados por página

  return useInfiniteQuery({
    queryKey: ['GetAllPhotos'],
    queryFn: ({ pageParam }) => getPhotosList({ pageParam }),
    initialPageParam: STARTING_PAGE,
    getNextPageParam: (_lastPage, allPages) => {
      return allPages.length < PAGES_LIMIT
        ? allPages.length + STARTING_PAGE
        : undefined
    },
    refetchOnWindowFocus: false,
  })
}
