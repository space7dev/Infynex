# Infynex - Technology Solutions Company Website

A production-ready company website built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. This modern, responsive website showcases technology services including mobile app development, blockchain solutions, AI/ML, and custom software development.

## 🎯 Quick Start for Google Indexing

**Want to appear in Google search results for "Infynex"?**

1. **Deploy your site** to production (Vercel, Netlify, etc.)
2. **Follow the checklist**: See [GOOGLE_INDEXING_CHECKLIST.md](GOOGLE_INDEXING_CHECKLIST.md)
3. **Read the full guide**: See [SEO_GUIDE.md](SEO_GUIDE.md)

Your site is already SEO-optimized and ready to be indexed by Google!

## 🚀 Features

- **Next.js 14 App Router** - Latest Next.js with app directory
- **TypeScript** - Type-safe code throughout
- **Tailwind CSS** - Utility-first styling with custom design system
- **Fully Responsive** - Mobile-first design that works on all devices
- **SEO Optimized** - Meta tags, OpenGraph, sitemap, and robots.txt configured
- **Performance Optimized** - Image optimization, lazy loading, code splitting
- **Accessibility** - ARIA labels, keyboard navigation, semantic HTML
- **Contact Forms** - React Hook Form with Zod validation
- **Reusable Components** - Modular component architecture
- **Clean Code** - ESLint + Prettier configured

## 📁 Project Structure

```
infynex-website/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout with navbar & footer
│   ├── page.tsx             # Homepage
│   ├── mobile/              # Mobile development page
│   ├── blockchain/          # Blockchain services page
│   ├── ai/                  # AI/ML services page
│   ├── products/            # Product development page
│   ├── hire-developers/     # Developer hiring page
│   ├── portfolio/           # Portfolio showcase
│   ├── testimonials/        # Client testimonials
│   ├── about/               # About us page
│   ├── contact/             # Contact page
│   ├── case-studies/        # Case studies listing
│   ├── rescue-project/      # Project rescue services
│   ├── sitemap.ts           # Dynamic sitemap
│   ├── robots.ts            # Robots.txt
│   └── manifest.ts          # PWA manifest
├── components/              # Reusable React components
│   ├── Navbar.tsx          # Navigation header
│   ├── Footer.tsx          # Footer component
│   ├── Hero.tsx            # Hero section component
│   ├── ServiceCard.tsx     # Service card component
│   ├── TestimonialCard.tsx # Testimonial card
│   ├── CaseStudyCard.tsx   # Case study card
│   └── ContactForm.tsx     # Contact form with validation
├── lib/                     # Utility functions and configs
│   ├── utils.ts            # Utility functions (cn helper)
│   └── config.ts           # Site configuration
├── styles/                  # Global styles
│   └── globals.css         # Tailwind imports & custom styles
├── public/                  # Static assets
│   ├── logo.svg            # Company logo
│   └── favicon.png         # Favicon
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript config
├── tailwind.config.ts      # Tailwind configuration
├── next.config.js          # Next.js configuration
├── .eslintrc.json          # ESLint configuration
├── .prettierrc             # Prettier configuration
└── README.md               # This file
```

## 🛠️ Tech Stack

### Core
- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling

### Forms & Validation
- **React Hook Form** - Form management
- **Zod** - Schema validation

### UI Components
- **Lucide React** - Icon library
- **clsx & tailwind-merge** - Utility for className management

### Code Quality
- **ESLint** - Linting
- **Prettier** - Code formatting
- **TypeScript** - Type checking

## 📋 Prerequisites

- **Node.js** 18.x or higher
- **npm**, **yarn**, or **pnpm**

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Environment Setup

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Infynex Solutions
NEXT_PUBLIC_CONTACT_EMAIL=contact@infynex.agency
```

### 3. Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
npm run build
npm run start
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🎨 Customization

### Colors

Edit the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    // Your primary color shades
  },
  secondary: {
    // Your secondary color shades
  },
}
```

### Site Configuration

Update site information in `lib/config.ts`:

```typescript
export const siteConfig = {
  name: 'Your Company Name',
  description: 'Your description',
  url: 'https://yoursite.com',
  phone: '+1 (555) 123-4567',
  email: 'contact@yoursite.com',
  // ...
}
```

### Navigation

Modify navigation items in `lib/config.ts`:

```typescript
export const navItems = [
  { name: 'Service', href: '/service' },
  // Add or remove items
]
```

## 📱 Pages Overview

- **/** - Homepage with hero, services, case studies, testimonials
- **/mobile** - Mobile app development services
- **/blockchain** - Blockchain development services
- **/ai** - AI & machine learning services
- **/products** - Custom product development
- **/hire-developers** - Developer hiring/staff augmentation
- **/portfolio** - Project portfolio
- **/testimonials** - Client testimonials
- **/about** - Company information
- **/contact** - Contact form and information
- **/case-studies** - Detailed case studies
- **/rescue-project** - Project rescue services

## 🔧 Component Usage

### Hero Component

```tsx
<Hero
  subtitle="Your Subtitle"
  title="Main Heading"
  description="Description text"
  primaryCTA={{ text: 'Button Text', href: '/path' }}
  secondaryCTA={{ text: 'Button Text', href: '/path' }}
/>
```

### Service Card

```tsx
<ServiceCard
  icon={IconComponent}
  title="Service Title"
  description="Service description"
  href="/service-link"
  features={['Feature 1', 'Feature 2']}
/>
```

### Contact Form

```tsx
<ContactForm />
```

The form includes validation and handles submission. Update the submission logic in `components/ContactForm.tsx`.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy

### Other Platforms

This is a standard Next.js app and can be deployed to:
- Netlify
- AWS Amplify
- Digital Ocean
- Self-hosted with Node.js

## 📊 Performance

- Lighthouse score target: 90+
- Optimized images with next/image
- Code splitting and lazy loading
- Minimal JavaScript bundle size

## ♿ Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Proper heading hierarchy
- Color contrast compliance

## 🔒 Security

- No sensitive data in client-side code
- Environment variables for configuration
- Form validation on client and server (extend as needed)

## 📧 Contact Form Integration

The contact form is ready to integrate with:
- Email services (SendGrid, Resend, AWS SES)
- CRM systems (HubSpot, Salesforce)
- Backend APIs

Update the `onSubmit` function in `components/ContactForm.tsx` to integrate with your backend.

## 🤝 Contributing

This is a production website template. Customize it for your needs:

1. Update branding and content
2. Replace placeholder images
3. Configure contact form backend
4. Add analytics (Google Analytics, Plausible, etc.)
5. Set up error tracking (Sentry, LogRocket, etc.)

## 📄 License

This project is created for demonstration purposes.

## 🆘 Support

For issues or questions:
- Open an issue on GitHub
- Contact: contact@infynex.agency

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
