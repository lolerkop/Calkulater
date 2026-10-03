import type { CalculatorCopy } from '../../lib/platform/types';
// Individually read actual immutable145 body; agent-authored amendment is not human approval.
export const buildingWave16ContractContent = {
  "ru": {
    "longDescription": "Считает объём прямоугольной плиты и геометрическое количество арматуры для двух принятых сеток. В отличие от общего объёма бетона здесь видны шаг, длина стали и масса при фиксированной плотности 7850 кг/м³. Число рядов следует правилу floor(сторона/шаг) + 1, которое не всегда ставит ряд у дальнего края. Запас добавляется только к бетону; схема армирования, защитный слой и нахлёсты требуют отдельного проекта.",
    "howItWorks": "Прямоугольная плита: бетон V = L·W·t, запас w = 0–50 % применяется только к бетону. Приняты две сетки: nL = floor(W/s) + 1, nW = floor(L/s) + 1; длина арматуры R = 2(nL·L + nW·W). Шаги считаются по кратчайшей десятичной записи введённых чисел. Масса = R·π·d²·7850/4 000 000 при d в мм; 7850 кг/м³ — фиксированная плотность модели. Защитный слой, крайний дополнительный ряд, нахлёсты, анкеровка и расчёт несущей способности не учтены.",
    "howToUse": [
      "Введите длину, ширину и толщину плиты.",
      "Введите шаг сетки из проекта в метрах: 200 мм вводятся как 0,2 м.",
      "Введите диаметр арматуры в миллиметрах.",
      "Задайте запас только бетона; добавочную арматуру считайте отдельно."
    ],
    "example": "Плита 10 на 8 толщиной 0,3 м с сеткой 200 мм из прутка 12 мм требует 25,2 м³ бетона и 1 452,46 кг стали.",
    "faq": [
      {
        "q": "Почему плюс один пруток?",
        "a": "Модель ставит первый ряд в позиции 0, затем s, 2s и до floor(сторона/s)·s. Поэтому десять шагов дают одиннадцать рядов. Если сторона не кратна шагу, последний ряд не достигает противоположной границы; дополнительный ряд и защитный слой надо определять по чертежу отдельно."
      },
      {
        "q": "Всегда ли верны два слоя?",
        "a": "Нет. Два слоя — фиксированное допущение этого подсчёта, каждый с двумя направлениями. Требуемое армирование зависит от расчёта плиты, нагрузок и условий основания. Полученное количество не подтверждает выбранную схему."
      },
      {
        "q": "Откуда 0,888 кг на метр?",
        "a": "Из геометрии: круг 12 мм — это 113,1 мм², а сталь при 7850 кг/м³ даёт 0,888 кг на каждый метр. Это арифметика, а не таблица."
      },
      {
        "q": "Учтены ли нахлёсты прутков?",
        "a": "Нет. Сетка использует длины сторон без нахлёстов, анкеровки и подрезки. Поле «запас» меняет только бетон, не длину или массу стали. Добавочные длины определите по проекту и посчитайте отдельно."
      },
      {
        "q": "Зачем отдельный калькулятор, если объём считает общий бетонный?",
        "a": "Потому что плите нужна не только заливка. Здесь сразу считается сетка в двух слоях с плюс одним прутком у края — того, чего расчёт объёма фигуры не даёт."
      }
    ],
    "disclaimer": "Это геометрический подсчёт в описанной модели. Он не подтверждает несущую способность, безопасность или соответствие требованиям проекта; конструктивные параметры проверяют отдельно."
  },
  "en": {
    "longDescription": "Counts rectangular slab volume and geometric reinforcement for two assumed meshes. Alongside concrete volume it shows spacing, steel length and mass at a fixed density of 7850 kg/m³. Rows follow floor(side/spacing) + 1, which does not always place a row at the far edge. Reserve affects concrete only; reinforcement arrangement, cover and laps require a separate design.",
    "howItWorks": "Rectangular slab: concrete V = L·W·t; reserve w from 0 to 50% applies only to concrete. Two meshes are assumed: nL = floor(W/s) + 1, nW = floor(L/s) + 1; rebar length R = 2(nL·L + nW·W). Spacing counts use the shortest decimal representation of entered numbers. Mass = R·π·d²·7850/4,000,000 for d in mm; 7850 kg/m³ is a fixed model density. Cover, an extra far-edge row, laps, anchorage and structural capacity are not included.",
    "howToUse": [
      "Enter the length, width and thickness of the slab.",
      "Enter design mesh spacing in metres: 200 mm is entered as 0.2 m.",
      "Enter the rebar diameter in millimetres.",
      "Set concrete reserve only; count extra reinforcement separately."
    ],
    "example": "A 10 by 8 slab, 0.3 m thick with 200 mm mesh of 12 mm bar, needs 25.2 m³ of concrete and 1,452.46 kg of steel.",
    "faq": [
      {
        "q": "Why plus one bar?",
        "a": "The model places the first row at 0, then s, 2s through floor(side/s)·s. Ten intervals therefore give eleven rows. If the side is not a multiple of spacing, the last row does not reach the opposite boundary; an extra row and cover must be determined separately from the drawing."
      },
      {
        "q": "Are two layers always right?",
        "a": "No. Two layers are a fixed counting assumption, each with two directions. Required reinforcement depends on slab analysis, loads and support conditions. The quantity does not approve that arrangement."
      },
      {
        "q": "Where does 0.888 kg per metre come from?",
        "a": "From the geometry: a 12 mm circle is 113.1 mm², and steel at 7,850 kg/m³ gives 0.888 kg for every metre of it. It is arithmetic, not a table lookup."
      },
      {
        "q": "Is the overlap of bars included?",
        "a": "No. Mesh lengths follow the sides without laps, anchorage or cutting allowances. The reserve field changes concrete only, not steel length or mass. Determine added lengths from the design and count them separately."
      },
      {
        "q": "Why a separate calculator if the general concrete one gives volume?",
        "a": "Because a slab needs more than a pour. This one also counts the mesh in two layers with the extra bar at each edge — something a volume-of-a-shape calculation does not give you."
      }
    ],
    "disclaimer": "This is a geometric quantity calculation within the described model. It does not establish load capacity, safety or project compliance; check design parameters separately."
  },
  "uk": {
    "longDescription": "Рахує об’єм прямокутної плити та геометричну кількість арматури для двох прийнятих сіток. Поруч із бетоном видно крок, довжину сталі й масу за фіксованої густини 7850 кг/м³. Ряди рахуються як floor(сторона/крок) + 1, що не завжди ставить ряд біля дальньої межі. Запас додається лише до бетону; схема армування, захисний шар і перехльости потребують окремого проєкту.",
    "howItWorks": "Прямокутна плита: бетон V = L·W·t, запас w = 0–50 % застосовується лише до бетону. Прийнято дві сітки: nL = floor(W/s) + 1, nW = floor(L/s) + 1; довжина арматури R = 2(nL·L + nW·W). Кроки рахуються за найкоротшим десятковим записом введених чисел. Маса = R·π·d²·7850/4 000 000 за d у мм; 7850 кг/м³ — фіксована густина моделі. Захисний шар, додатковий крайній ряд, перехльости, анкерування та несучу здатність не враховано.",
    "howToUse": [
      "Введіть довжину, ширину і товщину плити.",
      "Введіть проєктний крок сітки в метрах: 200 мм задаються як 0,2 м.",
      "Введіть діаметр арматури в міліметрах.",
      "Задайте запас лише бетону; додаткову арматуру рахуйте окремо."
    ],
    "example": "Плита 10 на 8 завтовшки 0,3 м із сіткою 200 мм із прутка 12 мм потребує 25,2 м³ бетону і 1 452,46 кг сталі.",
    "faq": [
      {
        "q": "Чому плюс один прут?",
        "a": "Модель ставить перший ряд у позиції 0, далі s, 2s і до floor(сторона/s)·s. Тому десять кроків дають одинадцять рядів. Якщо сторона не кратна кроку, останній ряд не досягає протилежної межі; додатковий ряд та захисний шар визначають за кресленням окремо."
      },
      {
        "q": "Чи завжди правильні два шари?",
        "a": "Ні. Два шари — фіксоване припущення підрахунку, кожен із двома напрямками. Потрібне армування залежить від розрахунку плити, навантажень та основи. Кількість не підтверджує обрану схему."
      },
      {
        "q": "Звідки 0,888 кг на метр?",
        "a": "З геометрії: коло 12 мм це 113,1 мм², а сталь при 7850 кг/м³ дає 0,888 кг на кожен метр. Це арифметика, а не таблиця."
      },
      {
        "q": "Чи враховано перехльости прутків?",
        "a": "Ні. Сітка використовує довжини сторін без перехльостів, анкерування та підрізання. Поле запасу змінює лише бетон, не довжину чи масу сталі. Додаткові довжини визначте за проєктом та порахуйте окремо."
      },
      {
        "q": "Навіщо окремий калькулятор, якщо об’єм рахує загальний бетонний?",
        "a": "Бо плиті потрібна не лише заливка. Тут одразу рахується сітка у двох шарах із плюс одним прутком біля краю — того, чого розрахунок об’єму фігури не дає."
      }
    ],
    "disclaimer": "Це геометричний підрахунок в описаній моделі. Він не підтверджує несучу здатність, безпечність чи відповідність проєктним вимогам; конструктивні параметри перевіряють окремо."
  },
  "de": {
    "longDescription": "Ermittelt Volumen einer Rechteckplatte und geometrische Bewehrungsmenge für zwei angenommene Gitter. Neben Beton erscheinen Abstand, Stahllänge und Masse bei fester Dichte 7850 kg/m³. Reihen folgen floor(Seite/Abstand) + 1, was nicht immer eine Reihe am fernen Rand platziert. Der Zuschlag gilt nur für Beton; Bewehrungsplan, Betondeckung und Überlappungen benötigen eigene Planung.",
    "howItWorks": "Rechteckplatte: Beton V = L·W·t; Zuschlag w von 0 bis 50 % gilt nur für Beton. Zwei Gitter werden angenommen: nL = floor(W/s) + 1, nW = floor(L/s) + 1; Bewehrungslänge R = 2(nL·L + nW·W). Abstandszahlen folgen der kürzesten Dezimaldarstellung der Eingaben. Masse = R·π·d²·7850/4.000.000 bei d in mm; 7850 kg/m³ ist eine feste Modelldichte. Betondeckung, zusätzliche Randreihe, Überlappungen, Verankerung und Tragfähigkeit fehlen.",
    "howToUse": [
      "Trage Länge, Breite und Dicke der Platte ein.",
      "Gitterabstand aus der Planung in Metern eintragen: 200 mm als 0,2 m.",
      "Trage den Durchmesser der Bewehrung in Millimetern ein.",
      "Nur den Betonzuschlag setzen; zusätzliche Bewehrung gesondert zählen."
    ],
    "example": "Eine Platte von 10 mal 8 m mit 0,3 m Dicke und einer Matte mit 200 mm aus Stäben zu 12 mm braucht 25,2 m³ Beton und 1452,46 kg Stahl.",
    "faq": [
      {
        "q": "Warum ein Stab mehr?",
        "a": "Das Modell beginnt bei 0, dann s, 2s bis floor(Seite/s)·s. Zehn Abstände ergeben elf Reihen. Ist die Seite kein Vielfaches des Abstands, erreicht die letzte Reihe nicht den gegenüberliegenden Rand; Zusatzreihe und Betondeckung sind nach Zeichnung gesondert festzulegen."
      },
      {
        "q": "Sind zwei Lagen immer richtig?",
        "a": "Nein. Zwei Lagen sind eine feste Zählannahme, jeweils mit zwei Richtungen. Die erforderliche Bewehrung hängt von Plattenberechnung, Lasten und Auflagerbedingungen ab. Die Menge bestätigt diese Anordnung nicht."
      },
      {
        "q": "Woher kommen die 0,888 kg je Meter?",
        "a": "Aus der Geometrie: ein Kreis mit 12 mm hat 113,1 mm², und Stahl mit 7850 kg/m³ ergibt 0,888 kg für jeden Meter davon. Es ist Rechnerei und kein Tabellenwert."
      },
      {
        "q": "Ist der Stoß der Stäbe enthalten?",
        "a": "Nein. Gitterlängen folgen den Seiten ohne Überlappung, Verankerung und Zuschnitt. Der Zuschlag ändert nur Beton, nicht Stahllänge oder -masse. Zusatzlängen nach Planung gesondert ermitteln."
      },
      {
        "q": "Warum ein eigener Rechner, wenn der allgemeine Betonrechner das Volumen liefert?",
        "a": "Weil eine Platte mehr braucht als eine Betonage. Dieser zählt auch die Matte in zwei Lagen mit dem zusätzlichen Stab an jeder Kante — etwas, das eine Volumenrechnung nicht liefert."
      }
    ],
    "disclaimer": "Dies ist eine geometrische Mengenberechnung im beschriebenen Modell. Tragfähigkeit, Sicherheit und Planungskonformität werden damit nicht bestätigt; Konstruktionsparameter gesondert prüfen."
  },
  "es": {
    "longDescription": "Cuenta volumen de losa rectangular y cantidad geométrica de acero para dos mallas supuestas. Además del hormigón muestra separación, longitud y masa con densidad fija de 7850 kg/m³. Las filas siguen floor(lado/separación) + 1, que no siempre pone una fila en el borde lejano. El margen solo afecta al hormigón; disposición, recubrimiento y solapes requieren un proyecto aparte.",
    "howItWorks": "Losa rectangular: hormigón V = L·W·t; el margen w del 0 al 50 % solo se aplica al hormigón. Se asumen dos mallas: nL = floor(W/s) + 1, nW = floor(L/s) + 1; longitud de acero R = 2(nL·L + nW·W). Los pasos se cuentan según la representación decimal más corta de las entradas. Masa = R·π·d²·7850/4.000.000 con d en mm; 7850 kg/m³ es una densidad fija del modelo. No incluye recubrimiento, fila adicional de borde, solapes, anclaje ni capacidad estructural.",
    "howToUse": [
      "Introduce el largo, el ancho y el espesor de la losa.",
      "Introduce la separación del proyecto en metros: 200 mm se escribe como 0,2 m.",
      "Introduce el diámetro de la barra en milímetros.",
      "Fija margen solo del hormigón; cuenta aparte el acero adicional."
    ],
    "example": "Una losa de 10 por 8 y 0,3 m de espesor con mallazo de 200 mm y barra de 12 mm necesita 25,2 m³ de hormigón y 1452,46 kg de acero.",
    "faq": [
      {
        "q": "¿Por qué una barra más?",
        "a": "El modelo sitúa la primera fila en 0, luego s, 2s hasta floor(lado/s)·s. Diez intervalos dan once filas. Si el lado no es múltiplo de la separación, la última no llega al borde opuesto; la fila adicional y el recubrimiento se determinan aparte según el plano."
      },
      {
        "q": "¿Dos capas son siempre lo correcto?",
        "a": "No. Dos capas son una hipótesis fija de conteo, cada una con dos direcciones. La armadura necesaria depende del análisis, cargas y apoyo. La cantidad no aprueba esa disposición."
      },
      {
        "q": "¿De dónde salen los 0,888 kg por metro?",
        "a": "De la geometría: un círculo de 12 mm son 113,1 mm², y el acero a 7850 kg/m³ da 0,888 kg por cada metro. Es aritmética, no una consulta de tabla."
      },
      {
        "q": "¿Se incluyen los solapes de las barras?",
        "a": "No. La malla usa las longitudes de lados sin solapes, anclaje ni cortes. El margen modifica solo el hormigón, no longitud ni masa del acero. Calcula aparte las longitudes adicionales del proyecto."
      },
      {
        "q": "¿Para qué una calculadora aparte si la general de hormigón ya da el volumen?",
        "a": "Porque una losa necesita más que un vertido. Esta cuenta además el mallazo en dos capas con la barra adicional en cada borde, algo que un cálculo de volumen de una figura no te da."
      }
    ],
    "disclaimer": "Es un cálculo geométrico de cantidades en el modelo descrito. No acredita capacidad resistente, seguridad ni conformidad con el proyecto; comprueba aparte los parámetros de diseño."
  }
} satisfies Record<'ru'|'en'|'uk'|'de'|'es',Partial<CalculatorCopy>>;
