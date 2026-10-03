import type { CalculatorCopy } from '../../lib/platform/types';

type Body = Pick<CalculatorCopy, 'shortDescription' | 'seoDescription' | 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;

// Subject-specific retained and amended copy; source and calculation limits are explicit.
export const contractContent: Record<'ru'|'en'|'uk'|'de'|'es', Body> = {
  "ru": {
    "longDescription": "Считает правильный многоугольник — фигуру с равными сторонами и равными углами: шестигранную плитку, восьмиугольную беседку, треугольный или пятиугольный участок. Число сторон обязано быть целым и не меньше трёх: из двух отрезков многоугольника не построить, и дробное число сторон смысла не имеет. Внутренний угол выводится в градусах, хотя площадь считается через тангенс в радианах — путать эти две меры нельзя.",
    "howToUse": [
      "Выберите единицу длины.",
      "Укажите число сторон — целое, не меньше трёх.",
      "Введите длину стороны и прочитайте площадь.",
      "Диапазон страницы — 3–1000 сторон; дроби отклоняются. Все стороны и углы основания должны быть равны. Смена единицы длины не переводит введённую сторону."
    ],
    "howItWorks": "S = n · a² ÷ (4 · tg(π ÷ n)), периметр P = n · a, апофема m = a ÷ (2 · tg(π ÷ n)); внутренний угол равен (n − 2) · 180° ÷ n.",
    "example": "Правильный шестиугольник со стороной 2 см имеет площадь 10,392 см² и внутренний угол 120°.",
    "faq": [
      {
        "q": "Почему нельзя задать две стороны?",
        "a": "Двумя отрезками замкнутую фигуру не построить: многоугольник начинается с трёх сторон, и это не ограничение калькулятора, а определение."
      },
      {
        "q": "Что такое апофема?",
        "a": "Апофема m — расстояние от центра до середины стороны, радиус вписанной окружности. Площадь равна Pm/2. Чтобы многоугольник целиком поместился в круглое отверстие при общей оси, нужен радиус описанной окружности a/[2sin(π/n)], который больше m."
      },
      {
        "q": "Почему число сторон должно быть целым?",
        "a": "Сторона либо есть, либо её нет: половины стороны у многоугольника не бывает, поэтому дробное значение отклоняется."
      },
      {
        "q": "В каких единицах выводится угол?",
        "a": "В градусах. Внутри площадь считается через тангенс от радиан, но в ответ угол переводится в привычные градусы."
      }
    ],
    "shortDescription": "Площадь, периметр, апофема и углы правильного многоугольника.",
    "seoDescription": "Рассчитайте площадь, периметр, апофему и внутренний угол правильного многоугольника по числу сторон и длине стороны.",
    "disclaimer": "Простой выпуклый правильный многоугольник с положительной стороной; звёздчатые и неправильные контуры не рассчитываются. Ограничение n ≤ 1000 принадлежит странице. Площадь использует квадрат выбранной единицы, угол — градусы."
  },
  "en": {
    "longDescription": "Works a regular polygon — equal sides and equal angles: a hexagonal tile, an octagonal gazebo, a triangular or pentagonal plot. The number of sides must be a whole number and at least three: two segments cannot enclose a polygon, and a fractional side count has no meaning. The interior angle is reported in degrees even though the area uses a tangent in radians — the two measures must never be mixed up.",
    "howToUse": [
      "Choose the length unit.",
      "Enter the number of sides — a whole number, at least three.",
      "Enter the side length and read the area.",
      "This page accepts 3–1000 sides and rejects fractions. All sides and interior angles must be equal. Changing the length unit does not convert the entered side."
    ],
    "howItWorks": "S = n · a² ÷ (4 · tan(π ÷ n)), P = n · a and the apothem is m = a ÷ (2 · tan(π ÷ n)); the interior angle is (n − 2) · 180° ÷ n.",
    "example": "A regular hexagon with a side of 2 cm has an area of 10.392 cm² and an interior angle of 120°.",
    "faq": [
      {
        "q": "Why can I not enter two sides?",
        "a": "Two segments cannot enclose a figure: a polygon starts at three sides, and that is a definition rather than a limit of the calculator."
      },
      {
        "q": "What is the apothem?",
        "a": "The apothem m is the centre-to-side-midpoint distance, the inradius. Area is Pm/2. To fit the whole polygon into a concentric circular opening, use circumradius a/[2sin(π/n)], which is larger than m."
      },
      {
        "q": "Why must the side count be a whole number?",
        "a": "A side either exists or it does not; half a side is meaningless for a polygon, so a fractional value is rejected."
      },
      {
        "q": "What unit is the angle in?",
        "a": "Degrees. Internally the area uses a tangent of radians, but the reported angle is converted to the familiar degrees."
      }
    ],
    "shortDescription": "Area, perimeter, apothem and angles of a regular polygon.",
    "seoDescription": "Calculate the area, perimeter, apothem and interior angle of a regular polygon from the number of sides and the side length.",
    "disclaimer": "A simple convex regular polygon with positive side length; star polygons and irregular outlines are not calculated. The limit n ≤ 1000 belongs to this page. Area uses the selected unit squared and angles use degrees."
  },
  "uk": {
    "longDescription": "Правильний многокутник має рівні сторони й рівні кути: це шестигранна плитка, восьмикутна альтанка, трикутна або п’ятикутна ділянка. Кількість сторін зобов’язана бути цілою й не меншою за три: з двох відрізків многокутника не побудувати, а дробова кількість сторін позбавлена змісту. Внутрішній кут виводиться в градусах, хоча площа рахується через тангенс у радіанах.",
    "howToUse": [
      "Виберіть одиницю довжини.",
      "Укажіть кількість сторін — ціле число, не менше трьох.",
      "Введіть довжину сторони та прочитайте площу.",
      "Сторінка приймає 3–1000 сторін і відхиляє дроби. Усі сторони та внутрішні кути мають бути рівними. Зміна одиниці довжини не переводить уведену сторону."
    ],
    "howItWorks": "Площа дорівнює S = n · a² ÷ (4 · tg(π ÷ n)), периметр P = n · a, апофема m = a ÷ (2 · tg(π ÷ n)). Внутрішній кут рахується як (n − 2) · 180° ÷ n і виводиться в градусах, хоча тангенс у формулі площі береться від радіанів.",
    "example": "Правильний шестикутник зі стороною 2 см має площу 10,392 см², периметр 12 см і внутрішній кут 120°. Апофема дорівнює √3 ≈ 1,732 см, а радіус описаного кола — 2 см: для круглого отвору ці радіуси не взаємозамінні.",
    "faq": [
      {
        "q": "Чому не можна задати дві сторони?",
        "a": "Двома відрізками замкнену фігуру не побудувати: многокутник починається з трьох сторін, і це не обмеження калькулятора, а визначення."
      },
      {
        "q": "Що таке апофема?",
        "a": "Апофема m — відстань від центра до середини сторони, радіус вписаного кола. Площа дорівнює Pm/2. Щоб весь многокутник помістився в співцентровий круглий отвір, потрібен радіус описаного кола a/[2sin(π/n)], більший за m."
      },
      {
        "q": "Чому кількість сторін має бути цілою?",
        "a": "Сторона або є, або її немає: половини сторони в многокутника не буває, тому дробове значення відхиляється."
      },
      {
        "q": "У яких одиницях виводиться кут?",
        "a": "У градусах. Усередині площа рахується через тангенс від радіанів, але у відповідь кут переводиться у звичні градуси."
      }
    ],
    "shortDescription": "Площа, периметр, апофема й кути правильного многокутника.",
    "seoDescription": "Обчисліть площу, периметр, апофему та внутрішній кут правильного многокутника.",
    "disclaimer": "Простий опуклий правильний многокутник із додатною стороною; зірчасті й неправильні контури не обчислюються. Межа n ≤ 1000 належить сторінці. Площа має квадрат вибраної одиниці, кут — градуси."
  },
  "de": {
    "longDescription": "Rechnet ein regelmäßiges Vieleck durch — gleiche Seiten und gleiche Winkel: eine sechseckige Fliese, ein achteckiger Pavillon, ein drei- oder fünfeckiges Grundstück. Die Seitenzahl muss eine ganze Zahl und mindestens drei sein: zwei Strecken können kein Vieleck einschließen, und eine gebrochene Seitenzahl hat keinen Sinn. Der Innenwinkel wird in Grad ausgewiesen, obwohl die Fläche einen Tangens im Bogenmaß nutzt — beide Maße dürfen nie vermengt werden.",
    "howToUse": [
      "Wähle die Längeneinheit.",
      "Trage die Zahl der Seiten ein — eine ganze Zahl, mindestens drei.",
      "Trage die Seitenlänge ein und lies die Fläche ab.",
      "Diese Seite akzeptiert 3–1000 Seiten und keine Bruchteile. Alle Seiten und Innenwinkel müssen gleich sein. Ein Einheitenwechsel rechnet die eingegebene Seite nicht um."
    ],
    "howItWorks": "S = n · a² ÷ (4 · tan(π ÷ n)), P = n · a, und die Apothema ist m = a ÷ (2 · tan(π ÷ n)); der Innenwinkel ist (n − 2) · 180° ÷ n.",
    "example": "Ein regelmäßiges Sechseck mit 2 cm Seite hat eine Fläche von 10,392 cm² und einen Innenwinkel von 120°.",
    "faq": [
      {
        "q": "Warum kann ich nicht zwei Seiten eintragen?",
        "a": "Zwei Strecken können keine Figur einschließen: ein Vieleck beginnt bei drei Seiten, und das ist eine Festlegung und keine Grenze des Rechners."
      },
      {
        "q": "Was ist die Apothema?",
        "a": "Die Apothema m ist der Abstand vom Mittelpunkt zum Seitenmittelpunkt, also der Inkreisradius. Die Fläche ist Pm/2. Für ein rundes, konzentrisches Loch muss der Umkreisradius a/[2sin(π/n)] passen; er ist größer als m."
      },
      {
        "q": "Warum muss die Seitenzahl ganz sein?",
        "a": "Eine Seite gibt es oder gibt es nicht; eine halbe Seite ist bei einem Vieleck sinnlos, deshalb wird ein gebrochener Wert abgewiesen."
      },
      {
        "q": "In welcher Einheit steht der Winkel?",
        "a": "In Grad. Innen nutzt die Fläche einen Tangens im Bogenmaß, aber der ausgewiesene Winkel wird in die vertrauten Grad umgerechnet."
      }
    ],
    "shortDescription": "Fläche, Umfang, Apothema und Winkel eines regelmäßigen Vielecks.",
    "seoDescription": "Berechne Fläche, Umfang, Apothema und Innenwinkel eines regelmäßigen Vielecks aus der Seitenzahl und der Seitenlänge.",
    "disclaimer": "Ein einfaches konvexes regelmäßiges Vieleck mit positiver Seite; Sternpolygone und unregelmäßige Umrisse werden nicht berechnet. n ≤ 1000 ist eine Seitengrenze. Flächen verwenden das Quadrat der gewählten Einheit, Winkel Grad."
  },
  "es": {
    "longDescription": "Resuelve un polígono regular —lados iguales y ángulos iguales—: una baldosa hexagonal, un cenador octogonal, una parcela triangular o pentagonal. El número de lados debe ser entero y al menos tres: dos segmentos no encierran un polígono, y un número de lados con decimales no significa nada. El ángulo interior se da en grados aunque el área use una tangente en radianes: esas dos medidas no deben mezclarse nunca.",
    "howToUse": [
      "Elige la unidad de longitud.",
      "Introduce el número de lados: un entero, al menos tres.",
      "Introduce la longitud del lado y consulta el área.",
      "La página acepta entre 3 y 1000 lados y rechaza fracciones. Todos los lados y ángulos interiores deben ser iguales. Cambiar la unidad no convierte el lado introducido."
    ],
    "howItWorks": "S = n · a² ÷ (4 · tan(π ÷ n)), P = n · a y la apotema es m = a ÷ (2 · tan(π ÷ n)); el ángulo interior es (n − 2) · 180° ÷ n.",
    "example": "Un hexágono regular de 2 cm de lado tiene un área de 10,392 cm² y un ángulo interior de 120°.",
    "faq": [
      {
        "q": "¿Por qué no puedo introducir dos lados?",
        "a": "Dos segmentos no encierran una figura: un polígono empieza en tres lados, y eso es una definición y no un límite de la calculadora."
      },
      {
        "q": "¿Qué es la apotema?",
        "a": "La apotema m va del centro al punto medio de un lado y es el radio inscrito. El área es Pm/2. Para que todo el polígono quepa en un hueco circular concéntrico, se necesita el radio circunscrito a/[2sen(π/n)], mayor que m."
      },
      {
        "q": "¿Por qué el número de lados debe ser entero?",
        "a": "Un lado existe o no existe; medio lado no significa nada en un polígono, así que un valor con decimales se rechaza."
      },
      {
        "q": "¿En qué unidad va el ángulo?",
        "a": "En grados. Internamente el área usa una tangente de radianes, pero el ángulo que se muestra se convierte a los grados habituales."
      }
    ],
    "shortDescription": "Área, perímetro, apotema y ángulos de un polígono regular.",
    "seoDescription": "Calcula el área, el perímetro, la apotema y el ángulo interior de un polígono regular a partir del número de lados y la longitud del lado.",
    "disclaimer": "Polígono regular simple y convexo con lado positivo; no se calculan estrellas ni contornos irregulares. El límite n ≤ 1000 es de esta página. El área usa la unidad elegida al cuadrado y el ángulo, grados."
  }
};
