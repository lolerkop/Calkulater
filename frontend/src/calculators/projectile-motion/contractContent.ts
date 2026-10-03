// Individually reviewed against all five actual188 native bodies; human editorial review pending.
export const contract = {
  "ru": {
    "longDescription": "Рассчитайте идеальный бросок под углом от 0° до 90° до пересечения с горизонтальной землёй y=0. Начальная высота задаётся над этой плоскостью. Горизонтальная скорость постоянна, вертикальное ускорение равно −9,80665 м/с². При строго вертикальном броске дальность нулевая; малые ненулевые углы не обнуляются произвольным порогом.",
    "howToUse": [
      "Введите начальную скорость в метрах в секунду.",
      "Задайте угол к горизонту от 0 до 90 градусов.",
      "Укажите высоту, с которой брошено тело; для броска с земли оставьте ноль.",
      "Сравните время до высшей точки с полным временем: при броске с высоты они не равны половине."
    ],
    "howItWorks": "Скорость раскладывается на составляющие: vy = v·sin α, vx = v·cos α. Время полёта = (vy + √(vy² + 2 gh)) ÷ g, дальность = vx × время. Ускорение свободного падения принято равным 9,80665 м/с².",
    "example": "Бросок 20 м/с под 45° с земли даёт дальность 40,789 м за 2,884 с.",
    "faq": [
      {
        "q": "Почему при 45° дальность наибольшая?",
        "a": "Только при броске с земли. Стоит поднять точку броска, и выгодный угол становится меньше 45°: тело дольше падает, и горизонтальная составляющая ценнее вертикальной."
      },
      {
        "q": "Учитывается ли сопротивление воздуха?",
        "a": "Нет. Влияние зависит от массы, площади, формы, скорости и среды; одна «небольшая скорость» не гарантирует малую ошибку. При существенном сопротивлении эта параболическая траектория не описывает реальный полёт."
      },
      {
        "q": "Почему при 90° дальность ровно нулевая?",
        "a": "Потому что горизонтальной составляющей нет. В двоичной арифметике косинус 90° даёт 6·10⁻¹⁷, и без приведения к нулю дальность вышла бы триллионной долей миллиметра вместо честного нуля."
      },
      {
        "q": "Какое g использовано?",
        "a": "Постоянное стандартное g, плоская земля, точечное тело и отсутствие сопротивления воздуха. Реальное местное g, ветер, вращение, рельеф и аэродинамика не моделируются. Для 45° максимальная дальность относится к одинаковой высоте старта и финиша."
      }
    ],
    "disclaimer": "Постоянное стандартное g, плоская земля, точечное тело и отсутствие сопротивления воздуха. Реальное местное g, ветер, вращение, рельеф и аэродинамика не моделируются. Для 45° максимальная дальность относится к одинаковой высоте старта и финиша."
  },
  "en": {
    "longDescription": "Calculate an ideal launch from 0° to 90° until it meets horizontal ground y=0. Enter initial height above that plane. Horizontal velocity is constant and vertical acceleration −9.80665 m/s². An exactly vertical launch has zero range; small nonzero angles are not erased by an arbitrary threshold.",
    "howToUse": [
      "Enter the initial speed in metres per second.",
      "Set the angle to the horizon between 0 and 90 degrees.",
      "Give the launch height; leave it at zero for a throw from the ground.",
      "Compare the time to apex with the total time: launching from height makes them unequal halves."
    ],
    "howItWorks": "The speed splits into components: vy = v·sin α, vx = v·cos α. Flight time = (vy + √(vy² + 2 gh)) ÷ g, and range = vx × time. Gravity is taken as 9.80665 m/s².",
    "example": "A throw of 20 m/s at 45° from the ground carries 40.789 m in 2.884 s.",
    "faq": [
      {
        "q": "Why is 45° the best angle?",
        "a": "Only from ground level. Raise the launch point and the optimum drops below 45°: the body falls for longer, so the horizontal component is worth more than the vertical one."
      },
      {
        "q": "Is air resistance included?",
        "a": "No. Its influence depends on mass, area, shape, speed and medium; a “low speed” alone does not guarantee small error. Significant drag makes this parabolic trajectory unsuitable for actual flight."
      },
      {
        "q": "Why is the range exactly zero at 90°?",
        "a": "Because there is no horizontal component. In binary arithmetic cos 90° comes out as 6·10⁻¹⁷, and without snapping that to zero the range would read as a trillionth of a millimetre instead of an honest nought."
      },
      {
        "q": "Which value of g is used?",
        "a": "Constant standard g, flat ground, a point body and no air drag. Actual local gravity, wind, rotation, terrain and aerodynamics are not modelled. The maximum-range result at 45° applies to equal launch and landing heights."
      }
    ],
    "disclaimer": "Constant standard g, flat ground, a point body and no air drag. Actual local gravity, wind, rotation, terrain and aerodynamics are not modelled. The maximum-range result at 45° applies to equal launch and landing heights."
  },
  "uk": {
    "longDescription": "Розрахуйте ідеальний кидок під кутом від 0° до 90° до перетину з горизонтальною землею y=0. Початкова висота задана над цією площиною. Горизонтальна швидкість стала, вертикальне прискорення −9,80665 м/с². Строго вертикальний кидок має нульову дальність; малі ненульові кути не обнуляються довільним порогом.",
    "howToUse": [
      "Введіть початкову швидкість.",
      "Введіть кут кидка в градусах: 45° дає найбільшу дальність із рівня землі.",
      "За потреби задайте висоту, з якої виконується кидок."
    ],
    "howItWorks": "Швидкість розкладається на складові: vy = v·sin α, vx = v·cos α. Час польоту дорівнює (vy + √(vy² + 2 gh)) ÷ g, дальність — vx × час. Прискорення вільного падіння прийнято рівним 9,80665 м/с², опір повітря не враховується.",
    "example": "Кидок 20 м/с під 45° із землі дає дальність 40,789 м за 2,884 с. Той самий кидок під 30° долетить лише на 35,3 м.",
    "faq": [
      {
        "q": "Чому 45° дає найбільшу дальність?",
        "a": "Бо це найкращий компроміс: більший кут дає довший політ, але меншу горизонтальну швидкість. Із висоти оптимальний кут стає меншим за 45°."
      },
      {
        "q": "Чому горизонтальний і вертикальний рухи незалежні?",
        "a": "В ідеальній моделі горизонтальне прискорення нульове, а вертикальне дорівнює −g. Два тіла з однакових висоти й початкової вертикальної швидкості досягнуть землі одночасно, незалежно від їхньої горизонтальної швидкості."
      },
      {
        "q": "Чи враховано опір повітря?",
        "a": "Ні. Вплив залежить від маси, площі, форми, швидкості й середовища; сама «невелика швидкість» не гарантує малої похибки. За істотного опору ця параболічна траєкторія не описує реальний політ."
      },
      {
        "q": "Що змінює кидок із висоти?",
        "a": "Час польоту зростає, бо тіло падає нижче за рівень кидка. Тому дальність збільшується, а оптимальний кут стає меншим за 45°."
      }
    ],
    "disclaimer": "Стале стандартне g, плоска земля, точкове тіло й відсутність опору повітря. Місцеве тяжіння, вітер, обертання, рельєф та аеродинаміка не моделюються. Максимальна дальність за 45° стосується однакової висоти старту й фінішу."
  },
  "de": {
    "longDescription": "Berechne den idealen Wurf von 0° bis 90° bis zum Schnitt mit dem waagerechten Boden y=0. Die Anfangshöhe liegt über dieser Ebene. Horizontale Geschwindigkeit ist konstant, vertikale Beschleunigung −9,80665 m/s². Ein exakt senkrechter Wurf hat Reichweite null; kleine von null verschiedene Winkel werden nicht durch eine willkürliche Schwelle gelöscht.",
    "howToUse": [
      "Trage die Anfangsgeschwindigkeit in Metern je Sekunde ein.",
      "Setze den Winkel zur Waagerechten zwischen 0 und 90 Grad.",
      "Gib die Abwurfhöhe an; lass sie bei null für einen Wurf vom Boden.",
      "Vergleiche die Zeit bis zum Scheitel mit der Gesamtzeit: ein Abwurf aus der Höhe macht sie zu ungleichen Hälften."
    ],
    "howItWorks": "Die Geschwindigkeit zerfällt in Komponenten: vy = v·sin α, vx = v·cos α. Flugzeit = (vy + √(vy² + 2 gh)) ÷ g, und Weite = vx × Zeit. Die Fallbeschleunigung wird mit 9,80665 m/s² angesetzt.",
    "example": "Ein Wurf mit 20 m/s unter 45° vom Boden trägt 40,789 m in 2,884 s.",
    "faq": [
      {
        "q": "Warum sind 45° der beste Winkel?",
        "a": "Nur vom Boden aus. Hebst du den Abwurfpunkt, sinkt das Beste unter 45°: der Körper fällt länger, die waagerechte Komponente ist also mehr wert als die senkrechte."
      },
      {
        "q": "Ist der Luftwiderstand enthalten?",
        "a": "Nein. Der Einfluss hängt von Masse, Fläche, Form, Geschwindigkeit und Medium ab; eine „kleine Geschwindigkeit“ allein garantiert keinen kleinen Fehler. Bei wesentlichem Widerstand beschreibt diese Parabel den tatsächlichen Flug nicht."
      },
      {
        "q": "Warum ist die Weite bei 90° genau null?",
        "a": "Weil es keine waagerechte Komponente gibt. In binärer Arithmetik kommt cos 90° als 6·10⁻¹⁷ heraus, und ohne dieses Abrunden auf null läse sich die Weite als Billionstel Millimeter statt als ehrliche Null."
      },
      {
        "q": "Welcher Wert von g wird verwendet?",
        "a": "Konstantes Standard-g, ebener Boden, Punktkörper und kein Luftwiderstand. Örtliche Gravitation, Wind, Rotation, Gelände und Aerodynamik werden nicht modelliert. Die maximale Reichweite bei 45° gilt für gleiche Start- und Zielhöhe."
      }
    ],
    "disclaimer": "Konstantes Standard-g, ebener Boden, Punktkörper und kein Luftwiderstand. Örtliche Gravitation, Wind, Rotation, Gelände und Aerodynamik werden nicht modelliert. Die maximale Reichweite bei 45° gilt für gleiche Start- und Zielhöhe."
  },
  "es": {
    "longDescription": "Calcula un lanzamiento ideal de 0° a 90° hasta llegar al suelo horizontal y=0. La altura inicial se mide sobre ese plano. La velocidad horizontal es constante y la aceleración vertical −9,80665 m/s². Un lanzamiento exactamente vertical tiene alcance cero; los ángulos pequeños no nulos no se borran con un umbral arbitrario.",
    "howToUse": [
      "Introduce la velocidad inicial en metros por segundo.",
      "Fija el ángulo con el horizonte entre 0 y 90 grados.",
      "Indica la altura de lanzamiento; déjala en cero para un lanzamiento desde el suelo.",
      "Compara el tiempo hasta la altura máxima con el total: lanzar desde altura los convierte en mitades desiguales."
    ],
    "howItWorks": "La velocidad se descompone: vy = v·sen α, vx = v·cos α. Tiempo de vuelo = (vy + √(vy² + 2 gh)) ÷ g, y alcance = vx × tiempo. La gravedad se toma como 9,80665 m/s².",
    "example": "Un lanzamiento de 20 m/s a 45° desde el suelo llega a 40,789 m en 2,884 s.",
    "faq": [
      {
        "q": "¿Por qué 45° es el mejor ángulo?",
        "a": "Solo desde el nivel del suelo. Si se eleva el punto de lanzamiento, el óptimo baja de los 45°: el cuerpo cae durante más tiempo, así que la componente horizontal vale más que la vertical."
      },
      {
        "q": "¿Está incluida la resistencia del aire?",
        "a": "No. Su influencia depende de masa, área, forma, velocidad y medio; una «velocidad baja» por sí sola no garantiza un error pequeño. Si la resistencia es importante, esta parábola no describe el vuelo real."
      },
      {
        "q": "¿Por qué el alcance es exactamente cero a 90°?",
        "a": "Porque no hay componente horizontal. En aritmética binaria el cos 90° sale 6·10⁻¹⁷, y sin forzarlo a cero el alcance se leería como una billonésima de milímetro en vez de un cero honesto."
      },
      {
        "q": "¿Qué valor de g se usa?",
        "a": "g estándar constante, suelo plano, cuerpo puntual y sin resistencia del aire. No se modelan gravedad local, viento, rotación, relieve ni aerodinámica. El alcance máximo a 45° corresponde a alturas iguales de salida y llegada."
      }
    ],
    "disclaimer": "g estándar constante, suelo plano, cuerpo puntual y sin resistencia del aire. No se modelan gravedad local, viento, rotación, relieve ni aerodinámica. El alcance máximo a 45° corresponde a alturas iguales de salida y llegada."
  }
};
