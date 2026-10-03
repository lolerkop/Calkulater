// Individually authored subject contracts; primary reading and independent evidence are recorded for wave12.
export const contract = {
  "ru": {
    "longDescription": "Сравните волновое сопротивление, погонную ёмкость и задержку идеального коаксиала по размерам его проводников. d — наружный диаметр центральной жилы, D — внутренний диаметр экрана, а не наружный размер оболочки. Модель предполагает концентрические проводники, однородный немагнитный диэлектрик и TEM-волну без потерь; реальные потери, дисперсия и высшие моды здесь не рассчитываются.",
    "howToUse": [
      "Измерьте жилу и внутреннюю поверхность экрана в одной единице; толщина наружной оболочки сюда не входит.",
      "Введите относительную проницаемость для выбранного материала и частоты, а не абсолютную ε в Ф/м.",
      "Коэффициент укорочения относится к скорости волны; при εr=2,25 он равен 2/3.",
      "Сравнивайте результат с паспортом кабеля: расчёт геометрии не определяет его марку, допустимую мощность или рабочую полосу."
    ],
    "howItWorks": "Z₀ ≈ 138·log₁₀(D/d)/√εr Ом; C′ = 2π·ε₀·εr/ln(D/d), VF = 1/√εr, задержка = √εr/c. Число 138 и ε₀ = 8,8541878128·10⁻¹² Ф/м — округлённые константы; c =299792458 м/с. Оба диаметра вводятся в миллиметрах, их отношение безразмерно. Для этой модели требуется D>d>0 и εr≥1.",
    "example": "При d=0,9 мм, D=2,95 мм и εr=2,25 получаются 47,433 Ом, 105,44 пФ/м и 5,003 нс/м. Если увеличить оба диаметра вдвое, отношение D/d и эти результаты останутся прежними. При D=d логарифм равен нулю: геометрия недопустима, а не «кабель с нулевым сопротивлением».",
    "faq": [
      {
        "q": "Зависит ли волновое сопротивление от длины кабеля?",
        "a": "В однородной линии характеристическое Z₀ не меняется при выборе более длинного отрезка. Но входное сопротивление нагруженного отрезка зависит от длины и частоты. В общем случае Z₀=√((R′+jωL′)/(G′+jωC′)); потери и дисперсия могут вносить частотную зависимость."
      },
      {
        "q": "Почему именно 50 и 75 Ом?",
        "a": "Приводимые оптимумы около 30 Ом по мощности и 77 Ом по затуханию относятся к определённой модели воздушного коаксиала. Они не универсальны для другого диэлектрика. При εr=2,25 отношение D/d=8,8 даёт около 86,9 Ом, а не 75 Ом."
      },
      {
        "q": "Что такое коэффициент укорочения?",
        "a": "Отношение скорости волны в кабеле к скорости света. В полиэтилене она примерно две трети световой, поэтому четвертьволновый отрезок физически короче четверти волны в воздухе — именно на этот коэффициент."
      },
      {
        "q": "Что будет при рассогласовании?",
        "a": "Неравенство импедансов вызывает отражение. В простом согласовании Γ=(ZL−Z₀)/(ZL+Z₀), но нагрев, ошибки и допустимая отражённая мощность зависят от источника и нагрузки; страница их не рассчитывает."
      }
    ],
    "disclaimer": "Идеальная модель однородной TEM-линии; не паспорт кабеля, расчёт потерь, допустимой мощности или высших мод."
  },
  "en": {
    "longDescription": "Compare the characteristic impedance, capacitance per metre and delay of an ideal coax from conductor dimensions. d is the centre conductor outer diameter; D is the shield inner diameter, not the cable jacket diameter. The model assumes concentric conductors, a uniform nonmagnetic dielectric and lossless TEM propagation. It does not calculate loss, dispersion or higher modes.",
    "howToUse": [
      "Use the conductor outer diameter and shield inner diameter in the same unit; omit the jacket thickness.",
      "Enter relative permittivity at the relevant material and frequency, not absolute permittivity in F/m.",
      "Velocity factor describes propagation speed; εr=2.25 gives 2/3.",
      "Compare with a cable datasheet: geometry does not identify a product or certify its power and frequency ratings."
    ],
    "howItWorks": "Z₀ ≈138·log₁₀(D/d)/√εr Ω; C′=2π·ε₀·εr/ln(D/d), VF=1/√εr and delay=√εr/c. The coefficient 138 and ε₀=8.8541878128·10⁻¹² F/m are rounded; c=299792458 m/s. Both diameters are entered in mm, so their ratio has no unit. The declared model requires D>d>0 and εr≥1.",
    "example": "For d=0.9 mm, D=2.95 mm and εr=2.25, the model gives 47.433 Ω, 105.44 pF/m and 5.003 ns/m. Doubling both diameters leaves their ratio and these results unchanged. D=d is invalid geometry with a zero logarithm, not a usable zero-impedance cable.",
    "faq": [
      {
        "q": "Does the impedance depend on cable length?",
        "a": "For a uniform line, choosing a longer piece does not change its characteristic Z₀. A terminated section has a different input impedance that depends on length and frequency. Generally Z₀=√((R′+jωL′)/(G′+jωC′)), so losses and dispersion can introduce frequency dependence."
      },
      {
        "q": "Why 50 and 75 ohms specifically?",
        "a": "The commonly cited 30 Ω power optimum and 77 Ω loss optimum belong to particular air-filled coax models. They are not universal for other dielectrics. At εr=2.25, D/d=8.8 produces about 86.9 Ω, not 75 Ω."
      },
      {
        "q": "What is the velocity factor?",
        "a": "The ratio of the wave speed in the cable to the speed of light. In polyethylene it is about two thirds, so a quarter-wave stub is physically shorter than a quarter wavelength in air by exactly that factor."
      },
      {
        "q": "What happens on a mismatch?",
        "a": "An impedance mismatch causes reflection. In a simple termination Γ=(ZL−Z₀)/(ZL+Z₀); resulting heating, errors and permissible reflected power depend on the source and load and are not calculated here."
      }
    ],
    "disclaimer": "Ideal uniform TEM-line model; not a cable specification, loss calculation or power/mode rating."
  },
  "uk": {
    "longDescription": "Порівняйте хвильовий опір, погонну ємність і затримку ідеального коаксіалу за розмірами провідників. d — зовнішній діаметр центральної жили, D — внутрішній діаметр екрана, а не оболонки. Припускаються концентричні провідники, однорідний немагнітний діелектрик і TEM-хвиля без втрат; дисперсію, загасання та вищі моди модель не обчислює.",
    "howToUse": [
      "Виміряйте зовнішній діаметр жили та внутрішній діаметр екрана в однаковій одиниці.",
      "Вводьте відносну проникність матеріалу для потрібної частоти, а не абсолютну ε у Ф/м.",
      "За εr=2,25 коефіцієнт укорочення дорівнює 2/3 і стосується швидкості хвилі.",
      "Зіставте результат із паспортом: геометрія не визначає марку, допустиму потужність чи частотну смугу."
    ],
    "howItWorks": "Z₀ ≈138·log₁₀(D/d)/√εr Ом; C′=2π·ε₀·εr/ln(D/d), VF=1/√εr, затримка=√εr/c. Коефіцієнт 138 і ε₀=8,8541878128·10⁻¹² Ф/м округлені; c=299792458 м/с. Діаметри вводяться в мм, їхнє відношення безрозмірне. Область моделі: D>d>0, εr≥1.",
    "example": "Для d=0,9 мм, D=2,95 мм та εr=2,25 виходять 47,433 Ом, 105,44 пФ/м і 5,003 нс/м. Подвоєння обох діаметрів не змінить відношення та результатів. При D=d геометрія недопустима: логарифм нульовий, а це не реальний кабель із нульовим опором.",
    "faq": [
      {
        "q": "Чому хвильовий опір не залежить від довжини?",
        "a": "У однорідній лінії характеристичне Z₀ не змінюється з довжиною вибраного відрізка. Проте вхідний імпеданс навантаженого відрізка залежить від довжини й частоти. Загальна формула Z₀=√((R′+jωL′)/(G′+jωC′)) враховує втрати й можливу частотну залежність."
      },
      {
        "q": "Чим 50 Ом відрізняються від 75?",
        "a": "Оптимуми близько 30 Ом за потужністю і 77 Ом за загасанням стосуються певної моделі повітряного коаксіалу. Для іншого діелектрика вони змінюються: за εr=2,25 відношення D/d=8,8 дає близько 86,9 Ом, не 75 Ом."
      },
      {
        "q": "Що таке коефіцієнт укорочення?",
        "a": "Відношення швидкості сигналу в кабелі до швидкості світла. Для поліетилену це близько 0,66 — і саме тому чвертьхвильовий відрізок кабелю коротший за чверть хвилі в повітрі."
      },
      {
        "q": "Що буде за неузгодження?",
        "a": "Неузгодження спричиняє відбиття. Для простого навантаження Γ=(ZL−Z₀)/(ZL+Z₀), але нагрів і допустима відбита потужність залежать від джерела та навантаження; тут їх не розраховано."
      }
    ],
    "disclaimer": "Ідеальна модель однорідної TEM-лінії; не паспорт кабелю, розрахунок загасання чи допустимої потужності."
  },
  "de": {
    "longDescription": "Vergleiche Wellenwiderstand, Kapazität je Meter und Laufzeit eines idealen Koaxialkabels anhand seiner Leitermaße. d ist der Außendurchmesser des Innenleiters, D der Innendurchmesser des Schirms, nicht des Mantels. Vorausgesetzt werden konzentrische Leiter, ein homogenes nichtmagnetisches Dielektrikum und verlustlose TEM-Ausbreitung. Verluste, Dispersion und höhere Moden bleiben unberechnet.",
    "howToUse": [
      "Verwende den Außendurchmesser des Innenleiters und den Innendurchmesser des Schirms in derselben Einheit.",
      "Gib die relative Permittivität bei der betrachteten Frequenz ein, nicht die absolute ε in F/m.",
      "εr=2,25 ergibt den Geschwindigkeitsfaktor 2/3.",
      "Ein Datenblatt bleibt nötig: Die Geometrie bestimmt weder den Kabeltyp noch Leistungs- oder Frequenzgrenzen."
    ],
    "howItWorks": "Z₀ ≈138·log₁₀(D/d)/√εr Ω; C′=2π·ε₀·εr/ln(D/d), VF=1/√εr, Laufzeit=√εr/c. 138 und ε₀=8,8541878128·10⁻¹² F/m sind gerundet; c=299792458 m/s. Beide Durchmesser werden in mm eingegeben, ihr Verhältnis ist dimensionslos. Es gilt D>d>0 und εr≥1.",
    "example": "d=0,9 mm, D=2,95 mm und εr=2,25 ergeben 47,433 Ω, 105,44 pF/m und 5,003 ns/m. Verdopple beide Durchmesser: Verhältnis und Ergebnisse bleiben gleich. D=d ist eine ungültige Geometrie mit Logarithmus null, kein nutzbares Kabel mit null Ohm.",
    "faq": [
      {
        "q": "Hängt die Impedanz von der Kabellänge ab?",
        "a": "Bei einer homogenen Leitung bleibt das charakteristische Z₀ bei anderer Abschnittslänge gleich. Die Eingangsimpedanz eines abgeschlossenen Abschnitts hängt dagegen von Länge und Frequenz ab. Allgemein gilt Z₀=√((R′+jωL′)/(G′+jωC′)); Verluste und Dispersion können eine Frequenzabhängigkeit erzeugen."
      },
      {
        "q": "Warum ausgerechnet 50 und 75 Ohm?",
        "a": "Die oft genannten Optima von etwa 30 Ω für Leistung und 77 Ω für Dämpfung gehören zu bestimmten luftgefüllten Koaxmodellen. Bei anderem Dielektrikum sind sie nicht universell. D/d=8,8 und εr=2,25 ergeben etwa 86,9 Ω statt 75 Ω."
      },
      {
        "q": "Was ist der Verkürzungsfaktor?",
        "a": "Das Verhältnis der Wellengeschwindigkeit im Kabel zur Lichtgeschwindigkeit. In Polyethylen liegt er bei rund zwei Dritteln, eine Viertelwellenleitung ist deshalb genau um diesen Faktor kürzer als eine Viertelwellenlänge in Luft."
      },
      {
        "q": "Was passiert bei Fehlanpassung?",
        "a": "Unterschiedliche Impedanzen verursachen Reflexionen. Für einen einfachen Abschluss gilt Γ=(ZL−Z₀)/(ZL+Z₀). Erwärmung und zulässige reflektierte Leistung hängen von Quelle und Last ab und werden hier nicht bestimmt."
      }
    ],
    "disclaimer": "Ideales Modell einer homogenen TEM-Leitung; keine Kabelspezifikation oder Berechnung von Verlusten und Belastbarkeit."
  },
  "es": {
    "longDescription": "Compara la impedancia característica, la capacidad por metro y el retardo de un coaxial ideal según sus conductores. d es el diámetro exterior del conductor central; D, el diámetro interior de la pantalla, no de la cubierta. Se suponen conductores concéntricos, dieléctrico homogéneo no magnético y propagación TEM sin pérdidas. No se calculan dispersión, pérdidas ni modos superiores.",
    "howToUse": [
      "Mide el exterior del conductor central y el interior de la pantalla en la misma unidad.",
      "Introduce la permitividad relativa del material a la frecuencia considerada, no ε absoluta en F/m.",
      "Con εr=2,25 el factor de velocidad es 2/3.",
      "Contrasta con la ficha del cable: la geometría no identifica una marca ni certifica potencia o banda de trabajo."
    ],
    "howItWorks": "Z₀ ≈138·log₁₀(D/d)/√εr Ω; C′=2π·ε₀·εr/ln(D/d), VF=1/√εr y retardo=√εr/c. 138 y ε₀=8,8541878128·10⁻¹² F/m están redondeados; c=299792458 m/s. Ambos diámetros se introducen en mm y su cociente no tiene unidad. El modelo exige D>d>0 y εr≥1.",
    "example": "Con d=0,9 mm, D=2,95 mm y εr=2,25 se obtienen 47,433 Ω, 105,44 pF/m y 5,003 ns/m. Duplicar ambos diámetros conserva el cociente y los resultados. D=d es una geometría inválida con logaritmo cero, no un cable utilizable de cero ohmios.",
    "faq": [
      {
        "q": "¿La impedancia depende de la longitud del cable?",
        "a": "En una línea uniforme, elegir un tramo más largo no cambia su Z₀ característico. La impedancia de entrada de un tramo terminado sí depende de longitud y frecuencia. En general Z₀=√((R′+jωL′)/(G′+jωC′)); pérdidas y dispersión pueden introducir dependencia con la frecuencia."
      },
      {
        "q": "¿Por qué 50 y 75 ohmios precisamente?",
        "a": "Los óptimos citados de unos 30 Ω para potencia y 77 Ω para atenuación pertenecen a modelos concretos con dieléctrico de aire. No son universales para otros materiales. Con εr=2,25, D/d=8,8 da unos 86,9 Ω, no 75 Ω."
      },
      {
        "q": "¿Qué es el factor de velocidad?",
        "a": "La relación entre la velocidad de la onda en el cable y la de la luz. En polietileno ronda dos tercios, así que un tramo de cuarto de onda es físicamente más corto que un cuarto de onda en el aire exactamente en ese factor."
      },
      {
        "q": "¿Qué ocurre con un desajuste?",
        "a": "La diferencia de impedancias produce reflexión. Para una terminación simple Γ=(ZL−Z₀)/(ZL+Z₀); calentamiento y potencia reflejada admisible dependen de fuente y carga y no se calculan aquí."
      }
    ],
    "disclaimer": "Modelo ideal de línea TEM homogénea; no es una especificación de cable ni un cálculo de pérdidas o potencia admisible."
  }
};
