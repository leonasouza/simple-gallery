import styled from 'styled-components'

// HELPERS
import { color, fontSize, spacing } from '@ui/helpers'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${color('neutral-300')};
  z-index: 2;
`

export const Image = styled.img`
  margin-top: ${spacing('xl')};
  max-width: 90%;
  max-height: 90%;
`

export const Author = styled.p`
  text-align: center;
  font-size: ${fontSize('large')};
  margin: auto 0;
`
