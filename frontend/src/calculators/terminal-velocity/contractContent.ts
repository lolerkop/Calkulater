// Individually reviewed against all five actual188 native bodies; human editorial review pending.
export const contract = {
  "ru": {
    "longDescription": "Найдите предел скорости при постоянном квадратичном сопротивлении ½ρACd·v² и весе mg. Площадь поперёк потока, Cd и плотность задаются явно; умолчания — иллюстративные числа, не проверенная модель человека или парашюта. Для старта из покоя выводятся время и путь до 95% предела, который достигается лишь асимптотически.",
    "howToUse": [
      "Используйте измерение или источник для конкретной геометрии, числа Рейнольдса и режима потока. Табличное число для похожей формы — допущение, а не гарантия. Умножение A·Cd на четыре при прочих равных уменьшает предел скорости вдвое.",
      "Найдите предел скорости при постоянном квадратичном сопротивлении ½ρACd·v² и весе mg. Площадь поперёк потока, Cd и плотность задаются явно; умолчания — иллюстративные числа, не проверенная модель человека или парашюта. Для старта из покоя выводятся время и путь до 95% предела, который достигается лишь асимптотически.",
      "Вертикальный старт из покоя, постоянные g=9,80665 м/с², ρ, A и Cd, квадратичный закон сопротивления. Плавучесть, изменение плотности с высотой, раскрытие парашюта и зависимость Cd от скорости исключены. Этот расчёт не определяет безопасную скорость приземления."
    ],
    "howItWorks": "Равновесие веса и сопротивления даёт v = √(2 mg/(ρ·A·Cd)); время и путь до 95 процентов берутся из решения с гиперболическим тангенсом.",
    "example": "При m=80 кг, A=0,7 м², Cd=1 и ρ=1,225 кг/м³ модель даёт 42,776 м/с, около 154 км/ч; до 95% — примерно 7,99 с и 217,18 м. Это заданная геометрия, не прогноз конкретного падения.",
    "faq": [
      {
        "q": "Почему тяжёлое тело падает быстрее лёгкого?",
        "a": "В вакууме не быстрее. В воздухе предельная скорость растёт как корень из массы при той же площади, поэтому пушинка и камень одинакового размера различаются радикально: у пушинки сопротивление уравновешивает вес почти сразу."
      },
      {
        "q": "Откуда брать коэффициент сопротивления?",
        "a": "Используйте измерение или источник для конкретной геометрии, числа Рейнольдса и режима потока. Табличное число для похожей формы — допущение, а не гарантия. Умножение A·Cd на четыре при прочих равных уменьшает предел скорости вдвое."
      },
      {
        "q": "Почему предельная скорость не достигается точно?",
        "a": "Потому что чем ближе к ней, тем меньше остаток ускорения: скорость подходит к пределу по гиперболическому тангенсу. Практический ответ дают строки про 95 процентов."
      },
      {
        "q": "Меняется ли предельная скорость с высотой?",
        "a": "Вертикальный старт из покоя, постоянные g=9,80665 м/с², ρ, A и Cd, квадратичный закон сопротивления. Плавучесть, изменение плотности с высотой, раскрытие парашюта и зависимость Cd от скорости исключены. Этот расчёт не определяет безопасную скорость приземления."
      }
    ],
    "disclaimer": "Вертикальный старт из покоя, постоянные g=9,80665 м/с², ρ, A и Cd, квадратичный закон сопротивления. Плавучесть, изменение плотности с высотой, раскрытие парашюта и зависимость Cd от скорости исключены. Этот расчёт не определяет безопасную скорость приземления."
  },
  "en": {
    "longDescription": "Find the speed limit under constant quadratic drag ½ρACd·v² and weight mg. Frontal area, Cd and density are explicit inputs; defaults are illustrative numbers, not a validated person or parachute model. For release from rest, time and distance to 95% are reported; the limit itself is approached asymptotically.",
    "howToUse": [
      "Use measurements or a source for the actual geometry, Reynolds number and flow regime. A table value for a similar shape is an assumption, not a guarantee. Multiplying A·Cd by four with other inputs fixed halves the speed limit.",
      "Find the speed limit under constant quadratic drag ½ρACd·v² and weight mg. Frontal area, Cd and density are explicit inputs; defaults are illustrative numbers, not a validated person or parachute model. For release from rest, time and distance to 95% are reported; the limit itself is approached asymptotically.",
      "Vertical release from rest, constant g=9.80665 m/s², ρ, A and Cd, and quadratic drag. Buoyancy, density changes with height, parachute deployment and speed-dependent Cd are excluded. This calculation does not determine a safe landing speed."
    ],
    "howItWorks": "Balancing weight against drag gives v = √(2 mg/(ρ·A·Cd)); the time and distance to 95 per cent come from the hyperbolic-tangent solution.",
    "example": "With m=80 kg, A=0.7 m², Cd=1 and ρ=1.225 kg/m³, the model gives 42.776 m/s, about 154 km/h; 95% takes about 7.99 s and 217.18 m. These are stated geometry inputs, not a prediction of an actual fall.",
    "faq": [
      {
        "q": "Why does a heavy body fall faster than a light one?",
        "a": "In a vacuum it does not. In air the terminal velocity grows as the square root of mass for the same area, so a feather and a stone of equal size differ radically: for the feather drag balances weight almost at once."
      },
      {
        "q": "Where do I get the drag coefficient?",
        "a": "Use measurements or a source for the actual geometry, Reynolds number and flow regime. A table value for a similar shape is an assumption, not a guarantee. Multiplying A·Cd by four with other inputs fixed halves the speed limit."
      },
      {
        "q": "Why is terminal velocity never reached exactly?",
        "a": "Because the closer you get, the smaller the remaining acceleration: the speed approaches the limit as a hyperbolic tangent. The practical answer is in the 95 per cent rows."
      },
      {
        "q": "Does terminal velocity change with altitude?",
        "a": "Vertical release from rest, constant g=9.80665 m/s², ρ, A and Cd, and quadratic drag. Buoyancy, density changes with height, parachute deployment and speed-dependent Cd are excluded. This calculation does not determine a safe landing speed."
      }
    ],
    "disclaimer": "Vertical release from rest, constant g=9.80665 m/s², ρ, A and Cd, and quadratic drag. Buoyancy, density changes with height, parachute deployment and speed-dependent Cd are excluded. This calculation does not determine a safe landing speed."
  },
  "uk": {
    "longDescription": "Знайдіть межу швидкості за сталого квадратичного опору ½ρACd·v² і ваги mg. Площа впоперек потоку, Cd та густина задаються явно; умолчання — ілюстративні числа, не перевірена модель людини чи парашута. Для старту зі спокою показано час і шлях до 95% межі, що досягається лише асимптотично.",
    "howToUse": [
      "Використовуйте вимірювання або джерело для конкретної геометрії, числа Рейнольдса й режиму течії. Табличне число для схожої форми є припущенням, не гарантією. Збільшення A·Cd вчетверо за інших сталих умов удвічі зменшує межу швидкості.",
      "Знайдіть межу швидкості за сталого квадратичного опору ½ρACd·v² і ваги mg. Площа впоперек потоку, Cd та густина задаються явно; умолчання — ілюстративні числа, не перевірена модель людини чи парашута. Для старту зі спокою показано час і шлях до 95% межі, що досягається лише асимптотично.",
      "Вертикальний старт зі спокою, сталі g=9,80665 м/с², ρ, A й Cd та квадратичний опір. Плавучість, зміну густини з висотою, розкриття парашута й залежність Cd від швидкості виключено. Цей розрахунок не визначає безпечної швидкості приземлення."
    ],
    "howItWorks": "Рівновага ваги й опору дає v = √(2 mg/(ρ·A·Cd)). Час і шлях до 95 відсотків граничної швидкості беруться з розв’язку рівняння руху через гіперболічний тангенс — розгін наближається до межі асимптотично й точно її не досягає.",
    "example": "За m=80 кг, A=0,7 м², Cd=1 та ρ=1,225 кг/м³ модель дає 42,776 м/с, близько 154 км/год; до 95% — приблизно 7,99 с і 217,18 м. Це задана геометрія, не прогноз конкретного падіння.",
    "faq": [
      {
        "q": "Чому швидкість перестає зростати?",
        "a": "Бо опір повітря росте як квадрат швидкості, а вага стала. У точці, де вони зрівнялися, прискорення дорівнює нулю, і швидкість фіксується."
      },
      {
        "q": "Чому поза тіла так впливає?",
        "a": "Використовуйте вимірювання або джерело для конкретної геометрії, числа Рейнольдса й режиму течії. Табличне число для схожої форми є припущенням, не гарантією. Збільшення A·Cd вчетверо за інших сталих умов удвічі зменшує межу швидкості."
      },
      {
        "q": "Як швидко досягається межа?",
        "a": "Для заданих у прикладі чисел до 95% потрібно приблизно 7,99 с і 217,18 м. Загалом t 95=(v∞/g)atanh(0,95), s 95=(v∞²/g)ln(cosh(atanh(0,95))). Значення залежать від усіх введених умов, не є універсальним часом для людини."
      },
      {
        "q": "Чому парашут так сповільнює падіння?",
        "a": "Вертикальний старт зі спокою, сталі g=9,80665 м/с², ρ, A й Cd та квадратичний опір. Плавучість, зміну густини з висотою, розкриття парашута й залежність Cd від швидкості виключено. Цей розрахунок не визначає безпечної швидкості приземлення."
      }
    ],
    "disclaimer": "Вертикальний старт зі спокою, сталі g=9,80665 м/с², ρ, A й Cd та квадратичний опір. Плавучість, зміну густини з висотою, розкриття парашута й залежність Cd від швидкості виключено. Цей розрахунок не визначає безпечної швидкості приземлення."
  },
  "de": {
    "longDescription": "Bestimme die Grenzgeschwindigkeit bei konstantem quadratischem Widerstand ½ρACd·v² und Gewicht mg. Stirnfläche, Cd und Dichte werden eingegeben; Vorgaben sind Beispielzahlen, kein validiertes Personen- oder Fallschirmmodell. Beim Loslassen aus Ruhe erscheinen Zeit und Weg bis 95%; der Grenzwert wird nur asymptotisch erreicht.",
    "howToUse": [
      "Nutze Messungen oder eine Quelle für die konkrete Geometrie, Reynolds-Zahl und Strömung. Ein Tabellenwert ähnlicher Form ist eine Annahme, keine Garantie. Vervierfachen von A·Cd bei sonst gleichen Eingaben halbiert die Grenzgeschwindigkeit.",
      "Bestimme die Grenzgeschwindigkeit bei konstantem quadratischem Widerstand ½ρACd·v² und Gewicht mg. Stirnfläche, Cd und Dichte werden eingegeben; Vorgaben sind Beispielzahlen, kein validiertes Personen- oder Fallschirmmodell. Beim Loslassen aus Ruhe erscheinen Zeit und Weg bis 95%; der Grenzwert wird nur asymptotisch erreicht.",
      "Senkrechter Start aus Ruhe, konstante g=9,80665 m/s², ρ, A und Cd sowie quadratischer Widerstand. Auftrieb, Dichteänderung mit Höhe, Fallschirmöffnung und geschwindigkeitsabhängiger Cd sind ausgeschlossen. Die Rechnung bestimmt keine sichere Landegeschwindigkeit."
    ],
    "howItWorks": "Das Gleichgewicht von Gewicht und Widerstand ergibt v = √(2 mg/(ρ·A·Cd)); Zeit und Weg bis 95 Prozent folgen aus der Lösung mit dem Tangens hyperbolicus.",
    "example": "Mit m=80 kg, A=0,7 m², Cd=1 und ρ=1,225 kg/m³ liefert das Modell 42,776 m/s, etwa 154 km/h; 95% nach etwa 7,99 s und 217,18 m. Das sind vorgegebene Geometriedaten, keine Prognose eines konkreten Falls.",
    "faq": [
      {
        "q": "Warum fällt ein schwerer Körper schneller als ein leichter?",
        "a": "Im Vakuum tut er das nicht. In Luft wächst die Endgeschwindigkeit bei gleicher Fläche mit der Wurzel der Masse, eine Feder und ein Stein gleicher Größe unterscheiden sich also grundlegend: bei der Feder hält der Widerstand dem Gewicht beinahe sofort die Waage."
      },
      {
        "q": "Woher bekomme ich den Widerstandsbeiwert?",
        "a": "Nutze Messungen oder eine Quelle für die konkrete Geometrie, Reynolds-Zahl und Strömung. Ein Tabellenwert ähnlicher Form ist eine Annahme, keine Garantie. Vervierfachen von A·Cd bei sonst gleichen Eingaben halbiert die Grenzgeschwindigkeit."
      },
      {
        "q": "Warum wird die Endgeschwindigkeit nie genau erreicht?",
        "a": "Weil die verbleibende Beschleunigung umso kleiner wird, je näher man kommt: die Geschwindigkeit nähert sich der Grenze wie ein Tangens hyperbolicus. Die praktische Antwort steht in den Zeilen zu 95 Prozent."
      },
      {
        "q": "Ändert sich die Endgeschwindigkeit mit der Höhe?",
        "a": "Senkrechter Start aus Ruhe, konstante g=9,80665 m/s², ρ, A und Cd sowie quadratischer Widerstand. Auftrieb, Dichteänderung mit Höhe, Fallschirmöffnung und geschwindigkeitsabhängiger Cd sind ausgeschlossen. Die Rechnung bestimmt keine sichere Landegeschwindigkeit."
      }
    ],
    "disclaimer": "Senkrechter Start aus Ruhe, konstante g=9,80665 m/s², ρ, A und Cd sowie quadratischer Widerstand. Auftrieb, Dichteänderung mit Höhe, Fallschirmöffnung und geschwindigkeitsabhängiger Cd sind ausgeschlossen. Die Rechnung bestimmt keine sichere Landegeschwindigkeit."
  },
  "es": {
    "longDescription": "Halla la velocidad límite con resistencia cuadrática constante ½ρACd·v² y peso mg. Área frontal, Cd y densidad se introducen explícitamente; los valores iniciales son ilustrativos, no un modelo validado de persona o paracaídas. Desde reposo se muestran tiempo y distancia hasta el 95%; el límite se aproxima asintóticamente.",
    "howToUse": [
      "Usa mediciones o una fuente para geometría, número de Reynolds y régimen reales. Un valor tabulado para una forma parecida es una suposición, no una garantía. Multiplicar A·Cd por cuatro con lo demás constante reduce el límite a la mitad.",
      "Halla la velocidad límite con resistencia cuadrática constante ½ρACd·v² y peso mg. Área frontal, Cd y densidad se introducen explícitamente; los valores iniciales son ilustrativos, no un modelo validado de persona o paracaídas. Desde reposo se muestran tiempo y distancia hasta el 95%; el límite se aproxima asintóticamente.",
      "Salida vertical desde reposo, g=9,80665 m/s², ρ, A y Cd constantes y resistencia cuadrática. Se excluyen flotación, cambios de densidad con altura, apertura de paracaídas y Cd variable con la velocidad. El cálculo no determina una velocidad segura de aterrizaje."
    ],
    "howItWorks": "Igualar el peso con la resistencia da v = √(2 mg/(ρ·A·Cd)); el tiempo y la distancia hasta el 95 por ciento salen de la solución con tangente hiperbólica.",
    "example": "Con m=80 kg, A=0,7 m², Cd=1 y ρ=1,225 kg/m³, el modelo da 42,776 m/s, unos 154 km/h; el 95% requiere unos 7,99 s y 217,18 m. Son datos geométricos declarados, no una predicción de una caída real.",
    "faq": [
      {
        "q": "¿Por qué un cuerpo pesado cae más deprisa que uno ligero?",
        "a": "En el vacío no lo hace. En el aire la velocidad límite crece con la raíz cuadrada de la masa a igualdad de área, así que una pluma y una piedra del mismo tamaño se diferencian radicalmente: en la pluma la resistencia equilibra el peso casi de inmediato."
      },
      {
        "q": "¿De dónde saco el coeficiente de resistencia?",
        "a": "Usa mediciones o una fuente para geometría, número de Reynolds y régimen reales. Un valor tabulado para una forma parecida es una suposición, no una garantía. Multiplicar A·Cd por cuatro con lo demás constante reduce el límite a la mitad."
      },
      {
        "q": "¿Por qué la velocidad límite nunca se alcanza exactamente?",
        "a": "Porque cuanto más te acercas, menor es la aceleración que queda: la velocidad se acerca al límite como una tangente hiperbólica. La respuesta práctica está en las filas del 95 por ciento."
      },
      {
        "q": "¿La velocidad límite cambia con la altitud?",
        "a": "Salida vertical desde reposo, g=9,80665 m/s², ρ, A y Cd constantes y resistencia cuadrática. Se excluyen flotación, cambios de densidad con altura, apertura de paracaídas y Cd variable con la velocidad. El cálculo no determina una velocidad segura de aterrizaje."
      }
    ],
    "disclaimer": "Salida vertical desde reposo, g=9,80665 m/s², ρ, A y Cd constantes y resistencia cuadrática. Se excluyen flotación, cambios de densidad con altura, apertura de paracaídas y Cd variable con la velocidad. El cálculo no determina una velocidad segura de aterrizaje."
  }
};
