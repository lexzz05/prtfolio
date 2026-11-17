# Ananthalekshmi K — Personal Portfolio

A responsive personal portfolio built with React, TypeScript, Vite, React Router, and Tailwind CSS. The visual layer uses custom CSS alongside Tailwind setup so the design remains consistent and easy to personalise.

## Features

- Home, About, Skills, Projects, Education, and Contact sections
- Reusable typed React components
- Project technology filters
- Project detail routes using React Router
- Dark/light theme saved in localStorage
- Responsive navigation and layouts
- Keyboard focus styles and semantic HTML
- Jest + React Testing Library component tests
- ESLint and Prettier configuration
- GitHub Pages deployment workflow

## Getting started

1. Install Node.js 20 or later.
2. Open this folder in VS Code.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local URL printed by Vite (usually http://localhost:5173).

## Before publishing

Edit `src/data/portfolio.ts` and replace the sample email, GitHub, LinkedIn, project descriptions, and any project links with your real details. Do not publish private contact information. Add your own resume as `public/resume.pdf` only if you are comfortable sharing it. Then add a resume download link in the hero or contact section if you want that feature.

## Commands

- `npm run dev` — start development server
- `npm run build` — type-check and create production build
- `npm run preview` — preview production build
- `npm test` — run Jest tests
- `npm run lint` — run ESLint
- `npm run format` — format files with Prettier
- `npm run format:check` — check formatting

## Folder structure

```text
src/
  assets/       Static assets (images, resume if shared)
  components/   Reusable UI components
  data/         Portfolio content
  hooks/        Custom React hooks (theme)
  layouts/      Shared page layout
  pages/        Home, project details, not-found pages
  styles/       Global styling
  tests/        Jest and React Testing Library tests
  types/        Shared TypeScript types
  App.tsx       Route definitions
  main.tsx      React entry point
.github/workflows/deploy.yml  GitHub Pages deployment
```

## GitHub Pages deployment

1. Create a GitHub repository and push this project to the `main` branch.
2. If the repository is named `your-repository`, set `base: '/your-repository/'` in `vite.config.ts`. If it is named `your-username.github.io`, use `base: '/'`.
3. Open GitHub repository → Settings → Pages → Build and deployment → Source → GitHub Actions.
4. Push to `main` and open the Actions tab.
5. After the workflow succeeds, copy the published URL from Settings → Pages and test it on mobile and desktop.

The project currently uses `BrowserRouter`. GitHub Pages may return 404 when refreshing nested routes. If that happens, use `HashRouter` in `src/App.tsx` as the assessment PDF suggests, or configure a compatible fallback.

## Notes

This repository contains starter portfolio content based on the details supplied for the project. Review every statement and link before submitting. No employment history, certifications, or achievements have been invented.
