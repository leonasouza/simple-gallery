// STYLES
import * as S from './Overlay.styles.ts'

// CONTEXTS
import { useOverlayContext } from '@contexts/OverlayContext.tsx'

// ASSETS
import CloseIcon from '@assets/icons/close.svg?react'

// UI
import { Floater } from '@ui/Floater/index.ts'

export const Overlay = (): JSX.Element => {
  const { selectedPhoto, setSelectedPhoto } = useOverlayContext()

  const handleClose = () => {
    setSelectedPhoto(null)
  }

  if (selectedPhoto == null) return <></>

  return (
    <S.Container data-testid='overlay'>
      <Floater testId='overlay:closeButton' handleClick={handleClose}>
        <CloseIcon />
      </Floater>
      <S.Image src={selectedPhoto.download_url} />
      <S.Author>{selectedPhoto.author}</S.Author>
    </S.Container>
  )
}
