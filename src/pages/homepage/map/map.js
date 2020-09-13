import React, {useState} from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet' 
import * as demographicData from '../../../data/demographics.json'

//styles
import { Layout } from './mapStyles'
import './mapStyles.css'

//components
import PopupContent from './popupContent'

const MapContainer = ({}) => {
  const [activeSchool, setActiveSchool] = useState(null)
  const gradCap = new Icon({
    iconUrl: './university.svg',
    iconSize: [50, 50]
  })

  return(
    <Layout>
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
