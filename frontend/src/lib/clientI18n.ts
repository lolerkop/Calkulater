// Оболочка интерфейса, общая для всех островов: поиска, подборки и калькулятора.
//
// Словари результата здесь НЕ живут. Поиск и подборка никогда их не читают, а
// вместе с ними тянули полсотни килобайт фраз на каждой странице. Разделение
// проведено по потребителю, а не по теме: здесь ровно то, что нужно любому
// острову, а перевод результата — в `resultPhrases` рядом с теми, кто его
// показывает.

export const clientLocales = ['ru', 'en', 'es', 'de', 'fr', 'pt', 'it', 'pl', 'nl', 'ro', 'id', 'tr', 'vi', 'cs', 'uk', 'sk', 'hu'] as const;
export type Locale = (typeof clientLocales)[number];

export function localeCatalog(locale: Locale): string {
  return `/${locale}/calculators/`;
}

export const clientUi = {
  ru: {
    all: 'Все',
    allCalculators: 'Все калькуляторы',
    newest: 'Новые',
    open: 'Открыть',
    popular: 'Популярное',
    popularBadge: 'Популярный',
    newBadge: 'Новый',
  },
  en: {
    all: 'All',
    allCalculators: 'All calculators',
    newest: 'New',
    open: 'Open',
    popular: 'Popular',
    popularBadge: 'Popular',
    newBadge: 'New',
  },
  es: {
    all: 'Todas',
    allCalculators: 'Todas las calculadoras',
    newest: 'Nuevas',
    open: 'Abrir',
    popular: 'Popular',
    popularBadge: 'Popular',
    newBadge: 'Nuevo',
  },
  de: {
    all: 'Alle',
    allCalculators: 'Alle Rechner',
    newest: 'Neu',
    open: 'Öffnen',
    popular: 'Beliebt',
    popularBadge: 'Beliebt',
    newBadge: 'Neu',
  },
  fr: {
    all: 'Toutes',
    allCalculators: 'Toutes les calculatrices',
    newest: 'Nouveautés',
    open: 'Ouvrir',
    popular: 'Populaire',
    popularBadge: 'Populaire',
    newBadge: 'Nouveau',
  },
  pt: {
    all: 'Todas',
    allCalculators: 'Todas as calculadoras',
    newest: 'Novas',
    open: 'Abrir',
    popular: 'Popular',
    popularBadge: 'Popular',
    newBadge: 'Novo',
  },
  it: {
    all: 'Tutti',
    allCalculators: 'Tutti i calcolatori',
    newest: 'Novità',
    open: 'Apri',
    popular: 'Popolari',
    popularBadge: 'Popolare',
    newBadge: 'Nuovo',
  },
  pl: {
    all: 'Wszystkie',
    allCalculators: 'Wszystkie kalkulatory',
    newest: 'Nowe',
    open: 'Otworz',
    popular: 'Popularne',
    popularBadge: 'Popularne',
    newBadge: 'Nowe',
  },
  nl: {
    all: 'Alles',
    allCalculators: 'Alle rekentools',
    newest: 'Nieuw',
    open: 'Open',
    popular: 'Populair',
    popularBadge: 'Populair',
    newBadge: 'Nieuw',
  },
  ro: {
    all: 'Toate',
    allCalculators: 'Toate calculatoarele',
    newest: 'Noi',
    open: 'Deschide',
    popular: 'Populare',
    popularBadge: 'Popular',
    newBadge: 'Nou',
  },
  id: {
    all: 'Semua',
    allCalculators: 'Semua kalkulator',
    newest: 'Baru',
    open: 'Buka',
    popular: 'Populer',
    popularBadge: 'Populer',
    newBadge: 'Baru',
  },
  tr: {
    all: 'Tümü',
    allCalculators: 'Tüm hesaplayıcılar',
    newest: 'Yeni',
    open: 'Aç',
    popular: 'Popüler',
    popularBadge: 'Popüler',
    newBadge: 'Yeni',
  },
  vi: {
    all: 'Tất cả',
    allCalculators: 'Tất cả máy tính',
    newest: 'Mới',
    open: 'Mở',
    popular: 'Phổ biến',
    popularBadge: 'Phổ biến',
    newBadge: 'Mới',
  },
  cs: {
    all: 'Vše',
    allCalculators: 'Všechny kalkulačky',
    newest: 'Nové',
    open: 'Otevřít',
    popular: 'Populární',
    popularBadge: 'Populární',
    newBadge: 'Nové',
  },
  uk: {
    all: 'Усі',
    allCalculators: 'Усі калькулятори',
    newest: 'Нові',
    open: 'Відкрити',
    popular: 'Популярне',
    popularBadge: 'Популярний',
    newBadge: 'Новий',
  },
  sk: {
    all: 'Všetko',
    allCalculators: 'Všetky kalkulačky',
    newest: 'Nové',
    open: 'Otvoriť',
    popular: 'Populárne',
    popularBadge: 'Populárne',
    newBadge: 'Nové',
  },
  hu: {
    all: 'Mind',
    allCalculators: 'Összes kalkulátor',
    newest: 'Új',
    open: 'Megnyitás',
    popular: 'Népszerű',
    popularBadge: 'Népszerű',
    newBadge: 'Új',
  },
} satisfies Record<Locale, Record<string, string>>;
