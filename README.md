# Karthik Palani — Portfolio

My personal site. Static HTML, CSS and a little JavaScript — no framework, no build step.

**About me:** I'm a Senior DevOps Engineer in Chennai, India, working toward AI solutions
architect. I've spent about nine years on the infrastructure layer — Kubernetes, CI/CD
pipelines, cloud architecture, SRE and embedded test rigs — and these days I design the
systems that put AI agents into production: autonomous code review, AI-executed test
suites, project automation, and the shared model-routing, MCP and retrieval platform
underneath them.

Currently leading a full-stack and DevOps team at ESAB India.

- **Site:** [karthikpalani.com](https://karthikpalani.com)
- **Email:** karthikpalani1710@gmail.com
- **LinkedIn:** [in/karthik-palani](https://www.linkedin.com/in/karthik-palani/)
- **GitHub:** [karthik1710](https://github.com/karthik1710) · **GitLab:** [karthikpalani](https://gitlab.com/karthikpalani)

---

## Run it

```bash
python3 -m http.server 8080
```

Then open <http://localhost:8080>. Opening `index.html` directly in a browser works too.

### Docker

```bash
docker compose up --build
```

Or without Compose:

```bash
docker build -t kp-portfolio . && docker run --rm -p 8080:80 kp-portfolio
```

---

## Files

```
index.html      markup — one page, seven sections
portfolio.css   all styles, light + dark
portfolio.js    theme toggle, clock, scroll progress, active nav, reveal
favicon.svg     KP monogram; favicon-32.png and apple-touch-icon.png are
                rasterised from it for browsers without SVG icon support
Dockerfile      nginx:alpine, ~12 MB
nginx.conf      gzip, cache headers, security headers
```

## Notes on the design

The theme is ink on canvas. The ground is a woven linen texture built from layered
repeating gradients — warp and weft threads plus coarser slubs at a different period,
so it never resolves into a regular grid — with an SVG-turbulence gesso mottle and a
stretched-canvas vignette over the top.

The hand-drawn borders aren't images either: every frame is a normal CSS border on a
pseudo-element, pushed through an SVG turbulence filter (`#rough` in `index.html`) so
straight lines wobble. Text is never filtered, so it stays crisp and selectable. One
caveat worth knowing — a perfectly straight horizontal or vertical path has a
zero-area bounding box, which collapses the filter region and makes the line vanish,
so the diagram's connectors carry their wobble in the path data instead.

Type is Bricolage Grotesque, Geist, Caveat and JetBrains Mono, loaded from Google Fonts.
Everything respects `prefers-reduced-motion` and the site works with JavaScript disabled.
