import React, {useState} from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet' 
import * as universityData from '../../../data/universityData.json'
//styles
import { Layout } from './mapStyles'
import './mapStyles.css'

const MapContainer = ({}) => {
  
  const [activeSchool, setActiveSchool] = useState(null)
  const gradCap = new Icon({
    iconUrl: './university.svg',
    iconSize: [50, 50]
  })

  return(
    <Layout>
      <Map center={[43.653225, -79.383186]} zoom={5}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {universityData.features.map(school => 
          <Marker 
            key={school.PARK_ID} 
            position={ [school.geometry.coordinates[1], school.geometry.coordinates[0]] } 
            onClick={() => setActiveSchool(school)}
            icon={gradCap}
          />
        )}
        {activeSchool && 
          <Popup 
            position={ [activeSchool.geometry.coordinates[1], activeSchool.geometry.coordinates[0]] }
            onClose={() => setActiveSchool(null)}>
              <h2>{activeSchool.properties.NAME}</h2>
          </Popup>
        }
      </Map>
    </Layout>
  )
}

export default MapContainer
