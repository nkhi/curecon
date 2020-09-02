import styled from 'styled-components';
import { shade, mainWhite } from '../../../colorPalette'

export const Layout = styled.div`
  background-color: ${shade};
  min-height: 50vh;
`

export const Head = styled.div`
  display: flex; 
  justify-content: space-between;
  min-height: 8vh;
  font-size: 2rem;
  font-weight: 600;
  color: ${mainWhite};
  text-align: left;
  padding: 2rem;
  letter-spacing: 0.5px;
`

export const Body = styled.div`
  display: flex;
  flex-flow: column nowrap;
`

export const Region = styled.div`
  font-size: 1.25rem;
`

export const GridContainer = styled.div`
  /* background: rgb(228,230,235);
  background: linear-gradient(180deg, #fff 0%,rgb(223, 224, 227) 100%); */
  background: #aad3df;
  min-height: 30vh;
  display: grid;
  grid-template-columns: 0.25fr 1fr 1fr 1fr 1fr 1fr 0.25fr;
  grid-template-rows: 1fr;
  gap: 1px 12px;
  padding: 2rem 0;
  grid-template-areas: ". Africa Americas Asia Europe Oceania .";
`

export const IndexSection = styled.div`
  grid-area: IndexSection;
  justify-content: space-between;
  align-items: center;
  min-height: 8vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 1px 1px;
  grid-template-areas: "TitlePart TitlePart . . SearchPart";
`

export const Africa = styled.div`
  grid-area: Africa;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2.5rem 1fr;
  gap: 1rem 1px;
  grid-template-areas: "TitlePart" "DropdownPart";
`

export const Asia = styled(Africa)`
  grid-area: Asia;
`

export const Americas = styled(Africa)`
  grid-area: Americas;
`

export const Europe = styled(Africa)`
  grid-area: Europe;
`

export const Oceania = styled(Africa)`
  grid-area: Oceania;
`

export const TitlePart = styled.div`
  grid-area: TitlePart;
  display: flex;
  justify-content: center;
`

export const DropdownPart = styled.div`
  grid-area: DropdownPart;
`

export const SearchPart = styled.div`
  grid-area: SearchPart;
  text-align: right;
`

export const Title = styled.div`
  font-size: 1.15em;
  font-weight: 700;
  text-align: center;
  color: rgba(0, 0, 0, 0.87);
`

export const TitlePill = styled.div`
  background-color: #ffffff;
  width: 9rem;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  place-items: center;
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12);
`