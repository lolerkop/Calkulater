import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      "startHour": "Shift start, hours",
      "startMin": "Shift start, minutes",
      "endHour": "Shift end, hours",
      "endMin": "Shift end, minutes",
      "breakMin": "Break, minutes",
      "days": "Number of shifts",
      "ratePerHour": "Hourly rate, $",
    },
    options: {},
    results: {
      "Часов за период": "Hours in the period",
      "Часов в смену": "Hours per shift",
      "В часах и минутах": "In hours and minutes",
      "Длина смены до перерыва": "Shift length before the break",
      "Заработок": "Earnings",
      "Проверьте данные": "Check the values",
    },
    values: {
      "₽": "$",
      "ч": "h",
      "мин": "min",
      "Число смен должно быть больше нуля": "The number of shifts must be greater than zero",
      "Перерыв не может быть отрицательным": "The break cannot be negative",
      "Ставка не может быть отрицательной": "The rate cannot be negative",
      "Перерыв не может быть длиннее смены": "The break cannot be longer than the shift",
    },
  },
  uk: {
    fields: {
      "startHour": "Початок зміни, години",
      "startMin": "Початок зміни, хвилини",
      "endHour": "Кінець зміни, години",
      "endMin": "Кінець зміни, хвилини",
      "breakMin": "Перерва, хвилин",
      "days": "Кількість змін",
      "ratePerHour": "Ставка за годину, ₴",
    },
    options: {},
    results: {
      "Часов за период": "Годин за період",
      "Часов в смену": "Годин за зміну",
      "В часах и минутах": "У годинах і хвилинах",
      "Длина смены до перерыва": "Тривалість зміни до перерви",
      "Заработок": "Заробіток",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "₽": "₴",
      "ч": "год",
      "мин": "хв",
      "Число смен должно быть больше нуля": "Кількість змін має бути більшою за нуль",
      "Перерыв не может быть отрицательным": "Перерва не може бути від'ємною",
      "Ставка не может быть отрицательной": "Ставка не може бути від'ємною",
      "Перерыв не может быть длиннее смены": "Перерва не може бути довшою за зміну",
    },
  },
};
