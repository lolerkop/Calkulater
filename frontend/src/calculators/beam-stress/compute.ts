import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure, formatQuantity } from '../../lib/platform/measurement';

// Напряжение изгиба в балке: σ = M / W.
//
// Момент сопротивления сечения W решает всё: у прямоугольника это b·h²/6, и
// высота входит в КВАДРАТЕ — доска на ребро держит втрое больше, чем та же
// доска плашмя. У круга W = π·d³/32.
//
// Отличие от растяжения: там напряжение равномерно по сечению и считается как
// сила на площадь. При изгибе напряжение распределено линейно от нейтральной
// оси, максимум на крайнем волокне, и площадь сечения сама по себе ответа не
// даёт — нужна его ФОРМА.
//
// Допущение названо прямо: балка работает в упругой области и изгибается в
// одной плоскости. Устойчивость, кручение и срез сюда не входят.
const NM_TO_NMM = 1e3;

export const compute: CalcFunction = (inputs) => {
  const moment = toNumber(inputs.moment);
  const section = toStr(inputs.section, 'rect');
  const b = toNumber(inputs.b);
  const h = toNumber(inputs.h);
  const d = toNumber(inputs.d);
  const fail = (message: string) => ({
    primary: { label: 'Напряжение изгиба', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(moment > 0)) return fail('Изгибающий момент должен быть больше нуля');
  let modulus: number;
  if (section === 'circle') {
    if (!(d > 0)) return fail('Диаметр должен быть больше нуля');
    modulus = (Math.PI * d ** 3) / 32;
  } else {
    if (!(b > 0)) return fail('Ширина сечения должна быть больше нуля');
    if (!(h > 0)) return fail('Высота сечения должна быть больше нуля');
    modulus = (b * h * h) / 6;
  }

  const stress = (moment * NM_TO_NMM) / modulus;
  return {
    primary: { label: 'Напряжение изгиба', value: `${formatMeasure(stress, fmtNumber)} МПа` },
    secondary: [
      { label: 'Момент сопротивления', value: `${formatQuantity(modulus, fmtNumber)} мм³` },
      { label: 'Изгибающий момент', value: `${formatMeasure(moment, fmtNumber)} Н·м` },
      { label: 'Сечение', value: section === 'circle' ? 'круг' : 'прямоугольник' },
      // Предел текучести материала здесь НЕ зашивается: он зависит от марки
      // стали или породы дерева, а редактируемого поля в замороженном наборе
      // нет. Сравнивать напряжение с допускаемым — шаг за пределами расчёта,
      // и об этом сказано в тексте страницы.
      { label: 'Определяющий размер сечения', value: `${formatMeasure(section === 'circle' ? d : h, fmtNumber)} мм` },
    ],
  };
};
