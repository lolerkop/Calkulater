// Движок конвертеров: общая часть семейства.
//
// Построен от двенадцати реальных потребителей первой волны, а не от
// воображаемой универсальной системы величин. Из них выведена и форма модели:
//
//   значение_базы = значение × factor + offset
//   значение_единицы = (значение_базы − offset) / factor
//
// Множителя одного не хватает: температура — аффинная шкала, и °F требует
// и множителя 5/9, и смещения. Функций на каждую единицу, наоборот, слишком
// много: они не поддаются инспекции и сравнению, а все двенадцать конвертеров
// выражаются парой чисел. Поэтому единица — это данные, а не код.
//
// Обратных, логарифмических и кусочных преобразований здесь нет намеренно:
// ни один из двенадцати их не требует. Расход топлива (л/100 км ↔ mpg)
// обратный, и он отложен до волны, где такой потребитель появится по-настоящему.
//
// Хранится только приведение к базе. Попарной таблицы нет: для N единиц она
// стоила бы N² записей, каждая из которых могла бы разойтись с остальными.

import type { CalcFunction, CalcResult } from '../types';
import { fmtNumber, toNumber, toStr } from '../format';

export type ConversionUnit = {
  /** Стабильное обозначение: «kg», «м²», «°C». Не переводится. */
  readonly symbol: string;
  /** Множитель к базовой единице. */
  readonly factor: number;
  /** Смещение относительно базы; нужно только аффинным шкалам. */
  readonly offset?: number;
};

export type ConversionUnits<Id extends string> = Readonly<Record<Id, ConversionUnit>>;

export type ConversionSpec<Id extends string> = {
  readonly units: ConversionUnits<Id>;
  readonly defaultFrom: Id;
  readonly defaultTo: Id;
  readonly defaultValue: number;
  /**
   * Подпись строки результата — на русском, базовом языке. Подписи полей ввода
   * живут в определении калькулятора: движок их не читает, и дублировать их
   * здесь значило бы завести второй источник правды, который однажды разойдётся
   * с первым.
   */
  readonly resultLabel: string;
};

/** Приведение к базовой единице. */
export function toBase(unit: ConversionUnit, value: number): number {
  return value * unit.factor + (unit.offset ?? 0);
}

/** Обратное приведение из базовой единицы. */
export function fromBase(unit: ConversionUnit, base: number): number {
  return (base - (unit.offset ?? 0)) / unit.factor;
}

/**
 * Перевод между единицами одного конвертера.
 *
 * Совпадение единиц возвращает значение как есть. Это не оптимизация:
 * проход через базу и обратно у аффинных шкал даёт плавающий дрейф, и
 * 36,6 °C превратились бы в 36,599999999999994.
 */
export function convert<Id extends string>(
  units: ConversionUnits<Id>,
  value: number,
  from: Id,
  to: Id,
): number {
  if (from === to) return value;
  return fromBase(units[to], toBase(units[from], value));
}

/**
 * Отображение результата.
 *
 * Диапазон конвертеров — от 1,6e−19 (электронвольт) до 1e12 (терабайт),
 * то есть больше тридцати порядков. Фиксированное число знаков после запятой
 * либо потеряло бы малые значения целиком, либо завалило бы крупные нулями,
 * поэтому знаки выбираются по величине результата.
 */
export function formatConverted(value: number): string {
  if (!Number.isFinite(value)) return '—';
  if (value === 0) return '0';
  const magnitude = Math.abs(value);
  if (magnitude >= 1e15 || magnitude < 1e-6) {
    // Экспоненциальная запись с запятой: остальные числа на сайте тоже с запятой.
    return value.toExponential(6).replace('.', ',').replace('e', '·10^');
  }
  if (magnitude >= 1000) return fmtNumber(value, 2);
  if (magnitude >= 1) return fmtNumber(value, 4);
  if (magnitude >= 0.001) return fmtNumber(value, 6);
  return fmtNumber(value, 9);
}

/**
 * Сборка функции расчёта конвертера.
 *
 * Это и есть общая часть семейства: все двенадцать конвертеров получают
 * одинаковый разбор ввода, проверку области определения, перевод и
 * представление, а различаются только таблицей единиц.
 */
export function buildConverter<Id extends string>(spec: ConversionSpec<Id>): CalcFunction {
  const ids = Object.keys(spec.units) as Id[];
  const known = new Set<string>(ids);

  return (inputs): CalcResult => {
    const value = toNumber(inputs.value);
    const from = toStr(inputs.from, spec.defaultFrom) as Id;
    const to = toStr(inputs.to, spec.defaultTo) as Id;

    if (!known.has(from) || !known.has(to)) {
      return {
        primary: { label: spec.resultLabel, value: '—' },
        secondary: [{ label: 'Проверьте данные', value: 'Выберите единицы из списка', accent: 'red' }],
      };
    }
    if (!Number.isFinite(value)) {
      return {
        primary: { label: spec.resultLabel, value: '—' },
        secondary: [{ label: 'Проверьте данные', value: 'Введите конечное число', accent: 'red' }],
      };
    }

    const fromUnit = spec.units[from];
    const toUnit = spec.units[to];
    const converted = convert(spec.units, value, from, to);
    if (!Number.isFinite(converted)) {
      return {
        primary: { label: spec.resultLabel, value: '—' },
        secondary: [{ label: 'Проверьте данные', value: 'Результат вне допустимого диапазона', accent: 'red' }],
      };
    }

    // Соотношение единиц: показывает, во что превращается одна единица,
    // и потому сразу выдаёт неверный множитель, если он ошибочен.
    const perUnit = convert(spec.units, 1, from, to);

    return {
      primary: { label: spec.resultLabel, value: `${formatConverted(converted)} ${toUnit.symbol}` },
      secondary: [
        { label: 'Исходное значение', value: `${formatConverted(value)} ${fromUnit.symbol}` },
        { label: 'Соотношение', value: `1 ${fromUnit.symbol} = ${formatConverted(perUnit)} ${toUnit.symbol}` },
      ],
    };
  };
}

/** Варианты выбора для поля единицы: значение — идентификатор, подпись — обозначение. */
export function unitOptions<Id extends string>(
  units: ConversionUnits<Id>,
  names: Readonly<Record<Id, string>>,
): { value: string; label: string }[] {
  return (Object.keys(units) as Id[]).map((id) => ({
    value: id,
    label: `${names[id]} (${units[id].symbol})`,
  }));
}
