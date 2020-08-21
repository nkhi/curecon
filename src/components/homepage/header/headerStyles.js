// components
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { mainBlue, mainWhite } from '../../../colorPalette'

export const NavigationContainer = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  min-height: 10vh;
  background-color: ${mainBlue};
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
  /* font-family: 'BioRhyme', serif; */
  font-family: 'Space Mono', monospace;
  font-style: italic;
  text-align: left;
  line-height: 2rem;
  text-decoration: none;
  color: ${mainWhite};

  &:hover{
    font-style: normal;
  }
`

export const NavButton = styled(Button)`
  margin: 0.75rem;
  color: ${mainWhite};
`