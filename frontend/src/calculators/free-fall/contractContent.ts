// Individually reviewed against all five actual188 native bodies; human editorial review pending.
export const contract = {
  "ru": {
    "longDescription": "Рассчитайте движение тела, отпущенного из покоя, при постоянном положительном ускорении без сопротивления среды. По высоте получаются время и скорость у нижней точки. По времени — пройденная вниз высота и скорость после этого интервала; нижняя точка становится местом удара только если там задана поверхность. Масса в этой модели сокращается.",
    "howToUse": [
      "Выберите, что известно: высота или время падения.",
      "Помните про воздух: для лёгких и парусящих тел расчёт завышает скорость.",
      "Для другого места задайте подходящее g. 9,80665 м/с² — условное стандартное значение, а не измеренное ускорение в каждой точке Земли."
    ],
    "howItWorks": "Из покоя: h=g·t²/2, t=√(2 h/g), v=g·t=√(2 gh). Кинетическая энергия на килограмм равна v²/2=gh. Высота и время описывают положительный интервал падения; начальная скорость не вводится.",
    "example": "Падение с двадцати метров длится 2,02 секунды, скорость у земли 19,8 м/с — это 71 км/ч.",
    "faq": [
      {
        "q": "Зависит ли скорость падения от массы?",
        "a": "Без воздуха — нет: пёрышко и камень падают одинаково, и формула массы не содержит. С воздухом разница огромна, но это уже не свободное падение."
      },
      {
        "q": "Почему высота растёт как квадрат времени?",
        "a": "Потому что скорость нарастает равномерно, а пройденный путь — это площадь под графиком скорости. За две секунды тело пролетает вчетверо больше, чем за одну."
      },
      {
        "q": "Можно ли так считать прыжок с парашютом?",
        "a": "Нет. Модель не включает сопротивление, раскрытие парашюта или изменение площади. Когда сопротивление существенно, результат зависит от плотности воздуха, формы, массы и площади; универсальных 55 м/с или времени перехода нет."
      },
      {
        "q": "Откуда берётся 9,80665?",
        "a": "Это условное стандартное значение, принятое для расчётов. Реальное ускорение меняется от 9,78 на экваторе до 9,83 на полюсе и слегка убывает с высотой."
      }
    ],
    "disclaimer": "Отпускание из покоя, постоянное g, отсутствие сопротивления воздуха. Начальная скорость, форма тела и зависимость g от высоты не моделируются; расчёт не описывает прыжок человека или работу парашюта."
  },
  "en": {
    "longDescription": "Calculate motion released from rest with constant positive gravitational acceleration and no drag. Height mode gives elapsed time and speed at the lower point. Time mode gives downward distance and speed after that interval; it is an impact speed only if a surface is placed there. Mass cancels in this model.",
    "howToUse": [
      "Choose what you know: the height or the fall time.",
      "Remember the air: for light or fluttering objects this overstates the speed.",
      "For another location enter the appropriate g. The 9.80665 m/s² default is a conventional standard, not measured gravity at every point on Earth."
    ],
    "howItWorks": "From rest: h=g·t²/2, t=√(2 h/g), v=g·t=√(2 gh). Kinetic energy per kilogram is v²/2=gh. Height and time describe a positive fall interval; initial velocity is not entered.",
    "example": "A fall from twenty metres takes 2.02 seconds and lands at 19.8 m/s — that is 71 km/h.",
    "faq": [
      {
        "q": "Does falling speed depend on mass?",
        "a": "Without air, no: a feather and a stone fall alike, and mass does not appear in the formula. With air the difference is enormous, but that is no longer free fall."
      },
      {
        "q": "Why does height grow as the square of time?",
        "a": "Because the speed builds up evenly and the distance covered is the area under the speed graph. In two seconds a body falls four times as far as in one."
      },
      {
        "q": "Can this model a parachute jump?",
        "a": "No. The model includes no drag, parachute deployment or changing area. Once drag matters, motion depends on air density, shape, mass and area; there is no universal 55 m/s limit or transition time."
      },
      {
        "q": "Where does 9.80665 come from?",
        "a": "It is the conventional standard value used for calculations. Real gravity ranges from 9.78 at the equator to 9.83 at the poles and drops slightly with altitude."
      }
    ],
    "disclaimer": "Release from rest, constant g and no air resistance. Initial velocity, object shape and changes of g with altitude are not modelled; this does not describe a person’s jump or parachute operation."
  },
  "uk": {
    "longDescription": "Розрахуйте рух тіла, відпущеного зі спокою, за сталого додатного прискорення без опору середовища. За висотою отримуємо час і швидкість у нижній точці. За часом — пройдений униз шлях і швидкість після інтервалу; це швидкість удару лише якщо там розташована поверхня. Маса в цій моделі скорочується.",
    "howToUse": [
      "Виберіть, що відомо: висота чи час падіння.",
      "Введіть значення.",
      "Для іншого місця задайте відповідне g. 9,80665 м/с² — умовне стандартне значення, не виміряне прискорення в кожній точці Землі."
    ],
    "howItWorks": "Зі спокою: h=g·t²/2, t=√(2 h/g), v=g·t=√(2 gh). Кінетична енергія на кілограм дорівнює v²/2=gh. Висота й час описують додатний інтервал падіння; початкова швидкість не задається.",
    "example": "Падіння з двадцяти метрів триває 2,02 секунди, а швидкість біля землі дорівнює 19,8 м/с — це 71 км/год.",
    "faq": [
      {
        "q": "Чи залежить час падіння від маси?",
        "a": "У вакуумі — ні: пір’їна й молоток падають однаково. У повітрі різниця з’являється через опір, і для легких тіл вона велика. Модель описує саме випадок без опору."
      },
      {
        "q": "Чому час росте як корінь із висоти?",
        "a": "Бо висота залежить від квадрата часу. Щоб падати вдвічі довше, треба стрибати з вчетверо більшої висоти."
      },
      {
        "q": "Коли опір повітря стає важливим?",
        "a": "Модель не враховує опору, розкриття парашута або зміни площі. Коли опір суттєвий, рух залежить від густини повітря, форми, маси й площі; універсальної межі 55 м/с або часу переходу немає."
      },
      {
        "q": "Чи враховано початкову швидкість?",
        "a": "Ні, тіло вважається відпущеним із нуля. Для кидка згори чи знизу потрібен розрахунок рівноприскореного руху з початковою швидкістю."
      }
    ],
    "disclaimer": "Відпускання зі спокою, стале g та відсутність опору повітря. Початкова швидкість, форма тіла й зміна g з висотою не моделюються; це не розрахунок стрибка людини чи роботи парашута."
  },
  "de": {
    "longDescription": "Berechne die Bewegung aus der Ruhe mit konstanter positiver Fallbeschleunigung ohne Widerstand. Der Höhenmodus liefert Zeit und Geschwindigkeit am unteren Punkt. Der Zeitmodus liefert Fallstrecke und Geschwindigkeit nach dem Intervall; eine Aufprallgeschwindigkeit ist es nur, wenn dort eine Oberfläche liegt. Die Masse kürzt sich in diesem Modell heraus.",
    "howToUse": [
      "Wähle, was du kennst: die Höhe oder die Fallzeit.",
      "Denk an die Luft: bei leichten oder flatternden Gegenständen setzt das die Geschwindigkeit zu hoch an.",
      "Gib für einen anderen Ort das passende g ein. Die Vorgabe 9,80665 m/s² ist ein vereinbarter Standardwert und nicht die gemessene Beschleunigung an jedem Punkt der Erde."
    ],
    "howItWorks": "Aus der Ruhe: h=g·t²/2, t=√(2 h/g), v=g·t=√(2 gh). Die kinetische Energie pro Kilogramm ist v²/2=gh. Höhe und Zeit beschreiben ein positives Fallintervall; eine Anfangsgeschwindigkeit wird nicht eingegeben.",
    "example": "Ein Fall aus zwanzig Metern dauert 2,02 Sekunden und endet bei 19,8 m/s — das sind 71 km/h.",
    "faq": [
      {
        "q": "Hängt die Fallgeschwindigkeit von der Masse ab?",
        "a": "Ohne Luft nicht: eine Feder und ein Stein fallen gleich, und die Masse taucht in der Formel nicht auf. Mit Luft ist der Unterschied riesig, aber das ist dann kein freier Fall mehr."
      },
      {
        "q": "Warum wächst die Höhe mit dem Quadrat der Zeit?",
        "a": "Weil die Geschwindigkeit gleichmäßig aufwächst und der zurückgelegte Weg die Fläche unter dem Geschwindigkeitsverlauf ist. In zwei Sekunden fällt ein Körper viermal so weit wie in einer."
      },
      {
        "q": "Lässt sich damit ein Fallschirmsprung abbilden?",
        "a": "Nein. Das Modell enthält keinen Luftwiderstand, keine Fallschirmöffnung und keine Änderung der Fläche. Sobald Widerstand wichtig wird, zählen Luftdichte, Form, Masse und Fläche; eine allgemeine Grenze von 55 m/s oder Übergangszeit gibt es nicht."
      },
      {
        "q": "Woher kommen die 9,80665?",
        "a": "Es ist der vereinbarte Normwert für Rechnungen. Die wirkliche Fallbeschleunigung reicht von 9,78 am Äquator bis 9,83 an den Polen und nimmt mit der Höhe leicht ab."
      }
    ],
    "disclaimer": "Loslassen aus der Ruhe, konstantes g und kein Luftwiderstand. Anfangsgeschwindigkeit, Körperform und höhenabhängiges g werden nicht modelliert; der Rechner beschreibt keinen Sprung eines Menschen und keine Fallschirmfunktion."
  },
  "es": {
    "longDescription": "Calcula el movimiento desde el reposo con aceleración gravitatoria positiva constante y sin resistencia. El modo altura da el tiempo y la velocidad en el punto inferior. El modo tiempo da la distancia descendida y la velocidad tras ese intervalo; solo es velocidad de impacto si hay una superficie allí. La masa se cancela en este modelo.",
    "howToUse": [
      "Elige qué conoces: la altura o el tiempo de caída.",
      "Ten presente el aire: con objetos ligeros o que revolotean, esto sobreestima la velocidad.",
      "Para otra ubicación introduce el g adecuado. El valor 9,80665 m/s² es convencional, no la gravedad medida en cada punto de la Tierra."
    ],
    "howItWorks": "Desde el reposo: h=g·t²/2, t=√(2 h/g), v=g·t=√(2 gh). La energía cinética por kilogramo es v²/2=gh. Altura y tiempo describen un intervalo de caída positivo; no se introduce velocidad inicial.",
    "example": "Una caída desde veinte metros dura 2,02 segundos y llega al suelo a 19,8 m/s, es decir, a 71 km/h.",
    "faq": [
      {
        "q": "¿La velocidad de caída depende de la masa?",
        "a": "Sin aire, no: una pluma y una piedra caen igual, y la masa no aparece en la fórmula. Con aire la diferencia es enorme, pero eso ya no es caída libre."
      },
      {
        "q": "¿Por qué la altura crece con el cuadrado del tiempo?",
        "a": "Porque la velocidad aumenta de forma uniforme y la distancia recorrida es el área bajo la gráfica de la velocidad. En dos segundos un cuerpo cae cuatro veces más que en uno."
      },
      {
        "q": "¿Sirve para un salto en paracaídas?",
        "a": "No. El modelo no incluye resistencia, apertura del paracaídas ni cambios de área. Cuando la resistencia importa, intervienen densidad del aire, forma, masa y área; no existe un límite universal de 55 m/s ni un tiempo de transición fijo."
      },
      {
        "q": "¿De dónde sale el 9,80665?",
        "a": "Es el valor normal convencional que se usa para los cálculos. La gravedad real va de 9,78 en el ecuador a 9,83 en los polos y disminuye ligeramente con la altitud."
      }
    ],
    "disclaimer": "Salida desde el reposo, g constante y sin resistencia del aire. No se modelan velocidad inicial, forma del objeto ni variación de g con la altura; no describe el salto de una persona ni el funcionamiento de un paracaídas."
  }
};
