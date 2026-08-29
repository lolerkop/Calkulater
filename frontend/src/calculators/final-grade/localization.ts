import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
    "Нужный балл": "Mark you need",
    "Вклад текущей оценки": "Contribution of the current grade",
    "Вес экзамена": "Exam weight",
    "Цель недостижима": "Target out of reach",
    "Цель уже достигнута": "Target already met",
    "Проверьте данные": "Check the values",
};
const RESULTS_UK = {
    "Нужный балл": "Потрібний бал",
    "Вклад текущей оценки": "Внесок поточної оцінки",
    "Вес экзамена": "Вага іспиту",
    "Цель недостижима": "Мета недосяжна",
    "Цель уже достигнута": "Мета вже досягнута",
    "Проверьте данные": "Перевірте дані",
};

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'current': 'Aktuelle Note, %',
      'target': 'Wunschnote, %',
      'weight': 'Gewicht der Prüfung, %',
    },
    results: {
      'Нужный балл': 'Nötige Punktzahl',
      'Вклад текущей оценки': 'Beitrag der aktuellen Note',
      'Вес экзамена': 'Gewicht der Prüfung',
      'Цель недостижима': 'Ziel nicht erreichbar',
      'Цель уже достигнута': 'Ziel bereits erreicht',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Одним экзаменом эту итоговую уже не набрать: нужен балл выше максимального': 'Mit einer Prüfung ist diese Endnote nicht mehr zu erreichen: nötig wäre eine Punktzahl über dem Höchstwert',
      'Итоговая выйдет не ниже желаемой при любом результате экзамена': 'Die Endnote bleibt bei jedem Prüfungsergebnis mindestens auf dem Wunschwert',
      'Текущая оценка задаётся в диапазоне от 0 до 100': 'Die aktuelle Note liegt im Bereich von 0 bis 100',
      'Желаемая оценка задаётся в диапазоне от 0 до 100': 'Die Wunschnote liegt im Bereich von 0 bis 100',
      'Вес экзамена задаётся в диапазоне от 0 до 100 процентов': 'Das Gewicht der Prüfung liegt im Bereich von 0 bis 100 Prozent',
    },
  },
  en: {
    fields: { current: "Current grade, %", target: "Target grade, %", weight: "Exam weight, %" },
    results: RESULTS_EN,
    values: {
    "Одним экзаменом эту итоговую уже не набрать: нужен балл выше максимального": "One exam can no longer reach that final grade: it would need a mark above the maximum",
    "Итоговая выйдет не ниже желаемой при любом результате экзамена": "The final grade stays at or above the target whatever the exam result",
    "Текущая оценка задаётся в диапазоне от 0 до 100": "The current grade is set between 0 and 100",
    "Желаемая оценка задаётся в диапазоне от 0 до 100": "The target grade is set between 0 and 100",
    "Вес экзамена задаётся в диапазоне от 0 до 100 процентов": "The exam weight is set between 0 and 100 percent",
    },
  },
  uk: {
    fields: { current: "Поточна оцінка, %", target: "Бажана оцінка, %", weight: "Вага іспиту, %" },
    results: RESULTS_UK,
    values: {
    "Одним экзаменом эту итоговую уже не набрать: нужен балл выше максимального": "Одним іспитом цю підсумкову вже не набрати: потрібен бал вищий за максимальний",
    "Итоговая выйдет не ниже желаемой при любом результате экзамена": "Підсумкова буде не нижчою за бажану за будь-якого результату іспиту",
    "Текущая оценка задаётся в диапазоне от 0 до 100": "Поточна оцінка задається в діапазоні від 0 до 100",
    "Желаемая оценка задаётся в диапазоне от 0 до 100": "Бажана оцінка задається в діапазоні від 0 до 100",
    "Вес экзамена задаётся в диапазоне от 0 до 100 процентов": "Вага іспиту задається в діапазоні від 0 до 100 відсотків",
    },
  },
};
