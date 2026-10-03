import type { CalculatorCopy } from '../../lib/platform/types';

// Individually reviewed existing native body, with scoped subject corrections.
export const mathWave8ContractContent = {
  "ru": {
    "longDescription": "Переводит отдельное значение в стандартные отклонения от среднего, чтобы результаты из разных шкал стали сравнимыми: балл 80 при среднем 75 и разбросе 8 — это те же 0,625 сигмы, что и рост 178 при среднем 172 и разбросе 9,6. Знак сохраняется: отрицательная оценка означает, что значение ниже среднего, и это не ошибка ввода.",
    "howItWorks": "z = (x − μ) / σ. Числитель — обычное отклонение от среднего, знаменатель переводит его в единицы разброса, поэтому z не зависит от исходной шкалы измерения. x, μ и σ вводятся в одной единице и одной шкале; σ положительно. Тогда z безразмерно, а отклонение x−μ имеет исходную единицу. Сам расчёт не требует нормального распределения и не вычисляет p-значение или вероятность хвоста. Интерпретация через проценты нормального распределения требует отдельного предположения о данных. Ненулевой результат, слишком малый для числового представления, вызывает ошибку диапазона вместо ложного нуля.",
    "howToUse": [
      "Введите значение, которое хотите оценить.",
      "Укажите среднее и стандартное отклонение выборки.",
      "Прочитайте, на сколько сигм значение отстоит от среднего."
    ],
    "example": "Значение 85 при среднем 70 и отклонении 10 даёт z = 1,5: оно на полтора стандартных отклонения выше среднего.",
    "faq": [
      {
        "q": "Что означает отрицательная Z-оценка?",
        "a": "Что значение ниже среднего. Знак — часть ответа, а не ошибка: −1,5 и +1,5 одинаково далеки от среднего, но в разные стороны."
      },
      {
        "q": "Почему нулевое стандартное отклонение не принимается?",
        "a": "Нулевой разброс означает, что все значения одинаковы. Делить на него нечего, а «бесконечно далеко от среднего» — это не число."
      },
      {
        "q": "Какая Z-оценка считается большой?",
        "a": "Для примерно нормальных данных около 68 % значений лежат в пределах ±1, около 95 % — в пределах ±2. Поэтому |z| больше 2 обычно уже выделяется на общем фоне."
      },
      {
        "q": "Где взять среднее и отклонение?",
        "a": "Их можно посчитать по самому списку значений — в калькуляторе среднего и статистики они выводятся вместе."
      }
    ]
  },
  "en": {
    "longDescription": "Converts a single value into standard deviations from the mean so that results measured on different scales become comparable: a score of 80 against a mean of 75 with a spread of 8 is the same 0.625 sigma as a height of 178 against a mean of 172 with a spread of 9.6. The sign is kept — a negative score means the value sits below the mean, and that is an answer, not an input error.",
    "howItWorks": "z = (x − μ) / σ. The numerator is the ordinary deviation from the mean; the denominator rescales it into units of spread, which is why the z-score does not depend on the original measurement scale. x, μ and σ use the same unit and scale, and σ is positive. Thus z is dimensionless while x−μ retains the original unit. The calculation itself does not require normality and does not produce a p-value or tail probability. Interpreting normal-distribution percentages requires a separate assumption about the data. A nonzero result too small to represent causes a range error instead of a false zero.",
    "howToUse": [
      "Enter the value you want to place.",
      "Give the mean and the standard deviation of the set.",
      "Read how many sigmas away it falls."
    ],
    "example": "A value of 85 with a mean of 70 and a deviation of 10 gives z = 1.5: one and a half standard deviations above the mean.",
    "faq": [
      {
        "q": "What does a negative z-score mean?",
        "a": "That the value is below the mean. The sign is part of the answer: −1.5 and +1.5 are equally far from the mean, just in opposite directions."
      },
      {
        "q": "Why is a standard deviation of zero rejected?",
        "a": "Zero spread means every value is identical. There is nothing to divide by, and \"infinitely far from the mean\" is not a number."
      },
      {
        "q": "Which z-scores count as large?",
        "a": "For roughly normal data about 68 % of values fall within ±1 and about 95 % within ±2, so a magnitude above 2 already stands out from the rest."
      },
      {
        "q": "Where do the mean and deviation come from?",
        "a": "They can be computed from the list of values itself — the mean and statistics calculator reports both together."
      }
    ]
  },
  "uk": {
    "longDescription": "Z-оцінка переводить окреме значення у стандартні відхилення від середнього, щоб результати з різних шкал стали порівнянними: бал 80 за середнього 75 і розкиду 8 — це ті самі 0,625 сигми, що й зріст 178 за середнього 172 і розкиду 9,6. Знак зберігається: від’ємна оцінка означає, що значення нижче за середнє, і це не помилка вводу.",
    "howItWorks": "Оцінка рахується як z = (x − μ) / σ. Чисельник — звичайне відхилення від середнього, знаменник переводить його в одиниці розкиду, тому z не залежить від вихідної шкали вимірювання. x, μ та σ задаються в одній одиниці й шкалі; σ додатне. Тоді z безрозмірне, а відхилення x−μ зберігає початкову одиницю. Сам розрахунок не потребує нормального розподілу й не рахує p-значення чи ймовірність хвоста. Тлумачення через відсотки нормального розподілу потребує окремого припущення щодо даних. Ненульовий результат, замалий для числового подання, викликає помилку діапазону замість хибного нуля.",
    "howToUse": [
      "Введіть значення, яке хочете оцінити.",
      "Укажіть середнє вибірки.",
      "Укажіть стандартне відхилення й прочитайте, на скільки сигм значення відстоїть від середнього."
    ],
    "example": "Значення 85 за середнього 70 і відхилення 10 дає z = 1,5: воно на півтора стандартних відхилення вище за середнє. Значення 55 дало б z = −1,5 — рівно настільки ж нижче.",
    "faq": [
      {
        "q": "Що означає z = 1,5?",
        "a": "Що значення лежить на півтора стандартних відхилення вище за середнє. За нормального розподілу нижче за таке значення опиняється близько 93 % спостережень."
      },
      {
        "q": "Чому від’ємна оцінка — не помилка?",
        "a": "Бо знак показує бік: від’ємна z означає значення нижче за середнє. Модуль оцінки говорить про віддаленість, знак — про напрямок."
      },
      {
        "q": "Навіщо стандартизувати значення?",
        "a": "Щоб порівнювати величини з різних шкал. Бал за тестом і зріст у сантиметрах напряму не порівняти, а їхні z-оцінки — цілком."
      },
      {
        "q": "Чи потрібен нормальний розподіл?",
        "a": "Для самої арифметики — ні: потрібні скінченні x і μ та додатне скінченне σ в узгодженій одиниці. Але відсотки спостережень із таблиці нормального розподілу застосовні лише за відповідного припущення про розподіл, а не до будь-якого набору з тією самою z-оцінкою."
      }
    ]
  },
  "de": {
    "longDescription": "Rechnet einen einzelnen Wert in Standardabweichungen vom Mittelwert um, damit sich auf verschiedenen Skalen gemessene Ergebnisse vergleichen lassen: eine Punktzahl von 80 gegen einen Mittelwert von 75 bei einer Streuung von 8 sind dieselben 0,625 Sigma wie eine Größe von 178 gegen einen Mittelwert von 172 bei einer Streuung von 9,6. Das Vorzeichen bleibt erhalten — ein negativer Wert bedeutet, dass er unter dem Mittelwert liegt, und das ist eine Antwort und kein Eingabefehler.",
    "howItWorks": "z = (x − μ) / σ. Der Zähler ist die gewöhnliche Abweichung vom Mittelwert; der Nenner rechnet sie in Einheiten der Streuung um, weshalb der z-Wert nicht von der ursprünglichen Messskala abhängt. x, μ und σ werden in derselben Einheit und Skala angegeben; σ ist positiv. z ist dann dimensionslos, während x−μ die Ausgangseinheit behält. Die Rechnung setzt keine Normalverteilung voraus und liefert weder p-Wert noch Randwahrscheinlichkeit. Prozentangaben einer Normalverteilung benötigen eine zusätzliche Annahme über die Daten. Ein nicht darstellbarer Wert ungleich null führt zu einer Bereichsfehlermeldung statt zu einer falschen Null.",
    "howToUse": [
      "Trage den Wert ein, den du einordnen willst.",
      "Gib Mittelwert und Standardabweichung der Menge an.",
      "Lies ab, wie viele Sigma er entfernt liegt."
    ],
    "example": "Ein Wert von 85 bei einem Mittelwert von 70 und einer Abweichung von 10 ergibt z = 1,5: anderthalb Standardabweichungen über dem Mittelwert.",
    "faq": [
      {
        "q": "Was bedeutet ein negativer z-Wert?",
        "a": "Dass der Wert unter dem Mittelwert liegt. Das Vorzeichen gehört zur Antwort: −1,5 und +1,5 sind gleich weit vom Mittelwert entfernt, nur in entgegengesetzte Richtungen."
      },
      {
        "q": "Warum wird eine Standardabweichung von null abgewiesen?",
        "a": "Streuung null heißt, dass alle Werte gleich sind. Es gibt nichts, wodurch geteilt werden könnte, und „unendlich weit vom Mittelwert“ ist keine Zahl."
      },
      {
        "q": "Welche z-Werte gelten als groß?",
        "a": "Bei annähernd normalverteilten Daten liegen rund 68 % der Werte innerhalb von ±1 und rund 95 % innerhalb von ±2, ein Betrag über 2 sticht also bereits aus dem Rest heraus."
      },
      {
        "q": "Woher kommen Mittelwert und Abweichung?",
        "a": "Sie lassen sich aus der Werteliste selbst berechnen — der Rechner für Mittelwert und Kennzahlen nennt beide zusammen."
      }
    ]
  },
  "es": {
    "longDescription": "Convierte un valor suelto en desviaciones típicas respecto a la media, de modo que resultados medidos en escalas distintas se vuelven comparables: una puntuación de 80 frente a una media de 75 con una dispersión de 8 son las mismas 0,625 sigmas que una estatura de 178 frente a una media de 172 con una dispersión de 9,6. El signo se conserva: una puntuación negativa significa que el valor queda por debajo de la media, y eso es una respuesta, no un error de entrada.",
    "howItWorks": "z = (x − μ) / σ. El numerador es la desviación corriente respecto a la media; el denominador la reescala en unidades de dispersión, y por eso la puntuación z no depende de la escala de medida original. x, μ y σ usan la misma unidad y escala, con σ positiva. Por ello z no tiene dimensión y x−μ conserva la unidad original. El cálculo no exige normalidad y no produce un valor p ni una probabilidad de cola. Interpretar porcentajes de la distribución normal necesita una hipótesis adicional sobre los datos. Un resultado distinto de cero demasiado pequeño para representarlo causa un error de intervalo en vez de un cero falso.",
    "howToUse": [
      "Introduce el valor que quieres situar.",
      "Indica la media y la desviación típica del conjunto.",
      "Consulta a cuántas sigmas queda."
    ],
    "example": "Un valor de 85 con una media de 70 y una desviación de 10 da z = 1,5: una desviación y media por encima de la media.",
    "faq": [
      {
        "q": "¿Qué significa una puntuación z negativa?",
        "a": "Que el valor queda por debajo de la media. El signo forma parte de la respuesta: −1,5 y +1,5 están igual de lejos de la media, solo que en sentidos opuestos."
      },
      {
        "q": "¿Por qué se rechaza una desviación típica de cero?",
        "a": "Una dispersión nula significa que todos los valores son idénticos. No hay entre qué dividir, y «infinitamente lejos de la media» no es un número."
      },
      {
        "q": "¿Qué puntuaciones z se consideran grandes?",
        "a": "En datos aproximadamente normales alrededor del 68 % de los valores cae dentro de ±1 y cerca del 95 % dentro de ±2, así que un valor absoluto por encima de 2 ya destaca sobre el resto."
      },
      {
        "q": "¿De dónde salen la media y la desviación?",
        "a": "Pueden calcularse a partir de la propia lista de valores: la calculadora de media y estadística ofrece ambas juntas."
      }
    ]
  }
} satisfies Record<'ru' | 'en' | 'uk' | 'de' | 'es', Partial<CalculatorCopy>>;
