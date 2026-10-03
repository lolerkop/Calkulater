import type { CalcFunction } from '../../lib/types';
import { fmtNumber, parseLocalizedNumber } from '../../lib/format';
import { formatQuantity } from '../../lib/platform/measurement';

// Учебное приближение: a(H+) ≈ [H+] / (1 mol/L), pKw = 14 при 25 °C.
//
// Сумма 14 — принятый pKw воды ПРИ 25 °C, а не всеобщий закон:
// при другой температуре она другая. Оговорка стоит в тексте страницы, чтобы
// число не выглядело универсальным.
//
// Логарифм требует строго положительной концентрации: нуля в области
// определения нет, и подставлять его нельзя.

const PKW_25C = 14;
const qty = (value: number): string => formatQuantity(value, fmtNumber);
const number = (value: unknown): number | null => typeof value === 'number' || typeof value === 'string' ? parseLocalizedNumber(value) : null;

export const compute: CalcFunction = (inputs) => {
  const mode = inputs.mode === undefined ? 'fromH' : inputs.mode;
  const fail = (label: string, message: string) => ({
    primary: { label, value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  const medium = (ph: number) => (ph < 7 ? 'кислая' : ph > 7 ? 'щелочная' : 'нейтральная');
  if (mode !== 'fromH' && mode !== 'fromPh') return fail('pH', 'Неизвестный режим расчёта');

  if (mode === 'fromPh') {
    const ph = number(inputs.ph);
    if (ph === null) return fail('Концентрация H⁺', 'Введите конечное число');
    if (!(ph >= 0 && ph <= PKW_25C)) return fail('Концентрация H⁺', 'pH должен лежать в диапазоне от 0 до 14');
    return {
      primary: { label: 'Концентрация H⁺', value: `${qty(10 ** -ph)} моль/л` },
      secondary: [
        { label: 'pH', value: fmtNumber(Math.max(0, ph), 2) },
        { label: 'pOH', value: fmtNumber(PKW_25C - ph, 2) },
        { label: 'Среда', value: medium(ph) },
      ],
    };
  }

  const h = number(inputs.h);
  if (h === null) return fail('pH', 'Введите конечное число');
  if (!(h > 0)) return fail('pH', 'Концентрация должна быть больше нуля');
  const ph = Math.max(0, -Math.log10(h));
  if (h > 1) return fail('pH', 'Полученный pH выходит за диапазон от 0 до 14');
  if (!(ph >= 0 && ph <= PKW_25C)) return fail('pH', 'Полученный pH выходит за диапазон от 0 до 14');
  return {
    primary: { label: 'pH', value: fmtNumber(ph, 2) },
    secondary: [
      { label: 'pOH', value: fmtNumber(PKW_25C - ph, 2) },
      { label: 'Концентрация H⁺', value: `${qty(h)} моль/л` },
      { label: 'Среда', value: medium(ph) },
    ],
  };
};
