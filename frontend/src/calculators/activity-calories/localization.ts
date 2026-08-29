import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'activity': 'Tätigkeit',
      'met': 'Eigener MET-Wert',
      'weightKg': 'Körpergewicht, kg',
      'minutes': 'Dauer, min',
    },
    options: {
      'walking': 'Gehen, MET 3,5',
      'cycling': 'Radfahren, MET 7,5',
      'swimming': 'Schwimmen, MET 8,0',
      'running': 'Laufen, MET 9,8',
      'custom': 'eigener MET-Wert',
    },
    results: {
      'Потрачено калорий': 'Verbrannte Kalorien',
      'Калорий в минуту': 'Kalorien je Minute',
      'Расход в час': 'Verbrauch je Stunde',
      'Коэффициент MET': 'MET-Wert',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'ккал': 'kcal',
      'Коэффициент MET должен быть больше нуля': 'Der MET-Wert muss größer als null sein',
      'Масса тела должна быть больше нуля': 'Das Körpergewicht muss größer als null sein',
      'Длительность должна быть больше нуля': 'Die Dauer muss größer als null sein',
    },
  },
  en: {
    fields: {
      "activity": "Activity",
      "met": "Your own MET coefficient",
      "weightKg": "Body weight, kg",
      "minutes": "Duration, min",
    },
    options: {
      "walking": "walking, MET 3.5",
      "cycling": "cycling, MET 7.5",
      "swimming": "swimming, MET 8.0",
      "running": "running, MET 9.8",
      "custom": "your own MET coefficient",
    },
    results: {
      "Потрачено калорий": "Calories burned",
      "Калорий в минуту": "Calories per minute",
      "Расход в час": "Burn per hour",
      "Коэффициент MET": "MET coefficient",
      "Проверьте данные": "Check the values",
    },
    values: {
      "ккал": "kcal",
      "Коэффициент MET должен быть больше нуля": "The MET coefficient must be greater than zero",
      "Масса тела должна быть больше нуля": "Body weight must be greater than zero",
      "Длительность должна быть больше нуля": "The duration must be greater than zero",
    },
  },
  uk: {
    fields: {
      "activity": "Вид активності",
      "met": "Власний коефіцієнт MET",
      "weightKg": "Маса тіла, кг",
      "minutes": "Тривалість, хв",
    },
    options: {
      "walking": "ходьба, MET 3,5",
      "cycling": "велосипед, MET 7,5",
      "swimming": "плавання, MET 8,0",
      "running": "біг, MET 9,8",
      "custom": "власний коефіцієнт MET",
    },
    results: {
      "Потрачено калорий": "Витрачено калорій",
      "Калорий в минуту": "Калорій за хвилину",
      "Расход в час": "Витрата за годину",
      "Коэффициент MET": "Коефіцієнт MET",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "ккал": "ккал",
      "Коэффициент MET должен быть больше нуля": "Коефіцієнт MET має бути більшим за нуль",
      "Масса тела должна быть больше нуля": "Маса тіла має бути більшою за нуль",
      "Длительность должна быть больше нуля": "Тривалість має бути більшою за нуль",
    },
  },
};
