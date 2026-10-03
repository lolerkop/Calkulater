import type { EditorialSource } from './calculatorEditorial';

// AI read the cited primary bodies on2026-10-01 UTC (2026-10-02 Kyiv).
// Human financial and native-language review is pending. For the research
// paper only the abstract and the context of equation 15 were read.
// US agencies describe educational definitions, not worldwide lending rules.
type Labels = Record<'ru' | 'en' | 'uk' | 'de' | 'es', string>;
type Source = { href: string; label: Labels };
const purchasingPower: Source = {
  href: 'https://www.bls.gov/cpi/factsheets/purchasing-power-constant-dollars.htm',
  label: { ru: 'BLS, США: покупательная способность и отношение индексов цен', en: 'BLS, United States: purchasing power and the price-index ratio', uk: 'BLS, США: купівельна спроможність і відношення індексів цін', de: 'BLS, USA: Kaufkraft und Verhältnis der Preisindizes', es: 'BLS, Estados Unidos: poder adquisitivo y cociente de índices de precios' },
};
const budget: Source = {
  href: 'https://files.consumerfinance.gov/f/201603_cfpb_rules-to-live-by_my-spending-rule-to-live-by.pdf',
  label: { ru: 'CFPB, США: правило 50/30/20 для дохода после налогов как изменяемый ориентир', en: 'CFPB, United States: after-tax 50/30/20 as an adjustable planning guideline', uk: 'CFPB, США: правило 50/30/20 для доходу після податків як змінюваний орієнтир', de: 'CFPB, USA: 50/30/20 nach Steuern als anpassbare Planungshilfe', es: 'CFPB, Estados Unidos: 50/30/20 después de impuestos como guía ajustable' },
};
const primary: Partial<Record<string, Source[]>> = {
  inflation: [
    purchasingPower,
    { href: 'https://www.bls.gov/cpi/factsheets/averages-and-individual-experiences-differ.htm', label: { ru: 'BLS, США: средний индекс и отдельная потребительская корзина различаются', en: 'BLS, United States: average indices and individual baskets can differ', uk: 'BLS, США: середній індекс та окремий споживчий кошик можуть відрізнятися', de: 'BLS, USA: Durchschnittsindex und individueller Warenkorb können abweichen', es: 'BLS, Estados Unidos: el índice medio y la cesta individual pueden diferir' } },
  ],
  'real-return': [
    { href: 'https://www.dallasfed.org/~/media/documents/research/events/2014/14tmceggertsson.pdf', label: { ru: 'Eggertsson–Mehrotra, A Model of Secular Stagnation (2014): соотношение Фишера, уравнение 15', en: 'Eggertsson–Mehrotra, A Model of Secular Stagnation (2014): Fisher relation, equation 15', uk: 'Eggertsson–Mehrotra, A Model of Secular Stagnation (2014): співвідношення Фішера, рівняння 15', de: 'Eggertsson–Mehrotra, A Model of Secular Stagnation (2014): Fisher-Beziehung, Gleichung 15', es: 'Eggertsson–Mehrotra, A Model of Secular Stagnation (2014): relación de Fisher, ecuación 15' } },
    purchasingPower,
  ],
  'rule-of-72': [
    { href: 'https://www.investor.gov/additional-resources/information/youth/teachers-classroom-resources/what-compound-interest', label: { ru: 'Investor.gov, США: реинвестирование процентов и приблизительное правило 72', en: 'Investor.gov, United States: reinvested interest and the approximate rule of 72', uk: 'Investor.gov, США: реінвестування відсотків і приблизне правило 72', de: 'Investor.gov, USA: Wiederanlage von Zinsen und näherungsweise 72er-Regel', es: 'Investor.gov, Estados Unidos: reinversión de intereses y regla aproximada del 72' } },
  ],
  'time-value-money': [
    { href: 'https://support.microsoft.com/en-us/excel/functions/fv-function', label: { ru: 'Microsoft FV: будущая стоимость при согласованных ставке и числе периодов', en: 'Microsoft FV: future value with consistent rate and period count', uk: 'Microsoft FV: майбутня вартість за узгоджених ставки й кількості періодів', de: 'Microsoft FV: Zukunftswert bei einheitlichem Zins und Periodenzahl', es: 'Microsoft FV: valor futuro con tipo y número de periodos coherentes' } },
    { href: 'https://support.microsoft.com/en-us/excel/functions/pv-function', label: { ru: 'Microsoft PV: текущая стоимость и единая база ставки и срока', en: 'Microsoft PV: present value and consistent rate and duration units', uk: 'Microsoft PV: поточна вартість і єдина база ставки та строку', de: 'Microsoft PV: Barwert und einheitliche Einheiten von Zins und Dauer', es: 'Microsoft PV: valor actual y unidades coherentes del tipo y plazo' } },
  ],
  dti: [
    { href: 'https://www.consumerfinance.gov/ask-cfpb/what-is-a-debt-to-income-ratio-en-1791/', label: { ru: 'CFPB, США: месячные долговые платежи к доходу до налогов; условия кредиторов различаются', en: 'CFPB, United States: monthly debt divided by gross income; lender limits vary', uk: 'CFPB, США: місячні боргові платежі до доходу до податків; умови кредиторів різняться', de: 'CFPB, USA: monatliche Schuldenzahlungen zu Bruttoeinkommen; Kreditgebergrenzen variieren', es: 'CFPB, Estados Unidos: deuda mensual sobre ingresos brutos; los límites varían según prestamista' } },
  ],
  'emergency-fund': [
    { href: 'https://www.consumerfinance.gov/an-essential-guide-to-building-an-emergency-fund/', label: { ru: 'CFPB, США: резерв на незапланированные расходы и индивидуальный выбор суммы', en: 'CFPB, United States: a reserve for unplanned expenses and an individual target', uk: 'CFPB, США: резерв на непередбачені витрати та індивідуальна цільова сума', de: 'CFPB, USA: Reserve für ungeplante Ausgaben und individuelles Sparziel', es: 'CFPB, Estados Unidos: reserva para gastos imprevistos y objetivo individual' } },
  ],
  'savings-rate': [
    { href: 'https://www.bea.gov/news/pio-release-additional-information', label: { ru: 'BEA, США: норма сбережений в национальной статистике; не тождественна личному кассовому бюджету', en: 'BEA, United States: the national saving-rate definition differs from a personal cash budget', uk: 'BEA, США: визначення норми заощаджень у національній статистиці відрізняється від особистого касового бюджету', de: 'BEA, USA: volkswirtschaftliche Sparquote unterscheidet sich vom persönlichen Zahlungsbudget', es: 'BEA, Estados Unidos: la tasa nacional de ahorro difiere de un presupuesto personal de caja' } },
    budget,
  ],
  'budget-50-30-20': [budget],
};

export function getFinanceWave8MethodSources(id: string, locale: string): EditorialSource[] {
  return (Object.hasOwn(primary, id) ? primary[id] ?? [] : []).map(source => ({ href: source.href, label: source.label[locale as keyof Labels] ?? source.label.en }));
}
