# a4-resume

My CV as a static web page on GitHub Pages. It reads well on a phone,
switches to dark mode with the system, and prints (or saves as PDF) on A4.

## Editing

All content lives in [`src/data/resume-data.ts`](src/data/resume-data.ts).
The photo is `src/data/avatar.jpg`. In `summary`, a blank line starts a new
paragraph.

```bash
pnpm install
pnpm dev     # http://localhost:3000
pnpm check   # lint and format check
pnpm build   # static site in ./out
```

Pushing to `main` builds and deploys the site with
[`.github/workflows/pages.yml`](.github/workflows/pages.yml). Pull requests
only build it.

## What else is published

- `/cv.md`: the CV as markdown
- `/cv.txt`: the CV as 80-column text (`curl <site>/cv.txt`)
- `/llms.txt`: the markdown with a note for AI tools
- `/og.png`: the link preview image
- Press Ctrl/⌘ + J on the page for a command menu with links and print.

# Credits

Built on [BartoszJarocki/cv](https://github.com/BartoszJarocki/cv) (MIT, see
[LICENSE](LICENSE)). Previously based on
[mertbakir/resume-a4](https://gitlab.com/mertbakir/resume-a4).
