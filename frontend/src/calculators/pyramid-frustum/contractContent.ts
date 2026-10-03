import type { CalculatorCopy } from '../../lib/platform/types';

type Body = Pick<CalculatorCopy, 'shortDescription' | 'seoDescription' | 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;

// Subject-specific retained and amended copy; source and calculation limits are explicit.
export const contractContent: Record<'ru'|'en'|'uk'|'de'|'es', Body> = {
  "ru": {
    "longDescription": "Усечённая пирамида здесь имеет квадратные параллельные основания с общей центральной осью. Две стороны оснований и перпендикулярная высота вводятся в сантиметрах. Сторона сечения меняется линейно, а площадь — квадратично, поэтому V = h(a²+ab+b²)/3. Средняя арифметическая площадей на высоту завышает объём на h(a−b)²/6. Апофема идёт по середине боковой грани и отличается от вертикальной высоты.",
    "howToUse": [
      "Введите положительные стороны двух квадратных оснований и высоту в сантиметрах.",
      "Основания должны быть параллельными, подобными и соосными; высота перпендикулярна им.",
      "Основания могут быть указаны в любом порядке: верхнее может быть больше нижнего. Равные стороны здесь отклоняются как случай призмы.",
      "Объём показан в см³, поверхности и строка площадей оснований — в см². Для литров разделите см³ на 1000."
    ],
    "howItWorks": "Объём h/3·(S₁ + S₂ + √(S₁·S₂)); апофема √(h² + ((a−b)/2)²); боковая поверхность 2·(a+b)·апофема.",
    "example": "При a = 10 см, b = 6 см и h = 8 см объём 522,67 см³, апофема 8,246 см, боковая поверхность 263,88 см², полная 399,88 см². Площади оснований — 100 и 36 см².",
    "faq": [
      {
        "q": "Почему нельзя взять среднюю площадь и умножить на высоту?",
        "a": "При a = 10, b = 6, h = 8 см средняя площадь даёт 544 см³, а точный геометрический объём — 522,67 см³. Разность h(a−b)²/6 = 21,33 см³ положительна. Сечения между основаниями меньше линейной интерполяции их площадей."
      },
      {
        "q": "Чем апофема отличается от высоты?",
        "a": "Высота идёт по оси, апофема — по середине боковой грани от кромки до кромки. Апофема всегда длиннее, и именно она нужна, чтобы посчитать площадь боковой грани."
      },
      {
        "q": "Как считать усечённую пирамиду с прямоугольными основаниями?",
        "a": "Для усечённой пирамиды с подобными параллельными прямоугольными основаниями объём также равен h(S₁+√(S₁S₂)+S₂)/3. Произвольные прямоугольники без общего коэффициента масштаба этим условием не описываются; для поверхности нужны две различные апофемы."
      },
      {
        "q": "Где встречается такая форма?",
        "a": "Фундаментные подушки, бункеры и воронки, абажуры, а также классическая архитектура — от зиккуратов до постаментов. Объём нужен для бетона, боковая поверхность — для обшивки."
      }
    ],
    "shortDescription": "Объём, апофема и поверхности усечённой пирамиды с квадратными основаниями.",
    "seoDescription": "Рассчитайте объём, апофему, боковую и полную поверхность усечённой пирамиды с квадратными основаниями.",
    "disclaimer": "Квадратные соосные основания, положительные неравные стороны и перпендикулярная высота. Единица ввода фиксирована: сантиметры. Геометрическая формула не включает толщину стенок, расход материалов, армирование или строительные допуски."
  },
  "en": {
    "longDescription": "This pyramid frustum has parallel square bases with a common central axis. Both base side lengths and perpendicular height are entered in centimetres. Cross-section side length changes linearly and area quadratically, giving V = h(a²+ab+b²)/3. Averaging the two base areas and multiplying by height overstates volume by h(a−b)²/6. Slant height follows the middle of a lateral face and differs from vertical height.",
    "howToUse": [
      "Enter positive side lengths of the two square bases and height in centimetres.",
      "Bases must be parallel, similar and centred on one axis; height is perpendicular to them.",
      "Either base order is accepted, including a larger upper base. Equal sides are rejected here as the prism case.",
      "Volume is in cm³; surfaces and the base-area pair are in cm². Divide cm³ by 1000 for litres."
    ],
    "howItWorks": "Volume h/3·(S₁ + S₂ + √(S₁·S₂)); slant height √(h² + ((a−b)/2)²); lateral area 2·(a+b)·slant height.",
    "example": "For a = 10 cm, b = 6 cm and h = 8 cm, volume is 522.67 cm³, slant height 8.246 cm, lateral area 263.88 cm² and total area 399.88 cm². Base areas are 100 and 36 cm².",
    "faq": [
      {
        "q": "Why not average the base areas and multiply by the height?",
        "a": "With a = 10, b = 6 and h = 8 cm, averaging areas gives 544 cm³ while geometric volume is 522.67 cm³. Their difference h(a−b)²/6 = 21.33 cm³ is positive. Intermediate cross-sections are smaller than linear interpolation of the base areas."
      },
      {
        "q": "How does slant height differ from height?",
        "a": "The height runs along the axis, the slant height along the middle of a face from edge to edge. The slant height is always longer, and it is what the face area is computed from."
      },
      {
        "q": "What about rectangular bases?",
        "a": "For a pyramid frustum with similar parallel rectangular bases, volume is also h(S₁+√(S₁S₂)+S₂)/3. Arbitrary rectangles without one shared scale factor do not meet that condition; surface area needs two different slant heights."
      },
      {
        "q": "Where does this shape appear?",
        "a": "Foundation pads, hoppers and funnels, lampshades, and classical architecture from ziggurats to pedestals. The volume is for concrete, the lateral area for cladding."
      }
    ],
    "shortDescription": "Volume, slant height and surfaces of a square pyramid frustum.",
    "seoDescription": "Compute the volume, slant height, lateral and total surface of a truncated pyramid with square bases.",
    "disclaimer": "Square centred bases, positive unequal sides and perpendicular height. Input unit is fixed: centimetres. The geometric formula excludes wall thickness, material allowance, reinforcement and construction tolerances."
  },
  "uk": {
    "longDescription": "Зрізана піраміда тут має квадратні паралельні основи зі спільною центральною віссю. Сторони обох основ і перпендикулярна висота вводяться в сантиметрах. Сторона перерізу змінюється лінійно, площа — квадратично, тому V = h(a²+ab+b²)/3. Середня арифметична площ основ на висоту завищує об’єм на h(a−b)²/6. Апофема проходить серединою бічної грані й відрізняється від вертикальної висоти.",
    "howToUse": [
      "Уведіть додатні сторони двох квадратних основ і висоту в сантиметрах.",
      "Основи мають бути паралельними, подібними й співвісними; висота перпендикулярна їм.",
      "Порядок основ може бути будь-яким, зокрема верхня більша за нижню. Рівні сторони тут відхиляються як випадок призми.",
      "Об’єм має см³, поверхні й пара площ основ — см². Для літрів поділіть см³ на 1000."
    ],
    "howItWorks": "Об’єм дорівнює h/3 · (S₁ + S₂ + √(S₁·S₂)), де S₁ і S₂ — площі нижньої та верхньої основ. Апофема бічної грані рахується за різницею половин сторін: √(h² + ((a − b)/2)²). Бічна поверхня дорівнює 2 · (a + b) · апофема.",
    "example": "Для a = 10 см, b = 6 см та h = 8 см об’єм 522,67 см³, апофема 8,246 см, бічна поверхня 263,88 см², повна 399,88 см². Площі основ — 100 та 36 см².",
    "faq": [
      {
        "q": "Чому не можна взяти середню площу основ?",
        "a": "Для a = 10, b = 6, h = 8 см середня площа дає 544 см³, а геометричний об’єм — 522,67 см³. Різниця h(a−b)²/6 = 21,33 см³ додатна. Проміжні перерізи менші за лінійну інтерполяцію площ основ."
      },
      {
        "q": "Яку висоту брати для зрізаної піраміди?",
        "a": "Вертикальну відстань між основами по осі. По бічній грані йде апофема, вона довша, і підстановка апофеми завищить об’єм."
      },
      {
        "q": "Що буде, якщо основи однакові?",
        "a": "Це вже призма, а не зрізана піраміда, і калькулятор про це повідомить. Для призми об’єм рахується простіше: площа основи на висоту."
      },
      {
        "q": "Чи можна рахувати прямокутні основи?",
        "a": "Тут основи квадратні. Формула h(S₁+√(S₁S₂)+S₂)/3 також працює для подібних паралельних прямокутних основ, але не для довільних прямокутників із різними коефіцієнтами масштабу. Для поверхні потрібні дві апофеми."
      }
    ],
    "shortDescription": "Обʼєм, апофема та поверхні зрізаної піраміди з квадратними основами.",
    "seoDescription": "Розрахуйте обʼєм, апофему, бічну та повну поверхню зрізаної піраміди з квадратними основами.",
    "disclaimer": "Квадратні співвісні основи, додатні нерівні сторони й перпендикулярна висота. Одиниця вводу фіксована: сантиметри. Геометрична формула не містить товщини стінок, витрати матеріалів, армування чи будівельних допусків."
  },
  "de": {
    "longDescription": "Dieser Pyramidenstumpf hat parallele quadratische Flächen mit gemeinsamer Mittelachse. Beide Seitenlängen und die senkrechte Höhe werden in Zentimetern eingegeben. Die Querschnittsseite ändert sich linear, ihre Fläche quadratisch: V = h(a²+ab+b²)/3. Der Mittelwert der Grundflächen mal Höhe setzt das Volumen um h(a−b)²/6 zu hoch an. Die Seitenhöhe verläuft in der Mitte einer Mantelfläche und unterscheidet sich von der senkrechten Höhe.",
    "howToUse": [
      "Gib positive Seiten der beiden Quadratflächen und die Höhe in Zentimetern ein.",
      "Die Flächen müssen parallel, ähnlich und zentriert auf einer Achse liegen; die Höhe steht senkrecht darauf.",
      "Beide Größenreihenfolgen sind möglich, auch eine größere obere Fläche. Gleiche Seiten werden hier als Prismafall abgewiesen.",
      "Volumen steht in cm³; Oberflächen und beide Grundflächenwerte stehen in cm². Für Liter teile cm³ durch 1000."
    ],
    "howItWorks": "Das Volumen ist V = h ÷ 3 × (a² + a × b + b²) mit den Kantenlängen a und b. Die Seitenhöhe folgt aus dem Satz des Pythagoras über der halben Kantendifferenz: m = √(h² + ((a − b) ÷ 2)²). Die Mantelfläche ist 2 × (a + b) × m, die Gesamtoberfläche zusätzlich um beide Quadrate größer.",
    "example": "Bei a = 10 cm, b = 6 cm und h = 8 cm beträgt das Volumen 522,67 cm³, die Seitenhöhe 8,246 cm, die Mantelfläche 263,88 cm² und die Gesamtoberfläche 399,88 cm². Die Grundflächen sind 100 und 36 cm².",
    "faq": [
      {
        "q": "Warum steht im Volumen a² + a × b + b²?",
        "a": "Die Querschnittsseite ist a+(b−a)z/h. Das Integral ihres Quadrats über 0 bis h ergibt h(a²+ab+b²)/3. Der einfache Flächenmittelwert ist dagegen um h(a−b)²/6 zu groß; bei 10, 6 und 8 cm sind es 544 statt 522,67 cm³."
      },
      {
        "q": "Ist die Seitenhöhe dasselbe wie die Höhe?",
        "a": "Nein. Die Höhe steht senkrecht zwischen den beiden Flächen, die Seitenhöhe verläuft in der Mantelfläche schräg nach außen und ist deshalb immer länger."
      },
      {
        "q": "Was passiert, wenn die Deckfläche null wird?",
        "a": "Im mathematischen Grenzfall b = 0 wird die Formel V = ha²/3 zur vollständigen Pyramide. Diese Seite verlangt jedoch beide Seiten positiv und ungleich; für b = 0 verwende den Pyramidenrechner."
      },
      {
        "q": "Gilt die Rechnung auch für rechteckige Flächen?",
        "a": "Dieser Rechner setzt quadratische Flächen voraus. Die Volumenformel h(S₁+√(S₁S₂)+S₂)/3 gilt auch für ähnliche parallele Rechtecke, nicht für beliebige Rechtecke ohne gemeinsamen Maßstabsfaktor. Die Oberfläche benötigt zwei verschiedene Seitenhöhen."
      }
    ],
    "shortDescription": "Volumen, Seitenhöhe und Oberflächen eines quadratischen Pyramidenstumpfs.",
    "seoDescription": "Berechne Volumen, Seitenhöhe, Mantel- und Gesamtoberfläche eines Pyramidenstumpfs mit quadratischen Grundflächen.",
    "disclaimer": "Quadratische zentrierte Flächen, positive ungleiche Seiten und senkrechte Höhe. Die Eingabeeinheit ist fest: Zentimeter. Die geometrische Formel enthält keine Wandstärke, Materialzugaben, Bewehrung oder Bautoleranzen."
  },
  "es": {
    "longDescription": "Este tronco de pirámide tiene bases cuadradas paralelas con eje central común. Los dos lados de base y la altura perpendicular se introducen en centímetros. El lado de cada sección cambia linealmente y su área, cuadráticamente: V = h(a²+ab+b²)/3. Promediar las áreas de base y multiplicar por la altura sobrestima el volumen en h(a−b)²/6. La apotema lateral sigue el centro de una cara y difiere de la altura perpendicular.",
    "howToUse": [
      "Introduce lados positivos de las dos bases cuadradas y altura en centímetros.",
      "Las bases deben ser paralelas, semejantes y centradas sobre un eje; la altura es perpendicular a ellas.",
      "Se admite cualquier orden, incluida una base superior mayor. Lados iguales se rechazan aquí como caso de prisma.",
      "El volumen está en cm³; las superficies y el par de áreas de base, en cm². Divide cm³ entre 1000 para litros."
    ],
    "howItWorks": "Volumen h/3·(S₁ + S₂ + √(S₁·S₂)); apotema lateral √(h² + ((a−b)/2)²); superficie lateral 2·(a+b)·apotema lateral.",
    "example": "Para a = 10 cm, b = 6 cm y h = 8 cm, el volumen es 522,67 cm³, la apotema lateral 8,246 cm, el área lateral 263,88 cm² y la total 399,88 cm². Las áreas de base son 100 y 36 cm².",
    "faq": [
      {
        "q": "¿Por qué no promediar las áreas de las bases y multiplicar por la altura?",
        "a": "Con a = 10, b = 6 y h = 8 cm, el promedio de áreas da 544 cm³ y el volumen geométrico, 522,67 cm³. La diferencia h(a−b)²/6 = 21,33 cm³ es positiva. Las secciones intermedias son menores que la interpolación lineal de las áreas de base."
      },
      {
        "q": "¿En qué se diferencian la apotema lateral y la altura?",
        "a": "La altura va por el eje y la apotema lateral, por el centro de una cara de borde a borde. La apotema lateral siempre es más larga, y es con la que se calcula el área de la cara."
      },
      {
        "q": "¿Y con bases rectangulares?",
        "a": "Para un tronco de pirámide con bases rectangulares paralelas y semejantes, el volumen también es h(S₁+√(S₁S₂)+S₂)/3. Rectángulos arbitrarios sin un factor común de escala no cumplen esa condición; la superficie requiere dos apotemas laterales."
      },
      {
        "q": "¿Dónde aparece esta figura?",
        "a": "En zapatas de cimentación, tolvas y embudos, pantallas de lámpara y en la arquitectura clásica, de los zigurats a los pedestales. El volumen sirve para el hormigón y la superficie lateral, para el revestimiento."
      }
    ],
    "shortDescription": "Volumen, apotema lateral y superficies de un tronco de pirámide de base cuadrada.",
    "seoDescription": "Calcula el volumen, la apotema lateral y las superficies lateral y total de un tronco de pirámide con bases cuadradas.",
    "disclaimer": "Bases cuadradas centradas, lados positivos distintos y altura perpendicular. La unidad de entrada es fija: centímetros. La fórmula geométrica excluye espesor, margen de material, armadura y tolerancias de construcción."
  }
};
