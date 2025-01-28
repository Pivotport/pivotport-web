import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  site: 'https://pivotport.com',
  redirects: {
    // Redirect old URLs to new ones
    '/blog': '/articles',
    '/news': '/articles',
    '/services': '/',
    '/quantum': '/services/quantum/strategy',
    '/cloud': '/services/cloud/strategy',
    '/team': '/about',
    '/company': '/about',
    '/support': '/contact',
    '/help': '/contact',
    
    // Redirect potential common typos
    '/article': '/articles',
    '/service': '/',
    '/contact-us': '/contact',
    '/about-us': '/about',
    
    // Redirect old service URLs
    '/services/quantum': '/services/quantum/strategy',
    '/services/cloud': '/services/cloud/strategy',
    
    // Catch-all redirect for any unmatched URLs
    '/*': '/404',
  }
});