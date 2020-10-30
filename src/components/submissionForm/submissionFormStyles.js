import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { mainYellow, shade, offShade, modalRed, pineGreen } from '../../colorPalette'

//icons
import FaceIcon from '@material-ui/icons/Face';
import { AboutLinkArea } from '../../pages/homepage/footer/footerStyles';

export const GridContainer = styled.div`
  height: 540px;
  max-width: 580px;
  /* background: rgb(226,34,63);
  background: linear-gradient(145deg, rgba(226,34,63,1) 0%, rgba(175,5,31,1) 100%); */
  background: rgb(253,195,45);
  background: linear-gradient(150deg, rgba(253,195,45,1) 0%, rgba(222,146,4,1) 100%);
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
  margin-left: 3rem;
  margin-bottom: 3rem;
  border: 2px solid rgba(232, 232, 232, 0.75);
  border-radius: 2rem;
  display: grid;
  grid-template-columns: 0.15fr 1fr 1fr 0.15fr;
  grid-template-rows: 2rem 1.25fr 1.25fr 1.25fr 1fr 1fr 1rem;
  gap: 1px 1px;
  grid-template-areas: ". . . ." ". University University ." ". Year Year ." ". Major Major ." " Rating Rating Rating Rating" ". Disclaimer Continue ." ". . . .";

  @media screen and (max-width: 1570px) {
    margin: 0;
  }
`

export const University = styled.div`
  grid-area: University;
  display: flex;
  flex-flow: column;
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
  flex-flow: column;
`

export const Major = styled.div`
  grid-area: Major;
  /* margin-right: 2.1rem; MEDIA QUERY*/
  display: flex;
  flex-flow: column;
`

export const RatingSection = styled.div`
  grid-area: Rating;
  display: grid;
  grid-template-columns: 0.17fr 1fr 1fr 0.15fr;
  grid-template-rows: 1fr;
  grid-template-areas: ". Content Content .";
  /* background-color: #2d2b13; */
  background-color: ${({value}) => value > 5 ? `${pineGreen}` 
                                    :  value < 5 && value !== -1 ? `${modalRed}` 
                                    : `rgb(60, 60, 58)`};
  padding: 1.25rem 0;
`

export const RatingContent = styled.div`
  grid-area: Content;
`

export const Continue = styled.div`
  grid-area: Continue;
  display: flex;
  justify-content: flex-end;
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
  background-color: #de9204;
  border: none;
  border-radius: 10px;
  height: 4rem;
  padding-left: 1rem;
  max-width: 472px;
  
  &::placeholder{
    color: ${offShade};
  }
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
  width: 9rem;

  &:hover{
    background-color: #2EE59D;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateX(5px);
  }
`

export const Label = styled.div`
  font-size: 0.8em;
  text-align: left;
  color: white;
  font-weight: 500;
  margin-bottom: 8px;
  color: ${shade};
  font-weight: 'Rubik';
`

export const DisclaimerText = styled.div`
  font-size: 0.71em;
  color: ${offShade};
`

export const Hyperlink = styled(Link)`
  text-decoration: none;
  color: ${shade};

  &:hover{
    text-decoration: underline;
  }
`

export const BlandLink = styled(Hyperlink)`
  &:hover{
    text-decoration: none;
  }
`

export const Face = styled(FaceIcon)`
  color: #865a06;
  font-size: 2rem !important;
`

export const WhiteLabel = styled(Label)`
  color: #e3e3e3;
`