import type { EditorialSource } from './calculatorEditorial';

const sourceLabels = {
  "ru": {
    "openstax": "OpenStax Chemistry 2e §9.2: идеальный и объединённый газовые законы, единицы и границы модели",
    "nist": "NIST CODATA 2022: точная газовая постоянная и разные определения стандартного молярного объёма"
  },
  "en": {
    "openstax": "OpenStax Chemistry 2e §9.2: ideal and combined gas laws, units and model limits",
    "nist": "NIST CODATA 2022: exact gas constant and distinct standard molar-volume conditions"
  },
  "uk": {
    "openstax": "OpenStax Chemistry 2e §9.2: ідеальний та об’єднаний газові закони, одиниці й границі моделі",
    "nist": "NIST CODATA 2022: точна газова стала та різні умови стандартного молярного об’єму"
  },
  "de": {
    "openstax": "OpenStax Chemistry 2e §9.2: ideales und kombiniertes Gasgesetz, Einheiten und Modellgrenzen",
    "nist": "NIST CODATA 2022: exakte Gaskonstante und verschiedene Standardbedingungen des molaren Volumens"
  },
  "es": {
    "openstax": "OpenStax Chemistry 2e §9.2: leyes ideal y combinada de los gases, unidades y límites del modelo",
    "nist": "NIST CODATA 2022: constante exacta de los gases y distintas condiciones del volumen molar estándar"
  }
} as const;

export function getGasWave5MethodSources(id: string, locale: string): EditorialSource[] {
  if (id !== 'gas-laws' && id !== 'ideal-gas-law') return [];
  const lang = locale === 'ru' || locale === 'uk' || locale === 'de' || locale === 'es' ? locale : 'en';
  const labels = sourceLabels[lang];
  return [
    { label: labels.openstax, href: 'https://openstax.org/books/chemistry-2e/pages/9-2-relating-pressure-volume-amount-and-temperature-the-ideal-gas-law' },
    ...(id === 'ideal-gas-law' ? [{ label: labels.nist, href: 'https://physics.nist.gov/cuu/Constants/Table/allascii.txt' }] : []),
  ];
}
