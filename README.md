# Basekit (create-basekit) 🚀

> [!IMPORTANT]
> **Basekit** (formerly `create-rst`) is a premium, production-ready frontend starter kit designed for performance, scalability, and a superior developer experience. 

It is a modern, full-stack-ready frontend boilerplate that now officially supports both **Next.js 16** and **React 19 (Vite 6)**. It features a modular architecture designed to support Public pages, Admin dashboards, and User dashboards right out of the box with extensive pre-configured tooling.

---

## 🚀 Getting Started

The recommended way to start a new project is using our interactive CLI. It allows you to customize your template by selecting your preferred framework and the modules you need.

### 1. Initialize Project

Run the following command in your terminal:

```bash
npx create-basekit my-awesome-app
```

### 2. Follow the Interactive Prompts

The CLI will guide you through:
1. **Naming** your project.
2. **Selecting Framework**: Choose between **React (Vite)** or **Next.js**.
3. **Selecting Modules**:
   - `Full Template`: (Public + Admin + User)
   - `Public + Admin Dashboard`
   - `Admin + User Dashboard`
   - `Public Pages Only`
   - `Admin Dashboard Only`

### 3. Start Developing

Navigate into your new project directory and start the development server:

```bash
cd my-awesome-app
npm install
npm run dev
```

---

## ✨ Features & Pre-configured Setup

When you generate a template with `create-basekit`, you get a complete ecosystem of tools pre-configured and ready to use:

- **⚡ Modern Stack**: Choose between **Next.js 16 (App Router)** for powerful SSR/SSG capabilities, or **React 19 + Vite 6** for lightning-fast SPAs.
- **🎨 Tailwind CSS v4**: Experience the latest in utility-first CSS with native cascade layers and high-performance styling.
- **🏗️ Advanced Routing**: Fully configured layouts, protected routes, and authentication flows for both Next.js App Router and React Router.
- **🧩 Reusable Components**: A comprehensive library of pre-built, accessible UI components customized for your specific module choices.
- **📊 Dashboards Ready**: Pre-made, fully responsive Admin and User dashboard layouts out of the box.
- **🛠️ Robust State Management**: **Redux Toolkit** combined with **Redux Persist** for seamless state synchronization and robust local storage caching.
- **🎭 Motion & UI Primitives**: 
  - **Shadcn UI** & **Base UI**: Accessible, unstyled UI primitives.
  - **Framer Motion**: Production-ready and highly customizable animations.
  - **Lucide React** & **React Icons**: Beautiful, consistent iconography.
- **📝 Form Handling**: **React Hook Form** integrated tightly with **Zod** for schema-based, type-safe validation.
- **🔔 Notifications & Dialogs**: **Sonner** for sleek toasts and **SweetAlert2** for premium modal experiences.
- **🌐 Network Ready**: **Axios** pre-configured for complex API interactions, interceptors, and environment variable support.

---

## 📦 Available Scripts

*(These commands apply to the generated project)*

- `npm run dev`: Start the development server.
- `npm run build`: Build the application for production deployment.
- `npm run start` / `npm run preview`: Start the production server locally (after building).
- `npm run lint`: Run ESLint to check for code quality.

---

## 📄 License

This project is licensed under the **MIT License**.

Built with ❤️ by [naim0018](https://github.com/naim0018)
