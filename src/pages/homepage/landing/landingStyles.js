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


// export const GridContainer = styled.div`
//   background-color: ${landingBlack};
//   min-height: 65vh;
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr 1fr;
//   grid-template-rows: 0.75fr 1fr 1fr;
//   gap: 1px 1px;
//   grid-template-areas: "CallToAction CallToAction CallToAction CallToAction" "PaperDownload PaperDownload SubmissionSpace SubmissionSpace" "PaperDownload PaperDownload SubmissionSpace SubmissionSpace";
// `

export const GridContainer = styled.div`
  background-color: ${landingBlack};
  min-height: 65vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 0.75fr 1fr 1fr;
  gap: 1px 1px;
  grid-template-areas: "CallToAction CallToAction CallToAction" "PaperDownload PaperDownload SubmissionSpace" "PaperDownload PaperDownload SubmissionSpace";
`

export const CallToAction = styled.div`
  grid-area: CallToAction;
  display: flex;
  place-items: center;
`

export const PaperDownload = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 1px 1px;
  grid-template-areas: "Blurb Blurb PDFDownload PDFDownload" "Blurb Blurb PDFDownload PDFDownload" "Blurb Blurb PDFDownload PDFDownload" "ButtonsContainer ButtonsContainer ButtonsContainer ButtonsContainer";
  grid-area: PaperDownload;
`

export const Blurb = styled.div`
  grid-area: Blurb;
`

export const PDFDownload = styled.div`
  grid-area: PDFDownload;
`

export const ButtonsContainer = styled.div`
  grid-area: ButtonsContainer;
`

export const SubmissionSpace = styled.div`
  grid-area: SubmissionSpace;
  border-left: 1px solid white;

  /* &:after{
    position: absolute;
    content: "";
    top: 15rem;
    left: 0;
    right: 0;
    z-index: 55555;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
    -webkit-filter: blur(25px);
    filter: blur(25px);
    background: -webkit-gradient(linear, right top, left top, from(#6501DE), color-stop(#FF5770), to(#6501DE));
    background: linear-gradient(to left, #6501DE, #FF5770, #6501DE);
    background-size: 200% 200%;
    -webkit-animation: animateGlow 1s linear infinite;
    animation: animateGlow 1s linear infinite;

    @-webkit-keyframes animateGlow {
      0% {
        background-position: 0% 50%; }
      100% {
        background-position: 200% 50%; }
    }

    @keyframes animateGlow {
      0% {
        background-position: 0% 50%; }
      100% {
        background-position: 200% 50%; } }
      }
  } */

`