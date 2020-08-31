import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Top-Level Pages
import Homepage from './pages/homepage'
// import InstitutionInformation from './pages/institutionInfo'
// import Submission from './pages/submission'
// import About from './pages/about'

const App = () => (
  <Router>
    {/* <Switch>
      <Route path='/school/:schoolCode?'>
        <InstitutionInformation />
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
    </Switch> */}
    <Switch>
      <Route>
        <Homepage />
      </Route>
    </Switch>
  </Router>
)

export default App;
