import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      't': 'Lufttemperatur, °C',
      'rh': 'Relative Luftfeuchte, %',
    },
    results: {
      'Точка росы': 'Taupunkt',
      'Разрыв с температурой': 'Abstand zur Lufttemperatur',
      'Температура воздуха': 'Lufttemperatur',
      'Относительная влажность': 'Relative Luftfeuchte',
      'Точка росы в градусах Фаренгейта': 'Taupunkt in Grad Fahrenheit',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Влажность должна быть больше нуля': 'Die Luftfeuchte muss größer als null sein',
      'Влажность не может быть больше 100 %': 'Die Luftfeuchte kann 100 % nicht übersteigen',
      'Температура вне области применимости формулы': 'Die Temperatur liegt außerhalb des Bereichs, den die Formel abdeckt',
    },
  },
  en: {
    fields: { t: 'Air temperature, °C', rh: 'Relative humidity, %' },
    options: {},
    results: {
      'Точка росы': 'Dew point', 'Разрыв с температурой': 'Spread below air temperature',
      'Температура воздуха': 'Air temperature', 'Относительная влажность': 'Relative humidity',
      'Точка росы в градусах Фаренгейта': 'Dew point in degrees Fahrenheit',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'Влажность должна быть больше нуля': 'Humidity must be greater than zero',
      'Влажность не может быть больше 100 %': 'Humidity cannot exceed 100%',
      'Температура вне области применимости формулы': 'The temperature is outside the range the formula covers',
    },
  },
  uk: {
    fields: { t: 'Температура повітря, °C', rh: 'Відносна вологість, %' },
    options: {},
    results: {
      'Точка росы': 'Точка роси', 'Разрыв с температурой': 'Розрив із температурою',
      'Температура воздуха': 'Температура повітря', 'Относительная влажность': 'Відносна вологість',
      'Точка росы в градусах Фаренгейта': 'Точка роси у градусах Фаренгейта',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'Влажность должна быть больше нуля': 'Вологість має бути більшою за нуль',
      'Влажность не может быть больше 100 %': 'Вологість не може перевищувати 100 %',
      'Температура вне области применимости формулы': 'Температура поза областю застосовності формули',
    },
  },
};
