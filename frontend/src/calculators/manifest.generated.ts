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

import { definition as def_acceleration } from './acceleration/definition';
import { definition as def_activity_calories } from './activity-calories/definition';
import { definition as def_ad_budget_funnel } from './ad-budget-funnel/definition';
import { definition as def_ad_roi } from './ad-roi/definition';
import { definition as def_annuity } from './annuity/definition';
import { definition as def_aov } from './aov/definition';
import { definition as def_apr_apy } from './apr-apy/definition';
import { definition as def_aquarium_water_change } from './aquarium-water-change/definition';
import { definition as def_arithmetic_progression } from './arithmetic-progression/definition';
import { definition as def_arpu_arppu } from './arpu-arppu/definition';
import { definition as def_aspect_ratio } from './aspect-ratio/definition';
import { definition as def_audience_growth } from './audience-growth/definition';
import { definition as def_bakers_percentage } from './bakers-percentage/definition';
import { definition as def_barbell_plates } from './barbell-plates/definition';
import { definition as def_battery_charge_time } from './battery-charge-time/definition';
import { definition as def_battery_runtime } from './battery-runtime/definition';
import { definition as def_battery_series_parallel } from './battery-series-parallel/definition';
import { definition as def_bike_gear_ratio } from './bike-gear-ratio/definition';
import { definition as def_bike_wheel_size } from './bike-wheel-size/definition';
import { definition as def_binomial_probability } from './binomial-probability/definition';
import { definition as def_board_volume } from './board-volume/definition';
import { definition as def_bonus } from './bonus/definition';
import { definition as def_budget_50_30_20 } from './budget-50-30-20/definition';
import { definition as def_budget_split } from './budget-split/definition';
import { definition as def_cac } from './cac/definition';
import { definition as def_cagr } from './cagr/definition';
import { definition as def_calories_from_macros } from './calories-from-macros/definition';
import { definition as def_calories_per_serving } from './calories-per-serving/definition';
import { definition as def_car_depreciation } from './car-depreciation/definition';
import { definition as def_centripetal_force } from './centripetal-force/definition';
import { definition as def_churn_retention } from './churn-retention/definition';
import { definition as def_cogs } from './cogs/definition';
import { definition as def_cogs_unit_cost } from './cogs-unit-cost/definition';
import { definition as def_color_convert } from './color-convert/definition';
import { definition as def_combinatorics } from './combinatorics/definition';
import { definition as def_commission } from './commission/definition';
import { definition as def_concrete } from './concrete/definition';
import { definition as def_confidence_interval } from './confidence-interval/definition';
import { definition as def_contribution_margin } from './contribution-margin/definition';
import { definition as def_conversion_rate } from './conversion-rate/definition';
import { definition as def_convert_angle } from './convert-angle/definition';
import { definition as def_convert_area } from './convert-area/definition';
import { definition as def_convert_cooking_volume } from './convert-cooking-volume/definition';
import { definition as def_convert_cooking_weight } from './convert-cooking-weight/definition';
import { definition as def_convert_data_rate } from './convert-data-rate/definition';
import { definition as def_convert_density } from './convert-density/definition';
import { definition as def_convert_digital } from './convert-digital/definition';
import { definition as def_convert_energy } from './convert-energy/definition';
import { definition as def_convert_flow } from './convert-flow/definition';
import { definition as def_convert_force } from './convert-force/definition';
import { definition as def_convert_frequency } from './convert-frequency/definition';
import { definition as def_convert_fuel_economy } from './convert-fuel-economy/definition';
import { definition as def_convert_illuminance } from './convert-illuminance/definition';
import { definition as def_convert_length } from './convert-length/definition';
import { definition as def_convert_mass } from './convert-mass/definition';
import { definition as def_convert_power } from './convert-power/definition';
import { definition as def_convert_pressure } from './convert-pressure/definition';
import { definition as def_convert_radiation } from './convert-radiation/definition';
import { definition as def_convert_speed } from './convert-speed/definition';
import { definition as def_convert_temperature } from './convert-temperature/definition';
import { definition as def_convert_time } from './convert-time/definition';
import { definition as def_convert_torque } from './convert-torque/definition';
import { definition as def_convert_volume } from './convert-volume/definition';
import { definition as def_cooked_weight } from './cooked-weight/definition';
import { definition as def_correlation } from './correlation/definition';
import { definition as def_cpa_cpl_cpi } from './cpa-cpl-cpi/definition';
import { definition as def_cpc } from './cpc/definition';
import { definition as def_cpm } from './cpm/definition';
import { definition as def_crypto_pnl } from './crypto-pnl/definition';
import { definition as def_css_units } from './css-units/definition';
import { definition as def_ctr } from './ctr/definition';
import { definition as def_currency_exchange_fee } from './currency-exchange-fee/definition';
import { definition as def_day_of_week } from './day-of-week/definition';
import { definition as def_dca } from './dca/definition';
import { definition as def_density } from './density/definition';
import { definition as def_dice_probability } from './dice-probability/definition';
import { definition as def_difference_abs_rel } from './difference-abs-rel/definition';
import { definition as def_dilution } from './dilution/definition';
import { definition as def_dividend_yield } from './dividend-yield/definition';
import { definition as def_divisors } from './divisors/definition';
import { definition as def_down_payment } from './down-payment/definition';
import { definition as def_download_time } from './download-time/definition';
import { definition as def_drywall } from './drywall/definition';
import { definition as def_dti } from './dti/definition';
import { definition as def_early_repayment } from './early-repayment/definition';
import { definition as def_electricity_usage } from './electricity-usage/definition';
import { definition as def_email_metrics } from './email-metrics/definition';
import { definition as def_emergency_fund } from './emergency-fund/definition';
import { definition as def_employee_cost } from './employee-cost/definition';
import { definition as def_engagement_rate } from './engagement-rate/definition';
import { definition as def_factorial } from './factorial/definition';
import { definition as def_fee_chain } from './fee-chain/definition';
import { definition as def_fence } from './fence/definition';
import { definition as def_fibonacci } from './fibonacci/definition';
import { definition as def_files_on_disk } from './files-on-disk/definition';
import { definition as def_final_grade } from './final-grade/definition';
import { definition as def_fps_frametime } from './fps-frametime/definition';
import { definition as def_fraction_arith } from './fraction-arith/definition';
import { definition as def_freelance_rate } from './freelance-rate/definition';
import { definition as def_fuel_consumption } from './fuel-consumption/definition';
import { definition as def_gcd_lcm } from './gcd-lcm/definition';
import { definition as def_generator_fuel } from './generator-fuel/definition';
import { definition as def_geom_annulus } from './geom-annulus/definition';
import { definition as def_geom_circle } from './geom-circle/definition';
import { definition as def_geom_cone } from './geom-cone/definition';
import { definition as def_geom_cube } from './geom-cube/definition';
import { definition as def_geom_cuboid } from './geom-cuboid/definition';
import { definition as def_geom_cylinder } from './geom-cylinder/definition';
import { definition as def_geom_ellipse } from './geom-ellipse/definition';
import { definition as def_geom_frustum } from './geom-frustum/definition';
import { definition as def_geom_parallelogram } from './geom-parallelogram/definition';
import { definition as def_geom_polygon_coords } from './geom-polygon-coords/definition';
import { definition as def_geom_prism } from './geom-prism/definition';
import { definition as def_geom_pyramid } from './geom-pyramid/definition';
import { definition as def_geom_rectangle } from './geom-rectangle/definition';
import { definition as def_geom_regular_polygon } from './geom-regular-polygon/definition';
import { definition as def_geom_rhombus } from './geom-rhombus/definition';
import { definition as def_geom_right_triangle } from './geom-right-triangle/definition';
import { definition as def_geom_sector } from './geom-sector/definition';
import { definition as def_geom_sphere } from './geom-sphere/definition';
import { definition as def_geom_square } from './geom-square/definition';
import { definition as def_geom_trapezoid } from './geom-trapezoid/definition';
import { definition as def_geom_triangle } from './geom-triangle/definition';
import { definition as def_geometric_progression } from './geometric-progression/definition';
import { definition as def_golden_ratio } from './golden-ratio/definition';
import { definition as def_gpa } from './gpa/definition';
import { definition as def_gravitational_force } from './gravitational-force/definition';
import { definition as def_heating_power } from './heating-power/definition';
import { definition as def_hydrostatic_pressure } from './hydrostatic-pressure/definition';
import { definition as def_ideal_gas_law } from './ideal-gas-law/definition';
import { definition as def_ideal_weight } from './ideal-weight/definition';
import { definition as def_inflation } from './inflation/definition';
import { definition as def_installment } from './installment/definition';
import { definition as def_insulation } from './insulation/definition';
import { definition as def_internet_traffic } from './internet-traffic/definition';
import { definition as def_inventory_turnover } from './inventory-turnover/definition';
import { definition as def_inverter_power } from './inverter-power/definition';
import { definition as def_ipv4_subnet } from './ipv4-subnet/definition';
import { definition as def_kinetic_energy } from './kinetic-energy/definition';
import { definition as def_leap_year } from './leap-year/definition';
import { definition as def_led_resistor } from './led-resistor/definition';
import { definition as def_leverage } from './leverage/definition';
import { definition as def_lighting } from './lighting/definition';
import { definition as def_linear_equation } from './linear-equation/definition';
import { definition as def_linear_system } from './linear-system/definition';
import { definition as def_linoleum } from './linoleum/definition';
import { definition as def_logarithm } from './logarithm/definition';
import { definition as def_ltv } from './ltv/definition';
import { definition as def_market_cap } from './market-cap/definition';
import { definition as def_max_heart_rate } from './max-heart-rate/definition';
import { definition as def_max_loan } from './max-loan/definition';
import { definition as def_modular_scale } from './modular-scale/definition';
import { definition as def_modulo } from './modulo/definition';
import { definition as def_molar_mass } from './molar-mass/definition';
import { definition as def_molarity } from './molarity/definition';
import { definition as def_moles } from './moles/definition';
import { definition as def_momentum } from './momentum/definition';
import { definition as def_mrr_arr } from './mrr-arr/definition';
import { definition as def_network_bandwidth } from './network-bandwidth/definition';
import { definition as def_newton_force } from './newton-force/definition';
import { definition as def_ohms_law } from './ohms-law/definition';
import { definition as def_overtime } from './overtime/definition';
import { definition as def_paint_calculator } from './paint-calculator/definition';
import { definition as def_percent_calculator } from './percent-calculator/definition';
import { definition as def_pet_age } from './pet-age/definition';
import { definition as def_pet_food } from './pet-food/definition';
import { definition as def_ph_poh } from './ph-poh/definition';
import { definition as def_physics_power } from './physics-power/definition';
import { definition as def_physics_torque } from './physics-torque/definition';
import { definition as def_pile_foundation } from './pile-foundation/definition';
import { definition as def_plaster } from './plaster/definition';
import { definition as def_pool_fill_time } from './pool-fill-time/definition';
import { definition as def_position_size } from './position-size/definition';
import { definition as def_potential_energy } from './potential-energy/definition';
import { definition as def_power_root } from './power-root/definition';
import { definition as def_power_to_weight } from './power-to-weight/definition';
import { definition as def_ppi_dpi } from './ppi-dpi/definition';
import { definition as def_pressure } from './pressure/definition';
import { definition as def_price_per_unit } from './price-per-unit/definition';
import { definition as def_prime_factorization } from './prime-factorization/definition';
import { definition as def_print_3d_cost } from './print-3d-cost/definition';
import { definition as def_probability_basic } from './probability-basic/definition';
import { definition as def_profit } from './profit/definition';
import { definition as def_proportion } from './proportion/definition';
import { definition as def_quadratic_equation } from './quadratic-equation/definition';
import { definition as def_rafters } from './rafters/definition';
import { definition as def_raid } from './raid/definition';
import { definition as def_ratio } from './ratio/definition';
import { definition as def_reading_speed } from './reading-speed/definition';
import { definition as def_real_return } from './real-return/definition';
import { definition as def_recipe_cost } from './recipe-cost/definition';
import { definition as def_recipe_scale } from './recipe-scale/definition';
import { definition as def_refinancing } from './refinancing/definition';
import { definition as def_rental_yield } from './rental-yield/definition';
import { definition as def_resistor_network } from './resistor-network/definition';
import { definition as def_return_rate } from './return-rate/definition';
import { definition as def_revenue_per_employee } from './revenue-per-employee/definition';
import { definition as def_risk_reward } from './risk-reward/definition';
import { definition as def_roas } from './roas/definition';
import { definition as def_roi } from './roi/definition';
import { definition as def_roman_numerals } from './roman-numerals/definition';
import { definition as def_roof_area } from './roof-area/definition';
import { definition as def_roof_battens } from './roof-battens/definition';
import { definition as def_room_volume } from './room-volume/definition';
import { definition as def_rounding } from './rounding/definition';
import { definition as def_rule_of_72 } from './rule-of-72/definition';
import { definition as def_salary_convert } from './salary-convert/definition';
import { definition as def_salary_raise } from './salary-raise/definition';
import { definition as def_savings_goal } from './savings-goal/definition';
import { definition as def_savings_rate } from './savings-rate/definition';
import { definition as def_shipping_per_unit } from './shipping-per-unit/definition';
import { definition as def_simple_interest } from './simple-interest/definition';
import { definition as def_single_phase } from './single-phase/definition';
import { definition as def_slab_foundation } from './slab-foundation/definition';
import { definition as def_sleep_time } from './sleep-time/definition';
import { definition as def_slope } from './slope/definition';
import { definition as def_solution_concentration } from './solution-concentration/definition';
import { definition as def_speed_distance_time } from './speed-distance-time/definition';
import { definition as def_stats_descriptive } from './stats-descriptive/definition';
import { definition as def_steps_distance_calories } from './steps-distance-calories/definition';
import { definition as def_stock_duration } from './stock-duration/definition';
import { definition as def_strip_foundation } from './strip-foundation/definition';
import { definition as def_subscriptions_cost } from './subscriptions-cost/definition';
import { definition as def_test_score_percent } from './test-score-percent/definition';
import { definition as def_text_reading_time } from './text-reading-time/definition';
import { definition as def_text_word_char_count } from './text-word-char-count/definition';
import { definition as def_time_duration } from './time-duration/definition';
import { definition as def_time_value_money } from './time-value-money/definition';
import { definition as def_timezone_difference } from './timezone-difference/definition';
import { definition as def_tip } from './tip/definition';
import { definition as def_tire_size } from './tire-size/definition';
import { definition as def_trip_budget } from './trip-budget/definition';
import { definition as def_trip_cost } from './trip-cost/definition';
import { definition as def_underfloor_heating } from './underfloor-heating/definition';
import { definition as def_unix_timestamp } from './unix-timestamp/definition';
import { definition as def_utility_total } from './utility-total/definition';
import { definition as def_vacation_accrual } from './vacation-accrual/definition';
import { definition as def_video_file_size } from './video-file-size/definition';
import { definition as def_vo2max } from './vo2max/definition';
import { definition as def_voltage_drop } from './voltage-drop/definition';
import { definition as def_waist_ratio } from './waist-ratio/definition';
import { definition as def_water_intake } from './water-intake/definition';
import { definition as def_wave } from './wave/definition';
import { definition as def_week_number } from './week-number/definition';
import { definition as def_weighted_mean } from './weighted-mean/definition';
import { definition as def_wood_weight } from './wood-weight/definition';
import { definition as def_work } from './work/definition';
import { definition as def_work_hours } from './work-hours/definition';
import { definition as def_workday_cost } from './workday-cost/definition';
import { definition as def_z_score } from './z-score/definition';

