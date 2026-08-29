import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'f': 'Frequenz der Quelle, Hz',
      'vSource': 'Geschwindigkeit der Quelle auf dich zu, m/s',
      'vObserver': 'Geschwindigkeit des Zuhörers auf die Quelle zu, m/s',
      'c': 'Wellengeschwindigkeit im Medium, m/s',
    },
    results: {
      'Наблюдаемая частота': 'Beobachtete Frequenz',
      'Сдвиг частоты': 'Frequenzverschiebung',
      'Относительный сдвиг': 'Relative Verschiebung',
      'Скорость волны': 'Wellengeschwindigkeit',
      'Исходная частота': 'Frequenz der Quelle',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Гц': 'Hz',
      'м/с': 'm/s',
      'Частота источника должна быть больше нуля': 'Die Frequenz der Quelle muss größer als null sein',
      'Скорость волны должна быть больше нуля': 'Die Wellengeschwindigkeit muss größer als null sein',
      'Источник не может двигаться быстрее волны: там начинается ударная волна': 'Die Quelle kann nicht schneller sein als die Welle: dort beginnt eine Stoßwelle',
    },
  },
  en: {
    fields: {
      f: 'Source frequency, Hz',
      vSource: 'Source speed towards, m/s',
      vObserver: 'Observer speed towards, m/s',
      c: 'Wave speed in the medium, m/s',
    },
    options: {},
    results: {
      'Наблюдаемая частота': 'Observed frequency', 'Сдвиг частоты': 'Frequency shift',
      'Относительный сдвиг': 'Relative shift', 'Скорость волны': 'Wave speed',
      'Исходная частота': 'Source frequency', 'Проверьте данные': 'Check the values',
    },
    values: {
      'Гц': 'Hz', 'м/с': 'm/s',
      'Частота источника должна быть больше нуля': 'The source frequency must be greater than zero',
      'Скорость волны должна быть больше нуля': 'The wave speed must be greater than zero',
      'Источник не может двигаться быстрее волны: там начинается ударная волна':
        'The source cannot outrun the wave: that is where a shock wave begins',
    },
  },
  uk: {
    fields: {
      f: 'Частота джерела, Гц',
      vSource: 'Швидкість джерела назустріч, м/с',
      vObserver: 'Швидкість спостерігача назустріч, м/с',
      c: 'Швидкість хвилі в середовищі, м/с',
    },
    options: {},
    results: {
      'Наблюдаемая частота': 'Спостережувана частота', 'Сдвиг частоты': 'Зсув частоти',
      'Относительный сдвиг': 'Відносний зсув', 'Скорость волны': 'Швидкість хвилі',
      'Исходная частота': 'Початкова частота', 'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'Гц': 'Гц', 'м/с': 'м/с',
      'Частота источника должна быть больше нуля': 'Частота джерела має бути більшою за нуль',
      'Скорость волны должна быть больше нуля': 'Швидкість хвилі має бути більшою за нуль',
      'Источник не может двигаться быстрее волны: там начинается ударная волна':
        'Джерело не може рухатися швидше за хвилю: там починається ударна хвиля',
    },
  },
};
