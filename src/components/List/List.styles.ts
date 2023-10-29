import styled from 'styled-components'

// HELPERS
import { fontSize, spacing } from '@ui/helpers'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h2`
  font-weight: 300;
  font-size: ${fontSize('regular')};
  margin: ${spacing('xxl')} auto;
`

export const List = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${spacing('giga')};
`
