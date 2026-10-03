// Individually reviewed against all five actual188 native bodies; human editorial review pending.
export const contract = {
  "ru": {
    "longDescription": "Найдите мгновенную механическую мощность идеализированного ротора по диаметру, скорости ветра, плотности и Cp. Строка за 24 часа предполагает неизменный ветер и Cp; это не прогноз суточной или годовой электрической выработки.",
    "howToUse": [
      "Введите скорость ветра у ротора и подходящую плотность; высота башни сама по себе не является входом.",
      "Не используйте среднюю скорость как готовый прогноз энергии при переменном ветре.",
      "Коэффициент использования установленной мощности=реальная энергия/(номинальная мощность×время); эта форма его не определяет."
    ],
    "howItWorks": "A=πD²/4, Pпотока=ρAv³/2, Pротора=Cp·Pпотока. Предел Бетца рассчитывается точной дробью 16/27, а не округлением 0,593. Cp в форме положителен и не выше 16/27; v=0 допускается и даёт нулевую мощность.",
    "example": "D=3 м,v=7 м/с,ρ=1,225 кг/м³,Cp=0,4 дают≈0,594 кВт ротора,≈1,485 кВт потока и≈0,8800 кВт по Бетцу. Постоянные 24 часа дают≈14,256 кВт·ч механической энергии.",
    "faq": [
      {
        "q": "Почему предел Бетца именно 16/27?",
        "a": "Он следует из сохранения массы и импульса: чтобы забрать энергию, поток надо затормозить, но полностью остановленному воздуху некуда уходить из-за колеса. Оптимум приходится на замедление до трети исходной скорости и даёт 59,3 процента."
      },
      {
        "q": "Почему скорость важнее диаметра?",
        "a": "Диаметр входит квадратом, скорость — кубом. Ветер вдвое сильнее даёт восьмикратную мощность, а чтобы получить то же увеличением колеса, диаметр пришлось бы увеличить почти втрое."
      },
      {
        "q": "Почему реальная выработка меньше расчётной?",
        "a": "Идеальная аэродинамическая модель отдельного ротора. Cp не включает автоматически потери генератора, ограничения по мощности, остановки и кривую управления. Для энергии нужны распределение скоростей во времени и кривая мощности: среднее v³ не равно кубу среднего v. Коэффициент использования установленной мощности=реальная энергия/(номинальная мощность×время); эта форма его не определяет."
      },
      {
        "q": "Учитывается ли высота башни?",
        "a": "Введите скорость ветра у ротора и подходящую плотность; высота башни сама по себе не является входом."
      }
    ],
    "disclaimer": "Идеальная аэродинамическая модель отдельного ротора. Cp не включает автоматически потери генератора, ограничения по мощности, остановки и кривую управления. Для энергии нужны распределение скоростей во времени и кривая мощности: среднее v³ не равно кубу среднего v."
  },
  "en": {
    "longDescription": "Find instantaneous mechanical power of an idealised rotor from diameter, wind speed, density and Cp. The 24-hour row assumes unchanged wind and Cp; it is not a forecast of daily or yearly electricity generation.",
    "howToUse": [
      "Enter wind at the rotor and appropriate density; tower height itself is not an input.",
      "Do not treat mean wind speed as an energy forecast under changing wind.",
      "Capacity factor=actual energy/(rated power×time); this form does not determine it."
    ],
    "howItWorks": "A=πD²/4, Pflow=ρAv³/2, Protor=Cp·Pflow. Betz power uses the exact fraction 16/27, not rounded 0.593. This form requires positive Cp≤16/27; v=0 is allowed and gives zero power.",
    "example": "D=3 m,v=7 m/s,ρ=1.225 kg/m³,Cp=0.4 give≈0.594 kW rotor power,≈1.485 kW flow and≈0.8800 kW Betz limit.24 unchanged hours give≈14.256 kWh mechanical energy.",
    "faq": [
      {
        "q": "Why is the Betz limit exactly 16/27?",
        "a": "It follows from mass and momentum conservation: extracting energy means slowing the flow, but air brought fully to rest has nowhere to leave from behind the rotor. The optimum slows it to a third of the original speed and yields 59.3 per cent."
      },
      {
        "q": "Why does speed matter more than diameter?",
        "a": "Diameter enters squared, speed cubed. Twice the wind gives eight times the power; matching that with a bigger rotor would take almost three times the diameter."
      },
      {
        "q": "Why is real output below the calculation?",
        "a": "Ideal aerodynamic model of an isolated rotor. Cp does not automatically include generator losses, power limiting, shutdowns or control curves. Energy needs the time distribution of wind speeds and a power curve: mean v³ is not the cube of mean v. Capacity factor=actual energy/(rated power×time); this form does not determine it."
      },
      {
        "q": "Is tower height included?",
        "a": "Enter wind at the rotor and appropriate density; tower height itself is not an input."
      }
    ],
    "disclaimer": "Ideal aerodynamic model of an isolated rotor. Cp does not automatically include generator losses, power limiting, shutdowns or control curves. Energy needs the time distribution of wind speeds and a power curve: mean v³ is not the cube of mean v."
  },
  "uk": {
    "longDescription": "Знайдіть миттєву механічну потужність ідеалізованого ротора за діаметром, швидкістю вітру, густиною й Cp. Рядок 24 годин передбачає сталий вітер і Cp; це не прогноз добового чи річного виробітку електроенергії.",
    "howToUse": [
      "Введіть вітер біля ротора й відповідну густину; висота вежі сама не є входом.",
      "Не використовуйте середню швидкість як готовий прогноз енергії за змінного вітру.",
      "Коефіцієнт використання встановленої потужності=фактична енергія/(номінальна потужність×час); форма його не визначає."
    ],
    "howItWorks": "A=πD²/4, Pпотоку=ρAv³/2, Pротора=Cp·Pпотоку. Межа Бетца обчислюється точною дробою 16/27, не округленням 0,593. Форма вимагає додатне Cp≤16/27; v=0 допустиме й дає нульову потужність.",
    "example": "D=3 м,v=7 м/с,ρ=1,225 кг/м³,Cp=0,4 дають≈0,594 кВт ротора,≈1,485 кВт потоку й≈0,8800 кВт за Бетцом.24 сталих години дають≈14,256 кВт·год механічної енергії.",
    "faq": [
      {
        "q": "Як впливають швидкість і діаметр?",
        "a": "За сталих Cp та густини подвоєння швидкості збільшує миттєву потужність у 8 разів, а подвоєння діаметра — у 4 рази. Це не універсальний висновок про економічність майданчика або висоту вежі."
      },
      {
        "q": "Що таке межа Бетца?",
        "a": "Теоретичний максимум частки енергії потоку, яку можна зняти: 16/27 ≈ 0,593. Забрати всю енергію неможливо — тоді повітря зупинилося б за колесом і новий потік не пройшов би."
      },
      {
        "q": "Чому не можна брати швидкість поривів?",
        "a": "Ідеальна аеродинамічна модель окремого ротора. Cp автоматично не включає втрати генератора, обмеження потужності, зупинки й керування. Для енергії потрібні розподіл швидкостей у часі та крива потужності: середнє v³ не є кубом середнього v. Коефіцієнт використання встановленої потужності=фактична енергія/(номінальна потужність×час); форма його не визначає."
      },
      {
        "q": "Чому висота осі має значення?",
        "a": "Введіть вітер біля ротора й відповідну густину; висота вежі сама не є входом."
      }
    ],
    "disclaimer": "Ідеальна аеродинамічна модель окремого ротора. Cp автоматично не включає втрати генератора, обмеження потужності, зупинки й керування. Для енергії потрібні розподіл швидкостей у часі та крива потужності: середнє v³ не є кубом середнього v."
  },
  "de": {
    "longDescription": "Berechne momentane mechanische Leistung eines idealisierten Rotors aus Durchmesser, Windgeschwindigkeit, Dichte und Cp. Die 24-Stunden-Zeile setzt konstanten Wind und Cp voraus; sie prognostiziert keinen Tages- oder Jahresstromertrag.",
    "howToUse": [
      "Gib Wind am Rotor und passende Dichte ein; Turmhöhe selbst ist kein Eingang.",
      "Verwende mittleren Wind bei wechselndem Wind nicht als fertige Energieprognose.",
      "Kapazitätsfaktor=tatsächliche Energie/(Nennleistung×Zeit); das Formular bestimmt ihn nicht."
    ],
    "howItWorks": "A=πD²/4, PStrom=ρAv³/2, PRotor=Cp·PStrom. Die Betz-Leistung nutzt exakt 16/27 statt gerundet 0,593. Das Formular verlangt positives Cp≤16/27; v=0 ist zulässig und ergibt null Leistung.",
    "example": "D=3 m,v=7 m/s,ρ=1,225 kg/m³,Cp=0,4 ergeben≈0,594 kW am Rotor,≈1,485 kW im Wind und≈0,8800 kW Betz-Grenze.24 unveränderte Stunden ergeben≈14,256 kWh mechanische Energie.",
    "faq": [
      {
        "q": "Warum ist die Betz-Grenze genau 16/27?",
        "a": "Sie folgt aus der Erhaltung von Masse und Impuls: Energie zu entnehmen heißt, die Strömung zu bremsen, aber ganz zur Ruhe gebrachte Luft hat hinter dem Rotor keinen Ort mehr, an den sie entweichen könnte. Das Beste bremst sie auf ein Drittel der Ausgangsgeschwindigkeit und liefert 59,3 Prozent."
      },
      {
        "q": "Warum zählt die Geschwindigkeit mehr als der Durchmesser?",
        "a": "Der Durchmesser geht im Quadrat ein, die Geschwindigkeit in der dritten Potenz. Doppelter Wind ergibt die achtfache Leistung; dasselbe mit einem größeren Rotor zu erreichen bräuchte beinahe den dreifachen Durchmesser."
      },
      {
        "q": "Warum liegt der wirkliche Ertrag unter der Rechnung?",
        "a": "Ideales aerodynamisches Modell eines einzelnen Rotors. Cp enthält nicht automatisch Generatorverluste, Leistungsbegrenzung, Stillstand oder Regelkurven. Für Energie braucht man zeitliche Windverteilung und Leistungskurve: mittleres v³ ist nicht der Kubus des mittleren v. Kapazitätsfaktor=tatsächliche Energie/(Nennleistung×Zeit); das Formular bestimmt ihn nicht."
      },
      {
        "q": "Ist die Turmhöhe enthalten?",
        "a": "Gib Wind am Rotor und passende Dichte ein; Turmhöhe selbst ist kein Eingang."
      }
    ],
    "disclaimer": "Ideales aerodynamisches Modell eines einzelnen Rotors. Cp enthält nicht automatisch Generatorverluste, Leistungsbegrenzung, Stillstand oder Regelkurven. Für Energie braucht man zeitliche Windverteilung und Leistungskurve: mittleres v³ ist nicht der Kubus des mittleren v."
  },
  "es": {
    "longDescription": "Halla potencia mecánica instantánea de un rotor idealizado con diámetro, viento, densidad y Cp. La fila de 24 horas supone viento y Cp constantes; no pronostica generación eléctrica diaria ni anual.",
    "howToUse": [
      "Introduce viento en el rotor y densidad adecuada; la altura de torre no es entrada directa.",
      "No tomes viento medio como pronóstico energético con viento variable.",
      "Factor de capacidad=energía real/(potencia nominal×tiempo); el formulario no lo determina."
    ],
    "howItWorks": "A=πD²/4, Pflujo=ρAv³/2, Protor=Cp·Pflujo. Betz usa la fracción exacta 16/27, no 0,593 redondeado. Se requiere Cp positivo≤16/27; v=0 es válido y da potencia cero.",
    "example": "D=3 m,v=7 m/s,ρ=1,225 kg/m³,Cp=0,4 dan≈0,594 kW del rotor,≈1,485 kW del flujo y≈0,8800 kW de Betz.24 horas constantes dan≈14,256 kWh de energía mecánica.",
    "faq": [
      {
        "q": "¿Por qué el límite de Betz es exactamente 16/27?",
        "a": "Se deduce de la conservación de la masa y del momento: extraer energía significa frenar el flujo, pero el aire detenido del todo no tiene por dónde salir detrás del rotor. El óptimo lo frena hasta un tercio de la velocidad original y rinde el 59,3 por ciento."
      },
      {
        "q": "¿Por qué importa más la velocidad que el diámetro?",
        "a": "El diámetro entra al cuadrado y la velocidad al cubo. El doble de viento da ocho veces la potencia; igualarlo con un rotor mayor exigiría casi tres veces el diámetro."
      },
      {
        "q": "¿Por qué la producción real es menor que el cálculo?",
        "a": "Modelo aerodinámico ideal de un rotor aislado. Cp no incluye automáticamente pérdidas del generador, límites, paradas ni control. La energía requiere distribución temporal de velocidades y curva de potencia: la media de v³ no es el cubo de la media de v. Factor de capacidad=energía real/(potencia nominal×tiempo); el formulario no lo determina."
      },
      {
        "q": "¿Está incluida la altura de la torre?",
        "a": "Introduce viento en el rotor y densidad adecuada; la altura de torre no es entrada directa."
      }
    ],
    "disclaimer": "Modelo aerodinámico ideal de un rotor aislado. Cp no incluye automáticamente pérdidas del generador, límites, paradas ni control. La energía requiere distribución temporal de velocidades y curva de potencia: la media de v³ no es el cubo de la media de v."
  }
};
