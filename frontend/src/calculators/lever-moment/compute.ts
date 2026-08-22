import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Рычаг в равновесии: F₁·d₁ = F₂·d₂, выигрыш в силе = d₁/d₂.
//
// Отличие от момента силы: та страница считает момент ОДНОЙ силы через её
// плечо и угол — величину, которой поворот описывается. Здесь считается
// РАВНОВЕСИЕ двух сил на двух плечах: какую силу надо приложить с другой
// стороны и во сколько раз рычаг её умножит. Разные вопросы к одной механике.
//
// Выигрыш в силе не бесплатен: во столько же раз длиннее путь, который
// проходит длинное плечо. Работа не создаётся рычагом, она только
// перераспределяется — и об этом сказано прямо, потому что ожидание «рычаг
// даёт силу из ничего» и есть самое частое заблуждение.
const MODE_LABEL: Record<string, string> = {
  force2: 'Сила на втором плече',
  distance2: 'Второе плечо',
};
const MODE_UNIT: Record<string, string> = { force2: 'Н', distance2: 'м' };

export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'force2');
  const f1 = toNumber(inputs.f1);
  const d1 = toNumber(inputs.d1);
  const d2 = toNumber(inputs.d2);
  const f2 = toNumber(inputs.f2);
  const label = MODE_LABEL[mode] ?? MODE_LABEL.force2;
  const fail = (message: string) => ({
    primary: { label, value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  const m = (value: number, unit: string) => `${formatMeasure(value, fmtNumber)} ${unit}`;

  if (!(d1 > 0)) return fail('Первое плечо должно быть больше нуля');
  let value: number;
  let arm2: number;
  if (mode === 'distance2') {
    if (!(f2 > 0)) return fail('Вторая сила должна быть больше нуля');
    value = (f1 * d1) / f2;
    arm2 = value;
  } else {
    if (!(d2 > 0)) return fail('Второе плечо должно быть больше нуля');
    value = (f1 * d1) / d2;
    arm2 = d2;
  }

  return {
    primary: { label, value: m(value, MODE_UNIT[mode] ?? 'Н') },
    secondary: [
      // Кратность без слова «раз»: 4 требует «раза», 5 — «раз», и склонять число
      // ради подписи незачем — метка уже говорит, что это выигрыш.
      { label: 'Выигрыш в силе', value: formatMeasure(d1 / arm2, fmtNumber) },
      { label: 'Момент первой силы', value: m(f1 * d1, 'Н·м') },
      { label: 'Первое плечо', value: m(d1, 'м') },
      { label: 'Второе плечо', value: m(arm2, 'м') },
    ],
  };
};
