const PRODUCTION_HOSTNAME = 'calcuway.com';

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
    url.hostname = PRODUCTION_HOSTNAME;
    if (redirectedPath) url.pathname = redirectedPath;
    return Response.redirect(url.toString(), 301);
  }

  const assetResponse = await context.next();
  if (url.hostname === PRODUCTION_HOSTNAME) return assetResponse;

  // Тот же сайт доступен на служебных доменах Cloudflare Pages. Страницы там
  // отдают canonical на продакшен, но при этом объявляют index,follow, поэтому
  // копия остаётся индексируемой. Заголовок закрывает её от поисковых систем,
  // не затрагивая продакшен-домен.
  const response = new Response(assetResponse.body, assetResponse);
  response.headers.set('X-Robots-Tag', 'noindex');
  return response;
}
