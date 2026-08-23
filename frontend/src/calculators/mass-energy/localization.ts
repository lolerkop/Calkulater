import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: { massG: 'Mass, g' },
    options: {},
    results: {
      'Энергия покоя': 'Rest energy', 'В киловатт-часах': 'In kilowatt-hours',
      'В тоннах тротилового эквивалента': 'In tonnes of TNT equivalent',
      'Масса': 'Mass', 'Хватило бы городу на': 'Enough for a city for',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'Дж': 'J', 'кВт·ч': 'kWh', 'т': 't', 'кг': 'kg', 'млн кВт·ч': 'million kWh',
      'Масса должна быть больше нуля': 'The mass must be greater than zero',
    },
  },
  uk: {
    fields: { massG: 'Маса, г' },
    options: {},
    results: {
      'Энергия покоя': 'Енергія спокою', 'В киловатт-часах': 'У кіловат-годинах',
      'В тоннах тротилового эквивалента': 'У тоннах тротилового еквіваленту',
      'Масса': 'Маса', 'Хватило бы городу на': 'Вистачило б місту на',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'Дж': 'Дж', 'кВт·ч': 'кВт·год', 'т': 'т', 'кг': 'кг', 'млн кВт·ч': 'млн кВт·год',
      'Масса должна быть больше нуля': 'Маса має бути більшою за нуль',
    },
  },
};
