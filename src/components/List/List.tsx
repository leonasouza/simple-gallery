import React from 'react'

// SERVICES
import { useGetPhotosList } from '@services/photos.ts'

// STYLES
import * as S from './List.styles.ts'

// UI
import { Photo } from '@ui'

export const List = (): JSX.Element => {
  const { data, isError, isFetching, hasNextPage, fetchNextPage } =
    useGetPhotosList()

  const handleNextPage = () => {
    fetchNextPage()
  }

  return (
    <S.Container>
      <S.Title>
        Calm down. Breathe. Relax. Scroll slowly and enjoy the moment.
      </S.Title>

      {isFetching && 'Loading...'}
      {isError && 'Error loading data'}

      <S.List>
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.map((photo) => (
              <Photo key={photo.id} photo={photo} />
            ))}
          </React.Fragment>
        ))}
      </S.List>

      {hasNextPage && <S.Next onClick={handleNextPage}>More</S.Next>}
    </S.Container>
  )
}
