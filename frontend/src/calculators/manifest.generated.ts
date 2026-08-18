// СГЕНЕРИРОВАНО. Не редактировать руками.
// Источник: директории src/calculators/*/definition.ts
// Перегенерировать: npm run calculators:generate
// Проверить актуальность: npm run calculators:verify

import type { CalculatorDef } from '../lib/types';
import type {
  CalculatorCopy,
  CalculatorDefinitionV2,
  CalculatorPublishedExample,
  CalculatorSeoCopy,
} from '../lib/platform/types';
import { isPublished } from '../lib/platform/types';

import { definition as def_budget_50_30_20 } from './budget-50-30-20/definition';
import { definition as def_cagr } from './cagr/definition';
import { definition as def_calories_from_macros } from './calories-from-macros/definition';
import { definition as def_commission } from './commission/definition';
import { definition as def_convert_angle } from './convert-angle/definition';
import { definition as def_convert_area } from './convert-area/definition';
import { definition as def_convert_digital } from './convert-digital/definition';
import { definition as def_convert_energy } from './convert-energy/definition';
import { definition as def_convert_length } from './convert-length/definition';
import { definition as def_convert_mass } from './convert-mass/definition';
import { definition as def_convert_power } from './convert-power/definition';
import { definition as def_convert_pressure } from './convert-pressure/definition';
import { definition as def_convert_speed } from './convert-speed/definition';
import { definition as def_convert_temperature } from './convert-temperature/definition';
import { definition as def_convert_time } from './convert-time/definition';
import { definition as def_convert_volume } from './convert-volume/definition';
import { definition as def_paint_calculator } from './paint-calculator/definition';
import { definition as def_percent_calculator } from './percent-calculator/definition';
import { definition as def_room_volume } from './room-volume/definition';
import { definition as def_savings_rate } from './savings-rate/definition';
import { definition as def_time_duration } from './time-duration/definition';
import { definition as def_week_number } from './week-number/definition';

export const v2Definitions: readonly CalculatorDefinitionV2[] = [
  def_budget_50_30_20,
  def_cagr,
  def_calories_from_macros,
  def_commission,
  def_convert_angle,
  def_convert_area,
  def_convert_digital,
  def_convert_energy,
  def_convert_length,
  def_convert_mass,
  def_convert_power,
  def_convert_pressure,
  def_convert_speed,
  def_convert_temperature,
  def_convert_time,
  def_convert_volume,
  def_paint_calculator,
  def_percent_calculator,
  def_room_volume,
  def_savings_rate,
  def_time_duration,
  def_week_number,
];

const published = v2Definitions.filter(isPublished);

/** Определения в контракте, который downstream уже умеет обрабатывать. */
export const v2Calculators: CalculatorDef[] = published.map((d) => d.presentation);

/** Порядок вставки в каталог: см. `mergeIntoCatalog`. */
export const v2CatalogAdditions = published.map((d) => ({
  presentation: d.presentation,
  catalogAnchor: d.catalogAnchor,
}));

export const v2EnCopy: Record<string, CalculatorCopy> = Object.fromEntries(
  published.filter((d) => d.copy?.en).map((d) => [d.id, d.copy!.en!]),
);

export const v2UkCopy: Record<string, CalculatorSeoCopy> = Object.fromEntries(
  published.filter((d) => d.copy?.uk).map((d) => [d.id, d.copy!.uk!]),
);

/**
 * Калькулятор доступен во всех локалях сборки, если владеет копирайтом для них.
 * Прежде это решал центральный список идентификаторов — из-за него добавление
 * калькулятора требовало правки общего файла.
 */
export const v2FullParityIds: readonly string[] = published
  .filter((d) => d.copy?.en && d.copy?.uk)
  .map((d) => d.id);

export const v2PublishedExamples: readonly { id: string; example: CalculatorPublishedExample }[] =
  published.filter((d) => d.publishedExample).map((d) => ({ id: d.id, example: d.publishedExample! }));
