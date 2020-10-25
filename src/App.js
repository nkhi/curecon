import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Top-Level Pages
import Homepage from './pages/homepage'
import SchoolInfo from './pages/schoolInfo'
import Submission from './pages/submission'
import About from './pages/about'

// 404 Page
import ErrorPage from './pages/errorPage'

// Top-level url routing
const App = () => (
  <Router>
    <Switch>
      <Route exact path='/'>
        <Homepage />
      </Route>
    </Switch>
    <Switch>
      <Route component={ErrorPage} />
    </Switch>
    {/* <Switch>
      <Route path='/map/'>
        <ErrorPage />
      </Route>
    </Switch>
    <Switch>
      <Route path='/submit'>
        <ErrorPage />
      </Route>
    </Switch>
    <Switch>
      <Route path='/about'>
        <ErrorPage />
      </Route>
    </Switch> */}

  </Router>
)

export default App;
