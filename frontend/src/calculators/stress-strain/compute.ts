import type { CalcFunction, CalcResultRow } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Напряжение, деформация и модуль Юнга:
//
//   σ = F/A     (Н на мм² = МПа — совпадение единиц, а не переводной множитель)
//   ε = Δl/l    (безразмерная величина)
//   E = σ/ε     (в тех же МПа, что и напряжение)
//
// Три режима отвечают на три разных вопроса: какое напряжение даёт нагрузка,
// какой модуль у материала по замеренному удлинению и насколько вытянется
// образец из материала с известным модулем.
//
// Область применимости названа прямо: закон Гука для материалов линеен только
// до предела текучести. За ним деформация перестаёт быть упругой, образец не
// возвращается к исходной длине, и модуль, посчитанный по такому замеру, не
// описывает ничего. Расчёт этого предела не знает — он у каждого материала свой.
//
// Отличие от закона Гука для пружины: там жёсткость k — свойство КОНКРЕТНОЙ
// пружины, зависящее от её геометрии. Здесь модуль E — свойство МАТЕРИАЛА,
// одинаковое для любого образца из него.
const MODE_LABEL: Record<string, string> = {
  stress: 'Напряжение',
  modulus: 'Модуль Юнга',
  elongation: 'Удлинение',
};
const MODE_UNIT: Record<string, string> = { stress: 'МПа', modulus: 'МПа', elongation: 'мм' };

export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'stress');
  const force = toNumber(inputs.force);
  const area = toNumber(inputs.area);
  const length = toNumber(inputs.length);
  const delta = toNumber(inputs.delta);
  const e = toNumber(inputs.e);
  const label = MODE_LABEL[mode] ?? MODE_LABEL.stress;
  const fail = (message: string) => ({
    primary: { label, value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  const m = (value: number, unit: string) => `${formatMeasure(value, fmtNumber)} ${unit}`;

  if (!(area > 0)) return fail('Площадь сечения должна быть больше нуля');
  const stress = force / area;

  let value: number;
  let strain: number | null;
  let modulus: number | null;
  let elongation: number | null;
  if (mode === 'modulus') {
    if (!(length > 0)) return fail('Исходная длина должна быть больше нуля');
    if (delta === 0) return fail('Удлинение не может быть нулевым: делить на него нечего');
    strain = delta / length;
    value = stress / strain;
    modulus = value;
    elongation = delta;
  } else if (mode === 'elongation') {
    if (!(length > 0)) return fail('Исходная длина должна быть больше нуля');
    if (!(e > 0)) return fail('Модуль Юнга должен быть больше нуля');
    strain = stress / e;
    value = strain * length;
    modulus = e;
    elongation = value;
  } else {
    value = stress;
    // Напряжение не требует ни длины, ни удлинения: за него отвечает только
    // сечение. Строки о деформации появляются, лишь когда замер действительно
    // сделан, — пустая пара «0 и 0» дала бы деление нуля на ноль.
    strain = length > 0 && delta !== 0 ? delta / length : null;
    modulus = strain !== null ? stress / strain : null;
    elongation = strain !== null ? delta : null;
  }

  const secondary: CalcResultRow[] = [{ label: 'Напряжение', value: m(stress, 'МПа') }];
  if (strain !== null) secondary.push({ label: 'Относительная деформация', value: formatMeasure(strain, fmtNumber) });
  if (modulus !== null) secondary.push({ label: 'Модуль Юнга', value: m(modulus, 'МПа') });
  if (elongation !== null) secondary.push({ label: 'Удлинение', value: m(elongation, 'мм') });
  secondary.push({ label: 'Площадь сечения', value: m(area, 'мм²') });

  return { primary: { label, value: m(value, MODE_UNIT[mode] ?? 'МПа') }, secondary };
};
