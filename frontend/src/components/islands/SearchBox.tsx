// Поиск по калькуляторам на главной. Простая клиентская фильтрация по
// названию, описанию и ключевым словам.

import { useEffect, useMemo, useState } from 'react';
import { Search, X } from 'lucide-react';
import type { CalculatorDef } from '../../lib/types';
import { matchesCalculatorSearch, queryNeedles } from '../../lib/search';
import { clientUi, localeCatalog, type Locale } from '../../lib/clientI18n';

type Props = {
  calculators: Array<
    Pick<CalculatorDef, 'id' | 'name' | 'shortDescription' | 'fullPath' | 'keywords' | 'category' | 'popularity' | 'isNew'> & {
      categoryName?: string;
    }
  >;
  locale?: Locale;
};

const searchCopyByLocale: Record<Locale, {
  label: string;
  placeholder: string;
  clear: string;
  results: string;
  emptyTitle: string;
  emptyText: string;
  searchCatalog: string;
  openAll: string;
}> = {
  ru: {
    label: 'Поиск калькуляторов',
    placeholder: 'Найти калькулятор — например, «ипотека» или «BMI»',
    clear: 'Очистить поиск',
    results: 'Результаты поиска калькуляторов',
    emptyTitle: 'Ничего не найдено',
    emptyText: 'Попробуйте другое слово или откройте каталог: там можно искать и фильтровать все калькуляторы.',
    searchCatalog: 'Искать в каталоге',
    openAll: 'Открыть все результаты в каталоге',
  },
  en: {
    label: 'Search calculators',
    placeholder: 'Find a calculator — for example, “loan” or “BMI”',
    clear: 'Clear search',
    results: 'Calculator search results',
    emptyTitle: 'No results found',
    emptyText: 'Try another query or open the catalog to search and filter all calculators.',
    searchCatalog: 'Search in catalog',
    openAll: 'Open all results in catalog',
  },
  es: {
    label: 'Buscar calculadoras',
    placeholder: 'Buscar calculadora — por ejemplo, “préstamo” o “IMC”',
    clear: 'Borrar búsqueda',
    results: 'Resultados de búsqueda de calculadoras',
    emptyTitle: 'No se encontraron resultados',
    emptyText: 'Prueba otra búsqueda o abre el catálogo para buscar y filtrar todas las calculadoras.',
    searchCatalog: 'Buscar en el catálogo',
    openAll: 'Abrir todos los resultados en el catálogo',
  },
  de: {
    label: 'Rechner suchen',
    placeholder: 'Rechner suchen — zum Beispiel „Kredit“ oder „BMI“',
    clear: 'Suche leeren',
    results: 'Suchergebnisse für Rechner',
    emptyTitle: 'Keine Ergebnisse gefunden',
    emptyText: 'Probiere einen anderen Suchbegriff oder öffne den Katalog, um alle Rechner zu filtern.',
    searchCatalog: 'Im Katalog suchen',
    openAll: 'Alle Ergebnisse im Katalog öffnen',
  },
  fr: {
    label: 'Rechercher des calculatrices',
    placeholder: 'Rechercher une calculatrice — par exemple “prêt” ou “IMC”',
    clear: 'Effacer la recherche',
    results: 'Résultats de recherche des calculatrices',
    emptyTitle: 'Aucun résultat trouvé',
    emptyText: 'Essayez une autre recherche ou ouvrez le catalogue pour chercher et filtrer toutes les calculatrices.',
    searchCatalog: 'Rechercher dans le catalogue',
    openAll: 'Ouvrir tous les résultats dans le catalogue',
  },
  pt: {
    label: 'Pesquisar calculadoras',
    placeholder: 'Pesquisar calculadora — por exemplo “empréstimo” ou “IMC”',
    clear: 'Limpar pesquisa',
    results: 'Resultados da pesquisa de calculadoras',
    emptyTitle: 'Nenhum resultado encontrado',
    emptyText: 'Experimente outra pesquisa ou abra o catálogo para pesquisar e filtrar todas as calculadoras.',
    searchCatalog: 'Pesquisar no catálogo',
    openAll: 'Abrir todos os resultados no catálogo',
  },
  it: {
    label: 'Cerca calcolatori',
    placeholder: 'Cerca un calcolatore — per esempio “prestito” o “BMI”',
    clear: 'Cancella ricerca',
    results: 'Risultati della ricerca dei calcolatori',
    emptyTitle: 'Nessun risultato trovato',
    emptyText: 'Prova un’altra ricerca oppure apri il catalogo per cercare e filtrare tutti i calcolatori.',
    searchCatalog: 'Cerca nel catalogo',
    openAll: 'Apri tutti i risultati nel catalogo',
  },
  pl: {
    label: 'Szukaj kalkulatorow',
    placeholder: 'Znajdz kalkulator - na przyklad "kredyt" albo "BMI"',
    clear: 'Wyczysc wyszukiwanie',
    results: 'Wyniki wyszukiwania kalkulatorow',
    emptyTitle: 'Brak wynikow',
    emptyText: 'Sprobuj innego zapytania albo otworz katalog, aby wyszukiwac i filtrowac wszystkie kalkulatory.',
    searchCatalog: 'Szukaj w katalogu',
    openAll: 'Otworz wszystkie wyniki w katalogu',
  },
  nl: {
    label: 'Rekentools zoeken',
    placeholder: 'Zoek een rekentool - bijvoorbeeld "lening" of "BMI"',
    clear: 'Zoekopdracht wissen',
    results: 'Zoekresultaten voor rekentools',
    emptyTitle: 'Geen resultaten',
    emptyText: 'Probeer een andere zoekopdracht of open de catalogus om alle rekentools te zoeken en te filteren.',
    searchCatalog: 'Zoeken in catalogus',
    openAll: 'Alle resultaten in catalogus openen',
  },
  ro: {
    label: 'Cauta calculatoare',
    placeholder: 'Cauta un calculator - de exemplu "credit" sau "BMI"',
    clear: 'Sterge cautarea',
    results: 'Rezultatele cautarii de calculatoare',
    emptyTitle: 'Niciun rezultat',
    emptyText: 'Incearca alta cautare sau deschide catalogul pentru a cauta si filtra toate calculatoarele.',
    searchCatalog: 'Cauta in catalog',
    openAll: 'Deschide toate rezultatele in catalog',
  },
  id: {
    label: 'Cari kalkulator',
    placeholder: 'Cari kalkulator - misalnya "pinjaman" atau "BMI"',
    clear: 'Hapus pencarian',
    results: 'Hasil pencarian kalkulator',
    emptyTitle: 'Tidak ada hasil',
    emptyText: 'Coba kata lain atau buka katalog untuk mencari dan memfilter semua kalkulator.',
    searchCatalog: 'Cari di katalog',
    openAll: 'Buka semua hasil di katalog',
  },
  tr: {
    label: 'Hesaplayıcı ara',
    placeholder: 'Hesaplayıcı ara - örneğin "kredi" veya "BMI"',
    clear: 'Aramayı temizle',
    results: 'Hesaplayıcı arama sonuçları',
    emptyTitle: 'Sonuç bulunamadı',
    emptyText: 'Başka bir arama deneyin veya tüm hesaplayıcıları aramak ve filtrelemek için kataloğu açın.',
    searchCatalog: 'Katalogda ara',
    openAll: 'Tüm sonuçları katalogda aç',
  },
  vi: {
    label: 'Tìm máy tính',
    placeholder: 'Tìm máy tính - ví dụ "khoản vay" hoặc "BMI"',
    clear: 'Xóa tìm kiếm',
    results: 'Kết quả tìm máy tính',
    emptyTitle: 'Không có kết quả',
    emptyText: 'Thử từ khóa khác hoặc mở danh mục để tìm và lọc tất cả máy tính.',
    searchCatalog: 'Tìm trong danh mục',
    openAll: 'Mở tất cả kết quả trong danh mục',
  },
  cs: {
    label: 'Hledat kalkulačky',
    placeholder: 'Najít kalkulačku - například "půjčka" nebo "BMI"',
    clear: 'Vymazat hledání',
    results: 'Výsledky hledání kalkulaček',
    emptyTitle: 'Žádné výsledky',
    emptyText: 'Zkuste jiné slovo nebo otevřete katalog, kde můžete hledat a filtrovat všechny kalkulačky.',
    searchCatalog: 'Hledat v katalogu',
    openAll: 'Otevřít všechny výsledky v katalogu',
  },
  uk: {
    label: 'Пошук калькуляторів',
    placeholder: 'Знайти калькулятор - наприклад "кредит" або "BMI"',
    clear: 'Очистити пошук',
    results: 'Результати пошуку калькуляторів',
    emptyTitle: 'Нічого не знайдено',
    emptyText: 'Спробуйте інше слово або відкрийте каталог, де можна шукати й фільтрувати всі калькулятори.',
    searchCatalog: 'Шукати в каталозі',
    openAll: 'Відкрити всі результати в каталозі',
  },
  sk: {
    label: 'Hľadať kalkulačky',
    placeholder: 'Nájsť kalkulačku - napríklad "pôžička" alebo "BMI"',
    clear: 'Vymazať hľadanie',
    results: 'Výsledky hľadania kalkulačiek',
    emptyTitle: 'Žiadne výsledky',
    emptyText: 'Skúste iné slovo alebo otvorte katalóg, kde môžete hľadať a filtrovať všetky kalkulačky.',
    searchCatalog: 'Hľadať v katalógu',
    openAll: 'Otvoriť všetky výsledky v katalógu',
  },
  hu: {
    label: 'Kalkulátorok keresése',
    placeholder: 'Kalkulátor keresése - például "hitel" vagy "BMI"',
    clear: 'Keresés törlése',
    results: 'Kalkulátorkeresés eredményei',
    emptyTitle: 'Nincs találat',
    emptyText: 'Próbáljon másik kifejezést, vagy nyissa meg a katalógust az összes kalkulátor kereséséhez és szűréséhez.',
    searchCatalog: 'Keresés a katalógusban',
    openAll: 'Összes találat megnyitása a katalógusban',
  },
};

