import {
  generatedRateProvenance,
  generatedRateSources,
  generatedRatesDate,
  generatedRatesToUSD,
} from './currencyRates.generated';
import {
  generatedRatesDegradedProviders,
  generatedRatesUpdateAttemptedAt,
  generatedRatesUpdateMessage,
  generatedRatesUpdateStatus,
  generatedRatesUsedFallback,
} from './currencyRatesStatus.generated';
import { currencyRatesAreStale } from '../lib/currencyFreshness';

export type CurrencyCode =
  | 'USD'
  | 'EUR'
  | 'MDL'
  | 'RON'
  | 'UAH'
  | 'PLN'
  | 'GBP'
  | 'CHF'
  | 'TRY';

export const currencies: { code: CurrencyCode; name: string; symbol: string }[] = [
  { code: 'USD', name: 'Доллар США', symbol: '$' },
  { code: 'EUR', name: 'Евро', symbol: '€' },
  { code: 'MDL', name: 'Молдавский лей', symbol: 'L' },
  { code: 'RON', name: 'Румынский лей', symbol: 'lei' },
  { code: 'UAH', name: 'Гривна', symbol: '₴' },
  { code: 'PLN', name: 'Польский злотый', symbol: 'zł' },
  { code: 'GBP', name: 'Фунт стерлингов', symbol: '£' },
  { code: 'CHF', name: 'Швейцарский франк', symbol: 'CHF' },
  { code: 'TRY', name: 'Турецкая лира', symbol: '₺' },
];

// Курсы к USD: сколько единиц валюты дают за 1 USD
export const ratesToUSD: Record<CurrencyCode, number> = generatedRatesToUSD;

export type RateProvider = keyof typeof generatedRateSources;

/** Откуда пришла каждая валюта: свой центробанк или резервный источник. */
export const rateProvenance = generatedRateProvenance;

/** Описание использованных источников: подпись, адрес, дата, признак резерва. */
export const rateSources = generatedRateSources;

export const lastUpdated = generatedRatesDate;
export const ratesUpdateAttemptedAt = generatedRatesUpdateAttemptedAt;
export const ratesUpdateMessage = generatedRatesUpdateMessage;
export const ratesUpdateFailed = generatedRatesUpdateStatus === 'failed';
export const ratesUsedFallback = generatedRatesUsedFallback;
export const ratesDegradedProviders: readonly string[] = generatedRatesDegradedProviders;
export const ratesAreStale = currencyRatesAreStale(generatedRatesDate);

export const ratesStatus = ratesUpdateFailed
  ? 'Не удалось обновить курсы при последней сборке. Используются последние сохранённые данные.'
  : ratesAreStale
    ? 'Дата курса старше четырёх дней. Данные могут быть устаревшими.'
    : ratesUsedFallback
      ? 'Курсы обновлены при последней сборке; часть валют получена из резервного источника.'
      : 'Курсы успешно обновлены при последней сборке сайта.';

export const ratesNotice =
  'Это не курс в реальном времени. Используются официальные справочные курсы центральных банков на указанную дату. Банки и обменные пункты могут использовать другие курсы и комиссии.';

// Названия источников по-русски. В продукте вся локализация построена на
// словаре, где ключ — русская строка, поэтому имена берутся отсюда, а не из
// сгенерированного файла: там они английские и служат самим воротам и скриптам.
const PROVIDER_NAMES_RU: Record<string, string> = {
  ecb: 'Европейский центральный банк',
  nbu: 'Национальный банк Украины',
  bnm: 'Национальный банк Молдовы',
  erapi: 'Exchange Rate API',
};

export function providerName(id: string): string {
  return PROVIDER_NAMES_RU[id] ?? id;
}

/**
 * Источники, относящиеся к конкретному набору валют.
 *
 * Атрибуция на странице пары обязана называть тех, чьи данные в этом расчёте
 * действительно участвуют: у USD → UAH это Национальный банк Украины, у
 * EUR → MDL это ЕЦБ и Национальный банк Молдовы. Доллар — база, собственного
 * источника у него нет, поэтому он в перечислении не участвует.
 */
export function sourcesForCurrencies(codes: readonly CurrencyCode[]): {
  id: string;
  name: string;
  label: string;
  url: string;
  date: string;
  fallback: boolean;
}[] {
  const ids: string[] = [];
  for (const code of codes) {
    const entry = (rateProvenance as Record<string, { provider: string } | undefined>)[code];
    if (entry && !ids.includes(entry.provider)) ids.push(entry.provider);
  }
  return ids
    .map((id) => {
      const meta = (rateSources as Record<string, { label: string; url: string; date: string; fallback: boolean } | undefined>)[id];
      return meta ? { id, name: providerName(id), ...meta } : null;
    })
    .filter((entry): entry is { id: string; name: string; label: string; url: string; date: string; fallback: boolean } => entry !== null);
}

/** Все источники набора — для общего конвертера и страницы категории. */
export const allRateSources = sourcesForCurrencies(currencies.map((c) => c.code));

export const currencyByCode = Object.fromEntries(
  currencies.map((c) => [c.code, c]),
) as Record<CurrencyCode, { code: CurrencyCode; name: string; symbol: string }>;
