import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
  'Сопротивление': 'Resistance', 'Падение на резисторе': 'Voltage across the resistor',
  'Мощность на резисторе': 'Power in the resistor', 'Мощность на светодиоде': 'Power in the LED',
  'Рабочий ток': 'Operating current', 'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Сопротивление': 'Опір', 'Падение на резисторе': 'Падіння на резисторі',
  'Мощность на резисторе': 'Потужність на резисторі', 'Мощность на светодиоде': 'Потужність на світлодіоді',
  'Рабочий ток': 'Робочий струм', 'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      supplyVoltage: 'Supply voltage, V', forwardVoltage: 'LED forward voltage, V',
      current: 'Forward current', currentUnit: 'Current unit',
    },
    options: { ma: 'milliamps (mA)', a: 'amps (A)' },
    results: RESULTS_EN,
    values: {
      'Ом': 'Ω', 'В': 'V', 'Вт': 'W', 'мА': 'mA',
      'Напряжение питания должно быть больше нуля': 'The supply voltage must be greater than zero',
      'Прямое напряжение должно быть больше нуля': 'The forward voltage must be greater than zero',
      'Прямое напряжение должно быть меньше напряжения питания': 'The forward voltage must be lower than the supply voltage',
      'Ток должен быть больше нуля': 'The current must be greater than zero',
    },
  },
  uk: {
    fields: {
      supplyVoltage: 'Напруга живлення, В', forwardVoltage: 'Пряма напруга світлодіода, В',
      current: 'Прямий струм', currentUnit: 'Одиниця струму',
    },
    options: { ma: 'міліампери (мА)', a: 'ампери (А)' },
    results: RESULTS_UK,
    values: {
      'Ом': 'Ом', 'В': 'В', 'Вт': 'Вт', 'мА': 'мА',
      'Напряжение питания должно быть больше нуля': 'Напруга живлення має бути більшою за нуль',
      'Прямое напряжение должно быть больше нуля': 'Пряма напруга має бути більшою за нуль',
      'Прямое напряжение должно быть меньше напряжения питания': 'Пряма напруга має бути меншою за напругу живлення',
      'Ток должен быть больше нуля': 'Струм має бути більшим за нуль',
    },
  },
};
