import styled from 'styled-components';
import { mainWhite } from '../../../colorPalette'

export const Layout = styled.div`
  height: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 1px 1px;
  grid-template-areas: "Title Title Title Title" "Title Title Title Title" "Rest Rest Rest Rest" "Rest Rest Rest Rest";
`

export const TitleSection = styled.div`
  grid-area: Title;
`

export const Rest = styled.div`
  grid-area: Rest;
`
