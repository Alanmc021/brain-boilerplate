import React, { createContext, useContext, useEffect, useState } from 'react';
import { login as loginApi } from '@services/authApi';
import { saveAuth, getAuth, clearAuth } from '@services/authStorage';

export type AuthUser = {
  id: string;
  name: string;
  email: string;
};

interface AuthContextProps {
  user: AuthUser | null;
  token: string | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  restore: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    restore();
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      console.log('Tentando login:', email, password);
      const response = await loginApi(email, password);
      console.log('Login sucesso:', response);
      setUser(response.user);
      setToken(response.token);
      await saveAuth(response.token, response.user);
    } catch (err: any) {
      setError(err.message);
      setUser(null);
      setToken(null);
      console.log('Erro no login:', err.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    setUser(null);
    setToken(null);
    await clearAuth();
    setLoading(false);
  };

  const restore = async () => {
    setLoading(true);
    const { token, user } = await getAuth();
    setUser(user);
    setToken(token);
    setLoading(false);
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, error, login, logout, restore }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext); 