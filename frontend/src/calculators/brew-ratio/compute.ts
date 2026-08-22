import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Заварка кофе по соотношению вода : кофе.
//
//   вода = кофе × k        кофе = вода / k        k = вода / кофе
//
// Соотношение записывается как 1:k и означает граммы кофе на миллилитры воды.
// Миллилитр воды принимается за грамм — при температуре заварки расхождение
// меньше трёх процентов и меньше погрешности бытовых весов.
//
// Отличие от пересчёта рецепта: там масштабируется ВЕСЬ список ингредиентов по
// числу порций, здесь решается одно уравнение с двумя величинами, и решать
// можно в любую сторону, включая поиск самого соотношения по уже сваренной чашке.
const MODE_LABEL: Record<string, string> = {
  coffee: 'Кофе',
  water: 'Вода',
  ratio: 'Соотношение',
};

export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'coffee');
  const water = toNumber(inputs.water);
  const coffee = toNumber(inputs.coffee);
  const ratio = toNumber(inputs.ratio);
  const label = MODE_LABEL[mode] ?? MODE_LABEL.coffee;
  const fail = (message: string) => ({
    primary: { label, value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  const m = (value: number) => formatMeasure(value, fmtNumber);

  if (!(ratio > 0) && mode !== 'ratio') return fail('Соотношение должно быть больше нуля');

  let outWater: number;
  let outCoffee: number;
  if (mode === 'water') {
    if (!(coffee > 0)) return fail('Масса кофе должна быть больше нуля');
    outCoffee = coffee;
    outWater = coffee * ratio;
  } else if (mode === 'ratio') {
    if (!(water > 0)) return fail('Объём воды должен быть больше нуля');
    if (!(coffee > 0)) return fail('Масса кофе должна быть больше нуля');
    outWater = water;
    outCoffee = coffee;
  } else {
    if (!(water > 0)) return fail('Объём воды должен быть больше нуля');
    outWater = water;
    outCoffee = water / ratio;
  }

  const solved = mode === 'ratio'
    ? `1:${m(outWater / outCoffee)}`
    : mode === 'water' ? `${m(outWater)} мл` : `${m(outCoffee)} г`;

  return {
    primary: { label, value: solved },
    secondary: [
      { label: 'Вода', value: `${m(outWater)} мл` },
      { label: 'Кофе', value: `${m(outCoffee)} г` },
      { label: 'Соотношение', value: `1:${m(outWater / outCoffee)}` },
      { label: 'Гуща заберёт воды', value: `${m(outCoffee * 2)} мл` },
    ],
  };
};
