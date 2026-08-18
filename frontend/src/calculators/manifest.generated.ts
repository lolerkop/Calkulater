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

import { definition as def_aov } from './aov/definition';
import { definition as def_budget_50_30_20 } from './budget-50-30-20/definition';
import { definition as def_cac } from './cac/definition';
import { definition as def_cagr } from './cagr/definition';
import { definition as def_calories_from_macros } from './calories-from-macros/definition';
import { definition as def_commission } from './commission/definition';
import { definition as def_contribution_margin } from './contribution-margin/definition';
import { definition as def_convert_angle } from './convert-angle/definition';
import { definition as def_convert_area } from './convert-area/definition';
import { definition as def_convert_cooking_volume } from './convert-cooking-volume/definition';
import { definition as def_convert_data_rate } from './convert-data-rate/definition';
import { definition as def_convert_density } from './convert-density/definition';
import { definition as def_convert_digital } from './convert-digital/definition';
import { definition as def_convert_energy } from './convert-energy/definition';
import { definition as def_convert_flow } from './convert-flow/definition';
import { definition as def_convert_force } from './convert-force/definition';
import { definition as def_convert_frequency } from './convert-frequency/definition';
import { definition as def_convert_illuminance } from './convert-illuminance/definition';
import { definition as def_convert_length } from './convert-length/definition';
import { definition as def_convert_mass } from './convert-mass/definition';
import { definition as def_convert_power } from './convert-power/definition';
import { definition as def_convert_pressure } from './convert-pressure/definition';
import { definition as def_convert_speed } from './convert-speed/definition';
import { definition as def_convert_temperature } from './convert-temperature/definition';
import { definition as def_convert_time } from './convert-time/definition';
import { definition as def_convert_torque } from './convert-torque/definition';
import { definition as def_convert_volume } from './convert-volume/definition';
import { definition as def_difference_abs_rel } from './difference-abs-rel/definition';
import { definition as def_dti } from './dti/definition';
import { definition as def_leap_year } from './leap-year/definition';
import { definition as def_logarithm } from './logarithm/definition';
import { definition as def_modulo } from './modulo/definition';
import { definition as def_paint_calculator } from './paint-calculator/definition';
import { definition as def_percent_calculator } from './percent-calculator/definition';
import { definition as def_prime_factorization } from './prime-factorization/definition';
import { definition as def_proportion } from './proportion/definition';
import { definition as def_quadratic_equation } from './quadratic-equation/definition';
import { definition as def_return_rate } from './return-rate/definition';
import { definition as def_roi } from './roi/definition';
import { definition as def_roman_numerals } from './roman-numerals/definition';
import { definition as def_room_volume } from './room-volume/definition';
import { definition as def_savings_rate } from './savings-rate/definition';
import { definition as def_simple_interest } from './simple-interest/definition';
import { definition as def_time_duration } from './time-duration/definition';
import { definition as def_week_number } from './week-number/definition';

export const v2Definitions: readonly CalculatorDefinitionV2[] = [
  def_aov,
  def_budget_50_30_20,
  def_cac,
  def_cagr,
  def_calories_from_macros,
  def_commission,
  def_contribution_margin,
  def_convert_angle,
  def_convert_area,
  def_convert_cooking_volume,
  def_convert_data_rate,
  def_convert_density,
  def_convert_digital,
  def_convert_energy,
  def_convert_flow,
  def_convert_force,
  def_convert_frequency,
  def_convert_illuminance,
  def_convert_length,
  def_convert_mass,
  def_convert_power,
  def_convert_pressure,
  def_convert_speed,
  def_convert_temperature,
  def_convert_time,
  def_convert_torque,
  def_convert_volume,
  def_difference_abs_rel,
  def_dti,
  def_leap_year,
  def_logarithm,
  def_modulo,
  def_paint_calculator,
  def_percent_calculator,
  def_prime_factorization,
  def_proportion,
  def_quadratic_equation,
  def_return_rate,
  def_roi,
  def_roman_numerals,
  def_room_volume,
  def_savings_rate,
  def_simple_interest,
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
