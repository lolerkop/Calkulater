import type { CalculatorContextualField } from '../../lib/platform/types';

const help = {
  ru: { ps: 'Метрическая лошадиная сила PS: 735,49875 Вт. Это не механическая hp.', kw: 'Мощность в киловаттах: 1 кВт = 1000 Вт.' },
  en: { ps: 'Metric horsepower PS: 735.49875 W. This differs from mechanical hp.', kw: 'Power in kilowatts: 1 kW = 1000 W.' },
  uk: { ps: 'Метрична кінська сила PS: 735,49875 Вт. Вона відрізняється від механічної hp.', kw: 'Потужність у кіловатах: 1 кВт = 1000 Вт.' },
  de: { ps: 'Metrische Pferdestärke PS: 735,49875 W. Sie unterscheidet sich von der mechanischen hp.', kw: 'Leistung in Kilowatt: 1 kW = 1000 W.' },
  es: { ps: 'Caballo métrico PS o CV: 735,49875 W. Es distinto del hp mecánico.', kw: 'Potencia en kilovatios: 1 kW = 1000 W.' },
};

export const contextualField: CalculatorContextualField = (field, values, locale) => {
  if (field.name !== 'power') return field;
  const selected = values.powerUnit === undefined ? 'ps' : values.powerUnit;
  if (selected !== 'ps' && selected !== 'kw') return field;
  const copy = help[locale === 'ru' || locale === 'uk' || locale === 'de' || locale === 'es' ? locale : 'en'];
  return { ...field, unit: selected === 'ps' ? 'PS' : 'kW', help: [field.help, copy[selected]].filter(Boolean).join(' ') };
};
