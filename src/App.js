import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Top-Level Pages
import Homepage from './pages/homepage'
// import SchoolInfo from './pages/schoolInfo'
// import Submission from './pages/submission'
import About from './pages/about'
// import Map from './pages/map'
import ErrorPage from './pages/errorPage'

// Top-level url routing
const App = () => (
  <Router>
    <Switch>
      <Route path='/' exact component={Homepage}/>
      {/* <Route path='/about' exact component={About}/> */}
      {/* <Route path='/submit' exact component={Submit}/>
      <Route path='/search' exact component={Search}/>
      <Route path='/map' exact component={ Map }/> */}
      <Route component={ErrorPage}/>
    </Switch>
  </Router>
)

export default App;
