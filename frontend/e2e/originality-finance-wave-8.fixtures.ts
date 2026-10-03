// Immutable publication fixtures for the frozen FinanceWave8 candidate.
// Route/body/help/source metadata is copied from the captured owned candidate,
// not from a live registry. Numeric literals below are independently derived
// with Decimal algebra and verified by a separate oracle ledger.
export const locales = ['ru', 'en', 'uk', 'de', 'es'] as const;
export type Locale = (typeof locales)[number];
export type Values = Record<string, string | number>;
export type RowExpectation = { index: number; value: number };
export type BrowserCase = {
  id: string; inputs: Values; expected: number; rows: RowExpectation[];
  defaults: Values; defaultExpected: number; blankField: string;
  domainField: string; domainInvalid: number;
  primaryUnit: 'money' | 'percent' | 'years'; moneyRows: number[]; moneyFields: string[];
  optionalAmount?: string; optionalRowCount?: number;
  boundary: { inputs: Values; expected: number; rows: RowExpectation[]; rowCount: number };
  pages: Record<Locale, { path: string; h1: string; longDescription: string; howToUse: string[]; howItWorks: string; example: string;
    disclaimer: string; faq: { q: string; a: string }[]; help: Record<string, string>; sources: string[] }>;
};
export const cases: readonly BrowserCase[] = [
  {
    "id": "inflation",
    "inputs": {
      "amount": 100,
      "ratePct": 21,
      "years": 0.5
    },
    "expected": 90.91,
    "rows": [
      {
        "index": 0,
        "value": 110
      },
      {
        "index": 1,
        "value": 9.09
      },
      {
        "index": 2,
        "value": 9.09
      },
      {
        "index": 3,
        "value": 1.1
      }
    ],
    "blankField": "amount",
    "domainField": "ratePct",
    "domainInvalid": -100,
    "boundary": {
      "inputs": {
        "amount": 100,
        "ratePct": -20,
        "years": 2
      },
      "expected": 156.25,
      "rows": [
        {
          "index": 0,
          "value": 64
        },
        {
          "index": 1,
          "value": -56.25
        },
        {
          "index": 2,
          "value": -56.25
        },
        {
          "index": 3,
          "value": 0.64
        }
      ],
      "rowCount": 4
    },
    "defaultExpected": 46319.35,
    "primaryUnit": "money",
    "moneyRows": [
      0,
      1
    ],
    "defaults": {
      "amount": 100000,
      "ratePct": 8,
      "years": 10
    },
    "moneyFields": [
      "amount"
    ],
    "pages": {
      "ru": {
        "path": "/ru/finance/inflation/",
        "h1": "Калькулятор инфляции",
        "longDescription": "Показывает две стороны изменения цен: что сможет купить неизменная денежная сумма в будущем и сколько будущих денег понадобится для сегодняшней корзины. При постоянных 8 % в год цены за десять лет вырастают в 2,1589 раза, поэтому покупательная способность уменьшается на 53,68 %, а не на 80 %. Каждый год растёт уровень цен; деньги не уменьшаются на 8 % ежегодно. Ставка задаёт сценарий, а не прогноз или автоматически загруженный индекс.",
        "howToUse": [
          "Введите сумму в сегодняшних деньгах.",
          "Укажите ожидаемую годовую инфляцию.",
          "Введите срок в годах.",
          "Ставка — ваше допущение, а не прогноз."
        ],
        "howItWorks": "Обозначим годовую инфляцию в процентах p, срок в годах t и сумму A. Множитель цен F = (1+p/100)^t; покупательная способность = A/F; цена сегодняшней корзины в будущем = A×F. Потеря = A−A/F, её доля = (1−1/F)×100 %. Срок может быть дробным и используется без округления. p должно быть больше −100 %. При дефляции потеря отрицательна: это рост покупательной способности. Денежные суммы выражены в одной валюте, обменного курса нет.",
        "example": "100 000 ₽ при инфляции 8 % за 10 лет сохранят покупательную способность лишь 46 319,35 ₽ — потеря 53,68 %. При нулевой инфляции покупательная способность и сумма будущей корзины совпадают с исходной, потеря равна нулю.",
        "disclaimer": "Постоянная заданная инфляция и неизменная сумма без дохода. Разные годовые ставки, личная структура расходов, налоги, доходность вложений и валютный курс не моделируются. За пределами числовой точности расчёт показывает ошибку.",
        "faq": [
          {
            "q": "Почему 8 % за 10 лет — это не 80 %?",
            "a": "Потому что цены умножаются на 1,08 каждый год. Через десять лет 100 000 делятся на 1,08^10 и дают 46 319,35 в сегодняшних ценах; потеря 53,68 %."
          },
          {
            "q": "Чем «покупательная способность» отличается от «столько же в будущих деньгах»?",
            "a": "Это две стороны одного множителя. Первая отвечает, что можно будет купить на сегодняшние 100 000 ₽; вторая — сколько будущих рублей понадобится, чтобы купить то же, что сегодня на 100 000 ₽."
          },
          {
            "q": "Брать официальный индекс или свою оценку?",
            "a": "Используйте индекс, соответствующий корзине и периоду задачи, либо явно заданное допущение для будущего. Средний потребительский индекс может отличаться от вашей структуры расходов; личная оценка сама по себе не является более точным прогнозом."
          },
          {
            "q": "Можно ли задать отрицательную инфляцию?",
            "a": "Да, при ставке больше −100 %. Например, −20 % за два года дают множитель цен 0,64: 100 денежных единиц сохраняют покупательную способность 156,25, а строка потери равна −56,25."
          },
          {
            "q": "Как защитить деньги от инфляции?",
            "a": "Расчёт этого не советует и советовать не может. Он показывает лишь масштаб потери, а выбор инструментов зависит от срока, риска и вашей ситуации."
          }
        ],
        "help": {
          "ratePct": "Постоянное годовое изменение цен в процентах; отрицательное значение выше −100 % означает дефляцию. Это введённое предположение.",
          "years": "Дробные годы используются без округления: это продолжение модели постоянного годового роста цен, а не опубликованный индекс для части года."
        },
        "sources": [
          "https://www.bls.gov/cpi/factsheets/purchasing-power-constant-dollars.htm",
          "https://www.bls.gov/cpi/factsheets/averages-and-individual-experiences-differ.htm"
        ]
      },
      "en": {
        "path": "/en/finance/inflation-calculator/",
        "h1": "Inflation calculator",
        "longDescription": "Shows two sides of changing prices: what an unchanged cash amount can buy later, and how much future cash would buy today’s basket. With a constant 8% annual price rise, prices become 2.1589 times higher over ten years, so purchasing power falls by 53.68%, rather than 80%. The price level compounds; the cash balance is not reduced by 8% each year. The entered rate is a scenario, not a forecast or a downloaded index.",
        "howToUse": [
          "Enter the amount in today's money.",
          "Enter the expected annual inflation.",
          "Enter the term in years.",
          "The rate is your assumption, not a forecast."
        ],
        "howItWorks": "For annual inflation p in percent, duration t in years and amount A: price factor F = (1+p/100)^t; purchasing power = A/F; future cost of today’s basket = A×F. Loss = A−A/F and share lost = (1−1/F)×100%. Fractional years are used without rounding. Inflation must exceed −100%. Deflation produces a negative loss, meaning a purchasing-power gain. All amounts use one currency; no exchange rate is applied.",
        "example": "100,000 at 8% inflation over 10 years keeps the purchasing power of only 46,319.35 — a loss of 53.68%. With zero inflation, purchasing power and the future basket cost equal the starting amount, with no loss.",
        "disclaimer": "Constant entered inflation and an unchanged balance with no earnings. Changing yearly rates, personal spending weights, taxes, investment returns and exchange rates are not modelled. Results beyond numeric precision produce an error.",
        "faq": [
          {
            "q": "Why isn't 8% over 10 years equal to 80%?",
            "a": "Prices multiply by 1.08 each year. After ten years, 100,000 divided by 1.08^10 is 46,319.35 in today’s prices, a 53.68% loss."
          },
          {
            "q": "How do «purchasing power» and «the same in future money» differ?",
            "a": "They are two sides of the same factor. The first says what today's 100,000 will buy later; the second says how many future units it would take to buy what 100,000 buys now."
          },
          {
            "q": "Should I use the official index or my own estimate?",
            "a": "Use an index matching the basket and period, or an explicit assumption for a future scenario. An average consumer index may differ from your spending pattern; a personal estimate is not automatically a better forecast."
          },
          {
            "q": "Can I enter negative inflation?",
            "a": "Yes, above −100%. At −20% for two years, the price factor is 0.64: 100 monetary units retain purchasing power of 156.25, with a loss of −56.25."
          },
          {
            "q": "How do I protect money from inflation?",
            "a": "This calculation does not advise and cannot. It only shows the scale of the loss; which instruments suit you depends on your horizon, risk tolerance and circumstances."
          }
        ],
        "help": {
          "ratePct": "Assumed constant annual price change in percent; a negative value above −100% represents deflation.",
          "years": "Fractional years are used without rounding: this extends a constant annual price-growth model rather than supplying a published partial-year index."
        },
        "sources": [
          "https://www.bls.gov/cpi/factsheets/purchasing-power-constant-dollars.htm",
          "https://www.bls.gov/cpi/factsheets/averages-and-individual-experiences-differ.htm"
        ]
      },
      "uk": {
        "path": "/uk/finansy/inflyatsiya/",
        "h1": "Калькулятор інфляції",
        "longDescription": "Показує дві сторони зміни цін: що зможе купити незмінна сума грошей у майбутньому та скільки майбутніх грошей потрібно для сьогоднішнього кошика. За сталих 8 % на рік ціни за десять років зростають у 2,1589 раза, тому купівельна спроможність падає на 53,68 %, а не на 80 %. Щороку зростає рівень цін; сама сума не зменшується на 8 %. Введена ставка є сценарієм, а не прогнозом чи завантаженим індексом.",
        "howToUse": [
          "Введіть суму сьогодні.",
          "Введіть очікувану річну інфляцію.",
          "Задайте кількість років."
        ],
        "howItWorks": "Для річної інфляції p у відсотках, строку t у роках і суми A множник цін F = (1+p/100)^t. Купівельна спроможність = A/F; майбутня ціна сьогоднішнього кошика = A×F. Втрата = A−A/F, частка втрати = (1−1/F)×100 %. Дробові роки використовуються без округлення. Інфляція має бути більшою за −100 %. За дефляції втрата від’ємна, тобто спроможність зростає. Усі суми в одній валюті, без обмінного курсу.",
        "example": "100 000 ₴ за інфляції 8 % за 10 років збережуть купівельну спроможність лише 46 319,35 ₴ — втрата 53,68 %. Проста арифметика підказала б 80 % втрати, і вона хибна. За нульової інфляції спроможність і майбутня ціна кошика дорівнюють початковій сумі, втрата нульова.",
        "disclaimer": "Стала введена інфляція та незмінна сума без доходу. Різні річні ставки, особистий склад витрат, податки, дохідність вкладень і валютний курс не моделюються. За межами числової точності показується помилка.",
        "faq": [
          {
            "q": "Чому втрата за 8 % інфляції не дорівнює 8 % щороку?",
            "a": "Ціни щороку множаться на 1,08. Через десять років 100 000, поділені на 1,08^10, дають 46 319,35 у сьогоднішніх цінах, тобто втрату 53,68 %."
          },
          {
            "q": "Який індекс обрати для інфляційного сценарію?",
            "a": "Виберіть індекс для відповідного кошика та періоду або явно задайте припущення для майбутнього. Середній індекс може відрізнятися від ваших витрат; особиста оцінка не стає автоматично точнішим прогнозом."
          },
          {
            "q": "Що означає від’ємна втрата купівельної спроможності?",
            "a": "Так, якщо ставка більша за −100 %. За −20 % протягом двох років множник цін дорівнює 0,64: купівельна спроможність 100 одиниць становить 156,25, а втрата −56,25."
          },
          {
            "q": "Чи визначає інфляційний розрахунок потрібне вкладення?",
            "a": "Ні. Він показує зміну купівельної спроможності за припущенням. Ризик, комісії, податки та доступність грошей потребують окремої оцінки."
          }
        ],
        "help": {
          "ratePct": "Припущена стала річна зміна цін у відсотках; від’ємне значення понад −100 % означає дефляцію.",
          "years": "Дробові роки використовуються без округлення: це продовження моделі сталого річного зростання цін, а не опублікований індекс за частину року."
        },
        "sources": [
          "https://www.bls.gov/cpi/factsheets/purchasing-power-constant-dollars.htm",
          "https://www.bls.gov/cpi/factsheets/averages-and-individual-experiences-differ.htm"
        ]
      },
      "de": {
        "path": "/de/finanzen/inflation-rechner/",
        "h1": "Inflationsrechner",
        "longDescription": "Zeigt beide Seiten veränderter Preise: was ein unveränderter Geldbetrag später kaufen kann und welcher künftige Betrag den heutigen Warenkorb bezahlt. Bei konstant 8 % Inflation im Jahr steigen die Preise in zehn Jahren auf das 2,1589-Fache; die Kaufkraft sinkt damit um 53,68 % statt um 80 %. Das Preisniveau wächst jährlich, der Geldbetrag wird nicht jedes Jahr um 8 % gekürzt. Der eingegebene Satz ist ein Szenario, keine Prognose oder automatisch geladene Statistik.",
        "howToUse": [
          "Trage den Betrag in heutigem Geld ein.",
          "Trage die erwartete jährliche Inflation ein.",
          "Trage den Zeitraum in Jahren ein.",
          "Der Satz ist deine Annahme und keine Vorhersage."
        ],
        "howItWorks": "Bei jährlicher Inflation p in Prozent, Laufzeit t in Jahren und Betrag A gilt: Preisfaktor F = (1+p/100)^t; Kaufkraft = A/F; künftiger Preis des heutigen Warenkorbs = A×F. Verlust = A−A/F, Verlustanteil = (1−1/F)×100 %. Bruchteile von Jahren werden nicht gerundet. Die Inflation muss über −100 % liegen. Bei Deflation ist der Verlust negativ und die Kaufkraft steigt. Alle Beträge verwenden dieselbe Währung ohne Wechselkurs.",
        "example": "10 000 € behalten bei 8 % Inflation über 10 Jahre die Kaufkraft von nur 4631,94 € — ein Verlust von 53,68 %. Bei Inflation null entsprechen Kaufkraft und künftiger Warenkorb dem Anfangsbetrag; der Verlust ist null.",
        "disclaimer": "Konstante eingegebene Inflation und unveränderter Betrag ohne Erträge. Wechselnde Jahresraten, persönliche Ausgabenanteile, Steuern, Anlagerenditen und Wechselkurse werden nicht modelliert. Außerhalb der numerischen Genauigkeit erscheint eine Fehlermeldung.",
        "faq": [
          {
            "q": "Warum sind 8 % über 10 Jahre nicht 80 %?",
            "a": "Die Preise werden jährlich mit 1,08 multipliziert. Nach zehn Jahren ergeben 100 000 geteilt durch 1,08^10 eine Kaufkraft von 46 319,35 zu heutigen Preisen: 53,68 % Verlust."
          },
          {
            "q": "Wie unterscheiden sich „Kaufkraft“ und „derselbe Wert in künftigem Geld“?",
            "a": "Es sind zwei Seiten desselben Faktors. Die erste sagt, was heutige 10 000 € später kaufen; die zweite, wie viele künftige Einheiten es bräuchte, um zu kaufen, was 10 000 € heute kaufen."
          },
          {
            "q": "Amtlicher Index oder eigene Schätzung?",
            "a": "Nutze einen Index für den passenden Warenkorb und Zeitraum oder eine ausdrückliche Annahme für die Zukunft. Ein durchschnittlicher Verbraucherindex kann von deinen Ausgaben abweichen; eine persönliche Schätzung ist nicht automatisch die bessere Prognose."
          },
          {
            "q": "Darf ich eine negative Inflation eintragen?",
            "a": "Ja, oberhalb von −100 %. Bei −20 % über zwei Jahre beträgt der Preisfaktor 0,64: 100 Geldeinheiten besitzen Kaufkraft von 156,25; der Verlust ist −56,25."
          },
          {
            "q": "Wie schütze ich Geld vor der Inflation?",
            "a": "Diese Rechnung berät nicht und kann es nicht. Sie zeigt allein das Ausmaß des Verlusts; welche Anlagen zu dir passen, hängt von deinem Zeitraum, deiner Risikobereitschaft und deinen Umständen ab."
          }
        ],
        "help": {
          "ratePct": "Angenommene konstante jährliche Preisänderung in Prozent; ein negativer Wert über −100 % steht für Deflation.",
          "years": "Gebrochene Jahre werden nicht gerundet: das setzt ein Modell konstanten jährlichen Preiswachstums fort und liefert keinen veröffentlichten Teiljahresindex."
        },
        "sources": [
          "https://www.bls.gov/cpi/factsheets/purchasing-power-constant-dollars.htm",
          "https://www.bls.gov/cpi/factsheets/averages-and-individual-experiences-differ.htm"
        ]
      },
      "es": {
        "path": "/es/finanzas/calculadora-de-inflacion/",
        "h1": "Calculadora de inflación",
        "longDescription": "Muestra dos caras del cambio de precios: qué comprará una cantidad de dinero que no cambia y cuánto dinero futuro permitirá comprar la cesta actual. Con una subida constante del 8 % anual, los precios se multiplican por 2,1589 en diez años; el poder adquisitivo cae un 53,68 %, en vez de un 80 %. Crece el nivel de precios; el saldo no se reduce un 8 % cada año. La tasa introducida es un escenario, no una previsión ni un índice descargado.",
        "howToUse": [
          "Introduce la cantidad en dinero de hoy.",
          "Introduce la inflación anual prevista.",
          "Introduce el plazo en años.",
          "El tipo es tu suposición, no una previsión."
        ],
        "howItWorks": "Para inflación anual p en porcentaje, plazo t en años e importe A: factor de precios F = (1+p/100)^t; poder adquisitivo = A/F; coste futuro de la cesta actual = A×F. Pérdida = A−A/F; parte perdida = (1−1/F)×100 %. Los años fraccionarios se usan sin redondearlos. La inflación debe superar −100 %. La deflación da una pérdida negativa, es decir, una ganancia de poder adquisitivo. Todos los importes usan una moneda, sin conversión.",
        "example": "10 000 con un 8 % de inflación durante 10 años conservan el poder adquisitivo de solo 4631,94: una pérdida del 53,68 %. Con inflación cero, el poder adquisitivo y el coste futuro de la cesta igualan el importe inicial, sin pérdida.",
        "disclaimer": "Inflación introducida constante y saldo sin rendimientos. No se modelan tasas anuales variables, pesos del gasto personal, impuestos, rentabilidad de inversiones ni tipos de cambio. Fuera de la precisión numérica se muestra un error.",
        "faq": [
          {
            "q": "¿Por qué un 8 % durante 10 años no es un 80 %?",
            "a": "Los precios se multiplican por 1,08 cada año. Tras diez años, 100 000 divididos entre 1,08^10 equivalen a 46 319,35 a precios actuales: una pérdida del 53,68 %."
          },
          {
            "q": "¿En qué se diferencian «poder adquisitivo» y «lo mismo en dinero futuro»?",
            "a": "Son dos caras del mismo multiplicador. La primera dice qué comprarán más adelante los 10 000 de hoy; la segunda, cuántas unidades futuras harían falta para comprar lo que compran ahora 10 000."
          },
          {
            "q": "¿Debo usar el índice oficial o mi propia estimación?",
            "a": "Usa un índice de la cesta y el periodo adecuados o una hipótesis explícita para el futuro. El índice medio puede diferir de tu gasto personal; una estimación propia no es automáticamente una previsión más exacta."
          },
          {
            "q": "¿Puedo introducir una inflación negativa?",
            "a": "Sí, siempre que supere −100 %. Con −20 % durante dos años el factor es 0,64: 100 unidades conservan un poder adquisitivo de 156,25 y la pérdida es −56,25."
          },
          {
            "q": "¿Cómo protejo el dinero de la inflación?",
            "a": "Este cálculo no aconseja ni puede hacerlo. Solo muestra la magnitud de la pérdida; qué instrumentos te convienen depende de tu horizonte, tu tolerancia al riesgo y tus circunstancias."
          }
        ],
        "help": {
          "ratePct": "Cambio anual constante de precios supuesto, en porcentaje; un valor negativo superior a −100 % representa deflación.",
          "years": "Los años fraccionarios se usan sin redondear: prolongan un modelo de crecimiento anual constante de precios, sin aportar un índice publicado para parte del año."
        },
        "sources": [
          "https://www.bls.gov/cpi/factsheets/purchasing-power-constant-dollars.htm",
          "https://www.bls.gov/cpi/factsheets/averages-and-individual-experiences-differ.htm"
        ]
      }
    }
  },
  {
    "id": "real-return",
    "inputs": {
      "nominal": 12,
      "inflation": 7,
      "amount": 100000,
      "years": 1.5
    },
    "expected": 4.67,
    "rows": [
      {
        "index": 0,
        "value": 5
      },
      {
        "index": 1,
        "value": 0.33
      },
      {
        "index": 2,
        "value": 12
      },
      {
        "index": 3,
        "value": 7
      },
      {
        "index": 4,
        "value": 107090.6
      },
      {
        "index": 5,
        "value": 118529.66
      }
    ],
    "blankField": "nominal",
    "domainField": "inflation",
    "domainInvalid": -100,
    "boundary": {
      "inputs": {
        "nominal": -100,
        "inflation": 7,
        "amount": 100,
        "years": 0.5
      },
      "expected": -100,
      "rows": [
        {
          "index": 0,
          "value": -107
        },
        {
          "index": 1,
          "value": 7
        },
        {
          "index": 4,
          "value": 0
        },
        {
          "index": 5,
          "value": 0
        }
      ],
      "rowCount": 6
    },
    "defaultExpected": 4.67,
    "primaryUnit": "percent",
    "moneyRows": [
      4,
      5
    ],
    "optionalAmount": "amount",
    "optionalRowCount": 4,
    "defaults": {
      "nominal": 12,
      "inflation": 7,
      "amount": 0,
      "years": 1
    },
    "moneyFields": [
      "amount"
    ],
    "pages": {
      "ru": {
        "path": "/ru/finance/real-return/",
        "h1": "Калькулятор реальной доходности",
        "longDescription": "Реальная доходность показывает годовое изменение покупательной способности вложенной суммы: рост денег сравнивается с ростом цен за тот же год. При доходности 12 % и инфляции 7 % точный результат равен 4,67 %, тогда как простая разность даёт 5 %. Разность может как завышать, так и занижать результат; её абсолютное расхождение показано отдельно. Номинальная доходность здесь означает годовой рост суммы до поправки на инфляцию, а не договорный APR с частотой начисления. Для дополнительного расчёта суммы подходят положительные дробные годы без округления.",
        "howToUse": [
          "Введите номинальную ставку, которую предлагают.",
          "Введите ожидаемую инфляцию.",
          "При желании добавьте сумму и срок."
        ],
        "howItWorks": "Реальная доходность = [(1+n/100)/(1+p/100)−1]×100 %, где n — годовой рост суммы, p — годовая инфляция. Разность n−p показана отдельно, расхождение — в процентных пунктах. Для суммы A и срока t: номинальный итог = A(1+n/100)^t; покупательная способность = A[(1+n/100)/(1+p/100)]^t. p>−100 %, n≥−100 %; n=−100 % означает полную потерю суммы. Положительные дробные годы не округляются. При сумме 0 денежные строки отсутствуют.",
        "example": "Ставка 12 процентов при инфляции 7 даёт реальные 4,67 процента, а не 5, как подсказывает разность. При годовой доходности 5 % и инфляции 9 % результат −3,67 %. Для 100 000 при 12 % и 7 % за 1,5 года покупательная способность равна 107 090,60 без округления срока.",
        "disclaimer": "Годовые постоянные темпы и одна сумма без взносов или снятий. Инфляция должна быть больше −100 %, доходность не ниже −100 %. Не рассчитываются налоги, комиссии, договорный APR, валютный курс или прогноз доходности.",
        "faq": [
          {
            "q": "Почему нельзя просто вычесть ставки?",
            "a": "Нужно разделить годовой множитель суммы на множитель цен. При 12 % и 7 % разность 5 % выше реальных 4,67 %, но при 5 % и 9 % разность −4 % ниже реальных −3,67 %. Для небольших ставок это приближение; направление и размер ошибки зависят от обеих ставок."
          },
          {
            "q": "Может ли реальная доходность быть отрицательной?",
            "a": "Да. Годовой множитель денег оказался меньше множителя цен, поэтому покупательная способность снизилась. При этом номинальная сумма могла вырасти, остаться прежней или уменьшиться: знак реального результата сам по себе этого не определяет."
          },
          {
            "q": "Какую инфляцию подставлять?",
            "a": "Для оценки прошедшего года используйте изменение соответствующего индекса за тот же год. Для будущего задайте сценарий инфляции и доходности; оба значения являются допущениями. Переменные годовые ставки этим постоянным сценарием не воспроизводятся."
          },
          {
            "q": "Учитывается ли налог?",
            "a": "Автоматически нет. Если известна годовая доходность после всех применимых налогов и комиссий, используйте её. Нельзя просто вычесть процент налога из процентной доходности: налоговая база, пороги и момент удержания зависят от условий."
          }
        ],
        "help": {
          "nominal": "Годовое изменение стоимости до поправки на инфляцию, с согласованным реинвестированием. Это не номинальная APR с иной частотой начисления.",
          "years": "Положительный срок может быть дробным и не округляется. Он влияет на денежные суммы; основная доходность остаётся годовой."
        },
        "sources": [
          "https://www.dallasfed.org/~/media/documents/research/events/2014/14tmceggertsson.pdf",
          "https://www.bls.gov/cpi/factsheets/purchasing-power-constant-dollars.htm"
        ]
      },
      "en": {
        "path": "/en/finance/real-return-calculator/",
        "h1": "Real return calculator",
        "longDescription": "Real return measures the annual change in an investment’s purchasing power by comparing money growth with price growth for the same year. A 12% return and 7% inflation give about 4.67% under the entered model, while subtraction gives 5%. Subtraction may overstate or understate the result; its absolute gap is shown separately. Nominal return here means annual balance growth before inflation adjustment, rather than a contractual APR with compounding frequency. Positive fractional years are used without rounding for the optional cash projection.",
        "howToUse": [
          "Enter the nominal rate you are offered.",
          "Enter the inflation rate you expect.",
          "Optionally add an amount and a term."
        ],
        "howItWorks": "Real return = [(1+n/100)/(1+p/100)−1]×100%, where n is annual balance growth and p annual inflation. The shortcut n−p is separate; the gap uses percentage points. For amount A and duration t: nominal balance = A(1+n/100)^t; purchasing power = A[(1+n/100)/(1+p/100)]^t. Inflation must exceed −100%, and return must be at least −100%; −100% means complete capital loss. Positive fractional years are not rounded. Amount 0 omits the money rows.",
        "example": "A 12 percent rate with 7 percent inflation is a real 4.67 percent, not the 5 that subtraction suggests. Annual return 5% with inflation 9% gives −3.67%. For 100,000 at 12% and 7% over 1.5 years, purchasing power is 107,090.60 without rounding the duration.",
        "disclaimer": "Constant annual rates and one balance, without deposits or withdrawals. Inflation must exceed −100% and return cannot be below −100%. Taxes, fees, contractual APR, exchange rates and future return forecasts are not calculated.",
        "faq": [
          {
            "q": "Why not just subtract the rates?",
            "a": "Divide the annual balance factor by the price factor. With 12% and 7%, subtraction gives 5%, above the real 4.67%; with 5% and 9%, it gives−4%, below the real−3.67%. It is a low-rate approximation; the error’s direction and size depend on both rates."
          },
          {
            "q": "Can the real return be negative?",
            "a": "Yes. The annual money factor is below the price factor, so purchasing power falls. The nominal balance may have grown, stayed unchanged or fallen; the real result’s sign alone does not determine that."
          },
          {
            "q": "Which inflation figure should I use?",
            "a": "For a past year, use the change in an appropriate price index over that same year. For the future, enter an inflation and return scenario; both are assumptions. Constant rates do not reproduce a changing sequence of yearly returns and inflation."
          },
          {
            "q": "Is tax taken into account?",
            "a": "Not automatically. Use a known annual return after the applicable taxes and fees when that is the comparison needed. Do not subtract a tax percentage directly from a return percentage: the tax base, thresholds and timing depend on the actual terms."
          }
        ],
        "help": {
          "nominal": "Annual value growth before inflation adjustment, with consistent reinvestment. This is not a nominal APR with another compounding frequency.",
          "years": "A positive duration may be fractional and is not rounded. It affects money amounts; the primary return remains annual."
        },
        "sources": [
          "https://www.dallasfed.org/~/media/documents/research/events/2014/14tmceggertsson.pdf",
          "https://www.bls.gov/cpi/factsheets/purchasing-power-constant-dollars.htm"
        ]
      },
      "uk": {
        "path": "/uk/finansy/realna-dokhidnist/",
        "h1": "Калькулятор реальної дохідності",
        "longDescription": "Реальна дохідність показує річну зміну купівельної спроможності вкладеної суми: зростання грошей зіставляється зі зростанням цін за той самий рік. За дохідності 12 % та інфляції 7 % результат моделі дорівнює 4,67 %, а проста різниця дає 5 %. Різниця може як завищувати, так і занижувати результат; абсолютна розбіжність показана окремо. Номінальна дохідність тут означає річне зростання суми до поправки на інфляцію, а не договірний APR із частотою нарахування. Для додаткового розрахунку суми додатні дробові роки не округлюються.",
        "howToUse": [
          "Введіть номінальну ставку дохідності.",
          "Введіть очікувану інфляцію.",
          "Прочитайте реальну дохідність."
        ],
        "howItWorks": "Реальна дохідність = [(1+n/100)/(1+p/100)−1]×100 %, де n — річне зростання суми, p — річна інфляція. Різниця n−p показана окремо, розбіжність — у відсоткових пунктах. Для суми A та строку t номінальний підсумок = A(1+n/100)^t; купівельна спроможність = A[(1+n/100)/(1+p/100)]^t. p>−100 %, n≥−100 %; −100 % означає повну втрату капіталу. Додатні дробові роки не округлюються. За суми 0 грошові рядки відсутні.",
        "example": "Ставка 12 відсотків за інфляції 7 дає реальні 4,67 відсотка, а не 5, як підказує різниця. За ставки 30 % та інфляції 20 % розбіжність буде вже 1,67 пункту. Річна дохідність 5 % та інфляція 9 % дають −3,67 %. Для 100 000 за 12 % і 7 % протягом 1,5 року спроможність становить 107 090,60 без округлення строку.",
        "disclaimer": "Сталі річні темпи й одна сума без внесків або зняття. Інфляція має перевищувати −100 %, дохідність не може бути нижчою за −100 %. Податки, комісії, договірний APR, валютний курс і прогноз дохідності не розраховуються.",
        "faq": [
          {
            "q": "Чому не можна просто відняти інфляцію?",
            "a": "Потрібно поділити річний множник суми на множник цін. За 12 % і 7 % різниця 5 % вища за реальні 4,67 %, але за 5 % і 9 % різниця −4 % нижча за реальні −3,67 %. Для малих ставок це наближення; напрям і розмір похибки залежать від обох ставок."
          },
          {
            "q": "Що означає від’ємна реальна дохідність?",
            "a": "Так. Річний множник грошей менший за множник цін, тож купівельна спроможність знизилася. Номінальна сума при цьому могла зрости, не змінитися або зменшитися: знак реального результату сам цього не визначає."
          },
          {
            "q": "Яку інфляцію брати?",
            "a": "Для минулого року візьміть зміну відповідного індексу за той самий рік. Для майбутнього задайте сценарій інфляції та дохідності; обидва значення є припущеннями. Сталі ставки не відтворюють змінну послідовність річних показників."
          },
          {
            "q": "Чи враховувати податок?",
            "a": "Автоматично ні. Якщо відома річна дохідність після потрібних податків і комісій, використайте її. Не віднімайте відсоток податку безпосередньо від відсоткової дохідності: база, пороги й час утримання залежать від умов."
          }
        ],
        "help": {
          "nominal": "Річна зміна вартості до поправки на інфляцію з узгодженим реінвестуванням. Це не номінальна APR з іншою частотою нарахування.",
          "years": "Додатний строк може бути дробовим і не округлюється. Він впливає на грошові суми; основна дохідність залишається річною."
        },
        "sources": [
          "https://www.dallasfed.org/~/media/documents/research/events/2014/14tmceggertsson.pdf",
          "https://www.bls.gov/cpi/factsheets/purchasing-power-constant-dollars.htm"
        ]
      },
      "de": {
        "path": "/de/finanzen/reale-rendite-rechner/",
        "h1": "Rechner für die reale Rendite",
        "longDescription": "Die reale Rendite beschreibt die jährliche Veränderung der Kaufkraft einer Anlage: Betragswachstum und Preiswachstum werden für dasselbe Jahr verglichen. 12 % Rendite bei 7 % Inflation ergeben im Modell 4,67 %, während die Subtraktion 5 % liefert. Sie kann das Ergebnis über- oder unterschätzen; der absolute Abstand steht gesondert daneben. Nominal meint hier das jährliche Betragswachstum vor Inflationsbereinigung und keinen vertraglichen APR mit Verzinsungshäufigkeit. Positive Jahresbruchteile werden für die optionale Betragsprojektion nicht gerundet.",
        "howToUse": [
          "Trage den Nominalzins ein, der dir geboten wird.",
          "Trage die Inflation ein, die du erwartest.",
          "Ergänze bei Bedarf einen Betrag und einen Zeitraum."
        ],
        "howItWorks": "Reale Rendite = [(1+n/100)/(1+p/100)−1]×100 %, mit jährlichem Betragswachstum n und jährlicher Inflation p. Die Näherung n−p steht separat; der Abstand wird in Prozentpunkten angegeben. Für Betrag A und Dauer t: nominaler Endbetrag = A(1+n/100)^t; Kaufkraft = A[(1+n/100)/(1+p/100)]^t. p>−100 %, n≥−100 %; −100 % bedeutet vollständigen Kapitalverlust. Positive Jahresbruchteile werden nicht gerundet. Bei Betrag 0 entfallen die Geldzeilen.",
        "example": "Ein Satz von 12 Prozent bei 7 Prozent Inflation sind real 4,67 Prozent und nicht die 5, die die Subtraktion nahelegt. Jahresrendite 5 % und Inflation 9 % ergeben −3,67 %. Bei 100 000 mit 12 % und 7 % über 1,5 Jahre beträgt die Kaufkraft 107 090,60 ohne Laufzeitrundung.",
        "disclaimer": "Konstante Jahresraten und ein Betrag ohne Ein- oder Auszahlungen. Inflation muss über −100 % liegen, Rendite darf nicht unter −100 % liegen. Steuern, Gebühren, vertraglicher APR, Wechselkurse und Renditeprognosen werden nicht berechnet.",
        "faq": [
          {
            "q": "Warum nicht einfach die Sätze abziehen?",
            "a": "Der jährliche Betragsfaktor wird durch den Preisfaktor geteilt. Bei 12 % und 7 % liegen die subtrahierten 5 % über den realen 4,67 %; bei 5 % und 9 % liegen−4 % darunter, denn real sind es−3,67 %. Die Näherung für kleine Raten hat je nach beiden Raten eine andere Fehlerrichtung und Größe."
          },
          {
            "q": "Kann die reale Rendite negativ sein?",
            "a": "Ja. Der jährliche Geldfaktor liegt unter dem Preisfaktor, sodass die Kaufkraft sinkt. Der nominale Betrag kann gestiegen, unverändert oder gesunken sein; allein das Vorzeichen der realen Rendite legt das nicht fest."
          },
          {
            "q": "Welche Inflationszahl soll ich nehmen?",
            "a": "Für ein vergangenes Jahr nutze die Veränderung eines passenden Preisindexes im selben Jahr. Für die Zukunft gib ein Inflations- und Renditeszenario ein; beide Werte sind Annahmen. Konstante Raten bilden wechselnde Jahresverläufe nicht nach."
          },
          {
            "q": "Ist die Steuer berücksichtigt?",
            "a": "Nicht automatisch. Verwende bei Bedarf eine bekannte Jahresrendite nach den anwendbaren Steuern und Gebühren. Ein Steuerprozentsatz lässt sich nicht direkt von der Rendite abziehen: Bemessungsgrundlage, Freibeträge und Zeitpunkt hängen von den Bedingungen ab."
          }
        ],
        "help": {
          "nominal": "Jährliche Wertänderung vor Inflationsbereinigung bei einheitlicher Wiederanlage. Gemeint ist kein Nominal-APR mit anderer Verzinsungshäufigkeit.",
          "years": "Eine positive Dauer darf gebrochen sein und wird nicht gerundet. Sie beeinflusst Geldbeträge; die Hauptrendite bleibt jährlich."
        },
        "sources": [
          "https://www.dallasfed.org/~/media/documents/research/events/2014/14tmceggertsson.pdf",
          "https://www.bls.gov/cpi/factsheets/purchasing-power-constant-dollars.htm"
        ]
      },
      "es": {
        "path": "/es/finanzas/rentabilidad-real/",
        "h1": "Calculadora de rentabilidad real",
        "longDescription": "La rentabilidad real mide el cambio anual del poder adquisitivo de una inversión al comparar el crecimiento del saldo y de los precios durante el mismo año. Un 12 % de rentabilidad y 7 % de inflación dan 4,67 % en el modelo, mientras que la resta da 5 %. Esta puede sobrestimar o subestimar el resultado; la diferencia absoluta se muestra aparte. Nominal significa aquí crecimiento anual del saldo antes del ajuste por inflación, no un APR contractual con frecuencia de capitalización. Los años fraccionarios positivos se usan sin redondear para proyectar la cantidad opcional.",
        "howToUse": [
          "Introduce el tipo nominal que te ofrecen.",
          "Introduce la inflación que esperas.",
          "Si quieres, añade una cantidad y un plazo."
        ],
        "howItWorks": "Rentabilidad real = [(1+n/100)/(1+p/100)−1]×100 %, con crecimiento anual del saldo n e inflación anual p. La resta n−p se muestra aparte; la diferencia usa puntos porcentuales. Para cantidad A y plazo t: saldo nominal = A(1+n/100)^t; poder adquisitivo = A[(1+n/100)/(1+p/100)]^t. p>−100 %, n≥−100 %; −100 % significa pérdida total del capital. Los años fraccionarios positivos no se redondean. Cantidad 0 omite las filas monetarias.",
        "example": "Un tipo del 12 por ciento con un 7 por ciento de inflación es un 4,67 por ciento real, y no el 5 que sugiere la resta. Rentabilidad anual del 5 % e inflación del 9 % dan −3,67 %. Para 100 000 al 12 % y 7 % durante 1,5 años, el poder adquisitivo es 107 090,60 sin redondear el plazo.",
        "disclaimer": "Tasas anuales constantes y un saldo sin aportaciones ni retiradas. La inflación debe superar −100 % y la rentabilidad no puede ser inferior a −100 %. No se calculan impuestos, comisiones, APR contractual, tipos de cambio ni previsiones.",
        "faq": [
          {
            "q": "¿Por qué no restar sin más los tipos?",
            "a": "Hay que dividir el factor anual del saldo entre el factor de precios. Con 12 % y 7 %, la resta da 5 %, por encima del 4,67 % real; con 5 % y 9 %, da−4 %, por debajo del−3,67 % real. Es una aproximación para tasas pequeñas; el sentido y tamaño del error dependen de ambas."
          },
          {
            "q": "¿La rentabilidad real puede ser negativa?",
            "a": "Sí. El factor anual del dinero es menor que el de precios y cae el poder adquisitivo. El saldo nominal puede haber crecido, permanecido igual o disminuido; el signo de la rentabilidad real por sí solo no determina eso."
          },
          {
            "q": "¿Qué cifra de inflación debo usar?",
            "a": "Para un año pasado usa la variación del índice de precios adecuado durante ese mismo año. Para el futuro introduce un escenario de inflación y rentabilidad; ambos son hipótesis. Las tasas constantes no reproducen una secuencia de variaciones anuales."
          },
          {
            "q": "¿Se tienen en cuenta los impuestos?",
            "a": "No automáticamente. Si conoces la rentabilidad anual tras los impuestos y comisiones aplicables, úsala cuando corresponda. No restes directamente un porcentaje fiscal del porcentaje de rentabilidad: la base, los umbrales y el momento del cobro dependen de las condiciones."
          }
        ],
        "help": {
          "nominal": "Cambio anual del valor antes de ajustar la inflación, con reinversión coherente. No es una APR nominal con otra frecuencia de capitalización.",
          "years": "Un plazo positivo puede ser fraccionario y no se redondea. Afecta a los importes; la rentabilidad principal sigue siendo anual."
        },
        "sources": [
          "https://www.dallasfed.org/~/media/documents/research/events/2014/14tmceggertsson.pdf",
          "https://www.bls.gov/cpi/factsheets/purchasing-power-constant-dollars.htm"
        ]
      }
    }
  },
  {
    "id": "rule-of-72",
    "inputs": {
      "rate": 6,
      "amount": 100
    },
    "expected": 12,
    "rows": [
      {
        "index": 0,
        "value": 11.9
      },
      {
        "index": 1,
        "value": 0.1
      },
      {
        "index": 2,
        "value": 6
      },
      {
        "index": 3,
        "value": 200
      }
    ],
    "blankField": "rate",
    "domainField": "rate",
    "domainInvalid": 0,
    "boundary": {
      "inputs": {
        "rate": 72,
        "amount": 0
      },
      "expected": 1,
      "rows": [
        {
          "index": 0,
          "value": 1.28
        },
        {
          "index": 1,
          "value": 0.28
        },
        {
          "index": 2,
          "value": 72
        }
      ],
      "rowCount": 3
    },
    "defaultExpected": 9,
    "primaryUnit": "years",
    "moneyRows": [
      3
    ],
    "optionalAmount": "amount",
    "optionalRowCount": 3,
    "defaults": {
      "rate": 8,
      "amount": 0
    },
    "moneyFields": [
      "amount"
    ],
    "pages": {
      "ru": {
        "path": "/ru/finance/rule-of-72/",
        "h1": "Калькулятор правила 72",
        "longDescription": "Семьдесят два, делённые на ставку, дают срок удвоения в годах — приближение, которое считается в уме. Рядом стоит точное значение через логарифм и расхождение между ними: не чтобы подменить правило, а чтобы было видно, где оно начинает вводить в заблуждение. На восьми процентах расхождение меньше недели, на половине процента правило ошибается на пять лет.",
        "howToUse": [
          "Введите годовую ставку.",
          "Прочитайте оценку по правилу 72.",
          "Сравните её с точным значением рядом."
        ],
        "howItWorks": "Оценка в годах = 72/r, где r — положительная годовая доходность в процентах. Логарифмический срок = ln(2)/ln(1+r/100); расхождение — абсолютная разность двух сроков. Предполагаются постоянный годовой множитель и реинвестирование процентов без взносов. Дробный точный срок — математическое продолжение кривой роста: при начислении только по итогам целого года фактическое удвоение впервые наблюдается в следующую целую годовую дату. Начальная сумма необязательна и влияет только на строку «Сумма после удвоения».",
        "example": "При 8 процентах правило даёт 72 ÷ 8 = 9 лет, а точный ответ — 9,01. При 0,5 % оценка 144 года отличается от логарифмических 138,98 на 5,02 года; нулевая ставка не даёт конечного удвоения.",
        "disclaimer": "Приближение для постоянной положительной годовой доходности. Не учитывает взносы, снятия, комиссии, налоги и изменение ставки. Дробный срок не обещает дату договорного зачисления процентов или гарантированную доходность.",
        "faq": [
          {
            "q": "Почему 72, а не 70?",
            "a": "Семьдесят два нацело делятся на многие ходовые ставки — 2, 3, 4, 6, 8, 9, 12, — и именно поэтому приём считается в уме."
          },
          {
            "q": "Когда правило перестаёт работать?",
            "a": "У правила нет универсальной допустимой погрешности. При 6 % оценка 12 лет отличается от 11,8957 на 0,1043 года; при 10 % оценка 7,2 отличается от 7,2725 на 0,0725 года. Сравните показанное расхождение с точностью, которая нужна вашей задаче."
          },
          {
            "q": "Это то же самое, что калькулятор сложного процента?",
            "a": "Нет. Тот наращивает сумму за выбранный срок, а этот отвечает на один вопрос — когда она удвоится."
          },
          {
            "q": "Какая капитализация предполагается?",
            "a": "Используется эффективный годовой множитель 1+r/100. Если известна номинальная ставка с более частым начислением, сначала переведите её в эффективную годовую. Один и тот же эффективный годовой темп даёт одну и ту же кривую этого расчёта."
          }
        ],
        "help": {
          "rate": "Положительный постоянный годовой рост в процентах. Проценты реинвестируются; при зачислении только в конце целого года удвоение наблюдается на следующую целую годовщину."
        },
        "sources": [
          "https://www.investor.gov/additional-resources/information/youth/teachers-classroom-resources/what-compound-interest"
        ]
      },
      "en": {
        "path": "/en/finance/rule-of-72-calculator/",
        "h1": "Rule of 72 calculator",
        "longDescription": "Seventy-two divided by the rate gives the doubling time in years — an approximation you can do in your head. The exact figure from logarithms sits beside it along with the gap between them, not to replace the rule but to show where it starts to mislead. At eight percent the gap is under a week; at half a percent the rule is five years out.",
        "howToUse": [
          "Enter the annual rate.",
          "Read the rule-of-72 estimate.",
          "Compare it with the exact figure beside it."
        ],
        "howItWorks": "Estimated years = 72/r, where r is a positive annual return in percent. Logarithmic time = ln(2)/ln(1+r/100); the gap is the absolute difference between the two times. The model assumes a constant annual growth factor and reinvested interest without contributions. A fractional exact time extends the growth curve mathematically: if interest is credited only at whole-year ends, doubling is first observed at the next whole-year date. The optional starting amount only controls the doubled-amount row.",
        "example": "At 8 percent the rule gives 72 ÷ 8 = 9 years, and the exact answer is 9.01. At 0.5%, the 144-year estimate differs from 138.98 logarithmic years by 5.02 years; a zero rate cannot produce finite doubling.",
        "disclaimer": "A shortcut for a constant positive annual return. Contributions, withdrawals, fees, taxes and rate changes are excluded. Fractional time does not promise a contractual interest-crediting date or a guaranteed return.",
        "faq": [
          {
            "q": "Why 72 and not 70?",
            "a": "Seventy-two divides evenly by many common rates — 2, 3, 4, 6, 8, 9, 12 — which is what makes the shortcut usable in your head."
          },
          {
            "q": "When does the rule stop working?",
            "a": "There is no universal acceptable error. At 6%, 12 years differs from 11.8957 by 0.1043 years; at 10%, 7.2 differs from 7.2725 by 0.0725 years. Compare the displayed gap with the precision your task needs."
          },
          {
            "q": "Is this the same as a compound interest calculator?",
            "a": "No. A compound interest calculator grows a balance over a period you choose; this one answers a single question — when does it double."
          },
          {
            "q": "What compounding does it assume?",
            "a": "The model uses the effective annual factor 1+r/100. Convert a nominal rate with more frequent compounding to its effective annual rate first. The same effective annual growth gives the same curve here."
          }
        ],
        "help": {
          "rate": "Positive constant annual growth in percent, with reinvested interest. If interest is credited only at whole-year ends, doubling is observed at the next whole-year anniversary."
        },
        "sources": [
          "https://www.investor.gov/additional-resources/information/youth/teachers-classroom-resources/what-compound-interest"
        ]
      },
      "uk": {
        "path": "/uk/finansy/pravylo-72/",
        "h1": "Калькулятор правила 72",
        "longDescription": "Правило 72 оцінює строк подвоєння без складного рахунку: поділіть 72 на річну ставку у відсотках. Поряд показано строк із логарифма та фактичну розбіжність. За 8 % це 9 років проти 9,0065, а за 0,5 % — 144 проти 138,98 року; тому точність перевіряється для конкретної ставки.",
        "howToUse": [
          "Введіть річну ставку у відсотках.",
          "Прочитайте оцінку за правилом і точний строк.",
          "Порівняйте їх — розбіжність показує межі застосовності правила."
        ],
        "howItWorks": "Оцінка в роках = 72/r, де r — додатна річна дохідність у відсотках. Логарифмічний строк = ln(2)/ln(1+r/100); розбіжність — абсолютна різниця строків. Припускаються сталий річний множник і реінвестування відсотків без внесків. Дробовий точний строк продовжує криву математично: за зарахування лише наприкінці цілого року подвоєння вперше спостерігається на наступну цілу річну дату. Необов’язкова початкова сума впливає лише на рядок подвоєної суми.",
        "example": "За 8 відсотків правило дає 72 ÷ 8 = 9 років, а точна відповідь — 9,01. За 2 % правило дало б 36 років проти точних 35, а за 30 % — 2,4 проти 2,64. За 0,5 % оцінка 144 роки відрізняється від логарифмічних 138,98 на 5,02 року; нульова ставка не дає скінченного подвоєння.",
        "disclaimer": "Наближення для сталої додатної річної дохідності. Внески, зняття, комісії, податки та зміну ставки не враховано. Дробовий строк не гарантує договірної дати зарахування відсотків чи дохідності.",
        "faq": [
          {
            "q": "Чому саме 72, а не 70?",
            "a": "Для дуже малих ставок 100·ln(2) ≈ 69,3 є граничною константою. Але краща константа залежить від ставки: за 8 % число 72 майже збігається з логарифмічним строком. Його зручно ділити на багато цілих ставок."
          },
          {
            "q": "У якому діапазоні правило працює добре?",
            "a": "Універсальної допустимої похибки немає. За 6 % оцінка 12 років відрізняється від 11,8957 на 0,1043 року; за 10 % оцінка 7,2 відрізняється від 7,2725 на 0,0725 року. Це більше за кілька сотих року. Порівняйте показану розбіжність із потрібною точністю."
          },
          {
            "q": "Чи можна застосувати правило до інфляції?",
            "a": "Так, воно покаже, за скільки років ціни подвояться. За інфляції 6 % це близько дванадцяти років — і той самий розрахунок працює для будь-якого експоненційного процесу."
          },
          {
            "q": "А правило 114 і 144?",
            "a": "Це інші приблизні константи для потроєння й учетверення. За дуже малих ставок граничні константи дорівнюють 100·ln(3) ≈ 109,86 і 100·ln(4) ≈ 138,63; числа 114 та 144 є поправленими мнемонічними орієнтирами, а не тотожностями. Точний строк для множника K — ln(K)/ln(1+r/100)."
          }
        ],
        "help": {
          "rate": "Додатне стале річне зростання у відсотках із реінвестуванням. За зарахування лише наприкінці цілих років подвоєння спостерігається на наступну цілу річницю."
        },
        "sources": [
          "https://www.investor.gov/additional-resources/information/youth/teachers-classroom-resources/what-compound-interest"
        ]
      },
      "de": {
        "path": "/de/finanzen/regel-von-72-rechner/",
        "h1": "Rechner zur Regel von 72",
        "longDescription": "Zweiundsiebzig geteilt durch den Zinssatz ergibt die Verdopplungszeit in Jahren — eine Näherung, die im Kopf gelingt. Der genaue Wert aus dem Logarithmus steht daneben, zusammen mit dem Abstand zwischen beiden, nicht um die Faustregel zu ersetzen, sondern um zu zeigen, wo sie in die Irre führt. Bei acht Prozent liegt der Abstand unter einer Woche, bei einem halben Prozent schätzt die Regel fünf Jahre falsch.",
        "howToUse": [
          "Trage den Jahreszins ein.",
          "Lies die Schätzung nach der Regel von 72 ab.",
          "Vergleiche sie mit dem genauen Wert daneben."
        ],
        "howItWorks": "Geschätzte Jahre = 72/r, wobei r eine positive Jahresrendite in Prozent ist. Logarithmische Dauer = ln(2)/ln(1+r/100); die Abweichung ist der absolute Zeitunterschied. Angenommen werden ein konstanter jährlicher Wachstumsfaktor und wiederangelegte Zinsen ohne Einzahlungen. Eine gebrochene genaue Dauer setzt die Wachstumskurve mathematisch fort: bei Gutschrift nur am Ende ganzer Jahre wird die Verdopplung erstmals am nächsten ganzen Jahrestermin beobachtet. Der optionale Anfangsbetrag bestimmt nur die Zeile des verdoppelten Betrags.",
        "example": "Bei 8 Prozent nennt die Regel 72 ÷ 8 = 9 Jahre, und der genaue Wert ist 9,01. Bei 0,5 % weicht die Schätzung 144 Jahre um 5,02 von 138,98 logarithmischen Jahren ab; Zins null ergibt keine endliche Verdopplung.",
        "disclaimer": "Näherung für eine konstante positive Jahresrendite. Einzahlungen, Entnahmen, Gebühren, Steuern und Zinsänderungen bleiben unberücksichtigt. Die gebrochene Dauer ist weder vertraglicher Zinsgutschrifttermin noch Renditegarantie.",
        "faq": [
          {
            "q": "Warum 72 und nicht 70?",
            "a": "Zweiundsiebzig lässt sich durch viele gebräuchliche Sätze glatt teilen — 2, 3, 4, 6, 8, 9, 12 — und genau das macht die Faustregel im Kopf brauchbar."
          },
          {
            "q": "Wann versagt die Regel?",
            "a": "Es gibt keine universelle zulässige Abweichung. Bei 6 % weichen 12 Jahre um 0,1043 von 11,8957 Jahren ab; bei 10 % weichen 7,2 um 0,0725 von 7,2725 Jahren ab. Vergleiche den angezeigten Abstand mit der benötigten Genauigkeit."
          },
          {
            "q": "Ist das dasselbe wie ein Zinseszinsrechner?",
            "a": "Nein. Ein Zinseszinsrechner lässt einen Betrag über einen Zeitraum wachsen, den du wählst; hier geht es um eine einzige Frage — wann verdoppelt er sich."
          },
          {
            "q": "Von welcher Verzinsung wird ausgegangen?",
            "a": "Verwendet wird der effektive Jahresfaktor 1+r/100. Rechne einen Nominalzins mit häufigerer Verzinsung zuerst in den effektiven Jahreszins um. Derselbe effektive Jahreszuwachs ergibt hier dieselbe Kurve."
          }
        ],
        "help": {
          "rate": "Positives konstantes jährliches Wachstum in Prozent mit Wiederanlage. Bei Gutschrift nur am Ende ganzer Jahre wird die Verdopplung am nächsten ganzen Jahrestermin beobachtet."
        },
        "sources": [
          "https://www.investor.gov/additional-resources/information/youth/teachers-classroom-resources/what-compound-interest"
        ]
      },
      "es": {
        "path": "/es/finanzas/regla-del-72/",
        "h1": "Calculadora de la regla del 72",
        "longDescription": "Setenta y dos dividido entre el tipo da el tiempo de duplicación en años: una aproximación que puedes hacer de cabeza. La cifra exacta, sacada de logaritmos, aparece al lado junto con la diferencia entre ambas, no para sustituir a la regla sino para mostrar dónde empieza a inducir a error. Al ocho por ciento la diferencia no llega a una semana; al medio por ciento la regla se desvía cinco años.",
        "howToUse": [
          "Introduce el tipo anual.",
          "Consulta la estimación de la regla del 72.",
          "Compárala con la cifra exacta que aparece al lado."
        ],
        "howItWorks": "Años estimados = 72/r, con rentabilidad anual positiva r en porcentaje. Plazo logarítmico = ln(2)/ln(1+r/100); el desvío es la diferencia absoluta entre ambos plazos. Se supone un factor anual constante y reinversión de intereses sin aportaciones. El plazo exacto fraccionario prolonga matemáticamente la curva: si los intereses solo se abonan al terminar años completos, la duplicación se observa en la siguiente fecha anual entera. La cantidad inicial opcional solo determina la fila del importe duplicado.",
        "example": "Al 8 por ciento la regla da 72 ÷ 8 = 9 años, y la respuesta exacta es 9,01. Al 0,5 %, la estimación de 144 años difiere de los 138,98 logarítmicos en 5,02 años; una tasa cero no permite duplicar en un plazo finito.",
        "disclaimer": "Atajo para rentabilidad anual positiva constante. Se excluyen aportaciones, retiradas, comisiones, impuestos y cambios de tasa. El plazo fraccionario no promete una fecha contractual de abono ni rentabilidad garantizada.",
        "faq": [
          {
            "q": "¿Por qué 72 y no 70?",
            "a": "Setenta y dos se divide exacto entre muchos tipos habituales —2, 3, 4, 6, 8, 9, 12—, y eso es lo que hace usable el atajo de cabeza."
          },
          {
            "q": "¿Cuándo deja de funcionar la regla?",
            "a": "No hay un error admisible universal. Al 6 %, 12 años difieren de 11,8957 en 0,1043 años; al 10 %, 7,2 difieren de 7,2725 en 0,0725 años. Compara el desvío mostrado con la precisión necesaria para tu caso."
          },
          {
            "q": "¿Es lo mismo que una calculadora de interés compuesto?",
            "a": "No. Una calculadora de interés compuesto hace crecer un saldo durante un periodo que eliges; esta responde a una sola pregunta: cuándo se duplica."
          },
          {
            "q": "¿Qué capitalización supone?",
            "a": "Se usa el factor anual efectivo 1+r/100. Convierte primero una tasa nominal con capitalización más frecuente a su tasa anual efectiva. Un mismo crecimiento anual efectivo produce la misma curva aquí."
          }
        ],
        "help": {
          "rate": "Crecimiento anual constante positivo, en porcentaje, con reinversión. Si el interés se abona solo al final de años completos, la duplicación se observa en el siguiente aniversario entero."
        },
        "sources": [
          "https://www.investor.gov/additional-resources/information/youth/teachers-classroom-resources/what-compound-interest"
        ]
      }
    }
  },
  {
    "id": "time-value-money",
    "inputs": {
      "mode": "fv",
      "amount": 10000,
      "rate": 12,
      "years": 0.125,
      "compounding": "quarter"
    },
    "expected": 10148.89,
    "rows": [
      {
        "index": 0,
        "value": 1.0149
      },
      {
        "index": 1,
        "value": 12.55
      },
      {
        "index": 2,
        "value": 0.5
      },
      {
        "index": 3,
        "value": 10000
      }
    ],
    "blankField": "amount",
    "domainField": "rate",
    "domainInvalid": -1,
    "boundary": {
      "inputs": {
        "mode": "pv",
        "amount": 121,
        "rate": 21,
        "years": 1,
        "compounding": "year"
      },
      "expected": 100,
      "rows": [
        {
          "index": 0,
          "value": 1.21
        },
        {
          "index": 1,
          "value": 21
        },
        {
          "index": 2,
          "value": 1
        },
        {
          "index": 3,
          "value": 121
        }
      ],
      "rowCount": 4
    },
    "defaultExpected": 181669.67,
    "primaryUnit": "money",
    "moneyRows": [
      3
    ],
    "defaults": {
      "mode": "fv",
      "amount": 100000,
      "rate": 12,
      "years": 5,
      "compounding": "month"
    },
    "moneyFields": [
      "amount"
    ],
    "pages": {
      "ru": {
        "path": "/ru/finance/time-value-money/",
        "h1": "Калькулятор будущей и текущей стоимости денег",
        "longDescription": "Считает две стороны одного множителя (1+i)^n: будущая стоимость умножает исходную сумму на него, текущая делит будущую сумму. Номинальные 12 % с ежемесячным начислением соответствуют эффективным 12,68 % за год, поэтому частота задана отдельным полем. Это модель одной суммы без последующих потоков. Текущая стоимость является оценкой при выбранной ставке, а не рекомендацией, сколько платить за обещанную выплату.",
        "howToUse": [
          "Выберите, что считать: будущую или текущую стоимость.",
          "Введите сумму, ставку и срок.",
          "Укажите частоту начисления процентов.",
          "Для дисконтирования введите будущую сумму."
        ],
        "howItWorks": "Для номинальной годовой ставки r в процентах и частоты m (12, 4 или 1 раз в год) i=r/(100m), n=t×m и F=(1+i)^n. FV=A×F; PV=A/F; эффективная годовая ставка = [(1+i)^m−1]×100 %. t — положительные годы без округления, r≥0. При дробном n формула продолжает кривую роста между периодами; это не условие реального договора о неполном периоде. Одна сумма располагается в начале для FV либо в конце для PV; взносов и снятий нет.",
        "example": "100 000 ₽ под 12 % годовых с ежемесячным начислением за 5 лет превращаются в 181 669,67 ₽. При ставке 0 % обе стоимости совпадают с исходной суммой. Для 10 000, 12 % годовых, квартального начисления и 0,125 года получаются 10 148,89 и 0,5 периода, а не один период.",
        "disclaimer": "Постоянная неотрицательная номинальная годовая ставка и одна сумма. Инфляция, комиссии, налоги, вероятность выплаты и договорные правила неполного периода не включены. Это не полная стоимость кредита или оценка надёжности обещанной выплаты.",
        "faq": [
          {
            "q": "Как трактовать текущую стоимость обещанной выплаты?",
            "a": "При выбранной ставке 500 000 через восемь лет с годовым начислением 9 % эквивалентны 250 933,14 сегодня. Это условный эквивалент: вероятность получения выплаты и другие расходы формула не оценивает."
          },
          {
            "q": "Почему эффективная ставка выше номинальной?",
            "a": "Потому что проценты начисляются чаще раза в год и начинают работать на себя. Номинальные 12 % с ежемесячным начислением дают 12,68 % годовых."
          },
          {
            "q": "Чем это отличается от калькулятора сложных процентов?",
            "a": "Тот считает рост вклада с регулярными пополнениями. Здесь одна сумма и два направления времени — вперёд и назад, — а пополнений нет."
          },
          {
            "q": "Какую ставку брать для дисконтирования?",
            "a": "Ту доходность, которую вы реально могли бы получить от альтернативного вложения с похожим риском. Это и есть цена отказа от денег сегодня."
          },
          {
            "q": "Можно ли получить реальную стоимость заменой ставки?",
            "a": "Сначала согласуйте реальные или номинальные денежные потоки со ставкой той же базы. Простое вычитание инфляции из номинальной ставки является лишь приближением. Для покупательной способности уже рассчитанной номинальной суммы нужна отдельная поправка на цены."
          }
        ],
        "help": {
          "rate": "Номинальная годовая ставка делится на 12, 4 или 1 по выбранной частоте. Эффективная годовая ставка показана отдельно; расходы не включены.",
          "years": "Дробные годы используются без округления. Число периодов равно годам × частоте и может быть дробным; это математическое продолжение модели, а не банковское правило неполного периода."
        },
        "sources": [
          "https://support.microsoft.com/en-us/excel/functions/fv-function",
          "https://support.microsoft.com/en-us/excel/functions/pv-function"
        ]
      },
      "en": {
        "path": "/en/finance/time-value-of-money-calculator/",
        "h1": "Time value of money calculator",
        "longDescription": "Computes both sides of (1+i)^n: future value multiplies today’s amount by the factor, while present value divides a future amount. A nominal 12% with monthly compounding corresponds to 12.68% effective annual growth, so frequency has its own input. This is a single-amount model without later cash flows. Present value is an estimate at the chosen rate, rather than a recommendation about what to pay for a promised payment.",
        "howToUse": [
          "Choose whether to compute future or present value.",
          "Enter the amount, the rate and the term.",
          "Choose how often interest is compounded.",
          "For discounting, enter the future amount."
        ],
        "howItWorks": "For nominal annual rate r in percent and frequency m (12, 4 or 1 per year), i=r/(100m), n=t×m and F=(1+i)^n. FV=A×F; PV=A/F; effective annual rate = [(1+i)^m−1]×100%. Duration t uses positive years without rounding; r≥0. A fractional n extends the growth curve between periods and does not specify a real contract’s partial-period rule. One amount lies at the start for FV or at the end for PV; there are no deposits or withdrawals.",
        "example": "100,000 at 12% a year compounded monthly becomes 181,669.67 after five years. At 0%, both values equal the original amount. For 10,000 at 12% annually, quarterly compounding and 0.125 years, the result is 10,148.89 over 0.5 periods, rather than one period.",
        "disclaimer": "One amount and a constant nonnegative nominal annual rate. Inflation, fees, taxes, payment risk and contractual partial-period rules are excluded. This is neither full borrowing cost nor a reliability assessment of a promised payment.",
        "faq": [
          {
            "q": "How should I interpret the present value of a promised payment?",
            "a": "At the entered rate, 500,000 due in eight years with 9% annual compounding is equivalent to 250,933.14 today. This is conditional: the formula does not assess the chance of payment or other costs."
          },
          {
            "q": "Why is the effective rate higher than the nominal one?",
            "a": "Because interest is added more than once a year and starts earning on itself. A nominal 12% compounded monthly works out at 12.68% a year."
          },
          {
            "q": "How is this different from a compound interest calculator?",
            "a": "That one models a deposit growing with regular top-ups. Here there is a single sum and two directions in time — forward and back — with no contributions."
          },
          {
            "q": "Which rate should I discount at?",
            "a": "The return you could realistically get from an alternative investment of similar risk. That is the price of giving up the money today."
          },
          {
            "q": "Can changing the rate alone make the result real?",
            "a": "First align nominal or real cash flows with a rate on the same basis. Subtracting inflation from a nominal rate is only an approximation. Adjusting an already calculated nominal future balance to purchasing power requires a separate price adjustment."
          }
        ],
        "help": {
          "rate": "The nominal annual rate is divided by 12, 4 or 1 according to frequency. The effective annual rate is shown separately; fees are excluded.",
          "years": "Fractional years are used without rounding. Period count is years × frequency and may be fractional; this extends the mathematical model rather than a bank partial-period convention."
        },
        "sources": [
          "https://support.microsoft.com/en-us/excel/functions/fv-function",
          "https://support.microsoft.com/en-us/excel/functions/pv-function"
        ]
      },
      "uk": {
        "path": "/uk/finansy/vartist-hroshey-u-chasi/",
        "h1": "Калькулятор майбутньої та поточної вартості грошей",
        "longDescription": "Рахує обидві сторони множника (1+i)^n: майбутня вартість множить сьогоднішню суму, поточна ділить майбутню. Номінальні 12 % зі щомісячною капіталізацією відповідають ефективним 12,68 % за рік, тому частоту задають окремо. Це модель однієї суми без подальших потоків. Поточна вартість є оцінкою за вибраною ставкою, а не рекомендацією, скільки платити за обіцяну виплату.",
        "howToUse": [
          "Виберіть напрямок: майбутня вартість чи поточна.",
          "Введіть суму, номінальну річну ставку та строк у роках; не ставку за місяць і не кількість місяців.",
          "Уточніть частоту нарахування — вона помітно впливає на результат."
        ],
        "howItWorks": "Для номінальної річної ставки r у відсотках і частоти m (12, 4 або 1 на рік) i=r/(100m), n=t×m, F=(1+i)^n. FV=A×F; PV=A/F; ефективна річна ставка = [(1+i)^m−1]×100 %. t — додатні роки без округлення, r≥0. Дробове n продовжує криву між періодами та не задає договірних правил неповного періоду. Одна сума розміщена на початку для FV або наприкінці для PV; внесків і зняття немає.",
        "example": "100 000 ₴ під 12 % річних із щомісячним нарахуванням за 5 років перетворюються на 181 669,67 ₴. За річного нарахування вийшло б 176 234 ₴ — різниця саме в частоті. За ставки 0 % обидві вартості дорівнюють початковій сумі. Для 10 000, річних 12 %, квартального нарахування та 0,125 року виходять 10 148,89 і 0,5 періоду, а не один.",
        "disclaimer": "Одна сума та стала невід’ємна номінальна річна ставка. Інфляція, комісії, податки, ризик виплати й договірні правила неповного періоду не враховані. Це не повна вартість кредиту чи оцінка надійності обіцяної виплати.",
        "faq": [
          {
            "q": "Як тлумачити поточну вартість обіцяної виплати?",
            "a": "За введеною ставкою 500 000 через вісім років із річною капіталізацією 9 % еквівалентні 250 933,14 сьогодні. Це умовний еквівалент: імовірність отримання виплати та інші витрати формула не оцінює."
          },
          {
            "q": "Чим поточна вартість відрізняється від майбутньої?",
            "a": "Напрямком переведення. Майбутня відповідає, у що перетвориться сьогоднішня сума; поточна — скільки коштує сьогодні обіцяна в майбутньому виплата."
          },
          {
            "q": "Яку ставку брати для дисконтування?",
            "a": "Ставка має відповідати строку, ризику та номінальній чи реальній базі грошового потоку. Дохідність альтернативи або вартість капіталу може бути орієнтиром, але ставка депозиту чи кредиту не є автоматично доречною для будь-якої виплати. Калькулятор ставку не підбирає."
          },
          {
            "q": "Чому частота нарахування впливає на результат?",
            "a": "Бо за частішої капіталізації проценти раніше починають працювати самі на себе. Різниця росте зі ставкою й строком, а на коротких строках майже непомітна."
          },
          {
            "q": "Як пов’язати вартість у часі з купівельною спроможністю?",
            "a": "Узгодьте реальні чи номінальні потоки зі ставкою тієї самої бази. Просте віднімання інфляції є лише наближенням. Для купівельної спроможності номінальної майбутньої суми потрібна окрема поправка на ціни."
          }
        ],
        "help": {
          "rate": "Номінальна річна ставка ділиться на 12, 4 або 1 за обраною частотою. Ефективна річна ставка показана окремо; витрати не включено.",
          "years": "Дробові роки використовуються без округлення. Кількість періодів дорівнює рокам × частоті й може бути дробовою; це продовження математичної моделі, а не банківське правило неповного періоду."
        },
        "sources": [
          "https://support.microsoft.com/en-us/excel/functions/fv-function",
          "https://support.microsoft.com/en-us/excel/functions/pv-function"
        ]
      },
      "de": {
        "path": "/de/finanzen/zeitwert-des-geldes/",
        "h1": "Rechner zum Zeitwert des Geldes",
        "longDescription": "Berechnet beide Seiten von (1+i)^n: der Endwert multipliziert den heutigen Betrag mit dem Faktor, der Barwert teilt einen künftigen Betrag. Nominale 12 % bei monatlicher Verzinsung entsprechen effektiv 12,68 % im Jahr; deshalb hat die Häufigkeit ein eigenes Feld. Modelliert wird ein einzelner Betrag ohne spätere Zahlungsströme. Der Barwert ist eine Schätzung zum gewählten Satz, keine Empfehlung für den Kaufpreis eines Zahlungsversprechens.",
        "howToUse": [
          "Wähle, ob Endwert oder Barwert berechnet wird.",
          "Trage Betrag, Zinssatz und Laufzeit ein.",
          "Wähle, wie oft verzinst wird.",
          "Für die Abzinsung trage den künftigen Betrag ein."
        ],
        "howItWorks": "Bei nominalem Jahreszins r in Prozent und Häufigkeit m (12, 4 oder 1 pro Jahr) gilt i=r/(100m), n=t×m und F=(1+i)^n. FV=A×F; PV=A/F; effektiver Jahreszins = [(1+i)^m−1]×100 %. t sind positive Jahre ohne Rundung, r≥0. Ein gebrochenes n setzt die Wachstumskurve zwischen Perioden fort und beschreibt keine vertragliche Teilperiodenregel. Ein Betrag liegt für FV am Anfang, für PV am Ende; weitere Ein- oder Auszahlungen fehlen.",
        "example": "10 000 € zu 12 % im Jahr bei monatlicher Verzinsung werden nach fünf Jahren zu 18 166,97 €. Bei 0 % entsprechen beide Werte dem Ausgangsbetrag. Für 10 000, jährlich 12 %, vierteljährliche Verzinsung und 0,125 Jahre ergeben sich 10 148,89 und 0,5 Perioden, nicht eine Periode.",
        "disclaimer": "Ein Betrag und ein konstanter nichtnegativer nominaler Jahreszins. Inflation, Gebühren, Steuern, Ausfallrisiko und vertragliche Teilperiodenregeln fehlen. Weder gesamte Kreditkosten noch Zuverlässigkeit eines Zahlungsversprechens werden beurteilt.",
        "faq": [
          {
            "q": "Wie ist der Barwert eines Zahlungsversprechens zu verstehen?",
            "a": "Zum eingegebenen Satz entsprechen 500 000 in acht Jahren bei jährlichen 9 % einem heutigen Wert von 250 933,14. Das gilt unter den Annahmen; die Wahrscheinlichkeit der Zahlung und weitere Kosten werden nicht bewertet."
          },
          {
            "q": "Warum liegt der effektive Zins über dem nominalen?",
            "a": "Weil die Zinsen mehr als einmal im Jahr gutgeschrieben werden und selbst zu tragen beginnen. Nominale 12 % bei monatlicher Verzinsung ergeben 12,68 % im Jahr."
          },
          {
            "q": "Wie unterscheidet sich das von einem Zinseszinsrechner?",
            "a": "Jener bildet eine Anlage mit regelmäßigen Einzahlungen ab. Hier gibt es einen einzigen Betrag und zwei Richtungen in der Zeit — vorwärts und zurück — ganz ohne Einzahlungen."
          },
          {
            "q": "Mit welchem Satz soll ich abzinsen?",
            "a": "Mit der Rendite, die eine vergleichbar riskante Alternative realistisch brächte. Das ist der Preis dafür, auf das Geld heute zu verzichten."
          },
          {
            "q": "Wird der Wert durch einen anderen Zins automatisch real?",
            "a": "Stimme zuerst nominale oder reale Zahlungsbeträge mit einem Zins derselben Basis ab. Inflation vom Nominalzins abzuziehen ist nur eine Näherung. Die Kaufkraft eines bereits berechneten nominalen Endbetrags erfordert eine gesonderte Preisbereinigung."
          }
        ],
        "help": {
          "rate": "Der nominale Jahreszins wird je nach Häufigkeit durch 12, 4 oder 1 geteilt. Der effektive Jahreszins erscheint gesondert; Gebühren sind nicht enthalten.",
          "years": "Gebrochene Jahre werden nicht gerundet. Periodenzahl = Jahre × Häufigkeit darf gebrochen sein; dies setzt das mathematische Modell fort und ist keine Bankregel für Teilperioden."
        },
        "sources": [
          "https://support.microsoft.com/en-us/excel/functions/fv-function",
          "https://support.microsoft.com/en-us/excel/functions/pv-function"
        ]
      },
      "es": {
        "path": "/es/finanzas/valor-temporal-del-dinero/",
        "h1": "Calculadora del valor temporal del dinero",
        "longDescription": "Calcula las dos caras de (1+i)^n: el valor futuro multiplica el importe actual por el factor y el valor presente divide un importe futuro. Un 12 % nominal con capitalización mensual equivale a un 12,68 % efectivo anual, por lo que la frecuencia tiene su propio campo. Se modela una cantidad única sin flujos posteriores. El valor presente es una estimación a la tasa elegida, no una recomendación de cuánto pagar por una promesa.",
        "howToUse": [
          "Elige si calcular el valor futuro o el actual.",
          "Introduce la cantidad, el tipo y el plazo.",
          "Elige con qué frecuencia se capitalizan los intereses.",
          "Para descontar, introduce la cantidad futura."
        ],
        "howItWorks": "Para tasa nominal anual r en porcentaje y frecuencia m (12, 4 o 1 al año): i=r/(100m), n=t×m y F=(1+i)^n. FV=A×F; PV=A/F; tasa efectiva anual = [(1+i)^m−1]×100 %. t son años positivos sin redondear; r≥0. Un n fraccionario prolonga la curva entre periodos y no establece las reglas contractuales de un periodo incompleto. La cantidad única está al inicio para FV o al final para PV; no hay aportaciones ni retiradas.",
        "example": "100 000 al 12 % anual con capitalización mensual se convierten en 181 669,67 al cabo de cinco años. Al 0 %, ambos valores igualan la cantidad inicial. Para 10 000, 12 % anual, capitalización trimestral y 0,125 años resultan 10 148,89 y 0,5 periodos, no uno.",
        "disclaimer": "Una cantidad y una tasa nominal anual constante no negativa. Se excluyen inflación, comisiones, impuestos, riesgo de cobro y reglas contractuales de periodos incompletos. No se calcula el coste total del crédito ni la fiabilidad de una promesa.",
        "faq": [
          {
            "q": "¿Cómo interpretar el valor presente de un pago prometido?",
            "a": "Con la tasa elegida, 500 000 en ocho años al 9 % de capitalización anual equivalen a 250 933,14 hoy. Es un equivalente condicionado: no se evalúan la probabilidad de cobro ni otros costes."
          },
          {
            "q": "¿Por qué el tipo efectivo es mayor que el nominal?",
            "a": "Porque los intereses se añaden más de una vez al año y empiezan a generar intereses sobre sí mismos. Un 12 % nominal con capitalización mensual sale a un 12,68 % anual."
          },
          {
            "q": "¿En qué se diferencia de una calculadora de interés compuesto?",
            "a": "Aquella modela un depósito que crece con aportaciones periódicas. Aquí hay una sola cantidad y dos sentidos en el tiempo —hacia delante y hacia atrás— sin aportaciones."
          },
          {
            "q": "¿A qué tipo debo descontar?",
            "a": "A la rentabilidad que podrías obtener de forma realista en una inversión alternativa de riesgo parecido. Ese es el precio de renunciar hoy al dinero."
          },
          {
            "q": "¿Cambiar la tasa convierte por sí solo el valor en real?",
            "a": "Primero alinea los flujos nominales o reales con una tasa de la misma base. Restar inflación al tipo nominal solo es una aproximación. El poder adquisitivo de un saldo futuro nominal ya calculado requiere un ajuste separado de precios."
          }
        ],
        "help": {
          "rate": "El tipo nominal anual se divide entre 12, 4 o 1 según la frecuencia. El tipo anual efectivo se muestra aparte; no se incluyen gastos.",
          "years": "Los años fraccionarios no se redondean. Periodos = años × frecuencia puede ser fraccionario; es una prolongación matemática y no una regla bancaria para periodos parciales."
        },
        "sources": [
          "https://support.microsoft.com/en-us/excel/functions/fv-function",
          "https://support.microsoft.com/en-us/excel/functions/pv-function"
        ]
      }
    }
  },
  {
    "id": "dti",
    "inputs": {
      "income": 1,
      "payments": 0.25
    },
    "expected": 25,
    "rows": [
      {
        "index": 1,
        "value": 0.75
      },
      {
        "index": 2,
        "value": 0.25
      }
    ],
    "blankField": "income",
    "domainField": "income",
    "domainInvalid": 0,
    "boundary": {
      "inputs": {
        "income": 100,
        "payments": 150
      },
      "expected": 150,
      "rows": [
        {
          "index": 1,
          "value": -50
        },
        {
          "index": 2,
          "value": 150
        }
      ],
      "rowCount": 3
    },
    "defaultExpected": 30,
    "primaryUnit": "percent",
    "moneyRows": [
      1,
      2
    ],
    "defaults": {
      "payments": 45000,
      "income": 150000
    },
    "moneyFields": [
      "payments",
      "income"
    ],
    "pages": {
      "ru": {
        "path": "/ru/finance/dti/",
        "h1": "Калькулятор кредитной нагрузки",
        "longDescription": "Кредитная нагрузка показывает долю месячного дохода до налогов, которую занимают ежемесячные платежи по долгам. Это отношение денежных потоков за один месяц, а не размера задолженности к годовому доходу. Показанные зоны до 30 %, от 30 до 43 % и выше 43 % — условная шкала этого инструмента. Они не определяют одобрение кредита, безопасность бюджета или лимит конкретного кредитора. Остаток после платежей ещё включает деньги на налоги и остальные расходы.",
        "howToUse": [
          "Введите сумму ежемесячных платежей по долгам; не остаток всей задолженности.",
          "Введите месячный доход до налогов в той же валюте.",
          "Сравните процент и условную зону; остаток ещё не является свободным бюджетом.",
          "Для заявки уточните перечень обязательств и определение дохода у своего кредитора."
        ],
        "howItWorks": "DTI = ежемесячные платежи ÷ месячный доход до налогов × 100 %. Доход должен быть положительным, платежи — неотрицательными, суммы в одной валюте. Остаток = доход до налогов − платежи; налоги, аренда, питание и прочие траты из него не вычтены. Отношение может превышать 100 %. Зоны 30 % и 43 % сохранены как условные диапазоны с нейтральной оценкой, без банковского решения.",
        "example": "Платежи 45 000 при доходе 150 000 дают нагрузку 30 %. При нулевых платежах и положительном доходе доля равна 0 %; 180 000 / 150 000 даёт 120 % без ограничения сотней.",
        "disclaimer": "Отношение платежей к доходу до налогов. Условные зоны не являются нормативом или оценкой вероятности просрочки. Состав обязательств, проверка дохода и решение зависят от кредитора и местных правил; налоги и бытовые расходы не моделируются.",
        "faq": [
          {
            "q": "Какие платежи учитывать?",
            "a": "Регулярные обязательства: платежи по кредитам и ипотеке, минимальные платежи по картам, рассрочки. Аренду и коммунальные обычно не включают, если банк не требует иного."
          },
          {
            "q": "Какой доход брать для расчёта нагрузки?",
            "a": "Для показанного DTI используется доход до налогов. Деление на сумму после налогов отвечает другой задаче — доле платежей в доступном бюджете — и даст другой процент. Например, 45 000 / 150 000 = 30 %, а 45 000 / 120 000 = 37,5 %. Не смешивайте эти базы при сравнении."
          },
          {
            "q": "Пороги — это норма?",
            "a": "Нет. Пороговые зоны здесь условные и не подтверждают способность платить или право получить кредит. У разных кредиторов и продуктов разные пределы и перечни обязательств; 43 % не является универсальным правилом."
          },
          {
            "q": "Почему нагрузка бывает больше 100 %?",
            "a": "Платежи превышают доход. Калькулятор показывает это, а не обрезает, потому что сама ситуация и есть ответ."
          }
        ],
        "help": {
          "income": "Месячный доход до налогов и удержаний для определения gross-income DTI. Остаток ниже также до налогов и обычных расходов; он не равен свободному бюджету."
        },
        "sources": [
          "https://www.consumerfinance.gov/ask-cfpb/what-is-a-debt-to-income-ratio-en-1791/"
        ]
      },
      "en": {
        "path": "/en/finance/debt-to-income/",
        "h1": "Debt-to-income calculator",
        "longDescription": "Debt-to-income measures monthly debt payments against monthly income before taxes. It compares cash flows for the same month, rather than total debt with annual income. The bands up to 30%, over 30% through 43%, and over 43% are an illustrative scale used by this tool. They do not determine loan approval, budget safety or a particular lender’s limit. The amount left after debt payments still has to cover taxes and other expenses.",
        "howToUse": [
          "Enter total monthly debt payments, not the outstanding debt balance.",
          "Enter gross monthly income in the same currency.",
          "Read the ratio and illustrative band; the remainder is not a spendable budget yet.",
          "For an application, check the lender’s own debt and income definitions."
        ],
        "howItWorks": "DTI = monthly debt payments ÷ gross monthly income × 100%. Income must be positive, payments nonnegative, and both amounts in one currency. Remainder = gross income − payments; taxes, rent, food and other costs have not been deducted. The ratio may exceed 100%. The 30% and 43% bands remain as illustrative neutral ranges, without a lending decision.",
        "example": "Payments of 45,000 against income of 150,000 give a DTI of 30%. Zero payments against positive income give 0%; 180,000 / 150,000 gives 120% without a cap at 100%.",
        "disclaimer": "Debt-payment ratio to income before taxes. Illustrative bands are neither a regulation nor a default-probability estimate. Debt scope, income verification and approval depend on the lender and local rules; taxes and living costs are not modelled.",
        "faq": [
          {
            "q": "Which payments count?",
            "a": "Regular obligations: loan and mortgage instalments, card minimums, instalment plans. Rent and utilities are usually left out unless your lender includes them."
          },
          {
            "q": "Is income before or after tax?",
            "a": "This DTI uses income before tax. Dividing by take-home income measures debt payments as a share of the available budget and gives a different percentage: 45,000 / 150,000 = 30%, while 45,000 / 120,000 = 37.5%. Keep the income basis consistent."
          },
          {
            "q": "Are the thresholds a rule?",
            "a": "No. These illustrative bands do not establish affordability or eligibility. Lenders and loan products use different limits and debt definitions; 43% is not a universal rule."
          },
          {
            "q": "Why does the ratio exceed 100%?",
            "a": "Payments are larger than income. The calculator shows it rather than clamping, because the situation itself is the answer."
          }
        ],
        "help": {
          "income": "Monthly income before taxes and deductions for gross-income DTI. The remainder is also before taxes and living costs, not disposable budget."
        },
        "sources": [
          "https://www.consumerfinance.gov/ask-cfpb/what-is-a-debt-to-income-ratio-en-1791/"
        ]
      },
      "uk": {
        "path": "/uk/finansy/kredytne-navantazhennya/",
        "h1": "Калькулятор кредитного навантаження",
        "longDescription": "Кредитне навантаження показує частку місячного доходу до податків, яку займають щомісячні платежі за боргами. Це співвідношення потоків за один місяць, а не всього боргу до річного доходу. Зони до 30 %, понад 30 % до 43 % і понад 43 % є умовною шкалою цього інструмента. Вони не визначають схвалення кредиту, безпечність бюджету чи межу конкретного кредитора. Залишок після платежів ще має покривати податки та інші витрати.",
        "howToUse": [
          "Введіть суму щомісячних платежів за боргами, а не весь залишок боргу.",
          "Введіть місячний дохід до податків у тій самій валюті.",
          "Прочитайте частку та умовну зону; залишок ще не є вільним бюджетом.",
          "Для заявки уточніть перелік зобов’язань і визначення доходу у кредитора."
        ],
        "howItWorks": "DTI = щомісячні платежі за боргами ÷ місячний дохід до податків × 100 %. Дохід має бути додатним, платежі — невід’ємними, суми в одній валюті. Залишок = дохід до податків − платежі; податки, оренду, харчування й інші витрати ще не віднято. Співвідношення може перевищувати 100 %. Межі 30 % та 43 % залишені як умовні нейтральні діапазони без кредитного рішення.",
        "example": "Платежі 45 000 за доходу до податків 150 000 дають 30 %. За нульових платежів і додатного доходу частка 0 %; 180 000 / 150 000 дає 120 % без обмеження сотнею.",
        "disclaimer": "Відношення платежів до доходу до податків. Умовні зони не є нормативом або оцінкою ймовірності прострочення. Склад зобов’язань, перевірка доходу й рішення залежать від кредитора та місцевих правил; податки й побутові витрати не моделюються.",
        "faq": [
          {
            "q": "Які платежі враховувати?",
            "a": "Усі регулярні платежі за боргами: кредити, іпотеку, автокредит, мінімальні платежі за картками, розстрочки. Оренда житла формально не борг, але банки часто враховують і її."
          },
          {
            "q": "Чи є 30 % і 43 % нормативними межами кредиту?",
            "a": "Ні. Це умовні діапазони, а не підтвердження платоспроможності чи права на кредит. Кредитори та продукти мають різні межі й переліки зобов’язань; 43 % не є універсальним правилом."
          },
          {
            "q": "Який дохід враховує банк?",
            "a": "Цей DTI використовує дохід до податків. Ділення на дохід на руки вимірює частку платежів у доступному бюджеті та дає інший процент: 45 000 / 150 000 = 30 %, а 45 000 / 120 000 = 37,5 %. Не змішуйте ці бази порівняння."
          },
          {
            "q": "Чи можна порівнювати DTI різних кредиторів напряму?",
            "a": "Лише за однакових визначень доходу та платежів. Розрахунок не перевіряє підтверджений дохід, кредитну історію, заставу чи вимоги конкретного продукту."
          }
        ],
        "help": {
          "income": "Місячний дохід до податків і утримань для DTI за нарахованим доходом. Залишок також до податків і звичайних витрат, а не вільний бюджет."
        },
        "sources": [
          "https://www.consumerfinance.gov/ask-cfpb/what-is-a-debt-to-income-ratio-en-1791/"
        ]
      },
      "de": {
        "path": "/de/finanzen/schuldendienstquote/",
        "h1": "Rechner für die Schuldendienstquote",
        "longDescription": "Die Schuldendienstquote setzt monatliche Kreditraten zum monatlichen Einkommen vor Steuern ins Verhältnis. Sie vergleicht Zahlungsströme desselben Monats, nicht die gesamte Schuld mit dem Jahreseinkommen. Die Bereiche bis 30 %, über 30 % bis 43 % und über 43 % bilden eine illustrative Skala dieses Rechners. Sie bestimmen weder Kreditbewilligung noch Budgetsicherheit oder die Grenze einer bestimmten Bank. Der Rest nach den Raten muss noch Steuern und andere Ausgaben decken.",
        "howToUse": [
          "Trage die gesamten monatlichen Kreditraten ein, nicht den offenen Schuldenstand.",
          "Trage monatliches Bruttoeinkommen in derselben Währung ein.",
          "Lies Quote und illustrativen Bereich; der Rest ist noch kein frei verfügbares Budget.",
          "Prüfe für einen Antrag die Schuld- und Einkommensdefinitionen der Bank."
        ],
        "howItWorks": "DTI = monatliche Kreditraten ÷ monatliches Bruttoeinkommen × 100 %. Einkommen muss positiv, Raten müssen nichtnegativ sein; beide Beträge verwenden eine Währung. Rest = Bruttoeinkommen − Raten; Steuern, Miete, Essen und andere Ausgaben sind noch nicht abgezogen. Die Quote darf über 100 % liegen. Die 30-%- und 43-%-Bereiche bleiben illustrative neutrale Bereiche ohne Kreditentscheidung.",
        "example": "Raten von 900 € bei einem Einkommen von 3000 € ergeben eine Quote von 30 %. Bei Raten null und positivem Einkommen beträgt die Quote 0 %; 180 000 / 150 000 ergibt 120 % ohne Deckelung bei 100 %.",
        "disclaimer": "Verhältnis der Kreditraten zum Einkommen vor Steuern. Illustrative Bereiche sind weder Vorschrift noch Schätzung der Ausfallwahrscheinlichkeit. Schuldumfang, Einkommensprüfung und Bewilligung hängen von Bank und örtlichen Regeln ab; Steuern und Lebenshaltung fehlen.",
        "faq": [
          {
            "q": "Welche Raten zählen mit?",
            "a": "Regelmäßige Verpflichtungen: Kredit- und Darlehensraten, Mindestbeträge auf Karten, Ratenkäufe. Miete und Nebenkosten bleiben meist außen vor, sofern deine Bank sie nicht einbezieht."
          },
          {
            "q": "Einkommen vor oder nach Steuern?",
            "a": "Dieser DTI verwendet Einkommen vor Steuern. Mit Nettoeinkommen als Nenner misst du den Ratenanteil am verfügbaren Budget und erhältst einen anderen Wert: 45 000 / 150 000 = 30 %, aber 45 000 / 120 000 = 37,5 %. Halte die Bezugsbasis beim Vergleich gleich."
          },
          {
            "q": "Sind die Schwellen eine Regel?",
            "a": "Nein. Diese illustrativen Bereiche bestätigen weder Tragbarkeit noch Kreditanspruch. Banken und Produkte verwenden unterschiedliche Grenzen und Schulddefinitionen; 43 % ist keine universelle Regel."
          },
          {
            "q": "Warum übersteigt die Quote 100 %?",
            "a": "Die Raten sind größer als das Einkommen. Der Rechner zeigt das, statt zu deckeln, denn die Lage selbst ist die Antwort."
          }
        ],
        "help": {
          "income": "Monatseinkommen vor Steuern und Abzügen für Brutto-DTI. Auch der Rest liegt vor Steuern und Lebenshaltungskosten und ist kein frei verfügbares Budget."
        },
        "sources": [
          "https://www.consumerfinance.gov/ask-cfpb/what-is-a-debt-to-income-ratio-en-1791/"
        ]
      },
      "es": {
        "path": "/es/finanzas/ratio-deuda-ingresos/",
        "h1": "Calculadora de ratio deuda-ingresos",
        "longDescription": "El ratio deuda-ingresos relaciona las cuotas mensuales de deuda con los ingresos mensuales antes de impuestos. Compara flujos del mismo mes, no toda la deuda con los ingresos anuales. Las bandas hasta el 30 %, por encima del 30 % hasta el 43 %, y por encima del 43 % son una escala ilustrativa de esta herramienta. No determinan aprobación de crédito, seguridad del presupuesto ni límites de un prestamista. El saldo tras las cuotas todavía debe cubrir impuestos y otros gastos.",
        "howToUse": [
          "Introduce todas las cuotas mensuales, no el saldo total de deuda.",
          "Introduce ingresos mensuales brutos en la misma moneda.",
          "Lee el ratio y la banda ilustrativa; el saldo aún no es un presupuesto disponible.",
          "Para una solicitud, consulta las definiciones de deuda e ingresos del prestamista."
        ],
        "howItWorks": "DTI = cuotas mensuales de deuda ÷ ingresos mensuales brutos × 100 %. Los ingresos deben ser positivos y las cuotas no negativas, en una misma moneda. Saldo = ingresos brutos − cuotas; todavía no se han descontado impuestos, alquiler, comida ni otros gastos. El ratio puede superar el 100 %. Las bandas del 30 % y 43 % se mantienen como intervalos ilustrativos neutrales, sin decisión crediticia.",
        "example": "Unas cuotas de 450 frente a unos ingresos de 1500 dan un DTI del 30 %. Cuotas cero con ingresos positivos dan 0 %; 180 000 / 150 000 da 120 % sin limitarlo al 100 %.",
        "disclaimer": "Ratio de cuotas a ingresos antes de impuestos. Las bandas ilustrativas no son normas ni estimaciones de impago. Las obligaciones incluidas, la verificación de ingresos y la aprobación dependen del prestamista y de las reglas locales; impuestos y coste de vida no se modelan.",
        "faq": [
          {
            "q": "¿Qué cuotas cuentan?",
            "a": "Las obligaciones periódicas: cuotas de préstamos e hipotecas, mínimos de tarjetas, compras a plazos. El alquiler y los suministros suelen quedar fuera salvo que tu prestamista los incluya."
          },
          {
            "q": "¿Los ingresos son antes o después de impuestos?",
            "a": "Este DTI usa ingresos antes de impuestos. Dividir por ingresos netos mide las cuotas respecto al presupuesto disponible y da otro porcentaje: 45 000 / 150 000 = 30 %, frente a 45 000 / 120 000 = 37,5 %. Mantén la misma base al comparar."
          },
          {
            "q": "¿Los umbrales son una norma?",
            "a": "No. Las bandas ilustrativas no prueban capacidad de pago ni elegibilidad. Los prestamistas y productos usan límites y obligaciones distintos; el 43 % no es una regla universal."
          },
          {
            "q": "¿Por qué el ratio supera el 100 %?",
            "a": "Las cuotas son mayores que los ingresos. La calculadora lo muestra en vez de recortarlo, porque la situación en sí es la respuesta."
          }
        ],
        "help": {
          "income": "Ingresos mensuales antes de impuestos y deducciones para DTI bruto. El resto también es previo a impuestos y gastos de vida, no presupuesto disponible."
        },
        "sources": [
          "https://www.consumerfinance.gov/ask-cfpb/what-is-a-debt-to-income-ratio-en-1791/"
        ]
      }
    }
  },
  {
    "id": "emergency-fund",
    "inputs": {
      "monthlyExpenses": 100,
      "months": 1.5,
      "saved": 200
    },
    "expected": 150,
    "rows": [
      {
        "index": 0,
        "value": 0
      },
      {
        "index": 1,
        "value": 1.5
      },
      {
        "index": 2,
        "value": 100
      }
    ],
    "blankField": "monthlyExpenses",
    "domainField": "months",
    "domainInvalid": 0.5,
    "boundary": {
      "inputs": {
        "monthlyExpenses": 100,
        "months": 2,
        "saved": 0
      },
      "expected": 200,
      "rows": [
        {
          "index": 0,
          "value": 200
        },
        {
          "index": 1,
          "value": 0
        },
        {
          "index": 2,
          "value": 0
        }
      ],
      "rowCount": 3
    },
    "defaultExpected": 510000,
    "primaryUnit": "money",
    "moneyRows": [
      0
    ],
    "defaults": {
      "monthlyExpenses": 85000,
      "months": 6,
      "saved": 210000
    },
    "moneyFields": [
      "monthlyExpenses",
      "saved"
    ],
    "pages": {
      "ru": {
        "path": "/ru/finance/emergency-fund/",
        "h1": "Калькулятор финансовой подушки",
        "longDescription": "Финансовая подушка переводит выбранный запас месяцев в денежную цель по текущим расходам. При расходах 85 000 шесть месяцев означают 510 000; доход сам по себе эту цель не определяет. Отдельно видны недостающая сумма, покрытие и готовность. Покрытие и готовность ограничены выбранной целью: при запасе на пять месяцев и цели четыре инструмент покажет четыре месяца и 100 %. Это завершение указанной цели, а не гарантия защиты от любого события или вывод о том, что лишние деньги нужно инвестировать.",
        "howToUse": [
          "Введите настоящие месячные расходы, а не доход.",
          "Выберите, на сколько месяцев хотите запас.",
          "Укажите, сколько уже отложено именно на эту цель.",
          "Считайте только те деньги, до которых реально добраться за день-другой."
        ],
        "howItWorks": "Цель T = месячные расходы E × запас M месяцев. Не хватает = max(T−S,0), где S — накоплено. Готовность = min(S/T×100 %,100 %); покрытые месяцы = min(S/E,M). E>0, M≥1, S≥0; дробный запас, например 2,5 месяца, допускается. Накопления сверх цели не уменьшают её и не увеличивают две ограниченные строки. Все суммы — в одной валюте и сегодняшних ценах.",
        "example": "При расходах 85 000 ₽ и цели в шесть месяцев нужно 510 000 ₽; накопленные 210 000 ₽ покрывают 2,471 месяца. При расходах 50 000, цели четыре месяца и накопленных 250 000 цель равна 200 000, нехватка 0, готовность 100 %, покрытие ограничено четырьмя месяцами.",
        "disclaimer": "Текущие расходы и заданная цель без начисления дохода и будущих взносов. Инфляция, срок накопления, ограничения снятия и риск хранения не моделируются. 100 % означает достижение выбранной суммы, не универсальную финансовую безопасность.",
        "faq": [
          {
            "q": "На сколько месяцев делать подушку?",
            "a": "Количество месяцев вы задаёте сами с учётом необходимых расходов, устойчивости дохода и возможных непредвиденных затрат. Значение шесть в форме — числовой пример, не персональная рекомендация. Универсальный срок расчёт не определяет."
          },
          {
            "q": "Считать по расходам или по доходу?",
            "a": "По расходам, причём настоящим. Доход завышает цель для всякого, кто часть его откладывает, а подушка существует, чтобы покрывать обязательные траты, а не заработок."
          },
          {
            "q": "Где держать подушку?",
            "a": "Там, откуда её можно забрать за день-другой и где она не зависит от колебаний цены. Подушка, до которой не добраться в день увольнения, не выполняет свою единственную задачу."
          },
          {
            "q": "Почему готовность ограничена сотней процентов?",
            "a": "Это прогресс к выбранной цели. Например, расходы 50 000, цель четыре месяца и накоплено 250 000 дают цель 200 000, нехватку 0, готовность 100 % и четыре покрытых месяца. Полный запас равен пяти месяцам, но эта строка ограничена целью."
          }
        ],
        "help": {
          "months": "Плановое покрытие расходов: не меньше одного месяца; дробное значение допустимо, например 1,5 месяца. Число месяцев выбирается вами, а не признаётся достаточным моделью."
        },
        "sources": [
          "https://www.consumerfinance.gov/an-essential-guide-to-building-an-emergency-fund/"
        ]
      },
      "en": {
        "path": "/en/finance/emergency-fund-calculator/",
        "h1": "Emergency fund calculator",
        "longDescription": "An emergency fund translates a chosen number of months into a cash target using current expenses. Expenses of 85,000 require 510,000 for six months; income alone does not set this target. The shortfall, coverage and progress are separate. Both coverage and progress are capped at the chosen goal: five months of savings against a four-month goal shows four months and 100%. Reaching that goal does not guarantee protection from every emergency or imply that the excess should be invested.",
        "howToUse": [
          "Enter your real monthly expenses, not your income.",
          "Choose how many months of cover you want.",
          "Enter what you have already set aside for this purpose.",
          "Count only money you could actually reach within a day or two."
        ],
        "howItWorks": "Target T = monthly expenses E × M months of cover. Shortfall = max(T−S,0), where S is saved. Progress = min(S/T×100%,100%); covered months = min(S/E,M). Expenses must be positive, months at least 1 and savings nonnegative. Fractional cover such as 2.5 months is allowed. Savings above the goal neither reduce the target nor increase the two capped rows. All money uses one currency and today’s prices.",
        "example": "Expenses of 85,000 with a six-month goal need 510,000; 210,000 saved covers 2.471 months. Expenses of 50,000, a four-month goal and 250,000 saved give a 200,000 target, zero shortfall, 100% progress and coverage capped at four months.",
        "disclaimer": "Current expenses and a chosen target, without earnings or future contributions. Inflation, accumulation time, withdrawal restrictions and storage risk are not modelled. 100% means reaching the chosen amount, not universal financial safety.",
        "faq": [
          {
            "q": "How many months should the fund cover?",
            "a": "Choose the months for your necessary expenses, income stability and possible unexpected costs. The default of six is a numerical example, not a personal recommendation. The calculator does not determine a universally sufficient reserve."
          },
          {
            "q": "Should I use expenses or income?",
            "a": "Expenses, and the real ones. Income overstates the target for anyone who saves part of it, and the fund exists to cover what you must spend, not what you happen to earn."
          },
          {
            "q": "Where should the fund be kept?",
            "a": "Somewhere reachable within a day or two and not exposed to price swings. A fund you cannot access on the day you lose your job is not performing its only function."
          },
          {
            "q": "Why is progress capped at a hundred per cent?",
            "a": "It measures progress towards the selected goal. Expenses of 50,000, a four-month goal and 250,000 saved give a 200,000 target, no shortfall, 100% progress and four covered months. Total holdings cover five months, but this row is goal-capped."
          }
        ],
        "help": {
          "months": "Planned expense coverage of at least one month; fractions such as 1.5 months are allowed. You choose the duration; the model does not certify it as sufficient."
        },
        "sources": [
          "https://www.consumerfinance.gov/an-essential-guide-to-building-an-emergency-fund/"
        ]
      },
      "uk": {
        "path": "/uk/finansy/finansova-podushka/",
        "h1": "Калькулятор фінансової подушки",
        "longDescription": "Фінансова подушка переводить вибраний запас місяців у грошову ціль за поточними витратами. Витрати 85 000 означають 510 000 на шість місяців; сам дохід ціль не визначає. Окремо видно нестачу, покриття та готовність. Покриття й готовність обмежені ціллю: запас на п’ять місяців за цілі чотири покаже чотири місяці та 100 %. Досягнення цілі не гарантує захисту від кожної події та не означає, що надлишок потрібно інвестувати.",
        "howToUse": [
          "Введіть щомісячні витрати — саме витрати, а не дохід.",
          "Задайте бажаний запас у місяцях.",
          "Введіть уже накопичену суму."
        ],
        "howItWorks": "Ціль T = місячні витрати E × запас M місяців. Нестача = max(T−S,0), де S — накопичено. Готовність = min(S/T×100 %,100 %); покриті місяці = min(S/E,M). E>0, M≥1, S≥0; дробовий запас на кшталт 2,5 місяця допустимий. Надлишок не зменшує ціль і не збільшує два обмежені рядки. Усі суми в одній валюті та сьогоднішніх цінах.",
        "example": "За витрат 85 000 ₴ і цілі в шість місяців потрібно 510 000 ₴; накопичені 210 000 ₴ покривають 2,471 місяця. За витрат 50 000, цілі чотири місяці й накопичених 250 000 ціль 200 000, нестача 0, готовність 100 %, покриття обмежене чотирма місяцями.",
        "disclaimer": "Поточні витрати й обрана ціль без доходу та майбутніх внесків. Інфляція, строк накопичення, обмеження зняття й ризик зберігання не моделюються. 100 % означає досягнення обраної суми, а не загальну фінансову безпеку.",
        "faq": [
          {
            "q": "Скільки місяців запасу потрібно?",
            "a": "Запас місяців обираєте ви з огляду на необхідні витрати, стійкість доходу та можливі несподівані затрати. Початкове значення шість є числовим прикладом, а не особистою рекомендацією. Універсальний достатній запас розрахунок не визначає."
          },
          {
            "q": "Чому рахувати від витрат, а не від доходу?",
            "a": "Бо подушка має покривати життя без доходу. Витрати — це те, що доведеться платити в будь-якому разі; дохід у цей момент відсутній за визначенням."
          },
          {
            "q": "Де тримати ці гроші?",
            "a": "Калькулятор не обирає рахунок або продукт. Перевірте доступність грошей, строки зняття, комісії та ризик зміни вартості. Сума, яку неможливо використати для потрібного платежу, не забезпечує такого покриття."
          },
          {
            "q": "Чи входять сюди борги?",
            "a": "Мінімальні регулярні платежі за боргами можна включити до місячних витрат, якщо резерв має їх покривати. Уникайте подвійного врахування тих самих платежів. Розрахунок не визначає, що слід погасити раніше за створення резерву."
          },
          {
            "q": "Чому покриття подушки залежить від заданої цілі?",
            "a": "Рядок дорівнює min(накопичено/витрати, ціль у місяцях). За витрат 50 000, цілі чотири місяці й накопичених 250 000 показано чотири, хоча повний запас покриває п’ять місяців."
          }
        ],
        "help": {
          "months": "Планове покриття витрат не менше одного місяця; дробове значення допустиме, наприклад 1,5 місяця. Строк обираєте ви, а модель не визнає його достатнім."
        },
        "sources": [
          "https://www.consumerfinance.gov/an-essential-guide-to-building-an-emergency-fund/"
        ]
      },
      "de": {
        "path": "/de/finanzen/notgroschen-rechner/",
        "h1": "Rechner für den Notgroschen",
        "longDescription": "Der Notgroschen übersetzt eine gewählte Monatszahl anhand der laufenden Ausgaben in ein Geldziel. Bei 1700 Monatsausgaben erfordern sechs Monate 10 200; Einkommen allein bestimmt dieses Ziel nicht. Fehlbetrag, Deckung und Fortschritt stehen separat. Deckung und Fortschritt werden beim Ziel gedeckelt: fünf Monate Rücklage bei einem Viermonatsziel ergeben vier Monate und 100 %. Das Erreichen des Ziels garantiert keinen Schutz vor jedem Notfall und bedeutet nicht, dass ein Überschuss angelegt werden muss.",
        "howToUse": [
          "Trage deine wirklichen Monatsausgaben ein und nicht dein Einkommen.",
          "Wähle, wie viele Monate an Deckung du willst.",
          "Trage ein, was du dafür bereits zurückgelegt hast.",
          "Zähle nur Geld, das du innerhalb eines oder zweier Tage erreichen könntest."
        ],
        "howItWorks": "Ziel T = Monatsausgaben E × M Monate Deckung. Fehlbetrag = max(T−S,0), mit Rücklage S. Fortschritt = min(S/T×100 %,100 %); gedeckte Monate = min(S/E,M). E>0, M≥1, S≥0; gebrochene Deckung wie 2,5 Monate ist zulässig. Ersparnisse über dem Ziel senken dieses nicht und erhöhen die zwei gedeckelten Zeilen nicht. Alle Beträge verwenden eine Währung und heutige Preise.",
        "example": "Ausgaben von 1700 € brauchen für sechs Monate 10 200 €; 4200 € zurückgelegt decken 2,471 Monate. Bei Ausgaben 50 000, Ziel vier Monate und Rücklage 250 000 lautet das Ziel 200 000: Fehlbetrag null, Fortschritt 100 %, Deckung auf vier Monate begrenzt.",
        "disclaimer": "Laufende Ausgaben und gewähltes Ziel ohne Erträge oder künftige Einzahlungen. Inflation, Ansparzeit, Entnahmebeschränkungen und Verwahrrisiko werden nicht modelliert. 100 % bedeutet das gewählte Geldziel, keine allgemeine finanzielle Sicherheit.",
        "faq": [
          {
            "q": "Wie viele Monate soll der Notgroschen decken?",
            "a": "Wähle die Monate anhand notwendiger Ausgaben, Einkommensstabilität und möglicher unerwarteter Kosten. Der Standardwert sechs ist ein Zahlenbeispiel, keine persönliche Empfehlung. Der Rechner ermittelt keine universell ausreichende Reserve."
          },
          {
            "q": "Ausgaben oder Einkommen?",
            "a": "Ausgaben, und zwar die wirklichen. Das Einkommen setzt das Ziel für jeden zu hoch an, der einen Teil davon spart, und der Notgroschen deckt das, was du ausgeben musst, und nicht das, was du gerade verdienst."
          },
          {
            "q": "Wo soll der Notgroschen liegen?",
            "a": "Irgendwo, wo er innerhalb eines oder zweier Tage erreichbar ist und keinen Kursschwankungen ausgesetzt. Ein Notgroschen, an den du an dem Tag nicht herankommst, an dem du deine Stelle verlierst, erfüllt seine einzige Aufgabe nicht."
          },
          {
            "q": "Warum ist der Fortschritt bei hundert Prozent gedeckelt?",
            "a": "Gemessen wird der Fortschritt zum gewählten Ziel. Bei 50 000 Ausgaben, vier Zielmonaten und 250 000 Rücklage beträgt das Ziel 200 000: Fehlbetrag 0, Fortschritt 100 %, Deckung vier Monate. Insgesamt sind fünf Monate vorhanden; diese Zeile ist jedoch beim Ziel gedeckelt."
          }
        ],
        "help": {
          "months": "Geplante Ausgabendeckung von mindestens einem Monat; Bruchteile wie 1,5 Monate sind möglich. Du wählst die Dauer; das Modell bestätigt keine ausreichende Reserve."
        },
        "sources": [
          "https://www.consumerfinance.gov/an-essential-guide-to-building-an-emergency-fund/"
        ]
      },
      "es": {
        "path": "/es/finanzas/fondo-de-emergencia/",
        "h1": "Calculadora de fondo de emergencia",
        "longDescription": "El fondo de emergencia convierte unos meses elegidos en un objetivo monetario según los gastos actuales. Gastos de 850 requieren 5100 para seis meses; los ingresos por sí solos no fijan esa meta. Se muestran por separado la falta, la cobertura y el progreso. La cobertura y el progreso se limitan al objetivo: cinco meses ahorrados frente a una meta de cuatro muestran cuatro meses y 100 %. Alcanzar la meta no garantiza protección frente a todo imprevisto ni implica que el exceso deba invertirse.",
        "howToUse": [
          "Introduce tus gastos mensuales reales, no tus ingresos.",
          "Elige cuántos meses de cobertura quieres.",
          "Introduce lo que ya has apartado para este fin.",
          "Cuenta solo el dinero al que podrías acceder de verdad en un día o dos."
        ],
        "howItWorks": "Meta T = gastos mensuales E × M meses de cobertura. Falta = max(T−S,0), con ahorro S. Progreso = min(S/T×100 %,100 %); meses cubiertos = min(S/E,M). E>0, M≥1, S≥0; se admiten meses fraccionarios, como 2,5. El exceso de ahorro no reduce la meta ni aumenta las dos filas limitadas. Los importes usan una moneda y precios actuales.",
        "example": "Unos gastos de 850 con un objetivo de seis meses necesitan 5100; 2100 ahorrados cubren 2,471 meses. Gastos de 50 000, meta de cuatro meses y ahorro de 250 000 dan objetivo de 200 000, falta cero, progreso 100 % y cobertura limitada a cuatro meses.",
        "disclaimer": "Gastos actuales y una meta elegida, sin rendimientos ni aportaciones futuras. No se modelan inflación, tiempo de acumulación, restricciones de retirada ni riesgo de custodia. El 100 % significa alcanzar la cantidad elegida, no seguridad financiera universal.",
        "faq": [
          {
            "q": "¿Cuántos meses debe cubrir el fondo?",
            "a": "Elige los meses según tus gastos necesarios, estabilidad de ingresos y posibles imprevistos. El valor inicial de seis es un ejemplo numérico, no una recomendación personal. La calculadora no determina una reserva suficiente para todo el mundo."
          },
          {
            "q": "¿Debo usar los gastos o los ingresos?",
            "a": "Los gastos, y los reales. Los ingresos exageran el objetivo de quien ahorra una parte, y el fondo existe para cubrir lo que tienes que gastar, no lo que da la casualidad de que ganas."
          },
          {
            "q": "¿Dónde debe guardarse el fondo?",
            "a": "En algún sitio accesible en un día o dos y no expuesto a oscilaciones de precio. Un fondo al que no puedes acceder el día que pierdes el trabajo no cumple su única función."
          },
          {
            "q": "¿Por qué el avance se limita al cien por cien?",
            "a": "Mide el avance hacia la meta elegida. Gastos de 50 000, meta de cuatro meses y ahorro de 250 000 dan objetivo de 200 000, falta 0, progreso 100 % y cuatro meses cubiertos. El ahorro total cubre cinco meses, pero esta fila se limita a la meta."
          }
        ],
        "help": {
          "months": "Cobertura prevista de gastos de al menos un mes; se admiten fracciones como 1,5 meses. Tú eliges el plazo; el modelo no certifica que sea suficiente."
        },
        "sources": [
          "https://www.consumerfinance.gov/an-essential-guide-to-building-an-emergency-fund/"
        ]
      }
    }
  },
  {
    "id": "savings-rate",
    "inputs": {
      "income": 100,
      "expenses": 150
    },
    "expected": -50,
    "rows": [
      {
        "index": 0,
        "value": -50
      },
      {
        "index": 1,
        "value": 100
      },
      {
        "index": 2,
        "value": 150
      }
    ],
    "blankField": "income",
    "domainField": "expenses",
    "domainInvalid": -1,
    "boundary": {
      "inputs": {
        "income": 1,
        "expenses": 0.999
      },
      "expected": 0.1,
      "rows": [
        {
          "index": 0,
          "value": 0.001
        }
      ],
      "rowCount": 3
    },
    "defaultExpected": 30,
    "primaryUnit": "percent",
    "moneyRows": [
      0,
      1,
      2
    ],
    "defaults": {
      "income": 100000,
      "expenses": 70000
    },
    "moneyFields": [
      "income",
      "expenses"
    ],
    "pages": {
      "ru": {
        "path": "/ru/finance/savings-rate/",
        "h1": "Калькулятор нормы сбережений",
        "longDescription": "Норма сбережений показывает долю дохода после налогов, оставшуюся после введённых расходов за тот же период. Это показатель денежного бюджета: при доходе 100 000 и расходах 70 000 остаётся 30 000, или 30 %. Одинаковые проценты при разных доходах дают разные денежные суммы. Для сравнения месяцев нужны одинаковые определения дохода и расходов; показатель сам по себе не определяет финансовую независимость или достаточность резерва.",
        "howToUse": [
          "Введите доход за месяц или другой удобный период.",
          "Введите расходы за тот же период.",
          "Сравните норму с предыдущими периодами: важна динамика, а не одно значение."
        ],
        "howItWorks": "Сбережения S = доход I − расходы E; норма = S/I×100 %. I>0, E≥0, суммы в одной валюте и за один период. E>I даёт отрицательную норму и предупреждение, а не ошибку. Это остаток бюджета, а не изменение чистого капитала. Перевод между собственными счетами не считайте расходом второй раз. Денежные строки обычно округляются до целой единицы, суммы меньше единицы сохраняют дробную часть; проценты считаются до округления.",
        "example": "Доход 100 000 и расходы 70 000 дают сбережения 30 000 и норму 30 %. Доход 50 000 при расходах 60 000 означает остаток −10 000 и норму −20 %; равные доход и расходы дают 0 %.",
        "disclaimer": "Остаток дохода после введённых расходов. Рыночная переоценка активов, чистый капитал, проценты по накоплениям, будущие доходы и персональная достаточность сбережений не определяются. Классификацию расходов и долгов нужно применять последовательно.",
        "faq": [
          {
            "q": "Какая норма сбережений считается хорошей?",
            "a": "Расчёт не устанавливает норму безопасности в 10 % или 20 %. Нужная доля зависит от обязательств, резерва и выбранных целей. Например, 30 % при доходе 100 000 — это 30 000, а при доходе 30 000 — 9000; процент полезен вместе с суммой."
          },
          {
            "q": "Что считать доходом?",
            "a": "Сумму, которая реально поступила за период после налогов. Разовые поступления лучше считать отдельно, иначе норма скачет."
          },
          {
            "q": "Почему норма отрицательная?",
            "a": "Расходы превысили доход: разница покрыта из накоплений или в долг. Калькулятор показывает это отдельной строкой."
          },
          {
            "q": "Как сравнивать норму сбережений за разные сроки?",
            "a": "Используйте доход и расходы за одинаковый период в каждом расчёте. Не сравнивайте годовой доход с месячными расходами. При нерегулярных потоках квартал или год может лучше показать общий остаток, но не решает проблему платежей в конкретную дату."
          }
        ],
        "help": {
          "income": "Фактически полученный доход после налогов за выбранный период. Расходы должны относиться к тому же периоду и той же денежной единице."
        },
        "sources": [
          "https://www.bea.gov/news/pio-release-additional-information",
          "https://files.consumerfinance.gov/f/201603_cfpb_rules-to-live-by_my-spending-rule-to-live-by.pdf"
        ]
      },
      "en": {
        "path": "/en/finance/savings-rate-calculator/",
        "h1": "Savings rate calculator",
        "longDescription": "The savings rate measures after-tax income left after the entered expenses for the same period. It is a cash-budget measure: income of 100,000 and expenses of 70,000 leave 30,000, or 30%. Equal percentages at different incomes leave different amounts. Comparing months requires consistent income and expense definitions; the rate alone does not establish financial independence or reserve adequacy.",
        "howToUse": [
          "Enter income for a month or another period.",
          "Enter expenses for the same period.",
          "Compare the rate with earlier periods."
        ],
        "howItWorks": "Savings S = income I − expenses E; rate = S/I×100%. Income must be positive, expenses nonnegative, with one currency and period. Expenses above income give a negative rate and warning, rather than an error. This is a budget remainder, not a net-worth change. Do not count transfers between your own accounts as another expense. Money rows normally round to whole units, while amounts below one unit retain fractions; the rate uses unrounded values.",
        "example": "Income 100,000 and expenses 70,000 give savings of 30,000 and a rate of 30%. Income of 50,000 and expenses of 60,000 give a −10,000 remainder and −20% rate; equal income and expenses give 0%.",
        "disclaimer": "Income left after entered expenses. Asset revaluation, net worth, savings interest, future income and personal savings adequacy are not determined. Apply expense and debt classifications consistently.",
        "faq": [
          {
            "q": "What is a good savings rate?",
            "a": "The calculation does not establish a safe 10% or 20% threshold. The share needed depends on obligations, reserves and chosen goals. For example, 30% of 100,000 is 30,000, while 30% of 30,000 is 9,000; read the percentage with its amount."
          },
          {
            "q": "What counts as income?",
            "a": "Money that actually arrived during the period, after tax. Keep one-off amounts separate or the rate will swing."
          },
          {
            "q": "Why is my rate negative?",
            "a": "Expenses exceeded income, so the gap was covered from savings or borrowing. The calculator flags this on its own line."
          },
          {
            "q": "How do I compare savings rates over different periods?",
            "a": "Use income and expenses covering the same period in each calculation. Do not pair annual income with monthly expenses. A quarter or year can summarise irregular flows better, but does not solve cash shortages on a particular payment date."
          }
        ],
        "help": {
          "income": "Income actually received after tax in the chosen period. Expenses must use the same period and monetary unit."
        },
        "sources": [
          "https://www.bea.gov/news/pio-release-additional-information",
          "https://files.consumerfinance.gov/f/201603_cfpb_rules-to-live-by_my-spending-rule-to-live-by.pdf"
        ]
      },
      "uk": {
        "path": "/uk/finansy/kalkulyator-normy-zaoshchadzhen/",
        "h1": "Калькулятор норми заощаджень",
        "longDescription": "Норма заощаджень показує частку доходу після податків, що залишається після введених витрат за той самий період. Це показник грошового бюджету: дохід 100 000 і витрати 70 000 залишають 30 000, або 30 %. Рівні проценти за різних доходів означають різні суми. Для порівняння місяців потрібні однакові визначення доходу й витрат; сам показник не визначає фінансову незалежність чи достатність резерву.",
        "howToUse": [
          "Введіть дохід за період.",
          "Введіть витрати за той самий період.",
          "Прочитайте суму заощаджень і норму у відсотках."
        ],
        "howItWorks": "Заощадження S = дохід I − витрати E; норма = S/I×100 %. I>0, E≥0, суми в одній валюті та за один період. E>I дає від’ємну норму й попередження, а не помилку. Це залишок бюджету, не зміна чистого капіталу. Переказ між власними рахунками не рахуйте повторною витратою. Грошові рядки зазвичай округлюються до цілої одиниці, менші за одиницю зберігають дробову частину; проценти обчислюються до округлення.",
        "example": "Дохід 100 000 ₴ і витрати 70 000 ₴ дають заощадження 30 000 ₴ і норму 30 %. Та сама норма за доходу 30 000 ₴ означала б 9000 ₴ заощаджень. Дохід 50 000 за витрат 60 000 дає залишок −10 000 і норму −20 %; рівні дохід та витрати дають 0 %.",
        "disclaimer": "Залишок доходу після введених витрат. Переоцінка активів, чистий капітал, відсотки на накопичення, майбутній дохід і особиста достатність заощаджень не визначаються. Послідовно застосовуйте класифікацію витрат і боргів.",
        "faq": [
          {
            "q": "Чому норма важливіша за суму заощаджень?",
            "a": "За сталих витрат і відсутності податків, інфляції та доходу від накопичень норма 50 % означає, що річний залишок дорівнює річним витратам. Це обмежений арифметичний приклад, не прогноз фінансової незалежності."
          },
          {
            "q": "Яка норма вважається доброю?",
            "a": "Розрахунок не встановлює безпечної межі 10 % або 20 %. Потрібна частка залежить від зобов’язань, резерву та цілей. Наприклад, 30 % від 100 000 — 30 000, а від 30 000 — 9000; процент корисний разом із сумою."
          },
          {
            "q": "Дохід брати до податків чи після?",
            "a": "Після — це те, чим ви реально розпоряджаєтеся. Головне робити це послідовно, інакше порівняння між періодами втратить сенс."
          },
          {
            "q": "Чи вважати погашення боргу заощадженням?",
            "a": "Тут обчислюється грошовий залишок. Якщо погашення тіла боргу входить до введених витрат, воно зменшує залишок, хоча може збільшувати чистий капітал. Для іншого визначення заощаджень потрібна окрема база; не додавайте той самий платіж двічі."
          }
        ],
        "help": {
          "income": "Фактично отриманий дохід після податків за обраний період. Витрати мають належати до того самого періоду й грошової одиниці."
        },
        "sources": [
          "https://www.bea.gov/news/pio-release-additional-information",
          "https://files.consumerfinance.gov/f/201603_cfpb_rules-to-live-by_my-spending-rule-to-live-by.pdf"
        ]
      },
      "de": {
        "path": "/de/finanzen/sparquote-rechner/",
        "h1": "Sparquotenrechner",
        "longDescription": "Die Sparquote misst den Anteil des Einkommens nach Steuern, der nach den eingegebenen Ausgaben desselben Zeitraums übrig bleibt. Sie beschreibt den Geldhaushalt: 3200 Einkommen und 2240 Ausgaben lassen 960 oder 30 % übrig. Gleiche Prozente bei verschiedenen Einkommen bedeuten verschiedene Beträge. Monatsvergleiche brauchen dieselben Einkommens- und Ausgabendefinitionen; die Quote allein bestimmt weder finanzielle Unabhängigkeit noch ausreichende Reserven.",
        "howToUse": [
          "Trage das Einkommen eines Monats oder eines anderen Zeitraums ein.",
          "Trage die Ausgaben desselben Zeitraums ein.",
          "Vergleiche die Quote mit früheren Zeiträumen."
        ],
        "howItWorks": "Ersparnis S = Einkommen I − Ausgaben E; Quote = S/I×100 %. I>0, E≥0, gleiche Währung und gleicher Zeitraum. E>I ergibt eine negative Quote und Warnung statt eines Fehlers. Gemessen wird der Budgetrest, nicht die Veränderung des Nettovermögens. Überweisungen zwischen eigenen Konten nicht erneut als Ausgabe zählen. Geldzeilen werden gewöhnlich auf ganze Einheiten gerundet, Beträge unter einer Einheit behalten Bruchteile; die Quote nutzt ungerundete Werte.",
        "example": "Ein Einkommen von 3200 € bei Ausgaben von 2240 € ergibt 960 € gespart und eine Quote von 30 %. Einkommen 50 000 und Ausgaben 60 000 ergeben einen Rest von −10 000 und eine Quote von −20 %; gleiche Einnahmen und Ausgaben ergeben 0 %.",
        "disclaimer": "Einkommen nach eingegebenen Ausgaben. Vermögensneubewertung, Nettovermögen, Sparzinsen, künftiges Einkommen und persönliche Sparangemessenheit werden nicht bestimmt. Ausgaben und Schulden einheitlich zuordnen.",
        "faq": [
          {
            "q": "Welche Sparquote ist gut?",
            "a": "Der Rechner legt keine sichere Schwelle von 10 % oder 20 % fest. Der benötigte Anteil hängt von Verpflichtungen, Reserve und Zielen ab. Beispielsweise sind 30 % von 100 000 gleich 30 000, von 30 000 aber 9000; lies Quote und Betrag zusammen."
          },
          {
            "q": "Was zählt als Einkommen?",
            "a": "Geld, das im Zeitraum tatsächlich eingegangen ist, nach Steuern. Halte einmalige Beträge getrennt, sonst schwankt die Quote."
          },
          {
            "q": "Warum ist meine Quote negativ?",
            "a": "Die Ausgaben haben das Einkommen überstiegen, die Lücke wurde also aus Erspartem oder auf Kredit gedeckt. Der Rechner weist das in einer eigenen Zeile aus."
          },
          {
            "q": "Wie vergleiche ich Sparquoten verschiedener Zeiträume?",
            "a": "Einkommen und Ausgaben müssen in jeder Rechnung denselben Zeitraum umfassen. Jahresverdienst nicht mit Monatsausgaben kombinieren. Ein Quartal oder Jahr fasst unregelmäßige Ströme oft besser zusammen, löst aber keine Geldlücke an einem bestimmten Zahlungstag."
          }
        ],
        "help": {
          "income": "Tatsächlich erhaltenes Einkommen nach Steuern im gewählten Zeitraum. Ausgaben müssen denselben Zeitraum und dieselbe Geldeinheit verwenden."
        },
        "sources": [
          "https://www.bea.gov/news/pio-release-additional-information",
          "https://files.consumerfinance.gov/f/201603_cfpb_rules-to-live-by_my-spending-rule-to-live-by.pdf"
        ]
      },
      "es": {
        "path": "/es/finanzas/tasa-de-ahorro/",
        "h1": "Calculadora de tasa de ahorro",
        "longDescription": "La tasa de ahorro mide los ingresos después de impuestos que quedan tras los gastos introducidos del mismo periodo. Describe el presupuesto de caja: ingresos de 1000 y gastos de 700 dejan 300, o el 30 %. El mismo porcentaje con ingresos distintos deja cantidades distintas. Comparar meses exige definiciones coherentes; la tasa por sí sola no determina independencia financiera ni suficiencia de reservas.",
        "howToUse": [
          "Introduce los ingresos de un mes o de otro periodo.",
          "Introduce los gastos del mismo periodo.",
          "Compara la tasa con periodos anteriores."
        ],
        "howItWorks": "Ahorro S = ingresos I − gastos E; tasa = S/I×100 %. I>0, E≥0, una moneda y un periodo comunes. E>I produce una tasa negativa y un aviso, no un error. Es el saldo del presupuesto, no el cambio de patrimonio neto. No cuentes una transferencia entre cuentas propias como otro gasto. Las filas monetarias suelen redondearse a unidades enteras; los importes menores que una unidad conservan fracciones. El porcentaje usa valores sin redondear.",
        "example": "Unos ingresos de 1000 y unos gastos de 700 dan un ahorro de 300 y una tasa del 30 %. Ingresos de 50 000 y gastos de 60 000 dejan −10 000 y una tasa del −20 %; ingresos y gastos iguales dan 0 %.",
        "disclaimer": "Ingresos tras los gastos introducidos. No se determinan revalorización de activos, patrimonio neto, intereses del ahorro, ingresos futuros ni suficiencia personal del ahorro. Clasifica gastos y deudas de forma coherente.",
        "faq": [
          {
            "q": "¿Qué tasa de ahorro es buena?",
            "a": "El cálculo no establece un umbral seguro del 10 % o 20 %. La parte necesaria depende de obligaciones, reservas y objetivos. Por ejemplo, el 30 % de 100 000 son 30 000, pero de 30 000 son 9000; lee el porcentaje junto con la cantidad."
          },
          {
            "q": "¿Qué cuenta como ingresos?",
            "a": "El dinero que llegó de verdad durante el periodo, después de impuestos. Mantén aparte los importes puntuales o la tasa oscilará."
          },
          {
            "q": "¿Por qué mi tasa es negativa?",
            "a": "Los gastos superaron a los ingresos, así que la diferencia se cubrió con ahorros o con deuda. La calculadora lo señala en su propia línea."
          },
          {
            "q": "¿Cómo comparar tasas de ahorro de periodos diferentes?",
            "a": "En cada cálculo los ingresos y gastos deben abarcar el mismo periodo. No combines ingresos anuales con gastos mensuales. Un trimestre o año resume mejor flujos irregulares, pero no resuelve la falta de dinero en una fecha concreta de pago."
          }
        ],
        "help": {
          "income": "Ingresos efectivamente recibidos después de impuestos en el periodo elegido. Los gastos deben corresponder al mismo periodo y unidad monetaria."
        },
        "sources": [
          "https://www.bea.gov/news/pio-release-additional-information",
          "https://files.consumerfinance.gov/f/201603_cfpb_rules-to-live-by_my-spending-rule-to-live-by.pdf"
        ]
      }
    }
  },
  {
    "id": "budget-50-30-20",
    "inputs": {
      "income": 1
    },
    "expected": 0.5,
    "rows": [
      {
        "index": 0,
        "value": 0.3
      },
      {
        "index": 1,
        "value": 0.2
      },
      {
        "index": 2,
        "value": 1
      }
    ],
    "blankField": "income",
    "domainField": "income",
    "domainInvalid": 0,
    "boundary": {
      "inputs": {
        "income": 103
      },
      "expected": 52,
      "rows": [
        {
          "index": 0,
          "value": 31
        },
        {
          "index": 1,
          "value": 21
        },
        {
          "index": 2,
          "value": 103
        }
      ],
      "rowCount": 3
    },
    "defaultExpected": 50000,
    "primaryUnit": "money",
    "moneyRows": [
      0,
      1,
      2
    ],
    "defaults": {
      "income": 100000
    },
    "moneyFields": [
      "income"
    ],
    "pages": {
      "ru": {
        "path": "/ru/finance/budget-50-30-20/",
        "h1": "Калькулятор бюджета 50/30/20",
        "longDescription": "Правило 50/30/20 делит месячный доход после налогов на 50 % для нужд, 30 % для желаний и 20 % для сбережений. Тридцать процентов — именно 0,30 дохода, а не треть. Три суммы являются плановыми ориентирами: единственное поле дохода не позволяет узнать фактические расходы или автоматически выявить превышение категории. Сопоставление с вашим бюджетом выполняется отдельно, а пропорция не является обязательной нормой.",
        "howToUse": [
          "Введите месячный доход после налогов.",
          "Сравните три суммы с тем, сколько уходит на самом деле.",
          "Начните с категории, которая расходится сильнее всего."
        ],
        "howItWorks": "Нужды = 0,50×I, желания = 0,30×I, сбережения = 0,20×I, где I — положительный месячный доход после налогов. Неокруглённые доли в сумме равны I. Денежные строки обычно округляются до целой единицы, поэтому сумма отображённых частей может отличаться от дохода; суммы меньше единицы сохраняют дробную часть. Модель не собирает ваши расходы, не распределяет платежи автоматически и не рассчитывает налог из начисленного дохода.",
        "example": "Доход 100 000 даёт 50 000 на нужды, 30 000 на желания и 20 000 на сбережения. При доходе 1 части равны 0,50; 0,30; 0,20 денежной единицы, без округления первой части до 1.",
        "disclaimer": "Учебное распределение одного дохода по фиксированным долям. Не является проверкой реального бюджета, нормативом достаточных сбережений, налоговым расчётом или планом погашения долга. Классификация нужд, желаний и накоплений зависит от вашей ситуации.",
        "faq": [
          {
            "q": "Что считать нуждами?",
            "a": "Жильё, еду, транспорт, коммунальные платежи, лекарства и обязательные платежи по долгам — всё, что нельзя пропустить в следующем месяце."
          },
          {
            "q": "Пропорция обязательна?",
            "a": "Нет, это ориентир. В дорогих городах нужды часто превышают половину, и полезно именно увидеть, насколько."
          },
          {
            "q": "Доход до или после налогов?",
            "a": "После налогов и обязательных удержаний, иначе все три доли завышены."
          },
          {
            "q": "Что делать, если на сбережения не остаётся?",
            "a": "Начните с того, что остаётся, и повышайте долю постепенно. Небольшая регулярная сумма работает лучше амбициозной, от которой отказываются."
          },
          {
            "q": "Почему показанные части бюджета иногда не складываются точно?",
            "a": "Каждая часть округляется отдельно для показа. При доходе 103 неокруглённые суммы равны 51,5; 30,9; 20,6, а целые строки показывают 52, 31 и 21. При доходе 1 доли составляют 0,50; 0,30; 0,20. Для распределения до копейки используйте неокруглённые значения."
          }
        ],
        "help": {
          "income": "Месячный доход после налогов и обязательных удержаний. Форма распределяет только эту сумму; фактические расходы не вводятся."
        },
        "sources": [
          "https://files.consumerfinance.gov/f/201603_cfpb_rules-to-live-by_my-spending-rule-to-live-by.pdf"
        ]
      },
      "en": {
        "path": "/en/finance/budget-50-30-20-calculator/",
        "h1": "50/30/20 budget calculator",
        "longDescription": "The 50/30/20 rule divides monthly after-tax income into 50% for needs, 30% for wants and 20% for savings. Thirty percent is exactly 0.30 of income, rather than one third. The three amounts are planning benchmarks: the income-only form cannot identify actual spending or an overspent category. Compare them with your budget separately; the split is not a mandatory standard.",
        "howToUse": [
          "Enter monthly income after tax.",
          "Compare the three amounts with what you actually spend.",
          "Adjust the categories that differ most."
        ],
        "howItWorks": "Needs = 0.50×I, wants = 0.30×I and savings = 0.20×I, for positive monthly after-tax income I. The unrounded shares sum to I. Money rows normally round to whole units, so displayed parts may not sum exactly to income; amounts below one unit retain fractions. The model does not collect spending, classify payments automatically or calculate tax from gross income.",
        "example": "Income of 100,000 gives 50,000 for needs, 30,000 for wants and 20,000 for savings. Income of 1 gives 0.50, 0.30 and 0.20 monetary units, without rounding the first share up to 1.",
        "disclaimer": "A teaching allocation of one income using fixed shares. It is not an actual budget check, savings-adequacy standard, tax calculation or debt-repayment plan. Classifying needs, wants and savings depends on the situation.",
        "faq": [
          {
            "q": "What counts as a need?",
            "a": "Housing, food, transport, utilities, medicine and minimum debt payments — anything you cannot skip next month."
          },
          {
            "q": "Is the split strict?",
            "a": "No. It is a reference point. In expensive cities needs often exceed half, and the useful step is to see by how much."
          },
          {
            "q": "Before or after tax?",
            "a": "After tax, and after mandatory deductions — otherwise every share is overstated."
          },
          {
            "q": "What if savings do not fit?",
            "a": "Start from what is left and raise it gradually. A small regular share beats an ambitious one you abandon."
          },
          {
            "q": "Why might displayed budget parts not add up exactly?",
            "a": "Each part is rounded separately for display. Income of 103 gives unrounded 51.5, 30.9 and 20.6, with whole-unit rows showing 52, 31 and 21. Income of 1 gives 0.50, 0.30 and 0.20. For cent-exact allocation use the unrounded amounts."
          }
        ],
        "help": {
          "income": "Monthly income after tax and mandatory deductions. The form allocates this amount only; actual expenses are not entered."
        },
        "sources": [
          "https://files.consumerfinance.gov/f/201603_cfpb_rules-to-live-by_my-spending-rule-to-live-by.pdf"
        ]
      },
      "uk": {
        "path": "/uk/finansy/kalkulyator-byudzhetu-50-30-20/",
        "h1": "Калькулятор бюджету 50/30/20",
        "longDescription": "Правило 50/30/20 ділить місячний дохід після податків на 50 % для потреб, 30 % для бажань і 20 % для заощаджень. Тридцять відсотків — це саме 0,30 доходу, а не третина. Три суми є плановими орієнтирами: одне поле доходу не визначає фактичні витрати або перевищення категорії. Зіставлення зі своїм бюджетом виконується окремо, а пропорція не є обов’язковою нормою.",
        "howToUse": [
          "Введіть дохід після податків.",
          "Прочитайте три суми.",
          "Спробуйте віднести реальні витрати до груп — саме це й дає користь."
        ],
        "howItWorks": "Потреби = 0,50×I, бажання = 0,30×I, заощадження = 0,20×I, де I — додатний місячний дохід після податків. Неокруглені частки разом дорівнюють I. Грошові рядки зазвичай округлюються до цілої одиниці, тому показані частини можуть не скластися точно в дохід; менші за одиницю суми зберігають дробову частину. Модель не збирає витрат, не класифікує платежів і не обчислює податок із нарахованого доходу.",
        "example": "Дохід 100 000 ₴ дає 50 000 ₴ на потреби, 30 000 ₴ на бажання і 20 000 ₴ на заощадження. За доходу 1 частки дорівнюють 0,50; 0,30; 0,20 грошової одиниці без округлення першої до 1.",
        "disclaimer": "Навчальний розподіл одного доходу за сталими частками. Це не перевірка реального бюджету, норматив достатніх заощаджень, податковий розрахунок або план погашення боргу. Класифікація потреб, бажань і накопичень залежить від ситуації.",
        "faq": [
          {
            "q": "Що вважати потребою, а що бажанням?",
            "a": "Потреба — те, без чого не обійтися: житло, їжа, транспорт до роботи, ліки, мінімальні платежі за боргами. Бажання — усе, від чого можна відмовитися без шкоди: кав’ярні, підписки, подорожі, нова техніка замість справної."
          },
          {
            "q": "Що робити, якщо потреби вже понад 50 %?",
            "a": "Це звичайна ситуація у великих містах. Тоді пропорція стає орієнтиром, а не нормою: скорочувати доводиться бажання, а в довшій перспективі — працювати з великими статтями на кшталт житла й транспорту."
          },
          {
            "q": "Від якого доходу рахувати пропорцію?",
            "a": "Після. Правило застосовується до грошей, якими ви розпоряджаєтеся, а не до нарахованої суми."
          },
          {
            "q": "Чи можна змінювати пропорції?",
            "a": "Так, і це нормально. 60/20/20 або 50/20/30 — робочі варіанти. Головне лишається тим самим: заощадження мають бути окремою статтею, а не тим, що випадково лишилося наприкінці місяця."
          },
          {
            "q": "Чому показані частини бюджету можуть не скластися точно?",
            "a": "Кожну частину округлено окремо для показу. Дохід 103 дає неокруглені 51,5; 30,9; 20,6, а цілі рядки — 52, 31 і 21. За доходу 1 частки становлять 0,50; 0,30; 0,20. Для розподілу до копійки потрібні неокруглені значення."
          }
        ],
        "help": {
          "income": "Місячний дохід після податків та обов’язкових утримань. Форма розподіляє лише цю суму; фактичні витрати не вводяться."
        },
        "sources": [
          "https://files.consumerfinance.gov/f/201603_cfpb_rules-to-live-by_my-spending-rule-to-live-by.pdf"
        ]
      },
      "de": {
        "path": "/de/finanzen/50-30-20-budget/",
        "h1": "Rechner für das 50-30-20-Budget",
        "longDescription": "Die 50-30-20-Regel teilt das monatliche Nettoeinkommen in 50 % für Bedarf, 30 % für Wünsche und 20 % fürs Sparen. Dreißig Prozent sind genau 0,30 des Einkommens, nicht ein Drittel. Die Beträge sind Planungsrichtwerte: aus dem einzigen Einkommensfeld ergeben sich weder tatsächliche Ausgaben noch überschrittene Kategorien. Vergleiche die Beträge gesondert mit deinem Budget; die Aufteilung ist keine Pflichtnorm.",
        "howToUse": [
          "Trage das monatliche Einkommen nach Steuern ein.",
          "Vergleiche die drei Beträge mit dem, was du tatsächlich ausgibst.",
          "Passe die Kategorie an, die am stärksten abweicht."
        ],
        "howItWorks": "Bedarf = 0,50×I, Wünsche = 0,30×I und Sparen = 0,20×I, mit positivem monatlichem Nettoeinkommen I. Ungerundet ergeben die Anteile zusammen I. Geldzeilen werden gewöhnlich auf ganze Einheiten gerundet, daher können angezeigte Teile vom Einkommen abweichen; Beträge unter einer Einheit behalten Bruchteile. Das Modell sammelt keine Ausgaben, ordnet Zahlungen nicht automatisch zu und berechnet keine Steuern aus Bruttoeinkommen.",
        "example": "Ein Einkommen von 2500 € ergibt 1250 € für den Bedarf, 750 € für Wünsche und 500 € fürs Sparen. Einkommen 1 ergibt 0,50; 0,30; 0,20 Geldeinheiten, ohne den ersten Anteil auf 1 aufzurunden.",
        "disclaimer": "Lehrhafte Aufteilung eines Einkommens nach festen Anteilen. Keine Prüfung des tatsächlichen Budgets, Sparangemessenheitsnorm, Steuerrechnung oder Tilgungsplanung. Die Zuordnung von Bedarf, Wünschen und Sparen hängt von der Situation ab.",
        "faq": [
          {
            "q": "Was zählt als Bedarf?",
            "a": "Wohnen, Essen, Verkehr, Nebenkosten, Arzneimittel und Mindestraten für Kredite — alles, was du im nächsten Monat nicht auslassen kannst."
          },
          {
            "q": "Ist die Aufteilung streng?",
            "a": "Nein. Sie ist ein Anhaltspunkt. In teuren Städten übersteigt der Bedarf oft die Hälfte, und der nützliche Schritt ist zu sehen, um wie viel."
          },
          {
            "q": "Vor oder nach Steuern?",
            "a": "Nach Steuern und nach Pflichtabzügen — sonst ist jeder Anteil zu hoch angesetzt."
          },
          {
            "q": "Was, wenn das Sparen nicht hineinpasst?",
            "a": "Beginne mit dem, was übrig bleibt, und hebe es nach und nach. Ein kleiner regelmäßiger Anteil schlägt einen ehrgeizigen, den du aufgibst."
          },
          {
            "q": "Warum ergeben angezeigte Budgetteile nicht immer exakt die Summe?",
            "a": "Jeder Teil wird gesondert gerundet. Einkommen 103 ergibt ungerundet 51,5; 30,9; 20,6 und ganzzahlig angezeigt 52, 31 und 21. Bei Einkommen 1 lauten die Teile 0,50; 0,30; 0,20. Für centgenaue Verteilung nutze die ungerundeten Beträge."
          }
        ],
        "help": {
          "income": "Monatseinkommen nach Steuern und Pflichtabzügen. Das Formular verteilt nur diesen Betrag; tatsächliche Ausgaben werden nicht eingegeben."
        },
        "sources": [
          "https://files.consumerfinance.gov/f/201603_cfpb_rules-to-live-by_my-spending-rule-to-live-by.pdf"
        ]
      },
      "es": {
        "path": "/es/finanzas/presupuesto-50-30-20/",
        "h1": "Calculadora de presupuesto 50/30/20",
        "longDescription": "La regla 50/30/20 divide los ingresos mensuales netos en 50 % para necesidades, 30 % para deseos y 20 % para ahorro. El treinta por ciento es exactamente 0,30 de los ingresos, no un tercio. Las tres cifras son referencias de planificación: un único campo de ingresos no identifica gastos reales ni categorías excedidas. Compáralas aparte con tu presupuesto; el reparto no es una norma obligatoria.",
        "howToUse": [
          "Introduce los ingresos mensuales netos.",
          "Compara los tres importes con lo que gastas de verdad.",
          "Ajusta las categorías que más se desvíen."
        ],
        "howItWorks": "Necesidades = 0,50×I, deseos = 0,30×I y ahorro = 0,20×I, con ingresos mensuales netos positivos I. Las partes sin redondear suman I. Las filas monetarias suelen redondearse a unidades enteras, así que las partes mostradas pueden diferir del ingreso; importes menores que una unidad conservan fracciones. No se recogen gastos, no se clasifican pagos automáticamente ni se calculan impuestos desde ingresos brutos.",
        "example": "Unos ingresos de 1000 dan 500 para necesidades, 300 para deseos y 200 para ahorro. Ingresos de 1 dan 0,50; 0,30 y 0,20 unidades monetarias, sin redondear la primera parte a 1.",
        "disclaimer": "Reparto educativo de un ingreso con proporciones fijas. No es una comprobación del presupuesto real, un estándar de ahorro suficiente, un cálculo fiscal ni un plan de amortización. Clasificar necesidades, deseos y ahorro depende de la situación.",
        "faq": [
          {
            "q": "¿Qué cuenta como necesidad?",
            "a": "La vivienda, la comida, el transporte, los suministros, la medicina y los pagos mínimos de deudas: todo lo que no puedes saltarte el mes que viene."
          },
          {
            "q": "¿El reparto es estricto?",
            "a": "No. Es un punto de referencia. En ciudades caras las necesidades superan a menudo la mitad, y el paso útil es ver por cuánto."
          },
          {
            "q": "¿Antes o después de impuestos?",
            "a": "Después de impuestos y de las retenciones obligatorias; de lo contrario todas las partes salen exageradas."
          },
          {
            "q": "¿Y si el ahorro no cabe?",
            "a": "Empieza por lo que quede y súbelo poco a poco. Una parte pequeña y constante gana a una ambiciosa que abandonas."
          },
          {
            "q": "¿Por qué las partes mostradas del presupuesto no siempre suman exactamente?",
            "a": "Cada parte se redondea por separado. Ingresos de 103 dan 51,5; 30,9 y 20,6 sin redondear, mostrados como 52, 31 y 21 en unidades enteras. Ingresos de 1 dan 0,50; 0,30 y 0,20. Para repartir al céntimo usa los importes sin redondear."
          }
        ],
        "help": {
          "income": "Ingresos mensuales después de impuestos y deducciones obligatorias. El formulario solo distribuye esa cantidad; no se introducen gastos reales."
        },
        "sources": [
          "https://files.consumerfinance.gov/f/201603_cfpb_rules-to-live-by_my-spending-rule-to-live-by.pdf"
        ]
      }
    }
  }
];
