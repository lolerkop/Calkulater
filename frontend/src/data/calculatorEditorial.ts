import {
  allRateSources,
  ratesAreStale,
  ratesUpdateFailed,
  ratesUsedFallback,
  sourcesForCurrencies,
  type CurrencyCode,
} from './currencies';
import type { CalculatorDef } from '../lib/types';
import { categoryDefinitions } from '../categories/manifest.generated';

export type EditorialSource = {
  label: string;
  href?: string;
};

export type CalculatorEditorial = {
  heading: string;
  methodLabel: string;
  sourceLabel: string;
  reviewedLabel: string;
  limitationLabel: string;
  method: string;
  sources: EditorialSource[];
  reviewedAt?: string;
  limitation: string;
  freshnessWarning?: string;
};

const labels = {
  ru: {
    heading: 'Методика и ограничения',
    method: 'Методика расчёта',
    source: 'Источник данных или нормы',
    reviewed: 'Дата последней проверки',
    limitation: 'Ограничение',
  },
  en: {
    heading: 'Method and limitations',
    method: 'Calculation method',
    source: 'Data or methodology source',
    reviewed: 'Last reviewed',
    limitation: 'Limitation',
  },
  uk: {
    heading: 'Методика та обмеження',
    method: 'Методика розрахунку',
    source: 'Джерело даних або норми',
    reviewed: 'Дата останньої перевірки',
    limitation: 'Обмеження',
  },
  de: {
    heading: 'Rechenweg und Grenzen',
    method: 'Rechenweg',
    source: 'Datenquelle oder Norm',
    reviewed: 'Zuletzt geprüft',
    limitation: 'Einschränkung',
  },
  es: {
    heading: 'Método y limitaciones',
    method: 'Método de cálculo',
    source: 'Fuente de datos o norma',
    reviewed: 'Última revisión',
    limitation: 'Limitación',
  },
} as const;

// Оговорки категорий переехали в их модули. Прежняя карта была ориентирована
// локаль → категория; теперь каждая категория несёт свои переводы, а нужная
// ориентация собирается здесь.
const genericLimitations = Object.fromEntries(
  (['ru', 'en', 'uk', 'de', 'es'] as const).map((locale) => [
    locale,
    Object.fromEntries(categoryDefinitions.map((definition) => [
      definition.id,
      // Категория без немецкой оговорки получает английскую: локаль
      // добавляется данными, а не правкой этого места.
      definition.editorial[locale] ?? definition.editorial.en,
    ])),
  ]),
) as Record<'ru' | 'en' | 'uk' | 'de' | 'es', Record<string, string>>;

function language(locale: string): keyof typeof labels {
  return locale === 'ru' || locale === 'uk' || locale === 'de' || locale === 'es' ? locale : 'en';
}

// Немецкий и испанский варианты необязательны: локали без собственного текста
// по-прежнему получают английский, поэтому добавление языка не требует править
// все вызовы разом.
function sourceText(
  locale: string, ru: string, en: string, uk: string, de?: string, es?: string,
): string {
  if (locale === 'ru') return ru;
  if (locale === 'uk') return uk;
  if (locale === 'de') return de ?? en;
  if (locale === 'es') return es ?? en;
  return en;
}

