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

import { definition as def_ad_roi } from './ad-roi/definition';
import { definition as def_annuity } from './annuity/definition';
import { definition as def_aov } from './aov/definition';
import { definition as def_aspect_ratio } from './aspect-ratio/definition';
import { definition as def_battery_charge_time } from './battery-charge-time/definition';
import { definition as def_battery_runtime } from './battery-runtime/definition';
import { definition as def_bike_gear_ratio } from './bike-gear-ratio/definition';
import { definition as def_board_volume } from './board-volume/definition';
import { definition as def_budget_50_30_20 } from './budget-50-30-20/definition';
import { definition as def_cac } from './cac/definition';
import { definition as def_cagr } from './cagr/definition';
import { definition as def_calories_from_macros } from './calories-from-macros/definition';
import { definition as def_combinatorics } from './combinatorics/definition';
import { definition as def_commission } from './commission/definition';
import { definition as def_concrete } from './concrete/definition';
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
import { definition as def_cpm } from './cpm/definition';
import { definition as def_ctr } from './ctr/definition';
import { definition as def_day_of_week } from './day-of-week/definition';
import { definition as def_density } from './density/definition';
import { definition as def_difference_abs_rel } from './difference-abs-rel/definition';
import { definition as def_dilution } from './dilution/definition';
import { definition as def_dividend_yield } from './dividend-yield/definition';
import { definition as def_divisors } from './divisors/definition';
import { definition as def_down_payment } from './down-payment/definition';
import { definition as def_download_time } from './download-time/definition';
import { definition as def_dti } from './dti/definition';
import { definition as def_electricity_usage } from './electricity-usage/definition';
import { definition as def_engagement_rate } from './engagement-rate/definition';
import { definition as def_factorial } from './factorial/definition';
import { definition as def_files_on_disk } from './files-on-disk/definition';
import { definition as def_final_grade } from './final-grade/definition';
import { definition as def_fps_frametime } from './fps-frametime/definition';
import { definition as def_fraction_arith } from './fraction-arith/definition';
import { definition as def_fuel_consumption } from './fuel-consumption/definition';
import { definition as def_geom_circle } from './geom-circle/definition';
import { definition as def_geom_cone } from './geom-cone/definition';
import { definition as def_geom_cylinder } from './geom-cylinder/definition';
import { definition as def_geom_rectangle } from './geom-rectangle/definition';
import { definition as def_geom_regular_polygon } from './geom-regular-polygon/definition';
import { definition as def_geom_right_triangle } from './geom-right-triangle/definition';
import { definition as def_geom_sphere } from './geom-sphere/definition';
import { definition as def_geom_square } from './geom-square/definition';
import { definition as def_geom_trapezoid } from './geom-trapezoid/definition';
import { definition as def_geom_triangle } from './geom-triangle/definition';
import { definition as def_ideal_gas_law } from './ideal-gas-law/definition';
import { definition as def_installment } from './installment/definition';
import { definition as def_insulation } from './insulation/definition';
import { definition as def_inventory_turnover } from './inventory-turnover/definition';
import { definition as def_inverter_power } from './inverter-power/definition';
import { definition as def_kinetic_energy } from './kinetic-energy/definition';
import { definition as def_leap_year } from './leap-year/definition';
import { definition as def_led_resistor } from './led-resistor/definition';
import { definition as def_linear_equation } from './linear-equation/definition';
import { definition as def_logarithm } from './logarithm/definition';
import { definition as def_ltv } from './ltv/definition';
import { definition as def_market_cap } from './market-cap/definition';
import { definition as def_modulo } from './modulo/definition';
import { definition as def_molarity } from './molarity/definition';
import { definition as def_moles } from './moles/definition';
import { definition as def_momentum } from './momentum/definition';
import { definition as def_network_bandwidth } from './network-bandwidth/definition';
import { definition as def_newton_force } from './newton-force/definition';
import { definition as def_ohms_law } from './ohms-law/definition';
import { definition as def_paint_calculator } from './paint-calculator/definition';
import { definition as def_percent_calculator } from './percent-calculator/definition';
import { definition as def_ph_poh } from './ph-poh/definition';
import { definition as def_physics_power } from './physics-power/definition';
import { definition as def_plaster } from './plaster/definition';
import { definition as def_pool_fill_time } from './pool-fill-time/definition';
import { definition as def_potential_energy } from './potential-energy/definition';
import { definition as def_power_to_weight } from './power-to-weight/definition';
import { definition as def_ppi_dpi } from './ppi-dpi/definition';
import { definition as def_pressure } from './pressure/definition';
import { definition as def_price_per_unit } from './price-per-unit/definition';
import { definition as def_prime_factorization } from './prime-factorization/definition';
import { definition as def_probability_basic } from './probability-basic/definition';
import { definition as def_proportion } from './proportion/definition';
import { definition as def_quadratic_equation } from './quadratic-equation/definition';
import { definition as def_reading_speed } from './reading-speed/definition';
import { definition as def_real_return } from './real-return/definition';
import { definition as def_rental_yield } from './rental-yield/definition';
import { definition as def_return_rate } from './return-rate/definition';
import { definition as def_revenue_per_employee } from './revenue-per-employee/definition';
import { definition as def_roas } from './roas/definition';
import { definition as def_roi } from './roi/definition';
import { definition as def_roman_numerals } from './roman-numerals/definition';
import { definition as def_room_volume } from './room-volume/definition';
import { definition as def_rule_of_72 } from './rule-of-72/definition';
import { definition as def_savings_rate } from './savings-rate/definition';
import { definition as def_shipping_per_unit } from './shipping-per-unit/definition';
import { definition as def_simple_interest } from './simple-interest/definition';
import { definition as def_solution_concentration } from './solution-concentration/definition';
import { definition as def_speed_distance_time } from './speed-distance-time/definition';
import { definition as def_stats_descriptive } from './stats-descriptive/definition';
import { definition as def_stock_duration } from './stock-duration/definition';
import { definition as def_test_score_percent } from './test-score-percent/definition';
import { definition as def_time_duration } from './time-duration/definition';
import { definition as def_tip } from './tip/definition';
import { definition as def_trip_cost } from './trip-cost/definition';
import { definition as def_unix_timestamp } from './unix-timestamp/definition';
import { definition as def_week_number } from './week-number/definition';
import { definition as def_weighted_mean } from './weighted-mean/definition';
import { definition as def_work } from './work/definition';
import { definition as def_workday_cost } from './workday-cost/definition';
import { definition as def_z_score } from './z-score/definition';

