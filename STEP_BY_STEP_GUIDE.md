# Step-by-step guide: build and understand this portfolio

This guide follows the assessment PDF. The project is a Vite + React + TypeScript application. Tailwind CSS is configured as the selected UI approach; custom CSS is used for the portfolio's visual identity.

## Step 1 — Install the tools

Install Node.js 20 or later and Visual Studio Code. Open the VS Code terminal and check:

```bash
node -v
npm -v
```

Node runs the development tools. npm installs the libraries listed in `package.json`.

## Step 2 — Create the Vite React TypeScript app

If starting from an empty folder, the command is:

```bash
npm create vite@latest my-portfolio -- --template react-ts
cd my-portfolio
npm install
```

For this supplied project, open the `portfolio-project` folder in VS Code and run `npm install` directly. This also creates `package-lock.json`, which is required by the GitHub Actions workflow using `npm ci`.

## Step 3 — Install and understand the libraries

The supplied `package.json` contains the dependencies. The main ones are:

- `react` and `react-dom`: build and render UI components.
- `vite`: starts the local development server and creates the production build.
- `typescript`: adds static types to JavaScript code.
- `react-router-dom`: moves between the home page and project detail pages without a full page reload.
- `tailwindcss`, `postcss`, `autoprefixer`: configure the selected styling framework.
- `lucide-react`: provides interface icons.
- `jest`, `babel-jest`, `@testing-library/react`, `@testing-library/jest-dom`: test components and interactions.
- `eslint` and `prettier`: check code quality and format files.

## Step 4 — Understand the folder structure

```text
portfolio-project/
  public/                    Public files; place a shareable resume.pdf here
  .github/workflows/         GitHub Pages automation
  src/
    assets/                  Images and other imported assets
    components/              Navbar, footer, project card, reusable headings
    data/                    Your personal profile, skills, projects, education
    hooks/                   Reusable React logic (theme)
    layouts/                 Shared header/footer page layout
    pages/                   Home, project detail, not-found pages
    styles/                  Global styles and responsive rules
    tests/                   Jest component tests
    types/                   TypeScript interfaces and types
    App.tsx                  Route definitions
    main.tsx                 Application entry point
  index.html                 HTML page Vite loads
  vite.config.ts             Vite configuration
  tailwind.config.js         Tailwind file scanning and theme config
  postcss.config.js          Tailwind/PostCSS processing
  package.json               Dependencies and commands
```

## Step 5 — Start from the entry point

`index.html` contains `<div id="root"></div>`. React mounts the application into this element.

`src/main.tsx` calls `ReactDOM.createRoot(...)`, renders `<App />`, and imports the global stylesheet. `React.StrictMode` helps identify some development-time problems.

## Step 6 — Define TypeScript data types

`src/types/index.ts` defines `Theme`, `Project`, and `SkillGroup`. For example, `Project` describes the exact fields a project card/detail page expects. This avoids loosely typed data and follows the PDF's instruction to avoid `any`.

## Step 7 — Keep portfolio content separate from layout

Edit `src/data/portfolio.ts` first. It exports:

- `profile`: name, role, introduction, about text, email and social links.
- `skillGroups`: skills grouped by frontend, backend, database, and tools.
- `projects`: three project records with purpose, contribution, features, and technology stack.
- `education`: the education timeline.

Why this is useful: content changes do not require editing the components. Replace sample email and profile links with your own real links. Check that every project description accurately reflects your contribution before submission.

## Step 8 — Build reusable components

- `Navbar.tsx`: navigation links, mobile menu, and theme toggle.
- `ThemeToggle.tsx`: a strongly typed button that calls the theme handler supplied by its parent.
- `SectionHeading.tsx`: consistent eyebrow/title/description layout for each section.
- `ProjectCard.tsx`: receives one `Project` through props and displays its summary, tags, and details link.
- `Footer.tsx`: reusable footer.

A component is a small reusable piece of UI. `ProjectCard` is reused for every project instead of writing the same HTML three times.

## Step 9 — Create the shared layout

`src/layouts/MainLayout.tsx` places the navigation above `<Outlet />` and the footer below it. React Router renders the selected page inside the outlet. This prevents repeating the same header and footer on each page.

## Step 10 — Implement dark/light mode

`src/hooks/useTheme.ts` uses `useState` to store the selected theme. Its initial state reads `portfolio-theme` from `localStorage`. `useEffect` updates `document.documentElement.dataset.theme` and saves the preference whenever the theme changes. The CSS variables in `src/styles/index.css` change the page colours.

The theme toggle calls `toggleTheme`; it does not directly manipulate the DOM. This keeps React state as the source of truth.

## Step 11 — Build the home page and project filter

`src/pages/HomePage.tsx` renders the Hero, About, Skills, Projects, Education, and Contact sections. It reads the content from `portfolio.ts`.

The project filter uses:

