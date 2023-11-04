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
  const [photos, setPhotos] = useState<IPhoto[]>([])

  const { data, isError, isFetching, hasNextPage, fetchNextPage } =
    useGetPhotosList()

  const handleNextPage = () => {
    fetchNextPage()
  }

  useEffect(() => {
    if (data?.pages) {
      setPhotos(data.pages.flatMap((photo) => photo))
    }
  }, [data])

  return (
    <S.Container>
      <S.Title>
        Calm down. Breathe. Relax. Scroll slowly and enjoy the moment.
      </S.Title>

      {isFetching && 'Loading...'}
      {isError && 'Error loading data'}

      <S.List>
        {photos.map((photo) => (
          <Photo key={photo.id} photo={photo} />
        ))}
      </S.List>

      {hasNextPage && <S.Next onClick={handleNextPage}>More</S.Next>}
    </S.Container>
  )
}
