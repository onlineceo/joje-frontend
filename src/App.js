import React from 'react';
import './App.css';
import './index.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/loginPage/login'
import SendNumber from './pages/loginPage/sendNumber'

function App() {
  return (
      <Router>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/login' component={Login} exact />
          <Route path='/sendNumber' component={SendNumber} exact/>
        </Switch>
      </Router>
    
  );
}

export default App;
