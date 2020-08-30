import React from 'react';
import { Layout } from './AppStyles.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// pages
import Header from './pages/homepage/header'
import Landing from './pages/homepage/landing'
import Map from './pages/homepage/map'
import Timeline from './pages/homepage/timeline'
import SchoolsList from './pages/homepage/schoolsList'
import Footer from './pages/homepage/footer'

const App = () => (
  <Router>
    <Switch>
      <Route path=''>
        <Homepage />
      </Route>
    </Switch>
    <Switch>
      <Route path=''>
        <Homepage />
      </Route>
    </Switch>
    <Switch>
      <Route path=''>
        <Homepage />
      </Route>
    </Switch>
    <Switch>
      <Route path=''>
        <Homepage />
      </Route>
    </Switch>
    <Switch>
      <Route path=''>
        <Homepage />
      </Route>
    </Switch>
    <Switch>
      <Route path=''>
        <Homepage />
      </Route>
    </Switch>
    {/* <Layout>
      <Header/>
      <Landing/>
      <Map id="map" />
      <Timeline id="timeline"/>
      <SchoolsList id="list"/>
      <Footer/> 
    </Layout> */}
  </Router>
)

export default App;
