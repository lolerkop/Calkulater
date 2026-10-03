import type { CalculatorCopy } from '../../lib/platform/types';
// Individually read actual immutable145 body; agent-authored amendment is not human approval.
export const buildingWave16ContractContent = {
  "ru": {
    "longDescription": "Оценивает длину трубы по площади и шагу, отдельно для основной и краевой зон. В каждой части используется площадь/шаг: усреднение двух шагов может дать другой расход. Число петель — округление по выбранному ограничению длины, а строка «на петлю» показывает среднее, не готовый план контуров. Калькулятор не рассчитывает давление, мощность или температуру поверхности.",
    "howItWorks": "Непрерывная геометрическая оценка: R = ((A − E)/s + E/se)(1 + w/100), где A и краевая зона E в м², шаги s и se в м, 0 ≤ E < A, запас 0–50 %. Петель = ceil(R/выбранная предельная длина), «на петлю» = R/число петель — средняя длина. Шаги и предел положительны, числа конечны. Подводки к коллектору, развороты, раскрой, тепловая мощность и гидравлическая балансировка отдельно не рассчитаны.",
    "howToUse": [
      "Введите площадь, на которой по плану будет труба.",
      "Задайте шаг основной зоны и площадь краевой зоны, включая 0 при её отсутствии.",
      "Введите шаг краевой зоны и выбранный предел длины петли.",
      "Задайте собственный запас; подводки и развороты проверьте по плану отдельно."
    ],
    "example": "20 м² с шагом 150 мм и краевой зоной 4 м² с шагом 100 мм забирают 161,33 м трубы в двух петлях.",
    "faq": [
      {
        "q": "Почему краевая зона плотнее?",
        "a": "Модель позволяет задать отдельный шаг краевой зоны, но не требует, чтобы он был меньше основного. Выбор шага следует теплотехническому проекту. При отсутствии отдельной зоны задайте её площадь 0."
      },
      {
        "q": "Что ограничивает длину петли?",
        "a": "Введите ограничение из конкретного проекта системы. Потери давления зависят от диаметра, расхода, температуры, материала и соединений; универсальная граница 90–120 м из одних размеров здесь не следует. Калькулятор проверяет только выбранный бюджет длины."
      },
      {
        "q": "Считать ли всю комнату?",
        "a": "Считайте то, что действительно обогреваете. Под встроенную кухонную мебель и ванну трубу обычно не кладут, и учтя их, вы купите лишнее."
      },
      {
        "q": "Меняет ли шаг теплоотдачу?",
        "a": "Шаг меняет геометрическую длину трубы на м², но мощность зависит также от температуры воды, расхода, стяжки и покрытия. По этому расчёту нельзя получить тепловую мощность или гарантировать равномерный нагрев."
      },
      {
        "q": "Учтена ли стяжка?",
        "a": "Нет. Объём стяжки считается отдельно по площади и толщине."
      }
    ],
    "disclaimer": "Это геометрический подсчёт в описанной модели. Он не подтверждает несущую способность, безопасность или соответствие требованиям проекта; конструктивные параметры проверяют отдельно."
  },
  "en": {
    "longDescription": "Estimates pipe length from area and spacing separately for main and edge zones. Each zone uses area/spacing; averaging the two spacings can produce a different quantity. Loop count rounds against a chosen length limit, and per-loop length is an average rather than a circuit layout. The calculator does not determine pressure, output or surface temperature.",
    "howItWorks": "Continuous geometric estimate: R = ((A − E)/s + E/se)(1 + w/100), with A and edge area E in m², spacings s and se in m, 0 ≤ E < A and reserve 0–50%. Loops = ceil(R/chosen maximum length); per loop = R/loop count is an average. Spacings and the limit are positive; inputs are finite. Manifold leads, bends, cutting layout, heat output and hydraulic balancing are not calculated separately.",
    "howToUse": [
      "Enter the area where the plan places pipe.",
      "Set main spacing and edge area, including 0 if absent.",
      "Enter edge spacing and the chosen loop-length limit.",
      "Choose your reserve; check manifold leads and bends against the plan separately."
    ],
    "example": "20 m² at 150 mm with a 4 m² edge zone at 100 mm takes 161.33 m of pipe in two loops.",
    "faq": [
      {
        "q": "Why is the edge zone laid tighter?",
        "a": "The model lets you set a separate edge spacing but does not require it to be tighter than the main spacing. Select it from the thermal design. Enter edge area 0 when there is no separate zone."
      },
      {
        "q": "What limits loop length?",
        "a": "Enter a limit from the specific system design. Pressure loss depends on diameter, flow, temperature, material and fittings; dimensions alone do not establish a universal 90–120 m limit. This calculator applies only the chosen length budget."
      },
      {
        "q": "Should I count the whole room?",
        "a": "Count what you actually heat. Pipe is not usually laid under fitted kitchen units or a bath, and including them buys pipe you will not use."
      },
      {
        "q": "Does spacing change the heat output?",
        "a": "Spacing changes geometric pipe length per m², but output also depends on water temperature, flow, screed and covering. This calculation cannot give thermal output or guarantee uniform heating."
      },
      {
        "q": "Is the screed included?",
        "a": "No. Screed volume is a separate calculation from area and thickness."
      }
    ],
    "disclaimer": "This is a geometric quantity calculation within the described model. It does not establish load capacity, safety or project compliance; check design parameters separately."
  },
  "uk": {
    "longDescription": "Оцінює довжину труби за площею й кроком окремо для основної та краєвої зон. У кожній частині застосовується площа/крок; усереднення двох кроків може дати іншу витрату. Кількість петель округлюється за обраною межею довжини, а довжина на петлю є середньою, не готовою схемою контурів. Тиск, потужність і температура поверхні не розраховані.",
    "howItWorks": "Неперервна геометрична оцінка: R = ((A − E)/s + E/se)(1 + w/100), де A та краєва зона E у м², кроки s і se у м, 0 ≤ E < A, запас 0–50 %. Петель = ceil(R/обрана гранична довжина), «на петлю» = R/число петель — середня довжина. Кроки й межа додатні, числа скінченні. Підводи до колектора, розвороти, розкрій, теплова потужність і гідравлічне балансування окремо не розраховані.",
    "howToUse": [
      "Введіть площу, де за планом буде труба.",
      "Задайте основний крок та площу краєвої зони, включно з 0 за її відсутності.",
      "Введіть краєвий крок та обрану межу довжини петлі.",
      "Задайте власний запас; підводи й розвороти перевірте за планом окремо."
    ],
    "example": "20 м² з кроком 150 мм і краєвою зоною 4 м² з кроком 100 мм забирають 161,33 м труби у двох петлях.",
    "faq": [
      {
        "q": "Чому краєва зона щільніша?",
        "a": "Модель дозволяє окремий крок краєвої зони, але не вимагає меншого кроку, ніж основний. Його обирають за теплотехнічним проєктом. Якщо окремої зони немає, задайте площу 0."
      },
      {
        "q": "Що обмежує довжину петлі?",
        "a": "Введіть межу з конкретного проєкту системи. Втрата тиску залежить від діаметра, витрати, температури, матеріалу та з’єднань; універсальна межа 90–120 м з одних розмірів не випливає. Тут застосовується лише обраний бюджет довжини."
      },
      {
        "q": "Чи рахувати всю кімнату?",
        "a": "Рахуйте те, що справді обігріваєте. Під вбудовані кухонні меблі й ванну трубу зазвичай не кладуть, і врахувавши їх, ви купите зайве."
      },
      {
        "q": "Чи змінює крок тепловіддачу?",
        "a": "Крок змінює геометричну довжину труби на м², але потужність залежить також від температури води, витрати, стяжки та покриття. Цей розрахунок не визначає теплову потужність і не гарантує рівномірного нагріву."
      },
      {
        "q": "Чи враховано стяжку?",
        "a": "Ні. Об’єм стяжки рахується окремо за площею і товщиною."
      }
    ],
    "disclaimer": "Це геометричний підрахунок в описаній моделі. Він не підтверджує несучу здатність, безпечність чи відповідність проєктним вимогам; конструктивні параметри перевіряють окремо."
  },
  "de": {
    "longDescription": "Schätzt Rohrlänge aus Fläche und Abstand getrennt für Haupt- und Randzone. Jede Zone verwendet Fläche/Abstand; ein Mittelwert der beiden Abstände kann einen anderen Bedarf ergeben. Die Kreiszahl folgt einer gewählten Längengrenze, die Länge je Kreis ist ein Mittelwert statt eines Verlegeplans. Druck, Wärmeleistung und Oberflächentemperatur werden nicht bestimmt.",
    "howItWorks": "Kontinuierliche geometrische Schätzung: R = ((A − E)/s + E/se)(1 + w/100), mit A und Randfläche E in m², Abständen s und se in m, 0 ≤ E < A und Zuschlag 0–50 %. Kreise = ceil(R/gewählte Höchstlänge); je Kreis = R/Kreiszahl ist ein Mittelwert. Abstände und Grenze sind positiv, Eingaben endlich. Verteileranschlüsse, Bögen, Zuschnitt, Wärmeleistung und hydraulischer Abgleich werden nicht einzeln berechnet.",
    "howToUse": [
      "Fläche eintragen, auf der laut Plan Rohre liegen.",
      "Hauptabstand und Randfläche setzen, bei fehlender Randzone 0.",
      "Randabstand und gewählte Kreislängengrenze eintragen.",
      "Eigenen Zuschlag wählen; Anschlüsse und Bögen am Plan gesondert prüfen."
    ],
    "example": "20 m² bei 150 mm mit einer Randzone von 4 m² bei 100 mm brauchen 161,33 m Rohr in zwei Heizkreisen.",
    "faq": [
      {
        "q": "Warum wird die Randzone enger verlegt?",
        "a": "Das Modell erlaubt einen eigenen Randabstand, verlangt aber keinen engeren Abstand. Er folgt der Wärmeplanung. Ohne eigene Randzone ihre Fläche auf 0 setzen."
      },
      {
        "q": "Was begrenzt die Länge eines Heizkreises?",
        "a": "Grenze aus der konkreten Systemplanung eintragen. Druckverlust hängt von Durchmesser, Durchfluss, Temperatur, Material und Verbindungen ab; Maße allein ergeben keine allgemeine Grenze von 90–120 m. Hier wird nur das gewählte Längenbudget angewandt."
      },
      {
        "q": "Soll ich den ganzen Raum zählen?",
        "a": "Zähle das, was du tatsächlich beheizt. Unter Einbauküchen und einer Badewanne wird gewöhnlich kein Rohr verlegt, und sie mitzuzählen kauft Rohr, das du nicht nutzt."
      },
      {
        "q": "Ändert der Abstand die Wärmeleistung?",
        "a": "Der Abstand ändert die geometrische Rohrlänge je m²; die Leistung hängt auch von Wassertemperatur, Durchfluss, Estrich und Belag ab. Diese Rechnung liefert keine Wärmeleistung und garantiert keine gleichmäßige Erwärmung."
      },
      {
        "q": "Ist der Estrich enthalten?",
        "a": "Nein. Das Estrichvolumen ist eine eigene Rechnung aus Fläche und Dicke."
      }
    ],
    "disclaimer": "Dies ist eine geometrische Mengenberechnung im beschriebenen Modell. Tragfähigkeit, Sicherheit und Planungskonformität werden damit nicht bestätigt; Konstruktionsparameter gesondert prüfen."
  },
  "es": {
    "longDescription": "Estima la longitud de tubo por área y separación, por separado en la zona principal y perimetral. Cada parte usa área/separación; promediar las dos separaciones puede producir otra cantidad. Los circuitos se redondean según un límite elegido, y la longitud por circuito es una media, no un plano de trazado. No calcula presión, potencia ni temperatura superficial.",
    "howItWorks": "Estimación geométrica continua: R = ((A − E)/s + E/se)(1 + w/100), con A y zona perimetral E en m², separaciones s y se en m, 0 ≤ E < A y margen 0–50 %. Circuitos = ceil(R/longitud máxima elegida); por circuito = R/número de circuitos es una media. Separaciones y límite son positivos; datos finitos. No calcula por separado conexiones al colector, curvas, despiece, potencia térmica ni equilibrado hidráulico.",
    "howToUse": [
      "Introduce el área donde el plano coloca tubo.",
      "Fija la separación principal y el área perimetral, 0 si no existe.",
      "Introduce la separación perimetral y el límite de circuito elegido.",
      "Elige tu margen; comprueba aparte conexiones y curvas en el plano."
    ],
    "example": "20 m² a 150 mm con una zona perimetral de 4 m² a 100 mm llevan 161,33 m de tubo en dos circuitos.",
    "faq": [
      {
        "q": "¿Por qué la zona perimetral se coloca más apretada?",
        "a": "El modelo permite otra separación perimetral, pero no exige que sea menor que la principal. Elígela según el proyecto térmico. Sin zona separada, introduce área perimetral 0."
      },
      {
        "q": "¿Qué limita la longitud de un circuito?",
        "a": "Introduce el límite del proyecto concreto. La pérdida de carga depende del diámetro, caudal, temperatura, material y accesorios; las dimensiones solas no justifican un límite universal de 90–120 m. Aquí solo se aplica el presupuesto de longitud elegido."
      },
      {
        "q": "¿Debo contar toda la habitación?",
        "a": "Cuenta lo que de verdad calefactas. El tubo no suele colocarse bajo los muebles de cocina ni bajo una bañera, e incluirlos supone comprar tubo que no vas a usar."
      },
      {
        "q": "¿La separación cambia la potencia térmica?",
        "a": "La separación cambia la longitud geométrica de tubo por m², pero la potencia depende también de la temperatura del agua, caudal, solera y acabado. Este cálculo no da potencia térmica ni garantiza un calentamiento uniforme."
      },
      {
        "q": "¿Incluye la solera?",
        "a": "No. El volumen de solera es un cálculo aparte a partir de la superficie y el espesor."
      }
    ],
    "disclaimer": "Es un cálculo geométrico de cantidades en el modelo descrito. No acredita capacidad resistente, seguridad ni conformidad con el proyecto; comprueba aparte los parámetros de diseño."
  }
} satisfies Record<'ru'|'en'|'uk'|'de'|'es',Partial<CalculatorCopy>>;
