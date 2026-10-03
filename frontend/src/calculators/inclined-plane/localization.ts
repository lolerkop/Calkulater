import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'm': "Masse des Körpers",
      'angle': "Neigungswinkel",
      'mu': "Gleitreibungszahl",
    },
    results: {
      'Скатывающая сила': 'Hangabtriebskraft',
      'Сила нормального давления': 'Normalkraft',
      'Сила трения': 'Reibungskraft',
      'Равнодействующая': 'Resultierende Kraft',
      'Ускорение': 'Beschleunigung',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      "Неизвестный режим расчёта": "Unbekannter Berechnungsmodus",
      "Введите конечные числа для выбранного режима": "Gib endliche Zahlen für den gewählten Modus ein",
      "Результат выходит за числовой диапазон": "Das Ergebnis überschreitet den Zahlenbereich",

      'Н': 'N',
      'м/с²': 'm/s²',
      'Масса должна быть больше нуля': 'Die Masse muss größer als null sein',
      'Угол наклона задаётся от 0 до 90 градусов': 'Der Neigungswinkel liegt zwischen 0 und 90 Grad',
      'Коэффициент трения не может быть отрицательным': 'Die Reibungszahl kann nicht negativ sein',
    },
  },
  en: {
    fields: { m: "Body mass", angle: "Slope angle", mu: "Kinetic friction coefficient" },
    options: {},
    results: {
      'Скатывающая сила': 'Force along the slope', 'Сила нормального давления': 'Normal force',
      'Сила трения': 'Friction force', 'Равнодействующая': 'Net force', 'Ускорение': 'Acceleration',
      'Проверьте данные': 'Check the values',
    },
    values: {
      "Неизвестный режим расчёта": "Unknown calculation mode",
      "Введите конечные числа для выбранного режима": "Enter finite numbers for the selected mode",
      "Результат выходит за числовой диапазон": "The result exceeds the numerical range",

      'Н': 'N', 'м/с²': 'm/s²',
      'Масса должна быть больше нуля': 'The mass must be greater than zero',
      'Угол наклона задаётся от 0 до 90 градусов': 'The slope angle runs from 0 to 90 degrees',
      'Коэффициент трения не может быть отрицательным': 'The friction coefficient cannot be negative',
    },
  },
  uk: {
    fields: { m: "Маса тіла", angle: "Кут нахилу", mu: "Коефіцієнт тертя ковзання" },
    options: {},
    results: {
      'Скатывающая сила': 'Скочувальна сила', 'Сила нормального давления': 'Сила нормального тиску',
      'Сила трения': 'Сила тертя', 'Равнодействующая': 'Рівнодійна', 'Ускорение': 'Прискорення',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      "Неизвестный режим расчёта": "Невідомий режим розрахунку",
      "Введите конечные числа для выбранного режима": "Введіть скінченні числа для обраного режиму",
      "Результат выходит за числовой диапазон": "Результат виходить за числовий діапазон",

      'Н': 'Н', 'м/с²': 'м/с²',
      'Масса должна быть больше нуля': 'Маса має бути більшою за нуль',
      'Угол наклона задаётся от 0 до 90 градусов': 'Кут нахилу задається від 0 до 90 градусів',
      'Коэффициент трения не может быть отрицательным': 'Коефіцієнт тертя не може бути від’ємним',
    },
  },
  es: {
    fields: {
      "m": "Masa del cuerpo",
      "angle": "Ángulo de inclinación",
      "mu": "Coeficiente de rozamiento cinético",
    },
    options: {},
    results: {
      "Скатывающая сила": "Fuerza a lo largo de la pendiente",
      "Сила нормального давления": "Fuerza normal",
      "Сила трения": "Fuerza de rozamiento",
      "Равнодействующая": "Fuerza resultante",
      "Ускорение": "Aceleración",
      "Проверьте данные": "Revisa los datos",
    },
    values: {
      "Неизвестный режим расчёта": "Modo de cálculo desconocido",
      "Введите конечные числа для выбранного режима": "Introduce números finitos para el modo elegido",
      "Результат выходит за числовой диапазон": "El resultado supera el rango numérico",

      "Н": "N",
      "м/с²": "m/s²",
      "Масса должна быть больше нуля": "La masa debe ser mayor que cero",
      "Угол наклона задаётся от 0 до 90 градусов": "El ángulo de inclinación va de 0 a 90 grados",
      "Коэффициент трения не может быть отрицательным": "El coeficiente de rozamiento no puede ser negativo",
    },
  },
};
