// STYLES
import * as S from './Overlay.styles.ts'

// CONTEXTS
import { useOverlayContext } from '@contexts/OverlayContext.tsx'

// ASSETS
import CloseIcon from '@assets/icons/close.svg?react'

// TYPES
import { OverlayProps as Props } from '@components/Overlay/Overlay.types'

// UI
import { Floater } from '@ui/Floater/index.ts'

export const Overlay = ({ testPhoto }: Props): JSX.Element => {
  const { selectedPhoto, setSelectedPhoto } = useOverlayContext()

  const handleClose = () => {
    setSelectedPhoto(null)
  }

  const image = testPhoto ?? selectedPhoto

  if (image == null || !image) return <></>

  return (
    <S.Container data-testid='overlay'>
      <Floater testId='overlay:closeButton' handleClick={handleClose}>
        <CloseIcon />
      </Floater>
      <S.Image src={image.download_url} />
      <S.Author>{image.author}</S.Author>
    </S.Container>
  )
}
