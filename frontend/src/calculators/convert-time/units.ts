// Единицы времени. База — секунда.
//
// Месяц и год сознательно не включены: их длительность неоднозначна — месяц
// длится от 28 до 31 суток, год бывает високосным. Молчаливый выбор «30 суток»
// или «365 дней» дал бы правдоподобный, но неверный ответ, и пользователь не
// узнал бы, какое допущение за него сделали. Разность двух дат считает
// отдельный калькулятор, который работает с календарём, а не с множителем.

import type { ConversionUnits } from '../../lib/platform/conversion';

export type TimeUnit = 'ms' | 's' | 'min' | 'h' | 'd' | 'wk';

export const timeUnits: ConversionUnits<TimeUnit> = {
  ms: { symbol: 'мс', factor: 0.001 },
  s: { symbol: 'с', factor: 1 },
  min: { symbol: 'мин', factor: 60 },
  h: { symbol: 'ч', factor: 3600 },
  d: { symbol: 'сут', factor: 86400 },
  wk: { symbol: 'нед', factor: 604800 },
};

export const timeNames: Record<TimeUnit, string> = { ms: 'Миллисекунда', s: 'Секунда', min: 'Минута', h: 'Час', d: 'Сутки', wk: 'Неделя' };
