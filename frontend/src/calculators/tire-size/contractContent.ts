import type { CalculatorCopy } from '../../lib/platform/types';

// Existing native content individually reviewed; scoped model and input corrections.
export const automotiveWave10ContractContent = {
  "ru": {
    "longDescription": "Разбирает маркировку вида 205/55 R16, три числа которой записаны в разных единицах — и в этом весь расчёт. Ширина указана в миллиметрах, профиль — в процентах от ширины, а диаметр диска — в дюймах. Средняя цифра поэтому не высота: 55 при ширине 205 означает 112,75 мм, и читать её как миллиметры значит ошибиться вдвое. Внешний диаметр складывается из диска и двух боковин — снизу и сверху, — а из него выводится длина окружности и число оборотов на километр, по которому сравнивают типоразмеры и оценивают расхождение спидометра.",
    "howItWorks": "Высота профиля = ширина × профиль ÷ 100. Внешний диаметр = диаметр диска × 25,4 + две высоты профиля. Длина окружности = π × внешний диаметр, а оборотов на километр = миллион делить на неё. Это номинальная ненагруженная геометрия маркировки. Действительный диаметр качения и окружность под нагрузкой зависят от конструкции, давления, нагрузки и износа; здесь они не измеряются. Все три ввода положительны. Расчёт не проверяет допуски автомобиля, зазоры, индекс нагрузки или скорости.",
    "howToUse": [
      "Введите первое число маркировки — ширину шины в миллиметрах.",
      "Введите второе число — профиль в процентах от ширины, а не в миллиметрах.",
      "Введите диаметр диска в дюймах, он идёт после буквы R.",
      "Сравните внешний диаметр с диаметром другого типоразмера."
    ],
    "example": "Шина 205/55 R16 имеет боковину 112,75 мм и внешний диаметр 631,9 мм, то есть 503,73 оборота на километр.",
    "faq": [
      {
        "q": "Почему средняя цифра — не высота в миллиметрах?",
        "a": "Потому что это процент от ширины. У шины 205/55 боковина равна 55 % от 205, то есть 112,75 мм, а не 55 мм."
      },
      {
        "q": "Почему профиль входит дважды?",
        "a": "Внешний диаметр проходит через центр колеса, а боковина есть и снизу, и сверху диска. Поэтому к диаметру диска прибавляются две высоты профиля."
      },
      {
        "q": "Зачем нужно число оборотов на километр?",
        "a": "По нему сравнивают типоразмеры: если у новой шины оборотов меньше, спидометр начнёт занижать скорость, а одометр — пробег."
      },
      {
        "q": "Как оценить погрешность спидометра?",
        "a": "При неизменной калибровке геометрический масштаб скорости меняется как Dнов/Dстар. Больший диаметр означает больший путь за оборот. Это сравнение номинальных размеров, а не измерение погрешности конкретного спидометра."
      },
      {
        "q": "Учитывается ли просадка под нагрузкой?",
        "a": "Нет. Результат основан на маркировке и круговой номинальной геометрии. Для фактического качения нужны данные производителя или измерение под заданной нагрузкой и давлением; универсальной поправки в несколько миллиметров здесь нет."
      }
    ]
  },
  "en": {
    "longDescription": "Reads a code like 205/55 R16, whose three numbers are written in different units — and that is the whole calculation. The width is in millimetres, the profile is a percentage of that width, and the rim diameter is in inches. The middle figure is therefore not a height: 55 on a 205-wide tire means 112.75 mm, and reading it as millimetres is out by a factor of two. The overall diameter is the rim plus two sidewalls, top and bottom, and from it follow the circumference and the revolutions per kilometre used to compare sizes and estimate speedometer error.",
    "howItWorks": "Sidewall = width × profile ÷ 100. Overall diameter = rim diameter × 25.4 + two sidewalls. Circumference = π × overall diameter, and revolutions per kilometre = a million divided by it. This is nominal unloaded geometry from the marking. Actual rolling diameter and loaded circumference depend on construction, pressure, load and wear and are not measured here. All three inputs are positive. The calculation does not verify vehicle approval, clearance, load index or speed rating.",
    "howToUse": [
      "Enter the first number of the code — the tire width in millimetres.",
      "Enter the second number — the profile as a percentage of the width, not in millimetres.",
      "Enter the rim diameter in inches, the figure after the R.",
      "Compare the overall diameter against another size."
    ],
    "example": "A 205/55 R16 tire has a 112.75 mm sidewall and a 631.9 mm overall diameter — 503.73 revolutions per kilometre.",
    "faq": [
      {
        "q": "Why is the middle figure not a height in millimetres?",
        "a": "Because it is a percentage of the width. On a 205/55 tire the sidewall is 55% of 205, that is 112.75 mm rather than 55 mm."
      },
      {
        "q": "Why does the sidewall count twice?",
        "a": "The overall diameter runs through the centre of the wheel, and there is sidewall both below and above the rim. Two sidewall heights are therefore added to the rim diameter."
      },
      {
        "q": "What are revolutions per kilometre for?",
        "a": "They compare sizes: if a new tire turns fewer times per kilometre, the speedometer will start reading low and so will the odometer."
      },
      {
        "q": "How do I estimate speedometer error?",
        "a": "With unchanged calibration, the geometric speed scale changes by Dnew/Dold. A larger diameter means more distance per turn. This compares nominal sizes rather than measuring a particular speedometer’s error."
      },
      {
        "q": "Is deflection under load included?",
        "a": "No. The result uses the marking and nominal circular geometry. Actual rolling requires manufacturer data or measurement at a specified load and pressure; there is no universal few-millimetre correction here."
      }
    ]
  },
  "uk": {
    "longDescription": "Маркування шини читається не одразу: 205/55 R16 означає ширину 205 мм, висоту профілю 55 % від ширини й діаметр диска 16 дюймів. Профіль — це відсоток, а не міліметри, і саме через це заміна ширини змінює й зовнішній діаметр.",
    "howItWorks": "Висота профілю дорівнює ширина × профіль ÷ 100. Зовнішній діаметр — це діаметр диска × 25,4 плюс дві висоти профілю. Довжина кола й кількість обертів на кілометр виводяться з діаметра. Це номінальна ненавантажена геометрія маркування. Реальні діаметр кочення й коло під навантаженням залежать від конструкції, тиску, навантаження та зносу й тут не вимірюються. Усі три вводи додатні. Розрахунок не перевіряє допуски авто, зазори, індекс навантаження чи швидкості.",
    "howToUse": [
      "Введіть ширину шини в міліметрах.",
      "Введіть профіль у відсотках.",
      "Введіть діаметр диска в дюймах."
    ],
    "example": "Шина 205/55 R16 має бічну стінку 112,75 мм і зовнішній діаметр 631,9 мм, тобто 503,73 оберта на кілометр.",
    "faq": [
      {
        "q": "Чому профіль у відсотках, а не в міліметрах?",
        "a": "Бо це відношення висоти до ширини. Шина 205/55 має бічну стінку 112,75 мм, а 225/55 за того самого профілю — уже 123,75 мм, бо ширина інша."
      },
      {
        "q": "Наскільки можна відхилятися від штатного розміру?",
        "a": "Універсального дозволу на відхилення 2–3 % немає. Перевірте дозволені виробником авто розміри, диски, зазори, індекси навантаження та швидкості й відповідні правила. Цей калькулятор порівнює геометрію, а не схвалює встановлення."
      },
      {
        "q": "Що станеться зі спідометром?",
        "a": "За незмінного калібрування геометричний масштаб швидкості змінюється як Dнов/Dстар. Більший діаметр означає більший шлях за оберт. Це порівняння номінальних розмірів, а не вимірювання похибки конкретного спідометра."
      },
      {
        "q": "Що дає нижчий профіль?",
        "a": "Точнішу керованість і гірший комфорт: коротка бічна стінка менше поглинає нерівності. Плюс зростає ризик пошкодити диск на ямі."
      }
    ]
  },
  "de": {
    "longDescription": "Aus der Reifenkennzeichnung, etwa 205/55 R16, werden Flankenhöhe, nomineller Außendurchmesser, Umfang und theoretische Umdrehungen je Kilometer berechnet. Breite und Flankenanteil stehen in mm und Prozent, der Felgendurchmesser in Zoll. Das hilft beim geometrischen Größenvergleich, sagt aber nicht alle Einbaumaße oder den tatsächlichen Abrollumfang voraus.",
    "howItWorks": "Die Flankenhöhe ist Breite × Verhältnis ÷ 100. Der nominelle Außendurchmesser ist der Felgendurchmesser in Millimetern plus zweimal die Flankenhöhe, denn die Flanke sitzt oben und unten. Der Umfang folgt daraus mit π × Durchmesser, und die Umdrehungen je Kilometer sind 1 000 000 mm geteilt durch diesen Umfang. Das ist die nominelle unbelastete Geometrie aus der Kennzeichnung. Tatsächlicher nominelle Außendurchmesser und Umfang unter Last hängen von Bauart, Druck, Last und Verschleiß ab und werden hier nicht gemessen. Alle drei Eingaben sind positiv. Fahrzeugfreigabe, Abstände, Tragfähigkeits- und Geschwindigkeitsindex werden nicht geprüft.",
    "howToUse": [
      "Trage die Reifenbreite in Millimetern ein — die erste Zahl der Größenangabe.",
      "Trage das Höhen-Breiten-Verhältnis in Prozent ein — die Zahl nach dem Schrägstrich.",
      "Trage den Felgendurchmesser in Zoll ein — die Zahl nach dem R.",
      "Vergleiche nominellen Außendurchmesser und theoretische Umdrehungen je Kilometer mit deiner bisherigen Größe."
    ],
    "example": "Für 205/55 R16 beträgt die Flankenhöhe 205 × 55 ÷ 100 = 112,75 mm. Der Felgendurchmesser sind 16 × 25,4 = 406,4 mm, der nominelle Außendurchmesser also 406,4 + 2 × 112,75 = 631,9 mm. Bei einem Umfang von rund 1985 mm dreht sich das Rad etwa 504-mal je Kilometer.",
    "faq": [
      {
        "q": "Warum weicht der Tacho nach einem Größenwechsel ab?",
        "a": "Bei unveränderter Kalibrierung ändert sich der geometrische Geschwindigkeitsmaßstab um Dneu/Dalt. Ein größerer Durchmesser bedeutet mehr Weg pro Umdrehung. Das ist ein Vergleich nomineller Größen, keine Messung des Fehlers eines bestimmten Tachos."
      },
      {
        "q": "Wie viel Abweichung im Durchmesser ist unkritisch?",
        "a": "Es gibt keine allgemeine Freigabe für eine Abweichung von 2–3 %. Prüfe die vom Fahrzeughersteller freigegebenen Größen, Felgen, Abstände sowie Last- und Geschwindigkeitsindizes und einschlägige Regeln. Der Rechner vergleicht Geometrie, genehmigt aber keinen Einbau."
      },
      {
        "q": "Ist die Breite an der Flanke die Aufstandsbreite?",
        "a": "Nein. Die erste Zahl ist die Nennbreite des Reifens, nicht die Breite der Aufstandsfläche. Diese hängt zusätzlich von Luftdruck, Last und Felgenmaulweite ab."
      },
      {
        "q": "Gilt die Rechnung auch für Zollgrößen?",
        "a": "Der Rechner erwartet die metrische Schreibweise mit Breite in Millimetern und Felge in Zoll. Reine Zollgrößen wie 31×10.50 R15 geben den Durchmesser bereits direkt an und müssen nicht umgerechnet werden."
      }
    ],
    "seoDescription": "Berechne aus der Reifengröße den Außendurchmesser, die Flankenhöhe, den Umfang und die Umdrehungen je Kilometer."
  },
  "es": {
    "longDescription": "Lee un código como 205/55 R16, cuyos tres números están escritos en unidades distintas, y en eso consiste todo el cálculo. La anchura va en milímetros, el perfil es un porcentaje de esa anchura y el diámetro de la llanta va en pulgadas. La cifra del medio no es, por tanto, una altura: un 55 en un neumático de 205 de ancho son 112,75 mm, y leerlo como milímetros falla en un factor de dos. El diámetro exterior es la llanta más dos flancos, arriba y abajo, y de él salen el perímetro y las vueltas por kilómetro que se usan para comparar medidas y estimar el error del velocímetro.",
    "howItWorks": "Flanco = anchura × perfil ÷ 100. Diámetro exterior = diámetro de la llanta × 25,4 + dos flancos. Perímetro = π × diámetro exterior, y vueltas por kilómetro = un millón dividido entre él. Es la geometría nominal sin carga de la inscripción. El diámetro de rodadura y el perímetro bajo carga dependen de construcción, presión, carga y desgaste y no se miden aquí. Las tres entradas son positivas. No se comprueban homologación del vehículo, holguras, índice de carga ni velocidad.",
    "howToUse": [
      "Introduce el primer número del código: la anchura del neumático en milímetros.",
      "Introduce el segundo número: el perfil como porcentaje de la anchura, no en milímetros.",
      "Introduce el diámetro de la llanta en pulgadas, la cifra tras la R.",
      "Compara el diámetro exterior con el de otra medida."
    ],
    "example": "Un neumático 205/55 R16 tiene un flanco de 112,75 mm y un diámetro exterior de 631,9 mm: 503,73 vueltas por kilómetro.",
    "faq": [
      {
        "q": "¿Por qué la cifra del medio no es una altura en milímetros?",
        "a": "Porque es un porcentaje de la anchura. En un neumático 205/55 el flanco es el 55 % de 205, es decir, 112,75 mm y no 55 mm."
      },
      {
        "q": "¿Por qué el flanco cuenta dos veces?",
        "a": "El diámetro exterior pasa por el centro de la rueda, y hay flanco tanto por debajo como por encima de la llanta. Por eso se suman dos alturas de flanco al diámetro de la llanta."
      },
      {
        "q": "¿Para qué sirven las vueltas por kilómetro?",
        "a": "Sirven para comparar medidas: si un neumático nuevo da menos vueltas por kilómetro, el velocímetro empezará a marcar de menos, y el cuentakilómetros también."
      },
      {
        "q": "¿Cómo estimo el error del velocímetro?",
        "a": "Con la calibración sin cambios, la escala geométrica de velocidad cambia por Dnuevo/Danterior. Un diámetro mayor recorre más distancia por vuelta. Se comparan tamaños nominales, no se mide el error de un velocímetro concreto."
      },
      {
        "q": "¿Se incluye la deformación bajo carga?",
        "a": "No. El resultado usa la inscripción y una geometría circular nominal. Para rodadura real hacen falta datos del fabricante o medidas con carga y presión definidas; no hay una corrección universal de pocos milímetros."
      }
    ]
  }
} satisfies Record<'ru' | 'en' | 'uk' | 'de' | 'es', Partial<CalculatorCopy>>;
