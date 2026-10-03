import type { CalculatorCopy } from '../../lib/platform/types';

// Individually reviewed existing native body, with scoped subject corrections.
export const mathWave8ContractContent = {
  "ru": {
    "longDescription": "Считает вероятность для серии независимых испытаний с одинаковым шансом успеха. Формула C(n,k)·pᵏ·(1−p)ⁿ⁻ᵏ состоит из трёх сомножителей, отвечающих за разное: сколько существует способов расставить успехи по испытаниям, насколько вероятны сами успехи и насколько вероятны оставшиеся неудачи. Помимо вероятности ровно k показаны накопленные вероятности «не более k» и «не менее k» — на практике чаще нужны именно они, а также математическое ожидание и стандартное отклонение серии.",
    "howItWorks": "Вероятность ровно k успехов равна C(n,k)·pᵏ·(1−p)ⁿ⁻ᵏ. Накопленные значения получаются суммированием по всем подходящим k. Ожидание равно n·p, а отклонение — корню из n·p·(1−p). Поддерживается 1–1000 испытаний; n и k — целые, 0 ≤ k ≤ n. Число сочетаний вычисляется точно целочисленной арифметикой, а вероятности выводятся с округлением. Очень малая ненулевая вероятность показывается в научной записи; если выбранный результат не представим, расчёт сообщает об ограничении диапазона.",
    "howToUse": [
      "Введите число испытаний в серии.",
      "Укажите число успехов, для которого считается вероятность.",
      "Задайте вероятность успеха в одном испытании — от 0 до 1.",
      "Выберите вероятность ровно k или накопленную вероятность."
    ],
    "example": "Ровно три орла в десяти бросках честной монеты выпадают с вероятностью 0,1172, то есть в 11,72 % серий.",
    "faq": [
      {
        "q": "Когда применима эта формула?",
        "a": "Когда испытания независимы, их число фиксировано, а вероятность успеха одинакова в каждом. Если испытания влияют друг на друга, схема не подходит."
      },
      {
        "q": "Чем «не более k» отличается от «ровно k»?",
        "a": "Накопленная вероятность суммирует все исходы до k включительно. На практике вопрос обычно звучит «не больше скольких», а не «ровно столько»."
      },
      {
        "q": "Почему число сочетаний не считается через факториалы?",
        "a": "Последовательное умножение и точное целочисленное деление дают C(n,k) без вычисления двух больших факториалов. Это относится к числу способов; вероятности всё равно рассчитываются приближённо. Утверждение, что 20! уже обязательно теряет точность, неверно: 20!, 21! и 22! представимы точно, а первое неточное значение этой последовательности — 23!."
      },
      {
        "q": "Что происходит при вероятности 0 или 1?",
        "a": "Исход становится определённым: при p = 1 все испытания успешны, при p = 0 — ни одного. Стандартное отклонение в обоих случаях равно нулю."
      },
      {
        "q": "Почему число успехов не может превышать число испытаний?",
        "a": "Потому что такого исхода не существует. Формально вероятность равна нулю, но обычно это опечатка, поэтому расчёт останавливается."
      }
    ]
  },
  "en": {
    "longDescription": "Computes probabilities for a run of independent trials with the same chance of success each time. The formula C(n,k)·pᵏ·(1−p)ⁿ⁻ᵏ has three factors doing different jobs: how many ways the successes can be arranged among the trials, how likely those successes are, and how likely the remaining failures are. Alongside the probability of exactly k it shows the cumulative «at most» and «at least» probabilities — in practice those are the ones usually wanted — plus the expected value and standard deviation of the run.",
    "howItWorks": "The probability of exactly k successes is C(n,k)·pᵏ·(1−p)ⁿ⁻ᵏ. Cumulative values come from summing over the relevant k. The expected value is n·p and the deviation the root of n·p·(1−p). The supported range is 1–1000 trials; n and k are integers with 0 ≤ k ≤ n. Combinations use exact integer arithmetic, while displayed probabilities are rounded. Small nonzero probabilities use scientific notation; an unrepresentable selected result produces a range error.",
    "howToUse": [
      "Enter the number of trials in the run.",
      "Enter the number of successes the probability is wanted for.",
      "Enter the probability of success in a single trial, from 0 to 1.",
      "Choose the probability of exactly k or a cumulative probability."
    ],
    "example": "Exactly three heads in ten tosses of a fair coin has probability 0.1172 — about 11.72% of runs.",
    "faq": [
      {
        "q": "When does this formula apply?",
        "a": "When trials are independent, their number is fixed and the chance of success is the same each time. If trials influence each other the model does not fit."
      },
      {
        "q": "How does «at most k» differ from «exactly k»?",
        "a": "The cumulative probability sums every outcome up to and including k. In practice the question is usually «no more than how many», not «exactly this many»."
      },
      {
        "q": "Why are combinations not computed from factorials?",
        "a": "Successive multiplication and exact integer division produce C(n,k) without evaluating two large factorials. This makes the count exact, not the displayed probability. The claim that 20! must already lose precision is incorrect: 20!, 21! and 22! are exactly representable; 23! is the first inexact factorial in binary64."
      },
      {
        "q": "What happens at a probability of 0 or 1?",
        "a": "The outcome becomes certain: at p = 1 every trial succeeds, at p = 0 none does. The standard deviation is zero in both cases."
      },
      {
        "q": "Why can successes not exceed trials?",
        "a": "Because no such outcome exists. Formally the probability is zero, but in practice it is a typo, so the calculation stops."
      }
    ]
  },
  "uk": {
    "longDescription": "Калькулятор рахує ймовірність для серії незалежних випробувань з однаковим шансом успіху. Формула C(n,k)·pᵏ·(1−p)ⁿ⁻ᵏ складається з трьох множників, що відповідають за різне: скільки існує способів розставити успіхи по випробуваннях, наскільки ймовірні самі успіхи й наскільки ймовірні решта невдач.",
    "howItWorks": "Імовірність рівно k успіхів дорівнює C(n,k)·pᵏ·(1−p)ⁿ⁻ᵏ. Накопичені значення виходять підсумовуванням за всіма відповідними k. Сподівання дорівнює n·p, а відхилення — кореню з n·p·(1−p). Підтримується 1–1000 випробувань; n і k — цілі, 0 ≤ k ≤ n. Кількість сполучень обчислюється точно цілою арифметикою, а ймовірності виводяться з округленням. Мала ненульова ймовірність показується в науковому записі; якщо вибраний результат не подається числом, розрахунок повідомляє про обмеження діапазону.",
    "howToUse": [
      "Введіть кількість випробувань у серії.",
      "Укажіть кількість успіхів, для якої рахується ймовірність.",
      "Задайте ймовірність успіху в одному випробуванні — від 0 до 1.",
      "Виберіть імовірність рівно k або накопичену ймовірність."
    ],
    "example": "Рівно три орли в десяти кидках чесної монети випадають з імовірністю 0,1172, тобто в 11,72 % серій. Сподівана кількість орлів при цьому дорівнює п’яти.",
    "faq": [
      {
        "q": "Коли застосовна ця формула?",
        "a": "Коли випробування незалежні, їхня кількість фіксована, а ймовірність успіху однакова в кожному. Якщо випробування впливають одне на одне, схема не підходить."
      },
      {
        "q": "Чим «не більше k» відрізняється від «рівно k»?",
        "a": "Накопичена ймовірність підсумовує всі результати до k включно. На практиці питання зазвичай звучить «не більше скількох», а не «рівно стільки»."
      },
      {
        "q": "Чому кількість сполучень не рахується через факторіали?",
        "a": "Послідовне множення й точне ціле ділення дають C(n,k) без обчислення двох великих факторіалів. Точною є кількість способів, а не показана ймовірність. Твердження, що 20! уже обов’язково втрачає точність, неправильне: 20!, 21! і 22! подаються точно, а перше неточне значення цієї послідовності — 23!."
      },
      {
        "q": "Що відбувається за ймовірності 0 або 1?",
        "a": "Результат стає визначеним: за p = 1 усі випробування успішні, за p = 0 — жодне. Стандартне відхилення в обох випадках дорівнює нулю."
      },
      {
        "q": "Чому кількість успіхів не може перевищувати кількість випробувань?",
        "a": "Бо такого результату не існує. Формально ймовірність дорівнює нулю, але зазвичай це помилка вводу, тому розрахунок зупиняється."
      }
    ]
  },
  "de": {
    "longDescription": "Berechnet Wahrscheinlichkeiten für eine Reihe unabhängiger Versuche mit jedes Mal derselben Erfolgschance. Die Formel C(n,k)·pᵏ·(1−p)ⁿ⁻ᵏ hat drei Faktoren mit verschiedenen Aufgaben: auf wie viele Weisen sich die Erfolge über die Versuche verteilen lassen, wie wahrscheinlich diese Erfolge sind und wie wahrscheinlich die übrigen Misserfolge sind. Neben dem genauen Wert stehen die kumulierten Wahrscheinlichkeiten für „höchstens“ und „mindestens“ — in der Praxis sind meist sie gefragt — sowie Erwartungswert und Standardabweichung der Reihe.",
    "howItWorks": "Die Wahrscheinlichkeit für genau k Erfolge ist C(n,k)·pᵏ·(1−p)ⁿ⁻ᵏ. Kumulierte Werte entstehen durch Summieren über die betreffenden k. Der Erwartungswert ist n·p und die Abweichung die Wurzel aus n·p·(1−p). Unterstützt werden 1–1000 Versuche; n und k sind ganzzahlig mit 0 ≤ k ≤ n. Kombinationen werden mit exakter Ganzzahlarithmetik berechnet, angezeigte Wahrscheinlichkeiten gerundet. Kleine Werte ungleich null erscheinen in wissenschaftlicher Schreibweise; ein nicht darstellbares gewähltes Ergebnis führt zu einer Bereichsfehlermeldung.",
    "howToUse": [
      "Trage die Zahl der Versuche in der Reihe ein.",
      "Trage die Zahl der Erfolge ein, für die die Wahrscheinlichkeit gesucht ist.",
      "Trage die Erfolgswahrscheinlichkeit eines einzelnen Versuchs ein, von 0 bis 1.",
      "Wähle die Wahrscheinlichkeit für genau k oder eine kumulierte Wahrscheinlichkeit."
    ],
    "example": "Genau dreimal Kopf bei zehn Würfen einer fairen Münze hat die Wahrscheinlichkeit 0,1172 — rund 11,72 % der Versuchsreihen.",
    "faq": [
      {
        "q": "Wann gilt diese Formel?",
        "a": "Wenn die Versuche unabhängig sind, ihre Zahl feststeht und die Erfolgschance jedes Mal dieselbe ist. Beeinflussen sich die Versuche gegenseitig, passt das Modell nicht."
      },
      {
        "q": "Wie unterscheidet sich „höchstens k“ von „genau k“?",
        "a": "Die kumulierte Wahrscheinlichkeit summiert jeden Ausgang bis einschließlich k. In der Praxis lautet die Frage meist „nicht mehr als wie viele“ und nicht „genau so viele“."
      },
      {
        "q": "Warum werden die Kombinationen nicht über Fakultäten berechnet?",
        "a": "Durch aufeinanderfolgende Multiplikation und exakte Ganzzahldivision entsteht C(n,k), ohne zwei große Fakultäten auszurechnen. Exakt ist die Anzahl, nicht die angezeigte Wahrscheinlichkeit. 20!, 21! und 22! sind in binary64 noch exakt darstellbar; 23! ist die erste nicht exakt darstellbare Fakultät."
      },
      {
        "q": "Was passiert bei einer Wahrscheinlichkeit von 0 oder 1?",
        "a": "Der Ausgang wird sicher: bei p = 1 gelingt jeder Versuch, bei p = 0 keiner. Die Standardabweichung ist in beiden Fällen null."
      },
      {
        "q": "Warum dürfen die Erfolge die Versuche nicht übersteigen?",
        "a": "Weil es einen solchen Ausgang nicht gibt. Formal ist die Wahrscheinlichkeit null, in der Praxis ist es ein Tippfehler, deshalb hält die Rechnung an."
      }
    ]
  },
  "es": {
    "longDescription": "Calcula probabilidades para una serie de pruebas independientes con la misma probabilidad de éxito en cada una. La fórmula C(n,k)·pᵏ·(1−p)ⁿ⁻ᵏ tiene tres factores que hacen cosas distintas: de cuántas maneras pueden repartirse los éxitos entre las pruebas, qué probables son esos éxitos y qué probables son los fracasos restantes. Junto a la cifra exacta muestra las probabilidades acumuladas «como máximo» y «al menos» —en la práctica suelen ser las que interesan— además de la esperanza y la desviación típica de la serie.",
    "howItWorks": "La probabilidad de exactamente k éxitos es C(n,k)·pᵏ·(1−p)ⁿ⁻ᵏ. Los valores acumulados salen de sumar sobre los k pertinentes. La esperanza es n·p y la desviación, la raíz de n·p·(1−p). Se admiten 1–1000 ensayos; n y k son enteros con 0 ≤ k ≤ n. Las combinaciones se calculan con aritmética entera exacta y las probabilidades se muestran redondeadas. Las probabilidades pequeñas distintas de cero usan notación científica; si el resultado elegido no es representable, se indica un error de intervalo numérico.",
    "howToUse": [
      "Introduce el número de pruebas de la serie.",
      "Introduce el número de éxitos cuya probabilidad quieres.",
      "Introduce la probabilidad de éxito en una sola prueba, de 0 a 1.",
      "Elige la probabilidad de exactamente k o una probabilidad acumulada."
    ],
    "example": "Exactamente tres caras en diez lanzamientos de una moneda equilibrada tienen probabilidad 0,1172: alrededor del 11,72 % de las series.",
    "faq": [
      {
        "q": "¿Cuándo se aplica esta fórmula?",
        "a": "Cuando las pruebas son independientes, su número es fijo y la probabilidad de éxito es la misma cada vez. Si las pruebas se influyen entre sí, el modelo no encaja."
      },
      {
        "q": "¿En qué se diferencian «como máximo k» y «exactamente k»?",
        "a": "La probabilidad acumulada suma todos los resultados hasta k incluido. En la práctica la pregunta suele ser «no más de cuántos», no «exactamente estos»."
      },
      {
        "q": "¿Por qué las combinaciones no se calculan con factoriales?",
        "a": "La multiplicación sucesiva y la división entera exacta obtienen C(n,k) sin calcular dos factoriales grandes. Lo exacto es el recuento, no la probabilidad mostrada. 20!, 21! y 22! todavía son representables exactamente en binary64; 23! es el primer factorial que no lo es."
      },
      {
        "q": "¿Qué ocurre con una probabilidad de 0 o de 1?",
        "a": "El resultado se vuelve seguro: con p = 1 todas las pruebas salen bien y con p = 0, ninguna. La desviación típica es cero en ambos casos."
      },
      {
        "q": "¿Por qué los éxitos no pueden superar a las pruebas?",
        "a": "Porque ese resultado no existe. Formalmente la probabilidad es cero, pero en la práctica es una errata, así que el cálculo se detiene."
      }
    ]
  }
} satisfies Record<'ru' | 'en' | 'uk' | 'de' | 'es', Partial<CalculatorCopy>>;
