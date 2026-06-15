const EXACT_REDIRECTS = new Map([
  ['/calculators', '/ru/calculators/'],
  ['/about', '/ru/about/'],
  ['/contacts', '/ru/contacts/'],
  ['/privacy', '/ru/privacy/'],
]);

const PREFIX_REDIRECTS = new Map([
  ['/finance/', '/ru/finance/'],
  ['/currency/', '/ru/currency/'],
  ['/sport/', '/ru/sport/'],
  ['/building/', '/ru/building/'],
  ['/date-time/', '/ru/date-time/'],
]);

function legacyRedirectPath(pathname) {
  const normalized = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname;
  const exact = EXACT_REDIRECTS.get(normalized);
  if (exact) return exact;

  for (const [source, target] of PREFIX_REDIRECTS) {
    if (pathname.startsWith(source)) return `${target}${pathname.slice(source.length)}`;
  }

  return null;
}

export async function onRequest(context) {
  const url = new URL(context.request.url);
  const redirectedPath = legacyRedirectPath(url.pathname);

  if (url.hostname === 'www.calcuway.com' || redirectedPath) {
    url.hostname = 'calcuway.com';
    if (redirectedPath) url.pathname = redirectedPath;
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
