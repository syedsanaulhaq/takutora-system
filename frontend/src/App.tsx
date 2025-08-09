import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import './App.css';
import './components/Auth.css';

interface User {
  username: string;
  uid: number;
  roles: string[];
  displayName?: string;
  email?: string;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Check if user is already logged in
    const session = Cookies.get('drupal_session');
    if (session === 'authenticated') {
      // In a real app, you might want to validate the session with the server
      const savedUser = localStorage.getItem('takutora_user');
      if (savedUser) {
        setUser(JSON.parse(savedUser));
        setIsAuthenticated(true);
      }
    }
    setIsLoading(false);
  }, []);

  const handleLoginSuccess = (userData: User) => {
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem('takutora_user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('takutora_user');
    Cookies.remove('drupal_session');
    Cookies.remove('drupal_auth');
  };

  if (isLoading) {
    return (
      <div className="App">
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh',
          fontSize: '1.2rem',
          color: '#666'
        }}>
          Loading Takutora System...
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      {isAuthenticated && user ? (
        <Dashboard user={user} onLogout={handleLogout} />
      ) : (
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}

export default App;
