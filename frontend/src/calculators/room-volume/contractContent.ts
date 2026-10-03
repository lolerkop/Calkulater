import type { CalculatorCopy } from '../../lib/platform/types';
// Individually read actual immutable145 body; agent-authored amendment is not human approval.
export const buildingWave16ContractContent = {
  "ru": {
    "longDescription": "Считает объём помещения по длине, ширине и высоте или по известной площади пола и высоте. В режиме размеров дополнительно показывает периметр и площадь стен — величины, с которых начинается расчёт краски и обоев.",
    "howItWorks": "Объём V = A·H. В режиме размеров A = L·W, периметр P = 2(L + W), площадь четырёх стен = P·H без вычета проёмов. В режиме известной площади выводятся только V, A и H: периметр и стены по одной площади определить нельзя. Все активные размеры положительны и конечны; скрытые размеры не участвуют. Для переменной высоты V требует площади-взвешенной средней высоты.",
    "howToUse": [
      "Выберите, чем измеряете помещение.",
      "Введите размеры или площадь пола.",
      "Укажите высоту потолка."
    ],
    "example": "Комната 5 × 4 м с потолком 2,7 м вмещает 54 м³.",
    "faq": [
      {
        "q": "Почему в режиме площади нет площади стен?",
        "a": "Стены зависят от периметра, а одну и ту же площадь пола дают комнаты разной формы. Без длины и ширины считать не из чего."
      },
      {
        "q": "Вычитаются ли двери и окна?",
        "a": "Нет, это полная величина. Проёмы учитывают калькуляторы краски и обоев."
      },
      {
        "q": "Для чего нужен объём помещения?",
        "a": "Чаще всего для подбора вентиляции и отопления: там важен объём воздуха, который нужно прогреть или переместить."
      },
      {
        "q": "Влияет ли форма потолка?",
        "a": "Да. Нужна средняя высота, взвешенная по площади пола. Для прямоугольной комнаты с линейно наклонённым потолком среднее двух крайних высот даёт объём; для произвольной формы разбейте помещение на части или интегрируйте высоту. Площадь наклонных стен этим не определяется."
      }
    ],
    "disclaimer": "Для переменной высоты V требует площади-взвешенной средней высоты."
  },
  "en": {
    "longDescription": "Calculates room volume either from length, width and height or from a known floor area and height. With dimensions it also reports the perimeter and wall area, which is what paint and wallpaper estimates start from.",
    "howItWorks": "Volume V = A·H. Dimensions mode uses A = L·W, perimeter P = 2(L + W) and four-wall area P·H without subtracting openings. Known-area mode returns only V, A and H: floor area alone cannot determine perimeter or walls. Active dimensions are positive and finite; hidden dimensions are ignored. A variable-height space requires an area-weighted mean height for V.",
    "howToUse": [
      "Choose how you are measuring.",
      "Enter the dimensions or the floor area.",
      "Enter the ceiling height."
    ],
    "example": "A room 5 × 4 m with a 2.7 m ceiling holds 54 m³.",
    "faq": [
      {
        "q": "Why does the area mode not show wall area?",
        "a": "Walls depend on the perimeter, and many different room shapes share one floor area. Without length and width there is nothing to compute it from."
      },
      {
        "q": "Are doors and windows subtracted?",
        "a": "No. This is the gross figure; openings are handled by the paint and wallpaper calculators."
      },
      {
        "q": "What is room volume used for?",
        "a": "Ventilation and heating sizing mostly, where the air being moved or warmed is what matters."
      },
      {
        "q": "Does ceiling shape matter?",
        "a": "Yes. Use a mean height weighted by floor area. In a rectangular room with a linearly sloping ceiling, the mean of its two end heights gives volume; split arbitrary shapes into parts or integrate height. This does not determine sloping wall areas."
      }
    ],
    "disclaimer": "Results are reference estimates. Verify the inputs before making important decisions."
  },
  "uk": {
    "longDescription": "Рахує об’єм приміщення як площу підлоги, помножену на висоту. Якщо відомі довжина й ширина прямокутної кімнати, окремо показує периметр та площу чотирьох стін. Якщо відома лише площа підлоги, стіни й периметр не визначаються. Проєми не віднімаються автоматично; геометричний об’єм не замінює розрахунок вентиляції чи теплового навантаження.",
    "howItWorks": "Об’єм V = A·H. За розмірами A = L·W, периметр P = 2(L + W), площа чотирьох стін = P·H без віднімання прорізів. За відомою площею виводяться лише V, A і H: периметр та стіни з однієї площі визначити неможливо. Активні розміри додатні й скінченні; приховані не беруть участі. За змінної висоти потрібна середня висота, зважена за площею.",
    "howToUse": [
      "Виберіть розміри прямокутної кімнати або відому площу підлоги.",
      "Введіть активні розміри в м або площу в м².",
      "Введіть висоту; площа стін з’являється лише в режимі розмірів."
    ],
    "example": "Кімната 5 × 4 м зі стелею 2,7 м вміщує 54 м³, а площа її стін становить 48,6 м².",
    "faq": [
      {
        "q": "Навіщо потрібен об’єм приміщення?",
        "a": "Для розрахунку вентиляції за кратністю, потужності кондиціонера та об’єму повітря в системі опалення. Площа для цих задач не підходить: важлива саме кубатура."
      },
      {
        "q": "Чи віднімати вікна й двері з площі стін?",
        "a": "Для фарбування й шпалер — так, великі прорізи варто відняти. Для оцінки об’єму це не має значення: прорізи об’єм не зменшують."
      },
      {
        "q": "Як рахувати кімнату складної форми?",
        "a": "Розбийте її на прямокутники, порахуйте кожен окремо й складіть. Для скошеної стелі беріть середню висоту."
      },
      {
        "q": "Яка потужність кондиціонера потрібна?",
        "a": "Об’єм або площа самі не визначають потрібну потужність. Потрібні теплові надходження, огородження, сонце, люди, обладнання та умови роботи. Калькулятор кімнати не застосовує універсальний коефіцієнт кВт/м² і не підбирає кондиціонер."
      }
    ],
    "disclaimer": "Результати є орієнтовними оцінками. Перед важливими рішеннями перевіряйте дані."
  },
  "de": {
    "longDescription": "Berechnet das Raumvolumen entweder aus Länge, Breite und Höhe oder aus einer bekannten Bodenfläche und der Höhe. Mit den Maßen nennt er zusätzlich Umfang und Wandfläche, und damit beginnen Schätzungen für Farbe und Tapete.",
    "howItWorks": "Volumen V = A·H. Im Maßmodus gilt A = L·W, Umfang P = 2(L + W) und Fläche der vier Wände P·H ohne Abzug von Öffnungen. Im Flächenmodus erscheinen nur V, A und H; aus der Bodenfläche allein folgen weder Umfang noch Wandfläche. Aktive Maße sind positiv und endlich, ausgeblendete Maße werden ignoriert. Bei wechselnder Höhe benötigt V eine flächengewichtete mittlere Höhe.",
    "howToUse": [
      "Wähle, wie du misst.",
      "Trage die Maße oder die Bodenfläche ein.",
      "Trage die Raumhöhe ein."
    ],
    "example": "Ein Raum von 5 × 4 m mit 2,7 m Höhe fasst 54 m³.",
    "faq": [
      {
        "q": "Warum zeigt der Flächenmodus keine Wandfläche?",
        "a": "Die Wände hängen am Umfang, und viele verschiedene Raumformen teilen eine Bodenfläche. Ohne Länge und Breite gibt es nichts, woraus sie sich berechnen ließe."
      },
      {
        "q": "Werden Türen und Fenster abgezogen?",
        "a": "Nein. Das ist der Bruttowert; Öffnungen behandeln die Rechner für Farbe und Tapete."
      },
      {
        "q": "Wozu dient das Raumvolumen?",
        "a": "Vor allem für die Auslegung von Lüftung und Heizung, wo es auf die bewegte oder erwärmte Luft ankommt."
      },
      {
        "q": "Spielt die Deckenform eine Rolle?",
        "a": "Ja. Die mittlere Höhe muss nach Bodenfläche gewichtet sein. Beim Rechteckraum mit linear geneigter Decke ergibt der Mittelwert der beiden Endhöhen das Volumen; beliebige Formen aufteilen oder die Höhe integrieren. Geneigte Wandflächen folgen daraus nicht."
      }
    ],
    "disclaimer": "Die Ergebnisse sind Orientierungswerte. Prüfe die Eingaben vor wichtigen Entscheidungen."
  },
  "es": {
    "longDescription": "Calcula el volumen de una habitación a partir del largo, el ancho y la altura, o de una superficie de suelo conocida y la altura. Con las dimensiones indica además el perímetro y la superficie de las paredes, que es de donde parten las estimaciones de pintura y papel pintado.",
    "howItWorks": "Volumen V = A·H. El modo por dimensiones usa A = L·W, perímetro P = 2(L + W) y área de cuatro paredes P·H sin descontar huecos. Con área conocida solo devuelve V, A y H: el área de suelo no determina el perímetro ni las paredes. Las dimensiones activas son positivas y finitas; las ocultas se ignoran. Una altura variable requiere una media ponderada por superficie.",
    "howToUse": [
      "Elige cómo vas a medir.",
      "Introduce las dimensiones o la superficie del suelo.",
      "Introduce la altura del techo."
    ],
    "example": "Una habitación de 5 × 4 m con un techo de 2,7 m contiene 54 m³.",
    "faq": [
      {
        "q": "¿Por qué el modo por superficie no muestra la superficie de las paredes?",
        "a": "Las paredes dependen del perímetro, y muchas formas distintas de habitación comparten una misma superficie de suelo. Sin el largo y el ancho no hay con qué calcularla."
      },
      {
        "q": "¿Se restan las puertas y las ventanas?",
        "a": "No. Esta es la cifra bruta; los huecos los tratan las calculadoras de pintura y de papel pintado."
      },
      {
        "q": "¿Para qué sirve el volumen de una habitación?",
        "a": "Sobre todo para dimensionar ventilación y calefacción, donde lo que cuenta es el aire que se mueve o se calienta."
      },
      {
        "q": "¿Importa la forma del techo?",
        "a": "Sí. La altura media debe ponderarse por el área de suelo. En una habitación rectangular con techo de pendiente lineal, la media de las dos alturas extremas da el volumen; divide formas arbitrarias o integra la altura. Así no se determinan las superficies de paredes inclinadas."
      }
    ],
    "disclaimer": "Los resultados son estimaciones orientativas. Verifica los datos de partida antes de tomar decisiones importantes."
  }
} satisfies Record<'ru'|'en'|'uk'|'de'|'es',Partial<CalculatorCopy>>;
