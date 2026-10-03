// Individually reviewed subject contract; human review pending.
export const contract = {
  "ru": {
    "longDescription": "Переведите относительную влажность в плотность водяного пара (г/м³ влажного воздуха) и влагосодержание (г/кг сухого воздуха). Это разные знаменатели. При нагреве без обмена водой сохраняется массовое влагосодержание, а абсолютная влажность может измениться при расширении объёма.",
    "howToUse": [
      "Введите местное абсолютное давление и RH при заданной температуре.",
      "Не подставляйте г/м³ вместо г/кг в баланс сухой массы.",
      "Количество воды для помещения — разность плотностей×объём; расход в час требует воздухообмена и влаговых потоков."
    ],
    "howItWorks": "es=6,1078·10^(7,5 t/(t+237,3)) гПа, e=RH·es/100, T=t+273,15 K. Абсолютная влажность=216,7 e/T г/м³; влагосодержание=621,97 e/(p −e) г/кг сухого воздуха. Максимум=216,7 es/T относится к насыщению над жидкой водой.",
    "example": "При 20 °C,50% RH и 1013,25 гПа:≈8,642 г/м³ и 7,260 г/кг сухого воздуха. ДляRH=0 обе строки равны 0; положительное давление насыщения при 20 °C остаётся≈23,381 гПа.",
    "faq": [
      {
        "q": "Почему зимой в квартире сухо?",
        "a": "Переведите относительную влажность в плотность водяного пара (г/м³ влажного воздуха) и влагосодержание (г/кг сухого воздуха). Это разные знаменатели. При нагреве без обмена водой сохраняется массовое влагосодержание, а абсолютная влажность может измениться при расширении объёма. es=6,1078·10^(7,5 t/(t+237,3)) гПа, e=RH·es/100, T=t+273,15 K. Абсолютная влажность=216,7 e/T г/м³; влагосодержание=621,97 e/(p −e) г/кг сухого воздуха. Максимум=216,7 es/T относится к насыщению над жидкой водой."
      },
      {
        "q": "Чем абсолютная влажность лучше относительной?",
        "a": "Переведите относительную влажность в плотность водяного пара (г/м³ влажного воздуха) и влагосодержание (г/кг сухого воздуха). Это разные знаменатели. При нагреве без обмена водой сохраняется массовое влагосодержание, а абсолютная влажность может измениться при расширении объёма."
      },
      {
        "q": "Что такое влагосодержание?",
        "a": "Граммы воды на килограмм сухого воздуха. В отличие от абсолютной влажности, оно не меняется при нагреве и охлаждении без конденсации, поэтому именно им пользуются в расчётах вентиляции."
      },
      {
        "q": "Как связано с точкой росы?",
        "a": "Точка росы — температура, при которой текущее парциальное давление пара становится давлением насыщения. Сравнивайте её с температурой поверхности. Массовая плотность пара в г/м³ и его давление связаны также температурой, поэтому эти величины не взаимозаменяемы без условий."
      }
    ],
    "disclaimer": "Тетенс для жидкой воды, не отдельная модель льда; универсальная точность не заявлена. Ветвь t>−237,3 °C исключает сингулярность, но не подтверждает точность всей экстраполяции. Нужны p>0, RH 0–100% и e<p: при e=p сухая составляющая и знаменатель влагосодержания исчезают."
  },
  "en": {
    "longDescription": "Convert relative humidity to water-vapour density (g/m³ moist air) and mixing ratio (g/kg dry air). Their denominators differ. Heating without water exchange preserves mass mixing ratio, while absolute humidity can change as volume expands.",
    "howToUse": [
      "Enter local absolute pressure and RH at the stated temperature.",
      "Do not substitute g/m³ for g/kg in a dry-mass balance.",
      "Room water inventory is density difference×volume; hourly supply needs airflow and moisture fluxes."
    ],
    "howItWorks": "es=6.1078·10^(7.5 t/(t+237.3)) hPa, e=RH·es/100, T=t+273.15 K. Absolute humidity=216.7 e/T g/m³; mixing ratio=621.97 e/(p −e) g/kg dry air. Maximum=216.7 es/T refers to saturation over liquid water.",
    "example": "At 20 °C,50% RH and 1013.25 hPa:≈8.642 g/m³ and 7.260 g/kg dry air. RH=0 makes both rows zero; saturation pressure at 20 °C remains≈23.381 hPa.",
    "faq": [
      {
        "q": "Why are homes dry in winter?",
        "a": "Convert relative humidity to water-vapour density (g/m³ moist air) and mixing ratio (g/kg dry air). Their denominators differ. Heating without water exchange preserves mass mixing ratio, while absolute humidity can change as volume expands. es=6.1078·10^(7.5 t/(t+237.3)) hPa, e=RH·es/100, T=t+273.15 K. Absolute humidity=216.7 e/T g/m³; mixing ratio=621.97 e/(p −e) g/kg dry air. Maximum=216.7 es/T refers to saturation over liquid water."
      },
      {
        "q": "Why is absolute humidity more useful than relative?",
        "a": "Convert relative humidity to water-vapour density (g/m³ moist air) and mixing ratio (g/kg dry air). Their denominators differ. Heating without water exchange preserves mass mixing ratio, while absolute humidity can change as volume expands."
      },
      {
        "q": "What is the mixing ratio?",
        "a": "Grams of water per kilogram of dry air. Unlike absolute humidity it does not change on heating or cooling without condensation, which is why ventilation calculations use it."
      },
      {
        "q": "How does this relate to dew point?",
        "a": "Dew point is the temperature where the current vapour partial pressure equals saturation pressure. Compare it with surface temperature. Vapour mass density in g/m³ and its pressure also depend on temperature, so they are not interchangeable without stated conditions."
      }
    ],
    "disclaimer": "Liquid-water Tetens, not a separate ice model; no universal accuracy is claimed. The t>−237.3 °C branch excludes the singularity but does not validate all extrapolation. Require p>0,RH 0–100%,e<p: at e=p the dry component and mixing-ratio denominator vanish."
  },
  "uk": {
    "longDescription": "Переведіть відносну вологість у густину водяної пари (г/м³ вологого повітря) та вологовміст (г/кг сухого повітря). Знаменники різні. Нагрівання без обміну водою зберігає масовий вологовміст, а абсолютна вологість може змінитися через розширення об’єму.",
    "howToUse": [
      "Введіть місцевий абсолютний тиск і RH за заданої температури.",
      "Не підставляйте г/м³ замість г/кг у баланс сухої маси.",
      "Запас води для кімнати — різниця густин×об’єм; подача за годину потребує повітрообміну та потоків вологи."
    ],
    "howItWorks": "es=6,1078·10^(7,5 t/(t+237,3)) гПа, e=RH·es/100, T=t+273,15 K. Абсолютна вологість=216,7 e/T г/м³; вологовміст=621,97 e/(p −e) г/кг сухого повітря. Максимум=216,7 es/T стосується насичення над рідкою водою.",
    "example": "За 20 °C,50% RH і 1013,25 гПа:≈8,642 г/м³ та 7,260 г/кг сухого повітря. ЗаRH=0 обидва рядки нульові; тиск насичення при 20 °C лишається≈23,381 гПа.",
    "faq": [
      {
        "q": "Чому однакова відносна вологість означає різну кількість води?",
        "a": "Бо вона вимірюється у відсотках від максимуму, а сам максимум швидко росте з температурою. Тепле повітря здатне утримати значно більше пари, тому 50 % улітку — це набагато більше води, ніж 50 % узимку."
      },
      {
        "q": "Чому взимку в квартирі сухо?",
        "a": "Переведіть відносну вологість у густину водяної пари (г/м³ вологого повітря) та вологовміст (г/кг сухого повітря). Знаменники різні. Нагрівання без обміну водою зберігає масовий вологовміст, а абсолютна вологість може змінитися через розширення об’єму."
      },
      {
        "q": "Скільки води треба зволожувачу?",
        "a": "Для 50 м³ і різниці 4 г/м³ ідеальний одноразовий запас становить 200 г води. Це не 200 г щогодини: витрата залежить від повітрообміну, надходження пари, поглинання поверхнями та керування зволожувачем."
      },
      {
        "q": "Що таке точка роси?",
        "a": "Точка роси — температура, за якої поточний парціальний тиск пари дорівнює тиску насичення. Порівнюйте її з температурою поверхні. Густина пари в г/м³ та тиск пов’язані також температурою, тому не є взаємозамінними без заданих умов."
      }
    ],
    "disclaimer": "Тетенс для рідкої води, не окрема модель льоду; універсальну точність не заявлено. Гілка t>−237,3 °C виключає сингулярність, але не підтверджує всю екстраполяцію. Потрібні p>0,RH 0–100%,e<p: за e=p зникають суха складова й знаменник вологовмісту."
  },
  "de": {
    "longDescription": "Wandle relative Feuchte in Wasserdampfdichte (g/m³ feuchte Luft) und Mischungsverhältnis (g/kg trockene Luft) um. Die Nenner unterscheiden sich. Erwärmung ohne Wasseraustausch erhält das Massenmischungsverhältnis; absolute Feuchte kann sich bei Volumenausdehnung ändern.",
    "howToUse": [
      "Gib lokalen Absolutdruck und RH bei angegebener Temperatur ein.",
      "Ersetze in einer Trockenmassenbilanz g/kg nicht durch g/m³.",
      "Der Wasservorrat im Raum ist Dichtedifferenz×Volumen; Stundenbedarf braucht Luftwechsel und Feuchteströme."
    ],
    "howItWorks": "es=6,1078·10^(7,5 t/(t+237,3)) hPa, e=RH·es/100, T=t+273,15 K. Absolute Feuchte=216,7 e/T g/m³; Mischungsverhältnis=621,97 e/(p −e) g/kg trockene Luft. Maximum=216,7 es/T gilt für Sättigung über flüssigem Wasser.",
    "example": "Bei 20 °C,50% RH und 1013,25 hPa:≈8,642 g/m³ und 7,260 g/kg trockene Luft. RH=0 setzt beide Zeilen auf null; der Sättigungsdruck bei 20 °C bleibt≈23,381 hPa.",
    "faq": [
      {
        "q": "Warum sind Wohnungen im Winter trocken?",
        "a": "Wandle relative Feuchte in Wasserdampfdichte (g/m³ feuchte Luft) und Mischungsverhältnis (g/kg trockene Luft) um. Die Nenner unterscheiden sich. Erwärmung ohne Wasseraustausch erhält das Massenmischungsverhältnis; absolute Feuchte kann sich bei Volumenausdehnung ändern. es=6,1078·10^(7,5 t/(t+237,3)) hPa, e=RH·es/100, T=t+273,15 K. Absolute Feuchte=216,7 e/T g/m³; Mischungsverhältnis=621,97 e/(p −e) g/kg trockene Luft. Maximum=216,7 es/T gilt für Sättigung über flüssigem Wasser."
      },
      {
        "q": "Warum ist die absolute Feuchte nützlicher als die relative?",
        "a": "Wandle relative Feuchte in Wasserdampfdichte (g/m³ feuchte Luft) und Mischungsverhältnis (g/kg trockene Luft) um. Die Nenner unterscheiden sich. Erwärmung ohne Wasseraustausch erhält das Massenmischungsverhältnis; absolute Feuchte kann sich bei Volumenausdehnung ändern."
      },
      {
        "q": "Was ist die Wasserbeladung?",
        "a": "Gramm Wasser je Kilogramm trockener Luft. Anders als die absolute Feuchte ändert sie sich beim Erwärmen oder Abkühlen ohne Kondensation nicht, weshalb Lüftungsrechnungen sie verwenden."
      },
      {
        "q": "Wie hängt das mit dem Taupunkt zusammen?",
        "a": "Der Taupunkt ist die Temperatur, bei der der aktuelle Dampfteildruck dem Sättigungsdruck entspricht. Vergleiche ihn mit der Oberflächentemperatur. Dampfdichte in g/m³ und Druck hängen auch von der Temperatur ab und sind ohne Bedingungen nicht austauschbar."
      }
    ],
    "disclaimer": "Tetens für flüssiges Wasser, kein eigenes Eismodell; keine allgemeine Genauigkeitszusage. t>−237,3 °C schließt die Singularität aus, validiert aber nicht jede Extrapolation. p>0,RH 0–100%,e<p: bei e=p verschwinden trockener Anteil und Nenner des Mischungsverhältnisses."
  },
  "es": {
    "longDescription": "Convierte humedad relativa en densidad de vapor (g/m³ de aire húmedo) y razón de mezcla (g/kg de aire seco). Los denominadores difieren. Calentar sin intercambio de agua conserva la razón másica, pero la humedad absoluta puede cambiar al expandirse el volumen.",
    "howToUse": [
      "Introduce presión absoluta local y RH a la temperatura indicada.",
      "No sustituyas g/kg por g/m³ en un balance de masa seca.",
      "El agua del recinto es diferencia de densidades×volumen; el suministro por hora requiere caudal y flujos de humedad."
    ],
    "howItWorks": "es=6,1078·10^(7,5 t/(t+237,3)) hPa, e=RH·es/100, T=t+273,15 K. Humedad absoluta=216,7 e/T g/m³; razón de mezcla=621,97 e/(p −e) g/kg de aire seco. Máximo=216,7 es/T corresponde a saturación sobre agua líquida.",
    "example": "Con 20 °C,50% RH y 1013,25 hPa:≈8,642 g/m³ y 7,260 g/kg de aire seco. RH=0 hace cero ambas filas; la saturación a 20 °C sigue en≈23,381 hPa.",
    "faq": [
      {
        "q": "¿Por qué las casas están secas en invierno?",
        "a": "Convierte humedad relativa en densidad de vapor (g/m³ de aire húmedo) y razón de mezcla (g/kg de aire seco). Los denominadores difieren. Calentar sin intercambio de agua conserva la razón másica, pero la humedad absoluta puede cambiar al expandirse el volumen. es=6,1078·10^(7,5 t/(t+237,3)) hPa, e=RH·es/100, T=t+273,15 K. Humedad absoluta=216,7 e/T g/m³; razón de mezcla=621,97 e/(p −e) g/kg de aire seco. Máximo=216,7 es/T corresponde a saturación sobre agua líquida."
      },
      {
        "q": "¿Por qué la humedad absoluta es más útil que la relativa?",
        "a": "Convierte humedad relativa en densidad de vapor (g/m³ de aire húmedo) y razón de mezcla (g/kg de aire seco). Los denominadores difieren. Calentar sin intercambio de agua conserva la razón másica, pero la humedad absoluta puede cambiar al expandirse el volumen."
      },
      {
        "q": "¿Qué es la razón de mezcla?",
        "a": "Gramos de agua por kilogramo de aire seco. A diferencia de la humedad absoluta, no cambia al calentar o enfriar mientras no haya condensación, y por eso los cálculos de ventilación la usan."
      },
      {
        "q": "¿Qué relación tiene con el punto de rocío?",
        "a": "El punto de rocío es la temperatura donde la presión parcial actual del vapor iguala la saturación. Compáralo con la superficie. La densidad en g/m³ y la presión también dependen de la temperatura; no son intercambiables sin condiciones."
      }
    ],
    "disclaimer": "Tetens sobre agua líquida, no un modelo de hielo; sin precisión universal afirmada. t>−237,3 °C excluye la singularidad, pero no valida toda extrapolación. p>0,RH 0–100%,e<p: con e=p desaparecen aire seco y denominador de razón de mezcla."
  }
};
