// components
import styled from 'styled-components';
import { headerGray, mainWhite, jadeGreen } from '../../../colorPalette'

export const NavigationContainer = styled.div`
  display: flex;
  position: sticky;
  flex-flow: row;
  justify-content: space-between;
  min-height: 15vh;
  background-color: ${headerGray};
`
export const TitleSection = styled.div`
  display: flex;
  place-items: center;
  padding: 1rem 4rem;
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 4rem;

  /* this totally works figure these out asap 
  @media screen and (min-width: 1400px) {
    display: none;
  } */
`

export const CureconText = styled.a`
  font-weight: 700;
  font-size: 1.5em;
  font-family: 'Space Mono', monospace;
  font-style: normal;
  text-align: left;
  line-height: 2rem;
  text-decoration: none;
  color: ${mainWhite};

  &:hover {
    color: #ffdd2c;
  }
`

export const NavButton = styled.a`
  margin: 0 0.75rem;
  color: ${mainWhite};
  text-decoration: none;
  font-family: 'Helvetica-Bold';
  font-size: 0.8em;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 700;
  word-spacing: 2px;

  &:hover{
    color: #ffdd2c;
  }
`

export const EmojiImage = styled.img`
  max-width: 5rem;
  margin-right: 1rem;

  &:hover{
    @keyframes App-logo-spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    @media (prefers-reduced-motion: no-preference) {
      animation: App-logo-spin 2s linear;
    }
  }
`

export const MobileMenu = styled.div`
  @media screen  and (min-width: 0px) and (max-width: 1400px){
    display: block;
  }

  @media screen and (min-width: 1401px) {
    display: none;
  }
`