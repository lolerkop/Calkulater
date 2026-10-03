import type { CalculatorCopy } from '../../lib/platform/types';

// Individually reviewed existing native body, with scoped subject corrections.
export const mathWave8ContractContent = {
  "ru": {
    "longDescription": "Считает среднее, в котором значения входят с разным весом: оценка за курс с учётом кредитов, средняя цена с учётом объёма покупок, средний балл с учётом часов. Пары вводятся построчно — сначала значение, потом вес. Строка, в которой второго числа нет, отклоняется целиком: подставить вес 1 за посетителя означало бы посчитать не тот набор, который он видит на экране.",
    "howItWorks": "Каждое значение умножается на свой вес, произведения складываются и делятся на сумму весов: x̄ = Σ(xᵢ·wᵢ) / Σwᵢ. При равных весах результат совпадает с обычным средним арифметическим. Поддерживаются конечные значения любого знака и неотрицательные веса; хотя бы один вес должен быть положительным. Нулевой вес исключает вклад данного значения. Значения должны иметь одну единицу, а все веса — общую интерпретацию: например, одинаковые единицы объёма или число кредитов. Результат сохраняет единицу значений, а единица весов сокращается. Предел — 10000 пар и 1000000 символов. Если сумма произведений не представима, она отмечается отдельно, хотя её отношение к сумме весов может дать корректное конечное среднее.",
    "howToUse": [
      "Впишите пары построчно: значение, пробел, вес.",
      "В каждой строке ровно два конечных числа: «значение вес». Десятичная точка и запятая без пробела допустимы; запятая перед пробелом, пробел и точка с запятой разделяют два числа. Нельзя вставлять разделители тысяч внутрь чисел списка.",
      "Прочитайте взвешенное среднее и сумму весов."
    ],
    "example": "Оценки 90, 75 и 60 с весами 3, 4 и 2 дают (270 + 300 + 120) / 9 = 76,6667 — ближе к 75, потому что у этой оценки наибольший вес.",
    "faq": [
      {
        "q": "Чем взвешенное среднее отличается от обычного?",
        "a": "Обычное считает все значения равнозначными. Взвешенное учитывает, что одни весят больше других — например, экзамен на четыре кредита влияет на итог сильнее, чем зачёт на один."
      },
      {
        "q": "Что будет, если все веса равны?",
        "a": "Результат совпадёт с обычным средним арифметическим: одинаковый множитель сокращается и сверху, и снизу."
      },
      {
        "q": "Можно ли поставить нулевой вес?",
        "a": "Отдельному значению — да, оно просто не повлияет на результат. Но если нулевыми окажутся все веса, делить будет не на что, и калькулятор сообщит об ошибке."
      },
      {
        "q": "Почему строка с одним числом считается ошибкой?",
        "a": "Потому что неизвестно, что это — значение без веса или вес без значения. Достроить недостающее число значило бы придумать данные за вас."
      }
    ]
  },
  "en": {
    "longDescription": "Averages values that do not count equally: a course grade weighted by credits, an average price weighted by the volume bought, a score weighted by hours. Pairs are entered one per line — the value first, then its weight. A line with only one number is rejected outright, because filling in a weight of 1 on your behalf would average a set you never entered.",
    "howItWorks": "Each value is multiplied by its weight, the products are added up and divided by the total weight: x̄ = Σ(xᵢ·wᵢ) / Σwᵢ. When every weight is the same the result matches the plain arithmetic mean. Finite values of either sign and nonnegative weights are supported; at least one weight must be positive. A zero weight removes that value’s contribution. Values need one common unit, and weights one consistent meaning, such as the same volume unit or number of credits. The mean keeps the value unit while the weight unit cancels. The limit is 10000 pairs and 1000000 characters. An unrepresentable product sum is marked separately, although its ratio to total weight can still produce a valid finite mean.",
    "howToUse": [
      "Enter the pairs one per line: the value, a space, then the weight.",
      "Each line contains exactly two finite numbers: “value weight”. A decimal point or a comma without whitespace is allowed; whitespace, a semicolon or a comma followed by whitespace separates the pair. Do not insert thousands separators inside list numbers.",
      "Read the weighted average and the total weight."
    ],
    "example": "Grades of 90, 75 and 60 with weights 3, 4 and 2 give (270 + 300 + 120) / 9 = 76.6667 — closest to 75, which carries the largest weight.",
    "faq": [
      {
        "q": "How is this different from a plain average?",
        "a": "A plain average treats every value as equally important. A weighted one accounts for some values mattering more — a four-credit exam moves the result further than a one-credit test."
      },
      {
        "q": "What happens when all the weights are equal?",
        "a": "The result equals the plain arithmetic mean: the common factor cancels out of both the numerator and the denominator."
      },
      {
        "q": "Can a weight be zero?",
        "a": "For an individual value, yes — it simply drops out of the result. If every weight is zero there is nothing to divide by, and the calculator says so."
      },
      {
        "q": "Why is a line with one number an error?",
        "a": "Because there is no way to tell whether it is a value with no weight or a weight with no value. Supplying the missing number would be inventing data."
      }
    ]
  },
  "uk": {
    "longDescription": "Калькулятор рахує середнє, у якому значення входять із різною вагою: оцінка за курс з урахуванням кредитів, середня ціна з урахуванням обсягу покупок, середній бал з урахуванням годин. Пари вводяться порядково — спершу значення, потім вага. Рядок, у якому другого числа немає, відхиляється цілком: підставити вагу 1 означало б порахувати не той набір, який видно на екрані.",
    "howItWorks": "Кожне значення множиться на свою вагу, добутки складаються й діляться на суму ваг: x̄ = Σ(xᵢ·wᵢ) / Σwᵢ. За рівних ваг результат збігається зі звичайним середнім арифметичним. Підтримуються скінченні значення будь-якого знака й невід’ємні ваги; хоча б одна вага має бути додатною. Нульова вага усуває внесок значення. Значення мають одну одиницю, а всі ваги — узгоджений зміст, наприклад ту саму одиницю обсягу або кількість кредитів. Середнє зберігає одиницю значень, а одиниця ваг скорочується. Межа — 10000 пар і 1000000 символів. Непредставима сума добутків позначається окремо, хоча її відношення до суми ваг може дати правильне скінченне середнє.",
    "howToUse": [
      "Впишіть пари порядково: значення, пробіл, вага.",
      "Кожен рядок містить рівно два скінченні числа: «значення вага». Десяткова крапка та кома без пробілу допустимі; пробіл, крапка з комою або кома перед пробілом розділяють пару. Не вставляйте роздільники тисяч усередину чисел списку.",
      "Прочитайте зважене середнє й суму ваг."
    ],
    "example": "Оцінки 90, 75 і 60 з вагами 3, 4 і 2 дають (270 + 300 + 120) / 9 = 76,6667 — ближче до 75, бо в цієї оцінки найбільша вага. Просте середнє дало б 75.",
    "faq": [
      {
        "q": "Чим зважене середнє відрізняється від звичайного?",
        "a": "У звичайному всі значення рівноправні, у зваженому кожне входить зі своєю вагою. За однакових ваг вони збігаються, тому зважене середнє є узагальненням, а не окремим випадком."
      },
      {
        "q": "Що брати за вагу?",
        "a": "Величину, яка показує внесок значення: кредити курсу, кількість годин, обсяг партії, чисельність групи. Ваги не обов’язково мають давати в сумі одиницю чи сто — вони нормуються самі."
      },
      {
        "q": "Чому неповний рядок відхиляється?",
        "a": "Бо підстановка ваги за замовчуванням порахувала б не той набір, який ви бачите на екрані, і не сказала б про це. Явне відхилення дозволяє виправити ввід."
      },
      {
        "q": "Чи можуть ваги бути від’ємними?",
        "a": "У цьому калькуляторі — ні: підтримуються невід’ємні ваги. Окрема вага може бути нульовою, але загальна сума має бути додатною. Формули з від’ємними вагами існують для інших задач; це не режим цього інструмента."
      }
    ]
  },
  "de": {
    "longDescription": "Mittelt Werte, die nicht gleich stark zählen: eine Kursnote gewichtet nach Leistungspunkten, ein Durchschnittspreis gewichtet nach der gekauften Menge, ein Ergebnis gewichtet nach Stunden. Die Paare werden je Zeile eingetragen — zuerst der Wert, dann sein Gewicht. Eine Zeile mit nur einer Zahl wird rundheraus abgewiesen, denn ein Gewicht von 1 für dich einzusetzen mittelte eine Menge, die du nie eingetragen hast.",
    "howItWorks": "Jeder Wert wird mit seinem Gewicht multipliziert, die Produkte werden addiert und durch die Summe der Gewichte geteilt: x̄ = Σ(xᵢ·wᵢ) / Σwᵢ. Sind alle Gewichte gleich, entspricht das Ergebnis dem schlichten arithmetischen Mittel. Endliche Werte beider Vorzeichen und nichtnegative Gewichte werden unterstützt; mindestens ein Gewicht muss positiv sein. Gewicht null entfernt den Beitrag des jeweiligen Werts. Werte benötigen eine gemeinsame Einheit, Gewichte eine einheitliche Bedeutung, etwa dieselbe Volumeneinheit oder die Zahl der Credits. Der Mittelwert behält die Werteinheit; die Gewichtseinheit kürzt sich heraus. Die Grenze beträgt 10000 Paare und 1000000 Zeichen. Eine nicht darstellbare Produktsumme wird getrennt markiert, obwohl ihr Verhältnis zur Gewichtssumme einen gültigen endlichen Mittelwert ergeben kann.",
    "howToUse": [
      "Trage die Paare je Zeile ein: der Wert, ein Leerzeichen, dann das Gewicht.",
      "Jede Zeile enthält genau zwei endliche Zahlen: „Wert Gewicht“. Dezimalpunkt oder Komma ohne Leerraum sind erlaubt; Leerraum, Semikolon oder Komma vor Leerraum trennen das Paar. Verwende innerhalb der Listenzahlen keine Tausendertrennzeichen.",
      "Lies den gewichteten Durchschnitt und die Summe der Gewichte ab."
    ],
    "example": "Noten von 90, 75 und 60 mit den Gewichten 3, 4 und 2 ergeben (270 + 300 + 120) / 9 = 76,6667 — am nächsten an 75, denn diese Note trägt das größte Gewicht.",
    "faq": [
      {
        "q": "Wie unterscheidet sich das von einem schlichten Durchschnitt?",
        "a": "Ein schlichter Durchschnitt behandelt jeden Wert als gleich wichtig. Ein gewichteter berücksichtigt, dass manche Werte mehr zählen — eine Prüfung mit vier Leistungspunkten verschiebt das Ergebnis stärker als ein Test mit einem."
      },
      {
        "q": "Was passiert, wenn alle Gewichte gleich sind?",
        "a": "Das Ergebnis entspricht dem schlichten arithmetischen Mittel: der gemeinsame Faktor kürzt sich aus Zähler und Nenner heraus."
      },
      {
        "q": "Darf ein Gewicht null sein?",
        "a": "Bei einem einzelnen Wert ja — er fällt dann schlicht aus dem Ergebnis heraus. Sind alle Gewichte null, gibt es nichts, wodurch geteilt werden könnte, und der Rechner sagt das."
      },
      {
        "q": "Warum ist eine Zeile mit einer Zahl ein Fehler?",
        "a": "Weil sich nicht erkennen lässt, ob es ein Wert ohne Gewicht oder ein Gewicht ohne Wert ist. Die fehlende Zahl zu ergänzen hieße, Daten zu erfinden."
      }
    ]
  },
  "es": {
    "longDescription": "Promedia valores que no cuentan por igual: la nota de una asignatura ponderada por créditos, un precio medio ponderado por el volumen comprado, una puntuación ponderada por horas. Los pares se introducen uno por línea: primero el valor y después su peso. Una línea con un solo número se rechaza sin más, porque asignarte un peso de 1 promediaría un conjunto que nunca introdujiste.",
    "howItWorks": "Cada valor se multiplica por su peso, los productos se suman y se dividen entre el peso total: x̄ = Σ(xᵢ·wᵢ) / Σwᵢ. Cuando todos los pesos son iguales, el resultado coincide con la media aritmética simple. Se admiten valores finitos de cualquier signo y pesos no negativos; al menos un peso debe ser positivo. Un peso cero elimina la contribución de ese valor. Los valores necesitan una unidad común y los pesos un significado coherente, como la misma unidad de volumen o número de créditos. La media conserva la unidad del valor y se cancela la del peso. El límite es de 10000 pares y 1000000 caracteres. Una suma de productos no representable se indica por separado aunque su cociente con la suma de pesos pueda dar una media finita válida.",
    "howToUse": [
      "Introduce los pares uno por línea: el valor, un espacio y el peso.",
      "Cada línea contiene exactamente dos números finitos: «valor peso». Se admite un punto decimal o una coma sin espacio; un espacio, punto y coma o coma seguida de espacio separa el par. No insertes separadores de miles dentro de los números de la lista.",
      "Consulta la media ponderada y el peso total."
    ],
    "example": "Notas de 90, 75 y 60 con pesos 3, 4 y 2 dan (270 + 300 + 120) / 9 = 76,6667, el valor más cercano a 75, que es el que lleva el mayor peso.",
    "faq": [
      {
        "q": "¿En qué se diferencia de una media simple?",
        "a": "Una media simple considera todos los valores igual de importantes. Una ponderada tiene en cuenta que unos pesan más: un examen de cuatro créditos mueve el resultado más que una prueba de uno."
      },
      {
        "q": "¿Qué ocurre cuando todos los pesos son iguales?",
        "a": "El resultado coincide con la media aritmética simple: el factor común se cancela en el numerador y en el denominador."
      },
      {
        "q": "¿Un peso puede ser cero?",
        "a": "Para un valor concreto, sí: simplemente desaparece del resultado. Si todos los pesos son cero no hay entre qué dividir, y la calculadora lo dice."
      },
      {
        "q": "¿Por qué una línea con un solo número es un error?",
        "a": "Porque no hay forma de saber si es un valor sin peso o un peso sin valor. Poner el número que falta sería inventar datos."
      }
    ]
  }
} satisfies Record<'ru' | 'en' | 'uk' | 'de' | 'es', Partial<CalculatorCopy>>;
