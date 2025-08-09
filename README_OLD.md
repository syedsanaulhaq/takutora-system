# Takutora System

A modern decoupled CMS solution built with **Drupal 10** backend and **React TypeScript** frontend for comprehensive business workflow management.

## 🏗️ Architecture

- **Backend**: Drupal 10 (Headless CMS) with JSON:API
- **Frontend**: React 18 + TypeScript  
- **Development**: Ubuntu WSL + DDEV
- **Environments**: Development, Staging, Production

## ✨ Features

- 🔐 **Authentication System** - Secure user login and session management
- 📊 **Dashboard Interface** - Modern React-based user dashboard
- 🌐 **Multi-Environment Support** - Dev, Staging, Production configurations
- 🚀 **Headless Architecture** - Decoupled frontend and backend
- 📱 **Responsive Design** - Mobile-first approach
- 🔌 **API-First Design** - RESTful JSON:API endpoints

## 🚀 Quick Start

### Prerequisites

- Node.js 16+
- PHP 8.2+
- DDEV
- Ubuntu WSL (for Windows)

### Backend Setup (Drupal)

1. Navigate to backend directory:
   

2. Start DDEV:
   

3. Access Drupal:
   - **Website**: https://takutora.ddev.site
   - **Admin**: https://takutora.ddev.site/admin
   - **Credentials**: admin / admin

4. JSON:API endpoint:
   - **Articles**: https://takutora.ddev.site/jsonapi/node/article

### Frontend (React)

1. Navigate to frontend directory:
   

2. Install dependencies (if needed):
   

3. Start development server:
   

4. Access React app:
   - **URL**: http://localhost:3000

##  Development Workflow

### Creating Content

1. Login to Drupal admin: https://takutora.ddev.site/admin
2. Go to Content > Add content > Article
3. Create sample articles
4. Content will be automatically available via JSON:API

### DDEV Commands



##  API Endpoints

- **All Articles**: GET /jsonapi/node/article
- **Single Article**: GET /jsonapi/node/article/{uuid}
- **JSON:API Documentation**: https://takutora.ddev.site/jsonapi

##  Tech Stack

- **Backend**: Drupal 10, PHP 8.2, MariaDB, Nginx
- **Frontend**: React 18, TypeScript, Axios
- **Development**: DDEV, Ubuntu WSL, Node.js
- **APIs**: JSON:API, REST API

##  Project Structure



##  Next Steps

1. **Content Types**: Create custom content types in Drupal
2. **CORS Setup**: Configure CORS for production
3. **Authentication**: Implement user authentication
4. **Deployment**: Set up production deployment pipeline
