// components
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const NavigationContainer = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  height: 8vh;
  background-color: red;
`
export const Chunk = styled.div`
  display: flex;
  place-items: center;
  padding: 0 2rem;
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 2rem;
`

export const CureconText = styled.a`
  font-weight: 600;
  font-size: 1.2em;
  font-family: 'Roboto'; 
`

export const NavButton = styled(Button)`
  margin: 0.75rem;
`