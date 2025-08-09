import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

interface LoginFormProps {
  onLoginSuccess: (userData: any) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const DRUPAL_BASE_URL = '/api'; // Use proxy to avoid CORS and SSL issues

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      console.log('Making authentication request to:', `${DRUPAL_BASE_URL}/jsonapi/user/user`);
      
      // Test authentication with Basic Auth against the JSON:API
      const response = await axios.get(
        `${DRUPAL_BASE_URL}/jsonapi/user/user`,
        {
          headers: {
            'Authorization': `Basic ${btoa(`${username}:${password}`)}`,
            'Content-Type': 'application/vnd.api+json',
          },
          timeout: 10000,
        }
      );

      console.log('Authentication response:', response);

      if (response.status === 200) {
        // If we got a successful response, credentials are valid
        // Store authentication info
        Cookies.set('drupal_session', 'authenticated', { expires: 1 });
        Cookies.set('drupal_auth', btoa(`${username}:${password}`), { expires: 1 });
        
        // Create basic user data (we'll enhance this later when the complex queries work)
        const userData = {
          username: username,
          uid: username === 'admin' ? 1 : 2, // Simple mapping for now
          roles: username === 'admin' ? ['authenticated', 'administrator'] : ['authenticated'],
          displayName: username,
          email: `${username}@example.com`,
        };

        onLoginSuccess(userData);
      } else {
        setError('Invalid username or password. Please try again.');
      }
    } catch (err: any) {
      console.error('Login error details:', {
        message: err.message,
        code: err.code,
        response: err.response,
        config: err.config,
        request: err.request
      });
      
      if (err.response?.status === 401 || err.response?.status === 403) {
        setError('Invalid username or password. Please try again.');
      } else if (err.code === 'NETWORK_ERROR' || err.message?.includes('Network Error')) {
        setError('Network connection failed. Please check your internet connection.');
      } else if (err.name === 'AxiosError' && !err.response) {
        setError('Cannot connect to server. Please check if the backend is running.');
      } else {
        setError(`Login failed: ${err.response?.data?.message || err.message || 'Unknown error'}. Please try again.`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login to Takutora</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" disabled={isLoading} className="login-button">
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div className="demo-credentials">
          <h4>Demo Credentials:</h4>
          <p>Username: <strong>admin</strong></p>
          <p>Password: <strong>admin</strong></p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
