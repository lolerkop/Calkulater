// Fixed Decimal100 oracles created independently without importing application code.
export const publishedFixtures = [
  {
    "id": "income-tax-calculator",
    "locale": "ru",
    "path": "/ru/finance/income-tax-calculator/",
    "inputs": {
      "amount": 200000,
      "period": "month",
      "direction": "gross",
      "incomeBeforePeriod": 0,
      "deductions": 0,
      "mode": "progressive",
      "rate": 13
    },
    "primary": "26000.00",
    "displayPrimary": "26000",
    "displayRows": {
      "На руки (после налога)": "174000"
    },
    "rows": {
      "На руки (после налога)": "174000.00"
    },
    "independent": "Python Decimal100 precision; equal-spend series / monthly cash-flow recurrence / stated algebra, no application imports"
  },
  {
    "id": "vat-calculator",
    "locale": "ru",
    "path": "/ru/finance/vat-calculator/",
    "inputs": {
      "amount": 12200,
      "operationDate": "",
      "rate": 22,
      "operation": "extract"
    },
    "primary": "2200",
    "displayPrimary": "2200",
    "displayRows": {
      "Сумма без НДС": "10000"
    },
    "rows": {
      "Сумма без НДС": "10000"
    },
    "independent": "Python Decimal100 precision; equal-spend series / monthly cash-flow recurrence / stated algebra, no application imports"
  },
  {
    "id": "margin-calculator",
    "locale": "ru",
    "path": "/ru/finance/margin-calculator/",
    "inputs": {
      "mode": "fromPrice",
      "cost": 100,
      "sellPrice": 125,
      "markupPct": 30,
      "marginPct": 20,
      "quantity": 1
    },
    "primary": "125",
    "displayPrimary": "125",
    "displayRows": {
      "Прибыль с единицы": "25",
      "Наценка": "25.00",
      "Маржа": "20.00"
    },
    "rows": {
      "Прибыль с единицы": "25",
      "Наценка": "25.00",
      "Маржа": "20.0"
    },
    "independent": "Python Decimal100 precision; equal-spend series / monthly cash-flow recurrence / stated algebra, no application imports"
  },
  {
    "id": "margin-calculator",
    "locale": "en",
    "path": "/en/finance/margin-calculator/",
    "inputs": {
      "mode": "fromPrice",
      "cost": 100,
      "sellPrice": 125,
      "markupPct": 30,
      "marginPct": 20,
      "quantity": 1
    },
    "primary": "125",
    "displayPrimary": "125",
    "displayRows": {
      "Прибыль с единицы": "25",
      "Наценка": "25.00",
      "Маржа": "20.00"
    },
    "rows": {
      "Прибыль с единицы": "25",
      "Наценка": "25.00",
      "Маржа": "20.0"
    },
    "independent": "Python Decimal100 precision; equal-spend series / monthly cash-flow recurrence / stated algebra, no application imports"
  },
  {
    "id": "margin-calculator",
    "locale": "uk",
    "path": "/uk/finansy/kalkulyator-marzhi/",
    "inputs": {
      "mode": "fromPrice",
      "cost": 1000,
      "sellPrice": 1500,
      "markupPct": 30,
      "marginPct": 20,
      "quantity": 1
    },
    "primary": "1500",
    "displayPrimary": "1500",
    "displayRows": {
      "Прибыль с единицы": "500",
      "Наценка": "50.00",
      "Маржа": "33.33"
    },
    "rows": {
      "Прибыль с единицы": "500",
      "Наценка": "50.0",
      "Маржа": "33.33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333"
    },
    "independent": "Python Decimal100 precision; equal-spend series / monthly cash-flow recurrence / stated algebra, no application imports"
  },
  {
    "id": "margin-calculator",
    "locale": "de",
    "path": "/de/finanzen/marge-aufschlag-rechner/",
    "inputs": {
      "mode": "fromPrice",
      "cost": 100,
      "sellPrice": 125,
      "markupPct": 30,
      "marginPct": 20,
      "quantity": 1
    },
    "primary": "125",
    "displayPrimary": "125",
    "displayRows": {
      "Прибыль с единицы": "25",
      "Наценка": "25.00",
      "Маржа": "20.00"
    },
    "rows": {
      "Прибыль с единицы": "25",
      "Наценка": "25.00",
      "Маржа": "20.0"
    },
    "independent": "Python Decimal100 precision; equal-spend series / monthly cash-flow recurrence / stated algebra, no application imports"
  },
  {
    "id": "margin-calculator",
    "locale": "es",
    "path": "/es/finanzas/calculadora-de-margen/",
    "inputs": {
      "mode": "fromPrice",
      "cost": 100,
      "sellPrice": 125,
      "markupPct": 30,
      "marginPct": 20,
      "quantity": 1
    },
    "primary": "125",
    "displayPrimary": "125",
    "displayRows": {
      "Прибыль с единицы": "25",
      "Наценка": "25.00",
      "Маржа": "20.00"
    },
    "rows": {
      "Прибыль с единицы": "25",
      "Наценка": "25.00",
      "Маржа": "20.0"
    },
    "independent": "Python Decimal100 precision; equal-spend series / monthly cash-flow recurrence / stated algebra, no application imports"
  },
  {
    "id": "break-even-calculator",
    "locale": "ru",
    "path": "/ru/finance/break-even-calculator/",
    "inputs": {
      "fixedCosts": 300000,
      "unitPrice": 1500,
      "variableCost": 900,
      "plannedUnits": 0
    },
    "primary": "500",
    "displayPrimary": "500",
    "displayRows": {
      "Маржинальная прибыль с единицы": "600",
      "Выручка при целом числе единиц": "750000"
    },
    "rows": {
      "Маржинальная прибыль с единицы": "600",
      "Выручка при целом числе единиц": "750000"
    },
    "independent": "Python Decimal100 precision; equal-spend series / monthly cash-flow recurrence / stated algebra, no application imports"
  },
  {
    "id": "break-even-calculator",
    "locale": "en",
    "path": "/en/finance/break-even-calculator/",
    "inputs": {
      "fixedCosts": 300000,
      "unitPrice": 1500,
      "variableCost": 900,
      "plannedUnits": 0
    },
    "primary": "500",
    "displayPrimary": "500",
    "displayRows": {
      "Маржинальная прибыль с единицы": "600",
      "Выручка при целом числе единиц": "750000"
    },
    "rows": {
      "Маржинальная прибыль с единицы": "600",
      "Выручка при целом числе единиц": "750000"
    },
    "independent": "Python Decimal100 precision; equal-spend series / monthly cash-flow recurrence / stated algebra, no application imports"
  },
  {
    "id": "break-even-calculator",
    "locale": "uk",
    "path": "/uk/finansy/kalkulyator-bezzbytkovosti/",
    "inputs": {
      "fixedCosts": 300000,
      "unitPrice": 1500,
      "variableCost": 900,
      "plannedUnits": 0
    },
    "primary": "500",
    "displayPrimary": "500",
    "displayRows": {
      "Маржинальная прибыль с единицы": "600",
      "Выручка при целом числе единиц": "750000"
    },
    "rows": {
      "Маржинальная прибыль с единицы": "600",
      "Выручка при целом числе единиц": "750000"
    },
    "independent": "Python Decimal100 precision; equal-spend series / monthly cash-flow recurrence / stated algebra, no application imports"
  },
  {
    "id": "break-even-calculator",
    "locale": "de",
    "path": "/de/finanzen/gewinnschwelle-rechner/",
    "inputs": {
      "fixedCosts": 30000,
      "unitPrice": 150,
      "variableCost": 90,
      "plannedUnits": 0
    },
    "primary": "500",
    "displayPrimary": "500",
    "displayRows": {
      "Маржинальная прибыль с единицы": "60",
      "Выручка при целом числе единиц": "75000"
    },
    "rows": {
      "Маржинальная прибыль с единицы": "60",
      "Выручка при целом числе единиц": "75000"
    },
    "independent": "Python Decimal100 precision; equal-spend series / monthly cash-flow recurrence / stated algebra, no application imports"
  },
  {
    "id": "break-even-calculator",
    "locale": "es",
    "path": "/es/finanzas/punto-de-equilibrio/",
    "inputs": {
      "fixedCosts": 30000,
      "unitPrice": 150,
      "variableCost": 90,
      "plannedUnits": 0
    },
    "primary": "500",
    "displayPrimary": "500",
    "displayRows": {
      "Маржинальная прибыль с единицы": "60",
      "Выручка при целом числе единиц": "75000"
    },
    "rows": {
      "Маржинальная прибыль с единицы": "60",
      "Выручка при целом числе единиц": "75000"
    },
    "independent": "Python Decimal100 precision; equal-spend series / monthly cash-flow recurrence / stated algebra, no application imports"
  },
  {
    "id": "bonus",
    "locale": "ru",
    "path": "/ru/finance/bonus/",
    "inputs": {
      "salary": 145000,
      "bonusPct": 35,
      "taxPct": 13
    },
    "primary": "44152.5",
    "displayPrimary": "44152.50",
    "displayRows": {
      "Премия до налога": "50750.00",
      "Налог": "6597.50"
    },
    "rows": {
      "Премия до налога": "50750",
      "Налог": "6597.5"
    },
    "independent": "Python Decimal100 precision; equal-spend series / monthly cash-flow recurrence / stated algebra, no application imports"
  },
  {
    "id": "bonus",
    "locale": "en",
    "path": "/en/finance/bonus-calculator/",
    "inputs": {
      "salary": 145000,
      "bonusPct": 35,
      "taxPct": 13
    },
    "primary": "44152.5",
    "displayPrimary": "44152.50",
    "displayRows": {
      "Премия до налога": "50750.00",
      "Налог": "6597.50"
    },
    "rows": {
      "Премия до налога": "50750",
      "Налог": "6597.5"
    },
    "independent": "Python Decimal100 precision; equal-spend series / monthly cash-flow recurrence / stated algebra, no application imports"
  },
  {
    "id": "bonus",
    "locale": "uk",
    "path": "/uk/finansy/premiya/",
    "inputs": {
      "salary": 145000,
      "bonusPct": 35,
      "taxPct": 13
    },
    "primary": "44152.5",
    "displayPrimary": "44152.50",
    "displayRows": {
      "Премия до налога": "50750.00",
      "Налог": "6597.50"
    },
    "rows": {
      "Премия до налога": "50750",
      "Налог": "6597.5"
    },
    "independent": "Python Decimal100 precision; equal-spend series / monthly cash-flow recurrence / stated algebra, no application imports"
  },
  {
    "id": "bonus",
    "locale": "de",
    "path": "/de/finanzen/bonus-rechner/",
    "inputs": {
      "salary": 4500,
      "bonusPct": 35,
      "taxPct": 30
    },
    "primary": "1102.5",
    "displayPrimary": "1102.50",
    "displayRows": {
      "Премия до налога": "1575.00",
      "Налог": "472.50"
    },
    "rows": {
      "Премия до налога": "1575",
      "Налог": "472.5"
    },
    "independent": "Python Decimal100 precision; equal-spend series / monthly cash-flow recurrence / stated algebra, no application imports"
  },
  {
    "id": "bonus",
    "locale": "es",
    "path": "/es/finanzas/calculadora-de-bonus/",
    "inputs": {
      "salary": 1450,
      "bonusPct": 35,
      "taxPct": 13
    },
    "primary": "441.525",
    "displayPrimary": "441.53",
    "displayRows": {
      "Премия до налога": "507.50",
      "Налог": "65.98"
    },
    "rows": {
      "Премия до налога": "507.5",
      "Налог": "65.975"
    },
    "independent": "Python Decimal100 precision; equal-spend series / monthly cash-flow recurrence / stated algebra, no application imports"
  },
  {
    "id": "budget-split",
    "locale": "ru",
    "path": "/ru/finance/delenie-byudzheta/",
    "inputs": {
      "total": 60000,
      "incomes": "anna 80000\nboris 120000",
      "mode": "income"
    },
    "primary": "36000",
    "displayPrimary": "36000.00",
    "displayRows": {
      "Наименьший взнос": "24000.00",
      "Проверка суммы": "60000.00"
    },
    "rows": {
      "Наименьший взнос": "24000",
      "Проверка суммы": "60000"
    },
    "independent": "Python Decimal100 precision; equal-spend series / monthly cash-flow recurrence / stated algebra, no application imports"
  },
  {
    "id": "budget-split",
    "locale": "en",
    "path": "/en/finance/budget-split/",
    "inputs": {
      "total": 60000,
      "incomes": "anna 80000\nboris 120000",
      "mode": "income"
    },
    "primary": "36000",
    "displayPrimary": "36000.00",
    "displayRows": {
      "Наименьший взнос": "24000.00",
      "Проверка суммы": "60000.00"
    },
    "rows": {
      "Наименьший взнос": "24000",
      "Проверка суммы": "60000"
    },
    "independent": "Python Decimal100 precision; equal-spend series / monthly cash-flow recurrence / stated algebra, no application imports"
  },
  {
    "id": "budget-split",
    "locale": "uk",
    "path": "/uk/finansy/podil-byudzhetu/",
    "inputs": {
      "total": 60000,
      "incomes": "anna 80000\nboris 120000",
      "mode": "income"
    },
    "primary": "36000",
    "displayPrimary": "36000.00",
    "displayRows": {
      "Наименьший взнос": "24000.00",
      "Проверка суммы": "60000.00"
    },
    "rows": {
      "Наименьший взнос": "24000",
      "Проверка суммы": "60000"
    },
    "independent": "Python Decimal100 precision; equal-spend series / monthly cash-flow recurrence / stated algebra, no application imports"
  },
  {
    "id": "budget-split",
    "locale": "de",
    "path": "/de/finanzen/gemeinsame-kosten-teilen/",
    "inputs": {
      "total": 1200,
      "incomes": "anna 2400\nboris 3600",
      "mode": "income"
    },
    "primary": "720",
    "displayPrimary": "720.00",
    "displayRows": {
      "Наименьший взнос": "480.00",
      "Проверка суммы": "1200.00"
    },
    "rows": {
      "Наименьший взнос": "480",
      "Проверка суммы": "1200"
    },
    "independent": "Python Decimal100 precision; equal-spend series / monthly cash-flow recurrence / stated algebra, no application imports"
  },
  {
    "id": "budget-split",
    "locale": "es",
    "path": "/es/finanzas/reparto-de-gastos-comunes/",
    "inputs": {
      "total": 600,
      "incomes": "anna 800\nboris 1200",
      "mode": "income"
    },
    "primary": "360",
    "displayPrimary": "360.00",
    "displayRows": {
      "Наименьший взнос": "240.00",
      "Проверка суммы": "600.00"
    },
    "rows": {
      "Наименьший взнос": "240",
      "Проверка суммы": "600"
    },
    "independent": "Python Decimal100 precision; equal-spend series / monthly cash-flow recurrence / stated algebra, no application imports"
  },
  {
    "id": "commission",
    "locale": "ru",
    "path": "/ru/finance/commission/",
    "inputs": {
      "mode": "fromAmount",
      "a": 100000,
      "b": 2.5
    },
    "primary": "2500.0",
    "displayPrimary": "2500",
    "displayRows": {
      "К получению": "97500"
    },
    "rows": {
      "К получению": "97500.0"
    },
    "independent": "Python Decimal100 precision; equal-spend series / monthly cash-flow recurrence / stated algebra, no application imports"
  },
  {
    "id": "commission",
    "locale": "en",
    "path": "/en/finance/commission-calculator/",
    "inputs": {
      "mode": "fromAmount",
      "a": 100000,
      "b": 2.5
    },
    "primary": "2500.0",
    "displayPrimary": "2500",
    "displayRows": {
      "К получению": "97500"
    },
    "rows": {
      "К получению": "97500.0"
    },
    "independent": "Python Decimal100 precision; equal-spend series / monthly cash-flow recurrence / stated algebra, no application imports"
  },
  {
    "id": "commission",
    "locale": "uk",
    "path": "/uk/finansy/kalkulyator-komisiyi/",
    "inputs": {
      "mode": "fromAmount",
      "a": 100000,
      "b": 2.5
    },
    "primary": "2500.0",
    "displayPrimary": "2500",
    "displayRows": {
      "К получению": "97500"
    },
    "rows": {
      "К получению": "97500.0"
    },
    "independent": "Python Decimal100 precision; equal-spend series / monthly cash-flow recurrence / stated algebra, no application imports"
  },
  {
    "id": "commission",
    "locale": "de",
    "path": "/de/finanzen/provision-rechner/",
    "inputs": {
      "mode": "fromAmount",
      "a": 100000,
      "b": 2.5
    },
    "primary": "2500.0",
    "displayPrimary": "2500",
    "displayRows": {
      "К получению": "97500"
    },
    "rows": {
      "К получению": "97500.0"
    },
    "independent": "Python Decimal100 precision; equal-spend series / monthly cash-flow recurrence / stated algebra, no application imports"
  },
  {
    "id": "commission",
    "locale": "es",
    "path": "/es/finanzas/calculadora-de-comision/",
    "inputs": {
      "mode": "fromAmount",
      "a": 100000,
      "b": 2.5
    },
    "primary": "2500.0",
    "displayPrimary": "2500",
    "displayRows": {
      "К получению": "97500"
    },
    "rows": {
      "К получению": "97500.0"
    },
    "independent": "Python Decimal100 precision; equal-spend series / monthly cash-flow recurrence / stated algebra, no application imports"
  },
  {
    "id": "credit-card-payoff",
    "locale": "ru",
    "path": "/ru/finance/pogashenie-kreditnoy-karty/",
    "inputs": {
      "balance": 100000,
      "apr": 24,
      "payment": 5000
    },
    "primary": "26",
    "displayPrimary": "26",
    "displayRows": {
      "Переплата процентами": "28987.28",
      "Выплачено всего": "128987.28"
    },
    "rows": {
      "Переплата процентами": "28987.2828468963234993668565031863986287738890905190400000",
      "Выплачено всего": "128987.2828468963234993668565031863986287738890905190400000"
    },
    "independent": "Python Decimal100 precision; equal-spend series / monthly cash-flow recurrence / stated algebra, no application imports"
  },
  {
    "id": "credit-card-payoff",
    "locale": "en",
    "path": "/en/finance/credit-card-payoff/",
    "inputs": {
      "balance": 100000,
      "apr": 24,
      "payment": 5000
    },
    "primary": "26",
    "displayPrimary": "26",
    "displayRows": {
      "Переплата процентами": "28987.28",
      "Выплачено всего": "128987.28"
    },
    "rows": {
      "Переплата процентами": "28987.2828468963234993668565031863986287738890905190400000",
      "Выплачено всего": "128987.2828468963234993668565031863986287738890905190400000"
    },
    "independent": "Python Decimal100 precision; equal-spend series / monthly cash-flow recurrence / stated algebra, no application imports"
  },
  {
    "id": "credit-card-payoff",
    "locale": "uk",
    "path": "/uk/finansy/pohashennya-kredytnoyi-kartky/",
    "inputs": {
      "balance": 100000,
      "apr": 24,
      "payment": 5000
    },
    "primary": "26",
    "displayPrimary": "26",
    "displayRows": {
      "Переплата процентами": "28987.28",
      "Выплачено всего": "128987.28"
    },
    "rows": {
      "Переплата процентами": "28987.2828468963234993668565031863986287738890905190400000",
      "Выплачено всего": "128987.2828468963234993668565031863986287738890905190400000"
    },
    "independent": "Python Decimal100 precision; equal-spend series / monthly cash-flow recurrence / stated algebra, no application imports"
  },
  {
    "id": "credit-card-payoff",
    "locale": "de",
    "path": "/de/finanzen/kreditkarte-tilgung/",
    "inputs": {
      "balance": 3000,
      "apr": 24,
      "payment": 150
    },
    "primary": "26",
    "displayPrimary": "26",
    "displayRows": {
      "Переплата процентами": "869.62",
      "Выплачено всего": "3869.62"
    },
    "rows": {
      "Переплата процентами": "869.6184854068897049810056950955919588632166727155712000",
      "Выплачено всего": "3869.6184854068897049810056950955919588632166727155712000"
    },
    "independent": "Python Decimal100 precision; equal-spend series / monthly cash-flow recurrence / stated algebra, no application imports"
  },
  {
    "id": "credit-card-payoff",
    "locale": "es",
    "path": "/es/finanzas/amortizacion-de-tarjeta-de-credito/",
    "inputs": {
      "balance": 10000,
      "apr": 24,
      "payment": 500
    },
    "primary": "26",
    "displayPrimary": "26",
    "displayRows": {
      "Переплата процентами": "2898.73",
      "Выплачено всего": "12898.73"
    },
    "rows": {
      "Переплата процентами": "2898.7282846896323499366856503186398628773889090519040000",
      "Выплачено всего": "12898.7282846896323499366856503186398628773889090519040000"
    },
    "independent": "Python Decimal100 precision; equal-spend series / monthly cash-flow recurrence / stated algebra, no application imports"
  },
  {
    "id": "crypto-pnl",
    "locale": "ru",
    "path": "/ru/finance/crypto-pnl/",
    "inputs": {
      "direction": "long",
      "entry": 30000,
      "exit": 34500,
      "qty": 0.5,
      "feePct": 0.1,
      "leverage": 1
    },
    "primary": "2217.75",
    "displayPrimary": "2217.75",
    "displayRows": {
      "Комиссии": "32.25",
      "Доходность позиции": "14.79"
    },
    "rows": {
      "Комиссии": "32.25",
      "Доходность позиции": "14.78500"
    },
    "independent": "Python Decimal100 precision; equal-spend series / monthly cash-flow recurrence / stated algebra, no application imports"
  },
  {
    "id": "crypto-pnl",
    "locale": "en",
    "path": "/en/finance/crypto-profit-calculator/",
    "inputs": {
      "direction": "long",
      "entry": 30000,
      "exit": 34500,
      "qty": 0.5,
      "feePct": 0.1,
      "leverage": 1
    },
    "primary": "2217.75",
    "displayPrimary": "2217.75",
    "displayRows": {
      "Комиссии": "32.25",
      "Доходность позиции": "14.79"
    },
    "rows": {
      "Комиссии": "32.25",
      "Доходность позиции": "14.78500"
    },
    "independent": "Python Decimal100 precision; equal-spend series / monthly cash-flow recurrence / stated algebra, no application imports"
  },
  {
    "id": "crypto-pnl",
    "locale": "uk",
    "path": "/uk/finansy/prybutok-kryptovalyuty/",
    "inputs": {
      "direction": "long",
      "entry": 30000,
      "exit": 34500,
      "qty": 0.5,
      "feePct": 0.1,
      "leverage": 1
    },
    "primary": "2217.75",
    "displayPrimary": "2217.75",
    "displayRows": {
      "Комиссии": "32.25",
      "Доходность позиции": "14.79"
    },
    "rows": {
      "Комиссии": "32.25",
      "Доходность позиции": "14.78500"
    },
    "independent": "Python Decimal100 precision; equal-spend series / monthly cash-flow recurrence / stated algebra, no application imports"
  },
  {
    "id": "crypto-pnl",
    "locale": "de",
    "path": "/de/finanzen/krypto-gewinn-rechner/",
    "inputs": {
      "direction": "long",
      "entry": 30000,
      "exit": 34500,
      "qty": 0.5,
      "feePct": 0.1,
      "leverage": 1
    },
    "primary": "2217.75",
    "displayPrimary": "2217.75",
    "displayRows": {
      "Комиссии": "32.25",
      "Доходность позиции": "14.79"
    },
    "rows": {
      "Комиссии": "32.25",
      "Доходность позиции": "14.78500"
    },
    "independent": "Python Decimal100 precision; equal-spend series / monthly cash-flow recurrence / stated algebra, no application imports"
  },
  {
    "id": "crypto-pnl",
    "locale": "es",
    "path": "/es/finanzas/beneficio-en-cripto/",
    "inputs": {
      "direction": "long",
      "entry": 30000,
      "exit": 34500,
      "qty": 0.5,
      "feePct": 0.1,
      "leverage": 1
    },
    "primary": "2217.75",
    "displayPrimary": "2217.75",
    "displayRows": {
      "Комиссии": "32.25",
      "Доходность позиции": "14.79"
    },
    "rows": {
      "Комиссии": "32.25",
      "Доходность позиции": "14.78500"
    },
    "independent": "Python Decimal100 precision; equal-spend series / monthly cash-flow recurrence / stated algebra, no application imports"
  },
  {
    "id": "dca",
    "locale": "ru",
    "path": "/ru/finance/dca/",
    "inputs": {
      "monthly": 10000,
      "months": 12,
      "startPrice": 5000,
      "priceGrowthPct": 2
    },
    "primary": "134120.8972812726591508480000000000000000000000000000000000000000000000000000000000000000000000000000",
    "displayPrimary": "134120.90",
    "displayRows": {
      "Средняя цена": "5562.33",
      "Куплено единиц": "21.574",
      "Цена последней покупки": "6216.87"
    },
    "rows": {
      "Средняя цена": "5562.329213114793251506796832513632576904221142765778578780329019103441522986967011596486857998230555",
      "Куплено единиц": "21.57369609067105127470857565154777218089259946478223570855674996344746417214919559259728817219331945",
      "Цена последней покупки": "6216.8715419732613642240000"
    },
    "independent": "Python Decimal100 precision; equal-spend series / monthly cash-flow recurrence / stated algebra, no application imports"
  },
  {
    "id": "dca",
    "locale": "en",
    "path": "/en/finance/dollar-cost-averaging-calculator/",
    "inputs": {
      "monthly": 10000,
      "months": 12,
      "startPrice": 5000,
      "priceGrowthPct": 2
    },
    "primary": "134120.8972812726591508480000000000000000000000000000000000000000000000000000000000000000000000000000",
    "displayPrimary": "134120.90",
    "displayRows": {
      "Средняя цена": "5562.33",
      "Куплено единиц": "21.574",
      "Цена последней покупки": "6216.87"
    },
    "rows": {
      "Средняя цена": "5562.329213114793251506796832513632576904221142765778578780329019103441522986967011596486857998230555",
      "Куплено единиц": "21.57369609067105127470857565154777218089259946478223570855674996344746417214919559259728817219331945",
      "Цена последней покупки": "6216.8715419732613642240000"
    },
    "independent": "Python Decimal100 precision; equal-spend series / monthly cash-flow recurrence / stated algebra, no application imports"
  },
  {
    "id": "dca",
    "locale": "uk",
    "path": "/uk/finansy/userednennya-tsiny-dca/",
    "inputs": {
      "monthly": 10000,
      "months": 12,
      "startPrice": 5000,
      "priceGrowthPct": 2
    },
    "primary": "134120.8972812726591508480000000000000000000000000000000000000000000000000000000000000000000000000000",
    "displayPrimary": "134120.90",
    "displayRows": {
      "Средняя цена": "5562.33",
      "Куплено единиц": "21.574",
      "Цена последней покупки": "6216.87"
    },
    "rows": {
      "Средняя цена": "5562.329213114793251506796832513632576904221142765778578780329019103441522986967011596486857998230555",
      "Куплено единиц": "21.57369609067105127470857565154777218089259946478223570855674996344746417214919559259728817219331945",
      "Цена последней покупки": "6216.8715419732613642240000"
    },
    "independent": "Python Decimal100 precision; equal-spend series / monthly cash-flow recurrence / stated algebra, no application imports"
  },
  {
    "id": "dca",
    "locale": "de",
    "path": "/de/finanzen/sparplan-durchschnittskosten/",
    "inputs": {
      "monthly": 200,
      "months": 12,
      "startPrice": 100,
      "priceGrowthPct": 2
    },
    "primary": "2682.417945625453183016960000000000000000000000000000000000000000000000000000000000000000000000000001",
    "displayPrimary": "2682.42",
    "displayRows": {
      "Средняя цена": "111.25",
      "Куплено единиц": "21.574",
      "Цена последней покупки": "124.34"
    },
    "rows": {
      "Средняя цена": "111.2465842622958650301359366502726515380844228553155715756065803820688304597393402319297371599646111",
      "Куплено единиц": "21.57369609067105127470857565154777218089259946478223570855674996344746417214919559259728817219331945",
      "Цена последней покупки": "124.3374308394652272844800"
    },
    "independent": "Python Decimal100 precision; equal-spend series / monthly cash-flow recurrence / stated algebra, no application imports"
  },
  {
    "id": "dca",
    "locale": "es",
    "path": "/es/finanzas/aportaciones-periodicas-dca/",
    "inputs": {
      "monthly": 100,
      "months": 12,
      "startPrice": 50,
      "priceGrowthPct": 2
    },
    "primary": "1341.208972812726591508480000000000000000000000000000000000000000000000000000000000000000000000000000",
    "displayPrimary": "1341.21",
    "displayRows": {
      "Средняя цена": "55.62",
      "Куплено единиц": "21.574",
      "Цена последней покупки": "62.17"
    },
    "rows": {
      "Средняя цена": "55.62329213114793251506796832513632576904221142765778578780329019103441522986967011596486857998230555",
      "Куплено единиц": "21.57369609067105127470857565154777218089259946478223570855674996344746417214919559259728817219331945",
      "Цена последней покупки": "62.1687154197326136422400"
    },
    "independent": "Python Decimal100 precision; equal-spend series / monthly cash-flow recurrence / stated algebra, no application imports"
  },
  {
    "id": "debt-snowball-avalanche",
    "locale": "ru",
    "path": "/ru/finance/pogashenie-neskolkih-dolgov/",
    "inputs": {
      "debts": "small 40000 12 2000\nbig 200000 26 6000",
      "extra": 4000,
      "strategy": "avalanche"
    },
    "primary": "26",
    "displayPrimary": "26",
    "displayRows": {
      "Переплата процентами": "69619.92",
      "Выплачено всего": "309619.92"
    },
    "rows": {
      "Переплата процентами": "69619.92477343579996852385531557782037146623328192856795881182359680634664351374671235926160443815640",
      "Выплачено всего": "309619.9247734357999685238553155778203714662332819285679588118235968063466435137467123592616044381564"
    },
    "independent": "Python Decimal100 precision; equal-spend series / monthly cash-flow recurrence / stated algebra, no application imports"
  },
  {
    "id": "debt-snowball-avalanche",
    "locale": "en",
    "path": "/en/finance/debt-snowball-avalanche/",
    "inputs": {
      "debts": "small 40000 12 2000\nbig 200000 26 6000",
      "extra": 4000,
      "strategy": "avalanche"
    },
    "primary": "26",
    "displayPrimary": "26",
    "displayRows": {
      "Переплата процентами": "69619.92",
      "Выплачено всего": "309619.92"
    },
    "rows": {
      "Переплата процентами": "69619.92477343579996852385531557782037146623328192856795881182359680634664351374671235926160443815640",
      "Выплачено всего": "309619.9247734357999685238553155778203714662332819285679588118235968063466435137467123592616044381564"
    },
    "independent": "Python Decimal100 precision; equal-spend series / monthly cash-flow recurrence / stated algebra, no application imports"
  },
  {
    "id": "debt-snowball-avalanche",
    "locale": "uk",
    "path": "/uk/finansy/pogashennya-kilkoh-borgiv/",
    "inputs": {
      "debts": "small 40000 12 2000\nbig 200000 26 6000",
      "extra": 4000,
      "strategy": "avalanche"
    },
    "primary": "26",
    "displayPrimary": "26",
    "displayRows": {
      "Переплата процентами": "69619.92",
      "Выплачено всего": "309619.92"
    },
    "rows": {
      "Переплата процентами": "69619.92477343579996852385531557782037146623328192856795881182359680634664351374671235926160443815640",
      "Выплачено всего": "309619.9247734357999685238553155778203714662332819285679588118235968063466435137467123592616044381564"
    },
    "independent": "Python Decimal100 precision; equal-spend series / monthly cash-flow recurrence / stated algebra, no application imports"
  },
  {
    "id": "debt-snowball-avalanche",
    "locale": "de",
    "path": "/de/finanzen/schulden-tilgungsstrategie/",
    "inputs": {
      "debts": "small 1200 12 60\nbig 6000 26 180",
      "extra": 120,
      "strategy": "avalanche"
    },
    "primary": "26",
    "displayPrimary": "26",
    "displayRows": {
      "Переплата процентами": "2088.60",
      "Выплачено всего": "9288.60"
    },
    "rows": {
      "Переплата процентами": "2088.597743203073999055715659467334611143986998457857038764354707904190399305412401370777848133144690",
      "Выплачено всего": "9288.597743203073999055715659467334611143986998457857038764354707904190399305412401370777848133144690"
    },
    "independent": "Python Decimal100 precision; equal-spend series / monthly cash-flow recurrence / stated algebra, no application imports"
  },
  {
    "id": "debt-snowball-avalanche",
    "locale": "es",
    "path": "/es/finanzas/amortizacion-de-deudas/",
    "inputs": {
      "debts": "small 4000 12 200\nbig 20000 26 600",
      "extra": 400,
      "strategy": "avalanche"
    },
    "primary": "26",
    "displayPrimary": "26",
    "displayRows": {
      "Переплата процентами": "6961.99",
      "Выплачено всего": "30961.99"
    },
    "rows": {
      "Переплата процентами": "6961.992477343579996852385531557782037146623328192856795881182359680634664351374671235926160443815640",
      "Выплачено всего": "30961.99247734357999685238553155778203714662332819285679588118235968063466435137467123592616044381564"
    },
    "independent": "Python Decimal100 precision; equal-spend series / monthly cash-flow recurrence / stated algebra, no application imports"
  },
  {
    "id": "depreciation-methods",
    "locale": "ru",
    "path": "/ru/finance/amortizaciya-aktiva/",
    "inputs": {
      "cost": 1200000,
      "salvage": 200000,
      "life": 5,
      "method": "straight",
      "year": 1
    },
    "primary": "200000",
    "displayPrimary": "200000.00",
    "displayRows": {
      "Амортизируемая база": "1000000.00"
    },
    "rows": {
      "Амортизируемая база": "1000000"
    },
    "independent": "Python Decimal100 precision; equal-spend series / monthly cash-flow recurrence / stated algebra, no application imports"
  },
  {
    "id": "depreciation-methods",
    "locale": "en",
    "path": "/en/finance/asset-depreciation/",
    "inputs": {
      "cost": 1200000,
      "salvage": 200000,
      "life": 5,
      "method": "straight",
      "year": 1
    },
    "primary": "200000",
    "displayPrimary": "200000.00",
    "displayRows": {
      "Амортизируемая база": "1000000.00"
    },
    "rows": {
      "Амортизируемая база": "1000000"
    },
    "independent": "Python Decimal100 precision; equal-spend series / monthly cash-flow recurrence / stated algebra, no application imports"
  },
  {
    "id": "depreciation-methods",
    "locale": "uk",
    "path": "/uk/finansy/amortyzaciya-aktyvu/",
    "inputs": {
      "cost": 1200000,
      "salvage": 200000,
      "life": 5,
      "method": "straight",
      "year": 1
    },
    "primary": "200000",
    "displayPrimary": "200000.00",
    "displayRows": {
      "Амортизируемая база": "1000000.00"
    },
    "rows": {
      "Амортизируемая база": "1000000"
    },
    "independent": "Python Decimal100 precision; equal-spend series / monthly cash-flow recurrence / stated algebra, no application imports"
  },
  {
    "id": "depreciation-methods",
    "locale": "de",
    "path": "/de/finanzen/abschreibung-rechner/",
    "inputs": {
      "cost": 120000,
      "salvage": 20000,
      "life": 5,
      "method": "straight",
      "year": 1
    },
    "primary": "20000",
    "displayPrimary": "20000.00",
    "displayRows": {
      "Амортизируемая база": "100000.00"
    },
    "rows": {
      "Амортизируемая база": "100000"
    },
    "independent": "Python Decimal100 precision; equal-spend series / monthly cash-flow recurrence / stated algebra, no application imports"
  },
  {
    "id": "depreciation-methods",
    "locale": "es",
    "path": "/es/finanzas/amortizacion-de-activos/",
    "inputs": {
      "cost": 120000,
      "salvage": 20000,
      "life": 5,
      "method": "straight",
      "year": 1
    },
    "primary": "20000",
    "displayPrimary": "20000.00",
    "displayRows": {
      "Амортизируемая база": "100000.00"
    },
    "rows": {
      "Амортизируемая база": "100000"
    },
    "independent": "Python Decimal100 precision; equal-spend series / monthly cash-flow recurrence / stated algebra, no application imports"
  },
  {
    "id": "freelance-rate",
    "locale": "ru",
    "path": "/ru/finance/freelance-rate/",
    "inputs": {
      "targetIncome": 150000,
      "workDays": 21,
      "hoursPerDay": 6,
      "billablePct": 70,
      "expenses": 15000,
      "taxPct": 6
    },
    "primary": "1990.157765233753075698364452163844261108698798668403531625416123896367057461282385294543349254595455",
    "displayPrimary": "1990.16",
    "displayRows": {
      "Оплачиваемых часов": "88.2",
      "Нужно выставить счетов": "175531.91",
      "Налог": "10531.91"
    },
    "rows": {
      "Оплачиваемых часов": "88.2",
      "Нужно выставить счетов": "175531.9148936170212765957446808510638297872340425531914893617021276595744680851063829787234042553191",
      "Налог": "10531.91489361702127659574468085106382978723404255319148936170212765957446808510638297872340425531915"
    },
    "independent": "Python Decimal100 precision; equal-spend series / monthly cash-flow recurrence / stated algebra, no application imports"
  },
  {
    "id": "freelance-rate",
    "locale": "en",
    "path": "/en/finance/freelance-rate-calculator/",
    "inputs": {
      "targetIncome": 150000,
      "workDays": 21,
      "hoursPerDay": 6,
      "billablePct": 70,
      "expenses": 15000,
      "taxPct": 6
    },
    "primary": "1990.157765233753075698364452163844261108698798668403531625416123896367057461282385294543349254595455",
    "displayPrimary": "1990.16",
    "displayRows": {
      "Оплачиваемых часов": "88.2",
      "Нужно выставить счетов": "175531.91",
      "Налог": "10531.91"
    },
    "rows": {
      "Оплачиваемых часов": "88.2",
      "Нужно выставить счетов": "175531.9148936170212765957446808510638297872340425531914893617021276595744680851063829787234042553191",
      "Налог": "10531.91489361702127659574468085106382978723404255319148936170212765957446808510638297872340425531915"
    },
    "independent": "Python Decimal100 precision; equal-spend series / monthly cash-flow recurrence / stated algebra, no application imports"
  },
  {
    "id": "freelance-rate",
    "locale": "uk",
    "path": "/uk/finansy/stavka-frilansera/",
    "inputs": {
      "targetIncome": 150000,
      "workDays": 21,
      "hoursPerDay": 6,
      "billablePct": 70,
      "expenses": 15000,
      "taxPct": 6
    },
    "primary": "1990.157765233753075698364452163844261108698798668403531625416123896367057461282385294543349254595455",
    "displayPrimary": "1990.16",
    "displayRows": {
      "Оплачиваемых часов": "88.2",
      "Нужно выставить счетов": "175531.91",
      "Налог": "10531.91"
    },
    "rows": {
      "Оплачиваемых часов": "88.2",
      "Нужно выставить счетов": "175531.9148936170212765957446808510638297872340425531914893617021276595744680851063829787234042553191",
      "Налог": "10531.91489361702127659574468085106382978723404255319148936170212765957446808510638297872340425531915"
    },
    "independent": "Python Decimal100 precision; equal-spend series / monthly cash-flow recurrence / stated algebra, no application imports"
  },
  {
    "id": "freelance-rate",
    "locale": "de",
    "path": "/de/finanzen/stundensatz-freelancer/",
    "inputs": {
      "targetIncome": 3000,
      "workDays": 21,
      "hoursPerDay": 6,
      "billablePct": 70,
      "expenses": 300,
      "taxPct": 6
    },
    "primary": "39.80315530467506151396728904327688522217397597336807063250832247792734114922564770589086698509190910",
    "displayPrimary": "39.80",
    "displayRows": {
      "Оплачиваемых часов": "88.2",
      "Нужно выставить счетов": "3510.64",
      "Налог": "210.64"
    },
    "rows": {
      "Оплачиваемых часов": "88.2",
      "Нужно выставить счетов": "3510.638297872340425531914893617021276595744680851063829787234042553191489361702127659574468085106383",
      "Налог": "210.638297872340425531914893617021276595744680851063829787234042553191489361702127659574468085106383"
    },
    "independent": "Python Decimal100 precision; equal-spend series / monthly cash-flow recurrence / stated algebra, no application imports"
  },
  {
    "id": "freelance-rate",
    "locale": "es",
    "path": "/es/finanzas/tarifa-freelance/",
    "inputs": {
      "targetIncome": 1500,
      "workDays": 21,
      "hoursPerDay": 6,
      "billablePct": 70,
      "expenses": 150,
      "taxPct": 6
    },
    "primary": "19.90157765233753075698364452163844261108698798668403531625416123896367057461282385294543349254595455",
    "displayPrimary": "19.90",
    "displayRows": {
      "Оплачиваемых часов": "88.2",
      "Нужно выставить счетов": "1755.32",
      "Налог": "105.32"
    },
    "rows": {
      "Оплачиваемых часов": "88.2",
      "Нужно выставить счетов": "1755.319148936170212765957446808510638297872340425531914893617021276595744680851063829787234042553191",
      "Налог": "105.3191489361702127659574468085106382978723404255319148936170212765957446808510638297872340425531915"
    },
    "independent": "Python Decimal100 precision; equal-spend series / monthly cash-flow recurrence / stated algebra, no application imports"
  }
] as const;
