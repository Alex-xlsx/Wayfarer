import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/HomePage';
import BlogPosts from '../components/BlogPosts';

function Routes(props) {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/posts' component={BlogPosts} />

    </Switch>
  );
}

export default Routes;