import { useEffect, useState } from 'react'

// SERVICES
import { useGetPhotosList } from '@services/photos.ts'

// STYLES
import * as S from './List.styles.ts'

// TYPES
import { IPhoto } from '@types'
import { Photo } from '@ui/index.ts'

export const List = (): JSX.Element => {
  const [photos, setPhotos] = useState<IPhoto[]>([])

  const photosRequest = useGetPhotosList()

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
      <S.List>
        {photos.map((photo) => (
          <Photo key={photo.id} photo={photo} />
        ))}
      </S.List>
    </S.Container>
  )
}
