import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import './App.css';

import Navbar from './components/navbar.component';
import Day0 from './components/day0.component';
import Day1 from './components/day1.component';
import Day3 from './components/day3.component';
import Day8 from './components/day8.component';

function App() {
  return (
    <Router>
      
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={Day0} />
      <Route path="/day0" component={Day0} />
      <Route path="/day1" component={Day1} />
      <Route path="/day3" component={Day3} />
      <Route path="/day8" component={Day8} />
      </div>
    </Router>

  );
}

export default App;
