import type { CalculatorCopy } from '../../lib/platform/types';

// Individually reviewed existing native body, with scoped subject corrections.
export const mathWave8ContractContent = {
  "ru": {
    "longDescription": "Квартили описывают положение 25-го, 50-го и 75-го процентилей упорядоченного набора. Межквартильный размах IQR = Q3−Q1 характеризует центральную часть и дополняет стандартное отклонение, а не всегда превосходит его. При повторяющихся значениях между Q1 и Q3 может находиться больше половины наблюдений. Определений квартилей несколько: здесь используется линейная интерполяция type 7 с позицией (n−1)·p. Показаны также теоретические границы Q1−1,5·IQR и Q3+1,5·IQR для поиска необычных значений.",
    "howItWorks": "Позиция перцентиля (n−1)·p с линейной интерполяцией между соседями, как PERCENTILE.INC; усы Q1 − 1,5·IQR и Q3 + 1,5·IQR. «Границы усов» в результате обозначают именно эти расчётные пороги. На обычном ящике с усами сами концы усов — крайние наблюдения внутри порогов, поэтому они могут отличаться. Значение строго за порогом помечается как выброс для проверки, а не как доказанная ошибка. Принимается 4–10000 конечных чисел и не более 1000000 символов. Минимум четыре — ограничение данного инструмента; квартили математически определимы и для меньшего набора.",
    "howToUse": [
      "Числа разделяются пробелами, переводами строки или точкой с запятой; запятая перед пробелом тоже считается разделителем.",
      "Дробные значения пишутся через запятую: 2,5 — это два с половиной, а не два значения.",
      "Нужно не меньше четырёх значений: на трёх числах квартили теряют смысл.",
      "Выбросом считается значение за границами Q1 − 1,5·IQR и Q3 + 1,5·IQR — та самая договорённость ящика с усами."
    ],
    "example": "Для выборки 2 4 4 5 7 9 11 12 первый квартиль равен 4, медиана 6, третий квартиль 9,5.",
    "faq": [
      {
        "q": "Почему в разных программах квартили разные?",
        "a": "Потому что определений несколько: одни исключают медиану при делении выборки пополам, другие нет, третьи интерполируют иначе. Здесь взята линейная интерполяция по позиции (n−1)·p — то же, что делает PERCENTILE.INC и NumPy по умолчанию."
      },
      {
        "q": "Чем межквартильный размах лучше обычного?",
        "a": "Он меньше зависит от крайних наблюдений, потому что использует центральные квартили. Это не делает его лучшей мерой для любой задачи: обычный размах показывает крайние значения, стандартное отклонение — квадратический разброс. Влияние одного изменённого числа на квартили зависит от размера и порядка набора."
      },
      {
        "q": "Почему выбросом считается именно полтора размаха?",
        "a": "Это правило для поиска необычных значений, а не универсальный тест ошибки. Для теоретической нормальной совокупности её собственные квартили дают за такими порогами меньше 1 % вероятности. Для порогов, оценённых по маленькому набору, доля отмеченных наблюдений не обязана быть такой же."
      },
      {
        "q": "Что если все числа одинаковые?",
        "a": "Тогда квартили совпадают, межквартильный размах равен нулю, а усы схлопываются в точку. Выбросов при этом нет: ни одно значение не выходит за границы."
      }
    ]
  },
  "en": {
    "longDescription": "Quartiles locate the 25th, 50th and 75th percentiles of an ordered data set. The interquartile range IQR = Q3−Q1 describes its central portion and complements standard deviation rather than being universally better. With ties, more than half the observations may lie between Q1 and Q3. Several definitions exist; this page uses type 7 linear interpolation at position (n−1)·p. It also reports the theoretical fences Q1−1.5·IQR and Q3+1.5·IQR for flagging unusual values.",
    "howItWorks": "Percentile position (n−1)·p with linear interpolation between neighbours, as in PERCENTILE.INC; whiskers at Q1 − 1.5·IQR and Q3 + 1.5·IQR. The result label “whisker bounds” refers to these calculated fences. Actual box-plot whiskers normally end at the most extreme observations inside them and may therefore differ. A value strictly beyond a fence is flagged for review, not proved erroneous. This tool accepts 4–10000 finite numbers and at most 1000000 characters. Four is its product minimum; quartiles can be mathematically defined for smaller sets.",
    "howToUse": [
      "Separate numbers with spaces, new lines or semicolons; a comma before a space also counts as a separator.",
      "Write decimals with a comma: 2,5 is two and a half, not two values.",
      "At least four values are needed: quartiles lose their meaning on three numbers.",
      "A value beyond Q1 − 1.5·IQR or Q3 + 1.5·IQR counts as an outlier — the usual box-plot convention."
    ],
    "example": "For the sample 2 4 4 5 7 9 11 12 the first quartile is 4, the median 6 and the third quartile 9.5.",
    "faq": [
      {
        "q": "Why do different tools give different quartiles?",
        "a": "Because several definitions exist: some exclude the median when splitting the sample, others include it, others interpolate differently. This page uses linear interpolation by position (n−1)·p — the same as PERCENTILE.INC and NumPy by default."
      },
      {
        "q": "Why is the interquartile range better than the plain range?",
        "a": "It depends less on extreme observations because it uses the central quartiles. It is not the best measure for every task: the range describes extremes, while standard deviation describes squared deviations. How one changed value affects quartiles depends on the data size and ordering."
      },
      {
        "q": "Why one and a half ranges for an outlier?",
        "a": "This is a rule for flagging unusual values, not a universal error test. For a theoretical normal population, its own quartiles place less than 1% probability beyond these fences. Fences estimated from a small data set need not flag the same proportion of observations."
      },
      {
        "q": "What if every number is the same?",
        "a": "Then the quartiles coincide, the interquartile range is zero and the whiskers collapse to a point. There are no outliers: no value falls outside the bounds."
      }
    ]
  },
  "uk": {
    "longDescription": "Квартилі задають положення 25-го, 50-го й 75-го процентилів упорядкованого набору. Міжквартильний розмах IQR = Q3−Q1 характеризує центральну частину й доповнює стандартне відхилення, а не завжди перевершує його. За повторюваних значень між Q1 та Q3 може міститися більше половини спостережень. Існує кілька визначень: тут застосовано лінійну інтерполяцію type 7 за позицією (n−1)·p. Також показано теоретичні межі Q1−1,5·IQR і Q3+1,5·IQR для пошуку незвичайних значень.",
    "howItWorks": "Позиція перцентиля рахується як (n−1)·p з лінійною інтерполяцією між сусідами — так само, як PERCENTILE.INC. Міжквартильний розмах IQR дорівнює Q3 − Q1, а вуса ящика лежать на Q1 − 1,5·IQR і Q3 + 1,5·IQR. Підпис «Межі вусів» означає саме ці розраховані пороги. На звичайному ящику з вусами кінці вусів — крайні спостереження всередині порогів, тому можуть відрізнятися. Значення строго за порогом позначається для перевірки, а не як доведена помилка. Приймається 4–10000 скінченних чисел та не більше 1000000 символів. Мінімум чотири — межа цього інструмента; математично квартилі визначаються й для меншого набору.",
    "howToUse": [
      "Числа розділяються пробілами, переносами рядка або крапкою з комою.",
      "Дробові значення пишіть через кому: 2,5 — це два з половиною, а не два значення.",
      "Потрібно не менше чотирьох значень: на трьох числах квартилі втрачають сенс.",
      "Викидом вважається значення за межами Q1 − 1,5·IQR і Q3 + 1,5·IQR."
    ],
    "example": "Для вибірки 2 4 4 5 7 9 11 12 перший квартиль дорівнює 4, медіана 6, третій квартиль 9,5. Міжквартильний розмах тут 5,5, і викидів немає.",
    "faq": [
      {
        "q": "Чому різні програми дають різні квартилі?",
        "a": "Бо визначень щонайменше дев’ять, і вони по-різному інтерполюють між сусідніми значеннями. Тут узято лінійну інтерполяцію за позицією — те саме, що PERCENTILE.INC. Розбіжність із іншим правилом не є помилкою."
      },
      {
        "q": "Що таке міжквартильний розмах?",
        "a": "Це Q3−Q1, ширина проміжку між 25-м та 75-м процентилями. Вона описує центральну частину й зазвичай менш чутлива до крайніх спостережень, але не замінює всі інші міри розкиду. Вплив одного зміненого числа залежить від розміру та порядку набору."
      },
      {
        "q": "Звідки беруться вуса ящика?",
        "a": "Спочатку рахуються пороги Q1−1,5·IQR та Q3+1,5·IQR. Справжні вуса на типовому ящику доходять до крайніх спостережень усередині цих порогів, а не обов’язково до самих порогів. Калькулятор показує пороги й кількість значень строго за ними; це позначки для перевірки."
      },
      {
        "q": "Чому потрібно щонайменше чотири значення?",
        "a": "Це обмеження цього калькулятора, а не умова математичного існування квартилів. Наприклад, type 7 для 1, 2, 3 дає Q1 = 1,5, Q2 = 2 і Q3 = 2,5. Інструмент починає розрахунок від чотирьох значень та приймає максимум 10000."
      }
    ]
  },
  "de": {
    "longDescription": "Quartile bestimmen die Positionen des 25., 50. und 75. Perzentils geordneter Daten. Der Interquartilsabstand IQR = Q3−Q1 beschreibt den zentralen Teil und ergänzt die Standardabweichung, statt ihr grundsätzlich überlegen zu sein. Bei gleichen Werten können mehr als die Hälfte der Beobachtungen zwischen Q1 und Q3 liegen. Hier wird die lineare Interpolation vom Typ 7 an der Position (n−1)·p verwendet. Zusätzlich erscheinen die theoretischen Grenzen Q1−1,5·IQR und Q3+1,5·IQR zum Markieren ungewöhnlicher Werte.",
    "howItWorks": "Perzentilstelle (n−1)·p mit linearer Interpolation zwischen den Nachbarn, wie bei QUARTILE.INKL; Whisker bei Q1 − 1,5·IQA und Q3 + 1,5·IQA. Die Ergebniszeile „Whisker-Grenzen“ bezeichnet diese berechneten Schwellen. Tatsächliche Boxplot-Whisker enden normalerweise an den äußersten Beobachtungen innerhalb der Schwellen und können davon abweichen. Werte strikt außerhalb werden zur Prüfung markiert, nicht als nachgewiesene Fehler. Zulässig sind 4–10000 endliche Zahlen und höchstens 1000000 Zeichen. Vier ist die Produktuntergrenze; Quartile lassen sich mathematisch auch für kleinere Mengen definieren.",
    "howToUse": [
      "Trenne die Zahlen mit Leerzeichen, Zeilenumbrüchen oder Semikola; ein Komma vor einem Leerzeichen zählt ebenfalls als Trenner.",
      "Schreibe Dezimalzahlen mit Komma: 2,5 ist zweieinhalb und nicht zwei Werte.",
      "Es werden mindestens vier Werte gebraucht: bei drei Zahlen verlieren Quartile ihren Sinn.",
      "Ein Wert jenseits von Q1 − 1,5·IQA oder Q3 + 1,5·IQA gilt als Ausreißer — die übliche Boxplot-Übereinkunft."
    ],
    "example": "Für die Stichprobe 2 4 4 5 7 9 11 12 ist das erste Quartil 4, der Median 6 und das dritte Quartil 9,5.",
    "faq": [
      {
        "q": "Warum liefern verschiedene Werkzeuge verschiedene Quartile?",
        "a": "Weil es mehrere Festlegungen gibt: manche schließen den Median beim Teilen der Stichprobe aus, andere schließen ihn ein, wieder andere interpolieren anders. Diese Seite nutzt die lineare Interpolation nach Stellung (n−1)·p — dieselbe wie QUARTILE.INKL und NumPy in der Voreinstellung."
      },
      {
        "q": "Warum ist der Interquartilsabstand besser als die schlichte Spannweite?",
        "a": "Er hängt weniger von extremen Beobachtungen ab, weil er zentrale Quartile verwendet. Er ist aber nicht für jede Aufgabe die beste Streuungsmaßzahl: Die Spannweite beschreibt Extreme, die Standardabweichung quadratische Abweichungen. Der Einfluss eines geänderten Werts hängt von Umfang und Ordnung der Daten ab."
      },
      {
        "q": "Warum anderthalb Abstände für einen Ausreißer?",
        "a": "Das ist eine Regel zum Markieren ungewöhnlicher Werte, kein universeller Fehlertest. Die eigenen Quartile einer theoretischen Normalpopulation lassen weniger als 1 % Wahrscheinlichkeit außerhalb dieser Grenzen. Aus wenigen Daten geschätzte Grenzen müssen nicht denselben Beobachtungsanteil markieren."
      },
      {
        "q": "Was, wenn alle Zahlen gleich sind?",
        "a": "Dann fallen die Quartile zusammen, der Interquartilsabstand ist null, und die Whisker schrumpfen auf einen Punkt. Ausreißer gibt es keine: kein Wert fällt aus den Grenzen."
      }
    ]
  },
  "es": {
    "longDescription": "Los cuartiles sitúan los percentiles 25, 50 y 75 de los datos ordenados. El rango intercuartílico IQR = Q3−Q1 describe la parte central y complementa la desviación estándar, sin ser siempre superior. Con valores repetidos puede haber más de la mitad de las observaciones entre Q1 y Q3. Aquí se usa la interpolación lineal de tipo 7 en la posición (n−1)·p. También se muestran los límites teóricos Q1−1,5·IQR y Q3+1,5·IQR para señalar valores inusuales.",
    "howItWorks": "Posición del percentil (n−1)·p con interpolación lineal entre vecinos, como en PERCENTIL.INC; bigotes en Q1 − 1,5·RIC y Q3 + 1,5·RIC. La fila de límites de los bigotes se refiere a esos umbrales calculados. En un diagrama de caja, los bigotes suelen terminar en las observaciones más extremas dentro de ellos y pueden ser distintos. Un valor estrictamente fuera se señala para revisarlo, no como error demostrado. Se admiten 4–10000 números finitos y hasta 1000000 caracteres. Cuatro es el mínimo del producto; los cuartiles también pueden definirse matemáticamente para conjuntos menores.",
    "howToUse": [
      "Separa los números con espacios, saltos de línea o punto y coma; una coma seguida de espacio también cuenta como separador.",
      "Escribe los decimales con coma: 2,5 son dos y medio, no dos valores.",
      "Hacen falta al menos cuatro valores: con tres números los cuartiles pierden sentido.",
      "Un valor más allá de Q1 − 1,5·RIC o Q3 + 1,5·RIC cuenta como atípico, según el convenio habitual del diagrama de caja."
    ],
    "example": "Para la muestra 2 4 4 5 7 9 11 12 el primer cuartil es 4, la mediana 6 y el tercer cuartil 9,5.",
    "faq": [
      {
        "q": "¿Por qué distintas herramientas dan cuartiles distintos?",
        "a": "Porque existen varias definiciones: unas excluyen la mediana al partir la muestra, otras la incluyen y otras interpolan de otro modo. Esta página usa la interpolación lineal por posición (n−1)·p, igual que PERCENTIL.INC y que NumPy por omisión."
      },
      {
        "q": "¿Por qué el rango intercuartílico es mejor que el rango simple?",
        "a": "Depende menos de observaciones extremas porque usa los cuartiles centrales. No es la mejor medida para todo: el rango describe extremos y la desviación estándar, desviaciones cuadráticas. El efecto de cambiar un valor depende del tamaño y orden del conjunto."
      },
      {
        "q": "¿Por qué uno y medio rangos para un valor atípico?",
        "a": "Es una regla para señalar valores inusuales, no una prueba universal de error. Los cuartiles de una población normal teórica dejan menos del 1 % de probabilidad fuera de esos límites. Los límites estimados con pocos datos no tienen por qué marcar la misma proporción de observaciones."
      },
      {
        "q": "¿Y si todos los números son iguales?",
        "a": "Entonces los cuartiles coinciden, el rango intercuartílico es cero y los bigotes se reducen a un punto. No hay valores atípicos: ninguno cae fuera de los límites."
      }
    ]
  }
} satisfies Record<'ru' | 'en' | 'uk' | 'de' | 'es', Partial<CalculatorCopy>>;
