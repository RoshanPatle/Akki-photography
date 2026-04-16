# Lumière Photo Studio

A luxury dark-themed photo studio website built with **React + Vite + Tailwind CSS**.

## Project Structure

```
photo-studio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Fixed navbar with mobile hamburger menu
│   │   ├── Hero.jsx            # Full-screen hero with background image
│   │   ├── Stats.jsx           # Animated stats row (glass cards)
│   │   ├── Portfolio.jsx       # Filterable image portfolio grid
│   │   ├── Services.jsx        # Services cards with feature lists
│   │   ├── About.jsx           # Story layout + team cards
│   │   ├── Testimonials.jsx    # Client testimonial cards
│   │   ├── Contact.jsx         # Contact form + info panel
│   │   └── Footer.jsx          # Multi-column footer
│   ├── data/
│   │   └── index.js            # All site content / data arrays
│   ├── hooks/
│   │   └── useFadeUp.jsx       # IntersectionObserver fade-up hook
│   ├── App.jsx                 # Root component — assembles all sections
│   ├── index.css               # Tailwind directives + custom component classes
│   └── main.jsx                # React DOM entry point
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production
```bash
npm run build
```
Output goes to the `dist/` folder.

### 4. Preview production build
```bash
npm run preview
```

## Customisation

### Update content
All text, images, and data live in **`src/data/index.js`**.
Edit the exported arrays to change portfolio items, services, team members, testimonials, etc.

### Colors
The gold accent color and dark backgrounds are set as CSS custom properties in `src/index.css`
and extended in `tailwind.config.js`. Change `#c9a96e` to your preferred brand color.

### Fonts
Fonts are loaded from Google Fonts in `index.html`. Replace the import URL and update
`tailwind.config.js → theme.extend.fontFamily` to switch fonts.

### Adding a new section
1. Create `src/components/MySection.jsx`
2. Import and add it to `src/App.jsx`

## Tech Stack
- **React 18** — UI library
- **Vite 5** — build tool & dev server
- **Tailwind CSS 3** — utility-first styling
- **Custom hooks** — `useFadeUp` for scroll animations
- **Google Fonts** — Cormorant Garamond + Syne
