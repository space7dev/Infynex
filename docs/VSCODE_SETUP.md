# VS Code Settings

Add this to `.vscode/settings.json` for optimal development experience:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "typescript.enablePromptUseWorkspaceTsdk": true,
  "tailwindCSS.experimental.classRegex": [
    ["cn\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"]
  ],
  "files.associations": {
    "*.css": "tailwindcss"
  },
  "editor.quickSuggestions": {
    "strings": true
  }
}
```

## Recommended Extensions

- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript and JavaScript Language Features
- Path Intellisense
- Auto Rename Tag
- GitLens
