import React from 'react'

// components
import SubmissionForm from '../../../components/submissionForm'
import Emoji from '../../../components/emoji'

//styles
import {
    ReadPaperButton,
    TextSection,
    GridContainer,
    CallToAction,
      Underline,
    PaperDownload,
      Blurb,
    SubmissionSpace,
    ButtonContent,
    Map,
    RLink
} from './landingStyles'

const Landing = ({}) => (
  <GridContainer>

    <CallToAction>
      <TextSection>      
        How did your university respond to the COVID-19 pandemic?
      </TextSection>
    </CallToAction>

    <PaperDownload>
      <Blurb>
        The CURECON Project consolidates global university policy changes implemented in 
        response to the COVID-19 pandemic within the initial months of the outbreak. 
        <br/><br/> 
        Explore our findings on the interactive map or dive deeper into the data in the university information pages. If you would like to share your own experiences, please use the submission form. 
        Your responses will aid in understanding how univeristy policy influences student wellbeing, campus life, and public health outcomes. 
        <br/><br/>
        
        <RLink to='/map'>
          <ReadPaperButton>
            <ButtonContent>
              <Map src={require('./assets/map2.png')} alt='Map with Location Pin'/>
              Explore the Map           
            </ButtonContent> 
          </ReadPaperButton>
        </RLink>

      </Blurb>
    </PaperDownload>

    <SubmissionSpace>
      <SubmissionForm/>
    </SubmissionSpace>

  </GridContainer>
)

export default Landing
