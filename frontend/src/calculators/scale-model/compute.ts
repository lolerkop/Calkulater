import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Масштаб модели: пересчёт между натурой и моделью при масштабе 1:N.
//
// Решается в три стороны, потому что вопрос приходит с трёх концов: каким
// выйдет размер модели, какой размер был у натуры и в каком масштабе сделана
// уже готовая пара размеров.
//
// Отличие от пропорции: та решает безымянное a : b = c : d по любому из
// четырёх членов, и посетителю нужно самому сообразить, куда поставить
// знаменатель. Здесь знаменатель масштаба — первоклассный вход в словаре
// моделиста (1:87, 1:43, 1:72), ответ несёт миллиметры, а найденный масштаб
// печатается записью «1:N», а не безымянным числом. Тот же приём, что у
// соотношения сторон экрана рядом с общим калькулятором отношений.
const MODE_LABEL: Record<string, string> = {
  toModel: 'Размер модели',
  toReal: 'Размер натуры',
  findScale: 'Масштаб',
};

export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'toModel');
  const real = toNumber(inputs.real);
  const model = toNumber(inputs.model);
  const scale = toNumber(inputs.scale);
  const label = MODE_LABEL[mode] ?? MODE_LABEL.toModel;
  const fail = (message: string) => ({
    primary: { label, value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  const mm = (value: number) => `${formatMeasure(value, fmtNumber)} мм`;

  let realSize: number;
  let modelSize: number;
  let denominator: number;
  if (mode === 'toReal') {
    if (!(scale > 0)) return fail('Знаменатель масштаба должен быть больше нуля');
    if (!(model > 0)) return fail('Размер модели должен быть больше нуля');
    denominator = scale;
    modelSize = model;
    realSize = model * scale;
  } else if (mode === 'findScale') {
    if (!(real > 0)) return fail('Размер натуры должен быть больше нуля');
    if (!(model > 0)) return fail('Размер модели должен быть больше нуля');
    realSize = real;
    modelSize = model;
    denominator = real / model;
  } else {
    if (!(scale > 0)) return fail('Знаменатель масштаба должен быть больше нуля');
    if (!(real > 0)) return fail('Размер натуры должен быть больше нуля');
    denominator = scale;
    realSize = real;
    modelSize = real / scale;
  }

  const primary =
    mode === 'findScale'
      ? `1:${formatMeasure(denominator, fmtNumber)}`
      : mm(mode === 'toReal' ? realSize : modelSize);

  return {
    primary: { label, value: primary },
    secondary: [
      { label: 'Масштаб', value: `1:${formatMeasure(denominator, fmtNumber)}` },
      { label: 'Размер натуры', value: mm(realSize) },
      { label: 'Размер модели', value: mm(modelSize) },
      { label: 'Натура больше модели во столько раз', value: formatMeasure(realSize / modelSize, fmtNumber) },
    ],
  };
};
