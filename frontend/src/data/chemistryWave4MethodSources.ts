import type { EditorialSource } from './calculatorEditorial';

type SourceLocale = 'ru' | 'en' | 'uk' | 'de' | 'es';
type SourceId = 'mass-fraction' | 'mass-concentration' | 'amount-concentration' | 'ph' | 'mole' | 'dose';

// Checked on 2026-10-01. The IUPAC definitions were read in the primary
// site's search index; direct body retrieval returned 403. BIPM and IAEA
// primary bodies were read. Sources support only the stated definitions,
// not arbitrary solution densities, molar masses, pKw inputs or risk limits.
const urls: Record<SourceId, string> = {
  'mass-fraction': 'https://goldbook.iupac.org/terms/view/M03722',
  'mass-concentration': 'https://goldbook.iupac.org/terms/view/M03713',
  'amount-concentration': 'https://goldbook.iupac.org/terms/view/A00295',
  ph: 'https://goldbook.iupac.org/terms/view/P04524',
  mole: 'https://www.bipm.org/documents/d/guest/si-brochure-9-en-pdf',
  dose: 'https://nucleus.iaea.org/sites/nss-oui/Published%20Collections/m_3761d926-c16f-4477-a63b-741a9db1c16c/m_3761d926-c16f-4477-a63b-741a9db1c16c__50_0.Html',
};
const labels: Record<SourceLocale, Record<SourceId, string>> = {
  ru: {
    'mass-fraction': 'IUPAC: массовая доля — масса компонента относительно общей массы смеси',
    'mass-concentration': 'IUPAC: массовая концентрация — масса компонента на объём смеси',
    'amount-concentration': 'IUPAC: концентрация количества вещества — моли на объём смеси',
    ph: 'IUPAC: определение pH через активность H⁺, а не через концентрацию без поправок',
    mole: 'BIPM, СИ: моль и точная постоянная Авогадро 6,02214076 × 10²³ моль⁻¹',
    dose: 'МАГАТЭ, GSR Part 3: поглощённая, эквивалентная и эффективная дозы; 1 rem = 0,01 Sv',
  },
  en: {
    'mass-fraction': 'IUPAC: mass fraction — component mass relative to total mixture mass',
    'mass-concentration': 'IUPAC: mass concentration — component mass per mixture volume',
    'amount-concentration': 'IUPAC: amount concentration — moles per mixture volume',
    ph: 'IUPAC: pH is defined through H⁺ activity, not uncorrected concentration',
    mole: 'BIPM, SI: the mole and exact Avogadro constant 6.02214076 × 10²³ mol⁻¹',
    dose: 'IAEA, GSR Part 3: absorbed, equivalent and effective dose; 1 rem = 0.01 Sv',
  },
  uk: {
    'mass-fraction': 'IUPAC: масова частка — маса компонента відносно загальної маси суміші',
    'mass-concentration': 'IUPAC: масова концентрація — маса компонента на об’єм суміші',
    'amount-concentration': 'IUPAC: концентрація кількості речовини — молі на об’єм суміші',
    ph: 'IUPAC: визначення pH через активність H⁺, а не концентрацію без поправок',
    mole: 'BIPM, СІ: моль і точна стала Авогадро 6,02214076 × 10²³ моль⁻¹',
    dose: 'МАГАТЕ, GSR Part 3: поглинена, еквівалентна й ефективна дози; 1 rem = 0,01 Sv',
  },
  de: {
    'mass-fraction': 'IUPAC: Massenanteil — Komponentenmasse bezogen auf die gesamte Gemischmasse',
    'mass-concentration': 'IUPAC: Massenkonzentration — Komponentenmasse je Gemischvolumen',
    'amount-concentration': 'IUPAC: Stoffmengenkonzentration — Mol je Gemischvolumen',
    ph: 'IUPAC: pH ist durch die H⁺-Aktivität definiert, nicht durch die unkorrigierte Konzentration',
    mole: 'BIPM, SI: Mol und exakte Avogadro-Konstante 6,02214076 × 10²³ mol⁻¹',
    dose: 'IAEA, GSR Part 3: Energiedosis, Äquivalentdosis und effektive Dosis; 1 rem = 0,01 Sv',
  },
  es: {
    'mass-fraction': 'IUPAC: fracción másica — masa del componente respecto a la masa total de mezcla',
    'mass-concentration': 'IUPAC: concentración másica — masa del componente por volumen de mezcla',
    'amount-concentration': 'IUPAC: concentración de cantidad — moles por volumen de mezcla',
    ph: 'IUPAC: el pH se define mediante actividad de H⁺, no concentración sin corregir',
    mole: 'BIPM, SI: mol y constante exacta de Avogadro 6,02214076 × 10²³ mol⁻¹',
    dose: 'OIEA, GSR Part 3: dosis absorbida, equivalente y efectiva; 1 rem = 0,01 Sv',
  },
};

export function getChemistryWave4MethodSources(id: string, locale: string): EditorialSource[] {
  const language: SourceLocale = locale === 'ru' || locale === 'uk' || locale === 'de' || locale === 'es' ? locale : 'en';
  const sourceIds: SourceId[] = id === 'solution-concentration' ? ['mass-fraction', 'mass-concentration']
    : id === 'molarity' ? ['amount-concentration']
      : id === 'moles' ? ['mole']
        : id === 'ph-poh' ? ['ph']
          : id === 'convert-radiation' ? ['dose'] : [];
  return sourceIds.map(sourceId => ({ label: labels[language][sourceId], href: urls[sourceId] }));
}
