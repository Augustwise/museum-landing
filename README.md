# NAMU — National Art Museum of Ukraine Landing Page

A responsive landing page for the National Art Museum of Ukraine (NAMU). The page introduces the museum, lists current exhibitions and lectures, shows a gallery of works from the collection, and lets visitors subscribe to the newsletter. Built from scratch with semantic HTML, SCSS and vanilla JavaScript — no UI frameworks, no CSS libraries.

## Live Demo

Experience the live website: **[NAMU Landing Page](https://Augustwise.github.io/museum-landing/)**

## Design Reference

The layout follows the original design: **[Figma design](https://www.figma.com/file/cRBCqE06cDrY3s4jX7h3iY/%D0%9D%D0%90%D0%9C%D0%A3-(Edit)?node-id=0%3A1)**

## Technologies Used 💻

### Core

- **HTML5** — semantic markup, `lang="uk"`, meaningful `alt` text on every image
- **SCSS** (Sass) — variables, mixins, `@extend`, nesting, partials per section
- **JavaScript (ES6+)** — vanilla, no dependencies

### Architecture & Methodology

- **BEM** — naming convention for blocks, elements and modifiers
- **Mobile-first** — styles start at 320px and scale up through `min-width` media queries
- **Design tokens** — colors, breakpoints, column widths and gutters live in `_vars.scss`

### Tooling

- **Parcel** (v2.12) — zero-config bundler and dev server
- **ESLint** (`@mate-academy/eslint-config`) — JavaScript code quality
- **Stylelint** (`@mate-academy/stylelint-config` + `stylelint-scss`) — SCSS code quality
- **LintHTML** (`@mate-academy/linthtml-config`) — HTML validation
- **Prettier** — code formatting
- **Cypress** (via `@mate-academy/scripts`) — layout tests
- **GitHub Actions** — CI: lint + tests on every pull request
- **GitHub Pages** — hosting and deployment

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/Augustwise/museum-landing.git
cd museum-landing
```

2. Install dependencies:

```bash
npm install
```

3. Run the project locally:

```bash
npm start
```

The dev server starts on [http://localhost:8080](http://localhost:8080) with hot reload.

### Other Scripts

| Command | Description |
| --- | --- |
| `npm run build` | Build the production bundle |
| `npm run lint` | Run ESLint, Stylelint and LintHTML |
| `npm test` | Run linters and Cypress tests |
| `npm run deploy` | Deploy the build to GitHub Pages |

## Features

- **Responsive Design** — mobile-first, three breakpoints: 320px / 768px / 1280px, on a 2 / 6 / 12-column grid.
- **Burger Menu** — slide-in panel with a backdrop; closes on button, backdrop click or `Escape`.
- **Gallery** — CSS Grid mosaic on desktop, swipeable slider on mobile.
- **Native Scroll-Snap Slider** — CSS `scroll-snap` instead of a carousel library; JS only syncs the dots.
- **Subscription Form** — email form over a full-bleed background image.
- **Smooth Scrolling** — anchor navigation between sections, plus a scroll-to-top button.
- **Performance** — self-hosted `woff2` subsets, WebP images, preloaded hero, lazy-loaded rest, zero layout shift.
- **Accessibility** — descriptive `alt` text, `aria-hidden` on decorative images, keyboard-closable menu.

## Project Structure

```
src/
├── index.html            # Markup
├── fonts/                # Self-hosted woff2 fonts (Montserrat, IBM Plex Sans)
├── images/               # WebP images, SVG icons and logo
├── scripts/
│   ├── main.js           # Burger menu, backdrop, scroll-to-top
│   └── slider.js         # Gallery slider (scroll-snap + pagination dots)
└── styles/
    ├── main.scss         # Entry point: base styles, header, hero, menu
    ├── _utils.scss       # Aggregates vars, mixins and extends
    └── utils/
        ├── _vars.scss    # Colors, breakpoints, grid tokens
        ├── _mixins.scss
        ├── _extends.scss
        ├── _fonts.scss
        ├── _events.scss
        ├── _lecture.scss
        ├── _gallery.scss
        ├── _subscription.scss
        └── _footer.scss
```

## Credits

Original design by **Zhyriada Marina**. Content and imagery belong to the National Art Museum of Ukraine.