export default function SearchBox({ calculators, locale = 'ru' }: Props) {
  const copy = clientUi[locale];
  const searchCopy = searchCopyByLocale[locale];
  const [query, setQuery] = useState(() => {
    if (typeof window === 'undefined') return '';
    return new URLSearchParams(window.location.search).get('q') ?? '';
  });
  const hasQuery = query.trim().length > 0;
  const resultsId = 'search-results';

  const results = useMemo(() => {
    const needles = queryNeedles(query);
    if (needles.length === 0) return [];
    return calculators
      .filter((c) => matchesCalculatorSearch(c, query))
      .slice(0, 8);
  }, [query, calculators]);
  const catalogHref = hasQuery
    ? `${localeCatalog(locale)}?q=${encodeURIComponent(query.trim())}`
    : localeCatalog(locale);

  const focusSearchInput = () => {
    document.getElementById('search-input')?.focus();
  };

  const focusResultLink = (index: number) => {
    document.querySelector<HTMLAnchorElement>(`[data-testid="search-result-${index}"]`)?.focus();
  };

  const focusAllResultsLink = () => {
    document.querySelector<HTMLAnchorElement>('[data-testid="search-all-results"]')?.focus();
  };

  const focusEmptyCatalogLink = () => {
    document.querySelector<HTMLAnchorElement>('[data-testid="search-empty-catalog"]')?.focus();
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const url = new URL(window.location.href);
    const current = url.searchParams.get('q') ?? '';
    const next = query.trim();

    if (current === next) return;
    if (next) {
      url.searchParams.set('q', next);
    } else {
      url.searchParams.delete('q');
    }
    window.history.replaceState(null, '', `${url.pathname}${url.search}${url.hash}`);
  }, [query]);

  return (
    <div className="relative" role="search" data-testid="search-box">
      <label htmlFor="search-input" className="sr-only">
        {searchCopy.label}
      </label>
      <div className="relative">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-400"
          aria-hidden="true"
        />
        <input
          id="search-input"
          data-testid="search-input"
          type="search"
          className="field-input py-4 pl-11 pr-12 text-base sm:text-lg"
          placeholder={searchCopy.placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Escape') {
              setQuery('');
              return;
            }
            if (event.key === 'ArrowDown' && hasQuery) {
              event.preventDefault();
              if (results.length > 0) {
                focusResultLink(0);
              } else {
                focusEmptyCatalogLink();
              }
            }
          }}
          autoComplete="off"
          aria-controls={hasQuery ? resultsId : undefined}
          aria-expanded={hasQuery ? 'true' : 'false'}
        />
        {hasQuery && (
          <button
            type="button"
            className="absolute right-2 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center border border-ink-200 bg-white text-ink-500 transition-colors hover:border-ink-900 hover:text-ink-900"
            onClick={() => setQuery('')}
            aria-label={searchCopy.clear}
            data-testid="search-clear"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        )}
      </div>

      {hasQuery && (
        <div
          id={resultsId}
          className="absolute left-0 right-0 top-full mt-1 z-10 border border-ink-900 bg-white shadow-[4px_4px_0_0_rgba(10,10,10,0.04)]"
          role="region"
          aria-label={searchCopy.results}
          data-testid="search-results"
        >
          {results.length === 0 ? (
            <div className="p-4" role="status" data-testid="search-empty">
              <div className="text-sm font-medium text-ink-900">{searchCopy.emptyTitle}</div>
              <p className="mt-1 text-xs leading-relaxed text-ink-500">
                {searchCopy.emptyText}
              </p>
              <a
                href={catalogHref}
                className="mt-3 inline-flex items-center justify-center border border-ink-900 px-3 py-2 text-sm font-medium text-ink-900 transition-colors hover:bg-ink-900 hover:text-white"
                data-testid="search-empty-catalog"
                onKeyDown={(event) => {
                  if (event.key === 'Escape') {
                    setQuery('');
                    focusSearchInput();
                    return;
                  }
                  if (event.key === 'ArrowUp') {
                    event.preventDefault();
                    focusSearchInput();
                  }
                }}
              >
                {searchCopy.searchCatalog}
              </a>
            </div>
          ) : (
            <>
              <ul role="list">
                {results.map((c, i) => (
                  <li key={c.id} className="border-b border-ink-100 last:border-b-0">
                    <a
                      href={c.fullPath}
                      className="block px-4 py-3 hover:bg-ink-50 transition-colors"
                      data-testid={`search-result-${i}`}
                      onKeyDown={(event) => {
                        if (event.key === 'Escape') {
                          setQuery('');
                          focusSearchInput();
                          return;
                        }
                        if (event.key === 'ArrowDown') {
                          event.preventDefault();
                          if (i === results.length - 1) {
                            focusAllResultsLink();
                          } else {
                            focusResultLink(i + 1);
                          }
                        }
                        if (event.key === 'ArrowUp') {
                          event.preventDefault();
                          if (i === 0) {
                            focusSearchInput();
                          } else {
                            focusResultLink(i - 1);
                          }
                        }
                      }}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <div className="text-sm font-medium text-ink-900">{c.name}</div>
                          <div className="mt-0.5 text-[10px] uppercase tracking-wider text-ink-400">
                            {c.categoryName ?? c.category}
                          </div>
                        </div>
                        {(c.isNew || c.popularity >= 80) && (
                          <div className="flex shrink-0 flex-wrap justify-end gap-1.5" data-testid={`search-result-badges-${i}`}>
                            {c.isNew && (
                              <span
                                className="border border-ink-900 bg-ink-900 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-white"
                                data-testid={`search-result-new-${i}`}
                              >
                                {copy.newBadge}
                              </span>
                            )}
                            {c.popularity >= 80 && (
                              <span
                                className="border border-accent px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-accent"
                                data-testid={`search-result-popular-${i}`}
                              >
                                {copy.popularBadge}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                      <div className="text-xs text-ink-500 mt-0.5 line-clamp-1">
                        {c.shortDescription}
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={catalogHref}
                className="block border-t border-ink-200 bg-ink-50 px-4 py-3 text-sm font-medium text-ink-900 transition-colors hover:bg-white hover:text-accent"
                data-testid="search-all-results"
                onKeyDown={(event) => {
                  if (event.key === 'Escape') {
                    setQuery('');
                    focusSearchInput();
                    return;
                  }
                  if (event.key === 'ArrowUp' && results.length > 0) {
                    event.preventDefault();
                    focusResultLink(results.length - 1);
                  }
                }}
              >
                {searchCopy.openAll}
              </a>
            </>
          )}
        </div>
      )}
    </div>
  );
}
