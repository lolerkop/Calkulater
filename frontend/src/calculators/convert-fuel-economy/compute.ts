import type { CalcFunction } from '../../lib/types';
import { fmtNumber, parseLocalizedNumber } from '../../lib/format';
import { formatQuantity } from '../../lib/platform/measurement';

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
// Расход связан с экономичностью обратно; единицы самой экономичности
// пропорциональны. Прямое отношение коэффициентов между ними не теряет
// конечный ответ из-за промежуточного деления или переполнения value*MILE.
// Все четыре показываемые величины должны оставаться представимыми числами.
//
// Совпадение единиц возвращает значение как есть — не ради скорости, а чтобы
// 6,5 не превратилось в 6,499999999999999 после двух делений.

const GALLON_US = 3.785411784; // литров
const GALLON_UK = 4.54609; // литров
const MILE = 1.609344; // километров

type Unit = 'l100km' | 'kml' | 'mpgus' | 'mpguk';
const TARGET_LABEL: Record<Unit, string> = {
  l100km: 'В л/100 км', kml: 'В км/л', mpgus: 'В mpg США', mpguk: 'В mpg Великобритании',
};
const EFFICIENCY: Record<Exclude<Unit, 'l100km'>, number> = {
  kml: 1, mpgus: MILE / GALLON_US, mpguk: MILE / GALLON_UK,
};

const convertFuel = (from: Unit, to: Unit, value: number): number => {
  if (from === to) return value;
  if (from === 'l100km') return (100 / value) / EFFICIENCY[to as Exclude<Unit, 'l100km'>];
  if (to === 'l100km') return (100 / EFFICIENCY[from]) / value;
  return value * (EFFICIENCY[from] / EFFICIENCY[to]);
};

export const compute: CalcFunction = (inputs) => {
  const value = typeof inputs.value === 'number' ? inputs.value
    : typeof inputs.value === 'string' && inputs.value.trim() ? parseLocalizedNumber(inputs.value) : null;
  const from = inputs.fromUnit === undefined ? 'l100km' : inputs.fromUnit;
  const to = inputs.toUnit === undefined ? 'mpgus' : inputs.toUnit;
  const fail = (message: string) => ({
    primary: { label: 'Результат', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  const validUnit = (unit: unknown): unit is Unit =>
    unit === 'l100km' || unit === 'kml' || unit === 'mpgus' || unit === 'mpguk';
  if (!validUnit(from) || !validUnit(to)) return fail('Неизвестная единица расхода топлива');
  if (value === null || !Number.isFinite(value) || value <= 0) return fail('Расход должен быть больше нуля');

  const converted = Object.fromEntries((['l100km', 'kml', 'mpgus', 'mpguk'] as const)
    .map(unit => [unit, convertFuel(from, unit, value)])) as Record<Unit, number>;
  if (Object.values(converted).some(result => !Number.isFinite(result) || result <= 0)) {
    return fail('Результат вне допустимого диапазона');
  }
  const dim = (unit: Unit) => formatQuantity(converted[unit], fmtNumber);

  return {
    primary: { label: TARGET_LABEL[to], value: dim(to) },
    secondary: [
      { label: 'В л/100 км', value: dim('l100km') },
      { label: 'В км/л', value: dim('kml') },
      { label: 'В mpg США', value: dim('mpgus') },
      { label: 'В mpg Великобритании', value: dim('mpguk') },
    ],
  };
};
