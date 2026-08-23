import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Автоколебательный режим NE555.
//
// Конденсатор заряжается через ОБА резистора, а разряжается только через
// второй — отсюда несимметрия: время высокого уровня всегда больше времени
// низкого, и скважность классической схемы не опускается ниже пятидесяти
// процентов. Это не ограничение расчёта, а свойство схемы, и знать его важнее,
// чем саму частоту.
//
// Сопротивления вводятся в килоомах, ёмкость в нанофарадах: именно так их
// маркируют, и переводить в омы и фарады руками — лишний источник нулей.
const LN2 = Math.LN2;
const KOHM = 1000;
const NF = 1e-9;
const MS = 1000;

export const compute: CalcFunction = (inputs) => {
  const r1 = toNumber(inputs.r1);
  const r2 = toNumber(inputs.r2);
  const capacitance = toNumber(inputs.c);
  const fail = (message: string) => ({
    primary: { label: 'Частота', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(r1 > 0) || !(r2 > 0)) return fail('Сопротивление должно быть больше нуля');
  if (!(capacitance > 0)) return fail('Ёмкость должна быть больше нуля');

  const c = capacitance * NF;
  const high = LN2 * (r1 * KOHM + r2 * KOHM) * c;
  const low = LN2 * r2 * KOHM * c;
  const period = high + low;

  return {
    primary: { label: 'Частота', value: `${formatMeasure(1 / period, fmtNumber)} Гц` },
    secondary: [
      { label: 'Период', value: `${formatMeasure(period * MS, fmtNumber)} мс` },
      { label: 'Время высокого уровня', value: `${formatMeasure(high * MS, fmtNumber)} мс` },
      { label: 'Время низкого уровня', value: `${formatMeasure(low * MS, fmtNumber)} мс` },
      { label: 'Скважность', value: `${formatMeasure((high / period) * 100, fmtNumber)} %` },
    ],
  };
};
