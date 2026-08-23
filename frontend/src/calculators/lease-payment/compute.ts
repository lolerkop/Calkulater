import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Платёж по лизингу: амортизационная часть плюс процентная.
//
// От кредита лизинг отличается остаточной стоимостью: выкупается не весь
// предмет, а разница между ценой и остатком. Поэтому амортизационная часть
// считается от этой разницы, а процентная — от СУММЫ профинансированного и
// остатка: деньги лизингодателя заняты всей стоимостью, а не только погашаемой
// частью. Отсюда и деление годовой ставки на 2400, а не на 1200.
//
// Остаток не может быть выше профинансированной суммы: тогда выкупать было бы
// нечего, а амортизационная часть вышла бы отрицательной.
const MONTHS_RATE_DIVISOR = 2400;

export const compute: CalcFunction = (inputs) => {
  const price = toNumber(inputs.price);
  const down = toNumber(inputs.down);
  const residualPct = toNumber(inputs.residualPct);
  const months = toNumber(inputs.months);
  const rate = toNumber(inputs.rate);
  const fail = (message: string) => ({
    primary: { label: 'Ежемесячный платёж', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(price > 0)) return fail('Стоимость предмета лизинга должна быть больше нуля');
  if (!(down >= 0)) return fail('Аванс не может быть отрицательным');
  if (down >= price) return fail('Аванс не может быть больше стоимости или равен ей');
  if (!(residualPct >= 0) || !(residualPct <= 100)) return fail('Остаточная доля задаётся от 0 до 100 процентов');
  if (!(months >= 1) || !Number.isInteger(months)) return fail('Срок — целое число месяцев, не меньше одного');
  if (!(rate >= 0)) return fail('Удорожание не может быть отрицательным');

  const residual = (price * residualPct) / 100;
  const financed = price - down;
  if (financed <= residual) return fail('Остаточная стоимость не может быть выше профинансированной суммы');

  const depreciation = (financed - residual) / months;
  const charge = ((financed + residual) * rate) / MONTHS_RATE_DIVISOR;
  const payment = depreciation + charge;

  return {
    primary: { label: 'Ежемесячный платёж', value: `${formatMeasure(payment, fmtNumber)} ₽` },
    secondary: [
      { label: 'Амортизационная часть', value: `${formatMeasure(depreciation, fmtNumber)} ₽` },
      { label: 'Процентная часть', value: `${formatMeasure(charge, fmtNumber)} ₽` },
      { label: 'Остаточная стоимость', value: `${formatMeasure(residual, fmtNumber)} ₽` },
      { label: 'Всего выплат с авансом', value: `${formatMeasure(payment * months + down, fmtNumber)} ₽` },
    ],
  };
};
