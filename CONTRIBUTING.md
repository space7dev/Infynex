# Contributing to Infynex Website

Thank you for your interest in contributing! This document provides guidelines for contributing to this project.

## Development Setup

1. **Fork and Clone**
   ```bash
   git clone https://github.com/yourusername/infynex-website.git
   cd infynex-website
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Create Environment File**
   ```bash
   cp .env.example .env.local
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```

## Code Style

We use ESLint and Prettier to maintain code quality:

- **Run linting**: `npm run lint`
- **Format code**: `npm run format`

### TypeScript Guidelines

- Use TypeScript for all new files
- Define proper types and interfaces
- Avoid `any` type when possible

### Component Guidelines

- Use functional components with hooks
- Keep components small and focused
- Use descriptive prop names
- Add JSDoc comments for complex components

### Styling Guidelines

- Use Tailwind CSS utility classes
- Follow mobile-first approach
- Use custom classes defined in `globals.css` when appropriate
- Maintain consistent spacing and sizing

## Component Structure

```tsx
import { ComponentProps } from 'react'

interface MyComponentProps {
  title: string
  description?: string
}

export default function MyComponent({ title, description }: MyComponentProps) {
  return (
    <div className="container-custom">
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}
```

## File Naming

- Components: PascalCase (e.g., `ServiceCard.tsx`)
- Utilities: camelCase (e.g., `utils.ts`)
- Pages: lowercase with hyphens (e.g., `hire-developers`)

## Commit Messages

Follow conventional commit format:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Test updates
- `chore:` Build/config changes

Example:
```
feat: add testimonials carousel component
fix: correct mobile navigation menu overflow
docs: update README with deployment instructions
```

## Pull Request Process

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Run linting and fix issues: `npm run lint`
4. Format code: `npm run format`
5. Test locally: `npm run build && npm run start`
6. Commit changes with descriptive message
7. Push to your fork: `git push origin feature/your-feature`
8. Create Pull Request with description of changes

## Testing

Before submitting PR:

- [ ] Code builds without errors: `npm run build`
- [ ] No linting errors: `npm run lint`
- [ ] All pages load correctly
- [ ] Forms validate properly
- [ ] Mobile responsive design works
- [ ] Accessibility standards met

## Areas for Contribution

- **Components**: New reusable components
- **Pages**: Additional service pages
- **Features**: Search, filters, animations
- **Documentation**: Improve README, add guides
- **Accessibility**: Improve ARIA labels, keyboard nav
- **Performance**: Optimize images, reduce bundle size
- **SEO**: Enhance meta tags, structured data

## Questions?

Feel free to open an issue for any questions or suggestions.

Thank you for contributing! 🎉
