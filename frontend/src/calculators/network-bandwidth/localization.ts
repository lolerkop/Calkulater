import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
    "Требуемая полоса": "Bandwidth required",
    "Без запаса": "Without headroom",
    "Добавлено запасом": "Added by headroom",
    "Одновременно активны": "Active at once",
    "В мегабайтах в секунду": "In megabytes per second",
    "В гигабитах": "In gigabits",
    "Проверьте данные": "Check the values",
};
const RESULTS_UK = {
    "Требуемая полоса": "Потрібна смуга",
    "Без запаса": "Без запасу",
    "Добавлено запасом": "Додано запасом",
    "Одновременно активны": "Активні одночасно",
    "В мегабайтах в секунду": "У мегабайтах за секунду",
    "В гигабитах": "У гігабітах",
    "Проверьте данные": "Перевірте дані",
};

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'users': 'Gleichzeitige Nutzer',
      'perUser': 'Bandbreite je Nutzer, Mbit/s',
      'overhead': 'Reserve, %',
      'concurrency': 'Gleichzeitig aktiv, %',
    },
    results: {
      'Требуемая полоса': 'Nötige Bandbreite',
      'Без запаса': 'Ohne Reserve',
      'Добавлено запасом': 'Durch die Reserve hinzugefügt',
      'Одновременно активны': 'Gleichzeitig aktiv',
      'В мегабайтах в секунду': 'In Megabyte je Sekunde',
      'В гигабитах': 'In Gigabit',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Мбит/с': 'Mbit/s',
      'Гбит/с': 'Gbit/s',
      'МБ/с': 'MB/s',
      'из': 'von',
      'Пользователей должно быть не меньше одного': 'Es muss mindestens ein Nutzer sein',
      'Полоса на пользователя должна быть больше нуля': 'Die Bandbreite je Nutzer muss größer als null sein',
      'Запас не может быть отрицательным': 'Die Reserve kann nicht negativ sein',
      'Доля активных задаётся в диапазоне от 0 до 100 процентов': 'Der Anteil der aktiven Nutzer liegt im Bereich von 0 bis 100 Prozent',
    },
  },
  en: {
    fields: { users: "Concurrent users", perUser: "Bandwidth per user, Mbit/s", overhead: "Headroom, %", concurrency: "Active at once, %" },
    results: RESULTS_EN,
    values: {
    "Мбит/с": "Mbit/s",
    "Гбит/с": "Gbit/s",
    "МБ/с": "MB/s",
    "из": "of",
    "Пользователей должно быть не меньше одного": "There must be at least one user",
    "Полоса на пользователя должна быть больше нуля": "Bandwidth per user must be greater than zero",
    "Запас не может быть отрицательным": "Headroom cannot be negative",
    "Доля активных задаётся в диапазоне от 0 до 100 процентов": "The active share is set between 0 and 100 percent",
    },
  },
  uk: {
    fields: { users: "Одночасних користувачів", perUser: "Смуга на користувача, Мбіт/с", overhead: "Запас, %", concurrency: "Активні одночасно, %" },
    results: RESULTS_UK,
    values: {
    "Мбит/с": "Мбіт/с",
    "Гбит/с": "Гбіт/с",
    "МБ/с": "МБ/с",
    "из": "з",
    "Пользователей должно быть не меньше одного": "Користувачів має бути щонайменше один",
    "Полоса на пользователя должна быть больше нуля": "Смуга на користувача має бути більшою за нуль",
    "Запас не может быть отрицательным": "Запас не може бути від’ємним",
    "Доля активных задаётся в диапазоне от 0 до 100 процентов": "Частка активних задається в діапазоні від 0 до 100 відсотків",
    },
  },
};
