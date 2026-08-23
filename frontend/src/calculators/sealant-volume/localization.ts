import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      width: 'Joint width, mm', depth: 'Joint depth, mm', length: 'Joint length, m',
      cart: 'Cartridge volume, ml', waste: 'Allowance, %',
    },
    options: {},
    results: {
      'Нужно герметика': 'Sealant needed', 'Без запаса': 'Without allowance',
      'Картриджей': 'Cartridges', 'Метров из одного картриджа': 'Metres per cartridge',
      'Сечение шва': 'Joint section', 'Проверьте данные': 'Check the values',
    },
    values: {
      'мл': 'mL', 'шт': 'pcs', 'м': 'm', 'мм²': 'mm²',
      'Ширина шва должна быть больше нуля': 'The joint width must be greater than zero',
      'Глубина шва должна быть больше нуля': 'The joint depth must be greater than zero',
      'Длина шва должна быть больше нуля': 'The joint length must be greater than zero',
      'Объём картриджа должен быть больше нуля': 'The cartridge volume must be greater than zero',
      'Запас не может быть отрицательным': 'The allowance cannot be negative',
    },
  },
  uk: {
    fields: {
      width: 'Ширина шва, мм', depth: 'Глибина шва, мм', length: 'Довжина шва, м',
      cart: 'Обʼєм картриджа, мл', waste: 'Запас, %',
    },
    options: {},
    results: {
      'Нужно герметика': 'Потрібно герметика', 'Без запаса': 'Без запасу',
      'Картриджей': 'Картриджів', 'Метров из одного картриджа': 'Метрів з одного картриджа',
      'Сечение шва': 'Переріз шва', 'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'мл': 'мл', 'шт': 'шт', 'м': 'м', 'мм²': 'мм²',
      'Ширина шва должна быть больше нуля': 'Ширина шва має бути більшою за нуль',
      'Глубина шва должна быть больше нуля': 'Глибина шва має бути більшою за нуль',
      'Длина шва должна быть больше нуля': 'Довжина шва має бути більшою за нуль',
      'Объём картриджа должен быть больше нуля': 'Обʼєм картриджа має бути більшим за нуль',
      'Запас не может быть отрицательным': 'Запас не може бути відʼємним',
    },
  },
};
