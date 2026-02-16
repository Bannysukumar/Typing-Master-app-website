# Typing Master Website

Simple React website for the Typing Master typing speed test app. Includes Home, About, Privacy Policy, and Contact pages.

## Run locally

```bash
cd website
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
```

Output is in `dist/`.

## Deploy to Vercel

1. Push this repo to GitHub (or connect your Git provider in Vercel).
2. Go to [vercel.com](https://vercel.com) and sign in.
3. Click **Add New** → **Project** and import your repository.
4. Set **Root Directory** to `website`.
5. Vercel will detect Vite; keep **Build Command**: `npm run build` and **Output Directory**: `dist`.
6. Click **Deploy**.

Or use the Vercel CLI from the `website` folder:

```bash
cd website
npm i -g vercel
vercel
```

Follow the prompts and deploy. The `vercel.json` in this folder configures client-side routing so all routes (e.g. `/privacy`, `/contact`) work correctly on Vercel.
