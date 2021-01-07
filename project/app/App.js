import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import UserProfile from './components/UserProfile';
import Home from './components/Home';
import NavBar from './components/Navigation/NavBar';

const App = () => (
  <Container>
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' component={Home} />
        <Route path='/profile' component={UserProfile} />
      </Switch>
    </Router>
  </Container>
);

export default App;
