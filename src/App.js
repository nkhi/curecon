import React from 'react';
import {
  Layout,
} from './AppStyles.js';

import Header from './components/homepage/header'
import Landing from './components/homepage/landing'
import Map from './components/homepage/map'
import Timeline from './components/homepage/timeline'
import SchoolsList from './components/homepage/schoolsList'
import Footer from './components/homepage/footer'

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
