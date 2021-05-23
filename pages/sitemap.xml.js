import React from 'react';


const EXTERNAL_DATA_URL = 'https://afzalsaiyed.corecare.in';
const domain = "https://www.dev.corecare.in"


const createStaticSitemap = () => {
    const url_links = [
        {loc: "/", changefreq: 'daily', priority: '1.0'},
        {loc: "/about", changefreq: 'daily', priority: '0.6'},
        {loc: "/contact", changefreq: 'daily', priority: '0.6'},
        {loc: "/login", changefreq: 'daily', priority: '0.8'},
        {loc: "/become-a-partner", changefreq: 'daily', priority: '0.8'},
        {loc: "/cart", changefreq: 'daily', priority: '0.8'},
    
    ]
    return url_links
}
const createSitemap = (slugs) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
        ${slugs
          .map(({ slug }) => {
            return `
                    <url>
                        <loc>${`${domain}/services/${slug}`}</loc>
                        <changefreq>daily</changefreq>
                        <lastmod>2021-05-23T12:14:44+00:00</lastmod>
                        <priority>1.0</priority>
                    </url>
                `;
          })
          .join('')}
          ${createStaticSitemap().map(link => {
              return `
                    <url>
                        <loc>${`${domain}${link.loc}`}</loc>
                        <changefreq>${link.changefreq}</changefreq>
                        <lastmod>2021-05-23T12:14:44+00:00</lastmod>
                        <priority>${link.priority}</priority>
                    </url>
              `;
          })}
    </urlset>
    `;

class Sitemap extends React.Component {
  static async getInitialProps({ res }) {
    const request = await fetch(EXTERNAL_DATA_URL);
    const posts = await request.json();

    res.setHeader('Content-Type', 'text/xml; charset=utf-8');
    res.write(createSitemap(posts));
    res.end();
  }
}

export default Sitemap;

