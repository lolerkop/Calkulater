import { getCalculatorSpecificLimitation } from './calculatorSpecificLimitations';
import {getHouseholdWave17MethodSources} from './householdWave17MethodSources';
import {getBuildingWave16MethodSources} from './buildingWave16MethodSources';
import {getPhysicsWave16MethodSources} from './physicsWave16MethodSources';
import {getHouseholdWave16MethodSources} from './householdWave16MethodSources';
import {getHouseholdWave15MethodSources} from './householdWave15MethodSources';
import {getFinanceWave14MethodSources} from './financeWave14MethodSources';
import{getBuildingWave17MethodSources}from './buildingWave17MethodSources';
import {getBuildingWave13MethodSources} from './buildingWave13MethodSources';
import {getElectronicsWave12MethodSources} from './electronicsWave12MethodSources';
import {getFinanceWave11MethodSources} from './financeWave11MethodSources';
import {getConverterWave10MethodSources} from './converterWave10MethodSources';
import {getAutomotiveWave10MethodSources} from './automotiveWave10MethodSources';
import {getComputerWave9MethodSources} from './computerWave9MethodSources';
import {getBusinessWave9MethodSources} from './businessWave9MethodSources';
import {getDateTimeWave15MethodSources} from './dateTimeWave15MethodSources';
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
import { getFinanceMethodSources } from './financeContractContent';
import { getPercentDiscountMethodSources } from './percentDiscountContractContent';
import { methodSources as adRoiSources } from '../calculators/ad-roi/methodSources';
import { methodSources as dayOfWeekSources } from '../calculators/day-of-week/methodSources';
import { methodSources as dividendYieldSources } from '../calculators/dividend-yield/methodSources';
import { getReviewedMethodSources, getReviewedSourceCaveat } from './reviewedMethodSources';
import { getFitnessMethodSources } from './fitnessLegacyContractContent';
import { getPhysicsMethodSources } from './physicsMethodSources';
import { getChemistrySpecialMethodSources } from './chemistrySpecialMethodSources';
import { getChemistryWave4MethodSources } from './chemistryWave4MethodSources';
import { getMechanicsWave4MethodSources } from './mechanicsWave4MethodSources';
import { getGasWave5MethodSources } from './gasWave5MethodSources';
import { getMathWave5MethodSources } from './mathWave5MethodSources';
import { getGeometryWave6MethodSources } from './geometryWave6MethodSources';
import { getMathWave6MethodSources } from './mathWave6MethodSources';
import { getFinanceWave6MethodSources } from './financeWave6MethodSources';
import { getElectronicsWave7MethodSources } from './electronicsWave7MethodSources';
import { getModernPhysicsWave7MethodSources } from './modernPhysicsWave7MethodSources';
import { getFinanceWave8MethodSources } from './financeWave8MethodSources';
import { getGeometryWave8MethodSources } from './geometryWave8MethodSources';
import { getMathWave8MethodSources } from './mathWave8MethodSources';
import { getEducationWave8MethodSources } from './educationWave8MethodSources';
import { methodSources as marketingCpcSources } from '../calculators/cpc/methodSources';
import { methodSources as marketingCpmSources } from '../calculators/cpm/methodSources';
import { methodSources as marketingCtrSources } from '../calculators/ctr/methodSources';
import { methodSources as marketingRoasSources } from '../calculators/roas/methodSources';
import { methodSources as marketingLtvSources } from '../calculators/ltv/methodSources';
import { methodSources as marketingMrrSources } from '../calculators/mrr-arr/methodSources';
import { methodSources as marketingArpuSources } from '../calculators/arpu-arppu/methodSources';
import { methodSources as marketingEngagementSources } from '../calculators/engagement-rate/methodSources';
import { methodSources as wave4SimpleInterestSources } from '../calculators/simple-interest/methodSources';
import { methodSources as wave4ContributionMarginSources } from '../calculators/contribution-margin/methodSources';
import { methodSources as wave4PaybackPeriodSources } from '../calculators/payback-period/methodSources';
import { methodSources as wave4WeekNumberSources } from '../calculators/week-number/methodSources';
import { methodSources as wave4CacSources } from '../calculators/cac/methodSources';
import { methodSources as wave4CpaCplCpiSources } from '../calculators/cpa-cpl-cpi/methodSources';
import { methodSources as wave4ConversionRateSources } from '../calculators/conversion-rate/methodSources';

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
    sources: [
      ...getHouseholdWave17MethodSources(calculator.id, lang),
      ...getBuildingWave16MethodSources(calculator.id, lang),
      ...getPhysicsWave16MethodSources(calculator.id, lang),
      ...getHouseholdWave16MethodSources(calculator.id, lang),
      ...getHouseholdWave15MethodSources(calculator.id, lang),
      ...getFinanceWave14MethodSources(calculator.id, lang),
      ...getBuildingWave17MethodSources(calculator.id, lang),
      ...getFinanceMethodSources(calculator.id, locale),
      ...getPercentDiscountMethodSources(calculator.id, locale),
      ...getReviewedMethodSources(calculator.id, locale),
      ...getFitnessMethodSources(calculator.id, lang),
      ...getPhysicsMethodSources(calculator.id, lang),
      ...getChemistrySpecialMethodSources(calculator.id, lang),
      ...getChemistryWave4MethodSources(calculator.id, lang),
      ...getMechanicsWave4MethodSources(calculator.id, lang),
      ...getGasWave5MethodSources(calculator.id, lang),
      ...getMathWave5MethodSources(calculator.id, lang),
      ...getGeometryWave6MethodSources(calculator.id, lang),
      ...getMathWave6MethodSources(calculator.id, lang),
      ...getFinanceWave6MethodSources(calculator.id, lang),
      ...getElectronicsWave7MethodSources(calculator.id, lang),
      ...getModernPhysicsWave7MethodSources(calculator.id, lang),
      ...getFinanceWave8MethodSources(calculator.id, lang),
      ...getGeometryWave8MethodSources(calculator.id, lang),
      ...getMathWave8MethodSources(calculator.id, lang),
      ...getEducationWave8MethodSources(calculator.id, lang),
      ...getDateTimeWave15MethodSources(calculator.id, lang),
      ...getBuildingWave13MethodSources(calculator.id, lang),
      ...getElectronicsWave12MethodSources(calculator.id, lang),
      ...getFinanceWave11MethodSources(calculator.id, lang),
      ...getConverterWave10MethodSources(calculator.id, lang),
      ...getAutomotiveWave10MethodSources(calculator.id, lang),
      ...getComputerWave9MethodSources(calculator.id, lang),
      ...getBusinessWave9MethodSources(calculator.id, lang),
      ...(calculator.id === 'cpc' ? marketingCpcSources[lang] : []),
      ...(calculator.id === 'cpm' ? marketingCpmSources[lang] : []),
      ...(calculator.id === 'ctr' ? marketingCtrSources[lang] : []),
      ...(calculator.id === 'roas' ? marketingRoasSources[lang] : []),
      ...(calculator.id === 'ltv' ? marketingLtvSources[lang] : []),
      ...(calculator.id === 'mrr-arr' ? marketingMrrSources[lang] : []),
      ...(calculator.id === 'arpu-arppu' ? marketingArpuSources[lang] : []),
      ...(calculator.id === 'engagement-rate' ? marketingEngagementSources[lang] : []),
      ...(calculator.id === 'simple-interest' ? wave4SimpleInterestSources[lang] : []),
      ...(calculator.id === 'contribution-margin' ? wave4ContributionMarginSources[lang] : []),
      ...(calculator.id === 'payback-period' ? wave4PaybackPeriodSources[lang] : []),
      ...(calculator.id === 'week-number' ? wave4WeekNumberSources[lang] : []),
      ...(calculator.id === 'cac' ? wave4CacSources[lang] : []),
      ...(calculator.id === 'cpa-cpl-cpi' ? wave4CpaCplCpiSources[lang] : []),
      ...(calculator.id === 'conversion-rate' ? wave4ConversionRateSources[lang] : []),
      ...(calculator.id === 'ad-roi' ? adRoiSources[lang] : []),
      ...(calculator.id === 'day-of-week' ? dayOfWeekSources[lang] : []),
      ...(calculator.id === 'dividend-yield' ? dividendYieldSources[lang] : []),
    ],
    limitation: [getCalculatorSpecificLimitation(calculator.id, lang) ?? calculator.disclaimer ?? genericLimitations[lang][calculator.category], getReviewedSourceCaveat(calculator.id, locale)].filter(Boolean).join(' '),
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

  if (calculator.id === 'bmi-calculator') {
    return base; // Reviewed CDC adult 20+ scope and the authored local limitation.
  }

  return base;
}
