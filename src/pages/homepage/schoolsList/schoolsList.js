import React from 'react'

// dependancies
import Select from 'react-dropdown-select'; // search bar component
import Collapsible from 'react-collapsible';
import ControlledAccordion from './controlledAccordion'

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

  const AfricanSubregions = [
      { 
        name: "North Africa & the Middle East", 
        schools: [""]
      },
      { 
        name: "East Africa", 
        schools: [""]
      },
      { 
        name: "West Africa", 
        schools: [""]
      },
      { 
        name: "Central Sub-Saharan Africa", 
        schools: [""]
      },
      { 
        name: "South Africa", 
        schools: [""]
      }, 
  ]

  const AmericanSubregions = [
      { 
        name: "North America", 
        schools: [""]
      },
      { 
        name: "Southern Latin America", 
        schools: [""]
      },
      { 
        name: "Central Latin America", 
        schools: [""]
      },
      { 
        name: "South America", 
        schools: [""]
      },
  ]

  const AsianSubregions = [
      { 
        name: "Central Asia", 
        schools: [""]
      },
      { 
        name: "East Asia", 
        schools: [""]
      },
      { 
        name: "Southeast Asia", 
        schools: [""]
      },
      { 
        name: "South Asia", 
        schools: [""]
      },
      { 
        name: "Asia Pacific", 
        schools: [""]
      },
  ]

  const EuropeanSubregions = [
      { 
        name: "Western Europe", 
        schools: [""]
      },
      { 
        name: "Central Europe", 
        schools: [""]
      },
      { 
        name: "Eastern Europe", 
        schools: [""]
      },
  ]

  const OceanicSubregions = [
      { 
        name: "Australasia", 
        schools: [""]
      },
      { 
        name: "Oceania", 
        schools: [""]
      },
  ]


  return(
    <GridContainer>
      
      <IndexSection>
        <TitlePart> 
          Find your School
        </TitlePart>

        <SearchPart>
          <Select 
            options={options} 
          />
        </SearchPart>
      </IndexSection>
      
      <Africa>
        <Title>🌍 Africa</Title>
        <ControlledAccordion subregions={AfricanSubregions}/>
      </Africa>

      <Americas>
        <Title>🌎 Americas</Title>
        <ControlledAccordion subregions={AmericanSubregions}/>
      </Americas>

      <Asia>
        <Title>🌏 Asia</Title>
        <ControlledAccordion subregions={AsianSubregions}/>
      </Asia>

      <Europe>
        <Title>🌍 Europe</Title>
        <ControlledAccordion subregions={EuropeanSubregions}/>
      </Europe>

      <Oceania>
        <Title>🌏 Oceania</Title>
        <ControlledAccordion subregions={OceanicSubregions}/>
      </Oceania>

    </GridContainer>
  ) 
}

export default SchoolsList
