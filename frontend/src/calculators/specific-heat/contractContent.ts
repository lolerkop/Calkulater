// Individually reviewed against all five actual188 native bodies; human editorial review pending.
export const contract = {
  "ru": {
    "longDescription": "Рассчитайте тепло, полученное или отданное телом при изменении температуры без фазового перехода. Здесь Q=c·m·ΔT, c>0 и m>0; отрицательные Q и ΔT описывают охлаждение. В обратной задаче масса положительна только при одинаковых знаках Q и ΔT. Это теплота в джоулях, а не мощность прибора или его потребление из сети.",
    "howToUse": [
      "Выберите, что ищете: энергию, перепад температуры или массу.",
      "Введите два видимых известных параметра и c. Пример c=4186 Дж/(кг·К) относится к воде; подбирайте c для вещества, температуры и процесса. При Q=ΔT=0 массу определить нельзя.",
      "Для охлаждения задайте отрицательный перепад: энергия выйдет со знаком минус."
    ],
    "howItWorks": "Количество теплоты равно произведению удельной теплоёмкости, массы и изменения температуры: Q = c·m·ΔT. Изменение в кельвинах и градусах Цельсия численно одинаково.",
    "example": "Для 2 кг воды при c=4186 Дж/(кг·К) и ΔT=50 К получается 418 600 Дж, или 0,1163 кВт·ч. При охлаждении на 50 К знак Q меняется, модуль остаётся тем же в этой модели.",
    "faq": [
      {
        "q": "Чем это отличается от теплопередачи через слой?",
        "a": "Там считается поток тепла сквозь конструкцию в ваттах, зависящий от теплопроводности и толщины. Здесь — количество тепла на нагрев вещества в джоулях, зависящее от массы и теплоёмкости."
      },
      {
        "q": "Учитывается ли плавление или кипение?",
        "a": "Нет. Для плавления или кипения нужна отдельная теплота фазового перехода при соответствующих давлении и температуре. Если процесс включает и изменение температуры, и смену фазы, его нужно разбить на участки."
      },
      {
        "q": "Кельвины или градусы Цельсия?",
        "a": "Для ИЗМЕНЕНИЯ температуры разницы нет: шкалы отличаются только началом отсчёта, а величина деления одна и та же."
      },
      {
        "q": "Почему энергия бывает отрицательной?",
        "a": "Потому что тело охлаждается и отдаёт тепло, а не получает. Знак показывает направление, а не ошибку."
      }
    ],
    "disclaimer": "Постоянная введённая теплоёмкость в одном агрегатном состоянии и заданных условиях. Фазовые переходы, нагрев ёмкости, теплопотери и эффективность источника энергии не учитываются."
  },
  "en": {
    "longDescription": "Calculate heat received or released as a body changes temperature without changing phase. Here Q=c·m·ΔT with c>0 and m>0; negative Q and ΔT describe cooling. In the inverse mass mode, Q and ΔT must have the same sign. This is heat in joules, not appliance power or electricity drawn from the supply.",
    "howToUse": [
      "Choose what you are after: the energy, the temperature change or the mass.",
      "Enter the two visible known quantities and c. The example c=4186 J/(kg·K) is for water; choose c for the material, temperature and process. Q=ΔT=0 cannot determine mass.",
      "For cooling give a negative change: the energy comes out with a minus sign."
    ],
    "howItWorks": "The heat equals specific heat capacity times mass times temperature change: Q = c·m·ΔT. A change in kelvin and in degrees Celsius is numerically the same.",
    "example": "For 2 kg of water with c=4186 J/(kg·K) and ΔT=50 K, the result is 418,600 J or 0.1163 kWh. Cooling by 50 K reverses the sign of Q but keeps its magnitude in this model.",
    "faq": [
      {
        "q": "How is this different from conduction through a layer?",
        "a": "That gives the heat flow through a construction in watts, driven by conductivity and thickness. This gives the heat needed to warm a substance in joules, driven by mass and heat capacity."
      },
      {
        "q": "Is melting or boiling included?",
        "a": "No. Melting or boiling needs separate latent heat at the relevant pressure and temperature. A process containing both a temperature change and a phase change must be split into stages."
      },
      {
        "q": "Kelvin or Celsius?",
        "a": "For a CHANGE in temperature it makes no difference: the scales differ only in where they start, and the size of a degree is identical."
      },
      {
        "q": "Why can the energy be negative?",
        "a": "Because the body is cooling and giving up heat rather than absorbing it. The sign shows direction, not an error."
      }
    ],
    "disclaimer": "Constant entered heat capacity within one phase and specified conditions. Phase changes, heating the container, heat losses and source efficiency are not included."
  },
  "uk": {
    "longDescription": "Розрахуйте отриману чи віддану тілом теплоту при зміні температури без фазового переходу. Тут Q=c·m·ΔT за c>0 та m>0; від’ємні Q й ΔT описують охолодження. В оберненій задачі маса додатна лише за однакових знаків Q та ΔT. Це теплота в джоулях, не потужність приладу чи споживання з мережі.",
    "howToUse": [
      "Виберіть, що шукаєте: енергію, перепад температури чи масу.",
      "Введіть два видимі відомі параметри й c. Приклад c=4186 Дж/(кг·К) стосується води; вибирайте c для речовини, температури та процесу. За Q=ΔT=0 масу визначити неможливо.",
      "Для охолодження задайте від’ємну зміну температури; теплота також буде від’ємною."
    ],
    "howItWorks": "Кількість теплоти дорівнює добутку питомої теплоємності, маси та зміни температури: Q = c · m · ΔT. Зміна в кельвінах і градусах Цельсія чисельно однакова, тому переводити шкалу не потрібно — важлива саме різниця.",
    "example": "Для 2 кг води за c=4186 Дж/(кг·К) та ΔT=50 К отримуємо 418 600 Дж, або 0,1163 кВт·год. Ідеальне джерело тепла 2 кВт без втрат передало б це за 209,3 с; час реального чайника тут не визначається.",
    "faq": [
      {
        "q": "Чому у води така велика теплоємність?",
        "a": "Через водневі зв’язки: значна частина підведеної енергії йде на їхнє розхитування, а не на прискорення молекул. Саме тому море нагрівається й остигає повільніше за сушу."
      },
      {
        "q": "Чи треба переводити градуси в кельвіни?",
        "a": "Ні, якщо йдеться про різницю: зміна на 10 °C дорівнює зміні на 10 К. Переведення потрібне лише там, де в формулу входить абсолютна температура."
      },
      {
        "q": "Чи враховано фазовий перехід?",
        "a": "Ні. Плавлення або кипіння потребує окремої теплоти фазового переходу за відповідних тиску й температури. Процес зі зміною температури та фази потрібно розбити на ділянки."
      },
      {
        "q": "Чому реальний нагрів триває довше за розрахунковий?",
        "a": "Q описує теплоту, отриману водою в цій моделі. Реальне джерело може також нагрівати посудину й віддавати тепло в довкілля. Електричне споживання та час залежать від потужності й роботи конкретного джерела; їх ця сторінка не визначає."
      }
    ],
    "disclaimer": "Стала введена теплоємність у межах одного агрегатного стану й заданих умов. Фазові переходи, нагрів посудини, тепловтрати та ефективність джерела енергії не враховано."
  },
  "de": {
    "longDescription": "Berechne die aufgenommene oder abgegebene Wärme bei einer Temperaturänderung ohne Phasenwechsel. Es gilt Q=c·m·ΔT mit c>0 und m>0; negative Q und ΔT beschreiben Abkühlung. Im inversen Massenmodus müssen Q und ΔT dasselbe Vorzeichen haben. Dies ist Wärme in Joule und keine Geräteleistung oder Stromaufnahme.",
    "howToUse": [
      "Wähle, was du suchst: die Energie, die Temperaturänderung oder die Masse.",
      "Trage die zwei sichtbaren bekannten Größen und c ein. Das Beispiel c=4186 J/(kg·K) gilt für Wasser; wähle c passend zu Stoff, Temperatur und Prozess. Q=ΔT=0 bestimmt keine Masse.",
      "Für das Abkühlen gib eine negative Änderung an: die Energie kommt mit einem Minus heraus."
    ],
    "howItWorks": "Die Wärme ist die spezifische Wärmekapazität mal Masse mal Temperaturänderung: Q = c·m·ΔT. Eine Änderung in Kelvin und in Grad Celsius ist zahlenmäßig dieselbe.",
    "example": "Für 2 kg Wasser mit c=4186 J/(kg·K) und ΔT=50 K ergeben sich 418 600 J oder 0,1163 kWh. Abkühlung um 50 K kehrt das Vorzeichen von Q um, lässt aber den Betrag in diesem Modell gleich.",
    "faq": [
      {
        "q": "Wie unterscheidet sich das von der Wärmeleitung durch eine Schicht?",
        "a": "Jene liefert den Wärmestrom durch ein Bauteil in Watt, getrieben von Leitfähigkeit und Dicke. Dies liefert die Wärme zum Erwärmen eines Stoffes in Joule, getrieben von Masse und Wärmekapazität."
      },
      {
        "q": "Sind Schmelzen und Sieden enthalten?",
        "a": "Nein. Schmelzen oder Sieden benötigt zusätzliche latente Wärme bei passendem Druck und passender Temperatur. Ein Vorgang mit Temperatur- und Phasenänderung muss in Abschnitte zerlegt werden."
      },
      {
        "q": "Kelvin oder Celsius?",
        "a": "Für eine ÄNDERUNG der Temperatur spielt es keine Rolle: die Skalen unterscheiden sich nur im Anfangspunkt, und die Größe eines Grades ist dieselbe."
      },
      {
        "q": "Warum kann die Energie negativ sein?",
        "a": "Weil der Körper abkühlt und Wärme abgibt, statt sie aufzunehmen. Das Vorzeichen zeigt die Richtung und keinen Fehler."
      }
    ],
    "disclaimer": "Konstante eingegebene Wärmekapazität innerhalb einer Phase bei den angegebenen Bedingungen. Phasenwechsel, Erwärmung des Behälters, Wärmeverluste und Wirkungsgrad der Energiequelle sind nicht enthalten."
  },
  "es": {
    "longDescription": "Calcula el calor recibido o cedido al cambiar la temperatura sin cambio de fase. Se usa Q=c·m·ΔT con c>0 y m>0; Q y ΔT negativos describen enfriamiento. Para despejar la masa, Q y ΔT deben tener el mismo signo. Es calor en julios, no potencia del aparato ni electricidad consumida.",
    "howToUse": [
      "Elige qué buscas: la energía, la variación de temperatura o la masa.",
      "Introduce las dos magnitudes conocidas visibles y c. El ejemplo c=4186 J/(kg·K) corresponde al agua; elige c según material, temperatura y proceso. Q=ΔT=0 no determina la masa.",
      "Para enfriar, da una variación negativa: la energía sale con signo menos."
    ],
    "howItWorks": "El calor es el calor específico por la masa por la variación de temperatura: Q = c·m·ΔT. Una variación en kelvin y en grados Celsius es numéricamente la misma.",
    "example": "Para 2 kg de agua con c=4186 J/(kg·K) y ΔT=50 K se obtienen 418 600 J o 0,1163 kWh. Enfriar 50 K invierte el signo de Q y conserva su módulo en este modelo.",
    "faq": [
      {
        "q": "¿En qué se diferencia de la conducción a través de una capa?",
        "a": "Aquella da el flujo de calor por un cerramiento en vatios, a partir de la conductividad y el espesor. Esta da el calor necesario para calentar una sustancia en julios, a partir de la masa y la capacidad térmica."
      },
      {
        "q": "¿Está incluida la fusión o la ebullición?",
        "a": "No. La fusión o ebullición requiere calor latente aparte a la presión y temperatura correspondientes. Un proceso con cambio de temperatura y de fase debe dividirse en etapas."
      },
      {
        "q": "¿Kelvin o Celsius?",
        "a": "Para una VARIACIÓN de temperatura da igual: las escalas solo se diferencian en dónde empiezan, y el tamaño del grado es idéntico."
      },
      {
        "q": "¿Por qué la energía puede ser negativa?",
        "a": "Porque el cuerpo se está enfriando y cede calor en vez de absorberlo. El signo indica el sentido, no un error."
      }
    ],
    "disclaimer": "Calor específico introducido constante dentro de una fase y unas condiciones definidas. No se incluyen cambios de fase, calentamiento del recipiente, pérdidas térmicas ni eficiencia de la fuente."
  }
};
