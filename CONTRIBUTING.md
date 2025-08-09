# Contributing to Takutora System

Thank you for considering contributing to the Takutora System! This document provides guidelines and information for contributors.

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- PHP 8.2+
- DDEV
- Git

### Development Setup
1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/takutora-system.git`
3. Follow the setup instructions in [README.md](README.md)

## 🔄 Development Workflow

### Backend (Drupal) Development
1. Start DDEV: `cd backend && ddev start`
2. Make changes to Drupal configuration or custom modules
3. Export configuration: `ddev drush cex`
4. Test your changes

### Frontend (React) Development
1. Start development server: `cd frontend && npm start`
2. Make changes to React components
3. Test in development environment
4. Build for staging: `npm run build:staging`

## 📝 Coding Standards

### Frontend (TypeScript/React)
- Use TypeScript for all new code
- Follow React functional component patterns
- Use proper TypeScript interfaces
- Follow ESLint configuration

### Backend (PHP/Drupal)
- Follow Drupal coding standards
- Use proper PHPDoc comments
- Follow PSR-4 autoloading standards

## 🧪 Testing

### Frontend Testing
```bash
cd frontend
npm test
```

### Backend Testing
```bash
cd backend
ddev phpunit
```

## 📋 Pull Request Process

1. **Create Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Changes**
   - Write clean, documented code
   - Follow coding standards
   - Add tests if applicable

3. **Test Your Changes**
   - Test in development environment
   - Test in staging environment
   - Ensure all tests pass

4. **Commit Changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

5. **Push and Create PR**
   ```bash
   git push origin feature/your-feature-name
   ```
   Then create a Pull Request on GitHub

## 🔖 Commit Message Format

Use conventional commits:
- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `test:` - Test additions or changes
- `chore:` - Maintenance tasks

## 🐛 Bug Reports

When reporting bugs, please include:
- Environment (dev/staging/production)
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots if applicable

## 💡 Feature Requests

For new features:
- Describe the use case
- Explain the benefit
- Provide mockups if applicable
- Consider backward compatibility

## 🏗️ Architecture Guidelines

### Separation of Concerns
- **Frontend**: User interface and experience
- **Backend**: Content management and API
- **Keep them decoupled**

### Environment Management
- Always test in development first
- Use staging for client preview
- Deploy to production only after approval

## 📚 Resources

- [Drupal API Documentation](https://www.drupal.org/docs/drupal-apis)
- [React TypeScript Documentation](https://react-typescript-cheatsheet.netlify.app/)
- [JSON:API Specification](https://jsonapi.org/)

## 🤝 Code of Conduct

- Be respectful and inclusive
- Focus on constructive feedback
- Help others learn and grow
- Follow professional standards

## 📞 Getting Help

- Create an issue for bugs or questions
- Check existing documentation
- Ask in pull request comments
- Contact the development team

Thank you for contributing to Takutora System! 🙏
