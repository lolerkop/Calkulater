// Individually authored subject contracts; primary reading and independent evidence are recorded for wave12.
export const contract = {
  "ru": {
    "longDescription": "Рассчитайте номинальные частоту, период и времена высокого и низкого уровней классической автоколебательной схемы NE 555. Конденсатор заряжается через R1+R2 и разряжается через R2, поэтому при положительных резисторах доля высокого уровня строго между 50% и 100%. На странице показана именно tH/T в процентах; термин «скважность» T/tH означает другую величину.",
    "howToUse": [
      "R1 соединяет Vcc с выводом 7; R2 — вывод 7 с узлом 2/6; C — этот узел с землёй.",
      "Введите сопротивления в кОм и ёмкость в нФ.",
      "Сравните частоту и нагрузки с документацией именно вашей версии 555.",
      "Диоды, триггер и другие изменения схемы требуют новых уравнений и здесь не моделируются."
    ],
    "howItWorks": "tH=ln 2·(R1+R2)C, tL=ln 2·R2 C, T=tH+tL, f=1/T, D=100·tH/T. R1, R2 вводятся в кОм, C в нФ; переход в Ом иФ учтён. Пороги идеализированы как Vcc/3 и 2 Vcc/3. Используется ln 2, а не округлённый коэффициент 1,44 для частоты. Округлённый результат может показывать 50% или 100%, хотя точная модель при положительных R1 и R2 не достигает этих границ.",
    "example": "10 кОм, 47 кОм и 100 нФ дают 138,72 Гц, 7,209 мс, tH=3,951 мс, tL=3,258 мс и D=54,808%. Если удвоить C, оба времени удвоятся, частота уменьшится вдвое, а D не изменится. При R1=0 формальный предел 50% существует, но ввод отклоняется: выбранная схема требует положительный R1.",
    "faq": [
      {
        "q": "Почему доля высокого уровня больше 50%?",
        "a": "Потому что конденсатор заряжается через R1 и R2, а разряжается только через R2. Время заряда всегда длиннее, и ровно пятьдесят процентов достигается лишь в пределе, когда R1 много меньше R2."
      },
      {
        "q": "Как получить долю высокого уровня меньше половины?",
        "a": "Потребуется другая схема формирования импульсов. Изменённые пути заряда/разряда или деление частоты могут менять D, но эти формулы относятся только к классической схеме без обходного диода."
      },
      {
        "q": "Почему в формуле стоит ln 2?",
        "a": "При номинальных порогах 1/3 и 2/3 питания экспоненциальный переход занимает RC·ln 2. Питание сокращается в идеальной формуле; реальная микросхема имеет конечные напряжения переключения, токи и зависимость времени от условий."
      },
      {
        "q": "Почему реальная частота отличается от расчётной?",
        "a": "Влияют допуски R, C, утечки, реальные пороги и напряжение разрядного ключа, питание, температура и нагрузка. Их границы берутся из паспортов компонентов. Расчёт не гарантирует частоту или работу вне допустимого режима."
      }
    ],
    "disclaimer": "Номинальная классическая схема NE 555 с идеальными порогами; не гарантия частоты, нагрузки или температурной стабильности.",
    "shortDescription": "Частота, период и доля высокого уровня классической схемы NE555 по двум резисторам и конденсатору.",
    "seoDescription": "Рассчитайте номинальные частоту, период, времена высокого и низкого уровня и долю высокого уровня классической автоколебательной схемы NE555."
  },
  "en": {
    "longDescription": "Calculate nominal frequency, period and high/low times of the classic NE 555 astable circuit. The capacitor charges through R1+R2 and discharges through R2, so positive resistors give a high-level fraction strictly between 50% and 100%. The displayed percentage is tH/T; the reciprocal T/tH is a different quantity.",
    "howToUse": [
      "R1 connects Vcc to pin 7; R2 connects pin 7 to the tied pins 2/6; C connects that node to ground.",
      "Enter resistance in kΩ and capacitance in nF.",
      "Compare frequency and loading with documentation for your specific 555 variant.",
      "Diodes, flip-flops and other circuit modifications need new timing equations and are not modelled."
    ],
    "howItWorks": "tH=ln 2·(R1+R2)C, tL=ln 2·R2 C, T=tH+tL, f=1/T, D=100·tH/T. Enter R1, R2 in kΩ and C in nF; conversion to Ω and F is internal. Ideal thresholds are Vcc/3 and 2 Vcc/3. Frequency uses ln 2 rather than the rounded 1.44 coefficient. The rounded display can show 50% or 100% even though the exact model with positive R1 and R2 does not reach either boundary.",
    "example": "10 kΩ, 47 kΩ and 100 nF give 138.72 Hz, 7.209 ms, tH=3.951 ms, tL=3.258 ms and D=54.808%. Doubling C doubles both times and halves frequency without changing D. R1=0 gives a formal 50% limit but is rejected because this selected circuit requires positive R1.",
    "faq": [
      {
        "q": "Why is the high-level fraction greater than 50%?",
        "a": "Because the capacitor charges through R1 and R2 but discharges through R2 alone. The charging time is always longer, and exactly fifty per cent is only approached in the limit where R1 is far smaller than R2."
      },
      {
        "q": "How can the high-level fraction be below half?",
        "a": "A different pulse-forming circuit is needed. Modified charging/discharging paths or frequency division can change D; these equations apply only to the classic circuit without a bypass diode."
      },
      {
        "q": "Why does ln 2 appear in the formula?",
        "a": "With nominal thresholds at 1/3 and 2/3 supply, the exponential transition takes RC·ln 2. Supply cancels in the ideal formula; real thresholds, discharge voltage and timing depend on operating conditions."
      },
      {
        "q": "Why does the real frequency differ?",
        "a": "R, C tolerances, leakage, actual thresholds, discharge-switch voltage, supply, temperature and loading matter. Component datasheets define their bounds; the calculation does not guarantee frequency or operation outside ratings."
      }
    ],
    "disclaimer": "Nominal classic NE 555 timing with ideal thresholds; no guaranteed frequency, load capability or temperature stability."
  },
  "uk": {
    "longDescription": "Обчисліть номінальні частоту, період і час високого та низького рівнів класичної автоколивальної схеми NE 555. Конденсатор заряджається через R1+R2, розряджається через R2. За додатних опорів частка високого рівня строго між 50% і 100%. Показано tH/T у відсотках; шпаруватість T/tH — інша величина.",
    "howToUse": [
      "R1 між Vcc і виводом 7; R2 між 7 і спільним вузлом 2/6; C між цим вузлом та землею.",
      "Вводьте кОм і нФ.",
      "Звіряйте частоту та навантаження з документацією конкретної версії 555.",
      "Діоди, тригери й інші зміни схеми потребують інших рівнянь і тут не моделюються."
    ],
    "howItWorks": "tH=ln 2·(R1+R2)C, tL=ln 2·R2 C, T=tH+tL, f=1/T, D=100·tH/T. R1, R2 у кОм, C у нФ; перехід у Ом та Ф враховано. Ідеальні пороги Vcc/3 і 2 Vcc/3. Для частоти використано ln 2, не округлений коефіцієнт 1,44. Округлений результат може показувати 50% чи 100%, хоча точна модель за додатних R1 і R2 не досягає цих меж.",
    "example": "10 кОм, 47 кОм і 100 нФ дають 138,72 Гц, 7,209 мс, tH=3,951 мс, tL=3,258 мс, D=54,808%. Подвоєння C подвоює часи й удвічі зменшує частоту, не змінюючи D. R1=0 формально дає 50%, але відхиляється: обрана схема потребує додатного R1.",
    "faq": [
      {
        "q": "Чому частка високого рівня більша за 50%?",
        "a": "Бо конденсатор заряджається через R1 і R2, а розряджається лише через R2. Час високого рівня завжди більший; наблизитися до половини можна, зробивши R1 набагато меншим за R2."
      },
      {
        "q": "Як отримати рівно 50% або менше?",
        "a": "Потрібна інша схема формування імпульсів. Зміна шляхів заряджання й розряджання або поділ частоти змінюють D, але наведені рівняння описують лише класичну схему без обхідного діода."
      },
      {
        "q": "Звідки у формулі ln 2?",
        "a": "За номінальних порогів 1/3 і 2/3 живлення експоненційний перехід триває RC·ln 2. Реальні пороги й напруга розрядного ключа не є ідеальними."
      },
      {
        "q": "Чи залежить частота від напруги живлення?",
        "a": "В ідеальній формулі живлення скорочується. Реальний NE 555 має паспортну залежність часу від напруги, температури, навантаження та розкиду компонентів; нульову залежність не гарантовано."
      }
    ],
    "disclaimer": "Номінальна класична схема NE 555 з ідеальними порогами; без гарантії частоти, навантаження чи температурної стабільності.",
    "shortDescription": "Частота, період і частка високого рівня класичної схеми NE555 за двома резисторами та конденсатором.",
    "seoDescription": "Розрахуйте номінальні частоту, період, час високого й низького рівнів та частку високого рівня класичної автоколивальної схеми NE555."
  },
  "de": {
    "longDescription": "Berechne nominale Frequenz, Periodendauer sowie High- und Low-Zeit der klassischen astabilen NE 555-Schaltung. Der Kondensator lädt über R1+R2 und entlädt über R2. Positive Widerstände ergeben einen High-Anteil strikt zwischen 50% und 100%. Angezeigt wird tH/T in Prozent, nicht dessen Kehrwert T/tH.",
    "howToUse": [
      "R1 liegt zwischen Vcc und Pin 7; R2 zwischen 7 und dem verbundenen Knoten 2/6; C zwischen diesem Knoten und Masse.",
      "Widerstände in kΩ, Kapazität in nF eingeben.",
      "Frequenz und Belastung mit den Angaben der konkreten 555-Version vergleichen.",
      "Dioden, Flipflops und andere Änderungen benötigen neue Gleichungen und sind hier nicht enthalten."
    ],
    "howItWorks": "tH=ln 2·(R1+R2)C, tL=ln 2·R2 C, T=tH+tL, f=1/T, D=100·tH/T. R1, R2 in kΩ und C in nF eingeben; Ω/F werden intern umgerechnet. Ideale Schwellen sind Vcc/3 und 2 Vcc/3. Für f wird ln 2 statt des gerundeten Koeffizienten 1,44 benutzt. Die gerundete Anzeige kann 50% oder 100% zeigen, obwohl das exakte Modell mit positiven R1 und R2 keine dieser Grenzen erreicht.",
    "example": "10 kΩ, 47 kΩ und 100 nF ergeben 138,72 Hz, 7,209 ms, tH=3,951 ms, tL=3,258 ms und D=54,808%. Doppeltes C verdoppelt beide Zeiten und halbiert f bei gleichem D. R1=0 liefert formal 50%, wird aber verworfen, da die gewählte Schaltung positives R1 verlangt.",
    "faq": [
      {
        "q": "Warum liegt der High-Anteil über 50%?",
        "a": "Weil der Kondensator über R1 und R2 lädt, sich aber allein über R2 entlädt. Die Ladezeit ist immer länger, und genau fünfzig Prozent werden nur im Grenzfall erreicht, wenn R1 sehr viel kleiner als R2 ist."
      },
      {
        "q": "Wie lässt sich ein High-Anteil unter der Hälfte erreichen?",
        "a": "Dafür ist eine andere Impulsformerschaltung nötig. Veränderte Ladewege oder Frequenzteilung können D ändern; diese Gleichungen beschreiben nur die klassische Schaltung ohne Überbrückungsdiode."
      },
      {
        "q": "Warum steht ln 2 in der Formel?",
        "a": "Bei nominalen Schwellen von 1/3 und 2/3 Versorgung dauert der exponentielle Übergang RC·ln 2. Die Versorgung kürzt sich ideal heraus; reale Schwellen, Entladespannung und Zeiten hängen von den Betriebsbedingungen ab."
      },
      {
        "q": "Warum weicht die reale Frequenz ab?",
        "a": "R/C-Toleranzen, Leckströme, tatsächliche Schwellen, Entladeschalter, Versorgung, Temperatur und Last wirken mit. Datenblätter bestimmen ihre Grenzen; garantierte Frequenz oder Betrieb außerhalb der Kennwerte werden nicht berechnet."
      }
    ],
    "disclaimer": "Nominale klassische NE 555-Schaltung mit idealen Schwellen; keine Frequenz-, Last- oder Temperaturgarantie."
  },
  "es": {
    "longDescription": "Calcula frecuencia, período y tiempos alto/bajo nominales del NE 555 astable clásico. El condensador carga por R1+R2 y descarga por R2; resistencias positivas dan una fracción de nivel alto estrictamente entre 50% y 100%. Se muestra tH/T en porcentaje, no su inversa T/tH.",
    "howToUse": [
      "R1 une Vcc al pin 7; R2 une 7 al nodo de pines 2/6 conectados; C une ese nodo a masa.",
      "Introduce resistencias en kΩ y capacidad en nF.",
      "Compara frecuencia y carga con la documentación de tu variante 555.",
      "Diodos, biestables y otras modificaciones necesitan ecuaciones nuevas y no están modelados."
    ],
    "howItWorks": "tH=ln 2·(R1+R2)C, tL=ln 2·R2 C, T=tH+tL, f=1/T, D=100·tH/T. Introduce R1, R2 en kΩ yC en nF; la conversión a Ω/F es interna. Los umbrales ideales son Vcc/3 y 2 Vcc/3. Se usa ln 2 para f en lugar del coeficiente redondeado 1,44. El resultado redondeado puede mostrar 50% o 100%, aunque el modelo exacto con R1 y R2 positivos no alcanza esos límites.",
    "example": "10 kΩ, 47 kΩ y 100 nF dan 138,72 Hz, 7,209 ms, tH=3,951 ms, tL=3,258 ms y D=54,808%. Duplicar C duplica tiempos y reduce f a la mitad sin cambiar D. R1=0 da formalmente 50%, pero se rechaza porque esta configuración exige R1 positivo.",
    "faq": [
      {
        "q": "¿Por qué la fracción de nivel alto supera el 50%?",
        "a": "Porque el condensador se carga a través de R1 y R2 pero se descarga solo por R2. El tiempo de carga siempre es mayor, y el cincuenta por ciento exacto solo se alcanza en el límite en que R1 es mucho menor que R2."
      },
      {
        "q": "¿Cómo se obtiene una fracción de nivel alto inferior a la mitad?",
        "a": "Hace falta otra configuración de formación de pulsos. Cambiar las rutas de carga/descarga o dividir frecuencia puede modificar D; estas ecuaciones solo describen el circuito clásico sin diodo de derivación."
      },
      {
        "q": "¿Por qué aparece ln 2?",
        "a": "Con umbrales nominales de 1/3 y 2/3 alimentación, la transición exponencial dura RC·ln 2. La alimentación se cancela idealmente; umbrales, tensión de descarga y tiempos reales dependen de las condiciones."
      },
      {
        "q": "¿Por qué difiere la frecuencia real?",
        "a": "Influyen tolerancias R/C, fugas, umbrales, tensión del transistor de descarga, alimentación, temperatura y carga. Sus límites pertenecen a las fichas; no se garantiza frecuencia ni operación fuera de especificaciones."
      }
    ],
    "disclaimer": "Circuito NE 555 clásico nominal con umbrales ideales; sin garantía de frecuencia, carga o estabilidad térmica."
  }
};
