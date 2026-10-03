import type { CalculatorCopy } from '../../lib/platform/types';

type Body = Pick<CalculatorCopy, 'shortDescription' | 'seoDescription' | 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;

// Subject-specific retained and amended copy; source and calculation limits are explicit.
export const contractContent: Record<'ru'|'en'|'uk'|'de'|'es', Body> = {
  "ru": {
    "longDescription": "Режим деления разбивает положительную длину на две части в золотом отношении φ = (1+√5)/2. Режим подбора решает другую задачу: по размеру a возвращает большего соседа aφ и меньшего a/φ. Эти два результата относятся друг к другу как φ², а каждый к исходному a — как φ. Константа вычисляется с точностью машинного числа и округляется при выводе; это не точное представление иррационального числа.",
    "howToUse": [
      "Выберите, делить отрезок или подбирать партнёра.",
      "Введите известную длину.",
      "Прочитайте обе части или оба размера.",
      "Используйте одну общую единицу длины для входа и результата: например, сантиметры или пиксели. Инструмент не переводит единицы. В режиме подбора два выхода не являются частями исходного a."
    ],
    "howItWorks": "φ = (1 + √5)/2 ≈ 1,618034. Отрезок делится так, что целое относится к большей части, как большая к меньшей: большая часть равна длине, делённой на φ. В режиме подбора известный размер умножается и делится на φ, давая обоих соседей по ряду.",
    "example": "Отрезок 100 делится на 61,8034 и 38,1966 — их отношение равно отношению целого к большей части.",
    "faq": [
      {
        "q": "Почему φ не задано просто числом 1,618?",
        "a": "1,618 — только округление. Вычисление (1+√5)/2 сохраняет больше машинных разрядов, но всё равно приближает иррациональное число. Проверять равенство отношений нужно с учётом округления результатов, а не требовать побитного совпадения."
      },
      {
        "q": "Как проверить, что деление верное?",
        "a": "Разделите целое на большую часть и большую на меньшую: оба отношения дадут одно и то же число φ. В этом и состоит определение."
      },
      {
        "q": "Где золотое сечение применяют на практике?",
        "a": "В вёрстке и типографике — подобрать ширину колонки к полосе, размер заголовка к тексту, пропорции карточки. Это приём композиции, а не закон природы."
      },
      {
        "q": "Связано ли это с числами Фибоначчи?",
        "a": "Да: отношение соседних чисел Фибоначчи стремится к φ. Поэтому 34 и 55 — почти золотая пара, что видно в режиме подбора."
      }
    ],
    "shortDescription": "Деление отрезка в отношении φ и подбор второго размера по нему.",
    "seoDescription": "Разделите отрезок в золотом отношении или подберите второй размер по φ = (1 + √5)/2.",
    "disclaimer": "Положительные длины в одной выбранной вами единице. Деление сохраняет сумму частей; подбор возвращает двух соседей исходного размера. Золотое отношение — математическая пропорция, которая сама по себе не гарантирует качество композиции."
  },
  "en": {
    "longDescription": "Split mode divides a positive length into two parts in the golden ratio φ = (1+√5)/2. Partner mode solves a different problem: a known size a gives a larger neighbour aφ and a smaller one a/φ. Those two outputs have ratio φ²; each is separated from the input a by a factor φ. The constant is calculated in machine precision and rounded for display, not represented as an exact irrational number.",
    "howToUse": [
      "Choose whether to split a segment or find a partner.",
      "Enter the length you know.",
      "Read both parts, or both sizes.",
      "Use one common length unit for input and output, such as centimetres or pixels. No unit conversion occurs. In partner mode the two outputs are not parts of the original a."
    ],
    "howItWorks": "φ = (1 + √5)/2 ≈ 1.618034. A segment is split so that the whole is to the larger part as the larger is to the smaller: the larger part is the length divided by φ. In partner mode the known size is multiplied and divided by φ, giving both of its neighbours in the series.",
    "example": "A segment of 100 splits into 61.8034 and 38.1966 — their ratio equals the ratio of the whole to the larger part.",
    "faq": [
      {
        "q": "Why is φ not simply set to 1.618?",
        "a": "1.618 is only a rounded value. Calculating (1+√5)/2 keeps more machine digits but still approximates an irrational number. Check ratios with allowance for display rounding rather than requiring bit-for-bit equality."
      },
      {
        "q": "How can I check the split is right?",
        "a": "Divide the whole by the larger part, and the larger by the smaller: both give the same number φ. That is the definition."
      },
      {
        "q": "Where is the golden ratio actually used?",
        "a": "In layout and typography — picking a column width against a page, a heading size against body text, the proportions of a card. It is a compositional device, not a law of nature."
      },
      {
        "q": "Is it related to the Fibonacci numbers?",
        "a": "Yes: the ratio of consecutive Fibonacci numbers tends to φ. That is why 34 and 55 are almost a golden pair, as the partner mode shows."
      }
    ],
    "shortDescription": "Split a segment in the ratio φ, or find the partner to a given size.",
    "seoDescription": "Split a segment in the golden ratio or find the second size by φ = (1 + √5)/2.",
    "disclaimer": "Positive lengths in one unit you choose. Split mode preserves the sum of parts; partner mode returns two neighbours of the original size. The golden ratio is a mathematical proportion and does not by itself guarantee composition quality."
  },
  "uk": {
    "longDescription": "Режим поділу розбиває додатну довжину на дві частини в золотому відношенні φ = (1+√5)/2. Режим добору розв’язує іншу задачу: за розміром a повертає більшого сусіда aφ та меншого a/φ. Відношення цих двох результатів — φ², а кожного до вихідного a — φ. Константа рахується з точністю машинного числа й округлюється під час виводу; це не точне представлення ірраціонального числа.",
    "howToUse": [
      "Виберіть, ділити відрізок чи добирати партнера.",
      "Введіть відому довжину.",
      "Прочитайте обидві частини або обидва розміри.",
      "Використовуйте одну спільну одиницю довжини для входу й виходу: наприклад, сантиметри або пікселі. Одиниці не переводяться. У режимі добору два виходи не є частинами вихідного a."
    ],
    "howItWorks": "Число φ = (1 + √5)/2 ≈ 1,618034. Відрізок ділиться так, що ціле відноситься до більшої частини, як більша до меншої: більша частина дорівнює довжині, поділеній на φ. У режимі добору відомий розмір множиться й ділиться на φ, даючи обох сусідів по ряду.",
    "example": "Відрізок 100 ділиться на 61,8034 і 38,1966 — їхнє відношення дорівнює відношенню цілого до більшої частини. Для розміру 34 сусідами будуть 21,01 і 55,01.",
    "faq": [
      {
        "q": "Чому φ не записано як 1,618?",
        "a": "1,618 — лише округлення. Обчислення (1+√5)/2 зберігає більше машинних знаків, але все одно наближує ірраціональне число. Перевіряйте відношення з урахуванням округлення виходів, а не вимагайте побітного збігу."
      },
      {
        "q": "Чим режим ділення відрізняється від добору?",
        "a": "Ділення розбиває відому довжину на дві частини, сума яких дорівнює вихідній. Добір, навпаки, знаходить два розміри навколо відомого: менший і більший сусіди в ряду."
      },
      {
        "q": "Де це застосовують на практиці?",
        "a": "У верстці та типографіці: ширина колонки до смуги, розмір заголовка до основного тексту, пропорції картки. Це не закон природи, а зручна відправна точка для сітки."
      },
      {
        "q": "Чи пов’язане золоте відношення з числами Фібоначчі?",
        "a": "Так: відношення сусідніх чисел Фібоначчі прямує до φ. Уже для 34 і 55 воно дорівнює 1,6176 — різниця з φ помітна лише в третьому знаку."
      }
    ],
    "shortDescription": "Поділ відрізка у відношенні φ і підбір другого розміру за ним.",
    "seoDescription": "Поділіть відрізок у золотому відношенні або підберіть другий розмір за φ = (1 + √5)/2.",
    "disclaimer": "Додатні довжини в одній обраній вами одиниці. Поділ зберігає суму частин; добір повертає двох сусідів вихідного розміру. Золоте відношення є математичною пропорцією й саме не гарантує якість композиції."
  },
  "de": {
    "longDescription": "Der Teilungsmodus zerlegt eine positive Länge im Goldenen Schnitt φ = (1+√5)/2. Der Partnermodus löst eine andere Aufgabe: Aus a entstehen der größere Nachbar aφ und der kleinere a/φ. Beide Ausgaben stehen im Verhältnis φ²; jeder Nachbar ist vom Eingabewert a um den Faktor φ entfernt. Die Konstante wird in Maschinengenauigkeit berechnet und angezeigt gerundet, nicht als exakte irrationale Zahl dargestellt.",
    "howToUse": [
      "Wähle, ob du eine Strecke teilen oder einen Partner finden willst.",
      "Trage die Länge ein, die du kennst.",
      "Lies beide Teile oder beide Größen ab.",
      "Verwende dieselbe Längeneinheit für Ein- und Ausgabe, etwa Zentimeter oder Pixel. Es erfolgt keine Umrechnung. Im Partnermodus sind die beiden Ausgaben keine Teilstücke von a."
    ],
    "howItWorks": "φ = (1 + √5)/2 ≈ 1,618034. Eine Strecke wird so geteilt, dass sich das Ganze zum größeren Teil verhält wie der größere zum kleineren: der größere Teil ist die Länge geteilt durch φ. Im Partnermodus wird die bekannte Größe mit φ multipliziert und durch φ geteilt, das ergibt beide Nachbarn in der Reihe.",
    "example": "Eine Strecke von 100 teilt sich in 61,8034 und 38,1966 — ihr Verhältnis entspricht dem des Ganzen zum größeren Teil.",
    "faq": [
      {
        "q": "Warum wird φ nicht einfach auf 1,618 gesetzt?",
        "a": "1,618 ist nur gerundet. Die Rechnung (1+√5)/2 bewahrt mehr Maschinenstellen, nähert die irrationale Zahl aber weiterhin an. Verhältnisprüfungen müssen das Runden der Ausgaben berücksichtigen, statt Bitgleichheit zu verlangen."
      },
      {
        "q": "Wie prüfe ich, ob die Teilung stimmt?",
        "a": "Teile das Ganze durch den größeren Teil und den größeren durch den kleineren: beides ergibt dieselbe Zahl φ. Das ist die Festlegung."
      },
      {
        "q": "Wo wird der Goldene Schnitt tatsächlich genutzt?",
        "a": "In Layout und Typografie — eine Spaltenbreite gegen eine Seite, eine Überschriftgröße gegen den Fließtext, die Proportionen einer Karte. Es ist ein Gestaltungsmittel und kein Naturgesetz."
      },
      {
        "q": "Hängt er mit den Fibonacci-Zahlen zusammen?",
        "a": "Ja: das Verhältnis aufeinanderfolgender Fibonacci-Zahlen strebt gegen φ. Deshalb sind 34 und 55 beinahe ein goldenes Paar, wie der Partnermodus zeigt."
      }
    ],
    "shortDescription": "Eine Strecke im Verhältnis φ teilen oder den Partner zu einer gegebenen Größe finden.",
    "seoDescription": "Teile eine Strecke im Goldenen Schnitt oder finde die zweite Größe über φ = (1 + √5)/2.",
    "disclaimer": "Positive Längen in einer von dir gewählten Einheit. Die Teilung erhält die Summe; der Partnermodus liefert zwei Nachbarn des Ausgangsmaßes. Der Goldene Schnitt ist eine mathematische Proportion und garantiert für sich keine Gestaltungsqualität."
  },
  "es": {
    "longDescription": "El modo de división separa una longitud positiva en dos partes en la razón áurea φ = (1+√5)/2. El modo de pareja resuelve otra tarea: a partir de a devuelve el vecino mayor aφ y el menor a/φ. Los dos resultados guardan razón φ²; cada vecino está separado de la entrada por un factor φ. La constante se calcula con precisión de máquina y se redondea al mostrarla, sin representar exactamente el número irracional.",
    "howToUse": [
      "Elige si vas a dividir un segmento o a hallar la pareja.",
      "Introduce la longitud que conoces.",
      "Consulta ambas partes, o ambas medidas.",
      "Usa una unidad común de longitud para entrada y salida, como centímetros o píxeles. No hay conversión de unidades. En modo de pareja los dos resultados no son partes del a original."
    ],
    "howItWorks": "φ = (1 + √5)/2 ≈ 1,618034. Un segmento se divide de modo que el todo sea a la parte mayor como la mayor es a la menor: la parte mayor es la longitud dividida entre φ. En el modo de la pareja, la medida conocida se multiplica y se divide por φ, lo que da sus dos vecinas en la serie.",
    "example": "Un segmento de 100 se divide en 61,8034 y 38,1966: su razón coincide con la del todo respecto a la parte mayor.",
    "faq": [
      {
        "q": "¿Por qué φ no se fija sin más en 1,618?",
        "a": "1,618 es solo un valor redondeado. Calcular (1+√5)/2 conserva más cifras de máquina, pero sigue aproximando un número irracional. Comprueba las razones teniendo en cuenta el redondeo de salida, sin exigir igualdad bit a bit."
      },
      {
        "q": "¿Cómo compruebo que la división es correcta?",
        "a": "Divide el todo entre la parte mayor, y la mayor entre la menor: ambas dan el mismo número φ. Esa es la definición."
      },
      {
        "q": "¿Dónde se usa de verdad la proporción áurea?",
        "a": "En maquetación y tipografía: al elegir el ancho de una columna frente a la página, el tamaño de un titular frente al texto corrido, las proporciones de una tarjeta. Es un recurso compositivo, no una ley de la naturaleza."
      },
      {
        "q": "¿Tiene relación con los números de Fibonacci?",
        "a": "Sí: la razón entre números de Fibonacci consecutivos tiende a φ. Por eso 34 y 55 son casi una pareja áurea, como muestra el modo de la pareja."
      }
    ],
    "shortDescription": "Divide un segmento en la razón φ o halla la pareja de una medida dada.",
    "seoDescription": "Divide un segmento en la proporción áurea o halla la segunda medida con φ = (1 + √5)/2.",
    "disclaimer": "Longitudes positivas en una unidad elegida por ti. La división conserva la suma; el modo de pareja devuelve dos vecinos del tamaño inicial. La razón áurea es una proporción matemática y no garantiza por sí sola la calidad de una composición."
  }
};
