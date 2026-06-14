# Andy.S Security Blog

Astro + Tailwind static personal brand blog for Andy.Shih. The site focuses on OPSWAT experience, critical infrastructure protection, secure file workflows, CISSP credentials, and practical security writing with a professional dark HUD visual direction.

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

## Profile Data

Profile content is centralized in `src/config/profile.ts`:

- Site name: Andy.S
- Resume name: Andy.Shih
- Email: andy.shih@opswat.com
- GitHub: https://github.com/andy-shih
- OPSWAT experience and CISSP credential

Blog posts are separated by language:

- English: `src/content/blog/en/`
- Traditional Chinese: `src/content/blog/zh/`

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
