import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';

// Велосипедная передача: отношение зубьев и развитие метража.
//
// Отношение безразмерно и одинаково для любого велосипеда, а развитие
// переводит его в метры и потому зависит от колеса. Сравнивать передачи между
// велосипедами имеет смысл именно по развитию — строка появляется, когда длина
// окружности задана.
export const compute: CalcFunction = (inputs) => {
  const chainring = toNumber(inputs.chainring);
  const sprocket = toNumber(inputs.sprocket);
  const circumference = toNumber(inputs.wheelCircumference);
  const fail = (message: string) => ({
    primary: { label: 'Передаточное отношение', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  if (!Number.isInteger(chainring) || !Number.isInteger(sprocket)) return fail('Число зубьев должно быть целым');
  if (!(chainring > 0)) return fail('Зубьев на передней звезде должно быть больше нуля');
  if (!(sprocket > 0)) return fail('Зубьев на задней звезде должно быть больше нуля');

  const ratio = chainring / sprocket;
  const secondary = [{ label: 'Оборотов колеса на оборот педалей', value: fmtNumber(ratio, 2) }];
  if (circumference > 0) {
    secondary.push({ label: 'Развитие за оборот', value: `${fmtNumber(ratio * circumference, 2)} м` });
  }

  return { primary: { label: 'Передаточное отношение', value: fmtNumber(ratio, 2) }, secondary };
};
