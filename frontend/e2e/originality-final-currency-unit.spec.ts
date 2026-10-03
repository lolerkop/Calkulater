import { expect, test, type Page } from '@playwright/test';

// Bounded20 SSR currency amount-unit amendment. The embedded records are the
// immutable C4D published integration fixture, not independently computed math.
// Expected amount-unit wording and numerical controls below are literal; this
// spec imports no registry, compute engine, formatter or unit-label helper.
type Locale = 'ru' | 'en' | 'uk' | 'de' | 'es';
type Id = 'currency-converter' | 'usd-to-eur' | 'eur-to-mdl' | 'usd-to-mdl';
type Sample = {
  id: Id; locale: Locale; path: string; title: string; h1: string; htmlLang: string; query: string;
  fields: { name: string; label: string; type: string; unit: string | null; help: string | null; staticUnit: string; value: string | number | boolean; readOnly: boolean; options: { value: string; label: string }[] | null }[];
  result: { primary: { label: string; value: string }; secondary: { label: string; value: string; href?: string; accent?: string }[]; note?: string };
  fixedNativeExcerpts: string[];
};
const beforeFixtureSHA256 = 'c957f613883d99369b5d481bd9896df0078100ff0e98fce598c76c3ec55e5ee2';
const beforeSourceAggregateSHA256 = 'c4d60f28686c6d71e666b711e4c596ec5cf2c89ad670653d3d55b25a14d3fd4d';
const selectedCurrencyUnits: Record<Locale, string> = {
  ru: 'в выбранной исходной валюте',
  en: 'in the selected source currency',
  uk: 'у вибраній початковій валюті',
  de: 'in der gewählten Ausgangswährung',
  es: 'en la divisa de origen seleccionada',
};
// Existing established public teaching scenarios:250 GBP→RON;100 USD→EUR;
//200 EUR→MDL;100 USD→MDL. These are fixed saved-quote literal controls, not
//new independent FX-rate/source calculations and not live exchange offers.
const fixedNumericControls: Record<Id, number> = {
  'currency-converter': 1547.03,
  'usd-to-eur': 88.51,
  'eur-to-mdl': 4003.99,
  'usd-to-mdl': 1771.99,
};
const fixedPairs: Record<Exclude<Id, 'currency-converter'>, { from: string; to: string }> = {
  'usd-to-eur': { from: 'USD', to: 'EUR' },
  'eur-to-mdl': { from: 'EUR', to: 'MDL' },
  'usd-to-mdl': { from: 'USD', to: 'MDL' },
};
const samples: Sample[] = [
  {
    "id": "currency-converter",
    "locale": "ru",
    "path": "/ru/currency/currency-converter/",
    "title": "Конвертер валют онлайн — USD, EUR, MDL, RON — Калькуляторы",
    "h1": "Конвертер валют",
    "htmlLang": "ru",
    "query": "amount=250&from=GBP&to=RON",
    "fields": [
      {
        "name": "amount",
        "label": "Сумма",
        "type": "number",
        "unit": null,
        "help": null,
        "staticUnit": "без единицы",
        "value": 250,
        "readOnly": false,
        "options": null
      },
      {
        "name": "from",
        "label": "Из валюты",
        "type": "select",
        "unit": null,
        "help": null,
        "staticUnit": "вариант из списка",
        "value": "GBP",
        "readOnly": false,
        "options": [
          {
            "value": "USD",
            "label": "USD — Доллар США"
          },
          {
            "value": "EUR",
            "label": "EUR — Евро"
          },
          {
            "value": "MDL",
            "label": "MDL — Молдавский лей"
          },
          {
            "value": "RON",
            "label": "RON — Румынский лей"
          },
          {
            "value": "UAH",
            "label": "UAH — Гривна"
          },
          {
            "value": "PLN",
            "label": "PLN — Польский злотый"
          },
          {
            "value": "GBP",
            "label": "GBP — Фунт стерлингов"
          },
          {
            "value": "CHF",
            "label": "CHF — Швейцарский франк"
          },
          {
            "value": "TRY",
            "label": "TRY — Турецкая лира"
          }
        ]
      },
      {
        "name": "to",
        "label": "В валюту",
        "type": "select",
        "unit": null,
        "help": null,
        "staticUnit": "вариант из списка",
        "value": "RON",
        "readOnly": false,
        "options": [
          {
            "value": "USD",
            "label": "USD — Доллар США"
          },
          {
            "value": "EUR",
            "label": "EUR — Евро"
          },
          {
            "value": "MDL",
            "label": "MDL — Молдавский лей"
          },
          {
            "value": "RON",
            "label": "RON — Румынский лей"
          },
          {
            "value": "UAH",
            "label": "UAH — Гривна"
          },
          {
            "value": "PLN",
            "label": "PLN — Польский злотый"
          },
          {
            "value": "GBP",
            "label": "GBP — Фунт стерлингов"
          },
          {
            "value": "CHF",
            "label": "CHF — Швейцарский франк"
          },
          {
            "value": "TRY",
            "label": "TRY — Турецкая лира"
          }
        ]
      }
    ],
    "result": {
      "primary": {
        "label": "Результат",
        "value": "1 547,03 lei"
      },
      "secondary": [
        {
          "label": "Курс",
          "value": "1 GBP = 6,1881 RON"
        },
        {
          "label": "Из",
          "value": "250,00 £ (Фунт стерлингов)"
        },
        {
          "label": "В",
          "value": "Румынский лей"
        },
        {
          "label": "Тип курса",
          "value": "сохранённый справочный курс"
        },
        {
          "label": "Статус обновления",
          "value": "Сохранённые курсы прошли последнюю проверку источников.",
          "accent": "neutral"
        },
        {
          "label": "Последняя попытка обновления",
          "value": "2026-10-01T14:25:38.145Z"
        },
        {
          "label": "Источник",
          "value": "Европейский центральный банк — 2026-10-01",
          "href": "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html",
          "accent": "neutral"
        }
      ],
      "note": "Это не курс в реальном времени. Используются сохранённые справочные курсы указанных источников; резервный источник отмечен отдельно. Банки и обменные пункты могут использовать другие курсы и комиссии."
    },
    "fixedNativeExcerpts": [
      "1 547,03 lei"
    ]
  },
  {
    "id": "usd-to-eur",
    "locale": "ru",
    "path": "/ru/currency/usd-to-eur/",
    "title": "USD в EUR онлайн — конвертер долларов в евро — Калькуляторы",
    "h1": "Конвертер USD в EUR",
    "htmlLang": "ru",
    "query": "amount=100&from=USD&to=EUR",
    "fields": [
      {
        "name": "amount",
        "label": "Сумма",
        "type": "number",
        "unit": null,
        "help": null,
        "staticUnit": "без единицы",
        "value": 100,
        "readOnly": false,
        "options": null
      },
      {
        "name": "from",
        "label": "Из валюты",
        "type": "select",
        "unit": null,
        "help": null,
        "staticUnit": "вариант из списка",
        "value": "USD",
        "readOnly": true,
        "options": [
          {
            "value": "USD",
            "label": "USD — Доллар США"
          },
          {
            "value": "EUR",
            "label": "EUR — Евро"
          },
          {
            "value": "MDL",
            "label": "MDL — Молдавский лей"
          },
          {
            "value": "RON",
            "label": "RON — Румынский лей"
          },
          {
            "value": "UAH",
            "label": "UAH — Гривна"
          },
          {
            "value": "PLN",
            "label": "PLN — Польский злотый"
          },
          {
            "value": "GBP",
            "label": "GBP — Фунт стерлингов"
          },
          {
            "value": "CHF",
            "label": "CHF — Швейцарский франк"
          },
          {
            "value": "TRY",
            "label": "TRY — Турецкая лира"
          }
        ]
      },
      {
        "name": "to",
        "label": "В валюту",
        "type": "select",
        "unit": null,
        "help": null,
        "staticUnit": "вариант из списка",
        "value": "EUR",
        "readOnly": true,
        "options": [
          {
            "value": "USD",
            "label": "USD — Доллар США"
          },
          {
            "value": "EUR",
            "label": "EUR — Евро"
          },
          {
            "value": "MDL",
            "label": "MDL — Молдавский лей"
          },
          {
            "value": "RON",
            "label": "RON — Румынский лей"
          },
          {
            "value": "UAH",
            "label": "UAH — Гривна"
          },
          {
            "value": "PLN",
            "label": "PLN — Польский злотый"
          },
          {
            "value": "GBP",
            "label": "GBP — Фунт стерлингов"
          },
          {
            "value": "CHF",
            "label": "CHF — Швейцарский франк"
          },
          {
            "value": "TRY",
            "label": "TRY — Турецкая лира"
          }
        ]
      }
    ],
    "result": {
      "primary": {
        "label": "Результат",
        "value": "88,51 €"
      },
      "secondary": [
        {
          "label": "Курс",
          "value": "1 USD = 0,8851 EUR"
        },
        {
          "label": "Из",
          "value": "100,00 $ (Доллар США)"
        },
        {
          "label": "В",
          "value": "Евро"
        },
        {
          "label": "Тип курса",
          "value": "сохранённый справочный курс"
        },
        {
          "label": "Статус обновления",
          "value": "Сохранённые курсы прошли последнюю проверку источников.",
          "accent": "neutral"
        },
        {
          "label": "Последняя попытка обновления",
          "value": "2026-10-01T14:25:38.145Z"
        },
        {
          "label": "Источник",
          "value": "Европейский центральный банк — 2026-10-01",
          "href": "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html",
          "accent": "neutral"
        }
      ],
      "note": "Это не курс в реальном времени. Используются сохранённые справочные курсы указанных источников; резервный источник отмечен отдельно. Банки и обменные пункты могут использовать другие курсы и комиссии."
    },
    "fixedNativeExcerpts": [
      "88,51 €"
    ]
  },
  {
    "id": "eur-to-mdl",
    "locale": "ru",
    "path": "/ru/currency/eur-to-mdl/",
    "title": "EUR в MDL онлайн — конвертер евро в молдавский лей — Калькуляторы",
    "h1": "Конвертер EUR в MDL",
    "htmlLang": "ru",
    "query": "amount=200&from=EUR&to=MDL",
    "fields": [
      {
        "name": "amount",
        "label": "Сумма",
        "type": "number",
        "unit": null,
        "help": null,
        "staticUnit": "без единицы",
        "value": 200,
        "readOnly": false,
        "options": null
      },
      {
        "name": "from",
        "label": "Из валюты",
        "type": "select",
        "unit": null,
        "help": null,
        "staticUnit": "вариант из списка",
        "value": "EUR",
        "readOnly": true,
        "options": [
          {
            "value": "USD",
            "label": "USD — Доллар США"
          },
          {
            "value": "EUR",
            "label": "EUR — Евро"
          },
          {
            "value": "MDL",
            "label": "MDL — Молдавский лей"
          },
          {
            "value": "RON",
            "label": "RON — Румынский лей"
          },
          {
            "value": "UAH",
            "label": "UAH — Гривна"
          },
          {
            "value": "PLN",
            "label": "PLN — Польский злотый"
          },
          {
            "value": "GBP",
            "label": "GBP — Фунт стерлингов"
          },
          {
            "value": "CHF",
            "label": "CHF — Швейцарский франк"
          },
          {
            "value": "TRY",
            "label": "TRY — Турецкая лира"
          }
        ]
      },
      {
        "name": "to",
        "label": "В валюту",
        "type": "select",
        "unit": null,
        "help": null,
        "staticUnit": "вариант из списка",
        "value": "MDL",
        "readOnly": true,
        "options": [
          {
            "value": "USD",
            "label": "USD — Доллар США"
          },
          {
            "value": "EUR",
            "label": "EUR — Евро"
          },
          {
            "value": "MDL",
            "label": "MDL — Молдавский лей"
          },
          {
            "value": "RON",
            "label": "RON — Румынский лей"
          },
          {
            "value": "UAH",
            "label": "UAH — Гривна"
          },
          {
            "value": "PLN",
            "label": "PLN — Польский злотый"
          },
          {
            "value": "GBP",
            "label": "GBP — Фунт стерлингов"
          },
          {
            "value": "CHF",
            "label": "CHF — Швейцарский франк"
          },
          {
            "value": "TRY",
            "label": "TRY — Турецкая лира"
          }
        ]
      }
    ],
    "result": {
      "primary": {
        "label": "Результат",
        "value": "4 003,99 L"
      },
      "secondary": [
        {
          "label": "Курс",
          "value": "1 EUR = 20,0199 MDL"
        },
        {
          "label": "Из",
          "value": "200,00 € (Евро)"
        },
        {
          "label": "В",
          "value": "Молдавский лей"
        },
        {
          "label": "Тип курса",
          "value": "сохранённый справочный курс"
        },
        {
          "label": "Статус обновления",
          "value": "Сохранённые курсы прошли последнюю проверку источников.",
          "accent": "neutral"
        },
        {
          "label": "Последняя попытка обновления",
          "value": "2026-10-01T14:25:38.145Z"
        },
        {
          "label": "Источник",
          "value": "Европейский центральный банк — 2026-10-01",
          "href": "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html",
          "accent": "neutral"
        },
        {
          "label": "Источник",
          "value": "Национальный банк Молдовы — 2026-10-01",
          "href": "https://www.bnm.md/en/official_exchange_rates",
          "accent": "neutral"
        }
      ],
      "note": "Это не курс в реальном времени. Используются сохранённые справочные курсы указанных источников; резервный источник отмечен отдельно. Банки и обменные пункты могут использовать другие курсы и комиссии."
    },
    "fixedNativeExcerpts": [
      "4 003,99 L"
    ]
  },
  {
    "id": "usd-to-mdl",
    "locale": "ru",
    "path": "/ru/currency/usd-to-mdl/",
    "title": "USD в MDL онлайн — конвертер долларов в молдавский лей — Калькуляторы",
    "h1": "Конвертер USD в MDL",
    "htmlLang": "ru",
    "query": "amount=100&from=USD&to=MDL",
    "fields": [
      {
        "name": "amount",
        "label": "Сумма",
        "type": "number",
        "unit": null,
        "help": null,
        "staticUnit": "без единицы",
        "value": 100,
        "readOnly": false,
        "options": null
      },
      {
        "name": "from",
        "label": "Из валюты",
        "type": "select",
        "unit": null,
        "help": null,
        "staticUnit": "вариант из списка",
        "value": "USD",
        "readOnly": true,
        "options": [
          {
            "value": "USD",
            "label": "USD — Доллар США"
          },
          {
            "value": "EUR",
            "label": "EUR — Евро"
          },
          {
            "value": "MDL",
            "label": "MDL — Молдавский лей"
          },
          {
            "value": "RON",
            "label": "RON — Румынский лей"
          },
          {
            "value": "UAH",
            "label": "UAH — Гривна"
          },
          {
            "value": "PLN",
            "label": "PLN — Польский злотый"
          },
          {
            "value": "GBP",
            "label": "GBP — Фунт стерлингов"
          },
          {
            "value": "CHF",
            "label": "CHF — Швейцарский франк"
          },
          {
            "value": "TRY",
            "label": "TRY — Турецкая лира"
          }
        ]
      },
      {
        "name": "to",
        "label": "В валюту",
        "type": "select",
        "unit": null,
        "help": null,
        "staticUnit": "вариант из списка",
        "value": "MDL",
        "readOnly": true,
        "options": [
          {
            "value": "USD",
            "label": "USD — Доллар США"
          },
          {
            "value": "EUR",
            "label": "EUR — Евро"
          },
          {
            "value": "MDL",
            "label": "MDL — Молдавский лей"
          },
          {
            "value": "RON",
            "label": "RON — Румынский лей"
          },
          {
            "value": "UAH",
            "label": "UAH — Гривна"
          },
          {
            "value": "PLN",
            "label": "PLN — Польский злотый"
          },
          {
            "value": "GBP",
            "label": "GBP — Фунт стерлингов"
          },
          {
            "value": "CHF",
            "label": "CHF — Швейцарский франк"
          },
          {
            "value": "TRY",
            "label": "TRY — Турецкая лира"
          }
        ]
      }
    ],
    "result": {
      "primary": {
        "label": "Результат",
        "value": "1 771,99 L"
      },
      "secondary": [
        {
          "label": "Курс",
          "value": "1 USD = 17,7199 MDL"
        },
        {
          "label": "Из",
          "value": "100,00 $ (Доллар США)"
        },
        {
          "label": "В",
          "value": "Молдавский лей"
        },
        {
          "label": "Тип курса",
          "value": "сохранённый справочный курс"
        },
        {
          "label": "Статус обновления",
          "value": "Сохранённые курсы прошли последнюю проверку источников.",
          "accent": "neutral"
        },
        {
          "label": "Последняя попытка обновления",
          "value": "2026-10-01T14:25:38.145Z"
        },
        {
          "label": "Источник",
          "value": "Национальный банк Молдовы — 2026-10-01",
          "href": "https://www.bnm.md/en/official_exchange_rates",
          "accent": "neutral"
        }
      ],
      "note": "Это не курс в реальном времени. Используются сохранённые справочные курсы указанных источников; резервный источник отмечен отдельно. Банки и обменные пункты могут использовать другие курсы и комиссии."
    },
    "fixedNativeExcerpts": [
      "1 771,99 L"
    ]
  },
  {
    "id": "currency-converter",
    "locale": "en",
    "path": "/en/currency/currency-converter/",
    "title": "Currency converter — convert USD, EUR, MDL and more — Calculators",
    "h1": "Currency converter",
    "htmlLang": "en",
    "query": "amount=250&from=GBP&to=RON",
    "fields": [
      {
        "name": "amount",
        "label": "Amount",
        "type": "number",
        "unit": null,
        "help": null,
        "staticUnit": "unitless",
        "value": 250,
        "readOnly": false,
        "options": null
      },
      {
        "name": "from",
        "label": "From currency",
        "type": "select",
        "unit": null,
        "help": null,
        "staticUnit": "list option",
        "value": "GBP",
        "readOnly": false,
        "options": [
          {
            "value": "USD",
            "label": "USD — US dollar"
          },
          {
            "value": "EUR",
            "label": "EUR — Euro"
          },
          {
            "value": "MDL",
            "label": "MDL — Moldovan leu"
          },
          {
            "value": "RON",
            "label": "RON — Romanian leu"
          },
          {
            "value": "UAH",
            "label": "UAH — Ukrainian hryvnia"
          },
          {
            "value": "PLN",
            "label": "PLN — Polish zloty"
          },
          {
            "value": "GBP",
            "label": "GBP — Pound sterling"
          },
          {
            "value": "CHF",
            "label": "CHF — Swiss franc"
          },
          {
            "value": "TRY",
            "label": "TRY — Turkish lira"
          }
        ]
      },
      {
        "name": "to",
        "label": "To currency",
        "type": "select",
        "unit": null,
        "help": null,
        "staticUnit": "list option",
        "value": "RON",
        "readOnly": false,
        "options": [
          {
            "value": "USD",
            "label": "USD — US dollar"
          },
          {
            "value": "EUR",
            "label": "EUR — Euro"
          },
          {
            "value": "MDL",
            "label": "MDL — Moldovan leu"
          },
          {
            "value": "RON",
            "label": "RON — Romanian leu"
          },
          {
            "value": "UAH",
            "label": "UAH — Ukrainian hryvnia"
          },
          {
            "value": "PLN",
            "label": "PLN — Polish zloty"
          },
          {
            "value": "GBP",
            "label": "GBP — Pound sterling"
          },
          {
            "value": "CHF",
            "label": "CHF — Swiss franc"
          },
          {
            "value": "TRY",
            "label": "TRY — Turkish lira"
          }
        ]
      }
    ],
    "result": {
      "primary": {
        "label": "Result",
        "value": "1,547.03 lei"
      },
      "secondary": [
        {
          "label": "Rate",
          "value": "1 GBP = 6.1881 RON"
        },
        {
          "label": "From",
          "value": "250.00 £ (Pound sterling)"
        },
        {
          "label": "To",
          "value": "Romanian leu"
        },
        {
          "label": "Rate type",
          "value": "saved reference rate"
        },
        {
          "label": "Update status",
          "value": "The saved rates passed the latest source check.",
          "accent": "neutral"
        },
        {
          "label": "Last update attempt",
          "value": "2026-10-01T14:25:38.145Z"
        },
        {
          "label": "Source",
          "value": "European Central Bank — 2026-10-01",
          "href": "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html",
          "accent": "neutral"
        }
      ],
      "note": "These are not real-time rates. The calculation uses saved reference rates from the listed sources; any fallback source is marked separately. Banks and exchange services may use different rates and fees."
    },
    "fixedNativeExcerpts": [
      "1,547.03 lei"
    ]
  },
  {
    "id": "usd-to-eur",
    "locale": "en",
    "path": "/en/currency/usd-to-eur/",
    "title": "USD to EUR converter — Calculators",
    "h1": "USD to EUR converter",
    "htmlLang": "en",
    "query": "amount=100&from=USD&to=EUR",
    "fields": [
      {
        "name": "amount",
        "label": "Amount",
        "type": "number",
        "unit": null,
        "help": null,
        "staticUnit": "unitless",
        "value": 100,
        "readOnly": false,
        "options": null
      },
      {
        "name": "from",
        "label": "From currency",
        "type": "select",
        "unit": null,
        "help": null,
        "staticUnit": "list option",
        "value": "USD",
        "readOnly": true,
        "options": [
          {
            "value": "USD",
            "label": "USD — US dollar"
          },
          {
            "value": "EUR",
            "label": "EUR — Euro"
          },
          {
            "value": "MDL",
            "label": "MDL — Moldovan leu"
          },
          {
            "value": "RON",
            "label": "RON — Romanian leu"
          },
          {
            "value": "UAH",
            "label": "UAH — Ukrainian hryvnia"
          },
          {
            "value": "PLN",
            "label": "PLN — Polish zloty"
          },
          {
            "value": "GBP",
            "label": "GBP — Pound sterling"
          },
          {
            "value": "CHF",
            "label": "CHF — Swiss franc"
          },
          {
            "value": "TRY",
            "label": "TRY — Turkish lira"
          }
        ]
      },
      {
        "name": "to",
        "label": "To currency",
        "type": "select",
        "unit": null,
        "help": null,
        "staticUnit": "list option",
        "value": "EUR",
        "readOnly": true,
        "options": [
          {
            "value": "USD",
            "label": "USD — US dollar"
          },
          {
            "value": "EUR",
            "label": "EUR — Euro"
          },
          {
            "value": "MDL",
            "label": "MDL — Moldovan leu"
          },
          {
            "value": "RON",
            "label": "RON — Romanian leu"
          },
          {
            "value": "UAH",
            "label": "UAH — Ukrainian hryvnia"
          },
          {
            "value": "PLN",
            "label": "PLN — Polish zloty"
          },
          {
            "value": "GBP",
            "label": "GBP — Pound sterling"
          },
          {
            "value": "CHF",
            "label": "CHF — Swiss franc"
          },
          {
            "value": "TRY",
            "label": "TRY — Turkish lira"
          }
        ]
      }
    ],
    "result": {
      "primary": {
        "label": "Result",
        "value": "88.51 €"
      },
      "secondary": [
        {
          "label": "Rate",
          "value": "1 USD = 0.8851 EUR"
        },
        {
          "label": "From",
          "value": "100.00 $ (US dollar)"
        },
        {
          "label": "To",
          "value": "Euro"
        },
        {
          "label": "Rate type",
          "value": "saved reference rate"
        },
        {
          "label": "Update status",
          "value": "The saved rates passed the latest source check.",
          "accent": "neutral"
        },
        {
          "label": "Last update attempt",
          "value": "2026-10-01T14:25:38.145Z"
        },
        {
          "label": "Source",
          "value": "European Central Bank — 2026-10-01",
          "href": "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html",
          "accent": "neutral"
        }
      ],
      "note": "These are not real-time rates. The calculation uses saved reference rates from the listed sources; any fallback source is marked separately. Banks and exchange services may use different rates and fees."
    },
    "fixedNativeExcerpts": [
      "88.51 €"
    ]
  },
  {
    "id": "eur-to-mdl",
    "locale": "en",
    "path": "/en/currency/eur-to-mdl/",
    "title": "EUR to MDL converter — Calculators",
    "h1": "EUR to MDL converter",
    "htmlLang": "en",
    "query": "amount=200&from=EUR&to=MDL",
    "fields": [
      {
        "name": "amount",
        "label": "Amount",
        "type": "number",
        "unit": null,
        "help": null,
        "staticUnit": "unitless",
        "value": 200,
        "readOnly": false,
        "options": null
      },
      {
        "name": "from",
        "label": "From currency",
        "type": "select",
        "unit": null,
        "help": null,
        "staticUnit": "list option",
        "value": "EUR",
        "readOnly": true,
        "options": [
          {
            "value": "USD",
            "label": "USD — US dollar"
          },
          {
            "value": "EUR",
            "label": "EUR — Euro"
          },
          {
            "value": "MDL",
            "label": "MDL — Moldovan leu"
          },
          {
            "value": "RON",
            "label": "RON — Romanian leu"
          },
          {
            "value": "UAH",
            "label": "UAH — Ukrainian hryvnia"
          },
          {
            "value": "PLN",
            "label": "PLN — Polish zloty"
          },
          {
            "value": "GBP",
            "label": "GBP — Pound sterling"
          },
          {
            "value": "CHF",
            "label": "CHF — Swiss franc"
          },
          {
            "value": "TRY",
            "label": "TRY — Turkish lira"
          }
        ]
      },
      {
        "name": "to",
        "label": "To currency",
        "type": "select",
        "unit": null,
        "help": null,
        "staticUnit": "list option",
        "value": "MDL",
        "readOnly": true,
        "options": [
          {
            "value": "USD",
            "label": "USD — US dollar"
          },
          {
            "value": "EUR",
            "label": "EUR — Euro"
          },
          {
            "value": "MDL",
            "label": "MDL — Moldovan leu"
          },
          {
            "value": "RON",
            "label": "RON — Romanian leu"
          },
          {
            "value": "UAH",
            "label": "UAH — Ukrainian hryvnia"
          },
          {
            "value": "PLN",
            "label": "PLN — Polish zloty"
          },
          {
            "value": "GBP",
            "label": "GBP — Pound sterling"
          },
          {
            "value": "CHF",
            "label": "CHF — Swiss franc"
          },
          {
            "value": "TRY",
            "label": "TRY — Turkish lira"
          }
        ]
      }
    ],
    "result": {
      "primary": {
        "label": "Result",
        "value": "4,003.99 L"
      },
      "secondary": [
        {
          "label": "Rate",
          "value": "1 EUR = 20.0199 MDL"
        },
        {
          "label": "From",
          "value": "200.00 € (Euro)"
        },
        {
          "label": "To",
          "value": "Moldovan leu"
        },
        {
          "label": "Rate type",
          "value": "saved reference rate"
        },
        {
          "label": "Update status",
          "value": "The saved rates passed the latest source check.",
          "accent": "neutral"
        },
        {
          "label": "Last update attempt",
          "value": "2026-10-01T14:25:38.145Z"
        },
        {
          "label": "Source",
          "value": "European Central Bank — 2026-10-01",
          "href": "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html",
          "accent": "neutral"
        },
        {
          "label": "Source",
          "value": "National Bank of Moldova — 2026-10-01",
          "href": "https://www.bnm.md/en/official_exchange_rates",
          "accent": "neutral"
        }
      ],
      "note": "These are not real-time rates. The calculation uses saved reference rates from the listed sources; any fallback source is marked separately. Banks and exchange services may use different rates and fees."
    },
    "fixedNativeExcerpts": [
      "4,003.99 L"
    ]
  },
  {
    "id": "usd-to-mdl",
    "locale": "en",
    "path": "/en/currency/usd-to-mdl/",
    "title": "USD to MDL converter — Calculators",
    "h1": "USD to MDL converter",
    "htmlLang": "en",
    "query": "amount=100&from=USD&to=MDL",
    "fields": [
      {
        "name": "amount",
        "label": "Amount",
        "type": "number",
        "unit": null,
        "help": null,
        "staticUnit": "unitless",
        "value": 100,
        "readOnly": false,
        "options": null
      },
      {
        "name": "from",
        "label": "From currency",
        "type": "select",
        "unit": null,
        "help": null,
        "staticUnit": "list option",
        "value": "USD",
        "readOnly": true,
        "options": [
          {
            "value": "USD",
            "label": "USD — US dollar"
          },
          {
            "value": "EUR",
            "label": "EUR — Euro"
          },
          {
            "value": "MDL",
            "label": "MDL — Moldovan leu"
          },
          {
            "value": "RON",
            "label": "RON — Romanian leu"
          },
          {
            "value": "UAH",
            "label": "UAH — Ukrainian hryvnia"
          },
          {
            "value": "PLN",
            "label": "PLN — Polish zloty"
          },
          {
            "value": "GBP",
            "label": "GBP — Pound sterling"
          },
          {
            "value": "CHF",
            "label": "CHF — Swiss franc"
          },
          {
            "value": "TRY",
            "label": "TRY — Turkish lira"
          }
        ]
      },
      {
        "name": "to",
        "label": "To currency",
        "type": "select",
        "unit": null,
        "help": null,
        "staticUnit": "list option",
        "value": "MDL",
        "readOnly": true,
        "options": [
          {
            "value": "USD",
            "label": "USD — US dollar"
          },
          {
            "value": "EUR",
            "label": "EUR — Euro"
          },
          {
            "value": "MDL",
            "label": "MDL — Moldovan leu"
          },
          {
            "value": "RON",
            "label": "RON — Romanian leu"
          },
          {
            "value": "UAH",
            "label": "UAH — Ukrainian hryvnia"
          },
          {
            "value": "PLN",
            "label": "PLN — Polish zloty"
          },
          {
            "value": "GBP",
            "label": "GBP — Pound sterling"
          },
          {
            "value": "CHF",
            "label": "CHF — Swiss franc"
          },
          {
            "value": "TRY",
            "label": "TRY — Turkish lira"
          }
        ]
      }
    ],
    "result": {
      "primary": {
        "label": "Result",
        "value": "1,771.99 L"
      },
      "secondary": [
        {
          "label": "Rate",
          "value": "1 USD = 17.7199 MDL"
        },
        {
          "label": "From",
          "value": "100.00 $ (US dollar)"
        },
        {
          "label": "To",
          "value": "Moldovan leu"
        },
        {
          "label": "Rate type",
          "value": "saved reference rate"
        },
        {
          "label": "Update status",
          "value": "The saved rates passed the latest source check.",
          "accent": "neutral"
        },
        {
          "label": "Last update attempt",
          "value": "2026-10-01T14:25:38.145Z"
        },
        {
          "label": "Source",
          "value": "National Bank of Moldova — 2026-10-01",
          "href": "https://www.bnm.md/en/official_exchange_rates",
          "accent": "neutral"
        }
      ],
      "note": "These are not real-time rates. The calculation uses saved reference rates from the listed sources; any fallback source is marked separately. Banks and exchange services may use different rates and fees."
    },
    "fixedNativeExcerpts": [
      "1,771.99 L"
    ]
  },
  {
    "id": "currency-converter",
    "locale": "uk",
    "path": "/uk/valyuty/konverter-valyut/",
    "title": "Конвертер валют - USD, EUR, MDL та інші — Калькулятори",
    "h1": "Конвертер валют",
    "htmlLang": "uk",
    "query": "amount=250&from=GBP&to=RON",
    "fields": [
      {
        "name": "amount",
        "label": "Сума",
        "type": "number",
        "unit": null,
        "help": null,
        "staticUnit": "без одиниці",
        "value": 250,
        "readOnly": false,
        "options": null
      },
      {
        "name": "from",
        "label": "Вихідна валюта",
        "type": "select",
        "unit": null,
        "help": null,
        "staticUnit": "варіант зі списку",
        "value": "GBP",
        "readOnly": false,
        "options": [
          {
            "value": "USD",
            "label": "USD — Долар США"
          },
          {
            "value": "EUR",
            "label": "EUR — Євро"
          },
          {
            "value": "MDL",
            "label": "MDL — Молдовський лей"
          },
          {
            "value": "RON",
            "label": "RON — Румунський лей"
          },
          {
            "value": "UAH",
            "label": "UAH — Українська гривня"
          },
          {
            "value": "PLN",
            "label": "PLN — Польський злотий"
          },
          {
            "value": "GBP",
            "label": "GBP — Фунт стерлінгів"
          },
          {
            "value": "CHF",
            "label": "CHF — Швейцарський франк"
          },
          {
            "value": "TRY",
            "label": "TRY — Турецька ліра"
          }
        ]
      },
      {
        "name": "to",
        "label": "Цільова валюта",
        "type": "select",
        "unit": null,
        "help": null,
        "staticUnit": "варіант зі списку",
        "value": "RON",
        "readOnly": false,
        "options": [
          {
            "value": "USD",
            "label": "USD — Долар США"
          },
          {
            "value": "EUR",
            "label": "EUR — Євро"
          },
          {
            "value": "MDL",
            "label": "MDL — Молдовський лей"
          },
          {
            "value": "RON",
            "label": "RON — Румунський лей"
          },
          {
            "value": "UAH",
            "label": "UAH — Українська гривня"
          },
          {
            "value": "PLN",
            "label": "PLN — Польський злотий"
          },
          {
            "value": "GBP",
            "label": "GBP — Фунт стерлінгів"
          },
          {
            "value": "CHF",
            "label": "CHF — Швейцарський франк"
          },
          {
            "value": "TRY",
            "label": "TRY — Турецька ліра"
          }
        ]
      }
    ],
    "result": {
      "primary": {
        "label": "Результат",
        "value": "1 547,03 lei"
      },
      "secondary": [
        {
          "label": "Курс",
          "value": "1 GBP = 6,1881 RON"
        },
        {
          "label": "З",
          "value": "250,00 £ (Фунт стерлінгів)"
        },
        {
          "label": "У",
          "value": "Румунський лей"
        },
        {
          "label": "Тип курсу",
          "value": "збережений довідковий курс"
        },
        {
          "label": "Статус оновлення",
          "value": "Збережені курси пройшли останню перевірку джерел.",
          "accent": "neutral"
        },
        {
          "label": "Остання спроба оновлення",
          "value": "2026-10-01T14:25:38.145Z"
        },
        {
          "label": "Джерело",
          "value": "Європейський центральний банк — 2026-10-01",
          "href": "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html",
          "accent": "neutral"
        }
      ],
      "note": "Це не курс у реальному часі. Використовуються збережені довідкові курси зазначених джерел; резервне джерело позначено окремо. Банки та обмінні сервіси можуть застосовувати інші курси й комісії."
    },
    "fixedNativeExcerpts": [
      "1 547,03 lei"
    ]
  },
  {
    "id": "usd-to-eur",
    "locale": "uk",
    "path": "/uk/valyuty/usd-v-eur/",
    "title": "Конвертер USD в EUR — Калькулятори",
    "h1": "Конвертер USD в EUR",
    "htmlLang": "uk",
    "query": "amount=100&from=USD&to=EUR",
    "fields": [
      {
        "name": "amount",
        "label": "Сума",
        "type": "number",
        "unit": null,
        "help": null,
        "staticUnit": "без одиниці",
        "value": 100,
        "readOnly": false,
        "options": null
      },
      {
        "name": "from",
        "label": "Вихідна валюта",
        "type": "select",
        "unit": null,
        "help": null,
        "staticUnit": "варіант зі списку",
        "value": "USD",
        "readOnly": true,
        "options": [
          {
            "value": "USD",
            "label": "USD — Долар США"
          },
          {
            "value": "EUR",
            "label": "EUR — Євро"
          },
          {
            "value": "MDL",
            "label": "MDL — Молдовський лей"
          },
          {
            "value": "RON",
            "label": "RON — Румунський лей"
          },
          {
            "value": "UAH",
            "label": "UAH — Українська гривня"
          },
          {
            "value": "PLN",
            "label": "PLN — Польський злотий"
          },
          {
            "value": "GBP",
            "label": "GBP — Фунт стерлінгів"
          },
          {
            "value": "CHF",
            "label": "CHF — Швейцарський франк"
          },
          {
            "value": "TRY",
            "label": "TRY — Турецька ліра"
          }
        ]
      },
      {
        "name": "to",
        "label": "Цільова валюта",
        "type": "select",
        "unit": null,
        "help": null,
        "staticUnit": "варіант зі списку",
        "value": "EUR",
        "readOnly": true,
        "options": [
          {
            "value": "USD",
            "label": "USD — Долар США"
          },
          {
            "value": "EUR",
            "label": "EUR — Євро"
          },
          {
            "value": "MDL",
            "label": "MDL — Молдовський лей"
          },
          {
            "value": "RON",
            "label": "RON — Румунський лей"
          },
          {
            "value": "UAH",
            "label": "UAH — Українська гривня"
          },
          {
            "value": "PLN",
            "label": "PLN — Польський злотий"
          },
          {
            "value": "GBP",
            "label": "GBP — Фунт стерлінгів"
          },
          {
            "value": "CHF",
            "label": "CHF — Швейцарський франк"
          },
          {
            "value": "TRY",
            "label": "TRY — Турецька ліра"
          }
        ]
      }
    ],
    "result": {
      "primary": {
        "label": "Результат",
        "value": "88,51 €"
      },
      "secondary": [
        {
          "label": "Курс",
          "value": "1 USD = 0,8851 EUR"
        },
        {
          "label": "З",
          "value": "100,00 $ (Долар США)"
        },
        {
          "label": "У",
          "value": "Євро"
        },
        {
          "label": "Тип курсу",
          "value": "збережений довідковий курс"
        },
        {
          "label": "Статус оновлення",
          "value": "Збережені курси пройшли останню перевірку джерел.",
          "accent": "neutral"
        },
        {
          "label": "Остання спроба оновлення",
          "value": "2026-10-01T14:25:38.145Z"
        },
        {
          "label": "Джерело",
          "value": "Європейський центральний банк — 2026-10-01",
          "href": "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html",
          "accent": "neutral"
        }
      ],
      "note": "Це не курс у реальному часі. Використовуються збережені довідкові курси зазначених джерел; резервне джерело позначено окремо. Банки та обмінні сервіси можуть застосовувати інші курси й комісії."
    },
    "fixedNativeExcerpts": [
      "88,51 €"
    ]
  },
  {
    "id": "eur-to-mdl",
    "locale": "uk",
    "path": "/uk/valyuty/eur-v-mdl/",
    "title": "Конвертер EUR в MDL — Калькулятори",
    "h1": "Конвертер EUR в MDL",
    "htmlLang": "uk",
    "query": "amount=200&from=EUR&to=MDL",
    "fields": [
      {
        "name": "amount",
        "label": "Сума",
        "type": "number",
        "unit": null,
        "help": null,
        "staticUnit": "без одиниці",
        "value": 200,
        "readOnly": false,
        "options": null
      },
      {
        "name": "from",
        "label": "Вихідна валюта",
        "type": "select",
        "unit": null,
        "help": null,
        "staticUnit": "варіант зі списку",
        "value": "EUR",
        "readOnly": true,
        "options": [
          {
            "value": "USD",
            "label": "USD — Долар США"
          },
          {
            "value": "EUR",
            "label": "EUR — Євро"
          },
          {
            "value": "MDL",
            "label": "MDL — Молдовський лей"
          },
          {
            "value": "RON",
            "label": "RON — Румунський лей"
          },
          {
            "value": "UAH",
            "label": "UAH — Українська гривня"
          },
          {
            "value": "PLN",
            "label": "PLN — Польський злотий"
          },
          {
            "value": "GBP",
            "label": "GBP — Фунт стерлінгів"
          },
          {
            "value": "CHF",
            "label": "CHF — Швейцарський франк"
          },
          {
            "value": "TRY",
            "label": "TRY — Турецька ліра"
          }
        ]
      },
      {
        "name": "to",
        "label": "Цільова валюта",
        "type": "select",
        "unit": null,
        "help": null,
        "staticUnit": "варіант зі списку",
        "value": "MDL",
        "readOnly": true,
        "options": [
          {
            "value": "USD",
            "label": "USD — Долар США"
          },
          {
            "value": "EUR",
            "label": "EUR — Євро"
          },
          {
            "value": "MDL",
            "label": "MDL — Молдовський лей"
          },
          {
            "value": "RON",
            "label": "RON — Румунський лей"
          },
          {
            "value": "UAH",
            "label": "UAH — Українська гривня"
          },
          {
            "value": "PLN",
            "label": "PLN — Польський злотий"
          },
          {
            "value": "GBP",
            "label": "GBP — Фунт стерлінгів"
          },
          {
            "value": "CHF",
            "label": "CHF — Швейцарський франк"
          },
          {
            "value": "TRY",
            "label": "TRY — Турецька ліра"
          }
        ]
      }
    ],
    "result": {
      "primary": {
        "label": "Результат",
        "value": "4 003,99 L"
      },
      "secondary": [
        {
          "label": "Курс",
          "value": "1 EUR = 20,0199 MDL"
        },
        {
          "label": "З",
          "value": "200,00 € (Євро)"
        },
        {
          "label": "У",
          "value": "Молдовський лей"
        },
        {
          "label": "Тип курсу",
          "value": "збережений довідковий курс"
        },
        {
          "label": "Статус оновлення",
          "value": "Збережені курси пройшли останню перевірку джерел.",
          "accent": "neutral"
        },
        {
          "label": "Остання спроба оновлення",
          "value": "2026-10-01T14:25:38.145Z"
        },
        {
          "label": "Джерело",
          "value": "Європейський центральний банк — 2026-10-01",
          "href": "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html",
          "accent": "neutral"
        },
        {
          "label": "Джерело",
          "value": "Національний банк Молдови — 2026-10-01",
          "href": "https://www.bnm.md/en/official_exchange_rates",
          "accent": "neutral"
        }
      ],
      "note": "Це не курс у реальному часі. Використовуються збережені довідкові курси зазначених джерел; резервне джерело позначено окремо. Банки та обмінні сервіси можуть застосовувати інші курси й комісії."
    },
    "fixedNativeExcerpts": [
      "4 003,99 L"
    ]
  },
  {
    "id": "usd-to-mdl",
    "locale": "uk",
    "path": "/uk/valyuty/usd-v-mdl/",
    "title": "Конвертер USD в MDL — Калькулятори",
    "h1": "Конвертер USD в MDL",
    "htmlLang": "uk",
    "query": "amount=100&from=USD&to=MDL",
    "fields": [
      {
        "name": "amount",
        "label": "Сума",
        "type": "number",
        "unit": null,
        "help": null,
        "staticUnit": "без одиниці",
        "value": 100,
        "readOnly": false,
        "options": null
      },
      {
        "name": "from",
        "label": "Вихідна валюта",
        "type": "select",
        "unit": null,
        "help": null,
        "staticUnit": "варіант зі списку",
        "value": "USD",
        "readOnly": true,
        "options": [
          {
            "value": "USD",
            "label": "USD — Долар США"
          },
          {
            "value": "EUR",
            "label": "EUR — Євро"
          },
          {
            "value": "MDL",
            "label": "MDL — Молдовський лей"
          },
          {
            "value": "RON",
            "label": "RON — Румунський лей"
          },
          {
            "value": "UAH",
            "label": "UAH — Українська гривня"
          },
          {
            "value": "PLN",
            "label": "PLN — Польський злотий"
          },
          {
            "value": "GBP",
            "label": "GBP — Фунт стерлінгів"
          },
          {
            "value": "CHF",
            "label": "CHF — Швейцарський франк"
          },
          {
            "value": "TRY",
            "label": "TRY — Турецька ліра"
          }
        ]
      },
      {
        "name": "to",
        "label": "Цільова валюта",
        "type": "select",
        "unit": null,
        "help": null,
        "staticUnit": "варіант зі списку",
        "value": "MDL",
        "readOnly": true,
        "options": [
          {
            "value": "USD",
            "label": "USD — Долар США"
          },
          {
            "value": "EUR",
            "label": "EUR — Євро"
          },
          {
            "value": "MDL",
            "label": "MDL — Молдовський лей"
          },
          {
            "value": "RON",
            "label": "RON — Румунський лей"
          },
          {
            "value": "UAH",
            "label": "UAH — Українська гривня"
          },
          {
            "value": "PLN",
            "label": "PLN — Польський злотий"
          },
          {
            "value": "GBP",
            "label": "GBP — Фунт стерлінгів"
          },
          {
            "value": "CHF",
            "label": "CHF — Швейцарський франк"
          },
          {
            "value": "TRY",
            "label": "TRY — Турецька ліра"
          }
        ]
      }
    ],
    "result": {
      "primary": {
        "label": "Результат",
        "value": "1 771,99 L"
      },
      "secondary": [
        {
          "label": "Курс",
          "value": "1 USD = 17,7199 MDL"
        },
        {
          "label": "З",
          "value": "100,00 $ (Долар США)"
        },
        {
          "label": "У",
          "value": "Молдовський лей"
        },
        {
          "label": "Тип курсу",
          "value": "збережений довідковий курс"
        },
        {
          "label": "Статус оновлення",
          "value": "Збережені курси пройшли останню перевірку джерел.",
          "accent": "neutral"
        },
        {
          "label": "Остання спроба оновлення",
          "value": "2026-10-01T14:25:38.145Z"
        },
        {
          "label": "Джерело",
          "value": "Національний банк Молдови — 2026-10-01",
          "href": "https://www.bnm.md/en/official_exchange_rates",
          "accent": "neutral"
        }
      ],
      "note": "Це не курс у реальному часі. Використовуються збережені довідкові курси зазначених джерел; резервне джерело позначено окремо. Банки та обмінні сервіси можуть застосовувати інші курси й комісії."
    },
    "fixedNativeExcerpts": [
      "1 771,99 L"
    ]
  },
  {
    "id": "currency-converter",
    "locale": "de",
    "path": "/de/waehrungen/waehrungsrechner/",
    "title": "Währungsrechner — USD, EUR, MDL und mehr umrechnen — Rechner",
    "h1": "Währungsrechner",
    "htmlLang": "de",
    "query": "amount=250&from=GBP&to=RON",
    "fields": [
      {
        "name": "amount",
        "label": "Betrag",
        "type": "number",
        "unit": null,
        "help": null,
        "staticUnit": "ohne Einheit",
        "value": 250,
        "readOnly": false,
        "options": null
      },
      {
        "name": "from",
        "label": "Ausgangswährung",
        "type": "select",
        "unit": null,
        "help": null,
        "staticUnit": "Auswahl aus der Liste",
        "value": "GBP",
        "readOnly": false,
        "options": [
          {
            "value": "USD",
            "label": "USD — US-Dollar"
          },
          {
            "value": "EUR",
            "label": "EUR — Euro"
          },
          {
            "value": "MDL",
            "label": "MDL — Moldauischer Leu"
          },
          {
            "value": "RON",
            "label": "RON — Rumänischer Leu"
          },
          {
            "value": "UAH",
            "label": "UAH — Hrywnja"
          },
          {
            "value": "PLN",
            "label": "PLN — Polnischer Złoty"
          },
          {
            "value": "GBP",
            "label": "GBP — Pfund Sterling"
          },
          {
            "value": "CHF",
            "label": "CHF — Schweizer Franken"
          },
          {
            "value": "TRY",
            "label": "TRY — Türkische Lira"
          }
        ]
      },
      {
        "name": "to",
        "label": "Zielwährung",
        "type": "select",
        "unit": null,
        "help": null,
        "staticUnit": "Auswahl aus der Liste",
        "value": "RON",
        "readOnly": false,
        "options": [
          {
            "value": "USD",
            "label": "USD — US-Dollar"
          },
          {
            "value": "EUR",
            "label": "EUR — Euro"
          },
          {
            "value": "MDL",
            "label": "MDL — Moldauischer Leu"
          },
          {
            "value": "RON",
            "label": "RON — Rumänischer Leu"
          },
          {
            "value": "UAH",
            "label": "UAH — Hrywnja"
          },
          {
            "value": "PLN",
            "label": "PLN — Polnischer Złoty"
          },
          {
            "value": "GBP",
            "label": "GBP — Pfund Sterling"
          },
          {
            "value": "CHF",
            "label": "CHF — Schweizer Franken"
          },
          {
            "value": "TRY",
            "label": "TRY — Türkische Lira"
          }
        ]
      }
    ],
    "result": {
      "primary": {
        "label": "Ergebnis",
        "value": "1 547,03 lei"
      },
      "secondary": [
        {
          "label": "Wechselkurs",
          "value": "1 GBP = 6,1881 RON"
        },
        {
          "label": "Von",
          "value": "250,00 £ (Pfund Sterling)"
        },
        {
          "label": "Nach",
          "value": "Rumänischer Leu"
        },
        {
          "label": "Art des Kurses",
          "value": "gespeicherter Referenzkurs"
        },
        {
          "label": "Stand der Aktualisierung",
          "value": "Die gespeicherten Kurse haben die letzte Quellenprüfung bestanden.",
          "accent": "neutral"
        },
        {
          "label": "Letzter Aktualisierungsversuch",
          "value": "2026-10-01T14:25:38.145Z"
        },
        {
          "label": "Quelle",
          "value": "Europäische Zentralbank — 2026-10-01",
          "href": "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html",
          "accent": "neutral"
        }
      ],
      "note": "Das sind keine Echtzeitkurse. Verwendet werden gespeicherte Referenzkurse der genannten Quellen; eine Ersatzquelle ist gesondert gekennzeichnet. Banken und Wechselstuben können andere Kurse und Gebühren ansetzen."
    },
    "fixedNativeExcerpts": [
      "1 547,03 lei"
    ]
  },
  {
    "id": "usd-to-eur",
    "locale": "de",
    "path": "/de/waehrungen/usd-in-eur/",
    "title": "USD in EUR Rechner",
    "h1": "USD in EUR Rechner",
    "htmlLang": "de",
    "query": "amount=100&from=USD&to=EUR",
    "fields": [
      {
        "name": "amount",
        "label": "Betrag",
        "type": "number",
        "unit": null,
        "help": null,
        "staticUnit": "ohne Einheit",
        "value": 100,
        "readOnly": false,
        "options": null
      },
      {
        "name": "from",
        "label": "Ausgangswährung",
        "type": "select",
        "unit": null,
        "help": null,
        "staticUnit": "Auswahl aus der Liste",
        "value": "USD",
        "readOnly": true,
        "options": [
          {
            "value": "USD",
            "label": "USD — US-Dollar"
          },
          {
            "value": "EUR",
            "label": "EUR — Euro"
          },
          {
            "value": "MDL",
            "label": "MDL — Moldauischer Leu"
          },
          {
            "value": "RON",
            "label": "RON — Rumänischer Leu"
          },
          {
            "value": "UAH",
            "label": "UAH — Hrywnja"
          },
          {
            "value": "PLN",
            "label": "PLN — Polnischer Złoty"
          },
          {
            "value": "GBP",
            "label": "GBP — Pfund Sterling"
          },
          {
            "value": "CHF",
            "label": "CHF — Schweizer Franken"
          },
          {
            "value": "TRY",
            "label": "TRY — Türkische Lira"
          }
        ]
      },
      {
        "name": "to",
        "label": "Zielwährung",
        "type": "select",
        "unit": null,
        "help": null,
        "staticUnit": "Auswahl aus der Liste",
        "value": "EUR",
        "readOnly": true,
        "options": [
          {
            "value": "USD",
            "label": "USD — US-Dollar"
          },
          {
            "value": "EUR",
            "label": "EUR — Euro"
          },
          {
            "value": "MDL",
            "label": "MDL — Moldauischer Leu"
          },
          {
            "value": "RON",
            "label": "RON — Rumänischer Leu"
          },
          {
            "value": "UAH",
            "label": "UAH — Hrywnja"
          },
          {
            "value": "PLN",
            "label": "PLN — Polnischer Złoty"
          },
          {
            "value": "GBP",
            "label": "GBP — Pfund Sterling"
          },
          {
            "value": "CHF",
            "label": "CHF — Schweizer Franken"
          },
          {
            "value": "TRY",
            "label": "TRY — Türkische Lira"
          }
        ]
      }
    ],
    "result": {
      "primary": {
        "label": "Ergebnis",
        "value": "88,51 €"
      },
      "secondary": [
        {
          "label": "Wechselkurs",
          "value": "1 USD = 0,8851 EUR"
        },
        {
          "label": "Von",
          "value": "100,00 $ (US-Dollar)"
        },
        {
          "label": "Nach",
          "value": "Euro"
        },
        {
          "label": "Art des Kurses",
          "value": "gespeicherter Referenzkurs"
        },
        {
          "label": "Stand der Aktualisierung",
          "value": "Die gespeicherten Kurse haben die letzte Quellenprüfung bestanden.",
          "accent": "neutral"
        },
        {
          "label": "Letzter Aktualisierungsversuch",
          "value": "2026-10-01T14:25:38.145Z"
        },
        {
          "label": "Quelle",
          "value": "Europäische Zentralbank — 2026-10-01",
          "href": "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html",
          "accent": "neutral"
        }
      ],
      "note": "Das sind keine Echtzeitkurse. Verwendet werden gespeicherte Referenzkurse der genannten Quellen; eine Ersatzquelle ist gesondert gekennzeichnet. Banken und Wechselstuben können andere Kurse und Gebühren ansetzen."
    },
    "fixedNativeExcerpts": [
      "88,51 €"
    ]
  },
  {
    "id": "eur-to-mdl",
    "locale": "de",
    "path": "/de/waehrungen/eur-in-mdl/",
    "title": "EUR in MDL Rechner",
    "h1": "EUR in MDL Rechner",
    "htmlLang": "de",
    "query": "amount=200&from=EUR&to=MDL",
    "fields": [
      {
        "name": "amount",
        "label": "Betrag",
        "type": "number",
        "unit": null,
        "help": null,
        "staticUnit": "ohne Einheit",
        "value": 200,
        "readOnly": false,
        "options": null
      },
      {
        "name": "from",
        "label": "Ausgangswährung",
        "type": "select",
        "unit": null,
        "help": null,
        "staticUnit": "Auswahl aus der Liste",
        "value": "EUR",
        "readOnly": true,
        "options": [
          {
            "value": "USD",
            "label": "USD — US-Dollar"
          },
          {
            "value": "EUR",
            "label": "EUR — Euro"
          },
          {
            "value": "MDL",
            "label": "MDL — Moldauischer Leu"
          },
          {
            "value": "RON",
            "label": "RON — Rumänischer Leu"
          },
          {
            "value": "UAH",
            "label": "UAH — Hrywnja"
          },
          {
            "value": "PLN",
            "label": "PLN — Polnischer Złoty"
          },
          {
            "value": "GBP",
            "label": "GBP — Pfund Sterling"
          },
          {
            "value": "CHF",
            "label": "CHF — Schweizer Franken"
          },
          {
            "value": "TRY",
            "label": "TRY — Türkische Lira"
          }
        ]
      },
      {
        "name": "to",
        "label": "Zielwährung",
        "type": "select",
        "unit": null,
        "help": null,
        "staticUnit": "Auswahl aus der Liste",
        "value": "MDL",
        "readOnly": true,
        "options": [
          {
            "value": "USD",
            "label": "USD — US-Dollar"
          },
          {
            "value": "EUR",
            "label": "EUR — Euro"
          },
          {
            "value": "MDL",
            "label": "MDL — Moldauischer Leu"
          },
          {
            "value": "RON",
            "label": "RON — Rumänischer Leu"
          },
          {
            "value": "UAH",
            "label": "UAH — Hrywnja"
          },
          {
            "value": "PLN",
            "label": "PLN — Polnischer Złoty"
          },
          {
            "value": "GBP",
            "label": "GBP — Pfund Sterling"
          },
          {
            "value": "CHF",
            "label": "CHF — Schweizer Franken"
          },
          {
            "value": "TRY",
            "label": "TRY — Türkische Lira"
          }
        ]
      }
    ],
    "result": {
      "primary": {
        "label": "Ergebnis",
        "value": "4 003,99 L"
      },
      "secondary": [
        {
          "label": "Wechselkurs",
          "value": "1 EUR = 20,0199 MDL"
        },
        {
          "label": "Von",
          "value": "200,00 € (Euro)"
        },
        {
          "label": "Nach",
          "value": "Moldauischer Leu"
        },
        {
          "label": "Art des Kurses",
          "value": "gespeicherter Referenzkurs"
        },
        {
          "label": "Stand der Aktualisierung",
          "value": "Die gespeicherten Kurse haben die letzte Quellenprüfung bestanden.",
          "accent": "neutral"
        },
        {
          "label": "Letzter Aktualisierungsversuch",
          "value": "2026-10-01T14:25:38.145Z"
        },
        {
          "label": "Quelle",
          "value": "Europäische Zentralbank — 2026-10-01",
          "href": "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html",
          "accent": "neutral"
        },
        {
          "label": "Quelle",
          "value": "Nationalbank der Republik Moldau — 2026-10-01",
          "href": "https://www.bnm.md/en/official_exchange_rates",
          "accent": "neutral"
        }
      ],
      "note": "Das sind keine Echtzeitkurse. Verwendet werden gespeicherte Referenzkurse der genannten Quellen; eine Ersatzquelle ist gesondert gekennzeichnet. Banken und Wechselstuben können andere Kurse und Gebühren ansetzen."
    },
    "fixedNativeExcerpts": [
      "4 003,99 L"
    ]
  },
  {
    "id": "usd-to-mdl",
    "locale": "de",
    "path": "/de/waehrungen/usd-in-mdl/",
    "title": "USD in MDL Rechner",
    "h1": "USD in MDL Rechner",
    "htmlLang": "de",
    "query": "amount=100&from=USD&to=MDL",
    "fields": [
      {
        "name": "amount",
        "label": "Betrag",
        "type": "number",
        "unit": null,
        "help": null,
        "staticUnit": "ohne Einheit",
        "value": 100,
        "readOnly": false,
        "options": null
      },
      {
        "name": "from",
        "label": "Ausgangswährung",
        "type": "select",
        "unit": null,
        "help": null,
        "staticUnit": "Auswahl aus der Liste",
        "value": "USD",
        "readOnly": true,
        "options": [
          {
            "value": "USD",
            "label": "USD — US-Dollar"
          },
          {
            "value": "EUR",
            "label": "EUR — Euro"
          },
          {
            "value": "MDL",
            "label": "MDL — Moldauischer Leu"
          },
          {
            "value": "RON",
            "label": "RON — Rumänischer Leu"
          },
          {
            "value": "UAH",
            "label": "UAH — Hrywnja"
          },
          {
            "value": "PLN",
            "label": "PLN — Polnischer Złoty"
          },
          {
            "value": "GBP",
            "label": "GBP — Pfund Sterling"
          },
          {
            "value": "CHF",
            "label": "CHF — Schweizer Franken"
          },
          {
            "value": "TRY",
            "label": "TRY — Türkische Lira"
          }
        ]
      },
      {
        "name": "to",
        "label": "Zielwährung",
        "type": "select",
        "unit": null,
        "help": null,
        "staticUnit": "Auswahl aus der Liste",
        "value": "MDL",
        "readOnly": true,
        "options": [
          {
            "value": "USD",
            "label": "USD — US-Dollar"
          },
          {
            "value": "EUR",
            "label": "EUR — Euro"
          },
          {
            "value": "MDL",
            "label": "MDL — Moldauischer Leu"
          },
          {
            "value": "RON",
            "label": "RON — Rumänischer Leu"
          },
          {
            "value": "UAH",
            "label": "UAH — Hrywnja"
          },
          {
            "value": "PLN",
            "label": "PLN — Polnischer Złoty"
          },
          {
            "value": "GBP",
            "label": "GBP — Pfund Sterling"
          },
          {
            "value": "CHF",
            "label": "CHF — Schweizer Franken"
          },
          {
            "value": "TRY",
            "label": "TRY — Türkische Lira"
          }
        ]
      }
    ],
    "result": {
      "primary": {
        "label": "Ergebnis",
        "value": "1 771,99 L"
      },
      "secondary": [
        {
          "label": "Wechselkurs",
          "value": "1 USD = 17,7199 MDL"
        },
        {
          "label": "Von",
          "value": "100,00 $ (US-Dollar)"
        },
        {
          "label": "Nach",
          "value": "Moldauischer Leu"
        },
        {
          "label": "Art des Kurses",
          "value": "gespeicherter Referenzkurs"
        },
        {
          "label": "Stand der Aktualisierung",
          "value": "Die gespeicherten Kurse haben die letzte Quellenprüfung bestanden.",
          "accent": "neutral"
        },
        {
          "label": "Letzter Aktualisierungsversuch",
          "value": "2026-10-01T14:25:38.145Z"
        },
        {
          "label": "Quelle",
          "value": "Nationalbank der Republik Moldau — 2026-10-01",
          "href": "https://www.bnm.md/en/official_exchange_rates",
          "accent": "neutral"
        }
      ],
      "note": "Das sind keine Echtzeitkurse. Verwendet werden gespeicherte Referenzkurse der genannten Quellen; eine Ersatzquelle ist gesondert gekennzeichnet. Banken und Wechselstuben können andere Kurse und Gebühren ansetzen."
    },
    "fixedNativeExcerpts": [
      "1 771,99 L"
    ]
  },
  {
    "id": "currency-converter",
    "locale": "es",
    "path": "/es/divisas/conversor-divisas/",
    "title": "Conversor de divisas — convierte USD, EUR, MDL y más — Calculadoras",
    "h1": "Conversor de divisas",
    "htmlLang": "es",
    "query": "amount=250&from=GBP&to=RON",
    "fields": [
      {
        "name": "amount",
        "label": "Importe",
        "type": "number",
        "unit": null,
        "help": null,
        "staticUnit": "sin unidad",
        "value": 250,
        "readOnly": false,
        "options": null
      },
      {
        "name": "from",
        "label": "Moneda origen",
        "type": "select",
        "unit": null,
        "help": null,
        "staticUnit": "opción de la lista",
        "value": "GBP",
        "readOnly": false,
        "options": [
          {
            "value": "USD",
            "label": "USD — Dólar estadounidense"
          },
          {
            "value": "EUR",
            "label": "EUR — Euro"
          },
          {
            "value": "MDL",
            "label": "MDL — Leu moldavo"
          },
          {
            "value": "RON",
            "label": "RON — Leu rumano"
          },
          {
            "value": "UAH",
            "label": "UAH — Grivna ucraniana"
          },
          {
            "value": "PLN",
            "label": "PLN — Esloti polaco"
          },
          {
            "value": "GBP",
            "label": "GBP — Libra esterlina"
          },
          {
            "value": "CHF",
            "label": "CHF — Franco suizo"
          },
          {
            "value": "TRY",
            "label": "TRY — Lira turca"
          }
        ]
      },
      {
        "name": "to",
        "label": "Moneda destino",
        "type": "select",
        "unit": null,
        "help": null,
        "staticUnit": "opción de la lista",
        "value": "RON",
        "readOnly": false,
        "options": [
          {
            "value": "USD",
            "label": "USD — Dólar estadounidense"
          },
          {
            "value": "EUR",
            "label": "EUR — Euro"
          },
          {
            "value": "MDL",
            "label": "MDL — Leu moldavo"
          },
          {
            "value": "RON",
            "label": "RON — Leu rumano"
          },
          {
            "value": "UAH",
            "label": "UAH — Grivna ucraniana"
          },
          {
            "value": "PLN",
            "label": "PLN — Esloti polaco"
          },
          {
            "value": "GBP",
            "label": "GBP — Libra esterlina"
          },
          {
            "value": "CHF",
            "label": "CHF — Franco suizo"
          },
          {
            "value": "TRY",
            "label": "TRY — Lira turca"
          }
        ]
      }
    ],
    "result": {
      "primary": {
        "label": "Resultado",
        "value": "1 547,03 lei"
      },
      "secondary": [
        {
          "label": "Tipo de cambio",
          "value": "1 GBP = 6,1881 RON"
        },
        {
          "label": "De",
          "value": "250,00 £ (Libra esterlina)"
        },
        {
          "label": "A",
          "value": "Leu rumano"
        },
        {
          "label": "Tipo de referencia",
          "value": "tipo de referencia guardado"
        },
        {
          "label": "Estado de la actualización",
          "value": "Los tipos guardados superaron la última comprobación de fuentes.",
          "accent": "neutral"
        },
        {
          "label": "Último intento de actualización",
          "value": "2026-10-01T14:25:38.145Z"
        },
        {
          "label": "Fuente",
          "value": "Banco Central Europeo — 2026-10-01",
          "href": "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html",
          "accent": "neutral"
        }
      ],
      "note": "Estos no son tipos en tiempo real. Se usan tipos de referencia guardados de las fuentes indicadas; cualquier fuente de reserva se señala por separado. Los bancos y las casas de cambio pueden aplicar otros tipos y comisiones."
    },
    "fixedNativeExcerpts": [
      "1 547,03 lei"
    ]
  },
  {
    "id": "usd-to-eur",
    "locale": "es",
    "path": "/es/divisas/usd-a-eur/",
    "title": "Conversor USD a EUR — Calculadoras",
    "h1": "Conversor USD a EUR",
    "htmlLang": "es",
    "query": "amount=100&from=USD&to=EUR",
    "fields": [
      {
        "name": "amount",
        "label": "Importe",
        "type": "number",
        "unit": null,
        "help": null,
        "staticUnit": "sin unidad",
        "value": 100,
        "readOnly": false,
        "options": null
      },
      {
        "name": "from",
        "label": "Moneda origen",
        "type": "select",
        "unit": null,
        "help": null,
        "staticUnit": "opción de la lista",
        "value": "USD",
        "readOnly": true,
        "options": [
          {
            "value": "USD",
            "label": "USD — Dólar estadounidense"
          },
          {
            "value": "EUR",
            "label": "EUR — Euro"
          },
          {
            "value": "MDL",
            "label": "MDL — Leu moldavo"
          },
          {
            "value": "RON",
            "label": "RON — Leu rumano"
          },
          {
            "value": "UAH",
            "label": "UAH — Grivna ucraniana"
          },
          {
            "value": "PLN",
            "label": "PLN — Esloti polaco"
          },
          {
            "value": "GBP",
            "label": "GBP — Libra esterlina"
          },
          {
            "value": "CHF",
            "label": "CHF — Franco suizo"
          },
          {
            "value": "TRY",
            "label": "TRY — Lira turca"
          }
        ]
      },
      {
        "name": "to",
        "label": "Moneda destino",
        "type": "select",
        "unit": null,
        "help": null,
        "staticUnit": "opción de la lista",
        "value": "EUR",
        "readOnly": true,
        "options": [
          {
            "value": "USD",
            "label": "USD — Dólar estadounidense"
          },
          {
            "value": "EUR",
            "label": "EUR — Euro"
          },
          {
            "value": "MDL",
            "label": "MDL — Leu moldavo"
          },
          {
            "value": "RON",
            "label": "RON — Leu rumano"
          },
          {
            "value": "UAH",
            "label": "UAH — Grivna ucraniana"
          },
          {
            "value": "PLN",
            "label": "PLN — Esloti polaco"
          },
          {
            "value": "GBP",
            "label": "GBP — Libra esterlina"
          },
          {
            "value": "CHF",
            "label": "CHF — Franco suizo"
          },
          {
            "value": "TRY",
            "label": "TRY — Lira turca"
          }
        ]
      }
    ],
    "result": {
      "primary": {
        "label": "Resultado",
        "value": "88,51 €"
      },
      "secondary": [
        {
          "label": "Tipo de cambio",
          "value": "1 USD = 0,8851 EUR"
        },
        {
          "label": "De",
          "value": "100,00 $ (Dólar estadounidense)"
        },
        {
          "label": "A",
          "value": "Euro"
        },
        {
          "label": "Tipo de referencia",
          "value": "tipo de referencia guardado"
        },
        {
          "label": "Estado de la actualización",
          "value": "Los tipos guardados superaron la última comprobación de fuentes.",
          "accent": "neutral"
        },
        {
          "label": "Último intento de actualización",
          "value": "2026-10-01T14:25:38.145Z"
        },
        {
          "label": "Fuente",
          "value": "Banco Central Europeo — 2026-10-01",
          "href": "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html",
          "accent": "neutral"
        }
      ],
      "note": "Estos no son tipos en tiempo real. Se usan tipos de referencia guardados de las fuentes indicadas; cualquier fuente de reserva se señala por separado. Los bancos y las casas de cambio pueden aplicar otros tipos y comisiones."
    },
    "fixedNativeExcerpts": [
      "88,51 €"
    ]
  },
  {
    "id": "eur-to-mdl",
    "locale": "es",
    "path": "/es/divisas/eur-a-mdl/",
    "title": "Conversor EUR a MDL — Calculadoras",
    "h1": "Conversor EUR a MDL",
    "htmlLang": "es",
    "query": "amount=200&from=EUR&to=MDL",
    "fields": [
      {
        "name": "amount",
        "label": "Importe",
        "type": "number",
        "unit": null,
        "help": null,
        "staticUnit": "sin unidad",
        "value": 200,
        "readOnly": false,
        "options": null
      },
      {
        "name": "from",
        "label": "Moneda origen",
        "type": "select",
        "unit": null,
        "help": null,
        "staticUnit": "opción de la lista",
        "value": "EUR",
        "readOnly": true,
        "options": [
          {
            "value": "USD",
            "label": "USD — Dólar estadounidense"
          },
          {
            "value": "EUR",
            "label": "EUR — Euro"
          },
          {
            "value": "MDL",
            "label": "MDL — Leu moldavo"
          },
          {
            "value": "RON",
            "label": "RON — Leu rumano"
          },
          {
            "value": "UAH",
            "label": "UAH — Grivna ucraniana"
          },
          {
            "value": "PLN",
            "label": "PLN — Esloti polaco"
          },
          {
            "value": "GBP",
            "label": "GBP — Libra esterlina"
          },
          {
            "value": "CHF",
            "label": "CHF — Franco suizo"
          },
          {
            "value": "TRY",
            "label": "TRY — Lira turca"
          }
        ]
      },
      {
        "name": "to",
        "label": "Moneda destino",
        "type": "select",
        "unit": null,
        "help": null,
        "staticUnit": "opción de la lista",
        "value": "MDL",
        "readOnly": true,
        "options": [
          {
            "value": "USD",
            "label": "USD — Dólar estadounidense"
          },
          {
            "value": "EUR",
            "label": "EUR — Euro"
          },
          {
            "value": "MDL",
            "label": "MDL — Leu moldavo"
          },
          {
            "value": "RON",
            "label": "RON — Leu rumano"
          },
          {
            "value": "UAH",
            "label": "UAH — Grivna ucraniana"
          },
          {
            "value": "PLN",
            "label": "PLN — Esloti polaco"
          },
          {
            "value": "GBP",
            "label": "GBP — Libra esterlina"
          },
          {
            "value": "CHF",
            "label": "CHF — Franco suizo"
          },
          {
            "value": "TRY",
            "label": "TRY — Lira turca"
          }
        ]
      }
    ],
    "result": {
      "primary": {
        "label": "Resultado",
        "value": "4 003,99 L"
      },
      "secondary": [
        {
          "label": "Tipo de cambio",
          "value": "1 EUR = 20,0199 MDL"
        },
        {
          "label": "De",
          "value": "200,00 € (Euro)"
        },
        {
          "label": "A",
          "value": "Leu moldavo"
        },
        {
          "label": "Tipo de referencia",
          "value": "tipo de referencia guardado"
        },
        {
          "label": "Estado de la actualización",
          "value": "Los tipos guardados superaron la última comprobación de fuentes.",
          "accent": "neutral"
        },
        {
          "label": "Último intento de actualización",
          "value": "2026-10-01T14:25:38.145Z"
        },
        {
          "label": "Fuente",
          "value": "Banco Central Europeo — 2026-10-01",
          "href": "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html",
          "accent": "neutral"
        },
        {
          "label": "Fuente",
          "value": "Banco Nacional de Moldavia — 2026-10-01",
          "href": "https://www.bnm.md/en/official_exchange_rates",
          "accent": "neutral"
        }
      ],
      "note": "Estos no son tipos en tiempo real. Se usan tipos de referencia guardados de las fuentes indicadas; cualquier fuente de reserva se señala por separado. Los bancos y las casas de cambio pueden aplicar otros tipos y comisiones."
    },
    "fixedNativeExcerpts": [
      "4 003,99 L"
    ]
  },
  {
    "id": "usd-to-mdl",
    "locale": "es",
    "path": "/es/divisas/usd-a-mdl/",
    "title": "Conversor USD a MDL — Calculadoras",
    "h1": "Conversor USD a MDL",
    "htmlLang": "es",
    "query": "amount=100&from=USD&to=MDL",
    "fields": [
      {
        "name": "amount",
        "label": "Importe",
        "type": "number",
        "unit": null,
        "help": null,
        "staticUnit": "sin unidad",
        "value": 100,
        "readOnly": false,
        "options": null
      },
      {
        "name": "from",
        "label": "Moneda origen",
        "type": "select",
        "unit": null,
        "help": null,
        "staticUnit": "opción de la lista",
        "value": "USD",
        "readOnly": true,
        "options": [
          {
            "value": "USD",
            "label": "USD — Dólar estadounidense"
          },
          {
            "value": "EUR",
            "label": "EUR — Euro"
          },
          {
            "value": "MDL",
            "label": "MDL — Leu moldavo"
          },
          {
            "value": "RON",
            "label": "RON — Leu rumano"
          },
          {
            "value": "UAH",
            "label": "UAH — Grivna ucraniana"
          },
          {
            "value": "PLN",
            "label": "PLN — Esloti polaco"
          },
          {
            "value": "GBP",
            "label": "GBP — Libra esterlina"
          },
          {
            "value": "CHF",
            "label": "CHF — Franco suizo"
          },
          {
            "value": "TRY",
            "label": "TRY — Lira turca"
          }
        ]
      },
      {
        "name": "to",
        "label": "Moneda destino",
        "type": "select",
        "unit": null,
        "help": null,
        "staticUnit": "opción de la lista",
        "value": "MDL",
        "readOnly": true,
        "options": [
          {
            "value": "USD",
            "label": "USD — Dólar estadounidense"
          },
          {
            "value": "EUR",
            "label": "EUR — Euro"
          },
          {
            "value": "MDL",
            "label": "MDL — Leu moldavo"
          },
          {
            "value": "RON",
            "label": "RON — Leu rumano"
          },
          {
            "value": "UAH",
            "label": "UAH — Grivna ucraniana"
          },
          {
            "value": "PLN",
            "label": "PLN — Esloti polaco"
          },
          {
            "value": "GBP",
            "label": "GBP — Libra esterlina"
          },
          {
            "value": "CHF",
            "label": "CHF — Franco suizo"
          },
          {
            "value": "TRY",
            "label": "TRY — Lira turca"
          }
        ]
      }
    ],
    "result": {
      "primary": {
        "label": "Resultado",
        "value": "1 771,99 L"
      },
      "secondary": [
        {
          "label": "Tipo de cambio",
          "value": "1 USD = 17,7199 MDL"
        },
        {
          "label": "De",
          "value": "100,00 $ (Dólar estadounidense)"
        },
        {
          "label": "A",
          "value": "Leu moldavo"
        },
        {
          "label": "Tipo de referencia",
          "value": "tipo de referencia guardado"
        },
        {
          "label": "Estado de la actualización",
          "value": "Los tipos guardados superaron la última comprobación de fuentes.",
          "accent": "neutral"
        },
        {
          "label": "Último intento de actualización",
          "value": "2026-10-01T14:25:38.145Z"
        },
        {
          "label": "Fuente",
          "value": "Banco Nacional de Moldavia — 2026-10-01",
          "href": "https://www.bnm.md/en/official_exchange_rates",
          "accent": "neutral"
        }
      ],
      "note": "Estos no son tipos en tiempo real. Se usan tipos de referencia guardados de las fuentes indicadas; cualquier fuente de reserva se señala por separado. Los bancos y las casas de cambio pueden aplicar otros tipos y comisiones."
    },
    "fixedNativeExcerpts": [
      "1 771,99 L"
    ]
  }
];
const normalize = (value: string) => value.replace(/[\s\u00a0\u202f]+/g, ' ').trim();
function amountUnit(sample: Sample): string {
  if (sample.id === 'currency-converter') return selectedCurrencyUnits[sample.locale];
  return sample.id === 'eur-to-mdl' ? 'EUR' : 'USD';
}
function numericPrefix(value: string, locale: Locale): number {
  const withoutSpaces = value.replace(/[\s\u00a0\u202f]/g, '');
  const native = locale === 'en' ? withoutSpaces.replaceAll(',', '') : withoutSpaces.replace(',', '.');
  const prefix = native.match(/^[+−-]?\d+(?:\.\d+)?/);
  expect(prefix, 'existing currency primary must have a finite numeric prefix').not.toBeNull();
  return Number(prefix![0].replace('−', '-'));
}
async function ready(page: Page, sample: Sample) {
  const island = page.getByTestId(`calculator-island-${sample.id}`);
  await expect(island).toBeVisible();
  const host = island.locator('xpath=ancestor::astro-island[1]');
  await expect(host).toHaveCount(1);
  await expect.poll(() => host.getAttribute('ssr'), { timeout: 20_000 }).toBe(null);
  await expect(page.getByTestId('field-amount')).toHaveValue(String(sample.fields.find(f => f.name === 'amount')!.value));
  await expect(page.getByTestId('calc-result-primary')).toHaveText(sample.result.primary.value);
}
async function staticFields(page: Page, sample: Sample) {
  const actual = await page.getByTestId('calculator-fields').locator('li').evaluateAll(elements =>
    elements.map(element => ({ label: element.querySelector('strong')?.textContent ?? '', text: element.textContent ?? '' })));
  expect(actual).toHaveLength(sample.fields.length);
  for (const [index, field] of sample.fields.entries()) {
    const unit = field.name === 'amount' ? amountUnit(sample) : field.staticUnit;
    expect(normalize(actual[index].label)).toBe(normalize(field.label));
    expect(normalize(actual[index].text)).toBe(normalize(`${field.label} — ${unit}${field.help ? `. ${field.help}` : ''}`));
  }
}
async function controlsAndResult(page: Page, sample: Sample) {
  await staticFields(page, sample);
  await expect(page).toHaveTitle(sample.title);
  await expect(page.locator('html')).toHaveAttribute('lang', sample.htmlLang);
  await expect(page.locator('h1')).toHaveText(sample.h1);
  expect(new URL(page.url()).pathname).toBe(sample.path);
  for (const field of sample.fields) {
    const input = page.getByTestId(`field-${field.name}`);
    await expect(input).toHaveValue(String(field.value));
    const dynamicLabel = field.label + (field.unit ? ` (${field.unit})` : '');
    await expect(page.getByTestId(`field-label-${field.name}`)).toHaveText(dynamicLabel);
    if (field.type === 'select') {
      await expect(input).toHaveJSProperty('disabled', field.readOnly);
      const actualOptions = await input.locator('option').evaluateAll(elements =>
        elements.map(element => ({ value: (element as HTMLOptionElement).value, label: element.textContent ?? '' })));
      expect(actualOptions.map(option => ({ ...option, label: normalize(option.label) }))).toEqual(field.options!.map(option => ({ ...option, label: normalize(option.label) })));
    }
  }
  const selectedSource = sample.fields.find(field => field.name === 'from')!.value;
  const selectedTarget = sample.fields.find(field => field.name === 'to')!.value;
  if (sample.id === 'currency-converter') {
    expect([selectedSource, selectedTarget]).toEqual(['GBP', 'RON']);
    await expect(page.getByTestId('field-from')).toBeEnabled();
    await expect(page.getByTestId('field-to')).toBeEnabled();
  } else {
    const pair = fixedPairs[sample.id];
    expect([selectedSource, selectedTarget]).toEqual([pair.from, pair.to]);
    await expect(page.getByTestId('field-from')).toBeDisabled();
    await expect(page.getByTestId('field-to')).toBeDisabled();
    expect(amountUnit(sample)).toBe(pair.from);
  }
  const primary = page.getByTestId('calc-result-primary');
  await expect(primary).toHaveText(sample.result.primary.value);
  expect(numericPrefix(await primary.innerText(), sample.locale)).toBe(fixedNumericControls[sample.id]);
  const result = page.getByTestId('calc-result-wrap');
  const actualRows = await result.locator('[data-testid^="calc-result-row-"]').evaluateAll(elements =>
    elements.map(element => ({ label: element.querySelector('dt')?.textContent ?? '', value: element.querySelector('dd')?.textContent ?? '', href: element.querySelector('dd a')?.getAttribute('href') ?? null })));
  expect(actualRows.map(row => ({ ...row, label: normalize(row.label), value: normalize(row.value) }))).toEqual(sample.result.secondary.map(row => ({ label: normalize(row.label), value: normalize(row.value), href: row.href ?? null })));
  for (const literal of sample.fixedNativeExcerpts) expect(normalize(await result.innerText())).toContain(normalize(literal));
  await expect(page.locator('[data-testid^="field-error-"]')).toHaveCount(0);
  await expect(page.getByTestId('calc-result-invalid')).toHaveCount(0);
  await expect(page.getByTestId('calc-result-empty')).toHaveCount(0);
  await expect(result).not.toContainText(/NaN|Infinity|undefined|\[object Object\]/);
  expect(await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1)).toBe(false);
}
for (const width of [390, 1365]) {
  for (const sample of samples) {
    test(`currency-static-unit ${width}px ${sample.locale} ${sample.id}: source units, saved literal result and reload`, async ({ page }, info) => {
      test.setTimeout(60_000); // Fixed-pair cases make four actual navigations/reloads.
      expect(samples).toHaveLength(20);
      expect(new Set(samples.map(row => `${row.id}/${row.locale}`)).size).toBe(20);
      expect(beforeFixtureSHA256).toHaveLength(64);
      expect(beforeSourceAggregateSHA256).toHaveLength(64);
      await page.setViewportSize({ width, height: 950 });
      await page.context().route('**/*', route => {
        const url = route.request().url();
        if (/^(?:data:|blob:)/.test(url) || ['localhost', '127.0.0.1', '::1', '[::1]'].includes(new URL(url).hostname)) return route.continue();
        return route.abort();
      });
      const pageErrors: string[] = [];
      page.on('pageerror', error => pageErrors.push(error.message));
      const response = await page.goto(`${sample.path}?${sample.query}`, { waitUntil: 'domcontentloaded', timeout: 25_000 });
      expect(response?.status()).toBe(200);
      await ready(page, sample);
      await controlsAndResult(page, sample);
      if (width === 390 && (sample.id === 'currency-converter' || (sample.id === 'eur-to-mdl' && sample.locale === 'uk'))) {
        // Six actual card captures only: five native main-converter cards and
        // the Ukrainian EUR preset. Centering the complete card keeps the
        // sticky navigation outside the selected region; no DOM/CSS mutation.
        const card = page.getByTestId('calculator-fields');
        await card.evaluate(element => element.scrollIntoView({ block: 'center', inline: 'nearest' }));
        await expect(card).toBeInViewport();
        const box = await card.boundingBox();
        expect(box).not.toBeNull();
        expect(box!.width).toBeLessThanOrEqual(width);
        await info.attach(`currency-static-fields-${sample.locale}-${sample.id}-390px`, {
          body: await card.screenshot(), contentType: 'image/png',
        });
      }
      const reloadResponse = await page.reload({ waitUntil: 'domcontentloaded', timeout: 25_000 });
      expect(reloadResponse?.status()).toBe(200);
      await ready(page, sample);
      await controlsAndResult(page, sample);
      if (sample.id !== 'currency-converter') {
        // Read-only pair selectors ignore malicious query values. The amount
        // and established saved-quote output remain the same literal scenario.
        const malicious = new URLSearchParams(sample.query);
        malicious.set('from', 'GBP');
        malicious.set('to', 'RON');
        const maliciousResponse = await page.goto(`${sample.path}?${malicious}`, { waitUntil: 'domcontentloaded', timeout: 25_000 });
        expect(maliciousResponse?.status()).toBe(200);
        await ready(page, sample);
        await controlsAndResult(page, sample);
        const maliciousReload = await page.reload({ waitUntil: 'domcontentloaded', timeout: 25_000 });
        expect(maliciousReload?.status()).toBe(200);
        await ready(page, sample);
        await controlsAndResult(page, sample);
      }
      expect(pageErrors).toEqual([]);
    });
  }
}
