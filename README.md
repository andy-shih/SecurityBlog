# Cyber Security Consultant Blog

Astro + Tailwind static personal brand blog for a cyber security consultant. The first version uses placeholder profile data, bilingual Chinese/English copy, five seeded security articles, and a professional dark HUD visual direction.

## Local Development

```bash
npm install
npm run dev
```

## Verification

```bash
npm run build
npm run test:e2e
```

`npm run build` runs `astro check` before generating the static site into `dist/`.

## Replace Placeholder Profile Data

Update `src/config/profile.ts` with your real:

- Name and title
- Email
- GitHub and LinkedIn URLs
- Services, expertise, and certifications

Blog posts live in `src/content/blog/`.

## GitHub Setup

```bash
git init
git add .
git commit -m "feat: scaffold cyber security blog"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

## Cloudflare Pages

Connect the GitHub repository in Cloudflare Pages and use:

- Framework preset: Astro
- Build command: `npm run build`
- Output directory: `dist`
- Root directory: project root
- Environment variable: `NODE_VERSION=22` or newer supported Node runtime

`wrangler.jsonc` also declares `pages_build_output_dir` as `./dist` for direct upload workflows.
