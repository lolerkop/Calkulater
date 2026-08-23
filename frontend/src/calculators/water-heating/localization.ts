import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      volume: 'Water volume, L', tFrom: 'Start temperature, °C', tTo: 'Target temperature, °C',
      power: 'Heater power, kW', efficiency: 'Efficiency, %',
    },
    options: {},
    results: {
      'Время нагрева': 'Heating time', 'Часы и минуты': 'Hours and minutes',
      'Энергия': 'Energy', 'Полезная мощность': 'Useful power',
      'Перепад температур': 'Temperature rise', 'Проверьте данные': 'Check the values',
    },
    values: {
      'ч': 'h', 'мин': 'min', 'кВт·ч': 'kWh', 'кВт': 'kW', 'К': 'K',
      'Объём воды должен быть больше нуля': 'The water volume must be greater than zero',
      'Мощность нагревателя должна быть больше нуля': 'The heater power must be greater than zero',
      'КПД задаётся от 0 до 100 процентов': 'Efficiency runs from 0 to 100 per cent',
      'Конечная температура должна быть выше начальной': 'The target temperature must exceed the start temperature',
    },
  },
  uk: {
    fields: {
      volume: 'Об’єм води, л', tFrom: 'Початкова температура, °C', tTo: 'Кінцева температура, °C',
      power: 'Потужність нагрівача, кВт', efficiency: 'ККД, %',
    },
    options: {},
    results: {
      'Время нагрева': 'Час нагрівання', 'Часы и минуты': 'Години та хвилини',
      'Энергия': 'Енергія', 'Полезная мощность': 'Корисна потужність',
      'Перепад температур': 'Перепад температур', 'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'ч': 'год', 'мин': 'хв', 'кВт·ч': 'кВт·год', 'кВт': 'кВт', 'К': 'К',
      'Объём воды должен быть больше нуля': 'Об’єм води має бути більшим за нуль',
      'Мощность нагревателя должна быть больше нуля': 'Потужність нагрівача має бути більшою за нуль',
      'КПД задаётся от 0 до 100 процентов': 'ККД задається від 0 до 100 відсотків',
      'Конечная температура должна быть выше начальной': 'Кінцева температура має бути вищою за початкову',
    },
  },
};
