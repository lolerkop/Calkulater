import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: { "mode": "What to compute", "amount": "Amount, $", "rate": "Rate, % per year", "years": "Term, years", "compounding": "Compounding frequency" },
    options: {
      "fv": "future value",
      "pv": "present value",
      "month": "Monthly",
      "quarter": "Quarterly",
      "year": "Annually",
    },
    results: {
      "Будущая стоимость": "Future value",
      "Текущая стоимость": "Present value",
      "Множитель роста": "Growth factor",
      "Эффективная годовая ставка": "Effective annual rate",
      "Периодов начисления": "Compounding periods",
      "Исходная сумма": "Original amount",
      "Проверьте данные": "Check the values",
    },
    values: {
      "₽": "$",
      "Сумма должна быть больше нуля": "The amount must be greater than zero",
      "Ставка не может быть отрицательной": "The rate cannot be negative",
      "Срок должен быть больше нуля": "The term must be greater than zero",
      "Значение слишком велико для расчёта": "The value is too large to compute",
    },
  },
  uk: {
    fields: { "mode": "Що рахуємо", "amount": "Сума, ₴", "rate": "Ставка, % річних", "years": "Строк, років", "compounding": "Частота нарахування" },
    options: {
      "fv": "майбутню вартість",
      "pv": "поточну вартість",
      "month": "Щомісяця",
      "quarter": "Щокварталу",
      "year": "Щороку",
    },
    results: {
      "Будущая стоимость": "Майбутня вартість",
      "Текущая стоимость": "Поточна вартість",
      "Множитель роста": "Множник зростання",
      "Эффективная годовая ставка": "Ефективна річна ставка",
      "Периодов начисления": "Періодів нарахування",
      "Исходная сумма": "Початкова сума",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "₽": "₴",
      "Сумма должна быть больше нуля": "Сума має бути більшою за нуль",
      "Ставка не может быть отрицательной": "Ставка не може бути від'ємною",
      "Срок должен быть больше нуля": "Строк має бути більшим за нуль",
      "Значение слишком велико для расчёта": "Значення завелике для обчислення",
    },
  },
};
