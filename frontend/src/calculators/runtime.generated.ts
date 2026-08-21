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

import { compute as compute_acceleration } from './acceleration/compute';
import { compute as compute_activity_calories } from './activity-calories/compute';
import { compute as compute_ad_budget_funnel } from './ad-budget-funnel/compute';
import { compute as compute_ad_roi } from './ad-roi/compute';
import { compute as compute_annuity } from './annuity/compute';
import { compute as compute_aov } from './aov/compute';
import { compute as compute_apr_apy } from './apr-apy/compute';
import { compute as compute_aquarium_water_change } from './aquarium-water-change/compute';
import { compute as compute_arithmetic_progression } from './arithmetic-progression/compute';
import { compute as compute_arpu_arppu } from './arpu-arppu/compute';
import { compute as compute_aspect_ratio } from './aspect-ratio/compute';
import { compute as compute_audience_growth } from './audience-growth/compute';
import { compute as compute_bakers_percentage } from './bakers-percentage/compute';
import { compute as compute_barbell_plates } from './barbell-plates/compute';
import { compute as compute_battery_charge_time } from './battery-charge-time/compute';
import { compute as compute_battery_runtime } from './battery-runtime/compute';
import { compute as compute_battery_series_parallel } from './battery-series-parallel/compute';
import { compute as compute_bike_gear_ratio } from './bike-gear-ratio/compute';
import { compute as compute_binomial_probability } from './binomial-probability/compute';
import { compute as compute_board_volume } from './board-volume/compute';
import { compute as compute_bonus } from './bonus/compute';
import { compute as compute_budget_50_30_20 } from './budget-50-30-20/compute';
import { compute as compute_budget_split } from './budget-split/compute';
import { compute as compute_cac } from './cac/compute';
import { compute as compute_cagr } from './cagr/compute';
import { compute as compute_calories_from_macros } from './calories-from-macros/compute';
import { compute as compute_calories_per_serving } from './calories-per-serving/compute';
import { compute as compute_car_depreciation } from './car-depreciation/compute';
import { compute as compute_centripetal_force } from './centripetal-force/compute';
import { compute as compute_churn_retention } from './churn-retention/compute';
import { compute as compute_cogs } from './cogs/compute';
import { compute as compute_cogs_unit_cost } from './cogs-unit-cost/compute';
import { compute as compute_color_convert } from './color-convert/compute';
import { compute as compute_combinatorics } from './combinatorics/compute';
import { compute as compute_commission } from './commission/compute';
import { validate as validate_commission } from './commission/validate';
import { contextualField as ctx_commission } from './commission/contextualField';
import { compute as compute_concrete } from './concrete/compute';
import { compute as compute_confidence_interval } from './confidence-interval/compute';
import { compute as compute_contribution_margin } from './contribution-margin/compute';
import { compute as compute_conversion_rate } from './conversion-rate/compute';
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
import { compute as compute_convert_fuel_economy } from './convert-fuel-economy/compute';
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
import { compute as compute_cooked_weight } from './cooked-weight/compute';
import { compute as compute_correlation } from './correlation/compute';
import { compute as compute_cpa_cpl_cpi } from './cpa-cpl-cpi/compute';
import { compute as compute_cpc } from './cpc/compute';
import { compute as compute_cpm } from './cpm/compute';
import { compute as compute_crypto_pnl } from './crypto-pnl/compute';
import { compute as compute_css_units } from './css-units/compute';
import { compute as compute_ctr } from './ctr/compute';
import { compute as compute_currency_exchange_fee } from './currency-exchange-fee/compute';
import { compute as compute_day_of_week } from './day-of-week/compute';
import { compute as compute_dca } from './dca/compute';
import { compute as compute_density } from './density/compute';
import { compute as compute_dice_probability } from './dice-probability/compute';
import { compute as compute_difference_abs_rel } from './difference-abs-rel/compute';
import { compute as compute_dilution } from './dilution/compute';
import { compute as compute_dividend_yield } from './dividend-yield/compute';
import { compute as compute_divisors } from './divisors/compute';
import { compute as compute_down_payment } from './down-payment/compute';
import { compute as compute_download_time } from './download-time/compute';
import { compute as compute_dti } from './dti/compute';
import { compute as compute_early_repayment } from './early-repayment/compute';
import { compute as compute_electricity_usage } from './electricity-usage/compute';
import { compute as compute_email_metrics } from './email-metrics/compute';
import { compute as compute_emergency_fund } from './emergency-fund/compute';
import { compute as compute_employee_cost } from './employee-cost/compute';
import { compute as compute_engagement_rate } from './engagement-rate/compute';
import { compute as compute_factorial } from './factorial/compute';
import { compute as compute_fee_chain } from './fee-chain/compute';
import { compute as compute_fibonacci } from './fibonacci/compute';
import { compute as compute_files_on_disk } from './files-on-disk/compute';
import { compute as compute_final_grade } from './final-grade/compute';
import { compute as compute_fps_frametime } from './fps-frametime/compute';
import { contextualField as ctx_fps_frametime } from './fps-frametime/contextualField';
import { compute as compute_fraction_arith } from './fraction-arith/compute';
import { compute as compute_freelance_rate } from './freelance-rate/compute';
import { compute as compute_fuel_consumption } from './fuel-consumption/compute';
import { compute as compute_gcd_lcm } from './gcd-lcm/compute';
import { compute as compute_generator_fuel } from './generator-fuel/compute';
import { compute as compute_geom_annulus } from './geom-annulus/compute';
import { compute as compute_geom_circle } from './geom-circle/compute';
import { compute as compute_geom_cone } from './geom-cone/compute';
import { compute as compute_geom_cube } from './geom-cube/compute';
import { compute as compute_geom_cuboid } from './geom-cuboid/compute';
import { compute as compute_geom_cylinder } from './geom-cylinder/compute';
import { compute as compute_geom_ellipse } from './geom-ellipse/compute';
import { compute as compute_geom_frustum } from './geom-frustum/compute';
import { compute as compute_geom_parallelogram } from './geom-parallelogram/compute';
import { compute as compute_geom_polygon_coords } from './geom-polygon-coords/compute';
import { compute as compute_geom_prism } from './geom-prism/compute';
import { compute as compute_geom_pyramid } from './geom-pyramid/compute';
import { compute as compute_geom_rectangle } from './geom-rectangle/compute';
import { compute as compute_geom_regular_polygon } from './geom-regular-polygon/compute';
import { compute as compute_geom_rhombus } from './geom-rhombus/compute';
import { compute as compute_geom_right_triangle } from './geom-right-triangle/compute';
import { compute as compute_geom_sector } from './geom-sector/compute';
import { compute as compute_geom_sphere } from './geom-sphere/compute';
import { compute as compute_geom_square } from './geom-square/compute';
import { compute as compute_geom_trapezoid } from './geom-trapezoid/compute';
import { compute as compute_geom_triangle } from './geom-triangle/compute';
import { compute as compute_golden_ratio } from './golden-ratio/compute';
import { compute as compute_gpa } from './gpa/compute';
import { compute as compute_gravitational_force } from './gravitational-force/compute';
import { compute as compute_heating_power } from './heating-power/compute';
import { compute as compute_hydrostatic_pressure } from './hydrostatic-pressure/compute';
import { compute as compute_ideal_gas_law } from './ideal-gas-law/compute';
import { compute as compute_inflation } from './inflation/compute';
import { compute as compute_installment } from './installment/compute';
import { compute as compute_insulation } from './insulation/compute';
import { compute as compute_internet_traffic } from './internet-traffic/compute';
import { compute as compute_inventory_turnover } from './inventory-turnover/compute';
import { compute as compute_inverter_power } from './inverter-power/compute';
import { compute as compute_ipv4_subnet } from './ipv4-subnet/compute';
import { compute as compute_kinetic_energy } from './kinetic-energy/compute';
import { compute as compute_leap_year } from './leap-year/compute';
import { compute as compute_led_resistor } from './led-resistor/compute';
import { compute as compute_leverage } from './leverage/compute';
import { compute as compute_linear_equation } from './linear-equation/compute';
import { compute as compute_linear_system } from './linear-system/compute';
import { compute as compute_logarithm } from './logarithm/compute';
import { contextualField as ctx_logarithm } from './logarithm/contextualField';
import { compute as compute_ltv } from './ltv/compute';
import { compute as compute_market_cap } from './market-cap/compute';
import { compute as compute_max_heart_rate } from './max-heart-rate/compute';
import { compute as compute_max_loan } from './max-loan/compute';
import { compute as compute_modular_scale } from './modular-scale/compute';
import { compute as compute_modulo } from './modulo/compute';
import { compute as compute_molar_mass } from './molar-mass/compute';
import { compute as compute_molarity } from './molarity/compute';
import { compute as compute_moles } from './moles/compute';
import { compute as compute_momentum } from './momentum/compute';
import { compute as compute_mrr_arr } from './mrr-arr/compute';
import { compute as compute_network_bandwidth } from './network-bandwidth/compute';
import { compute as compute_newton_force } from './newton-force/compute';
import { compute as compute_ohms_law } from './ohms-law/compute';
import { contextualField as ctx_ohms_law } from './ohms-law/contextualField';
import { compute as compute_overtime } from './overtime/compute';
import { compute as compute_paint_calculator } from './paint-calculator/compute';
import { compute as compute_percent_calculator } from './percent-calculator/compute';
import { validate as validate_percent_calculator } from './percent-calculator/validate';
import { contextualField as ctx_percent_calculator } from './percent-calculator/contextualField';
import { compute as compute_pet_age } from './pet-age/compute';
import { compute as compute_pet_food } from './pet-food/compute';
import { compute as compute_ph_poh } from './ph-poh/compute';
import { compute as compute_physics_power } from './physics-power/compute';
import { compute as compute_physics_torque } from './physics-torque/compute';
import { compute as compute_plaster } from './plaster/compute';
import { compute as compute_pool_fill_time } from './pool-fill-time/compute';
import { compute as compute_position_size } from './position-size/compute';
import { compute as compute_potential_energy } from './potential-energy/compute';
import { compute as compute_power_root } from './power-root/compute';
import { compute as compute_power_to_weight } from './power-to-weight/compute';
import { compute as compute_ppi_dpi } from './ppi-dpi/compute';
import { compute as compute_pressure } from './pressure/compute';
import { compute as compute_price_per_unit } from './price-per-unit/compute';
import { compute as compute_prime_factorization } from './prime-factorization/compute';
import { compute as compute_print_3d_cost } from './print-3d-cost/compute';
import { compute as compute_probability_basic } from './probability-basic/compute';
import { compute as compute_profit } from './profit/compute';
import { compute as compute_proportion } from './proportion/compute';
import { contextualField as ctx_proportion } from './proportion/contextualField';
import { compute as compute_quadratic_equation } from './quadratic-equation/compute';
import { compute as compute_rafters } from './rafters/compute';
import { compute as compute_raid } from './raid/compute';
import { compute as compute_ratio } from './ratio/compute';
import { compute as compute_reading_speed } from './reading-speed/compute';
import { compute as compute_real_return } from './real-return/compute';
import { compute as compute_recipe_cost } from './recipe-cost/compute';
import { compute as compute_recipe_scale } from './recipe-scale/compute';
import { compute as compute_rental_yield } from './rental-yield/compute';
import { compute as compute_resistor_network } from './resistor-network/compute';
import { compute as compute_return_rate } from './return-rate/compute';
import { compute as compute_revenue_per_employee } from './revenue-per-employee/compute';
import { compute as compute_risk_reward } from './risk-reward/compute';
import { compute as compute_roas } from './roas/compute';
import { compute as compute_roi } from './roi/compute';
import { compute as compute_roman_numerals } from './roman-numerals/compute';
import { compute as compute_roof_area } from './roof-area/compute';
import { compute as compute_room_volume } from './room-volume/compute';
import { compute as compute_rounding } from './rounding/compute';
import { compute as compute_rule_of_72 } from './rule-of-72/compute';
import { compute as compute_salary_convert } from './salary-convert/compute';
import { compute as compute_salary_raise } from './salary-raise/compute';
import { compute as compute_savings_goal } from './savings-goal/compute';
import { compute as compute_savings_rate } from './savings-rate/compute';
import { compute as compute_shipping_per_unit } from './shipping-per-unit/compute';
import { compute as compute_simple_interest } from './simple-interest/compute';
import { compute as compute_single_phase } from './single-phase/compute';
import { compute as compute_sleep_time } from './sleep-time/compute';
import { compute as compute_slope } from './slope/compute';
import { compute as compute_solution_concentration } from './solution-concentration/compute';
import { compute as compute_speed_distance_time } from './speed-distance-time/compute';
import { contextualField as ctx_speed_distance_time } from './speed-distance-time/contextualField';
import { compute as compute_stats_descriptive } from './stats-descriptive/compute';
import { compute as compute_stock_duration } from './stock-duration/compute';
import { compute as compute_strip_foundation } from './strip-foundation/compute';
import { compute as compute_subscriptions_cost } from './subscriptions-cost/compute';
import { compute as compute_test_score_percent } from './test-score-percent/compute';
import { compute as compute_text_reading_time } from './text-reading-time/compute';
import { compute as compute_text_word_char_count } from './text-word-char-count/compute';
import { compute as compute_time_duration } from './time-duration/compute';
import { compute as compute_time_value_money } from './time-value-money/compute';
import { compute as compute_timezone_difference } from './timezone-difference/compute';
import { compute as compute_tip } from './tip/compute';
import { compute as compute_tire_size } from './tire-size/compute';
import { compute as compute_trip_budget } from './trip-budget/compute';
import { compute as compute_trip_cost } from './trip-cost/compute';
import { compute as compute_unix_timestamp } from './unix-timestamp/compute';
import { compute as compute_utility_total } from './utility-total/compute';
import { compute as compute_vacation_accrual } from './vacation-accrual/compute';
import { compute as compute_video_file_size } from './video-file-size/compute';
import { compute as compute_vo2max } from './vo2max/compute';
import { compute as compute_water_intake } from './water-intake/compute';
import { compute as compute_wave } from './wave/compute';
import { compute as compute_week_number } from './week-number/compute';
import { compute as compute_weighted_mean } from './weighted-mean/compute';
import { compute as compute_work } from './work/compute';
import { compute as compute_work_hours } from './work-hours/compute';
import { compute as compute_workday_cost } from './workday-cost/compute';
import { compute as compute_z_score } from './z-score/compute';

