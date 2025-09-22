# Bloxtr8 Marketing Website

A modern, professional marketing website for Bloxtr8 - the secure escrow platform for Roblox trading.

## 🚀 Features

- **Modern Design**: Clean, minimalist design with signature underline system
- **Analytics Tracking**: Google Analytics 4 integration for user behavior insights
- **Error Handling**: Comprehensive error boundaries and form validation
- **Responsive**: Mobile-first design that works on all devices
- **Performance**: Optimized with Next.js 15 and Turbopack
- **SEO Ready**: Proper meta tags and structured data

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Fonts**: Inter + JetBrains Mono
- **Animations**: Framer Motion
- **Components**: Shadcn/ui
- **Analytics**: Google Analytics 4
- **Email**: Resend API
- **Deployment**: Vercel

## 📋 Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun
- Google Analytics account
- Resend account (for email)

## 🏃‍♂️ Quick Start

### 1. Clone and Install
```bash
git clone <your-repo-url>
cd bloxtr8-site-v0
npm install
```

### 2. Environment Setup
```bash
# Copy environment template
cp ENVIRONMENT_SETUP.md .env.local

# Edit .env.local with your values
# Required: NEXT_PUBLIC_GA_ID, RESEND_API_KEY, CONTACT_TO
```

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## 🌐 Deployment

### Option 1: Vercel (Recommended)

#### Automatic Deployment
1. **Connect Repository**
   ```bash
   # Push to GitHub/GitLab/Bitbucket
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your repository
   - Vercel auto-detects Next.js settings

3. **Configure Environment Variables**
   - In Vercel dashboard → Settings → Environment Variables
   - Add all variables from `.env.local`:
     ```
     NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
     RESEND_API_KEY=re_xxxxxxxxxx
     CONTACT_TO=contact@bloxtr8.com
     NODE_ENV=production
     ```

4. **Deploy**
   - Vercel automatically deploys on every push to main
   - Get your live URL: `https://your-project.vercel.app`

#### Manual Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts:
# - Link to existing project? No
# - Project name: bloxtr8-marketing
# - Directory: ./
# - Override settings? No
```

### Option 2: Netlify

1. **Build Configuration**
   ```bash
   # Create netlify.toml in project root
   echo '[build]
   command = "npm run build"
   publish = ".next"
   
   [build.environment]
   NODE_VERSION = "18"' > netlify.toml
   ```

2. **Deploy**
   - Connect repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `.next`
   - Add environment variables in Netlify dashboard

### Option 3: Railway

1. **Connect Repository**
   ```bash
   # Install Railway CLI
   npm install -g @railway/cli
   
   # Login and deploy
   railway login
   railway init
   railway up
   ```

2. **Configure Environment**
   - Add environment variables in Railway dashboard
   - Set `NODE_ENV=production`

### Option 4: Self-Hosted (VPS/Server)

1. **Server Setup**
   ```bash
   # On your server
   sudo apt update
   sudo apt install nodejs npm nginx
   
   # Clone repository
   git clone <your-repo-url>
   cd bloxtr8-site-v0
   npm install
   ```

2. **Build and Run**
   ```bash
   # Build for production
   npm run build
   
   # Install PM2 for process management
   npm install -g pm2
   
   # Start application
   pm2 start npm --name "bloxtr8" -- start
   pm2 save
   pm2 startup
   ```

3. **Nginx Configuration**
   ```nginx
   # /etc/nginx/sites-available/bloxtr8
   server {
       listen 80;
       server_name your-domain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## 🔧 Environment Variables

See [ENVIRONMENT_SETUP.md](./ENVIRONMENT_SETUP.md) for detailed setup instructions.

**Required for Production:**
- `NEXT_PUBLIC_GA_ID` - Google Analytics tracking ID
- `RESEND_API_KEY` - Email service API key
- `CONTACT_TO` - Contact form recipient email
- `NODE_ENV=production`

## 📊 Analytics & Monitoring

The site includes comprehensive analytics and error tracking:

- **Google Analytics 4**: User behavior, conversions, page views
- **Error Boundaries**: React error handling with fallback UI
- **Form Analytics**: Contact form submission tracking
- **Performance Monitoring**: Core Web Vitals tracking

## 🎨 Customization

### Design System
- **Colors**: Defined in `globals.css` with light/dark mode support
- **Typography**: JetBrains Mono for headings, Inter for body text
- **Components**: Shadcn/ui components in `/src/components/ui/`
- **Content**: Centralized in `/src/content/copy.ts`

### Adding New Pages
1. Create new route in `/src/app/`
2. Add navigation link in `/src/content/copy.ts`
3. Update metadata in `layout.tsx`

### Styling Guidelines
- Use Tailwind utility classes
- Follow the signature underline system (`decoration-[6px]`)
- Maintain consistent spacing (`py-20`, `mb-16`)
- Use rounded corners (`rounded-2xl`)

## 🚀 Performance

- **Next.js 15**: Latest framework with Turbopack
- **Image Optimization**: Next.js Image component
- **Font Optimization**: Next.js font loading
- **Code Splitting**: Automatic route-based splitting
- **Static Generation**: Pre-rendered pages for speed

## 🔒 Security

- **Environment Variables**: Sensitive data in `.env.local`
- **Error Handling**: No sensitive data in error messages
- **Form Validation**: Client and server-side validation
- **HTTPS**: Automatic SSL with Vercel/Netlify

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is proprietary to Bloxtr8.

## 🆘 Support

For deployment issues:
1. Check [ENVIRONMENT_SETUP.md](./ENVIRONMENT_SETUP.md)
2. Verify all environment variables are set
3. Check browser console for errors
4. Test contact form functionality

---

**Built with ❤️ for Bloxtr8**
