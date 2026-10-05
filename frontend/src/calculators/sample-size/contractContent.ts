import type { CalculatorCopy } from '../../lib/platform/types';

// Individually reviewed existing native body, with scoped subject corrections.
export const mathWave8ContractContent = {
  "ru": {
    "longDescription": "Планирует число завершённых ответов для оценки одной доли при простом случайном отборе. Это обратная задача к нормальному приближению доверительного интервала: заданные уровень доверия, допустимая ошибка в процентных пунктах и ожидаемая доля определяют размер выборки. При неизменных остальных параметрах p = 50 % максимизирует p·(1−p) и даёт консервативное значение этой модели. Известный конечный размер N включает поправку для отбора без возвращения. Расчёт не устраняет смещение отбора, неответы или ошибки измерения и не гарантирует требуемое качество любого опроса.",
    "howItWorks": "n₀ = z²·p·(1−p)/e², где p и e в формуле — доли от 0 до 1, а поля задаются в процентах и процентных пунктах. При N > 0: n = N·n₀/(N−1+n₀); окончательное число округляется вверх. N — целое от 0 до 9007199254740991: 0 означает неизвестную или очень большую совокупность, а не её измеренный размер. Для N = 0 доля выборки от совокупности не определена и показана прочерком. При p = 0 или 1 формула формально даёт ноль: это вырождение модели, а не рекомендация провести опрос без ответов. Около крайних долей нормальное приближение требует отдельной проверки.",
    "howToUse": [
      "Предельная ошибка — это половина ширины доверительного интервала: «±3 %» означает 3.",
      "Если ожидаемая доля неизвестна, 50 % даёт наибольший объём в этой модели нормального приближения для одной доли при простой случайной выборке. Это не гарантирует достаточность для любого исследования и не устраняет смещение отбора.",
      "Объём совокупности задавайте нулём, если она велика или неизвестна — поправка тогда не включается.",
      "Модель предполагает простую случайную выборку. Для кластерного, квотного или другого дизайна отдельно оценивают план отбора, эффект дизайна и смещения; универсального правила «нужно больше людей» здесь нет."
    ],
    "example": "При 95 %, ошибке 5 процентных пунктов и ожидаемой доле 50 % без конечной поправки n₀ ≈ 384,1459, после округления вверх нужно 385 ответов. Если известно N = 500, поправка даёт примерно 217,4872 и итог 218 ответов.",
    "faq": [
      {
        "q": "Почему при доле 50 % выборка наибольшая?",
        "a": "Потому что p·(1−p) достигает максимума 0,25 при p = 0,5. При p = 0,1 или 0,9 произведение равно 0,09: без конечной поправки требуется 36 % прежнего необработанного объёма, а не ровно треть. Например, при 95 % и ошибке 5 пунктов получаются 139 ответов вместо 385. Это консервативность внутри модели, а не защита от смещения опроса."
      },
      {
        "q": "Почему выборка почти не зависит от размера города?",
        "a": "Без конечной поправки N не входит в формулу. Но если выборка заметна относительно известного N и отбор идёт без возвращения, поправка уменьшает необходимое число: при N = 500 пример даёт 218, а не 385. Здесь нет универсального точного порога, после которого размер города вдруг начинает влиять."
      },
      {
        "q": "Что даёт переход с 95 % на 99 %?",
        "a": "Без конечной поправки при неизменных p и e объём растёт как z²: переход 95 % → 99 % умножает необработанный объём примерно на 1,727. Уменьшение ошибки вдвое умножает его на 4, то есть требует большего увеличения. Для доли 50 % и ошибки 5 пунктов получаются 385 и 664 ответа соответственно."
      },
      {
        "q": "Годится ли для A/B-теста?",
        "a": "Нет: здесь планируется точность оценки одной доли. Для сравнения двух вариантов нужны хотя бы значимый для задачи размер эффекта, выбранный уровень значимости, мощность и распределение наблюдений между группами. Просто удвоить этот результат недостаточно, чтобы получить расчёт мощности A/B-теста."
      }
    ]
  },
  "en": {
    "longDescription": "Plans the number of completed responses for estimating one proportion under simple random sampling. It reverses the normal confidence-interval approximation: confidence, a margin in percentage points and an anticipated proportion determine the sample size. With other settings fixed, p = 50% maximizes p·(1−p), making it conservative within this model. A known finite population N enables the correction for sampling without replacement. The calculation does not remove selection bias, nonresponse or measurement error, and is not a guarantee for every survey.",
    "howItWorks": "n₀ = z²·p·(1−p)/e², where formula p and e are fractions, while fields use percentages and percentage points. For N > 0, n = N·n₀/(N−1+n₀); the final count is rounded upward. N is an integer from 0 to 9007199254740991: 0 means unknown or very large population, not its measured size. At N = 0 the sampling fraction is unavailable and shown as a dash. At p = 0 or 1 the formula formally gives zero: a degenerate model, not advice to obtain no responses. The normal approximation needs separate assessment near endpoint proportions.",
    "howToUse": [
      "Margin of error is half the interval width: \"±3 %\" means 3.",
      "If the expected proportion is unknown, 50% gives the largest size within this normal-approximation model for one proportion under simple random sampling. It does not guarantee adequacy for every study or remove selection bias.",
      "Set population to zero when it is large or unknown — the correction then stays off.",
      "The model assumes simple random sampling. Cluster, quota and other designs require a separate assessment of sampling, design effects and bias; there is no universal rule here that they need more people."
    ],
    "example": "At 95% confidence, a 5-percentage-point margin and anticipated proportion 50%, the uncorrected n₀ ≈ 384.1459 rounds upward to 385 responses. For a known N = 500, the correction gives approximately 217.4872, hence 218 responses.",
    "faq": [
      {
        "q": "Why is the sample largest at 50 %?",
        "a": "p·(1−p) reaches its maximum 0.25 at p = 0.5. At p = 0.1 or 0.9 it is 0.09: without the finite correction, the unrounded sample size is 36% of the former size, not exactly one third. At 95% and a five-point margin, for example, 139 responses replace 385. This is conservatism within the model, not protection from survey bias."
      },
      {
        "q": "Why does the sample barely depend on city size?",
        "a": "N is absent from the uncorrected formula. When a sample is appreciable relative to a known N and sampling is without replacement, the correction reduces the count: the N = 500 example gives 218 rather than 385. There is no universal exact threshold where city size suddenly starts to matter."
      },
      {
        "q": "What does moving from 95 % to 99 % cost?",
        "a": "Without the finite correction and with p and e fixed, size scales with z²: moving from 95% to 99% multiplies the unrounded size by about 1.727. Halving the margin multiplies it by 4, a larger increase. With a 50% proportion and five-point margin, the rounded counts are 385 and 664."
      },
      {
        "q": "Does this cover A/B tests?",
        "a": "No: this plans precision for one proportion. Comparing two variants requires an effect size relevant to the question, a significance level, statistical power and allocation between groups. Simply doubling this result is not an A/B power calculation."
      }
    ]
  },
  "uk": {
    "longDescription": "Планує кількість завершених відповідей для оцінки однієї частки за простого випадкового відбору. Це обернена задача до нормального наближення довірчого інтервалу: рівень довіри, допустима похибка у відсоткових пунктах і очікувана частка задають обсяг вибірки. За інших незмінних параметрів p = 50 % максимізує p·(1−p) і дає консервативне значення цієї моделі. Відомий скінченний розмір N вмикає поправку для відбору без повернення. Розрахунок не усуває зміщення відбору, невідповіді чи помилки вимірювання й не гарантує потрібну якість будь-якого опитування.",
    "howItWorks": "n₀ = z²·p·(1−p)/e², де p та e у формулі — частки, а поля задаються у відсотках і відсоткових пунктах. За N > 0: n = N·n₀/(N−1+n₀); остаточну кількість округлено вгору. N — ціле від 0 до 9007199254740991: 0 означає невідому або дуже велику сукупність, а не її виміряний розмір. За N = 0 частка вибірки від сукупності невідома й показана прочерком. За p = 0 або 1 формула формально дає нуль: це виродження моделі, а не порада опитувати без відповідей. Біля крайніх часток нормальне наближення потребує окремої перевірки.",
    "howToUse": [
      "Гранична похибка — це половина ширини довірчого інтервалу: «±3 %» означає 3.",
      "Якщо очікувана частка невідома, 50 % дає найбільший обсяг у цій моделі нормального наближення для однієї частки за простої випадкової вибірки. Це не гарантує достатності для будь-якого дослідження й не усуває зміщення відбору.",
      "Обсяг сукупності задавайте нулем, якщо вона велика або невідома.",
      "Модель передбачає просту випадкову вибірку. Для кластерного, квотного або іншого дизайну окремо оцінюють план відбору, ефект дизайну й зміщення; універсального правила «потрібно більше людей» тут немає."
    ],
    "example": "За 95 %, похибки 5 відсоткових пунктів та очікуваної частки 50 % без скінченної поправки n₀ ≈ 384,1459, після округлення вгору потрібно 385 відповідей. За відомого N = 500 поправка дає приблизно 217,4872, отже потрібно 218 відповідей.",
    "faq": [
      {
        "q": "Чому за частки 50 % вибірка найбільша?",
        "a": "p·(1−p) досягає максимуму 0,25 за p = 0,5. За p = 0,1 або 0,9 добуток дорівнює 0,09: без скінченної поправки необроблений обсяг становить 36 % попереднього, а не рівно третину. Наприклад, за 95 % і похибки 5 пунктів потрібно 139 відповідей замість 385. Це консервативність моделі, а не захист від зміщення опитування."
      },
      {
        "q": "Чому вибірка майже не залежить від розміру міста?",
        "a": "Без скінченної поправки N не входить до формули. Якщо вибірка помітна відносно відомого N і відбір відбувається без повернення, поправка зменшує кількість: за N = 500 приклад дає 218, а не 385. Універсального точного порогу, після якого розмір міста раптом починає впливати, немає."
      },
      {
        "q": "Що дає перехід з 95 % на 99 %?",
        "a": "Без скінченної поправки за незмінних p та e обсяг росте як z²: перехід 95 % → 99 % множить необроблений обсяг приблизно на 1,727. Зменшення похибки вдвічі множить його на 4, тобто потребує більшого зростання. Для частки 50 % та похибки 5 пунктів отримуємо відповідно 385 і 664 відповіді."
      },
      {
        "q": "Чи годиться для A/B-тесту?",
        "a": "Ні: тут планується точність оцінки однієї частки. Для порівняння двох варіантів потрібні розмір важливого для задачі ефекту, рівень значущості, потужність і розподіл спостережень між групами. Просте подвоєння цього результату не є розрахунком потужності A/B-тесту."
      }
    ]
  },
  "de": {
    "longDescription": "Plant die Zahl abgeschlossener Antworten zur Schätzung eines Anteils bei einfacher Zufallsstichprobe. Die Normalapproximation eines Konfidenzintervalls wird umgekehrt: Konfidenzniveau, Fehlergrenze in Prozentpunkten und erwarteter Anteil bestimmen den Umfang. Bei sonst gleichen Einstellungen maximiert p = 50 % das Produkt p·(1−p) und ist innerhalb dieses Modells konservativ. Eine bekannte endliche Population N aktiviert die Korrektur für Ziehen ohne Zurücklegen. Auswahlverzerrung, Nichtantworten und Messfehler werden damit nicht beseitigt; jede Umfrage erhält dadurch keine Qualitätsgarantie.",
    "howItWorks": "n₀ = z²·p·(1−p)/e²; p und e sind in der Formel Anteile, die Eingaben erfolgen in Prozent beziehungsweise Prozentpunkten. Für N > 0 gilt n = N·n₀/(N−1+n₀); die endgültige Anzahl wird aufgerundet. N ist ganzzahlig von 0 bis 9007199254740991. 0 bedeutet unbekannte oder sehr große Population, keine gemessene Größe. Für N = 0 ist der Stichprobenanteil unbekannt und erscheint als Strich. p = 0 oder 1 ergibt formal null: eine entartete Modellannahme, keine Empfehlung für null Antworten. Nahe den Randanteilen muss die Normalapproximation gesondert geprüft werden.",
    "howToUse": [
      "Die Fehlergrenze ist die halbe Intervallbreite: „±3 %“ heißt 3.",
      "Ist der erwartete Anteil unbekannt, liefert 50 % die größte Stichprobe innerhalb dieses Normalapproximation-Modells für einen Anteil bei einfacher Zufallsziehung. Das garantiert weder Eignung für jede Studie noch die Beseitigung von Auswahlverzerrungen.",
      "Setze die Grundgesamtheit auf null, wenn sie groß oder unbekannt ist — die Korrektur bleibt dann aus.",
      "Das Modell setzt eine einfache Zufallsstichprobe voraus. Bei Klumpen-, Quoten- und anderen Verfahren sind Auswahlplan, Designeffekte und Verzerrungen gesondert zu beurteilen; eine allgemeine Regel „mehr Personen nötig“ gilt hier nicht."
    ],
    "example": "Bei 95 % Konfidenz, 5 Prozentpunkten Fehlergrenze und erwartetem Anteil 50 % wird das unkorrigierte n₀ ≈ 384,1459 auf 385 Antworten aufgerundet. Bei bekanntem N = 500 ergibt die Korrektur ungefähr 217,4872, also 218 Antworten.",
    "faq": [
      {
        "q": "Warum ist die Stichprobe bei 50 % am größten?",
        "a": "p·(1−p) erreicht bei p = 0,5 das Maximum 0,25. Bei p = 0,1 oder 0,9 beträgt es 0,09: Ohne endliche Korrektur sind 36 % des bisherigen ungerundeten Umfangs nötig, nicht genau ein Drittel. Bei 95 % und fünf Prozentpunkten ergeben sich etwa 139 statt 385 Antworten. Diese Konservativität gilt innerhalb des Modells und schützt nicht vor Umfrageverzerrung."
      },
      {
        "q": "Warum hängt die Stichprobe kaum von der Stadtgröße ab?",
        "a": "In der unkorrigierten Formel kommt N nicht vor. Ist die Stichprobe gegenüber einem bekannten N beträchtlich und wird ohne Zurücklegen gezogen, senkt die Korrektur die Anzahl: Bei N = 500 ergeben sich 218 statt 385. Es gibt keine universelle exakte Schwelle, ab der die Stadtgröße plötzlich eine Rolle spielt."
      },
      {
        "q": "Was kostet der Schritt von 95 % auf 99 %?",
        "a": "Ohne endliche Korrektur wächst der Umfang bei festen p und e mit z². Der Schritt von 95 % zu 99 % vervielfacht den ungerundeten Umfang um etwa 1,727. Die halbe Fehlergrenze erfordert dagegen den Faktor 4, also den stärkeren Anstieg. Bei 50 % Anteil und fünf Prozentpunkten ergeben sich gerundet 385 beziehungsweise 664 Antworten."
      },
      {
        "q": "Deckt das A/B-Tests ab?",
        "a": "Nein: Hier wird die Schätzpräzision eines Anteils geplant. Zum Vergleich zweier Varianten werden eine relevante Effektgröße, Signifikanzniveau, Teststärke und Aufteilung auf die Gruppen benötigt. Ein bloßes Verdoppeln dieses Ergebnisses ist keine A/B-Poweranalyse."
      }
    ]
  },
  "es": {
    "longDescription": "Planifica el número de respuestas completas para estimar una proporción mediante muestreo aleatorio simple. Invierte la aproximación normal del intervalo de confianza: el nivel de confianza, el margen en puntos porcentuales y la proporción prevista determinan el tamaño. Con los demás ajustes fijos, p = 50 % maximiza p·(1−p) y es conservador dentro de este modelo. Una población finita conocida N activa la corrección para muestreo sin reemplazo. El cálculo no elimina sesgos de selección, falta de respuesta ni errores de medición y no garantiza la calidad de cualquier encuesta.",
    "howItWorks": "n₀ = z²·p·(1−p)/e²; p y e son fracciones en la fórmula, pero los campos usan porcentajes y puntos porcentuales. Para N > 0, n = N·n₀/(N−1+n₀); el recuento final se redondea hacia arriba. N es un entero entre 0 y 9007199254740991: 0 significa población desconocida o muy grande, no su tamaño medido. Para N = 0 la fracción muestral es desconocida y se muestra con una raya. Con p = 0 o 1 la fórmula da cero formalmente: es un modelo degenerado, no una recomendación de no obtener respuestas. Cerca de esos extremos hay que evaluar aparte la aproximación normal.",
    "howToUse": [
      "El margen de error es la mitad de la anchura del intervalo: «±3 %» significa 3.",
      "Si se desconoce la proporción esperada, el 50 % da el tamaño mayor dentro de este modelo de aproximación normal para una proporción con muestreo aleatorio simple. No garantiza suficiencia para cualquier estudio ni elimina el sesgo de selección.",
      "Pon la población en cero cuando sea grande o desconocida: la corrección se queda entonces desactivada.",
      "El modelo supone muestreo aleatorio simple. Los diseños por conglomerados, cuotas u otros requieren evaluar aparte el plan de selección, los efectos del diseño y los sesgos; no existe aquí una regla universal de «más personas»."
    ],
    "example": "Con confianza del 95 %, margen de 5 puntos porcentuales y proporción prevista del 50 %, n₀ ≈ 384,1459 sin corrección se redondea hacia arriba a 385 respuestas. Para N = 500 conocido, la corrección da aproximadamente 217,4872, por lo que se necesitan 218 respuestas.",
    "faq": [
      {
        "q": "¿Por qué la muestra es mayor al 50 %?",
        "a": "p·(1−p) alcanza su máximo de 0,25 con p = 0,5. Con p = 0,1 o 0,9 vale 0,09: sin corrección finita el tamaño sin redondear es el 36 % del anterior, no exactamente un tercio. Por ejemplo, al 95 % con margen de cinco puntos se obtienen 139 respuestas en vez de 385. Es conservadurismo dentro del modelo, no protección contra sesgos."
      },
      {
        "q": "¿Por qué la muestra apenas depende del tamaño de la ciudad?",
        "a": "N no aparece en la fórmula sin corrección. Si la muestra es apreciable respecto a N conocido y se toma sin reemplazo, la corrección reduce el recuento: el ejemplo con N = 500 da 218 y no 385. No hay un umbral exacto universal a partir del cual el tamaño de la ciudad empiece de repente a importar."
      },
      {
        "q": "¿Cuánto cuesta pasar del 95 % al 99 %?",
        "a": "Sin corrección finita y con p y e fijos, el tamaño crece con z²: pasar del 95 % al 99 % multiplica el tamaño sin redondear por aproximadamente 1,727. Reducir el margen a la mitad lo multiplica por 4, un aumento mayor. Para una proporción del 50 % y margen de cinco puntos, los recuentos son 385 y 664."
      },
      {
        "q": "¿Sirve para pruebas A/B?",
        "a": "No: aquí se planifica la precisión de una proporción. Comparar dos variantes requiere un tamaño de efecto relevante, nivel de significación, potencia estadística y reparto entre grupos. Duplicar este resultado no constituye un cálculo de potencia de una prueba A/B."
      }
    ]
  }
} satisfies Record<'ru' | 'en' | 'uk' | 'de' | 'es', Partial<CalculatorCopy>>;