```tsx
const [activeFilter, setActiveFilter] = useState('All');
const filteredProjects = useMemo(() =>
  activeFilter === 'All'
    ? projects
    : projects.filter((project) =>
        project.technologies.some(
          (technology) => technology.toLowerCase() === activeFilter.toLowerCase(),
        ),
    ),
  [activeFilter],
);
```

`useState` remembers the selected filter. `useMemo` recalculates the visible project list when the filter changes. Each filter button updates state; the project grid displays only matching projects.

## Step 12 — Add React Router project detail pages

`src/App.tsx` uses `BrowserRouter`, `Routes`, and `Route`:

- `/` displays `HomePage`.
- `/projects/:projectId` displays `ProjectDetailsPage`.
- `*` displays `NotFoundPage`.

`ProjectDetailsPage.tsx` reads `projectId` using `useParams()`, finds the matching project in the data array, and displays its purpose, contribution, features, and technology stack. A missing ID shows a not-found message.

## Step 13 — Style and make it responsive

`src/styles/index.css` includes Tailwind directives and custom CSS variables. The layout uses CSS Grid/Flexbox and media queries:

- Desktop: multi-column hero, skill cards, and project cards.
- Tablet: fewer columns and adjusted spacing.
- Mobile: single-column content and collapsible navigation.

It also includes visible keyboard focus styles and a reduced-motion preference. Use browser developer tools to check narrow mobile widths and ensure there is no horizontal overflow.

## Step 14 — Test reusable components

Tests are in `src/tests/`:

- `ProjectCard.test.tsx` checks that a project title and its detail link render correctly.
- `ThemeToggle.test.tsx` checks that clicking the theme button calls the supplied handler.

Run:

```bash
npm test
```

Testing Library renders components as a user would see them and queries accessible roles/labels. Jest runs the assertions.

## Step 15 — Run linting, formatting, and production build

```bash
npm run lint
npm run format
npm run format:check
npm run build
```

- Lint checks common code problems.
- Prettier formats code consistently.
- Build runs TypeScript project checks and Vite's production bundler. The output is written to `dist/`.

Fix reported errors before deployment. Run `npm install` once before pushing so `package-lock.json` is created and committed.

## Step 16 — Run the website locally

```bash
npm run dev
```

Open the local URL Vite prints, normally `http://localhost:5173`. Test the navigation, mobile menu, theme persistence after refresh, filters, each project details link, email link, and social links.

## Step 17 — Push the project to GitHub

Create an empty GitHub repository. In the terminal, from the project folder:

```bash
git init
git add .
git commit -m "Create personal portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace the URL with your actual repository URL. Make small meaningful commits as you improve the portfolio.

## Step 18 — Deploy to GitHub Pages

The PDF explains this deployment on pages 7–8. First edit `vite.config.ts`:

```ts
export default defineConfig({
  plugins: [react()],
  base: '/YOUR-REPOSITORY/',
});
```

Use the exact repository name, including both slashes. For a repository named `your-username.github.io`, use `base: '/'`.

The workflow is already included at `.github/workflows/deploy.yml`. It installs dependencies with `npm ci`, builds the project, uploads `dist`, and deploys it. `npm ci` requires the `package-lock.json` generated by `npm install`.

On GitHub, open **Settings → Pages → Build and deployment → Source → GitHub Actions**. Push to `main`, open the Actions tab, and wait for both build and deploy jobs to succeed. Copy the published URL from Settings → Pages and test it in a fresh browser on desktop and mobile.

Important: GitHub Pages can return 404 when refreshing a nested `BrowserRouter` URL. If this happens, switch to `HashRouter` in `src/App.tsx` or configure a compatible fallback. The assessment PDF explicitly mentions this limitation.

## Step 19 — Final submission checklist

- [ ] Replace sample email, GitHub, LinkedIn, and location/profile details as needed.
- [ ] Verify that project descriptions and contributions are accurate.
- [ ] Add a resume only if you are comfortable sharing it publicly.
- [ ] Run tests, lint, formatting check, and production build.
- [ ] Test desktop, tablet, and mobile layouts.
- [ ] Check all links and project routes.
- [ ] Push the source code and README to GitHub.
- [ ] Confirm GitHub Pages live URL works.
- [ ] Add desktop/mobile screenshots to the repository.
- [ ] Prepare a 3–5 minute walkthrough describing design choices, component structure, features, and one challenge.

The PDF's evaluation weights are: UI design 20%, content/functionality 25%, React/TypeScript 15%, responsive design/accessibility 15%, testing/code quality 15%, and deployment/documentation 10%.

## Add your profile photo to the hero section

The portfolio now includes your supplied profile photo at `src/assets/profile-photo.jpg`. The hero section imports it with a responsive arch-shaped frame. The CSS keeps the photo in natural colour with slightly softened saturation so the lavender outfit complements the purple accent theme.

To replace it later, put another image in `src/assets/` named `profile-photo.jpg`. Keep the same filename or update the image path in `src/pages/HomePage.tsx`. The frame uses `object-fit: cover` and `object-position: center 28%`; adjust the second value if you want to move the visible crop up or down.
