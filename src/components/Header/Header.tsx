// STYLES
import * as S from './Header.styles.ts'

export const Header = (): JSX.Element => {
  return (
    <S.Container>
      <S.Title>Simple Gallery</S.Title>
      <S.By>
        By{' '}
        <a href='https://www.leonasouza.dev' target='blank'>
          Leona Souza
        </a>
      </S.By>
    </S.Container>
  )
}
