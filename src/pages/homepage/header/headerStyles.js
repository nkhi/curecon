// components
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { headerGray, mainWhite, jadeGreen } from '../../../colorPalette'

export const NavigationContainer = styled.div`
  display: flex;
  position: sticky;
  flex-flow: row;
  justify-content: space-between;
  min-height: 13vh;
  background-color: ${headerGray};
  max-width: 100vw;
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

export const CureconText = styled(Link)`
  font-weight: 700;
  font-size: 1.3em;
  font-family: 'Space Mono', monospace;
  font-style: normal;
  text-align: left;
  line-height: 1.5rem;
  text-decoration: none;
  color: ${mainWhite};

  &:hover {
    color: #ffdd2c;
  }
`

export const NavButton = styled(Link)`
  margin-left: 2rem;
  color: #fff;
  text-decoration: none;
  font-family: 'Rubik';
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 700;
  word-spacing: 2px;
  position: relative;
  display: flex;
  align-items: center;

  &:hover{
    color: #ffdd2c;
  }

  // &:after{
  //   content: '';
  //   height: 2px;
  //   position: absolute;
  //   bottom: -5px;
  //   left: 0;
  //   width: 0%;
  //   background: #ffdd2c;
  //   transition: 0.25s;
  // }

  // &:hover:after{
  //   width: 100%;
  // }
`

export const EmojiImage = styled.img`
  max-width: 4rem;

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

export const IconDiv = styled.div`
  margin-right: 8px;
`

export const ImageLink = styled(Link)`
  margin-right: 1rem;
`