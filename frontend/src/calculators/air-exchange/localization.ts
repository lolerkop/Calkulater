import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'area': 'Raumfläche, m²',
      'height': 'Raumhöhe, m',
      'ach': 'Luftwechsel je Stunde, 1/h',
    },
    results: {
      'Требуемый расход воздуха': 'Nötiger Volumenstrom',
      'Объём помещения': 'Raumvolumen',
      'В литрах в секунду': 'In Litern je Sekunde',
      'Смен воздуха в сутки': 'Luftwechsel je Tag',
      'В кубометрах в минуту': 'In Kubikmetern je Minute',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'м³/ч': 'm³/h',
      'м³': 'm³',
      'л/с': 'l/s',
      'м³/мин': 'm³/min',
      'Площадь помещения должна быть больше нуля': 'Die Raumfläche muss größer als null sein',
      'Высота потолка должна быть больше нуля': 'Die Raumhöhe muss größer als null sein',
      'Кратность воздухообмена должна быть больше нуля': 'Die Luftwechselrate muss größer als null sein',
    },
  },
  en: {
    fields: { area: 'Room area, m²', height: 'Ceiling height, m', ach: 'Air changes per hour, 1/h' },
    options: {},
    results: {
      'Требуемый расход воздуха': 'Required airflow', 'Объём помещения': 'Room volume',
      'В литрах в секунду': 'In litres per second', 'Смен воздуха в сутки': 'Air changes per day',
      'В кубометрах в минуту': 'In cubic metres per minute', 'Проверьте данные': 'Check the values',
    },
    values: {
      'м³/ч': 'm³/h', 'м³': 'm³', 'л/с': 'L/s', 'м³/мин': 'm³/min',
      'Площадь помещения должна быть больше нуля': 'The room area must be greater than zero',
      'Высота потолка должна быть больше нуля': 'The ceiling height must be greater than zero',
      'Кратность воздухообмена должна быть больше нуля': 'The air change rate must be greater than zero',
    },
  },
  uk: {
    fields: { area: 'Площа приміщення, м²', height: 'Висота стелі, м', ach: 'Кратність повітрообміну, 1/год' },
    options: {},
    results: {
      'Требуемый расход воздуха': 'Потрібна витрата повітря', 'Объём помещения': 'Об’єм приміщення',
      'В литрах в секунду': 'У літрах за секунду', 'Смен воздуха в сутки': 'Змін повітря за добу',
      'В кубометрах в минуту': 'У кубометрах за хвилину', 'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'м³/ч': 'м³/год', 'м³': 'м³', 'л/с': 'л/с', 'м³/мин': 'м³/хв',
      'Площадь помещения должна быть больше нуля': 'Площа приміщення має бути більшою за нуль',
      'Высота потолка должна быть больше нуля': 'Висота стелі має бути більшою за нуль',
      'Кратность воздухообмена должна быть больше нуля': 'Кратність повітрообміну має бути більшою за нуль',
    },
  },
  es: {
    fields: {
      "area": "Superficie de la sala, m²",
      "height": "Altura del techo, m",
      "ach": "Renovaciones por hora, 1/h",
    },
    options: {},
    results: {
      "Требуемый расход воздуха": "Caudal de aire necesario",
      "Объём помещения": "Volumen de la sala",
      "В литрах в секунду": "En litros por segundo",
      "Смен воздуха в сутки": "Renovaciones de aire al día",
      "В кубометрах в минуту": "En metros cúbicos por minuto",
      "Проверьте данные": "Revisa los datos",
    },
    values: {
      "м³/ч": "m³/h",
      "м³": "m³",
      "л/с": "l/s",
      "м³/мин": "m³/min",
      "Площадь помещения должна быть больше нуля": "La superficie de la sala debe ser mayor que cero",
      "Высота потолка должна быть больше нуля": "La altura del techo debe ser mayor que cero",
      "Кратность воздухообмена должна быть больше нуля": "La tasa de renovación debe ser mayor que cero",
    },
  },
};
