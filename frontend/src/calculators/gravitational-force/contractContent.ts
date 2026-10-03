// Individually reviewed against all five actual188 native bodies; human editorial review pending.
export const contract = {
  "ru": {
    "longDescription": "Найдите модуль ньютоновской силы между двумя положительными массами и ускорение первого тела. Формула непосредственно относится к точечным массам; для непересекающихся сферически симметричных тел вне их объёма используется расстояние между центрами. Силы на оба тела равны по модулю и противоположны, но ускорения обратно пропорциональны массам: Земля тоже ускоряется к падающему телу.",
    "howToUse": [
      "Введите две массы в килограммах.",
      "Укажите расстояние между их центрами в метрах.",
      "Для внешней точки над сферической планетой r=радиус+высота. Внутри планеты нельзя подставлять всю массу в эту формулу. Для несферических протяжённых тел расстояние между центрами само по себе недостаточно."
    ],
    "howItWorks": "F = G × m₁ × m₂ ÷ r², где G = 6,674·10⁻¹¹ Н·м²/кг². Ускорение первого тела — эта сила, делённая на его массу, что сводится к G × m₂ ÷ r².",
    "example": "Две точечные массы по 50 000 тонн на расстоянии 100 м дают 16,685 Н. Если представлять ими суда, это условная модель: реальные суда протяжённые и несферические.",
    "faq": [
      {
        "q": "Почему расстояние мерится между центрами?",
        "a": "Для внешней точки над сферической планетой r=радиус+высота. Внутри планеты нельзя подставлять всю массу в эту формулу. Для несферических протяжённых тел расстояние между центрами само по себе недостаточно."
      },
      {
        "q": "Почему сила на оба тела одинакова?",
        "a": "Потому что тяготение взаимно, а формула симметрична по двум массам. Различаются ускорения: каждое тело делит одну и ту же силу на свою собственную массу."
      },
      {
        "q": "Как сила меняется с расстоянием?",
        "a": "Обратно квадрату. Удвоение расстояния уменьшает силу вчетверо, утроение — в девять раз; отсюда и чувствительность орбитальной механики к высоте."
      },
      {
        "q": "Почему притяжение соседних предметов никак не ощущается?",
        "a": "Потому что G составляет около 6,674·10⁻¹¹. Два человека в метре друг от друга притягиваются с силой порядка 10⁻⁷ ньютона — в тысячи раз слабее трения, удерживающего их обувь на месте."
      }
    ],
    "disclaimer": "Ньютоновская модель точечных масс или внешнего поля сферически симметричных тел. Используется округлённое G=6,674·10⁻¹¹ Н·м²/кг²; форма протяжённых несферических тел и релятивистские поправки не вычисляются."
  },
  "en": {
    "longDescription": "Find the magnitude of Newtonian attraction between two positive masses and the acceleration of the first body. The formula directly describes point masses; for non-overlapping spherically symmetric bodies outside their volumes, use centre-to-centre distance. Both forces have equal magnitude and opposite directions, while accelerations depend inversely on mass: Earth also accelerates towards a falling object.",
    "howToUse": [
      "Enter the two masses in kilograms.",
      "Enter the distance between their centres in metres.",
      "For an exterior point above a spherical planet, r=radius+altitude. Inside the planet, its whole mass cannot be inserted into this formula. Centre distance alone is insufficient for extended nonspherical bodies."
    ],
    "howItWorks": "F = G × m₁ × m₂ ÷ r², with G = 6.674·10⁻¹¹ N·m²/kg². The acceleration of the first body is that force divided by its own mass, which reduces to G × m₂ ÷ r².",
    "example": "Two point masses of 50,000 tonnes each at a distance of 100 m give 16.685 N. Treating ships this way is an idealisation: real ships are extended and nonspherical.",
    "faq": [
      {
        "q": "Why is the distance measured between centres?",
        "a": "For an exterior point above a spherical planet, r=radius+altitude. Inside the planet, its whole mass cannot be inserted into this formula. Centre distance alone is insufficient for extended nonspherical bodies."
      },
      {
        "q": "Why does the force on both bodies come out the same?",
        "a": "Because gravity is mutual and the formula is symmetric in the two masses. What differs is the acceleration, since each body divides the same force by its own mass."
      },
      {
        "q": "How does the force change with distance?",
        "a": "As the inverse square. Doubling the distance quarters the force, and tripling it leaves a ninth — which is why orbital mechanics is so sensitive to altitude."
      },
      {
        "q": "Why do I never feel the attraction of nearby objects?",
        "a": "Because G is about 6.674·10⁻¹¹. Two people standing a metre apart attract with roughly 10⁻⁷ newtons, thousands of times weaker than the friction holding their shoes still."
      }
    ],
    "disclaimer": "Newtonian point-mass model or exterior field of spherically symmetric bodies. Uses rounded G=6.674·10⁻¹¹ N·m²/kg²; extended nonspherical shapes and relativistic corrections are not computed."
  },
  "uk": {
    "longDescription": "Знайдіть модуль ньютонівського притягання двох додатних мас і прискорення першого тіла. Формула безпосередньо описує точкові маси; для сферично симетричних тіл, що не перетинаються, поза їхнім об’ємом беруть відстань між центрами. Сили рівні за модулем і протилежні, а прискорення обернено пропорційні масам: Земля також прискорюється до тіла, що падає.",
    "howToUse": [
      "Введіть масу першого тіла.",
      "Введіть масу другого тіла.",
      "Для зовнішньої точки над сферичною планетою r=радіус+висота. Усередині планети не можна підставляти всю її масу в цю формулу. Для протяжних несферичних тіл самої відстані між центрами недостатньо."
    ],
    "howItWorks": "Сила рахується як F = G × m₁ × m₂ ÷ r², де G = 6,674·10⁻¹¹ Н·м²/кг². Прискорення першого тіла дорівнює цій силі, поділеній на його масу, що зводиться до G × m₂ ÷ r² — саме тому прискорення вільного падіння не залежить від маси тіла, що падає.",
    "example": "Дві точкові маси по 50 000 тонн на відстані 100 м дають 16,685 Н. Представлення ними суден є умовною моделлю: реальні судна протяжні й несферичні.",
    "faq": [
      {
        "q": "Чому гравітацію не помітно в побуті?",
        "a": "Бо стала G надзвичайно мала. Щоб сила стала помітною, потрібні маси планетного масштабу — саме тому ми відчуваємо притягання Землі й не відчуваємо притягання сусіднього будинку."
      },
      {
        "q": "Яку відстань вводити?",
        "a": "Для зовнішньої точки над сферичною планетою r=радіус+висота. Усередині планети не можна підставляти всю її масу в цю формулу. Для протяжних несферичних тіл самої відстані між центрами недостатньо."
      },
      {
        "q": "Чому прискорення вільного падіння не залежить від маси тіла?",
        "a": "Бо маса тіла входить і в силу, і в другий закон Ньютона, і скорочується. Лишається G·M ÷ r², де M — маса Землі."
      },
      {
        "q": "Чи працює формула для чорних дір?",
        "a": "Поблизу них — ні: потрібна загальна теорія відносності. Ньютонівська формула добре описує звичайні зорі, планети й супутники."
      }
    ],
    "disclaimer": "Ньютонівська модель точкових мас або зовнішнього поля сферично симетричних тіл. Використано округлене G=6,674·10⁻¹¹ Н·м²/кг²; форма протяжних несферичних тіл і релятивістські поправки не обчислюються."
  },
  "de": {
    "longDescription": "Berechne den Betrag der newtonschen Anziehung zweier positiver Massen und die Beschleunigung des ersten Körpers. Die Formel beschreibt unmittelbar Punktmassen; für nicht überlappende kugelsymmetrische Körper außerhalb ihrer Volumina gilt der Mittelpunktabstand. Die Kräfte sind gleich groß und entgegengesetzt, die Beschleunigungen umgekehrt proportional zur Masse: Auch die Erde beschleunigt zum fallenden Körper hin.",
    "howToUse": [
      "Trage die beiden Massen in Kilogramm ein.",
      "Trage den Abstand ihrer Mittelpunkte in Metern ein.",
      "Für einen äußeren Punkt über einem kugelförmigen Planeten gilt r=Radius+Höhe. Innerhalb des Planeten darf nicht seine gesamte Masse in diese Formel eingesetzt werden. Für ausgedehnte nicht kugelförmige Körper genügt der Mittelpunktabstand allein nicht."
    ],
    "howItWorks": "F = G × m₁ × m₂ ÷ r², mit G = 6,674·10⁻¹¹ N·m²/kg². Die Beschleunigung des ersten Körpers ist diese Kraft geteilt durch seine eigene Masse, was sich zu G × m₂ ÷ r² vereinfacht.",
    "example": "Zwei Punktmassen von jeweils 50 000 Tonnen im Abstand von 100 m ergeben 16,685 N. Schiffe so darzustellen ist eine Idealisierung: Reale Schiffe sind ausgedehnt und nicht kugelförmig.",
    "faq": [
      {
        "q": "Warum wird der Abstand zwischen den Mittelpunkten gemessen?",
        "a": "Für einen äußeren Punkt über einem kugelförmigen Planeten gilt r=Radius+Höhe. Innerhalb des Planeten darf nicht seine gesamte Masse in diese Formel eingesetzt werden. Für ausgedehnte nicht kugelförmige Körper genügt der Mittelpunktabstand allein nicht."
      },
      {
        "q": "Warum ist die Kraft auf beide Körper gleich?",
        "a": "Weil die Schwerkraft gegenseitig ist und die Formel in beiden Massen symmetrisch. Verschieden ist die Beschleunigung, denn jeder Körper teilt dieselbe Kraft durch seine eigene Masse."
      },
      {
        "q": "Wie ändert sich die Kraft mit dem Abstand?",
        "a": "Mit dem Kehrwert des Quadrats. Der doppelte Abstand viertelt die Kraft, der dreifache lässt ein Neuntel — weshalb die Bahnmechanik so empfindlich auf die Höhe reagiert."
      },
      {
        "q": "Warum spüre ich die Anziehung naher Gegenstände nie?",
        "a": "Weil G bei rund 6,674·10⁻¹¹ liegt. Zwei Menschen in einem Meter Abstand ziehen sich mit rund 10⁻⁷ Newton an, tausendfach schwächer als die Reibung, die ihre Schuhe festhält."
      }
    ],
    "disclaimer": "Newtonsches Punktmassenmodell oder äußeres Feld kugelsymmetrischer Körper. Verwendet wird gerundetes G=6,674·10⁻¹¹ N·m²/kg²; ausgedehnte nicht kugelförmige Körper und relativistische Korrekturen werden nicht berechnet."
  },
  "es": {
    "longDescription": "Halla el módulo de la atracción newtoniana entre dos masas positivas y la aceleración del primer cuerpo. La fórmula describe masas puntuales; para cuerpos con simetría esférica que no se solapan y fuera de sus volúmenes se usa la distancia entre centros. Las fuerzas son iguales y opuestas, pero las aceleraciones son inversamente proporcionales a las masas: la Tierra también acelera hacia el cuerpo que cae.",
    "howToUse": [
      "Introduce las dos masas en kilogramos.",
      "Introduce la distancia entre sus centros, en metros.",
      "Para un punto exterior sobre un planeta esférico, r=radio+altura. Dentro del planeta no se puede insertar toda su masa en esta fórmula. Para cuerpos extensos no esféricos no basta la distancia entre centros."
    ],
    "howItWorks": "F = G × m₁ × m₂ ÷ r², con G = 6,674·10⁻¹¹ N·m²/kg². La aceleración del primer cuerpo es esa fuerza dividida entre su propia masa, lo que se reduce a G × m₂ ÷ r².",
    "example": "Dos masas puntuales de 50 000 toneladas cada una a 100 m dan 16,685 N. Representar así dos buques es una idealización: los buques reales son extensos y no esféricos.",
    "faq": [
      {
        "q": "¿Por qué la distancia se mide entre centros?",
        "a": "Para un punto exterior sobre un planeta esférico, r=radio+altura. Dentro del planeta no se puede insertar toda su masa en esta fórmula. Para cuerpos extensos no esféricos no basta la distancia entre centros."
      },
      {
        "q": "¿Por qué la fuerza sobre ambos cuerpos sale igual?",
        "a": "Porque la gravedad es mutua y la fórmula es simétrica en las dos masas. Lo que cambia es la aceleración, ya que cada cuerpo divide la misma fuerza entre su propia masa."
      },
      {
        "q": "¿Cómo cambia la fuerza con la distancia?",
        "a": "Como el inverso del cuadrado. Duplicar la distancia deja la fuerza en la cuarta parte y triplicarla, en la novena, y por eso la mecánica orbital es tan sensible a la altitud."
      },
      {
        "q": "¿Por qué nunca noto la atracción de los objetos cercanos?",
        "a": "Porque G vale unos 6,674·10⁻¹¹. Dos personas a un metro se atraen con unos 10⁻⁷ newtons, miles de veces menos que el rozamiento que mantiene quietos sus zapatos."
      }
    ],
    "disclaimer": "Modelo newtoniano de masas puntuales o campo exterior de cuerpos con simetría esférica. Usa G redondeada a 6,674·10⁻¹¹ N·m²/kg²; no calcula formas extensas no esféricas ni correcciones relativistas."
  }
};
