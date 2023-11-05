import styled, { css } from 'styled-components'

// HELPERS
import { fontSize, spacing } from '@ui/helpers'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h2`
  font-weight: 300;
  font-size: ${fontSize('regular')};
  text-align: center;
  margin: ${spacing('xxl')} auto;

  @media (max-width: 1000px) {
    margin: ${spacing('xxl')} ${spacing('xxxs')};
  }
`

export const Error = styled.p`
  font-weight: 400;
  font-size: ${fontSize('regular')};
  margin: ${spacing('xxl')} auto;
`

export const CommonListStyles = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${spacing('giga')};

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    margin: 0 ${spacing('xxxs')};
  }
`

export const ShimmersList = styled.section`
  ${CommonListStyles};
  margin: ${spacing('xs')} 0;
  padding-bottom: ${spacing('md')};
`

export const List = styled.section`
  ${CommonListStyles};
  align-items: center;
`

export const Scroll = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  cursor: pointer;
  z-index: 1;
`
