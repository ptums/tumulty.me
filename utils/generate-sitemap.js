const fs = require('fs')
const globby = require('globby')

async function generateSiteMap() {
  const pages = await globby([
    '.next/server/pages/post/*.html',
    'pages/**/*.js',
    '!pages/_*.js',
    '!pages/**/[slug].js',
    '!pages/api',
    'posts/*.md'
  ]);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${pages
            .map(page => {
              const path = page
                .replace('pages', '')
                .replace('.js', '')
                .replace('.md', '')
                .replace('.html', '')
                .replace('.next/server/','')
              const route = path === '/index' ? '' : path
              return `
                      <url>
                          <loc>${`https://tumulty.me${route}`}</loc>
                      </url>
                  `
            })
            .join('')}
      </urlset>`

  fs.writeFileSync('public/sitemap.xml', sitemap)
}

generateSiteMap()