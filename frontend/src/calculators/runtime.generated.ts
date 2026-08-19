// СГЕНЕРИРОВАНО. Не редактировать руками.
// Только runtime: этот файл попадает в клиентский бандл, поэтому он не должен
// импортировать definition-объекты с SEO-текстами и FAQ.
//
// Каждый runtime-модуль калькулятора обязан экспортировать функцию под
// фиксированным именем: compute.ts → compute, validate.ts → validate,
// contextualField.ts → contextualField. Генератор ничего не угадывает по id —
// первая же попытка это делать сломалась на калькуляторе, чьё имя не легло
// в соглашение.
// Перегенерировать: npm run calculators:generate

import type { CalcFunction } from '../lib/types';
import type { CalculatorContextualField, CalculatorValidator } from '../lib/platform/types';
import type { CalculatorClientRuntime } from '../lib/platform/runtime';
import { v2Localization } from './localization.generated';

import { compute as compute_ad_roi } from './ad-roi/compute';
import { compute as compute_aov } from './aov/compute';
import { compute as compute_aspect_ratio } from './aspect-ratio/compute';
import { compute as compute_battery_runtime } from './battery-runtime/compute';
import { compute as compute_budget_50_30_20 } from './budget-50-30-20/compute';
import { compute as compute_cac } from './cac/compute';
import { compute as compute_cagr } from './cagr/compute';
import { compute as compute_calories_from_macros } from './calories-from-macros/compute';
import { compute as compute_combinatorics } from './combinatorics/compute';
import { compute as compute_commission } from './commission/compute';
import { validate as validate_commission } from './commission/validate';
import { contextualField as ctx_commission } from './commission/contextualField';
import { compute as compute_contribution_margin } from './contribution-margin/compute';
import { compute as compute_convert_angle } from './convert-angle/compute';
import { compute as compute_convert_area } from './convert-area/compute';
import { compute as compute_convert_cooking_volume } from './convert-cooking-volume/compute';
import { compute as compute_convert_data_rate } from './convert-data-rate/compute';
import { compute as compute_convert_density } from './convert-density/compute';
import { compute as compute_convert_digital } from './convert-digital/compute';
import { compute as compute_convert_energy } from './convert-energy/compute';
import { compute as compute_convert_flow } from './convert-flow/compute';
import { compute as compute_convert_force } from './convert-force/compute';
import { compute as compute_convert_frequency } from './convert-frequency/compute';
import { compute as compute_convert_illuminance } from './convert-illuminance/compute';
import { compute as compute_convert_length } from './convert-length/compute';
import { compute as compute_convert_mass } from './convert-mass/compute';
import { compute as compute_convert_power } from './convert-power/compute';
import { compute as compute_convert_pressure } from './convert-pressure/compute';
import { compute as compute_convert_speed } from './convert-speed/compute';
import { compute as compute_convert_temperature } from './convert-temperature/compute';
import { compute as compute_convert_time } from './convert-time/compute';
import { compute as compute_convert_torque } from './convert-torque/compute';
import { compute as compute_convert_volume } from './convert-volume/compute';
import { compute as compute_cpm } from './cpm/compute';
import { compute as compute_ctr } from './ctr/compute';
import { compute as compute_day_of_week } from './day-of-week/compute';
import { compute as compute_density } from './density/compute';
import { compute as compute_difference_abs_rel } from './difference-abs-rel/compute';
import { compute as compute_dividend_yield } from './dividend-yield/compute';
import { compute as compute_divisors } from './divisors/compute';
import { compute as compute_download_time } from './download-time/compute';
import { compute as compute_dti } from './dti/compute';
import { compute as compute_electricity_usage } from './electricity-usage/compute';
import { compute as compute_factorial } from './factorial/compute';
import { compute as compute_files_on_disk } from './files-on-disk/compute';
import { compute as compute_final_grade } from './final-grade/compute';
import { compute as compute_fps_frametime } from './fps-frametime/compute';
import { contextualField as ctx_fps_frametime } from './fps-frametime/contextualField';
import { compute as compute_fraction_arith } from './fraction-arith/compute';
import { compute as compute_fuel_consumption } from './fuel-consumption/compute';
import { compute as compute_geom_circle } from './geom-circle/compute';
import { compute as compute_geom_cone } from './geom-cone/compute';
import { compute as compute_geom_cylinder } from './geom-cylinder/compute';
import { compute as compute_geom_rectangle } from './geom-rectangle/compute';
import { compute as compute_geom_regular_polygon } from './geom-regular-polygon/compute';
import { compute as compute_geom_right_triangle } from './geom-right-triangle/compute';
import { compute as compute_geom_sphere } from './geom-sphere/compute';
import { compute as compute_geom_square } from './geom-square/compute';
import { compute as compute_geom_trapezoid } from './geom-trapezoid/compute';
import { compute as compute_geom_triangle } from './geom-triangle/compute';
import { compute as compute_inverter_power } from './inverter-power/compute';
import { compute as compute_kinetic_energy } from './kinetic-energy/compute';
import { compute as compute_leap_year } from './leap-year/compute';
import { compute as compute_led_resistor } from './led-resistor/compute';
import { compute as compute_linear_equation } from './linear-equation/compute';
import { compute as compute_logarithm } from './logarithm/compute';
import { contextualField as ctx_logarithm } from './logarithm/contextualField';
import { compute as compute_ltv } from './ltv/compute';
import { compute as compute_modulo } from './modulo/compute';
import { compute as compute_momentum } from './momentum/compute';
import { compute as compute_network_bandwidth } from './network-bandwidth/compute';
import { compute as compute_newton_force } from './newton-force/compute';
import { compute as compute_ohms_law } from './ohms-law/compute';
import { contextualField as ctx_ohms_law } from './ohms-law/contextualField';
import { compute as compute_paint_calculator } from './paint-calculator/compute';
import { compute as compute_percent_calculator } from './percent-calculator/compute';
import { validate as validate_percent_calculator } from './percent-calculator/validate';
import { contextualField as ctx_percent_calculator } from './percent-calculator/contextualField';
import { compute as compute_physics_power } from './physics-power/compute';
import { compute as compute_pool_fill_time } from './pool-fill-time/compute';
import { compute as compute_potential_energy } from './potential-energy/compute';
import { compute as compute_power_to_weight } from './power-to-weight/compute';
import { compute as compute_pressure } from './pressure/compute';
import { compute as compute_prime_factorization } from './prime-factorization/compute';
import { compute as compute_probability_basic } from './probability-basic/compute';
import { compute as compute_proportion } from './proportion/compute';
import { contextualField as ctx_proportion } from './proportion/contextualField';
import { compute as compute_quadratic_equation } from './quadratic-equation/compute';
import { compute as compute_reading_speed } from './reading-speed/compute';
import { compute as compute_real_return } from './real-return/compute';
import { compute as compute_return_rate } from './return-rate/compute';
import { compute as compute_revenue_per_employee } from './revenue-per-employee/compute';
import { compute as compute_roas } from './roas/compute';
import { compute as compute_roi } from './roi/compute';
import { compute as compute_roman_numerals } from './roman-numerals/compute';
import { compute as compute_room_volume } from './room-volume/compute';
import { compute as compute_rule_of_72 } from './rule-of-72/compute';
import { compute as compute_savings_rate } from './savings-rate/compute';
import { compute as compute_shipping_per_unit } from './shipping-per-unit/compute';
import { compute as compute_simple_interest } from './simple-interest/compute';
import { compute as compute_speed_distance_time } from './speed-distance-time/compute';
import { contextualField as ctx_speed_distance_time } from './speed-distance-time/contextualField';
import { compute as compute_test_score_percent } from './test-score-percent/compute';
import { compute as compute_time_duration } from './time-duration/compute';
import { compute as compute_tip } from './tip/compute';
import { compute as compute_trip_cost } from './trip-cost/compute';
import { compute as compute_unix_timestamp } from './unix-timestamp/compute';
import { compute as compute_week_number } from './week-number/compute';
import { compute as compute_work } from './work/compute';

