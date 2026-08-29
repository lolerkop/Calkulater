import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'mode': 'Was bekannt ist',
      'hour': 'Stunde',
      'minute': 'Minuten',
      'cycles': 'Schlafzyklen',
      'fallAsleep': 'Einschlafdauer, min',
    },
    options: {
      'bedtime': 'wann ich ins Bett gehe',
      'wake': 'wann ich aufstehen muss',
    },
    results: {
      'Когда вставать': 'Aufstehzeit',
      'Когда лечь': 'Zubettgehzeit',
      'Всего в постели': 'Insgesamt im Bett',
      'Чистый сон': 'Reiner Schlaf',
      'Циклов': 'Zyklen',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'мин': 'min',
      'Час должен быть от 0 до 23': 'Die Stunde muss zwischen 0 und 23 liegen',
      'Минуты должны быть от 0 до 59': 'Die Minuten müssen zwischen 0 und 59 liegen',
      'Циклов должно быть не меньше одного': 'Es muss mindestens ein Zyklus sein',
      'Время на засыпание не может быть отрицательным': 'Die Einschlafdauer kann nicht negativ sein',
    },
  },
  en: {
    fields: {
      mode: 'What is known',
      hour: 'Hour',
      minute: 'Minutes',
      cycles: 'Sleep cycles',
      fallAsleep: 'Time to fall asleep, min',
    },
    options: { bedtime: 'the time I go to bed', wake: 'the time I must wake up' },
    results: {
      'Когда вставать': 'Wake-up time',
      'Когда лечь': 'Bedtime',
      'Всего в постели': 'Total time in bed',
      'Чистый сон': 'Sleep itself',
      'Циклов': 'Cycles',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'мин': 'min',
      'Час должен быть от 0 до 23': 'The hour must be between 0 and 23',
      'Минуты должны быть от 0 до 59': 'The minutes must be between 0 and 59',
      'Циклов должно быть не меньше одного': 'There must be at least one cycle',
      'Время на засыпание не может быть отрицательным': 'The time to fall asleep cannot be negative',
    },
  },
  uk: {
    fields: {
      mode: 'Що відомо',
      hour: 'Година',
      minute: 'Хвилини',
      cycles: 'Циклів сну',
      fallAsleep: 'Час на засинання, хв',
    },
    options: { bedtime: 'коли лягаю спати', wake: 'коли треба встати' },
    results: {
      'Когда вставать': 'Коли вставати',
      'Когда лечь': 'Коли лягти',
      'Всего в постели': 'Усього в ліжку',
      'Чистый сон': 'Власне сон',
      'Циклов': 'Циклів',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'мин': 'хв',
      'Час должен быть от 0 до 23': 'Година має бути від 0 до 23',
      'Минуты должны быть от 0 до 59': 'Хвилини мають бути від 0 до 59',
      'Циклов должно быть не меньше одного': 'Циклів має бути не менше одного',
      'Время на засыпание не может быть отрицательным': 'Час на засинання не може бути від’ємним',
    },
  },
};
