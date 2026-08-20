import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      "xs": "Series X: values separated by spaces or line breaks",
      "ys": "Series Y: the same number of values",
    },
    options: {},
    results: {
      "Коэффициент корреляции": "Correlation coefficient",
      "Коэффициент детерминации": "Coefficient of determination",
      "Ковариация выборки": "Sample covariance",
      "Наклон линии": "Slope of the line",
      "Свободный член": "Intercept",
      "Пар значений": "Pairs of values",
      "Среднее X": "Mean of X",
      "Среднее Y": "Mean of Y",
      "Проверьте данные": "Check the values",
    },
    values: {
      "В рядах разное число значений — пары не построить": "The series hold different counts — pairs cannot be formed",
      "Нужно не меньше трёх пар значений": "At least three pairs of values are needed",
      "Все значения одного из рядов совпадают — корреляция не определена": "Every value in one series is identical — the correlation cannot be computed",
    },
  },
  uk: {
    fields: {
      "xs": "Ряд X: значення через пробіл або з нового рядка",
      "ys": "Ряд Y: стільки ж значень",
    },
    options: {},
    results: {
      "Коэффициент корреляции": "Коефіцієнт кореляції",
      "Коэффициент детерминации": "Коефіцієнт детермінації",
      "Ковариация выборки": "Коваріація вибірки",
      "Наклон линии": "Нахил лінії",
      "Свободный член": "Вільний член",
      "Пар значений": "Пар значень",
      "Среднее X": "Середнє X",
      "Среднее Y": "Середнє Y",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "В рядах разное число значений — пары не построить": "У рядах різна кількість значень — пари не побудувати",
      "Нужно не меньше трёх пар значений": "Потрібно щонайменше три пари значень",
      "Все значения одного из рядов совпадают — корреляция не определена": "Усі значення одного з рядів збігаються — кореляція не визначена",
    },
  },
};
