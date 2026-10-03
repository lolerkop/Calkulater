// СГЕНЕРИРОВАНО. Не редактировать руками.
// Полный runtime-реестр для сборки и тестов. Клиентские точки входа его
// не импортируют и получают только фразы выбранного языка через Astro props.
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
import type { CalculatorLocalization } from '../lib/platform/types';
import { withSharedPhrases } from '../lib/platform/runtime';
import { TRANSLATED_LOCALES } from '../lib/platform/types';
import { v2Localization } from './localization.generated';

import { compute as compute_abv_alcohol } from './abv-alcohol/compute';
import { contextualField as ctx_abv_alcohol } from './abv-alcohol/contextualField';
import { shared as shared_abv_alcohol } from './abv-alcohol/shared.generated';
import { compute as compute_acceleration } from './acceleration/compute';
import { shared as shared_acceleration } from './acceleration/shared.generated';
import { compute as compute_activity_calories } from './activity-calories/compute';
import { shared as shared_activity_calories } from './activity-calories/shared.generated';
import { compute as compute_ad_budget_funnel } from './ad-budget-funnel/compute';
import { shared as shared_ad_budget_funnel } from './ad-budget-funnel/shared.generated';
import { compute as compute_ad_roi } from './ad-roi/compute';
import { shared as shared_ad_roi } from './ad-roi/shared.generated';
import { compute as compute_air_density } from './air-density/compute';
import { shared as shared_air_density } from './air-density/shared.generated';
import { compute as compute_air_exchange } from './air-exchange/compute';
import { shared as shared_air_exchange } from './air-exchange/shared.generated';
import { compute as compute_air_pressure_at_altitude } from './air-pressure-at-altitude/compute';
import { shared as shared_air_pressure_at_altitude } from './air-pressure-at-altitude/shared.generated';
import { compute as compute_alcohol_units } from './alcohol-units/compute';
import { contextualField as ctx_alcohol_units } from './alcohol-units/contextualField';
import { shared as shared_alcohol_units } from './alcohol-units/shared.generated';
import { compute as compute_annuity } from './annuity/compute';
import { validate as validate_annuity } from './annuity/validate';
import { shared as shared_annuity } from './annuity/shared.generated';
import { compute as compute_aov } from './aov/compute';
import { shared as shared_aov } from './aov/shared.generated';
import { compute as compute_apr_apy } from './apr-apy/compute';
import { validate as validate_apr_apy } from './apr-apy/validate';
import { shared as shared_apr_apy } from './apr-apy/shared.generated';
import { compute as compute_aquarium_water_change } from './aquarium-water-change/compute';
import { contextualField as ctx_aquarium_water_change } from './aquarium-water-change/contextualField';
import { shared as shared_aquarium_water_change } from './aquarium-water-change/shared.generated';
import { compute as compute_arithmetic_progression } from './arithmetic-progression/compute';
import { validate as validate_arithmetic_progression } from './arithmetic-progression/validate';
import { shared as shared_arithmetic_progression } from './arithmetic-progression/shared.generated';
import { compute as compute_arpu_arppu } from './arpu-arppu/compute';
import { validate as validate_arpu_arppu } from './arpu-arppu/validate';
import { shared as shared_arpu_arppu } from './arpu-arppu/shared.generated';
import { compute as compute_aspect_ratio } from './aspect-ratio/compute';
import { validate as validate_aspect_ratio } from './aspect-ratio/validate';
import { contextualField as ctx_aspect_ratio } from './aspect-ratio/contextualField';
import { shared as shared_aspect_ratio } from './aspect-ratio/shared.generated';
import { compute as compute_audience_growth } from './audience-growth/compute';
import { validate as validate_audience_growth } from './audience-growth/validate';
import { shared as shared_audience_growth } from './audience-growth/shared.generated';
import { compute as compute_bakers_percentage } from './bakers-percentage/compute';
import { contextualField as ctx_bakers_percentage } from './bakers-percentage/contextualField';
import { shared as shared_bakers_percentage } from './bakers-percentage/shared.generated';
import { compute as compute_baluster_spacing } from './baluster-spacing/compute';
import { shared as shared_baluster_spacing } from './baluster-spacing/shared.generated';
import { compute as compute_barbell_plates } from './barbell-plates/compute';
import { shared as shared_barbell_plates } from './barbell-plates/shared.generated';
import { compute as compute_battery_charge_time } from './battery-charge-time/compute';
import { shared as shared_battery_charge_time } from './battery-charge-time/shared.generated';
import { compute as compute_battery_runtime } from './battery-runtime/compute';
import { shared as shared_battery_runtime } from './battery-runtime/shared.generated';
import { compute as compute_battery_series_parallel } from './battery-series-parallel/compute';
import { validate as validate_battery_series_parallel } from './battery-series-parallel/validate';
import { shared as shared_battery_series_parallel } from './battery-series-parallel/shared.generated';
import { compute as compute_beam_deflection } from './beam-deflection/compute';
import { contextualField as ctx_beam_deflection } from './beam-deflection/contextualField';
import { shared as shared_beam_deflection } from './beam-deflection/shared.generated';
import { compute as compute_beam_stress } from './beam-stress/compute';
import { shared as shared_beam_stress } from './beam-stress/shared.generated';
import { compute as compute_belt_length } from './belt-length/compute';
import { shared as shared_belt_length } from './belt-length/shared.generated';
import { compute as compute_bernoulli } from './bernoulli/compute';
import { shared as shared_bernoulli } from './bernoulli/shared.generated';
import { compute as compute_bike_gear_ratio } from './bike-gear-ratio/compute';
import { shared as shared_bike_gear_ratio } from './bike-gear-ratio/shared.generated';
import { compute as compute_bike_wheel_size } from './bike-wheel-size/compute';
import { shared as shared_bike_wheel_size } from './bike-wheel-size/shared.generated';
import { compute as compute_binomial_probability } from './binomial-probability/compute';
import { validate as validate_binomial_probability } from './binomial-probability/validate';
import { shared as shared_binomial_probability } from './binomial-probability/shared.generated';
import { compute as compute_board_volume } from './board-volume/compute';
import { validate as validate_board_volume } from './board-volume/validate';
import { shared as shared_board_volume } from './board-volume/shared.generated';
import { compute as compute_boiling_point } from './boiling-point/compute';
import { shared as shared_boiling_point } from './boiling-point/shared.generated';
import { compute as compute_bonus } from './bonus/compute';
import { shared as shared_bonus } from './bonus/shared.generated';
import { compute as compute_brew_ratio } from './brew-ratio/compute';
import { contextualField as ctx_brew_ratio } from './brew-ratio/contextualField';
import { shared as shared_brew_ratio } from './brew-ratio/shared.generated';
import { compute as compute_budget_50_30_20 } from './budget-50-30-20/compute';
import { contextualField as ctx_budget_50_30_20 } from './budget-50-30-20/contextualField';
import { shared as shared_budget_50_30_20 } from './budget-50-30-20/shared.generated';
import { compute as compute_budget_split } from './budget-split/compute';
import { shared as shared_budget_split } from './budget-split/shared.generated';
import { compute as compute_bulk_material_volume } from './bulk-material-volume/compute';
import { shared as shared_bulk_material_volume } from './bulk-material-volume/shared.generated';
import { compute as compute_buoyancy } from './buoyancy/compute';
import { shared as shared_buoyancy } from './buoyancy/shared.generated';
import { compute as compute_cac } from './cac/compute';
import { shared as shared_cac } from './cac/shared.generated';
import { compute as compute_cagr } from './cagr/compute';
import { contextualField as ctx_cagr } from './cagr/contextualField';
import { shared as shared_cagr } from './cagr/shared.generated';
import { compute as compute_calories_from_macros } from './calories-from-macros/compute';
import { shared as shared_calories_from_macros } from './calories-from-macros/shared.generated';
import { compute as compute_calories_per_serving } from './calories-per-serving/compute';
import { contextualField as ctx_calories_per_serving } from './calories-per-serving/contextualField';
import { shared as shared_calories_per_serving } from './calories-per-serving/shared.generated';
import { compute as compute_capacitor_basics } from './capacitor-basics/compute';
import { contextualField as ctx_capacitor_basics } from './capacitor-basics/contextualField';
import { shared as shared_capacitor_basics } from './capacitor-basics/shared.generated';
import { compute as compute_capacitor_network } from './capacitor-network/compute';
import { shared as shared_capacitor_network } from './capacitor-network/shared.generated';
import { compute as compute_car_depreciation } from './car-depreciation/compute';
import { validate as validate_car_depreciation } from './car-depreciation/validate';
import { shared as shared_car_depreciation } from './car-depreciation/shared.generated';
import { compute as compute_carnot } from './carnot/compute';
import { shared as shared_carnot } from './carnot/shared.generated';
import { compute as compute_centripetal_force } from './centripetal-force/compute';
import { shared as shared_centripetal_force } from './centripetal-force/shared.generated';
import { compute as compute_churn_retention } from './churn-retention/compute';
import { validate as validate_churn_retention } from './churn-retention/validate';
import { contextualField as ctx_churn_retention } from './churn-retention/contextualField';
import { shared as shared_churn_retention } from './churn-retention/shared.generated';
import { compute as compute_cladding_boards } from './cladding-boards/compute';
import { shared as shared_cladding_boards } from './cladding-boards/shared.generated';
import { compute as compute_coaxial_cable_impedance } from './coaxial-cable-impedance/compute';
import { contextualField as ctx_coaxial_cable_impedance } from './coaxial-cable-impedance/contextualField';
import { shared as shared_coaxial_cable_impedance } from './coaxial-cable-impedance/shared.generated';
import { compute as compute_cogs } from './cogs/compute';
import { shared as shared_cogs } from './cogs/shared.generated';
import { compute as compute_cogs_unit_cost } from './cogs-unit-cost/compute';
import { validate as validate_cogs_unit_cost } from './cogs-unit-cost/validate';
import { shared as shared_cogs_unit_cost } from './cogs-unit-cost/shared.generated';
import { compute as compute_color_convert } from './color-convert/compute';
import { shared as shared_color_convert } from './color-convert/shared.generated';
import { compute as compute_combinatorics } from './combinatorics/compute';
import { validate as validate_combinatorics } from './combinatorics/validate';
import { shared as shared_combinatorics } from './combinatorics/shared.generated';
import { compute as compute_commission } from './commission/compute';
import { validate as validate_commission } from './commission/validate';
import { contextualField as ctx_commission } from './commission/contextualField';
import { shared as shared_commission } from './commission/shared.generated';
import { compute as compute_compression_ratio } from './compression-ratio/compute';
import { shared as shared_compression_ratio } from './compression-ratio/shared.generated';
import { compute as compute_concrete } from './concrete/compute';
import { validate as validate_concrete } from './concrete/validate';
import { shared as shared_concrete } from './concrete/shared.generated';
import { compute as compute_confidence_interval } from './confidence-interval/compute';
import { validate as validate_confidence_interval } from './confidence-interval/validate';
import { shared as shared_confidence_interval } from './confidence-interval/shared.generated';
import { compute as compute_contribution_margin } from './contribution-margin/compute';
import { shared as shared_contribution_margin } from './contribution-margin/shared.generated';
import { compute as compute_conversion_rate } from './conversion-rate/compute';
import { shared as shared_conversion_rate } from './conversion-rate/shared.generated';
import { compute as compute_convert_angle } from './convert-angle/compute';
import { shared as shared_convert_angle } from './convert-angle/shared.generated';
import { compute as compute_convert_area } from './convert-area/compute';
import { shared as shared_convert_area } from './convert-area/shared.generated';
import { compute as compute_convert_cooking_volume } from './convert-cooking-volume/compute';
import { shared as shared_convert_cooking_volume } from './convert-cooking-volume/shared.generated';
import { compute as compute_convert_cooking_weight } from './convert-cooking-weight/compute';
import { shared as shared_convert_cooking_weight } from './convert-cooking-weight/shared.generated';
import { compute as compute_convert_data_rate } from './convert-data-rate/compute';
import { shared as shared_convert_data_rate } from './convert-data-rate/shared.generated';
import { compute as compute_convert_density } from './convert-density/compute';
import { shared as shared_convert_density } from './convert-density/shared.generated';
import { compute as compute_convert_digital } from './convert-digital/compute';
import { shared as shared_convert_digital } from './convert-digital/shared.generated';
import { compute as compute_convert_energy } from './convert-energy/compute';
import { shared as shared_convert_energy } from './convert-energy/shared.generated';
import { compute as compute_convert_flow } from './convert-flow/compute';
import { shared as shared_convert_flow } from './convert-flow/shared.generated';
import { compute as compute_convert_force } from './convert-force/compute';
import { shared as shared_convert_force } from './convert-force/shared.generated';
import { compute as compute_convert_frequency } from './convert-frequency/compute';
import { shared as shared_convert_frequency } from './convert-frequency/shared.generated';
import { compute as compute_convert_fuel_economy } from './convert-fuel-economy/compute';
import { shared as shared_convert_fuel_economy } from './convert-fuel-economy/shared.generated';
import { compute as compute_convert_illuminance } from './convert-illuminance/compute';
import { shared as shared_convert_illuminance } from './convert-illuminance/shared.generated';
import { compute as compute_convert_length } from './convert-length/compute';
import { shared as shared_convert_length } from './convert-length/shared.generated';
import { compute as compute_convert_mass } from './convert-mass/compute';
import { shared as shared_convert_mass } from './convert-mass/shared.generated';
import { compute as compute_convert_power } from './convert-power/compute';
import { shared as shared_convert_power } from './convert-power/shared.generated';
import { compute as compute_convert_pressure } from './convert-pressure/compute';
import { shared as shared_convert_pressure } from './convert-pressure/shared.generated';
import { compute as compute_convert_radiation } from './convert-radiation/compute';
import { shared as shared_convert_radiation } from './convert-radiation/shared.generated';
import { compute as compute_convert_speed } from './convert-speed/compute';
import { shared as shared_convert_speed } from './convert-speed/shared.generated';
import { compute as compute_convert_temperature } from './convert-temperature/compute';
import { shared as shared_convert_temperature } from './convert-temperature/shared.generated';
import { compute as compute_convert_time } from './convert-time/compute';
import { shared as shared_convert_time } from './convert-time/shared.generated';
import { compute as compute_convert_torque } from './convert-torque/compute';
import { shared as shared_convert_torque } from './convert-torque/shared.generated';
import { compute as compute_convert_volume } from './convert-volume/compute';
import { shared as shared_convert_volume } from './convert-volume/shared.generated';
import { compute as compute_cooked_weight } from './cooked-weight/compute';
import { contextualField as ctx_cooked_weight } from './cooked-weight/contextualField';
import { shared as shared_cooked_weight } from './cooked-weight/shared.generated';
import { compute as compute_coordinate_convert } from './coordinate-convert/compute';
import { validate as validate_coordinate_convert } from './coordinate-convert/validate';
import { shared as shared_coordinate_convert } from './coordinate-convert/shared.generated';
import { compute as compute_correlation } from './correlation/compute';
import { shared as shared_correlation } from './correlation/shared.generated';
import { compute as compute_coulomb } from './coulomb/compute';
import { shared as shared_coulomb } from './coulomb/shared.generated';
import { compute as compute_cpa_cpl_cpi } from './cpa-cpl-cpi/compute';
import { shared as shared_cpa_cpl_cpi } from './cpa-cpl-cpi/shared.generated';
import { compute as compute_cpc } from './cpc/compute';
import { validate as validate_cpc } from './cpc/validate';
import { shared as shared_cpc } from './cpc/shared.generated';
import { compute as compute_cpm } from './cpm/compute';
import { validate as validate_cpm } from './cpm/validate';
import { shared as shared_cpm } from './cpm/shared.generated';
import { compute as compute_credit_card_payoff } from './credit-card-payoff/compute';
import { shared as shared_credit_card_payoff } from './credit-card-payoff/shared.generated';
import { compute as compute_crypto_pnl } from './crypto-pnl/compute';
import { shared as shared_crypto_pnl } from './crypto-pnl/shared.generated';
import { compute as compute_css_units } from './css-units/compute';
import { contextualField as ctx_css_units } from './css-units/contextualField';
import { shared as shared_css_units } from './css-units/shared.generated';
import { compute as compute_ctr } from './ctr/compute';
import { validate as validate_ctr } from './ctr/validate';
import { shared as shared_ctr } from './ctr/shared.generated';
import { compute as compute_currency_exchange_fee } from './currency-exchange-fee/compute';
import { contextualField as ctx_currency_exchange_fee } from './currency-exchange-fee/contextualField';
import { shared as shared_currency_exchange_fee } from './currency-exchange-fee/shared.generated';
import { compute as compute_curtain_size } from './curtain-size/compute';
import { shared as shared_curtain_size } from './curtain-size/shared.generated';
import { compute as compute_cycle_time } from './cycle-time/compute';
import { validate as validate_cycle_time } from './cycle-time/validate';
import { contextualField as ctx_cycle_time } from './cycle-time/contextualField';
import { shared as shared_cycle_time } from './cycle-time/shared.generated';
import { compute as compute_day_of_week } from './day-of-week/compute';
import { validateDate as validateDate_day_of_week } from './day-of-week/validateDate';
import { shared as shared_day_of_week } from './day-of-week/shared.generated';
import { compute as compute_dca } from './dca/compute';
import { validate as validate_dca } from './dca/validate';
import { shared as shared_dca } from './dca/shared.generated';
import { compute as compute_de_broglie } from './de-broglie/compute';
import { shared as shared_de_broglie } from './de-broglie/shared.generated';
import { compute as compute_debt_snowball_avalanche } from './debt-snowball-avalanche/compute';
import { shared as shared_debt_snowball_avalanche } from './debt-snowball-avalanche/shared.generated';
import { compute as compute_decibel } from './decibel/compute';
import { contextualField as ctx_decibel } from './decibel/contextualField';
import { shared as shared_decibel } from './decibel/shared.generated';
import { compute as compute_density } from './density/compute';
import { shared as shared_density } from './density/shared.generated';
import { compute as compute_depreciation_methods } from './depreciation-methods/compute';
import { validate as validate_depreciation_methods } from './depreciation-methods/validate';
import { shared as shared_depreciation_methods } from './depreciation-methods/shared.generated';
import { compute as compute_dew_point } from './dew-point/compute';
import { shared as shared_dew_point } from './dew-point/shared.generated';
import { compute as compute_dice_probability } from './dice-probability/compute';
import { validate as validate_dice_probability } from './dice-probability/validate';
import { shared as shared_dice_probability } from './dice-probability/shared.generated';
import { compute as compute_difference_abs_rel } from './difference-abs-rel/compute';
import { shared as shared_difference_abs_rel } from './difference-abs-rel/shared.generated';
import { compute as compute_dilution } from './dilution/compute';
import { shared as shared_dilution } from './dilution/shared.generated';
import { compute as compute_dividend_yield } from './dividend-yield/compute';
import { shared as shared_dividend_yield } from './dividend-yield/shared.generated';
import { compute as compute_divisors } from './divisors/compute';
import { validate as validate_divisors } from './divisors/validate';
import { shared as shared_divisors } from './divisors/shared.generated';
import { compute as compute_doppler } from './doppler/compute';
import { shared as shared_doppler } from './doppler/shared.generated';
import { compute as compute_down_payment } from './down-payment/compute';
import { shared as shared_down_payment } from './down-payment/shared.generated';
import { compute as compute_download_time } from './download-time/compute';
import { contextualField as ctx_download_time } from './download-time/contextualField';
import { shared as shared_download_time } from './download-time/shared.generated';
import { compute as compute_drip_water_leak } from './drip-water-leak/compute';
import { contextualField as ctx_drip_water_leak } from './drip-water-leak/contextualField';
import { shared as shared_drip_water_leak } from './drip-water-leak/shared.generated';
import { compute as compute_drywall } from './drywall/compute';
import { validate as validate_drywall } from './drywall/validate';
import { shared as shared_drywall } from './drywall/shared.generated';
import { compute as compute_dti } from './dti/compute';
import { contextualField as ctx_dti } from './dti/contextualField';
import { shared as shared_dti } from './dti/shared.generated';
import { compute as compute_early_repayment } from './early-repayment/compute';
import { contextualField as ctx_early_repayment } from './early-repayment/contextualField';
import { shared as shared_early_repayment } from './early-repayment/shared.generated';
import { compute as compute_electricity_usage } from './electricity-usage/compute';
import { validate as validate_electricity_usage } from './electricity-usage/validate';
import { contextualField as ctx_electricity_usage } from './electricity-usage/contextualField';
import { shared as shared_electricity_usage } from './electricity-usage/shared.generated';
import { compute as compute_email_metrics } from './email-metrics/compute';
import { validate as validate_email_metrics } from './email-metrics/validate';
import { contextualField as ctx_email_metrics } from './email-metrics/contextualField';
import { shared as shared_email_metrics } from './email-metrics/shared.generated';
import { compute as compute_emergency_fund } from './emergency-fund/compute';
import { contextualField as ctx_emergency_fund } from './emergency-fund/contextualField';
import { shared as shared_emergency_fund } from './emergency-fund/shared.generated';
import { compute as compute_employee_cost } from './employee-cost/compute';
import { contextualField as ctx_employee_cost } from './employee-cost/contextualField';
import { shared as shared_employee_cost } from './employee-cost/shared.generated';
import { compute as compute_engagement_rate } from './engagement-rate/compute';
import { validate as validate_engagement_rate } from './engagement-rate/validate';
import { shared as shared_engagement_rate } from './engagement-rate/shared.generated';
import { compute as compute_engine_displacement } from './engine-displacement/compute';
import { validate as validate_engine_displacement } from './engine-displacement/validate';
import { shared as shared_engine_displacement } from './engine-displacement/shared.generated';
import { compute as compute_epoxy_volume } from './epoxy-volume/compute';
import { shared as shared_epoxy_volume } from './epoxy-volume/shared.generated';
import { compute as compute_escape_velocity } from './escape-velocity/compute';
import { shared as shared_escape_velocity } from './escape-velocity/shared.generated';
import { compute as compute_factorial } from './factorial/compute';
import { validate as validate_factorial } from './factorial/validate';
import { shared as shared_factorial } from './factorial/shared.generated';
import { compute as compute_fee_chain } from './fee-chain/compute';
import { contextualField as ctx_fee_chain } from './fee-chain/contextualField';
import { shared as shared_fee_chain } from './fee-chain/shared.generated';
import { compute as compute_fence } from './fence/compute';
import { validate as validate_fence } from './fence/validate';
import { shared as shared_fence } from './fence/shared.generated';
import { compute as compute_fibonacci } from './fibonacci/compute';
import { validate as validate_fibonacci } from './fibonacci/validate';
import { shared as shared_fibonacci } from './fibonacci/shared.generated';
import { compute as compute_files_on_disk } from './files-on-disk/compute';
import { contextualField as ctx_files_on_disk } from './files-on-disk/contextualField';
import { shared as shared_files_on_disk } from './files-on-disk/shared.generated';
import { compute as compute_final_grade } from './final-grade/compute';
import { contextualField as ctx_final_grade } from './final-grade/contextualField';
import { shared as shared_final_grade } from './final-grade/shared.generated';
import { compute as compute_fps_frametime } from './fps-frametime/compute';
import { contextualField as ctx_fps_frametime } from './fps-frametime/contextualField';
import { shared as shared_fps_frametime } from './fps-frametime/shared.generated';
import { compute as compute_fraction_arith } from './fraction-arith/compute';
import { validate as validate_fraction_arith } from './fraction-arith/validate';
import { shared as shared_fraction_arith } from './fraction-arith/shared.generated';
import { compute as compute_free_fall } from './free-fall/compute';
import { shared as shared_free_fall } from './free-fall/shared.generated';
import { compute as compute_freelance_rate } from './freelance-rate/compute';
import { shared as shared_freelance_rate } from './freelance-rate/shared.generated';
import { compute as compute_fuel_consumption } from './fuel-consumption/compute';
import { shared as shared_fuel_consumption } from './fuel-consumption/shared.generated';
import { compute as compute_fuel_oil_mix } from './fuel-oil-mix/compute';
import { shared as shared_fuel_oil_mix } from './fuel-oil-mix/shared.generated';
import { compute as compute_gas_laws } from './gas-laws/compute';
import { contextualField as ctx_gas_laws } from './gas-laws/contextualField';
import { shared as shared_gas_laws } from './gas-laws/shared.generated';
import { compute as compute_gcd_lcm } from './gcd-lcm/compute';
import { shared as shared_gcd_lcm } from './gcd-lcm/shared.generated';
import { compute as compute_generator_fuel } from './generator-fuel/compute';
import { contextualField as ctx_generator_fuel } from './generator-fuel/contextualField';
import { shared as shared_generator_fuel } from './generator-fuel/shared.generated';
import { compute as compute_geom_annulus } from './geom-annulus/compute';
import { contextualField as ctx_geom_annulus } from './geom-annulus/contextualField';
import { shared as shared_geom_annulus } from './geom-annulus/shared.generated';
import { compute as compute_geom_circle } from './geom-circle/compute';
import { contextualField as ctx_geom_circle } from './geom-circle/contextualField';
import { shared as shared_geom_circle } from './geom-circle/shared.generated';
import { compute as compute_geom_cone } from './geom-cone/compute';
import { contextualField as ctx_geom_cone } from './geom-cone/contextualField';
import { shared as shared_geom_cone } from './geom-cone/shared.generated';
import { compute as compute_geom_cube } from './geom-cube/compute';
import { contextualField as ctx_geom_cube } from './geom-cube/contextualField';
import { shared as shared_geom_cube } from './geom-cube/shared.generated';
import { compute as compute_geom_cuboid } from './geom-cuboid/compute';
import { contextualField as ctx_geom_cuboid } from './geom-cuboid/contextualField';
import { shared as shared_geom_cuboid } from './geom-cuboid/shared.generated';
import { compute as compute_geom_cylinder } from './geom-cylinder/compute';
import { contextualField as ctx_geom_cylinder } from './geom-cylinder/contextualField';
import { shared as shared_geom_cylinder } from './geom-cylinder/shared.generated';
import { compute as compute_geom_ellipse } from './geom-ellipse/compute';
import { contextualField as ctx_geom_ellipse } from './geom-ellipse/contextualField';
import { shared as shared_geom_ellipse } from './geom-ellipse/shared.generated';
import { compute as compute_geom_frustum } from './geom-frustum/compute';
import { contextualField as ctx_geom_frustum } from './geom-frustum/contextualField';
import { shared as shared_geom_frustum } from './geom-frustum/shared.generated';
import { compute as compute_geom_parallelogram } from './geom-parallelogram/compute';
import { contextualField as ctx_geom_parallelogram } from './geom-parallelogram/contextualField';
import { shared as shared_geom_parallelogram } from './geom-parallelogram/shared.generated';
import { compute as compute_geom_polygon_coords } from './geom-polygon-coords/compute';
import { contextualField as ctx_geom_polygon_coords } from './geom-polygon-coords/contextualField';
import { shared as shared_geom_polygon_coords } from './geom-polygon-coords/shared.generated';
import { compute as compute_geom_prism } from './geom-prism/compute';
import { validate as validate_geom_prism } from './geom-prism/validate';
import { contextualField as ctx_geom_prism } from './geom-prism/contextualField';
import { shared as shared_geom_prism } from './geom-prism/shared.generated';
import { compute as compute_geom_pyramid } from './geom-pyramid/compute';
import { validate as validate_geom_pyramid } from './geom-pyramid/validate';
import { contextualField as ctx_geom_pyramid } from './geom-pyramid/contextualField';
import { shared as shared_geom_pyramid } from './geom-pyramid/shared.generated';
import { compute as compute_geom_rectangle } from './geom-rectangle/compute';
import { contextualField as ctx_geom_rectangle } from './geom-rectangle/contextualField';
import { shared as shared_geom_rectangle } from './geom-rectangle/shared.generated';
import { compute as compute_geom_regular_polygon } from './geom-regular-polygon/compute';
import { validate as validate_geom_regular_polygon } from './geom-regular-polygon/validate';
import { contextualField as ctx_geom_regular_polygon } from './geom-regular-polygon/contextualField';
import { shared as shared_geom_regular_polygon } from './geom-regular-polygon/shared.generated';
import { compute as compute_geom_rhombus } from './geom-rhombus/compute';
import { contextualField as ctx_geom_rhombus } from './geom-rhombus/contextualField';
import { shared as shared_geom_rhombus } from './geom-rhombus/shared.generated';
import { compute as compute_geom_right_triangle } from './geom-right-triangle/compute';
import { contextualField as ctx_geom_right_triangle } from './geom-right-triangle/contextualField';
import { shared as shared_geom_right_triangle } from './geom-right-triangle/shared.generated';
import { compute as compute_geom_sector } from './geom-sector/compute';
import { contextualField as ctx_geom_sector } from './geom-sector/contextualField';
import { shared as shared_geom_sector } from './geom-sector/shared.generated';
import { compute as compute_geom_sphere } from './geom-sphere/compute';
import { contextualField as ctx_geom_sphere } from './geom-sphere/contextualField';
import { shared as shared_geom_sphere } from './geom-sphere/shared.generated';
import { compute as compute_geom_square } from './geom-square/compute';
import { contextualField as ctx_geom_square } from './geom-square/contextualField';
import { shared as shared_geom_square } from './geom-square/shared.generated';
import { compute as compute_geom_trapezoid } from './geom-trapezoid/compute';
import { contextualField as ctx_geom_trapezoid } from './geom-trapezoid/contextualField';
import { shared as shared_geom_trapezoid } from './geom-trapezoid/shared.generated';
import { compute as compute_geom_triangle } from './geom-triangle/compute';
import { contextualField as ctx_geom_triangle } from './geom-triangle/contextualField';
import { shared as shared_geom_triangle } from './geom-triangle/shared.generated';
import { compute as compute_geometric_progression } from './geometric-progression/compute';
import { validate as validate_geometric_progression } from './geometric-progression/validate';
import { shared as shared_geometric_progression } from './geometric-progression/shared.generated';
import { compute as compute_golden_ratio } from './golden-ratio/compute';
import { contextualField as ctx_golden_ratio } from './golden-ratio/contextualField';
import { shared as shared_golden_ratio } from './golden-ratio/shared.generated';
import { compute as compute_gpa } from './gpa/compute';
import { contextualField as ctx_gpa } from './gpa/contextualField';
import { shared as shared_gpa } from './gpa/shared.generated';
import { compute as compute_gravitational_force } from './gravitational-force/compute';
import { shared as shared_gravitational_force } from './gravitational-force/shared.generated';
import { compute as compute_half_life } from './half-life/compute';
import { shared as shared_half_life } from './half-life/shared.generated';
import { compute as compute_headphone_power } from './headphone-power/compute';
import { contextualField as ctx_headphone_power } from './headphone-power/contextualField';
import { shared as shared_headphone_power } from './headphone-power/shared.generated';
import { compute as compute_heat_index } from './heat-index/compute';
import { shared as shared_heat_index } from './heat-index/shared.generated';
import { compute as compute_heating_power } from './heating-power/compute';
import { validate as validate_heating_power } from './heating-power/validate';
import { contextualField as ctx_heating_power } from './heating-power/contextualField';
import { shared as shared_heating_power } from './heating-power/shared.generated';
import { compute as compute_home_equity } from './home-equity/compute';
import { contextualField as ctx_home_equity } from './home-equity/contextualField';
import { shared as shared_home_equity } from './home-equity/shared.generated';
import { compute as compute_hooke_law } from './hooke-law/compute';
import { contextualField as ctx_hooke_law } from './hooke-law/contextualField';
import { shared as shared_hooke_law } from './hooke-law/shared.generated';
import { compute as compute_humidity_convert } from './humidity-convert/compute';
import { shared as shared_humidity_convert } from './humidity-convert/shared.generated';
import { compute as compute_hydrostatic_pressure } from './hydrostatic-pressure/compute';
import { shared as shared_hydrostatic_pressure } from './hydrostatic-pressure/shared.generated';
import { compute as compute_ideal_gas_law } from './ideal-gas-law/compute';
import { contextualField as ctx_ideal_gas_law } from './ideal-gas-law/contextualField';
import { shared as shared_ideal_gas_law } from './ideal-gas-law/shared.generated';
import { compute as compute_ideal_weight } from './ideal-weight/compute';
import { shared as shared_ideal_weight } from './ideal-weight/shared.generated';
import { compute as compute_inclined_plane } from './inclined-plane/compute';
import { shared as shared_inclined_plane } from './inclined-plane/shared.generated';
import { compute as compute_inflation } from './inflation/compute';
import { contextualField as ctx_inflation } from './inflation/contextualField';
import { shared as shared_inflation } from './inflation/shared.generated';
import { compute as compute_installment } from './installment/compute';
import { validate as validate_installment } from './installment/validate';
import { contextualField as ctx_installment } from './installment/contextualField';
import { shared as shared_installment } from './installment/shared.generated';
import { compute as compute_insulation } from './insulation/compute';
import { validate as validate_insulation } from './insulation/validate';
import { shared as shared_insulation } from './insulation/shared.generated';
import { compute as compute_internet_traffic } from './internet-traffic/compute';
import { contextualField as ctx_internet_traffic } from './internet-traffic/contextualField';
import { shared as shared_internet_traffic } from './internet-traffic/shared.generated';
import { compute as compute_inventory_turnover } from './inventory-turnover/compute';
import { contextualField as ctx_inventory_turnover } from './inventory-turnover/contextualField';
import { shared as shared_inventory_turnover } from './inventory-turnover/shared.generated';
import { compute as compute_inverse_square } from './inverse-square/compute';
import { shared as shared_inverse_square } from './inverse-square/shared.generated';
import { compute as compute_inverter_power } from './inverter-power/compute';
import { contextualField as ctx_inverter_power } from './inverter-power/contextualField';
import { shared as shared_inverter_power } from './inverter-power/shared.generated';
import { compute as compute_ipv4_subnet } from './ipv4-subnet/compute';
import { validate as validate_ipv4_subnet } from './ipv4-subnet/validate';
import { contextualField as ctx_ipv4_subnet } from './ipv4-subnet/contextualField';
import { shared as shared_ipv4_subnet } from './ipv4-subnet/shared.generated';
import { compute as compute_kinetic_energy } from './kinetic-energy/compute';
import { shared as shared_kinetic_energy } from './kinetic-energy/shared.generated';
import { compute as compute_kva_kw } from './kva-kw/compute';
import { contextualField as ctx_kva_kw } from './kva-kw/contextualField';
import { shared as shared_kva_kw } from './kva-kw/shared.generated';
import { compute as compute_lc_resonance } from './lc-resonance/compute';
import { contextualField as ctx_lc_resonance } from './lc-resonance/contextualField';
import { shared as shared_lc_resonance } from './lc-resonance/shared.generated';
import { compute as compute_leap_year } from './leap-year/compute';
import { validate as validate_leap_year } from './leap-year/validate';
import { shared as shared_leap_year } from './leap-year/shared.generated';
import { compute as compute_lease_payment } from './lease-payment/compute';
import { validate as validate_lease_payment } from './lease-payment/validate';
import { shared as shared_lease_payment } from './lease-payment/shared.generated';
import { compute as compute_led_resistor } from './led-resistor/compute';
import { contextualField as ctx_led_resistor } from './led-resistor/contextualField';
import { shared as shared_led_resistor } from './led-resistor/shared.generated';
import { compute as compute_lever_moment } from './lever-moment/compute';
import { contextualField as ctx_lever_moment } from './lever-moment/contextualField';
import { shared as shared_lever_moment } from './lever-moment/shared.generated';
import { compute as compute_leverage } from './leverage/compute';
import { contextualField as ctx_leverage } from './leverage/contextualField';
import { shared as shared_leverage } from './leverage/shared.generated';
import { compute as compute_lighting } from './lighting/compute';
import { contextualField as ctx_lighting } from './lighting/contextualField';
import { shared as shared_lighting } from './lighting/shared.generated';
import { compute as compute_linear_equation } from './linear-equation/compute';
import { shared as shared_linear_equation } from './linear-equation/shared.generated';
import { compute as compute_linear_system } from './linear-system/compute';
import { shared as shared_linear_system } from './linear-system/shared.generated';
import { compute as compute_linoleum } from './linoleum/compute';
import { shared as shared_linoleum } from './linoleum/shared.generated';
import { compute as compute_logarithm } from './logarithm/compute';
import { contextualField as ctx_logarithm } from './logarithm/contextualField';
import { shared as shared_logarithm } from './logarithm/shared.generated';
import { compute as compute_ltv } from './ltv/compute';
import { contextualField as ctx_ltv } from './ltv/contextualField';
import { shared as shared_ltv } from './ltv/shared.generated';
import { compute as compute_luggage_linear } from './luggage-linear/compute';
import { shared as shared_luggage_linear } from './luggage-linear/shared.generated';
import { compute as compute_mach_number } from './mach-number/compute';
import { shared as shared_mach_number } from './mach-number/shared.generated';
import { compute as compute_market_cap } from './market-cap/compute';
import { validate as validate_market_cap } from './market-cap/validate';
import { contextualField as ctx_market_cap } from './market-cap/contextualField';
import { shared as shared_market_cap } from './market-cap/shared.generated';
import { compute as compute_mass_energy } from './mass-energy/compute';
import { shared as shared_mass_energy } from './mass-energy/shared.generated';
import { compute as compute_max_heart_rate } from './max-heart-rate/compute';
import { shared as shared_max_heart_rate } from './max-heart-rate/shared.generated';
import { compute as compute_max_loan } from './max-loan/compute';
import { contextualField as ctx_max_loan } from './max-loan/contextualField';
import { shared as shared_max_loan } from './max-loan/shared.generated';
import { compute as compute_metal_weight } from './metal-weight/compute';
import { shared as shared_metal_weight } from './metal-weight/shared.generated';
import { compute as compute_miter_angle } from './miter-angle/compute';
import { shared as shared_miter_angle } from './miter-angle/shared.generated';
import { compute as compute_modular_scale } from './modular-scale/compute';
import { validate as validate_modular_scale } from './modular-scale/validate';
import { contextualField as ctx_modular_scale } from './modular-scale/contextualField';
import { shared as shared_modular_scale } from './modular-scale/shared.generated';
import { compute as compute_modulo } from './modulo/compute';
import { validate as validate_modulo } from './modulo/validate';
import { shared as shared_modulo } from './modulo/shared.generated';
import { compute as compute_molar_mass } from './molar-mass/compute';
import { shared as shared_molar_mass } from './molar-mass/shared.generated';
import { compute as compute_molarity } from './molarity/compute';
import { shared as shared_molarity } from './molarity/shared.generated';
import { compute as compute_moles } from './moles/compute';
import { shared as shared_moles } from './moles/shared.generated';
import { compute as compute_moment_of_inertia } from './moment-of-inertia/compute';
import { shared as shared_moment_of_inertia } from './moment-of-inertia/shared.generated';
import { compute as compute_momentum } from './momentum/compute';
import { shared as shared_momentum } from './momentum/shared.generated';
import { compute as compute_mrr_arr } from './mrr-arr/compute';
import { validate as validate_mrr_arr } from './mrr-arr/validate';
import { contextualField as ctx_mrr_arr } from './mrr-arr/contextualField';
import { shared as shared_mrr_arr } from './mrr-arr/shared.generated';
import { compute as compute_ne555_timer_astable } from './ne555-timer-astable/compute';
import { contextualField as ctx_ne555_timer_astable } from './ne555-timer-astable/contextualField';
import { shared as shared_ne555_timer_astable } from './ne555-timer-astable/shared.generated';
import { compute as compute_network_bandwidth } from './network-bandwidth/compute';
import { validate as validate_network_bandwidth } from './network-bandwidth/validate';
import { contextualField as ctx_network_bandwidth } from './network-bandwidth/contextualField';
import { shared as shared_network_bandwidth } from './network-bandwidth/shared.generated';
import { compute as compute_newton_force } from './newton-force/compute';
import { shared as shared_newton_force } from './newton-force/shared.generated';
import { compute as compute_number_scale_names } from './number-scale-names/compute';
import { contextualField as ctx_number_scale_names } from './number-scale-names/contextualField';
import { shared as shared_number_scale_names } from './number-scale-names/shared.generated';
import { compute as compute_number_to_words } from './number-to-words/compute';
import { validate as validate_number_to_words } from './number-to-words/validate';
import { shared as shared_number_to_words } from './number-to-words/shared.generated';
import { compute as compute_ohms_law } from './ohms-law/compute';
import { contextualField as ctx_ohms_law } from './ohms-law/contextualField';
import { shared as shared_ohms_law } from './ohms-law/shared.generated';
import { compute as compute_orbital_period } from './orbital-period/compute';
import { shared as shared_orbital_period } from './orbital-period/shared.generated';
import { compute as compute_overtime } from './overtime/compute';
import { contextualField as ctx_overtime } from './overtime/contextualField';
import { shared as shared_overtime } from './overtime/shared.generated';
import { compute as compute_paint_calculator } from './paint-calculator/compute';
import { validate as validate_paint_calculator } from './paint-calculator/validate';
import { shared as shared_paint_calculator } from './paint-calculator/shared.generated';
import { compute as compute_paper_quantity } from './paper-quantity/compute';
import { validate as validate_paper_quantity } from './paper-quantity/validate';
import { shared as shared_paper_quantity } from './paper-quantity/shared.generated';
import { compute as compute_password_entropy } from './password-entropy/compute';
import { validate as validate_password_entropy } from './password-entropy/validate';
import { contextualField as ctx_password_entropy } from './password-entropy/contextualField';
import { shared as shared_password_entropy } from './password-entropy/shared.generated';
import { compute as compute_payback_period } from './payback-period/compute';
import { shared as shared_payback_period } from './payback-period/shared.generated';
import { compute as compute_pendulum } from './pendulum/compute';
import { shared as shared_pendulum } from './pendulum/shared.generated';
import { compute as compute_percent_calculator } from './percent-calculator/compute';
import { validate as validate_percent_calculator } from './percent-calculator/validate';
import { contextualField as ctx_percent_calculator } from './percent-calculator/contextualField';
import { shared as shared_percent_calculator } from './percent-calculator/shared.generated';
import { compute as compute_pet_age } from './pet-age/compute';
import { contextualField as ctx_pet_age } from './pet-age/contextualField';
import { shared as shared_pet_age } from './pet-age/shared.generated';
import { compute as compute_pet_food } from './pet-food/compute';
import { contextualField as ctx_pet_food } from './pet-food/contextualField';
import { shared as shared_pet_food } from './pet-food/shared.generated';
import { compute as compute_ph_poh } from './ph-poh/compute';
import { shared as shared_ph_poh } from './ph-poh/shared.generated';
import { compute as compute_photon_energy } from './photon-energy/compute';
import { shared as shared_photon_energy } from './photon-energy/shared.generated';
import { compute as compute_physics_power } from './physics-power/compute';
import { shared as shared_physics_power } from './physics-power/shared.generated';
import { compute as compute_physics_torque } from './physics-torque/compute';
import { shared as shared_physics_torque } from './physics-torque/shared.generated';
import { compute as compute_picture_frame_mat } from './picture-frame-mat/compute';
import { shared as shared_picture_frame_mat } from './picture-frame-mat/shared.generated';
import { compute as compute_pile_foundation } from './pile-foundation/compute';
import { validate as validate_pile_foundation } from './pile-foundation/validate';
import { shared as shared_pile_foundation } from './pile-foundation/shared.generated';
import { compute as compute_pipe_flow } from './pipe-flow/compute';
import { shared as shared_pipe_flow } from './pipe-flow/shared.generated';
import { compute as compute_pipe_weight } from './pipe-weight/compute';
import { shared as shared_pipe_weight } from './pipe-weight/shared.generated';
import { compute as compute_plaster } from './plaster/compute';
import { shared as shared_plaster } from './plaster/shared.generated';
import { compute as compute_pool_fill_time } from './pool-fill-time/compute';
import { contextualField as ctx_pool_fill_time } from './pool-fill-time/contextualField';
import { shared as shared_pool_fill_time } from './pool-fill-time/shared.generated';
import { compute as compute_position_size } from './position-size/compute';
import { contextualField as ctx_position_size } from './position-size/contextualField';
import { shared as shared_position_size } from './position-size/shared.generated';
import { compute as compute_potential_energy } from './potential-energy/compute';
import { shared as shared_potential_energy } from './potential-energy/shared.generated';
import { compute as compute_power_root } from './power-root/compute';
import { validate as validate_power_root } from './power-root/validate';
import { shared as shared_power_root } from './power-root/shared.generated';
import { compute as compute_power_to_weight } from './power-to-weight/compute';
import { contextualField as ctx_power_to_weight } from './power-to-weight/contextualField';
import { shared as shared_power_to_weight } from './power-to-weight/shared.generated';
import { compute as compute_ppi_dpi } from './ppi-dpi/compute';
import { validate as validate_ppi_dpi } from './ppi-dpi/validate';
import { contextualField as ctx_ppi_dpi } from './ppi-dpi/contextualField';
import { shared as shared_ppi_dpi } from './ppi-dpi/shared.generated';
import { compute as compute_pressure } from './pressure/compute';
import { shared as shared_pressure } from './pressure/shared.generated';
import { compute as compute_price_per_unit } from './price-per-unit/compute';
import { contextualField as ctx_price_per_unit } from './price-per-unit/contextualField';
import { shared as shared_price_per_unit } from './price-per-unit/shared.generated';
import { compute as compute_prime_factorization } from './prime-factorization/compute';
import { validate as validate_prime_factorization } from './prime-factorization/validate';
import { shared as shared_prime_factorization } from './prime-factorization/shared.generated';
import { compute as compute_print_3d_cost } from './print-3d-cost/compute';
import { contextualField as ctx_print_3d_cost } from './print-3d-cost/contextualField';
import { shared as shared_print_3d_cost } from './print-3d-cost/shared.generated';
import { compute as compute_probability_basic } from './probability-basic/compute';
import { validate as validate_probability_basic } from './probability-basic/validate';
import { shared as shared_probability_basic } from './probability-basic/shared.generated';
import { compute as compute_profit } from './profit/compute';
import { shared as shared_profit } from './profit/shared.generated';
import { compute as compute_projectile_motion } from './projectile-motion/compute';
import { shared as shared_projectile_motion } from './projectile-motion/shared.generated';
import { compute as compute_proportion } from './proportion/compute';
import { contextualField as ctx_proportion } from './proportion/contextualField';
import { shared as shared_proportion } from './proportion/shared.generated';
import { compute as compute_pyramid_frustum } from './pyramid-frustum/compute';
import { shared as shared_pyramid_frustum } from './pyramid-frustum/shared.generated';
import { compute as compute_quadratic_equation } from './quadratic-equation/compute';
import { shared as shared_quadratic_equation } from './quadratic-equation/shared.generated';
import { compute as compute_quarter_mile_elapsed_time } from './quarter-mile-elapsed-time/compute';
import { shared as shared_quarter_mile_elapsed_time } from './quarter-mile-elapsed-time/shared.generated';
import { compute as compute_quartile } from './quartile/compute';
import { shared as shared_quartile } from './quartile/shared.generated';
import { compute as compute_rafters } from './rafters/compute';
import { shared as shared_rafters } from './rafters/shared.generated';
import { compute as compute_raid } from './raid/compute';
import { validate as validate_raid } from './raid/validate';
import { contextualField as ctx_raid } from './raid/contextualField';
import { shared as shared_raid } from './raid/shared.generated';
import { compute as compute_rainfall_volume } from './rainfall-volume/compute';
import { contextualField as ctx_rainfall_volume } from './rainfall-volume/contextualField';
import { shared as shared_rainfall_volume } from './rainfall-volume/shared.generated';
import { compute as compute_ratio } from './ratio/compute';
import { shared as shared_ratio } from './ratio/shared.generated';
import { compute as compute_rc_filter } from './rc-filter/compute';
import { contextualField as ctx_rc_filter } from './rc-filter/contextualField';
import { shared as shared_rc_filter } from './rc-filter/shared.generated';
import { compute as compute_reading_speed } from './reading-speed/compute';
import { validate as validate_reading_speed } from './reading-speed/validate';
import { contextualField as ctx_reading_speed } from './reading-speed/contextualField';
import { shared as shared_reading_speed } from './reading-speed/shared.generated';
import { compute as compute_real_return } from './real-return/compute';
import { contextualField as ctx_real_return } from './real-return/contextualField';
import { shared as shared_real_return } from './real-return/shared.generated';
import { compute as compute_recipe_cost } from './recipe-cost/compute';
import { contextualField as ctx_recipe_cost } from './recipe-cost/contextualField';
import { shared as shared_recipe_cost } from './recipe-cost/shared.generated';
import { compute as compute_recipe_scale } from './recipe-scale/compute';
import { contextualField as ctx_recipe_scale } from './recipe-scale/contextualField';
import { shared as shared_recipe_scale } from './recipe-scale/shared.generated';
import { compute as compute_refinancing } from './refinancing/compute';
import { validate as validate_refinancing } from './refinancing/validate';
import { shared as shared_refinancing } from './refinancing/shared.generated';
import { compute as compute_relativity_dilation } from './relativity-dilation/compute';
import { shared as shared_relativity_dilation } from './relativity-dilation/shared.generated';
import { compute as compute_rental_yield } from './rental-yield/compute';
import { contextualField as ctx_rental_yield } from './rental-yield/contextualField';
import { shared as shared_rental_yield } from './rental-yield/shared.generated';
import { compute as compute_resistor_color } from './resistor-color/compute';
import { shared as shared_resistor_color } from './resistor-color/shared.generated';
import { compute as compute_resistor_network } from './resistor-network/compute';
import { shared as shared_resistor_network } from './resistor-network/shared.generated';
import { compute as compute_return_rate } from './return-rate/compute';
import { shared as shared_return_rate } from './return-rate/shared.generated';
import { compute as compute_revenue_per_employee } from './revenue-per-employee/compute';
import { shared as shared_revenue_per_employee } from './revenue-per-employee/shared.generated';
import { compute as compute_risk_reward } from './risk-reward/compute';
import { contextualField as ctx_risk_reward } from './risk-reward/contextualField';
import { shared as shared_risk_reward } from './risk-reward/shared.generated';
import { compute as compute_rms_voltage } from './rms-voltage/compute';
import { contextualField as ctx_rms_voltage } from './rms-voltage/contextualField';
import { shared as shared_rms_voltage } from './rms-voltage/shared.generated';
import { compute as compute_roas } from './roas/compute';
import { shared as shared_roas } from './roas/shared.generated';
import { compute as compute_roast_time } from './roast-time/compute';
import { contextualField as ctx_roast_time } from './roast-time/contextualField';
import { shared as shared_roast_time } from './roast-time/shared.generated';
import { compute as compute_roi } from './roi/compute';
import { shared as shared_roi } from './roi/shared.generated';
import { compute as compute_roman_numerals } from './roman-numerals/compute';
import { validate as validate_roman_numerals } from './roman-numerals/validate';
import { shared as shared_roman_numerals } from './roman-numerals/shared.generated';
import { compute as compute_roof_area } from './roof-area/compute';
import { shared as shared_roof_area } from './roof-area/shared.generated';
import { compute as compute_roof_battens } from './roof-battens/compute';
import { shared as shared_roof_battens } from './roof-battens/shared.generated';
import { compute as compute_room_volume } from './room-volume/compute';
import { shared as shared_room_volume } from './room-volume/shared.generated';
import { compute as compute_rounding } from './rounding/compute';
import { validate as validate_rounding } from './rounding/validate';
import { shared as shared_rounding } from './rounding/shared.generated';
import { compute as compute_rule_of_72 } from './rule-of-72/compute';
import { contextualField as ctx_rule_of_72 } from './rule-of-72/contextualField';
import { shared as shared_rule_of_72 } from './rule-of-72/shared.generated';
import { compute as compute_salary_convert } from './salary-convert/compute';
import { contextualField as ctx_salary_convert } from './salary-convert/contextualField';
import { shared as shared_salary_convert } from './salary-convert/shared.generated';
import { compute as compute_salary_raise } from './salary-raise/compute';
import { contextualField as ctx_salary_raise } from './salary-raise/contextualField';
import { shared as shared_salary_raise } from './salary-raise/shared.generated';
import { compute as compute_sample_size } from './sample-size/compute';
import { validate as validate_sample_size } from './sample-size/validate';
import { shared as shared_sample_size } from './sample-size/shared.generated';
import { compute as compute_savings_goal } from './savings-goal/compute';
import { contextualField as ctx_savings_goal } from './savings-goal/contextualField';
import { shared as shared_savings_goal } from './savings-goal/shared.generated';
import { compute as compute_savings_rate } from './savings-rate/compute';
import { contextualField as ctx_savings_rate } from './savings-rate/contextualField';
import { shared as shared_savings_rate } from './savings-rate/shared.generated';
import { compute as compute_scale_model } from './scale-model/compute';
import { contextualField as ctx_scale_model } from './scale-model/contextualField';
import { shared as shared_scale_model } from './scale-model/shared.generated';
import { compute as compute_sealant_volume } from './sealant-volume/compute';
import { shared as shared_sealant_volume } from './sealant-volume/shared.generated';
import { compute as compute_shipping_per_unit } from './shipping-per-unit/compute';
import { shared as shared_shipping_per_unit } from './shipping-per-unit/shared.generated';
import { compute as compute_simple_interest } from './simple-interest/compute';
import { shared as shared_simple_interest } from './simple-interest/shared.generated';
import { compute as compute_single_phase } from './single-phase/compute';
import { shared as shared_single_phase } from './single-phase/shared.generated';
import { compute as compute_skirting } from './skirting/compute';
import { validate as validate_skirting } from './skirting/validate';
import { shared as shared_skirting } from './skirting/shared.generated';
import { compute as compute_slab_foundation } from './slab-foundation/compute';
import { shared as shared_slab_foundation } from './slab-foundation/shared.generated';
import { compute as compute_sleep_time } from './sleep-time/compute';
import { validate as validate_sleep_time } from './sleep-time/validate';
import { shared as shared_sleep_time } from './sleep-time/shared.generated';
import { compute as compute_slope } from './slope/compute';
import { shared as shared_slope } from './slope/shared.generated';
import { compute as compute_solution_concentration } from './solution-concentration/compute';
import { shared as shared_solution_concentration } from './solution-concentration/shared.generated';
import { compute as compute_specific_heat } from './specific-heat/compute';
import { contextualField as ctx_specific_heat } from './specific-heat/contextualField';
import { shared as shared_specific_heat } from './specific-heat/shared.generated';
import { compute as compute_speed_distance_time } from './speed-distance-time/compute';
import { shared as shared_speed_distance_time } from './speed-distance-time/shared.generated';
import { compute as compute_speed_of_sound } from './speed-of-sound/compute';
import { shared as shared_speed_of_sound } from './speed-of-sound/shared.generated';
import { compute as compute_stairs } from './stairs/compute';
import { shared as shared_stairs } from './stairs/shared.generated';
import { compute as compute_stats_descriptive } from './stats-descriptive/compute';
import { shared as shared_stats_descriptive } from './stats-descriptive/shared.generated';
import { compute as compute_steps_distance_calories } from './steps-distance-calories/compute';
import { shared as shared_steps_distance_calories } from './steps-distance-calories/shared.generated';
import { compute as compute_stock_duration } from './stock-duration/compute';
import { contextualField as ctx_stock_duration } from './stock-duration/contextualField';
import { shared as shared_stock_duration } from './stock-duration/shared.generated';
import { compute as compute_stopping_distance } from './stopping-distance/compute';
import { shared as shared_stopping_distance } from './stopping-distance/shared.generated';
import { compute as compute_stress_strain } from './stress-strain/compute';
import { contextualField as ctx_stress_strain } from './stress-strain/contextualField';
import { shared as shared_stress_strain } from './stress-strain/shared.generated';
import { compute as compute_strip_foundation } from './strip-foundation/compute';
import { shared as shared_strip_foundation } from './strip-foundation/shared.generated';
import { compute as compute_subscriptions_cost } from './subscriptions-cost/compute';
import { shared as shared_subscriptions_cost } from './subscriptions-cost/shared.generated';
import { compute as compute_tank_volume } from './tank-volume/compute';
import { contextualField as ctx_tank_volume } from './tank-volume/contextualField';
import { shared as shared_tank_volume } from './tank-volume/shared.generated';
import { compute as compute_terminal_velocity } from './terminal-velocity/compute';
import { shared as shared_terminal_velocity } from './terminal-velocity/shared.generated';
import { compute as compute_test_score_percent } from './test-score-percent/compute';
import { validate as validate_test_score_percent } from './test-score-percent/validate';
import { shared as shared_test_score_percent } from './test-score-percent/shared.generated';
import { compute as compute_text_reading_time } from './text-reading-time/compute';
import { validate as validate_text_reading_time } from './text-reading-time/validate';
import { contextualField as ctx_text_reading_time } from './text-reading-time/contextualField';
import { shared as shared_text_reading_time } from './text-reading-time/shared.generated';
import { compute as compute_text_word_char_count } from './text-word-char-count/compute';
import { shared as shared_text_word_char_count } from './text-word-char-count/shared.generated';
import { compute as compute_thermal_conduction } from './thermal-conduction/compute';
import { shared as shared_thermal_conduction } from './thermal-conduction/shared.generated';
import { compute as compute_thin_lens } from './thin-lens/compute';
import { shared as shared_thin_lens } from './thin-lens/shared.generated';
import { compute as compute_time_duration } from './time-duration/compute';
import { validate as validate_time_duration } from './time-duration/validate';
import { shared as shared_time_duration } from './time-duration/shared.generated';
import { compute as compute_time_value_money } from './time-value-money/compute';
import { contextualField as ctx_time_value_money } from './time-value-money/contextualField';
import { shared as shared_time_value_money } from './time-value-money/shared.generated';
import { compute as compute_timesheet_week } from './timesheet-week/compute';
import { contextualField as ctx_timesheet_week } from './timesheet-week/contextualField';
import { shared as shared_timesheet_week } from './timesheet-week/shared.generated';
import { compute as compute_timezone_difference } from './timezone-difference/compute';
import { validate as validate_timezone_difference } from './timezone-difference/validate';
import { shared as shared_timezone_difference } from './timezone-difference/shared.generated';
import { compute as compute_tip } from './tip/compute';
import { validate as validate_tip } from './tip/validate';
import { shared as shared_tip } from './tip/shared.generated';
import { compute as compute_tire_size } from './tire-size/compute';
import { shared as shared_tire_size } from './tire-size/shared.generated';
import { compute as compute_transformer_ratio } from './transformer-ratio/compute';
import { validate as validate_transformer_ratio } from './transformer-ratio/validate';
import { contextualField as ctx_transformer_ratio } from './transformer-ratio/contextualField';
import { shared as shared_transformer_ratio } from './transformer-ratio/shared.generated';
import { compute as compute_trip_budget } from './trip-budget/compute';
import { validate as validate_trip_budget } from './trip-budget/validate';
import { contextualField as ctx_trip_budget } from './trip-budget/contextualField';
import { shared as shared_trip_budget } from './trip-budget/shared.generated';
import { compute as compute_trip_cost } from './trip-cost/compute';
import { validate as validate_trip_cost } from './trip-cost/validate';
import { shared as shared_trip_cost } from './trip-cost/shared.generated';
import { compute as compute_tv_monitor_viewing_distance } from './tv-monitor-viewing-distance/compute';
import { validate as validate_tv_monitor_viewing_distance } from './tv-monitor-viewing-distance/validate';
import { contextualField as ctx_tv_monitor_viewing_distance } from './tv-monitor-viewing-distance/contextualField';
import { shared as shared_tv_monitor_viewing_distance } from './tv-monitor-viewing-distance/shared.generated';
import { compute as compute_underfloor_heating } from './underfloor-heating/compute';
import { shared as shared_underfloor_heating } from './underfloor-heating/shared.generated';
import { compute as compute_unix_timestamp } from './unix-timestamp/compute';
import { validate as validate_unix_timestamp } from './unix-timestamp/validate';
import { contextualField as ctx_unix_timestamp } from './unix-timestamp/contextualField';
import { shared as shared_unix_timestamp } from './unix-timestamp/shared.generated';
import { compute as compute_utility_total } from './utility-total/compute';
import { contextualField as ctx_utility_total } from './utility-total/contextualField';
import { shared as shared_utility_total } from './utility-total/shared.generated';
import { compute as compute_vacation_accrual } from './vacation-accrual/compute';
import { contextualField as ctx_vacation_accrual } from './vacation-accrual/contextualField';
import { shared as shared_vacation_accrual } from './vacation-accrual/shared.generated';
import { compute as compute_video_file_size } from './video-file-size/compute';
import { contextualField as ctx_video_file_size } from './video-file-size/contextualField';
import { shared as shared_video_file_size } from './video-file-size/shared.generated';
import { compute as compute_vo2max } from './vo2max/compute';
import { shared as shared_vo2max } from './vo2max/shared.generated';
import { compute as compute_voltage_divider } from './voltage-divider/compute';
import { contextualField as ctx_voltage_divider } from './voltage-divider/contextualField';
import { shared as shared_voltage_divider } from './voltage-divider/shared.generated';
import { compute as compute_voltage_drop } from './voltage-drop/compute';
import { shared as shared_voltage_drop } from './voltage-drop/shared.generated';
import { compute as compute_waist_ratio } from './waist-ratio/compute';
import { shared as shared_waist_ratio } from './waist-ratio/shared.generated';
import { compute as compute_water_heating } from './water-heating/compute';
import { contextualField as ctx_water_heating } from './water-heating/contextualField';
import { shared as shared_water_heating } from './water-heating/shared.generated';
import { compute as compute_water_intake } from './water-intake/compute';
import { shared as shared_water_intake } from './water-intake/shared.generated';
import { compute as compute_wave } from './wave/compute';
import { shared as shared_wave } from './wave/shared.generated';
import { compute as compute_week_number } from './week-number/compute';
import { validateDate as validateDate_week_number } from './week-number/validateDate';
import { shared as shared_week_number } from './week-number/shared.generated';
import { compute as compute_weighted_mean } from './weighted-mean/compute';
import { shared as shared_weighted_mean } from './weighted-mean/shared.generated';
import { compute as compute_wheel_offset } from './wheel-offset/compute';
import { shared as shared_wheel_offset } from './wheel-offset/shared.generated';
import { compute as compute_wind_chill } from './wind-chill/compute';
import { shared as shared_wind_chill } from './wind-chill/shared.generated';
import { compute as compute_wind_power } from './wind-power/compute';
import { shared as shared_wind_power } from './wind-power/shared.generated';
import { compute as compute_wood_weight } from './wood-weight/compute';
import { shared as shared_wood_weight } from './wood-weight/shared.generated';
import { compute as compute_work } from './work/compute';
import { shared as shared_work } from './work/shared.generated';
import { compute as compute_work_hours } from './work-hours/compute';
import { validate as validate_work_hours } from './work-hours/validate';
import { shared as shared_work_hours } from './work-hours/shared.generated';
import { compute as compute_workday_cost } from './workday-cost/compute';
import { validate as validate_workday_cost } from './workday-cost/validate';
import { contextualField as ctx_workday_cost } from './workday-cost/contextualField';
import { shared as shared_workday_cost } from './workday-cost/shared.generated';
import { compute as compute_yeast_convert } from './yeast-convert/compute';
import { contextualField as ctx_yeast_convert } from './yeast-convert/contextualField';
import { shared as shared_yeast_convert } from './yeast-convert/shared.generated';
import { compute as compute_z_score } from './z-score/compute';
import { shared as shared_z_score } from './z-score/shared.generated';
import { calcCredit } from '../lib/calculators/credit';
import { calcDeposit } from '../lib/calculators/deposit';
import { calcCompound } from '../lib/calculators/compound';
import { calcMortgage } from '../lib/calculators/mortgage';
import { calcCurrency } from '../lib/calculators/currency';
import { calcBmi } from '../lib/calculators/bmi';
import { calcCalorie } from '../lib/calculators/calorie';
import { calcPace } from '../lib/calculators/pace';
import { calcOneRm } from '../lib/calculators/oneRm';
import { calcTile } from '../lib/calculators/tile';
import { calcWallpaper } from '../lib/calculators/wallpaper';
import { calcLaminate } from '../lib/calculators/laminate';
import { calcScreed } from '../lib/calculators/screed';
import { calcAge } from '../lib/calculators/age';
import { calcWorkingDays } from '../lib/calculators/workingDays';
import { calcDateShift } from '../lib/calculators/dateShift';
import { calcIncomeTax } from '../lib/calculators/incomeTax';
import { calcVat } from '../lib/calculators/vat';
import { calcDiscount } from '../lib/calculators/discount';
import { calcMargin } from '../lib/calculators/margin';
import { calcBreakEven } from '../lib/calculators/breakEven';
import { calcBodyFat } from '../lib/calculators/bodyFat';
import { calcBrick } from '../lib/calculators/brick';
import { shared as legacy_credit_calculator } from '../components/islands/legacy/credit-calculator/shared.generated';
import { shared as legacy_deposit_calculator } from '../components/islands/legacy/deposit-calculator/shared.generated';
import { shared as legacy_compound_interest } from '../components/islands/legacy/compound-interest/shared.generated';
import { shared as legacy_mortgage_calculator } from '../components/islands/legacy/mortgage-calculator/shared.generated';
import { shared as legacy_currency_converter } from '../components/islands/legacy/currency-converter/shared.generated';
import { shared as legacy_usd_to_eur } from '../components/islands/legacy/usd-to-eur/shared.generated';
import { shared as legacy_eur_to_mdl } from '../components/islands/legacy/eur-to-mdl/shared.generated';
import { shared as legacy_usd_to_mdl } from '../components/islands/legacy/usd-to-mdl/shared.generated';
import { shared as legacy_bmi_calculator } from '../components/islands/legacy/bmi-calculator/shared.generated';
import { shared as legacy_calorie_calculator } from '../components/islands/legacy/calorie-calculator/shared.generated';
import { shared as legacy_running_pace_calculator } from '../components/islands/legacy/running-pace-calculator/shared.generated';
import { shared as legacy_one_rep_max_calculator } from '../components/islands/legacy/one-rep-max-calculator/shared.generated';
import { shared as legacy_tile_calculator } from '../components/islands/legacy/tile-calculator/shared.generated';
import { localization as legacy_localization_tile_calculator } from '../components/islands/legacy/tile-calculator/localization';
import { shared as legacy_wallpaper_calculator } from '../components/islands/legacy/wallpaper-calculator/shared.generated';
import { validate as legacy_validate_wallpaper_calculator } from '../components/islands/legacy/wallpaper-calculator/validate';
import { localization as legacy_localization_wallpaper_calculator } from '../components/islands/legacy/wallpaper-calculator/localization';
import { shared as legacy_laminate_calculator } from '../components/islands/legacy/laminate-calculator/shared.generated';
import { localization as legacy_localization_laminate_calculator } from '../components/islands/legacy/laminate-calculator/localization';
import { shared as legacy_screed_calculator } from '../components/islands/legacy/screed-calculator/shared.generated';
import { localization as legacy_localization_screed_calculator } from '../components/islands/legacy/screed-calculator/localization';
import { shared as legacy_age_calculator } from '../components/islands/legacy/age-calculator/shared.generated';
import { localization as legacy_localization_age_calculator } from '../components/islands/legacy/age-calculator/localization';
import { shared as legacy_working_days_calculator } from '../components/islands/legacy/working-days-calculator/shared.generated';
import { localization as legacy_localization_working_days_calculator } from '../components/islands/legacy/working-days-calculator/localization';
import { shared as legacy_date_shift_calculator } from '../components/islands/legacy/date-shift-calculator/shared.generated';
import { validate as legacy_validate_date_shift_calculator } from '../components/islands/legacy/date-shift-calculator/validate';
import { localization as legacy_localization_date_shift_calculator } from '../components/islands/legacy/date-shift-calculator/localization';
import { shared as legacy_income_tax_calculator } from '../components/islands/legacy/income-tax-calculator/shared.generated';
import { localization as legacy_localization_income_tax_calculator } from '../components/islands/legacy/income-tax-calculator/localization';
import { shared as legacy_vat_calculator } from '../components/islands/legacy/vat-calculator/shared.generated';
import { localization as legacy_localization_vat_calculator } from '../components/islands/legacy/vat-calculator/localization';
import { shared as legacy_discount_calculator } from '../components/islands/legacy/discount-calculator/shared.generated';
import { shared as legacy_margin_calculator } from '../components/islands/legacy/margin-calculator/shared.generated';
import { validate as legacy_validate_margin_calculator } from '../components/islands/legacy/margin-calculator/validate';
import { localization as legacy_localization_margin_calculator } from '../components/islands/legacy/margin-calculator/localization';
import { shared as legacy_break_even_calculator } from '../components/islands/legacy/break-even-calculator/shared.generated';
import { validate as legacy_validate_break_even_calculator } from '../components/islands/legacy/break-even-calculator/validate';
import { localization as legacy_localization_break_even_calculator } from '../components/islands/legacy/break-even-calculator/localization';
import { shared as legacy_body_fat_calculator } from '../components/islands/legacy/body-fat-calculator/shared.generated';
import { shared as legacy_brick_calculator } from '../components/islands/legacy/brick-calculator/shared.generated';
import { localization as legacy_localization_brick_calculator } from '../components/islands/legacy/brick-calculator/localization';

