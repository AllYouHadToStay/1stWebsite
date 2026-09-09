# Rahaf’s Cutbook

An editorial scrapbook portfolio for **Rahaf** — an Information Systems student interested in UI/UX, creative technology, and designing useful experiences that look delightful too.

![Stack](https://img.shields.io/badge/Next.js-14-black?style=flat-square) ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square) ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3-38BDF8?style=flat-square)

## Quick start

Install dependencies, then start the local development server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Edit the portfolio

Nearly all portfolio content lives in one friendly file:

[`data/site-content.json`](./data/site-content.json)

Change the name, role, email, hero wording, timeline entries, skills, projects, social links, and every footer message there. No component editing is needed for routine content updates.

### Add or replace the hero image

1. Put an image in [`public/`](./public), for example `public/rahaf-photo.jpg`.
2. Set the `hero.image` value in the JSON to `"/rahaf-photo.jpg"`.
3. Optionally update `hero.imageAlt` for accessibility.

The included `public/rahaf-avatar.svg` is an illustrated default and can be replaced at any time.

### Social links

Links without an `href` are hidden. To enable a link, add its destination:

```json
{ "label": "GitHub", "href": "https://github.com/your-username" }
```

Recognized services automatically receive their icon: Email, Instagram, TikTok, LinkedIn, GitHub, YouTube, Twitter/X, Facebook, Dribbble, and Website. Any new service still appears automatically with a clean generic link icon.

### Timeline and project entries

Add a timeline entry by copying one object in `timeline`. The site will create a new scrapbook card automatically. The `projects` array controls the two featured work cards; edit their title, type, caption, and optional subtitle or symbol to update them.

## Theme picker

The **skills & works** section reads every theme picker from `themePickers` in `data/site-content.json`. Clicking one changes the page’s color variables smoothly in real time. Add as many four-color pickers as you want:

```json
{ "name": "lavender", "colors": ["#9A82D6", "#D9C8FF", "#F7F3ED", "#30284A"] }
```

## Project structure

```text
app/                 Next.js pages, layout, and global styling
components/          Reusable editorial sections and paper cards
data/site-content.json  Portfolio content and links
public/              Replaceable images and artwork
```

## Design notes

- Paper grain, taped polaroids, stickers, and tilted cards preserve the warm scrapbook look.
- Framer Motion supplies gentle reveals, hover lifts, and the interactive envelope.
- Animations honor `prefers-reduced-motion`.
- The layout is responsive and designed to stack cleanly on smaller screens.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the development website |
| `npm run build` | Creates a production build |
| `npm run start` | Runs the production build |

## Deploy to GitHub Pages

The repository includes a ready-to-run [GitHub Pages workflow](./.github/workflows/deploy-pages.yml). Push the project to GitHub, then open **Settings → Pages** and choose **GitHub Actions** as the source. Every push to `main` builds and publishes the static website.

The workflow automatically uses your repository name as the correct GitHub Pages path, so images and site assets work for project pages such as `https://username.github.io/repository-name/`.

---

Made with curiosity, tiny details, and good taste.
