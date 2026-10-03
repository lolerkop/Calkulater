import { number as toNumber, validOutput } from '../../lib/platform/scalarInputDisplay';
import type { CalcFunction } from '../../lib/types';
import { fmtInt, fmtNumber, preserveNonZero } from '../../lib/format';

// За сколько наполнится бассейн при заданном расходе воды.
//
// Форм ровно три: готовый объём, прямоугольная чаша и круглая. Это не движок
// геометрии, а тот же приём, что в расчёте объёма комнаты, — зашитые формулы
// для тех форм, которые встречаются на практике. Произвольная чаша сюда не
// поместится, и притворяться, что поместится, калькулятор не будет.
const PER_MINUTE: Record<string, number> = {
  lmin: 1,
  lhour: 1 / 60,
  m3hour: 1000 / 60,
};

const asDuration = (minutes: number) => {
  const total = Math.round(minutes);
  const hours = Math.floor(total / 60);
  const rest = total % 60;
  return `${fmtInt(hours)} ч ${rest} мин`;
};

export const compute: CalcFunction = (inputs) => {
  const mode = inputs.mode === undefined ? 'volume' : inputs.mode;
  const flowUnit = inputs.flowUnit === undefined ? 'lmin' : inputs.flowUnit;
  const rawFlow = toNumber(inputs.flow);

  const fail = (message: string) => ({
    primary: { label: 'Время наполнения', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (mode !== 'volume' && mode !== 'rect' && mode !== 'round') return fail('Выберите корректную форму чаши');
  if (flowUnit !== 'lmin' && flowUnit !== 'lhour' && flowUnit !== 'm3hour') return fail('Выберите корректную единицу расхода');
  if (rawFlow === null) return fail('Введите корректные числовые данные');
  const flow = rawFlow * PER_MINUTE[flowUnit];

  let volume: number;
  if (mode === 'rect') {
    const length = toNumber(inputs.length);
    const width = toNumber(inputs.width);
    const depth = toNumber(inputs.depth);
    if (length === null || width === null || depth === null) return fail('Введите корректные числовые данные');
    if (!(length > 0) || !(width > 0) || !(depth > 0)) return fail('Размеры чаши должны быть больше нуля');
    volume = length * width * depth;
  } else if (mode === 'round') {
    const diameter = toNumber(inputs.diameter);
    const depth = toNumber(inputs.depth);
    if (diameter === null || depth === null) return fail('Введите корректные числовые данные');
    if (!(diameter > 0) || !(depth > 0)) return fail('Диаметр и глубина должны быть больше нуля');
    volume = Math.PI * (diameter / 2) ** 2 * depth;
  } else {
    const givenVolume = toNumber(inputs.volume);
    if (givenVolume === null) return fail('Введите корректные числовые данные');
    volume = givenVolume;
    if (!(volume > 0)) return fail('Объём должен быть больше нуля');
  }

  if (!(flow > 0)) return fail('Расход воды должен быть больше нуля');

  const litres = volume * 1000;
  const minutes = litres / flow;

  const roundedMinutes = Math.round(minutes);
  if (![volume, litres, minutes, minutes / 60, flow, flow * 60 / 1000].every(v => validOutput(v, true)) || !Number.isSafeInteger(roundedMinutes)) return fail('Результат вне допустимого диапазона');

  return {
    primary: { label: 'Время наполнения', value: `${fmtNumber(preserveNonZero(minutes / 60, 2), 2)} ч` },
    secondary: [
      { label: 'Часы и минуты', value: asDuration(minutes) },
      { label: 'Всего минут', value: fmtNumber(preserveNonZero(minutes, 2), 2) },
      { label: 'Объём чаши', value: `${fmtNumber(preserveNonZero(volume, 2), 2)} м³` },
      { label: 'Объём в литрах', value: fmtNumber(preserveNonZero(litres, 0), 0) },
      { label: 'Расход', value: `${fmtNumber(preserveNonZero(flow * 60 / 1000, 2), 2)} м³/ч` },
    ],
  };
};
