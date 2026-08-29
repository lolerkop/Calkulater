import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
  'Ощущается как': 'Feels like', 'Прибавка к термометру': 'Added by humidity',
  'В градусах Фаренгейта': 'In degrees Fahrenheit', 'Термометр по Фаренгейту': 'Thermometer in Fahrenheit',
  'Опасность': 'Risk level', 'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Ощущается как': 'Відчувається як', 'Прибавка к термометру': 'Додає вологість',
  'В градусах Фаренгейта': 'У градусах Фаренгейта', 'Термометр по Фаренгейту': 'Термометр за Фаренгейтом',
  'Опасность': 'Небезпека', 'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      't': 'Lufttemperatur, °C',
      'rh': 'Relative Luftfeuchte, %',
    },
    results: {
      'Ощущается как': 'Fühlt sich an wie',
      'Прибавка к термометру': 'Zuschlag durch die Feuchte',
      'В градусах Фаренгейта': 'In Grad Fahrenheit',
      'Термометр по Фаренгейту': 'Thermometer in Fahrenheit',
      'Опасность': 'Gefahrenstufe',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'крайняя': 'äußerst',
      'высокая': 'hoch',
      'умеренная': 'mäßig',
      'низкая': 'gering',
      'Влажность должна быть от 0 до 100 %': 'Die Luftfeuchte muss zwischen 0 und 100 % liegen',
      'Температура должна быть от 20 до 60 °C': 'Die Temperatur muss zwischen 20 und 60 °C liegen',
      'Индекс жары применим от 26,7 °C — ниже он ничего не описывает': 'Der Hitzeindex gilt ab 26,7 °C — darunter beschreibt er nichts',
    },
  },
  en: {
    fields: { t: 'Air temperature, °C', rh: 'Relative humidity, %' },
    options: {},
    results: RESULTS_EN,
    values: {
      'крайняя': 'extreme', 'высокая': 'high', 'умеренная': 'moderate', 'низкая': 'low',
      'Влажность должна быть от 0 до 100 %': 'The humidity must be between 0 and 100%',
      'Температура должна быть от 20 до 60 °C': 'The temperature must be between 20 and 60 °C',
      'Индекс жары применим от 26,7 °C — ниже он ничего не описывает': 'The heat index applies from 26.7 °C — below that it describes nothing',
    },
  },
  uk: {
    fields: { t: 'Температура повітря, °C', rh: 'Відносна вологість, %' },
    options: {},
    results: RESULTS_UK,
    values: {
      'крайняя': 'крайня', 'высокая': 'висока', 'умеренная': 'помірна', 'низкая': 'низька',
      'Влажность должна быть от 0 до 100 %': 'Вологість має бути від 0 до 100 %',
      'Температура должна быть от 20 до 60 °C': 'Температура має бути від 20 до 60 °C',
      'Индекс жары применим от 26,7 °C — ниже он ничего не описывает': 'Індекс спеки застосовний від 26,7 °C — нижче він нічого не описує',
    },
  },
};
