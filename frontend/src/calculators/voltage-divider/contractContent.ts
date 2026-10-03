// Individually authored subject contracts; primary reading and independent evidence are recorded for wave12.
export const contract = {
  "ru": {
    "longDescription": "Рассчитайте выходное напряжение ненагруженного делителя из двух активных резисторов, общий ток и мощность каждого плеча. R1 — верхний между входом и выходом, R2 — нижний от выхода к общему проводу. Долю задаёт отношение сопротивлений, но их величины влияют на ток, нагрев и чувствительность к нагрузке. Отрицательное или нулевое входное напряжение допустимо.",
    "howToUse": [
      "Введите вход в В и оба сопротивления в Ом: 10 кОм=10000 Ом.",
      "Проверьте расположение R1 и R2: выход снимается с R2.",
      "Нагрузку нельзя игнорировать только потому, что она называется входом измерителя.",
      "Сравните напряжения, потери, допустимые мощности и допуски с данными реальных компонентов."
    ],
    "howItWorks": "Uout=Uin·R2/(R1+R2), I=Uin/(R1+R2), P1=I²R1, P2=I²R2. U в В, R в Ом; ток результата в мА, мощности в мВт. R1, R2>0. Отрицательный Uin меняет знак Uout и I, но не мощности. Для AC используются RMS, если резисторы остаются активными.",
    "example": "12 В, 10000 Ом и 4700 Ом дают 3,837 В, 0,8163 мА и 31,9728% входа. При −12 В выход−3,837 В и ток−0,8163 мА, мощности прежние; при 0 В они все нулевые. Подключённая нагрузка — другой расчёт.",
    "faq": [
      {
        "q": "Можно ли питать через делитель нагрузку?",
        "a": "Нагрузка RL подключается параллельно R2. Относительное проседание можно оценить через Rth=R1 R2/(R1+R2): Uloaded/Uopen=1/(1+Rth/RL). Для R1=R2 и RL=10 R2 просадка 4,7619%, что не является автоматически допустимой ошибкой."
      },
      {
        "q": "Какие номиналы выбрать при нужной доле?",
        "a": "Любая пара с тем же отношением даёт ту же ненагруженную долю. Но ток, потери, выходной Rth, паразитная ёмкость и допуски определяют выбор. Универсального диапазона кОм или мощности 0,25 Вт нет."
      },
      {
        "q": "Почему мощность считается по току, а не по напряжению?",
        "a": "Обе записи равносильны, но ток в делителе общий для обоих плеч, поэтому через него короче: мощность плеча равна току в квадрате на его сопротивление."
      },
      {
        "q": "Работает ли расчёт на переменном напряжении?",
        "a": "Для чисто резистивного делителя да, если понимать напряжение как действующее. Но с ёмкостью или индуктивностью в цепи появляется зависимость от частоты, которой здесь нет."
      }
    ],
    "disclaimer": "Два активных резистора без выходной нагрузки; не стабилизатор или расчёт нагруженной/реактивной цепи."
  },
  "en": {
    "longDescription": "Calculate unloaded output voltage, common current and each leg dissipation for two resistors. R1 is the upper leg from input to output; R2 is the lower leg from output to reference. Their ratio sets the fraction, while absolute values affect current, heating and loading sensitivity. Signed or zero input voltage is accepted.",
    "howToUse": [
      "Enter V and Ω: 10 kΩ means 10000 Ω.",
      "Check R1/R2 placement: output is across R2.",
      "A measurement input is not automatically an insignificant load.",
      "Check voltage, dissipation, rated power and tolerance against actual component data."
    ],
    "howItWorks": "Uout=Uin·R2/(R1+R2), I=Uin/(R1+R2), P1=I²R1, P2=I²R2. Enter V and Ω; output current is mA and powers mW. R1, R2>0. Negative Uin reverses Uout and I, but leaves powers unchanged. For AC use RMS if the elements remain purely resistive.",
    "example": "12 V, 10000 Ω and 4700 Ω give 3.837 V, 0.8163 mA and 31.9728% of input. At −12 V output and current reverse sign while powers stay unchanged; at 0 V they are all zero. An attached load requires a different calculation.",
    "faq": [
      {
        "q": "Can a divider power a load?",
        "a": "A load RL is parallel with R2. With Rth=R1 R2/(R1+R2), Uloaded/Uopen=1/(1+Rth/RL). Equal legs and RL=10 R2 give 4.7619% droop, which is not automatically an acceptable error."
      },
      {
        "q": "Which resistor values should I pick for a given ratio?",
        "a": "Any pair with the same ratio gives the same unloaded fraction. Current, losses, output Rth, parasitic capacitance and tolerances still matter. There is no universal kilohm range or 0.25 W rating."
      },
      {
        "q": "Why is power computed from the current rather than the voltage?",
        "a": "Both forms are equivalent, but the current is shared by both legs, which makes it the shorter route: each leg dissipates current squared times its own resistance."
      },
      {
        "q": "Does this work on AC?",
        "a": "For a purely resistive divider yes, reading the voltage as RMS. Add capacitance or inductance and a frequency dependence appears that is not modelled here."
      }
    ],
    "disclaimer": "Two purely resistive legs without output loading; not a regulator or loaded/reactive network calculation."
  },
  "uk": {
    "longDescription": "Обчисліть напругу ненавантаженого дільника з двох активних резисторів, спільний струм і потужність кожного плеча. R1 — верхнє плече між входом і виходом, R2 — нижнє від виходу до спільного проводу. Відношення задає частку, а величини впливають на струм, нагрів і навантаження. Від’ємний або нульовий вхід допустимий.",
    "howToUse": [
      "Вводьте В та Ом: 10 кОм=10000 Ом.",
      "Перевірте розташування R1, R2: вихід знімається з R2.",
      "Вхід вимірювача не означає автоматично відсутнє навантаження.",
      "Перевірте напругу, втрати, паспортні потужності й допуски компонентів."
    ],
    "howItWorks": "Uout=Uin·R2/(R1+R2), I=Uin/(R1+R2), P1=I²R1, P2=I²R2. Вхід у В, опори в Ом; результат струму в мА, потужностей у мВт. R1, R2>0. За від’ємного Uin змінюються знаки Uout, I, не потужностей. Для AC беріть діючі значення за активних опорів.",
    "example": "12 В, 10000 Ом і 4700 Ом дають 3,837 В, 0,8163 мА та 31,9728% входу. За −12 В вихід і струм змінюють знак, потужності зберігаються; за 0 В усі нульові. Під’єднане навантаження потребує іншого розрахунку.",
    "faq": [
      {
        "q": "Чому під навантаженням напруга падає?",
        "a": "RL паралельно R2 зменшує напругу. За Rth=R1 R2/(R1+R2) маємо Uloaded/Uopen=1/(1+Rth/RL). Якщо R1=R2 і RL=10 R2, просідання 4,7619%; універсальна умова «у 10 разів» не гарантує потрібної точності."
      },
      {
        "q": "Чи можна живити дільником схему?",
        "a": "Навіть малий струм створює навантаження; порівняйте RL з вихідним Rth та допустимою похибкою. Цей калькулятор не має поля RL й не підтверджує придатність дільника як живлення."
      },
      {
        "q": "Які номінали обирати?",
        "a": "Співвідношення опорів задає частку, але абсолютні значення задають струм, втрати й Rth. Паспортні допуски, паразитні параметри та навантаження визначають вибір; універсального номіналу немає."
      },
      {
        "q": "Навіщо потрібен дільник?",
        "a": "Дільник формує масштаб або опорний рівень лише за врахованих напруг, навантаження й допусків. Він не гарантує безпечної сумісності високої напруги з входом приладу."
      }
    ],
    "disclaimer": "Два активні резистори без вихідного навантаження; не стабілізатор і не модель навантаженої чи реактивної мережі."
  },
  "de": {
    "longDescription": "Berechne unbelastete Ausgangsspannung, gemeinsamen Strom und Verlustleistung beider Widerstände. R1 liegt oben zwischen Eingang und Ausgang, R2 unten zwischen Ausgang und Bezug. Das Verhältnis bestimmt den Anteil, absolute Werte bestimmen Strom, Wärme und Lastempfindlichkeit. Negative oder null Eingangsspannung ist erlaubt.",
    "howToUse": [
      "V und Ω eingeben: 10 kΩ entsprechen 10000 Ω.",
      "Anordnung prüfen: Ausgang liegt an R2.",
      "Auch ein Messeingang kann eine relevante Last darstellen.",
      "Spannung, Verluste, Nennleistung und Toleranzen mit realen Bauteildaten prüfen."
    ],
    "howItWorks": "Uout=Uin·R2/(R1+R2), I=Uin/(R1+R2), P1=I²R1, P2=I²R2. Eingabe in V/Ω, Ausgangsstrom in mA, Leistungen in mW. R1, R2>0. Negatives Uin kehrt Uout und I um, nicht die Leistungen. Bei AC Effektivwerte verwenden, sofern beide Elemente rein ohmsch sind.",
    "example": "12 V, 10000 Ω und 4700 Ω ergeben 3,837 V, 0,8163 mA und 31,9728% des Eingangs. Bei −12 V ändern Ausgang und Strom ihr Vorzeichen, die Leistungen bleiben gleich; bei 0 V sind alle null. Eine angeschlossene Last braucht eine andere Rechnung.",
    "faq": [
      {
        "q": "Kann ein Teiler eine Last versorgen?",
        "a": "RL liegt parallel zu R2. Mit Rth=R1 R2/(R1+R2) gilt Uloaded/Uopen=1/(1+Rth/RL). Gleiche Widerstände mit RL=10 R2 ergeben 4,7619% Abfall, nicht automatisch eine zulässige Abweichung."
      },
      {
        "q": "Welche Widerstandswerte wähle ich für ein gegebenes Verhältnis?",
        "a": "Jedes Paar mit gleichem Verhältnis ergibt denselben unbelasteten Anteil. Strom, Verluste, Ausgangs Rth, Parasiten und Toleranzen bleiben entscheidend. Es gibt keinen universellen kΩ-Bereich oder 0,25-W-Nennwert."
      },
      {
        "q": "Warum wird die Leistung aus dem Strom und nicht aus der Spannung gerechnet?",
        "a": "Beide Formen sind gleichwertig, aber der Strom ist beiden Zweigen gemeinsam, das ist der kürzere Weg: jeder Zweig setzt Strom im Quadrat mal seinem eigenen Widerstand um."
      },
      {
        "q": "Funktioniert das bei Wechselspannung?",
        "a": "Bei einem rein ohmschen Teiler ja, wenn die Spannung als Effektivwert gelesen wird. Kommen Kapazität oder Induktivität hinzu, entsteht eine Frequenzabhängigkeit, die hier nicht im Modell steckt."
      }
    ],
    "disclaimer": "Zwei ohmsche Widerstände ohne Ausgangslast; kein Regler oder Modell belasteter/reaktiver Netzwerke."
  },
  "es": {
    "longDescription": "Calcula tensión de salida sin carga, corriente común y disipación de cada resistencia. R1 es la rama superior entre entrada y salida; R2, la inferior entre salida y referencia. Su relación fija la fracción; los valores absolutos afectan corriente, calor y carga. Se admite tensión de entrada negativa o nula.",
    "howToUse": [
      "Introduce V y Ω: 10 kΩ son 10000 Ω.",
      "Comprueba la posición R1/R2: la salida se toma sobre R2.",
      "Una entrada de medida también puede ser una carga significativa.",
      "Verifica tensión, disipación, potencia nominal y tolerancias en la ficha de las resistencias."
    ],
    "howItWorks": "Uout=Uin·R2/(R1+R2), I=Uin/(R1+R2), P1=I²R1, P2=I²R2. Entrada en V/Ω, corriente en mA y potencias en mW. R1, R2>0. Uin negativo cambia el signo de Uout e I, no las potencias. En AC usa RMS si los elementos son puramente resistivos.",
    "example": "12 V, 10000 Ω y 4700 Ω dan 3,837 V, 0,8163 mA y 31,9728% de entrada. Con −12 V salida y corriente cambian de signo, potencias iguales; con 0 V todas son cero. Una carga conectada necesita otro cálculo.",
    "faq": [
      {
        "q": "¿Puede un divisor alimentar una carga?",
        "a": "RL queda en paralelo con R2. Con Rth=R1 R2/(R1+R2), Uloaded/Uopen=1/(1+Rth/RL). Ramas iguales y RL=10 R2 dan 4,7619% de caída, no una precisión automáticamente aceptable."
      },
      {
        "q": "¿Qué valores de resistencia elijo para una relación dada?",
        "a": "Cualquier pareja con igual relación da la misma fracción sin carga. Siguen importando corriente, pérdidas, Rth, parásitos y tolerancias. No hay un rango de kΩ o clasificación 0,25 W universal."
      },
      {
        "q": "¿Por qué la potencia se calcula con la corriente y no con la tensión?",
        "a": "Ambas formas son equivalentes, pero la corriente la comparten las dos ramas, lo que la convierte en el camino más corto: cada rama disipa la corriente al cuadrado por su propia resistencia."
      },
      {
        "q": "¿Vale en corriente alterna?",
        "a": "En un divisor puramente resistivo sí, leyendo la tensión como eficaz. Añade capacidad o inductancia y aparece una dependencia con la frecuencia que aquí no se modela."
      }
    ],
    "disclaimer": "Dos resistencias sin carga de salida; no es un regulador ni un modelo de red cargada o reactiva."
  }
};
