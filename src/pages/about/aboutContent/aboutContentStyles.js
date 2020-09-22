import styled from 'styled-components';
import { mainWhite, shade } from '../../../colorPalette'

export const Layout = styled.div`
  height: 100vw;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr 2fr;
  gap: 1px 1px;
  grid-template-areas: "Title" "Rest";
  background: linear-gradient(180deg, #fff 0%,rgb(223, 224, 227) 100%);
`

export const TitleSection = styled.div`
  grid-area: Title;
  /* display: flex;
  justify-content: center;
  place-items: center;
  flex-flow: column; */
`

export const MeetTheTeam = styled.div`
  grid-area: Rest;
  display: grid;
  grid-template-columns: 5rem 1fr 1fr 1fr 5rem;
  grid-template-rows: 0.75fr 4fr 4fr 4fr 0.5fr;
  gap: 3rem 2rem;
  grid-template-areas: ". Banner Banner Banner ." ". A B C ." ". D E F ." ". G H . ." " . . . . .";
`


export const Nikhi = styled.div`
  grid-area: A;
  border: 1px solid black;
  border-radius: 15px;
  background: ${shade};
`

export const Zain = styled(Nikhi)`
  grid-area: B;
`

export const Emily = styled(Nikhi)`
  grid-area: C;
`

export const Marium = styled(Nikhi)`
  grid-area: D;
`

export const Gautier = styled(Nikhi)`
  grid-area: E;
`

export const Sagar = styled(Nikhi)`
  grid-area: F;
`

export const Martina = styled(Nikhi)`
  grid-area: G;
`

export const Uhhhhh = styled(Nikhi)`
  grid-area: H;
`

export const Banner = styled.div`
 grid-area: Banner;
`

export const TitlePart = styled.div`
  display: flex;
  justify-content: center;
  font-size: 5em;
  font-family: 'Merriweather', serif;
  font-weight: 700;
  padding: 3rem;
`

export const SubtitlePart = styled.div`
  font-size: 1.5em;
  font-family: 'Rubik';
  text-align: center;
  padding: 0 20rem;
`