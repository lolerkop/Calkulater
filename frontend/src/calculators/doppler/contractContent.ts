// Individually reviewed against all five actual188 native bodies; human editorial review pending.
export const contract = {
  "ru": {
    "longDescription": "Рассчитайте классический сдвиг частоты для движения вдоль линии источник–наблюдатель в покоящейся среде. Обе скорости задаются относительно среды: положительное число означает движение навстречу другой стороне. Источник здесь дозвуковой по модулю, а удаляющийся наблюдатель должен двигаться медленнее приходящей волны. Для света и произвольной траектории прохождения мимо нужна другая постановка.",
    "howToUse": [
      "Скорость навстречу — положительная, прочь — отрицательная. Так одно поле заменяет выбор между приближением и удалением.",
      "Движение наблюдателя и движение источника входят в формулу по-разному, поэтому поля раздельные.",
      "Используйте скорость волны именно в выбранной среде и её условиях. Значение 343 м/с — пример для воздуха, а не универсальная постоянная."
    ],
    "howItWorks": "f′ = f · (c + v_набл) / (c − v_ист).",
    "example": "Сирена 440 Гц, приближающаяся со скоростью 20 м/с, слышна как 467,24 Гц.",
    "faq": [
      {
        "q": "Почему тон падает именно при проезде?",
        "a": "При сближении вдоль одной линии частота выше, при удалении — ниже. При проезде на ненулевом расстоянии направление к наблюдателю меняется плавно, поэтому и доплеровский сдвиг обычно меняется плавно. Идеальный скачок относится к модели прямолинейного прохождения через точку наблюдения; этот калькулятор задаёт мгновенные продольные скорости."
      },
      {
        "q": "Почему у источника и наблюдателя разные формулы?",
        "a": "Движение наблюдателя меняет скорость, с которой он встречает волны, и стоит в числителе. Движение источника меняет саму длину волны в среде и стоит в знаменателе. При малых скоростях разница незаметна, при больших — существенна."
      },
      {
        "q": "Что происходит на скорости волны?",
        "a": "Знаменатель обращается в нуль, и формула перестаёт что-либо описывать. Физически волны не успевают уйти от источника и складываются в ударный фронт — расчёт такие данные отвергает."
      },
      {
        "q": "Годится ли это для света?",
        "a": "Для света эта формула не используется: она различает движение относительно материальной среды. Нужен релятивистский эффект Доплера с явно заданной геометрией. Ультразвук или радар с отражением также требуют учёта обратного пути сигнала."
      }
    ],
    "disclaimer": "Одномерная классическая волна в покоящейся среде; |vист|<c и vнабл>−c. Не релятивистский Доплер и не расчёт отражённого сигнала радара."
  },
  "en": {
    "longDescription": "Calculate the classical frequency shift for motion along the source–observer line in a stationary medium. Both velocities are relative to the medium; a positive value points towards the other party. This model uses a subsonic source, and a receding observer must move slower than the arriving wave. Light and an arbitrary passing trajectory require a different model.",
    "howToUse": [
      "Speed towards is positive, away is negative. One field replaces the choice between approaching and receding.",
      "Observer motion and source motion enter the formula differently, so the fields are separate.",
      "Use wave speed for the actual medium and conditions. The 343 m/s default is an air example, not a universal constant."
    ],
    "howItWorks": "f′ = f · (c + v_obs) / (c − v_src).",
    "example": "A 440 Hz siren approaching at 20 m/s is heard as 467.24 Hz.",
    "faq": [
      {
        "q": "Why does the tone drop exactly at the pass?",
        "a": "Approach on one line raises frequency and recession lowers it. Passing at a nonzero distance changes the line-of-sight direction smoothly, so the shift normally changes smoothly too. An ideal jump belongs to a one-dimensional pass through the observation point; this calculator uses instantaneous longitudinal velocities."
      },
      {
        "q": "Why do source and observer get different formulas?",
        "a": "Observer motion changes the rate at which they meet the waves and sits in the numerator. Source motion changes the wavelength in the medium itself and sits in the denominator. At low speeds the difference is invisible; at high speeds it matters."
      },
      {
        "q": "What happens at the wave speed?",
        "a": "The denominator goes to zero and the formula stops describing anything. Physically the waves cannot get away from the source and pile into a shock front — the calculation rejects such inputs."
      },
      {
        "q": "Does this work for light?",
        "a": "Do not use this formula for light: it distinguishes motion relative to a material medium. Use relativistic Doppler with specified geometry. Reflected ultrasound or radar also requires the return path of the signal."
      }
    ],
    "disclaimer": "One-dimensional classical wave in a stationary medium; |vsource|<c and vobserver>−c. Not relativistic Doppler or a reflected radar-signal calculation."
  },
  "uk": {
    "longDescription": "Розрахуйте класичний зсув частоти для руху вздовж лінії джерело–спостерігач у нерухомому середовищі. Обидві швидкості задані відносно середовища: додатне число спрямоване назустріч іншій стороні. Джерело тут дозвукове за модулем, а спостерігач має віддалятися повільніше від хвилі, що приходить. Для світла й довільної траєкторії проїзду потрібна інша модель.",
    "howToUse": [
      "Введіть частоту джерела.",
      "Введіть швидкість джерела: додатна означає наближення.",
      "За потреби задайте швидкість спостерігача та швидкість хвилі в середовищі.",
      "Беріть швидкість хвилі для реального середовища та його умов. 343 м/с — приклад для повітря, а не універсальна стала."
    ],
    "howItWorks": "Частота, яку чує спостерігач, рахується як f′ = f · (c + v_спост) / (c − v_джер), де c — швидкість звуку в середовищі. Рух джерела і рух спостерігача входять по-різному: перший змінює довжину хвилі, другий — швидкість зустрічі з нею.",
    "example": "Сирена 440 Гц, що наближається зі швидкістю 20 м/с, чується як 467,24 Гц. Після проїзду повз та сама сирена звучатиме як 415,8 Гц.",
    "faq": [
      {
        "q": "Чому рух джерела й спостерігача входять по-різному?",
        "a": "Бо джерело, рухаючись, змінює саму довжину хвилі в середовищі, а спостерігач лише швидше або повільніше зустрічає готові хвилі. Для звуку ця різниця принципова — середовище виділене."
      },
      {
        "q": "Чому тон різко змінюється саме в момент проїзду?",
        "a": "Наближення вздовж однієї лінії підвищує частоту, віддалення знижує. При проїзді на ненульовій відстані напрямок до спостерігача змінюється плавно, тому зсув зазвичай також плавний. Ідеальний стрибок належить одновимірному проходженню через точку спостереження; тут задані миттєві поздовжні швидкості."
      },
      {
        "q": "Чи працює ефект Доплера для світла?",
        "a": "Для світла цю формулу не застосовують: вона розрізняє рух відносно матеріального середовища. Потрібен релятивістський Доплер із заданою геометрією. Відбитий ультразвук або радар також потребують урахування зворотного шляху сигналу."
      },
      {
        "q": "Де ефект Доплера застосовують на практиці?",
        "a": "У радарах швидкості, метеорології, ультразвуковій діагностиці кровотоку та в астрономії. Скрізь вимірюють саме зсув частоти, а з нього виводять швидкість."
      }
    ],
    "disclaimer": "Одновимірна класична хвиля в нерухомому середовищі; |vджер|<c та vспост>−c. Не релятивістський Доплер і не розрахунок відбитого радарного сигналу."
  },
  "de": {
    "longDescription": "Berechne die klassische Frequenzverschiebung bei Bewegung entlang der Linie Quelle–Beobachter in einem ruhenden Medium. Beide Geschwindigkeiten gelten relativ zum Medium; positive Werte zeigen auf die jeweils andere Seite zu. Die Quelle ist in diesem Modell im Betrag langsamer als die Welle; ein sich entfernender Beobachter darf sie nicht überholen. Licht und beliebige Vorbeifahrtbahnen benötigen ein anderes Modell.",
    "howToUse": [
      "Auf dich zu ist positiv, von dir fort negativ. Ein Feld ersetzt die Wahl zwischen Annäherung und Entfernung.",
      "Die Bewegung des Zuhörers und die der Quelle gehen verschieden in die Formel ein, die Felder sind deshalb getrennt.",
      "Die Geschwindigkeit der Quelle kann die Wellengeschwindigkeit nicht erreichen — jenseits dieser Grenze beginnt eine Stoßwelle.",
      "Verwende die Wellengeschwindigkeit des tatsächlichen Mediums unter seinen Bedingungen. Der Vorgabewert 343 m/s ist ein Luftbeispiel, keine universelle Konstante."
    ],
    "howItWorks": "f′ = f · (c + v_Zuhörer) / (c − v_Quelle).",
    "example": "Eine Sirene mit 440 Hz, die sich mit 20 m/s nähert, wird als 467,24 Hz gehört.",
    "faq": [
      {
        "q": "Warum fällt der Ton genau beim Vorbeifahren?",
        "a": "Annäherung auf einer Linie erhöht die Frequenz, Entfernung senkt sie. Bei einer Vorbeifahrt mit Abstand ändert sich die Sichtlinie stetig und damit gewöhnlich auch die Verschiebung. Ein idealer Sprung gehört zum eindimensionalen Durchgang durch den Beobachtungspunkt; hier werden momentane Längsgeschwindigkeiten eingegeben."
      },
      {
        "q": "Warum bekommen Quelle und Zuhörer verschiedene Formeln?",
        "a": "Die Bewegung des Zuhörers ändert die Rate, mit der er den Wellen begegnet, und steht im Zähler. Die Bewegung der Quelle ändert die Wellenlänge im Medium selbst und steht im Nenner. Bei niedrigen Geschwindigkeiten ist der Unterschied unsichtbar; bei hohen zählt er."
      },
      {
        "q": "Was passiert bei der Wellengeschwindigkeit?",
        "a": "Der Nenner geht auf null, und die Formel beschreibt nichts mehr. Physikalisch kommen die Wellen der Quelle nicht mehr davon und stauen sich zu einer Stoßfront — die Rechnung weist solche Eingaben ab."
      },
      {
        "q": "Gilt das auch für Licht?",
        "a": "Für Licht wird diese Formel nicht verwendet: Sie unterscheidet Bewegungen relativ zu einem materiellen Medium. Dafür ist relativistischer Doppler mit festgelegter Geometrie nötig. Bei reflektiertem Ultraschall oder Radar zählt zusätzlich der Rückweg des Signals."
      }
    ],
    "disclaimer": "Eindimensionale klassische Welle im ruhenden Medium; |vQuelle|<c und vBeobachter>−c. Kein relativistischer Doppler und keine Berechnung reflektierter Radarsignale."
  },
  "es": {
    "longDescription": "Calcula el desplazamiento clásico de frecuencia para el movimiento sobre la línea fuente–observador en un medio en reposo. Ambas velocidades se refieren al medio; un valor positivo apunta hacia la otra parte. Esta fuente es subsónica en módulo y un observador que se aleja debe ir más lento que la onda que llega. La luz y una trayectoria arbitraria de paso requieren otro modelo.",
    "howToUse": [
      "La velocidad de acercamiento es positiva y la de alejamiento, negativa. Un solo campo sustituye a la elección entre acercarse y alejarse.",
      "El movimiento del observador y el de la fuente entran en la fórmula de forma distinta, así que los campos están separados.",
      "Usa la velocidad de la onda en el medio y las condiciones reales. El valor inicial 343 m/s es un ejemplo para aire, no una constante universal."
    ],
    "howItWorks": "f′ = f · (c + v_obs) / (c − v_fuente).",
    "example": "Una sirena de 440 Hz que se acerca a 20 m/s se oye como 467,24 Hz.",
    "faq": [
      {
        "q": "¿Por qué el tono baja justo al pasar?",
        "a": "Acercarse sobre una línea eleva la frecuencia y alejarse la reduce. Al pasar con una distancia lateral, la línea de visión cambia suavemente y normalmente también el desplazamiento. El salto ideal corresponde al paso unidimensional por el punto de observación; aquí se introducen velocidades longitudinales instantáneas."
      },
      {
        "q": "¿Por qué la fuente y el observador tienen fórmulas distintas?",
        "a": "El movimiento del observador cambia el ritmo con que se encuentra con las ondas y va en el numerador. El movimiento de la fuente cambia la longitud de onda en el propio medio y va en el denominador. A velocidades bajas la diferencia es invisible; a velocidades altas importa."
      },
      {
        "q": "¿Qué ocurre a la velocidad de la onda?",
        "a": "El denominador se hace cero y la fórmula deja de describir nada. Físicamente las ondas no pueden alejarse de la fuente y se apilan en un frente de choque: el cálculo rechaza esos datos."
      },
      {
        "q": "¿Vale para la luz?",
        "a": "No uses esta fórmula para luz: distingue el movimiento respecto de un medio material. Hace falta el Doppler relativista con una geometría definida. El ultrasonido o radar reflejado también requiere incluir el trayecto de vuelta."
      }
    ],
    "disclaimer": "Onda clásica unidimensional en un medio en reposo; |vfuente|<c y vobservador>−c. No calcula Doppler relativista ni una señal de radar reflejada."
  }
};
