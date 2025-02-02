import { defineConfig } from 'astro/config'
 
export default defineConfig({
  site: 'https://pivotport.github.io',
  base: '/pivotport-web',
// Add your instrumentation key or use the APPLICATIONINSIGHTSKEY environment variable on your production machine to start collecting data.
var ai = require('applicationinsights');
ai.setup(process.env.APPLICATIONINSIGHTSKEY || 'your_instrumentation_key').start();import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  site: 'https://pivotport.github.io',
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
  }})
