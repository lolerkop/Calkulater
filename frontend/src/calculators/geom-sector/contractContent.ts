import type { CalculatorCopy } from '../../lib/platform/types';

type Body = Pick<CalculatorCopy, 'shortDescription' | 'seoDescription' | 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;

// Subject-specific retained and amended copy; source and calculation limits are explicit.
export const contractContent: Record<'ru'|'en'|'uk'|'de'|'es', Body> = {
  "ru": {
    "longDescription": "Сектор определяется положительным радиусом и центральным углом от 0° до 360°, не включая ноль. Калькулятор выводит площадь, дугу, хорду, периметр и долю круга. Для неполного сектора контур состоит из дуги и двух радиусов; для 360° это весь круг, и периметр равен одной окружности. Хорда полного круга равна нулю геометрически, а малые положительные хорды не обнуляются.",
    "howToUse": [
      "Выберите единицу длины.",
      "Введите радиус.",
      "Задайте центральный угол в градусах."
    ],
    "howItWorks": "Угол переводится в радианы: θ = α·π/180. Площадь сектора S = ½r²θ, длина дуги L = rθ, хорда c = 2r·sin(θ/2).  Для 0° < α < 360° периметр L+2r; при α = 360° периметр L = 2πr. Доля круга α/360. Радианы нужны внутри формул, а ввод и подпись угла остаются в градусах.",
    "example": "Сектор радиусом 5 см с углом 60° имеет площадь 13,09 см², дугу 5,236 см и хорду ровно 5 см.",
    "faq": [
      {
        "q": "Почему при 360 градусах хорда равна нулю?",
        "a": "Потому что концы дуги совпадают: соединяющий их отрезок вырождается в точку. Двоичная арифметика даёт здесь крошечный остаток, и он намеренно приводится к точному нулю."
      },
      {
        "q": "Чем хорда отличается от длины дуги?",
        "a": "Дуга идёт по окружности, хорда — по прямой между её концами. Хорда всегда короче, и разница растёт с углом."
      },
      {
        "q": "Зачем переводить градусы в радианы?",
        "a": "Формулы S = ½r²θ и L = rθ верны только для радианной меры угла. Подставить в них градусы значит ошибиться примерно в 57 раз."
      },
      {
        "q": "Как получить площадь сегмента?",
        "a": "Площадь сегмента для соответствующей ориентированной дуги равна ½r²(θ−sinθ), θ в радианах. При θ ≤ π вычитается площадь центрального треугольника; при θ > π sinθ отрицателен и берётся большой сегмент. Здесь показан сектор, а не сегмент."
      }
    ],
    "shortDescription": "Площадь сектора, длина дуги и хорда по радиусу и углу.",
    "seoDescription": "Рассчитайте площадь сектора круга, длину дуги и хорду по радиусу и центральному углу.",
    "disclaimer": "Площадь относится к сектору, не к сегменту между дугой и хордой. При полном круге периметр описывает внешний контур без радиального разреза. Радиус использует выбранную единицу; переключение единицы не переводит число."
  },
  "en": {
    "longDescription": "A sector is specified by a positive radius and a central angle greater than 0° and at most 360°. Results include area, arc, chord, perimeter and circle share. An incomplete sector’s boundary has an arc and two radii; at 360° the shape is the whole disc and its perimeter is just the circumference. The full-circle chord is geometrically zero; small positive chords are not forced to zero.",
    "howToUse": [
      "Pick the length unit.",
      "Enter the radius.",
      "Give the central angle in degrees."
    ],
    "howItWorks": "The angle becomes radians as θ = α·π/180. The sector area is S = ½r²θ, the arc length L = rθ and the chord c = 2r·sin(θ/2).  For 0° < α < 360°, perimeter is L+2r; at α = 360° it is L = 2πr. The circle fraction is α/360. Formulas use radians internally, while input and angle labels stay in degrees.",
    "example": "A sector of radius 5 cm with a 60° angle has an area of 13.09 cm², an arc of 5.236 cm and a chord of exactly 5 cm.",
    "faq": [
      {
        "q": "Why is the chord zero at 360 degrees?",
        "a": "Because the ends of the arc coincide: the segment joining them collapses to a point. Binary arithmetic leaves a tiny residue there, and it is deliberately snapped to exact zero."
      },
      {
        "q": "How does a chord differ from the arc length?",
        "a": "The arc follows the circle, the chord runs straight between its ends. The chord is always shorter, and the gap widens with the angle."
      },
      {
        "q": "Why convert degrees to radians?",
        "a": "Because S = ½r²θ and L = rθ only hold in radian measure. Substituting degrees would be out by a factor of about 57."
      },
      {
        "q": "How do I get the area of a segment?",
        "a": "For the corresponding oriented arc, segment area is ½r²(θ−sinθ), with θ in radians. For θ ≤ π the central triangle area is subtracted; for θ > π sinθ is negative and the formula gives the major segment. This tool displays a sector, not a segment."
      }
    ],
    "shortDescription": "Sector area, arc length and chord from the radius and the angle.",
    "seoDescription": "Calculate the area of a circular sector, the arc length and the chord from the radius and the central angle.",
    "disclaimer": "Area describes a sector, not the segment between arc and chord. At a full circle the perimeter is the outer boundary without a radial cut. Radius uses the selected unit; switching units does not convert its number."
  },
  "uk": {
    "longDescription": "Сектор визначається додатним радіусом та центральним кутом більше 0° і не більше 360°. Результати — площа, дуга, хорда, периметр і частка круга. Контур неповного сектора складається з дуги й двох радіусів; за 360° це цілий круг, периметр якого дорівнює лише довжині кола. Хорда повного круга геометрично нульова; малі додатні хорди не обнуляються.",
    "howToUse": [
      "Виберіть одиницю довжини.",
      "Введіть радіус.",
      "Задайте центральний кут у градусах."
    ],
    "howItWorks": "Кут переводиться в радіани: θ = α · π/180. Площа сектора дорівнює S = ½r²θ, довжина дуги L = rθ, хорда c = 2r · sin(θ/2).  Для 0° < α < 360° периметр L+2r; за α = 360° він дорівнює L = 2πr. Частка круга α/360. Усередині формул потрібні радіани, а ввід і підпис кута залишаються в градусах.",
    "example": "Сектор радіусом 5 см із кутом 60° має площу 13,09 см², дугу 5,236 см і хорду рівно 5 см. Хорда збіглася з радіусом, бо за кута 60° трикутник рівносторонній.",
    "faq": [
      {
        "q": "Чому кут переводиться в радіани?",
        "a": "Бо формули S = ½r²θ і L = rθ виведені в радіанній мірі. Підстановка градусів дала б число, більше приблизно в 57 разів. Переведення виконується всередині, тому вводити треба саме градуси."
      },
      {
        "q": "Чим дуга відрізняється від хорди?",
        "a": "Дуга — це криволінійна частина кола між кінцями сектора, хорда — пряма між тими самими точками. Хорда завжди коротша, а за малих кутів вони майже збігаються."
      },
      {
        "q": "Що входить у периметр сектора?",
        "a": "Для неповного сектора — дуга й два радіуси. Для повного круга 360° радіальні відрізки вже не є межею області, тому периметр — лише 2πr. Так відрізняють контур області від розрізу матеріалу по радіусу."
      },
      {
        "q": "Що буде за кута 360°?",
        "a": "Вийде повний круг: площа дорівнюватиме πr², дуга — довжині кола, а хорда обернеться на нуль, бо початок і кінець збігаються."
      }
    ],
    "shortDescription": "Площа сектора, довжина дуги та хорда за радіусом і кутом.",
    "seoDescription": "Обчисліть площу сектора кола, довжину дуги та хорду за радіусом і центральним кутом.",
    "disclaimer": "Площа стосується сектора, а не сегмента між дугою й хордою. За повного круга периметр описує зовнішній контур без радіального розрізу. Радіус має вибрану одиницю; її перемикання не переводить число."
  },
  "de": {
    "longDescription": "Ein Sektor wird durch einen positiven Radius und einen Mittelpunktswinkel über 0° bis einschließlich 360° bestimmt. Ergebnisse sind Fläche, Bogen, Sehne, Umfang und Kreisanteil. Ein unvollständiger Sektor hat Bogen und zwei Radien als Rand; bei 360° ist es die ganze Scheibe mit nur dem Kreisumfang. Die Sehne des vollen Kreises ist geometrisch null; kleine positive Sehnen werden nicht auf null gesetzt.",
    "howToUse": [
      "Wähle die Längeneinheit.",
      "Trage den Radius ein.",
      "Gib den Mittelpunktswinkel in Grad an."
    ],
    "howItWorks": "Der Winkel wird zu θ = α·π/180 im Bogenmaß. Die Fläche des Sektors ist S = ½r²θ, die Bogenlänge L = rθ und die Sehne c = 2r·sin(θ/2).  Für 0° < α < 360° gilt Umfang L+2r; bei α = 360° dagegen L = 2πr. Der Kreisanteil ist α/360. Die Formeln verwenden intern Bogenmaß; Eingabe und Winkelangaben bleiben in Grad.",
    "example": "Ein Sektor mit dem Radius 5 cm und 60° Winkel hat eine Fläche von 13,09 cm², einen Bogen von 5,236 cm und eine Sehne von genau 5 cm.",
    "faq": [
      {
        "q": "Warum ist die Sehne bei 360 Grad null?",
        "a": "Weil die Enden des Bogens zusammenfallen: die Strecke zwischen ihnen schrumpft auf einen Punkt. Die binäre Arithmetik lässt dort einen winzigen Rest, und der wird bewusst auf genau null gesetzt."
      },
      {
        "q": "Wie unterscheidet sich eine Sehne von der Bogenlänge?",
        "a": "Der Bogen folgt dem Kreis, die Sehne läuft gerade zwischen seinen Enden. Die Sehne ist immer kürzer, und der Abstand wächst mit dem Winkel."
      },
      {
        "q": "Warum werden Grad ins Bogenmaß umgerechnet?",
        "a": "Weil S = ½r²θ und L = rθ nur im Bogenmaß gelten. Grad einzusetzen läge um rund den Faktor 57 daneben."
      },
      {
        "q": "Wie bekomme ich die Fläche eines Kreisabschnitts?",
        "a": "Die Segmentfläche zum entsprechenden gerichteten Bogen ist ½r²(θ−sinθ), θ im Bogenmaß. Für θ ≤ π wird die zentrale Dreiecksfläche abgezogen; für θ > π ist sinθ negativ und es entsteht das große Segment. Dieser Rechner zeigt den Sektor, nicht das Segment."
      }
    ],
    "shortDescription": "Fläche, Bogenlänge und Sehne eines Kreissektors aus Radius und Winkel.",
    "seoDescription": "Berechne die Fläche eines Kreissektors, die Bogenlänge und die Sehne aus Radius und Mittelpunktswinkel.",
    "disclaimer": "Die Fläche gehört zum Sektor, nicht zum Segment zwischen Bogen und Sehne. Beim vollen Kreis meint Umfang den äußeren Rand ohne Radialschnitt. Der Radius verwendet die gewählte Einheit; ein Wechsel rechnet die Zahl nicht um."
  },
  "es": {
    "longDescription": "Un sector se define con radio positivo y ángulo central mayor que 0° y hasta 360°. Se muestran área, arco, cuerda, perímetro y fracción del círculo. El contorno de un sector incompleto tiene arco y dos radios; a 360° es el disco completo y su perímetro es solo la circunferencia. La cuerda del círculo completo es geométricamente cero; las cuerdas pequeñas positivas no se fuerzan a cero.",
    "howToUse": [
      "Elige la unidad de longitud.",
      "Introduce el radio.",
      "Indica el ángulo central en grados."
    ],
    "howItWorks": "El ángulo pasa a radianes como θ = α·π/180. El área del sector es S = ½r²θ, la longitud del arco L = rθ y la cuerda c = 2r·sen(θ/2).  Para 0° < α < 360°, el perímetro es L+2r; con α = 360° es L = 2πr. La fracción del círculo es α/360. Las fórmulas usan radianes internamente, pero la entrada y las etiquetas del ángulo siguen en grados.",
    "example": "Un sector de 5 cm de radio con un ángulo de 60° tiene un área de 13,09 cm², un arco de 5,236 cm y una cuerda de exactamente 5 cm.",
    "faq": [
      {
        "q": "¿Por qué la cuerda vale cero a 360 grados?",
        "a": "Porque los extremos del arco coinciden: el segmento que los une se reduce a un punto. La aritmética binaria deja ahí un residuo minúsculo, y se ajusta a cero exacto a propósito."
      },
      {
        "q": "¿En qué se diferencian la cuerda y la longitud del arco?",
        "a": "El arco sigue la circunferencia y la cuerda va recta entre sus extremos. La cuerda siempre es más corta, y la diferencia crece con el ángulo."
      },
      {
        "q": "¿Por qué convertir los grados a radianes?",
        "a": "Porque S = ½r²θ y L = rθ solo valen en medida de radianes. Sustituir grados fallaría por un factor de unos 57."
      },
      {
        "q": "¿Cómo obtengo el área de un segmento circular?",
        "a": "El área del segmento del arco orientado correspondiente es ½r²(θ−senθ), con θ en radianes. Para θ ≤ π se resta el triángulo central; para θ > π el seno es negativo y resulta el segmento mayor. Esta calculadora muestra el sector, no el segmento."
      }
    ],
    "shortDescription": "Área del sector, longitud del arco y cuerda a partir del radio y el ángulo.",
    "seoDescription": "Calcula el área de un sector circular, la longitud del arco y la cuerda a partir del radio y el ángulo central.",
    "disclaimer": "El área corresponde al sector, no al segmento entre arco y cuerda. En el círculo completo el perímetro es el borde exterior sin corte radial. El radio usa la unidad elegida; cambiarla no convierte su número."
  }
};
