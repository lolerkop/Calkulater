import type { CalculatorCopy } from '../../lib/platform/types';
// Individually read actual immutable145 body; agent-authored amendment is not human approval.
export const buildingWave16ContractContent = {
  "ru": {
    "longDescription": "Считает площадь крыши по габаритам основания и уклону. Полезно знать до расчёта: у любой крыши постоянного уклона над одним и тем же основанием площадь одна и та же — основание, делённое на косинус угла. Односкатная, двускатная и вальмовая различаются не итогом, а тем, на сколько плоскостей он делится, поэтому выбор формы меняет разбивку, а не сумму. Уклон задаётся градусами или процентами: процент переводится в угол через арктангенс, а не приравнивается к нему.",
    "howItWorks": "Площадь полной прямоугольной проекции A₀ = L·W. При одинаковом уклоне всех скатов A = A₀/cos α; для уклона p в процентах прямо используется A = A₀·√(1 + (p/100)²), без округления p до угла перед расчётом площади. Градусы: 0 ≤ α < 90; проценты: p ≥ 0, конечные. У симметричной двускатной крыши каждый скат A/2; для вальмы выводятся четыре ската без индивидуальных площадей. Отверстия, разные уклоны и раскрой покрытия не моделируются.",
    "howToUse": [
      "Выберите форму крыши.",
      "Введите длину и ширину основания.",
      "Задайте уклон в градусах или процентах."
    ],
    "example": "Двускатная крыша над основанием 10 × 8 м при уклоне 30° имеет площадь 92,376 м² — по 46,188 м² на скат.",
    "faq": [
      {
        "q": "Почему у односкатной и двускатной крыши площадь одинаковая?",
        "a": "Потому что она зависит только от площади основания и уклона. Двускатная делит ту же площадь на два ската вдвое меньших — сумма не меняется."
      },
      {
        "q": "Чем уклон в процентах отличается от уклона в градусах?",
        "a": "Процент — это отношение подъёма к заложению, умноженное на сто. Угол получается через арктангенс: уклон 100 % — это 45°, а не 90°."
      },
      {
        "q": "Учитываются ли свесы?",
        "a": "Нет. Вводите габариты того прямоугольника, который крыша реально накрывает, включая свесы, если хотите их посчитать."
      },
      {
        "q": "Почему для вальмовой крыши не показана площадь одного ската?",
        "a": "Потому что она зависит от длины конька, а её здесь не спрашивают. Общая площадь при этом верна: она определяется основанием и уклоном."
      }
    ],
    "disclaimer": "Это геометрический подсчёт в описанной модели. Он не подтверждает несущую способность, безопасность или соответствие требованиям проекта; конструктивные параметры проверяют отдельно."
  },
  "en": {
    "longDescription": "Works out the roof area from the footprint dimensions and the pitch. Worth knowing before you start: for any roof of constant pitch over the same footprint the area is the same — the footprint divided by the cosine of the angle. A single-slope, a gable and a hip roof differ not in the total but in how many planes it is split across, so the shape changes the breakdown rather than the sum. The pitch is given in degrees or as a percentage, and a percentage is converted through an arctangent rather than treated as an angle.",
    "howItWorks": "Complete rectangular projection A₀ = L·W. If all slopes have the same pitch, A = A₀/cos α; percentage pitch p uses A = A₀·√(1 + (p/100)²) directly, without rounding p into an angle first. Degrees require 0 ≤ α < 90; percentage p is finite and nonnegative. A symmetric gable has A/2 on each side; hip mode reports four slopes without individual areas. Openings, unequal pitches and covering layout are not modeled.",
    "howToUse": [
      "Choose the roof shape.",
      "Enter the footprint length and width.",
      "Give the pitch in degrees or as a percentage."
    ],
    "example": "A gable roof over a 10 × 8 m footprint at a 30° pitch has an area of 92.376 m² — 46.188 m² per slope.",
    "faq": [
      {
        "q": "Why do a single-slope and a gable roof have the same area?",
        "a": "Because it depends only on the footprint and the pitch. A gable splits the same area across two slopes half the size — the sum does not change."
      },
      {
        "q": "How does a percentage pitch differ from degrees?",
        "a": "A percentage is the rise over the run times a hundred. The angle follows through an arctangent: a 100 % pitch is 45°, not 90°."
      },
      {
        "q": "Are the eaves included?",
        "a": "No. Enter the dimensions of the rectangle the roof actually covers, including the overhang if you want it counted."
      },
      {
        "q": "Why is no per-slope area shown for a hip roof?",
        "a": "Because it depends on the ridge length, which is not asked for here. The total remains correct: it follows from the footprint and the pitch alone."
      }
    ],
    "disclaimer": "This is a geometric quantity calculation within the described model. It does not establish load capacity, safety or project compliance; check design parameters separately."
  },
  "uk": {
    "longDescription": "За ненульового ухилу площа даху більша за площу його горизонтальної проєкції, а за нульового — дорівнює їй. За 30° множник 1/cos α становить близько 1,155, за 45° — 1,414. Модель використовує прямокутну повну проєкцію та однаковий ухил усіх схилів; тип даху змінює розбивку, але не загальну площу.",
    "howItWorks": "Площа повної прямокутної проєкції A₀ = L·W. За однакового ухилу всіх схилів A = A₀/cos α; для p у відсотках прямо застосовується A = A₀·√(1 + (p/100)²), без попереднього округлення p до кута. Градуси: 0 ≤ α < 90; відсотки: скінченне p ≥ 0. У симетричного двосхилого даху кожен схил A/2; для вальми показано чотири схили без окремих площ. Отвори, різні ухили й розкрій покриття не моделюються.",
    "howToUse": [
      "Виберіть одно-, двосхилий або вальмовий режим для однакового ухилу схилів.",
      "Введіть повні розміри прямокутної проєкції, включно зі звисами, якщо вони потрібні.",
      "Виберіть градуси або відсотки та введіть відповідний ухил."
    ],
    "example": "Двосхилий дах над основою 10 × 8 м за нахилу 30° має площу 92,376 м² — по 46,188 м² на схил. Проєкція при цьому лише 80 м².",
    "faq": [
      {
        "q": "Чому площа даху більша за площу будинку?",
        "a": "За додатного кута схил довший за свою горизонтальну проєкцію: множник 1/cos α за 30° дорівнює приблизно 1,155, за 45° — 1,414. За кута 0° площі рівні; різні ухили потребують окремих розрахунків схилів."
      },
      {
        "q": "Чи враховано звиси?",
        "a": "Тільки якщо ви включили їх у розміри основи. Звис у 50 см з кожного боку додає до площі помітно більше, ніж здається, — рахувати його треба обов’язково."
      },
      {
        "q": "Скільки покрівлі замовляти?",
        "a": "Розрахунок показує геометричну площу, не число листів чи рулонів. Нахльости, робоча ширина, довжини деталей і підрізання залежать від матеріалу та схеми розкрою; універсальний відсоток запасу тут не закладено."
      },
      {
        "q": "Як перевести відсотки нахилу в градуси?",
        "a": "Через арктангенс: кут = arctg(відсотки/100). Ухил 100 % — це 45 градусів, а не межа крутизни."
      }
    ],
    "disclaimer": "Це геометричний підрахунок в описаній моделі. Він не підтверджує несучу здатність, безпечність чи відповідність проєктним вимогам; конструктивні параметри перевіряють окремо."
  },
  "de": {
    "longDescription": "Ermittelt die Dachfläche aus den Maßen des Grundrisses und der Neigung. Gut zu wissen, bevor du anfängst: bei jedem Dach gleichbleibender Neigung über demselben Grundriss ist die Fläche dieselbe — der Grundriss geteilt durch den Kosinus des Winkels. Pultdach, Satteldach und Walmdach unterscheiden sich nicht in der Summe, sondern darin, auf wie viele Flächen sie aufgeteilt wird, die Form ändert also die Aufteilung und nicht die Summe. Die Neigung wird in Grad oder als Prozentwert angegeben, und ein Prozentwert wird über einen Arkustangens umgerechnet und nicht als Winkel behandelt.",
    "howItWorks": "Vollständige rechteckige Projektion A₀ = L·W. Bei gleicher Neigung aller Dachflächen gilt A = A₀/cos α; für Prozentneigung p wird A = A₀·√(1 + (p/100)²) direkt verwendet, ohne vorherige Winkelrundung. In Grad gilt 0 ≤ α < 90, in Prozent ein endliches p ≥ 0. Beim symmetrischen Satteldach hat jede Seite A/2; beim Walmdach erscheinen vier Flächen ohne Einzelgrößen. Öffnungen, unterschiedliche Neigungen und Materialzuschnitt fehlen.",
    "howToUse": [
      "Wähle die Dachform.",
      "Trage Länge und Breite des Grundrisses ein.",
      "Gib die Neigung in Grad oder als Prozentwert an."
    ],
    "example": "Ein Satteldach über einem Grundriss von 10 × 8 m hat bei 30° Neigung eine Fläche von 92,376 m² — 46,188 m² je Dachfläche.",
    "faq": [
      {
        "q": "Warum haben Pult- und Satteldach dieselbe Fläche?",
        "a": "Weil sie allein vom Grundriss und der Neigung abhängt. Ein Satteldach teilt dieselbe Fläche auf zwei halb so große auf — die Summe ändert sich nicht."
      },
      {
        "q": "Wie unterscheidet sich eine Neigung in Prozent von Grad?",
        "a": "Ein Prozentwert ist die Höhe über der Ausladung mal hundert. Der Winkel folgt über einen Arkustangens: 100 % Neigung sind 45° und nicht 90°."
      },
      {
        "q": "Ist der Dachüberstand enthalten?",
        "a": "Nein. Trage die Maße des Rechtecks ein, das das Dach tatsächlich überdeckt, samt Überstand, wenn er mitzählen soll."
      },
      {
        "q": "Warum wird beim Walmdach keine Fläche je Dachfläche angezeigt?",
        "a": "Weil sie an der Firstlänge hängt, nach der hier nicht gefragt wird. Die Summe bleibt richtig: sie folgt allein aus Grundriss und Neigung."
      }
    ],
    "disclaimer": "Dies ist eine geometrische Mengenberechnung im beschriebenen Modell. Tragfähigkeit, Sicherheit und Planungskonformität werden damit nicht bestätigt; Konstruktionsparameter gesondert prüfen."
  },
  "es": {
    "longDescription": "Calcula la superficie de cubierta a partir de las dimensiones en planta y la pendiente. Conviene saberlo antes de empezar: en cualquier cubierta de pendiente constante sobre la misma planta la superficie es la misma, la planta dividida entre el coseno del ángulo. Una cubierta a un agua, una a dos y una a cuatro no se diferencian en el total, sino en cuántos planos se reparte, así que la forma cambia el desglose y no la suma. La pendiente se da en grados o en porcentaje, y un porcentaje se convierte mediante un arcotangente en lugar de tratarse como un ángulo.",
    "howItWorks": "Proyección rectangular completa A₀ = L·W. Con la misma pendiente en todos los faldones, A = A₀/cos α; para p en porcentaje se usa directamente A = A₀·√(1 + (p/100)²), sin redondear antes a un ángulo. En grados, 0 ≤ α < 90; en porcentaje, p es finito y no negativo. Cada faldón de una cubierta simétrica a dos aguas tiene A/2; a cuatro aguas solo se indica el número de faldones. No incluye huecos, pendientes distintas ni despiece del material.",
    "howToUse": [
      "Elige la forma de la cubierta.",
      "Introduce el largo y el ancho en planta.",
      "Indica la pendiente en grados o en porcentaje."
    ],
    "example": "Una cubierta a dos aguas sobre una planta de 10 × 8 m con una pendiente de 30° tiene una superficie de 92,376 m²: 46,188 m² por faldón.",
    "faq": [
      {
        "q": "¿Por qué una cubierta a un agua y otra a dos tienen la misma superficie?",
        "a": "Porque depende solo de la planta y de la pendiente. La de dos aguas reparte la misma superficie en dos faldones de la mitad de tamaño: la suma no cambia."
      },
      {
        "q": "¿En qué se diferencia una pendiente en porcentaje de una en grados?",
        "a": "Un porcentaje es la altura entre la proyección por cien. El ángulo sale mediante un arcotangente: una pendiente del 100 % son 45°, no 90°."
      },
      {
        "q": "¿Se incluyen los aleros?",
        "a": "No. Introduce las dimensiones del rectángulo que la cubierta cubre de verdad, incluyendo el vuelo si quieres contarlo."
      },
      {
        "q": "¿Por qué no se muestra la superficie por faldón en una cubierta a cuatro aguas?",
        "a": "Porque depende de la longitud de la cumbrera, que aquí no se pide. El total sigue siendo correcto: se deduce solo de la planta y de la pendiente."
      }
    ],
    "disclaimer": "Es un cálculo geométrico de cantidades en el modelo descrito. No acredita capacidad resistente, seguridad ni conformidad con el proyecto; comprueba aparte los parámetros de diseño."
  }
} satisfies Record<'ru'|'en'|'uk'|'de'|'es',Partial<CalculatorCopy>>;
