import React from 'react'

// components
import SubmissionForm from '../../submissionForm'

//styles
import {
    Layout,
    Left,
    Right,
    Subtext,
    ReadPaperButton,
    TextSection,
    PaperPreview
} from './landingStyles'
import './searchStyles.css';

const Landing = ({}) => {
  return(

    <Layout>
      <Left>
        <TextSection>      
          How well did your school respond to COVID-19?
          <Subtext> subtext blah blah blah blah blah blah </Subtext>
        </TextSection>
        
        <ReadPaperButton>
          READ
        </ReadPaperButton>
        
        <PaperPreview src={require('./assets/examplePDF.png')} alt='PDF' />
      
      </Left>

      <Right>
        <SubmissionForm/>
      </Right>

    </Layout>
  )
}

export default Landing
