import React, {useState} from 'react'

//styles
import {
   GridContainer,
   CureconTextSection,
   Links,
   Disclaimer,
   Emoji,
   EmojiImage
} from './footerStyles'
import { CureconText } from '../header/headerStyles' 

const Footer = () => (
  <GridContainer>
    <Emoji>
      <EmojiImage id='switch' src={require('./assets/soap.png')}/>
    </Emoji>
    <CureconTextSection>
      <CureconText>
        COVID-19 University <br/> Response Consolidation
      </CureconText>
    </CureconTextSection>
    <Links>
    G:OWE:HOGBOWES
    </Links>
    <Disclaimer>
      This project was funded by the University of Toronto. Click here to see more.
    </Disclaimer>
  </GridContainer>
)

export default Footer
