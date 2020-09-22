import styled from 'styled-components';
import {shade, mainGreen} from '../../../../colorPalette'

import ExploreIcon from '@material-ui/icons/Explore';
import TransitEnterexitIcon from '@material-ui/icons/TransitEnterexit';

export const Container = styled.div`
  line-height: 1em;
`

export const LocationLabel = styled.div`
  font-size: 1em;
  color: #403e3e;
`

export const LocationIcon = styled(ExploreIcon)`
  font-size: 16px !important;
  margin-right: 4px;
`

export const Section = styled.div`
  display: flex;
  place-items: center;
`

export const Location = styled(Section)`
  padding-top: 0.2rem;
`

export const NameLabel = styled.h2`
  line-height: 1.4;
  color: #000;
  margin: 0.5rem 0;
  font-size: 1.3rem;
`

export const Link = styled.a`
  text-decoration: none;
  color: #000;

  &:hover{
    text-decoration: underline;
  }
`

export const SectionRow = styled(Section)`
  margin: 0.5rem 0;
`

export const LeaveIcon = styled(TransitEnterexitIcon)`
  font-size: 16px !important;
  margin-left: 2px;
  transform: rotate(180deg);
  display: inline-block;
`

export const DataLabel = styled.div`
  background: ${shade};
  color: white;
  border-radius: 5px;
  padding: 0.25rem 0.5rem;
  font-weight: 700;
  margin-right: 4px;
  width: ${ ({width}) => width ? `${width}px` : ''};
`

export const RowContent = styled.div`
  color: #000;
`

export const SeeMoreButton = styled.div`
  background: ${mainGreen};
  padding: 0.25rem 0.5rem;
  border-radius: 5px; 
  font-size: 1.5em;
`