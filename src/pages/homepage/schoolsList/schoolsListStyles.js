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
  background: rgb(228,230,235);
  background: linear-gradient(180deg, #fff 0%,rgb(223, 224, 227) 100%);
  min-height: 50vh;
  display: grid;
  grid-template-columns: 0.25fr 1fr 1fr 1fr 1fr 1fr 0.25fr;
  grid-template-rows: 0.2fr 1fr;
  gap: 1px 12px;
  padding-bottom: 3rem;
  grid-template-areas: ". IndexSection IndexSection IndexSection IndexSection IndexSection ." ". Africa Americas Asia Europe Oceania .";
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
`

export const Asia = styled.div`
  grid-area: Asia;
`

export const Americas = styled.div`
  grid-area: Americas;
`

export const Europe = styled.div`
  grid-area: Europe;
`

export const Oceania = styled.div`
  grid-area: Oceania;
`

export const TitlePart = styled.div`
  grid-area: TitlePart;
  font-size: 2rem;
  font-weight: 600;
  color: ${shade};
  text-align: left;
  letter-spacing: 0.5px;
`

export const SearchPart = styled.div`
  grid-area: SearchPart;
  text-align: right;
`

export const Title = styled.div`
  font-size: 2rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
  font-weight: 700;
  text-align: center;
`