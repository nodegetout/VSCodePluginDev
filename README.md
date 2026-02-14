# VSCodePluginDev

A complete VSCode plugin development environment with Node.js and TypeScript.

## Development Environment

This project provides a fully configured development environment for building VSCode extensions with:

- **Node.js**: JavaScript runtime environment
- **TypeScript**: Type-safe JavaScript development
- **ESLint**: Code linting and style enforcement
- **Mocha**: Testing framework
- **VSCode Extension API**: Full support for VSCode extension development

## Prerequisites

- Node.js (v18 or later recommended)
- Visual Studio Code

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Compile TypeScript:**
   ```bash
   npm run compile
   ```

3. **Run in development mode:**
   - Press `F5` in VSCode to open a new Extension Development Host window
   - Or use the "Run Extension" configuration from the Debug panel

## Available Scripts

- `npm run compile` - Compile TypeScript to JavaScript
- `npm run watch` - Compile in watch mode for development
- `npm run lint` - Run ESLint on source files
- `npm run test` - Run test suite
- `npm run vscode:prepublish` - Prepare for publishing

## Project Structure

```
.
├── .vscode/              # VSCode configuration
│   ├── extensions.json   # Recommended extensions
│   ├── launch.json       # Debug configurations
│   ├── settings.json     # Workspace settings
│   └── tasks.json        # Build tasks
├── src/                  # TypeScript source files
│   ├── extension.ts      # Main extension file
│   └── test/             # Test files
├── out/                  # Compiled JavaScript (generated)
├── package.json          # Project dependencies and metadata
├── tsconfig.json         # TypeScript configuration
└── .eslintrc.js          # ESLint configuration
```

## VSCode Configuration

### Recommended Extensions

The development environment automatically recommends:
- ESLint - Code linting
- TypeScript Next - Latest TypeScript features

### Debug Configurations

Two debug configurations are available:
1. **Run Extension** - Launch extension in development mode
2. **Extension Tests** - Run test suite

### Tasks

- **Watch Mode** - Continuously compile TypeScript (default build task)
- **Compile** - One-time TypeScript compilation

## Development Workflow

1. Make changes to TypeScript files in `src/`
2. Use `npm run watch` or press `Ctrl+Shift+B` to start watch mode
3. Press `F5` to launch Extension Development Host
4. Test your changes in the new window
5. Run `npm run lint` to check code style
6. Run `npm test` to run tests

## Contributing

1. Fork the repository
2. Create your feature branch
3. Make your changes
4. Run linting and tests
5. Submit a pull request

## License

See LICENSE file for details.
