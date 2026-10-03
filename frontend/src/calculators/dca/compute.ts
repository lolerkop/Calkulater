import { number, validOutput, integer } from '../../lib/platform/scalarInputDisplay';
import { displayMoney } from '../../lib/platform/financeDisplay';
import type { CalcFunction, CalcResultTable } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Усреднение цены при регулярных покупках.
//
// На одну и ту же сумму по низкой цене покупается больше единиц, чем по
// высокой, поэтому средняя цена покупки оказывается НЕ ВЫШЕ среднего значения
// цены за период. Это не эффект стратегии, а свойство среднего гармонического,
// и именно оно здесь и считается: вложено ÷ купленные единицы.
//
// Рост цены — редактируемое допущение, а не прогноз. Итоговая стоимость
// считается по цене последней покупки: будущей цены калькулятор не знает и
// выдавать её за известную не должен.

const PREVIEW = 12;
const MAX_MONTHS = 12000;
// Постоянная строка: с подставленным числом её нельзя перевести по словарю.
const PREVIEW_NOTE = 'Показаны первые 12 месяцев расчёта.';

export const compute: CalcFunction = (inputs) => {
  const monthly = number(inputs.monthly);
  const months = integer(inputs.months);
  const growthPct = number(inputs.priceGrowthPct);
  const growth = growthPct === null ? NaN : growthPct / 100;
  const startPrice = number(inputs.startPrice);
  const fail = (message: string) => ({
    primary: { label: 'Итоговая стоимость', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (monthly === null || startPrice === null || months === null || growthPct === null) return fail('Введите корректные значения');
  if (!(monthly > 0)) return fail('Взнос должен быть больше нуля');
  if (!(months >= 1)) return fail('Число месяцев должно быть не меньше единицы');
  if (!Number.isInteger(months)) return fail('Число месяцев должно быть целым');
  if (months > MAX_MONTHS) return fail('Число месяцев не может превышать 12000');
  if (!(startPrice > 0)) return fail('Начальная цена должна быть больше нуля');
  if (months > 1 && growthPct !== 0 && 1 + growth === 1) return fail('Результат выходит за числовые пределы расчёта');
  if (1 + growth <= 0) return fail('Падение цены не может достигать ста процентов');

  const money = displayMoney;
  const rows: string[][] = [];
  let units = 0;
  let price = startPrice;
  for (let month = 1; month <= months; month += 1) {
    const bought = monthly / price;
    if (![price, bought, units + bought].every(value => validOutput(value, true))) return fail('Результат выходит за числовые пределы расчёта');
    units += bought;
    if (month <= PREVIEW) {
      rows.push([
        fmtNumber(month, 0),
        formatMeasure(price, fmtNumber),
        formatMeasure(bought, fmtNumber),
        formatMeasure(units, fmtNumber),
      ]);
    }
    if (month < months) {
      const nextPrice = price * (1 + growth);
      if (growthPct !== 0 && nextPrice === price) return fail('Результат выходит за числовые пределы расчёта');
      price = nextPrice;
    }
  }

  const invested = monthly * months;
  const value = units * price;
  if (![invested, value, invested / units].every(value => validOutput(value, true)) || !validOutput(value - invested)) return fail('Результат выходит за числовые пределы расчёта');

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
