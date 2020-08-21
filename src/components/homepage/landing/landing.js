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
    PaperPreview
} from './landingStyles'
import './searchStyles.css';

const Landing = ({}) => {
  return(

    <Layout>
      <Left>
      
        How well did your school respond to COVID-19?

        <Subtext>
          subtext blah blah blah blah blah blah
        </Subtext>
        
        <ReadPaperButton>
          READ
        </ReadPaperButton>
        
        <img src='../../../../public/examplePDF.png' alt='PDF'></img>
      
      </Left>

      <Right>
        <SubmissionForm/>
      </Right>

    </Layout>
  )
}

export default Landing
