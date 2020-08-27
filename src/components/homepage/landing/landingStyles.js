import styled from 'styled-components';
import { landingBlack, mainYellow } from '../../../colorPalette'

export const Layout = styled.div`
  background-color: ${landingBlack};
  min-height: 45vh;
  display: flex;
`

export const Left = styled.div`
  display: flex;
  margin-left: 1rem;
`

export const Right = styled.div`
  display: flex;
  margin-right: 1rem;
`

export const Subtext = styled.div`
  font-weight: 300;
  font-size: 0.75rem;
`

export const ReadPaperButton = styled.button`
  background-color: ${mainYellow};
`

export const TextSection = styled.div`
  display: flex;
  font-family: 'Helvetica-Bold', 'Source Sans Pro', sans-serif;
  color: white;
  font-size: 3rem;
  padding: 3rem 2rem;
  height: 4rem;
  justify-content: center;
  width: 100vw;
`

export const PaperPreview = styled.img`
  width: 20%;
  height: 40%;
`