import type { EditorialSource } from './calculatorEditorial';

type Labels = Record<'ru' | 'en' | 'uk' | 'de' | 'es', string>;
type Source = { href: string; labels: Labels };
// AI read these primary bodies on2026-10-01 UTC (2026-10-02 Kyiv).
// IAS2 uses the public overview, not a claimed review of the complete standard.
// US tax/labour and historical compensation documents illustrate scope only;
// they do not determine current local taxes, wages or platform fees.
const inventoryCost: Source = {
  href: 'https://www.ifrs.org/issued-standards/list-of-standards/ias-2-inventories/',
  labels: { ru: 'IFRS IAS 2: публичный обзор стоимости запасов и отдельно признаваемых потерь', en: 'IFRS IAS 2: public overview of inventory costs and recognised losses', uk: 'IFRS IAS 2: публічний огляд вартості запасів та визнання втрат', de: 'IFRS IAS 2: öffentlicher Überblick über Lagerkosten und erfasste Verluste', es: 'IFRS IAS 2: resumen público de costes de inventario y pérdidas reconocidas' },
};
const primary: Partial<Record<string, Source[]>> = {
  'ad-budget-funnel': [
    { href: 'https://support.google.com/google-ads/answer/14074?hl=en', labels: { ru: 'Google Ads: средний CPC как расход на клик, а не максимальная ставка', en: 'Google Ads: average CPC as cost per click, distinct from a maximum bid', uk: 'Google Ads: середній CPC як витрати на клік, не максимальна ставка', de: 'Google Ads: durchschnittlicher CPC als Klickkosten statt Höchstgebot', es: 'Google Ads: CPC medio como coste por clic, distinto de la puja máxima' } },
    { href: 'https://support.google.com/google-ads/answer/2684489?hl=en', labels: { ru: 'Google Ads: доля конверсий; несколько действий на клик отличаются от вероятности одного заказа', en: 'Google Ads: conversion rate; several actions per click differ from one-order probability', uk: 'Google Ads: частка конверсій; кілька дій на клік відрізняються від ймовірності одного замовлення', de: 'Google Ads: Konversionsrate; mehrere Aktionen je Klick sind keine Einzelbestellwahrscheinlichkeit', es: 'Google Ads: tasa de conversión; varias acciones por clic no son probabilidad de un pedido' } },
  ],
  'audience-growth': [
    { href: 'https://support.microsoft.com/en-us/excel/functions/rri-function', labels: { ru: 'Microsoft RRI: эквивалентная ставка по началу, концу и числу периодов', en: 'Microsoft RRI: an equivalent rate from start, end and number of periods', uk: 'Microsoft RRI: еквівалентна ставка за початком, кінцем і кількістю періодів', de: 'Microsoft RRI: gleichwertige Rate aus Anfang, Ende und Periodenzahl', es: 'Microsoft RRI: tasa equivalente con inicio, final y número de periodos' } },
  ],
  'churn-retention': [
    { href: 'https://stripe.com/guides/atlas/business-of-saas', labels: { ru: 'Stripe Atlas: геометрическая модель срока при постоянном оттоке', en: 'Stripe Atlas: geometric customer lifetime under constant churn', uk: 'Stripe Atlas: геометрична модель строку за сталого відтоку', de: 'Stripe Atlas: geometrische Kundendauer bei konstanter Abwanderung', es: 'Stripe Atlas: permanencia geométrica con abandono constante' } },
  ],
  cogs: [
    inventoryCost,
    { href: 'https://www.irs.gov/publications/p334', labels: { ru: 'IRS Publication 334, США: пример сверки начала, закупок и конца; не местные налоговые правила', en: 'IRS Publication 334, United States: opening, purchases and closing reconciliation; not local tax rules', uk: 'IRS Publication 334, США: приклад звірки початку, закупівель і кінця; не місцеві податкові правила', de: 'IRS Publication 334, USA: Beispiel für Anfang, Einkäufe und Ende; keine örtlichen Steuerregeln', es: 'IRS Publication 334, Estados Unidos: ejemplo de conciliación inicial, compras y final; no reglas fiscales locales' } },
  ],
  'cogs-unit-cost': [inventoryCost],
  'cycle-time': [
    { href: 'https://www.lean.org/lexicon-terms/takt-time/', labels: { ru: 'Lean Enterprise Institute: такт как доступное время к спросу', en: 'Lean Enterprise Institute: takt as available time divided by demand', uk: 'Lean Enterprise Institute: такт як доступний час до попиту', de: 'Lean Enterprise Institute: Takt als verfügbare Zeit geteilt durch Nachfrage', es: 'Lean Enterprise Institute: takt como tiempo disponible entre demanda' } },
  ],
  'email-metrics': [
    { href: 'https://mailchimp.com/help/about-open-and-click-rates/', labels: { ru: 'Mailchimp: уникальные открытия и клики, пиксели, приватность и фильтрация ботов', en: 'Mailchimp: unique opens and clicks, pixels, privacy and bot filtering', uk: 'Mailchimp: унікальні відкриття й кліки, пікселі, приватність і фільтрування ботів', de: 'Mailchimp: einmalig gezählte Öffnungen und Klicks, Pixel, Datenschutz und Botfilter', es: 'Mailchimp: aperturas y clics únicos, píxeles, privacidad y filtros de bots' } },
  ],
  'employee-cost': [
    { href: 'https://www.bls.gov/news.release/archives/ecec_12172024.htm', labels: { ru: 'BLS ECEC, архив 2024, США: зарплата и дополнительные расходы работодателя; не текущие ставки', en: 'BLS ECEC, 2024 archive, United States: wages and employer benefit costs; not current rates', uk: 'BLS ECEC, архів 2024, США: зарплата й додаткові витрати роботодавця; не чинні ставки', de: 'BLS ECEC, Archiv 2024, USA: Lohn und Arbeitgeberleistungen; keine aktuellen Sätze', es: 'BLS ECEC, archivo 2024, Estados Unidos: salarios y prestaciones del empleador; no tipos vigentes' } },
  ],
  'fee-chain': [
    { href: 'https://sell.amazon.com/pricing', labels: { ru: 'Amazon: пример иной базы, минимальных и ступенчатых комиссий; тарифы не встроены в модель', en: 'Amazon: examples of different fee bases, minima and tiers; tariffs are not built into this model', uk: 'Amazon: приклади іншої бази, мінімальних і ступінчастих комісій; тарифи не вбудовані в модель', de: 'Amazon: Beispiele anderer Gebührenbasen, Mindestwerte und Stufen; keine Tarife im Modell', es: 'Amazon: ejemplos de bases, mínimos y tramos distintos; no son tarifas incorporadas al modelo' } },
  ],
  'inventory-turnover': [
    { href: 'https://openstax.org/books/principles-financial-accounting/pages/10-5-examine-the-efficiency-of-inventory-management-using-financial-ratios', labels: { ru: 'OpenStax, Rice University: оборачиваемость по себестоимости и годовая база 365 дней', en: 'OpenStax, Rice University: cost-based inventory turnover and a 365-day annual basis', uk: 'OpenStax, Rice University: оборотність за собівартістю та річна база 365 днів', de: 'OpenStax, Rice University: kostenbezogener Lagerumschlag und Jahresbasis von 365 Tagen', es: 'OpenStax, Rice University: rotación a coste y base anual de 365 días' } },
  ],
  profit: [
    { href: 'https://openstax.org/books/principles-marketing/pages/18-3-retailing-strategy-decisions', labels: { ru: 'OpenStax, Rice University: разные знаменатели наценки и валовой маржи', en: 'OpenStax, Rice University: different denominators for markup and gross margin', uk: 'OpenStax, Rice University: різні знаменники націнки та валової маржі', de: 'OpenStax, Rice University: unterschiedliche Nenner von Aufschlag und Bruttomarge', es: 'OpenStax, Rice University: denominadores distintos del recargo y margen bruto' } },
  ],
  'timesheet-week': [
    { href: 'https://www.dol.gov/agencies/whd/fact-sheets/23-flsa-overtime-pay', labels: { ru: 'US DOL Fact Sheet 23: ограниченная сфера правила 1,5× в США; не универсальный расчёт зарплаты', en: 'US DOL Fact Sheet 23: bounded US coverage of the 1.5× rule; not worldwide payroll calculation', uk: 'US DOL Fact Sheet 23: обмежена сфера правила 1,5× у США; не універсальний розрахунок зарплати', de: 'US DOL Fact Sheet 23: begrenzte US-Anwendung der 1,5×-Regel; keine weltweite Lohnabrechnung', es: 'US DOL Fact Sheet 23: alcance limitado de la regla 1,5× en Estados Unidos; no nómina universal' } },
  ],
};
export function getBusinessWave9MethodSources(id: string, locale: string): EditorialSource[] {
  return (Object.hasOwn(primary, id) ? primary[id] ?? [] : []).map(source => ({ href: source.href, label: source.labels[locale as keyof Labels] ?? source.labels.en }));
}
