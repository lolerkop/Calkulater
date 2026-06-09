// Динамический robots.txt с правильным абсолютным URL карты сайта.
import type { APIRoute } from 'astro';
import { SITE } from '../config/site';

export const prerender = true;

export const GET: APIRoute = () => {
  const base = SITE.url.replace(/\/$/, '');
  const body = [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${base}/sitemap.xml`,
    '',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
