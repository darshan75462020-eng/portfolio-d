import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

(async () => {
  const sitemap = new SitemapStream({ hostname: 'https://dharshan-portfolio-psi.vercel.app/' });
  const writeStream = createWriteStream('./public/sitemap.xml');

  sitemap.pipe(writeStream);

  const pages = [
    '',           // homepage
    'about',
    'projects',
    'contact',
    'resume'
  ];

  pages.forEach(page => sitemap.write({ url: page, changefreq: 'monthly', priority: 0.8 }));
  sitemap.end();

  await streamToPromise(writeStream);
  console.log('Sitemap generated successfully!');
})();
