# Takutora System - Environment Strategy & Deployment Guide

## 🏗️ Environment Structure

### 1. Development Environment
- **Purpose**: Active development and testing
- **Frontend**: `http://localhost:3000`
- **Backend**: `https://takutora.ddev.site`
- **Environment Badge**: 🟠 DEV
- **Command**: `npm start`

### 2. Staging Environment
- **Purpose**: Client preview and testing
- **Frontend**: `https://staging-app.takutora.com`
- **Backend**: `https://staging-api.takutora.com`
- **Environment Badge**: 🟡 STAGING
- **Command**: `npm run build:staging`

### 3. Production Environment
- **Purpose**: Live system for end users
- **Frontend**: `https://app.takutora.com`
- **Backend**: `https://api.takutora.com`
- **Environment Badge**: None (clean interface)
- **Command**: `npm run build:production`

## 🚀 Deployment Commands

```bash
# Development
npm start

# Staging
npm run build:staging
# Deploy build/ folder to staging server

# Production
npm run build:production
# Deploy build/ folder to production server
```

## 🔧 Environment Configuration

Each environment has its own configuration file:
- `.env.local` - Development
- `.env.staging` - Staging
- `.env.production` - Production

## 📊 Staging Workflow for Takutora Business Process

### Phase 1: Client Registration & Plan Selection
1. **Development**: Build and test registration flow
2. **Staging**: Client previews registration process
3. **Production**: Live client registration

### Phase 2: Order Management System
1. **Development**: Build order processing
2. **Staging**: Staff tests order workflow
3. **Production**: Live order processing

### Phase 3: Staff Dashboard
1. **Development**: Build staff interface
2. **Staging**: Staff training and testing
3. **Production**: Live staff operations

### Phase 4: Shipping Integration
1. **Development**: Mock shipping APIs
2. **Staging**: Test with shipping company APIs
3. **Production**: Live shipping integration

## 🔍 Environment Features

### Visual Indicators
- Development: Orange "DEV" badge
- Staging: Yellow "STAGING" badge
- Production: Clean interface (no badge)

### API Configuration
- Development: Uses proxy (`/api/`)
- Staging/Production: Direct API URLs

### Version Tracking
- Each environment shows current version
- Helps track what's deployed where

## 🎯 Next Steps

1. **Set up staging server infrastructure**
2. **Configure CI/CD pipeline**
3. **Implement business workflow features**
4. **Test in staging before production**

This structure ensures:
- ✅ Safe development practices
- ✅ Client preview capabilities
- ✅ Zero-downtime production updates
- ✅ Easy rollback if needed
