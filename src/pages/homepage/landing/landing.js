import React from 'react'

// components
import SubmissionForm from '../../../components/submissionForm'

//styles
import {
    ReadPaperButton,
    ExploreMapButton,
    TextSection,
    PaperPreview,
    GridContainer,
    CallToAction,
      Underline,
    PaperDownload,
      Blurb,
      PDFDownload,
    SubmissionSpace,
    ButtonsContainer
} from './landingStyles'

const Landing = ({}) => (
  <GridContainer>

    <CallToAction>
      <TextSection>      
        How did <Underline> your </Underline> school respond to the COVID-19 pandemic?
      </TextSection>
    </CallToAction>

    <PaperDownload>
      <Blurb>
      The CURECON project consolidates global university policy changes implemented in response to the COVID-19 pandemic within the initial months of the outbreak. 
      <br/><br/> 
      We have created this survey to collect student testimonials that will be included on our interactive website alongside the academic policy decisions made by the various universities. Your responses will aid in providing an understanding of the impacts of COVID-19 on campus life. 
      <br/><br/>
        {/* The COVID-19 University Response Consolidation project aims to document and analyse the effects of 
        University policy responses on student well-being and public health outcomes.
        <br/> <br/>
        Read our research findings, explore the interactive map, and if you feel so inclined, share your experiences!
        <br/> <br/> */}
        <ButtonsContainer>
          <a href='/map'>
            <ReadPaperButton>
              📍 Explore the Map            
            </ReadPaperButton>
          </a>

          {/* <a href='/paper'>
            <ReadPaperButton>
              📑 Read the Report
            </ReadPaperButton>
          </a> */}
        </ButtonsContainer>

      </Blurb>
    </PaperDownload>

    <SubmissionSpace>
      <SubmissionForm/>
    </SubmissionSpace>

  </GridContainer>
)

export default Landing
