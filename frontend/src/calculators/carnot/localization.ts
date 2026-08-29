import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'tHot': 'Temperatur des warmen Reservoirs, K',
      'tCold': 'Temperatur des kalten Reservoirs, K',
    },
    results: {
      'Предельный КПД': 'Höchstwirkungsgrad',
      'Полезная работа из 1000 Дж тепла': 'Nutzarbeit aus 1000 J Wärme',
      'Отдано холодильнику': 'An das kalte Reservoir abgegeben',
      'Перепад температур': 'Temperaturunterschied',
      'Отношение температур': 'Verhältnis der Temperaturen',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Дж': 'J',
      'К': 'K',
      'Температура нагревателя должна быть больше нуля кельвинов': 'Die Temperatur des warmen Reservoirs muss über null Kelvin liegen',
      'Температура холодильника должна быть больше нуля кельвинов': 'Die Temperatur des kalten Reservoirs muss über null Kelvin liegen',
      'Холодильник не может быть теплее нагревателя': 'Das kalte Reservoir kann nicht wärmer sein als das warme',
    },
  },
  en: {
    fields: { tHot: 'Hot reservoir temperature, K', tCold: 'Cold reservoir temperature, K' },
    options: {},
    results: {
      'Предельный КПД': 'Maximum efficiency',
      'Полезная работа из 1000 Дж тепла': 'Useful work from 1000 J of heat',
      'Отдано холодильнику': 'Rejected to the cold reservoir',
      'Перепад температур': 'Temperature difference',
      'Отношение температур': 'Temperature ratio',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'Дж': 'J', 'К': 'K',
      'Температура нагревателя должна быть больше нуля кельвинов': 'The hot temperature must be above zero kelvin',
      'Температура холодильника должна быть больше нуля кельвинов': 'The cold temperature must be above zero kelvin',
      'Холодильник не может быть теплее нагревателя': 'The cold reservoir cannot be warmer than the hot one',
    },
  },
  uk: {
    fields: { tHot: 'Температура нагрівника, К', tCold: 'Температура холодильника, К' },
    options: {},
    results: {
      'Предельный КПД': 'Граничний ККД',
      'Полезная работа из 1000 Дж тепла': 'Корисна робота з 1000 Дж тепла',
      'Отдано холодильнику': 'Віддано холодильнику',
      'Перепад температур': 'Перепад температур',
      'Отношение температур': 'Відношення температур',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'Дж': 'Дж', 'К': 'К',
      'Температура нагревателя должна быть больше нуля кельвинов': 'Температура нагрівника має бути вищою за нуль кельвінів',
      'Температура холодильника должна быть больше нуля кельвинов': 'Температура холодильника має бути вищою за нуль кельвінів',
      'Холодильник не может быть теплее нагревателя': 'Холодильник не може бути теплішим за нагрівник',
    },
  },
};
