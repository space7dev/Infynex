# Quick Reference Guide

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Key Files

| File | Purpose |
|------|---------|
| `app/layout.tsx` | Root layout with nav & footer |
| `app/page.tsx` | Homepage |
| `lib/config.ts` | Site-wide configuration |
| `lib/utils.ts` | Utility functions |
| `styles/globals.css` | Global styles & Tailwind |
| `tailwind.config.ts` | Tailwind configuration |

## 🎨 Design Tokens

### Colors
- **Primary**: Blue (`primary-600`)
- **Secondary**: Gray (`secondary-600`)
- **Success**: Green
- **Warning**: Yellow
- **Error**: Red

### Common Classes
```css
.container-custom    /* Max-width container with padding */
.section-padding     /* Vertical section spacing */
.btn-primary         /* Primary button style */
.btn-secondary       /* Secondary button style */
.btn-outline         /* Outline button style */
.card                /* Card component style */
.text-gradient       /* Gradient text effect */
```

## 📄 Page Routes

| Route | File |
|-------|------|
| `/` | `app/page.tsx` |
| `/mobile` | `app/mobile/page.tsx` |
| `/blockchain` | `app/blockchain/page.tsx` |
| `/ai` | `app/ai/page.tsx` |
| `/products` | `app/products/page.tsx` |
| `/hire-developers` | `app/hire-developers/page.tsx` |
| `/portfolio` | `app/portfolio/page.tsx` |
| `/testimonials` | `app/testimonials/page.tsx` |
| `/about` | `app/about/page.tsx` |
| `/contact` | `app/contact/page.tsx` |
| `/case-studies` | `app/case-studies/page.tsx` |
| `/rescue-project` | `app/rescue-project/page.tsx` |

## 🧩 Components

### Hero
```tsx
<Hero
  subtitle="Subtitle"
  title="Main Title"
  description="Description"
  primaryCTA={{ text: 'Click me', href: '/path' }}
  secondaryCTA={{ text: 'Or me', href: '/path' }}
/>
```

### ServiceCard
```tsx
<ServiceCard
  icon={IconComponent}
  title="Service"
  description="Details"
  href="/link"
  features={['Feature 1', 'Feature 2']}
/>
```

### TestimonialCard
```tsx
<TestimonialCard
  name="John Doe"
  role="CEO"
  company="Company"
  content="Testimonial text"
  rating={5}
/>
```

### CaseStudyCard
```tsx
<CaseStudyCard
  title="Project"
  client="Client"
  category="Category"
  description="Description"
  results={['Result 1', 'Result 2']}
  href="/case-study"
/>
```

### ContactForm
```tsx
<ContactForm />
```

## 🔧 Configuration

### Update Site Info
Edit `lib/config.ts`:
```typescript
export const siteConfig = {
  name: 'Your Company',
  description: 'Your description',
  url: 'https://yoursite.com',
  phone: '+1 (555) 123-4567',
  email: 'contact@yoursite.com',
  // ...
}
```

### Update Navigation
Edit `lib/config.ts`:
```typescript
export const navItems = [
  { name: 'Service', href: '/service' },
  // ...
]
```

### Update Colors
Edit `tailwind.config.ts`:
```typescript
theme: {
  extend: {
    colors: {
      primary: { ... },
      secondary: { ... },
    }
  }
}
```

## 🌐 Environment Variables

Create `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Your Company
NEXT_PUBLIC_CONTACT_EMAIL=contact@example.com
```

## 📦 Build & Deploy

```bash
# Build for production
npm run build

# Test production build locally
npm run start

# Deploy to Vercel
vercel --prod

# Generate static export (if using static hosting)
npm run build && npx next export
```

## 🐛 Common Issues

### Port 3000 already in use
```bash
# Use different port
PORT=3001 npm run dev
```

### Build errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Styling not updating
```bash
# Clear Tailwind cache
rm -rf .next
npm run dev
```

## 📊 Performance Tips

- Use `next/image` for all images
- Implement lazy loading for heavy components
- Use dynamic imports for code splitting
- Optimize fonts with `next/font`
- Monitor bundle size with `npm run build`

## ♿ Accessibility Checklist

- [ ] Semantic HTML elements
- [ ] ARIA labels on interactive elements
- [ ] Keyboard navigation support
- [ ] Proper heading hierarchy
- [ ] Alt text for images
- [ ] Color contrast compliance
- [ ] Focus indicators visible

## 📱 Testing

### Browsers
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

### Devices
- Desktop (1920x1080)
- Laptop (1366x768)
- Tablet (768x1024)
- Mobile (375x667)

## 🔗 Useful Links

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
