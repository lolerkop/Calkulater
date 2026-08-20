import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Перевод расхода топлива.
//
// Общий движок конвертеров сюда не подходит и не должен: он описывает единицу
// парой «множитель и смещение», а расход топлива связан ОБРАТНО — чем больше
// литров на сто километров, тем меньше миль на галлон. Линейной парой это не
// выражается, и сам движок прямо оставил такой случай за скобками до появления
// настоящего потребителя. Потребитель ровно один, поэтому логика живёт здесь,
// рядом с калькулятором, а не в общем движке: расширять ядро ради единственного
// вызова — цена без покупателя.
//
// Все переводы идут через л/100 км. Попарной таблицы нет намеренно: у четырёх
// единиц она стоила бы шестнадцати записей, каждая из которых могла бы разойтись
// с остальными.
//
// Совпадение единиц возвращает значение как есть — не ради скорости, а чтобы
// 6,5 не превратилось в 6,499999999999999 после двух делений.

const GALLON_US = 3.785411784; // литров
const GALLON_UK = 4.54609; // литров
const MILE = 1.609344; // километров

type Unit = 'l100km' | 'kml' | 'mpgus' | 'mpguk';
const GALLON: Partial<Record<Unit, number>> = { mpgus: GALLON_US, mpguk: GALLON_UK };

/** Перевод в л/100 км и обратно — преобразование одно и то же в обе стороны. */
const asLitres = (unit: Unit, value: number): number => {
  if (unit === 'l100km') return value;
  if (unit === 'kml') return 100 / value;
  return (100 * GALLON[unit]!) / (value * MILE);
};

export const compute: CalcFunction = (inputs) => {
  const value = toNumber(inputs.value);
  const from = toStr(inputs.fromUnit, 'l100km') as Unit;
  const to = toStr(inputs.toUnit, 'mpgus') as Unit;
  const fail = (message: string) => ({
    primary: { label: 'Результат', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  if (!(value > 0)) return fail('Расход должен быть больше нуля');

  const litres = asLitres(from, value);
  if (!Number.isFinite(litres) || litres <= 0) return fail('Расход должен быть больше нуля');
  const out = (unit: Unit) => (unit === from ? value : asLitres(unit, litres));
  const dim = (unit: Unit) => formatMeasure(out(unit), fmtNumber);

  return {
    primary: { label: 'Результат', value: dim(to) },
    secondary: [
      { label: 'В л/100 км', value: dim('l100km') },
      { label: 'В км/л', value: dim('kml') },
      { label: 'В mpg США', value: dim('mpgus') },
      { label: 'В mpg Великобритании', value: dim('mpguk') },
    ],
  };
};
