# VSCodePluginDev

Plugin development environment for VSCode with Node.js and TypeScript.

## Development Environment

This repository is configured with a complete VSCode extension development environment that includes:

### Technologies
- **Node.js**: JavaScript runtime environment
- **TypeScript**: Type-safe JavaScript development
- **VSCode Extension API**: For building VSCode plugins

### Features
- TypeScript compilation with strict type checking
- ESLint for code quality and linting
- VSCode debugging configuration
- Test infrastructure with Mocha
- Recommended VSCode extensions

### Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Compile the extension**:
   ```bash
   npm run compile
   ```

3. **Watch mode** (auto-compile on changes):
   ```bash
   npm run watch
   ```

4. **Run linter**:
   ```bash
   npm run lint
   ```

5. **Run tests**:
   ```bash
   npm test
   ```

### Development Workflow

1. Press `F5` to open a new VSCode window with the extension loaded
2. Run `Hello World` command from the command palette (`Ctrl+Shift+P` or `Cmd+Shift+P`)
3. Set breakpoints in your code to debug
4. Edit the code and reload (`Ctrl+R` or `Cmd+R`) to see changes

### Project Structure

```
.
├── .vscode/              # VSCode workspace configuration
│   ├── extensions.json   # Recommended extensions
│   ├── launch.json       # Debug configuration
│   ├── settings.json     # Workspace settings
│   └── tasks.json        # Build tasks
├── src/                  # TypeScript source files
│   ├── extension.ts      # Extension entry point
│   └── test/            # Test files
├── out/                  # Compiled JavaScript (generated)
├── package.json          # Node.js project configuration
├── tsconfig.json         # TypeScript configuration
└── .eslintrc.js         # ESLint configuration
```

### Recommended VSCode Extensions

The following extensions will be recommended when you open this project in VSCode:
- ESLint - Code linting
- TypeScript and JavaScript Language Features - Enhanced TypeScript support

