import React from 'react'

//styles
import { 
  Layout,
  TitleSection,
  MeetTheTeam,
  Banner, 
    Nikhi,
    Zain, 
    Emily,
    Marium, 
    Gautier,
    Sagar, 
    Martina, 
    Abby,
  TitlePart,
  SubtitlePart,
  SubHeading
} from './aboutContentStyles'
import { YRPB } from './aboutContentBG'

const AboutContent = () => (
  <Layout>
    <TitleSection>
      <TitlePart>About</TitlePart>
      <SubtitlePart>The CURECON Project consolidates global university policy changes implemented in response to the COVID-19 pandemic within the initial months of the outbreak.
        <br/> <br/> Explore our findings on the interactive map or dive deeper into the data in the university information pages. 
        If you would like to share your own experiences, please use the submission form. Your responses will aid in understanding how univeristy policy influences student wellbeing, campus life, and public health outcomes.
      </SubtitlePart>
    </TitleSection>
    <MeetTheTeam>
      <Banner>
        <SubHeading> ── Meet The Team ── </SubHeading>
      </Banner>
      <Nikhi>Nikhi</Nikhi>
      <Zain>Zain</Zain>
      <Emily>Emily</Emily>
      <Marium>Marium</Marium>
      <Gautier>Gautier</Gautier>
      <Sagar>Sagar</Sagar>
      <Martina>Martina</Martina>
      <Abby>Abby</Abby>
    </MeetTheTeam>
  </Layout>
)

export default AboutContent