import React, { useCallback } from 'react';
import api from '../../services/api';

import { AuthContext } from './context';
import type { SignInCredentials } from './context';

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const response = await api.post('sessions', {
      email,
      password,
    });

    console.log(response.data);
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'Vilarino', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
