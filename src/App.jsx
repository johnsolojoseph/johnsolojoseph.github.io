import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './styles/app.scss';


import Home from './components/Home';
import About from './components/About';


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
