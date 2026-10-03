// Individually reviewed against all five actual188 native bodies; human editorial review pending.
export const contract = {
  "ru": {
    "longDescription": "Сравните скорость ухода и скорость круговой орбиты на одном расстоянии r от центра сферически симметричного тела. В ньютоновской модели без атмосферы, вращения и тяги скорость ухода соответствует нулевой остаточной скорости на бесконечности. Масса летящего тела считается пренебрежимо малой. Поле массы масштабировано в 10²⁴ кг, а r задан в километрах.",
    "howToUse": [
      "Масса вводится в единицах 10²⁴ килограммов: у Земли это 5,972, у Луны 0,07346, у Марса 0,64171.",
      "Это удобный масштаб массы: 5,972 означает 5,972·10²⁴ кг. Он не меняет формулу и не вводит другую единицу скорости. В поле r задаётся расстояние от центра; для старта на высоте прибавьте её к радиусу тела.",
      "Первая космическая ровно в √2 раза меньше второй — это видно в строках результата."
    ],
    "howItWorks": "Вторая космическая = √(2 GM/r), первая = √(GM/r), где G = 6,6743·10⁻¹¹.",
    "example": "Для Земли вторая космическая равна 11 186 м/с — это 40 270 км/ч.",
    "faq": [
      {
        "q": "Зависит ли скорость ухода от массы ракеты?",
        "a": "Нет. В формулу входит только масса притягивающего тела. Камень и корабль покидают Землю при одной и той же скорости — разница лишь в том, сколько топлива нужно, чтобы её набрать."
      },
      {
        "q": "Почему масса вводится в единицах 10²⁴ кг?",
        "a": "Это удобный масштаб массы: 5,972 означает 5,972·10²⁴ кг. Он не меняет формулу и не вводит другую единицу скорости. В поле r задаётся расстояние от центра; для старта на высоте прибавьте её к радиусу тела."
      },
      {
        "q": "Чем первая космическая отличается от второй?",
        "a": "На том же r скорость круговой орбиты √(GM/r), а скорость ухода √(2 GM/r): отношение √2. Круговая орбита у поверхности — лишь формальное сравнение, если там есть атмосфера или рельеф. Эти скорости не являются расходом топлива ракеты."
      },
      {
        "q": "Учитывается ли атмосфера?",
        "a": "Нет. Это чистая гравитационная задача. Настоящей ракете нужен запас на сопротивление воздуха и на то, что она разгоняется не мгновенно у поверхности."
      }
    ],
    "disclaimer": "Внешнее поле сферически симметричного тела, ньютоновское тяготение и малая масса снаряда. Скорость дана относительно центра; вращение, атмосфера, тяга и другие тела исключены. Внутри тела или при релятивистских скоростях модель не применяется."
  },
  "en": {
    "longDescription": "Compare escape speed and circular-orbit speed at the same distance r from the centre of a spherically symmetric body. In this Newtonian model without atmosphere, rotation or thrust, escape means reaching infinity with zero residual speed. The moving body has negligible mass. The mass field uses 10²⁴ kg and r is in kilometres.",
    "howToUse": [
      "Mass goes in units of 10²⁴ kilograms: Earth is 5.972, the Moon 0.07346, Mars 0.64171.",
      "This is a convenient mass scale: 5.972 means 5.972·10²⁴ kg. It does not change the formula or the speed unit. Enter centre distance as r; for a starting altitude, add it to the body’s radius.",
      "Orbital velocity is smaller than escape velocity by exactly √2 — you can see it in the rows."
    ],
    "howItWorks": "Escape = √(2 GM/r), orbital = √(GM/r), with G = 6.6743·10⁻¹¹.",
    "example": "For Earth the escape velocity is 11,186 m/s — that is 40,270 km/h.",
    "faq": [
      {
        "q": "Does escape speed depend on the rocket's mass?",
        "a": "No. Only the mass of the attracting body enters the formula. A stone and a ship leave Earth at the same speed; what differs is how much fuel it takes to reach it."
      },
      {
        "q": "Why is mass entered in units of 10²⁴ kg?",
        "a": "This is a convenient mass scale: 5.972 means 5.972·10²⁴ kg. It does not change the formula or the speed unit. Enter centre distance as r; for a starting altitude, add it to the body’s radius."
      },
      {
        "q": "How does orbital velocity differ from escape velocity?",
        "a": "At the same r, circular speed is √(GM/r) and escape speed √(2 GM/r), a ratio of √2. A surface-skimming orbit is only a formal comparison when atmosphere or terrain is present. These speeds do not calculate rocket fuel use."
      },
      {
        "q": "Is the atmosphere accounted for?",
        "a": "No. This is pure gravity. A real rocket needs margin for air resistance and for the fact that it does not accelerate instantly at the surface."
      }
    ],
    "disclaimer": "Exterior field of a spherically symmetric body, Newtonian gravity and negligible projectile mass. Speed is relative to the centre; rotation, atmosphere, thrust and other bodies are excluded. Not applicable inside the body or at relativistic speeds."
  },
  "uk": {
    "longDescription": "Порівняйте швидкість відриву та колової орбіти на однаковій відстані r від центра сферично симетричного тіла. У ньютонівській моделі без атмосфери, обертання й тяги відрив відповідає нульовій залишковій швидкості на нескінченності. Маса тіла, що летить, нехтовно мала. Масу вводять у 10²⁴ кг, а r — у кілометрах.",
    "howToUse": [
      "Введіть масу центрального тіла в одиницях 10²⁴ кг.",
      "Введіть радіус, з якого стартує тіло.",
      "Це зручний масштаб маси: 5,972 означає 5,972·10²⁴ кг. Він не змінює формулу або одиницю швидкості. r є відстанню від центра; для старту на висоті додайте її до радіуса тіла."
    ],
    "howItWorks": "Друга космічна рахується як √(2 GM/r), перша — як √(GM/r), де G = 6,6743·10⁻¹¹. Друга рівно в √2 разів більша за першу: це та сама залежність, що між енергією на коловій орбіті та енергією на відрив.",
    "example": "Для Землі друга космічна дорівнює 11 186 м/с — це 40 270 км/год. Перша космічна становить 7909 м/с, тобто рівно в 1,414 раза менше.",
    "faq": [
      {
        "q": "Чому швидкість не залежить від маси снаряда?",
        "a": "Бо маса входить і в кінетичну енергію, і в потенційну, і в рівнянні скорочується. Пір’їнці й ракеті потрібна однакова швидкість — питання лише в тому, скільки палива на це піде."
      },
      {
        "q": "Чим друга космічна відрізняється від першої?",
        "a": "На тому самому r колова швидкість √(GM/r), а швидкість відриву √(2 GM/r): відношення √2. Орбіта біля поверхні — лише формальне порівняння за наявності атмосфери чи рельєфу. Ці швидкості не визначають витрату палива ракети."
      },
      {
        "q": "Чи враховано опір атмосфери?",
        "a": "Ні. Формула дає швидкість для кинутого тіла без двигуна у вакуумі. Реальні ракети розганяються поступово й долають ще й опір повітря."
      },
      {
        "q": "Чому на Місяці друга космічна набагато менша?",
        "a": "Бо його маса приблизно у 81 раз менша, а радіус — у 3,7 раза. У підсумку виходить 2,38 км/с проти 11,19 км/с у Землі, і саме тому місячний модуль міг злетіти на невеликому двигуні."
      }
    ],
    "disclaimer": "Зовнішнє поле сферично симетричного тіла, ньютонівське тяжіння й мала маса снаряда. Швидкість відносно центра; обертання, атмосферу, тягу й інші тіла виключено. Модель не застосовується всередині тіла або за релятивістських швидкостей."
  },
  "de": {
    "longDescription": "Vergleiche Fluchtgeschwindigkeit und Kreisbahngeschwindigkeit im selben Abstand r vom Mittelpunkt eines kugelsymmetrischen Körpers. Im newtonschen Modell ohne Atmosphäre, Rotation und Schub bedeutet Flucht eine Restgeschwindigkeit von null im Unendlichen. Die Masse des bewegten Körpers ist vernachlässigbar. Das Massenfeld verwendet 10²⁴ kg, r steht in Kilometern.",
    "howToUse": [
      "Die Masse steht in Einheiten von 10²⁴ Kilogramm: die Erde hat 5,972, der Mond 0,07346, der Mars 0,64171.",
      "Dies ist ein zweckmäßiger Massenmaßstab: 5,972 bedeutet 5,972·10²⁴ kg. Er verändert weder die Formel noch die Geschwindigkeitseinheit. r ist der Mittelpunktabstand; addiere bei einem Start in Höhe diese zum Körperradius.",
      "Die Kreisbahngeschwindigkeit ist um genau √2 kleiner als die Fluchtgeschwindigkeit — das ist in den Zeilen zu sehen."
    ],
    "howItWorks": "Flucht = √(2 GM/r), Kreisbahn = √(GM/r), mit G = 6,6743·10⁻¹¹.",
    "example": "Für die Erde beträgt die Fluchtgeschwindigkeit 11 186 m/s — das sind 40 270 km/h.",
    "faq": [
      {
        "q": "Hängt die Fluchtgeschwindigkeit von der Masse der Rakete ab?",
        "a": "Nein. In die Formel geht allein die Masse des anziehenden Körpers ein. Ein Stein und ein Schiff verlassen die Erde mit derselben Geschwindigkeit; verschieden ist, wie viel Treibstoff es kostet, sie zu erreichen."
      },
      {
        "q": "Warum wird die Masse in Einheiten von 10²⁴ kg eingetragen?",
        "a": "Dies ist ein zweckmäßiger Massenmaßstab: 5,972 bedeutet 5,972·10²⁴ kg. Er verändert weder die Formel noch die Geschwindigkeitseinheit. r ist der Mittelpunktabstand; addiere bei einem Start in Höhe diese zum Körperradius."
      },
      {
        "q": "Wie unterscheidet sich die Kreisbahngeschwindigkeit von der Fluchtgeschwindigkeit?",
        "a": "Bei gleichem r ist die Kreisbahngeschwindigkeit √(GM/r), die Fluchtgeschwindigkeit √(2 GM/r); ihr Verhältnis ist √2. Eine Bahn direkt an der Oberfläche ist bei Atmosphäre oder Gelände nur ein formaler Vergleich. Diese Geschwindigkeiten berechnen keinen Raketentreibstoffverbrauch."
      },
      {
        "q": "Ist die Atmosphäre berücksichtigt?",
        "a": "Nein. Das ist reine Schwerkraft. Eine wirkliche Rakete braucht Reserve für den Luftwiderstand und dafür, dass sie an der Oberfläche nicht augenblicklich beschleunigt."
      }
    ],
    "disclaimer": "Äußeres Feld eines kugelsymmetrischen Körpers, newtonsche Gravitation und vernachlässigbare Projektilmasse. Geschwindigkeit relativ zum Mittelpunkt; Rotation, Atmosphäre, Schub und weitere Körper sind ausgeschlossen. Nicht im Körperinneren oder bei relativistischen Geschwindigkeiten anwendbar."
  },
  "es": {
    "longDescription": "Compara la velocidad de escape y la de una órbita circular a la misma distancia r del centro de un cuerpo con simetría esférica. En el modelo newtoniano sin atmósfera, rotación ni empuje, escapar significa llegar al infinito con velocidad residual nula. La masa móvil es despreciable. El campo de masa usa 10²⁴ kg y r se expresa en kilómetros.",
    "howToUse": [
      "La masa va en unidades de 10²⁴ kilogramos: la Tierra es 5,972; la Luna, 0,07346; Marte, 0,64171.",
      "Es una escala de masa conveniente: 5,972 significa 5,972·10²⁴ kg. No cambia la fórmula ni la unidad de velocidad. r es la distancia al centro; para salir desde cierta altura, súmala al radio del cuerpo.",
      "La velocidad orbital es menor que la de escape exactamente en √2: se ve en las filas."
    ],
    "howItWorks": "Escape = √(2 GM/r), orbital = √(GM/r), con G = 6,6743·10⁻¹¹.",
    "example": "Para la Tierra la velocidad de escape es de 11 186 m/s, es decir, 40 270 km/h.",
    "faq": [
      {
        "q": "¿La velocidad de escape depende de la masa del cohete?",
        "a": "No. En la fórmula solo entra la masa del cuerpo que atrae. Una piedra y una nave abandonan la Tierra a la misma velocidad; lo que cambia es cuánto combustible cuesta alcanzarla."
      },
      {
        "q": "¿Por qué la masa se introduce en unidades de 10²⁴ kg?",
        "a": "Es una escala de masa conveniente: 5,972 significa 5,972·10²⁴ kg. No cambia la fórmula ni la unidad de velocidad. r es la distancia al centro; para salir desde cierta altura, súmala al radio del cuerpo."
      },
      {
        "q": "¿En qué se diferencia la velocidad orbital de la de escape?",
        "a": "Con el mismo r, la velocidad circular es √(GM/r) y la de escape √(2 GM/r): la razón es √2. Una órbita a ras de superficie es solo una comparación formal cuando hay atmósfera o relieve. Estas velocidades no calculan el combustible del cohete."
      },
      {
        "q": "¿Se tiene en cuenta la atmósfera?",
        "a": "No. Esto es gravedad pura. Un cohete real necesita margen para la resistencia del aire y para el hecho de que no acelera de forma instantánea en la superficie."
      }
    ],
    "disclaimer": "Campo exterior de un cuerpo con simetría esférica, gravedad newtoniana y masa móvil despreciable. Velocidad respecto al centro; se excluyen rotación, atmósfera, empuje y otros cuerpos. No se aplica dentro del cuerpo ni a velocidades relativistas."
  }
};
