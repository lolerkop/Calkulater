const savedRateIds = new Set(['currency-converter', 'usd-to-eur', 'eur-to-mdl', 'usd-to-mdl']);
const normalize = value => value.replace(/[\s\u00a0\u202f]+/g, ' ').trim();

function validIsoDate(value) {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T00:00:00Z`);
  return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value;
}

// Authored provider names, URLs, link order and all noncurrency content remain
// frozen. Only the saved-rate pages' dated suffix follows the current dataset.
export function expectedIntrapageSourceLinks(row, rateSources) {
  return row.editorial.sources.filter(source => source.href).map(source => {
    const label = normalize(source.label);
    if (!savedRateIds.has(row.id)) return { label, href: source.href };

    const suffix = label.match(/^(\S(?:.*\S)?) — (\d{4}-\d{2}-\d{2})$/);
    if (!suffix || !validIsoDate(suffix[2])) {
      throw new Error(`Malformed frozen currency source date: ${source.href}`);
    }
    const providers = Object.values(rateSources).filter(provider => provider.url === source.href);
    if (providers.length !== 1 || !validIsoDate(providers[0].date)) {
      throw new Error(`Missing or invalid current currency source metadata: ${source.href}`);
    }
    return { label: `${suffix[1]} — ${providers[0].date}`, href: source.href };
  });
}
