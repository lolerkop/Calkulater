import type { EditorialSource } from './calculatorEditorial';

type Labels = Record<'ru' | 'en' | 'uk' | 'de' | 'es', string>;
type Source = { href: string; label: Labels };
// Primary bodies read on 2026-10-02. Jurisdictional examples support stated
// distinctions and limitations, never a universal rate, approval or entitlement.
// Independent mathematical examples need no attributed external approval.
const sources: Record<string, Source> = {
  "homeEquity": {
    "href": "https://www.consumerfinance.gov/ask-cfpb/what-is-a-home-equity-loan-en-106/",
    "label": {
      "ru": "CFPB, США: собственный капитал, единовременный кредит и риск залога; не проверка введённого лимита",
      "en": "CFPB, United States: equity, lump-sum loan and collateral risk; not validation of the entered limit",
      "uk": "CFPB, США: власний капітал, одноразовий кредит і ризик застави; не перевірка введеного ліміту",
      "de": "CFPB, USA: Eigenkapital, Einmaldarlehen und Sicherheitenrisiko; keine Prüfung der Eingabegrenze",
      "es": "CFPB, Estados Unidos: capital propio, préstamo único y riesgo de garantía; no valida el límite introducido"
    }
  },
  "dti": {
    "href": "https://www.consumerfinance.gov/ask-cfpb/what-is-a-debt-to-income-ratio-en-1791/",
    "label": {
      "ru": "CFPB, США: DTI по валовому месячному доходу; ограничения кредиторов различаются",
      "en": "CFPB, United States: DTI uses gross monthly income; lender limits differ",
      "uk": "CFPB, США: DTI використовує валовий місячний дохід; межі кредиторів різняться",
      "de": "CFPB, USA: DTI mit Bruttomonatseinkommen; Kreditgebergrenzen unterscheiden sich",
      "es": "CFPB, Estados Unidos: DTI sobre ingresos mensuales brutos; límites varían entre prestamistas"
    }
  },
  "marketCap": {
    "href": "https://www.investor.gov/introduction-investing/investing-basics/glossary/market-capitalization",
    "label": {
      "ru": "Investor.gov, SEC США: капитализация как цена акции × акции в обращении",
      "en": "Investor.gov, US SEC: capitalization as share price × shares outstanding",
      "uk": "Investor.gov, SEC США: капіталізація як ціна акції × акції в обігу",
      "de": "Investor.gov, SEC USA: Kapitalisierung als Kurs × ausstehende Aktien",
      "es": "Investor.gov, SEC Estados Unidos: capitalización como precio × acciones en circulación"
    }
  },
  "stop": {
    "href": "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-15",
    "label": {
      "ru": "Investor.gov, SEC США, 18.08.2026: стоп не гарантирует цену, стоп-лимит может не исполниться",
      "en": "Investor.gov, US SEC, 18 August 2026: stop price is not guaranteed; stop-limit may remain unfilled",
      "uk": "Investor.gov, SEC США, 18.08.2026: стоп не гарантує ціни, стоп-ліміт може не виконатись",
      "de": "Investor.gov, SEC USA, 18.08.2026: Stoppkurs nicht garantiert, Stop-Limit kann unausgeführt bleiben",
      "es": "Investor.gov, SEC Estados Unidos, 18/08/2026: stop no garantiza precio; stop-limit puede no ejecutarse"
    }
  },
  "flsa": {
    "href": "https://webapps.dol.gov/elaws/otcalculator.htm",
    "label": {
      "ru": "DOL, США: FLSA, охват, исключения и состав regular rate; не всемирная ставка сверхурочных",
      "en": "DOL, United States: FLSA coverage, exemptions and regular-rate basis; not a worldwide overtime rule",
      "uk": "DOL, США: охоплення FLSA, винятки та склад regular rate; не світове правило надурочних",
      "de": "DOL, USA: FLSA-Geltung, Ausnahmen und Regular-Rate-Basis; keine weltweite Überstundenregel",
      "es": "DOL, Estados Unidos: cobertura FLSA, exenciones y base regular rate; no regla mundial de horas extra"
    }
  },
  "holiday": {
    "href": "https://www.gov.uk/holiday-entitlement-rights/calculate-leave-entitlement",
    "label": {
      "ru": "GOV.UK: отдельные британские режимы начисления и округления; не общая норма отпуска",
      "en": "GOV.UK: specific UK accrual and rounding arrangements; not a universal leave rule",
      "uk": "GOV.UK: окремі британські режими нарахування й округлення; не загальна норма відпустки",
      "de": "GOV.UK: bestimmte britische Ansammlungs- und Rundungsregeln; keine allgemeine Urlaubsnorm",
      "es": "GOV.UK: regímenes británicos específicos de acumulación y redondeo; no norma universal"
    }
  },
  "bybit": {
    "href": "https://www.bybit.com/en/help-center/article/UTA-Trading-Rules-Liquidation-Process",
    "label": {
      "ru": "Bybit, UTA, 07.08.2026: текущая стоимость, mark price и условия ликвидации отличаются от фиксированной модели",
      "en": "Bybit, UTA, 7 August 2026: current notional, mark price and liquidation terms differ from this fixed model",
      "uk": "Bybit, UTA, 07.08.2026: поточна вартість, mark price й ліквідація відрізняються від фіксованої моделі",
      "de": "Bybit, UTA, 07.08.2026: aktuelles Notional, Mark Price und Liquidation unterscheiden sich vom festen Modell",
      "es": "Bybit, UTA, 07/08/2026: nocional actual, mark price y liquidación difieren del modelo fijo"
    }
  },
  "bnpl": {
    "href": "https://www.consumerfinance.gov/ask-cfpb/what-is-a-buy-now-pay-later-bnpl-loan-en-2119/",
    "label": {
      "ru": "CFPB, США: BNPL как разновидность кредита с разными графиками и возможными сборами",
      "en": "CFPB, United States: BNPL is installment credit with varying schedules and possible fees",
      "uk": "CFPB, США: BNPL як різновид кредиту з різними графіками й можливими зборами",
      "de": "CFPB, USA: BNPL als Ratenkredit mit verschiedenen Zahlungsplänen und möglichen Gebühren",
      "es": "CFPB, Estados Unidos: BNPL como crédito a plazos con distintos cuadros y posibles gastos"
    }
  }
};

const sourceIds: Partial<Record<string, readonly string[]>> = {
  "home-equity": [
    "homeEquity"
  ],
  "installment": [
    "bnpl"
  ],
  "leverage": [
    "bybit"
  ],
  "market-cap": [
    "marketCap"
  ],
  "max-loan": [
    "dti"
  ],
  "overtime": [
    "flsa"
  ],
  "position-size": [
    "stop"
  ],
  "risk-reward": [
    "stop"
  ],
  "salary-convert": [
    "flsa"
  ],
  "vacation-accrual": [
    "holiday"
  ],
  "workday-cost": [
    "flsa"
  ]
};

export function getFinanceWave14MethodSources(id: string, locale: string): EditorialSource[] {
  return (Object.hasOwn(sourceIds, id) ? sourceIds[id] ?? [] : []).map(key => ({
    href: sources[key].href,
    label: sources[key].label[locale as keyof Labels] ?? sources[key].label.en,
  }));
}
