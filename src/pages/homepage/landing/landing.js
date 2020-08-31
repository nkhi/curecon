import React from 'react'

// components
import SubmissionForm from '../../../components/submissionForm'

//styles
import {
    ReadPaperButton,
    TextSection,
    PaperPreview,
    GridContainer,
    CallToAction,
    PaperDownload,
      Blurb,
      PDFDownload,
      ButtonsContainer,
    SubmissionSpace
} from './landingStyles'

const Landing = ({}) => (
  <GridContainer>

    <CallToAction>
      <TextSection>      
        How did your school respond to the COVID-19 pandemic?
      </TextSection>
    </CallToAction>

    <PaperDownload>
      <PDFDownload>
        <PaperPreview src={require('./assets/examplePDF.png')} alt='PDF' />
      </PDFDownload>
      <Blurb>
        BLUEBouwbwubgiau ebgliug
      </Blurb>
      <ButtonsContainer>
        <ReadPaperButton>
          READ
        </ReadPaperButton>
      </ButtonsContainer>
    </PaperDownload>

    <SubmissionSpace>
      <SubmissionForm/>
    </SubmissionSpace>

  </GridContainer>
)

export default Landing
