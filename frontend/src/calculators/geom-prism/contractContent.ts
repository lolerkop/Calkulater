import type { CalculatorCopy } from '../../lib/platform/types';

type Body = Pick<CalculatorCopy, 'shortDescription' | 'seoDescription' | 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;

// Subject-specific retained and amended copy; source and calculation limits are explicit.
export const contractContent: Record<'ru'|'en'|'uk'|'de'|'es', Body> = {
  "ru": {
    "longDescription": "Прямая призма с правильным многоугольником в основании определяется числом сторон n, стороной a и перпендикулярной высотой h. Апофема основания — расстояние от центра до середины стороны; через неё площадь получается как половина произведения периметра на апофему. Боковые грани — прямоугольники, поэтому их суммарная площадь равна периметру основания на высоту. При n = 4 основание квадратное: произвольный прямоугольник эта модель не задаёт.",
    "howToUse": [
      "Выберите единицу длины для всех вводимых величин.",
      "Укажите, сколько сторон у многоугольника основания.",
      "Введите длину одной стороны основания.",
      "Введите высоту призмы.",
      "Число сторон — целое от 3 до 100, сторона и высота положительны. Это предел страницы; дробь не округляется до соседнего многоугольника."
    ],
    "howItWorks": "Апофема = сторона ÷ (2 × tg(π ÷ n)). Площадь основания = периметр × апофема ÷ 2. Объём = площадь основания × высота, боковая поверхность = периметр × высота.",
    "example": "Шестиугольная призма со стороной 4 см и высотой 10 см вмещает 415,69 см³.",
    "faq": [
      {
        "q": "Какая призма считается правильной?",
        "a": "Та, у которой в основании правильный многоугольник, а боковые грани перпендикулярны ему. У наклонных призм тот же объём, но большая боковая поверхность, и этот расчёт их не охватывает."
      },
      {
        "q": "Зачем для площади основания нужна апофема?",
        "a": "Потому что правильный многоугольник разбивается из центра на одинаковые треугольники, у каждого сторона в основании и апофема в высоте. Их сумма и даёт периметр × апофема ÷ 2."
      },
      {
        "q": "Параллелепипед — это призма?",
        "a": "Да, призма с четырёхугольным основанием. Ввод четырёх сторон даёт ровно случай квадратного основания, и формулы сводятся к привычным."
      },
      {
        "q": "Что происходит при росте числа сторон?",
        "a": "При сравнении с окружностью одного и того же описанного радиуса доля площади правильного n-угольника равна sin(2π/n)/(2π/n) и стремится к 1. При n = 100 отличие около 0,0658 %. Если удерживать только длину стороны, радиус и размер фигуры меняются — это другое сравнение."
      }
    ],
    "shortDescription": "Объём и площади правильной призмы по стороне основания и высоте.",
    "seoDescription": "Рассчитайте объём, площадь основания, боковую и полную поверхность правильной призмы по числу сторон основания, стороне и высоте.",
    "disclaimer": "Основание правильное, боковые рёбра перпендикулярны ему. Формулы поверхности не относятся к наклонной призме или основанию с неравными сторонами. Выбор единицы только задаёт её смысл; введённые числа не переводятся."
  },
  "en": {
    "longDescription": "A right prism with a regular polygon base is determined by side count n, side length a and perpendicular height h. The base apothem runs from the centre to a side’s midpoint; base area is half the perimeter times that apothem. Rectangular lateral faces give total lateral area equal to base perimeter times height. At n = 4 the base is square; this model does not specify a general rectangle.",
    "howToUse": [
      "Choose the length unit for every input.",
      "Enter how many sides the base polygon has.",
      "Enter the length of one base side.",
      "Enter the height of the prism.",
      "Side count must be an integer from 3 to 100; side length and height are positive. This is the page’s limit, and a fractional count is not rounded to another polygon."
    ],
    "howItWorks": "Apothem = side ÷ (2 × tan(π ÷ n)). Base area = perimeter × apothem ÷ 2. Volume = base area × height, and the lateral surface is perimeter × height.",
    "example": "A hexagonal prism with a 4 cm side and 10 cm height holds 415.69 cm³.",
    "faq": [
      {
        "q": "What makes a prism regular?",
        "a": "A regular polygon as the base and side faces perpendicular to it. Slanted prisms have the same volume but a larger lateral surface, which this calculation does not cover."
      },
      {
        "q": "Why does the base area need an apothem?",
        "a": "Because a regular polygon splits into identical triangles from its centre, each with the side as base and the apothem as height. Summing them gives perimeter × apothem ÷ 2."
      },
      {
        "q": "Is a cuboid a prism?",
        "a": "Yes, a prism with a four-sided base. Entering four sides gives exactly the square-based case, and the formulas reduce to the familiar ones."
      },
      {
        "q": "What happens as the number of sides grows?",
        "a": "Compared with a circle of the same circumradius, the polygon’s area fraction is sin(2π/n)/(2π/n), tending to 1. At n = 100 the difference is about 0.0658%. Holding side length alone fixed changes the radius and overall size, a different comparison."
      }
    ],
    "shortDescription": "Volume and surface areas of a regular prism from base side and height.",
    "seoDescription": "Calculate the volume, base area, lateral and total surface of a regular prism from the number of base sides, the side length and the height.",
    "disclaimer": "The base is regular and lateral edges are perpendicular to it. Surface formulas do not describe an oblique prism or an unequal-sided base. The unit selector sets interpretation only; entered numbers are not converted."
  },
  "uk": {
    "longDescription": "Пряма призма з правильним многокутником в основі визначається кількістю сторін n, стороною a та перпендикулярною висотою h. Апофема основи — відстань від центра до середини сторони; площа дорівнює половині добутку периметра на апофему. Бічні грані прямокутні, тому їхня сумарна площа — периметр основи на висоту. За n = 4 основа квадратна; довільний прямокутник ця модель не задає.",
    "howToUse": [
      "Виберіть одиницю довжини для всіх величин.",
      "Укажіть, скільки сторін має многокутник основи — ціле число, не менше трьох.",
      "Введіть довжину однієї сторони основи.",
      "Введіть висоту призми.",
      "Кількість сторін — ціле число від 3 до 100, сторона та висота додатні. Це межа сторінки; дріб не округлюється до іншого многокутника."
    ],
    "howItWorks": "Апофема основи дорівнює a ÷ (2 · tg(π ÷ n)), а площа основи — периметр, помножений на апофему й поділений навпіл. Об’єм — це площа основи, помножена на висоту. Бічна поверхня дорівнює периметру, помноженому на висоту, бо розгортка бічних граней прямої призми є звичайним прямокутником.",
    "example": "Шестикутна призма зі стороною 4 см і висотою 10 см вміщує 415,69 см³. Периметр її основи — 24 см, тому бічна поверхня становить 240 см².",
    "faq": [
      {
        "q": "Чи можна задати дробову кількість сторін основи?",
        "a": "Сторона або є, або її немає: половини сторони в многокутника не буває. Дробове значення відхиляється, а не округлюється — округлення дало б відповідь на іншу задачу."
      },
      {
        "q": "Що таке апофема основи?",
        "a": "Відстань від центра многокутника до середини сторони, тобто радіус вписаного кола. Через неї площа основи виражається просто: половина периметра на апофему."
      },
      {
        "q": "Чому бічна поверхня рахується так просто?",
        "a": "Бо в прямої призми бічні грані вертикальні, і їхня розгортка — звичайний прямокутник зі сторонами «периметр основи» і «висота». У похилої призми це вже не так."
      },
      {
        "q": "Чи підходить розрахунок для паралелепіпеда?",
        "a": "Для правильного — так, задайте чотири сторони. Для прямокутного паралелепіпеда з різними ребрами потрібен окремий калькулятор: тут основа завжди правильна."
      },
      {
        "q": "Чому тангенс береться від радіанів?",
        "a": "Формула площі правильного многокутника виведена в радіанній мірі. Підстановка градусів у тангенс дала б зовсім інше число, тому переведення виконується всередині розрахунку."
      }
    ],
    "shortDescription": "Об’єм і площі правильної призми за стороною основи та висотою.",
    "seoDescription": "Розрахунок об’єму, площі основи, бічної та повної поверхні правильної призми за кількістю сторін, стороною основи та висотою.",
    "disclaimer": "Основа правильна, бічні ребра перпендикулярні їй. Формули поверхні не описують похилу призму чи основу з нерівними сторонами. Вибір одиниці лише задає її зміст; уведені числа не переводяться."
  },
  "de": {
    "longDescription": "Ein gerades Prisma mit regelmäßigem Vieleck als Grundfläche wird durch Seitenzahl n, Seitenlänge a und senkrechte Höhe h bestimmt. Die Apothema verläuft von der Mitte zum Seitenmittelpunkt; die Grundfläche ist der halbe Umfang mal Apothema. Rechteckige Seitenflächen ergeben eine Mantelfläche von Grundumfang mal Höhe. Bei n = 4 ist die Grundfläche quadratisch; ein allgemeines Rechteck wird damit nicht beschrieben.",
    "howToUse": [
      "Wähle die Längeneinheit für alle Eingaben.",
      "Trage ein, wie viele Seiten das Grundvieleck hat.",
      "Trage die Länge einer Grundseite ein.",
      "Trage die Höhe des Prismas ein.",
      "Die Seitenzahl ist ganzzahlig von 3 bis 100, Seite und Höhe sind positiv. Das ist eine Seitengrenze; ein gebrochener Wert wird nicht auf ein anderes Vieleck gerundet."
    ],
    "howItWorks": "Apothema = Seite ÷ (2 × tan(π ÷ n)). Grundfläche = Umfang × Apothema ÷ 2. Volumen = Grundfläche × Höhe, und die Mantelfläche ist Umfang × Höhe.",
    "example": "Ein sechsseitiges Prisma mit 4 cm Seite und 10 cm Höhe fasst 415,69 cm³.",
    "faq": [
      {
        "q": "Was macht ein Prisma regelmäßig?",
        "a": "Ein regelmäßiges Vieleck als Grundfläche und Seitenflächen senkrecht dazu. Schiefe Prismen haben dasselbe Volumen, aber eine größere Mantelfläche, und die deckt diese Rechnung nicht ab."
      },
      {
        "q": "Warum braucht die Grundfläche eine Apothema?",
        "a": "Weil ein regelmäßiges Vieleck von seiner Mitte aus in gleiche Dreiecke zerfällt, jedes mit der Seite als Grundlinie und der Apothema als Höhe. Ihre Summe ergibt Umfang × Apothema ÷ 2."
      },
      {
        "q": "Ist ein Quader ein Prisma?",
        "a": "Ja, ein Prisma mit vierseitiger Grundfläche. Vier Seiten einzutragen ergibt genau den Fall mit quadratischer Grundfläche, und die Formeln gehen in die vertrauten über."
      },
      {
        "q": "Was passiert, wenn die Seitenzahl wächst?",
        "a": "Gegenüber einem Kreis mit demselben Umkreisradius beträgt der Flächenanteil sin(2π/n)/(2π/n) und nähert sich 1. Bei n = 100 ist die Differenz etwa 0,0658 %. Wird nur die Seitenlänge festgehalten, ändern sich Radius und Gesamtgröße; das ist ein anderer Vergleich."
      }
    ],
    "shortDescription": "Volumen und Flächen eines geraden Prismas mit regelmäßiger Grundfläche.",
    "seoDescription": "Berechne Volumen und Oberflächen eines geraden Prismas mit regelmäßiger Grundfläche aus Seitenzahl, Seitenlänge und Höhe.",
    "disclaimer": "Die Grundfläche ist regelmäßig, die Seitenkanten stehen senkrecht darauf. Die Oberflächenformeln gelten nicht für ein schiefes Prisma oder ungleiche Grundseiten. Die Einheit legt nur die Bedeutung fest; Eingabezahlen werden nicht umgerechnet."
  },
  "es": {
    "longDescription": "Un prisma recto de base poligonal regular se determina con número de lados n, lado a y altura perpendicular h. La apotema va del centro al punto medio de un lado; el área de base es la mitad del perímetro por la apotema. Las caras laterales rectangulares dan un área lateral igual al perímetro de base por la altura. Con n = 4 la base es cuadrada; este modelo no describe un rectángulo general.",
    "howToUse": [
      "Elige la unidad de longitud para todas las entradas.",
      "Introduce cuántos lados tiene el polígono de la base.",
      "Introduce la longitud de un lado de la base.",
      "Introduce la altura del prisma.",
      "El número de lados es entero entre 3 y 100; lado y altura son positivos. Es un límite de la página y un valor fraccionario no se redondea a otro polígono."
    ],
    "howItWorks": "Apotema = lado ÷ (2 × tan(π ÷ n)). Área de la base = perímetro × apotema ÷ 2. Volumen = área de la base × altura, y la superficie lateral es perímetro × altura.",
    "example": "Un prisma hexagonal de 4 cm de lado y 10 cm de altura contiene 415,69 cm³.",
    "faq": [
      {
        "q": "¿Qué hace regular a un prisma?",
        "a": "Un polígono regular como base y caras laterales perpendiculares a ella. Los prismas oblicuos tienen el mismo volumen pero mayor superficie lateral, y ese caso no lo cubre este cálculo."
      },
      {
        "q": "¿Por qué el área de la base necesita una apotema?",
        "a": "Porque un polígono regular se divide desde su centro en triángulos idénticos, cada uno con el lado como base y la apotema como altura. Sumarlos da perímetro × apotema ÷ 2."
      },
      {
        "q": "¿Un ortoedro es un prisma?",
        "a": "Sí, un prisma con base de cuatro lados. Introducir cuatro lados da exactamente el caso de base cuadrada, y las fórmulas se reducen a las conocidas."
      },
      {
        "q": "¿Qué ocurre a medida que crece el número de lados?",
        "a": "Frente a un círculo del mismo radio circunscrito, la fracción de área es sen(2π/n)/(2π/n) y tiende a 1. Con n = 100 la diferencia es aproximadamente 0,0658 %. Mantener solo el lado fijo cambia el radio y el tamaño total; es otra comparación."
      }
    ],
    "shortDescription": "Volumen y superficies de un prisma regular a partir del lado de la base y la altura.",
    "seoDescription": "Calcula el volumen, el área de la base y las superficies lateral y total de un prisma regular a partir del número de lados de la base, la longitud del lado y la altura.",
    "disclaimer": "La base es regular y las aristas laterales son perpendiculares a ella. Las fórmulas de superficie no describen un prisma oblicuo ni una base irregular. El selector solo fija la interpretación; no convierte los números."
  }
};
