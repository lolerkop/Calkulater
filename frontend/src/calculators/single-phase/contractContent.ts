import type { CalculatorCopy } from '../../lib/platform/types';

type Body = Pick<CalculatorCopy, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'> & Partial<Pick<CalculatorCopy, 'seoDescription'>>;

export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Body> = {
  "ru": {
    "longDescription": "Связь действующих значений напряжения U и тока I с активной, полной и реактивной мощностями однофазной синусоидальной нагрузки. Можно найти P по I или I по P. Это модель установившегося режима с PF = cos φ, а не расчёт кабеля, автомата или пускового тока. При несинусоидальном токе измеренный PF может отличаться от cos φ, а показанная Q не описывает все составляющие неактивной мощности.",
    "howToUse": [
      "Выберите активную мощность или ток; заполните известный ток либо мощность в видимом поле.",
      "Введите действующее напряжение в В, а не амплитуду синусоиды.",
      "Укажите PF больше 0 и до 1; известные ток и мощность могут быть нулевыми, но не отрицательными.",
      "Сравните единицы: P — Вт, S — ВА, модуль Q — вар. Номиналы защиты рассчитываются отдельно."
    ],
    "howItWorks": "P = U·I·PF в ваттах; S = U·I в вольт-амперах. Обратный ток I = P/(U·PF). Для синусоидального режима |Q| = S·√((1−PF)(1+PF)). При PF = 1 реактивная мощность нулевая, при I = 0 все мощности нулевые. Напряжение требуется положительное, поскольку обратный режим делит на U.",
    "example": "230 В, 8 А и PF = 0,9 дают P = 1 656 Вт, S = 1 840 ВА и |Q| ≈ 802,04 вар. В обратном режиме 1 656 Вт при тех же U и PF возвращают 8 А. При PF = 1 и 8 А P = S = 1 840.",
    "faq": [
      {
        "q": "Действующее напряжение равно амплитуде?",
        "a": "Нет. Для синусоиды Uдейств = Uамп/√2, аналогично для тока. Если ввести обе амплитуды вместо действующих значений, произведение U·I будет завышено вдвое."
      },
      {
        "q": "Почему ватты, вольт-амперы и вары разные?",
        "a": "P — средняя активная мощность, S — произведение действующих U и I, Q — реактивная составляющая синусоидальной модели. Они связаны S² = P² + Q², а не S = P + Q."
      },
      {
        "q": "Можно ли по ответу выбрать кабель или автомат?",
        "a": "Одного тока недостаточно. Нужны условия прокладки, нагрев, длина, пусковые режимы, защита и применимые нормы. Эти данные не вводятся и калькулятор не выдаёт проектное решение."
      },
      {
        "q": "Что означает нулевая или отрицательная нагрузка?",
        "a": "Нулевой известный ток или мощность даёт алгебраический случай без потребления. Отрицательные значения отклоняются: здесь используются модули пассивной нагрузки, а не подписанный поток энергии генератора. PF = 0 исключён из-за обратного деления."
      }
    ],
    "disclaimer": "Однофазная синусоидальная модель по действующим значениям. Гармоники, знак Q, переходные режимы, защита и допустимый ток проводников не рассчитываются."
  },
  "en": {
    "longDescription": "Relate RMS voltage U and current I to active, apparent and reactive power of a single-phase sinusoidal load. Find P from I or I from P. This is a steady-state model with PF = cos φ, not a cable, breaker or starting-current calculation. For nonsinusoidal current, measured PF can differ from cos φ and the displayed Q does not describe every non-active component.",
    "howToUse": [
      "Choose active power or current and fill the visible known-current or known-power field.",
      "Enter RMS voltage in V, not the sine-wave amplitude.",
      "Use PF greater than 0 and at most 1; known current or power may be zero but cannot be negative.",
      "Check units: P in W, S in VA and Q magnitude in var. Protection ratings require a separate calculation."
    ],
    "howItWorks": "P = U·I·PF in watts; S = U·I in volt-amperes. The inverse is I = P/(U·PF). In sinusoidal operation, |Q| = S·√((1−PF)(1+PF)). At PF = 1 reactive power is zero; at I = 0 all powers are zero. Voltage must be positive because the inverse mode divides by U.",
    "example": "230 V, 8 A and PF = 0.9 give P = 1 656 W, S = 1 840 VA and |Q| ≈ 802.04 var. The inverse with 1 656 W at the same U and PF returns 8 A. At PF = 1 and 8 A, P = S = 1 840.",
    "faq": [
      {
        "q": "Is RMS voltage the same as amplitude?",
        "a": "No. For a sine wave, Urms = Upeak/√2, and similarly for current. Entering both peak values instead of RMS makes their product twice as large."
      },
      {
        "q": "Why do watts, volt-amperes and vars differ?",
        "a": "P is average active power, S is the product of RMS U and I, and Q is the reactive component in the sinusoidal model. They satisfy S² = P² + Q², not S = P + Q."
      },
      {
        "q": "Can the result select a cable or breaker?",
        "a": "Current alone is insufficient. Installation, heating, length, starting behaviour, protection and applicable rules also matter. Those inputs are absent, so this page does not produce a design decision."
      },
      {
        "q": "What does a zero or negative load mean?",
        "a": "Zero known current or power gives an algebraic no-consumption case. Negative values are rejected because this model uses passive-load magnitudes, not signed generator energy flow. PF = 0 is excluded because of inverse division."
      }
    ],
    "disclaimer": "Single-phase sinusoidal RMS model. Harmonics, Q sign, transients, protection and conductor current limits are not calculated."
  },
  "uk": {
    "longDescription": "Зв'язок діючих значень напруги U та струму I з активною, повною й реактивною потужностями однофазного синусоїдального навантаження. Можна знайти P за I або I за P. Це усталений режим із PF = cos φ, а не розрахунок кабелю, автомата чи пускового струму. За несинусоїдального струму виміряний PF може відрізнятися від cos φ, а показана Q не описує всіх неактивних складових.",
    "howToUse": [
      "Оберіть активну потужність або струм і заповніть видиме поле відомого струму чи потужності.",
      "Введіть діючу напругу у В, не амплітуду синусоїди.",
      "Укажіть PF понад 0 і до 1; відомі струм чи потужність можуть бути нульовими, але не від'ємними.",
      "Звірте одиниці: P — Вт, S — ВА, модуль Q — вар. Номінали захисту визначаються окремо."
    ],
    "howItWorks": "P = U·I·PF у ватах; S = U·I у вольт-амперах. Зворотний струм I = P/(U·PF). Для синусоїдального режиму |Q| = S·√((1−PF)(1+PF)). За PF = 1 реактивна потужність нульова; за I = 0 нульові всі потужності. Напруга має бути додатною через ділення на U у зворотному режимі.",
    "example": "230 В, 8 А та PF = 0,9 дають P = 1 656 Вт, S = 1 840 ВА та |Q| ≈ 802,04 вар. Зворотний режим із 1 656 Вт за тих самих U та PF повертає 8 А. За PF = 1 та 8 А P = S = 1 840.",
    "faq": [
      {
        "q": "Чи діюча напруга дорівнює амплітуді?",
        "a": "Ні. Для синусоїди Uдіюч = Uамп/√2, аналогічно для струму. Введення обох амплітуд замість діючих значень завищить їх добуток удвічі."
      },
      {
        "q": "Чому вати, вольт-ампери та вари відрізняються?",
        "a": "P — середня активна потужність, S — добуток діючих U та I, Q — реактивна складова синусоїдальної моделі. Вони пов'язані S² = P² + Q², а не S = P + Q."
      },
      {
        "q": "Чи можна за відповіддю обрати кабель або автомат?",
        "a": "Лише струму недостатньо. Потрібні умови прокладання, нагрів, довжина, пускові режими, захист і відповідні норми. Цих даних немає, тож сторінка не дає проєктного рішення."
      },
      {
        "q": "Що означає нульове чи від'ємне навантаження?",
        "a": "Нульовий відомий струм або потужність дає алгебраїчний випадок без споживання. Від'ємні значення відхиляються: тут модулі пасивного навантаження, не підписаний потік енергії генератора. PF = 0 виключено через зворотне ділення."
      }
    ],
    "disclaimer": "Однофазна синусоїдальна модель за діючими значеннями. Гармоніки, знак Q, перехідні режими, захист і допустимий струм провідників не обчислюються."
  },
  "de": {
    "longDescription": "Verknüpft Effektivwerte von Spannung U und Strom I mit Wirk-, Schein- und Blindleistung einer einphasigen sinusförmigen Last. P lässt sich aus I oder I aus P bestimmen. Es ist ein stationäres Modell mit PF = cos φ, keine Berechnung von Kabel, Sicherung oder Anlaufstrom. Bei nichtsinusförmigem Strom kann gemessener PF von cos φ abweichen; das angezeigte Q beschreibt dann nicht alle nichtaktiven Anteile.",
    "howToUse": [
      "Wähle Wirkleistung oder Strom und fülle das sichtbare Feld des bekannten Stroms beziehungsweise der bekannten Leistung aus.",
      "Gib die Effektivspannung in V ein, nicht den Scheitelwert der Sinusspannung.",
      "Verwende PF größer als 0 und höchstens 1; bekannter Strom oder Leistung dürfen null, aber nicht negativ sein.",
      "Prüfe die Einheiten: P in W, S in VA und Q-Betrag in var. Schutzgeräte erfordern eine getrennte Dimensionierung."
    ],
    "howItWorks": "P = U·I·PF in Watt; S = U·I in Voltampere. Umgekehrt gilt I = P/(U·PF). Für sinusförmige Größen ist |Q| = S·√((1−PF)(1+PF)). Bei PF = 1 ist Q null, bei I = 0 sind alle Leistungen null. U muss positiv sein, da der inverse Modus durch U teilt.",
    "example": "230 V, 8 A und PF = 0,9 ergeben P = 1 656 W, S = 1 840 VA und |Q| ≈ 802,04 var. Umgekehrt ergeben 1 656 W bei gleichen U und PF wieder 8 A. Bei PF = 1 und 8 A gilt P = S = 1 840.",
    "faq": [
      {
        "q": "Ist die Effektivspannung gleich dem Scheitelwert?",
        "a": "Nein. Für eine Sinusspannung gilt Ueff = UScheitel/√2, entsprechend für den Strom. Beide Scheitelwerte statt Effektivwerten einzugeben verdoppelt ihr Produkt."
      },
      {
        "q": "Warum unterscheiden sich Watt, Voltampere und var?",
        "a": "P ist mittlere Wirkleistung, S das Produkt der Effektivwerte von U und I, Q die Blindkomponente im sinusförmigen Modell. Es gilt S² = P² + Q², nicht S = P + Q."
      },
      {
        "q": "Kann das Ergebnis Kabel oder Sicherung bestimmen?",
        "a": "Der Strom allein reicht nicht. Verlegung, Erwärmung, Länge, Anlaufverhalten, Schutz und geltende Regeln sind ebenfalls nötig. Diese Angaben fehlen; die Seite liefert keine Auslegungsentscheidung."
      },
      {
        "q": "Was bedeutet eine Last von null oder ein negativer Wert?",
        "a": "Bekannter Strom oder Leistung null ergibt einen algebraischen Fall ohne Verbrauch. Negative Werte werden abgelehnt, da Beträge passiver Lasten statt gerichteter Generatorenergie modelliert werden. PF = 0 ist wegen der inversen Division ausgeschlossen."
      }
    ],
    "disclaimer": "Einphasiges sinusförmiges Effektivwertmodell. Oberschwingungen, Q-Vorzeichen, Übergänge, Schutz und Stromgrenzen von Leitungen werden nicht berechnet."
  },
  "es": {
    "longDescription": "Relaciona valores eficaces de tensión U y corriente I con potencias activa, aparente y reactiva de una carga monofásica sinusoidal. Permite hallar P con I o I con P. Es un modelo permanente con PF = cos φ, no un cálculo de cable, protección o corriente de arranque. Con corriente no sinusoidal, el PF medido puede diferir de cos φ y la Q mostrada no describe todas las componentes no activas.",
    "howToUse": [
      "Elige potencia activa o corriente y rellena el campo visible de corriente o potencia conocida.",
      "Introduce tensión eficaz en V, no la amplitud de la sinusoide.",
      "Usa PF mayor que 0 y hasta 1; corriente y potencia conocidas pueden ser cero, pero no negativas.",
      "Comprueba unidades: P en W, S en VA y módulo Q en var. La protección requiere otro dimensionamiento."
    ],
    "howItWorks": "P = U·I·PF en vatios; S = U·I en voltamperios. La corriente inversa es I = P/(U·PF). En régimen sinusoidal, |Q| = S·√((1−PF)(1+PF)). Con PF = 1, Q es cero; con I = 0, todas las potencias son cero. U debe ser positiva porque el modo inverso divide por U.",
    "example": "230 V, 8 A y PF = 0,9 dan P = 1 656 W, S = 1 840 VA y |Q| ≈ 802,04 var. El modo inverso con 1 656 W y los mismos U y PF devuelve 8 A. Con PF = 1 y 8 A, P = S = 1 840.",
    "faq": [
      {
        "q": "¿La tensión eficaz es igual a la amplitud?",
        "a": "No. Para una sinusoide, Ueficaz = Upico/√2, y lo mismo para corriente. Introducir ambos valores de pico en vez de eficaces duplica su producto."
      },
      {
        "q": "¿Por qué difieren vatios, voltamperios y var?",
        "a": "P es potencia activa media, S el producto de U e I eficaces y Q la componente reactiva del modelo sinusoidal. Cumplen S² = P² + Q², no S = P + Q."
      },
      {
        "q": "¿El resultado permite elegir cable o protección?",
        "a": "La corriente no basta. Importan instalación, calentamiento, longitud, arranque, protección y normas aplicables. No se introducen esos datos, así que no se obtiene una decisión de diseño."
      },
      {
        "q": "¿Qué significa una carga cero o negativa?",
        "a": "Corriente o potencia conocida cero da un caso algebraico sin consumo. Se rechazan negativos porque se usan módulos de carga pasiva, no flujos de energía de generación con signo. Se excluye PF = 0 por la división inversa."
      }
    ],
    "disclaimer": "Modelo monofásico sinusoidal con valores eficaces. No calcula armónicos, signo de Q, transitorios, protección ni corriente admisible de conductores."
  }
};
