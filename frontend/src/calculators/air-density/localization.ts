import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      't': 'Temperatur, °C',
      'pressure': 'Luftdruck, hPa',
      'humidity': 'Relative Luftfeuchte, %',
    },
    results: {
      'Плотность воздуха': 'Luftdichte',
      'Плотность сухого воздуха': 'Dichte trockener Luft',
      'Давление водяного пара': 'Wasserdampfdruck',
      'Давление насыщения': 'Sättigungsdruck',
      'Отклонение от 1,225': 'Abweichung von 1,225',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'кг/м³': 'kg/m³',
      'гПа': 'hPa',
      'Атмосферное давление должно быть больше нуля': 'Der Luftdruck muss größer als null sein',
      'Относительная влажность задаётся от 0 до 100 процентов': 'Die relative Luftfeuchte liegt zwischen 0 und 100 Prozent',
      'Температура не может быть ниже абсолютного нуля': 'Die Temperatur kann nicht unter dem absoluten Nullpunkt liegen',
      'Давление пара выше атмосферного: проверьте температуру и давление': 'Der Dampfdruck liegt über dem Luftdruck: prüfe Temperatur und Druck',
    },
  },
  en: {
    fields: { t: 'Temperature, °C', pressure: 'Atmospheric pressure, hPa', humidity: 'Relative humidity, %' },
    options: {},
    results: {
      'Плотность воздуха': 'Air density', 'Плотность сухого воздуха': 'Dry air density',
      'Давление водяного пара': 'Water vapour pressure', 'Давление насыщения': 'Saturation pressure',
      'Отклонение от 1,225': 'Deviation from 1.225', 'Проверьте данные': 'Check the values',
    },
    values: {
      'кг/м³': 'kg/m³', 'гПа': 'hPa',
      'Атмосферное давление должно быть больше нуля': 'The atmospheric pressure must be greater than zero',
      'Относительная влажность задаётся от 0 до 100 процентов': 'Relative humidity runs from 0 to 100 per cent',
      'Температура не может быть ниже абсолютного нуля': 'The temperature cannot be below absolute zero',
      'Давление пара выше атмосферного: проверьте температуру и давление':
        'Vapour pressure exceeds atmospheric: check the temperature and pressure',
    },
  },
  uk: {
    fields: { t: 'Температура, °C', pressure: 'Атмосферний тиск, гПа', humidity: 'Відносна вологість, %' },
    options: {},
    results: {
      'Плотность воздуха': 'Густина повітря', 'Плотность сухого воздуха': 'Густина сухого повітря',
      'Давление водяного пара': 'Тиск водяної пари', 'Давление насыщения': 'Тиск насичення',
      'Отклонение от 1,225': 'Відхилення від 1,225', 'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'кг/м³': 'кг/м³', 'гПа': 'гПа',
      'Атмосферное давление должно быть больше нуля': 'Атмосферний тиск має бути більшим за нуль',
      'Относительная влажность задаётся от 0 до 100 процентов': 'Відносна вологість задається від 0 до 100 відсотків',
      'Температура не может быть ниже абсолютного нуля': 'Температура не може бути нижчою за абсолютний нуль',
      'Давление пара выше атмосферного: проверьте температуру и давление':
        'Тиск пари вищий за атмосферний: перевірте температуру і тиск',
    },
  },
  es: {
    fields: {
      "t": "Temperatura, °C",
      "pressure": "Presión atmosférica, hPa",
      "humidity": "Humedad relativa, %",
    },
    options: {},
    results: {
      "Плотность воздуха": "Densidad del aire",
      "Плотность сухого воздуха": "Densidad del aire seco",
      "Давление водяного пара": "Presión del vapor de agua",
      "Давление насыщения": "Presión de saturación",
      "Отклонение от 1,225": "Desviación respecto a 1,225",
      "Проверьте данные": "Revisa los datos",
    },
    values: {
      "кг/м³": "kg/m³",
      "гПа": "hPa",
      "Атмосферное давление должно быть больше нуля": "La presión atmosférica debe ser mayor que cero",
      "Относительная влажность задаётся от 0 до 100 процентов": "La humedad relativa va del 0 al 100 por ciento",
      "Температура не может быть ниже абсолютного нуля": "La temperatura no puede estar por debajo del cero absoluto",
      "Давление пара выше атмосферного: проверьте температуру и давление": "La presión del vapor supera a la atmosférica: revisa la temperatura y la presión",
    },
  },
};
