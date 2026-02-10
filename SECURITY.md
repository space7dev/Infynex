# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability, please email us at security@infynex.com instead of using the issue tracker.

Please include:

- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

We will respond within 48 hours and work with you to resolve the issue.

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |

## Security Best Practices

This project follows these security practices:

- No sensitive data in client-side code
- Environment variables for configuration
- Input validation on all forms
- XSS prevention with React
- CSRF protection (implement as needed)
- Regular dependency updates

## Dependencies

We regularly update dependencies to patch security vulnerabilities. Run `npm audit` to check for known vulnerabilities.
