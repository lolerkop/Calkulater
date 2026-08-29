import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      't': 'Temperatur, °C',
      'rh': 'Relative Luftfeuchte, %',
      'pressure': 'Luftdruck, hPa',
    },
    results: {
      'Абсолютная влажность': 'Absolute Luftfeuchte',
      'Давление пара': 'Dampfdruck',
      'Давление насыщения': 'Sättigungsdruck',
      'Влагосодержание': 'Wasserbeladung',
      'Максимум при этой температуре': 'Höchstwert bei dieser Temperatur',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'г/м³': 'g/m³',
      'гПа': 'hPa',
      'г/кг': 'g/kg',
      'Относительная влажность задаётся от 0 до 100 процентов': 'Die relative Luftfeuchte liegt zwischen 0 und 100 Prozent',
      'Температура не может быть ниже абсолютного нуля': 'Die Temperatur kann nicht unter dem absoluten Nullpunkt liegen',
      'Атмосферное давление должно быть больше нуля': 'Der Luftdruck muss größer als null sein',
      'Давление пара не ниже атмосферного: проверьте температуру и давление': 'Der Dampfdruck liegt nicht unter dem Luftdruck: prüfe Temperatur und Druck',
    },
  },
  en: {
    fields: { t: 'Temperature, °C', rh: 'Relative humidity, %', pressure: 'Atmospheric pressure, hPa' },
    options: {},
    results: {
      'Абсолютная влажность': 'Absolute humidity', 'Давление пара': 'Vapour pressure',
      'Давление насыщения': 'Saturation pressure', 'Влагосодержание': 'Mixing ratio',
      'Максимум при этой температуре': 'Maximum at this temperature', 'Проверьте данные': 'Check the values',
    },
    values: {
      'г/м³': 'g/m³', 'гПа': 'hPa', 'г/кг': 'g/kg',
      'Относительная влажность задаётся от 0 до 100 процентов': 'Relative humidity runs from 0 to 100 per cent',
      'Температура не может быть ниже абсолютного нуля': 'The temperature cannot be below absolute zero',
      'Атмосферное давление должно быть больше нуля': 'The atmospheric pressure must be greater than zero',
      'Давление пара не ниже атмосферного: проверьте температуру и давление':
        'Vapour pressure is not below atmospheric: check the temperature and pressure',
    },
  },
  uk: {
    fields: { t: 'Температура, °C', rh: 'Відносна вологість, %', pressure: 'Атмосферний тиск, гПа' },
    options: {},
    results: {
      'Абсолютная влажность': 'Абсолютна вологість', 'Давление пара': 'Тиск пари',
      'Давление насыщения': 'Тиск насичення', 'Влагосодержание': 'Вологовміст',
      'Максимум при этой температуре': 'Максимум за цієї температури', 'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'г/м³': 'г/м³', 'гПа': 'гПа', 'г/кг': 'г/кг',
      'Относительная влажность задаётся от 0 до 100 процентов': 'Відносна вологість задається від 0 до 100 відсотків',
      'Температура не может быть ниже абсолютного нуля': 'Температура не може бути нижчою за абсолютний нуль',
      'Атмосферное давление должно быть больше нуля': 'Атмосферний тиск має бути більшим за нуль',
      'Давление пара не ниже атмосферного: проверьте температуру и давление':
        'Тиск пари не нижчий за атмосферний: перевірте температуру і тиск',
    },
  },
};
