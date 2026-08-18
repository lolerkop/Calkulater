// Клиентский рантайм калькулятора: ровно то, что исполняется в браузере.
//
// Разделение вызвано измерением, а не вкусом: при десяти калькуляторах V2
// остров содержал все десять реализаций, и посетитель одной страницы скачивал
// девять чужих. Состав контракта выведен из того, что реально нужно текущим
// десяти, — ничего впрок.
//
// Рантайм приходит обычной зависимостью модуля через точку входа калькулятора,
// а не подгружается после монтирования. Поэтому остров не может оказаться
// гидратированным без своего расчёта, и второй гонки — «ввод после гидратации,
// но до прихода рантайма» — не возникает вовсе.

import type { CalcFunction } from '../types';
import type {
  CalculatorContextualField,
  CalculatorLocaleBundle,
  CalculatorValidator,
  TranslatedLocale,
} from './types';

export type CalculatorClientRuntime = {
  readonly compute: CalcFunction;
  readonly validate?: CalculatorValidator;
  readonly contextualField?: CalculatorContextualField;
  /** Локализация только этого калькулятора; общие строки остаются в clientI18n. */
  readonly localization?: Readonly<Partial<Record<TranslatedLocale, CalculatorLocaleBundle>>>;
};

/**
 * Чтение локализации текущего калькулятора. Идентификатор не нужен: рантайм
 * принадлежит ровно одному калькулятору по построению.
 */
export function runtimeLocale(
  runtime: CalculatorClientRuntime | undefined,
  locale: string,
  bucket: keyof CalculatorLocaleBundle,
  key: string,
): string | undefined {
  if (!runtime?.localization) return undefined;
  if (locale !== 'en' && locale !== 'uk') return undefined;
  return runtime.localization[locale]?.[bucket]?.[key];
}
