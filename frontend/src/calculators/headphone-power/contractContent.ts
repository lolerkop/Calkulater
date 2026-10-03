// Individually authored subject contracts; primary reading and independent evidence are recorded for wave12.
export const contract = {
  "ru": {
    "longDescription": "Оцените SPL по заявленной чувствительности при 1 мВт и подводимой мощности, а затем сравните требуемые действующие напряжение и ток с паспортом усилителя. Чувствительность относится к определённым условиям измерения. Номинальный импеданс здесь заменён активным сопротивлением; реальный импеданс меняется с частотой. Это не измерение звука у уха и не оценка допустимой длительности прослушивания.",
    "howToUse": [
      "Берите чувствительность с явно указанным опорным 1 мВт и условиями измерения.",
      "Паспортное значение на 1 В сначала пересчитайте с учётом импеданса; не вводите его как дБ/мВт.",
      "Мощность указывается в мВт, сопротивление в Ом; напряжение и ток результата — RMS активной модели.",
      "Расчёт не устанавливает «комфортную» или «безопасную» громкость и не учитывает посадку, музыку, длительность или искажения."
    ],
    "howItWorks": "SPL=S₁мВт+10·log₁₀(PмВт/1 мВт). Электрическая часть использует PВт=PмВт/1000: U_RMS=√(PВт·R), I_RMS=√(PВт/R). S может быть любым конечным уровнем в дБ; R и P должны быть положительными. Децибелы нельзя подставлять вместо линейной мощности. Акустическая оценка дополнительно предполагает линейный отклик: в одинаковых условиях интенсивность звука пропорциональна подводимой электрической мощности.",
    "example": "S=100 дБ при 1 мВт, R=32 Ом и P=10 мВт дают 110 дБ, 0,5657 В RMS и 17,678 мА RMS. При 1 мВт уровень равен S, добавка 0 дБ. Нулевая мощность не даёт конечного логарифмического уровня, поэтому этот режим её не принимает.",
    "faq": [
      {
        "q": "Почему вдвое большая мощность даёт около +3 дБ?",
        "a": "10·log₁₀2=3,0103 дБ; +10 дБ соответствует десятикратной мощности. Это разность уровней, а не универсальное правило о субъективной громкости."
      },
      {
        "q": "Что важнее — импеданс или чувствительность?",
        "a": "При одинаковой чувствительности на 1 мВт модель даёт одинаковый SPL при одинаковой мощности. Но U=√PR растёт с √R, а I=√(P/R) уменьшается. Условия акустического измерения должны совпадать."
      },
      {
        "q": "Как сравнить расчёт с возможностями усилителя?",
        "a": "Сопоставьте RMS напряжение и ток с пределами источника при этом импедансе, учитывая его клиппинг и паспортную нагрузку. Страница не вычисляет запас, искажения или потребность в покупке отдельного усилителя."
      },
      {
        "q": "Почему дБ/мВт и дБ/В — не одно и то же?",
        "a": "Для активной модели S₁мВт=S₁В−10·log₁₀(1000/R). При 32 Ом разность 14,9485 дБ, при 300 Ом 5,2288 дБ. Формула требует одинаковых условий акустического измерения."
      }
    ],
    "disclaimer": "Оценка по чувствительности и активной RMS-модели; не измерение SPL у уха и не рекомендация по защите слуха.",
    "shortDescription": "Оценка SPL и требуемых RMS напряжения и тока по чувствительности на 1 мВт.",
    "seoDescription": "Оцените SPL наушников по чувствительности на 1 мВт и мощности. Электрическая модель показывает RMS напряжение и ток без оценки безопасности слуха."
  },
  "en": {
    "longDescription": "Estimate SPL from sensitivity specified at 1 mW, then compare the required RMS voltage and current with an amplifier specification. Sensitivity belongs to stated acoustic test conditions. Nominal impedance is treated as a resistance here; real headphone impedance varies with frequency. This is not a sound measurement at the ear or an exposure-time assessment.",
    "howToUse": [
      "Use sensitivity with an explicit 1 mW reference and stated test conditions.",
      "Convert a 1 V sensitivity using impedance before entering it; dB/V and dB/mW are different references.",
      "Enter power in mW and resistance in Ω; electrical results are RMS under the resistive model.",
      "The tool defines neither comfortable nor safe levels and does not account for fit, programme, duration or distortion."
    ],
    "howItWorks": "SPL=S₁mW+10·log₁₀(PmW/1 mW). The electrical calculation uses PW=PmW/1000: U_RMS=√(PW·R), I_RMS=√(PW/R). Sensitivity may be any finite dB level; R and P must be positive. A decibel level is not a linear power input. The acoustic estimate additionally assumes a linear response: under matching conditions, sound intensity is proportional to applied electrical power.",
    "example": "S=100 dB at 1 mW, R=32 Ω and P=10 mW give 110 dB, 0.5657 V RMS and 17.678 mA RMS. At 1 mW the level equals S and the gain is 0 dB. Zero power has no finite logarithmic level and is outside this mode.",
    "faq": [
      {
        "q": "Why does twice the power add about 3 dB?",
        "a": "10·log₁₀2=3.0103 dB; a 10 dB increase requires ten times the power. These are level differences, not universal rules for perceived loudness."
      },
      {
        "q": "Which matters more, impedance or sensitivity?",
        "a": "At equal sensitivity referenced to 1 mW, equal power gives equal estimated SPL under matching test conditions. Voltage rises with √R while current falls with √R."
      },
      {
        "q": "How do I compare the estimate with an amplifier?",
        "a": "Compare the calculated RMS voltage and current with source limits at that impedance, including clipping and rated loading. The tool does not determine distortion, headroom or a need to buy a separate amplifier."
      },
      {
        "q": "Why are dB/mW and dB/V different?",
        "a": "For the resistive model S₁mW=S₁V−10·log₁₀(1000/R). The difference is 14.9485 dB at 32 Ω and 5.2288 dB at 300 Ω; both specifications must use matching acoustic test conditions."
      }
    ],
    "disclaimer": "Sensitivity-based estimate and resistive RMS model; not measured ear SPL or hearing-protection guidance.",
    "shortDescription": "Estimated SPL and required RMS voltage/current from sensitivity at 1 mW.",
    "seoDescription": "Estimate headphone SPL from sensitivity at 1 mW and applied power. The resistive model gives RMS voltage/current without hearing-safety assessment."
  },
  "uk": {
    "longDescription": "Оцініть SPL за чутливістю, заданою для 1 мВт, і підведеною потужністю, а потім порівняйте потрібні діючі напругу та струм із паспортом підсилювача. Чутливість належить до певних умов акустичного вимірювання. Номінальний імпеданс тут замінено активним опором; реальний змінюється з частотою. Це не вимірювання біля вуха і не оцінка тривалості прослуховування.",
    "howToUse": [
      "Використайте чутливість із явно зазначеною опорною потужністю 1 мВт та умовами вимірювання.",
      "Значення на 1 В перераховується через імпеданс: S₁мВт=S₁В−10·log₁₀(1000/R).",
      "Вводьте мВт і Ом; електричні результати — діючі значення активної моделі.",
      "Калькулятор не встановлює комфортної чи безпечної гучності та не враховує посадку, музику, час і спотворення."
    ],
    "howItWorks": "SPL=S₁мВт+10·log₁₀(PмВт/1 мВт). Для електричної частини PВт=PмВт/1000: U_RMS=√(PВт·R), I_RMS=√(PВт/R). Чутливість може бути будь-яким скінченним рівнем у дБ; R і P мають бути додатними. Рівень у децибелах не є лінійною потужністю. Акустична оцінка додатково припускає лінійний відгук: за однакових умов інтенсивність звуку пропорційна підведеній електричній потужності.",
    "example": "S=100 дБ за 1 мВт, R=32 Ом і P=10 мВт дають 110 дБ, 0,5657 В RMS і 17,678 мА RMS. За 1 мВт рівень дорівнює S, приріст 0 дБ. За нульової потужності скінченного логарифмічного рівня немає, тому її не приймають.",
    "faq": [
      {
        "q": "Як обчислити потрібну потужність за бажаним SPL?",
        "a": "В обраній моделі PмВт=10^((SPL−S)/10). Це формальне значення для заданих умов чутливості, а не рекомендація слухати на бажаному рівні."
      },
      {
        "q": "Скільки додає подвоєння потужності?",
        "a": "10·log₁₀2=3,0103 дБ; приріст 10 дБ потребує десятикратної потужності. Суб’єктивне сприйняття не визначається цією формулою."
      },
      {
        "q": "Що важливіше — імпеданс чи чутливість?",
        "a": "Чутливість на 1 мВт визначає оцінку SPL, а опір — потрібні напругу й струм: U зростає з√R, I зменшується. Порівнюйте характеристики за однакових умов вимірювання."
      },
      {
        "q": "Чи визначає калькулятор безпечну гучність?",
        "a": "Ні. Результат не є реальним вимірюванням біля вуха, не враховує спектр і тривалість та не визначає безпечного часу. Значення 90–100 дБ не називається тут комфортною нормою."
      }
    ],
    "disclaimer": "Оцінка за чутливістю та активною RMS-моделлю; не вимірювання SPL біля вуха і не порада із захисту слуху.",
    "shortDescription": "Оцінка SPL і потрібних діючих напруги та струму за чутливістю на 1 мВт.",
    "seoDescription": "Оцініть SPL навушників за чутливістю на 1 мВт і потужністю. Активна модель показує діючі напругу та струм без оцінки безпеки слуху."
  },
  "de": {
    "longDescription": "Schätze den SPL aus der für 1 mW angegebenen Empfindlichkeit und vergleiche die erforderlichen Effektivwerte von Spannung und Strom mit dem Verstärkerdatenblatt. Empfindlichkeit gilt für bestimmte akustische Messbedingungen. Die Nennimpedanz wird als Wirkwiderstand behandelt; tatsächlich ist sie frequenzabhängig. Das Ergebnis misst keinen Pegel am Ohr und bestimmt keine erlaubte Hördauer.",
    "howToUse": [
      "Verwende eine Empfindlichkeit mit ausdrücklichem 1-mW-Bezug und Messbedingungen.",
      "Eine Angabe bei 1 V muss über die Impedanz umgerechnet werden; dB/V ist nicht dB/mW.",
      "Leistung in mW, Widerstand in Ω eingeben; elektrische Ergebnisse sind Effektivwerte des Widerstandsmodells.",
      "Es werden weder angenehme noch sichere Pegel festgelegt; Sitz, Programm, Dauer und Verzerrung fehlen."
    ],
    "howItWorks": "SPL=S₁mW+10·log₁₀(PmW/1 mW). Elektrisch gilt PW=PmW/1000: U_eff=√(PW·R), I_eff=√(PW/R). Die Empfindlichkeit kann jeder endliche dB-Pegel sein; R und P müssen positiv sein. Dezibel sind keine lineare Leistung. Die akustische Schätzung setzt zusätzlich einen linearen Zusammenhang voraus: Bei gleichen Bedingungen ist die Schallintensität proportional zur zugeführten elektrischen Leistung.",
    "example": "S=100 dB bei 1 mW, R=32 Ω und P=10 mW ergeben 110 dB, 0,5657 V effektiv und 17,678 mA effektiv. Bei 1 mW ist der Pegel S und der Zugewinn 0 dB. Null Leistung besitzt keinen endlichen logarithmischen Pegel und liegt außerhalb dieses Modus.",
    "faq": [
      {
        "q": "Warum erhöht doppelte Leistung den Pegel um etwa 3 dB?",
        "a": "10·log₁₀2=3,0103 dB; 10 dB mehr erfordern zehnfache Leistung. Das sind Pegeldifferenzen, keine allgemeine Regel für wahrgenommene Lautheit."
      },
      {
        "q": "Was ist wichtiger: Impedanz oder Empfindlichkeit?",
        "a": "Bei gleicher Empfindlichkeit mit 1-mW-Bezug ergibt gleiche Leistung unter gleichen Messbedingungen denselben geschätzten SPL. Spannung steigt mit √R, Strom sinkt mit √R."
      },
      {
        "q": "Wie vergleiche ich das Ergebnis mit einem Verstärker?",
        "a": "Vergleiche Effektivspannung und Strom mit den Quellengrenzen bei dieser Impedanz, einschließlich Clipping und zulässiger Last. Verzerrungen, Reserven oder ein Kaufbedarf werden nicht bestimmt."
      },
      {
        "q": "Warum unterscheiden sich dB/mW und dB/V?",
        "a": "Im Widerstandsmodell gilt S₁mW=S₁V−10·log₁₀(1000/R). Die Differenz beträgt 14,9485 dB bei 32 Ω und 5,2288 dB bei 300 Ω. Beide Angaben müssen dieselben akustischen Messbedingungen verwenden."
      }
    ],
    "disclaimer": "Schätzung aus Empfindlichkeit und Widerstandsmodell; keine Messung am Ohr oder Empfehlung zum Gehörschutz.",
    "shortDescription": "Geschätzter SPL und erforderliche Effektivspannung/Strom aus der Empfindlichkeit bei 1 mW.",
    "seoDescription": "SPL aus Empfindlichkeit bei 1 mW und Leistung schätzen; Effektivspannung und Strom im Widerstandsmodell, ohne Bewertung der Gehörsicherheit."
  },
  "es": {
    "longDescription": "Estima el SPL a partir de la sensibilidad especificada para 1 mW y compara la tensión y corriente eficaces necesarias con la ficha del amplificador. La sensibilidad corresponde a condiciones acústicas concretas. Aquí la impedancia nominal se trata como resistencia; la real cambia con la frecuencia. No es una medición junto al oído ni una evaluación del tiempo de escucha.",
    "howToUse": [
      "Usa sensibilidad con referencia explícita a 1 mW y condiciones de medida.",
      "Convierte una cifra referida a 1 V usando la impedancia; dB/V y dB/mW no son intercambiables.",
      "Introduce mW y Ω; los resultados eléctricos son valores eficaces de un modelo resistivo.",
      "La herramienta no define niveles cómodos o seguros ni incluye ajuste, música, duración o distorsión."
    ],
    "howItWorks": "SPL=S₁mW+10·log₁₀(PmW/1 mW). La parte eléctrica utiliza PW=PmW/1000: U_RMS=√(PW·R), I_RMS=√(PW/R). La sensibilidad admite cualquier nivel finito en dB; R y P deben ser positivos. Los decibelios no son una potencia lineal. La estimación acústica supone además una respuesta lineal: en condiciones iguales, la intensidad sonora es proporcional a la potencia eléctrica aplicada.",
    "example": "S=100 dB para 1 mW, R=32 Ω y P=10 mW producen 110 dB, 0,5657 V RMS y 17,678 mA RMS. Con 1 mW el nivel es S y la ganancia 0 dB. La potencia nula no tiene nivel logarítmico finito y queda fuera de este modo.",
    "faq": [
      {
        "q": "¿Por qué duplicar la potencia añade unos 3 dB?",
        "a": "10·log₁₀2=3,0103 dB; sumar 10 dB requiere diez veces la potencia. Son diferencias de nivel, no reglas universales de sonoridad percibida."
      },
      {
        "q": "¿Qué importa más, impedancia o sensibilidad?",
        "a": "Con igual sensibilidad referida a 1 mW, la misma potencia da el mismo SPL estimado si coinciden las condiciones de medida. La tensión crece con √R y la corriente disminuye con √R."
      },
      {
        "q": "¿Cómo comparo el cálculo con un amplificador?",
        "a": "Compara tensión y corriente RMS con los límites de la fuente a esa impedancia, incluidos recorte y carga admisible. No se calculan distorsión, margen ni necesidad de comprar otro amplificador."
      },
      {
        "q": "¿Por qué son distintos dB/mW y dB/V?",
        "a": "En el modelo resistivo S₁mW=S₁V−10·log₁₀(1000/R). La diferencia es 14,9485 dB con 32 Ω y 5,2288 dB con 300 Ω. Ambas especificaciones deben compartir las condiciones acústicas de medida."
      }
    ],
    "disclaimer": "Estimación por sensibilidad y modelo RMS resistivo; no mide SPL en el oído ni recomienda protección auditiva.",
    "shortDescription": "SPL estimado y tensión/corriente RMS necesarias según sensibilidad a 1 mW.",
    "seoDescription": "Estima SPL de auriculares según sensibilidad a 1 mW y potencia. El modelo resistivo muestra tensión/corriente RMS sin evaluar seguridad auditiva."
  }
};
