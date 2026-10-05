# Yorkshire Woodwork — yorkshirewoodwork.co.uk

Astro 4 + Tailwind + TypeScript (strict). Full rebuild of the Wix site using Yorkshire Woodwork's own content and photos.

## Run
    npm install
    npm run dev
    npm run build      # 31 pages to /dist

## Where things live
- Copy & business details: `src/data/site.ts`
- Shop products (21, with photos, specs, prices): `src/data/products.json`
- Styles: `src/styles/global.css` + `tailwind.config.mjs`
- Bespoke icons: `src/components/Icon.astro`
- Photos: `public/img/` (products/, projects/, willow/, stock/ — stock credits in `public/img/stock/CREDITS.json`, shown at /credits/)

## Forms (Web3Forms)
Set `PUBLIC_WEB3FORMS_KEY` in the Vercel project env (Yorkshire Woodwork's own key, tied to George's inbox), then redeploy. Until then forms show the phone/email fallback.

## Shop
Product pages use "Enquire to order" (no online checkout). Add Stripe Payment Links later if wanted.

## Deploy
GitHub → Vercel (team vards-projects), framework preset Astro. `vercel.json` 301-redirects the old Wix URLs (/projects-8, /meet-the-team, /about-us, /services-4, /product-page/*) to the new pages.
