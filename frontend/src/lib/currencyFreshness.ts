export const MAX_CURRENCY_RATE_AGE_HOURS = 96;
export const MAX_CURRENCY_SOURCE_CHECK_AGE_HOURS = 96;

export type CurrencySourceFreshnessReason =
  | 'fresh'
  | 'invalid-effective-date'
  | 'effective-date-mismatch'
  | 'missing-successful-check'
  | 'invalid-successful-check'
  | 'future-successful-check'
  | 'stale-successful-check';

export interface CurrencySourceFreshnessAssessment {
  fresh: boolean;
  reason: CurrencySourceFreshnessReason;
  ageHours: number;
}

const ISO_DATE_PATTERN = /^(\d{4})-(\d{2})-(\d{2})$/;
const ISO_TIMESTAMP_PATTERN = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;

function isValidIsoDate(value: string): boolean {
  const match = ISO_DATE_PATTERN.exec(value);
  if (!match) return false;

  const [, yearText, monthText, dayText] = match;
  const year = Number(yearText);
  const month = Number(monthText);
  const day = Number(dayText);
  const parsed = new Date(0);
  parsed.setUTCHours(0, 0, 0, 0);
  parsed.setUTCFullYear(year, month - 1, day);
  return parsed.getUTCFullYear() === year &&
    parsed.getUTCMonth() === month - 1 &&
    parsed.getUTCDate() === day;
}

export function currencySourceCheckAgeHours(checkedAt: string, now = new Date()): number {
  if (!ISO_TIMESTAMP_PATTERN.test(checkedAt)) return Number.NaN;
  const checkedTime = Date.parse(checkedAt);
  const nowTime = now.getTime();
  if (!Number.isFinite(checkedTime) || !Number.isFinite(nowTime)) return Number.NaN;
  if (new Date(checkedTime).toISOString() !== checkedAt) return Number.NaN;
  return (nowTime - checkedTime) / 3_600_000;
}

export function assessCurrencySourceFreshness({
  effectiveDate,
  lastSuccessfulCheckAt,
  lastSuccessfulEffectiveDate,
  now = new Date(),
}: {
  effectiveDate: string;
  lastSuccessfulCheckAt: string;
  lastSuccessfulEffectiveDate: string;
  now?: Date;
}): CurrencySourceFreshnessAssessment {
  if (!isValidIsoDate(effectiveDate)) {
    return { fresh: false, reason: 'invalid-effective-date', ageHours: Number.NaN };
  }
  if (lastSuccessfulEffectiveDate !== effectiveDate) {
    return { fresh: false, reason: 'effective-date-mismatch', ageHours: Number.NaN };
  }
  if (!lastSuccessfulCheckAt) {
    return { fresh: false, reason: 'missing-successful-check', ageHours: Number.NaN };
  }

  const ageHours = currencySourceCheckAgeHours(lastSuccessfulCheckAt, now);
  if (!Number.isFinite(ageHours)) {
    return { fresh: false, reason: 'invalid-successful-check', ageHours };
  }
  if (ageHours < 0) {
    return { fresh: false, reason: 'future-successful-check', ageHours };
  }
  if (ageHours > MAX_CURRENCY_SOURCE_CHECK_AGE_HOURS) {
    return { fresh: false, reason: 'stale-successful-check', ageHours };
  }
  return { fresh: true, reason: 'fresh', ageHours };
}

export function currencyRateAgeHours(sourceDate: string, now = new Date()): number {
  const sourceTime = Date.parse(sourceDate);
  const nowTime = now.getTime();
  if (!Number.isFinite(sourceTime) || !Number.isFinite(nowTime)) return Number.POSITIVE_INFINITY;
  return Math.max(0, (nowTime - sourceTime) / 3_600_000);
}

export function currencyRatesAreStale(sourceDate: string, now = new Date()): boolean {
  return currencyRateAgeHours(sourceDate, now) > MAX_CURRENCY_RATE_AGE_HOURS;
}

// ── Оценка по каждому источнику ────────────────────────────────────────────
//
// Раньше источник был один, и «свежесть» была одним числом. Теперь валюты
// приходят от трёх центробанков с РАЗНЫМИ календарями публикации: ЕЦБ печатает
// только по рабочим дням, НБМ — по дате в запросе, а НБУ публикует курс на
// СЛЕДУЮЩИЙ банковский день, поэтому его дата законно оказывается в будущем.
// Требовать от них одинаковой даты бессмысленно — надо проверять возраст
// каждого отдельно.

/** Насколько далеко вперёд дата источника считается допустимой. */
export const MAX_PROVIDER_LEAD_HOURS = 72;

