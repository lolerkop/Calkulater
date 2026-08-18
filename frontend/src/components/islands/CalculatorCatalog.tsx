import { ArrowRight, ListFilter, Search, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { categoryAliases, normalizeSearchText, queryNeedles } from '../../lib/search';
import type { CategoryId } from '../../lib/types';
import { clientUi, type Locale } from '../../lib/clientI18n';

type CatalogCategory = {
  id: CategoryId;
  name: string;
  slug: string;
};

type Props = {
  categories: CatalogCategory[];
  locale?: Locale;
};

/**
 * Метаданные карточки, прочитанные из уже отрисованного DOM.
 *
 * Остров не получает калькуляторы сериализованными props: сетку рисует Astro,
 * а здесь остаётся ровно то, чего нет в видимом тексте, — ключевые слова,
 * идентификатор категории, популярность, признак новизны и позиция при
 * сортировке по имени. Псевдонимы категорий и токены новизны общие, они
 * подставляются ниже и на карточках не повторяются.
 */
type CardHandle = {
  readonly element: HTMLElement;
  readonly category: CategoryId;
  readonly isPopular: boolean;
  readonly isNew: boolean;
  readonly nameOrder: number;
  readonly haystack: string;
};

function readCards(categories: CatalogCategory[]): CardHandle[] {
  const names = new Map(categories.map((category) => [category.id, category.name]));
  return [...document.querySelectorAll<HTMLElement>('[data-catalog-card]')].map((element) => {
    const category = (element.dataset.category ?? '') as CategoryId;
    const isNew = element.dataset.new === '1';
    return {
      element,
      category,
      isPopular: element.dataset.popular === '1',
      isNew,
      nameOrder: Number(element.dataset.nameOrder ?? 0),
      // Имя и описание берутся из самой карточки: это те же два поля, по
      // которым искал прежний отбор, и повторять их атрибутом незачем. Бейджи
      // и подпись ссылки в счёт не идут — иначе запрос «открыть» начал бы
      // совпадать со всеми карточками.
      haystack: normalizeSearchText([
        element.querySelector('h3')?.textContent ?? '',
        element.querySelector('p')?.textContent ?? '',
        category,
        names.get(category) ?? '',
        isNew ? 'новый новые свежее' : '',
        categoryAliases[category] ?? '',
        element.dataset.keywords ?? '',
      ].join(' ')),
    };
  });
}

const allCategory = 'all';
const allTag = 'all';
const defaultSort = 'popular';
const quickQueriesByLocale: Record<Locale, string[]> = {
  ru: ['новые', 'НДС', 'НДФЛ', 'скидка', 'проценты', 'ремонт', 'калории', 'валюта'],
  en: ['new', 'discount', 'percentage', 'loan', 'BMI', 'calories', 'currency', 'tiles'],
  es: ['nuevo', 'descuento', 'porcentaje', 'préstamo', 'IMC', 'calorías', 'divisas', 'azulejos'],
  de: ['neu', 'rabatt', 'prozent', 'kredit', 'BMI', 'kalorien', 'währung', 'fliesen'],
  fr: ['nouveau', 'remise', 'pourcentage', 'prêt', 'IMC', 'calories', 'devises', 'carrelage'],
  pt: ['novo', 'desconto', 'percentagem', 'empréstimo', 'IMC', 'calorias', 'moedas', 'azulejos'],
  it: ['nuovo', 'sconto', 'percentuale', 'prestito', 'BMI', 'calorie', 'valute', 'piastrelle'],
  pl: ['nowe', 'rabat', 'procent', 'kredyt', 'BMI', 'kalorie', 'waluty', 'plytki'],
  nl: ['nieuw', 'korting', 'percentage', 'lening', 'BMI', 'calorieen', 'valuta', 'tegels'],
  ro: ['nou', 'reducere', 'procent', 'credit', 'BMI', 'calorii', 'valute', 'gresie'],
  id: ['baru', 'diskon', 'persentase', 'pinjaman', 'BMI', 'kalori', 'mata uang', 'ubin'],
  tr: ['yeni', 'indirim', 'yüzde', 'kredi', 'BMI', 'kalori', 'döviz', 'fayans'],
  vi: ['mới', 'giảm giá', 'phần trăm', 'khoản vay', 'BMI', 'calo', 'tiền tệ', 'gạch'],
  cs: ['nové', 'sleva', 'procenta', 'půjčka', 'BMI', 'kalorie', 'měny', 'dlaždice'],
  uk: ['нові', 'знижка', 'відсотки', 'кредит', 'BMI', 'калорії', 'валюти', 'плитка'],
  sk: ['nové', 'zľava', 'percentá', 'pôžička', 'BMI', 'kalórie', 'meny', 'dlaždice'],
  hu: ['új', 'kedvezmény', 'százalék', 'hitel', 'BMI', 'kalória', 'valuta', 'csempe'],
};

const catalogCopyByLocale: Record<Locale, {
  allCategories: string;
  allStatuses: string;
  searchLabel: string;
  placeholder: string;
  clearSearch: string;
  sorting: string;
  popularFirst: string;
  alphabetical: string;
  found: string;
  quickSearches: string;
  searchPrefix: string;
  statusFilter: string;
  categoryFilter: string;
  query: string;
  resetFilters: string;
  empty: string;
  emptyHelp: string;
  searchAllCategories: string;
  reset: string;
  filteredCalculators: string;
}> = {
  ru: {
    allCategories: 'Все категории',
    allStatuses: 'Все статусы',
    searchLabel: 'Поиск по каталогу',
    placeholder: 'Например: НДС, скидка, ремонт, калории',
    clearSearch: 'Очистить поиск',
    sorting: 'Сортировка',
    popularFirst: 'Сначала популярные',
    alphabetical: 'По алфавиту',
    found: 'Найдено',
    quickSearches: 'Быстрые запросы',
    searchPrefix: 'Искать',
    statusFilter: 'Фильтр по статусу',
    categoryFilter: 'Фильтр по категориям',
    query: 'Запрос',
    resetFilters: 'Сбросить фильтры',
    empty: 'Ничего не найдено',
    emptyHelp: 'Попробуйте другой запрос или сбросьте фильтры. Поиск понимает бытовые слова: зарплата, ремонт, похудение, доллар.',
    searchAllCategories: 'Искать во всех категориях',
    reset: 'Сбросить',
    filteredCalculators: 'Отфильтрованные калькуляторы',
  },
  en: {
    allCategories: 'All categories',
    allStatuses: 'All statuses',
    searchLabel: 'Catalog search',
    placeholder: 'For example: discount, loan, BMI, tiles',
    clearSearch: 'Clear search',
    sorting: 'Sorting',
    popularFirst: 'Most popular first',
    alphabetical: 'Alphabetical',
    found: 'Found',
    quickSearches: 'Quick searches',
    searchPrefix: 'Search',
    statusFilter: 'Status filter',
    categoryFilter: 'Category filter',
    query: 'Query',
    resetFilters: 'Reset filters',
    empty: 'No results found',
    emptyHelp: 'Try another query or reset filters. Search works with practical words like loan, fitness, tiles and currency.',
    searchAllCategories: 'Search all categories',
    reset: 'Reset',
    filteredCalculators: 'Filtered calculators',
  },
  es: {
    allCategories: 'Todas las categorías',
    allStatuses: 'Todos los estados',
    searchLabel: 'Buscar en el catálogo',
    placeholder: 'Por ejemplo: descuento, préstamo, IMC, azulejos',
    clearSearch: 'Limpiar búsqueda',
    sorting: 'Orden',
    popularFirst: 'Más populares primero',
    alphabetical: 'Alfabético',
    found: 'Encontrado',
    quickSearches: 'Búsquedas rápidas',
    searchPrefix: 'Buscar',
    statusFilter: 'Filtro por estado',
    categoryFilter: 'Filtro por categoría',
    query: 'Consulta',
    resetFilters: 'Restablecer filtros',
    empty: 'No se encontraron resultados',
    emptyHelp: 'Prueba otra búsqueda o restablece los filtros. La búsqueda entiende palabras prácticas como préstamo, fitness, azulejos y divisas.',
    searchAllCategories: 'Buscar en todas las categorías',
    reset: 'Restablecer',
    filteredCalculators: 'Calculadoras filtradas',
  },
  de: {
    allCategories: 'Alle Kategorien',
    allStatuses: 'Alle Status',
    searchLabel: 'Katalogsuche',
    placeholder: 'Zum Beispiel: Rabatt, Kredit, BMI, Fliesen',
    clearSearch: 'Suche löschen',
    sorting: 'Sortierung',
    popularFirst: 'Beliebteste zuerst',
    alphabetical: 'Alphabetisch',
    found: 'Gefunden',
    quickSearches: 'Schnellsuchen',
    searchPrefix: 'Suchen',
    statusFilter: 'Statusfilter',
    categoryFilter: 'Kategoriefilter',
    query: 'Suche',
    resetFilters: 'Filter zurücksetzen',
    empty: 'Keine Ergebnisse gefunden',
    emptyHelp: 'Probiere einen anderen Suchbegriff oder setze die Filter zurück. Die Suche versteht praktische Wörter wie Kredit, Fitness, Fliesen und Währung.',
    searchAllCategories: 'In allen Kategorien suchen',
    reset: 'Zurücksetzen',
    filteredCalculators: 'Gefilterte Rechner',
  },
  fr: {
    allCategories: 'Toutes les catégories',
    allStatuses: 'Tous les statuts',
    searchLabel: 'Recherche dans le catalogue',
    placeholder: 'Par exemple: remise, prêt, IMC, carrelage',
    clearSearch: 'Effacer la recherche',
    sorting: 'Tri',
    popularFirst: 'Les plus populaires d’abord',
    alphabetical: 'Alphabétique',
    found: 'Trouvé',
    quickSearches: 'Recherches rapides',
    searchPrefix: 'Rechercher',
    statusFilter: 'Filtre par statut',
    categoryFilter: 'Filtre par catégorie',
    query: 'Recherche',
    resetFilters: 'Réinitialiser les filtres',
    empty: 'Aucun résultat trouvé',
    emptyHelp: 'Essayez une autre recherche ou réinitialisez les filtres. La recherche comprend des mots pratiques comme prêt, fitness, carrelage et devises.',
    searchAllCategories: 'Rechercher dans toutes les catégories',
    reset: 'Réinitialiser',
    filteredCalculators: 'Calculatrices filtrées',
  },
  pt: {
    allCategories: 'Todas as categorias',
    allStatuses: 'Todos os estados',
    searchLabel: 'Pesquisa no catálogo',
    placeholder: 'Por exemplo: desconto, empréstimo, IMC, azulejos',
    clearSearch: 'Limpar pesquisa',
    sorting: 'Ordenação',
    popularFirst: 'Mais populares primeiro',
    alphabetical: 'Alfabética',
    found: 'Encontrado',
    quickSearches: 'Pesquisas rápidas',
    searchPrefix: 'Pesquisar',
    statusFilter: 'Filtro por estado',
    categoryFilter: 'Filtro por categoria',
    query: 'Pesquisa',
    resetFilters: 'Repor filtros',
    empty: 'Nenhum resultado encontrado',
    emptyHelp: 'Experimente outra pesquisa ou reponha os filtros. A pesquisa entende palavras práticas como empréstimo, fitness, azulejos e moedas.',
    searchAllCategories: 'Pesquisar em todas as categorias',
    reset: 'Repor',
    filteredCalculators: 'Calculadoras filtradas',
  },
  it: {
    allCategories: 'Tutte le categorie',
    allStatuses: 'Tutti gli stati',
    searchLabel: 'Ricerca nel catalogo',
    placeholder: 'Per esempio: sconto, prestito, BMI, piastrelle',
    clearSearch: 'Cancella ricerca',
    sorting: 'Ordinamento',
    popularFirst: 'Più popolari prima',
    alphabetical: 'Alfabetico',
    found: 'Trovati',
    quickSearches: 'Ricerche rapide',
    searchPrefix: 'Cerca',
    statusFilter: 'Filtro per stato',
    categoryFilter: 'Filtro per categoria',
    query: 'Ricerca',
    resetFilters: 'Reimposta filtri',
    empty: 'Nessun risultato trovato',
    emptyHelp: 'Prova un’altra ricerca o reimposta i filtri. La ricerca capisce parole pratiche come prestito, fitness, piastrelle e valute.',
    searchAllCategories: 'Cerca in tutte le categorie',
    reset: 'Reimposta',
    filteredCalculators: 'Calcolatori filtrati',
  },
  pl: {
    allCategories: 'Wszystkie kategorie',
    allStatuses: 'Wszystkie statusy',
    searchLabel: 'Wyszukiwanie w katalogu',
    placeholder: 'Na przyklad: rabat, kredyt, BMI, plytki',
    clearSearch: 'Wyczysc wyszukiwanie',
    sorting: 'Sortowanie',
    popularFirst: 'Najpopularniejsze najpierw',
    alphabetical: 'Alfabetycznie',
    found: 'Znaleziono',
    quickSearches: 'Szybkie zapytania',
    searchPrefix: 'Szukaj',
    statusFilter: 'Filtr statusu',
    categoryFilter: 'Filtr kategorii',
    query: 'Zapytanie',
    resetFilters: 'Resetuj filtry',
    empty: 'Brak wynikow',
    emptyHelp: 'Sprobuj innego zapytania albo zresetuj filtry. Wyszukiwarka rozumie praktyczne slowa: kredyt, fitness, plytki i waluty.',
    searchAllCategories: 'Szukaj we wszystkich kategoriach',
    reset: 'Resetuj',
    filteredCalculators: 'Filtrowane kalkulatory',
  },
  nl: {
    allCategories: 'Alle categorieen',
    allStatuses: 'Alle statussen',
    searchLabel: 'Zoeken in catalogus',
    placeholder: 'Bijvoorbeeld: korting, lening, BMI, tegels',
    clearSearch: 'Zoekopdracht wissen',
    sorting: 'Sorteren',
    popularFirst: 'Populairst eerst',
    alphabetical: 'Alfabetisch',
    found: 'Gevonden',
    quickSearches: 'Snelle zoekopdrachten',
    searchPrefix: 'Zoeken',
    statusFilter: 'Statusfilter',
    categoryFilter: 'Categoriefilter',
    query: 'Zoekopdracht',
    resetFilters: 'Filters resetten',
    empty: 'Geen resultaten',
    emptyHelp: 'Probeer een andere zoekopdracht of reset filters. Zoeken werkt met praktische woorden zoals lening, fitness, tegels en valuta.',
    searchAllCategories: 'Zoeken in alle categorieen',
    reset: 'Resetten',
    filteredCalculators: 'Gefilterde rekentools',
  },
  ro: {
    allCategories: 'Toate categoriile',
    allStatuses: 'Toate statusurile',
    searchLabel: 'Cautare in catalog',
    placeholder: 'De exemplu: reducere, credit, BMI, gresie',
    clearSearch: 'Sterge cautarea',
    sorting: 'Sortare',
    popularFirst: 'Cele mai populare intai',
    alphabetical: 'Alfabetic',
    found: 'Gasite',
    quickSearches: 'Cautari rapide',
    searchPrefix: 'Cauta',
    statusFilter: 'Filtru dupa status',
    categoryFilter: 'Filtru dupa categorie',
    query: 'Interogare',
    resetFilters: 'Reseteaza filtrele',
    empty: 'Niciun rezultat',
    emptyHelp: 'Incearca alta cautare sau reseteaza filtrele. Cautarea intelege cuvinte practice precum credit, fitness, gresie si valute.',
    searchAllCategories: 'Cauta in toate categoriile',
    reset: 'Reseteaza',
    filteredCalculators: 'Calculatoare filtrate',
  },
  id: {
    allCategories: 'Semua kategori',
    allStatuses: 'Semua status',
    searchLabel: 'Pencarian katalog',
    placeholder: 'Misalnya: diskon, pinjaman, BMI, ubin',
    clearSearch: 'Hapus pencarian',
    sorting: 'Urutkan',
    popularFirst: 'Paling populer dulu',
    alphabetical: 'Alfabetis',
    found: 'Ditemukan',
    quickSearches: 'Pencarian cepat',
    searchPrefix: 'Cari',
    statusFilter: 'Filter status',
    categoryFilter: 'Filter kategori',
    query: 'Kueri',
    resetFilters: 'Reset filter',
    empty: 'Tidak ada hasil',
    emptyHelp: 'Coba kata lain atau reset filter. Pencarian memahami kata praktis seperti pinjaman, fitness, ubin, dan mata uang.',
    searchAllCategories: 'Cari di semua kategori',
    reset: 'Reset',
    filteredCalculators: 'Kalkulator terfilter',
  },
  tr: {
    allCategories: 'Tüm kategoriler',
    allStatuses: 'Tüm durumlar',
    searchLabel: 'Katalog araması',
    placeholder: 'Örneğin: indirim, kredi, BMI, fayans',
    clearSearch: 'Aramayı temizle',
    sorting: 'Sıralama',
    popularFirst: 'Önce en popüler',
    alphabetical: 'Alfabetik',
    found: 'Bulundu',
    quickSearches: 'Hızlı aramalar',
    searchPrefix: 'Ara',
    statusFilter: 'Durum filtresi',
    categoryFilter: 'Kategori filtresi',
    query: 'Sorgu',
    resetFilters: 'Filtreleri sıfırla',
    empty: 'Sonuç yok',
    emptyHelp: 'Başka bir arama deneyin veya filtreleri sıfırlayın. Arama kredi, fitness, fayans ve döviz gibi pratik kelimeleri anlar.',
    searchAllCategories: 'Tüm kategorilerde ara',
    reset: 'Sıfırla',
    filteredCalculators: 'Filtrelenmiş hesaplayıcılar',
  },
  vi: {
    allCategories: 'Tất cả danh mục',
    allStatuses: 'Tất cả trạng thái',
    searchLabel: 'Tìm trong danh mục',
    placeholder: 'Ví dụ: giảm giá, khoản vay, BMI, gạch',
    clearSearch: 'Xóa tìm kiếm',
    sorting: 'Sắp xếp',
    popularFirst: 'Phổ biến trước',
    alphabetical: 'Theo chữ cái',
    found: 'Tìm thấy',
    quickSearches: 'Tìm nhanh',
    searchPrefix: 'Tìm',
    statusFilter: 'Lọc theo trạng thái',
    categoryFilter: 'Lọc theo danh mục',
    query: 'Truy vấn',
    resetFilters: 'Đặt lại bộ lọc',
    empty: 'Không có kết quả',
    emptyHelp: 'Thử từ khóa khác hoặc đặt lại bộ lọc. Tìm kiếm hiểu các từ thực tế như khoản vay, fitness, gạch và tiền tệ.',
    searchAllCategories: 'Tìm trong tất cả danh mục',
    reset: 'Đặt lại',
    filteredCalculators: 'Máy tính đã lọc',
  },
  cs: {
    allCategories: 'Všechny kategorie',
    allStatuses: 'Všechny stavy',
    searchLabel: 'Hledat v katalogu',
    placeholder: 'Například: sleva, půjčka, BMI, dlaždice',
    clearSearch: 'Vymazat hledání',
    sorting: 'Řazení',
    popularFirst: 'Nejpopulárnější první',
    alphabetical: 'Abecedně',
    found: 'Nalezeno',
    quickSearches: 'Rychlá hledání',
    searchPrefix: 'Hledat',
    statusFilter: 'Filtr podle stavu',
    categoryFilter: 'Filtr podle kategorie',
    query: 'Dotaz',
    resetFilters: 'Resetovat filtry',
    empty: 'Žádné výsledky',
    emptyHelp: 'Zkuste jiný dotaz nebo resetujte filtry. Hledání rozumí praktickým slovům jako půjčka, fitness, dlaždice a měny.',
    searchAllCategories: 'Hledat ve všech kategoriích',
    reset: 'Resetovat',
    filteredCalculators: 'Filtrované kalkulačky',
  },
  uk: {
    allCategories: 'Усі категорії',
    allStatuses: 'Усі статуси',
    searchLabel: 'Пошук у каталозі',
    placeholder: 'Наприклад: знижка, кредит, BMI, плитка',
    clearSearch: 'Очистити пошук',
    sorting: 'Сортування',
    popularFirst: 'Спочатку популярні',
    alphabetical: 'За алфавітом',
    found: 'Знайдено',
    quickSearches: 'Швидкі запити',
    searchPrefix: 'Шукати',
    statusFilter: 'Фільтр за статусом',
    categoryFilter: 'Фільтр за категорією',
    query: 'Запит',
    resetFilters: 'Скинути фільтри',
    empty: 'Нічого не знайдено',
    emptyHelp: 'Спробуйте інший запит або скиньте фільтри. Пошук розуміє практичні слова на кшталт кредит, фітнес, плитка і валюти.',
    searchAllCategories: 'Шукати в усіх категоріях',
    reset: 'Скинути',
    filteredCalculators: 'Відфільтровані калькулятори',
  },
  sk: {
    allCategories: 'Všetky kategórie',
    allStatuses: 'Všetky stavy',
    searchLabel: 'Hľadať v katalógu',
    placeholder: 'Napríklad: zľava, pôžička, BMI, dlaždice',
    clearSearch: 'Vymazať hľadanie',
    sorting: 'Zoradenie',
    popularFirst: 'Najpopulárnejšie prvé',
    alphabetical: 'Abecedne',
    found: 'Nájdené',
    quickSearches: 'Rýchle hľadania',
    searchPrefix: 'Hľadať',
    statusFilter: 'Filter podľa stavu',
    categoryFilter: 'Filter podľa kategórie',
    query: 'Dopyt',
    resetFilters: 'Resetovať filtre',
    empty: 'Žiadne výsledky',
    emptyHelp: 'Skúste iný dopyt alebo resetujte filtre. Hľadanie rozumie praktickým slovám ako pôžička, fitness, dlaždice a meny.',
    searchAllCategories: 'Hľadať vo všetkých kategóriách',
    reset: 'Resetovať',
    filteredCalculators: 'Filtrované kalkulačky',
  },
  hu: {
    allCategories: 'Összes kategória',
    allStatuses: 'Összes állapot',
    searchLabel: 'Keresés a katalógusban',
    placeholder: 'Például: kedvezmény, hitel, BMI, csempe',
    clearSearch: 'Keresés törlése',
    sorting: 'Rendezés',
    popularFirst: 'Először a népszerűek',
    alphabetical: 'Ábécé szerint',
    found: 'Találat',
    quickSearches: 'Gyors keresések',
    searchPrefix: 'Keresés',
    statusFilter: 'Állapotszűrő',
    categoryFilter: 'Kategóriaszűrő',
    query: 'Keresőkifejezés',
    resetFilters: 'Szűrők visszaállítása',
    empty: 'Nincs találat',
    emptyHelp: 'Próbáljon másik keresést, vagy állítsa vissza a szűrőket. A keresés érti az olyan gyakorlati szavakat, mint hitel, fitness, csempe és valuta.',
    searchAllCategories: 'Keresés minden kategóriában',
    reset: 'Visszaállítás',
    filteredCalculators: 'Szűrt kalkulátorok',
  },
};

type SortMode = 'popular' | 'name';
type TagFilter = typeof allTag | 'new' | 'popular';

function initialQuery(): string {
  if (typeof window === 'undefined') return '';
  return new URLSearchParams(window.location.search).get('q') ?? '';
}

function initialCategory(categories: CatalogCategory[]): CategoryId | typeof allCategory {
  if (typeof window === 'undefined') return allCategory;
  const value = new URLSearchParams(window.location.search).get('category');
  return categories.some((category) => category.id === value) ? (value as CategoryId) : allCategory;
}

function initialSort(): SortMode {
  if (typeof window === 'undefined') return defaultSort;
  const value = new URLSearchParams(window.location.search).get('sort');
  return value === 'name' ? 'name' : defaultSort;
}

function initialTag(): TagFilter {
  if (typeof window === 'undefined') return allTag;
  const value = new URLSearchParams(window.location.search).get('tag');
  return value === 'new' || value === 'popular' ? value : allTag;
}

export default function CalculatorCatalog({ categories, locale = 'ru' }: Props) {
  const copy = clientUi[locale];
  const catalogCopy = catalogCopyByLocale[locale];
  const quickQueries = quickQueriesByLocale[locale];
  const [query, setQuery] = useState(initialQuery);
  const [activeCategory, setActiveCategory] =
    useState<CategoryId | typeof allCategory>(() => initialCategory(categories));
  const [sortMode, setSortMode] = useState<SortMode>(initialSort);
  const [tagFilter, setTagFilter] = useState<TagFilter>(initialTag);

  const categoriesById = useMemo(
    () => Object.fromEntries(categories.map((category) => [category.id, category])),
    [categories],
  );

  // Карточки читаются один раз после монтирования: до этого момента сеткой
  // владеет разметка, отданная сервером, и трогать её незачем.
  const [cards, setCards] = useState<CardHandle[]>([]);
  useEffect(() => { setCards(readCards(categories)); }, [categories]);

  const categoryCounts = useMemo(() => {
    const counts: Partial<Record<CategoryId, number>> = {};
    for (const card of cards) counts[card.category] = (counts[card.category] ?? 0) + 1;
    return counts;
  }, [cards]);

  const tagCounts = useMemo(() => ({
    all: cards.length,
    new: cards.filter((card) => card.isNew).length,
    popular: cards.filter((card) => card.isPopular).length,
  }), [cards]);

  // Тот же отбор, что был у React-версии, только над уже готовыми карточками:
  // категория, метка, поиск. Совпадение ищется по тем же иглам запроса.
  const visibleCards = useMemo(() => {
    const needles = queryNeedles(query);
    return cards.filter((card) => {
      if (activeCategory !== allCategory && card.category !== activeCategory) return false;
      if (tagFilter === 'new' && !card.isNew) return false;
      if (tagFilter === 'popular' && !card.isPopular) return false;
      if (needles.length === 0) return true;
      return needles.some((needle) => card.haystack.includes(needle));
    });
  }, [activeCategory, cards, query, tagFilter]);

  const hasActiveFilters =
    query.trim() || activeCategory !== allCategory || sortMode !== defaultSort || tagFilter !== allTag;

  // Показ и порядок применяются к разметке, а не пересобирают её. `hidden`
  // выключает карточку и для клавиатуры, и для скринридера — в отличие от
  // прозрачности или выноса за экран.
  useEffect(() => {
    if (cards.length === 0) return;
    const shown = new Set(visibleCards.map((card) => card.element));
    for (const card of cards) {
      const isVisible = shown.has(card.element);
      card.element.toggleAttribute('hidden', !isVisible);
      card.element.style.order = sortMode === 'name' ? String(card.nameOrder) : '';
    }
    const grid = document.getElementById('catalog-results');
    if (grid) {
      grid.toggleAttribute('hidden', visibleCards.length === 0);
      grid.setAttribute('aria-label', hasActiveFilters ? catalogCopy.filteredCalculators : copy.allCalculators);
    }
  }, [cards, catalogCopy, copy, hasActiveFilters, sortMode, visibleCards]);


  useEffect(() => {
    if (typeof window === 'undefined') return;

    const url = new URL(window.location.href);
    const nextQuery = query.trim();

    if (nextQuery) {
      url.searchParams.set('q', nextQuery);
    } else {
      url.searchParams.delete('q');
    }

    if (activeCategory === allCategory) {
      url.searchParams.delete('category');
    } else {
      url.searchParams.set('category', activeCategory);
    }

    if (sortMode === defaultSort) {
      url.searchParams.delete('sort');
    } else {
      url.searchParams.set('sort', sortMode);
    }

    if (tagFilter === allTag) {
      url.searchParams.delete('tag');
    } else {
      url.searchParams.set('tag', tagFilter);
    }

    window.history.replaceState(null, '', `${url.pathname}${url.search}${url.hash}`);
  }, [activeCategory, query, sortMode, tagFilter]);

  const resetFilters = () => {
    setQuery('');
    setActiveCategory(allCategory);
    setSortMode(defaultSort);
    setTagFilter(allTag);
  };

  const broadenCategoryFilter = () => {
    setActiveCategory(allCategory);
  };

  const focusCatalogSearch = () => {
    document.getElementById('catalog-search')?.focus();
  };

  const focusCatalogCard = (index: number) => {
    (visibleCards[index]?.element as HTMLAnchorElement | undefined)?.focus();
  };

  const activeCategoryName =
    activeCategory === allCategory
      ? catalogCopy.allCategories
      : categoriesById[activeCategory]?.name;
  const activeTagLabel =
    tagFilter === 'new'
      ? copy.newest
      : tagFilter === 'popular'
        ? copy.popular
        : catalogCopy.allStatuses;

  return (
    <>
      <div className="min-w-0 rounded-3xl border border-ink-200 bg-white p-4 shadow-[0_12px_36px_rgba(39,32,85,0.07)] sm:p-6">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_220px_auto] lg:items-end">
          <div className="min-w-0">
            <label
              htmlFor="catalog-search"
              className="mb-2 block text-xs font-medium uppercase tracking-wider text-ink-500"
            >
              {catalogCopy.searchLabel}
            </label>
            <div className="relative">
              <Search
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400"
                aria-hidden="true"
              />
              <input
                id="catalog-search"
                data-testid="catalog-search"
                type="search"
                className="field-input py-3 pl-10 pr-11"
                placeholder={catalogCopy.placeholder}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'ArrowDown' && visibleCards.length > 0) {
                    event.preventDefault();
                    focusCatalogCard(0);
                  }
                }}
                autoComplete="off"
                aria-controls="catalog-results"
              />
              {query && (
                <button
                  type="button"
                  className="absolute right-2 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg border border-ink-200 text-ink-500 transition-colors hover:border-accent-100 hover:text-accent"
                  onClick={() => setQuery('')}
                  aria-label={catalogCopy.clearSearch}
                  data-testid="catalog-search-clear"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              )}
            </div>
          </div>

          <div className="min-w-0">
            <label
              htmlFor="catalog-sort"
              className="mb-2 block text-xs font-medium uppercase tracking-wider text-ink-500"
            >
              {catalogCopy.sorting}
            </label>
            <div className="relative">
              <ListFilter
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400"
                aria-hidden="true"
              />
              <select
                id="catalog-sort"
                className="field-select py-3 pl-10"
                value={sortMode}
                onChange={(event) => setSortMode(event.target.value as SortMode)}
                data-testid="catalog-sort"
              >
                <option value="popular">{catalogCopy.popularFirst}</option>
                <option value="name">{catalogCopy.alphabetical}</option>
              </select>
            </div>
          </div>

          <div className="min-w-0 text-sm text-ink-500 text-fit" aria-live="polite" data-testid="catalog-result-count">
            {catalogCopy.found}: <span className="font-mono text-ink-900">{visibleCards.length}</span>
          </div>
        </div>

        <div className="mt-4 flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible sm:pb-0" aria-label={catalogCopy.quickSearches} data-testid="catalog-quick-queries">
          {quickQueries.map((item) => (
            <button
              key={item}
              type="button"
              className="max-w-[12rem] shrink-0 rounded-full border border-ink-200 bg-ink-50 px-3 py-1.5 text-left text-xs font-medium leading-tight text-ink-700 transition-colors hover:border-accent-100 hover:bg-accent-50 hover:text-accent sm:max-w-full"
              onClick={() => setQuery(item)}
              aria-label={`${catalogCopy.searchPrefix}: ${item}`}
            >
              {item}
            </button>
          ))}
        </div>

        <div
          className="mt-4 grid grid-cols-3 gap-2 sm:flex sm:flex-wrap"
          aria-label={catalogCopy.statusFilter}
          data-testid="catalog-tag-filter"
        >
          <button
            type="button"
            className="max-w-full rounded-xl border border-ink-200 px-2.5 py-2 text-center text-sm font-semibold leading-tight transition-colors aria-pressed:border-accent aria-pressed:bg-accent aria-pressed:text-white hover:bg-accent-50 sm:px-3 sm:text-left"
            aria-pressed={tagFilter === allTag}
            onClick={() => setTagFilter(allTag)}
            data-testid="catalog-tag-all"
          >
            {copy.all} <span className="ml-1 font-mono text-xs opacity-70">{tagCounts.all}</span>
          </button>
          <button
            type="button"
            className="max-w-full rounded-xl border border-ink-200 px-2.5 py-2 text-center text-sm font-semibold leading-tight transition-colors aria-pressed:border-accent aria-pressed:bg-accent aria-pressed:text-white hover:bg-accent-50 sm:px-3 sm:text-left"
            aria-pressed={tagFilter === 'new'}
            onClick={() => setTagFilter('new')}
            data-testid="catalog-tag-new"
          >
            {copy.newest} <span className="ml-1 font-mono text-xs opacity-70">{tagCounts.new}</span>
          </button>
          <button
            type="button"
            className="max-w-full rounded-xl border border-ink-200 px-2.5 py-2 text-center text-sm font-semibold leading-tight transition-colors aria-pressed:border-accent aria-pressed:bg-accent aria-pressed:text-white hover:bg-accent-50 sm:px-3 sm:text-left"
            aria-pressed={tagFilter === 'popular'}
            onClick={() => setTagFilter('popular')}
            data-testid="catalog-tag-popular"
          >
            {copy.popular} <span className="ml-1 font-mono text-xs opacity-70">{tagCounts.popular}</span>
          </button>
        </div>

        <div
          className="mt-4 flex gap-2 overflow-x-auto pb-1"
          aria-label={catalogCopy.categoryFilter}
          data-testid="category-filter"
        >
          <button
            type="button"
            className="shrink-0 rounded-xl border border-ink-200 px-3 py-2 text-left text-sm font-semibold leading-tight transition-colors aria-pressed:border-accent aria-pressed:bg-accent aria-pressed:text-white hover:bg-accent-50"
            aria-pressed={activeCategory === allCategory}
            onClick={() => setActiveCategory(allCategory)}
          >
            {copy.all} <span className="ml-1 font-mono text-xs opacity-70">{cards.length}</span>
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              className="shrink-0 rounded-xl border border-ink-200 px-3 py-2 text-left text-sm font-semibold leading-tight transition-colors aria-pressed:border-accent aria-pressed:bg-accent aria-pressed:text-white hover:bg-accent-50"
              aria-pressed={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
              <span className="ml-1 font-mono text-xs opacity-70">{categoryCounts[category.id] ?? 0}</span>
            </button>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-ink-500" data-testid="catalog-active-filters">
          <span className="max-w-full border border-ink-200 bg-ink-50 px-2.5 py-1 text-fit">
            {activeCategoryName}
          </span>
          <span className="max-w-full border border-ink-200 bg-ink-50 px-2.5 py-1 text-fit">
            {activeTagLabel}
          </span>
          {query.trim() && (
            <span className="max-w-full border border-ink-200 bg-ink-50 px-2.5 py-1 text-fit">
              {catalogCopy.query}: <span className="font-mono text-ink-900">{query.trim()}</span>
            </span>
          )}
          {sortMode === 'name' && (
            <span className="max-w-full border border-ink-200 bg-ink-50 px-2.5 py-1 text-fit">
              {catalogCopy.alphabetical}
            </span>
          )}
          {(query || activeCategory !== allCategory || sortMode !== defaultSort) && (
            <button
              type="button"
              className="underline underline-offset-4 hover:text-accent"
              onClick={resetFilters}
            >
              {catalogCopy.resetFilters}
            </button>
          )}
        </div>
      </div>

      {cards.length > 0 && visibleCards.length === 0 && (
        <div
          className="border border-ink-200 bg-ink-50 px-5 py-8 text-center"
          data-testid="catalog-empty"
        >
          <p className="text-lg font-semibold text-ink-900">{catalogCopy.empty}</p>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-ink-500">
            {catalogCopy.emptyHelp}
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {activeCategory !== allCategory && (
              <button
                type="button"
                className="inline-flex max-w-full items-center justify-center rounded-xl bg-accent px-4 py-2 text-center text-sm font-semibold leading-tight text-white transition-colors hover:bg-accent-600"
                onClick={broadenCategoryFilter}
                data-testid="catalog-empty-broaden"
              >
                {catalogCopy.searchAllCategories}
              </button>
            )}
            <button
              type="button"
              className="inline-flex max-w-full items-center justify-center rounded-xl bg-accent px-4 py-2 text-center text-sm font-semibold leading-tight text-white transition-colors hover:bg-accent-600"
              onClick={resetFilters}
              data-testid="catalog-empty-reset"
            >
              {catalogCopy.reset}
            </button>
          </div>
          <div className="mt-5 flex flex-wrap justify-center gap-2" data-testid="catalog-empty-suggestions">
            {quickQueries.slice(0, 4).map((item) => (
              <button
                key={item}
                type="button"
                className="max-w-full rounded-full border border-ink-200 bg-white px-3 py-1.5 text-left text-xs font-medium leading-tight text-ink-700 transition-colors hover:border-accent-100 hover:bg-accent-50 hover:text-accent"
                onClick={() => {
                  setQuery(item);
                  setActiveCategory(allCategory);
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
