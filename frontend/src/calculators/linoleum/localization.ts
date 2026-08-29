import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'length': 'Raumlänge, m',
      'width': 'Raumbreite, m',
      'rollWidth': 'Bahnenbreite, m',
      'reserve': 'Zuschlag, %',
    },
    results: {
      'Погонных метров': 'Laufmeter',
      'Полос': 'Bahnen',
      'Площадь пола': 'Bodenfläche',
      'Куплено': 'Gekauft',
      'Обрезки': 'Verschnitt',
      'Швов': 'Nähte',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'м': 'm',
      'м²': 'm²',
      'Размеры комнаты должны быть больше нуля': 'Die Raummaße müssen größer als null sein',
      'Ширина рулона должна быть больше нуля': 'Die Bahnenbreite muss größer als null sein',
      'Запас должен быть от 0 до 50 %': 'Der Zuschlag muss zwischen 0 und 50 % liegen',
    },
  },
  en: {
    fields: { "length": "Room length, m", "width": "Room width, m", "rollWidth": "Roll width, m", "reserve": "Allowance, %" },
    options: {},
    results: {
      "Погонных метров": "Running metres", "Полос": "Strips", "Площадь пола": "Floor area",
      "Куплено": "Bought", "Обрезки": "Offcut", "Швов": "Seams", "Проверьте данные": "Check the values",
    },
    values: {
      "м": "m", "м²": "m²",
      "Размеры комнаты должны быть больше нуля": "The room dimensions must be greater than zero",
      "Ширина рулона должна быть больше нуля": "The roll width must be greater than zero",
      "Запас должен быть от 0 до 50 %": "The allowance must be between 0 and 50 %",
    },
  },
  uk: {
    fields: { "length": "Довжина кімнати, м", "width": "Ширина кімнати, м", "rollWidth": "Ширина рулону, м", "reserve": "Запас, %" },
    options: {},
    results: {
      "Погонных метров": "Погонних метрів", "Полос": "Смуг", "Площадь пола": "Площа підлоги",
      "Куплено": "Куплено", "Обрезки": "Обрізки", "Швов": "Швів", "Проверьте данные": "Перевірте дані",
    },
    values: {
      "м": "м", "м²": "м²",
      "Размеры комнаты должны быть больше нуля": "Розміри кімнати мають бути більшими за нуль",
      "Ширина рулона должна быть больше нуля": "Ширина рулону має бути більшою за нуль",
      "Запас должен быть от 0 до 50 %": "Запас має бути від 0 до 50 %",
    },
  },
};
