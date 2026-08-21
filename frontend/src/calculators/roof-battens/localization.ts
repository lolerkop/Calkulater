import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: { "area": "Roof area, m²", "step": "Batten spacing, m", "battenLength": "Batten length, m", "sectionWidth": "Section width, mm", "sectionHeight": "Section height, mm", "waste": "Allowance, %" },
    options: {},
    results: {
      "Погонных метров": "Running metres", "Брусков": "Battens", "Объём древесины": "Timber volume",
      "Площадь крыши": "Roof area", "Шаг обрешётки": "Batten spacing",
      "Метров на квадратный метр": "Metres per square metre", "Проверьте данные": "Check the values",
    },
    values: {
      "м": "m", "м²": "m²", "м³": "m³",
      "Площадь крыши должна быть больше нуля": "The roof area must be greater than zero",
      "Шаг обрешётки должен быть больше нуля": "The batten spacing must be greater than zero",
      "Длина бруска должна быть больше нуля": "The batten length must be greater than zero",
      "Сечение бруска должно быть больше нуля": "The batten section must be greater than zero",
      "Запас должен быть от 0 до 50 %": "The allowance must be between 0 and 50 %",
    },
  },
  uk: {
    fields: { "area": "Площа даху, м²", "step": "Крок обрешітки, м", "battenLength": "Довжина бруска, м", "sectionWidth": "Ширина перерізу, мм", "sectionHeight": "Висота перерізу, мм", "waste": "Запас, %" },
    options: {},
    results: {
      "Погонных метров": "Погонних метрів", "Брусков": "Брусків", "Объём древесины": "Об’єм деревини",
      "Площадь крыши": "Площа даху", "Шаг обрешётки": "Крок обрешітки",
      "Метров на квадратный метр": "Метрів на квадратний метр", "Проверьте данные": "Перевірте дані",
    },
    values: {
      "м": "м", "м²": "м²", "м³": "м³",
      "Площадь крыши должна быть больше нуля": "Площа даху має бути більшою за нуль",
      "Шаг обрешётки должен быть больше нуля": "Крок обрешітки має бути більшим за нуль",
      "Длина бруска должна быть больше нуля": "Довжина бруска має бути більшою за нуль",
      "Сечение бруска должно быть больше нуля": "Переріз бруска має бути більшим за нуль",
      "Запас должен быть от 0 до 50 %": "Запас має бути від 0 до 50 %",
    },
  },
};
