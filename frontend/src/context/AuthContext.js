import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

// AuthProvider component to wrap around the app
export function AuthProvider({ children }) {
  
  // Load token and user from localStorage if available
  const [token, setToken] = useState(() => localStorage.getItem('token'));
  const [user, setUser] = useState(() => {
    const raw = localStorage.getItem('user');
    return raw ? JSON.parse(raw) : null;
  });

  // Sync token and user to localStorage whenever they change
  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }

    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [token, user]);

  // Signout function
  const signout = async () => {
    try {
      await fetch('http://localhost:5000/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (e) {
      console.error('Logout failed', e);
    }
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, setToken, user, setUser, signout }}>
      {children}
    </AuthContext.Provider>
  );
}
