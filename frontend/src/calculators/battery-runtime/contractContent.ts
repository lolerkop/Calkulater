import type { CalculatorCopy } from '../../lib/platform/types';

type Body = Pick<CalculatorCopy, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'> & Partial<Pick<CalculatorCopy, 'seoDescription'>>;

export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Body> = {
  "ru": {
    "longDescription": "Оценка автономности при постоянной мощности нагрузки по номинальным А·ч и напряжению батареи. Ампер-часы описывают заряд; только после умножения на напряжение получается энергия в Вт·ч. Глубина разряда задаёт используемую долю номинальной энергии, а η — долю этой энергии, доходящую до нагрузки после преобразования. Оба процента вводятся пользователем, а не выбираются автоматически по типу батареи.",
    "howToUse": [
      "Введите ёмкость в А·ч и номинальное напряжение в В.",
      "Укажите постоянную мощность нагрузки в Вт, на той стороне, для которой задан η.",
      "Задайте глубину разряда и энергетический КПД: каждый больше 0 и не больше 100 %.",
      "Сравните полную и полезную энергию; небольшое время показывается без подмены нулём."
    ],
    "howItWorks": "Полная номинальная энергия E₀ = C·U Вт·ч. Полезная энергия E = C·U·DoD·η/10 000. Время t = E/P в часах, поскольку Вт·ч/Вт = ч. Удвоение мощности при тех же остальных данных вдвое сокращает время.",
    "example": "100 А·ч × 12 В = 1 200 Вт·ч. При глубине разряда 80 % и η = 90 % полезно 864 Вт·ч; нагрузка 200 Вт даёт 4,32 ч, то есть около 4 ч 19 мин. При 400 Вт получится 2,16 ч.",
    "faq": [
      {
        "q": "Почему нельзя делить А·ч сразу на ватты?",
        "a": "А·ч — заряд, а Вт — мощность. Для часов требуется энергия в Вт·ч, поэтому сначала умножают А·ч на напряжение. Токовая нагрузка потребовала бы другой записи: А·ч/А."
      },
      {
        "q": "Какую глубину разряда считать допустимой?",
        "a": "Возьмите значение из условий использования конкретной батареи. Калькулятор не рекомендует универсальные 50 или 80 % и не прогнозирует ресурс, защитное отключение или остаточное напряжение."
      },
      {
        "q": "Почему реальная автономность может отличаться?",
        "a": "Номинальное напряжение не постоянно, доступная ёмкость зависит от тока, температуры и старения; у свинцовых батарей заметен эффект Пейкерта. Модель не описывает эти кривые и переменную нагрузку."
      },
      {
        "q": "Чем этот η отличается от коэффициента в расчёте зарядки?",
        "a": "Здесь сравниваются энергии до и после преобразования к нагрузке. В расчёте времени зарядки коэффициент относится к сохранённому заряду в А·ч. Подставлять одно измерение в другой расчёт без проверки нельзя."
      }
    ],
    "disclaimer": "Расчёт номинальной энергии и постоянной нагрузки. Он не проверяет допустимый ток батареи, характеристики инвертора, пусковую мощность или условия защитного отключения."
  },
  "en": {
    "longDescription": "Estimate run time under a constant-power load using rated Ah and nominal battery voltage. Amp-hours describe charge; multiplying by voltage gives energy in Wh. Depth of discharge selects the usable fraction of nominal energy, while η is the fraction reaching the load after conversion. Both percentages are entered explicitly and are not selected automatically from battery chemistry.",
    "howToUse": [
      "Enter capacity in Ah and nominal voltage in V.",
      "Enter constant load power in W, on the side of the conversion to which η applies.",
      "Set depth of discharge and energy efficiency, each greater than 0 and at most 100%.",
      "Compare nominal and useful energy; a small positive duration is displayed without becoming a false zero."
    ],
    "howItWorks": "Nominal energy E₀ = C·U Wh. Useful energy E = C·U·DoD·η/10 000. Duration t = E/P hours, because Wh/W = h. Doubling power with unchanged inputs halves run time.",
    "example": "100 Ah × 12 V = 1 200 Wh. At 80% depth of discharge and η = 90%, useful energy is 864 Wh; a 200 W load gives 4.32 h, about 4 h 19 min. A 400 W load gives 2.16 h.",
    "faq": [
      {
        "q": "Why can't I divide Ah directly by watts?",
        "a": "Ah measures charge, while W measures power. To obtain hours, first multiply Ah by voltage to obtain Wh. For a current load, the corresponding balance would instead use Ah/A."
      },
      {
        "q": "What depth of discharge is permissible?",
        "a": "Use the conditions specified for the actual battery. This tool does not recommend a universal 50% or 80%, predict cycle life, or determine cutoff voltage."
      },
      {
        "q": "Why can measured run time differ?",
        "a": "Battery voltage varies, and available capacity depends on current, temperature and ageing. Lead-acid batteries can exhibit a substantial Peukert effect. Discharge curves and variable loads are not modelled."
      },
      {
        "q": "Is this η the same as the charge-time efficiency?",
        "a": "Here η compares energy before and after conversion to the load. The charge-time page uses retained charge in Ah. Those measurements are not interchangeable without checking what each represents."
      }
    ],
    "disclaimer": "Nominal-energy and constant-load estimate. Battery current limits, inverter ratings, starting power and protection cutoff are not checked."
  },
  "uk": {
    "longDescription": "Оцінка автономності за сталої потужності навантаження з номінальних А·год та напруги батареї. Ампер-години описують заряд; множення на напругу дає енергію у Вт·год. Глибина розряду обирає використовувану частку номінальної енергії, а η — частку, яка після перетворення доходить до навантаження. Обидва відсотки вводяться явно, а не призначаються автоматично за хімією батареї.",
    "howToUse": [
      "Введіть ємність в А·год і номінальну напругу у В.",
      "Укажіть сталу потужність навантаження у Вт на стороні, для якої задано η.",
      "Задайте глибину розряду та енергетичний ККД: кожен понад 0 і до 100 % включно.",
      "Порівняйте повну та корисну енергію; малий додатний час не підміняється нулем."
    ],
    "howItWorks": "Номінальна енергія E₀ = C·U Вт·год. Корисна енергія E = C·U·DoD·η/10 000. Час t = E/P у годинах, адже Вт·год/Вт = год. Подвоєння потужності за незмінних інших даних удвічі скорочує час.",
    "example": "100 А·год × 12 В = 1 200 Вт·год. За глибини розряду 80 % та η = 90 % корисно 864 Вт·год; навантаження 200 Вт дає 4,32 год, приблизно 4 год 19 хв. За 400 Вт буде 2,16 год.",
    "faq": [
      {
        "q": "Чому не можна ділити А·год одразу на вати?",
        "a": "А·год вимірюють заряд, а Вт — потужність. Щоб отримати години, спочатку помножте А·год на напругу й дістаньте Вт·год. Для струмового навантаження баланс мав би вигляд А·год/А."
      },
      {
        "q": "Яка глибина розряду допустима?",
        "a": "Використовуйте умови для конкретної батареї. Калькулятор не радить універсальних 50 чи 80 %, не прогнозує ресурс і не визначає напругу відключення."
      },
      {
        "q": "Чому виміряний час може відрізнятися?",
        "a": "Напруга змінюється, а доступна ємність залежить від струму, температури й старіння. У свинцевих батарей може бути значний ефект Пейкерта. Криві розряду та змінне навантаження не моделюються."
      },
      {
        "q": "Чи збігається цей η з ККД часу заряджання?",
        "a": "Тут порівнюються енергії до й після перетворення до навантаження. На сторінці часу заряджання порівнюється збережений заряд в А·год. Ці вимірювання не можна підміняти без перевірки їхнього змісту."
      }
    ],
    "disclaimer": "Оцінка номінальної енергії та сталого навантаження. Граничний струм батареї, параметри інвертора, пускова потужність і захисне відключення не перевіряються."
  },
  "de": {
    "longDescription": "Schätzt die Laufzeit bei konstanter Lastleistung aus Nennkapazität in Ah und Nennspannung. Amperestunden beschreiben Ladung; erst die Multiplikation mit der Spannung ergibt Energie in Wh. Die Entladetiefe legt den nutzbaren Anteil der Nennenergie fest. η bezeichnet den Energieanteil, der nach der Umwandlung die Last erreicht. Beide Prozentwerte werden eingegeben und nicht anhand der Zellchemie automatisch gewählt.",
    "howToUse": [
      "Gib die Kapazität in Ah und die Nennspannung in V ein.",
      "Trage die konstante Lastleistung in W auf der Seite ein, auf die sich η bezieht.",
      "Wähle Entladetiefe und energetischen Wirkungsgrad jeweils größer als 0 und höchstens 100 %.",
      "Vergleiche Nennenergie und nutzbare Energie; kleine positive Laufzeiten werden nicht als null ausgegeben."
    ],
    "howItWorks": "Die Nennenergie beträgt E₀ = C·U Wh. Nutzbare Energie: E = C·U·DoD·η/10 000. Laufzeit t = E/P in Stunden, denn Wh/W = h. Eine Verdopplung der Leistung halbiert bei sonst gleichen Werten die Laufzeit.",
    "example": "100 Ah × 12 V = 1 200 Wh. Bei 80 % Entladetiefe und η = 90 % bleiben 864 Wh; eine Last von 200 W ergibt 4,32 h, ungefähr 4 h 19 min. Bei 400 W sind es 2,16 h.",
    "faq": [
      {
        "q": "Warum kann ich Ah nicht direkt durch Watt teilen?",
        "a": "Ah ist Ladung und W ist Leistung. Für Stunden wird Energie in Wh benötigt, also Ah mal Spannung. Bei einer konstanten Stromlast wäre stattdessen Ah/A die passende Bilanz."
      },
      {
        "q": "Welche Entladetiefe ist zulässig?",
        "a": "Verwende die Betriebsbedingungen der konkreten Batterie. Der Rechner empfiehlt keine allgemeinen 50 oder 80 %, prognostiziert keine Lebensdauer und bestimmt keine Abschaltspannung."
      },
      {
        "q": "Warum kann die gemessene Laufzeit abweichen?",
        "a": "Die Spannung schwankt; nutzbare Kapazität hängt von Strom, Temperatur und Alterung ab. Bei Bleibatterien kann der Peukert-Effekt bedeutend sein. Entladekurven und wechselnde Lasten werden nicht modelliert."
      },
      {
        "q": "Ist η derselbe Wert wie beim Ladezeitrechner?",
        "a": "Hier werden Energien vor und nach der Umwandlung zur Last verglichen. Beim Ladezeitrechner geht es um gespeicherte Ladung in Ah. Diese Größen lassen sich nicht ungeprüft austauschen."
      }
    ],
    "disclaimer": "Modell mit Nennenergie und konstanter Last. Stromgrenzen der Batterie, Wechselrichterdaten, Anlaufleistung und Schutzabschaltung werden nicht geprüft."
  },
  "es": {
    "longDescription": "Estima la autonomía con potencia de carga constante a partir de los Ah nominales y la tensión nominal de la batería. Los amperios-hora describen carga; al multiplicarlos por tensión se obtiene energía en Wh. La profundidad de descarga selecciona la fracción utilizable de la energía nominal y η indica la parte que llega a la carga tras la conversión. Ambos porcentajes se introducen, no se asignan automáticamente según la química.",
    "howToUse": [
      "Introduce capacidad en Ah y tensión nominal en V.",
      "Indica la potencia constante de la carga en W en el lado al que se aplica η.",
      "Fija profundidad de descarga y eficiencia energética, ambas mayores que 0 y hasta el 100 %.",
      "Compara energía nominal y útil; los tiempos positivos pequeños se muestran sin convertirlos en cero."
    ],
    "howItWorks": "La energía nominal es E₀ = C·U Wh. La energía útil es E = C·U·DoD·η/10 000. El tiempo t = E/P está en horas, porque Wh/W = h. Duplicar la potencia, manteniendo el resto, reduce a la mitad la autonomía.",
    "example": "100 Ah × 12 V = 1 200 Wh. Con descarga del 80 % y η = 90 %, hay 864 Wh útiles; una carga de 200 W da 4,32 h, unas 4 h 19 min. Con 400 W se obtienen 2,16 h.",
    "faq": [
      {
        "q": "¿Por qué no dividir Ah directamente por vatios?",
        "a": "Ah mide carga y W mide potencia. Para obtener horas hace falta energía en Wh: multiplica primero Ah por tensión. Si la carga se expresa como corriente constante, el balance sería Ah/A."
      },
      {
        "q": "¿Qué profundidad de descarga está permitida?",
        "a": "Usa las condiciones de la batería concreta. El calculador no recomienda un 50 u 80 % universal, no predice vida útil y no determina tensión de desconexión."
      },
      {
        "q": "¿Por qué puede diferir la autonomía medida?",
        "a": "La tensión cambia y la capacidad disponible depende de corriente, temperatura y envejecimiento. Las baterías de plomo pueden presentar un efecto Peukert significativo. No se modelan curvas de descarga ni cargas variables."
      },
      {
        "q": "¿Es η la misma eficiencia que en el tiempo de carga?",
        "a": "Aquí se comparan energías antes y después de la conversión a la carga. En el tiempo de carga se compara carga almacenada en Ah. No son medidas intercambiables sin comprobar su significado."
      }
    ],
    "disclaimer": "Estimación con energía nominal y carga constante. No comprueba límites de corriente, características del inversor, potencia de arranque ni desconexión de protección."
  }
};
