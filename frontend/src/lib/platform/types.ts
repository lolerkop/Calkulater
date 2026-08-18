// Ядро Calculator Platform V2.
//
// Задача слоя — сменить архитектуру регистрации, а не контракт вычислений.
// Проверенный UI (остров, поля, результат, share, гидратация) остаётся прежним,
// поэтому V2-определение обязано отдавать ровно тот же `CalculatorDef` и ту же
// `CalcFunction`, которые downstream уже умеет обрабатывать. Всё, что здесь
// добавлено сверх V1, — это владение: калькулятор держит свои данные у себя,
// а не рассыпает их по девяти общим файлам.
//
// Сознательно НЕ реализовано в Phase 1 (нет ни одного потребителя):
// графики, динамические датасеты, версии налоговых лет, движок списков,
// формульный DSL, обобщённые интерфейсы семейств, SEO-пресеты.
// Абстрагировать их сейчас означало бы придумать повторение вместо того,
// чтобы его подтвердить.

import type { Locale } from '../clientI18n';
import type { CalcFunction, CalculatorDef, Field } from '../types';

/**
 * Статус публикации. Публичным (маршрут, каталог, поиск, sitemap) становится
 * только `released` — planned/implemented живут в исходниках, но страниц не
 * создают, поэтому будущие волны можно готовить, не выпуская полуфабрикаты.
 */
export type CalculatorLifecycle = 'planned' | 'implemented' | 'released' | 'deprecated';

export const CALCULATOR_LIFECYCLES: readonly CalculatorLifecycle[] = [
  'planned',
  'implemented',
  'released',
  'deprecated',
] as const;

/**
 * Полный копирайт локали. Структурно совпадает с внутренним `CalcCopy` из
 * `i18n.ts`: оба — выборка одних и тех же полей `CalculatorDef`, поэтому
 * присваивание в обе стороны проверяется компилятором.
 */
export type CalculatorCopy = Pick<
  CalculatorDef,
  | 'name'
  | 'slug'
  | 'shortDescription'
  | 'longDescription'
  | 'seoTitle'
  | 'seoDescription'
  | 'h1'
  | 'keywords'
  | 'howToUse'
  | 'howItWorks'
  | 'example'
  | 'faq'
  | 'disclaimer'
> &
  Pick<CalculatorDef, 'resultTitle'>;

/**
 * Сокращённый копирайт: для украинской локали общий слой сам достраивает
 * longDescription, howToUse, howItWorks, example и faq, поэтому калькулятор
 * владеет только тем, что действительно уникально.
 */
export type CalculatorSeoCopy = Pick<
  CalculatorDef,
  'name' | 'slug' | 'shortDescription' | 'seoTitle' | 'seoDescription' | 'h1' | 'keywords' | 'disclaimer'
>;

/** Значения формы в том же виде, в каком их держит остров. */
export type CalculatorFormValues = Record<string, string | number | boolean>;

/**
 * Валидация, принадлежащая калькулятору.
 *
 * В V1 такие проверки жили ветками `if (calculatorId === '...')` внутри общего
 * `validation.ts` — ровно тот паттерн, который V2 обязан убрать. Разбор чисел
 * передаётся снаружи, чтобы правила локали оставались едиными и калькулятору
 * не приходилось знать про форматы.
 */
export type CalculatorValidator = (context: {
  values: CalculatorFormValues;
  locale: Locale;
  fields: Field[];
  parseNumber: (text: string) => number | null;
}) => Record<string, string>;

/**
 * Эталонный случай: одновременно тест и документация формулы.
 * Ожидаемые значения выводятся из формулы вручную и никогда — прогоном самой
 * функции, иначе тест перестаёт быть проверкой и становится отражением.
 */
export type CalculatorReferenceCase = {
  readonly name: string;
  readonly inputs: CalculatorFormValues;
  readonly expectPrimary: string;
  readonly expectSecondary?: readonly { readonly label: string; readonly value: string }[];
};

/**
 * Подмена подписи поля в зависимости от текущих значений формы.
 *
 * Нужна там, где одно и то же поле в разных режимах значит разное: в процентах
 * «Значение A» — это то часть, то начальное значение. В V1 такая логика жила
 * веткой по id внутри острова; теперь остров вызывает функцию обобщённо.
 */
export type CalculatorContextualField = (
  field: Field,
  values: CalculatorFormValues,
  locale: Locale,
) => Field;

/**
 * Опубликованный пример: набор входов и строки, которые обязаны появиться
 * в результате. Служит проверкой того, что калькулятор действительно считает
 * то, что обещает страница.
 *
 * Хранится одним экземпляром на калькулятор: раннер возвращает результат
 * независимо от локали, поэтому ожидаемые строки одинаковы для всех локалей,
 * а различается только публичный адрес. Разворачивание по локалям — работа
 * платформы, а не автора калькулятора.
 */
export type CalculatorPublishedExample = {
  readonly inputs: CalculatorFormValues;
  readonly expected: readonly string[];
};

export type CalculatorDefinitionV2 = {
  readonly id: string;
  /** Версия формы определения, а не контента: меняется при смене контракта. */
  readonly definitionVersion: number;
  readonly lifecycle: CalculatorLifecycle;
  /** Русское базовое определение в существующем контракте. */
  readonly presentation: CalculatorDef;
  readonly compute: CalcFunction;
  readonly validate?: CalculatorValidator;
  readonly contextualField?: CalculatorContextualField;
  readonly copy?: {
    readonly en?: CalculatorCopy;
    readonly uk?: CalculatorSeoCopy;
  };
  readonly referenceCases?: readonly CalculatorReferenceCase[];
  readonly publishedExample?: CalculatorPublishedExample;
  /**
   * Идентификатор калькулятора, сразу после которого этот должен стоять
   * в каталоге. Нужен мигрированным калькуляторам: сетка категории выводит
   * карточки в порядке массива, и без якоря перенос в собственную директорию
   * переставил бы карточки местами. Новым калькуляторам якорь не нужен —
   * без него калькулятор встаёт в конец.
   */
  readonly catalogAnchor?: string;
};

/**
 * Вставляет калькуляторы V2 в каталог, уважая объявленные якоря.
 * Порядок легаси-списка не меняется, поэтому миграция калькулятора не двигает
 * карточки остальных.
 */
export function mergeIntoCatalog(
  legacy: readonly CalculatorDef[],
  additions: readonly { presentation: CalculatorDef; catalogAnchor?: string }[],
): CalculatorDef[] {
  const merged = [...legacy];
  const pending: CalculatorDef[] = [];
  for (const addition of additions) {
    const anchor = addition.catalogAnchor;
    const at = anchor ? merged.findIndex((item) => item.id === anchor) : -1;
    if (at >= 0) merged.splice(at + 1, 0, addition.presentation);
    else pending.push(addition.presentation);
  }
  return [...merged, ...pending];
}

/** Публичны только выпущенные калькуляторы. */
export function isPublished(definition: CalculatorDefinitionV2): boolean {
  return definition.lifecycle === 'released';
}
