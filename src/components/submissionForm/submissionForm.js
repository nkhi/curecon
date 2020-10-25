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
Hyperlink,
BlandLink
} from './submissionFormStyles'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const SubmissionForm = ({}) => {
  const [ userData, setUserData ] = useState({}) 
  const [ currentRating, setCurrentRating ] = useState(5) 

  return(
      <GridContainer>
        <University>
          <Label>What University do you go to?</Label>
          <Input 
            type='text' 
            placeholder='ex. Georgia Institute of Technology'
          />
        </University>
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
        <RatingSection value={currentRating}>
          <RatingContent>
            <WhiteLabel>Overall Rating of COVID-19 response:</WhiteLabel>
            <Rating 
              size="large" 
              defaultValue={5} 
              max={10} 
              onChangeActive={(event, value) => setCurrentRating(value)}
            />  
          </RatingContent>
        </RatingSection>
        <Disclaimer>
          <IconSpace><Face /></IconSpace>
          <TextDisclaimer>
          <DisclaimerText>
            <Hyperlink to='/data-privacy'>Read our Data Privacy Statement</Hyperlink> 
            <br/> TL;DR: it's completely anonymous. 
          </DisclaimerText>
          </TextDisclaimer>
        </Disclaimer>

        <Continue>
          <BlandLink to='/submit'>
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
