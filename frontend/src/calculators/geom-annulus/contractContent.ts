import type { CalculatorCopy } from '../../lib/platform/types';

type Body = Pick<CalculatorCopy, 'shortDescription' | 'seoDescription' | 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;

// Subject-specific retained and amended copy; source and calculation limits are explicit.
export const contractContent: Record<'ru'|'en'|'uk'|'de'|'es', Body> = {
  "ru": {
    "longDescription": "Кольцо между концентрическими окружностями имеет площадь π(R² − r²). Формула π(R − r)² описывает другой объект — круг радиуса R − r — и для узкого кольца может выглядеть правдоподобно, хотя даёт неверный результат. Здесь рассчитывается положительная ширина: R > r ≥ 0. Равные радиусы — вырожденный случай нулевой площади, который этот инструмент исключает; r = 0 допускается и даёт сплошной круг.",
    "howToUse": [
      "Выберите единицу длины.",
      "Введите внешний радиус.",
      "Введите внутренний радиус — он должен быть меньше внешнего.",
      "Для сплошного круга оставьте внутренний радиус нулевым."
    ],
    "howItWorks": "S = π(R²−r²) = π(R−r)(R+r). Разложение на множители избегает вычитания близких квадратов. Ширина R−r, окружности 2πR и 2πr, средний радиус (R+r)/2. При r = 0 внутренняя окружность равна нулю.",
    "example": "У кольца с радиусами 10 и 6 см площадь равна 201,06 см², а ширина — 4 см.",
    "faq": [
      {
        "q": "Почему нельзя посчитать площадь как π(R − r)²?",
        "a": "Потому что это площадь круга радиуса R − r, а не кольца. Для радиусов 10 и 6 верный ответ 201,06 см², а ошибочный — 50,27 см²: разница вчетверо, хотя оба числа выглядят правдоподобно."
      },
      {
        "q": "Что если внутренний радиус равен нулю?",
        "a": "Получится сплошной круг, и расчёт это допускает: площадь станет πR², а внутренняя окружность — нулевой."
      },
      {
        "q": "Почему внутренний радиус не может равняться внешнему?",
        "a": "В модели этой страницы нужна положительная ширина R − r. При R = r площадь математически равна нулю, но вырожденный случай здесь отклоняется. Для сплошного круга задайте r = 0."
      },
      {
        "q": "Зачем нужен средний радиус?",
        "a": "Средний радиус Rср = (R+r)/2 задаёт длину средней окружности 2πRср. Её произведение на ширину равно площади кольца точно: 2πRср(R−r) = π(R²−r²). Это тождество не требует узкого кольца; превращение материала в прямую полосу — отдельная задача."
      },
      {
        "q": "Как посчитать площадь трубы в сечении?",
        "a": "Это ровно та же задача: внешний радиус трубы и внутренний радиус просвета. Разность даёт площадь металла в поперечном сечении."
      }
    ],
    "shortDescription": "Площадь кольца между двумя окружностями, его ширина и длины окружностей.",
    "seoDescription": "Рассчитайте площадь кольца, его ширину, длины внешней и внутренней окружностей и средний радиус.",
    "disclaimer": "Две окружности имеют один центр; инструмент требует R > r ≥ 0. При смене единицы числа не переводятся автоматически. Для смещённого отверстия или овального сечения эта модель кольца неприменима."
  },
  "en": {
    "longDescription": "An annulus between concentric circles has area π(R² − r²). The expression π(R − r)² describes a different shape, a disc of radius R − r, and can look plausible for a narrow ring while giving the wrong answer. This tool handles positive width, R > r ≥ 0. Equal radii are a zero-area degenerate case excluded here; r = 0 is allowed and gives a solid disc.",
    "howToUse": [
      "Choose the length unit.",
      "Enter the outer radius.",
      "Enter the inner radius — it must be smaller than the outer one.",
      "Leave the inner radius at zero for a solid disc."
    ],
    "howItWorks": "S = π(R²−r²) = π(R−r)(R+r). The factored form avoids subtracting nearly equal squares. Width is R−r, circumferences are 2πR and 2πr, and mean radius is (R+r)/2. At r = 0 the inner circumference is zero.",
    "example": "A ring with radii of 10 and 6 cm has an area of 201.06 cm² and a width of 4 cm.",
    "faq": [
      {
        "q": "Why can't the area be π(R − r)²?",
        "a": "Because that is the area of a disc of radius R − r, not of the ring. For radii 10 and 6 the correct answer is 201.06 cm² while the mistaken one is 50.27 cm² — a factor of four apart, though both look plausible."
      },
      {
        "q": "What if the inner radius is zero?",
        "a": "You get a solid disc, and the calculation allows it: the area becomes πR² and the inner circumference is zero."
      },
      {
        "q": "Why can't the inner radius equal the outer one?",
        "a": "This page requires positive width R − r. At R = r the mathematical area is zero, but this degenerate case is rejected here. Enter r = 0 for a solid disc."
      },
      {
        "q": "What is the mean radius for?",
        "a": "The mean radius (R+r)/2 gives the midline circumference. Circumference times width equals the annulus area exactly: 2πR_mean(R−r) = π(R²−r²). The identity does not require a narrow ring; physically flattening material into a straight strip is a separate question."
      },
      {
        "q": "How do I find the cross-section of a pipe?",
        "a": "It is exactly this problem: the outer radius of the pipe and the inner radius of the bore. The difference gives the area of metal in cross-section."
      }
    ],
    "shortDescription": "Area of the ring between two circles, its width and both circumferences.",
    "seoDescription": "Calculate the area of an annulus, its width, the outer and inner circumferences and the mean radius.",
    "disclaimer": "The circles share one centre and require R > r ≥ 0. Selecting a unit does not convert existing numbers. An off-centre hole or oval cross-section needs a different geometric model."
  },
  "uk": {
    "longDescription": "Кільце між концентричними колами має площу π(R² − r²). Вираз π(R − r)² описує іншу фігуру — круг радіуса R − r — і для вузького кільця може виглядати правдоподібно, хоча дає хибний результат. Тут розглядається додатна ширина: R > r ≥ 0. Рівні радіуси є виродженим випадком нульової площі, який цей інструмент виключає; r = 0 допускається й дає суцільний круг.",
    "howToUse": [
      "Виберіть одиницю довжини.",
      "Введіть зовнішній радіус.",
      "Введіть внутрішній радіус — він має бути меншим за зовнішній.",
      "Для суцільного круга залиште внутрішній радіус нульовим."
    ],
    "howItWorks": "S = π(R²−r²) = π(R−r)(R+r). Розкладання на множники уникає віднімання близьких квадратів. Ширина R−r, довжини кіл 2πR та 2πr, середній радіус (R+r)/2. За r = 0 внутрішнє коло має нульову довжину.",
    "example": "Кільце з радіусами 10 і 6 см має площу 201,06 см² і ширину 4 см. Хибний запис π(R − r)² дав би 50,27 см² — учетверо менше.",
    "faq": [
      {
        "q": "Чому не можна порахувати площу як π(R − r)²?",
        "a": "Бо цей вираз дає площу круга радіуса R − r, а не кільця. Правильна формула — різниця двох кругів π(R² − r²). Для радіусів 10 і 6 різниця між відповідями чотирикратна."
      },
      {
        "q": "Що коли внутрішній радіус дорівнює нулю?",
        "a": "Виходить суцільний круг, і формула зводиться до πR². Такий ввід законний і не відхиляється."
      },
      {
        "q": "Чому внутрішній радіус не може дорівнювати зовнішньому?",
        "a": "Модель цієї сторінки потребує додатної ширини R − r. За R = r математична площа нульова, але вироджений випадок тут відхиляється. Для суцільного круга задайте r = 0."
      },
      {
        "q": "Навіщо потрібен середній радіус?",
        "a": "Середній радіус (R+r)/2 задає довжину середнього кола. Добуток цієї довжини на ширину точно дорівнює площі кільця: 2πRсер(R−r) = π(R²−r²). Тотожність не потребує вузького кільця; фізичне випрямлення матеріалу в смугу — окреме питання."
      },
      {
        "q": "Як порахувати площу труби в перерізі?",
        "a": "Візьміть зовнішній радіус труби й внутрішній: площа металу в перерізі дорівнює площі кільця. Внутрішній просвіт — це окремий круг радіуса r."
      }
    ],
    "shortDescription": "Площа кільця між двома колами, його ширина та довжини кіл.",
    "seoDescription": "Розрахуйте площу кільця, його ширину, довжини зовнішнього і внутрішнього кіл та середній радіус.",
    "disclaimer": "Обидва кола мають один центр, потрібно R > r ≥ 0. Зміна одиниці не переводить наявні числа автоматично. Зміщений отвір або овальний переріз потребує іншої геометричної моделі."
  },
  "de": {
    "longDescription": "Ein Kreisring zwischen konzentrischen Kreisen hat die Fläche π(R² − r²). Der Ausdruck π(R − r)² beschreibt dagegen eine Kreisscheibe mit Radius R − r und kann bei einem schmalen Ring plausibel wirken, obwohl das Ergebnis falsch ist. Hier wird eine positive Breite vorausgesetzt: R > r ≥ 0. Gleiche Radien bilden einen ausgeschlossenen Grenzfall mit Fläche null; r = 0 ist zulässig und ergibt eine volle Scheibe.",
    "howToUse": [
      "Wähle die Längeneinheit.",
      "Trage den äußeren Radius ein.",
      "Trage den inneren Radius ein — er muss kleiner als der äußere sein.",
      "Lass den inneren Radius auf null für eine volle Kreisscheibe."
    ],
    "howItWorks": "S = π(R²−r²) = π(R−r)(R+r). Die Produktform vermeidet die Subtraktion fast gleicher Quadrate. Breite R−r, Umfänge 2πR und 2πr, mittlerer Radius (R+r)/2. Bei r = 0 ist der innere Umfang null.",
    "example": "Ein Ring mit den Radien 10 und 6 cm hat eine Fläche von 201,06 cm² und eine Breite von 4 cm.",
    "faq": [
      {
        "q": "Warum ist die Fläche nicht π(R − r)²?",
        "a": "Weil das die Fläche einer Scheibe mit dem Radius R − r ist und nicht die des Rings. Für die Radien 10 und 6 lautet die richtige Antwort 201,06 cm², die falsche 50,27 cm² — ein Faktor vier auseinander, und beide sehen plausibel aus."
      },
      {
        "q": "Was gilt bei einem inneren Radius von null?",
        "a": "Du bekommst eine volle Kreisscheibe, und die Rechnung lässt das zu: die Fläche wird πR², und der innere Umfang ist null."
      },
      {
        "q": "Warum darf der innere Radius nicht dem äußeren gleichen?",
        "a": "Diese Seite setzt eine positive Breite R − r voraus. Bei R = r beträgt die mathematische Fläche null, doch dieser entartete Fall wird hier abgewiesen. Für eine volle Scheibe setze r = 0."
      },
      {
        "q": "Wozu der mittlere Radius?",
        "a": "Der mittlere Radius (R+r)/2 liefert den Umfang der Mittellinie. Umfang mal Breite ist exakt die Ringfläche: 2πR_mittel(R−r) = π(R²−r²). Das gilt auch für breite Ringe; das tatsächliche Verformen des Materials zu einem geraden Streifen ist eine andere Frage."
      },
      {
        "q": "Wie finde ich den Querschnitt eines Rohres?",
        "a": "Es ist genau diese Aufgabe: der äußere Radius des Rohres und der innere der Bohrung. Die Differenz ergibt die Metallfläche im Querschnitt."
      }
    ],
    "shortDescription": "Fläche des Rings zwischen zwei Kreisen, seine Breite und beide Umfänge.",
    "seoDescription": "Berechne die Fläche eines Kreisrings, seine Breite, den äußeren und inneren Umfang und den mittleren Radius.",
    "disclaimer": "Beide Kreise haben denselben Mittelpunkt; es gilt R > r ≥ 0. Ein Einheitenwechsel rechnet vorhandene Zahlen nicht um. Ein versetztes Loch oder ovaler Querschnitt braucht ein anderes Modell."
  },
  "es": {
    "longDescription": "Una corona entre circunferencias concéntricas tiene área π(R² − r²). La expresión π(R − r)² describe otra figura, un disco de radio R − r, y puede parecer razonable en una corona estrecha aunque dé un resultado incorrecto. Aquí se exige anchura positiva: R > r ≥ 0. Radios iguales forman un caso degenerado de área cero que esta herramienta excluye; r = 0 se admite y da un disco completo.",
    "howToUse": [
      "Elige la unidad de longitud.",
      "Introduce el radio exterior.",
      "Introduce el radio interior: debe ser menor que el exterior.",
      "Deja el radio interior en cero para obtener un disco macizo."
    ],
    "howItWorks": "S = π(R²−r²) = π(R−r)(R+r). La forma factorizada evita restar cuadrados casi iguales. La anchura es R−r, las circunferencias son 2πR y 2πr y el radio medio, (R+r)/2. Con r = 0 la circunferencia interior es cero.",
    "example": "Un anillo de radios 10 y 6 cm tiene un área de 201,06 cm² y una anchura de 4 cm.",
    "faq": [
      {
        "q": "¿Por qué el área no puede ser π(R − r)²?",
        "a": "Porque eso es el área de un disco de radio R − r, no la del anillo. Con radios 10 y 6 la respuesta correcta son 201,06 cm² y la equivocada, 50,27 cm²: un factor de cuatro, aunque ambas parezcan verosímiles."
      },
      {
        "q": "¿Y si el radio interior es cero?",
        "a": "Obtienes un disco macizo, y el cálculo lo admite: el área pasa a ser πR² y la circunferencia interior, cero."
      },
      {
        "q": "¿Por qué el radio interior no puede ser igual al exterior?",
        "a": "Esta página exige anchura positiva R − r. Con R = r el área matemática es cero, pero aquí se rechaza ese caso degenerado. Introduce r = 0 para un disco completo."
      },
      {
        "q": "¿Para qué sirve el radio medio?",
        "a": "El radio medio (R+r)/2 da la longitud de la circunferencia central. Su producto por la anchura es exactamente el área de la corona: 2πR_medio(R−r) = π(R²−r²). La identidad no exige una corona estrecha; enderezar físicamente el material es otra cuestión."
      },
      {
        "q": "¿Cómo hallo la sección de un tubo?",
        "a": "Es exactamente este problema: el radio exterior del tubo y el interior del hueco. La diferencia da el área de metal en sección."
      }
    ],
    "shortDescription": "Área del anillo entre dos círculos, su anchura y ambas circunferencias.",
    "seoDescription": "Calcula el área de una corona circular, su anchura, las circunferencias exterior e interior y el radio medio.",
    "disclaimer": "Las circunferencias comparten centro y se exige R > r ≥ 0. Elegir otra unidad no convierte los números existentes. Un hueco descentrado o una sección ovalada necesita otro modelo geométrico."
  }
};
