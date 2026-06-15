const FACET_PARAMS = ['tag', 'category', 'sort', 'q'];

export async function onRequest(context) {
  const url = new URL(context.request.url);
  const assetResponse = await context.next();
  const response = new Response(assetResponse.body, assetResponse);

  if (FACET_PARAMS.some((param) => url.searchParams.has(param))) {
    response.headers.set('X-Robots-Tag', 'noindex, follow');
  }

  return response;
}
