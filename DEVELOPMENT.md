# Development Guide

## 🚀 Quick Start

### Option 1: Single Development Server (Recommended)
```bash
npm run dev
```
- **Main site**: http://localhost:3000/
- **Investor page**: http://localhost:3000/investors

### Option 2: Separate Development Servers
```bash
# Terminal 1 - Main site
npm run dev:main
# Access at: http://localhost:3000/

# Terminal 2 - Investor site  
npm run dev:investor
# Access at: http://localhost:3001/
```

## 🔧 Development Workflow

### Testing Main Site
1. Navigate to `http://localhost:3000/`
2. Test all user-facing features
3. Verify investor links are removed from navigation

### Testing Investor Page
1. Navigate to `http://localhost:3000/investors`
2. Test investor-specific content
3. Verify cross-domain links work (they'll point to production URLs)

### Cross-Domain Link Testing
- Investor page links to `https://bloxtr8.com` (production)
- For local testing, you can temporarily change URLs in `InvestorHeader.tsx`

## 🌐 Production Deployment

### Main Site (`bloxtr8.com`)
- Deploy the entire app
- Investor page will be accessible at `/investors` but not linked in navigation

### Investor Subdomain (`investor.bloxtr8.com`)
- Deploy only the investor page
- Update DNS to point subdomain to investor deployment
- Configure SSL certificates

## 📝 Notes
- Both sites share the same codebase but have different navigation
- Theme system works across both sites
- All components are shared except headers
