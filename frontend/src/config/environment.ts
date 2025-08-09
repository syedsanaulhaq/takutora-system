// Environment Configuration
export interface EnvironmentConfig {
  env: 'development' | 'staging' | 'production';
  apiBaseUrl: string;
  frontendUrl: string;
  version: string;
  isDevelopment: boolean;
  isStaging: boolean;
  isProduction: boolean;
}

const getEnvironmentConfig = (): EnvironmentConfig => {
  const env = (process.env.REACT_APP_ENV || 'development') as EnvironmentConfig['env'];
  
  return {
    env,
    apiBaseUrl: process.env.REACT_APP_API_BASE_URL || 'https://takutora.ddev.site',
    frontendUrl: process.env.REACT_APP_FRONTEND_URL || 'http://localhost:3000',
    version: process.env.REACT_APP_VERSION || '1.0.0-dev',
    isDevelopment: env === 'development',
    isStaging: env === 'staging',
    isProduction: env === 'production',
  };
};

export const config = getEnvironmentConfig();

// API URL helper - uses proxy in development, direct URLs in staging/production
export const getApiUrl = (endpoint: string): string => {
  if (config.isDevelopment) {
    // Use proxy in development
    return `/api${endpoint}`;
  }
  // Use direct API URLs in staging/production
  return `${config.apiBaseUrl}${endpoint}`;
};

// Environment indicator for UI
export const getEnvironmentBadge = (): { text: string; color: string } | null => {
  if (config.isDevelopment) {
    return { text: 'DEV', color: '#ff6b35' };
  }
  if (config.isStaging) {
    return { text: 'STAGING', color: '#f7931e' };
  }
  return null; // No badge for production
};
