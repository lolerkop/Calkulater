export const fieldLabels = {
  en: { income: 'Monthly income after tax' },
  uk: { income: 'Місячний дохід після податків' },
} as const;

export const resultPhrases = {
  en: { 'Нужды': 'Needs', 'Желания': 'Wants', 'Сбережения': 'Savings', 'Доход после налогов': 'Income after tax' },
  uk: { 'Нужды': 'Потреби', 'Желания': 'Бажання', 'Сбережения': 'Заощадження', 'Доход после налогов': 'Дохід після податків' },
} as const;

export const resultValues = {
  en: { 'Доход должен быть больше нуля': 'Income must be greater than zero' },
  uk: { 'Доход должен быть больше нуля': 'Дохід має бути більшим за нуль' },
} as const;
