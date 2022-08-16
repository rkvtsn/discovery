import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './routes';

export default function RouterView() {
  return (
    <Switch>
      {Object.values(routes).map((route) => (
        <Route
          key={route.path}
          exact={route.exact}
          path={route.path}
          component={route.component}
        />
      ))}
    </Switch>
  );
}
