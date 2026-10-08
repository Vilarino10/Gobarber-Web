import React from 'react';
import {
  Routes as RouterRoutes,
  Route as ReactDOMRoute,
} from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <RouterRoutes>
    <ReactDOMRoute path="/" element={<SignIn />} />
    <ReactDOMRoute path="/signup" element={<SignUp />} />

    <ReactDOMRoute
      path="/dashboard"
      element={<Route isPrivate element={<Dashboard />} />}
    />
  </RouterRoutes>
);

export default Routes;
