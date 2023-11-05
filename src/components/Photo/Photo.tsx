import { forwardRef, LegacyRef } from 'react'

// STYLES
import * as S from './Photo.styles.ts'

// CONTEXTS
import { useOverlayContext } from '@contexts'

// TYPES
import { PhotoProps as Props } from './Photo.types.ts'
import { IPhoto } from '@types'

const PhotoComponent = (
  { isShimmer, photo }: Props,
  ref: LegacyRef<HTMLDivElement>
): JSX.Element => {
  const { setSelectedPhoto } = useOverlayContext()

  const handleClick = (photo: IPhoto) => {
    setSelectedPhoto(photo)
  }

  if (isShimmer) {
    return (
      <S.Container>
        <S.ShimmerImage data-testid='shimmerImage' />
        <S.ShimmerAuthor data-testid='shimmerAuthor' />
      </S.Container>
    )
  }

  if (photo) {
    return (
      <S.Container ref={ref} onClick={() => handleClick(photo)}>
        <S.Image src={photo.download_url} />
        <S.Author>{photo.author}</S.Author>
      </S.Container>
    )
  }

  return <></>
}

export const Photo = forwardRef(PhotoComponent)
