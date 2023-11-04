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

export const getPhotosList = async ({
  pageParam = 1,
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
    initialPageParam: 1,
    getNextPageParam: (_, allPages) => {
      return allPages.length < PAGES_LIMIT ? allPages.length + 1 : undefined
    },
    refetchOnWindowFocus: false,
  })
}
