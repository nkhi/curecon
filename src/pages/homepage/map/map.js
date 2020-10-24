import React, { useState } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet' 
import * as demographicData from '../../../data/demographics.json'

//styles
import {
  Layout, 
  InnerSearchContainer, 
  OuterSearchContainer 
} from './mapStyles'
import './mapStyles.css'
import './searchStyles.css'

//components
import PopupContent from './popupContent'
import Autosuggest, {AutosuggestHighlightMatch, AutosuggestHighlightParse} from 'react-autosuggest';

const MapContainer = ({}) => {
  const [activeSchool, setActiveSchool] = useState(null)
  const gradCap = new Icon({
    iconUrl: './university.svg',
    iconSize: [50, 50]
  })

  const people = [
    {
      first: 'Charlie',
      last: 'Brown',
      twitter: 'dancounsell'
    },
    {
      first: 'Charlotte',
      last: 'White',
      twitter: 'mtnmissy'
    },
    {
      first: 'Chloe',
      last: 'Jones',
      twitter: 'ladylexy'
    },
    {
      first: 'Cooper',
      last: 'King',
      twitter: 'steveodom'
    }
  ];

  function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  
  function getSuggestions(value) {
    const escapedValue = escapeRegexCharacters(value.trim());
    
    if (escapedValue === '') {
      return [];
    }
  
    const regex = new RegExp('\\b' + escapedValue, 'i');
    
    return people.filter((person) => regex.test(getSuggestionValue(person)));
  }
  
  function getSuggestionValue(suggestion) {
    return `${suggestion.first} ${suggestion.last}`;
  }
  
  function renderSuggestion(suggestion, { query }) {
    const suggestionText = `${suggestion.first} ${suggestion.last}`;
    const matches = AutosuggestHighlightMatch(suggestionText, query);
    const parts = AutosuggestHighlightParse(suggestionText, matches);
  
    return (
      <span className={'suggestion-content ' + suggestion.twitter}>
        <span className="name">
          {
            parts.map((part, index) => {
              const className = part.highlight ? 'highlight' : null;
  
              return (
                <span className={className} key={index}>{part.text}</span>
              );
            })
          }
        </span>
      </span>
    );
  }

  const [state, setState] = useState({ value: '', suggestions: []})
  const onChange = (event, { newValue, method }) => { setState({value: newValue}) }
  const onSuggestionsFetchRequested = ({ value }) => { setState({suggestions: getSuggestions(value)})};
  const onSuggestionsClearRequested = () => { setState({suggestions: []})}
  const {value, suggestions} = state
  const inputProps = {
    placeholder: "Type 'c'",
    value,
    onChange: onChange, 
  };
  
  return(
    <Layout>
      {/* <OuterSearchContainer>
        <InnerSearchContainer>
          <Autosuggest 
            suggestions={suggestions}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps} />
        </InnerSearchContainer>
      </OuterSearchContainer> */}
      <Map center={[4.36139, 18.55528]} zoom={3}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {demographicData.default.features.map(school => 
          <Marker 
            key={school.ranking} 
            position={ [school.LATITUDE, school.LONGITUDE] } 
            onClick={() => setActiveSchool(school)}
            icon={gradCap}
          />
        )}
        {activeSchool && 
          <Popup 
            position={ [activeSchool.LATITUDE, activeSchool.LONGITUDE] }
            onClose={() => setActiveSchool(null)}
            closeButton={true}
            minWidth="420">
              <PopupContent activeSchool={activeSchool}/>
          </Popup>
        }
      </Map>
    </Layout>
  )
}

export default MapContainer
