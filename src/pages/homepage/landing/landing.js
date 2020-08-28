import React from 'react'

// components
// import SubmissionForm from '../../components/submissionForm'

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

    // <Layout>
    //   <div>
    //     <TextSection>      
    //         How did your school respond to the COVID-19 pandemic?
    //     </TextSection>
    //   </div>
    //   <div>
    //   <Left>
    //     <Subtext> subtext blah blah blah blah blah blah </Subtext>
        
    //     <ReadPaperButton>
    //       READ
    //     </ReadPaperButton>
        
    //     <PaperPreview src={require('./assets/examplePDF.png')} alt='PDF' />
      
    //   </Left>

    //   <Right>
    //     <SubmissionForm/>
    //   </Right>
    // </div>

    // </Layout>

    <GridContainer>
      <CallToAction>
        <TextSection>      
          How did your school respond to the COVID-19 pandemic?
        </TextSection>
      </CallToAction>
      <PaperDownload>PAPERDL</PaperDownload>
      <SubmissionSpace>SUBMISSION</SubmissionSpace>
    </GridContainer>
  )

export default Landing
