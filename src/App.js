import React from 'react';
import {
  Layout,
} from './AppStyles.js';

import Header from './components/homepage/header'
import Landing from './components/homepage/landing'
import Map from './components/homepage/map'
// import Timeline from './components/homepage/timeine'
import SchoolsList from './components/homepage/schoolsList'
import Footer from './components/homepage/footer'

function App() {
  return (
    <Layout>
      <Header/>
      <Landing id="landing"/>
      <Map id="map" />
      <SchoolsList id="list"/>
      <Footer/> 
    </Layout>
  )
}

export default App;
