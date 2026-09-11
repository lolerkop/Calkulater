import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'weight': 'Körpergewicht, kg',
      'activityMinutes': 'Bewegungsminuten am Tag',
      'hotWeather': 'Heißes Wetter',
    },
    options: {
      'no': 'Nein',
      'yes': 'Ja',
    },
    results: {
      'Норма воды в сутки': 'Wasserbedarf am Tag',
      'Базовая норма': 'Grundbedarf',
      'Надбавка за нагрузку': 'Zuschlag für Bewegung',
      'Стаканов по 250 мл': 'Gläser zu 250 ml',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Масса тела должна быть больше нуля': 'Das Körpergewicht muss größer als null sein',
      'Минуты нагрузки не могут быть отрицательными': 'Die Bewegungsminuten können nicht negativ sein',
    },
  },
  en: {
    fields: {
      weight: 'Body weight, kg',
      activityMinutes: 'Minutes of activity per day',
      hotWeather: 'Hot weather',
    },
    options: { no: 'No', yes: 'Yes' },
    results: {
      'Норма воды в сутки': 'Daily water intake',
      'Базовая норма': 'Baseline amount',
      'Надбавка за нагрузку': 'Activity allowance',
      'Стаканов по 250 мл': 'Glasses of 250 ml',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'Масса тела должна быть больше нуля': 'The body weight must be greater than zero',
      'Минуты нагрузки не могут быть отрицательными': 'Activity minutes cannot be negative',
    },
  },
  uk: {
    fields: {
      weight: 'Маса тіла, кг',
      activityMinutes: 'Хвилин навантаження на день',
      hotWeather: 'Спекотна погода',
    },
    options: { no: 'Ні', yes: 'Так' },
    results: {
      'Норма воды в сутки': 'Норма води на добу',
      'Базовая норма': 'Базова норма',
      'Надбавка за нагрузку': 'Надбавка за навантаження',
      'Стаканов по 250 мл': 'Склянок по 250 мл',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'Масса тела должна быть больше нуля': 'Маса тіла має бути більшою за нуль',
      'Минуты нагрузки не могут быть отрицательными': 'Хвилини навантаження не можуть бути від’ємними',
    },
  },
  es: {
    fields: {
      "weight": "Peso corporal, kg",
      "activityMinutes": "Minutos de actividad al día",
      "hotWeather": "Hace calor",
    },
    options: {
      "no": "No",
      "yes": "Sí",
    },
    results: {
      "Норма воды в сутки": "Consumo diario de agua",
      "Базовая норма": "Cantidad base",
      "Надбавка за нагрузку": "Suplemento por actividad",
      "Стаканов по 250 мл": "Vasos de 250 ml",
      "Проверьте данные": "Revisa los datos",
    },
    values: {
      "Масса тела должна быть больше нуля": "El peso corporal debe ser mayor que cero",
      "Минуты нагрузки не могут быть отрицательными": "Los minutos de actividad no pueden ser negativos",
    },
  },
};
