import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: { l: 'Inductance, µH', c: 'Capacitance, nF' },
    options: {},
    results: {
      'Резонансная частота': 'Resonant frequency', 'В килогерцах': 'In kilohertz',
      'Период': 'Period', 'Волновое сопротивление': 'Characteristic impedance',
      'Индуктивность': 'Inductance', 'Проверьте данные': 'Check the values',
    },
    values: {
      'Гц': 'Hz', 'кГц': 'kHz', 'с': 's', 'Ом': 'Ω', 'мкГн': 'µH',
      'Индуктивность должна быть больше нуля': 'The inductance must be greater than zero',
      'Ёмкость должна быть больше нуля': 'The capacitance must be greater than zero',
    },
  },
  uk: {
    fields: { l: 'Індуктивність, мкГн', c: 'Ємність, нФ' },
    options: {},
    results: {
      'Резонансная частота': 'Резонансна частота', 'В килогерцах': 'У кілогерцах',
      'Период': 'Період', 'Волновое сопротивление': 'Хвильовий опір',
      'Индуктивность': 'Індуктивність', 'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'Гц': 'Гц', 'кГц': 'кГц', 'с': 'с', 'Ом': 'Ом', 'мкГн': 'мкГн',
      'Индуктивность должна быть больше нуля': 'Індуктивність має бути більшою за нуль',
      'Ёмкость должна быть больше нуля': 'Ємність має бути більшою за нуль',
    },
  },
};
