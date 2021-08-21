import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import './App.css';
import Projects from './pages/Projects';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ Main } />
        <Route exact path="/projetos" component={ Projects } />
        <Route exact path="/sobre" component={ About } />
      </Switch>
    </div>
  );
}

export default App;
