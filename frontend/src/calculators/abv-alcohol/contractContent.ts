import type { CalculatorCopy } from '../../lib/platform/types';
type ContractContent = Pick<CalculatorCopy, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;

export const contractContent = {
  "ru": {
    "longDescription": "Сравнивает относительную плотность SG до и после брожения и оценивает крепость по выбранному линейному коэффициенту. SG — отношение плотности пробы к воде; значения 1,050 и 1,010 не являются процентами сахара или градусами Плато. Рядом показана кажущаяся степень сбраживания: относительное падение SG выше уровня воды. Спирт тоже меняет плотность, поэтому эту величину нельзя читать как фактическую долю потреблённого сахара, доказательство окончания брожения или измерение сладости.",
    "howItWorks": "ABV = (OG − FG) × коэффициент; кажущаяся степень сбраживания = (OG − FG) ÷ (OG − 1) × 100%. Модель требует OG > 1, 0 < FG ≤ OG и положительный коэффициент. При FG < 1 кажущаяся степень может превысить 100%; это не означает потребление более всего сахара. Оценка ABV свыше 100% отклоняется.",
    "example": "OG 1,050, FG 1,010 и коэффициент 131,25 дают 5,25% ABV и кажущуюся степень 80%. Если FG остаётся 1,050, оба результата равны 0. При FG 0,990 получаются 7,875% и 120% кажущейся степени.",
    "howToUse": [
      "Введите начальную и конечную относительную плотность на одной шкале SG.",
      "Сверьте температуру с калибровкой ареометра; температурная поправка здесь не вычисляется.",
      "131,25 — сохранённый коэффициент линейной оценки; другой коэффициент задавайте только для выбранной методики.",
      "Один замер конечной плотности не доказывает завершение брожения; перегонку и лабораторный анализ модель не описывает."
    ],
    "faq": [
      {
        "q": "Почему плотность падает при брожении?",
        "a": "При брожении состав раствора меняется: исчезает часть экстракта и появляется спирт с другой плотностью. Падение SG полезно для оценки, но не равно непосредственно массе использованного сахара."
      },
      {
        "q": "Что показывает степень сбраживания?",
        "a": "Здесь показана кажущаяся степень по отношению (OG − FG)/(OG − 1). Влияние спирта на плотность отличает её от реальной степени сбраживания; 80% не является измерением остаточного сахара."
      },
      {
        "q": "Почему коэффициенты разные?",
        "a": "Линейные коэффициенты приближают более сложную зависимость. Изменение коэффициента меняет оценку ABV, но не превращает её в точное измерение; конкретная погрешность этой страницы не установлена."
      },
      {
        "q": "Нужна ли температурная поправка?",
        "a": "Прибор имеет свою температуру калибровки. Приведите оба показания к сопоставимым условиям по инструкции прибора; калькулятор не корректирует температуру автоматически."
      }
    ],
    "disclaimer": "Оценка по двум показаниям SG не подтверждает лабораторную крепость, безопасность напитка или завершение брожения."
  },
  "en": {
    "longDescription": "Compares specific gravity before and after fermentation and estimates ABV using a selected linear factor. SG is density relative to water: 1.050 and 1.010 are neither sugar percentages nor degrees Plato. The neighbouring attenuation result is apparent attenuation, the relative fall in SG above water’s reference value. Alcohol also changes density, so this result does not measure the fraction of sugar actually consumed, residual sweetness or whether fermentation has finished.",
    "howItWorks": "ABV = (OG − FG) × factor; apparent attenuation = (OG − FG) ÷ (OG − 1) × 100%. The model requires OG > 1, 0 < FG ≤ OG and a positive factor. FG below 1 can give apparent attenuation above 100% without implying that more than all the sugar was consumed. An ABV estimate above 100% is rejected.",
    "example": "OG 1.050, FG 1.010 and factor 131.25 give 5.25% ABV and 80% apparent attenuation. Unchanged FG 1.050 gives zero for both. FG 0.990 gives 7.875% ABV and 120% apparent attenuation.",
    "howToUse": [
      "Enter both gravity readings on the same SG scale.",
      "Match the hydrometer’s calibration conditions; this tool does not calculate a temperature correction.",
      "131.25 is the retained linear factor; select another only as part of a stated method.",
      "A single final reading does not establish completed fermentation. Distillation and laboratory analysis are outside this model."
    ],
    "faq": [
      {
        "q": "Why does gravity fall during fermentation?",
        "a": "Fermentation changes the mixture: some extract is consumed and alcohol with a different density appears. A fall in SG helps estimate ABV but is not a direct mass measurement of consumed sugar."
      },
      {
        "q": "What does attenuation tell me?",
        "a": "It is apparent attenuation, calculated as (OG − FG)/(OG − 1). Alcohol’s effect on density separates it from real attenuation; 80% is not a measurement of residual sugar."
      },
      {
        "q": "Why do the factors differ?",
        "a": "A linear factor approximates a more complex relationship. Changing it changes estimated ABV, without making the result an exact measurement. This page has no established numerical accuracy guarantee."
      },
      {
        "q": "Is a temperature correction needed?",
        "a": "Use the instrument’s calibration instructions to make both readings comparable. The calculator applies no automatic correction for measurement temperature."
      }
    ],
    "disclaimer": "Two SG readings provide an estimate, not laboratory-certified strength, a drink-safety assessment or proof of completed fermentation."
  },
  "uk": {
    "longDescription": "Порівнює відносну густину SG до й після бродіння та оцінює міцність за обраним лінійним коефіцієнтом. SG означає густину відносно води: 1,050 і 1,010 не є відсотками цукру чи градусами Плато. Показник зброджування тут позірний — відносне падіння SG над рівнем води. Спирт також змінює густину, тому показник не вимірює фактичну частку спожитого цукру, залишкову солодкість або завершення бродіння.",
    "howItWorks": "ABV = (OG − FG) × коефіцієнт; позірний ступінь зброджування = (OG − FG) ÷ (OG − 1) × 100%. Потрібні OG > 1, 0 < FG ≤ OG та додатний коефіцієнт. За FG < 1 позірний ступінь може перевищувати 100%, не означаючи споживання більш ніж усього цукру. Оцінка ABV понад 100% відхиляється.",
    "example": "OG 1,050, FG 1,010 та коефіцієнт 131,25 дають 5,25% ABV і 80% позірного зброджування. Незмінна FG 1,050 дає два нулі. FG 0,990 дає 7,875% ABV і 120% позірного ступеня.",
    "howToUse": [
      "Введіть два показання в однаковій шкалі SG.",
      "Узгодьте температуру з калібруванням ареометра; поправка тут не обчислюється.",
      "131,25 — збережений коефіцієнт лінійної оцінки, а не точна універсальна константа.",
      "Один кінцевий замір не доводить завершення бродіння; для перегонки ця модель не призначена."
    ],
    "faq": [
      {
        "q": "Звідки береться коефіцієнт 131?",
        "a": "131,25 — обраний коефіцієнт спрощеного зв’язку між падінням SG та ABV. Калькулятор зберігає його як початковий приклад, не обіцяючи точності для будь-якого сусла."
      },
      {
        "q": "Чому кінцева густина не дорівнює одиниці?",
        "a": "Розчин після бродіння містить спирт та залишкові речовини, які змінюють густину. FG може бути як вище, так і нижче одиниці; це не пряме вимірювання солодкості."
      },
      {
        "q": "Що показує ступінь зброджування?",
        "a": "Це позірний ступінь (OG − FG)/(OG − 1), а не виміряна частка зниклого цукру. Вплив спирту дозволяє цьому показнику перевищувати 100%."
      },
      {
        "q": "Чи треба вносити температурну поправку?",
        "a": "Показання слід привести до умов калібрування за інструкцією приладу. Автоматичної температурної поправки в цьому розрахунку немає."
      }
    ],
    "disclaimer": "Два показання SG дають оцінку, а не лабораторне підтвердження міцності, безпеки напою чи завершення бродіння."
  },
  "de": {
    "longDescription": "Vergleicht die relative Dichte SG vor und nach der Gärung und schätzt den Alkoholgehalt mit einem gewählten linearen Faktor. SG ist ein Dichteverhältnis zu Wasser; 1,050 und 1,010 sind weder Zuckerprozente noch Grad Plato. Der zusätzliche Vergärungsgrad ist scheinbar: Er beschreibt den relativen SG-Abfall über dem Wasserbezug. Auch Alkohol verändert die Dichte. Daher misst dieser Wert weder tatsächlich verbrauchten Zucker noch Restsüße oder den Abschluss der Gärung.",
    "howItWorks": "ABV = (OG − FG) × Faktor; scheinbarer Vergärungsgrad = (OG − FG) ÷ (OG − 1) × 100%. Die Voraussetzungen sind OG > 1, 0 < FG ≤ OG und ein positiver Faktor. Bei FG < 1 kann der scheinbare Grad über 100% liegen, ohne dass mehr als der gesamte Zucker verbraucht wurde. ABV-Schätzungen über 100% werden abgewiesen.",
    "example": "OG 1,050, FG 1,010 und Faktor 131,25 ergeben 5,25% ABV und 80% scheinbaren Vergärungsgrad. Unveränderte FG 1,050 ergibt zweimal null. FG 0,990 ergibt 7,875% ABV und einen scheinbaren Grad von 120%.",
    "howToUse": [
      "Beide Dichten auf derselben SG-Skala eintragen.",
      "Kalibrierbedingungen des Aräometers beachten; keine automatische Temperaturkorrektur.",
      "131,25 ist der erhaltene lineare Beispielkoeffizient, keine allgemeine Präzisionsgarantie.",
      "Eine einzelne Endmessung beweist kein Gärende. Destillation und Laboranalyse werden nicht modelliert."
    ],
    "faq": [
      {
        "q": "Warum fällt die Dichte während der Gärung?",
        "a": "Während der Gärung ändert sich die Zusammensetzung: Extrakt wird teilweise verbraucht und Alkohol mit anderer Dichte entsteht. Der SG-Abfall hilft bei der Schätzung, ist aber keine direkte Zuckermassenmessung."
      },
      {
        "q": "Was sagt mir der Vergärungsgrad?",
        "a": "Es ist der scheinbare Grad (OG − FG)/(OG − 1). Alkohol beeinflusst die Dichte; deshalb ist er vom realen Vergärungsgrad zu unterscheiden. 80% misst keinen Restzuckergehalt."
      },
      {
        "q": "Warum unterscheiden sich die Faktoren?",
        "a": "Lineare Faktoren nähern einen komplexeren Zusammenhang an. Ein anderer Faktor verändert die ABV-Schätzung, macht sie aber nicht zu einer exakten Messung. Eine bestimmte Fehlergrenze wurde hier nicht nachgewiesen."
      },
      {
        "q": "Ist eine Temperaturkorrektur nötig?",
        "a": "Beide Messungen nach der Geräteanleitung auf vergleichbare Bedingungen bringen. Der Rechner korrigiert die Messtemperatur nicht selbst."
      }
    ],
    "disclaimer": "Zwei SG-Werte liefern eine Schätzung, keine Laborbestätigung des Alkoholgehalts, Getränkesicherheitsbewertung oder Bestätigung des Gärendes."
  },
  "es": {
    "longDescription": "Compara la densidad relativa SG antes y después de fermentar y estima el alcohol por volumen con un factor lineal elegido. SG es densidad respecto al agua: 1,050 y 1,010 no son porcentajes de azúcar ni grados Plato. La atenuación mostrada es aparente, la caída relativa de SG por encima de la referencia del agua. El alcohol también cambia la densidad, por lo que ese valor no mide el azúcar realmente consumido, el dulzor residual ni el final de la fermentación.",
    "howItWorks": "ABV = (OG − FG) × factor; atenuación aparente = (OG − FG) ÷ (OG − 1) × 100%. Se requieren OG > 1, 0 < FG ≤ OG y un factor positivo. FG inferior a 1 puede dar atenuación aparente superior al 100%, sin implicar consumo de más que todo el azúcar. Se rechaza una estimación de ABV superior al 100%.",
    "example": "OG 1,050, FG 1,010 y factor 131,25 dan 5,25% de ABV y 80% de atenuación aparente. FG sin cambios, 1,050, da dos ceros. FG 0,990 da 7,875% de ABV y 120% de atenuación aparente.",
    "howToUse": [
      "Introduce las dos lecturas en la misma escala SG.",
      "Respeta la calibración del densímetro: no se calcula una corrección de temperatura.",
      "131,25 es el factor lineal conservado como ejemplo; otro debe pertenecer a un método elegido.",
      "Una lectura final aislada no demuestra el fin de la fermentación. No se modelan destilación ni análisis de laboratorio."
    ],
    "faq": [
      {
        "q": "¿Por qué baja la densidad durante la fermentación?",
        "a": "La fermentación cambia la mezcla: se consume parte del extracto y aparece alcohol de distinta densidad. La caída de SG ayuda a estimar, pero no mide directamente la masa de azúcar consumida."
      },
      {
        "q": "¿Qué me dice la atenuación?",
        "a": "Es atenuación aparente, (OG − FG)/(OG − 1). El efecto del alcohol en la densidad la distingue de la atenuación real; 80% no mide azúcar residual."
      },
      {
        "q": "¿Por qué difieren los factores?",
        "a": "Los factores lineales aproximan una relación más compleja. Cambiar el factor cambia el ABV estimado, sin hacerlo una medida exacta. Esta página no ha establecido una garantía numérica de precisión."
      },
      {
        "q": "¿Hace falta una corrección por temperatura?",
        "a": "Haz comparables ambas lecturas según las instrucciones del instrumento. La calculadora no corrige automáticamente la temperatura de medición."
      }
    ],
    "disclaimer": "Dos lecturas SG ofrecen una estimación, no certifican graduación de laboratorio, seguridad del producto ni fermentación terminada."
  }
} satisfies Record<'ru' | 'en' | 'uk' | 'de' | 'es', ContractContent>;
