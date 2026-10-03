import type { CalculatorCopy } from '../../lib/platform/types';
// Individually read actual immutable145 body; agent-authored amendment is not human approval.
export const buildingWave16ContractContent = {
  "ru": {
    "longDescription": "Оценивает погонную длину обрешётки по площади скатов и выбранному шагу. Отношение 1/шаг показывает теоретические метры на квадратный метр. Число целых брусков округляется вверх отдельно, а объём древесины следует непрерывной расчётной длине и сечению. Поэтому объём всех приобретённых брусков может быть больше показанного; крайние ряды и раскрой требуют отдельного плана.",
    "howItWorks": "Непрерывная оценка: погонная длина R = A/s·(1 + w/100), где A — площадь скатов в м², s — шаг в м, w — запас 0–50 %. Брусков = ceil(R/длина бруска); объём = R·ширина·высота/1 000 000 при сечении в мм. Это объём непрерывной расчётной длины, а не объём всех купленных целых брусков. Концевые ряды, нахлёсты, раскрой и контробрешётка отдельно не учтены.",
    "howToUse": [
      "Введите площадь крыши — именно ската, а не застройки.",
      "Введите шаг обрешётки, которого требует ваше покрытие.",
      "Введите длину и сечение брусков, которые покупаете.",
      "Добавьте запас на резы и стыки."
    ],
    "example": "60 м² с шагом 350 мм и запасом 10 % забирают 188,57 м, то есть 32 шестиметровых бруска.",
    "faq": [
      {
        "q": "Брать площадь крыши или площадь застройки?",
        "a": "Площадь крыши — настоящую поверхность ската. Крыша под 30° примерно на 15 % больше здания, которое она накрывает, и калькулятор площади крыши даст это число."
      },
      {
        "q": "Какой шаг выбрать?",
        "a": "Используйте шаг из инструкции конкретного покрытия и проекта. Число в поле — входная величина, а не рекомендация. Сплошной настил нельзя подменять обрешёткой с условным шагом."
      },
      {
        "q": "Зачем нужен объём?",
        "a": "Он переводит непрерывную расчётную длину в м³. Объём купленных целых брусков считайте по их числу и длине: 32 бруска по 6 м сечением 50×50 мм дают 0,48 м³. Округление числа брусков уже добавляет длину сверх непрерывной оценки."
      },
      {
        "q": "Учтена ли контробрешётка?",
        "a": "Нет. Если крыша имеет вентилируемый зазор, контробрешётка идёт поперёк с шагом стропил и считается отдельно."
      },
      {
        "q": "Почему бруски округляются вверх?",
        "a": "Округление происходит один раз: длина делится на один брусок. Каждый рез оставляет обрезок — именно на него и идёт запас."
      }
    ],
    "disclaimer": "Это геометрический подсчёт в описанной модели. Он не подтверждает несущую способность, безопасность или соответствие требованиям проекта; конструктивные параметры проверяют отдельно."
  },
  "en": {
    "longDescription": "Estimates running batten length from slope area and the selected spacing. The ratio 1/spacing gives theoretical metres per square metre. Whole pieces round up separately, while timber volume follows the continuous calculated length and section. Purchased-piece volume may therefore exceed the displayed volume; end rows and cutting layout need a separate plan.",
    "howItWorks": "Continuous estimate: running length R = A/s·(1 + w/100), with slope area A in m², spacing s in m and reserve w from 0 to 50%. Pieces = ceil(R/stock length); volume = R·width·height/1,000,000 for a section in mm. This volume follows the continuous calculated length, not every purchased whole piece. End rows, laps, cutting layout and counterbattens are not separately included.",
    "howToUse": [
      "Enter the roof area — the sloped area, not the footprint.",
      "Enter the batten spacing your covering requires.",
      "Enter the length and section of the battens you are buying.",
      "Add an allowance for cuts and joints."
    ],
    "example": "60 m² at 350 mm spacing with 10 % allowance takes 188.57 m, which is 32 six-metre battens.",
    "faq": [
      {
        "q": "Should I use the roof area or the floor area?",
        "a": "The roof area — the actual sloped surface. A roof at 30° is about 15 % larger than the building it covers, and the roof area calculator will give you that figure."
      },
      {
        "q": "What spacing should I use?",
        "a": "Use spacing from the specific covering instructions and design. The field value is an input, not a recommendation. A continuous deck cannot be replaced by battens with an arbitrary spacing."
      },
      {
        "q": "Why is the volume useful?",
        "a": "It converts the continuous calculated length to m³. For purchased whole pieces use their count and length: 32 pieces at 6 m and 50×50 mm make 0.48 m³. Rounding the piece count adds length beyond the continuous estimate."
      },
      {
        "q": "Are the counter-battens included?",
        "a": "No. If your roof has a ventilated gap, the counter-battens run the other way at the rafter spacing and are a separate count."
      },
      {
        "q": "Why round the battens up so aggressively?",
        "a": "Because they are not rounded aggressively — the length is divided by one piece and rounded up once. Every cut leaves a stub, which is what the allowance is for."
      }
    ],
    "disclaimer": "This is a geometric quantity calculation within the described model. It does not establish load capacity, safety or project compliance; check design parameters separately."
  },
  "uk": {
    "longDescription": "Оцінює погонну довжину обрешітки за площею схилів та обраним кроком. Відношення 1/крок показує теоретичні метри на квадратний метр. Цілі бруски округлюються вгору окремо, а об’єм деревини визначається неперервною розрахунковою довжиною та перерізом. Об’єм усіх придбаних брусків може бути більшим; крайні ряди та розкрій потребують окремого плану.",
    "howItWorks": "Неперервна оцінка: погонна довжина R = A/s·(1 + w/100), де A — площа схилів у м², s — крок у м, w — запас 0–50 %. Брусків = ceil(R/довжина бруска); об’єм = R·ширина·висота/1 000 000 за перерізу в мм. Це об’єм неперервної розрахункової довжини, а не всіх придбаних цілих брусків. Крайні ряди, стики, розкрій і контробрешітку окремо не враховано.",
    "howToUse": [
      "Введіть площу даху — саме схилу, а не забудови.",
      "Введіть крок обрешітки, якого потребує ваше покриття.",
      "Введіть довжину і переріз брусків, які купуєте.",
      "Додайте запас на різи і стики."
    ],
    "example": "60 м² з кроком 350 мм і запасом 10 % забирають 188,57 м, тобто 32 шестиметрові бруски.",
    "faq": [
      {
        "q": "Брати площу даху чи площу забудови?",
        "a": "Площу даху — справжню поверхню схилу. Дах під 30° приблизно на 15 % більший за будівлю, яку він накриває, і калькулятор площі даху дасть це число."
      },
      {
        "q": "Який крок обрати?",
        "a": "Візьміть крок з інструкції конкретного покриття та проєкту. Значення поля — вхідні дані, не рекомендація. Суцільний настил не можна замінювати обрешіткою з умовним кроком."
      },
      {
        "q": "Навіщо потрібен об’єм?",
        "a": "Він переводить неперервну розрахункову довжину в м³. Для придбаних цілих брусків використовуйте їхню кількість і довжину: 32 бруски по 6 м перерізом 50×50 мм дають 0,48 м³. Округлення кількості додає довжину понад неперервну оцінку."
      },
      {
        "q": "Чи враховано контробрешітку?",
        "a": "Ні. Якщо дах має вентильований зазор, контробрешітка йде впоперек із кроком крокв і рахується окремо."
      },
      {
        "q": "Чому бруски округлюються вгору?",
        "a": "Округлення відбувається один раз: довжина ділиться на один брусок. Кожен різ лишає обрізок — саме на нього і йде запас."
      }
    ],
    "disclaimer": "Це геометричний підрахунок в описаній моделі. Він не підтверджує несучу здатність, безпечність чи відповідність проєктним вимогам; конструктивні параметри перевіряють окремо."
  },
  "de": {
    "longDescription": "Schätzt die laufende Lattenlänge aus Dachfläche und gewähltem Abstand. Das Verhältnis 1/Abstand nennt theoretische Meter je Quadratmeter. Ganze Latten werden gesondert aufgerundet, während das Holzvolumen der kontinuierlichen Rechenlänge und dem Querschnitt folgt. Das Volumen aller gekauften Latten kann daher größer sein; Randreihen und Zuschnitt benötigen einen eigenen Plan.",
    "howItWorks": "Kontinuierliche Schätzung: laufende Länge R = A/s·(1 + w/100), Dachfläche A in m², Abstand s in m, Zuschlag w von 0 bis 50 %. Stückzahl = ceil(R/Lagerlänge); Volumen = R·Breite·Höhe/1.000.000 bei Querschnitt in mm. Dieses Volumen gehört zur berechneten laufenden Länge, nicht zu allen gekauften ganzen Latten. Randreihen, Überlappungen, Zuschnitt und Konterlatten fehlen.",
    "howToUse": [
      "Trage die Dachfläche ein — die geneigte Fläche und nicht den Grundriss.",
      "Trage den Lattenabstand ein, den deine Deckung verlangt.",
      "Trage Länge und Querschnitt der Latten ein, die du kaufst.",
      "Ergänze einen Zuschlag für Zuschnitt und Stöße."
    ],
    "example": "60 m² bei 350 mm Abstand und 10 % Zuschlag brauchen 188,57 m, das sind 32 Latten zu sechs Metern.",
    "faq": [
      {
        "q": "Soll ich die Dachfläche oder die Grundfläche nehmen?",
        "a": "Die Dachfläche — die tatsächliche geneigte Fläche. Ein Dach mit 30° ist rund 15 % größer als das Gebäude darunter, und der Rechner für die Dachfläche liefert diesen Wert."
      },
      {
        "q": "Welchen Abstand soll ich nehmen?",
        "a": "Abstand aus der Anleitung des konkreten Deckprodukts und der Planung verwenden. Der Feldwert ist eine Eingabe, keine Empfehlung. Eine Vollschalung wird nicht durch beliebig beabstandete Latten ersetzt."
      },
      {
        "q": "Wozu das Volumen?",
        "a": "Es rechnet die kontinuierliche Länge in m³ um. Für gekaufte ganze Latten Anzahl und Länge verwenden: 32 Stück à 6 m mit 50×50 mm ergeben 0,48 m³. Das Aufrunden der Stückzahl ergänzt Länge über die kontinuierliche Schätzung hinaus."
      },
      {
        "q": "Sind die Konterlatten enthalten?",
        "a": "Nein. Hat dein Dach eine Hinterlüftung, laufen die Konterlatten quer im Sparrenabstand und sind eine eigene Zählung."
      },
      {
        "q": "Warum werden die Latten so stark aufgerundet?",
        "a": "Sie werden gar nicht stark aufgerundet — die Länge wird durch ein Stück geteilt und einmal aufgerundet. Jeder Schnitt lässt einen Rest, und dafür ist der Zuschlag da."
      }
    ],
    "disclaimer": "Dies ist eine geometrische Mengenberechnung im beschriebenen Modell. Tragfähigkeit, Sicherheit und Planungskonformität werden damit nicht bestätigt; Konstruktionsparameter gesondert prüfen."
  },
  "es": {
    "longDescription": "Estima la longitud de rastreles a partir del área de faldones y la separación elegida. La relación 1/separación da metros teóricos por metro cuadrado. Las piezas enteras se redondean por separado, mientras que el volumen de madera sigue la longitud continua y la sección. El volumen de todas las piezas compradas puede ser mayor; las filas de borde y el despiece requieren un plano aparte.",
    "howItWorks": "Estimación continua: longitud R = A/s·(1 + w/100), con área de faldones A en m², separación s en m y margen w del 0 al 50 %. Piezas = ceil(R/longitud comercial); volumen = R·ancho·alto/1.000.000 para sección en mm. Ese volumen corresponde a la longitud continua calculada, no a todas las piezas enteras compradas. No incluye por separado filas de borde, solapes, despiece ni contrarastreles.",
    "howToUse": [
      "Introduce la superficie de la cubierta: la del faldón, no la de la planta.",
      "Introduce la separación que exija tu material de cubierta.",
      "Introduce el largo y la sección de los rastreles que vas a comprar.",
      "Añade un margen por cortes y empalmes."
    ],
    "example": "60 m² con una separación de 350 mm y un 10 % de margen llevan 188,57 m, es decir, 32 rastreles de seis metros.",
    "faq": [
      {
        "q": "¿Debo usar la superficie de la cubierta o la de la planta?",
        "a": "La de la cubierta: la superficie inclinada real. Una cubierta a 30° es alrededor de un 15 % mayor que el edificio que cubre, y la calculadora de superficie de cubierta te da esa cifra."
      },
      {
        "q": "¿Qué separación debo usar?",
        "a": "Usa la separación de las instrucciones del material concreto y del proyecto. El valor del campo es una entrada, no una recomendación. Un tablero continuo no se sustituye por rastreles con separación arbitraria."
      },
      {
        "q": "¿Para qué sirve el volumen?",
        "a": "Convierte la longitud continua en m³. Para piezas enteras compradas usa su número y longitud: 32 piezas de 6 m y 50×50 mm suman 0,48 m³. El redondeo de piezas añade longitud sobre la estimación continua."
      },
      {
        "q": "¿Se incluyen los contrarrastreles?",
        "a": "No. Si tu cubierta lleva cámara ventilada, los contrarrastreles van en el otro sentido, a la separación de los pares, y se cuentan aparte."
      },
      {
        "q": "¿Por qué se redondean los rastreles con tanta holgura?",
        "a": "No se redondean con holgura: la longitud se divide entre una pieza y se redondea hacia arriba una sola vez. Cada corte deja un resto, y para eso está el margen."
      }
    ],
    "disclaimer": "Es un cálculo geométrico de cantidades en el modelo descrito. No acredita capacidad resistente, seguridad ni conformidad con el proyecto; comprueba aparte los parámetros de diseño."
  }
} satisfies Record<'ru'|'en'|'uk'|'de'|'es',Partial<CalculatorCopy>>;
