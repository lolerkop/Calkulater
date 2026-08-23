import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Предельная скорость падения — та, при которой сопротивление воздуха
// уравновешивает вес и разгон прекращается.
//
// Коэффициент сопротивления и площадь задаёт пользователь: они зависят от позы
// и формы тела, и подставлять их «по умолчанию из таблицы» значило бы выдавать
// чужое допущение за расчёт. Умолчания подобраны под падение человека
// животом вниз и подписаны в тексте.
//
// Время и путь до 95 процентов предельной скорости печатаются потому, что сама
// предельная скорость достигается лишь асимптотически: вопрос «когда уже» имеет
// смысл только через долю.
const G = 9.80665;
const KMH = 3.6;
const NEAR = 0.95;

export const compute: CalcFunction = (inputs) => {
  const mass = toNumber(inputs.m);
  const area = toNumber(inputs.a);
  const drag = toNumber(inputs.cd);
  const density = toNumber(inputs.rho);
  const fail = (message: string) => ({
    primary: { label: 'Предельная скорость', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(mass > 0)) return fail('Масса должна быть больше нуля');
  if (!(area > 0)) return fail('Площадь должна быть больше нуля');
  if (!(drag > 0)) return fail('Коэффициент сопротивления должен быть больше нуля');
  if (!(density > 0)) return fail('Плотность воздуха должна быть больше нуля');

  const speed = Math.sqrt((2 * mass * G) / (density * area * drag));
  const atanh = Math.atanh(NEAR);

  return {
    primary: { label: 'Предельная скорость', value: `${formatMeasure(speed, fmtNumber)} м/с` },
    secondary: [
      { label: 'В километрах в час', value: `${formatMeasure(speed * KMH, fmtNumber)} км/ч` },
      { label: 'Сила сопротивления при этой скорости', value: `${formatMeasure(mass * G, fmtNumber)} Н` },
      { label: 'Время разгона до 95 процентов', value: `${formatMeasure((speed / G) * atanh, fmtNumber)} с` },
      {
        label: 'Путь до 95 процентов',
        value: `${formatMeasure(((speed * speed) / G) * Math.log(Math.cosh(atanh)), fmtNumber)} м`,
      },
    ],
  };
};
