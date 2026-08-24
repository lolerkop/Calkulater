import {
  generatedRateSources,
  generatedRatesDate,
} from '../src/data/currencyRates.generated';
import {
  generatedRatesDegradedProviders,
  generatedRatesLastSuccessfulCheckAt,
  generatedRatesLastSuccessfulEffectiveDate,
  generatedRatesUpdateAttemptedAt,
  generatedRatesUpdateMessage,
  generatedRatesUpdateStatus,
  generatedRatesUsedFallback,
} from '../src/data/currencyRatesStatus.generated';
import {
  MAX_CURRENCY_SOURCE_CHECK_AGE_HOURS,
  assessCurrencySourceFreshness,
  assessProvidersFreshness,
} from '../src/lib/currencyFreshness';

// Ворота свежести валютных данных.
//
// Проверяются две разные вещи, и обе обязательны:
//   1. когда мы В ПОСЛЕДНИЙ РАЗ успешно ходили к источникам;
//   2. насколько стары САМИ ДАННЫЕ каждого источника по отдельности.
//
// Недоступность одного основного провайдера провалом не считается: если его
// валюты добраны из резерва, набор полон и пригоден. Это записано намеренно —
// прежняя схема с единственным источником останавливала выпуск всего сайта.

const checkFreshness = assessCurrencySourceFreshness({
  effectiveDate: generatedRatesDate,
  lastSuccessfulCheckAt: generatedRatesLastSuccessfulCheckAt,
  lastSuccessfulEffectiveDate: generatedRatesLastSuccessfulEffectiveDate,
});
const ageLabel = Number.isFinite(checkFreshness.ageHours) ? checkFreshness.ageHours.toFixed(1) : 'unknown';

const problems: string[] = [];

if (!checkFreshness.fresh) {
  problems.push(
    `Последняя успешная проверка источников не подтверждена (${checkFreshness.reason}). ` +
    `Дата набора: ${generatedRatesDate}; успешная проверка: ${generatedRatesLastSuccessfulCheckAt || '(нет)'}; ` +
    `проверенная дата: ${generatedRatesLastSuccessfulEffectiveDate || '(нет)'}; ` +
    `часов с проверки: ${ageLabel}; предел ${MAX_CURRENCY_SOURCE_CHECK_AGE_HOURS}.`,
  );
}

const providers = assessProvidersFreshness(generatedRateSources);
if (providers.providers.length === 0) {
  problems.push('В сгенерированном наборе нет ни одного источника.');
}
for (const entry of providers.stale) {
  problems.push(
    `Источник ${entry.id}: данные от ${entry.date} не годятся (${entry.reason}, ` +
    `возраст ${Number.isFinite(entry.ageHours) ? entry.ageHours.toFixed(1) : 'unknown'} ч).`,
  );
}

if (problems.length > 0) {
  console.error('Проверка свежести валютных данных не пройдена:');
  for (const line of problems) console.error(`- ${line}`);
  process.exit(1);
}

const summary = providers.providers
  .map((entry) => `${entry.id} ${entry.date}${entry.fallback ? ' (резерв)' : ''} ${entry.ageHours.toFixed(1)} ч`)
  .join(', ');

if (generatedRatesUpdateStatus === 'failed') {
  console.warn(
    `Последнее обновление курсов не удалось в ${generatedRatesUpdateAttemptedAt} ` +
    `(${generatedRatesUpdateMessage || 'причина неизвестна'}). Используются сохранённые данные.`,
  );
}
if (generatedRatesDegradedProviders.length > 0) {
  console.warn(`Основные источники были недоступны: ${generatedRatesDegradedProviders.join(', ')}.`);
}
if (generatedRatesUsedFallback) {
  console.warn('Часть валют получена из резервного источника.');
}

console.log(
  `Валютные данные подтверждены: набор на ${generatedRatesDate}; ` +
  `последняя успешная проверка ${generatedRatesLastSuccessfulCheckAt} (${ageLabel} ч назад); ` +
  `источники — ${summary}.`,
);
