import { useEffect, useState } from 'react'

// SERVICES
import { useGetPhotosList } from '@services/photos.ts'

// STYLES
import * as S from './List.styles.ts'

// TYPES
import { IPhoto } from '@types'

// UI
import { Photo } from '@ui'

export const List = (): JSX.Element => {
  const [page, setPage] = useState<number>(1)
  const [photos, setPhotos] = useState<IPhoto[]>([])

  const photosRequest = useGetPhotosList({ page })

  const handleNextPage = () => {
    setPage(page + 1)
  }

  useEffect(() => {
    photosRequest.refetch()
  }, [page])

  useEffect(() => {
    if (photosRequest.data) {
      setPhotos(photosRequest.data)
    }
  }, [photosRequest.data])

  return (
    <S.Container>
      <S.Title>
        Calm down. Breathe. Relax. Scroll slowly and enjoy the moment.
      </S.Title>
      {(photosRequest.isFetching || photosRequest.isLoading) && 'Loading...'}
      {photosRequest.isError && 'Error loading data'}
      <S.List>
        {photos.map((photo) => (
          <Photo key={photo.id} photo={photo} />
        ))}
      </S.List>
      <span onClick={handleNextPage}>Next</span>
    </S.Container>
  )
}
