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
  padding: 3rem 0;
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

export const Asia = styled.div`
  grid-area: Asia;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2.5rem 1fr;
  gap: 1px 1px;
  grid-template-areas: "TitlePart" "DropdownPart";
`

export const Americas = styled.div`
  grid-area: Americas;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2.5rem 1fr;
  gap: 1px 1px;
  grid-template-areas: "TitlePart" "DropdownPart";
`

export const Europe = styled.div`
  grid-area: Europe;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2.5rem 1fr;
  gap: 1px 1px;
  grid-template-areas: "TitlePart" "DropdownPart";
`

export const Oceania = styled.div`
  grid-area: Oceania;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2.5rem 1fr;
  gap: 1px 1px;
  grid-template-areas: "TitlePart" "DropdownPart";
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
  color: ${shade};
`

export const TitlePill = styled.div`
  background-color: #f2efe9;
  width: 9rem;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  place-items: center;
`