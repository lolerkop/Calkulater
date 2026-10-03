import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
  'Результат': 'Result', 'Сопротивление': 'Resistance', 'Ток': 'Current',
  'Напряжение': 'Voltage', 'Мощность': 'Power', 'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Результат': 'Результат', 'Сопротивление': 'Опір', 'Ток': 'Струм',
  'Напряжение': 'Напруга', 'Мощность': 'Потужність', 'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  en: {
    fields: { mode: 'Known pair', voltage: "Voltage", current: "Current", resistance: "Resistance" },
    options: {
      vi: 'voltage and current', vr: 'voltage and resistance', ir: 'current and resistance',
    },
    results: RESULTS_EN,
    values: {
      "Неизвестный режим расчёта": "Unknown calculation mode",
      "Введите конечные числа для выбранного режима": "Enter finite numbers for the selected mode",
      "Результат выходит за числовой диапазон": "The result exceeds the numerical range",

      'Ом': 'Ω', 'В': 'V', 'А': 'A', 'Вт': 'W', '(вычисляется)': '(computed)',
      'Значения не могут быть отрицательными': 'The values cannot be negative',
      'Ток должен быть больше нуля, иначе сопротивление не определено': 'The current must be greater than zero, otherwise the resistance has no defined value',
      'Сопротивление должно быть больше нуля, иначе ток не определён': 'The resistance must be greater than zero, otherwise the current has no defined value',
    },
  },
  uk: {
    fields: { mode: 'Відома пара', voltage: "Напруга", current: "Струм", resistance: "Опір" },
    options: {
      vi: 'напруга і струм', vr: 'напруга і опір', ir: 'струм і опір',
    },
    results: RESULTS_UK,
    values: {
      "Неизвестный режим расчёта": "Невідомий режим розрахунку",
      "Введите конечные числа для выбранного режима": "Введіть скінченні числа для обраного режиму",
      "Результат выходит за числовой диапазон": "Результат виходить за числовий діапазон",

      'Ом': 'Ом', 'В': 'В', 'А': 'А', 'Вт': 'Вт', '(вычисляется)': '(обчислюється)',
      'Значения не могут быть отрицательными': 'Значення не можуть бути від’ємними',
      'Ток должен быть больше нуля, иначе сопротивление не определено': 'Струм має бути більшим за нуль, інакше опір не визначений',
      'Сопротивление должно быть больше нуля, иначе ток не определён': 'Опір має бути більшим за нуль, інакше струм не визначений',
    },
  },
  de: {
      fields: {
        'mode': 'Bekanntes Paar',
        'voltage': "Spannung",
        'current': "Strom",
        'resistance': "Widerstand",
      },
      options: {
        'vi': 'Spannung und Strom',
        'vr': 'Spannung und Widerstand',
        'ir': 'Strom und Widerstand',
      },
      results: {
        'Результат': 'Ergebnis',
        'Сопротивление': 'Widerstand',
        'Ток': 'Strom',
        'Напряжение': 'Spannung',
        'Мощность': 'Leistung',
        'Проверьте данные': 'Prüfe die Werte',
      },
      values: {
      "Неизвестный режим расчёта": "Unbekannter Berechnungsmodus",
      "Введите конечные числа для выбранного режима": "Gib endliche Zahlen für den gewählten Modus ein",
      "Результат выходит за числовой диапазон": "Das Ergebnis überschreitet den Zahlenbereich",

        'Ом': 'Ω',
        'В': 'V',
        'А': 'A',
        'Вт': 'W',
        '(вычисляется)': '(wird berechnet)',
        'Значения не могут быть отрицательными': 'Die Werte dürfen nicht negativ sein',
        'Ток должен быть больше нуля, иначе сопротивление не определено': 'Der Strom muss größer als null sein, sonst ist der Widerstand nicht definiert',
        'Сопротивление должно быть больше нуля, иначе ток не определён': 'Der Widerstand muss größer als null sein, sonst ist der Strom nicht definiert',
      },
  },
  es: {
    fields: {
      "mode": "Par conocido",
      "voltage": "Tensión",
      "current": "Corriente",
      "resistance": "Resistencia",
    },
    options: {
      "vi": "tensión y corriente",
      "vr": "tensión y resistencia",
      "ir": "corriente y resistencia",
    },
    results: {
      "Результат": "Resultado",
      "Сопротивление": "Resistencia",
      "Ток": "Corriente",
      "Напряжение": "Tensión",
      "Мощность": "Potencia",
      "Проверьте данные": "Revisa los datos",
    },
    values: {
      "Неизвестный режим расчёта": "Modo de cálculo desconocido",
      "Введите конечные числа для выбранного режима": "Introduce números finitos para el modo elegido",
      "Результат выходит за числовой диапазон": "El resultado supera el rango numérico",

      "Ом": "Ω",
      "В": "V",
      "А": "A",
      "Вт": "W",
      "(вычисляется)": "(se calcula)",
      "Значения не могут быть отрицательными": "Los valores no pueden ser negativos",
      "Ток должен быть больше нуля, иначе сопротивление не определено": "La corriente debe ser mayor que cero; si no, la resistencia no está definida",
      "Сопротивление должно быть больше нуля, иначе ток не определён": "La resistencia debe ser mayor que cero; si no, la corriente no está definida",
    },
  },
};
