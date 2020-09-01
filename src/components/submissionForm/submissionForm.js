import React, { useState } from 'react'

// Module for Star Rating
import Rating from '@material-ui/lab/Rating';

//styles
import { 
GridContainer,
University,
DegreeInfo,
  Year,
  Major,
RatingSection,
Continue,
Input,
ContinueButton,
DisclaimerText,
Link,
Disclaimer,
Face,
IconSpace,
TextDisclaimer
} from './submissionFormStyles'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const SubmissionForm = ({}) => {
  const [ userData, setUserData ] = useState({}) 

  return(
      <GridContainer>
        <University>
          <Input 
            type='text' 
            placeholder='What University do you go to?'
          />
        </University>
        <DegreeInfo>
          <Year>
            <Input 
              type='text' 
              placeholder='What year of study are you in?'
            />
          </Year>
          <Major>
            <Input 
              type='text' 
              placeholder='What is your area of study?'
            />
          </Major>
        </DegreeInfo>
        <RatingSection>
          <Rating 
            size="large" 
            defaultValue={5} 
            max={10} 
          />  
        </RatingSection>
        <Disclaimer>
          <IconSpace><Face /></IconSpace>
          <TextDisclaimer>
          <DisclaimerText>
            <Link href='/data'>Read our Data Privacy Statement</Link> <br/> TL;DR: it's completely anonymous. 
          </DisclaimerText>
          </TextDisclaimer>
        </Disclaimer>

        <Continue>
          <a href='/submit' style={{textDecoration: 'none'}}>
            <ContinueButton>
              Continue
              <NavigateNextIcon />
            </ContinueButton>
          </a>
        </Continue>
      </GridContainer>
  )
}

export default SubmissionForm
