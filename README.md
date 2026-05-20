# DG Web Agency

Marketing site for DG Web Agency — a Pasadena-based web design studio building websites for local small businesses.

**Live site:** https://dgwebagency.com

## Stack

Built with static HTML, CSS, and vanilla JavaScript.

This site is a marketing page for my own agency — content rarely changes and I'm the only editor. 
Static was the right fit for that. For client sites where editability matters, a CMS is the better tool.
                                                                            

This was a deliberate choice. For a marketing site that updates infrequently, static files mean:
For this use case, static gave me:

- Sub-second load times
- Free hosting on Netlify's CDN
- No ongoing maintenance overhead

- **Hosting:** Netlify
- **Domain:** GoDaddy
- **Forms:** Formspree (domain-locked)
- **Fonts:** Self-hosted (DM Sans, Playfair)
- **CSS reset:** Josh Comeau's modern reset

## Performance

PageSpeed Insights (Lighthouse):
- **Desktop:** Performance 100 / Accessibility 95 / Best Practices 100 / SEO 100
- **Mobile:** Performance 100 / Accessibility 95 / Best Practices 100 / SEO 100

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


## Author

David Gutierrez — Pasadena, CA
[davidguti.dev](https://davidguti.dev) · davidguticodes@gmail.com
