import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { mainYellow, shade} from '../../../colorPalette'

export const ReadPaperButton = styled.button`
  background-color: ${mainYellow};
  border-radius: 2rem;
  border: none;
  font-family: 'Helvetica-Bold';
  padding: 1rem 1.5rem;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  /* margin-top: 3.73rem; */

  &:hover{
    background-color: #2EE59D;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-5px);
  }
`

export const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Helvetica-Bold';
`

export const ExploreMapButton = styled(ReadPaperButton)`
  margin-right: 1rem;
`

export const TextSection = styled.div`
  display: flex;
  font-family: 'Helvetica-Bold', 'Source Sans Pro', sans-serif;
  font-size: 3.55rem;
  justify-content: center;
  width: 100vw;
  color: #000;

  @media screen and (max-width: 1645px) {
    text-align: center;
    font-size: 2.8rem;
    width: 100%;
  }
`

export const GridContainer = styled.div`
  background: rgb(228,230,235);
  background: linear-gradient(180deg, #fff 0%,rgb(244, 244, 244) 100%);
  min-height: 67vh;
  display: grid;
  grid-template-columns: 0.5fr 30rem 40rem 0.5fr;
  grid-template-rows: 2rem 9rem 0.85fr 2rem;
  gap: 1px 1px;
  grid-template-areas: ". . . ." 
                      "CallToAction CallToAction CallToAction CallToAction" 
                      ". PaperDownload SubmissionSpace ."
                      ". . . .";
  
  max-width: 100vw;
  overflow-x: hidden;

  @media screen and (max-width: 1570px) {
    grid-template-columns: 2rem 1fr 620px 1fr 2rem;
    grid-template-rows: 2rem 8rem 29rem 600px 2rem;
    gap: 1px 1px;
    grid-template-areas: ". . . . ." 
                        ". CallToAction CallToAction CallToAction ." 
                        ". . PaperDownload . ."
                        ". . SubmissionSpace . ."
                        ". . . . .";
  }
`

export const CallToAction = styled.div`
  grid-area: CallToAction;
  display: flex;
  place-items: center;
`

export const PaperDownload = styled.div`
  display: flex;
  grid-area: PaperDownload;

  @media screen and (max-width: 1570px) {
    place-items:center;
  }

  @media screen and (max-width: 1390px) {
    margin-top: 2rem;
  }
`

export const Blurb = styled.div`
  color: ${shade};
  text-align: right;
  font-size: 1.4em;
  padding-top: 1rem;
  font-family: 'Inter', 'Rubik', sans-serif;
  font-weight: 500;

  @media screen and (max-width: 1570px) {
    text-align: center;
    padding: 0;
  }
`

export const PDFDownload = styled.div`
  grid-area: PDFDownload;
`

export const SubmissionSpace = styled.div`
  grid-area: SubmissionSpace;

  @media screen and (max-width: 1570px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const Underline = styled.span`
  text-decoration: underline;
  margin: 0 0.5rem;
  
`

// export const Link = styled.a`
//   text-decoration: none;

//   @media screen and (max-width: 1570px) {
//     padding-bottom: 2rem;
//   }
// `

export const Map = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 6px;
`

export const RLink = styled(Link)`
  text-decoration: none;
`