# Deployment Guide

## Vercel (Recommended)

Vercel is the easiest way to deploy your Next.js application.

### Deploy with Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Deploy with Vercel Dashboard

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Import your GitHub repository
5. Configure environment variables
6. Click "Deploy"

### Environment Variables

Add these in Vercel dashboard:

```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_SITE_NAME=Infynex Solutions
NEXT_PUBLIC_CONTACT_EMAIL=contact@infynex.agency
```

## Netlify

### Deploy with Netlify CLI

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod
```

### Build Settings

- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Functions directory**: (leave empty)

## AWS Amplify

1. Connect your GitHub repository
2. Configure build settings:
   - Build command: `npm run build`
   - Base directory: (leave empty)
   - Output directory: `.next`
3. Add environment variables
4. Deploy

## Docker

### Dockerfile

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### Build and Run

```bash
# Build image
docker build -t infynex-website .

# Run container
docker run -p 3000:3000 infynex-website
```

## Traditional Hosting

### Build Static Export (if applicable)

```bash
npm run build
```

Upload `.next` folder to your hosting provider.

### Node.js Server

Requirements:
- Node.js 18+
- PM2 (process manager)

```bash
# Install PM2
npm i -g pm2

# Start application
pm2 start npm --name "infynex" -- start

# Save PM2 configuration
pm2 save

# Setup PM2 to start on boot
pm2 startup
```

## Custom Domain

### Vercel

1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### Netlify

1. Go to Domain Settings
2. Add custom domain
3. Update DNS records

## SSL Certificate

Most hosting providers (Vercel, Netlify, AWS) provide automatic SSL certificates via Let's Encrypt.

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify forms submit properly
- [ ] Check mobile responsiveness
- [ ] Test contact form
- [ ] Verify environment variables
- [ ] Check SEO meta tags
- [ ] Test performance with Lighthouse
- [ ] Verify analytics tracking (if added)
- [ ] Check all external links
- [ ] Test on multiple browsers

## Monitoring

Consider adding:
- [Vercel Analytics](https://vercel.com/analytics)
- [Google Analytics](https://analytics.google.com)
- [Sentry](https://sentry.io) for error tracking
- [LogRocket](https://logrocket.com) for session replay

## Continuous Deployment

For automatic deployments on push:

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      # Add deployment steps for your hosting provider
```

## Rollback

### Vercel

```bash
# List deployments
vercel ls

# Rollback to specific deployment
vercel rollback [deployment-url]
```

### With Git

```bash
# Revert to previous commit
git revert HEAD
git push origin main
```
