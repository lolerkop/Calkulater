// Individually reviewed against all five actual188 native bodies; human editorial review pending.
export const contract = {
  "ru": {
    "longDescription": "Сила Архимеда определяется объёмом вытесненной жидкости и её плотностью. Сравнение с весом даёт вертикальную равнодействующую этих двух сил для указанного погружения. Если тело уже плавает в покое, вытесненная масса равна его массе; больший объём полного погружения показывает запас плавучести, а не фактическое равновесное вытеснение.",
    "howToUse": [
      "Плотность жидкости: пресная вода 1000, морская около 1025, дизель около 840, ртуть 13 546 кг/м³.",
      "Равнодействующая положительна — тело всплывает, отрицательна — тонет, ноль — висит в толще.",
      "Вводите именно объём, исключённый из жидкости. Замкнутая сухая полость учитывается по внешнему контуру; свободно залитая водой полость такого вытеснения не даёт. 1 л=0,001 м³."
    ],
    "howItWorks": "F = ρ · g · V при g = 9,80665; равнодействующая равна F − m · g.",
    "example": "Тело 15 кг объёмом 20 литров в воде получает 196,13 Н против веса 147,1 Н — всплывает.",
    "faq": [
      {
        "q": "Почему тяжёлый корабль не тонет?",
        "a": "Плотный материал корпуса может окружать большой водонепроницаемый объём с воздухом. Пока судно плавает в покое, масса вытесненной воды равна полной массе судна. При поступлении воды растёт масса и может теряться доступный сухой объём; один расчёт силы не проверяет остойчивость или герметичность."
      },
      {
        "q": "Что даёт нейтральная плавучесть?",
        "a": "Равенство вытесненной и собственной массы даёт нулевую сумму веса и силы Архимеда. Тело, первоначально находящееся в покое и без других сил, не получает вертикального ускорения; это не отменяет уже имеющуюся скорость или сопротивление жидкости."
      },
      {
        "q": "Почему в морской воде легче плавать?",
        "a": "При том же вытесненном объёме сила пропорциональна плотности. Иллюстративные 1025 и 1000 кг/м³ дают на 2,5% больше силы, но реальная плотность зависит от температуры и солёности. Это не гарантия безопасности человека в воде."
      },
      {
        "q": "Нужна ли плотность самого тела?",
        "a": "Нет, достаточно объёма и массы — их отношение и есть плотность. Расчёт намеренно берёт то, что легче измерить: массу на весах, объём по вытесненной воде."
      }
    ],
    "disclaimer": "Неподвижная однородная жидкость, заданный вытесненный объём и постоянное g=9,80665 м/с². Не учитываются сопротивление, опоры, поверхностное натяжение и изменение погружения."
  },
  "en": {
    "longDescription": "Buoyancy depends on displaced fluid volume and fluid density. Comparing it with weight gives the vertical net of those two forces at the specified immersion. A body already floating at rest displaces its own mass; its larger fully submerged volume describes buoyancy reserve, not its actual equilibrium displacement.",
    "howToUse": [
      "Fluid density: fresh water 1000, sea water about 1025, diesel about 840, mercury 13 546 kg/m³.",
      "A positive net force floats the body, a negative one sinks it, zero holds it mid-water.",
      "Enter the volume actually excluded from the fluid. A sealed dry cavity contributes its outer displaced volume; an openly flooded cavity does not. 1 L=0.001 m³."
    ],
    "howItWorks": "F = ρ · g · V with g = 9.80665; the net force is F − m · g.",
    "example": "A 15 kg body of 20 litres in water gets 196.13 N against a weight of 147.1 N — it floats.",
    "faq": [
      {
        "q": "Why does a heavy ship not sink?",
        "a": "A dense hull material can enclose a large watertight volume containing air. While a ship floats at rest, displaced water mass equals total ship mass. Flooding adds mass and can remove available dry volume; a force calculation does not check stability or watertightness."
      },
      {
        "q": "What does neutral buoyancy give you?",
        "a": "Equal displaced and body masses give a zero sum of weight and buoyancy. A body initially at rest with no other forces has no vertical acceleration; existing velocity and fluid drag are separate matters."
      },
      {
        "q": "Why is floating easier in the sea?",
        "a": "At the same displaced volume, force is proportional to density. Illustrative values of 1025 and 1000 kg/m³ give 2.5% more force, but actual density depends on temperature and salinity. This is not a guarantee of a person’s safety in water."
      },
      {
        "q": "Do I need the body's own density?",
        "a": "No — volume and mass are enough, and their ratio is the density. The calculation deliberately takes what is easier to measure: mass on a scale, volume by displaced water."
      }
    ],
    "disclaimer": "Static homogeneous fluid, specified displaced volume and constant g=9.80665 m/s². Drag, supports, surface tension and changing immersion are omitted."
  },
  "uk": {
    "longDescription": "Сила Архімеда залежить від об’єму витісненої рідини та її густини. Порівняння з вагою дає вертикальну рівнодійну цих двох сил за вказаного занурення. Тіло, що вже плаває в спокої, витісняє власну масу; більший об’єм повного занурення показує запас плавучості, а не рівноважне витіснення.",
    "howToUse": [
      "Введіть об’єм зануреної частини тіла.",
      "Введіть густину рідини: для прісної води це 1000 кг/м³.",
      "Введіть масу тіла, щоб побачити рівнодійну.",
      "Вводьте об’єм, реально виключений із рідини. Замкнена суха порожнина додає зовнішнє витіснення; вільно залита водою порожнина — ні. 1 л=0,001 м³."
    ],
    "howItWorks": "Виштовхувальна сила рахується як F = ρ · g · V за g = 9,80665 м/с². Рівнодійна дорівнює F − m · g: додатна означає спливання, від’ємна — занурення. Об’єм береться саме зануреної частини, а не всього тіла.",
    "example": "Тіло 15 кг об’ємом 20 літрів у воді отримує 196,13 Н проти ваги 147,1 Н — тобто спливає. Щоб воно потонуло, маса мала б перевищити 20 кг.",
    "faq": [
      {
        "q": "Чому виштовхувальна сила не залежить від маси тіла?",
        "a": "Бо вона дорівнює вазі витісненої рідини, а та визначається лише об’ємом і густиною рідини. Маса тіла входить в іншу частину балансу — у вагу, яка тягне вниз."
      },
      {
        "q": "Чому сталевий корабель не тоне?",
        "a": "Густий матеріал корпусу може охоплювати великий водонепроникний об’єм із повітрям. У спокої судно витісняє масу води, рівну своїй повній масі. Затоплення додає масу й може зменшувати сухий об’єм; розрахунок сили не перевіряє остійність або герметичність."
      },
      {
        "q": "Який об’єм вводити для частково зануреного тіла?",
        "a": "Об’єм саме зануреної частини. Тіло, що плаває, занурюється рівно настільки, щоб виштовхувальна сила зрівнялася з вагою."
      },
      {
        "q": "Чи діє закон Архімеда в повітрі?",
        "a": "Так, і саме на ньому тримаються повітряні кулі. Просто густина повітря приблизно в 800 разів менша за густину води, тому для щільних тіл ефект непомітний."
      }
    ],
    "disclaimer": "Нерухома однорідна рідина, заданий витіснений об’єм і стале g=9,80665 м/с². Опір, опори, поверхневий натяг та зміна занурення не враховані."
  },
  "de": {
    "longDescription": "Der Auftrieb hängt vom verdrängten Flüssigkeitsvolumen und der Dichte der Flüssigkeit ab. Der Vergleich mit der Gewichtskraft ergibt die vertikale Resultierende dieser beiden Kräfte bei der angegebenen Eintauchtiefe. Ein ruhig schwimmender Körper verdrängt seine eigene Masse; das größere Volumen bei vollständigem Eintauchen beschreibt eine Auftriebsreserve, nicht die tatsächliche Gleichgewichtsverdrängung.",
    "howToUse": [
      "Dichte des Mediums: Süßwasser 1000, Meerwasser rund 1025, Diesel rund 840, Quecksilber 13 546 kg/m³.",
      "Eine positive resultierende Kraft lässt den Körper aufsteigen, eine negative sinken, null hält ihn im Wasser.",
      "Gib das tatsächlich aus der Flüssigkeit verdrängte Volumen ein. Ein geschlossener trockener Hohlraum zählt zur äußeren Verdrängung, ein offen gefluteter nicht. 1 L=0,001 m³."
    ],
    "howItWorks": "F = ρ · g · V mit g = 9,80665; die resultierende Kraft ist F − m · g.",
    "example": "Ein Körper von 15 kg mit 20 Litern bekommt in Wasser 196,13 N gegen ein Gewicht von 147,1 N — er steigt auf.",
    "faq": [
      {
        "q": "Warum sinkt ein schweres Schiff nicht?",
        "a": "Ein dichter Rumpfwerkstoff kann ein großes wasserdichtes Luftvolumen umschließen. Im schwimmenden Ruhezustand ist die verdrängte Wassermasse gleich der gesamten Schiffsmasse. Flutung erhöht die Masse und kann trockenes Volumen verlieren lassen; die Kraftrechnung prüft weder Stabilität noch Dichtheit."
      },
      {
        "q": "Was bringt das Schweben?",
        "a": "Gleiche verdrängte und eigene Masse ergeben die Summe null aus Gewicht und Auftrieb. Ein anfangs ruhender Körper ohne weitere Kräfte erhält keine vertikale Beschleunigung; eine vorhandene Geschwindigkeit und Flüssigkeitswiderstand sind andere Fragen."
      },
      {
        "q": "Warum schwimmt man im Meer leichter?",
        "a": "Bei gleichem Verdrängungsvolumen ist die Kraft proportional zur Dichte. Beispielwerte von 1025 und 1000 kg/m³ ergeben 2,5% mehr Kraft; die tatsächliche Dichte hängt von Temperatur und Salzgehalt ab. Das garantiert keine Sicherheit eines Menschen im Wasser."
      },
      {
        "q": "Brauche ich die Dichte des Körpers?",
        "a": "Nein — Volumen und Masse reichen, und ihr Verhältnis ist die Dichte. Die Rechnung nimmt bewusst das, was leichter zu messen ist: die Masse auf einer Waage, das Volumen über verdrängtes Wasser."
      }
    ],
    "disclaimer": "Ruhende homogene Flüssigkeit, vorgegebenes Verdrängungsvolumen und konstantes g=9,80665 m/s². Widerstand, Abstützung, Oberflächenspannung und veränderte Eintauchtiefe fehlen."
  },
  "es": {
    "longDescription": "El empuje depende del volumen de fluido desplazado y de su densidad. Compararlo con el peso da la resultante vertical de esas dos fuerzas para la inmersión indicada. Un cuerpo que ya flota en reposo desplaza su propia masa; el mayor volumen totalmente sumergido describe una reserva de flotabilidad, no el desplazamiento real en equilibrio.",
    "howToUse": [
      "Densidad del fluido: agua dulce 1000, agua de mar unos 1025, gasóleo unos 840, mercurio 13 546 kg/m³.",
      "Una fuerza resultante positiva hace flotar el cuerpo, una negativa lo hunde y un cero lo mantiene a media agua.",
      "Introduce el volumen que realmente excluye al fluido. Una cavidad cerrada y seca contribuye al desplazamiento exterior; una cavidad abierta e inundada no. 1 L=0,001 m³."
    ],
    "howItWorks": "F = ρ · g · V con g = 9,80665; la fuerza resultante es F − m · g.",
    "example": "Un cuerpo de 15 kg y 20 litros en agua recibe 196,13 N frente a un peso de 147,1 N: flota.",
    "faq": [
      {
        "q": "¿Por qué no se hunde un barco pesado?",
        "a": "Un casco de material denso puede encerrar un gran volumen estanco con aire. Mientras el barco flota en reposo, la masa de agua desplazada iguala su masa total. La inundación añade masa y puede reducir el volumen seco; este cálculo no comprueba estabilidad ni estanqueidad."
      },
      {
        "q": "¿Qué aporta la flotabilidad neutra?",
        "a": "Masas desplazada y propia iguales dan una suma nula de peso y empuje. Un cuerpo inicialmente en reposo y sin otras fuerzas no tiene aceleración vertical; la velocidad previa y la resistencia del fluido son cuestiones distintas."
      },
      {
        "q": "¿Por qué es más fácil flotar en el mar?",
        "a": "Con el mismo volumen desplazado, el empuje es proporcional a la densidad. Los valores ilustrativos 1025 y 1000 kg/m³ dan un 2,5% más de fuerza, pero la densidad real depende de temperatura y salinidad. No garantiza la seguridad de una persona en el agua."
      },
      {
        "q": "¿Hace falta la densidad del propio cuerpo?",
        "a": "No: bastan el volumen y la masa, y su cociente es la densidad. El cálculo toma a propósito lo que es más fácil de medir: la masa en una báscula y el volumen por el agua desplazada."
      }
    ],
    "disclaimer": "Fluido homogéneo en reposo, volumen desplazado indicado y g=9,80665 m/s² constante. Se omiten resistencia, apoyos, tensión superficial y cambios de inmersión."
  }
};
