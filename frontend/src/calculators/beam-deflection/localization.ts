import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      scheme: 'Load scheme', load: 'Load', span: 'Span, m',
      e: 'Modulus of elasticity, GPa', inertia: 'Second moment of area, cm⁴',
    },
    options: { uniform: 'uniformly distributed, kN/m', point: 'point load at midspan, kN' },
    results: {
      'Прогиб': 'Deflection', 'Относительный прогиб': 'Relative deflection',
      'Жёсткость EI': 'Stiffness EI', 'Пролёт': 'Span', 'Предел 1/250': 'Limit 1/250',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'мм': 'mm', 'м': 'm', 'Н·м²': 'N·m²',
      'Выберите схему нагружения из списка': 'Choose a load scheme from the list',
      'Нагрузка должна быть больше нуля': 'The load must be greater than zero',
      'Пролёт должен быть больше нуля': 'The span must be greater than zero',
      'Модуль упругости должен быть больше нуля': 'The modulus of elasticity must be greater than zero',
      'Момент инерции сечения должен быть больше нуля': 'The second moment of area must be greater than zero',
    },
  },
  uk: {
    fields: {
      scheme: 'Схема навантаження', load: 'Навантаження', span: 'Проліт, м',
      e: 'Модуль пружності, ГПа', inertia: 'Момент інерції перерізу, см⁴',
    },
    options: { uniform: 'рівномірне, кН/м', point: 'зосереджене посередині, кН' },
    results: {
      'Прогиб': 'Прогин', 'Относительный прогиб': 'Відносний прогин',
      'Жёсткость EI': 'Жорсткість EI', 'Пролёт': 'Проліт', 'Предел 1/250': 'Межа 1/250',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'мм': 'мм', 'м': 'м', 'Н·м²': 'Н·м²',
      'Выберите схему нагружения из списка': 'Оберіть схему навантаження зі списку',
      'Нагрузка должна быть больше нуля': 'Навантаження має бути більшим за нуль',
      'Пролёт должен быть больше нуля': 'Проліт має бути більшим за нуль',
      'Модуль упругости должен быть больше нуля': 'Модуль пружності має бути більшим за нуль',
      'Момент инерции сечения должен быть больше нуля': 'Момент інерції перерізу має бути більшим за нуль',
    },
  },
};
