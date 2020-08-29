import React from 'react'

// components
import SubmissionForm from '../../../components/submissionForm'

//styles
import {
    Layout,
    Left,
    Right,
    Subtext,
    ReadPaperButton,
    TextSection,
    PaperPreview,
    GridContainer,
    CallToAction,
    PaperDownload,
    SubmissionSpace
} from './landingStyles'
import './searchStyles.css';

const Landing = ({}) => (
  <GridContainer>
    <CallToAction>
      <TextSection>      
        How did your school respond to the COVID-19 pandemic?
      </TextSection>
    </CallToAction>
    <PaperDownload>
      <ReadPaperButton>
        READ
      </ReadPaperButton>
      
        <PaperPreview src={require('./assets/examplePDF.png')} alt='PDF' />
    
    </PaperDownload>
    <SubmissionSpace>
      <SubmissionForm/>
    </SubmissionSpace>
  </GridContainer>
)

export default Landing
