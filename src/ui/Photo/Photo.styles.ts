import styled from 'styled-components'

// HELPERS
import { fontSize, spacing } from '@ui/helpers'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
`

export const Image = styled.img`
  max-width: 100%;
`

export const Author = styled.p`
  text-align: center;
  font-size: ${fontSize('small')};
  margin-top: ${spacing('sm')};
`
