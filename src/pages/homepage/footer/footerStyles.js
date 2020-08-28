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
  grid-template-columns: 0.25fr 0.15fr 1fr 1fr 0.25fr;
  grid-template-rows: 0.25fr 1fr 1fr 1fr 0.5fr;
  gap: 1px 1px;
  grid-template-areas: ". . . . ." ". Emoji CureconText Links ." ". Emoji CureconText Links ." ". Emoji CureconText Links ." ". Disclaimer Disclaimer Disclaimer .";
  background-color: ${headerGray};
  min-height: 35vh;
`
export const CureconTextSection = styled.div`
  grid-area: CureconText;
  display: flex;
  place-items: center;
`

export const Links = styled.div`
  grid-area: Links;
  display: flex;
  place-items: center;
  padding: 2rem;
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
  max-width: 8rem;
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

export const ListItem = styled.div`
  list-style-type: none;
  margin: 0 0.5rem;
`

export const Link = styled.a`
  color: white;

  &:hover{
    color: #ffdd2c;
  }
`