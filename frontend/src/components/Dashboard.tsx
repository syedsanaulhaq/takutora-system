import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { config, getApiUrl, getEnvironmentBadge } from '../config/environment';

interface Article {
  id: string;
  attributes: {
    title: string;
    body: {
      processed: string;
      summary: string;
    };
    created: string;
    changed: string;
  };
}

interface DashboardProps {
  user: {
    username: string;
    uid: number;
    roles: string[];
    displayName?: string;
    email?: string;
  };
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, onLogout }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const environmentBadge = getEnvironmentBadge();

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const authHeader = Cookies.get('drupal_auth');
      
      const response = await axios.get(
        getApiUrl('/jsonapi/node/article?sort=-created'),
        {
          headers: {
            'Content-Type': 'application/vnd.api+json',
            ...(authHeader && { 'Authorization': `Basic ${authHeader}` })
          },
        }
      );
      
      setArticles(response.data.data);
    } catch (err) {
      console.error('Error fetching articles:', err);
      setError('Failed to load articles');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    // Clear React app authentication
    Cookies.remove('drupal_session');
    Cookies.remove('drupal_auth');
    localStorage.removeItem('takutora_user');
    
    // Note: Drupal admin tabs opened in separate windows will remain logged in
    // This is normal behavior for web applications
    onLogout();
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const stripHtml = (html: string) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="user-info">
          <h1>Welcome, {user.username}!</h1>
          <p>User ID: {user.uid} | Roles: {user.roles.join(', ')}</p>
          {environmentBadge && (
            <span 
              className="environment-badge" 
              style={{ 
                backgroundColor: environmentBadge.color, 
                color: 'white', 
                padding: '4px 8px', 
                borderRadius: '4px', 
                fontSize: '12px',
                fontWeight: 'bold',
                marginLeft: '10px'
              }}
            >
              {environmentBadge.text}
            </span>
          )}
        </div>
        <div className="header-actions">
          <a 
            href="https://takutora.ddev.site/admin" 
            target="_blank" 
            rel="noopener noreferrer"
            className="admin-link"
            title="Opens Drupal admin in new tab"
          >
            Drupal Admin ↗
          </a>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
      </header>

      <main className="dashboard-content">
        <section className="articles-section">
          <h2>Recent Articles</h2>
          
          {loading && <div className="loading">Loading articles...</div>}
          {error && <div className="error-message">{error}</div>}
          
          {!loading && !error && (
            <div className="articles-grid">
              {articles.length === 0 ? (
                <p>No articles found. <a href="https://takutora.ddev.site/node/add/article" target="_blank" rel="noopener noreferrer">Create your first article</a></p>
              ) : (
                articles.map((article) => (
                  <div key={article.id} className="article-card">
                    <h3>{article.attributes.title}</h3>
                    <p className="article-summary">
                      {article.attributes.body.summary 
                        ? stripHtml(article.attributes.body.summary).substring(0, 200) + '...'
                        : stripHtml(article.attributes.body.processed).substring(0, 200) + '...'}
                    </p>
                    <div className="article-meta">
                      <span>Created: {formatDate(article.attributes.created)}</span>
                      <span>Modified: {formatDate(article.attributes.changed)}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </section>

        <section className="api-info">
          <h2>API Endpoints</h2>
          <ul>
            <li><strong>Articles:</strong> <code>{getApiUrl('/jsonapi/node/article')}</code></li>
            <li><strong>Users:</strong> <code>{getApiUrl('/jsonapi/user/user')}</code></li>
            <li><strong>Current User:</strong> <code>{getApiUrl(`/jsonapi/user/user/${user.uid}`)}</code></li>
          </ul>
          <p><strong>Environment:</strong> {config.env} | <strong>Version:</strong> {config.version}</p>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
