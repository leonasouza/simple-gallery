import styled from 'styled-components'

// HELPERS
import { color, spacing } from '@ui/helpers'
import { FloaterPosition } from '@ui/Floater'

type ContainerProps = {
  position: FloaterPosition
}

export const Container = styled.div<ContainerProps>`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${spacing('huge')};
  height: ${spacing('huge')};
  top: ${({ position }) => (position === 'top' ? spacing('md') : 'auto')};
  bottom: ${({ position }) => (position === 'bottom' ? spacing('md') : 'auto')};
  right: ${spacing('md')};
  background-color: ${color('neutral-400')};
  border-radius: ${spacing('giga')};
  cursor: pointer;

  svg {
    width: 80%;
    height: 80%;
  }
`
