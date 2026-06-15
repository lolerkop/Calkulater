import {
  generatedRatesDate,
} from '../src/data/currencyRates.generated';
import {
  generatedRatesUpdateMessage,
  generatedRatesUpdateStatus,
} from '../src/data/currencyRatesStatus.generated';
import {
  MAX_CURRENCY_RATE_AGE_HOURS,
  currencyRateAgeHours,
  currencyRatesAreStale,
} from '../src/lib/currencyFreshness';

const ageHours = currencyRateAgeHours(generatedRatesDate);
if (currencyRatesAreStale(generatedRatesDate)) {
  console.error(
    `Currency data is ${ageHours.toFixed(1)} hours old; maximum is ${MAX_CURRENCY_RATE_AGE_HOURS} hours.`,
  );
  process.exit(1);
}

if (generatedRatesUpdateStatus === 'failed') {
  console.warn(
    `Currency update failed (${generatedRatesUpdateMessage || 'unknown error'}); ` +
    `using ${generatedRatesDate} data, age ${ageHours.toFixed(1)} hours.`,
  );
} else {
  console.log(`Currency data verified: ${generatedRatesDate}, age ${ageHours.toFixed(1)} hours.`);
}
