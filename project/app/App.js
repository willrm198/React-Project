import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import UserProfile from './components/UserProfile';
import Home from './components/Home';

const App = () => (
  <Router>
      <Switch>
        <Route path='/' component={Home}/>
        <Route path='/profile' component={UserProfile}/>
      </Switch>
    </Router>
);

export default App;
