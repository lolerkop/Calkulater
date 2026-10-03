import type { CalculatorLocalization } from '../../lib/platform/types';
import { marketingScalarValues } from '../../lib/platform/marketingScalarLocalization';

export const localization: CalculatorLocalization = {
  "en": {
  "fields": {
    "mode": "What you know",
    "raw": "Raw or dry weight, g",
    "cooked": "Cooked weight, g",
    "factor": "Cooked/original weight factor",
    "kcalPer100Raw": "Kcal per 100 g original"
  },
  "options": {
    "rawToCooked": "raw/dry weight — find cooked",
    "cookedToRaw": "cooked weight — find raw/dry"
  },
  "results": {
    "Готовый вес": "Cooked weight",
    "Сухой вес": "Dry weight",
    "Коэффициент разварки": "Expansion factor",
    "Калорий всего": "Calories in total",
    "Ккал на 100 г готового": "Kcal per 100 g cooked",
    "Проверьте данные": "Check the values"
  },
  "values": {
    ...marketingScalarValues.en,
    "г": "g",
    "ккал": "kcal",
    "Коэффициент должен быть больше нуля": "The factor must be greater than zero",
    "Калорийность не может быть отрицательной": "Calories cannot be negative",
    "Сухой вес должен быть больше нуля": "The dry weight must be greater than zero",
    "Готовый вес должен быть больше нуля": "The cooked weight must be greater than zero",
    "Выберите корректный режим расчёта": "Choose a valid calculation mode",
    "Исходный сухой или сырой вес: коэффициент равен готовому весу, делённому на исходный. Энергия сохранена по допущению; добавки и потери жира не учтены.": "Original dry or raw weight: factor is cooked divided by original weight. Energy is conserved by assumption; additions and fat losses are excluded."
  }
},
  "uk": {
  "fields": {
    "mode": "Що відомо",
    "raw": "Сира або суха вага, г",
    "cooked": "Готова вага, г",
    "factor": "Коефіцієнт готова/вихідна вага",
    "kcalPer100Raw": "Ккал на 100 г вихідного"
  },
  "options": {
    "rawToCooked": "сира/суха вага — знайти готову",
    "cookedToRaw": "готова вага — знайти сиру/суху"
  },
  "results": {
    "Готовый вес": "Готова вага",
    "Сухой вес": "Суха вага",
    "Коэффициент разварки": "Коефіцієнт розварювання",
    "Калорий всего": "Калорій усього",
    "Ккал на 100 г готового": "Ккал на 100 г готової страви",
    "Проверьте данные": "Перевірте дані"
  },
  "values": {
    ...marketingScalarValues.uk,
    "г": "г",
    "ккал": "ккал",
    "Коэффициент должен быть больше нуля": "Коефіцієнт має бути більшим за нуль",
    "Калорийность не может быть отрицательной": "Калорійність не може бути від'ємною",
    "Сухой вес должен быть больше нуля": "Суха вага має бути більшою за нуль",
    "Готовый вес должен быть больше нуля": "Готова вага має бути більшою за нуль",
    "Выберите корректный режим расчёта": "Оберіть коректний режим розрахунку",
    "Исходный сухой или сырой вес: коэффициент равен готовому весу, делённому на исходный. Энергия сохранена по допущению; добавки и потери жира не учтены.": "Вихідна суха або сира вага: коефіцієнт — готова вага, поділена на вихідну. Енергія збережена за припущенням; добавки та втрати жиру не враховані."
  }
},
  "de": {
  "fields": {
    "mode": "Was du kennst",
    "raw": "Roh- oder Trockengewicht, g",
    "cooked": "Kochgewicht, g",
    "factor": "Faktor Gargewicht/Ausgangsgewicht",
    "kcalPer100Raw": "kcal je 100 g Ausgangsprodukt"
  },
  "options": {
    "rawToCooked": "roh/trocken — Gargewicht suchen",
    "cookedToRaw": "gegart — Roh-/Trockengewicht suchen"
  },
  "results": {
    "Готовый вес": "Kochgewicht",
    "Сухой вес": "Trockengewicht",
    "Коэффициент разварки": "Quellfaktor",
    "Калорий всего": "Kalorien insgesamt",
    "Ккал на 100 г готового": "kcal je 100 g gekocht",
    "Проверьте данные": "Prüfe die Werte"
  },
  "values": {
    ...marketingScalarValues.de,
    "г": "g",
    "ккал": "kcal",
    "Коэффициент должен быть больше нуля": "Der Faktor muss größer als null sein",
    "Калорийность не может быть отрицательной": "Der Kaloriengehalt kann nicht negativ sein",
    "Сухой вес должен быть больше нуля": "Das Trockengewicht muss größer als null sein",
    "Готовый вес должен быть больше нуля": "Das Kochgewicht muss größer als null sein",
    "Выберите корректный режим расчёта": "Gültigen Berechnungsmodus wählen",
    "Исходный сухой или сырой вес: коэффициент равен готовому весу, делённому на исходный. Энергия сохранена по допущению; добавки и потери жира не учтены.": "Ausgangsgewicht trocken oder roh: Faktor ist Gargewicht geteilt durch Ausgangsgewicht. Energieerhaltung angenommen; Zugaben und Fettverluste fehlen."
  }
},
  "es": {
  "fields": {
    "mode": "Qué conoces",
    "raw": "Peso crudo o seco, g",
    "cooked": "Peso cocinado, g",
    "factor": "Factor peso cocinado/original",
    "kcalPer100Raw": "Kcal por 100 g original"
  },
  "options": {
    "rawToCooked": "peso crudo/seco — hallar cocinado",
    "cookedToRaw": "peso cocinado — hallar crudo/seco"
  },
  "results": {
    "Готовый вес": "Peso cocinado",
    "Сухой вес": "Peso en seco",
    "Коэффициент разварки": "Factor de absorción",
    "Калорий всего": "Calorías en total",
    "Ккал на 100 г готового": "Kcal por 100 g cocinado",
    "Проверьте данные": "Revisa los datos"
  },
  "values": {
    ...marketingScalarValues.es,
    "г": "g",
    "ккал": "kcal",
    "Коэффициент должен быть больше нуля": "El factor debe ser mayor que cero",
    "Калорийность не может быть отрицательной": "Las calorías no pueden ser negativas",
    "Сухой вес должен быть больше нуля": "El peso en seco debe ser mayor que cero",
    "Готовый вес должен быть больше нуля": "El peso cocinado debe ser mayor que cero",
    "Выберите корректный режим расчёта": "Elige un modo de cálculo válido",
    "Исходный сухой или сырой вес: коэффициент равен готовому весу, делённому на исходный. Энергия сохранена по допущению; добавки и потери жира не учтены.": "Peso original seco o crudo: factor es peso cocinado dividido entre original. Energía conservada por supuesto; excluye añadidos y pérdidas de grasa."
  }
}
};
