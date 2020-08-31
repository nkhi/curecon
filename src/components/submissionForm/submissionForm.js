import React, { useState } from 'react'

// Module for Star Rating
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

//styles
import { 
Layout,
GridContainer,
University,
DegreeInfo,
  Year,
  Major,
RatingSection,
Continue,
Input,
ContinueButton,
Label
} from './submissionFormStyles'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import DataUsageIcon from '@material-ui/icons/DataUsage';

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

        <Continue>
          <ContinueButton>
            Continue
            <NavigateNextIcon />
          </ContinueButton>
        </Continue>

      </GridContainer>
  )
}

export default SubmissionForm
