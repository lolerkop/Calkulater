import type { CalculatorLocalization } from '../../lib/platform/types';

// Подписи колонок и заголовок таблицы идут через ту же карту results, что и
// строки результата: платформа локализует таблицу этим же путём.
const RESULTS_EN = {
  'Срок погашения': 'Payoff term', 'Переплата процентами': 'Interest paid',
  'Выплачено всего': 'Total paid', 'Первым закрывается': 'First debt closed', 'Долгов': 'Debts',
  'Порядок погашения': 'Payoff order', 'Очередь': 'Order', 'Долг': 'Debt',
  'Закрыт': 'Closed', 'Проценты по нему': 'Interest on it',
  'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Срок погашения': 'Термін погашення', 'Переплата процентами': 'Переплата відсотками',
  'Выплачено всего': 'Виплачено всього', 'Первым закрывается': 'Першим закривається', 'Долгов': 'Боргів',
  'Порядок погашения': 'Порядок погашення', 'Очередь': 'Черга', 'Долг': 'Борг',
  'Закрыт': 'Закритий', 'Проценты по нему': 'Відсотки за ним',
  'Проверьте данные': 'Перевірте дані',
};

const contractValues = {
  "en": {
    "Введите корректные значения": "Enter valid numerical values",
    "Выберите корректный режим расчёта": "Choose a valid calculation mode",
    "Результат выходит за числовые пределы расчёта": "The result exceeds the numerical limits of this calculation",
    "Платежи всех долгов не превышают проценты, свободных денег нет": "Every minimum is at most its interest charge and there is no extra money",
    "Погашение не завершилось за 1200 месяцев: это предел симуляции, а не доказательство невозможности": "Repayment did not finish within 1200 months: this is the simulation limit, not proof of impossibility"
  },
  "uk": {
    "Введите корректные значения": "Введіть коректні числові значення",
    "Выберите корректный режим расчёта": "Оберіть коректний режим розрахунку",
    "Результат выходит за числовые пределы расчёта": "Результат виходить за числові межі розрахунку",
    "Платежи всех долгов не превышают проценты, свободных денег нет": "Усі мінімальні платежі не перевищують процентів, додаткових грошей немає",
    "Погашение не завершилось за 1200 месяцев: это предел симуляции, а не доказательство невозможности": "Погашення не завершилося за 1200 місяців: це межа симуляції, а не доказ неможливості"
  },
  "de": {
    "Введите корректные значения": "Gib gültige Zahlenwerte ein",
    "Выберите корректный режим расчёта": "Wähle einen gültigen Rechenmodus",
    "Результат выходит за числовые пределы расчёта": "Das Ergebnis überschreitet die Zahlengrenzen dieser Rechnung",
    "Платежи всех долгов не превышают проценты, свободных денег нет": "Alle Mindestraten sind höchstens so hoch wie ihre Zinsen und es gibt kein Zusatzgeld",
    "Погашение не завершилось за 1200 месяцев: это предел симуляции, а не доказательство невозможности": "Die Tilgung endete nicht innerhalb von 1200 Monaten: das ist die Simulationsgrenze, kein Unmöglichkeitsbeweis"
  },
  "es": {
    "Введите корректные значения": "Introduce valores numéricos válidos",
    "Выберите корректный режим расчёта": "Elige un modo de cálculo válido",
    "Результат выходит за числовые пределы расчёта": "El resultado supera los límites numéricos del cálculo",
    "Платежи всех долгов не превышают проценты, свободных денег нет": "Todos los mínimos son como máximo sus intereses y no hay dinero extra",
    "Погашение не завершилось за 1200 месяцев: это предел симуляции, а не доказательство невозможности": "El pago no terminó en 1200 meses: es el límite de simulación, no una prueba de imposibilidad"
  }
} as const;

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'debts': 'Schulden: Name, Saldo, Jahreszins, Mindestrate',
      'extra': 'Freies Geld je Monat',
      'strategy': 'Strategie',
    },
    options: {
      'avalanche': 'Lawine — höchster Zinssatz zuerst',
      'snowball': 'Schneeball — kleinster Saldo zuerst',
    },
    results: {
      'Срок погашения': 'Tilgungsdauer',
      'Переплата процентами': 'Gezahlte Zinsen',
      'Выплачено всего': 'Insgesamt gezahlt',
      'Первым закрывается': 'Zuerst getilgt',
      'Долгов': 'Schulden',
      'Порядок погашения': 'Reihenfolge der Tilgung',
      'Очередь': 'Reihenfolge',
      'Долг': 'Schuld',
      'Закрыт': 'Getilgt',
      'Проценты по нему': 'Zinsen darauf',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      ...contractValues.de,
      'Долгов не может быть больше 20': 'Es dürfen höchstens 20 Schulden sein',
      'мес': 'Mon.',
      'Каждая строка: название, сумма, ставка и минимальный платёж': 'Jede Zeile: Name, Saldo, Zinssatz und Mindestrate',
      'Свободные деньги не могут быть отрицательными': 'Das freie Geld kann nicht negativ sein',
      'Долги не гасятся: платежей не хватает даже на проценты': 'Die Schulden werden nicht getilgt: die Raten reichen nicht einmal für die Zinsen',
    },
  },
  en: {
    fields: {
      debts: 'Debts: name, balance, rate, minimum payment',
      extra: 'Spare money per month', strategy: 'Strategy',
    },
    options: { avalanche: 'avalanche — highest rate first', snowball: 'snowball — smallest balance first' },
    results: RESULTS_EN,
    values: {
      ...contractValues.en,
      'Долгов не может быть больше 20': 'There cannot be more than 20 debts',
      'мес': 'mo',
      'Каждая строка: название, сумма, ставка и минимальный платёж': 'Each line: name, balance, rate and minimum payment',
      'Свободные деньги не могут быть отрицательными': 'Spare money cannot be negative',
      'Долги не гасятся: платежей не хватает даже на проценты': 'The debts never clear: the payments do not even cover the interest',
    },
  },
  uk: {
    fields: {
      debts: 'Борги: назва, сума, ставка, мінімальний платіж',
      extra: 'Вільні гроші на місяць', strategy: 'Стратегія',
    },
    options: { avalanche: 'лавина — спершу дорогий борг', snowball: 'сніжна куля — спершу малий борг' },
    results: RESULTS_UK,
    values: {
      ...contractValues.uk,
      'Долгов не может быть больше 20': 'Боргів не може бути більше 20',
      'мес': 'міс',
      'Каждая строка: название, сумма, ставка и минимальный платёж': 'Кожен рядок: назва, сума, ставка та мінімальний платіж',
      'Свободные деньги не могут быть отрицательными': 'Вільні гроші не можуть бути від’ємними',
      'Долги не гасятся: платежей не хватает даже на проценты': 'Борги не гасяться: платежів не вистачає навіть на відсотки',
    },
  },
  es: {
    fields: {
      "debts": "Deudas: nombre, saldo, tipo y cuota mínima",
      "extra": "Dinero disponible al mes",
      "strategy": "Estrategia",
    },
    options: {
      "avalanche": "avalancha — primero el tipo más alto",
      "snowball": "bola de nieve — primero el saldo más pequeño",
    },
    results: {
      "Срок погашения": "Plazo de amortización",
      "Переплата процентами": "Intereses pagados",
      "Выплачено всего": "Total pagado",
      "Первым закрывается": "Primera deuda cerrada",
      "Долгов": "Deudas",
      "Порядок погашения": "Orden de amortización",
      "Очередь": "Orden",
      "Долг": "Deuda",
      "Закрыт": "Cerrada",
      "Проценты по нему": "Intereses de esa deuda",
      "Проверьте данные": "Revisa los datos",
    },
    values: {
      ...contractValues.es,
      'Долгов не может быть больше 20': 'No puede haber más de 20 deudas',
      "мес": "mes",
      "Каждая строка: название, сумма, ставка и минимальный платёж": "Cada línea: nombre, saldo, tipo y cuota mínima",
      "Свободные деньги не могут быть отрицательными": "El dinero disponible no puede ser negativo",
      "Долги не гасятся: платежей не хватает даже на проценты": "Las deudas no se liquidan: las cuotas no alcanzan ni para los intereses",
    },
  },
};
