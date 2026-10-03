import type { CalcFunction, CalcResultRow } from '../types';
import { fmtInt, fmtMoney, fmtNumber, fmtPct } from '../format';
import { number, optionalInteger } from '../platform/scalarInputDisplay';
import { ceilUnits } from '../rounding';

// Точка безубыточности — объём продаж, при котором маржинальная прибыль
// покрывает постоянные затраты. Маржинальная прибыль с единицы это цена минус
// переменные затраты на единицу: именно она, а не вся выручка, идёт на покрытие
// постоянных затрат. Отсюда объём = постоянные затраты / маржинальная прибыль.
//
// Товар продаётся целыми единицами, поэтому расчётный объём округляется вверх.
// Округление идёт через ceilUnits: 10 000 / 200 математически равно 50, но в
// double произведение десятичных дробей может дать 50 плюс несколько ULP, и
// обычный Math.ceil выдал бы 51 — лишнюю единицу на пустом месте.
export function contributionMargin(price: number, variableCost: number): number {
  return price - variableCost;
}

const invalid = (message: string) => ({
  primary: { label: 'Точка безубыточности', value: '—' },
  secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
});

export const calcBreakEven: CalcFunction = (inputs) => {
  const fixedCosts = number(inputs.fixedCosts);
  const price = number(inputs.unitPrice);
  const variableCost = number(inputs.variableCost);
  const plannedUnits = optionalInteger(inputs.plannedUnits);

  if (fixedCosts === null || fixedCosts < 0) {
    return invalid('Постоянные затраты не могут быть отрицательными');
  }
  if (price === null || price <= 0) {
    return invalid('Цена продажи должна быть больше нуля');
  }
  if (variableCost === null || variableCost < 0) {
    return invalid('Переменные затраты не могут быть отрицательными');
  }

  if (plannedUnits === null || plannedUnits < 0) return invalid('Плановый объём должен быть целым неотрицательным числом');
  const margin = contributionMargin(price, variableCost);
  if (!Number.isFinite(plannedUnits * margin)) return invalid('Результат выходит за числовые пределы расчёта');
  if (fixedCosts === 0 && margin <= 0) return {
    primary: { label: 'Точка безубыточности', value: '0 шт.' },
    secondary: [
      { label: 'Маржинальная прибыль с единицы', value: fmtMoney(margin), accent: margin < 0 ? 'red' : undefined },
      ...(plannedUnits > 0 ? [{ label: 'Прибыль при плане', value: fmtMoney(plannedUnits * margin), accent: margin < 0 ? 'red' as const : undefined }] : []),
    ],
    note: margin === 0 ? 'Постоянные затраты и маржинальная прибыль равны нулю: в этой модели прибыль равна нулю при любом объёме.' : 'При нулевых постоянных затратах нулевые продажи дают нулевую прибыль; любой положительный объём продаж убыточен.',
  };
  // При неположительной маржинальной прибыли каждая проданная единица не
  // приближает к покрытию постоянных затрат, а удаляет от него, поэтому точки
  // безубыточности не существует ни при каком объёме продаж.
  if (margin <= 0) {
    return {
      primary: { label: 'Точка безубыточности', value: '—' },
      secondary: [
        { label: 'Маржинальная прибыль с единицы', value: fmtMoney(margin), accent: 'red' },
        { label: 'Цена продажи', value: fmtMoney(price) },
        { label: 'Переменные затраты на единицу', value: fmtMoney(variableCost) },
      ],
      note: 'Переменные затраты не ниже цены продажи, поэтому маржинальная прибыль не положительна. При таких условиях увеличение продаж не приводит к безубыточности: сначала нужно поднять цену или снизить переменные затраты.',
    };
  }

  const marginRatio = margin / price;
  const exactUnits = fixedCosts / margin;
  const units = ceilUnits(exactUnits);

  // Две разные величины, поэтому и названы по-разному. Первая отвечает на
  // вопрос «какая выручка покрывает затраты» и опирается на дробный объём,
  // вторая — «сколько вы получите, продав целое число единиц».
  const revenueAtExactVolume = fixedCosts / marginRatio;
  const revenueAtWholeUnits = units * price;
  if ((fixedCosts > 0 && (units === 0 || revenueAtExactVolume === 0)) || !Number.isSafeInteger(units) || ![exactUnits, revenueAtExactVolume, revenueAtWholeUnits, plannedUnits * price, plannedUnits * margin].every(Number.isFinite)) return invalid('Результат выходит за числовые пределы расчёта');

  const secondary: CalcResultRow[] = [
    { label: 'Маржинальная прибыль с единицы', value: fmtMoney(margin), accent: 'green' },
    { label: 'Коэффициент маржинальной прибыли', value: fmtPct(marginRatio * 100, 2) },
    { label: 'Расчётный объём без округления', value: `${fmtNumber(exactUnits, 2)} шт.` },
    { label: 'Выручка при расчётном объёме', value: fmtMoney(revenueAtExactVolume) },
    { label: 'Выручка при целом числе единиц', value: fmtMoney(revenueAtWholeUnits) },
  ];

  if (plannedUnits > 0) {
    const plannedContribution = plannedUnits * margin;
    const plannedProfit = plannedContribution - fixedCosts;
    const safetyUnits = plannedUnits - units;
    const safetyPct = ((plannedUnits - exactUnits) / plannedUnits) * 100;

    secondary.push(
      { label: 'Выручка при плане продаж', value: fmtMoney(plannedUnits * price) },
      { label: 'Маржинальная прибыль при плане', value: fmtMoney(plannedContribution) },
      { label: 'Прибыль при плане', value: fmtMoney(plannedProfit), accent: plannedProfit >= 0 ? 'green' : 'red' },
      { label: 'Запас прочности', value: `${fmtInt(safetyUnits)} шт.`, accent: safetyUnits >= 0 ? 'green' : 'red' },
      { label: 'Запас прочности, %', value: fmtPct(safetyPct, 2), accent: safetyPct >= 0 ? 'green' : 'red' },
    );
  }

  return {
    primary: { label: 'Точка безубыточности', value: `${fmtInt(units)} шт.` },
    secondary,
    note: plannedUnits > 0 && plannedUnits < units
      ? 'Плановый объём меньше точки безубыточности, поэтому запас прочности отрицательный, а расчёт показывает убыток.'
      : undefined,
  };
};
