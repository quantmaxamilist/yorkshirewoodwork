import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://www.yorkshirewoodwork.co.uk',
  trailingSlash: 'always',
  integrations: [tailwind({ applyBaseStyles: false })],
});
