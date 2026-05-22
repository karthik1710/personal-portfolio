# Karthik Palani — Portfolio

Personal portfolio site for Karthik Palani, Senior DevOps Engineer & Platform Lead.

**Live:** static HTML/CSS/JS — no build step, no dependencies.

---

## Run locally

### Static (no Docker)

Open `index.html` directly in a browser, or serve with any static file server:

```bash
npx serve .
# or
python3 -m http.server 8080
```

### Docker

**Build:**

```bash
docker build -t kp-portfolio .
```

**Run:**

```bash
docker run -p 8080:80 kp-portfolio
```

Open [http://localhost:8080](http://localhost:8080).

**One-liner:**

```bash
docker build -t kp-portfolio . && docker run --rm -p 8080:80 kp-portfolio
```

### Docker Compose

```bash
docker compose up --build
```

Open [http://localhost:8080](http://localhost:8080). Stop with `Ctrl+C` or `docker compose down`.

---

## Project structure

```
portfolio/
├── index.html        # Single-page markup
├── portfolio.css     # All styles (light + dark theme)
├── portfolio.js      # Theme toggle, IST clock, scroll progress
├── uploads/          # Project images
├── Dockerfile        # nginx:1.27-alpine3.21 container
└── nginx.conf        # Gzip, caching, security headers
```

---

## Features

- Light / dark theme with localStorage persistence
- Live IST clock in the nav bar
- Scroll progress indicator
- Responsive layout
- Google Fonts: Bricolage Grotesque, Geist, JetBrains Mono, Newsreader

---

## Docker image details

Base: `nginx:1.27-alpine3.21` (~12 MB). Serves static files with:

- Gzip compression for CSS/JS/SVG
- 30-day cache headers for static assets
- `X-Frame-Options` and `X-Content-Type-Options` security headers
