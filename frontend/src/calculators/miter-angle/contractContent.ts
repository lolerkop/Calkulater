import type { CalculatorCopy } from '../../lib/platform/types';

// Actual 145 native body individually reviewed; scoped model and input corrections. Agent review is not human approval.
export const buildingWave13ContractContent = {
  "ru": {
    "longDescription": "Считает симметричное плоское соединение двух планок одинаковой ширины под углом больше 0 и меньше 180°. Угол реза измеряется относительно продольной оси планки. Отдельная строка показывает отклонение от поперечного реза: это настройка для шкалы, на которой прямой поперечный рез равен нулю. Проверьте соглашение шкалы своей пилы.",
    "howItWorks": "Угол реза α=θ/2; отклонение пилы от поперечного реза β=(180°−θ)/2=90°−α. θ — положительный конечный угол строго меньше 180°, дробные градусы допустимы. Детали зеркальны. Не рассчитываются соединения разной ширины, пространственные составные резы или рефлексные углы θ≥180°.",
    "howToUse": [
      "Меряйте фактический угол стен угломером: в домах прямой угол редко бывает ровно прямым.",
      "На шкалу торцовочной пилы идёт значение из строки «Угол на пиле от 90°», а не сам угол реза.",
      "Обе планки режутся зеркально: одна влево, другая вправо от той же установки.",
      "Для потолочного плинтуса под наклоном нужен ещё и угол наклона — простой рез по этой формуле даст щель."
    ],
    "example": "Прямой угол 90° даёт классический ус: рез 45°, на пиле тоже 45°.",
    "faq": [
      {
        "q": "Почему на пиле другое число?",
        "a": "Строка пилы означает отклонение от поперечного реза, которому на рассматриваемой шкале соответствует 0°. Рез 67,5° относительно длины даёт отклонение 22,5°; для θ=90° обе величины случайно равны 45°."
      },
      {
        "q": "Почему рез не сходится в реальном углу?",
        "a": "Потому что стены редко стоят ровно под 90°. Разница даже в два градуса даёт заметную щель на широком плинтусе — поэтому угол меряют угломером на месте, а не берут из чертежа."
      },
      {
        "q": "Годится ли это для потолочного плинтуса?",
        "a": "Только для реза в плоскости. Потолочный галтель стоит под наклоном к обеим поверхностям, и там нужен составной рез — угол поворота вместе с углом наклона пилы."
      },
      {
        "q": "Что делать с очень острым углом?",
        "a": "Геометрия остаётся той же в области 0<θ<180°, но доступный диапазон и способ выполнения зависят от инструмента и детали. Универсальной рекомендации заменять соединение при 30° здесь нет."
      }
    ]
  },
  "en": {
    "longDescription": "Calculates a symmetric flat joint of two equal-width pieces at an angle greater than 0 and less than 180°. The cut angle is measured from the piece’s lengthwise axis. A separate row gives deviation from a crosscut, suitable for a scale where a square crosscut is zero. Check your saw’s scale convention.",
    "howItWorks": "Cut angle α=θ/2; saw deviation from a crosscut β=(180°−θ)/2=90°−α. θ is positive and finite, strictly below 180°; fractional degrees are allowed. Pieces are mirrored. Unequal-width joints, spatial compound cuts and reflex angles θ≥180° are not calculated.",
    "howToUse": [
      "Measure the actual wall angle with a protractor: in real rooms a right angle is rarely exactly right.",
      "The mitre saw scale takes the \"saw setting from 90°\" row, not the cut angle itself.",
      "The two pieces are cut mirrored: one to the left, one to the right of the same setting.",
      "Crown moulding sitting at a tilt also needs a bevel angle — a flat cut by this formula will leave a gap."
    ],
    "example": "A 90° corner gives the classic mitre: a 45° cut, and 45° on the saw too.",
    "faq": [
      {
        "q": "Why is the saw number different?",
        "a": "The saw row is deviation from a square crosscut, which is 0° on the assumed scale. A cut at 67.5° from the lengthwise axis means a 22.5° deviation; for θ=90° both happen to be 45°."
      },
      {
        "q": "Why does the cut not meet in a real corner?",
        "a": "Because walls are rarely at a true 90°. Even two degrees out leaves a visible gap on wide skirting — which is why the angle is measured on site rather than taken off a drawing."
      },
      {
        "q": "Does this cover crown moulding?",
        "a": "Only for a flat cut. Crown sits tilted to both surfaces and needs a compound cut — the mitre angle together with a bevel angle on the saw."
      },
      {
        "q": "What about a very sharp corner?",
        "a": "The same geometry applies for 0<θ<180°, but tool range and how the cut is made depend on the saw and piece. There is no universal rule to replace the joint at 30°."
      }
    ],
    "disclaimer": "Results are reference estimates. Verify the inputs before making important decisions."
  },
  "uk": {
    "longDescription": "Рахує симетричне плоске з’єднання двох планок однакової ширини під кутом понад 0 і менш ніж 180°. Кут різу відлічується від поздовжньої осі планки. Окремий рядок показує відхилення від поперечного різу для шкали, де прямий поперечний різ дорівнює нулю. Перевірте шкалу своєї пилки.",
    "howItWorks": "Кут різу α=θ/2; відхилення пилки від поперечного різу β=(180°−θ)/2=90°−α. θ — додатний скінченний кут строго менший за 180°, дробові градуси допустимі. Деталі дзеркальні. Різні ширини, просторові складені різи та рефлексні кути θ≥180° не розраховуються.",
    "howToUse": [
      "Виміряйте фактичний кут стику стін.",
      "Введіть його в градусах.",
      "Прочитайте кут різу й значення для шкали пили."
    ],
    "example": "Прямий кут 90° дає класичний вус: різ 45°, і на пилі теж 45°. А кут стику 135° дасть різ 67,5°, і на пилі треба виставити 22,5°.",
    "faq": [
      {
        "q": "Чому на пилі інше число?",
        "a": "Рядок пилки — відхилення від поперечного різу, якому на прийнятій шкалі відповідає 0°. Різ 67,5° від поздовжньої осі дає відхилення 22,5°; за θ=90° обидві величини випадково рівні 45°."
      },
      {
        "q": "Чому кут стику рідко буває рівно 90°?",
        "a": "Бо стіни майже ніколи не бувають ідеально прямокутними. Різниця в два-три градуси дає помітну щілину на вусі, тому кут варто вимірювати, а не припускати."
      },
      {
        "q": "Як виміряти фактичний кут?",
        "a": "Кутоміром або малкою з наступним заміром транспортиром. Можна й геометрично: відкласти по 30 см від кута вздовж обох стін і виміряти відстань між точками."
      },
      {
        "q": "Що робити з зовнішнім кутом?",
        "a": "Зовнішні кути потребують правильного вибору орієнтації деталей. Безпосередній ввід 270° не підтримується і не дає 45° за θ/2. Для симетричного прямокутного плоского з’єднання вводиться θ=90° та отримуються 45°."
      }
    ],
    "disclaimer": "Результати є орієнтовними оцінками. Перед важливими рішеннями перевіряйте дані."
  },
  "de": {
    "longDescription": "Berechnet eine symmetrische ebene Verbindung zweier gleich breiter Leisten bei einem Winkel größer als 0 und kleiner als 180°. Der Schnittwinkel wird von der Längsachse gemessen. Eine eigene Zeile zeigt die Abweichung vom Querschnitt für eine Skala, bei der ein rechtwinkliger Querschnitt null ist. Prüfe die Skalenkonvention deiner Säge.",
    "howItWorks": "Schnittwinkel α=θ/2; Abweichung vom Querschnitt β=(180°−θ)/2=90°−α. θ ist positiv und endlich, strikt kleiner als 180°; Bruchteile von Grad sind erlaubt. Die Teile sind spiegelbildlich. Unterschiedliche Breiten, räumliche zusammengesetzte Schnitte und überstumpfe Winkel θ≥180° werden nicht berechnet.",
    "howToUse": [
      "Miss den tatsächlichen Wandwinkel mit einem Winkelmesser: in echten Räumen ist ein rechter Winkel selten genau recht.",
      "Die Skala der Kappsäge nimmt die Zeile „Einstellung an der Säge ab 90°“ und nicht den Schnittwinkel selbst.",
      "Die beiden Stücke werden spiegelbildlich geschnitten: eines links, eines rechts derselben Einstellung.",
      "Eine geneigt sitzende Zierleiste braucht zusätzlich einen Neigungswinkel — ein flacher Schnitt nach dieser Formel lässt eine Fuge."
    ],
    "example": "Eine Ecke von 90° ergibt die klassische Gehrung: ein Schnitt von 45°, und an der Säge ebenfalls 45°.",
    "faq": [
      {
        "q": "Warum ist die Zahl an der Säge eine andere?",
        "a": "Die Sägezeile bezeichnet die Abweichung vom rechtwinkligen Querschnitt, der auf der angenommenen Skala 0° ist. Ein Schnitt mit 67,5° zur Länge ergibt 22,5° Abweichung; bei θ=90° sind beide zufällig 45°."
      },
      {
        "q": "Warum trifft der Schnitt in einer echten Ecke nicht?",
        "a": "Weil Wände selten genau 90° haben. Schon zwei Grad Abweichung lassen bei breiten Sockelleisten eine sichtbare Fuge — deshalb wird der Winkel vor Ort gemessen und nicht aus einer Zeichnung genommen."
      },
      {
        "q": "Deckt das Zierleisten an der Decke ab?",
        "a": "Nur für einen flachen Schnitt. Eine Deckenleiste sitzt zu beiden Flächen geneigt und braucht einen Doppelschnitt — den Gehrungswinkel zusammen mit einem Neigungswinkel an der Säge."
      },
      {
        "q": "Und bei einer sehr spitzen Ecke?",
        "a": "Die Geometrie gilt für 0<θ<180°; verfügbarer Werkzeugbereich und Ausführung hängen jedoch von Säge und Werkstück ab. Es gibt keine allgemeine Regel, die Verbindung bei 30° zu ersetzen."
      }
    ],
    "disclaimer": "Die Ergebnisse sind Orientierungswerte. Prüfe die Eingaben vor wichtigen Entscheidungen."
  },
  "es": {
    "longDescription": "Calcula una unión plana simétrica de dos piezas del mismo ancho con un ángulo mayor que 0 y menor que 180°. El ángulo de corte se mide desde el eje longitudinal. Otra fila indica la desviación del corte transversal para una escala donde el corte perpendicular es cero. Comprueba la convención de tu sierra.",
    "howItWorks": "Ángulo de corte α=θ/2; desviación del corte transversal β=(180°−θ)/2=90°−α. θ es positivo y finito, estrictamente menor que 180°; se admiten grados fraccionarios. Las piezas son simétricas. No se calculan uniones de anchos distintos, cortes compuestos espaciales ni ángulos reflejos θ≥180°.",
    "howToUse": [
      "Mide el ángulo real de la pared con un transportador: en habitaciones reales un ángulo recto rara vez es exactamente recto.",
      "La escala de la ingletadora toma la fila «ajuste de la sierra desde 90°», no el ángulo de corte en sí.",
      "Las dos piezas se cortan en espejo: una a la izquierda y otra a la derecha del mismo ajuste.",
      "Una moldura de techo colocada inclinada necesita además un ángulo de bisel: un corte plano con esta fórmula dejará hueco."
    ],
    "example": "Una esquina de 90° da el inglete clásico: un corte de 45°, y también 45° en la sierra.",
    "faq": [
      {
        "q": "¿Por qué el número de la sierra es distinto?",
        "a": "La fila de sierra es la desviación del corte perpendicular, que vale 0° en la escala supuesta. Un corte de 67,5° desde el eje longitudinal corresponde a 22,5° de desviación; con θ=90° ambos coinciden en 45°."
      },
      {
        "q": "¿Por qué el corte no encaja en una esquina real?",
        "a": "Porque las paredes rara vez están a 90° exactos. Aun dos grados de desviación dejan un hueco visible en un rodapié ancho, y por eso el ángulo se mide en obra y no se toma de un plano."
      },
      {
        "q": "¿Sirve para molduras de techo?",
        "a": "Solo para un corte plano. Una moldura de techo se apoya inclinada contra ambas superficies y necesita un corte compuesto: el ángulo de inglete junto con un ángulo de bisel en la sierra."
      },
      {
        "q": "¿Y una esquina muy cerrada?",
        "a": "La geometría vale para 0<θ<180°, pero el rango y la ejecución dependen de la sierra y la pieza. No hay una regla universal para sustituir la unión a 30°."
      }
    ],
    "disclaimer": "Los resultados son estimaciones orientativas. Verifica los datos de partida antes de tomar decisiones importantes."
  }
} satisfies Record<'ru'|'en'|'uk'|'de'|'es', Partial<CalculatorCopy>>;
