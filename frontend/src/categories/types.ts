// Контракт категории Taxonomy V2.
//
// Форма выведена из восьми существующих категорий, а не придумана впрок:
// ровно те поля, которые сегодня хранятся в шести общих файлах. Иерархии здесь
// нет намеренно — ни одна из восьми её не требует, а место под необязательного
// родителя всегда можно добавить, когда появится настоящий потребитель.

import type { FaqItem } from '../lib/types';

/** Копирайт категории на одной локали. Совпадает с тем, что отдаёт getCategoryById. */
export type CategoryCopy = {
  readonly name: string;
  readonly slug: string;
  readonly description: string;
  readonly longDescription: string;
  readonly seoTitle: string;
  readonly seoDescription: string;
  readonly h1: string;
};

export type CategoryCopyByLocale = Readonly<Record<string, CategoryCopy>>;
export type CategoryFaqByLocale = Readonly<Record<string, readonly FaqItem[]>>;

/**
 * Подсказки категории. Это три разных списка, а не три локали: сценарии
 * применения, чек-лист перед расчётом и типичные ошибки. Раньше они лежали в
 * трёх отдельных картах calculatorGuidance.ts, и различие в их природе там
 * было незаметно.
 */
export type CategoryGuidance = {
  readonly useCases: readonly string[];
  readonly checklist: readonly string[];
  readonly mistakes: readonly string[];
};

/** Оговорка об ограничениях расчёта. Ключ — локаль, для которой есть перевод. */
export type CategoryEditorial = Readonly<Record<string, string>>;

export type CategoryDefinition = {
  readonly id: string;
  /** Позиция в каталоге. Дубликаты ловит guard генератора. */
  readonly order: number;
  readonly icon: string;
  /** Слова, по которым категория находится поиском. */
  readonly searchAliases: string;
  readonly copy: CategoryCopyByLocale;
  readonly faq: CategoryFaqByLocale;
  readonly guidance: CategoryGuidance;
  readonly editorial: CategoryEditorial;
};
