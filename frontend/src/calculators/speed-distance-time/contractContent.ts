import type { CalculatorCopy } from '../../lib/platform/types';

// Existing native content individually reviewed; scoped model and input corrections.
export const automotiveWave10ContractContent = {
  "ru": {
    "longDescription": "Находит скорость, расстояние или время по двум другим величинам в км, часах и км/ч. Скорость равна пути, делённому на выбранное время: если время включает остановки, результат тоже их включает. Движение по секундам и изменение скорости не моделируются. Дополнительная строка часов и минут округляется до ближайшей минуты, а основной результат времени сохраняет более подробную запись.",
    "howItWorks": "Скорость = расстояние ÷ время, расстояние = скорость × время, время = расстояние ÷ скорость. В каждом режиме вводятся только две известные величины. Значения неотрицательны; время в делителе и скорость в делителе должны быть положительными. Нулевой путь даёт нулевую скорость или время при положительном делителе; 0/0 не поддерживается. В интерфейсе нет автоматического перехода на мили или секунды.",
    "howToUse": [
      "Выберите величину, которую нужно найти.",
      "Введите две известные.",
      "Прочитайте результат и время в пути."
    ],
    "example": "420 км, пройденные за 5 часов, дают среднюю скорость 84 км/ч.",
    "faq": [
      {
        "q": "Скорость средняя или мгновенная?",
        "a": "Средняя. Она отвечает, насколько быстро поездка прошла в целом, включая всё, что делал трафик по пути."
      },
      {
        "q": "Включать ли остановки во время?",
        "a": "Это ваш выбор, и он меняет смысл. С остановками получится средняя за всю поездку, без них — средняя в движении."
      },
      {
        "q": "Можно ли считать в милях?",
        "a": "Напрямую нет, расчёт ведётся в километрах. Переведите значения конвертером, если исходные данные в милях."
      },
      {
        "q": "Почему нулевая скорость не годится для расчёта времени?",
        "a": "Деление на неё не имеет значения: стоя на месте, расстояние не преодолевается никогда, и ответа на вопрос не существует."
      }
    ]
  },
  "en": {
    "longDescription": "Finds speed, distance or time from the other two quantities in km, hours and km/h. Speed is distance divided by the chosen elapsed time; include stops in that time if you want the average to include them. Motion second by second and changes in speed are not modelled. The hours-and-minutes row rounds to the nearest minute, while the primary time result retains a more detailed value.",
    "howItWorks": "Speed = distance ÷ time, distance = speed × time, time = distance ÷ speed. Each mode shows only its two known inputs. Quantities are nonnegative; a time or speed used as divisor must be positive. Zero distance gives zero speed or time with a positive divisor; 0/0 is unsupported. The interface does not switch automatically to miles or seconds.",
    "howToUse": [
      "Choose which value you need.",
      "Enter the two you know.",
      "Read the result and the journey time."
    ],
    "example": "420 km covered in 5 hours is an average of 84 km/h.",
    "faq": [
      {
        "q": "Is this average or instantaneous speed?",
        "a": "Average. It answers how fast you travelled overall, including whatever the traffic did along the way."
      },
      {
        "q": "Should I include stops in the time?",
        "a": "That is your choice, and it changes the meaning. Including them gives the average for the whole journey; excluding them gives the average while moving."
      },
      {
        "q": "Can I use miles?",
        "a": "Not directly — the calculation works in kilometres. Convert first with the unit converter if your figures are in miles."
      },
      {
        "q": "Why is zero speed rejected when finding time?",
        "a": "Dividing by it has no value: standing still, no distance is ever covered, so no time answers the question."
      }
    ]
  },
  "uk": {
    "longDescription": "Знаходить швидкість, відстань або час за двома іншими величинами в км, годинах і км/год. Швидкість — шлях, поділений на вибраний час: якщо він включає зупинки, результат також їх включає. Рух за секундами та зміну швидкості не моделює. Рядок годин і хвилин округлюється до найближчої хвилини, а основний результат часу має докладніший запис.",
    "howItWorks": "Швидкість дорівнює відстань ÷ час, відстань = швидкість × час, час = відстань ÷ швидкість. Тут використовуються кілометри, години та км/год. Кожен режим показує лише два відомі вводи. Величини невід’ємні; час або швидкість у знаменнику мають бути додатними. Нульовий шлях дає нульову швидкість або час за додатного знаменника; 0/0 не підтримується. Інтерфейс не переходить автоматично на милі чи секунди.",
    "howToUse": [
      "Виберіть, що шукати.",
      "Введіть дві відомі величини в узгоджених одиницях.",
      "Прочитайте результат."
    ],
    "example": "420 км, пройдені за 5 годин, дають середню швидкість 84 км/год.",
    "faq": [
      {
        "q": "Чому реальна поїздка триває довше?",
        "a": "Час залежить від того, яку швидкість ви ввели: середню за весь маршрут або лише під час руху. Якщо задана середня вже враховує зупинки, їх не слід додавати повторно. Калькулятор не додає довільну затримку 10–30 %."
      },
      {
        "q": "Чим середня швидкість відрізняється від середньої за спідометром?",
        "a": "Середня за маршрут дорівнює сумарному шляху, поділеному на сумарний час. Середнє арифметичне показань спідометра збігається з нею лише за відповідного рівномірного за часом вимірювання; просте середнє двох швидкостей загалом недостатнє."
      },
      {
        "q": "Як перевести км/год у м/с?",
        "a": "Поділити на 3,6. Це точне співвідношення: у годині 3600 секунд, у кілометрі 1000 метрів."
      },
      {
        "q": "Чи можна рахувати середню швидкість двох ділянок?",
        "a": "Так: складіть відстані й час обох ділянок, потім поділіть загальний шлях на загальний час. Гармонічне середнє двох швидкостей застосовне для рівних відстаней, арифметичне — для рівних часів, а не для будь-яких двох ділянок."
      }
    ]
  },
  "de": {
    "longDescription": "Ermittelt Geschwindigkeit, Strecke oder Zeit aus den beiden anderen Größen in km, Stunden und km/h. Geschwindigkeit ist Strecke geteilt durch die gewählte Zeit; sind Halte enthalten, enthält sie auch der Mittelwert. Sekundenweiser Ablauf und Geschwindigkeitsänderungen werden nicht modelliert. Die Stunden-Minuten-Zeile rundet auf die nächste Minute, der Hauptzeitwert wird genauer dargestellt.",
    "howItWorks": "Geschwindigkeit = Weg ÷ Zeit, Weg = Geschwindigkeit × Zeit, Zeit = Weg ÷ Geschwindigkeit. Jeder Modus zeigt nur die zwei bekannten Eingaben. Größen sind nichtnegativ; Zeit oder Geschwindigkeit im Nenner müssen positiv sein. Strecke null ergibt bei positivem Nenner Geschwindigkeit oder Zeit null; 0/0 wird nicht unterstützt. Die Oberfläche wechselt nicht automatisch zu Meilen oder Sekunden.",
    "howToUse": [
      "Wähle, welchen Wert du brauchst.",
      "Trage die beiden bekannten ein.",
      "Lies das Ergebnis und die Fahrzeit ab."
    ],
    "example": "420 km in 5 Stunden sind im Mittel 84 km/h.",
    "faq": [
      {
        "q": "Ist das die Durchschnitts- oder die Momentangeschwindigkeit?",
        "a": "Der Durchschnitt. Er beantwortet, wie schnell du insgesamt unterwegs warst, einschließlich dessen, was der Verkehr unterwegs gemacht hat."
      },
      {
        "q": "Soll ich Halte in die Zeit einrechnen?",
        "a": "Das entscheidest du, und es ändert die Bedeutung. Mit Halten bekommst du den Durchschnitt der ganzen Fahrt, ohne sie den Durchschnitt in Bewegung."
      },
      {
        "q": "Kann ich Meilen verwenden?",
        "a": "Nicht unmittelbar — die Rechnung läuft in Kilometern. Rechne vorher mit dem Einheitenumrechner um, wenn deine Zahlen in Meilen vorliegen."
      },
      {
        "q": "Warum wird die Geschwindigkeit null abgewiesen, wenn die Zeit gesucht ist?",
        "a": "Eine Division dadurch hat keinen Wert: im Stand wird nie ein Weg zurückgelegt, also beantwortet keine Zeit die Frage."
      }
    ]
  },
  "es": {
    "longDescription": "Halla velocidad, distancia o tiempo a partir de las otras dos cantidades en km, horas y km/h. La velocidad es distancia entre el tiempo elegido: si incluye paradas, la media también las incluye. No modela el movimiento segundo a segundo ni cambios de velocidad. La fila de horas y minutos redondea al minuto más cercano y el resultado principal conserva más detalle.",
    "howItWorks": "Velocidad = distancia ÷ tiempo, distancia = velocidad × tiempo, tiempo = distancia ÷ velocidad. Cada modo muestra solo sus dos entradas conocidas. Las cantidades son no negativas; el tiempo o la velocidad usados como divisor deben ser positivos. Distancia cero da velocidad o tiempo cero con divisor positivo; no se admite 0/0. La interfaz no cambia automáticamente a millas o segundos.",
    "howToUse": [
      "Elige qué valor necesitas.",
      "Introduce los dos que conoces.",
      "Consulta el resultado y el tiempo de viaje."
    ],
    "example": "420 km recorridos en 5 horas son una media de 84 km/h.",
    "faq": [
      {
        "q": "¿Es velocidad media o instantánea?",
        "a": "Media. Responde a lo rápido que fuiste en conjunto, incluyendo lo que hiciera el tráfico por el camino."
      },
      {
        "q": "¿Debo incluir las paradas en el tiempo?",
        "a": "Es tu elección, y cambia el significado. Incluirlas da la media de todo el viaje; excluirlas da la media en movimiento."
      },
      {
        "q": "¿Puedo usar millas?",
        "a": "No directamente: el cálculo trabaja en kilómetros. Convierte antes con el conversor de unidades si tus cifras están en millas."
      },
      {
        "q": "¿Por qué se rechaza una velocidad de cero al hallar el tiempo?",
        "a": "Dividir entre ella no tiene valor: parado no se recorre ninguna distancia, así que ningún tiempo responde a la pregunta."
      }
    ]
  }
} satisfies Record<'ru' | 'en' | 'uk' | 'de' | 'es', Partial<CalculatorCopy>>;
