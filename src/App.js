import React from 'react';
import logo from './logo.svg';
import './App.css';

// import Navigation from './components/homepage/navigation'
// import Landing from './components/homepage/landing'
// import Map from './components/homepage/map'
// import Timeline from './components/homepage/timeine'
// import SchoolsList from '../components/homepage/schoolsList'
// import Footer from '../components/homepage/footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* <Navigation/>
      <Landing/>
      <Map/>
      <Timeline/>
      <SchoolsList/>
      <Footer/> */}
    </div>
  );
}

export default App;