export const v2Runners: Record<string, CalcFunction> = {
  'abv-alcohol': compute_abv_alcohol,
  'acceleration': compute_acceleration,
  'activity-calories': compute_activity_calories,
  'ad-budget-funnel': compute_ad_budget_funnel,
  'ad-roi': compute_ad_roi,
  'air-density': compute_air_density,
  'air-exchange': compute_air_exchange,
  'air-pressure-at-altitude': compute_air_pressure_at_altitude,
  'alcohol-units': compute_alcohol_units,
  'annuity': compute_annuity,
  'aov': compute_aov,
  'apr-apy': compute_apr_apy,
  'aquarium-water-change': compute_aquarium_water_change,
  'arithmetic-progression': compute_arithmetic_progression,
  'arpu-arppu': compute_arpu_arppu,
  'aspect-ratio': compute_aspect_ratio,
  'audience-growth': compute_audience_growth,
  'bakers-percentage': compute_bakers_percentage,
  'baluster-spacing': compute_baluster_spacing,
  'barbell-plates': compute_barbell_plates,
  'battery-charge-time': compute_battery_charge_time,
  'battery-runtime': compute_battery_runtime,
  'battery-series-parallel': compute_battery_series_parallel,
  'beam-deflection': compute_beam_deflection,
  'beam-stress': compute_beam_stress,
  'belt-length': compute_belt_length,
  'bernoulli': compute_bernoulli,
  'bike-gear-ratio': compute_bike_gear_ratio,
  'bike-wheel-size': compute_bike_wheel_size,
  'binomial-probability': compute_binomial_probability,
  'board-volume': compute_board_volume,
  'boiling-point': compute_boiling_point,
  'bonus': compute_bonus,
  'brew-ratio': compute_brew_ratio,
  'budget-50-30-20': compute_budget_50_30_20,
  'budget-split': compute_budget_split,
  'bulk-material-volume': compute_bulk_material_volume,
  'buoyancy': compute_buoyancy,
  'cac': compute_cac,
  'cagr': compute_cagr,
  'calories-from-macros': compute_calories_from_macros,
  'calories-per-serving': compute_calories_per_serving,
  'capacitor-basics': compute_capacitor_basics,
  'capacitor-network': compute_capacitor_network,
  'car-depreciation': compute_car_depreciation,
  'carnot': compute_carnot,
  'centripetal-force': compute_centripetal_force,
  'churn-retention': compute_churn_retention,
  'cladding-boards': compute_cladding_boards,
  'coaxial-cable-impedance': compute_coaxial_cable_impedance,
  'cogs': compute_cogs,
  'cogs-unit-cost': compute_cogs_unit_cost,
  'color-convert': compute_color_convert,
  'combinatorics': compute_combinatorics,
  'commission': compute_commission,
  'compression-ratio': compute_compression_ratio,
  'concrete': compute_concrete,
  'confidence-interval': compute_confidence_interval,
  'contribution-margin': compute_contribution_margin,
  'conversion-rate': compute_conversion_rate,
  'convert-angle': compute_convert_angle,
  'convert-area': compute_convert_area,
  'convert-cooking-volume': compute_convert_cooking_volume,
  'convert-cooking-weight': compute_convert_cooking_weight,
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
  'convert-radiation': compute_convert_radiation,
  'convert-speed': compute_convert_speed,
  'convert-temperature': compute_convert_temperature,
  'convert-time': compute_convert_time,
  'convert-torque': compute_convert_torque,
  'convert-volume': compute_convert_volume,
  'cooked-weight': compute_cooked_weight,
  'coordinate-convert': compute_coordinate_convert,
  'correlation': compute_correlation,
  'coulomb': compute_coulomb,
  'cpa-cpl-cpi': compute_cpa_cpl_cpi,
  'cpc': compute_cpc,
  'cpm': compute_cpm,
  'credit-card-payoff': compute_credit_card_payoff,
  'crypto-pnl': compute_crypto_pnl,
  'css-units': compute_css_units,
  'ctr': compute_ctr,
  'currency-exchange-fee': compute_currency_exchange_fee,
  'curtain-size': compute_curtain_size,
  'cycle-time': compute_cycle_time,
  'day-of-week': compute_day_of_week,
  'dca': compute_dca,
  'de-broglie': compute_de_broglie,
  'debt-snowball-avalanche': compute_debt_snowball_avalanche,
  'decibel': compute_decibel,
  'density': compute_density,
  'depreciation-methods': compute_depreciation_methods,
  'dew-point': compute_dew_point,
  'dice-probability': compute_dice_probability,
  'difference-abs-rel': compute_difference_abs_rel,
  'dilution': compute_dilution,
  'dividend-yield': compute_dividend_yield,
  'divisors': compute_divisors,
  'doppler': compute_doppler,
  'down-payment': compute_down_payment,
  'download-time': compute_download_time,
  'drip-water-leak': compute_drip_water_leak,
  'drywall': compute_drywall,
  'dti': compute_dti,
  'early-repayment': compute_early_repayment,
  'electricity-usage': compute_electricity_usage,
  'email-metrics': compute_email_metrics,
  'emergency-fund': compute_emergency_fund,
  'employee-cost': compute_employee_cost,
  'engagement-rate': compute_engagement_rate,
  'engine-displacement': compute_engine_displacement,
  'epoxy-volume': compute_epoxy_volume,
  'escape-velocity': compute_escape_velocity,
  'factorial': compute_factorial,
  'fee-chain': compute_fee_chain,
  'fence': compute_fence,
  'fibonacci': compute_fibonacci,
  'files-on-disk': compute_files_on_disk,
  'final-grade': compute_final_grade,
  'fps-frametime': compute_fps_frametime,
  'fraction-arith': compute_fraction_arith,
  'free-fall': compute_free_fall,
  'freelance-rate': compute_freelance_rate,
  'fuel-consumption': compute_fuel_consumption,
  'fuel-oil-mix': compute_fuel_oil_mix,
  'gas-laws': compute_gas_laws,
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
  'geometric-progression': compute_geometric_progression,
  'golden-ratio': compute_golden_ratio,
  'gpa': compute_gpa,
  'gravitational-force': compute_gravitational_force,
  'half-life': compute_half_life,
  'headphone-power': compute_headphone_power,
  'heat-index': compute_heat_index,
  'heating-power': compute_heating_power,
  'home-equity': compute_home_equity,
  'hooke-law': compute_hooke_law,
  'humidity-convert': compute_humidity_convert,
  'hydrostatic-pressure': compute_hydrostatic_pressure,
  'ideal-gas-law': compute_ideal_gas_law,
  'ideal-weight': compute_ideal_weight,
  'inclined-plane': compute_inclined_plane,
  'inflation': compute_inflation,
  'installment': compute_installment,
  'insulation': compute_insulation,
  'internet-traffic': compute_internet_traffic,
  'inventory-turnover': compute_inventory_turnover,
  'inverse-square': compute_inverse_square,
  'inverter-power': compute_inverter_power,
  'ipv4-subnet': compute_ipv4_subnet,
  'kinetic-energy': compute_kinetic_energy,
  'kva-kw': compute_kva_kw,
  'lc-resonance': compute_lc_resonance,
  'leap-year': compute_leap_year,
  'lease-payment': compute_lease_payment,
  'led-resistor': compute_led_resistor,
  'lever-moment': compute_lever_moment,
  'leverage': compute_leverage,
  'lighting': compute_lighting,
  'linear-equation': compute_linear_equation,
  'linear-system': compute_linear_system,
  'linoleum': compute_linoleum,
  'logarithm': compute_logarithm,
  'ltv': compute_ltv,
  'luggage-linear': compute_luggage_linear,
  'mach-number': compute_mach_number,
  'market-cap': compute_market_cap,
  'mass-energy': compute_mass_energy,
  'max-heart-rate': compute_max_heart_rate,
  'max-loan': compute_max_loan,
  'metal-weight': compute_metal_weight,
  'miter-angle': compute_miter_angle,
  'modular-scale': compute_modular_scale,
  'modulo': compute_modulo,
  'molar-mass': compute_molar_mass,
  'molarity': compute_molarity,
  'moles': compute_moles,
  'moment-of-inertia': compute_moment_of_inertia,
  'momentum': compute_momentum,
  'mrr-arr': compute_mrr_arr,
  'ne555-timer-astable': compute_ne555_timer_astable,
  'network-bandwidth': compute_network_bandwidth,
  'newton-force': compute_newton_force,
  'number-scale-names': compute_number_scale_names,
  'number-to-words': compute_number_to_words,
  'ohms-law': compute_ohms_law,
  'orbital-period': compute_orbital_period,
  'overtime': compute_overtime,
  'paint-calculator': compute_paint_calculator,
  'paper-quantity': compute_paper_quantity,
  'password-entropy': compute_password_entropy,
  'payback-period': compute_payback_period,
  'pendulum': compute_pendulum,
  'percent-calculator': compute_percent_calculator,
  'pet-age': compute_pet_age,
  'pet-food': compute_pet_food,
  'ph-poh': compute_ph_poh,
  'photon-energy': compute_photon_energy,
  'physics-power': compute_physics_power,
  'physics-torque': compute_physics_torque,
  'picture-frame-mat': compute_picture_frame_mat,
  'pile-foundation': compute_pile_foundation,
  'pipe-flow': compute_pipe_flow,
  'pipe-weight': compute_pipe_weight,
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
  'projectile-motion': compute_projectile_motion,
  'proportion': compute_proportion,
  'pyramid-frustum': compute_pyramid_frustum,
  'quadratic-equation': compute_quadratic_equation,
  'quarter-mile-elapsed-time': compute_quarter_mile_elapsed_time,
  'quartile': compute_quartile,
  'rafters': compute_rafters,
  'raid': compute_raid,
  'rainfall-volume': compute_rainfall_volume,
  'ratio': compute_ratio,
  'rc-filter': compute_rc_filter,
  'reading-speed': compute_reading_speed,
  'real-return': compute_real_return,
  'recipe-cost': compute_recipe_cost,
  'recipe-scale': compute_recipe_scale,
  'refinancing': compute_refinancing,
  'relativity-dilation': compute_relativity_dilation,
  'rental-yield': compute_rental_yield,
  'resistor-color': compute_resistor_color,
  'resistor-network': compute_resistor_network,
  'return-rate': compute_return_rate,
  'revenue-per-employee': compute_revenue_per_employee,
  'risk-reward': compute_risk_reward,
  'rms-voltage': compute_rms_voltage,
  'roas': compute_roas,
  'roast-time': compute_roast_time,
  'roi': compute_roi,
  'roman-numerals': compute_roman_numerals,
  'roof-area': compute_roof_area,
  'roof-battens': compute_roof_battens,
  'room-volume': compute_room_volume,
  'rounding': compute_rounding,
  'rule-of-72': compute_rule_of_72,
  'salary-convert': compute_salary_convert,
  'salary-raise': compute_salary_raise,
  'sample-size': compute_sample_size,
  'savings-goal': compute_savings_goal,
  'savings-rate': compute_savings_rate,
  'scale-model': compute_scale_model,
  'sealant-volume': compute_sealant_volume,
  'shipping-per-unit': compute_shipping_per_unit,
  'simple-interest': compute_simple_interest,
  'single-phase': compute_single_phase,
  'skirting': compute_skirting,
  'slab-foundation': compute_slab_foundation,
  'sleep-time': compute_sleep_time,
  'slope': compute_slope,
  'solution-concentration': compute_solution_concentration,
  'specific-heat': compute_specific_heat,
  'speed-distance-time': compute_speed_distance_time,
  'speed-of-sound': compute_speed_of_sound,
  'stairs': compute_stairs,
  'stats-descriptive': compute_stats_descriptive,
  'steps-distance-calories': compute_steps_distance_calories,
  'stock-duration': compute_stock_duration,
  'stopping-distance': compute_stopping_distance,
  'stress-strain': compute_stress_strain,
  'strip-foundation': compute_strip_foundation,
  'subscriptions-cost': compute_subscriptions_cost,
  'tank-volume': compute_tank_volume,
  'terminal-velocity': compute_terminal_velocity,
  'test-score-percent': compute_test_score_percent,
  'text-reading-time': compute_text_reading_time,
  'text-word-char-count': compute_text_word_char_count,
  'thermal-conduction': compute_thermal_conduction,
  'thin-lens': compute_thin_lens,
  'time-duration': compute_time_duration,
  'time-value-money': compute_time_value_money,
  'timesheet-week': compute_timesheet_week,
  'timezone-difference': compute_timezone_difference,
  'tip': compute_tip,
  'tire-size': compute_tire_size,
  'transformer-ratio': compute_transformer_ratio,
  'trip-budget': compute_trip_budget,
  'trip-cost': compute_trip_cost,
  'tv-monitor-viewing-distance': compute_tv_monitor_viewing_distance,
  'underfloor-heating': compute_underfloor_heating,
  'unix-timestamp': compute_unix_timestamp,
  'utility-total': compute_utility_total,
  'vacation-accrual': compute_vacation_accrual,
  'video-file-size': compute_video_file_size,
  'vo2max': compute_vo2max,
  'voltage-divider': compute_voltage_divider,
  'voltage-drop': compute_voltage_drop,
  'waist-ratio': compute_waist_ratio,
  'water-heating': compute_water_heating,
  'water-intake': compute_water_intake,
  'wave': compute_wave,
  'week-number': compute_week_number,
  'weighted-mean': compute_weighted_mean,
  'wheel-offset': compute_wheel_offset,
  'wind-chill': compute_wind_chill,
  'wind-power': compute_wind_power,
  'wood-weight': compute_wood_weight,
  'work': compute_work,
  'work-hours': compute_work_hours,
  'workday-cost': compute_workday_cost,
  'yeast-convert': compute_yeast_convert,
  'z-score': compute_z_score,
};

