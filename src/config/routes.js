import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/HomePage';
import BlogPage from '../pages/BlogPage';

function Routes(props) {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/cities' component={BlogPage} />
      <Route path='/cities/:cityId' component={BlogPage} />
    </Switch>
  );
}

export default Routes;