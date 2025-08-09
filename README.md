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

```bash
cd backend
ddev start
```

Access points:
- **Website**: https://takutora.ddev.site
- **Admin**: https://takutora.ddev.site/admin
- **Credentials**: admin / admin

### Frontend Setup (React)

```bash
cd frontend
npm install
npm start
```

Access point:
- **React App**: http://localhost:3000

## 🌍 Environment Configuration

### Development
```bash
npm start                    # Development server
```

### Staging
```bash
npm run build:staging       # Build for staging
```

### Production
```bash
npm run build:production    # Build for production
```

## 📋 Business Workflow

The Takutora System supports a comprehensive business process including:

1. **Client Registration** - User onboarding and account creation
2. **Plan Selection** - Interactive plan simulation and pricing
3. **Order Management** - Complete order processing workflow
4. **Staff Dashboard** - Administrative interface for staff
5. **Shipping Integration** - External shipping company API integration
6. **CSV Export/Import** - Data exchange capabilities

## 🛠️ Tech Stack

### Backend
- **Drupal 10** - Content management and API
- **PHP 8.2** - Server-side logic
- **MariaDB** - Database
- **JSON:API** - RESTful API layer

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Axios** - HTTP client
- **CSS3** - Styling

### Development Tools
- **DDEV** - Local development environment
- **VS Code** - IDE
- **Git** - Version control

## 📁 Project Structure

```
takutora-system/
├── backend/                 # Drupal 10 backend
│   ├── web/                # Drupal web root
│   ├── vendor/             # Composer dependencies
│   └── .ddev/              # DDEV configuration
├── frontend/               # React frontend
│   ├── src/                # Source code
│   │   ├── components/     # React components
│   │   └── config/         # Environment configuration
│   ├── public/             # Static assets
│   └── package.json        # NPM configuration
├── README.md               # This file
└── DEPLOYMENT.md           # Deployment guide
```

## 🔧 Development Workflow

1. **Backend Development** - Use Drupal admin for content types and configuration
2. **Frontend Development** - React components and user interface
3. **API Integration** - Connect frontend to Drupal JSON:API
4. **Testing** - Development environment testing
5. **Staging** - Client preview and approval
6. **Production** - Live deployment

## 🌐 API Endpoints

- **Articles**: `/jsonapi/node/article`
- **Users**: `/jsonapi/user/user`
- **Authentication**: Basic Auth + Session management

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Development Team** - Full-stack development
- **Business Analysts** - Workflow design
- **QA Team** - Testing and quality assurance

## 🆘 Support

For support and questions:
- Create an issue in this repository
- Check the [DEPLOYMENT.md](DEPLOYMENT.md) for deployment guide
- Review the documentation in `/docs`

## 🗺️ Roadmap

- [x] **Phase 1**: Core authentication and dashboard ✅
- [ ] **Phase 2**: Business workflow implementation
- [ ] **Phase 3**: Shipping integration
- [ ] **Phase 4**: Advanced analytics and reporting
- [ ] **Phase 5**: Mobile application

---

**Takutora System** - Empowering modern business workflows with decoupled architecture.
