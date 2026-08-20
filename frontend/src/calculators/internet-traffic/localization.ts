import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      "mbps": "Stream rate, Mbit/s",
      "hoursPerDay": "Hours per day",
      "days": "Days in the period",
      "quotaGb": "Data allowance, GB",
    },
    options: {},
    results: {
      "Трафик за период": "Data used in the period",
      "В день": "Per day",
      "В час": "Per hour",
      "Хватит дней при лимите": "Days the allowance lasts",
      "Превышение лимита": "Over the allowance",
      "Остаток лимита": "Allowance left",
      "Проверьте данные": "Check the values",
    },
    values: {
      "ГБ": "GB",
      "Скорость потока должна быть больше нуля": "The stream rate must be greater than zero",
      "Число часов в день должно быть больше нуля": "The hours per day must be greater than zero",
      "Число дней должно быть больше нуля": "The number of days must be greater than zero",
      "Лимит не может быть отрицательным": "The allowance cannot be negative",
    },
  },
  uk: {
    fields: {
      "mbps": "Швидкість потоку, Мбіт/с",
      "hoursPerDay": "Годин на день",
      "days": "Днів у періоді",
      "quotaGb": "Ліміт оператора, ГБ",
    },
    options: {},
    results: {
      "Трафик за период": "Трафік за період",
      "В день": "На день",
      "В час": "На годину",
      "Хватит дней при лимите": "Вистачить днів за лімітом",
      "Превышение лимита": "Перевищення ліміту",
      "Остаток лимита": "Залишок ліміту",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "ГБ": "ГБ",
      "Скорость потока должна быть больше нуля": "Швидкість потоку має бути більшою за нуль",
      "Число часов в день должно быть больше нуля": "Кількість годин на день має бути більшою за нуль",
      "Число дней должно быть больше нуля": "Кількість днів має бути більшою за нуль",
      "Лимит не может быть отрицательным": "Ліміт не може бути від'ємним",
    },
  },
};
