import React from 'react';
import {
  Layout,
} from './AppStyles.js';

import Header from './components/homepage/header'
// import Landing from './components/homepage/landing'
// import Map from './components/homepage/map'
// import Timeline from './components/homepage/timeine'
// import SchoolsList from '../components/homepage/schoolsList'
// import Footer from '../components/homepage/footer'

function App() {
  return (
    <>
    <head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </head>
    <Layout>
      {/* <Header>
        <p>
          CURECON: COVID-19 University Response Consolidation
          <br/><br/> 
          <code>Coming soon.</code>
        </p>
      </Header> */}
      
      <Header/>
      {/*<Landing/>
      <Map/>
      <Timeline/>
      <SchoolsList/>
      <Footer/> */}
    </Layout>
    </>
  )
}

export default App;
