import type { CalculatorCopy } from '../../lib/platform/types';

// Owned native explanations reviewed against this calculator’s model.
// Human editorial review is still pending; this file makes no publication claim.
export const deBroglieContractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Pick<CalculatorCopy, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq'>> = {
  "ru": {
    "longDescription": "Длина волны де Бройля получается из импульса частицы: λ=h/p. Здесь используется нерелятивистское приближение p=mv, масса вводится в единицах 10⁻²⁷ кг, скорость — в км/с. Результат содержит длину волны, импульс, кинетическую энергию и долю скорости света β. При приближении скорости к c нужен релятивистский импульс; эта страница его не вычисляет.",
    "howToUse": [
      "Масса электрона 9,1093837·10⁻³¹ кг соответствует значению 0,00091093837 в поле. Не вводите килограммы без пересчёта. Скорость должна быть положительной и меньше 299792,458 км/с; допустимое поле ещё не означает точность нерелятивистского приближения."
    ],
    "howItWorks": "λ = h/p, где h = 6,62607015·10⁻³⁴ Дж·с. Введённая масса умножается на 10⁻²⁷ кг, скорость — на 1000 м/с; p=mv; Eₖ=mv²/2; β=v/c. Все результаты относятся к нерелятивистскому приближению.",
    "example": "Электрон при 1000 км/с имеет длину волны 7,27·10⁻¹⁰ метра — меньше нанометра.",
    "faq": [
      {
        "q": "Почему у мяча нет заметной волны?",
        "a": "Для мяча 150 г со скоростью 30 м/с p=4,5 кг·м/с и λ≈1,472·10⁻³⁴ м. Это примерно на 19 порядков меньше масштаба 10⁻¹⁵ м; сравнение зависит от выбранного размера ядра."
      },
      {
        "q": "Зачем масса в единицах 10⁻²⁷ кг?",
        "a": "Так маленькую массу удобно вводить обычной десятичной записью. Поле задаёт множитель при 10⁻²⁷ кг: единица означает 10⁻²⁷ кг. Это соглашение об единицах, а не новая физическая масса."
      },
      {
        "q": "Что длина волны говорит о микроскопе?",
        "a": "Малая длина волны делает возможной высокую разрешающую способность, но фактический результат микроскопа также зависит от линз, аберраций и образца. Одна λ не предсказывает разрешение прибора."
      },
      {
        "q": "Работает ли формула при околосветовых скоростях?",
        "a": "Нет: нужно p=γmv. Для той же массы и скорости релятивистская λ короче нерелятивистской в γ раз. Значение β показывается, но такой режим здесь не реализован."
      },
      {
        "q": "Что показывает доля скорости света вместо частоты?",
        "a": "β=v/c помогает оценить применимость p=mv. Частота волны материи определяется энергией через E=hf; скорость частицы v и λ нельзя просто подставить в f=v/λ как для обычной волны."
      }
    ]
  },
  "en": {
    "longDescription": "A particle’s de Broglie wavelength follows from its momentum: λ=h/p. This page uses the nonrelativistic approximation p=mv, with mass in units of 10⁻²⁷ kg and speed in km/s. It reports wavelength, momentum, kinetic energy and the fraction of light speed β. Near c the relativistic momentum is required; this page does not calculate it.",
    "howToUse": [
      "An electron mass of 9.1093837·10⁻³¹ kg corresponds to 0.00091093837 in the field. Convert kilograms first. Speed must be positive and below 299792.458 km/s; satisfying the field limits does not establish the accuracy of the nonrelativistic approximation."
    ],
    "howItWorks": "λ = h/p, with h = 6.62607015·10⁻³⁴ J·s. Multiply the entered mass by 10⁻²⁷ kg and speed by 1000 m/s; p=mv; K=mv²/2; β=v/c. All results belong to the nonrelativistic approximation.",
    "example": "An electron at 1000 km/s has a wavelength of 7.27·10⁻¹⁰ metres — under a nanometre.",
    "faq": [
      {
        "q": "Why has a ball no noticeable wave?",
        "a": "For a 150 g ball at 30 m/s, p=4.5 kg·m/s and λ≈1.472·10⁻³⁴ m. This is about 19 orders below the 10⁻¹⁵ m scale; the comparison depends on the chosen nuclear size."
      },
      {
        "q": "Why use mass units of 10⁻²⁷ kg?",
        "a": "Scaled units make the small mass convenient to enter as a decimal. A field value of 1 means 10⁻²⁷ kg. This is an input-unit convention, not a different physical mass."
      },
      {
        "q": "What does wavelength say about a microscope?",
        "a": "A short wavelength enables high resolving power, but actual microscope resolution also depends on lenses, aberrations and the specimen. A wavelength alone does not predict instrument resolution."
      },
      {
        "q": "Does the formula hold near light speed?",
        "a": "No: use p=γmv. For the same mass and speed the relativistic wavelength is shorter by a factor of γ. The displayed β is a diagnostic; a relativistic calculation mode is not implemented."
      },
      {
        "q": "Why show a fraction of light speed rather than frequency?",
        "a": "β=v/c helps assess when p=mv is applicable. Matter-wave frequency relates to energy through E=hf; the particle speed and wavelength cannot simply be combined as f=v/λ for an ordinary wave."
      }
    ]
  },
  "uk": {
    "longDescription": "Довжина хвилі де Бройля визначається імпульсом частинки: λ=h/p. Тут використано нерелятивістське наближення p=mv, масу в одиницях 10⁻²⁷ кг і швидкість у км/с. Показуються довжина хвилі, імпульс, кінетична енергія та частка швидкості світла β. Поблизу c потрібен релятивістський імпульс, який ця сторінка не обчислює.",
    "howToUse": [
      "Масі електрона 9,1093837·10⁻³¹ кг відповідає 0,00091093837 у полі. Кілограми спочатку перераховуйте. Швидкість має бути додатною та меншою за 299792,458 км/с; допустимий ввід ще не гарантує точність нерелятивістського наближення."
    ],
    "howItWorks": "λ = h/p, де h = 6,62607015·10⁻³⁴ Дж·с. Введену масу помножте на 10⁻²⁷ кг, швидкість — на 1000 м/с; p=mv; Eₖ=mv²/2; β=v/c. Усі результати належать нерелятивістському наближенню.",
    "example": "Електрон за 1000 км/с має довжину хвилі 7,27·10⁻¹⁰ метра — менше за нанометр і порівнянно з відстанню між атомами в кристалі.",
    "faq": [
      {
        "q": "Чому хвильові властивості м’яча непомітні?",
        "a": "Для м’яча 150 г зі швидкістю 30 м/с p=4,5 кг·м/с і λ≈1,472·10⁻³⁴ м. Це близько 19 порядків нижче масштабу 10⁻¹⁵ м; порівняння залежить від обраного розміру ядра."
      },
      {
        "q": "Навіщо маса в одиницях 10⁻²⁷ кг?",
        "a": "Масу зручно вводити десятковим числом у масштабованих одиницях: значення 1 означає 10⁻²⁷ кг. Це домовленість про одиниці поля, а не інша фізична маса."
      },
      {
        "q": "Що довжина хвилі говорить про мікроскоп?",
        "a": "Коротка хвиля дає можливість високої роздільної здатності, але реальний результат також залежить від лінз, аберацій і зразка. Сама λ не визначає роздільну здатність приладу."
      },
      {
        "q": "Чи працює формула для великих швидкостей?",
        "a": "Ні: потрібен імпульс p=γmv. За тієї самої маси та швидкості релятивістська λ коротша у γ разів. β є діагностичною величиною, а релятивістського режиму тут немає."
      },
      {
        "q": "Чому показується частка швидкості світла замість частоти?",
        "a": "β=v/c допомагає оцінити застосовність p=mv. Частота хвилі матерії пов’язана з енергією через E=hf; швидкість частинки та λ не можна просто підставити у f=v/λ як для звичайної хвилі."
      },
      {
        "q": "Чи справедливе λ=h/p для фотона?",
        "a": "Так. Для фотона p=E/c, звідки λ=hc/E. Тут же поля маси та швидкості реалізують p=mv для масивної частинки, тому фотони обчислюйте калькулятором енергії фотона."
      }
    ]
  },
  "de": {
    "longDescription": "Die De-Broglie-Wellenlänge folgt aus dem Teilchenimpuls: λ=h/p. Hier wird die nichtrelativistische Näherung p=mv verwendet, mit Masse in Einheiten von 10⁻²⁷ kg und Geschwindigkeit in km/s. Die Ausgabe enthält Wellenlänge, Impuls, kinetische Energie und den Lichtgeschwindigkeitsanteil β. Nahe c ist der relativistische Impuls nötig; dieser wird hier nicht berechnet.",
    "howToUse": [
      "Die Elektronenmasse 9,1093837·10⁻³¹ kg entspricht dem Eingabewert 0,00091093837. Kilogramm müssen zuerst umgerechnet werden. Die Geschwindigkeit muss positiv und kleiner als 299792,458 km/s sein; ein zulässiger Eingabewert belegt noch nicht die Genauigkeit der Näherung."
    ],
    "howItWorks": "λ = h/p, mit h = 6,62607015·10⁻³⁴ J·s. Multipliziere die eingegebene Masse mit 10⁻²⁷ kg und die Geschwindigkeit mit 1000 m/s; p=mv; K=mv²/2; β=v/c. Alle Ergebnisse gehören zur nichtrelativistischen Näherung.",
    "example": "Ein Elektron mit 1000 km/s hat eine Wellenlänge von 7,27·10⁻¹⁰ Metern — unter einem Nanometer.",
    "faq": [
      {
        "q": "Warum hat ein Ball keine merkliche Welle?",
        "a": "Für einen Ball von 150 g bei 30 m/s gilt p=4,5 kg·m/s und λ≈1,472·10⁻³⁴ m. Das sind etwa 19 Größenordnungen unter 10⁻¹⁵ m; der Vergleich hängt von der gewählten Kerngröße ab."
      },
      {
        "q": "Warum Masse in Einheiten von 10⁻²⁷ kg?",
        "a": "Skalierte Einheiten erleichtern die Dezimaleingabe einer sehr kleinen Masse. Der Wert 1 bedeutet 10⁻²⁷ kg. Dies ist eine Einheit des Eingabefelds, keine andere physikalische Masse."
      },
      {
        "q": "Was sagt die Wellenlänge über ein Mikroskop aus?",
        "a": "Eine kurze Wellenlänge ermöglicht eine hohe Auflösung. Die tatsächliche Mikroskopauflösung hängt zusätzlich von Linsen, Abbildungsfehlern und Probe ab. λ allein bestimmt die Geräteauflösung nicht."
      },
      {
        "q": "Gilt die Formel nahe der Lichtgeschwindigkeit?",
        "a": "Nein: Dafür ist p=γmv nötig. Bei gleicher Masse und Geschwindigkeit ist die relativistische Wellenlänge um den Faktor γ kürzer. β dient als Diagnose; ein relativistischer Rechenmodus ist nicht vorhanden."
      },
      {
        "q": "Warum wird der Lichtgeschwindigkeitsanteil statt einer Frequenz angezeigt?",
        "a": "β=v/c hilft, die Gültigkeit von p=mv einzuschätzen. Die Materiewellenfrequenz ist durch E=hf mit der Energie verknüpft. Teilchengeschwindigkeit und Wellenlänge dürfen nicht einfach wie bei einer gewöhnlichen Welle zu f=v/λ kombiniert werden."
      }
    ]
  },
  "es": {
    "longDescription": "La longitud de onda de De Broglie se obtiene del momento de la partícula: λ=h/p. Aquí se usa la aproximación no relativista p=mv, con masa en unidades de 10⁻²⁷ kg y velocidad en km/s. Se muestran longitud, momento, energía cinética y fracción de la velocidad de la luz β. Cerca de c hace falta el momento relativista, que esta página no calcula.",
    "howToUse": [
      "La masa del electrón 9,1093837·10⁻³¹ kg corresponde a 0,00091093837 en el campo. Convierte primero los kilogramos. La velocidad debe ser positiva e inferior a 299792,458 km/s; cumplir los límites de entrada no garantiza la precisión de la aproximación."
    ],
    "howItWorks": "λ = h/p, con h = 6,62607015·10⁻³⁴ J·s. Multiplica la masa introducida por 10⁻²⁷ kg y la velocidad por 1000 m/s; p=mv; K=mv²/2; β=v/c. Todos los resultados corresponden a la aproximación no relativista.",
    "example": "Un electrón a 1000 km/s tiene una longitud de onda de 7,27·10⁻¹⁰ metros, menos de un nanómetro.",
    "faq": [
      {
        "q": "¿Por qué una pelota no tiene onda apreciable?",
        "a": "Una pelota de 150 g a 30 m/s tiene p=4,5 kg·m/s y λ≈1,472·10⁻³⁴ m. Son unos 19órdenes por debajo de 10⁻¹⁵ m; la comparación depende del tamaño nuclear elegido."
      },
      {
        "q": "¿Por qué usar unidades de masa de 10⁻²⁷ kg?",
        "a": "Las unidades escaladas permiten introducir cómodamente una masa pequeña en decimal. El valor 1 significa 10⁻²⁷ kg. Es la unidad del campo, no una masa física distinta."
      },
      {
        "q": "¿Qué dice la longitud de onda sobre un microscopio?",
        "a": "Una longitud corta permite una gran resolución, pero la resolución real también depende de lentes, aberraciones y muestra. λ por sí sola no determina la resolución de un microscopio."
      },
      {
        "q": "¿La fórmula vale cerca de la velocidad de la luz?",
        "a": "No: hace falta p=γmv. Para la misma masa y velocidad, la longitud relativista es menor por un factor γ. β es una indicación; no hay un modo relativista implementado."
      },
      {
        "q": "¿Por qué se muestra la fracción de la velocidad de la luz y no la frecuencia?",
        "a": "β=v/c ayuda a evaluar la aplicabilidad de p=mv. La frecuencia de una onda de materia se relaciona con la energía mediante E=hf; la velocidad de la partícula y λ no se pueden combinar sin más como f=v/λ de una onda ordinaria."
      }
    ]
  }
};
