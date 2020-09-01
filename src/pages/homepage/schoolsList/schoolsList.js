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

  // TODO: Seperate these maps into a JSON objects to resuse
  const AfricanSubregions = [
    { name: "North Africa & the Middle East", 
      schools: ["🇱🇧 American University of Beirut", 
                "🇮🇱 Hebrew University of Jerusalem", 
                "🇪🇬 American University of Cairo", 
                "🇲🇦 Mohammed V University Rabat", 
                "🇹🇷 Boğaziçi University"] 
    },
    { name: "East Africa", 
      schools: ["🇰🇪 University of Nairobi", 
                "🇪🇹 Addis Ababa University", 
                "🇹🇿 University of Dar es Salaam", 
                "🇺🇬 Makerere University", 
                "🇰🇪 Moi University"] 
    },
    { name: "West Africa", 
      schools: ["🇳🇬 Covenant University", 
                "🇳🇬 UNILAG", 
                "🇬🇭 University of Ghana", 
                "🇳🇦 University of Namibia", 
                "🇸🇩 Sudan University of Science and Technology"] 
    },
    { name: "Central Sub-Saharan Africa", 
      schools: ["🇨🇬 Marien Ngouabi University", 
                "🇨🇫 Université de Bangui", 
                "🇦🇴 Universidade Católica de Angola", 
                "🇨🇩 University of Kinshasa", 
                "🇬🇶 National University of Equatorial Guinea"] 
    },
    { name: "South Africa", 
      schools: ["🇿🇦 University of Cape Town", 
                "🇿🇦 University of the Witwatersrand", 
                "🇿🇦 Stellenbosch University"] 
    }, 
  ]

  const AmericanSubregions = [
      { name: "North America", 
        schools: ["🇨🇦 University of Toronto", 
                  "🇨🇦 University of British Columbia", 
                  "🇨🇦 McGill University", 
                  "🇨🇦 Dalhousie University", 
                  "🇨🇦 University of Alberta", 
                  "🇨🇦 McMaster University", 
                  "🇨🇦 University of Guelph", 
                  "🇨🇦 Simon Fraser University", 
                  "🇨🇦 University of Victoria", 
                  "🇨🇦 University of Calgary", 
                  "🇺🇸 Harvard University", 
                  "🇺🇸 University of California, Berkeley", 
                  "🇺🇸 New York University", 
                  "🇺🇸 Arizona State University", 
                  "🇺🇸 Liberty University", 
                  "🇺🇸 UCLA", 
                  "🇺🇸 Stanford University", 
                  "🇺🇸 Case Western Reserve", 
                  "🇺🇸 University of Minnesota, Twin Cities", 
                  "🇺🇸 Colorado State University", 
                  "🇺🇸 Johns Hopkins University", 
                  "🇺🇸 Georgia Institute of Technology", 
                  "🇺🇸 Emory University", 
                  "🇺🇸 Northwestern University", 
                  "🇺🇸 Tufts University"]
      },
      { name: "Southern Latin America", 
        schools: ["🇺🇾 University of Montevideo",
                  "🇦🇷 National University of Córdoba",
                  "🇦🇷 National University of Cuyo",
                  "🇨🇱 Diego Portales University",
                  "🇨🇱 University of Chile", ]
      },
      { name: "Central Latin America", 
        schools: ["🇲🇽 Universidad Nacional Autónoma de México (UNAM)", 
                  "🇲🇽 Tecnológico de Monterrey",
                  "🇸🇻 Universidad de El Salvador",
                  "🇨🇴 Universidad de Los Andes Colombia",
                  "🇨🇷 Universidad de Costa Rica", ]
      },
      { name: "Tropic States", 
        schools: ["🇧🇷 University of São Paulo", 
                  "🇧🇷 Federal University of Minas Gerais", 
                  "🇧🇷 Pontifical Catholic University of Rio de Janeiro", 
                  "🇵🇾 Autonomous University of Asunción", 
                  "🇧🇷 University of Brasília", ]
      },
      { name: "Andean States", 
        schools: ["🇵🇪 Universidad Peruana Cayetano Heredia", 
                  "🇧🇴 Universidad Mayor de San Simon",
                  "🇵🇪 Pontificia Universidad Católica del Perú", 
                  "🇪🇨 Universidad San Francisco de Quito", 
                  "🇵🇷 Escuela Superior Politécnica del Litoral", ]
      },
      { name: "Carribean", 
        schools: ["🇨🇺 University of Peurto Rico", 
                  "🇨🇺 Universidad Central 'Marta Abreu' de Las Villas", 
                  "🇯🇲 University of the West Indies", 
                  "🇹🇹 University of Trinidad and Tabago", 
                  "🇬🇩 St. Georges University" ]
      },
  ]

  const AsianSubregions = [
      { name: "Central Asia", 
        schools: ["🇰🇿 Al-Farabi Kazakh National University",
                  "🇲🇳 National University of Mongolia", 
                  "🇰🇬 University of Central Asia", 
                  "🇺🇿 National University of Uzbekistan", 
                  "🇦🇲 Yerevan State University", ]
      },
      { name: "East Asia", 
        schools: ["🇹🇼 National Taiwan University", 
                  "🇹🇼 Taipei Medical University", 
                  "🇨🇳 Tsinghua University", 
                  "🇨🇳 University of Science and Technology of China", 
                  "🇨🇳 Peking University"]
      },
      { name: "Southeast Asia", 
        schools: ["🇱🇰 University of Peradeniya", 
                  "🇲🇾 University of Malaya", 
                  "🇻🇳 Hanoi University of Science and Technology", 
                  "🇵🇭 University of the Philipines", 
                  "🇹🇭 Mae Fah Luang University"]
      },
      { name: "South Asia", 
        schools: ["🇧🇩 University of Dhaka", 
                  "🇧🇹 Royal University of Bhutan", 
                  "🇮🇳 University of Delhi", 
                  "🇳🇵 Tribhuvan University", 
                  "🇵🇰 Quaid-i-Azam University", ]
      },
      { name: "Asia Pacific", 
        schools: ["🇧🇳 Universiti Brunei Darussalam", 
                  "🇯🇵 Tohoku University", 
                  "🇯🇵 The University of Tokyo", 
                  "🇸🇬 National University of Singapore", 
                  "🇰🇷 Seoul National University", 
                  "🇰🇵 Pyongyang University of Science and Technology"]
      },
  ]

  const EuropeanSubregions = [
      { name: "Western Europe", 
        schools: ["🇫🇷 Sorbonne Université", 
                  "🇫🇷 Université de Bordeaux", 
                  "🇩🇪 LMU Munich", 
                  "🇧🇪 Katholieke Universiteit Leuven", 
                  "🇳🇱 University of Amsterdam"]
      },
      { name: "Central Europe", 
        schools: ["🇨🇿 Charles University", 
                  "🇵🇱 University of Warsaw", 
                  "🇭🇺 versity of Szeged", 
                  "🇨🇿 Brno University of Technology", 
                  "🇷🇸 University of Belgrade", ]
      },
      { name: "Eastern Europe", 
        schools: ["🇷🇺 Lomonosov Moscow State University (MSU)",
                  "🇪🇪 University of Tartu", 
                  "🇷🇺 Saint Petersburg State University", 
                  "🇷🇺 Novosibirsk State University", ]
      },
  ]

  const OceanicSubregions = [
      { name: "Australasia", 
        schools: ["🇦🇺 University of Melbourne", 
                  "🇦🇺 University of Sydney", 
                  "🇦🇺 Bond University",
                  "🇳🇿 The University of Auckland", 
                  "🇳🇿 University of Otago"]
      },
      { name: "Oceania", 
        schools: ["🇫🇯 The University of the South Pacific", 
                  "🇬🇺 University of Guam", 
                  "🇵🇬 University of Papua New Guinea"]
      },
  ]


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
