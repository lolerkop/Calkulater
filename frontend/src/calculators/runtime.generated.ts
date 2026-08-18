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

import { compute as compute_budget_50_30_20 } from './budget-50-30-20/compute';
import { compute as compute_cagr } from './cagr/compute';
import { compute as compute_calories_from_macros } from './calories-from-macros/compute';
import { compute as compute_commission } from './commission/compute';
import { validate as validate_commission } from './commission/validate';
import { contextualField as ctx_commission } from './commission/contextualField';
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
import { compute as compute_paint_calculator } from './paint-calculator/compute';
import { compute as compute_percent_calculator } from './percent-calculator/compute';
import { validate as validate_percent_calculator } from './percent-calculator/validate';
import { contextualField as ctx_percent_calculator } from './percent-calculator/contextualField';
import { compute as compute_room_volume } from './room-volume/compute';
import { compute as compute_savings_rate } from './savings-rate/compute';
import { compute as compute_time_duration } from './time-duration/compute';
import { compute as compute_week_number } from './week-number/compute';

export const v2Runners: Record<string, CalcFunction> = {
  'budget-50-30-20': compute_budget_50_30_20,
  'cagr': compute_cagr,
  'calories-from-macros': compute_calories_from_macros,
  'commission': compute_commission,
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
  'paint-calculator': compute_paint_calculator,
  'percent-calculator': compute_percent_calculator,
  'room-volume': compute_room_volume,
  'savings-rate': compute_savings_rate,
  'time-duration': compute_time_duration,
  'week-number': compute_week_number,
};

export const v2Validators: Record<string, CalculatorValidator> = {
  'commission': validate_commission,
  'percent-calculator': validate_percent_calculator,
};

export const v2ContextualFields: Record<string, CalculatorContextualField> = {
  'commission': ctx_commission,
  'percent-calculator': ctx_percent_calculator,
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
