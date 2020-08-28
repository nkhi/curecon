import React from 'react';
import {
  Layout,
} from './AppStyles.js';

import Header from './pages/homepage/header'
import Landing from './pages/homepage/landing'
import Map from './pages/homepage/map'
import Timeline from './pages/homepage/timeline'
import SchoolsList from './pages/homepage/schoolsList'
import Footer from './pages/homepage/footer'

function App() {
  return (
    <Layout>
      <Header/>
      <Landing/>
      <Map id="map" />
      <Timeline id="timeline"/>
      <SchoolsList id="list"/>
      <Footer/> 
    </Layout>
  )
}

export default App;
