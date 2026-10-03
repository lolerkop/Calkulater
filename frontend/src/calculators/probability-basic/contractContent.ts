import type { CalculatorCopy } from '../../lib/platform/types';

// Individually reviewed existing native body, with scoped subject corrections.
export const mathWave8ContractContent = {
  "ru": {
    "longDescription": "Считает базовую вероятность четырьмя способами: доля благоприятных исходов, вероятность противоположного события, а также совместное наступление и наступление хотя бы одного из двух независимых событий. Последний случай — тот, где интуиция ошибается чаще всего: вероятность «хотя бы одного» из двух событий по 50% равна не 100%, а 75%, потому что у этих независимых событий есть пересечение, и правильная формула вычитает пересечение.",
    "howItWorks": "Вероятность события — благоприятные исходы, делённые на все. Противоположное событие: 1 − p. Оба независимых: p₁ · p₂. Хотя бы одно: p₁ + p₂ − p₁ · p₂. Отношение благоприятных исходов к общему числу применимо, только когда все исходы равновероятны. Для непересекающихся событий вероятности действительно складываются, поскольку P(A∩B) = 0; это другое условие, чем независимость. Количества исходов — целые от 0 до 9007199254740991, общий счёт положителен. Поля невыбранных режимов в расчёт не входят.",
    "howToUse": [
      "Выберите, что считаете.",
      "Введите исходы или вероятности событий.",
      "Прочитайте вероятность в долях, процентах и шансах."
    ],
    "example": "Один благоприятный исход из шести даёт вероятность 0,1667, то есть 16,667 %.",
    "faq": [
      {
        "q": "Почему «хотя бы одно» из двух событий по 50 % — не 100 %?",
        "a": "Для двух независимых событий пересечение имеет вероятность 0,5×0,5 = 0,25. В сумме 0,5+0,5 оно учтено дважды, поэтому P(A∪B) = 1−0,25 = 0,75. Для двух непересекающихся событий по 50 % пересечение равно нулю и сумма действительно была бы 100 %; это другая модель."
      },
      {
        "q": "Что значит «независимые события»?",
        "a": "Что исход одного не влияет на другой: два броска монеты независимы, а вытягивание двух карт без возврата — уже нет, и формула для них другая."
      },
      {
        "q": "Как читать шансы?",
        "a": "Шансы «5 к 1» означают, что на один благоприятный исход приходится пять неблагоприятных. Это та же информация, что и вероятность, просто в другой записи."
      },
      {
        "q": "Может ли вероятность быть больше единицы?",
        "a": "Нет. Единица означает достоверное событие, и большего не бывает — поэтому благоприятных исходов не может быть больше общего числа."
      }
    ]
  },
  "en": {
    "longDescription": "Computes basic probability four ways: the share of favourable outcomes, the probability of the complement, and both the joint occurrence and the \"at least one\" case for two independent events. That last one is where intuition fails most often: \"at least one\" of two 50% events is not 100% but 75%, because these independent events overlap — the correct formula subtracts the overlap.",
    "howItWorks": "The probability of an event is favourable outcomes divided by all outcomes. The complement is 1 − p. Both independent events: p₁ · p₂. At least one: p₁ + p₂ − p₁ · p₂. Favourable outcomes divided by total outcomes applies only when all outcomes are equally likely. Probabilities do add for disjoint events because P(A∩B) = 0; disjointness is different from independence. Counts are integers from 0 to 9007199254740991, with a positive total. Fields belonging to other modes are ignored.",
    "howToUse": [
      "Choose what you are computing.",
      "Enter the outcomes or the event probabilities.",
      "Read the probability as a fraction, a percentage and odds."
    ],
    "example": "One favourable outcome out of six gives a probability of 0.1667, that is 16.667 %.",
    "faq": [
      {
        "q": "Why is \"at least one\" of two 50% events not 100%?",
        "a": "For two independent events, the overlap has probability 0.5×0.5 = 0.25. Adding 0.5+0.5 counts it twice, so P(A∪B) = 1−0.25 = 0.75. Two disjoint 50% events really would add to 100%, but they describe a different model."
      },
      {
        "q": "What does \"independent events\" mean?",
        "a": "That the outcome of one does not affect the other: two coin tosses are independent, whereas drawing two cards without replacement is not, and needs a different formula."
      },
      {
        "q": "How do I read the odds?",
        "a": "Odds of \"5 to 1\" mean five unfavourable outcomes for every favourable one. It is the same information as the probability, written differently."
      },
      {
        "q": "Can a probability exceed one?",
        "a": "No. One means a certain event and nothing exceeds it — which is why there cannot be more favourable outcomes than outcomes in total."
      }
    ]
  },
  "uk": {
    "longDescription": "Калькулятор рахує базову ймовірність чотирма способами: частка сприятливих результатів, імовірність протилежної події, а також спільне настання і настання хоча б однієї з двох незалежних подій. Останній випадок — той, де інтуїція помиляється найчастіше: ймовірність «хоча б однієї» з двох подій по 50 % дорівнює не 100 %, а 75 %.",
    "howItWorks": "Імовірність події — сприятливі результати, поділені на всі. Протилежна подія дорівнює 1 − p. Обидві незалежні: p₁ · p₂. Хоча б одна: p₁ + p₂ − p₁ · p₂ — останній доданок віднімає перетин, яке додавання порахувало б двічі. Відношення сприятливих результатів до загальної кількості застосовне лише для рівноймовірних результатів. Для несумісних подій імовірності справді додаються, бо P(A∩B) = 0; несумісність відрізняється від незалежності. Кількості — цілі від 0 до 9007199254740991, загальна кількість додатна. Поля невибраних режимів не беруть участі в розрахунку.",
    "howToUse": [
      "Виберіть, що рахуєте: одну подію, протилежну, обидві чи хоча б одну.",
      "Введіть результати або ймовірності подій.",
      "Прочитайте ймовірність у частках, відсотках і шансах."
    ],
    "example": "Один сприятливий результат із шести дає ймовірність 0,1667, тобто 16,667 %. Для двох подій по 0,5 «хоча б одна» дає 0,75, а не 1.",
    "faq": [
      {
        "q": "Чому «хоча б одна» з двох подій по 50 % — не 100 %?",
        "a": "Для двох незалежних подій перетин має ймовірність 0,5×0,5 = 0,25. У сумі 0,5+0,5 його враховано двічі, тому P(A∪B) = 1−0,25 = 0,75. Дві несумісні події по 50 % справді дали б у сумі 100 %, але це інша модель."
      },
      {
        "q": "Що означає «незалежні події»?",
        "a": "Що результат однієї не впливає на другу: два кидки монети незалежні, а витягування двох карт без повернення — уже ні, і формула для них інша."
      },
      {
        "q": "Як читати шанси?",
        "a": "Шанси «5 до 1» означають, що на один сприятливий результат припадає п’ять несприятливих. Це та сама інформація, що й імовірність, просто в іншому записі."
      },
      {
        "q": "Чи може ймовірність бути більшою за одиницю?",
        "a": "Ні. Одиниця означає достовірну подію, і більшого не буває — тому сприятливих результатів не може бути більше за загальну кількість."
      }
    ]
  },
  "de": {
    "longDescription": "Berechnet einfache Wahrscheinlichkeiten auf vier Wegen: den Anteil günstiger Ausgänge, die Wahrscheinlichkeit des Gegenereignisses sowie das gemeinsame Eintreten und den Fall „mindestens eines“ für zwei unabhängige Ereignisse. Beim letzten versagt die Anschauung am häufigsten: „mindestens eines“ zweier Ereignisse mit je 50 % sind nicht 100 %, sondern 75 %, denn diese unabhängigen Ereignisse überschneiden sich — die richtige Formel zieht die Überschneidung ab.",
    "howItWorks": "Die Wahrscheinlichkeit eines Ereignisses ist die Zahl der günstigen Ausgänge geteilt durch alle Ausgänge. Das Gegenereignis ist 1 − p. Beide unabhängigen Ereignisse: p₁ · p₂. Mindestens eines: p₁ + p₂ − p₁ · p₂. Der Anteil günstiger an allen Ergebnissen gilt nur bei gleich wahrscheinlichen Ergebnissen. Für disjunkte Ereignisse addieren sich die Wahrscheinlichkeiten tatsächlich, weil P(A∩B) = 0; das ist etwas anderes als Unabhängigkeit. Anzahlen sind ganze Zahlen von 0 bis 9007199254740991, die Gesamtzahl muss positiv sein. Felder anderer Modi werden nicht verwendet.",
    "howToUse": [
      "Wähle, was berechnet werden soll.",
      "Trage die Ausgänge oder die Wahrscheinlichkeiten der Ereignisse ein.",
      "Lies die Wahrscheinlichkeit als Bruch, als Prozentwert und als Chancen ab."
    ],
    "example": "Ein günstiger Ausgang von sechs ergibt eine Wahrscheinlichkeit von 0,1667, also 16,667 %.",
    "faq": [
      {
        "q": "Warum sind „mindestens eines“ zweier Ereignisse mit je 50 % nicht 100 %?",
        "a": "Bei zwei unabhängigen Ereignissen hat die Überschneidung die Wahrscheinlichkeit 0,5×0,5 = 0,25. In 0,5+0,5 wird sie doppelt gezählt, deshalb ist P(A∪B) = 1−0,25 = 0,75. Zwei disjunkte Ereignisse mit je 50 % würden tatsächlich 100 % ergeben, gehören aber zu einer anderen Modellannahme."
      },
      {
        "q": "Was bedeutet „unabhängige Ereignisse“?",
        "a": "Dass der Ausgang des einen den anderen nicht beeinflusst: zwei Münzwürfe sind unabhängig, während das Ziehen zweier Karten ohne Zurücklegen es nicht ist und eine andere Formel braucht."
      },
      {
        "q": "Wie lese ich die Chancen?",
        "a": "Chancen von „5 zu 1“ bedeuten fünf ungünstige Ausgänge auf einen günstigen. Es ist dieselbe Angabe wie die Wahrscheinlichkeit, nur anders geschrieben."
      },
      {
        "q": "Kann eine Wahrscheinlichkeit über eins liegen?",
        "a": "Nein. Eins bedeutet ein sicheres Ereignis, und nichts geht darüber hinaus — deshalb kann es auch nicht mehr günstige Ausgänge als Ausgänge insgesamt geben."
      }
    ]
  },
  "es": {
    "longDescription": "Calcula la probabilidad básica de cuatro maneras: la proporción de casos favorables, la probabilidad del complementario y, para dos sucesos independientes, tanto la ocurrencia conjunta como el caso «al menos uno». Este último es donde la intuición falla más a menudo: «al menos uno» de dos sucesos del 50 % no es el 100 %, sino el 75 %, porque estos sucesos independientes tienen una intersección; la fórmula correcta resta el solapamiento.",
    "howItWorks": "La probabilidad de un suceso son los casos favorables divididos entre todos los casos. El complementario es 1 − p. Ambos sucesos independientes: p₁ · p₂. Al menos uno: p₁ + p₂ − p₁ · p₂. El cociente entre resultados favorables y totales solo vale si todos los resultados son equiprobables. En sucesos incompatibles sí se suman las probabilidades, pues P(A∩B) = 0; incompatibilidad e independencia son condiciones distintas. Los recuentos son enteros entre 0 y 9007199254740991 y el total es positivo. Los campos de otros modos no intervienen.",
    "howToUse": [
      "Elige qué vas a calcular.",
      "Introduce los casos o las probabilidades de los sucesos.",
      "Consulta la probabilidad como fracción, como porcentaje y en forma de razón."
    ],
    "example": "Un caso favorable de seis da una probabilidad de 0,1667, es decir, un 16,667 %.",
    "faq": [
      {
        "q": "¿Por qué «al menos uno» de dos sucesos del 50 % no es el 100 %?",
        "a": "En dos sucesos independientes la intersección tiene probabilidad 0,5×0,5 = 0,25. Al sumar 0,5+0,5 se cuenta dos veces, así que P(A∪B) = 1−0,25 = 0,75. Dos sucesos incompatibles del 50 % sí sumarían el 100 %, pero corresponden a otro modelo."
      },
      {
        "q": "¿Qué significa «sucesos independientes»?",
        "a": "Que el resultado de uno no afecta al otro: dos lanzamientos de moneda son independientes, mientras que sacar dos cartas sin reposición no lo es y exige otra fórmula."
      },
      {
        "q": "¿Cómo se leen las probabilidades en contra?",
        "a": "Una razón de «5 a 1» significa cinco casos desfavorables por cada favorable. Es la misma información que la probabilidad, escrita de otro modo."
      },
      {
        "q": "¿Una probabilidad puede pasar de uno?",
        "a": "No. Uno significa un suceso seguro y nada lo supera, y por eso no puede haber más casos favorables que casos en total."
      }
    ]
  }
} satisfies Record<'ru' | 'en' | 'uk' | 'de' | 'es', Partial<CalculatorCopy>>;
