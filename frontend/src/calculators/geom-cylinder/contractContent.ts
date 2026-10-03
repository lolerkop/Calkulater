import type { CalculatorCopy } from '../../lib/platform/types';

type Body = Pick<CalculatorCopy, 'shortDescription' | 'seoDescription' | 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;

// Subject-specific retained and amended copy; source and calculation limits are explicit.
export const contractContent: Record<'ru'|'en'|'uk'|'de'|'es', Body> = {
  "ru": {
    "longDescription": "Считает цилиндр — форму бочки, трубы, бака и колодезного кольца. Кроме объёма выводятся две поверхности, и путать их не стоит: боковая нужна, когда считают обёртку или утеплитель на трубу, полная — когда красят ёмкость целиком вместе с донцем и крышкой. Объём выводится в кубе выбранной единицы, поверхность — в квадрате.",
    "howToUse": [
      "Выберите единицу длины.",
      "Введите радиус основания и высоту.",
      "Прочитайте объём и обе поверхности.",
      "Используйте положительные r и h для прямого кругового цилиндра. Для вместимости вводите внутренний радиус; объём стенок трубы здесь не вычисляется."
    ],
    "howItWorks": "V = π · r² · h, боковая поверхность 2πrh, полная 2πr(r + h) — то есть боковая плюс два основания.",
    "example": "При r = 3 м и h = 10 м объём 90π ≈ 282,74 м³, боковая поверхность 60π ≈ 188,50 м², полная поверхность 78π ≈ 245,04 м².",
    "faq": [
      {
        "q": "Чем боковая поверхность отличается от полной?",
        "a": "Боковая — только стенка, развёртка которой является прямоугольником 2πr на h. Полная добавляет к ней два круглых основания."
      },
      {
        "q": "Как перевести объём в литры?",
        "a": "Один кубический дециметр равен литру, а кубометр — тысяче литров. Считайте объём в метрах и умножайте на 1000."
      },
      {
        "q": "Подходит ли расчёт для трубы?",
        "a": "Для наружного объёма и площади — да. Внутренний просвет трубы считается отдельно по внутреннему радиусу, толщина стенки здесь не учитывается."
      },
      {
        "q": "Что вводить, если известен диаметр?",
        "a": "Половину диаметра. Радиус вдвое меньше, и подстановка диаметра завысила бы объём вчетверо."
      }
    ],
    "shortDescription": "Объём, боковая и полная поверхность цилиндра по радиусу и высоте.",
    "seoDescription": "Рассчитайте объём, боковую и полную площадь поверхности цилиндра по радиусу и высоте.",
    "disclaimer": "Прямой круговой цилиндр; h перпендикулярна основаниям. Полная поверхность включает два основания, боковая — только стенку. Числа при переключении единицы не конвертируются; модель не рассчитывает частичное заполнение лежащего бака."
  },
  "en": {
    "longDescription": "Works a cylinder — the shape of a barrel, a pipe, a tank or a well ring. Besides the volume it reports two surfaces, and the difference matters: the lateral one is what you need for wrapping or lagging a pipe, the total one for painting a vessel including its base and lid. Volume comes in the cube of the chosen unit, surfaces in its square.",
    "howToUse": [
      "Choose the length unit.",
      "Enter the base radius and the height.",
      "Read the volume and both surfaces.",
      "Use positive r and h for a right circular cylinder. For capacity, enter the inner radius; pipe-wall material volume is not calculated here."
    ],
    "howItWorks": "V = π · r² · h, the lateral surface is 2πrh and the total is 2πr(r + h) — the lateral surface plus two bases.",
    "example": "At r = 3 m and h = 10 m, volume is 90π ≈ 282.74 m³, lateral area 60π ≈ 188.50 m² and total surface area 78π ≈ 245.04 m².",
    "faq": [
      {
        "q": "How does the lateral surface differ from the total?",
        "a": "The lateral one is the wall alone, which unrolls into a rectangle 2πr by h. The total adds the two circular bases to it."
      },
      {
        "q": "How do I convert the volume to litres?",
        "a": "A cubic decimetre is a litre and a cubic metre is a thousand litres, so compute in metres and multiply by 1000."
      },
      {
        "q": "Does this work for a pipe?",
        "a": "For the outer volume and area, yes. The bore is a separate calculation from the inner radius; wall thickness is not modelled here."
      },
      {
        "q": "What if I know the diameter?",
        "a": "Enter half of it. The radius is half the diameter, and substituting the diameter would overstate the volume fourfold."
      }
    ],
    "shortDescription": "Volume, lateral and total surface area of a cylinder from radius and height.",
    "seoDescription": "Calculate the volume, lateral and total surface area of a cylinder from its radius and height.",
    "disclaimer": "A right circular cylinder, with h perpendicular to its bases. Total surface includes two bases; lateral surface is the wall alone. Changing the unit does not convert the numbers, and the model does not calculate partial filling of a horizontal tank."
  },
  "uk": {
    "longDescription": "Циліндром описують бочку, трубу, бак і колодязне кільце. Калькулятор показує дві поверхні окремо, і це не надмірність: бічна потрібна, коли рахують обгортку чи утеплювач на трубу, а повна — коли фарбують ємність цілком разом із дном і кришкою. Об’єм виходить у кубі вибраної одиниці, поверхня — у квадраті.",
    "howToUse": [
      "Виберіть одиницю довжини для радіуса й висоти.",
      "Введіть радіус основи — половину діаметра, а не сам діаметр.",
      "Введіть висоту циліндра.",
      "Прочитайте об’єм, бічну й повну поверхню та площу основи.",
      "Використовуйте додатні r та h для прямого кругового циліндра. Для місткості вводьте внутрішній радіус; об’єм матеріалу стінки труби тут не обчислюється."
    ],
    "howItWorks": "Об’єм дорівнює площі основи, помноженій на висоту: V = π · r² · h. Бічна поверхня — це розгортка стінки, звичайний прямокутник зі сторонами 2πr і h, тому вона дорівнює 2πrh. Повна поверхня додає до стінки два круги основ і дорівнює 2πr(r + h).",
    "example": "За r = 3 м та h = 10 м об’єм 90π ≈ 282,74 м³, бічна поверхня 60π ≈ 188,50 м², повна поверхня 78π ≈ 245,04 м².",
    "faq": [
      {
        "q": "Чим бічна поверхня відрізняється від повної?",
        "a": "Бічна — це лише стінка, розгортка якої є прямокутником 2πr на h. Повна додає до неї два круглі основи. Для утеплення труби беруть бічну, для фарбування бака цілком — повну."
      },
      {
        "q": "Як перевести об’єм у літри?",
        "a": "Один кубічний дециметр дорівнює літру, а кубометр — тисячі літрів. Рахуйте об’єм у метрах і множте на 1000, або рахуйте в сантиметрах і діліть на 1000."
      },
      {
        "q": "Чи підходить розрахунок для труби?",
        "a": "Для зовнішнього об’єму та площі — так. Внутрішній просвіт труби рахується окремо за внутрішнім радіусом; товщина стінки тут не моделюється."
      },
      {
        "q": "Що вводити, якщо відомий діаметр?",
        "a": "Половину діаметра. Радіус удвічі менший, а входить у формулу в квадраті, тому підстановка діаметра завищила б об’єм учетверо."
      },
      {
        "q": "Чи залежить об’єм від того, як стоїть циліндр?",
        "a": "Ні. Висота — це відстань між основами вздовж осі, і лежача бочка має той самий об’єм, що й поставлена сторч. Змінюється лише те, яку величину ви називаєте висотою."
      }
    ],
    "shortDescription": "Об’єм, бічна й повна поверхня циліндра за радіусом і висотою.",
    "seoDescription": "Обчисліть об’єм, бічну й повну площу поверхні циліндра за радіусом і висотою.",
    "disclaimer": "Прямий круговий циліндр; h перпендикулярна основам. Повна поверхня містить дві основи, бічна — лише стінку. Зміна одиниці не переводить числа; модель не рахує часткове заповнення горизонтального бака."
  },
  "de": {
    "longDescription": "Rechnet einen Zylinder durch — die Form eines Fasses, eines Rohres, eines Tanks oder eines Brunnenrings. Neben dem Volumen nennt er zwei Flächen, und der Unterschied zählt: die Mantelfläche brauchst du zum Umwickeln oder Dämmen eines Rohres, die Gesamtoberfläche zum Streichen eines Behälters samt Boden und Deckel. Das Volumen kommt in der dritten Potenz der gewählten Einheit, die Flächen in ihrer zweiten.",
    "howToUse": [
      "Wähle die Längeneinheit.",
      "Trage den Grundradius und die Höhe ein.",
      "Lies das Volumen und beide Flächen ab.",
      "Verwende positive r und h für einen geraden Kreiszylinder. Für Fassungsvermögen ist der Innenradius nötig; das Materialvolumen einer Rohrwand wird hier nicht berechnet."
    ],
    "howItWorks": "V = π · r² · h, die Mantelfläche ist 2πrh und die Gesamtoberfläche 2πr(r + h) — die Mantelfläche plus zwei Grundflächen.",
    "example": "Bei r = 3 m und h = 10 m beträgt das Volumen 90π ≈ 282,74 m³, die Mantelfläche 60π ≈ 188,50 m² und die Gesamtoberfläche 78π ≈ 245,04 m².",
    "faq": [
      {
        "q": "Wie unterscheidet sich die Mantelfläche von der Gesamtoberfläche?",
        "a": "Die Mantelfläche ist allein die Wand, die sich zu einem Rechteck von 2πr mal h abrollen lässt. Die Gesamtoberfläche zählt die beiden kreisförmigen Grundflächen dazu."
      },
      {
        "q": "Wie rechne ich das Volumen in Liter um?",
        "a": "Ein Kubikdezimeter ist ein Liter und ein Kubikmeter tausend Liter, rechne also in Metern und multipliziere mit 1000."
      },
      {
        "q": "Gilt das auch für ein Rohr?",
        "a": "Für das äußere Volumen und die äußere Fläche ja. Die Bohrung ist eine eigene Rechnung aus dem inneren Radius; die Wandstärke steckt hier nicht im Modell."
      },
      {
        "q": "Was, wenn ich den Durchmesser kenne?",
        "a": "Trage seine Hälfte ein. Der Radius ist der halbe Durchmesser, und den Durchmesser einzusetzen setzte das Volumen um das Vierfache zu hoch an."
      }
    ],
    "shortDescription": "Volumen sowie Mantel- und Gesamtoberfläche eines Zylinders aus Radius und Höhe.",
    "seoDescription": "Berechne Volumen sowie Mantel- und Gesamtoberfläche eines Zylinders aus seinem Radius und seiner Höhe.",
    "disclaimer": "Gerader Kreiszylinder mit h senkrecht zu den Grundflächen. Die Gesamtoberfläche enthält zwei Grundflächen, die Mantelfläche nur die Wand. Ein Einheitenwechsel rechnet Zahlen nicht um; Teilfüllungen eines liegenden Tanks werden nicht berechnet."
  },
  "es": {
    "longDescription": "Resuelve un cilindro: la forma de un bidón, un tubo, un depósito o un anillo de pozo. Además del volumen da dos superficies, y la diferencia importa: la lateral es la que necesitas para envolver o calorifugar un tubo, y la total para pintar un recipiente incluyendo el fondo y la tapa. El volumen viene en el cubo de la unidad elegida y las superficies, en su cuadrado.",
    "howToUse": [
      "Elige la unidad de longitud.",
      "Introduce el radio de la base y la altura.",
      "Consulta el volumen y ambas superficies.",
      "Usa r y h positivos para un cilindro circular recto. Para capacidad, introduce el radio interior; aquí no se calcula el volumen del material de la pared de un tubo."
    ],
    "howItWorks": "V = π · r² · h; la superficie lateral es 2πrh y la total, 2πr(r + h): la lateral más las dos bases.",
    "example": "Con r = 3 m y h = 10 m, el volumen es 90π ≈ 282,74 m³, el área lateral 60π ≈ 188,50 m² y la superficie total 78π ≈ 245,04 m².",
    "faq": [
      {
        "q": "¿En qué se diferencian la superficie lateral y la total?",
        "a": "La lateral es solo la pared, que desenrollada da un rectángulo de 2πr por h. La total le añade las dos bases circulares."
      },
      {
        "q": "¿Cómo paso el volumen a litros?",
        "a": "Un decímetro cúbico es un litro y un metro cúbico son mil litros, así que calcula en metros y multiplica por 1000."
      },
      {
        "q": "¿Vale para un tubo?",
        "a": "Para el volumen y el área exteriores, sí. El hueco es un cálculo aparte con el radio interior; el espesor de pared no está modelado aquí."
      },
      {
        "q": "¿Y si conozco el diámetro?",
        "a": "Introduce la mitad. El radio es la mitad del diámetro, y poner el diámetro cuadruplicaría el volumen."
      }
    ],
    "shortDescription": "Volumen y superficies lateral y total de un cilindro a partir del radio y la altura.",
    "seoDescription": "Calcula el volumen y las superficies lateral y total de un cilindro a partir de su radio y su altura.",
    "disclaimer": "Cilindro circular recto, con h perpendicular a las bases. La superficie total incluye dos bases; la lateral es solo la pared. Cambiar la unidad no convierte los números y el modelo no calcula el llenado parcial de un depósito horizontal."
  }
};
