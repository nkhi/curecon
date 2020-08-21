// components
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { mainBlue, mainWhite, jadeGreen } from '../../../colorPalette'

export const NavigationContainer = styled.div`
  display: flex;
  position: sticky;
  flex-flow: row;
  justify-content: space-between;
  min-height: 12vh;
  background-color: ${jadeGreen};
`
export const Chunk = styled.div`
  display: flex;
  place-items: center;
  padding: 1rem 2rem;
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 2rem;
`

export const CureconText = styled.a`
  font-weight: 700;
  font-size: 1.6em;
  font-family: 'Space Mono', monospace;
  font-style: normal;
  text-align: left;
  line-height: 2rem;
  text-decoration: none;
  color: ${mainWhite};

  &:hover{
    font-style: italic;
  }
`

export const NavButton = styled(Button)`
  margin: 0.75rem;
  color: ${mainWhite};
`