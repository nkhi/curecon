import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Top-Level Pages
import Homepage from './pages/homepage'
import SchoolInfo from './pages/schoolInfo'
import Submission from './pages/submission'
import About from './pages/about'

// Top-level url routing
const App = () => (
  <Router>
    <Switch>
      <Route path='/school/:schoolCode?'>
        <SchoolInfo />
      </Route>
    </Switch>
    <Switch>
      <Route path='/submit'>
        <Submission />
      </Route>
    </Switch>
    <Switch>
      <Route path='/about'>
        <About />
      </Route>
    </Switch>
    <Switch>
      <Route exact path='/'>
        <Homepage />
      </Route>
    </Switch>
  </Router>
)

export default App;
