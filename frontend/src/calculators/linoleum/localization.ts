import { addBuildingWave13Messages } from '../beam-deflection/buildingWave13Messages';
import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'length': "Raumlänge",
      'width': "Raumbreite",
      'rollWidth': "Bahnenbreite",
      'reserve': "Zuschlag",
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
    fields: { "length": "Room length", "width": "Room width", "rollWidth": "Roll width", "reserve": "Allowance" },
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
    fields: { "length": "Довжина кімнати", "width": "Ширина кімнати", "rollWidth": "Ширина рулону", "reserve": "Запас" },
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
  es: {
    fields: {
      "length": "Largo de la habitación",
      "width": "Ancho de la habitación",
      "rollWidth": "Ancho del rollo",
      "reserve": "Margen",
    },
    options: {},
    results: {
      "Погонных метров": "Metros lineales",
      "Полос": "Tiras",
      "Площадь пола": "Superficie del suelo",
      "Куплено": "Comprado",
      "Обрезки": "Recorte",
      "Швов": "Juntas",
      "Проверьте данные": "Revisa los datos",
    },
    values: {
      "м": "m",
      "м²": "m²",
      "Размеры комнаты должны быть больше нуля": "Las dimensiones de la habitación deben ser mayores que cero",
      "Ширина рулона должна быть больше нуля": "El ancho del rollo debe ser mayor que cero",
      "Запас должен быть от 0 до 50 %": "El margen debe estar entre 0 y 50 %",
    },
  },
};

addBuildingWave13Messages(localization);
