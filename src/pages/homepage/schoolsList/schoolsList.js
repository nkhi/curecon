import React from 'react'

// dependancies
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
  DropdownPart,
  SearchPart,
  Title,
  TitlePill
 } from './schoolsListStyles'
 import './searchStyles.css';
 import './collapsibleStyles.css';

 // data
 import { 
   AfricanSubregions, 
   AmericanSubregions, 
   AsianSubregions, 
   EuropeanSubregions, 
   OceanicSubregions
} from './schoolsListCodes'


const SchoolsList = ({}) => {

  return(
    <GridContainer>
      
      {/* <IndexSection>
        <TitlePart> Universities by Region
        </TitlePart>

        <SearchPart>
          <Select 
            options={options} 
          />
        </SearchPart>
      </IndexSection> */}
      
      <Africa>
        <TitlePart>
          <TitlePill>
            <Title>🌍 Africa</Title>
          </TitlePill> 
        </TitlePart>
        <DropdownPart>
          <ControlledAccordion subregions={AfricanSubregions}/>
        </DropdownPart>
      </Africa>

      <Americas>
        <TitlePart>
          <TitlePill>
            <Title>🌎 Americas</Title>
          </TitlePill>
        </TitlePart>
        <DropdownPart>
          <ControlledAccordion subregions={AmericanSubregions}/>
        </DropdownPart>
      </Americas>

      <Asia>
        <TitlePart>
          <TitlePill>
            <Title>🌏 Asia</Title>
          </TitlePill>
        </TitlePart>
        <DropdownPart>
          <ControlledAccordion subregions={AsianSubregions}/>
        </DropdownPart>
      </Asia>

      <Europe>
        <TitlePart>
          <TitlePill>
            <Title>🌍 Europe</Title>
          </TitlePill>
        </TitlePart>
        <DropdownPart>
          <ControlledAccordion subregions={EuropeanSubregions}/>
        </DropdownPart>
      </Europe>

      <Oceania>
        <TitlePart>
          <TitlePill>
            <Title>🌏 Oceania</Title>
          </TitlePill>
        </TitlePart>
        <DropdownPart>
          <ControlledAccordion subregions={OceanicSubregions}/>
        </DropdownPart>
      </Oceania>

    </GridContainer>
  ) 
}

export default SchoolsList
