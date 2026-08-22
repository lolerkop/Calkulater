import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Цветовой код резистора, четыре полосы (IEC 60062).
//
//   R = (b₁ · 10 + b₂) · 10^m         номинал
//   Rmin = R · (1 − допуск/100)       границы поля допуска
//   Rmax = R · (1 + допуск/100)
//
// Отличие от соединения резисторов: та страница складывает уже известные
// номиналы в цепь, здесь номинал ЧИТАЕТСЯ с корпуса. Вход — не число, а набор
// цветов, и ответ страницы — не только величина, но и поле допуска, в которое
// настоящий резистор попадает.
//
// Номинал не округляется: произведение целого на степень десяти точно, а на
// серебристом множителе (10⁻²) результат законно дробный — 0,1 Ом.
const DIGIT = ['чёрный', 'коричневый', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'синий', 'фиолетовый', 'серый', 'белый'];
const MULTIPLIER: Record<number, string> = { [-2]: 'серебристый', [-1]: 'золотистый' };
const TOLERANCE: Record<number, string> = { 1: 'коричневый', 2: 'красный', 5: 'золотистый', 10: 'серебристый' };

// Ом, килоом или мегаом — по величине самого номинала. Показ, не значение.
const asResistance = (ohms: number): string => {
  const [scaled, unit] = Math.abs(ohms) >= 1e6
    ? [ohms / 1e6, 'МОм']
    : Math.abs(ohms) >= 1e3
      ? [ohms / 1e3, 'кОм']
      : [ohms, 'Ом'];
  return `${formatMeasure(scaled, fmtNumber)} ${unit}`;
};

const bandName = (code: number): string => MULTIPLIER[code] ?? DIGIT[code] ?? '—';

export const compute: CalcFunction = (inputs) => {
  const b1 = toNumber(inputs.b1);
  const b2 = toNumber(inputs.b2);
  const mult = toNumber(inputs.mult);
  const tol = toNumber(inputs.tol);
  const fail = (message: string) => ({
    primary: { label: 'Номинал', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(b1 >= 0) || b1 > 9) return fail('Первая полоса — цифра от 0 до 9');
  if (!(b2 >= 0) || b2 > 9) return fail('Вторая полоса — цифра от 0 до 9');
  if (!(mult >= -2) || mult > 7) return fail('Множитель — от серебристого до фиолетового');
  if (!(tol > 0) || tol > 100) return fail('Допуск должен быть от 0 до 100 %');

  const ohms = (b1 * 10 + b2) * 10 ** mult;
  const min = ohms * (1 - tol / 100);
  const max = ohms * (1 + tol / 100);
  const bands = `${bandName(b1)} · ${bandName(b2)} · ${bandName(mult)} · ${TOLERANCE[tol] ?? '—'}`;

  return {
    primary: { label: 'Номинал', value: asResistance(ohms) },
    secondary: [
      { label: 'Допуск', value: `±${formatMeasure(tol, fmtNumber)} %` },
      { label: 'Наименьшее допустимое', value: asResistance(min) },
      { label: 'Наибольшее допустимое', value: asResistance(max) },
      { label: 'Ширина поля допуска', value: asResistance(max - min) },
      { label: 'Множитель', value: `×${formatMeasure(10 ** mult, fmtNumber)}` },
      { label: 'Полосы', value: bands },
    ],
  };
};
