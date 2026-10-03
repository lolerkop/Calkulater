import type { CalculatorDef } from '../../lib/types';

type Copy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;
// Starts from the five actual145 public bodies; bounded model corrections
// and independently checked examples are authored per subject and locale.
export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Copy> = {
  "ru": {
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
  "en": {
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
  "uk": {
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
  "de": {
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
  "es": {
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
  }
};
