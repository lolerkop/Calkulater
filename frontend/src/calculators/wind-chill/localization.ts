import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      't': 'Lufttemperatur, °C',
      'v': 'Windgeschwindigkeit, km/h',
    },
    results: {
      'Ощущаемая температура': 'Gefühlte Temperatur',
      'Разница с термометром': 'Abstand zum Thermometer',
      'Температура воздуха': 'Lufttemperatur',
      'Скорость ветра': 'Windgeschwindigkeit',
      'Ощущаемая в градусах Фаренгейта': 'Gefühlt in Grad Fahrenheit',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'км/ч': 'km/h',
      'Формула работает при температуре не выше 10 °C': 'Die Formel gilt nur bei einer Temperatur von höchstens 10 °C',
      'Формула работает при ветре не слабее 4,8 км/ч': 'Die Formel gilt nur bei Wind ab 4,8 km/h',
    },
  },
  en: {
    fields: { t: 'Air temperature, °C', v: 'Wind speed, km/h' },
    options: {},
    results: {
      'Ощущаемая температура': 'Feels like', 'Разница с термометром': 'Difference from the thermometer',
      'Температура воздуха': 'Air temperature', 'Скорость ветра': 'Wind speed',
      'Ощущаемая в градусах Фаренгейта': 'Feels like in degrees Fahrenheit',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'км/ч': 'km/h',
      'Формула работает при температуре не выше 10 °C': 'The formula only applies at 10 °C or below',
      'Формула работает при ветре не слабее 4,8 км/ч': 'The formula only applies at wind speeds of 4.8 km/h or above',
    },
  },
  uk: {
    fields: { t: 'Температура повітря, °C', v: 'Швидкість вітру, км/год' },
    options: {},
    results: {
      'Ощущаемая температура': 'Відчутна температура', 'Разница с термометром': 'Різниця з термометром',
      'Температура воздуха': 'Температура повітря', 'Скорость ветра': 'Швидкість вітру',
      'Ощущаемая в градусах Фаренгейта': 'Відчутна у градусах Фаренгейта',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'км/ч': 'км/год',
      'Формула работает при температуре не выше 10 °C': 'Формула застосовна за температури не вище 10 °C',
      'Формула работает при ветре не слабее 4,8 км/ч': 'Формула застосовна за вітру не слабшого за 4,8 км/год',
    },
  },
  es: {
    fields: {
      "t": "Temperatura del aire, °C",
      "v": "Velocidad del viento, km/h",
    },
    options: {},
    results: {
      "Ощущаемая температура": "Temperatura que se siente",
      "Разница с термометром": "Diferencia respecto al termómetro",
      "Температура воздуха": "Temperatura del aire",
      "Скорость ветра": "Velocidad del viento",
      "Ощущаемая в градусах Фаренгейта": "La que se siente en grados Fahrenheit",
      "Проверьте данные": "Revisa los datos",
    },
    values: {
      "км/ч": "km/h",
      "Формула работает при температуре не выше 10 °C": "La fórmula solo vale con temperaturas de 10 °C o menos",
      "Формула работает при ветре не слабее 4,8 км/ч": "La fórmula solo vale con vientos de 4,8 km/h o más",
    },
  },
};
