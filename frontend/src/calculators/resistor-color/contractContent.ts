// Individually authored subject contracts; primary reading and independent evidence are recorded for wave12.
export const contract = {
  "ru": {
    "longDescription": "Расшифруйте поддерживаемую четырёхполосную маркировку: две значащие цифры, десятичный множитель и допуск. Выбираются цифры 0–9, множители 10⁻²…10⁷ и допуски 1,2,5,10%. Результат показывает номинал и арифметические границы допуска при паспортных условиях, не измеренное сопротивление и не автоматическую проверку исправности детали.",
    "howToUse": [
      "Ориентируйте отдельно стоящую полосу допуска справа; её цвет бывает не только золотым или серебряным.",
      "Выберите ровно четыре поддерживаемые полосы в порядке чтения.",
      "Сверьте код с документацией детали, если ориентация или число полос неоднозначны.",
      "Измерение сопротивления требует обесточенной детали и исключения влияния параллельных путей, а не автоматического сравнения любого показания с границами."
    ],
    "howItWorks": "R=(10 b₁+b₂)·10^m; Rmin=R(1−t/100), Rmax=R(1+t/100), ширина=2 Rt/100. Золото как множитель означает 0,1, серебро 0,01. Роли цвета различаются: золотая полоса допуска здесь 5%. Неизвестные коды и дробные цифры отклоняются.",
    "example": "Жёлтый 4, фиолетовый 7, красный ×100 и золотой±5% дают 4700 Ом: 4465…4935 Ом, ширина 470 Ом. При тех же первых цифрах золотой множитель даёт 4,7 Ом, серебряный 0,47 Ом. Поэтому золото не означает, что весь номинал обязательно меньше 1 Ом.",
    "faq": [
      {
        "q": "С какого конца читать полосы?",
        "a": "Обычно отдельная полоса допуска стоит справа. Здесь доступны также коричневый±1% и красный±2%, поэтому золотой/серебряный цвет не является обязательным признаком конца."
      },
      {
        "q": "Почему измеренное сопротивление не совпадает с номиналом?",
        "a": "Маркировка задаёт допуск при паспортных условиях. Для 4,7 кОм±5% границы 4,465…4,935 кОм. Температура, точность прибора и параллельные пути влияют на измерение; любое показание внутри границ не доказывает исправность детали."
      },
      {
        "q": "Что означают серебристая и золотистая полосы множителя?",
        "a": "Золото умножает значащие цифры на 0,1, серебро на 0,01. Например 47 превращается в 4,7 или 0,47 Ом. Номинал зависит и от первых двух цифр, а применение детали по цветам не определяется."
      },
      {
        "q": "А если полос пять?",
        "a": "Пять полос обычно дают три значащие цифры перед множителем и допуском. Количество цифр само по себе не гарантирует меньший допуск. Эта страница принимает только выбранную четырёхполосную модель."
      }
    ],
    "disclaimer": "Арифметическое чтение выбранных четырёх полос; допуск зависит от паспортных условий, код не подтверждает исправность детали."
  },
  "en": {
    "longDescription": "Decode the supported four-band marking: two significant digits, a decimal multiplier and tolerance. Available digits are 0–9, multipliers 10⁻²…10⁷ and tolerances 1,2,5,10%. Results show nominal resistance and arithmetic tolerance bounds under component specification conditions, not measured resistance or an automatic fault diagnosis.",
    "howToUse": [
      "Place the separated tolerance band on the right; it need not be gold or silver.",
      "Choose exactly four supported bands in reading order.",
      "Check component documentation if orientation or band count is ambiguous.",
      "Resistance measurement needs an unpowered component and removal of parallel-path influence; the bounds do not classify every in-circuit reading."
    ],
    "howItWorks": "R=(10 b₁+b₂)·10^m; Rmin=R(1−t/100), Rmax=R(1+t/100), span=2 Rt/100. A gold multiplier is 0.1; silver is 0.01. Colour roles differ: gold tolerance means 5% here. Unknown codes and fractional digit selections are rejected.",
    "example": "Yellow 4, violet 7, red ×100 and gold±5% give 4700 Ω, bounds 4465…4935 Ω and span 470 Ω. With the same first digits a gold multiplier gives 4.7 Ω and silver gives 0.47 Ω. Gold does not make every resistor smaller than 1 Ω.",
    "faq": [
      {
        "q": "Which end do I read from?",
        "a": "The separated tolerance band usually goes on the right. Brown±1% and red±2% are also available, so gold or silver is not a required end marker."
      },
      {
        "q": "Why does the measured resistance differ from the nominal?",
        "a": "The marking specifies tolerance under stated conditions. For 4.7 kΩ±5%, bounds are 4.465…4.935 kΩ. Temperature, meter accuracy and parallel paths affect measurements; any reading inside those bounds does not prove component condition."
      },
      {
        "q": "What do silver and gold multiplier bands mean?",
        "a": "Gold multiplies the significant digits by 0.1, silver by 0.01. Thus 47 becomes 4.7 Ω or 0.47 Ω. The first two digits still matter, and colour alone does not determine the application."
      },
      {
        "q": "What about five bands?",
        "a": "Five bands normally provide three significant digits before multiplier and tolerance. More digits do not by themselves guarantee lower tolerance. This page accepts only the selected four-band model."
      }
    ],
    "disclaimer": "Arithmetic decoding of selected four bands; tolerance depends on specification conditions and does not prove component condition."
  },
  "uk": {
    "longDescription": "Розшифруйте підтримувану чотирисмугове маркування: дві значущі цифри, десятковий множник і допуск. Доступні цифри 0–9, множники 10⁻²…10⁷ та допуски 1,2,5,10%. Результат показує номінал і арифметичні межі допуску за паспортних умов, а не виміряний опір чи автоматичний висновок про справність.",
    "howToUse": [
      "Розташуйте окрему смугу допуску праворуч; вона може бути також коричневою чи червоною.",
      "Виберіть чотири підтримувані смуги в порядку читання.",
      "За неоднозначної орієнтації або кількості смуг звірте документацію деталі.",
      "Вимірюйте знеструмлену деталь з урахуванням паралельних шляхів; результат не перевіряє будь-яке внутрішньосхемне показання."
    ],
    "howItWorks": "R=(10 b₁+b₂)·10^m; Rmin=R(1−t/100), Rmax=R(1+t/100), ширина=2 Rt/100. Золото як множник 0,1, срібло 0,01. Золотиста смуга допуску тут означає 5%. Невідомі коди й дробові цифри відхиляються.",
    "example": "Жовтий 4, фіолетовий 7, червоний ×100 і золотий±5% дають 4700 Ом: 4465…4935 Ом, ширина 470 Ом. За тих самих цифр золотий множник дає 4,7 Ом, срібний 0,47 Ом: золото не означає автоматично номінал менше 1 Ом.",
    "faq": [
      {
        "q": "Як зрозуміти, з якого кінця читати?",
        "a": "Окрема смуга допуску зазвичай праворуч. Тут також є коричневий±1% і червоний±2%; золото або срібло не є обов’язковою ознакою кінця."
      },
      {
        "q": "Чим відрізняється п’ять смуг від чотирьох?",
        "a": "Чотири смуги дають дві значущі цифри, п’ять — зазвичай три. Більше цифр не гарантує меншого допуску; його задає окрема смуга. Калькулятор підтримує чотири смуги."
      },
      {
        "q": "Навіщо потрібен допуск?",
        "a": "Допуск задається за паспортних умов: для 4,7 кОм±5% межі 4,465…4,935 кОм. Температура, точність приладу й паралельні шляхи впливають на вимірювання; показання в межах не доводить справність деталі."
      },
      {
        "q": "Чи можна виміряти замість читання?",
        "a": "Мультиметр може перевірити опір знеструмленої деталі. Паралельні шляхи у схемі впливають на показання; їхній вплив треба виключити. Повне випаювання не є універсальною вимогою."
      }
    ],
    "disclaimer": "Арифметичне читання вибраних чотирьох смуг; допуск має паспортні умови, код не підтверджує справність."
  },
  "de": {
    "longDescription": "Entschlüssele die unterstützte Vierbandkennzeichnung: zwei signifikante Ziffern, Zehnermultiplikator und Toleranz. Verfügbar sind Ziffern 0–9, Multiplikatoren 10⁻²…10⁷ und Toleranzen 1,2,5,10%. Das Ergebnis zeigt Nennwiderstand und rechnerische Toleranzgrenzen unter Datenblattbedingungen, keinen Messwert oder automatischen Defektnachweis.",
    "howToUse": [
      "Das abgesetzte Toleranzband rechts anordnen; es muss nicht Gold oder Silber sein.",
      "Genau vier unterstützte Bänder in Leserichtung wählen.",
      "Bei unklarer Orientierung oder Bandanzahl die Bauteildokumentation prüfen.",
      "Widerstand nur am spannungslosen Bauteil mit berücksichtigten Parallelpfaden messen; Grenzen bewerten nicht jeden Messwert in der Schaltung."
    ],
    "howItWorks": "R=(10 b₁+b₂)·10^m; Rmin=R(1−t/100), Rmax=R(1+t/100), Breite=2 Rt/100. Gold als Multiplikator bedeutet 0,1, Silber 0,01. Die Farbrolle zählt: Gold als Toleranzband bedeutet hier 5%. Unbekannte Codes und gebrochene Ziffern werden abgewiesen.",
    "example": "Gelb 4, Violett 7, Rot ×100 und Gold±5% ergeben 4700 Ω, 4465…4935 Ω und 470 Ω Breite. Mit denselben Ziffern ergeben Gold als Multiplikator 4,7 Ω und Silber 0,47 Ω. Gold macht nicht jeden Nennwert kleiner als 1 Ω.",
    "faq": [
      {
        "q": "Von welchem Ende lese ich ab?",
        "a": "Das abgesetzte Toleranzband steht gewöhnlich rechts. Auch Braun±1% und Rot±2% sind verfügbar, daher ist Gold/Silber kein zwingendes Endmerkmal."
      },
      {
        "q": "Warum weicht der gemessene Widerstand vom Nennwert ab?",
        "a": "Die Kennzeichnung gibt Toleranz unter Datenblattbedingungen an. Für 4,7 kΩ±5% gelten 4,465…4,935 kΩ. Temperatur, Messgenauigkeit und Parallelpfade beeinflussen die Messung; ein Wert innerhalb der Grenzen beweist keinen fehlerfreien Bauteilzustand."
      },
      {
        "q": "Was bedeuten silberne und goldene Multiplikatorringe?",
        "a": "Gold multipliziert die Ziffern mit 0,1, Silber mit 0,01. 47 wird also 4,7 Ω oder 0,47 Ω. Die ersten Ziffern bestimmen den Nennwert mit; eine Anwendung folgt nicht allein aus den Farben."
      },
      {
        "q": "Und bei fünf Ringen?",
        "a": "Fünf Bänder liefern normalerweise drei signifikante Ziffern vor Multiplikator und Toleranz. Mehr Ziffern garantieren keine kleinere Toleranz. Unterstützt ist hier nur das Vierbandmodell."
      }
    ],
    "disclaimer": "Rechnerische Decodierung gewählter vier Bänder; Datenblattbedingungen gelten, der Code beweist keinen Bauteilzustand."
  },
  "es": {
    "longDescription": "Descifra la codificación admitida de cuatro bandas: dos cifras significativas, multiplicador decimal y tolerancia. Hay cifras 0–9, multiplicadores 10⁻²…10⁷ y tolerancias 1,2,5,10%. Se muestran nominal y límites aritméticos bajo condiciones de ficha, no resistencia medida ni diagnóstico automático del componente.",
    "howToUse": [
      "Coloca a la derecha la banda de tolerancia separada; no tiene que ser oro o plata.",
      "Selecciona exactamente cuatro bandas admitidas en orden de lectura.",
      "Consulta documentación si hay dudas de orientación o número de bandas.",
      "Mide sin alimentación y considera caminos en paralelo; los límites no diagnostican cualquier lectura dentro del circuito."
    ],
    "howItWorks": "R=(10 b₁+b₂)·10^m; Rmin=R(1−t/100), Rmax=R(1+t/100), anchura=2 Rt/100. Oro como multiplicador es 0,1; plata 0,01. La función del color importa: oro en tolerancia es 5%. Se rechazan códigos desconocidos y cifras fraccionarias.",
    "example": "Amarillo 4, violeta 7, rojo ×100 y oro±5% dan 4700 Ω, 4465…4935 Ω y anchura 470 Ω. Con las mismas cifras, multiplicador oro da 4,7 Ω y plata 0,47 Ω. Oro no implica que cualquier nominal sea menor que 1 Ω.",
    "faq": [
      {
        "q": "¿Por qué extremo se lee?",
        "a": "La banda de tolerancia separada suele estar a la derecha. También se admiten marrón±1% y rojo±2%; oro/plata no son una señal final obligatoria."
      },
      {
        "q": "¿Por qué la resistencia medida difiere del nominal?",
        "a": "La codificación indica tolerancia bajo condiciones de ficha. Para 4,7 kΩ±5%, los límites son 4,465…4,935 kΩ. Temperatura, precisión del instrumento y caminos en paralelo influyen; una lectura dentro del intervalo no prueba que el componente esté en buen estado."
      },
      {
        "q": "¿Qué significan las bandas multiplicadoras plateada y dorada?",
        "a": "Oro multiplica las cifras por 0,1 y plata por 0,01. 47 se convierte en 4,7 Ω o 0,47 Ω. Las primeras cifras también determinan el nominal; el uso no se deduce solo del color."
      },
      {
        "q": "¿Y las de cinco bandas?",
        "a": "Cinco bandas suelen dar tres cifras significativas antes de multiplicador y tolerancia. Más cifras no garantizan menor tolerancia. Aquí solo se admite el modelo de cuatro bandas."
      }
    ],
    "disclaimer": "Descodificación aritmética de cuatro bandas; la tolerancia tiene condiciones de ficha y no confirma el estado del componente."
  }
};
