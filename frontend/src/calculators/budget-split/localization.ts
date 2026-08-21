import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      "total": "Amount to split",
      "incomes": "Participants: name and income per line",
      "mode": "How to split",
    },
    options: { "equal": "Equally", "income": "In proportion to income" },
    results: {
      "Наибольший взнос": "Largest share",
      "Наименьший взнос": "Smallest share",
      "Участников": "Participants",
      "Сумма к делению": "Amount to split",
      "Проверка суммы": "Shares add up to",
      "Кто сколько вносит": "Who pays what",
      "Участник": "Participant",
      "Доход": "Income",
      "Доля": "Share",
      "Взнос": "Contribution",
      "Проверьте данные": "Check the values",
    },
    values: {
      "Нужны имя и доход в строке:": "Name and income are required on the line:",
      "Доход должен быть числом в строке:": "The income must be a number on the line:",
      "₽": "$",
      "Сумма к делению должна быть больше нуля": "The amount to split must be greater than zero",
      "Доход не может быть отрицательным": "Income cannot be negative",
      "Введите хотя бы одного участника": "Enter at least one participant",
      "Суммарный доход равен нулю: делить пропорционально нечему": "Total income is zero, so there is nothing to split in proportion to",
    },
  },
  uk: {
    fields: {
      "total": "Сума до поділу",
      "incomes": "Учасники: ім'я і дохід у рядку",
      "mode": "Як ділити",
    },
    options: { "equal": "Порівну", "income": "Пропорційно доходу" },
    results: {
      "Наибольший взнос": "Найбільший внесок",
      "Наименьший взнос": "Найменший внесок",
      "Участников": "Учасників",
      "Сумма к делению": "Сума до поділу",
      "Проверка суммы": "Сума внесків",
      "Кто сколько вносит": "Хто скільки вносить",
      "Участник": "Учасник",
      "Доход": "Дохід",
      "Доля": "Частка",
      "Взнос": "Внесок",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "Нужны имя и доход в строке:": "Потрібні ім'я і дохід у рядку:",
      "Доход должен быть числом в строке:": "Дохід має бути числом у рядку:",
      "₽": "₴",
      "Сумма к делению должна быть больше нуля": "Сума до поділу має бути більшою за нуль",
      "Доход не может быть отрицательным": "Дохід не може бути від'ємним",
      "Введите хотя бы одного участника": "Введіть хоча б одного учасника",
      "Суммарный доход равен нулю: делить пропорционально нечему": "Сумарний дохід дорівнює нулю, тож ділити пропорційно немає чого",
    },
  },
};
