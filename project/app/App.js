import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import UserProfile from './components/UserProfile';

const App = () => (
  <Router>
      <Switch>
        <Route path="/" component={UserProfile}/>
      </Switch>
    </Router>
);

export default App;
