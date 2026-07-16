# Project Architecture

This guide explains where code belongs so new student developers can navigate and extend the project confidently.

## Technology

- **React** builds the user interface from reusable components.
- **TypeScript** catches common mistakes before the application runs.
- **Vite** runs the local development server and creates production builds.
- **Tailwind CSS** provides utility classes for styling directly in components.
- **ESLint** checks code quality and common React issues.

## Installation

Install [Node.js](https://nodejs.org/) version 20 or newer. Node.js includes npm, which installs the project packages.

From the project root, run:

```bash
npm install
npm run dev
```

Open the local URL printed in the terminal. Other useful commands are:

```bash
npm run build   # Type-check and create a production build
npm run lint    # Check code quality
npm run preview # Preview the production build locally
```

Tailwind CSS is already installed and connected through `vite.config.ts`. Its global import is in `src/styles/index.css`; no separate Tailwind config file is required for the current setup.

## Folder Map

```text
pup-binan/
├── public/                 # Files served unchanged at the website root
├── src/                    # Application source code
│   ├── assets/             # Files imported by application code
│   │   ├── fonts/          # Local font files
│   │   ├── icons/          # SVG and other icon files
│   │   └── images/         # Photos, illustrations, and backgrounds
│   ├── components/         # Reusable interface pieces
│   │   └── common/         # Generic components used across features/pages
│   ├── pages/              # Complete screens rendered by the application
│   ├── styles/             # Global CSS and Tailwind entry point
│   ├── App.tsx             # Top-level application component
│   └── main.tsx            # Browser entry point; mounts React
├── ARCHITECTURE.md         # This onboarding guide
├── package.json            # Dependencies and npm commands
├── tsconfig*.json          # TypeScript settings
└── vite.config.ts          # Vite, React, and Tailwind setup
```

## Where New Code Goes

- Add a complete screen to `src/pages` (for example, `AboutPage.tsx`).
- Add a reusable UI piece to `src/components`. Use `components/common` only when it is shared broadly.
- Add imported media to the matching `src/assets` subfolder.
- Add site-wide CSS, Tailwind theme tokens, or font declarations to `src/styles`.
- Put a file in `public` only when it must keep its exact filename and be available by a direct URL, such as `/favicon.svg`.

Use PascalCase for React component files (`StudentCard.tsx`) and descriptive names for everything else. Keep a component near the page that uses it until it is genuinely reused; then move it into `components`.

## Data Flow

The current application is intentionally small:

```text
main.tsx → App.tsx → ComingSoonPage.tsx → BrandMark.tsx
```

Add routing, API helpers, feature folders, or state management only when the product needs them. When the application grows, document each new top-level folder here.

## Tailwind Example

Tailwind classes are added through `className`:

```tsx
export function Example() {
  return <p className="text-lg font-semibold text-red-700">Hello!</p>
}
```

Prefer Tailwind utilities for component styling. Reserve global CSS for base styles, shared theme values, or rules that are difficult to express clearly with utilities.

## Scroll Animations

Wrap content in the reusable `ScrollReveal` component when it should animate as it enters the viewport:

```tsx
import { ScrollReveal } from '../components/common/ScrollReveal'

<ScrollReveal delay={200}>
  <h2>Section title</h2>
</ScrollReveal>
```

The optional `delay` is measured in milliseconds. Keep delays short, use animations only where they support the content, and do not modify the reduced-motion fallback in `src/styles/index.css`.
