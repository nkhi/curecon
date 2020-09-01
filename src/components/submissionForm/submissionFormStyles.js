import styled from 'styled-components';
import { mainYellow } from '../../colorPalette'

//icons
import FaceIcon from '@material-ui/icons/Face';

export const GridContainer = styled.div`
  height: 34vh;
  width: 35vw;
  background: rgb(226,34,63);
  background: linear-gradient(145deg, rgba(226,34,63,1) 0%, rgba(175,5,31,1) 100%);
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
  margin: 0 3rem;
  border-radius: 2rem;
  display: grid;
  grid-template-columns: 0.15fr 1fr 1fr 0.15fr;
  grid-template-rows: 0.15fr 1.25fr 1.25fr 1fr 1fr 0.15fr;
  gap: 1px 1px;
  grid-template-areas: ". . . ." ". University University ." ". DegreeInfo DegreeInfo ." " Rating Rating Rating Rating" ". Disclaimer Continue ." ". . . .";
`

export const University = styled.div`
  grid-area: University;
  display: flex;
  align-items: center;
`

export const DegreeInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 1px 5px;
  grid-template-areas: "Year Major";
  grid-area: DegreeInfo;
`

export const Year = styled.div`
  grid-area: Year;
  /* margin-right: 2.1rem; MEDIA QUERY*/
  display: flex;
  align-items: center;
`

export const Major = styled.div`
  grid-area: Major;
  /* margin-right: 2.1rem; MEDIA QUERY*/
  display: flex;
  align-items: center;
`

export const RatingSection = styled.div`
  grid-area: Rating;
  padding: 1.25rem 0;
  /* background-color: #990b20; */
  background-color: #e82744;
`

export const Continue = styled.div`
  grid-area: Continue;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Disclaimer = styled.div`
  grid-area: Disclaimer;
  display: grid;
  grid-template-columns: 0.25fr 1fr;
  grid-template-rows: 1fr;
  gap: 1px 1px;
  grid-template-areas: "IconSpace TextDisclaimer";
`

export const IconSpace = styled.div`
  grid-area: IconSpace;
  display: flex;
  place-items: center;
  justify-content: center;
`

export const TextDisclaimer = styled.div`
  grid-area: TextDisclaimer;
  display: flex;
  place-items: center;
`

export const Input = styled.input`
  width: 100%;
  background-color: #990b20;
  /* color: white;
  font-family: 'Helvetica-Bold'; */
  /* border: 1px solid #c6332c; */
  border: none;
  border-radius: 10px;
  height: 4rem;
  padding: 0 1rem;
`

export const ContinueButton = styled.button`
  background-color: ${mainYellow};
  border-radius: 2rem;
  border: none;
  font-family: 'Helvetica-Bold';
  padding: 1.5rem 2rem;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  height: 1rem;

  &:hover{
    background-color: #2EE59D;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-5px);
  }
`

export const Label = styled.div`
  font-size: 0.8em;
  text-transform: uppercase;
  text-align: left;
`

export const DisclaimerText = styled.div`
  font-size: 0.8em;
`

export const Link = styled.a`
  text-decoration: none;
  color: ${mainYellow};
  font-weight: 700;

  &:hover{
    text-decoration: underline;
  }
`

export const Face = styled(FaceIcon)`
  color: #990b20;
  font-size: 2rem !important;
`