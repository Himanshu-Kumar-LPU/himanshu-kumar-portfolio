# Himanshu Kumar — Premium Portfolio

A polished personal portfolio built with React, Vite, and Tailwind CSS.

## Overview

This portfolio website showcases projects, certificates, skills, experience, education, and a contact form with WhatsApp integration. It includes a responsive mobile-first layout, a custom animated cursor, a loading screen, and a sleek glassmorphism design.

## Tech Stack

- React 19 + Vite
- Tailwind CSS
- React Icons
- Three.js for hero visuals
- Custom hooks for smooth scrolling and active section tracking

## Key Features

- Responsive hero and content sections for mobile, tablet, and desktop
- Custom loader with animated spinner
- Animated navbar with mobile slide-over menu
- Typed role animation in the hero section
- Project filtering and responsive project cards
- Certificates section with click-to-open images
- Contact form opening WhatsApp with prefilled message
- Smooth scrolling and modern glass UI styling

## Folder Structure

- `src/components` — reusable UI components
- `src/sections` — page sections for each portfolio area
- `src/hooks` — custom hooks for scrolling and behavior
- `src/constants` — portfolio data and links

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## Build for Production

```bash
npm run build
npm run preview
```

## Customize Content

Edit your personal data, links, and images in:

- `src/constants/portfolioData.js`

Also replace the hero image in `public/images/hh.jpg` and update contact or WhatsApp number in `src/sections/Contact.jsx`.

## Notes

If you want to deploy this project, use any static hosting service such as GitHub Pages, Netlify, or Vercel.
