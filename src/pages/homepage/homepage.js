import React from 'react'

// page components
import Header from './header'
import Landing from './landing'
import Map from './map'
import Timeline from './timeline'
import SchoolsList from './schoolsList'
import Footer from './footer'

import { Layout } from './homepageStyles'

const Homepage = () => (
    <Layout>
        <Header/>
        <Landing/>
        <Map id="map" />
        <Timeline id="timeline"/>
        <SchoolsList id="list"/>
        <Footer/> 
    </Layout>
)

export default Homepage