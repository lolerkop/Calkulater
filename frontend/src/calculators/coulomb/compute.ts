import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure, formatQuantity } from '../../lib/platform/measurement';

// Закон Кулона: F = k·q₁·q₂/r².
//
// Заряды знаковые, и знак здесь несёт смысл: произведение разных знаков даёт
// отрицательную силу — притяжение, одинаковых — положительную, отталкивание.
// Поэтому главный ответ печатается по модулю, а знак вынесен отдельной строкой
// словами: «−8,99·10⁻⁷ Н» читается хуже, чем «притяжение».
//
// Заряды в нанокулонах, расстояние в сантиметрах — так их задают в задачах и в
// лабораторных работах. Кулон и метр дали бы умножение на 10⁻⁹, которое поле
// ввода не принимает показательной записью (урок Phase 17).
const K = 8.9875517873681764e9;
const NANO = 1e-9;
const CM = 0.01;

export const compute: CalcFunction = (inputs) => {
  const q1 = toNumber(inputs.q1);
  const q2 = toNumber(inputs.q2);
  const r = toNumber(inputs.r);
  const fail = (message: string) => ({
    primary: { label: 'Сила взаимодействия', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(r > 0)) return fail('Расстояние должно быть больше нуля');
  if (q1 === 0) return fail('Первый заряд не может быть нулевым');
  if (q2 === 0) return fail('Второй заряд не может быть нулевым');

  const Q1 = q1 * NANO;
  const Q2 = q2 * NANO;
  const R = r * CM;
  const force = (K * Q1 * Q2) / (R * R);

  return {
    primary: { label: 'Сила взаимодействия', value: `${formatQuantity(Math.abs(force), fmtNumber)} Н` },
    secondary: [
      { label: 'Характер', value: force < 0 ? 'притяжение' : 'отталкивание' },
      { label: 'Напряжённость поля первого заряда', value: `${formatQuantity(Math.abs((K * Q1) / (R * R)), fmtNumber)} В/м` },
      { label: 'Потенциальная энергия', value: `${formatQuantity((K * Q1 * Q2) / R, fmtNumber)} Дж` },
      { label: 'Расстояние', value: `${formatMeasure(r, fmtNumber)} см` },
    ],
  };
};
