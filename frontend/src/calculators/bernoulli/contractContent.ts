// Individually reviewed against all five actual188 native bodies; human editorial review pending.
export const contract = {
  "ru": {
    "longDescription": "Найдите абсолютное давление во втором сечении идеального несжимаемого потока. Точки относятся к одной линии тока; скорости неотрицательны, плотность постоянна, высоты имеют общий нуль. Насосы, турбины и потери здесь не вводятся. Слагаемые и «полный напор» показаны в кПа как энергия на объём; напор в метрах получился бы после деления на ρg.",
    "howToUse": [
      "Высоты отсчитываются от любого общего уровня: важна только их разность, поэтому нулём можно назначить любое сечение.",
      "Найдите абсолютное давление во втором сечении идеального несжимаемого потока. Точки относятся к одной линии тока; скорости неотрицательны, плотность постоянна, высоты имеют общий нуль. Насосы, турбины и потери здесь не вводятся. Слагаемые и «полный напор» показаны в кПа как энергия на объём; напор в метрах получился бы после деления на ρg.",
      "Расчёт не учитывает вязкость: для длинной трубы к нему надо добавить потери на трение отдельно."
    ],
    "howItWorks": "p₂ = p₁ + ½ρ(v₁² − v₂²) + ρg(h₁ − h₂); полный напор — сумма статического, динамического и высотного слагаемых. Стационарное течение вдоль одной линии тока, постоянная плотность, без вязких потерь и внешних машин. Давления здесь абсолютные: отрицательный ответ отклоняется. Давление пара, температура жидкости и запас до кавитации не рассчитываются; энергетическая сумма зависит от нуля высоты.",
    "example": "Разгон воды с 2 до 6 м/с при 300 кПа роняет давление до 284 кПа.",
    "faq": [
      {
        "q": "Почему в сужении давление падает?",
        "a": "Потому что поток там быстрее, а полный напор сохраняется: прибавка динамического слагаемого может прийти только из статического давления. Это противоречит бытовой интуиции про «сжатие», но подтверждается любым манометром на трубке Вентури."
      },
      {
        "q": "Учитываются ли потери на трение в трубе?",
        "a": "Нет. Уравнение Бернулли идеально: в реальной трубе часть напора уходит на трение и местные сопротивления, и на длинных участках эта потеря становится главной. Её считают отдельно."
      },
      {
        "q": "Что означает отрицательное давление в ответе?",
        "a": "Это несовместимо с принятой здесь абсолютной шкалой давления и заданными идеальными условиями. Отрицательное манометрическое давление само по себе возможно, но эта форма ожидает абсолютное. Для вывода о кавитации нужны давление насыщенного пара при температуре жидкости и реальные потери; их здесь нет."
      },
      {
        "q": "Годится ли уравнение для газа?",
        "a": "Только когда изменением плотности можно пренебречь в рассматриваемом процессе. Сам калькулятор это не проверяет и не задаёт универсальную границу скорости. Для существенной сжимаемости, ударных волн или теплообмена нужна другая модель."
      }
    ],
    "disclaimer": "Стационарное течение вдоль одной линии тока, постоянная плотность, без вязких потерь и внешних машин. Давления здесь абсолютные: отрицательный ответ отклоняется. Давление пара, температура жидкости и запас до кавитации не рассчитываются; энергетическая сумма зависит от нуля высоты."
  },
  "en": {
    "longDescription": "Find absolute pressure at a second section of an ideal incompressible flow. Both points belong to one streamline; speeds are nonnegative, density constant, and heights share a datum. Pumps, turbines and losses are not entered. The terms and “total head” are shown in kPa as energy per volume; head in metres would require division by ρg.",
    "howToUse": [
      "Heights are measured from any common datum: only their difference matters, so either section may be called zero.",
      "Find absolute pressure at a second section of an ideal incompressible flow. Both points belong to one streamline; speeds are nonnegative, density constant, and heights share a datum. Pumps, turbines and losses are not entered. The terms and “total head” are shown in kPa as energy per volume; head in metres would require division by ρg.",
      "Viscosity is not included: for a long pipe the friction losses must be added on top."
    ],
    "howItWorks": "p₂ = p₁ + ½ρ(v₁² − v₂²) + ρg(h₁ − h₂); the total head sums the static, dynamic and elevation terms. Steady flow along one streamline, constant density, no viscous losses or external machinery. Pressures here are absolute, so a negative result is rejected. Vapour pressure, liquid temperature and cavitation margin are not computed; the energy sum depends on the height datum.",
    "example": "Accelerating water from 2 to 6 m/s at 300 kPa drops the pressure to 284 kPa.",
    "faq": [
      {
        "q": "Why does pressure drop in a constriction?",
        "a": "Because the flow is faster there while the total head is conserved: the extra dynamic term can only come out of the static pressure. It contradicts the everyday intuition about squeezing, but any manometer on a Venturi tube confirms it."
      },
      {
        "q": "Is friction included?",
        "a": "No. Bernoulli's equation is ideal: in a real pipe part of the head goes into friction and local resistances, and over long runs that loss dominates. It is computed separately."
      },
      {
        "q": "What does a negative pressure in the answer mean?",
        "a": "It is incompatible with the absolute pressure scale and ideal conditions used here. Negative gauge pressure can exist, but this form expects absolute pressure. A cavitation conclusion requires vapour pressure at the liquid temperature and actual losses; neither is supplied."
      },
      {
        "q": "Does the equation work for gases?",
        "a": "Only when density changes are negligible in the process being considered. The calculator does not check that condition or impose a universal speed threshold. Significant compressibility, shock waves or heat exchange need a different model."
      }
    ],
    "disclaimer": "Steady flow along one streamline, constant density, no viscous losses or external machinery. Pressures here are absolute, so a negative result is rejected. Vapour pressure, liquid temperature and cavitation margin are not computed; the energy sum depends on the height datum."
  },
  "uk": {
    "longDescription": "Знайдіть абсолютний тиск у другому перерізі ідеального нестисливого потоку. Точки належать одній лінії течії; швидкості невід’ємні, густина стала, висоти мають спільний нуль. Насоси, турбіни й втрати не задано. Доданки та «повний напір» показано в кПа як енергію на об’єм; напір у метрах потребував би ділення на ρg.",
    "howToUse": [
      "Висоти відлічуються від будь-якого спільного рівня: важлива лише їхня різниця.",
      "Знайдіть абсолютний тиск у другому перерізі ідеального нестисливого потоку. Точки належать одній лінії течії; швидкості невід’ємні, густина стала, висоти мають спільний нуль. Насоси, турбіни й втрати не задано. Доданки та «повний напір» показано в кПа як енергію на об’єм; напір у метрах потребував би ділення на ρg.",
      "Введіть швидкість у другому перерізі та густину рідини: води 1000 кг/м³, повітря 1,225."
    ],
    "howItWorks": "Тиск у другому перерізі рахується як p₂ = p₁ + ½ρ(v₁² − v₂²) + ρg(h₁ − h₂). Повний напір — сума статичного, динамічного й висотного доданків; він і зберігається вздовж потоку за відсутності втрат. Стаціонарна течія вздовж однієї лінії, стала густина, без в’язких втрат і зовнішніх машин. Тиски тут абсолютні, тому від’ємний результат відхиляється. Тиск пари, температура рідини й запас до кавітації не обчислюються; енергетична сума залежить від нуля висоти.",
    "example": "Розгін води з 2 до 6 м/с за тиску 300 кПа роняє тиск до 284 кПа. Різниця 16 кПа й пішла на розгін потоку.",
    "faq": [
      {
        "q": "Чому у швидкому потоці тиск нижчий?",
        "a": "За однакових висот і без втрат збільшення кінетичної енергії потоку відбувається за рахунок тиску. За різних висот змінюється також доданок ρgh. Пояснення не замінює повної моделі будь-якого пристрою."
      },
      {
        "q": "Чи враховано втрати на тертя?",
        "a": "Ні. Рівняння описує ідеальну рідину без в’язкості. У реальній трубі частина напору втрачається на тертя, і чим довша труба, тим більше."
      },
      {
        "q": "Чи пояснює Бернуллі підіймальну силу крила?",
        "a": "Частково. Різниця швидкостей над крилом і під ним справді дає різницю тисків, але популярне пояснення «шляхи однакової довжини» хибне. Повна картина потребує ще й кута атаки та відхилення потоку."
      },
      {
        "q": "Від якого рівня відлічувати висоти?",
        "a": "Від будь-якого спільного: у формулу входить лише різниця. Нулем зручно призначити нижчий переріз."
      }
    ],
    "disclaimer": "Стаціонарна течія вздовж однієї лінії, стала густина, без в’язких втрат і зовнішніх машин. Тиски тут абсолютні, тому від’ємний результат відхиляється. Тиск пари, температура рідини й запас до кавітації не обчислюються; енергетична сума залежить від нуля висоти."
  },
  "de": {
    "longDescription": "Berechne den Absolutdruck im zweiten Querschnitt einer idealen inkompressiblen Strömung. Beide Punkte liegen auf einer Stromlinie; Geschwindigkeiten sind nichtnegativ, Dichte konstant und Höhen haben denselben Bezug. Pumpen, Turbinen und Verluste werden nicht eingegeben. Die Anteile und „Gesamthöhe“ erscheinen in kPa als Energie je Volumen; für Meter Förderhöhe wäre durch ρg zu teilen.",
    "howToUse": [
      "Die Höhen werden von einem beliebigen gemeinsamen Bezug gemessen: es zählt nur ihr Unterschied, jeder Querschnitt darf also als null gelten.",
      "Berechne den Absolutdruck im zweiten Querschnitt einer idealen inkompressiblen Strömung. Beide Punkte liegen auf einer Stromlinie; Geschwindigkeiten sind nichtnegativ, Dichte konstant und Höhen haben denselben Bezug. Pumpen, Turbinen und Verluste werden nicht eingegeben. Die Anteile und „Gesamthöhe“ erscheinen in kPa als Energie je Volumen; für Meter Förderhöhe wäre durch ρg zu teilen.",
      "Die Zähigkeit ist nicht enthalten: bei einem langen Rohr müssen die Reibungsverluste hinzugerechnet werden."
    ],
    "howItWorks": "p₂ = p₁ + ½ρ(v₁² − v₂²) + ρg(h₁ − h₂); die Gesamthöhe summiert den statischen, den dynamischen und den Höhenanteil. Stationäre Strömung entlang einer Stromlinie, konstante Dichte, keine viskosen Verluste oder äußeren Maschinen. Die Drücke sind absolut; negative Ergebnisse werden abgewiesen. Dampfdruck, Flüssigkeitstemperatur und Kavitationsreserve werden nicht berechnet; die Energiesumme hängt vom Höhenbezug ab.",
    "example": "Wasser von 2 auf 6 m/s zu beschleunigen senkt den Druck von 300 kPa auf 284 kPa.",
    "faq": [
      {
        "q": "Warum fällt der Druck in einer Verengung?",
        "a": "Weil die Strömung dort schneller ist, während die Gesamthöhe erhalten bleibt: der zusätzliche dynamische Anteil kann nur aus dem statischen Druck kommen. Das widerspricht der alltäglichen Vorstellung vom Zusammendrücken, aber jedes Manometer an einem Venturi-Rohr bestätigt es."
      },
      {
        "q": "Ist die Reibung enthalten?",
        "a": "Nein. Die Bernoulli-Gleichung ist ideal: in einem echten Rohr geht ein Teil der Höhe in Reibung und örtliche Widerstände, und über lange Strecken überwiegt dieser Verlust. Er wird gesondert gerechnet."
      },
      {
        "q": "Was bedeutet ein negativer Druck in der Antwort?",
        "a": "Das widerspricht der hier verwendeten Absolutdruckskala und den idealen Randbedingungen. Negativer Relativdruck ist möglich, dieses Formular erwartet jedoch Absolutdruck. Für eine Kavitationsaussage wären Dampfdruck bei Flüssigkeitstemperatur und tatsächliche Verluste nötig; beides fehlt."
      },
      {
        "q": "Gilt die Gleichung auch für Gase?",
        "a": "Nur wenn Dichteänderungen im betrachteten Vorgang vernachlässigbar sind. Der Rechner prüft diese Bedingung nicht und setzt keine allgemeine Geschwindigkeitsgrenze. Wesentliche Kompressibilität, Stoßwellen oder Wärmeaustausch benötigen ein anderes Modell."
      }
    ],
    "disclaimer": "Stationäre Strömung entlang einer Stromlinie, konstante Dichte, keine viskosen Verluste oder äußeren Maschinen. Die Drücke sind absolut; negative Ergebnisse werden abgewiesen. Dampfdruck, Flüssigkeitstemperatur und Kavitationsreserve werden nicht berechnet; die Energiesumme hängt vom Höhenbezug ab."
  },
  "es": {
    "longDescription": "Halla la presión absoluta en una segunda sección de un flujo ideal incompresible. Ambos puntos pertenecen a una línea de corriente; las velocidades son no negativas, la densidad constante y las alturas comparten referencia. No se introducen bombas, turbinas ni pérdidas. Los términos y la «carga total» se muestran en kPa como energía por volumen; la carga en metros requeriría dividir por ρg.",
    "howToUse": [
      "Las alturas se miden desde cualquier referencia común: solo importa su diferencia, así que cualquiera de las secciones puede tomarse como cero.",
      "Halla la presión absoluta en una segunda sección de un flujo ideal incompresible. Ambos puntos pertenecen a una línea de corriente; las velocidades son no negativas, la densidad constante y las alturas comparten referencia. No se introducen bombas, turbinas ni pérdidas. Los términos y la «carga total» se muestran en kPa como energía por volumen; la carga en metros requeriría dividir por ρg.",
      "La viscosidad no está incluida: en una tubería larga hay que sumar las pérdidas por rozamiento."
    ],
    "howItWorks": "p₂ = p₁ + ½ρ(v₁² − v₂²) + ρg(h₁ − h₂); la carga total suma los términos estático, dinámico y de altura. Flujo estacionario por una línea de corriente, densidad constante, sin pérdidas viscosas ni máquinas externas. Las presiones son absolutas y se rechaza un resultado negativo. No se calculan presión de vapor, temperatura del líquido ni margen de cavitación; la suma energética depende de la referencia de altura.",
    "example": "Acelerar agua de 2 a 6 m/s con 300 kPa baja la presión a 284 kPa.",
    "faq": [
      {
        "q": "¿Por qué baja la presión en un estrechamiento?",
        "a": "Porque allí el flujo es más rápido mientras la carga total se conserva: el término dinámico añadido solo puede salir de la presión estática. Contradice la intuición cotidiana sobre apretar, pero cualquier manómetro en un tubo Venturi lo confirma."
      },
      {
        "q": "¿Está incluido el rozamiento?",
        "a": "No. La ecuación de Bernoulli es ideal: en una tubería real parte de la carga se va en rozamiento y resistencias locales, y en trazados largos esa pérdida domina. Se calcula aparte."
      },
      {
        "q": "¿Qué significa una presión negativa en la respuesta?",
        "a": "Es incompatible con la escala absoluta y las condiciones ideales usadas aquí. Una presión manométrica negativa puede existir, pero el formulario espera presión absoluta. Para concluir que hay cavitación se necesita la presión de vapor a la temperatura del líquido y las pérdidas reales; no se aportan."
      },
      {
        "q": "¿La ecuación vale para gases?",
        "a": "Solo cuando los cambios de densidad sean despreciables en el proceso considerado. La calculadora no comprueba esa condición ni fija un límite universal de velocidad. La compresibilidad importante, ondas de choque o intercambio térmico requieren otro modelo."
      }
    ],
    "disclaimer": "Flujo estacionario por una línea de corriente, densidad constante, sin pérdidas viscosas ni máquinas externas. Las presiones son absolutas y se rechaza un resultado negativo. No se calculan presión de vapor, temperatura del líquido ni margen de cavitación; la suma energética depende de la referencia de altura."
  }
};
