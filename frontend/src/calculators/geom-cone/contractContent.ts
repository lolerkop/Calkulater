import type { CalculatorCopy } from '../../lib/platform/types';

type Body = Pick<CalculatorCopy, 'shortDescription' | 'seoDescription' | 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;

// Subject-specific retained and amended copy; source and calculation limits are explicit.
export const contractContent: Record<'ru'|'en'|'uk'|'de'|'es', Body> = {
  "ru": {
    "longDescription": "Считает конус — форму кучи песка, воронки, бункера и крыши-шатра. Кроме объёма выводится образующая: это длина по скату от вершины до края основания, и именно она нужна для раскроя обшивки, тогда как высота — вертикаль от вершины до центра. Их путают чаще всего, а разница заметна: при радиусе 3 и высоте 4 образующая равна 5.",
    "howToUse": [
      "Выберите единицу длины.",
      "Введите радиус основания и вертикальную высоту.",
      "Прочитайте объём, образующую и поверхности.",
      "Радиус и высота должны быть положительными; вершина предполагается над центром круглого основания. Переключение см/м меняет единицу ввода, а не пересчитывает числа."
    ],
    "howItWorks": "V = π · r² · h ÷ 3, образующая l = √(r² + h²), боковая поверхность πrl, полная πr(r + l). Развёртка боковой поверхности — сектор радиуса l с дугой длиной 2πr, поэтому его площадь (2πr)l/2 = πrl.",
    "example": "Конус радиусом 3 м и высотой 4 м имеет образующую 5 м и объём 37,699 м³.",
    "faq": [
      {
        "q": "Чем образующая отличается от высоты?",
        "a": "Высота — вертикаль от вершины до центра основания, образующая — наклонная от вершины до края. Образующая всегда длиннее, и для раскроя обшивки нужна именно она."
      },
      {
        "q": "Почему объём конуса втрое меньше объёма цилиндра?",
        "a": "Потому что конус с тем же основанием и той же высотой занимает ровно треть цилиндра — это классический результат стереометрии."
      },
      {
        "q": "Как посчитать кучу песка?",
        "a": "Измерьте радиус круглого основания и вертикальную высоту. Идеальный конус — приближение к форме насыпи: неровности, уклон основания и уплотнение могут дать отклонение в любую сторону. Геометрический объём не определяет массу без плотности."
      },
      {
        "q": "Что входит в полную поверхность?",
        "a": "Боковая поверхность плюс круглое основание. Для открытой воронки нужна только боковая."
      }
    ],
    "shortDescription": "Объём, образующая и поверхность конуса по радиусу и высоте.",
    "seoDescription": "Рассчитайте объём конуса, длину образующей, боковую и полную площадь поверхности по радиусу и высоте.",
    "disclaimer": "Прямой круговой конус с положительными r и h. Образующая измеряется по скату, высота — перпендикулярно основанию. Объём геометрический; толщина обшивки и запас на раскрой не включены."
  },
  "en": {
    "longDescription": "Works a cone — the shape of a sand pile, a funnel, a hopper or a tent roof. Besides the volume it gives the slant height: the distance along the slope from the apex to the rim, which is what you need for cutting cladding, whereas the height is the vertical from apex to centre. Those two are the ones people mix up, and the gap is real: at radius 3 and height 4 the slant is 5.",
    "howToUse": [
      "Choose the length unit.",
      "Enter the base radius and the vertical height.",
      "Read the volume, slant height and surfaces.",
      "Use positive radius and height, with the apex above the centre of the circular base. Switching cm/m changes input interpretation and does not convert the numbers."
    ],
    "howItWorks": "V = π · r² · h ÷ 3, the slant height is l = √(r² + h²), the lateral surface is πrl and the total is πr(r + l). Unrolling the lateral surface gives a sector of radius l with arc length 2πr, so its area is (2πr)l/2 = πrl.",
    "example": "A cone of radius 3 m and height 4 m has a slant height of 5 m and a volume of 37.699 m³.",
    "faq": [
      {
        "q": "How does the slant height differ from the height?",
        "a": "The height is the vertical from apex to the centre of the base; the slant is the sloping line from apex to the rim. The slant is always longer, and it is the one you need for cutting cladding."
      },
      {
        "q": "Why is a cone a third of a cylinder?",
        "a": "Because a cone with the same base and height occupies exactly one third of that cylinder — a classic result of solid geometry."
      },
      {
        "q": "How do I measure a sand pile?",
        "a": "Measure the circular base radius and vertical height. An ideal cone approximates a pile: uneven shape, base slope and compaction can shift the result in either direction. Geometric volume does not determine mass without density."
      },
      {
        "q": "What does the total surface include?",
        "a": "The lateral surface plus the circular base. For an open funnel only the lateral part applies."
      }
    ],
    "shortDescription": "Volume, slant height and surface area of a cone from radius and height.",
    "seoDescription": "Calculate the volume of a cone, its slant height and its lateral and total surface area from radius and height.",
    "disclaimer": "A right circular cone with positive r and h. Slant height follows the surface; height is perpendicular to the base. Volume is geometric; cladding thickness and cutting allowance are excluded."
  },
  "uk": {
    "longDescription": "Конус — це форма купи піску, лійки, бункера й намету-шатра. Крім об’єму калькулятор показує твірну: довжину по схилу від вершини до краю основи. Саме твірна потрібна для розкрою обшивки, тоді як висота — це вертикаль від вершини до центра основи. Плутають їх найчастіше, а різниця помітна: за радіуса 3 і висоти 4 твірна дорівнює рівно 5.",
    "howToUse": [
      "Виберіть одиницю довжини — усі три результати вийдуть у похідних від неї.",
      "Введіть радіус основи, тобто половину діаметра купи або лійки.",
      "Введіть висоту по вертикалі від вершини до центра основи, а не по схилу.",
      "Прочитайте об’єм, твірну та обидві поверхні.",
      "Радіус і висота мають бути додатними; вершина розташована над центром круглої основи. Перемикання см/м змінює одиницю вводу, а не переводить числа."
    ],
    "howItWorks": "Об’єм рахується як V = π · r² · h ÷ 3, тобто конус займає рівно третину циліндра з тією самою основою й тією самою висотою. Твірна виводиться з теореми Піфагора: l = √(r² + h²), бо радіус, висота й твірна утворюють прямокутний трикутник. Бічна поверхня дорівнює πrl, а повна додає до неї круг основи й дорівнює πr(r + l). Розгортка бічної поверхні є сектором радіуса l з дугою 2πr, тому його площа (2πr)l/2 = πrl.",
    "example": "Конус радіусом 3 м і висотою 4 м має твірну 5 м і об’єм 37,699 м³. Бічна поверхня такого конуса — 47,124 м², а повна разом з основою — 75,398 м².",
    "faq": [
      {
        "q": "Чим твірна відрізняється від висоти?",
        "a": "Висота — це вертикаль від вершини до центра основи, твірна — похила лінія від вершини до краю. Твірна завжди довша, бо є гіпотенузою прямокутного трикутника з катетами r і h. Для розкрою обшивки потрібна саме твірна: висота дасть замалу заготовку."
      },
      {
        "q": "Чому об’єм конуса втричі менший за об’єм циліндра?",
        "a": "Конус із такою самою основою й такою самою висотою займає рівно третину циліндра. Це класичний результат стереометрії, і трійка у знаменнику — не наближення, а точний множник."
      },
      {
        "q": "Як порахувати купу піску?",
        "a": "Виміряйте радіус круглої основи та вертикальну висоту. Ідеальний конус лише наближує насип: нерівності, нахил основи й ущільнення можуть змінити результат у будь-який бік. Геометричний об’єм не визначає масу без густини."
      },
      {
        "q": "Що входить у повну поверхню?",
        "a": "Бічна поверхня плюс круг основи. Для відкритої лійки чи ковпака потрібна лише бічна — основи там немає."
      },
      {
        "q": "Що ввести, якщо відомий діаметр?",
        "a": "Половину діаметра. Радіус удвічі менший, і підстановка діаметра завищила б об’єм у чотири рази, бо радіус входить у формулу в квадраті."
      }
    ],
    "shortDescription": "Об’єм, твірна й поверхня конуса за радіусом і висотою.",
    "seoDescription": "Обчисліть об’єм конуса, довжину твірної, бічну й повну площу поверхні за радіусом і висотою.",
    "disclaimer": "Прямий круговий конус із додатними r та h. Твірна йде по схилу, висота — перпендикулярно основі. Об’єм геометричний; товщина обшивки й припуск на розкрій не враховані."
  },
  "de": {
    "longDescription": "Rechnet einen Kegel durch — die Form eines Sandhaufens, eines Trichters, eines Silotrichters oder eines Zeltdachs. Neben dem Volumen liefert er die Seitenhöhe: den Abstand entlang der Schräge von der Spitze zum Rand, den du zum Zuschneiden einer Verkleidung brauchst, während die Höhe die Senkrechte von der Spitze zur Mitte ist. Genau diese beiden werden verwechselt, und der Unterschied ist real: bei Radius 3 und Höhe 4 beträgt die Seitenhöhe 5.",
    "howToUse": [
      "Wähle die Längeneinheit.",
      "Trage den Grundradius und die senkrechte Höhe ein.",
      "Lies Volumen, Seitenhöhe und die Flächen ab.",
      "Radius und Höhe müssen positiv sein; die Spitze liegt über dem Mittelpunkt der Kreisfläche. cm/m auszuwählen ändert die Eingabeeinheit und rechnet die Zahlen nicht um."
    ],
    "howItWorks": "V = π · r² · h ÷ 3, die Seitenhöhe ist l = √(r² + h²), die Mantelfläche ist πrl und die Gesamtoberfläche πr(r + l). Die abgewickelte Mantelfläche ist ein Sektor mit Radius l und Bogenlänge 2πr; seine Fläche ist daher (2πr)l/2 = πrl.",
    "example": "Ein Kegel mit dem Radius 3 m und der Höhe 4 m hat eine Seitenhöhe von 5 m und ein Volumen von 37,699 m³.",
    "faq": [
      {
        "q": "Wie unterscheidet sich die Seitenhöhe von der Höhe?",
        "a": "Die Höhe ist die Senkrechte von der Spitze zur Mitte der Grundfläche; die Seitenhöhe ist die schräge Linie von der Spitze zum Rand. Die Seitenhöhe ist immer länger, und sie ist es, die du zum Zuschneiden einer Verkleidung brauchst."
      },
      {
        "q": "Warum ist ein Kegel ein Drittel eines Zylinders?",
        "a": "Weil ein Kegel mit gleicher Grundfläche und Höhe genau ein Drittel dieses Zylinders einnimmt — ein klassisches Ergebnis der Raumgeometrie."
      },
      {
        "q": "Wie messe ich einen Sandhaufen?",
        "a": "Miss den Radius der kreisförmigen Grundfläche und die senkrechte Höhe. Ein idealer Kegel nähert einen Haufen nur an: Unebenheiten, Bodenneigung und Verdichtung können das Ergebnis in beide Richtungen verändern. Ohne Dichte ergibt das geometrische Volumen keine Masse."
      },
      {
        "q": "Was gehört zur Gesamtoberfläche?",
        "a": "Die Mantelfläche plus die kreisförmige Grundfläche. Bei einem offenen Trichter zählt nur der Mantel."
      }
    ],
    "shortDescription": "Volumen, Seitenhöhe und Oberfläche eines Kegels aus Radius und Höhe.",
    "seoDescription": "Berechne das Volumen eines Kegels, seine Seitenhöhe sowie Mantel- und Gesamtoberfläche aus Radius und Höhe.",
    "disclaimer": "Gerader Kreiskegel mit positiven r und h. Die Mantellinie verläuft schräg, die Höhe senkrecht zur Grundfläche. Das Volumen ist geometrisch; Wandstärke und Zuschnittzugaben fehlen."
  },
  "es": {
    "longDescription": "Resuelve un cono: la forma de un montón de arena, un embudo, una tolva o el techo de una tienda de campaña. Además del volumen da la generatriz: la distancia por la pendiente desde el vértice hasta el borde, que es la que necesitas para cortar un revestimiento, mientras que la altura es la vertical desde el vértice hasta el centro. Esas dos son las que se confunden, y la diferencia es real: con radio 3 y altura 4, la generatriz vale 5.",
    "howToUse": [
      "Elige la unidad de longitud.",
      "Introduce el radio de la base y la altura vertical.",
      "Consulta el volumen, la generatriz y las superficies.",
      "Usa radio y altura positivos, con el vértice sobre el centro de la base circular. Cambiar cm/m modifica la interpretación de entrada y no convierte los números."
    ],
    "howItWorks": "V = π · r² · h ÷ 3; la generatriz es l = √(r² + h²), la superficie lateral es πrl y la total, πr(r + l). Al desplegar la superficie lateral se obtiene un sector de radio l y arco 2πr; su área es (2πr)l/2 = πrl.",
    "example": "Un cono de 3 m de radio y 4 m de altura tiene una generatriz de 5 m y un volumen de 37,699 m³.",
    "faq": [
      {
        "q": "¿En qué se diferencian la generatriz y la altura?",
        "a": "La altura es la vertical del vértice al centro de la base; la generatriz es la línea inclinada del vértice al borde. La generatriz siempre es más larga, y es la que hace falta para cortar un revestimiento."
      },
      {
        "q": "¿Por qué un cono es la tercera parte de un cilindro?",
        "a": "Porque un cono con la misma base y la misma altura ocupa exactamente un tercio de ese cilindro: un resultado clásico de la geometría del espacio."
      },
      {
        "q": "¿Cómo mido un montón de arena?",
        "a": "Mide el radio de la base circular y la altura perpendicular. Un cono ideal aproxima un montón: las irregularidades, la inclinación del suelo y la compactación pueden desviar el resultado en cualquier sentido. El volumen geométrico no da la masa sin densidad."
      },
      {
        "q": "¿Qué incluye la superficie total?",
        "a": "La superficie lateral más la base circular. Para un embudo abierto solo cuenta la parte lateral."
      }
    ],
    "shortDescription": "Volumen, generatriz y superficie de un cono a partir del radio y la altura.",
    "seoDescription": "Calcula el volumen de un cono, su generatriz y sus superficies lateral y total a partir del radio y la altura.",
    "disclaimer": "Cono circular recto con r y h positivos. La generatriz sigue la superficie y la altura es perpendicular a la base. El volumen es geométrico; no incluye espesor ni margen de corte."
  }
};
