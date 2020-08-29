import React, {useState} from 'react'

//styles
import {
   GridContainer,
   CureconTextSection,
   Links,
   Disclaimer,
   Emoji,
   EmojiImage,
   Link,
   NavLink,
} from './footerStyles'
import { CureconText } from '../header/headerStyles' 

const Footer = () => {

  return(
    <GridContainer>
      <Emoji>
        <EmojiImage src={require('./assets/mask.png')}/>
      </Emoji>
      <CureconTextSection>
        <CureconText>
          COVID-19 University <br/> Response Consolidation
        </CureconText>
      </CureconTextSection>
      <Links>
          <NavLink href='/map'>Map</NavLink>
          <NavLink href='/timeline'>Timeline</NavLink>
          <NavLink href='/list'>List</NavLink>
          <NavLink href='/paper'>Paper</NavLink>
          <NavLink href='/submit'>Submit</NavLink>
          <NavLink href='/about'>About Us</NavLink>
      </Links>
      <Disclaimer>
        DISCLAIMER: This project was funded by 
        <Link href='https://global.utoronto.ca/u-of-t-covid-19-student-engagement-award-winners/'> a University of Toronto research grant</Link>.  
      </Disclaimer>
    </GridContainer>
  )
}

export default Footer
