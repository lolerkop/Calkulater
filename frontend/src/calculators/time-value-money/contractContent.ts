import type { CalculatorDef } from '../../lib/types';
type Copy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;
export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Copy> = {
  "ru": {
    "longDescription": "Считает две стороны одного множителя (1+i)^n: будущая стоимость умножает исходную сумму на него, текущая делит будущую сумму. Номинальные 12 % с ежемесячным начислением соответствуют эффективным 12,68 % за год, поэтому частота задана отдельным полем. Это модель одной суммы без последующих потоков. Текущая стоимость является оценкой при выбранной ставке, а не рекомендацией, сколько платить за обещанную выплату.",
    "howToUse": [
      "Выберите, что считать: будущую или текущую стоимость.",
      "Введите сумму, ставку и срок.",
      "Укажите частоту начисления процентов.",
      "Для дисконтирования введите будущую сумму."
    ],
    "howItWorks": "Для номинальной годовой ставки r в процентах и частоты m (12, 4 или 1 раз в год) i=r/(100m), n=t×m и F=(1+i)^n. FV=A×F; PV=A/F; эффективная годовая ставка = [(1+i)^m−1]×100 %. t — положительные годы без округления, r≥0. При дробном n формула продолжает кривую роста между периодами; это не условие реального договора о неполном периоде. Одна сумма располагается в начале для FV либо в конце для PV; взносов и снятий нет.",
    "example": "100 000 ₽ под 12 % годовых с ежемесячным начислением за 5 лет превращаются в 181 669,67 ₽. При ставке 0 % обе стоимости совпадают с исходной суммой. Для 10 000, 12 % годовых, квартального начисления и 0,125 года получаются 10 148,89 и 0,5 периода, а не один период.",
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
    "disclaimer": "Постоянная неотрицательная номинальная годовая ставка и одна сумма. Инфляция, комиссии, налоги, вероятность выплаты и договорные правила неполного периода не включены. Это не полная стоимость кредита или оценка надёжности обещанной выплаты."
  },
  "en": {
    "longDescription": "Computes both sides of (1+i)^n: future value multiplies today’s amount by the factor, while present value divides a future amount. A nominal 12% with monthly compounding corresponds to 12.68% effective annual growth, so frequency has its own input. This is a single-amount model without later cash flows. Present value is an estimate at the chosen rate, rather than a recommendation about what to pay for a promised payment.",
    "howToUse": [
      "Choose whether to compute future or present value.",
      "Enter the amount, the rate and the term.",
      "Choose how often interest is compounded.",
      "For discounting, enter the future amount."
    ],
    "howItWorks": "For nominal annual rate r in percent and frequency m (12, 4 or 1 per year), i=r/(100m), n=t×m and F=(1+i)^n. FV=A×F; PV=A/F; effective annual rate = [(1+i)^m−1]×100%. Duration t uses positive years without rounding; r≥0. A fractional n extends the growth curve between periods and does not specify a real contract’s partial-period rule. One amount lies at the start for FV or at the end for PV; there are no deposits or withdrawals.",
    "example": "100,000 at 12% a year compounded monthly becomes 181,669.67 after five years. At 0%, both values equal the original amount. For 10,000 at 12% annually, quarterly compounding and 0.125 years, the result is 10,148.89 over 0.5 periods, rather than one period.",
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
    "disclaimer": "One amount and a constant nonnegative nominal annual rate. Inflation, fees, taxes, payment risk and contractual partial-period rules are excluded. This is neither full borrowing cost nor a reliability assessment of a promised payment."
  },
  "uk": {
    "longDescription": "Рахує обидві сторони множника (1+i)^n: майбутня вартість множить сьогоднішню суму, поточна ділить майбутню. Номінальні 12 % зі щомісячною капіталізацією відповідають ефективним 12,68 % за рік, тому частоту задають окремо. Це модель однієї суми без подальших потоків. Поточна вартість є оцінкою за вибраною ставкою, а не рекомендацією, скільки платити за обіцяну виплату.",
    "howToUse": [
      "Виберіть напрямок: майбутня вартість чи поточна.",
      "Введіть суму, номінальну річну ставку та строк у роках; не ставку за місяць і не кількість місяців.",
      "Уточніть частоту нарахування — вона помітно впливає на результат."
    ],
    "howItWorks": "Для номінальної річної ставки r у відсотках і частоти m (12, 4 або 1 на рік) i=r/(100m), n=t×m, F=(1+i)^n. FV=A×F; PV=A/F; ефективна річна ставка = [(1+i)^m−1]×100 %. t — додатні роки без округлення, r≥0. Дробове n продовжує криву між періодами та не задає договірних правил неповного періоду. Одна сума розміщена на початку для FV або наприкінці для PV; внесків і зняття немає.",
    "example": "100 000 ₴ під 12 % річних із щомісячним нарахуванням за 5 років перетворюються на 181 669,67 ₴. За річного нарахування вийшло б 176 234 ₴ — різниця саме в частоті. За ставки 0 % обидві вартості дорівнюють початковій сумі. Для 10 000, річних 12 %, квартального нарахування та 0,125 року виходять 10 148,89 і 0,5 періоду, а не один.",
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
    "disclaimer": "Одна сума та стала невід’ємна номінальна річна ставка. Інфляція, комісії, податки, ризик виплати й договірні правила неповного періоду не враховані. Це не повна вартість кредиту чи оцінка надійності обіцяної виплати."
  },
  "de": {
    "longDescription": "Berechnet beide Seiten von (1+i)^n: der Endwert multipliziert den heutigen Betrag mit dem Faktor, der Barwert teilt einen künftigen Betrag. Nominale 12 % bei monatlicher Verzinsung entsprechen effektiv 12,68 % im Jahr; deshalb hat die Häufigkeit ein eigenes Feld. Modelliert wird ein einzelner Betrag ohne spätere Zahlungsströme. Der Barwert ist eine Schätzung zum gewählten Satz, keine Empfehlung für den Kaufpreis eines Zahlungsversprechens.",
    "howToUse": [
      "Wähle, ob Endwert oder Barwert berechnet wird.",
      "Trage Betrag, Zinssatz und Laufzeit ein.",
      "Wähle, wie oft verzinst wird.",
      "Für die Abzinsung trage den künftigen Betrag ein."
    ],
    "howItWorks": "Bei nominalem Jahreszins r in Prozent und Häufigkeit m (12, 4 oder 1 pro Jahr) gilt i=r/(100m), n=t×m und F=(1+i)^n. FV=A×F; PV=A/F; effektiver Jahreszins = [(1+i)^m−1]×100 %. t sind positive Jahre ohne Rundung, r≥0. Ein gebrochenes n setzt die Wachstumskurve zwischen Perioden fort und beschreibt keine vertragliche Teilperiodenregel. Ein Betrag liegt für FV am Anfang, für PV am Ende; weitere Ein- oder Auszahlungen fehlen.",
    "example": "10 000 € zu 12 % im Jahr bei monatlicher Verzinsung werden nach fünf Jahren zu 18 166,97 €. Bei 0 % entsprechen beide Werte dem Ausgangsbetrag. Für 10 000, jährlich 12 %, vierteljährliche Verzinsung und 0,125 Jahre ergeben sich 10 148,89 und 0,5 Perioden, nicht eine Periode.",
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
    "disclaimer": "Ein Betrag und ein konstanter nichtnegativer nominaler Jahreszins. Inflation, Gebühren, Steuern, Ausfallrisiko und vertragliche Teilperiodenregeln fehlen. Weder gesamte Kreditkosten noch Zuverlässigkeit eines Zahlungsversprechens werden beurteilt."
  },
  "es": {
    "longDescription": "Calcula las dos caras de (1+i)^n: el valor futuro multiplica el importe actual por el factor y el valor presente divide un importe futuro. Un 12 % nominal con capitalización mensual equivale a un 12,68 % efectivo anual, por lo que la frecuencia tiene su propio campo. Se modela una cantidad única sin flujos posteriores. El valor presente es una estimación a la tasa elegida, no una recomendación de cuánto pagar por una promesa.",
    "howToUse": [
      "Elige si calcular el valor futuro o el actual.",
      "Introduce la cantidad, el tipo y el plazo.",
      "Elige con qué frecuencia se capitalizan los intereses.",
      "Para descontar, introduce la cantidad futura."
    ],
    "howItWorks": "Para tasa nominal anual r en porcentaje y frecuencia m (12, 4 o 1 al año): i=r/(100m), n=t×m y F=(1+i)^n. FV=A×F; PV=A/F; tasa efectiva anual = [(1+i)^m−1]×100 %. t son años positivos sin redondear; r≥0. Un n fraccionario prolonga la curva entre periodos y no establece las reglas contractuales de un periodo incompleto. La cantidad única está al inicio para FV o al final para PV; no hay aportaciones ni retiradas.",
    "example": "100 000 al 12 % anual con capitalización mensual se convierten en 181 669,67 al cabo de cinco años. Al 0 %, ambos valores igualan la cantidad inicial. Para 10 000, 12 % anual, capitalización trimestral y 0,125 años resultan 10 148,89 y 0,5 periodos, no uno.",
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
    "disclaimer": "Una cantidad y una tasa nominal anual constante no negativa. Se excluyen inflación, comisiones, impuestos, riesgo de cobro y reglas contractuales de periodos incompletos. No se calcula el coste total del crédito ni la fiabilidad de una promesa."
  }
};
