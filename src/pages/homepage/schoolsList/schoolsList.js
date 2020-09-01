import React from 'react'

// dependancies
import Select from 'react-dropdown-select';
import Collapsible from 'react-collapsible';

//styles
import { 
  GridContainer,
  IndexSection,
  Africa,
  Asia,
  Americas,
  Europe,
  Oceania,
  TitlePart,
  SearchPart,
  Title
 } from './schoolsListStyles'
 import './searchStyles.css';
 import './collapsibleStyles.css';

const SchoolsList = ({}) => {
  const options = [
    { label: "Alligators", value: 1 },
    { label: "Crocodiles", value: 2 },
    { label: "Sharks", value: 3 },
    { label: "Small crocodiles", value: 4 },
    { label: "Smallest crocodiles", value: 5 },
    { label: "Snakes", value: 6 },
  ]

  const collabibleTriggerStyle = {
    textAlign: 'left',
  }

  return(
    <GridContainer>
      
      <IndexSection>
        <TitlePart> 
          Universities by Region
        </TitlePart>

        <SearchPart>
          <Select 
            options={options} 
          />
        </SearchPart>
      </IndexSection>
      
      <Africa>
        <Title>🌍 Africa</Title>
        <Collapsible className='text-align: left' trigger="&#10148; North Africa & Middle East"> Some Countries eventually </Collapsible>
        <Collapsible trigger="&#10148; East Africa"> Some Countries eventually </Collapsible>
        <Collapsible trigger="&#10148; West Africa"> Some Countries eventually </Collapsible>
        <Collapsible trigger="&#10148; Central Sub‐Saharan Africa"> Some Countries eventually </Collapsible>
        <Collapsible trigger="&#10148; South Africa"> Some Countries eventually </Collapsible>
      </Africa>

      <Americas>
        <Title>🌎 Americas</Title>
        <Collapsible trigger="&#10148; North America"> Some Countries eventually </Collapsible>
        <Collapsible trigger="&#10148; Southern Latin America"> Some Countries eventually </Collapsible>
        <Collapsible trigger="&#10148; Central Latin America"> Some Countries eventually </Collapsible>
        <Collapsible trigger="&#10148; South America"> 
          <Collapsible trigger="&#10148; Tropical"> Some Countries eventually </Collapsible>
          <Collapsible trigger="&#10148; Andean"> Some Countries eventually </Collapsible>
          <Collapsible trigger="&#10148; Carribean"> Some Countries eventually </Collapsible>
        </Collapsible>
      </Americas>

      <Asia>
        <Title>🌏 Asia</Title>
        <Collapsible trigger="&#10148; Central Asia"> Some Countries eventually </Collapsible>
        <Collapsible trigger="&#10148; East Asia"> Some Countries eventually </Collapsible>
        <Collapsible trigger="&#10148; Southeast Asia"> Some Countries eventually </Collapsible>
        <Collapsible trigger="&#10148; South Asia"> Some Countries eventually </Collapsible>
        <Collapsible trigger="&#10148; Asia Pacisic"> Some Countries eventually </Collapsible>
      </Asia>

      <Europe>
        <Title>🌍 Europe</Title>
        <Collapsible trigger="&#10148; Western Europe"> Some Countries eventually </Collapsible>
        <Collapsible trigger="&#10148; Central Europe"> Some Countries eventually </Collapsible>
        <Collapsible trigger="&#10148; Eastern Europe"> Some Countries eventually </Collapsible>
      </Europe>

      <Oceania>
        <Title>🌏 Oceania</Title>
        <Collapsible trigger="&#10148; Australasia"> Some Countries eventually </Collapsible>
        <Collapsible trigger="&#10148; Oceania"> Some Countries eventually </Collapsible>
      </Oceania>

    </GridContainer>
  ) 
}

export default SchoolsList
