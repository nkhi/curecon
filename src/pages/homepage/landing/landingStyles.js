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


export const GridContainer = styled.div`
  background-color: ${landingBlack};
  min-height: 45vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.75fr 1fr 1fr;
  gap: 1px 1px;
  grid-template-areas: "CallToAction CallToAction CallToAction CallToAction" "PaperDownload PaperDownload SubmissionSpace SubmissionSpace" "PaperDownload PaperDownload SubmissionSpace SubmissionSpace";
`

export const CallToAction = styled.div`
  grid-area: CallToAction;
`

export const PaperDownload = styled.div`
  grid-area: PaperDownload;
`

export const SubmissionSpace = styled.div`
  grid-area: SubmissionSpace;
  border-left: 1px solid white;
`