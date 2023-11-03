import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

// SERVICES
import { useGetPhotosList } from '@services/photos.ts'

// STYLES
import * as S from './List.styles.ts'

// TYPES
import { IPhoto } from '@types'

// UI
import { Photo } from '@ui'

export const List = (): JSX.Element => {
  const [photos, setPhotos] = useState<IPhoto[]>([])

  const { pathname } = useLocation()
  const navigate = useNavigate()

  const pageFromUrl = pathname !== '/' ? pathname.replace('/', '') : '1'
  const page = parseInt(pageFromUrl)

  const photosRequest = useGetPhotosList({ page: page })

  const handleNextPage = () => {
    navigate(`/${page + 1}`)
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    photosRequest.refetch()
  }, [page, photosRequest])

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
      <S.Next onClick={handleNextPage}>More</S.Next>
    </S.Container>
  )
}
