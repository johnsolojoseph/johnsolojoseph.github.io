import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './styles/app.scss';


import Home from './components/Home';


function App() {
  return (
    <div className="app">
      <Router>
        <Route exact path="/" component={Home} />
      </Router>
    </div>
  );
}

export default App;
