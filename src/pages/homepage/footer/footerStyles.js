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
  min-height: 40vh;
`
export const CureconTextSection = styled.div`
  grid-area: CureconText;
  display: flex;
  place-items: center;
`

export const Links = styled.div`
  grid-area: Links;
`

export const Disclaimer = styled.div`
  grid-area: Disclaimer;
`

export const Emoji = styled.div`
  grid-area: Emoji;
  place-items: center;
  display: flex;
`

export const EmojiImage = styled.img`
  max-width: 8rem;
  margin-right: 1rem;

  /* Stolen from create-react-app rotate lol */
  &:hover{

    @keyframes App-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    @media (prefers-reduced-motion: no-preference) {
      animation: App-logo-spin 2s linear;
  }

  }
`