export const v2Definitions: readonly CalculatorDefinitionV2[] = [
  def_acceleration,
  def_activity_calories,
  def_ad_budget_funnel,
  def_ad_roi,
  def_annuity,
  def_aov,
  def_apr_apy,
  def_aquarium_water_change,
  def_arithmetic_progression,
  def_arpu_arppu,
  def_aspect_ratio,
  def_audience_growth,
  def_bakers_percentage,
  def_barbell_plates,
  def_battery_charge_time,
  def_battery_runtime,
  def_battery_series_parallel,
  def_bike_gear_ratio,
  def_bike_wheel_size,
  def_binomial_probability,
  def_board_volume,
  def_bonus,
  def_budget_50_30_20,
  def_budget_split,
  def_cac,
  def_cagr,
  def_calories_from_macros,
  def_calories_per_serving,
  def_car_depreciation,
  def_centripetal_force,
  def_churn_retention,
  def_cogs,
  def_cogs_unit_cost,
  def_color_convert,
  def_combinatorics,
  def_commission,
  def_concrete,
  def_confidence_interval,
  def_contribution_margin,
  def_conversion_rate,
  def_convert_angle,
  def_convert_area,
  def_convert_cooking_volume,
  def_convert_cooking_weight,
  def_convert_data_rate,
  def_convert_density,
  def_convert_digital,
  def_convert_energy,
  def_convert_flow,
  def_convert_force,
  def_convert_frequency,
  def_convert_fuel_economy,
  def_convert_illuminance,
  def_convert_length,
  def_convert_mass,
  def_convert_power,
  def_convert_pressure,
  def_convert_radiation,
  def_convert_speed,
  def_convert_temperature,
  def_convert_time,
  def_convert_torque,
  def_convert_volume,
  def_cooked_weight,
  def_correlation,
  def_cpa_cpl_cpi,
  def_cpc,
  def_cpm,
  def_crypto_pnl,
  def_css_units,
  def_ctr,
  def_currency_exchange_fee,
  def_day_of_week,
  def_dca,
  def_density,
  def_dice_probability,
  def_difference_abs_rel,
  def_dilution,
  def_dividend_yield,
  def_divisors,
  def_down_payment,
  def_download_time,
  def_drywall,
  def_dti,
  def_early_repayment,
  def_electricity_usage,
  def_email_metrics,
  def_emergency_fund,
  def_employee_cost,
  def_engagement_rate,
  def_factorial,
  def_fee_chain,
  def_fence,
  def_fibonacci,
  def_files_on_disk,
  def_final_grade,
  def_fps_frametime,
  def_fraction_arith,
  def_freelance_rate,
  def_fuel_consumption,
  def_gcd_lcm,
  def_generator_fuel,
  def_geom_annulus,
  def_geom_circle,
  def_geom_cone,
  def_geom_cube,
  def_geom_cuboid,
  def_geom_cylinder,
  def_geom_ellipse,
  def_geom_frustum,
  def_geom_parallelogram,
  def_geom_polygon_coords,
  def_geom_prism,
  def_geom_pyramid,
  def_geom_rectangle,
  def_geom_regular_polygon,
  def_geom_rhombus,
  def_geom_right_triangle,
  def_geom_sector,
  def_geom_sphere,
  def_geom_square,
  def_geom_trapezoid,
  def_geom_triangle,
  def_geometric_progression,
  def_golden_ratio,
  def_gpa,
  def_gravitational_force,
  def_heating_power,
  def_hydrostatic_pressure,
  def_ideal_gas_law,
  def_ideal_weight,
  def_inflation,
  def_installment,
  def_insulation,
  def_internet_traffic,
  def_inventory_turnover,
  def_inverter_power,
  def_ipv4_subnet,
  def_kinetic_energy,
  def_leap_year,
  def_led_resistor,
  def_leverage,
  def_lighting,
  def_linear_equation,
  def_linear_system,
  def_linoleum,
  def_logarithm,
  def_ltv,
  def_market_cap,
  def_max_heart_rate,
  def_max_loan,
  def_modular_scale,
  def_modulo,
  def_molar_mass,
  def_molarity,
  def_moles,
  def_momentum,
  def_mrr_arr,
  def_network_bandwidth,
  def_newton_force,
  def_ohms_law,
  def_overtime,
  def_paint_calculator,
  def_percent_calculator,
  def_pet_age,
  def_pet_food,
  def_ph_poh,
  def_physics_power,
  def_physics_torque,
  def_pile_foundation,
  def_plaster,
  def_pool_fill_time,
  def_position_size,
  def_potential_energy,
  def_power_root,
  def_power_to_weight,
  def_ppi_dpi,
  def_pressure,
  def_price_per_unit,
  def_prime_factorization,
  def_print_3d_cost,
  def_probability_basic,
  def_profit,
  def_proportion,
  def_quadratic_equation,
  def_rafters,
  def_raid,
  def_ratio,
  def_reading_speed,
  def_real_return,
  def_recipe_cost,
  def_recipe_scale,
  def_refinancing,
  def_rental_yield,
  def_resistor_network,
  def_return_rate,
  def_revenue_per_employee,
  def_risk_reward,
  def_roas,
  def_roi,
  def_roman_numerals,
  def_roof_area,
  def_roof_battens,
  def_room_volume,
  def_rounding,
  def_rule_of_72,
  def_salary_convert,
  def_salary_raise,
  def_savings_goal,
  def_savings_rate,
  def_shipping_per_unit,
  def_simple_interest,
  def_single_phase,
  def_slab_foundation,
  def_sleep_time,
  def_slope,
  def_solution_concentration,
  def_speed_distance_time,
  def_stats_descriptive,
  def_steps_distance_calories,
  def_stock_duration,
  def_strip_foundation,
  def_subscriptions_cost,
  def_test_score_percent,
  def_text_reading_time,
  def_text_word_char_count,
  def_time_duration,
  def_time_value_money,
  def_timezone_difference,
  def_tip,
  def_tire_size,
  def_trip_budget,
  def_trip_cost,
  def_underfloor_heating,
  def_unix_timestamp,
  def_utility_total,
  def_vacation_accrual,
  def_video_file_size,
  def_vo2max,
  def_voltage_drop,
  def_waist_ratio,
  def_water_intake,
  def_wave,
  def_week_number,
  def_weighted_mean,
  def_wood_weight,
  def_work,
  def_work_hours,
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