// Предельный возраст данных — свой для каждого источника, потому что календари
// публикации у них разные, и единый порог был бы либо слишком строгим для
// одних, либо слишком мягким для других.
//
// ЕЦБ печатает только в рабочие дни TARGET2. Худшее известное окно — Пасха:
// Страстная пятница, суббота, воскресенье и Пасхальный понедельник закрыты,
// поэтому после четверга следующая публикация только во вторник. Обновление
// ходит в 05:17 UTC, а ЕЦБ публикует около 14:00 UTC, значит во вторник до
// полудня свежайшими остаются четверговые данные возрастом около 110 часов.
// Столько же дают Рождество 25–26 декабря и Новый год, если ложатся на
// четверг с пятницей. При пороге в 96 часов сборка всего сайта вставала бы
// на несколько часов раз в год — ровно тот отказ, ради устранения которого
// и уходили от единственного источника.
//
// 120 часов покрывают худшее окно с запасом в десять часов и при этом ловят
// настоящее залипание: пропущенная неделя публикаций — уже провал.
//
// Резервный источник обновляется ежедневно, включая выходные и праздники,
// поэтому ему послаблений не нужно.
export const PROVIDER_MAX_AGE_HOURS: Record<string, number> = {
  ecb: 120,
  nbu: 120,
  bnm: 120,
};

export const DEFAULT_PROVIDER_MAX_AGE_HOURS = MAX_CURRENCY_RATE_AGE_HOURS;

export function providerMaxAgeHours(id: string): number {
  return PROVIDER_MAX_AGE_HOURS[id] ?? DEFAULT_PROVIDER_MAX_AGE_HOURS;
}

export type ProviderFreshnessReason =
  | 'fresh'
  | 'invalid-date'
  | 'too-far-ahead'
  | 'stale';

export interface ProviderFreshness {
  id: string;
  date: string;
  fallback: boolean;
  ageHours: number;
  fresh: boolean;
  reason: ProviderFreshnessReason;
}

export interface ProvidersFreshnessAssessment {
  fresh: boolean;
  providers: ProviderFreshness[];
  stale: ProviderFreshness[];
  fallbackProviders: string[];
}

export function assessProviderFreshness(
  source: { id: string; date: string; fallback?: boolean },
  now = new Date(),
): ProviderFreshness {
  const base = { id: source.id, date: source.date, fallback: Boolean(source.fallback) };
  if (!isValidIsoDate(source.date)) {
    return { ...base, ageHours: Number.NaN, fresh: false, reason: 'invalid-date' };
  }

  // Дату считаем от конца её суток: курс, опубликованный «на 24-е», не стареет
  // в полночь 24-го.
  const endOfDay = Date.parse(`${source.date}T23:59:59.999Z`);
  const ageHours = (now.getTime() - endOfDay) / 3_600_000;

  if (ageHours < -MAX_PROVIDER_LEAD_HOURS) {
    return { ...base, ageHours, fresh: false, reason: 'too-far-ahead' };
  }
  if (ageHours > providerMaxAgeHours(source.id)) {
    return { ...base, ageHours, fresh: false, reason: 'stale' };
  }
  return { ...base, ageHours, fresh: true, reason: 'fresh' };
}

/**
 * Устарел ли набор с точки зрения посетителя.
 *
 * Тот же расчёт, что и в воротах: иначе на обычном выходном ЕЦБ сборка
 * проходила бы, а на странице висело бы предупреждение об устаревании.
 */
export function currencySetIsStale(
  sources: Record<string, { date: string; fallback?: boolean }>,
  now = new Date(),
): boolean {
  return Object.entries(sources).some(([id, meta]) =>
    !assessProviderFreshness({ id, ...meta }, now).fresh);
}

/**
 * Сводная оценка набора источников.
 *
 * Отсутствие одного основного провайдера само по себе провалом НЕ считается:
 * если его валюты добраны из резерва, набор полон и пригоден. Провал — это
 * устаревшие или неразборчивые данные, откуда бы они ни пришли.
 */
export function assessProvidersFreshness(
  sources: Record<string, { date: string; fallback?: boolean }>,
  now = new Date(),
): ProvidersFreshnessAssessment {
  const providers = Object.entries(sources)
    .map(([id, meta]) => assessProviderFreshness({ id, ...meta }, now))
    .sort((a, b) => a.id.localeCompare(b.id));
  const stale = providers.filter((entry) => !entry.fresh);
  return {
    fresh: providers.length > 0 && stale.length === 0,
    providers,
    stale,
    fallbackProviders: providers.filter((entry) => entry.fallback).map((entry) => entry.id),
  };
}
