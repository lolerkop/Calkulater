// Individually authored subject contracts; primary reading and independent evidence are recorded for wave12.
export const contract = {
  "ru": {
    "longDescription": "Свяжите действующие напряжения и токи идеального трансформатора с отношением числа витков. В одном режиме вводятся целые N1,N2, в другом — желаемое U2. Отношение N2/N1 может быть дробным: его не округляют до целого числа витков. Модель пренебрегает потерями, током намагничивания и просадкой; показанная мощность в Вт предполагает активную нагрузку, cosφ=1.",
    "howToUse": [
      "Выберите известные витки или требуемое вторичное напряжение; заполняются только видимые поля.",
      "Напряжения и ток задавайте согласованными действующими значениями.",
      "Для мощности в Вт модель явно принимает cosφ=1; для иной нагрузки нужен коэффициент мощности.",
      "Для реальной намотки выберите целые N1,N2 и заново проверьте их отношение, а также магнитный и тепловой расчёт."
    ],
    "howItWorks": "k=N2/N1=U2/U1, U2=U1 k, I2=I1/k. Для введённых RMS и cosφ=1: P=U1 I1=U2 I2. В общем AC случае UI — полная мощность в ВА, активная P=UIcosφ. U1,U2>0, I1≥0; введённые числа витков — положительные безопасные целые, максимум 9007199254740991 по числовому контракту.",
    "example": "500/100 витков, 220 В и 2 А дают 44 В, 10 А и 440 Вт в активной идеальной модели. Режим 220→12 В даёт k=12/220≈0,054545, не число витков и не величину для округления вверх. Если I1=0, расчётные I2 и P нулевые; реальный ток холостого хода здесь исключён.",
    "faq": [
      {
        "q": "Почему ток растёт, когда напряжение падает?",
        "a": "Отношение токов обратно отношению витков: при k=0,2 модель даёт I2=5 I1. Это преобразование заданного режима, а не подтверждение допустимого тока обмотки."
      },
      {
        "q": "Насколько расчёт отличается от реального трансформатора?",
        "a": "Не учитываются потери, ток намагничивания, регулирование под нагрузкой и насыщение. Нельзя назначить универсальную процентную ошибку: нужны данные конкретного сердечника, частоты и нагрузки."
      },
      {
        "q": "Можно ли получить дробное число витков?",
        "a": "Отношение может быть дробным, например 12/220. Числа полных витков задаются отдельно. Округлять отношение вверх до целого неверно: выбирайте целые N1,N2 и пересчитывайте напряжение."
      },
      {
        "q": "Работает ли это для автотрансформатора?",
        "a": "Соотношение напряжений применимо в идеальной модели, но автотрансформатор не обеспечивает гальванической развязки. Даже отметка 1:1 описывает только отношение; тип и класс изоляции из неё не следуют."
      }
    ],
    "disclaimer": "Идеальные RMS и активная нагрузка cosφ=1 для Вт; без потерь, насыщения и подтверждения изоляции или допустимых токов."
  },
  "en": {
    "longDescription": "Relate RMS voltages and currents in an ideal transformer to its turns ratio. One mode accepts integer N1,N2; the other accepts desired U2. The ratio N2/N1 may be fractional and must not be rounded to a whole turn count. Loss, magnetising current and voltage regulation are omitted; the W result assumes a resistive load with cosφ=1.",
    "howToUse": [
      "Choose known turns or desired secondary voltage and fill only visible inputs.",
      "Use consistent RMS voltage and current values.",
      "W assumes cosφ=1; a different load needs its power factor.",
      "For actual winding, choose integer N1,N2 and recheck their ratio plus magnetic and thermal design."
    ],
    "howItWorks": "k=N2/N1=U2/U1, U2=U1 k, I2=I1/k. With RMS inputs and cosφ=1, P=U1 I1=U2 I2. In general AC, UI is apparent power in VA and active P=UIcosφ. U1,U2>0 and I1≥0; entered turn counts are positive safe integers, at most 9007199254740991 as a numeric limit.",
    "example": "500/100 turns, 220 V and 2 A give 44 V, 10 A and 440 W in the ideal resistive model. 220→12 V gives k=12/220≈0.054545: this is not a turn count to round upwards. I1=0 gives zero model I2 and P; actual no-load current is excluded.",
    "faq": [
      {
        "q": "Why does the current rise when the voltage drops?",
        "a": "Current ratio is inverse turns ratio: k=0.2 gives I2=5 I1. This transforms the entered operating point; it does not certify allowable winding current."
      },
      {
        "q": "How far is this from a real transformer?",
        "a": "Loss, magnetising current, loaded regulation and saturation are absent. There is no universal percentage error; actual core, frequency and load data are needed."
      },
      {
        "q": "Can the turns come out fractional?",
        "a": "A ratio can be fractional, such as 12/220. Whole turn counts are separate inputs. Rounding the ratio up to an integer is wrong: choose integer N1,N2 and calculate voltage again."
      },
      {
        "q": "Does this apply to an autotransformer?",
        "a": "The ideal voltage relationship can apply, but an autotransformer does not provide galvanic isolation. Even 1:1 states only a ratio; it does not establish construction or insulation rating."
      }
    ],
    "disclaimer": "Ideal RMS with cosφ=1 for W; no loss, saturation or certified isolation/current ratings."
  },
  "uk": {
    "longDescription": "Пов’яжіть діючі напруги й струми ідеального трансформатора з відношенням витків. Один режим приймає цілі N1,N2, інший — потрібне U2. Відношення N2/N1 може бути дробовим, його не округляють як кількість витків. Втрати, струм намагнічування та просідання виключені; показана потужність у Вт передбачає активне навантаження, cosφ=1.",
    "howToUse": [
      "Виберіть відомі витки або потрібну вторинну напругу; заповнюйте видимі поля.",
      "Вводьте узгоджені діючі напруги й струм.",
      "Для Вт явно прийнято cosφ=1; інше навантаження потребує коефіцієнта потужності.",
      "Для намотки виберіть цілі N1,N2 й повторно перевірте відношення та магнітний і тепловий розрахунок."
    ],
    "howItWorks": "k=N2/N1=U2/U1, U2=U1 k, I2=I1/k. Для RMS і cosφ=1: P=U1 I1=U2 I2. У загальному AC випадку UI — повна потужність у ВА, активна P=UIcosφ. U1,U2>0, I1≥0; кількість витків — додатні безпечні цілі до 9007199254740991 за числовим контрактом.",
    "example": "500/100 витків, 220 В і 2 А дають 44 В, 10 А та 440 Вт в ідеальній активній моделі. 220→12 В дає k=12/220≈0,054545: це не число витків для округлення вгору. I1=0 дає нульові I2,P; реальний струм холостого ходу тут виключено.",
    "faq": [
      {
        "q": "Чому струм росте, коли напруга падає?",
        "a": "Струми обернено пропорційні виткам: k=0,2 дає I2=5 I1. Це перерахунок заданого режиму, не підтвердження допустимого струму обмотки."
      },
      {
        "q": "Чи враховано втрати?",
        "a": "Ні: втрати, намагнічування, регулювання під навантаженням і насичення виключені. Універсальні 85–98% або визначена зміна вихідного струму з цієї моделі не випливають."
      },
      {
        "q": "Чи працює трансформатор на постійному струмі?",
        "a": "Сталий магнітний потік не наводить сталу вторинну ЕРС. Перехідні зміни струму можуть наводити напругу, але сталий DC-режим ця модель змінного струму не описує."
      },
      {
        "q": "Що визначає потужність трансформатора?",
        "a": "Допустима потужність потребує даних осердя, частоти, витків, проводу, нагріву та навантаження. Відношення витків задає ідеальний перерахунок напруг, а не готовий номінал потужності чи ізоляції."
      }
    ],
    "disclaimer": "Ідеальні діючі значення з cosφ=1 для Вт; без втрат, насичення чи підтвердження ізоляції та допустимих струмів."
  },
  "de": {
    "longDescription": "Verknüpfe Effektivspannungen und Ströme eines idealen Transformators über das Windungsverhältnis. Ein Modus nutzt ganze N1,N2, der andere die gewünschte U2. N2/N1 darf gebrochen sein und wird nicht auf eine ganze Windungszahl gerundet. Verluste, Magnetisierungsstrom und Spannungsregelung fehlen; die W-Anzeige setzt eine ohmsche Last mit cosφ=1 voraus.",
    "howToUse": [
      "Bekannte Windungen oder gewünschte Sekundärspannung wählen; nur sichtbare Felder ausfüllen.",
      "Zusammengehörige Effektivwerte eingeben.",
      "W setzt cosφ=1 voraus; andere Lasten brauchen ihren Leistungsfaktor.",
      "Für reale Wicklungen ganze N1,N2 wählen und Verhältnis sowie magnetische und thermische Auslegung erneut prüfen."
    ],
    "howItWorks": "k=N2/N1=U2/U1, U2=U1 k, I2=I1/k. Mit Effektivwerten und cosφ=1 gilt P=U1 I1=U2 I2. Allgemein ist UI Scheinleistung in VA und P=UIcosφ Wirkleistung. U1,U2>0, I1≥0; Windungszahlen sind positive sichere Ganzzahlen bis 9007199254740991 als numerische Grenze.",
    "example": "500/100 Windungen, 220 V und 2 A ergeben 44 V, 10 A und 440 W im idealen ohmschen Modell. 220→12 V ergibt k=12/220≈0,054545, keine aufzurundende Windungszahl. I1=0 ergibt modellhaft I2=P=0; realer Leerlaufstrom bleibt ausgeschlossen.",
    "faq": [
      {
        "q": "Warum steigt der Strom, wenn die Spannung fällt?",
        "a": "Strom ist umgekehrt proportional zum Windungsverhältnis: k=0,2 liefert I2=5 I1. Das ist die Umrechnung eines Betriebspunkts, kein zulässiger Nennstromnachweis."
      },
      {
        "q": "Wie weit ist das von einem echten Transformator entfernt?",
        "a": "Verluste, Magnetisierungsstrom, Lastregelung und Sättigung fehlen. Ein allgemeiner prozentualer Fehler ist nicht festgelegt; konkrete Kern-, Frequenz- und Lastdaten werden benötigt."
      },
      {
        "q": "Können die Windungen gebrochen herauskommen?",
        "a": "Ein Verhältnis darf gebrochen sein, etwa 12/220. Ganze Windungszahlen werden separat gewählt. Das Verhältnis auf eine ganze Zahl aufzurunden ist falsch; N1,N2 wählen und Spannung neu berechnen."
      },
      {
        "q": "Gilt das auch für einen Spartransformator?",
        "a": "Die ideale Spannungsbeziehung kann gelten, ein Spartransformator liefert jedoch keine galvanische Trennung. Auch 1:1 beschreibt nur das Verhältnis, nicht Aufbau oder Isolationsklasse."
      }
    ],
    "disclaimer": "Ideale Effektivwerte mit cosφ=1 für W; ohne Verluste, Sättigung oder bestätigte Isolations-/Stromgrenzen."
  },
  "es": {
    "longDescription": "Relaciona tensiones y corrientes eficaces de un transformador ideal mediante la relación de espiras. Un modo acepta N1,N2 enteros; el otro, U2 deseada. N2/N1 puede ser fraccionaria y no se redondea como número de espiras. Se omiten pérdidas, magnetización y regulación; la potencia en W supone carga resistiva con cosφ=1.",
    "howToUse": [
      "Elige espiras conocidas o tensión secundaria deseada; rellena los campos visibles.",
      "Usa tensiones y corriente eficaces coherentes.",
      "W suponen cosφ=1; otras cargas requieren factor de potencia.",
      "Para bobinado real elige N1,N2 enteros y comprueba de nuevo relación y diseño magnético/térmico."
    ],
    "howItWorks": "k=N2/N1=U2/U1, U2=U1 k, I2=I1/k. Con RMS y cosφ=1: P=U1 I1=U2 I2. En AC general UI es potencia aparente en VA y P=UIcosφ es activa. U1,U2>0, I1≥0; espiras son enteros positivos seguros hasta 9007199254740991 como límite numérico.",
    "example": "500/100 espiras, 220 V y 2 A dan 44 V, 10 A y 440 W en el modelo resistivo ideal. 220→12 V da k=12/220≈0,054545, no una cantidad de espiras para redondear al alza. I1=0 da I2=P=0; se omite la corriente real en vacío.",
    "faq": [
      {
        "q": "¿Por qué sube la corriente cuando baja la tensión?",
        "a": "La corriente es inversa a la relación de espiras: k=0,2 da I2=5 I1. Transforma el punto de operación introducido, no certifica corriente admisible del bobinado."
      },
      {
        "q": "¿Cuánto se aleja esto de un transformador real?",
        "a": "No incluye pérdidas, magnetización, regulación bajo carga ni saturación. No hay un error porcentual universal; hacen falta datos de núcleo, frecuencia y carga concretos."
      },
      {
        "q": "¿Las espiras pueden salir fraccionarias?",
        "a": "La relación puede ser fraccionaria, por ejemplo 12/220. Los números enteros de espiras se eligen aparte. Redondear la relación a un entero es incorrecto: elige N1,N2 y recalcula tensión."
      },
      {
        "q": "¿Vale para un autotransformador?",
        "a": "La relación ideal de tensiones puede servir, pero un autotransformador no ofrece aislamiento galvánico. Incluso 1:1 solo describe una relación, no construcción ni clasificación del aislamiento."
      }
    ],
    "disclaimer": "RMS ideales con cosφ=1 para W; sin pérdidas, saturación ni certificación de aislamiento o corriente."
  }
};
