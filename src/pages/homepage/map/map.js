import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet' 

//styles
import { Layout } from './mapStyles'
import './mapStyles.css'

const MapContainer = ({}) => {
  
  return(
    <Layout>
      <Map center={[43.653225, -79.383186]} zoom={3}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </Map>
    </Layout>
  )
}

export default MapContainer
