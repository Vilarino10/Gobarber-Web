import React from 'react';

import AuthProvider from '../context/AuthContext';
import ToastProvider from '../context/ToastContext';

interface childrenProblem {
  children: React.ReactNode;
}

const AppProvider: React.FC<childrenProblem> = ({ children }) => (
  <AuthProvider>
    <ToastProvider>{children}</ToastProvider>
  </AuthProvider>
);

export default AppProvider;
