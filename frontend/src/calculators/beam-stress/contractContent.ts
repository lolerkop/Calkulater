import type { CalculatorCopy } from '../../lib/platform/types';

// Actual 145 native body individually reviewed; scoped model and input corrections. Agent review is not human approval.
export const buildingWave13ContractContent = {
  "ru": {
    "longDescription": "Вычисляет модуль максимального нормального напряжения изгиба для сплошного прямоугольного или круглого сечения. Нужен изгибающий момент из вашей расчётной схемы. Прямоугольная высота направлена в плоскости изгиба; расчёт предполагает линейно упругую работу в одной плоскости. Допускаемый уровень напряжения и общий запас несущей способности не определяются.",
    "howItWorks": "σmax = M/W. Для прямоугольника W = b·h²/6, для сплошного круга W = πd³/32. Размеры задаются в мм, M в Н·м умножается на 1000; σ получается в Н/мм² = МПа. Момент и активные размеры должны быть положительными конечными числами; неактивные размеры другой формы не используются.",
    "howToUse": [
      "Введите изгибающий момент в ньютон-метрах: для балки на двух опорах с грузом посередине это сила на пролёт делить на четыре.",
      "Размеры сечения задаются в миллиметрах.",
      "Для прямоугольника высота — это размер вдоль действия нагрузки, то есть по вертикали.",
      "Сравните результат с допускаемым напряжением своего материала — оно зависит от марки и здесь не задано."
    ],
    "example": "Прямоугольное сечение 100×200 мм при моменте 4,5 кН·м даёт напряжение 6,75 МПа.",
    "faq": [
      {
        "q": "Почему доска на ребре держит намного больше?",
        "a": "Потому что высота сечения входит в момент сопротивления в квадрате. Поворот доски 50×150 с плашмя на ребро увеличивает её сопротивление изгибу втрое."
      },
      {
        "q": "Чем это отличается от расчёта на растяжение?",
        "a": "При растяжении напряжение равномерно по сечению и равно силе на площадь. При изгибе оно линейно меняется от нейтральной оси и максимально у края, поэтому форма сечения важнее его площади."
      },
      {
        "q": "Почему нет допускаемого напряжения?",
        "a": "Оно зависит от марки стали, породы дерева и коэффициентов запаса по нормам. Зашивать одно число значило бы выдавать частный случай за общее правило."
      },
      {
        "q": "Это полный расчёт балки?",
        "a": "Нет. Здесь только напряжение изгиба в упругой области и в одной плоскости. Прогиб, устойчивость, срез и кручение считаются отдельно."
      }
    ],
    "disclaimer": "Предварительный расчёт указанной упругой модели. Не заменяет проверку конструкции по применимым требованиям, нагрузкам и свойствам материала."
  },
  "en": {
    "longDescription": "Calculates the magnitude of maximum normal bending stress for a solid rectangular or circular section. Supply the bending moment from your load analysis. Rectangle depth is measured in the bending plane; the model assumes linear elastic bending in one plane. It does not determine allowable stress or overall load capacity.",
    "howItWorks": "σmax = M/W. For a rectangle W = b·h²/6; for a solid circle W = πd³/32. Dimensions are in mm and M in N·m is multiplied by 1000, giving N/mm² = MPa. Moment and active dimensions must be positive finite numbers; dimensions of the other shape are ignored.",
    "howToUse": [
      "Enter the bending moment in newton-metres: for a simply supported beam with a central load it is force times span over four.",
      "Section sizes are in millimetres.",
      "For a rectangle the height is the dimension along the load, that is vertically.",
      "Compare the result with the allowable stress of your material — it depends on the grade and is not assumed here."
    ],
    "example": "A 100×200 mm rectangular section under 4.5 kN·m carries a bending stress of 6.75 MPa.",
    "faq": [
      {
        "q": "Why does a board on edge carry so much more?",
        "a": "Because the section height enters the modulus squared. Turning a 50×150 board from flat to on edge triples its resistance to bending."
      },
      {
        "q": "How does this differ from a tension calculation?",
        "a": "In tension the stress is uniform across the section and equals force over area. In bending it varies linearly from the neutral axis and peaks at the edge, so the shape of the section matters more than its area."
      },
      {
        "q": "Why is there no allowable stress?",
        "a": "It depends on the steel grade, the timber species and the safety factors of the applicable code. Baking in one number would present a special case as a general rule."
      },
      {
        "q": "Is this a complete beam check?",
        "a": "No. This is bending stress in the elastic range and in one plane only. Deflection, buckling, shear and torsion are separate calculations."
      }
    ],
    "disclaimer": "Preliminary calculation of the stated elastic model. It does not replace structural checks for applicable requirements, loads and material properties."
  },
  "uk": {
    "longDescription": "Обчислює модуль найбільшого нормального напруження згину для суцільного прямокутного або круглого перерізу. Згинальний момент беруть із вашої схеми навантаження. Висота прямокутника спрямована у площині згину; модель передбачає лінійно пружну роботу в одній площині. Допустиме напруження й загальний запас несучої здатності не визначаються.",
    "howItWorks": "σmax = M/W. Для прямокутника W = b·h²/6, для суцільного кола W = πd³/32. Розміри в мм, M у Н·м множиться на 1000; σ виходить у Н/мм² = МПа. Момент і активні розміри — додатні скінченні числа; розміри іншої форми не використовуються.",
    "howToUse": [
      "Виберіть форму перерізу: прямокутник чи круг.",
      "Введіть розміри перерізу в міліметрах.",
      "Введіть згинальний момент."
    ],
    "example": "Прямокутний переріз 100 × 200 мм за моменту 4,5 кН·м дає напругу 6,75 МПа. Той самий переріз плазом дав би 13,5 МПа — удвічі більше.",
    "faq": [
      {
        "q": "Чому балку кладуть на ребро?",
        "a": "Бо висота перерізу входить у момент опору у квадраті. Дошка 100 × 200 на ребро має момент опору 667 см³, а плазом — лише 333 см³, тобто вдвічі менший."
      },
      {
        "q": "Яка напруга допустима?",
        "a": "Допустиме значення залежить від конкретного матеріалу, умов роботи та застосовних правил розрахунку. Калькулятор не призначає єдине допустиме напруження для всієї деревини або сталі."
      },
      {
        "q": "Звідки взяти згинальний момент?",
        "a": "Із розрахунку схеми навантаження. Для балки на двох опорах із рівномірним навантаженням момент дорівнює qL²/8, зі зосередженою силою посередині — FL/4."
      },
      {
        "q": "Чи достатньо перевірити лише напругу?",
        "a": "Ні. Напруження згину не перевіряє прогин, стійкість, зсув, кручення чи з’єднання. Яка перевірка визначає конструкцію, залежить від її умов."
      }
    ],
    "disclaimer": "Попередній розрахунок зазначеної пружної моделі. Не замінює перевірку конструкції за застосовними вимогами, навантаженнями й властивостями матеріалу.",
    "seoDescription": "Розрахуйте напруження згину та момент опору прямокутного або круглого перерізу за моментом і розмірами."
  },
  "de": {
    "longDescription": "Berechnet den Betrag der maximalen Normalspannung bei Biegung eines vollen Rechteck- oder Kreisquerschnitts. Das Biegemoment stammt aus deiner Lastberechnung. Die Rechteckhöhe liegt in der Biegeebene; das Modell setzt linear elastische Biegung in einer Ebene voraus. Zulässige Spannung und gesamte Tragreserve werden nicht bestimmt.",
    "howItWorks": "σmax = M/W. Beim Rechteck ist W = b·h²/6, beim Vollkreis W = πd³/32. Maße stehen in mm; M in N·m wird mit 1000 multipliziert, sodass N/mm² = MPa entsteht. Moment und aktive Maße müssen positiv und endlich sein; Maße der anderen Form werden ignoriert.",
    "howToUse": [
      "Trage das Biegemoment in Newtonmetern ein: bei einem Einfeldträger mit Einzellast in der Mitte ist es Kraft mal Stützweite durch vier.",
      "Die Querschnittsmaße stehen in Millimetern.",
      "Beim Rechteck ist die Höhe das Maß in Richtung der Last, also senkrecht.",
      "Vergleiche das Ergebnis mit der zulässigen Spannung deines Werkstoffs — sie hängt von der Güte ab und wird hier nicht angenommen."
    ],
    "example": "Ein rechteckiger Querschnitt von 100×200 mm trägt bei 4,5 kN·m eine Biegespannung von 6,75 MPa.",
    "faq": [
      {
        "q": "Warum trägt ein hochkant gestelltes Brett so viel mehr?",
        "a": "Weil die Querschnittshöhe im Quadrat in das Widerstandsmoment eingeht. Ein Brett 50×150 von flach auf hochkant zu drehen verdreifacht seinen Biegewiderstand."
      },
      {
        "q": "Wie unterscheidet sich das von einer Zugrechnung?",
        "a": "Beim Zug ist die Spannung über den Querschnitt gleichmäßig und gleich Kraft durch Fläche. Beim Biegen nimmt sie von der neutralen Faser aus linear zu und erreicht am Rand ihr Höchstmaß, die Form des Querschnitts zählt also mehr als seine Fläche."
      },
      {
        "q": "Warum gibt es keine zulässige Spannung?",
        "a": "Sie hängt von der Stahlgüte, der Holzart und den Sicherheitsbeiwerten der geltenden Norm ab. Eine Zahl einzubauen gäbe einen Sonderfall als allgemeine Regel aus."
      },
      {
        "q": "Ist das ein vollständiger Nachweis?",
        "a": "Nein. Hier geht es um die Biegespannung im elastischen Bereich und in einer Ebene. Durchbiegung, Knicken, Schub und Torsion sind eigene Nachweise."
      }
    ],
    "disclaimer": "Vorläufige Rechnung des beschriebenen elastischen Modells. Sie ersetzt keine Bauteilprüfung mit geltenden Anforderungen, Lasten und Werkstoffeigenschaften."
  },
  "es": {
    "longDescription": "Calcula la magnitud de la tensión normal máxima de flexión para una sección maciza rectangular o circular. El momento flector procede de tu análisis de cargas. El canto rectangular se mide en el plano de flexión; el modelo supone comportamiento elástico lineal en un plano. No determina la tensión admisible ni la capacidad global.",
    "howItWorks": "σmax = M/W. Para un rectángulo W = b·h²/6; para un círculo macizo W = πd³/32. Las dimensiones están en mm y M en N·m se multiplica por 1000, dando N/mm² = MPa. El momento y las dimensiones activas deben ser positivos y finitos; las de la otra forma se ignoran.",
    "howToUse": [
      "Introduce el momento flector en newton metros: en una viga biapoyada con carga centrada es la fuerza por la luz dividida entre cuatro.",
      "Las dimensiones de la sección van en milímetros.",
      "En un rectángulo, el canto es la dimensión en el sentido de la carga, es decir, la vertical.",
      "Compara el resultado con la tensión admisible de tu material: depende de la clase y aquí no se supone."
    ],
    "example": "Una sección rectangular de 100×200 mm con 4,5 kN·m soporta una tensión de flexión de 6,75 MPa.",
    "faq": [
      {
        "q": "¿Por qué una tabla de canto aguanta mucho más?",
        "a": "Porque el canto de la sección entra al cuadrado en el módulo. Girar una tabla de 50×150 de plana a de canto triplica su resistencia a la flexión."
      },
      {
        "q": "¿En qué se diferencia de un cálculo a tracción?",
        "a": "En tracción la tensión es uniforme en la sección e igual a la fuerza entre el área. En flexión varía linealmente desde el eje neutro y alcanza su máximo en el borde, así que la forma de la sección importa más que su área."
      },
      {
        "q": "¿Por qué no hay tensión admisible?",
        "a": "Depende de la clase de acero, de la especie de madera y de los coeficientes de seguridad de la norma aplicable. Fijar un número presentaría un caso particular como regla general."
      },
      {
        "q": "¿Es una comprobación completa de la viga?",
        "a": "No. Esto es la tensión de flexión en régimen elástico y en un solo plano. La flecha, el pandeo, el cortante y la torsión son cálculos aparte."
      }
    ],
    "disclaimer": "Cálculo preliminar del modelo elástico indicado. No sustituye comprobaciones estructurales de requisitos, cargas y propiedades del material."
  }
} satisfies Record<'ru'|'en'|'uk'|'de'|'es', Partial<CalculatorCopy>>;
