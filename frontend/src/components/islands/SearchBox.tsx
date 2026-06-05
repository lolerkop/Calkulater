// Поиск по калькуляторам на главной. Простая клиентская фильтрация по
// названию, описанию и ключевым словам.

import { useMemo, useState } from 'react';
import type { CalculatorDef } from '../../lib/types';

type Props = {
  calculators: Array<
    Pick<CalculatorDef, 'id' | 'name' | 'shortDescription' | 'fullPath' | 'keywords' | 'category'>
  >;
};

export default function SearchBox({ calculators }: Props) {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return calculators
      .filter((c) => {
        const hay = [
          c.name.toLowerCase(),
          c.shortDescription.toLowerCase(),
          ...(c.keywords ?? []).map((k) => k.toLowerCase()),
        ].join(' ');
        return hay.includes(q);
      })
      .slice(0, 8);
  }, [query, calculators]);

  return (
    <div className="relative" data-testid="search-box">
      <label htmlFor="search-input" className="sr-only">
        Поиск калькуляторов
      </label>
      <input
        id="search-input"
        data-testid="search-input"
        type="search"
        className="field-input text-base sm:text-lg py-4"
        placeholder="Найти калькулятор — например, «ипотека» или «BMI»"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        autoComplete="off"
      />

      {query && (
        <div
          className="absolute left-0 right-0 top-full mt-1 z-10 border border-ink-900 bg-white shadow-[4px_4px_0_0_rgba(10,10,10,0.04)]"
          data-testid="search-results"
        >
          {results.length === 0 ? (
            <div className="p-4 text-sm text-ink-500">Ничего не найдено</div>
          ) : (
            <ul>
              {results.map((c, i) => (
                <li key={c.id} className="border-b border-ink-100 last:border-b-0">
                  <a
                    href={c.fullPath}
                    className="block px-4 py-3 hover:bg-ink-50 transition-colors"
                    data-testid={`search-result-${i}`}
                  >
                    <div className="text-sm font-medium text-ink-900">{c.name}</div>
                    <div className="text-xs text-ink-500 mt-0.5 line-clamp-1">
                      {c.shortDescription}
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
