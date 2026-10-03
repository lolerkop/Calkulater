import type { CalculatorCopy } from '../../lib/platform/types';

type Body = Pick<CalculatorCopy, 'shortDescription' | 'seoDescription' | 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;

// Subject-specific retained and amended copy; source and calculation limits are explicit.
export const contractContent: Record<'ru'|'en'|'uk'|'de'|'es', Body> = {
  "ru": {
    "longDescription": "Эллипс задаётся двумя положительными полуосями. Площадь S = πab, эксцентриситет и фокусы описывают его геометрию, а периметр здесь оценивается первым приближением Рамануджана. Это отдельная погрешность модели, которую нельзя устранить добавлением знаков после запятой. Равные полуоси дают круг; при сильно вытянутом эллипсе приближение менее точное. Порядок полуосей не влияет на результат: большая выбирается автоматически.",
    "howToUse": [
      "Выберите единицу длины.",
      "Введите обе полуоси — это половины осей, а не сами оси.",
      "Порядок не важен: большая определяется сама.",
      "Равные полуоси дадут круг."
    ],
    "howItWorks": "Площадь S = πab. Периметр берётся по приближению Рамануджана π[3(a+b) − √((3a+b)(a+3b))]. Эксцентриситет e = √(1 − b²/a²) считается от большей полуоси, расстояние между фокусами 2√(a² − b²).",
    "example": "У эллипса с полуосями 5 и 3 см площадь равна 47,124 см², периметр — 25,527 см, эксцентриситет — 0,8.",
    "faq": [
      {
        "q": "Почему периметр считается приближённо?",
        "a": "Точный периметр равен 4aE(e), где E — полный эллиптический интеграл второго рода. Здесь сохранена первая формула Рамануджана. Для a = 5, b = 3 она даёт 25,5269864 вместо 25,5269989: относительная ошибка около 0,00004885 %. Для 99 и 1 ошибка уже около 0,3414 %. Универсальной гарантии 10⁻⁵ % у этой формулы нет."
      },
      {
        "q": "Что показывает эксцентриситет?",
        "a": "Насколько эллипс вытянут. Нуль — это круг, значения около 0,8 — заметно вытянутая фигура, а приближение к единице означает почти вырожденный отрезок."
      },
      {
        "q": "Полуось — это то же, что ось?",
        "a": "Нет, полуось вдвое меньше оси: это расстояние от центра до края, а не от края до края. Ввод осей вместо полуосей завысит площадь вчетверо."
      },
      {
        "q": "Что такое фокусы эллипса?",
        "a": "Две точки на большей оси, для которых сумма расстояний до любой точки эллипса одинакова. На этом свойстве основан способ вычертить эллипс ниткой, натянутой между двумя гвоздями."
      },
      {
        "q": "Что будет, если полуоси равны?",
        "a": "Получится круг: площадь станет πa², эксцентриситет — нулём, а фокусы сойдутся в центре. Приближение Рамануджана при этом даёт ровно 2πa."
      }
    ],
    "shortDescription": "Площадь, приближённый периметр, эксцентриситет и фокусы эллипса по полуосям.",
    "seoDescription": "Рассчитайте площадь, приближённый периметр по первой формуле Рамануджана, эксцентриситет и расстояние между фокусами эллипса.",
    "disclaimer": "Площадь и фокусные формулы относятся к идеальному эллипсу с a,b > 0; периметр — приближение. При почти вырожденной форме эксцентриситет после округления может выглядеть как 1. Смена единицы переобозначает числа, а не переводит их."
  },
  "en": {
    "longDescription": "An ellipse is specified by two positive semi-axes. Area S = πab, eccentricity and foci describe its geometry, while this tool estimates perimeter using Ramanujan’s first approximation. Its model error is separate from rounding and cannot be removed by showing more decimal places. Equal semi-axes give a circle; very elongated ellipses make the approximation less accurate. Semi-axis order does not matter: the larger is selected automatically.",
    "howToUse": [
      "Choose the length unit.",
      "Enter both semi-axes — halves of the axes, not the axes themselves.",
      "Order does not matter: the larger one is detected.",
      "Equal semi-axes give a circle."
    ],
    "howItWorks": "Area S = πab. The perimeter uses Ramanujan's approximation π[3(a+b) − √((3a+b)(a+3b))]. Eccentricity e = √(1 − b²/a²) is taken from the larger semi-axis, and the distance between the foci is 2√(a² − b²).",
    "example": "An ellipse with semi-axes of 5 and 3 cm has an area of 47.124 cm², a perimeter of 25.527 cm and an eccentricity of 0.8.",
    "faq": [
      {
        "q": "Why is the perimeter approximate?",
        "a": "The exact perimeter is 4aE(e), with E the complete elliptic integral of the second kind. This tool keeps Ramanujan’s first formula. At a = 5, b = 3 it gives 25.5269864 instead of 25.5269989, about 0.00004885% relative error. At 99 and 1 the error is about 0.3414%. This formula has no universal 10⁻⁵% guarantee."
      },
      {
        "q": "What does eccentricity tell me?",
        "a": "How stretched the ellipse is. Zero is a circle, values around 0.8 are visibly elongated, and approaching one means the shape is nearly a flat segment."
      },
      {
        "q": "Is a semi-axis the same as an axis?",
        "a": "No, a semi-axis is half an axis: the distance from the centre to the edge, not edge to edge. Entering axes instead of semi-axes overstates the area fourfold."
      },
      {
        "q": "What are the foci of an ellipse?",
        "a": "Two points on the major axis for which the sum of the distances to any point on the curve is constant. That property is what lets you draw an ellipse with a string looped around two pins."
      },
      {
        "q": "What happens when the semi-axes are equal?",
        "a": "You get a circle: the area becomes πa², the eccentricity is zero and the foci meet at the centre. Ramanujan's approximation returns exactly 2πa there."
      }
    ],
    "shortDescription": "Area, approximate perimeter, eccentricity and foci of an ellipse from its semi-axes.",
    "seoDescription": "Calculate ellipse area, approximate perimeter using Ramanujan’s first formula, eccentricity and the distance between foci.",
    "disclaimer": "Area and focus formulas describe an ideal ellipse with a,b > 0; perimeter is approximate. For a nearly degenerate shape, rounded eccentricity may appear as 1. Selecting another unit relabels the numbers and does not convert them."
  },
  "uk": {
    "longDescription": "Еліпс задається двома додатними півосями. Площа S = πab, ексцентриситет і фокуси описують його геометрію, а периметр тут оцінюється першим наближенням Рамануджана. Похибка моделі відокремлена від округлення й не зникає від додавання десяткових знаків. Рівні півосі дають круг; для сильно витягнутого еліпса наближення менш точне. Порядок півосей не важливий: більша обирається автоматично.",
    "howToUse": [
      "Виберіть одиницю довжини.",
      "Введіть обидві півосі — це половини осей, а не самі осі.",
      "Порядок не має значення: більша піввісь визначається сама.",
      "Рівні півосі дадуть круг."
    ],
    "howItWorks": "Площа дорівнює S = πab. Периметр береться за наближенням Рамануджана π[3(a + b) − √((3a + b)(a + 3b))]. Ексцентриситет e = √(1 − b²/a²) рахується від більшої півосі, а відстань між фокусами дорівнює 2√(a² − b²).",
    "example": "Еліпс із півосями 5 і 3 см має площу 47,124 см², периметр 25,527 см та ексцентриситет 0,8. Відстань між його фокусами дорівнює 8 см.",
    "faq": [
      {
        "q": "Чому периметр рахується наближено?",
        "a": "Точний периметр дорівнює 4aE(e), де E — повний еліптичний інтеграл другого роду. Тут збережена перша формула Рамануджана. Для a = 5, b = 3 вона дає 25,5269864 замість 25,5269989: відносна похибка близько 0,00004885 %. Для 99 та 1 похибка вже близько 0,3414 %. Універсальної гарантії 10⁻⁵ % ця формула не має."
      },
      {
        "q": "Що показує ексцентриситет?",
        "a": "Наскільки еліпс витягнутий. Нуль — це круг, значення близько 0,8 — помітно витягнута фігура, а наближення до одиниці означає майже вироджений відрізок."
      },
      {
        "q": "Піввісь — це те саме, що вісь?",
        "a": "Ні, піввісь удвічі менша за вісь: це відстань від центра до краю, а не від краю до краю. Ввід осей замість півосей завищить площу вчетверо."
      },
      {
        "q": "Що таке фокуси еліпса?",
        "a": "Дві точки на більшій осі, для яких сума відстаней до будь-якої точки еліпса однакова. На цій властивості ґрунтується спосіб накреслити еліпс ниткою, натягнутою між двома цвяхами."
      },
      {
        "q": "Що буде, якщо півосі рівні?",
        "a": "Вийде круг: площа стане πa², ексцентриситет — нулем, а фокуси зійдуться в центрі. Наближення Рамануджана при цьому дає рівно 2πa."
      }
    ],
    "shortDescription": "Площа, наближений периметр, ексцентриситет і фокуси еліпса за півосями.",
    "seoDescription": "Розрахуйте площу, наближений периметр за першою формулою Рамануджана, ексцентриситет і відстань між фокусами еліпса.",
    "disclaimer": "Площа й фокусні формули стосуються ідеального еліпса з a,b > 0; периметр наближений. Для майже виродженої форми округлений ексцентриситет може виглядати як 1. Зміна одиниці переозначує числа, а не переводить їх."
  },
  "de": {
    "longDescription": "Eine Ellipse wird durch zwei positive Halbachsen festgelegt. Fläche S = πab, Exzentrizität und Brennpunkte beschreiben ihre Geometrie; der Umfang wird hier mit Ramanujans erster Näherung geschätzt. Deren Modellfehler ist unabhängig vom Runden und verschwindet nicht durch mehr Dezimalstellen. Gleiche Halbachsen ergeben einen Kreis; bei stark gestreckten Ellipsen ist die Näherung weniger genau. Die größere Halbachse wird automatisch gewählt.",
    "howToUse": [
      "Wähle die Längeneinheit.",
      "Trage beide Halbachsen ein — Hälften der Achsen, nicht die Achsen selbst.",
      "Die Reihenfolge spielt keine Rolle: die größere wird erkannt.",
      "Gleiche Halbachsen ergeben einen Kreis."
    ],
    "howItWorks": "Fläche S = πab. Der Umfang nutzt die Näherung von Ramanujan π[3(a+b) − √((3a+b)(a+3b))]. Die Exzentrizität e = √(1 − b²/a²) wird von der größeren Halbachse genommen, und der Abstand der Brennpunkte ist 2√(a² − b²).",
    "example": "Eine Ellipse mit den Halbachsen 5 und 3 cm hat eine Fläche von 47,124 cm², einen Umfang von 25,527 cm und eine Exzentrizität von 0,8.",
    "faq": [
      {
        "q": "Warum ist der Umfang genähert?",
        "a": "Der genaue Umfang ist 4aE(e), wobei E das vollständige elliptische Integral zweiter Art ist. Hier bleibt Ramanujans erste Formel erhalten. Bei a = 5, b = 3 liefert sie 25,5269864 statt 25,5269989, etwa 0,00004885 % relativen Fehler. Bei 99 und 1 sind es ungefähr 0,3414 %. Eine allgemeine 10⁻⁵-%-Garantie gilt für diese Formel nicht."
      },
      {
        "q": "Was sagt mir die Exzentrizität?",
        "a": "Wie gestreckt die Ellipse ist. Null ist ein Kreis, Werte um 0,8 sind sichtbar länglich, und nahe eins ist die Form beinahe eine flache Strecke."
      },
      {
        "q": "Ist eine Halbachse dasselbe wie eine Achse?",
        "a": "Nein, eine Halbachse ist die halbe Achse: der Abstand von der Mitte zum Rand und nicht von Rand zu Rand. Achsen statt Halbachsen einzutragen setzt die Fläche um das Vierfache zu hoch an."
      },
      {
        "q": "Was sind die Brennpunkte einer Ellipse?",
        "a": "Zwei Punkte auf der großen Achse, für die die Summe der Abstände zu jedem Punkt der Kurve gleich bleibt. Genau diese Eigenschaft lässt eine Ellipse mit einer Schnur um zwei Nadeln zeichnen."
      },
      {
        "q": "Was passiert bei gleichen Halbachsen?",
        "a": "Du bekommst einen Kreis: die Fläche wird πa², die Exzentrizität ist null, und die Brennpunkte treffen sich in der Mitte. Die Näherung von Ramanujan liefert dort genau 2πa."
      }
    ],
    "shortDescription": "Fläche, genäherter Umfang, Exzentrizität und Brennpunkte einer Ellipse aus Halbachsen.",
    "seoDescription": "Berechne Ellipsenfläche, angenäherten Umfang nach Ramanujans erster Formel, Exzentrizität und Brennpunktabstand.",
    "disclaimer": "Fläche und Brennpunktformeln gelten für eine ideale Ellipse mit a,b > 0; der Umfang ist genähert. Bei fast entarteten Formen kann die gerundete Exzentrizität als 1 erscheinen. Eine neue Einheit bezeichnet die Zahlen anders, ohne sie umzurechnen."
  },
  "es": {
    "longDescription": "Una elipse se define con dos semiejes positivos. El área S = πab, la excentricidad y los focos describen su geometría; aquí el perímetro se estima con la primera aproximación de Ramanujan. El error del modelo es distinto del redondeo y no desaparece al mostrar más decimales. Semiejes iguales dan un círculo; la aproximación pierde precisión en elipses muy alargadas. El semieje mayor se identifica automáticamente.",
    "howToUse": [
      "Elige la unidad de longitud.",
      "Introduce ambos semiejes: las mitades de los ejes, no los ejes.",
      "El orden no importa: se detecta cuál es el mayor.",
      "Semiejes iguales dan un círculo."
    ],
    "howItWorks": "Área S = πab. El perímetro usa la aproximación de Ramanujan π[3(a+b) − √((3a+b)(a+3b))]. La excentricidad e = √(1 − b²/a²) se toma desde el semieje mayor, y la distancia entre los focos es 2√(a² − b²).",
    "example": "Una elipse de semiejes 5 y 3 cm tiene un área de 47,124 cm², un perímetro de 25,527 cm y una excentricidad de 0,8.",
    "faq": [
      {
        "q": "¿Por qué el perímetro es aproximado?",
        "a": "El perímetro exacto es 4aE(e), donde E es la integral elíptica completa de segunda especie. Aquí se conserva la primera fórmula de Ramanujan. Con a = 5, b = 3 da 25,5269864 en vez de 25,5269989: un error relativo de aproximadamente 0,00004885 %. Con 99 y 1 llega a cerca de 0,3414 %. Esta fórmula no garantiza universalmente 10⁻⁵ %."
      },
      {
        "q": "¿Qué indica la excentricidad?",
        "a": "Cuán estirada está la elipse. Cero es un círculo, valores en torno a 0,8 son visiblemente alargados, y acercarse a uno significa que la figura es casi un segmento plano."
      },
      {
        "q": "¿Es lo mismo un semieje que un eje?",
        "a": "No, un semieje es la mitad de un eje: la distancia del centro al borde, no de borde a borde. Introducir ejes en lugar de semiejes cuadruplica el área."
      },
      {
        "q": "¿Qué son los focos de una elipse?",
        "a": "Dos puntos del eje mayor para los que la suma de las distancias a cualquier punto de la curva es constante. Esa propiedad es la que permite dibujar una elipse con un hilo alrededor de dos chinchetas."
      },
      {
        "q": "¿Qué ocurre cuando los semiejes son iguales?",
        "a": "Sale un círculo: el área pasa a ser πa², la excentricidad es cero y los focos se juntan en el centro. La aproximación de Ramanujan devuelve ahí exactamente 2πa."
      }
    ],
    "shortDescription": "Área, perímetro aproximado, excentricidad y focos de una elipse a partir de sus semiejes.",
    "seoDescription": "Calcula el área, el perímetro aproximado con la primera fórmula de Ramanujan, la excentricidad y la distancia entre focos de una elipse.",
    "disclaimer": "Las fórmulas de área y focos describen una elipse ideal con a,b > 0; el perímetro es aproximado. En una figura casi degenerada, la excentricidad redondeada puede verse como 1. Elegir otra unidad cambia el significado de los números, sin convertirlos."
  }
};