export const v2Runners: Record<string, CalcFunction> = {
  'ad-roi': compute_ad_roi,
  'aov': compute_aov,
  'aspect-ratio': compute_aspect_ratio,
  'battery-runtime': compute_battery_runtime,
  'budget-50-30-20': compute_budget_50_30_20,
  'cac': compute_cac,
  'cagr': compute_cagr,
  'calories-from-macros': compute_calories_from_macros,
  'combinatorics': compute_combinatorics,
  'commission': compute_commission,
  'contribution-margin': compute_contribution_margin,
  'convert-angle': compute_convert_angle,
  'convert-area': compute_convert_area,
  'convert-cooking-volume': compute_convert_cooking_volume,
  'convert-data-rate': compute_convert_data_rate,
  'convert-density': compute_convert_density,
  'convert-digital': compute_convert_digital,
  'convert-energy': compute_convert_energy,
  'convert-flow': compute_convert_flow,
  'convert-force': compute_convert_force,
  'convert-frequency': compute_convert_frequency,
  'convert-illuminance': compute_convert_illuminance,
  'convert-length': compute_convert_length,
  'convert-mass': compute_convert_mass,
  'convert-power': compute_convert_power,
  'convert-pressure': compute_convert_pressure,
  'convert-speed': compute_convert_speed,
  'convert-temperature': compute_convert_temperature,
  'convert-time': compute_convert_time,
  'convert-torque': compute_convert_torque,
  'convert-volume': compute_convert_volume,
  'cpm': compute_cpm,
  'ctr': compute_ctr,
  'day-of-week': compute_day_of_week,
  'density': compute_density,
  'difference-abs-rel': compute_difference_abs_rel,
  'dividend-yield': compute_dividend_yield,
  'divisors': compute_divisors,
  'download-time': compute_download_time,
  'dti': compute_dti,
  'electricity-usage': compute_electricity_usage,
  'factorial': compute_factorial,
  'files-on-disk': compute_files_on_disk,
  'final-grade': compute_final_grade,
  'fps-frametime': compute_fps_frametime,
  'fraction-arith': compute_fraction_arith,
  'fuel-consumption': compute_fuel_consumption,
  'geom-circle': compute_geom_circle,
  'geom-cone': compute_geom_cone,
  'geom-cylinder': compute_geom_cylinder,
  'geom-rectangle': compute_geom_rectangle,
  'geom-regular-polygon': compute_geom_regular_polygon,
  'geom-right-triangle': compute_geom_right_triangle,
  'geom-sphere': compute_geom_sphere,
  'geom-square': compute_geom_square,
  'geom-trapezoid': compute_geom_trapezoid,
  'geom-triangle': compute_geom_triangle,
  'inverter-power': compute_inverter_power,
  'kinetic-energy': compute_kinetic_energy,
  'leap-year': compute_leap_year,
  'led-resistor': compute_led_resistor,
  'linear-equation': compute_linear_equation,
  'logarithm': compute_logarithm,
  'ltv': compute_ltv,
  'modulo': compute_modulo,
  'momentum': compute_momentum,
  'network-bandwidth': compute_network_bandwidth,
  'newton-force': compute_newton_force,
  'ohms-law': compute_ohms_law,
  'paint-calculator': compute_paint_calculator,
  'percent-calculator': compute_percent_calculator,
  'physics-power': compute_physics_power,
  'pool-fill-time': compute_pool_fill_time,
  'potential-energy': compute_potential_energy,
  'power-to-weight': compute_power_to_weight,
  'pressure': compute_pressure,
  'prime-factorization': compute_prime_factorization,
  'probability-basic': compute_probability_basic,
  'proportion': compute_proportion,
  'quadratic-equation': compute_quadratic_equation,
  'reading-speed': compute_reading_speed,
  'real-return': compute_real_return,
  'return-rate': compute_return_rate,
  'revenue-per-employee': compute_revenue_per_employee,
  'roas': compute_roas,
  'roi': compute_roi,
  'roman-numerals': compute_roman_numerals,
  'room-volume': compute_room_volume,
  'rule-of-72': compute_rule_of_72,
  'savings-rate': compute_savings_rate,
  'shipping-per-unit': compute_shipping_per_unit,
  'simple-interest': compute_simple_interest,
  'speed-distance-time': compute_speed_distance_time,
  'test-score-percent': compute_test_score_percent,
  'time-duration': compute_time_duration,
  'tip': compute_tip,
  'trip-cost': compute_trip_cost,
  'unix-timestamp': compute_unix_timestamp,
  'week-number': compute_week_number,
  'work': compute_work,
};

