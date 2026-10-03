import type { CalculatorLocalization } from '../../lib/platform/types';

const contractValues = {
  "en": {
    "Введите корректные значения": "Enter valid numerical values",
    "Результат выходит за числовые пределы расчёта": "The result exceeds the numerical limits of this calculation"
  },
  "uk": {
    "Введите корректные значения": "Введіть коректні числові значення",
    "Результат выходит за числовые пределы расчёта": "Результат виходить за числові межі розрахунку"
  },
  "de": {
    "Введите корректные значения": "Gib gültige Zahlenwerte ein",
    "Результат выходит за числовые пределы расчёта": "Das Ergebnis überschreitet die Zahlengrenzen dieser Rechnung"
  },
  "es": {
    "Введите корректные значения": "Introduce valores numéricos válidos",
    "Результат выходит за числовые пределы расчёта": "El resultado supera los límites numéricos del cálculo"
  }
} as const;

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'salary': 'Grundgehalt',
      'bonusPct': 'Bonus, % des Gehalts',
      'taxPct': 'Steuersatz, %',
    },
    results: {
      'Премия на руки': 'Bonus nach Steuer',
      'Премия до налога': 'Bonus vor Steuer',
      'Налог': 'Einbehaltene Steuer',
      'Оклад': 'Grundgehalt',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      ...contractValues.de,
      'Оклад должен быть больше нуля': 'Das Gehalt muss größer als null sein',
      'Процент премии не может быть отрицательным': 'Der Bonusprozentsatz kann nicht negativ sein',
      'Ставка налога должна быть от нуля до ста процентов': 'Der Steuersatz muss zwischen null und hundert Prozent liegen',
    },
  },
  en: {
    fields: {
      salary: 'Base salary',
      bonusPct: 'Bonus, % of salary',
      taxPct: 'Income tax rate, %',
    },
    results: {
      'Премия на руки': 'Bonus after tax',
      'Премия до налога': 'Bonus before tax',
      'Налог': 'Tax withheld',
      'Оклад': 'Base salary',
      'Проверьте данные': 'Check the values',
    },
    values: {
      ...contractValues.en,
      'Оклад должен быть больше нуля': 'The salary must be greater than zero',
      'Процент премии не может быть отрицательным': 'The bonus percentage cannot be negative',
      'Ставка налога должна быть от нуля до ста процентов': 'The tax rate must be between zero and one hundred per cent',
    },
  },
  uk: {
    fields: {
      salary: 'Оклад',
      bonusPct: 'Премія, % від окладу',
      taxPct: 'Ставка податку на доходи, %',
    },
    results: {
      'Премия на руки': 'Премія на руки',
      'Премия до налога': 'Премія до податку',
      'Налог': 'Утриманий податок',
      'Оклад': 'Оклад',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      ...contractValues.uk,
      'Оклад должен быть больше нуля': 'Оклад має бути більшим за нуль',
      'Процент премии не может быть отрицательным': 'Відсоток премії не може бути від’ємним',
      'Ставка налога должна быть от нуля до ста процентов': 'Ставка податку має бути від нуля до ста відсотків',
    },
  },
  es: {
    fields: {
      "salary": "Salario base",
      "bonusPct": "Bonus, % del salario",
      "taxPct": "Tipo de retención, %",
    },
    options: {},
    results: {
      "Премия на руки": "Bonus neto",
      "Премия до налога": "Bonus antes de impuestos",
      "Налог": "Retención",
      "Оклад": "Salario base",
      "Проверьте данные": "Revisa los datos",
    },
    values: {
      ...contractValues.es,
      "Оклад должен быть больше нуля": "El salario debe ser mayor que cero",
      "Процент премии не может быть отрицательным": "El porcentaje del bonus no puede ser negativo",
      "Ставка налога должна быть от нуля до ста процентов": "El tipo de retención debe estar entre cero y cien por ciento",
    },
  },
};
