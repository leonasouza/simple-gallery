import styled from 'styled-components'

// HELPERS
import { color, fontSize, spacing } from '@ui/helpers'

export const Container = styled.header`
  display: flex;
  align-items: flex-end;
  height: 100px;
  background-color: ${color('default-200')};
  color: ${color('neutral-700')};
`

export const Title = styled.h1`
  font-weight: 200;
  font-size: ${fontSize('biggest')};
  margin: ${spacing('md')};
`

export const By = styled.p`
  margin: 0 ${spacing('xxs')} ${spacing('xxs')} auto;
`
