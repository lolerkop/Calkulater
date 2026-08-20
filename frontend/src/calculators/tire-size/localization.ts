import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      "width": "Tire width, mm",
      "profile": "Profile, % of width",
      "diameter": "Rim diameter, inches",
    },
    options: {},
    results: {
      "Внешний диаметр": "Overall diameter",
      "Высота профиля": "Sidewall height",
      "Длина окружности": "Circumference",
      "Оборотов на километр": "Revolutions per kilometre",
      "Диаметр в дюймах": "Diameter in inches",
      "Проверьте данные": "Check the values",
    },
    values: {
      "мм": "mm",
      "Ширина шины должна быть больше нуля": "The tire width must be greater than zero",
      "Профиль должен быть больше нуля": "The profile must be greater than zero",
      "Диаметр диска должен быть больше нуля": "The rim diameter must be greater than zero",
    },
  },
  uk: {
    fields: {
      "width": "Ширина шини, мм",
      "profile": "Профіль, % від ширини",
      "diameter": "Діаметр диска, дюймів",
    },
    options: {},
    results: {
      "Внешний диаметр": "Зовнішній діаметр",
      "Высота профиля": "Висота профілю",
      "Длина окружности": "Довжина кола",
      "Оборотов на километр": "Обертів на кілометр",
      "Диаметр в дюймах": "Діаметр у дюймах",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "мм": "мм",
      "Ширина шины должна быть больше нуля": "Ширина шини має бути більшою за нуль",
      "Профиль должен быть больше нуля": "Профіль має бути більшим за нуль",
      "Диаметр диска должен быть больше нуля": "Діаметр диска має бути більшим за нуль",
    },
  },
};
