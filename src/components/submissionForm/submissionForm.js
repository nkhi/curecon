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
RatingContent,
Continue,
Label,
WhiteLabel,
Input,
ContinueButton,
DisclaimerText,
Disclaimer,
Face,
IconSpace,
TextDisclaimer,
Link, BlandLink
} from './submissionFormStyles'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const SubmissionForm = ({}) => {
  const [ userData, setUserData ] = useState({}) 

  return(
      <GridContainer>
        <University>
          <Label>What University do you go to?</Label>
          <Input 
            type='text' 
            placeholder='ex. Georgia Institute of Technology'
          />
        </University>
        {/* <DegreeInfo> */}
          <Year>
            <Label>How long have you attended university?</Label>
            <Input 
              type='text' 
              placeholder='ex. 4 years, incoming freshman, etc'
            />
          </Year>
          <Major>
            <Label>What do you study?</Label>
            <Input 
              type='text' 
              placeholder='ex. Marine Biology, Halloween Studies, etc'
            />
          </Major>
        {/* </DegreeInfo> */}
        <RatingSection>
          <RatingContent>
            <WhiteLabel>Overall Rating of COVID-19 response:</WhiteLabel>
            <Rating 
              size="large" 
              defaultValue={5} 
              max={10} 
            />  
          </RatingContent>
        </RatingSection>
        <Disclaimer>
          <IconSpace><Face /></IconSpace>
          <TextDisclaimer>
          <DisclaimerText>
            <Link href='/data-privacy'>Read our Data Privacy Statement</Link> <br/> TL;DR: it's completely anonymous. 
          </DisclaimerText>
          </TextDisclaimer>
        </Disclaimer>

        <Continue>
          <BlandLink href='/submit'>
            <ContinueButton>
              Continue
              <NavigateNextIcon />
            </ContinueButton>
          </BlandLink>
        </Continue>
      </GridContainer>
  )
}

export default SubmissionForm
