import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
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

const size = (value: number) => formatMeasure(value, fmtNumber);

export const compute: CalcFunction = (inputs) => {
  const mbps = toNumber(inputs.mbps);
  const hoursPerDay = toNumber(inputs.hoursPerDay);
  const days = toNumber(inputs.days);
  const quotaGb = toNumber(inputs.quotaGb);

  const fail = (message: string) => ({
    primary: { label: 'Трафик за период', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(mbps > 0)) return fail('Скорость потока должна быть больше нуля');
  if (!(hoursPerDay > 0)) return fail('Число часов в день должно быть больше нуля');
  if (!(days > 0)) return fail('Число дней должно быть больше нуля');
  if (quotaGb < 0) return fail('Лимит не может быть отрицательным');

  const perHour = (mbps / 8) * 3600 / 1000;
  const perDay = perHour * hoursPerDay;
  const total = perDay * days;
  const excess = total - quotaGb;

  return {
    primary: { label: 'Трафик за период', value: `${size(total)} ГБ` },
    secondary: [
      { label: 'В день', value: `${size(perDay)} ГБ` },
      { label: 'В час', value: `${size(perHour)} ГБ` },
      ...(quotaGb > 0
        ? [
            { label: 'Хватит дней при лимите', value: size(quotaGb / perDay) },
            ...(excess > 0
              ? [{ label: 'Превышение лимита', value: `${size(excess)} ГБ`, accent: 'red' as const }]
              : [{ label: 'Остаток лимита', value: `${size(-excess)} ГБ`, accent: 'green' as const }]),
          ]
        : []),
    ],
  };
};
