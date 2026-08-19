import type { SearchableCalculator } from './search';

// Загрузка поискового индекса по первому обращению к поиску.
//
// Индекс не участвует в первоначальной отдаче страницы: он лежит отдельным
// файлом и запрашивается тогда, когда посетитель действительно собрался
// искать. Промис запоминается на уровне модуля, поэтому повторные фокусы и
// повторные нажатия не порождают повторных запросов, а переход между
// страницами обслуживается обычным кэшем браузера.
const cache = new Map<string, Promise<SearchableCalculator[]>>();

export function searchIndexUrl(locale: string): string {
  return `/search-index/${locale}.json`;
}

export function loadSearchIndex(locale: string): Promise<SearchableCalculator[]> {
  const existing = cache.get(locale);
  if (existing) return existing;

  const request = fetch(searchIndexUrl(locale))
    .then((response) => {
      if (!response.ok) throw new Error(`search index ${locale}: ${response.status}`);
      return response.json() as Promise<SearchableCalculator[]>;
    })
    .catch((error) => {
      // Неудачу не запоминаем: следующая попытка должна сходить в сеть снова.
      cache.delete(locale);
      throw error;
    });

  cache.set(locale, request);
  return request;
}

/** Только для тестов: сбрасывает запомненные промисы между сценариями. */
export function resetSearchIndexCache(): void {
  cache.clear();
}
