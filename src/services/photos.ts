import axios from 'axios'
import { useQuery, UseQueryResult } from '@tanstack/react-query'

// TYPES
import { IPhoto } from '@types'

// API
import { BASEURL } from '@services/api'

interface RequestProps {
  page: number
}

export const getPhotosList = async ({
  page,
}: RequestProps): Promise<IPhoto[]> => {
  const { data } = await axios.get(`${BASEURL}/v2/list?page=${page}&limit=20`)
  return data
}

export const useGetPhotosList = ({
  page,
}: RequestProps): UseQueryResult<IPhoto[]> => {
  return useQuery<IPhoto[]>({
    queryKey: ['GetAllPeople'],
    queryFn: () => getPhotosList({ page }),
    refetchOnWindowFocus: false,
  })
}
