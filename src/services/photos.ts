import axios from 'axios'
import { useQuery, UseQueryResult } from '@tanstack/react-query'

// TYPES
import { Photo } from '@types'

// API
import { BASEURL } from '@services/api'

export const getPhotosList = async (): Promise<Photo[]> => {
  const { data } = await axios.get(`${BASEURL}/people`)
  return data
}

export const useGetPhotosList = (): UseQueryResult<Photo[]> => {
  return useQuery<Photo[]>({
    queryKey: ['GetAllPeople'],
    queryFn: () => getPhotosList(),
    refetchOnWindowFocus: false,
  })
}