export function getCalculatorEditorial(calculator: CalculatorDef, locale: string): CalculatorEditorial {
  const lang = language(locale);
  const copy = labels[lang];
  const base: CalculatorEditorial = {
    heading: copy.heading,
    methodLabel: copy.method,
    sourceLabel: copy.source,
    reviewedLabel: copy.reviewed,
    limitationLabel: copy.limitation,
    method: calculator.howItWorks,
    sources: [],
    limitation: genericLimitations[lang][calculator.category],
  };

// Названия источников по локалям. Источник называется тот, чьи данные реально
// участвуют в расчёте этой страницы, а не один на весь сайт.
const PROVIDER_LABELS: Record<string, { ru: string; en: string; uk: string; de: string; es: string }> = {
  ecb: {
    ru: 'Европейский центральный банк: справочные курсы евро',
    en: 'European Central Bank: euro foreign exchange reference rates',
    uk: 'Європейський центральний банк: довідкові курси євро',
    de: 'Europäische Zentralbank: Euro-Referenzkurse',
    es: 'Banco Central Europeo: tipos de cambio de referencia del euro',
  },
  nbu: {
    ru: 'Национальный банк Украины: официальные курсы',
    en: 'National Bank of Ukraine: official exchange rates',
    uk: 'Національний банк України: офіційні курси',
    de: 'Nationalbank der Ukraine: amtliche Kurse',
    es: 'Banco Nacional de Ucrania: tipos de cambio oficiales',
  },
  bnm: {
    ru: 'Национальный банк Молдовы: официальные курсы',
    en: 'National Bank of Moldova: official exchange rates',
    uk: 'Національний банк Молдови: офіційні курси',
    de: 'Nationalbank der Republik Moldau: amtliche Kurse',
    es: 'Banco Nacional de Moldavia: tipos de cambio oficiales',
  },
  erapi: {
    ru: 'Exchange Rate API: резервный источник курсов',
    en: 'Exchange Rate API: fallback rate source',
    uk: 'Exchange Rate API: резервне джерело курсів',
    de: 'Exchange Rate API: Reservequelle für Kurse',
    es: 'Exchange Rate API: fuente de reserva de tipos de cambio',
  },
};

function currencyFieldDefault(calculator: CalculatorDef, name: 'from' | 'to'): CurrencyCode | null {
  const field = calculator.fields?.find((item) => item.name === name);
  const value = field?.defaultValue;
  return typeof value === 'string' ? (value as CurrencyCode) : null;
}

function currencyFieldPinned(calculator: CalculatorDef, name: 'from' | 'to'): boolean {
  return calculator.fields?.find((item) => item.name === name)?.readOnly === true;
}

  if (calculator.category === 'currency') {
    const from = currencyFieldDefault(calculator, 'from');
    const to = currencyFieldDefault(calculator, 'to');

    // Калькулятор стоимости обмена берёт курс из поля пользователя, а не из
    // нашей таблицы. Приписывать ему центробанки было бы неправдой.
    if (!from || !to) return base;

    // Страница пары закреплена на двух валютах — называем только их источники.
    // Общий конвертер работает со всем набором, поэтому перечисляет все.
    const pinned = currencyFieldPinned(calculator, 'from') && currencyFieldPinned(calculator, 'to');
    const rateSources = pinned ? sourcesForCurrencies([from, to]) : allRateSources;

    return {
      ...base,
      method: calculator.howItWorks,
      sources: rateSources.map((source) => ({
        label: `${PROVIDER_LABELS[source.id]?.[lang] ?? source.label} — ${source.date}`,
        href: source.url,
      })),
      freshnessWarning: ratesUpdateFailed
        ? sourceText(
            locale,
            'Последняя проверка источников не удалась. Используются последние сохранённые данные.',
            'The latest source check failed. The last saved rates are being used.',
            'Остання перевірка джерел не вдалася. Використовуються останні збережені курси.',
            'Die letzte Quellenprüfung ist fehlgeschlagen. Die zuletzt gespeicherten Kurse werden verwendet.',
            'La última comprobación de fuentes falló. Se utilizan los últimos tipos guardados.',
          )
        : ratesAreStale
          ? sourceText(
              locale,
              'Курсы одного или нескольких источников могут быть устаревшими. Проверьте даты источников.',
              'One or more source rates may be stale. Check the dates shown for each source.',
              'Курси одного або кількох джерел можуть бути застарілими. Перевірте дати джерел.',
              'Ein oder mehrere Quellkurse könnten veraltet sein. Prüfe die Daten der Quellen.',
              'Uno o varios tipos pueden estar desactualizados. Comprueba las fechas de las fuentes.',
            )
          : ratesUsedFallback && rateSources.some((source) => source.fallback)
            ? sourceText(
                locale,
                'Основной источник был недоступен, часть курсов получена из резервного.',
                'A primary source was unavailable, so some rates came from the fallback source.',
                'Основне джерело було недоступне, тому частину курсів отримано з резервного.',
                undefined,
                'La fuente principal no estaba disponible, así que parte de los tipos proviene de la fuente de reserva.',
              )
            : undefined,
    };
  }

  if (calculator.id === 'income-tax-calculator') {
    return {
      ...base,
      sources: [{
        label: 'ФНС России: прогрессивная шкала НДФЛ 13/15/18/20/22%',
        href: 'https://www.nalog.gov.ru/rn77/news/tax_doc_news/15562179/',
      }],
      limitation: 'Расчёт предназначен для основной прогрессивной шкалы доходов резидента за налоговый период 2025-2026. Отдельные налоговые базы, статус нерезидента и вычеты требуют самостоятельной проверки.',
    };
  }

  if (calculator.id === 'vat-calculator') {
    return {
      ...base,
      sources: [{
        label: 'ФНС России: применение основной ставки НДС 22% с 1 января 2026 года',
        href: 'https://www.nalog.gov.ru/rn25/news/activities_fts/16590316/',
      }],
      limitation: 'Ставка 22% применяется к операциям 2026 года; ставка 20% оставлена для сверки операций прошлых периодов. Право на ставки 0%, 5%, 7% или 10% зависит от вида операции и налогового режима.',
    };
  }

  if (calculator.id === 'bmi-calculator') {
    return {
      ...base,
      sources: [{
        label: sourceText(locale, 'ВОЗ: формула и ограничения индекса массы тела', 'WHO: BMI formula and interpretation limits', 'ВООЗ: формула й обмеження індексу маси тіла'),
        href: 'https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight',
      }],
      limitation: sourceText(
        locale,
        'Категории предназначены для взрослых. ИМТ не измеряет долю жира и может быть непоказателен для детей, беременных, пожилых людей и спортсменов с высокой мышечной массой.',
        'Adult cutoffs do not measure body fat directly and may be unsuitable for children, pregnancy, older adults or muscular athletes.',
        'Категорії призначені для дорослих. ІМТ не вимірює частку жиру й може бути непоказовим для дітей, вагітних, літніх людей і спортсменів із великою м’язовою масою.',
      ),
    };
  }

  return base;
}
