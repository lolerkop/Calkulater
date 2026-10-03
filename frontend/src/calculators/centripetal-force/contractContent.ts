// Individually reviewed against all five actual188 native bodies; human editorial review pending.
export const contract = {
  "ru": {
    "longDescription": "Найдите модуль результирующей силы к центру для равномерного движения по окружности. Масса и радиус положительные, скорость — неотрицательный модуль в м/с. При удвоении скорости нужна вчетверо большая радиальная сила, но расчёт не определяет сцепление шин, прочность троса или безопасную скорость.",
    "howToUse": [
      "Введите массу движущегося тела в килограммах.",
      "Укажите его скорость по окружности в метрах в секунду.",
      "Укажите радиус окружности в метрах.",
      "Сравните полученную силу с тем, что реально могут дать шины, трос или полотно.",
      "При скорости 0 сила и угловая скорость равны 0, а конечного периода оборота нет. Отрицательная скорость здесь не задаёт направление вращения."
    ],
    "howItWorks": "F = m × v² ÷ r. Ускорение равно v² ÷ r, угловая скорость — v ÷ r, а период одного оборота — 2πr ÷ v.",
    "example": "Автомобилю массой 1 200 кг на скорости 15 м/с и радиусе 40 м нужно 6 750 Н к центру.",
    "faq": [
      {
        "q": "Центростремительная сила — это отдельный вид силы?",
        "a": "Нет, это роль, а не источник. Её обеспечивают трение, натяжение, тяготение или полотно дороги; формула говорит, сколько нужно, а не откуда взять."
      },
      {
        "q": "А как же центробежная сила?",
        "a": "В инерциальной системе нужна результирующая сила к центру. Во вращающейся системе можно вводить направленную наружу центробежную силу инерции; это не дополнительное внешнее взаимодействие. Вес, нормальная сила и другие компоненты сил при этом могут присутствовать."
      },
      {
        "q": "Почему скорость важнее радиуса?",
        "a": "Скорость входит в квадрате, а радиус только в первой степени. Вдвое большая скорость требует вчетверо большей силы, вдвое меньший радиус — всего вдвое."
      },
      {
        "q": "Показывается ли период для неподвижного тела?",
        "a": "Нет. При нулевой скорости оборот не завершится никогда, поэтому строка не выводится вместо показа неограниченного числа. Сама сила при этом законно равна нулю."
      }
    ],
    "disclaimer": "Равномерное движение по окружности; сила — радиальная равнодействующая. Возможность её обеспечить определяется отдельно."
  },
  "en": {
    "longDescription": "Find the magnitude of the net inward force for uniform circular motion. Mass and radius are positive; speed is a nonnegative magnitude in m/s. Doubling speed requires four times the radial force. The result does not determine tyre grip, rope strength or a safe driving speed.",
    "howToUse": [
      "Enter the mass of the moving body in kilograms.",
      "Enter its speed along the circle in metres per second.",
      "Enter the radius of the circle in metres.",
      "Compare the force against what the tyres, rope or track can actually supply.",
      "At speed 0, force and angular speed are 0; no finite revolution period exists. A negative input does not encode clockwise motion here."
    ],
    "howItWorks": "F = m × v² ÷ r. Acceleration is v² ÷ r, angular velocity is v ÷ r, and the period of one revolution is 2πr ÷ v.",
    "example": "A 1,200 kg car at 15 m/s on a 40 m radius needs 6,750 N towards the centre.",
    "faq": [
      {
        "q": "Is centripetal force a separate kind of force?",
        "a": "No. It is a role, not a source. Friction, tension, gravity or the track surface provides it; the formula says how much is needed, not where it comes from."
      },
      {
        "q": "What about centrifugal force?",
        "a": "An inertial frame needs a net inward force. A rotating frame can use an outward centrifugal inertial force; it is not an additional external interaction. Weight, normal force and other force components may still be present."
      },
      {
        "q": "Why does the speed matter so much more than the radius?",
        "a": "Speed enters squared and radius only to the first power. Twice the speed needs four times the force; half the radius needs only twice."
      },
      {
        "q": "Is the period shown for a stationary body?",
        "a": "No. At zero speed a revolution never completes, so the row is omitted rather than shown as an unbounded number. The force itself is legitimately zero."
      }
    ],
    "disclaimer": "Uniform circular motion; force means the net radial component. Available force and material limits must be checked separately."
  },
  "uk": {
    "longDescription": "Знайдіть модуль рівнодійної сили до центра для рівномірного руху по колу. Маса й радіус додатні, швидкість — невід’ємний модуль у м/с. Подвоєння швидкості потребує вчетверо більшої радіальної сили; зчеплення шин і міцність троса тут не визначаються.",
    "howToUse": [
      "Введіть масу тіла.",
      "Введіть швидкість руху по колу.",
      "Введіть радіус кола й прочитайте потрібну силу.",
      "За швидкості 0 сила й кутова швидкість дорівнюють 0, скінченного періоду оберту немає. Від’ємне число тут не задає напрямок обертання."
    ],
    "howItWorks": "Сила рахується як F = m × v² ÷ r. Прискорення дорівнює v² ÷ r, кутова швидкість — v ÷ r, а період одного оберту — 2πr ÷ v. Квадрат швидкості в чисельнику й перший степінь радіуса в знаменнику й дають ту саму несиметричність.",
    "example": "Автомобілю масою 1200 кг на швидкості 15 м/с і радіусі 40 м потрібно 6750 Н до центра. На швидкості 30 м/с знадобилося б уже 27 000 Н.",
    "faq": [
      {
        "q": "Чому швидкість важливіша за радіус?",
        "a": "Бо вона входить у квадраті, а радіус лише в першому степені. Подвоєння швидкості вимагає вчетверо більшої сили, а подвоєння радіуса зменшує її лише вдвічі."
      },
      {
        "q": "Що створює доцентрову силу насправді?",
        "a": "Для автомобіля — тертя шин об дорогу, для супутника — тяжіння, для тягарця на нитці — натяг нитки. Доцентрова сила не є окремим видом сили: це роль, яку виконує якась справжня сила."
      },
      {
        "q": "Чи існує відцентрова сила?",
        "a": "В інерційній системі потрібна рівнодійна до центра. В обертовій системі можна ввести відцентрову силу інерції назовні; це не додаткова зовнішня взаємодія. Вага, нормальна сила та інші складові сил також можуть діяти."
      },
      {
        "q": "Чому доцентрова сила не виконує роботи?",
        "a": "Бо вона перпендикулярна до руху, а робота дорівнює силі на переміщення й на косинус кута. Косинус 90° дорівнює нулю, тому швидкість тіла на колі не змінюється."
      }
    ],
    "disclaimer": "Рівномірний рух по колу; сила є радіальною рівнодійною. Доступну силу й міцність перевіряють окремо."
  },
  "de": {
    "longDescription": "Berechne den Betrag der resultierenden Kraft zur Mitte bei gleichförmiger Kreisbewegung. Masse und Radius sind positiv, die Geschwindigkeit ist ein nichtnegativer Betrag in m/s. Doppelte Geschwindigkeit verlangt die vierfache Radialkraft. Reifengrip, Seilfestigkeit und eine sichere Fahrgeschwindigkeit werden damit nicht bestimmt.",
    "howToUse": [
      "Trage die Masse des bewegten Körpers in Kilogramm ein.",
      "Trage seine Geschwindigkeit auf der Kreisbahn in Metern je Sekunde ein.",
      "Trage den Radius der Kreisbahn in Metern ein.",
      "Vergleiche die Kraft mit dem, was Reifen, Seil oder Schiene tatsächlich aufbringen können.",
      "Bei Geschwindigkeit 0 sind Kraft und Winkelgeschwindigkeit 0; eine endliche Umlaufdauer gibt es nicht. Negative Werte codieren hier keine Drehrichtung."
    ],
    "howItWorks": "F = m × v² ÷ r. Die Beschleunigung ist v² ÷ r, die Winkelgeschwindigkeit v ÷ r, und die Dauer eines Umlaufs 2πr ÷ v.",
    "example": "Ein Fahrzeug mit 1200 kg braucht bei 15 m/s auf einem Radius von 40 m 6750 N zur Mitte hin.",
    "faq": [
      {
        "q": "Ist die Zentripetalkraft eine eigene Kraftart?",
        "a": "Nein. Sie ist eine Rolle und keine Quelle. Reibung, Seilzug, Schwerkraft oder die Fahrbahn bringen sie auf; die Formel sagt, wie viel nötig ist, und nicht, woher es kommt."
      },
      {
        "q": "Und die Fliehkraft?",
        "a": "Im Inertialsystem ist eine resultierende Kraft nach innen nötig. Im rotierenden Bezugssystem lässt sich eine nach außen gerichtete Zentrifugal-Trägheitskraft verwenden; sie ist keine zusätzliche äußere Wechselwirkung. Gewichtskraft, Normalkraft und weitere Komponenten können ebenfalls wirken."
      },
      {
        "q": "Warum zählt die Geschwindigkeit so viel mehr als der Radius?",
        "a": "Die Geschwindigkeit geht im Quadrat ein und der Radius nur in der ersten Potenz. Doppelte Geschwindigkeit braucht die vierfache Kraft; der halbe Radius nur die doppelte."
      },
      {
        "q": "Wird die Umlaufdauer bei einem ruhenden Körper angezeigt?",
        "a": "Nein. Bei der Geschwindigkeit null kommt ein Umlauf nie zustande, die Zeile entfällt also, statt eine unbegrenzte Zahl zu zeigen. Die Kraft selbst ist berechtigterweise null."
      }
    ],
    "disclaimer": "Gleichförmige Kreisbewegung; die Kraft ist die resultierende Radialkomponente. Verfügbare Kraft und Festigkeit sind gesondert zu prüfen."
  },
  "es": {
    "longDescription": "Calcula el módulo de la fuerza resultante hacia el centro en un movimiento circular uniforme. La masa y el radio son positivos; la rapidez es un módulo no negativo en m/s. Duplicarla exige cuatro veces la fuerza radial. El resultado no determina la adherencia del neumático, la resistencia de la cuerda ni una velocidad segura.",
    "howToUse": [
      "Introduce la masa del cuerpo en movimiento, en kilogramos.",
      "Introduce su velocidad a lo largo de la circunferencia, en metros por segundo.",
      "Introduce el radio de la circunferencia, en metros.",
      "Compara la fuerza con lo que los neumáticos, la cuerda o la vía pueden aportar de verdad.",
      "Con rapidez 0, la fuerza y la velocidad angular son 0; no hay periodo finito. Un valor negativo no indica el sentido de giro."
    ],
    "howItWorks": "F = m × v² ÷ r. La aceleración es v² ÷ r, la velocidad angular es v ÷ r y el periodo de una revolución es 2πr ÷ v.",
    "example": "Un coche de 1200 kg a 15 m/s en un radio de 40 m necesita 6750 N hacia el centro.",
    "faq": [
      {
        "q": "¿La fuerza centrípeta es un tipo de fuerza aparte?",
        "a": "No. Es un papel, no un origen. La aportan el rozamiento, la tensión, la gravedad o el firme; la fórmula dice cuánta hace falta, no de dónde sale."
      },
      {
        "q": "¿Y la fuerza centrífuga?",
        "a": "En un sistema inercial hace falta una fuerza resultante hacia dentro. En un sistema giratorio se puede introducir una fuerza centrífuga de inercia hacia fuera; no es una interacción externa adicional. El peso, la fuerza normal y otras componentes también pueden actuar."
      },
      {
        "q": "¿Por qué importa mucho más la velocidad que el radio?",
        "a": "La velocidad entra al cuadrado y el radio solo a la primera potencia. El doble de velocidad exige cuatro veces la fuerza; la mitad de radio, solo el doble."
      },
      {
        "q": "¿Se muestra el periodo para un cuerpo en reposo?",
        "a": "No. A velocidad cero nunca se completa una revolución, así que la fila se omite en vez de mostrarse como un número sin límite. La fuerza sí es legítimamente cero."
      }
    ],
    "disclaimer": "Movimiento circular uniforme; la fuerza es la componente radial resultante. La fuerza disponible y la resistencia se comprueban aparte."
  }
};
