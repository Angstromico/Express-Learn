# Express.js Learning Journey

This repository contains my first steps in learning **Express.js** as part of the **"Complete NodeJS Developer (GraphQL, MongoDB, + more)"** course. This project represents the initial exercises and implementations I've completed while following the course curriculum.

---

# 📋 Course Progress

This repository tracks my learning progress through the Express.js sections of the course. The implementations here represent:

- **Initial Express.js Setup**: Basic server configuration and routing
- **TypeScript Integration**: Using TypeScript with Express.js for type safety
- **Development Workflow**: Auto-rebuild and restart functionality for efficient learning
- **Core Concepts**: Understanding Express.js fundamentals through hands-on exercises

# 🛠️ Technical Features

- **TypeScript Support**: Write Express.js code in TypeScript for improved type safety
- **Auto-Rebuild and Restart**: Automatically compiles TypeScript and restarts the server when you make changes
- **Preconfigured Build and Watch Scripts**: Simple scripts for building and running the project in development mode

---

# 🛠️ Getting Started

## Prerequisites

- **Node.js**: Ensure you have `Node.js` installed (recommended version: >=14).
- **npm**: Comes with `Node.js`, used to install dependencies.

## Installation

## 1. **Step 1: Clone and Install Dependencies**:

```bash
git clone <repository-url>
cd <repository-folder>
```

## 2. **Step 2: Start Development with Watch**

Run the project in development mode with automatic rebuilding and restarting on file changes:

```bash
 npm install
```

This command will compile the TypeScript files in src/ into JavaScript files in the `dist/` directory, making it ready for deployment.

## 3. **Step 3: Build for Production**

When you’re ready to build the project for production, simply run:

```bash
 npm start
```

### This command will:

1. **Compile TypeScript files** to JavaScript in real-time as you make changes in src.
   Restart the server automatically whenever changes are detected in the compiled `dist/` files.

2. **Restart the server** automatically whenever changes are detected in the compiled dist/ files.

## � Learning Notes

This repository serves as my personal learning journal while progressing through the course. Each implementation represents my understanding of the concepts taught in the "Complete NodeJS Developer" course.

### Technical Configuration
1. The project is configured with `TypeScript` output targeting `ES2020` syntax.
2. The module and moduleResolution are set to `NodeNext` to align with Node.js module standards.
3. Adjust the compilerOptions in tsconfig.json as needed for your project requirements.

### Course Context
- **Course**: Complete NodeJS Developer (GraphQL, MongoDB, + more)
- **Focus**: Express.js fundamentals and best practices
- **Progress**: Initial learning phase with basic implementations
- **Goal**: Build a solid foundation in Express.js development
