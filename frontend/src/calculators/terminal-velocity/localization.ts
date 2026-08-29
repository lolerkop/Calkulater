import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'm': 'Masse, kg',
      'a': 'Stirnfläche, m²',
      'cd': 'Widerstandsbeiwert',
      'rho': 'Luftdichte, kg/m³',
    },
    results: {
      'Предельная скорость': 'Endgeschwindigkeit',
      'В километрах в час': 'In Kilometern je Stunde',
      'Сила сопротивления при этой скорости': 'Widerstandskraft bei dieser Geschwindigkeit',
      'Время разгона до 95 процентов': 'Zeit bis 95 Prozent',
      'Путь до 95 процентов': 'Weg bis 95 Prozent',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'м/с': 'm/s',
      'км/ч': 'km/h',
      'Н': 'N',
      'с': 's',
      'м': 'm',
      'Масса должна быть больше нуля': 'Die Masse muss größer als null sein',
      'Площадь должна быть больше нуля': 'Die Fläche muss größer als null sein',
      'Коэффициент сопротивления должен быть больше нуля': 'Der Widerstandsbeiwert muss größer als null sein',
      'Плотность воздуха должна быть больше нуля': 'Die Luftdichte muss größer als null sein',
    },
  },
  en: {
    fields: {
      m: 'Mass, kg', a: 'Frontal area, m²',
      cd: 'Drag coefficient', rho: 'Air density, kg/m³',
    },
    options: {},
    results: {
      'Предельная скорость': 'Terminal velocity', 'В километрах в час': 'In kilometres per hour',
      'Сила сопротивления при этой скорости': 'Drag force at that speed',
      'Время разгона до 95 процентов': 'Time to reach 95 per cent',
      'Путь до 95 процентов': 'Distance to 95 per cent',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'м/с': 'm/s', 'км/ч': 'km/h', 'Н': 'N', 'с': 's', 'м': 'm',
      'Масса должна быть больше нуля': 'The mass must be greater than zero',
      'Площадь должна быть больше нуля': 'The area must be greater than zero',
      'Коэффициент сопротивления должен быть больше нуля': 'The drag coefficient must be greater than zero',
      'Плотность воздуха должна быть больше нуля': 'The air density must be greater than zero',
    },
  },
  uk: {
    fields: {
      m: 'Маса, кг', a: 'Площа перерізу потоку, м²',
      cd: 'Коефіцієнт опору', rho: 'Густина повітря, кг/м³',
    },
    options: {},
    results: {
      'Предельная скорость': 'Гранична швидкість', 'В километрах в час': 'У кілометрах за годину',
      'Сила сопротивления при этой скорости': 'Сила опору за цієї швидкості',
      'Время разгона до 95 процентов': 'Час розгону до 95 відсотків',
      'Путь до 95 процентов': 'Шлях до 95 відсотків',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'м/с': 'м/с', 'км/ч': 'км/год', 'Н': 'Н', 'с': 'с', 'м': 'м',
      'Масса должна быть больше нуля': 'Маса має бути більшою за нуль',
      'Площадь должна быть больше нуля': 'Площа має бути більшою за нуль',
      'Коэффициент сопротивления должен быть больше нуля': 'Коефіцієнт опору має бути більшим за нуль',
      'Плотность воздуха должна быть больше нуля': 'Густина повітря має бути більшою за нуль',
    },
  },
};
