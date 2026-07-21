# Busch Light Apple Weight Calculator

A deliberately over-engineered, single-purpose calculator for estimating the shipping-scale weight of 12 oz Busch Light Apple cans. It is a client-side Vite + React + TypeScript microsite with a premium dark, frosted-glass visual treatment.

## Features

- Positive whole-can input with keyboard-accessible validation
- Estimated weight in pounds and kilograms
- Separate liquid, aluminum, and complete-24-pack cardboard estimates
- Lightweight Framer Motion transitions and a 300 ms calculation state
- Responsive desktop, tablet, and phone layout
- A few extremely restrained numeric easter eggs

## Getting started

### Prerequisites

- Node.js 20 or later

### Install and run

1. Install dependencies with `npm install`.
2. Start the local development server with `npm run dev`.
3. Open the local URL displayed in the terminal.

### Production build

Run `npm run build` to type-check and create an optimized static build in `dist/`.

Run `npm run preview` to locally serve the production build.

## GitHub Pages deployment

This repository includes a GitHub Actions workflow that deploys the production build to GitHub Pages on pushes to `main`.

The site is built for the repository Pages path:

- `https://burk3405.github.io/Bapple-Weight-Calculator/`

In the repository settings, set **Pages** → **Build and deployment** → **Source** to **GitHub Actions**.

## Weight model

The configurable constants live in [src/constants/weights.ts](src/constants/weights.ts). For each can, the calculator estimates 0.782 lb of liquid plus 0.034 lb of aluminum. It adds 0.40 lb of cardboard only for every complete 24-can case, then converts the total to kilograms.

## Disclaimer

This is an unofficial fan-made project and is not affiliated with, endorsed by, or sponsored by Busch, Anheuser-Busch, or their respective trademark owners. The output is an estimate, not a certified shipping weight.
