import styled from 'styled-components'

// HELPERS
import { color } from '@ui/helpers'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  min-width: 230px;
  height: 100%;
  margin: 0 auto;

  a {
    color: ${color('default-800')};

    &:hover {
      color: ${color('default-500')};
    }
  }
`
