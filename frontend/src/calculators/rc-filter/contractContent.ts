// Individually authored subject contracts; primary reading and independent evidence are recorded for wave12.
export const contract = {
  "ru": {
    "longDescription": "Свяжите постоянную времени с частотой среза одного идеального RC-звена. Сопротивление вводится в Ом, ёмкость в нФ. Показанные 5τ означают достижение 99,3262% конечного напряжения при зарядке с нуля, а не полный заряд. Модель предполагает идеальное питание и отсутствие выходной нагрузки; сопротивление источника и нагрузки меняет поведение.",
    "howToUse": [
      "Вводите сопротивление в Ом: 10 кОм=10000 Ом.",
      "Ёмкость вводите в нФ: 0,1 мкФ=100 нФ.",
      "Проверьте, что источник и подключённая нагрузка не добавляют значимых сопротивлений.",
      "Для фильтра выход с C означает нижние частоты, с R — верхние; топология не выбирается и полная характеристика не строится."
    ],
    "howItWorks": "τ=R·C, fс=1/(2πRC), C=CнФ·10⁻⁹ Ф. Зарядка с нуля: Uc(t)=U∞(1−e^(−t/τ)); разрядка: Uc(t)=U0·e^(−t/τ). R, C>0. Для ненагруженного первого порядка на fс модуль передачи 1/√2, то есть−3,0103 дБ.",
    "example": "R=10000 Ом и C=100 нФ дают τ=0,001 с, fс=159,15 Гц и 5τ=0,005 с. 1000 Ом и 1000 нФ дают те же времена и частоту. Для остатка 1% нужно−τ·ln(0,01)=4,60517τ; конечного момента абсолютно полного заряда нет.",
    "faq": [
      {
        "q": "Почему разные пары R и C дают одну частоту?",
        "a": "Потому что в формулу входит только произведение R·C. 10 кОм со 100 нФ и 1 кОм с 1000 нФ — одно и то же произведение, а значит одна и та же частота среза и одна и та же постоянная времени."
      },
      {
        "q": "Чем частота среза отличается от границы полосы?",
        "a": "Срез не является резкой границей. Модуль передачи равен 1/√2 от уровня полосы, то есть−3,0103 дБ. «Половина мощности» требует сравнения на одинаковом сопротивлении. 20 дБ/декаду — асимптотический наклон, не точная потеря от любой частоты."
      },
      {
        "q": "Что показывает время заряда?",
        "a": "За τ достигается 63,2121%, за 5τ —99,3262%, остаток 0,6738%. Нужное время установления определяется допустимой ошибкой: t=−τlnδ. Пять τ — выбранный ориентир, а не полный заряд."
      },
      {
        "q": "Годится ли расчёт для фильтра второго порядка?",
        "a": "Это модель одного пассивного RC-полюса. Для второго порядка нужны его топология и параметры; непосредственное каскадирование пассивных звеньев также вызывает взаимную нагрузку."
      }
    ],
    "disclaimer": "Идеальное ненагруженное RC-звено первого порядка; 5τ —99,3262%, не полный заряд.",
    "seoDescription": "Рассчитайте частоту среза и постоянную времени идеального RC-звена по Ом и нФ. Показано 5τ для зарядки до 99,3262% конечного напряжения."
  },
  "en": {
    "longDescription": "Connect the time constant with cutoff frequency for one ideal RC stage. Resistance is entered in Ω and capacitance in nF. The displayed 5τ reaches 99.3262% of final voltage when charging from zero, not complete charge. An ideal source and no output loading are assumed; source and load resistances can alter the response.",
    "howToUse": [
      "Enter Ω: 10 kΩ means 10000 Ω.",
      "Enter nF: 0.1 µF means 100 nF.",
      "Check that source and attached load do not add significant resistance.",
      "Output across C gives low-pass and across R high-pass; the tool does not select topology or plot the response."
    ],
    "howItWorks": "τ=R·C, fc=1/(2πRC), C=CnF·10⁻⁹ F. Charging from zero: Uc(t)=U∞(1−e^(−t/τ)); discharge: Uc(t)=U0·e^(−t/τ). R, C>0. An unloaded first-order filter has transfer magnitude 1/√2 at fc, or−3.0103 dB.",
    "example": "R=10000 Ω and C=100 nF give τ=0.001 s, fc=159.15 Hz and 5τ=0.005 s. 1000 Ω and 1000 nF give the same times and cutoff. A 1% residual needs−τ·ln(0.01)=4.60517τ; complete charge has no finite arrival time.",
    "faq": [
      {
        "q": "Why do different R and C pairs give the same frequency?",
        "a": "Because only the product R·C enters the formula. 10 kΩ with 100 nF and 1 kΩ with 1000 nF are the same product, hence the same cutoff frequency and the same time constant."
      },
      {
        "q": "How does cutoff differ from the edge of the passband?",
        "a": "Cutoff is not a sharp boundary. Transfer magnitude is 1/√2 of passband level, or−3.0103 dB. Half-power wording needs an equal-resistance comparison. 20 dB/decade is an asymptotic slope, not an exact drop from any starting frequency."
      },
      {
        "q": "What does the settling time show?",
        "a": "One τ reaches 63.2121%; 5τ reaches 99.3262%, leaving 0.6738%. Required settling time follows the allowed error: t=−τlnδ. Five τ is a chosen reference, not complete charge."
      },
      {
        "q": "Does this work for a second-order filter?",
        "a": "The model has one passive RC pole. A second-order response requires its own topology and parameters; directly cascaded passive stages also load each other."
      }
    ],
    "disclaimer": "Ideal unloaded first-order RC stage; 5τ means 99.3262%, not complete charge."
  },
  "uk": {
    "longDescription": "Пов’яжіть постійну часу з частотою зрізу однієї ідеальної RC-ланки. Опір вводиться в Ом, ємність у нФ. Показані 5τ означають 99,3262% кінцевої напруги за заряджання від нуля, не повний заряд. Припускаються ідеальне джерело та відсутнє вихідне навантаження; опір джерела й навантаження змінює результат.",
    "howToUse": [
      "Вводьте Ом: 10 кОм означає 10000 Ом, не 10.",
      "Ємність у нФ: 0,1 мкФ=100 нФ.",
      "Перевірте вплив опору джерела та навантаження.",
      "Вихід із C дає нижні частоти, з R — верхні; вибору топології та графіка тут немає."
    ],
    "howItWorks": "τ=R·C, fс=1/(2πRC), C=CнФ·10⁻⁹ Ф. Заряджання від нуля: Uc(t)=U∞(1−e^(−t/τ)); розряджання: Uc(t)=U0·e^(−t/τ). R, C>0. На fс модуль передачі ненавантаженого першого порядку 1/√2, тобто−3,0103 дБ.",
    "example": "R=10000 Ом і C=100 нФ дають τ=0,001 с, fс=159,15 Гц і 5τ=0,005 с. 1000 Ом і 1000 нФ дають ті самі результати. Для залишку 1% потрібно 4,60517τ; абсолютно повний заряд не настає за скінченний час.",
    "faq": [
      {
        "q": "Що означає частота зрізу?",
        "a": "Це точка модуля передачі 1/√2 від рівня смуги, або−3,0103 дБ. Спад 20 дБ/декаду, приблизно 6 дБ/октаву, є асимптотичним. Половина потужності потребує однакового опору для порівняння."
      },
      {
        "q": "Що таке постійна часу?",
        "a": "За τ напруга досягає 63,2121%, за 5τ —99,3262%, залишок 0,6738%. Для допустимого відносного залишку δ час t=−τlnδ; процес не завершується точно за 5τ."
      },
      {
        "q": "Як зробити фільтр крутішим?",
        "a": "Потрібна модель вищого порядку з її топологією. Пасивні каскади навантажують один одного, тому просто повторити цей результат для кожної ланки недостатньо."
      },
      {
        "q": "Чим верхній фільтр відрізняється від нижнього?",
        "a": "У простій послідовній RC-схемі вихід із C — низькочастотний, із R — високочастотний. Ненавантажена частота зрізу та сама. Результат не враховує під’єднаного навантаження."
      }
    ],
    "disclaimer": "Ідеальна ненавантажена RC-ланка першого порядку; 5τ означає 99,3262%, не повний заряд."
  },
  "de": {
    "longDescription": "Verbinde Zeitkonstante und Grenzfrequenz eines idealen RC-Glieds. Widerstand wird in Ω und Kapazität in nF eingegeben. 5τ erreicht bei Ladung von null 99,3262% der Endspannung, keine vollständige Ladung. Vorausgesetzt sind ideale Quelle und unbelasteter Ausgang; Quellen- und Lastwiderstände verändern das Verhalten.",
    "howToUse": [
      "Ω eingeben: 10 kΩ entsprechen 10000 Ω.",
      "nF eingeben: 0,1 µF entsprechen 100 nF.",
      "Einfluss von Quellen- und Lastwiderstand prüfen.",
      "Ausgang an C ergibt Tiefpass, an R Hochpass; Topologieauswahl und Frequenzkurve fehlen."
    ],
    "howItWorks": "τ=R·C, fc=1/(2πRC), C=CnF·10⁻⁹ F. Laden ab null: Uc(t)=U∞(1−e^(−t/τ)); Entladen: Uc(t)=U0·e^(−t/τ). R, C>0. Der unbelastete Filter erster Ordnung hat bei fc den Übertragungsbetrag 1/√2, also−3,0103 dB.",
    "example": "R=10000 Ω und C=100 nF ergeben τ=0,001 s, fc=159,15 Hz und 5τ=0,005 s. 1000 Ω mit 1000 nF liefert dieselben Werte. Für 1% Rest sind 4,60517τ nötig; vollständig geladen wird der ideale Kondensator zu keinem endlichen Zeitpunkt.",
    "faq": [
      {
        "q": "Warum ergeben verschiedene Paare aus R und C dieselbe Frequenz?",
        "a": "Weil allein das Produkt R·C in die Formel eingeht. 10 kΩ mit 100 nF und 1 kΩ mit 1000 nF sind dasselbe Produkt, also dieselbe Grenzfrequenz und dieselbe Zeitkonstante."
      },
      {
        "q": "Wie unterscheidet sich die Grenzfrequenz vom Ende des Durchlassbereichs?",
        "a": "Die Grenzfrequenz ist keine harte Grenze. Der Betrag ist 1/√2 des Durchlasspegels, also−3,0103 dB. Halbe Leistung setzt einen Vergleich bei gleichem Widerstand voraus. 20 dB/Dekade ist eine asymptotische Steigung."
      },
      {
        "q": "Was zeigt die Einschwingzeit?",
        "a": "Nach τ sind 63,2121% erreicht, nach 5τ99,3262%; 0,6738% bleiben. Für zulässigen Rest δ gilt t=−τlnδ. Fünf τ ist ein Bezugswert, kein vollständiger Abschluss."
      },
      {
        "q": "Gilt das auch für ein Filter zweiter Ordnung?",
        "a": "Es wird ein passiver RC-Pol modelliert. Zweite Ordnung braucht eigene Topologie und Parameter; direkt kaskadierte passive Stufen belasten sich zusätzlich gegenseitig."
      }
    ],
    "disclaimer": "Ideales unbelastetes RC-Glied erster Ordnung; 5τ bedeutet 99,3262%, keine vollständige Ladung."
  },
  "es": {
    "longDescription": "Relaciona constante de tiempo y frecuencia de corte de una etapa RC ideal. Introduce resistencia en Ω y capacidad en nF. 5τ alcanza el 99,3262% de tensión final al cargar desde cero, no la carga completa. Se suponen fuente ideal y salida sin carga; resistencias de fuente y carga pueden modificar la respuesta.",
    "howToUse": [
      "Introduce Ω: 10 kΩ son 10000 Ω.",
      "Introduce nF: 0,1 µF son 100 nF.",
      "Comprueba el efecto de resistencias de fuente y carga.",
      "Salida sobre C significa paso bajo y sobre R paso alto; no se elige topología ni se dibuja su respuesta."
    ],
    "howItWorks": "τ=R·C, fc=1/(2πRC), C=CnF·10⁻⁹ F. Carga desde cero: Uc(t)=U∞(1−e^(−t/τ)); descarga: Uc(t)=U0·e^(−t/τ). R, C>0. El filtro de primer orden sin carga tiene módulo 1/√2 en fc, o−3,0103 dB.",
    "example": "R=10000 Ω y C=100 nF dan τ=0,001 s, fc=159,15 Hz y 5τ=0,005 s. 1000 Ω con 1000 nF dan lo mismo. Un residuo del 1% requiere 4,60517τ; la carga totalmente completa no ocurre en un tiempo finito.",
    "faq": [
      {
        "q": "¿Por qué parejas distintas de R y C dan la misma frecuencia?",
        "a": "Porque en la fórmula solo entra el producto R·C. 10 kΩ con 100 nF y 1 kΩ con 1000 nF son el mismo producto, y de ahí la misma frecuencia de corte y la misma constante de tiempo."
      },
      {
        "q": "¿En qué se diferencia el corte del borde de la banda pasante?",
        "a": "El corte no es una frontera abrupta. El módulo es 1/√2 del nivel de paso, es decir−3,0103 dB. Hablar de media potencia requiere comparar con igual resistencia. 20 dB/década es una pendiente asintótica."
      },
      {
        "q": "¿Qué indica el tiempo de establecimiento?",
        "a": "En τ se llega al 63,2121%; en 5τ al 99,3262%, con 0,6738% restante. Para residuo δ se requiere t=−τlnδ. Cinco τ es una referencia, no carga completa."
      },
      {
        "q": "¿Vale para un filtro de segundo orden?",
        "a": "Se modela un polo RC pasivo. Segundo orden necesita topología y parámetros propios; etapas pasivas conectadas directamente también se cargan entre sí."
      }
    ],
    "disclaimer": "Etapa RC ideal de primer orden sin carga; 5τ significa 99,3262%, no carga completa."
  }
};
