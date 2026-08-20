import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
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
