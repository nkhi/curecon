// components
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const NavigationContainer = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  min-height: 8vh;
  background-color: red;
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
  font-size: 1.2em;
  font-family: 'BioRhyme', serif;
  text-align: left;
  line-height: 0.95rem;
  text-decoration: none;
`

export const NavButton = styled(Button)`
  margin: 0.75rem;
`