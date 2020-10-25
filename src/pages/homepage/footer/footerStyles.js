import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { teal, headerGray, offShade } from '../../../colorPalette'

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
  grid-template-columns: 0.5fr 1fr 1fr 1fr 1fr 0.5fr;
  grid-template-rows: 0.5fr 1fr 1fr 0.5fr;
  gap: 0px 0px;
  grid-template-areas:
    ". . . . . ."
    ". Map School Submit About ."
    ". Message Message Message Message ."
    ". . . . . .";
  background: rgb(32,32,32);
  min-height: 35vh;

  @media screen and (max-width: 915px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 0.5fr 1fr 1fr 0.5fr;
    grid-template-areas:
    " . . . . "
    " Map School Submit About"
    " Message Message Message Message"
    " . . . . ";
  }

  @media screen and (max-width: 750px) {
    min-height: 40vh;
    grid-template-columns: 0.25fr 1fr 1fr 0.25fr;
    grid-template-rows: 0.5fr 1fr 1fr 1fr 0.5fr;
    grid-template-areas:
    " . . . . "
    " . Map School . "
    " . Submit About ."
    " Message Message Message Message"
    " . . . . ";
  }

  @media screen and (max-width: 570px) {
    min-height: 45vh;
    grid-template-columns: 0.15fr 1fr 0.15fr;
    grid-template-rows: 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 1fr 0.5fr;
    grid-template-areas:
    " . . . "
    " . Map . "
    " . School ."
    " . Submit ."
    " . About ."
    " Message Message Message"
    " . . . ";
  }

`
export const CureconTextSection = styled.div`
  grid-area: CureconText;
  display: flex;
  place-items: center;
`

export const Map = styled.div`
  grid-area: Map;
  display: flex;
  place-items: center;
  justify-content: center;
`

export const School = styled.div`
  grid-area: School;
  display: flex;
  place-items: center;
  justify-content: center;
  font-size: 0.98rem;
`

export const About = styled.div`
  grid-area: About;
  display: flex;
  place-items: center;
  justify-content: center;
`

export const Submit = styled.div`
  grid-area: Submit;
  display: flex;
  place-items: center;
  justify-content: center;
`

export const Message = styled.div`
  grid-area: Message;
  color: white;
  font-family: 'Source Sans Pro';
  display: flex;
  place-items: center;
  text-align: center;
  justify-content: center;
  flex-flow: column nowrap;
  border-top: 1px solid ${offShade};

  @media screen and (max-width: 915px) {
    border: none;
  }

  @media screen and (max-width: 750px) {
    padding: 0 1.5rem;
  }
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
  text-decoration: none;
  padding: 0.25rem 0;
  font-weight: 500;
  font-family: 'Syne', monospace;

  &:hover{
    color: #ffdd2c;
  }
`

export const NavLink = styled(Link)`
  font-weight: 700;
  font-size: 0.9em;
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