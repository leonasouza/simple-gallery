import React, { useCallback } from 'react'

// SERVICES
import { useGetPhotosList } from '@services/photos.ts'

// STYLES
import * as S from './List.styles.ts'

// UI
import { Photo } from '@ui'

export const List = (): JSX.Element => {
  const { data, isError, isFetching, isFetchingNextPage, fetchNextPage } =
    useGetPhotosList()

  const handleNextPage = () => {
    fetchNextPage()
  }

  const triggerRef = useCallback((trigger: HTMLDivElement) => {
    if (trigger == null) return

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        handleNextPage()
        observer.unobserve(trigger)
      }
    })

    observer.observe(trigger)
  }, [])

  const Shimmers = (): JSX.Element => (
    <S.ShimmersList data-testid='photoShimmer'>
      <Photo isShimmer />
      <Photo isShimmer />
    </S.ShimmersList>
  )

  return (
    <S.Container>
      <S.Title>
        Calm down. Breathe. Relax. Scroll slowly and enjoy the moment.
      </S.Title>

      {isFetching && <Shimmers />}
      {isError && 'Error loading data'}

      <S.List>
        {data?.pages.map((page, pageIndex) => (
          <React.Fragment key={pageIndex}>
            {page.map((photo, photoIndex) => (
              <Photo
                key={photo.id}
                photo={photo}
                ref={photoIndex === page.length - 4 ? triggerRef : undefined}
              />
            ))}
          </React.Fragment>
        ))}
      </S.List>

      {isFetchingNextPage && <Shimmers />}
    </S.Container>
  )
}
