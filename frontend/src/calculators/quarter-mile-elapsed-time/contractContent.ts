import type { CalculatorCopy } from '../../lib/platform/types';

// Existing native content individually reviewed; scoped model and input corrections.
export const automotiveWave10ContractContent = {
  "ru": {
    "longDescription": "Условная оценка времени и скорости на четверти мили по массе и мощности. Используется унаследованный эмпирический набор коэффициентов 5,825 и 234; его исходная калибровка не подтверждена, поэтому результат не имеет заявленной погрешности и не заменяет заезд или измерение. Мощность вводится в механических hp, масса — в кг вместе с водителем и фактической нагрузкой. Сцепление, переключения, аэродинамика и условия трассы не моделируются.",
    "howItWorks": "W = масса в кг·2,2046226218, P — механические hp. ET = 5,825·∛(W/P), секунды; V = 234·∛(P/W), mph; км/ч = mph·1,609344. Четверть международной мили составляет 402,336 м. Оба ввода положительны; все выводимые величины должны быть конечными и ненулевыми. Формула не пересчитывает мощность на коленвале в мощность на колёсах.",
    "howToUse": [
      "Введите положительную мощность в механических hp; метрические PS — другая единица.",
      "Введите массу в кг с водителем и фактической нагрузкой, не прибавляя их повторно.",
      "Сравнивайте сценарии с одинаковым определением мощности; читайте время и скорость как условное приближение без заявленной точности."
    ],
    "example": "150 hp и 1300 кг дают 15,6 секунды и около 141 км/ч на финише.",
    "faq": [
      {
        "q": "Почему в формуле нет сцепления и передаточных чисел?",
        "a": "Это ограничение двухпараметрического приближения. Оно не позволяет оценить старт, буксование, передачи, сопротивление воздуха или покрытие; два автомобиля с одинаковым отношением мощности к массе могут показать разные заезды."
      },
      {
        "q": "Насколько это точно?",
        "a": "Подтверждённого диапазона погрешности для этого набора коэффициентов нет. Значение не обещает совпадения до 0,1 секунды и не является «идеальным» временем. Для проверки нужны реальные заезды с сопоставимыми массой, мощностью и условиями."
      },
      {
        "q": "Какую мощность подставлять?",
        "a": "Поле использует механические hp, не метрические PS. Формула не устанавливает универсальную поправку между мощностью на колёсах и на валу; без подтверждённой калибровки нельзя объявить одну основу правильной для любого автомобиля. Для сравнения сценариев сохраняйте одинаковое определение мощности."
      },
      {
        "q": "Как читать скорость на финише?",
        "a": "В этом приближении скорость — ещё один выход из того же отношения мощности и массы. Реальное время и скорость отражают разные стороны заезда, но калькулятор не доказывает превосходство одного показателя и не восстанавливает по нему истинную мощность."
      }
    ]
  },
  "en": {
    "longDescription": "A conditional quarter-mile time and trap-speed estimate from mass and power. It uses the inherited empirical coefficient preset 5.825 and 234; the original calibration has not been verified, so no accuracy range is claimed and the result does not replace a timed run. Enter mechanical hp and kg including the driver and actual load. Traction, shifting, aerodynamics and track conditions are not modelled.",
    "howItWorks": "W = kg·2.2046226218 and P is mechanical hp. ET = 5.825·∛(W/P) seconds; V = 234·∛(P/W) mph; km/h = mph·1.609344. A quarter of an international mile is 402.336 m. Both inputs are positive and all output quantities must be finite and nonzero. The model makes no crankshaft-to-wheel power correction.",
    "howToUse": [
      "Enter positive power in mechanical hp; metric PS is a different unit.",
      "Enter kg including the driver and actual load without counting them twice.",
      "Keep the power definition consistent between scenarios; read time and speed as conditional estimates with no claimed accuracy."
    ],
    "example": "150 hp and 1300 kg give 15.6 seconds and about 141 km/h at the traps.",
    "faq": [
      {
        "q": "Why is there no traction or gearing in the formula?",
        "a": "That is a limit of the two-input approximation. It cannot assess launch, wheelspin, gearing, drag or surface; cars with the same power-to-mass ratio can produce different runs."
      },
      {
        "q": "How accurate is it?",
        "a": "There is no verified error range for this preset. It promises neither agreement within 0.1 seconds nor an “ideal” time. Validate it against actual runs with comparable mass, power and conditions."
      },
      {
        "q": "Which power figure should I use?",
        "a": "The field uses mechanical hp, not metric PS. There is no universal wheel-to-crank correction, and without verified calibration neither basis can be declared correct for every car. Keep the power definition consistent across comparisons."
      },
      {
        "q": "How should I interpret trap speed?",
        "a": "Here speed is another output of the same power-to-mass ratio. Real time and speed reflect different aspects of a run, but the calculator does not establish that one is superior or recover true power from it."
      }
    ]
  },
  "uk": {
    "longDescription": "Умовна оцінка часу й швидкості на чверті милі за масою та потужністю. Використовуються успадковані емпіричні коефіцієнти 5,825 і 234; початкову калібровку не підтверджено, тому похибка не заявлена, а результат не замінює виміряний заїзд. Потужність задається в механічних hp, маса — у кг з водієм і фактичним навантаженням. Зчеплення, перемикання, аеродинаміка й умови траси не моделюються.",
    "howItWorks": "W = маса в кг·2,2046226218, P — механічні hp. ET = 5,825·∛(W/P), секунди; V = 234·∛(P/W), mph; км/год = mph·1,609344. Чверть міжнародної милі становить 402,336 м. Обидва вводи додатні, всі вихідні величини скінченні й ненульові. Формула не переводить потужність на колінвалі в потужність на колесах.",
    "howToUse": [
      "Введіть додатну потужність у механічних hp; метричні PS є іншою одиницею.",
      "Введіть масу в кг з водієм і фактичним навантаженням без повторного додавання.",
      "Зберігайте однакове визначення потужності між сценаріями; час і швидкість є умовним наближенням без заявленої точності."
    ],
    "example": "150 hp і 1300 кг дають 15,6 секунди і близько 141 км/год на фініші.",
    "faq": [
      {
        "q": "Наскільки точна ця оцінка?",
        "a": "Підтвердженого діапазону похибки для цих коефіцієнтів немає. Значення не обіцяє збігу до 0,1 секунди й не є «ідеальним» часом. Для перевірки потрібні реальні заїзди з відповідними масою, потужністю й умовами."
      },
      {
        "q": "Чому кубічний корінь?",
        "a": "Кубічний корінь є частиною заданого емпіричного наближення, а не універсальним законом для будь-якого розгону. P у формулі означає механічні hp; автоматичної поправки між потужністю на колесах і на валу немає. Для порівняння зберігайте однакове визначення потужності."
      },
      {
        "q": "Що ще впливає на результат?",
        "a": "На реальний заїзд впливають старт, зчеплення, перемикання, аеродинаміка, покриття та умови. Два авто з однаковим відношенням потужності до маси можуть мати різні часи; ця модель не розділяє ці чинники."
      },
      {
        "q": "Чому саме чверть милі?",
        "a": "Чверть міжнародної милі дорівнює 402,336 м. Тут час і швидкість задані емпіричними формулами для цієї дистанції; вони не переносяться автоматично на іншу довжину або інший режим старту."
      }
    ]
  },
  "de": {
    "longDescription": "Bedingte Schätzung von Zeit und Endgeschwindigkeit auf der Viertelmeile aus Masse und Leistung. Verwendet wird der übernommene empirische Koeffizientensatz 5,825 und 234; dessen ursprüngliche Kalibrierung ist nicht bestätigt, daher wird keine Genauigkeit angegeben. Das Ergebnis ersetzt keine gemessene Fahrt. Die Leistung steht in mechanischen hp, die Masse in kg mit Fahrer und tatsächlicher Last. Traktion, Schaltvorgänge, Aerodynamik und Strecke sind nicht modelliert.",
    "howItWorks": "W = kg·2,2046226218, P steht in mechanischen hp. ET = 5,825·∛(W/P) Sekunden; V = 234·∛(P/W) mph; km/h = mph·1,609344. Eine Viertelmeile der internationalen Meile beträgt 402,336 m. Beide Eingaben sind positiv, sämtliche Ausgaben müssen endlich und ungleich null sein. Es gibt keine Umrechnung von Kurbelwellen- auf Radleistung.",
    "howToUse": [
      "Gib eine positive Leistung in mechanischen hp ein; metrische PS sind eine andere Einheit.",
      "Gib die Masse in kg mit Fahrer und tatsächlicher Last ein, ohne diese doppelt zu zählen.",
      "Verwende dieselbe Leistungsdefinition beim Szenariovergleich; Zeit und Geschwindigkeit sind bedingte Schätzungen ohne Genauigkeitszusage."
    ],
    "example": "150 hp und 1300 kg ergeben 15,6 Sekunden und rund 141 km/h am Ende der Bahn.",
    "faq": [
      {
        "q": "Warum stecken Traktion und Übersetzung nicht in der Formel?",
        "a": "Das ist die Grenze der Näherung mit zwei Eingaben. Start, Schlupf, Übersetzung, Luftwiderstand und Belag werden nicht bewertet; Autos mit gleichem Leistungs-Masse-Verhältnis können unterschiedliche Fahrten liefern."
      },
      {
        "q": "Wie genau ist das?",
        "a": "Für diesen Koeffizientensatz gibt es keinen bestätigten Fehlerbereich. Weder eine Übereinstimmung auf 0,1 Sekunden noch eine „ideale“ Zeit wird zugesichert. Prüfe ihn anhand echter Fahrten mit vergleichbarer Masse, Leistung und Bedingungen."
      },
      {
        "q": "Welche Leistungsangabe soll ich nehmen?",
        "a": "Das Feld verwendet mechanische hp, nicht metrische PS. Es gibt keine allgemeine Rad-zu-Kurbelwellen-Korrektur; ohne bestätigte Kalibrierung ist keine der beiden Grundlagen für jedes Auto als richtig zu erklären. Verwende bei Vergleichen dieselbe Leistungsdefinition."
      },
      {
        "q": "Wie ist die Endgeschwindigkeit zu lesen?",
        "a": "Hier ist die Geschwindigkeit eine weitere Ausgabe desselben Leistungs-Masse-Verhältnisses. Echte Zeit und Geschwindigkeit beschreiben verschiedene Aspekte einer Fahrt; der Rechner beweist keine Überlegenheit eines Werts und ermittelt daraus keine tatsächliche Leistung."
      }
    ]
  },
  "es": {
    "longDescription": "Estimación condicionada del tiempo y la velocidad final en un cuarto de milla a partir de masa y potencia. Usa los coeficientes empíricos heredados 5,825 y 234; no se ha verificado su calibración original, por lo que no se afirma un margen de precisión ni se sustituye una pasada medida. Introduce hp mecánicos y kg con conductor y carga real. No se modelan adherencia, cambios de marcha, aerodinámica ni condiciones de pista.",
    "howItWorks": "W = kg·2,2046226218 y P se expresa en hp mecánicos. ET = 5,825·∛(W/P) segundos; V = 234·∛(P/W) mph; km/h = mph·1,609344. Un cuarto de milla internacional son 402,336 m. Ambas entradas son positivas y todas las salidas deben ser finitas y distintas de cero. No hay corrección automática de potencia del cigüeñal a las ruedas.",
    "howToUse": [
      "Introduce potencia positiva en hp mecánicos; los PS métricos son otra unidad.",
      "Introduce kg con conductor y carga real, sin contarlos dos veces.",
      "Mantén la misma definición de potencia al comparar; tiempo y velocidad son estimaciones condicionadas sin precisión declarada."
    ],
    "example": "150 hp y 1300 kg dan 15,6 segundos y unos 141 km/h al cruzar la meta.",
    "faq": [
      {
        "q": "¿Por qué en la fórmula no aparecen la tracción ni las relaciones de cambio?",
        "a": "Es un límite de la aproximación con dos entradas. No evalúa salida, patinaje, relaciones, resistencia del aire ni superficie; coches con la misma relación potencia-masa pueden obtener tiempos distintos."
      },
      {
        "q": "¿Qué exactitud tiene?",
        "a": "No existe un intervalo de error verificado para estos coeficientes. No se promete coincidencia de 0,1 segundos ni un tiempo “ideal”. Contrasta con pasadas reales de masa, potencia y condiciones comparables."
      },
      {
        "q": "¿Qué cifra de potencia debo usar?",
        "a": "El campo usa hp mecánicos, no PS métricos. No hay una corrección universal de ruedas a cigüeñal y, sin calibración verificada, ninguna base puede declararse correcta para todos los coches. Mantén la misma definición de potencia al comparar."
      },
      {
        "q": "¿Cómo interpreto la velocidad final?",
        "a": "Aquí la velocidad es otra salida de la misma relación potencia-masa. Tiempo y velocidad reales describen aspectos distintos de una pasada, pero el calculador no demuestra que uno sea superior ni reconstruye la potencia real."
      }
    ]
  }
} satisfies Record<'ru' | 'en' | 'uk' | 'de' | 'es', Partial<CalculatorCopy>>;
