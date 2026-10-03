// Individually reviewed against all five actual188 native bodies; human editorial review pending.
export const contract = {
  "ru": {
    "longDescription": "Это верхняя граница КПД теплового двигателя между двумя резервуарами с постоянными температурами, а не прогноз для конкретной машины. Вводите кельвины: горячая сторона строго теплее холодной, обе температуры выше 0 К. Строки для 1000 Дж показывают, какая часть подведённого тепла могла бы стать работой в обратимом пределе.",
    "howToUse": [
      "Обе температуры в кельвинах: к градусам Цельсия прибавьте 273,15.",
      "Холодильник — это то, куда сбрасывается тепло: обычно окружающая среда, около 300 К.",
      "Строка работы из 1000 Дж показывает то же число нагляднее: столько джоулей превратится в работу, остальное уйдёт вовне.",
      "Равные температуры и 0 К отвергаются в режиме теплового двигателя. Температуры Цельсия сначала переводите: T=t+273,15."
    ],
    "howItWorks": "η = 1 − T_холодная / T_горячая, температуры в кельвинах.",
    "example": "При 800 К и 300 К предел равен 62,5 % — больше не даст никакая машина.",
    "faq": [
      {
        "q": "Почему нельзя в градусах Цельсия?",
        "a": "В формулу входит отношение температур, а оно имеет смысл только от абсолютного нуля. Взяв 100 °C и 20 °C как есть, вы получите 80 % вместо честных 21,4 %, а при отрицательной температуре среды — и вовсе КПД больше единицы."
      },
      {
        "q": "Почему настоящие двигатели хуже?",
        "a": "Цикл Карно обратим: процессы идут бесконечно медленно, трения нет, теплообмен без разности температур. Реальная машина должна работать за конечное время, и каждое отступление от идеала стоит части КПД."
      },
      {
        "q": "Как поднять предел?",
        "a": "При неизменной холодной стороне повышайте температуру горячей; при неизменной горячей — снижайте холодную. Предел задаёт именно отношение Tc/Th. Материалы, охлаждение и схема реального двигателя ограничивают оба пути; универсальной доли от КПД Карно у ДВС или турбин нет."
      },
      {
        "q": "Может ли КПД дойти до 100 %?",
        "a": "Для этого холодильник должен иметь ровно абсолютный ноль, что недостижимо. Это и есть второе начало термодинамики в количественной форме: часть тепла обязана уйти неиспользованной."
      }
    ],
    "disclaimer": "Два резервуара постоянной температуры и обратимый предел. Фактический КПД, мощность и потери установки не рассчитываются."
  },
  "en": {
    "longDescription": "This is the upper efficiency bound for a heat engine between two constant-temperature reservoirs, not a prediction for a particular machine. Enter kelvin, with the hot side strictly hotter and both temperatures above 0 K. The 1000 J rows show the reversible-limit split between work and rejected heat.",
    "howToUse": [
      "Both temperatures in kelvin: add 273.15 to degrees Celsius.",
      "The cold reservoir is wherever the heat is dumped — usually the surroundings, about 300 K.",
      "The work-from-1000 J row shows the same number more plainly: that many joules become work, the rest leaves.",
      "Equal temperatures and 0 K are rejected in this heat-engine mode. Convert Celsius first: T=t+273.15."
    ],
    "howItWorks": "η = 1 − T_cold / T_hot, with temperatures in kelvin.",
    "example": "At 800 K and 300 K the limit is 62.5 % — no engine will beat that.",
    "faq": [
      {
        "q": "Why not degrees Celsius?",
        "a": "The formula uses a ratio of temperatures, which only means something measured from absolute zero. Taking 100 °C and 20 °C as they stand gives 80 % instead of an honest 21.4 %, and with a sub-zero ambient it gives efficiency above one."
      },
      {
        "q": "Why are real engines worse?",
        "a": "The Carnot cycle is reversible: processes run infinitely slowly, there is no friction, heat flows across no temperature difference. A real machine must finish in finite time, and every departure from the ideal costs efficiency."
      },
      {
        "q": "How can the limit be raised?",
        "a": "With the cold side fixed, raise the hot temperature; with the hot side fixed, lower the cold temperature. The bound depends on Tc/Th. Materials, cooling and engine design limit both choices; there is no universal fraction of Carnot efficiency for engines or turbines."
      },
      {
        "q": "Can efficiency reach 100 %?",
        "a": "That would need a cold reservoir at exactly absolute zero, which is unreachable. This is the second law of thermodynamics in numbers: some heat must leave unused."
      }
    ],
    "disclaimer": "Two constant-temperature reservoirs and the reversible limit. Actual efficiency, power and equipment losses are not calculated."
  },
  "uk": {
    "longDescription": "Це верхня межа ККД теплового двигуна між двома резервуарами зі сталими температурами, а не прогноз для конкретної машини. Вводьте кельвіни: гаряча сторона строго тепліша, обидві температури вищі за 0 К. Рядки для 1000 Дж показують розподіл підведеного тепла між роботою та відведенням в оборотній межі.",
    "howToUse": [
      "Обидві температури вводяться в кельвінах: до градусів Цельсія додайте 273,15.",
      "Холодильник — це те, куди скидається тепло: зазвичай довкілля, близько 300 К.",
      "Нагрівник має бути теплішим за холодильник, інакше цикл не працює.",
      "Однакові температури й 0 К відхиляються в цьому режимі теплового двигуна. Спочатку переведіть Цельсій: T=t+273,15."
    ],
    "howItWorks": "ККД рахується як η = 1 − T_холодна / T_гаряча, температури обов’язково в кельвінах. Формула не залежить ні від робочого тіла, ні від конструкції: це верхня межа для будь-якої теплової машини між цими двома температурами.",
    "example": "За 800 К і 300 К оборотна межа дорівнює 62,5%. Із 1000 Дж підведеного тепла це 625 Дж роботи та 375 Дж відведеного тепла.",
    "faq": [
      {
        "q": "Чому реальні двигуни не досягають межі Карно?",
        "a": "Бо цикл Карно потребує нескінченно повільних оборотних процесів без тертя й без перепаду температур під час теплообміну. Будь-яка реальна швидкість і будь-яке тертя знижують ККД."
      },
      {
        "q": "Чому температури обов’язково в кельвінах?",
        "a": "Бо у формулі стоїть їхнє відношення, а воно має сенс лише для абсолютної шкали. Підстановка градусів Цельсія дала б безглузді значення, а за нуля — ділення на нуль."
      },
      {
        "q": "Як підняти ККД теплової машини?",
        "a": "За незмінної холодної сторони підвищуйте гарячу температуру; за незмінної гарячої — знижуйте холодну. Межу визначає Tc/Th. Матеріали, охолодження та схема двигуна обмежують обидва шляхи; універсальної частки від ККД Карно для ДВЗ чи турбін немає."
      },
      {
        "q": "Чи може ККД дорівнювати одиниці?",
        "a": "Лише за температури холодильника в абсолютному нулі, що недосяжно. Це формулювання другого начала термодинаміки: повністю перетворити тепло на роботу неможливо."
      }
    ],
    "disclaimer": "Два резервуари сталої температури й оборотна межа. Фактичний ККД, потужність та втрати установки не розраховуються."
  },
  "de": {
    "longDescription": "Dies ist die obere Wirkungsgradgrenze einer Wärmekraftmaschine zwischen zwei Reservoirs mit konstanten Temperaturen, keine Prognose für eine bestimmte Maschine. Gib Kelvin ein: Die warme Seite muss wärmer sein, beide Temperaturen liegen über 0 K. Die Zeilen für 1000 J teilen die zugeführte Wärme im reversiblen Grenzfall in Arbeit und abgegebene Wärme.",
    "howToUse": [
      "Beide Temperaturen in Kelvin: zu Grad Celsius 273,15 addieren.",
      "Das kalte Reservoir ist dort, wo die Wärme abgegeben wird — meist die Umgebung, rund 300 K.",
      "Die Zeile mit der Arbeit aus 1000 J zeigt dieselbe Zahl anschaulicher: so viele Joule werden zu Arbeit, der Rest geht fort.",
      "Gleiche Temperaturen und 0 K werden in diesem Wärmekraftmaschinen-Modus abgelehnt. Celsius zuerst umrechnen: T=t+273,15."
    ],
    "howItWorks": "η = 1 − T_kalt / T_warm, mit den Temperaturen in Kelvin.",
    "example": "Bei 800 K und 300 K liegt die Grenze bei 62,5 % — keine Maschine übertrifft das.",
    "faq": [
      {
        "q": "Warum nicht Grad Celsius?",
        "a": "Die Formel nutzt ein Verhältnis von Temperaturen, und das bedeutet nur etwas, wenn vom absoluten Nullpunkt aus gemessen wird. 100 °C und 20 °C so zu nehmen, wie sie dastehen, ergibt 80 % statt ehrlicher 21,4 %, und bei einer Umgebung unter null ergibt es einen Wirkungsgrad über eins."
      },
      {
        "q": "Warum sind wirkliche Maschinen schlechter?",
        "a": "Der Carnot-Prozess ist umkehrbar: die Vorgänge laufen unendlich langsam, es gibt keine Reibung, Wärme fließt ohne Temperaturunterschied. Eine wirkliche Maschine muss in endlicher Zeit fertig werden, und jede Abweichung vom Ideal kostet Wirkungsgrad."
      },
      {
        "q": "Wie lässt sich die Grenze anheben?",
        "a": "Bei fester kalter Temperatur die warme erhöhen, bei fester warmer Temperatur die kalte senken. Entscheidend ist Tc/Th. Werkstoffe, Kühlung und Bauart begrenzen beide Wege; für Motoren oder Turbinen gibt es keinen universellen Anteil am Carnot-Wirkungsgrad."
      },
      {
        "q": "Kann der Wirkungsgrad 100 % erreichen?",
        "a": "Das bräuchte ein kaltes Reservoir bei genau dem absoluten Nullpunkt, und der ist unerreichbar. Das ist der zweite Hauptsatz der Wärmelehre in Zahlen: ein Teil der Wärme muss ungenutzt fortgehen."
      }
    ],
    "disclaimer": "Zwei Reservoirs mit konstanten Temperaturen und reversibler Grenzfall. Tatsächlicher Wirkungsgrad, Leistung und Anlagenverluste werden nicht berechnet."
  },
  "es": {
    "longDescription": "Es el límite superior del rendimiento de una máquina térmica entre dos focos de temperatura constante, no una predicción para un motor concreto. Introduce kelvin: el foco caliente debe estar más caliente y ambos superar 0 K. Las filas de 1000 J reparten el calor aportado entre trabajo y calor cedido en el límite reversible.",
    "howToUse": [
      "Ambas temperaturas en kelvin: suma 273,15 a los grados Celsius.",
      "El foco frío es allí donde se vierte el calor, normalmente el ambiente, unos 300 K.",
      "La fila del trabajo a partir de 1000 J dice lo mismo de forma más llana: esos julios se convierten en trabajo y el resto se marcha.",
      "Este modo rechaza temperaturas iguales y 0 K. Convierte primero desde Celsius: T=t+273,15."
    ],
    "howItWorks": "η = 1 − T_frío / T_caliente, con las temperaturas en kelvin.",
    "example": "A 800 K y 300 K el límite es del 62,5 %: ninguna máquina lo supera.",
    "faq": [
      {
        "q": "¿Por qué no en grados Celsius?",
        "a": "La fórmula usa un cociente de temperaturas, que solo significa algo medido desde el cero absoluto. Tomar 100 °C y 20 °C tal cual da un 80 % en lugar de un honesto 21,4 %, y con un ambiente bajo cero da un rendimiento superior a uno."
      },
      {
        "q": "¿Por qué las máquinas reales son peores?",
        "a": "El ciclo de Carnot es reversible: los procesos transcurren infinitamente despacio, no hay rozamiento y el calor fluye sin diferencia de temperatura. Una máquina real debe terminar en un tiempo finito, y cada desviación del ideal cuesta rendimiento."
      },
      {
        "q": "¿Cómo puede subirse el límite?",
        "a": "Con el foco frío fijo, aumenta la temperatura caliente; con el caliente fijo, reduce la fría. El límite depende de Tc/Th. Los materiales, la refrigeración y el diseño restringen ambas vías; no existe una fracción universal del rendimiento de Carnot para motores o turbinas."
      },
      {
        "q": "¿El rendimiento puede llegar al 100 %?",
        "a": "Eso exigiría un foco frío exactamente en el cero absoluto, que es inalcanzable. Este es el segundo principio de la termodinámica en cifras: algo de calor tiene que marcharse sin usar."
      }
    ],
    "disclaimer": "Dos focos de temperatura constante y límite reversible. No se calculan el rendimiento real, la potencia ni las pérdidas del equipo."
  }
};
