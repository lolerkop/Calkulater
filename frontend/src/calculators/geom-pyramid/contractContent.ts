import type { CalculatorCopy } from '../../lib/platform/types';

type Body = Pick<CalculatorCopy, 'shortDescription' | 'seoDescription' | 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;

// Subject-specific retained and amended copy; source and calculation limits are explicit.
export const contractContent: Record<'ru'|'en'|'uk'|'de'|'es', Body> = {
  "ru": {
    "longDescription": "Апофем у пирамиды две, и путаница между ними — обычная ошибка. Апофема основания лежит плашмя внутри основания и идёт от его центра к середине стороны. Апофема боковой грани — это высота треугольной грани, отмеренная по наклонной поверхности, и именно она входит в площадь боковой поверхности. Вторая всегда длиннее первой, потому что образует гипотенузу с высотой пирамиды. Треть в формуле объёма — не приближение: любая пирамида и любой конус занимают ровно треть призмы или цилиндра, стоящих на том же основании при той же высоте.",
    "howToUse": [
      "Выберите единицу длины для всех вводимых величин.",
      "Укажите, сколько сторон у многоугольника основания.",
      "Введите длину одной стороны основания.",
      "Введите высоту по вертикали от основания до вершины.",
      "Задайте целое n от 3 до 100. Высота положительна и идёт перпендикулярно основанию; вершина расположена над его центром."
    ],
    "howItWorks": "Апофема основания = сторона ÷ (2 × tg(π ÷ n)). Апофема боковой грани — гипотенуза высоты и этой апофемы. Объём = площадь основания × высота ÷ 3.",
    "example": "Квадратная пирамида со стороной 6 см и высотой 9 см вмещает 108 см³ при апофеме 9,487 см.",
    "faq": [
      {
        "q": "Высоту мерить по вертикали или по грани?",
        "a": "По вертикали, от центра основания до вершины. Измерение по грани — это апофема, и она выдаётся результатом, а не берётся входом."
      },
      {
        "q": "Почему в объёме треть, а не половина?",
        "a": "Площадь параллельного сечения уменьшается как квадрат расстояния до вершины. Интегрирование даёт V = Bh/3, где B — площадь основания. Поэтому объём в три раза меньше призмы с тем же B и h; это не требует возможности сложить призму из трёх одинаковых копий этой пирамиды."
      },
      {
        "q": "Как проверить большую квадратную пирамиду?",
        "a": "Для условной квадратной пирамиды со стороной 230 м и высотой 146 м получаем 230²·146/3 = 2 574 466,67 м³. Это проверка формулы для заданных размеров, а не обмер исторического сооружения."
      },
      {
        "q": "А если вершина смещена от центра?",
        "a": "Формула объёма остаётся верной, но грани перестают быть одинаковыми, и единая апофема теряет смысл. Этот расчёт предполагает правильную пирамиду."
      }
    ],
    "shortDescription": "Объём, апофема и площади правильной пирамиды.",
    "seoDescription": "Рассчитайте объём, апофему, боковую и полную поверхность правильной пирамиды по числу сторон основания, стороне и высоте.",
    "disclaimer": "Правильное основание и вершина над его центром. Боковая апофема отличается от апофемы основания и бокового ребра. Полная поверхность включает основание; толщина и припуски не учитываются, единица не конвертируется автоматически."
  },
  "en": {
    "longDescription": "There are two apothems in a pyramid and confusing them is the usual error. The base apothem lies flat inside the base, running from its centre to the middle of a side. The slant height is the altitude of a triangular face, measured up the sloping surface, and it is the one that enters the lateral surface area. The second is always longer than the first because it is the hypotenuse formed with the pyramid's height. The third in the volume formula is not an approximation: any pyramid or cone occupies exactly a third of the prism or cylinder standing on the same base at the same height.",
    "howToUse": [
      "Choose the length unit for every input.",
      "Enter how many sides the base polygon has.",
      "Enter the length of one base side.",
      "Enter the vertical height from the base to the apex.",
      "Enter an integer n from 3 to 100. Positive height is perpendicular to the base, with the apex above its centre."
    ],
    "howItWorks": "Base apothem = side ÷ (2 × tan(π ÷ n)). Slant height is the hypotenuse of the height and that apothem. Volume = base area × height ÷ 3.",
    "example": "A square pyramid with a 6 cm side and 9 cm height holds 108 cm³ with a slant height of 9.487 cm.",
    "faq": [
      {
        "q": "Is the height measured vertically or along a face?",
        "a": "Vertically, from the centre of the base to the apex. The measurement along a face is the slant height, and it is returned as a result rather than taken as an input."
      },
      {
        "q": "Why is the volume a third rather than a half?",
        "a": "Parallel cross-sections shrink with the square of distance from the apex. Integration gives V = Bh/3, where B is base area. Thus volume is one third of a prism with the same B and h; this does not require that three identical copies of this pyramid tile that prism."
      },
      {
        "q": "How can I check a large square pyramid?",
        "a": "A hypothetical square pyramid with side 230 m and height 146 m has volume 230²·146/3 = 2,574,466.67 m³. This checks the formula for given dimensions; it is not a survey of a historical structure."
      },
      {
        "q": "What about a pyramid whose apex is off-centre?",
        "a": "The volume formula still holds, but the faces are no longer identical and the single slant height stops being meaningful. This calculation assumes a regular pyramid."
      }
    ],
    "shortDescription": "Volume, slant height and surface areas of a regular pyramid.",
    "seoDescription": "Calculate the volume, slant height, lateral and total surface of a regular pyramid from the base sides, side length and height.",
    "disclaimer": "A regular base with the apex above its centre. Face slant height differs from the base apothem and a lateral edge. Total surface includes the base; thickness and allowances are excluded, and units are not automatically converted."
  },
  "uk": {
    "longDescription": "Апофем у піраміди дві, і плутанина між ними — звична помилка. Апофема основи лежить плазом усередині основи й іде від її центра до середини сторони. Апофема бічної грані — це висота трикутної грані, відміряна по похилій поверхні, і саме вона входить у площу бічної поверхні. Друга завжди довша за першу, бо утворює гіпотенузу з висотою піраміди.",
    "howToUse": [
      "Виберіть одиницю довжини для всіх величин.",
      "Укажіть, скільки сторін має многокутник основи.",
      "Введіть довжину однієї сторони основи.",
      "Введіть висоту по вертикалі від основи до вершини.",
      "Задайте ціле n від 3 до 100. Додатна висота перпендикулярна основі; вершина розташована над її центром."
    ],
    "howItWorks": "Апофема основи дорівнює a ÷ (2 · tg(π ÷ n)). Апофема бічної грані є гіпотенузою висоти піраміди й цієї апофеми. Об’єм дорівнює площі основи, помноженій на висоту й поділеній на три: будь-яка піраміда займає рівно третину призми з тією самою основою й висотою.",
    "example": "Квадратна піраміда зі стороною 6 см і висотою 9 см вміщує 108 см³, а апофема її бічної грані дорівнює 9,487 см.",
    "faq": [
      {
        "q": "Які апофеми має піраміда?",
        "a": "Дві. Апофема основи лежить усередині основи й іде від центра до середини сторони. Апофема бічної грані — висота трикутної грані по похилій поверхні. У площу бічної поверхні входить друга."
      },
      {
        "q": "Чому в об’ємі стоїть трійка?",
        "a": "Бо піраміда займає рівно третину призми з такою самою основою й висотою. Це точний множник, а не наближення: те саме співвідношення діє для конуса й циліндра."
      },
      {
        "q": "Яку висоту вводити?",
        "a": "Вертикальну — від площини основи до вершини. Довжина бічного ребра й апофема грані більші за неї, і підстановка будь-якої з них завищить об’єм."
      },
      {
        "q": "Скільки сторін може мати основа?",
        "a": "Ціле число від 3 до 100 — це діапазон цієї сторінки. Основа завжди правильна: усі сторони та кути рівні. Дробове число відхиляється без округлення."
      }
    ],
    "shortDescription": "Об’єм, апофема та площі правильної піраміди.",
    "seoDescription": "Розрахунок об’єму, апофеми, бічної та повної поверхні правильної піраміди за кількістю сторін основи, стороною та висотою.",
    "disclaimer": "Правильна основа й вершина над її центром. Бічна апофема відрізняється від апофеми основи та бічного ребра. Повна поверхня містить основу; товщина й припуски не враховані, одиниці автоматично не переводяться."
  },
  "de": {
    "longDescription": "In einer Pyramide gibt es zwei Apothemen, und sie zu verwechseln ist der übliche Fehler. Die Apothema der Grundfläche liegt flach in ihr und läuft von der Mitte zur Mitte einer Seite. Die Seitenhöhe ist die Höhe einer dreieckigen Seitenfläche, entlang der Schräge gemessen, und sie geht in die Mantelfläche ein. Die zweite ist stets länger als die erste, weil sie mit der Höhe der Pyramide die Hypotenuse bildet. Das Drittel in der Volumenformel ist keine Näherung: jede Pyramide und jeder Kegel nimmt genau ein Drittel des Prismas beziehungsweise Zylinders ein, der auf derselben Grundfläche in derselben Höhe steht.",
    "howToUse": [
      "Wähle die Längeneinheit für alle Eingaben.",
      "Trage ein, wie viele Seiten das Grundvieleck hat.",
      "Trage die Länge einer Grundseite ein.",
      "Trage die senkrechte Höhe von der Grundfläche zur Spitze ein.",
      "Gib ganzzahliges n von 3 bis 100 ein. Die positive Höhe steht senkrecht auf der Grundfläche; die Spitze liegt über deren Mitte."
    ],
    "howItWorks": "Apothema der Grundfläche = Seite ÷ (2 × tan(π ÷ n)). Die Seitenhöhe ist die Hypotenuse aus Höhe und dieser Apothema. Volumen = Grundfläche × Höhe ÷ 3.",
    "example": "Eine Pyramide mit quadratischer Grundfläche, 6 cm Seite und 9 cm Höhe fasst 108 cm³ bei einer Seitenhöhe von 9,487 cm.",
    "faq": [
      {
        "q": "Wird die Höhe senkrecht oder entlang einer Seitenfläche gemessen?",
        "a": "Senkrecht, von der Mitte der Grundfläche zur Spitze. Das Maß entlang einer Seitenfläche ist die Seitenhöhe, und die wird als Ergebnis geliefert und nicht als Eingabe genommen."
      },
      {
        "q": "Warum ein Drittel und nicht die Hälfte?",
        "a": "Parallele Querschnitte schrumpfen mit dem Quadrat des Abstands zur Spitze. Integration ergibt V = Bh/3 mit Grundfläche B. Das Volumen ist daher ein Drittel eines Prismas mit gleichem B und h; dafür müssen nicht drei identische Kopien dieser Pyramide das Prisma ausfüllen können."
      },
      {
        "q": "Wie prüfe ich eine große quadratische Pyramide?",
        "a": "Eine gedachte quadratische Pyramide mit Seite 230 m und Höhe 146 m hat das Volumen 230²·146/3 = 2 574 466,67 m³. Das prüft die Formel für vorgegebene Maße und ist keine Vermessung eines historischen Bauwerks."
      },
      {
        "q": "Und bei einer Pyramide mit außermittiger Spitze?",
        "a": "Die Volumenformel gilt weiter, aber die Seitenflächen sind nicht mehr gleich, und eine einzelne Seitenhöhe verliert ihren Sinn. Diese Rechnung geht von einer regelmäßigen Pyramide aus."
      }
    ],
    "shortDescription": "Volumen, Seitenhöhe und Flächen einer regelmäßigen Pyramide.",
    "seoDescription": "Berechne Volumen, Seitenhöhe, Mantel- und Gesamtoberfläche einer regelmäßigen Pyramide aus Grundseitenzahl, Seitenlänge und Höhe.",
    "disclaimer": "Regelmäßige Grundfläche mit Spitze über ihrem Mittelpunkt. Die Seitenhöhe unterscheidet sich von Grundapothem und Seitenkante. Die Gesamtoberfläche enthält die Grundfläche; Wandstärke und Zugaben fehlen, Einheiten werden nicht automatisch umgerechnet."
  },
  "es": {
    "longDescription": "En una pirámide hay dos apotemas y confundirlas es el error habitual. La apotema de la base está contenida en el plano de la base y va de su centro al punto medio de un lado. La apotema lateral es la altura de una cara triangular, medida por la superficie inclinada, y es la que entra en la superficie lateral. La segunda siempre es más larga que la primera porque es la hipotenusa que forma con la altura de la pirámide. El tercio de la fórmula del volumen no es una aproximación: cualquier pirámide o cono ocupa exactamente un tercio del prisma o del cilindro levantado sobre la misma base y con la misma altura.",
    "howToUse": [
      "Elige la unidad de longitud para todas las entradas.",
      "Introduce cuántos lados tiene el polígono de la base.",
      "Introduce la longitud de un lado de la base.",
      "Introduce la altura vertical desde la base hasta el vértice.",
      "Introduce un entero n entre 3 y 100. La altura positiva es perpendicular a la base y el vértice está sobre su centro."
    ],
    "howItWorks": "Apotema de la base = lado ÷ (2 × tan(π ÷ n)). La apotema lateral es la hipotenusa formada por la altura y esa apotema. Volumen = área de la base × altura ÷ 3.",
    "example": "Una pirámide de base cuadrada con 6 cm de lado y 9 cm de altura contiene 108 cm³ y tiene una apotema lateral de 9,487 cm.",
    "faq": [
      {
        "q": "¿La altura se mide en vertical o por una cara?",
        "a": "En vertical, desde el centro de la base hasta el vértice. La medida por la cara es la apotema lateral, y aparece como resultado en lugar de pedirse como entrada."
      },
      {
        "q": "¿Por qué el volumen es un tercio y no la mitad?",
        "a": "Las secciones paralelas disminuyen con el cuadrado de la distancia al vértice. Al integrar se obtiene V = Bh/3, con B el área de base. El volumen es un tercio del prisma con el mismo B y h; no hace falta que tres copias idénticas de esta pirámide llenen ese prisma."
      },
      {
        "q": "¿Cómo compruebo una pirámide cuadrada grande?",
        "a": "Una pirámide cuadrada hipotética con lado de 230 m y altura de 146 m tiene volumen 230²·146/3 = 2 574 466,67 m³. Es una comprobación de la fórmula para esas medidas, no un levantamiento de un edificio histórico."
      },
      {
        "q": "¿Y una pirámide con el vértice descentrado?",
        "a": "La fórmula del volumen sigue valiendo, pero las caras dejan de ser idénticas y una única apotema lateral pierde sentido. Este cálculo supone una pirámide regular."
      }
    ],
    "shortDescription": "Volumen, apotema lateral y superficies de una pirámide regular.",
    "seoDescription": "Calcula el volumen, la apotema lateral y las superficies lateral y total de una pirámide regular a partir de los lados de la base, el lado y la altura.",
    "disclaimer": "Base regular con el vértice sobre su centro. La apotema lateral difiere de la apotema de base y de una arista lateral. La superficie total incluye la base; no se incluyen espesor ni márgenes y no se convierten unidades automáticamente."
  }
};
