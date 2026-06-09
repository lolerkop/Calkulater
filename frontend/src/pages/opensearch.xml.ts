import type { APIRoute } from 'astro';
import { SITE } from '../config/site';

export const prerender = true;

function escapeXml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export const GET: APIRoute = () => {
  const base = SITE.url.replace(/\/$/, '');
  const searchUrl = `${base}/ru/calculators/?q={searchTerms}`;
  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/">',
    `  <ShortName>${escapeXml(SITE.name)}</ShortName>`,
    `  <Description>${escapeXml(SITE.description)}</Description>`,
    '  <InputEncoding>UTF-8</InputEncoding>',
    '  <OutputEncoding>UTF-8</OutputEncoding>',
    `  <Image height="32" width="32" type="image/svg+xml">${escapeXml(`${base}/favicon.svg`)}</Image>`,
    `  <Url type="text/html" method="get" template="${escapeXml(searchUrl)}" />`,
    '</OpenSearchDescription>',
    '',
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'application/opensearchdescription+xml; charset=utf-8',
    },
  });
};
