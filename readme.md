# Vite + p5.js + TypeScript Template

This is a starter template for creative coding with [p5.js](https://p5js.org/) using [TypeScript](https://www.typescriptlang.org/) and [Vite](https://vitejs.dev/) as the build tool. Perfect for beginners looking to get started with creative coding in a modern development environment.

## 📁 Project Structure

```
vitep5/
├── assets/           # Static assets like images, fonts, and other media
├── node_modules/     # Dependencies (generated after npm install)
├── src/              # Source code for your creative projects
│   └── index.ts      # Entry point for your p5.js sketch
├── .gitignore        # Files to ignore in version control
├── biome.json        # Biome linter/formatter configuration
├── index.html        # HTML entry point
├── package.json      # Project configuration and dependencies
├── package-lock.json # Dependency lock file (auto-generated)
├── tsconfig.json     # TypeScript configuration
├── vite.config.ts    # Vite build configuration
└── README.md         # This file
```

## 🔍 Key Files Explained

### `index.html`
The main HTML file that loads your p5.js sketch. You typically don't need to modify this unless you want to:
- Add CSS styles
- Include additional scripts
- Change the page title or meta information
- Reference static assets (images, fonts, etc.)

### `assets/` folder
This directory contains static files used in your project:
- Images (PNG, JPG, SVG, GIF, etc.)
- Fonts (TTF, OTF, WOFF, etc.)
- Audio files (MP3, WAV, etc.)
- Other media or data files (JSON, CSV, etc.)

### `src/index.ts`
This is where you write your p5.js code using TypeScript. This is your main sketch file where you'll implement:
- `setup()` function (runs once at the beginning)
- `draw()` function (runs continuously)
- Any other p5.js functions or custom code

### `package.json`
Contains project metadata and defines the available scripts:
- Lists project dependencies
- Configures build scripts
- Sets project name, version, and other metadata

### `tsconfig.json`
TypeScript configuration that:
- Sets compilation options
- Defines TypeScript rules
- Configures type checking behavior

## 🚀 Available Scripts

The following scripts are available in this project:

### `npm start`
```bash
npm start
```
Starts the development server with hot reload. This means:
- Your project will be available at http://localhost:5173 (or another port if 5173 is in use)
- Changes to your code will automatically update in the browser
- Use this during development for quick feedback

### `npm run build`
```bash
npm run build
```
Creates an optimized production build of your project:
- Output goes to the `dist` folder
- Minifies code and optimizes assets for deployment
- Run this when you're ready to deploy your project

### `npm run preview`
```bash
npm run preview
```
Serves the production build locally for testing:
- Lets you preview how your built project will look when deployed
- Useful for final checks before deployment

### `npm run check`
```bash
npm run check
```
Runs [Biome](https://biomejs.dev/) to lint, format, and sort imports in one pass, writing fixes back to your files. Use this before committing to keep code style consistent.

## 🎨 Getting Started

1. **First-time setup**:
   ```bash
   # Install dependencies
   npm install
   ```

2. **Start coding**:
   - Open `src/index.ts` and begin writing your p5.js sketch
   - Run `npm start` to see your changes in real-time

**Important Note:** In contrast to previous exercises in the TypeScript web playground, you **must prefix p5.js functions with `p.`** when using this template. For example: `createCanvas(800, 400);` becomes `p.createCanvas(800, 400);`.

## 📦 Deployment

After running `npm run build`, deploy the contents of the `dist` folder to any static website host such as:
- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting

Happy creative coding! 🎉