import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('fitmaker_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (username, password) => {
    if (username === 'Modi' && password === 'rahulgandhi') {
      const userData = {
        username: 'Modi',
        email: 'modi@fitmaker.com',
        name: 'Modi',
        membershipPlan: 'Pro Plan',
        fitnessGoals: ['Weight Loss', 'Muscle Building']
      };
      setUser(userData);
      localStorage.setItem('fitmaker_user', JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const signup = (name, email, password) => {
    const userData = {
      username: name,
      email,
      name,
      membershipPlan: 'Beginner Plan',
      fitnessGoals: ['Getting Started']
    };
    setUser(userData);
    localStorage.setItem('fitmaker_user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('fitmaker_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
