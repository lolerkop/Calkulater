import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: { volume: 'Body volume, m³', rhoFluid: 'Fluid density, kg/m³', mass: 'Body mass, kg' },
    options: {},
    results: {
      'Выталкивающая сила': 'Buoyant force', 'Вес тела': 'Weight of the body',
      'Равнодействующая': 'Net force', 'Вытесненная масса': 'Displaced mass',
      'Поведение в жидкости': 'Behaviour in the fluid', 'Проверьте данные': 'Check the values',
    },
    values: {
      'Н': 'N', 'кг': 'kg',
      'нейтральная плавучесть': 'neutrally buoyant', 'всплывает': 'floats up', 'тонет': 'sinks',
      'Объём тела должен быть больше нуля': 'The body volume must be greater than zero',
      'Плотность жидкости должна быть больше нуля': 'The fluid density must be greater than zero',
      'Масса не может быть отрицательной': 'The mass cannot be negative',
    },
  },
  uk: {
    fields: { volume: 'Об’єм тіла, м³', rhoFluid: 'Густина рідини, кг/м³', mass: 'Маса тіла, кг' },
    options: {},
    results: {
      'Выталкивающая сила': 'Виштовхувальна сила', 'Вес тела': 'Вага тіла',
      'Равнодействующая': 'Рівнодійна', 'Вытесненная масса': 'Витіснена маса',
      'Поведение в жидкости': 'Поведінка в рідині', 'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'Н': 'Н', 'кг': 'кг',
      'нейтральная плавучесть': 'нейтральна плавучість', 'всплывает': 'спливає', 'тонет': 'тоне',
      'Объём тела должен быть больше нуля': 'Об’єм тіла має бути більшим за нуль',
      'Плотность жидкости должна быть больше нуля': 'Густина рідини має бути більшою за нуль',
      'Масса не может быть отрицательной': 'Маса не може бути від’ємною',
    },
  },
};
