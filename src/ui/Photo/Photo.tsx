import { forwardRef, LegacyRef } from 'react'

// STYLES
import * as S from './Photo.styles.ts'

// TYPES
import { PhotoProps as Props } from './Photo.types'

const PhotoComponent = (
  { isShimmer, photo }: Props,
  ref: LegacyRef<HTMLDivElement>
): JSX.Element => {
  if (isShimmer) {
    return (
      <S.Container>
        <S.ShimmerImage />
        <S.ShimmerAuthor />
      </S.Container>
    )
  }

  if (photo) {
    return (
      <S.Container ref={ref}>
        <S.Image src={photo.download_url} />
        <S.Author>{photo.author}</S.Author>
      </S.Container>
    )
  }

  return <></>
}

export const Photo = forwardRef(PhotoComponent)