export const v2Validators: Record<string, CalculatorValidator> = {
  'annuity': validate_annuity,
  'apr-apy': validate_apr_apy,
  'arithmetic-progression': validate_arithmetic_progression,
  'arpu-arppu': validate_arpu_arppu,
  'aspect-ratio': validate_aspect_ratio,
  'audience-growth': validate_audience_growth,
  'battery-series-parallel': validate_battery_series_parallel,
  'binomial-probability': validate_binomial_probability,
  'board-volume': validate_board_volume,
  'car-depreciation': validate_car_depreciation,
  'churn-retention': validate_churn_retention,
  'cogs-unit-cost': validate_cogs_unit_cost,
  'combinatorics': validate_combinatorics,
  'commission': validate_commission,
  'concrete': validate_concrete,
  'confidence-interval': validate_confidence_interval,
  'coordinate-convert': validate_coordinate_convert,
  'cpc': validate_cpc,
  'cpm': validate_cpm,
  'ctr': validate_ctr,
  'cycle-time': validate_cycle_time,
  'dca': validate_dca,
  'depreciation-methods': validate_depreciation_methods,
  'dice-probability': validate_dice_probability,
  'divisors': validate_divisors,
  'drywall': validate_drywall,
  'electricity-usage': validate_electricity_usage,
  'email-metrics': validate_email_metrics,
  'engagement-rate': validate_engagement_rate,
  'engine-displacement': validate_engine_displacement,
  'factorial': validate_factorial,
  'fence': validate_fence,
  'fibonacci': validate_fibonacci,
  'fraction-arith': validate_fraction_arith,
  'geom-prism': validate_geom_prism,
  'geom-pyramid': validate_geom_pyramid,
  'geom-regular-polygon': validate_geom_regular_polygon,
  'geometric-progression': validate_geometric_progression,
  'heating-power': validate_heating_power,
  'installment': validate_installment,
  'insulation': validate_insulation,
  'ipv4-subnet': validate_ipv4_subnet,
  'leap-year': validate_leap_year,
  'lease-payment': validate_lease_payment,
  'market-cap': validate_market_cap,
  'modular-scale': validate_modular_scale,
  'modulo': validate_modulo,
  'mrr-arr': validate_mrr_arr,
  'network-bandwidth': validate_network_bandwidth,
  'number-to-words': validate_number_to_words,
  'paint-calculator': validate_paint_calculator,
  'paper-quantity': validate_paper_quantity,
  'password-entropy': validate_password_entropy,
  'percent-calculator': validate_percent_calculator,
  'pile-foundation': validate_pile_foundation,
  'power-root': validate_power_root,
  'ppi-dpi': validate_ppi_dpi,
  'prime-factorization': validate_prime_factorization,
  'probability-basic': validate_probability_basic,
  'raid': validate_raid,
  'reading-speed': validate_reading_speed,
  'refinancing': validate_refinancing,
  'roman-numerals': validate_roman_numerals,
  'rounding': validate_rounding,
  'sample-size': validate_sample_size,
  'skirting': validate_skirting,
  'sleep-time': validate_sleep_time,
  'test-score-percent': validate_test_score_percent,
  'text-reading-time': validate_text_reading_time,
  'time-duration': validate_time_duration,
  'timezone-difference': validate_timezone_difference,
  'tip': validate_tip,
  'transformer-ratio': validate_transformer_ratio,
  'trip-budget': validate_trip_budget,
  'trip-cost': validate_trip_cost,
  'tv-monitor-viewing-distance': validate_tv_monitor_viewing_distance,
  'unix-timestamp': validate_unix_timestamp,
  'work-hours': validate_work_hours,
  'workday-cost': validate_workday_cost,
};

