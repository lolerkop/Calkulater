import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      "mode": "How the size is given",
      "etrtoRim": "Rim bead seat diameter, mm",
      "etrtoTire": "Tyre width, mm",
      "inches": "Wheel diameter, inches",
    },
    options: { "etrto": "ETRTO, in millimetres", "inches": "In inches" },
    results: {
      "Длина окружности": "Circumference",
      "Диаметр": "Diameter",
      "Диаметр в дюймах": "Diameter in inches",
      "Оборотов на километр": "Revolutions per kilometre",
      "Радиус": "Radius",
      "Проверьте данные": "Check the values",
    },
    values: {
      "мм": "mm",
      "Посадочный диаметр обода должен быть больше нуля": "The rim bead seat diameter must be greater than zero",
      "Ширина покрышки не может быть отрицательной": "The tyre width cannot be negative",
      "Диаметр в дюймах должен быть больше нуля": "The diameter in inches must be greater than zero",
      "Неизвестный режим": "Unknown mode",
    },
  },
  uk: {
    fields: {
      "mode": "Як задано розмір",
      "etrtoRim": "Посадковий діаметр обода, мм",
      "etrtoTire": "Ширина покришки, мм",
      "inches": "Діаметр колеса, дюймів",
    },
    options: { "etrto": "ETRTO, у міліметрах", "inches": "У дюймах" },
    results: {
      "Длина окружности": "Довжина кола",
      "Диаметр": "Діаметр",
      "Диаметр в дюймах": "Діаметр у дюймах",
      "Оборотов на километр": "Обертів на кілометр",
      "Радиус": "Радіус",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "мм": "мм",
      "Посадочный диаметр обода должен быть больше нуля": "Посадковий діаметр обода має бути більшим за нуль",
      "Ширина покрышки не может быть отрицательной": "Ширина покришки не може бути від’ємною",
      "Диаметр в дюймах должен быть больше нуля": "Діаметр у дюймах має бути більшим за нуль",
      "Неизвестный режим": "Невідомий режим",
    },
  },
};
