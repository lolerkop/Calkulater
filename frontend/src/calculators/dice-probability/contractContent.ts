import type { CalculatorCopy } from '../../lib/platform/types';

// Individually reviewed existing native body, with scoped subject corrections.
export const mathWave8ContractContent = {
  "ru": {
    "longDescription": "Считает вероятность ровно заданной суммы на 1–10 одинаковых честных кубиках с 2–100 гранями, пронумерованными от 1 до числа граней. Броски предполагаются независимыми: каждый упорядоченный набор равновероятен. Благоприятные и все исходы считаются точно целочисленной арифметикой; вероятность как их отношение показывается с округлением. На десяти стогранниках число исходов 100¹⁰ = 10²⁰ уже больше 2⁵³, а десять двадцатигранников дают 20¹⁰ = 10 240 000 000 000 и ещё не превышают эту границу.",
    "howItWorks": "Благоприятные комбинации считаются по формуле включений-исключений с перебором того, сколько кубиков превысило свой максимум. Всего исходов — грани в степени числа кубиков, вероятность — их отношение. Ненулевые малые проценты, которые округлились бы до 0,00 %, показываются в научной записи.",
    "howToUse": [
      "Укажите, сколько кубиков бросается.",
      "Укажите, сколько граней у каждого кубика.",
      "Введите сумму, которая вас интересует.",
      "Сумма должна лежать между числом кубиков и произведением кубиков на грани."
    ],
    "example": "Два шестигранника дают семёрку шестью способами из тридцати шести, то есть с вероятностью 16,67 %.",
    "faq": [
      {
        "q": "Почему семёрка на двух кубиках выпадает чаще всего?",
        "a": "У неё больше всего комбинаций — шесть, от 1+6 до 6+1. У двойки и двенадцати по одной, поэтому они встречаются в шесть раз реже."
      },
      {
        "q": "Считает ли калькулятор кубики с разным числом граней?",
        "a": "Нет, все кубики здесь одинаковые. Смешанные наборы, например d6 вместе с d8, требуют другого подсчёта и в этом калькуляторе не рассматриваются."
      },
      {
        "q": "Что показывает ожидаемая сумма?",
        "a": "Среднее по множеству бросков: кубики × (грани + 1) ÷ 2. Для трёх шестигранников это 10,5, поэтому десятка и одиннадцать выпадают чаще прочего."
      },
      {
        "q": "Как узнать вероятность суммы «не меньше заданной»?",
        "a": "Сложить вероятности этой суммы и всех больших. Этот калькулятор отвечает про одну точную сумму за раз."
      }
    ]
  },
  "en": {
    "longDescription": "Calculates the chance of exactly a chosen sum on 1–10 identical fair dice with 2–100 faces numbered from 1 to the number of faces. Rolls are independent, so every ordered outcome has equal probability. Favourable and total counts use exact integer arithmetic; their probability ratio is displayed rounded. Ten hundred-sided dice give 100¹⁰ = 10²⁰ outcomes, exceeding 2⁵³, whereas ten twenty-sided dice give 20¹⁰ = 10,240,000,000,000 and remain below that boundary.",
    "howItWorks": "Favourable combinations come from inclusion–exclusion over the number of dice that overshoot their maximum. Total outcomes are sides raised to the number of dice, and the probability is their ratio. Small nonzero percentages that would round to 0.00% are shown in scientific notation.",
    "howToUse": [
      "Enter how many dice are rolled.",
      "Enter how many sides each die has.",
      "Enter the sum you are interested in.",
      "The sum must be between the number of dice and dice × sides."
    ],
    "example": "Two six-sided dice make seven in six of thirty-six ways, which is 16.67%.",
    "faq": [
      {
        "q": "Why is seven the most likely sum on two dice?",
        "a": "Because it has the most combinations: six of them, from 1+6 through 6+1. Two and twelve have one each, which is why they show up six times less often."
      },
      {
        "q": "Does this cover dice with different numbers of sides?",
        "a": "No, all the dice here are identical. Mixed sets — a d6 with a d8, say — need a different count and are not what this calculator computes."
      },
      {
        "q": "What is the expected sum?",
        "a": "The average over many rolls: dice × (sides + 1) ÷ 2. For three six-sided dice it is 10.5, which is why ten and eleven are the most common results."
      },
      {
        "q": "How do I get the chance of at least a given sum?",
        "a": "Add up the probabilities of that sum and every higher one. This calculator answers for one exact sum at a time."
      }
    ]
  },
  "uk": {
    "longDescription": "Рахує ймовірність рівно заданої суми на 1–10 однакових чесних кубиках із 2–100 гранями, пронумерованими від 1 до кількості граней. Кидки вважаються незалежними, тому кожен упорядкований набір рівноймовірний. Сприятливі й усі результати рахуються точно цілою арифметикою; їхнє відношення показується з округленням. Для десяти стогранників 100¹⁰ = 10²⁰ уже більше за 2⁵³, тоді як десять двадцятигранників дають 20¹⁰ = 10 240 000 000 000 і ще не перевищують цю межу.",
    "howItWorks": "Сприятливі комбінації рахуються за формулою включень-виключень із перебором того, скільки кубиків перевищило свій максимум. Усього результатів — грані в степені кількості кубиків, імовірність — їхнє відношення. Обидва лічильники ведуться в точній цілочисельній арифметиці. Малі ненульові відсотки, які округлилися б до 0,00 %, показуються в науковому записі.",
    "howToUse": [
      "Укажіть, скільки кубиків кидається.",
      "Укажіть, скільки граней у кожного кубика.",
      "Введіть суму, яка вас цікавить.",
      "Сума має лежати між кількістю кубиків і добутком кубиків на грані."
    ],
    "example": "Два шестигранники дають сімку шістьма способами з тридцяти шести, тобто з імовірністю 16,67 %. Двійку чи дванадцятку — лише одним способом кожну, тобто 2,78 %.",
    "faq": [
      {
        "q": "Чому сімка на двох кубиках найімовірніша?",
        "a": "Бо її дає найбільше комбінацій: 1+6, 2+5, 3+4 і ті самі пари у зворотному порядку — разом шість із тридцяти шести. Двійку й дванадцятку дає лише одна комбінація кожну."
      },
      {
        "q": "Чому розрахунок не імітує кидки?",
        "a": "Бо точний перебір комбінацій дає визначений дріб, а імітація — лише оцінку, яка щоразу інша. Формула включень-виключень рахує швидко навіть для десяти кубиків."
      },
      {
        "q": "Навіщо точна цілочисельна арифметика?",
        "a": "Для десяти стогранників загальна кількість результатів дорівнює 100¹⁰ = 10²⁰, що перевищує 2⁵³. BigInt зберігає точні цілі кількості сприятливих і всіх результатів. Саме відношення цих кількостей є наближеною числовою ймовірністю; це не довільна десяткова точність."
      },
      {
        "q": "Чому сума обмежена знизу кількістю кубиків?",
        "a": "Бо мінімум на кожному кубику дорівнює одиниці. Трьома кубиками менше трьох не викинути, і сума 2 просто не існує."
      }
    ]
  },
  "de": {
    "longDescription": "Berechnet die Wahrscheinlichkeit genau einer gewählten Summe bei 1–10 identischen fairen Würfeln mit 2–100 Seiten, nummeriert von 1 bis zur Seitenzahl. Unabhängige Würfe machen jedes geordnete Ergebnis gleich wahrscheinlich. Günstige und gesamte Anzahlen werden exakt ganzzahlig berechnet; ihr Wahrscheinlichkeitsverhältnis wird gerundet angezeigt. Zehn hundertseitige Würfel ergeben 100¹⁰ = 10²⁰ Ergebnisse, mehr als 2⁵³. Zehn zwanzigseitige Würfel ergeben dagegen 20¹⁰ = 10 240 000 000 000 und liegen noch darunter.",
    "howItWorks": "Die günstigen Kombinationen folgen aus Inklusion und Exklusion über die Zahl der Würfel, die ihren Höchstwert überschreiten. Die Gesamtzahl der Ausgänge ist Seiten hoch der Zahl der Würfel, und die Wahrscheinlichkeit ist ihr Verhältnis. Kleine Prozentsätze ungleich null, die als 0,00 % erscheinen würden, werden wissenschaftlich dargestellt.",
    "howToUse": [
      "Trage ein, wie viele Würfel geworfen werden.",
      "Trage ein, wie viele Seiten jeder Würfel hat.",
      "Trage die Summe ein, die dich interessiert.",
      "Die Summe muss zwischen der Zahl der Würfel und Würfel × Seiten liegen."
    ],
    "example": "Zwei sechsseitige Würfel ergeben eine Sieben in sechs von sechsunddreißig Fällen, also 16,67 %.",
    "faq": [
      {
        "q": "Warum ist die Sieben bei zwei Würfeln die wahrscheinlichste Summe?",
        "a": "Weil sie die meisten Kombinationen hat: sechs, von 1+6 bis 6+1. Zwei und Zwölf haben je eine, sie erscheinen deshalb sechsmal seltener."
      },
      {
        "q": "Deckt das Würfel mit verschiedenen Seitenzahlen ab?",
        "a": "Nein, alle Würfel sind hier gleich. Gemischte Sätze — etwa ein W6 mit einem W8 — brauchen eine andere Zählung und sind nicht das, was dieser Rechner berechnet."
      },
      {
        "q": "Was ist die erwartete Summe?",
        "a": "Der Durchschnitt über viele Würfe: Würfel × (Seiten + 1) ÷ 2. Für drei sechsseitige Würfel sind es 10,5, weshalb Zehn und Elf die häufigsten Ergebnisse sind."
      },
      {
        "q": "Wie bekomme ich die Chance auf mindestens eine bestimmte Summe?",
        "a": "Addiere die Wahrscheinlichkeiten dieser Summe und aller höheren. Dieser Rechner antwortet für jeweils eine genaue Summe."
      }
    ]
  },
  "es": {
    "longDescription": "Calcula la probabilidad de una suma exacta con 1–10 dados idénticos y equilibrados de 2–100 caras, numeradas de 1 al número de caras. Las tiradas son independientes y cada resultado ordenado es equiprobable. Los recuentos favorables y totales usan aritmética entera exacta; su cociente se muestra redondeado. Diez dados de cien caras dan 100¹⁰ = 10²⁰ resultados, más que 2⁵³. Diez dados de veinte caras dan 20¹⁰ = 10 240 000 000 000 y todavía están por debajo de ese límite.",
    "howItWorks": "Las combinaciones favorables salen de la inclusión-exclusión sobre el número de dados que se pasan de su máximo. Los casos totales son las caras elevadas al número de dados, y la probabilidad es su cociente. Los porcentajes pequeños distintos de cero que se redondearían a 0,00 % se muestran en notación científica.",
    "howToUse": [
      "Introduce cuántos dados se lanzan.",
      "Introduce cuántas caras tiene cada dado.",
      "Introduce la suma que te interesa.",
      "La suma debe estar entre el número de dados y dados × caras."
    ],
    "example": "Dos dados de seis caras suman siete en seis de treinta y seis maneras, es decir, un 16,67 %.",
    "faq": [
      {
        "q": "¿Por qué el siete es la suma más probable con dos dados?",
        "a": "Porque tiene más combinaciones: seis, desde 1+6 hasta 6+1. El dos y el doce tienen una cada uno, y por eso salen seis veces menos."
      },
      {
        "q": "¿Sirve para dados con distinto número de caras?",
        "a": "No, aquí todos los dados son iguales. Los conjuntos mixtos —un d6 con un d8, por ejemplo— exigen otro recuento y no es lo que calcula esta herramienta."
      },
      {
        "q": "¿Qué es la suma esperada?",
        "a": "La media a lo largo de muchas tiradas: dados × (caras + 1) ÷ 2. Con tres dados de seis caras son 10,5, y por eso el diez y el once son los resultados más frecuentes."
      },
      {
        "q": "¿Cómo obtengo la probabilidad de al menos una suma dada?",
        "a": "Sumando las probabilidades de esa suma y de todas las mayores. Esta calculadora responde para una suma exacta cada vez."
      }
    ]
  }
} satisfies Record<'ru' | 'en' | 'uk' | 'de' | 'es', Partial<CalculatorCopy>>;
