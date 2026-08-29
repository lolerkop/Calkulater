import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'mode': 'Rechenart',
      'base': 'Zahl',
      'exponent': 'Exponent',
    },
    options: {
      'power': 'In eine Potenz erheben',
      'root': 'Eine Wurzel ziehen',
    },
    results: {
      'Результат': 'Ergebnis',
      'Основание': 'Basis',
      'Показатель': 'Exponent',
      'Действие': 'Rechenart',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'степень': 'Potenz',
      'корень': 'Wurzel',
      'Степень корня должна быть больше нуля': 'Der Wurzelgrad muss größer als null sein',
      'Корень чётной степени из отрицательного числа не существует': 'Eine Wurzel geraden Grades aus einer negativen Zahl gibt es nicht',
      'Нуль нельзя возвести в отрицательную степень': 'Null lässt sich nicht in eine negative Potenz erheben',
      'Отрицательное основание требует целого показателя': 'Eine negative Basis verlangt einen ganzzahligen Exponenten',
      'Результат слишком велик для точного расчёта': 'Das Ergebnis ist zu groß für eine genaue Rechnung',
    },
  },
  en: {
    fields: { "mode": "Operation", "base": "Number", "exponent": "Exponent" },
    options: { "power": "Raise to a power", "root": "Take a root" },
    results: {
      "Результат": "Result",
      "Основание": "Base",
      "Показатель": "Exponent",
      "Действие": "Operation",
      "Проверьте данные": "Check the values",
    },
    values: {
      "степень": "power",
      "корень": "root",
      "Степень корня должна быть больше нуля": "The root degree must be greater than zero",
      "Корень чётной степени из отрицательного числа не существует": "An even root of a negative number does not exist",
      "Нуль нельзя возвести в отрицательную степень": "Zero cannot be raised to a negative power",
      "Отрицательное основание требует целого показателя": "A negative base requires a whole exponent",
      "Результат слишком велик для точного расчёта": "The result is too large to compute exactly",
    },
  },
  uk: {
    fields: { "mode": "Дія", "base": "Число", "exponent": "Показник степеня" },
    options: { "power": "Піднести до степеня", "root": "Добути корінь" },
    results: {
      "Результат": "Результат",
      "Основание": "Основа",
      "Показатель": "Показник",
      "Действие": "Дія",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "степень": "степінь",
      "корень": "корінь",
      "Степень корня должна быть больше нуля": "Степінь кореня має бути більшим за нуль",
      "Корень чётной степени из отрицательного числа не существует": "Кореня парного степеня з від'ємного числа не існує",
      "Нуль нельзя возвести в отрицательную степень": "Нуль не можна піднести до від'ємного степеня",
      "Отрицательное основание требует целого показателя": "Від'ємна основа потребує цілого показника",
      "Результат слишком велик для точного расчёта": "Результат завеликий для точного обчислення",
    },
  },
};
