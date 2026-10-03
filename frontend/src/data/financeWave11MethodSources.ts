import type { EditorialSource } from './calculatorEditorial';

type Labels = Record<'ru' | 'en' | 'uk' | 'de' | 'es', string>;
type Source = { href: string; label: Labels };
// Relevant primary bodies read on 2026-10-02 UTC. Human subject/native review
// remains pending. US educational examples are not worldwide contract rules.
const primary: Partial<Record<string, Source[]>> = {
  'income-tax-calculator': [{
    href: 'https://www.nalog.gov.ru/rn46/taxation/taxes/ndfl/',
    label: { ru: 'ФНС России: основные базы НДФЛ с 2025 года, нарастающий итог и исключения для нерезидентов', en: 'FNS Russia: main income-tax bases from 2025, cumulative calculation and nonresident exceptions', uk: 'ФНС Росії: основні бази ПДФО від 2025 року, накопичувальний розрахунок і винятки для нерезидентів', de: 'FNS Russland: Hauptbemessungsgrundlagen ab 2025, kumulative Rechnung und Ausnahmen für Nichtansässige', es: 'FNS Rusia: bases principales desde 2025, cálculo acumulado y excepciones para no residentes' },
  }],
  'vat-calculator': [{
    href: 'https://www.nalog.gov.ru/rn77/about_fts/about_nalog/16594097/',
    label: { ru: 'ФНС России, письмо 29.12.2025: переход основной ставки НДС с 20% на 22% с 2026 года', en: 'FNS Russia, letter of 29 December 2025: standard VAT transition from 20% to 22% in 2026', uk: 'ФНС Росії, лист 29.12.2025: перехід основної ставки ПДВ з 20% на 22% від 2026 року', de: 'FNS Russland, Schreiben vom 29.12.2025: reguläre Umsatzsteuer von 20% auf 22% ab 2026', es: 'FNS Rusia, carta del 29/12/2025: transición del IVA general del 20% al 22% en 2026' },
  }, {
    href: 'https://www.nalog.gov.ru/rn77/taxation/taxes/nds_usn/',
    label: { ru: 'ФНС России: условия НДС при УСН; ставки 5% и 7% не выбираются автоматически по одной дате', en: 'FNS Russia: simplified-regime VAT conditions; 5% and 7% are not determined by a date alone', uk: 'ФНС Росії: умови ПДВ за спрощеного режиму; 5% та 7% не визначаються лише датою', de: 'FNS Russland: Umsatzsteuer im vereinfachten Regime; 5% und 7% folgen nicht allein aus einem Datum', es: 'FNS Rusia: condiciones del IVA en régimen simplificado; el 5% y el 7% no se deducen solo de una fecha' },
  }],
  'margin-calculator': [{
    href: 'https://openstax.org/books/elementary-algebra-2e/pages/3-2-solve-percent-applications',
    label: { ru: 'OpenStax, Elementary Algebra 2e: процентная наценка на исходную стоимость', en: 'OpenStax, Elementary Algebra 2e: percentage markup on original cost', uk: 'OpenStax, Elementary Algebra 2e: відсоткова націнка на початкову вартість', de: 'OpenStax, Elementary Algebra 2e: prozentualer Aufschlag auf Ausgangskosten', es: 'OpenStax, Elementary Algebra 2e: recargo porcentual sobre el coste original' },
  }],
  'break-even-calculator': [{
    href: 'https://openstax.org/books/principles-managerial-accounting/pages/3-2-calculate-a-break-even-point-in-units-and-dollars',
    label: { ru: 'OpenStax, Managerial Accounting: безубыточность и допущения рабочего диапазона затрат', en: 'OpenStax, Managerial Accounting: break-even and relevant-range cost assumptions', uk: 'OpenStax, Managerial Accounting: беззбитковість і припущення робочого діапазону витрат', de: 'OpenStax, Managerial Accounting: Gewinnschwelle und Kostenannahmen im relevanten Bereich', es: 'OpenStax, Managerial Accounting: punto de equilibrio y supuestos de costes del rango relevante' },
  }],
  'credit-card-payoff': [{
    href: 'https://www.consumerfinance.gov/ask-cfpb/how-does-my-credit-card-company-calculate-the-amount-of-interest-i-owe-en-51/',
    label: { ru: 'CFPB, США: ежедневные начисления и отдельные ставки объясняют отличие от месячной модели', en: 'CFPB, United States: daily accrual and separate rates explain differences from a monthly model', uk: 'CFPB, США: щоденні нарахування та окремі ставки пояснюють відмінність від місячної моделі', de: 'CFPB, USA: tägliche Zinsen und separate Sätze erklären Abweichungen vom Monatsmodell', es: 'CFPB, Estados Unidos: devengo diario y tipos distintos explican diferencias frente al modelo mensual' },
  }],
  'crypto-pnl': [{
    href: 'https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/understand_risks_of_virtual_currency.html',
    label: { ru: 'CFTC, США: плечо, требования маржи и риск потерь сверх начального обеспечения', en: 'CFTC, United States: leverage, margin requirements and losses beyond initial collateral', uk: 'CFTC, США: плече, вимоги маржі та ризик втрат понад початкове забезпечення', de: 'CFTC, USA: Hebel, Marginanforderungen und Verluste über die Anfangssicherheit hinaus', es: 'CFTC, Estados Unidos: apalancamiento, requisitos de margen y pérdidas superiores a la garantía inicial' },
  }],
  dca: [{
    href: 'https://www.investor.gov/introduction-investing/investing-basics/glossary/dollar-cost-averaging',
    label: { ru: 'Investor.gov, SEC США: одинаковые суммы через регулярные интервалы и покупаемые единицы', en: 'Investor.gov, US SEC: equal amounts at regular intervals and units purchased', uk: 'Investor.gov, SEC США: однакові суми через регулярні інтервали та придбані одиниці', de: 'Investor.gov, SEC USA: gleiche Beträge in regelmäßigen Abständen und gekaufte Anteile', es: 'Investor.gov, SEC Estados Unidos: importes iguales a intervalos regulares y unidades adquiridas' },
  }],
  'debt-snowball-avalanche': [{
    href: 'https://www.consumerfinance.gov/archive/blog/how-reduce-your-debt/',
    label: { ru: 'CFPB, США: определения метода высокой ставки и снежного кома; не проверка данного порядка симуляции', en: 'CFPB, United States: highest-rate and snowball definitions; not validation of this simulation timing', uk: 'CFPB, США: визначення високої ставки та снігової кулі; не перевірка порядку цієї симуляції', de: 'CFPB, USA: Definition von Höchstzins- und Schneeballmethode; keine Prüfung dieses Simulationsablaufs', es: 'CFPB, Estados Unidos: definición de tipos altos y bola de nieve; no valida el orden de esta simulación' },
  }],
  'depreciation-methods': [{
    href: 'https://support.microsoft.com/en-us/excel/functions/ddb-function',
    label: { ru: 'Microsoft DDB: чистый убывающий остаток; переключение на линейный метод относится к VDB', en: 'Microsoft DDB: pure declining balance; switching to straight line belongs to VDB', uk: 'Microsoft DDB: чистий спадний залишок; перехід на лінійний метод належить VDB', de: 'Microsoft DDB: reine degressive Abschreibung; linearer Wechsel gehört zu VDB', es: 'Microsoft DDB: saldo decreciente puro; el cambio al método lineal corresponde a VDB' },
  }],
};
export function getFinanceWave11MethodSources(id: string, locale: string): EditorialSource[] {
  if ((id === 'income-tax-calculator' || id === 'vat-calculator') && locale !== 'ru') return [];
  return (Object.hasOwn(primary, id) ? primary[id] ?? [] : []).map(source => ({ href: source.href, label: source.label[locale as keyof Labels] ?? source.label.en }));
}
