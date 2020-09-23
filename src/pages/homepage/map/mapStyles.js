import styled from 'styled-components';
import { mainDark } from '../../../colorPalette'

export const Layout = styled.div`
  width: 100%;
  /* background-color: #aad3df; */
  background-color: #89c8db;
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-flow: column nowrap;
  place-items: center;
`

export const InnerSearchContainer = styled.div`
  width: 45%;
  margin-top: 2rem;
  z-index: 999999;
  margin: 2rem 5rem 0;
`

export const OuterSearchContainer = styled.div`
  width: 100%;
`