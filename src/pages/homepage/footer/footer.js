import React, {useState} from 'react'

//styles
import {
   GridContainer,
   CureconTextSection,
   Links,
   Disclaimer,
   Emoji,
   EmojiImage,
   ListItem,
   Link
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
          <ListItem>MAP</ListItem>
          <ListItem>TIMELINE</ListItem>
          <ListItem>LIST</ListItem>
          <ListItem>PAPER</ListItem>
          <ListItem>SUBMIT</ListItem>
          <ListItem>ABOUT</ListItem>
      </Links>
      <Disclaimer>
        DISCLAIMER: This project was funded by <Link href='https://global.utoronto.ca/u-of-t-covid-19-student-engagement-award-winners/'> a University of Toronto research grant</Link>.  
        <Link href='https://github.com/nkhi/curecon'>   View the source code</Link>.
      </Disclaimer>
    </GridContainer>
  )
}

export default Footer