export const v2Validators: Record<string, CalculatorValidator> = {
  'commission': validate_commission,
  'percent-calculator': validate_percent_calculator,
};

export const v2ContextualFields: Record<string, CalculatorContextualField> = {
  'commission': ctx_commission,
  'fps-frametime': ctx_fps_frametime,
  'logarithm': ctx_logarithm,
  'ohms-law': ctx_ohms_law,
  'percent-calculator': ctx_percent_calculator,
  'proportion': ctx_proportion,
  'speed-distance-time': ctx_speed_distance_time,
};

/**
 * Полные рантаймы по идентификатору — для сборки и тестов.
 *
 * В клиентский граф этот файл не входит: остров получает рантайм от своей
 * точки входа. Здесь он собран целиком только чтобы тесты могли обратиться
 * к любому калькулятору по идентификатору.
 */
export const v2Runtimes: Record<string, CalculatorClientRuntime> = Object.fromEntries(
  Object.keys(v2Runners).map((id) => [id, {
    compute: v2Runners[id],
    validate: v2Validators[id],
    contextualField: v2ContextualFields[id],
    localization: v2Localization.en[id] || v2Localization.uk[id]
      ? { en: v2Localization.en[id], uk: v2Localization.uk[id] }
      : undefined,
  }]),
);
