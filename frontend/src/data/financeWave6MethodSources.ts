import type { EditorialSource } from './calculatorEditorial';

// Primary source bodies read by AI on 2026-10-01. Human review remains pending.
// Numerical examples are independently derived, rather than copied from sources.
// US consumer guidance and the archived leasing explanation have bounded scope.
type Labels = Record<'ru' | 'en' | 'uk' | 'de' | 'es', string>;
type Source = { href: string; label: Labels };
const pmt: Source = {
  href: 'https://support.microsoft.com/en-us/excel/functions/pmt-function',
  label: { ru: 'Microsoft PMT: постоянная ставка, равные платежи и конец периода', en: 'Microsoft PMT: constant rate, equal payments and end-of-period timing', uk: 'Microsoft PMT: стала ставка, рівні платежі й кінець періоду', de: 'Microsoft PMT: konstanter Zins, gleiche Raten und Periodenende', es: 'Microsoft PMT: tipo constante, cuotas iguales y fin del periodo' },
};
const nper: Source = {
  href: 'https://support.microsoft.com/en-us/excel/functions/nper-function',
  label: { ru: 'Microsoft NPER: число периодов при постоянной ставке и платежах', en: 'Microsoft NPER: period count with constant rate and payments', uk: 'Microsoft NPER: кількість періодів за сталої ставки й платежів', de: 'Microsoft NPER: Periodenzahl bei konstantem Zins und Zahlungen', es: 'Microsoft NPER: número de periodos con tipo y pagos constantes' },
};
const fv: Source = {
  href: 'https://support.microsoft.com/en-us/excel/functions/fv-function',
  label: { ru: 'Microsoft FV: начальная сумма, регулярные взносы и момент внесения', en: 'Microsoft FV: initial amount, regular deposits and deposit timing', uk: 'Microsoft FV: початкова сума, регулярні внески та час внесення', de: 'Microsoft FV: Anfangskapital, regelmäßige Beiträge und Einzahlungstermin', es: 'Microsoft FV: capital inicial, aportes periódicos y momento del aporte' },
};
const primary: Partial<Record<string, Source[]>> = {
  annuity: [pmt],
  'apr-apy': [
    { href: 'https://support.microsoft.com/en-us/excel/functions/effect-function', label: { ru: 'Microsoft EFFECT: эффективная ставка из номинальной и частоты капитализации', en: 'Microsoft EFFECT: effective rate from nominal rate and compounding frequency', uk: 'Microsoft EFFECT: ефективна ставка з номінальної та частоти капіталізації', de: 'Microsoft EFFECT: Effekt aus Nominalzins und Verzinsungshäufigkeit', es: 'Microsoft EFFECT: tipo efectivo desde nominal y frecuencia de capitalización' } },
    { href: 'https://www.consumerfinance.gov/ask-cfpb/what-is-the-difference-between-a-mortgage-interest-rate-and-an-apr-en-135/', label: { ru: 'CFPB, США: ипотечный APR может включать расходы помимо процентов', en: 'CFPB, United States: mortgage APR can include costs beyond interest', uk: 'CFPB, США: іпотечний APR може містити витрати крім відсотків', de: 'CFPB, USA: Hypotheken-APR kann Kosten zusätzlich zum Zins enthalten', es: 'CFPB, Estados Unidos: APR hipotecario puede incluir costes además del interés' } },
  ],
  cagr: [
    { href: 'https://support.microsoft.com/en-us/excel/functions/rri-function', label: { ru: 'Microsoft RRI: эквивалентный темп между начальной и конечной стоимостью', en: 'Microsoft RRI: equivalent rate between starting and ending values', uk: 'Microsoft RRI: еквівалентний темп між початковою й кінцевою вартістю', de: 'Microsoft RRI: äquivalente Rate zwischen Anfangs- und Endwert', es: 'Microsoft RRI: tasa equivalente entre valores inicial y final' } },
    { href: 'https://support.microsoft.com/en-us/excel/functions/xirr-function', label: { ru: 'Microsoft XIRR: отдельная методика доходности датированных потоков', en: 'Microsoft XIRR: a separate return method for dated cash flows', uk: 'Microsoft XIRR: окрема методика дохідності датованих потоків', de: 'Microsoft XIRR: eigene Renditemethode für datierte Zahlungsströme', es: 'Microsoft XIRR: método distinto de rentabilidad para flujos fechados' } },
  ],
  'savings-goal': [fv, nper],
  'lease-payment': [
    { href: 'https://www.federalreserve.gov/pubs/leasing/resource/consider/ongoing_info6.htm', label: { ru: 'Federal Reserve, архивная модель США: money factor и плата по сумме стоимостей', en: 'Federal Reserve, archived US model: money factor and charge based on value sum', uk: 'Federal Reserve, архівна модель США: money factor і плата за сумою вартостей', de: 'Federal Reserve, archiviertes US-Modell: Money Factor und Gebühr aus Wertsumme', es: 'Federal Reserve, modelo estadounidense archivado: money factor y cargo sobre suma de valores' } },
  ],
  'early-repayment': [pmt, nper],
  refinancing: [
    pmt,
    { href: 'https://files.consumerfinance.gov/f/documents/cfpb_should_i_refinance_handout.pdf', label: { ru: 'CFPB, США: расходы перехода и риск удлинения срока рефинансирования', en: 'CFPB, United States: switching costs and longer-term refinancing trade-offs', uk: 'CFPB, США: витрати переходу й ризик подовження строку рефінансування', de: 'CFPB, USA: Wechselkosten und Folgen längerer Umschuldungslaufzeit', es: 'CFPB, Estados Unidos: gastos de cambio y efectos de ampliar el plazo' } },
  ],
  'down-payment': [
    { href: 'https://www.consumerfinance.gov/owning-a-home/prepare/determine-your-down-payment/', label: { ru: 'CFPB, США: разделение взноса, расходов сделки и резерва', en: 'CFPB, United States: separating down payment, closing expenses and reserves', uk: 'CFPB, США: відокремлення внеску, витрат угоди та резерву', de: 'CFPB, USA: Anzahlung, Nebenkosten und Reserve getrennt planen', es: 'CFPB, Estados Unidos: separar entrada, gastos de cierre y reservas' } },
  ],
};

export function getFinanceWave6MethodSources(id: string, locale: string): EditorialSource[] {
  return (Object.hasOwn(primary, id) ? primary[id] ?? [] : []).map(source => ({ href: source.href, label: source.label[locale as keyof Labels] ?? source.label.en }));
}
