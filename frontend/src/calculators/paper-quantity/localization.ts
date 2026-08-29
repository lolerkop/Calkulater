import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'format': 'Blattformat',
      'grammage': 'Grammatur, g/m²',
      'sheets': 'Blätter',
    },
    options: {
      'a0': 'A0 — 841×1189 mm',
      'a1': 'A1 — 594×841 mm',
      'a2': 'A2 — 420×594 mm',
      'a3': 'A3 — 297×420 mm',
      'a4': 'A4 — 210×297 mm',
      'a5': 'A5 — 148×210 mm',
      'a6': 'A6 — 105×148 mm',
    },
    results: {
      'Масса пачки': 'Gewicht des Pakets',
      'Масса одного листа': 'Gewicht eines Blattes',
      'Площадь листа': 'Fläche eines Blattes',
      'Размер листа': 'Blattmaß',
      'Листов в килограмме': 'Blätter je Kilogramm',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'кг': 'kg',
      'г': 'g',
      'м²': 'm²',
      'мм': 'mm',
      'шт': 'Stk',
      'Выберите формат листа из списка': 'Wähle ein Blattformat aus der Liste',
      'Плотность бумаги должна быть больше нуля': 'Die Grammatur muss größer als null sein',
      'Листов должно быть целое число, не меньше одного': 'Die Blattzahl muss eine ganze Zahl von mindestens eins sein',
    },
  },
  en: {
    fields: { format: 'Sheet size', grammage: 'Grammage, gsm', sheets: 'Sheets' },
    options: { a0: 'A0 — 841×1189 mm', a1: 'A1 — 594×841 mm', a2: 'A2 — 420×594 mm', a3: 'A3 — 297×420 mm', a4: 'A4 — 210×297 mm', a5: 'A5 — 148×210 mm', a6: 'A6 — 105×148 mm' },
    results: {
      'Масса пачки': 'Ream mass', 'Масса одного листа': 'Single sheet mass',
      'Площадь листа': 'Sheet area', 'Размер листа': 'Sheet size',
      'Листов в килограмме': 'Sheets per kilogram', 'Проверьте данные': 'Check the values',
    },
    values: {
      'кг': 'kg', 'г': 'g', 'м²': 'm²', 'мм': 'mm', 'шт': 'pcs',
      'Выберите формат листа из списка': 'Choose a sheet size from the list',
      'Плотность бумаги должна быть больше нуля': 'The grammage must be greater than zero',
      'Листов должно быть целое число, не меньше одного': 'The sheet count must be a whole number, at least one',
    },
  },
  uk: {
    fields: { format: 'Формат аркуша', grammage: 'Щільність, г/м²', sheets: 'Аркушів' },
    options: { a0: 'A0 — 841×1189 мм', a1: 'A1 — 594×841 мм', a2: 'A2 — 420×594 мм', a3: 'A3 — 297×420 мм', a4: 'A4 — 210×297 мм', a5: 'A5 — 148×210 мм', a6: 'A6 — 105×148 мм' },
    results: {
      'Масса пачки': 'Маса пачки', 'Масса одного листа': 'Маса одного аркуша',
      'Площадь листа': 'Площа аркуша', 'Размер листа': 'Розмір аркуша',
      'Листов в килограмме': 'Аркушів у кілограмі', 'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'кг': 'кг', 'г': 'г', 'м²': 'м²', 'мм': 'мм', 'шт': 'шт',
      'Выберите формат листа из списка': 'Оберіть формат аркуша зі списку',
      'Плотность бумаги должна быть больше нуля': 'Щільність паперу має бути більшою за нуль',
      'Листов должно быть целое число, не меньше одного': 'Аркушів має бути ціле число, не менше одного',
    },
  },
};
