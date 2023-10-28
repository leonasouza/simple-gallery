// STYLES
import * as S from './Photo.styles.ts'

// TYPES
import { PhotoProps as Props } from './Photo.types'

export const Photo = ({ photo }: Props): JSX.Element => {
  return (
    <S.Container>
      <S.Image src={photo.download_url} />
      <S.Author>{photo.author}</S.Author>
    </S.Container>
  )
}
