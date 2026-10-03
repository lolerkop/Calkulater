import type { CalculatorLocalization } from '../../lib/platform/types';
import { marketingScalarValues } from '../../lib/platform/marketingScalarLocalization';

export const localization: CalculatorLocalization = {
  "en": {
  "fields": {
    "mode": "What to find",
    "water": "Water, ml",
    "coffee": "Coffee, g",
    "ratio": "Ratio 1:k"
  },
  "options": {
    "coffee": "the coffee dose",
    "water": "the water volume",
    "ratio": "the ratio"
  },
  "results": {
    "Кофе": "Coffee",
    "Вода": "Water",
    "Соотношение": "Ratio",
    "Гуща заберёт воды": "Held by the grounds",
    "Проверьте данные": "Check the values",
    "Условная ёмкость гущи": "Assumed grounds capacity"
  },
  "values": {
    ...marketingScalarValues.en,
    "мл": "mL",
    "г": "g",
    "Соотношение должно быть больше нуля": "The ratio must be greater than zero",
    "Масса кофе должна быть больше нуля": "The coffee dose must be greater than zero",
    "Объём воды должен быть больше нуля": "The water volume must be greater than zero",
    "Выберите корректный режим расчёта": "Choose a valid calculation mode",
    "Вода — объём, поданный на заваривание, не выход напитка. Условная ёмкость гущи использует допущение 2 мл/г; фактическое удержание воды не измеряется.": "Water is brewing input volume, not beverage yield. Assumed grounds capacity uses 2 mL/g; actual retention is not measured."
  }
},
  "uk": {
  "fields": {
    "mode": "Що знайти",
    "water": "Вода, мл",
    "coffee": "Кава, г",
    "ratio": "Співвідношення 1:k"
  },
  "options": {
    "coffee": "масу кави",
    "water": "об'єм води",
    "ratio": "співвідношення"
  },
  "results": {
    "Кофе": "Кава",
    "Вода": "Вода",
    "Соотношение": "Співвідношення",
    "Гуща заберёт воды": "Гуща забере води",
    "Проверьте данные": "Перевірте дані",
    "Условная ёмкость гущи": "Умовна місткість гущі"
  },
  "values": {
    ...marketingScalarValues.uk,
    "мл": "мл",
    "г": "г",
    "Соотношение должно быть больше нуля": "Співвідношення має бути більшим за нуль",
    "Масса кофе должна быть больше нуля": "Маса кави має бути більшою за нуль",
    "Объём воды должен быть больше нуля": "Об'єм води має бути більшим за нуль",
    "Выберите корректный режим расчёта": "Оберіть коректний режим розрахунку",
    "Вода — объём, поданный на заваривание, не выход напитка. Условная ёмкость гущи использует допущение 2 мл/г; фактическое удержание воды не измеряется.": "Вода — вхідний об’єм для заварювання, не вихід напою. Умовна місткість гущі використовує 2 мл/г; фактичне утримання не вимірюється."
  }
},
  "de": {
  "fields": {
    "mode": "Was gesucht ist",
    "water": "Wasser, ml",
    "coffee": "Kaffee, g",
    "ratio": "Verhältnis 1:k"
  },
  "options": {
    "coffee": "die Kaffeedosis",
    "water": "die Wassermenge",
    "ratio": "das Verhältnis"
  },
  "results": {
    "Кофе": "Kaffee",
    "Вода": "Wasser",
    "Соотношение": "Verhältnis",
    "Гуща заберёт воды": "Vom Satz aufgenommen",
    "Проверьте данные": "Prüfe die Werte",
    "Условная ёмкость гущи": "Angenommene Satzkapazität"
  },
  "values": {
    ...marketingScalarValues.de,
    "мл": "ml",
    "г": "g",
    "Соотношение должно быть больше нуля": "Das Verhältnis muss größer als null sein",
    "Масса кофе должна быть больше нуля": "Die Kaffeedosis muss größer als null sein",
    "Объём воды должен быть больше нуля": "Die Wassermenge muss größer als null sein",
    "Выберите корректный режим расчёта": "Gültigen Berechnungsmodus wählen",
    "Вода — объём, поданный на заваривание, не выход напитка. Условная ёмкость гущи использует допущение 2 мл/г; фактическое удержание воды не измеряется.": "Wasser ist Eingangsvolumen, keine Getränkeausbeute. Angenommene Satzkapazität nutzt 2 ml/g; tatsächlicher Rückhalt wird nicht gemessen."
  }
},
  "es": {
  "fields": {
    "mode": "Qué hallar",
    "water": "Agua, ml",
    "coffee": "Café, g",
    "ratio": "Ratio 1:k"
  },
  "options": {
    "coffee": "la dosis de café",
    "water": "el volumen de agua",
    "ratio": "el ratio"
  },
  "results": {
    "Кофе": "Café",
    "Вода": "Agua",
    "Соотношение": "Ratio",
    "Гуща заберёт воды": "Retenido por los posos",
    "Проверьте данные": "Revisa los datos",
    "Условная ёмкость гущи": "Capacidad supuesta de posos"
  },
  "values": {
    ...marketingScalarValues.es,
    "мл": "ml",
    "г": "g",
    "Соотношение должно быть больше нуля": "El ratio debe ser mayor que cero",
    "Масса кофе должна быть больше нуля": "La dosis de café debe ser mayor que cero",
    "Объём воды должен быть больше нуля": "El volumen de agua debe ser mayor que cero",
    "Выберите корректный режим расчёта": "Elige un modo de cálculo válido",
    "Вода — объём, поданный на заваривание, не выход напитка. Условная ёмкость гущи использует допущение 2 мл/г; фактическое удержание воды не измеряется.": "Agua es volumen de entrada, no rendimiento de bebida. Capacidad supuesta de posos usa 2 ml/g; retención real no se mide."
  }
}
};
