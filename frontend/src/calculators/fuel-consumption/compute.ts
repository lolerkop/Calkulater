import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';

// Расход топлива по фактической заправке и пробегу.
//
// Это не конвертер единиц: вход здесь — литры и километры, то есть то, что
// посетитель реально замерил. Обратная величина «километры на литр» выводится
// справочной строкой, потому что её часто спрашивают, но двусторонним
// переводом с милями на галлон калькулятор не занимается — такой перевод
// требует обратного преобразования и отдельной архитектуры, и он отложен.
export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'measure');
  const litres = toNumber(inputs.litres);
  const distance = toNumber(inputs.distance);
  const consumption = toNumber(inputs.consumption);

  const fail = (message: string) => ({
    primary: { label: 'Расход', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (mode === 'need') {
    if (!(distance > 0)) return fail('Пробег должен быть больше нуля');
    if (!(consumption > 0)) return fail('Расход должен быть больше нуля');
    const needed = (distance / 100) * consumption;
    return {
      primary: { label: 'Нужно топлива', value: `${fmtNumber(needed, 2)} л` },
      secondary: [
        { label: 'Расход', value: `${fmtNumber(consumption, 2)} л/100 км` },
        { label: 'Пробег', value: `${fmtNumber(distance, 0)} км` },
        { label: 'Километров на литр', value: `${fmtNumber(100 / consumption, 2)} км/л` },
      ],
    };
  }

  if (!(litres > 0)) return fail('Количество литров должно быть больше нуля');
  if (!(distance > 0)) return fail('Пробег должен быть больше нуля');

  const perHundred = (litres / distance) * 100;
  const kmPerLitre = distance / litres;

  return {
    primary: {
      label: 'Расход',
      value: mode === 'kml' ? `${fmtNumber(kmPerLitre, 2)} км/л` : `${fmtNumber(perHundred, 2)} л/100 км`,
    },
    secondary: [
      { label: 'Литров на 100 км', value: `${fmtNumber(perHundred, 2)} л/100 км` },
      { label: 'Километров на литр', value: `${fmtNumber(kmPerLitre, 2)} км/л` },
      { label: 'Расход на 1000 км', value: `${fmtNumber(perHundred * 10, 2)} л` },
    ],
  };
};
