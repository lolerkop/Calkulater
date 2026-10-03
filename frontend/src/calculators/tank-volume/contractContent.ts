import type { CalculatorCopy } from '../../lib/platform/types';
// Individually read actual immutable145 body; agent-authored amendment is not human approval.
export const buildingWave16ContractContent = {
  "ru": {
    "longDescription": "Считает и полный объём ёмкости, и сколько жидкости в ней сейчас. У вертикального бака и прямоугольной ванны налив пропорционален уровню, а у горизонтальной цистерны — нет: сечение налитой части там сегмент круга, поэтому половина высоты даёт ровно половину объёма, а четверть высоты — заметно меньше четверти. Отличие от геометрического цилиндра существенное: тот даёт объём тела, здесь же главный ответ — сколько литров внутри при этом уровне.",
    "howItWorks": "Используйте внутренние размеры в м. Вертикальный цилиндр: V = πd²·уровень/4, полная высота len. Горизонтальный цилиндр: налив — круговой сегмент вдоль len; 0 ≤ уровень ≤ d, малые уровни вычисляются без вычитания почти равных чисел. «Прямоугольная» модель имеет квадратное основание d×d и высоту len. Капсула: полная вместимость πd²len/4 + πd³/6, общая высота len + d; налив намеренно оценён линейно как Vполный·уровень/(len + d), а не по точным сферическим сегментам. 1 м³ = 1000 л; пустая и полная ёмкости допускаются.",
    "howToUse": [
      "Выберите форму: у горизонтальной цистерны уровень считается от нижней образующей.",
      "Для цилиндра введите диаметр, для прямоугольной ёмкости — сторону основания.",
      "Высота или длина: у вертикального бака это высота, у цистерны — длина корпуса.",
      "Уровень измеряйте щупом от дна; он не может быть выше самой ёмкости."
    ],
    "example": "Вертикальный бак диаметром 1,5 м и высотой 2 м при уровне 1,2 м содержит 2,12 м³ — это 2121 литр.",
    "faq": [
      {
        "q": "Почему у цистерны половина высоты даёт ровно половину объёма?",
        "a": "Потому что круг симметричен относительно горизонтальной оси: сегмент до середины равен половине круга. А вот четверть высоты даёт заметно меньше четверти объёма — сечение внизу узкое."
      },
      {
        "q": "Чем это отличается от калькулятора цилиндра?",
        "a": "Геометрический цилиндр даёт объём тела целиком. Здесь есть уровень налива и положение ёмкости, и главный ответ — сколько жидкости внутри сейчас."
      },
      {
        "q": "Как считается капсула?",
        "a": "Цилиндр плюс шар того же диаметра, а налив распределяется по общей высоте. Это приближение: точный сегмент сферического днища требует замера самой формы днища."
      },
      {
        "q": "Учитывается ли толщина стенки?",
        "a": "Нет, вводятся внутренние размеры. Внешний диаметр уменьшайте на обе стенки; внутреннюю длину или высоту определяйте с учётом каждого присутствующего торца, днища и крышки. Одна вычтенная толщина не подходит автоматически любой форме."
      }
    ],
    "disclaimer": "Расчёт использует внутренние размеры идеализированной ёмкости. Толщина стенок отдельно не учитывается; для капсулы налив оценён линейно, а не по точным сферическим сегментам днищ."
  },
  "en": {
    "longDescription": "Works out both the full capacity and how much liquid is in the tank right now. In a vertical tank or a rectangular trough the fill is proportional to the level; in a horizontal tank it is not. There the wetted cross-section is a circular segment, so half the height gives exactly half the volume while a quarter of the height gives noticeably less than a quarter. The difference from a geometric cylinder matters: that one returns the volume of a solid, here the answer is how many litres are inside at this level.",
    "howItWorks": "Use internal dimensions in m. Vertical cylinder: V = πd²·level/4, full height len. Horizontal cylinder: fill is a circular segment along len; 0 ≤ level ≤ d, with small levels evaluated without nearly equal subtraction. The rectangular mode has a square d×d base and height len. Capsule capacity = πd²len/4 + πd³/6, total height len + d; fill is intentionally estimated linearly as Vfull·level/(len + d), not exact spherical segments. 1 m³ = 1000 L; empty and full tanks are valid.",
    "howToUse": [
      "Pick the shape: in a horizontal tank the level is measured from the bottom of the shell.",
      "For a cylinder enter the diameter, for a rectangular tank the base side.",
      "Height or length: a vertical tank uses its height, a horizontal one its shell length.",
      "Measure the level with a dipstick from the bottom; it cannot exceed the tank itself."
    ],
    "example": "A vertical tank 1.5 m across and 2 m tall filled to 1.2 m holds 2.12 m³ — that is 2121 litres.",
    "faq": [
      {
        "q": "Why does half the height of a horizontal tank give exactly half the volume?",
        "a": "Because a circle is symmetric about its horizontal axis: the segment up to the middle is half the circle. A quarter of the height, though, gives far less than a quarter — the section down there is narrow."
      },
      {
        "q": "How is this different from a cylinder calculator?",
        "a": "A geometric cylinder returns the volume of the whole solid. Here there is a fill level and an orientation, and the answer is how much liquid is inside now."
      },
      {
        "q": "How is a capsule handled?",
        "a": "As a cylinder plus a sphere of the same diameter, with the fill spread over the total height. That is an approximation: the exact segment of a domed end needs the shape of that dome measured."
      },
      {
        "q": "Is wall thickness accounted for?",
        "a": "No: enter internal dimensions. Reduce outside diameter for both walls, and determine clear internal length or height from every end, bottom and lid that is present. Subtracting one wall thickness is not automatically correct for every shape."
      }
    ],
    "disclaimer": "Results are reference estimates. Verify the inputs before making important decisions."
  },
  "uk": {
    "longDescription": "Об’єм ємності залежить не лише від розмірів, а й від того, як вона стоїть. У вертикального бака рівень прямо пропорційний об’єму, у горизонтальної цистерни — ні: половина висоти там дає рівно половину об’єму, а чверть висоти — помітно менше чверті.",
    "howItWorks": "Використовуйте внутрішні розміри в м. Вертикальний циліндр: V = πd²·рівень/4, повна висота len. Горизонтальний циліндр: налив — круговий сегмент уздовж len; 0 ≤ рівень ≤ d, малі рівні рахуються без віднімання майже рівних чисел. Прямокутний режим має квадратну основу d×d та висоту len. Капсула: місткість πd²len/4 + πd³/6, загальна висота len + d; налив навмисно оцінено лінійно як Vповний·рівень/(len + d), а не за точними сферичними сегментами. 1 м³ = 1000 л; порожня й повна ємності допустимі.",
    "howToUse": [
      "Виберіть форму й орієнтацію ємності.",
      "Введіть розміри.",
      "Введіть рівень заповнення."
    ],
    "example": "Вертикальний бак діаметром 1,5 м і висотою 2 м за рівня 1,2 м містить 2,12 м³ — це 2121 літр.",
    "faq": [
      {
        "q": "Чому в горизонтальній цистерні рівень нелінійний?",
        "a": "Бо переріз — круг: біля дна й біля верху шар вузький, а посередині широкий. Чверть висоти дає лише близько 20 % об’єму, а не 25 %."
      },
      {
        "q": "Як перевести кубометри в літри?",
        "a": "Помножити на тисячу: у кубометрі рівно 1000 літрів. Бак на 2,12 м³ вміщує 2120 літрів."
      },
      {
        "q": "Чи враховано товщину стінок?",
        "a": "Ні, рахується внутрішній об’єм за введеними розмірами. Якщо ви ввели зовнішній діаметр, результат буде завищеним — для тонкостінних баків несуттєво, для товстостінних помітно."
      },
      {
        "q": "Як виміряти рівень у закритій ємності?",
        "a": "Мірною рейкою через горловину або зовнішнім рівнеміром. Для горизонтальних цистерн зазвичай користуються таблицею калібрування — саме через нелінійність."
      }
    ],
    "disclaimer": "Результати є орієнтовними оцінками. Перед важливими рішеннями перевіряйте дані."
  },
  "de": {
    "longDescription": "Ermittelt sowohl das Fassungsvermögen als auch, wie viel Flüssigkeit gerade im Behälter ist. In einem stehenden Behälter oder einer rechteckigen Wanne ist die Füllung dem Stand proportional; in einem liegenden Behälter nicht. Dort ist der benetzte Querschnitt ein Kreisabschnitt, die halbe Höhe ergibt also genau das halbe Volumen, während ein Viertel der Höhe merklich weniger als ein Viertel ergibt. Der Unterschied zu einem geometrischen Zylinder zählt: jener liefert das Volumen eines Körpers, hier lautet die Antwort, wie viele Liter bei diesem Stand darin sind.",
    "howItWorks": "Innenmaße in m verwenden. Vertikaler Zylinder: V = πd²·Füllstand/4, Gesamthöhe len. Horizontaler Zylinder: Füllung als Kreissegment entlang len; 0 ≤ Füllstand ≤ d, kleine Füllstände ohne Auslöschung durch fast gleiche Zahlen. Der Rechteckmodus hat eine quadratische Grundfläche d×d und Höhe len. Kapselkapazität = πd²len/4 + πd³/6, Gesamthöhe len + d; die Füllung wird bewusst linear als Vvoll·Füllstand/(len + d) angenähert, nicht mit exakten Kugelsegmenten. 1 m³ = 1000 l; leer und voll sind gültig.",
    "howToUse": [
      "Wähle die Form: bei einem liegenden Behälter wird der Stand ab dem Boden des Mantels gemessen.",
      "Bei einem Zylinder trägst du den Durchmesser ein, bei einem rechteckigen Behälter die Grundseite.",
      "Höhe oder Länge: ein stehender Behälter nutzt seine Höhe, ein liegender seine Mantellänge.",
      "Miss den Stand mit einem Peilstab vom Boden aus; er kann den Behälter nicht übersteigen."
    ],
    "example": "Ein stehender Behälter mit 1,5 m Durchmesser und 2 m Höhe fasst bei 1,2 m Stand 2,12 m³ — das sind 2121 Liter.",
    "faq": [
      {
        "q": "Warum ergibt die halbe Höhe eines liegenden Behälters genau das halbe Volumen?",
        "a": "Weil ein Kreis zu seiner waagerechten Achse symmetrisch ist: der Abschnitt bis zur Mitte ist der halbe Kreis. Ein Viertel der Höhe ergibt dagegen weit weniger als ein Viertel — der Querschnitt ist dort unten schmal."
      },
      {
        "q": "Wie unterscheidet sich das von einem Zylinderrechner?",
        "a": "Ein geometrischer Zylinder liefert das Volumen des ganzen Körpers. Hier gibt es einen Füllstand und eine Lage, und die Antwort lautet, wie viel Flüssigkeit jetzt darin ist."
      },
      {
        "q": "Wie wird eine Kapsel behandelt?",
        "a": "Als Zylinder plus eine Kugel desselben Durchmessers, wobei sich die Füllung über die Gesamthöhe verteilt. Das ist eine Näherung: der genaue Abschnitt eines gewölbten Bodens braucht die gemessene Form dieser Wölbung."
      },
      {
        "q": "Ist die Wandstärke berücksichtigt?",
        "a": "Nein, Innenmaße eingeben. Vom Außendurchmesser beide Wände abziehen; lichte Länge oder Höhe mit allen vorhandenen Enden, Böden und Deckeln bestimmen. Ein einzelner Wanddickenabzug passt nicht automatisch zu jeder Form."
      }
    ],
    "disclaimer": "Die Ergebnisse sind Orientierungswerte. Prüfe die Eingaben vor wichtigen Entscheidungen."
  },
  "es": {
    "longDescription": "Calcula tanto la capacidad total como cuánto líquido hay ahora mismo en el depósito. En un depósito vertical o en una cuba rectangular el llenado es proporcional al nivel; en uno horizontal no. Allí la sección mojada es un segmento circular, así que la mitad de la altura da exactamente la mitad del volumen mientras que un cuarto de la altura da bastante menos de un cuarto. La diferencia con un cilindro geométrico importa: aquel devuelve el volumen de un sólido, y aquí la respuesta es cuántos litros hay dentro a ese nivel.",
    "howItWorks": "Usa dimensiones interiores en m. Cilindro vertical: V = πd²·nivel/4 y altura total len. Cilindro horizontal: llenado por segmento circular a lo largo de len; 0 ≤ nivel ≤ d, con niveles pequeños calculados sin restar números casi iguales. El modo rectangular tiene base cuadrada d×d y altura len. Cápsula: capacidad πd²len/4 + πd³/6, altura total len + d; el llenado se estima deliberadamente como Vtotal·nivel/(len + d), sin segmentos esféricos exactos. 1 m³ = 1000 l; admite depósito vacío y lleno.",
    "howToUse": [
      "Elige la forma: en un depósito horizontal el nivel se mide desde el fondo de la virola.",
      "Para un cilindro introduce el diámetro y para un depósito rectangular, el lado de la base.",
      "Altura o longitud: un depósito vertical usa su altura y uno horizontal, la longitud de su virola.",
      "Mide el nivel con una varilla desde el fondo; no puede superar al propio depósito."
    ],
    "example": "Un depósito vertical de 1,5 m de diámetro y 2 m de alto lleno hasta 1,2 m contiene 2,12 m³, es decir, 2121 litros.",
    "faq": [
      {
        "q": "¿Por qué la mitad de la altura de un depósito horizontal da exactamente la mitad del volumen?",
        "a": "Porque un círculo es simétrico respecto a su eje horizontal: el segmento hasta el centro es la mitad del círculo. Un cuarto de la altura, en cambio, da mucho menos de un cuarto: la sección de ahí abajo es estrecha."
      },
      {
        "q": "¿En qué se diferencia de una calculadora de cilindros?",
        "a": "Un cilindro geométrico devuelve el volumen de todo el sólido. Aquí hay un nivel de llenado y una orientación, y la respuesta es cuánto líquido hay dentro ahora."
      },
      {
        "q": "¿Cómo se trata una cápsula?",
        "a": "Como un cilindro más una esfera del mismo diámetro, con el llenado repartido sobre la altura total. Es una aproximación: el segmento exacto de un fondo abombado exige medir la forma de ese fondo."
      },
      {
        "q": "¿Se tiene en cuenta el espesor de la pared?",
        "a": "No: introduce dimensiones interiores. Descuenta ambas paredes del diámetro exterior y determina longitud o altura libre según los extremos, fondo y tapa presentes. Restar un solo espesor no vale automáticamente para cualquier forma."
      }
    ],
    "disclaimer": "Los resultados son estimaciones orientativas. Verifica los datos de partida antes de tomar decisiones importantes."
  }
} satisfies Record<'ru'|'en'|'uk'|'de'|'es',Partial<CalculatorCopy>>;
