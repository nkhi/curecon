import React from 'react'

// components
import Emoji from '../../../components/emoji'

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
   EmojiSection,
   EmojiImage,
   Hyperlink,
   NavLink,
} from './footerStyles'
import { CureconText } from '../header/headerStyles' 

const Footer = () => {
  return(
    <GridContainer>
      <EmojiSection>
        <EmojiImage src={require('./assets/mask.png')}/>
      </EmojiSection>
      <CureconTextSection>
        <CureconText>
          COVID-19 University <br/>Response Consolidation
        </CureconText>
      </CureconTextSection>
      <Links>
        <WorldMapLinkArea>
          <NavLink to='/map'>
            <Emoji margin symbol="📍" label="Location Pin"/> 
            World Map
          </NavLink>
        </WorldMapLinkArea>
        <SchoolLinkArea>
          <NavLink to='/schools'>
            <Emoji margin symbol="🏫" label="School Building"/> 
            Find your school
          </NavLink>
        </SchoolLinkArea>
        <SubmitLinkArea>
          <NavLink to='/submit'>
            <Emoji margin symbol="🎙" label="Microphone"/>
            Submit
          </NavLink>
        </SubmitLinkArea>
        <AboutLinkArea>
          <NavLink to='/about'>
            <Emoji margin symbol="🤓" label="Nerd"/> 
            About
          </NavLink>
        </AboutLinkArea>
      </Links>
      <Disclaimer>
        DISCLAIMER: This project was funded by 
        <Hyperlink href='https://global.utoronto.ca/u-of-t-covid-19-student-engagement-award-winners/'> a University of Toronto research grant</Hyperlink>.  
      </Disclaimer>
    </GridContainer>
  )
}

export default Footer
