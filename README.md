# King Edward Portfolio

Personal portfolio site for **Gyau Edward King** — Forest Resources Technology graduate based in Kumasi, Ghana.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy on Vercel

This project is set up for Vercel (`vercel.json`: Vite build → `dist`).

**Option A — GitHub (recommended)**  
1. Push this repo to GitHub  
2. Import the repo at [vercel.com/new](https://vercel.com/new)  
3. Framework preset: **Vite** (auto-detected). Leave defaults.  
4. Deploy

**Option B — CLI**

```bash
npx vercel
```

Production:

```bash
npx vercel --prod
```

Built with Vite + React. Content lives in `src/data/content.ts`; images in `public/assets/`.
