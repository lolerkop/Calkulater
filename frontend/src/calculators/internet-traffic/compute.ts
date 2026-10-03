import type { CalcFunction } from '../../lib/types';
import { fmtNumber as ordinaryNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Интернет-трафик за период.
//
// Считает не скорость канала и не время загрузки одного файла, а ОБЪЁМ, который
// набегает при постоянном потреблении: скорость потока умножается на время, а
// не делится на него. Восьмёрка в знаменателе — перевод битов в байты: канал
// меряют в мегабитах, а лимит оператора — в гигабайтах, и путаница между ними
// даёт ошибку ровно в восемь раз.
//
// Лимит необязателен: без него считается один только объём, с ним добавляется
// срок, на который лимита хватит, и превышение.

const size = (value: number) => (value !== 0 && Math.abs(value) < 1e-6 ? value.toExponential(3).replace('.', ',') : formatMeasure(value, fmtNumber));

import { read, INPUT, RANGE } from '../../lib/platform/measurementScalar';

import { exact, times, ratio as divide } from '../../lib/platform/geometryNumericInput';

const fmtNumber = (value: number, digits = 2): string => value !== 0 && Math.abs(value) < 0.5 * 10 ** -digits ? value.toExponential(3).replace('.', ',') : ordinaryNumber(value, digits);

export const compute: CalcFunction = (inputs) => {
  const mbps = read(inputs.mbps);
  const hoursPerDay = read(inputs.hoursPerDay);
  const days = read(inputs.days);
  const quotaGb = inputs.quotaGb === undefined ? 0 : read(inputs.quotaGb);

  const fail = (message: string) => ({
    primary: { label: 'Трафик за период', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (![mbps, hoursPerDay, days, quotaGb].every(Number.isFinite)) return fail(INPUT);
  if (hoursPerDay > 24) return fail('В сутках не больше 24 часов');
  if (!(mbps > 0)) return fail('Скорость потока должна быть больше нуля');
  if (!(hoursPerDay > 0)) return fail('Число часов в день должно быть больше нуля');
  if (!(days > 0)) return fail('Число дней должно быть больше нуля');
  if (quotaGb < 0) return fail('Лимит не может быть отрицательным');

  const hourly = times(exact(mbps), exact(3600));
  const perHour = divide(hourly, exact(8000));
  const daily = times(hourly, exact(hoursPerDay));
  const perDay = divide(daily, exact(8000));
  const total = divide(times(daily, exact(days)), exact(8000));
  const quotaDays = quotaGb > 0 ? divide(times(exact(quotaGb), exact(8000)), daily) : 0;
  if (![perHour, perDay, total].every(v => Number.isFinite(v) && v > 0) || (quotaGb > 0 && (!Number.isFinite(quotaDays) || quotaDays <= 0))) return fail(RANGE);
  const excess = total - quotaGb;

  return {
    primary: { label: 'Трафик за период', value: `${size(total)} ГБ` },
    secondary: [
      { label: 'В день', value: `${size(perDay)} ГБ` },
      { label: 'В час', value: `${size(perHour)} ГБ` },
      ...(quotaGb > 0
        ? [
            { label: 'Хватит дней при лимите', value: size(quotaDays) },
            ...(excess > 0
              ? [{ label: 'Превышение лимита', value: `${size(excess)} ГБ`, accent: 'red' as const }]
              : [{ label: 'Остаток лимита', value: `${size(-excess)} ГБ`, accent: 'green' as const }]),
          ]
        : []),
    ],
  };
};
