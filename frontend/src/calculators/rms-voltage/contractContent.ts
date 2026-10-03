// Individually authored subject contracts; primary reading and independent evidence are recorded for wave12.
export const contract = {
  "ru": {
    "longDescription": "Переведите положительные амплитуду, размах или RMS между собой для трёх заданных симметричных форм с нулевой постоянной составляющей: синуса, двухполярного меандра 50% и треугольника. Также показано среднее по модулю. Произвольная ШИМ, однополярные импульсы, постоянное смещение и обрезанный сигнал этим выбором форм не описываются.",
    "howToUse": [
      "Выберите, что известно: амплитуда, размах или RMS.",
      "Выберите одну из трёх симметричных форм без постоянной составляющей.",
      "Все напряжения вводятся в В; размах не равен амплитуде.",
      "Сверяйте показания приборов с их полосой, коэффициентом амплитуды и режимом AC/DC; результат не подбирает изоляцию или тип конденсатора."
    ],
    "howItWorks": "U_RMS=√((1/T)∫u²dt). Для пиков±A: U_RMS=A/k, Upp=2 A; k=√2 для синуса, 1 для меандра,√3 для треугольника. Среднее|u| равно 2 A/π, A и A/2 соответственно. В режиме RMS введённое действующее значение сохраняется, из него выводятся остальные величины.",
    "example": "Синус с амплитудой 311 В даёт 219,91 В RMS, размах 622 В и среднее|u|197,99 В. Двухполярный меандр с размахом 10 В даёт 5 В RMS. Ноль математически возможен, но этот интерфейс принимает только положительное напряжение для пересчёта ненулевого сигнала.",
    "faq": [
      {
        "q": "Как связаны 220 В RMS и амплитуда синуса?",
        "a": "Для синуса A=√2·U_RMS: 220 В RMS соответствуют 311,127 В амплитуды. Это числовое тождество для выбранного сигнала, а не универсальная норма сети или готовое требование к изоляции."
      },
      {
        "q": "Зачем нужна форма сигнала?",
        "a": "RMS зависит от формы и постоянного смещения. Коэффициенты страницы действуют для синуса, симметричного меандра 50% и треугольника с нулевым средним. Однополярная ШИМ требует других коэффициентов."
      },
      {
        "q": "Чем отличаются методы измерения мультиметра?",
        "a": "Средневыпрямляющий прибор с синусной калибровкой масштабирует среднее|u|. True RMS использует RMS-метод, но точность зависит от полосы, коэффициента амплитуды и AC/DC-связи прибора; цена сама по себе метод не определяет."
      },
      {
        "q": "Что такое размах?",
        "a": "Размах Upp=max(u)−min(u). Для пиков±A он равен 2 A. Осциллограф может показывать разные измерения: проверьте выбранную подпись Vpp, peak или RMS."
      }
    ],
    "disclaimer": "Три симметричные формы без DC; не модель произвольной ШИМ, измерительного прибора или выбора изоляции."
  },
  "en": {
    "longDescription": "Convert a positive peak, peak-to-peak or RMS voltage for three symmetric zero-DC waveforms: sine, bipolar 50% square wave and triangle. The mean absolute value is also shown. Arbitrary PWM, unipolar pulses, DC offsets and clipped waveforms are not described by these shape choices.",
    "howToUse": [
      "Choose the known measure: peak, peak-to-peak or RMS.",
      "Choose one of the three symmetric shapes without DC.",
      "Enter volts; peak-to-peak is not peak amplitude.",
      "Check meter bandwidth, crest factor and AC/DC coupling; the result does not select insulation or capacitor type."
    ],
    "howItWorks": "U_RMS=√((1/T)∫u²dt). For peaks±A: U_RMS=A/k and Upp=2 A, where k=√2 for sine, 1 for square and √3 for triangle. Mean|u| is 2 A/π, A and A/2 respectively. RMS mode preserves the entered RMS voltage and derives the other values.",
    "example": "A 311 V sine peak gives 219.91 V RMS, 622 V peak-to-peak and 197.99 V mean|u|. A bipolar square wave with 10 V peak-to-peak gives 5 V RMS. Zero is mathematically possible, but this interface accepts positive voltage for a nonzero signal conversion.",
    "faq": [
      {
        "q": "How does 220 V RMS relate to sine amplitude?",
        "a": "For a sine A=√2·U_RMS: 220 V RMS corresponds to 311.127 V peak. This is a numerical identity for the specified signal, not a universal mains standard or a complete insulation requirement."
      },
      {
        "q": "Why does the waveform matter?",
        "a": "RMS depends on shape and DC offset. The listed factors apply to zero-mean sine, symmetric 50% bipolar square and triangle. Unipolar PWM requires different factors."
      },
      {
        "q": "How do multimeter measurement methods differ?",
        "a": "An average-responding, sine-calibrated meter scales mean|u|. A true-RMS instrument uses an RMS method, but accuracy still depends on bandwidth, crest factor and AC/DC coupling; price alone does not identify the method."
      },
      {
        "q": "What is peak-to-peak?",
        "a": "Peak-to-peak is max(u)−min(u). For peaks±A it is 2 A. An oscilloscope can display multiple measurements, so check whether its readout is Vpp, peak or RMS."
      }
    ],
    "disclaimer": "Three symmetric zero-DC shapes; not arbitrary PWM, a meter model or insulation selection."
  },
  "uk": {
    "longDescription": "Перераховуйте додатні амплітуду, розмах або RMS для трьох симетричних форм без постійної складової: синуса, двополярного меандра 50% і трикутника. Також показано середнє за модулем. Довільна ШІМ, однополярні імпульси, зміщення DC і обрізаний сигнал не описуються цим вибором форм.",
    "howToUse": [
      "Виберіть відому величину: амплітуда, розмах чи RMS.",
      "Виберіть симетричну форму без постійної складової.",
      "Вводьте В; розмах не дорівнює амплітуді.",
      "Звіряйте смугу, коефіцієнт амплітуди та AC/DC-режим приладу; тип ізоляції чи конденсатора тут не підбирається."
    ],
    "howItWorks": "U_RMS=√((1/T)∫u²dt). Для піків±A: U_RMS=A/k, Upp=2 A; k=√2 для синуса, 1 для меандра,√3 для трикутника. Середнє|u| дорівнює 2 A/π, A та A/2. У режимі RMS введене діюче значення зберігається, інші величини виводяться з нього.",
    "example": "Амплітуда синуса 311 В дає 219,91 В RMS, розмах 622 В і середнє|u|197,99 В. Двополярний меандр із розмахом 10 В дає 5 В RMS. Нуль можливий математично, але цей інтерфейс приймає додатну напругу для перерахунку ненульового сигналу.",
    "faq": [
      {
        "q": "Чому використовують діюче значення?",
        "a": "На сталому активному опорі середня потужність U_RMS²/R така сама, як від відповідної постійної напруги. Це визначення RMS; реактивні кола також потребують фази струму й напруги."
      },
      {
        "q": "Чому у меандра коефіцієнт дорівнює одиниці?",
        "a": "Симетричний двополярний меандр 50% весь час має|u|=A, отже середній квадрат A² і RMS=A. Однополярний імпульс чи інша частка заповнення — інший сигнал."
      },
      {
        "q": "Що покаже мультиметр?",
        "a": "Середньовипрямлювальний прилад із синусною калібровкою масштабує середнє|u|. True RMS також має обмеження смуги, коефіцієнта амплітуди та AC/DC-зв’язку. Метод не визначається лише ціною приладу."
      },
      {
        "q": "Для чого потрібна амплітуда?",
        "a": "Амплітуда описує піковий рівень заданої форми. Однак номінал, клас безпеки конденсатора та ізоляція залежать від інших умов, імпульсів і паспорта. За однією амплітудою їх не вибирають."
      }
    ],
    "disclaimer": "Три симетричні форми без DC; не модель довільної ШІМ, приладу чи вибору ізоляції."
  },
  "de": {
    "longDescription": "Rechne positive Amplitude, Spitze-Spitze oder Effektivspannung für drei symmetrische Signalformen ohne Gleichanteil um: Sinus, bipolares 50%-Rechteck und Dreieck. Angezeigt wird auch der Mittelwert des Betrags. Beliebige PWM, unipolare Pulse, DC-Versatz und abgeschnittene Signale sind damit nicht beschrieben.",
    "howToUse": [
      "Bekannte Größe wählen: Spitze, Spitze-Spitze oder effektiv.",
      "Eine symmetrische Form ohne Gleichanteil wählen.",
      "Volt eingeben; Spitze-Spitze ist nicht die Amplitude.",
      "Bandbreite, Scheitelfaktor und AC/DC-Kopplung des Messgeräts prüfen; Isolation und Kondensatortyp werden nicht gewählt."
    ],
    "howItWorks": "U_eff=√((1/T)∫u²dt). Für Spitzen±A gilt U_eff=A/k und Upp=2 A: k=√2 beim Sinus, 1 beim Rechteck,√3 beim Dreieck. Mittelwert|u| ist 2 A/π, A beziehungsweise A/2. Der Effektivwertmodus erhält die Eingabe und leitet die übrigen Werte ab.",
    "example": "311 V Sinusamplitude ergeben 219,91 V effektiv, 622 V Spitze-Spitze und 197,99 V Mittelwert|u|. Ein bipolares Rechteck mit 10 V Spitze-Spitze ergibt 5 V effektiv. Null wäre mathematisch möglich, wird im gewählten Interface für positive Signalumrechnung aber nicht angenommen.",
    "faq": [
      {
        "q": "Wie hängen 220 V effektiv und die Sinusamplitude zusammen?",
        "a": "Beim Sinus gilt A=√2·U_eff: 220 V effektiv entsprechen 311,127 V Spitze. Dies ist eine Identität für das gewählte Signal, kein universeller Netzstandard oder fertige Isolationsanforderung."
      },
      {
        "q": "Warum wird die Signalform benötigt?",
        "a": "Effektivwert hängt von Form und Gleichanteil ab. Die Faktoren gelten für Sinus, symmetrisches bipolares 50%-Rechteck und Dreieck ohne Gleichanteil. Unipolare PWM braucht andere Faktoren."
      },
      {
        "q": "Wie unterscheiden sich Multimeterverfahren?",
        "a": "Ein mittelwertbildendes, sinuskalibriertes Gerät skaliert den Mittelwert|u|. Auch True RMS hat Bandbreiten-, Scheitelfaktor- und AC/DC-Grenzen. Der Preis bestimmt das Messverfahren nicht."
      },
      {
        "q": "Was bedeutet Spitze-Spitze?",
        "a": "Spitze-Spitze ist max(u)−min(u); bei±A also 2 A. Ein Oszilloskop bietet mehrere Messgrößen: die Anzeige auf Vpp, Spitze oder RMS prüfen."
      }
    ],
    "disclaimer": "Drei symmetrische Formen ohne Gleichanteil; keine beliebige PWM, Messgerätemodell oder Isolationsauslegung."
  },
  "es": {
    "longDescription": "Convierte valores positivos de pico, pico a pico o RMS para tres formas simétricas sin componente continua: seno, cuadrada bipolar al 50% y triangular. También se muestra la media del valor absoluto. PWM arbitraria, pulsos unipolares, desplazamiento DC y señales recortadas no están descritos por estas opciones.",
    "howToUse": [
      "Selecciona la medida conocida: pico, pico a pico o RMS.",
      "Elige una de las tres formas simétricas sin continua.",
      "Introduce voltios; pico a pico no es amplitud de pico.",
      "Revisa banda, factor de cresta y acoplamiento AC/DC del instrumento; no se seleccionan aislamiento o tipo de condensador."
    ],
    "howItWorks": "U_RMS=√((1/T)∫u²dt). Para picos±A: U_RMS=A/k yUpp=2 A; k=√2 para seno, 1 para cuadrada y√3 para triangular. La media|u| es 2 A/π, A yA/2 respectivamente. El modo RMS conserva la tensión eficaz introducida y deriva los demás valores.",
    "example": "Un pico sinusoidal de 311 V da 219,91 V RMS, 622 V pico a pico y 197,99 V de media|u|. Una cuadrada bipolar con 10 V pico a pico da 5 V RMS. Cero es posible matemáticamente, pero esta interfaz acepta tensión positiva para convertir una señal no nula.",
    "faq": [
      {
        "q": "¿Cómo se relacionan 220 V RMS y el pico de un seno?",
        "a": "Para seno A=√2·U_RMS: 220 V RMS equivalen a 311,127 V de pico. Es una identidad de la señal elegida, no una norma universal de red ni un requisito completo de aislamiento."
      },
      {
        "q": "¿Por qué importa la forma de onda?",
        "a": "RMS depende de forma y componente continua. Los factores corresponden a seno, cuadrada bipolar simétrica al 50% y triangular sin media. PWM unipolar requiere otros factores."
      },
      {
        "q": "¿En qué difieren los métodos del multímetro?",
        "a": "Un instrumento de respuesta media calibrado para seno escala la media|u|. True RMS también tiene límites de banda, factor de cresta y acoplamiento AC/DC. El precio no determina el método."
      },
      {
        "q": "¿Qué es pico a pico?",
        "a": "Pico a pico es max(u)−min(u); para±A equivale a 2 A. Un osciloscopio puede mostrar distintas medidas: comprueba si indica Vpp, pico o RMS."
      }
    ],
    "disclaimer": "Tres formas simétricas sin DC; no modela PWM arbitraria, instrumento ni selección de aislamiento."
  }
};
