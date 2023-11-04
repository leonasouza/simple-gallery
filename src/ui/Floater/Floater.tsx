// STYLES
import * as S from './Floater.styles.ts'

export type FloaterPosition = 'top' | 'bottom'

interface Props {
  children: React.ReactNode
  handleClick: () => void
  position?: FloaterPosition
}

export const Floater = ({ children, handleClick, position = 'top' }: Props) => {
  return (
    <S.Container position={position} onClick={() => handleClick()}>
      {children}
    </S.Container>
  )
}
