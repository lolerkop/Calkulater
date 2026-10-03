import type { EditorialSource } from './calculatorEditorial';

type SourceLocale = 'ru' | 'en' | 'uk' | 'de' | 'es';
type SourcedCalculator = 'molar-mass' | 'convert-cooking-weight' | 'convert-fuel-economy';

// These primary sources were read on 2026-10-01. Their scope does not extend
// to ingredient densities or to a proof of the dilution model's equation.
const sourceUrls: Record<SourcedCalculator, string> = {
  'molar-mass': 'https://www.ciaaw.org/abridged-atomic-weights.htm',
  'convert-cooking-weight': 'https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-guidelines-determining-metric-equivalents-household-measures',
  'convert-fuel-economy': 'https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b9',
};

const sourceLabels: Record<SourceLocale, Record<SourcedCalculator, string>> = {
  ru: {
    'molar-mass': 'CIAAW: сокращённые стандартные атомные веса — округлённые значения для обычных материалов с указанной неопределённостью',
    'convert-cooking-weight': 'FDA: чашка 240 мл для маркировки пищевой ценности в США; плотности ингредиентов этот источник не подтверждает',
    'convert-fuel-economy': 'NIST: международная миля, американский и имперский галлоны — принятые определения единиц для mpg',
  },
  en: {
    'molar-mass': 'CIAAW: abridged standard atomic weights — rounded values for normal materials with stated uncertainties',
    'convert-cooking-weight': 'FDA: a 240 mL cup for US nutrition labeling; this source does not establish ingredient densities',
    'convert-fuel-economy': 'NIST: international mile, US and imperial gallons — unit conventions used for mpg',
  },
  uk: {
    'molar-mass': 'CIAAW: скорочені стандартні атомні ваги — округлені значення для звичайних матеріалів із зазначеною невизначеністю',
    'convert-cooking-weight': 'FDA: чашка 240 мл для маркування харчової цінності у США; це джерело не підтверджує густини інгредієнтів',
    'convert-fuel-economy': 'NIST: міжнародна миля, американський та імперський галони — прийняті визначення одиниць для mpg',
  },
  de: {
    'molar-mass': 'CIAAW: verkürzte Standardatomgewichte — gerundete Werte für normale Materialien mit angegebenen Unsicherheiten',
    'convert-cooking-weight': 'FDA: eine Tasse mit 240 ml für die US-Nährwertkennzeichnung; diese Quelle belegt keine Dichten der Zutaten',
    'convert-fuel-economy': 'NIST: internationale Meile, US-Gallone und imperiale Gallone — Einheitenkonventionen für mpg',
  },
  es: {
    'molar-mass': 'CIAAW: pesos atómicos estándar abreviados — valores redondeados para materiales normales con incertidumbres indicadas',
    'convert-cooking-weight': 'FDA: taza de 240 ml para el etiquetado nutricional de EE. UU.; esta fuente no establece las densidades de los ingredientes',
    'convert-fuel-economy': 'NIST: milla internacional, galón estadounidense y galón imperial — convenciones de unidades para mpg',
  },
};

export function getChemistrySpecialMethodSources(id: string, locale: string): EditorialSource[] {
  // No independently checked primary source for C1V1 = C2V2 is registered.
  // Generic SI or mass-fraction definitions would not substantiate it.
  if (id !== 'molar-mass' && id !== 'convert-cooking-weight' && id !== 'convert-fuel-economy') return [];
  const language: SourceLocale = locale === 'ru' || locale === 'uk' || locale === 'de' || locale === 'es' ? locale : 'en';
  return [{ label: sourceLabels[language][id], href: sourceUrls[id] }];
}
