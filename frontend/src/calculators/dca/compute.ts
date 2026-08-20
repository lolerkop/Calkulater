import type { CalcFunction, CalcResultTable } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Усреднение цены при регулярных покупках.
//
// На одну и ту же сумму по низкой цене покупается больше единиц, чем по
// высокой, поэтому средняя цена покупки оказывается НИЖЕ среднего значения
// цены за период. Это не эффект стратегии, а свойство среднего гармонического,
// и именно оно здесь и считается: вложено ÷ купленные единицы.
//
// Рост цены — редактируемое допущение, а не прогноз. Итоговая стоимость
// считается по цене последней покупки: будущей цены калькулятор не знает и
// выдавать её за известную не должен.

const PREVIEW = 12;
// Постоянная строка: с подставленным числом её нельзя перевести по словарю.
const PREVIEW_NOTE = 'Показаны первые 12 месяцев расчёта.';

export const compute: CalcFunction = (inputs) => {
  const monthly = toNumber(inputs.monthly);
  const months = toNumber(inputs.months);
  const growth = toNumber(inputs.priceGrowthPct) / 100;
  const startPrice = toNumber(inputs.startPrice);
  const fail = (message: string) => ({
    primary: { label: 'Итоговая стоимость', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(monthly > 0)) return fail('Взнос должен быть больше нуля');
  if (!(months >= 1)) return fail('Число месяцев должно быть не меньше единицы');
  if (!Number.isInteger(months)) return fail('Число месяцев должно быть целым');
  if (!(startPrice > 0)) return fail('Начальная цена должна быть больше нуля');
  if (1 + growth <= 0) return fail('Падение цены не может достигать ста процентов');

  const money = (value: number) => `${fmtNumber(value, 2)} ₽`;
  const rows: string[][] = [];
  let units = 0;
  let price = startPrice;
  for (let month = 1; month <= months; month += 1) {
    const bought = monthly / price;
    units += bought;
    if (month <= PREVIEW) {
      rows.push([
        fmtNumber(month, 0),
        formatMeasure(price, fmtNumber),
        formatMeasure(bought, fmtNumber),
        formatMeasure(units, fmtNumber),
      ]);
    }
    if (month < months) price *= 1 + growth;
  }

  const invested = monthly * months;
  const value = units * price;

  const table: CalcResultTable = {
    title: 'По месяцам',
    columns: ['Месяц', 'Цена', 'Куплено', 'Накоплено'],
    rows,
    note: months > PREVIEW ? PREVIEW_NOTE : undefined,
  };

  return {
    primary: { label: 'Итоговая стоимость', value: money(value) },
    secondary: [
      { label: 'Вложено всего', value: money(invested) },
      { label: 'Куплено единиц', value: formatMeasure(units, fmtNumber) },
      { label: 'Средняя цена', value: money(invested / units) },
      { label: 'Результат', value: money(value - invested), accent: value >= invested ? 'green' : 'red' },
      { label: 'Цена последней покупки', value: money(price) },
    ],
    table,
  };
};
