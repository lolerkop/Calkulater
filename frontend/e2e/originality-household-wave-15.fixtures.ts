import type { PublicationCase } from './originality-publication-browser-helper';

// Numeric expectations are independent frozen Decimal/analytic literals.
// Calculator imports were used only in fixture preparation for row indexes,
// field visibility, native labels/units and owned copy/source getter metadata.
export const cases: PublicationCase[] = [
  {
    "id": "aquarium-water-change",
    "category": "household",
    "defaults": {
      "volume": 240,
      "changePct": 25,
      "decorPct": 12
    },
    "fieldNames": [
      "volume",
      "changePct",
      "decorPct"
    ],
    "defaultInactive": [],
    "pages": [
      {
        "locale": "ru",
        "path": "/ru/household/aquarium-water-change/",
        "h1": "Калькулятор подмены воды в аквариуме",
        "body": {
          "longDescription": "Сколько свежей воды подготовить, зависит от фактической воды в системе, а не только от надписи на аквариуме. Грунт, декор и выбранный уровень меняют этот объём. Здесь сначала вычитается введённая доля вытеснения, затем применяется выбранный процент подмены. Это помогает сверить объём ёмкостей для подготовки воды. Частота и доля подмены зависят от обитателей и качества воды; калькулятор их не назначает. Доза кондиционера определяется инструкцией продукта и способом внесения, поэтому объём подмены нельзя автоматически считать базой любой дозировки.",
          "howToUse": [
            "Введите паспортный объём аквариума в литрах.",
            "Введите выбранный процент подмены; его пригодность формула не определяет.",
            "Оцените вытеснение и недолив по фактической воде; отдельно учитывайте воду фильтра.",
            "Подготовьте рассчитанный объём, а кондиционер дозируйте по инструкции продукта для своего способа внесения."
          ],
          "howItWorks": "При объёме V литров, вытесненной доле d% и выбранной подмене p% чистая вода N=V×(1−d/100), подмена W=N×p/100, остаток N−W. V>0, 0≤d<100, 0<p≤100. Объём фильтра и недолив включайте в свою оценку: они отдельно не вычисляются. Формула не назначает процент подмены и дозу препаратов.",
          "example": "В аквариуме на 240 л с 12 % грунта помещается 211,2 л воды, и подмена на 25 % — это 52,8 л. Без вытеснения 100 л и 100% подмена дают 100 л новой воды и остаток 0; это числовая граница, не совет полностью менять воду.",
          "faq": [
            {
              "q": "Какую долю обычно занимает грунт?",
              "a": "Измерение фактически залитой воды точнее общей процентной прикидки. Доля слоя зависит от его высоты, основания, пористости и декора; значения 5%,12% или 20% здесь могут быть только вашими допущениями, не правилом для любого аквариума."
            },
            {
              "q": "Почему нельзя дозировать кондиционер по паспорту банки?",
              "a": "Нужно следовать инструкции конкретного средства. Например, Prime различает обработку новой воды и внесение прямо в аквариум: база дозы при этих способах различается. Расчёт объёма подмены не проверяет концентрацию хлора, состав воды, средство или его дозировку."
            },
            {
              "q": "Какой процент подмены считается нормальным?",
              "a": "Универсального процента нет: важны состав обитателей, плотность заселения, фильтрация и тесты воды. Введённые 25% — пример. Этот расчёт определяет литры для уже выбранной доли; он не оценивает, безопасна ли подмена для вашей системы."
            },
            {
              "q": "Учитывается ли объём фильтра?",
              "a": "Вода во внешнем фильтре и шлангах отдельно не прибавляется. Если исходный V относится только к банке, эти литры остаются вне модели. Для обработки воды используйте требуемую инструкцией базу объёма, а не называйте пропущенный фильтр гарантированным запасом безопасности."
            }
          ]
        },
        "help": {
          "volume": "Оцените воду с учётом недолива и внешнего фильтра; калькулятор отдельно их не измеряет.",
          "changePct": "Более 0 до 100%; выбор доли не является назначением графика ухода или дозы средства."
        },
        "sources": [
          "https://www.seachem.com/prime.php",
          "https://www.msdvetmanual.com/multimedia/table/essential-maintenance"
        ],
        "normal": {
          "inputs": {
            "volume": 240,
            "changePct": 25,
            "decorPct": 12
          },
          "expected": {
            "kind": "number",
            "value": 52.8
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 211.2
              }
            }
          ],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "л",
          "independentLiteral": "52,8 л"
        },
        "boundary": {
          "inputs": {
            "volume": 100,
            "changePct": 100,
            "decorPct": 0
          },
          "expected": {
            "kind": "number",
            "value": 100
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 0
              }
            }
          ],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "л",
          "independentLiteral": "100 л"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 52.8
        },
        "blankField": "volume",
        "domainField": "volume",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "en",
        "path": "/en/household/aquarium-water-change-calculator/",
        "h1": "Aquarium water change calculator",
        "body": {
          "longDescription": "Preparing replacement water starts with the actual water volume, not just the tank label. Substrate, decor and the fill line change that volume. The entered displacement is subtracted first, then your selected change percentage is applied. This helps size preparation containers. The appropriate schedule and percentage depend on the inhabitants and water quality and are not prescribed here. Conditioner dosing follows the product directions and how it is added, so replacement volume is not automatically the basis for every dose.",
          "howToUse": [
            "Enter the labelled volume of the tank in litres.",
            "Enter your selected change percentage; the formula does not establish its suitability.",
            "Estimate displacement and the fill line from actual water; account separately for filter water.",
            "Prepare the calculated volume; dose conditioner according to product directions for your addition method."
          ],
          "howItWorks": "For V litres, displaced share d% and selected change p%, net water N=V×(1−d/100), replacement W=N×p/100 and remaining water N−W. V>0, 0≤d<100, 0<p≤100. Include filter volume and the fill line in your own estimate; neither is calculated separately. This volume model prescribes no change schedule or product dose.",
          "example": "A 240-litre tank with 12% taken by substrate holds 211.2 litres of water; a 25% change is 52.8 litres. With 100 L, no displacement and 100% change, replacement is 100 L and remainder 0; this boundary is arithmetic, not a full-change recommendation.",
          "faq": [
            {
              "q": "What share does substrate usually take?",
              "a": "Measuring the water actually added is more reliable than a general percentage. Displacement depends on layer height, footprint, porosity and decor;5%,12% or 20% can be scenario assumptions, not a rule for every tank."
            },
            {
              "q": "Why not dose conditioner by the tank label?",
              "a": "Follow the particular product directions. Prime, for example, distinguishes pretreating new water from adding directly to the aquarium, with different volume bases. This change-volume calculation checks neither chlorine concentration, water chemistry, product nor dosage."
            },
            {
              "q": "How large should a routine change be?",
              "a": "No percentage suits every tank: inhabitants, stocking density, filtration and water tests matter. The default 25% is an example. This calculation converts a selected share into litres without assessing whether the change is suitable for your system."
            },
            {
              "q": "Does the filter volume count?",
              "a": "External filter and hose water is not added separately. If V covers only the tank, those litres remain outside the model. For water treatment use the volume basis required by the directions; omitted filter water is not a guaranteed safety margin."
            }
          ],
          "disclaimer": "Results are reference estimates. Verify the inputs before making important decisions."
        },
        "help": {
          "volume": "Estimate volume allowing for fill line and external filter; these are not measured separately.",
          "changePct": "Above 0 up to 100%; choosing a fraction prescribes no care schedule or product dose."
        },
        "sources": [
          "https://www.seachem.com/prime.php",
          "https://www.msdvetmanual.com/multimedia/table/essential-maintenance"
        ],
        "normal": {
          "inputs": {
            "volume": 240,
            "changePct": 25,
            "decorPct": 12
          },
          "expected": {
            "kind": "number",
            "value": 52.8
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 211.2
              }
            }
          ],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "L",
          "independentLiteral": "52,8 л"
        },
        "boundary": {
          "inputs": {
            "volume": 100,
            "changePct": 100,
            "decorPct": 0
          },
          "expected": {
            "kind": "number",
            "value": 100
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 0
              }
            }
          ],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "L",
          "independentLiteral": "100 л"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 52.8
        },
        "blankField": "volume",
        "domainField": "volume",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "uk",
        "path": "/uk/pobut/pidmina-vody-akvarium/",
        "h1": "Калькулятор підміни води в акваріумі",
        "body": {
          "longDescription": "Об’єм підготовленої свіжої води залежить від фактичної води в системі, а не лише від напису на акваріумі. Ґрунт, декор і рівень заповнення змінюють його. Спочатку віднімається введена частка витіснення, потім застосовується обраний відсоток підміни. Це допомагає перевірити місткість посуду для підготовки води. Частоту й частку визначають мешканці та якість води, а не калькулятор. Дозу кондиціонера задає інструкція продукту й спосіб внесення: об’єм підміни не є автоматично базою кожної дози.",
          "howToUse": [
            "Введіть паспортний об’єм акваріума.",
            "Введіть обраний відсоток підміни; формула не визначає його придатності.",
            "Оцініть витіснення й недолив за фактичною водою; окремо врахуйте воду фільтра.",
            "Підготуйте розрахований об’єм; кондиціонер дозуйте за інструкцією для свого способу внесення."
          ],
          "howItWorks": "За об’єму V літрів, витісненої частки d% та обраної підміни p% вода N=V×(1−d/100), підміна W=N×p/100, залишок N−W. V>0, 0≤d<100, 0<p≤100. Об’єм фільтра й недолив врахуйте у власній оцінці: окремо вони не рахуються. Формула не призначає частоту підміни чи дозу засобу.",
          "example": "В акваріумі на 240 л із 12 % ґрунту вміщується 211,2 л води, і підміна на 25 % — це 52,8 л. За 100 л без витіснення і 100% підміни нової води 100 л, залишок 0; це числова межа, не порада повної підміни.",
          "faq": [
            {
              "q": "Скільки води підмінювати?",
              "a": "Частку й графік підміни обирають за видом, щільністю заселення та виміряними параметрами води.20–30% щотижня не є універсальною нормою; введене число лише перетворюється в літри. За проблем із водою потрібна предметна порада щодо конкретної системи."
            },
            {
              "q": "Скільки витісняють ґрунт і декорації?",
              "a": "Це залежить від геометрії, шару, пористості й декору. Самі 5 см ґрунту не означають 10% для кожної висоти акваріума. Надійніше виміряти фактично залиту воду й порівняти її з обраним повним об’ємом."
            },
            {
              "q": "Чому не можна підмінити відразу багато?",
              "a": "Велика підміна не є автоматично забороненою чи безпечною: результат залежить від температури, pH, жорсткості й стану акваріума. Калькулятор цих параметрів не перевіряє. Введені 25% — приклад об’єму, не призначений режим догляду."
            },
            {
              "q": "Чи треба відстоювати воду?",
              "a": "Саме відстоювання не підтверджує придатність води: важливі фактичні дезінфектанти та параметри. Хлорамін не слід вважати видаленим після доби стояння. Підготовка й дозування мають відповідати воді, видам та інструкції засобу; калькулятор цього не визначає."
            }
          ],
          "disclaimer": "Результати є орієнтовними оцінками. Перед важливими рішеннями перевіряйте дані."
        },
        "help": {
          "volume": "Оцініть об’єм з урахуванням недоливу й зовнішнього фільтра; окремо вони не вимірюються.",
          "changePct": "Понад 0 до 100%; вибір частки не призначає графіка догляду або дози засобу."
        },
        "sources": [
          "https://www.seachem.com/prime.php",
          "https://www.msdvetmanual.com/multimedia/table/essential-maintenance"
        ],
        "normal": {
          "inputs": {
            "volume": 240,
            "changePct": 25,
            "decorPct": 12
          },
          "expected": {
            "kind": "number",
            "value": 52.8
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 211.2
              }
            }
          ],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "л",
          "independentLiteral": "52,8 л"
        },
        "boundary": {
          "inputs": {
            "volume": 100,
            "changePct": 100,
            "decorPct": 0
          },
          "expected": {
            "kind": "number",
            "value": 100
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 0
              }
            }
          ],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "л",
          "independentLiteral": "100 л"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 52.8
        },
        "blankField": "volume",
        "domainField": "volume",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "de",
        "path": "/de/haushalt/wasserwechsel-aquarium/",
        "h1": "Rechner für den Wasserwechsel im Aquarium",
        "body": {
          "longDescription": "Für vorbereitetes Wechselwasser zählt das tatsächliche Wasser der Anlage, nicht nur die Beckenangabe. Bodengrund, Einrichtung und Füllhöhe ändern das Volumen. Zuerst wird die eingegebene Verdrängung abgezogen, dann dein Wechselanteil angewendet. Damit kannst du die Vorbereitungsbehälter bemessen. Intervall und Anteil hängen von Besatz und Wasserqualität ab und werden hier nicht vorgeschrieben. Die Aufbereitermenge folgt der Produktanweisung und der Zugabemethode; Wechselvolumen ist daher nicht automatisch die Basis jeder Dosis.",
          "howToUse": [
            "Trage das angegebene Volumen des Beckens in Litern ein.",
            "Trage den gewählten Wechselanteil ein; die Formel bestimmt dessen Eignung nicht.",
            "Schätze Verdrängung und Füllhöhe am tatsächlichen Wasser; Filterwasser gesondert berücksichtigen.",
            "Bereite das Volumen vor; Aufbereiter nach Produktanweisung für deine Zugabemethode dosieren."
          ],
          "howItWorks": "Bei V Litern, verdrängtem Anteil d% und gewähltem Wechsel p% gilt: Nettowasser N=V×(1−d/100), Wechsel W=N×p/100, Rest N−W. V>0, 0≤d<100, 0<p≤100. Filtervolumen und Füllhöhe musst du in deiner Schätzung berücksichtigen; sie werden nicht gesondert ermittelt. Die Volumenformel legt weder Pflegeintervall noch Produktdosis fest.",
          "example": "Ein Becken mit 240 Litern, bei dem 12 % auf den Bodengrund entfallen, hält 211,2 Liter Wasser; ein Wechsel von 25 % sind 52,8 Liter. 100 l ohne Verdrängung bei 100% Wechsel ergeben 100 l Ersatz und Rest 0; Rechengrenze, keine Empfehlung zum Komplettwechsel.",
          "faq": [
            {
              "q": "Welchen Anteil nimmt der Bodengrund gewöhnlich ein?",
              "a": "Die tatsächlich eingefüllte Wassermenge ist zuverlässiger als ein Pauschalanteil. Verdrängung hängt von Schichthöhe, Grundfläche, Porosität und Einrichtung ab;5%,12% oder 20% sind Szenarioannahmen, keine Regel für jedes Becken."
            },
            {
              "q": "Warum nicht den Aufbereiter nach der Beckenangabe dosieren?",
              "a": "Es gilt die Anweisung des jeweiligen Produkts. Prime unterscheidet etwa die Vorbehandlung neuen Wassers von direkter Zugabe ins Aquarium mit unterschiedlicher Volumenbasis. Dieser Wechselrechner prüft weder Chlorgehalt, Wasserchemie, Produkt noch Dosis."
            },
            {
              "q": "Wie groß sollte ein regelmäßiger Wechsel sein?",
              "a": "Ein Anteil passt nicht zu jedem Becken: Besatz, Dichte, Filterung und Wassertests zählen. Die voreingestellten 25% sind ein Beispiel. Der Rechner wandelt einen gewählten Anteil in Liter um, beurteilt aber nicht dessen Eignung für dein System."
            },
            {
              "q": "Zählt das Volumen des Filters mit?",
              "a": "Wasser in Außenfilter und Schläuchen wird nicht extra addiert. Bezieht sich V nur auf das Becken, fehlen diese Liter. Für Behandlung zählt die laut Produkt erforderliche Volumenbasis; ausgelassenes Filterwasser ist keine garantierte Sicherheitsreserve."
            }
          ],
          "disclaimer": "Die Ergebnisse sind Orientierungswerte. Prüfe die Eingaben vor wichtigen Entscheidungen."
        },
        "help": {
          "volume": "Füllhöhe und Außenfilter in Volumenschätzung berücksichtigen; keine gesonderte Messung.",
          "changePct": "Über 0 bis 100%; Anteil bestimmt weder Pflegeplan noch Produktdosis."
        },
        "sources": [
          "https://www.seachem.com/prime.php",
          "https://www.msdvetmanual.com/multimedia/table/essential-maintenance"
        ],
        "normal": {
          "inputs": {
            "volume": 240,
            "changePct": 25,
            "decorPct": 12
          },
          "expected": {
            "kind": "number",
            "value": 52.8
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 211.2
              }
            }
          ],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "l",
          "independentLiteral": "52,8 л"
        },
        "boundary": {
          "inputs": {
            "volume": 100,
            "changePct": 100,
            "decorPct": 0
          },
          "expected": {
            "kind": "number",
            "value": 100
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 0
              }
            }
          ],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "l",
          "independentLiteral": "100 л"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 52.8
        },
        "blankField": "volume",
        "domainField": "volume",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "es",
        "path": "/es/hogar/cambio-de-agua-del-acuario/",
        "h1": "Calculadora de cambio de agua del acuario",
        "body": {
          "longDescription": "La cantidad de agua nueva depende del agua real del sistema, no solo de la etiqueta. Sustrato, decoración y nivel de llenado cambian ese volumen. Se resta primero el desplazamiento introducido y después se aplica tu porcentaje de cambio. Así puedes comprobar los recipientes de preparación. El calendario y la proporción dependen de los habitantes y de la calidad del agua; aquí no se prescriben. La dosis del acondicionador sigue las instrucciones y el modo de añadirlo: el volumen repuesto no es automáticamente la base de toda dosis.",
          "howToUse": [
            "Introduce el volumen etiquetado del acuario en litros.",
            "Introduce el porcentaje elegido; la fórmula no determina su idoneidad.",
            "Estima desplazamiento y llenado con agua real; considera aparte el agua del filtro.",
            "Prepara el volumen calculado; dosifica acondicionador según instrucciones y método de aplicación."
          ],
          "howItWorks": "Con V litros, fracción desplazada d% y cambio elegido p%, agua neta N=V×(1−d/100), reposición W=N×p/100 y resto N−W. V>0, 0≤d<100, 0<p≤100. Incluye el filtro y la altura de llenado en tu estimación: no se calculan por separado. La fórmula no prescribe calendario de cambios ni dosis de productos.",
          "example": "Un acuario de 240 litros con un 12 % ocupado por el sustrato contiene 211,2 litros de agua; un cambio del 25 % son 52,8 litros. 100 l sin desplazamiento y cambio 100% dan 100 l de reposición y resto 0; límite aritmético, no recomendación de cambio total.",
          "faq": [
            {
              "q": "¿Qué parte ocupa normalmente el sustrato?",
              "a": "Medir el agua realmente añadida es más fiable que un porcentaje general. El desplazamiento depende de altura, base, porosidad y decoración;5%,12% o 20% son supuestos del caso, no una regla para todo acuario."
            },
            {
              "q": "¿Por qué no dosificar el acondicionador según la etiqueta del acuario?",
              "a": "Sigue las instrucciones del producto concreto. Prime, por ejemplo, distingue tratar agua nueva de añadirlo directamente al acuario y cambia la base del volumen. Este cálculo no verifica cloro, química del agua, producto ni dosificación."
            },
            {
              "q": "¿De qué tamaño debe ser un cambio rutinario?",
              "a": "No hay un porcentaje para todos: importan habitantes, densidad, filtración y pruebas del agua. El 25% por defecto es un ejemplo. Se convierte la proporción elegida a litros sin valorar si el cambio es adecuado para tu sistema."
            },
            {
              "q": "¿Cuenta el volumen del filtro?",
              "a": "El agua del filtro externo y tubos no se añade aparte. Si V se refiere solo al acuario, esos litros quedan fuera. Para tratar agua usa la base exigida por las instrucciones; omitir el filtro no constituye un margen de seguridad garantizado."
            }
          ],
          "disclaimer": "Los resultados son estimaciones orientativas. Verifica los datos de partida antes de tomar decisiones importantes."
        },
        "help": {
          "volume": "Estima volumen considerando llenado y filtro externo; no se miden por separado.",
          "changePct": "Más de 0 hasta 100%; la fracción no prescribe calendario de cuidado ni dosis."
        },
        "sources": [
          "https://www.seachem.com/prime.php",
          "https://www.msdvetmanual.com/multimedia/table/essential-maintenance"
        ],
        "normal": {
          "inputs": {
            "volume": 240,
            "changePct": 25,
            "decorPct": 12
          },
          "expected": {
            "kind": "number",
            "value": 52.8
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 211.2
              }
            }
          ],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "l",
          "independentLiteral": "52,8 л"
        },
        "boundary": {
          "inputs": {
            "volume": 100,
            "changePct": 100,
            "decorPct": 0
          },
          "expected": {
            "kind": "number",
            "value": 100
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 0
              }
            }
          ],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "l",
          "independentLiteral": "100 л"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 52.8
        },
        "blankField": "volume",
        "domainField": "volume",
        "domainInvalid": -1,
        "countFields": []
      }
    ]
  },
  {
    "id": "drip-water-leak",
    "category": "household",
    "defaults": {
      "drops": 10,
      "price": 45,
      "dropMl": 0.05
    },
    "fieldNames": [
      "drops",
      "price",
      "dropMl"
    ],
    "defaultInactive": [],
    "pages": [
      {
        "locale": "ru",
        "path": "/ru/household/protechka-krana/",
        "h1": "Калькулятор потерь воды из подтекающего крана",
        "body": {
          "longDescription": "Одна капля кажется ничем, и в этом вся ловушка: десять капель в минуту — это почти триста литров в год, а сплошная струйка в секунду уносит больше кубометра. Счётчик считает не капли, а кубометры, и потому строка про них стоит рядом с деньгами. Объём капли задаётся отдельно: он зависит от смесителя и от того, срывается капля или уже течёт тонкой струйкой.",
          "howToUse": [
            "Посчитайте капли за пятнадцать секунд и умножьте на четыре — так проще, чем считать целую минуту.",
            "Сохранённые 0,05 мл — пример. Измерьте свой средний объём капли; универсального значения нет.",
            "Если из крана идёт тонкая непрерывная струйка, капли считать бесполезно — там уже литры в час.",
            "Тариф за м³ берите из своего счёта, включая только нужные переменные составляющие."
          ],
          "howItWorks": "Для среднего темпа D капель/мин и выбранного объёма v мл/каплю за сутки теряется L=D×1440×v/1000 литров. Месяц здесь равен 30 суткам, год — 365: 30 L и 365 L. Кубометры за год =365 L/1000; стоимость =эта величина×тариф за м³. D может быть дробным средним темпом; объём капли не измеряется калькулятором.",
          "example": "Десять капель в минуту — это 0,72 литра в сутки и почти 263 литра за год. При 60 каплях/мин и 0,05 мл —4,32 л/сутки и 1576,8 л за 365 дней.",
          "faq": [
            {
              "q": "Правда ли, что капля в секунду — это много?",
              "a": "При введённом объёме 0,05 мл капля в секунду —60 в минуту,4,32 л в сутки и 1576,8 л за 365 дней. Если реальная капля крупнее, потери пропорционально выше. Это расчёт по выбранному объёму, а не измерение вашего крана."
            },
            {
              "q": "Почему объём капли задаётся, а не берётся постоянным?",
              "a": "Капля не имеет универсального объёма: USGS прямо отмечает это и использует 0,25 мл в своём примере. Здесь сохранены 0,05 мл как редактируемое допущение. От 0,03 до 0,08 мл результат меняется в 8/3≈2,67 раза; измерение лучше общего «типичного» числа."
            },
            {
              "q": "Считает ли расчёт водоотведение?",
              "a": "Только если введённый тариф включает его. Суммируйте применимые переменные цены водоснабжения и водоотведения, не прибавляя постоянные платежи повторно. Соотношение тарифов и способ начисления зависят от вашего счёта; удвоение стоимости не универсально."
            },
            {
              "q": "С какого момента стоит чинить кран?",
              "a": "Расчёт показывает расход, но не цену детали и ремонта. Сравните фактические затраты и состояние узла; утверждать, что любая прокладка всегда дешевле кубометра, нельзя. Для струйки измерьте литры за время вместо попытки считать капли."
            }
          ]
        },
        "help": {
          "drops": "Среднее капель в минуту может быть дробным; измерьте объём за время, если течёт струйка.",
          "dropMl": "0,05 мл — сохранённый пример, а не универсальный размер капли."
        },
        "sources": [
          "https://water.usgs.gov/edu/activity-drip.html"
        ],
        "normal": {
          "inputs": {
            "drops": 10,
            "price": 45,
            "dropMl": 0.05
          },
          "expected": {
            "kind": "number",
            "value": 0.72
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 262.8
              }
            },
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 0.2628
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "л",
          "independentLiteral": "0,72 л"
        },
        "boundary": {
          "inputs": {
            "drops": 60,
            "price": 45,
            "dropMl": 0.05
          },
          "expected": {
            "kind": "number",
            "value": 4.32
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 1576.8
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "л",
          "independentLiteral": "4,32 л"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 0.72
        },
        "blankField": "drops",
        "domainField": "drops",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "en",
        "path": "/en/household/dripping-tap-water-loss/",
        "h1": "Dripping tap water loss calculator",
        "body": {
          "longDescription": "A single drop seems like nothing, and that is the trap: ten drops a minute is nearly three hundred litres a year, and a steady drip once a second carries off more than a cubic metre. The meter counts cubic metres rather than drops, which is why that row sits next to the money. The drop volume is entered separately: it depends on the tap and on whether the water is still dripping or already running.",
          "howToUse": [
            "Count the drips over fifteen seconds and multiply by four — easier than timing a whole minute.",
            "The retained 0.05 mL is an example. Measure your average drop volume; there is no universal value.",
            "If the tap runs as a thin continuous stream, counting drips is pointless — that is already litres per hour.",
            "Take the per-m³ tariff from your bill, including only applicable variable components."
          ],
          "howItWorks": "At an average D drips/min and entered drop volume v mL, daily loss L=D×1440×v/1000 litres. The displayed month is 30 days and year 365 days:30 L and 365 L. Annual cubic metres=365 L/1000; annual cost is that amount times the tariff per m³. D may be a fractional average rate; the calculator does not measure the drop.",
          "example": "Ten drips a minute is 0.72 litres a day and nearly 263 litres a year. At 60 drips/min and 0.05 mL:4.32 L/day and 1576.8 L over 365 days.",
          "faq": [
            {
              "q": "Is a drip a second really a lot?",
              "a": "At entered 0.05 mL, one drip per second is 60 per minute,4.32 L/day and 1576.8 L over 365 days. Larger measured drops increase loss proportionally. This is arithmetic for the selected drop, not a measurement of your tap."
            },
            {
              "q": "Why is the drop volume an input rather than a constant?",
              "a": "A drip has no universal volume: USGS states this and uses 0.25 mL in its example. The editable 0.05 mL assumption is retained here. Changing 0.03 to 0.08 mL scales the answer by 8/3≈2.67; measurement beats a general “typical” value."
            },
            {
              "q": "Does this include waste water charges?",
              "a": "Only if the entered tariff includes it. Add the applicable variable water and sewer rates without repeating fixed charges. Rate ratios and billing rules depend on your bill; doubling the cost is not universal."
            },
            {
              "q": "When is it worth fixing?",
              "a": "The calculation gives water loss, not parts or repair prices. Compare actual costs and the fault; no claim that every washer is cheaper than a cubic metre follows. For a stream, measure volume over time instead of counting drips."
            }
          ],
          "disclaimer": "Results are reference estimates. Verify the inputs before making important decisions."
        },
        "help": {
          "drops": "Average drips per minute may be fractional; measure volume over time for a stream.",
          "dropMl": "0.05 mL is the retained example, not a universal drop size."
        },
        "sources": [
          "https://water.usgs.gov/edu/activity-drip.html"
        ],
        "normal": {
          "inputs": {
            "drops": 10,
            "price": 45,
            "dropMl": 0.05
          },
          "expected": {
            "kind": "number",
            "value": 0.72
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 262.8
              }
            },
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 0.2628
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "L",
          "independentLiteral": "0,72 л"
        },
        "boundary": {
          "inputs": {
            "drops": 60,
            "price": 45,
            "dropMl": 0.05
          },
          "expected": {
            "kind": "number",
            "value": 4.32
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 1576.8
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "L",
          "independentLiteral": "4,32 л"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 0.72
        },
        "blankField": "drops",
        "domainField": "drops",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "uk",
        "path": "/uk/pobut/protikannya-krana/",
        "h1": "Калькулятор втрат води з крана, що протікає",
        "body": {
          "longDescription": "Крапля здається дрібницею, доки її не перевести в рік: десять крапель за хвилину дають майже 263 літри за рік. Розрахунок і потрібен саме для цього переходу — від непомітної краплі до цифри, яку видно в рахунку.",
          "howToUse": [
            "Полічіть кількість крапель за хвилину.",
            "Збережені 0,05 мл — приклад. Виміряйте середній об’єм своєї краплі; універсального значення немає.",
            "Прочитайте втрати за добу, місяць і рік."
          ],
          "howItWorks": "За середнього темпу D крапель/хв та введеного об’єму v мл/краплю добова втрата L=D×1440×v/1000 літрів. Місяць тут 30 діб, рік 365:30 L та 365 L. Річні кубометри=365 L/1000; вартість — це число×тариф за м³. D може бути дробним середнім темпом; об’єм краплі калькулятор не вимірює.",
          "example": "Десять крапель за хвилину — це 0,72 літра на добу і майже 263 літри за рік. За 60 крапель/хв та 0,05 мл —4,32 л/добу й 1576,8 л за 365 днів.",
          "faq": [
            {
              "q": "Який об’єм у краплі?",
              "a": "Універсального об’єму краплі з крана немає.0,05 мл — збережене початкове припущення, не вимір. Можна зібрати відому кількість крапель у мірний посуд та поділити об’єм на їх число. USGS для свого прикладу використовує інше значення 0,25 мл."
            },
            {
              "q": "Чи багато це — 263 літри на рік?",
              "a": "263 літри приблизно відповідають річній втраті за 10 крапель/хв та 0,05 мл. За чотири роки це близько 1051 літра. Вартість залежить від вашого повного тарифу, а обсяг — від фактичної краплі; універсальної оцінки ціни ремонту тут немає."
            },
            {
              "q": "Чому кран узагалі крапає?",
              "a": "Причина може бути в ущільненні, картриджі чи іншому вузлі. Вартість і тривалість ремонту залежать від крана та пошкодження; калькулятор їх не оцінює. Втрати води й додаткові наслідки витоку розглядайте окремо."
            },
            {
              "q": "А якщо тече тонким струмком?",
              "a": "Тоді виміряйте об’єм за відомий час: товщина струмка сама не визначає витрату. Наприклад, виміряні 30 л/год дають 262,8 м³ за 365 днів безперервної течії. Цей приклад не прогнозує витрату за діаметром струменя."
            }
          ],
          "disclaimer": "Результати є орієнтовними оцінками. Перед важливими рішеннями перевіряйте дані."
        },
        "help": {
          "drops": "Середні краплі за хвилину можуть бути дробовими; для струмка виміряйте об’єм за час.",
          "dropMl": "0,05 мл — збережений приклад, не універсальний розмір краплі."
        },
        "sources": [
          "https://water.usgs.gov/edu/activity-drip.html"
        ],
        "normal": {
          "inputs": {
            "drops": 10,
            "price": 45,
            "dropMl": 0.05
          },
          "expected": {
            "kind": "number",
            "value": 0.72
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 262.8
              }
            },
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 0.2628
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "л",
          "independentLiteral": "0,72 л"
        },
        "boundary": {
          "inputs": {
            "drops": 60,
            "price": 45,
            "dropMl": 0.05
          },
          "expected": {
            "kind": "number",
            "value": 4.32
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 1576.8
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "л",
          "independentLiteral": "4,32 л"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 0.72
        },
        "blankField": "drops",
        "domainField": "drops",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "de",
        "path": "/de/haushalt/tropfender-wasserhahn/",
        "h1": "Rechner für den Wasserverlust eines tropfenden Hahns",
        "body": {
          "longDescription": "Ein einzelner Tropfen scheint nichts zu sein, und darin liegt die Falle: zehn Tropfen je Minute sind fast dreihundert Liter im Jahr, und ein gleichmäßiges Tropfen im Sekundentakt trägt mehr als einen Kubikmeter fort. Der Zähler zählt Kubikmeter und keine Tropfen, weshalb diese Zeile neben dem Geld steht. Das Tropfenvolumen wird gesondert eingetragen: es hängt vom Hahn ab und davon, ob das Wasser noch tropft oder schon läuft.",
          "howToUse": [
            "Zähle die Tropfen über fünfzehn Sekunden und nimm sie mal vier — einfacher, als eine ganze Minute zu stoppen.",
            "Die erhaltenen 0,05 ml sind ein Beispiel. Mittleres Tropfenvolumen messen; ein allgemeiner Wert existiert nicht.",
            "Läuft der Hahn als dünner durchgehender Strahl, ist das Zählen von Tropfen sinnlos — das sind schon Liter je Stunde.",
            "Tarif je m³ aus eigener Rechnung nehmen, nur zutreffende variable Bestandteile einschließen."
          ],
          "howItWorks": "Bei durchschnittlich D Tropfen/min und eingegebenem Volumen v ml/Tropfen gehen täglich L=D×1440×v/1000 Liter verloren. Der Monat umfasst hier 30 Tage, das Jahr 365:30 L und 365 L. Kubikmeter im Jahr=365 L/1000; Kosten=dieser Wert×Tarif je m³. D darf ein gebrochener mittlerer Takt sein; der Rechner misst keine Tropfen.",
          "example": "Zehn Tropfen je Minute sind 0,72 Liter am Tag und fast 263 Liter im Jahr. 60 Tropfen/min mit 0,05 ml ergeben 4,32 l/Tag und 1576,8 l in 365 Tagen.",
          "faq": [
            {
              "q": "Ist ein Tropfen je Sekunde wirklich viel?",
              "a": "Bei eingegebenen 0,05 ml bedeutet ein Tropfen je Sekunde 60/min,4,32 l/Tag und 1576,8 l in 365 Tagen. Größere gemessene Tropfen erhöhen den Verlust proportional. Das ist Rechnung für deine Annahme, keine Messung am Hahn."
            },
            {
              "q": "Warum ist das Tropfenvolumen eine Eingabe und keine Konstante?",
              "a": "Ein Tropfen hat kein allgemeingültiges Volumen: USGS nennt dies ausdrücklich und verwendet 0,25 ml im eigenen Beispiel. Hier bleiben 0,05 ml als änderbare Annahme erhalten.0,03→0,08 ml skaliert das Ergebnis um 8/3≈2,67; Messen ist besser als ein pauschaler „typischer“ Wert."
            },
            {
              "q": "Ist das Abwasserentgelt enthalten?",
              "a": "Nur wenn der Tarif es enthält. Anwendbare variable Wasser- und Abwasserpreise addieren, feste Gebühren nicht doppelt. Preisverhältnis und Abrechnung hängen von deinem Vertrag ab; eine Verdoppelung gilt nicht allgemein."
            },
            {
              "q": "Wann lohnt sich die Reparatur?",
              "a": "Die Rechnung liefert Verlust, keine Teile- oder Reparaturpreise. Tatsächliche Kosten und Fehler vergleichen; nicht jede Dichtung ist zwingend billiger als ein Kubikmeter. Bei einem Strahl Volumen über Zeit messen statt Tropfen zählen."
            }
          ],
          "disclaimer": "Die Ergebnisse sind Orientierungswerte. Prüfe die Eingaben vor wichtigen Entscheidungen."
        },
        "help": {
          "drops": "Mittlere Tropfen pro Minute dürfen gebrochen sein; bei Strahl Volumen über Zeit messen.",
          "dropMl": "0,05 ml ist das erhaltene Beispiel, kein allgemeines Tropfenvolumen."
        },
        "sources": [
          "https://water.usgs.gov/edu/activity-drip.html"
        ],
        "normal": {
          "inputs": {
            "drops": 10,
            "price": 45,
            "dropMl": 0.05
          },
          "expected": {
            "kind": "number",
            "value": 0.72
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 262.8
              }
            },
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 0.2628
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "l",
          "independentLiteral": "0,72 л"
        },
        "boundary": {
          "inputs": {
            "drops": 60,
            "price": 45,
            "dropMl": 0.05
          },
          "expected": {
            "kind": "number",
            "value": 4.32
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 1576.8
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "l",
          "independentLiteral": "4,32 л"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 0.72
        },
        "blankField": "drops",
        "domainField": "drops",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "es",
        "path": "/es/hogar/perdida-por-grifo-que-gotea/",
        "h1": "Calculadora de pérdida por grifo que gotea",
        "body": {
          "longDescription": "Una sola gota parece nada, y esa es la trampa: diez gotas por minuto son casi trescientos litros al año, y un goteo constante de una por segundo se lleva más de un metro cúbico. El contador cuenta metros cúbicos y no gotas, y por eso esa fila está junto al dinero. El volumen de la gota se introduce aparte: depende del grifo y de si el agua todavía gotea o ya corre.",
          "howToUse": [
            "Cuenta las gotas durante quince segundos y multiplica por cuatro: es más fácil que cronometrar un minuto entero.",
            "El 0,05 ml conservado es un ejemplo. Mide el volumen medio de tu gota; no hay un valor universal.",
            "Si el grifo corre como un hilo continuo, contar gotas no sirve: eso ya son litros por hora.",
            "Toma la tarifa por m³ de tu factura con solo los componentes variables aplicables."
          ],
          "howItWorks": "Para un ritmo medio D gotas/min y volumen introducido v ml/gota, pérdida diaria L=D×1440×v/1000 litros. El mes representa 30 días y el año 365:30 L y 365 L. Metros cúbicos anuales=365 L/1000; coste=esa cantidad×tarifa por m³. D puede ser una tasa media fraccionaria; la calculadora no mide la gota.",
          "example": "Diez gotas por minuto son 0,72 litros al día y casi 263 litros al año. 60 gotas/min a 0,05 ml dan 4,32 l/día y 1576,8 l en 365 días.",
          "faq": [
            {
              "q": "¿De verdad es mucho una gota por segundo?",
              "a": "Con 0,05 ml introducidos, una gota por segundo son 60/min,4,32 l/día y 1576,8 l en 365 días. Gotas medidas mayores aumentan la pérdida proporcionalmente. Es aritmética del volumen elegido, no una medición del grifo."
            },
            {
              "q": "¿Por qué el volumen de la gota es un dato y no una constante?",
              "a": "No existe un volumen universal: USGS lo aclara y usa 0,25 ml en su ejemplo. Aquí se conserva 0,05 ml como supuesto editable. Pasar de 0,03 a 0,08 ml multiplica el resultado por 8/3≈2,67; medir supera una cifra “típica” general."
            },
            {
              "q": "¿Incluye el saneamiento?",
              "a": "Solo si la tarifa lo incluye. Suma las tarifas variables aplicables de agua y saneamiento sin repetir cargos fijos. Su relación y facturación dependen de tu recibo; duplicar el coste no es universal."
            },
            {
              "q": "¿Cuándo merece la pena arreglarlo?",
              "a": "El cálculo da pérdida de agua, no precios de piezas o reparación. Compara costes reales y avería; no toda junta cuesta necesariamente menos que un metro cúbico. Para un hilo, mide volumen por tiempo en vez de contar gotas."
            }
          ],
          "disclaimer": "Los resultados son estimaciones orientativas. Verifica los datos de partida antes de tomar decisiones importantes."
        },
        "help": {
          "drops": "Las gotas medias por minuto pueden ser fraccionarias; para un hilo mide volumen por tiempo.",
          "dropMl": "0,05 ml es el ejemplo conservado, no tamaño universal de gota."
        },
        "sources": [
          "https://water.usgs.gov/edu/activity-drip.html"
        ],
        "normal": {
          "inputs": {
            "drops": 10,
            "price": 45,
            "dropMl": 0.05
          },
          "expected": {
            "kind": "number",
            "value": 0.72
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 262.8
              }
            },
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 0.2628
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "l",
          "independentLiteral": "0,72 л"
        },
        "boundary": {
          "inputs": {
            "drops": 60,
            "price": 45,
            "dropMl": 0.05
          },
          "expected": {
            "kind": "number",
            "value": 4.32
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 1576.8
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "l",
          "independentLiteral": "4,32 л"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 0.72
        },
        "blankField": "drops",
        "domainField": "drops",
        "domainInvalid": -1,
        "countFields": []
      }
    ]
  },
  {
    "id": "electricity-usage",
    "category": "household",
    "defaults": {
      "power": 2000,
      "powerUnit": "w",
      "hoursPerDay": 3,
      "days": 30,
      "tariff": 0
    },
    "fieldNames": [
      "power",
      "powerUnit",
      "hoursPerDay",
      "days",
      "tariff"
    ],
    "defaultInactive": [],
    "pages": [
      {
        "locale": "ru",
        "path": "/ru/household/electricity-usage/",
        "h1": "Калькулятор расхода электроэнергии",
        "body": {
          "longDescription": "Приводит паспортную мощность прибора к киловаттам один раз, а затем умножает на часы работы и число дней. Ватты и киловатт-часы легко перепутать — первое это мощность, второе энергия, накопленная за время, — поэтому перевод сделан одним видимым шагом. Укажите тариф, и появится стоимость.",
          "howToUse": [
            "Возьмите мощность выбранного режима с наклейки или измерьте среднюю мощность за свои часы работы.",
            "Укажите, сколько часов в сутки он работает и за сколько дней считаем.",
            "Добавьте тариф, чтобы увидеть стоимость."
          ],
          "howItWorks": "Мощность P в ваттах делится на 1000; введённые киловатты остаются без перевода. Суточная энергия=PкВт×h, энергия периода=PкВт×h×d, где 0≤h≤24 и d — положительное целое число дней. Строка за 30 дней всегда использует 30, независимо от выбранного периода. Стоимость добавляется только при тарифе>0; пустой тариф и 0 оставляют её скрытой. Модель предполагает указанную среднюю мощность в течение h часов.",
          "example": "Обогреватель 2000 Вт по 3 часа в сутки за 30 дней съедает 2 × 3 × 30 = 180 кВт·ч. При нуле часов энергия и стоимость равны 0; пустой тариф скрывает стоимость, а дробное число дней отклоняется.",
          "faq": [
            {
              "q": "Откуда взять тариф?",
              "a": "Из квитанции за электроэнергию, там указана цена за киловатт-час. Многотарифные счётчики здесь не учитываются, считайте по нужной зоне отдельно."
            },
            {
              "q": "Паспортная мощность — это реальное потребление?",
              "a": "Не обязательно. Шильдик может задавать номинальную мощность или несколько режимов, а не среднюю энергию за сутки. Для техники с циклами используйте измеренные кВт·ч или фактическое время и мощность активного режима."
            },
            {
              "q": "Чем ватт отличается от киловатт-часа?",
              "a": "Ватт — это скорость расхода, а киловатт-час — энергия, накопленная за время. Прибор на 1000 Вт за один час съедает ровно 1 кВт·ч."
            },
            {
              "q": "Обязательно ли указывать тариф?",
              "a": "Нет. Без него вы всё равно получите потребление в киловатт-часах, просто без строки стоимости."
            }
          ]
        },
        "help": {
          "days": "Положительное целое число дней; строка «За 30 дней» всегда использует 30.",
          "tariff": "Необязательно: пусто или 0 скрывает стоимость. Введите цену за кВт·ч в выбранной денежной единице, без конвертации."
        },
        "sources": [
          "https://www.pubs.ext.vt.edu/2901/2901-9014/2901-9014.html"
        ],
        "normal": {
          "inputs": {
            "power": 2000,
            "powerUnit": "w",
            "hoursPerDay": 3,
            "days": 30,
            "tariff": 0
          },
          "expected": {
            "kind": "number",
            "value": 180
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 6
              }
            },
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 180
              }
            }
          ],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "кВт·ч",
          "independentLiteral": "180,00 кВт·ч"
        },
        "boundary": {
          "inputs": {
            "power": 2000,
            "powerUnit": "w",
            "hoursPerDay": 0,
            "days": 30,
            "tariff": 2
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
                "value": 0
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "кВт·ч",
          "independentLiteral": "0,00 кВт·ч"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 180
        },
        "blankField": "power",
        "domainField": "power",
        "domainInvalid": -1,
        "countFields": [
          "days"
        ]
      },
      {
        "locale": "en",
        "path": "/en/household/electricity-usage-calculator/",
        "h1": "Electricity usage calculator",
        "body": {
          "longDescription": "Converts an appliance rating into kilowatts once, then multiplies by the hours it runs and the days you are counting. Watts and kilowatt-hours are easy to confuse — one is power, the other is energy accumulated over time — so the conversion happens in one visible step. Add your tariff and the cost follows.",
          "howToUse": [
            "Use the selected operating power from the label or measure average power over your operating hours.",
            "Enter how many hours a day it runs and over how many days.",
            "Add your tariff for the cost."
          ],
          "howItWorks": "Divide watts P by 1000; entered kilowatts need no conversion. Daily energy=P_kW×h and period energy=P_kW×h×d, with 0≤h≤24 and positive whole days d. The 30-day row always uses 30, independently of the chosen period. Costs appear only for a positive tariff; blank or 0 omits them. The model holds the entered average power for h hours.",
          "example": "A 2000 W heater for 3 hours a day over 30 days uses 2 × 3 × 30 = 180 kWh. Zero hours gives zero energy and zero cost; a blank tariff omits costs, while fractional days are rejected.",
          "faq": [
            {
              "q": "Where do I find my tariff?",
              "a": "On your electricity bill, as a price per kilowatt-hour. Multi-rate meters are not modelled, so work out each rate band separately."
            },
            {
              "q": "Is the label power what it actually draws?",
              "a": "Not necessarily. A label may state rated power or several operating settings, rather than average daily energy. For cycling appliances use measured kWh or actual active time and power."
            },
            {
              "q": "What is the difference between a watt and a kilowatt-hour?",
              "a": "A watt is a rate of use; a kilowatt-hour is the energy that rate accumulates over time. A 1000 W device running one hour uses exactly 1 kWh."
            },
            {
              "q": "Is the tariff required?",
              "a": "No. Without it you still get the consumption in kilowatt-hours, just no cost line."
            }
          ],
          "disclaimer": "Results are reference estimates. Verify the inputs before making important decisions."
        },
        "help": {
          "days": "Positive whole days; the “Over 30 days” row always uses 30.",
          "tariff": "Optional: blank or 0 omits cost. Enter price per kWh in the displayed currency; no exchange conversion."
        },
        "sources": [
          "https://www.pubs.ext.vt.edu/2901/2901-9014/2901-9014.html"
        ],
        "normal": {
          "inputs": {
            "power": 2000,
            "powerUnit": "w",
            "hoursPerDay": 3,
            "days": 30,
            "tariff": 0
          },
          "expected": {
            "kind": "number",
            "value": 180
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 6
              }
            },
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 180
              }
            }
          ],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "kWh",
          "independentLiteral": "180,00 кВт·ч"
        },
        "boundary": {
          "inputs": {
            "power": 2000,
            "powerUnit": "w",
            "hoursPerDay": 0,
            "days": 30,
            "tariff": 2
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
                "value": 0
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "kWh",
          "independentLiteral": "0,00 кВт·ч"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 180
        },
        "blankField": "power",
        "domainField": "power",
        "domainInvalid": -1,
        "countFields": [
          "days"
        ]
      },
      {
        "locale": "uk",
        "path": "/uk/pobut/vytrata-elektroenergiyi/",
        "h1": "Калькулятор витрати електроенергії",
        "body": {
          "longDescription": "Витрата електроенергії рахується як потужність у кіловатах, помножена на години роботи. Головна складність не в арифметиці, а в тому, що прилад рідко працює постійно: холодильник вмикається циклами, а обігрівач із термостатом гріє лише частину часу.",
          "howToUse": [
            "Візьміть потужність обраного режиму зі шильдика або виміряйте середню за свої години роботи.",
            "Введіть кількість годин фактичної роботи на добу.",
            "Введіть кількість днів і тариф."
          ],
          "howItWorks": "Вати P діляться на 1000; введені кіловати не переводяться. Добова енергія=PкВт×h, енергія періоду=PкВт×h×d, де 0≤h≤24, а d — додатне ціле число днів. Рядок за 30 днів завжди використовує 30, незалежно від обраного періоду. Вартість з’являється лише за тарифу>0; порожній тариф і 0 приховують її. Модель тримає введену середню потужність протягом h годин.",
          "example": "Обігрівач 2000 Вт по 3 години на добу за 30 днів з’їдає 2 × 3 × 30 = 180 кВт·год. За нуля годин енергія й вартість 0; порожній тариф приховує вартість, дробові дні відхиляються.",
          "faq": [
            {
              "q": "Скільки годин ставити для холодильника?",
              "a": "Універсальної частки немає. Компресор працює циклами, які залежать від моделі й умов. Річні кВт·год з етикетки, поділені на 365, дають оцінку середнього дня за умовами тесту; ватметр показує фактичний період."
            },
            {
              "q": "Чи враховано режим очікування?",
              "a": "Очікування окремо не додається. Для його оцінки порахуйте виміряну потужність очікування та її години окремим запуском. Якщо введена середня потужність уже включає очікування, вдруге його не додавайте."
            },
            {
              "q": "Чому фактичний рахунок відрізняється?",
              "a": "Через режими, цикли, умови роботи та інші прилади. Потужність на шильдику не обов’язково є середньою чи універсальним максимумом. Один постійний тариф також не відтворює всі збори та часові зони рахунку."
            },
            {
              "q": "Як виміряти реальне споживання?",
              "a": "Розетковим ватметром: він рахує саме кіловат-години з урахуванням циклів і очікування. Це надійніше за будь-який розрахунок за паспортом."
            }
          ],
          "disclaimer": "Результати є орієнтовними оцінками. Перед важливими рішеннями перевіряйте дані."
        },
        "help": {
          "days": "Додатне ціле число днів; рядок «За 30 днів» завжди використовує 30.",
          "tariff": "Необов’язково: порожньо або 0 приховує вартість. Ціна за кВт·год у показаній валюті, без обміну."
        },
        "sources": [
          "https://www.pubs.ext.vt.edu/2901/2901-9014/2901-9014.html"
        ],
        "normal": {
          "inputs": {
            "power": 2000,
            "powerUnit": "w",
            "hoursPerDay": 3,
            "days": 30,
            "tariff": 0
          },
          "expected": {
            "kind": "number",
            "value": 180
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 6
              }
            },
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 180
              }
            }
          ],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "кВт·год",
          "independentLiteral": "180,00 кВт·ч"
        },
        "boundary": {
          "inputs": {
            "power": 2000,
            "powerUnit": "w",
            "hoursPerDay": 0,
            "days": 30,
            "tariff": 2
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
                "value": 0
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "кВт·год",
          "independentLiteral": "0,00 кВт·ч"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 180
        },
        "blankField": "power",
        "domainField": "power",
        "domainInvalid": -1,
        "countFields": [
          "days"
        ]
      },
      {
        "locale": "de",
        "path": "/de/haushalt/stromverbrauch-rechner/",
        "h1": "Rechner für den Stromverbrauch",
        "body": {
          "longDescription": "Rechnet die Leistungsangabe eines Geräts einmal in Kilowatt um und multipliziert sie danach mit den Betriebsstunden und den gezählten Tagen. Watt und Kilowattstunden lassen sich leicht verwechseln — das eine ist Leistung, das andere über die Zeit angesammelte Energie —, deshalb geschieht die Umrechnung in einem sichtbaren Schritt. Trage deinen Tarif ein, und die Kosten folgen.",
          "howToUse": [
            "Leistung der gewählten Stufe vom Typenschild oder gemessene mittlere Betriebsleistung verwenden.",
            "Trage ein, wie viele Stunden am Tag es läuft und über wie viele Tage.",
            "Ergänze deinen Tarif für die Kosten."
          ],
          "howItWorks": "Watt P werden durch 1000 geteilt; eingegebene Kilowatt bleiben unverändert. Tagesenergie=P_kW×h, Periodenenergie=P_kW×h×d mit 0≤h≤24 und positiver ganzer Tageszahl d. Die 30-Tage-Zeile verwendet immer 30, unabhängig vom gewählten Zeitraum. Kosten erscheinen nur bei positivem Tarif; leer oder 0 blendet sie aus. Für h Stunden wird die eingegebene mittlere Leistung angenommen.",
          "example": "Ein Heizgerät mit 2000 W über 3 Stunden am Tag an 30 Tagen verbraucht 2 × 3 × 30 = 180 kWh. Bei null Stunden sind Energie und Kosten 0; leerer Tarif blendet Kosten aus, gebrochene Tageszahlen werden abgelehnt.",
          "faq": [
            {
              "q": "Wo finde ich meinen Tarif?",
              "a": "Auf deiner Stromabrechnung, als Preis je Kilowattstunde. Zweitarifzähler sind nicht abgebildet, rechne die Tarifzeiten also getrennt."
            },
            {
              "q": "Ist die Leistung vom Typenschild das, was tatsächlich fließt?",
              "a": "Nicht zwingend. Das Typenschild kann Nennleistung oder mehrere Betriebsstufen nennen, statt des mittleren Tagesverbrauchs. Bei taktenden Geräten gemessene kWh oder tatsächliche aktive Dauer und Leistung nutzen."
            },
            {
              "q": "Was ist der Unterschied zwischen Watt und Kilowattstunde?",
              "a": "Watt ist eine Leistung; eine Kilowattstunde ist die Energie, die diese Leistung über die Zeit ansammelt. Ein Gerät mit 1000 W verbraucht in einer Stunde genau 1 kWh."
            },
            {
              "q": "Ist der Tarif nötig?",
              "a": "Nein. Ohne ihn bekommst du weiterhin den Verbrauch in Kilowattstunden, nur ohne die Zeile mit den Kosten."
            }
          ],
          "disclaimer": "Die Ergebnisse sind Orientierungswerte. Prüfe die Eingaben vor wichtigen Entscheidungen."
        },
        "help": {
          "days": "Positive ganze Tageszahl; die 30-Tage-Zeile verwendet immer 30.",
          "tariff": "Optional: leer oder 0 blendet Kosten aus. Preis je kWh in angezeigter Währung, ohne Umrechnung."
        },
        "sources": [
          "https://www.pubs.ext.vt.edu/2901/2901-9014/2901-9014.html"
        ],
        "normal": {
          "inputs": {
            "power": 2000,
            "powerUnit": "w",
            "hoursPerDay": 3,
            "days": 30,
            "tariff": 0
          },
          "expected": {
            "kind": "number",
            "value": 180
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 6
              }
            },
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 180
              }
            }
          ],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "kWh",
          "independentLiteral": "180,00 кВт·ч"
        },
        "boundary": {
          "inputs": {
            "power": 2000,
            "powerUnit": "w",
            "hoursPerDay": 0,
            "days": 30,
            "tariff": 2
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
                "value": 0
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "kWh",
          "independentLiteral": "0,00 кВт·ч"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 180
        },
        "blankField": "power",
        "domainField": "power",
        "domainInvalid": -1,
        "countFields": [
          "days"
        ]
      },
      {
        "locale": "es",
        "path": "/es/hogar/consumo-electrico/",
        "h1": "Calculadora de consumo eléctrico",
        "body": {
          "longDescription": "Convierte la potencia nominal de un aparato en kilovatios una sola vez y la multiplica después por las horas que funciona y los días que cuentas. Los vatios y los kilovatios hora se confunden con facilidad —uno es potencia y el otro, energía acumulada en el tiempo—, así que la conversión ocurre en un paso visible. Añade tu tarifa y sale el coste.",
          "howToUse": [
            "Usa la potencia del modo elegido de la placa o mide la potencia media durante tus horas de uso.",
            "Introduce cuántas horas al día funciona y durante cuántos días.",
            "Añade tu tarifa para obtener el coste."
          ],
          "howItWorks": "Los vatios P se dividen entre 1000; los kilovatios no se convierten. Energía diaria=P_kW×h y del periodo=P_kW×h×d, con 0≤h≤24 y días enteros positivos d. La fila de 30 días siempre usa 30, sea cual sea el periodo elegido. Los costes aparecen solo con tarifa positiva; en blanco o 0 se omiten. Se supone la potencia media introducida durante h horas.",
          "example": "Un calefactor de 2000 W durante 3 horas al día a lo largo de 30 días consume 2 × 3 × 30 = 180 kWh. Con cero horas, energía y coste son 0; tarifa en blanco omite costes y días fraccionarios se rechazan.",
          "faq": [
            {
              "q": "¿Dónde encuentro mi tarifa?",
              "a": "En tu factura de la luz, como precio por kilovatio hora. Los contadores con discriminación horaria no se modelan, así que calcula cada tramo por separado."
            },
            {
              "q": "¿La potencia de la etiqueta es lo que consume de verdad?",
              "a": "No necesariamente. La placa puede indicar potencia nominal o varios modos, en vez de energía media diaria. Para equipos que funcionan por ciclos usa kWh medidos o tiempo y potencia activos reales."
            },
            {
              "q": "¿Qué diferencia hay entre un vatio y un kilovatio hora?",
              "a": "Un vatio es un ritmo de consumo; un kilovatio hora es la energía que ese ritmo acumula en el tiempo. Un aparato de 1000 W en marcha una hora consume exactamente 1 kWh."
            },
            {
              "q": "¿La tarifa es obligatoria?",
              "a": "No. Sin ella obtienes igualmente el consumo en kilovatios hora, solo que sin línea de coste."
            }
          ],
          "disclaimer": "Los resultados son estimaciones orientativas. Verifica los datos de partida antes de tomar decisiones importantes."
        },
        "help": {
          "days": "Días enteros positivos; la fila de 30 días siempre usa 30.",
          "tariff": "Opcional: blanco o 0 omite costes. Precio por kWh en moneda mostrada, sin conversión."
        },
        "sources": [
          "https://www.pubs.ext.vt.edu/2901/2901-9014/2901-9014.html"
        ],
        "normal": {
          "inputs": {
            "power": 2000,
            "powerUnit": "w",
            "hoursPerDay": 3,
            "days": 30,
            "tariff": 0
          },
          "expected": {
            "kind": "number",
            "value": 180
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 6
              }
            },
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 180
              }
            }
          ],
          "inactive": [],
          "rowCount": 3,
          "primaryUnit": "kWh",
          "independentLiteral": "180,00 кВт·ч"
        },
        "boundary": {
          "inputs": {
            "power": 2000,
            "powerUnit": "w",
            "hoursPerDay": 0,
            "days": 30,
            "tariff": 2
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
                "value": 0
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "kWh",
          "independentLiteral": "0,00 кВт·ч"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 180
        },
        "blankField": "power",
        "domainField": "power",
        "domainInvalid": -1,
        "countFields": [
          "days"
        ]
      }
    ]
  },
  {
    "id": "generator-fuel",
    "category": "household",
    "defaults": {
      "load": 5,
      "sfc": 0.3,
      "hours": 8,
      "price": 0
    },
    "fieldNames": [
      "load",
      "sfc",
      "hours",
      "price"
    ],
    "defaultInactive": [],
    "pages": [
      {
        "locale": "ru",
        "path": "/ru/household/generator-fuel/",
        "h1": "Калькулятор расхода топлива генератора",
        "body": {
          "longDescription": "Оценивает топливо для выбранной постоянной нагрузки: нагрузка в кВт умножается на удельный расход и часы. Сохранённые 0,3 л/(кВт·ч) — входной пример, а не универсальная характеристика дизеля или бензинового генератора. Данные производителя или измеренный расход должны соответствовать вашей нагрузке. Необязательная цена добавляет стоимость рассчитанного объёма; прогрев и холостой ход требуют отдельных данных.",
          "howToUse": [
            "Введите фактическую нагрузку в киловаттах, а не номинал генератора.",
            "Укажите удельный расход из паспорта машины.",
            "Задайте время работы и, если нужно, цену топлива."
          ],
          "howItWorks": "При постоянной нагрузке P кВт и выбранном удельном расходе s л/(кВт·ч) расход в час F=P×s, за t часов — F×t. Цена за литр умножает этот объём; пустая цена или 0 скрывает стоимость. P,s,t>0, цена≥0. Для меняющейся нагрузки считайте участки отдельно с подходящим s; нулевой электрической нагрузке эта линейная модель не назначает нулевой расход холостого хода.",
          "example": "Генератор под нагрузкой 5 кВт при расходе 0,3 л/кВт·ч за восемь часов сожжёт 12 литров — при цене 60 ₽ это 720 ₽. За 0,5 кВт×0,4 л/(кВт·ч)×2,5 ч получается 0,5 л; цена 0 скрывает стоимость.",
          "faq": [
            {
              "q": "Откуда взять удельный расход?",
              "a": "Из данных именно вашей машины при нужной нагрузке. Если паспорт даёт литры в час, разделите их на вырабатываемые кВт, чтобы получить л/(кВт·ч). Сохранённые 0,3 — пример, который нужно заменить подходящим значением."
            },
            {
              "q": "Нагрузку или номинальную мощность вводить?",
              "a": "Фактическую электрическую нагрузку, согласованную с удельным расходом. Номинал обозначает возможности машины, а не текущую выработку. Из линейной формулы нельзя определить топливо холостого хода."
            },
            {
              "q": "Почему расход на малой нагрузке невыгоден?",
              "a": "Двигатель расходует топливо и на собственную работу, поэтому л/(кВт·ч) могут меняться с нагрузкой. Размер изменения зависит от машины: берите её кривую, а не общий множитель 1,5–2."
            },
            {
              "q": "Учитывается ли прогрев и холостой ход?",
              "a": "Нет. Холостой ход считайте отдельно по измеренным литрам в час или данным производителя. Простое увеличение часов при прежней нагрузке не воспроизводит другой режим и может завысить или занизить результат."
            }
          ]
        },
        "help": {
          "sfc": "Более 0: литры за час ÷ фактические кВт. Сверьте режим с данными машины; 0,3 — пример.",
          "price": "Необязательно: пусто или 0 скрывает стоимость; цена за литр, без обмена валюты."
        },
        "sources": [
          "https://emc.cat.com/n/api/pubdirect?media_string_id=LEHE1468-"
        ],
        "normal": {
          "inputs": {
            "load": 5,
            "sfc": 0.3,
            "hours": 8,
            "price": 60
          },
          "expected": {
            "kind": "number",
            "value": 12
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 1.5
              }
            },
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 720
              }
            }
          ],
          "inactive": [],
          "rowCount": 2,
          "primaryUnit": "л",
          "independentLiteral": "12,00 л"
        },
        "boundary": {
          "inputs": {
            "load": 0.5,
            "sfc": 0.4,
            "hours": 2.5,
            "price": 0
          },
          "expected": {
            "kind": "number",
            "value": 0.5
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 0.2
              }
            }
          ],
          "inactive": [],
          "rowCount": 1,
          "primaryUnit": "л",
          "independentLiteral": "0,50 л"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 12
        },
        "blankField": "load",
        "domainField": "load",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "en",
        "path": "/en/household/generator-fuel-calculator/",
        "h1": "Generator fuel calculator",
        "body": {
          "longDescription": "Estimate fuel for a selected constant load by multiplying kW, specific consumption and operating hours. The retained 0.3 L/(kWh) is an input example, not a universal diesel or petrol rating. Manufacturer data or measured consumption must match your load. An optional price adds the cost of that volume; warm-up and idling need separate data.",
          "howToUse": [
            "Enter the actual load in kilowatts, not the generator rating.",
            "Give the specific consumption from the machine data sheet.",
            "Set the running time and, if you need it, the fuel price."
          ],
          "howItWorks": "At constant load P kW and entered specific use s L/(kWh), hourly fuel F=P×s and total fuel F×t for t hours. Price per litre multiplies that volume; blank or 0 omits cost. P,s,t>0 and price≥0. Split changing loads into stages with suitable s; this linear model cannot infer idle fuel from zero electrical load.",
          "example": "A generator under a 5 kW load at 0.3 L/kWh burns 12 litres over eight hours — at 60 per litre that is 720. 0.5 kW×0.4 L/(kWh)×2.5 h gives 0.5 L; price 0 omits cost.",
          "faq": [
            {
              "q": "Where does the specific consumption come from?",
              "a": "From your machine’s data at the relevant load. If it gives litres per hour, divide by delivered kW to obtain L/(kWh). The retained 0.3 is an example to replace with a suitable value."
            },
            {
              "q": "Do I enter the load or the rated power?",
              "a": "Actual electrical load, consistent with the specific consumption. The rating states machine capacity, not current output. Idle fuel cannot be inferred from this linear formula."
            },
            {
              "q": "Why is low load inefficient?",
              "a": "The engine also consumes fuel for its own operation, so L/(kWh) can change with load. The size of the change is machine-specific; use its curve rather than a universal 1.5–2 multiplier."
            },
            {
              "q": "Are warm-up and idling included?",
              "a": "No. Calculate idling separately using measured litres per hour or manufacturer data. Simply extending hours at the same load does not reproduce a different operating mode and can overstate or understate fuel."
            }
          ],
          "disclaimer": "Results are reference estimates. Verify the inputs before making important decisions."
        },
        "help": {
          "sfc": "Above 0: litres per hour ÷ actual kW. Match the machine’s load data; 0.3 is an example.",
          "price": "Optional: blank or 0 omits cost; price per litre, no exchange conversion."
        },
        "sources": [
          "https://emc.cat.com/n/api/pubdirect?media_string_id=LEHE1468-"
        ],
        "normal": {
          "inputs": {
            "load": 5,
            "sfc": 0.3,
            "hours": 8,
            "price": 60
          },
          "expected": {
            "kind": "number",
            "value": 12
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 1.5
              }
            },
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 720
              }
            }
          ],
          "inactive": [],
          "rowCount": 2,
          "primaryUnit": "L",
          "independentLiteral": "12,00 л"
        },
        "boundary": {
          "inputs": {
            "load": 0.5,
            "sfc": 0.4,
            "hours": 2.5,
            "price": 0
          },
          "expected": {
            "kind": "number",
            "value": 0.5
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 0.2
              }
            }
          ],
          "inactive": [],
          "rowCount": 1,
          "primaryUnit": "L",
          "independentLiteral": "0,50 л"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 12
        },
        "blankField": "load",
        "domainField": "load",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "uk",
        "path": "/uk/pobut/vytrata-palnoho-heneratora/",
        "h1": "Калькулятор витрати пального генератора",
        "body": {
          "longDescription": "Оцінює пальне для обраного сталого навантаження: кіловати множаться на питому витрату й години. Збережені 0,3 л/(кВт·год) — вхідний приклад, а не загальна характеристика дизельного чи бензинового генератора. Паспортні дані або виміряна витрата мають відповідати вашому режиму. Необов’язкова ціна додає вартість об’єму; прогрів і холостий хід потребують окремих даних.",
          "howToUse": [
            "Введіть фактичне навантаження в кіловатах.",
            "Введіть питому витрату — літрів на кіловат-годину.",
            "Введіть час роботи й ціну палива."
          ],
          "howItWorks": "За сталої потужності P кВт і обраної питомої витрати s л/(кВт·год) витрата за годину F=P×s, за t годин — F×t. Ціна за літр множить цей об’єм; порожня ціна чи 0 приховує вартість. P,s,t>0, ціна≥0. Змінне навантаження рахуйте ділянками з відповідним s; модель не визначає витрату холостого ходу за нульового електричного навантаження.",
          "example": "Генератор під навантаженням 5 кВт за витрати 0,3 л/кВт·год за вісім годин спалить 12 літрів. 0,5 кВт×0,4 л/(кВт·год)×2,5 год дає 0,5 л; ціна 0 приховує вартість.",
          "faq": [
            {
              "q": "Яку питому витрату брати?",
              "a": "З даних саме вашої машини за потрібного навантаження. Якщо зазначено літри за годину, поділіть їх на вироблені кВт, щоб отримати л/(кВт·год). Збережені 0,3 — приклад для заміни відповідним значенням."
            },
            {
              "q": "Чому не рахувати від максимальної потужності?",
              "a": "Фактичне електричне навантаження, узгоджене з питомою витратою. Номінал описує можливості машини, а не поточну вироблену потужність. Паливо холостого ходу ця лінійна формула не визначає."
            },
            {
              "q": "Яке навантаження оптимальне?",
              "a": "Його задають характеристики виробника й вимоги вашої роботи. Цей калькулятор не оцінює ресурс або перегрів і не оголошує 50–75% оптимумом для всіх машин. Перевіряйте допустиме тривале навантаження конкретної моделі."
            },
            {
              "q": "Скільки паливо можна зберігати?",
              "a": "Строк залежить від виду пального, складу, тари й умов; калькулятор його не визначає. Дотримуйтеся інструкцій постачальника пального та виробника генератора. Універсальний строк 3–6 місяців тут не встановлюється."
            }
          ],
          "disclaimer": "Результати є орієнтовними оцінками. Перед важливими рішеннями перевіряйте дані."
        },
        "help": {
          "sfc": "Понад 0: літри за годину ÷ фактичні кВт. Узгодьте режим з даними машини; 0,3 — приклад.",
          "price": "Необов’язково: порожньо або 0 приховує вартість; ціна за літр, без обміну валют."
        },
        "sources": [
          "https://emc.cat.com/n/api/pubdirect?media_string_id=LEHE1468-"
        ],
        "normal": {
          "inputs": {
            "load": 5,
            "sfc": 0.3,
            "hours": 8,
            "price": 0
          },
          "expected": {
            "kind": "number",
            "value": 12
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 1.5
              }
            }
          ],
          "inactive": [],
          "rowCount": 1,
          "primaryUnit": "л",
          "independentLiteral": "12,00 л"
        },
        "boundary": {
          "inputs": {
            "load": 0.5,
            "sfc": 0.4,
            "hours": 2.5,
            "price": 0
          },
          "expected": {
            "kind": "number",
            "value": 0.5
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 0.2
              }
            }
          ],
          "inactive": [],
          "rowCount": 1,
          "primaryUnit": "л",
          "independentLiteral": "0,50 л"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 12
        },
        "blankField": "load",
        "domainField": "load",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "de",
        "path": "/de/haushalt/stromerzeuger-verbrauch/",
        "h1": "Rechner für den Kraftstoffverbrauch eines Stromerzeugers",
        "body": {
          "longDescription": "Schätzt Kraftstoff bei gewählter konstanter Last aus kW, spezifischem Verbrauch und Stunden. Die erhaltenen 0,3 l/(kWh) sind ein Eingabebeispiel, kein allgemeiner Diesel- oder Benzinwert. Herstellerdaten oder Messungen müssen zur Last passen. Ein optionaler Preis liefert die Mengenkosten; Aufwärmen und Leerlauf brauchen eigene Verbrauchsdaten.",
          "howToUse": [
            "Trage die tatsächliche Last in Kilowatt ein, nicht die Nennleistung des Erzeugers.",
            "Gib den spezifischen Verbrauch aus dem Datenblatt der Maschine an.",
            "Setze die Laufzeit und, wenn du sie brauchst, den Kraftstoffpreis."
          ],
          "howItWorks": "Bei konstanter Last P kW und eingegebenem Verbrauch s l/(kWh) gilt stündlich F=P×s und für t Stunden F×t. Der Literpreis multipliziert diese Menge; leer oder 0 blendet Kosten aus. P,s,t>0 und Preis≥0. Wechselnde Lasten in Abschnitten mit passendem s rechnen; aus elektrischer Nulllast lässt diese lineare Rechnung keinen Leerlaufverbrauch ableiten.",
          "example": "Ein Stromerzeuger unter 5 kW Last bei 0,3 l/kWh verbrennt über acht Stunden 12 Liter — bei 1,60 € je Liter also 19,20 €. 0,5 kW×0,4 l/(kWh)×2,5 h ergeben 0,5 l; Preis 0 blendet Kosten aus.",
          "faq": [
            {
              "q": "Woher kommt der spezifische Verbrauch?",
              "a": "Aus den Daten deiner Maschine bei passender Last. Liter pro Stunde durch abgegebene kW teilen, um l/(kWh) zu erhalten. Die erhaltenen 0,3 sind ein Beispiel und durch einen passenden Wert zu ersetzen."
            },
            {
              "q": "Trage ich die Last oder die Nennleistung ein?",
              "a": "Die tatsächliche elektrische Last passend zum spezifischen Verbrauch. Nennleistung beschreibt die Fähigkeit der Maschine, nicht die aktuelle Abgabe. Leerlaufkraftstoff ist aus dieser linearen Formel nicht ableitbar."
            },
            {
              "q": "Warum ist geringe Last unwirtschaftlich?",
              "a": "Der Motor braucht auch Kraftstoff für seinen Eigenbetrieb; l/(kWh) können daher mit der Last variieren. Die Änderung ist maschinenspezifisch: Kennlinie nutzen statt eines allgemeinen Faktors 1,5–2."
            },
            {
              "q": "Sind Warmlaufen und Leerlauf enthalten?",
              "a": "Nein. Leerlauf gesondert mit gemessenen Litern pro Stunde oder Herstellerdaten rechnen. Nur die Stunden bei derselben Last zu verlängern bildet einen anderen Betriebszustand nicht ab und kann den Verbrauch falsch schätzen."
            }
          ],
          "disclaimer": "Die Ergebnisse sind Orientierungswerte. Prüfe die Eingaben vor wichtigen Entscheidungen."
        },
        "help": {
          "sfc": "Über 0: Liter pro Stunde ÷ tatsächliche kW. Zur Maschinenlast passende Daten; 0,3 ist Beispiel.",
          "price": "Optional: leer oder 0 blendet Kosten aus; Literpreis, ohne Währungsumrechnung."
        },
        "sources": [
          "https://emc.cat.com/n/api/pubdirect?media_string_id=LEHE1468-"
        ],
        "normal": {
          "inputs": {
            "load": 5,
            "sfc": 0.3,
            "hours": 8,
            "price": 1.6
          },
          "expected": {
            "kind": "number",
            "value": 12
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 1.5
              }
            },
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 19.2
              }
            }
          ],
          "inactive": [],
          "rowCount": 2,
          "primaryUnit": "l",
          "independentLiteral": "12,00 л"
        },
        "boundary": {
          "inputs": {
            "load": 0.5,
            "sfc": 0.4,
            "hours": 2.5,
            "price": 0
          },
          "expected": {
            "kind": "number",
            "value": 0.5
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 0.2
              }
            }
          ],
          "inactive": [],
          "rowCount": 1,
          "primaryUnit": "l",
          "independentLiteral": "0,50 л"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 12
        },
        "blankField": "load",
        "domainField": "load",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "es",
        "path": "/es/hogar/combustible-de-un-generador/",
        "h1": "Calculadora de combustible de un generador",
        "body": {
          "longDescription": "Estima combustible para una carga constante elegida multiplicando kW, consumo específico y horas. El 0,3 l/(kWh) conservado es un ejemplo de entrada, no una característica universal del diésel o la gasolina. Datos del fabricante o mediciones deben corresponder a tu carga. Un precio opcional calcula el coste del volumen; calentamiento y ralentí necesitan datos separados.",
          "howToUse": [
            "Introduce la carga real en kilovatios, no la potencia nominal del generador.",
            "Indica el consumo específico según la ficha técnica de la máquina.",
            "Fija el tiempo de funcionamiento y, si lo necesitas, el precio del combustible."
          ],
          "howItWorks": "Con carga constante P kW y consumo específico s l/(kWh), combustible horario F=P×s y total F×t para t horas. El precio por litro multiplica ese volumen; en blanco o 0 se omite el coste. P,s,t>0 y precio≥0. Divide cargas variables en tramos con s adecuado; el modelo lineal no deduce consumo de ralentí a partir de carga eléctrica cero.",
          "example": "Un generador con una carga de 5 kW a 0,3 l/kWh quema 12 litros en ocho horas: a 1,60 el litro son 19,20. 0,5 kW×0,4 l/(kWh)×2,5 h dan 0,5 l; precio 0 omite coste.",
          "faq": [
            {
              "q": "¿De dónde sale el consumo específico?",
              "a": "De los datos de tu equipo para esa carga. Si dan litros por hora, divide entre los kW entregados para obtener l/(kWh). El 0,3 conservado es un ejemplo que debes sustituir por un valor adecuado."
            },
            {
              "q": "¿Introduzco la carga o la potencia nominal?",
              "a": "La carga eléctrica real, coherente con el consumo específico. La potencia nominal describe capacidad, no producción actual. Esta fórmula lineal no permite deducir combustible al ralentí."
            },
            {
              "q": "¿Por qué la carga baja es poco eficiente?",
              "a": "El motor consume también para funcionar, por lo que l/(kWh) puede variar con la carga. La variación depende del equipo: usa su curva, no un multiplicador universal de 1,5–2."
            },
            {
              "q": "¿Se incluyen el calentamiento y el ralentí?",
              "a": "No. Calcula el ralentí por separado con litros por hora medidos o datos del fabricante. Alargar horas con la misma carga no representa otro modo de operación y puede sobrestimar o subestimar combustible."
            }
          ],
          "disclaimer": "Los resultados son estimaciones orientativas. Verifica los datos de partida antes de tomar decisiones importantes."
        },
        "help": {
          "sfc": "Más de 0: litros por hora ÷ kW reales. Datos del equipo para esa carga; 0,3 es ejemplo.",
          "price": "Opcional: blanco o 0 omite costes; precio por litro, sin conversión de moneda."
        },
        "sources": [
          "https://emc.cat.com/n/api/pubdirect?media_string_id=LEHE1468-"
        ],
        "normal": {
          "inputs": {
            "load": 5,
            "sfc": 0.3,
            "hours": 8,
            "price": 1.6
          },
          "expected": {
            "kind": "number",
            "value": 12
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 1.5
              }
            },
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 19.2
              }
            }
          ],
          "inactive": [],
          "rowCount": 2,
          "primaryUnit": "l",
          "independentLiteral": "12,00 л"
        },
        "boundary": {
          "inputs": {
            "load": 0.5,
            "sfc": 0.4,
            "hours": 2.5,
            "price": 0
          },
          "expected": {
            "kind": "number",
            "value": 0.5
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 0.2
              }
            }
          ],
          "inactive": [],
          "rowCount": 1,
          "primaryUnit": "l",
          "independentLiteral": "0,50 л"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 12
        },
        "blankField": "load",
        "domainField": "load",
        "domainInvalid": -1,
        "countFields": []
      }
    ]
  },
  {
    "id": "heating-power",
    "category": "household",
    "defaults": {
      "area": 20,
      "height": 2.7,
      "wattsPerM3": 40,
      "windows": 1
    },
    "fieldNames": [
      "area",
      "height",
      "wattsPerM3",
      "windows"
    ],
    "defaultInactive": [],
    "pages": [
      {
        "locale": "ru",
        "path": "/ru/household/heating-power/",
        "h1": "Калькулятор мощности отопления",
        "body": {
          "longDescription": "Показывает простую объёмную прикидку, сохраняя высоту потолка отдельным входом. При одинаковой площади изменение 2,7→3,2 м увеличивает объёмную часть примерно на 18,5%, а выбранного коэффициента 30→50 Вт/м³ — на 66,7%. Фиксированная добавка 100 Вт на окно — допущение формулы. Эти числа позволяют сравнивать свои сценарии; они не заменяют расчёт теплопотерь через ограждения и вентиляцию или подбор оборудования.",
          "howToUse": [
            "Введите площадь помещения и высоту потолка — расчёт идёт от объёма.",
            "Введите выбранный коэффициент Вт/м³;30,40 и 50 — сравниваемые предположения, не нормативные классы утепления.",
            "Укажите число окон — на каждое добавляется сто ватт.",
            "Сравните сценарии в киловаттах; подбор прибора требует отдельного расчёта теплопотерь."
          ],
          "howItWorks": "Сохранённая объёмная прикидка: объём V=A×H м³, мощность W=V×q+100×N ватт, где q — введённый коэффициент Вт/м³, N — целое неотрицательное число окон. В киловаттах W/1000. Прибавка 100 Вт — фиксированное допущение этой модели, а не измеренная потеря каждого окна. Теплопередача ограждений, температура улицы, инфильтрация и характеристики отопителя не рассчитываются.",
          "example": "Комната 20 м² с потолком 2,7 м и одним окном при норме 40 Вт/м³ требует 2,26 кВт. Та же комната без окон даёт 2,16 кВт; при одном окне 2,26 кВт сохраняются без автоматического округления вверх.",
          "faq": [
            {
              "q": "Почему расчёт идёт от объёма, а не от площади?",
              "a": "Так устроена эта прикидка: высота масштабирует объёмную часть. При 2,7→3,2 м она растёт на 18,5%, но итог с неизменной оконной добавкой растёт меньше. Реальная отопительная нагрузка определяется теплопотерями, а не только количеством воздуха."
            },
            {
              "q": "Какую удельную норму выбрать?",
              "a": "Значение для вашей прикидки, в Вт/м³.30,40 и 50 можно сравнить как сценарии, но здесь они не привязаны к подтверждённым классам зданий или местному климату. Для выбора оборудования нужен расчёт проектных теплопотерь."
            },
            {
              "q": "Откуда берётся сто ватт на окно?",
              "a": "Из сохранённого допущения модели: ровно 100 Вт на каждое введённое окно. Размер, остекление, температура и герметичность не заданы, поэтому это не измеренные потери и не универсальная инженерная норма."
            },
            {
              "q": "Подходит ли расчёт для тёплого пола?",
              "a": "Можно сравнить только оценку тепловой нагрузки. Расчёт не определяет допустимую теплоотдачу пола, температуры поверхности, контуры или шаг труб. Проверяйте отдельно соответствие конкретной системы проектной нагрузке."
            },
            {
              "q": "Нужен ли запас мощности?",
              "a": "Калькулятор не назначает запас. Его потребность зависит от проектной нагрузки и характеристик устройства; слишком большой номинал тоже может ухудшать работу. Произвольные 10–20% здесь не считаются правилом."
            }
          ]
        },
        "help": {
          "wattsPerM3": "Выбранное допущение Вт/м³, не климатический норматив и не расчёт ограждений.",
          "windows": "Целое число от 0; фиксированные 100 Вт на окно — допущение модели."
        },
        "sources": [
          "https://bsesc.energy.gov/training-modules/hvac-cold-climate-heat-pump-sizing"
        ],
        "normal": {
          "inputs": {
            "area": 20,
            "height": 2.7,
            "wattsPerM3": 40,
            "windows": 1
          },
          "expected": {
            "kind": "number",
            "value": 2.26
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 2260
              }
            },
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 54
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "кВт",
          "independentLiteral": "2,26 кВт"
        },
        "boundary": {
          "inputs": {
            "area": 20,
            "height": 2.7,
            "wattsPerM3": 40,
            "windows": 0
          },
          "expected": {
            "kind": "number",
            "value": 2.16
          },
          "rows": [
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 0
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "кВт",
          "independentLiteral": "2,16 кВт"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 2.26
        },
        "blankField": "area",
        "domainField": "area",
        "domainInvalid": -1,
        "countFields": [
          "windows"
        ]
      },
      {
        "locale": "en",
        "path": "/en/household/heating-power-calculator/",
        "h1": "Heating power calculator",
        "body": {
          "longDescription": "Show a simple volume-based estimate with ceiling height as a separate input. At the same floor area,2.7→3.2 m raises the volume term by about 18.5%; changing the selected coefficient 30→50 W/m³ raises it by 66.7%. The fixed 100 W per window is a formula assumption. These figures compare scenarios; they do not replace envelope and ventilation heat-loss calculations or equipment sizing.",
          "howToUse": [
            "Enter the floor area and the ceiling height — the calculation works from volume.",
            "Enter your chosen W/m³ coefficient;30,40 and 50 are comparison assumptions, not standard insulation classes.",
            "Enter the number of windows — each adds a hundred watts.",
            "Compare scenarios in kW; equipment sizing needs a separate heat-loss calculation."
          ],
          "howItWorks": "Preserved volume-based estimate: V=A×H m³ and W=V×q+100×N watts, with entered q W/m³ and nonnegative whole window count N. Kilowatts=W/1000. The 100 W addition is this model’s fixed assumption, not a measured loss for every window. Envelope transmission, outdoor temperature, infiltration and heater performance are not calculated.",
          "example": "A 20 m² room with a 2.7 m ceiling and one window at 40 W/m³ needs 2.26 kW. The same room without windows gives 2.16 kW; with one window 2.26 kW is retained without automatic rounding up.",
          "faq": [
            {
              "q": "Why work from volume rather than floor area?",
              "a": "That is how this estimate is defined: height scales the volume term. At 2.7→3.2 m it rises 18.5%, but the total with a fixed window addition rises less. Actual heating load depends on heat loss, not only the quantity of air."
            },
            {
              "q": "Which specific requirement should I choose?",
              "a": "Choose a value for your estimate in W/m³.30,40 and 50 may be compared as scenarios; they are not verified building classes or local climate requirements here. Equipment selection needs a design heat-loss calculation."
            },
            {
              "q": "Where does the hundred watts per window come from?",
              "a": "From the preserved model assumption: exactly 100 W per entered window. Size, glazing, temperature and air leakage are absent, so this is neither measured heat loss nor a universal engineering standard."
            },
            {
              "q": "Does this apply to underfloor heating?",
              "a": "Only the estimated heat load can be compared. The calculation does not determine allowed floor output, surface temperatures, circuits or pipe spacing. Check the actual system against design load separately."
            },
            {
              "q": "Should I allow spare capacity?",
              "a": "The calculator prescribes no spare capacity. Its need depends on design load and equipment characteristics; oversizing may also impair operation. An arbitrary 10–20% is not treated as a rule here."
            }
          ],
          "disclaimer": "Results are reference estimates. Verify the inputs before making important decisions."
        },
        "help": {
          "wattsPerM3": "Selected W/m³ assumption, not a climate standard or envelope calculation.",
          "windows": "Whole count from 0; fixed 100 W per window is a model assumption."
        },
        "sources": [
          "https://bsesc.energy.gov/training-modules/hvac-cold-climate-heat-pump-sizing"
        ],
        "normal": {
          "inputs": {
            "area": 20,
            "height": 2.7,
            "wattsPerM3": 40,
            "windows": 1
          },
          "expected": {
            "kind": "number",
            "value": 2.26
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 2260
              }
            },
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 54
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "kW",
          "independentLiteral": "2,26 кВт"
        },
        "boundary": {
          "inputs": {
            "area": 20,
            "height": 2.7,
            "wattsPerM3": 40,
            "windows": 0
          },
          "expected": {
            "kind": "number",
            "value": 2.16
          },
          "rows": [
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 0
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "kW",
          "independentLiteral": "2,16 кВт"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 2.26
        },
        "blankField": "area",
        "domainField": "area",
        "domainInvalid": -1,
        "countFields": [
          "windows"
        ]
      },
      {
        "locale": "uk",
        "path": "/uk/pobut/potuzhnist-opalennya/",
        "h1": "Калькулятор потужності опалення",
        "body": {
          "longDescription": "Показує просту об’ємну прикидку з окремою висотою стелі. За однакової площі 2,5→3,5 м збільшує об’ємну частину на 40%, а обраний коефіцієнт 30→50 Вт/м³ — на 66,7%. Фіксовані 100 Вт на вікно є припущенням формули. Числа допомагають порівнювати сценарії, але не замінюють розрахунок тепловтрат огороджень і вентиляції чи добір обладнання.",
          "howToUse": [
            "Введіть площу приміщення й висоту стелі.",
            "Введіть обраний коефіцієнт Вт/м³;30,40 та 50 — порівнювані припущення, не нормативні класи утеплення.",
            "Укажіть кількість вікон."
          ],
          "howItWorks": "Збережена об’ємна прикидка: V=A×H м³, W=V×q+100×N ватів, де q — введений коефіцієнт Вт/м³, N — ціле невід’ємне число вікон. Кіловати=W/1000. Додаток 100 Вт є фіксованим припущенням моделі, а не виміряною втратою кожного вікна. Теплопередача огороджень, вулична температура, інфільтрація й характеристики нагрівача не рахуються.",
          "example": "Кімната 20 м² зі стелею 2,7 м і одним вікном за норми 40 Вт/м³ потребує 2,26 кВт. Та сама кімната без вікон дає 2,16 кВт; з одним вікном 2,26 кВт без автоматичного округлення вгору.",
          "faq": [
            {
              "q": "Чому рахувати від об’єму, а не від площі?",
              "a": "Так задано прикидку: висота масштабує об’ємну частину. За 2,5→3,5 м вона росте на 40%, але підсумок зі сталою віконною добавкою — менше. Реальна потреба в опаленні залежить від тепловтрат, а не лише об’єму повітря."
            },
            {
              "q": "Яку питому норму брати?",
              "a": "Оберіть значення для своєї прикидки у Вт/м³.30,40 та 50 можна порівнювати як сценарії; вони тут не є підтвердженими класами будівель чи кліматичними нормами. Для обладнання потрібен розрахунок проєктних тепловтрат."
            },
            {
              "q": "Чому вікна враховуються окремо?",
              "a": "Це збережене припущення моделі: рівно 100 Вт на кожне введене вікно. Розмір, скління, температури та герметичність не задані, тому це не виміряні втрати й не універсальна інженерна норма."
            },
            {
              "q": "Це потужність радіатора чи котла?",
              "a": "Це груба оцінка потужності для кімнати, не паспортний номінал радіатора чи котла. Тепловіддачу приладу за робочих температур, інші кімнати й гарячу воду перевіряють окремо; універсальні додаткові 20–30% не закладаються."
            }
          ],
          "disclaimer": "Результати є орієнтовними оцінками. Перед важливими рішеннями перевіряйте дані."
        },
        "help": {
          "wattsPerM3": "Обране припущення Вт/м³, не кліматична норма й не розрахунок огороджень.",
          "windows": "Ціле число від 0; фіксовані 100 Вт на вікно — припущення моделі."
        },
        "sources": [
          "https://bsesc.energy.gov/training-modules/hvac-cold-climate-heat-pump-sizing"
        ],
        "normal": {
          "inputs": {
            "area": 20,
            "height": 2.7,
            "wattsPerM3": 40,
            "windows": 1
          },
          "expected": {
            "kind": "number",
            "value": 2.26
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 2260
              }
            },
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 54
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "кВт",
          "independentLiteral": "2,26 кВт"
        },
        "boundary": {
          "inputs": {
            "area": 20,
            "height": 2.7,
            "wattsPerM3": 40,
            "windows": 0
          },
          "expected": {
            "kind": "number",
            "value": 2.16
          },
          "rows": [
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 0
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "кВт",
          "independentLiteral": "2,16 кВт"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 2.26
        },
        "blankField": "area",
        "domainField": "area",
        "domainInvalid": -1,
        "countFields": [
          "windows"
        ]
      },
      {
        "locale": "de",
        "path": "/de/haushalt/heizleistung-rechner/",
        "h1": "Rechner für die Heizleistung",
        "body": {
          "longDescription": "Zeigt eine einfache Volumenabschätzung mit eigener Deckenhöhe. Bei gleicher Fläche steigert 2,7→3,2 m den Volumenanteil um etwa 18,5%; der gewählte Koeffizient 30→50 W/m³ erhöht ihn um 66,7%. Die festen 100 W je Fenster sind eine Formelannahme. Das vergleicht Szenarien, ersetzt aber keine Wärmeverlustrechnung für Gebäudehülle und Lüftung oder Geräteauslegung.",
          "howToUse": [
            "Trage Grundfläche und Raumhöhe ein — die Rechnung arbeitet mit dem Volumen.",
            "Gewählten Koeffizienten W/m³ eingeben;30,40 und 50 sind Vergleichsannahmen, keine genormten Dämmklassen.",
            "Trage die Zahl der Fenster ein — jedes bringt hundert Watt hinzu.",
            "Szenarien in kW vergleichen; Geräteauslegung braucht eine eigene Wärmeverlustrechnung."
          ],
          "howItWorks": "Erhaltene Volumenabschätzung: V=A×H m³, W=V×q+100×N Watt mit eingegebenem q W/m³ und nichtnegativer ganzer Fensterzahl N. Kilowatt=W/1000. Die 100 W sind eine feste Modellannahme und kein gemessener Verlust jedes Fensters. Transmission der Gebäudehülle, Außentemperatur, Luftundichtheit und Heizgerätedaten werden nicht berechnet.",
          "example": "Ein Raum von 20 m² mit 2,7 m Höhe und einem Fenster braucht bei 40 W/m³ 2,26 kW. Derselbe Raum ohne Fenster ergibt 2,16 kW; mit einem Fenster bleiben 2,26 kW ohne automatische Aufrundung.",
          "faq": [
            {
              "q": "Warum vom Volumen und nicht von der Grundfläche aus?",
              "a": "So ist die Abschätzung definiert: Die Höhe skaliert den Volumenanteil. Bei 2,7→3,2 m steigt er 18,5%, die Summe mit festem Fensterzuschlag aber weniger. Tatsächliche Heizlast hängt von Wärmeverlusten ab, nicht nur von Luftmenge."
            },
            {
              "q": "Welchen spezifischen Bedarf soll ich wählen?",
              "a": "Einen Wert für deine Abschätzung in W/m³ wählen.30,40 und 50 sind Vergleichsszenarien, hier keine belegten Gebäudeklassen oder örtlichen Klimavorgaben. Gerätewahl erfordert eine Berechnung der Auslegungswärmeverluste."
            },
            {
              "q": "Woher kommen die hundert Watt je Fenster?",
              "a": "Aus der erhaltenen Modellannahme: genau 100 W je eingegebenem Fenster. Größe, Verglasung, Temperatur und Undichtheit fehlen; es ist weder gemessener Verlust noch allgemeine Ingenieurnorm."
            },
            {
              "q": "Gilt das auch für eine Fußbodenheizung?",
              "a": "Nur die geschätzte Heizlast lässt sich vergleichen. Zulässige Bodenleistung, Oberflächentemperatur, Heizkreise und Rohrabstand werden nicht bestimmt. Die konkrete Anlage gesondert gegen die Auslegungslast prüfen."
            },
            {
              "q": "Soll ich eine Reserve einplanen?",
              "a": "Der Rechner schreibt keine Reserve vor. Ihr Bedarf hängt von Auslegungslast und Gerätedaten ab; Überdimensionierung kann ebenfalls schaden. Beliebige 10–20% gelten hier nicht als Regel."
            }
          ],
          "disclaimer": "Die Ergebnisse sind Orientierungswerte. Prüfe die Eingaben vor wichtigen Entscheidungen."
        },
        "help": {
          "wattsPerM3": "Gewählte W/m³-Annahme, keine Klimanorm oder Hüllflächenberechnung.",
          "windows": "Ganze Zahl ab 0; feste 100 W je Fenster sind Modellannahme."
        },
        "sources": [
          "https://bsesc.energy.gov/training-modules/hvac-cold-climate-heat-pump-sizing"
        ],
        "normal": {
          "inputs": {
            "area": 20,
            "height": 2.7,
            "wattsPerM3": 40,
            "windows": 1
          },
          "expected": {
            "kind": "number",
            "value": 2.26
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 2260
              }
            },
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 54
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "kW",
          "independentLiteral": "2,26 кВт"
        },
        "boundary": {
          "inputs": {
            "area": 20,
            "height": 2.7,
            "wattsPerM3": 40,
            "windows": 0
          },
          "expected": {
            "kind": "number",
            "value": 2.16
          },
          "rows": [
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 0
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "kW",
          "independentLiteral": "2,16 кВт"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 2.26
        },
        "blankField": "area",
        "domainField": "area",
        "domainInvalid": -1,
        "countFields": [
          "windows"
        ]
      },
      {
        "locale": "es",
        "path": "/es/hogar/potencia-de-calefaccion/",
        "h1": "Calculadora de potencia de calefacción",
        "body": {
          "longDescription": "Muestra una estimación volumétrica simple con altura de techo independiente. A igual superficie,2,7→3,2 m aumenta el término de volumen aproximadamente 18,5%; cambiar el coeficiente elegido 30→50 W/m³ lo aumenta 66,7%. Los 100 W fijos por ventana son un supuesto. Estos datos comparan escenarios, sin sustituir pérdidas por cerramientos y ventilación ni dimensionado del equipo.",
          "howToUse": [
            "Introduce la superficie y la altura del techo: el cálculo trabaja con el volumen.",
            "Introduce tu coeficiente W/m³;30,40 y 50 son supuestos comparables, no categorías normativas de aislamiento.",
            "Introduce el número de ventanas: cada una añade cien vatios.",
            "Compara escenarios en kW; dimensionar equipo requiere calcular pérdidas por separado."
          ],
          "howItWorks": "Estimación volumétrica conservada: V=A×H m³, W=V×q+100×N vatios, con q introducido en W/m³ y ventanas N enteras no negativas. Kilovatios=W/1000. Los 100 W son un supuesto fijo del modelo, no la pérdida medida de cada ventana. No se calculan transmisión de cerramientos, temperatura exterior, infiltración ni rendimiento del equipo.",
          "example": "Una habitación de 20 m² con techo de 2,7 m y una ventana, a 40 W/m³, necesita 2,26 kW. La misma habitación sin ventanas da 2,16 kW; con una ventana conserva 2,26 kW sin redondeo automático al alza.",
          "faq": [
            {
              "q": "¿Por qué se trabaja con el volumen y no con la superficie?",
              "a": "Así se define esta estimación: la altura escala el término volumétrico. De 2,7→3,2 m aumenta 18,5%, pero el total con suplemento fijo de ventanas aumenta menos. La carga real depende de pérdidas de calor, no solo del aire."
            },
            {
              "q": "¿Qué demanda específica debo elegir?",
              "a": "Elige un valor para tu estimación en W/m³.30,40 y 50 sirven como escenarios; aquí no son clases de edificios verificadas ni requisitos climáticos locales. Elegir equipo requiere calcular pérdidas de diseño."
            },
            {
              "q": "¿De dónde salen los cien vatios por ventana?",
              "a": "Del supuesto conservado: exactamente 100 W por ventana introducida. Faltan tamaño, acristalamiento, temperatura y fugas, por lo que no son pérdidas medidas ni una norma universal."
            },
            {
              "q": "¿Vale para suelo radiante?",
              "a": "Solo permite comparar una carga estimada. No determina emisión admisible del suelo, temperaturas superficiales, circuitos ni separación de tubos. Comprueba el sistema concreto frente a la carga de diseño por separado."
            },
            {
              "q": "¿Debo prever potencia de reserva?",
              "a": "La calculadora no prescribe reserva. Depende de carga de diseño y equipo; sobredimensionar también puede perjudicar el funcionamiento. Un 10–20% arbitrario no se presenta como regla."
            }
          ],
          "disclaimer": "Los resultados son estimaciones orientativas. Verifica los datos de partida antes de tomar decisiones importantes."
        },
        "help": {
          "wattsPerM3": "Supuesto W/m³ elegido, no norma climática ni cálculo de cerramientos.",
          "windows": "Entero desde 0; 100 W fijos por ventana son un supuesto del modelo."
        },
        "sources": [
          "https://bsesc.energy.gov/training-modules/hvac-cold-climate-heat-pump-sizing"
        ],
        "normal": {
          "inputs": {
            "area": 20,
            "height": 2.7,
            "wattsPerM3": 40,
            "windows": 1
          },
          "expected": {
            "kind": "number",
            "value": 2.26
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 2260
              }
            },
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 54
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "kW",
          "independentLiteral": "2,26 кВт"
        },
        "boundary": {
          "inputs": {
            "area": 20,
            "height": 2.7,
            "wattsPerM3": 40,
            "windows": 0
          },
          "expected": {
            "kind": "number",
            "value": 2.16
          },
          "rows": [
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 0
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "kW",
          "independentLiteral": "2,16 кВт"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 2.26
        },
        "blankField": "area",
        "domainField": "area",
        "domainInvalid": -1,
        "countFields": [
          "windows"
        ]
      }
    ]
  },
  {
    "id": "lighting",
    "category": "household",
    "defaults": {
      "area": 18,
      "norm": 150,
      "lampLumens": 800,
      "lossFactor": 0.8
    },
    "fieldNames": [
      "area",
      "norm",
      "lampLumens",
      "lossFactor"
    ],
    "defaultInactive": [],
    "pages": [
      {
        "locale": "ru",
        "path": "/ru/household/osveshchenie-komnaty/",
        "h1": "Калькулятор освещения комнаты",
        "body": {
          "longDescription": "Оценивает суммарные люмены и целое число одинаковых ламп для площади и выбранных люксов. Поток лампы берётся с упаковки; доля сохраняющегося света увеличивает требуемый начальный поток при снижении света со временем. Это упрощённая связь люменов с площадью при использовании света, принятом за 100%. Она помогает сравнить комплекты ламп, но не рассчитывает распределение и не гарантирует освещённость на рабочем столе.",
          "howToUse": [
            "Введите площадь пола комнаты.",
            "Выберите освещённость, к которой стремитесь.",
            "Введите поток одной лампы в люменах — он указан на коробке.",
            "Задайте долю сохраняющегося света 0,4–1 для своего сценария; это отдельное допущение, а не компенсация всех потерь распределения."
          ],
          "howItWorks": "Упрощённая оценка потока Φ=A×E/f люмен, где A — площадь, E — выбранная освещённость в люксах, f — доля сохраняющегося света 0,4..1. Ламп N=ceil(Φ/φ), установленный поток N×φ. Коэффициент использования света принят равным 1: распределение, отражения, рабочая плоскость и фактические люксы не рассчитываются. Целое N округляется вверх, но достижение нормы этим не гарантируется.",
          "example": "18 м² при 150 лк лампами по 800 лм с коэффициентом 0,8 требуют 3 375 лм, то есть пять ламп. На 1 м² при 50 лк, f=1 и лампе 1000 лм расчётный поток 50 лм, но целое число ламп 1 и установленный поток 1000 лм.",
          "faq": [
            {
              "q": "К какой освещённости стремиться?",
              "a": "Выберите целевую освещённость под конкретную задачу.150 лк здесь — сохранённый пример, не универсальная норма комнаты. Требования зависят от рабочей поверхности и применимого стандарта; итог проверяют измерением или светотехническим расчётом."
            },
            {
              "q": "Зачем коэффициент запаса?",
              "a": "Поле содержит долю сохраняющегося света, а не множитель больше единицы. При 0,8 исходная потребность делится на 0,8 и растёт на 25%. Фактор не учитывает, сколько света действительно попадёт на рабочую плоскость, и не обеспечивает норму сам по себе."
            },
            {
              "q": "Имеет ли значение высота потолка?",
              "a": "Да, для реального распределения важны расстояние до рабочей плоскости и характеристики светильника. Высоты здесь нет, поэтому калькулятор не компенсирует высокий потолок автоматически. Не заменяйте отдельный светотехнический расчёт произвольным процентом."
            },
            {
              "q": "Влияет ли цвет стен и потолка?",
              "a": "Да. Отражение поверхностей меняет долю потока на нужной плоскости. Коэффициент использования в этой прикидке равен 1 и эти свойства не рассчитывает. Для тёмных поверхностей и направленного света проверьте распределение отдельно."
            },
            {
              "q": "Можно ли смешивать разные лампы?",
              "a": "Да: сложите люмены разных ламп вручную и сравните с оценкой потока. Число ламп в результате относится к одинаковым лампам указанного потока. Одна сумма люменов не определяет распределение люксов."
            }
          ]
        },
        "help": {
          "norm": "Выбранные люксы для вашей задачи; 150 — пример, а не универсальная норма.",
          "lossFactor": "Доля сохраняющегося света 0,4–1; не коэффициент использования, который принят равным 1."
        },
        "sources": [
          "https://cie.co.at/eilv/753",
          "https://cie.co.at/eilvterm/17-29-069"
        ],
        "normal": {
          "inputs": {
            "area": 18,
            "norm": 150,
            "lampLumens": 800,
            "lossFactor": 0.8
          },
          "expected": {
            "kind": "number",
            "value": 3375
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 5
              }
            },
            {
              "index": 4,
              "expectation": {
                "kind": "number",
                "value": 4000
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "лм",
          "independentLiteral": "3 375 лм"
        },
        "boundary": {
          "inputs": {
            "area": 1,
            "norm": 50,
            "lampLumens": 1000,
            "lossFactor": 1
          },
          "expected": {
            "kind": "number",
            "value": 50
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 1
              }
            },
            {
              "index": 4,
              "expectation": {
                "kind": "number",
                "value": 1000
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "лм",
          "independentLiteral": "50 лм"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 3375
        },
        "blankField": "area",
        "domainField": "area",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "en",
        "path": "/en/household/room-lighting/",
        "h1": "Room lighting calculator",
        "body": {
          "longDescription": "Estimate total lumens and whole identical lamps for an area and selected lux. Use the lamp output from its package; a retained-light factor raises initial flux to allow for reduced light over time. This simplified relation assumes 100% utilisation. It compares lamp sets without calculating distribution or guaranteeing illuminance at your work surface.",
          "howToUse": [
            "Enter the floor area of the room.",
            "Choose the illuminance you are aiming for.",
            "Enter the output of one lamp in lumens — it is on the box.",
            "Set a retained-light fraction 0.4–1 for your scenario; it is a separate assumption, not compensation for all distribution losses."
          ],
          "howItWorks": "Simplified flux estimate Φ=A×E/f lumens, with area A, selected illuminance E lux and retained-light factor f from 0.4 to 1. Lamps N=ceil(Φ/φ); installed flux N×φ. Utilisation is assumed 1: beam distribution, reflections, working plane and measured lux are not calculated. N rounds up to whole lamps without guaranteeing compliance with the illuminance target.",
          "example": "18 m² at 150 lx with 800 lm lamps and a 0.8 factor needs 3,375 lm, which is five lamps. For 1 m² at 50 lx, f=1 and a 1000 lm lamp, estimated flux is 50 lm but whole lamp count 1 and installed flux 1000 lm.",
          "faq": [
            {
              "q": "What illuminance should I aim for?",
              "a": "Choose a target for the actual task. The retained 150 lux is an example, not a universal room requirement. Requirements depend on the work surface and applicable standard; verify the result by measurement or lighting design."
            },
            {
              "q": "What is the maintenance factor for?",
              "a": "The field is the retained fraction of light, not a multiplier above one. With 0.8 the required initial flux is divided by 0.8, increasing 25%. It does not determine how much reaches the work plane or ensure compliance on its own."
            },
            {
              "q": "Does the ceiling height matter?",
              "a": "Yes: actual distribution depends on distance to the work plane and luminaire characteristics. Height is absent here, so a high ceiling is not automatically compensated. An arbitrary percentage is no substitute for a lighting calculation."
            },
            {
              "q": "Do wall and ceiling colours matter?",
              "a": "Yes. Surface reflectance changes the flux reaching the relevant plane. This estimate fixes utilisation at 1 and does not calculate those properties. Check distribution separately for dark surfaces and directional light."
            },
            {
              "q": "Can I mix different lamps?",
              "a": "Yes: add their lumens manually and compare with the estimated flux. The displayed lamp count assumes identical lamps at the entered output. A lumen sum alone does not determine lux distribution."
            }
          ],
          "disclaimer": "Results are reference estimates. Verify the inputs before making important decisions."
        },
        "help": {
          "norm": "Selected lux for your task; 150 is an example, not a universal requirement.",
          "lossFactor": "Retained-light fraction 0.4–1; not utilisation, which is assumed 1."
        },
        "sources": [
          "https://cie.co.at/eilv/753",
          "https://cie.co.at/eilvterm/17-29-069"
        ],
        "normal": {
          "inputs": {
            "area": 18,
            "norm": 150,
            "lampLumens": 800,
            "lossFactor": 0.8
          },
          "expected": {
            "kind": "number",
            "value": 3375
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 5
              }
            },
            {
              "index": 4,
              "expectation": {
                "kind": "number",
                "value": 4000
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "lm",
          "independentLiteral": "3 375 лм"
        },
        "boundary": {
          "inputs": {
            "area": 1,
            "norm": 50,
            "lampLumens": 1000,
            "lossFactor": 1
          },
          "expected": {
            "kind": "number",
            "value": 50
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 1
              }
            },
            {
              "index": 4,
              "expectation": {
                "kind": "number",
                "value": 1000
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "lm",
          "independentLiteral": "50 лм"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 3375
        },
        "blankField": "area",
        "domainField": "area",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "uk",
        "path": "/uk/pobut/osvitlennya-kimnaty/",
        "h1": "Калькулятор освітлення кімнати",
        "body": {
          "longDescription": "Оцінює сумарні люмени й ціле число однакових ламп для площі та обраних люксів. Потік береться з упаковки; частка збереженого світла підвищує початкову потребу з урахуванням зменшення світла з часом. Спрощений зв’язок люменів із площею припускає 100% використання. Він порівнює набори ламп, але не рахує розподіл і не гарантує люкси на робочій поверхні.",
          "howToUse": [
            "Введіть площу підлоги кімнати.",
            "Оберіть освітленість, до якої прагнете.",
            "Введіть потік однієї лампи в люменах — він указаний на коробці.",
            "Задайте частку збереженого світла 0,4–1 для свого сценарію; це окреме припущення, не компенсація всіх втрат розподілу."
          ],
          "howItWorks": "Спрощена оцінка потоку Φ=A×E/f люменів, де A — площа, E — обрана освітленість у люксах, f — частка збереженого світла 0,4..1. Ламп N=ceil(Φ/φ), встановлений потік N×φ. Коефіцієнт використання прийнятий за 1: розподіл, відбиття, робоча площина й виміряні люкси не рахуються. N округлюється вгору без гарантії дотримання норми.",
          "example": "18 м² за 150 лк лампами по 800 лм з коефіцієнтом 0,8 потребують 3 375 лм, тобто п’ять ламп. Для 1 м² за 50 лк, f=1 і лампи 1000 лм розрахунковий потік 50 лм, ціла лампа 1, встановлений потік 1000 лм.",
          "faq": [
            {
              "q": "До якої освітленості прагнути?",
              "a": "Оберіть ціль під конкретне завдання. Збережені 150 лк — приклад, не універсальна норма кімнати. Вимоги залежать від робочої поверхні та застосовного стандарту; результат перевіряють вимірюванням або світлотехнічним розрахунком."
            },
            {
              "q": "Навіщо коефіцієнт запасу?",
              "a": "Поле задає частку збереженого світла, а не множник понад одиницю. За 0,8 початкова потреба ділиться на 0,8 і росте на 25%. Це не частка потоку, що дійде до робочої площини, і не гарантія норми."
            },
            {
              "q": "Чи має значення висота стелі?",
              "a": "Так: реальний розподіл залежить від відстані до робочої площини й характеристик світильника. Висоти тут немає, тому висока стеля автоматично не компенсується. Довільний відсоток не замінює світлотехнічного розрахунку."
            },
            {
              "q": "Чи впливає колір стін і стелі?",
              "a": "Так. Відбиття поверхонь змінює потік на потрібній площині. Коефіцієнт використання в цій прикидці дорівнює 1 й не рахує цих властивостей. Для темних поверхонь і спрямованого світла окремо перевірте розподіл."
            },
            {
              "q": "Чи можна змішувати різні лампи?",
              "a": "Так: складіть люмени різних ламп вручну й порівняйте з оцінкою потоку. Число ламп у результаті стосується однакових ламп введеного потоку. Сама сума люменів не визначає розподілу люксів."
            }
          ],
          "disclaimer": "Результати є орієнтовними оцінками. Перед важливими рішеннями перевіряйте вихідні дані."
        },
        "help": {
          "norm": "Обрані люкси для вашого завдання; 150 — приклад, не універсальна норма.",
          "lossFactor": "Частка збереженого світла 0,4–1; не коефіцієнт використання, прийнятий за 1."
        },
        "sources": [
          "https://cie.co.at/eilv/753",
          "https://cie.co.at/eilvterm/17-29-069"
        ],
        "normal": {
          "inputs": {
            "area": 18,
            "norm": 150,
            "lampLumens": 800,
            "lossFactor": 0.8
          },
          "expected": {
            "kind": "number",
            "value": 3375
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 5
              }
            },
            {
              "index": 4,
              "expectation": {
                "kind": "number",
                "value": 4000
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "лм",
          "independentLiteral": "3 375 лм"
        },
        "boundary": {
          "inputs": {
            "area": 1,
            "norm": 50,
            "lampLumens": 1000,
            "lossFactor": 1
          },
          "expected": {
            "kind": "number",
            "value": 50
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 1
              }
            },
            {
              "index": 4,
              "expectation": {
                "kind": "number",
                "value": 1000
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "лм",
          "independentLiteral": "50 лм"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 3375
        },
        "blankField": "area",
        "domainField": "area",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "de",
        "path": "/de/haushalt/raumbeleuchtung-rechner/",
        "h1": "Rechner für die Raumbeleuchtung",
        "body": {
          "longDescription": "Schätzt Gesamtlichtstrom und ganze gleiche Leuchtmittel für Fläche und gewählte Lux. Der Lampenstrom steht auf der Packung; der verbleibende Lichtanteil erhöht den benötigten Anfangsstrom für Lichtverlust über die Zeit. Diese vereinfachte Beziehung setzt 100% Nutzungsgrad voraus. Sie vergleicht Lampensätze, berechnet aber weder Verteilung noch garantierte Lux am Arbeitsplatz.",
          "howToUse": [
            "Trage die Grundfläche des Raumes ein.",
            "Wähle die Beleuchtungsstärke, die du anstrebst.",
            "Trage den Lichtstrom eines Leuchtmittels in Lumen ein — er steht auf der Verpackung.",
            "Verbleibenden Lichtanteil 0,4–1 für das Szenario angeben; separate Annahme, kein Ausgleich aller Verteilungsverluste."
          ],
          "howItWorks": "Vereinfachte Lichtstromschätzung Φ=A×E/f Lumen mit Fläche A, gewählten E Lux und verbleibendem Lichtanteil f von 0,4 bis 1. Leuchtmittel N=ceil(Φ/φ), installierter Strom N×φ. Der Nutzungsgrad wird mit 1 angenommen: Verteilung, Reflexionen, Arbeitsebene und gemessene Lux werden nicht berechnet. N wird ganz aufgerundet, garantiert aber keine Normerfüllung.",
          "example": "18 m² bei 150 lx mit Leuchtmitteln zu 800 lm und einem Faktor von 0,8 brauchen 3375 lm, also fünf Leuchtmittel. 1 m² bei 50 lx, f=1 und 1000-lm-Leuchtmittel: Schätzung 50 lm, ganze Anzahl 1, installierter Strom 1000 lm.",
          "faq": [
            {
              "q": "Welche Beleuchtungsstärke soll ich anstreben?",
              "a": "Ziel für die konkrete Tätigkeit wählen. Die erhaltenen 150 Lux sind ein Beispiel, keine allgemeine Raumnorm. Anforderungen hängen von Arbeitsebene und geltender Vorgabe ab; Ergebnis messen oder lichttechnisch berechnen."
            },
            {
              "q": "Wozu der Wartungsfaktor?",
              "a": "Das Feld enthält den verbleibenden Lichtanteil, keinen Faktor größer eins. Bei 0,8 wird der Anfangsbedarf durch 0,8 geteilt und steigt 25%. Der Faktor bestimmt nicht das Licht auf der Arbeitsebene und garantiert allein keine Normerfüllung."
            },
            {
              "q": "Spielt die Raumhöhe eine Rolle?",
              "a": "Ja: Tatsächliche Verteilung hängt von Abstand zur Arbeitsebene und Leuchte ab. Höhe ist hier kein Eingang; hohe Decken werden nicht automatisch ausgeglichen. Ein beliebiger Prozentsatz ersetzt keine Lichtberechnung."
            },
            {
              "q": "Spielen Wand- und Deckenfarben eine Rolle?",
              "a": "Ja. Oberflächenreflexion verändert den Lichtstrom auf der Bezugsebene. Diese Abschätzung setzt den Nutzungsgrad auf 1 und berechnet diese Eigenschaften nicht. Bei dunklen Flächen und gerichtetem Licht die Verteilung gesondert prüfen."
            },
            {
              "q": "Kann ich verschiedene Leuchtmittel mischen?",
              "a": "Ja: Lumen verschiedener Lampen von Hand addieren und mit der Schätzung vergleichen. Die Anzahl gilt für gleiche Lampen mit eingegebenem Lichtstrom. Eine Lumensumme bestimmt allein keine Luxverteilung."
            }
          ],
          "disclaimer": "Die Ergebnisse sind Orientierungswerte. Prüfe die Eingaben vor wichtigen Entscheidungen."
        },
        "help": {
          "norm": "Gewählte Lux für die Tätigkeit; 150 ist Beispiel, keine allgemeine Vorgabe.",
          "lossFactor": "Verbleibender Lichtanteil 0,4–1; nicht der mit 1 angenommene Nutzungsgrad."
        },
        "sources": [
          "https://cie.co.at/eilv/753",
          "https://cie.co.at/eilvterm/17-29-069"
        ],
        "normal": {
          "inputs": {
            "area": 18,
            "norm": 150,
            "lampLumens": 800,
            "lossFactor": 0.8
          },
          "expected": {
            "kind": "number",
            "value": 3375
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 5
              }
            },
            {
              "index": 4,
              "expectation": {
                "kind": "number",
                "value": 4000
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "lm",
          "independentLiteral": "3 375 лм"
        },
        "boundary": {
          "inputs": {
            "area": 1,
            "norm": 50,
            "lampLumens": 1000,
            "lossFactor": 1
          },
          "expected": {
            "kind": "number",
            "value": 50
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 1
              }
            },
            {
              "index": 4,
              "expectation": {
                "kind": "number",
                "value": 1000
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "lm",
          "independentLiteral": "50 лм"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 3375
        },
        "blankField": "area",
        "domainField": "area",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "es",
        "path": "/es/hogar/iluminacion-de-una-habitacion/",
        "h1": "Calculadora de iluminación de una habitación",
        "body": {
          "longDescription": "Estima lúmenes totales y lámparas iguales enteras para superficie y lux elegidos. El flujo está en el envase; el factor de luz conservada aumenta el flujo inicial para prever reducción con el tiempo. Esta relación simplificada supone 100% de utilización. Compara conjuntos de lámparas sin calcular distribución ni garantizar lux en la superficie de trabajo.",
          "howToUse": [
            "Introduce la superficie de la habitación.",
            "Elige la iluminancia que buscas.",
            "Introduce el flujo de una lámpara en lúmenes: viene en la caja.",
            "Fija una fracción de luz conservada 0,4–1 para tu escenario; es un supuesto separado, no compensa todas las pérdidas de distribución."
          ],
          "howItWorks": "Estimación simplificada de flujo Φ=A×E/f lúmenes, con superficie A, iluminancia elegida E lux y fracción conservada f de 0,4 a 1. Lámparas N=ceil(Φ/φ), flujo instalado N×φ. Se supone utilización 1: distribución, reflexiones, plano de trabajo y lux medidos no se calculan. N se redondea a lámparas enteras sin garantizar la norma.",
          "example": "18 m² con 150 lx, lámparas de 800 lm y un factor de 0,8 necesitan 3375 lm, es decir, cinco lámparas. 1 m² a 50 lx, f=1 y lámpara 1000 lm: flujo estimado 50 lm, una lámpara entera y flujo instalado 1000 lm.",
          "faq": [
            {
              "q": "¿Qué iluminancia debo buscar?",
              "a": "Elige una meta para la tarea concreta. Los 150 lux conservados son un ejemplo, no una norma universal de habitación. Depende de superficie de trabajo y norma aplicable; verifica con medición o diseño lumínico."
            },
            {
              "q": "¿Para qué sirve el factor de mantenimiento?",
              "a": "El campo es la fracción de luz conservada, no un multiplicador mayor que uno. Con 0,8 el flujo inicial se divide entre 0,8 y aumenta 25%. No calcula cuánto llega al plano de trabajo ni garantiza cumplimiento por sí solo."
            },
            {
              "q": "¿Influye la altura del techo?",
              "a": "Sí: la distribución real depende de distancia al plano de trabajo y características de la luminaria. Aquí no hay altura, por lo que no se compensa un techo alto automáticamente. Un porcentaje arbitrario no sustituye el cálculo lumínico."
            },
            {
              "q": "¿Influyen los colores de las paredes y el techo?",
              "a": "Sí. La reflectancia cambia el flujo que llega al plano pertinente. Esta estimación fija utilización en 1 sin calcular esas propiedades. Comprueba la distribución por separado con superficies oscuras o luz direccional."
            },
            {
              "q": "¿Puedo mezclar lámparas distintas?",
              "a": "Sí: suma manualmente sus lúmenes y compáralos con el flujo estimado. La cantidad mostrada supone lámparas iguales del flujo introducido. Sumar lúmenes no determina por sí solo la distribución de lux."
            }
          ],
          "disclaimer": "Los resultados son estimaciones orientativas. Verifica los datos de partida antes de tomar decisiones importantes."
        },
        "help": {
          "norm": "Lux elegidos para tu tarea; 150 es ejemplo, no requisito universal.",
          "lossFactor": "Fracción de luz conservada 0,4–1; no es utilización, que se supone 1."
        },
        "sources": [
          "https://cie.co.at/eilv/753",
          "https://cie.co.at/eilvterm/17-29-069"
        ],
        "normal": {
          "inputs": {
            "area": 18,
            "norm": 150,
            "lampLumens": 800,
            "lossFactor": 0.8
          },
          "expected": {
            "kind": "number",
            "value": 3375
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 5
              }
            },
            {
              "index": 4,
              "expectation": {
                "kind": "number",
                "value": 4000
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "lm",
          "independentLiteral": "3 375 лм"
        },
        "boundary": {
          "inputs": {
            "area": 1,
            "norm": 50,
            "lampLumens": 1000,
            "lossFactor": 1
          },
          "expected": {
            "kind": "number",
            "value": 50
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "number",
                "value": 1
              }
            },
            {
              "index": 4,
              "expectation": {
                "kind": "number",
                "value": 1000
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "lm",
          "independentLiteral": "50 лм"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 3375
        },
        "blankField": "area",
        "domainField": "area",
        "domainInvalid": -1,
        "countFields": []
      }
    ]
  },
  {
    "id": "pool-fill-time",
    "category": "household",
    "defaults": {
      "mode": "volume",
      "volume": 32,
      "length": 8,
      "width": 4,
      "diameter": 4,
      "depth": 1.5,
      "flow": 20,
      "flowUnit": "lmin"
    },
    "fieldNames": [
      "mode",
      "volume",
      "length",
      "width",
      "diameter",
      "depth",
      "flow",
      "flowUnit"
    ],
    "defaultInactive": [
      "length",
      "width",
      "diameter",
      "depth"
    ],
    "pages": [
      {
        "locale": "ru",
        "path": "/ru/household/pool-fill-time/",
        "h1": "Калькулятор наполнения бассейна",
        "body": {
          "longDescription": "Берёт объём — заданный напрямую или посчитанный по размерам прямоугольной либо круглой чаши, — переводит его в литры и делит на расход. Поддержаны ровно три формы, те, что встречаются на практике; произвольная чаша сюда не поместится, и делать вид, что помещается, калькулятор не станет.",
          "howToUse": [
            "Выберите, знаете вы объём или размеры.",
            "Введите значения для этой формы.",
            "Укажите расход воды и его единицу."
          ],
          "howItWorks": "Известный объём V вводится в м³; прямоугольная чаша V=L×B×h, круглая цилиндрическая V=π×(D/2)²×h. Расход переводится в л/мин: л/ч÷60, м³/ч×1000÷60. Время t=1000 V/F минут, часы t/60. Для строки «часы и минуты» сначала округляется общее t до минуты, затем выделяются часы и остаток 0..59. Глубина нужна только для двух режимов размеров.",
          "example": "Бассейн 32 м³ при 20 литрах в минуту наполняется 1600 минут, то есть около 26,7 часа. Объём 0,596 м³ при 10 л/мин даёт 59,6 мин; округлённая строка —1 ч 0 мин.",
          "faq": [
            {
              "q": "Где взять расход воды?",
              "a": "Наполните ведро известного объёма и засеките время. Садовый шланг и магистраль различаются в разы, и замер надёжнее догадки."
            },
            {
              "q": "Измерять глубину по факту наполнения?",
              "a": "Да. Бассейны редко наполняют до краёв, и объём определяет именно уровень воды."
            },
            {
              "q": "Поддерживаются ли другие формы?",
              "a": "Нет, только известный объём, прямоугольник и круг. Овальная или произвольная чаша потребовала бы геометрии, которой у калькулятора нет."
            },
            {
              "q": "Держится ли расход постоянным на практике?",
              "a": "Не обязательно: давление, шланг и другие потребители могут менять расход. Формула предполагает постоянный введённый поток и не учитывает испарение, утечки или дополнительные источники. Полученное время может оказаться как меньше, так и больше фактического."
            }
          ]
        },
        "help": {
          "mode": "Известный объём не требует размеров; для прямоугольника и круга вводите фактическую глубину налива.",
          "flow": "Более 0: измеренный постоянный поток; выберите соответствующую единицу. Утечки и испарение отдельно не считаются."
        },
        "sources": [],
        "normal": {
          "inputs": {
            "mode": "volume",
            "volume": 32,
            "length": 8,
            "width": 4,
            "diameter": 4,
            "depth": 1.5,
            "flow": 20,
            "flowUnit": "lmin"
          },
          "expected": {
            "kind": "number",
            "value": 26.67
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "duration",
                "numbers": [
                  26,
                  40
                ]
              }
            },
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 1600
              }
            }
          ],
          "inactive": [
            "length",
            "width",
            "diameter",
            "depth"
          ],
          "rowCount": 5,
          "primaryUnit": "ч",
          "independentLiteral": "26,67 ч"
        },
        "boundary": {
          "inputs": {
            "mode": "volume",
            "volume": 0.596,
            "length": 8,
            "width": 4,
            "diameter": 4,
            "depth": 1.5,
            "flow": 10,
            "flowUnit": "lmin"
          },
          "expected": {
            "kind": "number",
            "value": 0.99
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 59.6
              }
            },
            {
              "index": 0,
              "expectation": {
                "kind": "duration",
                "numbers": [
                  1,
                  0
                ]
              }
            }
          ],
          "inactive": [
            "length",
            "width",
            "diameter",
            "depth"
          ],
          "rowCount": 5,
          "primaryUnit": "ч",
          "independentLiteral": "0,99 ч"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 26.67
        },
        "blankField": "volume",
        "domainField": "volume",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "en",
        "path": "/en/household/pool-fill-time-calculator/",
        "h1": "Pool fill time calculator",
        "body": {
          "longDescription": "Takes the volume — given directly, or from the dimensions of a rectangular or round pool — converts it to litres and divides by the flow. Exactly three shapes are supported, the ones that actually come up; an arbitrary basin will not fit here, and the calculator does not pretend otherwise.",
          "howToUse": [
            "Choose whether you know the volume or the dimensions.",
            "Enter the figures for that shape.",
            "Enter the flow rate and pick its unit."
          ],
          "howItWorks": "Known volume V is in m³; rectangular basin V=L×B×h and cylindrical round basin V=π×(D/2)²×h. Convert flow to L/min: L/h÷60, m³/h×1000÷60. Time t=1000 V/F minutes; hours=t/60. The hours/minutes row rounds total t first, then splits whole hours and remainder 0..59. Depth is active only for the two dimension modes.",
          "example": "A 32 m³ pool at 20 litres per minute takes 1600 minutes, or about 26.7 hours. 0.596 m³ at 10 L/min takes 59.6 min; the rounded row is 1 h 0 min.",
          "faq": [
            {
              "q": "Where do I find the flow rate?",
              "a": "Fill a bucket of known volume and time it. A garden hose and a mains supply differ by several times, so measuring beats guessing."
            },
            {
              "q": "Should I measure the depth I actually fill to?",
              "a": "Yes. Pools are rarely filled to the brim, and the water line is what determines the volume."
            },
            {
              "q": "Are other shapes supported?",
              "a": "No, only a known volume, a rectangle and a circle. An oval or freeform basin would need a geometry the calculator does not have."
            },
            {
              "q": "Does the flow stay constant in practice?",
              "a": "Not necessarily: pressure, hose and other users can change flow. The formula assumes the constant entered rate and omits evaporation, leaks and additional sources. Its time may be below or above the actual duration."
            }
          ],
          "disclaimer": "Results are reference estimates. Verify the inputs before making important decisions."
        },
        "help": {
          "mode": "Known volume needs no dimensions; rectangle and circle use the actual fill depth.",
          "flow": "Above 0: measured constant flow with matching unit. Leaks and evaporation are not calculated separately."
        },
        "sources": [],
        "normal": {
          "inputs": {
            "mode": "volume",
            "volume": 32,
            "length": 8,
            "width": 4,
            "diameter": 4,
            "depth": 1.5,
            "flow": 20,
            "flowUnit": "lmin"
          },
          "expected": {
            "kind": "number",
            "value": 26.67
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "duration",
                "numbers": [
                  26,
                  40
                ]
              }
            },
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 1600
              }
            }
          ],
          "inactive": [
            "length",
            "width",
            "diameter",
            "depth"
          ],
          "rowCount": 5,
          "primaryUnit": "h",
          "independentLiteral": "26,67 ч"
        },
        "boundary": {
          "inputs": {
            "mode": "volume",
            "volume": 0.596,
            "length": 8,
            "width": 4,
            "diameter": 4,
            "depth": 1.5,
            "flow": 10,
            "flowUnit": "lmin"
          },
          "expected": {
            "kind": "number",
            "value": 0.99
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 59.6
              }
            },
            {
              "index": 0,
              "expectation": {
                "kind": "duration",
                "numbers": [
                  1,
                  0
                ]
              }
            }
          ],
          "inactive": [
            "length",
            "width",
            "diameter",
            "depth"
          ],
          "rowCount": 5,
          "primaryUnit": "h",
          "independentLiteral": "0,99 ч"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 26.67
        },
        "blankField": "volume",
        "domainField": "volume",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "uk",
        "path": "/uk/pobut/napovnennya-baseynu/",
        "h1": "Калькулятор наповнення басейну",
        "body": {
          "longDescription": "Час наповнення басейну рахується просто, а от результат зазвичай виявляється несподіваним: басейн на 32 кубометри від звичайного шланга наповнюється більше доби. Саме тому перед наповненням варто перевірити й фактичну витрату, і те, чи витримає її водопровід.",
          "howToUse": [
            "Оберіть відомий об’єм, прямокутну або круглу чашу.",
            "Введіть лише розміри обраної форми; глибина — фактична висота наливу.",
            "Виміряйте подачу об’ємом за час і виберіть л/хв, л/год або м³/год."
          ],
          "howItWorks": "Відомий V вводиться в м³; прямокутна чаша V=L×B×h, кругла циліндрична V=π×(D/2)²×h. Витрата в л/хв: л/год÷60, м³/год×1000÷60. Час t=1000 V/F хвилин, години t/60. Рядок «години й хвилини» спершу округлює загальне t до хвилини, далі виділяє години та залишок 0..59. Глибина активна лише у двох режимах розмірів.",
          "example": "Басейн 32 м³ за 20 літрів на хвилину наповнюється 1600 хвилин, тобто близько 26,7 години. 0,596 м³ за 10 л/хв дає 59,6 хв; округлений рядок —1 год 0 хв.",
          "faq": [
            {
              "q": "Як виміряти реальну витрату?",
              "a": "Наповніть ємність відомого об’єму та виміряйте час: літри поділіть на хвилини. Використовуйте той самий шланг і режим подачі, що для басейну. Сам діаметр труби не визначає витрату."
            },
            {
              "q": "Чому наповнення триває так довго?",
              "a": "Кубометр — це 1000 літрів. За сталої подачі 20 л/хв об’єм 32 м³ вимагає 1600 хвилин, тобто 26 год 40 хв. Зміна подачі змінює час обернено пропорційно лише в цій моделі."
            },
            {
              "q": "Чи можна прискорити наповнення?",
              "a": "Збільшити виміряну чисту подачу: перевірте дозволені умови підключення й обладнання. Два шланги не обов’язково подвоюють потік, якщо користуються спільним обмеженим джерелом. Виміряйте їх сумарну подачу."
            },
            {
              "q": "Чи враховано випаровування?",
              "a": "Ні. Модель ділить початково порожній об’єм на постійну подачу без випаровування, течі чи інших джерел. За потреби оцінюйте чисту подачу з вимірювань; результат не є гарантованою нижньою межею."
            }
          ],
          "disclaimer": "Результати є орієнтовними оцінками. Перед важливими рішеннями перевіряйте дані."
        },
        "help": {
          "mode": "Відомий об’єм не потребує розмірів; прямокутник і коло використовують фактичну глибину наливу.",
          "flow": "Понад 0: виміряний сталий потік і відповідна одиниця. Витоки й випаровування окремо не рахуються."
        },
        "sources": [],
        "normal": {
          "inputs": {
            "mode": "volume",
            "volume": 32,
            "length": 8,
            "width": 4,
            "diameter": 4,
            "depth": 1.5,
            "flow": 20,
            "flowUnit": "lmin"
          },
          "expected": {
            "kind": "number",
            "value": 26.67
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "duration",
                "numbers": [
                  26,
                  40
                ]
              }
            },
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 1600
              }
            }
          ],
          "inactive": [
            "length",
            "width",
            "diameter",
            "depth"
          ],
          "rowCount": 5,
          "primaryUnit": "год",
          "independentLiteral": "26,67 ч"
        },
        "boundary": {
          "inputs": {
            "mode": "volume",
            "volume": 0.596,
            "length": 8,
            "width": 4,
            "diameter": 4,
            "depth": 1.5,
            "flow": 10,
            "flowUnit": "lmin"
          },
          "expected": {
            "kind": "number",
            "value": 0.99
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 59.6
              }
            },
            {
              "index": 0,
              "expectation": {
                "kind": "duration",
                "numbers": [
                  1,
                  0
                ]
              }
            }
          ],
          "inactive": [
            "length",
            "width",
            "diameter",
            "depth"
          ],
          "rowCount": 5,
          "primaryUnit": "год",
          "independentLiteral": "0,99 ч"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 26.67
        },
        "blankField": "volume",
        "domainField": "volume",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "de",
        "path": "/de/haushalt/pool-fuellzeit-rechner/",
        "h1": "Rechner für die Füllzeit eines Pools",
        "body": {
          "longDescription": "Nimmt das Volumen — unmittelbar angegeben oder aus den Maßen eines rechteckigen oder runden Beckens —, rechnet es in Liter um und teilt es durch den Durchfluss. Unterstützt werden genau drei Formen, die, die tatsächlich vorkommen; ein beliebig geformtes Becken passt hier nicht hinein, und der Rechner tut nicht so, als wäre es anders.",
          "howToUse": [
            "Wähle, ob du das Volumen oder die Maße kennst.",
            "Trage die Zahlen für diese Form ein.",
            "Trage den Durchfluss ein und wähle seine Einheit."
          ],
          "howItWorks": "Bekanntes V wird in m³ eingegeben; rechteckig V=L×B×h, rund zylindrisch V=π×(D/2)²×h. Durchfluss in l/min: l/h÷60, m³/h×1000÷60. Zeit t=1000 V/F Minuten, Stunden=t/60. Für Stunden/Minuten wird zuerst die Gesamtzeit gerundet, dann in Stunden und Rest 0..59 geteilt. Tiefe ist nur in den beiden Maßmodi aktiv.",
          "example": "Ein Becken mit 32 m³ braucht bei 20 Litern je Minute 1600 Minuten, also rund 26,7 Stunden. 0,596 m³ bei 10 l/min ergeben 59,6 min; gerundet 1 h 0 min.",
          "faq": [
            {
              "q": "Woher bekomme ich den Durchfluss?",
              "a": "Füll einen Eimer bekannten Inhalts und stopp die Zeit. Ein Gartenschlauch und ein Hausanschluss unterscheiden sich um ein Mehrfaches, Messen schlägt also Schätzen."
            },
            {
              "q": "Soll ich die Tiefe messen, bis zu der ich tatsächlich fülle?",
              "a": "Ja. Becken werden selten bis zum Rand gefüllt, und der Wasserstand bestimmt das Volumen."
            },
            {
              "q": "Werden andere Formen unterstützt?",
              "a": "Nein, nur ein bekanntes Volumen, ein Rechteck und ein Kreis. Ein ovales oder frei geformtes Becken bräuchte eine Geometrie, die der Rechner nicht hat."
            },
            {
              "q": "Bleibt der Durchfluss in der Praxis gleich?",
              "a": "Nicht zwingend: Druck, Schlauch und andere Verbraucher können den Durchfluss ändern. Die Formel nimmt konstanten eingegebenen Zufluss an, ohne Verdunstung, Lecks oder weitere Quellen. Die Zeit kann kürzer oder länger als tatsächlich sein."
            }
          ],
          "disclaimer": "Die Ergebnisse sind Orientierungswerte. Prüfe die Eingaben vor wichtigen Entscheidungen."
        },
        "help": {
          "mode": "Bekanntes Volumen braucht keine Maße; Rechteck und Kreis verwenden tatsächliche Fülltiefe.",
          "flow": "Über 0: gemessener konstanter Zufluss mit passender Einheit. Lecks und Verdunstung fehlen."
        },
        "sources": [],
        "normal": {
          "inputs": {
            "mode": "volume",
            "volume": 32,
            "length": 8,
            "width": 4,
            "diameter": 4,
            "depth": 1.5,
            "flow": 20,
            "flowUnit": "lmin"
          },
          "expected": {
            "kind": "number",
            "value": 26.67
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "duration",
                "numbers": [
                  26,
                  40
                ]
              }
            },
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 1600
              }
            }
          ],
          "inactive": [
            "length",
            "width",
            "diameter",
            "depth"
          ],
          "rowCount": 5,
          "primaryUnit": "h",
          "independentLiteral": "26,67 ч"
        },
        "boundary": {
          "inputs": {
            "mode": "volume",
            "volume": 0.596,
            "length": 8,
            "width": 4,
            "diameter": 4,
            "depth": 1.5,
            "flow": 10,
            "flowUnit": "lmin"
          },
          "expected": {
            "kind": "number",
            "value": 0.99
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 59.6
              }
            },
            {
              "index": 0,
              "expectation": {
                "kind": "duration",
                "numbers": [
                  1,
                  0
                ]
              }
            }
          ],
          "inactive": [
            "length",
            "width",
            "diameter",
            "depth"
          ],
          "rowCount": 5,
          "primaryUnit": "h",
          "independentLiteral": "0,99 ч"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 26.67
        },
        "blankField": "volume",
        "domainField": "volume",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "es",
        "path": "/es/hogar/tiempo-de-llenado-de-una-piscina/",
        "h1": "Calculadora de tiempo de llenado de una piscina",
        "body": {
          "longDescription": "Toma el volumen —dado directamente, o a partir de las dimensiones de una piscina rectangular o redonda—, lo convierte a litros y lo divide entre el caudal. Se admiten exactamente tres formas, las que de verdad aparecen; un vaso de forma libre no encaja aquí, y la calculadora no finge lo contrario.",
          "howToUse": [
            "Elige si conoces el volumen o las dimensiones.",
            "Introduce las cifras de esa forma.",
            "Introduce el caudal y elige su unidad."
          ],
          "howItWorks": "V conocido se introduce en m³; vaso rectangular V=L×B×h y circular cilíndrico V=π×(D/2)²×h. Caudal en l/min: l/h÷60, m³/h×1000÷60. Tiempo t=1000 V/F minutos, horas=t/60. La fila de horas/minutos redondea primero el total y luego separa horas y resto 0..59. La profundidad solo está activa en los dos modos de dimensiones.",
          "example": "Una piscina de 32 m³ con 20 litros por minuto tarda 1600 minutos, unas 26,7 horas. 0,596 m³ a 10 l/min dan 59,6 min; fila redondeada 1 h 0 min.",
          "faq": [
            {
              "q": "¿De dónde saco el caudal?",
              "a": "Llena un cubo de volumen conocido y cronométralo. Una manguera de jardín y una toma de red se diferencian en varias veces, así que medir gana a estimar."
            },
            {
              "q": "¿Debo medir la profundidad hasta donde lleno de verdad?",
              "a": "Sí. Las piscinas rara vez se llenan hasta el borde, y es la línea del agua la que determina el volumen."
            },
            {
              "q": "¿Se admiten otras formas?",
              "a": "No, solo volumen conocido, rectángulo y círculo. Un vaso ovalado o de forma libre exigiría una geometría que la calculadora no tiene."
            },
            {
              "q": "¿El caudal se mantiene constante en la práctica?",
              "a": "No necesariamente: presión, manguera y otros consumos pueden cambiarlo. Se supone el caudal introducido constante, sin evaporación, fugas ni otras fuentes. El tiempo puede ser menor o mayor que el real."
            }
          ],
          "disclaimer": "Los resultados son estimaciones orientativas. Verifica los datos de partida antes de tomar decisiones importantes."
        },
        "help": {
          "mode": "Volumen conocido no necesita medidas; rectángulo y círculo usan profundidad real de llenado.",
          "flow": "Más de 0: caudal constante medido y unidad correspondiente. Fugas y evaporación no se calculan aparte."
        },
        "sources": [],
        "normal": {
          "inputs": {
            "mode": "volume",
            "volume": 32,
            "length": 8,
            "width": 4,
            "diameter": 4,
            "depth": 1.5,
            "flow": 20,
            "flowUnit": "lmin"
          },
          "expected": {
            "kind": "number",
            "value": 26.67
          },
          "rows": [
            {
              "index": 0,
              "expectation": {
                "kind": "duration",
                "numbers": [
                  26,
                  40
                ]
              }
            },
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 1600
              }
            }
          ],
          "inactive": [
            "length",
            "width",
            "diameter",
            "depth"
          ],
          "rowCount": 5,
          "primaryUnit": "h",
          "independentLiteral": "26,67 ч"
        },
        "boundary": {
          "inputs": {
            "mode": "volume",
            "volume": 0.596,
            "length": 8,
            "width": 4,
            "diameter": 4,
            "depth": 1.5,
            "flow": 10,
            "flowUnit": "lmin"
          },
          "expected": {
            "kind": "number",
            "value": 0.99
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 59.6
              }
            },
            {
              "index": 0,
              "expectation": {
                "kind": "duration",
                "numbers": [
                  1,
                  0
                ]
              }
            }
          ],
          "inactive": [
            "length",
            "width",
            "diameter",
            "depth"
          ],
          "rowCount": 5,
          "primaryUnit": "h",
          "independentLiteral": "0,99 ч"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 26.67
        },
        "blankField": "volume",
        "domainField": "volume",
        "domainInvalid": -1,
        "countFields": []
      }
    ]
  },
  {
    "id": "rainfall-volume",
    "category": "household",
    "defaults": {
      "area": 60,
      "depth": 25,
      "coeff": 0.9
    },
    "fieldNames": [
      "area",
      "depth",
      "coeff"
    ],
    "defaultInactive": [],
    "pages": [
      {
        "locale": "ru",
        "path": "/ru/household/sbor-dozhdevoy-vody/",
        "h1": "Калькулятор сбора дождевой воды",
        "body": {
          "longDescription": "Переводит слой дождя над горизонтальной проекцией крыши в потенциальный объём:1 мм на 1 м² даёт 1 литр до потерь. Для 60 м² и 25 мм это 1500 л, а при выбранной доле сбора 0,9 —1350 л. Доля сбора остаётся вашим допущением, не нормативом материала. Отдельно показываются условные 200-литровые ёмкости; их число не учитывает свободное место, перелив и качество воды.",
          "howToUse": [
            "Возьмите горизонтальную проекцию крыши; вертикальный дождь — допущение модели.",
            "Введите слой в миллиметрах за выбранное событие, а не интенсивность без длительности.",
            "Укажите свою долю сбора;0,9 — пример, не норма материала.",
            "Сравните объём со свободной ёмкостью;200-литровые бочки округлены вверх условно."
          ],
          "howItWorks": "V=A×d×c литров: A — горизонтальная площадь сбора в м², d — выбранный слой осадков в мм, 0<c≤1 — доля, дошедшая до сборника. 1 м²×1 мм=0,001 м³=1 л. Потери=A×d×(1−c); бочки по 200 л=ceil(V/200). Это потенциальный объём при выбранном c; перелив, ограничение ёмкости, отдельный первый смыв и пригодность воды не вычисляются.",
          "example": "С крыши в 60 м² при дожде 25 мм и коэффициенте 0,9 соберётся 1350 литров. Для 10 м²,20 мм иc=1 получается 200 л, одна бочка, потери 0; вместимость реального бака не проверяется.",
          "faq": [
            {
              "q": "Почему площадь берётся в плане, а не по скату?",
              "a": "В этой модели дождь принимается вертикальным, поэтому используют горизонтальную проекцию. Ветер и ориентация могут изменить фактический сбор и здесь не моделируются. Для площади скатов сначала найдите соответствующую проекцию."
            },
            {
              "q": "Что такое коэффициент стока?",
              "a": "Долю исходного объёма, которая достигает сборника. Выбранное 0,9 означает 10% совокупных потерь, но не гарантируется для любого металла или черепицы. Учитывайте свои измерения, смачивание, отвод первой воды и потери тракта; переполнение хранилища отдельно не считается."
            },
            {
              "q": "Сколько воды даёт обычный дождь?",
              "a": "Нужен измеренный или прогнозный слой за конкретное событие. Одни миллиметры без длительности не определяют интенсивность «слабый/сильный». Например, выбранные 25 мм на 60 м² при 0,9 дают 1350 л независимо от словесного названия дождя."
            },
            {
              "q": "Можно ли пить такую воду?",
              "a": "Пригодность к питью объёмом не определяется. Вода с крыши может содержать микробы и химические загрязнения; фильтр и обеззараживание не гарантируют удаления всех веществ. Проверка и обработка должны отвечать конкретному использованию и местным требованиям, включая пищевые культуры."
            }
          ]
        },
        "help": {
          "depth": "Миллиметры за конкретное событие; без длительности не задают интенсивность дождя.",
          "coeff": "Доля сбора более 0 до 1; 0,9 — пример, не подтверждённая норма покрытия."
        },
        "sources": [
          "https://www.cdc.gov/drinking-water/about/collecting-rainwater-and-your-health-an-overview.html"
        ],
        "normal": {
          "inputs": {
            "area": 60,
            "depth": 25,
            "coeff": 0.9
          },
          "expected": {
            "kind": "number",
            "value": 1350
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 7
              }
            },
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 150
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "л",
          "independentLiteral": "1 350 л"
        },
        "boundary": {
          "inputs": {
            "area": 10,
            "depth": 20,
            "coeff": 1
          },
          "expected": {
            "kind": "number",
            "value": 200
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 1
              }
            },
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 0
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "л",
          "independentLiteral": "200 л"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 1350
        },
        "blankField": "area",
        "domainField": "area",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "en",
        "path": "/en/household/rainwater-harvesting/",
        "h1": "Rainwater harvesting calculator",
        "body": {
          "longDescription": "Convert rainfall depth over the roof’s horizontal plan into potential volume:1 mm on 1 m² gives 1 litre before losses. For 60 m² and 25 mm that is 1500 L; an entered collection fraction 0.9 gives 1350 L. The fraction is your assumption, not a material standard. Separate 200-litre barrel equivalents do not account for available capacity, overflow or water quality.",
          "howToUse": [
            "Use the horizontal roof plan; vertical rain is a model assumption.",
            "Enter millimetres for the selected event, not intensity without duration.",
            "Enter your collection fraction;0.9 is an example, not a material standard.",
            "Compare volume with available storage;200-litre barrels are a rounded-up equivalent."
          ],
          "howItWorks": "V=A×d×c litres: A is horizontal collection area m², d is rainfall depth mm and 0<c≤1 is the share reaching storage. 1 m²×1 mm=0.001 m³=1 L. Losses=A×d×(1−c);200 L barrels=ceil(V/200). This is potential volume for selected c; overflow, storage capacity, separate first flush and water suitability are not calculated.",
          "example": "A 60 m² roof under 25 mm of rain with a coefficient of 0.9 collects 1350 litres. 10 m²,20 mm and c=1 yield 200 L, one barrel and zero loss; actual storage capacity is not checked.",
          "faq": [
            {
              "q": "Why the area in plan rather than the slope?",
              "a": "This model assumes vertical rain, so use horizontal plan area. Wind and orientation may change actual capture and are not modelled. Convert sloped surface area to its corresponding plan first."
            },
            {
              "q": "What is the runoff coefficient?",
              "a": "The fraction of initial volume reaching collection. An entered 0.9 means 10% combined losses, without guaranteeing that value for metal or tile. Use your measurements and allow for wetting, first flush and conveyance losses; storage overflow is not separately calculated."
            },
            {
              "q": "How much does ordinary rain give?",
              "a": "Use measured or forecast depth for a defined event. Millimetres alone without duration cannot classify intensity as light or heavy. For example, selected 25 mm over 60 m² at 0.9 gives 1350 L regardless of a verbal rain category."
            },
            {
              "q": "Is the water drinkable?",
              "a": "Volume does not establish drinking safety. Roof runoff may contain microbes and chemical contaminants; filtration and disinfection do not guarantee removal of everything. Testing and treatment must match the intended use and local requirements, including use on food crops."
            }
          ],
          "disclaimer": "Results are reference estimates. Verify the inputs before making important decisions."
        },
        "help": {
          "depth": "Millimetres for a defined event; without duration they do not give rainfall intensity.",
          "coeff": "Collection fraction above 0 up to 1; 0.9 is an example, not a verified roof standard."
        },
        "sources": [
          "https://www.cdc.gov/drinking-water/about/collecting-rainwater-and-your-health-an-overview.html"
        ],
        "normal": {
          "inputs": {
            "area": 60,
            "depth": 25,
            "coeff": 0.9
          },
          "expected": {
            "kind": "number",
            "value": 1350
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 7
              }
            },
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 150
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "L",
          "independentLiteral": "1 350 л"
        },
        "boundary": {
          "inputs": {
            "area": 10,
            "depth": 20,
            "coeff": 1
          },
          "expected": {
            "kind": "number",
            "value": 200
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 1
              }
            },
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 0
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "L",
          "independentLiteral": "200 л"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 1350
        },
        "blankField": "area",
        "domainField": "area",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "uk",
        "path": "/uk/pobut/zbir-doshchovoyi-vody/",
        "h1": "Калькулятор збору дощової води",
        "body": {
          "longDescription": "Переводить шар дощу над горизонтальною проєкцією даху в потенційний об’єм:1 мм на 1 м² дає 1 літр до втрат. Для 60 м² і 25 мм це 1500 л, а за обраної частки збору 0,9 —1350 л. Частка є вашим припущенням, не нормою покриття. Окремі еквіваленти 200-літрових бочок не враховують вільну місткість, перелив чи якість води.",
          "howToUse": [
            "Візьміть горизонтальну проєкцію даху; вертикальний дощ — припущення моделі.",
            "Введіть міліметри за обрану подію, не інтенсивність без тривалості.",
            "Задайте свою частку збору;0,9 — приклад, не норма матеріалу."
          ],
          "howItWorks": "V=A×d×c літрів: A — горизонтальна площа збору м², d — шар опадів мм, 0<c≤1 — частка, що доходить до збірника. 1 м²×1 мм=0,001 м³=1 л. Втрати=A×d×(1−c); бочки по 200 л=ceil(V/200). Це потенційний об’єм за обраним c; перелив, місткість, окремий перший змив і придатність води не визначаються.",
          "example": "З даху в 60 м² за дощу 25 мм і коефіцієнта 0,9 збереться 1350 літрів. 10 м²,20 мм іc=1 дають 200 л, одну бочку та втрати 0; місткість реального бака не перевіряється.",
          "faq": [
            {
              "q": "Яку площу брати — по схилу чи в проєкції?",
              "a": "Модель припускає вертикальний дощ, тому потрібна горизонтальна проєкція. Вітер та орієнтація можуть змінити фактичний збір і тут не моделюються. Площу схилів спочатку переведіть у проєкцію."
            },
            {
              "q": "Що враховує коефіцієнт стоку?",
              "a": "Частку початкового об’єму, що доходить до збірника. Обрані 0,9 означають 10% сукупних втрат, але не гарантуються для металу чи черепиці. Враховуйте вимірювання, змочування, відведення першої води й втрати тракту; перелив сховища окремо не рахується."
            },
            {
              "q": "Чому міліметр на метр квадратний дає рівно літр?",
              "a": "Бо 1 м²×0,001 м=0,001 м³=1 літр. Це точне співвідношення одиниць; коефіцієнт збору лише зменшує геометричний об’єм."
            },
            {
              "q": "Чи можна пити зібрану воду?",
              "a": "Об’єм не визначає придатності до пиття. Вода з даху може містити мікроби й хімічні забруднення; фільтрація та знезараження не гарантують видалення всього. Перевірка й обробка мають відповідати використанню та місцевим вимогам, зокрема для харчових культур."
            }
          ],
          "disclaimer": "Результати є орієнтовними оцінками. Перед важливими рішеннями перевіряйте дані."
        },
        "help": {
          "depth": "Міліметри за конкретну подію; без тривалості не задають інтенсивність дощу.",
          "coeff": "Частка збору понад 0 до 1; 0,9 — приклад, не підтверджена норма покриття."
        },
        "sources": [
          "https://www.cdc.gov/drinking-water/about/collecting-rainwater-and-your-health-an-overview.html"
        ],
        "normal": {
          "inputs": {
            "area": 60,
            "depth": 25,
            "coeff": 0.9
          },
          "expected": {
            "kind": "number",
            "value": 1350
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 7
              }
            },
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 150
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "л",
          "independentLiteral": "1 350 л"
        },
        "boundary": {
          "inputs": {
            "area": 10,
            "depth": 20,
            "coeff": 1
          },
          "expected": {
            "kind": "number",
            "value": 200
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 1
              }
            },
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 0
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "л",
          "independentLiteral": "200 л"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 1350
        },
        "blankField": "area",
        "domainField": "area",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "de",
        "path": "/de/haushalt/regenwasser-rechner/",
        "h1": "Rechner für die Regenwassernutzung",
        "body": {
          "longDescription": "Wandelt Niederschlag über der horizontalen Dachprojektion in potenzielles Volumen um:1 mm auf 1 m² ergibt 1 Liter vor Verlusten. Für 60 m² und 25 mm sind das 1500 l, bei gewähltem Sammelanteil 0,9 noch 1350 l. Der Anteil ist deine Annahme, keine Materialnorm. Die 200-Liter-Tonnenäquivalente berücksichtigen weder freie Kapazität noch Überlauf oder Wasserqualität.",
          "howToUse": [
            "Horizontale Dachprojektion nutzen; senkrechter Regen ist eine Modellannahme.",
            "Millimeter für das gewählte Ereignis eingeben, keine Intensität ohne Dauer.",
            "Eigenen Sammelanteil angeben;0,9 ist Beispiel, keine Materialnorm.",
            "Volumen mit freiem Speicher vergleichen;200-Liter-Tonnen sind ein aufgerundetes Äquivalent."
          ],
          "howItWorks": "V=A×d×c Liter: A ist die horizontale Sammelfläche m², d die Niederschlagshöhe mm und 0<c≤1 der Anteil am Speicher. 1 m²×1 mm=0,001 m³=1 l. Verluste=A×d×(1−c);200-l-Behälter=ceil(V/200). Dies ist das mögliche Volumen für c; Überlauf, Speicherkapazität, gesonderter Erstabfluss und Wasserqualität werden nicht berechnet.",
          "example": "Ein Dach von 60 m² sammelt bei 25 mm Regen und einem Beiwert von 0,9 genau 1350 Liter. 10 m²,20 mm und c=1 ergeben 200 l, einen Behälter und Verlust 0; reale Speicherkapazität wird nicht geprüft.",
          "faq": [
            {
              "q": "Warum die Fläche im Grundriss und nicht die Schräge?",
              "a": "Das Modell nimmt senkrechten Regen an, daher die horizontale Projektion. Wind und Ausrichtung können tatsächlichen Fang verändern und fehlen hier. Schräge Fläche zunächst in die passende Projektion umrechnen."
            },
            {
              "q": "Was ist der Abflussbeiwert?",
              "a": "Den Anteil des Ausgangsvolumens, der den Sammelpunkt erreicht. Gewählte 0,9 bedeuten 10% Gesamtverlust, ohne Garantie für Metall oder Ziegel. Messungen, Benetzung, Erstabfluss und Transport berücksichtigen; Speicherüberlauf wird nicht gesondert berechnet."
            },
            {
              "q": "Wie viel bringt gewöhnlicher Regen?",
              "a": "Gemessene oder vorhergesagte Höhe für ein bestimmtes Ereignis verwenden. Millimeter ohne Dauer bestimmen keine Intensität wie leicht oder stark. Gewählte 25 mm auf 60 m² bei 0,9 ergeben 1350 l unabhängig von einer Regenbezeichnung."
            },
            {
              "q": "Ist das Wasser trinkbar?",
              "a": "Das Volumen belegt keine Trinkwassersicherheit. Dachabfluss kann Keime und chemische Schadstoffe enthalten; Filterung und Desinfektion entfernen nicht garantiert alles. Prüfung und Behandlung müssen Nutzung und örtlichen Anforderungen entsprechen, auch bei Nahrungspflanzen."
            }
          ],
          "disclaimer": "Die Ergebnisse sind Orientierungswerte. Prüfe die Eingaben vor wichtigen Entscheidungen."
        },
        "help": {
          "depth": "Millimeter eines bestimmten Ereignisses; ohne Dauer keine Regenintensität.",
          "coeff": "Sammelanteil über 0 bis 1; 0,9 ist Beispiel, keine belegte Dachnorm."
        },
        "sources": [
          "https://www.cdc.gov/drinking-water/about/collecting-rainwater-and-your-health-an-overview.html"
        ],
        "normal": {
          "inputs": {
            "area": 60,
            "depth": 25,
            "coeff": 0.9
          },
          "expected": {
            "kind": "number",
            "value": 1350
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 7
              }
            },
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 150
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "l",
          "independentLiteral": "1 350 л"
        },
        "boundary": {
          "inputs": {
            "area": 10,
            "depth": 20,
            "coeff": 1
          },
          "expected": {
            "kind": "number",
            "value": 200
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 1
              }
            },
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 0
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "l",
          "independentLiteral": "200 л"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 1350
        },
        "blankField": "area",
        "domainField": "area",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "es",
        "path": "/es/hogar/recogida-de-agua-de-lluvia/",
        "h1": "Calculadora de recogida de agua de lluvia",
        "body": {
          "longDescription": "Convierte lluvia sobre la proyección horizontal del tejado en volumen potencial:1 mm sobre 1 m² da 1 litro antes de pérdidas. Para 60 m² y 25 mm son 1500 l; con fracción elegida 0,9 se obtienen 1350 l. La fracción es tu supuesto, no una norma del material. Los equivalentes de barriles de 200 l no consideran capacidad libre, desbordamiento ni calidad del agua.",
          "howToUse": [
            "Usa la proyección horizontal; la lluvia vertical es un supuesto.",
            "Introduce milímetros del episodio elegido, no intensidad sin duración.",
            "Introduce tu fracción de captación;0,9 es un ejemplo, no norma del material.",
            "Compara volumen con espacio disponible; los barriles de 200 l son un equivalente redondeado hacia arriba."
          ],
          "howItWorks": "V=A×d×c litros: A es superficie horizontal de captación m², d precipitación mm y 0<c≤1 la fracción que llega al depósito. 1 m²×1 mm=0,001 m³=1 l. Pérdidas=A×d×(1−c); depósitos de 200 l=ceil(V/200). Es volumen potencial para c elegido; no calcula rebose, capacidad, primer lavado separado ni calidad del agua.",
          "example": "Un tejado de 60 m² bajo 25 mm de lluvia con un coeficiente de 0,9 recoge 1350 litros. 10 m²,20 mm y c=1 dan 200 l, un depósito y pérdidas 0; no se verifica la capacidad real.",
          "faq": [
            {
              "q": "¿Por qué la superficie en planta y no la del faldón?",
              "a": "El modelo supone lluvia vertical, por eso usa proyección horizontal. Viento y orientación pueden cambiar la captación real y no se modelan. Convierte primero la superficie inclinada a su proyección."
            },
            {
              "q": "¿Qué es el coeficiente de escorrentía?",
              "a": "La fracción del volumen inicial que llega al depósito. Elegir 0,9 significa 10% de pérdidas combinadas, sin garantía para metal o teja. Considera mediciones, mojado, primer lavado y conducción; no se calcula desbordamiento por separado."
            },
            {
              "q": "¿Cuánto da una lluvia corriente?",
              "a": "Usa profundidad medida o prevista de un episodio definido. Milímetros sin duración no clasifican intensidad débil o fuerte. Elegir 25 mm sobre 60 m² con 0,9 da 1350 l independientemente del nombre del episodio."
            },
            {
              "q": "¿El agua es potable?",
              "a": "El volumen no acredita seguridad potable. El agua del tejado puede contener microbios y contaminantes químicos; filtrar y desinfectar no garantiza eliminar todo. Ensayo y tratamiento deben corresponder al uso y requisitos locales, también para cultivos alimentarios."
            }
          ],
          "disclaimer": "Los resultados son estimaciones orientativas. Verifica los datos de partida antes de tomar decisiones importantes."
        },
        "help": {
          "depth": "Milímetros de un episodio definido; sin duración no indican intensidad.",
          "coeff": "Fracción de captación mayor que 0 hasta 1; 0,9 es ejemplo, no norma verificada del tejado."
        },
        "sources": [
          "https://www.cdc.gov/drinking-water/about/collecting-rainwater-and-your-health-an-overview.html"
        ],
        "normal": {
          "inputs": {
            "area": 60,
            "depth": 25,
            "coeff": 0.9
          },
          "expected": {
            "kind": "number",
            "value": 1350
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 7
              }
            },
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 150
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "l",
          "independentLiteral": "1 350 л"
        },
        "boundary": {
          "inputs": {
            "area": 10,
            "depth": 20,
            "coeff": 1
          },
          "expected": {
            "kind": "number",
            "value": 200
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 1
              }
            },
            {
              "index": 3,
              "expectation": {
                "kind": "number",
                "value": 0
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "primaryUnit": "l",
          "independentLiteral": "200 л"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 1350
        },
        "blankField": "area",
        "domainField": "area",
        "domainInvalid": -1,
        "countFields": []
      }
    ]
  },
  {
    "id": "utility-total",
    "category": "household",
    "defaults": {
      "meters": "electricity 250 5.5\nwater 8 45\ngas 40 7.2",
      "fixed": 1200
    },
    "fieldNames": [
      "meters",
      "fixed"
    ],
    "defaultInactive": [],
    "pages": [
      {
        "locale": "ru",
        "path": "/ru/household/kommunalnye-platezhi/",
        "h1": "Калькулятор коммунальных платежей",
        "body": {
          "longDescription": "Суммирует расход за выбранный месяц по каждой услуге и её цену за единицу, затем добавляет постоянные начисления. В строке обязательны название, расход и тариф; последние два числа относятся к расходу и цене, а весь текст перед ними — к названию. Вводите расход периода, то есть разницу показаний, а не накопленный счётчик. Переменная и постоянная части показываются отдельно, чтобы обнаружить ошибку единицы или повторный сбор.",
          "howToUse": [
            "Введите строку «Название расход тариф»; десятичная точка и запятая допустимы, разделители тысяч не используйте.",
            "Последние два числа строки — расход и цена за единицу.",
            "Начисления без счётчика впишите в поле постоянной части.",
            "Сравните переменную и постоянную части в результате."
          ],
          "howItWorks": "В каждой непустой строке нужны название услуги и два числа: расход u и тариф p. Читаются последние два токена; всё перед ними — название. Пробел или точка с запятой разделяет токены, точка и запятая внутри числа означают десятичную часть, без разделителей тысяч. Переменная сумма Σu×p, итог=она+фиксированная часть. Год=12 одинаковых месяцев; доли услуг отдельно не выводятся. Все суммы задавайте в одной валюте и на одной налоговой базе.",
          "example": "Электричество, вода и газ на 2 023 плюс 1 200 постоянных дают 3 223 в месяц. Строка «вода 0 6» и фиксированная часть 0 дают 0,00 за месяц и за год.",
          "faq": [
            {
              "q": "Что считать постоянным начислением?",
              "a": "Всё, что выставляют одинаково каждый месяц независимо от расхода: содержание дома, вывоз мусора, домофон, аренда счётчика. У них нет ни расхода, ни тарифа, поэтому в таблице им не место."
            },
            {
              "q": "В каких единицах вводить расход?",
              "a": "В тех, за которые назначен тариф. Электричество по кВт·ч — вводите киловатт-часы; вода по кубометру — кубометры."
            },
            {
              "q": "Как ввести двухтарифный счётчик электричества?",
              "a": "Двумя строками — день и ночь — каждая со своим расходом и тарифом. В таблице будет видно, какая из них дороже."
            },
            {
              "q": "Почему годовая сумма — это просто двенадцать месяцев?",
              "a": "Потому что это проекция текущего месяца, а не прогноз. Отопление и кондиционирование делают настоящий год неровным, и калькулятор не притворяется, будто знает ваш сезон."
            },
            {
              "q": "Это то же, что калькулятор расхода электроэнергии?",
              "a": "Тот берёт мощность и часы, чтобы оценить энергию. Этот берёт уже известный расход периода — разницу показаний — и тариф. Накопленный показатель счётчика не подставляйте вместо расхода."
            }
          ]
        },
        "help": {
          "meters": "Каждый ряд: название расход тариф. Расход периода, не накопленный счётчик. Точка/запятая десятичные, без группировки тысяч. Все цены в одной денежной единице.",
          "fixed": "Неотрицательная сумма постоянных начислений за тот же месяц; не повторяйте её в строках услуг."
        },
        "sources": [],
        "normal": {
          "inputs": {
            "meters": "electricity 250 5.5\nwater 8 45\ngas 40 7.2",
            "fixed": 1200
          },
          "expected": {
            "kind": "number",
            "value": 3223
          },
          "rows": [
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 2023
              }
            },
            {
              "index": 4,
              "expectation": {
                "kind": "number",
                "value": 38676
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "₽",
          "independentLiteral": "3 223,00 ₽"
        },
        "boundary": {
          "inputs": {
            "meters": "water 0 6",
            "fixed": 0
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
                "value": 0
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "₽",
          "independentLiteral": "0,00 ₽"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 3223
        },
        "blankField": "fixed",
        "domainField": "fixed",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "en",
        "path": "/en/household/utility-bills/",
        "h1": "Utility bills calculator",
        "body": {
          "longDescription": "Sum each service’s consumption for the selected month times its unit tariff, then add fixed charges. Every line needs a name, usage and tariff: the last two numbers are usage and price, and preceding text is the name. Enter period consumption, meaning the difference of meter readings, rather than a cumulative reading. Variable and fixed parts remain separate so unit errors or duplicate fees are visible.",
          "howToUse": [
            "Enter “Name usage tariff”; decimal dot or comma is accepted, but do not use thousands separators.",
            "The last two numbers on the line are the usage and the price per unit.",
            "Put charges without a meter into the fixed field.",
            "Compare the metered part with the fixed part in the result."
          ],
          "howItWorks": "Each nonblank line needs a service name and two numbers: usage u and tariff p. The last two tokens are read; everything before them is the name. Spaces or semicolons separate tokens; a dot or comma inside a number is decimal, with no thousands separators. Metered sum=Σu×p; total adds fixed charges. Year=12 identical months; service percentages are not rendered. Use one currency and one tax basis throughout.",
          "example": "Electricity, water and gas at 2,023 plus 1,200 of fixed charges come to 3,223 a month. Line “water 0 6” with fixed charge 0 gives 0.00 for both month and year.",
          "faq": [
            {
              "q": "What counts as a fixed charge?",
              "a": "Anything billed the same every month regardless of use: building maintenance, waste collection, the entryphone, a rented meter. They have no usage and no tariff, so they do not belong in the table."
            },
            {
              "q": "Which units should usage be in?",
              "a": "Whatever the tariff is per. If electricity is priced per kWh, enter kilowatt-hours; if water is priced per cubic metre, enter cubic metres."
            },
            {
              "q": "How do I enter a two-rate electricity meter?",
              "a": "As two lines — day and night — each with its own usage and tariff. The table will show which of the two costs more."
            },
            {
              "q": "Why is the yearly figure just twelve times the month?",
              "a": "Because it is a projection of this month, not a forecast. Heating and air conditioning make real years uneven; the calculator does not pretend to know your season."
            },
            {
              "q": "Is this the same as the electricity usage calculator?",
              "a": "The other tool estimates energy from power and hours. This one uses known period consumption—the difference of readings—and its tariff. Do not substitute the cumulative meter reading for usage."
            }
          ],
          "disclaimer": "Results are reference estimates. Verify the inputs before making important decisions."
        },
        "help": {
          "meters": "Each line: name usage tariff. Period consumption, not cumulative meter reading. Dot/comma are decimal; no thousands grouping. All prices use one currency.",
          "fixed": "Nonnegative fixed charges for the same month; do not repeat them in service lines."
        },
        "sources": [],
        "normal": {
          "inputs": {
            "meters": "electricity 250 5.5\nwater 8 45\ngas 40 7.2",
            "fixed": 1200
          },
          "expected": {
            "kind": "number",
            "value": 3223
          },
          "rows": [
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 2023
              }
            },
            {
              "index": 4,
              "expectation": {
                "kind": "number",
                "value": 38676
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "$",
          "independentLiteral": "3 223,00 ₽"
        },
        "boundary": {
          "inputs": {
            "meters": "water 0 6",
            "fixed": 0
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
                "value": 0
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "$",
          "independentLiteral": "0,00 ₽"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 3223
        },
        "blankField": "fixed",
        "domainField": "fixed",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "uk",
        "path": "/uk/pobut/komunalni-platezhi/",
        "h1": "Калькулятор комунальних платежів",
        "body": {
          "longDescription": "Підсумовує витрату за обраний місяць для кожної послуги та її ціну за одиницю, потім додає постійні нарахування. Рядок обов’язково має назву, витрату й тариф; останні два числа є витратою та ціною, а весь попередній текст — назвою. Вводьте витрату періоду, тобто різницю показань, не накопичений лічильник. Змінна й постійна частини видимі окремо, щоб знайти помилку одиниць або повторний збір.",
          "howToUse": [
            "Введіть рядок «Назва витрата тариф»; десяткова крапка й кома допустимі, роздільники тисяч не використовуйте.",
            "Останні два числа рядка це витрата і ціна за одиницю.",
            "Нарахування без лічильника впишіть у поле постійної частини.",
            "Порівняйте лічильникову і постійну частини в результаті."
          ],
          "howItWorks": "Кожен непорожній рядок містить назву послуги та два числа: витрату u й тариф p. Читаються останні два токени; усе перед ними — назва. Пробіл чи крапка з комою розділяє токени; крапка й кома всередині числа — десяткові, без розділювачів тисяч. Змінна сума Σu×p, підсумок додає постійну частину. Рік=12 однакових місяців; частки послуг не виводяться. Валюта й податкова база всюди однакові.",
          "example": "Електрика, вода і газ на 2 023 плюс 1 200 постійних дають 3 223 на місяць. Рядок «вода 0 6» і постійна частина 0 дають 0,00 за місяць і рік.",
          "faq": [
            {
              "q": "Що вважати постійним нарахуванням?",
              "a": "Усе, що виставляють однаково щомісяця незалежно від споживання: утримання будинку, вивезення сміття, домофон, оренда лічильника. У них немає ні витрати, ні тарифу, тож у таблиці їм не місце."
            },
            {
              "q": "У яких одиницях вводити витрату?",
              "a": "У тих, за які встановлено тариф. Якщо електрика за кВт·год — вводьте кіловат-години; якщо вода за кубометр — кубометри."
            },
            {
              "q": "Як ввести двозонний лічильник електрики?",
              "a": "Двома рядками — день і ніч — кожен зі своєю витратою і тарифом. У таблиці буде видно, який із них дорожчий."
            },
            {
              "q": "Чому річна сума це просто дванадцять місяців?",
              "a": "Бо це проєкція цього місяця, а не прогноз. Опалення і кондиціонування роблять реальний рік нерівним, і калькулятор не вдає, ніби знає ваш сезон."
            },
            {
              "q": "Це те саме, що калькулятор витрати електроенергії?",
              "a": "Той оцінює енергію з потужності й годин. Цей бере відому витрату періоду — різницю показань — і тариф. Не підставляйте накопичений показник замість споживання."
            }
          ],
          "disclaimer": "Результати є орієнтовними оцінками. Перед важливими рішеннями перевіряйте вихідні дані."
        },
        "help": {
          "meters": "Рядок: назва витрата тариф. Споживання періоду, не накопичений лічильник. Крапка/кома десяткові, без тисячних груп. Усі ціни в одній валюті.",
          "fixed": "Невід’ємна сума постійних нарахувань за той самий місяць; не повторюйте її в рядках послуг."
        },
        "sources": [],
        "normal": {
          "inputs": {
            "meters": "electricity 250 5.5\nwater 8 45\ngas 40 7.2",
            "fixed": 1200
          },
          "expected": {
            "kind": "number",
            "value": 3223
          },
          "rows": [
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 2023
              }
            },
            {
              "index": 4,
              "expectation": {
                "kind": "number",
                "value": 38676
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "₴",
          "independentLiteral": "3 223,00 ₽"
        },
        "boundary": {
          "inputs": {
            "meters": "water 0 6",
            "fixed": 0
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
                "value": 0
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "₴",
          "independentLiteral": "0,00 ₽"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 3223
        },
        "blankField": "fixed",
        "domainField": "fixed",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "de",
        "path": "/de/haushalt/nebenkosten-rechner/",
        "h1": "Nebenkosten-Rechner",
        "body": {
          "longDescription": "Eine Monatsabrechnung verbindet verbrauchsabhängige Positionen und feste Gebühren. Jede Zeile braucht Name, Verbrauch und Tarif; die letzten zwei Zahlen sind Verbrauch und Preis, der vorherige Text ist der Name. Verbrauch ist die Differenz der Zählerstände, nicht der kumulative Stand. Der Rechner multipliziert jede Position, addiert Festbeträge und zeigt beide Teile getrennt, ohne Steuer oder Prozentsätze selbst hinzuzufügen.",
          "howToUse": [
            "Je Zeile „Name Verbrauch Tarif“ eingeben; Dezimalpunkt oder Komma sind zulässig, keine Tausendertrennzeichen.",
            "Verwende für jede Sparte eine eigene Zeile — Strom, Wasser, Gas.",
            "Trage die Summe der festen Grundgebühren in das dafür vorgesehene Feld ein.",
            "Lies die Monatssumme ab und prüfe in der Tabelle, welche Position am stärksten wiegt."
          ],
          "howItWorks": "Jede nichtleere Zeile braucht Bezeichnung und zwei Zahlen: Verbrauch u und Tarif p. Die letzten zwei Tokens werden gelesen, davor steht der Name. Leerzeichen oder Semikolon trennen Tokens; Punkt oder Komma innerhalb einer Zahl sind Dezimalzeichen, ohne Tausendertrennzeichen. Verbrauchssumme=Σu×p, Gesamtsumme plus Festbetrag. Jahr=12 gleiche Monate; Positionsanteile werden nicht ausgegeben. Einheitliche Währung und Steuerbasis verwenden.",
          "example": "Zeilen „Strom 250 0,32“, „Wasser 6 4,10“ und „Gas 80 0,11“ ergeben 80,00+24,60+8,80=113,40. Mit 18,50 Festgebühren sind das 131,90 im Monat und 1582,80 als zwölfmal derselbe Monat. Grenze: „Stand 0 2“ und 0 Festgebühren ergeben 0,00;0 Verbrauch ist erlaubt.",
          "faq": [
            {
              "q": "Wie ermittle ich den Verbrauch aus zwei Zählerständen?",
              "a": "Der Verbrauch ist der aktuelle Zählerstand minus dem vorherigen. Trage in die Zeile diese Differenz ein, nicht den abgelesenen Stand selbst."
            },
            {
              "q": "Gehört die Grundgebühr in die Zeilen?",
              "a": "Nein. Sie fällt unabhängig vom Verbrauch an und gehört in das eigene Feld. In einer Zeile mit Tarif würde sie fälschlich mit dem Verbrauch multipliziert."
            },
            {
              "q": "Kann ich mit gemischten Einheiten rechnen?",
              "a": "Ja, solange Verbrauch und Tarif in einer Zeile zusammenpassen — Kilowattstunden mit dem Preis je Kilowattstunde, Kubikmeter mit dem Preis je Kubikmeter."
            },
            {
              "q": "Ist die Umsatzsteuer enthalten?",
              "a": "Das hängt von den eingetragenen Tarifen ab. Trägst du Bruttopreise ein, ist die Summe brutto; bei Nettopreisen ist sie netto."
            }
          ],
          "disclaimer": "Die Ergebnisse sind Orientierungswerte. Prüfe die Eingaben vor wichtigen Entscheidungen."
        },
        "help": {
          "meters": "Zeile: Name Verbrauch Tarif. Periodenverbrauch, kein kumulativer Stand. Punkt/Komma dezimal, keine Tausendergruppen. Alle Preise in einer Währung.",
          "fixed": "Nichtnegative Festgebühren desselben Monats; nicht in Servicezeilen wiederholen."
        },
        "sources": [],
        "normal": {
          "inputs": {
            "meters": "Strom 250 0,32\nWasser 6 4,10\nGas 80 0,11",
            "fixed": 18.5
          },
          "expected": {
            "kind": "number",
            "value": 131.9
          },
          "rows": [
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 113.4
              }
            },
            {
              "index": 4,
              "expectation": {
                "kind": "number",
                "value": 1582.8
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "€",
          "independentLiteral": "131,90 ₽"
        },
        "boundary": {
          "inputs": {
            "meters": "water 0 6",
            "fixed": 0
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
                "value": 0
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "€",
          "independentLiteral": "0,00 ₽"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 3223
        },
        "blankField": "fixed",
        "domainField": "fixed",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "es",
        "path": "/es/hogar/facturas-del-hogar/",
        "h1": "Calculadora de facturas del hogar",
        "body": {
          "longDescription": "Suma el consumo del mes elegido de cada servicio por su tarifa unitaria y añade cargos fijos. Cada línea necesita nombre, consumo y tarifa: las dos últimas cifras son consumo y precio, y el texto anterior es el nombre. Introduce consumo del periodo, diferencia entre lecturas, no una lectura acumulada. Las partes variable y fija quedan separadas para detectar errores de unidades o cargos duplicados.",
          "howToUse": [
            "Introduce «Nombre consumo tarifa»; se admite punto o coma decimal, sin separadores de miles.",
            "Los dos últimos números de la línea son el consumo y el precio por unidad.",
            "Los cargos sin contador van en el campo de cargos fijos.",
            "Compara en el resultado la parte medida con la parte fija."
          ],
          "howItWorks": "Cada línea no vacía necesita nombre y dos números: consumo u y tarifa p. Se leen los dos últimos tokens; lo anterior es el nombre. Espacios o punto y coma separan tokens; punto o coma dentro del número son decimales, sin separadores de miles. Parte variable=Σu×p; total añade cargos fijos. Año=12 meses iguales; no se muestran porcentajes por suministro. Usa la misma moneda y base fiscal en todo.",
          "example": "Luz, agua y gas por 2.023 más 1.200 de cargos fijos suman 3.223 al mes. Línea «agua 0 6» y fijo 0 dan 0,00 al mes y al año.",
          "faq": [
            {
              "q": "¿Qué cuenta como cargo fijo?",
              "a": "Todo lo que se factura igual cada mes independientemente del consumo: mantenimiento del edificio, recogida de basuras, el portero automático, el alquiler del contador. No tienen consumo ni tarifa, así que no van en la tabla."
            },
            {
              "q": "¿En qué unidades va el consumo?",
              "a": "En aquellas a las que se refiera la tarifa. Si la luz se cobra por kWh, escribe kilovatios hora; si el agua se cobra por metro cúbico, escribe metros cúbicos."
            },
            {
              "q": "¿Cómo se introduce un contador de luz con dos tarifas?",
              "a": "Como dos líneas —punta y valle—, cada una con su consumo y su tarifa. La tabla mostrará cuál de las dos sale más cara."
            },
            {
              "q": "¿Por qué la cifra anual es doce veces la del mes?",
              "a": "Porque es una proyección de este mes, no una previsión. La calefacción y el aire acondicionado hacen que los años reales sean desiguales; la calculadora no presume de conocer tu estación."
            },
            {
              "q": "¿Es lo mismo que la calculadora de consumo eléctrico?",
              "a": "La otra herramienta estima energía con potencia y horas. Esta usa consumo conocido del periodo, diferencia de lecturas, y tarifa. No sustituyas consumo por lectura acumulada."
            }
          ],
          "disclaimer": "Los resultados son estimaciones orientativas. Verifica los datos de partida antes de tomar decisiones importantes."
        },
        "help": {
          "meters": "Línea: nombre consumo tarifa. Consumo del periodo, no lectura acumulada. Punto/coma decimal, sin grupos de miles. Precios en una moneda.",
          "fixed": "Cargos fijos no negativos del mismo mes; no los repitas en líneas de servicios."
        },
        "sources": [],
        "normal": {
          "inputs": {
            "meters": "electricity 250 5.5\nwater 8 45\ngas 40 7.2",
            "fixed": 1200
          },
          "expected": {
            "kind": "number",
            "value": 3223
          },
          "rows": [
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 2023
              }
            },
            {
              "index": 4,
              "expectation": {
                "kind": "number",
                "value": 38676
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "€",
          "independentLiteral": "3 223,00 ₽"
        },
        "boundary": {
          "inputs": {
            "meters": "water 0 6",
            "fixed": 0
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
                "value": 0
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "€",
          "independentLiteral": "0,00 ₽"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 3223
        },
        "blankField": "fixed",
        "domainField": "fixed",
        "domainInvalid": -1,
        "countFields": []
      }
    ]
  },
  {
    "id": "water-heating",
    "category": "household",
    "defaults": {
      "volume": 100,
      "tFrom": 10,
      "tTo": 60,
      "power": 2,
      "efficiency": 95
    },
    "fieldNames": [
      "volume",
      "tFrom",
      "tTo",
      "power",
      "efficiency"
    ],
    "defaultInactive": [],
    "pages": [
      {
        "locale": "ru",
        "path": "/ru/household/vremya-nagreva-vody/",
        "h1": "Калькулятор времени нагрева воды",
        "body": {
          "longDescription": "Связывает объём жидкой воды, разницу температур и мощность с временем нагрева. Для 100 л с 10 до 60 °C полезное тепло равно 5,814 кВт·ч; при КПД 95% источник должен дать 6,120 кВт·ч, поэтому 2 кВт требуют 3,060 ч. Эти две энергии теперь показаны отдельно. Сохранённая модель принимает 1 л≈1 кг и постоянную теплоёмкость 4186 Дж/(кг·°C); она не считает лед, пар, нагрев бака и переменные потери.",
          "howToUse": [
            "Введите литры жидкой воды; модель приближённо считает 1 л равным 1 кг.",
            "Задайте температуры от 0 до 100 °C с конечной выше начальной; замерзание и пар не рассчитываются.",
            "Введите мощность источника и согласованный постоянный КПД, не выбирайте процент только по виду топлива.",
            "Для стоимости используйте «Энергию источника», а не полезное тепло; удержание температуры здесь не включено."
          ],
          "howItWorks": "Для жидкой воды принимаются 1 л≈1 кг и постоянное c≈4186 Дж/(кг·К). Полезное тепло Q=V×c×(Tкон−Tнач), η=КПД/100, полезная мощность P×1000×η ватт. Время Q/(P×1000×η) секунд. Строка «Энергия» — Q/3 600 000 кВт·ч, новая «Энергия источника» — Q/(η×3 600 000); для стоимости используют вторую. Область 0≤Tнач<Tкон≤100°C при приближении обычного давления, без плавления, испарения и нагрева бака.",
          "example": "Сто литров с 10 до 60 градусов при 2 кВт и КПД 95 % греются 3,06 часа. Полезное тепло 5,813889 кВт·ч; при 95% источник расходует 6,119883 кВт·ч. При 100% эти энергии совпадают.",
          "faq": [
            {
              "q": "Почему нагрев воды такой энергоёмкий?",
              "a": "В этой модели каждый килограмм и каждый градус требуют 4186 Дж. Поэтому 100 л и 50 °C дают 20,93 МДж полезного тепла, или 5,814 кВт·ч. Это принятое постоянное значение для жидкой воды, не точная теплоёмкость при любой температуре."
            },
            {
              "q": "Что даст вдвое более мощный нагреватель?",
              "a": "При том же объёме, перепаде температур и КПД время модели уменьшится ровно вдвое. Полезное тепло и энергия источника останутся прежними. Реальные потери могут зависеть от длительности; требования к подключению приборов этот расчёт не проверяет."
            },
            {
              "q": "Учитывать ли остывание?",
              "a": "Потери во времени отдельно не рассчитываются. Поле КПД применяет одну постоянную долю мощности на весь нагрев. Не считайте его автоматически достаточным для открытой ёмкости; тепло бака, остывание и поддержание температуры могут требовать отдельной модели."
            },
            {
              "q": "Почему у газовой колонки КПД ниже?",
              "a": "Часть энергии может уходить с дымовыми газами и через корпус, но процент зависит от устройства и режима. Здесь не задан универсальный КПД по топливу, не моделируются конденсация и теплота топлива. Введите согласованные данные конкретного нагрева."
            }
          ]
        },
        "help": {
          "tFrom": "От 0 до 100 °C для приближённой однофазной жидкой воды; лёд не рассчитывается.",
          "tTo": "Выше начальной и не более 100 °C; нагрев до точки кипения не включает испарение. Фактическая точка кипения зависит от давления.",
          "efficiency": "Более 0 до 100%; постоянная доля мощности источника, переданная воде. Для цены берите энергию источника Q/η."
        },
        "sources": [
          "https://openstax.org/books/college-physics-2e/pages/14-2-temperature-change-and-heat-capacity",
          "https://www.nist.gov/pml/owm/si-units-temperature"
        ],
        "normal": {
          "inputs": {
            "volume": 100,
            "tFrom": 10,
            "tTo": 60,
            "power": 2,
            "efficiency": 95
          },
          "expected": {
            "kind": "number",
            "value": 3.06
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 5.814
              }
            },
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 6.12
              }
            },
            {
              "index": 0,
              "expectation": {
                "kind": "duration",
                "numbers": [
                  3,
                  4
                ]
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "ч",
          "independentLiteral": "3,06 ч"
        },
        "boundary": {
          "inputs": {
            "volume": 100,
            "tFrom": 10,
            "tTo": 60,
            "power": 2,
            "efficiency": 100
          },
          "expected": {
            "kind": "number",
            "value": 2.907
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 5.814
              }
            },
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 5.814
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "ч",
          "independentLiteral": "2,907 ч"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 3.06
        },
        "blankField": "volume",
        "domainField": "volume",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "en",
        "path": "/en/household/water-heating-time/",
        "h1": "Water heating time calculator",
        "body": {
          "longDescription": "Relate liquid-water volume, temperature rise and heater power to heating time. For 100 L from 10 to 60 °C, useful heat is 5.814 kWh; at 95% efficiency the source supplies 6.120 kWh, so 2 kW takes 3.060 hours. The two energy quantities are shown separately. The retained model takes 1 L≈1 kg and constant heat capacity 4186 J/(kg·°C); ice, steam, tank heating and changing losses are excluded.",
          "howToUse": [
            "Enter litres of liquid water; the model approximates 1 L as 1 kg.",
            "Set temperatures from 0 to 100 °C, final above initial; freezing and steam are excluded.",
            "Enter source power and a consistent fixed efficiency, not a percentage chosen solely by fuel type.",
            "Use source energy for cost, not useful heat; temperature maintenance is excluded."
          ],
          "howItWorks": "For liquid water assume 1 L≈1 kg and constant c≈4186 J/(kg·K). Useful heat Q=V×c×(T_end−T_start), η=efficiency/100 and useful power=P×1000×η watts. Time=Q/(P×1000×η) seconds. Energy reports Q/3600000 kWh; Source energy reports Q/(η×3600000), the value for costing. Domain 0≤T_start<T_end≤100°C at approximately ordinary pressure, without melting, vaporisation or vessel heating.",
          "example": "A hundred litres from 10 to 60 degrees at 2 kW and 95 % takes 3.06 hours. Useful heat is 5.813889 kWh; at 95% the source supplies 6.119883 kWh. At 100% they coincide.",
          "faq": [
            {
              "q": "Why is heating water so energy-hungry?",
              "a": "The model uses 4186 J per kg per degree. Thus 100 L and 50 °C require 20.93 MJ of useful heat, or 5.814 kWh. This is a chosen constant for liquid water, not its exact heat capacity at every temperature."
            },
            {
              "q": "What does twice the power buy?",
              "a": "With the same volume, temperature rise and efficiency, model time halves exactly. Useful heat and source energy stay unchanged. Actual losses can depend on duration; the tool does not assess connection requirements."
            },
            {
              "q": "Should cooling be accounted for?",
              "a": "Losses over time are not calculated separately. Efficiency applies one fixed fraction of power throughout heating. Do not assume it is sufficient for an open vessel; tank heat, cooling and temperature maintenance may need a separate model."
            },
            {
              "q": "Why is a gas heater less efficient?",
              "a": "Some energy may leave with exhaust or through the housing, but the fraction depends on the device and operating conditions. No universal fuel-based efficiency is assigned; condensation and fuel heating value are not modelled. Enter consistent data for the actual heating run."
            }
          ],
          "disclaimer": "Results are reference estimates. Verify the inputs before making important decisions."
        },
        "help": {
          "tFrom": "0–100 °C for approximate single-phase liquid water; ice is excluded.",
          "tTo": "Above initial and no more than 100 °C; reaching boiling excludes evaporation. Actual boiling point depends on pressure.",
          "efficiency": "Above 0 up to 100%; fixed share of source power delivered to water. Cost uses source energy Q/η."
        },
        "sources": [
          "https://openstax.org/books/college-physics-2e/pages/14-2-temperature-change-and-heat-capacity",
          "https://www.nist.gov/pml/owm/si-units-temperature"
        ],
        "normal": {
          "inputs": {
            "volume": 100,
            "tFrom": 10,
            "tTo": 60,
            "power": 2,
            "efficiency": 95
          },
          "expected": {
            "kind": "number",
            "value": 3.06
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 5.814
              }
            },
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 6.12
              }
            },
            {
              "index": 0,
              "expectation": {
                "kind": "duration",
                "numbers": [
                  3,
                  4
                ]
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "h",
          "independentLiteral": "3,06 ч"
        },
        "boundary": {
          "inputs": {
            "volume": 100,
            "tFrom": 10,
            "tTo": 60,
            "power": 2,
            "efficiency": 100
          },
          "expected": {
            "kind": "number",
            "value": 2.907
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 5.814
              }
            },
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 5.814
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "h",
          "independentLiteral": "2,907 ч"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 3.06
        },
        "blankField": "volume",
        "domainField": "volume",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "uk",
        "path": "/uk/pobut/chas-nagrivannya-vody/",
        "h1": "Калькулятор часу нагрівання води",
        "body": {
          "longDescription": "Пов’язує об’єм рідкої води, різницю температур і потужність із часом нагріву. Для 100 л з 10 до 60 °C корисне тепло 5,814 кВт·год; за ККД 95% джерело має дати 6,120 кВт·год, тому 2 кВт потребують 3,060 год. Дві енергії показані окремо. Збережена модель бере 1 л≈1 кг і сталу теплоємність 4186 Дж/(кг·°C); лід, пара, нагрів бака й змінні втрати не рахуються.",
          "howToUse": [
            "Введіть літри рідкої води; модель наближено бере 1 л за 1 кг.",
            "Задайте температури 0–100 °C, кінцеву вище початкової; лід і пара не рахуються.",
            "Введіть потужність джерела й узгоджений сталий ККД; енергію джерела використовуйте для вартості, не корисне тепло."
          ],
          "howItWorks": "Для рідкої води прийнято 1 л≈1 кг і стале c≈4186 Дж/(кг·К). Корисне тепло Q=V×c×(Tкін−Tпоч), η=ККД/100, корисна потужність P×1000×η ватів. Час Q/(P×1000×η) секунд. «Енергія» показує Q/3600000 кВт·год, «Енергія джерела» — Q/(η×3600000), саме її використовують для вартості. Область 0≤Tпоч<Tкін≤100°C за наближення звичайного тиску, без плавлення, випаровування та нагрівання бака.",
          "example": "Сто літрів з 10 до 60 градусів за 2 кВт і ККД 95 % гріються 3,06 години. Корисне тепло 5,813889 кВт·год; за 95% джерело витрачає 6,119883 кВт·год. За 100% вони однакові.",
          "faq": [
            {
              "q": "Чому нагрів води такий енергоємний?",
              "a": "Модель використовує 4186 Дж на кілограм і градус. Тому 100 л та 50 °C потребують 20,93 МДж корисного тепла, або 5,814 кВт·год. За ККД нижче 100% енергія джерела більша; порівняння з невідомим холодильником тут не визначається."
            },
            {
              "q": "Який ККД у бойлера?",
              "a": "Введіть ККД або ефективність саме вашого режиму з даних виробника чи вимірювань. Тип нагрівача сам не задає універсальні 95–99% чи 85–92%. Потрібно узгодити, які втрати включає показник, щоб не додати їх удруге."
            },
            {
              "q": "Чи враховано тепловтрати бака?",
              "a": "Окремо ні. Поле ККД застосовує одну сталу частку потужності впродовж нагріву. Нагрів самого бака, охолодження та підтримання температури не рахуються; універсальні додаткові 1–3 кВт·год за добу не задаються."
            },
            {
              "q": "Чому проточний нагрівач такий потужний?",
              "a": "За меншого часу потрібна більша теплова потужність. Для виміряних 6 л/хв та підвищення 30 °C модель із 1 л≈1 кг дає 12,558 кВт корисної потужності, а джерело —12,558/η. Це пояснювальний розрахунок потоку, не додатковий режим цього інструмента."
            }
          ],
          "disclaimer": "Результати є орієнтовними оцінками. Перед важливими рішеннями перевіряйте дані."
        },
        "help": {
          "tFrom": "0–100 °C для наближеної однофазної рідкої води; лід не рахується.",
          "tTo": "Вище початкової й не більше 100 °C; досягнення кипіння не включає випаровування. Реальна точка залежить від тиску.",
          "efficiency": "Понад 0 до 100%; стала частка потужності джерела, передана воді. Вартість бере енергію джерела Q/η."
        },
        "sources": [
          "https://openstax.org/books/college-physics-2e/pages/14-2-temperature-change-and-heat-capacity",
          "https://www.nist.gov/pml/owm/si-units-temperature"
        ],
        "normal": {
          "inputs": {
            "volume": 100,
            "tFrom": 10,
            "tTo": 60,
            "power": 2,
            "efficiency": 95
          },
          "expected": {
            "kind": "number",
            "value": 3.06
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 5.814
              }
            },
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 6.12
              }
            },
            {
              "index": 0,
              "expectation": {
                "kind": "duration",
                "numbers": [
                  3,
                  4
                ]
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "год",
          "independentLiteral": "3,06 ч"
        },
        "boundary": {
          "inputs": {
            "volume": 100,
            "tFrom": 10,
            "tTo": 60,
            "power": 2,
            "efficiency": 100
          },
          "expected": {
            "kind": "number",
            "value": 2.907
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 5.814
              }
            },
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 5.814
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "год",
          "independentLiteral": "2,907 ч"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 3.06
        },
        "blankField": "volume",
        "domainField": "volume",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "de",
        "path": "/de/haushalt/wasser-aufheizzeit/",
        "h1": "Rechner für die Aufheizzeit von Wasser",
        "body": {
          "longDescription": "Verknüpft Flüssigwasservolumen, Temperaturanstieg und Heizleistung mit der Aufheizzeit. Für 100 l von 10 auf 60 °C beträgt Nutzwärme 5,814 kWh; bei 95% liefert die Quelle 6,120 kWh, weshalb 2 kW 3,060 Stunden benötigen. Beide Energiemengen erscheinen getrennt. Das erhaltene Modell nimmt 1 l≈1 kg und konstant 4186 J/(kg·°C) an; Eis, Dampf, Tankerwärmung und wechselnde Verluste fehlen.",
          "howToUse": [
            "Liter Flüssigwasser eingeben; näherungsweise gilt 1 l=1 kg.",
            "Temperaturen 0–100 °C wählen, Ziel über Start; Eis und Dampf sind ausgeschlossen.",
            "Quellenleistung und passenden festen Wirkungsgrad angeben, keinen allein nach Brennstoff gewählten Prozentsatz.",
            "Für Kosten die Quellenenergie statt Nutzwärme nehmen; Temperaturhaltung fehlt."
          ],
          "howItWorks": "Für flüssiges Wasser gelten näherungsweise 1 l≈1 kg und konstant c≈4186 J/(kg·K). Nutzwärme Q=V×c×(T_ende−T_start), η=Wirkungsgrad/100, Nutzleistung=P×1000×η Watt. Zeit=Q/(P×1000×η) Sekunden. Energie zeigt Q/3600000 kWh, Energiequelle Q/(η×3600000); letztere dient zur Kostenrechnung. Bereich 0≤T_start<T_ende≤100°C bei näherungsweise Normaldruck, ohne Schmelzen, Verdampfen oder Gefäßerwärmung.",
          "example": "Hundert Liter von 10 auf 60 Grad brauchen bei 2 kW und 95 % genau 3,06 Stunden. Nutzwärme 5,813889 kWh; bei 95% liefert die Quelle 6,119883 kWh. Bei 100% stimmen sie überein.",
          "faq": [
            {
              "q": "Warum ist das Erwärmen von Wasser so energiehungrig?",
              "a": "Das Modell verwendet 4186 J je kg und Grad.100 l und 50 °C erfordern damit 20,93 MJ Nutzwärme oder 5,814 kWh. Es ist eine gewählte Konstante für Flüssigwasser, nicht die exakte Wärmekapazität bei jeder Temperatur."
            },
            {
              "q": "Was bringt die doppelte Leistung?",
              "a": "Bei gleichem Volumen, Temperaturanstieg und Wirkungsgrad halbiert sich die Modellzeit exakt. Nutzwärme und Quellenenergie bleiben gleich. Tatsächliche Verluste können von der Dauer abhängen; Anschlussanforderungen prüft das Tool nicht."
            },
            {
              "q": "Soll das Abkühlen berücksichtigt werden?",
              "a": "Zeitliche Verluste werden nicht gesondert berechnet. Der Wirkungsgrad wendet einen festen Leistungsanteil während des Aufheizens an. Für ein offenes Gefäß ist er nicht automatisch ausreichend; Tankwärme, Abkühlung und Temperaturhaltung brauchen eventuell ein anderes Modell."
            },
            {
              "q": "Warum hat ein Gasgerät einen geringeren Wirkungsgrad?",
              "a": "Energie kann mit Abgas oder über das Gehäuse verloren gehen; der Anteil hängt von Gerät und Betrieb ab. Kein allgemeiner brennstoffabhängiger Wirkungsgrad wird gesetzt; Kondensation und Brennstoffheizwert fehlen. Konsistente Daten des konkreten Heizvorgangs eingeben."
            }
          ],
          "disclaimer": "Die Ergebnisse sind Orientierungswerte. Prüfe die Eingaben vor wichtigen Entscheidungen."
        },
        "help": {
          "tFrom": "0–100 °C für angenähert einphasiges Flüssigwasser; Eis ist ausgeschlossen.",
          "tTo": "Über Start und höchstens 100 °C; Erreichen des Siedens enthält keine Verdampfung. Tatsächlicher Siedepunkt hängt vom Druck ab.",
          "efficiency": "Über 0 bis 100%; fester an Wasser übertragener Quellenleistungsanteil. Kosten nutzen Quellenenergie Q/η."
        },
        "sources": [
          "https://openstax.org/books/college-physics-2e/pages/14-2-temperature-change-and-heat-capacity",
          "https://www.nist.gov/pml/owm/si-units-temperature"
        ],
        "normal": {
          "inputs": {
            "volume": 100,
            "tFrom": 10,
            "tTo": 60,
            "power": 2,
            "efficiency": 95
          },
          "expected": {
            "kind": "number",
            "value": 3.06
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 5.814
              }
            },
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 6.12
              }
            },
            {
              "index": 0,
              "expectation": {
                "kind": "duration",
                "numbers": [
                  3,
                  4
                ]
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "h",
          "independentLiteral": "3,06 ч"
        },
        "boundary": {
          "inputs": {
            "volume": 100,
            "tFrom": 10,
            "tTo": 60,
            "power": 2,
            "efficiency": 100
          },
          "expected": {
            "kind": "number",
            "value": 2.907
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 5.814
              }
            },
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 5.814
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "h",
          "independentLiteral": "2,907 ч"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 3.06
        },
        "blankField": "volume",
        "domainField": "volume",
        "domainInvalid": -1,
        "countFields": []
      },
      {
        "locale": "es",
        "path": "/es/hogar/tiempo-de-calentamiento-del-agua/",
        "h1": "Calculadora de tiempo de calentamiento del agua",
        "body": {
          "longDescription": "Relaciona volumen de agua líquida, aumento de temperatura y potencia con tiempo de calentamiento. Para 100 l de 10 a 60 °C, calor útil 5,814 kWh; con 95% la fuente aporta 6,120 kWh, por lo que 2 kW tarda 3,060 horas. Ambas energías aparecen separadas. El modelo conservado supone 1 l≈1 kg y capacidad constante 4186 J/(kg·°C); excluye hielo, vapor, calentamiento del depósito y pérdidas variables.",
          "howToUse": [
            "Introduce litros de agua líquida; el modelo aproxima 1 l a 1 kg.",
            "Fija temperaturas 0–100 °C, final mayor; se excluyen hielo y vapor.",
            "Introduce potencia de la fuente y eficiencia fija coherente, no un porcentaje elegido solo por combustible.",
            "Para costes usa energía de la fuente, no calor útil; no se incluye mantenimiento de temperatura."
          ],
          "howItWorks": "Para agua líquida se aproxima 1 l≈1 kg y c≈4186 J/(kg·K) constante. Calor útil Q=V×c×(T_final−T_inicial), η=rendimiento/100, potencia útil=P×1000×η vatios. Tiempo=Q/(P×1000×η) segundos. Energía muestra Q/3600000 kWh; Energía de la fuente Q/(η×3600000), usada para el coste. Dominio 0≤T_inicial<T_final≤100°C a presión aproximadamente ordinaria, sin fusión, vaporización ni calentamiento del recipiente.",
          "example": "Cien litros de 10 a 60 grados con 2 kW y un 95 % tardan 3,06 horas. Calor útil 5,813889 kWh; a 95% la fuente aporta 6,119883 kWh. A 100% coinciden.",
          "faq": [
            {
              "q": "¿Por qué calentar agua consume tanta energía?",
              "a": "El modelo usa 4186 J por kg y grado. Así 100 l y 50 °C necesitan 20,93 MJ de calor útil, o 5,814 kWh. Es una constante elegida para agua líquida, no su capacidad exacta a cualquier temperatura."
            },
            {
              "q": "¿Qué se gana con el doble de potencia?",
              "a": "Con igual volumen, aumento y eficiencia, el tiempo del modelo se reduce exactamente a la mitad. Calor útil y energía de la fuente no cambian. Las pérdidas reales pueden depender de duración; no se comprueban requisitos de conexión."
            },
            {
              "q": "¿Hay que tener en cuenta el enfriamiento?",
              "a": "No se calculan pérdidas variables por separado. La eficiencia aplica una fracción constante de potencia durante todo el calentamiento. No supongas que basta para un recipiente abierto; depósito, enfriamiento y mantenimiento térmico pueden necesitar otro modelo."
            },
            {
              "q": "¿Por qué un calentador de gas tiene menos rendimiento?",
              "a": "Puede salir energía con gases o por la carcasa, pero la proporción depende del equipo y condiciones. No se fija eficiencia universal según combustible; condensación y poder calorífico no se modelan. Introduce datos coherentes del calentamiento concreto."
            }
          ],
          "disclaimer": "Los resultados son estimaciones orientativas. Verifica los datos de partida antes de tomar decisiones importantes."
        },
        "help": {
          "tFrom": "0–100 °C para agua líquida monofásica aproximada; se excluye hielo.",
          "tTo": "Mayor que inicial y hasta 100 °C; alcanzar ebullición no incluye evaporar. La temperatura real depende de presión.",
          "efficiency": "Más de 0 hasta 100%; fracción fija de potencia entregada al agua. Coste usa energía de la fuente Q/η."
        },
        "sources": [
          "https://openstax.org/books/college-physics-2e/pages/14-2-temperature-change-and-heat-capacity",
          "https://www.nist.gov/pml/owm/si-units-temperature"
        ],
        "normal": {
          "inputs": {
            "volume": 100,
            "tFrom": 10,
            "tTo": 60,
            "power": 2,
            "efficiency": 95
          },
          "expected": {
            "kind": "number",
            "value": 3.06
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 5.814
              }
            },
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 6.12
              }
            },
            {
              "index": 0,
              "expectation": {
                "kind": "duration",
                "numbers": [
                  3,
                  4
                ]
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "h",
          "independentLiteral": "3,06 ч"
        },
        "boundary": {
          "inputs": {
            "volume": 100,
            "tFrom": 10,
            "tTo": 60,
            "power": 2,
            "efficiency": 100
          },
          "expected": {
            "kind": "number",
            "value": 2.907
          },
          "rows": [
            {
              "index": 1,
              "expectation": {
                "kind": "number",
                "value": 5.814
              }
            },
            {
              "index": 2,
              "expectation": {
                "kind": "number",
                "value": 5.814
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "primaryUnit": "h",
          "independentLiteral": "2,907 ч"
        },
        "defaultExpected": {
          "kind": "number",
          "value": 3.06
        },
        "blankField": "volume",
        "domainField": "volume",
        "domainInvalid": -1,
        "countFields": []
      }
    ]
  }
];