export const v2DateValidators: Record<string, NonNullable<CalculatorClientRuntime['validateDate']>> = {
  'day-of-week': validateDate_day_of_week,
  'week-number': validateDate_week_number,
};

export const v2ContextualFields: Record<string, CalculatorContextualField> = {
  'abv-alcohol': ctx_abv_alcohol,
  'alcohol-units': ctx_alcohol_units,
  'aquarium-water-change': ctx_aquarium_water_change,
  'aspect-ratio': ctx_aspect_ratio,
  'bakers-percentage': ctx_bakers_percentage,
  'beam-deflection': ctx_beam_deflection,
  'brew-ratio': ctx_brew_ratio,
  'budget-50-30-20': ctx_budget_50_30_20,
  'cagr': ctx_cagr,
  'calories-per-serving': ctx_calories_per_serving,
  'capacitor-basics': ctx_capacitor_basics,
  'churn-retention': ctx_churn_retention,
  'coaxial-cable-impedance': ctx_coaxial_cable_impedance,
  'commission': ctx_commission,
  'cooked-weight': ctx_cooked_weight,
  'css-units': ctx_css_units,
  'currency-exchange-fee': ctx_currency_exchange_fee,
  'cycle-time': ctx_cycle_time,
  'decibel': ctx_decibel,
  'download-time': ctx_download_time,
  'drip-water-leak': ctx_drip_water_leak,
  'dti': ctx_dti,
  'early-repayment': ctx_early_repayment,
  'electricity-usage': ctx_electricity_usage,
  'email-metrics': ctx_email_metrics,
  'emergency-fund': ctx_emergency_fund,
  'employee-cost': ctx_employee_cost,
  'fee-chain': ctx_fee_chain,
  'files-on-disk': ctx_files_on_disk,
  'final-grade': ctx_final_grade,
  'fps-frametime': ctx_fps_frametime,
  'gas-laws': ctx_gas_laws,
  'generator-fuel': ctx_generator_fuel,
  'geom-annulus': ctx_geom_annulus,
  'geom-circle': ctx_geom_circle,
  'geom-cone': ctx_geom_cone,
  'geom-cube': ctx_geom_cube,
  'geom-cuboid': ctx_geom_cuboid,
  'geom-cylinder': ctx_geom_cylinder,
  'geom-ellipse': ctx_geom_ellipse,
  'geom-frustum': ctx_geom_frustum,
  'geom-parallelogram': ctx_geom_parallelogram,
  'geom-polygon-coords': ctx_geom_polygon_coords,
  'geom-prism': ctx_geom_prism,
  'geom-pyramid': ctx_geom_pyramid,
  'geom-rectangle': ctx_geom_rectangle,
  'geom-regular-polygon': ctx_geom_regular_polygon,
  'geom-rhombus': ctx_geom_rhombus,
  'geom-right-triangle': ctx_geom_right_triangle,
  'geom-sector': ctx_geom_sector,
  'geom-sphere': ctx_geom_sphere,
  'geom-square': ctx_geom_square,
  'geom-trapezoid': ctx_geom_trapezoid,
  'geom-triangle': ctx_geom_triangle,
  'golden-ratio': ctx_golden_ratio,
  'gpa': ctx_gpa,
  'headphone-power': ctx_headphone_power,
  'heating-power': ctx_heating_power,
  'home-equity': ctx_home_equity,
  'hooke-law': ctx_hooke_law,
  'ideal-gas-law': ctx_ideal_gas_law,
  'inflation': ctx_inflation,
  'installment': ctx_installment,
  'internet-traffic': ctx_internet_traffic,
  'inventory-turnover': ctx_inventory_turnover,
  'inverter-power': ctx_inverter_power,
  'ipv4-subnet': ctx_ipv4_subnet,
  'kva-kw': ctx_kva_kw,
  'lc-resonance': ctx_lc_resonance,
  'led-resistor': ctx_led_resistor,
  'lever-moment': ctx_lever_moment,
  'leverage': ctx_leverage,
  'lighting': ctx_lighting,
  'logarithm': ctx_logarithm,
  'ltv': ctx_ltv,
  'market-cap': ctx_market_cap,
  'max-loan': ctx_max_loan,
  'modular-scale': ctx_modular_scale,
  'mrr-arr': ctx_mrr_arr,
  'ne555-timer-astable': ctx_ne555_timer_astable,
  'network-bandwidth': ctx_network_bandwidth,
  'number-scale-names': ctx_number_scale_names,
  'ohms-law': ctx_ohms_law,
  'overtime': ctx_overtime,
  'password-entropy': ctx_password_entropy,
  'percent-calculator': ctx_percent_calculator,
  'pet-age': ctx_pet_age,
  'pet-food': ctx_pet_food,
  'pool-fill-time': ctx_pool_fill_time,
  'position-size': ctx_position_size,
  'power-to-weight': ctx_power_to_weight,
  'ppi-dpi': ctx_ppi_dpi,
  'price-per-unit': ctx_price_per_unit,
  'print-3d-cost': ctx_print_3d_cost,
  'proportion': ctx_proportion,
  'raid': ctx_raid,
  'rainfall-volume': ctx_rainfall_volume,
  'rc-filter': ctx_rc_filter,
  'reading-speed': ctx_reading_speed,
  'real-return': ctx_real_return,
  'recipe-cost': ctx_recipe_cost,
  'recipe-scale': ctx_recipe_scale,
  'rental-yield': ctx_rental_yield,
  'risk-reward': ctx_risk_reward,
  'rms-voltage': ctx_rms_voltage,
  'roast-time': ctx_roast_time,
  'rule-of-72': ctx_rule_of_72,
  'salary-convert': ctx_salary_convert,
  'salary-raise': ctx_salary_raise,
  'savings-goal': ctx_savings_goal,
  'savings-rate': ctx_savings_rate,
  'scale-model': ctx_scale_model,
  'specific-heat': ctx_specific_heat,
  'stock-duration': ctx_stock_duration,
  'stress-strain': ctx_stress_strain,
  'tank-volume': ctx_tank_volume,
  'text-reading-time': ctx_text_reading_time,
  'time-value-money': ctx_time_value_money,
  'timesheet-week': ctx_timesheet_week,
  'transformer-ratio': ctx_transformer_ratio,
  'trip-budget': ctx_trip_budget,
  'tv-monitor-viewing-distance': ctx_tv_monitor_viewing_distance,
  'unix-timestamp': ctx_unix_timestamp,
  'utility-total': ctx_utility_total,
  'vacation-accrual': ctx_vacation_accrual,
  'video-file-size': ctx_video_file_size,
  'voltage-divider': ctx_voltage_divider,
  'water-heating': ctx_water_heating,
  'workday-cost': ctx_workday_cost,
  'yeast-convert': ctx_yeast_convert,
};

