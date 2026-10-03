// Immutable literal browser fixtures for BusinessWave9 plus the explicitprofitcopy amendment.
// Bodies/routes/defaults are captured ownedsource metadata, not a MAINregistry import.
// Numerical scenarios use prior independentDecimal/algebraic literals; applicationcompute
// was used only for a metadata capture and is absent from this browserfixture/spec.
export const locales=['ru','en','uk','de','es']as const;
export type Locale=(typeof locales)[number];
export type Values=Record<string,string|number>;
export type BrowserCase={id:string;inputs:Values;expected:number;rows:number[];rowCount:number;defaults:Values;defaultExpected:number;blankField:string;domainField:string;domainInvalid:number|string;primaryUnit:string;moneyFields:string[];moneyRows:number[];fieldNames:string[];inactive:string[];countFields:string[];optionalAmount:string|null;boundary:{inputs:Values;expected:number;rows:number[];rowCount:number;inactive:string[]};pages:Record<Locale,{path:string;h1:string;longDescription:string;howToUse:string[];howItWorks:string;example:string;disclaimer:string;faq:{q:string;a:string}[];sources:string[]}>};
export const cases:readonly BrowserCase[]=[
  {
    "id": "ad-budget-funnel",
    "inputs": {
      "budget": 10,
      "cpc": 4,
      "crPct": 20,
      "aov": 8
    },
    "expected": 4,
    "rows": [
      2.5,
      0.5,
      0.4,
      20
    ],
    "rowCount": 4,
    "defaults": {
      "budget": 150000,
      "cpc": 24,
      "crPct": 2.4,
      "aov": 4900
    },
    "defaultExpected": 735000.0,
    "blankField": "budget",
    "domainField": "crPct",
    "domainInvalid": 100.01,
    "primaryUnit": "money",
    "moneyFields": [
      "budget",
      "cpc",
      "aov"
    ],
    "moneyRows": [
      3
    ],
    "fieldNames": [
      "budget",
      "cpc",
      "crPct",
      "aov"
    ],
    "inactive": [],
    "countFields": [],
    "optionalAmount": null,
    "boundary": {
      "inputs": {
        "budget": 10,
        "cpc": 4,
        "crPct": 0,
        "aov": 8
      },
      "expected": 0,
      "rows": [
        2.5,
        0,
        0
      ],
      "rowCount": 3,
      "inactive": []
    },
    "pages": {
      "ru": {
        "path": "/ru/business/ad-budget-funnel/",
        "h1": "Калькулятор рекламного бюджета",
        "longDescription": "Рекламный бюджет превращается в ожидаемые клики, заказы и выручку при заданных цене клика, конверсии и среднем чеке. Клики и заказы здесь могут быть дробными математическими ожиданиями, а не обещанным числом покупок. ROAS сравнивает выручку с рекламным расходом: без себестоимости и маржи он не определяет прибыльность. Модель предполагает неизменные CPC и конверсию для всего бюджета и не оценивает аукцион, возвраты или повторные покупки.",
        "howToUse": [
          "Введите бюджет, который планируете потратить.",
          "Укажите цену клика, ожидаемую на аукционе.",
          "Укажите конверсию из клика в заказ.",
          "Введите средний чек по рекламируемым товарам.",
          "Проверьте маржинальный доход отдельно: ROAS 1 не равен покрытию себестоимости. Все денежные входы имеют одну выбранную валюту без обмена."
        ],
        "howItWorks": "Клики = бюджет ÷ цена клика. Заказы = клики × конверсия ÷ 100. Выручка = заказы × средний чек, а ROAS — выручка ÷ бюджет. Цена заказа = CPC ÷ (конверсия/100), только при конверсии выше нуля. При 0 % заказов и выручки нет, а цена заказа не показана. В этой модели каждый клик даёт не более одного заказа, поэтому конверсия ограничена 0–100 %.",
        "example": "Бюджет 150 000 ₽ при цене клика 24 ₽, конверсии 2,4 % и чеке 4 900 ₽ даёт 735 000 ₽ — ROAS 4,9. При той же цене клика и конверсии 0 % заказы и выручка 0, цена заказа не показывается.",
        "disclaimer": "Постоянные CPC и вероятность заказа; прогноз выручки до неучтённых затрат, без универсального порога прибыли.",
        "faq": [
          {
            "q": "К какому входу стоит отнестись внимательнее всего?",
            "a": "К конверсии. Она умножается через всю цепочку, и предположение о 3 % против реальных 1,5 % вдвое режет выручку, выглядя на странице небольшой разницей."
          },
          {
            "q": "Какой ROAS считать достаточным?",
            "a": "Порог зависит от маржинального дохода до рекламы. Если он составляет 30 % выручки, только покрытие рекламного расхода требует ROAS = 1/0,30 = 3,3333… . Прочие расходы могут повысить порог; ROAS 1 не означает безубыточность."
          },
          {
            "q": "Учитывает ли выручка возвраты?",
            "a": "Возвраты отдельно не моделируются. Используйте средний чек и долю состоявшихся заказов на согласованной базе или пересчитайте возвраты отдельно. Универсального уменьшения выручки на 20 % здесь нет."
          },
          {
            "q": "Зачем показывать цену заказа отдельно?",
            "a": "Она напрямую сравнивается со средним чеком и с вашей маржой. Если заказ обходится дороже, чем приносит, воронка сломана независимо от того, как выглядят итоги."
          }
        ],
        "sources": [
          "https://support.google.com/google-ads/answer/14074?hl=en",
          "https://support.google.com/google-ads/answer/2684489?hl=en"
        ]
      },
      "en": {
        "path": "/en/business/ad-budget-funnel-calculator/",
        "h1": "Ad budget funnel calculator",
        "longDescription": "This forecast turns an advertising budget into expected clicks, orders and revenue using a supplied click price, conversion probability and average order value. Fractional clicks and orders are expected averages rather than promised purchases. ROAS compares revenue with advertising cost; profitability also needs product costs and margin. The model keeps CPC and conversion constant across the budget and does not model auctions, returns or repeat purchases.",
        "howToUse": [
          "Enter the budget you plan to spend.",
          "Enter the cost per click you expect from the auction.",
          "Enter the conversion rate from click to order.",
          "Enter the average order value for the products advertised.",
          "Check contribution margin separately: ROAS 1 does not cover product costs by itself. Use one chosen currency for every amount; no exchange occurs."
        ],
        "howItWorks": "Clicks = budget ÷ cost per click. Orders = clicks × conversion ÷ 100. Revenue = orders × average order value, and ROAS is revenue ÷ budget. Cost per order = CPC ÷ (conversion/100), only for positive conversion. At 0%, orders and revenue are zero and cost per order is omitted. Each click produces at most one order in this model, so conversion is limited to 0–100%.",
        "example": "A budget of 150,000 at 24 per click with 2.4% conversion and a 4,900 order value returns 735,000 — a ROAS of 4.9. With the same click price and 0% conversion, orders and revenue are 0 and cost per order is omitted.",
        "disclaimer": "Constant CPC and order probability; revenue forecast before unentered costs, without a universal profitability threshold.",
        "faq": [
          {
            "q": "Which input should I be most careful with?",
            "a": "The conversion rate. It multiplies through the whole chain, and a guess of 3% against a real 1.5% halves the revenue while looking like a small difference on the page."
          },
          {
            "q": "What ROAS is good enough?",
            "a": "The threshold depends on contribution margin before ads. With 30% of revenue available to cover advertising, covering ads alone needs ROAS = 1/0.30 = 3.3333… . Other costs can raise the threshold; ROAS 1 does not establish break-even."
          },
          {
            "q": "Does the revenue include returns?",
            "a": "Returns are not modelled separately. Use an order value and completed-order conversion on a consistent basis, or account for returns separately. There is no universal 20% revenue adjustment."
          },
          {
            "q": "Why show the cost per order separately?",
            "a": "Because it compares directly with the average order value and with your margin. If an order costs more to acquire than it earns, the funnel is broken regardless of how the totals look."
          }
        ],
        "sources": [
          "https://support.google.com/google-ads/answer/14074?hl=en",
          "https://support.google.com/google-ads/answer/2684489?hl=en"
        ]
      },
      "uk": {
        "path": "/uk/business/reklamnyy-byudzhet/",
        "h1": "Калькулятор рекламного бюджету",
        "longDescription": "Рекламний бюджет перетворюється на очікувані кліки, замовлення й виторг за заданих ціни кліка, конверсії та середнього чека. Дробові кліки й замовлення є математичними очікуваннями, а не обіцянкою продажів. ROAS порівнює виторг із рекламними витратами; прибутковість потребує собівартості й маржі. Модель тримає CPC і конверсію сталими для всього бюджету та не моделює аукціон, повернення або повторні покупки.",
        "howToUse": [
          "Введіть бюджет кампанії.",
          "Введіть ціну кліка й очікувану конверсію у відсотках.",
          "Введіть середній чек.",
          "Перевірте маржинальний дохід окремо: ROAS 1 сам по собі не покриває собівартість. Усі суми мають одну вибрану валюту без обміну."
        ],
        "howItWorks": "Кліки дорівнюють бюджет ÷ ціна кліка. Замовлення — кліки × конверсія ÷ 100. Виторг — замовлення × середній чек, а ROAS — виторг ÷ бюджет. Кожен етап множиться на наступний, тому помилка в будь-якому з них проходить крізь усю воронку. Ціна замовлення = CPC ÷ (конверсія/100), лише за додатної конверсії. За 0 % замовлення й виторг нульові, а ціна замовлення не показується. Один клік дає не більше одного замовлення, тому конверсія обмежена 0–100 %.",
        "example": "Бюджет 150 000 ₴ за ціни кліка 24 ₴, конверсії 2,4 % і чека 4900 ₴ дає 735 000 ₴ — ROAS 4,9. Приріст конверсії до 3 % підняв би виторг до 918 750 ₴ без збільшення бюджету. За тієї самої ціни кліка й конверсії 0 % замовлення та виторг 0, ціна замовлення не показується.",
        "disclaimer": "Сталі CPC та ймовірність замовлення; прогноз виторгу до невказаних витрат без універсального порога прибутку.",
        "faq": [
          {
            "q": "Який етап воронки покращувати першим?",
            "a": "Порівняйте вартість і реалістичність зміни кожного етапу. Підвищення конверсії з 2,4 % до 3 % дає той самий множник 1,25, що зниження CPC з 24 до 19,2 за незмінних бюджету й чека. Жодна з цих змін не є автоматично доступнішою."
          },
          {
            "q": "Чому прогноз розходиться з фактом?",
            "a": "CPC та конверсія можуть змінюватися через аудиторію, аукціон і пропозицію. Зростання бюджету саме по собі не гарантує ні дорожчих кліків, ні нижчої конверсії. Перевірте кілька обґрунтованих сценаріїв замість одного точного прогнозу."
          },
          {
            "q": "Чи враховано повторні покупки?",
            "a": "Повторні покупки окремо не враховані. Вони можуть збільшити цінність клієнта, але також потребують витрат, часу й утримання. Їхній майбутній внесок не гарантований цим ROAS."
          },
          {
            "q": "Що робити, якщо ROAS нижчий за беззбитковий?",
            "a": "Спочатку визначте власний поріг з маржинального доходу до реклами та інших витрат. За частки 30 % лише реклама покривається при ROAS 3,3333… . Потім порівняйте обґрунтовані зміни CPC, конверсії й чека; сам ROAS не обчислює чистий прибуток."
          }
        ],
        "sources": [
          "https://support.google.com/google-ads/answer/14074?hl=en",
          "https://support.google.com/google-ads/answer/2684489?hl=en"
        ]
      },
      "de": {
        "path": "/de/business/werbebudget-trichter/",
        "h1": "Rechner für den Werbetrichter",
        "longDescription": "Diese Prognose übersetzt ein Werbebudget über Klickpreis, Konversionswahrscheinlichkeit und Bestellwert in erwartete Klicks, Bestellungen und Umsatz. Bruchteile von Klicks oder Bestellungen sind Erwartungswerte, keine zugesagten Verkäufe. ROAS vergleicht Umsatz mit Werbekosten; für Rentabilität fehlen Warenkosten und Marge. CPC und Konversion bleiben für das gesamte Budget konstant. Auktionen, Rücksendungen und Wiederholungskäufe werden nicht modelliert.",
        "howToUse": [
          "Trage das Budget ein, das du ausgeben willst.",
          "Trage den Klickpreis ein, den du in der Auktion erwartest.",
          "Trage die Konversionsrate vom Klick zur Bestellung ein.",
          "Trage den durchschnittlichen Bestellwert der beworbenen Waren ein.",
          "Prüfe den Deckungsbeitrag separat: ROAS 1 deckt nicht automatisch Warenkosten. Alle Beträge verwenden eine gewählte Währung ohne Umrechnung."
        ],
        "howItWorks": "Klicks = Budget ÷ Klickpreis. Bestellungen = Klicks × Konversion ÷ 100. Umsatz = Bestellungen × durchschnittlicher Bestellwert, und der ROAS ist Umsatz ÷ Budget. Bestellkosten = CPC ÷ (Konversion/100), nur bei positiver Konversion. Bei 0 % entstehen null Bestellungen und Umsatz; Bestellkosten entfallen. Ein Klick liefert hier höchstens eine Bestellung, daher gilt 0–100 %.",
        "example": "Ein Budget von 3000 € bei 0,48 € je Klick, 2,4 % Konversion und einem Bestellwert von 98 € bringt 14 700 € — ein ROAS von 4,9. Bei gleichem Klickpreis und 0 % Konversion sind Bestellungen und Umsatz 0; Bestellkosten entfallen.",
        "disclaimer": "Konstanter CPC und Bestellwahrscheinlichkeit; Umsatzprognose vor fehlenden Kosten ohne allgemeine Gewinnschwelle.",
        "faq": [
          {
            "q": "Bei welcher Eingabe muss ich am vorsichtigsten sein?",
            "a": "Bei der Konversionsrate. Sie geht als Faktor durch die ganze Kette, und eine Schätzung von 3 % gegen tatsächliche 1,5 % halbiert den Umsatz, während sie auf der Seite wie ein kleiner Unterschied aussieht."
          },
          {
            "q": "Welcher ROAS reicht aus?",
            "a": "Der Schwellenwert hängt vom Deckungsbeitrag vor Werbung ab. Bei 30 % Umsatzanteil für Werbung verlangt allein deren Deckung ROAS = 1/0,30 = 3,3333… . Weitere Kosten können den Wert erhöhen; ROAS 1 beweist keine Kostendeckung."
          },
          {
            "q": "Sind Rücksendungen im Umsatz enthalten?",
            "a": "Rücksendungen werden nicht getrennt modelliert. Bestellwert und Quote erfolgreicher Bestellungen müssen dieselbe Grundlage nutzen, oder Rücksendungen sind separat abzuziehen. Eine allgemeine Umsatzkorrektur von 20 % gibt es nicht."
          },
          {
            "q": "Warum stehen die Kosten je Bestellung gesondert da?",
            "a": "Weil sie sich unmittelbar mit dem durchschnittlichen Bestellwert und mit deiner Marge vergleichen lassen. Kostet eine Bestellung mehr in der Gewinnung, als sie einbringt, ist der Trichter kaputt, wie die Summen auch aussehen."
          }
        ],
        "sources": [
          "https://support.google.com/google-ads/answer/14074?hl=en",
          "https://support.google.com/google-ads/answer/2684489?hl=en"
        ]
      },
      "es": {
        "path": "/es/negocios/embudo-de-presupuesto-publicitario/",
        "h1": "Calculadora de embudo de presupuesto publicitario",
        "longDescription": "Esta previsión convierte el presupuesto publicitario en clics, pedidos e ingresos esperados mediante el precio por clic, la probabilidad de conversión y el valor medio del pedido. Los clics y pedidos fraccionarios son medias esperadas, no ventas prometidas. ROAS compara ingresos con gasto publicitario; la rentabilidad requiere costes del producto y margen. CPC y conversión permanecen constantes para todo el presupuesto, sin modelar subastas, devoluciones ni compras repetidas.",
        "howToUse": [
          "Introduce el presupuesto que piensas gastar.",
          "Introduce el coste por clic que esperas de la subasta.",
          "Introduce la tasa de conversión de clic a pedido.",
          "Introduce el ticket medio de los productos anunciados.",
          "Comprueba aparte el margen de contribución: ROAS 1 no cubre por sí solo el producto. Usa una moneda elegida para todos los importes, sin conversión."
        ],
        "howItWorks": "Clics = presupuesto ÷ coste por clic. Pedidos = clics × conversión ÷ 100. Ingresos = pedidos × ticket medio, y el ROAS es ingresos ÷ presupuesto. Coste por pedido = CPC ÷ (conversión/100), solo con conversión positiva. Con 0%, pedidos e ingresos son cero y se omite el coste por pedido. Cada clic genera como máximo un pedido en este modelo; la conversión se limita a 0–100%.",
        "example": "Un presupuesto de 15 000 a 2,40 por clic con un 2,4 % de conversión y un ticket de 49 devuelve 7350: un ROAS de 0,49. Con el mismo precio por clic y conversión 0%, pedidos e ingresos son 0 y se omite el coste por pedido.",
        "disclaimer": "CPC y probabilidad de pedido constantes; previsión de ingresos antes de costes ausentes, sin umbral universal de beneficio.",
        "faq": [
          {
            "q": "¿Con qué dato debo tener más cuidado?",
            "a": "Con la tasa de conversión. Se multiplica a lo largo de toda la cadena, y suponer un 3 % frente a un 1,5 % real reduce los ingresos a la mitad pareciendo una diferencia pequeña en la página."
          },
          {
            "q": "¿Qué ROAS es suficiente?",
            "a": "El umbral depende del margen de contribución antes de publicidad. Si queda el 30% de los ingresos para cubrir anuncios, solo cubrirlos exige ROAS = 1/0,30 = 3,3333… . Otros costes pueden elevarlo; ROAS 1 no demuestra equilibrio."
          },
          {
            "q": "¿Los ingresos incluyen las devoluciones?",
            "a": "Las devoluciones no se modelan por separado. Usa valor del pedido y conversión de pedidos completados con una base coherente, o ajusta las devoluciones aparte. No existe un descuento universal del 20% sobre los ingresos."
          },
          {
            "q": "¿Por qué se muestra aparte el coste por pedido?",
            "a": "Porque se compara directamente con el ticket medio y con tu margen. Si un pedido cuesta más de captar de lo que deja, el embudo está roto por bien que se vean los totales."
          }
        ],
        "sources": [
          "https://support.google.com/google-ads/answer/14074?hl=en",
          "https://support.google.com/google-ads/answer/2684489?hl=en"
        ]
      }
    }
  },
  {
    "id": "audience-growth",
    "inputs": {
      "start": 81,
      "end": 144,
      "periods": 2
    },
    "expected": 77.78,
    "rows": [
      33.33,
      63,
      1.7778
    ],
    "rowCount": 3,
    "defaults": {
      "start": 12000,
      "end": 18500,
      "periods": 6
    },
    "defaultExpected": 54.17,
    "blankField": "start",
    "domainField": "end",
    "domainInvalid": 0,
    "primaryUnit": "percent",
    "moneyFields": [],
    "moneyRows": [],
    "fieldNames": [
      "start",
      "end",
      "periods"
    ],
    "inactive": [],
    "countFields": [
      "start",
      "end"
    ],
    "optionalAmount": null,
    "boundary": {
      "inputs": {
        "start": 100,
        "end": 25,
        "periods": 2
      },
      "expected": -75,
      "rows": [
        -50,
        -75,
        0.25
      ],
      "rowCount": 3,
      "inactive": []
    },
    "pages": {
      "ru": {
        "path": "/ru/business/audience-growth/",
        "h1": "Калькулятор роста аудитории",
        "longDescription": "Два числа описывают один и тот же рост и отвечают на разные вопросы. Общий рост говорит, во сколько раз аудитория стала больше; рост за период — какой темп дал бы тот же результат при равномерном движении. Удвоение за год и удвоение за месяц совпадают по общему росту и не совпадают больше ни в чём, поэтому сравнивать каналы по одному общему проценту нельзя. Темп за период как раз и делает сопоставимыми аккаунты разного возраста, а прирост в людях удерживает проценты от лукавства: сто процентов на базе двенадцати — это двенадцать человек.",
        "howToUse": [
          "Введите размер аудитории на начало периода.",
          "Введите размер аудитории на конец.",
          "Укажите, сколько периодов прошло между двумя замерами.",
          "Единица периода должна быть одна — месяцы или недели, но не вперемешку.",
          "Сравнивайте одинаковую длительность периода и определение аудитории; дробными могут быть периоды, но не количество людей."
        ],
        "howItWorks": "Общий рост = (E/S − 1) × 100 %. Рост за период = ((E/S)^(1/n) − 1) × 100 %, где S и E — положительные целые размеры аудитории, n ≥ 1 — длительность в одинаковых периодах. Это постоянный геометрический темп между двумя замерами, а не среднее наблюдавшихся месячных процентов. Дробная длительность допустима, если единица периода определена.",
        "example": "С 12 000 до 18 500 за шесть периодов — это 54,17 % всего и 7,48 % за период.",
        "disclaimer": "Два замера и равномерный геометрический темп; без прогноза дальнейшего роста или анализа причин.",
        "faq": [
          {
            "q": "Почему темп за период меньше, чем общий рост, делённый на число периодов?",
            "a": "При положительном росте и более чем одном периоде геометрический темп ниже общего роста, делённого на число периодов, поскольку база увеличивается. При одном периоде значения равны; при нулевом росте оба равны нулю. Для спада такое утверждение о величине нельзя переносить без проверки знака."
          },
          {
            "q": "Считает ли калькулятор падение аудитории?",
            "a": "Да. Если конечное значение меньше начального, оба показателя выходят отрицательными — это честное описание спада, а не спрятанный ноль."
          },
          {
            "q": "Что считать периодом?",
            "a": "Ту единицу, в которой вы мерили: месяц, неделю, кампанию. Калькулятору она безразлична, важно лишь, чтобы число периодов и оба замера относились к одной единице."
          },
          {
            "q": "Зачем показывать прирост в людях?",
            "a": "Проценты скрывают базу. Рост с двенадцати до двадцати четырёх — это сто процентов и двенадцать человек, и колонка прироста не даёт об этом забыть."
          }
        ],
        "sources": [
          "https://support.microsoft.com/en-us/excel/functions/rri-function"
        ]
      },
      "en": {
        "path": "/en/business/audience-growth-calculator/",
        "h1": "Audience growth calculator",
        "longDescription": "Two numbers describe the same growth and answer different questions. Total growth says how much larger the audience became; growth per period says what pace would produce that same result if it were spread evenly. Doubling over a year and doubling over a month share a total figure and have nothing else in common, which is why comparing channels on total growth alone is misleading. The per-period rate is what makes accounts of different ages comparable, and the net gain keeps the percentages honest — a hundred per cent on a base of twelve is twelve people.",
        "howToUse": [
          "Enter the audience size at the start of the period.",
          "Enter the audience size at the end.",
          "Enter how many periods passed between the two measurements.",
          "Keep the period unit consistent — months or weeks, but not both.",
          "Use the same period unit and audience definition when comparing channels; duration can be fractional, people counts cannot."
        ],
        "howItWorks": "Total growth = (E/S − 1) × 100%. Per-period growth = ((E/S)^(1/n) − 1) × 100%, with positive whole audience counts S and E and duration n ≥ 1 in equal period units. This is the constant geometric rate connecting two observations, not an average of observed monthly rates. Fractional duration is valid when the period unit is defined.",
        "example": "Going from 12,000 to 18,500 over six periods is 54.17% in total and 7.48% per period.",
        "disclaimer": "Two observations and an equivalent constant geometric rate; no prediction of future growth or causes.",
        "faq": [
          {
            "q": "Why is the per-period rate lower than total growth divided by periods?",
            "a": "For positive growth over more than one period, the geometric rate is lower than total growth divided by periods because the base compounds. At one period they coincide; unchanged counts give zero. Do not apply the same inequality to decline without checking its sign."
          },
          {
            "q": "Can this handle a shrinking audience?",
            "a": "Yes. If the end figure is below the start, both rates come out negative — an honest description of decline rather than a hidden zero."
          },
          {
            "q": "What counts as a period here?",
            "a": "Whatever unit you measured in: a month, a week, a campaign. The calculator does not care, as long as the count and the two measurements refer to the same unit."
          },
          {
            "q": "Why show the net gain as well?",
            "a": "Percentages hide the base. Growing from twelve to twenty-four is a hundred per cent and twelve people, and the gain column is what keeps that in view."
          }
        ],
        "sources": [
          "https://support.microsoft.com/en-us/excel/functions/rri-function"
        ]
      },
      "uk": {
        "path": "/uk/business/zrostannya-audytorii/",
        "h1": "Калькулятор зростання аудиторії",
        "longDescription": "Два числа описують одне й те саме зростання й відповідають на різні питання. Загальне зростання каже, у скільки разів аудиторія стала більшою; зростання за період — з якою швидкістю це відбувалося. Друге число й дозволяє порівнювати відрізки різної довжини.",
        "howToUse": [
          "Введіть початкову кількість аудиторії.",
          "Введіть кінцеву кількість.",
          "Введіть кількість періодів між ними.",
          "Порівнюйте однакову одиницю періоду й визначення аудиторії; дробовою може бути тривалість, але не кількість людей."
        ],
        "howItWorks": "Загальне зростання = (E/S − 1) × 100 %. Зростання за період = ((E/S)^(1/n) − 1) × 100 %, де S та E — додатні цілі кількості аудиторії, n ≥ 1 — тривалість в однакових періодах. Це сталий геометричний темп між двома замірами, а не середнє фактичних місячних відсотків. Дробова тривалість допустима за визначеної одиниці періоду.",
        "example": "З 12 000 до 18 500 за шість періодів — це 54,17 % загалом і 7,48 % за період. Просте ділення 54,17 на 6 дало б 9,03 % — завищену оцінку.",
        "disclaimer": "Два заміри й еквівалентний сталий геометричний темп; без прогнозу зростання або аналізу причин.",
        "faq": [
          {
            "q": "Чому не можна просто поділити загальне зростання на кількість періодів?",
            "a": "За додатного зростання протягом більш ніж одного періоду геометричний темп нижчий за загальне зростання, поділене на кількість періодів. За один період вони рівні, без зміни аудиторії обидва нульові. Для спаду нерівність потрібно перевіряти окремо; у прикладі правильний темп 7,48 %, а не 9,03 %."
          },
          {
            "q": "Навіщо потрібне зростання за період?",
            "a": "Щоб порівнювати відрізки різної довжини. Приріст 50 % за рік і 50 % за три роки — це зовсім різні темпи, і лише подільник за періодами це показує."
          },
          {
            "q": "Чи працює розрахунок для спаду?",
            "a": "Так. Якщо кінцеве значення менше за початкове, обидва числа вийдуть від’ємними, а темп покаже середню швидкість спаду за період."
          },
          {
            "q": "Що брати за період?",
            "a": "Будь-яку однакову одиницю: місяць, квартал, рік. Головне — щоб кількість періодів відповідала проміжку між початковим і кінцевим значенням."
          }
        ],
        "sources": [
          "https://support.microsoft.com/en-us/excel/functions/rri-function"
        ]
      },
      "de": {
        "path": "/de/business/publikumswachstum-rechner/",
        "h1": "Rechner für das Publikumswachstum",
        "longDescription": "Zwei Zahlen beschreiben dasselbe Wachstum und beantworten verschiedene Fragen. Das Gesamtwachstum sagt, um wie viel größer das Publikum geworden ist; das Wachstum je Zeitraum sagt, welches Tempo dasselbe Ergebnis brächte, wenn es gleichmäßig verteilt wäre. Eine Verdopplung über ein Jahr und eine über einen Monat teilen die Gesamtzahl und haben sonst nichts gemein, weshalb Kanäle allein am Gesamtwachstum zu vergleichen in die Irre führt. Die Rate je Zeitraum macht verschieden alte Auftritte vergleichbar, und der Zuwachs hält die Prozentwerte ehrlich — hundert Prozent auf einer Grundlage von zwölf sind zwölf Menschen.",
        "howToUse": [
          "Trage die Größe des Publikums am Anfang des Zeitraums ein.",
          "Trage die Größe am Ende ein.",
          "Trage ein, wie viele Zeiträume zwischen beiden Messungen lagen.",
          "Halte die Einheit des Zeitraums gleich — Monate oder Wochen, aber nicht beides.",
          "Vergleiche gleiche Zeiteinheiten und Publikumsdefinitionen; die Dauer darf gebrochen sein, die Personenzahl nicht."
        ],
        "howItWorks": "Gesamtwachstum = (E/S − 1) × 100 %. Wachstum je Zeitraum = ((E/S)^(1/n) − 1) × 100 %, mit positiven ganzen Publikumszahlen S und E sowie Dauer n ≥ 1 in gleichen Zeiteinheiten. Dies ist die konstante geometrische Rate zwischen zwei Messungen, kein Mittel beobachteter Monatsraten. Bruchteile einer Dauer sind bei festgelegter Zeiteinheit möglich.",
        "example": "Von 12 000 auf 18 500 über sechs Zeiträume sind 54,17 % insgesamt und 7,48 % je Zeitraum.",
        "disclaimer": "Zwei Messungen und eine gleichwertige konstante geometrische Rate; keine Prognose oder Ursachenanalyse.",
        "faq": [
          {
            "q": "Warum liegt die Rate je Zeitraum unter dem Gesamtwachstum geteilt durch die Zeiträume?",
            "a": "Bei positivem Wachstum über mehr als einen Zeitraum liegt die geometrische Rate unter Gesamtwachstum geteilt durch Dauer, da die Basis mitwächst. Bei einem Zeitraum stimmen sie überein, ohne Wachstum sind beide null. Auf einen Rückgang lässt sich die Ungleichung nicht ungeprüft übertragen."
          },
          {
            "q": "Kommt das mit einem schrumpfenden Publikum zurecht?",
            "a": "Ja. Liegt der Endwert unter dem Anfangswert, kommen beide Raten negativ heraus — eine ehrliche Beschreibung des Rückgangs statt einer verborgenen Null."
          },
          {
            "q": "Was zählt hier als Zeitraum?",
            "a": "Die Einheit, in der du gemessen hast: ein Monat, eine Woche, eine Kampagne. Dem Rechner ist sie gleich, solange Zählung und beide Messungen dieselbe Einheit meinen."
          },
          {
            "q": "Warum wird auch der Zuwachs angezeigt?",
            "a": "Prozentwerte verbergen die Grundlage. Von zwölf auf vierundzwanzig sind hundert Prozent und zwölf Menschen, und die Spalte mit dem Zuwachs hält das im Blick."
          }
        ],
        "sources": [
          "https://support.microsoft.com/en-us/excel/functions/rri-function"
        ]
      },
      "es": {
        "path": "/es/negocios/crecimiento-de-audiencia/",
        "h1": "Calculadora de crecimiento de audiencia",
        "longDescription": "Dos cifras describen el mismo crecimiento y responden a preguntas distintas. El crecimiento total dice cuánto ha aumentado la audiencia; el crecimiento por periodo dice qué ritmo produciría ese mismo resultado si se repartiera de forma uniforme. Duplicarse en un año y duplicarse en un mes comparten la cifra total y no tienen nada más en común, y por eso comparar canales solo por el crecimiento total induce a error. El ritmo por periodo es lo que hace comparables cuentas de distinta edad, y la ganancia neta mantiene honestos los porcentajes: un cien por cien sobre una base de doce son doce personas.",
        "howToUse": [
          "Introduce el tamaño de la audiencia al principio del periodo.",
          "Introduce el tamaño al final.",
          "Introduce cuántos periodos pasaron entre ambas mediciones.",
          "Mantén constante la unidad de periodo: meses o semanas, pero no ambos.",
          "Compara con la misma unidad de periodo y definición de audiencia; la duración puede ser fraccionaria, las personas no."
        ],
        "howItWorks": "Crecimiento total = (E/S − 1) × 100%. Crecimiento por periodo = ((E/S)^(1/n) − 1) × 100%, con cantidades positivas enteras S y E y duración n ≥ 1 en unidades de periodo iguales. Es la tasa geométrica constante entre dos observaciones, no la media de porcentajes mensuales observados. La duración puede ser fraccionaria si se define su unidad.",
        "example": "Pasar de 12 000 a 18 500 en seis periodos es un 54,17 % en total y un 7,48 % por periodo.",
        "disclaimer": "Dos observaciones y tasa geométrica constante equivalente; sin pronóstico de crecimiento ni análisis causal.",
        "faq": [
          {
            "q": "¿Por qué el ritmo por periodo es menor que el crecimiento total dividido entre los periodos?",
            "a": "Con crecimiento positivo durante más de un periodo, la tasa geométrica es menor que el crecimiento total dividido por periodos porque la base se acumula. En un periodo coinciden y sin cambio ambas son cero. No traslades esa desigualdad a una caída sin comprobar el signo."
          },
          {
            "q": "¿Vale para una audiencia que mengua?",
            "a": "Sí. Si la cifra final es menor que la inicial, ambos ritmos salen negativos: una descripción honesta del descenso en lugar de un cero disimulado."
          },
          {
            "q": "¿Qué cuenta como periodo aquí?",
            "a": "La unidad en la que midieras: un mes, una semana, una campaña. A la calculadora le da igual, mientras el recuento y las dos mediciones se refieran a la misma unidad."
          },
          {
            "q": "¿Por qué se muestra también la ganancia neta?",
            "a": "Los porcentajes esconden la base. Crecer de doce a veinticuatro es un cien por cien y doce personas, y la columna de la ganancia es lo que mantiene eso a la vista."
          }
        ],
        "sources": [
          "https://support.microsoft.com/en-us/excel/functions/rri-function"
        ]
      }
    }
  },
  {
    "id": "churn-retention",
    "inputs": {
      "startCustomers": 100,
      "lost": 100,
      "gained": 0
    },
    "expected": 100,
    "rows": [
      0,
      0,
      -100,
      1
    ],
    "rowCount": 4,
    "defaults": {
      "startCustomers": 1000,
      "lost": 50,
      "gained": 80
    },
    "defaultExpected": 5.0,
    "blankField": "startCustomers",
    "domainField": "lost",
    "domainInvalid": 101,
    "primaryUnit": "percent",
    "moneyFields": [],
    "moneyRows": [],
    "fieldNames": [
      "startCustomers",
      "lost",
      "gained"
    ],
    "inactive": [],
    "countFields": [
      "startCustomers",
      "lost",
      "gained"
    ],
    "optionalAmount": null,
    "boundary": {
      "inputs": {
        "startCustomers": 100,
        "lost": 0,
        "gained": 20
      },
      "expected": 0,
      "rows": [
        100,
        120,
        20
      ],
      "rowCount": 3,
      "inactive": []
    },
    "pages": {
      "ru": {
        "path": "/ru/business/churn-retention/",
        "h1": "Калькулятор оттока и удержания",
        "longDescription": "Отток измеряет потери исходной группы клиентов: знаменатель — клиенты на начало периода, числитель — ушедшие именно из этой группы. Новые клиенты в знаменатель не входят. Для числа клиентов на конец вводите новых клиентов, которые остались к концу периода; их ранний уход нужно учесть до ввода. Срок 1/c — отдельная геометрическая оценка при постоянной вероятности ухода c, с включённым первым активным периодом, а не установленный срок по одному наблюдению.",
        "howToUse": [
          "Укажите, сколько клиентов было на начало периода.",
          "Укажите, сколько ушло за период.",
          "Укажите, сколько пришло за период.",
          "Пришедшие в знаменатель оттока не входят.",
          "Для «пришло» считайте только новых клиентов, оставшихся к концу; не включайте их потери в отток начальной группы."
        ],
        "howItWorks": "Для начальной группы S, её потерь L и новых оставшихся G: отток = L/S × 100 %, удержание = (S−L)/S × 100 %, на конец = S−L+G, чистый прирост = (G−L)/S × 100 %. Все количества — целые неотрицательные, S > 0 и L ≤ S. При c=L/S > 0 средний срок модели = 1 + (1−c) + (1−c)² + … = 1/c периодов; при c=0 конечная оценка не выводится.",
        "example": "Из 1 000 клиентов ушли 50, пришли 80: отток 5,00 %, удержание 95,00 %, на конец периода 1 030 клиентов. При 100 клиентах,100 ушедших из этой группы и 0 новых удержание 0 %, на конец 0, модельный срок 1 период.",
        "disclaimer": "Начальная когорта и новые оставшиеся клиенты. Срок 1/c предполагает постоянный отток, а не гарантирует жизнь или платежи клиента.",
        "faq": [
          {
            "q": "Почему в знаменателе клиенты на начало, а не на конец?",
            "a": "Чтобы сравнивать уход внутри одной исходной группы. Новички тоже могут уйти в тот же период, но это другая когорта: их потери не смешиваются с L, а уменьшают число G новых оставшихся клиентов."
          },
          {
            "q": "Как отток связан со сроком жизни клиента?",
            "a": "Только при постоянной вероятности ухода и одинаковой длительности периодов. 5 % за месяц дают модельные 20 активных месяцев; при 100 % остаётся первый активный месяц. Это не учитывает изменение оттока по возрасту когорты и не гарантирует будущие платежи."
          },
          {
            "q": "Почему при нулевом оттоке срок жизни не показан?",
            "a": "Формально он бесконечен, а бесконечность на экране означала бы обещание вечного клиента. Нулевой отток за один период — обычное дело, но выводить из него бессмертие нельзя."
          },
          {
            "q": "Чистый прирост может быть отрицательным?",
            "a": "Да, и это важный сигнал: значит, ушло больше, чем пришло, и база сокращается даже при неплохом удержании."
          },
          {
            "q": "Отток считать по клиентам или по деньгам?",
            "a": "Здесь по клиентам. Денежный отток считается отдельно и может отличаться в разы: уход одного крупного клиента почти не влияет на отток по головам."
          }
        ],
        "sources": [
          "https://stripe.com/guides/atlas/business-of-saas"
        ]
      },
      "en": {
        "path": "/en/business/churn-retention-calculator/",
        "h1": "Churn and retention calculator",
        "longDescription": "Churn measures losses from the opening customer cohort: divide customers lost from that cohort by customers present at the start. New customers do not enter that denominator. To reconcile the ending count, enter new customers still present at the end, after any early departures. Lifetime 1/c is a separate geometric estimate under constant churn probability c, including the first active period; one observation does not establish a customer lifespan.",
        "howToUse": [
          "Enter how many customers you had at the start of the period.",
          "Enter how many were lost during the period.",
          "Enter how many were gained during the period.",
          "Those gained do not enter the churn denominator.",
          "For newcomers, count only those still present at period end; do not mix their departures into the opening-cohort churn."
        ],
        "howItWorks": "With opening cohort S, its losses L and retained newcomers G: churn = L/S × 100%, retention = (S−L)/S × 100%, ending count = S−L+G, net growth = (G−L)/S × 100%. Counts are whole and nonnegative, S > 0 and L ≤ S. For c=L/S > 0, model lifetime = 1 + (1−c) + (1−c)² + … = 1/c periods; c=0 has no finite estimate.",
        "example": "Of 1,000 customers 50 left and 80 arrived: churn 5.00%, retention 95.00%, ending with 1,030 customers. With 100 opening customers,100 lost and 0 retained newcomers, retention is 0%, ending count 0 and model lifetime 1 period.",
        "disclaimer": "Opening cohort and retained newcomers. Lifetime 1/c assumes constant churn and does not guarantee lifespan or payments.",
        "faq": [
          {
            "q": "Why the customers at the start rather than at the end?",
            "a": "To measure departures within the same opening cohort. New customers can leave in the same period too, but they form a different cohort: do not mix their departures into L; subtract them from retained newcomers G."
          },
          {
            "q": "How does churn relate to customer lifetime?",
            "a": "Only under constant churn probability and equal period lengths. Monthly churn of 5% gives 20 model active months; 100% still includes the first active month. Cohort-age changes and future payment guarantees are outside this estimate."
          },
          {
            "q": "Why is lifetime hidden at zero churn?",
            "a": "Formally it is infinite, and infinity on screen would promise an everlasting customer. Zero churn in a single period is ordinary enough, but immortality does not follow from it."
          },
          {
            "q": "Can net growth be negative?",
            "a": "Yes, and it is an important signal: more customers left than arrived, so the base is shrinking even with decent retention."
          },
          {
            "q": "Should churn be measured in customers or in revenue?",
            "a": "Here it is customers. Revenue churn is a separate figure and can differ several times over: losing one large account barely moves the headcount number."
          }
        ],
        "sources": [
          "https://stripe.com/guides/atlas/business-of-saas"
        ]
      },
      "uk": {
        "path": "/uk/business/vidtik-utrymannya/",
        "h1": "Калькулятор відтоку та утримання",
        "longDescription": "Відтік вимірює втрати початкової групи: клієнти, що пішли саме з неї, діляться на кількість на початок періоду. Нові клієнти не входять у знаменник. Для підсумкової кількості вводьте нових клієнтів, які залишилися на кінець, уже після їхніх ранніх відходів. Строк 1/c є окремою геометричною оцінкою за сталої ймовірності відходу c, з першим активним періодом; один замір не встановлює фактичний строк життя.",
        "howToUse": [
          "Введіть кількість клієнтів на початок періоду.",
          "Введіть, скільки клієнтів пішло.",
          "За потреби введіть, скільки прийшло, щоб побачити чисте зростання.",
          "Для нових рахуйте лише тих, хто залишився на кінець; їхні втрати не включайте у відтік початкової групи."
        ],
        "howItWorks": "Для початкової групи S, її втрат L і нових клієнтів, що залишилися, G: відтік = L/S × 100 %, утримання = (S−L)/S × 100 %, на кінець = S−L+G, чистий приріст = (G−L)/S × 100 %. Кількості цілі невід’ємні, S > 0 та L ≤ S. За c=L/S > 0 строк моделі = 1 + (1−c) + (1−c)² + … = 1/c періодів; за c=0 скінченної оцінки немає.",
        "example": "З 1000 клієнтів пішли 50, прийшли 80: відтік 5,00 %, утримання 95,00 %, на кінець періоду 1030 клієнтів. Середній строк життя за такого відтоку — 20 періодів. За 100 початкових клієнтів,100 відходів із групи й 0 нових утримання 0 %, на кінець 0, строк моделі 1 період.",
        "disclaimer": "Початкова когорта й нові клієнти, що залишилися. Строк 1/c припускає сталий відтік, а не гарантує життя чи платежі.",
        "faq": [
          {
            "q": "Чому знаменник — клієнти на початок періоду?",
            "a": "Щоб вимірювати відхід у тій самій початковій групі. Нові клієнти також можуть піти в цьому періоді, але їхні втрати не додаються до L: вони зменшують G нових клієнтів, що залишилися."
          },
          {
            "q": "Чим відтік клієнтів відрізняється від відтоку виторгу?",
            "a": "Відтік клієнтів рахує кількість, а відтік виторгу — втрату відповідного доходу. Вони мають різні чисельники. У цьому інструменті великі й малі клієнти мають однакову вагу; грошовий відтік потрібен окремо."
          },
          {
            "q": "Як відтік пов’язаний зі строком життя?",
            "a": "За сталої ймовірності відходу c строк моделі дорівнює 1/c активних періодів, з першим періодом включно. За 5 % на місяць це 20 місяців, за 100 % — один. За нульового відтоку скінченна оцінка не показується; фактичне життя потребує аналізу когорти."
          },
          {
            "q": "Що вважати хорошим утриманням?",
            "a": "Універсального хорошого рівня немає. Узгодьте тривалість періоду, визначення активного клієнта й початкову когорту, потім порівнюйте власну динаміку. Місячний і річний відтік не взаємозамінні."
          }
        ],
        "sources": [
          "https://stripe.com/guides/atlas/business-of-saas"
        ]
      },
      "de": {
        "path": "/de/business/abwanderungsrate-rechner/",
        "h1": "Rechner für Abwanderung und Bindung",
        "longDescription": "Abwanderung erfasst Verluste der Anfangskohorte: deren Abgänge werden durch ihre Kundenzahl zu Beginn geteilt. Neue Kunden gehören nicht in diesen Nenner. Für den Endbestand werden nur neue Kunden eingegeben, die am Ende noch vorhanden sind, nach frühen Abgängen. Die Dauer 1/c ist eine getrennte geometrische Schätzung bei konstanter Austrittswahrscheinlichkeit c mit eingeschlossenem ersten aktiven Zeitraum; eine Beobachtung bestimmt keine tatsächliche Kundendauer.",
        "howToUse": [
          "Trage ein, wie viele Kunden du zu Beginn des Zeitraums hattest.",
          "Trage ein, wie viele im Zeitraum verloren gingen.",
          "Trage ein, wie viele im Zeitraum hinzukamen.",
          "Die Hinzugekommenen gehen nicht in den Nenner der Abwanderung ein.",
          "Zähle bei neuen Kunden nur die am Ende verbliebenen; mische ihre Abgänge nicht in die Anfangskohorte."
        ],
        "howItWorks": "Für Anfangskohorte S, deren Abgänge L und verbleibende neue Kunden G: Abwanderung = L/S × 100 %, Bindung = (S−L)/S × 100 %, Endbestand = S−L+G, Nettozuwachs = (G−L)/S × 100 %. Ganze nicht negative Anzahlen mit S > 0 und L ≤ S sind erforderlich. Bei c=L/S > 0 ist die Modelldauer 1 + (1−c) + (1−c)² + … = 1/c Zeiträume; bei c=0 entfällt eine endliche Schätzung.",
        "example": "Von 1000 Kunden gingen 50 und kamen 80: Abwanderung 5,00 %, Bindung 95,00 %, am Ende 1030 Kunden. Bei 100 Anfangskunden,100 Abgängen und 0 neuen Verbleibenden gelten 0 % Bindung,0 Endbestand und 1 Zeitraum Modelldauer.",
        "disclaimer": "Anfangskohorte und verbleibende Neukunden. Dauer 1/c setzt konstante Abwanderung voraus und garantiert weder Bindung noch Zahlungen.",
        "faq": [
          {
            "q": "Warum die Kunden am Anfang und nicht am Ende?",
            "a": "Um Abgänge innerhalb derselben Anfangskohorte zu messen. Auch Neukunden können früh gehen, gehören jedoch zu einer anderen Kohorte: ihre Abgänge werden von G abgezogen und nicht in L gemischt."
          },
          {
            "q": "Wie hängt die Abwanderung mit der Kundendauer zusammen?",
            "a": "Nur bei konstanter Austrittswahrscheinlichkeit und gleichen Zeiträumen. Monatliche 5 % ergeben zwanzig modellierte aktive Monate; bei 100 % bleibt der erste aktive Monat. Änderungen nach Kohortenalter und garantierte Zahlungen sind nicht enthalten."
          },
          {
            "q": "Warum entfällt die Dauer bei einer Abwanderung von null?",
            "a": "Formal ist sie unendlich, und Unendlichkeit auf dem Bildschirm verspräche einen ewigen Kunden. Null Abwanderung in einem einzelnen Zeitraum ist gewöhnlich genug, Unsterblichkeit folgt daraus aber nicht."
          },
          {
            "q": "Darf der Nettozuwachs negativ sein?",
            "a": "Ja, und das ist ein wichtiges Zeichen: es gingen mehr Kunden, als hinzukamen, die Grundlage schrumpft also selbst bei anständiger Bindung."
          },
          {
            "q": "Soll die Abwanderung in Kunden oder in Umsatz gemessen werden?",
            "a": "Hier in Kunden. Die Umsatzabwanderung ist eine eigene Zahl und kann um ein Mehrfaches abweichen: ein einzelner großer Kunde bewegt die Kopfzahl kaum."
          }
        ],
        "sources": [
          "https://stripe.com/guides/atlas/business-of-saas"
        ]
      },
      "es": {
        "path": "/es/negocios/rotacion-y-retencion/",
        "h1": "Calculadora de rotación y retención",
        "longDescription": "La tasa de bajas mide pérdidas de la cohorte inicial: clientes que abandonaron esa cohorte divididos por los presentes al inicio. Los nuevos no entran en ese denominador. Para conciliar la cantidad final, introduce nuevos clientes que permanecen al final, descontando sus bajas tempranas. La permanencia 1/c es una estimación geométrica separada con probabilidad constante c e incluye el primer periodo activo; una observación no establece la permanencia real.",
        "howToUse": [
          "Introduce cuántos clientes tenías al inicio del periodo.",
          "Introduce cuántos se perdieron durante el periodo.",
          "Introduce cuántos se ganaron durante el periodo.",
          "Los ganados no entran en el denominador de la rotación.",
          "Cuenta como nuevos solo los que permanecen al final; no mezcles sus bajas con las de la cohorte inicial."
        ],
        "howItWorks": "Para cohorte inicial S, bajas de ella L y nuevos clientes que permanecen G: bajas = L/S × 100%, retención = (S−L)/S × 100%, cantidad final = S−L+G y crecimiento neto = (G−L)/S × 100%. Las cantidades son enteras no negativas, S > 0 y L ≤ S. Con c=L/S > 0, permanencia del modelo = 1 + (1−c) + (1−c)² + … = 1/c periodos; c=0 no da una estimación finita.",
        "example": "De 1000 clientes se fueron 50 y llegaron 80: rotación del 5,00 %, retención del 95,00 % y 1030 clientes al final. Con 100 clientes iniciales,100 bajas y 0 nuevos que permanecen, retención 0%, cantidad final 0 y permanencia del modelo 1 periodo.",
        "disclaimer": "Cohorte inicial y nuevos que permanecen. Permanencia 1/c supone bajas constantes, sin garantizar duración ni pagos.",
        "faq": [
          {
            "q": "¿Por qué los clientes al inicio y no al final?",
            "a": "Para medir bajas de una misma cohorte inicial. Los nuevos también pueden irse en ese periodo, pero son otra cohorte: sus bajas reducen G, no se mezclan con L."
          },
          {
            "q": "¿Qué relación tiene la rotación con la vida del cliente?",
            "a": "Solo con probabilidad de abandono constante y periodos iguales. El 5% mensual da veinte meses activos del modelo; el 100% aún incluye el primer mes. No contempla variaciones por edad de cohorte ni garantiza cobros futuros."
          },
          {
            "q": "¿Por qué se oculta la vida con rotación cero?",
            "a": "Formalmente es infinita, y un infinito en pantalla prometería un cliente eterno. Una rotación de cero en un solo periodo es bastante corriente, pero de ahí no se sigue la inmortalidad."
          },
          {
            "q": "¿El crecimiento neto puede ser negativo?",
            "a": "Sí, y es una señal importante: se fueron más clientes de los que llegaron, así que la base se encoge aun con una retención decente."
          },
          {
            "q": "¿La rotación se mide en clientes o en ingresos?",
            "a": "Aquí, en clientes. La rotación de ingresos es otra cifra y puede diferir varias veces: perder una cuenta grande apenas mueve el recuento de personas."
          }
        ],
        "sources": [
          "https://stripe.com/guides/atlas/business-of-saas"
        ]
      }
    }
  },
  {
    "id": "cogs",
    "inputs": {
      "beginInventory": 100,
      "purchases": 50,
      "endInventory": 150
    },
    "expected": 0,
    "rows": [
      150,
      100,
      50,
      150
    ],
    "rowCount": 4,
    "defaults": {
      "beginInventory": 320000,
      "purchases": 780000,
      "endInventory": 415000
    },
    "defaultExpected": 685000.0,
    "blankField": "purchases",
    "domainField": "endInventory",
    "domainInvalid": 151,
    "primaryUnit": "money",
    "moneyFields": [
      "beginInventory",
      "purchases",
      "endInventory"
    ],
    "moneyRows": [
      0,
      1,
      2,
      3
    ],
    "fieldNames": [
      "beginInventory",
      "purchases",
      "endInventory"
    ],
    "inactive": [],
    "countFields": [],
    "optionalAmount": null,
    "boundary": {
      "inputs": {
        "beginInventory": 10,
        "purchases": 5,
        "endInventory": 3
      },
      "expected": 12,
      "rows": [
        15,
        10,
        5,
        3
      ],
      "rowCount": 4,
      "inactive": []
    },
    "pages": {
      "ru": {
        "path": "/ru/business/cogs/",
        "h1": "Калькулятор COGS",
        "longDescription": "Базовая сверка стоимости запасов прибавляет закупки к запасу на начало и вычитает запас на конец. Закупка, оставшаяся на складе, не становится себестоимостью проданного только из-за оплаты поставщику. Все суммы берутся по одной учётной базе стоимости, а не в розничных ценах. При списаниях, порче, возвратах или иных движениях простая разница смешивает причины уменьшения запаса: такие операции нужно сверить отдельно, прежде чем назвать весь результат себестоимостью продаж.",
        "howToUse": [
          "Введите стоимость запаса, с которым период начался.",
          "Укажите, на какую сумму закуплено товара за период.",
          "Укажите стоимость остатка на складе на конец периода.",
          "Все три величины берите в одних и тех же ценах — закупочных, а не розничных.",
          "Сверьте потери и прочие движения отдельно: простая разница склада не отличает продажу от списания. Суммы одной валюты не конвертируются."
        ],
        "howItWorks": "Себестоимость = запас на начало + закупки − запас на конец. Промежуточная величина «доступно к продаже» — это сумма первых двух: весь товар, который мог быть продан за период. Формула предполагает, что нет неучтённых дополнительных движений. Закупки здесь — стоимость поступлений с относимыми затратами, а не только денежные платежи. Отрицательные суммы и конечный запас выше доступного отклоняются.",
        "example": "Склад на начало 320 000 ₽, закупки 780 000 ₽, остаток 415 000 ₽ — себестоимость продаж 685 000 ₽. Если начало 100, закупки 50 и конец 150, результат 0, доступно 150.",
        "disclaimer": "Базовая сверка учётной стоимости запасов. Не заменяет оценку, обособление списаний или бухгалтерские и налоговые правила.",
        "faq": [
          {
            "q": "Почему остаток на складе вычитается, а не прибавляется?",
            "a": "Конечный запас остаётся вне стоимости выбывшего за период. При корректной базе и отсутствии других движений разница относится к проданному; при потерях или списаниях сначала разделите эти причины уменьшения склада."
          },
          {
            "q": "Входит ли доставка от поставщика в закупки?",
            "a": "Да, если она увеличивает стоимость товара на складе. Доставка до покупателя — уже расходы на продажу, и в этой формуле её быть не должно."
          },
          {
            "q": "Что делать, если склад не инвентаризировали?",
            "a": "Без остатка на конец расчёт даст только «доступно к продаже». Оценка остатка по учётным данным допустима, но ошибка в ней целиком переходит в себестоимость — она вычитается один в один."
          },
          {
            "q": "Почему себестоимость получилась больше закупок?",
            "a": "Значит, склад за период уменьшился: продавали не только закупленное, но и то, что лежало с прошлого периода. Это нормальная ситуация, а не ошибка ввода."
          }
        ],
        "sources": [
          "https://www.ifrs.org/issued-standards/list-of-standards/ias-2-inventories/",
          "https://www.irs.gov/publications/p334"
        ]
      },
      "en": {
        "path": "/en/business/cogs-calculator/",
        "h1": "COGS calculator",
        "longDescription": "This basic inventory-cost reconciliation adds purchases to opening inventory and subtracts closing inventory. Paying a supplier does not turn unsold stock into cost of goods sold. Use one consistent cost-valuation basis rather than retail prices. Write-offs, damage, returns or other movements can enter the difference without being sales, so reconcile those separately before treating the whole result as sales COGS.",
        "howToUse": [
          "Enter the value of the stock the period started with.",
          "Enter how much inventory was purchased during the period.",
          "Enter the value of the stock left at the end of the period.",
          "Use the same prices for all three figures — purchase prices, not retail.",
          "Reconcile losses and other movements separately: the inventory difference cannot distinguish sales from write-offs. Amounts use one currency without conversion."
        ],
        "howItWorks": "COGS = opening inventory + purchases − closing inventory. The intermediate figure, goods available for sale, is the sum of the first two: everything that could have been sold during the period. The formula assumes no additional unreconciled movements. Purchases represent received inventory cost with applicable allocations, not merely cash paid. Negative amounts and closing inventory exceeding available inventory are rejected.",
        "example": "Opening stock 320,000, purchases 780,000, closing stock 415,000 — cost of goods sold is 685,000. Opening 100, purchases 50 and closing 150 give COGS 0 and available inventory 150.",
        "disclaimer": "Basic reconciliation of inventory carrying cost. Does not replace valuation, separating write-offs or accounting and tax rules.",
        "faq": [
          {
            "q": "Why is closing stock subtracted rather than added?",
            "a": "Closing inventory remains outside the cost removed during the period. With consistent valuation and no other movements, the difference relates to goods sold; losses and write-offs need to be separated first."
          },
          {
            "q": "Do inbound freight costs count as purchases?",
            "a": "Yes, when they increase the value of the goods on the shelf. Outbound delivery to the customer is a selling expense and does not belong in this formula."
          },
          {
            "q": "What if the stock was never counted?",
            "a": "Without a closing figure the calculation only gives goods available for sale. Estimating the closing stock from bookkeeping records is acceptable, but any error in it passes straight into COGS — it is subtracted one for one."
          },
          {
            "q": "Why is COGS higher than my purchases?",
            "a": "The warehouse shrank during the period: you sold not only what you bought but also what was carried over. That is a normal situation, not an input error."
          }
        ],
        "sources": [
          "https://www.ifrs.org/issued-standards/list-of-standards/ias-2-inventories/",
          "https://www.irs.gov/publications/p334"
        ]
      },
      "uk": {
        "path": "/uk/business/sobivartist-prodazhiv/",
        "h1": "Калькулятор COGS",
        "longDescription": "Базова звірка вартості запасів додає закупівлі до запасу на початок і віднімає запас на кінець. Оплата постачальнику не робить непроданий товар собівартістю продажів. Усі суми мають одну облікову базу вартості, а не роздрібні ціни. Списання, псування, повернення чи інші рухи можуть потрапити в різницю без продажу; їх потрібно звірити окремо, перш ніж називати весь результат собівартістю продажів.",
        "howToUse": [
          "Введіть вартість запасу на початок періоду.",
          "Введіть суму закупівель за період.",
          "Введіть вартість залишку на кінець періоду.",
          "Звірте втрати й інші рухи окремо: різниця складу не відрізняє продаж від списання. Суми однієї валюти не конвертуються."
        ],
        "howItWorks": "Собівартість дорівнює запас на початок + закупівлі − запас на кінець. Проміжна величина «доступно до продажу» — це сума перших двох доданків: увесь товар, який міг бути проданий за період. Формула припускає відсутність додаткових незвірених рухів. Закупівлі — вартість надходжень із відповідними витратами, а не лише грошові платежі. Від’ємні суми та кінцевий запас понад доступний відхиляються.",
        "example": "Склад на початок 320 000 ₴, закупівлі 780 000 ₴, залишок 415 000 ₴ — собівартість продажів 685 000 ₴, а доступно до продажу було 1 100 000 ₴. За початку 100, закупівель 50 і кінця 150 результат 0, доступно 150.",
        "disclaimer": "Базова звірка облікової вартості запасів. Не замінює оцінку, відокремлення списань або правила обліку й податків.",
        "faq": [
          {
            "q": "Чому не можна взяти просто суму закупівель?",
            "a": "Закуплене й продане належать до різних моментів обліку. Товар, що залишився на складі, не включається в проданий лише через оплату. Потрібні узгоджені залишки та облік інших рухів."
          },
          {
            "q": "Що входить у вартість запасу?",
            "a": "Закупівельна ціна плюс витрати на доведення товару до продажу: доставка, мито, пакування. Витрати на продаж і рекламу сюди не входять — це витрати періоду."
          },
          {
            "q": "Що робити з псуванням і крадіжкою?",
            "a": "Вони можуть зменшити кінцевий запас і збільшити просту різницю, але це ще не означає, що весь результат є вартістю проданого. Потрібен окремий облік втрат і списань та їхнє належне відображення за застосовними правилами."
          },
          {
            "q": "Чи змінює результат метод оцінки запасів?",
            "a": "Так, оцінка запасу впливає на різницю. IAS 2 описує FIFO або середньозважену вартість для взаємозамінних запасів; це не дозвіл на LIFO. Застосовні стандарти та податкові правила залежать від юрисдикції, а калькулятор лише використовує вже оцінені суми."
          }
        ],
        "sources": [
          "https://www.ifrs.org/issued-standards/list-of-standards/ias-2-inventories/",
          "https://www.irs.gov/publications/p334"
        ]
      },
      "de": {
        "path": "/de/business/wareneinsatz-rechner/",
        "h1": "Rechner für den Wareneinsatz",
        "longDescription": "Diese einfache Abstimmung der Lagerwerte addiert Einkäufe zum Anfangsbestand und zieht den Endbestand ab. Eine Lieferantenzahlung macht unverkaufte Ware noch nicht zum Wareneinsatz. Verwende eine einheitliche Kostenbewertung statt Verkaufspreisen. Abschreibungen, Schäden, Retouren und andere Bewegungen können ebenfalls in der Differenz stecken; sie sind vor einer Einordnung als reiner Wareneinsatz getrennt abzustimmen.",
        "howToUse": [
          "Trage den Wert des Bestands ein, mit dem der Zeitraum begann.",
          "Trage ein, wie viel Ware im Zeitraum zugekauft wurde.",
          "Trage den Wert des am Ende verbliebenen Bestands ein.",
          "Nimm für alle drei Zahlen dieselben Preise — Einkaufspreise, nicht Verkaufspreise.",
          "Stimme Verluste und weitere Bewegungen separat ab; die Lagerdifferenz unterscheidet Verkauf nicht von Abschreibung. Eine Währung ohne Umrechnung gilt."
        ],
        "howItWorks": "Wareneinsatz = Anfangsbestand + Zukäufe − Endbestand. Die Zwischenzahl, die zum Verkauf verfügbare Ware, ist die Summe der ersten beiden: alles, was im Zeitraum hätte verkauft werden können. Die Formel setzt voraus, dass keine weiteren unabgestimmten Bewegungen fehlen. Einkäufe bedeuten Kosten des erhaltenen Bestands einschließlich zugehöriger Kosten, nicht nur Barzahlungen. Negative Werte und ein Endbestand über dem verfügbaren Bestand werden abgelehnt.",
        "example": "Anfangsbestand 32 000 €, Zukäufe 78 000 €, Endbestand 41 500 € — der Wareneinsatz beträgt 68 500 €. Anfang 100, Einkäufe 50 und Ende 150 ergeben Wareneinsatz 0 und verfügbaren Bestand 150.",
        "disclaimer": "Einfache Abstimmung der Lagerkosten; kein Ersatz für Bewertung, Abgrenzung von Abschreibungen oder Rechnungslegungs- und Steuerregeln.",
        "faq": [
          {
            "q": "Warum wird der Endbestand abgezogen und nicht addiert?",
            "a": "Der Endbestand gehört nicht zu den Kosten der im Zeitraum abgegangenen Ware. Bei einheitlicher Bewertung ohne weitere Bewegungen entspricht die Differenz verkaufter Ware; Verluste und Abschreibungen sind vorher abzugrenzen."
          },
          {
            "q": "Zählen Frachtkosten beim Einkauf als Zukäufe?",
            "a": "Ja, wenn sie den Wert der Ware im Regal erhöhen. Der Versand zum Kunden ist ein Vertriebsaufwand und gehört nicht in diese Formel."
          },
          {
            "q": "Was, wenn der Bestand nie gezählt wurde?",
            "a": "Ohne Endbestand liefert die Rechnung nur die zum Verkauf verfügbare Ware. Den Endbestand aus der Buchführung zu schätzen ist vertretbar, aber jeder Fehler darin geht eins zu eins in den Wareneinsatz über — er wird unmittelbar abgezogen."
          },
          {
            "q": "Warum ist der Wareneinsatz höher als meine Zukäufe?",
            "a": "Das Lager ist im Zeitraum geschrumpft: du hast nicht nur Zugekauftes verkauft, sondern auch Übertragenes. Das ist ein gewöhnlicher Fall und kein Eingabefehler."
          }
        ],
        "sources": [
          "https://www.ifrs.org/issued-standards/list-of-standards/ias-2-inventories/",
          "https://www.irs.gov/publications/p334"
        ]
      },
      "es": {
        "path": "/es/negocios/coste-de-las-mercancias-vendidas/",
        "h1": "Calculadora de coste de las mercancías vendidas",
        "longDescription": "Esta conciliación básica suma compras a las existencias iniciales y resta las finales. Pagar al proveedor no convierte mercancía no vendida en coste de ventas. Usa una base de valoración a coste coherente, no precios de venta. Bajas, deterioro, devoluciones u otros movimientos pueden reducir las existencias sin ser ventas; deben conciliarse aparte antes de tratar toda la diferencia como coste de ventas.",
        "howToUse": [
          "Introduce el valor de las existencias con las que empezó el periodo.",
          "Introduce cuánta mercancía se compró durante el periodo.",
          "Introduce el valor de las existencias que quedaron al final del periodo.",
          "Usa los mismos precios en las tres cifras: precios de compra, no de venta.",
          "Concilia pérdidas y otros movimientos aparte: la diferencia no distingue venta de baja. Los importes usan una moneda sin conversión."
        ],
        "howItWorks": "Coste de ventas = existencia inicial + compras − existencia final. La cifra intermedia, mercancías disponibles para la venta, es la suma de las dos primeras: todo lo que podría haberse vendido en el periodo. La fórmula supone que no faltan otros movimientos por conciliar. Compras significa coste del inventario recibido con costes atribuibles, no únicamente pagos en efectivo. Se rechazan importes negativos y existencias finales superiores a las disponibles.",
        "example": "Existencia inicial 32 000, compras 78 000 y existencia final 41 500: el coste de las mercancías vendidas es de 68 500. Inicial 100, compras 50 y final 150 dan coste 0 y disponible 150.",
        "disclaimer": "Conciliación básica del coste del inventario; no sustituye valoración, separación de bajas ni normas contables o fiscales.",
        "faq": [
          {
            "q": "¿Por qué la existencia final se resta y no se suma?",
            "a": "Las existencias finales quedan fuera del coste retirado durante el periodo. Con valoración coherente y sin otros movimientos, la diferencia corresponde a ventas; primero separa pérdidas y bajas."
          },
          {
            "q": "¿Los portes de entrada cuentan como compras?",
            "a": "Sí, cuando aumentan el valor de la mercancía en la estantería. El envío al cliente es un gasto de venta y no entra en esta fórmula."
          },
          {
            "q": "¿Y si nunca se hizo inventario?",
            "a": "Sin una cifra final el cálculo solo da las mercancías disponibles para la venta. Estimar la existencia final con los registros contables es aceptable, pero cualquier error en ella pasa directo al coste de ventas: se resta uno por uno."
          },
          {
            "q": "¿Por qué el coste de ventas es mayor que mis compras?",
            "a": "El almacén se redujo durante el periodo: vendiste no solo lo que compraste, sino también lo que venía de antes. Es una situación normal y no un error de entrada."
          }
        ],
        "sources": [
          "https://www.ifrs.org/issued-standards/list-of-standards/ias-2-inventories/",
          "https://www.irs.gov/publications/p334"
        ]
      }
    }
  },
  {
    "id": "cogs-unit-cost",
    "inputs": {
      "materials": 60,
      "labor": 30,
      "overhead": 10,
      "units": 10
    },
    "expected": 10,
    "rows": [
      100,
      10,
      60
    ],
    "rowCount": 3,
    "defaults": {
      "materials": 240000,
      "labor": 96000,
      "overhead": 54000,
      "units": 1500
    },
    "defaultExpected": 260.0,
    "blankField": "materials",
    "domainField": "units",
    "domainInvalid": 1.5,
    "primaryUnit": "money",
    "moneyFields": [
      "materials",
      "labor",
      "overhead"
    ],
    "moneyRows": [
      0
    ],
    "fieldNames": [
      "materials",
      "labor",
      "overhead",
      "units"
    ],
    "inactive": [],
    "countFields": [
      "units"
    ],
    "optionalAmount": null,
    "boundary": {
      "inputs": {
        "materials": 0,
        "labor": 0,
        "overhead": 0,
        "units": 10
      },
      "expected": 0,
      "rows": [
        0,
        10
      ],
      "rowCount": 2,
      "inactive": []
    },
    "pages": {
      "ru": {
        "path": "/ru/business/unit-cost/",
        "h1": "Калькулятор себестоимости единицы",
        "longDescription": "Средняя себестоимость единицы делит затраты выбранной партии на число годных единиц. Материалы, труд и отнесённые накладные вводятся за одну и ту же партию. Увеличение тиража уменьшает долю только тех затрат, которые действительно остаются постоянными; калькулятор не предполагает этого автоматически. Доля материалов показывает чувствительность: при неизменных остальных затратах и выпуске рост цены материалов на 10 % увеличивает общий результат на 10 % их доли.",
        "howToUse": [
          "Введите стоимость материалов на всю партию.",
          "Укажите затраты на труд по той же партии.",
          "Укажите накладные расходы, отнесённые на партию.",
          "Введите, сколько единиц дала партия.",
          "Меняя тираж, пересчитайте материалы и труд по реальному сценарию; не оставляйте их постоянными, если закупки и часы растут."
        ],
        "howItWorks": "Себестоимость единицы = (материалы + труд + накладные) ÷ тираж. Доля материалов — материалы, делённые на сумму затрат, в процентах. Тираж — положительное целое число. Если все три суммы нулевые, себестоимость равна нулю, а доля материалов не показана: у неё нет ненулевого знаменателя. Это средняя распределённая стоимость, не предельная стоимость дополнительной единицы.",
        "example": "Материалы 240 000, труд 96 000 и накладные 54 000 на 1 500 штук дают 260 ₽ за единицу. Нулевая сумма затрат при 10 годных единицах даёт стоимость 0; доля материалов не выводится.",
        "disclaimer": "Средняя стоимость выбранной партии в одной валюте без обмена. Не предельные затраты и не универсальная рекомендуемая цена.",
        "faq": [
          {
            "q": "Какие затраты относить к накладным?",
            "a": "Всё, что партия потребила, не входя в сам товар: аренда цеха, амортизация оборудования, работа мастера. Общефирменные расходы вроде маркетинга в себестоимость единицы обычно не включают."
          },
          {
            "q": "Почему при большем тираже себестоимость единицы падает?",
            "a": "Только при соответствующей структуре затрат. Если материалы и труд на штуку неизменны, а накладные на партию постоянны, их доля на штуку падает. Если накладные тоже растут с выпуском или меняются цены, снижение не гарантировано."
          },
          {
            "q": "Считать ли брак в тираже?",
            "a": "Для средней стоимости годной продукции вводите число годных единиц. Однако необычные потери и затраты на брак нельзя автоматически распределять в стоимость запасов: их учёт зависит от применяемых правил. Сначала определите базу затрат партии."
          },
          {
            "q": "Это и есть цена, которую нужно назначить?",
            "a": "Нет. Средняя производственная стоимость помогает оценить маржу, но сама по себе не является универсальным минимальным тарифом или рекомендацией цены. Продажа, налоги, спрос, дополнительный заказ и свободные мощности требуют отдельного анализа."
          }
        ],
        "sources": [
          "https://www.ifrs.org/issued-standards/list-of-standards/ias-2-inventories/"
        ]
      },
      "en": {
        "path": "/en/business/unit-cost-calculator/",
        "h1": "Unit cost calculator",
        "longDescription": "Average unit cost divides the selected batch costs by its count of usable units. Materials, labour and allocated overhead must all refer to that batch. A larger batch spreads only costs that actually remain fixed; the calculator does not assume this automatically. Material share measures sensitivity: with other costs and output unchanged, a 10% increase in material cost raises the total by 10% of that share.",
        "howToUse": [
          "Enter the cost of materials for the whole run.",
          "Enter the labour cost for the same run.",
          "Enter the overhead allocated to the run.",
          "Enter how many units the run produced.",
          "When changing batch size, update materials and labour to the actual scenario; do not hold them fixed if purchases and work hours increase."
        ],
        "howItWorks": "Cost per unit = (materials + labour + overhead) ÷ units. The materials share is materials divided by the total cost, shown as a percentage. Batch size is a positive whole count. If all three costs are zero, unit cost is zero and material share is omitted because its denominator is zero. This is an average allocated cost, not the marginal cost of one extra unit.",
        "example": "Materials 240,000, labour 96,000 and overhead 54,000 across 1,500 units give 260 per unit. Zero total cost for 10 usable units gives unit cost 0; material share is omitted.",
        "disclaimer": "Average cost of the selected batch in one currency without exchange. Not marginal cost or a universal recommended price.",
        "faq": [
          {
            "q": "Which costs belong in overhead here?",
            "a": "Everything the run consumed without being part of the product: rent for the production floor, equipment depreciation, supervision. Company-wide costs such as marketing usually do not belong in the unit cost."
          },
          {
            "q": "Why does the unit cost fall when the run gets bigger?",
            "a": "Only with suitable cost behaviour. If material and labour per unit stay constant and batch overhead stays fixed, overhead per unit falls. If overhead also grows with output or prices change, lower unit cost is not guaranteed."
          },
          {
            "q": "Should defective units be counted in the run size?",
            "a": "For usable-output average cost, use usable units. Abnormal waste and defective-unit costs should not automatically be capitalised into inventory; treatment depends on the applicable accounting rules. Define the batch-cost basis first."
          },
          {
            "q": "Is this the price I should charge?",
            "a": "No. Average production cost helps assess margin but is not a universal price floor or a pricing recommendation. Selling costs, taxes, demand, incremental orders and spare capacity need separate analysis."
          }
        ],
        "sources": [
          "https://www.ifrs.org/issued-standards/list-of-standards/ias-2-inventories/"
        ]
      },
      "uk": {
        "path": "/uk/business/sobivartist-odynytsi/",
        "h1": "Калькулятор собівартості одиниці",
        "longDescription": "Середня собівартість одиниці ділить витрати вибраної партії на кількість придатних одиниць. Матеріали, праця й розподілені накладні мають стосуватися цієї партії. Більший наклад розподіляє лише ті витрати, які справді залишаються сталими; калькулятор не припускає цього автоматично. Частка матеріалів показує чутливість: за незмінних інших витрат і випуску подорожчання матеріалів на 10 % піднімає суму на 10 % їхньої частки.",
        "howToUse": [
          "Введіть вартість матеріалів на всю партію.",
          "Введіть витрати на працю.",
          "Введіть накладні витрати та кількість одиниць у партії.",
          "Змінюючи наклад, перераховуйте матеріали й працю за реальним сценарієм; не залишайте їх сталими, якщо закупівлі й години зростають."
        ],
        "howItWorks": "Собівартість одиниці дорівнює (матеріали + праця + накладні) ÷ наклад. Частка матеріалів рахується як матеріали, поділені на суму всіх витрат, у відсотках — вона показує, наскільки собівартість чутлива до цін постачальників. Наклад — додатна ціла кількість. Якщо всі три суми нульові, собівартість нульова, а частка матеріалів не показується через нульовий знаменник. Це середня розподілена вартість, а не граничні витрати додаткової одиниці.",
        "example": "Матеріали 240 000, праця 96 000 і накладні 54 000 на 1500 штук дають 260 за одиницю. Якщо подвоїти матеріали, працю й випуск до 3000, залишивши накладні 54 000, результат дорівнює 242. Усі суми задаються в одній вибраній валюті без перерахунку. Нульові витрати на 10 придатних одиниць дають вартість 0; частка матеріалів не показується.",
        "disclaimer": "Середня вартість вибраної партії в одній валюті без обміну. Не граничні витрати й не універсальна рекомендована ціна.",
        "faq": [
          {
            "q": "Чому собівартість падає зі зростанням накладу?",
            "a": "Це можливе, коли накладні на партію сталі, а матеріали й праця на одиницю незмінні. У прикладі подвоєння матеріалів до 480 000, праці до 192 000 і випуску до 3000 за накладних 54 000 дає 242 за одиницю. Якщо змінюються інші витрати, зниження не гарантоване."
          },
          {
            "q": "Що вважати накладними витратами?",
            "a": "Виробничі витрати, віднесені на партію: наприклад оренда цеху, амортизація й робота майстра. Вони можуть містити сталу та змінну частини; спосіб розподілу й застосовні правила обліку потрібно визначити до вводу."
          },
          {
            "q": "Навіщо знати частку матеріалів?",
            "a": "За незмінних інших витрат і випуску частка дає точну чутливість до витрат на матеріали: при частке 60 % подорожчання матеріалів на 10 % додає 6 % до загальної собівартості. Це не прогноз зміни всіх цін або випуску."
          },
          {
            "q": "Чи входить сюди доставка до покупця?",
            "a": "Доставка покупцеві не входить у виробничу базу автоматично. Якщо додаєте її до обраної управлінської бази, позначте це явно; тоді результат не буде лише виробничою собівартістю за стандартами обліку."
          }
        ],
        "sources": [
          "https://www.ifrs.org/issued-standards/list-of-standards/ias-2-inventories/"
        ]
      },
      "de": {
        "path": "/de/business/stueckkosten-rechner/",
        "h1": "Rechner für die Stückkosten",
        "longDescription": "Die durchschnittlichen Stückkosten teilen die Kosten einer ausgewählten Charge durch ihre nutzbare Stückzahl. Material, Arbeit und zugeordnete Gemeinkosten müssen dieselbe Charge betreffen. Eine größere Charge verteilt nur tatsächlich feste Kosten auf mehr Stücke; diese Annahme trifft der Rechner nicht automatisch. Der Materialanteil zeigt Sensitivität: Bei unveränderten übrigen Kosten und Stückzahlen erhöht ein Materialanstieg von 10 % die Summe um 10 % dieses Anteils.",
        "howToUse": [
          "Trage die Materialkosten für die ganze Auflage ein.",
          "Trage die Arbeitskosten derselben Auflage ein.",
          "Trage die der Auflage zugerechneten Gemeinkosten ein.",
          "Trage ein, wie viele Einheiten die Auflage hervorgebracht hat.",
          "Passe bei anderer Chargengröße Material und Arbeit an das tatsächliche Szenario an; steigende Einkäufe und Arbeitsstunden sind nicht konstant."
        ],
        "howItWorks": "Kosten je Einheit = (Material + Arbeit + Gemeinkosten) ÷ Einheiten. Der Materialanteil ist das Material geteilt durch die Gesamtkosten, in Prozent. Die Chargengröße ist eine positive ganze Anzahl. Bei drei Nullkosten sind die Stückkosten null; der Materialanteil entfällt wegen des Nullnenners. Dies sind durchschnittlich zugeordnete Kosten, keine Grenzkosten eines zusätzlichen Stücks.",
        "example": "Material 24 000 €, Arbeit 9600 € und Gemeinkosten 5400 € über 1500 Einheiten ergeben 26 € je Stück. Null Gesamtkosten bei 10 nutzbaren Stücken ergeben Stückkosten 0; Materialanteil entfällt.",
        "disclaimer": "Durchschnittskosten der gewählten Charge in einer Währung ohne Umrechnung; keine Grenzkosten oder allgemeine Preisempfehlung.",
        "faq": [
          {
            "q": "Welche Kosten gehören hier zu den Gemeinkosten?",
            "a": "Alles, was die Auflage verbraucht hat, ohne Teil des Erzeugnisses zu sein: Miete der Fertigungsfläche, Abschreibung der Anlagen, Aufsicht. Unternehmensweite Kosten wie Marketing gehören meist nicht in die Stückkosten."
          },
          {
            "q": "Warum fallen die Stückkosten bei größerer Auflage?",
            "a": "Nur bei passender Kostenstruktur. Bleiben Material und Arbeit je Stück gleich sowie Gemeinkosten je Charge fest, sinkt deren Stückanteil. Steigen auch Gemeinkosten mit dem Ausstoß oder ändern sich Preise, ist eine Senkung nicht garantiert."
          },
          {
            "q": "Sollen fehlerhafte Stücke zur Auflage zählen?",
            "a": "Für durchschnittliche Kosten nutzbarer Ware zählt die nutzbare Stückzahl. Außergewöhnlicher Ausschuss darf jedoch nicht automatisch in Lagerkosten aktiviert werden; die Behandlung folgt den geltenden Rechnungslegungsregeln. Bestimme zuerst die Kostenbasis."
          },
          {
            "q": "Ist das der Preis, den ich verlangen sollte?",
            "a": "Nein. Durchschnittliche Produktionskosten helfen bei der Margenprüfung, sind aber keine allgemeine Preisuntergrenze oder Preisempfehlung. Vertriebskosten, Steuern, Nachfrage, Zusatzaufträge und freie Kapazität erfordern eine eigene Betrachtung."
          }
        ],
        "sources": [
          "https://www.ifrs.org/issued-standards/list-of-standards/ias-2-inventories/"
        ]
      },
      "es": {
        "path": "/es/negocios/coste-unitario/",
        "h1": "Calculadora de coste unitario",
        "longDescription": "El coste unitario medio divide los costes de un lote entre sus unidades utilizables. Materiales, mano de obra y gastos generales asignados deben pertenecer al mismo lote. Una tirada mayor reparte solo los costes que realmente permanecen fijos; el cálculo no lo supone automáticamente. La cuota de materiales indica sensibilidad: con otros costes y producción constantes, un aumento del 10% en materiales eleva el total en el 10% de esa cuota.",
        "howToUse": [
          "Introduce el coste de materiales de toda la tirada.",
          "Introduce el coste de mano de obra de esa misma tirada.",
          "Introduce los gastos generales imputados a la tirada.",
          "Introduce cuántas unidades produjo la tirada.",
          "Al variar la tirada, actualiza materiales y mano de obra según el escenario; no los mantengas fijos si aumentan compras y horas."
        ],
        "howItWorks": "Coste por unidad = (materiales + mano de obra + gastos generales) ÷ unidades. La proporción de materiales son los materiales divididos entre el coste total, en porcentaje. El lote debe tener una cantidad entera positiva. Si los tres costes son cero, el coste unitario es cero y se omite la cuota de materiales por denominador cero. Es coste medio asignado, no coste marginal de una unidad adicional.",
        "example": "Materiales 24 000, mano de obra 9600 y gastos generales 5400 en 1500 unidades dan 26 por unidad. Coste total cero para 10 unidades utilizables da coste unitario 0; se omite la cuota de materiales.",
        "disclaimer": "Coste medio del lote en una moneda sin conversión; no coste marginal ni precio recomendado universal.",
        "faq": [
          {
            "q": "¿Qué costes entran aquí en los gastos generales?",
            "a": "Todo lo que consumió la tirada sin formar parte del producto: alquiler de la nave, amortización de los equipos, supervisión. Los costes de toda la empresa, como el marketing, no suelen pertenecer al coste unitario."
          },
          {
            "q": "¿Por qué el coste unitario baja cuando crece la tirada?",
            "a": "Solo con una estructura adecuada. Si materiales y mano de obra por unidad no cambian y los gastos del lote son fijos, baja su parte por unidad. Si esos gastos también crecen con la producción o cambian precios, la reducción no está garantizada."
          },
          {
            "q": "¿Las unidades defectuosas cuentan en el tamaño de la tirada?",
            "a": "Para coste medio de producción utilizable, usa unidades utilizables. Las pérdidas anormales y costes de defectos no deben capitalizarse automáticamente en inventario; depende de las normas aplicables. Define primero la base de costes del lote."
          },
          {
            "q": "¿Es este el precio que debo cobrar?",
            "a": "No. El coste medio de producción ayuda a evaluar margen, pero no es un precio mínimo universal ni una recomendación. Costes de venta, impuestos, demanda, pedidos adicionales y capacidad libre necesitan análisis aparte."
          }
        ],
        "sources": [
          "https://www.ifrs.org/issued-standards/list-of-standards/ias-2-inventories/"
        ]
      }
    }
  },
  {
    "id": "cycle-time",
    "inputs": {
      "availableMinutes": 480,
      "demand": 120,
      "actualCycle": 0
    },
    "expected": 4,
    "rows": [
      15
    ],
    "rowCount": 1,
    "defaults": {
      "availableMinutes": 480,
      "demand": 120,
      "actualCycle": 3.5
    },
    "defaultExpected": 4.0,
    "blankField": "availableMinutes",
    "domainField": "demand",
    "domainInvalid": 0,
    "primaryUnit": "minutesPerUnit",
    "moneyFields": [],
    "moneyRows": [],
    "fieldNames": [
      "availableMinutes",
      "demand",
      "actualCycle"
    ],
    "inactive": [],
    "countFields": [
      "demand"
    ],
    "optionalAmount": null,
    "boundary": {
      "inputs": {
        "availableMinutes": 480,
        "demand": 120,
        "actualCycle": 3.5
      },
      "expected": 4,
      "rows": [
        15,
        3.5,
        87.5,
        137.14
      ],
      "rowCount": 4,
      "inactive": []
    },
    "pages": {
      "ru": {
        "path": "/ru/business/takt-proizvodstva/",
        "h1": "Калькулятор такта производства",
        "longDescription": "Такт задаёт не линия, а заказчик: это доступное время смены, поделённое на то, сколько единиц за эту смену нужно отгрузить. Дальше фактический цикл сравнивается с тактом — и если он больше, участок не успевает независимо от того, насколько он «быстрый» сам по себе. Именно поэтому загрузка выше ста процентов означает нехватку времени, а не переработку: сокращать нужно цикл или добавлять параллельные посты.",
        "howToUse": [
          "Доступное время — это чистое время работы: обеды, пересменки и плановые остановки вычитайте заранее.",
          "Спрос берите за ту же смену, за которую посчитано доступное время, иначе такт выйдет бессмысленным.",
          "Фактический цикл — среднее время на единицу, которое участок показывает сейчас.",
          "Загрузка выше ста процентов означает нехватку времени, а не переработку.",
          "Если фактический цикл неизвестен, введите 0: получите такт без выдуманного выпуска. Дробный возможный выпуск является оценкой, а не обещанием отгрузки."
        ],
        "howItWorks": "Такт = чистое доступное время T ÷ спрос D. Требуемый выпуск в час = 60/такт. При известном положительном цикле C: загрузка такта = C/такт × 100 %, возможный средний выпуск = T/C. D — целое число от 1. C=0 означает неизвестный цикл: сравнение и выпуск не выводятся, но такт рассчитан. Выпуск — оценка для постоянного цикла без дополнительных остановок, не гарантированное целое число изделий.",
        "example": "Смена 480 минут на 120 изделий даёт такт 4 минуты; фактические 3,5 минуты — загрузка 87,5 %. При времени 480, спросе 120 и неизвестном цикле 0 такт остаётся 4 минуты, а оценка выпуска не выводится.",
        "disclaimer": "Одна последовательная линия, чистое время и постоянный цикл. Не модель параллельных мощностей и не гарантия целого выпуска.",
        "faq": [
          {
            "q": "Чем такт отличается от времени цикла?",
            "a": "Такт — это требование заказчика, время цикла — способность участка. Такт нельзя «улучшить»: он меняется только вместе со спросом или с длиной смены. Улучшают именно цикл, подтягивая его под такт."
          },
          {
            "q": "Что делать, если цикл больше такта?",
            "a": "Три пути: сократить цикл, добавить параллельный пост или увеличить доступное время. Расчёт показывает, насколько велика нехватка, — из этого видно, хватит ли одной меры."
          },
          {
            "q": "Нужно ли закладывать запас?",
            "a": "Резерв помогает учитывать вариацию цикла, неисправности и потери, но подходящая величина зависит от процесса и измерений. Универсальной нормы 85–95 % такта нет. Для нескольких параллельных постов и разных изделий нужна более подробная модель мощности."
          },
          {
            "q": "Считается ли время наладки?",
            "a": "Только если вы вычли его из доступного времени. Такт считается от чистого времени работы — переналадки, уборка и плановое обслуживание в него входить не должны."
          }
        ],
        "sources": [
          "https://www.lean.org/lexicon-terms/takt-time/"
        ]
      },
      "en": {
        "path": "/en/business/takt-time/",
        "h1": "Takt time calculator",
        "longDescription": "Takt is set by the customer, not by the line: available shift time divided by the units that shift has to ship. The actual cycle time is then compared against it — and if it is larger, the cell cannot keep up however \"fast\" it feels. That is why a utilisation above one hundred per cent means a shortfall rather than overtime: you must cut the cycle or add parallel stations.",
        "howToUse": [
          "Available time means net working time: subtract breaks, shift handovers and planned stops first.",
          "Take demand for the same shift the available time covers, or the takt is meaningless.",
          "Actual cycle time is the average time per unit the cell currently achieves.",
          "Utilisation above one hundred per cent means a shortfall, not overtime.",
          "If actual cycle is unknown, enter 0 to get takt without an invented output estimate. Fractional capacity is an estimate, not a shipping commitment."
        ],
        "howItWorks": "Takt = net available minutes T ÷ demand D. Required units per hour = 60/takt. For a known positive cycle C, takt utilisation = C/takt × 100% and average possible output = T/C. D is a whole count of at least 1. C=0 means unknown cycle: comparison and capacity rows are omitted while takt remains available. Capacity assumes constant cycle without extra downtime and is not a guaranteed whole output count.",
        "example": "A 480-minute shift for 120 units gives a 4-minute takt; an actual 3.5 minutes is 87.5 % utilisation. With 480 minutes, demand 120 and unknown cycle 0, takt remains 4 minutes and capacity is omitted.",
        "disclaimer": "One sequential line, net time and constant cycle. Not a parallel-capacity model or a guarantee of whole completed output.",
        "faq": [
          {
            "q": "How does takt differ from cycle time?",
            "a": "Takt is the customer's requirement, cycle time is the cell's ability. Takt cannot be \"improved\": it only moves with demand or shift length. What you improve is the cycle, pulling it under the takt."
          },
          {
            "q": "What if the cycle exceeds the takt?",
            "a": "Three routes: shorten the cycle, add a parallel station, or extend the available time. The calculation shows how large the shortfall is, which tells you whether one measure will do."
          },
          {
            "q": "Should I plan in a margin?",
            "a": "A reserve can account for cycle variation, failures and losses, but its size depends on the process and measurements. There is no universal 85–95% takt target. Parallel stations and mixed products need a more detailed capacity model."
          },
          {
            "q": "Is changeover time included?",
            "a": "Only if you subtracted it from the available time. Takt is computed from net working time — changeovers, cleaning and planned maintenance should not be in it."
          }
        ],
        "sources": [
          "https://www.lean.org/lexicon-terms/takt-time/"
        ]
      },
      "uk": {
        "path": "/uk/business/takt-vyrobnytstva/",
        "h1": "Калькулятор такту виробництва",
        "longDescription": "Такт задає не лінія, а замовник: це доступний час зміни, поділений на те, скільки одиниць за цю зміну потрібно відвантажити. Далі фактичний цикл порівнюється з тактом — і саме це відношення показує, встигає виробництво чи ні.",
        "howToUse": [
          "Введіть доступний час зміни у хвилинах — без перерв і планових зупинок.",
          "Введіть попит: скільки одиниць треба випустити за зміну.",
          "Введіть фактичний час циклу, щоб побачити завантаження.",
          "Якщо фактичний цикл невідомий, введіть 0: отримаєте такт без вигаданого випуску. Дробова потужність є оцінкою, а не обіцянкою відвантаження."
        ],
        "howItWorks": "Такт = чистий доступний час T ÷ попит D. Потрібний випуск за годину = 60/такт. За відомого додатного циклу C: завантаження = C/такт × 100 %, можливий середній випуск = T/C. D — ціла кількість від 1. C=0 означає невідомий цикл: порівняння й випуск не показуються, але такт обчислено. Випуск припускає сталий цикл без додаткових зупинок і не гарантує цілу кількість виробів.",
        "example": "Зміна 480 хвилин на 120 виробів дає такт 4 хвилини; фактичні 3,5 хвилини — завантаження 87,5 %. Виробництво встигає із запасом у півхвилини на одиницю. За 480 хвилин, попиту 120 та невідомого циклу 0 такт залишається 4 хвилини, випуск не показується.",
        "disclaimer": "Одна послідовна лінія, чистий час і сталий цикл. Не модель паралельних потужностей і не гарантія цілого випуску.",
        "faq": [
          {
            "q": "Чим такт відрізняється від часу циклу?",
            "a": "Такт задає замовник: це темп, у якому треба випускати, щоб покрити попит. Час циклу — те, з якою швидкістю лінія випускає насправді. Виробництво здорове, коли цикл трохи менший за такт."
          },
          {
            "q": "Що входить у доступний час?",
            "a": "Чистий час після перерв, планового обслуговування й переналагоджень. Повна тривалість зміни завищить доступний час і такт, створюючи зайвий уявний запас. Не віднімайте одну зупинку одночасно з часу й повторно з циклу."
          },
          {
            "q": "Що означає завантаження понад 100 %?",
            "a": "Цикл довший за такт, тому за введених часу й попиту одна послідовна лінія не встигає. Можна змінювати цикл, доступний час або кількість паралельних постів; калькулятор не моделює їхнє спільне завантаження."
          },
          {
            "q": "Чому не варто прагнути завантаження рівно 100 %?",
            "a": "За роботи рівно в такт будь-яка незапланована втрата часу може зірвати план. Розмір резерву визначають за реальною мінливістю й допустимим ризиком; автоматичної норми 10–15 % тут немає."
          }
        ],
        "sources": [
          "https://www.lean.org/lexicon-terms/takt-time/"
        ]
      },
      "de": {
        "path": "/de/business/taktzeit-rechner/",
        "h1": "Taktzeitrechner",
        "longDescription": "Den Takt setzt der Kunde und nicht die Linie: die verfügbare Schichtzeit geteilt durch die Einheiten, die diese Schicht ausliefern muss. Die tatsächliche Zykluszeit wird dann dagegen gehalten — ist sie größer, kann die Zelle nicht mithalten, wie „schnell“ sie sich auch anfühlt. Deshalb bedeutet eine Auslastung über hundert Prozent eine Unterdeckung und keine Überstunden: du musst den Zyklus verkürzen oder parallele Stationen hinzufügen.",
        "howToUse": [
          "Verfügbare Zeit heißt reine Arbeitszeit: zieh Pausen, Schichtübergaben und geplante Stillstände vorher ab.",
          "Nimm die Nachfrage derselben Schicht, die die verfügbare Zeit abdeckt, sonst ist der Takt sinnlos.",
          "Die tatsächliche Zykluszeit ist die mittlere Zeit je Einheit, die die Zelle derzeit erreicht.",
          "Eine Auslastung über hundert Prozent bedeutet Unterdeckung und keine Überstunden.",
          "Gib bei unbekanntem Zyklus 0 ein: der Takt bleibt ohne erfundenen Ausstoß. Gebrochene Kapazität ist eine Schätzung, keine Lieferzusage."
        ],
        "howItWorks": "Takt = netto verfügbare Minuten T ÷ Nachfrage D. Erforderliche Stückzahl je Stunde = 60/Takt. Für bekannten positiven Zyklus C: Taktauslastung = C/Takt × 100 % und möglicher mittlerer Ausstoß = T/C. D ist eine ganze Anzahl ab 1. C=0 bedeutet unbekannten Zyklus; Vergleich und Kapazität entfallen, der Takt bleibt berechenbar. Kapazität setzt einen konstanten Zyklus ohne zusätzliche Stillstände voraus und garantiert keine ganze Stückzahl.",
        "example": "Eine Schicht von 480 Minuten für 120 Einheiten ergibt einen Takt von 4 Minuten; ein tatsächlicher Zyklus von 3,5 Minuten sind 87,5 % Auslastung. Bei 480 Minuten, Nachfrage 120 und unbekanntem Zyklus 0 bleibt der Takt 4 Minuten; Ausstoß entfällt.",
        "disclaimer": "Eine sequenzielle Linie, Nettozeit und konstanter Zyklus; kein Modell paralleler Kapazität und keine Garantie ganzer Fertigstücke.",
        "faq": [
          {
            "q": "Wie unterscheidet sich der Takt von der Zykluszeit?",
            "a": "Der Takt ist die Anforderung des Kunden, die Zykluszeit das Können der Zelle. Der Takt lässt sich nicht „verbessern“: er bewegt sich nur mit der Nachfrage oder der Schichtlänge. Verbessert wird der Zyklus, indem man ihn unter den Takt zieht."
          },
          {
            "q": "Was, wenn der Zyklus den Takt übersteigt?",
            "a": "Drei Wege: den Zyklus verkürzen, eine parallele Station hinzufügen oder die verfügbare Zeit verlängern. Die Rechnung zeigt, wie groß die Unterdeckung ist, und das sagt dir, ob eine Maßnahme reicht."
          },
          {
            "q": "Soll ich eine Reserve einplanen?",
            "a": "Eine Reserve kann Zyklusschwankungen, Ausfälle und Verluste abfangen; ihre Größe hängt von Prozess und Messungen ab. Ein allgemeines Ziel von 85–95 % des Takts gibt es nicht. Parallele Stationen und Produktmix benötigen ein genaueres Kapazitätsmodell."
          },
          {
            "q": "Ist die Rüstzeit enthalten?",
            "a": "Nur, wenn du sie von der verfügbaren Zeit abgezogen hast. Der Takt wird aus reiner Arbeitszeit gerechnet — Rüsten, Reinigen und geplante Wartung gehören nicht hinein."
          }
        ],
        "sources": [
          "https://www.lean.org/lexicon-terms/takt-time/"
        ]
      },
      "es": {
        "path": "/es/negocios/tiempo-takt/",
        "h1": "Calculadora de tiempo takt",
        "longDescription": "El takt lo fija el cliente, no la línea: el tiempo disponible del turno dividido entre las unidades que ese turno tiene que entregar. El tiempo de ciclo real se compara después con él, y si es mayor la célula no puede seguir el ritmo por «rápida» que parezca. Por eso una utilización por encima del cien por cien significa un déficit y no horas extra: hay que recortar el ciclo o añadir puestos en paralelo.",
        "howToUse": [
          "El tiempo disponible es el tiempo neto de trabajo: resta antes las pausas, los relevos y las paradas previstas.",
          "Toma la demanda del mismo turno que cubre el tiempo disponible, o el takt pierde sentido.",
          "El tiempo de ciclo real es el tiempo medio por unidad que consigue ahora la célula.",
          "Una utilización por encima del cien por cien significa un déficit, no horas extra.",
          "Si desconoces el ciclo real, introduce 0: obtendrás takt sin una producción inventada. La capacidad fraccionaria es una estimación, no una promesa de entrega."
        ],
        "howItWorks": "Takt = minutos netos disponibles T ÷ demanda D. Unidades necesarias por hora = 60/takt. Con ciclo positivo conocido C, utilización = C/takt × 100% y producción media posible = T/C. D es un entero desde 1. C=0 significa ciclo desconocido: se omiten comparación y capacidad, conservando el takt. La capacidad supone ciclo constante sin más paradas y no garantiza una cantidad entera de piezas.",
        "example": "Un turno de 480 minutos para 120 unidades da un takt de 4 minutos; un ciclo real de 3,5 minutos es un 87,5 % de utilización. Con 480 minutos, demanda 120 y ciclo desconocido 0, el takt sigue siendo 4 minutos y se omite capacidad.",
        "disclaimer": "Una línea secuencial, tiempo neto y ciclo constante; no modelo de capacidad paralela ni garantía de unidades completas.",
        "faq": [
          {
            "q": "¿En qué se diferencia el takt del tiempo de ciclo?",
            "a": "El takt es el requisito del cliente y el tiempo de ciclo, la capacidad de la célula. El takt no se puede «mejorar»: solo se mueve con la demanda o con la duración del turno. Lo que se mejora es el ciclo, llevándolo por debajo del takt."
          },
          {
            "q": "¿Y si el ciclo supera al takt?",
            "a": "Tres caminos: acortar el ciclo, añadir un puesto en paralelo o ampliar el tiempo disponible. El cálculo muestra cuán grande es el déficit, lo que dice si bastará con una sola medida."
          },
          {
            "q": "¿Debo dejar margen en la planificación?",
            "a": "Un margen permite contemplar variación del ciclo, fallos y pérdidas, pero su tamaño depende del proceso y las mediciones. No hay un objetivo universal del 85–95% del takt. Puestos paralelos y productos distintos requieren un modelo más detallado."
          },
          {
            "q": "¿Se incluye el tiempo de cambio de formato?",
            "a": "Solo si lo has restado del tiempo disponible. El takt se calcula con el tiempo neto de trabajo: los cambios de formato, la limpieza y el mantenimiento previsto no deben estar dentro."
          }
        ],
        "sources": [
          "https://www.lean.org/lexicon-terms/takt-time/"
        ]
      }
    }
  },
  {
    "id": "email-metrics",
    "inputs": {
      "sent": 100,
      "delivered": 90,
      "opened": 20,
      "clicked": 30
    },
    "expected": 90,
    "rows": [
      22.22,
      33.33,
      150
    ],
    "rowCount": 3,
    "defaults": {
      "sent": 12000,
      "delivered": 11640,
      "opened": 3025,
      "clicked": 412
    },
    "defaultExpected": 97.0,
    "blankField": "sent",
    "domainField": "delivered",
    "domainInvalid": 101,
    "primaryUnit": "percent",
    "moneyFields": [],
    "moneyRows": [],
    "fieldNames": [
      "sent",
      "delivered",
      "opened",
      "clicked"
    ],
    "inactive": [],
    "countFields": [
      "sent",
      "delivered",
      "opened",
      "clicked"
    ],
    "optionalAmount": null,
    "boundary": {
      "inputs": {
        "sent": 100,
        "delivered": 90,
        "opened": 0,
        "clicked": 30
      },
      "expected": 90,
      "rows": [
        0,
        33.33
      ],
      "rowCount": 2,
      "inactive": []
    },
    "pages": {
      "ru": {
        "path": "/ru/business/email-metrics/",
        "h1": "Калькулятор метрик email-рассылки",
        "longDescription": "Знаменатели метрик рассылки различаются: доставляемость делится на отправленные письма, открываемость и кликабельность — на доставленные, а CTOR — на письма с зарегистрированным открытием. Введите уникальные письма хотя бы с одним событием, не все повторные открытия или клики. Открытия зависят от пикселя и защиты приватности; клики тоже могут включать ботов. Эти отношения описывают зарегистрированные события, но сами по себе не доказывают качество темы или текста.",
        "howToUse": [
          "Введите, сколько писем было отправлено.",
          "Укажите, сколько из них действительно доставлено.",
          "Введите уникальные письма с открытием и уникальные письма с кликом за ту же кампанию; повторные события не складывайте.",
          "Согласуйте уникальные счётчики и фильтрацию ботов; клик без пиксельного открытия не нужно автоматически считать ошибкой выгрузки."
        ],
        "howItWorks": "Доставляемость = D/S × 100 %, открываемость = O/D × 100 %, кликабельность = K/D × 100 %, CTOR = K/O × 100 %. S > 0, 0 ≤ D ≤ S, 0 ≤ O ≤ D, 0 ≤ K ≤ D; все счётчики целые. K может превышать O из-за разных правил отслеживания. При D=0 открываемость и кликабельность не выводятся; при O=0 CTOR не выводится. CTOR может превышать 100 % на такой несогласованной по событиям базе и не является вероятностью.",
        "example": "Из 12 000 отправленных 11 640 доставлено, 3 025 открыто и 412 кликов — доставляемость 97 %, открываемость 25,99 %. При 100 отправленных и 0 доставленных доставляемость 0 %; открываемость, кликабельность и CTOR не выводятся.",
        "disclaimer": "Уникальные зарегистрированные события одной кампании. Приватность, блокировки и боты ограничивают интерпретацию; ставки с нулевым знаменателем не выводятся.",
        "faq": [
          {
            "q": "Почему открываемость делится на доставленные, а не на отправленные?",
            "a": "Деление на доставленные отделяет доставку от последующих зарегистрированных действий. Проверьте, что платформа использует те же уникальные счётчики и период: её собственная метрика может иметь другую базу. Сам знаменатель не превращает открытия в точную оценку темы."
          },
          {
            "q": "Чем кликабельность отличается от отношения кликов к открытиям?",
            "a": "Кликабельность делит уникальные письма с кликом на доставленные, CTOR — на письма с открытием. Это разные знаменатели. Ни одно отношение отдельно не определяет причину слабого результата: влияют аудитория, предложение, отслеживание и боты."
          },
          {
            "q": "Насколько сегодня надёжна открываемость?",
            "a": "Не всякая зарегистрированная загрузка пикселя означает чтение, а блокировка изображений может скрыть реальное открытие. Автоматические загрузки и боты меняют и временную динамику. Сохраняйте правила фильтрации и проверяйте результат по независимым действиям клиентов."
          },
          {
            "q": "Почему у меня следующий шаг воронки больше предыдущего?",
            "a": "Общее число событий может превышать число писем: тогда нужны уникальные счётчики. Уникальных открытых или кликнутых писем не может быть больше доставленных. Но кликов может быть больше зарегистрированных открытий: изображения блокируются, а некоторые платформы, напротив, добавляют открытие по факту клика."
          }
        ],
        "sources": [
          "https://mailchimp.com/help/about-open-and-click-rates/"
        ]
      },
      "en": {
        "path": "/en/business/email-marketing-metrics-calculator/",
        "h1": "Email marketing metrics calculator",
        "longDescription": "Email metrics use different denominators: delivery rate uses sent emails, open and click rates use delivered emails, and CTOR uses emails with a recorded open. Enter unique emails with at least one event, not repeated open or click events. Pixel loading and privacy protection affect opens; bots can affect clicks too. The ratios describe recorded events and do not establish the quality of a subject line or message by themselves.",
        "howToUse": [
          "Enter how many emails were sent.",
          "Enter how many were actually delivered.",
          "Enter unique opened and unique clicked emails for the same campaign; do not add repeated events.",
          "Align unique counts and bot filtering; a click without a pixel-recorded open is not automatically an export error."
        ],
        "howItWorks": "Delivery = D/S × 100%, open rate = O/D × 100%, click rate = K/D × 100%, CTOR = K/O × 100%. S > 0, 0 ≤ D ≤ S, 0 ≤ O ≤ D, 0 ≤ K ≤ D; all counts are whole. K may exceed O under different tracking rules. D=0 omits open and click rates; O=0 omits CTOR. CTOR can exceed 100% on this event basis and is not a probability.",
        "example": "Of 12,000 sent, 11,640 delivered, 3,025 opened and 412 clicked gives a 97% delivery rate and a 25.99% open rate. With 100 sent and 0 delivered, delivery is 0%; open rate, click rate and CTOR are omitted.",
        "disclaimer": "Unique recorded events from one campaign. Privacy, blocking and bots limit interpretation; zero-denominator rates are omitted.",
        "faq": [
          {
            "q": "Why divide the open rate by delivered rather than sent?",
            "a": "Using delivered emails separates delivery from later recorded actions. Check that your provider uses the same unique counts and period; its own metric may have a different definition. This denominator does not make recorded opens a precise subject-line assessment."
          },
          {
            "q": "What is the difference between the click rate and the click-to-open rate?",
            "a": "Click rate divides unique clicked emails by delivered emails; CTOR divides them by emails with a recorded open. Different denominators answer different descriptive questions. Neither ratio alone diagnoses weak performance: audience, offer, tracking and bots matter."
          },
          {
            "q": "How reliable are open rates now?",
            "a": "A recorded pixel load does not always mean a person read the email; image blocking can hide a real open. Automatic loading and bots can also change trends over time. Keep filtering rules consistent and check independent customer actions."
          },
          {
            "q": "Why is a step in my funnel larger than the one before it?",
            "a": "Total events can exceed email counts, so use unique counts. Unique opened or clicked emails cannot exceed delivered emails. Clicked emails can exceed recorded opens when images are blocked; some providers instead infer an open from a click."
          }
        ],
        "sources": [
          "https://mailchimp.com/help/about-open-and-click-rates/"
        ]
      },
      "uk": {
        "path": "/uk/business/email-metryky/",
        "h1": "Калькулятор метрик email-розсилки",
        "longDescription": "Знаменники метрик розсилки різні: доставлюваність ділиться на надіслані листи, відкриваність і клікабельність — на доставлені, а CTOR — на листи із зареєстрованим відкриттям. Вводьте унікальні листи хоча б з однією подією, не суму повторних відкриттів чи кліків. Піксель і захист приватності впливають на відкриття, боти можуть впливати й на кліки. Самі відношення не доводять якість теми або тексту.",
        "howToUse": [
          "Введіть кількість надісланих листів.",
          "Введіть кількість доставлених.",
          "Введіть унікальні листи з відкриттям та з кліком за ту саму кампанію; повторні події не підсумовуйте.",
          "Узгодьте унікальні лічильники й фільтрування ботів; клік без піксельного відкриття не є автоматично помилкою експорту."
        ],
        "howItWorks": "Доставлюваність = D/S × 100 %, відкриваність = O/D × 100 %, клікабельність = K/D × 100 %, CTOR = K/O × 100 %. S > 0, 0 ≤ D ≤ S, 0 ≤ O ≤ D, 0 ≤ K ≤ D; усі кількості цілі. K може перевищувати O через різні правила відстеження. За D=0 відкриваність і клікабельність не показуються, за O=0 не показується CTOR. На такій базі подій CTOR може перевищувати 100 % і не є ймовірністю.",
        "example": "З 12 000 надісланих 11 640 доставлено, 3025 відкрито і 412 кліків — доставлюваність 97 %, відкриваність 25,99 %, клікабельність 3,54 %. За 100 надісланих і 0 доставлених доставка 0 %; відкриваність, клікабельність і CTOR не показуються.",
        "disclaimer": "Унікальні зареєстровані події однієї кампанії. Приватність, блокування й боти обмежують висновки; ставки з нульовим знаменником не показуються.",
        "faq": [
          {
            "q": "Чому відкриття діляться на доставлені, а не на надіслані?",
            "a": "Доставлені листи є базою подальших зареєстрованих дій, а надіслані — базою доставки. Перевірте унікальні лічильники й один період у своїй платформі. Сам знаменник не робить відкриття точною оцінкою теми."
          },
          {
            "q": "Наскільки надійна статистика відкриттів?",
            "a": "Відкриття можуть завищуватися автоматичним завантаженням або не реєструватися через блокування зображень. Кліки також можуть містити ботів. Порівнюйте метрики з однаковими правилами фільтрації та фактичними діями клієнтів."
          },
          {
            "q": "Що показує відношення кліків до відкриттів?",
            "a": "Це K/O × 100 % за O > 0. Через різне відстеження чисельник може перевищити знаменник, тому відношення не доводить переконливість тексту й може бути понад 100 %. За нульових відкриттів воно не показується."
          },
          {
            "q": "Чому падає доставлюваність?",
            "a": "Причини можуть включати адреси, правила приймального сервера чи технічні налаштування, але сам відсоток їх не встановлює. Перевірте звіт про відмови й визначення доставленого листа. За нульової доставки дві наступні ставки не обчислюються."
          }
        ],
        "sources": [
          "https://mailchimp.com/help/about-open-and-click-rates/"
        ]
      },
      "de": {
        "path": "/de/business/email-kennzahlen-rechner/",
        "h1": "Rechner für Kennzahlen im E-Mail-Marketing",
        "longDescription": "E-Mail-Kennzahlen nutzen verschiedene Nenner: Zustellrate bezieht sich auf gesendete E-Mails, Öffnungs- und Klickrate auf zugestellte, CTOR auf E-Mails mit erfasster Öffnung. Gib je E-Mail mindestens ein Ereignis einmal gezählt ein, keine wiederholten Öffnungen oder Klicks. Pixelabruf und Datenschutz verändern Öffnungsdaten; Bots können auch Klicks beeinflussen. Die Quoten beschreiben erfasste Ereignisse und beweisen allein keine Qualität von Betreff oder Inhalt.",
        "howToUse": [
          "Trage ein, wie viele E-Mails versandt wurden.",
          "Trage ein, wie viele tatsächlich zugestellt wurden.",
          "Gib einmalig gezählte E-Mails mit Öffnung und mit Klick aus derselben Kampagne ein, keine Summe wiederholter Ereignisse.",
          "Stimme Einzelzählungen und Botfilter ab; ein Klick ohne Pixelöffnung ist nicht automatisch ein Exportfehler."
        ],
        "howItWorks": "Zustellung = D/S × 100 %, Öffnung = O/D × 100 %, Klickrate = K/D × 100 %, CTOR = K/O × 100 %. S > 0, 0 ≤ D ≤ S, 0 ≤ O ≤ D und 0 ≤ K ≤ D mit ganzen Anzahlen. Unterschiedliche Erfassung kann K > O ergeben. Bei D=0 entfallen Öffnungs- und Klickrate, bei O=0 CTOR. Auf dieser Ereignisbasis kann CTOR über 100 % liegen und ist keine Wahrscheinlichkeit.",
        "example": "Von 12 000 versandten kamen 11 640 an, 3025 wurden geöffnet und 412 geklickt — 97 % Zustellrate und 25,99 % Öffnungsrate. Bei 100 gesendeten und 0 zugestellten beträgt die Zustellrate 0 %; Öffnung, Klickrate und CTOR entfallen.",
        "disclaimer": "Einmalig gezählte erfasste Ereignisse einer Kampagne; Datenschutz, Blockierung und Bots begrenzen Aussagen. Quoten mit Nullnenner entfallen.",
        "faq": [
          {
            "q": "Warum teilt die Öffnungsrate durch zugestellt und nicht durch versandt?",
            "a": "Der Nenner zugestellter E-Mails trennt Zustellung von später erfassten Aktionen. Prüfe gleiche Einzelzählung und Zeitraum beim Anbieter; dessen Kennzahl kann anders definiert sein. Öffnungen werden dadurch nicht zur genauen Betreffbewertung."
          },
          {
            "q": "Was ist der Unterschied zwischen Klickrate und Klicks je Öffnung?",
            "a": "Die Klickrate teilt einmalig gezählte E-Mails mit Klick durch Zustellungen, CTOR durch E-Mails mit Öffnung. Die unterschiedlichen Nenner beschreiben verschiedene Beziehungen. Keine Quote allein erklärt schlechte Ergebnisse; Zielgruppe, Angebot, Erfassung und Bots spielen mit."
          },
          {
            "q": "Wie verlässlich sind Öffnungsraten heute?",
            "a": "Ein erfasster Pixelabruf bedeutet nicht immer menschliches Lesen; blockierte Bilder können echte Öffnungen verbergen. Automatische Abrufe und Bots können auch Zeittrends verändern. Nutze gleichbleibende Filter und prüfe unabhängige Kundenaktionen."
          },
          {
            "q": "Warum ist eine Stufe meines Trichters größer als die vorige?",
            "a": "Gesamte Ereignisse können die Zahl der E-Mails übersteigen; nutze Einzelzählungen. E-Mails mit Öffnung oder Klick dürfen Zustellungen nicht übersteigen. Klicks können erfasste Öffnungen übersteigen, wenn Bilder blockiert sind; andere Anbieter leiten eine Öffnung aus einem Klick ab."
          }
        ],
        "sources": [
          "https://mailchimp.com/help/about-open-and-click-rates/"
        ]
      },
      "es": {
        "path": "/es/negocios/metricas-de-email-marketing/",
        "h1": "Calculadora de métricas de email marketing",
        "longDescription": "Las métricas de correo usan denominadores distintos: entrega sobre enviados, apertura y clic sobre entregados, CTOR sobre correos con apertura registrada. Introduce correos únicos con al menos un evento, no aperturas o clics repetidos. La carga de imágenes y protección de privacidad afectan aperturas; los bots también pueden afectar clics. Estos cocientes describen eventos registrados y no demuestran por sí solos la calidad del asunto o del contenido.",
        "howToUse": [
          "Introduce cuántos correos se enviaron.",
          "Introduce cuántos se entregaron de verdad.",
          "Introduce correos únicos abiertos y con clic de la misma campaña; no sumes eventos repetidos.",
          "Unifica cantidades únicas y filtros de bots; un clic sin apertura registrada por píxel no es automáticamente un error de exportación."
        ],
        "howItWorks": "Entrega = D/S × 100%, apertura = O/D × 100%, clic = K/D × 100%, CTOR = K/O × 100%. S > 0, 0 ≤ D ≤ S, 0 ≤ O ≤ D y 0 ≤ K ≤ D, con cantidades enteras. Distintas reglas de seguimiento pueden dar K > O. Con D=0 se omiten tasas de apertura y clic; con O=0 se omite CTOR. En esta base de eventos CTOR puede superar el 100% y no representa una probabilidad.",
        "example": "De 12 000 enviados, 11 640 entregados, 3025 abiertos y 412 con clic salen un 97 % de entrega y un 25,99 % de apertura. Con 100 enviados y 0 entregados, entrega 0%; se omiten apertura, clic y CTOR.",
        "disclaimer": "Eventos únicos registrados de una campaña; privacidad, bloqueos y bots limitan su interpretación. Se omiten tasas con denominador cero.",
        "faq": [
          {
            "q": "¿Por qué la tasa de apertura se divide entre los entregados y no entre los enviados?",
            "a": "Usar entregados separa entrega de acciones posteriores registradas. Comprueba cantidades únicas y periodo del proveedor, cuya métrica puede tener otra base. Ese denominador no convierte aperturas en una evaluación precisa del asunto."
          },
          {
            "q": "¿Qué diferencia hay entre la tasa de clics y la de clics sobre aperturas?",
            "a": "La tasa de clic divide correos únicos con clic entre entregados; CTOR los divide entre correos con apertura registrada. Son denominadores distintos. Ningún cociente diagnostica por sí solo un mal resultado: influyen audiencia, oferta, seguimiento y bots."
          },
          {
            "q": "¿Qué fiabilidad tienen hoy las tasas de apertura?",
            "a": "Una carga registrada del píxel no siempre significa lectura humana; bloquear imágenes puede ocultar una apertura real. Cargas automáticas y bots también cambian tendencias. Mantén filtros coherentes y comprueba acciones independientes del cliente."
          },
          {
            "q": "¿Por qué un paso de mi embudo es mayor que el anterior?",
            "a": "Los eventos totales pueden superar el número de correos; usa cantidades únicas. Los correos únicos abiertos o con clic no superan entregados. Los clics sí pueden superar aperturas registradas con imágenes bloqueadas; algunos proveedores deducen una apertura de un clic."
          }
        ],
        "sources": [
          "https://mailchimp.com/help/about-open-and-click-rates/"
        ]
      }
    }
  },
  {
    "id": "employee-cost",
    "inputs": {
      "gross": 100,
      "taxPct": 30,
      "overhead": 0
    },
    "expected": 130,
    "rows": [
      30,
      100,
      0,
      1.3
    ],
    "rowCount": 4,
    "defaults": {
      "gross": 180000,
      "taxPct": 30,
      "overhead": 25000
    },
    "defaultExpected": 259000.0,
    "blankField": "gross",
    "domainField": "taxPct",
    "domainInvalid": 201,
    "primaryUnit": "money",
    "moneyFields": [
      "gross",
      "overhead"
    ],
    "moneyRows": [
      0,
      1,
      2
    ],
    "fieldNames": [
      "gross",
      "taxPct",
      "overhead"
    ],
    "inactive": [],
    "countFields": [],
    "optionalAmount": null,
    "boundary": {
      "inputs": {
        "gross": 100,
        "taxPct": 0,
        "overhead": 20
      },
      "expected": 120,
      "rows": [
        0,
        100,
        20,
        1.2
      ],
      "rowCount": 4,
      "inactive": []
    },
    "pages": {
      "ru": {
        "path": "/ru/business/employee-cost/",
        "h1": "Калькулятор стоимости сотрудника",
        "longDescription": "Стоимость сотрудника в этой модели складывается из начисленного оклада до личных удержаний, расходов работодателя по введённой ставке и накладных за тот же период. Ставка 30 % добавляет ровно 30 % оклада, а не треть. Множитель показывает отношение выбранных расходов к окладу; он зависит от ваших данных и не является отраслевой нормой. Калькулятор не определяет зарплату на руки, действующие ставки взносов, налоговые пределы или стоимость фактически отработанного часа.",
        "howToUse": [
          "Введите начисленный оклад за период.",
          "Укажите ставку взносов работодателя сверх оклада.",
          "Накладные расходы за тот же период введите суммой.",
          "Период должен быть один и тот же везде — месяц или год, но не вперемешку.",
          "Избегайте двойного учёта льгот и отпускных в окладе и накладных; фиксированный расход нельзя без проверки переносить как процент."
        ],
        "howItWorks": "Взносы = оклад × ставка ÷ 100. Итого = оклад + взносы + накладные. Множитель — это итог, делённый на оклад. Оклад и накладные должны относиться к одному месяцу или году. Для прогрессивных ставок, предельных баз и льгот сначала рассчитайте соответствующие расходы отдельно. Деление общей суммы на часы здесь не выполняется. Введённая ставка поддерживается в исходном диапазоне поля 0–200 %, который не является нормой взносов.",
        "example": "Оклад 180 000 ₽ при взносах 30 % и накладных 25 000 ₽ обходится в 259 000 ₽ — 1,44 оклада. Без дополнительных расходов: оклад 100, ставка 0 % и накладные 0 дают итог 100 и множитель 1.",
        "disclaimer": "Плановый оклад плюс введённая ставка и накладные в одной валюте. Без автоматических местных тарифов, предельных баз и расчёта зарплаты на руки.",
        "faq": [
          {
            "q": "Взносы прибавляются к окладу или удерживаются из него?",
            "a": "В этой модели ставка относится к дополнительным расходам работодателя поверх начисленного оклада. Личные удержания работника не вычитаются. Реальные правила налогов, взносов и отражения в расчётном листке зависят от места и договора."
          },
          {
            "q": "Что относить к накладным расходам?",
            "a": "Рабочее место, технику, лицензии на программы, обучение, подбор, разнесённый на срок работы. Всё, что бизнес перестал бы платить, если бы должность исчезла."
          },
          {
            "q": "Чем полезен множитель к окладу?",
            "a": "Он показывает относительный бюджет при той же ставке и той же структуре расходов. Например, 259 000/180 000 = 1,4389… . Фиксированные накладные означают, что при другом окладе множитель нужно пересчитать, а не переносить автоматически."
          },
          {
            "q": "Учитывается ли оплачиваемый отпуск?",
            "a": "Отпуск отдельно не моделируется. Если годовой оклад уже включает оплату отсутствий, не добавляйте её повторно. Чтобы оценить стоимость продуктивного часа, разделите годовые расходы на обоснованное число рабочих часов; универсального соотношения «12 оплаченных месяцев за 11 рабочих» нет."
          }
        ],
        "sources": [
          "https://www.bls.gov/news.release/archives/ecec_12172024.htm"
        ]
      },
      "en": {
        "path": "/en/business/employee-cost-calculator/",
        "h1": "Employee cost calculator",
        "longDescription": "This planning model adds gross salary before employee deductions, employer costs at the supplied rate and overhead for the same period. A 30% rate adds exactly 30% of salary, not one third. The multiple compares included costs with salary and depends on your inputs; it is not an industry norm. The tool does not determine take-home pay, current contribution rates, tax ceilings or cost per productive hour.",
        "howToUse": [
          "Enter the gross salary for the period.",
          "Enter the employer contribution rate that applies on top of it.",
          "Enter overhead for the same period as an amount.",
          "Use the same period throughout — monthly or yearly, not mixed.",
          "Avoid counting benefits or paid leave in both salary and overhead; a fixed expense cannot be carried over as a percentage without checking."
        ],
        "howItWorks": "Contributions = salary × rate ÷ 100. Total = salary + contributions + overhead. The multiple is the total divided by the salary. Salary and overhead must use the same month or year. Calculate tiered rates, assessment ceilings and exemptions separately before entering an effective rate. The tool does not divide the total by working hours. The supplied rate retains the original field range 0–200%, which is not a contribution benchmark.",
        "example": "A salary of 180,000 with 30% contributions and 25,000 of overhead costs 259,000 — 1.44 times the salary. With no added costs, salary 100, rate 0% and overhead 0 give total 100 and multiple 1.",
        "disclaimer": "Planned gross salary plus supplied rate and overhead in one currency. No automatic local rates, assessment ceilings or take-home payroll calculation.",
        "faq": [
          {
            "q": "Are contributions added to the salary or taken out of it?",
            "a": "The entered rate represents employer costs added to gross salary. Employee deductions are not subtracted. Actual tax, contribution and payslip rules depend on jurisdiction and contract."
          },
          {
            "q": "What belongs in overhead?",
            "a": "Desk space, equipment, software licences, training, recruitment amortised over the stay. Anything the business would stop paying if the role disappeared."
          },
          {
            "q": "Why is the multiple useful?",
            "a": "It shows the relative budget under the same rate and cost structure: 259,000/180,000 = 1.4389… . Fixed overhead means the multiple must be recalculated for a different salary rather than carried over automatically."
          },
          {
            "q": "Does this include paid leave?",
            "a": "Leave is not modelled separately. If annual salary already includes paid absences, do not add them again. Productive-hour cost requires dividing annual included costs by a justified working-hour estimate; there is no universal twelve-paid-months-for-eleven-worked rule."
          }
        ],
        "sources": [
          "https://www.bls.gov/news.release/archives/ecec_12172024.htm"
        ]
      },
      "uk": {
        "path": "/uk/business/vartist-spivrobitnyka/",
        "h1": "Калькулятор вартості співробітника",
        "longDescription": "Модель додає нарахований оклад до особистих утримань, витрати роботодавця за введеною ставкою й накладні за той самий період. Ставка 30 % додає рівно 30 % окладу, а не третину. Множник порівнює обрані витрати з окладом і залежить від ваших даних, а не від універсальної норми. Калькулятор не визначає зарплату на руки, чинні ставки внесків, податкові межі або вартість фактично відпрацьованої години.",
        "howToUse": [
          "Введіть оклад співробітника.",
          "Введіть ставку внесків роботодавця у відсотках.",
          "Додайте накладні витрати: робоче місце, обладнання, програми.",
          "Не рахуйте виплати й відпустку двічі в окладі та накладних; сталу суму не можна без перевірки переносити як відсоток."
        ],
        "howItWorks": "Внески рахуються як оклад × ставка ÷ 100 і додаються зверху, а не віднімаються. Разом дорівнює оклад + внески + накладні. Множник — це підсумок, поділений на оклад: він і показує справжню вартість години роботи. Оклад і накладні мають стосуватися того самого місяця або року. Ступінчасті ставки, граничні бази й пільги розрахуйте окремо до вводу ефективної ставки. Загальна сума тут не ділиться на години. Введена ставка має початковий діапазон поля 0–200 %, що не є нормативом внесків.",
        "example": "Оклад 180 000 ₴ за внесків 30 % і накладних 25 000 ₴ обходиться в 259 000 ₴ — 1,44 окладу. Саме це число, а не оклад, треба закладати в собівартість проєкту. Без додаткових витрат: оклад 100, ставка 0 % і накладні 0 дають разом 100 і множник 1.",
        "disclaimer": "Плановий оклад плюс введені ставка й накладні в одній валюті. Без автоматичних місцевих тарифів, граничних баз і зарплати на руки.",
        "faq": [
          {
            "q": "Чому внески нараховуються зверху?",
            "a": "У цій моделі введена ставка стосується додаткових витрат роботодавця поверх нарахованого окладу. Особисті утримання працівника не віднімаються. Реальні правила податків, внесків і розрахункового листка залежать від юрисдикції та договору."
          },
          {
            "q": "Що включати в накладні?",
            "a": "Робоче місце, обладнання, ліцензії на програми, навчання, частку адміністративних витрат. Усе, що з’являється саме через наявність цього співробітника."
          },
          {
            "q": "Навіщо потрібен множник?",
            "a": "Він показує співвідношення бюджету й окладу за тієї самої структури витрат: 259 000/180 000 = 1,4389… . За іншого окладу й незмінних накладних множник треба перерахувати. Для вартості години потрібні ще фактичні години."
          },
          {
            "q": "Чи входить сюди відпустка?",
            "a": "Відпустка окремо не моделюється. Якщо річний оклад уже включає оплачену відсутність, не додавайте її повторно. Для вартості продуктивної години потрібен обґрунтований фонд робочих годин; універсального співвідношення 12 оплачених місяців до 11 робочих немає."
          }
        ],
        "sources": [
          "https://www.bls.gov/news.release/archives/ecec_12172024.htm"
        ]
      },
      "de": {
        "path": "/de/business/personalkosten-rechner/",
        "h1": "Rechner für die Personalkosten",
        "longDescription": "Das Planungsmodell addiert Bruttogehalt vor persönlichen Abzügen, Arbeitgeberkosten mit dem eingegebenen Satz und Gemeinkosten desselben Zeitraums. Ein Satz von 30 % ergänzt genau 30 % des Gehalts, kein Drittel. Der Faktor vergleicht einbezogene Kosten mit dem Gehalt und folgt deinen Eingaben, keinem Branchenstandard. Nettogehalt, aktuelle Beitragssätze, Bemessungsgrenzen und Kosten je produktiver Stunde werden nicht bestimmt.",
        "howToUse": [
          "Trage das Bruttogehalt für den Zeitraum ein.",
          "Trage den Satz der Arbeitgeberbeiträge ein, der obendrauf kommt.",
          "Trage die Gemeinkosten desselben Zeitraums als Betrag ein.",
          "Nimm durchgehend denselben Zeitraum — monatlich oder jährlich, nicht gemischt.",
          "Zähle Leistungen und Urlaub nicht doppelt in Gehalt und Gemeinkosten; feste Beträge lassen sich nicht ungeprüft als Prozentsatz übertragen."
        ],
        "howItWorks": "Beiträge = Gehalt × Satz ÷ 100. Gesamt = Gehalt + Beiträge + Gemeinkosten. Der Faktor ist das Gesamte geteilt durch das Gehalt. Gehalt und Gemeinkosten müssen denselben Monat oder dasselbe Jahr betreffen. Staffelungen, Bemessungsgrenzen und Befreiungen sind vor Eingabe eines effektiven Satzes separat zu bestimmen. Die Summe wird hier nicht durch Arbeitsstunden geteilt. Der eingegebene Satz behält den ursprünglichen Feldbereich 0–200 %, keine Beitragsnorm.",
        "example": "Ein Gehalt von 4500 € mit 21 % Beiträgen und 600 € Gemeinkosten kostet 6045 € — das 1,34-Fache des Gehalts. Ohne Zusatzkosten ergeben Gehalt 100, Satz 0 % und Gemeinkosten 0 die Summe 100 und Faktor 1.",
        "disclaimer": "Geplantes Bruttogehalt plus eingegebener Satz und Gemeinkosten in einer Währung; keine automatischen örtlichen Sätze, Grenzen oder Nettolohnrechnung.",
        "faq": [
          {
            "q": "Kommen die Beiträge auf das Gehalt obendrauf oder werden sie abgezogen?",
            "a": "Der eingegebene Satz steht hier für Arbeitgeberkosten zusätzlich zum Bruttogehalt. Persönliche Arbeitnehmerabzüge werden nicht abgezogen. Tatsächliche Steuer-, Beitrags- und Abrechnungsregeln hängen von Land und Vertrag ab."
          },
          {
            "q": "Was gehört in die Gemeinkosten?",
            "a": "Arbeitsplatz, Ausstattung, Softwarelizenzen, Weiterbildung, die auf die Verweildauer verteilte Personalsuche. Alles, was der Betrieb nicht mehr zahlen würde, wenn die Stelle wegfiele."
          },
          {
            "q": "Wozu der Faktor?",
            "a": "Er zeigt das Verhältnis von Budget und Gehalt bei derselben Kostenstruktur: 259 000/180 000 = 1,4389… . Bei festem Gemeinkostenbetrag muss er für ein anderes Gehalt neu berechnet werden, statt unverändert übernommen zu werden."
          },
          {
            "q": "Ist bezahlter Urlaub enthalten?",
            "a": "Urlaub wird nicht getrennt modelliert. Enthält das Jahresgehalt bereits bezahlte Abwesenheit, füge sie nicht doppelt hinzu. Kosten je produktiver Stunde benötigen eine begründete Arbeitsstundenzahl; zwölf bezahlte Monate für elf Arbeitsmonate sind keine allgemeine Regel."
          }
        ],
        "sources": [
          "https://www.bls.gov/news.release/archives/ecec_12172024.htm"
        ]
      },
      "es": {
        "path": "/es/negocios/coste-de-un-empleado/",
        "h1": "Calculadora de coste de un empleado",
        "longDescription": "Este modelo suma salario bruto antes de deducciones personales, costes del empleador al tipo introducido y gastos generales del mismo periodo. Un tipo del 30% añade exactamente el 30% del salario, no un tercio. El múltiplo compara costes incluidos con salario y depende de los datos, no de una norma sectorial. No calcula sueldo neto, tipos vigentes, límites de cotización ni coste por hora productiva.",
        "howToUse": [
          "Introduce el salario bruto del periodo.",
          "Introduce el tipo de cotización a cargo de la empresa que se aplica encima.",
          "Introduce los gastos generales del mismo periodo como importe.",
          "Usa el mismo periodo en todo: mensual o anual, sin mezclar.",
          "Evita duplicar prestaciones o vacaciones entre salario y gastos generales; no traslades un importe fijo como porcentaje sin comprobarlo."
        ],
        "howItWorks": "Cotizaciones = salario × tipo ÷ 100. Total = salario + cotizaciones + gastos generales. El múltiplo es el total dividido entre el salario. Salario y gastos generales deben referirse al mismo mes o año. Calcula aparte tramos, límites y exenciones antes de introducir un tipo efectivo. Aquí no se divide el total entre horas trabajadas. El tipo introducido conserva el rango original del campo 0–200%, no una norma de aportaciones.",
        "example": "Un salario de 1800 con un 30 % de cotizaciones y 250 de gastos generales cuesta 2590: 1,44 veces el salario. Sin costes añadidos, salario 100, tipo 0% y gastos 0 dan total 100 y múltiplo 1.",
        "disclaimer": "Salario bruto previsto más tipo y gastos introducidos en una moneda; sin tipos locales automáticos, límites ni cálculo de sueldo neto.",
        "faq": [
          {
            "q": "¿Las cotizaciones se suman al salario o se sacan de él?",
            "a": "El tipo introducido representa costes del empleador añadidos al salario bruto. No se restan deducciones del empleado. Las reglas fiscales, de cotización y de nómina dependen del lugar y del contrato."
          },
          {
            "q": "¿Qué entra en los gastos generales?",
            "a": "El espacio de trabajo, los equipos, las licencias de software, la formación y la selección repartida a lo largo de la permanencia. Todo lo que la empresa dejaría de pagar si el puesto desapareciera."
          },
          {
            "q": "¿Para qué sirve el múltiplo?",
            "a": "Muestra presupuesto relativo con el mismo tipo y estructura: 259 000/180 000 = 1,4389… . Con gastos generales fijos, hay que recalcular el múltiplo para otro salario, no trasladarlo automáticamente."
          },
          {
            "q": "¿Incluye las vacaciones retribuidas?",
            "a": "Las vacaciones no se modelan aparte. Si el salario anual incluye ausencias pagadas, no las añadas de nuevo. El coste por hora productiva necesita horas de trabajo justificadas; no existe una regla universal de doce meses pagados por once trabajados."
          }
        ],
        "sources": [
          "https://www.bls.gov/news.release/archives/ecec_12172024.htm"
        ]
      }
    }
  },
  {
    "id": "fee-chain",
    "inputs": {
      "price": 100,
      "commissionPct": 10,
      "acquiringPct": 20,
      "logistics": 5,
      "storage": 0,
      "cost": 70
    },
    "expected": 65,
    "rows": [
      10,
      20,
      5,
      35,
      35,
      -5,
      -5
    ],
    "rowCount": 7,
    "defaults": {
      "price": 2000,
      "commissionPct": 17,
      "acquiringPct": 1.5,
      "logistics": 55,
      "storage": 0,
      "cost": 900
    },
    "defaultExpected": 1575.0,
    "blankField": "price",
    "domainField": "logistics",
    "domainInvalid": -1,
    "primaryUnit": "money",
    "moneyFields": [
      "price",
      "logistics",
      "storage",
      "cost"
    ],
    "moneyRows": [
      0,
      1,
      2,
      3,
      5
    ],
    "fieldNames": [
      "price",
      "commissionPct",
      "acquiringPct",
      "logistics",
      "storage",
      "cost"
    ],
    "inactive": [],
    "countFields": [],
    "optionalAmount": "storage",
    "boundary": {
      "inputs": {
        "price": 100,
        "commissionPct": 0,
        "acquiringPct": 0,
        "logistics": 0,
        "storage": 0,
        "cost": 0
      },
      "expected": 100,
      "rows": [
        0,
        0,
        0,
        0,
        0,
        100,
        100
      ],
      "rowCount": 7,
      "inactive": []
    },
    "pages": {
      "ru": {
        "path": "/ru/business/fee-chain/",
        "h1": "Калькулятор комиссии маркетплейса",
        "longDescription": "Схема вычитает из цены товара две процентные ставки и две фиксированные суммы: комиссию, эквайринг, логистику и хранение. Обе ставки в этой модели относятся к одной исходной цене, а не последовательно к остатку. Выплата — остаток после введённых удержаний; строка прибыли дополнительно вычитает введённую себестоимость, но не неучтённые налоги, рекламу и прочие расходы. Реальные площадки могут применять другую базу, минимальные сборы и тарифные ступени — их нужно проверить отдельно.",
        "howToUse": [
          "Введите цену, по которой товар продаётся покупателю.",
          "Укажите ставку комиссии площадки и эквайринга из своего тарифа.",
          "Добавьте логистику и хранение за отправление, если они удерживаются отдельно.",
          "Впишите себестоимость, чтобы увидеть прибыль, а не только выплату.",
          "Сверьте базу тарифа, минимальные комиссии и распределение услуг на товар. Хранение можно оставить пустым; остальные суммы вводятся явно в одной валюте."
        ],
        "howItWorks": "Комиссия и эквайринг считаются долями от цены товара, а логистика и хранение прибавляются к ним фиксированными суммами. Выплата продавцу = цена минус все удержания; прибыль = выплата минус себестоимость. Прибыль к цене = (выплата−себестоимость)/цена × 100 %. Пустое хранение означает 0 и скрывает только эту строку. Отрицательная выплата или прибыль возможна при затратах выше цены и не заменяется нулём. Каждая ставка ограничена интерфейсным диапазоном 0–100 %. Это ограничение инструмента, а не тарифная норма.",
        "example": "Товар за 2000 ₽ при комиссии 17 %, эквайринге 1,5 % и логистике 55 ₽ даёт выплату 1575 ₽ и прибыль 675 ₽ при себестоимости 900 ₽. При цене 1000 и всех удержаниях 0 выплата 1000; пустое хранение эквивалентно 0.",
        "disclaimer": "Две ставки от цены и введённые фиксированные услуги. Не воспроизводит любой тариф площадки; прибыль только после указанных затрат, без автоматических налогов.",
        "faq": [
          {
            "q": "Проценты берутся от цены или от остатка?",
            "a": "Здесь обе ставки берутся от исходной цены. Это выбранная схема, а не правило всех площадок. Если тариф включает доставку в базу, применяет минимум или удерживает проценты последовательно, простая модель не воспроизведёт его без отдельного расчёта."
          },
          {
            "q": "Почему логистика вводится за отправление?",
            "a": "Введите относимую на один продажный экземпляр сумму из своего тарифа или учёта. В модели она фиксирована при изменении цены, но реальная логистика может зависеть от размеров, веса, направления и услуг — одинаковая стоимость для любых товаров не предполагается."
          },
          {
            "q": "Что делать, если хранение не удерживается?",
            "a": "Оставьте поле пустым или нулевым — строка хранения тогда просто не появится в результате, а расчёт останется верным."
          },
          {
            "q": "Почему прибыль отличается от выплаты?",
            "a": "Выплата вычитает введённые услуги площадки, прибыль дополнительно вычитает себестоимость. Название строки не превращает остаток в чистую бухгалтерскую прибыль: реклама, возвраты, налоги и прочие неуказанные затраты ещё могут уменьшить его."
          },
          {
            "q": "Удерживает ли площадка налог с продавца?",
            "a": "Налоги здесь отдельно не считаются. Кто их начисляет, удерживает или перечисляет, зависит от страны, статуса продавца и платформы. Проверьте свои правила; калькулятор не утверждает, что площадка никогда не удерживает налог."
          }
        ],
        "sources": [
          "https://sell.amazon.com/pricing"
        ]
      },
      "en": {
        "path": "/en/business/marketplace-fee-calculator/",
        "h1": "Marketplace fee calculator",
        "longDescription": "This model subtracts two percentage charges and two fixed amounts from the item price: commission, payment processing, shipping and storage. Both rates use the same original price, not the balance after the preceding fee. Payout is the remainder after entered deductions; the profit row also subtracts the supplied product cost but excludes any unentered taxes, ads and other costs. Actual platforms may use different bases, minimum charges and tiers, which must be checked separately.",
        "howToUse": [
          "Enter the price the buyer pays for the item.",
          "Add the platform commission and card processing rates from your tariff.",
          "Add per-parcel shipping and storage if they are deducted separately.",
          "Enter the cost of goods to see profit rather than payout alone.",
          "Check tariff bases, minimum fees and service allocation per item. Storage may be blank; enter other amounts explicitly in one currency."
        ],
        "howItWorks": "Commission and card processing are taken as shares of the item price, while shipping and storage are added as flat amounts. Seller payout = price minus every deduction; profit = payout minus cost of goods. Price margin = (payout−product cost)/price × 100%. Blank storage means zero and omits only that row. Payout or profit can be negative when deductions exceed price; it is not clamped to zero. Each rate uses the form range 0–100%. This is a tool limit, not a tariff rule.",
        "example": "An item at 2000 with 17% commission, 1.5% processing and 55 shipping pays out 1575 and leaves 675 profit at a cost of 900. Price 1000 with all deductions 0 gives payout 1000; blank storage equals 0.",
        "disclaimer": "Two rates on price and entered fixed services. Does not reproduce every platform tariff; profit is after included costs only, without automatic taxes.",
        "faq": [
          {
            "q": "Are the percentages taken from the price or from what is left?",
            "a": "Both rates use the original price here. This is the chosen model, not a rule for every platform. A shipping-inclusive fee base, minimum charge or sequential deduction needs a separate calculation."
          },
          {
            "q": "Why is shipping entered per parcel?",
            "a": "Enter the amount allocated to this sale from your tariff or records. It is fixed when the model price changes, but actual shipping may depend on size, weight, destination and service; equal shipping cost for every item is not assumed."
          },
          {
            "q": "What if storage is not deducted?",
            "a": "Leave the field empty or at zero — the storage row simply will not appear in the result and the calculation stays correct."
          },
          {
            "q": "Why does profit differ from payout?",
            "a": "Payout subtracts the entered platform charges; profit also subtracts product cost. The row label does not establish net accounting profit: ads, returns, taxes and other unentered costs can reduce it further."
          },
          {
            "q": "Is tax included?",
            "a": "Taxes are not calculated separately. Who charges, withholds or remits them depends on country, seller status and platform. Check the applicable rules; the model does not claim platforms never withhold taxes."
          }
        ],
        "sources": [
          "https://sell.amazon.com/pricing"
        ]
      },
      "uk": {
        "path": "/uk/business/komisiya-marketpleysu/",
        "h1": "Калькулятор комісії маркетплейсу",
        "longDescription": "Модель віднімає від ціни товару дві відсоткові ставки й дві фіксовані суми: комісію, еквайринг, логістику та зберігання. Обидві ставки беруться від однієї початкової ціни, не послідовно від залишку. Виплата — залишок після введених утримань; рядок прибутку також віднімає введену собівартість, але не невказані податки, рекламу й інші витрати. Реальні майданчики можуть мати іншу базу, мінімальні збори та тарифні ступені — їх перевіряють окремо.",
        "howToUse": [
          "Введіть ціну товару для покупця.",
          "Введіть комісію площадки й ставку еквайрингу у відсотках.",
          "Додайте логістику й зберігання, віднесені на один продаж; інші платежі потребують окремого обліку.",
          "Введіть собівартість, щоб побачити залишок після саме цих витрат, а не повний чистий прибуток.",
          "Перевірте базу тарифу, мінімальні комісії та розподіл послуг на товар. Зберігання може бути порожнім; решту сум вводьте явно в одній валюті."
        ],
        "howItWorks": "Комісія й еквайринг рахуються частками від ціни товару, а логістика й зберігання додаються до них фіксованими сумами. Виплата дорівнює ціна мінус усі утримання, прибуток — виплата мінус собівартість. Рентабельність до ціни = (виплата−собівартість)/ціна × 100 %. Порожнє зберігання означає 0 і прибирає лише цей рядок. Виплата або прибуток можуть бути від’ємними за витрат понад ціну й не замінюються нулем. Кожна ставка має діапазон інтерфейсу 0–100 %. Це межа інструмента, а не тарифна норма.",
        "example": "Товар за 2000 ₴ за комісії 17 %, еквайрингу 1,5 % і логістики 55 ₴ дає виплату 1575 ₴ і прибуток 675 ₴ за собівартості 900 ₴. За ціни 1000 й усіх утримань 0 виплата 1000; порожнє зберігання дорівнює 0.",
        "disclaimer": "Дві ставки від ціни та введені фіксовані послуги. Не відтворює кожен тариф; прибуток лише після вказаних витрат без автоматичних податків.",
        "faq": [
          {
            "q": "Чому підсумкове утримання більше за комісію?",
            "a": "Сума містить не лише комісію, а й введені еквайринг, логістику та зберігання. Їхня частка залежить від ціни й вашого тарифу; універсального подвоєння комісії немає."
          },
          {
            "q": "Від якої суми береться комісія?",
            "a": "У цій моделі — від початкової ціни для покупця. Перевірте реальну базу майданчика: вона може включати доставку, мати мінімум або ступені. Підвищення ціни змінює процентні утримання, тому виплата не зростає в тій самій відносній пропорції за фіксованих платежів."
          },
          {
            "q": "Чому фіксовані платежі так б’ють по дешевому товару?",
            "a": "Бо вони не залежать від ціни. Логістика 55 ₴ — це 2,75 % від товару за 2000 ₴ і аж 27,5 % від товару за 200 ₴. Дешевий асортимент на площадках часто збитковий саме тому."
          },
          {
            "q": "Чи враховано повернення?",
            "a": "Повернення окремо не моделюються. Вони можуть змінювати дохід, відшкодування комісії та прямі й зворотні логістичні платежі за правилами майданчика. Не припускайте автоматично рівно дві доставки для кожного повернення."
          }
        ],
        "sources": [
          "https://sell.amazon.com/pricing"
        ]
      },
      "de": {
        "path": "/de/business/marktplatz-gebuehren/",
        "h1": "Rechner für Marktplatzgebühren",
        "longDescription": "Das Modell zieht zwei prozentuale und zwei feste Beträge vom Artikelpreis ab: Provision, Zahlungsabwicklung, Versand und Lagerung. Beide Sätze beziehen sich auf denselben ursprünglichen Preis, nicht nacheinander auf einen Rest. Die Auszahlung bleibt nach eingegebenen Abzügen; die Gewinnzeile zieht zusätzlich die eingegebenen Warenkosten ab, nicht unberücksichtigte Steuern, Werbung oder weitere Kosten. Tatsächliche Plattformen können andere Bemessungsgrundlagen, Mindestgebühren und Tarifstufen verwenden.",
        "howToUse": [
          "Trage den Preis ein, den der Käufer für die Ware zahlt.",
          "Ergänze Provision und Zahlungsabwicklung aus deinem Tarif.",
          "Ergänze Versand und Lagerung je Paket, wenn sie gesondert einbehalten werden.",
          "Trage den Wareneinsatz ein, um den Gewinn statt nur der Auszahlung zu sehen.",
          "Prüfe Tarifbasis, Mindestgebühren und Zuordnung der Leistungen je Artikel. Lagerung darf leer sein; übrige Beträge sind in einer Währung einzugeben."
        ],
        "howItWorks": "Provision und Zahlungsabwicklung werden als Anteile des Warenpreises genommen, während Versand und Lagerung als feste Beträge hinzukommen. Auszahlung = Preis minus aller Abzüge; Gewinn = Auszahlung minus Wareneinsatz. Preismarge = (Auszahlung−Warenkosten)/Preis × 100 %. Leere Lagerkosten bedeuten null und entfernen nur diese Zeile. Auszahlung und Gewinn können bei Abzügen über dem Preis negativ sein; sie werden nicht auf null begrenzt. Jeder Satz nutzt den Formularbereich 0–100 %. Dies ist eine Werkzeuggrenze, keine Tarifvorgabe.",
        "example": "Eine Ware zu 40 € mit 17 % Provision, 1,5 % Zahlungsabwicklung und 1,10 € Versand zahlt 31,50 € aus und lässt bei 18 € Wareneinsatz 13,50 € Gewinn. Preis 1000 und alle Abzüge 0 ergeben Auszahlung 1000; leere Lagerkosten bedeuten 0.",
        "disclaimer": "Zwei Sätze auf den Preis und eingegebene feste Leistungen; kein Abbild aller Plattformtarife. Gewinn nur nach enthaltenen Kosten, ohne automatische Steuern.",
        "faq": [
          {
            "q": "Werden die Prozentsätze vom Preis oder vom Rest genommen?",
            "a": "Hier gelten beide Sätze für den ursprünglichen Preis. Das ist das gewählte Modell, keine Regel aller Plattformen. Eine Basis einschließlich Versand, Mindestgebühren oder aufeinanderfolgende Abzüge verlangen eine gesonderte Rechnung."
          },
          {
            "q": "Warum wird der Versand je Paket eingetragen?",
            "a": "Gib den dieser Verkaufseinheit zugeordneten Betrag aus Tarif oder Buchführung ein. Bei Preisänderungen ist er im Modell fest; tatsächlicher Versand kann jedoch von Größe, Gewicht, Ziel und Leistung abhängen. Gleiche Kosten für jeden Artikel werden nicht vorausgesetzt."
          },
          {
            "q": "Was, wenn keine Lagerung einbehalten wird?",
            "a": "Lass das Feld leer oder auf null — die Zeile zur Lagerung erscheint dann schlicht nicht, und die Rechnung bleibt richtig."
          },
          {
            "q": "Warum weicht der Gewinn von der Auszahlung ab?",
            "a": "Die Auszahlung zieht eingegebene Plattformgebühren ab; Gewinn zusätzlich Warenkosten. Der Zeilenname bezeichnet nicht automatisch Nettogewinn: Werbung, Retouren, Steuern und weitere fehlende Kosten können ihn senken."
          },
          {
            "q": "Ist die Steuer enthalten?",
            "a": "Steuern werden nicht getrennt berechnet. Wer sie erhebt, einbehält oder abführt, hängt von Land, Verkäuferstatus und Plattform ab. Prüfe geltende Regeln; das Modell behauptet nicht, dass Plattformen niemals Steuern einbehalten."
          }
        ],
        "sources": [
          "https://sell.amazon.com/pricing"
        ]
      },
      "es": {
        "path": "/es/negocios/comisiones-de-marketplace/",
        "h1": "Calculadora de comisiones de marketplace",
        "longDescription": "El modelo resta del precio dos tipos porcentuales y dos importes fijos: comisión, procesamiento de pago, logística y almacenaje. Ambos porcentajes usan el precio original, no el saldo tras la tarifa anterior. La liquidación es el resto después de deducciones introducidas; la fila de beneficio también resta el coste del producto, pero no impuestos, publicidad u otros costes no incluidos. Las plataformas reales pueden usar bases diferentes, mínimos y tramos que deben comprobarse aparte.",
        "howToUse": [
          "Introduce el precio que paga el comprador por el artículo.",
          "Añade los tipos de comisión de la plataforma y de la pasarela de pago según tu tarifa.",
          "Añade el envío y el almacenaje por paquete si se descuentan aparte.",
          "Introduce el coste de la mercancía para ver el beneficio y no solo la liquidación.",
          "Comprueba bases, mínimos y asignación de servicios al producto. Almacenaje puede quedar vacío; introduce los demás importes en una moneda."
        ],
        "howItWorks": "La comisión y la pasarela de pago se toman como proporciones del precio del artículo, mientras que el envío y el almacenaje se suman como importes fijos. Liquidación al vendedor = precio menos todos los descuentos; beneficio = liquidación menos el coste de la mercancía. Margen sobre precio = (liquidación−coste del producto)/precio × 100%. Almacenaje vacío significa cero y omite solo esa fila. Liquidación o beneficio pueden ser negativos si los costes superan el precio, sin convertirlos en cero. Cada tipo usa el rango del formulario 0–100%. Es un límite de la herramienta, no una norma tarifaria.",
        "example": "Un artículo a 20 con un 17 % de comisión, un 1,5 % de pasarela y 0,55 de envío liquida 15,75 y deja 6,75 de beneficio con un coste de 9. Precio 1000 y deducciones 0 dan liquidación 1000; almacenaje vacío equivale a 0.",
        "disclaimer": "Dos tipos sobre precio y servicios fijos introducidos; no reproduce cualquier tarifa. Beneficio solo tras costes incluidos, sin impuestos automáticos.",
        "faq": [
          {
            "q": "¿Los porcentajes se toman del precio o de lo que queda?",
            "a": "Aquí ambos tipos se aplican al precio original. Es el modelo elegido, no una regla de todas las plataformas. Bases que incluyan envío, tarifas mínimas o deducciones sucesivas requieren otro cálculo."
          },
          {
            "q": "¿Por qué el envío se introduce por paquete?",
            "a": "Introduce el importe asignado a esta venta según tarifa o registros. El modelo lo mantiene fijo al cambiar el precio, pero el envío real puede depender de tamaño, peso, destino y servicio; no supone el mismo coste para todo producto."
          },
          {
            "q": "¿Y si no se descuenta almacenaje?",
            "a": "Deja el campo vacío o en cero: la fila del almacenaje simplemente no aparecerá en el resultado y el cálculo sigue siendo correcto."
          },
          {
            "q": "¿Por qué el beneficio difiere de la liquidación?",
            "a": "La liquidación resta cargos de plataforma introducidos; el beneficio además resta el coste del producto. La etiqueta no acredita beneficio contable neto: publicidad, devoluciones, impuestos y otros costes ausentes pueden reducirlo."
          },
          {
            "q": "¿Están incluidos los impuestos?",
            "a": "Los impuestos no se calculan aparte. Quién los cobra, retiene o ingresa depende del país, condición del vendedor y plataforma. Comprueba las reglas; el modelo no afirma que las plataformas nunca retengan impuestos."
          }
        ],
        "sources": [
          "https://sell.amazon.com/pricing"
        ]
      }
    }
  },
  {
    "id": "inventory-turnover",
    "inputs": {
      "cogs": 100000,
      "mode": "beginEnd",
      "avgInventory": -1,
      "beginInventory": 30000,
      "endInventory": 20000
    },
    "expected": 4,
    "rows": [
      91.3,
      25000
    ],
    "rowCount": 2,
    "defaults": {
      "cogs": 600000,
      "mode": "direct",
      "avgInventory": 150000,
      "beginInventory": 30000,
      "endInventory": 20000
    },
    "defaultExpected": 4.0,
    "blankField": "cogs",
    "domainField": "beginInventory",
    "domainInvalid": -1,
    "primaryUnit": "turns",
    "moneyFields": [
      "cogs",
      "avgInventory",
      "beginInventory",
      "endInventory"
    ],
    "moneyRows": [
      1
    ],
    "fieldNames": [
      "cogs",
      "mode",
      "avgInventory",
      "beginInventory",
      "endInventory"
    ],
    "inactive": [
      "avgInventory"
    ],
    "countFields": [],
    "optionalAmount": null,
    "boundary": {
      "inputs": {
        "cogs": 600000,
        "mode": "direct",
        "avgInventory": 150000,
        "beginInventory": -1,
        "endInventory": -1
      },
      "expected": 4,
      "rows": [
        91.3,
        150000
      ],
      "rowCount": 2,
      "inactive": [
        "beginInventory",
        "endInventory"
      ]
    },
    "pages": {
      "ru": {
        "path": "/ru/business/inventory-turnover/",
        "h1": "Калькулятор оборачиваемости запасов",
        "longDescription": "Годовая оборачиваемость сравнивает себестоимость продаж за год со средним запасом по стоимости. В числителе нужна себестоимость, а не выручка: иначе наценка меняет шкалу сравнения. Показатель не означает, что каждый артикул физически продан одинаковое число раз. Дни запасов оцениваются на условной базе 365 дней; это агрегатное отношение, а не измеренный возраст каждой единицы на складе.",
        "howToUse": [
          "Введите себестоимость продаж за один год в стоимости запасов, не выручку.",
          "Выберите известный средний запас или остатки на начало и конец того же года.",
          "При сезонности среднее по нескольким равномерным срезам надёжнее двух крайних точек.",
          "Сравнивайте одинаковые периоды и базы оценки; дни ниже всегда используют 365.",
          "Не заменяйте годовую себестоимость месячной ради удобства: дни запасов останутся на базе 365 и ответ изменит смысл."
        ],
        "howItWorks": "Оборачиваемость = годовая себестоимость продаж/средний запас. Дни запасов = 365/оборачиваемость. В режиме остатков средний запас = начало/2 + конец/2; оба остатка неотрицательные, средний запас и годовая себестоимость положительные. Поля невыбранного режима не используются. Для другого периода нужна его длительность вместо 365 — этого поля здесь нет, поэтому месячные продажи нельзя подставлять как годовые.",
        "example": "Себестоимость 600 000 ₽ при среднем запасе 150 000 ₽ даёт оборачиваемость 4,00 раз и срок хранения 91,3 дней. Годовая себестоимость 1 и средний запас 1 дают 1 оборот и 365 дней.",
        "disclaimer": "Годовые продажи по себестоимости и условная база 365 дней. Два остатка могут плохо отражать сезонный средний запас.",
        "faq": [
          {
            "q": "Почему в числителе себестоимость, а не выручка?",
            "a": "Потому что запасы учитываются по себестоимости. Разделив на них выручку, вы добавили бы к оборачиваемости всю торговую наценку и получили бы завышенное число."
          },
          {
            "q": "Как считать средний запас?",
            "a": "Проще всего как полусумму остатков на начало и конец периода — этот режим есть в калькуляторе. Точнее выйдет по среднемесячным остаткам, если они у вас есть."
          },
          {
            "q": "Что показывает срок хранения?",
            "a": "Это средний уровень запаса, делённый на среднюю ежедневную себестоимость продаж при годовой базе 365 дней. Он помогает сравнивать периоды, но не показывает фактическую дату продажи конкретного товара или срок его годности."
          },
          {
            "q": "Какая оборачиваемость считается нормальной?",
            "a": "Зависит от отрасли: у продуктов она в разы выше, чем у мебели. Ориентиров калькулятор не приводит — сравнивайте с собственной динамикой."
          }
        ],
        "sources": [
          "https://openstax.org/books/principles-financial-accounting/pages/10-5-examine-the-efficiency-of-inventory-management-using-financial-ratios"
        ]
      },
      "en": {
        "path": "/en/business/inventory-turnover-calculator/",
        "h1": "Inventory turnover calculator",
        "longDescription": "Annual inventory turnover compares a year of cost of goods sold with average inventory at cost. Using revenue would mix valuation bases and inflate the ratio by markup. Turnover does not mean every item physically sold the same number of times. Inventory days use a 365-day convention: an aggregate ratio rather than the measured age of every stocked unit.",
        "howToUse": [
          "Enter one year of COGS using the inventory-cost basis, not revenue.",
          "Choose a known average inventory or opening and closing balances for that same year.",
          "For seasonal stock, an average of several regularly spaced observations can be more representative than two endpoints.",
          "Compare consistent periods and valuation bases; displayed days always use 365.",
          "Do not substitute monthly COGS for annual COGS: inventory days still use 365 and the result would change meaning."
        ],
        "howItWorks": "Turnover = annual COGS/average inventory. Inventory days = 365/turnover. In balance mode, average inventory = opening/2 + closing/2; balances are nonnegative and average inventory and annual COGS are positive. Fields from the other mode are unused. Another period requires its own day count instead of 365; this tool has no such field, so monthly COGS cannot be entered as annual.",
        "example": "A cost of 600,000 against an average inventory of 150,000 gives a turnover of 4.00 times and 91.3 days on hand. Annual COGS 1 and average inventory 1 give 1 turn and 365 days.",
        "disclaimer": "Annual COGS and a 365-day convention. Two endpoint balances may poorly represent seasonal average inventory.",
        "faq": [
          {
            "q": "Why cost of goods sold rather than revenue?",
            "a": "Because inventory is carried at cost. Dividing revenue by it would add the whole trade margin to the turnover and overstate it."
          },
          {
            "q": "How do I work out average inventory?",
            "a": "The simplest way is the half-sum of the opening and closing balances — that mode is built in. Monthly averages are more accurate if you have them."
          },
          {
            "q": "What do days on hand show?",
            "a": "It is average inventory divided by average daily COGS on a 365-day annual basis. It helps compare periods but does not establish an individual item’s actual sale date or shelf life."
          },
          {
            "q": "What turnover is considered normal?",
            "a": "It depends on the sector: groceries turn many times faster than furniture. No benchmark is offered here — compare against your own trend."
          }
        ],
        "sources": [
          "https://openstax.org/books/principles-financial-accounting/pages/10-5-examine-the-efficiency-of-inventory-management-using-financial-ratios"
        ]
      },
      "uk": {
        "path": "/uk/business/oborotnist-zapasiv/",
        "h1": "Калькулятор оборотності запасів",
        "longDescription": "Річна оборотність порівнює собівартість продажів за рік із середнім запасом за вартістю. Підстановка виторгу змішує бази й додає вплив націнки. Показник не означає, що кожен артикул фізично продавався однакову кількість разів. Дні запасів оцінюються на умовній базі 365 днів: це сукупне відношення, а не виміряний вік кожної одиниці на складі.",
        "howToUse": [
          "Введіть собівартість продажів за один рік у вартості запасів, не виторг.",
          "Виберіть відомий середній запас або залишки на початок і кінець того самого року.",
          "За сезонності середнє кількох рівномірних зрізів може краще представляти запас, ніж дві крайні точки.",
          "Порівнюйте однакові періоди й бази оцінки; дні нижче завжди використовують 365.",
          "Не замінюйте річну собівартість місячною: дні залишаться на базі 365, і результат змінить зміст."
        ],
        "howItWorks": "Оборотність = річна собівартість продажів/середній запас. Дні запасів = 365/оборотність. За залишками середній запас = початок/2 + кінець/2; обидва залишки невід’ємні, середній запас і річна собівартість додатні. Поля іншого режиму не використовуються. Для іншого періоду потрібна його тривалість замість 365; такого поля тут немає, тому місячні продажі не можна вводити як річні.",
        "example": "Собівартість 600 000 ₴ за середнього запасу 150 000 ₴ дає оборотність 4,00 рази й строк зберігання 91,3 дня. Це сукупне відношення, не фактичний вік кожного товару. Річна собівартість 1 та середній запас 1 дають 1 оборот і 365 днів.",
        "disclaimer": "Річні продажі за собівартістю й умовна база 365 днів. Два залишки можуть погано представляти сезонний середній запас.",
        "faq": [
          {
            "q": "Чому в чисельнику собівартість, а не виторг?",
            "a": "Бо запас теж обліковується за собівартістю. Підстановка виторгу змішує дві шкали й завищує оборотність рівно на націнку — за націнки 50 % показник вийде в півтора раза кращим, ніж є."
          },
          {
            "q": "Що таке строк зберігання?",
            "a": "Це середній запас, поділений на середню денну собівартість за річної бази 365 днів. Для 600000 і 150000 результат 91,25 дня, на екрані 91,3. Він не встановлює фактичний строк лежання кожного товару."
          },
          {
            "q": "Висока оборотність — це завжди добре?",
            "a": "Не обов’язково. Високе відношення може супроводжуватися нестачею запасу, але саме по собі цього не доводить. Для оцінки потрібні сервісний рівень, збої постачання й попит; універсальної норми для всіх товарів немає."
          },
          {
            "q": "Як рахувати середній запас?",
            "a": "Найпростіше — півсума на початок і кінець періоду. Точніше — середнє за місячними зрізами: для сезонного товару різниця між цими способами велика."
          }
        ],
        "sources": [
          "https://openstax.org/books/principles-financial-accounting/pages/10-5-examine-the-efficiency-of-inventory-management-using-financial-ratios"
        ]
      },
      "de": {
        "path": "/de/business/lagerumschlag-rechner/",
        "h1": "Rechner für den Lagerumschlag",
        "longDescription": "Jährlicher Lagerumschlag vergleicht den Wareneinsatz eines Jahres mit dem durchschnittlichen Lagerwert zu Kosten. Umsatz statt Wareneinsatz würde Bewertungsgrundlagen mischen und den Aufschlag einrechnen. Nicht jeder Artikel muss sich tatsächlich gleich oft verkauft haben. Bestandstage verwenden die Konvention von 365 Tagen; sie sind ein Gesamtverhältnis, kein gemessenes Alter jedes Lagerstücks.",
        "howToUse": [
          "Gib den Wareneinsatz eines Jahres auf derselben Kostenbasis wie den Bestand ein, nicht Umsatz.",
          "Wähle bekannten Durchschnittsbestand oder Anfangs- und Endbestand desselben Jahres.",
          "Bei Saisonbeständen kann ein Durchschnitt regelmäßig verteilter Messungen aussagekräftiger als zwei Randwerte sein.",
          "Vergleiche gleiche Zeiträume und Bewertungsgrundlagen; die Tage verwenden immer 365.",
          "Ersetze Jahreswareneinsatz nicht durch einen Monatswert: Bestandstage bleiben auf 365 bezogen und erhalten eine andere Bedeutung."
        ],
        "howItWorks": "Umschlag = jährlicher Wareneinsatz/Durchschnittsbestand. Bestandstage = 365/Umschlag. Im Bestandsmodus gilt Durchschnitt = Anfang/2 + Ende/2; beide Bestände sind nicht negativ, Durchschnitt und Jahreswareneinsatz positiv. Felder des anderen Modus bleiben unbenutzt. Ein anderer Zeitraum braucht seine eigene Tageszahl statt 365; dieses Feld fehlt hier, daher darf Monatswareneinsatz nicht als Jahreswert eingegeben werden.",
        "example": "Ein Wareneinsatz von 60 000 € bei einem durchschnittlichen Bestand von 15 000 € ergibt eine Umschlagshäufigkeit von 4,00 und eine Lagerdauer von 91,3 Tagen. Jahreswareneinsatz 1 und Durchschnittsbestand 1 ergeben 1 Umschlag und 365 Tage.",
        "disclaimer": "Jahreswareneinsatz und die Konvention von 365 Tagen; zwei Randbestände können Saisonbestände schlecht repräsentieren.",
        "faq": [
          {
            "q": "Warum der Wareneinsatz und nicht der Umsatz?",
            "a": "Weil der Bestand zu Einkaufspreisen geführt wird. Den Umsatz durch ihn zu teilen fügte dem Umschlag die ganze Handelsspanne hinzu und setzte ihn zu hoch an."
          },
          {
            "q": "Wie ermittle ich den durchschnittlichen Bestand?",
            "a": "Am einfachsten als halbe Summe aus Anfangs- und Endbestand — dieser Modus ist eingebaut. Monatsdurchschnitte sind genauer, wenn du sie hast."
          },
          {
            "q": "Was zeigt die Lagerdauer?",
            "a": "Durchschnittsbestand geteilt durch durchschnittlichen täglichen Wareneinsatz auf einer Jahresbasis von 365 Tagen. Dies hilft beim Periodenvergleich, bestimmt aber weder Verkaufsdatum noch Haltbarkeit eines einzelnen Artikels."
          },
          {
            "q": "Welche Umschlagshäufigkeit gilt als normal?",
            "a": "Das hängt von der Branche ab: Lebensmittel drehen sich viel schneller als Möbel. Ein Richtwert wird hier nicht genannt — vergleiche mit deinem eigenen Verlauf."
          }
        ],
        "sources": [
          "https://openstax.org/books/principles-financial-accounting/pages/10-5-examine-the-efficiency-of-inventory-management-using-financial-ratios"
        ]
      },
      "es": {
        "path": "/es/negocios/rotacion-de-existencias/",
        "h1": "Calculadora de rotación de existencias",
        "longDescription": "La rotación anual compara el coste de ventas de un año con existencias medias valoradas a coste. Usar ingresos mezclaría bases e inflaría el cociente por el margen comercial. No significa que cada artículo se vendiera físicamente el mismo número de veces. Los días de inventario usan la convención de 365 días: un cociente agregado, no la edad medida de cada unidad.",
        "howToUse": [
          "Introduce coste de ventas de un año con la misma base de coste del inventario, no ingresos.",
          "Elige existencias medias conocidas o saldos inicial y final de ese año.",
          "Con estacionalidad, varias observaciones repartidas regularmente pueden representar mejor la media que dos extremos.",
          "Compara periodos y valoraciones coherentes; los días mostrados siempre usan 365.",
          "No sustituyas coste anual por mensual: los días siguen usando 365 y el resultado cambiaría de significado."
        ],
        "howItWorks": "Rotación = coste anual de ventas/existencias medias. Días de inventario = 365/rotación. En modo saldos, media = inicial/2 + final/2; ambos saldos son no negativos y media y coste anual son positivos. Se ignoran campos del otro modo. Otro periodo exige sus propios días en lugar de 365; esta herramienta no incluye ese campo, por lo que no debe introducirse coste mensual como anual.",
        "example": "Un coste de 60 000 frente a unas existencias medias de 15 000 dan una rotación de 4,00 veces y 91,3 días de cobertura. Coste anual 1 y existencias medias 1 dan 1 rotación y 365 días.",
        "disclaimer": "Coste anual de ventas y convención de 365 días; dos saldos extremos pueden representar mal la media estacional.",
        "faq": [
          {
            "q": "¿Por qué el coste de las mercancías vendidas y no los ingresos?",
            "a": "Porque las existencias se valoran a coste. Dividir los ingresos entre ellas añadiría todo el margen comercial a la rotación y la exageraría."
          },
          {
            "q": "¿Cómo calculo las existencias medias?",
            "a": "Lo más sencillo es la semisuma de los saldos inicial y final: ese modo está incorporado. Las medias mensuales son más exactas si dispones de ellas."
          },
          {
            "q": "¿Qué indican los días de cobertura?",
            "a": "Son existencias medias divididas por coste medio diario de ventas, usando 365 días al año. Permite comparar periodos, pero no determina la fecha real de venta ni la caducidad de un artículo."
          },
          {
            "q": "¿Qué rotación se considera normal?",
            "a": "Depende del sector: la alimentación rota mucho más rápido que el mueble. Aquí no se ofrece ninguna referencia: compárate con tu propia tendencia."
          }
        ],
        "sources": [
          "https://openstax.org/books/principles-financial-accounting/pages/10-5-examine-the-efficiency-of-inventory-management-using-financial-ratios"
        ]
      }
    }
  },
  {
    "id": "profit",
    "inputs": {
      "revenue": 100,
      "cost": 200
    },
    "expected": -100,
    "rows": [
      -100,
      -50,
      100,
      200
    ],
    "rowCount": 4,
    "defaults": {
      "revenue": 480000,
      "cost": 315000
    },
    "defaultExpected": 165000.0,
    "blankField": "revenue",
    "domainField": "revenue",
    "domainInvalid": 0,
    "primaryUnit": "money",
    "moneyFields": [
      "revenue",
      "cost"
    ],
    "moneyRows": [
      2,
      3
    ],
    "fieldNames": [
      "revenue",
      "cost"
    ],
    "inactive": [],
    "countFields": [],
    "optionalAmount": null,
    "boundary": {
      "inputs": {
        "revenue": 100,
        "cost": 0
      },
      "expected": 100,
      "rows": [
        100,
        100,
        0
      ],
      "rowCount": 3,
      "inactive": []
    },
    "pages": {
      "ru": {
        "path": "/ru/business/profit-margin-markup/",
        "h1": "Калькулятор прибыли, маржи и наценки",
        "longDescription": "Прибыль — вычитание, которое сделает кто угодно; расходятся стороны на двух процентах рядом с ней. Маржа делит прибыль на выручку, наценка — ту же прибыль на затраты, и знаменатель составляет всю разницу между ними. Наценка в сто процентов — это маржа пятьдесят, и оба числа описывают ровно одну и ту же сделку. При затратах 100 наценка 40% даёт цену 140, а маржа 40% требует цены 100/0,6≈166,67. Второй вариант выше первого в 25/21≈1,1905 раза. Поэтому процент следует называть вместе с его базой. Какая именно прибыль получена, зависит от состава затрат: только себестоимость даёт валовой результат, а чистый результат требует также остальных относимых расходов и налогов. Калькулятор не дополняет пропущенные расходы автоматически.",
        "howToUse": [
          "Введите выручку за период или по сделке.",
          "Введите затраты, относящиеся к этой же выручке.",
          "Читайте маржу, когда речь о выручке, и наценку, когда речь о затратах.",
          "Обе величины берите в одной валюте и одинаково — до налогов или после.",
          "Определите состав затрат до сравнения маржи: валовой результат и остаток после всех расходов нельзя сопоставлять как одну метрику."
        ],
        "howItWorks": "Прибыль = выручка − затраты. Маржа = прибыль ÷ выручка × 100. Наценка = прибыль ÷ затраты × 100. При нулевых затратах наценка не определена и не показывается.",
        "example": "Выручка 480 000 ₽ при затратах 315 000 ₽ даёт 165 000 ₽ прибыли, маржу 34,38 % и наценку 52,38 %. Выручка 100 при затратах 0 даёт прибыль 100 и маржу 100 %; наценка не показана.",
        "disclaimer": "Положительная выручка и выбранные неотрицательные затраты в одной валюте. Результат не становится чистой прибылью без полного состава расходов.",
        "faq": [
          {
            "q": "Что больше — маржа или наценка?",
            "a": "При положительных выручке и затратах наценка не ниже маржи: при прибыли она выше, при нулевой прибыли оба показателя 0%, а при убытке подписанный процент наценки также выше. Выручка 100 и затраты 200 дают маржу−100% и наценку−50%; по модулю маржа больше. При нулевых затратах наценка не выводится."
          },
          {
            "q": "Как перевести наценку в маржу?",
            "a": "Маржа = наценка ÷ (100 + наценка) × 100. Наценка 50 % — это маржа 33,33 %, а наценка 100 % — маржа 50 %."
          },
          {
            "q": "Может ли маржа превысить сто процентов?",
            "a": "Нет. Прибыль не бывает больше выручки, из которой получена, поэтому маржа упирается в сто — это означало бы нулевые затраты. У наценки такого потолка нет."
          },
          {
            "q": "Какие затраты включать в расчёт?",
            "a": "Тот уровень, который вы измеряете: только себестоимость товара для валовой маржи, всё вместе с зарплатами и арендой для чистой. Смешение уровней между периодами и делает динамику бессмысленной."
          }
        ],
        "sources": [
          "https://openstax.org/books/principles-marketing/pages/18-3-retailing-strategy-decisions"
        ]
      },
      "en": {
        "path": "/en/business/profit-margin-markup-calculator/",
        "h1": "Profit, margin and markup calculator",
        "longDescription": "Profit is a subtraction anyone can do; the two percentages beside it are where deals go wrong. Margin divides profit by revenue, markup divides the same profit by cost, and the denominator is the entire difference between them. A markup of one hundred per cent is a margin of fifty, and both describe exactly the same transaction. At a cost of 100, a 40% markup gives a price of 140, while a 40% margin requires 100/0.6≈166.67. The second price is 25/21≈1.1905 times the first. Name the percentage together with its base. The profit category depends on cost scope: product costs alone give a gross result, while a net result also needs the other applicable expenses and taxes. Missing costs are not added automatically.",
        "howToUse": [
          "Enter the revenue for the period or the deal.",
          "Enter the costs that belong to that same revenue.",
          "Read margin when you speak about revenue, markup when you speak about cost.",
          "Keep both figures in the same currency and before or after tax consistently.",
          "Define cost scope before comparing margins: gross results and results after all expenses are not the same metric."
        ],
        "howItWorks": "Profit = revenue − costs. Margin = profit ÷ revenue × 100. Markup = profit ÷ costs × 100. With costs of zero there is nothing to divide by, so the markup row is omitted.",
        "example": "Revenue of 480,000 against costs of 315,000 gives 165,000 profit, a 34.38% margin and a 52.38% markup. Revenue 100 and cost 0 give profit 100 and margin 100%; markup is omitted.",
        "disclaimer": "Positive revenue and chosen nonnegative costs in one currency. The result is not net profit unless the relevant full cost scope is included.",
        "faq": [
          {
            "q": "Which is bigger, margin or markup?",
            "a": "For positive revenue and cost, signed markup is at least signed margin: it is higher with a profit, both are 0% at zero profit, and signed markup remains higher for a loss. Revenue 100 and cost 200 give margin−100% and markup−50%; the margin has the greater absolute magnitude. Zero cost omits markup."
          },
          {
            "q": "How do I turn a markup into a margin?",
            "a": "Margin = markup ÷ (100 + markup) × 100. A markup of 50% is a margin of 33.33%, and a markup of 100% is a margin of 50%."
          },
          {
            "q": "Can the margin exceed one hundred per cent?",
            "a": "No. Profit cannot be larger than the revenue it came from, so the margin tops out at one hundred, which would mean costs of zero. Markup has no such ceiling."
          },
          {
            "q": "Which costs should I include?",
            "a": "Whichever level you are measuring: only the cost of goods for gross margin, everything including salaries and rent for net margin. Mixing the two levels between periods is what makes trends meaningless."
          }
        ],
        "sources": [
          "https://openstax.org/books/principles-marketing/pages/18-3-retailing-strategy-decisions"
        ]
      },
      "uk": {
        "path": "/uk/business/prybutok-marzha/",
        "h1": "Калькулятор прибутку, маржі та націнки",
        "longDescription": "Прибуток — це віднімання, яке зробить будь-хто; розходяться сторони на двох відсотках поруч із ним. Маржа ділить прибуток на виторг, націнка — на витрати, і це різні числа: 34,375 % маржі відповідають приблизно 52,38 % націнки. Плутанина між ними — найчастіша причина того, що узгоджена знижка з’їдає весь заробіток. Вид прибутку залежить від складу витрат: лише собівартість дає валовий результат, чистий потребує й інших відповідних витрат та податків. Пропущені витрати автоматично не додаються.",
        "howToUse": [
          "Введіть виторг за період.",
          "Введіть витрати за той самий період.",
          "Прочитайте прибуток, маржу й націнку — це три різні числа.",
          "Визначте склад витрат до порівняння маржі: валовий результат і залишок після всіх витрат є різними метриками."
        ],
        "howItWorks": "Прибуток дорівнює виторг − витрати. Маржа рахується як прибуток ÷ виторг × 100, націнка — як прибуток ÷ витрати × 100. За нульових витрат націнка не визначена: ділення на нуль.",
        "example": "Виторг 480 000 ₴ за витрат 315 000 ₴ дає 165 000 ₴ прибутку, маржу 34,38 % і націнку 52,38 %. Одне й те саме віднімання, два різні відсотки. Виторг 100 за витрат 0 дає прибуток 100 і маржу 100 %; націнка не показується.",
        "disclaimer": "Додатний виторг і вибрані невід’ємні витрати в одній валюті. Результат не стає чистим прибутком без повного складу витрат.",
        "faq": [
          {
            "q": "Чим маржа відрізняється від націнки?",
            "a": "За додатних виторгу й витрат націнка не менша за маржу: за прибутку вона більша, за нульового прибутку обидва показники 0%, і за збитку знаковий відсоток націнки також більший. Виторг 100 та витрати 200 дають маржу−100% і націнку−50%; модуль маржі більший. За нульових витрат націнка не показується."
          },
          {
            "q": "Як перевести націнку в маржу?",
            "a": "Маржа = націнка ÷ (100 + націнка) × 100. Націнка 50 % відповідає маржі 33,3 %, націнка 100 % — маржі 50 %."
          },
          {
            "q": "Які витрати входять у розрахунок прибутку?",
            "a": "Ті, що стосуються цього самого виторгу за той самий період. Змішувати собівартість проданого з витратами на закупівлю складу не можна — вийде число, яке нічого не описує."
          },
          {
            "q": "Чому за нульових витрат націнка не визначена?",
            "a": "Бо вона ділить прибуток на витрати, і ділення на нуль сенсу не має. Маржа при цьому дорівнює 100 %, і це коректна відповідь."
          }
        ],
        "sources": [
          "https://openstax.org/books/principles-marketing/pages/18-3-retailing-strategy-decisions"
        ]
      },
      "de": {
        "path": "/de/business/gewinn-marge-aufschlag/",
        "h1": "Rechner für Gewinn, Marge und Aufschlag",
        "longDescription": "Der Gewinn ist eine Subtraktion, die jeder ausführen kann; bei den beiden Prozentwerten daneben gehen Geschäfte schief. Die Marge teilt den Gewinn durch den Umsatz, der Aufschlag teilt denselben Gewinn durch die Kosten, und der Nenner ist der ganze Unterschied zwischen ihnen. Ein Aufschlag von hundert Prozent ist eine Marge von fünfzig, und beides beschreibt genau dasselbe Geschäft. Bei Kosten von 100 ergibt ein Aufschlag von 40% den Preis 140; eine Marge von 40% verlangt 100/0,6≈166,67. Der zweite Preis beträgt 25/21≈1,1905 des ersten. Nenne deshalb den Prozentsatz zusammen mit seiner Bezugsgröße. Die Gewinnart hängt von der Kostenbasis ab: Warenkosten allein liefern einen Bruttobetrag; Nettogewinn erfordert auch weitere zugehörige Aufwendungen und Steuern. Fehlende Kosten werden nicht automatisch ergänzt.",
        "howToUse": [
          "Trage den Umsatz des Zeitraums oder des Geschäfts ein.",
          "Trage die Kosten ein, die zu diesem Umsatz gehören.",
          "Lies die Marge ab, wenn du über den Umsatz sprichst, und den Aufschlag, wenn du über die Kosten sprichst.",
          "Halte beide Zahlen in derselben Währung und einheitlich vor oder nach Steuern.",
          "Bestimme die Kostenbasis vor dem Margenvergleich; Bruttobeträge und Ergebnisse nach allen Kosten sind verschiedene Kennzahlen."
        ],
        "howItWorks": "Gewinn = Umsatz − Kosten. Marge = Gewinn ÷ Umsatz × 100. Aufschlag = Gewinn ÷ Kosten × 100. Bei Kosten von null gibt es nichts, wodurch geteilt werden könnte, die Zeile mit dem Aufschlag entfällt deshalb.",
        "example": "Ein Umsatz von 48 000 € gegen Kosten von 31 500 € ergibt 16 500 € Gewinn, eine Marge von 34,38 % und einen Aufschlag von 52,38 %. Umsatz 100 und Kosten 0 ergeben Gewinn 100 und Marge 100 %; Aufschlag entfällt.",
        "disclaimer": "Positiver Umsatz und gewählte nicht negative Kosten in einer Währung; Nettogewinn nur bei vollständiger zugehöriger Kostenbasis.",
        "faq": [
          {
            "q": "Was ist größer, Marge oder Aufschlag?",
            "a": "Bei positivem Umsatz und positiven Kosten ist der Aufschlag mindestens so groß wie die Marge: bei Gewinn größer, bei null Gewinn beide 0%, und bei Verlust bleibt der vorzeichenbehaftete Aufschlag größer. Umsatz 100 und Kosten 200 ergeben Marge−100% und Aufschlag−50%; der Betrag der Marge ist größer. Bei Nullkosten entfällt der Aufschlag."
          },
          {
            "q": "Wie rechne ich einen Aufschlag in eine Marge um?",
            "a": "Marge = Aufschlag ÷ (100 + Aufschlag) × 100. Ein Aufschlag von 50 % ist eine Marge von 33,33 %, und ein Aufschlag von 100 % ist eine Marge von 50 %."
          },
          {
            "q": "Kann die Marge über hundert Prozent liegen?",
            "a": "Nein. Der Gewinn kann nicht größer sein als der Umsatz, aus dem er stammt, die Marge endet also bei hundert, was Kosten von null bedeutete. Der Aufschlag hat keine solche Obergrenze."
          },
          {
            "q": "Welche Kosten soll ich einbeziehen?",
            "a": "Die der Ebene, die du misst: nur den Wareneinsatz für die Rohmarge, alles einschließlich Gehältern und Miete für die Nettomarge. Die beiden Ebenen zwischen Zeiträumen zu mischen ist es, was Verläufe sinnlos macht."
          }
        ],
        "sources": [
          "https://openstax.org/books/principles-marketing/pages/18-3-retailing-strategy-decisions"
        ]
      },
      "es": {
        "path": "/es/negocios/beneficio-margen-y-marcado/",
        "h1": "Calculadora de beneficio, margen y marcado",
        "longDescription": "El beneficio es una resta que sabe hacer cualquiera; los dos porcentajes que lo acompañan son donde se tuercen las operaciones. El margen divide el beneficio entre los ingresos, el recargo divide ese mismo beneficio entre el coste, y el denominador es toda la diferencia entre ambos. Un recargo del cien por cien es un margen del cincuenta, y los dos describen exactamente la misma transacción. Con un coste de 100, un recargo del 40% da un precio de 140; un margen del 40% exige 100/0,6≈166,67. El segundo precio es 25/21≈1,1905 veces el primero. Indica siempre la base junto al porcentaje. La categoría de beneficio depende de los costes: solo coste del producto da un resultado bruto; un resultado neto necesita otros gastos e impuestos aplicables. No se añaden automáticamente costes ausentes.",
        "howToUse": [
          "Introduce los ingresos del periodo o de la operación.",
          "Introduce los costes que corresponden a esos mismos ingresos.",
          "Lee el margen cuando hables de ingresos y el marcado cuando hables de coste.",
          "Mantén ambas cifras en la misma moneda y con o sin impuestos de forma coherente.",
          "Define costes antes de comparar márgenes: resultado bruto y resultado tras todos los gastos son métricas distintas."
        ],
        "howItWorks": "Beneficio = ingresos − costes. Margen = beneficio ÷ ingresos × 100. Marcado = beneficio ÷ costes × 100. Con costes de cero no hay entre qué dividir, así que la fila del recargo se omite.",
        "example": "Unos ingresos de 48 000 frente a unos costes de 31 500 dan 16 500 de beneficio, un margen del 34,38 % y un recargo del 52,38 %. Ingresos 100 y coste 0 dan beneficio 100 y margen 100%; se omite el recargo.",
        "disclaimer": "Ingresos positivos y costes no negativos elegidos en una moneda; no es beneficio neto sin incluir todos los costes aplicables.",
        "faq": [
          {
            "q": "¿Qué es mayor, el margen o el recargo?",
            "a": "Con ingresos y costes positivos, el recargo con signo es al menos igual al margen: es mayor con beneficio, ambos son 0% sin beneficio y el recargo sigue siendo mayor con pérdidas. Ingresos 100 y coste 200 dan margen−100% y recargo−50%; el valor absoluto del margen es mayor. Con coste cero se omite el recargo."
          },
          {
            "q": "¿Cómo convierto un recargo en margen?",
            "a": "Margen = recargo ÷ (100 + recargo) × 100. Un recargo del 50 % es un margen del 33,33 %, y un recargo del 100 %, un margen del 50 %."
          },
          {
            "q": "¿El margen puede pasar del cien por cien?",
            "a": "No. El beneficio no puede ser mayor que los ingresos de los que salió, así que el margen se detiene en cien, lo que significaría costes de cero. El recargo no tiene ese techo."
          },
          {
            "q": "¿Qué costes debo incluir?",
            "a": "Los del nivel que estés midiendo: solo el coste de la mercancía para el margen bruto, y todo, sueldos y alquiler incluidos, para el margen neto. Mezclar los dos niveles entre periodos es lo que deja las tendencias sin sentido."
          }
        ],
        "sources": [
          "https://openstax.org/books/principles-marketing/pages/18-3-retailing-strategy-decisions"
        ]
      }
    }
  },
  {
    "id": "timesheet-week",
    "inputs": {
      "lines": "22:00,06:00,30",
      "rate": 600,
      "normal": 5
    },
    "expected": 7.5,
    "rows": [
      1,
      7,
      2.5,
      5250
    ],
    "rowCount": 4,
    "defaults": {
      "lines": "09:00,18:00,60\n09:00,18:00,60\n09:00,17:30,45\n10:00,19:00,60\n09:00,14:00,0",
      "rate": 500,
      "normal": 40
    },
    "defaultExpected": 36.75,
    "blankField": "rate",
    "domainField": "lines",
    "domainInvalid": "24:00,06:00,0",
    "primaryUnit": "hours",
    "moneyFields": [
      "rate"
    ],
    "moneyRows": [
      3
    ],
    "fieldNames": [
      "lines",
      "rate",
      "normal"
    ],
    "inactive": [],
    "countFields": [],
    "optionalAmount": null,
    "boundary": {
      "inputs": {
        "lines": "09:00,09:00,0",
        "rate": 600,
        "normal": 40
      },
      "expected": 0,
      "rows": [
        1,
        0,
        0,
        0
      ],
      "rowCount": 4,
      "inactive": []
    },
    "pages": {
      "ru": {
        "path": "/ru/business/tabel-rabochego-vremeni/",
        "h1": "Калькулятор табеля рабочего времени",
        "longDescription": "Табель считают не по одной смене, а по неделе целиком, и именно там теряются минуты: где-то перерыв сорок пять минут вместо часа, где-то смена ушла за полночь, где-то день короткий. Здесь каждая смена задаётся строкой, а итог собирается в целых минутах и переводится в часы один раз — поэтому сумма сходится с тем, что стоит в бумажном табеле. Ночная смена вида 22:00,06:00 понимается как переход через полночь, а не как ошибка. Это учёт показаний часов без дат и часовых поясов. Оплата использует введённую норму и фиксированный коэффициент 1,5 для всех часов сверх неё; модель не определяет законные сверхурочные, ночные доплаты или правила конкретного договора.",
        "howToUse": [
          "Одна смена — одна строка: начало, конец и перерыв в минутах через запятую.",
          "Перерыв можно не указывать: строка «09:00,18:00» считается сменой без перерыва.",
          "Ночная смена задаётся как есть: 22:00,06:00 понимается как переход через полночь.",
          "Всё, что сверх нормы часов, идёт в сверхурочные с коэффициентом полтора.",
          "Вводите только вычитаемые перерывы целыми минутами. Для оплаты по другим коэффициентам используйте часы из результата и свой отдельный расчёт."
        ],
        "howItWorks": "Одна строка содержит ровно начало,конец или начало,конец,перерыв. Время задаётся HH:MM, перерыв — целые неотрицательные минуты, пустой перерыв равен 0. Если конец меньше начала, добавляются 1440 минут; одинаковые время начала и конца дают 0, не 24 часа. Сумма ведётся в целых минутах. Оплата = min(часы,норма)×ставка + max(часы−норма,0)×ставка×1,5. Часы нормы могут быть дробными; переходы летнего времени и смены дольше суток не моделируются.",
        "example": "Пять смен с перерывами дают 36,75 часа и 18 375 ₽ при ставке 500 ₽ в час. Строка 22:00,06:00,30 даёт 7,5 часа; одинаковые начало и конец без перерыва дают 0 часов.",
        "disclaimer": "Часы по показаниям без дат и DST; фиксированная доплата 1,5 сверх введённой нормы. Не юридический расчёт обязательной зарплаты.",
        "faq": [
          {
            "q": "Почему считается в минутах, а не сразу в часах?",
            "a": "Смена 8 часов 45 минут — это 8,75 часа, а смена 7 часов 20 минут — 7,333…. Складывать такие дроби и округлять каждую по дороге значит потерять минуты; в целых минутах итог сходится точно."
          },
          {
            "q": "Как задать ночную смену?",
            "a": "Обычной строкой: 22:00,06:00. Если конец меньше начала, смена считается перешедшей через полночь, и к концу добавляются сутки."
          },
          {
            "q": "Откуда берётся коэффициент полтора?",
            "a": "Он фиксирован в этой учебной модели и применяется ко всем часам сверх введённой нормы. Это не расчёт обязательной выплаты по законодательству: правила могут различать дни, типы часов, ставки и исключения. Если ваш порядок другой, используйте расчёт часов, а деньги пересчитайте отдельно."
          },
          {
            "q": "Что если перерыв длиннее смены?",
            "a": "Такая строка отклоняется. Отрицательное рабочее время означает опечатку во времени или в перерыве, и молча превращать его в ноль было бы хуже, чем сказать об этом."
          }
        ],
        "sources": [
          "https://www.dol.gov/agencies/whd/fact-sheets/23-flsa-overtime-pay"
        ]
      },
      "en": {
        "path": "/en/business/weekly-timesheet/",
        "h1": "Weekly timesheet calculator",
        "longDescription": "A timesheet is settled for the whole week rather than a single shift, and that is exactly where minutes go missing: a forty-five minute break here, a shift running past midnight there, a short day at the end. Each shift is one line, the total is accumulated in whole minutes and converted to hours only once — so the sum matches the paper sheet. A line such as 22:00,06:00 is understood as crossing midnight, not as an error. This records clock readings without dates or time zones. Pay uses the entered standard hours and a fixed 1.5 multiplier for every hour above them; it does not determine legal overtime, night premiums or contract-specific rules.",
        "howToUse": [
          "One shift per line: start, end and break in minutes separated by commas.",
          "The break may be omitted: a line of 09:00,18:00 counts as a shift with no break.",
          "A night shift is written as it is: 22:00,06:00 is read as crossing midnight.",
          "Anything above the standard hours goes to overtime at one and a half times the rate.",
          "Enter only breaks to be excluded, in whole minutes. For other pay multipliers, use the resulting hours and a separate payroll calculation."
        ],
        "howItWorks": "Each row has exactly start,end or start,end,break. Times use HH:MM; breaks are whole nonnegative minutes, with blank meaning 0. An end earlier than the start adds 1440 minutes; equal start and end mean 0 rather than 24 hours. Minutes are summed exactly. Pay = min(hours,standard)×rate + max(hours−standard,0)×rate×1.5. Standard hours may be fractional. Daylight-saving changes and shifts longer than a day are not modelled.",
        "example": "Five shifts with breaks add up to 36.75 hours and 18,375 at a rate of 500 per hour. Row 22:00,06:00,30 gives 7.5 hours; equal start and end with no break give 0 hours.",
        "disclaimer": "Clock hours without dates or DST; fixed 1.5 pay above the entered standard. Not a legal calculation of required wages.",
        "faq": [
          {
            "q": "Why count in minutes rather than hours?",
            "a": "A shift of 8 hours 45 minutes is 8.75 hours, one of 7 hours 20 minutes is 7.333…. Adding such fractions and rounding each on the way loses minutes; in whole minutes the total is exact."
          },
          {
            "q": "How do I enter a night shift?",
            "a": "As an ordinary line: 22:00,06:00. When the end is earlier than the start, the shift is treated as crossing midnight and a day is added to the end."
          },
          {
            "q": "Where does the 1.5 multiplier come from?",
            "a": "It is fixed in this teaching model for all hours above your entered standard. It is not a statutory payroll calculation: rules may distinguish days, types of hours, rates and exceptions. Use the hour totals and calculate pay separately if your rules differ."
          },
          {
            "q": "What if the break is longer than the shift?",
            "a": "That line is rejected. Negative working time means a typo in the times or in the break, and silently turning it into zero would be worse than saying so."
          }
        ],
        "sources": [
          "https://www.dol.gov/agencies/whd/fact-sheets/23-flsa-overtime-pay"
        ]
      },
      "uk": {
        "path": "/uk/business/tabel-robochogo-chasu/",
        "h1": "Калькулятор табеля робочого часу",
        "longDescription": "Табель рахують не за однією зміною, а за тижнем цілком, і саме там губляться хвилини: десь перерва сорок п’ять хвилин замість години, десь зміна перейшла через північ. За п’ять днів набігає розбіжність, яку помічають уже під час нарахування. Це облік показів годинника без дат і часових поясів. Оплата використовує введену норму та фіксований коефіцієнт 1,5 для всіх годин понад неї; модель не визначає законні надурочні, нічні доплати або правила конкретного договору.",
        "howToUse": [
          "Введіть початок і кінець кожної зміни.",
          "Введіть тривалість перерви в хвилинах.",
          "Задайте ставку й норму годин, понад яку йдуть надурочні.",
          "Вводьте лише перерви, які треба відняти, цілими хвилинами. Для інших коефіцієнтів оплати використайте підсумкові години й окремий розрахунок."
        ],
        "howItWorks": "Рядок має рівно початок,кінець або початок,кінець,перерва. Час у форматі HH:MM, перерва — цілі невід’ємні хвилини, порожня дорівнює 0. Якщо кінець раніше початку, додаються 1440 хвилин; однакові часи означають 0, не 24 години. Хвилини підсумовуються точно. Оплата = min(години,норма)×ставка + max(години−норма,0)×ставка×1,5. Норма може бути дробовою. Перехід на літній час і зміни довші за добу не моделюються.",
        "example": "П’ять змін із перервами дають 36,75 години і 18 375 ₴ за ставки 500 ₴ на годину. Чверть години різниці в перервах щодня — це вже понад годину за тиждень. Рядок 22:00,06:00,30 дає 7,5 години; однакові початок і кінець без перерви дають 0 годин.",
        "disclaimer": "Години за показами без дат і DST; фіксована доплата 1,5 понад введену норму. Не юридичний розрахунок обов’язкової зарплати.",
        "faq": [
          {
            "q": "Як рахується зміна через північ?",
            "a": "До кінця додається доба. Зміна з 22:00 до 06:00 дає вісім годин, а не мінус шістнадцять — розрахунок розпізнає перехід автоматично."
          },
          {
            "q": "Чи входить перерва в робочий час?",
            "a": "Указаний період перерви віднімається зі зміни незалежно від її правового статусу. Вводьте лише час, який за вашим правилом треба виключити. Оплачувану коротку перерву не віднімайте автоматично; калькулятор цього не вирішує."
          },
          {
            "q": "Як рахуються надурочні?",
            "a": "У цьому калькуляторі всі години понад введену норму оплачуються за фіксованим коефіцієнтом 1,5. Коефіцієнт не вводиться окремо. Якщо законодавство або договір передбачає інші ставки чи винятки, використайте підсумок годин, а оплату перерахуйте окремо."
          },
          {
            "q": "Чому підсумок за тиждень розходиться з ручним підрахунком?",
            "a": "Найчастіше через округлення хвилин. Розрахунок веде облік у хвилинах і переводить у години лише в підсумку, тоді як ручний підрахунок часто округлює кожну зміну."
          }
        ],
        "sources": [
          "https://www.dol.gov/agencies/whd/fact-sheets/23-flsa-overtime-pay"
        ]
      },
      "de": {
        "path": "/de/business/wochenstundenzettel/",
        "h1": "Wochenstundenzettel-Rechner",
        "longDescription": "Ein Stundenzettel wird für die ganze Woche abgerechnet und nicht für eine einzelne Schicht, und genau dort gehen Minuten verloren: hier eine Pause von fünfundvierzig Minuten, dort eine Schicht über Mitternacht, am Ende ein kurzer Tag. Jede Schicht ist eine Zeile, die Summe wird in ganzen Minuten angesammelt und erst einmal am Schluss in Stunden umgerechnet — so stimmt die Summe mit dem Zettel auf Papier überein. Eine Zeile wie 22:00,06:00 wird als Übergang über Mitternacht verstanden und nicht als Fehler. Dies erfasst Uhrzeiten ohne Datum oder Zeitzone. Die Vergütung nutzt eingegebene Sollstunden und den festen Faktor 1,5 für alle Stunden darüber. Gesetzliche Überstunden, Nachtzuschläge und besondere Vertragsregeln werden nicht bestimmt.",
        "howToUse": [
          "Eine Schicht je Zeile: Beginn, Ende und Pause in Minuten mit Kommas getrennt.",
          "Die Pause darf entfallen: eine Zeile 09:00,18:00 zählt als Schicht ohne Pause.",
          "Eine Nachtschicht wird geschrieben, wie sie ist: 22:00,06:00 gilt als Übergang über Mitternacht.",
          "Alles über den Sollstunden geht als Überstunde zum Anderthalbfachen des Satzes.",
          "Trage nur abzuziehende Pausen in ganzen Minuten ein. Verwende bei anderen Vergütungsfaktoren die Stunden und eine separate Lohnberechnung."
        ],
        "howItWorks": "Jede Zeile enthält genau Beginn,Ende oder Beginn,Ende,Pause. Uhrzeiten gelten als HH:MM; Pausen sind ganze nicht negative Minuten, leer bedeutet 0. Liegt das Ende vor dem Beginn, kommen 1440 Minuten hinzu; gleiche Uhrzeiten bedeuten 0 statt 24 Stunden. Minuten werden genau summiert. Vergütung = min(Stunden,Soll)×Satz + max(Stunden−Soll,0)×Satz×1,5. Sollstunden dürfen gebrochen sein. Sommerzeitwechsel und Schichten über einen Tag werden nicht modelliert.",
        "example": "Fünf Schichten mit Pausen ergeben zusammen 36,75 Stunden und 551,25 € bei einem Satz von 15 € je Stunde. Zeile 22:00,06:00,30 ergibt 7,5 Stunden; gleicher Beginn und Ende ohne Pause ergeben 0 Stunden.",
        "disclaimer": "Uhrzeiten ohne Datum oder Sommerzeitwechsel; fester Faktor 1,5 über eingegebenem Soll. Keine gesetzliche Berechnung verpflichtender Löhne.",
        "faq": [
          {
            "q": "Warum wird in Minuten und nicht in Stunden gezählt?",
            "a": "Eine Schicht von 8 Stunden 45 Minuten sind 8,75 Stunden, eine von 7 Stunden 20 Minuten sind 7,333… Solche Brüche zu addieren und unterwegs jeden zu runden verliert Minuten; in ganzen Minuten ist die Summe genau."
          },
          {
            "q": "Wie trage ich eine Nachtschicht ein?",
            "a": "Als gewöhnliche Zeile: 22:00,06:00. Liegt das Ende vor dem Beginn, gilt die Schicht als über Mitternacht laufend, und dem Ende wird ein Tag zugerechnet."
          },
          {
            "q": "Woher kommt der Faktor 1,5?",
            "a": "Der Faktor ist in diesem Lehrmodell für alle Stunden oberhalb deiner Sollzeit fest. Es ist keine gesetzliche Lohnabrechnung; Regeln können Tage, Stundenarten, Sätze und Ausnahmen unterscheiden. Nutze bei anderen Regeln die Stunden und berechne die Vergütung getrennt."
          },
          {
            "q": "Was, wenn die Pause länger ist als die Schicht?",
            "a": "Diese Zeile wird abgewiesen. Negative Arbeitszeit heißt einen Tippfehler in den Uhrzeiten oder in der Pause, und sie stillschweigend zu null zu machen wäre schlechter, als es zu sagen."
          }
        ],
        "sources": [
          "https://www.dol.gov/agencies/whd/fact-sheets/23-flsa-overtime-pay"
        ]
      },
      "es": {
        "path": "/es/negocios/parte-de-horas-semanal/",
        "h1": "Calculadora de parte de horas semanal",
        "longDescription": "Un parte de horas se liquida por toda la semana y no por un solo turno, y ahí es justo donde se pierden los minutos: un descanso de cuarenta y cinco minutos aquí, un turno que pasa de medianoche allá, una jornada corta al final. Cada turno es una línea, el total se acumula en minutos enteros y se convierte a horas una sola vez, así que la suma coincide con el parte en papel. Una línea como 22:00,06:00 se entiende como un cruce de medianoche y no como un error. El parte usa horas del reloj sin fechas ni zonas horarias. El pago aplica la jornada introducida y un multiplicador fijo 1,5 a todas las horas superiores. No determina horas extra legales, pluses nocturnos ni reglas de un contrato.",
        "howToUse": [
          "Un turno por línea: inicio, fin y descanso en minutos separados por comas.",
          "El descanso puede omitirse: una línea 09:00,18:00 cuenta como un turno sin descanso.",
          "Un turno de noche se escribe tal cual: 22:00,06:00 se lee como cruce de medianoche.",
          "Todo lo que pase de la jornada estándar va a horas extra a una vez y media la tarifa.",
          "Introduce solo descansos que deban descontarse, en minutos enteros. Con otros multiplicadores usa las horas calculadas y un pago separado."
        ],
        "howItWorks": "Cada fila contiene exactamente inicio,fin o inicio,fin,descanso. Horas en HH:MM y descansos en minutos enteros no negativos, vacío significa 0. Si el fin es anterior al inicio, se añaden 1440 minutos; horas iguales significan 0 y no 24 horas. Se suman minutos exactos. Pago = min(horas,jornada)×tarifa + max(horas−jornada,0)×tarifa×1,5. La jornada admite fracciones. No se modelan cambios de horario estacional ni turnos superiores a un día.",
        "example": "Cinco turnos con descansos suman 36,75 horas y 367,50 con una tarifa de 10 por hora. La fila 22:00,06:00,30 da 7,5 horas; inicio y fin iguales sin descanso dan 0 horas.",
        "disclaimer": "Horas del reloj sin fechas ni cambios estacionales; pago fijo 1,5 sobre la jornada introducida. No cálculo legal de salarios obligatorios.",
        "faq": [
          {
            "q": "¿Por qué contar en minutos y no en horas?",
            "a": "Un turno de 8 horas y 45 minutos son 8,75 horas y uno de 7 horas y 20 minutos, 7,333… Sumar esas fracciones redondeando cada una por el camino pierde minutos; en minutos enteros el total es exacto."
          },
          {
            "q": "¿Cómo introduzco un turno de noche?",
            "a": "Como una línea corriente: 22:00,06:00. Cuando el fin es anterior al inicio, el turno se trata como cruce de medianoche y se suma un día al fin."
          },
          {
            "q": "¿De dónde sale el multiplicador 1,5?",
            "a": "Es fijo en este modelo didáctico para todas las horas sobre la jornada introducida. No calcula nómina legal: las reglas pueden distinguir días, clases de horas, tipos y excepciones. Si tus reglas difieren, usa las horas y calcula el pago aparte."
          },
          {
            "q": "¿Y si el descanso es más largo que el turno?",
            "a": "Esa línea se rechaza. Un tiempo de trabajo negativo significa una errata en las horas o en el descanso, y convertirlo en silencio en cero sería peor que decirlo."
          }
        ],
        "sources": [
          "https://www.dol.gov/agencies/whd/fact-sheets/23-flsa-overtime-pay"
        ]
      }
    }
  }
];
