import React from 'react';
import { Navigate } from 'react-router-dom';

import useAuth from '../hooks/useAuth';

interface RouteProps {
  isPrivate?: boolean;
  element: React.ReactElement;
}

const Route: React.FC<RouteProps> = ({ isPrivate = false, element }) => {
  console.log('MEU ROUTE FOI EXECUTADO');

  const { user } = useAuth();

  const isSigned = !!user;

  console.log('USER NO ROUTE:', user);
  console.log('IS SIGNED:', isSigned);
  console.log('IS PRIVATE:', isPrivate);

  if (isPrivate === isSigned) {
    return element;
  }

  return <Navigate to={isPrivate ? '/' : '/dashboard'} replace />;
};

export default Route;
