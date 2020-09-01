import styled from 'styled-components';
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
`
export const CureconTextSection = styled.div`
  grid-area: CureconText;
  display: flex;
  place-items: center;
`

export const Links = styled.div`
  grid-area: Links;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-template-rows: 1fr 0.75fr 0.75fr 0.75fr 0.75fr 1fr;
  gap: 1px 1px;
  grid-template-areas: ". ." ". WorldMap" ". School" ". Submit" " . About" ". ." ;
  /* place-items: center; */
  padding: 4rem 0;
  /* justify-content: space-between; */
`

export const WorldMapLinkArea = styled.div`
  grid-area: WorldMap;
  text-align: left;
  /* place-items: center;
  justify-content: center;
  display: flex; */
`

export const SchoolLinkArea = styled.div`
  grid-area: School;
  text-align: left;
  /* place-items: center;
  justify-content: center;
  display: flex; */
`

export const AboutLinkArea = styled.div`
  grid-area: About;
  text-align: left;
  /* place-items: center;
  justify-content: center;
  display: flex; */
`

export const SubmitLinkArea = styled.div`
  grid-area: Submit;
  text-align: left;
  /* place-items: center;
  justify-content: center;
  display: flex; */
`

export const Disclaimer = styled.div`
  grid-area: Disclaimer;
  color: white;
  font-family: 'Source Sans Pro';
  text-align: left;
`

export const Emoji = styled.div`
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

export const Link = styled.a`
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

  &:hover{
    /* text-decoration: underline; */
  }
`