export const v2Definitions: readonly CalculatorDefinitionV2[] = [
  def_ad_roi,
  def_annuity,
  def_aov,
  def_aspect_ratio,
  def_battery_charge_time,
  def_battery_runtime,
  def_bike_gear_ratio,
  def_board_volume,
  def_budget_50_30_20,
  def_cac,
  def_cagr,
  def_calories_from_macros,
  def_combinatorics,
  def_commission,
  def_concrete,
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
  def_cpm,
  def_ctr,
  def_day_of_week,
  def_density,
  def_difference_abs_rel,
  def_dilution,
  def_dividend_yield,
  def_divisors,
  def_down_payment,
  def_download_time,
  def_dti,
  def_electricity_usage,
  def_engagement_rate,
  def_factorial,
  def_files_on_disk,
  def_final_grade,
  def_fps_frametime,
  def_fraction_arith,
  def_fuel_consumption,
  def_geom_circle,
  def_geom_cone,
  def_geom_cylinder,
  def_geom_rectangle,
  def_geom_regular_polygon,
  def_geom_right_triangle,
  def_geom_sphere,
  def_geom_square,
  def_geom_trapezoid,
  def_geom_triangle,
  def_ideal_gas_law,
  def_installment,
  def_insulation,
  def_inventory_turnover,
  def_inverter_power,
  def_kinetic_energy,
  def_leap_year,
  def_led_resistor,
  def_linear_equation,
  def_logarithm,
  def_ltv,
  def_market_cap,
  def_modulo,
  def_molarity,
  def_moles,
  def_momentum,
  def_network_bandwidth,
  def_newton_force,
  def_ohms_law,
  def_paint_calculator,
  def_percent_calculator,
  def_ph_poh,
  def_physics_power,
  def_plaster,
  def_pool_fill_time,
  def_potential_energy,
  def_power_to_weight,
  def_ppi_dpi,
  def_pressure,
  def_price_per_unit,
  def_prime_factorization,
  def_probability_basic,
  def_proportion,
  def_quadratic_equation,
  def_reading_speed,
  def_real_return,
  def_rental_yield,
  def_return_rate,
  def_revenue_per_employee,
  def_roas,
  def_roi,
  def_roman_numerals,
  def_room_volume,
  def_rule_of_72,
  def_savings_rate,
  def_shipping_per_unit,
  def_simple_interest,
  def_solution_concentration,
  def_speed_distance_time,
  def_stats_descriptive,
  def_stock_duration,
  def_test_score_percent,
  def_time_duration,
  def_tip,
  def_trip_cost,
  def_unix_timestamp,
  def_week_number,
  def_weighted_mean,
  def_work,
  def_workday_cost,
  def_z_score,
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
