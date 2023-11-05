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
  background-color: ${color('default-300')};
  z-index: 2;
`

export const Image = styled.img`
  margin-top: ${spacing('xl')};
  max-width: 90%;
  max-height: 90%;

  @media (max-width: 850px) {
    margin-top: auto;
    max-width: 100%;
    max-height: 100%;
  }
`

export const Author = styled.p`
  text-align: center;
  font-size: ${fontSize('large')};
  font-style: italic;
  font-weight: 300;
  margin: auto 0;

  @media (max-width: 850px) {
    margin: 16px 0 auto 0;
  }
`
