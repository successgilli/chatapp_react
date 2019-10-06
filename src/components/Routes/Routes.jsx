import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={() => <h1>welcome home</h1>} />
      <Route exact path="/about" component={() => <h1>about us</h1>} />
      <Route exact path="/news" component={() => <h1>gilbert is pregnant</h1>} />
      <Route path="*" component={() => <h1>not found</h1>} />
    </Switch>
  </Router>
);

export default Routes;
