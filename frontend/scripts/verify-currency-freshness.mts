import {
  generatedRatesDate,
} from '../src/data/currencyRates.generated';
import {
  generatedRatesLastSuccessfulCheckAt,
  generatedRatesLastSuccessfulEffectiveDate,
  generatedRatesUpdateAttemptedAt,
  generatedRatesUpdateMessage,
  generatedRatesUpdateStatus,
} from '../src/data/currencyRatesStatus.generated';
import {
  MAX_CURRENCY_SOURCE_CHECK_AGE_HOURS,
  assessCurrencySourceFreshness,
} from '../src/lib/currencyFreshness';

const freshness = assessCurrencySourceFreshness({
  effectiveDate: generatedRatesDate,
  lastSuccessfulCheckAt: generatedRatesLastSuccessfulCheckAt,
  lastSuccessfulEffectiveDate: generatedRatesLastSuccessfulEffectiveDate,
});
const ageLabel = Number.isFinite(freshness.ageHours)
  ? freshness.ageHours.toFixed(1)
  : 'unknown';

if (!freshness.fresh) {
  console.error(
    `Currency freshness check failed (${freshness.reason}). ` +
    `Effective date: ${generatedRatesDate}; ` +
    `last successful source check: ${generatedRatesLastSuccessfulCheckAt || '(missing)'}; ` +
    `successfully checked effective date: ${generatedRatesLastSuccessfulEffectiveDate || '(missing)'}; ` +
    `hours since successful check: ${ageLabel}; ` +
    `maximum is ${MAX_CURRENCY_SOURCE_CHECK_AGE_HOURS} hours.`,
  );
  process.exit(1);
}

if (generatedRatesUpdateStatus === 'failed') {
  console.warn(
    `Currency update failed at ${generatedRatesUpdateAttemptedAt} ` +
    `(${generatedRatesUpdateMessage || 'unknown error'}). ` +
    `Effective date ${generatedRatesDate} was last successfully checked at ` +
    `${generatedRatesLastSuccessfulCheckAt}, ${ageLabel} hours ago.`,
  );
} else {
  console.log(
    `Currency data verified: effective date ${generatedRatesDate}; ` +
    `last successful source check ${generatedRatesLastSuccessfulCheckAt}; ` +
    `age ${ageLabel} hours.`,
  );
}
