import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      "targetIncome": "Target take-home per month, $",
      "workDays": "Working days per month",
      "hoursPerDay": "Working hours per day",
      "billablePct": "Billable share of hours, %",
      "expenses": "Business costs per month, $",
      "taxPct": "Tax rate, %",
    },
    options: {},
    results: {
      "Ставка за час": "Hourly rate",
      "Оплачиваемых часов": "Billable hours",
      "Нужно выставить счетов": "Must invoice",
      "Ставка за день": "Day rate",
      "Расходы на работу": "Business costs",
      "Налог": "Tax",
      "Проверьте данные": "Check the values",
    },
    values: {
      "₽": "$",
      "ч": "h",
      "Желаемый доход должен быть больше нуля": "The target income must be greater than zero",
      "Число рабочих дней должно быть больше нуля": "The number of working days must be greater than zero",
      "Число часов в дне должно быть больше нуля": "The number of hours per day must be greater than zero",
      "Оплачиваемая доля должна быть больше нуля": "The billable share must be greater than zero",
      "Расходы не могут быть отрицательными": "Costs cannot be negative",
      "Ставка налога должна быть меньше 100 %": "The tax rate must be below 100%",
    },
  },
  uk: {
    fields: {
      "targetIncome": "Бажаний дохід на руки за місяць, ₴",
      "workDays": "Робочих днів на місяць",
      "hoursPerDay": "Робочих годин на день",
      "billablePct": "Частка оплачуваних годин, %",
      "expenses": "Витрати на роботу за місяць, ₴",
      "taxPct": "Ставка податку, %",
    },
    options: {},
    results: {
      "Ставка за час": "Ставка за годину",
      "Оплачиваемых часов": "Оплачуваних годин",
      "Нужно выставить счетов": "Треба виставити рахунків",
      "Ставка за день": "Ставка за день",
      "Расходы на работу": "Витрати на роботу",
      "Налог": "Податок",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "₽": "₴",
      "ч": "год",
      "Желаемый доход должен быть больше нуля": "Бажаний дохід має бути більшим за нуль",
      "Число рабочих дней должно быть больше нуля": "Кількість робочих днів має бути більшою за нуль",
      "Число часов в дне должно быть больше нуля": "Кількість годин на день має бути більшою за нуль",
      "Оплачиваемая доля должна быть больше нуля": "Частка оплачуваних годин має бути більшою за нуль",
      "Расходы не могут быть отрицательными": "Витрати не можуть бути від'ємними",
      "Ставка налога должна быть меньше 100 %": "Ставка податку має бути меншою за 100 %",
    },
  },
};
