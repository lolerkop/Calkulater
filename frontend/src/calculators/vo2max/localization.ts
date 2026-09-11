import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      mode: 'Estimation method',
      distance: 'Distance in 12 minutes, m',
      hrRest: 'Resting heart rate, bpm',
      hrMax: 'Maximum heart rate, bpm',
    },
    options: { cooper: 'Cooper test', hr: 'from heart rate' },
    results: {
      'МПК (VO₂max)': 'VO₂max',
      'Метод': 'Method',
      'Дистанция за 12 минут': 'Distance in 12 minutes',
      'Пульс покоя': 'Resting heart rate',
      'Максимальный пульс': 'Maximum heart rate',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'тест Купера': 'Cooper test',
      'по пульсу': 'from heart rate',
      'мл/кг/мин': 'ml/kg/min',
      'м': 'm',
      'Пульс покоя должен быть больше нуля': 'The resting heart rate must be greater than zero',
      'Максимальный пульс должен быть больше пульса покоя': 'The maximum heart rate must exceed the resting one',
      'Дистанция должна быть больше нуля': 'The distance must be greater than zero',
    },
  },
  uk: {
    fields: {
      mode: 'Метод оцінки',
      distance: 'Дистанція за 12 хвилин, м',
      hrRest: 'Пульс спокою, уд/хв',
      hrMax: 'Максимальний пульс, уд/хв',
    },
    options: { cooper: 'тест Купера', hr: 'за пульсом' },
    results: {
      'МПК (VO₂max)': 'МСК (VO₂max)',
      'Метод': 'Метод',
      'Дистанция за 12 минут': 'Дистанція за 12 хвилин',
      'Пульс покоя': 'Пульс спокою',
      'Максимальный пульс': 'Максимальний пульс',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'тест Купера': 'тест Купера',
      'по пульсу': 'за пульсом',
      'мл/кг/мин': 'мл/кг/хв',
      'м': 'м',
      'Пульс покоя должен быть больше нуля': 'Пульс спокою має бути більшим за нуль',
      'Максимальный пульс должен быть больше пульса покоя': 'Максимальний пульс має перевищувати пульс спокою',
      'Дистанция должна быть больше нуля': 'Дистанція має бути більшою за нуль',
    },
  },
  de: {
      fields: {
        'mode': 'Schätzmethode',
        'distance': 'Strecke in 12 Minuten, m',
        'hrRest': 'Ruhepuls, S/min',
        'hrMax': 'Maximalpuls, S/min',
      },
      options: {
        'cooper': 'Cooper-Test',
        'hr': 'über die Herzfrequenz',
      },
      results: {
        'МПК (VO₂max)': 'VO₂max',
        'Метод': 'Methode',
        'Дистанция за 12 минут': 'Strecke in 12 Minuten',
        'Пульс покоя': 'Ruhepuls',
        'Максимальный пульс': 'Maximalpuls',
        'Проверьте данные': 'Prüfe die Werte',
      },
      values: {
        'тест Купера': 'Cooper-Test',
        'по пульсу': 'über die Herzfrequenz',
        'мл/кг/мин': 'ml/kg/min',
        'м': 'm',
        'Пульс покоя должен быть больше нуля': 'Der Ruhepuls muss größer als null sein',
        'Максимальный пульс должен быть больше пульса покоя': 'Der Maximalpuls muss über dem Ruhepuls liegen',
        'Дистанция должна быть больше нуля': 'Die Strecke muss größer als null sein',
      },
  },
  es: {
    fields: {
      "mode": "Método de estimación",
      "distance": "Distancia en 12 minutos, m",
      "hrRest": "Frecuencia en reposo, ppm",
      "hrMax": "Frecuencia máxima, ppm",
    },
    options: {
      "cooper": "Test de Cooper",
      "hr": "a partir de la frecuencia cardíaca",
    },
    results: {
      "МПК (VO₂max)": "VO₂máx.",
      "Метод": "Método",
      "Дистанция за 12 минут": "Distancia en 12 minutos",
      "Пульс покоя": "Frecuencia en reposo",
      "Максимальный пульс": "Frecuencia máxima",
      "Проверьте данные": "Revisa los datos",
    },
    values: {
      "тест Купера": "test de Cooper",
      "по пульсу": "a partir de la frecuencia cardíaca",
      "мл/кг/мин": "ml/kg/min",
      "м": "m",
      "Пульс покоя должен быть больше нуля": "La frecuencia en reposo debe ser mayor que cero",
      "Максимальный пульс должен быть больше пульса покоя": "La frecuencia máxima debe superar a la de reposo",
      "Дистанция должна быть больше нуля": "La distancia debe ser mayor que cero",
    },
  },
};
