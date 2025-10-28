import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  username: string;
  email: string;
  name: string;
  membershipPlan: string;
  fitnessGoals: string[];
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => boolean;
  signup: (name: string, email: string, password: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('fitmaker_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (username: string, password: string): boolean => {
    if (username === 'Modi' && password === 'rahulgandhi') {
      const userData: User = {
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

  const signup = (name: string, email: string, password: string) => {
    const userData: User = {
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
