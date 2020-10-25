import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Top-Level Pages
import Homepage from './pages/homepage'
// import SchoolInfo from './pages/schoolInfo'
// import Submission from './pages/submission'
// import About from './pages/about'
import ErrorPage from './pages/errorPage'

// Top-level url routing
const App = () => (
  <Router>
    <Switch>
      <Route path='/' exact component={Homepage}/>
      <Route path='/schools/' exact component={ErrorPage}/>
      <Route path='/school/' exact component={ErrorPage}/>
      <Route path='/about/' exact component={ErrorPage}/>
      <Route path='/submit/' exact component={ErrorPage}/>
      <Route path='/map/' exact component={ErrorPage}/>
      <Route component={ErrorPage}/>
    </Switch>
  </Router>
)

export default App;
