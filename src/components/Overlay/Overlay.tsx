// STYLES
import * as S from './Overlay.styles.ts'

// CONTEXTS
import { useOverlayContext } from '@contexts/OverlayContext.tsx'

// TYPES
import { PhotoProps as Props } from './Overlay.types.ts'

// ASSETS
import CloseIcon from '@assets/icons/close.svg?react'

// UI
import { Floater } from '@ui/Floater/index.ts'

export const Overlay = ({ photo }: Props): JSX.Element => {
  const { setSelectedPhoto } = useOverlayContext()

  const handleClose = () => {
    setSelectedPhoto(null)
  }

  if (photo == null) return <></>

  return (
    <S.Container>
      <Floater handleClick={handleClose}>
        <CloseIcon />
      </Floater>
      <S.Image src={photo.download_url} />
      <S.Author>{photo.author}</S.Author>
    </S.Container>
  )
}
