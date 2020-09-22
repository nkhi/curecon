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

const SchoolsList = ({}) => {
  // TODO: Seperate these maps into a JSON objects to resuse
  const AfricanSubregions = [
    { name: "North Africa & the Middle East", 
      schools: [{emoji: "🇱🇧", name: "American University of Beirut", shortcode: "aub"}, 
                {emoji: "🇮🇱", name: "Hebrew University of Jerusalem", shortcode: "huj"},
                {emoji: "🇪🇬", name: "American University of Cairo", shortcode: "auc"},
                {emoji: "🇲🇦", name: "Mohammed V University Rabat", shortcode: "mvur"},
                {emoji: "🇹🇷", name: "Boğaziçi University", shortcode: "boun"}] 
    },
    { name: "East Africa", 
      schools: [{emoji: "🇰🇪", name: "University of Nairobi",  shortcode: "unairobi"},
                {emoji: "🇪🇹", name: "Addis Ababa University",  shortcode: "aau"},
                {emoji: "🇹🇿", name: "University of Dar es Salaam",  shortcode: "udsm"},
                {emoji: "🇺🇬", name: "Makerere University",  shortcode: "maku"},
                {emoji: "🇰🇪", name: "Moi University",  shortcode: "moiu"},] 
    },
    { name: "West Africa", 
      schools: [{emoji: "🇳🇬", name: "Covenant University", shortcode: "covu"},
                {emoji: "🇳🇬", name: "University of Lagos", shortcode: "unilag"},
                {emoji: "🇬🇭", name: "University of Ghana", shortcode: "ughana"},
                {emoji: "🇳🇦", name: "University of Namibia", shortcode: "unambia"},
                {emoji: "🇸🇩", name: "Sudan University of Science and Technology", shortcode: "sustech"},] 
    },
    { name: "Central Sub-Saharan Africa", 
      schools: [{emoji: "🇨🇬", name: "Marien Ngouabi University",  shortcode: "mgu"},
                {emoji: "🇨🇫", name: "Université de Bangui",  shortcode: "udb"},
                {emoji: "🇦🇴", name: "Universidade Católica de Angola",  shortcode: "uca"},
                {emoji: "🇨🇩", name: "University of Kinshasa",  shortcode: "ukinshasa"},
                {emoji: "🇬🇶", name: "National University of Equatorial Guinea",  shortcode: "unge"},] 
    },
    { name: "South Africa", 
      schools: [{emoji: "🇿🇦", name: "University of Cape Town",  shortcode: "uct"},
                {emoji: "🇿🇦", name: "University of the Witwatersrand", shortcode: "wits"}, 
                {emoji: "🇿🇦", name: "Stellenbosch University",  shortcode: "su"},] 
    }, 
  ]

  const AmericanSubregions = [
      { name: "North America", 
        schools: [{emoji: "🇨🇦", name: "University of Toronto", shortcode: "uoft"},
                  {emoji: "🇨🇦", name: "University of British Columbia", shortcode: "ubc"},
                  {emoji: "🇨🇦", name: "McGill University", shortcode: "mcgill"},
                  {emoji: "🇨🇦", name: "Dalhousie University", shortcode: "dal"},
                  {emoji: "🇨🇦", name: "University of Alberta", shortcode: "ualberta"},
                  {emoji: "🇨🇦", name: "McMaster University", shortcode: "mac"},
                  {emoji: "🇨🇦", name: "University of Guelph", shortcode: "uguelph"},
                  {emoji: "🇨🇦", name: "Simon Fraser University", shortcode: "sfu"},
                  {emoji: "🇨🇦", name: "University of Victoria", shortcode: "uvic"},
                  {emoji: "🇨🇦", name: "University of Calgary", shortcode: "ucalgary"},
                  {emoji: "🇺🇸", name: "Harvard University", shortcode: "harvard"},
                  {emoji: "🇺🇸", name: "New York University", shortcode: "nyu"},
                  {emoji: "🇺🇸", name: "Arizona State University", shortcode: "asu"},
                  {emoji: "🇺🇸", name: "Liberty University", shortcode: "uliberty"},
                  {emoji: "🇺🇸", name: "University of California, Berkeley", shortcode: "ucb"},
                  {emoji: "🇺🇸", name: "University of California, LA", shortcode: "ucla"},
                  {emoji: "🇺🇸", name: "Stanford University", shortcode: "stanford"},
                  {emoji: "🇺🇸", name: "Case Western Reserve", shortcode: "cwr"},
                  {emoji: "🇺🇸", name: "University of Minnesota, Twin Cities", shortcode: "umn"},
                  {emoji: "🇺🇸", name: "Colorado State University", shortcode: "csu"},
                  {emoji: "🇺🇸", name: "Johns Hopkins University", shortcode: "jhu"},
                  {emoji: "🇺🇸", name: "Georgia Institute of Technology", shortcode: "git"},
                  {emoji: "🇺🇸", name: "Emory University", shortcode: "emory"},
                  {emoji: "🇺🇸", name: "Northwestern University", shortcode: "nwu"},
                  {emoji: "🇺🇸", name: "Tufts University", shortcode: "tufts"},]
      },
      { name: "Southern Latin America", 
        schools: [{emoji: "🇺🇾", name: "University of Montevideo", shortcode: "umv"},
                  {emoji: "🇦🇷", name: "National University of Córdoba", shortcode: "uncordoba"},
                  {emoji: "🇦🇷", name: "National University of Cuyo", shortcode: "uncuyo"},
                  {emoji: "🇨🇱", name: "Diego Portales University", shortcode: "dpu"},
                  {emoji: "🇨🇱", name: "University of Chile",shortcode: "uchile"},]
      },
      { name: "Central Latin America", 
        schools: [{emoji: "🇲🇽", name: "Universidad Nacional Autónoma de México", shortcode: "unam"},
                  {emoji: "🇲🇽", name: "Tecnológico de Monterrey (ITESM)",shortcode: "itesm"},
                  {emoji: "🇸🇻", name: "Universidad de El Salvador",shortcode: "ues"},
                  {emoji: "🇨🇴", name: "Universidad de Los Andes Colombia",shortcode: "ulac"},
                  {emoji: "🇨🇷", name: "Universidad de Costa Rica", shortcode: "ucr"},]
      },
      { name: "Tropic States", 
        schools: [{emoji: "🇧🇷", name: "University of São Paulo", shortcode: "usp"},
                  {emoji: "🇧🇷", name: "Federal University of Minas Gerais", shortcode: "ufmg"},
                  {emoji: "🇧🇷", name: "Pontifical Catholic University of Rio de Janeiro", shortcode: "curj"},
                  {emoji: "🇵🇾", name: "Autonomous University of Asunción", shortcode: "uaa"},
                  {emoji: "🇧🇷", name: "University of Brasília", shortcode: "ub"},]
      },
      { name: "Andean States", 
        schools: [{emoji: "🇵🇪", name: "Universidad Peruana Cayetano Heredia", shortcode: "upch"},
                  {emoji: "🇧🇴", name: "Universidad Mayor de San Simon",shortcode: "umss"},
                  {emoji: "🇵🇪", name: "Pontificia Universidad Católica del Perú", shortcode: "pucp"},
                  {emoji: "🇪🇨", name: "Universidad San Francisco de Quito", shortcode: "usfq"},
                  {emoji: "🇵🇷", name: "Escuela Superior Politécnica del Litoral", shortcode: "espl"},]
      },
      { name: "Carribean", 
        schools: [{emoji: "🇨🇺", name: "University of Peurto Rico", shortcode: "upr"},
                  {emoji: "🇨🇺", name: "Universidad Central 'Marta Abreu' de Las Villas", shortcode: "uclv"},
                  {emoji: "🇯🇲", name: "University of the West Indies", shortcode: "uwi"},
                  {emoji: "🇹🇹", name: "University of Trinidad and Tabago", shortcode: "utt"},
                  {emoji: "🇬🇩", name: "St. Georges University", shortcode: "stg"} ]
      },
  ]

  const AsianSubregions = [
      { name: "Central Asia", 
        schools: [{emoji: "🇰🇿", name: "Al-Farabi Kazakh National University",shortcode: "ukazakh"},
                  {emoji: "🇲🇳", name: "National University of Mongolia", shortcode: "umongolia"},
                  {emoji: "🇰🇬", name: "University of Central Asia", shortcode: "uca"},
                  {emoji: "🇺🇿", name: "National University of Uzbekistan", shortcode: "unuzbek"},
                  {emoji: "🇦🇲", name: "Yerevan State University", shortcode: "uyeveran"},]
      },
      { name: "East Asia", 
        schools: [{emoji: "🇹🇼", name: "National Taiwan University", shortcode: "ntu"},
                  {emoji: "🇹🇼", name: "Taipei Medical University", shortcode: "tmu"},
                  {emoji: "🇨🇳", name: "Tsinghua University", shortcode: "utsinghua"},
                  {emoji: "🇨🇳", name: "University of Science and Technology of China", shortcode: "ustchina"},
                  {emoji: "🇨🇳", name: "Peking University", shortcode: "upeking"},]
      },
      { name: "Southeast Asia", 
        schools: [{emoji: "🇱🇰", name: "University of Peradeniya", shortcode: "uperadeniya"}, 
                  {emoji: "🇲🇾", name: "University of Malaya", shortcode: "umalaya"},
                  {emoji: "🇻🇳", name: "Hanoi University of Science and Technology", shortcode: "usthanoi"},
                  {emoji: "🇵🇭", name: "University of the Philippines", shortcode: "uphilippines"},
                  {emoji: "🇹🇭", name: "Mae Fah Luang University", shortcode: "mflu"},]
      },
      { name: "South Asia", 
        schools: [{emoji: "🇧🇩", name: "University of Dhaka", shortcode: "udhaka"},
                  {emoji: "🇧🇹", name: "Royal University of Bhutan", shortcode: "rubhutan"},
                  {emoji: "🇮🇳", name: "University of Delhi", shortcode: "udelhi"},
                  {emoji: "🇳🇵", name: "Tribhuvan University", shortcode: "utribhuvan"},
                  {emoji: "🇵🇰", name: "Quaid-i-Azam University", shortcode: "uqa"}]
      },
      { name: "Asia Pacific", 
        schools: [{emoji: "🇧🇳", name: "Universiti Brunei Darussalam", shortcode: "ubrunei"},
                  {emoji: "🇯🇵", name: "Tohoku University", shortcode: "utohoku"},
                  {emoji: "🇯🇵", name: "The University of Tokyo", shortcode: "utokyo"},
                  {emoji: "🇸🇬", name: "National University of Singapore", shortcode: "usingapore"},
                  {emoji: "🇰🇷", name: "Seoul National University", shortcode: "useoul"},
                  {emoji: "🇰🇵", name: "Pyongyang University of Science and Technology", shortcode: "dprk"},]
      },
  ]

  const EuropeanSubregions = [
      { name: "Western Europe", 
        schools: [{emoji: "🇫🇷", name: "Sorbonne Université", shortcode: "usorbonne"},
                  {emoji: "🇫🇷", name: "Université de Bordeaux", shortcode: "ubordeaux"},
                  {emoji: "🇩🇪", name: "LMU Munich", shortcode: "lmum"},
                  {emoji: "🇧🇪", name: "Katholieke Universiteit Leuven", shortcode: "kul"},
                  {emoji: "🇳🇱", name: "University of Amsterdam", shortcode: "uoa"},]
      },
      { name: "Central Europe", 
        schools: [{emoji: "🇨🇿", name: "Charles University", shortcode: "charlesu"},
                  {emoji: "🇵🇱", name: "University of Warsaw", shortcode: "uwarsaw"},
                  {emoji: "🇭🇺", name: "University of Szeged", shortcode: "uszeged"},
                  {emoji: "🇨🇿", name: "Brno University of Technology",shortcode: "ubrno"}, 
                  {emoji: "🇷🇸", name: "University of Belgrade", shortcode: "ubelgrade"},]
      },
      { name: "Eastern Europe", 
        schools: [{emoji: "🇷🇺", name: "Lomonosov Moscow State University", shortcode: "msu"},
                  {emoji: "🇪🇪", name: "University of Tartu", shortcode: "utartu"},
                  {emoji: "🇷🇺", name: "Saint Petersburg State University", shortcode: "usp"},
                  {emoji: "🇷🇺", name: "Novosibirsk State University", shortcode: "unsb"},]
      },
  ]

  const OceanicSubregions = [
      { name: "Australia", 
        schools: [{emoji: "🇦🇺", name: "University of Melbourne", shortcode: "umelbourne"},
                  {emoji: "🇦🇺", name: "University of Sydney", shortcode: "usydney"},
                  {emoji: "🇦🇺", name: "Bond University",shortcode: "ubond"},
                  {emoji: "🇳🇿", name: "The University of Auckland", shortcode: "uauckland"},
                  {emoji: "🇳🇿", name: "University of Otago", shortcode: "uotago"},]
      },
      { name: "Oceania", 
        schools: [{emoji: "🇫🇯", name: "The University of the South Pacific", shortcode: "usouthpacific"},
                  {emoji: "🇬🇺", name: "University of Guam", shortcode: "uguam"},
                  {emoji: "🇵🇬", name: "University of Papua New Guinea", shortcode: "upng"},]
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
