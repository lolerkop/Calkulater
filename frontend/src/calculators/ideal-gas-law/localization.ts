import type { CalculatorLocalization } from '../../lib/platform/types';

// Единицы принадлежат калькулятору: центральный словарь единиц трогать нельзя,
// это вернуло бы ручную регистрацию. Подстановка идёт по самому длинному ключу,
// поэтому « моль/л» выигрывает у « моль», а « г/моль» — у « г».
const RESULTS_EN = {
  'Давление': 'Pressure',
  'Объём': 'Volume',
  'Газовая постоянная': 'Gas constant',
  'Температура': 'Temperature',
  'Количество вещества': 'Amount of substance',
  'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Давление': 'Тиск',
  'Объём': 'Об’єм',
  'Газовая постоянная': 'Газова стала',
  'Температура': 'Температура',
  'Количество вещества': 'Кількість речовини',
  'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  en: {
    fields: { solve: 'What to find', n: 'Amount of substance, mol', tempUnit: 'Temperature unit', t: 'Temperature', volumeUnit: 'Volume unit', v: 'Volume', pressureUnit: 'Pressure unit', p: 'Pressure', },
    options: { p: 'the pressure', v: 'the volume', k: 'kelvin', c: 'degrees Celsius', m3: 'cubic metres', l: 'litres', pa: 'pascals', kpa: 'kilopascals', atm: 'atmospheres', },
    results: RESULTS_EN,
    values: {
      ' моль/л': ' mol/L',
      ' г/моль': ' g/mol',
      ' моль': ' mol',
      ' г/л': ' g/L',
      ' г': ' g',
      ' мл': ' mL',
      ' л': ' L',
      ' кПа': ' kPa',
      ' атм': ' atm',
      ' Па': ' Pa',
      ' К': ' K',
      ' ppm': ' ppm',
      'Дж/(моль·К)': 'J/(mol·K)',
      'Температура не может быть ниже абсолютного нуля': 'The temperature cannot be below absolute zero',
      'Количество вещества должно быть больше нуля': 'The amount of substance must be greater than zero',
      'Объём должен быть больше нуля': 'The volume must be greater than zero',
      'Давление должно быть больше нуля': 'The pressure must be greater than zero',
      'Температура должна быть больше нуля': 'The temperature must be greater than zero',
    },
  },
  uk: {
    fields: { solve: 'Що знайти', n: 'Кількість речовини, моль', tempUnit: 'Одиниця температури', t: 'Температура', volumeUnit: 'Одиниця об’єму', v: 'Об’єм', pressureUnit: 'Одиниця тиску', p: 'Тиск', },
    options: { p: 'тиск', v: 'об’єм', k: 'кельвіни', c: 'градуси Цельсія', m3: 'кубометри', l: 'літри', pa: 'паскалі', kpa: 'кілопаскалі', atm: 'атмосфери', },
    results: RESULTS_UK,
    values: {
      ' моль/л': ' моль/л',
      ' г/моль': ' г/моль',
      ' моль': ' моль',
      ' г/л': ' г/л',
      ' мл': ' мл',
      ' кПа': ' кПа',
      ' атм': ' атм',
      ' Па': ' Па',
      ' К': ' К',
      'Дж/(моль·К)': 'Дж/(моль·К)',
      'Температура не может быть ниже абсолютного нуля': 'Температура не може бути нижчою за абсолютний нуль',
      'Количество вещества должно быть больше нуля': 'Кількість речовини має бути більшою за нуль',
      'Объём должен быть больше нуля': 'Об’єм має бути більшим за нуль',
      'Давление должно быть больше нуля': 'Тиск має бути більшим за нуль',
      'Температура должна быть больше нуля': 'Температура має бути більшою за нуль',
    },
  },
};
