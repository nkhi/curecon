import React from 'react'

//styles
import {
   GridContainer,
    Map,
    School,
    About,
    Submit,
   Message,
   Hyperlink,
   NavLink,
   IconDiv,
   IconDiv2
} from './footerStyles'
import { CureconText } from '../header/headerStyles' 

// icons
import {
  MapPin, 
  MagnifyingGlass, 
  Megaphone, 
  Question, 
  Medal, 
  Envelope, 
  PaperPlaneTilt
} from 'phosphor-react'

const Footer = () => {
  return(
    <GridContainer>
      <Map>
        <NavLink to='/map'>
          <IconDiv><MapPin size={24} weight="duotone" /></IconDiv>
          World Map
        </NavLink>
      </Map>
      <School>
        <NavLink to='/schools'>
          <IconDiv><MagnifyingGlass size={24} weight="duotone" /></IconDiv>
          Find your school
        </NavLink>
      </School>
      <Submit>
        <NavLink to='/submit'>
           <IconDiv><Megaphone size={24} weight="duotone" /></IconDiv>
           Submit
        </NavLink>
      </Submit>
      <About>
        <NavLink to='/about'>
          <IconDiv><Question size={24} weight="duotone" /></IconDiv>
          About
        </NavLink>
      </About>
      <Message>
          <Hyperlink 
            href='https://global.utoronto.ca/u-of-t-covid-19-student-engagement-award-winners/'>
            <IconDiv2>
              <Medal size={20} weight="duotone" />
            </IconDiv2>
            This project was funded by a University of Toronto research grant. 
          </Hyperlink> 
          <Hyperlink href="mailto:hey@curecon.org?subject=Support%20Request%3A">
            <IconDiv2>
              <Envelope size={20} weight="duotone" />
            </IconDiv2>
            hey@curecon.org
          </Hyperlink> 
      </Message>
    </GridContainer>
  )
}

export default Footer
