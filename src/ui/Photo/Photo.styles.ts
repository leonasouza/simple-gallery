import styled, { css } from 'styled-components'

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

// LOADING SHIMMERS
export const ShimmerAnimation = css`
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-repeat: no-repeat;
  display: inline-block;
  position: relative;

  -webkit-animation-duration: 1s;
  -webkit-animation-fill-mode: forwards;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-name: placeholderShimmer;
  -webkit-animation-timing-function: linear;

  @-webkit-keyframes placeholderShimmer {
    0% {
      background-position: -468px 0;
    }
    100% {
      background-position: 468px 0;
    }
  }
`

export const ShimmerImage = styled.div`
  height: 380px;
  max-width: 100%;

  ${ShimmerAnimation};
`

export const ShimmerAuthor = styled.div`
  height: 20px;
  margin-top: ${spacing('sm')};
  ${ShimmerAnimation};
`
