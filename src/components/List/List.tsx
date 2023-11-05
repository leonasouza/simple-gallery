import React, { useCallback } from 'react'

// SERVICES
import { useGetPhotosList } from '@services/photos.ts'

// ASSETS
import ArrowUp from '@assets/icons/arrow-up.svg?react'

// STYLES
import * as S from './List.styles.ts'

// COMPONENTS
import { Photo, Overlay } from '@components'
import { Floater } from '@ui'

export const List = (): JSX.Element => {
  const { data, isLoading, isFetchingNextPage, isError, fetchNextPage } =
    useGetPhotosList()

  const handleNextPage = () => {
    fetchNextPage()
  }

  const handleScrollToTop = () => {
    window.scrollTo(0, 0)
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

      {isLoading && <Shimmers />}

      {isError && <S.Error>Error loading data</S.Error>}

      <Overlay />

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
        <Floater handleClick={handleScrollToTop} position='bottom'>
          <ArrowUp />
        </Floater>
      </S.List>

      {isFetchingNextPage && <Shimmers />}
    </S.Container>
  )
}
