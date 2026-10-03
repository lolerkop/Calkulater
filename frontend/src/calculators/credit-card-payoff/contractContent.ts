import type { CalculatorDef } from '../../lib/types';
type Copy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;
export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Copy> = {
  "ru": {
    "longDescription": "Считает срок и проценты по одному остатку при постоянной номинальной годовой ставке и одинаковом платеже в конце месяца. Срок в этой модели не задаётся заранее: он получается из остатка, ставки и платежа. Если платёж не превышает месячные проценты, остаток не уменьшается и расчёт сообщает об этом. Таблица показывает платёж, проценты, погашение основного долга и новый остаток; ежедневное начисление, покупки и комиссии сюда не включены.",
    "howToUse": [
      "Введите текущий долг по карте.",
      "Укажите годовую ставку из тарифа — она же указана в выписке.",
      "Задайте сумму, которую готовы платить каждый месяц.",
      "Сравните строку «первый месяц: проценты» со своим платежом: если они близки, долг почти не убывает."
    ],
    "howItWorks": "Месячная ставка r = годовая ставка / 1200. Для долга B и постоянного платежа P срок при r > 0 равен −ln(1 − B×r/P) / ln(1+r), с округлением вверх; при нулевой ставке — B/P вверх. Проценты начисляются до платежа в конце каждого месяца, последний платёж уменьшается до остатка. Если P ≤ B×r, долг в этой модели не убывает. Срок свыше 600 месяцев выходит за предел расчёта; таблица показывает первые 36. Внутренние суммы не округляются до копеек.",
    "example": "Долг 100 000 ₽ под 24 % при платеже 5 000 ₽ закроется за 26 месяцев, переплата составит 28 987,28 ₽.",
    "faq": [
      {
        "q": "Чем это отличается от расчёта кредита?",
        "a": "В калькуляторе кредита обычно задают срок и находят платёж. Здесь задаются остаток, ставка и платёж, а срок определяется из них. Это различие входов двух моделей; реальные условия карты или кредита проверяются по договору."
      },
      {
        "q": "Почему расчёт отказывается считать при малом платеже?",
        "a": "Потому что при платеже меньше месячного процента остаток растёт, а не убывает. Формула дала бы логарифм отрицательного числа, то есть бессмыслицу под видом ответа."
      },
      {
        "q": "Учитывается ли льготный период?",
        "a": "Сам льготный период и условия его сохранения не моделируются. При ставке 0% можно оценить беспроцентное погашение: например, долг 30 000 с платежом 5000 требует 6 месяцев. Реальные правила льготы проверяются по договору."
      },
      {
        "q": "Почему банк называет другую сумму?",
        "a": "Банки начисляют проценты ежедневно на фактический остаток и добавляют комиссии за обслуживание и снятие наличных. Расчёт даёт помесячную оценку без комиссий."
      }
    ],
    "disclaimer": "Один остаток, постоянная номинальная годовая ставка и платежи в конце месяца; новых покупок, комиссий, льготного периода и ежедневных банковских начислений нет. Применимость ставки и условия карты проверяются по договору."
  },
  "en": {
    "longDescription": "Calculates duration and interest for one balance at a constant nominal annual rate with an equal payment at month-end. The term is the result of the balance, rate and payment rather than an input. If payment does not exceed monthly interest, the balance does not shrink and the tool reports that condition. The table separates payment, interest, principal repayment and closing balance; daily accrual, new purchases and fees are outside this model.",
    "howToUse": [
      "Enter the current balance on the card.",
      "Give the annual rate from the terms — it also appears on the statement.",
      "Set the amount you can pay every month.",
      "Compare the first-month interest line with your payment: if they are close, the balance barely moves."
    ],
    "howItWorks": "Monthly rate r = annual percentage / 1200. With balance B and constant payment P, months for r > 0 are −ln(1 − B×r/P) / ln(1+r), rounded up; at zero interest, round B/P up. Interest accrues before each month-end payment, and the final payment is reduced to the amount due. If P ≤ B×r, the balance does not decrease in this model. Horizons above 600 months exceed its range; the table shows the first 36 months. Internal amounts are not rounded to cents.",
    "example": "A 100,000 balance at 24% with a 5,000 payment clears in 26 months and costs 28,987.28 in interest.",
    "faq": [
      {
        "q": "How is this different from paying off a loan?",
        "a": "A loan-payment tool normally takes a term and solves for payment. Here the balance, rate and payment determine the term. This is a difference between model inputs; check an actual card or loan contract separately."
      },
      {
        "q": "Why does it refuse to answer at a small payment?",
        "a": "Because below the monthly interest the balance grows rather than falls. The formula would take a logarithm of a negative number — nonsense dressed up as an answer."
      },
      {
        "q": "Is the interest-free period included?",
        "a": "The grace period and its eligibility conditions are not modeled. At 0% you can estimate interest-free repayment: a 30,000 balance with a 5,000 payment needs 6 months. Check actual grace conditions in the contract."
      },
      {
        "q": "Why does the bank quote a different figure?",
        "a": "Banks accrue interest daily on the actual balance and add servicing and cash-withdrawal fees. This gives a monthly estimate without fees."
      }
    ],
    "disclaimer": "One balance, a constant nominal annual rate and month-end payments; no new purchases, fees, grace period or daily issuer accrual. Check the applicable rate and card terms in the contract."
  },
  "uk": {
    "longDescription": "За одним і тим самим боргом щомісячний платіж визначає строк та суму процентів. Розрахунок показує, скільки місяців і скільки переплати коштує заданий постійний платіж у помісячній моделі. Порівняння кількох сум пояснює, чому платіж, близький до першого процентного нарахування, повільно зменшує борг; умови мінімального платежу банку тут не визначаються.",
    "howToUse": [
      "Введіть суму боргу за карткою.",
      "Введіть річну ставку.",
      "Введіть щомісячний платіж і порівняйте кілька варіантів."
    ],
    "howItWorks": "Місячна ставка r = річний відсоток / 1200. Для боргу B та постійного платежу P строк за r > 0 дорівнює −ln(1 − B×r/P) / ln(1+r), округлений угору; за нульової ставки — B/P угору. Проценти нараховуються перед платежем наприкінці місяця, останній платіж зменшується до належного залишку. За P ≤ B×r борг у цій моделі не спадає. Строк понад 600 місяців виходить за межі розрахунку; таблиця показує перші 36. Внутрішні суми не округлюються до копійок.",
    "example": "Борг 100 000 ₴ під 24 % за платежу 5000 ₴ закриється за 26 місяців, переплата складе 28 987,28 ₴. Платіж 7000 ₴ скоротив би строк до 17 місяців і переплату до 18 939,65 ₴.",
    "faq": [
      {
        "q": "Чому мінімальний платіж такий невигідний?",
        "a": "У цій моделі за ставки 24% початкове місячне нарахування дорівнює 2% боргу. Платіж, лише трохи більший за це нарахування, повільно зменшує залишок. Це пояснення арифметики, а не твердження про мету банківського мінімального платежу."
      },
      {
        "q": "Що буде, якщо платіж менший за проценти?",
        "a": "Борг зростатиме, і погашення не настане ніколи. Розрахунок покаже це прямо, а не видасть нескінченне число місяців."
      },
      {
        "q": "Чи допомагає пільговий період?",
        "a": "Сам пільговий період та умови його збереження не моделюються. За ставки 0% можна оцінити безпроцентне погашення: борг 30 000 із платежем 5000 потребує 6 місяців. Фактичні правила пільги перевіряйте за договором."
      },
      {
        "q": "Що робити з кількома картками?",
        "a": "Гасити насамперед ту, у якої вища ставка — це метод лавини. Для кількох боргів є окремий розрахунок, що порівнює лавину зі сніговою кулею."
      }
    ],
    "disclaimer": "Один залишок, стала номінальна річна ставка та платежі наприкінці місяця; нових покупок, комісій, пільгового періоду й щоденних банківських нарахувань немає. Ставку та умови картки перевіряйте за договором."
  },
  "de": {
    "longDescription": "Berechnet Dauer und Zinsen für einen Saldo bei konstantem nominalem Jahreszins und gleicher Zahlung am Monatsende. Die Laufzeit ergibt sich aus Saldo, Zinssatz und Zahlung; sie wird nicht vorgegeben. Ist die Zahlung höchstens so hoch wie der Monatszins, sinkt der Saldo nicht. Die Tabelle trennt Zahlung, Zinsen, Tilgung und Restschuld. Tägliche Verzinsung, Neukäufe und Gebühren gehören nicht zu diesem Modell.",
    "howToUse": [
      "Trage den derzeitigen Saldo der Karte ein.",
      "Gib den Jahreszins aus den Bedingungen an — er steht auch auf der Abrechnung.",
      "Setze den Betrag, den du jeden Monat zahlen kannst.",
      "Vergleiche die Zeile mit den Zinsen des ersten Monats mit deiner Rate: liegen sie nah beieinander, bewegt sich der Saldo kaum."
    ],
    "howItWorks": "Monatszins r = Jahresprozentsatz / 1200. Bei Saldo B und konstanter Rate P beträgt die Laufzeit für r > 0 −ln(1 − B×r/P) / ln(1+r), aufgerundet; ohne Zins wird B/P aufgerundet. Die Zinsen fallen vor jeder Zahlung am Monatsende an; die letzte Rate wird auf den fälligen Rest begrenzt. Bei P ≤ B×r sinkt die Schuld in diesem Modell nicht. Mehr als 600 Monate liegen außerhalb des Rechenbereichs; die Tabelle zeigt die ersten 36. Intern werden Beträge nicht auf Cent gerundet.",
    "example": "Ein Saldo von 3000 € zu 24 % mit einer Rate von 150 € ist in 26 Monaten getilgt und kostet 869,62 € Zinsen.",
    "faq": [
      {
        "q": "Wie unterscheidet sich das vom Tilgen eines Kredits?",
        "a": "Ein Kreditratenrechner verwendet meist eine vorgegebene Laufzeit und berechnet die Rate. Hier bestimmen Saldo, Zins und Zahlung die Laufzeit. Das unterscheidet die Modelleingaben; tatsächliche Vertragsbedingungen sind gesondert zu prüfen."
      },
      {
        "q": "Warum verweigert er die Antwort bei einer kleinen Rate?",
        "a": "Weil der Saldo unterhalb der Monatszinsen wächst, statt zu fallen. Die Formel zöge den Logarithmus einer negativen Zahl — Unsinn im Gewand einer Antwort."
      },
      {
        "q": "Ist die zinsfreie Zeit enthalten?",
        "a": "Die Schonfrist und ihre Voraussetzungen werden nicht modelliert. Mit 0% lässt sich eine zinsfreie Tilgung schätzen: 30 000 Saldo mit 5000 Rate brauchen 6 Monate. Die tatsächlichen Bedingungen stehen im Vertrag."
      },
      {
        "q": "Warum nennt die Bank eine andere Zahl?",
        "a": "Banken berechnen Zinsen täglich auf den tatsächlichen Saldo und rechnen Kontoführung und Gebühren für Barabhebungen hinzu. Hier steht eine monatliche Schätzung ohne Gebühren."
      }
    ],
    "disclaimer": "Ein Saldo, ein konstanter nominaler Jahreszins und Zahlungen am Monatsende; keine Neukäufe, Gebühren, Schonfrist oder tägliche Zinsberechnung des Anbieters. Prüfe Satz und Kartenbedingungen im Vertrag."
  },
  "es": {
    "longDescription": "Calcula plazo e intereses de un saldo con tipo anual nominal constante y un pago igual al final de cada mes. El plazo resulta del saldo, tipo y pago, en lugar de introducirse previamente. Si el pago no supera los intereses mensuales, el saldo no baja y se informa de esa condición. La tabla separa pago, intereses, amortización y saldo; no incluye devengo diario, compras nuevas ni comisiones.",
    "howToUse": [
      "Introduce el saldo actual de la tarjeta.",
      "Indica el tipo anual de las condiciones: también aparece en el extracto.",
      "Fija el importe que puedes pagar cada mes.",
      "Compara la línea de intereses del primer mes con tu cuota: si están cerca, el saldo apenas se mueve."
    ],
    "howItWorks": "Tipo mensual r = porcentaje anual / 1200. Con saldo B y cuota constante P, el plazo para r > 0 es −ln(1 − B×r/P) / ln(1+r), redondeado hacia arriba; sin intereses se redondea B/P hacia arriba. Se devengan intereses antes de cada pago al final del mes y se reduce la última cuota al importe pendiente. Si P ≤ B×r, el saldo no disminuye en este modelo. Más de 600 meses exceden su alcance; la tabla muestra los primeros 36. Los importes internos no se redondean a céntimos.",
    "example": "Un saldo de 10 000 al 24 % con una cuota de 500 se liquida en 26 meses y cuesta 2898,73 en intereses.",
    "faq": [
      {
        "q": "¿En qué se diferencia de amortizar un préstamo?",
        "a": "Un cálculo de cuota de préstamo suele partir del plazo para obtener el pago. Aquí saldo, tipo y pago determinan el plazo. Es una diferencia entre entradas del modelo; las condiciones del contrato se comprueban aparte."
      },
      {
        "q": "¿Por qué se niega a responder con una cuota pequeña?",
        "a": "Porque por debajo de los intereses mensuales el saldo crece en lugar de bajar. La fórmula tomaría el logaritmo de un número negativo: un disparate disfrazado de respuesta."
      },
      {
        "q": "¿Está incluido el periodo sin intereses?",
        "a": "No se modelan el periodo de gracia ni sus condiciones. Con el 0% se puede estimar el pago sin intereses: saldo de 30 000 y cuota de 5000 requieren 6 meses. Consulta las condiciones reales del contrato."
      },
      {
        "q": "¿Por qué el banco da otra cifra?",
        "a": "Los bancos devengan intereses a diario sobre el saldo real y añaden comisiones de mantenimiento y de disposición de efectivo. Esto da una estimación mensual sin comisiones."
      }
    ],
    "disclaimer": "Un saldo, un tipo nominal anual constante y pagos al final del mes; no se incluyen compras nuevas, comisiones, periodo de gracia ni devengo diario del emisor. Comprueba el tipo aplicable y las condiciones del contrato."
  }
};
