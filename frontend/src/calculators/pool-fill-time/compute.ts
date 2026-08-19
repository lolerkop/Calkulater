import type { CalcFunction } from '../../lib/types';
import { fmtInt, fmtNumber, toNumber, toStr } from '../../lib/format';

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
  const hours = Math.floor(minutes / 60);
  const rest = Math.round(minutes % 60);
  return `${fmtInt(hours)} ч ${rest} мин`;
};

export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'volume');
  const flow = toNumber(inputs.flow) * (PER_MINUTE[toStr(inputs.flowUnit, 'lmin')] ?? 1);

  const fail = (message: string) => ({
    primary: { label: 'Время наполнения', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  let volume: number;
  if (mode === 'rect') {
    const length = toNumber(inputs.length);
    const width = toNumber(inputs.width);
    const depth = toNumber(inputs.depth);
    if (!(length > 0) || !(width > 0) || !(depth > 0)) return fail('Размеры чаши должны быть больше нуля');
    volume = length * width * depth;
  } else if (mode === 'round') {
    const diameter = toNumber(inputs.diameter);
    const depth = toNumber(inputs.depth);
    if (!(diameter > 0) || !(depth > 0)) return fail('Диаметр и глубина должны быть больше нуля');
    volume = Math.PI * (diameter / 2) ** 2 * depth;
  } else {
    volume = toNumber(inputs.volume);
    if (!(volume > 0)) return fail('Объём должен быть больше нуля');
  }

  if (!(flow > 0)) return fail('Расход воды должен быть больше нуля');

  const litres = volume * 1000;
  const minutes = litres / flow;

  return {
    primary: { label: 'Время наполнения', value: `${fmtNumber(minutes / 60, 2)} ч` },
    secondary: [
      { label: 'Часы и минуты', value: asDuration(minutes) },
      { label: 'Всего минут', value: fmtNumber(minutes, 2) },
      { label: 'Объём чаши', value: `${fmtNumber(volume, 2)} м³` },
      { label: 'Объём в литрах', value: fmtNumber(litres, 0) },
      { label: 'Расход', value: `${fmtNumber(flow * 60 / 1000, 2)} м³/ч` },
    ],
  };
};
