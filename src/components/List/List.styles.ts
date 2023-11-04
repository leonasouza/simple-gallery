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

export const ShimmersList = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${spacing('giga')};
  margin: ${spacing('xs')} 0;
  padding-bottom: ${spacing('md')};
`

export const List = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: ${spacing('giga')};
`

export const Scroll = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  cursor: pointer;
  z-index: 1;
`
