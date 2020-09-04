import styled from 'styled-components';
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

  &:hover{
    background-color: #2EE59D;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-5px);
  }
`

export const ExploreMapButton = styled(ReadPaperButton)`
  margin-right: 1rem;
`

export const TextSection = styled.div`
  display: flex;
  font-family: 'Helvetica-Bold', 'Source Sans Pro', sans-serif;
  font-size: 3.5rem;
  justify-content: center;
  width: 100vw;
  color: ${shade};
`

export const GridContainer = styled.div`
  background: rgb(228,230,235);
  background: linear-gradient(180deg, #fff 0%,rgb(223, 224, 227) 100%);
  /* min-height: 67vh; */
  display: grid;
  grid-template-columns: 0.5fr 30rem 40rem 0.5fr;
  grid-template-rows: 2rem 10rem 0.85fr 2rem;
  gap: 1px 1px;
  grid-template-areas: ". . . ." 
                      "CallToAction CallToAction CallToAction CallToAction" 
                      ". PaperDownload SubmissionSpace ."
                      ". . . .";

/* @media screen and (max-width: 1460px) {
    background: red;
} */
`

export const CallToAction = styled.div`
  grid-area: CallToAction;
  display: flex;
  place-items: center;
`

export const PaperDownload = styled.div`
  display: flex;
  grid-area: PaperDownload;
`

export const Blurb = styled.div`
  color: ${shade};
  text-align: right;
  font-size: 1.5em;

`

export const PDFDownload = styled.div`
  grid-area: PDFDownload;
`

export const SubmissionSpace = styled.div`
  grid-area: SubmissionSpace;
  /* border-left: 1px solid ${shade}; */
`

export const Underline = styled.span`
  text-decoration: underline;
  margin: 0 0.5rem;
`