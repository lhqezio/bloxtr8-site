# Bloxtr8 Environment Variables Setup

Create a `.env.local` file in your project root with the following variables:

## Required Variables (Current Implementation)

```bash
# ===========================================
# ANALYTICS & TRACKING
# ===========================================
# Google Analytics 4 - Get from Google Analytics dashboard
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# ===========================================
# EMAIL & COMMUNICATION (REQUIRED)
# ===========================================
# Resend API Key - REQUIRED for contact form to work
RESEND_API_KEY=re_xxxxxxxxxx

# Contact form recipient email - REQUIRED
CONTACT_TO=contact@bloxtr8.com

# ===========================================
# DEVELOPMENT
# ===========================================
NODE_ENV=development
```

## Setup Instructions

### 1. Create Environment File
```bash
# Create .env.local file in your project root
touch .env.local
```

### 2. Get Required API Keys

#### Google Analytics
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property for your website
3. Copy the Measurement ID (starts with G-)
4. Add it as `NEXT_PUBLIC_GA_ID`

#### Resend (for email)
1. Go to [Resend](https://resend.com/)
2. Create an account and verify your domain
3. Generate an API key
4. Add it as `RESEND_API_KEY`

### 3. Example .env.local File
```bash
# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Email
RESEND_API_KEY=re_xxxxxxxxxx
CONTACT_TO=contact@bloxtr8.com

# Environment
NODE_ENV=development
```

## Security Notes

1. **Never commit `.env.local` to version control**
2. **Use different values for development/production**
3. **Keep your API keys secure**

## Troubleshooting

### Analytics Not Working
- Check that `NEXT_PUBLIC_GA_ID` is set correctly
- Verify the GA ID starts with `G-`
- Restart your development server

### Contact Form Not Working
- Verify `RESEND_API_KEY` is valid
- Check that `CONTACT_TO` email is correct
- Test API key in Resend dashboard

### Environment Variables Not Loading
- Ensure file is named `.env.local` (not `.env`)
- Restart your development server after changes
- Check for typos in variable names
