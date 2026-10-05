import type { APIRoute } from 'astro';
import { products, site } from '../data/site';
const paths = ['/', '/bespoke/', '/work/', '/shop/', ...products.map((p) => `/shop/${p.slug}/`), '/yorkshire-willow/', '/about/', '/contact/', '/privacy/'];
export const GET: APIRoute = () => new Response(
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map((p) => `  <url><loc>${site.url}${p}</loc></url>`).join('\n')}\n</urlset>\n`,
  { headers: { 'Content-Type': 'application/xml' } });
