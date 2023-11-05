// STYLES
import * as S from './Floater.styles.ts'

export type FloaterPosition = 'top' | 'bottom'

interface Props {
  children: React.ReactNode
  handleClick: () => void
  position?: FloaterPosition
  testId?: string
}

export const Floater = ({
  children,
  handleClick,
  position = 'top',
  testId,
}: Props) => {
  return (
    <S.Container
      position={position}
      onClick={() => handleClick()}
      data-testid={testId || ''}
    >
      {children}
    </S.Container>
  )
}
