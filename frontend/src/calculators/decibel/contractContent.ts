// Individually reviewed against all five actual188 native bodies; human editorial review pending.
export const contract = {
  "ru": {
    "longDescription": "Сложите уровни независимых некогерентных источников с одной опорой или переведите положительное отношение мощностей/амплитуд в дБ. Для когерентных волн с фазой сначала складывают амплитуды; эта форма фазу не вводит. Результат не является субъективной громкостью.",
    "howToUse": [
      "Разделяйте уровни пробелом, точкой с запятой или запятой; в списке запятая — разделитель, десятичная часть задаётся точкой.",
      "Для отношения выберите мощность или амплитуду и введите две положительные величины в одинаковых единицах.",
      "При смене режима используются только видимые поля; отрицательные уровни дБ допустимы."
    ],
    "howItWorks": "LΣ=Lmax+10 log₁₀(Σ10^((Li −Lmax)/10)): сдвиг к максимуму предотвращает переполнение отдельных мощностей. Для отношения:10 log₁₀(P 2/P 1);20 log₁₀(A 2/A 1) только при общей пропорции P∝A², например одинаковом импедансе.",
    "example": "80;80 дБ дают≈83,010 дБ, прибавка≈3,010 дБ, а не 160. Отношение мощности 2/1 даёт≈3,010 дБ; отношение амплитуды 2/1 при одинаковом импедансе даёт≈6,021 дБ и четырёхкратную мощность.",
    "faq": [
      {
        "q": "Почему два источника по 80 дБ дают 83, а не 160?",
        "a": "80;80 дБ дают≈83,010 дБ, прибавка≈3,010 дБ, а не 160. Отношение мощности 2/1 даёт≈3,010 дБ; отношение амплитуды 2/1 при одинаковом импедансе даёт≈6,021 дБ и четырёхкратную мощность. Сложите уровни независимых некогерентных источников с одной опорой или переведите положительное отношение мощностей/амплитуд в дБ. Для когерентных волн с фазой сначала складывают амплитуды; эта форма фазу не вводит. Результат не является субъективной громкостью."
      },
      {
        "q": "Всегда ли удвоение даёт +3 дБ?",
        "a": "Да, и это свойство логарифма: прибавка не зависит от исходного уровня. От 40 дБ и от 100 дБ удвоение мощности одинаково добавляет 3,01 дБ."
      },
      {
        "q": "Когда множитель 10, а когда 20?",
        "a": "LΣ=Lmax+10 log₁₀(Σ10^((Li −Lmax)/10)): сдвиг к максимуму предотвращает переполнение отдельных мощностей. Для отношения:10 log₁₀(P 2/P 1);20 log₁₀(A 2/A 1) только при общей пропорции P∝A², например одинаковом импедансе."
      },
      {
        "q": "Можно ли так складывать громкость на слух?",
        "a": "Сложите уровни независимых некогерентных источников с одной опорой или переведите положительное отношение мощностей/амплитуд в дБ. Для когерентных волн с фазой сначала складывают амплитуды; эта форма фазу не вводит. Результат не является субъективной громкостью."
      }
    ],
    "disclaimer": "Общая опора и совместимые уровни, не произвольная сумма дБ разных шкал. Отношения положительные. Список до 10000 уровней; все выводимые отношения и арифметическая диагностическая сумма должны помещаться в числовой диапазон.0 дБ означает отношение 1;20 мкПа — отдельная опора воздушного SPL, не всех дБ."
  },
  "en": {
    "longDescription": "Add levels of independent incoherent sources with a common reference, or convert a positive power/amplitude ratio to dB. Coherent waves require phase-aware amplitude addition first; this form has no phase input. The result is not subjective loudness.",
    "howToUse": [
      "Separate levels by spaces, semicolons or commas; commas delimit the list, so use a decimal point.",
      "For ratios select power or amplitude and enter two positive values in the same units.",
      "Only visible fields are used in each mode; negative dB levels are allowed."
    ],
    "howItWorks": "LΣ=Lmax+10 log₁₀(Σ10^((Li −Lmax)/10)); shifting to the maximum avoids overflow of individual powers. Ratios use 10 log₁₀(P 2/P 1), or 20 log₁₀(A 2/A 1) only with the same P∝A² proportionality, e.g. unchanged impedance.",
    "example": "80;80 dB gives≈83.010 dB, a≈3.010 dB increase, not 160. Power ratio 2/1 gives≈3.010 dB; amplitude ratio 2/1 at unchanged impedance gives≈6.021 dB and four times the power.",
    "faq": [
      {
        "q": "Why do two 80 dB sources give 83 and not 160?",
        "a": "80;80 dB gives≈83.010 dB, a≈3.010 dB increase, not 160. Power ratio 2/1 gives≈3.010 dB; amplitude ratio 2/1 at unchanged impedance gives≈6.021 dB and four times the power. Add levels of independent incoherent sources with a common reference, or convert a positive power/amplitude ratio to dB. Coherent waves require phase-aware amplitude addition first; this form has no phase input. The result is not subjective loudness."
      },
      {
        "q": "Does doubling always add 3 dB?",
        "a": "Yes, and that is a property of the logarithm: the increment does not depend on the starting level. From 40 dB or from 100 dB, doubling the power adds the same 3.01 dB."
      },
      {
        "q": "When is the multiplier 10 and when 20?",
        "a": "LΣ=Lmax+10 log₁₀(Σ10^((Li −Lmax)/10)); shifting to the maximum avoids overflow of individual powers. Ratios use 10 log₁₀(P 2/P 1), or 20 log₁₀(A 2/A 1) only with the same P∝A² proportionality, e.g. unchanged impedance."
      },
      {
        "q": "Can loudness be added this way?",
        "a": "Add levels of independent incoherent sources with a common reference, or convert a positive power/amplitude ratio to dB. Coherent waves require phase-aware amplitude addition first; this form has no phase input. The result is not subjective loudness."
      }
    ],
    "disclaimer": "Common reference and compatible levels, not arbitrary dB scales mixed together. Ratios must be positive. Lists have up to 10000 levels; all displayed ratios and the illustrative arithmetic sum must fit the numeric range.0 dB means ratio 1;20 µPa is an air-SPL reference, not every dB reference."
  },
  "uk": {
    "longDescription": "Додайте рівні незалежних некогерентних джерел зі спільною опорою або переведіть додатне відношення потужностей/амплітуд у дБ. Когерентні хвилі потребують складання амплітуд із фазами; фаза тут не вводиться. Результат не є суб’єктивною гучністю.",
    "howToUse": [
      "Розділяйте рівні пробілом, крапкою з комою чи комою; кома є роздільником списку, десяткову частину задавайте крапкою.",
      "Для відношення виберіть потужність або амплітуду й введіть два додатні значення в однакових одиницях.",
      "У режимі використовуються лише видимі поля; від’ємні рівні дБ допустимі."
    ],
    "howItWorks": "LΣ=Lmax+10 log₁₀(Σ10^((Li −Lmax)/10)); зсув до максимуму уникає переповнення окремих потужностей. Відношення:10 log₁₀(P 2/P 1);20 log₁₀(A 2/A 1) лише за спільної пропорції P∝A², наприклад сталого імпедансу.",
    "example": "80;80 дБ дають≈83,010 дБ, приріст≈3,010 дБ, не 160. Потужність 2/1 дає≈3,010 дБ; амплітуда 2/1 за сталого імпедансу дає≈6,021 дБ і чотирикратну потужність.",
    "faq": [
      {
        "q": "Чому подвоєння джерел додає лише 3 дБ?",
        "a": "Бо децибел логарифмічний: подвоєння потужності — це 10·log₁₀(2) ≈ 3,01 дБ. Щоб додати десять децибелів, потужність треба збільшити вдесятеро."
      },
      {
        "q": "Чому для амплітуди множник 20, а не 10?",
        "a": "LΣ=Lmax+10 log₁₀(Σ10^((Li −Lmax)/10)); зсув до максимуму уникає переповнення окремих потужностей. Відношення:10 log₁₀(P 2/P 1);20 log₁₀(A 2/A 1) лише за спільної пропорції P∝A², наприклад сталого імпедансу."
      },
      {
        "q": "Що означає 0 дБ?",
        "a": "Спільна опора й сумісні рівні, не довільна суміш шкал дБ. Відношення додатні. Список до 10000 рівнів; усі показані відношення й діагностична арифметична сума мають уміщатися в числовий діапазон.0 дБ означає відношення 1;20 мкПа — окрема опора SPL у повітрі, не всіх дБ."
      },
      {
        "q": "Наскільки гучнішим здається +10 дБ?",
        "a": "Додайте рівні незалежних некогерентних джерел зі спільною опорою або переведіть додатне відношення потужностей/амплітуд у дБ. Когерентні хвилі потребують складання амплітуд із фазами; фаза тут не вводиться. Результат не є суб’єктивною гучністю."
      }
    ],
    "disclaimer": "Спільна опора й сумісні рівні, не довільна суміш шкал дБ. Відношення додатні. Список до 10000 рівнів; усі показані відношення й діагностична арифметична сума мають уміщатися в числовий діапазон.0 дБ означає відношення 1;20 мкПа — окрема опора SPL у повітрі, не всіх дБ."
  },
  "de": {
    "longDescription": "Addiere Pegel unabhängiger inkohärenter Quellen mit gleichem Bezug oder wandle ein positives Leistungs-/Amplitudenverhältnis in dB um. Kohärente Wellen erfordern zunächst phasenabhängige Amplitudenaddition; Phasen fehlen hier. Das Ergebnis ist keine subjektive Lautheit.",
    "howToUse": [
      "Trenne Pegel mit Leerzeichen, Semikolon oder Komma; Komma trennt die Liste, Dezimalzahlen nutzen einen Punkt.",
      "Wähle Leistung oder Amplitude und gib zwei positive Größen in gleichen Einheiten ein.",
      "Je Modus werden nur sichtbare Felder verwendet; negative dB-Pegel sind zulässig."
    ],
    "howItWorks": "LΣ=Lmax+10 log₁₀(Σ10^((Li −Lmax)/10)); die Verschiebung zum Maximum verhindert Überlauf einzelner Leistungen. Verhältnisse:10 log₁₀(P 2/P 1), oder 20 log₁₀(A 2/A 1) nur bei gleicher Proportionalität P∝A², etwa gleichem Impedanzwert.",
    "example": "80;80 dB ergeben≈83,010 dB, einen Anstieg≈3,010 dB statt 160. Leistung 2/1 ergibt≈3,010 dB; Amplitude 2/1 bei gleicher Impedanz ergibt≈6,021 dB und vierfache Leistung.",
    "faq": [
      {
        "q": "Warum ergeben zwei Quellen zu 80 dB 83 und nicht 160?",
        "a": "80;80 dB ergeben≈83,010 dB, einen Anstieg≈3,010 dB statt 160. Leistung 2/1 ergibt≈3,010 dB; Amplitude 2/1 bei gleicher Impedanz ergibt≈6,021 dB und vierfache Leistung. Addiere Pegel unabhängiger inkohärenter Quellen mit gleichem Bezug oder wandle ein positives Leistungs-/Amplitudenverhältnis in dB um. Kohärente Wellen erfordern zunächst phasenabhängige Amplitudenaddition; Phasen fehlen hier. Das Ergebnis ist keine subjektive Lautheit."
      },
      {
        "q": "Bringt Verdoppeln immer 3 dB?",
        "a": "Ja, und das ist eine Eigenschaft des Logarithmus: der Zuwachs hängt nicht vom Ausgangspegel ab. Von 40 dB oder von 100 dB aus bringt die doppelte Leistung dieselben 3,01 dB."
      },
      {
        "q": "Wann ist der Faktor 10 und wann 20?",
        "a": "LΣ=Lmax+10 log₁₀(Σ10^((Li −Lmax)/10)); die Verschiebung zum Maximum verhindert Überlauf einzelner Leistungen. Verhältnisse:10 log₁₀(P 2/P 1), oder 20 log₁₀(A 2/A 1) nur bei gleicher Proportionalität P∝A², etwa gleichem Impedanzwert."
      },
      {
        "q": "Lässt sich Lautheit so addieren?",
        "a": "Addiere Pegel unabhängiger inkohärenter Quellen mit gleichem Bezug oder wandle ein positives Leistungs-/Amplitudenverhältnis in dB um. Kohärente Wellen erfordern zunächst phasenabhängige Amplitudenaddition; Phasen fehlen hier. Das Ergebnis ist keine subjektive Lautheit."
      }
    ],
    "disclaimer": "Gleicher Bezug und kompatible Pegel, keine beliebige Mischung verschiedener dB-Skalen. Verhältnisse müssen positiv sein. Bis 10000 Pegel; alle angezeigten Verhältnisse und die illustrative arithmetische Summe müssen numerisch darstellbar sein.0 dB bedeutet Verhältnis 1;20 µPa ist ein Luft-SPL-Bezug, nicht jeder dB-Bezug."
  },
  "es": {
    "longDescription": "Suma niveles de fuentes independientes incoherentes con igual referencia o convierte una razón positiva de potencia/amplitud a dB. Las ondas coherentes requieren sumar amplitudes con fase; aquí no se introduce fase. No se calcula sonoridad subjetiva.",
    "howToUse": [
      "Separa niveles por espacios, punto y coma o comas; la coma separa la lista, usa punto decimal.",
      "Para razones elige potencia o amplitud e introduce dos valores positivos con iguales unidades.",
      "Cada modo usa solo campos visibles; los niveles negativos de dB son válidos."
    ],
    "howItWorks": "LΣ=Lmax+10 log₁₀(Σ10^((Li −Lmax)/10)); desplazar al máximo evita desbordar potencias individuales. Razones:10 log₁₀(P 2/P 1), o 20 log₁₀(A 2/A 1) solo con igual proporcionalidad P∝A², por ejemplo igual impedancia.",
    "example": "80;80 dB dan≈83,010 dB, aumento≈3,010 dB, no 160. Potencia 2/1 da≈3,010 dB; amplitud 2/1 con igual impedancia da≈6,021 dB y potencia cuádruple.",
    "faq": [
      {
        "q": "¿Por qué dos fuentes de 80 dB dan 83 y no 160?",
        "a": "80;80 dB dan≈83,010 dB, aumento≈3,010 dB, no 160. Potencia 2/1 da≈3,010 dB; amplitud 2/1 con igual impedancia da≈6,021 dB y potencia cuádruple. Suma niveles de fuentes independientes incoherentes con igual referencia o convierte una razón positiva de potencia/amplitud a dB. Las ondas coherentes requieren sumar amplitudes con fase; aquí no se introduce fase. No se calcula sonoridad subjetiva."
      },
      {
        "q": "¿Duplicar añade siempre 3 dB?",
        "a": "Sí, y es una propiedad del logaritmo: el incremento no depende del nivel de partida. Desde 40 dB o desde 100 dB, duplicar la potencia añade los mismos 3,01 dB."
      },
      {
        "q": "¿Cuándo el multiplicador es 10 y cuándo 20?",
        "a": "LΣ=Lmax+10 log₁₀(Σ10^((Li −Lmax)/10)); desplazar al máximo evita desbordar potencias individuales. Razones:10 log₁₀(P 2/P 1), o 20 log₁₀(A 2/A 1) solo con igual proporcionalidad P∝A², por ejemplo igual impedancia."
      },
      {
        "q": "¿Puede sumarse así la sonoridad?",
        "a": "Suma niveles de fuentes independientes incoherentes con igual referencia o convierte una razón positiva de potencia/amplitud a dB. Las ondas coherentes requieren sumar amplitudes con fase; aquí no se introduce fase. No se calcula sonoridad subjetiva."
      }
    ],
    "disclaimer": "Referencia común y niveles compatibles, no mezcla arbitraria de escalas dB. Razones positivas. Hasta 10000 niveles; todas las razones mostradas y la suma aritmética ilustrativa deben caber en el rango numérico.0 dB significa razón 1;20 µPa es referencia de SPL en aire, no de todos los dB."
  }
};
