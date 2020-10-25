import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { teal, headerGray } from '../../../colorPalette'

export const Layout = styled.div`
  background-color: ${headerGray};
  min-height: 40vh;
  display: flex;
  flex-flow: row;
`

export const HalfScreenComp = styled.div`
  display: flex;
  min-width: 50vw;
`

export const LogoSection = styled.div`
  display:flex;
  place-items: center;
  padding-left: 10rem;
`

export const LinksSection = styled.div`
  display: flex;
  padding-right: 10rem;
`
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 0.15fr 0.15fr 1fr 1.15fr 0.15fr;
  grid-template-rows: 0.25fr 1fr 1fr 1fr 0.5fr;
  gap: 1px 1px;
  grid-template-areas: ". . . . ." ". Emoji CureconText Links ." ". Emoji CureconText Links ." ". Emoji CureconText Links ." ". Disclaimer Disclaimer Disclaimer .";
  background: rgb(32,32,32);
  min-height: 35vh;

  /* @media screen and (max-width: 909px) {
    grid-template-columns: 0.05fr 0.15fr 1fr 0.05fr;
    grid-template-rows: 0.05fr 0.25fr 0.25fr 6rem 0.05fr 0.5fr;
    gap: 1px 1px;
    grid-template-areas: ". . . ." ". Emoji CureconText ." ". Emoji CureconText ." ". Links Links ." ". . . ." ". Disclaimer Disclaimer .";
  } */
`
export const CureconTextSection = styled.div`
  grid-area: CureconText;
  display: flex;
  place-items: center;
`

export const Links = styled.div`
  grid-area: Links;
  display: grid;
  grid-template-columns: 1fr 150px 225px;
  grid-template-rows: 1fr 0.7fr 0.7fr 1fr;
  gap: 1px 1px;
  grid-template-areas: ". . ." ". WorldMap School" ". Submit About" ". . ." ;
  padding: 4rem 0;

  /* @media screen and (max-width: 909px) {
    padding: 0;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 12px 12px;
    grid-template-areas: "WorldMap School Submit About";
  } */
`

export const WorldMapLinkArea = styled.div`
  grid-area: WorldMap;
  display: flex;
  place-items: center;
`

export const SchoolLinkArea = styled.div`
  grid-area: School;
  display: flex;
  place-items: center;
`

export const AboutLinkArea = styled.div`
  grid-area: About;
  display: flex;
  place-items: center;
`

export const SubmitLinkArea = styled.div`
  grid-area: Submit;
  display: flex;
  place-items: center;
`

export const Disclaimer = styled.div`
  grid-area: Disclaimer;
  color: white;
  font-family: 'Source Sans Pro';
  text-align: left;
`

export const EmojiSection = styled.div`
  grid-area: Emoji;
  place-items: center;
  display: flex;
`

export const EmojiImage = styled.img`
  max-width: 6rem;
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

export const Hyperlink = styled.a`
  color: white;

  &:hover{
    color: #ffdd2c;
  }
`

export const NavLink = styled(Link)`
  font-weight: 700;
  font-size: 0.95em;
  letter-spacing: 1px;
  text-transform: uppercase;
  word-spacing: 2px;
  text-decoration: none;
  font-family: 'Rubik';
  color: white;

  &:hover{
    color: #ffdd2c;
  }
`

export const NavButton = styled.a`
  margin-left: 2rem;
  color: #fff;
  text-decoration: none;
  font-family: 'Rubik';
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 700;
  word-spacing: 2px;
  position: relative;

  &:hover{
    color: #ffdd2c;
  }

  &:after{
    content: '';
    height: 3px;
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0%;
    background: #ffdd2c;
    transition: 0.25s;
  }

  &:hover:after{
    width: 100%;
  }
`