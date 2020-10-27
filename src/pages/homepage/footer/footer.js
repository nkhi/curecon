import React from 'react'

// components
import Emoji from '../../../components/emoji'

//styles
import {
   GridContainer,
  //  CureconTextSection,
  //  Links,
    Map,
    School,
    About,
    Submit,
   Message,
  //  EmojiSection,
  //  EmojiImage,
   Hyperlink,
   NavLink,
   IconDiv
} from './footerStyles'
import { CureconText } from '../header/headerStyles' 
import {MapPin, MagnifyingGlass, Megaphone, Question, } from 'phosphor-react'

const Footer = () => {
  return(
    // <GridContainer>
    //   <EmojiSection>
    //     <EmojiImage src={require('./assets/mask.png')}/>
    //   </EmojiSection>
    //   <CureconTextSection>
    //     <CureconText>
    //       COVID-19 University <br/>Response Consolidation
    //     </CureconText>
    //   </CureconTextSection>
    //   <Links>
    //     <WorldMapLinkArea>

    //     </WorldMapLinkArea>
    //     <SchoolLinkArea>

    //     </SchoolLinkArea>
    //     <SubmitLinkArea>

    //     </SubmitLinkArea>
    //     <AboutLinkArea>

    //     </AboutLinkArea>
    //   </Links>
    //   <Disclaimer>
    //     
    //   </Disclaimer>
    // </GridContainer>
    <GridContainer>
      <Map>
        <NavLink to='/map'>
          {/* <Emoji margin symbol="📍" label="Location Pin"/>  */}
          <IconDiv><MapPin size={24} weight="duotone" /></IconDiv>
          World Map
        </NavLink>
      </Map>
      <School>
        <NavLink to='/schools'>
          {/* <Emoji margin symbol="🏫" label="School Building"/>  */}
          <IconDiv><MagnifyingGlass size={24} weight="duotone" /></IconDiv>
          Find your school
        </NavLink>
      </School>
      <Submit>
        <NavLink to='/submit'>
           {/* <Emoji margin symbol="🎙" label="Microphone"/> */}
           <IconDiv><Megaphone size={24} weight="duotone" /></IconDiv>
           Submit
        </NavLink>
      </Submit>
      <About>
        <NavLink to='/about'>
          {/* <Emoji margin symbol="🤓" label="Nerd"/>  */}
          <IconDiv><Question size={24} weight="duotone" /></IconDiv>
          About
        </NavLink>
      </About>
      <Message>
        <Hyperlink href='https://global.utoronto.ca/u-of-t-covid-19-student-engagement-award-winners/'> 🐿️ This project was funded by a University of Toronto research grant. </Hyperlink> 
        <Hyperlink href="mailto:hey@curecon.org?subject=Support%20Request%3A">📨  hey@curecon.org</Hyperlink> 
      </Message>
    </GridContainer>
  )
}

export default Footer