/**
 * Полные рантаймы по идентификатору — для сборки и тестов.
 *
 * В клиентский граф этот файл не входит: остров получает рантайм от своей
 * точки входа. Здесь он собран целиком только чтобы тесты могли обратиться
 * к любому калькулятору по идентификатору.
 */
export const v2SharedPhrases: Record<string, CalculatorLocalization> = {
  'abv-alcohol': shared_abv_alcohol,
  'acceleration': shared_acceleration,
  'activity-calories': shared_activity_calories,
  'ad-budget-funnel': shared_ad_budget_funnel,
  'ad-roi': shared_ad_roi,
  'air-density': shared_air_density,
  'air-exchange': shared_air_exchange,
  'air-pressure-at-altitude': shared_air_pressure_at_altitude,
  'alcohol-units': shared_alcohol_units,
  'annuity': shared_annuity,
  'aov': shared_aov,
  'apr-apy': shared_apr_apy,
  'aquarium-water-change': shared_aquarium_water_change,
  'arithmetic-progression': shared_arithmetic_progression,
  'arpu-arppu': shared_arpu_arppu,
  'aspect-ratio': shared_aspect_ratio,
  'audience-growth': shared_audience_growth,
  'bakers-percentage': shared_bakers_percentage,
  'baluster-spacing': shared_baluster_spacing,
  'barbell-plates': shared_barbell_plates,
  'battery-charge-time': shared_battery_charge_time,
  'battery-runtime': shared_battery_runtime,
  'battery-series-parallel': shared_battery_series_parallel,
  'beam-deflection': shared_beam_deflection,
  'beam-stress': shared_beam_stress,
  'belt-length': shared_belt_length,
  'bernoulli': shared_bernoulli,
  'bike-gear-ratio': shared_bike_gear_ratio,
  'bike-wheel-size': shared_bike_wheel_size,
  'binomial-probability': shared_binomial_probability,
  'board-volume': shared_board_volume,
  'boiling-point': shared_boiling_point,
  'bonus': shared_bonus,
  'brew-ratio': shared_brew_ratio,
  'budget-50-30-20': shared_budget_50_30_20,
  'budget-split': shared_budget_split,
  'bulk-material-volume': shared_bulk_material_volume,
  'buoyancy': shared_buoyancy,
  'cac': shared_cac,
  'cagr': shared_cagr,
  'calories-from-macros': shared_calories_from_macros,
  'calories-per-serving': shared_calories_per_serving,
  'capacitor-basics': shared_capacitor_basics,
  'capacitor-network': shared_capacitor_network,
  'car-depreciation': shared_car_depreciation,
  'carnot': shared_carnot,
  'centripetal-force': shared_centripetal_force,
  'churn-retention': shared_churn_retention,
  'cladding-boards': shared_cladding_boards,
  'coaxial-cable-impedance': shared_coaxial_cable_impedance,
  'cogs': shared_cogs,
  'cogs-unit-cost': shared_cogs_unit_cost,
  'color-convert': shared_color_convert,
  'combinatorics': shared_combinatorics,
  'commission': shared_commission,
  'compression-ratio': shared_compression_ratio,
  'concrete': shared_concrete,
  'confidence-interval': shared_confidence_interval,
  'contribution-margin': shared_contribution_margin,
  'conversion-rate': shared_conversion_rate,
  'convert-angle': shared_convert_angle,
  'convert-area': shared_convert_area,
  'convert-cooking-volume': shared_convert_cooking_volume,
  'convert-cooking-weight': shared_convert_cooking_weight,
  'convert-data-rate': shared_convert_data_rate,
  'convert-density': shared_convert_density,
  'convert-digital': shared_convert_digital,
  'convert-energy': shared_convert_energy,
  'convert-flow': shared_convert_flow,
  'convert-force': shared_convert_force,
  'convert-frequency': shared_convert_frequency,
  'convert-fuel-economy': shared_convert_fuel_economy,
  'convert-illuminance': shared_convert_illuminance,
  'convert-length': shared_convert_length,
  'convert-mass': shared_convert_mass,
  'convert-power': shared_convert_power,
  'convert-pressure': shared_convert_pressure,
  'convert-radiation': shared_convert_radiation,
  'convert-speed': shared_convert_speed,
  'convert-temperature': shared_convert_temperature,
  'convert-time': shared_convert_time,
  'convert-torque': shared_convert_torque,
  'convert-volume': shared_convert_volume,
  'cooked-weight': shared_cooked_weight,
  'coordinate-convert': shared_coordinate_convert,
  'correlation': shared_correlation,
  'coulomb': shared_coulomb,
  'cpa-cpl-cpi': shared_cpa_cpl_cpi,
  'cpc': shared_cpc,
  'cpm': shared_cpm,
  'credit-card-payoff': shared_credit_card_payoff,
  'crypto-pnl': shared_crypto_pnl,
  'css-units': shared_css_units,
  'ctr': shared_ctr,
  'currency-exchange-fee': shared_currency_exchange_fee,
  'curtain-size': shared_curtain_size,
  'cycle-time': shared_cycle_time,
  'day-of-week': shared_day_of_week,
  'dca': shared_dca,
  'de-broglie': shared_de_broglie,
  'debt-snowball-avalanche': shared_debt_snowball_avalanche,
  'decibel': shared_decibel,
  'density': shared_density,
  'depreciation-methods': shared_depreciation_methods,
  'dew-point': shared_dew_point,
  'dice-probability': shared_dice_probability,
  'difference-abs-rel': shared_difference_abs_rel,
  'dilution': shared_dilution,
  'dividend-yield': shared_dividend_yield,
  'divisors': shared_divisors,
  'doppler': shared_doppler,
  'down-payment': shared_down_payment,
  'download-time': shared_download_time,
  'drip-water-leak': shared_drip_water_leak,
  'drywall': shared_drywall,
  'dti': shared_dti,
  'early-repayment': shared_early_repayment,
  'electricity-usage': shared_electricity_usage,
  'email-metrics': shared_email_metrics,
  'emergency-fund': shared_emergency_fund,
  'employee-cost': shared_employee_cost,
  'engagement-rate': shared_engagement_rate,
  'engine-displacement': shared_engine_displacement,
  'epoxy-volume': shared_epoxy_volume,
  'escape-velocity': shared_escape_velocity,
  'factorial': shared_factorial,
  'fee-chain': shared_fee_chain,
  'fence': shared_fence,
  'fibonacci': shared_fibonacci,
  'files-on-disk': shared_files_on_disk,
  'final-grade': shared_final_grade,
  'fps-frametime': shared_fps_frametime,
  'fraction-arith': shared_fraction_arith,
  'free-fall': shared_free_fall,
  'freelance-rate': shared_freelance_rate,
  'fuel-consumption': shared_fuel_consumption,
  'fuel-oil-mix': shared_fuel_oil_mix,
  'gas-laws': shared_gas_laws,
  'gcd-lcm': shared_gcd_lcm,
  'generator-fuel': shared_generator_fuel,
  'geom-annulus': shared_geom_annulus,
  'geom-circle': shared_geom_circle,
  'geom-cone': shared_geom_cone,
  'geom-cube': shared_geom_cube,
  'geom-cuboid': shared_geom_cuboid,
  'geom-cylinder': shared_geom_cylinder,
  'geom-ellipse': shared_geom_ellipse,
  'geom-frustum': shared_geom_frustum,
  'geom-parallelogram': shared_geom_parallelogram,
  'geom-polygon-coords': shared_geom_polygon_coords,
  'geom-prism': shared_geom_prism,
  'geom-pyramid': shared_geom_pyramid,
  'geom-rectangle': shared_geom_rectangle,
  'geom-regular-polygon': shared_geom_regular_polygon,
  'geom-rhombus': shared_geom_rhombus,
  'geom-right-triangle': shared_geom_right_triangle,
  'geom-sector': shared_geom_sector,
  'geom-sphere': shared_geom_sphere,
  'geom-square': shared_geom_square,
  'geom-trapezoid': shared_geom_trapezoid,
  'geom-triangle': shared_geom_triangle,
  'geometric-progression': shared_geometric_progression,
  'golden-ratio': shared_golden_ratio,
  'gpa': shared_gpa,
  'gravitational-force': shared_gravitational_force,
  'half-life': shared_half_life,
  'headphone-power': shared_headphone_power,
  'heat-index': shared_heat_index,
  'heating-power': shared_heating_power,
  'home-equity': shared_home_equity,
  'hooke-law': shared_hooke_law,
  'humidity-convert': shared_humidity_convert,
  'hydrostatic-pressure': shared_hydrostatic_pressure,
  'ideal-gas-law': shared_ideal_gas_law,
  'ideal-weight': shared_ideal_weight,
  'inclined-plane': shared_inclined_plane,
  'inflation': shared_inflation,
  'installment': shared_installment,
  'insulation': shared_insulation,
  'internet-traffic': shared_internet_traffic,
  'inventory-turnover': shared_inventory_turnover,
  'inverse-square': shared_inverse_square,
  'inverter-power': shared_inverter_power,
  'ipv4-subnet': shared_ipv4_subnet,
  'kinetic-energy': shared_kinetic_energy,
  'kva-kw': shared_kva_kw,
  'lc-resonance': shared_lc_resonance,
  'leap-year': shared_leap_year,
  'lease-payment': shared_lease_payment,
  'led-resistor': shared_led_resistor,
  'lever-moment': shared_lever_moment,
  'leverage': shared_leverage,
  'lighting': shared_lighting,
  'linear-equation': shared_linear_equation,
  'linear-system': shared_linear_system,
  'linoleum': shared_linoleum,
  'logarithm': shared_logarithm,
  'ltv': shared_ltv,
  'luggage-linear': shared_luggage_linear,
  'mach-number': shared_mach_number,
  'market-cap': shared_market_cap,
  'mass-energy': shared_mass_energy,
  'max-heart-rate': shared_max_heart_rate,
  'max-loan': shared_max_loan,
  'metal-weight': shared_metal_weight,
  'miter-angle': shared_miter_angle,
  'modular-scale': shared_modular_scale,
  'modulo': shared_modulo,
  'molar-mass': shared_molar_mass,
  'molarity': shared_molarity,
  'moles': shared_moles,
  'moment-of-inertia': shared_moment_of_inertia,
  'momentum': shared_momentum,
  'mrr-arr': shared_mrr_arr,
  'ne555-timer-astable': shared_ne555_timer_astable,
  'network-bandwidth': shared_network_bandwidth,
  'newton-force': shared_newton_force,
  'number-scale-names': shared_number_scale_names,
  'number-to-words': shared_number_to_words,
  'ohms-law': shared_ohms_law,
  'orbital-period': shared_orbital_period,
  'overtime': shared_overtime,
  'paint-calculator': shared_paint_calculator,
  'paper-quantity': shared_paper_quantity,
  'password-entropy': shared_password_entropy,
  'payback-period': shared_payback_period,
  'pendulum': shared_pendulum,
  'percent-calculator': shared_percent_calculator,
  'pet-age': shared_pet_age,
  'pet-food': shared_pet_food,
  'ph-poh': shared_ph_poh,
  'photon-energy': shared_photon_energy,
  'physics-power': shared_physics_power,
  'physics-torque': shared_physics_torque,
  'picture-frame-mat': shared_picture_frame_mat,
  'pile-foundation': shared_pile_foundation,
  'pipe-flow': shared_pipe_flow,
  'pipe-weight': shared_pipe_weight,
  'plaster': shared_plaster,
  'pool-fill-time': shared_pool_fill_time,
  'position-size': shared_position_size,
  'potential-energy': shared_potential_energy,
  'power-root': shared_power_root,
  'power-to-weight': shared_power_to_weight,
  'ppi-dpi': shared_ppi_dpi,
  'pressure': shared_pressure,
  'price-per-unit': shared_price_per_unit,
  'prime-factorization': shared_prime_factorization,
  'print-3d-cost': shared_print_3d_cost,
  'probability-basic': shared_probability_basic,
  'profit': shared_profit,
  'projectile-motion': shared_projectile_motion,
  'proportion': shared_proportion,
  'pyramid-frustum': shared_pyramid_frustum,
  'quadratic-equation': shared_quadratic_equation,
  'quarter-mile-elapsed-time': shared_quarter_mile_elapsed_time,
  'quartile': shared_quartile,
  'rafters': shared_rafters,
  'raid': shared_raid,
  'rainfall-volume': shared_rainfall_volume,
  'ratio': shared_ratio,
  'rc-filter': shared_rc_filter,
  'reading-speed': shared_reading_speed,
  'real-return': shared_real_return,
  'recipe-cost': shared_recipe_cost,
  'recipe-scale': shared_recipe_scale,
  'refinancing': shared_refinancing,
  'relativity-dilation': shared_relativity_dilation,
  'rental-yield': shared_rental_yield,
  'resistor-color': shared_resistor_color,
  'resistor-network': shared_resistor_network,
  'return-rate': shared_return_rate,
  'revenue-per-employee': shared_revenue_per_employee,
  'risk-reward': shared_risk_reward,
  'rms-voltage': shared_rms_voltage,
  'roas': shared_roas,
  'roast-time': shared_roast_time,
  'roi': shared_roi,
  'roman-numerals': shared_roman_numerals,
  'roof-area': shared_roof_area,
  'roof-battens': shared_roof_battens,
  'room-volume': shared_room_volume,
  'rounding': shared_rounding,
  'rule-of-72': shared_rule_of_72,
  'salary-convert': shared_salary_convert,
  'salary-raise': shared_salary_raise,
  'sample-size': shared_sample_size,
  'savings-goal': shared_savings_goal,
  'savings-rate': shared_savings_rate,
  'scale-model': shared_scale_model,
  'sealant-volume': shared_sealant_volume,
  'shipping-per-unit': shared_shipping_per_unit,
  'simple-interest': shared_simple_interest,
  'single-phase': shared_single_phase,
  'skirting': shared_skirting,
  'slab-foundation': shared_slab_foundation,
  'sleep-time': shared_sleep_time,
  'slope': shared_slope,
  'solution-concentration': shared_solution_concentration,
  'specific-heat': shared_specific_heat,
  'speed-distance-time': shared_speed_distance_time,
  'speed-of-sound': shared_speed_of_sound,
  'stairs': shared_stairs,
  'stats-descriptive': shared_stats_descriptive,
  'steps-distance-calories': shared_steps_distance_calories,
  'stock-duration': shared_stock_duration,
  'stopping-distance': shared_stopping_distance,
  'stress-strain': shared_stress_strain,
  'strip-foundation': shared_strip_foundation,
  'subscriptions-cost': shared_subscriptions_cost,
  'tank-volume': shared_tank_volume,
  'terminal-velocity': shared_terminal_velocity,
  'test-score-percent': shared_test_score_percent,
  'text-reading-time': shared_text_reading_time,
  'text-word-char-count': shared_text_word_char_count,
  'thermal-conduction': shared_thermal_conduction,
  'thin-lens': shared_thin_lens,
  'time-duration': shared_time_duration,
  'time-value-money': shared_time_value_money,
  'timesheet-week': shared_timesheet_week,
  'timezone-difference': shared_timezone_difference,
  'tip': shared_tip,
  'tire-size': shared_tire_size,
  'transformer-ratio': shared_transformer_ratio,
  'trip-budget': shared_trip_budget,
  'trip-cost': shared_trip_cost,
  'tv-monitor-viewing-distance': shared_tv_monitor_viewing_distance,
  'underfloor-heating': shared_underfloor_heating,
  'unix-timestamp': shared_unix_timestamp,
  'utility-total': shared_utility_total,
  'vacation-accrual': shared_vacation_accrual,
  'video-file-size': shared_video_file_size,
  'vo2max': shared_vo2max,
  'voltage-divider': shared_voltage_divider,
  'voltage-drop': shared_voltage_drop,
  'waist-ratio': shared_waist_ratio,
  'water-heating': shared_water_heating,
  'water-intake': shared_water_intake,
  'wave': shared_wave,
  'week-number': shared_week_number,
  'weighted-mean': shared_weighted_mean,
  'wheel-offset': shared_wheel_offset,
  'wind-chill': shared_wind_chill,
  'wind-power': shared_wind_power,
  'wood-weight': shared_wood_weight,
  'work': shared_work,
  'work-hours': shared_work_hours,
  'workday-cost': shared_workday_cost,
  'yeast-convert': shared_yeast_convert,
  'z-score': shared_z_score,
};

