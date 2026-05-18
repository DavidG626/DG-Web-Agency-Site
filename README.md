# DG Web Agency

Marketing site for DG Web Agency — a Pasadena-based web design studio building websites for local small businesses.

**Live site:** https://dgwebagency.com

## Stack

Built with static HTML, CSS, and vanilla JavaScript. No framework, no build step, no CMS.

This was a deliberate choice. For a marketing site that updates infrequently, static files mean:
- Sub-second load times (no server processing, no database queries)
- No security patching of plugins or CMS cores
- Free hosting on Netlify's CDN
- Trivial backups and version control

- **Hosting:** Netlify
- **Domain:** GoDaddy
- **Forms:** Formspree (domain-locked)
- **Fonts:** Self-hosted (DM Sans, Playfair) — no external font requests

## Performance

PageSpeed Insights (Google, not local Lighthouse):
- **Desktop:** Performance 99 / Accessibility 93 / Best Practices 100 / SEO 100
- **Mobile:** Performance 90 / Accessibility 95 / Best Practices 100 / SEO 100

## SEO

- JSON-LD structured data (Organization, LocalBusiness, ProfessionalService, OfferCatalog)
- Open Graph and Twitter Card metadata
- Geo meta tags for local search
- Sitemap submitted to Google Search Console and Bing Webmaster Tools
- Location-specific landing pages for programmatic local SEO
- Keyword research completed before content was written (available on request)

## Project Structure

├── index.html              # Homepage
├── 404.html                # Custom 404
├── service-areas.html      # Service area hub
├── sitemap.xml
├── robots.txt
├── assets/img/             # Images
├── css/styles.css
├── js/main.js
├── fonts/                  # Self-hosted .woff2 files
├── pages/                  # About, Terms
├── services/               # Service detail pages
└── locations/              # Location landing pages

## Local Development

No build step required. Open `index.html` directly, or run a local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Author

David Gutierrez — Pasadena, CA
[davidguti.dev](https://davidguti.dev) · davidguticodes@gmail.com