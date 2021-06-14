import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/HomePage';
import BlogPage from '../pages/BlogPage';

function Routes(props) {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/cities' component={BlogPage} />
      <Route path='/cities/:id' component={BlogPage} />
    </Switch>
  );
}

export default Routes;