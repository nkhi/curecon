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
        schools: ["American University of Beirut", "Hebrew University of Jerusalem", "American University of Cairo", "Mohammed V University Rabat", "Boğaziçi University"]
      },
      { 
        name: "East Africa", 
        schools: ["University of Nairobi", "Addis Ababa University", "University of Dar es Salaam", "Makerere University", "Moi University"]
      },
      { 
        name: "West Africa", 
        schools: ["Covenant University", "UNILAG", "University of Ghana", "University of Namibia", "Sudan University of Science and Technology"]
      },
      { 
        name: "Central Sub-Saharan Africa", 
        schools: ["Marien Ngouabi University", "Université de Bangui", "Universidade Católica de Angola", "University of Kinshasa", "National University of Equatorial Guinea"]
      },
      { 
        name: "South Africa", 
        schools: ["University of Cape Town", "University of the Witwatersrand", "Stellenbosch University"]
      }, 
  ]

  const AmericanSubregions = [
      { 
        name: "North America", 
        schools: ["🇨🇦 University of Toronto", "🇨🇦 University of British Columbia", "🇨🇦 McGill University", "🇨🇦 Dalhousie University", "🇨🇦 University of Alberta", "🇨🇦 McMaster University", "🇨🇦 University of Guelph", "🇨🇦 Simon Fraser University", "🇨🇦 University of Victoria", "🇨🇦 University of Calgary", "🇺🇸 Harvard University", "🇺🇸 University of California, Berkeley", "🇺🇸 New York University", "🇺🇸 Arizona State University", "🇺🇸 Liberty University", "🇺🇸 UCLA", "🇺🇸 Stanford University", "🇺🇸 Case Western Reserve", "🇺🇸 University of Minnesota, Twin Cities", "🇺🇸 Colorado State University", "🇺🇸 Johns Hopkins University", "🇺🇸 Georgia Institute of Technology", "🇺🇸 Emory University", "🇺🇸 Northwestern University", "🇺🇸 Tufts University"]
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
        schools: ["National Taiwan University", "Taipei Medical University", "Tsinghua University", "University of Science and Technology of China", "Peking University"]
      },
      { 
        name: "Southeast Asia", 
        schools: ["University of Peradeniya", "University of Malaya", "Hanoi University of Science and Technology", "University of the Philipines" ,"Mae Fah Luang University"]
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
        schools: ["Sorbonne Université", "Université de Bordeaux", "LMU Munich", "Katholieke Universiteit Leuven", "University of Amsterdam"]
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
