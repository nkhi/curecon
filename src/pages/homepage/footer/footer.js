import React, {useState} from 'react'

//styles
import {
   GridContainer,
   CureconTextSection,
   Links,
    WorldMapLinkArea,
    SchoolLinkArea,
    AboutLinkArea,
    SubmitLinkArea,
   Disclaimer,
   Emoji,
   EmojiImage,
   Link,
   NavLink,
} from './footerStyles'
import { CureconText } from '../header/headerStyles' 
// import { RadialBg } from './landingBG'

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
        <WorldMapLinkArea>
          <NavLink href='/map'>📍 World Map</NavLink>
        </WorldMapLinkArea>
        <SchoolLinkArea>
          <NavLink href='/schools'>🏫 Find your school</NavLink>
        </SchoolLinkArea>
        <SubmitLinkArea>
          <NavLink href='/submit'>🎙 Submit</NavLink>
        </SubmitLinkArea>
        <AboutLinkArea>
          <NavLink href='/about'>🤓 About</NavLink>
        </AboutLinkArea>
      </Links>
      <Disclaimer>
        DISCLAIMER: This project was funded by 
        <Link href='https://global.utoronto.ca/u-of-t-covid-19-student-engagement-award-winners/'> a University of Toronto research grant</Link>.  
      </Disclaimer>
    </GridContainer>
  )
}

export default Footer