export const v2Runtimes: Record<string, CalculatorClientRuntime> = Object.fromEntries(
  Object.keys(v2Runners).map((id) => [id, {
    compute: v2Runners[id],
    validate: v2Validators[id],
    validateDate: v2DateValidators[id],
    contextualField: v2ContextualFields[id],
    localization: withSharedPhrases(
      Object.fromEntries(
        TRANSLATED_LOCALES
          .filter((locale) => v2Localization[locale][id])
          .map((locale) => [locale, v2Localization[locale][id]]),
      ),
      v2SharedPhrases[id] ?? {},
    ),
  }]),
);

/**
 * Рантаймы наследственных калькуляторов — те же, что несут их точки входа.
 * Существуют затем, чтобы тест шёл по тому набору фраз, который увидит
 * посетитель, а не по более полному.
 */
export const legacyRuntimes: Record<string, CalculatorClientRuntime> = {
  'credit-calculator': { compute: calcCredit, localization: legacy_credit_calculator },
  'deposit-calculator': { compute: calcDeposit, localization: legacy_deposit_calculator },
  'compound-interest': { compute: calcCompound, localization: legacy_compound_interest },
  'mortgage-calculator': { compute: calcMortgage, localization: legacy_mortgage_calculator },
  'currency-converter': { compute: calcCurrency, localization: legacy_currency_converter },
  'usd-to-eur': { compute: calcCurrency, localization: legacy_usd_to_eur },
  'eur-to-mdl': { compute: calcCurrency, localization: legacy_eur_to_mdl },
  'usd-to-mdl': { compute: calcCurrency, localization: legacy_usd_to_mdl },
  'bmi-calculator': { compute: calcBmi, localization: legacy_bmi_calculator },
  'calorie-calculator': { compute: calcCalorie, localization: legacy_calorie_calculator },
  'running-pace-calculator': { compute: calcPace, localization: legacy_running_pace_calculator },
  'one-rep-max-calculator': { compute: calcOneRm, localization: legacy_one_rep_max_calculator },
  'tile-calculator': { compute: calcTile, localization: withSharedPhrases(legacy_localization_tile_calculator, legacy_tile_calculator) },
  'wallpaper-calculator': { compute: calcWallpaper, validate: legacy_validate_wallpaper_calculator, localization: withSharedPhrases(legacy_localization_wallpaper_calculator, legacy_wallpaper_calculator) },
  'laminate-calculator': { compute: calcLaminate, localization: withSharedPhrases(legacy_localization_laminate_calculator, legacy_laminate_calculator) },
  'screed-calculator': { compute: calcScreed, localization: withSharedPhrases(legacy_localization_screed_calculator, legacy_screed_calculator) },
  'age-calculator': { compute: calcAge, localization: withSharedPhrases(legacy_localization_age_calculator, legacy_age_calculator) },
  'working-days-calculator': { compute: calcWorkingDays, localization: withSharedPhrases(legacy_localization_working_days_calculator, legacy_working_days_calculator) },
  'date-shift-calculator': { compute: calcDateShift, validate: legacy_validate_date_shift_calculator, localization: withSharedPhrases(legacy_localization_date_shift_calculator, legacy_date_shift_calculator) },
  'income-tax-calculator': { compute: calcIncomeTax, localization: withSharedPhrases(legacy_localization_income_tax_calculator, legacy_income_tax_calculator) },
  'vat-calculator': { compute: calcVat, localization: withSharedPhrases(legacy_localization_vat_calculator, legacy_vat_calculator) },
  'discount-calculator': { compute: calcDiscount, localization: legacy_discount_calculator },
  'margin-calculator': { compute: calcMargin, validate: legacy_validate_margin_calculator, localization: withSharedPhrases(legacy_localization_margin_calculator, legacy_margin_calculator) },
  'break-even-calculator': { compute: calcBreakEven, validate: legacy_validate_break_even_calculator, localization: withSharedPhrases(legacy_localization_break_even_calculator, legacy_break_even_calculator) },
  'body-fat-calculator': { compute: calcBodyFat, localization: legacy_body_fat_calculator },
  'brick-calculator': { compute: calcBrick, localization: withSharedPhrases(legacy_localization_brick_calculator, legacy_brick_calculator) },
};

export function runtimeFor(id: string): CalculatorClientRuntime {
  const runtime = v2Runtimes[id] ?? legacyRuntimes[id];
  if (!runtime) throw new Error(`Нет рантайма для калькулятора ${id}`);
  return runtime;
}
