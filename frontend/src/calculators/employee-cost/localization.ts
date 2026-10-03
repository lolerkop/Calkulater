import type { CalculatorLocalization, CalculatorLocaleBundle, TranslatedLocale } from '../../lib/platform/types';
import { marketingScalarValues } from '../../lib/platform/marketingScalarLocalization';

const previousLocalization: CalculatorLocalization = {
  de: {
    fields: {
      'gross': 'Bruttogehalt, €',
      'taxPct': 'Arbeitgeberbeiträge, %',
      'overhead': 'Gemeinkosten je Zeitraum, €',
    },
    results: {
      'Полная стоимость сотрудника': 'Vollkosten des Mitarbeiters',
      'Взносы': 'Beiträge',
      'Оклад': 'Bruttogehalt',
      'Накладные': 'Gemeinkosten',
      'Множитель к окладу': 'Faktor zum Gehalt',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Оклад должен быть больше нуля': 'Das Gehalt muss größer als null sein',
      'Ставка взносов не может быть отрицательной': 'Der Beitragssatz kann nicht negativ sein',
      'Накладные расходы не могут быть отрицательными': 'Die Gemeinkosten können nicht negativ sein',
    },
  },
  en: {
    fields: {
      gross: 'Gross salary, ₽',
      taxPct: 'Employer contributions, %',
      overhead: 'Overhead per period, ₽',
    },
    results: {
      'Полная стоимость сотрудника': 'Total cost of the employee',
      'Взносы': 'Contributions',
      'Оклад': 'Gross salary',
      'Накладные': 'Overhead',
      'Множитель к окладу': 'Multiple of salary',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'Оклад должен быть больше нуля': 'The salary must be greater than zero',
      'Ставка взносов не может быть отрицательной': 'The contribution rate cannot be negative',
      'Накладные расходы не могут быть отрицательными': 'Overhead cannot be negative',
    },
  },
  uk: {
    fields: {
      gross: 'Оклад, ₽',
      taxPct: 'Внески роботодавця, %',
      overhead: 'Накладні витрати за період, ₽',
    },
    results: {
      'Полная стоимость сотрудника': 'Повна вартість співробітника',
      'Взносы': 'Внески',
      'Оклад': 'Оклад',
      'Накладные': 'Накладні',
      'Множитель к окладу': 'Множник до окладу',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'Оклад должен быть больше нуля': 'Оклад має бути більшим за нуль',
      'Ставка взносов не может быть отрицательной': 'Ставка внесків не може бути від’ємною',
      'Накладные расходы не могут быть отрицательными': 'Накладні витрати не можуть бути від’ємними',
    },
  },
  es: {
    fields: {
      "gross": "Salario bruto, €",
      "taxPct": "Cotizaciones a cargo de la empresa, %",
      "overhead": "Gastos generales por periodo, €",
    },
    options: {},
    results: {
      "Полная стоимость сотрудника": "Coste total del empleado",
      "Взносы": "Cotizaciones",
      "Оклад": "Salario bruto",
      "Накладные": "Gastos generales",
      "Множитель к окладу": "Múltiplo sobre el salario",
      "Проверьте данные": "Revisa los datos",
    },
    values: {
      "Оклад должен быть больше нуля": "El salario debe ser mayor que cero",
      "Ставка взносов не может быть отрицательной": "El tipo de cotización no puede ser negativo",
      "Накладные расходы не могут быть отрицательными": "Los gastos generales no pueden ser negativos",
    },
  },
};

const contractOverrides: Record<TranslatedLocale, CalculatorLocaleBundle> = {
  "en": {
    "fields": {
      "gross": "Gross salary before deductions"
    },
    "values": {
      "Ставка взносов должна быть от нуля до двухсот процентов": "The entered contribution rate must be between zero and two hundred percent"
    }
  },
  "uk": {
    "fields": {
      "gross": "Нарахований оклад до утримань"
    },
    "values": {
      "Ставка взносов должна быть от нуля до двухсот процентов": "Введена ставка внесків має бути від нуля до двохсот відсотків"
    }
  },
  "de": {
    "fields": {
      "gross": "Bruttogehalt vor Abzügen"
    },
    "values": {
      "Ставка взносов должна быть от нуля до двухсот процентов": "Der eingegebene Beitragssatz muss zwischen null und zweihundert Prozent liegen"
    }
  },
  "es": {
    "fields": {
      "gross": "Salario bruto antes de deducciones"
    },
    "values": {
      "Ставка взносов должна быть от нуля до двухсот процентов": "El tipo de aportación introducido debe estar entre cero y doscientos por ciento"
    }
  }
};

export const localization: CalculatorLocalization = Object.fromEntries(
  Object.entries(contractOverrides).map(([locale, additions]) => {
    const key = locale as keyof typeof marketingScalarValues;
    const prior = previousLocalization[key];
    const nativeFields = Object.fromEntries(Object.entries(prior?.fields ?? {}).map(([name, label]) => [name, label.replace(/, [₽$₴€%]$/, '')]));
    return [locale, { ...prior, fields: { ...nativeFields, ...additions.fields }, values: { ...prior?.values, ...marketingScalarValues[key], ...additions.values } }];
  }),
);
