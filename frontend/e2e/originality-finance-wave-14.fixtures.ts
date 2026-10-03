import type { PublicationCase } from './originality-publication-browser-helper';

// Numeric expectations are independent frozen Decimal/analytic literals.
// Calculator imports were used only in fixture preparation for row indexes,
// field visibility, native labels/units and owned copy/source getter metadata.
export const cases: PublicationCase[] = [
  {
    "id": "home-equity",
    "category": "finance",
    "defaults": {
      "value": 9000000,
      "balance": 3200000,
      "ltv": 80,
      "rate": 18,
      "years": 10
    },
    "fieldNames": [
      "value",
      "balance",
      "ltv",
      "rate",
      "years"
    ],
    "defaultInactive": [],
    "pages": [
      {
        "locale": "ru",
        "path": "/ru/finance/kredit-pod-zalog-zhilya/",
        "h1": "Калькулятор кредита под залог жилья",
        "body": {
          "longDescription": "Банк смотрит не на то, сколько вы уже выплатили, а на то, сколько всего долга висит на объекте. Поэтому предел считается от стоимости жилья по допустимой доле залога, и доступная сумма — это предел минус текущий остаток ипотеки. При выбранном пределе она обращается в ноль, даже если собственного капитала в квартире много. Долю залога вводите свою: у разных банков и программ она разная, и зашивать сюда чужое правило было бы обманом. Это модель дополнительного кредита с постоянной номинальной ставкой и ежемесячным платежом в конце месяца. Она не заменяет оценку кредитора, не включает комиссии и страхование и не моделирует возобновляемую кредитную линию.",
          "howToUse": [
            "Стоимость берите рыночную, а не покупную: банк оценивает объект заново.",
            "Остаток по ипотеке — то, что осталось выплатить, а не то, что уже выплачено.",
            "Допустимая доля залога у разных программ разная; уточните её в своём банке и подставьте сюда.",
            "Платёж посчитан аннуитетом от доступной суммы — это ориентир, а не предложение банка."
          ],
          "howItWorks": "При стоимости V, остатке B и доле L% предел равен V×L/100, доступно A=max(0,V×L/100−B), собственный капитал E=V−B. Срок переводится в месяцы n=round(12×лет), минимум один месяц. Для номинальной годовой ставки r% месячная i=r/1200; аннуитет P=A×i/[1−(1+i)^−n], при i=0 P=A/n. Если A=0, новый платёж равен нулю. График начислений и договорное округление здесь не строятся. Остаток B вводится от 0 до V: отрицательный собственный капитал за пределами этой модели.",
          "example": "При стоимости 9 млн, остатке 3,2 млн и доле 80 процентов доступно 4 млн ₽. Граница: стоимость 100, лимит 80% и текущий долг 90 дают доступную сумму 0 и собственную долю 10. Это отсутствие запаса в модели, а не новый платёж или заключение кредитора.",
          "faq": [
            {
              "q": "Почему доступная сумма меньше собственного капитала?",
              "a": "При L ниже 100% из стоимости объекта исключается запас V×(1−L/100); затем вычитается существующий долг. Величину L задаёте вы по выбранным условиям, а не по универсальному нормативу. При L=100% доступная сумма может совпадать с собственным капиталом."
            },
            {
              "q": "Что такое доля залога?",
              "a": "Это отношение всего долга по объекту к его стоимости. Восемьдесят процентов означает, что суммарный долг после нового кредита не должен превышать восьмидесяти процентов оценки."
            },
            {
              "q": "Почему доступная сумма может быть нулём?",
              "a": "Если остаток ипотеки уже упирается в предел, свободного залога нет. Это бывает при недавней покупке с малым первым взносом или при падении цен на жильё."
            },
            {
              "q": "Это то же самое, что рефинансирование?",
              "a": "Рефинансирование заменяет существующий долг новым. Здесь рассчитывается дополнительная сумма при сохранении старого остатка; платёж показан только по этой новой сумме. Ставки, залоговые условия и итоговые расходы сравнивают по конкретным договорам."
            }
          ],
          "disclaimer": "Доступная сумма — результат введённого лимита, а не проверка залога или одобрение. Метод не моделирует HELOC, комиссии, страхование и условия взыскания; правило кредитора зависит от договора и страны."
        },
        "help": {
          "value": "Оценка объекта в той же валюте, что и долг; её здесь не проверяют.",
          "ltv": "Выбранный предел общего долга, не универсальная норма кредитора.",
          "rate": "Постоянная номинальная годовая ставка; месячная равна ставке/1200.",
          "years": "Не меньше 1/12 года; срок округляется до ближайшего целого месяца."
        },
        "sources": [
          "https://www.consumerfinance.gov/ask-cfpb/what-is-a-home-equity-loan-en-106/"
        ],
        "normal": {
          "inputs": {
            "value": 9000000,
            "balance": 3200000,
            "ltv": 80,
            "rate": 18,
            "years": 10
          },
          "expected": {
            "kind": "number",
            "value": 4000000
          },
          "rows": [],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "₽",
          "independentLiteral": "4 000 000 ₽"
        },
        "boundary": {
          "inputs": {
            "value": 100,
            "balance": 90,
            "ltv": 80,
            "rate": 0,
            "years": 1
          },
          "expected": {
            "kind": "number",
            "value": 0
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 10
              }
            },
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 0
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "₽",
          "independentLiteral": "0 ₽"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 4000000
        },
        "blankField": "value",
        "domainField": "value",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "en",
        "path": "/en/finance/home-equity-loan/",
        "h1": "Home equity loan calculator",
        "body": {
          "longDescription": "A lender looks not at how much you have repaid but at how much debt sits on the property in total. The limit is therefore taken from the value of the home at the allowed loan-to-value, and the amount available is that limit minus the outstanding mortgage. Once the limit is used up it falls to zero, even when there is plenty of equity in the flat. Enter your own loan-to-value: it differs between lenders and programmes, and hard-wiring someone else's rule here would be misleading. This models an additional fixed nominal-rate loan with payments at each month-end. It does not replace a lender assessment, include fees or insurance, or model a revolving credit line.",
          "howToUse": [
            "Use the market value rather than the purchase price: the lender revalues the property.",
            "The outstanding balance is what is left to repay, not what has been repaid already.",
            "The allowed loan-to-value differs between programmes; check yours and put it in here.",
            "The payment is an annuity on the amount available — an estimate rather than a lender's offer."
          ],
          "howItWorks": "For value V, balance B and limit L%, the debt limit is V×L/100, available A=max(0,V×L/100−B), and equity E=V−B. The term becomes n=round(12×years), at least one month. A nominal annual rate r% gives i=r/1200 monthly; payment P=A×i/[1−(1+i)^−n], or A/n at zero interest. If A=0, the new payment is zero. No contractual accrual or cent-rounded repayment schedule is generated. Balance B ranges from 0 to V; negative equity is outside this model.",
          "example": "With a value of 9 million, a balance of 3.2 million and an 80 per cent limit, 4 million is available. Boundary: value 100, limit 80% and existing debt 90 give available borrowing 0 and equity 10. This is no modeled headroom, not a new payment or lender decision.",
          "faq": [
            {
              "q": "Why is the available amount less than my equity?",
              "a": "At L below 100%, the reserve V×(1−L/100) is excluded from the property value before existing debt is subtracted. You choose L for the conditions being modelled; there is no universal limit. At L=100%, available borrowing can equal equity."
            },
            {
              "q": "What is loan-to-value?",
              "a": "It is the ratio of all debt secured on the property to its value. Eighty per cent means the total debt after the new loan must not exceed eighty per cent of the valuation."
            },
            {
              "q": "Why can the available amount be zero?",
              "a": "If the outstanding mortgage already reaches the limit there is no free security left. That happens after a recent purchase with a small deposit, or when house prices fall."
            },
            {
              "q": "Is this the same as refinancing?",
              "a": "Refinancing replaces an existing debt with a new one. This model adds borrowing while retaining the old balance; the displayed payment covers only the new amount. Rates, security conditions and total costs must be compared using the actual contracts."
            }
          ],
          "disclaimer": "Available borrowing follows the entered limit, not collateral verification or approval. HELOC, fees, insurance and enforcement terms are not modeled; lender rules depend on contract and jurisdiction."
        },
        "help": {
          "value": "Property valuation in the debt currency; it is not verified here.",
          "ltv": "Selected combined-debt limit, not a universal lender rule.",
          "rate": "Constant nominal annual percentage; monthly rate is entered rate/1200.",
          "years": "At least 1/12 year; term rounds to the nearest whole month."
        },
        "sources": [
          "https://www.consumerfinance.gov/ask-cfpb/what-is-a-home-equity-loan-en-106/"
        ],
        "normal": {
          "inputs": {
            "value": 9000000,
            "balance": 3200000,
            "ltv": 80,
            "rate": 18,
            "years": 10
          },
          "expected": {
            "kind": "number",
            "value": 4000000
          },
          "rows": [],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "$",
          "independentLiteral": "4 000 000 ₽"
        },
        "boundary": {
          "inputs": {
            "value": 100,
            "balance": 90,
            "ltv": 80,
            "rate": 0,
            "years": 1
          },
          "expected": {
            "kind": "number",
            "value": 0
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 10
              }
            },
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 0
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "$",
          "independentLiteral": "0 ₽"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 4000000
        },
        "blankField": "value",
        "domainField": "value",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "uk",
        "path": "/uk/finansy/kredyt-pid-zastavu-zhytla/",
        "h1": "Калькулятор кредиту під заставу житла",
        "body": {
          "longDescription": "Кредит під заставу житла спирається на різницю між вартістю нерухомості й залишком іпотечного боргу. Банк дозволяє позичити не всю цю різницю, а лише до певної частки вартості — і саме ця межа, а не сам залишок боргу, визначає доступну суму. Це модель додаткового кредиту з постійною номінальною ставкою й платежами наприкінці кожного місяця. Вона не замінює оцінки кредитора, не враховує комісій чи страхування та не моделює відновлювану кредитну лінію.",
          "howToUse": [
            "Введіть ринкову вартість нерухомості.",
            "Введіть залишок наявного боргу.",
            "Задайте допустиму частку застави у відсотках."
          ],
          "howItWorks": "За вартості V, залишку B і частки L% межа боргу V×L/100, доступно A=max(0,V×L/100−B), власний капітал E=V−B. Строк переводиться в місяці n=round(12×роки), щонайменше один місяць. За номінальної річної ставки r% місячна i=r/1200; ануїтет P=A×i/[1−(1+i)^−n], а за i=0 P=A/n. Якщо A=0, новий платіж нульовий. Договірний графік нарахувань і округлення до копійок не будуються. Залишок B вводиться від 0 до V; від’ємний власний капітал поза цією моделлю.",
          "example": "За вартості 9 млн ₴, залишку 3,2 млн ₴ і частки 80 відсотків доступно 4 млн ₴. Якби залишок був 7,5 млн ₴, доступна сума дорівнювала б нулю. Межа: ціна 100, ліміт 80% і наявний борг 90 дають доступну суму 0 та власну частку 10. Це відсутність запасу в моделі, не новий платіж чи рішення кредитора.",
          "faq": [
            {
              "q": "Чому не можна позичити всю різницю?",
              "a": "За L менше 100% з вартості виключається запас V×(1−L/100), після чого віднімається наявний борг. L задаєте ви відповідно до обраних умов, а не універсальної межі 70–80%. За L=100% доступна сума може збігатися з власним капіталом."
            },
            {
              "q": "Чим це відрізняється від споживчого кредиту?",
              "a": "Додатковий кредит забезпечується житлом, а ставка й вимоги залежать від договору та кредитора. Розрахунок не визначає, чи вигідніший він за незабезпечений кредит. Невиконання зобов’язань може створювати ризик втрати заставного житла."
            },
            {
              "q": "Хто визначає вартість нерухомості?",
              "a": "Для калькулятора потрібна вартість, яку ви використовуєте в обраній моделі. Кредитор може вимагати власної оцінки за своїми правилами; ціна оголошення та оцінка можуть відрізнятися в будь-який бік."
            },
            {
              "q": "Що буде, якщо ціни на житло впадуть?",
              "a": "За незмінного боргу й L нижча вартість V зменшує розраховану доступну суму, аж до нуля. Наслідки для вже виданого кредиту залежать від договору; калькулятор не передбачає автоматичної вимоги додаткової застави."
            }
          ],
          "disclaimer": "Доступна сума випливає з введеного ліміту, не з перевірки застави чи схвалення. HELOC, комісії, страхування й стягнення не моделюються; правила залежать від договору та країни."
        },
        "help": {
          "value": "Оцінка об’єкта у валюті боргу; тут її не перевіряють.",
          "ltv": "Обрана межа загального боргу, не універсальна норма.",
          "rate": "Постійна номінальна річна ставка; місячна дорівнює ставці/1200.",
          "years": "Не менше 1/12 року; строк округлюється до найближчого цілого місяця."
        },
        "sources": [
          "https://www.consumerfinance.gov/ask-cfpb/what-is-a-home-equity-loan-en-106/"
        ],
        "normal": {
          "inputs": {
            "value": 9000000,
            "balance": 3200000,
            "ltv": 80,
            "rate": 18,
            "years": 10
          },
          "expected": {
            "kind": "number",
            "value": 4000000
          },
          "rows": [],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "₴",
          "independentLiteral": "4 000 000 ₽"
        },
        "boundary": {
          "inputs": {
            "value": 100,
            "balance": 90,
            "ltv": 80,
            "rate": 0,
            "years": 1
          },
          "expected": {
            "kind": "number",
            "value": 0
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 10
              }
            },
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 0
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "₴",
          "independentLiteral": "0 ₽"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 4000000
        },
        "blankField": "value",
        "domainField": "value",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "de",
        "path": "/de/finanzen/darlehen-auf-wohneigentum/",
        "h1": "Rechner für ein Darlehen auf Wohneigentum",
        "body": {
          "longDescription": "Eine Bank sieht nicht darauf, wie viel du getilgt hast, sondern darauf, wie viel Schuld insgesamt auf der Immobilie lastet. Die Grenze folgt deshalb aus dem Wert der Immobilie beim zulässigen Beleihungsauslauf, und der verfügbare Betrag ist diese Grenze minus der Restschuld. Ist die Grenze ausgeschöpft, fällt er auf null, selbst wenn in der Wohnung reichlich Eigenkapital steckt. Trage deinen eigenen Beleihungsauslauf ein: er unterscheidet sich zwischen Banken und Programmen, und die Regel eines anderen fest einzubauen führte hier in die Irre. Das Modell beschreibt ein zusätzliches Darlehen mit konstantem Nominalzins und Raten am Monatsende. Kreditprüfung, Gebühren, Versicherung und eine revolvierende Kreditlinie sind nicht enthalten.",
          "howToUse": [
            "Nimm den Verkehrswert und nicht den Kaufpreis: die Bank bewertet die Immobilie neu.",
            "Die Restschuld ist das, was noch zu tilgen ist, und nicht das, was bereits getilgt wurde.",
            "Der zulässige Beleihungsauslauf unterscheidet sich zwischen Programmen; prüfe deinen und trage ihn hier ein.",
            "Die Rate ist eine Annuität auf den verfügbaren Betrag — eine Schätzung und kein Angebot einer Bank."
          ],
          "howItWorks": "Für Wert V, Restschuld B und Grenze L% gilt: Schuldengrenze V×L/100, verfügbar A=max(0,V×L/100−B), Eigenkapital E=V−B. Die Laufzeit wird n=round(12×Jahre), mindestens ein Monat. Beim jährlichen Nominalzins r% ist i=r/1200 monatlich; P=A×i/[1−(1+i)^−n], bei null Zins A/n. Ist A=0, ist die neue Rate null. Ein vertraglicher Zins- und Tilgungsplan mit Cent-Rundung wird nicht erstellt. Restschuld B liegt von 0 bis V; negatives Eigenkapital liegt außerhalb dieses Modells.",
          "example": "Bei einem Wert von 450 000 €, einer Restschuld von 160 000 € und einer Grenze von 80 Prozent sind 200 000 € verfügbar. Grenze: Wert 100, Grenze 80% und bestehende Schuld 90 ergeben verfügbaren Betrag 0 und Eigenkapital 10. Das ist fehlender Modellspielraum, keine neue Rate oder Kreditentscheidung.",
          "faq": [
            {
              "q": "Warum ist der verfügbare Betrag kleiner als mein Eigenkapital?",
              "a": "Bei L unter 100% bleibt V×(1−L/100) des Immobilienwerts außerhalb der Schuldengrenze; danach wird die Restschuld abgezogen. Du wählst L für die geprüften Bedingungen, nicht nach einem universellen Grenzwert. Bei L=100% kann der verfügbare Betrag dem Eigenkapital entsprechen."
            },
            {
              "q": "Was ist der Beleihungsauslauf?",
              "a": "Es ist das Verhältnis aller auf der Immobilie gesicherten Schulden zu ihrem Wert. Achtzig Prozent heißt, dass die Gesamtschuld nach dem neuen Darlehen achtzig Prozent des Werts nicht übersteigen darf."
            },
            {
              "q": "Warum kann der verfügbare Betrag null sein?",
              "a": "Erreicht die bestehende Restschuld die Grenze bereits, ist keine freie Sicherheit mehr da. Das kommt nach einem jüngst getätigten Kauf mit wenig Eigenkapital vor oder wenn die Immobilienpreise fallen."
            },
            {
              "q": "Ist das dasselbe wie eine Umschuldung?",
              "a": "Eine Umschuldung ersetzt bestehende Schulden. Dieses Modell ergänzt einen Kredit bei unveränderter alter Restschuld; die angezeigte Rate betrifft nur den neuen Betrag. Zinsen, Sicherheiten und Gesamtkosten sind anhand der konkreten Verträge zu vergleichen."
            }
          ],
          "disclaimer": "Der verfügbare Betrag folgt der eingegebenen Grenze, keiner Sicherheitenprüfung oder Zusage. HELOC, Gebühren, Versicherung und Verwertung fehlen; Kreditregeln hängen von Vertrag und Rechtsraum ab."
        },
        "help": {
          "value": "Objektbewertung in der Schuldwährung; hier ungeprüft.",
          "ltv": "Gewählte Gesamtschuldengrenze, keine allgemeine Bankregel.",
          "rate": "Konstanter jährlicher Nominalzins; monatlich Eingabe/1200.",
          "years": "Mindestens 1/12 Jahr; Rundung auf den nächsten ganzen Monat."
        },
        "sources": [
          "https://www.consumerfinance.gov/ask-cfpb/what-is-a-home-equity-loan-en-106/"
        ],
        "normal": {
          "inputs": {
            "value": 450000,
            "balance": 160000,
            "ltv": 80,
            "rate": 18,
            "years": 10
          },
          "expected": {
            "kind": "number",
            "value": 200000
          },
          "rows": [],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "€",
          "independentLiteral": "200 000 ₽"
        },
        "boundary": {
          "inputs": {
            "value": 100,
            "balance": 90,
            "ltv": 80,
            "rate": 0,
            "years": 1
          },
          "expected": {
            "kind": "number",
            "value": 0
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 10
              }
            },
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 0
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "€",
          "independentLiteral": "0 ₽"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 4000000
        },
        "blankField": "value",
        "domainField": "value",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "es",
        "path": "/es/finanzas/prestamo-con-garantia-hipotecaria/",
        "h1": "Calculadora de préstamo con garantía hipotecaria",
        "body": {
          "longDescription": "Un prestamista no mira cuánto has amortizado, sino cuánta deuda pesa en total sobre el inmueble. El límite se toma por tanto del valor de la vivienda con la financiación permitida, y el importe disponible es ese límite menos la hipoteca pendiente. Una vez agotado el límite baja a cero, aunque haya mucho patrimonio en el piso. Introduce tu propia financiación máxima: cambia entre prestamistas y programas, y fijar aquí la regla de otro induciría a error. El modelo describe un préstamo adicional con tipo nominal constante y cuotas al final de cada mes. No sustituye la evaluación del prestamista ni incluye gastos, seguros o una línea de crédito renovable.",
          "howToUse": [
            "Usa el valor de mercado y no el precio de compra: el prestamista tasa de nuevo el inmueble.",
            "La deuda pendiente es lo que queda por devolver, no lo ya devuelto.",
            "La financiación permitida cambia entre programas: comprueba la tuya e introdúcela aquí.",
            "La cuota es una cuota constante sobre el importe disponible: una estimación y no una oferta de un prestamista."
          ],
          "howItWorks": "Con valor V, saldo B y límite L%, el techo de deuda es V×L/100, disponible A=max(0,V×L/100−B) y patrimonio E=V−B. El plazo pasa a n=round(12×años), al menos un mes. Para tipo nominal anual r%, i=r/1200 al mes; cuota P=A×i/[1−(1+i)^−n], o A/n sin interés. Si A=0, la cuota nueva es cero. No se genera un cuadro contractual con devengo y redondeo a céntimos. Saldo B entre 0 y V; el capital propio negativo queda fuera de este modelo.",
          "example": "Con un valor de 900 000, una deuda pendiente de 320 000 y un límite del 80 por ciento hay 400 000 disponibles. Límite: valor 100, tope 80% y deuda 90 dan importe disponible 0 y capital propio 10. Es ausencia de margen en el modelo, no una cuota nueva ni decisión del prestamista.",
          "faq": [
            {
              "q": "¿Por qué el importe disponible es menor que mi patrimonio?",
              "a": "Con L inferior al 100%, la reserva V×(1−L/100) queda fuera del límite de deuda; después se resta el saldo existente. Tú eliges L para las condiciones evaluadas, sin un límite universal. Con L=100%, el importe disponible puede coincidir con el patrimonio."
            },
            {
              "q": "¿Qué es el ratio préstamo-valor?",
              "a": "Es la relación entre toda la deuda garantizada con el inmueble y su valor. Un ochenta por ciento significa que la deuda total tras el nuevo préstamo no debe superar el ochenta por ciento de la tasación."
            },
            {
              "q": "¿Por qué el importe disponible puede ser cero?",
              "a": "Si la hipoteca pendiente ya alcanza el límite, no queda garantía libre. Eso ocurre tras una compra reciente con poca entrada, o cuando bajan los precios de la vivienda."
            },
            {
              "q": "¿Es lo mismo que refinanciar?",
              "a": "Refinanciar sustituye la deuda existente. Este modelo añade un préstamo manteniendo el saldo anterior; la cuota mostrada solo corresponde al importe nuevo. Los tipos, garantías y gastos totales se comparan en los contratos concretos."
            }
          ],
          "disclaimer": "El importe depende del límite introducido, no de verificación de garantía o aprobación. No se modelan HELOC, comisiones, seguros ni ejecución; reglas del prestamista dependen de contrato y jurisdicción."
        },
        "help": {
          "value": "Valoración en moneda de la deuda; no se verifica aquí.",
          "ltv": "Tope de deuda conjunta elegido, no regla universal.",
          "rate": "Tipo nominal anual constante; mensual = valor/1200.",
          "years": "Mínimo 1/12 de año; se redondea al mes entero más próximo."
        },
        "sources": [
          "https://www.consumerfinance.gov/ask-cfpb/what-is-a-home-equity-loan-en-106/"
        ],
        "normal": {
          "inputs": {
            "value": 900000,
            "balance": 320000,
            "ltv": 80,
            "rate": 18,
            "years": 10
          },
          "expected": {
            "kind": "number",
            "value": 400000
          },
          "rows": [],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "€",
          "independentLiteral": "400 000 ₽"
        },
        "boundary": {
          "inputs": {
            "value": 100,
            "balance": 90,
            "ltv": 80,
            "rate": 0,
            "years": 1
          },
          "expected": {
            "kind": "number",
            "value": 0
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 10
              }
            },
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 0
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "€",
          "independentLiteral": "0 ₽"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 4000000
        },
        "blankField": "value",
        "domainField": "value",
        "domainInvalid": -1,
        "countFields": []
      }
    ]
  },
  {
    "id": "installment",
    "category": "finance",
    "defaults": {
      "price": 60000,
      "down": 10000,
      "months": 6,
      "markup": 12
    },
    "fieldNames": [
      "price",
      "down",
      "months",
      "markup"
    ],
    "defaultInactive": [],
    "pages": [
      {
        "locale": "ru",
        "path": "/ru/finance/installment/",
        "h1": "Калькулятор рассрочки",
        "body": {
          "longDescription": "Модель распределяет цену за вычетом первоначального взноса на месячные платежи после однократной наценки. Наценка применяется к финансируемой сумме: 12% означает множитель 1,12, а не умножение на 0,12. Проценты на остаток не начисляются. Это выбранная арифметическая схема, а не общее юридическое отличие рассрочки от кредита: реальные продукты могут иметь проценты, комиссии и другие условия. При нулевой наценке переплата в этой модели нулевая.",
          "howToUse": [
            "Введите цену покупки и первоначальный взнос.",
            "Укажите срок рассрочки и наценку магазина.",
            "Прочитайте платёж и график погашения."
          ],
          "howItWorks": "F=цена−взнос; F округляется до двух знаков. Итог T=F×(1+m/100) также округляется до двух знаков. Обычный платёж — T/n, округлённый до двух знаков; последний закрывает остаток, чтобы сумма графика равнялась T. Если очень малая сумма не покрывает n−1 округлённых платежей, обычный платёж округляется вниз до целого числа копеек, а остаток переносится в последний. Расчёт ведёт остаток в целых копейках; n — целое число от 1 до 60. Договорные комиссии и досрочный перерасчёт не моделируются.",
          "example": "Покупка за 60 000 со взносом 10 000 на шесть месяцев при наценке 12 % даёт платёж 9 333,33 и переплату 6 000. Граница округления: цена 0,04, без взноса и наценки, срок 6 месяцев. Регулярная сумма 0,00 в первые пять месяцев, остаток 0,04 в последнем: сумма платежей 0,04, отрицательного платежа нет.",
          "faq": [
            {
              "q": "Чем рассрочка отличается от кредита?",
              "a": "Здесь наценка считается один раз от финансируемой суммы, а проценты на остаток не начисляются. Реальная рассрочка может юридически быть кредитом и использовать другую схему. Досрочное погашение и возврат части наценки определяет договор; этот калькулятор их не рассчитывает."
            },
            {
              "q": "Как посчитать беспроцентную рассрочку?",
              "a": "Оставьте наценку нулевой: итог равен финансируемой сумме, а модельная переплата нулевая. Сравнение с оплатой сразу всё равно требует проверить цену товара, комиссии и страхование по договору."
            },
            {
              "q": "Почему платежи не делятся ровно?",
              "a": "Потому что итог редко делится на срок нацело. Разницу забирает последний платёж, иначе сумма всех платежей разошлась бы с итоговой ценой."
            },
            {
              "q": "Учитывается ли страховка или комиссия?",
              "a": "Нет. Расход можно включить в цену только если на него распространяются те же наценка и график. Отдельно уплачиваемую комиссию или страховку с другим сроком следует прибавлять к общим расходам вне этого графика."
            }
          ],
          "disclaimer": "Наценка начисляется один раз на финансируемую сумму. Она не равна годовой процентной ставке, эффективной стоимости или юридической классификации договора; плата за обслуживание, просрочка и досрочное погашение отдельно не моделируются."
        },
        "help": {
          "down": "Пустое поле означает 0; взнос меньше цены и не входит в график платежей.",
          "months": "Целое число от 1 до 60; последний платёж выравнивает сумму до копейки.",
          "markup": "Разовая наценка на цену минус взнос, не годовая ставка."
        },
        "sources": [
          "https://www.consumerfinance.gov/ask-cfpb/what-is-a-buy-now-pay-later-bnpl-loan-en-2119/"
        ],
        "normal": {
          "inputs": {
            "price": 60000,
            "down": 10000,
            "months": 6,
            "markup": 12
          },
          "expected": {
            "kind": "number",
            "value": 9333.33
          },
          "rows": [
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 6000
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "₽",
          "independentLiteral": "9 333,33 ₽"
        },
        "boundary": {
          "inputs": {
            "price": 0.04,
            "down": 0,
            "months": 6,
            "markup": 0
          },
          "expected": {
            "kind": "number",
            "value": 0
          },
          "rows": [
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 0.04
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "₽",
          "independentLiteral": "0,00 ₽"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 9333.33
        },
        "blankField": "price",
        "domainField": "price",
        "domainInvalid": -1,
        "countFields": [
          "months"
        ]
      },
      {
        "locale": "en",
        "path": "/en/finance/installment-calculator/",
        "h1": "Instalment plan calculator",
        "body": {
          "longDescription": "This model spreads the price less the down payment across monthly instalments after a one-time markup. A 12% markup means multiplying the financed amount by 1.12, not 0.12. Interest does not accrue on the remaining balance. That is the arithmetic chosen here, not a legal distinction between instalment plans and loans: real products can include interest, fees and other terms. Zero markup gives zero overpayment in this model.",
          "howToUse": [
            "Enter the purchase price and the down payment.",
            "Give the term and the retailer markup.",
            "Read the payment and the schedule."
          ],
          "howItWorks": "F=price−down payment, rounded to two decimals. Total T=F×(1+m/100) is rounded to two decimals too. The regular payment is T/n rounded to two decimals; the final payment clears the remainder so the schedule sums to T. If a tiny total cannot cover n−1 rounded payments, the regular payment is rounded down to whole cents and the remainder goes into the last one. Balances use integer cents; n is a whole number from 1 to 60. Contract fees and early-settlement recalculation are not modelled.",
          "example": "A 60,000 purchase with 10,000 down over six months at a 12 % markup gives a payment of 9,333.33 and an overpayment of 6,000. Rounding boundary: price 0.04, no down payment or markup, six months. The first five regular payments are 0.00 and the last is 0.04: total 0.04, with no negative payment.",
          "faq": [
            {
              "q": "How is an instalment plan different from a loan?",
              "a": "Here markup is applied once to the financed amount and no interest accrues on the balance. A real instalment plan can legally be a loan and use another scheme. The contract determines early settlement and any refund of markup; this calculator does not compute them."
            },
            {
              "q": "How do I model an interest-free plan?",
              "a": "Leave markup at zero: the total equals the financed amount and model overpayment is zero. Comparing with payment upfront still requires checking the product price, fees and insurance in the contract."
            },
            {
              "q": "Why is the final payment a few kopecks different?",
              "a": "Because the total rarely divides evenly across the term. The remainder goes into the last payment, otherwise the payments would not add up to the price."
            },
            {
              "q": "Are insurance or fees included?",
              "a": "No. Add an expense to the price only if the same markup and schedule apply to it. A separately paid fee or insurance charge with different timing belongs in total costs outside this schedule."
            }
          ],
          "disclaimer": "Markup is applied once to the financed amount. It is not an annual interest rate, effective cost or legal classification; servicing fees, late charges and early payoff are not modeled separately."
        },
        "help": {
          "down": "Blank means 0; down payment is below price and outside the schedule.",
          "months": "Whole number 1–60; the last payment reconciles the total to cents.",
          "markup": "One-time markup on price minus down payment, not an annual rate."
        },
        "sources": [
          "https://www.consumerfinance.gov/ask-cfpb/what-is-a-buy-now-pay-later-bnpl-loan-en-2119/"
        ],
        "normal": {
          "inputs": {
            "price": 60000,
            "down": 10000,
            "months": 6,
            "markup": 12
          },
          "expected": {
            "kind": "number",
            "value": 9333.33
          },
          "rows": [
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 6000
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "$",
          "independentLiteral": "9 333,33 ₽"
        },
        "boundary": {
          "inputs": {
            "price": 0.04,
            "down": 0,
            "months": 6,
            "markup": 0
          },
          "expected": {
            "kind": "number",
            "value": 0
          },
          "rows": [
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 0.04
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "$",
          "independentLiteral": "0,00 ₽"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 9333.33
        },
        "blankField": "price",
        "domainField": "price",
        "domainInvalid": -1,
        "countFields": [
          "months"
        ]
      },
      {
        "locale": "uk",
        "path": "/uk/finansy/rozstrochka/",
        "h1": "Калькулятор розстрочки",
        "body": {
          "longDescription": "Модель розподіляє ціну за вирахуванням початкового внеску на щомісячні платежі після одноразової націнки. Націнка 12% означає множник 1,12 для фінансованої суми, а не 0,12. Проценти на залишок не нараховуються. Це обрана арифметична схема, а не юридична відмінність розстрочки від кредиту: конкретний продукт може мати проценти, комісії та інші умови. За нульової націнки модельна переплата нульова.",
          "howToUse": [
            "Введіть ціну товару.",
            "Введіть початковий внесок.",
            "Задайте кількість місяців і націнку у відсотках."
          ],
          "howItWorks": "F=ціна−внесок, округлена до двох знаків. Підсумок T=F×(1+m/100) також округлюється до двох знаків. Звичайний платіж — T/n з округленням, останній закриває залишок, щоб сума графіка дорівнювала T. Якщо мала сума не покриває n−1 округлених платежів, звичайний платіж округлюється вниз до цілих копійок, а залишок переходить в останній. Залишок обліковується в цілих копійках; n — ціле число від 1 до 60. Договірні комісії та достроковий перерахунок не моделюються.",
          "example": "Покупка за 60 000 ₴ із внеском 10 000 ₴ на шість місяців за націнки 12 % дає платіж 9333,33 ₴ і переплату 6000 ₴. Межа округлення: ціна 0,04, без внеску й націнки, 6 місяців. Перші п’ять регулярних платежів 0,00, останній 0,04: підсумок 0,04, без від’ємного платежу.",
          "faq": [
            {
              "q": "Чи буває розстрочка справді без переплати?",
              "a": "За нульової націнки цей графік не додає переплати до фінансованої суми. Це не доводить рівність ціни з оплатою одразу: перевірте ціну товару, окремі комісії, страхування та інші умови договору."
            },
            {
              "q": "Чим розстрочка відрізняється від кредиту?",
              "a": "Розстрочка може бути кредитним продуктом; правовий статус визначається договором і місцевими правилами. Цей калькулятор задає лише одноразову націнку та рівномірний графік, без процентів на залишок."
            },
            {
              "q": "Що буде за прострочення?",
              "a": "Прострочення, пені та можливі зміни умов визначає конкретний договір. Цей графік припускає всі платежі вчасно й не розраховує санкцій або автоматичного переходу на іншу ставку."
            },
            {
              "q": "Чи вигідний більший внесок?",
              "a": "У цій моделі більший внесок зменшує фінансовану суму та націнку, обчислену саме від неї. Це арифметична залежність, а не універсальна оцінка вигоди: окремі витрати й альтернативне використання грошей не враховані."
            }
          ],
          "disclaimer": "Націнка застосовується один раз до фінансованої суми. Це не річна процентна ставка, ефективна вартість чи правова класифікація; обслуговування, прострочення й дострокова сплата окремо не моделюються."
        },
        "help": {
          "down": "Порожнє поле означає 0; внесок менший за ціну й поза графіком.",
          "months": "Ціле число 1–60; останній платіж узгоджує суму до копійки.",
          "markup": "Одноразова націнка на ціну мінус внесок, не річна ставка."
        },
        "sources": [
          "https://www.consumerfinance.gov/ask-cfpb/what-is-a-buy-now-pay-later-bnpl-loan-en-2119/"
        ],
        "normal": {
          "inputs": {
            "price": 60000,
            "down": 10000,
            "months": 6,
            "markup": 12
          },
          "expected": {
            "kind": "number",
            "value": 9333.33
          },
          "rows": [
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 6000
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "₴",
          "independentLiteral": "9 333,33 ₽"
        },
        "boundary": {
          "inputs": {
            "price": 0.04,
            "down": 0,
            "months": 6,
            "markup": 0
          },
          "expected": {
            "kind": "number",
            "value": 0
          },
          "rows": [
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 0.04
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "₴",
          "independentLiteral": "0,00 ₽"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 9333.33
        },
        "blankField": "price",
        "domainField": "price",
        "domainInvalid": -1,
        "countFields": [
          "months"
        ]
      },
      {
        "locale": "de",
        "path": "/de/finanzen/ratenkauf-rechner/",
        "h1": "Ratenkaufrechner",
        "body": {
          "longDescription": "Das Modell verteilt den Kaufpreis abzüglich der Anzahlung nach einem einmaligen Aufschlag auf Monatsraten. Bei 12% Aufschlag wird der finanzierte Betrag mit 1,12 und nicht mit 0,12 multipliziert. Auf die Restschuld fallen hier keine Zinsen an. Dies ist die gewählte Rechenmethode, keine rechtliche Abgrenzung von Ratenkauf und Darlehen: reale Produkte können Zinsen, Gebühren und weitere Bedingungen enthalten. Null Aufschlag ergibt im Modell null Mehrkosten.",
          "howToUse": [
            "Trage den Kaufpreis und die Anzahlung ein.",
            "Gib die Laufzeit und den Aufschlag des Händlers an.",
            "Lies die Rate und den Plan ab."
          ],
          "howItWorks": "F=Preis−Anzahlung, auf zwei Dezimalstellen gerundet. Auch T=F×(1+m/100) wird so gerundet. Die reguläre Rate ist T/n mit zwei Dezimalstellen; die letzte Rate tilgt den Rest, damit die Summe T entspricht. Reicht ein sehr kleiner Betrag nicht für n−1 gerundete Raten, wird die reguläre Rate auf ganze Cent abgerundet und der Rest zuletzt bezahlt. Salden werden in ganzen Cent geführt; n ist ganzzahlig von 1 bis 60. Vertragsgebühren und eine Neuberechnung bei vorzeitiger Zahlung sind nicht enthalten.",
          "example": "Ein Kauf über 600 € mit 100 € Anzahlung über sechs Monate bei 12 % Aufschlag ergibt eine Rate von 93,33 € und Mehrkosten von 60 €. Rundungsgrenze: Preis 0,04, keine Anzahlung oder Aufschlag, sechs Monate. Die ersten fünf Raten sind 0,00, die letzte 0,04: Summe 0,04 ohne negative Rate.",
          "faq": [
            {
              "q": "Wie unterscheidet sich ein Ratenkauf von einem Darlehen?",
              "a": "Hier gilt ein einmaliger Aufschlag auf den finanzierten Betrag ohne Zinsen auf die Restschuld. Ein realer Ratenkauf kann rechtlich ein Darlehen sein und anders gerechnet werden. Vorzeitige Ablösung und eine mögliche Erstattung des Aufschlags folgen dem Vertrag und werden hier nicht berechnet."
            },
            {
              "q": "Wie bilde ich eine Null-Prozent-Finanzierung ab?",
              "a": "Lass den Aufschlag auf null: Gesamtbetrag und finanzierter Betrag stimmen überein, modellierte Mehrkosten sind null. Für den Vergleich mit Sofortzahlung sind trotzdem Warenpreis, Gebühren und Versicherung im Vertrag zu prüfen."
            },
            {
              "q": "Warum weicht die letzte Rate um ein paar Cent ab?",
              "a": "Weil die Summe selten glatt durch die Laufzeit teilbar ist. Der Rest geht in die letzte Rate, sonst ergäben die Raten nicht den Preis."
            },
            {
              "q": "Sind Versicherung und Gebühren enthalten?",
              "a": "Nein. Ein Aufwand gehört nur dann in den Preis, wenn derselbe Aufschlag und Zahlungsplan für ihn gelten. Separat gezahlte Gebühren oder Versicherungen mit anderem Zahlungstermin sind außerhalb dieses Plans zu den Gesamtkosten zu addieren."
            }
          ],
          "disclaimer": "Der Aufschlag wird einmal auf den finanzierten Betrag angewandt. Er ist kein Jahreszins, Effektivpreis oder rechtlicher Vertragstyp; Servicegebühren, Verzug und vorzeitige Ablösung fehlen gesondert."
        },
        "help": {
          "down": "Leer bedeutet 0; Anzahlung unter Preis und außerhalb des Ratenplans.",
          "months": "Ganze Zahl 1–60; letzte Rate gleicht die Cent-Summe aus.",
          "markup": "Einmaliger Aufschlag auf Preis minus Anzahlung, kein Jahreszins."
        },
        "sources": [
          "https://www.consumerfinance.gov/ask-cfpb/what-is-a-buy-now-pay-later-bnpl-loan-en-2119/"
        ],
        "normal": {
          "inputs": {
            "price": 600,
            "down": 100,
            "months": 6,
            "markup": 12
          },
          "expected": {
            "kind": "number",
            "value": 93.33
          },
          "rows": [
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 60
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "€",
          "independentLiteral": "93,33 ₽"
        },
        "boundary": {
          "inputs": {
            "price": 0.04,
            "down": 0,
            "months": 6,
            "markup": 0
          },
          "expected": {
            "kind": "number",
            "value": 0
          },
          "rows": [
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 0.04
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "€",
          "independentLiteral": "0,00 ₽"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 9333.33
        },
        "blankField": "price",
        "domainField": "price",
        "domainInvalid": -1,
        "countFields": [
          "months"
        ]
      },
      {
        "locale": "es",
        "path": "/es/finanzas/compra-a-plazos/",
        "h1": "Calculadora de compra a plazos",
        "body": {
          "longDescription": "El modelo reparte el precio menos la entrada en cuotas mensuales tras un recargo único. Un recargo del 12% multiplica el importe financiado por 1,12, no por 0,12. Aquí no se devengan intereses sobre el saldo. Es la fórmula elegida, no una distinción jurídica entre compras a plazos y préstamos: los productos reales pueden incluir intereses, comisiones y otras condiciones. Un recargo cero da un sobrecoste cero en el modelo.",
          "howToUse": [
            "Introduce el precio de compra y la entrada.",
            "Indica el plazo y el recargo del comercio.",
            "Consulta la cuota y el cuadro de pagos."
          ],
          "howItWorks": "F=precio−entrada, redondeado a dos decimales. El total T=F×(1+m/100) también se redondea a dos decimales. La cuota regular es T/n redondeada; la última liquida el resto para que el cuadro sume T. Si un total muy pequeño no cubre n−1 cuotas redondeadas, la cuota regular se redondea hacia abajo a céntimos enteros y el resto pasa a la última. Los saldos usan céntimos enteros; n es un entero de 1 a 60. No se modelan comisiones contractuales ni recálculos por liquidación anticipada.",
          "example": "Una compra de 600 con 100 de entrada a seis meses con un 12 % de recargo da una cuota de 93,33 y un sobrecoste de 60. Límite de redondeo: precio 0,04, sin entrada ni recargo, seis meses. Las primeras cinco cuotas son 0,00 y la última 0,04: total 0,04, sin cuota negativa.",
          "faq": [
            {
              "q": "¿En qué se diferencia una compra a plazos de un préstamo?",
              "a": "Aquí se aplica un recargo único al importe financiado, sin interés sobre el saldo. Un producto real a plazos puede ser jurídicamente un préstamo y usar otra fórmula. El contrato determina la liquidación anticipada y cualquier devolución del recargo; aquí no se calculan."
            },
            {
              "q": "¿Cómo modelo unos plazos sin intereses?",
              "a": "Deja el recargo en cero: el total coincide con el importe financiado y el sobrecoste del modelo es cero. Para comparar con el pago inmediato, comprueba también el precio, las comisiones y los seguros del contrato."
            },
            {
              "q": "¿Por qué la última cuota difiere en unos céntimos?",
              "a": "Porque el total rara vez se divide exacto entre el plazo. El resto va a la última cuota; de lo contrario las cuotas no sumarían el precio."
            },
            {
              "q": "¿Se incluyen seguros o comisiones?",
              "a": "No. Incluye un gasto en el precio solo si se le aplican el mismo recargo y calendario. Una comisión o seguro pagado por separado y en otra fecha debe añadirse a los gastos totales fuera de este cuadro."
            }
          ],
          "disclaimer": "El recargo se aplica una vez al importe financiado. No es un tipo anual, coste efectivo ni clasificación legal; no se modelan aparte servicio, mora o pago anticipado."
        },
        "help": {
          "down": "Vacío significa 0; entrada inferior al precio y fuera del cuadro.",
          "months": "Entero de 1 a 60; la última cuota ajusta el total al céntimo.",
          "markup": "Recargo único sobre precio menos entrada, no tipo anual."
        },
        "sources": [
          "https://www.consumerfinance.gov/ask-cfpb/what-is-a-buy-now-pay-later-bnpl-loan-en-2119/"
        ],
        "normal": {
          "inputs": {
            "price": 600,
            "down": 100,
            "months": 6,
            "markup": 12
          },
          "expected": {
            "kind": "number",
            "value": 93.33
          },
          "rows": [
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 60
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "€",
          "independentLiteral": "93,33 ₽"
        },
        "boundary": {
          "inputs": {
            "price": 0.04,
            "down": 0,
            "months": 6,
            "markup": 0
          },
          "expected": {
            "kind": "number",
            "value": 0
          },
          "rows": [
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 0.04
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "€",
          "independentLiteral": "0,00 ₽"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 9333.33
        },
        "blankField": "price",
        "domainField": "price",
        "domainInvalid": -1,
        "countFields": [
          "months"
        ]
      }
    ]
  },
  {
    "id": "leverage",
    "category": "finance",
    "defaults": {
      "equity": 50000,
      "leverage": 5,
      "entry": 2400,
      "maintenancePct": 0.5
    },
    "fieldNames": [
      "equity",
      "leverage",
      "entry",
      "maintenancePct"
    ],
    "defaultInactive": [],
    "pages": [
      {
        "locale": "ru",
        "path": "/ru/finance/leverage/",
        "h1": "Калькулятор кредитного плеча",
        "body": {
          "longDescription": "Плечо увеличивает размер позиции: при залоге C и плече L начальная стоимость позиции равна C×L. Для длинной линейной позиции без расходов падение на 1/L от цены входа поглощает начальный залог: при 5× это 20%, при 20× — 5%. Показанный здесь порог использует постоянную поддерживающую сумму, заданную процентом от начальной стоимости позиции. Это учебная модель, а не точная цена ликвидации на бирже: расчёт по текущей стоимости, риск-уровни, mark price, комиссии и режим обеспечения могут давать другой результат.",
          "howToUse": [
            "Введите залог, который вы вносите.",
            "Укажите кратность плеча.",
            "Укажите цену входа в инструмент.",
            "Задайте поддерживающую долю именно начальной стоимости позиции для этой модели; биржевую формулу проверяйте отдельно."
          ],
          "howItWorks": "Позиция N=C×L, количество Q=N/E. Поддерживающая сумма M=N×m/100 остаётся постоянной в этой модели. Из C+Q(P−E)=M получается порог P=E×(1−1/L+m/100), а падение =100/L−m процентов. Требуется m/100<1/L, иначе начального залога уже недостаточно. Без поддерживающей суммы при 1× порог равен нулю; это граница формулы, а не гарантия биржевого механизма. Для короткой позиции, inverse-контракта или текущей стоимости M формула другая.",
          "example": "Залог 50 000, плечо 5×, вход 2400 и поддерживающая доля 0,5% от начальной стоимости дают позицию 250 000 и учебный порог 1932 — падение 19,5%. Биржевой порог с поддержкой от текущей стоимости отличался бы; здесь он не рассчитывается. При входе 100, плече 1× и фиксированной поддерживающей доле 0% модельный порог 0, расстояние 100%. Это предельная алгебраическая точка выбранной модели, а не обещание отсутствия ликвидации на бирже.",
          "faq": [
            {
              "q": "Почему при большем плече ликвидация настолько ближе?",
              "a": "Без поддерживающей суммы и расходов запас до исчерпания начального залога равен 100/L процентов. С положительным m модельный запас 100/L−m. При фиксированном m удвоение плеча не обязано вдвое сокращать этот второй запас; при m≥100/L модель отклоняет исходные условия."
            },
            {
              "q": "Для чего нужна поддерживающая маржа?",
              "a": "Это заданная пользователем доля начальной стоимости позиции, которую модель оставляет как минимальный остаток залога. Реальные площадки могут рассчитывать её от текущей стоимости и использовать риск-уровни или вычеты. Их требования нельзя подставлять сюда без проверки базы."
            },
            {
              "q": "Подходит ли расчёт для короткой позиции?",
              "a": "Арифметика зеркальна, но направление обратное: короткую позицию ликвидирует рост, а не падение. Этот расчёт написан для длинной позиции."
            },
            {
              "q": "Учитываются ли комиссии и фандинг?",
              "a": "Нет. Комиссии, проценты за заём и funding не включены. Funding может списываться или зачисляться в зависимости от контракта и периода; изменение обеспечения и его влияние на биржевой порог нужно оценивать по правилам площадки."
            }
          ],
          "disclaimer": "Показан только лонг с линейным результатом и поддерживающей суммой от начальной стоимости. Формулы биржи могут использовать текущую стоимость, mark price, ступени, комиссии и общий баланс; здесь нет биржевого прогноза или оценки допустимого риска."
        },
        "help": {
          "leverage": "Математическая модель принимает конечное плечо от 1×; доступность на бирже не проверяется.",
          "maintenancePct": "Доля начальной стоимости позиции, фиксированная сумма; должна быть меньше 100/плечо."
        },
        "sources": [
          "https://www.bybit.com/en/help-center/article/UTA-Trading-Rules-Liquidation-Process"
        ],
        "normal": {
          "inputs": {
            "equity": 50000,
            "leverage": 5,
            "entry": 2400,
            "maintenancePct": 0.5
          },
          "expected": {
            "kind": "number",
            "value": 250000
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 1932
              }
            },
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 19.5
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "₽",
          "independentLiteral": "250 000,00 ₽"
        },
        "boundary": {
          "inputs": {
            "equity": 1,
            "leverage": 1,
            "entry": 100,
            "maintenancePct": 0
          },
          "expected": {
            "kind": "number",
            "value": 1
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 0
              }
            },
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 100
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "₽",
          "independentLiteral": "1,00 ₽"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 250000
        },
        "blankField": "equity",
        "domainField": "equity",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "en",
        "path": "/en/finance/leverage-calculator/",
        "h1": "Leverage calculator",
        "body": {
          "longDescription": "Leverage increases the position size: collateral C at leverage L gives initial notional C×L. For a linear long position without costs, a fall of 1/L from entry consumes the initial collateral: 20% at 5× or 5% at 20×. The threshold here assumes a fixed maintenance amount defined as a percentage of initial notional. This is a teaching model, not an exchange liquidation quote: current-notional maintenance, risk tiers, mark price, fees and margin mode can give another result.",
          "howToUse": [
            "Enter the margin you are putting up.",
            "Enter the leverage multiple.",
            "Enter the entry price of the instrument.",
            "Enter maintenance as a share of initial notional for this model; check the venue formula separately."
          ],
          "howItWorks": "Notional N=C×L and quantity Q=N/E. Maintenance M=N×m/100 stays fixed in this model. Solving C+Q(P−E)=M gives threshold P=E×(1−1/L+m/100), with drop 100/L−m percent. Require m/100<1/L so initial collateral exceeds maintenance. At 1× with zero maintenance the threshold is zero: a formula boundary, not a guaranteed exchange mechanism. A short position, inverse contract or maintenance based on current notional needs another formula.",
          "example": "Collateral 50,000, leverage 5×, entry 2,400 and 0.5% maintenance on initial notional give a 250,000 position and model threshold 1,932, a 19.5% drop. A venue using current-notional maintenance has a different threshold and is not simulated here. At entry 100, leverage 1× and fixed maintenance share 0%, the modeled threshold is 0 and distance 100%. This is the limiting point of the chosen algebra, not a promise of no exchange liquidation.",
          "faq": [
            {
              "q": "Why does higher leverage bring liquidation so much closer?",
              "a": "Without maintenance or costs, the move that consumes initial collateral is 100/L percent. With positive m the model cushion is 100/L−m. At fixed m, doubling leverage does not necessarily halve that second cushion; m≥100/L is rejected as initially insufficient collateral."
            },
            {
              "q": "What is the maintenance margin for?",
              "a": "Here it is a user-defined share of initial notional retained as a minimum collateral balance. Real venues can use current notional, risk tiers or deductions instead. Their quoted requirements cannot be substituted without checking the base."
            },
            {
              "q": "Does this apply to short positions too?",
              "a": "The arithmetic mirrors, but the direction reverses: a short is liquidated by a rise, not a fall. This calculation is written for a long position."
            },
            {
              "q": "Are funding and fees included?",
              "a": "No. Trading fees, borrowing charges and funding are excluded. Funding may debit or credit collateral depending on contract and period; its effect on a venue threshold must be assessed under venue rules."
            }
          ],
          "disclaimer": "Only a linear long with maintenance fixed from initial notional is shown. Venues may use current notional, mark price, tiers, fees and shared balances; this is not a venue liquidation forecast or risk assessment."
        },
        "help": {
          "leverage": "Finite model leverage from 1×; venue availability is not checked.",
          "maintenancePct": "Share of initial notional, a fixed amount; must be below 100/leverage."
        },
        "sources": [
          "https://www.bybit.com/en/help-center/article/UTA-Trading-Rules-Liquidation-Process"
        ],
        "normal": {
          "inputs": {
            "equity": 50000,
            "leverage": 5,
            "entry": 2400,
            "maintenancePct": 0.5
          },
          "expected": {
            "kind": "number",
            "value": 250000
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 1932
              }
            },
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 19.5
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "$",
          "independentLiteral": "250 000,00 ₽"
        },
        "boundary": {
          "inputs": {
            "equity": 1,
            "leverage": 1,
            "entry": 100,
            "maintenancePct": 0
          },
          "expected": {
            "kind": "number",
            "value": 1
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 0
              }
            },
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 100
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "$",
          "independentLiteral": "1,00 ₽"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 250000
        },
        "blankField": "equity",
        "domainField": "equity",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "uk",
        "path": "/uk/finansy/kredytne-plege/",
        "h1": "Калькулятор кредитного плеча",
        "body": {
          "longDescription": "Плече збільшує розмір позиції: за застави C та плеча L початкова вартість становить C×L. Для лінійної довгої позиції без витрат падіння на 1/L від ціни входу поглинає початкову заставу: 20% за 5× або 5% за 20×. Поріг тут використовує сталу підтримувальну суму як відсоток від початкової вартості позиції. Це навчальна модель, не точна біржова ціна ліквідації: поточна вартість, рівні ризику, mark price, комісії та режим забезпечення можуть змінити результат.",
          "howToUse": [
            "Введіть розмір застави.",
            "Задайте плече й ціну входу.",
            "Задайте підтримувальну частку саме початкової вартості позиції для цієї моделі; біржову формулу перевіряйте окремо."
          ],
          "howItWorks": "Вартість N=C×L, кількість Q=N/E. Підтримувальна сума M=N×m/100 у цій моделі стала. Із C+Q(P−E)=M отримуємо поріг P=E×(1−1/L+m/100), падіння 100/L−m відсотків. Потрібно m/100<1/L, інакше початкової застави вже недостатньо. За 1× та нульової підтримувальної суми поріг нульовий: це межа формули, не гарантія біржового механізму. Коротка позиція, inverse-контракт або підтримка від поточної вартості потребують іншої формули.",
          "example": "Застава 50 000, плече 5×, вхід 2400 та підтримувальна частка 0,5% від початкової вартості дають позицію 250 000 і навчальний поріг 1932 — падіння 19,5%. Біржовий поріг із підтримкою від поточної вартості був би іншим і тут не розраховується. За входу 100, плеча 1× і фіксованої підтримувальної частки 0% модельний поріг 0, відстань 100%. Це гранична точка обраної алгебри, не обіцянка відсутності біржової ліквідації.",
          "faq": [
            {
              "q": "Що таке ціна ліквідації?",
              "a": "Показаний поріг — ціна, за якої модельний залишок застави дорівнює сталій підтримувальній сумі M. Біржова ліквідація залежить від mark price, режиму маржі та правил контракту; це число не є гарантією виконання за заданою ціною."
            },
            {
              "q": "Чому плече збільшує ризик сильніше, ніж прибуток?",
              "a": "Плече однаково масштабує прибуток і збиток від зміни ціни відносно початкової застави. Ліквідація може закрити позицію до подальшого відновлення ціни. Калькулятор показує лише навчальний поріг і не обмежує фактичний збиток величиною застави."
            },
            {
              "q": "Що таке підтримувальна маржа?",
              "a": "У цьому калькуляторі це відсоток початкової вартості позиції, що задає сталу мінімальну суму застави. На майданчику база й рівні вимог можуть бути іншими; їх треба перевірити за контрактом, а не вважати цю формулу універсальною."
            },
            {
              "q": "Чи можна втратити більше за заставу?",
              "a": "Розрахунок не визначає межі фактичних збитків. Прослизання, комісії, режим забезпечення й правила контракту можуть змінити результат; біржові захисні механізми тут не моделюються."
            }
          ],
          "disclaimer": "Показано лише лонг із лінійним результатом і підтримувальною сумою від початкової вартості. Біржа може використовувати поточну вартість, mark price, ступені, комісії та спільний баланс; це не біржовий прогноз чи оцінка ризику."
        },
        "help": {
          "leverage": "Модель приймає скінченне плече від 1×; доступність на біржі не перевіряється.",
          "maintenancePct": "Частка початкової вартості, фіксована сума; має бути меншою за 100/плече."
        },
        "sources": [
          "https://www.bybit.com/en/help-center/article/UTA-Trading-Rules-Liquidation-Process"
        ],
        "normal": {
          "inputs": {
            "equity": 50000,
            "leverage": 5,
            "entry": 2400,
            "maintenancePct": 0.5
          },
          "expected": {
            "kind": "number",
            "value": 250000
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 1932
              }
            },
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 19.5
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "₴",
          "independentLiteral": "250 000,00 ₽"
        },
        "boundary": {
          "inputs": {
            "equity": 1,
            "leverage": 1,
            "entry": 100,
            "maintenancePct": 0
          },
          "expected": {
            "kind": "number",
            "value": 1
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 0
              }
            },
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 100
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "₴",
          "independentLiteral": "1,00 ₽"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 250000
        },
        "blankField": "equity",
        "domainField": "equity",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "de",
        "path": "/de/finanzen/hebel-position-rechner/",
        "h1": "Hebelrechner",
        "body": {
          "longDescription": "Der Hebel erhöht die Positionsgröße: Sicherheit C mit Hebel L ergibt den Anfangswert C×L. Bei einer linearen Long-Position ohne Kosten verbraucht ein Rückgang um 1/L ab Einstieg die Anfangssicherheit:20% bei 5× oder 5% bei 20×. Der hier gezeigte Schwellenpreis verwendet einen festen Erhaltungsbetrag als Prozentsatz des anfänglichen Positionswerts. Es ist ein Lehrmodell, kein Liquidationskurs einer Börse: Bewertung zum aktuellen Kurs, Risikostufen, Mark Price, Gebühren und Margin-Modus können andere Werte ergeben.",
          "howToUse": [
            "Trage die Sicherheit ein, die du einsetzt.",
            "Trage den Hebelfaktor ein.",
            "Trage den Einstiegspreis des Instruments ein.",
            "Gib den Erhaltungsanteil am anfänglichen Positionswert für dieses Modell ein; prüfe die Plattformformel gesondert."
          ],
          "howItWorks": "Positionswert N=C×L, Menge Q=N/E. Der Erhaltungsbetrag M=N×m/100 bleibt im Modell konstant. Aus C+Q(P−E)=M folgt P=E×(1−1/L+m/100); der Rückgang beträgt 100/L−m Prozent. Es muss m/100<1/L gelten, sonst reicht die Anfangssicherheit bereits nicht. Bei 1× und null Erhaltungsbetrag ist der Schwellenpreis null; dies ist eine Formelgrenze, kein garantierter Börsenablauf. Für Short, inverse Kontrakte oder Erhaltung auf Basis des aktuellen Positionswerts gilt eine andere Formel.",
          "example": "Sicherheit 5000, Hebel 5×, Einstieg 2400 und 0,5% Erhaltung auf den Anfangswert ergeben eine Position 25000 und den Modellschwellenpreis 1932, also 19,5% Rückgang. Eine Plattform mit Erhaltung auf den aktuellen Positionswert hat einen anderen Schwellenpreis und wird hier nicht simuliert. Bei Einstieg 100, Hebel 1× und festem Erhaltungsanteil 0% ist die Modellschwelle 0, Abstand 100%. Das ist ein algebraischer Grenzpunkt, keine Zusage fehlender Börsenliquidation.",
          "faq": [
            {
              "q": "Warum rückt ein höherer Hebel die Liquidation so viel näher?",
              "a": "Ohne Erhaltungsbetrag und Kosten verbraucht ein Rückgang um 100/L Prozent die Anfangssicherheit. Bei positivem m ist das Modellpolster 100/L−m. Bei festem m halbiert doppelter Hebel dieses zweite Polster nicht unbedingt; m≥100/L wird als anfangs unzureichende Sicherheit abgewiesen."
            },
            {
              "q": "Wozu die Erhaltungsmarge?",
              "a": "Hier ist dies ein vom Nutzer gewählter Anteil des Anfangswerts, der als minimale verbleibende Sicherheit dient. Reale Plattformen können aktuelle Werte, Risikostufen oder Abzüge verwenden. Ihre Anforderungen dürfen nur bei passender Bezugsbasis eingesetzt werden."
            },
            {
              "q": "Gilt das auch für Short-Positionen?",
              "a": "Die Rechnung spiegelt sich, aber die Richtung kehrt sich um: eine Short-Position wird von einem Anstieg liquidiert und nicht von einem Rückgang. Diese Rechnung ist für eine Long-Position geschrieben."
            },
            {
              "q": "Sind Finanzierung und Gebühren enthalten?",
              "a": "Nein. Handelsgebühren, Kreditzinsen und Funding fehlen. Funding kann je nach Vertrag und Zeitraum belasten oder gutschreiben; die Wirkung auf die Handelsschwelle ist nach den Plattformregeln zu bestimmen."
            }
          ],
          "disclaimer": "Gezeigt wird nur ein linearer Long mit Erhaltung aus Anfangsnotional. Handelsplätze können aktuelles Notional, Mark Price, Stufen, Gebühren und gemeinsame Guthaben nutzen; dies prognostiziert keine Börsenliquidation und bewertet kein Risiko."
        },
        "help": {
          "leverage": "Endlicher Modellhebel ab 1×; Verfügbarkeit am Handelsplatz ungeprüft.",
          "maintenancePct": "Anteil des Anfangsnotionals, fester Betrag; kleiner als 100/Hebel."
        },
        "sources": [
          "https://www.bybit.com/en/help-center/article/UTA-Trading-Rules-Liquidation-Process"
        ],
        "normal": {
          "inputs": {
            "equity": 5000,
            "leverage": 5,
            "entry": 2400,
            "maintenancePct": 0.5
          },
          "expected": {
            "kind": "number",
            "value": 25000
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 1932
              }
            },
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 19.5
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "€",
          "independentLiteral": "25 000,00 ₽"
        },
        "boundary": {
          "inputs": {
            "equity": 1,
            "leverage": 1,
            "entry": 100,
            "maintenancePct": 0
          },
          "expected": {
            "kind": "number",
            "value": 1
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 0
              }
            },
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 100
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "€",
          "independentLiteral": "1,00 ₽"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 250000
        },
        "blankField": "equity",
        "domainField": "equity",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "es",
        "path": "/es/finanzas/calculadora-de-apalancamiento/",
        "h1": "Calculadora de apalancamiento",
        "body": {
          "longDescription": "El apalancamiento aumenta el tamaño: garantía C y múltiplo L dan un nominal inicial C×L. En una posición larga lineal sin gastos, una caída de 1/L desde la entrada consume la garantía inicial: 20% a 5× o 5% a 20×. El umbral mostrado usa un mantenimiento fijo como porcentaje del nominal inicial. Es un modelo educativo, no un precio de liquidación de una plataforma: el nominal actual, los niveles de riesgo, mark price, comisiones y modalidad de margen pueden dar otro resultado.",
          "howToUse": [
            "Introduce la garantía que vas a aportar.",
            "Introduce el múltiplo de apalancamiento.",
            "Introduce el precio de entrada del instrumento.",
            "Introduce mantenimiento como porcentaje del nominal inicial para este modelo; comprueba aparte la fórmula de la plataforma."
          ],
          "howItWorks": "Nominal N=C×L y cantidad Q=N/E. El mantenimiento M=N×m/100 permanece fijo en este modelo. Resolver C+Q(P−E)=M da P=E×(1−1/L+m/100), con caída 100/L−m por ciento. Se exige m/100<1/L; de lo contrario la garantía inicial ya sería insuficiente. A 1× y mantenimiento cero, el umbral es cero: una frontera de la fórmula, no un mecanismo garantizado de una plataforma. Cortos, contratos inversos y mantenimiento sobre nominal actual necesitan otra fórmula.",
          "example": "Garantía 5000, apalancamiento 5×, entrada 2400 y mantenimiento 0,5% sobre nominal inicial dan una posición 25000 y umbral del modelo 1932: caída 19,5%. Una plataforma con mantenimiento sobre nominal actual usa otro umbral, que aquí no se simula. Con entrada 100, apalancamiento 1× y mantenimiento fijo 0%, umbral modelado 0 y distancia 100%. Es un límite algebraico, no una promesa de ausencia de liquidación en la plataforma.",
          "faq": [
            {
              "q": "¿Por qué un apalancamiento mayor acerca tanto la liquidación?",
              "a": "Sin mantenimiento ni gastos, un movimiento del 100/L por ciento consume la garantía inicial. Con m positivo, el colchón del modelo es 100/L−m. Manteniendo m, duplicar el apalancamiento no necesariamente divide ese segundo colchón por dos; se rechaza m≥100/L por garantía inicialmente insuficiente."
            },
            {
              "q": "¿Para qué sirve el margen de mantenimiento?",
              "a": "Aquí es una proporción del nominal inicial elegida por el usuario que se conserva como garantía mínima. Las plataformas pueden usar nominal actual, niveles de riesgo o deducciones. No se deben trasladar sus requisitos sin comprobar la base."
            },
            {
              "q": "¿Vale también para posiciones cortas?",
              "a": "La aritmética es especular, pero el sentido se invierte: un corto se liquida con una subida y no con una caída. Este cálculo está escrito para una posición larga."
            },
            {
              "q": "¿Están incluidos el funding y las comisiones?",
              "a": "No. Se excluyen comisiones, costes de préstamo y funding. El funding puede cargar o abonar garantía según contrato y periodo; su efecto en el umbral real requiere las reglas de la plataforma."
            }
          ],
          "disclaimer": "Solo se muestra largo lineal con mantenimiento fijado sobre el nocional inicial. Las plataformas pueden usar nocional actual, mark price, tramos, comisiones y saldo compartido; no es una previsión de liquidación ni evaluación de riesgo."
        },
        "help": {
          "leverage": "Apalancamiento finito desde 1×; no se verifica disponibilidad real.",
          "maintenancePct": "Porción del nocional inicial, importe fijo; menor que 100/apalancamiento."
        },
        "sources": [
          "https://www.bybit.com/en/help-center/article/UTA-Trading-Rules-Liquidation-Process"
        ],
        "normal": {
          "inputs": {
            "equity": 5000,
            "leverage": 5,
            "entry": 2400,
            "maintenancePct": 0.5
          },
          "expected": {
            "kind": "number",
            "value": 25000
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 1932
              }
            },
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 19.5
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "€",
          "independentLiteral": "25 000,00 ₽"
        },
        "boundary": {
          "inputs": {
            "equity": 1,
            "leverage": 1,
            "entry": 100,
            "maintenancePct": 0
          },
          "expected": {
            "kind": "number",
            "value": 1
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 0
              }
            },
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 100
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "€",
          "independentLiteral": "1,00 ₽"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 250000
        },
        "blankField": "equity",
        "domainField": "equity",
        "domainInvalid": -1,
        "countFields": []
      }
    ]
  },
  {
    "id": "market-cap",
    "category": "finance",
    "defaults": {
      "mode": "cap",
      "shares": 1000000,
      "price": 250,
      "cap": 250000000
    },
    "fieldNames": [
      "mode",
      "shares",
      "price",
      "cap"
    ],
    "defaultInactive": [
      "cap"
    ],
    "pages": [
      {
        "locale": "ru",
        "path": "/ru/finance/market-cap/",
        "h1": "Калькулятор рыночной капитализации",
        "body": {
          "longDescription": "Считает рыночную капитализацию — число акций в обращении, умноженное на цену одной. Это то, во сколько рынок оценивает компанию целиком, и по этому числу компании относят к крупным, средним или малым. Обратный ход даёт цену акции по известной капитализации. Важно, что капитализация — не стоимость бизнеса: она не учитывает долг и денежные средства, для этого есть отдельный показатель. Число акций берётся целым для одного момента времени; взвешенное среднее для расчёта EPS и будущие акции не подменяют этот показатель. Цена и капитализация должны быть в одной валюте. Оценка акций не является ценой поглощения, и премия за контроль здесь не задаётся.",
          "howToUse": [
            "Выберите, что нужно найти.",
            "Введите число акций и вторую известную величину.",
            "Прочитайте результат."
          ],
          "howItWorks": "Капитализация = число акций в обращении × цена одной акции; отсюда цена = капитализация ÷ число акций.",
          "example": "Миллион акций по 250 ₽ дают капитализацию 250 000 000 ₽. Обратная проверка: капитализация 1000 и 10 акций дают цену 100. Если число акций 0 или 10,5, расчёт не определён для этого контракта целых акций и возвращает ошибку.",
          "faq": [
            {
              "q": "Капитализация — это стоимость компании?",
              "a": "Не совсем. Это оценка её акций рынком. Стоимость бизнеса дополнительно учитывает долг и денежные средства, и для неё используется другой показатель."
            },
            {
              "q": "Какие акции считать — все выпущенные или в обращении?",
              "a": "В обращении. Выкупленные компанией акции в расчёт капитализации обычно не входят, поэтому число берут из отчётности, а не из устава."
            },
            {
              "q": "Меняется ли капитализация в течение дня?",
              "a": "Да, вместе с ценой акции. Расчёт даёт снимок на введённую цену и не подтягивает котировки."
            },
            {
              "q": "Что такое разводнённая капитализация?",
              "a": "Оценка с учётом будущих акций — опционов и конвертируемых бумаг. Здесь она не считается: используется текущее число акций в обращении."
            }
          ],
          "disclaimer": "Капитализация — стоимость указанного класса текущих акций по одной введённой цене. Долг, денежные средства, другие классы, будущая эмиссия и премия за контроль не добавляются; котировки и реестр акций автоматически не проверяются."
        },
        "help": {
          "shares": "Положительное целое число акций в обращении; не среднее для EPS.",
          "price": "Одна введённая цена за тот же класс акций; котировка не загружается."
        },
        "sources": [
          "https://www.investor.gov/introduction-investing/investing-basics/glossary/market-capitalization"
        ],
        "normal": {
          "inputs": {
            "mode": "cap",
            "shares": 1000000,
            "price": 250,
            "cap": 250000000
          },
          "expected": {
            "kind": "number",
            "value": 250000000
          },
          "rows": [],
          "inactive": [
            "cap"
          ],
          "rowCount": 3,
          "primaryUnit": "₽",
          "independentLiteral": "250 000 000,00 ₽"
        },
        "boundary": {
          "inputs": {
            "mode": "price",
            "shares": 10,
            "price": 250,
            "cap": 1000
          },
          "expected": {
            "kind": "number",
            "value": 100
          },
          "rows": [],
          "inactive": [
            "price"
          ],
          "rowCount": 3,
          "primaryUnit": "₽",
          "independentLiteral": "100,00 ₽"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 250000000
        },
        "blankField": "shares",
        "domainField": "shares",
        "domainInvalid": -1,
        "countFields": [
          "shares"
        ]
      },
      {
        "locale": "en",
        "path": "/en/finance/market-cap-calculator/",
        "h1": "Market cap calculator",
        "body": {
          "longDescription": "Computes market capitalisation — shares outstanding times the price of one. It is what the market values the whole company at, and the figure by which companies are sorted into large, mid and small cap. The reverse direction gives the share price from a known capitalisation. Note that market cap is not the value of the business: it ignores debt and cash, for which a separate measure exists. Use a whole outstanding-share count at a single point in time, not the weighted average used for EPS or future diluted shares. Price and capitalisation must use one currency. Equity market value is not an acquisition price, and no control premium is assumed.",
          "howToUse": [
            "Choose what you need.",
            "Enter the share count and the other known value.",
            "Read the result."
          ],
          "howItWorks": "Market cap = shares outstanding × price per share; hence price = market cap ÷ shares outstanding.",
          "example": "A million shares at 250 each give a capitalisation of 250,000,000. Reverse check: capitalization 1000 and 10 shares give price 100. Counts 0 or 10.5 are outside this whole-share contract and return an error.",
          "faq": [
            {
              "q": "Is market cap the value of the company?",
              "a": "Not quite. It is the market’s valuation of its shares. The value of the business also accounts for debt and cash, and uses a different measure."
            },
            {
              "q": "Which shares count — issued or outstanding?",
              "a": "Outstanding. Shares bought back by the company are normally excluded, so take the number from the accounts rather than the charter."
            },
            {
              "q": "Does market cap change during the day?",
              "a": "Yes, along with the share price. This gives a snapshot at the price you enter; no quotes are fetched."
            },
            {
              "q": "What is fully diluted market cap?",
              "a": "A valuation that includes future shares from options and convertibles. It is not computed here — the current outstanding count is used."
            }
          ],
          "disclaimer": "Capitalization values the specified current share class at one entered price. Debt, cash, other classes, future issuance and control premiums are not added; quotes and the share register are not verified automatically."
        },
        "help": {
          "shares": "Positive whole shares outstanding, not the weighted EPS average.",
          "price": "One entered quote for the same share class; no live quote is fetched."
        },
        "sources": [
          "https://www.investor.gov/introduction-investing/investing-basics/glossary/market-capitalization"
        ],
        "normal": {
          "inputs": {
            "mode": "cap",
            "shares": 1000000,
            "price": 250,
            "cap": 250000000
          },
          "expected": {
            "kind": "number",
            "value": 250000000
          },
          "rows": [],
          "inactive": [
            "cap"
          ],
          "rowCount": 3,
          "primaryUnit": "$",
          "independentLiteral": "250 000 000,00 ₽"
        },
        "boundary": {
          "inputs": {
            "mode": "price",
            "shares": 10,
            "price": 250,
            "cap": 1000
          },
          "expected": {
            "kind": "number",
            "value": 100
          },
          "rows": [],
          "inactive": [
            "price"
          ],
          "rowCount": 3,
          "primaryUnit": "$",
          "independentLiteral": "100,00 ₽"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 250000000
        },
        "blankField": "shares",
        "domainField": "shares",
        "domainInvalid": -1,
        "countFields": [
          "shares"
        ]
      },
      {
        "locale": "uk",
        "path": "/uk/finansy/rynkova-kapitalizatsiya/",
        "h1": "Калькулятор ринкової капіталізації",
        "body": {
          "longDescription": "Ринкова капіталізація множить кількість акцій в обігу на ціну однієї. Це не вартість компанії й не сума, за яку її можна купити: капіталізація змінюється щохвилини разом із котируванням, а ціна угоди з великим пакетом залежить від умов продажу. Беріть цілу кількість акцій в обігу на одну дату, а не середньозважену кількість для EPS чи майбутні акції. Ціна й капіталізація мають бути в одній валюті. Ринкова оцінка акцій не визначає ціну поглинання; премія за контроль тут не задається.",
          "howToUse": [
            "Виберіть, що шукати: капіталізацію чи ціну акції.",
            "Введіть кількість акцій в обігу.",
            "Введіть другу відому величину."
          ],
          "howItWorks": "Капіталізація дорівнює кількість акцій в обігу × ціна однієї акції. Звідси ціна = капіталізація ÷ кількість акцій. Береться саме кількість в обігу, а не всі випущені: викуплені компанією акції не враховуються.",
          "example": "Мільйон акцій по 250 ₴ дають капіталізацію 250 000 000 ₴. Зростання ціни на 10 % підняло б її до 275 млн без жодних змін у бізнесі. Зворотна перевірка: капіталізація 1000 і 10 акцій дають ціну 100. Кількість 0 чи 10,5 не відповідає цьому контракту цілих акцій і повертає помилку.",
          "faq": [
            {
              "q": "Чи дорівнює капіталізація вартості компанії?",
              "a": "Капіталізація оцінює поточні акції в обігу, але не додає борг і не віднімає грошові кошти. У спрощеній моделі enterprise value їх враховують окремо; інші складові, класи акцій і умови угоди також можуть мати значення."
            },
            {
              "q": "Чому беруть акції в обігу, а не всі випущені?",
              "a": "Бо викуплені компанією акції не торгуються й не належать інвесторам. Включення їх завищило б капіталізацію."
            },
            {
              "q": "Чи можна купити компанію за капіталізацію?",
              "a": "Капіталізація — добуток поточної ціни та акцій в обігу, а не гарантована ціна придбання компанії. Велика угода, ліквідність, контроль і переговори можуть змінити ціну; універсального відсотка премії цей розрахунок не встановлює."
            },
            {
              "q": "Навіщо ділити компанії за розміром капіталізації?",
              "a": "Розмір капіталізації допомагає описувати компанії та склад індексів. Сам по собі він не визначає майбутнього зростання, волатильності чи ліквідності окремої акції; калькулятор не оцінює ці ризики."
            }
          ],
          "disclaimer": "Капіталізація оцінює вказаний клас поточних акцій за однією введеною ціною. Борг, кошти, інші класи, майбутня емісія та премія за контроль не додаються; котирування й реєстр не перевіряються автоматично."
        },
        "help": {
          "shares": "Додатне ціле число акцій в обігу, не середнє для EPS.",
          "price": "Одна введена ціна того самого класу; котирування не завантажується."
        },
        "sources": [
          "https://www.investor.gov/introduction-investing/investing-basics/glossary/market-capitalization"
        ],
        "normal": {
          "inputs": {
            "mode": "cap",
            "shares": 1000000,
            "price": 250,
            "cap": 250000000
          },
          "expected": {
            "kind": "number",
            "value": 250000000
          },
          "rows": [],
          "inactive": [
            "cap"
          ],
          "rowCount": 3,
          "primaryUnit": "₴",
          "independentLiteral": "250 000 000,00 ₽"
        },
        "boundary": {
          "inputs": {
            "mode": "price",
            "shares": 10,
            "price": 250,
            "cap": 1000
          },
          "expected": {
            "kind": "number",
            "value": 100
          },
          "rows": [],
          "inactive": [
            "price"
          ],
          "rowCount": 3,
          "primaryUnit": "₴",
          "independentLiteral": "100,00 ₽"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 250000000
        },
        "blankField": "shares",
        "domainField": "shares",
        "domainInvalid": -1,
        "countFields": [
          "shares"
        ]
      },
      {
        "locale": "de",
        "path": "/de/finanzen/marktkapitalisierung-rechner/",
        "h1": "Rechner für die Marktkapitalisierung",
        "body": {
          "longDescription": "Berechnet die Marktkapitalisierung — ausstehende Aktien mal dem Kurs einer Aktie. Sie ist das, womit der Markt das ganze Unternehmen bewertet, und die Zahl, nach der Unternehmen in große, mittlere und kleine Werte sortiert werden. Die umgekehrte Richtung ergibt den Aktienkurs aus einer bekannten Kapitalisierung. Beachte, dass die Marktkapitalisierung nicht der Wert des Geschäfts ist: sie lässt Schulden und Barmittel außer Acht, wofür es eine eigene Kennzahl gibt. Verwende eine ganze Zahl ausstehender Aktien zu einem Zeitpunkt, nicht den gewichteten EPS-Durchschnitt oder künftig verwässernde Aktien. Kurs und Kapitalisierung müssen dieselbe Währung verwenden. Der Marktwert des Eigenkapitals legt keinen Übernahmepreis fest; eine Kontrollprämie wird nicht unterstellt.",
          "howToUse": [
            "Wähle, was du brauchst.",
            "Trage die Aktienzahl und den anderen bekannten Wert ein.",
            "Lies das Ergebnis ab."
          ],
          "howItWorks": "Marktkapitalisierung = ausstehende Aktien × Kurs je Aktie; daraus Kurs = Kapitalisierung ÷ ausstehende Aktien.",
          "example": "Eine Million Aktien zu je 25 € ergeben eine Kapitalisierung von 25 000 000 €. Rückprüfung: Kapitalisierung 1000 und 10 Aktien ergeben Kurs 100. Stückzahlen 0 oder 10,5 liegen außerhalb dieses Ganzaktienmodells und erzeugen einen Fehler.",
          "faq": [
            {
              "q": "Ist die Marktkapitalisierung der Wert des Unternehmens?",
              "a": "Nicht ganz. Sie ist die Bewertung seiner Aktien durch den Markt. Der Wert des Geschäfts berücksichtigt zusätzlich Schulden und Barmittel und nutzt eine andere Kennzahl."
            },
            {
              "q": "Welche Aktien zählen — ausgegebene oder ausstehende?",
              "a": "Die ausstehenden. Vom Unternehmen zurückgekaufte Aktien bleiben gewöhnlich außen vor, nimm die Zahl also aus dem Abschluss und nicht aus der Satzung."
            },
            {
              "q": "Ändert sich die Marktkapitalisierung im Tagesverlauf?",
              "a": "Ja, zusammen mit dem Aktienkurs. Hier steht eine Momentaufnahme zu dem Kurs, den du einträgst; es werden keine Kurse abgerufen."
            },
            {
              "q": "Was ist die voll verwässerte Kapitalisierung?",
              "a": "Eine Bewertung, die künftige Aktien aus Optionen und Wandelanleihen einbezieht. Sie wird hier nicht berechnet — verwendet wird die derzeitige Zahl der ausstehenden Aktien."
            }
          ],
          "disclaimer": "Die Kapitalisierung bewertet die angegebene aktuelle Aktienklasse zu einem Kurs. Schulden, Bargeld, andere Klassen, künftige Ausgabe und Kontrollprämien werden nicht addiert; Kurse und Register werden nicht automatisch geprüft."
        },
        "help": {
          "shares": "Positive ganze ausstehende Aktien, kein EPS-Durchschnitt.",
          "price": "Ein eingegebener Kurs derselben Klasse; kein Live-Abruf."
        },
        "sources": [
          "https://www.investor.gov/introduction-investing/investing-basics/glossary/market-capitalization"
        ],
        "normal": {
          "inputs": {
            "mode": "cap",
            "shares": 1000000,
            "price": 25,
            "cap": 250000000
          },
          "expected": {
            "kind": "number",
            "value": 25000000
          },
          "rows": [],
          "inactive": [
            "cap"
          ],
          "rowCount": 3,
          "primaryUnit": "€",
          "independentLiteral": "25 000 000,00 ₽"
        },
        "boundary": {
          "inputs": {
            "mode": "price",
            "shares": 10,
            "price": 250,
            "cap": 1000
          },
          "expected": {
            "kind": "number",
            "value": 100
          },
          "rows": [],
          "inactive": [
            "price"
          ],
          "rowCount": 3,
          "primaryUnit": "€",
          "independentLiteral": "100,00 ₽"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 250000000
        },
        "blankField": "shares",
        "domainField": "shares",
        "domainInvalid": -1,
        "countFields": [
          "shares"
        ]
      },
      {
        "locale": "es",
        "path": "/es/finanzas/capitalizacion-bursatil/",
        "h1": "Calculadora de capitalización bursátil",
        "body": {
          "longDescription": "Calcula la capitalización bursátil: las acciones en circulación por el precio de una. Es lo que el mercado valora la empresa entera, y la cifra por la que las empresas se clasifican en gran, mediana y pequeña capitalización. El sentido inverso da el precio de la acción a partir de una capitalización conocida. Ten en cuenta que la capitalización no es el valor del negocio: ignora la deuda y la caja, para lo que existe otra medida. Usa un número entero de acciones en circulación en una fecha, no la media ponderada del BPA ni futuras acciones diluidas. Precio y capitalización deben estar en la misma moneda. El valor de mercado del capital no determina un precio de adquisición; no se supone una prima de control.",
          "howToUse": [
            "Elige qué necesitas.",
            "Introduce el número de acciones y el otro valor conocido.",
            "Consulta el resultado."
          ],
          "howItWorks": "Capitalización = acciones en circulación × precio por acción; de ahí, precio = capitalización ÷ acciones en circulación.",
          "example": "Un millón de acciones a 250 cada una dan una capitalización de 250 000 000. Comprobación inversa: capitalización 1000 y 10 acciones dan precio 100. Cantidades 0 o 10,5 no cumplen este contrato de acciones enteras y devuelven error.",
          "faq": [
            {
              "q": "¿La capitalización es el valor de la empresa?",
              "a": "No del todo. Es la valoración que el mercado hace de sus acciones. El valor del negocio tiene en cuenta además la deuda y la caja, y usa otra medida."
            },
            {
              "q": "¿Qué acciones cuentan, las emitidas o las que están en circulación?",
              "a": "Las que están en circulación. Las acciones recompradas por la empresa suelen excluirse, así que toma el número de las cuentas y no de los estatutos."
            },
            {
              "q": "¿La capitalización cambia durante el día?",
              "a": "Sí, junto con el precio de la acción. Esto da una instantánea al precio que introduzcas; no se consultan cotizaciones."
            },
            {
              "q": "¿Qué es la capitalización totalmente diluida?",
              "a": "Una valoración que incluye las acciones futuras de opciones y convertibles. Aquí no se calcula: se usa el número actual en circulación."
            }
          ],
          "disclaimer": "La capitalización valora la clase de acciones actual indicada a un precio. No añade deuda, efectivo, otras clases, futura emisión ni prima de control; no verifica automáticamente cotizaciones ni registro."
        },
        "help": {
          "shares": "Acciones en circulación enteras positivas, no media ponderada del BPA.",
          "price": "Un precio de la misma clase; no se obtiene cotización en vivo."
        },
        "sources": [
          "https://www.investor.gov/introduction-investing/investing-basics/glossary/market-capitalization"
        ],
        "normal": {
          "inputs": {
            "mode": "cap",
            "shares": 1000000,
            "price": 250,
            "cap": 250000000
          },
          "expected": {
            "kind": "number",
            "value": 250000000
          },
          "rows": [],
          "inactive": [
            "cap"
          ],
          "rowCount": 3,
          "primaryUnit": "€",
          "independentLiteral": "250 000 000,00 ₽"
        },
        "boundary": {
          "inputs": {
            "mode": "price",
            "shares": 10,
            "price": 250,
            "cap": 1000
          },
          "expected": {
            "kind": "number",
            "value": 100
          },
          "rows": [],
          "inactive": [
            "price"
          ],
          "rowCount": 3,
          "primaryUnit": "€",
          "independentLiteral": "100,00 ₽"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 250000000
        },
        "blankField": "shares",
        "domainField": "shares",
        "domainInvalid": -1,
        "countFields": [
          "shares"
        ]
      }
    ]
  },
  {
    "id": "max-loan",
    "category": "finance",
    "defaults": {
      "income": 120000,
      "dtiPct": 40,
      "rate": 18,
      "years": 20
    },
    "fieldNames": [
      "income",
      "dtiPct",
      "rate",
      "years"
    ],
    "defaultInactive": [],
    "pages": [
      {
        "locale": "ru",
        "path": "/ru/finance/max-loan/",
        "h1": "Калькулятор максимальной суммы кредита",
        "body": {
          "longDescription": "Решает задачу, обратную обычному кредитному калькулятору: тот идёт от суммы к платежу, а этот — от посильного платежа к сумме. Сначала из дохода и допустимой долговой нагрузки получается платёж, затем сумма как приведённая стоимость аннуитета. При нулевой ставке формула делится на нуль, поэтому предел взят отдельной ветвью: без процентов сумма равна просто сумме всех платежей. Важно понимать, что результат — это потолок по формуле, а не одобренная сумма: банк смотрит ещё на кредитную историю, стаж, состав семьи и залог, а эти условия в модель не включены.",
          "howToUse": [
            "Введите ежемесячный доход.",
            "Укажите долю дохода, которую готовы отдавать банку.",
            "Введите ставку и срок кредита.",
            "Результат — потолок по формуле, а не решение банка."
          ],
          "howItWorks": "При доходе Y и выбранной доле d% месячный платёж P=Y×d/100. Срок n=round(12×лет), минимум один месяц. Для постоянной номинальной ставки r% годовых i=r/1200; сумма A=P×[1−(1+i)^−n]/i, при i=0 A=P×n. Всего планируется P×n, проценты равны этой сумме минус A. Платежи предполагаются в конце месяца, без комиссий, страхования, изменения ставки или договорного округления графика.",
          "example": "При доходе 120 000 ₽, нагрузке 40 %, ставке 18 % и сроке 20 лет максимальная сумма — 3 110 195,14 ₽. При доходе 1000, доле 30%, нулевой ставке и одном году платёж 300 даёт сумму 3600 и проценты 0. Срок 0,1 года округляется до одного месяца: сумма 300, а не 360.",
          "faq": [
            {
              "q": "Какую долговую нагрузку выбрать?",
              "a": "Долю выбирают для конкретной задачи; модель не объявляет 40–50% нормативом или безопасным пределом. Если это общий бюджет всех кредитов, сначала учтите платежи по существующим долгам и вводите только оставшуюся долю для нового кредита. Обязательные расходы домохозяйства здесь не проверяются."
            },
            {
              "q": "Одобрит ли банк рассчитанную сумму?",
              "a": "Нет. Это приведённая стоимость выбранных платежей при заданной ставке и сроке. Решение кредитора, подтверждение дохода, существующие обязательства и обеспечение остаются за пределами модели; результат не является предложением или гарантией одобрения."
            },
            {
              "q": "Почему при большем сроке сумма растёт не пропорционально?",
              "a": "Потому что каждый следующий платёж дисконтируется сильнее предыдущего. При ставке 18 % удвоение срока с 10 до 20 лет добавляет к сумме заметно меньше половины."
            },
            {
              "q": "Как ставка влияет на доступную сумму?",
              "a": "При тех же 240 ежемесячных платежах снижение номинальной ставки с 18% до 12% увеличивает приведённую сумму примерно на 40,16%. Эффект зависит от срока; это сравнение формул без комиссий и изменения кредитных условий."
            },
            {
              "q": "Считать доход до налога или после?",
              "a": "Для показателя DTI в образовательном определении CFPB используется доход до налогов и удержаний. Если считаете личный бюджет от суммы на руки, используйте процент от той же чистой базы и не сравнивайте его напрямую с gross-DTI. Требования кредитора проверяются отдельно; язык страницы не определяет страну договора."
            }
          ],
          "disclaimer": "Сумма — приведённая стоимость выбранных платежей, не допустимый или безопасный кредит. Не проверяются обязательные расходы, существующие долги, кредитоспособность и правила банка; номинальная ставка не заменяет полную стоимость договора."
        },
        "help": {
          "income": "Выберите единую базу дохода и процента; gross-DTI использует доход до удержаний.",
          "dtiPct": "Доля именно нового платежа после учёта существующих долгов; не порог одобрения.",
          "rate": "Номинальная ставка с ежемесячным начислением, без комиссий и страхования.",
          "years": "Дробные годы переводятся в ближайшее целое число месяцев; минимум 1/12 года."
        },
        "sources": [
          "https://www.consumerfinance.gov/ask-cfpb/what-is-a-debt-to-income-ratio-en-1791/"
        ],
        "normal": {
          "inputs": {
            "income": 120000,
            "dtiPct": 40,
            "rate": 18,
            "years": 20
          },
          "expected": {
            "kind": "number",
            "value": 3110195.14
          },
          "rows": [],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "₽",
          "independentLiteral": "3 110 195,14 ₽"
        },
        "boundary": {
          "inputs": {
            "income": 1000,
            "dtiPct": 30,
            "rate": 0,
            "years": 1
          },
          "expected": {
            "kind": "number",
            "value": 3600
          },
          "rows": [
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 0
              }
            },
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 12
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "₽",
          "independentLiteral": "3 600,00 ₽"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 3110195.14
        },
        "blankField": "income",
        "domainField": "income",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "en",
        "path": "/en/finance/maximum-loan-calculator/",
        "h1": "Maximum loan amount calculator",
        "body": {
          "longDescription": "Solves the reverse of the usual loan calculation: that one goes from an amount to a payment, this one goes from an affordable payment to an amount. The payment comes first, from your income and the debt burden you accept, and the loan is then the present value of that annuity. At a zero rate the formula would divide by zero, so the limit is taken on its own branch: with no interest the amount is simply the sum of all the payments. The result is a ceiling produced by a formula rather than an approved offer — a lender also weighs credit history, employment, dependants and collateral, and those conditions are outside the model.",
          "howToUse": [
            "Enter your monthly income.",
            "Enter the share of it you are willing to pay a lender.",
            "Enter the interest rate and the term.",
            "The result is a formula ceiling, not a lender's decision."
          ],
          "howItWorks": "Income Y and selected share d% give monthly payment P=Y×d/100. Term n=round(12×years), at least one month. With constant nominal annual rate r%, i=r/1200; principal A=P×[1−(1+i)^−n]/i, or P×n at zero interest. Scheduled total is P×n, and interest is that total less A. Payments occur at month-end; fees, insurance, changing rates and contractual schedule rounding are excluded.",
          "example": "On an income of 120,000 at a 40% burden, 18% and 20 years, the maximum amount is 3,110,195.14. At income 1000, share 30%, zero rate and one year, payment 300 gives principal 3600 and interest 0. A 0.1-year term rounds to one month: principal 300, not 360.",
          "faq": [
            {
              "q": "What debt burden should I use?",
              "a": "Choose the share for the scenario; the model does not label 40–50% a universal lending limit or safe budget. If it is a budget for all debts, account for existing repayments first and enter only the share remaining for the new loan. Household living costs are not tested here."
            },
            {
              "q": "Will a lender approve the calculated amount?",
              "a": "No. It is the present value of the selected payments at the entered rate and term. A lender decision, income verification, existing obligations and collateral remain outside the model; this is neither an offer nor approval assurance."
            },
            {
              "q": "Why doesn't the amount grow proportionally with the term?",
              "a": "Because each later payment is discounted more heavily than the one before. At 18%, doubling the term from 10 to 20 years adds noticeably less than half again to the amount."
            },
            {
              "q": "How much does the rate matter?",
              "a": "For the same 240 monthly payments, reducing the nominal annual rate from 18% to 12% raises the present-value amount by about 40.16%. The effect depends on the term; this compares formulas without fees or changes in loan conditions."
            },
            {
              "q": "Should income be before or after tax?",
              "a": "The CFPB educational definition of DTI uses income before taxes and deductions. For a personal take-home-pay budget, use a percentage of that same net base and do not compare it directly with gross-income DTI. Check lender requirements separately; the page language does not select a jurisdiction."
            }
          ],
          "disclaimer": "The amount is the present value of selected payments, not an approved or safe loan. Living costs, existing debts, creditworthiness and lender rules are not checked; a nominal rate does not replace full contractual cost."
        },
        "help": {
          "income": "Use a consistent income/percentage basis; gross DTI uses income before deductions.",
          "dtiPct": "Share for the new payment after existing debts; not an approval threshold.",
          "rate": "Nominal annual rate with monthly accrual, without fees or insurance.",
          "years": "Fractional years round to whole months; minimum 1/12 year."
        },
        "sources": [
          "https://www.consumerfinance.gov/ask-cfpb/what-is-a-debt-to-income-ratio-en-1791/"
        ],
        "normal": {
          "inputs": {
            "income": 120000,
            "dtiPct": 40,
            "rate": 18,
            "years": 20
          },
          "expected": {
            "kind": "number",
            "value": 3110195.14
          },
          "rows": [],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "$",
          "independentLiteral": "3 110 195,14 ₽"
        },
        "boundary": {
          "inputs": {
            "income": 1000,
            "dtiPct": 30,
            "rate": 0,
            "years": 1
          },
          "expected": {
            "kind": "number",
            "value": 3600
          },
          "rows": [
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 0
              }
            },
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 12
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "$",
          "independentLiteral": "3 600,00 ₽"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 3110195.14
        },
        "blankField": "income",
        "domainField": "income",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "uk",
        "path": "/uk/finansy/maksymalna-suma-kredytu/",
        "h1": "Калькулятор максимальної суми кредиту",
        "body": {
          "longDescription": "Розрахунок знаходить теоретичну суму кредиту за заданим місячним платежем, а не прогнозує схвалення банку. Логіка зворотна до кредитного калькулятора: спершу дохід і обрана частка визначають платіж, потім він дисконтується за постійною номінальною ставкою. За нульової ставки сума дорівнює сумі всіх платежів. Наявні борги, кредитна перевірка, комісії й страхування не визначаються автоматично.",
          "howToUse": [
            "Введіть щомісячний дохід.",
            "Задайте частку доходу на новий кредит після врахування наявних платежів; універсального банківського порога тут немає.",
            "Введіть ставку й строк."
          ],
          "howItWorks": "За доходу Y та частки d% місячний платіж P=Y×d/100. Строк n=round(12×роки), щонайменше один місяць. За постійної номінальної річної ставки r% маємо i=r/1200; сума A=P×[1−(1+i)^−n]/i, а за i=0 A=P×n. Запланований підсумок P×n, проценти — його різниця з A. Платежі припускаються наприкінці місяця; комісії, страхування, зміна ставки й договірне округлення графіка не включені.",
          "example": "За доходу 120 000 ₴, навантаження 40 %, ставки 18 % і строку 20 років максимальна сума — 3 110 195,14 ₴. За доходу 1000, частки 30%, нульової ставки й одного року платіж 300 дає суму 3600 та проценти 0. Строк 0,1 року округлюється до одного місяця: сума 300, не 360.",
          "faq": [
            {
              "q": "Яке навантаження закладати?",
              "a": "Частку обирають для конкретного сценарію; модель не встановлює 40–50% як норматив чи 30% як безпечну межу. Для загального бюджету всіх боргів спершу врахуйте наявні платежі й введіть лише залишок частки для нового кредиту. Побутові обов’язкові витрати тут не перевіряються."
            },
            {
              "q": "Чому сума так сильно залежить від строку?",
              "a": "Бо довший строк знижує платіж і дозволяє взяти більше за того самого доходу. Але переплата при цьому росте значно швидше, ніж сума кредиту."
            },
            {
              "q": "Чи враховано наявні борги?",
              "a": "Ні. Якщо у вас уже є платежі за кредитами, їх треба відняти з допустимого навантаження — інакше сума вийде завищеною."
            },
            {
              "q": "Чи гарантує банк цю суму?",
              "a": "Ні. Крім доходу він дивиться на кредитну історію, стаж, вік, тип зайнятості та вартість застави. Розрахунок дає орієнтир, а не рішення."
            }
          ],
          "disclaimer": "Сума — приведена вартість обраних платежів, не схвалений чи безпечний кредит. Витрати, наявні борги, кредитоспроможність і правила банку не перевіряються; номінальна ставка не замінює повної вартості договору."
        },
        "help": {
          "income": "Оберіть однакову базу доходу й відсотка; gross-DTI бере дохід до утримань.",
          "dtiPct": "Частка нового платежу після наявних боргів, не поріг схвалення.",
          "rate": "Номінальна ставка з місячним нарахуванням, без комісій і страхування.",
          "years": "Дробові роки округлюються до цілих місяців; мінімум 1/12 року."
        },
        "sources": [
          "https://www.consumerfinance.gov/ask-cfpb/what-is-a-debt-to-income-ratio-en-1791/"
        ],
        "normal": {
          "inputs": {
            "income": 120000,
            "dtiPct": 40,
            "rate": 18,
            "years": 20
          },
          "expected": {
            "kind": "number",
            "value": 3110195.14
          },
          "rows": [],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "₴",
          "independentLiteral": "3 110 195,14 ₽"
        },
        "boundary": {
          "inputs": {
            "income": 1000,
            "dtiPct": 30,
            "rate": 0,
            "years": 1
          },
          "expected": {
            "kind": "number",
            "value": 3600
          },
          "rows": [
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 0
              }
            },
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 12
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "₴",
          "independentLiteral": "3 600,00 ₽"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 3110195.14
        },
        "blankField": "income",
        "domainField": "income",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "de",
        "path": "/de/finanzen/maximale-darlehenssumme/",
        "h1": "Rechner für die höchstmögliche Darlehenssumme",
        "body": {
          "longDescription": "Löst die übliche Darlehensrechnung rückwärts: jene geht von einem Betrag zu einer Rate, diese von einer tragbaren Rate zu einem Betrag. Die Rate kommt zuerst, aus deinem Einkommen und der Schuldendienstquote, die du hinnimmst, und das Darlehen ist danach der Barwert dieser Annuität. Bei einem Zinssatz von null teilte die Formel durch null, der Grenzfall bekommt deshalb einen eigenen Zweig: ohne Zinsen ist der Betrag schlicht die Summe aller Raten. Das Ergebnis ist eine von einer Formel erzeugte Obergrenze und kein bewilligtes Angebot — eine Bank wägt zusätzlich Schufa, Beschäftigung, Unterhaltspflichten und Sicherheiten und diese Bedingungen fehlen im Modell.",
          "howToUse": [
            "Trage dein monatliches Einkommen ein.",
            "Trage den Anteil davon ein, den du einer Bank zahlen willst.",
            "Trage Zinssatz und Laufzeit ein.",
            "Das Ergebnis ist eine rechnerische Obergrenze und keine Entscheidung einer Bank."
          ],
          "howItWorks": "Einkommen Y und gewählter Anteil d% ergeben Monatsrate P=Y×d/100. Laufzeit n=round(12×Jahre), mindestens ein Monat. Beim konstanten jährlichen Nominalzins r% ist i=r/1200; Betrag A=P×[1−(1+i)^−n]/i, bei null Zins P×n. Die geplante Zahlungssumme ist P×n, die Zinsen sind deren Differenz zu A. Raten fallen am Monatsende an; Gebühren, Versicherung, variable Zinsen und vertragliche Tilgungsrundung fehlen.",
          "example": "Bei einem Einkommen von 3000 €, einer Quote von 40 %, 6 % Zinsen und 20 Jahren beträgt der Höchstbetrag 167 496,93 €. Bei Einkommen 1000, Anteil 30%, null Zins und einem Jahr ergeben Rate 300, Betrag 3600 und Zinsen 0. 0,1 Jahre runden auf einen Monat: Betrag 300, nicht 360.",
          "faq": [
            {
              "q": "Welche Schuldendienstquote soll ich nehmen?",
              "a": "Wähle den Anteil für das Szenario;40–50% sind hier weder allgemeine Kreditgrenze noch sicherer Budgetwert. Bezieht sich der Anteil auf alle Schulden, berücksichtige zunächst bestehende Raten und gib nur den verbleibenden Anteil für den neuen Kredit ein. Lebenshaltungskosten werden nicht geprüft."
            },
            {
              "q": "Bewilligt eine Bank den berechneten Betrag?",
              "a": "Nein. Berechnet wird der Barwert der gewählten Raten bei eingegebenem Zins und Laufzeit. Kreditentscheidung, Einkommensnachweis, vorhandene Verpflichtungen und Sicherheiten liegen außerhalb des Modells; das Ergebnis ist kein Angebot und keine Zusage."
            },
            {
              "q": "Warum wächst der Betrag nicht im Verhältnis zur Laufzeit?",
              "a": "Jede spätere Rate wird stärker abgezinst. Bei gleicher Monatsrate und 6% Nominalzins erhöht der Wechsel von 10 auf 20 Jahre den Barwert um rund 54,96%, nicht um 100%. Das ist ein Zahlenbeispiel, keine Prognose von Bankbedingungen."
            },
            {
              "q": "Wie stark zählt der Zinssatz?",
              "a": "Bei derselben Monatsrate und 20 Jahren erhöht eine Senkung des jährlichen Nominalzinses von 6% auf 4% den Barwert um rund 18,23%. Der Effekt hängt von der Laufzeit ab; Gebühren und andere Vertragsänderungen fehlen im Vergleich."
            },
            {
              "q": "Einkommen vor oder nach Steuern?",
              "a": "Die erläuternde DTI-Definition des CFPB nutzt Einkommen vor Steuern und Abzügen. Für ein privates Nettobudget muss der Anteil dieselbe Nettobasis verwenden und darf nicht direkt mit Brutto-DTI verglichen werden. Bankvorgaben sind gesondert zu prüfen; die Seitensprache legt keinen Rechtsraum fest."
            }
          ],
          "disclaimer": "Der Betrag ist der Barwert gewählter Raten, kein genehmigter oder sicherer Kredit. Lebenshaltung, bestehende Schulden, Bonität und Bankregeln werden nicht geprüft; Nominalzins ersetzt keine gesamten Vertragskosten."
        },
        "help": {
          "income": "Einheitliche Einkommens-/Prozentbasis; Brutto-DTI nutzt Einkommen vor Abzügen.",
          "dtiPct": "Anteil der neuen Rate nach bestehenden Schulden, keine Zusagegrenze.",
          "rate": "Nominaler Jahreszins mit Monatsperioden, ohne Gebühren und Versicherung.",
          "years": "Gebrochene Jahre runden auf ganze Monate; mindestens 1/12 Jahr."
        },
        "sources": [
          "https://www.consumerfinance.gov/ask-cfpb/what-is-a-debt-to-income-ratio-en-1791/"
        ],
        "normal": {
          "inputs": {
            "income": 3000,
            "dtiPct": 40,
            "rate": 6,
            "years": 20
          },
          "expected": {
            "kind": "number",
            "value": 167496.93
          },
          "rows": [],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "€",
          "independentLiteral": "167 496,93 ₽"
        },
        "boundary": {
          "inputs": {
            "income": 1000,
            "dtiPct": 30,
            "rate": 0,
            "years": 1
          },
          "expected": {
            "kind": "number",
            "value": 3600
          },
          "rows": [
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 0
              }
            },
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 12
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "€",
          "independentLiteral": "3 600,00 ₽"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 3110195.14
        },
        "blankField": "income",
        "domainField": "income",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "es",
        "path": "/es/finanzas/prestamo-maximo/",
        "h1": "Calculadora de préstamo máximo",
        "body": {
          "longDescription": "Resuelve lo inverso del cálculo habitual de un préstamo: aquel va de un importe a una cuota y este va de una cuota asumible a un importe. La cuota va primero, a partir de tus ingresos y de la carga de deuda que aceptes, y el préstamo es después el valor actual de esa renta. Con un tipo de cero la fórmula dividiría entre cero, así que el límite se toma por una rama aparte: sin intereses, el importe es simplemente la suma de todas las cuotas. El resultado es un techo producido por una fórmula y no una oferta aprobada: un prestamista también valora el historial crediticio, el empleo, las personas a cargo y las garantías, y esas condiciones quedan fuera del modelo.",
          "howToUse": [
            "Introduce tus ingresos mensuales.",
            "Introduce la parte de ellos que estás dispuesto a pagar a un prestamista.",
            "Introduce el tipo de interés y el plazo.",
            "El resultado es un techo de fórmula, no la decisión de un prestamista."
          ],
          "howItWorks": "Ingresos Y y proporción d% dan cuota mensual P=Y×d/100. Plazo n=round(12×años), al menos un mes. Con tipo nominal anual constante r%, i=r/1200; principal A=P×[1−(1+i)^−n]/i, o P×n sin interés. El total previsto es P×n y el interés su diferencia con A. Se supone pago al final de mes; se excluyen comisiones, seguros, tipos variables y redondeo contractual del cuadro.",
          "example": "Con unos ingresos de 1200, una carga del 40 %, un 18 % y 20 años, el importe máximo es 31 101,95. Con ingresos 1000, proporción 30%, tipo cero y un año, cuota 300 da principal 3600 e interés 0. Plazo 0,1 años se redondea a un mes: principal 300, no 360.",
          "faq": [
            {
              "q": "¿Qué carga de deuda debo usar?",
              "a": "Elige la proporción para el caso; el 40–50% no se presenta como límite universal ni presupuesto seguro. Si cubre todas las deudas, descuenta primero las cuotas existentes e introduce solo la parte restante para el préstamo nuevo. No se comprueban gastos básicos del hogar."
            },
            {
              "q": "¿Un prestamista aprobará el importe calculado?",
              "a": "No. Es el valor actual de las cuotas elegidas con el tipo y plazo introducidos. La decisión del prestamista, verificación de ingresos, obligaciones existentes y garantías quedan fuera; no es una oferta ni una garantía de aprobación."
            },
            {
              "q": "¿Por qué el importe no crece en proporción al plazo?",
              "a": "Porque cada cuota posterior se descuenta con más fuerza que la anterior. Al 18 %, doblar el plazo de 10 a 20 años añade bastante menos de la mitad al importe."
            },
            {
              "q": "¿Cuánto importa el tipo?",
              "a": "Con las mismas 240 cuotas mensuales, bajar el tipo nominal anual del 18% al 12% aumenta el valor actual aproximadamente un 40,16%. El efecto depende del plazo; es una comparación de fórmulas sin comisiones ni cambios en las condiciones."
            },
            {
              "q": "¿Los ingresos son antes o después de impuestos?",
              "a": "La definición educativa del DTI del CFPB usa ingresos antes de impuestos y deducciones. En un presupuesto sobre salario neto, aplica el porcentaje a esa misma base y no lo compares directamente con DTI sobre bruto. Comprueba aparte los requisitos del prestamista; el idioma no selecciona una jurisdicción."
            }
          ],
          "disclaimer": "El importe es el valor actual de cuotas elegidas, no un préstamo aprobado o seguro. No comprueba gastos básicos, deudas, solvencia o reglas del prestamista; el tipo nominal no sustituye el coste contractual total."
        },
        "help": {
          "income": "Misma base de ingreso y porcentaje; DTI bruto usa ingreso antes de deducciones.",
          "dtiPct": "Porción para cuota nueva tras deudas existentes; no umbral de aprobación.",
          "rate": "Tipo nominal anual de devengo mensual, sin gastos ni seguros.",
          "years": "Años fraccionarios se redondean a meses enteros; mínimo 1/12 de año."
        },
        "sources": [
          "https://www.consumerfinance.gov/ask-cfpb/what-is-a-debt-to-income-ratio-en-1791/"
        ],
        "normal": {
          "inputs": {
            "income": 1200,
            "dtiPct": 40,
            "rate": 18,
            "years": 20
          },
          "expected": {
            "kind": "number",
            "value": 31101.95
          },
          "rows": [],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "€",
          "independentLiteral": "31 101,95 ₽"
        },
        "boundary": {
          "inputs": {
            "income": 1000,
            "dtiPct": 30,
            "rate": 0,
            "years": 1
          },
          "expected": {
            "kind": "number",
            "value": 3600
          },
          "rows": [
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 0
              }
            },
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 12
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "€",
          "independentLiteral": "3 600,00 ₽"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 3110195.14
        },
        "blankField": "income",
        "domainField": "income",
        "domainInvalid": -1,
        "countFields": []
      }
    ]
  },
  {
    "id": "overtime",
    "category": "finance",
    "defaults": {
      "rate": 650,
      "normalHours": 160,
      "overtimeHours": 14,
      "multiplier": 1.5
    },
    "fieldNames": [
      "rate",
      "normalHours",
      "overtimeHours",
      "multiplier"
    ],
    "defaultInactive": [],
    "pages": [
      {
        "locale": "ru",
        "path": "/ru/finance/overtime-pay/",
        "h1": "Калькулятор сверхурочных",
        "body": {
          "longDescription": "Сверхурочные оплачиваются обычной ставкой с надбавочным коэффициентом, который применяется только к часам сверх нормы. Средняя ставка за час рядом с итогом — та величина, которую стоит читать: она делит всё заработанное на все отработанные часы и растёт куда слабее, чем обещает коэффициент. Четырнадцать сверхурочных часов по полтора поверх ста шестидесяти обычных поднимают среднюю ставку на четыре процента, а не на пятьдесят. Именно этот разрыв и делает сверхурочные привлекательнее в договоре, чем в расчётном листке.",
          "howToUse": [
            "Введите обычную ставку за час.",
            "Укажите обычные часы за период.",
            "Сверхурочные часы укажите отдельно.",
            "Введите один коэффициент, применимый к этому блоку часов;1,5 — пример, а не автоматическое определение права на доплату."
          ],
          "howItWorks": "Обычная оплата = ставка × обычные часы. Сверхурочные = ставка × коэффициент × сверхурочные часы. Средняя ставка делит итог на все отработанные часы. Обычные и сверхурочные часы могут быть дробными, но не отрицательными. Один выбранный коэффициент применяется ко всем введённым сверхурочным часам; пороги по дням, неделям и разным ступеням не определяются автоматически. При нулевом общем времени сумма 0, а средняя ставка не показывается, поскольку 0/0 не имеет значения.",
          "example": "При ставке 650 ₽, 160 обычных и 14 сверхурочных часах по 1,5 выходит 117 650 ₽ — в среднем 676,15 ₽ за час. Если обычных и сверхурочных часов по 0, обе суммы и итог равны 0, а средней ставки нет. Это отличается от действительной ставки 0 за положительное время.",
          "faq": [
            {
              "q": "Почему средняя ставка намного ниже коэффициента?",
              "a": "Потому что надбавка касается только сверхурочных часов, а среднее делится на все. Небольшой блок надбавочных часов сдвигает среднее очень слабо."
            },
            {
              "q": "Какой коэффициент подставлять?",
              "a": "Введите коэффициент для конкретного договора и блока часов. Например, правило FLSA США о 1,5 относится к охваченным законом работникам без освобождения и рабочей неделе; оно не является общей мировой ставкой. Если разные часы имеют разные надбавки, считайте блоки отдельно."
            },
            {
              "q": "Расчёт до налогов или после?",
              "a": "До. Это начисленная сумма; налог на доходы и взносы применяются позже и в расчёт не входят."
            },
            {
              "q": "Почему коэффициент меньше единицы отклоняется?",
              "a": "Эта модель описывает доплату и поэтому принимает коэффициент не ниже 1. Ограничение поля не подтверждает юридическое право на сверхурочные и не проверяет законность конкретной оплаты."
            }
          ],
          "disclaimer": "Модель одного блока сверхурочных с введённой базовой ставкой. Право на доплату, порог часов, состав regular rate, налоги и ограничения рабочего времени зависят от применимых правил; язык страницы не выбирает трудовое законодательство."
        },
        "help": {
          "normalHours": "Часы обычного блока, в том числе дробные; календарный порог не подставляется.",
          "multiplier": "Один выбранный коэффициент от 1 для всего блока; 1,5 не является мировой нормой."
        },
        "sources": [
          "https://webapps.dol.gov/elaws/otcalculator.htm"
        ],
        "normal": {
          "inputs": {
            "rate": 650,
            "normalHours": 160,
            "overtimeHours": 14,
            "multiplier": 1.5
          },
          "expected": {
            "kind": "number",
            "value": 117650
          },
          "rows": [
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 676.15
              }
            }
          ],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "₽",
          "independentLiteral": "117 650,00 ₽"
        },
        "boundary": {
          "inputs": {
            "rate": 1,
            "normalHours": 0,
            "overtimeHours": 0,
            "multiplier": 1
          },
          "expected": {
            "kind": "number",
            "value": 0
          },
          "rows": [],
          "inactive": [],
          "rowCount": 2,
          "primaryUnit": "₽",
          "independentLiteral": "0,00 ₽"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 117650
        },
        "blankField": "rate",
        "domainField": "rate",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "en",
        "path": "/en/finance/overtime-pay-calculator/",
        "h1": "Overtime pay calculator",
        "body": {
          "longDescription": "Overtime pay is the ordinary rate multiplied by a premium, applied only to the hours beyond the normal schedule. The effective hourly rate shown next to the total is the part worth reading: it divides everything earned by every hour worked, and it rises far less than the multiplier suggests. Fourteen overtime hours at time and a half on top of a hundred and sixty regular ones lift the effective rate by four per cent, not fifty. That gap is exactly what makes overtime look better in a contract than it feels in a payslip.",
          "howToUse": [
            "Enter the ordinary hourly rate.",
            "Enter the regular hours worked in the period.",
            "Enter the overtime hours separately.",
            "Enter one multiplier applicable to this block of hours;1.5 is an example, not an automatic determination of overtime entitlement."
          ],
          "howItWorks": "Regular pay = rate × regular hours. Overtime pay = rate × multiplier × overtime hours. The effective rate divides the total by all hours worked. Regular and overtime hours may be fractional but not negative. One selected multiplier applies to the entire overtime block; daily, weekly and tiered thresholds are not determined automatically. With zero total hours, pay is 0 and the average is omitted because 0/0 has no defined value.",
          "example": "At 650 an hour, 160 regular and 14 overtime hours at 1.5 come to 117,650 — an effective 676.15 an hour. With both regular and overtime hours at 0, both pay components and the total are 0; the average is omitted. This differs from an actual zero rate for positive working time.",
          "faq": [
            {
              "q": "Why is the effective rate so much lower than the multiplier?",
              "a": "Because the premium applies only to the overtime hours but the average divides by all of them. A small block of premium hours moves the average very little."
            },
            {
              "q": "Which overtime multiplier applies to me?",
              "a": "Use the multiplier for the contract and block of hours. For example, the US FLSA 1.5 rule has coverage and exemption conditions and a workweek basis; it is not a worldwide rate. Calculate separately when different blocks have different premiums."
            },
            {
              "q": "Are the figures before or after tax?",
              "a": "Before. This is gross pay; income tax and contributions are applied afterwards and are outside the calculation."
            },
            {
              "q": "Why is a multiplier below one rejected?",
              "a": "This model represents a premium and therefore accepts multipliers of at least 1. The field constraint does not establish legal overtime entitlement or verify that a pay arrangement complies with local law."
            }
          ],
          "disclaimer": "This is one overtime block at an entered base rate. Entitlement, hour thresholds, regular-rate components, taxes and time limits depend on applicable rules; page language does not select employment law."
        },
        "help": {
          "normalHours": "Regular-block hours, including fractions; no calendar threshold is inserted.",
          "multiplier": "One chosen multiplier from 1 for the whole block; 1.5 is not a worldwide rule."
        },
        "sources": [
          "https://webapps.dol.gov/elaws/otcalculator.htm"
        ],
        "normal": {
          "inputs": {
            "rate": 650,
            "normalHours": 160,
            "overtimeHours": 14,
            "multiplier": 1.5
          },
          "expected": {
            "kind": "number",
            "value": 117650
          },
          "rows": [
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 676.15
              }
            }
          ],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "$",
          "independentLiteral": "117 650,00 ₽"
        },
        "boundary": {
          "inputs": {
            "rate": 1,
            "normalHours": 0,
            "overtimeHours": 0,
            "multiplier": 1
          },
          "expected": {
            "kind": "number",
            "value": 0
          },
          "rows": [],
          "inactive": [],
          "rowCount": 2,
          "primaryUnit": "$",
          "independentLiteral": "0,00 ₽"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 117650
        },
        "blankField": "rate",
        "domainField": "rate",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "uk",
        "path": "/uk/finansy/nadurochni/",
        "h1": "Калькулятор надурочних",
        "body": {
          "longDescription": "Надурочні оплачуються з підвищувальним коефіцієнтом, і саме тому середня вартість години виявляється вищою за базову ставку. Розрахунок показує обидва числа — підсумкову оплату й фактичну середню ставку, яка й потрібна для порівняння варіантів зайнятості.",
          "howToUse": [
            "Введіть базову погодинну ставку.",
            "Введіть кількість звичайних годин.",
            "Введіть один коефіцієнт для цього блоку годин;1,5 є прикладом, не автоматичним визначенням права на доплату."
          ],
          "howItWorks": "Звичайна оплата дорівнює ставка × звичайні години. Надурочні рахуються як ставка × коефіцієнт × надурочні години. Середня ставка — підсумкова оплата, поділена на всі відпрацьовані години. Звичайні й надурочні години можуть бути дробовими, але не від’ємними. Один обраний коефіцієнт застосовується до всього блоку надурочних; денні, тижневі та ступінчасті пороги не визначаються автоматично. За нульового часу сума 0, а середня ставка не показується, бо 0/0 не має визначеного значення.",
          "example": "За ставки 650 ₴, 160 звичайних і 14 надурочних годин за коефіцієнта 1,5 виходить 117 650 ₴ — у середньому 676,15 ₴ за годину. За нульових звичайних і надурочних годин обидві суми й підсумок 0, середньої ставки немає. Це відрізняється від справжньої нульової ставки за додатного часу.",
          "faq": [
            {
              "q": "Який коефіцієнт застосовується?",
              "a": "Коефіцієнт залежить від застосовних правил і договору. Значення 1,5 у прикладі — обраний параметр; калькулятор не визначає право на надурочні, денні чи тижневі пороги або надбавки за вихідні."
            },
            {
              "q": "Навіщо знати середню ставку?",
              "a": "Щоб чесно порівнювати пропозиції. Робота з високою базовою ставкою й без надурочних може виявитися вигіднішою за роботу з низькою ставкою й регулярними переробками."
            },
            {
              "q": "Чи є межа надурочних годин?",
              "a": "Допустимість і межі надурочних залежать від країни, режиму роботи та винятків. Цей калькулятор не перевіряє трудових обмежень і не перетворює введені години на юридично дозволений графік."
            },
            {
              "q": "Чи входять надурочні в розрахунок відпускних?",
              "a": "Розрахунок показує лише оплату введеного блоку годин. Включення надурочних у відпускні чи інші виплати визначається окремими правилами; середній заробіток для таких виплат тут не розраховується."
            }
          ],
          "disclaimer": "Це один блок надурочних за введеною базовою ставкою. Право на доплату, поріг годин, склад бази, податки й обмеження часу залежать від правил; мова сторінки не обирає трудове законодавство."
        },
        "help": {
          "normalHours": "Години звичайного блоку, також дробові; календарний поріг не підставляється.",
          "multiplier": "Один коефіцієнт від 1 для всього блоку; 1,5 не світова норма."
        },
        "sources": [
          "https://webapps.dol.gov/elaws/otcalculator.htm"
        ],
        "normal": {
          "inputs": {
            "rate": 650,
            "normalHours": 160,
            "overtimeHours": 14,
            "multiplier": 1.5
          },
          "expected": {
            "kind": "number",
            "value": 117650
          },
          "rows": [
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 676.15
              }
            }
          ],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "₴",
          "independentLiteral": "117 650,00 ₽"
        },
        "boundary": {
          "inputs": {
            "rate": 1,
            "normalHours": 0,
            "overtimeHours": 0,
            "multiplier": 1
          },
          "expected": {
            "kind": "number",
            "value": 0
          },
          "rows": [],
          "inactive": [],
          "rowCount": 2,
          "primaryUnit": "₴",
          "independentLiteral": "0,00 ₽"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 117650
        },
        "blankField": "rate",
        "domainField": "rate",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "de",
        "path": "/de/finanzen/ueberstunden-rechner/",
        "h1": "Rechner für Überstundenvergütung",
        "body": {
          "longDescription": "Die Überstundenvergütung ist der gewöhnliche Satz mal einem Zuschlag, angewendet allein auf die Stunden über der regulären Arbeitszeit. Der tatsächliche Stundensatz neben der Summe ist der Teil, der sich zu lesen lohnt: er teilt alles Verdiente durch alle geleisteten Stunden, und er steigt weit weniger, als der Faktor vermuten lässt. Vierzehn Überstunden mit dem Anderthalbfachen auf hundertsechzig reguläre heben den tatsächlichen Satz um vier Prozent und nicht um fünfzig. Genau dieser Abstand lässt Überstunden im Vertrag besser aussehen, als sie sich auf der Abrechnung anfühlen.",
          "howToUse": [
            "Trage den gewöhnlichen Stundensatz ein.",
            "Trage die im Zeitraum geleisteten regulären Stunden ein.",
            "Trage die Überstunden gesondert ein.",
            "Gib einen für diesen Stundenblock geltenden Faktor ein;1,5 ist ein Beispiel, keine automatische Ermittlung eines Zuschlagsanspruchs."
          ],
          "howItWorks": "Reguläre Vergütung = Satz × reguläre Stunden. Überstundenvergütung = Satz × Faktor × Überstunden. Der tatsächliche Satz teilt die Summe durch alle geleisteten Stunden. Reguläre Stunden und Überstunden dürfen gebrochen, aber nicht negativ sein. Ein gewählter Faktor gilt für den gesamten Überstundenblock; Tages-, Wochen- und Stufengrenzen werden nicht automatisch ermittelt. Bei null Stunden beträgt die Vergütung 0; der Durchschnitt entfällt, weil 0/0 keinen definierten Wert hat.",
          "example": "Bei 20 € je Stunde ergeben 160 reguläre und 14 Überstunden mit dem Faktor 1,5 zusammen 3620 € — tatsächlich 20,80 € je Stunde. Bei null regulären und null Überstunden sind beide Beträge und die Summe 0; der Durchschnitt entfällt. Das ist etwas anderes als ein tatsächlicher Nullsatz für positive Arbeitszeit.",
          "faq": [
            {
              "q": "Warum liegt der tatsächliche Satz so viel unter dem Faktor?",
              "a": "Weil der Zuschlag allein für die Überstunden gilt, der Durchschnitt aber durch alle Stunden teilt. Ein kleiner Block Zuschlagsstunden bewegt den Durchschnitt sehr wenig."
            },
            {
              "q": "Welcher Überstundenfaktor gilt für mich?",
              "a": "Verwende den Faktor für den konkreten Vertrag und Stundenblock. Die US-FLSA-Regel 1,5 hängt beispielsweise von Geltungsbereich, Ausnahmen und Arbeitswoche ab; sie ist kein weltweiter Satz. Rechne Blöcke mit verschiedenen Zuschlägen getrennt."
            },
            {
              "q": "Sind die Zahlen brutto oder netto?",
              "a": "Brutto. Lohnsteuer und Sozialabgaben kommen danach und liegen außerhalb dieser Rechnung."
            },
            {
              "q": "Warum wird ein Faktor unter eins abgewiesen?",
              "a": "Das Modell beschreibt einen Zuschlag und akzeptiert deshalb Faktoren ab 1. Diese Eingabegrenze begründet keinen gesetzlichen Überstundenanspruch und prüft keine Rechtmäßigkeit der Vergütung."
            }
          ],
          "disclaimer": "Das Modell umfasst einen Überstundenblock mit eingegebenem Basissatz. Anspruch, Stundenschwellen, Bestandteile des Grundsatzes, Steuern und Zeitgrenzen hängen von anwendbaren Regeln ab; die Sprache wählt kein Arbeitsrecht."
        },
        "help": {
          "normalHours": "Stunden des Regelblocks, auch gebrochen; keine Kalenderschwelle.",
          "multiplier": "Ein Faktor ab 1 für den ganzen Block; 1,5 ist keine weltweite Regel."
        },
        "sources": [
          "https://webapps.dol.gov/elaws/otcalculator.htm"
        ],
        "normal": {
          "inputs": {
            "rate": 20,
            "normalHours": 160,
            "overtimeHours": 14,
            "multiplier": 1.5
          },
          "expected": {
            "kind": "number",
            "value": 3620
          },
          "rows": [
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 20.8
              }
            }
          ],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "€",
          "independentLiteral": "3 620,00 ₽"
        },
        "boundary": {
          "inputs": {
            "rate": 1,
            "normalHours": 0,
            "overtimeHours": 0,
            "multiplier": 1
          },
          "expected": {
            "kind": "number",
            "value": 0
          },
          "rows": [],
          "inactive": [],
          "rowCount": 2,
          "primaryUnit": "€",
          "independentLiteral": "0,00 ₽"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 117650
        },
        "blankField": "rate",
        "domainField": "rate",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "es",
        "path": "/es/finanzas/calculadora-de-horas-extra/",
        "h1": "Calculadora de horas extra",
        "body": {
          "longDescription": "La retribución de las horas extra es la tarifa ordinaria multiplicada por un recargo, aplicado solo a las horas que pasan de la jornada normal. La tarifa efectiva por hora que aparece junto al total es la parte que conviene leer: divide todo lo ganado entre todas las horas trabajadas, y sube mucho menos de lo que sugiere el multiplicador. Catorce horas extra a hora y media sobre ciento sesenta ordinarias suben la tarifa efectiva un cuatro por ciento, no un cincuenta. Esa diferencia es justo lo que hace que las horas extra se vean mejor en un contrato que en una nómina.",
          "howToUse": [
            "Introduce la tarifa ordinaria por hora.",
            "Introduce las horas ordinarias trabajadas en el periodo.",
            "Introduce las horas extra por separado.",
            "Introduce un multiplicador para este bloque de horas;1,5 es un ejemplo, no una determinación automática del derecho al recargo."
          ],
          "howItWorks": "Retribución ordinaria = tarifa × horas ordinarias. Retribución de horas extra = tarifa × multiplicador × horas extra. La tarifa efectiva divide el total entre todas las horas trabajadas. Las horas ordinarias y extra pueden ser fraccionarias, pero no negativas. Un multiplicador elegido se aplica al bloque completo; no se determinan automáticamente umbrales diarios, semanales ni por tramos. Con cero horas, la retribución es 0 y se omite la media porque 0/0 no tiene un valor definido.",
          "example": "A 6,50 la hora, 160 horas ordinarias y 14 extra a 1,5 suman 1176,50: una tarifa efectiva de 6,76 por hora. Con horas ordinarias y extra en 0, ambos importes y total son 0; se omite la media. No equivale a una tarifa real cero con tiempo trabajado positivo.",
          "faq": [
            {
              "q": "¿Por qué la tarifa efectiva es mucho menor que el multiplicador?",
              "a": "Porque el recargo se aplica solo a las horas extra pero la media divide entre todas. Un bloque pequeño de horas con recargo mueve muy poco la media."
            },
            {
              "q": "¿Qué multiplicador de horas extra me corresponde?",
              "a": "Usa el multiplicador del contrato y bloque de horas. Por ejemplo, el 1,5 de la FLSA estadounidense depende de cobertura, exenciones y semana laboral; no es una tarifa mundial. Calcula por separado bloques con recargos distintos."
            },
            {
              "q": "¿Las cifras son antes o después de impuestos?",
              "a": "Antes. Esto es retribución bruta; la retención y las cotizaciones se aplican después y quedan fuera del cálculo."
            },
            {
              "q": "¿Por qué se rechaza un multiplicador menor que uno?",
              "a": "El modelo representa un recargo y acepta por ello multiplicadores desde 1. Esta restricción no establece el derecho legal a horas extra ni verifica el cumplimiento de una forma de pago."
            }
          ],
          "disclaimer": "Modela un bloque de horas extra con tarifa base introducida. Derecho, umbrales, componentes de la tarifa regular, impuestos y límites dependen de reglas aplicables; el idioma no elige legislación laboral."
        },
        "help": {
          "normalHours": "Horas del bloque ordinario, también fracciones; sin umbral automático.",
          "multiplier": "Un factor desde 1 para todo el bloque; 1,5 no es regla mundial."
        },
        "sources": [
          "https://webapps.dol.gov/elaws/otcalculator.htm"
        ],
        "normal": {
          "inputs": {
            "rate": 6.5,
            "normalHours": 160,
            "overtimeHours": 14,
            "multiplier": 1.5
          },
          "expected": {
            "kind": "number",
            "value": 1176.5
          },
          "rows": [
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 6.76
              }
            }
          ],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "€",
          "independentLiteral": "1 176,50 ₽"
        },
        "boundary": {
          "inputs": {
            "rate": 1,
            "normalHours": 0,
            "overtimeHours": 0,
            "multiplier": 1
          },
          "expected": {
            "kind": "number",
            "value": 0
          },
          "rows": [],
          "inactive": [],
          "rowCount": 2,
          "primaryUnit": "€",
          "independentLiteral": "0,00 ₽"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 117650
        },
        "blankField": "rate",
        "domainField": "rate",
        "domainInvalid": -1,
        "countFields": []
      }
    ]
  },
  {
    "id": "position-size",
    "category": "finance",
    "defaults": {
      "deposit": 100000,
      "riskPct": 1,
      "entry": 250,
      "stop": 240
    },
    "fieldNames": [
      "deposit",
      "riskPct",
      "entry",
      "stop"
    ],
    "defaultInactive": [],
    "pages": [
      {
        "locale": "ru",
        "path": "/ru/finance/position-size/",
        "h1": "Калькулятор размера позиции",
        "body": {
          "longDescription": "Выводит объём не из суммы, которую хочется вложить, а из суммы, которую допустимо потерять: сколько денег теряется на одной единице до стоп-приказа, столько раз допустимый риск в них и укладывается. Стоимость позиции получается побочно и вполне может превысить депозит — это следствие выбранного риска и расстояния до стопа; доступность финансирования здесь не проверяется, и доля депозита выводится отдельной строкой именно затем, чтобы это было видно. Дробный объём показан отдельно: допустимый шаг зависит от инструмента и брокера. Для покупки целых единиц объём округляется вниз, чтобы расчётный убыток до выбранной цены стопа не превышал заданную сумму.",
          "howToUse": [
            "Введите размер депозита целиком, а не свободный остаток.",
            "Задайте собственный риск на сделку от более 0 до 100%; калькулятор не выбирает безопасный процент.",
            "Введите цену входа и цену стоп-приказа.",
            "Сопоставьте стоимость позиции с капиталом и допустимым размером лота; доступность сделки не проверяется."
          ],
          "howItWorks": "При депозите D и выбранном риске p% сумма риска R=D×p/100. Для входа E и стопа S расстояние a=|E−S| должно быть положительным. Дробный объём q=R/a; целые единицы floor(q), стоимость дробной позиции q×E и её доля в депозите 100×q×E/D. Предполагается линейный результат на единицу без множителя контракта, комиссии и проскальзывания. Это убыток при исполнении по введённой цене, а не гарантия исполнения стопа.",
          "example": "При депозите 100 000 ₽, риске 1%, входе 250 ₽ и стопе 240 ₽ объём равен 100 единицам на 25 000 ₽. Модельный убыток при исполнении по 240 ₽ равен 1000 ₽ без расходов. Если бюджет риска 100, вход 10, стоп 7, дробный объём 33,333…; целые единицы 33 дают модельную потерю 99. Округление до 34 превысило бы бюджет: потеря 102.",
          "faq": [
            {
              "q": "Почему объём считается от стопа, а не от суммы вложений?",
              "a": "Так выбранная денежная сумма связывается с разницей цен на единицу. Это условный убыток при исполнении по цене стопа; разрыв котировок и условия инструмента могут дать другой результат."
            },
            {
              "q": "Стоимость позиции больше депозита — это ошибка?",
              "a": "Арифметически это возможно при малом расстоянии до стопа. Но сумма выше депозита не доказывает доступность финансирования и не означает, что выбранный стоп подходит инструменту; проверьте капитал, маржу и шаг лота отдельно."
            },
            {
              "q": "Почему целые единицы округляются вниз?",
              "a": "Если инструмент требует целые единицы, floor(q) не превышает дробный объём. При исполнении по введённой цене стопа это сохраняет модельный убыток в пределах бюджета; округление вверх могло бы его превысить. Допустимый шаг и фактическое исполнение проверяются отдельно."
            },
            {
              "q": "Учитываются ли комиссии и проскальзывание?",
              "a": "Нет. Комиссии и неблагоприятное исполнение могут увеличить убыток сверх выбранного бюджета; величину изменения эта модель не оценивает. Стоп-лимит, в отличие от рыночного стопа, также может остаться неисполненным."
            },
            {
              "q": "Какой процент риска считается разумным?",
              "a": "Модель не определяет подходящий риск: он зависит от инструмента, капитала, связанных позиций и вероятности убытков. Процент является входным условием сценария, а не оценкой безопасности сделки."
            }
          ],
          "disclaimer": "Расчёт предполагает линейный убыток на единицу и исполнение по указанной цене. Стоп не гарантирует цену или исполнение; маржа, множитель контракта, шаг лота и расходы требуют отдельной проверки."
        },
        "help": {
          "riskPct": "Ваш сценарий риска, более 0 до 100%; пригодность сделки не оценивается.",
          "stop": "Модель предполагает исполнение по этой цене, но стоп его не гарантирует."
        },
        "sources": [
          "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-15"
        ],
        "normal": {
          "inputs": {
            "deposit": 100000,
            "riskPct": 1,
            "entry": 250,
            "stop": 240
          },
          "expected": {
            "kind": "number",
            "value": 100
          },
          "rows": [
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 25000
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "шт",
          "independentLiteral": "100 шт"
        },
        "boundary": {
          "inputs": {
            "deposit": 10000,
            "riskPct": 1,
            "entry": 10,
            "stop": 7
          },
          "expected": {
            "kind": "number",
            "value": 33.333
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 33
              }
            },
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 333.33
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "шт",
          "independentLiteral": "33,333 шт"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 100
        },
        "blankField": "deposit",
        "domainField": "deposit",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "en",
        "path": "/en/finance/position-size-calculator/",
        "h1": "Position size calculator",
        "body": {
          "longDescription": "Derives size not from the amount you want to commit but from the amount you can afford to lose: however much is lost on one unit down to the stop, that is how many times the permitted risk fits into it. The position value comes out as a by-product and may well exceed the account — a consequence of the chosen risk and stop distance, without checking financing availability, and the share of the account is shown on its own row precisely so that this is visible. Fractional size is shown separately; the allowed lot step depends on the instrument and broker. If whole units are required, size rounds down so the modeled loss to the selected stop price does not exceed the amount set.",
          "howToUse": [
            "Enter the whole account balance rather than the free margin.",
            "Set your own risk per trade above 0 and up to 100%; the calculator does not choose a safe percentage.",
            "Enter the entry price and the stop price.",
            "Compare position value with capital and the permitted lot step; execution eligibility is not checked."
          ],
          "howItWorks": "With account D and chosen risk p%, risk budget R=D×p/100. Entry E and stop S must have positive distance a=|E−S|. Fractional size q=R/a; whole units floor(q), fractional position value q×E and account share 100×q×E/D. This assumes a linear payoff per unit without a contract multiplier, fees or slippage. It models a loss at the entered execution price and does not guarantee stop execution.",
          "example": "An account of 100000, risk 1%, entry 250 and stop 240 gives 100 units worth 25000. The modeled loss at execution price 240 is 1000 before costs. For risk budget 100, entry 10 and stop 7, fractional size is 33.333…; 33 whole units give modeled loss 99. Rounding up to 34 would exceed the budget with loss 102.",
          "faq": [
            {
              "q": "Why is size derived from the stop rather than the amount invested?",
              "a": "It links a chosen money budget to the price difference per unit. This is a conditional loss at the stop execution price; gaps and instrument terms may produce a different outcome."
            },
            {
              "q": "The position is worth more than the account — is that an error?",
              "a": "A small stop distance can produce this arithmetically. A value above the account does not establish financing availability or whether the stop suits the instrument; capital, margin and lot steps need separate checks."
            },
            {
              "q": "Why do whole units round down?",
              "a": "If whole units are required, floor(q) does not exceed fractional size. At execution at the entered stop price this keeps modeled loss within the budget; rounding up could exceed it. Permitted steps and actual execution require separate checks."
            },
            {
              "q": "Are fees and slippage included?",
              "a": "No. Fees and adverse execution can take the loss beyond the chosen budget; this model does not estimate the difference. A stop-limit order can also remain unfilled, unlike assuming execution at the entered price."
            },
            {
              "q": "What risk percentage is considered sensible?",
              "a": "The model does not determine a suitable risk. It depends on the instrument, capital, related positions and loss probabilities. The percentage is a scenario input rather than a trade safety assessment."
            }
          ],
          "disclaimer": "Calculation assumes linear loss per unit and execution at the stated price. A stop guarantees neither price nor execution; margin, contract multiplier, lot step and costs need separate checks."
        },
        "help": {
          "riskPct": "Your scenario risk above 0 up to 100%; suitability is not assessed.",
          "stop": "The model assumes execution at this price; a stop does not guarantee it."
        },
        "sources": [
          "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-15"
        ],
        "normal": {
          "inputs": {
            "deposit": 100000,
            "riskPct": 1,
            "entry": 250,
            "stop": 240
          },
          "expected": {
            "kind": "number",
            "value": 100
          },
          "rows": [
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 25000
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "pcs",
          "independentLiteral": "100 шт"
        },
        "boundary": {
          "inputs": {
            "deposit": 10000,
            "riskPct": 1,
            "entry": 10,
            "stop": 7
          },
          "expected": {
            "kind": "number",
            "value": 33.333
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 33
              }
            },
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 333.33
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "pcs",
          "independentLiteral": "33,333 шт"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 100
        },
        "blankField": "deposit",
        "domainField": "deposit",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "uk",
        "path": "/uk/finansy/rozmir-pozytsii/",
        "h1": "Калькулятор розміру позиції",
        "body": {
          "longDescription": "Розмір позиції тут виводиться з обраної суми ризику та відстані від входу до стопа, а не з бажаного прибутку. Калькулятор показує дробовий обсяг і окремо ціле число одиниць, округлене вниз. Ціна позиції може перевищувати депозит: це співвідношення показує потребу в капіталі, але не підтверджує доступність плеча, допустимий крок лота чи виконання стопа за вказаною ціною.",
          "howToUse": [
            "Введіть розмір депозиту.",
            "Задайте власний ризик на угоду понад 0 і до 100%; калькулятор не обирає безпечний відсоток.",
            "Введіть ціну входу й ціну стоп-заявки."
          ],
          "howItWorks": "За депозиту D і обраного ризику p% сума R=D×p/100. Для входу E та стопа S відстань a=|E−S| має бути додатною. Дробовий обсяг q=R/a; цілі одиниці floor(q), ціна дробової позиції q×E та частка депозиту 100×q×E/D. Припускається лінійний результат на одиницю без множника контракту, комісій і прослизання. Це модель втрати за введеною ціною виконання, не гарантія виконання стопа.",
          "example": "За депозиту 100 000 ₴, ризику 1%, входу 250 ₴ і стопа 240 ₴ обсяг дорівнює 100 одиницям на 25 000 ₴. За виконання по 240 ₴ модельна втрата 1000 ₴ без витрат. За бюджету ризику 100, входу 10 і стопа 7 дробовий обсяг 33,333…; 33 цілі одиниці дають модельну втрату 99. Округлення до 34 перевищило б бюджет: втрата 102.",
          "faq": [
            {
              "q": "Чому 1–2 % на угоду?",
              "a": "Калькулятор не призначає відсоток. Якщо щоразу втрачати частку поточного депозиту, після десяти втрат по 2% лишиться 0,98^10≈81,7%, а по 10% — 0,9^10≈34,9%. Це арифметичне порівняння, не доказ безпеки чи відновлення капіталу."
            },
            {
              "q": "Що станеться, якщо стоп-заявка не спрацює?",
              "a": "Розрахунок припускає виконання за заданою ціною. На розриві котирувань виконання може бути гіршим, і фактична втрата перевищить заплановану — це ризик, який обсягом не керується."
            },
            {
              "q": "Чому обсяг зменшується за далекого стопа?",
              "a": "Бо ризик на одиницю більший, а загальна сума ризику фіксована. Далекий стоп означає меншу позицію — і це правильно: інакше одна угода коштувала б більше, ніж дозволено."
            },
            {
              "q": "Чи враховано комісії?",
              "a": "Ні, рахується ринковий ризик. Комісії й спред збільшують фактичну втрату, тому за частої торгівлі їх варто закладати в допустимий ризик."
            }
          ],
          "disclaimer": "Розрахунок припускає лінійну втрату на одиницю й виконання за вказаною ціною. Стоп не гарантує ціни чи виконання; маржа, множник, крок лота й витрати перевіряються окремо."
        },
        "help": {
          "riskPct": "Ваш сценарій ризику понад 0 до 100%; придатність угоди не оцінюється.",
          "stop": "Модель припускає виконання за цією ціною, але стоп його не гарантує."
        },
        "sources": [
          "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-15"
        ],
        "normal": {
          "inputs": {
            "deposit": 100000,
            "riskPct": 1,
            "entry": 250,
            "stop": 240
          },
          "expected": {
            "kind": "number",
            "value": 100
          },
          "rows": [
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 25000
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "од",
          "independentLiteral": "100 шт"
        },
        "boundary": {
          "inputs": {
            "deposit": 10000,
            "riskPct": 1,
            "entry": 10,
            "stop": 7
          },
          "expected": {
            "kind": "number",
            "value": 33.333
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 33
              }
            },
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 333.33
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "од",
          "independentLiteral": "33,333 шт"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 100
        },
        "blankField": "deposit",
        "domainField": "deposit",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "de",
        "path": "/de/finanzen/positionsgroesse-rechner/",
        "h1": "Rechner für die Positionsgröße",
        "body": {
          "longDescription": "Leitet die Größe nicht aus dem Betrag ab, den du einsetzen willst, sondern aus dem, den du verlieren kannst: wie viel an einer Einheit bis zum Stopp verloren geht, so oft passt das zugelassene Risiko hinein. Der Wert der Position fällt dabei als Nebenergebnis ab und kann das Konto durchaus übersteigen — eine Folge des gewählten Risikos und Stoppabstands, ohne Prüfung der Finanzierung, und der Anteil am Konto steht gerade deshalb in einer eigenen Zeile. Die gebrochene Stückzahl wird gesondert gezeigt; zulässige Schritte hängen von Instrument und Broker ab. Sind ganze Einheiten nötig, wird abgerundet, damit der modellierte Verlust bis zum gewählten Stoppkurs den gesetzten Betrag nicht überschreitet.",
          "howToUse": [
            "Trage den ganzen Kontostand ein und nicht die freie Marge.",
            "Setze deinen eigenen Risikowert über 0 bis 100%; der Rechner wählt keinen sicheren Prozentsatz.",
            "Trage Einstiegspreis und Stoppkurs ein.",
            "Vergleiche Positionswert mit Kapital und zulässigem Lotschritt; die Handelbarkeit wird nicht geprüft."
          ],
          "howItWorks": "Bei Konto D und gewähltem Risiko p% ist das Risikobudget R=D×p/100. Einstieg E und Stopp S brauchen Abstand a=|E−S|>0. Gebrochene Stückzahl q=R/a; ganze Einheiten floor(q), gebrochener Positionswert q×E und Kontoanteil 100×q×E/D. Vorausgesetzt ist ein linearer Ertrag je Einheit ohne Kontraktmultiplikator, Gebühren oder Slippage. Modelliert wird der Verlust zum eingegebenen Ausführungskurs, keine garantierte Stoppausführung.",
          "example": "Ein Konto von 10 000 €, Risiko 1%, Einstieg 250 € und Stopp 240 € ergibt 10 Einheiten im Wert von 2500 €. Bei Ausführung zu 240 € beträgt der modellierte Verlust 100 € vor Kosten. Bei Risikobudget 100, Einstieg 10 und Stopp 7 ist die gebrochene Größe 33,333…; 33 ganze Einheiten ergeben Modellverlust 99. Aufrunden auf 34 überschritte das Budget mit Verlust 102.",
          "faq": [
            {
              "q": "Warum folgt die Größe aus dem Stopp und nicht aus dem eingesetzten Betrag?",
              "a": "So wird ein gewähltes Geldbudget mit dem Kursabstand je Einheit verknüpft. Der Verlust gilt unter Ausführung zum Stoppkurs; Kurslücken und Instrumentbedingungen können ein anderes Ergebnis erzeugen."
            },
            {
              "q": "Die Position ist mehr wert als das Konto — ist das ein Fehler?",
              "a": "Ein kleiner Stoppabstand kann dies rechnerisch erzeugen. Ein Wert oberhalb des Kontos belegt weder Finanzierung noch Eignung des Stopps; Kapital, Margin und Lotschritte sind gesondert zu prüfen."
            },
            {
              "q": "Warum werden ganze Einheiten abgerundet?",
              "a": "Sind ganze Einheiten nötig, überschreitet floor(q) die gebrochene Größe nicht. Bei Ausführung zum eingegebenen Stoppkurs bleibt der Modellverlust im Budget; Aufrunden könnte es überschreiten. Zulässiger Schritt und tatsächliche Ausführung sind separat zu prüfen."
            },
            {
              "q": "Sind Gebühren und Kursschlupf enthalten?",
              "a": "Nein. Gebühren und ungünstige Ausführung können den Verlust über das Budget erhöhen; die Differenz wird hier nicht geschätzt. Auch eine Stop-Limit-Order kann unausgeführt bleiben."
            },
            {
              "q": "Welcher Risikoprozentsatz gilt als sinnvoll?",
              "a": "Das Modell bestimmt kein geeignetes Risiko. Instrument, Kapital, verbundene Positionen und Verlustwahrscheinlichkeiten spielen mit hinein. Der Prozentsatz ist eine Szenarioannahme, keine Sicherheitsbewertung."
            }
          ],
          "disclaimer": "Die Rechnung nimmt linearen Verlust je Einheit und Ausführung zum angegebenen Kurs an. Ein Stopp garantiert weder Kurs noch Ausführung; Margin, Kontraktmultiplikator, Lotschritt und Kosten sind separat zu prüfen."
        },
        "help": {
          "riskPct": "Dein Risikoszenario über 0 bis 100%; keine Eignungsbewertung.",
          "stop": "Das Modell nimmt Ausführung zu diesem Kurs an; ein Stopp garantiert sie nicht."
        },
        "sources": [
          "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-15"
        ],
        "normal": {
          "inputs": {
            "deposit": 10000,
            "riskPct": 1,
            "entry": 250,
            "stop": 240
          },
          "expected": {
            "kind": "number",
            "value": 10
          },
          "rows": [
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 2500
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "Stk",
          "independentLiteral": "10 шт"
        },
        "boundary": {
          "inputs": {
            "deposit": 10000,
            "riskPct": 1,
            "entry": 10,
            "stop": 7
          },
          "expected": {
            "kind": "number",
            "value": 33.333
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 33
              }
            },
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 333.33
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "Stk",
          "independentLiteral": "33,333 шт"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 100
        },
        "blankField": "deposit",
        "domainField": "deposit",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "es",
        "path": "/es/finanzas/tamano-de-posicion/",
        "h1": "Calculadora de tamaño de posición",
        "body": {
          "longDescription": "Deduce el tamaño no del importe que quieres comprometer, sino del importe que puedes permitirte perder: lo que se pierda en una unidad hasta el stop indica cuántas veces cabe en él el riesgo permitido. El valor de la posición sale como subproducto y bien puede superar a la cuenta, consecuencia del riesgo elegido y de la distancia al stop, sin comprobar disponibilidad de financiación, y la proporción de la cuenta se muestra en su propia fila precisamente para que eso quede a la vista. El tamaño fraccionario se muestra aparte: el paso admitido depende del instrumento y del intermediario. Si se requieren unidades enteras, se redondea hacia abajo para que la pérdida modelada hasta el precio de stop no supere el importe fijado.",
          "howToUse": [
            "Introduce todo el saldo de la cuenta y no el margen libre.",
            "Fija tu propio riesgo por operación por encima de 0 y hasta el 100%; la calculadora no elige un porcentaje seguro.",
            "Introduce el precio de entrada y el precio del stop.",
            "Compara el valor de la posición con el capital y el paso del lote admitido; no se verifica si puede ejecutarse."
          ],
          "howItWorks": "Con cuenta D y riesgo elegido p%, presupuesto R=D×p/100. Entrada E y stop S deben tener distancia positiva a=|E−S|. Tamaño fraccionario q=R/a; unidades enteras floor(q), valor fraccionario q×E y proporción de cuenta 100×q×E/D. Se supone resultado lineal por unidad, sin multiplicador de contrato, comisiones ni deslizamiento. Es una pérdida modelada al precio introducido, no una garantía de ejecución del stop.",
          "example": "Una cuenta de 10 000, riesgo del 1%, entrada 250 y stop 240 da 10 unidades por valor de 2500. La pérdida modelada a precio de ejecución 240 es 100 antes de gastos. Con presupuesto de riesgo 100, entrada 10 y stop 7, tamaño fraccionario 33,333…; 33 unidades enteras dan pérdida modelada 99. Redondear a 34 superaría el presupuesto: pérdida 102.",
          "faq": [
            {
              "q": "¿Por qué el tamaño se deduce del stop y no del importe invertido?",
              "a": "Relaciona un presupuesto monetario elegido con la diferencia de precio por unidad. La pérdida supone ejecución al precio del stop; saltos de cotización y condiciones del instrumento pueden cambiarla."
            },
            {
              "q": "La posición vale más que la cuenta, ¿es un error?",
              "a": "Una distancia pequeña al stop puede producirlo aritméticamente. Un valor superior a la cuenta no demuestra que haya financiación ni que ese stop sea adecuado; comprueba aparte capital, margen y pasos del lote."
            },
            {
              "q": "¿Por qué las unidades enteras se redondean hacia abajo?",
              "a": "Si se requieren unidades enteras, floor(q) no supera el tamaño fraccionario. Con ejecución al precio de stop introducido mantiene la pérdida modelada dentro del presupuesto; redondear arriba podría superarlo. Pasos admitidos y ejecución real se revisan aparte."
            },
            {
              "q": "¿Están incluidas las comisiones y el deslizamiento?",
              "a": "No. Comisiones y ejecución desfavorable pueden superar el presupuesto elegido; no se estima esa diferencia. Una orden stop-limit también puede quedar sin ejecutar."
            },
            {
              "q": "¿Qué porcentaje de riesgo se considera razonable?",
              "a": "El modelo no determina un riesgo adecuado. Depende del instrumento, capital, posiciones relacionadas y probabilidades de pérdida. El porcentaje es una condición del escenario, no una evaluación de seguridad."
            }
          ],
          "disclaimer": "Se supone pérdida lineal por unidad y ejecución al precio indicado. El stop no garantiza precio ni ejecución; margen, multiplicador, paso del lote y gastos necesitan revisión aparte."
        },
        "help": {
          "riskPct": "Riesgo de tu escenario mayor que 0 hasta 100%; sin evaluar idoneidad.",
          "stop": "El modelo supone ejecución a este precio; el stop no la garantiza."
        },
        "sources": [
          "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-15"
        ],
        "normal": {
          "inputs": {
            "deposit": 10000,
            "riskPct": 1,
            "entry": 250,
            "stop": 240
          },
          "expected": {
            "kind": "number",
            "value": 10
          },
          "rows": [
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 2500
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "uds",
          "independentLiteral": "10 шт"
        },
        "boundary": {
          "inputs": {
            "deposit": 10000,
            "riskPct": 1,
            "entry": 10,
            "stop": 7
          },
          "expected": {
            "kind": "number",
            "value": 33.333
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 33
              }
            },
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 333.33
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "uds",
          "independentLiteral": "33,333 шт"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 100
        },
        "blankField": "deposit",
        "domainField": "deposit",
        "domainInvalid": -1,
        "countFields": []
      }
    ]
  },
  {
    "id": "rental-yield",
    "category": "finance",
    "defaults": {
      "price": 10000000,
      "rentMode": "annual",
      "annualRent": 600000,
      "monthlyRent": 50000,
      "annualCosts": 0
    },
    "fieldNames": [
      "price",
      "rentMode",
      "annualRent",
      "monthlyRent",
      "annualCosts"
    ],
    "defaultInactive": [
      "monthlyRent"
    ],
    "pages": [
      {
        "locale": "ru",
        "path": "/ru/finance/rental-yield/",
        "h1": "Калькулятор арендной доходности",
        "body": {
          "longDescription": "Показывает арендный доход относительно цены покупки недвижимости. Валовая доходность использует годовую аренду, чистая вычитает введённые годовые расходы и может быть отрицательной. Например, валовые 6% при расходах в 2% цены дают чистые 4%. Отдельная строка окупаемости относится к валовой аренде, даже когда расходы заполнены. Сравнение со вкладом требует также учёта налогов, ликвидности, рисков и изменения стоимости, которые здесь не оценены.",
          "howToUse": [
            "Введите цену покупки.",
            "Укажите аренду за год или за месяц.",
            "При желании добавьте годовые расходы — появится чистая доходность."
          ],
          "howItWorks": "При месячной аренде M годовая аренда A=12×M; в годовом режиме A вводится напрямую. Цена P>0, валовая доходность 100×A/P. При расходах C>0 чистая доходность 100×(A−C)/P, в том числе отрицательная при C>A; пустое поле расходов означает 0. Простая валовая окупаемость P/A не вычитает расходы и не дисконтирует будущие поступления. Все деньги используют одну валютную базу, без конвертации.",
          "example": "Квартира за 10 000 000 ₽ с арендой 50 000 ₽ в месяц даёт валовую доходность 6,00%. Граница: цена 1000, годовая аренда 100 и расходы 150 дают валовые 10%, чистые −5%, но валовую окупаемость 10 лет. При аренде 0 и расходах 50 чистые −5%, а строки окупаемости нет.",
          "faq": [
            {
              "q": "Чем валовая доходность отличается от чистой?",
              "a": "Валовая берёт всю введённую аренду, чистая вычитает расходы. Чистая помогает сопоставлять денежные потоки, но сама по себе не делает аренду и вклад равными по риску, налогам, сроку и ликвидности."
            },
            {
              "q": "Что входит в годовые расходы?",
              "a": "Выбранная вами сумма ежегодных затрат: налог, страхование, обслуживание, ремонт и другие статьи. Потерю аренды из-за простоя учитывайте один раз: либо уменьшите годовую аренду до ожидаемого получения, либо вычтите недополученную аренду как расход из полной аренды. Не делайте оба действия одновременно."
            },
            {
              "q": "Учитывается ли рост цены недвижимости?",
              "a": "Нет. Считается только доход от аренды. Прирост стоимости — отдельная составляющая, и она непредсказуема."
            },
            {
              "q": "Что показывает окупаемость?",
              "a": "Строка показывает простую валовую окупаемость: цена покупки ÷ годовая аренда. Это 100 ÷ валовая доходность в процентах, даже при заполненных расходах. Она не является чистой или дисконтированной окупаемостью и предполагает постоянную аренду."
            }
          ],
          "disclaimer": "Доходность относится только к введённой аренде и расходам; рост цены, кредит, капитальные затраты покупки и дисконтирование отсутствуют. Строка окупаемости всегда валовая, даже при показанной чистой доходности."
        },
        "help": {
          "price": "Цена покупки — знаменатель доходности; заём и изменение цены не включены.",
          "annualCosts": "Пусто = 0; расходы могут превышать аренду. Потерю аренды из-за простоя учтите один раз."
        },
        "sources": [],
        "normal": {
          "inputs": {
            "price": 10000000,
            "rentMode": "monthly",
            "annualRent": 600000,
            "monthlyRent": 50000,
            "annualCosts": 0
          },
          "expected": {
            "kind": "number",
            "value": 6
          },
          "rows": [],
          "inactive": [
            "annualRent"
          ],
          "rowCount": 2,
          "primaryUnit": "%",
          "independentLiteral": "6,00%"
        },
        "boundary": {
          "inputs": {
            "price": 1000,
            "rentMode": "annual",
            "annualRent": 100,
            "monthlyRent": 50000,
            "annualCosts": 150
          },
          "expected": {
            "kind": "number",
            "value": 10
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": -5
              }
            },
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 10
              }
            }
          ],
          "inactive": [
            "monthlyRent"
          ],
          "rowCount": 3,
          "primaryUnit": "%",
          "independentLiteral": "10,00%"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 6
        },
        "blankField": "price",
        "domainField": "price",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "en",
        "path": "/en/finance/rental-yield-calculator/",
        "h1": "Rental yield calculator",
        "body": {
          "longDescription": "Shows rental income relative to a property purchase price. Gross yield uses annual rent; net yield subtracts the entered annual costs and may be negative. For example, gross 6% with costs equal to 2% of the price gives net 4%. The separate payback row always uses gross rent, even when costs are entered. A deposit comparison also needs taxes, liquidity, risks and price changes, none of which is valued here.",
          "howToUse": [
            "Enter the purchase price.",
            "Give the rent per year or per month.",
            "Optionally add annual costs — the net yield then appears."
          ],
          "howItWorks": "Monthly rent M gives annual rent A=12×M; annual mode takes A directly. For price P>0, gross yield is 100×A/P. With costs C>0, net yield is 100×(A−C)/P, including a negative result if C>A; blank costs mean 0. Simple gross payback P/A neither subtracts costs nor discounts future receipts. All money uses one currency basis, without conversion.",
          "example": "A flat costing 10,000,000 let at 50,000 a month gives a gross yield of 6.00%. Boundary: price 1000, annual rent 100 and costs 150 give gross 10%, net −5%, and gross payback 10 years. With rent 0 and costs 50, net is −5% and the payback row is absent.",
          "faq": [
            {
              "q": "How does gross yield differ from net?",
              "a": "Gross uses all entered rent; net deducts costs. Net is useful for comparing cash flows, but does not make rental property and a deposit equivalent in risk, taxes, term or liquidity."
            },
            {
              "q": "What counts as annual costs?",
              "a": "Your selected annual total, such as tax, insurance, maintenance and repairs. Count vacancy rent loss once: either reduce annual rent to expected receipts, or subtract missed rent as a cost from full rent. Do not do both."
            },
            {
              "q": "Is property price growth included?",
              "a": "No. Only rental income is computed. Capital appreciation is a separate component and an unpredictable one."
            },
            {
              "q": "What does the payback period show?",
              "a": "The row is simple gross payback: purchase price ÷ annual rent, equal to 100 ÷ gross yield in percent even with costs entered. It is neither net nor discounted payback and assumes unchanged rent."
            }
          ],
          "disclaimer": "Yield uses only entered rent and costs; price changes, borrowing, acquisition costs and discounting are excluded. Payback is always gross, even when a net-yield row is shown."
        },
        "help": {
          "price": "Purchase price is the yield denominator; borrowing and price changes are excluded.",
          "annualCosts": "Blank = 0; costs may exceed rent. Count vacancy-related rent loss once."
        },
        "sources": [],
        "normal": {
          "inputs": {
            "price": 10000000,
            "rentMode": "monthly",
            "annualRent": 600000,
            "monthlyRent": 50000,
            "annualCosts": 0
          },
          "expected": {
            "kind": "number",
            "value": 6
          },
          "rows": [],
          "inactive": [
            "annualRent"
          ],
          "rowCount": 2,
          "primaryUnit": "%",
          "independentLiteral": "6,00%"
        },
        "boundary": {
          "inputs": {
            "price": 1000,
            "rentMode": "annual",
            "annualRent": 100,
            "monthlyRent": 50000,
            "annualCosts": 150
          },
          "expected": {
            "kind": "number",
            "value": 10
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": -5
              }
            },
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 10
              }
            }
          ],
          "inactive": [
            "monthlyRent"
          ],
          "rowCount": 3,
          "primaryUnit": "%",
          "independentLiteral": "10,00%"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 6
        },
        "blankField": "price",
        "domainField": "price",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "uk",
        "path": "/uk/finansy/orendna-dokhidnist/",
        "h1": "Калькулятор орендної дохідності",
        "body": {
          "longDescription": "Показує орендний дохід відносно ціни придбання. Валова дохідність бере річну оренду, чиста віднімає введені річні витрати й може бути від’ємною. Наприклад, валові 6% за витрат у 2% ціни дають чисті 4%. Окремий строк окупності завжди розраховано за валовою орендою, навіть із заповненими витратами. Порівняння з депозитом потребує також податків, ліквідності, ризиків і зміни ціни, які тут не оцінені.",
          "howToUse": [
            "Введіть ціну нерухомості.",
            "Оберіть річну або місячну оренду й заповніть відповідне видиме поле.",
            "Додайте річні витрати, щоб побачити чисту дохідність."
          ],
          "howItWorks": "За місячної оренди M річна сума A=12×M; у річному режимі A вводиться прямо. За ціни P>0 валова дохідність 100×A/P. За витрат C>0 чиста дохідність 100×(A−C)/P, зокрема від’ємна при C>A; порожні витрати означають 0. Проста валова окупність P/A не віднімає витрати й не дисконтує майбутні надходження. Усі суми мають одну валютну базу, без конвертації.",
          "example": "Квартира за 10 000 000 ₴ з орендою 50 000 ₴ на місяць дає 6% валових. За витрат 120 000 ₴ на рік чиста дохідність 4,8%, але показана валова окупність лишається 16,7 року: 10 000 000 ÷ 600 000. Межа: ціна 1000, річна оренда 100 і витрати 150 дають валові 10%, чисті −5%, але валову окупність 10 років. За оренди 0 й витрат 50 чисті −5%, рядка окупності немає.",
          "faq": [
            {
              "q": "Які витрати враховувати?",
              "a": "Введіть обрану річну суму витрат: податки, страхування, утримання, ремонт та інші статті. Втрату оренди через простій врахуйте один раз: або зменште оренду до очікуваних надходжень, або відніміть недоотриману оренду як витрату з повної суми."
            },
            {
              "q": "Чому валова дохідність вводить в оману?",
              "a": "Валова дохідність не віднімає витрат, але є чітко визначеним показником, а не оцінкою вигідності. Різниця з чистою залежить від введених витрат; універсальної чверті чи третини немає. За витрат понад оренду чистий результат від’ємний."
            },
            {
              "q": "Чи враховано зростання вартості нерухомості?",
              "a": "Ні, рахується лише орендний потік. Повна дохідність вкладення включає ще й зміну ціни самого об’єкта, а вона може бути як додатною, так і від’ємною."
            },
            {
              "q": "З чим порівнювати результат?",
              "a": "Порівнюйте потоки за однаковий період і податкову базу, враховуючи також ризик, ліквідність і управління. Чиста орендна дохідність сама по собі не визначає потрібної премії до депозиту чи облігацій і не включає зміну ціни нерухомості."
            }
          ],
          "disclaimer": "Дохідність використовує лише введені оренду й витрати; зміна ціни, кредит, витрати придбання та дисконтування відсутні. Окупність завжди валова, навіть із показаною чистою дохідністю."
        },
        "help": {
          "price": "Ціна купівлі — знаменник дохідності; кредит і зміна ціни не включені.",
          "annualCosts": "Порожньо = 0; витрати можуть перевищувати оренду. Втрату через простій рахуйте один раз."
        },
        "sources": [],
        "normal": {
          "inputs": {
            "price": 10000000,
            "rentMode": "monthly",
            "annualRent": 600000,
            "monthlyRent": 50000,
            "annualCosts": 120000
          },
          "expected": {
            "kind": "number",
            "value": 6
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 4.8
              }
            },
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 16.7
              }
            }
          ],
          "inactive": [
            "annualRent"
          ],
          "rowCount": 3,
          "primaryUnit": "%",
          "independentLiteral": "6,00%"
        },
        "boundary": {
          "inputs": {
            "price": 1000,
            "rentMode": "annual",
            "annualRent": 100,
            "monthlyRent": 50000,
            "annualCosts": 150
          },
          "expected": {
            "kind": "number",
            "value": 10
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": -5
              }
            },
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 10
              }
            }
          ],
          "inactive": [
            "monthlyRent"
          ],
          "rowCount": 3,
          "primaryUnit": "%",
          "independentLiteral": "10,00%"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 6
        },
        "blankField": "price",
        "domainField": "price",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "de",
        "path": "/de/finanzen/mietrendite-rechner/",
        "h1": "Mietrenditerechner",
        "body": {
          "longDescription": "Zeigt Mietertrag im Verhältnis zum Kaufpreis. Die Bruttorendite verwendet Jahresmiete; die Nettorendite zieht eingegebene Jahreskosten ab und kann negativ sein. Brutto 6% mit Kosten von 2% des Preises ergibt beispielsweise netto 4%. Die gesonderte Amortisationszeile nutzt stets Bruttomiete, auch mit eingegebenen Kosten. Ein Vergleich mit Festgeld braucht zusätzlich Steuern, Liquidität, Risiken und Wertänderungen; diese werden hier nicht bewertet.",
          "howToUse": [
            "Trage den Kaufpreis ein.",
            "Gib die Miete je Jahr oder je Monat an.",
            "Ergänze bei Bedarf die jährlichen Kosten — dann erscheint die Nettorendite."
          ],
          "howItWorks": "Monatsmiete M ergibt Jahresmiete A=12×M; im Jahresmodus wird A direkt eingegeben. Bei Preis P>0 ist die Bruttorendite 100×A/P. Mit Kosten C>0 ist netto 100×(A−C)/P, auch negativ bei C>A; leere Kosten bedeuten 0. Einfache Bruttoamortisation P/A zieht keine Kosten ab und diskontiert keine künftigen Einnahmen. Alle Geldwerte verwenden dieselbe Währungsbasis, ohne Umrechnung.",
          "example": "Eine Wohnung für 250 000 €, für 950 € im Monat vermietet, bringt eine Bruttorendite von 4,56 %. Grenze: Preis 1000, Jahresmiete 100 und Kosten 150 ergeben brutto 10%, netto −5%, Bruttoamortisation 10 Jahre. Bei Miete 0 und Kosten 50 ist netto −5%; die Amortisationszeile fehlt.",
          "faq": [
            {
              "q": "Worin unterscheiden sich Brutto- und Nettorendite?",
              "a": "Brutto nutzt die gesamte eingegebene Miete, netto zieht Kosten ab. Netto hilft beim Zahlungsstromvergleich, setzt Immobilie und Festgeld aber nicht hinsichtlich Risiko, Steuern, Laufzeit und Liquidität gleich."
            },
            {
              "q": "Was zählt zu den jährlichen Kosten?",
              "a": "Die von dir gewählte jährliche Summe, etwa Steuer, Versicherung, Instandhaltung und Reparaturen. Leerstandsausfall nur einmal zählen: entweder Jahresmiete auf erwartete Einnahmen senken oder ausgefallene Miete von der vollen Miete als Kosten abziehen, nicht beides."
            },
            {
              "q": "Ist die Wertsteigerung der Immobilie enthalten?",
              "a": "Nein. Gerechnet wird allein der Mietertrag. Der Wertzuwachs ist ein eigener und schwer vorhersehbarer Teil."
            },
            {
              "q": "Was zeigt die Amortisationsdauer?",
              "a": "Die Zeile ist einfache Bruttoamortisation: Kaufpreis ÷ Jahresmiete, gleich 100 ÷ Bruttorendite in Prozent, auch mit Kosten. Das ist keine Netto- oder abgezinste Amortisation und setzt konstante Miete voraus."
            }
          ],
          "disclaimer": "Die Rendite nutzt nur Miete und Kosten; Wertänderung, Kredit, Anschaffungskosten und Abzinsung fehlen. Die Amortisation ist stets brutto, auch mit angezeigter Nettorendite."
        },
        "help": {
          "price": "Kaufpreis ist der Renditenenner; Kredit und Wertänderungen fehlen.",
          "annualCosts": "Leer = 0; Kosten dürfen Miete übersteigen. Leerstandsausfall einmal zählen."
        },
        "sources": [],
        "normal": {
          "inputs": {
            "price": 250000,
            "rentMode": "monthly",
            "annualRent": 600000,
            "monthlyRent": 950,
            "annualCosts": 0
          },
          "expected": {
            "kind": "number",
            "value": 4.56
          },
          "rows": [],
          "inactive": [
            "annualRent"
          ],
          "rowCount": 2,
          "primaryUnit": "%",
          "independentLiteral": "4,56%"
        },
        "boundary": {
          "inputs": {
            "price": 1000,
            "rentMode": "annual",
            "annualRent": 100,
            "monthlyRent": 50000,
            "annualCosts": 150
          },
          "expected": {
            "kind": "number",
            "value": 10
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": -5
              }
            },
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 10
              }
            }
          ],
          "inactive": [
            "monthlyRent"
          ],
          "rowCount": 3,
          "primaryUnit": "%",
          "independentLiteral": "10,00%"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 6
        },
        "blankField": "price",
        "domainField": "price",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "es",
        "path": "/es/finanzas/rentabilidad-del-alquiler/",
        "h1": "Calculadora de rentabilidad del alquiler",
        "body": {
          "longDescription": "Muestra ingresos de alquiler respecto al precio de compra. La rentabilidad bruta usa renta anual; la neta resta gastos anuales introducidos y puede ser negativa. Por ejemplo, un 6% bruto con gastos del 2% del precio da un 4% neto. La recuperación mostrada siempre usa renta bruta, aun con gastos. Comparar con un depósito exige además impuestos, liquidez, riesgos y variación del precio, que aquí no se valoran.",
          "howToUse": [
            "Introduce el precio de compra.",
            "Indica la renta anual o mensual.",
            "Si quieres, añade los gastos anuales: aparecerá entonces la rentabilidad neta."
          ],
          "howItWorks": "Renta mensual M da anual A=12×M; el modo anual recibe A directamente. Con precio P>0, rentabilidad bruta 100×A/P. Con gastos C>0, neta 100×(A−C)/P, también negativa si C>A; gastos vacíos significan 0. Recuperación bruta simple P/A no resta gastos ni descuenta cobros futuros. Todo el dinero comparte base monetaria, sin conversión.",
          "example": "Un piso de 100 000 alquilado a 500 al mes da una rentabilidad bruta del 6,00 %. Límite: precio 1000, renta anual 100 y gastos 150 dan bruto 10%, neto −5% y recuperación bruta de 10 años. Con renta 0 y gastos 50, neto −5% y sin fila de recuperación.",
          "faq": [
            {
              "q": "¿En qué se diferencia la rentabilidad bruta de la neta?",
              "a": "La bruta toma toda la renta; la neta resta gastos. La neta ayuda a comparar flujos, pero no iguala alquiler y depósito en riesgo, impuestos, plazo o liquidez."
            },
            {
              "q": "¿Qué cuenta como gastos anuales?",
              "a": "El total anual elegido, como impuestos, seguro, mantenimiento y reparaciones. Cuenta una sola vez la renta perdida por vacancia: reduce la renta anual a los cobros esperados o resta el alquiler perdido como gasto de la renta completa, no ambas cosas."
            },
            {
              "q": "¿Se incluye la revalorización del inmueble?",
              "a": "No. Solo se calculan los ingresos por alquiler. La revalorización es un componente aparte y además impredecible."
            },
            {
              "q": "¿Qué indica el plazo de recuperación?",
              "a": "La fila es recuperación bruta simple: precio ÷ renta anual, igual a 100 ÷ rentabilidad bruta porcentual aun con gastos. No es recuperación neta ni descontada y supone renta constante."
            }
          ],
          "disclaimer": "La rentabilidad usa solo renta y gastos; se excluyen cambio de precio, financiación, gastos de adquisición y descuento. La recuperación siempre es bruta aunque se muestre rentabilidad neta."
        },
        "help": {
          "price": "Precio de compra es denominador; excluye financiación y cambios de precio.",
          "annualCosts": "Vacío = 0; gastos pueden superar la renta. Cuenta una vez la pérdida por vacancia."
        },
        "sources": [],
        "normal": {
          "inputs": {
            "price": 100000,
            "rentMode": "monthly",
            "annualRent": 600000,
            "monthlyRent": 500,
            "annualCosts": 0
          },
          "expected": {
            "kind": "number",
            "value": 6
          },
          "rows": [],
          "inactive": [
            "annualRent"
          ],
          "rowCount": 2,
          "primaryUnit": "%",
          "independentLiteral": "6,00%"
        },
        "boundary": {
          "inputs": {
            "price": 1000,
            "rentMode": "annual",
            "annualRent": 100,
            "monthlyRent": 50000,
            "annualCosts": 150
          },
          "expected": {
            "kind": "number",
            "value": 10
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": -5
              }
            },
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 10
              }
            }
          ],
          "inactive": [
            "monthlyRent"
          ],
          "rowCount": 3,
          "primaryUnit": "%",
          "independentLiteral": "10,00%"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 6
        },
        "blankField": "price",
        "domainField": "price",
        "domainInvalid": -1,
        "countFields": []
      }
    ]
  },
  {
    "id": "risk-reward",
    "category": "finance",
    "defaults": {
      "direction": "long",
      "entry": 250,
      "stop": 240,
      "target": 280,
      "qty": 100
    },
    "fieldNames": [
      "direction",
      "entry",
      "stop",
      "target",
      "qty"
    ],
    "defaultInactive": [],
    "pages": [
      {
        "locale": "ru",
        "path": "/ru/finance/risk-reward/",
        "h1": "Калькулятор риск/прибыль",
        "body": {
          "longDescription": "Сопоставляет расстояние от входа до стопа с расстоянием до цели. Объём необязателен и нужен только для денежных сумм; отношение выводится из трёх цен. При отношении 3 безубыточная доля равна 25%, а при 0,5 — примерно 66,67%. Это условный порог серии с одинаковыми исходами без расходов, а не прогноз вероятности, реалистичности цели или выгодности сделки. Неверное расположение стопа и цели для выбранного направления вызывает предупреждение.",
          "howToUse": [
            "Выберите направление: в лонге стоп ниже входа, в шорте — выше.",
            "Введите цену входа, цену стоп-приказа и целевую цену.",
            "Укажите объём, если хотите увидеть риск и прибыль в деньгах.",
            "Сравните безубыточную долю со своей реальной статистикой сделок."
          ],
          "howItWorks": "Риск на единицу a=|вход−стоп|>0, потенциальный результат b=|цель−вход|. Отношение R=b/a, безубыточная доля в процентах p=100/(1+R). При объёме q>0 денежные суммы q×a и q×b; при пустом или нулевом объёме они не показаны. Лонг требует стоп<вход<цель, шорт — цель<вход<стоп; при нарушении расстояния всё равно вычислены, но предупреждение исключает трактовку результата как корректно заданной сделки. Комиссии, разрывы цены и различия исходов серии не моделируются.",
          "example": "Вход 250, стоп 240, цель 280 дают отношение 3: достаточно выигрывать 25 % сделок, чтобы выйти в ноль. При тех же ценах и пустом объёме отношение 3 и доля 25% остаются, но денежных итогов нет. Если цель совпадает со входом, отношение 0 и порог 100%; одновременно предупреждение отмечает некорректное расположение цели.",
          "faq": [
            {
              "q": "Чем это отличается от расчёта размера позиции?",
              "a": "Размер позиции выводит количество единиц из суммы риска. Здесь количество задаётся отдельно, а отношение сравнивает два расстояния. Ни один из показателей сам по себе не оценивает качество или вероятность сделки."
            },
            {
              "q": "Что показывает безубыточная доля сделок?",
              "a": "Порог для серии с постоянными выигрышем и убытком, без расходов: при R=3 это 25%, при R=1 — 50%, при R=0,5 — 66,67%. Он не является прогнозом фактической доли выигрышей; при разных исходах нужен анализ всей серии."
            },
            {
              "q": "Какое отношение считается приемлемым?",
              "a": "Универсального приемлемого отношения нет. R=2 требует более 33,33% выигрышей для положительного среднего результата до расходов при одинаковых исходах. Без оценки вероятности и затрат одно отношение не определяет выгодность."
            },
            {
              "q": "Почему расстояния берутся по модулю?",
              "a": "Потому что в шорте стоп выше входа, а цель ниже, и знак разности зависит от направления. Риск и прибыль — величины, а не направления."
            },
            {
              "q": "Учитываются ли комиссии?",
              "a": "Нет. Для отношения по чистым исходам затраты нужно отдельно вычесть из возможного дохода и добавить к моделируемому убытку. Отличие может быть существенным; его величину этот расчёт не определяет."
            }
          ],
          "disclaimer": "Отношение и доля безубыточности предполагают одинаковые выигрыши и потери без расходов. Они не прогнозируют движение цены или вероятность цели; предупреждение о расположении цен обязательно учитывается."
        },
        "help": {
          "target": "Цель не определяет вероятность выигрыша; при неверном порядке цен будет предупреждение.",
          "qty": "Пусто или 0: только расстояния и отношение. Дробный объём допустим; шаг инструмента не проверяется."
        },
        "sources": [
          "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-15"
        ],
        "normal": {
          "inputs": {
            "direction": "long",
            "entry": 250,
            "stop": 240,
            "target": 280,
            "qty": 0
          },
          "expected": {
            "kind": "number",
            "value": 3
          },
          "rows": [
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 25
              }
            }
          ],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "",
          "independentLiteral": "3"
        },
        "boundary": {
          "inputs": {
            "direction": "long",
            "entry": 250,
            "stop": 240,
            "target": 280,
            "qty": ""
          },
          "expected": {
            "kind": "number",
            "value": 3
          },
          "rows": [
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 25
              }
            }
          ],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "",
          "independentLiteral": "3"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 3
        },
        "blankField": "entry",
        "domainField": "entry",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "en",
        "path": "/en/finance/risk-reward-ratio-calculator/",
        "h1": "Risk reward ratio calculator",
        "body": {
          "longDescription": "Compares the entry-to-stop distance with the entry-to-target distance. Size is optional and only needed for money totals; the ratio comes from three prices. Ratio 3 gives a 25% break-even win rate, while 0.5 gives about 66.67%. This is a conditional threshold for repeated identical payoffs before costs, not a forecast of probability, target realism or trade quality. Prices on the wrong side for the chosen direction produce a warning.",
          "howToUse": [
            "Choose the direction: a long stops below entry, a short above it.",
            "Enter the entry price, the stop price and the target price.",
            "Enter the size if you want risk and reward in money.",
            "Compare the break-even rate with your own trade statistics."
          ],
          "howItWorks": "Risk per unit a=|entry−stop|>0 and potential reward b=|target−entry|. Ratio R=b/a; break-even percentage p=100/(1+R). With size q>0, money totals are q×a and q×b; blank or zero size omits them. A long needs stop<entry<target; a short needs target<entry<stop. Distances remain calculated for invalid ordering, but a warning prevents treating that as a correctly specified trade. Fees, gaps and varying outcomes across trades are not modeled.",
          "example": "Entry 250, stop 240, target 280 gives a ratio of 3: winning 25% of trades is enough to break even. With the same prices and blank size, ratio 3 and rate 25% remain, but money totals are absent. Target equal to entry gives ratio 0 and threshold 100%, with a warning that target ordering is invalid.",
          "faq": [
            {
              "q": "How does this differ from position sizing?",
              "a": "Position sizing derives units from a risk budget. Here size is entered separately and the ratio compares two distances. Neither measure alone assesses trade quality or probability."
            },
            {
              "q": "What does the break-even win rate show?",
              "a": "It is the threshold for a series with constant win and loss amounts before costs: R=3 gives 25%, R=1 gives 50%, and R=0.5 gives 66.67%. It does not predict your actual win rate; varying outcomes require the full series."
            },
            {
              "q": "What ratio is considered acceptable?",
              "a": "There is no universally acceptable ratio. R=2 needs more than 33.33% wins for a positive average before costs with identical payoffs. Without probabilities and costs, the ratio alone cannot determine profitability."
            },
            {
              "q": "Why are the distances taken as magnitudes?",
              "a": "Because a short stops above entry and targets below it, so the sign of the difference depends on direction. Risk and reward are magnitudes, not directions."
            },
            {
              "q": "Are fees included?",
              "a": "No. A net-payoff ratio needs costs separately deducted from potential gains and added to modeled losses. The difference can be substantial; this calculation does not estimate its size."
            }
          ],
          "disclaimer": "Ratio and break-even rate assume identical wins and losses before costs. They predict neither price movement nor target probability; the price-ordering warning must be considered."
        },
        "help": {
          "target": "A target does not determine win probability; wrong price ordering gives a warning.",
          "qty": "Blank or 0: distances and ratio only. Fractional size allowed; instrument steps are not checked."
        },
        "sources": [
          "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-15"
        ],
        "normal": {
          "inputs": {
            "direction": "long",
            "entry": 250,
            "stop": 240,
            "target": 280,
            "qty": 0
          },
          "expected": {
            "kind": "number",
            "value": 3
          },
          "rows": [
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 25
              }
            }
          ],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "",
          "independentLiteral": "3"
        },
        "boundary": {
          "inputs": {
            "direction": "long",
            "entry": 250,
            "stop": 240,
            "target": 280,
            "qty": ""
          },
          "expected": {
            "kind": "number",
            "value": 3
          },
          "rows": [
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 25
              }
            }
          ],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "",
          "independentLiteral": "3"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 3
        },
        "blankField": "entry",
        "domainField": "entry",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "uk",
        "path": "/uk/finansy/ryzyk-prybutok/",
        "h1": "Калькулятор ризик/прибуток",
        "body": {
          "longDescription": "Зіставляє відстань від входу до стопа з відстанню до цілі. Обсяг необов’язковий і потрібний лише для грошових сум; відношення виводиться з трьох цін. За відношення 3 беззбиткова частка 25%, за 0,5 — близько 66,67%. Це умовний поріг серії з однаковими результатами без витрат, не прогноз імовірності, досяжності цілі чи якості угоди. Невідповідне розташування цін для обраного напрямку викликає попередження.",
          "howToUse": [
            "Введіть ціну входу.",
            "Введіть ціну стоп-заявки й цільову ціну.",
            "Порівняйте отримане відношення з вашою часткою виграшних угод."
          ],
          "howItWorks": "Ризик на одиницю a=|вхід−стоп|>0, потенційний результат b=|ціль−вхід|. Відношення R=b/a, беззбиткова частка у відсотках p=100/(1+R). За обсягу q>0 суми q×a і q×b; за порожнього чи нульового обсягу вони не показані. Лонг потребує стоп<вхід<ціль, шорт — ціль<вхід<стоп. За порушення відстані обчислюються, але попередження не дозволяє вважати це правильно заданою угодою. Комісії, розриви ціни й різні результати серії не моделюються.",
          "example": "Вхід 250, стоп 240, ціль 280 дають відношення 3: достатньо вигравати 25 % угод, щоб вийти в нуль. За відношення 1 знадобилося б уже 50 %. За тих самих цін і порожнього обсягу відношення 3 та частка 25% лишаються, але грошових підсумків немає. Ціль на вході дає відношення 0 й поріг 100% із попередженням про неправильне розташування цілі.",
          "faq": [
            {
              "q": "Яке відношення вважається прийнятним?",
              "a": "Універсального прийнятного числа немає. За однакових результатів без витрат R=5 і 10% виграшів дає середню втрату, а R=1 і 60% — додатне очікуване значення. Саме відношення не прогнозує імовірність чи прибутковість."
            },
            {
              "q": "Як порахувати беззбиткову частку виграшів?",
              "a": "Відсоток дорівнює 100/(1+R). Для R=3 це 25%, для R=2 — 33,33%, для R=1 — 50%. Цей поріг передбачає однакові виграші та втрати без витрат; фактична частка вище нього не гарантує результат за інших умов."
            },
            {
              "q": "Чому не ставити ціль якнайдалі?",
              "a": "Бо далека ціль рідше досягається. Відношення 10 виглядає чудово, але якщо ціна доходить туди в одному випадку з двадцяти, стратегія збиткова."
            },
            {
              "q": "Чи змінюють комісії відношення прибутку до ризику?",
              "a": "Так, витрати змінюють фактичне відношення: зменшують отриманий прибуток і збільшують втрату. Показане тут відношення використовує лише відстані цін та ігнорує комісії, спред і прослизання."
            }
          ],
          "disclaimer": "Відношення й беззбиткова частка припускають однакові виграші та втрати без витрат. Вони не прогнозують ціну чи імовірність цілі; попередження про порядок цін треба враховувати."
        },
        "help": {
          "target": "Ціль не визначає імовірності виграшу; неправильний порядок дає попередження.",
          "qty": "Порожньо чи 0: лише відстані й відношення. Дробовий обсяг дозволено; крок не перевіряється."
        },
        "sources": [
          "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-15"
        ],
        "normal": {
          "inputs": {
            "direction": "long",
            "entry": 250,
            "stop": 240,
            "target": 280,
            "qty": 0
          },
          "expected": {
            "kind": "number",
            "value": 3
          },
          "rows": [
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 25
              }
            }
          ],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "",
          "independentLiteral": "3"
        },
        "boundary": {
          "inputs": {
            "direction": "long",
            "entry": 250,
            "stop": 240,
            "target": 280,
            "qty": ""
          },
          "expected": {
            "kind": "number",
            "value": 3
          },
          "rows": [
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 25
              }
            }
          ],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "",
          "independentLiteral": "3"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 3
        },
        "blankField": "entry",
        "domainField": "entry",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "de",
        "path": "/de/finanzen/chance-risiko-verhaeltnis/",
        "h1": "Chance-Risiko-Rechner",
        "body": {
          "longDescription": "Vergleicht den Abstand vom Einstieg zum Stopp mit dem Abstand zum Ziel. Die Stückzahl ist optional und nur für Geldsummen nötig; das Verhältnis entsteht aus drei Kursen. Verhältnis 3 ergibt 25% Break-even-Trefferquote, 0,5 rund 66,67%. Dies ist eine bedingte Schwelle für wiederholte gleiche Auszahlungen vor Kosten, keine Prognose von Wahrscheinlichkeit, Zielerreichbarkeit oder Qualität. Falsch angeordnete Kurse für die Richtung erzeugen eine Warnung.",
          "howToUse": [
            "Wähle die Richtung: eine Long-Position stoppt unter dem Einstieg, eine Short-Position darüber.",
            "Trage Einstiegskurs, Stoppkurs und Zielkurs ein.",
            "Trage die Größe ein, wenn du Risiko und Ertrag in Geld sehen willst.",
            "Vergleiche die Trefferquote für die Nulllinie mit deiner eigenen Statistik."
          ],
          "howItWorks": "Risiko je Einheit a=|Einstieg−Stopp|>0, möglicher Ertrag b=|Ziel−Einstieg|. Verhältnis R=b/a; Break-even-Prozent p=100/(1+R). Bei Stückzahl q>0 sind Geldsummen q×a und q×b; leer oder null lässt sie weg. Long verlangt Stopp<Einstieg<Ziel, Short Ziel<Einstieg<Stopp. Bei falscher Anordnung werden Abstände berechnet, aber eine Warnung kennzeichnet das ungültige Szenario. Gebühren, Kurslücken und unterschiedliche Serienergebnisse fehlen.",
          "example": "Einstieg 250, Stopp 240, Ziel 280 ergeben ein Verhältnis von 3: 25 % gewinnende Positionen genügen für ein Nullergebnis. Bei gleichen Kursen und leerer Stückzahl bleiben Verhältnis 3 und Quote 25%, Geldsummen entfallen. Ziel gleich Einstieg ergibt Verhältnis 0 und Schwelle 100% samt Warnung zur ungültigen Zielanordnung.",
          "faq": [
            {
              "q": "Worin unterscheidet sich das von der Positionsgröße?",
              "a": "Die Positionsgröße leitet Einheiten aus einem Risikobudget ab. Hier wird sie getrennt eingegeben und das Verhältnis vergleicht zwei Abstände. Keine der Zahlen bewertet allein Qualität oder Wahrscheinlichkeit."
            },
            {
              "q": "Was zeigt die Trefferquote für die Nulllinie?",
              "a": "Die Schwelle gilt für konstante Gewinn- und Verlustbeträge vor Kosten: R=3 ergibt 25%, R=1 50%, R=0,5 66,67%. Sie prognostiziert keine tatsächliche Trefferquote; wechselnde Ergebnisse brauchen eine Serienanalyse."
            },
            {
              "q": "Welches Verhältnis gilt als annehmbar?",
              "a": "Ein allgemein akzeptables Verhältnis gibt es nicht. R=2 braucht mehr als 33,33% Treffer für einen positiven Durchschnitt vor Kosten bei gleichen Auszahlungen. Ohne Wahrscheinlichkeit und Kosten bestimmt das Verhältnis keine Rentabilität."
            },
            {
              "q": "Warum werden die Abstände als Beträge genommen?",
              "a": "Weil eine Short-Position über dem Einstieg stoppt und darunter zielt, das Vorzeichen der Differenz also von der Richtung abhängt. Risiko und Ertrag sind Beträge und keine Richtungen."
            },
            {
              "q": "Sind Gebühren enthalten?",
              "a": "Nein. Für Nettoauszahlungen sind Kosten getrennt vom möglichen Gewinn abzuziehen und zum Modellverlust zu addieren. Die Differenz kann erheblich sein; ihre Größe wird hier nicht geschätzt."
            }
          ],
          "disclaimer": "Verhältnis und Break-even-Quote setzen gleiche Gewinne und Verluste vor Kosten voraus. Sie prognostizieren weder Kursbewegung noch Zielwahrscheinlichkeit; die Kursanordnungswarnung ist zu beachten."
        },
        "help": {
          "target": "Das Ziel bestimmt keine Gewinnwahrscheinlichkeit; falsche Kursanordnung erzeugt Warnung.",
          "qty": "Leer oder 0: nur Abstände und Verhältnis. Gebrochene Größe erlaubt; Instrumentschritte ungeprüft."
        },
        "sources": [
          "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-15"
        ],
        "normal": {
          "inputs": {
            "direction": "long",
            "entry": 250,
            "stop": 240,
            "target": 280,
            "qty": 0
          },
          "expected": {
            "kind": "number",
            "value": 3
          },
          "rows": [
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 25
              }
            }
          ],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "",
          "independentLiteral": "3"
        },
        "boundary": {
          "inputs": {
            "direction": "long",
            "entry": 250,
            "stop": 240,
            "target": 280,
            "qty": ""
          },
          "expected": {
            "kind": "number",
            "value": 3
          },
          "rows": [
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 25
              }
            }
          ],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "",
          "independentLiteral": "3"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 3
        },
        "blankField": "entry",
        "domainField": "entry",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "es",
        "path": "/es/finanzas/ratio-riesgo-beneficio/",
        "h1": "Calculadora de ratio riesgo-beneficio",
        "body": {
          "longDescription": "Compara la distancia de entrada a stop con la distancia de entrada a objetivo. El tamaño es opcional y solo sirve para importes monetarios; el ratio sale de tres precios. Ratio 3 da aciertos de equilibrio del 25%; 0,5, aproximadamente 66,67%. Es un umbral condicionado a resultados repetidos iguales y sin gastos, no una previsión de probabilidad, viabilidad del objetivo o calidad de la operación. Precios mal situados para el sentido elegido generan una advertencia.",
          "howToUse": [
            "Elige el sentido: un largo pone el stop por debajo de la entrada y un corto, por encima.",
            "Introduce el precio de entrada, el del stop y el objetivo.",
            "Introduce el tamaño si quieres el riesgo y el beneficio en dinero.",
            "Compara el porcentaje de equilibrio con tus propias estadísticas de operación."
          ],
          "howItWorks": "Riesgo por unidad a=|entrada−stop|>0 y resultado potencial b=|objetivo−entrada|. Ratio R=b/a; porcentaje de equilibrio p=100/(1+R). Con tamaño q>0, importes q×a y q×b; vacío o cero los omite. Largo exige stop<entrada<objetivo; corto, objetivo<entrada<stop. Si el orden falla, se calculan distancias, pero una advertencia indica que no es una operación correctamente especificada. No se modelan gastos, saltos de precio ni resultados variables.",
          "example": "Entrada 250, stop 240 y objetivo 280 dan un ratio de 3: basta con ganar el 25 % de las operaciones para no perder. Con los mismos precios y tamaño vacío, se mantienen ratio 3 y porcentaje 25%, sin totales monetarios. Objetivo igual a entrada da ratio 0 y umbral 100%, con advertencia por orden incorrecto del objetivo.",
          "faq": [
            {
              "q": "¿En qué se diferencia del dimensionamiento de posiciones?",
              "a": "El dimensionamiento deduce unidades de un presupuesto de riesgo. Aquí el tamaño se introduce aparte y el ratio compara dos distancias. Ninguna cifra sola evalúa calidad o probabilidad."
            },
            {
              "q": "¿Qué indica el porcentaje de aciertos de equilibrio?",
              "a": "Es el umbral con ganancias y pérdidas constantes antes de gastos: R=3 da 25%, R=1 50% y R=0,5 66,67%. No predice los aciertos reales; resultados variables requieren estudiar toda la serie."
            },
            {
              "q": "¿Qué ratio se considera aceptable?",
              "a": "No hay un ratio universalmente aceptable. R=2 necesita más del 33,33% de aciertos para media positiva antes de gastos con pagos iguales. Sin probabilidades y costes, el ratio no determina rentabilidad."
            },
            {
              "q": "¿Por qué las distancias se toman en valor absoluto?",
              "a": "Porque un corto pone el stop por encima de la entrada y el objetivo por debajo, así que el signo de la diferencia depende del sentido. El riesgo y el beneficio son magnitudes, no direcciones."
            },
            {
              "q": "¿Están incluidas las comisiones?",
              "a": "No. El ratio de resultados netos exige restar gastos de las ganancias posibles y añadirlos a las pérdidas modeladas. La diferencia puede ser importante; no se estima su tamaño."
            }
          ],
          "disclaimer": "Ratio y aciertos de equilibrio suponen ganancias y pérdidas iguales antes de gastos. No predicen movimiento ni probabilidad del objetivo; debe atenderse la advertencia de orden de precios."
        },
        "help": {
          "target": "El objetivo no determina probabilidad; orden incorrecto genera advertencia.",
          "qty": "Vacío o 0: solo distancias y ratio. Tamaño fraccionario admitido; sin revisar pasos del instrumento."
        },
        "sources": [
          "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-15"
        ],
        "normal": {
          "inputs": {
            "direction": "long",
            "entry": 250,
            "stop": 240,
            "target": 280,
            "qty": 0
          },
          "expected": {
            "kind": "number",
            "value": 3
          },
          "rows": [
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 25
              }
            }
          ],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "",
          "independentLiteral": "3"
        },
        "boundary": {
          "inputs": {
            "direction": "long",
            "entry": 250,
            "stop": 240,
            "target": 280,
            "qty": ""
          },
          "expected": {
            "kind": "number",
            "value": 3
          },
          "rows": [
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 25
              }
            }
          ],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "",
          "independentLiteral": "3"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 3
        },
        "blankField": "entry",
        "domainField": "entry",
        "domainInvalid": -1,
        "countFields": []
      }
    ]
  },
  {
    "id": "salary-convert",
    "category": "finance",
    "defaults": {
      "amount": 180000,
      "fromPeriod": "month",
      "toPeriod": "year"
    },
    "fieldNames": [
      "amount",
      "fromPeriod",
      "toPeriod"
    ],
    "defaultInactive": [],
    "pages": [
      {
        "locale": "ru",
        "path": "/ru/finance/salary-period-convert/",
        "h1": "Конвертер зарплаты по периодам",
        "body": {
          "longDescription": "Переводит оплату между часом, днём, неделей, месяцем и годом через фиксированные часы: 8, 40, 168 и 2016 соответственно. Это условная модель для сопоставления сумм, не установленная законом или договором норма: её год состоит из 12 месяцев и 50,4 таких недель. Конкретный календарь, отпуск, налог и фактический график здесь не подставляются. Все периоды показаны рядом, чтобы сравнивать предложения на одинаковой базе, а не по запомненным суммам.",
          "howToUse": [
            "Введите сумму, которая вам известна.",
            "Выберите период, к которому эта сумма относится.",
            "Выберите период, в который нужно перевести.",
            "Остальные периоды показаны рядом для сравнения."
          ],
          "howItWorks": "Сумма делится на часы своего периода и умножается на часы целевого. День 8 ч, неделя 40 ч, месяц 168 ч, год 2 016 ч.",
          "example": "180 000 ₽ в месяц — это 2 160 000 ₽ в год и около 1 071,43 ₽ в час. Проверка границы модели: 40 за неделю означает 1 за час, 168 за месяц и 2016 за год, а не 2080 по календарному правилу 52 недель. Исходный и целевой одинаковые периоды сохраняют сумму.",
          "faq": [
            {
              "q": "Почему в месяце 168 часов, а не по календарю?",
              "a": "Это выбранная модель: 21 день × 8 часов. Она не утверждает, что каждый договор или месяц содержит 168 часов. Год здесь равен 2016 часам, поэтому перевод из недельной ставки не следует правилу 52 недель; для реального графика используйте фактические часы отдельно."
            },
            {
              "q": "Учитываются ли отпуск и праздники?",
              "a": "Нет. Здесь одинаковые условные часы для всех сумм. Стоимость фактически отработанного часа требует отдельно определить выплаченный доход и реальные часы, включая правила оплачиваемого и неоплачиваемого отсутствия."
            },
            {
              "q": "Стоит ли сравнивать предложения по часовой ставке?",
              "a": "Часовая база помогает, но этот инструмент не меняет число часов под четырёхдневный график. При равной недельной оплате 32 вместо 40 часов означает на 20% меньше времени и на 25% выше оплату часа. Взносы, отпуск и условия договора сравнивайте отдельно."
            },
            {
              "q": "Сумма берётся до налогов или после?",
              "a": "Та, которую вы ввели. Перевод пропорционален: начисленная на входе даёт начисленную на выходе, чистая — чистую."
            }
          ],
          "disclaimer": "Фиксированные 8/40/168/2016 часов служат только этой модели сравнения. Календарная норма, фактические рабочие часы, оплачиваемое отсутствие и налоговые преобразования не рассчитываются."
        },
        "help": {
          "amount": "База до/после удержаний сохраняется; налог и валютная конвертация не вычисляются.",
          "fromPeriod": "Фиксированная модель: день 8 ч, неделя 40 ч, месяц 168 ч, год 2016 ч."
        },
        "sources": [
          "https://webapps.dol.gov/elaws/otcalculator.htm"
        ],
        "normal": {
          "inputs": {
            "amount": 180000,
            "fromPeriod": "month",
            "toPeriod": "year"
          },
          "expected": {
            "kind": "number",
            "value": 2160000
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 1071.43
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "₽",
          "independentLiteral": "2 160 000,00 ₽"
        },
        "boundary": {
          "inputs": {
            "amount": 40,
            "fromPeriod": "week",
            "toPeriod": "year"
          },
          "expected": {
            "kind": "number",
            "value": 2016
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 1
              }
            },
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 168
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "₽",
          "independentLiteral": "2 016,00 ₽"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 2160000
        },
        "blankField": "amount",
        "domainField": "amount",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "en",
        "path": "/en/finance/salary-period-converter/",
        "h1": "Salary period converter",
        "body": {
          "longDescription": "Converts pay between hour, day, week, month and year using fixed hours: 8, 40, 168 and 2016 respectively. This is a comparison model rather than a statutory or contractual norm: its year contains 12 months and 50.4 of these weeks. It does not substitute a real calendar, leave, taxes or actual schedule. Periods appear together so offers can be compared on the same basis rather than remembered figures.",
          "howToUse": [
            "Enter the amount you already know.",
            "Choose the period that amount refers to.",
            "Choose the period you want it converted into.",
            "The remaining periods are shown alongside for comparison."
          ],
          "howItWorks": "The amount is divided by the hours in its own period and multiplied by the hours in the target one. Day 8 h, week 40 h, month 168 h, year 2,016 h.",
          "example": "180,000 a month is 2,160,000 a year and about 1,071.43 an hour. Model check: 40 per week gives 1 per hour, 168 per month and 2016 per year, not 2080 from a 52-week calendar convention. Identical source and target periods preserve the amount.",
          "faq": [
            {
              "q": "Why is a month 168 hours rather than the actual calendar?",
              "a": "It is the selected model: 21 days × 8 hours. It does not assert that every contract or month has 168 hours. The modeled year has 2016 hours, so weekly-to-year conversion does not use 52 weeks; use actual hours separately for a real schedule."
            },
            {
              "q": "Does this account for holidays and paid leave?",
              "a": "No. All amounts use the same modeled hours. Pay per hour actually worked needs a separate definition of paid income and actual hours, including paid and unpaid absence arrangements."
            },
            {
              "q": "Should I compare offers on the hourly figure?",
              "a": "An hourly basis helps, but this tool does not change its hours for a four-day schedule. At equal weekly pay, 32 rather than 40 hours means 20% less time and 25% higher hourly pay. Compare contributions, leave and contract terms separately."
            },
            {
              "q": "Is the amount gross or net?",
              "a": "Whatever you enter. The conversion is proportional, so gross in gives gross out, and net in gives net out."
            }
          ],
          "disclaimer": "Fixed 8/40/168/2016 hours belong only to this comparison model. Calendar norms, actual hours, paid absence and tax conversions are not calculated."
        },
        "help": {
          "amount": "Gross/net basis is preserved; no tax or currency conversion is calculated.",
          "fromPeriod": "Fixed model: day 8 h, week 40 h, month 168 h, year 2016 h."
        },
        "sources": [
          "https://webapps.dol.gov/elaws/otcalculator.htm"
        ],
        "normal": {
          "inputs": {
            "amount": 180000,
            "fromPeriod": "month",
            "toPeriod": "year"
          },
          "expected": {
            "kind": "number",
            "value": 2160000
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 1071.43
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "$",
          "independentLiteral": "2 160 000,00 ₽"
        },
        "boundary": {
          "inputs": {
            "amount": 40,
            "fromPeriod": "week",
            "toPeriod": "year"
          },
          "expected": {
            "kind": "number",
            "value": 2016
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 1
              }
            },
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 168
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "$",
          "independentLiteral": "2 016,00 ₽"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 2160000
        },
        "blankField": "amount",
        "domainField": "amount",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "uk",
        "path": "/uk/finansy/konverter-zarplaty/",
        "h1": "Конвертер зарплати за періодами",
        "body": {
          "longDescription": "Переводить оплату між годиною, днем, тижнем, місяцем і роком за фіксованими годинами: 8, 40, 168 та 2016 відповідно. Це модель порівняння, не законодавча чи договірна норма: її рік містить 12 місяців і 50,4 таких тижня. Календар, відпустка, податки та фактичний графік тут не підставляються. Усі періоди показані разом, щоб зіставляти пропозиції на однаковій базі.",
          "howToUse": [
            "Виберіть вихідний період.",
            "Введіть суму.",
            "Виберіть цільовий період."
          ],
          "howItWorks": "Сума ділиться на години свого періоду й множиться на години цільового. Прийнято такі норми: день 8 годин, тиждень 40 годин, місяць 168 годин, рік 2016 годин. Це умовні середні значення, зручні для порівняння.",
          "example": "180 000 ₴ на місяць — це 2 160 000 ₴ на рік і близько 1071,43 ₴ на годину. Перевірка моделі: 40 за тиждень дає 1 за годину, 168 за місяць і 2016 за рік, не 2080 за календарним правилом 52 тижнів. Однакові вихідний і цільовий періоди зберігають суму.",
          "faq": [
            {
              "q": "Чому в місяці 168 годин?",
              "a": "Це обрана модель: 21 день × 8 годин, а не твердження про кожен договір чи місяць. Рік тут має 2016 годин, тому переведення тижневої ставки в річну не використовує 52 тижні. Для фактичного графіка потрібні окремі реальні години."
            },
            {
              "q": "Чи враховано відпустку й свята?",
              "a": "Ні. Усі суми використовують однакові умовні години. Оплата фактично відпрацьованої години потребує окремо визначити виплачений дохід і реальні години з урахуванням оплачуваної та неоплачуваної відсутності."
            },
            {
              "q": "Як порівняти оклад і погодинну ставку чесно?",
              "a": "Погодинна база допомагає, але цей інструмент не змінює години під чотириденний графік. За однакової тижневої оплати 32 замість 40 годин означає на 20% менше часу й на 25% вищу оплату години. Внески, відпустку й умови договору зіставляйте окремо."
            },
            {
              "q": "Суми до податків чи після?",
              "a": "Пропорційний перерахунок зберігає введену базу: нарахована сума дає нараховану, чиста — чисту. Він не обчислює податок і не перетворює одну базу на іншу; для порівняння не змішуйте їх."
            }
          ],
          "disclaimer": "Фіксовані 8/40/168/2016 годин стосуються лише цієї моделі порівняння. Календарна норма, фактичні години, оплачувана відсутність і перерахунок податків не обчислюються."
        },
        "help": {
          "amount": "База до/після утримань зберігається; податок і конвертація не обчислюються.",
          "fromPeriod": "Фіксована модель: день 8 год, тиждень 40, місяць 168, рік 2016."
        },
        "sources": [
          "https://webapps.dol.gov/elaws/otcalculator.htm"
        ],
        "normal": {
          "inputs": {
            "amount": 180000,
            "fromPeriod": "month",
            "toPeriod": "year"
          },
          "expected": {
            "kind": "number",
            "value": 2160000
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 1071.43
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "₴",
          "independentLiteral": "2 160 000,00 ₽"
        },
        "boundary": {
          "inputs": {
            "amount": 40,
            "fromPeriod": "week",
            "toPeriod": "year"
          },
          "expected": {
            "kind": "number",
            "value": 2016
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 1
              }
            },
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 168
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "₴",
          "independentLiteral": "2 016,00 ₽"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 2160000
        },
        "blankField": "amount",
        "domainField": "amount",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "de",
        "path": "/de/finanzen/gehalt-umrechnen/",
        "h1": "Gehaltsumrechner nach Zeitraum",
        "body": {
          "longDescription": "Rechnet Vergütung zwischen Stunde, Tag, Woche, Monat und Jahr mit festen Stunden um: 8, 40, 168 und 2016. Das ist ein Vergleichsmodell, keine gesetzliche oder vertragliche Norm: sein Jahr umfasst 12 Monate und 50,4 solcher Wochen. Kalender, Urlaub, Steuern und tatsächlicher Arbeitsplan werden nicht eingesetzt. Die Zeiträume stehen nebeneinander, damit Angebote auf gleicher Basis verglichen werden können.",
          "howToUse": [
            "Trage den Betrag ein, den du bereits kennst.",
            "Wähle den Zeitraum, auf den sich dieser Betrag bezieht.",
            "Wähle den Zeitraum, in den du ihn umrechnen willst.",
            "Die übrigen Zeiträume stehen zum Vergleich daneben."
          ],
          "howItWorks": "Der Betrag wird durch die Stunden seines eigenen Zeitraums geteilt und mit den Stunden des Zielzeitraums multipliziert. Tag 8 h, Woche 40 h, Monat 168 h, Jahr 2016 h.",
          "example": "4200 € im Monat sind 50 400 € im Jahr und 25 € in der Stunde. Modellprüfung: 40 je Woche ergeben 1 je Stunde, 168 je Monat und 2016 je Jahr, nicht 2080 nach einer 52-Wochen-Konvention. Gleiche Ausgangs- und Zielzeiträume erhalten den Betrag.",
          "faq": [
            {
              "q": "Warum hat ein Monat 168 Stunden und nicht den wirklichen Kalender?",
              "a": "Es ist das gewählte Modell: 21 Tage × 8 Stunden, keine Aussage über jeden Vertrag oder Monat. Das Modelljahr hat 2016 Stunden; die Umrechnung vom Wochenbetrag nutzt daher nicht 52 Wochen. Für reale Arbeitspläne sind tatsächliche Stunden gesondert nötig."
            },
            {
              "q": "Sind Feiertage und Urlaub berücksichtigt?",
              "a": "Nein. Alle Beträge nutzen dieselben Modellstunden. Vergütung je tatsächlich gearbeiteter Stunde erfordert eine getrennte Ermittlung von ausgezahltem Einkommen und realen Stunden samt bezahlten und unbezahlten Abwesenheiten."
            },
            {
              "q": "Soll ich Angebote über den Stundenlohn vergleichen?",
              "a": "Eine Stundenbasis hilft, aber dieses Werkzeug passt Stunden nicht an eine Viertagewoche an. Bei gleicher Wochenvergütung bedeuten 32 statt 40 Stunden 20% weniger Zeit und 25% höheren Stundenwert. Beiträge, Urlaub und Vertragsbedingungen sind getrennt zu vergleichen."
            },
            {
              "q": "Ist der Betrag brutto oder netto?",
              "a": "Was immer du einträgst. Die Umrechnung ist proportional: brutto hinein ergibt brutto heraus, netto hinein ergibt netto heraus."
            }
          ],
          "disclaimer": "Feste 8/40/168/2016 Stunden gelten nur für dieses Vergleichsmodell. Kalendernormen, tatsächliche Stunden, bezahlte Abwesenheit und Steuerumrechnungen werden nicht berechnet."
        },
        "help": {
          "amount": "Brutto-/Nettobasis bleibt erhalten; keine Steuer- oder Währungsrechnung.",
          "fromPeriod": "Festes Modell: Tag 8 h, Woche 40 h, Monat 168 h, Jahr 2016 h."
        },
        "sources": [
          "https://webapps.dol.gov/elaws/otcalculator.htm"
        ],
        "normal": {
          "inputs": {
            "amount": 4200,
            "fromPeriod": "month",
            "toPeriod": "year"
          },
          "expected": {
            "kind": "number",
            "value": 50400
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 25
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "€",
          "independentLiteral": "50 400,00 ₽"
        },
        "boundary": {
          "inputs": {
            "amount": 40,
            "fromPeriod": "week",
            "toPeriod": "year"
          },
          "expected": {
            "kind": "number",
            "value": 2016
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 1
              }
            },
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 168
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "€",
          "independentLiteral": "2 016,00 ₽"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 2160000
        },
        "blankField": "amount",
        "domainField": "amount",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "es",
        "path": "/es/finanzas/conversor-de-salario/",
        "h1": "Conversor de salario por periodo",
        "body": {
          "longDescription": "Convierte remuneración entre hora, día, semana, mes y año con horas fijas: 8, 40, 168 y 2016 respectivamente. Es un modelo de comparación, no una norma legal o contractual: su año contiene 12 meses y 50,4 de esas semanas. No introduce calendario real, vacaciones, impuestos ni jornada efectiva. Los periodos aparecen juntos para comparar ofertas sobre la misma base.",
          "howToUse": [
            "Introduce el importe que ya conoces.",
            "Elige el periodo al que se refiere ese importe.",
            "Elige el periodo al que quieres convertirlo.",
            "Los demás periodos aparecen al lado para comparar."
          ],
          "howItWorks": "El importe se divide entre las horas de su propio periodo y se multiplica por las del periodo de destino. Día 8 h, semana 40 h, mes 168 h, año 2016 h.",
          "example": "1800 al mes son 21 600 al año y unos 10,71 por hora. Comprobación del modelo: 40 semanales dan 1 por hora, 168 al mes y 2016 al año, no 2080 según 52 semanas. Periodos de origen y destino iguales conservan el importe.",
          "faq": [
            {
              "q": "¿Por qué un mes son 168 horas y no el calendario real?",
              "a": "Es el modelo elegido: 21 días × 8 horas, no una afirmación sobre cada contrato o mes. El año modelado tiene 2016 horas; convertir un salario semanal a anual no usa 52 semanas. Para una jornada real hacen falta horas efectivas aparte."
            },
            {
              "q": "¿Tiene en cuenta los festivos y las vacaciones retribuidas?",
              "a": "No. Todos los importes usan las mismas horas modeladas. Pago por hora efectivamente trabajada exige definir aparte ingresos pagados y horas reales, incluidas ausencias pagadas y no pagadas."
            },
            {
              "q": "¿Debo comparar ofertas por la cifra horaria?",
              "a": "La base horaria ayuda, pero esta herramienta no adapta sus horas a una semana de cuatro días. Con igual sueldo semanal, 32 en vez de 40 horas son un 20% menos de tiempo y un 25% más por hora. Compara aparte cotizaciones, vacaciones y condiciones."
            },
            {
              "q": "¿El importe es bruto o neto?",
              "a": "El que introduzcas. La conversión es proporcional, así que un bruto de entrada da un bruto de salida y un neto de entrada, un neto de salida."
            }
          ],
          "disclaimer": "Las 8/40/168/2016 horas fijas solo corresponden a este modelo. No calcula normas de calendario, horas reales, ausencias pagadas ni conversiones fiscales."
        },
        "help": {
          "amount": "Se conserva base bruta/neta; no calcula impuestos ni cambio de moneda.",
          "fromPeriod": "Modelo fijo: día 8 h, semana 40 h, mes 168 h, año 2016 h."
        },
        "sources": [
          "https://webapps.dol.gov/elaws/otcalculator.htm"
        ],
        "normal": {
          "inputs": {
            "amount": 1800,
            "fromPeriod": "month",
            "toPeriod": "year"
          },
          "expected": {
            "kind": "number",
            "value": 21600
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 10.71
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "€",
          "independentLiteral": "21 600,00 ₽"
        },
        "boundary": {
          "inputs": {
            "amount": 40,
            "fromPeriod": "week",
            "toPeriod": "year"
          },
          "expected": {
            "kind": "number",
            "value": 2016
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 1
              }
            },
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 168
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "€",
          "independentLiteral": "2 016,00 ₽"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 2160000
        },
        "blankField": "amount",
        "domainField": "amount",
        "domainInvalid": -1,
        "countFields": []
      }
    ]
  },
  {
    "id": "salary-raise",
    "category": "finance",
    "defaults": {
      "mode": "fromNew",
      "oldSalary": 120000,
      "newSalary": 148000,
      "raisePct": 15
    },
    "fieldNames": [
      "mode",
      "oldSalary",
      "newSalary",
      "raisePct"
    ],
    "defaultInactive": [
      "raisePct"
    ],
    "pages": [
      {
        "locale": "ru",
        "path": "/ru/finance/salary-raise/",
        "h1": "Калькулятор повышения зарплаты",
        "body": {
          "longDescription": "Два направления нужны потому, что переговоры идут в процентах, а решения принимаются в деньгах. По новой сумме калькулятор возвращает процент, по проценту — сумму. Оба показывают рядом разницу в деньгах, и это то самое число, которое что-то меняет: десять процентов на маленькой зарплате и три на большой могут оказаться одинаковой суммой. Понижение показывается честным отрицательным процентом, а не прячется нулём: арифметика работает одинаково в обе стороны, и притворяться иначе значило бы неверно описать произошедшее.",
          "howToUse": [
            "Выберите, что вам известно: новая зарплата или процент.",
            "Введите прежнюю зарплату.",
            "Введите новую сумму либо процент повышения.",
            "Сравнивайте предложения по разнице в деньгах, а не по одному проценту."
          ],
          "howItWorks": "Процент = (стало ÷ было − 1) × 100. Обратный ход даёт стало = было × (1 + процент ÷ 100). Сравниваются положительные суммы за одинаковый период и на одной налоговой базе. Режим процента принимает значение строго выше −100%; режим новой суммы не использует скрытое поле процента. Инфляция и налоги не вычитаются автоматически. При одинаковых суммах изменение и разница равны 0.",
          "example": "Рост со 120 000 до 148 000 — это повышение на 23,33 % и 28 000 ₽ в месяц сверху. Понижение с 100 до 50 означает −50% и разницу −50; одинаковые суммы 100 и 100 дают 0%. Значение −100% в режиме процента не принимается, потому что модель требует положительную новую зарплату.",
          "faq": [
            {
              "q": "Процент считать от начисленной зарплаты или от суммы на руки?",
              "a": "Можно использовать начисленную или чистую сумму, но обе зарплаты должны относиться к одинаковому периоду и одной базе. Калькулятор не переводит начисленную сумму в чистую; изменение налогов может дать другой процент суммы на руки."
            },
            {
              "q": "Съедает ли инфляция повышение зарплаты?",
              "a": "Может: номинальные 5% повышения при росте цен на 8% означают реальное снижение примерно на 2,78%: 1,05/1,08−1. Этот калькулятор считает номинальное изменение; покупательная способность требует отдельной поправки на цены за тот же период."
            },
            {
              "q": "Почему понижение показано отрицательным процентом?",
              "a": "Потому что оно им и является. Обрезав его до нуля, мы спрятали бы направление изменения, а арифметика в обе стороны ведёт себя одинаково."
            },
            {
              "q": "Зачем показывать разницу в деньгах?",
              "a": "Потому что проценты скрывают базу. Три процента на большой зарплате бывают выгоднее десяти на маленькой, и увидеть это позволяет только денежная колонка."
            }
          ],
          "disclaimer": "Показано номинальное изменение двух сумм на одинаковой базе. Налоги, инфляция, валюта, изменение рабочего времени и обязательность повышения не определяются."
        },
        "help": {
          "oldSalary": "Обе суммы должны относиться к одному периоду и одной базе до/после удержаний."
        },
        "sources": [],
        "normal": {
          "inputs": {
            "mode": "fromNew",
            "oldSalary": 120000,
            "newSalary": 148000,
            "raisePct": 15
          },
          "expected": {
            "kind": "number",
            "value": 23.33
          },
          "rows": [],
          "inactive": [
            "raisePct"
          ],
          "rowCount": 4,
          "primaryUnit": "%",
          "independentLiteral": "23,33%"
        },
        "boundary": {
          "inputs": {
            "mode": "fromNew",
            "oldSalary": 100,
            "newSalary": 50,
            "raisePct": 15
          },
          "expected": {
            "kind": "number",
            "value": -50
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": -50
              }
            }
          ],
          "inactive": [
            "raisePct"
          ],
          "rowCount": 4,
          "primaryUnit": "%",
          "independentLiteral": "-50,00%"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 23.33
        },
        "blankField": "oldSalary",
        "domainField": "oldSalary",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "en",
        "path": "/en/finance/salary-raise-calculator/",
        "h1": "Salary raise calculator",
        "body": {
          "longDescription": "The two directions matter because negotiations run in percentages while decisions are made in money. Given the new figure, the calculator returns the percentage; given the percentage, it returns the figure. Both show the difference in currency alongside, which is the number that actually changes anything: ten per cent on a small salary and three per cent on a large one can be the same amount of money. A decrease is shown honestly as a negative percentage rather than hidden as zero — the arithmetic works the same in both directions, and pretending otherwise would misdescribe what happened.",
          "howToUse": [
            "Choose whether you know the new salary or the percentage.",
            "Enter the previous salary.",
            "Enter either the new salary or the raise percentage.",
            "Compare offers on the difference in money, not on the percentage alone."
          ],
          "howItWorks": "Percentage = (new ÷ previous − 1) × 100. The reverse gives new = previous × (1 + percentage ÷ 100). Positive amounts must use the same period and tax basis. Percentage mode requires a value strictly above −100%; new-amount mode ignores the hidden percentage. Inflation and taxes are not deducted automatically. Equal salaries give zero change and zero difference.",
          "example": "Going from 120,000 to 148,000 is a 23.33% raise and 28,000 more a month. A decrease from 100 to 50 means −50% and difference −50; equal amounts 100 and 100 give 0%. Percentage −100% is rejected because this model requires positive new salary.",
          "faq": [
            {
              "q": "Should the percentage be taken from gross or net pay?",
              "a": "Either gross or net can be used, but both salaries must share the same period and basis. The calculator does not convert gross to net; changes in deductions can give take-home pay a different percentage change."
            },
            {
              "q": "Does this account for inflation?",
              "a": "No. A five per cent raise during eight per cent inflation is a pay cut in real terms, and comparing the two figures is a separate calculation."
            },
            {
              "q": "Why is a decrease shown as a negative percentage?",
              "a": "Because it is one. Clamping it to zero would hide the direction of the change, and the arithmetic behaves identically either way."
            },
            {
              "q": "Why show the difference in money as well?",
              "a": "Because percentages hide the base. Three per cent on a large salary can beat ten per cent on a small one, and only the money column makes that visible."
            }
          ],
          "disclaimer": "This shows nominal change between amounts on the same basis. Taxes, inflation, currency conversion, working-time changes and entitlement to a raise are not determined."
        },
        "help": {
          "oldSalary": "Both amounts need the same period and gross/net basis."
        },
        "sources": [],
        "normal": {
          "inputs": {
            "mode": "fromNew",
            "oldSalary": 120000,
            "newSalary": 148000,
            "raisePct": 15
          },
          "expected": {
            "kind": "number",
            "value": 23.33
          },
          "rows": [],
          "inactive": [
            "raisePct"
          ],
          "rowCount": 4,
          "primaryUnit": "%",
          "independentLiteral": "23,33%"
        },
        "boundary": {
          "inputs": {
            "mode": "fromNew",
            "oldSalary": 100,
            "newSalary": 50,
            "raisePct": 15
          },
          "expected": {
            "kind": "number",
            "value": -50
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": -50
              }
            }
          ],
          "inactive": [
            "raisePct"
          ],
          "rowCount": 4,
          "primaryUnit": "%",
          "independentLiteral": "-50,00%"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 23.33
        },
        "blankField": "oldSalary",
        "domainField": "oldSalary",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "uk",
        "path": "/uk/finansy/pidvyshchennya-zarplaty/",
        "h1": "Калькулятор підвищення зарплати",
        "body": {
          "longDescription": "Підвищення зарплати рахується в обидва боки: за старою й новою сумою знаходиться відсоток, за відсотком — нова сума. Друге число тут важливіше за перше: приріст у відсотках звучить добре, а рішення приймаються за абсолютною сумою на місяць.",
          "howToUse": [
            "Виберіть напрямок розрахунку.",
            "Введіть поточну зарплату.",
            "Введіть нову зарплату або бажаний відсоток."
          ],
          "howItWorks": "Відсоток рахується як (стало ÷ було − 1) × 100. Зворотний хід дає стало = було × (1 + відсоток ÷ 100). Поруч виводиться абсолютна різниця на місяць — саме вона й відчувається у бюджеті. Порівнюються додатні суми за однаковий період і на одній податковій базі. Режим відсотка приймає значення строго понад −100%; режим нової суми не використовує прихований відсоток. Інфляція й податки не віднімаються автоматично. Однакові суми дають нульову зміну й різницю.",
          "example": "Зростання зі 120 000 ₴ до 148 000 ₴ — це підвищення на 23,33 % і 28 000 ₴ на місяць понад попереднє. Зниження зі 100 до 50 означає −50% і різницю −50; однакові суми 100 та 100 дають 0%. Відсоток −100% не приймається, бо модель потребує додатної нової зарплати.",
          "faq": [
            {
              "q": "Чи достатньо підвищення, щоб покрити інфляцію?",
              "a": "Порівнюйте відсоток підвищення з річною інфляцією. Приріст на 8 % за інфляції 10 % означає реальне зниження доходу, хоча номінально зарплата зросла."
            },
            {
              "q": "Чому відсоток від меншої суми більший?",
              "a": "Бо база менша: приріст 10 000 ₴ до 50 000 ₴ дає 20%, а до 150 000 ₴ — близько 6,7%. Обидва відсотки правильні; для порівняння підвищень корисно показувати також абсолютну різницю й однаковий період."
            },
            {
              "q": "Рахувати до податків чи після?",
              "a": "Використовуйте одну базу й однаковий період для обох сум: нараховані або чисті. Відсотки збігатимуться лише за однакової пропорційної частки утримань. Податки та внески тут не обчислюються."
            },
            {
              "q": "Як порахувати підвищення за кілька років?",
              "a": "Для n років і додатних сум середньорічний темп дорівнює ((нова/стара)^(1/n)−1)×100. Просте ділення сумарного приросту на роки не відтворює складний темп. Тут n не вводиться: калькулятор показує лише зміну між двома сумами."
            }
          ],
          "disclaimer": "Показано номінальну зміну двох сум на однаковій базі. Податки, інфляція, конвертація, зміна часу та право на підвищення не визначаються."
        },
        "help": {
          "oldSalary": "Обидві суми мають однаковий період і базу до/після утримань."
        },
        "sources": [],
        "normal": {
          "inputs": {
            "mode": "fromNew",
            "oldSalary": 120000,
            "newSalary": 148000,
            "raisePct": 15
          },
          "expected": {
            "kind": "number",
            "value": 23.33
          },
          "rows": [],
          "inactive": [
            "raisePct"
          ],
          "rowCount": 4,
          "primaryUnit": "%",
          "independentLiteral": "23,33%"
        },
        "boundary": {
          "inputs": {
            "mode": "fromNew",
            "oldSalary": 100,
            "newSalary": 50,
            "raisePct": 15
          },
          "expected": {
            "kind": "number",
            "value": -50
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": -50
              }
            }
          ],
          "inactive": [
            "raisePct"
          ],
          "rowCount": 4,
          "primaryUnit": "%",
          "independentLiteral": "-50,00%"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 23.33
        },
        "blankField": "oldSalary",
        "domainField": "oldSalary",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "de",
        "path": "/de/finanzen/gehaltserhoehung-rechner/",
        "h1": "Gehaltserhöhungsrechner",
        "body": {
          "longDescription": "Die beiden Richtungen zählen, weil Verhandlungen in Prozent geführt und Entscheidungen in Geld getroffen werden. Ist die neue Zahl bekannt, liefert der Rechner den Prozentsatz; ist der Prozentsatz bekannt, liefert er die Zahl. Beide zeigen den Unterschied in Euro daneben, und das ist die Zahl, die wirklich etwas ändert: zehn Prozent auf ein kleines Gehalt und drei Prozent auf ein großes können derselbe Betrag sein. Eine Kürzung wird ehrlich als negativer Prozentsatz ausgewiesen und nicht als null versteckt — die Rechnung läuft in beide Richtungen gleich, und alles andere beschriebe das Geschehene falsch.",
          "howToUse": [
            "Wähle, ob du das neue Gehalt oder den Prozentsatz kennst.",
            "Trage das bisherige Gehalt ein.",
            "Trage entweder das neue Gehalt oder den Prozentsatz der Erhöhung ein.",
            "Vergleiche Angebote am Unterschied in Geld und nicht am Prozentsatz allein."
          ],
          "howItWorks": "Prozentsatz = (neu ÷ bisher − 1) × 100. Umgekehrt gilt neu = bisher × (1 + Prozentsatz ÷ 100). Positive Beträge müssen denselben Zeitraum und dieselbe Steuerbasis verwenden. Der Prozentmodus verlangt einen Wert strikt über −100%; der neue Betragsmodus ignoriert das ausgeblendete Prozentfeld. Inflation und Steuern werden nicht automatisch abgezogen. Gleiche Gehälter ergeben null Änderung und Differenz.",
          "example": "Von 3400 € auf 3750 € sind 10,29 % und 350 € mehr im Monat. Eine Kürzung von 100 auf 50 bedeutet −50% und Differenz −50; gleiche Beträge 100 und 100 ergeben 0%. −100% wird abgelehnt, weil das Modell ein positives neues Gehalt verlangt.",
          "faq": [
            {
              "q": "Wird der Prozentsatz vom Brutto- oder Nettogehalt genommen?",
              "a": "Brutto oder netto ist möglich, aber beide Gehälter müssen denselben Zeitraum und dieselbe Basis verwenden. Brutto wird nicht in netto umgerechnet; geänderte Abzüge können einen anderen Nettoprozentsatz ergeben."
            },
            {
              "q": "Ist die Inflation berücksichtigt?",
              "a": "Nein. Eine Erhöhung um fünf Prozent bei acht Prozent Inflation ist real eine Kürzung, und dieser Vergleich ist eine eigene Rechnung."
            },
            {
              "q": "Warum wird eine Kürzung als negativer Prozentsatz angezeigt?",
              "a": "Weil sie eine ist. Bei null abzuschneiden verbärge die Richtung der Veränderung, und die Rechnung verhält sich in beide Richtungen gleich."
            },
            {
              "q": "Wozu zusätzlich der Unterschied in Geld?",
              "a": "Weil Prozentangaben die Bezugsgröße verbergen. Drei Prozent auf ein großes Gehalt können zehn Prozent auf ein kleines schlagen, und erst die Spalte in Euro macht das sichtbar."
            }
          ],
          "disclaimer": "Gezeigt wird die nominale Änderung zweier Beträge gleicher Basis. Steuern, Inflation, Währungsumrechnung, Arbeitszeitänderung und Erhöhungsanspruch werden nicht bestimmt."
        },
        "help": {
          "oldSalary": "Beide Beträge brauchen gleichen Zeitraum und Brutto-/Nettobasis."
        },
        "sources": [],
        "normal": {
          "inputs": {
            "mode": "fromNew",
            "oldSalary": 3400,
            "newSalary": 3750,
            "raisePct": 15
          },
          "expected": {
            "kind": "number",
            "value": 10.29
          },
          "rows": [],
          "inactive": [
            "raisePct"
          ],
          "rowCount": 4,
          "primaryUnit": "%",
          "independentLiteral": "10,29%"
        },
        "boundary": {
          "inputs": {
            "mode": "fromNew",
            "oldSalary": 100,
            "newSalary": 50,
            "raisePct": 15
          },
          "expected": {
            "kind": "number",
            "value": -50
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": -50
              }
            }
          ],
          "inactive": [
            "raisePct"
          ],
          "rowCount": 4,
          "primaryUnit": "%",
          "independentLiteral": "-50,00%"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 23.33
        },
        "blankField": "oldSalary",
        "domainField": "oldSalary",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "es",
        "path": "/es/finanzas/subida-salarial/",
        "h1": "Calculadora de subida salarial",
        "body": {
          "longDescription": "Los dos sentidos importan porque las negociaciones van en porcentajes mientras que las decisiones se toman en dinero. Si das la cifra nueva, la calculadora devuelve el porcentaje; si das el porcentaje, devuelve la cifra. Ambos muestran al lado la diferencia en moneda, que es el número que de verdad cambia algo: un diez por ciento sobre un salario pequeño y un tres por ciento sobre uno grande pueden ser el mismo dinero. Una bajada se muestra con honestidad como un porcentaje negativo en lugar de esconderse como un cero: la aritmética funciona igual en los dos sentidos, y fingir lo contrario describiría mal lo ocurrido.",
          "howToUse": [
            "Elige si conoces el salario nuevo o el porcentaje.",
            "Introduce el salario anterior.",
            "Introduce el salario nuevo o el porcentaje de subida.",
            "Compara las ofertas por la diferencia en dinero y no solo por el porcentaje."
          ],
          "howItWorks": "Porcentaje = (nuevo ÷ anterior − 1) × 100. El sentido inverso da nuevo = anterior × (1 + porcentaje ÷ 100). Los importes positivos deben tener igual periodo y base fiscal. El modo porcentual exige valor estrictamente superior a −100%; el modo de importe nuevo ignora el porcentaje oculto. No se restan automáticamente inflación ni impuestos. Sueldos iguales dan cambio y diferencia cero.",
          "example": "Pasar de 1200 a 1480 es una subida del 23,33 % y 280 más al mes. Bajar de 100 a 50 supone −50% y diferencia −50; importes iguales 100 y 100 dan 0%. Se rechaza −100% porque el modelo exige un salario nuevo positivo.",
          "faq": [
            {
              "q": "¿El porcentaje se toma del salario bruto o del neto?",
              "a": "Puede usarse bruto o neto, pero ambos salarios deben tener el mismo periodo y base. No se convierte bruto en neto; cambios en deducciones pueden dar otro porcentaje de variación del neto."
            },
            {
              "q": "¿Tiene en cuenta la inflación?",
              "a": "No. Una subida del cinco por ciento con una inflación del ocho es una bajada en términos reales, y comparar ambas cifras es un cálculo aparte."
            },
            {
              "q": "¿Por qué una bajada se muestra como un porcentaje negativo?",
              "a": "Porque lo es. Recortarla a cero escondería el sentido del cambio, y la aritmética se comporta igual en los dos casos."
            },
            {
              "q": "¿Por qué se muestra también la diferencia en dinero?",
              "a": "Porque los porcentajes esconden la base. Un tres por ciento sobre un salario grande puede ganar a un diez por ciento sobre uno pequeño, y solo la columna del dinero lo hace visible."
            }
          ],
          "disclaimer": "Muestra cambio nominal entre importes de igual base. No determina impuestos, inflación, cambio de moneda, variación de jornada ni derecho a subida."
        },
        "help": {
          "oldSalary": "Ambos importes deben tener igual periodo y base bruta/neta."
        },
        "sources": [],
        "normal": {
          "inputs": {
            "mode": "fromNew",
            "oldSalary": 1200,
            "newSalary": 1480,
            "raisePct": 15
          },
          "expected": {
            "kind": "number",
            "value": 23.33
          },
          "rows": [],
          "inactive": [
            "raisePct"
          ],
          "rowCount": 4,
          "primaryUnit": "%",
          "independentLiteral": "23,33%"
        },
        "boundary": {
          "inputs": {
            "mode": "fromNew",
            "oldSalary": 100,
            "newSalary": 50,
            "raisePct": 15
          },
          "expected": {
            "kind": "number",
            "value": -50
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": -50
              }
            }
          ],
          "inactive": [
            "raisePct"
          ],
          "rowCount": 4,
          "primaryUnit": "%",
          "independentLiteral": "-50,00%"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 23.33
        },
        "blankField": "oldSalary",
        "domainField": "oldSalary",
        "domainInvalid": -1,
        "countFields": []
      }
    ]
  },
  {
    "id": "vacation-accrual",
    "category": "finance",
    "defaults": {
      "daysPerYear": 28,
      "monthsWorked": 7,
      "daysUsed": 5
    },
    "fieldNames": [
      "daysPerYear",
      "monthsWorked",
      "daysUsed"
    ],
    "defaultInactive": [],
    "pages": [
      {
        "locale": "ru",
        "path": "/ru/finance/vacation-accrual/",
        "h1": "Калькулятор накопления отпуска",
        "body": {
          "longDescription": "Распределяет введённую годовую норму отпуска пропорционально отработанным месяцам в пределах одного 12-месячного периода. При 28 днях модель даёт 28/12≈2,333 дня за месяц; дробь остаётся в расчёте, чтобы не накапливать ошибки округления. Это выбранный способ учёта, а не утверждение о том, когда закон или договор предоставляет отпуск. Отрицательный остаток показывает превышение использованных дней над модельным начислением; он не определяет удержание из зарплаты при увольнении.",
          "howToUse": [
            "Введите годовую норму отпуска в днях.",
            "Укажите, сколько месяцев отработано в рабочем году.",
            "Введите количество уже использованных дней.",
            "Введите долю месяца, которую хотите моделировать; правовой порядок подсчёта и округления проверяется отдельно."
          ],
          "howItWorks": "Для нормы D>0, месяцев M от 0 до 12 и использованных дней U≥0: за месяц D/12, накоплено A=(D/12)×M, остаток B=A−U. Месяцы и использованные дни могут быть дробными; введённая доля месяца используется напрямую, без календарного порога. Результат не округляется до целых или половины дня для предоставления отпуска. Перенос прошлых лет, особые режимы и денежная компенсация не включены.",
          "example": "При норме 28 дней после 7 месяцев и 5 использованных дней остаётся 11,333 дня. При норме 24 дня, 0,5 месяца и 2 использованных днях накоплено 1, остаток −1. При 12 месяцах накопление равно всей введённой норме; 12,1 месяца выходит за один период и возвращает ошибку.",
          "faq": [
            {
              "q": "Почему месячная норма получается дробной?",
              "a": "Потому что 28/12 не целое число. Калькулятор сохраняет точную дробную норму до отображения. Это не правило всех кадровых систем: например, отдельное британское правило для первого года предусматривает округление 2,33 до 2,5 дня; его здесь автоматически не применяют."
            },
            {
              "q": "Может ли остаток быть отрицательным?",
              "a": "Да. Это только разница между линейным начислением и использованными днями. Возможность отпуска авансом, компенсация и удержания зависят от применимых правил и договора; отрицательное число не является расчётом долга работодателю."
            },
            {
              "q": "Считаются ли неполные месяцы?",
              "a": "Да, в этой модели можно ввести 0,5 месяца: результат берётся пропорционально. Это не календарный подсчёт дат и не утверждение о местном пороге; если договор использует иной порядок, сначала определите подходящее число месяцев отдельно."
            },
            {
              "q": "Переносится ли неиспользованный отпуск?",
              "a": "Это зависит от законодательства и договора. Где-то перенос разрешён со сроком давности, где-то требуется компенсация, и ни то ни другое этот расчёт не охватывает."
            }
          ],
          "disclaimer": "Линейное начисление за один год не определяет юридическую норму отпуска, округление, перенос, компенсацию или удержания. Норму и применимые правила выбирают отдельно; язык страницы не устанавливает страну трудового договора."
        },
        "help": {
          "daysPerYear": "Введённая норма модели, не автоматически выбранное право по стране.",
          "monthsWorked": "От 0 до 12; дробный месяц учитывается пропорционально, без правового округления.",
          "daysUsed": "Дробные использованные дни допустимы; отрицательный остаток не определяет удержание."
        },
        "sources": [
          "https://www.gov.uk/holiday-entitlement-rights/calculate-leave-entitlement"
        ],
        "normal": {
          "inputs": {
            "daysPerYear": 28,
            "monthsWorked": 7,
            "daysUsed": 5
          },
          "expected": {
            "kind": "number",
            "value": 11.333
          },
          "rows": [],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "дн",
          "independentLiteral": "11,333 дн."
        },
        "boundary": {
          "inputs": {
            "daysPerYear": 24,
            "monthsWorked": 0.5,
            "daysUsed": 2
          },
          "expected": {
            "kind": "number",
            "value": -1
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 1
              }
            },
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 2
              }
            }
          ],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "дн",
          "independentLiteral": "-1 дн."
        },
        "defaultExpected": {
          "kind": "number",
          "value": 11.333
        },
        "blankField": "daysPerYear",
        "domainField": "daysPerYear",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "en",
        "path": "/en/finance/vacation-accrual-calculator/",
        "h1": "Vacation accrual calculator",
        "body": {
          "longDescription": "Prorates the entered annual leave allowance by months worked within one 12-month period. With 28 days, the model gives 28/12≈2.333 days per month and retains the fraction to avoid accumulating rounding errors. This is a selected accounting method, not a statement about when law or contract grants leave. A negative balance means days used exceed modeled accrual; it does not determine a salary deduction on departure.",
          "howToUse": [
            "Enter the annual leave entitlement in days.",
            "Enter how many months have been worked in the leave year.",
            "Enter the days already taken.",
            "Enter the part-month you want to model; legal counting and rounding rules require separate verification."
          ],
          "howItWorks": "For annual days D>0, months M from 0 to 12 and used days U≥0: monthly D/12, accrued A=(D/12)×M, balance B=A−U. Months and used days may be fractional; an entered part-month is used directly, without a calendar threshold. The result is not rounded to whole or half days for granting leave. Previous-year carryover, special arrangements and cash settlement are excluded.",
          "example": "A 28-day entitlement after 7 months with 5 days taken leaves a balance of 11.333 days. With allowance 24 days, 0.5 months and 2 days used, accrual is 1 and balance −1. At 12 months, accrual equals the full allowance; 12.1 months exceeds one period and returns an error.",
          "faq": [
            {
              "q": "Why is the monthly figure fractional?",
              "a": "Because 28/12 is not a whole number. The calculator retains the fractional allowance until display. This is not a rule for every payroll system: a specific UK first-year rule, for example, rounds 2.33 up to 2.5 days; it is not applied automatically here."
            },
            {
              "q": "Can the balance be negative?",
              "a": "Yes. It is only the difference between linear accrual and used days. Advance leave, compensation and deductions depend on applicable rules and contract; the negative number is not a debt calculation."
            },
            {
              "q": "Do part months count?",
              "a": "Yes. This model accepts 0.5 months and prorates directly. It does not count dates or declare a local threshold. If a contract uses another method, establish the appropriate month input separately."
            },
            {
              "q": "Does unused leave carry over?",
              "a": "That depends on the jurisdiction and the contract. Some allow carry-over with a deadline, others require payment instead, and this calculation covers neither."
            }
          ],
          "disclaimer": "One-year linear accrual determines no legal entitlement, rounding, carryover, compensation or deduction. Allowance and applicable rules must be established separately; language does not select the employment jurisdiction."
        },
        "help": {
          "daysPerYear": "Entered model allowance, not an automatically selected legal entitlement.",
          "monthsWorked": "From 0 to 12; fractional months prorate without legal rounding.",
          "daysUsed": "Fractional used days allowed; a negative balance does not establish a deduction."
        },
        "sources": [
          "https://www.gov.uk/holiday-entitlement-rights/calculate-leave-entitlement"
        ],
        "normal": {
          "inputs": {
            "daysPerYear": 28,
            "monthsWorked": 7,
            "daysUsed": 5
          },
          "expected": {
            "kind": "number",
            "value": 11.333
          },
          "rows": [],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "d",
          "independentLiteral": "11,333 дн."
        },
        "boundary": {
          "inputs": {
            "daysPerYear": 24,
            "monthsWorked": 0.5,
            "daysUsed": 2
          },
          "expected": {
            "kind": "number",
            "value": -1
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 1
              }
            },
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 2
              }
            }
          ],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "d",
          "independentLiteral": "-1 дн."
        },
        "defaultExpected": {
          "kind": "number",
          "value": 11.333
        },
        "blankField": "daysPerYear",
        "domainField": "daysPerYear",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "uk",
        "path": "/uk/finansy/nakopychennya-vidpustky/",
        "h1": "Калькулятор накопичення відпустки",
        "body": {
          "longDescription": "Розподіляє введену річну норму відпустки пропорційно відпрацьованим місяцям у межах одного 12-місячного періоду. За 28 днів модель дає 28/12≈2,333 дня на місяць і зберігає дріб, щоб не накопичувати похибки округлення. Це обраний спосіб обліку, не твердження про законодавчий чи договірний момент надання відпустки. Від’ємний залишок означає перевищення використаних днів над модельним нарахуванням, але не визначає утримання із зарплати під час звільнення.",
          "howToUse": [
            "Введіть річну норму відпустки в днях.",
            "Введіть кількість відпрацьованих місяців.",
            "Введіть кількість уже використаних днів."
          ],
          "howItWorks": "Для норми D>0, місяців M від 0 до 12 і використаних днів U≥0: за місяць D/12, накопичено A=(D/12)×M, залишок B=A−U. Місяці й використані дні можуть бути дробовими; введена частка місяця береться прямо, без календарного порога. Результат не округлюється до цілого чи половини дня для надання відпустки. Перенесення минулих років, особливі режими й грошова компенсація не включені.",
          "example": "За норми 28 днів після 7 місяців і 5 використаних днів лишається 11,333 дня. За норми 24 дні, 0,5 місяця й 2 використаних днів накопичено 1, залишок −1. За 12 місяців накопичення дорівнює всій нормі; 12,1 місяця перевищує один період і повертає помилку.",
          "faq": [
            {
              "q": "Чи можна взяти відпустку наперед?",
              "a": "Право на відпустку наперед залежить від застосовних правил і домовленості. Калькулятор лише допускає від’ємну різницю між нарахуванням та використанням; із неї не випливає автоматичне утримання із зарплати."
            },
            {
              "q": "Чому виходить дробова кількість днів?",
              "a": "28/12 не ділиться націло, тому в моделі зберігається дріб до відображення. Це не загальне кадрове правило: наприклад, окремий британський порядок першого року округлює 2,33 до 2,5 дня; автоматично він тут не застосовується."
            },
            {
              "q": "Чи згоряють невикористані дні?",
              "a": "Перенесення, строки використання та компенсація визначаються застосовними правилами й договором. Річна норма тут не включає залишки попередніх років автоматично; їх треба обліковувати окремо."
            },
            {
              "q": "Що буде під час звільнення?",
              "a": "Грошова компенсація та допустимість утримань потребують окремого правового й зарплатного розрахунку. Показані дні не визначають суму виплати чи боргу; калькулятор не вводить середнього заробітку або підстав звільнення."
            }
          ],
          "disclaimer": "Лінійне нарахування за один рік не визначає правової норми, округлення, перенесення, компенсації чи утримань. Норму й правила встановлюють окремо; мова не обирає країну трудового договору."
        },
        "help": {
          "daysPerYear": "Введена норма моделі, не автоматично обране право за країною.",
          "monthsWorked": "Від 0 до 12; дробовий місяць пропорційний, без правового округлення.",
          "daysUsed": "Дробові використані дні дозволено; від’ємний залишок не визначає утримання."
        },
        "sources": [
          "https://www.gov.uk/holiday-entitlement-rights/calculate-leave-entitlement"
        ],
        "normal": {
          "inputs": {
            "daysPerYear": 28,
            "monthsWorked": 7,
            "daysUsed": 5
          },
          "expected": {
            "kind": "number",
            "value": 11.333
          },
          "rows": [],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "дн",
          "independentLiteral": "11,333 дн."
        },
        "boundary": {
          "inputs": {
            "daysPerYear": 24,
            "monthsWorked": 0.5,
            "daysUsed": 2
          },
          "expected": {
            "kind": "number",
            "value": -1
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 1
              }
            },
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 2
              }
            }
          ],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "дн",
          "independentLiteral": "-1 дн."
        },
        "defaultExpected": {
          "kind": "number",
          "value": 11.333
        },
        "blankField": "daysPerYear",
        "domainField": "daysPerYear",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "de",
        "path": "/de/finanzen/urlaubsanspruch-rechner/",
        "h1": "Urlaubsanspruchsrechner",
        "body": {
          "longDescription": "Verteilt den eingegebenen Jahresurlaub proportional auf gearbeitete Monate innerhalb eines 12-Monats-Zeitraums. Bei 28 Tagen liefert das Modell 28/12≈2,333 Tage je Monat und behält den Bruchteil gegen fortlaufende Rundungsfehler. Das ist eine gewählte Rechenmethode, keine Aussage darüber, wann Recht oder Vertrag Urlaub gewähren. Ein negativer Rest bedeutet mehr genommene als modelliert erworbene Tage; einen Lohnabzug beim Ausscheiden bestimmt er nicht.",
          "howToUse": [
            "Trage den Jahresanspruch in Tagen ein.",
            "Trage ein, wie viele Monate im Urlaubsjahr gearbeitet wurden.",
            "Trage die bereits genommenen Tage ein.",
            "Gib den zu modellierenden Monatsanteil ein; rechtliche Zähl- und Rundungsregeln sind gesondert zu prüfen."
          ],
          "howItWorks": "Für Jahrestage D>0, Monate M von 0 bis 12 und genommene Tage U≥0: monatlich D/12, erworben A=(D/12)×M, Rest B=A−U. Monate und Tage dürfen gebrochen sein; ein eingegebener Monatsanteil gilt direkt ohne Kalenderschwelle. Das Ergebnis wird nicht auf ganze oder halbe Urlaubstage zur Gewährung gerundet. Vorjahresübertrag, Sondermodelle und Geldabgeltung fehlen.",
          "example": "Ein Anspruch von 28 Tagen nach 7 Monaten mit 5 genommenen Tagen lässt einen Rest von 11,333 Tagen. Bei 24 Jahrestagen, 0,5 Monaten und 2 genommenen Tagen sind 1 erworben und Rest −1. Nach 12 Monaten entspricht die Ansammlung dem Jahreswert; 12,1 Monate überschreiten einen Zeitraum und erzeugen einen Fehler.",
          "faq": [
            {
              "q": "Warum ist der Monatswert gebrochen?",
              "a": "Weil 28/12 keine ganze Zahl ist. Der Rechner behält den Bruchteil bis zur Anzeige. Das ist keine Regel sämtlicher Abrechnungen: eine bestimmte britische Erstjahresregel rundet beispielsweise 2,33 auf 2,5 Tage; sie wird hier nicht automatisch angewandt."
            },
            {
              "q": "Kann der Rest negativ sein?",
              "a": "Ja. Es ist nur die Differenz zwischen linearer Ansammlung und genommenen Tagen. Vorausurlaub, Abgeltung und Abzüge hängen von Recht und Vertrag ab; die negative Zahl berechnet keine Schuld."
            },
            {
              "q": "Zählen angebrochene Monate?",
              "a": "Ja. Das Modell akzeptiert 0,5 Monate und rechnet direkt proportional. Es zählt keine Daten und bestimmt keine örtliche Schwelle. Bei einer anderen Vertragsmethode ist die passende Monatszahl gesondert zu ermitteln."
            },
            {
              "q": "Wird nicht genommener Urlaub übertragen?",
              "a": "Das hängt von Recht und Vertrag ab. Manche erlauben die Übertragung mit einer Frist, andere verlangen stattdessen eine Abgeltung, und beides deckt diese Rechnung nicht ab."
            }
          ],
          "disclaimer": "Lineare Ansammlung für ein Jahr bestimmt keinen gesetzlichen Anspruch, Rundung, Übertrag, Ausgleich oder Abzug. Jahreswert und Regeln sind separat zu ermitteln; die Sprache bestimmt keinen Rechtsraum."
        },
        "help": {
          "daysPerYear": "Eingegebener Modelljahreswert, kein automatisch gewählter Rechtsanspruch.",
          "monthsWorked": "Von 0 bis 12; Monatsbruchteile proportional, ohne rechtliche Rundung.",
          "daysUsed": "Gebrochene genommene Tage erlaubt; negativer Rest begründet keinen Abzug."
        },
        "sources": [
          "https://www.gov.uk/holiday-entitlement-rights/calculate-leave-entitlement"
        ],
        "normal": {
          "inputs": {
            "daysPerYear": 28,
            "monthsWorked": 7,
            "daysUsed": 5
          },
          "expected": {
            "kind": "number",
            "value": 11.333
          },
          "rows": [],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "Tage",
          "independentLiteral": "11,333 дн."
        },
        "boundary": {
          "inputs": {
            "daysPerYear": 24,
            "monthsWorked": 0.5,
            "daysUsed": 2
          },
          "expected": {
            "kind": "number",
            "value": -1
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 1
              }
            },
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 2
              }
            }
          ],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "Tage",
          "independentLiteral": "-1 дн."
        },
        "defaultExpected": {
          "kind": "number",
          "value": 11.333
        },
        "blankField": "daysPerYear",
        "domainField": "daysPerYear",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "es",
        "path": "/es/finanzas/dias-de-vacaciones-acumulados/",
        "h1": "Calculadora de días de vacaciones acumulados",
        "body": {
          "longDescription": "Prorratea los días anuales introducidos por meses trabajados dentro de un periodo de 12 meses. Con 28 días, el modelo da 28/12≈2,333 días mensuales y conserva la fracción para evitar errores acumulados de redondeo. Es un método elegido, no una afirmación sobre cuándo ley o contrato concede vacaciones. Un saldo negativo indica más días usados que acumulados en el modelo; no determina una deducción salarial al salir.",
          "howToUse": [
            "Introduce el derecho anual de vacaciones en días.",
            "Introduce cuántos meses se han trabajado en el año de vacaciones.",
            "Introduce los días ya disfrutados.",
            "Introduce la parte de mes que quieres modelar; verifica aparte las reglas legales de cómputo y redondeo."
          ],
          "howItWorks": "Para días anuales D>0, meses M entre 0 y 12 y días usados U≥0: mensual D/12, acumulado A=(D/12)×M, saldo B=A−U. Meses y días admiten fracciones; la parte de mes se usa directamente sin umbral de calendario. No se redondea a días enteros o medios para conceder vacaciones. Se excluyen arrastres, regímenes especiales y liquidación monetaria.",
          "example": "Un derecho de 28 días tras 7 meses con 5 días disfrutados deja un saldo de 11,333 días. Con 24 días anuales, 0,5 meses y 2 días usados, acumulado 1 y saldo −1. Con 12 meses se acumula el total anual; 12,1 meses supera un periodo y devuelve error.",
          "faq": [
            {
              "q": "¿Por qué la cifra mensual es fraccionaria?",
              "a": "Porque 28/12 no es entero. Se conserva la fracción hasta mostrarla. No es una regla de toda nómina: una regla británica específica del primer año, por ejemplo, redondea 2,33 a 2,5 días; aquí no se aplica automáticamente."
            },
            {
              "q": "¿El saldo puede ser negativo?",
              "a": "Sí. Es solo la diferencia entre acumulación lineal y días usados. Vacaciones adelantadas, compensación y deducciones dependen de reglas y contrato; la cifra negativa no calcula una deuda."
            },
            {
              "q": "¿Cuentan los meses incompletos?",
              "a": "Sí. Este modelo acepta 0,5 meses y prorratea directamente. No cuenta fechas ni establece un umbral local. Si el contrato usa otro método, determina aparte el dato de meses adecuado."
            },
            {
              "q": "¿Las vacaciones no disfrutadas se arrastran al año siguiente?",
              "a": "Depende de la jurisdicción y del contrato. Unos permiten arrastrarlas con una fecha límite y otros exigen compensarlas, y este cálculo no cubre ninguno de los dos casos."
            }
          ],
          "disclaimer": "La acumulación lineal anual no determina derecho legal, redondeo, arrastre, compensación ni deducción. Deben establecerse aparte días y reglas aplicables; el idioma no selecciona jurisdicción laboral."
        },
        "help": {
          "daysPerYear": "Días del modelo introducidos, no derecho legal automático por país.",
          "monthsWorked": "De 0 a 12; meses fraccionarios proporcionales sin redondeo legal.",
          "daysUsed": "Días usados fraccionarios admitidos; saldo negativo no establece deducción."
        },
        "sources": [
          "https://www.gov.uk/holiday-entitlement-rights/calculate-leave-entitlement"
        ],
        "normal": {
          "inputs": {
            "daysPerYear": 28,
            "monthsWorked": 7,
            "daysUsed": 5
          },
          "expected": {
            "kind": "number",
            "value": 11.333
          },
          "rows": [],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "d",
          "independentLiteral": "11,333 дн."
        },
        "boundary": {
          "inputs": {
            "daysPerYear": 24,
            "monthsWorked": 0.5,
            "daysUsed": 2
          },
          "expected": {
            "kind": "number",
            "value": -1
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 1
              }
            },
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 2
              }
            }
          ],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "d",
          "independentLiteral": "-1 дн."
        },
        "defaultExpected": {
          "kind": "number",
          "value": 11.333
        },
        "blankField": "daysPerYear",
        "domainField": "daysPerYear",
        "domainInvalid": -1,
        "countFields": []
      }
    ]
  },
  {
    "id": "workday-cost",
    "category": "finance",
    "defaults": {
      "salary": 80000,
      "days": 21,
      "hours": 8
    },
    "fieldNames": [
      "salary",
      "days",
      "hours"
    ],
    "defaultInactive": [],
    "pages": [
      {
        "locale": "ru",
        "path": "/ru/finance/workday-cost/",
        "h1": "Калькулятор стоимости рабочего дня",
        "body": {
          "longDescription": "Переводит месячный оклад в стоимость дня и часа — величину, которой удобно мерить и отгул, и переработку, и время, потраченное на дорогу. Число рабочих дней и часов в дне остаются обычными полями со значениями по умолчанию: в разных месяцах и графиках они разные, поэтому производственный календарь здесь не зашит и ничего не решает за вас.",
          "howToUse": [
            "Введите месячный оклад.",
            "Укажите число рабочих дней в этом месяце и длину смены.",
            "Прочитайте стоимость дня и часа."
          ],
          "howItWorks": "Оклад делится на число рабочих дней — получается стоимость дня; она же, делённая на длину смены, даёт стоимость часа. Оба числа считаются от той цифры, которую вы ввели: калькулятор не подставляет норму за месяц сам. Дни — целое число от 1 до 31, часы смены могут быть дробными в пределах более 0 до 24. Месячное время = дни × часы без округления до целого. Это среднее распределение введённого оклада по выбранным дням, а не расчёт удержаний, отгула, сверхурочных или полной стоимости сотрудника для работодателя.",
          "example": "Оклад 100 000 при 21 рабочем дне и восьмичасовой смене даёт 4 761,90 за день и 595,24 за час. При окладе 1575, 21 дне и смене 7,5 часа получается 75 за день, 10 за час и 157,5 часа за месяц. Дробное время сохраняется; 21,5 рабочего дня не принимается.",
          "faq": [
            {
              "q": "Почему число рабочих дней нужно вводить вручную?",
              "a": "Потому что оно меняется от месяца к месяцу и от графика к графику. Подставить одно число за все случаи означало бы выдать удобное допущение за факт."
            },
            {
              "q": "Оклад брать до вычета налога или после?",
              "a": "Как удобнее считать. Расчёт линейный, поэтому стоимость дня получится в том же виде, в каком введён оклад — «грязная» или «на руки»."
            },
            {
              "q": "Подходит ли это для расчёта переработки?",
              "a": "Только как выбранная средняя стоимость часа. Юридическая база оплаты сверхурочных может отличаться от этого среднего, а коэффициенты, пороги и право на доплату нужно определить отдельно."
            },
            {
              "q": "Как учесть отпуск и больничные?",
              "a": "Для оценки времени можно распределить ту же сумму по фактически выбранным дням: меньше дней даст более высокое среднее. Но это не правило расчёта оклада, отпускных или больничных; если выплата тоже меняется, введите её отдельно."
            }
          ],
          "disclaimer": "Средняя стоимость времени использует введённый оклад и выбранный график. Это не зарплатное начисление, оплата отсутствия или полные расходы работодателя; налоги и взносы не добавляются."
        },
        "help": {
          "days": "Целые дни от 1 до 31 для выбранного графика; календарь автоматически не рассчитывается.",
          "hours": "Более 0 до 24 часов, дробные смены допустимы; месячное время не округляется до целого."
        },
        "sources": [
          "https://webapps.dol.gov/elaws/otcalculator.htm"
        ],
        "normal": {
          "inputs": {
            "salary": 100000,
            "days": 21,
            "hours": 8
          },
          "expected": {
            "kind": "number",
            "value": 4761.9
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 595.24
              }
            }
          ],
          "inactive": [],
          "rowCount": 2,
          "primaryUnit": "₽",
          "independentLiteral": "4 761,90 ₽"
        },
        "boundary": {
          "inputs": {
            "salary": 1575,
            "days": 21,
            "hours": 7.5
          },
          "expected": {
            "kind": "number",
            "value": 75
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 10
              }
            },
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 157.5
              }
            }
          ],
          "inactive": [],
          "rowCount": 2,
          "primaryUnit": "₽",
          "independentLiteral": "75,00 ₽"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 3809.52
        },
        "blankField": "salary",
        "domainField": "salary",
        "domainInvalid": -1,
        "countFields": [
          "days"
        ]
      },
      {
        "locale": "en",
        "path": "/en/finance/workday-cost-calculator/",
        "h1": "Working day cost calculator",
        "body": {
          "longDescription": "Turns a monthly salary into the price of a day and of an hour — a figure that makes a day off, an hour of overtime and the daily commute all comparable. The number of working days and the length of a shift stay ordinary fields with sensible defaults: they differ between months and between schedules, so no working calendar is baked in to decide for you.",
          "howToUse": [
            "Enter the monthly salary.",
            "Give the number of working days this month and the shift length.",
            "Read the cost of a day and of an hour."
          ],
          "howItWorks": "The salary is divided by the number of working days to give the cost of a day; dividing that by the shift length gives the cost of an hour. Both follow the figures you entered — no monthly norm is substituted behind your back. Days are a whole number from 1 to 31; shift hours may be fractional above 0 and up to 24. Monthly hours = days × hours without whole-hour rounding. This averages the entered salary across chosen days; it does not calculate deductions, time-off pay, overtime or the employer total cost.",
          "example": "A salary of 100 000 across 21 working days of eight hours gives 4 761.90 per day and 595.24 per hour. Pay 1575, 21 days and 7.5-hour shifts give 75 per day, 10 per hour and 157.5 monthly hours. Fractional time is preserved; 21.5 working days is rejected.",
          "faq": [
            {
              "q": "Why must the number of working days be entered by hand?",
              "a": "Because it changes from month to month and from schedule to schedule. Fixing one number for every case would present a convenient assumption as a fact."
            },
            {
              "q": "Gross or net salary?",
              "a": "Whichever you prefer to reason about. The calculation is linear, so the cost of a day comes back in the same terms as the salary you entered."
            },
            {
              "q": "Is this suitable for costing overtime?",
              "a": "Only as the chosen average hourly cost. The legal overtime-pay base may differ from this average; multipliers, thresholds and entitlement need separate determination."
            },
            {
              "q": "How do I account for holidays and sick leave?",
              "a": "For a time-cost estimate, the same amount can be spread over the chosen actual days: fewer days give a higher average. This is not a payroll, holiday-pay or sick-pay rule. If the payment also changes, enter that amount separately."
            }
          ],
          "disclaimer": "Average time cost uses the entered salary and chosen schedule. It is not payroll, absence pay or total employer cost; taxes and contributions are not added."
        },
        "help": {
          "days": "Whole days 1–31 for the selected schedule; no automatic calendar calculation.",
          "hours": "Above 0 up to 24 hours; fractional shifts allowed, no whole-hour monthly rounding."
        },
        "sources": [
          "https://webapps.dol.gov/elaws/otcalculator.htm"
        ],
        "normal": {
          "inputs": {
            "salary": 100000,
            "days": 21,
            "hours": 8
          },
          "expected": {
            "kind": "number",
            "value": 4761.9
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 595.24
              }
            }
          ],
          "inactive": [],
          "rowCount": 2,
          "primaryUnit": "$",
          "independentLiteral": "4 761,90 ₽"
        },
        "boundary": {
          "inputs": {
            "salary": 1575,
            "days": 21,
            "hours": 7.5
          },
          "expected": {
            "kind": "number",
            "value": 75
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 10
              }
            },
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 157.5
              }
            }
          ],
          "inactive": [],
          "rowCount": 2,
          "primaryUnit": "$",
          "independentLiteral": "75,00 ₽"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 3809.52
        },
        "blankField": "salary",
        "domainField": "salary",
        "domainInvalid": -1,
        "countFields": [
          "days"
        ]
      },
      {
        "locale": "uk",
        "path": "/uk/finansy/vartist-robochoho-dnia/",
        "h1": "Калькулятор вартості робочого дня",
        "body": {
          "longDescription": "Вартість робочого дня ділить оклад на кількість робочих днів у місяці, а вартість години — ще й на тривалість зміни. Це базове число для оцінки будь-якої витрати часу: наскільки дорого обходиться день простою, зустріч чи поїздка.",
          "howToUse": [
            "Введіть місячний оклад.",
            "Введіть кількість робочих днів у місяці.",
            "Задайте тривалість зміни в годинах."
          ],
          "howItWorks": "Оклад ділиться на кількість робочих днів — виходить вартість дня; вона ж, поділена на тривалість зміни, дає вартість години. Кількість робочих днів береться фактична для конкретного місяця, а не усереднена. Дні — ціле число від 1 до 31, години зміни можуть бути дробовими понад 0 і до 24. Місячний час = дні × години без округлення до цілої години. Це середній розподіл введеного окладу за обраними днями, не розрахунок утримань, відгулу, надурочних чи повної вартості працівника для роботодавця.",
          "example": "Оклад 100 000 ₴ за 21 робочого дня й восьмигодинної зміни дає 4761,90 ₴ за день і 595,24 ₴ за годину. За окладу 1575, 21 дня та зміни 7,5 години виходить 75 за день, 10 за годину й 157,5 години за місяць. Дробовий час зберігається; 21,5 робочого дня не приймається.",
          "faq": [
            {
              "q": "Навіщо знати вартість години?",
              "a": "Вона переводить час у вибрану грошову базу. Наприклад, тригодинна зустріч чотирьох людей становить 12 людино-годин, а не один восьмигодинний день. Вартість для людей з різними ставками потрібно підсумовувати окремо."
            },
            {
              "q": "Чи це справжня вартість для компанії?",
              "a": "Ні. Це розподіл введеної зарплати, нарахованої або чистої. Внески роботодавця, обладнання й накладні витрати тут не додаються; універсального множника 1,5 модель не встановлює."
            },
            {
              "q": "Скільки робочих днів брати?",
              "a": "Число для обраного місяця й графіка, ціле від 1 до 31. Значення 21 є лише початковим прикладом; інший календар або режим може дати інше число днів. Автоматичного календаря тут немає."
            },
            {
              "q": "Чи враховано відпустку?",
              "a": "Окремо задайте дні та суму для потрібної оцінки. Менше фактичних днів за тієї самої суми підвищує середній показник, але не визначає належну виплату відпускних, лікарняних чи утримання зарплати."
            }
          ],
          "disclaimer": "Середня вартість часу бере введений оклад і обраний графік. Це не зарплатне нарахування, оплата відсутності чи повні витрати роботодавця; податки та внески не додаються."
        },
        "help": {
          "days": "Цілі дні 1–31 для обраного графіка; календар автоматично не рахується.",
          "hours": "Понад 0 до 24 годин; дробові зміни дозволено, місячний час не округлюється до цілого."
        },
        "sources": [
          "https://webapps.dol.gov/elaws/otcalculator.htm"
        ],
        "normal": {
          "inputs": {
            "salary": 100000,
            "days": 21,
            "hours": 8
          },
          "expected": {
            "kind": "number",
            "value": 4761.9
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 595.24
              }
            }
          ],
          "inactive": [],
          "rowCount": 2,
          "primaryUnit": "₴",
          "independentLiteral": "4 761,90 ₽"
        },
        "boundary": {
          "inputs": {
            "salary": 1575,
            "days": 21,
            "hours": 7.5
          },
          "expected": {
            "kind": "number",
            "value": 75
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 10
              }
            },
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 157.5
              }
            }
          ],
          "inactive": [],
          "rowCount": 2,
          "primaryUnit": "₴",
          "independentLiteral": "75,00 ₽"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 3809.52
        },
        "blankField": "salary",
        "domainField": "salary",
        "domainInvalid": -1,
        "countFields": [
          "days"
        ]
      },
      {
        "locale": "de",
        "path": "/de/finanzen/arbeitstag-wert-rechner/",
        "h1": "Rechner für den Wert eines Arbeitstages",
        "body": {
          "longDescription": "Macht aus einem Monatsgehalt den Preis eines Tages und einer Stunde — eine Zahl, die einen freien Tag, eine Überstunde und den täglichen Arbeitsweg vergleichbar macht. Die Zahl der Arbeitstage und die Länge einer Schicht bleiben gewöhnliche Felder mit sinnvollen Vorgaben: beide unterscheiden sich von Monat zu Monat und von Modell zu Modell, deshalb ist kein Arbeitskalender fest eingebaut, der für dich entscheidet.",
          "howToUse": [
            "Trage das Monatsgehalt ein.",
            "Gib die Zahl der Arbeitstage in diesem Monat und die Länge der Schicht an.",
            "Lies den Wert eines Tages und einer Stunde ab."
          ],
          "howItWorks": "Das Gehalt wird durch die Zahl der Arbeitstage geteilt und ergibt den Wert eines Tages; dieser geteilt durch die Länge der Schicht ergibt den Wert einer Stunde. Beides folgt deinen Eingaben — es wird keine Monatsnorm hinter deinem Rücken eingesetzt. Tage sind ganzzahlig von 1 bis 31; Schichtstunden dürfen gebrochen sein, über 0 bis 24. Monatsstunden = Tage × Stunden ohne Ganzstundenrundung. Dies verteilt das eingegebene Gehalt im Mittel auf gewählte Tage; Abzüge, Freizeitausgleich, Überstunden und gesamte Arbeitgeberkosten werden nicht berechnet.",
          "example": "Ein Gehalt von 3600 € auf 21 Arbeitstage zu acht Stunden ergibt 171,43 € je Tag und 21,43 € je Stunde. Bei Gehalt 1575, 21 Tagen und 7,5-Stunden-Schichten ergeben sich 75 je Tag, 10 je Stunde und 157,5 Monatsstunden. Gebrochene Zeit bleibt erhalten; 21,5 Arbeitstage werden abgelehnt.",
          "faq": [
            {
              "q": "Warum muss die Zahl der Arbeitstage von Hand eingetragen werden?",
              "a": "Weil sie sich von Monat zu Monat und von Arbeitszeitmodell zu Arbeitszeitmodell ändert. Eine feste Zahl für alle Fälle gäbe eine bequeme Annahme als Tatsache aus."
            },
            {
              "q": "Brutto- oder Nettogehalt?",
              "a": "Was immer dir zum Nachdenken lieber ist. Die Rechnung ist linear, der Wert eines Tages kommt also in derselben Größe zurück wie das eingetragene Gehalt."
            },
            {
              "q": "Taugt das zur Bewertung von Überstunden?",
              "a": "Nur als gewählter durchschnittlicher Stundenwert. Die rechtliche Basis der Überstundenvergütung kann davon abweichen; Faktoren, Schwellen und Anspruch sind gesondert zu bestimmen."
            },
            {
              "q": "Wie berücksichtige ich Feiertage und Krankheit?",
              "a": "Für eine Zeitkostenschätzung kann derselbe Betrag auf gewählte tatsächliche Tage verteilt werden: weniger Tage erhöhen den Durchschnitt. Das ist keine Regel für Gehalt, Urlaubs- oder Krankengeld. Ändert sich die Zahlung, ist dieser Betrag getrennt einzugeben."
            }
          ],
          "disclaimer": "Der durchschnittliche Zeitwert nutzt Gehalt und gewählten Plan. Das ist keine Lohnabrechnung, Abwesenheitsvergütung oder gesamte Arbeitgeberkosten; Steuern und Beiträge werden nicht addiert."
        },
        "help": {
          "days": "Ganze Tage 1–31 des gewählten Plans; keine automatische Kalenderrechnung.",
          "hours": "Über 0 bis 24 Stunden; gebrochene Schichten erlaubt, Monatszeit nicht ganz gerundet."
        },
        "sources": [
          "https://webapps.dol.gov/elaws/otcalculator.htm"
        ],
        "normal": {
          "inputs": {
            "salary": 3600,
            "days": 21,
            "hours": 8
          },
          "expected": {
            "kind": "number",
            "value": 171.43
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 21.43
              }
            }
          ],
          "inactive": [],
          "rowCount": 2,
          "primaryUnit": "€",
          "independentLiteral": "171,43 ₽"
        },
        "boundary": {
          "inputs": {
            "salary": 1575,
            "days": 21,
            "hours": 7.5
          },
          "expected": {
            "kind": "number",
            "value": 75
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 10
              }
            },
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 157.5
              }
            }
          ],
          "inactive": [],
          "rowCount": 2,
          "primaryUnit": "€",
          "independentLiteral": "75,00 ₽"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 3809.52
        },
        "blankField": "salary",
        "domainField": "salary",
        "domainInvalid": -1,
        "countFields": [
          "days"
        ]
      },
      {
        "locale": "es",
        "path": "/es/finanzas/coste-de-un-dia-de-trabajo/",
        "h1": "Calculadora de coste de un día de trabajo",
        "body": {
          "longDescription": "Convierte un salario mensual en el precio de un día y de una hora, una cifra que hace comparables un día libre, una hora extra y el trayecto diario al trabajo. El número de días laborables y la duración de la jornada siguen siendo campos corrientes con valores por defecto razonables: cambian de un mes a otro y de una jornada a otra, así que aquí no hay ningún calendario laboral incorporado que decida por ti.",
          "howToUse": [
            "Introduce el salario mensual.",
            "Indica el número de días laborables de este mes y la duración de la jornada.",
            "Consulta el coste de un día y de una hora."
          ],
          "howItWorks": "El salario se divide entre el número de días laborables para dar el coste de un día; dividir eso entre la duración de la jornada da el coste de una hora. Ambos siguen las cifras que has introducido: no se sustituye ninguna jornada mensual a tus espaldas. Los días son enteros entre 1 y 31; las horas pueden ser fraccionarias, mayores que 0 y hasta 24. Horas mensuales = días × horas, sin redondeo entero. Se reparte el salario introducido entre días elegidos; no se calculan deducciones, permisos, horas extra ni coste total empresarial.",
          "example": "Un salario de 1000 en 21 días laborables de ocho horas da 47,62 por día y 5,95 por hora. Con salario 1575, 21 días y jornadas de 7,5 horas, son 75 al día, 10 por hora y 157,5 horas mensuales. Se conserva el tiempo fraccionario; se rechazan 21,5 días laborables.",
          "faq": [
            {
              "q": "¿Por qué hay que introducir a mano el número de días laborables?",
              "a": "Porque cambia de un mes a otro y de una jornada a otra. Fijar un número para todos los casos presentaría una suposición cómoda como un hecho."
            },
            {
              "q": "¿Salario bruto o neto?",
              "a": "El que prefieras usar para razonar. El cálculo es lineal, así que el coste de un día vuelve en los mismos términos que el salario que introdujiste."
            },
            {
              "q": "¿Sirve para valorar horas extra?",
              "a": "Solo como coste horario medio elegido. La base legal para horas extra puede diferir; multiplicadores, umbrales y derecho al recargo deben determinarse aparte."
            },
            {
              "q": "¿Cómo tengo en cuenta los festivos y las bajas?",
              "a": "Para valorar tiempo puedes repartir el mismo importe entre los días efectivos elegidos: menos días dan una media mayor. No es una regla de nómina, vacaciones o bajas. Si cambia el pago, introduce ese importe aparte."
            }
          ],
          "disclaimer": "El coste medio de tiempo usa salario y jornada elegidos. No es nómina, pago de ausencias ni coste empresarial total; no añade impuestos ni cotizaciones."
        },
        "help": {
          "days": "Días enteros 1–31 de la jornada elegida; sin calendario automático.",
          "hours": "Más de 0 hasta 24 horas; admite jornadas fraccionarias, sin redondeo entero mensual."
        },
        "sources": [
          "https://webapps.dol.gov/elaws/otcalculator.htm"
        ],
        "normal": {
          "inputs": {
            "salary": 1000,
            "days": 21,
            "hours": 8
          },
          "expected": {
            "kind": "number",
            "value": 47.62
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 5.95
              }
            }
          ],
          "inactive": [],
          "rowCount": 2,
          "primaryUnit": "€",
          "independentLiteral": "47,62 ₽"
        },
        "boundary": {
          "inputs": {
            "salary": 1575,
            "days": 21,
            "hours": 7.5
          },
          "expected": {
            "kind": "number",
            "value": 75
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 10
              }
            },
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 157.5
              }
            }
          ],
          "inactive": [],
          "rowCount": 2,
          "primaryUnit": "€",
          "independentLiteral": "75,00 ₽"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 3809.52
        },
        "blankField": "salary",
        "domainField": "salary",
        "domainInvalid": -1,
        "countFields": [
          "days"
        ]
      }
    ]
  }
];
