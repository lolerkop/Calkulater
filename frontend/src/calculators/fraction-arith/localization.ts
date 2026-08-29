import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'op': 'Rechenart',
      'a': 'Erster Zähler',
      'b': 'Erster Nenner',
      'c': 'Zweiter Zähler',
      'd': 'Zweiter Nenner',
    },
    options: {
      'add': 'Addition',
      'sub': 'Subtraktion',
      'mul': 'Multiplikation',
      'div': 'Division',
    },
    results: {
      'Результат': 'Ergebnis',
      'Десятичное значение': 'Dezimalwert',
      'Смешанное число': 'Gemischte Zahl',
      'Сокращено на': 'Gekürzt durch',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Знаменатель не может быть нулём': 'Ein Nenner kann nicht null sein',
      'На нулевую дробь делить нельзя': 'Durch einen Bruch mit dem Wert null lässt sich nicht teilen',
      'Числа должны быть целыми': 'Die Zahlen müssen ganz sein',
      'Числа слишком велики для точного расчёта': 'Die Zahlen sind zu groß für eine genaue Rechnung',
    },
  },
  en: {
    fields: {
      "op": "Operation",
      "a": "First numerator",
      "b": "First denominator",
      "c": "Second numerator",
      "d": "Second denominator",
    },
    options: {
      "add": "addition",
      "sub": "subtraction",
      "mul": "multiplication",
      "div": "division",
    },
    results: {
      "Результат": "Result",
      "Десятичное значение": "Decimal value",
      "Смешанное число": "Mixed number",
      "Сокращено на": "Reduced by",
      "Проверьте данные": "Check the values",
    },
    values: {
      "Знаменатель не может быть нулём": "A denominator cannot be zero",
      "На нулевую дробь делить нельзя": "You cannot divide by a zero fraction",
      "Числа должны быть целыми": "The numbers must be whole",
      "Числа слишком велики для точного расчёта": "The numbers are too large for exact arithmetic",
    },
  },
  uk: {
    fields: {
      "op": "Дія",
      "a": "Чисельник першого дробу",
      "b": "Знаменник першого дробу",
      "c": "Чисельник другого дробу",
      "d": "Знаменник другого дробу",
    },
    options: {
      "add": "додавання",
      "sub": "віднімання",
      "mul": "множення",
      "div": "ділення",
    },
    results: {
      "Результат": "Результат",
      "Десятичное значение": "Десяткове значення",
      "Смешанное число": "Мішане число",
      "Сокращено на": "Скорочено на",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "Знаменатель не может быть нулём": "Знаменник не може бути нулем",
      "На нулевую дробь делить нельзя": "На нульовий дріб ділити не можна",
      "Числа должны быть целыми": "Числа мають бути цілими",
      "Числа слишком велики для точного расчёта": "Числа завеликі для точного розрахунку",
    },
  },
};
