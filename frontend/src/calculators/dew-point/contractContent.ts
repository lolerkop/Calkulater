// Individually reviewed against all five actual188 native bodies; human editorial review pending.
export const contract = {
  "ru": {
    "longDescription": "Рассчитайте точку росы и её разрыв с температурой воздуха по паре Магнуса a=17,27 и b=237,7 °C. Для конденсата сравнивают точку росы с температурой поверхности: большой разрыв до температуры воздуха сам по себе не исключает холодную стену или трубу.",
    "howToUse": [
      "Введите температуру и RH одного и того же объёма воздуха.",
      "Сравните результат с измеренной температурой поверхности.",
      "ПриRH=0 логарифм не имеет конечного значения; форма возвращает ошибку, а не 0 °C."
    ],
    "howItWorks": "γ=ln(RH/100)+17,27 t/(237,7+t); Td=237,7γ/(17,27−γ). Разрыв t −Td также вычисляется напрямую как −(237,7+t)ln(RH/100)/(17,27−γ), чтобы сохранить малую положительную разницу возле 100% RH.",
    "example": "При 20 °C и 60% RH точка росы≈11,993 °C, разрыв≈8,007 °C. Поверхность 10 °C ниже этой точки, поэтому пример не означает отсутствия риска конденсата. При 100% RH модель возвращает Td=t и нулевой разрыв.",
    "faq": [
      {
        "q": "Почему при 100 % точка росы совпадает с температурой?",
        "a": "Потому что воздух уже насыщен: охлаждать его не нужно, конденсация начинается сразу. Логарифм единицы равен нулю, и формула честно возвращает исходную температуру."
      },
      {
        "q": "Отчего отпотевает стена, если в комнате тепло?",
        "a": "Роса выпадает не по температуре воздуха, а по температуре поверхности. Холодный угол или откос окна может быть ниже точки росы, пока воздух в комнате заметно теплее."
      },
      {
        "q": "Насколько точна эта формула?",
        "a": "Ввод t −60…60 °C и 0<RH≤100% — границы этой формы, не обещание ±0,4 °C. Выбранная пара коэффициентов приближённая; различайте росу над жидкой водой и иней. Температура поверхности, мостики холода и комфорт человека не вычисляются."
      },
      {
        "q": "Почему нулевая влажность отвергается?",
        "a": "Потому что при нулевой влажности точки росы не существует вовсе: конденсировать нечего. Логарифм нуля не определён, и это не край диапазона, а отсутствие величины."
      }
    ],
    "disclaimer": "Ввод t −60…60 °C и 0<RH≤100% — границы этой формы, не обещание ±0,4 °C. Выбранная пара коэффициентов приближённая; различайте росу над жидкой водой и иней. Температура поверхности, мостики холода и комфорт человека не вычисляются."
  },
  "en": {
    "longDescription": "Calculate dew point and its gap from air temperature using the Magnus pair a=17.27,b=237.7 °C. Condensation assessment compares dew point with surface temperature: a large gap from air temperature does not rule out a cold wall or pipe.",
    "howToUse": [
      "Enter temperature and RH for the same air sample.",
      "Compare the result with measured surface temperature.",
      "RH=0 has no finite logarithm; the form returns an error, not 0 °C."
    ],
    "howItWorks": "γ=ln(RH/100)+17.27 t/(237.7+t); Td=237.7γ/(17.27−γ). The gap t −Td is also evaluated directly as −(237.7+t)ln(RH/100)/(17.27−γ), preserving a small positive gap near 100% RH.",
    "example": "At 20 °C and 60% RH the dew point is≈11.993 °C and gap≈8.007 °C. A 10 °C surface lies below it, so the example does not imply no condensation risk. At 100% RH the model returns Td=t and a zero gap.",
    "faq": [
      {
        "q": "Why does the dew point equal the temperature at 100%?",
        "a": "Because the air is already saturated: no cooling is needed, condensation begins straight away. The logarithm of one is zero, and the formula honestly returns the original temperature."
      },
      {
        "q": "Why does a wall sweat when the room is warm?",
        "a": "Dew forms by the surface temperature, not the air temperature. A cold corner or window reveal can sit below the dew point while the room air is noticeably warmer."
      },
      {
        "q": "How accurate is this formula?",
        "a": "t −60 to 60 °C and 0<RH≤100% are this form’s input bounds, not a ±0.4 °C promise. The chosen coefficient pair is approximate; distinguish liquid-water dew from frost. Surface temperature, thermal bridges and individual comfort are not computed."
      },
      {
        "q": "Why is zero humidity rejected?",
        "a": "Because with zero humidity there is no dew point at all: there is nothing to condense. The logarithm of zero has no value at all, and that is a missing quantity, not an edge of the range."
      }
    ],
    "disclaimer": "t −60 to 60 °C and 0<RH≤100% are this form’s input bounds, not a ±0.4 °C promise. The chosen coefficient pair is approximate; distinguish liquid-water dew from frost. Surface temperature, thermal bridges and individual comfort are not computed."
  },
  "uk": {
    "longDescription": "Обчисліть точку роси й розрив до температури повітря за парою Магнуса a=17,27,b=237,7 °C. Для конденсату порівнюють точку роси з температурою поверхні: великий розрив до повітря не виключає холодну стіну чи трубу.",
    "howToUse": [
      "Введіть температуру й RH тієї самої проби повітря.",
      "Порівняйте результат із виміряною температурою поверхні.",
      "ЗаRH=0 логарифм не має скінченного значення; форма дає помилку, не 0 °C."
    ],
    "howItWorks": "γ=ln(RH/100)+17,27 t/(237,7+t); Td=237,7γ/(17,27−γ). Розрив t −Td також обчислюється прямо як −(237,7+t)ln(RH/100)/(17,27−γ), зберігаючи малу додатну різницю поблизу 100% RH.",
    "example": "За 20 °C і 60% RH точка роси≈11,993 °C, розрив≈8,007 °C. Поверхня 10 °C нижча за цю точку, тому приклад не означає відсутності ризику конденсату. За 100% RH модель повертає Td=t і нульовий розрив.",
    "faq": [
      {
        "q": "Коли з’явиться конденсат?",
        "a": "Коли температура поверхні опуститься нижче за точку роси. Тому запітніти може холодна труба у вологому підвалі й не запітніє тепла стіна в сухій кімнаті — при однаковій вологості повітря."
      },
      {
        "q": "Чому точка роси зручніша за відносну вологість?",
        "a": "За сталого парціального тиску водяної пари точка роси в цій моделі зберігається, хоча температура й RH можуть змінитися. Це умовне твердження: зміни тиску, обмін водою чи конденсація змінюють умови."
      },
      {
        "q": "Яка точка роси комфортна?",
        "a": "t −60…60 °C і 0<RH≤100% — межі форми, не обіцянка ±0,4 °C. Обрана пара коефіцієнтів наближена; розрізняйте росу над рідкою водою та іній. Температура поверхні, містки холоду й комфорт людини не обчислюються."
      },
      {
        "q": "Чому влітку пітніє пляшка з холодильника?",
        "a": "Бо її поверхня холодніша за точку роси навколишнього повітря. Волога з повітря конденсується на склі — це не вода «просочилася» назовні."
      }
    ],
    "disclaimer": "t −60…60 °C і 0<RH≤100% — межі форми, не обіцянка ±0,4 °C. Обрана пара коефіцієнтів наближена; розрізняйте росу над рідкою водою та іній. Температура поверхні, містки холоду й комфорт людини не обчислюються."
  },
  "de": {
    "longDescription": "Berechne Taupunkt und Abstand zur Lufttemperatur mit dem Magnus-Paar a=17,27,b=237,7 °C. Für Kondensation vergleicht man den Taupunkt mit der Oberflächentemperatur: ein großer Abstand zur Luft schließt eine kalte Wand oder ein kaltes Rohr nicht aus.",
    "howToUse": [
      "Gib Temperatur und RH derselben Luftprobe ein.",
      "Vergleiche das Ergebnis mit der gemessenen Oberflächentemperatur.",
      "RH=0 hat keinen endlichen Logarithmus; das Formular liefert einen Fehler statt 0 °C."
    ],
    "howItWorks": "γ=ln(RH/100)+17,27 t/(237,7+t); Td=237,7γ/(17,27−γ). Der Abstand t −Td wird auch direkt als −(237,7+t)ln(RH/100)/(17,27−γ) berechnet, damit kleine positive Differenzen nahe 100% RH erhalten bleiben.",
    "example": "Bei 20 °C und 60% RH: Taupunkt≈11,993 °C, Abstand≈8,007 °C. Eine 10 °C warme Oberfläche liegt darunter; das Beispiel bedeutet also kein ausgeschlossenes Kondensationsrisiko. Bei 100% RH gilt Td=t, Abstand null.",
    "faq": [
      {
        "q": "Warum entspricht der Taupunkt bei 100 % der Temperatur?",
        "a": "Weil die Luft bereits gesättigt ist: es braucht keine Abkühlung, die Kondensation beginnt sofort. Der Logarithmus von eins ist null, und die Formel liefert ehrlich die Ausgangstemperatur."
      },
      {
        "q": "Warum schwitzt eine Wand, wenn der Raum warm ist?",
        "a": "Tau bildet sich nach der Oberflächentemperatur und nicht nach der Lufttemperatur. Eine kalte Ecke oder eine Fensterlaibung kann unter dem Taupunkt liegen, während die Raumluft merklich wärmer ist."
      },
      {
        "q": "Wie genau ist diese Formel?",
        "a": "t −60 bis 60 °C und 0<RH≤100% sind Eingabegrenzen, keine Zusage ±0,4 °C. Das Koeffizientenpaar ist eine Näherung; Tau über flüssigem Wasser und Reif sind zu unterscheiden. Oberflächentemperatur, Wärmebrücken und persönlicher Komfort werden nicht berechnet."
      },
      {
        "q": "Warum wird eine Luftfeuchte von null abgewiesen?",
        "a": "Weil es bei null Feuchte überhaupt keinen Taupunkt gibt: es ist nichts da, was kondensieren könnte. Der Logarithmus von null hat gar keinen Wert, und das ist eine fehlende Größe und kein Rand des Bereichs."
      }
    ],
    "disclaimer": "t −60 bis 60 °C und 0<RH≤100% sind Eingabegrenzen, keine Zusage ±0,4 °C. Das Koeffizientenpaar ist eine Näherung; Tau über flüssigem Wasser und Reif sind zu unterscheiden. Oberflächentemperatur, Wärmebrücken und persönlicher Komfort werden nicht berechnet."
  },
  "es": {
    "longDescription": "Calcula punto de rocío y diferencia con el aire usando Magnus a=17,27,b=237,7 °C. La condensación se evalúa comparando con la superficie: una gran diferencia con el aire no descarta una pared o tubería fría.",
    "howToUse": [
      "Introduce temperatura y RH de la misma muestra de aire.",
      "Compara con la temperatura superficial medida.",
      "RH=0 no tiene logaritmo finito; se devuelve error, no 0 °C."
    ],
    "howItWorks": "γ=ln(RH/100)+17,27 t/(237,7+t); Td=237,7γ/(17,27−γ). La diferencia t −Td se evalúa directamente como −(237,7+t)ln(RH/100)/(17,27−γ), conservando diferencias positivas pequeñas cerca del 100% RH.",
    "example": "Con 20 °C y 60% RH: rocío≈11,993 °C y diferencia≈8,007 °C. Una superficie a 10 °C queda por debajo; el ejemplo no implica ausencia de riesgo de condensación. Con 100% RH se obtiene Td=t y diferencia cero.",
    "faq": [
      {
        "q": "¿Por qué al 100 % el punto de rocío coincide con la temperatura?",
        "a": "Porque el aire ya está saturado: no hace falta enfriarlo, la condensación empieza de inmediato. El logaritmo de uno es cero, y la fórmula devuelve con honestidad la temperatura original."
      },
      {
        "q": "¿Por qué suda una pared si la habitación está caliente?",
        "a": "El rocío se forma según la temperatura de la superficie, no la del aire. Un rincón frío o el mocheta de una ventana pueden quedar por debajo del punto de rocío mientras el aire de la habitación está bastante más caliente."
      },
      {
        "q": "¿Qué precisión tiene esta fórmula?",
        "a": "Los límites t −60…60 °C y 0<RH≤100% pertenecen al formulario, no prometen ±0,4 °C. Los coeficientes son aproximados; distingue rocío sobre agua líquida de escarcha. No se calculan superficie, puentes térmicos ni confort personal."
      },
      {
        "q": "¿Por qué se rechaza una humedad de cero?",
        "a": "Porque con humedad nula no existe punto de rocío: no hay nada que condensar. El logaritmo de cero no tiene ningún valor, y eso es una magnitud ausente, no un extremo del intervalo."
      }
    ],
    "disclaimer": "Los límites t −60…60 °C y 0<RH≤100% pertenecen al formulario, no prometen ±0,4 °C. Los coeficientes son aproximados; distingue rocío sobre agua líquida de escarcha. No se calculan superficie, puentes térmicos ni confort personal."
  }
};
