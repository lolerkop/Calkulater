import type { CalculatorCopy } from '../../lib/platform/types';

// Individually reviewed existing native body, with scoped subject corrections.
export const mathWave8ContractContent = {
  "ru": {
    "longDescription": "Считает коэффициент корреляции Пирсона по двум рядам и заодно выводит уравнение линии наименьших квадратов. Коэффициент показывает только силу и знак ЛИНЕЙНОЙ связи: у зависимости в виде параболы он может оказаться близким к нулю, хотя связь строгая. Ряды разной длины отклоняются, а не обрезаются — пары строятся по позиции, и молча отбросить хвост значило бы посчитать корреляцию не тех данных. Если все значения одного ряда совпадают, коэффициент не определён, и расчёт это говорит прямо, а не показывает ноль.",
    "howItWorks": "Для каждого ряда считаются отклонения от среднего. Коэффициент равен сумме произведений отклонений, делённой на корень из произведения сумм квадратов. Наклон линии равен той же сумме произведений, делённой на сумму квадратов по X. Свободный член равен ȳ − b·x̄. В модели наименьших квадратов с константой r² — доля вариации Y, описанная этой линейной подгонкой, а не доказательство причинности. r и r² безразмерны; ковариация имеет единицу X×Y, наклон Y/X, свободный член Y. Принимается от 3 до 10000 пар, не более 1000000 символов в каждом ряду. Это ограничение продукта: два различных значения тоже могут задавать корреляцию. Проверка значимости и p-значение не рассчитываются. Внутри каждого ряда используйте согласованные единицы; единицы X и Y могут различаться.",
    "howToUse": [
      "Вставьте первый ряд: пробел, точка с запятой, новая строка либо запятая с пробелом разделяют числа; запятая без пробела — десятичная.",
      "Вставьте второй ряд — в нём должно быть столько же значений.",
      "Смотрите коэффициент: он лежит между −1 и 1.",
      "Наклон и свободный член задают линию, приближающую данные."
    ],
    "example": "Ряды 1, 2, 3, 4, 5 и 2, 4, 5, 4, 5 дают коэффициент 0,7746 и линию с наклоном 0,6.",
    "faq": [
      {
        "q": "Что означает коэффициент 0,77?",
        "a": "Заметную положительную линейную связь: с ростом одного ряда второй в среднем тоже растёт. Единица означала бы строгую прямую, минус единица — строгую обратную."
      },
      {
        "q": "Корреляция доказывает причину?",
        "a": "Нет. Связь может объясняться третьим фактором или совпадением. Коэффициент измеряет совместное поведение рядов, а не влияние одного на другой."
      },
      {
        "q": "Почему ряды разной длины отклоняются?",
        "a": "Потому что пары строятся по позиции. Обрезать длинный ряд значило бы посчитать корреляцию не тех данных и не сказать об этом."
      },
      {
        "q": "Что если все значения ряда одинаковы?",
        "a": "Коэффициент не определён: знаменатель обращается в нуль. Показать здесь ноль значило бы заявить «связи нет» там, где вопрос не имеет смысла."
      },
      {
        "q": "Как вводить десятичные значения?",
        "a": "Через запятую: «1,5 2,5». Запятая считается разделителем значений только перед пробелом, поэтому дробная часть не теряется."
      }
    ]
  },
  "en": {
    "longDescription": "Computes the Pearson correlation coefficient for two series and derives the least-squares line along with it. The coefficient measures only the strength and sign of a LINEAR relationship: for a parabolic dependence it can come out near zero even though the relationship is exact. Series of different lengths are rejected rather than truncated — pairs are formed by position, and silently dropping a tail would compute the correlation of the wrong data. If every value in one series is identical the coefficient has no meaning, and the calculation says so instead of reporting zero.",
    "howItWorks": "Deviations from the mean are computed for each series. The coefficient is the sum of the products of deviations divided by the root of the product of their squared sums. The slope is that same sum of products divided by the squared sum for X. The intercept is ȳ − b·x̄. In least squares with an intercept, r² is the fraction of Y variation described by this linear fit, not evidence of causation. r and r² are dimensionless; covariance has units X×Y, slope Y/X and intercept Y. This product accepts 3–10000 pairs and at most 1000000 characters per series; two distinct pairs can also mathematically define correlation. No significance test or p-value is calculated. Use consistent units within each series; X and Y may have different units.",
    "howToUse": [
      "Enter the first series: spaces, semicolons, newlines or a comma followed by whitespace separate numbers; a comma without whitespace is decimal.",
      "Paste the second series — it must hold the same number of values.",
      "Read the coefficient: it lies between −1 and 1.",
      "The slope and intercept define the line that best fits the data."
    ],
    "example": "Series 1, 2, 3, 4, 5 against 2, 4, 5, 4, 5 give a coefficient of 0.7746 and a line of slope 0.6.",
    "faq": [
      {
        "q": "What does a coefficient of 0.77 mean?",
        "a": "A marked positive linear relationship: as one series rises the other tends to rise too. One would mean an exact straight line, minus one an exact inverse."
      },
      {
        "q": "Does correlation prove causation?",
        "a": "No. A relationship may be explained by a third factor or by coincidence. The coefficient measures how two series move together, not whether one drives the other."
      },
      {
        "q": "Why are series of different lengths rejected?",
        "a": "Because pairs are formed by position. Truncating the longer series would compute the correlation of the wrong data without saying so."
      },
      {
        "q": "What if every value in a series is identical?",
        "a": "The coefficient cannot be computed: the denominator becomes zero. Reporting zero would claim «no relationship» where the question itself makes no sense."
      },
      {
        "q": "How do I enter decimal values?",
        "a": "With a comma, as in «1,5 2,5». A comma only separates values when followed by a space, so the fractional part is not lost."
      }
    ]
  },
  "uk": {
    "longDescription": "Калькулятор рахує коефіцієнт кореляції Пірсона за двома рядами і заразом виводить рівняння лінії найменших квадратів. Коефіцієнт показує лише силу та знак ЛІНІЙНОГО зв’язку: у залежності у вигляді параболи він може виявитися близьким до нуля, хоча зв’язок строгий. Ряди різної довжини відхиляються, а не обрізаються.",
    "howItWorks": "Для кожного ряду рахуються відхилення від середнього. Коефіцієнт дорівнює сумі добутків відхилень, поділеній на корінь із добутку сум квадратів. Нахил лінії дорівнює тій самій сумі добутків, поділеній на суму квадратів по X. Вільний член дорівнює ȳ − b·x̄. У методі найменших квадратів із константою r² — частка варіації Y, описана цією лінійною підгонкою, а не доказ причинності. r і r² безрозмірні; коваріація має одиницю X×Y, нахил Y/X, вільний член Y. Приймається 3–10000 пар та не більше 1000000 символів у кожному ряду. Це межа продукту: дві різні пари теж можуть математично визначати кореляцію. Значущість і p-значення не обчислюються. У межах кожного ряду використовуйте узгоджені одиниці; одиниці X та Y можуть відрізнятися.",
    "howToUse": [
      "Вставте перший ряд: пробіл, крапка з комою, новий рядок або кома з пробілом розділяють числа; кома без пробілу — десяткова.",
      "Вставте другий ряд — у ньому має бути стільки ж значень.",
      "Дивіться коефіцієнт: він лежить між −1 і 1.",
      "Нахил і вільний член задають лінію, що наближає дані."
    ],
    "example": "Ряди 1, 2, 3, 4, 5 і 2, 4, 5, 4, 5 дають коефіцієнт 0,7746 і лінію з нахилом 0,6. Коефіцієнт детермінації при цьому дорівнює 0,6 — це частка варіації Y, описана лінійною підгонкою з константою, без причинного висновку.",
    "faq": [
      {
        "q": "Що означає коефіцієнт 0,77?",
        "a": "Помітний додатний лінійний зв’язок: зі зростанням одного ряду другий у середньому теж росте. Одиниця означала б строгу пряму, мінус одиниця — строгу обернену."
      },
      {
        "q": "Чи доводить кореляція причину?",
        "a": "Ні. Зв’язок може пояснюватися третім чинником або збігом. Коефіцієнт вимірює спільну поведінку рядів, а не вплив одного на інший."
      },
      {
        "q": "Чому ряди різної довжини відхиляються?",
        "a": "Бо пари будуються за позицією. Обрізати довгий ряд означало б порахувати кореляцію не тих даних і не сказати про це."
      },
      {
        "q": "Що коли всі значення ряду однакові?",
        "a": "Коефіцієнт не визначений: знаменник обертається на нуль. Показати тут нуль означало б заявити «зв’язку немає» там, де питання не має сенсу."
      },
      {
        "q": "Чи побачить коефіцієнт нелінійний зв’язок?",
        "a": "Ні. У симетричної параболи він може дорівнювати нулю, хоча зв’язок строгий. Тому перед висновком корисно подивитися на самі дані, а не лише на число."
      }
    ]
  },
  "de": {
    "longDescription": "Berechnet den Korrelationskoeffizienten nach Pearson für zwei Reihen und leitet daraus die Gerade der kleinsten Quadrate ab. Der Koeffizient misst allein Stärke und Vorzeichen eines LINEAREN Zusammenhangs: bei einem parabelförmigen Zusammenhang kann er nahe null herauskommen, obwohl der Zusammenhang exakt ist. Reihen verschiedener Länge werden abgewiesen und nicht gekürzt — die Paare entstehen nach Stellung, und ein stillschweigend abgeschnittenes Ende berechnete die Korrelation der falschen Daten. Sind alle Werte einer Reihe gleich, hat der Koeffizient keinen Sinn, und die Rechnung sagt das, statt null auszugeben.",
    "howItWorks": "Für jede Reihe werden die Abweichungen vom Mittel bestimmt. Der Koeffizient ist die Summe der Produkte der Abweichungen geteilt durch die Wurzel aus dem Produkt ihrer Quadratsummen. Die Steigung ist dieselbe Produktsumme geteilt durch die Quadratsumme für X. Der Achsenabschnitt ist ȳ − b·x̄. Bei kleinsten Quadraten mit Konstante beschreibt r² den durch diese lineare Anpassung erfassten Anteil der Y-Variation, keine Kausalität. r und r² sind dimensionslos; Kovarianz hat die Einheit X×Y, Steigung Y/X und Achsenabschnitt Y. Zulässig sind 3–10000 Paare und höchstens 1000000 Zeichen je Reihe. Das ist eine Produktgrenze: Auch zwei unterschiedliche Paare können mathematisch eine Korrelation definieren. Ein Signifikanztest oder p-Wert wird nicht berechnet. Verwende innerhalb jeder Reihe einheitliche Einheiten; X und Y dürfen unterschiedliche Einheiten haben.",
    "howToUse": [
      "Gib die erste Reihe ein: Leerzeichen, Semikolon, Zeilenumbruch oder Komma mit folgendem Leerraum trennen Zahlen; ein Komma ohne Leerraum ist das Dezimalzeichen.",
      "Füge die zweite Reihe ein — sie muss gleich viele Werte enthalten.",
      "Lies den Koeffizienten ab: er liegt zwischen −1 und 1.",
      "Steigung und Achsenabschnitt beschreiben die Gerade, die am besten zu den Daten passt."
    ],
    "example": "Die Reihen 1, 2, 3, 4, 5 gegen 2, 4, 5, 4, 5 ergeben einen Koeffizienten von 0,7746 und eine Gerade mit der Steigung 0,6.",
    "faq": [
      {
        "q": "Was bedeutet ein Koeffizient von 0,77?",
        "a": "Einen deutlichen positiven linearen Zusammenhang: steigt die eine Reihe, steigt die andere tendenziell mit. Eins bedeutete eine genaue Gerade, minus eins eine genaue Umkehrung."
      },
      {
        "q": "Beweist eine Korrelation eine Ursache?",
        "a": "Nein. Ein Zusammenhang kann von einem dritten Faktor herrühren oder Zufall sein. Der Koeffizient misst, wie zwei Reihen zusammen laufen, und nicht, ob die eine die andere treibt."
      },
      {
        "q": "Warum werden Reihen verschiedener Länge abgewiesen?",
        "a": "Weil die Paare nach Stellung entstehen. Die längere Reihe zu kürzen berechnete ohne Hinweis die Korrelation der falschen Daten."
      },
      {
        "q": "Was, wenn alle Werte einer Reihe gleich sind?",
        "a": "Der Koeffizient lässt sich nicht berechnen: der Nenner wird null. Null auszugeben behauptete „kein Zusammenhang“, wo die Frage selbst keinen Sinn ergibt."
      },
      {
        "q": "Wie trage ich Dezimalwerte ein?",
        "a": "Mit Komma, wie in „1,5 2,5“. Ein Komma trennt Werte nur, wenn ein Leerzeichen folgt, der Nachkommateil geht also nicht verloren."
      }
    ]
  },
  "es": {
    "longDescription": "Calcula el coeficiente de correlación de Pearson para dos series y deduce con él la recta de mínimos cuadrados. El coeficiente mide únicamente la fuerza y el signo de una relación LINEAL: en una dependencia parabólica puede salir casi cero aunque la relación sea exacta. Las series de distinta longitud se rechazan en lugar de recortarse: los pares se forman por posición, y descartar una cola en silencio calcularía la correlación de otros datos. Si todos los valores de una serie son idénticos, el coeficiente no tiene sentido, y el cálculo lo dice en lugar de devolver cero.",
    "howItWorks": "Se calculan las desviaciones respecto a la media de cada serie. El coeficiente es la suma de los productos de desviaciones dividida entre la raíz del producto de sus sumas de cuadrados. La pendiente es esa misma suma de productos dividida entre la suma de cuadrados de X. El término independiente es ȳ − b·x̄. En mínimos cuadrados con constante, r² es la fracción de variación de Y descrita por ese ajuste lineal, no una prueba de causalidad. r y r² no tienen dimensión; la covarianza tiene unidades X×Y, la pendiente Y/X y el término independiente Y. Se admiten 3–10000 pares y como máximo 1000000 caracteres por serie. Es un límite del producto: dos pares distintos también pueden definir matemáticamente una correlación. No se calcula una prueba de significación ni un valor p. Usa unidades coherentes dentro de cada serie; X e Y pueden tener unidades distintas.",
    "howToUse": [
      "Introduce la primera serie: los espacios, puntos y coma, saltos de línea o una coma seguida de espacio separan números; una coma sin espacio es decimal.",
      "Pega la segunda serie: debe contener el mismo número de valores.",
      "Consulta el coeficiente: está entre −1 y 1.",
      "La pendiente y la ordenada definen la recta que mejor se ajusta a los datos."
    ],
    "example": "Las series 1, 2, 3, 4, 5 frente a 2, 4, 5, 4, 5 dan un coeficiente de 0,7746 y una recta de pendiente 0,6.",
    "faq": [
      {
        "q": "¿Qué significa un coeficiente de 0,77?",
        "a": "Una relación lineal positiva marcada: cuando una serie sube, la otra tiende a subir también. Uno significaría una recta exacta y menos uno, una relación inversa exacta."
      },
      {
        "q": "¿La correlación demuestra causalidad?",
        "a": "No. Una relación puede explicarse por un tercer factor o por casualidad. El coeficiente mide cómo se mueven juntas dos series, no si una provoca la otra."
      },
      {
        "q": "¿Por qué se rechazan series de distinta longitud?",
        "a": "Porque los pares se forman por posición. Recortar la serie más larga calcularía la correlación de otros datos sin avisar."
      },
      {
        "q": "¿Y si todos los valores de una serie son idénticos?",
        "a": "El coeficiente no puede calcularse: el denominador se hace cero. Devolver cero afirmaría «no hay relación» donde la pregunta misma carece de sentido."
      },
      {
        "q": "¿Cómo introduzco valores decimales?",
        "a": "Con coma, como en «1,5 2,5». Una coma solo separa valores cuando va seguida de un espacio, así que la parte decimal no se pierde."
      }
    ]
  }
} satisfies Record<'ru' | 'en' | 'uk' | 'de' | 'es', Partial<CalculatorCopy>>;
