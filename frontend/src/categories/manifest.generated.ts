// СГЕНЕРИРОВАНО. Не редактировать руками.
// Категории обнаружены по директориям src/categories/*/definition.ts.
// Перегенерировать: npm run categories:generate

import type { CategoryDefinition } from './types';

import { definition as def_finance } from './finance/definition';
import { definition as def_currency } from './currency/definition';
import { definition as def_sport } from './sport/definition';
import { definition as def_building } from './building/definition';
import { definition as def_date_time } from './date-time/definition';
import { definition as def_math } from './math/definition';
import { definition as def_business } from './business/definition';
import { definition as def_converters } from './converters/definition';

/** Порядок задан полем order каждой категории, а не этим списком. */
export const categoryIds = ['finance', 'currency', 'sport', 'building', 'date-time', 'math', 'business', 'converters'] as const;

export type CategoryId = (typeof categoryIds)[number];

export const categoryDefinitions: readonly CategoryDefinition[] = [
  def_finance,
  def_currency,
  def_sport,
  def_building,
  def_date_time,
  def_math,
  def_business,
  def_converters,
];

export const categoryById: Readonly<Record<CategoryId, CategoryDefinition>> = {
  'finance': def_finance,
  'currency': def_currency,
  'sport': def_sport,
  'building': def_building,
  'date-time': def_date_time,
  'math': def_math,
  'business': def_business,
  'converters': def_converters,
} as const;
