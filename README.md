# Karthik Palani — Portfolio

My personal site. Static HTML, CSS and a little JavaScript — no framework, no build step.

**About me:** I'm a Senior DevOps Engineer in Chennai, India. I've spent about nine years
on the infrastructure layer — Kubernetes, CI/CD pipelines, cloud architecture, SRE and
embedded test rigs — and these days I mostly build AI agents that run on top of it:
autonomous code review, AI-executed test suites, and project automation.

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
index.html      markup — one page, six sections
portfolio.css   all styles, light + dark
portfolio.js    theme toggle, clock, scroll progress, active nav, reveal
assets/         drop avatar.jpg here to replace the drawn portrait
Dockerfile      nginx:alpine, ~12 MB
nginx.conf      gzip, cache headers, security headers
```

## Adding your photo

Save a square head-and-shoulders photo (600×600 or larger) as `assets/avatar.jpg`.
The page picks it up automatically and applies a pencil filter so it matches the
rest of the drawings. Without it, the hand-drawn SVG portrait stays.

## Notes on the design

The theme is ink and pencil on canvas. The hand-drawn borders aren't images — every
frame is a normal CSS border on a pseudo-element, pushed through an SVG turbulence
filter (`#rough` in `index.html`) so straight lines wobble. Text is never filtered,
so it stays crisp and selectable.

Type is Bricolage Grotesque, Geist, Caveat and JetBrains Mono, loaded from Google Fonts.
Everything respects `prefers-reduced-motion` and the site works with JavaScript disabled.
