import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';

export const compute: CalcFunction = (inputs) => {
  const read = (value: unknown) => typeof value === 'number' || typeof value === 'string' && value.trim() !== '' ? toNumber(value, Number.NaN) : Number.NaN;
  const chainring = read(inputs.chainring), sprocket = read(inputs.sprocket);
  const rawCircumference = inputs.wheelCircumference;
  const circumference = rawCircumference === undefined || rawCircumference === '' ? 0 : read(rawCircumference);
  const fail = (message: string) => ({ primary: { label: 'Передаточное отношение', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (!Number.isSafeInteger(chainring) || !Number.isSafeInteger(sprocket)) return fail('Число зубьев должно быть целым');
  if (chainring <= 0) return fail('Зубьев на передней звезде должно быть больше нуля');
  if (sprocket <= 0) return fail('Зубьев на задней звезде должно быть больше нуля');
  if (!Number.isFinite(circumference) || circumference < 0) return fail('Окружность колеса должна быть конечным неотрицательным числом');
  const ratio = chainring / sprocket;
  const development = ratio * circumference;
  if (!Number.isFinite(development) || circumference > 0 && development <= 0) return fail('Результат выходит за числовой диапазон');
  const display = (x: number) => x > 0 && x < 0.005 ? x.toExponential(2) : fmtNumber(x, 2);
  const secondary = [{ label: 'Оборотов колеса на оборот педалей', value: display(ratio) }];
  if (circumference > 0) secondary.push({ label: 'Развитие за оборот', value: `${display(development)} м` });
  return { primary: { label: 'Передаточное отношение', value: display(ratio) }, secondary, note: 'Число оборотов колеса предполагает прямую цепную передачу без дополнительного внутреннего передаточного отношения.' };
};