export const v2Runners: Record<string, CalcFunction> = {
  'acceleration': compute_acceleration,
  'activity-calories': compute_activity_calories,
  'ad-budget-funnel': compute_ad_budget_funnel,
  'ad-roi': compute_ad_roi,
  'annuity': compute_annuity,
  'aov': compute_aov,
  'apr-apy': compute_apr_apy,
  'aquarium-water-change': compute_aquarium_water_change,
  'arithmetic-progression': compute_arithmetic_progression,
  'arpu-arppu': compute_arpu_arppu,
  'aspect-ratio': compute_aspect_ratio,
  'audience-growth': compute_audience_growth,
  'bakers-percentage': compute_bakers_percentage,
  'barbell-plates': compute_barbell_plates,
  'battery-charge-time': compute_battery_charge_time,
  'battery-runtime': compute_battery_runtime,
  'battery-series-parallel': compute_battery_series_parallel,
  'bike-gear-ratio': compute_bike_gear_ratio,
  'binomial-probability': compute_binomial_probability,
  'board-volume': compute_board_volume,
  'bonus': compute_bonus,
  'budget-50-30-20': compute_budget_50_30_20,
  'budget-split': compute_budget_split,
  'cac': compute_cac,
  'cagr': compute_cagr,
  'calories-from-macros': compute_calories_from_macros,
  'calories-per-serving': compute_calories_per_serving,
  'car-depreciation': compute_car_depreciation,
  'centripetal-force': compute_centripetal_force,
  'churn-retention': compute_churn_retention,
  'cogs': compute_cogs,
  'cogs-unit-cost': compute_cogs_unit_cost,
  'color-convert': compute_color_convert,
  'combinatorics': compute_combinatorics,
  'commission': compute_commission,
  'concrete': compute_concrete,
  'confidence-interval': compute_confidence_interval,
  'contribution-margin': compute_contribution_margin,
  'conversion-rate': compute_conversion_rate,
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
  'convert-fuel-economy': compute_convert_fuel_economy,
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
  'cooked-weight': compute_cooked_weight,
  'correlation': compute_correlation,
  'cpa-cpl-cpi': compute_cpa_cpl_cpi,
  'cpc': compute_cpc,
  'cpm': compute_cpm,
  'crypto-pnl': compute_crypto_pnl,
  'css-units': compute_css_units,
  'ctr': compute_ctr,
  'currency-exchange-fee': compute_currency_exchange_fee,
  'day-of-week': compute_day_of_week,
  'dca': compute_dca,
  'density': compute_density,
  'dice-probability': compute_dice_probability,
  'difference-abs-rel': compute_difference_abs_rel,
  'dilution': compute_dilution,
  'dividend-yield': compute_dividend_yield,
  'divisors': compute_divisors,
  'down-payment': compute_down_payment,
  'download-time': compute_download_time,
  'dti': compute_dti,
  'early-repayment': compute_early_repayment,
  'electricity-usage': compute_electricity_usage,
  'email-metrics': compute_email_metrics,
  'emergency-fund': compute_emergency_fund,
  'employee-cost': compute_employee_cost,
  'engagement-rate': compute_engagement_rate,
  'factorial': compute_factorial,
  'fee-chain': compute_fee_chain,
  'fibonacci': compute_fibonacci,
  'files-on-disk': compute_files_on_disk,
  'final-grade': compute_final_grade,
  'fps-frametime': compute_fps_frametime,
  'fraction-arith': compute_fraction_arith,
  'freelance-rate': compute_freelance_rate,
  'fuel-consumption': compute_fuel_consumption,
  'gcd-lcm': compute_gcd_lcm,
  'generator-fuel': compute_generator_fuel,
  'geom-annulus': compute_geom_annulus,
  'geom-circle': compute_geom_circle,
  'geom-cone': compute_geom_cone,
  'geom-cube': compute_geom_cube,
  'geom-cuboid': compute_geom_cuboid,
  'geom-cylinder': compute_geom_cylinder,
  'geom-ellipse': compute_geom_ellipse,
  'geom-frustum': compute_geom_frustum,
  'geom-parallelogram': compute_geom_parallelogram,
  'geom-polygon-coords': compute_geom_polygon_coords,
  'geom-prism': compute_geom_prism,
  'geom-pyramid': compute_geom_pyramid,
  'geom-rectangle': compute_geom_rectangle,
  'geom-regular-polygon': compute_geom_regular_polygon,
  'geom-rhombus': compute_geom_rhombus,
  'geom-right-triangle': compute_geom_right_triangle,
  'geom-sector': compute_geom_sector,
  'geom-sphere': compute_geom_sphere,
  'geom-square': compute_geom_square,
  'geom-trapezoid': compute_geom_trapezoid,
  'geom-triangle': compute_geom_triangle,
  'golden-ratio': compute_golden_ratio,
  'gpa': compute_gpa,
  'gravitational-force': compute_gravitational_force,
  'heating-power': compute_heating_power,
  'hydrostatic-pressure': compute_hydrostatic_pressure,
  'ideal-gas-law': compute_ideal_gas_law,
  'inflation': compute_inflation,
  'installment': compute_installment,
  'insulation': compute_insulation,
  'internet-traffic': compute_internet_traffic,
  'inventory-turnover': compute_inventory_turnover,
  'inverter-power': compute_inverter_power,
  'ipv4-subnet': compute_ipv4_subnet,
  'kinetic-energy': compute_kinetic_energy,
  'leap-year': compute_leap_year,
  'led-resistor': compute_led_resistor,
  'leverage': compute_leverage,
  'linear-equation': compute_linear_equation,
  'linear-system': compute_linear_system,
  'logarithm': compute_logarithm,
  'ltv': compute_ltv,
  'market-cap': compute_market_cap,
  'max-heart-rate': compute_max_heart_rate,
  'max-loan': compute_max_loan,
  'modular-scale': compute_modular_scale,
  'modulo': compute_modulo,
  'molar-mass': compute_molar_mass,
  'molarity': compute_molarity,
  'moles': compute_moles,
  'momentum': compute_momentum,
  'mrr-arr': compute_mrr_arr,
  'network-bandwidth': compute_network_bandwidth,
  'newton-force': compute_newton_force,
  'ohms-law': compute_ohms_law,
  'overtime': compute_overtime,
  'paint-calculator': compute_paint_calculator,
  'percent-calculator': compute_percent_calculator,
  'pet-age': compute_pet_age,
  'pet-food': compute_pet_food,
  'ph-poh': compute_ph_poh,
  'physics-power': compute_physics_power,
  'physics-torque': compute_physics_torque,
  'plaster': compute_plaster,
  'pool-fill-time': compute_pool_fill_time,
  'position-size': compute_position_size,
  'potential-energy': compute_potential_energy,
  'power-root': compute_power_root,
  'power-to-weight': compute_power_to_weight,
  'ppi-dpi': compute_ppi_dpi,
  'pressure': compute_pressure,
  'price-per-unit': compute_price_per_unit,
  'prime-factorization': compute_prime_factorization,
  'print-3d-cost': compute_print_3d_cost,
  'probability-basic': compute_probability_basic,
  'profit': compute_profit,
  'proportion': compute_proportion,
  'quadratic-equation': compute_quadratic_equation,
  'rafters': compute_rafters,
  'raid': compute_raid,
  'ratio': compute_ratio,
  'reading-speed': compute_reading_speed,
  'real-return': compute_real_return,
  'recipe-cost': compute_recipe_cost,
  'recipe-scale': compute_recipe_scale,
  'rental-yield': compute_rental_yield,
  'resistor-network': compute_resistor_network,
  'return-rate': compute_return_rate,
  'revenue-per-employee': compute_revenue_per_employee,
  'risk-reward': compute_risk_reward,
  'roas': compute_roas,
  'roi': compute_roi,
  'roman-numerals': compute_roman_numerals,
  'roof-area': compute_roof_area,
  'room-volume': compute_room_volume,
  'rounding': compute_rounding,
  'rule-of-72': compute_rule_of_72,
  'salary-convert': compute_salary_convert,
  'salary-raise': compute_salary_raise,
  'savings-goal': compute_savings_goal,
  'savings-rate': compute_savings_rate,
  'shipping-per-unit': compute_shipping_per_unit,
  'simple-interest': compute_simple_interest,
  'single-phase': compute_single_phase,
  'sleep-time': compute_sleep_time,
  'slope': compute_slope,
  'solution-concentration': compute_solution_concentration,
  'speed-distance-time': compute_speed_distance_time,
  'stats-descriptive': compute_stats_descriptive,
  'stock-duration': compute_stock_duration,
  'strip-foundation': compute_strip_foundation,
  'subscriptions-cost': compute_subscriptions_cost,
  'test-score-percent': compute_test_score_percent,
  'text-reading-time': compute_text_reading_time,
  'text-word-char-count': compute_text_word_char_count,
  'time-duration': compute_time_duration,
  'time-value-money': compute_time_value_money,
  'timezone-difference': compute_timezone_difference,
  'tip': compute_tip,
  'tire-size': compute_tire_size,
  'trip-budget': compute_trip_budget,
  'trip-cost': compute_trip_cost,
  'unix-timestamp': compute_unix_timestamp,
  'utility-total': compute_utility_total,
  'vacation-accrual': compute_vacation_accrual,
  'video-file-size': compute_video_file_size,
  'vo2max': compute_vo2max,
  'water-intake': compute_water_intake,
  'wave': compute_wave,
  'week-number': compute_week_number,
  'weighted-mean': compute_weighted_mean,
  'work': compute_work,
  'work-hours': compute_work_hours,
  'workday-cost': compute_workday_cost,
  'z-score': compute_z_score,
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
