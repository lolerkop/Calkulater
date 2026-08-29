import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'h': 'Höhe über dem Meeresspiegel, m',
    },
    results: {
      'Давление': 'Druck',
      'В миллиметрах ртутного столба': 'In Millimetern Quecksilbersäule',
      'Доля от уровня моря': 'Anteil des Meeresspiegelwerts',
      'Температура по стандартной атмосфере': 'Temperatur nach der Normatmosphäre',
      'Плотность воздуха': 'Luftdichte',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'кПа': 'kPa',
      'мм рт. ст.': 'mmHg',
      '%': '%',
      '°C': '°C',
      'кг/м³': 'kg/m³',
      'Высота вне диапазона от −430 до 11 000 м': 'Die Höhe liegt außerhalb des Bereichs von −430 bis 11 000 m',
    },
  },
  en: {
    fields: { h: 'Altitude above sea level, m' },
    options: {},
    results: {
      'Давление': 'Pressure', 'В миллиметрах ртутного столба': 'In millimetres of mercury',
      'Доля от уровня моря': 'Share of sea level', 'Температура по стандартной атмосфере': 'Standard-atmosphere temperature',
      'Плотность воздуха': 'Air density', 'Проверьте данные': 'Check the values',
    },
    values: {
      'кПа': 'kPa', 'мм рт. ст.': 'mmHg', '%': '%', '°C': '°C', 'кг/м³': 'kg/m³',
      'Высота вне диапазона от −430 до 11 000 м': 'The altitude is outside the −430 to 11,000 m range',
    },
  },
  uk: {
    fields: { h: 'Висота над рівнем моря, м' },
    options: {},
    results: {
      'Давление': 'Тиск', 'В миллиметрах ртутного столба': 'У міліметрах ртутного стовпа',
      'Доля от уровня моря': 'Частка від рівня моря', 'Температура по стандартной атмосфере': 'Температура за стандартною атмосферою',
      'Плотность воздуха': 'Густина повітря', 'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'кПа': 'кПа', 'мм рт. ст.': 'мм рт. ст.', '%': '%', '°C': '°C', 'кг/м³': 'кг/м³',
      'Высота вне диапазона от −430 до 11 000 м': 'Висота поза діапазоном від −430 до 11 000 м',
    },
  },
};
