import type { PublicationCase } from './originality-publication-browser-helper';

// Numeric expectations are independent frozen Decimal/analytic literals.
// Calculator imports were used only in fixture preparation for row indexes,
// field visibility, native labels/units and owned copy/source getter metadata.
export const cases: PublicationCase[] = [
  {
    "id": "abv-alcohol",
    "category": "household",
    "defaults": {
      "og": 1.05,
      "fg": 1.01,
      "factor": 131.25
    },
    "fieldNames": [
      "og",
      "fg",
      "factor"
    ],
    "defaultInactive": [],
    "pages": [
      {
        "locale": "ru",
        "path": "/ru/household/krepost-po-plotnosti/",
        "h1": "Калькулятор крепости по плотности",
        "body": {
          "longDescription": "Сравнивает относительную плотность SG до и после брожения и оценивает крепость по выбранному линейному коэффициенту. SG — отношение плотности пробы к воде; значения 1,050 и 1,010 не являются процентами сахара или градусами Плато. Рядом показана кажущаяся степень сбраживания: относительное падение SG выше уровня воды. Спирт тоже меняет плотность, поэтому эту величину нельзя читать как фактическую долю потреблённого сахара, доказательство окончания брожения или измерение сладости.",
          "howToUse": [
            "Введите начальную и конечную относительную плотность на одной шкале SG.",
            "Сверьте температуру с калибровкой ареометра; температурная поправка здесь не вычисляется.",
            "131,25 — сохранённый коэффициент линейной оценки; другой коэффициент задавайте только для выбранной методики.",
            "Один замер конечной плотности не доказывает завершение брожения; перегонку и лабораторный анализ модель не описывает."
          ],
          "howItWorks": "ABV = (OG − FG) × коэффициент; кажущаяся степень сбраживания = (OG − FG) ÷ (OG − 1) × 100%. Модель требует OG > 1, 0 < FG ≤ OG и положительный коэффициент. При FG < 1 кажущаяся степень может превысить 100%; это не означает потребление более всего сахара. Оценка ABV свыше 100% отклоняется.",
          "example": "OG 1,050, FG 1,010 и коэффициент 131,25 дают 5,25% ABV и кажущуюся степень 80%. Если FG остаётся 1,050, оба результата равны 0. При FG 0,990 получаются 7,875% и 120% кажущейся степени.",
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
        "help": {
          "og": "Относительная плотность SG > 1, не процент сахара и не °P.",
          "factor": "Положительный коэффициент линейной оценки; 131,25 — сохранённая выбранная модель."
        },
        "sources": [
          "https://docs.brewfather.app/brewing-knowledge/fundamentals"
        ],
        "normal": {
          "inputs": {
            "og": 1.05,
            "fg": 1.01,
            "factor": 131.25
          },
          "expected": {
            "kind": "number",
            "value": 5.25
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 80
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "%",
          "independentLiteral": "5,25 %"
        },
        "boundary": {
          "inputs": {
            "og": 1.05,
            "fg": 1.05,
            "factor": 131.25
          },
          "expected": {
            "kind": "number",
            "value": 0
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 0
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "%",
          "independentLiteral": "0 %"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 5.25
        },
        "blankField": "og",
        "domainField": "og",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "en",
        "path": "/en/household/abv-from-gravity/",
        "h1": "ABV from gravity calculator",
        "body": {
          "longDescription": "Compares specific gravity before and after fermentation and estimates ABV using a selected linear factor. SG is density relative to water: 1.050 and 1.010 are neither sugar percentages nor degrees Plato. The neighbouring attenuation result is apparent attenuation, the relative fall in SG above water’s reference value. Alcohol also changes density, so this result does not measure the fraction of sugar actually consumed, residual sweetness or whether fermentation has finished.",
          "howToUse": [
            "Enter both gravity readings on the same SG scale.",
            "Match the hydrometer’s calibration conditions; this tool does not calculate a temperature correction.",
            "131.25 is the retained linear factor; select another only as part of a stated method.",
            "A single final reading does not establish completed fermentation. Distillation and laboratory analysis are outside this model."
          ],
          "howItWorks": "ABV = (OG − FG) × factor; apparent attenuation = (OG − FG) ÷ (OG − 1) × 100%. The model requires OG > 1, 0 < FG ≤ OG and a positive factor. FG below 1 can give apparent attenuation above 100% without implying that more than all the sugar was consumed. An ABV estimate above 100% is rejected.",
          "example": "OG 1.050, FG 1.010 and factor 131.25 give 5.25% ABV and 80% apparent attenuation. Unchanged FG 1.050 gives zero for both. FG 0.990 gives 7.875% ABV and 120% apparent attenuation.",
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
        "help": {
          "og": "Specific gravity SG > 1, not sugar percentage or °P.",
          "factor": "Positive linear-estimate factor; 131.25 is the retained selected model."
        },
        "sources": [
          "https://docs.brewfather.app/brewing-knowledge/fundamentals"
        ],
        "normal": {
          "inputs": {
            "og": 1.05,
            "fg": 1.01,
            "factor": 131.25
          },
          "expected": {
            "kind": "number",
            "value": 5.25
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 80
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "%",
          "independentLiteral": "5,25 %"
        },
        "boundary": {
          "inputs": {
            "og": 1.05,
            "fg": 1.05,
            "factor": 131.25
          },
          "expected": {
            "kind": "number",
            "value": 0
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 0
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "%",
          "independentLiteral": "0 %"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 5.25
        },
        "blankField": "og",
        "domainField": "og",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "uk",
        "path": "/uk/pobut/mitsnist-za-shchilnistyu/",
        "h1": "Калькулятор міцності за щільністю",
        "body": {
          "longDescription": "Порівнює відносну густину SG до й після бродіння та оцінює міцність за обраним лінійним коефіцієнтом. SG означає густину відносно води: 1,050 і 1,010 не є відсотками цукру чи градусами Плато. Показник зброджування тут позірний — відносне падіння SG над рівнем води. Спирт також змінює густину, тому показник не вимірює фактичну частку спожитого цукру, залишкову солодкість або завершення бродіння.",
          "howToUse": [
            "Введіть два показання в однаковій шкалі SG.",
            "Узгодьте температуру з калібруванням ареометра; поправка тут не обчислюється.",
            "131,25 — збережений коефіцієнт лінійної оцінки, а не точна універсальна константа.",
            "Один кінцевий замір не доводить завершення бродіння; для перегонки ця модель не призначена."
          ],
          "howItWorks": "ABV = (OG − FG) × коефіцієнт; позірний ступінь зброджування = (OG − FG) ÷ (OG − 1) × 100%. Потрібні OG > 1, 0 < FG ≤ OG та додатний коефіцієнт. За FG < 1 позірний ступінь може перевищувати 100%, не означаючи споживання більш ніж усього цукру. Оцінка ABV понад 100% відхиляється.",
          "example": "OG 1,050, FG 1,010 та коефіцієнт 131,25 дають 5,25% ABV і 80% позірного зброджування. Незмінна FG 1,050 дає два нулі. FG 0,990 дає 7,875% ABV і 120% позірного ступеня.",
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
        "help": {
          "og": "Відносна густина SG > 1, не відсоток цукру і не °P.",
          "factor": "Додатний коефіцієнт лінійної оцінки; 131,25 — збережена обрана модель."
        },
        "sources": [
          "https://docs.brewfather.app/brewing-knowledge/fundamentals"
        ],
        "normal": {
          "inputs": {
            "og": 1.05,
            "fg": 1.01,
            "factor": 131.25
          },
          "expected": {
            "kind": "number",
            "value": 5.25
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 80
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "%",
          "independentLiteral": "5,25 %"
        },
        "boundary": {
          "inputs": {
            "og": 1.05,
            "fg": 1.05,
            "factor": 131.25
          },
          "expected": {
            "kind": "number",
            "value": 0
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 0
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "%",
          "independentLiteral": "0 %"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 5.25
        },
        "blankField": "og",
        "domainField": "og",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "de",
        "path": "/de/haushalt/alkoholgehalt-aus-dichte/",
        "h1": "Rechner für den Alkoholgehalt aus der Stammwürze",
        "body": {
          "longDescription": "Vergleicht die relative Dichte SG vor und nach der Gärung und schätzt den Alkoholgehalt mit einem gewählten linearen Faktor. SG ist ein Dichteverhältnis zu Wasser; 1,050 und 1,010 sind weder Zuckerprozente noch Grad Plato. Der zusätzliche Vergärungsgrad ist scheinbar: Er beschreibt den relativen SG-Abfall über dem Wasserbezug. Auch Alkohol verändert die Dichte. Daher misst dieser Wert weder tatsächlich verbrauchten Zucker noch Restsüße oder den Abschluss der Gärung.",
          "howToUse": [
            "Beide Dichten auf derselben SG-Skala eintragen.",
            "Kalibrierbedingungen des Aräometers beachten; keine automatische Temperaturkorrektur.",
            "131,25 ist der erhaltene lineare Beispielkoeffizient, keine allgemeine Präzisionsgarantie.",
            "Eine einzelne Endmessung beweist kein Gärende. Destillation und Laboranalyse werden nicht modelliert."
          ],
          "howItWorks": "ABV = (OG − FG) × Faktor; scheinbarer Vergärungsgrad = (OG − FG) ÷ (OG − 1) × 100%. Die Voraussetzungen sind OG > 1, 0 < FG ≤ OG und ein positiver Faktor. Bei FG < 1 kann der scheinbare Grad über 100% liegen, ohne dass mehr als der gesamte Zucker verbraucht wurde. ABV-Schätzungen über 100% werden abgewiesen.",
          "example": "OG 1,050, FG 1,010 und Faktor 131,25 ergeben 5,25% ABV und 80% scheinbaren Vergärungsgrad. Unveränderte FG 1,050 ergibt zweimal null. FG 0,990 ergibt 7,875% ABV und einen scheinbaren Grad von 120%.",
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
        "help": {
          "og": "Relative Dichte SG > 1, keine Zuckerprozente oder °P.",
          "factor": "Positiver Faktor der linearen Schätzung; 131,25 ist das erhaltene gewählte Modell."
        },
        "sources": [
          "https://docs.brewfather.app/brewing-knowledge/fundamentals"
        ],
        "normal": {
          "inputs": {
            "og": 1.05,
            "fg": 1.01,
            "factor": 131.25
          },
          "expected": {
            "kind": "number",
            "value": 5.25
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 80
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "%",
          "independentLiteral": "5,25 %"
        },
        "boundary": {
          "inputs": {
            "og": 1.05,
            "fg": 1.05,
            "factor": 131.25
          },
          "expected": {
            "kind": "number",
            "value": 0
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 0
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "%",
          "independentLiteral": "0 %"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 5.25
        },
        "blankField": "og",
        "domainField": "og",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "es",
        "path": "/es/hogar/graduacion-por-densidad/",
        "h1": "Calculadora de graduación por densidad",
        "body": {
          "longDescription": "Compara la densidad relativa SG antes y después de fermentar y estima el alcohol por volumen con un factor lineal elegido. SG es densidad respecto al agua: 1,050 y 1,010 no son porcentajes de azúcar ni grados Plato. La atenuación mostrada es aparente, la caída relativa de SG por encima de la referencia del agua. El alcohol también cambia la densidad, por lo que ese valor no mide el azúcar realmente consumido, el dulzor residual ni el final de la fermentación.",
          "howToUse": [
            "Introduce las dos lecturas en la misma escala SG.",
            "Respeta la calibración del densímetro: no se calcula una corrección de temperatura.",
            "131,25 es el factor lineal conservado como ejemplo; otro debe pertenecer a un método elegido.",
            "Una lectura final aislada no demuestra el fin de la fermentación. No se modelan destilación ni análisis de laboratorio."
          ],
          "howItWorks": "ABV = (OG − FG) × factor; atenuación aparente = (OG − FG) ÷ (OG − 1) × 100%. Se requieren OG > 1, 0 < FG ≤ OG y un factor positivo. FG inferior a 1 puede dar atenuación aparente superior al 100%, sin implicar consumo de más que todo el azúcar. Se rechaza una estimación de ABV superior al 100%.",
          "example": "OG 1,050, FG 1,010 y factor 131,25 dan 5,25% de ABV y 80% de atenuación aparente. FG sin cambios, 1,050, da dos ceros. FG 0,990 da 7,875% de ABV y 120% de atenuación aparente.",
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
        },
        "help": {
          "og": "Densidad relativa SG > 1, no porcentaje de azúcar ni °P.",
          "factor": "Factor positivo de estimación lineal; 131,25 es el modelo elegido conservado."
        },
        "sources": [
          "https://docs.brewfather.app/brewing-knowledge/fundamentals"
        ],
        "normal": {
          "inputs": {
            "og": 1.05,
            "fg": 1.01,
            "factor": 131.25
          },
          "expected": {
            "kind": "number",
            "value": 5.25
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 80
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "%",
          "independentLiteral": "5,25 %"
        },
        "boundary": {
          "inputs": {
            "og": 1.05,
            "fg": 1.05,
            "factor": 131.25
          },
          "expected": {
            "kind": "number",
            "value": 0
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 0
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "%",
          "independentLiteral": "0 %"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 5.25
        },
        "blankField": "og",
        "domainField": "og",
        "domainInvalid": -1,
        "countFields": []
      }
    ]
  },
  {
    "id": "alcohol-units",
    "category": "household",
    "defaults": {
      "volume_ml": 150,
      "abv": 12,
      "standard_g": 10
    },
    "fieldNames": [
      "volume_ml",
      "abv",
      "standard_g"
    ],
    "defaultInactive": [],
    "pages": [
      {
        "locale": "ru",
        "path": "/ru/household/edinicy-alkogolya/",
        "h1": "Калькулятор стандартных единиц алкоголя",
        "body": {
          "longDescription": "Переводит объём напитка и крепость ABV в миллилитры и граммы этанола, затем делит массу на выбранное число граммов в стандартной единице. Это удобный способ сравнить указанные количества разных напитков при одной договорённости о единице. Определения различаются: американский standard drink содержит около 14 г, британская unit означает 10 мл, приблизительно 8 г. Сохранённые 10 г в поле — выбранный пример, а не британская норма и не универсальная безопасная порция.",
          "howToUse": [
            "Введите фактический объём напитка в миллилитрах и ABV в процентах.",
            "Выберите граммы на единицу по нужному определению; язык страницы не выбирает страну.",
            "Для нескольких напитков посчитайте каждый и сложите результаты при одинаковом определении.",
            "Миллилитры напитка, миллилитры этанола и граммы этанола — разные величины."
          ],
          "howItWorks": "Чистый спирт, мл = объём напитка × ABV/100; масса, г = этот объём × 0,789 г/мл; единицы = масса ÷ выбранные граммы на единицу. Плотность — фиксированное приближение модели. Объём и масса единицы должны быть положительными, ABV допускается от 0 до 100%. Британский подсчёт по 10 мл не совпадает точно с приближением по 8 г.",
          "example": "150 мл напитка крепостью 12% содержат 18 мл, или 14,202 г этанола: при единице 10 г выходит 1,42. При ABV 0% результат равен 0. При 8 г на единицу та же порция даёт 1,78 по массе; британская формула по объёму даёт 1,8.",
          "faq": [
            {
              "q": "Почему норму единицы надо вводить самому?",
              "a": "Единица задаётся соглашением: в США это около 14 г, британская unit — 10 мл или приблизительно 8 г. Здесь расчёт идёт через массу; значение 10 г в поле не утверждает норму для всех стран."
            },
            {
              "q": "Показывает ли это опьянение?",
              "a": "Нет. Модель не использует время употребления, массу тела и прочие факторы для оценки концентрации алкоголя в крови. Число единиц не разрешает вождение и не задаёт безопасное потребление."
            },
            {
              "q": "Почему масса и объём спирта различаются?",
              "a": "Объём измеряется в миллилитрах, масса — в граммах. Здесь они связаны выбранной приближённой плотностью 0,789 г/мл; число граммов не обязано совпадать с числом миллилитров."
            },
            {
              "q": "Как считать вечер целиком?",
              "a": "Рассчитайте каждый напиток отдельно с одной и той же массой стандартной единицы и сложите единицы или граммы. Это сумма количества этанола, без оценки его выведения."
            }
          ],
          "disclaimer": "Расчёт количества этанола не оценивает опьянение, концентрацию в крови, срок выведения или допустимость вождения; он не является медицинской рекомендацией."
        },
        "help": {
          "standard_g": "Граммы этанола на единицу: 10 — пример. США ≈14 г; UK unit — 10 мл ≈8 г, массовая оценка не точно равна объёмной."
        },
        "sources": [
          "https://www.nhs.uk/live-well/alcohol-advice/calculating-alcohol-units/",
          "https://www.niaaa.nih.gov/alcohols-effects-health/what-standard-drink"
        ],
        "normal": {
          "inputs": {
            "volume_ml": 150,
            "abv": 12,
            "standard_g": 10
          },
          "expected": {
            "kind": "number",
            "value": 1.42
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 14.202
              }
            },
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 18
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "",
          "independentLiteral": "1,42"
        },
        "boundary": {
          "inputs": {
            "volume_ml": 150,
            "abv": 0,
            "standard_g": 10
          },
          "expected": {
            "kind": "number",
            "value": 0
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 0
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "",
          "independentLiteral": "0"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 1.42
        },
        "blankField": "volume_ml",
        "domainField": "volume_ml",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "en",
        "path": "/en/household/alcohol-units/",
        "h1": "Alcohol units calculator",
        "body": {
          "longDescription": "Converts drink volume and ABV into millilitres and grams of ethanol, then divides the mass by the selected grams per standard unit. It compares stated drink quantities under one unit definition. Definitions vary: a US standard drink contains about 14 g, whereas a UK unit is 10 mL, approximately 8 g. The retained 10 g field value is a chosen illustration, not the UK definition or a universal safe serving.",
          "howToUse": [
            "Enter the drink’s actual volume in millilitres and its ABV percentage.",
            "Choose grams per unit for your intended definition; page language does not select a country.",
            "For several drinks, calculate each and add results using the same unit definition.",
            "Drink volume, ethanol volume and ethanol mass are different quantities."
          ],
          "howItWorks": "Ethanol mL = drink mL × ABV/100; grams = ethanol mL × 0.789 g/mL; units = grams ÷ selected grams per unit. Density is a fixed approximation. Drink volume and unit mass must be positive; ABV may range from 0 to 100%. The UK volume calculation using 10 mL does not exactly equal the approximation using 8 g.",
          "example": "150 mL at 12% ABV contains 18 mL or 14.202 g of ethanol: a 10 g unit gives 1.42 units. At 0% ABV the result is zero. An 8 g unit gives 1.78 by this mass model; the UK volume formula gives 1.8.",
          "faq": [
            {
              "q": "Why enter the unit definition myself?",
              "a": "Definitions are conventions: the US uses about 14 g, while a UK unit is 10 mL or approximately 8 g. This tool divides ethanol mass; its initial 10 g value does not assert an international standard."
            },
            {
              "q": "Does this show intoxication?",
              "a": "No. Time, body weight and other factors needed for estimating blood alcohol are absent. The unit count neither permits driving nor defines a safe amount to consume."
            },
            {
              "q": "Why do mass and volume of alcohol differ?",
              "a": "Volume is measured in millilitres, mass in grams. The model relates them using the chosen approximate density of 0.789 g/mL; their numerical values need not be equal."
            },
            {
              "q": "How do I count a whole evening?",
              "a": "Calculate each drink with the same grams-per-unit value, then add units or grams. The sum records ethanol quantity without estimating elimination."
            }
          ],
          "disclaimer": "Ethanol quantity is not an assessment of intoxication, blood alcohol, elimination time or fitness to drive, and supplies no medical consumption recommendation."
        },
        "help": {
          "standard_g": "Grams of ethanol per unit: 10 is an example. US ≈14 g; UK unit 10 mL ≈8 g. Mass and volume estimates are not exact equivalents."
        },
        "sources": [
          "https://www.nhs.uk/live-well/alcohol-advice/calculating-alcohol-units/",
          "https://www.niaaa.nih.gov/alcohols-effects-health/what-standard-drink"
        ],
        "normal": {
          "inputs": {
            "volume_ml": 150,
            "abv": 12,
            "standard_g": 10
          },
          "expected": {
            "kind": "number",
            "value": 1.42
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 14.202
              }
            },
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 18
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "",
          "independentLiteral": "1,42"
        },
        "boundary": {
          "inputs": {
            "volume_ml": 150,
            "abv": 0,
            "standard_g": 10
          },
          "expected": {
            "kind": "number",
            "value": 0
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 0
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "",
          "independentLiteral": "0"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 1.42
        },
        "blankField": "volume_ml",
        "domainField": "volume_ml",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "uk",
        "path": "/uk/pobut/odynyci-alkoholyu/",
        "h1": "Калькулятор стандартних одиниць алкоголю",
        "body": {
          "longDescription": "Переводить об’єм напою та ABV у мілілітри й грами етанолу, після чого ділить масу на обрані грами в стандартній одиниці. Визначення різні: американський standard drink містить близько 14 г, британська unit — 10 мл, приблизно 8 г. Початкові 10 г — обраний приклад, а не британська норма чи безпечна порція. Порівняння напоїв коректне лише за однакового визначення одиниці.",
          "howToUse": [
            "Введіть фактичний об’єм у мілілітрах та ABV у відсотках.",
            "Оберіть грами на одиницю за потрібним визначенням, а не за мовою сторінки.",
            "Для кількох напоїв підсумовуйте окремі розрахунки з однаковою одиницею.",
            "Не плутайте об’єм напою з об’ємом чи масою чистого етанолу."
          ],
          "howItWorks": "Етанол, мл = об’єм напою × ABV/100; маса, г = цей об’єм × 0,789 г/мл; одиниці = маса ÷ обрані грами на одиницю. Густина є фіксованим наближенням. Об’єм і маса одиниці мають бути додатними, ABV допускається від 0 до 100%. Британський підрахунок за 10 мл не тотожний наближенню за 8 г.",
          "example": "150 мл за ABV 12% містять 18 мл, або 14,202 г етанолу: за одиниці 10 г виходить 1,42. За 0% результат нульовий. За одиниці 8 г виходить 1,78 за масою, а британська формула за об’ємом дає 1,8. Пиво 500 мл 5% містить 25 мл етанолу — більше, ніж ця порція вина.",
          "faq": [
            {
              "q": "Чому норма одиниці різна в різних країнах?",
              "a": "Одиниця є домовленістю, а не природною сталою. США використовують близько 14 г, британська unit — 10 мл або приблизно 8 г. Це масовий розрахунок, тому для об’ємної британської формули можливе невелике розходження."
            },
            {
              "q": "Навіщо взагалі рахувати одиниці?",
              "a": "Щоб зіставити кількість етанолу за одним визначенням. 500 мл пива 5% дають 19,725 г, тоді як 150 мл вина 12% — 14,202 г; ці порції не однакові за алкоголем."
            },
            {
              "q": "Звідки береться густина 0,789?",
              "a": "0,789 г/мл — фіксоване наближення густини етанолу в цій моделі. Воно переводить введений об’єм чистого спирту в масу, без температурного перерахунку."
            },
            {
              "q": "Чи враховує розрахунок швидкість виведення?",
              "a": "Ні. Час, особисті характеристики й швидкість метаболізму не вводяться. Розрахунок не визначає концентрацію в крові, час виведення або можливість керувати автомобілем."
            }
          ],
          "disclaimer": "Кількість етанолу не оцінює сп’яніння, алкоголь у крові, час виведення чи допустимість водіння і не задає медичної норми споживання."
        },
        "help": {
          "standard_g": "Грами етанолу на одиницю: 10 — приклад. США ≈14 г; UK unit 10 мл ≈8 г, масове наближення не точно дорівнює об’ємному."
        },
        "sources": [
          "https://www.nhs.uk/live-well/alcohol-advice/calculating-alcohol-units/",
          "https://www.niaaa.nih.gov/alcohols-effects-health/what-standard-drink"
        ],
        "normal": {
          "inputs": {
            "volume_ml": 150,
            "abv": 12,
            "standard_g": 10
          },
          "expected": {
            "kind": "number",
            "value": 1.42
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 14.202
              }
            },
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 18
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "",
          "independentLiteral": "1,42"
        },
        "boundary": {
          "inputs": {
            "volume_ml": 150,
            "abv": 0,
            "standard_g": 10
          },
          "expected": {
            "kind": "number",
            "value": 0
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 0
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "",
          "independentLiteral": "0"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 1.42
        },
        "blankField": "volume_ml",
        "domainField": "volume_ml",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "de",
        "path": "/de/haushalt/alkoholeinheiten-rechner/",
        "h1": "Rechner für Alkoholeinheiten",
        "body": {
          "longDescription": "Rechnet Getränkevolumen und Alkoholanteil ABV in Milliliter und Gramm Ethanol um und teilt die Masse durch die gewählten Gramm pro Standardeinheit. So lassen sich angegebene Getränkemengen mit derselben Definition vergleichen. Ein US-standard drink enthält etwa 14 g, eine britische unit dagegen 10 ml beziehungsweise ungefähr 8 g. Die erhaltene Vorgabe von 10 g ist ein gewähltes Beispiel, keine britische Definition und keine allgemein sichere Portion.",
          "howToUse": [
            "Tatsächliches Getränkevolumen in Millilitern und ABV in Prozent eintragen.",
            "Gramm je Einheit nach der gewünschten Definition wählen; die Sprache legt kein Land fest.",
            "Mehrere Getränke einzeln berechnen und bei derselben Definition addieren.",
            "Getränkevolumen, Ethanolvolumen und Ethanolmasse unterscheiden."
          ],
          "howItWorks": "Ethanol in ml = Getränkevolumen × ABV/100; Masse in g = Ethanolvolumen × 0,789 g/ml; Einheiten = Masse ÷ gewählte Gramm je Einheit. Die Dichte ist eine feste Näherung. Volumen und Einheitsmasse müssen positiv sein; ABV darf 0 bis 100% betragen. Die britische Volumenformel mit 10 ml ist nicht exakt dieselbe wie die Näherung mit 8 g.",
          "example": "150 ml mit 12% ABV enthalten 18 ml beziehungsweise 14,202 g Ethanol: bei 10 g je Einheit ergeben sich 1,42. Bei 0% ergibt sich null. Mit 8 g ergeben sich nach dieser Massenrechnung 1,78 Einheiten; die britische Volumenformel ergibt 1,8.",
          "faq": [
            {
              "q": "Warum trage ich die Festlegung der Einheit selbst ein?",
              "a": "Die Einheit beruht auf einer Festlegung: USA etwa 14 g, britische unit 10 ml oder ungefähr 8 g. Hier wird Ethanolmasse geteilt; die Vorgabe 10 g behauptet keinen internationalen Standard."
            },
            {
              "q": "Zeigt das den Rausch an?",
              "a": "Nein. Zeit, Körpergewicht und weitere Faktoren für Blutalkohol fehlen. Die Einheitenzahl erlaubt weder das Fahren noch definiert sie eine sichere Trinkmenge."
            },
            {
              "q": "Warum unterscheiden sich Masse und Volumen des Alkohols?",
              "a": "Volumen steht in Millilitern, Masse in Gramm. Das Modell verbindet sie mit der gewählten Näherung 0,789 g/ml; die Zahlenwerte müssen nicht gleich sein."
            },
            {
              "q": "Wie zähle ich einen ganzen Abend?",
              "a": "Jedes Getränk mit derselben Einheitsmasse berechnen, dann Einheiten oder Gramm addieren. Die Summe beschreibt Ethanolmenge ohne eine Abbauprognose."
            }
          ],
          "disclaimer": "Die Ethanolmenge beurteilt weder Rausch, Blutalkohol, Abbauzeit noch Fahrtüchtigkeit und ist keine medizinische Empfehlung zum Konsum."
        },
        "help": {
          "standard_g": "Gramm Ethanol je Einheit: 10 ist ein Beispiel. USA ≈14 g; UK unit 10 ml ≈8 g, Masse- und Volumennäherung sind nicht exakt gleich."
        },
        "sources": [
          "https://www.nhs.uk/live-well/alcohol-advice/calculating-alcohol-units/",
          "https://www.niaaa.nih.gov/alcohols-effects-health/what-standard-drink"
        ],
        "normal": {
          "inputs": {
            "volume_ml": 150,
            "abv": 12,
            "standard_g": 10
          },
          "expected": {
            "kind": "number",
            "value": 1.42
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 14.202
              }
            },
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 18
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "",
          "independentLiteral": "1,42"
        },
        "boundary": {
          "inputs": {
            "volume_ml": 150,
            "abv": 0,
            "standard_g": 10
          },
          "expected": {
            "kind": "number",
            "value": 0
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 0
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "",
          "independentLiteral": "0"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 1.42
        },
        "blankField": "volume_ml",
        "domainField": "volume_ml",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "es",
        "path": "/es/hogar/unidades-de-alcohol/",
        "h1": "Calculadora de unidades de alcohol",
        "body": {
          "longDescription": "Convierte el volumen de bebida y el ABV en mililitros y gramos de etanol y divide la masa entre los gramos elegidos por unidad estándar. Permite comparar cantidades declaradas con una misma definición. Un standard drink de Estados Unidos contiene unos 14 g; una unit británica es 10 ml, aproximadamente 8 g. Los 10 g iniciales son un ejemplo elegido, no la definición británica ni una ración universalmente segura.",
          "howToUse": [
            "Introduce el volumen real en mililitros y el ABV en porcentaje.",
            "Elige gramos por unidad según la definición deseada, no según el idioma de la página.",
            "Calcula cada bebida por separado y suma usando la misma definición.",
            "Distingue volumen de bebida, volumen de etanol y masa de etanol."
          ],
          "howItWorks": "Etanol en ml = volumen de bebida × ABV/100; gramos = volumen de etanol × 0,789 g/ml; unidades = gramos ÷ gramos elegidos por unidad. La densidad es una aproximación fija. Volumen y masa de la unidad deben ser positivos; ABV admite de 0 a 100%. La fórmula británica por 10 ml no coincide exactamente con la aproximación por 8 g.",
          "example": "150 ml al 12% contienen 18 ml o 14,202 g de etanol: con una unidad de 10 g salen 1,42. Al 0% el resultado es cero. Una unidad de 8 g da 1,78 según este modelo de masa; la fórmula británica de volumen da 1,8.",
          "faq": [
            {
              "q": "¿Por qué tengo que introducir yo la definición de unidad?",
              "a": "La unidad es una convención: Estados Unidos usa unos 14 g, mientras la unit británica es 10 ml o aproximadamente 8 g. Esta herramienta divide masa; sus 10 g iniciales no afirman una norma internacional."
            },
            {
              "q": "¿Indica el grado de embriaguez?",
              "a": "No. Faltan tiempo, peso corporal y otros factores necesarios para estimar alcohol en sangre. El recuento no autoriza conducir ni establece una cantidad segura de consumo."
            },
            {
              "q": "¿Por qué difieren la masa y el volumen de alcohol?",
              "a": "El volumen se expresa en mililitros y la masa en gramos. El modelo los relaciona mediante la aproximación elegida de 0,789 g/ml; los valores numéricos no tienen que ser iguales."
            },
            {
              "q": "¿Cómo cuento toda una velada?",
              "a": "Calcula cada bebida con los mismos gramos por unidad y suma unidades o gramos. La suma registra cantidad de etanol sin predecir su eliminación."
            }
          ],
          "disclaimer": "La cantidad de etanol no evalúa embriaguez, alcohol en sangre, tiempo de eliminación ni aptitud para conducir; no es una recomendación médica de consumo."
        },
        "help": {
          "standard_g": "Gramos de etanol por unidad: 10 es ejemplo. EE. UU. ≈14 g; UK unit 10 ml ≈8 g, estimaciones por masa y volumen no son idénticas."
        },
        "sources": [
          "https://www.nhs.uk/live-well/alcohol-advice/calculating-alcohol-units/",
          "https://www.niaaa.nih.gov/alcohols-effects-health/what-standard-drink"
        ],
        "normal": {
          "inputs": {
            "volume_ml": 150,
            "abv": 12,
            "standard_g": 10
          },
          "expected": {
            "kind": "number",
            "value": 1.42
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 14.202
              }
            },
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 18
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "",
          "independentLiteral": "1,42"
        },
        "boundary": {
          "inputs": {
            "volume_ml": 150,
            "abv": 0,
            "standard_g": 10
          },
          "expected": {
            "kind": "number",
            "value": 0
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 0
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "",
          "independentLiteral": "0"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 1.42
        },
        "blankField": "volume_ml",
        "domainField": "volume_ml",
        "domainInvalid": -1,
        "countFields": []
      }
    ]
  },
  {
    "id": "bakers-percentage",
    "category": "household",
    "defaults": {
      "flour": 500,
      "ingredients": "water 68\nsalt 2\nyeast 1.2"
    },
    "fieldNames": [
      "flour",
      "ingredients"
    ],
    "defaultInactive": [],
    "pages": [
      {
        "locale": "ru",
        "path": "/ru/household/bakers-percentage/",
        "h1": "Калькулятор пекарских процентов",
        "body": {
          "longDescription": "Переводит пекарские проценты в граммы по заданной общей массе муки. Мука служит базой 100%, поэтому 68% воды означает 68 г воды на 100 г муки, а не 68% массы теста. Эта запись сохраняет пропорции при изменении замеса и позволяет видеть состав отдельно от размера партии. Мука уже учтена в отдельном поле: её повтор в списке добавил бы массу второй раз. Гидратация на странице считает только строки, распознанные как вода; влагу молока, яиц и других продуктов она не определяет.",
          "howToUse": [
            "Введите общую массу всей муки, включая муку в закваске, если считаете общие проценты.",
            "В каждой строке укажите название и процент от этой массы муки; десятичная точка или запятая допустимы.",
            "Не дублируйте муку в списке добавок. Для воды используйте распознаваемое отдельное слово в названии.",
            "Числовая гидратация не определяет консистенцию: она зависит также от муки и остальных ингредиентов."
          ],
          "howItWorks": "Масса строки = общая мука × процент/100; масса теста = мука + все строки. Гидратация = сумма распознанной воды ÷ мука × 100%. В названии распознаются отдельные слова вода, воды, water, Wasser или agua без учёта регистра. Проценты неотрицательны; мука положительна. Для общей гидратации закваску разделяют на её муку и воду, не добавляя их повторно.",
          "example": "500 г муки, вода 68%, соль 2% и дрожжи 1,2% дают 340 + 10 + 6 г добавок, всего 856 г и гидратацию 68%. При строках water 0 и salt 0 масса остаётся 500 г, гидратация равна 0%. Строка Wasser 68 также распознаётся как вода.",
          "faq": [
            {
              "q": "Почему сумма процентов получается больше 100?",
              "a": "Все доли имеют одну базу — массу муки, а не общий вес теста. Мука уже составляет 100%, и вода с остальными добавками увеличивает сумму выше 100%."
            },
            {
              "q": "Что такое гидратация и на что она влияет?",
              "a": "Это отношение учтённой воды к общей муке. Здесь учтены только названные водные строки; вода внутри молока, яиц или масла автоматически не извлекается. Одинаковый процент не гарантирует одинаковую консистенцию."
            },
            {
              "q": "Нужно ли вписывать муку в список ингредиентов?",
              "a": "Нет. Мука внесена отдельным полем и уже включена в итог. Строка муки в списке считалась бы ещё одной добавкой и задублировала её вес."
            },
            {
              "q": "Как учесть закваску, в которой уже есть вода?",
              "a": "Для общего процента добавьте муку закваски к общей муке, а её воду — к водной строке; саму закваску повторно не добавляйте. Если ввести её целиком, гидратация может быть как завышена, так и занижена."
            },
            {
              "q": "Работает ли эта запись для сдобного теста?",
              "a": "Да, массы сахара, масла и яиц можно выразить процентами от муки. Однако водная доля этих продуктов не вычисляется, и полученная гидратация не является полным анализом влажности теста."
            }
          ],
          "disclaimer": "Проценты описывают введённые массы; они не проверяют пригодность рецепта и не предсказывают консистенцию или время брожения."
        },
        "help": {
          "flour": "Общая мука, г; включите муку закваски для общего процента и не дублируйте её строкой.",
          "ingredients": "Название и процент от муки. Для воды отдельное слово вода/воды/water/Wasser/agua; вода других продуктов не выделяется."
        },
        "sources": [
          "https://www.kingarthurbaking.com/pro/reference/bakers-percentage"
        ],
        "normal": {
          "inputs": {
            "flour": 500,
            "ingredients": "water 68\nsalt 2\nyeast 1.2"
          },
          "expected": {
            "kind": "number",
            "value": 856
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 68
              }
            }
          ],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "г",
          "independentLiteral": "856 г"
        },
        "boundary": {
          "inputs": {
            "flour": 500,
            "ingredients": "water 0\nsalt 0"
          },
          "expected": {
            "kind": "number",
            "value": 500
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 0
              }
            }
          ],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "г",
          "independentLiteral": "500 г"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 856
        },
        "blankField": "flour",
        "domainField": "flour",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "en",
        "path": "/en/household/bakers-percentage-calculator/",
        "h1": "Baker's percentage calculator",
        "body": {
          "longDescription": "Converts baker’s percentages into grams using the stated total flour weight. Flour is the 100% basis, so 68% water means 68 g of water per 100 g flour, not 68% of total dough mass. The notation keeps proportions while changing batch size and separates composition from quantity. Flour is already included in its own field: listing it again would count it twice. Hydration here counts only rows recognised as water, without determining moisture in milk, eggs or other ingredients.",
          "howToUse": [
            "Enter all flour, including starter flour when calculating overall percentages.",
            "End each ingredient line with its percentage of that flour weight; either decimal point or comma is accepted.",
            "Do not list the flour again. Use a recognised standalone word for a water row.",
            "Hydration alone does not determine consistency; flour and the remaining ingredients also matter."
          ],
          "howItWorks": "Row weight = total flour × percentage/100; dough weight = flour + all rows. Hydration = recognised water ÷ flour × 100%. The standalone word water is recognised without case sensitivity; Russian, Ukrainian, German and Spanish water names are supported too. Percentages must be nonnegative and flour positive. For overall starter hydration, separate its flour and water and count each once.",
          "example": "500 g flour with water 68%, salt 2% and yeast 1.2% gives 340 + 10 + 6 g of additions, 856 g total and 68% hydration. With water 0 and salt 0, total mass stays 500 g and hydration is 0%. Wasser 68 is also recognised as water.",
          "faq": [
            {
              "q": "Why do the percentages add up to more than 100?",
              "a": "Every percentage uses flour weight rather than total dough weight as its denominator. Flour already represents 100%, and water and other additions increase the percentage sum."
            },
            {
              "q": "What is hydration and what does it change?",
              "a": "It is recognised water divided by total flour. Only named water rows are counted: moisture in milk, eggs or butter is not extracted automatically. Equal hydration does not guarantee equal dough consistency."
            },
            {
              "q": "Should flour go in the ingredient list?",
              "a": "No. The separate flour field is already part of the total. Listing flour as an addition would duplicate its weight."
            },
            {
              "q": "How do I account for a starter that already contains water?",
              "a": "For overall percentages, add the starter’s flour to total flour and its water to a recognised water row; do not add the whole starter again. Counting it only as one ingredient can overstate or understate hydration."
            },
            {
              "q": "Does this notation work for enriched dough?",
              "a": "Yes: sugar, butter and eggs can all be expressed relative to flour. Their internal water content is not calculated, so the displayed hydration is not a complete moisture analysis."
            }
          ],
          "disclaimer": "Percentages describe the entered masses; they do not validate a recipe or predict consistency or fermentation time."
        },
        "help": {
          "flour": "Total flour in g; include starter flour for overall percentages, without listing it again.",
          "ingredients": "Name and percentage of flour. A standalone water word is recognised in the five supported languages; other ingredients’ moisture is not extracted."
        },
        "sources": [
          "https://www.kingarthurbaking.com/pro/reference/bakers-percentage"
        ],
        "normal": {
          "inputs": {
            "flour": 500,
            "ingredients": "water 68\nsalt 2\nyeast 1.2"
          },
          "expected": {
            "kind": "number",
            "value": 856
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 68
              }
            }
          ],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "g",
          "independentLiteral": "856 г"
        },
        "boundary": {
          "inputs": {
            "flour": 500,
            "ingredients": "water 0\nsalt 0"
          },
          "expected": {
            "kind": "number",
            "value": 500
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 0
              }
            }
          ],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "g",
          "independentLiteral": "500 г"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 856
        },
        "blankField": "flour",
        "domainField": "flour",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "uk",
        "path": "/uk/pobut/pekarski-vidsotky/",
        "h1": "Калькулятор пекарських відсотків",
        "body": {
          "longDescription": "Переводить пекарські відсотки в грами за заданою загальною масою борошна. Борошно є базою 100%, тому 68% води означає 68 г на 100 г борошна, а не 68% маси тіста. Запис зберігає пропорції за зміни розміру замісу. Борошно вже враховане окремим полем: його повтор у списку подвоїв би цю масу. Гідратація тут рахує лише рядки, розпізнані як вода, без визначення вологи молока, яєць чи інших продуктів.",
          "howToUse": [
            "Введіть усе борошно, включно з борошном закваски для загальних відсотків.",
            "Закінчуйте кожен рядок відсотком від борошна; десяткова крапка й кома допустимі.",
            "Не дублюйте борошно в добавках. Для води використовуйте розпізнаване окреме слово.",
            "Гідратація не гарантує консистенції: значення мають і борошно, й інші складники."
          ],
          "howItWorks": "Маса рядка = загальне борошно × відсоток/100; маса тіста = борошно + всі рядки. Гідратація = розпізнана вода ÷ борошно × 100%. Окремі слова вода, water, Wasser та agua розпізнаються без урахування регістру. Відсотки невід’ємні, борошно додатне. Для загальних відсотків закваски її борошно й воду враховують окремо один раз.",
          "example": "500 г борошна, вода 68%, сіль 2% та дріжджі 1,2% дають 340 + 10 + 6 г добавок, разом 856 г і гідратацію 68%. За water 0 та salt 0 маса лишається 500 г, гідратація 0%. Рядок Wasser 68 також розпізнається як вода.",
          "faq": [
            {
              "q": "Чому сума відсотків більша за сто?",
              "a": "Бо база — маса борошна, а не всього тіста. Саме борошно вже становить 100%; вода й інші додатки збільшують суму понад сто."
            },
            {
              "q": "Що таке гідратація?",
              "a": "Це маса врахованої води відносно всього борошна. Тут не виділяється автоматично вода молока чи яєць. Борошно та склад тіста також впливають на його поведінку."
            },
            {
              "q": "Скільки має бути солі?",
              "a": "Внесіть відсоток зі свого рецепта, а не універсальну норму. Наприклад, задані 2% від 500 г борошна означають 10 г солі; калькулятор не призначає цей відсоток."
            },
            {
              "q": "Навіщо взагалі відсотки, якщо є грами?",
              "a": "Відсотки зберігають співвідношення за зміни замісу. Подвоєння борошна за тих самих відсотків подвоює маси всіх рядків. Для закваски спершу розділіть її борошно та воду, щоб не спотворити базу."
            }
          ],
          "disclaimer": "Відсотки описують введені маси, але не перевіряють рецепт і не прогнозують консистенцію або тривалість бродіння."
        },
        "help": {
          "flour": "Усе борошно, г; включіть борошно закваски для загального відсотка й не дублюйте рядком.",
          "ingredients": "Назва й відсоток від борошна. Для води окреме слово вода/water/Wasser/agua; вода інших продуктів не виділяється."
        },
        "sources": [
          "https://www.kingarthurbaking.com/pro/reference/bakers-percentage"
        ],
        "normal": {
          "inputs": {
            "flour": 500,
            "ingredients": "water 68\nsalt 2\nyeast 1.2"
          },
          "expected": {
            "kind": "number",
            "value": 856
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 68
              }
            }
          ],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "г",
          "independentLiteral": "856 г"
        },
        "boundary": {
          "inputs": {
            "flour": 500,
            "ingredients": "water 0\nsalt 0"
          },
          "expected": {
            "kind": "number",
            "value": 500
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 0
              }
            }
          ],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "г",
          "independentLiteral": "500 г"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 856
        },
        "blankField": "flour",
        "domainField": "flour",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "de",
        "path": "/de/haushalt/baeckerprozente-rechner/",
        "h1": "Rechner für Bäckerprozente",
        "body": {
          "longDescription": "Rechnet Bäckerprozente anhand des gesamten Mehlgewichts in Gramm um. Mehl ist die 100%-Bezugsgröße: 68% Wasser bedeutet 68 g Wasser je 100 g Mehl, nicht 68% des Teiggewichts. So bleiben die Verhältnisse beim Ändern der Teigmenge erhalten. Mehl steht bereits im eigenen Feld; ein weiterer Mehleintrag würde es doppelt zählen. Die Hydratation zählt hier nur erkannte Wasserzeilen, ohne den Wassergehalt von Milch, Eiern oder anderen Zutaten zu bestimmen.",
          "howToUse": [
            "Gesamtes Mehl eintragen, bei Gesamtprozenten einschließlich Sauerteigmehl.",
            "Jede Zeile mit dem Prozentanteil am Mehl beenden; Dezimalpunkt oder Komma sind möglich.",
            "Mehl nicht nochmals als Zutat aufführen. Ein erkanntes einzelnes Wort für Wasser verwenden.",
            "Hydratation allein bestimmt keine Teigkonsistenz; Mehl und weitere Zutaten wirken ebenfalls."
          ],
          "howItWorks": "Zeilengewicht = Gesamtmehl × Prozent/100; Teiggewicht = Mehl + alle Zeilen. Hydratation = erkanntes Wasser ÷ Mehl × 100%. Einzelne Wörter water oder Wasser werden unabhängig von Großschreibung erkannt; entsprechende russische, ukrainische und spanische Namen werden ebenfalls unterstützt. Prozente sind nichtnegativ, Mehl positiv. Für Gesamtprozente wird Sauerteig in Mehl und Wasser zerlegt und jeweils einmal erfasst.",
          "example": "500 g Mehl mit Wasser 68%, Salz 2% und Hefe 1,2% ergeben 340 + 10 + 6 g Zugaben, insgesamt 856 g und 68% Hydratation. Bei water 0 und salt 0 bleiben 500 g und 0% Hydratation. Auch Wasser 68 wird erkannt.",
          "faq": [
            {
              "q": "Warum ergeben die Prozentwerte zusammen mehr als 100?",
              "a": "Alle Anteile beziehen sich auf Mehlgewicht statt Gesamtteiggewicht. Das Mehl beträgt bereits 100%; Wasser und andere Zugaben erhöhen die Summe."
            },
            {
              "q": "Was ist die Hydratation und was ändert sie?",
              "a": "Erkannte Wassermasse geteilt durch Gesamtmehl. Wasser in Milch, Eiern oder Butter wird nicht automatisch herausgerechnet. Gleiche Hydratation garantiert keine gleiche Konsistenz."
            },
            {
              "q": "Gehört das Mehl in die Zutatenliste?",
              "a": "Nein. Das Mehlfeld ist bereits Teil der Summe. Eine weitere Mehlzeile würde als Zugabe gezählt und das Mehlgewicht doppelt erfassen."
            },
            {
              "q": "Wie berücksichtige ich einen Sauerteig, der schon Wasser enthält?",
              "a": "Für Gesamtprozente Sauerteigmehl zum Gesamtmehl und Sauerteigwasser zur Wasserzeile addieren, den ganzen Sauerteig aber nicht erneut eintragen. Ein einziger Sammelposten kann die Hydratation über- oder unterschätzen."
            },
            {
              "q": "Gilt diese Schreibweise auch für süße Teige?",
              "a": "Ja, Zucker, Butter und Eier lassen sich auf Mehl beziehen. Ihr Wasseranteil wird jedoch nicht berechnet; die Hydratation ist keine vollständige Feuchtigkeitsanalyse."
            }
          ],
          "disclaimer": "Die Prozente beschreiben Eingabemassen, bestätigen aber weder die Eignung des Rezepts noch Konsistenz oder Gärzeit."
        },
        "help": {
          "flour": "Gesamtmehl in g; Sauerteigmehl für Gesamtprozente einbeziehen, nicht erneut als Zeile.",
          "ingredients": "Name und Mehlprozent. Einzelwort Wasser oder water wird erkannt; weitere Seitensprachen ebenfalls. Wasser anderer Zutaten wird nicht bestimmt."
        },
        "sources": [
          "https://www.kingarthurbaking.com/pro/reference/bakers-percentage"
        ],
        "normal": {
          "inputs": {
            "flour": 500,
            "ingredients": "water 68\nsalt 2\nyeast 1.2"
          },
          "expected": {
            "kind": "number",
            "value": 856
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 68
              }
            }
          ],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "g",
          "independentLiteral": "856 г"
        },
        "boundary": {
          "inputs": {
            "flour": 500,
            "ingredients": "water 0\nsalt 0"
          },
          "expected": {
            "kind": "number",
            "value": 500
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 0
              }
            }
          ],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "g",
          "independentLiteral": "500 г"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 856
        },
        "blankField": "flour",
        "domainField": "flour",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "es",
        "path": "/es/hogar/porcentaje-de-panadero/",
        "h1": "Calculadora de porcentaje de panadero",
        "body": {
          "longDescription": "Convierte porcentajes de panadero en gramos según el peso total de harina indicado. La harina es la base del 100%: 68% de agua significa 68 g por 100 g de harina, no 68% del peso de la masa. La notación conserva proporciones al cambiar el tamaño de la tanda. La harina ya figura en su campo; añadirla otra vez la contaría dos veces. La hidratación solo cuenta líneas reconocidas como agua, sin determinar la humedad de leche, huevos u otros ingredientes.",
          "howToUse": [
            "Introduce toda la harina, incluida la de la masa madre al calcular porcentajes totales.",
            "Termina cada línea con su porcentaje respecto a harina; se admite punto o coma decimal.",
            "No repitas la harina en la lista. Usa una palabra reconocida para una línea de agua.",
            "La hidratación por sí sola no determina consistencia: también influyen harina y demás ingredientes."
          ],
          "howItWorks": "Peso de línea = harina total × porcentaje/100; peso de masa = harina + todas las líneas. Hidratación = agua reconocida ÷ harina × 100%. Se reconocen palabras independientes water o agua sin distinguir mayúsculas; también se admiten los nombres rusos, ucranianos y alemanes correspondientes. Porcentajes no negativos y harina positiva. Para porcentajes totales de masa madre, separa su harina y agua y cuenta cada una una sola vez.",
          "example": "500 g de harina, agua 68%, sal 2% y levadura 1,2% dan 340 + 10 + 6 g añadidos, 856 g en total y 68% de hidratación. Con water 0 y salt 0 quedan 500 g y 0%. También se reconoce agua 68.",
          "faq": [
            {
              "q": "¿Por qué los porcentajes suman más de 100?",
              "a": "Todos los porcentajes toman como denominador la harina, no la masa total. La harina ya suma 100%; el agua y las demás adiciones aumentan la suma."
            },
            {
              "q": "¿Qué es la hidratación y qué cambia?",
              "a": "Es agua reconocida dividida entre harina total. No se extrae automáticamente el agua de leche, huevos o mantequilla. Una hidratación igual no garantiza consistencia igual."
            },
            {
              "q": "¿La harina va en la lista de ingredientes?",
              "a": "No. El campo de harina ya entra en el total. Repetirla como ingrediente duplicaría su peso."
            },
            {
              "q": "¿Cómo tengo en cuenta una masa madre que ya lleva agua?",
              "a": "Para porcentajes totales añade la harina de la masa madre a harina total y su agua a una línea de agua; no vuelvas a añadir la masa madre completa. Contarla solo como una entrada puede aumentar o reducir indebidamente la hidratación."
            },
            {
              "q": "¿Esta notación vale para masas enriquecidas?",
              "a": "Sí: azúcar, mantequilla y huevos se expresan respecto a harina. No se calcula su agua interna, por lo que la hidratación no es un análisis completo de humedad."
            }
          ],
          "disclaimer": "Los porcentajes describen masas introducidas; no validan la receta ni predicen consistencia o tiempo de fermentación."
        },
        "help": {
          "flour": "Harina total en g; incluye harina de masa madre para porcentaje total sin repetirla en una línea.",
          "ingredients": "Nombre y porcentaje de harina. Se reconoce agua o water como palabra independiente y sus equivalentes de otros idiomas; no se extrae humedad de otros productos."
        },
        "sources": [
          "https://www.kingarthurbaking.com/pro/reference/bakers-percentage"
        ],
        "normal": {
          "inputs": {
            "flour": 500,
            "ingredients": "water 68\nsalt 2\nyeast 1.2"
          },
          "expected": {
            "kind": "number",
            "value": 856
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 68
              }
            }
          ],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "g",
          "independentLiteral": "856 г"
        },
        "boundary": {
          "inputs": {
            "flour": 500,
            "ingredients": "water 0\nsalt 0"
          },
          "expected": {
            "kind": "number",
            "value": 500
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 0
              }
            }
          ],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "g",
          "independentLiteral": "500 г"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 856
        },
        "blankField": "flour",
        "domainField": "flour",
        "domainInvalid": -1,
        "countFields": []
      }
    ]
  },
  {
    "id": "brew-ratio",
    "category": "household",
    "defaults": {
      "mode": "coffee",
      "water": 500,
      "coffee": 30,
      "ratio": 16
    },
    "fieldNames": [
      "mode",
      "water",
      "coffee",
      "ratio"
    ],
    "defaultInactive": [
      "coffee"
    ],
    "pages": [
      {
        "locale": "ru",
        "path": "/ru/household/sootnoshenie-kofe-i-vody/",
        "h1": "Калькулятор соотношения кофе и воды",
        "body": {
          "longDescription": "Решает уравнение заварки в любую сторону: массу кофе под заданный объём воды, воду под навеску или соотношение по двум известным величинам. Запись 1:16 здесь означает 1 г сухого кофе на 16 мл воды, поданной на заваривание. Это не соотношение массы готового напитка к кофе и не выход чашки после фильтра. Отличие от пересчёта рецепта по порциям сохраняется: здесь связаны две величины, а не весь список ингредиентов. Крепость и вкус зависят также от помола, времени и способа заваривания.",
          "howToUse": [
            "Выберите искомую величину: кофе, воду или k.",
            "Введите две известные величины; поле искомой величины скрыто, ответ показан в результате.",
            "Используйте входную воду рецепта, а не готовый объём чашки.",
            "Выберите соотношение для своего рецепта и оборудования; строка ёмкости гущи не заменяет измерение выхода напитка."
          ],
          "howItWorks": "Вода, мл = кофе, г × k; кофе = вода ÷ k; k = вода ÷ кофе. Две известные величины должны быть положительными; поле искомой величины не используется как вход. k имеет смысл мл воды на грамм кофе. Миллилитры не переводятся в граммы по температуре. Дополнительная строка показывает условную ёмкость гущи по допущению 2 мл/г, не измеренную потерю или точный объём напитка.",
          "example": "500 мл входной воды при 1:16 требуют 31,25 г кофе. Обратная задача: 30 г и 480 мл дают 1:16. При 30 г и k = 1 получается 30 мл воды; условная ёмкость гущи 60 мл при этом не означает, что реально исчезнут 60 мл из 30.",
          "faq": [
            {
              "q": "Какое соотношение брать?",
              "a": "Возьмите значение из своего рецепта или инструкции оборудования и сравните вкус при сопоставимых условиях. Сохранённое 1:16 — пример расчёта, а не обязательная норма для любого способа."
            },
            {
              "q": "Почему в чашке меньше, чем налито воды?",
              "a": "Вода может удерживаться в гуще и фильтре. Здесь 2 мл/г задают лишь условную ёмкость гущи, без измерения реальных потерь, испарения или выхода чашки."
            },
            {
              "q": "Чем это отличается от пересчёта рецепта по порциям?",
              "a": "Пересчёт рецепта умножает весь список ингредиентов на коэффициент порций. Здесь одно соотношение связывает навеску сухого кофе и объём входной воды, и любую величину можно найти по двум другим."
            },
            {
              "q": "Считать воду в граммах или миллилитрах?",
              "a": "Поля используют миллилитры воды и граммы кофе. Если рецепт задаёт массу воды, переведите её в объём для условий измерения либо работайте в массовых единицах вне этой страницы. Универсальная погрешность меньше 3% не гарантируется."
            }
          ],
          "disclaimer": "Модель считает входные пропорции и выбранную условную ёмкость; она не измеряет экстракцию, крепость или выход готового напитка."
        },
        "help": {
          "water": "Миллилитры воды, поданной на заваривание, не выход готовой чашки.",
          "ratio": "k = мл входной воды на 1 г сухого кофе; положительное значение, без температурной конвертации в массу."
        },
        "sources": [
          "https://support.moccamaster.com/hc/en-us/articles/1500009389881-How-much-coffee-should-I-use-in-my-Moccamaster"
        ],
        "normal": {
          "inputs": {
            "mode": "coffee",
            "water": 500,
            "coffee": 30,
            "ratio": 16
          },
          "expected": {
            "kind": "number",
            "value": 31.25
          },
          "rows": [
            {
              "index": 2,
              "expectation": {
                "kind": "ratio",
                "value": 16
              }
            },
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 62.5
              }
            }
          ],
          "inactive": [
            "coffee"
          ],
          "rowCount": 4,
          "primaryUnit": "г",
          "independentLiteral": "31,25 г"
        },
        "boundary": {
          "inputs": {
            "mode": "water",
            "water": 500,
            "coffee": 30,
            "ratio": 1
          },
          "expected": {
            "kind": "number",
            "value": 30
          },
          "rows": [
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 60
              }
            }
          ],
          "inactive": [
            "water"
          ],
          "rowCount": 4,
          "primaryUnit": "мл",
          "independentLiteral": "30 мл"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 31.25
        },
        "blankField": "water",
        "domainField": "water",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "en",
        "path": "/en/household/coffee-brew-ratio/",
        "h1": "Coffee brew ratio calculator",
        "body": {
          "longDescription": "Solves the brewing equation in either direction: coffee dose for an input water volume, water for a dose, or the ratio from both known quantities. Here 1:16 means 1 g of dry coffee per 16 mL of water supplied for brewing. It is not a brewed-beverage mass ratio or the volume left in the cup after filtration. Unlike scaling a whole ingredient list by servings, this tool relates two quantities. Grind, contact time and brewing method also influence strength and taste.",
          "howToUse": [
            "Choose the unknown: coffee, water or k.",
            "Enter the two known values; the unknown input is hidden and its answer appears in the result.",
            "Use the recipe’s input water, not finished cup volume.",
            "Choose a recipe and equipment ratio; grounds capacity cannot replace a measurement of beverage yield."
          ],
          "howItWorks": "Water mL = coffee g × k; coffee = water ÷ k; k = water ÷ coffee. Both known values must be positive; the solved field is ignored as an input. k has units of mL water per g coffee. Water volume is not converted to mass using temperature. The extra grounds row assumes a capacity of 2 mL/g, rather than measuring water loss or exact beverage yield.",
          "example": "500 mL of input water at 1:16 needs 31.25 g coffee. Conversely, 30 g with 480 mL gives 1:16. At 30 g and k = 1, water is 30 mL; the assumed grounds capacity of 60 mL does not mean that 60 mL actually disappear from those 30 mL.",
          "faq": [
            {
              "q": "Which ratio should I use?",
              "a": "Use your recipe or equipment instructions and compare taste under comparable conditions. The retained 1:16 is a calculation example, not a requirement for every brewing method."
            },
            {
              "q": "Why is there less in the cup than water poured?",
              "a": "Grounds and filters can retain water. The 2 mL/g figure here is an assumed grounds capacity, without measuring actual retention, evaporation or cup yield."
            },
            {
              "q": "How is this different from scaling a recipe?",
              "a": "Recipe scaling multiplies a whole ingredient list by a serving factor. Here one relationship connects dry coffee dose and input water volume; any variable can be found from the other two."
            },
            {
              "q": "Grams or millilitres for water?",
              "a": "These fields use mL of water and g of coffee. If your recipe specifies water mass, convert it for the measurement conditions or use a mass-based calculation elsewhere. No universal error below 3% is guaranteed."
            }
          ],
          "disclaimer": "The model calculates input proportions and an assumed capacity; it does not measure extraction, beverage strength or finished yield."
        },
        "help": {
          "water": "Millilitres of input brewing water, not finished cup yield.",
          "ratio": "k = input water mL per 1 g dry coffee; positive, without temperature-based mass conversion."
        },
        "sources": [
          "https://support.moccamaster.com/hc/en-us/articles/1500009389881-How-much-coffee-should-I-use-in-my-Moccamaster"
        ],
        "normal": {
          "inputs": {
            "mode": "coffee",
            "water": 500,
            "coffee": 30,
            "ratio": 16
          },
          "expected": {
            "kind": "number",
            "value": 31.25
          },
          "rows": [
            {
              "index": 2,
              "expectation": {
                "kind": "ratio",
                "value": 16
              }
            },
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 62.5
              }
            }
          ],
          "inactive": [
            "coffee"
          ],
          "rowCount": 4,
          "primaryUnit": "g",
          "independentLiteral": "31,25 г"
        },
        "boundary": {
          "inputs": {
            "mode": "water",
            "water": 500,
            "coffee": 30,
            "ratio": 1
          },
          "expected": {
            "kind": "number",
            "value": 30
          },
          "rows": [
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 60
              }
            }
          ],
          "inactive": [
            "water"
          ],
          "rowCount": 4,
          "primaryUnit": "mL",
          "independentLiteral": "30 мл"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 31.25
        },
        "blankField": "water",
        "domainField": "water",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "uk",
        "path": "/uk/pobut/spivvidnoshennya-kavy-ta-vody/",
        "h1": "Калькулятор співвідношення кави та води",
        "body": {
          "longDescription": "Знаходить навіску кави, об’єм вхідної води або співвідношення за двома відомими величинами. Тут 1:16 означає 1 г сухої кави на 16 мл води, поданої для заварювання. Це не співвідношення маси готового напою й кави та не об’єм у чашці після фільтра. На відміну від масштабування всього рецепта, пов’язуються дві величини. Помел, час контакту та спосіб заварювання також впливають на міцність і смак; калькулятор не встановлює, що співвідношення важливіше за них.",
          "howToUse": [
            "Оберіть шукане: каву, воду чи k.",
            "Введіть два відомі значення; поле шуканого приховане, відповідь показано в результаті.",
            "Використовуйте вхідну воду рецепта, а не об’єм готової чашки.",
            "Співвідношення обирайте для свого рецепта та обладнання; вихід напою вимірюйте окремо."
          ],
          "howItWorks": "Вода, мл = кава, г × k; кава = вода ÷ k; k = вода ÷ кава. Два відомі значення мають бути додатними; шукане поле не використовується як вхід. k має одиницю мл води на грам кави. Об’єм води не переводиться в масу за температурою. Рядок гущі задає умовну місткість 2 мл/г, а не виміряну втрату або точний вихід напою.",
          "example": "500 мл вхідної води за 1:16 потребують 31,25 г кави. Зворотно: 30 г та 480 мл дають 1:16. За 30 г і k = 1 виходить 30 мл води; умовна місткість гущі 60 мл не означає фактичну втрату 60 мл із цих 30.",
          "faq": [
            {
              "q": "Яке співвідношення обрати?",
              "a": "Візьміть значення зі свого рецепта чи інструкції обладнання. Збережене 1:16 — приклад, а не універсальна норма. Масове еспресо-співвідношення виходу напою не слід підставляти як об’єм вхідної води."
            },
            {
              "q": "Чому мілілітри прирівнюються до грамів?",
              "a": "Тут мілілітри залишаються одиницею об’єму, а не точно прирівнюються до грамів. Для рецепта з масою води потрібне відповідне перетворення; температура може змінювати густину."
            },
            {
              "q": "Чи вбирає кава частину води?",
              "a": "Гуща й фільтр можуть утримувати воду. Рядок 2 мл/г показує лише обрану умовну місткість, не фактичну втрату, випаровування чи об’єм чашки."
            },
            {
              "q": "Що важливіше — співвідношення чи помел?",
              "a": "Обидва параметри впливають на напій разом із часом і методом. Цей калькулятор зв’язує введені кількості, але не оцінює екстракцію та не доводить універсальної переваги одного параметра."
            }
          ],
          "disclaimer": "Модель рахує вхідні пропорції та обрану умовну місткість; вона не вимірює екстракцію, міцність або вихід готового напою."
        },
        "help": {
          "water": "Мілілітри вхідної води для заварювання, не вихід готової чашки.",
          "ratio": "k = мл вхідної води на 1 г сухої кави; додатне, без температурного перерахунку в масу."
        },
        "sources": [
          "https://support.moccamaster.com/hc/en-us/articles/1500009389881-How-much-coffee-should-I-use-in-my-Moccamaster"
        ],
        "normal": {
          "inputs": {
            "mode": "coffee",
            "water": 500,
            "coffee": 30,
            "ratio": 16
          },
          "expected": {
            "kind": "number",
            "value": 31.25
          },
          "rows": [
            {
              "index": 2,
              "expectation": {
                "kind": "ratio",
                "value": 16
              }
            },
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 62.5
              }
            }
          ],
          "inactive": [
            "coffee"
          ],
          "rowCount": 4,
          "primaryUnit": "г",
          "independentLiteral": "31,25 г"
        },
        "boundary": {
          "inputs": {
            "mode": "water",
            "water": 500,
            "coffee": 30,
            "ratio": 1
          },
          "expected": {
            "kind": "number",
            "value": 30
          },
          "rows": [
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 60
              }
            }
          ],
          "inactive": [
            "water"
          ],
          "rowCount": 4,
          "primaryUnit": "мл",
          "independentLiteral": "30 мл"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 31.25
        },
        "blankField": "water",
        "domainField": "water",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "de",
        "path": "/de/haushalt/kaffee-wasser-verhaeltnis/",
        "h1": "Rechner für das Kaffeeverhältnis",
        "body": {
          "longDescription": "Löst die Brühgleichung in beide Richtungen: Kaffeedosis für ein Eingangsvolumen Wasser, Wasser für eine Dosis oder das Verhältnis aus beiden bekannten Werten. Hier bedeutet 1:16 ein Gramm trockenen Kaffee je 16 ml zugeführtes Brühwasser. Gemeint sind weder das Masseverhältnis des fertigen Getränks noch die Menge nach der Filterung. Anders als beim Skalieren einer ganzen Zutatenliste werden zwei Größen verbunden. Mahlgrad, Kontaktzeit und Brühmethode beeinflussen ebenfalls Stärke und Geschmack.",
          "howToUse": [
            "Gesuchte Größe wählen: Kaffee, Wasser oder k.",
            "Zwei bekannte Werte eingeben; das gesuchte Eingabefeld ist verborgen und die Antwort steht im Ergebnis.",
            "Zugeführtes Rezeptwasser statt fertiges Tassenvolumen verwenden.",
            "Verhältnis aus Rezept und Geräteanleitung wählen; Getränkeausbeute gesondert messen."
          ],
          "howItWorks": "Wasser in ml = Kaffee in g × k; Kaffee = Wasser ÷ k; k = Wasser ÷ Kaffee. Beide bekannten Werte müssen positiv sein; das berechnete Feld zählt nicht als Eingabe. k hat die Einheit ml Wasser je g Kaffee. Eine temperaturabhängige Umrechnung in Wassermasse erfolgt nicht. Die Satzzeile nimmt eine Kapazität von 2 ml/g an, ohne tatsächlichen Verlust oder Getränkeausbeute zu messen.",
          "example": "500 ml Eingangswasser bei 1:16 benötigen 31,25 g Kaffee. Umgekehrt ergeben 30 g und 480 ml das Verhältnis 1:16. Bei 30 g und k = 1 ergeben sich 30 ml Wasser; die angenommene Satzkapazität von 60 ml bedeutet keinen tatsächlichen Verlust von 60 ml aus diesen 30.",
          "faq": [
            {
              "q": "Welches Verhältnis soll ich nehmen?",
              "a": "Ein Verhältnis aus dem eigenen Rezept oder der Geräteanleitung verwenden und unter vergleichbaren Bedingungen prüfen. Die Vorgabe 1:16 ist ein Rechenbeispiel, keine Regel für jede Methode."
            },
            {
              "q": "Warum ist in der Tasse weniger als eingegossen?",
              "a": "Satz und Filter können Wasser zurückhalten. Die 2 ml/g sind hier eine angenommene Kapazität, keine Messung von Rückhalt, Verdunstung oder Tassenmenge."
            },
            {
              "q": "Wie unterscheidet sich das vom Hochrechnen eines Rezepts?",
              "a": "Die Rezeptumrechnung multipliziert eine ganze Zutatenliste mit einem Portionsfaktor. Hier verbindet ein Verhältnis trockenen Kaffee und zugeführtes Wasservolumen; jede Größe lässt sich aus den anderen beiden bestimmen."
            },
            {
              "q": "Gramm oder Milliliter für das Wasser?",
              "a": "Die Felder verwenden ml Wasser und g Kaffee. Gibt das Rezept Wassermasse vor, diese für die Messbedingungen umrechnen oder außerhalb dieser Seite mit Massen rechnen. Ein allgemein garantierter Fehler unter 3% besteht nicht."
            }
          ],
          "disclaimer": "Das Modell berechnet Eingangsverhältnisse und eine angenommene Kapazität, keine Extraktion, Getränkestärke oder fertige Ausbeute."
        },
        "help": {
          "water": "Milliliter zugeführtes Brühwasser, nicht fertige Tassenmenge.",
          "ratio": "k = ml Eingangswasser je 1 g trockenen Kaffee; positiv, ohne temperaturabhängige Massenumrechnung."
        },
        "sources": [
          "https://support.moccamaster.com/hc/en-us/articles/1500009389881-How-much-coffee-should-I-use-in-my-Moccamaster"
        ],
        "normal": {
          "inputs": {
            "mode": "coffee",
            "water": 500,
            "coffee": 30,
            "ratio": 16
          },
          "expected": {
            "kind": "number",
            "value": 31.25
          },
          "rows": [
            {
              "index": 2,
              "expectation": {
                "kind": "ratio",
                "value": 16
              }
            },
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 62.5
              }
            }
          ],
          "inactive": [
            "coffee"
          ],
          "rowCount": 4,
          "primaryUnit": "g",
          "independentLiteral": "31,25 г"
        },
        "boundary": {
          "inputs": {
            "mode": "water",
            "water": 500,
            "coffee": 30,
            "ratio": 1
          },
          "expected": {
            "kind": "number",
            "value": 30
          },
          "rows": [
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 60
              }
            }
          ],
          "inactive": [
            "water"
          ],
          "rowCount": 4,
          "primaryUnit": "ml",
          "independentLiteral": "30 мл"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 31.25
        },
        "blankField": "water",
        "domainField": "water",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "es",
        "path": "/es/hogar/ratio-de-cafe/",
        "h1": "Calculadora de ratio de café",
        "body": {
          "longDescription": "Resuelve la ecuación de preparación: dosis de café para un volumen de agua de entrada, agua para una dosis o ratio a partir de ambas cantidades. Aquí 1:16 significa 1 g de café seco por 16 ml de agua suministrada para preparar. No representa la razón de masas de la bebida terminada ni el volumen que queda tras filtrar. A diferencia de escalar una lista completa de ingredientes, se relacionan dos magnitudes. Molienda, tiempo de contacto y método también influyen en concentración y sabor.",
          "howToUse": [
            "Elige la incógnita: café, agua o k.",
            "Introduce los dos valores conocidos; el campo desconocido está oculto y la respuesta aparece en el resultado.",
            "Usa el agua de entrada de la receta, no el volumen final de la taza.",
            "Elige el ratio según receta y equipo; mide aparte el rendimiento de bebida."
          ],
          "howItWorks": "Agua en ml = café en g × k; café = agua ÷ k; k = agua ÷ café. Los dos valores conocidos deben ser positivos; el campo resuelto se ignora como entrada. k tiene unidad ml de agua por g de café. No se convierte volumen de agua en masa según temperatura. La fila de posos supone una capacidad de 2 ml/g, sin medir pérdida real ni rendimiento de bebida.",
          "example": "500 ml de agua de entrada a 1:16 requieren 31,25 g de café. A la inversa, 30 g y 480 ml dan 1:16. Con 30 g y k = 1 resultan 30 ml de agua; los 60 ml de capacidad supuesta de posos no significan que desaparezcan realmente 60 ml de esos 30.",
          "faq": [
            {
              "q": "¿Qué ratio debo usar?",
              "a": "Usa la receta o las instrucciones de tu equipo y compara en condiciones similares. El 1:16 inicial es un ejemplo de cálculo, no una exigencia para todos los métodos."
            },
            {
              "q": "¿Por qué en la taza hay menos que el agua vertida?",
              "a": "Los posos y el filtro pueden retener agua. Aquí 2 ml/g es una capacidad supuesta, sin medir retención real, evaporación ni volumen final."
            },
            {
              "q": "¿En qué se diferencia de escalar una receta?",
              "a": "Escalar una receta multiplica toda la lista por un factor de raciones. Aquí una razón une café seco y agua de entrada; cada magnitud puede hallarse a partir de las otras dos."
            },
            {
              "q": "¿Gramos o mililitros para el agua?",
              "a": "Los campos usan ml de agua y g de café. Si la receta expresa masa de agua, conviértela para las condiciones de medición o calcula por masas fuera de esta página. No se garantiza universalmente un error inferior al 3%."
            }
          ],
          "disclaimer": "El modelo calcula proporciones de entrada y una capacidad supuesta; no mide extracción, concentración ni rendimiento final de bebida."
        },
        "help": {
          "water": "Mililitros de agua de entrada, no rendimiento final de taza.",
          "ratio": "k = ml de agua de entrada por 1 g de café seco; positivo, sin conversión de masa por temperatura."
        },
        "sources": [
          "https://support.moccamaster.com/hc/en-us/articles/1500009389881-How-much-coffee-should-I-use-in-my-Moccamaster"
        ],
        "normal": {
          "inputs": {
            "mode": "coffee",
            "water": 500,
            "coffee": 30,
            "ratio": 16
          },
          "expected": {
            "kind": "number",
            "value": 31.25
          },
          "rows": [
            {
              "index": 2,
              "expectation": {
                "kind": "ratio",
                "value": 16
              }
            },
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 62.5
              }
            }
          ],
          "inactive": [
            "coffee"
          ],
          "rowCount": 4,
          "primaryUnit": "g",
          "independentLiteral": "31,25 г"
        },
        "boundary": {
          "inputs": {
            "mode": "water",
            "water": 500,
            "coffee": 30,
            "ratio": 1
          },
          "expected": {
            "kind": "number",
            "value": 30
          },
          "rows": [
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 60
              }
            }
          ],
          "inactive": [
            "water"
          ],
          "rowCount": 4,
          "primaryUnit": "ml",
          "independentLiteral": "30 мл"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 31.25
        },
        "blankField": "water",
        "domainField": "water",
        "domainInvalid": -1,
        "countFields": []
      }
    ]
  },
  {
    "id": "calories-per-serving",
    "category": "household",
    "defaults": {
      "ingredients": "flour 300 364\nbutter 100 717\nsugar 150 387",
      "servings": 4
    },
    "fieldNames": [
      "ingredients",
      "servings"
    ],
    "defaultInactive": [],
    "pages": [
      {
        "locale": "ru",
        "path": "/ru/household/kalorii-na-porciyu/",
        "h1": "Калькулятор калорий на порцию",
        "body": {
          "longDescription": "Складывает калорийность блюда из ингредиентов и делит её на число порций. Каждая строка это название, масса в граммах и калорийность на сто граммов, причём последние два числа читаются как масса и калорийность, а всё перед ними считается названием: так разбирается «мука в/с 300 364». Строка без калорийности отклоняется, а не достраивается нулём — подставленный ноль занизил бы блюдо молча. Таблица показывает вклад каждого ингредиента. Сумма предполагает полное потребление указанных продуктов; потери жира, отброшенные жидкости и добавки после расчёта не учтены.",
          "howToUse": [
            "Впишите ингредиенты по одному в строке.",
            "В каждой строке последние два числа — масса в граммах и ккал на 100 г.",
            "Название может состоять из нескольких слов: «мука в/с 300 364».",
            "Укажите, на сколько порций рассчитано блюдо."
          ],
          "howItWorks": "Энергия строки = граммы × ккал на 100 г ÷ 100; энергия порции = сумма ÷ число равных порционных эквивалентов, не меньше 1. Дробные эквиваленты поддерживаются. Расчёт использует неокруглённые суммы; энергия выводится в целых ккал. Масса порции — сумма введённых масс ÷ порции, не измеренный выход готовки.",
          "example": "Мука 300 г × 364 ккал/100 г, масло 100 г × 717 и сахар 150 г × 387 дают ровно 2389,5 ккал. Четыре порции: 597,375, на экране 597 ккал; общий итог округлён до 2390. Вода 100 г с 0 ккал/100 г на одну порцию даёт 0 ккал и 100 г исходной массы.",
          "faq": [
            {
              "q": "Где взять калорийность на 100 г?",
              "a": "Используйте упаковку или базу состава для того же состояния продукта. Если энергия дана на порцию массой m г, переведите: ккал на порцию × 100/m. Не вся маркировка использует 100 г."
            },
            {
              "q": "Меняет ли готовка результат?",
              "a": "Одна вода не добавляет энергии, но при готовке могут добавляться масло или соус и удаляться жир или жидкость. Модель не измеряет эти изменения: учитывайте фактически съеденные ингредиенты на сопоставимой основе."
            },
            {
              "q": "Почему строка без калорийности не считается?",
              "a": "Потому что подставленный ноль занизил бы блюдо молча. Лучше остановить расчёт, чем показать правдоподобное, но неверное число."
            },
            {
              "q": "Можно смешивать граммы и миллилитры?",
              "a": "Вводите граммы. Для воды разница невелика, а для масла или мёда — существенна: взвесьте или переведите заранее."
            },
            {
              "q": "Это то же, что калькулятор БЖУ?",
              "a": "Нет. Этот складывает калории того, что действительно положено в кастрюлю. Калькулятор БЖУ делит дневную норму на белки, жиры и углеводы."
            }
          ],
          "disclaimer": "Оценка по выбранным данным состава не заменяет измерение готового блюда и не назначает размер порции или рацион."
        },
        "help": {
          "ingredients": "Название, граммы, ккал на 100 г. Используйте данные для того же состояния продукта; все ингредиенты считаются потреблёнными.",
          "servings": "Не меньше 1: число равных порционных эквивалентов может быть дробным; это не число людей."
        },
        "sources": [
          "https://www.fda.gov/food/nutrition-facts-label/serving-size-nutrition-facts-label"
        ],
        "normal": {
          "inputs": {
            "ingredients": "flour 300 364\nbutter 100 717\nsugar 150 387",
            "servings": 4
          },
          "expected": {
            "kind": "number",
            "value": 597
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 2390
              }
            },
            {
              "index": 4,
              "expectation": {
                "kind": "number",
                "value": 137.5
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "ккал",
          "independentLiteral": "597 ккал"
        },
        "boundary": {
          "inputs": {
            "ingredients": "water 100 0",
            "servings": 1
          },
          "expected": {
            "kind": "number",
            "value": 0
          },
          "rows": [
            {
              "index": 4,
              "expectation": {
                "kind": "number",
                "value": 100
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "ккал",
          "independentLiteral": "0 ккал"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 597
        },
        "blankField": "servings",
        "domainField": "servings",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "en",
        "path": "/en/household/calories-per-serving/",
        "h1": "Calories per serving calculator",
        "body": {
          "longDescription": "Adds up the calories of a dish from its ingredients and divides them by the number of servings. Each line is a name, a weight in grams and the calories per 100 grams, and the last two numbers are read as weight and calories while everything before them counts as the name — so «plain flour 300 364» parses correctly even with spaces in the name. A line without calories is rejected rather than filled with a zero: a substituted zero would understate the dish quietly. The table shows each ingredient’s contribution. The sum assumes all listed ingredients are consumed; discarded fat or liquids and later additions are excluded.",
          "howToUse": [
            "Enter ingredients one per line.",
            "On each line the last two numbers are the weight in grams and the calories per 100 g.",
            "The name may be several words: «plain flour 300 364».",
            "Enter how many servings the dish makes."
          ],
          "howItWorks": "Row energy = grams × kcal per 100 g ÷ 100; portion energy = sum ÷ equal serving equivalents, at least 1. Fractional equivalents are supported. Unrounded sums are used, with energy displayed as whole kcal. Portion mass is entered ingredient mass ÷ servings, not measured cooked yield.",
          "example": "Flour 300 g at 364 kcal/100 g, butter 100 g at 717 and sugar 150 g at 387 give exactly 2389.5 kcal. Four servings give 597.375, displayed as 597 kcal; the total rounds to 2390. Water 100 g at 0 kcal/100 g for one serving gives 0 kcal and 100 g of original mass.",
          "faq": [
            {
              "q": "Where do I find calories per 100 g?",
              "a": "Use the package or a composition database for the same product state. If energy is per serving of m grams, convert it as serving kcal × 100/m. Labels do not universally use a 100 g basis."
            },
            {
              "q": "Does cooking change the result?",
              "a": "Water alone adds no energy, but cooking may add oil or sauce and discard fat or liquid. The model measures none of these changes. Record the ingredients actually consumed on a consistent basis."
            },
            {
              "q": "Why is a line without calories rejected?",
              "a": "Because a substituted zero would understate the dish silently. Stopping is better than showing a plausible but wrong number."
            },
            {
              "q": "Can I mix grams and millilitres?",
              "a": "Enter grams. For water-like liquids millilitres and grams are close enough, but for oil or honey they are not — weigh them or convert first."
            },
            {
              "q": "Is this the same as a macros calculator?",
              "a": "No. This one sums the calories of what you actually put in the pot. A macros calculator splits a daily allowance into protein, fat and carbohydrate."
            }
          ],
          "disclaimer": "An estimate from selected composition data does not measure the cooked dish or prescribe serving size or a diet."
        },
        "help": {
          "ingredients": "Name, grams, kcal per 100 g. Match the product’s state; all listed ingredients are assumed consumed.",
          "servings": "At least 1: equal serving equivalents may be fractional; this is not a headcount."
        },
        "sources": [
          "https://www.fda.gov/food/nutrition-facts-label/serving-size-nutrition-facts-label"
        ],
        "normal": {
          "inputs": {
            "ingredients": "flour 300 364\nbutter 100 717\nsugar 150 387",
            "servings": 4
          },
          "expected": {
            "kind": "number",
            "value": 597
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 2390
              }
            },
            {
              "index": 4,
              "expectation": {
                "kind": "number",
                "value": 137.5
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "kcal",
          "independentLiteral": "597 ккал"
        },
        "boundary": {
          "inputs": {
            "ingredients": "water 100 0",
            "servings": 1
          },
          "expected": {
            "kind": "number",
            "value": 0
          },
          "rows": [
            {
              "index": 4,
              "expectation": {
                "kind": "number",
                "value": 100
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "kcal",
          "independentLiteral": "0 ккал"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 597
        },
        "blankField": "servings",
        "domainField": "servings",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "uk",
        "path": "/uk/pobut/kalorii-na-porciyu-ua/",
        "h1": "Калькулятор калорій на порцію",
        "body": {
          "longDescription": "Складає калорійність страви з інгредієнтів і ділить її на кількість порцій. Кожен рядок це назва, маса в грамах і калорійність на сто грамів, причому останні два числа читаються як маса і калорійність, а все перед ними вважається назвою — тож «борошно в/ґ 300 364» розбереться навіть із пробілом у назві. Рядок без калорійності відхиляється, а не доповнюється нулем: підставлений нуль занизив би страву мовчки. Таблиця показує внесок кожного інгредієнта. Сума припускає повне споживання вказаних продуктів; відкинуті жир чи рідина та наступні добавки не враховані.",
          "howToUse": [
            "Введіть інгредієнти по одному в рядку.",
            "У кожному рядку останні два числа це маса в грамах і ккал на 100 г.",
            "Назва може складатися з кількох слів: «борошно в/ґ 300 364».",
            "Вкажіть, на скільки порцій розрахована страва."
          ],
          "howItWorks": "Енергія рядка = грами × ккал на 100 г ÷ 100; енергія порції = сума ÷ рівні порційні еквіваленти, не менше 1. Дробові еквіваленти підтримуються. Використовуються неокруглені суми, енергія виводиться цілими ккал. Маса порції — введені маси ÷ порції, не виміряний вихід готової страви.",
          "example": "Борошно 300 г за 364 ккал/100 г, масло 100 г за 717 і цукор 150 г за 387 дають точно 2389,5 ккал. Чотири порції: 597,375, на екрані 597 ккал; загальний підсумок округлено до 2390. Вода 100 г із 0 ккал/100 г на одну порцію дає 0 ккал та 100 г вихідної маси.",
          "faq": [
            {
              "q": "Де взяти калорійність на 100 г?",
              "a": "Беріть упаковку або базу складу для того самого стану продукту. Якщо енергія вказана на порцію m г, переведіть: ккал порції × 100/m. Не вся маркіровка використовує основу 100 г."
            },
            {
              "q": "Чи змінює приготування результат?",
              "a": "Вода сама не додає енергії, але під час готування можуть додаватися олія чи соус та видалятися жир або рідина. Модель не вимірює цих змін; враховуйте фактично спожиті інгредієнти на однаковій основі."
            },
            {
              "q": "Чому рядок без калорійності відхиляється?",
              "a": "Бо підставлений нуль занизив би страву мовчки. Зупинитися краще, ніж показати правдоподібне, але хибне число."
            },
            {
              "q": "Чи можна змішувати грами і мілілітри?",
              "a": "Вводьте грами. Для води різниця мала, але для олії чи меду вона суттєва — зважте або переведіть спершу."
            },
            {
              "q": "Це те саме, що калькулятор БЖУ?",
              "a": "Ні. Цей додає калорії того, що ви справді поклали в каструлю. Калькулятор БЖУ ділить денну норму на білки, жири і вуглеводи."
            }
          ],
          "disclaimer": "Оцінка за обраними даними складу не вимірює готову страву й не призначає розмір порції або раціон."
        },
        "help": {
          "ingredients": "Назва, грами, ккал на 100 г. Узгодьте стан продукту; усі вказані інгредієнти вважаються спожитими.",
          "servings": "Не менше 1: рівні порційні еквіваленти можуть бути дробовими; це не кількість людей."
        },
        "sources": [
          "https://www.fda.gov/food/nutrition-facts-label/serving-size-nutrition-facts-label"
        ],
        "normal": {
          "inputs": {
            "ingredients": "flour 300 364\nbutter 100 717\nsugar 150 387",
            "servings": 4
          },
          "expected": {
            "kind": "number",
            "value": 597
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 2390
              }
            },
            {
              "index": 4,
              "expectation": {
                "kind": "number",
                "value": 137.5
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "ккал",
          "independentLiteral": "597 ккал"
        },
        "boundary": {
          "inputs": {
            "ingredients": "water 100 0",
            "servings": 1
          },
          "expected": {
            "kind": "number",
            "value": 0
          },
          "rows": [
            {
              "index": 4,
              "expectation": {
                "kind": "number",
                "value": 100
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "ккал",
          "independentLiteral": "0 ккал"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 597
        },
        "blankField": "servings",
        "domainField": "servings",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "de",
        "path": "/de/haushalt/kalorien-je-portion/",
        "h1": "Rechner für Kalorien je Portion",
        "body": {
          "longDescription": "Zählt die Kalorien eines Gerichts aus seinen Zutaten zusammen und teilt sie durch die Zahl der Portionen. Jede Zeile besteht aus einem Namen, einem Gewicht in Gramm und dem Kaloriengehalt je 100 Gramm, und die letzten beiden Zahlen werden als Gewicht und Kalorien gelesen, während alles davor als Name zählt — „Weizenmehl Type 405 300 364“ wird also auch mit Leerzeichen im Namen richtig verstanden. Eine Zeile ohne Kalorien wird abgewiesen statt mit einer Null gefüllt: eine eingesetzte Null setzte das Gericht still zu niedrig an. Die Tabelle zeigt jeden Zutatenbeitrag. Die Summe setzt vollständigen Verzehr voraus; verworfenes Fett, Flüssigkeiten und spätere Zugaben sind nicht berücksichtigt.",
          "howToUse": [
            "Trage die Zutaten je Zeile ein.",
            "In jeder Zeile sind die letzten beiden Zahlen das Gewicht in Gramm und die Kalorien je 100 g.",
            "Der Name darf mehrere Wörter haben: „Weizenmehl Type 405 300 364“.",
            "Trage ein, wie viele Portionen das Gericht ergibt."
          ],
          "howItWorks": "Zeilenenergie = Gramm × kcal je 100 g ÷ 100; Portionsenergie = Summe ÷ gleiche Portionsäquivalente, mindestens 1. Gebrochene Äquivalente sind erlaubt. Unrunde Summen werden gerechnet, Energie in ganzen kcal angezeigt. Portionsmasse ist Eingabemasse ÷ Portionen, keine gemessene Garmenge.",
          "example": "Mehl 300 g mit 364 kcal/100 g, Butter 100 g mit 717 und Zucker 150 g mit 387 ergeben exakt 2389,5 kcal. Vier Portionen ergeben 597,375, angezeigt als 597 kcal; der Gesamtwert rundet auf 2390. Wasser 100 g mit 0 kcal/100 g für eine Portion ergibt 0 kcal und 100 g Ausgangsmasse.",
          "faq": [
            {
              "q": "Wo finde ich die Kalorien je 100 g?",
              "a": "Verpackung oder Zusammensetzungsdaten für denselben Produktzustand verwenden. Bei Energie je Portion von m Gramm umrechnen: Portions-kcal × 100/m. Angaben beruhen nicht überall auf 100 g."
            },
            {
              "q": "Ändert das Kochen das Ergebnis?",
              "a": "Wasser allein fügt keine Energie hinzu. Beim Garen können jedoch Öl oder Soße hinzukommen und Fett oder Flüssigkeit verworfen werden. Das Modell misst diese Änderungen nicht; tatsächlich verzehrte Zutaten auf passender Basis erfassen."
            },
            {
              "q": "Warum wird eine Zeile ohne Kalorien abgewiesen?",
              "a": "Weil eine eingesetzte Null das Gericht still zu niedrig ansetzte. Anzuhalten ist besser, als eine plausible und falsche Zahl zu zeigen."
            },
            {
              "q": "Darf ich Gramm und Milliliter mischen?",
              "a": "Trage Gramm ein. Bei wasserähnlichen Flüssigkeiten liegen Milliliter und Gramm nah genug beieinander, bei Öl oder Honig aber nicht — wiege sie oder rechne vorher um."
            },
            {
              "q": "Ist das dasselbe wie ein Rechner für Makronährstoffe?",
              "a": "Nein. Dieser zählt die Kalorien dessen zusammen, was du tatsächlich in den Topf gegeben hast. Ein Makrorechner teilt eine Tageszufuhr in Eiweiß, Fett und Kohlenhydrate auf."
            }
          ],
          "disclaimer": "Die Schätzung aus gewählten Zusammensetzungsdaten misst kein fertiges Gericht und legt weder Portionsgröße noch Ernährung fest."
        },
        "help": {
          "ingredients": "Name, Gramm, kcal je 100 g. Zustand des Lebensmittels abgleichen; alle Zutaten gelten als verzehrt.",
          "servings": "Mindestens 1: gleiche Portionsäquivalente dürfen gebrochen sein; keine Personenzahl."
        },
        "sources": [
          "https://www.fda.gov/food/nutrition-facts-label/serving-size-nutrition-facts-label"
        ],
        "normal": {
          "inputs": {
            "ingredients": "flour 300 364\nbutter 100 717\nsugar 150 387",
            "servings": 4
          },
          "expected": {
            "kind": "number",
            "value": 597
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 2390
              }
            },
            {
              "index": 4,
              "expectation": {
                "kind": "number",
                "value": 137.5
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "kcal",
          "independentLiteral": "597 ккал"
        },
        "boundary": {
          "inputs": {
            "ingredients": "water 100 0",
            "servings": 1
          },
          "expected": {
            "kind": "number",
            "value": 0
          },
          "rows": [
            {
              "index": 4,
              "expectation": {
                "kind": "number",
                "value": 100
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "kcal",
          "independentLiteral": "0 ккал"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 597
        },
        "blankField": "servings",
        "domainField": "servings",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "es",
        "path": "/es/hogar/calorias-por-racion/",
        "h1": "Calculadora de calorías por ración",
        "body": {
          "longDescription": "Suma las calorías de un plato a partir de sus ingredientes y las divide entre el número de raciones. Cada línea es un nombre, un peso en gramos y las calorías por 100 gramos, y los dos últimos números se leen como peso y calorías mientras que todo lo anterior cuenta como nombre, así que «harina de trigo 300 364» se interpreta bien aunque el nombre lleve espacios. Una línea sin calorías se rechaza en vez de rellenarse con un cero: un cero sustituido subestimaría el plato en silencio. La tabla muestra cada aportación. La suma supone consumo completo de los ingredientes; excluye grasa o líquidos descartados y añadidos posteriores.",
          "howToUse": [
            "Introduce los ingredientes, uno por línea.",
            "En cada línea los dos últimos números son el peso en gramos y las calorías por 100 g.",
            "El nombre puede llevar varias palabras: «harina de trigo 300 364».",
            "Introduce cuántas raciones salen del plato."
          ],
          "howItWorks": "Energía de línea = gramos × kcal por 100 g ÷ 100; energía de ración = suma ÷ equivalentes iguales de ración, al menos 1. Admite equivalentes fraccionarios. Se calcula sin redondear las sumas y se muestra energía en kcal enteras. Masa de ración es masa introducida ÷ raciones, no rendimiento cocinado medido.",
          "example": "Harina 300 g a 364 kcal/100 g, mantequilla 100 g a 717 y azúcar 150 g a 387 suman exactamente 2389,5 kcal. Cuatro raciones dan 597,375, mostradas como 597 kcal; el total redondea a 2390. Agua 100 g a 0 kcal/100 g para una ración da 0 kcal y 100 g de masa original.",
          "faq": [
            {
              "q": "¿Dónde encuentro las calorías por 100 g?",
              "a": "Usa el envase o una base de composición para el mismo estado del producto. Si la energía es por ración de m gramos, convierte: kcal de ración × 100/m. El etiquetado no usa siempre una base de 100 g."
            },
            {
              "q": "¿La cocción cambia el resultado?",
              "a": "El agua sola no añade energía, pero al cocinar puede añadirse aceite o salsa y descartarse grasa o líquido. El modelo no mide esos cambios; registra los ingredientes realmente consumidos sobre una base coherente."
            },
            {
              "q": "¿Por qué se rechaza una línea sin calorías?",
              "a": "Porque un cero sustituido subestimaría el plato en silencio. Detenerse es mejor que mostrar una cifra verosímil y equivocada."
            },
            {
              "q": "¿Puedo mezclar gramos y mililitros?",
              "a": "Introduce gramos. En líquidos parecidos al agua los mililitros y los gramos van bastante parejos, pero en el aceite o la miel no: pésalos o conviértelos antes."
            },
            {
              "q": "¿Es lo mismo que una calculadora de macronutrientes?",
              "a": "No. Esta suma las calorías de lo que de verdad has puesto en la olla. Una calculadora de macronutrientes reparte una ración diaria entre proteínas, grasas e hidratos."
            }
          ],
          "disclaimer": "Una estimación con datos elegidos no mide el plato cocinado ni prescribe tamaño de ración o dieta."
        },
        "help": {
          "ingredients": "Nombre, gramos, kcal por 100 g. Coincide con el estado del alimento; se supone consumo de todos los ingredientes.",
          "servings": "Al menos 1: equivalentes de raciones iguales pueden ser fraccionarios; no es número de personas."
        },
        "sources": [
          "https://www.fda.gov/food/nutrition-facts-label/serving-size-nutrition-facts-label"
        ],
        "normal": {
          "inputs": {
            "ingredients": "flour 300 364\nbutter 100 717\nsugar 150 387",
            "servings": 4
          },
          "expected": {
            "kind": "number",
            "value": 597
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 2390
              }
            },
            {
              "index": 4,
              "expectation": {
                "kind": "number",
                "value": 137.5
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "kcal",
          "independentLiteral": "597 ккал"
        },
        "boundary": {
          "inputs": {
            "ingredients": "water 100 0",
            "servings": 1
          },
          "expected": {
            "kind": "number",
            "value": 0
          },
          "rows": [
            {
              "index": 4,
              "expectation": {
                "kind": "number",
                "value": 100
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "kcal",
          "independentLiteral": "0 ккал"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 597
        },
        "blankField": "servings",
        "domainField": "servings",
        "domainInvalid": -1,
        "countFields": []
      }
    ]
  },
  {
    "id": "cooked-weight",
    "category": "household",
    "defaults": {
      "mode": "rawToCooked",
      "raw": 200,
      "cooked": 500,
      "factor": 2.5,
      "kcalPer100Raw": 350
    },
    "fieldNames": [
      "mode",
      "raw",
      "cooked",
      "factor",
      "kcalPer100Raw"
    ],
    "defaultInactive": [
      "cooked"
    ],
    "pages": [
      {
        "locale": "ru",
        "path": "/ru/household/cooked-weight/",
        "h1": "Калькулятор сухого и готового веса",
        "body": {
          "longDescription": "Переводит массу между исходным сырым или сухим продуктом и готовым по заданному коэффициенту выхода. Крупа может набрать воду, а мясо потерять массу: коэффициент не обязан быть больше единицы. Калорийность нужно брать для того же исходного состояния продукта, которое использовано в первой массе. Надпись на упаковке не всегда относится к сухому продукту. Дополнительный расчёт энергии предполагает, что вся энергия исходного продукта осталась в съеденной готовой партии; добавленное масло и удалённый жир этим допущением не описываются.",
          "howToUse": [
            "Выберите, какая масса известна: исходная или готовая.",
            "Определите коэффициент по взвешиванию одной партии в обоих состояниях.",
            "Сверьте, к какому состоянию относятся ккал на упаковке.",
            "Если добавлялись или удалялись энергетические ингредиенты, считайте их отдельно; простой выход по массе их не учитывает."
          ],
          "howItWorks": "Коэффициент = готовая масса ÷ исходная. Готовая масса = исходная × коэффициент; исходная = готовая ÷ коэффициент. Энергия партии = исходная масса × исходные ккал/100 г ÷ 100; ккал/100 г готового = исходные ккал/100 г ÷ коэффициент. Нужны положительные масса и коэффициент; нулевая калорийность допустима. Вход второй, вычисляемой массы игнорируется.",
          "example": "При исходных 200 г риса, коэффициенте 2,5 и 350 ккал/100 г получаются 500 г готового, 700 ккал всего и 140 ккал/100 г. Для отдельного условного продукта: 130 г готового при коэффициенте 0,65 означают 200 г исходного; при исходных 120 ккал/100 г это 240 ккал и около 184,62 ккал/100 г готового.",
          "faq": [
            {
              "q": "Почему калорийность готового блюда ниже, чем на упаковке?",
              "a": "Если прибавилась только вода и энергия сохранилась, она распределяется на большую массу, поэтому ккал/100 г снижаются. Это условие модели, а не правило для любого способа готовки."
            },
            {
              "q": "Какой коэффициент разварки взять?",
              "a": "Взвесьте исходную и готовую съедобную партию и разделите готовую массу на исходную. Крупа, вода и способ приготовления меняют выход; универсального коэффициента здесь нет."
            },
            {
              "q": "Подходит ли расчёт для мяса?",
              "a": "Для пересчёта массы — да, коэффициент может быть ниже 1. Энергетический пересчёт остаётся условным: при потере жира или сока энергия съеденной партии может измениться."
            },
            {
              "q": "Влияет ли масло или соус?",
              "a": "Да. Добавки и удалённые ингредиенты меняют энергию. Эта формула сохраняет энергию исходного продукта и не определяет такие изменения автоматически."
            },
            {
              "q": "Что делать, если варить дольше обычного?",
              "a": "Повторно измерьте выход партии. Время само по себе не задаёт коэффициент: вода может как впитываться, так и испаряться."
            }
          ],
          "disclaimer": "Выход массы и сохранение энергии — разные допущения. Результат не измеряет состав готового блюда и не задаёт диету."
        },
        "help": {
          "factor": "Готовый вес ÷ исходный сухой или сырой вес. Измерьте свою партию; коэффициент не определяет потери калорий.",
          "kcalPer100Raw": "Ккал на 100 г исходного продукта; 0 допустим. Модель сохраняет эту энергию, без добавленного масла и отброшенного жира."
        },
        "sources": [
          "https://www.ars.usda.gov/ARSUserFiles/80400525/Articles/NDBC38_Beef_CookingYield.pdf"
        ],
        "normal": {
          "inputs": {
            "mode": "rawToCooked",
            "raw": 200,
            "cooked": 500,
            "factor": 2.5,
            "kcalPer100Raw": 350
          },
          "expected": {
            "kind": "number",
            "value": 500
          },
          "rows": [
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 700
              }
            },
            {
              "index": 4,
              "expectation": {
                "kind": "number",
                "value": 140
              }
            }
          ],
          "inactive": [
            "cooked"
          ],
          "rowCount": 5,
          "primaryUnit": "г",
          "independentLiteral": "500 г"
        },
        "boundary": {
          "inputs": {
            "mode": "cookedToRaw",
            "raw": 0,
            "cooked": 130,
            "factor": 0.65,
            "kcalPer100Raw": 120
          },
          "expected": {
            "kind": "number",
            "value": 200
          },
          "rows": [
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 240
              }
            },
            {
              "index": 4,
              "expectation": {
                "kind": "number",
                "value": 184.62
              }
            }
          ],
          "inactive": [
            "raw"
          ],
          "rowCount": 5,
          "primaryUnit": "г",
          "independentLiteral": "200 г"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 500
        },
        "blankField": "raw",
        "domainField": "raw",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "en",
        "path": "/en/household/raw-to-cooked-weight-calculator/",
        "h1": "Raw to cooked weight calculator",
        "body": {
          "longDescription": "Converts between original raw or dry weight and cooked weight using an entered yield factor. Grains can gain water while meat can lose mass, so the factor need not exceed one. Use nutrition data for the same original state as the starting weight: package figures are not universally for dry food. The energy calculation additionally assumes that all original energy remains in the consumed cooked batch. Added oil or discarded fat are outside that assumption.",
          "howToUse": [
            "Choose whether original or cooked weight is known.",
            "Measure both states of one batch to establish its yield factor.",
            "Check which product state the nutrition figure describes.",
            "Account separately for energy added or discarded; a mass-yield factor cannot determine it."
          ],
          "howItWorks": "Factor = cooked weight ÷ original weight. Cooked = original × factor; original = cooked ÷ factor. Batch energy = original grams × original kcal/100 g ÷ 100; cooked kcal/100 g = original kcal/100 g ÷ factor. Weight and factor must be positive; zero energy density is allowed. The other, calculated weight is ignored as input.",
          "example": "Original rice 200 g, factor 2.5 and 350 kcal/100 g give 500 g cooked, 700 kcal total and 140 kcal/100 g. A separate illustrative food: 130 g cooked at factor 0.65 means 200 g original; original density 120 kcal/100 g gives 240 kcal and about 184.62 kcal/100 g cooked.",
          "faq": [
            {
              "q": "Why are cooked calories lower than the packet says?",
              "a": "If only water was added and energy was retained, the same energy occupies more mass and kcal/100 g falls. That is a model condition, not a rule for every cooking method."
            },
            {
              "q": "Which expansion factor should I use?",
              "a": "Weigh the original and cooked edible batch, then divide cooked by original weight. Grain, water and preparation affect yield; no universal factor is supplied."
            },
            {
              "q": "Does this work for meat?",
              "a": "Yes for weight conversion: a factor below one represents mass loss. The energy estimate remains conditional because discarded fat or juices can alter the energy consumed."
            },
            {
              "q": "Do oil and sauces matter?",
              "a": "Yes. Added and discarded ingredients change energy. This formula retains original energy without identifying those changes automatically."
            },
            {
              "q": "What if I cook it longer than usual?",
              "a": "Measure the batch yield again. Time alone does not determine the factor: water may be absorbed or evaporate."
            }
          ],
          "disclaimer": "Mass yield and conserved energy are separate assumptions. This result does not measure cooked composition or prescribe a diet."
        },
        "help": {
          "factor": "Cooked weight ÷ original dry or raw weight. Measure your batch; the factor does not determine calorie losses.",
          "kcalPer100Raw": "Kcal per 100 g original product; 0 is allowed. Energy is conserved by assumption, excluding added oil and discarded fat."
        },
        "sources": [
          "https://www.ars.usda.gov/ARSUserFiles/80400525/Articles/NDBC38_Beef_CookingYield.pdf"
        ],
        "normal": {
          "inputs": {
            "mode": "rawToCooked",
            "raw": 200,
            "cooked": 500,
            "factor": 2.5,
            "kcalPer100Raw": 350
          },
          "expected": {
            "kind": "number",
            "value": 500
          },
          "rows": [
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 700
              }
            },
            {
              "index": 4,
              "expectation": {
                "kind": "number",
                "value": 140
              }
            }
          ],
          "inactive": [
            "cooked"
          ],
          "rowCount": 5,
          "primaryUnit": "g",
          "independentLiteral": "500 г"
        },
        "boundary": {
          "inputs": {
            "mode": "cookedToRaw",
            "raw": 0,
            "cooked": 130,
            "factor": 0.65,
            "kcalPer100Raw": 120
          },
          "expected": {
            "kind": "number",
            "value": 200
          },
          "rows": [
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 240
              }
            },
            {
              "index": 4,
              "expectation": {
                "kind": "number",
                "value": 184.62
              }
            }
          ],
          "inactive": [
            "raw"
          ],
          "rowCount": 5,
          "primaryUnit": "g",
          "independentLiteral": "200 г"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 500
        },
        "blankField": "raw",
        "domainField": "raw",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "uk",
        "path": "/uk/pobut/suha-ta-hotova-vaha/",
        "h1": "Калькулятор сухої та готової ваги",
        "body": {
          "longDescription": "Переводить масу між вихідним сирим або сухим продуктом та готовим за заданим коефіцієнтом виходу. Крупа може набрати воду, а м’ясо втратити масу, тому коефіцієнт не обов’язково більший за одиницю. Калорійність має відповідати тому самому вихідному стану; упаковка не завжди описує сухий продукт. Енергетичний розрахунок додатково припускає збереження всієї енергії у спожитій готовій партії. Додавання олії та видалення жиру цим припущенням не охоплені.",
          "howToUse": [
            "Оберіть відому масу: вихідну або готову.",
            "Зважте одну партію до й після готування та знайдіть її коефіцієнт.",
            "Перевірте стан продукту, для якого наведено калорійність.",
            "Енергію добавок або відкинутих складників рахуйте окремо: коефіцієнт маси її не визначає."
          ],
          "howItWorks": "Коефіцієнт = готова маса ÷ вихідна. Готова = вихідна × коефіцієнт; вихідна = готова ÷ коефіцієнт. Енергія партії = вихідні грами × вихідні ккал/100 г ÷ 100; готові ккал/100 г = вихідні ккал/100 г ÷ коефіцієнт. Маса й коефіцієнт додатні, калорійність може бути нульовою. Друге, обчислюване поле маси ігнорується як вхід.",
          "example": "200 г вихідного рису, коефіцієнт 2,5 та 350 ккал/100 г дають 500 г готового, 700 ккал загалом і 140 ккал/100 г. Окремий умовний продукт: 130 г готового за коефіцієнта 0,65 означають 200 г вихідного; за вихідних 120 ккал/100 г це 240 ккал та близько 184,62 ккал/100 г готового.",
          "faq": [
            {
              "q": "Який коефіцієнт розварювання в різних круп?",
              "a": "Знайдіть коефіцієнт як готову масу, поділену на вихідну, для власної партії. Вид крупи, вода та спосіб готування змінюють вихід; універсального табличного значення тут немає."
            },
            {
              "q": "Чому калорійність готової каші менша?",
              "a": "За додавання лише води й збереження енергії вона розподіляється на більшу масу. Це припущення моделі, а не властивість будь-якої готової страви."
            },
            {
              "q": "Що зважувати для щоденника харчування?",
              "a": "Використовуйте дані складу для того стану, в якому зважили продукт. Для переходу між станами потрібен виміряний вихід; зміни енергії через добавки або втрати враховуйте окремо."
            },
            {
              "q": "Чи стосується це м’яса?",
              "a": "Для маси — так, коефіцієнт може бути нижчим за 1. За втрати жиру чи соку калорійний перерахунок із незмінною енергією буде лише умовним."
            }
          ],
          "disclaimer": "Вихід маси та збереження енергії — різні припущення. Результат не вимірює склад готової страви й не призначає раціон."
        },
        "help": {
          "factor": "Готова вага ÷ вихідна суха або сира вага. Виміряйте свою партію; коефіцієнт не визначає втрати калорій.",
          "kcalPer100Raw": "Ккал на 100 г вихідного продукту; 0 допустимий. Енергія зберігається за припущенням, без доданої олії та відкинутого жиру."
        },
        "sources": [
          "https://www.ars.usda.gov/ARSUserFiles/80400525/Articles/NDBC38_Beef_CookingYield.pdf"
        ],
        "normal": {
          "inputs": {
            "mode": "rawToCooked",
            "raw": 200,
            "cooked": 500,
            "factor": 2.5,
            "kcalPer100Raw": 350
          },
          "expected": {
            "kind": "number",
            "value": 500
          },
          "rows": [
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 700
              }
            },
            {
              "index": 4,
              "expectation": {
                "kind": "number",
                "value": 140
              }
            }
          ],
          "inactive": [
            "cooked"
          ],
          "rowCount": 5,
          "primaryUnit": "г",
          "independentLiteral": "500 г"
        },
        "boundary": {
          "inputs": {
            "mode": "cookedToRaw",
            "raw": 0,
            "cooked": 130,
            "factor": 0.65,
            "kcalPer100Raw": 120
          },
          "expected": {
            "kind": "number",
            "value": 200
          },
          "rows": [
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 240
              }
            },
            {
              "index": 4,
              "expectation": {
                "kind": "number",
                "value": 184.62
              }
            }
          ],
          "inactive": [
            "raw"
          ],
          "rowCount": 5,
          "primaryUnit": "г",
          "independentLiteral": "200 г"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 500
        },
        "blankField": "raw",
        "domainField": "raw",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "de",
        "path": "/de/haushalt/rohgewicht-kochgewicht/",
        "h1": "Rechner für Roh- und Kochgewicht",
        "body": {
          "longDescription": "Rechnet zwischen ursprünglichem rohem oder trockenem Gewicht und gegartem Gewicht mit einem eingegebenen Ausbeutefaktor. Getreide kann Wasser aufnehmen, Fleisch Masse verlieren; der Faktor muss daher nicht größer als eins sein. Nährwertdaten müssen zum ursprünglichen Produktzustand passen. Packungsangaben beziehen sich nicht immer auf trockene Ware. Die Energierechnung setzt zusätzlich voraus, dass alle ursprüngliche Energie in der verzehrten gegarten Menge bleibt. Zugefügtes Öl und verworfenes Fett sind davon nicht erfasst.",
          "howToUse": [
            "Bekanntes ursprüngliches oder gegartes Gewicht wählen.",
            "Eine Charge in beiden Zuständen wiegen, um ihren Faktor zu bestimmen.",
            "Produktzustand der Nährwertangabe prüfen.",
            "Hinzugefügte oder verworfene Energie gesondert erfassen; Massenausbeute bestimmt sie nicht."
          ],
          "howItWorks": "Faktor = gegartes ÷ ursprüngliches Gewicht. Gegart = ursprünglich × Faktor; ursprünglich = gegart ÷ Faktor. Energie = ursprüngliche Gramm × ursprüngliche kcal/100 g ÷ 100; gegarte kcal/100 g = ursprüngliche kcal/100 g ÷ Faktor. Gewicht und Faktor sind positiv, null kcal sind erlaubt. Das berechnete zweite Gewicht wird als Eingabe ignoriert.",
          "example": "200 g ursprünglicher Reis, Faktor 2,5 und 350 kcal/100 g ergeben 500 g gegart, 700 kcal insgesamt und 140 kcal/100 g. Ein anderes Beispielprodukt: 130 g gegart bei Faktor 0,65 bedeuten 200 g ursprünglich; bei ursprünglichen 120 kcal/100 g sind das 240 kcal und etwa 184,62 kcal/100 g gegart.",
          "faq": [
            {
              "q": "Warum sind die Kalorien gekocht niedriger als auf der Packung?",
              "a": "Kommt nur Wasser hinzu und bleibt Energie erhalten, verteilt sie sich auf mehr Masse: kcal/100 g sinken. Das ist eine Modellannahme, keine Regel für jede Zubereitung."
            },
            {
              "q": "Welchen Quellfaktor soll ich nehmen?",
              "a": "Gegarte essbare Masse durch ursprüngliche Masse derselben Charge teilen. Getreide, Wasser und Zubereitung ändern die Ausbeute; es gibt hier keinen allgemeingültigen Faktor."
            },
            {
              "q": "Funktioniert das auch für Fleisch?",
              "a": "Für die Gewichtsumrechnung ja: ein Faktor unter eins beschreibt Massenverlust. Bei verlorenem Fett oder Saft kann sich jedoch auch die verzehrte Energie ändern."
            },
            {
              "q": "Zählen Öl und Soßen mit?",
              "a": "Ja. Zugegebene oder verworfene Zutaten verändern Energie. Die Formel erhält ursprüngliche Energie, ohne diese Änderungen automatisch zu erfassen."
            },
            {
              "q": "Was, wenn ich länger koche als gewöhnlich?",
              "a": "Die Ausbeute erneut messen. Zeit allein bestimmt den Faktor nicht: Wasser kann aufgenommen werden oder verdampfen."
            }
          ],
          "disclaimer": "Massenausbeute und Energieerhaltung sind getrennte Annahmen. Das Ergebnis misst keine gegarte Zusammensetzung und legt keine Ernährung fest."
        },
        "help": {
          "factor": "Gargewicht ÷ ursprüngliches Trocken- oder Rohgewicht. Eigene Charge messen; der Faktor bestimmt keinen Kalorienverlust.",
          "kcalPer100Raw": "kcal je 100 g Ausgangsprodukt; 0 erlaubt. Energieerhaltung wird angenommen, ohne zugesetztes Öl oder verworfenes Fett."
        },
        "sources": [
          "https://www.ars.usda.gov/ARSUserFiles/80400525/Articles/NDBC38_Beef_CookingYield.pdf"
        ],
        "normal": {
          "inputs": {
            "mode": "rawToCooked",
            "raw": 200,
            "cooked": 500,
            "factor": 2.5,
            "kcalPer100Raw": 350
          },
          "expected": {
            "kind": "number",
            "value": 500
          },
          "rows": [
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 700
              }
            },
            {
              "index": 4,
              "expectation": {
                "kind": "number",
                "value": 140
              }
            }
          ],
          "inactive": [
            "cooked"
          ],
          "rowCount": 5,
          "primaryUnit": "g",
          "independentLiteral": "500 г"
        },
        "boundary": {
          "inputs": {
            "mode": "cookedToRaw",
            "raw": 0,
            "cooked": 130,
            "factor": 0.65,
            "kcalPer100Raw": 120
          },
          "expected": {
            "kind": "number",
            "value": 200
          },
          "rows": [
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 240
              }
            },
            {
              "index": 4,
              "expectation": {
                "kind": "number",
                "value": 184.62
              }
            }
          ],
          "inactive": [
            "raw"
          ],
          "rowCount": 5,
          "primaryUnit": "g",
          "independentLiteral": "200 г"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 500
        },
        "blankField": "raw",
        "domainField": "raw",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "es",
        "path": "/es/hogar/peso-crudo-a-cocinado/",
        "h1": "Calculadora de peso crudo a cocinado",
        "body": {
          "longDescription": "Convierte entre peso original crudo o seco y peso cocinado con un factor de rendimiento introducido. Los cereales pueden ganar agua y la carne perder masa; el factor no tiene que superar uno. La información energética debe corresponder al mismo estado original del alimento. El envase no describe siempre el producto seco. El cálculo energético supone además que toda la energía original permanece en la tanda consumida. Añadir aceite o desechar grasa queda fuera de esa suposición.",
          "howToUse": [
            "Elige si conoces el peso original o el cocinado.",
            "Pesa una misma tanda en ambos estados para obtener su factor.",
            "Comprueba el estado al que corresponde la información nutricional.",
            "Cuenta aparte energía añadida o descartada: el rendimiento de masa no la determina."
          ],
          "howItWorks": "Factor = peso cocinado ÷ original. Cocinado = original × factor; original = cocinado ÷ factor. Energía = gramos originales × kcal originales/100 g ÷ 100; kcal cocinadas/100 g = kcal originales/100 g ÷ factor. Peso y factor positivos; se admite energía cero. El segundo peso calculado se ignora como entrada.",
          "example": "Arroz original 200 g, factor 2,5 y 350 kcal/100 g dan 500 g cocinados, 700 kcal totales y 140 kcal/100 g. Otro alimento ilustrativo: 130 g cocinados con factor 0,65 equivalen a 200 g originales; con 120 kcal/100 g originales dan 240 kcal y unas 184,62 kcal/100 g cocinadas.",
          "faq": [
            {
              "q": "¿Por qué las calorías cocinadas son menores que las del paquete?",
              "a": "Si solo se añade agua y se conserva energía, esta se distribuye en más masa y bajan las kcal/100 g. Es una condición del modelo, no una regla para toda cocción."
            },
            {
              "q": "¿Qué factor de absorción debo usar?",
              "a": "Divide el peso cocinado comestible por el original de la misma tanda. Alimento, agua y preparación cambian el rendimiento; no se ofrece un factor universal."
            },
            {
              "q": "¿Vale para la carne?",
              "a": "Sí para convertir peso: un factor menor que uno representa pérdida de masa. Si se descartan grasa o jugos, también puede cambiar la energía consumida."
            },
            {
              "q": "¿Cuentan el aceite y las salsas?",
              "a": "Sí. Los ingredientes añadidos o descartados modifican energía. Esta fórmula conserva la original sin determinar automáticamente esos cambios."
            },
            {
              "q": "¿Y si lo cocino más tiempo de lo habitual?",
              "a": "Mide de nuevo el rendimiento. El tiempo por sí solo no fija el factor: el agua puede absorberse o evaporarse."
            }
          ],
          "disclaimer": "Rendimiento de masa y conservación de energía son suposiciones distintas. El resultado no mide la composición cocinada ni prescribe una dieta."
        },
        "help": {
          "factor": "Peso cocinado ÷ peso original seco o crudo. Mide tu tanda; el factor no determina pérdidas de energía.",
          "kcalPer100Raw": "Kcal por 100 g de producto original; admite 0. Energía conservada por supuesto, sin aceite añadido ni grasa descartada."
        },
        "sources": [
          "https://www.ars.usda.gov/ARSUserFiles/80400525/Articles/NDBC38_Beef_CookingYield.pdf"
        ],
        "normal": {
          "inputs": {
            "mode": "rawToCooked",
            "raw": 200,
            "cooked": 500,
            "factor": 2.5,
            "kcalPer100Raw": 350
          },
          "expected": {
            "kind": "number",
            "value": 500
          },
          "rows": [
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 700
              }
            },
            {
              "index": 4,
              "expectation": {
                "kind": "number",
                "value": 140
              }
            }
          ],
          "inactive": [
            "cooked"
          ],
          "rowCount": 5,
          "primaryUnit": "g",
          "independentLiteral": "500 г"
        },
        "boundary": {
          "inputs": {
            "mode": "cookedToRaw",
            "raw": 0,
            "cooked": 130,
            "factor": 0.65,
            "kcalPer100Raw": 120
          },
          "expected": {
            "kind": "number",
            "value": 200
          },
          "rows": [
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 240
              }
            },
            {
              "index": 4,
              "expectation": {
                "kind": "number",
                "value": 184.62
              }
            }
          ],
          "inactive": [
            "raw"
          ],
          "rowCount": 5,
          "primaryUnit": "g",
          "independentLiteral": "200 г"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 500
        },
        "blankField": "raw",
        "domainField": "raw",
        "domainInvalid": -1,
        "countFields": []
      }
    ]
  },
  {
    "id": "pet-age",
    "category": "household",
    "defaults": {
      "species": "cat",
      "years": 7
    },
    "fieldNames": [
      "species",
      "years"
    ],
    "defaultInactive": [],
    "pages": [
      {
        "locale": "ru",
        "path": "/ru/household/pet-age/",
        "h1": "Калькулятор возраста питомца",
        "body": {
          "longDescription": "Показывает условный «человеческий» возраст кошки или собаки по кусочной шкале вместо одного множителя семь. В выбранной шкале первый год соответствует 15, второй добавляет 9, а после двух лет прибавка равна 4 для кошки и небольшой собаки либо 7 для крупной. Эти числа сохранены как иллюстрация разных этапов шкалы, а не как измерение биологического возраста. Порода, индивидуальное здоровье и продолжительность жизни из двух полей не определяются. Для ветеринарной оценки важнее собственный возраст и жизненный этап животного.",
          "howToUse": [
            "Выберите одну из трёх представленных групп.",
            "Введите собственный возраст животного в годах; дробная часть допустима и после двух лет.",
            "Читайте результат как иллюстрацию шкалы, а не диагноз или медицинскую стадию.",
            "Сведения о породе, состоянии и уходе обсуждайте отдельно от этого пересчёта."
          ],
          "howItWorks": "Для возраста y ≤ 1: 15y; для 1 < y ≤ 2: 15 + 9(y − 1); после двух лет: 24 + k(y − 2), где k = 4 для кошки/небольшой собаки и 7 для крупной. Положительные дробные годы поддерживаются на всех участках. Значения при переходах непрерывны: 1 год даёт 15, 2 года — 24. Шкала не предсказывает срок жизни.",
          "example": "Кошка 7 лет даёт 44 по выбранной шкале: 15 + 9 + 5 × 4. Крупная собака того же возраста даёт 59. На границах: 0,5 года → 7,5; 1,5 → 19,5; кошка 2,5 года → 26.",
          "faq": [
            {
              "q": "Почему нельзя просто умножать возраст на семь?",
              "a": "Один множитель не отражает разных жизненных этапов животных. Здесь выбранная кусочная шкала меняет наклон после первого и второго года; это не доказательство точного человеческого эквивалента."
            },
            {
              "q": "Почему крупные собаки стареют быстрее?",
              "a": "Размер и порода связаны с различиями жизненных этапов, но коэффициенты 4 и 7 здесь лишь выбранные веса шкалы. Они не измеряют индивидуальную скорость старения."
            },
            {
              "q": "Куда отнести собаку среднего размера?",
              "a": "Отдельной средней группы в этом инструменте нет. Можно сравнить две собачьи шкалы, но ни одна автоматически не становится точной для конкретной породы."
            },
            {
              "q": "Насколько точен такой пересчёт?",
              "a": "Число точно следует заданной формуле, но её биологическая точность не установлена. Возраст в этой шкале нельзя использовать для назначения ухода, обследований или лечения."
            }
          ],
          "disclaimer": "Условная шкала не является ветеринарной оценкой возраста, здоровья или оставшейся продолжительности жизни."
        },
        "help": {
          "years": "Положительный возраст; дробные годы поддерживаются во всех участках условной шкалы. Результат не определяет здоровье или срок жизни."
        },
        "sources": [
          "https://www.aaha.org/resources/life-stage-canine-2019/canine-life-stage-definitions/"
        ],
        "normal": {
          "inputs": {
            "species": "cat",
            "years": 7
          },
          "expected": {
            "kind": "number",
            "value": 44
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 7
              }
            }
          ],
          "inactive": [],
          "rowCount": 2,
          "primaryUnit": "",
          "independentLiteral": "44"
        },
        "boundary": {
          "inputs": {
            "species": "cat",
            "years": 2.5
          },
          "expected": {
            "kind": "number",
            "value": 26
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 2.5
              }
            }
          ],
          "inactive": [],
          "rowCount": 2,
          "primaryUnit": "",
          "independentLiteral": "26"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 44
        },
        "blankField": "years",
        "domainField": "years",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "en",
        "path": "/en/household/pet-age-calculator/",
        "h1": "Pet age calculator",
        "body": {
          "longDescription": "Shows an illustrative “human” age for a cat or dog using a piecewise scale rather than a single multiplier of seven. The selected scale assigns 15 to the first year, another 9 to the second, then 4 per year for cats and small dogs or 7 for large dogs. These retained numbers illustrate a changing scale; they do not measure biological age. Two inputs cannot establish breed effects, individual health or life expectancy. An animal’s own age and life stage are more relevant to veterinary assessment.",
          "howToUse": [
            "Choose one of the three available groups.",
            "Enter the animal’s own age in years; fractions also work after age two.",
            "Read the result as a scale illustration, not a diagnosis or medical stage.",
            "Assess breed, condition and care separately from this conversion."
          ],
          "howItWorks": "For age y ≤ 1: 15y; for 1 < y ≤ 2: 15 + 9(y − 1); after two years: 24 + k(y − 2), with k = 4 for cats/small dogs and 7 for large dogs. Positive fractional years work in every segment. Transitions are continuous: one year gives 15 and two gives 24. This scale does not predict lifespan.",
          "example": "A cat aged 7 gives 44 on the selected scale: 15 + 9 + 5 × 4. A large dog at the same age gives 59. Segment examples: 0.5 years → 7.5; 1.5 → 19.5; a cat aged 2.5 → 26.",
          "faq": [
            {
              "q": "Why is multiplying by seven wrong?",
              "a": "A single multiplier does not capture distinct animal life stages. This selected scale changes slope after years one and two, without establishing an exact human-age equivalent."
            },
            {
              "q": "Why do large dogs age faster?",
              "a": "Size and breed are associated with life-stage differences, but 4 and 7 are only the chosen scale weights here. They do not measure an individual rate of ageing."
            },
            {
              "q": "Where do medium dogs fit?",
              "a": "There is no separate medium group. You can compare the two dog scales, but neither automatically becomes accurate for a particular breed."
            },
            {
              "q": "How exact is this conversion?",
              "a": "The arithmetic follows the stated formula; its biological accuracy is not established. This number cannot determine care, examinations or treatment."
            }
          ],
          "disclaimer": "This illustrative scale is not a veterinary assessment of age, health or remaining life expectancy."
        },
        "help": {
          "years": "Positive age; fractional years work in every segment of the illustrative scale. The result determines neither health nor lifespan."
        },
        "sources": [
          "https://www.aaha.org/resources/life-stage-canine-2019/canine-life-stage-definitions/"
        ],
        "normal": {
          "inputs": {
            "species": "cat",
            "years": 7
          },
          "expected": {
            "kind": "number",
            "value": 44
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 7
              }
            }
          ],
          "inactive": [],
          "rowCount": 2,
          "primaryUnit": "",
          "independentLiteral": "44"
        },
        "boundary": {
          "inputs": {
            "species": "cat",
            "years": 2.5
          },
          "expected": {
            "kind": "number",
            "value": 26
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 2.5
              }
            }
          ],
          "inactive": [],
          "rowCount": 2,
          "primaryUnit": "",
          "independentLiteral": "26"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 44
        },
        "blankField": "years",
        "domainField": "years",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "uk",
        "path": "/uk/pobut/vik-tvaryny/",
        "h1": "Калькулятор віку тварини",
        "body": {
          "longDescription": "Показує умовний «людський» вік кота чи собаки за кусочною шкалою замість одного множника сім. Обрана шкала задає 15 за перший рік, ще 9 за другий, а після двох років додає 4 для кота й невеликого собаки або 7 для великого. Ці збережені числа ілюструють різні ділянки шкали, а не вимірюють біологічний вік. Два поля не визначають вплив породи, індивідуальне здоров’я чи тривалість життя. Для ветеринарної оцінки важливі власний вік та життєвий етап тварини.",
          "howToUse": [
            "Оберіть одну з трьох наявних груп.",
            "Введіть власний вік тварини в роках; дроби допустимі й після двох років.",
            "Сприймайте число як ілюстрацію шкали, не діагноз чи медичну стадію.",
            "Породу, стан і догляд оцінюйте окремо від цього переведення."
          ],
          "howItWorks": "Для віку y ≤ 1: 15y; для 1 < y ≤ 2: 15 + 9(y − 1); після двох років: 24 + k(y − 2), де k = 4 для котів/невеликих собак і 7 для великих. Додатні дробові роки підтримуються на всіх ділянках. Переходи неперервні: 1 рік дає 15, 2 роки — 24. Шкала не прогнозує тривалість життя.",
          "example": "Кіт 7 років дає 44 за обраною шкалою: 15 + 9 + 5 × 4. Великий собака того самого віку дає 59. На ділянках: 0,5 року → 7,5; 1,5 → 19,5; кіт 2,5 року → 26.",
          "faq": [
            {
              "q": "Чому не множити на сім?",
              "a": "Один множник не описує різних життєвих етапів тварини. Обрана шкала змінює нахил після першого й другого року, але не доводить точного людського еквівалента."
            },
            {
              "q": "Чи однаково старіють великі й малі собаки?",
              "a": "Розмір і порода пов’язані з відмінностями життєвих етапів. Коефіцієнти 4 та 7 тут є обраними вагами шкали, не вимірюванням індивідуального старіння."
            },
            {
              "q": "Коли тварину вважають літньою?",
              "a": "Життєвий етап залежить від виду, породи, розміру й стану тварини. AAHA рекомендує оцінювати ці особливості, а не призначати статус за людським еквівалентом цього калькулятора."
            },
            {
              "q": "Наскільки точне таке переведення?",
              "a": "Арифметика відповідає формулі, але її біологічну точність не встановлено. Число не визначає графік оглядів, догляд чи лікування."
            }
          ],
          "disclaimer": "Умовна шкала не є ветеринарною оцінкою віку, здоров’я або залишкової тривалості життя."
        },
        "help": {
          "years": "Додатний вік; дробові роки підтримуються на всіх ділянках умовної шкали. Результат не визначає здоров’я чи тривалість життя."
        },
        "sources": [
          "https://www.aaha.org/resources/life-stage-canine-2019/canine-life-stage-definitions/"
        ],
        "normal": {
          "inputs": {
            "species": "cat",
            "years": 7
          },
          "expected": {
            "kind": "number",
            "value": 44
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 7
              }
            }
          ],
          "inactive": [],
          "rowCount": 2,
          "primaryUnit": "",
          "independentLiteral": "44"
        },
        "boundary": {
          "inputs": {
            "species": "cat",
            "years": 2.5
          },
          "expected": {
            "kind": "number",
            "value": 26
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 2.5
              }
            }
          ],
          "inactive": [],
          "rowCount": 2,
          "primaryUnit": "",
          "independentLiteral": "26"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 44
        },
        "blankField": "years",
        "domainField": "years",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "de",
        "path": "/de/haushalt/haustier-alter-rechner/",
        "h1": "Rechner für das Alter eines Haustiers",
        "body": {
          "longDescription": "Zeigt ein anschauliches „Menschenalter“ für Katze oder Hund anhand einer stückweisen Skala statt eines einzelnen Faktors sieben. Die gewählte Skala setzt 15 für das erste Jahr, weitere 9 für das zweite und danach 4 pro Jahr für Katzen und kleine Hunde oder 7 für große Hunde. Diese erhaltenen Zahlen illustrieren wechselnde Skalenabschnitte, messen aber kein biologisches Alter. Zwei Eingaben bestimmen weder Rasseeinflüsse noch Gesundheit oder Lebenserwartung. Für tierärztliche Beurteilung sind eigenes Alter und Lebensphase des Tieres relevanter.",
          "howToUse": [
            "Eine der drei verfügbaren Gruppen wählen.",
            "Eigenes Tieralter in Jahren eingeben; Bruchteile sind auch nach zwei Jahren möglich.",
            "Ergebnis als Skalenillustration lesen, nicht als Diagnose oder medizinische Phase.",
            "Rasse, Zustand und Pflege getrennt von dieser Umrechnung beurteilen."
          ],
          "howItWorks": "Bei Alter y ≤ 1: 15y; bei 1 < y ≤ 2: 15 + 9(y − 1); danach: 24 + k(y − 2), mit k = 4 für Katzen/kleine Hunde und 7 für große. Positive Bruchteile eines Jahres funktionieren in jedem Abschnitt. Übergänge sind stetig: ein Jahr ergibt 15, zwei ergeben 24. Die Skala sagt keine Lebensdauer voraus.",
          "example": "Eine Katze mit 7 Jahren ergibt 44 auf der gewählten Skala: 15 + 9 + 5 × 4. Ein großer Hund mit gleichem Alter ergibt 59. Beispiele: 0,5 Jahre → 7,5; 1,5 → 19,5; Katze mit 2,5 → 26.",
          "faq": [
            {
              "q": "Warum ist das Multiplizieren mit sieben falsch?",
              "a": "Ein einzelner Faktor bildet unterschiedliche tierische Lebensphasen nicht ab. Die gewählte Skala ändert nach Jahr eins und zwei ihre Steigung, ohne ein exaktes Menschenäquivalent nachzuweisen."
            },
            {
              "q": "Warum altern große Hunde schneller?",
              "a": "Größe und Rasse hängen mit Lebensphasenunterschieden zusammen. Die Werte 4 und 7 sind hier jedoch gewählte Skalenfaktoren, keine Messung individuellen Alterns."
            },
            {
              "q": "Wohin gehören mittelgroße Hunde?",
              "a": "Eine mittlere Gruppe ist nicht vorhanden. Beide Hundeskalen lassen sich vergleichen; keine wird dadurch automatisch für eine bestimmte Rasse genau."
            },
            {
              "q": "Wie genau ist diese Umrechnung?",
              "a": "Die Rechnung folgt der Formel; biologische Genauigkeit ist nicht belegt. Das Ergebnis bestimmt weder Pflege noch Untersuchungen oder Behandlung."
            }
          ],
          "disclaimer": "Diese anschauliche Skala ist keine tierärztliche Beurteilung von Alter, Gesundheit oder verbleibender Lebenserwartung."
        },
        "help": {
          "years": "Positives Alter; gebrochene Jahre gelten in allen Abschnitten der illustrativen Skala. Keine Bestimmung von Gesundheit oder Lebensdauer."
        },
        "sources": [
          "https://www.aaha.org/resources/life-stage-canine-2019/canine-life-stage-definitions/"
        ],
        "normal": {
          "inputs": {
            "species": "cat",
            "years": 7
          },
          "expected": {
            "kind": "number",
            "value": 44
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 7
              }
            }
          ],
          "inactive": [],
          "rowCount": 2,
          "primaryUnit": "",
          "independentLiteral": "44"
        },
        "boundary": {
          "inputs": {
            "species": "cat",
            "years": 2.5
          },
          "expected": {
            "kind": "number",
            "value": 26
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 2.5
              }
            }
          ],
          "inactive": [],
          "rowCount": 2,
          "primaryUnit": "",
          "independentLiteral": "26"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 44
        },
        "blankField": "years",
        "domainField": "years",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "es",
        "path": "/es/hogar/edad-de-mascotas/",
        "h1": "Calculadora de edad de mascotas",
        "body": {
          "longDescription": "Muestra una edad “humana” ilustrativa de gato o perro con una escala por tramos, en lugar de multiplicar siempre por siete. La escala elegida asigna 15 al primer año, otros 9 al segundo y después 4 por año para gatos y perros pequeños o 7 para perros grandes. Son cifras conservadas para ilustrar tramos distintos, no una medición de edad biológica. Dos entradas no determinan efectos de raza, salud individual ni esperanza de vida. La edad propia y etapa vital del animal son más pertinentes para la evaluación veterinaria.",
          "howToUse": [
            "Elige uno de los tres grupos disponibles.",
            "Introduce la edad propia en años; también se admiten fracciones después de los dos años.",
            "Lee el número como ilustración de una escala, no diagnóstico ni etapa médica.",
            "Evalúa raza, estado y cuidados aparte de la conversión."
          ],
          "howItWorks": "Para edad y ≤ 1: 15y; para 1 < y ≤ 2: 15 + 9(y − 1); después: 24 + k(y − 2), con k = 4 para gatos/perros pequeños y 7 para grandes. Admite años fraccionarios positivos en todos los tramos. Los cambios son continuos: un año da 15 y dos dan 24. La escala no predice duración de vida.",
          "example": "Un gato de 7 años da 44 en esta escala: 15 + 9 + 5 × 4. Un perro grande de la misma edad da 59. Ejemplos por tramos: 0,5 años → 7,5; 1,5 → 19,5; gato de 2,5 → 26.",
          "faq": [
            {
              "q": "¿Por qué es erróneo multiplicar por siete?",
              "a": "Un único multiplicador no refleja las distintas etapas vitales. Esta escala cambia de pendiente tras el primer y segundo año, sin establecer un equivalente humano exacto."
            },
            {
              "q": "¿Por qué envejecen más deprisa los perros grandes?",
              "a": "Tamaño y raza se relacionan con diferencias vitales, pero 4 y 7 son solo los pesos elegidos de esta escala. No miden la velocidad individual de envejecimiento."
            },
            {
              "q": "¿Dónde encajan los perros medianos?",
              "a": "No hay un grupo mediano separado. Puedes comparar ambas escalas caninas, pero ninguna se vuelve automáticamente precisa para una raza concreta."
            },
            {
              "q": "¿Qué exactitud tiene esta conversión?",
              "a": "La aritmética sigue la fórmula; su exactitud biológica no está establecida. El número no determina cuidados, exploraciones ni tratamientos."
            }
          ],
          "disclaimer": "La escala ilustrativa no es una evaluación veterinaria de edad, salud o esperanza de vida restante."
        },
        "help": {
          "years": "Edad positiva; años fraccionarios en todos los tramos de la escala ilustrativa. No determina salud ni esperanza de vida."
        },
        "sources": [
          "https://www.aaha.org/resources/life-stage-canine-2019/canine-life-stage-definitions/"
        ],
        "normal": {
          "inputs": {
            "species": "cat",
            "years": 7
          },
          "expected": {
            "kind": "number",
            "value": 44
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 7
              }
            }
          ],
          "inactive": [],
          "rowCount": 2,
          "primaryUnit": "",
          "independentLiteral": "44"
        },
        "boundary": {
          "inputs": {
            "species": "cat",
            "years": 2.5
          },
          "expected": {
            "kind": "number",
            "value": 26
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 2.5
              }
            }
          ],
          "inactive": [],
          "rowCount": 2,
          "primaryUnit": "",
          "independentLiteral": "26"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 44
        },
        "blankField": "years",
        "domainField": "years",
        "domainInvalid": -1,
        "countFields": []
      }
    ]
  },
  {
    "id": "pet-food",
    "category": "household",
    "defaults": {
      "weight": 22,
      "factor": 1.6,
      "kcalPer100": 350
    },
    "fieldNames": [
      "weight",
      "factor",
      "kcalPer100"
    ],
    "defaultInactive": [],
    "pages": [
      {
        "locale": "ru",
        "path": "/ru/household/pet-food/",
        "h1": "Калькулятор корма для питомца",
        "body": {
          "longDescription": "Переводит выбранную оценку потребности в энергии в граммы корма по его калорийности. Отправная формула обмена покоя RER = 70 × масса^0,75 используется в рекомендациях AAHA для предварительных расчётов, но не измеряет расход энергии конкретного животного. Множитель вводится пользователем: здесь нет полей вида, возраста, стерилизации или состояния тела, которые автоматически выбирали бы рацион. Калорийность должна относиться к тому корму, который реально даётся. Угощения и другие источники энергии требуют отдельного учёта.",
          "howToUse": [
            "Сверьте массу и цель расчёта с ветеринарной оценкой состояния животного.",
            "Введите согласованный множитель; он не определяется автоматически из активности.",
            "Используйте ккал/100 г конкретного корма и учитывайте другие источники энергии.",
            "Оценивайте динамику массы и состояния тела; рассчитанные граммы могут требовать индивидуальной корректировки."
          ],
          "howItWorks": "RER, ккал/сутки = 70 × кг^0,75. Оценочная энергия = RER × заданный множитель; корм, г/сутки = энергия ÷ ккал на 100 г × 100. Масса, множитель и калорийность должны быть положительными. Это исходная оценка для наблюдения и корректировки, а не доказанная индивидуальная норма.",
          "example": "При введённых 22 кг, множителе 1,6 и 350 ккал/100 г расчёт даёт около 325 г в сутки. Это пример выбранных входов, не назначение собаке такого веса. Удвоение введённой калорийности до 700 ккал/100 г в той же модели уменьшает граммы вдвое, оставляя оценку энергии прежней.",
          "faq": [
            {
              "q": "Почему масса берётся в степени 0,75, а не как есть?",
              "a": "Степень 0,75 входит в приближённую формулу RER. Она не доказывает, что любые два животных получают корм строго в таком отношении: вид, жизненный этап и состояние тоже важны."
            },
            {
              "q": "Какой множитель выбрать?",
              "a": "Множитель зависит не только от активности. AAHA приводит ориентиры, например 1,2–1,4 для стерилизованных кошек и 1,4–1,6 для стерилизованных собак, с индивидуальным наблюдением и корректировкой. Они не выбираются здесь автоматически."
            },
            {
              "q": "Считать по текущей массе или по целевой?",
              "a": "Это зависит от цели. Для снижения веса AAHA рассматривает идеальную массу; выбор массы и режима должен учитывать состояние животного. Поле само не определяет целевой вес."
            },
            {
              "q": "Влияет ли влажный корм на расчёт?",
              "a": "Формула остаётся той же, но нужна калорийность конкретного влажного корма. При меньших ккал/100 г масса для той же энергии больше; универсальная плотность для влажного корма не предполагается."
            }
          ],
          "disclaimer": "Предварительная оценка не заменяет индивидуальную ветеринарную рекомендацию, особенно при росте, болезни, беременности или снижении веса."
        },
        "help": {
          "weight": "Основание массы выбирайте с ветеринаром; при снижении веса может использоваться оценённая идеальная масса.",
          "factor": "Положительный выбранный множитель, не автоматическая рекомендация по виду или активности; наблюдайте массу и упитанность."
        },
        "sources": [
          "https://www.aaha.org/resources/2021-aaha-nutrition-and-weight-management-guidelines/weight-reduction-in-the-obese-pet/"
        ],
        "normal": {
          "inputs": {
            "weight": 22,
            "factor": 1.6,
            "kcalPer100": 350
          },
          "expected": {
            "kind": "number",
            "value": 325.06
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 1137.72
              }
            },
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 711.07
              }
            }
          ],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "г",
          "independentLiteral": "325,06 г"
        },
        "boundary": {
          "inputs": {
            "weight": 4,
            "factor": 1.2,
            "kcalPer100": 400
          },
          "expected": {
            "kind": "number",
            "value": 59.397
          },
          "rows": [],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "г",
          "independentLiteral": "59,397 г"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 325.06
        },
        "blankField": "weight",
        "domainField": "weight",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "en",
        "path": "/en/household/pet-food-calculator/",
        "h1": "Pet food calculator",
        "body": {
          "longDescription": "Converts a selected energy estimate into food grams using its energy density. The starting resting energy requirement, RER = 70 × weight^0.75, appears in AAHA guidance for initial calculations; it does not measure an individual animal’s expenditure. The multiplier is entered by the user. Species, age, neutering and body condition are not separate inputs that choose a ration automatically. Energy density must describe the food actually offered. Treats and other energy sources need separate accounting.",
          "howToUse": [
            "Check weight and the calculation’s aim against an assessment of body condition.",
            "Enter an appropriate agreed multiplier; activity does not select it automatically.",
            "Use the particular food’s kcal/100 g and account for other energy sources.",
            "Monitor weight and body condition; the calculated grams may need individual adjustment."
          ],
          "howItWorks": "RER kcal/day = 70 × kg^0.75. Estimated energy = RER × entered multiplier; food g/day = energy ÷ kcal per 100 g × 100. Weight, multiplier and energy density must be positive. This is a starting estimate to monitor and adjust, not an established individual requirement.",
          "example": "Entered weight 22 kg, multiplier 1.6 and 350 kcal/100 g give about 325 g/day. These are illustrative inputs, not a ration prescribed for every 22 kg dog. Doubling entered density to 700 kcal/100 g halves grams in the same model while estimated energy stays unchanged.",
          "faq": [
            {
              "q": "Why the power of 0.75 rather than plain weight?",
              "a": "The power 0.75 belongs to an approximate RER equation. It does not prove that any two animals need food in that exact ratio: species, life stage and condition also matter."
            },
            {
              "q": "Which multiplier should I use?",
              "a": "The factor depends on more than activity. AAHA gives starting ranges such as 1.2–1.4 for neutered cats and 1.4–1.6 for neutered dogs, with individual monitoring and adjustment. This tool does not choose them automatically."
            },
            {
              "q": "Should I feed the target weight or the current one?",
              "a": "It depends on the aim. AAHA discusses ideal weight for weight reduction; selecting weight and feeding strategy requires the animal’s condition. This field does not determine a target weight."
            },
            {
              "q": "Does wet food change the calculation?",
              "a": "The equation is unchanged, but use the particular wet food’s energy density. Lower kcal/100 g requires more mass for the same estimated energy; no universal wet-food density is assumed."
            }
          ],
          "disclaimer": "An initial estimate cannot replace individual veterinary feeding advice, especially during growth, illness, pregnancy or weight reduction."
        },
        "help": {
          "weight": "Choose the weight basis with your veterinarian; estimated ideal weight may be used for weight reduction.",
          "factor": "Positive selected factor, not an automatic species/activity recommendation; monitor weight and body condition."
        },
        "sources": [
          "https://www.aaha.org/resources/2021-aaha-nutrition-and-weight-management-guidelines/weight-reduction-in-the-obese-pet/"
        ],
        "normal": {
          "inputs": {
            "weight": 22,
            "factor": 1.6,
            "kcalPer100": 350
          },
          "expected": {
            "kind": "number",
            "value": 325.06
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 1137.72
              }
            },
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 711.07
              }
            }
          ],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "g",
          "independentLiteral": "325,06 г"
        },
        "boundary": {
          "inputs": {
            "weight": 4,
            "factor": 1.2,
            "kcalPer100": 400
          },
          "expected": {
            "kind": "number",
            "value": 59.397
          },
          "rows": [],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "g",
          "independentLiteral": "59,397 г"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 325.06
        },
        "blankField": "weight",
        "domainField": "weight",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "uk",
        "path": "/uk/pobut/korm-dlya-tvaryny/",
        "h1": "Калькулятор корму для тварини",
        "body": {
          "longDescription": "Переводить обрану оцінку потреби в енергії у грами корму за його калорійністю. Початкова формула обміну спокою RER = 70 × маса^0,75 наведена в рекомендаціях AAHA для попередніх розрахунків, але не вимірює витрат конкретної тварини. Множник задає користувач: немає окремих полів виду, віку, стерилізації чи стану тіла, які автоматично обирали б раціон. Калорійність має описувати фактичний корм. Ласощі та інші джерела енергії враховуються окремо.",
          "howToUse": [
            "Зіставте масу й мету розрахунку з оцінкою стану тіла.",
            "Введіть узгоджений множник: активність не визначає його автоматично.",
            "Використовуйте ккал/100 г конкретного корму та враховуйте інші джерела енергії.",
            "Спостерігайте за масою й станом тіла та індивідуально коригуйте оцінку."
          ],
          "howItWorks": "RER, ккал/добу = 70 × кг^0,75. Оціночна енергія = RER × заданий множник; корм, г/добу = енергія ÷ ккал на 100 г × 100. Маса, множник і калорійність додатні. Це початкова оцінка для спостереження й корекції, не встановлена індивідуальна норма.",
          "example": "Введені 22 кг, множник 1,6 та 350 ккал/100 г дають близько 325 г на добу. Це приклад входів, не призначення кожному собаці такої маси. Подвоєння калорійності до 700 ккал/100 г у тій самій моделі зменшує грами вдвічі за незмінної оцінки енергії.",
          "faq": [
            {
              "q": "Чому степінь 0,75, а не одиниця?",
              "a": "Степінь 0,75 належить наближеній формулі RER. Вона не доводить, що будь-які дві тварини потребують корму саме в цьому співвідношенні: вид, життєвий етап і стан також важливі."
            },
            {
              "q": "Який множник активності обрати?",
              "a": "Множник залежить не лише від активності. AAHA наводить початкові діапазони, зокрема 1,2–1,4 для стерилізованих котів та 1,4–1,6 для стерилізованих собак, із подальшим спостереженням і корекцією. Автоматичного вибору тут немає."
            },
            {
              "q": "Від якої ваги рахувати за надмірної маси?",
              "a": "AAHA розглядає ідеальну масу для зниження ваги. Вибір маси та режиму залежить від стану тварини; це поле саме не встановлює цільову вагу."
            },
            {
              "q": "Наскільки точна ця норма?",
              "a": "Формула є початковою оцінкою. Вона не має універсальної гарантованої похибки для цієї сторінки: AAHA вимагає оцінювати зміни маси й стану та коригувати індивідуально."
            }
          ],
          "disclaimer": "Попередня оцінка не замінює індивідуальної ветеринарної рекомендації, особливо під час росту, хвороби, вагітності чи зниження ваги."
        },
        "help": {
          "weight": "Основу маси обирайте з ветеринаром; для схуднення може використовуватися оцінена ідеальна маса.",
          "factor": "Додатний обраний множник, не автоматична порада за видом чи активністю; стежте за масою й кондицією тіла."
        },
        "sources": [
          "https://www.aaha.org/resources/2021-aaha-nutrition-and-weight-management-guidelines/weight-reduction-in-the-obese-pet/"
        ],
        "normal": {
          "inputs": {
            "weight": 22,
            "factor": 1.6,
            "kcalPer100": 350
          },
          "expected": {
            "kind": "number",
            "value": 325.06
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 1137.72
              }
            },
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 711.07
              }
            }
          ],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "г",
          "independentLiteral": "325,06 г"
        },
        "boundary": {
          "inputs": {
            "weight": 4,
            "factor": 1.2,
            "kcalPer100": 400
          },
          "expected": {
            "kind": "number",
            "value": 59.397
          },
          "rows": [],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "г",
          "independentLiteral": "59,397 г"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 325.06
        },
        "blankField": "weight",
        "domainField": "weight",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "de",
        "path": "/de/haushalt/futtermenge-rechner/",
        "h1": "Rechner für die Futtermenge",
        "body": {
          "longDescription": "Rechnet eine gewählte Energieschätzung über den Energiegehalt des Futters in Gramm um. Der Ausgangswert RER = 70 × Gewicht^0,75 steht in AAHA-Empfehlungen für erste Berechnungen, misst aber keinen individuellen Energieverbrauch. Den Faktor gibt der Nutzer vor. Art, Alter, Kastration und Körperzustand werden nicht als eigene Eingaben automatisch zur Rationswahl verwendet. Der Energiegehalt muss das tatsächlich angebotene Futter beschreiben. Leckerchen und andere Energiequellen sind gesondert zu berücksichtigen.",
          "howToUse": [
            "Gewicht und Berechnungsziel mit einer Körperzustandsbeurteilung abgleichen.",
            "Einen passenden abgestimmten Faktor eingeben; Aktivität wählt ihn nicht automatisch.",
            "kcal/100 g des konkreten Futters verwenden und weitere Energiequellen berücksichtigen.",
            "Gewicht und Körperzustand beobachten und die Schätzung individuell anpassen."
          ],
          "howItWorks": "RER in kcal/Tag = 70 × kg^0,75. Geschätzte Energie = RER × eingegebener Faktor; Futter g/Tag = Energie ÷ kcal je 100 g × 100. Gewicht, Faktor und Energiegehalt sind positiv. Das Ergebnis ist eine Ausgangsschätzung zur Beobachtung und Anpassung, kein festgestellter individueller Bedarf.",
          "example": "22 kg, Faktor 1,6 und 350 kcal/100 g ergeben rund 325 g/Tag. Das sind Beispielwerte, keine Ration für jeden Hund mit 22 kg. Verdoppeln auf 700 kcal/100 g halbiert im selben Modell die Grammmenge bei unveränderter Energieschätzung.",
          "faq": [
            {
              "q": "Warum hoch 0,75 und nicht schlicht das Gewicht?",
              "a": "Die Potenz 0,75 gehört zur näherungsweisen RER-Formel. Sie beweist nicht, dass zwei beliebige Tiere Futter exakt in diesem Verhältnis benötigen; Art, Lebensphase und Zustand sind ebenfalls wichtig."
            },
            {
              "q": "Welchen Faktor soll ich nehmen?",
              "a": "Der Faktor hängt nicht nur von Bewegung ab. AAHA nennt Ausgangsbereiche wie 1,2–1,4 für kastrierte Katzen und 1,4–1,6 für kastrierte Hunde, mit individueller Beobachtung und Anpassung. Hier erfolgt keine automatische Auswahl."
            },
            {
              "q": "Soll ich nach dem Zielgewicht oder dem derzeitigen füttern?",
              "a": "Das hängt vom Ziel ab. Für Gewichtsreduktion behandelt AAHA Idealgewicht; Gewichtsbasis und Fütterungsstrategie müssen den Zustand berücksichtigen. Das Feld bestimmt kein Zielgewicht."
            },
            {
              "q": "Ändert Nassfutter die Rechnung?",
              "a": "Die Formel bleibt gleich, doch der konkrete Nassfutter-Energiegehalt ist nötig. Weniger kcal/100 g ergeben mehr Masse für dieselbe Energie; ein allgemeiner Nassfutterwert wird nicht angenommen."
            }
          ],
          "disclaimer": "Eine Ausgangsschätzung ersetzt keine individuelle tierärztliche Fütterungsempfehlung, besonders bei Wachstum, Erkrankung, Trächtigkeit oder Gewichtsreduktion."
        },
        "help": {
          "weight": "Gewichtsgrundlage mit Tierarzt wählen; zur Gewichtsreduktion kann geschätztes Idealgewicht dienen.",
          "factor": "Positiver gewählter Faktor, keine automatische Art-/Aktivitätsempfehlung; Gewicht und Körperzustand beobachten."
        },
        "sources": [
          "https://www.aaha.org/resources/2021-aaha-nutrition-and-weight-management-guidelines/weight-reduction-in-the-obese-pet/"
        ],
        "normal": {
          "inputs": {
            "weight": 22,
            "factor": 1.6,
            "kcalPer100": 350
          },
          "expected": {
            "kind": "number",
            "value": 325.06
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 1137.72
              }
            },
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 711.07
              }
            }
          ],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "g",
          "independentLiteral": "325,06 г"
        },
        "boundary": {
          "inputs": {
            "weight": 4,
            "factor": 1.2,
            "kcalPer100": 400
          },
          "expected": {
            "kind": "number",
            "value": 59.397
          },
          "rows": [],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "g",
          "independentLiteral": "59,397 г"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 325.06
        },
        "blankField": "weight",
        "domainField": "weight",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "es",
        "path": "/es/hogar/racion-de-pienso/",
        "h1": "Calculadora de ración de pienso",
        "body": {
          "longDescription": "Convierte una estimación energética elegida en gramos de alimento según su densidad energética. La fórmula inicial RER = 70 × peso^0,75 aparece en recomendaciones de AAHA para cálculos preliminares, pero no mide el gasto individual. El usuario introduce el multiplicador. Especie, edad, esterilización y condición corporal no son entradas separadas que elijan automáticamente la ración. La densidad debe corresponder al alimento ofrecido. Premios y otras fuentes de energía necesitan contabilización aparte.",
          "howToUse": [
            "Contrasta peso y objetivo con una evaluación de condición corporal.",
            "Introduce un multiplicador apropiado acordado; la actividad no lo selecciona automáticamente.",
            "Usa kcal/100 g del alimento concreto y cuenta otras fuentes de energía.",
            "Observa peso y condición corporal y ajusta individualmente la estimación."
          ],
          "howItWorks": "RER kcal/día = 70 × kg^0,75. Energía estimada = RER × multiplicador; alimento g/día = energía ÷ kcal por 100 g × 100. Peso, multiplicador y densidad positivos. Es una estimación inicial para observar y ajustar, no una necesidad individual establecida.",
          "example": "22 kg, multiplicador 1,6 y 350 kcal/100 g dan unos 325 g/día. Son entradas ilustrativas, no una ración prescrita para todo perro de 22 kg. Duplicar a 700 kcal/100 g reduce a la mitad los gramos del mismo modelo, manteniendo la energía estimada.",
          "faq": [
            {
              "q": "¿Por qué la potencia 0,75 y no el peso a secas?",
              "a": "La potencia 0,75 forma parte de una ecuación aproximada de RER. No demuestra que dos animales cualesquiera necesiten comida en esa proporción exacta: especie, etapa vital y estado también importan."
            },
            {
              "q": "¿Qué multiplicador debo usar?",
              "a": "No depende solo de actividad. AAHA da rangos iniciales como 1,2–1,4 para gatos esterilizados y 1,4–1,6 para perros esterilizados, con observación y ajuste individuales. Esta página no los elige automáticamente."
            },
            {
              "q": "¿Debo alimentar según el peso objetivo o el actual?",
              "a": "Depende del objetivo. AAHA considera peso ideal para reducir peso; la base y estrategia requieren evaluar el estado del animal. Este campo no determina un peso objetivo."
            },
            {
              "q": "¿El alimento húmedo cambia el cálculo?",
              "a": "La fórmula no cambia, pero usa la densidad del alimento húmedo concreto. Menos kcal/100 g implican mayor masa para la misma energía; no se supone una densidad húmeda universal."
            }
          ],
          "disclaimer": "La estimación inicial no sustituye una recomendación veterinaria individual, especialmente durante crecimiento, enfermedad, gestación o reducción de peso."
        },
        "help": {
          "weight": "Elige la base de peso con el veterinario; puede usarse peso ideal estimado para reducción de peso.",
          "factor": "Factor positivo elegido, no recomendación automática por especie o actividad; controla peso y condición corporal."
        },
        "sources": [
          "https://www.aaha.org/resources/2021-aaha-nutrition-and-weight-management-guidelines/weight-reduction-in-the-obese-pet/"
        ],
        "normal": {
          "inputs": {
            "weight": 22,
            "factor": 1.6,
            "kcalPer100": 350
          },
          "expected": {
            "kind": "number",
            "value": 325.06
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 1137.72
              }
            },
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 711.07
              }
            }
          ],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "g",
          "independentLiteral": "325,06 г"
        },
        "boundary": {
          "inputs": {
            "weight": 4,
            "factor": 1.2,
            "kcalPer100": 400
          },
          "expected": {
            "kind": "number",
            "value": 59.397
          },
          "rows": [],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "g",
          "independentLiteral": "59,397 г"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 325.06
        },
        "blankField": "weight",
        "domainField": "weight",
        "domainInvalid": -1,
        "countFields": []
      }
    ]
  },
  {
    "id": "recipe-cost",
    "category": "household",
    "defaults": {
      "ingredients": "flour 0.5 45\nbutter 0.2 890\nsugar 0.3 68",
      "servings": 4
    },
    "fieldNames": [
      "ingredients",
      "servings"
    ],
    "defaultInactive": [],
    "pages": [
      {
        "locale": "ru",
        "path": "/ru/household/recipe-cost/",
        "h1": "Калькулятор стоимости рецепта",
        "body": {
          "longDescription": "Складывает стоимость блюда из списка ингредиентов и делит её на число порций. Каждая строка — это название, количество и цена за единицу, и последние два числа читаются как количество и цена, а всё перед ними считается названием: так работает «мука в/с 0,5 45», где в названии есть пробел. Строка без цены отклоняется, а не достраивается нулём — подставленная цена молча занизила бы себестоимость, и ошибка выглядела бы правдоподобно. Таблица показывает вклад каждого ингредиента без предположения, какой из них дороже. Все цены должны быть в одной выбранной валюте: её обозначение не конвертирует введённые суммы.",
          "howToUse": [
            "Впишите ингредиенты по одному в строке.",
            "В каждой строке последние два числа — количество и цена за единицу.",
            "Название может состоять из нескольких слов: «мука в/с 0,5 45».",
            "Укажите, на сколько порций рассчитан рецепт."
          ],
          "howItWorks": "Последние два числа строки — количество и цена за его единицу; предшествующий текст — название. Стоимость строки = количество × цена; итог = сумма; стоимость порции = итог ÷ положительное число равных порционных эквивалентов. Дробные эквиваленты допустимы. Нулевые количество и цена допустимы, отрицательные — нет. Расчёт сохраняет неокруглённые значения, денежный вывод округляет до двух знаков.",
          "example": "Мука 0,5 кг по 45, масло 0,2 кг по 890 и сахар 0,3 кг по 68 дают 22,50 + 178 + 20,40 = 220,90 в одной валюте. Четыре порции: 55,225, на экране 55,23. При двух с половиной равных порциях — 88,36. Строка с количеством 0 даёт стоимость 0.",
          "faq": [
            {
              "q": "В каких единицах вводить количество?",
              "a": "Количество и цена должны иметь одну основу: при цене за кг вводите кг, при цене за штуку — штуки. Разные строки могут использовать разные единицы, потому что суммируются деньги, а не количества."
            },
            {
              "q": "Что делать, если в названии есть пробелы?",
              "a": "Ничего особенного: последние два числа строки читаются как количество и цена, а всё перед ними считается названием. «Мука высшего сорта 0,5 45» разберётся верно."
            },
            {
              "q": "Почему строка без цены не считается?",
              "a": "Потому что подставленная цена занизила бы себестоимость молча. Лучше остановить расчёт, чем показать правдоподобное, но неверное число."
            },
            {
              "q": "Учитываются ли газ, электричество и труд?",
              "a": "Только если вы явно добавите такие расходы подходящими строками. По умолчанию считается стоимость введённых ингредиентов; это не полная себестоимость производства или прибыль."
            },
            {
              "q": "Как учесть специи, которых уходит на копейки?",
              "a": "Внесите измеренную или оценённую долю и её цену в согласованных единицах. Пропуск допустим лишь как осознанная граница вашей оценки, а не потому, что небольшие суммы всегда несущественны."
            }
          ],
          "disclaimer": "Суммируются выбранные затраты в одной валюте, без обмена валют, налогов или автоматического учёта труда и отходов."
        },
        "help": {
          "ingredients": "Название, количество, цена за ту же единицу. Одна валюта во всех строках; символ результата не выполняет обмен.",
          "servings": "Положительное число равных порционных эквивалентов; дробное значение поддерживается."
        },
        "sources": [],
        "normal": {
          "inputs": {
            "ingredients": "flour 0.5 45\nbutter 0.2 890\nsugar 0.3 68",
            "servings": 4
          },
          "expected": {
            "kind": "number",
            "value": 55.23
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 220.9
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "₽",
          "independentLiteral": "55,23 ₽"
        },
        "boundary": {
          "inputs": {
            "ingredients": "salt 0 5",
            "servings": 0.5
          },
          "expected": {
            "kind": "number",
            "value": 0
          },
          "rows": [
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 0.5
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "₽",
          "independentLiteral": "0 ₽"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 55.23
        },
        "blankField": "servings",
        "domainField": "servings",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "en",
        "path": "/en/household/recipe-cost-calculator/",
        "h1": "Recipe cost calculator",
        "body": {
          "longDescription": "Builds the cost of a dish from a list of ingredients and divides it by the number of servings. Each line is a name, a quantity and a unit price, and the last two numbers are read as quantity and price while everything before them counts as the name — so «plain flour 0.5 45» parses correctly even with spaces in the name. A line without a price is rejected rather than filled with a zero: a substituted price would quietly understate the cost and the mistake would look plausible. The table shows each contribution without assuming which one dominates. All prices must use one selected currency; its display symbol does not convert entered amounts.",
          "howToUse": [
            "Enter ingredients one per line.",
            "On each line the last two numbers are the quantity and the unit price.",
            "The name may be several words: «plain flour 0.5 45».",
            "Enter how many servings the recipe makes."
          ],
          "howItWorks": "The final two numbers are quantity and price per its unit; preceding text is the name. Row cost = quantity × price; total = sum; serving cost = total ÷ positive equal serving equivalents. Fractional equivalents are allowed. Quantity and price can be zero, not negative. Calculations retain unrounded values; money is displayed to two decimal places.",
          "example": "Flour 0.5 kg at 45, butter 0.2 kg at 890 and sugar 0.3 kg at 68 give 22.50 + 178 + 20.40 = 220.90 in one currency. Four servings give 55.225, displayed as 55.23. Two and a half equal servings give 88.36. A zero-quantity row costs zero.",
          "faq": [
            {
              "q": "Which units should the quantity use?",
              "a": "Match quantity to the unit price: kg for a price per kg, items for a price per item. Different rows can use different units because money, rather than quantities, is summed."
            },
            {
              "q": "What if the name contains spaces?",
              "a": "Nothing special: the last two numbers are read as quantity and price, and everything before them is the name. «Plain white flour 0.5 45» parses correctly."
            },
            {
              "q": "Why is a line without a price rejected?",
              "a": "Because a substituted price would understate the cost silently. Stopping the calculation is better than showing a plausible but wrong number."
            },
            {
              "q": "Are gas, electricity and labour included?",
              "a": "Only when explicitly entered as suitable additional cost rows. The default result covers entered ingredients, not complete production cost or profit."
            },
            {
              "q": "How do I account for spices used in tiny amounts?",
              "a": "Enter a measured or estimated fraction and a price using matching units. Omission is a deliberate scope choice, not a rule that small amounts never matter."
            }
          ],
          "disclaimer": "Selected costs are summed in one currency, without exchange conversion, taxes or automatic labour and waste accounting."
        },
        "help": {
          "ingredients": "Name, quantity, price per matching unit. One currency throughout; the result symbol performs no exchange conversion.",
          "servings": "Positive number of equal serving equivalents; fractional values are supported."
        },
        "sources": [],
        "normal": {
          "inputs": {
            "ingredients": "flour 0.5 45\nbutter 0.2 890\nsugar 0.3 68",
            "servings": 4
          },
          "expected": {
            "kind": "number",
            "value": 55.23
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 220.9
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "$",
          "independentLiteral": "55,23 ₽"
        },
        "boundary": {
          "inputs": {
            "ingredients": "salt 0 5",
            "servings": 0.5
          },
          "expected": {
            "kind": "number",
            "value": 0
          },
          "rows": [
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 0.5
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "$",
          "independentLiteral": "0 ₽"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 55.23
        },
        "blankField": "servings",
        "domainField": "servings",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "uk",
        "path": "/uk/pobut/vartist-retsepta/",
        "h1": "Калькулятор вартості рецепта",
        "body": {
          "longDescription": "Собівартість страви рахується як сума вартості інгредієнтів, поділена на кількість порцій. Головна тонкість — брати кількість і ціну в однакових одиницях: сто грамів масла за ціною за кілограм дають зовсім не ту суму, що за ціною за пачку. Таблиця показує внесок кожного інгредієнта. Усі ціни мають бути в одній обраній валюті: позначення на екрані не конвертує введених сум.",
          "howToUse": [
            "Введіть кожен інгредієнт: кількість і ціну за ту саму одиницю.",
            "Введіть кількість порцій.",
            "Прочитайте вартість страви й однієї порції."
          ],
          "howItWorks": "Останні два числа рядка — кількість і ціна за її одиницю; попередній текст — назва. Вартість рядка = кількість × ціна; підсумок = сума; вартість порції = підсумок ÷ додатне число рівних порційних еквівалентів. Дробові еквіваленти допустимі. Кількість і ціна можуть бути нульовими, не від’ємними. Неокруглені значення використовуються до грошового виводу з двома знаками.",
          "example": "Борошно 0,5 кг по 45, масло 0,2 кг по 890 та цукор 0,3 кг по 68 дають 22,50 + 178 + 20,40 = 220,90 в одній валюті. Чотири порції: 55,225, на екрані 55,23. Дві з половиною рівні порції — 88,36. Рядок із кількістю 0 має вартість 0.",
          "faq": [
            {
              "q": "Що робити з дрібними інгредієнтами?",
              "a": "Внесіть виміряну або оцінену частку з ціною у відповідній одиниці. Пропуск є свідомою межею оцінки, а не правилом, що дрібні витрати завжди неважливі."
            },
            {
              "q": "Чи враховувати відходи?",
              "a": "Якщо куплена й використана їстівна маса різні, визначте вихід за власним вимірюванням. Наприклад, куплений 1 кг за 100 із виміряним виходом 0,6 кг має ціну 166,666… за їстівний кг. Це приклад, не універсальний вихід певного продукту."
            },
            {
              "q": "Чи входять сюди газ і електрика?",
              "a": "Лише якщо явно додати відповідні рядки витрат. Типовий підсумок описує введені інгредієнти, а не повну виробничу собівартість чи прибуток."
            },
            {
              "q": "Навіщо рахувати собівартість удома?",
              "a": "Порівнюйте однакові складові витрат та розміри порцій. Таблиця допомагає побачити внески й зміни цін, але сама не доводить економії проти ресторану або доставки."
            }
          ],
          "disclaimer": "Обрані витрати сумуються в одній валюті без конвертації, податків чи автоматичного обліку праці та відходів."
        },
        "help": {
          "ingredients": "Назва, кількість, ціна за ту саму одиницю. Одна валюта в усіх рядках; символ результату не виконує обміну.",
          "servings": "Додатна кількість рівних порційних еквівалентів; дробові значення підтримуються."
        },
        "sources": [],
        "normal": {
          "inputs": {
            "ingredients": "flour 0.5 45\nbutter 0.2 890\nsugar 0.3 68",
            "servings": 4
          },
          "expected": {
            "kind": "number",
            "value": 55.23
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 220.9
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "₴",
          "independentLiteral": "55,23 ₽"
        },
        "boundary": {
          "inputs": {
            "ingredients": "salt 0 5",
            "servings": 0.5
          },
          "expected": {
            "kind": "number",
            "value": 0
          },
          "rows": [
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 0.5
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "₴",
          "independentLiteral": "0 ₽"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 55.23
        },
        "blankField": "servings",
        "domainField": "servings",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "de",
        "path": "/de/haushalt/rezeptkosten-rechner/",
        "h1": "Rechner für die Kosten eines Rezepts",
        "body": {
          "longDescription": "Baut die Kosten eines Gerichts aus einer Liste von Zutaten auf und teilt sie durch die Zahl der Portionen. Jede Zeile besteht aus einem Namen, einer Menge und einem Einheitspreis, und die letzten beiden Zahlen werden als Menge und Preis gelesen, während alles davor als Name zählt — „Weizenmehl Type 405 0.5 1.20“ wird also auch mit Leerzeichen im Namen richtig verstanden. Eine Zeile ohne Preis wird abgewiesen statt mit einer Null gefüllt: ein eingesetzter Preis setzte die Kosten still zu niedrig an, und der Fehler sähe plausibel aus. Die Tabelle zeigt jeden Beitrag ohne Annahme einer dominierenden Zutat. Alle Preise müssen dieselbe gewählte Währung verwenden; das angezeigte Zeichen rechnet Beträge nicht um.",
          "howToUse": [
            "Trage die Zutaten je Zeile ein.",
            "In jeder Zeile sind die letzten beiden Zahlen die Menge und der Einheitspreis.",
            "Der Name darf mehrere Wörter haben: „Weizenmehl Type 405 0.5 1.20“.",
            "Trage ein, wie viele Portionen das Rezept ergibt."
          ],
          "howItWorks": "Die letzten zwei Zahlen sind Menge und Preis je Mengeneinheit; davor steht der Name. Zeilenkosten = Menge × Preis; Gesamt = Summe; Portionskosten = Gesamt ÷ positive gleiche Portionsäquivalente. Bruchteile sind erlaubt. Menge und Preis dürfen null, aber nicht negativ sein. Gerechnet wird ungerundet, Geld mit zwei Nachkommastellen angezeigt.",
          "example": "Für dieses Preisbeispiel: Mehl 0,5 kg zu 1, Butter 0,2 kg zu 17,8 und Zucker 0,3 kg zu 1,2 ergeben 0,50 + 3,56 + 0,36 = 4,42 in einer Währung. Vier Portionen ergeben 1,105, angezeigt als 1,11. Zwei Portionen ergeben 2,21. Das sind eingegebene Beispielpreise, keine Umrechnung der Standardwerte.",
          "faq": [
            {
              "q": "In welchen Einheiten steht die Menge?",
              "a": "Menge und Preisbasis abgleichen: kg bei Preis je kg, Stück bei Stückpreis. Verschiedene Zeilen dürfen verschiedene Einheiten haben, da Geld statt Mengen summiert wird."
            },
            {
              "q": "Was, wenn der Name Leerzeichen enthält?",
              "a": "Nichts Besonderes: die letzten beiden Zahlen werden als Menge und Preis gelesen, und alles davor ist der Name. „Weizenmehl Type 405 0.5 1.20“ wird richtig verstanden."
            },
            {
              "q": "Warum wird eine Zeile ohne Preis abgewiesen?",
              "a": "Weil ein eingesetzter Preis die Kosten still zu niedrig ansetzte. Die Rechnung anzuhalten ist besser, als eine plausible und falsche Zahl zu zeigen."
            },
            {
              "q": "Sind Gas, Strom und Arbeit enthalten?",
              "a": "Nur bei ausdrücklich eingegebenen passenden Kostenzeilen. Der Standardwert umfasst Zutaten, nicht vollständige Herstellungskosten oder Gewinn."
            },
            {
              "q": "Wie berücksichtige ich Gewürze in winzigen Mengen?",
              "a": "Einen gemessenen oder geschätzten Anteil mit passender Preiseinheit eintragen. Weglassen ist eine bewusste Begrenzung der Schätzung, keine Regel über stets unwichtige Kleinstkosten."
            }
          ],
          "disclaimer": "Gewählte Kosten werden in einer Währung summiert, ohne Währungsumrechnung, Steuern oder automatische Erfassung von Arbeit und Abfällen."
        },
        "help": {
          "ingredients": "Name, Menge, Preis je passender Einheit. Eine Währung für alle Zeilen; das Ergebnissymbol rechnet keine Währung um.",
          "servings": "Positive Zahl gleicher Portionsäquivalente; gebrochene Werte werden unterstützt."
        },
        "sources": [],
        "normal": {
          "inputs": {
            "ingredients": "flour 0.5 45\nbutter 0.2 890\nsugar 0.3 68",
            "servings": 4
          },
          "expected": {
            "kind": "number",
            "value": 55.23
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 220.9
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "€",
          "independentLiteral": "55,23 ₽"
        },
        "boundary": {
          "inputs": {
            "ingredients": "salt 0 5",
            "servings": 0.5
          },
          "expected": {
            "kind": "number",
            "value": 0
          },
          "rows": [
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 0.5
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "€",
          "independentLiteral": "0 ₽"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 55.23
        },
        "blankField": "servings",
        "domainField": "servings",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "es",
        "path": "/es/hogar/coste-de-una-receta/",
        "h1": "Calculadora de coste de una receta",
        "body": {
          "longDescription": "Construye el coste de un plato a partir de una lista de ingredientes y lo divide entre el número de raciones. Cada línea es un nombre, una cantidad y un precio unitario, y los dos últimos números se leen como cantidad y precio mientras que todo lo anterior cuenta como nombre, así que «harina de trigo 0,5 0,45» se interpreta bien aunque el nombre lleve espacios. Una línea sin precio se rechaza en vez de rellenarse con un cero: un precio sustituido subestimaría el coste en silencio y el error parecería verosímil. La tabla muestra cada aportación sin suponer un ingrediente dominante. Todos los precios deben usar una moneda elegida; el símbolo mostrado no convierte los importes.",
          "howToUse": [
            "Introduce los ingredientes, uno por línea.",
            "En cada línea los dos últimos números son la cantidad y el precio unitario.",
            "El nombre puede llevar varias palabras: «harina de trigo 0,5 0,45».",
            "Introduce cuántas raciones salen de la receta."
          ],
          "howItWorks": "Los dos últimos números son cantidad y precio por su unidad; el texto previo es el nombre. Coste de línea = cantidad × precio; total = suma; coste de ración = total ÷ equivalentes iguales positivos. Admite fracciones. Cantidad y precio pueden ser cero, no negativos. Se calcula sin redondear y se muestra dinero con dos decimales.",
          "example": "Para este ejemplo de precios: harina 0,5 kg a 4,5, mantequilla 0,2 kg a 89 y azúcar 0,3 kg a 6,8 dan 2,25 + 17,80 + 2,04 = 22,09 en una moneda. Cuatro raciones dan 5,5225, mostradas como 5,52. Dos raciones dan 11,045, mostradas como 11,05. Son precios introducidos de ejemplo, no conversión de los valores iniciales.",
          "faq": [
            {
              "q": "¿En qué unidades va la cantidad?",
              "a": "Haz coincidir cantidad y base del precio: kg para precio por kg, unidades para precio por unidad. Cada línea puede usar una unidad distinta porque se suma dinero, no cantidades."
            },
            {
              "q": "¿Y si el nombre lleva espacios?",
              "a": "Nada especial: los dos últimos números se leen como cantidad y precio, y todo lo anterior es el nombre. «Harina de trigo blanca 0,5 0,45» se interpreta bien."
            },
            {
              "q": "¿Por qué se rechaza una línea sin precio?",
              "a": "Porque un precio sustituido subestimaría el coste en silencio. Detener el cálculo es mejor que mostrar una cifra verosímil y equivocada."
            },
            {
              "q": "¿Se incluyen el gas, la electricidad y la mano de obra?",
              "a": "Solo si se introducen expresamente como filas de coste apropiadas. El resultado inicial incluye ingredientes, no coste completo de producción ni beneficio."
            },
            {
              "q": "¿Cómo cuento las especias que se usan en cantidades mínimas?",
              "a": "Introduce una fracción medida o estimada y un precio en unidades coherentes. Omitirla es una decisión sobre el alcance, no una regla de que los importes pequeños nunca importen."
            }
          ],
          "disclaimer": "Suma costes elegidos en una moneda, sin conversión, impuestos ni cómputo automático de trabajo o desperdicios."
        },
        "help": {
          "ingredients": "Nombre, cantidad, precio por unidad coincidente. Una moneda en todas las líneas; el símbolo no convierte divisas.",
          "servings": "Cantidad positiva de equivalentes de raciones iguales; admite fracciones."
        },
        "sources": [],
        "normal": {
          "inputs": {
            "ingredients": "flour 0.5 45\nbutter 0.2 890\nsugar 0.3 68",
            "servings": 4
          },
          "expected": {
            "kind": "number",
            "value": 55.23
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 220.9
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "€",
          "independentLiteral": "55,23 ₽"
        },
        "boundary": {
          "inputs": {
            "ingredients": "salt 0 5",
            "servings": 0.5
          },
          "expected": {
            "kind": "number",
            "value": 0
          },
          "rows": [
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 0.5
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "€",
          "independentLiteral": "0 ₽"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 55.23
        },
        "blankField": "servings",
        "domainField": "servings",
        "domainInvalid": -1,
        "countFields": []
      }
    ]
  },
  {
    "id": "recipe-scale",
    "category": "household",
    "defaults": {
      "ingredients": "flour 500\nwater 320\nsalt 10\nyeast 7",
      "fromServings": 4,
      "toServings": 6
    },
    "fieldNames": [
      "ingredients",
      "fromServings",
      "toServings"
    ],
    "defaultInactive": [],
    "pages": [
      {
        "locale": "ru",
        "path": "/ru/household/recipe-scale/",
        "h1": "Калькулятор масштабирования рецепта",
        "body": {
          "longDescription": "Берёт коэффициент из отношения нужных порций к исходным и умножает на него каждое количество. Строка рецепта — это название и одно число в конце, поэтому «мука в/с 500» разбирается верно даже с пробелами в названии. Коэффициент помогает оценить изменение замеса, но вместимость формы нужно проверить отдельно. Пересчёт линейно меняет все введённые количества; он не моделирует вкус, брожение, геометрию формы или время выпечки.",
          "howToUse": [
            "В конце каждой строки укажите одно количество; единицу сохраните в названии или исходном рецепте.",
            "Введите положительные исходные и нужные порционные эквиваленты.",
            "Проверьте отдельные пересчитанные строки; суммой пользуйтесь лишь при одинаковой единице.",
            "Время приготовления, форму и технологию проверяйте отдельно от линейного пересчёта."
          ],
          "howItWorks": "Коэффициент = нужные порционные эквиваленты ÷ исходные; новое количество строки = исходное × коэффициент. Оба числа порций положительные и могут быть дробными. Последнее число строки — количество, всё перед ним — название; количества неотрицательны. Суммы строк имеют физический смысл только при одной общей единице. В смешанном списке читайте пересчёт каждой строки, не сумму как массу или объём.",
          "example": "Исходные 837 г на 4 порции при цели 6 дают коэффициент 1,5 и 1255,5 г. Цель 2,5 равных порционных эквивалента даёт коэффициент 0,625 и 523,125 г. Эти суммы относятся к списку, где все количества в граммах; ингредиент с количеством 0 остаётся 0.",
          "faq": [
            {
              "q": "Важно ли, в чём измерены ингредиенты?",
              "a": "Для каждой строки можно сохранить свою единицу: граммы, миллилитры или штуки. Но их арифметическая сумма не является общей массой или объёмом; она полезна только при одинаковых единицах."
            },
            {
              "q": "Можно ли уменьшить рецепт?",
              "a": "Да. Если нужных порций меньше исходных, коэффициент получится меньше единицы, и все количества уменьшатся пропорционально."
            },
            {
              "q": "Почему дрожжи и соль пересчитываются так же, как мука?",
              "a": "Формула сохраняет введённые пропорции и не выбирает индивидуальных поправок. Иные дозировки должны следовать вашему рецепту или инструкции продукта; универсального правила уменьшать соль или дрожжи здесь нет."
            },
            {
              "q": "Что делать с яйцами, если вышло 1,5 штуки?",
              "a": "Если рецепт допускает деление яйца, взвесьте перемешанное яйцо и отмерьте долю массы. Округление количества — отдельное изменение рецепта, которое модель не оценивает."
            },
            {
              "q": "Меняется ли время выпечки вместе с количеством?",
              "a": "Нет: пересчитываются количества, не теплопередача. Толщина, форма, материал, температура и состав могут менять приготовление; пропорциональное умножение времени не следует из этого коэффициента."
            }
          ],
          "disclaimer": "Линейный пересчёт сохраняет введённые пропорции, но не проверяет технологию приготовления или пригодность изменённого рецепта."
        },
        "help": {
          "ingredients": "Название и количество. По строкам единицы сохраняются; итоговая сумма применима лишь для одной единицы во всех строках.",
          "fromServings": "Положительные порционные эквиваленты, в том числе дробные; не количество гостей.",
          "toServings": "Положительные порционные эквиваленты, в том числе дробные; не количество гостей."
        },
        "sources": [],
        "normal": {
          "inputs": {
            "ingredients": "flour 500\nwater 320\nsalt 10\nyeast 7",
            "fromServings": 4,
            "toServings": 6
          },
          "expected": {
            "kind": "number",
            "value": 1.5
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 837
              }
            },
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 1255.5
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "",
          "independentLiteral": "1,5"
        },
        "boundary": {
          "inputs": {
            "ingredients": "flour 500\nwater 320\nsalt 10\nyeast 7",
            "fromServings": 4,
            "toServings": 2.5
          },
          "expected": {
            "kind": "number",
            "value": 0.625
          },
          "rows": [
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 523.13
              }
            },
            {
              "index": 4,
              "expectation": {
                "kind": "number",
                "value": 2.5
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "",
          "independentLiteral": "0,625"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 1.5
        },
        "blankField": "fromServings",
        "domainField": "fromServings",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "en",
        "path": "/en/household/recipe-scaling-calculator/",
        "h1": "Recipe scaling calculator",
        "body": {
          "longDescription": "Takes the ratio of the servings you need to the servings the recipe makes and multiplies every quantity by it. A recipe line is a name followed by a single number, so «plain white flour 500» parses correctly even with spaces in the name. The factor helps assess batch size; pan capacity still needs a separate check. Every entered quantity scales linearly, without modelling taste, fermentation, pan geometry or baking time.",
          "howToUse": [
            "End each line with one quantity and retain its unit in the name or original recipe.",
            "Enter positive original and wanted serving equivalents.",
            "Check individual rows; use the aggregate only when units agree.",
            "Check cooking time, pan and technique separately from linear scaling."
          ],
          "howItWorks": "Factor = wanted serving equivalents ÷ original equivalents; new row amount = original × factor. Both serving values are positive and may be fractional. The last number in a line is quantity; preceding text is the name. Quantities are nonnegative. Row sums have physical meaning only with a shared unit. With mixed units, use individual rows rather than treating their sum as mass or volume.",
          "example": "837 g for 4 servings scaled to 6 gives factor 1.5 and 1255.5 g. Target 2.5 equal serving equivalents gives factor 0.625 and 523.125 g. Those sums use a list entirely in grams; a zero-quantity ingredient remains zero.",
          "faq": [
            {
              "q": "Does it matter what units the ingredients are in?",
              "a": "Each row can retain its own unit, such as grams, mL or items. Their numerical sum is not total mass or volume; it is meaningful only when all units agree."
            },
            {
              "q": "Can a recipe be scaled down?",
              "a": "Yes. If you need fewer servings than the recipe makes, the factor comes out below one and every quantity shrinks proportionally."
            },
            {
              "q": "Why are yeast and salt scaled the same as flour?",
              "a": "The equation preserves entered proportions and makes no individual adjustments. Alternative dosing should come from your recipe or product instructions; it does not establish a general rule to reduce salt or yeast."
            },
            {
              "q": "What do I do if it asks for 1.5 eggs?",
              "a": "If the recipe allows dividing an egg, weigh a mixed egg and use the required mass fraction. Rounding an item count changes the recipe independently and is not assessed by this model."
            },
            {
              "q": "Does baking time scale with the quantity?",
              "a": "No. Quantities, rather than heat transfer, are scaled. Thickness, pan, material, temperature and composition can change cooking; proportional time multiplication does not follow from the factor."
            }
          ],
          "disclaimer": "Linear scaling preserves entered proportions but does not validate preparation technique or the altered recipe."
        },
        "help": {
          "ingredients": "Name and quantity. Per-row units stay unchanged; totals are meaningful only with one unit throughout.",
          "fromServings": "Positive serving equivalents, including fractions; not a guest count.",
          "toServings": "Positive serving equivalents, including fractions; not a guest count."
        },
        "sources": [],
        "normal": {
          "inputs": {
            "ingredients": "flour 500\nwater 320\nsalt 10\nyeast 7",
            "fromServings": 4,
            "toServings": 6
          },
          "expected": {
            "kind": "number",
            "value": 1.5
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 837
              }
            },
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 1255.5
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "",
          "independentLiteral": "1,5"
        },
        "boundary": {
          "inputs": {
            "ingredients": "flour 500\nwater 320\nsalt 10\nyeast 7",
            "fromServings": 4,
            "toServings": 2.5
          },
          "expected": {
            "kind": "number",
            "value": 0.625
          },
          "rows": [
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 523.13
              }
            },
            {
              "index": 4,
              "expectation": {
                "kind": "number",
                "value": 2.5
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "",
          "independentLiteral": "0,625"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 1.5
        },
        "blankField": "fromServings",
        "domainField": "fromServings",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "uk",
        "path": "/uk/pobut/masshtabuvannya-retsepta/",
        "h1": "Калькулятор масштабування рецепта",
        "body": {
          "longDescription": "Масштабування рецепта множить усі кількості на співвідношення потрібних і вихідних порцій. Кожний рядок — назва й одне число в кінці; пробіли в назві допустимі. Коефіцієнт показує зміну замісу, але місткість форми треба перевірити окремо. Усі введені кількості змінюються лінійно; смак, бродіння, геометрія форми та час випікання не моделюються.",
          "howToUse": [
            "Завершуйте рядок одним числом кількості та зберігайте одиницю в назві чи рецепті.",
            "Введіть додатні вихідні й потрібні порційні еквіваленти.",
            "Перевірте кожен рядок; сумою користуйтеся лише за однакових одиниць.",
            "Час, форму та технологію перевіряйте окремо від лінійного масштабування."
          ],
          "howItWorks": "Коефіцієнт = потрібні порційні еквіваленти ÷ вихідні; нова кількість рядка = вихідна × коефіцієнт. Обидва числа порцій додатні й можуть бути дробовими. Останнє число рядка — кількість, попередній текст — назва; кількості невід’ємні. Сума має фізичний зміст лише за спільної одиниці. У змішаному списку використовуйте окремі рядки, не суму як масу або об’єм.",
          "example": "837 г на 4 порції за цілі 6 дають коефіцієнт 1,5 та 1255,5 г. Ціль 2,5 рівних порційних еквівалента дає 0,625 та 523,125 г. Такі суми стосуються списку повністю в грамах; нульова кількість залишається нульовою.",
          "faq": [
            {
              "q": "Чи все масштабується лінійно?",
              "a": "Калькулятор лінійно множить усі введені кількості. Це не модель смаку, бродіння чи теплопередачі; будь-які технологічні поправки потребують окремої перевірки рецепта."
            },
            {
              "q": "Що робити з яйцями?",
              "a": "Якщо рецепт дозволяє ділити яйце, зважте перемішане яйце й відміряйте потрібну частку. Округлення штук є окремою зміною рецепта, яку цей розрахунок не оцінює."
            },
            {
              "q": "Як масштабувати спеції?",
              "a": "Формула зберігає задані пропорції спецій. Індивідуальна зміна за смаком або технологією не визначається коефіцієнтом; універсально зменшувати їх не потрібно за самим лише розміром партії."
            },
            {
              "q": "Чи змінювати розмір форми?",
              "a": "Площа круглої форми пропорційна квадрату діаметра: подвійний діаметр дає чотири площі. Для незмінної товщини зіставляйте об’єм і форму, але не множте час випікання автоматично."
            }
          ],
          "disclaimer": "Лінійний перерахунок зберігає введені пропорції, але не перевіряє технологію або придатність зміненого рецепта."
        },
        "help": {
          "ingredients": "Назва й кількість. Одиниці рядків зберігаються; загальна сума має сенс лише за однієї одиниці в усіх рядках.",
          "fromServings": "Додатні порційні еквіваленти, зокрема дробові; не кількість гостей.",
          "toServings": "Додатні порційні еквіваленти, зокрема дробові; не кількість гостей."
        },
        "sources": [],
        "normal": {
          "inputs": {
            "ingredients": "flour 500\nwater 320\nsalt 10\nyeast 7",
            "fromServings": 4,
            "toServings": 6
          },
          "expected": {
            "kind": "number",
            "value": 1.5
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 837
              }
            },
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 1255.5
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "",
          "independentLiteral": "1,5"
        },
        "boundary": {
          "inputs": {
            "ingredients": "flour 500\nwater 320\nsalt 10\nyeast 7",
            "fromServings": 4,
            "toServings": 2.5
          },
          "expected": {
            "kind": "number",
            "value": 0.625
          },
          "rows": [
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 523.13
              }
            },
            {
              "index": 4,
              "expectation": {
                "kind": "number",
                "value": 2.5
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "",
          "independentLiteral": "0,625"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 1.5
        },
        "blankField": "fromServings",
        "domainField": "fromServings",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "de",
        "path": "/de/haushalt/rezept-umrechnen/",
        "h1": "Rechner zum Umrechnen eines Rezepts",
        "body": {
          "longDescription": "Nimmt das Verhältnis der benötigten Portionen zu den Portionen des Rezepts und multipliziert jede Menge damit. Eine Rezeptzeile ist ein Name gefolgt von einer einzelnen Zahl, „Weizenmehl Type 405 500“ wird also auch mit Leerzeichen im Namen richtig verstanden. Der Faktor hilft beim Einschätzen der Menge; die Formkapazität ist gesondert zu prüfen. Alle Eingabemengen ändern sich linear, ohne Geschmack, Gärung, Formgeometrie oder Backzeit zu modellieren.",
          "howToUse": [
            "Jede Zeile mit einer Menge beenden und ihre Einheit im Namen oder Rezept behalten.",
            "Positive ursprüngliche und gewünschte Portionsäquivalente eingeben.",
            "Einzelne Zeilen prüfen; Gesamtmenge nur bei gleichen Einheiten nutzen.",
            "Garzeit, Form und Technik getrennt von der linearen Umrechnung prüfen."
          ],
          "howItWorks": "Faktor = gewünschte ÷ ursprüngliche Portionsäquivalente; neue Zeilenmenge = ursprüngliche × Faktor. Beide Portionswerte sind positiv und dürfen Bruchteile sein. Letzte Zeilenzahl ist Menge, davor steht der Name; Mengen sind nichtnegativ. Summen haben nur mit gemeinsamer Einheit physikalischen Sinn. Bei gemischten Einheiten einzelne Zeilen nutzen, nicht die Summe als Masse oder Volumen.",
          "example": "837 g für 4 Portionen auf 6 skaliert ergeben Faktor 1,5 und 1255,5 g. Das Ziel 2,5 gleicher Portionsäquivalente ergibt 0,625 und 523,125 g. Diese Summen setzen vollständig in Gramm erfasste Mengen voraus; eine Nullmenge bleibt null.",
          "faq": [
            {
              "q": "Spielt es eine Rolle, in welchen Einheiten die Zutaten stehen?",
              "a": "Jede Zeile darf ihre eigene Einheit behalten, etwa Gramm, ml oder Stück. Ihre Zahlensumme ist keine Gesamtmasse oder Gesamtvolumen; sinnvoll ist sie nur bei gleicher Einheit."
            },
            {
              "q": "Lässt sich ein Rezept auch verkleinern?",
              "a": "Ja. Brauchst du weniger Portionen, als das Rezept ergibt, kommt der Faktor unter eins heraus, und jede Menge schrumpft im selben Verhältnis."
            },
            {
              "q": "Warum werden Hefe und Salz genauso mitgerechnet wie das Mehl?",
              "a": "Die Formel erhält Eingabeverhältnisse ohne individuelle Anpassung. Andere Dosierungen müssen aus Rezept oder Produktanleitung stammen; eine allgemeine Reduktionsregel für Salz oder Hefe folgt daraus nicht."
            },
            {
              "q": "Was tue ich, wenn 1,5 Eier verlangt werden?",
              "a": "Erlaubt das Rezept ein geteiltes Ei, ein vermischtes Ei wiegen und den nötigen Massenanteil verwenden. Stückzahlen zu runden verändert das Rezept gesondert; das Modell beurteilt dies nicht."
            },
            {
              "q": "Skaliert die Backzeit mit der Menge?",
              "a": "Nein. Mengen statt Wärmeübertragung werden skaliert. Dicke, Form, Material, Temperatur und Zusammensetzung können die Zubereitung ändern; Zeitmultiplikation folgt nicht aus diesem Faktor."
            }
          ],
          "disclaimer": "Die lineare Umrechnung erhält Mengenverhältnisse, prüft aber weder Zubereitungstechnik noch Eignung des geänderten Rezepts."
        },
        "help": {
          "ingredients": "Name und Menge. Zeileneinheiten bleiben; Summe ist nur bei einer gemeinsamen Einheit sinnvoll.",
          "fromServings": "Positive Portionsäquivalente, auch gebrochen; keine Gästezahl.",
          "toServings": "Positive Portionsäquivalente, auch gebrochen; keine Gästezahl."
        },
        "sources": [],
        "normal": {
          "inputs": {
            "ingredients": "flour 500\nwater 320\nsalt 10\nyeast 7",
            "fromServings": 4,
            "toServings": 6
          },
          "expected": {
            "kind": "number",
            "value": 1.5
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 837
              }
            },
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 1255.5
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "",
          "independentLiteral": "1,5"
        },
        "boundary": {
          "inputs": {
            "ingredients": "flour 500\nwater 320\nsalt 10\nyeast 7",
            "fromServings": 4,
            "toServings": 2.5
          },
          "expected": {
            "kind": "number",
            "value": 0.625
          },
          "rows": [
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 523.13
              }
            },
            {
              "index": 4,
              "expectation": {
                "kind": "number",
                "value": 2.5
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "",
          "independentLiteral": "0,625"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 1.5
        },
        "blankField": "fromServings",
        "domainField": "fromServings",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "es",
        "path": "/es/hogar/escalado-de-recetas/",
        "h1": "Calculadora de escalado de recetas",
        "body": {
          "longDescription": "Toma la razón entre las raciones que necesitas y las que da la receta y multiplica por ella todas las cantidades. Una línea de receta es un nombre seguido de un solo número, así que «harina de trigo blanca 500» se interpreta bien aunque el nombre lleve espacios. El factor ayuda a valorar la tanda; la capacidad del molde requiere comprobación aparte. Escala todas las cantidades linealmente, sin modelar sabor, fermentación, geometría del molde ni tiempo de horneado.",
          "howToUse": [
            "Termina cada línea con una cantidad y conserva la unidad en el nombre o receta original.",
            "Introduce equivalentes originales y deseados positivos.",
            "Comprueba cada fila; usa el total solo con unidades coincidentes.",
            "Revisa tiempo, molde y técnica aparte del escalado lineal."
          ],
          "howItWorks": "Factor = equivalentes deseados ÷ originales; nueva cantidad de línea = original × factor. Ambos números de raciones son positivos y admiten fracciones. El último número es cantidad y el texto previo es nombre; las cantidades no son negativas. La suma solo tiene sentido físico con una unidad común. Con unidades mezcladas, usa cada línea, no la suma como masa o volumen.",
          "example": "837 g para 4 raciones escalados a 6 dan factor 1,5 y 1255,5 g. El objetivo 2,5 equivalentes iguales da 0,625 y 523,125 g. Esas sumas corresponden a una lista completamente en gramos; una cantidad cero permanece cero.",
          "faq": [
            {
              "q": "¿Importa en qué unidades están los ingredientes?",
              "a": "Cada línea puede conservar su unidad: gramos, ml o piezas. Su suma numérica no es masa o volumen total y solo resulta significativa si las unidades coinciden."
            },
            {
              "q": "¿Se puede escalar una receta hacia abajo?",
              "a": "Sí. Si necesitas menos raciones de las que da la receta, el factor sale menor que uno y todas las cantidades menguan en proporción."
            },
            {
              "q": "¿Por qué la levadura y la sal se escalan igual que la harina?",
              "a": "La fórmula conserva proporciones sin ajustes individuales. Otras dosis deben proceder de la receta o instrucciones del producto; no establece una regla general de reducir sal o levadura."
            },
            {
              "q": "¿Qué hago si me pide 1,5 huevos?",
              "a": "Si la receta permite dividir un huevo, pesa el huevo mezclado y toma la fracción necesaria de masa. Redondear piezas es otra modificación de receta que este modelo no evalúa."
            },
            {
              "q": "¿El tiempo de horneado escala con la cantidad?",
              "a": "No. Se escalan cantidades, no transferencia de calor. Grosor, molde, material, temperatura y composición pueden cambiar la cocción; multiplicar el tiempo no se deduce del factor."
            }
          ],
          "disclaimer": "El escalado lineal conserva proporciones introducidas, pero no valida técnica de preparación ni la receta modificada."
        },
        "help": {
          "ingredients": "Nombre y cantidad. Unidades por línea se conservan; suma válida solo con una unidad común.",
          "fromServings": "Equivalentes positivos de raciones, incluidas fracciones; no número de invitados.",
          "toServings": "Equivalentes positivos de raciones, incluidas fracciones; no número de invitados."
        },
        "sources": [],
        "normal": {
          "inputs": {
            "ingredients": "flour 500\nwater 320\nsalt 10\nyeast 7",
            "fromServings": 4,
            "toServings": 6
          },
          "expected": {
            "kind": "number",
            "value": 1.5
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 837
              }
            },
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 1255.5
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "",
          "independentLiteral": "1,5"
        },
        "boundary": {
          "inputs": {
            "ingredients": "flour 500\nwater 320\nsalt 10\nyeast 7",
            "fromServings": 4,
            "toServings": 2.5
          },
          "expected": {
            "kind": "number",
            "value": 0.625
          },
          "rows": [
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 523.13
              }
            },
            {
              "index": 4,
              "expectation": {
                "kind": "number",
                "value": 2.5
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "",
          "independentLiteral": "0,625"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 1.5
        },
        "blankField": "fromServings",
        "domainField": "fromServings",
        "domainInvalid": -1,
        "countFields": []
      }
    ]
  },
  {
    "id": "roast-time",
    "category": "household",
    "defaults": {
      "weight": 5,
      "minutes_per_kg": 40,
      "base_minutes": 20,
      "rest_pct": 20
    },
    "fieldNames": [
      "weight",
      "minutes_per_kg",
      "base_minutes",
      "rest_pct"
    ],
    "defaultInactive": [],
    "pages": [
      {
        "locale": "ru",
        "path": "/ru/household/vremya-zapekaniya/",
        "h1": "Калькулятор времени запекания",
        "body": {
          "longDescription": "Помогает составить расписание по выбранному рецепту: время в духовке равно постоянной части плюс минуты на килограмм, затем отдельно добавляется отдых. База и удельное время вводятся пользователем, а не определяются по виду продукта, температуре или форме куска. Постоянная часть — параметр этого линейного правила, не доказанная физическая длительность прогрева. Раздельные строки сохраняют два момента: плановое извлечение и окончание выбранного отдыха. Безопасность и готовность по одной массе и времени не устанавливаются.",
          "howToUse": [
            "Берите минуты/кг и базу из выбранного рецепта с его условиями приготовления.",
            "Укажите массу того продукта, который описывает рецепт; начинка и форма могут менять условия.",
            "Задайте отдых отдельно: процент является вашей плановой величиной.",
            "Проверяйте готовность термометром по применимым указаниям для продукта; время не заменяет измерение."
          ],
          "howItWorks": "Готовка, мин = масса, кг × минуты/кг + база. Отдых = готовка × процент отдыха/100; общее время = готовка + отдых. Масса и минуты/кг положительны, база неотрицательна, отдых от 0 до 50% в этом инструменте. Для часов и минут общее число минут сначала округляется, затем делится; полученные 60 минут переходят в час. Температура продукта не вычисляется.",
          "example": "Для введённого примера 5 кг, 40 мин/кг, базы 20 мин и отдыха 20% плановая готовка равна 220 мин (3 ч 40 мин), отдых 44 мин, сумма 264 мин. Это расписание, не подтверждение готовности индейки. При 1 кг, 59,6 мин/кг, базе 0 и отдыхе 0% округлённый вывод — 1 ч 0 мин, а не 60 мин.",
          "faq": [
            {
              "q": "Зачем нужна постоянная часть?",
              "a": "Это введённый параметр линейного рецепта. Он не обязан физически совпадать с прогревом духовки или коркой; пригодность базы определяется рецептом и его условиями."
            },
            {
              "q": "Почему отдых показан отдельно?",
              "a": "Чтобы различать время в духовке и выбранный интервал до подачи. Процент здесь не является универсальной нормой и не заменяет необходимый отдых из конкретных указаний по безопасности."
            },
            {
              "q": "Заменяет ли расчёт термометр?",
              "a": "Нет. FoodSafety.gov для США определяет готовность по измеренной внутренней температуре; например, целые куски говядины — 63°C с отдыхом 3 минуты, птица — 74°C. Этот источник не подтверждает наши минуты/кг."
            },
            {
              "q": "Чем это отличается от расчёта разварки?",
              "a": "Коэффициент выхода связывает исходную и готовую массу. Здесь планируется время по отдельному линейному правилу; ни выход массы, ни температура готовности из него не выводятся."
            }
          ],
          "disclaimer": "Плановое время не подтверждает безопасную температуру. Условия рецепта и измерение продукта проверяются отдельно."
        },
        "help": {
          "minutes_per_kg": "Коэффициент из конкретного рецепта, а не универсальная норма готовности; проверяйте внутреннюю температуру продукта.",
          "rest_pct": "От 0 до 50% времени по модели; этот процент не задаёт обязательный отдых по правилам безопасности."
        },
        "sources": [
          "https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures"
        ],
        "normal": {
          "inputs": {
            "weight": 5,
            "minutes_per_kg": 40,
            "base_minutes": 20,
            "rest_pct": 20
          },
          "expected": {
            "kind": "duration",
            "numbers": [
              3,
              40
            ]
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 220
              }
            },
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 44
              }
            },
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 264
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "чмин",
          "independentLiteral": "3 ч 40 мин"
        },
        "boundary": {
          "inputs": {
            "weight": 1,
            "minutes_per_kg": 59.6,
            "base_minutes": 0,
            "rest_pct": 0
          },
          "expected": {
            "kind": "duration",
            "numbers": [
              1,
              0
            ]
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 59.6
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "чмин",
          "independentLiteral": "1 ч 0 мин"
        },
        "defaultExpected": {
          "kind": "duration",
          "numbers": [
            3,
            40
          ]
        },
        "blankField": "weight",
        "domainField": "weight",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "en",
        "path": "/en/household/roasting-time/",
        "h1": "Roasting time calculator",
        "body": {
          "longDescription": "Builds a schedule from a selected recipe: oven time is a fixed part plus minutes per kilogram, with resting added separately. You enter the base and rate; the tool does not derive them from food type, temperature or joint shape. The fixed part is a parameter of this linear rule, not a proven physical warm-up duration. Separate rows retain two moments: planned oven removal and the end of the selected rest. Weight and time alone cannot establish doneness or food safety.",
          "howToUse": [
            "Use a rate and base from a selected recipe with its preparation conditions.",
            "Enter the weight that recipe describes; stuffing and shape can change conditions.",
            "Set rest separately; its percentage is your scheduling parameter.",
            "Measure doneness with a thermometer using applicable product guidance; time cannot replace measurement."
          ],
          "howItWorks": "Cooking minutes = weight kg × minutes/kg + base. Rest = cooking × rest percent/100; total = cooking + rest. Weight and rate are positive, base nonnegative and rest between 0 and 50% in this tool. For hours/minutes, minutes are rounded before division so 60 carries into an hour. Product temperature is not calculated.",
          "example": "Entered example: 5 kg, 40 min/kg, base 20 min and rest 20% give 220 min cooking (3 h 40 min), 44 min rest and 264 min total. This schedules a recipe; it does not confirm a turkey is done. At 1 kg, 59.6 min/kg, zero base and zero rest, rounded output is 1 h 0 min rather than 60 min.",
          "faq": [
            {
              "q": "Why is there a fixed part?",
              "a": "It is an entered linear recipe parameter. It need not physically equal oven warm-up or crust formation; its suitability depends on the recipe and conditions."
            },
            {
              "q": "Why is resting shown separately?",
              "a": "It distinguishes oven time from the selected interval before serving. The percentage is not a universal rest requirement and does not replace a particular safety instruction."
            },
            {
              "q": "Does this replace a thermometer?",
              "a": "No. US FoodSafety.gov guidance uses measured internal temperature: for example, whole beef cuts 63°C with a 3-minute rest, poultry 74°C. That source does not validate this tool’s minutes/kg."
            },
            {
              "q": "How is this different from a cooking-loss calculator?",
              "a": "A yield factor relates original to cooked weight. This schedules time with a different linear rule; neither weight yield nor doneness temperature follows from it."
            }
          ],
          "disclaimer": "Planned time does not establish safe internal temperature. Check recipe conditions and measure the product separately."
        },
        "help": {
          "minutes_per_kg": "Use a recipe-specific rate, not a universal doneness rule; check the food’s internal temperature.",
          "rest_pct": "0–50% of model time; this fraction does not set mandatory food-safety resting requirements."
        },
        "sources": [
          "https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures"
        ],
        "normal": {
          "inputs": {
            "weight": 5,
            "minutes_per_kg": 40,
            "base_minutes": 20,
            "rest_pct": 20
          },
          "expected": {
            "kind": "duration",
            "numbers": [
              3,
              40
            ]
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 220
              }
            },
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 44
              }
            },
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 264
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "hmin",
          "independentLiteral": "3 ч 40 мин"
        },
        "boundary": {
          "inputs": {
            "weight": 1,
            "minutes_per_kg": 59.6,
            "base_minutes": 0,
            "rest_pct": 0
          },
          "expected": {
            "kind": "duration",
            "numbers": [
              1,
              0
            ]
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 59.6
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "hmin",
          "independentLiteral": "1 ч 0 мин"
        },
        "defaultExpected": {
          "kind": "duration",
          "numbers": [
            3,
            40
          ]
        },
        "blankField": "weight",
        "domainField": "weight",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "uk",
        "path": "/uk/pobut/chas-zapikannya/",
        "h1": "Калькулятор часу запікання",
        "body": {
          "longDescription": "Допомагає скласти розклад за обраним рецептом: час у духовці дорівнює постійній частині плюс хвилини на кілограм, а відпочинок додається окремо. Базу й питомий час задає користувач; вид продукту, температуру та форму шматка модель не використовує для їх визначення. База є параметром лінійного правила, не доведеним часом фізичного прогрівання. Окремі рядки зберігають планове виймання та завершення обраного відпочинку. Одна маса й час не встановлюють готовності або безпеки.",
          "howToUse": [
            "Використовуйте хв/кг та базу обраного рецепта з його умовами.",
            "Введіть масу, яку описує рецепт; начинка й форма можуть змінити умови.",
            "Задайте відпочинок окремо як параметр планування.",
            "Перевіряйте готовність термометром за застосовними вказівками для продукту."
          ],
          "howItWorks": "Готування, хв = кг × хв/кг + база. Відпочинок = готування × відсоток/100; загалом = готування + відпочинок. Маса й хв/кг додатні, база невід’ємна, відпочинок від 0 до 50% у цьому інструменті. Перед поділом на години хвилини округлюються: 60 переносяться в годину. Температура продукту не обчислюється.",
          "example": "Введений приклад: 5 кг, 40 хв/кг, база 20 хв та відпочинок 20% дають 220 хв готування (3 год 40 хв), 44 хв відпочинку й 264 хв загалом. Це розклад, не підтвердження готовності індички. За 1 кг, 59,6 хв/кг, нульової бази й відпочинку вивід округлюється до 1 год 0 хв, не 60 хв.",
          "faq": [
            {
              "q": "Навіщо м’ясу відпочивати після духовки?",
              "a": "Відпочинок може бути окремою частиною рецепта й вказівок безпеки. Введений відсоток лише планує час; він не доводить потрібну температуру й не замінює конкретного мінімального інтервалу."
            },
            {
              "q": "Чи можна орієнтуватися лише на час?",
              "a": "Ні. FoodSafety.gov для США використовує виміряну внутрішню температуру: наприклад, цілі шматки яловичини 63°C із відпочинком 3 хвилини, птиця 74°C. Джерело не підтверджує наші хв/кг."
            },
            {
              "q": "Чому маленька птиця готується непропорційно довго?",
              "a": "Відносно більша роль бази для малої маси випливає з обраної формули. Це не фізичний доказ, що будь-яка мала птиця потребує такого базового часу."
            },
            {
              "q": "Чи впливає температура духовки?",
              "a": "Температура впливає на реальне готування, але не є входом цієї моделі. Потрібні параметри рецепта для відповідних умов; універсальний перерахунок між температурами тут не заданий."
            }
          ],
          "disclaimer": "Плановий час не підтверджує безпечної внутрішньої температури. Умови рецепта й вимірювання продукту перевіряються окремо."
        },
        "help": {
          "minutes_per_kg": "Коефіцієнт із конкретного рецепта, не універсальна норма готовності; перевіряйте внутрішню температуру продукту.",
          "rest_pct": "Від 0 до 50% модельного часу; частка не задає обов’язкового відпочинку за правилами безпеки."
        },
        "sources": [
          "https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures"
        ],
        "normal": {
          "inputs": {
            "weight": 5,
            "minutes_per_kg": 40,
            "base_minutes": 20,
            "rest_pct": 20
          },
          "expected": {
            "kind": "duration",
            "numbers": [
              3,
              40
            ]
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 220
              }
            },
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 44
              }
            },
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 264
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "годхв",
          "independentLiteral": "3 ч 40 мин"
        },
        "boundary": {
          "inputs": {
            "weight": 1,
            "minutes_per_kg": 59.6,
            "base_minutes": 0,
            "rest_pct": 0
          },
          "expected": {
            "kind": "duration",
            "numbers": [
              1,
              0
            ]
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 59.6
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "годхв",
          "independentLiteral": "1 ч 0 мин"
        },
        "defaultExpected": {
          "kind": "duration",
          "numbers": [
            3,
            40
          ]
        },
        "blankField": "weight",
        "domainField": "weight",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "de",
        "path": "/de/haushalt/bratzeit-rechner/",
        "h1": "Rechner für die Bratzeit",
        "body": {
          "longDescription": "Erstellt einen Zeitplan nach einem gewählten Rezept: Ofenzeit ist ein fester Anteil plus Minuten je Kilogramm, gefolgt von gesonderter Ruhezeit. Basis und Satz werden eingegeben, nicht aus Lebensmittelart, Temperatur oder Form bestimmt. Der feste Anteil ist ein Parameter der linearen Regel, keine nachgewiesene physikalische Aufheizdauer. Getrennte Zeilen zeigen geplante Entnahme und Ende der gewählten Ruhe. Gewicht und Zeit allein belegen weder Garzustand noch Lebensmittelsicherheit.",
          "howToUse": [
            "Satz und Basis aus einem Rezept samt Zubereitungsbedingungen übernehmen.",
            "Die dort beschriebene Masse eingeben; Füllung und Form können Bedingungen ändern.",
            "Ruhe gesondert als Planungsparameter wählen.",
            "Garzustand mit Thermometer nach anwendbaren Produkthinweisen prüfen."
          ],
          "howItWorks": "Garminuten = kg × Minuten/kg + Basis. Ruhe = Garzeit × Ruheprozent/100; Gesamt = Garzeit + Ruhe. Gewicht und Satz positiv, Basis nichtnegativ, Ruhe in diesem Werkzeug 0 bis 50%. Für Stunden/Minuten wird zuerst gerundet, sodass 60 Minuten in eine Stunde übergehen. Die Produkttemperatur wird nicht berechnet.",
          "example": "Beispielwerte 5 kg, 40 min/kg, Basis 20 min und Ruhe 20% ergeben 220 min Garzeit (3 h 40 min), 44 min Ruhe und 264 min insgesamt. Das plant ein Rezept, bestätigt aber keinen gegarten Truthahn. Bei 1 kg, 59,6 min/kg, Basis und Ruhe null lautet die gerundete Anzeige 1 h 0 min statt 60 min.",
          "faq": [
            {
              "q": "Wozu ein fester Anteil?",
              "a": "Ein eingegebener linearer Rezeptparameter. Er muss weder Ofenaufheizung noch Krustenbildung entsprechen; die Eignung hängt vom Rezept und seinen Bedingungen ab."
            },
            {
              "q": "Warum steht die Ruhezeit gesondert?",
              "a": "So werden Ofenzeit und gewählter Zeitraum vor dem Servieren unterschieden. Der Prozentsatz ist keine allgemeine Ruhevorschrift und ersetzt keinen konkreten Sicherheitshinweis."
            },
            {
              "q": "Ersetzt das ein Thermometer?",
              "a": "Nein. US FoodSafety.gov verwendet gemessene Innentemperatur, etwa ganze Rindfleischstücke 63°C mit 3 Minuten Ruhe, Geflügel 74°C. Die Quelle bestätigt keine Minuten/kg dieses Rechners."
            },
            {
              "q": "Wie unterscheidet sich das von einem Rechner für den Garverlust?",
              "a": "Ein Ausbeutefaktor verbindet ursprüngliches und gegartes Gewicht. Hier wird Zeit mit einer anderen linearen Regel geplant; weder Massenausbeute noch Gartemperatur folgen daraus."
            }
          ],
          "disclaimer": "Geplante Zeit belegt keine sichere Innentemperatur. Rezeptbedingungen gesondert prüfen und das Produkt messen."
        },
        "help": {
          "minutes_per_kg": "Rezeptspezifischer Faktor, keine allgemeine Garregel; Kerntemperatur des Produkts prüfen.",
          "rest_pct": "0–50% der Modellzeit; bestimmt keine vorgeschriebene Sicherheitsruhezeit."
        },
        "sources": [
          "https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures"
        ],
        "normal": {
          "inputs": {
            "weight": 5,
            "minutes_per_kg": 40,
            "base_minutes": 20,
            "rest_pct": 20
          },
          "expected": {
            "kind": "duration",
            "numbers": [
              3,
              40
            ]
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 220
              }
            },
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 44
              }
            },
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 264
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "hmin",
          "independentLiteral": "3 ч 40 мин"
        },
        "boundary": {
          "inputs": {
            "weight": 1,
            "minutes_per_kg": 59.6,
            "base_minutes": 0,
            "rest_pct": 0
          },
          "expected": {
            "kind": "duration",
            "numbers": [
              1,
              0
            ]
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 59.6
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "hmin",
          "independentLiteral": "1 ч 0 мин"
        },
        "defaultExpected": {
          "kind": "duration",
          "numbers": [
            3,
            40
          ]
        },
        "blankField": "weight",
        "domainField": "weight",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "es",
        "path": "/es/hogar/tiempo-de-asado/",
        "h1": "Calculadora de tiempo de asado",
        "body": {
          "longDescription": "Organiza un horario según una receta elegida: tiempo de horno es una parte fija más minutos por kilogramo, con reposo separado. Introduces base y ritmo; no se determinan por tipo de alimento, temperatura ni forma de la pieza. La parte fija es un parámetro de la regla lineal, no un tiempo físico demostrado de calentamiento. Las filas separan retirada prevista y final del reposo elegido. Peso y tiempo solos no establecen cocción ni seguridad alimentaria.",
          "howToUse": [
            "Usa ritmo y base de una receta con sus condiciones de preparación.",
            "Introduce el peso descrito; relleno y forma pueden cambiar las condiciones.",
            "Elige el reposo aparte como parámetro del horario.",
            "Mide cocción con termómetro según indicaciones aplicables al producto."
          ],
          "howItWorks": "Minutos de cocción = kg × minutos/kg + base. Reposo = cocción × porcentaje/100; total = cocción + reposo. Peso y ritmo positivos, base no negativa, reposo entre 0 y 50% en esta herramienta. Para horas/minutos se redondea primero: 60 minutos pasan a una hora. No se calcula temperatura del producto.",
          "example": "Entradas ilustrativas 5 kg, 40 min/kg, base 20 min y reposo 20% dan 220 min de cocción (3 h 40 min), 44 min de reposo y 264 min totales. Planifica una receta, no confirma un pavo cocinado. Con 1 kg, 59,6 min/kg, base y reposo cero, se muestra 1 h 0 min tras redondear, no 60 min.",
          "faq": [
            {
              "q": "¿Por qué hay una parte fija?",
              "a": "Es un parámetro lineal introducido de la receta. No tiene que equivaler físicamente a calentamiento del horno o formación de costra; su validez depende de receta y condiciones."
            },
            {
              "q": "¿Por qué el reposo se muestra aparte?",
              "a": "Distingue tiempo de horno e intervalo elegido antes de servir. El porcentaje no es una exigencia universal de reposo ni sustituye instrucciones concretas de seguridad."
            },
            {
              "q": "¿Sustituye a un termómetro?",
              "a": "No. FoodSafety.gov de EE. UU. usa temperatura interna medida: por ejemplo, piezas enteras de vacuno 63°C y 3 minutos de reposo, aves 74°C. Esa fuente no valida nuestros minutos/kg."
            },
            {
              "q": "¿En qué se diferencia de una calculadora de merma en la cocción?",
              "a": "El factor de rendimiento relaciona peso original y cocinado. Aquí se programa tiempo con otra regla lineal; ni rendimiento de masa ni temperatura de cocción se deducen de ella."
            }
          ],
          "disclaimer": "El tiempo previsto no establece temperatura interna segura. Comprueba condiciones de receta y mide el producto aparte."
        },
        "help": {
          "minutes_per_kg": "Coeficiente de receta concreta, no regla universal de cocción; comprueba temperatura interna del alimento.",
          "rest_pct": "0–50% del tiempo del modelo; no fija reposo obligatorio de seguridad alimentaria."
        },
        "sources": [
          "https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures"
        ],
        "normal": {
          "inputs": {
            "weight": 5,
            "minutes_per_kg": 40,
            "base_minutes": 20,
            "rest_pct": 20
          },
          "expected": {
            "kind": "duration",
            "numbers": [
              3,
              40
            ]
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 220
              }
            },
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 44
              }
            },
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 264
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "hmin",
          "independentLiteral": "3 ч 40 мин"
        },
        "boundary": {
          "inputs": {
            "weight": 1,
            "minutes_per_kg": 59.6,
            "base_minutes": 0,
            "rest_pct": 0
          },
          "expected": {
            "kind": "duration",
            "numbers": [
              1,
              0
            ]
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 59.6
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "hmin",
          "independentLiteral": "1 ч 0 мин"
        },
        "defaultExpected": {
          "kind": "duration",
          "numbers": [
            3,
            40
          ]
        },
        "blankField": "weight",
        "domainField": "weight",
        "domainInvalid": -1,
        "countFields": []
      }
    ]
  },
  {
    "id": "yeast-convert",
    "category": "household",
    "defaults": {
      "value": 30,
      "from": "fresh",
      "to": "instant"
    },
    "fieldNames": [
      "value",
      "from",
      "to"
    ],
    "defaultInactive": [],
    "pages": [
      {
        "locale": "ru",
        "path": "/ru/household/pereschyot-drozhzhey/",
        "h1": "Калькулятор пересчёта дрожжей",
        "body": {
          "longDescription": "Пересчитывает массу между прессованными, сухими активными и быстродействующими дрожжами по сохранённым коэффициентам этой страницы. В выбранной модели свежая масса служит базой: активная равна её трети, быстродействующая — четверти. Все три эквивалента выводятся сразу, чтобы сравнить пакет и рецепт. Эти отношения не являются универсальным следствием влажности или гарантией одинаковой подъёмной силы. Состав и рекомендации конкретного продукта могут дать другое замещение; например, Red Star допускает для своих активных и быстродействующих дрожжей 1:1 в традиционном замесе.",
          "howToUse": [
            "Укажите массу в граммах и фактический исходный тип.",
            "Выберите другой нужный тип.",
            "Сверьте коэффициент с инструкцией своего продукта и рецептом.",
            "Способ внесения, температуру и подъём проверяйте по инструкции, отдельно от массы."
          ],
          "howItWorks": "Коэффициенты модели: свежие 1, активные 1/3, быстродействующие 1/4. Свежий эквивалент = введённая масса ÷ коэффициент исходного типа; масса нужного типа = свежий эквивалент × его коэффициент. Масса положительна, исходный и нужный типы разные. Массы сравниваются в граммах; влажность, жизнеспособность и время подъёма не вычисляются.",
          "example": "По выбранной модели 30 г прессованных дают 10 г сухих активных или 7,5 г быстродействующих. Обратно, 7,5 г быстродействующих дают 30 г свежего эквивалента и 10 г активных. Это арифметика коэффициентов, а не универсальная инструкция замены для любого производителя.",
          "faq": [
            {
              "q": "Откуда берётся соотношение один к трём?",
              "a": "Одна треть — выбранный коэффициент этой модели. Различия влажности важны, но сами по себе не доказывают точной универсальной замены 1:3; продукт и рекомендации производителя могут отличаться."
            },
            {
              "q": "Чем сухие активные отличаются от быстродействующих?",
              "a": "Это разные формы продукта. Не всегда активные обязательно разводят, а быстродействующие только смешивают с мукой: Red Star описывает оба способа для своих дрожжей. Используйте указания конкретной упаковки."
            },
            {
              "q": "Можно ли заменять дрожжи один в один по объёму?",
              "a": "Нет: объём зависит от формы и плотности продукта. Этот калькулятор пересчитывает массу, а не ложки; объёмную дозировку проверяйте по инструкции продукта."
            },
            {
              "q": "Изменится ли время подъёма теста?",
              "a": "Может измениться из-за состава теста, температуры и свойств дрожжей, но это не рассчитывается. Совпадение модельного эквивалента массы не гарантирует того же времени подъёма."
            }
          ],
          "disclaimer": "Выбранные коэффициенты не заменяют инструкцию производителя и не гарантируют одинаковой ферментации или качества выпечки."
        },
        "help": {
          "value": "Положительная масса, г. Модель 1 : 1/3 : 1/4 может отличаться от инструкции вашей марки."
        },
        "sources": [
          "https://redstaryeast.com/frequently-asked-questions/"
        ],
        "normal": {
          "inputs": {
            "value": 30,
            "from": "fresh",
            "to": "instant"
          },
          "expected": {
            "kind": "number",
            "value": 7.5
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 10
              }
            },
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 30
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "г",
          "independentLiteral": "7,5 г"
        },
        "boundary": {
          "inputs": {
            "value": 7.5,
            "from": "instant",
            "to": "active"
          },
          "expected": {
            "kind": "number",
            "value": 10
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 30
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "г",
          "independentLiteral": "10 г"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 7.5
        },
        "blankField": "value",
        "domainField": "value",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "en",
        "path": "/en/household/yeast-converter/",
        "h1": "Yeast converter",
        "body": {
          "longDescription": "Converts mass between fresh compressed, active dry and instant yeast using this page’s retained coefficients. Fresh mass is the chosen basis: active dry is one third and instant one quarter. All three equivalents appear together so recipe and packet can be compared. These ratios are neither a universal consequence of moisture nor a guarantee of identical leavening power. A particular product’s composition and instructions can give another substitution; for example, Red Star permits 1:1 active/instant replacement for its products in traditional mixing.",
          "howToUse": [
            "Enter grams and the actual source type.",
            "Select a different target type.",
            "Compare coefficients with your product instructions and recipe.",
            "Check mixing method, temperature and rising separately from mass."
          ],
          "howItWorks": "Model coefficients: fresh 1, active dry 1/3, instant 1/4. Fresh equivalent = entered mass ÷ original type’s coefficient; target mass = fresh equivalent × target coefficient. Mass is positive and the two selected types must differ. Masses are grams; moisture, viability and rising time are not calculated.",
          "example": "The selected model converts 30 g fresh into 10 g active dry or 7.5 g instant. Conversely, 7.5 g instant gives 30 g fresh equivalent and 10 g active dry. These follow the coefficients, not a universal manufacturer substitution instruction.",
          "faq": [
            {
              "q": "Where does the one-to-three ratio come from?",
              "a": "One third is this model’s selected coefficient. Moisture differences matter but do not establish an exact universal 1:3 replacement; products and manufacturer guidance can differ."
            },
            {
              "q": "How does active dry differ from instant?",
              "a": "They are different product forms. Active dry does not invariably require dissolving while instant only goes into flour: Red Star describes both methods for its products. Follow the particular packet."
            },
            {
              "q": "Can I swap yeast by volume instead?",
              "a": "No. Volume depends on product form and density. This tool converts mass, not spoon measures; check volume dosing against the product instructions."
            },
            {
              "q": "Will the rising time change?",
              "a": "It can change with dough composition, temperature and yeast properties, but is not calculated. An equal modelled mass equivalent cannot guarantee the same rising time."
            }
          ],
          "disclaimer": "Selected coefficients do not replace manufacturer instructions or guarantee identical fermentation or baking results."
        },
        "help": {
          "value": "Positive mass in g. The 1 : 1/3 : 1/4 model may differ from your product’s instructions."
        },
        "sources": [
          "https://redstaryeast.com/frequently-asked-questions/"
        ],
        "normal": {
          "inputs": {
            "value": 30,
            "from": "fresh",
            "to": "instant"
          },
          "expected": {
            "kind": "number",
            "value": 7.5
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 10
              }
            },
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 30
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "g",
          "independentLiteral": "7,5 г"
        },
        "boundary": {
          "inputs": {
            "value": 7.5,
            "from": "instant",
            "to": "active"
          },
          "expected": {
            "kind": "number",
            "value": 10
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 30
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "g",
          "independentLiteral": "10 г"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 7.5
        },
        "blankField": "value",
        "domainField": "value",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "uk",
        "path": "/uk/pobut/pererahunok-drizhdzhiv/",
        "h1": "Калькулятор перерахунку дріжджів",
        "body": {
          "longDescription": "Переводить масу між пресованими, сухими активними та швидкодійними дріжджами за збереженими коефіцієнтами сторінки. В обраній моделі свіжа маса є базою: активна дорівнює третині, швидкодійна — чверті. Три еквіваленти виводяться разом для зіставлення рецепта й упаковки. Це не універсальний наслідок вологості й не гарантія однакової підйомної сили. Склад і вказівки конкретного продукту можуть задавати іншу заміну: наприклад, Red Star допускає 1:1 для своїх активних і швидкодійних дріжджів у традиційному замісі.",
          "howToUse": [
            "Введіть грами та фактичний вихідний тип.",
            "Оберіть інший потрібний тип.",
            "Зіставте коефіцієнти з рецептом та інструкцією конкретного продукту.",
            "Спосіб внесення, температуру й підйом перевіряйте окремо від маси."
          ],
          "howItWorks": "Коефіцієнти моделі: свіжі 1, активні 1/3, швидкодійні 1/4. Свіжий еквівалент = введена маса ÷ коефіцієнт вихідного типу; потрібна маса = еквівалент × коефіцієнт потрібного типу. Маса додатна, обрані типи різні. Одиниця — грами; вологість, життєздатність і час підйому не обчислюються.",
          "example": "За обраною моделлю 30 г пресованих дають 10 г сухих активних або 7,5 г швидкодійних. Зворотно, 7,5 г швидкодійних дають 30 г свіжого еквівалента та 10 г активних. Це арифметика коефіцієнтів, не універсальна інструкція виробника.",
          "faq": [
            {
              "q": "Чому сухих потрібно менше?",
              "a": "У моделі сухі мають коефіцієнти 1/3 та 1/4. Відмінності вологи не доводять універсальної точної заміни: конкретні продукти та рекомендації можуть відрізнятися."
            },
            {
              "q": "Чим сухі активні відрізняються від швидкодійних?",
              "a": "Це різні форми продукту, але не універсальне правило обов’язково розводити активні й лише всипати швидкодійні. Red Star описує обидва способи для своїх продуктів; перевіряйте упаковку."
            },
            {
              "q": "Чи можна зовсім обійтися без дріжджів?",
              "a": "Закваска чи інші способи розпушення потребують окремого рецепта й процесу. Їх не можна отримати множенням цієї дріжджової маси; калькулятор не описує таку заміну."
            },
            {
              "q": "Чи впливає термін придатності?",
              "a": "Термін і умови зберігання можуть впливати на придатність. Перевіряйте упаковку та вказаний виробником спосіб перевірки; модель не визначає життєздатності й не радить універсального збільшення дози."
            }
          ],
          "disclaimer": "Обрані коефіцієнти не замінюють інструкцію виробника й не гарантують однакового бродіння або результату випікання."
        },
        "help": {
          "value": "Додатна маса, г. Модель 1 : 1/3 : 1/4 може відрізнятися від інструкції вашої марки."
        },
        "sources": [
          "https://redstaryeast.com/frequently-asked-questions/"
        ],
        "normal": {
          "inputs": {
            "value": 30,
            "from": "fresh",
            "to": "instant"
          },
          "expected": {
            "kind": "number",
            "value": 7.5
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 10
              }
            },
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 30
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "г",
          "independentLiteral": "7,5 г"
        },
        "boundary": {
          "inputs": {
            "value": 7.5,
            "from": "instant",
            "to": "active"
          },
          "expected": {
            "kind": "number",
            "value": 10
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 30
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "г",
          "independentLiteral": "10 г"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 7.5
        },
        "blankField": "value",
        "domainField": "value",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "de",
        "path": "/de/haushalt/hefe-umrechner/",
        "h1": "Hefeumrechner",
        "body": {
          "longDescription": "Rechnet Masse zwischen Frischhefe, aktiver Trockenhefe und Instanthefe mit den erhaltenen Koeffizienten dieser Seite um. Frischmasse ist die gewählte Basis: aktive Trockenhefe beträgt ein Drittel, Instanthefe ein Viertel. Alle drei Äquivalente stehen zum Vergleich von Rezept und Packung zusammen. Diese Verhältnisse folgen nicht allgemeingültig aus Wassergehalt und garantieren keine gleiche Triebkraft. Zusammensetzung und Anweisungen eines Produkts können andere Ersetzungen vorsehen; Red Star erlaubt etwa 1:1 zwischen eigenen aktiven und Instantprodukten beim traditionellen Mischen.",
          "howToUse": [
            "Gramm und tatsächlichen Ausgangstyp eintragen.",
            "Einen anderen Zieltyp wählen.",
            "Koeffizienten mit Produktanleitung und Rezept vergleichen.",
            "Einmischen, Temperatur und Gehen getrennt von der Masse prüfen."
          ],
          "howItWorks": "Modellkoeffizienten: frisch 1, aktiv trocken 1/3, instant 1/4. Frischäquivalent = Eingabemasse ÷ Ausgangskoeffizient; Zielmasse = Äquivalent × Zielkoeffizient. Masse positiv, beide Typen verschieden. Einheit ist Gramm; Feuchte, Lebensfähigkeit und Gehzeit werden nicht berechnet.",
          "example": "Das gewählte Modell ergibt aus 30 g Frischhefe 10 g aktive Trockenhefe oder 7,5 g Instanthefe. Umgekehrt ergeben 7,5 g Instanthefe 30 g Frischäquivalent und 10 g aktive Trockenhefe. Dies ist Koeffizientenrechnung, keine allgemeine Herstelleranweisung.",
          "faq": [
            {
              "q": "Woher kommt das Verhältnis eins zu drei?",
              "a": "Ein Drittel ist der hier gewählte Modellkoeffizient. Feuchteunterschiede sind relevant, belegen aber keine exakte allgemeine 1:3-Ersetzung; Produkte und Herstellerhinweise können abweichen."
            },
            {
              "q": "Wie unterscheidet sich Trockenhefe von Instanthefe?",
              "a": "Es sind unterschiedliche Produktformen. Aktive Trockenhefe muss nicht immer aufgelöst und Instanthefe ausschließlich ins Mehl gegeben werden: Red Star beschreibt beide Verfahren. Die konkrete Packung beachten."
            },
            {
              "q": "Kann ich Hefe stattdessen nach Volumen tauschen?",
              "a": "Nein. Volumen hängt von Form und Dichte ab. Dieser Rechner wandelt Masse statt Löffelmaße um; Volumendosierung anhand der Produktanleitung prüfen."
            },
            {
              "q": "Ändert sich die Gehzeit?",
              "a": "Sie kann sich durch Teigzusammensetzung, Temperatur und Hefeeigenschaften ändern, wird jedoch nicht berechnet. Gleiches Modelläquivalent garantiert keine gleiche Gehzeit."
            }
          ],
          "disclaimer": "Gewählte Koeffizienten ersetzen keine Herstelleranleitung und garantieren weder gleiche Gärung noch Backergebnisse."
        },
        "help": {
          "value": "Positive Masse in g. Modell 1 : 1/3 : 1/4 kann von Herstelleranleitung abweichen."
        },
        "sources": [
          "https://redstaryeast.com/frequently-asked-questions/"
        ],
        "normal": {
          "inputs": {
            "value": 30,
            "from": "fresh",
            "to": "instant"
          },
          "expected": {
            "kind": "number",
            "value": 7.5
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 10
              }
            },
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 30
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "g",
          "independentLiteral": "7,5 г"
        },
        "boundary": {
          "inputs": {
            "value": 7.5,
            "from": "instant",
            "to": "active"
          },
          "expected": {
            "kind": "number",
            "value": 10
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 30
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "g",
          "independentLiteral": "10 г"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 7.5
        },
        "blankField": "value",
        "domainField": "value",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "es",
        "path": "/es/hogar/conversor-de-levadura/",
        "h1": "Conversor de levadura",
        "body": {
          "longDescription": "Convierte masa entre levadura fresca prensada, seca activa e instantánea con los coeficientes conservados de esta página. La masa fresca es la base elegida: activa un tercio e instantánea un cuarto. Se muestran los tres equivalentes para comparar receta y envase. Las razones no son una consecuencia universal de la humedad ni garantizan igual poder fermentador. Un producto concreto puede recomendar otra sustitución; por ejemplo, Red Star admite 1:1 entre sus productos activos e instantáneos en mezclado tradicional.",
          "howToUse": [
            "Introduce gramos y el tipo original real.",
            "Elige otro tipo objetivo.",
            "Contrasta coeficientes con receta e instrucciones del producto.",
            "Comprueba mezclado, temperatura y levado aparte de la masa."
          ],
          "howItWorks": "Coeficientes del modelo: fresca 1, activa 1/3, instantánea 1/4. Equivalente fresco = masa introducida ÷ coeficiente original; masa objetivo = equivalente × coeficiente objetivo. Masa positiva y tipos distintos. Unidad gramos; no se calculan humedad, viabilidad ni tiempo de levado.",
          "example": "El modelo elegido convierte 30 g frescos en 10 g activos o 7,5 g instantáneos. A la inversa, 7,5 g instantáneos dan 30 g de equivalente fresco y 10 g activos. Es aritmética de coeficientes, no una instrucción universal del fabricante.",
          "faq": [
            {
              "q": "¿De dónde sale la proporción de uno a tres?",
              "a": "Un tercio es el coeficiente elegido de este modelo. La humedad importa, pero no establece una sustitución exacta universal 1:3; productos e indicaciones pueden diferir."
            },
            {
              "q": "¿En qué se diferencia la seca activa de la instantánea?",
              "a": "Son formas distintas. La activa no requiere siempre disolverse ni la instantánea solo añadirse a harina: Red Star describe ambos métodos para sus productos. Sigue el envase concreto."
            },
            {
              "q": "¿Puedo cambiar la levadura por volumen en vez de por peso?",
              "a": "No. El volumen depende de forma y densidad. Se convierte masa, no cucharadas; verifica dosificación volumétrica con las instrucciones."
            },
            {
              "q": "¿Cambiará el tiempo de levado?",
              "a": "Puede cambiar por composición de masa, temperatura y propiedades de levadura, pero no se calcula. Igual equivalente del modelo no garantiza el mismo levado."
            }
          ],
          "disclaimer": "Los coeficientes elegidos no sustituyen instrucciones del fabricante ni garantizan idéntica fermentación o resultado de horneado."
        },
        "help": {
          "value": "Masa positiva en g. El modelo 1 : 1/3 : 1/4 puede diferir de instrucciones de tu marca."
        },
        "sources": [
          "https://redstaryeast.com/frequently-asked-questions/"
        ],
        "normal": {
          "inputs": {
            "value": 30,
            "from": "fresh",
            "to": "instant"
          },
          "expected": {
            "kind": "number",
            "value": 7.5
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 10
              }
            },
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 30
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "g",
          "independentLiteral": "7,5 г"
        },
        "boundary": {
          "inputs": {
            "value": 7.5,
            "from": "instant",
            "to": "active"
          },
          "expected": {
            "kind": "number",
            "value": 10
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 30
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "g",
          "independentLiteral": "10 г"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 7.5
        },
        "blankField": "value",
        "domainField": "value",
        "domainInvalid": -1,
        "countFields": []
      }
    ]
  }
];
