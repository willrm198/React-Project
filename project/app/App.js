import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import UserProfile from './components/UserProfile';
import BillingProfile from './components/BillingProfile';
import Home from './components/Home';
import NavBar from './components/Navigation/NavBar';
import ShippingProfile from './components/ShippingProfile';

const App = () => (
  <Router basename="/">
    <NavBar />
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/profile" component={UserProfile} />
      <Route path="/billing" component={BillingProfile} />
      <Route path="/shipping" component={ShippingProfile} />
    </Switch>
  </Router>
);

export default App;
