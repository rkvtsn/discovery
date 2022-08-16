import Dashboard from 'pages/Dashboard';
import Index from 'pages/Index';
import Page404 from 'pages/Page404';
import React from 'react';

export interface RouteItem {
  path: string;
  component?: React.ComponentType<any>;
  redirectTo?: string;
  exact?: boolean;
}

const routes: Record<string, RouteItem> = {
  index: {
    path: '/',
    exact: true,
    component: Index,
  },
  dashboard: {
    path: '/dashboard',
    component: Dashboard,
  },
  page404: {
    path: '*',
    component: Page404,
  },
};

export default routes;
