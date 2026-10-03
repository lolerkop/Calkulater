import type { CalculatorDef } from '../../lib/types';

type Copy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;
// Starts from the five actual145 public bodies; bounded model corrections
// and independently checked examples are authored per subject and locale.
export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Copy> = {
  "ru": {
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
  "en": {
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
  "uk": {
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
  "de": {
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
  "es": {
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
  }
};
