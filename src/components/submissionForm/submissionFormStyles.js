import styled from 'styled-components';
import { mainYellow } from '../../colorPalette'

export const GridContainer = styled.div`
  height: 34vh;
  width: 35vw;
  background: rgb(226,34,63);
  background: linear-gradient(131deg, rgba(226,34,63,1) 0%, rgba(175,5,31,1) 100%);
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
  margin: 0 3rem;
  border-radius: 2rem;
  display: grid;
  grid-template-columns: 0.15fr 1fr 1fr 0.15fr;
  grid-template-rows: 0.15fr 0.75fr 0.75fr 0.5fr 0.75fr 0.15fr;
  gap: 1px 1px;
  grid-template-areas: ". . . ." ". University University ." ". DegreeInfo DegreeInfo ." ". Rating Rating ." ". . Continue ." ". . . .";
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
  margin-right: 1rem;
  display: flex;
  align-items: center;
`

export const Major = styled.div`
  grid-area: Major;
  display: flex;
  align-items: center;
`

export const RatingSection = styled.div`
  grid-area: Rating;
  padding: 1.25rem 0;
`

export const Continue = styled.div`
  grid-area: Continue;
  display: flex;
  justify-content: center;
`

export const DataPrivacyStatement = styled.div`
  grid-area: DataPrivacyStatement;
`

export const Input = styled.input`
  width: 100%;
  background-color: #990b20;
  color: white;
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