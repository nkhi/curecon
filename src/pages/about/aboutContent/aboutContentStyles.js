import styled from 'styled-components';
import { mainWhite, shade } from '../../../colorPalette'

export const Layout = styled.div`
  background: #f1f1f1;
`

export const TitleSection = styled.div`
  height: 35rem;
  display: flex;
  justify-content: center;
  place-items: center;
  flex-flow: column;
`

export const MeetTheTeam = styled.div`
  display: grid;
  grid-template-columns: 5rem 1fr 1fr 1fr 5rem;
  grid-template-rows: 0.2fr 1fr 1fr 1fr 0.2fr;
  gap: 3rem 2rem;
  grid-template-areas: ". Banner Banner Banner ." ". A B C ." ". D E F ." ". G H . ." " . . . . .";
  /* height: 80rem; */
`


export const Nikhi = styled.div`
  grid-area: A;
  border-radius: 25px;
  padding: 15px;
  background: #fff;
  height: 28rem;
  border:1px solid #d6d6d6;
  box-shadow:0 2px 3px 0px rgba(0,0,0,0.25);
  transition: .2s all;

  /* Blue Teal Green gradient*/
  /* background: rgb(45,184,253);
  background: -moz-linear-gradient(150deg, rgba(45,184,253,1) 0%, rgba(43,213,190,1) 35%, rgba(32,227,148,1) 100%);
  background: -webkit-linear-gradient(150deg, rgba(45,184,253,1) 0%, rgba(43,213,190,1) 35%, rgba(32,227,148,1) 100%);
  background: linear-gradient(150deg, rgba(45,184,253,1) 0%, rgba(43,213,190,1) 35%, rgba(32,227,148,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#2db8fd",endColorstr="#20e394",GradientType=1); */
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

export const Abby = styled(Nikhi)`
  grid-area: H;
`

export const Banner = styled.div`
 grid-area: Banner;
 display: flex;
 justify-content: center;
 place-items: center;
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
  margin-bottom: 5rem;
`

export const SubHeading = styled.div`
  font-size: 2rem;
  font-family: 'Merriweather', serif;
  font-weight: 700;
`