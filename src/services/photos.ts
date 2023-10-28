import axios from 'axios'
import { useQuery, UseQueryResult } from '@tanstack/react-query'

// TYPES
import { IPhoto } from '@types'

// API
import { BASEURL } from '@services/api'

export const getPhotosList = async (): Promise<IPhoto[]> => {
  const { data } = await axios.get(`${BASEURL}/v2/list?page=1&limit=20`)
  return data
}

export const useGetPhotosList = (): UseQueryResult<IPhoto[]> => {
  return useQuery<IPhoto[]>({
    queryKey: ['GetAllPeople'],
    queryFn: () => getPhotosList(),
    refetchOnWindowFocus: false,
  })
}
