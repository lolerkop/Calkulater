import type { C9Case } from './originality-household-wave-17.spec';

// Fixed numerical literals were derived independently from Decimal/analytic ledgers.
// Subject compute was used only for candidate row indexes/labels/visibility/units.
// These45candidatepublicationbodies are not a browser/human approval.
export const cases: C9Case[] = [
  {
    "id": "curtain-size",
    "defaults": {
      "windowWidth": 140,
      "fullness": 2,
      "fabricWidth": 280,
      "height": 250,
      "hem": 20
    },
    "fields": [
      "windowWidth",
      "fullness",
      "fabricWidth",
      "height",
      "hem"
    ],
    "defaultInactive": [],
    "pages": [
      {
        "locale": "ru",
        "path": "/ru/household/raschet-shtor/",
        "h1": "Калькулятор ткани на шторы",
        "body": {
          "longDescription": "Считает ткань при раскрое вертикальными полотнищами полной ширины рулона. Карниз × коэффициент сборки — суммарная ширина ткани до сборки, а не готовая ширина шторы. Расход зависит и от числа полотнищ, и от длины каждого: при той же ширине более высокая штора требует больше ткани.",
          "howToUse": [
            "Введите ширину карниза и выбранный коэффициент сборки; он зависит от способа подвеса и вашего проекта, единой нормы нет.",
            "Укажите полезную ширину ткани для этого раскроя. Боковые припуски и швы отдельно не вычитаются.",
            "Готовую высоту и общий припуск сверху плюс снизу задайте в сантиметрах; припуск можно оставить равным нулю.",
            "Раппорт, усадку и поперечный раскрой проверьте отдельно: в модели они автоматически не добавляются."
          ],
          "howItWorks": "Плоская ширина Wf = карниз × коэффициент. Полотнищ N = округление Wf / ширина ткани вверх до целого. Длина каждого отреза = высота + общий припуск; ткань в метрах = N × длина / 100. Число полотнищ считается по десятичным размерам без удаления настоящего положительного остатка.",
          "example": "140 см × 2 = 280 см ткани до сборки. При ширине рулона 280 см нужно одно полотнище длиной 250 + 20 = 270 см, всего 2,7 м. При 300 см до сборки на той же ширине нужны уже два полотнища.",
          "faq": [
            {
              "q": "Какой коэффициент сборки выбрать?",
              "a": "Выберите коэффициент под ткань и способ подвеса. Например, 2 означает плоскую ширину вдвое больше карниза; это не универсальное правило для любой складки. Из-за целого числа полотнищ расход растёт ступенями, а не всегда прямо пропорционально."
            },
            {
              "q": "Почему полотнища округляются вверх?",
              "a": "В этой модели каждое полотнище берётся полной ширины ткани. Частичный остаток по ширине требует ещё одного отреза; сшивание и иной раскрой возможны, но здесь не оптимизируются."
            },
            {
              "q": "Считать ли раппорт рисунка?",
              "a": "Раппорт не вводится отдельным полем. Определите прибавку по фактическому рисунку и способу совмещения; фиксированного предела в полметра нет."
            },
            {
              "q": "Ткань какой ширины выгоднее?",
              "a": "Сравните число отрезов, их длину и цену погонного метра. Поперечный раскрой может менять расчёт и подходит не каждой ткани; текущая формула описывает вертикальные полотнища."
            }
          ],
          "disclaimer": "Модель вертикальных отрезов полной ширины, а не готовая карта раскроя. Припуски на боковые швы, раппорт, усадка и ограничения поставщика требуют отдельной проверки."
        },
        "help": {},
        "sources": [],
        "normal": {
          "inputs": {
            "windowWidth": 220,
            "fullness": 2.5,
            "fabricWidth": 140,
            "height": 230,
            "hem": 30
          },
          "expected": {
            "kind": "number",
            "value": 10.4
          },
          "rows": [
            {
              "index": 0,
              "label": "Полотнищ",
              "expected": {
                "kind": "number",
                "value": 4
              }
            },
            {
              "index": 1,
              "label": "Ширина ткани до сборки",
              "expected": {
                "kind": "number",
                "value": 550
              }
            },
            {
              "index": 2,
              "label": "Длина отреза",
              "expected": {
                "kind": "number",
                "value": 260
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "unit": "м",
          "independentDerivation": "ceil(220×2.5/140)=4;4×(230+30)/100=10.4m"
        },
        "boundary": {
          "inputs": {
            "windowWidth": 0.1,
            "fullness": 3,
            "fabricWidth": 0.3,
            "height": 100,
            "hem": 0
          },
          "expected": {
            "kind": "number",
            "value": 1
          },
          "rows": [
            {
              "index": 0,
              "label": "Полотнищ",
              "expected": {
                "kind": "number",
                "value": 1
              }
            },
            {
              "index": 1,
              "label": "Ширина ткани до сборки",
              "expected": {
                "kind": "number",
                "value": 0.3
              }
            },
            {
              "index": 2,
              "label": "Длина отреза",
              "expected": {
                "kind": "number",
                "value": 100
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "unit": "м",
          "independentDerivation": "Exact decimalceil(.1×3/.3)=1;1×100/100=1m"
        },
        "controls": [],
        "defaultExpected": {
          "kind": "number",
          "value": 2.7
        },
        "blankField": "windowWidth",
        "domainField": "windowWidth",
        "domainValue": 0,
        "counts": []
      },
      {
        "locale": "en",
        "path": "/en/household/curtain-size/",
        "h1": "Curtain fabric calculator",
        "body": {
          "longDescription": "Estimates fabric for vertical drops using the full roll width. Track width × fullness is the total flat fabric width before gathering, not the finished curtain width. Both the drop count and each drop length affect consumption: a taller curtain needs more fabric at the same width.",
          "howToUse": [
            "Enter the track width and your chosen fullness; the heading and project determine it, with no universal ratio.",
            "Enter the usable fabric width for this cutting plan. Side hems and seams are not deducted separately.",
            "Enter the finished height and the combined top-plus-bottom allowance in centimetres; zero allowance is allowed.",
            "Check pattern matching, shrinkage and railroading separately; the model does not add them automatically."
          ],
          "howItWorks": "Flat width = track × fullness. Drops = flat width / fabric width, rounded up to a whole count. Cut length = height + total allowance; metres = drops × cut length / 100. Drop rounding uses decimal dimensions and preserves a real positive remainder.",
          "example": "140 cm × 2 = 280 cm before gathering. A 280 cm roll needs one drop of 250 + 20 = 270 cm, or 2.7 m. A required flat width of 300 cm on that roll needs two drops.",
          "faq": [
            {
              "q": "Which fullness should I choose?",
              "a": "Choose fullness for the fabric and heading. A ratio of 2 means twice the track width in flat fabric; it is not a universal pleat rule. Whole drop counts make fabric consumption increase in steps."
            },
            {
              "q": "Why round drops up?",
              "a": "This model takes each drop at the full fabric width. A remaining partial width requires another cut; seaming and alternative layouts are possible but are not optimised here."
            },
            {
              "q": "Should I allow for the pattern repeat?",
              "a": "There is no separate repeat field. Work out the added length from the actual pattern and matching plan; half a metre is not a universal maximum."
            },
            {
              "q": "Which fabric width is more economical?",
              "a": "Compare the drop count, cut length and price per running metre. Railroading changes the plan and is not suitable for every fabric; this formula uses vertical drops."
            }
          ],
          "disclaimer": "A full-width vertical-drop estimate, not a finished cutting layout. Side seams, pattern repeats, shrinkage and supplier restrictions need separate checks."
        },
        "help": {},
        "sources": [],
        "normal": {
          "inputs": {
            "windowWidth": 220,
            "fullness": 2.5,
            "fabricWidth": 140,
            "height": 230,
            "hem": 30
          },
          "expected": {
            "kind": "number",
            "value": 10.4
          },
          "rows": [
            {
              "index": 0,
              "label": "Drops",
              "expected": {
                "kind": "number",
                "value": 4
              }
            },
            {
              "index": 1,
              "label": "Flat fabric width before gathering",
              "expected": {
                "kind": "number",
                "value": 550
              }
            },
            {
              "index": 2,
              "label": "Cut length",
              "expected": {
                "kind": "number",
                "value": 260
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "unit": "m",
          "independentDerivation": "ceil(220×2.5/140)=4;4×(230+30)/100=10.4m"
        },
        "boundary": {
          "inputs": {
            "windowWidth": 0.1,
            "fullness": 3,
            "fabricWidth": 0.3,
            "height": 100,
            "hem": 0
          },
          "expected": {
            "kind": "number",
            "value": 1
          },
          "rows": [
            {
              "index": 0,
              "label": "Drops",
              "expected": {
                "kind": "number",
                "value": 1
              }
            },
            {
              "index": 1,
              "label": "Flat fabric width before gathering",
              "expected": {
                "kind": "number",
                "value": 0.3
              }
            },
            {
              "index": 2,
              "label": "Cut length",
              "expected": {
                "kind": "number",
                "value": 100
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "unit": "m",
          "independentDerivation": "Exact decimalceil(.1×3/.3)=1;1×100/100=1m"
        },
        "controls": [],
        "defaultExpected": {
          "kind": "number",
          "value": 2.7
        },
        "blankField": "windowWidth",
        "domainField": "windowWidth",
        "domainValue": 0,
        "counts": []
      },
      {
        "locale": "uk",
        "path": "/uk/pobut/rozrahunok-shtor/",
        "h1": "Калькулятор тканини на штори",
        "body": {
          "longDescription": "Оцінює тканину за вертикальними полотнищами на всю ширину рулону. Карниз × коефіцієнт — ширина тканини до збирання, а не готова ширина штори. Витрата залежить і від кількості полотнищ, і від довжини кожного: вища штора за тієї самої ширини потребує більше тканини.",
          "howToUse": [
            "Введіть ширину карниза й обраний коефіцієнт збирання; він залежить від підвішування та вашого задуму.",
            "Задайте корисну ширину тканини: бічні шви й підгини окремо не віднімаються.",
            "Введіть готову висоту та сумарний припуск зверху й знизу в сантиметрах; нульовий припуск допустимий.",
            "Рапорт, усадку й поперечний розкрій перевірте окремо: автоматичної поправки немає."
          ],
          "howItWorks": "Ширина до збирання = карниз × коефіцієнт. Полотнищ = ця ширина / ширина тканини, з округленням угору до цілого. Довжина відрізу = висота + сумарний припуск; метри = полотнища × довжина / 100. Округлення десятичних розмірів не відкидає справжній додатний залишок.",
          "example": "140 см × 2 = 280 см до збирання. За рулону 280 см потрібне одне полотнище 250 + 20 = 270 см, тобто 2,7 м. Якщо потрібно 300 см до збирання, полотнищ уже два.",
          "faq": [
            {
              "q": "Який коефіцієнт збирання обрати?",
              "a": "Коефіцієнт обирають під тканину й підвішування. Значення 2 означає подвійну плоску ширину, але не універсальну норму складок; витрата змінюється ступенями через цілі полотнища."
            },
            {
              "q": "Скільки закладати на припуски?",
              "a": "Введіть суму саме ваших верхнього й нижнього припусків. Їхні розміри залежать від обробки та не встановлюються калькулятором."
            },
            {
              "q": "Чи враховано рапорт малюнка?",
              "a": "Ні. Додаткову довжину визначають за реальним рапортом і схемою суміщення, а не за єдиною прибавкою на будь-який рисунок."
            },
            {
              "q": "Чи дає усадку тканина?",
              "a": "Усадка залежить від конкретної тканини й обробки. Перевірте дані виробника або пробний зразок; універсальні 5 % тут не застосовуються."
            }
          ],
          "disclaimer": "Оцінка вертикальних відрізів повної ширини, а не готова схема розкрою. Бічні шви, рапорт, усадка та умови продавця перевіряються окремо."
        },
        "help": {},
        "sources": [],
        "normal": {
          "inputs": {
            "windowWidth": 220,
            "fullness": 2.5,
            "fabricWidth": 140,
            "height": 230,
            "hem": 30
          },
          "expected": {
            "kind": "number",
            "value": 10.4
          },
          "rows": [
            {
              "index": 0,
              "label": "Полотнищ",
              "expected": {
                "kind": "number",
                "value": 4
              }
            },
            {
              "index": 1,
              "label": "Ширина тканини до збірки",
              "expected": {
                "kind": "number",
                "value": 550
              }
            },
            {
              "index": 2,
              "label": "Довжина відрізу",
              "expected": {
                "kind": "number",
                "value": 260
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "unit": "м",
          "independentDerivation": "ceil(220×2.5/140)=4;4×(230+30)/100=10.4m"
        },
        "boundary": {
          "inputs": {
            "windowWidth": 0.1,
            "fullness": 3,
            "fabricWidth": 0.3,
            "height": 100,
            "hem": 0
          },
          "expected": {
            "kind": "number",
            "value": 1
          },
          "rows": [
            {
              "index": 0,
              "label": "Полотнищ",
              "expected": {
                "kind": "number",
                "value": 1
              }
            },
            {
              "index": 1,
              "label": "Ширина тканини до збірки",
              "expected": {
                "kind": "number",
                "value": 0.3
              }
            },
            {
              "index": 2,
              "label": "Довжина відрізу",
              "expected": {
                "kind": "number",
                "value": 100
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "unit": "м",
          "independentDerivation": "Exact decimalceil(.1×3/.3)=1;1×100/100=1m"
        },
        "controls": [],
        "defaultExpected": {
          "kind": "number",
          "value": 2.7
        },
        "blankField": "windowWidth",
        "domainField": "windowWidth",
        "domainValue": 0,
        "counts": []
      },
      {
        "locale": "de",
        "path": "/de/haushalt/gardinenstoff-rechner/",
        "h1": "Rechner für den Stoffbedarf von Gardinen",
        "body": {
          "longDescription": "Schätzt Stoff für senkrechte Bahnen über die volle Rollenbreite. Schienenbreite × Faltenfaktor ist die gesamte flache Stoffbreite vor dem Raffen, nicht die fertige Gardinenbreite. Sowohl Bahnzahl als auch Zuschnittlänge bestimmen den Bedarf; eine höhere Gardine braucht bei gleicher Breite mehr Stoff.",
          "howToUse": [
            "Schienenbreite und selbst gewählten Faltenfaktor eingeben; Aufhängung und Entwurf bestimmen ihn, nicht eine allgemeine Norm.",
            "Die nutzbare Stoffbreite dieser Schnittplanung eingeben. Seitensäume und Nähte werden nicht gesondert abgezogen.",
            "Fertige Höhe und gesamte Zugabe oben plus unten in Zentimetern angeben; null Zugabe ist möglich.",
            "Rapport, Einlaufen und Querverarbeitung gesondert prüfen; automatisch werden sie nicht ergänzt."
          ],
          "howItWorks": "Flache Breite = Schiene × Faktor. Bahnen = flache Breite / Stoffbreite, auf ganze Bahnen aufgerundet. Zuschnittlänge = Höhe + gesamte Zugabe; Meter = Bahnen × Länge / 100. Die Dezimalrechnung der Bahnzahl verwirft keinen echten positiven Rest.",
          "example": "140 cm × 2 = 280 cm vor dem Raffen. Bei 280 cm Rollenbreite reicht eine Bahn mit 250 + 20 = 270 cm, also 2,7 m. Bei benötigten 300 cm flacher Breite sind es zwei Bahnen.",
          "faq": [
            {
              "q": "Welches Faltenverhältnis soll ich wählen?",
              "a": "Den Faktor passend zu Stoff und Aufhängung wählen. Faktor 2 bedeutet doppelte flache Schienenbreite, keine allgemeine Faltennorm. Wegen ganzer Bahnen steigt der Bedarf stufenweise."
            },
            {
              "q": "Warum werden Bahnen aufgerundet?",
              "a": "Das Modell verwendet die volle Stoffbreite je Bahn. Ein Rest in der benötigten Breite erfordert einen weiteren Zuschnitt; Nähen und andere Schnittpläne sind möglich, werden aber nicht optimiert."
            },
            {
              "q": "Muss ich den Rapport berücksichtigen?",
              "a": "Ein eigenes Rapportfeld gibt es nicht. Die Mehrlänge hängt vom tatsächlichen Muster und seiner Ausrichtung ab; ein halber Meter ist keine allgemeine Obergrenze."
            },
            {
              "q": "Welche Stoffbreite ist sparsamer?",
              "a": "Bahnzahl, Zuschnittlänge und Preis pro laufendem Meter vergleichen. Querverarbeitung ändert den Schnittplan und eignet sich nicht für jeden Stoff; hier gelten senkrechte Bahnen."
            }
          ],
          "disclaimer": "Schätzung für senkrechte Bahnen voller Breite, keine fertige Schnittplanung. Seitennähte, Rapport, Einlaufen und Lieferbedingungen sind gesondert zu prüfen."
        },
        "help": {},
        "sources": [],
        "normal": {
          "inputs": {
            "windowWidth": 220,
            "fullness": 2.5,
            "fabricWidth": 140,
            "height": 230,
            "hem": 30
          },
          "expected": {
            "kind": "number",
            "value": 10.4
          },
          "rows": [
            {
              "index": 0,
              "label": "Bahnen",
              "expected": {
                "kind": "number",
                "value": 4
              }
            },
            {
              "index": 1,
              "label": "Flache Stoffbreite vor dem Falten",
              "expected": {
                "kind": "number",
                "value": 550
              }
            },
            {
              "index": 2,
              "label": "Zuschnittlänge",
              "expected": {
                "kind": "number",
                "value": 260
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "unit": "m",
          "independentDerivation": "ceil(220×2.5/140)=4;4×(230+30)/100=10.4m"
        },
        "boundary": {
          "inputs": {
            "windowWidth": 0.1,
            "fullness": 3,
            "fabricWidth": 0.3,
            "height": 100,
            "hem": 0
          },
          "expected": {
            "kind": "number",
            "value": 1
          },
          "rows": [
            {
              "index": 0,
              "label": "Bahnen",
              "expected": {
                "kind": "number",
                "value": 1
              }
            },
            {
              "index": 1,
              "label": "Flache Stoffbreite vor dem Falten",
              "expected": {
                "kind": "number",
                "value": 0.3
              }
            },
            {
              "index": 2,
              "label": "Zuschnittlänge",
              "expected": {
                "kind": "number",
                "value": 100
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "unit": "m",
          "independentDerivation": "Exact decimalceil(.1×3/.3)=1;1×100/100=1m"
        },
        "controls": [],
        "defaultExpected": {
          "kind": "number",
          "value": 2.7
        },
        "blankField": "windowWidth",
        "domainField": "windowWidth",
        "domainValue": 0,
        "counts": []
      },
      {
        "locale": "es",
        "path": "/es/hogar/tela-para-cortinas/",
        "h1": "Calculadora de tela para cortinas",
        "body": {
          "longDescription": "Estima tela para paños verticales que usan todo el ancho del rollo. Riel × fruncido es el ancho total de tela plana antes de fruncir, no el ancho final de la cortina. Influyen tanto el número de paños como su largo: una cortina más alta consume más tela con el mismo ancho.",
          "howToUse": [
            "Introduce el ancho del riel y el fruncido elegido según la confección; no hay un coeficiente universal.",
            "Indica el ancho útil para este corte. Los dobladillos laterales y las costuras no se descuentan aparte.",
            "Escribe la altura final y la suma de márgenes superior e inferior en centímetros; se admite margen cero.",
            "Comprueba por separado el repetido, el encogimiento y el corte transversal; no se añaden automáticamente."
          ],
          "howItWorks": "Ancho plano = riel × fruncido. Paños = ancho plano / ancho de tela, redondeado hacia arriba a un entero. Largo de corte = altura + margen total; metros = paños × largo / 100. El recuento decimal conserva cualquier resto positivo real.",
          "example": "140 cm × 2 = 280 cm antes de fruncir. Un rollo de 280 cm necesita un paño de 250 + 20 = 270 cm, es decir, 2,7 m. Si se requieren 300 cm planos, hacen falta dos paños.",
          "faq": [
            {
              "q": "¿Qué fruncido debo elegir?",
              "a": "Elige el fruncido según la tela y la confección. Un valor de 2 significa doble ancho plano del riel, no una norma de pliegues. El consumo aumenta por escalones al necesitar paños enteros."
            },
            {
              "q": "¿Por qué se redondean los paños hacia arriba?",
              "a": "Este modelo usa todo el ancho de tela por paño. Un resto de ancho exige otro corte; coser o cambiar la distribución es posible, pero aquí no se optimiza."
            },
            {
              "q": "¿Debo prever el repetido del estampado?",
              "a": "No hay un campo separado para el repetido. Calcula el largo adicional según el dibujo real y su alineación; medio metro no es un máximo universal."
            },
            {
              "q": "¿Qué ancho de tela sale más económico?",
              "a": "Compara paños, largos de corte y precio por metro lineal. El corte transversal cambia la distribución y no sirve para todas las telas; esta fórmula usa paños verticales."
            }
          ],
          "disclaimer": "Estimación de paños verticales de ancho completo, no un plano de corte terminado. Costuras laterales, repetidos, encogimiento y condiciones del proveedor requieren comprobación aparte."
        },
        "help": {},
        "sources": [],
        "normal": {
          "inputs": {
            "windowWidth": 220,
            "fullness": 2.5,
            "fabricWidth": 140,
            "height": 230,
            "hem": 30
          },
          "expected": {
            "kind": "number",
            "value": 10.4
          },
          "rows": [
            {
              "index": 0,
              "label": "Paños",
              "expected": {
                "kind": "number",
                "value": 4
              }
            },
            {
              "index": 1,
              "label": "Ancho de tela antes del fruncido",
              "expected": {
                "kind": "number",
                "value": 550
              }
            },
            {
              "index": 2,
              "label": "Longitud del corte",
              "expected": {
                "kind": "number",
                "value": 260
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "unit": "m",
          "independentDerivation": "ceil(220×2.5/140)=4;4×(230+30)/100=10.4m"
        },
        "boundary": {
          "inputs": {
            "windowWidth": 0.1,
            "fullness": 3,
            "fabricWidth": 0.3,
            "height": 100,
            "hem": 0
          },
          "expected": {
            "kind": "number",
            "value": 1
          },
          "rows": [
            {
              "index": 0,
              "label": "Paños",
              "expected": {
                "kind": "number",
                "value": 1
              }
            },
            {
              "index": 1,
              "label": "Ancho de tela antes del fruncido",
              "expected": {
                "kind": "number",
                "value": 0.3
              }
            },
            {
              "index": 2,
              "label": "Longitud del corte",
              "expected": {
                "kind": "number",
                "value": 100
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "unit": "m",
          "independentDerivation": "Exact decimalceil(.1×3/.3)=1;1×100/100=1m"
        },
        "controls": [],
        "defaultExpected": {
          "kind": "number",
          "value": 2.7
        },
        "blankField": "windowWidth",
        "domainField": "windowWidth",
        "domainValue": 0,
        "counts": []
      }
    ]
  },
  {
    "id": "luggage-linear",
    "defaults": {
      "l": 55,
      "w": 40,
      "h": 23,
      "limit": 158
    },
    "fields": [
      "l",
      "w",
      "h",
      "limit"
    ],
    "defaultInactive": [],
    "pages": [
      {
        "locale": "ru",
        "path": "/ru/household/lineynye-gabarity-bagazha/",
        "h1": "Калькулятор линейных габаритов багажа",
        "body": {
          "longDescription": "Складывает три внешних размера и сравнивает сумму только с введённым пределом. Например, 78×50×30 и 55×50×53 см дают одинаковые 158 см; это не означает одинаковую допустимость у перевозчика. Отдельные стороны, масса, форма, маршрут и тариф здесь не проверяются.",
          "howToUse": [
            "Измерьте внешние длину, ширину и высоту в сантиметрах, включая выступающие колёса, ручки и карманы.",
            "Введите предел суммы из условий именно вашего перевозчика и рейса; 158 см — исходный пример, а не универсальная норма.",
            "Отрицательный запас означает превышение введённой суммы. Доплаты или разрешение на перевозку калькулятор не определяет.",
            "Дюймы — точный перевод сантиметров; объём — объём прямоугольной коробки по внешним размерам, не полезная вместимость."
          ],
          "howItWorks": "Сумма S = l + w + h. Запас = предел − S; дюймы = S / 2,54; литры внешней коробки = lwh / 1000. Статус относится только к введённому пределу суммы. Уменьшение любой стороны на 1 см уменьшает S на один и тот же 1 см. Сумма и запас до предела сравниваются по кратким десятичным представлениям введённых чисел до округления результата.",
          "example": "55×40×23 см дают 118 см, запас 40 см при введённых 158 см и коробку 50,6 л. 62 дюйма точно равны 157,48 см; 158 см равны примерно 62,205 дюйма.",
          "faq": [
            {
              "q": "Почему считают сумму, а не каждую сторону?",
              "a": "Некоторые правила используют сумму, другие — отдельные размеры, а иногда оба ограничения. При одинаковой сумме этот инструмент даёт одинаковый статус независимо от формы; другие условия нужно проверять отдельно."
            },
            {
              "q": "Входят ли колёса и ручка?",
              "a": "Для внешних габаритов измеряйте самые выступающие точки, включая колёса и ручку. Не заменяйте реальный замер размером корпуса из карточки товара."
            },
            {
              "q": "Что такое 62 linear inches?",
              "a": "62 линейных дюйма — сумма трёх внешних сторон в дюймах. Точное преобразование даёт 157,48 см; перевозчик может публиковать округлённую пару «62 in / 158 cm», которую следует читать как его правило, а не тождество единиц."
            },
            {
              "q": "Что делать при превышении?",
              "a": "Проверьте правила рейса: возможны переупаковка, доплата или отказ. Каждый сантиметр на любой стороне меняет сумму одинаково; самая длинная сторона не даёт арифметического преимущества."
            }
          ],
          "disclaimer": "Проверка одного вручную введённого ограничения. Она не подтверждает принятие багажа и не заменяет действующие условия перевозчика."
        },
        "help": {},
        "sources": [
          "https://www.nist.gov/pml/owm/si-units-length",
          "https://www.aa.com/pubcontent/en_EU/travel-info/baggage/checked-baggage-policy.html",
          "https://www.aa.com/pubcontent/en_US/travel-info/baggage/oversize-and-overweight-baggage.html"
        ],
        "normal": {
          "inputs": {
            "l": 62,
            "w": 45,
            "h": 28,
            "limit": 115
          },
          "expected": {
            "kind": "number",
            "value": 135
          },
          "rows": [
            {
              "index": 0,
              "label": "Запас до предела",
              "expected": {
                "kind": "number",
                "value": -20
              }
            },
            {
              "index": 1,
              "label": "В дюймах",
              "expected": {
                "kind": "number",
                "value": 53.1496062992126
              }
            },
            {
              "index": 2,
              "label": "Объём коробки",
              "expected": {
                "kind": "number",
                "value": 78.12
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "unit": "см",
          "independentDerivation": "62+45+28=135;115−135=−20;62×45×28/1000=78.12L"
        },
        "boundary": {
          "inputs": {
            "l": 0.1,
            "w": 0.2,
            "h": 0.3,
            "limit": 0.6
          },
          "expected": {
            "kind": "number",
            "value": 0.6
          },
          "rows": [
            {
              "index": 0,
              "label": "Запас до предела",
              "expected": {
                "kind": "number",
                "value": 0
              }
            },
            {
              "index": 3,
              "label": "По введённому пределу",
              "expected": {
                "kind": "literal",
                "value": "проходит"
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "unit": "см",
          "independentDerivation": "Decimal.1+.2+.3=.6;equal selectedlimit passes andreserve0"
        },
        "controls": [
          {
            "inputs": {
              "l": 0.1,
              "w": 0.2,
              "h": 0.30000000000000004,
              "limit": 0.6
            },
            "expected": {
              "kind": "number",
              "value": 0.6
            },
            "rows": [
              {
                "index": 0,
                "label": "Запас до предела",
                "expected": {
                  "kind": "number",
                  "value": -4e-17
                }
              },
              {
                "index": 3,
                "label": "По введённому пределу",
                "expected": {
                  "kind": "literal",
                  "value": "превышена"
                }
              }
            ],
            "inactive": [],
            "rowCount": 4,
            "unit": "см",
            "independentDerivation": "Shortestdecimalexcess.30000000000000004−.3=4e−17>0 remains exceeded"
          }
        ],
        "defaultExpected": {
          "kind": "number",
          "value": 118
        },
        "blankField": "l",
        "domainField": "limit",
        "domainValue": 0,
        "counts": []
      },
      {
        "locale": "en",
        "path": "/en/household/luggage-linear-inches/",
        "h1": "Luggage linear inches calculator",
        "body": {
          "longDescription": "Adds three outside dimensions and compares the sum only with your entered limit. A 78×50×30 cm case and a 55×50×53 cm case both total 158 cm; that does not establish equal acceptance by an airline. Individual sides, weight, shape, route and fare are not checked.",
          "howToUse": [
            "Measure outside length, width and height in centimetres, including protruding wheels, handles and pockets.",
            "Enter the sum limit from the rules for your carrier and flight; 158 cm is a starting example, not a universal allowance.",
            "A negative margin exceeds the entered sum limit. The calculator does not decide fees or carriage permission.",
            "Inches convert the centimetres; volume describes an outside rectangular box, not usable packing capacity."
          ],
          "howItWorks": "Sum S = l + w + h. Margin = limit − S; inches = S / 2.54; outer box litres = lwh / 1000. The status concerns only the entered sum limit. Removing 1 cm from any side reduces S by the same 1 cm. The sum and remaining allowance are compared using the shortest decimal representations of parsed inputs before display rounding.",
          "example": "55×40×23 cm totals 118 cm, leaving 40 cm against an entered 158 cm, with a 50.6 L box. Exactly 62 inches is 157.48 cm; 158 cm is approximately 62.205 inches.",
          "faq": [
            {
              "q": "Why a sum rather than each side?",
              "a": "Some rules use a sum, others individual sides, and some use both. Equal sums give equal status in this tool regardless of shape; check other requirements separately."
            },
            {
              "q": "Do wheels and the handle count?",
              "a": "For outside dimensions, measure the outermost points including wheels and handles. A listed body size is not a substitute for measuring the bag."
            },
            {
              "q": "What are 62 linear inches?",
              "a": "62 linear inches means the sum of the three outside sides in inches. The exact conversion is 157.48 cm. A carrier may publish the rounded policy pair “62 in /158 cm”; that is its rule, not an exact unit identity."
            },
            {
              "q": "What to do when over?",
              "a": "Check your flight’s rules: repacking, a fee or refusal may apply. One centimetre removed from any side has the same arithmetic effect; the longest side has no special advantage."
            }
          ],
          "disclaimer": "Checks one manually entered restriction. It does not confirm baggage acceptance or replace the operating carrier’s current rules."
        },
        "help": {},
        "sources": [
          "https://www.nist.gov/pml/owm/si-units-length",
          "https://www.aa.com/pubcontent/en_EU/travel-info/baggage/checked-baggage-policy.html",
          "https://www.aa.com/pubcontent/en_US/travel-info/baggage/oversize-and-overweight-baggage.html"
        ],
        "normal": {
          "inputs": {
            "l": 62,
            "w": 45,
            "h": 28,
            "limit": 115
          },
          "expected": {
            "kind": "number",
            "value": 135
          },
          "rows": [
            {
              "index": 0,
              "label": "Margin to the limit",
              "expected": {
                "kind": "number",
                "value": -20
              }
            },
            {
              "index": 1,
              "label": "In inches",
              "expected": {
                "kind": "number",
                "value": 53.1496062992126
              }
            },
            {
              "index": 2,
              "label": "Box volume",
              "expected": {
                "kind": "number",
                "value": 78.12
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "unit": "cm",
          "independentDerivation": "62+45+28=135;115−135=−20;62×45×28/1000=78.12L"
        },
        "boundary": {
          "inputs": {
            "l": 0.1,
            "w": 0.2,
            "h": 0.3,
            "limit": 0.6
          },
          "expected": {
            "kind": "number",
            "value": 0.6
          },
          "rows": [
            {
              "index": 0,
              "label": "Margin to the limit",
              "expected": {
                "kind": "number",
                "value": 0
              }
            },
            {
              "index": 3,
              "label": "Against the entered limit",
              "expected": {
                "kind": "literal",
                "value": "within the limit"
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "unit": "cm",
          "independentDerivation": "Decimal.1+.2+.3=.6;equal selectedlimit passes andreserve0"
        },
        "controls": [
          {
            "inputs": {
              "l": 0.1,
              "w": 0.2,
              "h": 0.30000000000000004,
              "limit": 0.6
            },
            "expected": {
              "kind": "number",
              "value": 0.6
            },
            "rows": [
              {
                "index": 0,
                "label": "Margin to the limit",
                "expected": {
                  "kind": "number",
                  "value": -4e-17
                }
              },
              {
                "index": 3,
                "label": "Against the entered limit",
                "expected": {
                  "kind": "literal",
                  "value": "over the limit"
                }
              }
            ],
            "inactive": [],
            "rowCount": 4,
            "unit": "cm",
            "independentDerivation": "Shortestdecimalexcess.30000000000000004−.3=4e−17>0 remains exceeded"
          }
        ],
        "defaultExpected": {
          "kind": "number",
          "value": 118
        },
        "blankField": "l",
        "domainField": "limit",
        "domainValue": 0,
        "counts": []
      },
      {
        "locale": "uk",
        "path": "/uk/pobut/liniyni-gabaryty-bagazhu/",
        "h1": "Калькулятор лінійних габаритів багажу",
        "body": {
          "longDescription": "Додає три зовнішні розміри й порівнює суму лише з введеною межею. Валізи 78×50×30 і 55×50×53 см мають однакові 158 см, але це не гарантує однакового прийняття перевізником. Окремі сторони, маса, форма, маршрут і тариф не перевіряються.",
          "howToUse": [
            "Виміряйте зовнішні довжину, ширину й висоту в сантиметрах разом із колесами, ручками й виступними кишенями.",
            "Введіть межу суми з правил вашого перевізника та рейсу; 158 см — початковий приклад, а не загальна норма.",
            "Від’ємний запас означає перевищення введеної межі; доплату або дозвіл на перевезення модель не визначає.",
            "Дюйми — перетворення сантиметрів; об’єм стосується зовнішньої прямокутної коробки, а не корисної місткості."
          ],
          "howItWorks": "Сума S = l + w + h. Запас = межа − S; дюйми = S /2,54; літри коробки = lwh /1000. Статус перевіряє тільки введену сумарну межу. Зменшення будь-якої сторони на 1 см однаково зменшує суму. Сума й запас до межі порівнюються за короткими десятковими поданнями введених чисел до округлення результату.",
          "example": "55×40×23 см дають 118 см, запас 40 см за введених 158 см і коробку 50,6 л. 62 дюйми точно дорівнюють 157,48 см, а 158 см — приблизно 62,205 дюйма.",
          "faq": [
            {
              "q": "Чи включати колеса й ручку?",
              "a": "Так, для зовнішніх розмірів вимірюйте найвиступніші точки, включно з колесами та ручкою. Розмір корпусу в описі товару може відрізнятися від повного габариту."
            },
            {
              "q": "Яка типова норма?",
              "a": "Звірте конкретні правила рейсу, а не загальне число. 158 см — приклад у полі; 62 дюйми математично дорівнюють 157,48 см, хоча перевізник може опублікувати округлену пару 62 in /158 cm."
            },
            {
              "q": "Що буде за перевищення?",
              "a": "Наслідки залежать від перевізника, рейсу та інших обмежень: можливі доплата, перепакування або відмова. Цей інструмент їх не прогнозує."
            },
            {
              "q": "Чи важлива форма валізи?",
              "a": "За однакової суми модель дає однаковий результат незалежно від форми. Але перевізник може додатково обмежувати окремі сторони, масу або відповідність калібратору."
            }
          ],
          "disclaimer": "Перевірка одного введеного вручну обмеження. Вона не підтверджує прийняття багажу й не замінює чинних правил перевізника."
        },
        "help": {},
        "sources": [
          "https://www.nist.gov/pml/owm/si-units-length",
          "https://www.aa.com/pubcontent/en_EU/travel-info/baggage/checked-baggage-policy.html",
          "https://www.aa.com/pubcontent/en_US/travel-info/baggage/oversize-and-overweight-baggage.html"
        ],
        "normal": {
          "inputs": {
            "l": 62,
            "w": 45,
            "h": 28,
            "limit": 115
          },
          "expected": {
            "kind": "number",
            "value": 135
          },
          "rows": [
            {
              "index": 0,
              "label": "Запас до межі",
              "expected": {
                "kind": "number",
                "value": -20
              }
            },
            {
              "index": 1,
              "label": "У дюймах",
              "expected": {
                "kind": "number",
                "value": 53.1496062992126
              }
            },
            {
              "index": 2,
              "label": "Об’єм коробки",
              "expected": {
                "kind": "number",
                "value": 78.12
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "unit": "см",
          "independentDerivation": "62+45+28=135;115−135=−20;62×45×28/1000=78.12L"
        },
        "boundary": {
          "inputs": {
            "l": 0.1,
            "w": 0.2,
            "h": 0.3,
            "limit": 0.6
          },
          "expected": {
            "kind": "number",
            "value": 0.6
          },
          "rows": [
            {
              "index": 0,
              "label": "Запас до межі",
              "expected": {
                "kind": "number",
                "value": 0
              }
            },
            {
              "index": 3,
              "label": "За введеною межею",
              "expected": {
                "kind": "literal",
                "value": "проходить"
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "unit": "см",
          "independentDerivation": "Decimal.1+.2+.3=.6;equal selectedlimit passes andreserve0"
        },
        "controls": [
          {
            "inputs": {
              "l": 0.1,
              "w": 0.2,
              "h": 0.30000000000000004,
              "limit": 0.6
            },
            "expected": {
              "kind": "number",
              "value": 0.6
            },
            "rows": [
              {
                "index": 0,
                "label": "Запас до межі",
                "expected": {
                  "kind": "number",
                  "value": -4e-17
                }
              },
              {
                "index": 3,
                "label": "За введеною межею",
                "expected": {
                  "kind": "literal",
                  "value": "перевищена"
                }
              }
            ],
            "inactive": [],
            "rowCount": 4,
            "unit": "см",
            "independentDerivation": "Shortestdecimalexcess.30000000000000004−.3=4e−17>0 remains exceeded"
          }
        ],
        "defaultExpected": {
          "kind": "number",
          "value": 118
        },
        "blankField": "l",
        "domainField": "limit",
        "domainValue": 0,
        "counts": []
      },
      {
        "locale": "de",
        "path": "/de/haushalt/koffermasse-rechner/",
        "h1": "Rechner für die Gesamtmaße eines Koffers",
        "body": {
          "longDescription": "Addiert drei Außenmaße und vergleicht die Summe nur mit der eingegebenen Grenze. 78×50×30 und 55×50×53 cm ergeben beide 158 cm; eine gleiche Annahme durch die Fluggesellschaft folgt daraus nicht. Einzelmaße, Gewicht, Form, Strecke und Tarif werden nicht geprüft.",
          "howToUse": [
            "Äußere Länge, Breite und Höhe in Zentimetern einschließlich Rollen, Griffen und vorstehenden Taschen messen.",
            "Summengrenze aus den Regeln Ihres Fluges eingeben; 158 cm ist ein Ausgangsbeispiel, keine allgemeine Freigrenze.",
            "Eine negative Reserve überschreitet die eingegebene Summe. Gebühren oder Beförderungserlaubnis werden nicht bestimmt.",
            "Zoll sind umgerechnete Zentimeter; das Volumen gilt für einen äußeren Quader, nicht für nutzbaren Stauraum."
          ],
          "howItWorks": "Summe S = l + w + h. Reserve = Grenze − S; Zoll = S /2,54; Quaderliter = lwh /1000. Der Status betrifft allein die eingegebene Summengrenze. 1 cm weniger an jeder beliebigen Seite senkt S um denselben 1 cm. Summe und Rest bis zur Grenze werden anhand der kürzesten Dezimaldarstellungen der Eingaben vor der Anzeigerundung verglichen.",
          "example": "55×40×23 cm ergeben 118 cm, 40 cm Reserve bei eingegebenen 158 cm und 50,6 l Quadergröße. 62 Zoll sind exakt 157,48 cm; 158 cm entsprechen etwa 62,205 Zoll.",
          "faq": [
            {
              "q": "Warum eine Summe und nicht jede Seite einzeln?",
              "a": "Manche Regeln verwenden die Summe, andere einzelne Seiten und manche beides. Gleiche Summen ergeben hier unabhängig von der Form denselben Status; weitere Bedingungen separat prüfen."
            },
            {
              "q": "Zählen Rollen und Griff mit?",
              "a": "Für Außenmaße die äußersten Punkte einschließlich Rollen und Griffen messen. Eine angegebene Gehäusegröße ersetzt die Messung des ganzen Gepäckstücks nicht."
            },
            {
              "q": "Was sind 62 linear inches?",
              "a": "62 linear inches sind die Summe der drei äußeren Seiten in Zoll. Exakt umgerechnet sind es 157,48 cm. Eine veröffentlichte gerundete Regel 62 in /158 cm ist keine exakte Einheitengleichung."
            },
            {
              "q": "Was tun bei Überschreitung?",
              "a": "Die Flugregeln prüfen: Umpacken, Gebühren oder Ablehnung sind möglich. Jeder entfernte Zentimeter wirkt an allen Seiten gleich; die längste Seite bietet keinen rechnerischen Vorteil."
            }
          ],
          "disclaimer": "Prüfung einer manuell eingegebenen Grenze. Keine Bestätigung der Gepäckannahme und kein Ersatz für die aktuellen Regeln der ausführenden Fluggesellschaft."
        },
        "help": {},
        "sources": [
          "https://www.nist.gov/pml/owm/si-units-length",
          "https://www.aa.com/pubcontent/en_EU/travel-info/baggage/checked-baggage-policy.html",
          "https://www.aa.com/pubcontent/en_US/travel-info/baggage/oversize-and-overweight-baggage.html"
        ],
        "normal": {
          "inputs": {
            "l": 62,
            "w": 45,
            "h": 28,
            "limit": 115
          },
          "expected": {
            "kind": "number",
            "value": 135
          },
          "rows": [
            {
              "index": 0,
              "label": "Reserve bis zur Grenze",
              "expected": {
                "kind": "number",
                "value": -20
              }
            },
            {
              "index": 1,
              "label": "In Zoll",
              "expected": {
                "kind": "number",
                "value": 53.1496062992126
              }
            },
            {
              "index": 2,
              "label": "Rauminhalt",
              "expected": {
                "kind": "number",
                "value": 78.12
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "unit": "cm",
          "independentDerivation": "62+45+28=135;115−135=−20;62×45×28/1000=78.12L"
        },
        "boundary": {
          "inputs": {
            "l": 0.1,
            "w": 0.2,
            "h": 0.3,
            "limit": 0.6
          },
          "expected": {
            "kind": "number",
            "value": 0.6
          },
          "rows": [
            {
              "index": 0,
              "label": "Reserve bis zur Grenze",
              "expected": {
                "kind": "number",
                "value": 0
              }
            },
            {
              "index": 3,
              "label": "Nach der eingegebenen Grenze",
              "expected": {
                "kind": "literal",
                "value": "innerhalb der Grenze"
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "unit": "cm",
          "independentDerivation": "Decimal.1+.2+.3=.6;equal selectedlimit passes andreserve0"
        },
        "controls": [
          {
            "inputs": {
              "l": 0.1,
              "w": 0.2,
              "h": 0.30000000000000004,
              "limit": 0.6
            },
            "expected": {
              "kind": "number",
              "value": 0.6
            },
            "rows": [
              {
                "index": 0,
                "label": "Reserve bis zur Grenze",
                "expected": {
                  "kind": "number",
                  "value": -4e-17
                }
              },
              {
                "index": 3,
                "label": "Nach der eingegebenen Grenze",
                "expected": {
                  "kind": "literal",
                  "value": "über der Grenze"
                }
              }
            ],
            "inactive": [],
            "rowCount": 4,
            "unit": "cm",
            "independentDerivation": "Shortestdecimalexcess.30000000000000004−.3=4e−17>0 remains exceeded"
          }
        ],
        "defaultExpected": {
          "kind": "number",
          "value": 118
        },
        "blankField": "l",
        "domainField": "limit",
        "domainValue": 0,
        "counts": []
      },
      {
        "locale": "es",
        "path": "/es/hogar/dimensiones-lineales-de-equipaje/",
        "h1": "Calculadora de dimensiones lineales de equipaje",
        "body": {
          "longDescription": "Suma tres medidas exteriores y compara el resultado solo con el límite introducido. 78×50×30 y 55×50×53 cm suman los mismos 158 cm; eso no garantiza la misma aceptación por una aerolínea. No verifica lados individuales, peso, forma, ruta ni tarifa.",
          "howToUse": [
            "Mide largo, ancho y alto exteriores en centímetros, incluidas ruedas, asas y bolsillos salientes.",
            "Introduce el límite de suma de tu compañía y vuelo; 158 cm es un ejemplo inicial, no una franquicia universal.",
            "Un margen negativo supera la suma introducida. La calculadora no determina cargos ni autorización de transporte.",
            "Las pulgadas convierten los centímetros; el volumen corresponde a una caja rectangular exterior, no a la capacidad útil."
          ],
          "howItWorks": "Suma S = l + w + h. Margen = límite − S; pulgadas = S /2,54; litros de caja = lwh /1000. El estado se refiere solo al límite de suma introducido. Quitar 1 cm a cualquier lado reduce S en el mismo 1 cm. La suma y el margen restante se comparan con las representaciones decimales más cortas de los datos antes de redondear la salida.",
          "example": "55×40×23 cm suman 118 cm, dejan 40 cm frente a 158 cm introducidos y forman una caja de 50,6 l. 62 pulgadas son exactamente 157,48 cm; 158 cm equivalen aproximadamente a 62,205 pulgadas.",
          "faq": [
            {
              "q": "¿Por qué una suma y no cada lado?",
              "a": "Hay reglas por suma, por lados separados y por ambas. Con igual suma, este instrumento da el mismo estado sin importar la forma; comprueba otras restricciones aparte."
            },
            {
              "q": "¿Cuentan las ruedas y el asa?",
              "a": "Para las medidas exteriores, toma los puntos más salientes, incluidas ruedas y asas. El tamaño del cuerpo anunciado no sustituye la medición de toda la maleta."
            },
            {
              "q": "¿Qué son 62 pulgadas lineales?",
              "a": "62 pulgadas lineales son la suma de los tres lados exteriores en pulgadas. La conversión exacta es 157,48 cm. Una compañía puede publicar la pareja redondeada 62 in /158 cm como regla, no como identidad exacta."
            },
            {
              "q": "¿Qué hago si me paso?",
              "a": "Consulta las reglas del vuelo: pueden exigir cambiar el embalaje, pagar o rechazarlo. Cada centímetro eliminado tiene el mismo efecto en cualquier lado; el más largo no tiene una ventaja aritmética."
            }
          ],
          "disclaimer": "Comprueba una restricción introducida manualmente. No confirma la aceptación del equipaje ni sustituye las condiciones actuales de la compañía operadora."
        },
        "help": {},
        "sources": [
          "https://www.nist.gov/pml/owm/si-units-length",
          "https://www.aa.com/pubcontent/en_EU/travel-info/baggage/checked-baggage-policy.html",
          "https://www.aa.com/pubcontent/en_US/travel-info/baggage/oversize-and-overweight-baggage.html"
        ],
        "normal": {
          "inputs": {
            "l": 62,
            "w": 45,
            "h": 28,
            "limit": 115
          },
          "expected": {
            "kind": "number",
            "value": 135
          },
          "rows": [
            {
              "index": 0,
              "label": "Margen hasta el límite",
              "expected": {
                "kind": "number",
                "value": -20
              }
            },
            {
              "index": 1,
              "label": "En pulgadas",
              "expected": {
                "kind": "number",
                "value": 53.1496062992126
              }
            },
            {
              "index": 2,
              "label": "Volumen del prisma",
              "expected": {
                "kind": "number",
                "value": 78.12
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "unit": "cm",
          "independentDerivation": "62+45+28=135;115−135=−20;62×45×28/1000=78.12L"
        },
        "boundary": {
          "inputs": {
            "l": 0.1,
            "w": 0.2,
            "h": 0.3,
            "limit": 0.6
          },
          "expected": {
            "kind": "number",
            "value": 0.6
          },
          "rows": [
            {
              "index": 0,
              "label": "Margen hasta el límite",
              "expected": {
                "kind": "number",
                "value": 0
              }
            },
            {
              "index": 3,
              "label": "Según el límite introducido",
              "expected": {
                "kind": "literal",
                "value": "dentro del límite"
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "unit": "cm",
          "independentDerivation": "Decimal.1+.2+.3=.6;equal selectedlimit passes andreserve0"
        },
        "controls": [
          {
            "inputs": {
              "l": 0.1,
              "w": 0.2,
              "h": 0.30000000000000004,
              "limit": 0.6
            },
            "expected": {
              "kind": "number",
              "value": 0.6
            },
            "rows": [
              {
                "index": 0,
                "label": "Margen hasta el límite",
                "expected": {
                  "kind": "number",
                  "value": -4e-17
                }
              },
              {
                "index": 3,
                "label": "Según el límite introducido",
                "expected": {
                  "kind": "literal",
                  "value": "por encima del límite"
                }
              }
            ],
            "inactive": [],
            "rowCount": 4,
            "unit": "cm",
            "independentDerivation": "Shortestdecimalexcess.30000000000000004−.3=4e−17>0 remains exceeded"
          }
        ],
        "defaultExpected": {
          "kind": "number",
          "value": 118
        },
        "blankField": "l",
        "domainField": "limit",
        "domainValue": 0,
        "counts": []
      }
    ]
  },
  {
    "id": "picture-frame-mat",
    "defaults": {
      "photoWidth": 20,
      "photoHeight": 30,
      "border": 5,
      "bottomExtra": 1
    },
    "fields": [
      "photoWidth",
      "photoHeight",
      "border",
      "bottomExtra"
    ],
    "defaultInactive": [],
    "pages": [
      {
        "locale": "ru",
        "path": "/ru/household/polya-passepartu/",
        "h1": "Калькулятор паспарту и рамы",
        "body": {
          "longDescription": "Считает внешний прямоугольник паспарту по видимому окну изображения, одинаковым верхнему и боковым полям и отдельной добавке снизу. Добавка — ваш выбор композиции; равные поля допустимы, и универсального обязательного утяжеления на 1–2 см нет. Размер относится к паспарту, а не к внешним краям багета.",
          "howToUse": [
            "Введите ширину и высоту видимого окна в сантиметрах, уже после выбранного перекрытия изображения.",
            "Укажите положительное поле сверху и по бокам; ширина зависит от вашего оформления, а не от фиксированной доли фотографии.",
            "Добавку снизу задайте отдельно; ноль оставляет все поля одинаковыми.",
            "Сверьте внешний размер паспарту с посадочным размером рамы; профиль, фальц, стекло и монтажные допуски не моделируются."
          ],
          "howItWorks": "Ширина = w +2 b; высота = h +2 b +e; нижнее поле = b +e. Площадь полей =2 b(w+h)+4 b²+e(w+2 b), то есть внешний прямоугольник минус окно. Эта развёрнутая форма сохраняет узкие поля при больших размерах.",
          "example": "Окно 20×30 см, поле 5 см и добавка снизу 1 см дают паспарту 30×41 см, нижнее поле 6 см и площадь полей 630 см². При добавке 0 высота станет 40 см.",
          "faq": [
            {
              "q": "Зачем нижнее поле шире?",
              "a": "Более широкое нижнее поле — возможный приём композиции, а не обязательная оптическая норма. Добавка зависит от изображения и оформления; ноль также допустим."
            },
            {
              "q": "Какой ширины делать поля?",
              "a": "Выберите ширину под изображение, рамку и желаемый вид. Доля меньшей стороны не является обязательным правилом и не проверяется калькулятором."
            },
            {
              "q": "Считать ли нахлёст паспарту на фотографию?",
              "a": "Да: эти поля описывают видимое окно. Перекрытие краёв снимка выбирается отдельно по креплению, а физический размер отпечатка может быть больше окна."
            },
            {
              "q": "Подойдёт ли расчёт для холста?",
              "a": "Формула описывает прямоугольные отступы. Конструкция рамы для холста, подрамник и фальц требуют отдельного расчёта; число здесь не является готовым размером багета."
            }
          ],
          "disclaimer": "Геометрия прямоугольного паспарту. Выбор композиции, монтажных припусков и материалов остаётся за проектом; внешний размер багета и сохранность изображения не вычисляются."
        },
        "help": {},
        "sources": [],
        "normal": {
          "inputs": {
            "photoWidth": 10,
            "photoHeight": 20,
            "border": 2,
            "bottomExtra": 1
          },
          "expected": {
            "kind": "dimensions",
            "values": [
              14,
              25
            ]
          },
          "rows": [
            {
              "index": 2,
              "label": "Площадь паспарту",
              "expected": {
                "kind": "number",
                "value": 150
              }
            },
            {
              "index": 0,
              "label": "Нижнее поле",
              "expected": {
                "kind": "number",
                "value": 3
              }
            },
            {
              "index": 3,
              "label": "Соотношение сторон паспарту",
              "expected": {
                "kind": "number",
                "value": 0.56
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "unit": "см",
          "independentDerivation": "(10+4)×(20+4+1)−10×20=150cm²;ratio14/25=.56"
        },
        "boundary": {
          "inputs": {
            "photoWidth": 10,
            "photoHeight": 20,
            "border": 0.1,
            "bottomExtra": 0
          },
          "expected": {
            "kind": "dimensions",
            "values": [
              10.2,
              20.2
            ]
          },
          "rows": [
            {
              "index": 0,
              "label": "Нижнее поле",
              "expected": {
                "kind": "number",
                "value": 0.1
              }
            },
            {
              "index": 2,
              "label": "Площадь паспарту",
              "expected": {
                "kind": "number",
                "value": 6.04
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "unit": "см",
          "independentDerivation": "10.2×20.2−10×20=6.04cm²;positivefractionalborder.1cm"
        },
        "controls": [],
        "defaultExpected": {
          "kind": "dimensions",
          "values": [
            30,
            41
          ]
        },
        "blankField": "photoWidth",
        "domainField": "border",
        "domainValue": 0,
        "counts": []
      },
      {
        "locale": "en",
        "path": "/en/household/picture-frame-mat/",
        "h1": "Picture frame mat calculator",
        "body": {
          "longDescription": "Calculates the outer mat rectangle from the visible image opening, equal top and side borders, and an optional extra bottom border. Bottom weighting is a composition choice: equal borders are valid and there is no mandatory 1–2 cm addition. The result is the mat size, not the outside of the moulding.",
          "howToUse": [
            "Enter the visible opening width and height in centimetres after choosing the overlap on the image.",
            "Set a positive top-and-side border for your design, rather than a fixed fraction of every photograph.",
            "Enter the bottom addition separately; zero makes all borders equal.",
            "Compare the outer mat with the frame fitting size; moulding, rebate, glass and assembly tolerances are not modelled."
          ],
          "howItWorks": "Width = w +2 b; height = h +2 b +e; bottom border = b +e. Border area =2 b(w+h)+4 b²+e(w+2 b), the outer rectangle minus the opening. This expanded form preserves narrow borders around large openings.",
          "example": "A 20×30 cm opening, 5 cm border and 1 cm bottom addition give a 30×41 cm mat, 6 cm bottom border and 630 cm² of borders. With zero addition the height is 40 cm.",
          "faq": [
            {
              "q": "Why is the bottom border wider?",
              "a": "A wider bottom is an optional composition technique, not a mandatory optical rule. Choose the addition for the image and framing; zero is also valid."
            },
            {
              "q": "How wide should the borders be?",
              "a": "Choose borders for the image, frame and intended appearance. A fraction of the shorter side is not a required rule or a calculator constraint."
            },
            {
              "q": "Should I allow for the mat overlap?",
              "a": "Yes: the inputs describe the visible opening. Choose image overlap separately for the mounting method; the physical print can be larger than the opening."
            },
            {
              "q": "Does this work for canvas?",
              "a": "The formula describes rectangular spacing. Canvas frames, stretchers and rebates need a separate construction plan; this number is not a finished moulding size."
            }
          ],
          "disclaimer": "Rectangular mat geometry. Composition, fitting allowances and materials are project choices; moulding outside dimensions and conservation outcomes are not calculated."
        },
        "help": {},
        "sources": [],
        "normal": {
          "inputs": {
            "photoWidth": 10,
            "photoHeight": 20,
            "border": 2,
            "bottomExtra": 1
          },
          "expected": {
            "kind": "dimensions",
            "values": [
              14,
              25
            ]
          },
          "rows": [
            {
              "index": 2,
              "label": "Mat area",
              "expected": {
                "kind": "number",
                "value": 150
              }
            },
            {
              "index": 0,
              "label": "Bottom border",
              "expected": {
                "kind": "number",
                "value": 3
              }
            },
            {
              "index": 3,
              "label": "Mat aspect ratio",
              "expected": {
                "kind": "number",
                "value": 0.56
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "unit": "cm",
          "independentDerivation": "(10+4)×(20+4+1)−10×20=150cm²;ratio14/25=.56"
        },
        "boundary": {
          "inputs": {
            "photoWidth": 10,
            "photoHeight": 20,
            "border": 0.1,
            "bottomExtra": 0
          },
          "expected": {
            "kind": "dimensions",
            "values": [
              10.2,
              20.2
            ]
          },
          "rows": [
            {
              "index": 0,
              "label": "Bottom border",
              "expected": {
                "kind": "number",
                "value": 0.1
              }
            },
            {
              "index": 2,
              "label": "Mat area",
              "expected": {
                "kind": "number",
                "value": 6.04
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "unit": "cm",
          "independentDerivation": "10.2×20.2−10×20=6.04cm²;positivefractionalborder.1cm"
        },
        "controls": [],
        "defaultExpected": {
          "kind": "dimensions",
          "values": [
            30,
            41
          ]
        },
        "blankField": "photoWidth",
        "domainField": "border",
        "domainValue": 0,
        "counts": []
      },
      {
        "locale": "uk",
        "path": "/uk/pobut/polya-pasparta/",
        "h1": "Калькулятор паспарту та рами",
        "body": {
          "longDescription": "Обчислює зовнішній прямокутник паспарту за видимим вікном зображення, рівними верхнім і бічними полями та окремою добавкою знизу. Обважнення — вибір композиції: рівні поля допустимі, а обов’язкової добавки 1–2 см немає. Результат стосується паспарту, не зовнішніх країв багета.",
          "howToUse": [
            "Введіть ширину й висоту видимого вікна в сантиметрах після обраного перекриття зображення.",
            "Задайте додатне верхнє й бічне поле під ваше оформлення, а не фіксовану частку будь-якого фото.",
            "Введіть нижню добавку окремо; нуль залишає всі поля рівними.",
            "Звірте зовнішній розмір паспарту з посадкою рами; профіль, фальц, скло й монтажні допуски не моделюються."
          ],
          "howItWorks": "Ширина = w +2 b; висота = h +2 b +e; нижнє поле = b +e. Площа полів =2 b(w+h)+4 b²+e(w+2 b), тобто зовнішній прямокутник мінус вікно. Розгорнута форма зберігає вузькі поля навколо великих вікон.",
          "example": "Вікно 20×30 см, поле 5 см і нижня добавка 1 см дають паспарту 30×41 см, нижнє поле 6 см і 630 см² полів. За добавки 0 висота стане 40 см.",
          "faq": [
            {
              "q": "Навіщо нижнє поле ширше?",
              "a": "Ширше нижнє поле — можливий композиційний прийом, а не обов’язкова оптична норма. Добавку обирають під зображення й оформлення; нуль також допустимий."
            },
            {
              "q": "Якої ширини робити поле?",
              "a": "Ширину обирають під зображення, раму й бажаний вигляд. Частка меншої сторони не є обов’язковим правилом чи межею калькулятора."
            },
            {
              "q": "Чи потрібне паспарту взагалі?",
              "a": "Потреба залежить від способу оформлення й матеріалів. Цей інструмент розраховує геометрію полів, а не необхідність паспарту або захист поверхні від скла."
            },
            {
              "q": "Як обрати колір паспарту?",
              "a": "Колір — окремий вибір композиції. Можна порівняти зразки поруч із роботою; модель не оцінює кольори й не визначає найкращий відтінок."
            }
          ],
          "disclaimer": "Геометрія прямокутного паспарту. Композиція, монтажні припуски й матеріали залежать від проєкту; зовнішній розмір багета та збереження зображення не розраховуються."
        },
        "help": {},
        "sources": [],
        "normal": {
          "inputs": {
            "photoWidth": 10,
            "photoHeight": 20,
            "border": 2,
            "bottomExtra": 1
          },
          "expected": {
            "kind": "dimensions",
            "values": [
              14,
              25
            ]
          },
          "rows": [
            {
              "index": 2,
              "label": "Площа паспарту",
              "expected": {
                "kind": "number",
                "value": 150
              }
            },
            {
              "index": 0,
              "label": "Нижнє поле",
              "expected": {
                "kind": "number",
                "value": 3
              }
            },
            {
              "index": 3,
              "label": "Співвідношення сторін паспарту",
              "expected": {
                "kind": "number",
                "value": 0.56
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "unit": "см",
          "independentDerivation": "(10+4)×(20+4+1)−10×20=150cm²;ratio14/25=.56"
        },
        "boundary": {
          "inputs": {
            "photoWidth": 10,
            "photoHeight": 20,
            "border": 0.1,
            "bottomExtra": 0
          },
          "expected": {
            "kind": "dimensions",
            "values": [
              10.2,
              20.2
            ]
          },
          "rows": [
            {
              "index": 0,
              "label": "Нижнє поле",
              "expected": {
                "kind": "number",
                "value": 0.1
              }
            },
            {
              "index": 2,
              "label": "Площа паспарту",
              "expected": {
                "kind": "number",
                "value": 6.04
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "unit": "см",
          "independentDerivation": "10.2×20.2−10×20=6.04cm²;positivefractionalborder.1cm"
        },
        "controls": [],
        "defaultExpected": {
          "kind": "dimensions",
          "values": [
            30,
            41
          ]
        },
        "blankField": "photoWidth",
        "domainField": "border",
        "domainValue": 0,
        "counts": []
      },
      {
        "locale": "de",
        "path": "/de/haushalt/passepartout-rechner/",
        "h1": "Rechner für Bilderrahmen und Passepartout",
        "body": {
          "longDescription": "Berechnet das äußere Rechteck des Passepartouts aus dem sichtbaren Bildausschnitt, gleichen oberen und seitlichen Rändern sowie einer unteren Zugabe. Die Zugabe ist eine Gestaltungswahl: gleiche Ränder sind gültig, 1–2 cm sind nicht allgemein vorgeschrieben. Das Ergebnis betrifft das Passepartout, nicht die Außenkanten der Rahmenleiste.",
          "howToUse": [
            "Sichtbare Ausschnittbreite und -höhe nach Wahl der Bildüberdeckung in Zentimetern eingeben.",
            "Einen positiven oberen und seitlichen Rand für die Gestaltung wählen, keinen festen Anteil jedes Fotos.",
            "Untere Zugabe gesondert eingeben; null ergibt überall gleiche Ränder.",
            "Außenmaß des Passepartouts mit dem Einlegemaß prüfen; Profil, Falz, Glas und Montagetoleranzen fehlen im Modell."
          ],
          "howItWorks": "Breite = w +2 b; Höhe = h +2 b +e; unterer Rand = b +e. Randfläche =2 b(w+h)+4 b²+e(w+2 b), äußeres Rechteck minus Ausschnitt. Die ausmultiplizierte Form bewahrt schmale Ränder bei großen Bildern.",
          "example": "Ausschnitt 20×30 cm, Rand 5 cm und untere Zugabe 1 cm ergeben 30×41 cm Passepartout, 6 cm unteren Rand und 630 cm² Randfläche. Ohne Zugabe beträgt die Höhe 40 cm.",
          "faq": [
            {
              "q": "Warum ist der untere Rand breiter?",
              "a": "Ein breiterer unterer Rand ist eine mögliche Gestaltung, keine zwingende optische Regel. Die Zugabe hängt vom Bild und Rahmen ab; null ist ebenfalls möglich."
            },
            {
              "q": "Wie breit sollen die Ränder sein?",
              "a": "Randbreite nach Bild, Rahmen und gewünschter Wirkung wählen. Ein Anteil der kürzeren Seite ist weder Vorschrift noch Rechengrenze."
            },
            {
              "q": "Muss ich die Überdeckung berücksichtigen?",
              "a": "Ja: die Eingaben sind der sichtbare Ausschnitt. Überdeckung nach Befestigung separat wählen; der tatsächliche Abzug kann größer sein."
            },
            {
              "q": "Funktioniert das auch für Leinwand?",
              "a": "Die Formel beschreibt rechteckige Abstände. Leinwandrahmen, Keilrahmen und Falz benötigen eigene Konstruktionsplanung; das Ergebnis ist kein fertiges Leistenaußenmaß."
            }
          ],
          "disclaimer": "Geometrie eines rechteckigen Passepartouts. Gestaltung, Einlegezugaben und Materialien sind Projektentscheidungen; äußere Leistenmaße und konservatorische Ergebnisse werden nicht berechnet."
        },
        "help": {},
        "sources": [],
        "normal": {
          "inputs": {
            "photoWidth": 10,
            "photoHeight": 20,
            "border": 2,
            "bottomExtra": 1
          },
          "expected": {
            "kind": "dimensions",
            "values": [
              14,
              25
            ]
          },
          "rows": [
            {
              "index": 2,
              "label": "Fläche des Passepartouts",
              "expected": {
                "kind": "number",
                "value": 150
              }
            },
            {
              "index": 0,
              "label": "Unterer Rand",
              "expected": {
                "kind": "number",
                "value": 3
              }
            },
            {
              "index": 3,
              "label": "Seitenverhältnis des Passepartouts",
              "expected": {
                "kind": "number",
                "value": 0.56
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "unit": "cm",
          "independentDerivation": "(10+4)×(20+4+1)−10×20=150cm²;ratio14/25=.56"
        },
        "boundary": {
          "inputs": {
            "photoWidth": 10,
            "photoHeight": 20,
            "border": 0.1,
            "bottomExtra": 0
          },
          "expected": {
            "kind": "dimensions",
            "values": [
              10.2,
              20.2
            ]
          },
          "rows": [
            {
              "index": 0,
              "label": "Unterer Rand",
              "expected": {
                "kind": "number",
                "value": 0.1
              }
            },
            {
              "index": 2,
              "label": "Fläche des Passepartouts",
              "expected": {
                "kind": "number",
                "value": 6.04
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "unit": "cm",
          "independentDerivation": "10.2×20.2−10×20=6.04cm²;positivefractionalborder.1cm"
        },
        "controls": [],
        "defaultExpected": {
          "kind": "dimensions",
          "values": [
            30,
            41
          ]
        },
        "blankField": "photoWidth",
        "domainField": "border",
        "domainValue": 0,
        "counts": []
      },
      {
        "locale": "es",
        "path": "/es/hogar/paspartu-y-marco/",
        "h1": "Calculadora de paspartú y marco",
        "body": {
          "longDescription": "Calcula el rectángulo exterior del paspartú a partir de la ventana visible, márgenes superiores y laterales iguales y una adición inferior. Esta adición es una elección de composición: los márgenes iguales son válidos y no hay 1–2 cm obligatorios. El resultado es del paspartú, no del exterior de la moldura.",
          "howToUse": [
            "Introduce ancho y alto de la ventana visible en centímetros después de elegir el solape sobre la imagen.",
            "Elige un margen superior y lateral positivo para tu composición, no una fracción fija de cualquier foto.",
            "Introduce aparte la adición inferior; cero deja todos los márgenes iguales.",
            "Comprueba el paspartú con la medida de encaje; moldura, rebaje, vidrio y tolerancias de montaje no se modelan."
          ],
          "howItWorks": "Ancho = w +2 b; alto = h +2 b +e; margen inferior = b +e. Área de márgenes =2 b(w+h)+4 b²+e(w+2 b), rectángulo exterior menos ventana. La expansión conserva márgenes estrechos alrededor de ventanas grandes.",
          "example": "Ventana 20×30 cm, margen 5 cm y adición inferior 1 cm dan un paspartú 30×41 cm, margen inferior 6 cm y 630 cm² de márgenes. Con adición 0 el alto es 40 cm.",
          "faq": [
            {
              "q": "¿Por qué el margen inferior es más ancho?",
              "a": "Un margen inferior mayor es una técnica opcional de composición, no una norma óptica obligatoria. Elige la adición según la imagen y el montaje; cero también vale."
            },
            {
              "q": "¿De qué anchura deben ser los márgenes?",
              "a": "Elige los márgenes según la imagen, el marco y la apariencia buscada. Una fracción del lado corto no es una regla exigida ni una restricción del cálculo."
            },
            {
              "q": "¿Debo prever el solape del paspartú?",
              "a": "Sí: los campos describen la ventana visible. Elige aparte el solape según la fijación; la copia física puede ser mayor que la ventana."
            },
            {
              "q": "¿Vale para un lienzo?",
              "a": "La fórmula describe separaciones rectangulares. Marcos para lienzos, bastidores y rebajes requieren un plan constructivo propio; el número no es el exterior final de la moldura."
            }
          ],
          "disclaimer": "Geometría de un paspartú rectangular. Composición, holguras y materiales dependen del proyecto; no se calculan el exterior de la moldura ni resultados de conservación."
        },
        "help": {},
        "sources": [],
        "normal": {
          "inputs": {
            "photoWidth": 10,
            "photoHeight": 20,
            "border": 2,
            "bottomExtra": 1
          },
          "expected": {
            "kind": "dimensions",
            "values": [
              14,
              25
            ]
          },
          "rows": [
            {
              "index": 2,
              "label": "Superficie del paspartú",
              "expected": {
                "kind": "number",
                "value": 150
              }
            },
            {
              "index": 0,
              "label": "Margen inferior",
              "expected": {
                "kind": "number",
                "value": 3
              }
            },
            {
              "index": 3,
              "label": "Proporción del paspartú",
              "expected": {
                "kind": "number",
                "value": 0.56
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "unit": "cm",
          "independentDerivation": "(10+4)×(20+4+1)−10×20=150cm²;ratio14/25=.56"
        },
        "boundary": {
          "inputs": {
            "photoWidth": 10,
            "photoHeight": 20,
            "border": 0.1,
            "bottomExtra": 0
          },
          "expected": {
            "kind": "dimensions",
            "values": [
              10.2,
              20.2
            ]
          },
          "rows": [
            {
              "index": 0,
              "label": "Margen inferior",
              "expected": {
                "kind": "number",
                "value": 0.1
              }
            },
            {
              "index": 2,
              "label": "Superficie del paspartú",
              "expected": {
                "kind": "number",
                "value": 6.04
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "unit": "cm",
          "independentDerivation": "10.2×20.2−10×20=6.04cm²;positivefractionalborder.1cm"
        },
        "controls": [],
        "defaultExpected": {
          "kind": "dimensions",
          "values": [
            30,
            41
          ]
        },
        "blankField": "photoWidth",
        "domainField": "border",
        "domainValue": 0,
        "counts": []
      }
    ]
  },
  {
    "id": "price-per-unit",
    "defaults": {
      "mode": "single",
      "unit": "kg",
      "price": 150,
      "amount": 0.5,
      "priceA": 150,
      "amountA": 0.5,
      "priceB": 260,
      "amountB": 1
    },
    "fields": [
      "mode",
      "unit",
      "price",
      "amount",
      "priceA",
      "amountA",
      "priceB",
      "amountB"
    ],
    "defaultInactive": [
      "priceA",
      "amountA",
      "priceB",
      "amountB"
    ],
    "pages": [
      {
        "locale": "ru",
        "path": "/ru/household/price-per-unit/",
        "h1": "Калькулятор цены за единицу",
        "body": {
          "longDescription": "Приводит цену упаковки к килограмму, литру или штуке и сравнивает две удельные цены. 150 за 0,5 кг —300 за кг, а 260 за 1 кг —260: разница 40 за кг, первая цена примерно на 15,4 % выше второй. Это сравнение цены количества, а не качества товара или общей полезности покупки.",
          "howToUse": [
            "Выберите одну единицу: кг, л или штуки. 500 г перед вводом переводятся в 0,5 кг; автоматической конвертации нет.",
            "В режиме одной упаковки введите положительную цену и количество; для двух переключите режим сравнения.",
            "Обе упаковки сравнивайте в одной выбранной единице и одной валюте, по фактической цене после скидок.",
            "Для штучного товара укажите фактическое количество; сопоставьте также качество, срок хранения и нужный вам объём."
          ],
          "howItWorks": "Удельная цена = цена / количество. При сравнении знак priceA×amountB − priceB×amountA определяет победителя без произвольного допуска «почти равно». Переплата = абсолютная разница удельных цен. Денежное округление относится к показу, поэтому близкие отображаемые цены могут выглядеть одинаково. Сравнение использует десятичные значения цен и количества до округления показа.",
          "example": "150 за 500 г: вводите 0,5 кг и получаете 300 за кг. Упаковка 260 за 1 кг дешевле на 40 за кг; при покупке 2 кг это 80 разницы.",
          "faq": [
            {
              "q": "Зачем приводить цену к единице?",
              "a": "Потому что упаковки редко бывают одинаковыми, и сравнить их «на глаз» нельзя. Приведение к килограмму или литру делает цены сопоставимыми."
            },
            {
              "q": "Что вводить в поле количества?",
              "a": "Количество в тех единицах, которые выбраны выше: для граммов переведите в килограммы, для миллилитров — в литры."
            },
            {
              "q": "Что показывает переплата?",
              "a": "На сколько дороже обходится единица товара в менее выгодной упаковке. Умножив её на нужный объём, вы увидите переплату целиком."
            },
            {
              "q": "Учитываются ли скидки и акции?",
              "a": "Нет, вводите итоговую цену, которую платите на кассе. Скидка уже должна быть в ней учтена."
            }
          ],
          "disclaimer": "Арифметика в одной валюте и одной выбранной единице; обменный курс, качество, доставка и потери продукта не включены."
        },
        "help": {
          "amount": "Количество в выбранной единице; 500 г вводятся как 0,5 кг,500 мл как 0,5 л."
        },
        "sources": [],
        "normal": {
          "inputs": {
            "mode": "single",
            "unit": "kg",
            "price": 210,
            "amount": 0.7,
            "priceA": 150,
            "amountA": 0.5,
            "priceB": 260,
            "amountB": 1
          },
          "expected": {
            "kind": "number",
            "value": 300
          },
          "rows": [
            {
              "index": 0,
              "label": "Цена упаковки",
              "expected": {
                "kind": "number",
                "value": 210
              }
            },
            {
              "index": 1,
              "label": "Количество в упаковке",
              "expected": {
                "kind": "number",
                "value": 0.7
              }
            }
          ],
          "inactive": [
            "priceA",
            "amountA",
            "priceB",
            "amountB"
          ],
          "rowCount": 2,
          "unit": "₽ за кг",
          "independentDerivation": "Exactdecimal210/.7=300;changedpackpriceandquantity,sameunitprice;default150/.5=300independent"
        },
        "boundary": {
          "inputs": {
            "mode": "compare",
            "unit": "kg",
            "price": 150,
            "amount": 0.5,
            "priceA": 0.3,
            "amountA": 3,
            "priceB": 0.1,
            "amountB": 1
          },
          "expected": {
            "kind": "literal",
            "value": "одинаково"
          },
          "rows": [
            {
              "index": 0,
              "label": "Упаковка A",
              "expected": {
                "kind": "number",
                "value": 0.1
              }
            },
            {
              "index": 1,
              "label": "Упаковка B",
              "expected": {
                "kind": "number",
                "value": 0.1
              }
            },
            {
              "index": 2,
              "label": "Переплата за единицу",
              "expected": {
                "kind": "number",
                "value": 0
              }
            }
          ],
          "inactive": [
            "price",
            "amount"
          ],
          "rowCount": 3,
          "unit": "",
          "independentDerivation": "Exactshortestdecimal.3/3=.1/1;nofalsebinaryinequality"
        },
        "controls": [
          {
            "inputs": {
              "mode": "compare",
              "unit": "kg",
              "price": 150,
              "amount": 0.5,
              "priceA": 0.30000000000000004,
              "amountA": 3,
              "priceB": 0.1,
              "amountB": 1
            },
            "expected": {
              "kind": "literal",
              "value": "B"
            },
            "rows": [
              {
                "index": 2,
                "label": "Переплата за единицу",
                "expected": {
                  "kind": "number",
                  "value": 1.3333333333333335e-17
                }
              }
            ],
            "inactive": [
              "price",
              "amount"
            ],
            "rowCount": 3,
            "unit": "",
            "independentDerivation": "(.30000000000000004−.3)/3=4e−17/3>0;Bcheaper,noepsilon tie"
          }
        ],
        "defaultExpected": {
          "kind": "number",
          "value": 300
        },
        "blankField": "price",
        "domainField": "price",
        "domainValue": 0,
        "counts": []
      },
      {
        "locale": "en",
        "path": "/en/household/price-per-unit-calculator/",
        "h1": "Price per unit calculator",
        "body": {
          "longDescription": "Converts a pack price to a kilogram, litre or piece and compares two unit prices. 150 for 0.5 kg is 300 per kg versus 260 for 1 kg: a 40 difference per kg, with the first about 15.4% higher. It compares price for quantity, not quality or overall purchase value.",
          "howToUse": [
            "Choose one unit: kg, litres or pieces. Convert 500 g to 0.5 kg before entry; no automatic conversion is performed.",
            "Enter a positive price and amount in single mode; switch to comparison for two packs.",
            "Use one selected unit and one currency for both packs, with the actual price after discounts.",
            "For individual items, enter their actual count; also consider quality, shelf life and the quantity you need."
          ],
          "howItWorks": "Unit price = price / amount. The sign of priceA×amountB − priceB×amountA selects the cheaper pack without an arbitrary “almost equal” tolerance. Overpayment is the absolute unit-price difference. Money rounding is for display, so close prices can look identical. Comparison uses decimal price and amount values before display rounding.",
          "example": "150 for 500 g: enter 0.5 kg to get 300 per kg. A 260 pack containing 1 kg is 40 per kg cheaper; buying 2 kg makes an 80 difference.",
          "faq": [
            {
              "q": "Why reduce prices to a unit?",
              "a": "Because packs are rarely the same size and cannot be compared at a glance. Reducing to a kilogram or a litre makes the prices comparable."
            },
            {
              "q": "What goes in the amount field?",
              "a": "The quantity in the unit selected above: convert grams to kilograms and millilitres to litres first."
            },
            {
              "q": "What does the overpayment show?",
              "a": "How much dearer one unit is in the less favourable pack. Multiply it by the quantity you need to see the full overpayment."
            },
            {
              "q": "Are discounts included?",
              "a": "No — enter the final price you pay at the till, with any discount already applied."
            }
          ],
          "disclaimer": "Arithmetic in one currency and one chosen unit. Exchange rates, quality, delivery and product waste are not included."
        },
        "help": {
          "amount": "Amount in the selected unit; enter 500 g as 0.5 kg and 500 mL as 0.5 L."
        },
        "sources": [],
        "normal": {
          "inputs": {
            "mode": "single",
            "unit": "kg",
            "price": 210,
            "amount": 0.7,
            "priceA": 150,
            "amountA": 0.5,
            "priceB": 260,
            "amountB": 1
          },
          "expected": {
            "kind": "number",
            "value": 300
          },
          "rows": [
            {
              "index": 0,
              "label": "Pack price",
              "expected": {
                "kind": "number",
                "value": 210
              }
            },
            {
              "index": 1,
              "label": "Amount in the pack",
              "expected": {
                "kind": "number",
                "value": 0.7
              }
            }
          ],
          "inactive": [
            "priceA",
            "amountA",
            "priceB",
            "amountB"
          ],
          "rowCount": 2,
          "unit": "$ per kg",
          "independentDerivation": "Exactdecimal210/.7=300;changedpackpriceandquantity,sameunitprice;default150/.5=300independent"
        },
        "boundary": {
          "inputs": {
            "mode": "compare",
            "unit": "kg",
            "price": 150,
            "amount": 0.5,
            "priceA": 0.3,
            "amountA": 3,
            "priceB": 0.1,
            "amountB": 1
          },
          "expected": {
            "kind": "literal",
            "value": "the same"
          },
          "rows": [
            {
              "index": 0,
              "label": "Pack A",
              "expected": {
                "kind": "number",
                "value": 0.1
              }
            },
            {
              "index": 1,
              "label": "Pack B",
              "expected": {
                "kind": "number",
                "value": 0.1
              }
            },
            {
              "index": 2,
              "label": "Overpayment per unit",
              "expected": {
                "kind": "number",
                "value": 0
              }
            }
          ],
          "inactive": [
            "price",
            "amount"
          ],
          "rowCount": 3,
          "unit": "",
          "independentDerivation": "Exactshortestdecimal.3/3=.1/1;nofalsebinaryinequality"
        },
        "controls": [
          {
            "inputs": {
              "mode": "compare",
              "unit": "kg",
              "price": 150,
              "amount": 0.5,
              "priceA": 0.30000000000000004,
              "amountA": 3,
              "priceB": 0.1,
              "amountB": 1
            },
            "expected": {
              "kind": "literal",
              "value": "B"
            },
            "rows": [
              {
                "index": 2,
                "label": "Overpayment per unit",
                "expected": {
                  "kind": "number",
                  "value": 1.3333333333333335e-17
                }
              }
            ],
            "inactive": [
              "price",
              "amount"
            ],
            "rowCount": 3,
            "unit": "",
            "independentDerivation": "(.30000000000000004−.3)/3=4e−17/3>0;Bcheaper,noepsilon tie"
          }
        ],
        "defaultExpected": {
          "kind": "number",
          "value": 300
        },
        "blankField": "price",
        "domainField": "price",
        "domainValue": 0,
        "counts": []
      },
      {
        "locale": "uk",
        "path": "/uk/pobut/tsina-za-odynytsyu/",
        "h1": "Калькулятор ціни за одиницю",
        "body": {
          "longDescription": "Перераховує ціну упаковки на кілограм, літр або штуку та порівнює дві питомі ціни. 150 за 0,5 кг дають 300 за кг проти 260 за 1 кг: різниця 40 за кг, перша ціна приблизно на 15,4 % вища. Це порівняння ціни кількості, а не якості чи загальної користі покупки.",
          "howToUse": [
            "Оберіть одну одиницю: кг, л або штуки. 500 г перед введенням переведіть у 0,5 кг; автоматичного перетворення немає.",
            "Для однієї упаковки введіть додатні ціну й кількість; для двох перемкніть режим порівняння.",
            "Обидві упаковки задавайте в одній одиниці й валюті за фактичною ціною після знижок.",
            "Для штучного товару задайте реальну кількість; окремо врахуйте якість, строк зберігання й потрібний обсяг."
          ],
          "howItWorks": "Питома ціна = ціна / кількість. Знак priceA×amountB − priceB×amountA визначає дешевший варіант без довільного допуску «майже однаково». Переплата — модуль різниці питомих цін. Округлення грошей діє лише на показ, тому близькі ціни можуть виглядати однаково. Порівняння використовує десяткові ціни й кількості до округлення показу.",
          "example": "150 за 500 г: введіть 0,5 кг і отримаєте 300 за кг. Упаковка 260 за 1 кг дешевша на 40 за кг; для 2 кг різниця 80.",
          "faq": [
            {
              "q": "Чи завжди велика упаковка вигідніша?",
              "a": "Ні. Порівняйте ціну за однакову кількість, а не лише загальний цінник. Розмір упаковки сам по собі не визначає питому ціну."
            },
            {
              "q": "Що робити з різними одиницями?",
              "a": "Привести до однієї: грами до кілограмів, мілілітри до літрів. Порівнювати ціну за 100 г із ціною за кілограм неможливо без переведення."
            },
            {
              "q": "Чи вказана питома ціна на ціннику?",
              "a": "Часто так, дрібним шрифтом. Але одиниці там бувають різні для схожих товарів, тому перерахунок усе одно корисний."
            },
            {
              "q": "Коли велика упаковка все ж невигідна?",
              "a": "Коли частина товару лишається невикористаною або псується, нижча питома ціна не гарантує менших фактичних витрат. Ці втрати модель не оцінює."
            }
          ],
          "disclaimer": "Арифметика в одній валюті та обраній одиниці. Курс, якість, доставка й втрати товару не включені."
        },
        "help": {
          "amount": "Кількість в обраній одиниці; 500 г вводяться як 0,5 кг,500 мл як 0,5 л."
        },
        "sources": [],
        "normal": {
          "inputs": {
            "mode": "single",
            "unit": "kg",
            "price": 210,
            "amount": 0.7,
            "priceA": 150,
            "amountA": 0.5,
            "priceB": 260,
            "amountB": 1
          },
          "expected": {
            "kind": "number",
            "value": 300
          },
          "rows": [
            {
              "index": 0,
              "label": "Ціна упаковки",
              "expected": {
                "kind": "number",
                "value": 210
              }
            },
            {
              "index": 1,
              "label": "Кількість в упаковці",
              "expected": {
                "kind": "number",
                "value": 0.7
              }
            }
          ],
          "inactive": [
            "priceA",
            "amountA",
            "priceB",
            "amountB"
          ],
          "rowCount": 2,
          "unit": "₴ за кг",
          "independentDerivation": "Exactdecimal210/.7=300;changedpackpriceandquantity,sameunitprice;default150/.5=300independent"
        },
        "boundary": {
          "inputs": {
            "mode": "compare",
            "unit": "kg",
            "price": 150,
            "amount": 0.5,
            "priceA": 0.3,
            "amountA": 3,
            "priceB": 0.1,
            "amountB": 1
          },
          "expected": {
            "kind": "literal",
            "value": "однаково"
          },
          "rows": [
            {
              "index": 0,
              "label": "Упаковка A",
              "expected": {
                "kind": "number",
                "value": 0.1
              }
            },
            {
              "index": 1,
              "label": "Упаковка B",
              "expected": {
                "kind": "number",
                "value": 0.1
              }
            },
            {
              "index": 2,
              "label": "Переплата за одиницю",
              "expected": {
                "kind": "number",
                "value": 0
              }
            }
          ],
          "inactive": [
            "price",
            "amount"
          ],
          "rowCount": 3,
          "unit": "",
          "independentDerivation": "Exactshortestdecimal.3/3=.1/1;nofalsebinaryinequality"
        },
        "controls": [
          {
            "inputs": {
              "mode": "compare",
              "unit": "kg",
              "price": 150,
              "amount": 0.5,
              "priceA": 0.30000000000000004,
              "amountA": 3,
              "priceB": 0.1,
              "amountB": 1
            },
            "expected": {
              "kind": "literal",
              "value": "B"
            },
            "rows": [
              {
                "index": 2,
                "label": "Переплата за одиницю",
                "expected": {
                  "kind": "number",
                  "value": 1.3333333333333335e-17
                }
              }
            ],
            "inactive": [
              "price",
              "amount"
            ],
            "rowCount": 3,
            "unit": "",
            "independentDerivation": "(.30000000000000004−.3)/3=4e−17/3>0;Bcheaper,noepsilon tie"
          }
        ],
        "defaultExpected": {
          "kind": "number",
          "value": 300
        },
        "blankField": "price",
        "domainField": "price",
        "domainValue": 0,
        "counts": []
      },
      {
        "locale": "de",
        "path": "/de/haushalt/grundpreis-rechner/",
        "h1": "Rechner für den Grundpreis",
        "body": {
          "longDescription": "Rechnet einen Packungspreis auf Kilogramm, Liter oder Stück um und vergleicht zwei Grundpreise. 1,50 für 0,5 kg ergibt 3,00 je kg gegenüber 2,60 für 1 kg: 0,40 Unterschied je kg, der erste Preis ist rund 15,4 % höher. Verglichen wird der Mengenpreis, nicht Qualität oder gesamter Einkaufsnutzen.",
          "howToUse": [
            "Eine Einheit wählen: kg, Liter oder Stück. 500 g vor der Eingabe in 0,5 kg umrechnen; keine automatische Umrechnung.",
            "Im Einzelmodus einen positiven Preis und Inhalt eingeben; für zwei Packungen den Vergleich wählen.",
            "Beide Packungen in derselben Einheit und Währung mit dem tatsächlichen Preis nach Rabatten angeben.",
            "Für einzelne Artikel die tatsächliche Stückzahl verwenden; Qualität, Haltbarkeit und benötigte Menge separat beachten."
          ],
          "howItWorks": "Grundpreis = Preis / Inhalt. Das Vorzeichen von priceA×amountB − priceB×amountA bestimmt das günstigere Angebot ohne willkürliche „fast gleich“-Toleranz. Mehrpreis = Betrag der Grundpreisdifferenz. Geldrundung betrifft die Anzeige; nahe Preise können gleich aussehen. Verglichen werden dezimale Preise und Mengen vor der Anzeigerundung.",
          "example": "1,50 für 500 g: 0,5 kg eingeben, um 3,00 je kg zu erhalten. 2,60 für 1 kg ist 0,40 je kg günstiger; bei 2 kg beträgt die Differenz 0,80.",
          "faq": [
            {
              "q": "Warum Preise auf eine Einheit bringen?",
              "a": "Weil Packungen selten gleich groß sind und sich nicht auf einen Blick vergleichen lassen. Auf ein Kilogramm oder einen Liter gebracht werden die Preise vergleichbar."
            },
            {
              "q": "Was gehört ins Feld für den Inhalt?",
              "a": "Die Menge in der oben gewählten Einheit: rechne Gramm vorher in Kilogramm und Milliliter in Liter um."
            },
            {
              "q": "Was zeigt der Mehrpreis?",
              "a": "Um wie viel eine Einheit in der ungünstigeren Packung teurer ist. Multipliziere ihn mit der Menge, die du brauchst, um den vollen Mehrpreis zu sehen."
            },
            {
              "q": "Sind Rabatte enthalten?",
              "a": "Nein — trage den Endpreis ein, den du an der Kasse zahlst, mit bereits abgezogenem Rabatt."
            }
          ],
          "disclaimer": "Rechnung in einer Währung und gewählten Einheit. Wechselkurs, Qualität, Lieferung und Verderb sind nicht enthalten."
        },
        "help": {
          "amount": "Menge in der gewählten Einheit; 500 g als 0,5 kg und 500 ml als 0,5 l eingeben."
        },
        "sources": [],
        "normal": {
          "inputs": {
            "mode": "single",
            "unit": "kg",
            "price": 210,
            "amount": 0.7,
            "priceA": 150,
            "amountA": 0.5,
            "priceB": 260,
            "amountB": 1
          },
          "expected": {
            "kind": "number",
            "value": 300
          },
          "rows": [
            {
              "index": 0,
              "label": "Preis der Packung",
              "expected": {
                "kind": "number",
                "value": 210
              }
            },
            {
              "index": 1,
              "label": "Inhalt der Packung",
              "expected": {
                "kind": "number",
                "value": 0.7
              }
            }
          ],
          "inactive": [
            "priceA",
            "amountA",
            "priceB",
            "amountB"
          ],
          "rowCount": 2,
          "unit": "€ je kg",
          "independentDerivation": "Exactdecimal210/.7=300;changedpackpriceandquantity,sameunitprice;default150/.5=300independent"
        },
        "boundary": {
          "inputs": {
            "mode": "compare",
            "unit": "kg",
            "price": 150,
            "amount": 0.5,
            "priceA": 0.3,
            "amountA": 3,
            "priceB": 0.1,
            "amountB": 1
          },
          "expected": {
            "kind": "literal",
            "value": "gleich"
          },
          "rows": [
            {
              "index": 0,
              "label": "Packung A",
              "expected": {
                "kind": "number",
                "value": 0.1
              }
            },
            {
              "index": 1,
              "label": "Packung B",
              "expected": {
                "kind": "number",
                "value": 0.1
              }
            },
            {
              "index": 2,
              "label": "Mehrpreis je Einheit",
              "expected": {
                "kind": "number",
                "value": 0
              }
            }
          ],
          "inactive": [
            "price",
            "amount"
          ],
          "rowCount": 3,
          "unit": "",
          "independentDerivation": "Exactshortestdecimal.3/3=.1/1;nofalsebinaryinequality"
        },
        "controls": [
          {
            "inputs": {
              "mode": "compare",
              "unit": "kg",
              "price": 150,
              "amount": 0.5,
              "priceA": 0.30000000000000004,
              "amountA": 3,
              "priceB": 0.1,
              "amountB": 1
            },
            "expected": {
              "kind": "literal",
              "value": "B"
            },
            "rows": [
              {
                "index": 2,
                "label": "Mehrpreis je Einheit",
                "expected": {
                  "kind": "number",
                  "value": 1.3333333333333335e-17
                }
              }
            ],
            "inactive": [
              "price",
              "amount"
            ],
            "rowCount": 3,
            "unit": "",
            "independentDerivation": "(.30000000000000004−.3)/3=4e−17/3>0;Bcheaper,noepsilon tie"
          }
        ],
        "defaultExpected": {
          "kind": "number",
          "value": 300
        },
        "blankField": "price",
        "domainField": "price",
        "domainValue": 0,
        "counts": []
      },
      {
        "locale": "es",
        "path": "/es/hogar/precio-por-unidad/",
        "h1": "Calculadora de precio por unidad",
        "body": {
          "longDescription": "Convierte el precio de un envase a kilogramo, litro o pieza y compara dos precios unitarios. 1,50 por 0,5 kg equivale a 3,00 por kg frente a 2,60 por 1 kg: 0,40 de diferencia por kg, con el primero aproximadamente un 15,4 % mayor. Compara precio por cantidad, no calidad ni utilidad global de la compra.",
          "howToUse": [
            "Elige una unidad: kg, litros o piezas. Convierte 500 g a 0,5 kg antes de introducirlos; no hay conversión automática.",
            "Introduce precio y cantidad positivos en modo individual; cambia a comparación para dos envases.",
            "Usa la misma unidad y moneda en ambos, con el precio real después de descuentos.",
            "Para artículos por pieza, introduce su cantidad real; valora aparte calidad, conservación y cantidad necesaria."
          ],
          "howItWorks": "Precio unitario = precio / cantidad. El signo de priceA×amountB − priceB×amountA determina el más barato sin una tolerancia arbitraria de «casi iguales». Sobrecoste = diferencia absoluta de precios unitarios. El redondeo monetario es de visualización; precios próximos pueden parecer iguales. La comparación usa precios y cantidades decimales antes del redondeo mostrado.",
          "example": "1,50 por 500 g: introduce 0,5 kg para obtener 3,00 por kg. 2,60 por 1 kg es 0,40 por kg más barato; en 2 kg la diferencia es 0,80.",
          "faq": [
            {
              "q": "¿Por qué reducir los precios a una unidad?",
              "a": "Porque los envases rara vez son del mismo tamaño y no pueden compararse de un vistazo. Reducirlos a un kilogramo o un litro hace los precios comparables."
            },
            {
              "q": "¿Qué va en el campo de la cantidad?",
              "a": "La cantidad en la unidad elegida arriba: convierte antes los gramos a kilogramos y los mililitros a litros."
            },
            {
              "q": "¿Qué indica el sobrecoste?",
              "a": "Cuánto más cara sale una unidad en el envase menos favorable. Multiplícalo por la cantidad que necesites para ver el sobrecoste total."
            },
            {
              "q": "¿Se incluyen los descuentos?",
              "a": "No: introduce el precio final que pagas en caja, con el descuento ya aplicado."
            }
          ],
          "disclaimer": "Aritmética en una moneda y una unidad elegida. No incluye cambio de divisa, calidad, transporte ni desperdicio."
        },
        "help": {
          "amount": "Cantidad en la unidad elegida; 500 g se introducen como 0,5 kg y 500 ml como 0,5 l."
        },
        "sources": [],
        "normal": {
          "inputs": {
            "mode": "single",
            "unit": "kg",
            "price": 210,
            "amount": 0.7,
            "priceA": 150,
            "amountA": 0.5,
            "priceB": 260,
            "amountB": 1
          },
          "expected": {
            "kind": "number",
            "value": 300
          },
          "rows": [
            {
              "index": 0,
              "label": "Precio del envase",
              "expected": {
                "kind": "number",
                "value": 210
              }
            },
            {
              "index": 1,
              "label": "Cantidad del envase",
              "expected": {
                "kind": "number",
                "value": 0.7
              }
            }
          ],
          "inactive": [
            "priceA",
            "amountA",
            "priceB",
            "amountB"
          ],
          "rowCount": 2,
          "unit": "€ por kg",
          "independentDerivation": "Exactdecimal210/.7=300;changedpackpriceandquantity,sameunitprice;default150/.5=300independent"
        },
        "boundary": {
          "inputs": {
            "mode": "compare",
            "unit": "kg",
            "price": 150,
            "amount": 0.5,
            "priceA": 0.3,
            "amountA": 3,
            "priceB": 0.1,
            "amountB": 1
          },
          "expected": {
            "kind": "literal",
            "value": "igual"
          },
          "rows": [
            {
              "index": 0,
              "label": "Envase A",
              "expected": {
                "kind": "number",
                "value": 0.1
              }
            },
            {
              "index": 1,
              "label": "Envase B",
              "expected": {
                "kind": "number",
                "value": 0.1
              }
            },
            {
              "index": 2,
              "label": "Sobrecoste por unidad",
              "expected": {
                "kind": "number",
                "value": 0
              }
            }
          ],
          "inactive": [
            "price",
            "amount"
          ],
          "rowCount": 3,
          "unit": "",
          "independentDerivation": "Exactshortestdecimal.3/3=.1/1;nofalsebinaryinequality"
        },
        "controls": [
          {
            "inputs": {
              "mode": "compare",
              "unit": "kg",
              "price": 150,
              "amount": 0.5,
              "priceA": 0.30000000000000004,
              "amountA": 3,
              "priceB": 0.1,
              "amountB": 1
            },
            "expected": {
              "kind": "literal",
              "value": "B"
            },
            "rows": [
              {
                "index": 2,
                "label": "Sobrecoste por unidad",
                "expected": {
                  "kind": "number",
                  "value": 1.3333333333333335e-17
                }
              }
            ],
            "inactive": [
              "price",
              "amount"
            ],
            "rowCount": 3,
            "unit": "",
            "independentDerivation": "(.30000000000000004−.3)/3=4e−17/3>0;Bcheaper,noepsilon tie"
          }
        ],
        "defaultExpected": {
          "kind": "number",
          "value": 300
        },
        "blankField": "price",
        "domainField": "price",
        "domainValue": 0,
        "counts": []
      }
    ]
  },
  {
    "id": "print-3d-cost",
    "defaults": {
      "grams": 85,
      "spoolPrice": 1800,
      "spoolWeight": 1000,
      "hours": 6.5,
      "powerW": 120,
      "kwhPrice": 5.5,
      "wearPerHour": 0,
      "markupPct": 0
    },
    "fields": [
      "grams",
      "spoolPrice",
      "spoolWeight",
      "hours",
      "powerW",
      "kwhPrice",
      "wearPerHour",
      "markupPct"
    ],
    "defaultInactive": [],
    "pages": [
      {
        "locale": "ru",
        "path": "/ru/household/print-3d-cost/",
        "h1": "Калькулятор стоимости 3D-печати",
        "body": {
          "longDescription": "Складывает пластик, электричество и введённый износ принтера, затем применяет выбранную наценку к полной базовой сумме. Главный результат — стоимость с наценкой; при 0 % он совпадает с базовой себестоимостью. Расход материала и средняя мощность задаются вами: фактические затраты зависят от печати, а не только от массы готовой детали.",
          "howToUse": [
            "Возьмите из слайсера расход всего материала, включая поддержки и отходы; массу детали и катушки вводите в граммах.",
            "Введите цену катушки и часы печати; масса и время должны быть положительными, нулевая цена допустима.",
            "Укажите среднюю потребляемую мощность в ваттах и тариф за кВт·ч. Пиковая паспортная мощность не обязательно равна среднему потреблению.",
            "Износ за час и наценка необязательны: пустое поле означает 0. Все денежные суммы задаются в одной валюте."
          ],
          "howItWorks": "Пластик = граммы × цена катушки / граммы катушки. Энергия в кВт·ч = Вт × часы /1000; её цена = энергия × тариф. Износ = часы × ставка. База = пластик + электричество + износ; итог = база ×(1 + наценка/100). Наценка не является процентом прибыли от итоговой цены. Десятичные денежные отношения округляются до двух знаков только при выводе; расчёт сохраняет неокруглённые отношения.",
          "example": "85 г, катушка 1800 за 1000 г, 6,5 ч, 120 Вт и тариф 5,5: пластик 153, энергия 0,78 кВт·ч за 4,29, итог 157,29 при нулевых износе и наценке. При наценке 25 % эта же база даёт 196,61.",
          "faq": [
            {
              "q": "Почему цена грамма не вводится напрямую?",
              "a": "Цена грамма выводится как цена катушки / её масса. Указывайте именно массу материала, а не массу упаковки; другое исходное ценообразование нужно привести к той же базе."
            },
            {
              "q": "Какую мощность принтера указывать?",
              "a": "Среднюю за полный цикл печати. Её можно оценить по измеренной энергии и времени; разные материалы, нагрев и окружающие условия меняют потребление. Универсальных 100–150 Вт нет."
            },
            {
              "q": "Что относить к амортизации?",
              "a": "Вашу оценку износа и обслуживания на час работы. Это не бухгалтерская амортизация по нормативам; пустое поле или 0 убирают эту составляющую."
            },
            {
              "q": "Наценка считается от пластика?",
              "a": "Наценка применяется к пластику, электричеству и введённому износу вместе. Это выбор цены, а не доказательство покрытия труда, налогов или всех прочих расходов."
            },
            {
              "q": "Учитывается ли брак?",
              "a": "Только если вы включили их расход материала и время в поля. Поддержки, продувка и неудачные попытки требуют соответствующих исходных данных."
            }
          ],
          "disclaimer": "Оценка введённых расходов в одной валюте. Труд, налоги, простои и неуказанные неудачные попытки автоматически не добавляются; средняя мощность не гарантируется спецификацией."
        },
        "help": {},
        "sources": [
          "https://help.prusa3d.com/article/faq-frequently-asked-questions_1932"
        ],
        "normal": {
          "inputs": {
            "grams": 100,
            "spoolPrice": 2000,
            "spoolWeight": 1000,
            "hours": 2,
            "powerW": 100,
            "kwhPrice": 5,
            "wearPerHour": 10,
            "markupPct": 25
          },
          "expected": {
            "kind": "number",
            "value": 276.25
          },
          "rows": [
            {
              "index": 0,
              "label": "Пластик",
              "expected": {
                "kind": "number",
                "value": 200
              }
            },
            {
              "index": 1,
              "label": "Электричество",
              "expected": {
                "kind": "number",
                "value": 1
              }
            },
            {
              "index": 2,
              "label": "Амортизация принтера",
              "expected": {
                "kind": "number",
                "value": 20
              }
            },
            {
              "index": 3,
              "label": "Наценка",
              "expected": {
                "kind": "number",
                "value": 55.25
              }
            },
            {
              "index": 4,
              "label": "Израсходовано энергии",
              "expected": {
                "kind": "number",
                "value": 0.2
              }
            },
            {
              "index": 5,
              "label": "Цена грамма пластика",
              "expected": {
                "kind": "number",
                "value": 2
              }
            }
          ],
          "inactive": [],
          "rowCount": 6,
          "unit": "₽",
          "independentDerivation": "Material100×2000/1000=200;energy100×2×5/1000=1;wear2×10=20;base221×1.25=276.25"
        },
        "boundary": {
          "inputs": {
            "grams": 1,
            "spoolPrice": 1.005,
            "spoolWeight": 3,
            "hours": 1,
            "powerW": 0,
            "kwhPrice": 0,
            "wearPerHour": 0,
            "markupPct": 0
          },
          "expected": {
            "kind": "number",
            "value": 0.34
          },
          "rows": [
            {
              "index": 0,
              "label": "Пластик",
              "expected": {
                "kind": "number",
                "value": 0.34
              }
            },
            {
              "index": 1,
              "label": "Электричество",
              "expected": {
                "kind": "number",
                "value": 0
              }
            },
            {
              "index": 3,
              "label": "Цена грамма пластика",
              "expected": {
                "kind": "number",
                "value": 0.34
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "unit": "₽",
          "independentDerivation": "1×1.005/3=.335 exactmoney→.34 finalhalfExpand;nocostminimum"
        },
        "controls": [],
        "defaultExpected": {
          "kind": "number",
          "value": 157.29
        },
        "blankField": "grams",
        "domainField": "spoolWeight",
        "domainValue": 0,
        "counts": []
      },
      {
        "locale": "en",
        "path": "/en/household/3d-printing-cost-calculator/",
        "h1": "3D printing cost calculator",
        "body": {
          "longDescription": "Adds filament, electricity and the entered printer wear, then applies your markup to the complete base cost. The main result includes markup; at 0% it equals the base cost. You supply consumed material and average power: actual expenses depend on the print, not just the finished part’s weight.",
          "howToUse": [
            "Use total slicer material including supports and waste; enter part and spool amounts in grams.",
            "Enter spool price and print hours; material weight and time must be positive, while zero price is allowed.",
            "Enter average power in watts and tariff per kWh. A rated peak is not necessarily the average draw.",
            "Hourly wear and markup are optional; blank means 0. Use one currency for all money inputs."
          ],
          "howItWorks": "Filament = grams × spool price / spool grams. Energy in kWh = watts × hours /1000; energy cost = energy × tariff. Wear = hours × hourly rate. Base = filament + electricity + wear; total = base ×(1 + markup/100). Markup is not profit margin as a percentage of the final price. Decimal monetary ratios are rounded to two places only for display; calculations retain the unrounded ratios.",
          "example": "85 g from a spool priced 1800 for 1000 g, 6.5 h at 120 W and tariff 5.5: filament 153, energy 0.78 kWh costing 4.29, total 157.29 at zero wear and markup. A 25% markup on that base gives 196.61.",
          "faq": [
            {
              "q": "Why is the price per gram not entered directly?",
              "a": "Price per gram is spool price / material weight. Use filament weight, not packaging weight; convert a different pricing basis to the same inputs."
            },
            {
              "q": "Which printer power should I enter?",
              "a": "The average over the full print. Measured energy divided by time can estimate it; material, heating and ambient conditions affect consumption. There is no universal 100–150 W range."
            },
            {
              "q": "What counts as wear?",
              "a": "Your estimated wear and maintenance per operating hour. This is not statutory accounting depreciation; blank or 0 removes the component."
            },
            {
              "q": "Is markup applied to filament only?",
              "a": "Markup applies to filament, electricity and entered wear together. It sets a price, without proving that labour, taxes or all other expenses are covered."
            },
            {
              "q": "Are failed prints included?",
              "a": "Only when their consumed material and time are included in the inputs. Supports, purging and failed attempts require corresponding usage data."
            }
          ],
          "disclaimer": "Estimate of entered expenses in one currency. Labour, taxes, idle time and unentered failed prints are not added automatically; a specification does not guarantee average power."
        },
        "help": {},
        "sources": [
          "https://help.prusa3d.com/article/faq-frequently-asked-questions_1932"
        ],
        "normal": {
          "inputs": {
            "grams": 100,
            "spoolPrice": 2000,
            "spoolWeight": 1000,
            "hours": 2,
            "powerW": 100,
            "kwhPrice": 5,
            "wearPerHour": 10,
            "markupPct": 25
          },
          "expected": {
            "kind": "number",
            "value": 276.25
          },
          "rows": [
            {
              "index": 0,
              "label": "Filament",
              "expected": {
                "kind": "number",
                "value": 200
              }
            },
            {
              "index": 1,
              "label": "Electricity",
              "expected": {
                "kind": "number",
                "value": 1
              }
            },
            {
              "index": 2,
              "label": "Printer wear",
              "expected": {
                "kind": "number",
                "value": 20
              }
            },
            {
              "index": 3,
              "label": "Markup",
              "expected": {
                "kind": "number",
                "value": 55.25
              }
            },
            {
              "index": 4,
              "label": "Energy used",
              "expected": {
                "kind": "number",
                "value": 0.2
              }
            },
            {
              "index": 5,
              "label": "Price per gram",
              "expected": {
                "kind": "number",
                "value": 2
              }
            }
          ],
          "inactive": [],
          "rowCount": 6,
          "unit": "$",
          "independentDerivation": "Material100×2000/1000=200;energy100×2×5/1000=1;wear2×10=20;base221×1.25=276.25"
        },
        "boundary": {
          "inputs": {
            "grams": 1,
            "spoolPrice": 1.005,
            "spoolWeight": 3,
            "hours": 1,
            "powerW": 0,
            "kwhPrice": 0,
            "wearPerHour": 0,
            "markupPct": 0
          },
          "expected": {
            "kind": "number",
            "value": 0.34
          },
          "rows": [
            {
              "index": 0,
              "label": "Filament",
              "expected": {
                "kind": "number",
                "value": 0.34
              }
            },
            {
              "index": 1,
              "label": "Electricity",
              "expected": {
                "kind": "number",
                "value": 0
              }
            },
            {
              "index": 3,
              "label": "Price per gram",
              "expected": {
                "kind": "number",
                "value": 0.34
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "unit": "$",
          "independentDerivation": "1×1.005/3=.335 exactmoney→.34 finalhalfExpand;nocostminimum"
        },
        "controls": [],
        "defaultExpected": {
          "kind": "number",
          "value": 157.29
        },
        "blankField": "grams",
        "domainField": "spoolWeight",
        "domainValue": 0,
        "counts": []
      },
      {
        "locale": "uk",
        "path": "/uk/pobut/vartist-3d-druku/",
        "h1": "Калькулятор вартості 3D-друку",
        "body": {
          "longDescription": "Додає матеріал, електрику та введене зношування принтера, потім застосовує націнку до всієї базової суми. Головний результат включає націнку; за 0 % він дорівнює базовій собівартості. Витрату матеріалу й середню потужність задаєте ви: фактична ціна залежить не лише від маси готової деталі.",
          "howToUse": [
            "Візьміть загальну витрату матеріалу зі слайсера, включно з підтримками й відходами; маси деталі та котушки вводьте в грамах.",
            "Введіть ціну котушки й години друку; маси та час додатні, нульова ціна допустима.",
            "Задайте середню потужність у ватах і тариф за кВт·год; пікова паспортна потужність не обов’язково є середньою.",
            "Зношування за годину й націнка необов’язкові: порожнє поле означає 0. Усі гроші вводьте в одній валюті."
          ],
          "howItWorks": "Матеріал = грами × ціна котушки / грами котушки. Енергія = Вт × години /1000 у кВт·год; її вартість = енергія × тариф. Зношування = години × ставка. База = матеріал + електрика + зношування; підсумок = база ×(1 + націнка/100). Націнка не дорівнює частці прибутку в кінцевій ціні. Десяткові грошові відношення округлюються до двох знаків лише для виведення; розрахунок зберігає неокруглені відношення.",
          "example": "85 г, котушка 1800 за 1000 г, 6,5 год, 120 Вт і тариф 5,5: матеріал 153, енергія 0,78 кВт·год за 4,29, разом 157,29 за нульових зношування й націнки. Націнка 25 % до цієї бази дає 196,61.",
          "faq": [
            {
              "q": "Чому електрика така дешева?",
              "a": "Ціна електрики залежить від виміряного середнього споживання, тривалості й вашого тарифу. Вона не завжди мала: універсальної потужності чи частки витрат для всіх принтерів немає."
            },
            {
              "q": "Що ще входить у реальну собівартість?",
              "a": "Враховано матеріал, електрику та введене зношування, а націнка змінює кінцеву ціну. Праця, податки, відходи й брак включені лише настільки, наскільки ви внесли відповідні витрати; універсальна подвійна надбавка не застосовується."
            },
            {
              "q": "Як дізнатися вагу деталі до друку?",
              "a": "Слайсер оцінює витрату за налаштуваннями матеріалу, заповнення й підтримок. Перевірте, що число означає всю потрібну витрату; це оцінка, а не гарантія фактичної маси."
            },
            {
              "q": "Чи враховано підтримки?",
              "a": "Лише якщо вони включені у введені грами. Окремо врахуйте підтримки, продувку й відходи: налаштування слайсера визначають, що входить у його підсумок."
            }
          ],
          "disclaimer": "Оцінка введених витрат в одній валюті. Праця, податки, простої та невведені невдалі спроби не додаються автоматично; специфікація не гарантує середню потужність."
        },
        "help": {},
        "sources": [
          "https://help.prusa3d.com/article/faq-frequently-asked-questions_1932"
        ],
        "normal": {
          "inputs": {
            "grams": 100,
            "spoolPrice": 2000,
            "spoolWeight": 1000,
            "hours": 2,
            "powerW": 100,
            "kwhPrice": 5,
            "wearPerHour": 10,
            "markupPct": 25
          },
          "expected": {
            "kind": "number",
            "value": 276.25
          },
          "rows": [
            {
              "index": 0,
              "label": "Пластик",
              "expected": {
                "kind": "number",
                "value": 200
              }
            },
            {
              "index": 1,
              "label": "Електрика",
              "expected": {
                "kind": "number",
                "value": 1
              }
            },
            {
              "index": 2,
              "label": "Амортизація принтера",
              "expected": {
                "kind": "number",
                "value": 20
              }
            },
            {
              "index": 3,
              "label": "Націнка",
              "expected": {
                "kind": "number",
                "value": 55.25
              }
            },
            {
              "index": 4,
              "label": "Витрачено енергії",
              "expected": {
                "kind": "number",
                "value": 0.2
              }
            },
            {
              "index": 5,
              "label": "Ціна грама пластику",
              "expected": {
                "kind": "number",
                "value": 2
              }
            }
          ],
          "inactive": [],
          "rowCount": 6,
          "unit": "₴",
          "independentDerivation": "Material100×2000/1000=200;energy100×2×5/1000=1;wear2×10=20;base221×1.25=276.25"
        },
        "boundary": {
          "inputs": {
            "grams": 1,
            "spoolPrice": 1.005,
            "spoolWeight": 3,
            "hours": 1,
            "powerW": 0,
            "kwhPrice": 0,
            "wearPerHour": 0,
            "markupPct": 0
          },
          "expected": {
            "kind": "number",
            "value": 0.34
          },
          "rows": [
            {
              "index": 0,
              "label": "Пластик",
              "expected": {
                "kind": "number",
                "value": 0.34
              }
            },
            {
              "index": 1,
              "label": "Електрика",
              "expected": {
                "kind": "number",
                "value": 0
              }
            },
            {
              "index": 3,
              "label": "Ціна грама пластику",
              "expected": {
                "kind": "number",
                "value": 0.34
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "unit": "₴",
          "independentDerivation": "1×1.005/3=.335 exactmoney→.34 finalhalfExpand;nocostminimum"
        },
        "controls": [],
        "defaultExpected": {
          "kind": "number",
          "value": 157.29
        },
        "blankField": "grams",
        "domainField": "spoolWeight",
        "domainValue": 0,
        "counts": []
      },
      {
        "locale": "de",
        "path": "/de/haushalt/3d-druck-kosten/",
        "h1": "Rechner für die Kosten eines 3D-Drucks",
        "body": {
          "longDescription": "Addiert Material, Strom und eingegebenen Druckerverschleiß und wendet den Aufschlag auf die ganze Kostenbasis an. Das Hauptergebnis enthält den Aufschlag; bei 0 % entspricht es den Basiskosten. Verbrauch und mittlere Leistung sind Ihre Eingaben: tatsächliche Kosten hängen nicht nur vom Gewicht des fertigen Teils ab.",
          "howToUse": [
            "Gesamten Materialverbrauch des Slicers mit Stützen und Abfall verwenden; Teil und Spule in Gramm eingeben.",
            "Spulenpreis und Druckstunden eingeben; Massen und Zeit müssen positiv sein, Preis 0 ist zulässig.",
            "Mittlere Leistung in Watt und Preis pro kWh angeben. Eine Nennspitze ist nicht zwingend die durchschnittliche Aufnahme.",
            "Verschleiß pro Stunde und Aufschlag sind optional; leer bedeutet 0. Alle Geldbeträge in einer Währung angeben."
          ],
          "howItWorks": "Material = Gramm × Spulenpreis / Spulengramm. Energie = Watt × Stunden /1000 in kWh; Stromkosten = Energie × Tarif. Verschleiß = Stunden × Satz. Basis = Material + Strom + Verschleiß; Gesamt = Basis ×(1 + Aufschlag/100). Der Aufschlag ist nicht die Gewinnmarge bezogen auf den Endpreis. Dezimale Geldverhältnisse werden erst zur Anzeige auf zwei Stellen gerundet; die Rechnung behält ungerundete Verhältnisse.",
          "example": "85 g, Spule 1800 für 1000 g, 6,5 h, 120 W und Tarif 5,5 in einer gewählten Geldeinheit: Material 153, Energie 0,78 kWh für 4,29, Gesamt 157,29 ohne Verschleiß oder Aufschlag. 25 % Aufschlag ergibt 196,61; es findet keine Währungsumrechnung statt.",
          "faq": [
            {
              "q": "Warum wird der Preis je Gramm nicht unmittelbar eingetragen?",
              "a": "Grammkosten = Spulenpreis / Materialgewicht. Das Verpackungsgewicht gehört nicht hinein; andere Preisgrundlagen zuerst entsprechend umrechnen."
            },
            {
              "q": "Welche Leistung des Druckers soll ich eintragen?",
              "a": "Den Mittelwert des gesamten Drucks. Gemessene Energie geteilt durch Zeit kann ihn abschätzen; Material, Heizung und Umgebung ändern den Verbrauch. 100–150 W ist keine allgemeine Norm."
            },
            {
              "q": "Was zählt als Verschleiß?",
              "a": "Ihre Schätzung von Verschleiß und Wartung je Betriebsstunde, keine gesetzliche Abschreibung. Leer oder 0 entfernt diesen Posten."
            },
            {
              "q": "Gilt der Aufschlag nur für das Filament?",
              "a": "Aufschlag gilt für Material, Strom und eingegebenen Verschleiß gemeinsam. Damit wird ein Preis gesetzt, ohne nachzuweisen, dass Arbeit, Steuern und alle weiteren Kosten gedeckt sind."
            },
            {
              "q": "Sind fehlgeschlagene Drucke enthalten?",
              "a": "Nur wenn Materialverbrauch und Dauer dieser Versuche mit eingegeben werden. Stützen, Spülen und Fehlversuche benötigen passende Verbrauchsdaten."
            }
          ],
          "disclaimer": "Schätzung eingegebener Kosten in einer Währung. Arbeit, Steuern, Leerlauf und nicht eingegebene Fehldrucke fehlen; ein Datenblatt garantiert keine mittlere Aufnahme."
        },
        "help": {},
        "sources": [
          "https://help.prusa3d.com/article/faq-frequently-asked-questions_1932"
        ],
        "normal": {
          "inputs": {
            "grams": 100,
            "spoolPrice": 2000,
            "spoolWeight": 1000,
            "hours": 2,
            "powerW": 100,
            "kwhPrice": 5,
            "wearPerHour": 10,
            "markupPct": 25
          },
          "expected": {
            "kind": "number",
            "value": 276.25
          },
          "rows": [
            {
              "index": 0,
              "label": "Filament",
              "expected": {
                "kind": "number",
                "value": 200
              }
            },
            {
              "index": 1,
              "label": "Strom",
              "expected": {
                "kind": "number",
                "value": 1
              }
            },
            {
              "index": 2,
              "label": "Verschleiß des Druckers",
              "expected": {
                "kind": "number",
                "value": 20
              }
            },
            {
              "index": 3,
              "label": "Aufschlag",
              "expected": {
                "kind": "number",
                "value": 55.25
              }
            },
            {
              "index": 4,
              "label": "Verbrauchte Energie",
              "expected": {
                "kind": "number",
                "value": 0.2
              }
            },
            {
              "index": 5,
              "label": "Preis je Gramm Filament",
              "expected": {
                "kind": "number",
                "value": 2
              }
            }
          ],
          "inactive": [],
          "rowCount": 6,
          "unit": "€",
          "independentDerivation": "Material100×2000/1000=200;energy100×2×5/1000=1;wear2×10=20;base221×1.25=276.25"
        },
        "boundary": {
          "inputs": {
            "grams": 1,
            "spoolPrice": 1.005,
            "spoolWeight": 3,
            "hours": 1,
            "powerW": 0,
            "kwhPrice": 0,
            "wearPerHour": 0,
            "markupPct": 0
          },
          "expected": {
            "kind": "number",
            "value": 0.34
          },
          "rows": [
            {
              "index": 0,
              "label": "Filament",
              "expected": {
                "kind": "number",
                "value": 0.34
              }
            },
            {
              "index": 1,
              "label": "Strom",
              "expected": {
                "kind": "number",
                "value": 0
              }
            },
            {
              "index": 3,
              "label": "Preis je Gramm Filament",
              "expected": {
                "kind": "number",
                "value": 0.34
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "unit": "€",
          "independentDerivation": "1×1.005/3=.335 exactmoney→.34 finalhalfExpand;nocostminimum"
        },
        "controls": [],
        "defaultExpected": {
          "kind": "number",
          "value": 157.29
        },
        "blankField": "grams",
        "domainField": "spoolWeight",
        "domainValue": 0,
        "counts": []
      },
      {
        "locale": "es",
        "path": "/es/hogar/coste-de-impresion-3d/",
        "h1": "Calculadora de coste de impresión 3D",
        "body": {
          "longDescription": "Suma material, electricidad y desgaste introducido, y aplica el recargo a toda la base de costes. El resultado principal incluye el recargo; con 0 % coincide con el coste base. Tú indicas material consumido y potencia media: los gastos reales no dependen solo del peso de la pieza terminada.",
          "howToUse": [
            "Usa el material total del laminador, incluidos soportes y residuos; introduce pieza y bobina en gramos.",
            "Indica precio de bobina y horas de impresión; masas y tiempo deben ser positivos, pero se permite precio 0.",
            "Escribe potencia media en vatios y tarifa por kWh. Una potencia máxima nominal no tiene que ser el consumo medio.",
            "Desgaste horario y recargo son opcionales; vacío significa 0. Usa una moneda en todos los importes."
          ],
          "howItWorks": "Material = gramos × precio de bobina / gramos de bobina. Energía = vatios × horas /1000 en kWh; coste eléctrico = energía × tarifa. Desgaste = horas × tarifa horaria. Base = material + electricidad + desgaste; total = base ×(1 + recargo/100). El recargo no es el margen de beneficio sobre el precio final. Las razones monetarias decimales se redondean a dos cifras solo al mostrarlas; el cálculo conserva las razones sin redondear.",
          "example": "85 g, bobina 1800 por 1000 g, 6,5 h, 120 W y tarifa 5,5: material 153, energía 0,78 kWh por 4,29, total 157,29 sin desgaste ni recargo. Un 25 % de recargo da 196,61, en la misma unidad monetaria y sin convertir divisas.",
          "faq": [
            {
              "q": "¿Por qué no se introduce directamente el precio por gramo?",
              "a": "Precio por gramo = precio de bobina / peso del material. No incluyas el embalaje; adapta cualquier otra forma de precio a estos datos."
            },
            {
              "q": "¿Qué potencia de impresora debo introducir?",
              "a": "La media del ciclo completo. La energía medida dividida entre tiempo puede estimarla; material, calentamiento y ambiente cambian el consumo. 100–150 W no es una norma universal."
            },
            {
              "q": "¿Qué cuenta como desgaste?",
              "a": "Tu estimación de desgaste y mantenimiento por hora, no una depreciación legal. Vacío o 0 elimina el componente."
            },
            {
              "q": "¿El margen se aplica solo al filamento?",
              "a": "El recargo se aplica a material, electricidad y desgaste introducido juntos. Fija un precio, pero no demuestra que cubra trabajo, impuestos ni todos los demás gastos."
            },
            {
              "q": "¿Se incluyen las impresiones fallidas?",
              "a": "Solo si incluyes material y tiempo de esos intentos. Soportes, purgas y fallos requieren sus datos de consumo."
            }
          ],
          "disclaimer": "Estimación de gastos introducidos en una moneda. Mano de obra, impuestos, inactividad e intentos fallidos no introducidos no se añaden automáticamente; una ficha no garantiza potencia media."
        },
        "help": {},
        "sources": [
          "https://help.prusa3d.com/article/faq-frequently-asked-questions_1932"
        ],
        "normal": {
          "inputs": {
            "grams": 100,
            "spoolPrice": 2000,
            "spoolWeight": 1000,
            "hours": 2,
            "powerW": 100,
            "kwhPrice": 5,
            "wearPerHour": 10,
            "markupPct": 25
          },
          "expected": {
            "kind": "number",
            "value": 276.25
          },
          "rows": [
            {
              "index": 0,
              "label": "Filamento",
              "expected": {
                "kind": "number",
                "value": 200
              }
            },
            {
              "index": 1,
              "label": "Electricidad",
              "expected": {
                "kind": "number",
                "value": 1
              }
            },
            {
              "index": 2,
              "label": "Desgaste de la impresora",
              "expected": {
                "kind": "number",
                "value": 20
              }
            },
            {
              "index": 3,
              "label": "Margen",
              "expected": {
                "kind": "number",
                "value": 55.25
              }
            },
            {
              "index": 4,
              "label": "Energía consumida",
              "expected": {
                "kind": "number",
                "value": 0.2
              }
            },
            {
              "index": 5,
              "label": "Precio del gramo de filamento",
              "expected": {
                "kind": "number",
                "value": 2
              }
            }
          ],
          "inactive": [],
          "rowCount": 6,
          "unit": "€",
          "independentDerivation": "Material100×2000/1000=200;energy100×2×5/1000=1;wear2×10=20;base221×1.25=276.25"
        },
        "boundary": {
          "inputs": {
            "grams": 1,
            "spoolPrice": 1.005,
            "spoolWeight": 3,
            "hours": 1,
            "powerW": 0,
            "kwhPrice": 0,
            "wearPerHour": 0,
            "markupPct": 0
          },
          "expected": {
            "kind": "number",
            "value": 0.34
          },
          "rows": [
            {
              "index": 0,
              "label": "Filamento",
              "expected": {
                "kind": "number",
                "value": 0.34
              }
            },
            {
              "index": 1,
              "label": "Electricidad",
              "expected": {
                "kind": "number",
                "value": 0
              }
            },
            {
              "index": 3,
              "label": "Precio del gramo de filamento",
              "expected": {
                "kind": "number",
                "value": 0.34
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "unit": "€",
          "independentDerivation": "1×1.005/3=.335 exactmoney→.34 finalhalfExpand;nocostminimum"
        },
        "controls": [],
        "defaultExpected": {
          "kind": "number",
          "value": 157.29
        },
        "blankField": "grams",
        "domainField": "spoolWeight",
        "domainValue": 0,
        "counts": []
      }
    ]
  },
  {
    "id": "stock-duration",
    "defaults": {
      "stock": 30,
      "perDay": 2,
      "reserveDays": 0
    },
    "fields": [
      "stock",
      "perDay",
      "reserveDays"
    ],
    "defaultInactive": [],
    "pages": [
      {
        "locale": "ru",
        "path": "/ru/household/stock-duration/",
        "h1": "Калькулятор запаса продукта",
        "body": {
          "longDescription": "Делит товарный запас на постоянный суточный расход: корм, крупу, топливо или расходники, а не акции. Порог в днях задаёт, при каком оставшемся сроке вы хотите сделать заказ. Если включить в него доставку и дополнительный буфер, расчёт покажет выбранный момент заказа, но не гарантирует срок поставки.",
          "howToUse": [
            "Введите имеющийся запас в удобных вам единицах.",
            "Укажите суточный расход в тех же единицах.",
            "При желании задайте страховой запас в днях.",
            "Нулевой запас допустим, суточный расход должен быть положительным. Пустой необязательный порог означает 0 дней; очень малый срок показывается без искусственного увеличения до 0,1 дня."
          ],
          "howItWorks": "Срок = запас / расход в сутки. При положительном пороге момент заказа = срок − порог; если разница отрицательна, выбранный порог уже нарушен. Нулевой запас означает 0 дней; отрицательные запас и порог недопустимы.",
          "example": "30 кг корма при расходе 2 кг в сутки хватит на 15 дней. При резерве 4 дня заказ нужен через 11 дней от текущего момента.",
          "faq": [
            {
              "q": "В каких единицах вводить запас?",
              "a": "В любых, лишь бы запас и расход были в одних и тех же. Килограммы, литры, штуки — калькулятор делит одно на другое и работает с отношением."
            },
            {
              "q": "Что такое страховой запас в днях?",
              "a": "Порог заказа — оставшийся запас в днях на момент заказа. Если он покрывает время доставки плюс желаемый остаток после неё, оба срока включают в одно число. Доставку отдельно калькулятор не прибавляет."
            },
            {
              "q": "Учитывается ли неравномерный расход?",
              "a": "Нет, расход считается постоянным. При сезонных скачках берите средний расход пикового периода, а не годовой."
            },
            {
              "q": "Речь о товарном запасе или об акциях?",
              "a": "О товарном: корм, крупа, топливо, расходники. Финансовые бумаги здесь ни при чём."
            }
          ],
          "disclaimer": "Постоянный расход в одинаковых единицах; прогноз доставки, сезонности, порчи и наличия у поставщика не выполняется."
        },
        "help": {},
        "sources": [],
        "normal": {
          "inputs": {
            "stock": 40,
            "perDay": 2.5,
            "reserveDays": 3
          },
          "expected": {
            "kind": "number",
            "value": 16
          },
          "rows": [
            {
              "index": 1,
              "label": "Заказать через",
              "expected": {
                "kind": "number",
                "value": 13
              }
            }
          ],
          "inactive": [],
          "rowCount": 2,
          "unit": "дней",
          "independentDerivation": "40/2.5=16days;16−3=13days before reserve threshold"
        },
        "boundary": {
          "inputs": {
            "stock": 0,
            "perDay": 2,
            "reserveDays": 0
          },
          "expected": {
            "kind": "number",
            "value": 0
          },
          "rows": [
            {
              "index": 0,
              "label": "Расход в сутки",
              "expected": {
                "kind": "number",
                "value": 2
              }
            }
          ],
          "inactive": [],
          "rowCount": 1,
          "unit": "дней",
          "independentDerivation": "0/2=0days;reserve0omitsreorderrow"
        },
        "controls": [],
        "defaultExpected": {
          "kind": "number",
          "value": 15
        },
        "blankField": "stock",
        "domainField": "stock",
        "domainValue": -1,
        "counts": []
      },
      {
        "locale": "en",
        "path": "/en/household/stock-duration-calculator/",
        "h1": "Stock duration calculator",
        "body": {
          "longDescription": "Divides supplies by a constant daily use: feed, grain, fuel or consumables, not shares. The threshold in days sets how much cover you want left when ordering. Include delivery time and an extra buffer if that is your plan; the result locates your chosen reorder point but does not guarantee delivery.",
          "howToUse": [
            "Enter the stock you have, in whatever unit suits you.",
            "Give the daily use in the same unit.",
            "Optionally set a safety buffer in days.",
            "Zero stock is allowed; daily use must be positive. A blank optional threshold means 0 days. Very small durations are shown without artificially raising them to 0.1 day."
          ],
          "howItWorks": "Duration = stock / daily use. With a positive threshold, reorder time = duration − threshold; a negative difference means that threshold is already breached. Zero stock means 0 days; negative stock and threshold are invalid.",
          "example": "30 kg of feed used at 2 kg a day lasts 15 days. A 4-day reorder threshold means ordering in 11 days from now.",
          "faq": [
            {
              "q": "What unit should the stock be in?",
              "a": "Any, as long as the stock and the daily use share it. Kilograms, litres, pieces — the calculator divides one by the other and works with the ratio."
            },
            {
              "q": "What is the safety buffer in days?",
              "a": "The threshold is cover remaining when you order. To cover delivery time plus a desired remainder after arrival, include both in that one number. Delivery time is not added separately."
            },
            {
              "q": "Is uneven consumption handled?",
              "a": "No, the rate is treated as constant. For seasonal peaks use the average rate of the peak period rather than the yearly one."
            },
            {
              "q": "Is this about supplies or about shares?",
              "a": "Supplies: feed, grain, fuel, consumables. Financial securities are unrelated."
            }
          ],
          "disclaimer": "Constant consumption in matching units. Delivery, seasonality, spoilage and supplier availability are not forecast."
        },
        "help": {},
        "sources": [],
        "normal": {
          "inputs": {
            "stock": 40,
            "perDay": 2.5,
            "reserveDays": 3
          },
          "expected": {
            "kind": "number",
            "value": 16
          },
          "rows": [
            {
              "index": 1,
              "label": "Reorder in",
              "expected": {
                "kind": "number",
                "value": 13
              }
            }
          ],
          "inactive": [],
          "rowCount": 2,
          "unit": "days",
          "independentDerivation": "40/2.5=16days;16−3=13days before reserve threshold"
        },
        "boundary": {
          "inputs": {
            "stock": 0,
            "perDay": 2,
            "reserveDays": 0
          },
          "expected": {
            "kind": "number",
            "value": 0
          },
          "rows": [
            {
              "index": 0,
              "label": "Daily use",
              "expected": {
                "kind": "number",
                "value": 2
              }
            }
          ],
          "inactive": [],
          "rowCount": 1,
          "unit": "days",
          "independentDerivation": "0/2=0days;reserve0omitsreorderrow"
        },
        "controls": [],
        "defaultExpected": {
          "kind": "number",
          "value": 15
        },
        "blankField": "stock",
        "domainField": "stock",
        "domainValue": -1,
        "counts": []
      },
      {
        "locale": "uk",
        "path": "/uk/pobut/zapas-produktu/",
        "h1": "Калькулятор запасу продукту",
        "body": {
          "longDescription": "Ділить товарний запас на постійну добову витрату: корм, крупу, пальне або витратні матеріали, не акції. Поріг у днях визначає бажаний залишок на момент замовлення. Доставку й додатковий буфер можна включити в цей поріг; результат не гарантує строку постачання.",
          "howToUse": [
            "Введіть поточний запас.",
            "Введіть витрату за добу.",
            "Задайте страховий запас у днях — зазвичай строк доставки плюс кілька днів.",
            "Нульовий запас допустимий, добова витрата має бути додатною. Порожній необов’язковий поріг означає 0 днів; малий строк не збільшується штучно до 0,1 дня."
          ],
          "howItWorks": "Строк = запас / витрата за добу. За додатного порога час замовлення = строк − поріг; від’ємна різниця означає, що обраний поріг уже порушений. Нульовий запас дає 0 днів; від’ємні запас і поріг недопустимі.",
          "example": "30 кг корму за витрати 2 кг на добу вистачить на 15 днів. Зі страховим запасом у 4 дні замовляти треба на одинадцятий день.",
          "faq": [
            {
              "q": "Який страховий запас закладати?",
              "a": "Поріг означає залишок у днях на момент замовлення. Щоб покрити доставку й бажаний залишок після неї, включіть обидва строки в одне число: доставка окремо не додається."
            },
            {
              "q": "Що робити з нерівномірною витратою?",
              "a": "Брати середню за кілька тижнів і збільшувати страховий запас. Для сезонних товарів середнє за рік дає хибну картину — рахувати треба за сезоном."
            },
            {
              "q": "Чи підходить це для складу?",
              "a": "Для окремої позиції за сталого споживання — так. Модель не враховує графік постачання, строк придатності чи взаємодію кількох запасів; це не повна система керування складом."
            },
            {
              "q": "Чому не замовляти впритул до нуля?",
              "a": "Поріг може дати час на доставку й затримки, якщо ви включили їх у число. Розмір буфера залежить від ситуації; модель не доводить, що запас завжди дешевший або гарантує постачання."
            }
          ],
          "disclaimer": "Постійна витрата в однакових одиницях. Строк доставки, сезонність, псування й наявність товару не прогнозуються."
        },
        "help": {},
        "sources": [],
        "normal": {
          "inputs": {
            "stock": 40,
            "perDay": 2.5,
            "reserveDays": 3
          },
          "expected": {
            "kind": "number",
            "value": 16
          },
          "rows": [
            {
              "index": 1,
              "label": "Замовити через",
              "expected": {
                "kind": "number",
                "value": 13
              }
            }
          ],
          "inactive": [],
          "rowCount": 2,
          "unit": "днів",
          "independentDerivation": "40/2.5=16days;16−3=13days before reserve threshold"
        },
        "boundary": {
          "inputs": {
            "stock": 0,
            "perDay": 2,
            "reserveDays": 0
          },
          "expected": {
            "kind": "number",
            "value": 0
          },
          "rows": [
            {
              "index": 0,
              "label": "Витрата на добу",
              "expected": {
                "kind": "number",
                "value": 2
              }
            }
          ],
          "inactive": [],
          "rowCount": 1,
          "unit": "днів",
          "independentDerivation": "0/2=0days;reserve0omitsreorderrow"
        },
        "controls": [],
        "defaultExpected": {
          "kind": "number",
          "value": 15
        },
        "blankField": "stock",
        "domainField": "stock",
        "domainValue": -1,
        "counts": []
      },
      {
        "locale": "de",
        "path": "/de/haushalt/vorratsreichweite-rechner/",
        "h1": "Rechner für die Reichweite eines Vorrats",
        "body": {
          "longDescription": "Teilt Vorräte durch gleichbleibenden Tagesverbrauch: Futter, Lebensmittel, Kraftstoff oder Verbrauchsmaterial, keine Aktien. Die Schwelle in Tagen beschreibt die gewünschte Restdeckung beim Bestellen. Lieferzeit und zusätzlichen Puffer können Sie darin zusammenfassen; eine Lieferzusage ergibt die Rechnung nicht.",
          "howToUse": [
            "Trage den vorhandenen Vorrat in der Einheit ein, die dir passt.",
            "Gib den Tagesverbrauch in derselben Einheit an.",
            "Setze bei Bedarf eine Sicherheitsreserve in Tagen.",
            "Vorrat 0 ist möglich, Tagesverbrauch muss positiv sein. Eine leere optionale Schwelle bedeutet 0 Tage. Sehr kurze Reichweiten werden nicht künstlich auf 0,1 Tag erhöht."
          ],
          "howItWorks": "Reichweite = Vorrat / Tagesverbrauch. Bei positiver Schwelle: Bestellzeit = Reichweite − Schwelle; ein negativer Unterschied bedeutet bereits unterschrittene Restdeckung. Vorrat 0 ergibt 0 Tage; negativer Vorrat oder Schwelle sind ungültig.",
          "example": "30 kg Futter bei einem Verbrauch von 2 kg am Tag reichen 15 Tage. Bei 4 Tagen Reserveschwelle ist die Bestellung in 11 Tagen fällig.",
          "faq": [
            {
              "q": "In welcher Einheit soll der Vorrat stehen?",
              "a": "In beliebiger, solange Vorrat und Tagesverbrauch dieselbe teilen. Kilogramm, Liter, Stück — der Rechner teilt das eine durch das andere und arbeitet mit dem Verhältnis."
            },
            {
              "q": "Was ist die Sicherheitsreserve in Tagen?",
              "a": "Die Schwelle ist Restdeckung bei der Bestellung. Soll sie Lieferzeit und gewünschten Rest bei Ankunft abdecken, beide Zeiträume in diese eine Zahl aufnehmen. Lieferzeit wird nicht separat addiert."
            },
            {
              "q": "Wird ungleichmäßiger Verbrauch berücksichtigt?",
              "a": "Nein, der Verbrauch gilt als gleichbleibend. Für saisonale Spitzen nimm den mittleren Verbrauch der Spitzenzeit und nicht den des Jahres."
            },
            {
              "q": "Geht es um Vorräte oder um Aktien?",
              "a": "Um Vorräte: Futter, Getreide, Kraftstoff, Verbrauchsmaterial. Mit Wertpapieren hat das nichts zu tun."
            }
          ],
          "disclaimer": "Gleichbleibender Verbrauch in gleichen Einheiten. Lieferzeit, Saisonalität, Verderb und Verfügbarkeit werden nicht vorhergesagt."
        },
        "help": {},
        "sources": [],
        "normal": {
          "inputs": {
            "stock": 40,
            "perDay": 2.5,
            "reserveDays": 3
          },
          "expected": {
            "kind": "number",
            "value": 16
          },
          "rows": [
            {
              "index": 1,
              "label": "Nachbestellen in",
              "expected": {
                "kind": "number",
                "value": 13
              }
            }
          ],
          "inactive": [],
          "rowCount": 2,
          "unit": "Tage",
          "independentDerivation": "40/2.5=16days;16−3=13days before reserve threshold"
        },
        "boundary": {
          "inputs": {
            "stock": 0,
            "perDay": 2,
            "reserveDays": 0
          },
          "expected": {
            "kind": "number",
            "value": 0
          },
          "rows": [
            {
              "index": 0,
              "label": "Tagesverbrauch",
              "expected": {
                "kind": "number",
                "value": 2
              }
            }
          ],
          "inactive": [],
          "rowCount": 1,
          "unit": "Tage",
          "independentDerivation": "0/2=0days;reserve0omitsreorderrow"
        },
        "controls": [],
        "defaultExpected": {
          "kind": "number",
          "value": 15
        },
        "blankField": "stock",
        "domainField": "stock",
        "domainValue": -1,
        "counts": []
      },
      {
        "locale": "es",
        "path": "/es/hogar/duracion-de-existencias/",
        "h1": "Calculadora de duración de existencias",
        "body": {
          "longDescription": "Divide suministros entre un consumo diario constante: pienso, alimentos, combustible o consumibles, no acciones. El umbral en días indica cuánto quieres que quede al hacer el pedido. Puedes incluir plazo de entrega y reserva adicional en él; el cálculo no garantiza la llegada.",
          "howToUse": [
            "Introduce las existencias de que dispones, en la unidad que te convenga.",
            "Indica el consumo diario en esa misma unidad.",
            "Si quieres, fija una reserva de seguridad en días.",
            "Se permite existencias 0; el consumo diario debe ser positivo. Un umbral opcional vacío significa 0 días. Una duración pequeña no se eleva artificialmente a 0,1 día."
          ],
          "howItWorks": "Duración = existencias / consumo diario. Con umbral positivo: momento de pedido = duración − umbral; una diferencia negativa significa que el umbral ya se ha incumplido. Existencias 0 dan 0 días; existencias o umbral negativos no son válidos.",
          "example": "30 kg de pienso con un consumo de 2 kg al día duran 15 días. Con una reserva de 4 días, el pedido corresponde dentro de 11 días.",
          "faq": [
            {
              "q": "¿En qué unidad van las existencias?",
              "a": "En cualquiera, mientras las existencias y el consumo diario la compartan. Kilogramos, litros, unidades: la calculadora divide una entre otro y trabaja con la razón."
            },
            {
              "q": "¿Qué es la reserva de seguridad en días?",
              "a": "El umbral es lo que queda cuando pides. Para cubrir plazo de entrega y resto deseado a la llegada, incluye ambos en ese único número. La entrega no se añade aparte."
            },
            {
              "q": "¿Se admite un consumo irregular?",
              "a": "No, el ritmo se trata como constante. Para picos de temporada usa el consumo medio del periodo punta y no el anual."
            },
            {
              "q": "¿Habla de suministros o de acciones?",
              "a": "De suministros: pienso, grano, combustible, consumibles. Los valores financieros no tienen nada que ver."
            }
          ],
          "disclaimer": "Consumo constante en unidades iguales. No predice entregas, estacionalidad, deterioro ni disponibilidad del proveedor."
        },
        "help": {},
        "sources": [],
        "normal": {
          "inputs": {
            "stock": 40,
            "perDay": 2.5,
            "reserveDays": 3
          },
          "expected": {
            "kind": "number",
            "value": 16
          },
          "rows": [
            {
              "index": 1,
              "label": "Pedir dentro de",
              "expected": {
                "kind": "number",
                "value": 13
              }
            }
          ],
          "inactive": [],
          "rowCount": 2,
          "unit": "días",
          "independentDerivation": "40/2.5=16days;16−3=13days before reserve threshold"
        },
        "boundary": {
          "inputs": {
            "stock": 0,
            "perDay": 2,
            "reserveDays": 0
          },
          "expected": {
            "kind": "number",
            "value": 0
          },
          "rows": [
            {
              "index": 0,
              "label": "Consumo diario",
              "expected": {
                "kind": "number",
                "value": 2
              }
            }
          ],
          "inactive": [],
          "rowCount": 1,
          "unit": "días",
          "independentDerivation": "0/2=0days;reserve0omitsreorderrow"
        },
        "controls": [],
        "defaultExpected": {
          "kind": "number",
          "value": 15
        },
        "blankField": "stock",
        "domainField": "stock",
        "domainValue": -1,
        "counts": []
      }
    ]
  },
  {
    "id": "subscriptions-cost",
    "defaults": {
      "items": "streaming 299 1\ncloud 1990 12\nmusic 169 1"
    },
    "fields": [
      "items"
    ],
    "defaultInactive": [],
    "pages": [
      {
        "locale": "ru",
        "path": "/ru/household/stoimost-podpisok/",
        "h1": "Калькулятор стоимости подписок",
        "body": {
          "longDescription": "Приводит подписки с разными периодами оплаты к среднему расходу за месяц. В каждой строке последние два числовых поля — цена и месяцы, всё перед ними — название. Итог за год равен 12 месячным средним, а не календарю будущих списаний: пробные периоды, отмены и изменения тарифа не прогнозируются.",
          "howToUse": [
            "Введите одну строку на подписку: название цена месяцы, например «облачное хранилище 1990 12».",
            "Цена и период должны быть отдельными числами без пробелов внутри: 1990, не 1 990; дробная часть может использовать точку или запятую.",
            "Месячный период —1, квартальный —3, годовой —12. Положительный дробный период, например 0,5, допустим и показывается как дробный.",
            "Все цены задавайте в одной валюте. Нулевая цена разрешена; период должен быть положительным. Не более 1000 строк за расчёт."
          ],
          "howItWorks": "Месячный вклад строки = цена / месяцы. Вклады складываются без предварительного округления до денежных знаков; годовое среднее = месячный итог ×12. Таблица сохраняет введённый дробный период, а не округляет его до целого. Десятичные денежные отношения округляются до двух знаков только при выводе; расчёт сохраняет неокруглённые отношения.",
          "example": "Строки «стриминг 299 1», «облако 1990 12», «музыка 169 1» дают 633,83 в месяц и 7606,00 в год. «половина месяца 30 0,5» отдельно даёт 60,00 в месяц, не 30,00.",
          "faq": [
            {
              "q": "Почему период числом, а не «ежемесячно» или «ежегодно»?",
              "a": "Число определяет длительность, на которую делится цена: 1 месяц, 3 месяца, 12 месяцев. Слова «год» или «месяц» не являются числовыми полями этой записи."
            },
            {
              "q": "Как ввести квартальный тариф?",
              "a": "Как 3 месяца. Подходит любой период — двухлетний это 24."
            },
            {
              "q": "Почему годовое число не равно двенадцати округлённым месяцам?",
              "a": "Годовое среднее умножается до округления месячного показа. Например, 1 за 3 месяца — около 0,33 в месяц и 4,00 в год, тогда как 12×0,33 дают 3,96. Это среднее, не сумма реальных списаний по датам."
            },
            {
              "q": "Учитывается ли пробный период?",
              "a": "Не напрямую. Вводите цену, которую с вас действительно спишут; нулевая цена принимается и просто ничего не добавляет."
            },
            {
              "q": "Всегда ли самый дешёвый месячный тариф выгоднее?",
              "a": "В расчёте на месяц — да, именно это сравнение и показывает. А был ли выгоднее годовой тариф, которым вы перестали пользоваться через два месяца, это уже другой вопрос."
            }
          ],
          "disclaimer": "Средняя стоимость в одной валюте, не график платежей. Периоды и цены задаются вручную; бесплатная строка не задаёт дату окончания пробы."
        },
        "help": {},
        "sources": [],
        "normal": {
          "inputs": {
            "items": "Annual plan 1200 12\nQuarterly plan 300 3\nMonthly plan 50 1"
          },
          "expected": {
            "kind": "number",
            "value": 250
          },
          "rows": [
            {
              "index": 0,
              "label": "В год",
              "expected": {
                "kind": "number",
                "value": 3000
              }
            },
            {
              "index": 1,
              "label": "Подписок",
              "expected": {
                "kind": "number",
                "value": 3
              }
            },
            {
              "index": 3,
              "label": "Её вклад в месяц",
              "expected": {
                "kind": "number",
                "value": 100
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "unit": "₽",
          "independentDerivation": "1200/12+300/3+50/1=250 permonth;12×250=3000 annualized same unchanged input expenses, first equal largest retained"
        },
        "boundary": {
          "inputs": {
            "items": "A 1.005 3"
          },
          "expected": {
            "kind": "number",
            "value": 0.34
          },
          "rows": [
            {
              "index": 0,
              "label": "В год",
              "expected": {
                "kind": "number",
                "value": 4.02
              }
            },
            {
              "index": 1,
              "label": "Подписок",
              "expected": {
                "kind": "number",
                "value": 1
              }
            },
            {
              "index": 3,
              "label": "Её вклад в месяц",
              "expected": {
                "kind": "number",
                "value": 0.34
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "unit": "₽",
          "table": [
            {
              "row": 0,
              "column": 3,
              "value": 0.34
            }
          ],
          "independentDerivation": "1.005/3=.335→.34 atfinaldisplay;annual.335×12=4.02"
        },
        "controls": [
          {
            "inputs": {
              "items": "A 1.005 3\nB 1.005 3\nC 1.005 3"
            },
            "expected": {
              "kind": "number",
              "value": 1.01
            },
            "rows": [
              {
                "index": 0,
                "label": "В год",
                "expected": {
                  "kind": "number",
                  "value": 12.06
                }
              },
              {
                "index": 1,
                "label": "Подписок",
                "expected": {
                  "kind": "number",
                  "value": 3
                }
              }
            ],
            "inactive": [],
            "rowCount": 4,
            "unit": "₽",
            "table": [
              {
                "row": 0,
                "column": 3,
                "value": 0.34
              },
              {
                "row": 1,
                "column": 3,
                "value": 0.34
              },
              {
                "row": 2,
                "column": 3,
                "value": 0.34
              }
            ],
            "independentDerivation": "3×.335=1.005→1.01;12×1.005=12.06;sumunroundedfractions,not3display.34"
          }
        ],
        "defaultExpected": {
          "kind": "number",
          "value": 633.83
        },
        "blankField": "items",
        "domainField": "items",
        "domainValue": "Broken row",
        "counts": []
      },
      {
        "locale": "en",
        "path": "/en/household/subscriptions-cost/",
        "h1": "Subscriptions cost calculator",
        "body": {
          "longDescription": "Converts subscriptions with different billing periods to an average monthly expense. The last two numeric fields on each line are price and months; everything before them is the name. The annual figure is 12 monthly averages, not a future debit schedule: trials, cancellations and tariff changes are not predicted.",
          "howToUse": [
            "Enter one line per subscription: name price months, for example “cloud storage 1990 12”.",
            "Keep price and period as separate numbers without internal spaces: 1990, not 1 990. A decimal point or comma is accepted.",
            "Monthly is 1, quarterly 3, annual 12. A positive fraction such as 0.5 is allowed and stays fractional in the table.",
            "Use one currency for every price. Zero price is allowed; the period must be positive. At most 1000 lines per calculation."
          ],
          "howItWorks": "Monthly contribution = price / months. Contributions are added before money-display rounding; annual average = monthly total ×12. The table retains a fractional period rather than rounding it to a whole month. Decimal monetary ratios are rounded to two places only for display; calculations retain the unrounded ratios.",
          "example": "“streaming 299 1”, “cloud 1990 12” and “music 169 1” give 633.83 per month and 7606.00 per year. “half month 30 0.5” alone gives 60.00 per month, not 30.00.",
          "faq": [
            {
              "q": "Why is the period a number and not «monthly» or «yearly»?",
              "a": "The number defines how long the price covers: 1 month, 3 months or 12 months. Words such as “year” and “monthly” are not numeric fields in this input format."
            },
            {
              "q": "How do I enter a quarterly plan?",
              "a": "As 3 months. Any period works — a two-year plan is 24."
            },
            {
              "q": "Why is the yearly figure not twelve times the rounded month?",
              "a": "The annual average is multiplied before rounding the displayed month. For example, 1 for 3 months gives about 0.33 monthly and 4.00 yearly, whereas 12×0.33 gives 3.96. This is an average, not dated debits."
            },
            {
              "q": "Does it account for a free trial?",
              "a": "Not directly. Enter the price you will actually be charged; a trial at zero is accepted and simply contributes nothing."
            },
            {
              "q": "Is the cheapest monthly plan always the cheapest?",
              "a": "Per month, yes — that is exactly what this comparison shows. Whether a yearly plan you stop using after two months was cheaper is a different question."
            }
          ],
          "disclaimer": "Average cost in one currency, not a payment schedule. Prices and periods are manual; a free line does not set the end date of a trial."
        },
        "help": {},
        "sources": [],
        "normal": {
          "inputs": {
            "items": "Annual plan 1200 12\nQuarterly plan 300 3\nMonthly plan 50 1"
          },
          "expected": {
            "kind": "number",
            "value": 250
          },
          "rows": [
            {
              "index": 0,
              "label": "Per year",
              "expected": {
                "kind": "number",
                "value": 3000
              }
            },
            {
              "index": 1,
              "label": "Subscriptions",
              "expected": {
                "kind": "number",
                "value": 3
              }
            },
            {
              "index": 3,
              "label": "Its share per month",
              "expected": {
                "kind": "number",
                "value": 100
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "unit": "$",
          "independentDerivation": "1200/12+300/3+50/1=250 permonth;12×250=3000 annualized same unchanged input expenses, first equal largest retained"
        },
        "boundary": {
          "inputs": {
            "items": "A 1.005 3"
          },
          "expected": {
            "kind": "number",
            "value": 0.34
          },
          "rows": [
            {
              "index": 0,
              "label": "Per year",
              "expected": {
                "kind": "number",
                "value": 4.02
              }
            },
            {
              "index": 1,
              "label": "Subscriptions",
              "expected": {
                "kind": "number",
                "value": 1
              }
            },
            {
              "index": 3,
              "label": "Its share per month",
              "expected": {
                "kind": "number",
                "value": 0.34
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "unit": "$",
          "table": [
            {
              "row": 0,
              "column": 3,
              "value": 0.34
            }
          ],
          "independentDerivation": "1.005/3=.335→.34 atfinaldisplay;annual.335×12=4.02"
        },
        "controls": [
          {
            "inputs": {
              "items": "A 1.005 3\nB 1.005 3\nC 1.005 3"
            },
            "expected": {
              "kind": "number",
              "value": 1.01
            },
            "rows": [
              {
                "index": 0,
                "label": "Per year",
                "expected": {
                  "kind": "number",
                  "value": 12.06
                }
              },
              {
                "index": 1,
                "label": "Subscriptions",
                "expected": {
                  "kind": "number",
                  "value": 3
                }
              }
            ],
            "inactive": [],
            "rowCount": 4,
            "unit": "$",
            "table": [
              {
                "row": 0,
                "column": 3,
                "value": 0.34
              },
              {
                "row": 1,
                "column": 3,
                "value": 0.34
              },
              {
                "row": 2,
                "column": 3,
                "value": 0.34
              }
            ],
            "independentDerivation": "3×.335=1.005→1.01;12×1.005=12.06;sumunroundedfractions,not3display.34"
          }
        ],
        "defaultExpected": {
          "kind": "number",
          "value": 633.83
        },
        "blankField": "items",
        "domainField": "items",
        "domainValue": "Broken row",
        "counts": []
      },
      {
        "locale": "uk",
        "path": "/uk/pobut/vartist-pidpysok/",
        "h1": "Калькулятор вартості підписок",
        "body": {
          "longDescription": "Зводить підписки з різними періодами оплати до середніх витрат на місяць. Останні два числові поля рядка — ціна й місяці, усе перед ними — назва. Річне число дорівнює 12 місячним середнім, а не календарю списань; пробні періоди, скасування й зміни тарифів не прогнозуються.",
          "howToUse": [
            "Введіть рядок на підписку: назва ціна місяці, наприклад «хмарне сховище 1990 12».",
            "Ціна й період — окремі числа без внутрішніх пробілів: 1990, не 1 990. Десятковий знак може бути крапкою або комою.",
            "Місячний період —1, квартальний —3, річний —12. Додатний дробовий період 0,5 допустимий і лишається дробовим у таблиці.",
            "Усі ціни задайте в одній валюті. Нульова ціна допустима, період має бути додатним. Не більше 1000 рядків за розрахунок."
          ],
          "howItWorks": "Місячний внесок = ціна / місяці. Внески додаються до грошового округлення для показу; річне середнє = місячний підсумок ×12. Таблиця зберігає дробовий період, а не округляє його до цілого місяця. Десяткові грошові відношення округлюються до двох знаків лише для виведення; розрахунок зберігає неокруглені відношення.",
          "example": "«стримінг 299 1», «хмара 1990 12» і «музика 169 1» дають 633,83 на місяць і 7606,00 на рік. Окремо «пів місяця 30 0,5» дає 60,00 на місяць, не 30,00.",
          "faq": [
            {
              "q": "Чому період числом, а не «щомісяця» чи «щороку»?",
              "a": "Число задає строк, який покриває ціна: 1 місяць, 3 або 12 місяців. Слова «рік» чи «щомісяця» не є числовими полями цього формату."
            },
            {
              "q": "Як ввести квартальний тариф?",
              "a": "Як 3 місяці. Підходить будь-який період — дворічний це 24."
            },
            {
              "q": "Чому річне число не дорівнює дванадцяти округленим місяцям?",
              "a": "Річне середнє множиться до округлення місячного показу. 1 за 3 місяці дає приблизно 0,33 на місяць і 4,00 на рік, тоді як 12×0,33 —3,96. Це середнє, не списання за датами."
            },
            {
              "q": "Чи враховується безкоштовний період?",
              "a": "Не напряму. Вводьте ціну, яку з вас справді знімуть; нульова ціна приймається і просто нічого не додає."
            },
            {
              "q": "Чи завжди найдешевший місячний тариф найвигідніший?",
              "a": "На місяць — так, саме це і показує порівняння. А чи був вигіднішим річний тариф, яким ви перестали користуватися через два місяці, це вже інше питання."
            }
          ],
          "disclaimer": "Середня вартість в одній валюті, не графік платежів. Ціни й періоди вводяться вручну; безкоштовний рядок не задає дату завершення проби."
        },
        "help": {},
        "sources": [],
        "normal": {
          "inputs": {
            "items": "Annual plan 1200 12\nQuarterly plan 300 3\nMonthly plan 50 1"
          },
          "expected": {
            "kind": "number",
            "value": 250
          },
          "rows": [
            {
              "index": 0,
              "label": "На рік",
              "expected": {
                "kind": "number",
                "value": 3000
              }
            },
            {
              "index": 1,
              "label": "Підписок",
              "expected": {
                "kind": "number",
                "value": 3
              }
            },
            {
              "index": 3,
              "label": "Її внесок на місяць",
              "expected": {
                "kind": "number",
                "value": 100
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "unit": "₴",
          "independentDerivation": "1200/12+300/3+50/1=250 permonth;12×250=3000 annualized same unchanged input expenses, first equal largest retained"
        },
        "boundary": {
          "inputs": {
            "items": "A 1.005 3"
          },
          "expected": {
            "kind": "number",
            "value": 0.34
          },
          "rows": [
            {
              "index": 0,
              "label": "На рік",
              "expected": {
                "kind": "number",
                "value": 4.02
              }
            },
            {
              "index": 1,
              "label": "Підписок",
              "expected": {
                "kind": "number",
                "value": 1
              }
            },
            {
              "index": 3,
              "label": "Її внесок на місяць",
              "expected": {
                "kind": "number",
                "value": 0.34
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "unit": "₴",
          "table": [
            {
              "row": 0,
              "column": 3,
              "value": 0.34
            }
          ],
          "independentDerivation": "1.005/3=.335→.34 atfinaldisplay;annual.335×12=4.02"
        },
        "controls": [
          {
            "inputs": {
              "items": "A 1.005 3\nB 1.005 3\nC 1.005 3"
            },
            "expected": {
              "kind": "number",
              "value": 1.01
            },
            "rows": [
              {
                "index": 0,
                "label": "На рік",
                "expected": {
                  "kind": "number",
                  "value": 12.06
                }
              },
              {
                "index": 1,
                "label": "Підписок",
                "expected": {
                  "kind": "number",
                  "value": 3
                }
              }
            ],
            "inactive": [],
            "rowCount": 4,
            "unit": "₴",
            "table": [
              {
                "row": 0,
                "column": 3,
                "value": 0.34
              },
              {
                "row": 1,
                "column": 3,
                "value": 0.34
              },
              {
                "row": 2,
                "column": 3,
                "value": 0.34
              }
            ],
            "independentDerivation": "3×.335=1.005→1.01;12×1.005=12.06;sumunroundedfractions,not3display.34"
          }
        ],
        "defaultExpected": {
          "kind": "number",
          "value": 633.83
        },
        "blankField": "items",
        "domainField": "items",
        "domainValue": "Broken row",
        "counts": []
      },
      {
        "locale": "de",
        "path": "/de/haushalt/abokosten-rechner/",
        "h1": "Rechner für Abokosten",
        "body": {
          "longDescription": "Rechnet Abos mit verschiedenen Zahlungsperioden auf durchschnittliche Monatskosten um. Die letzten zwei Zahlenfelder jeder Zeile sind Preis und Monate; davor steht der Name. Die Jahreszahl sind 12 Monatsmittel, kein zukünftiger Abbuchungsplan: Probezeiten, Kündigungen und Tarifänderungen werden nicht vorhergesagt.",
          "howToUse": [
            "Eine Zeile je Abo: Name Preis Monate, zum Beispiel „Cloudspeicher 1990 12“.",
            "Preis und Zeitraum als getrennte Zahlen ohne innere Leerzeichen schreiben: 1990, nicht 1 990. Dezimalpunkt oder Komma sind möglich.",
            "Monatlich bedeutet 1, vierteljährlich 3, jährlich 12. Ein positiver Bruchteil wie 0,5 ist zulässig und bleibt in der Tabelle erhalten.",
            "Alle Preise in einer Währung angeben. Preis 0 ist zulässig, Zeitraum muss positiv sein. Höchstens 1000 Zeilen pro Rechnung."
          ],
          "howItWorks": "Monatsbeitrag = Preis / Monate. Beiträge werden vor der Geldanzeigerundung addiert; Jahresmittel = Monatssumme ×12. Die Tabelle bewahrt Teilmonate, statt sie auf ganze Monate zu runden. Dezimale Geldverhältnisse werden erst zur Anzeige auf zwei Stellen gerundet; die Rechnung behält ungerundete Verhältnisse.",
          "example": "„Streaming 299 1“, „Cloud 1990 12“ und „Musik 169 1“ ergeben 633,83 im Monat und 7606,00 im Jahr. „Halber Monat 30 0,5“ allein ergibt 60,00 im Monat, nicht 30,00; alle Beträge sind in derselben gewählten Geldeinheit.",
          "faq": [
            {
              "q": "Warum ist der Zeitraum eine Zahl und nicht „monatlich“ oder „jährlich“?",
              "a": "Die Zahl beschreibt die abgedeckte Dauer: 1 Monat, 3 Monate oder 12 Monate. Wörter wie „Jahr“ oder „monatlich“ sind keine Zahlenfelder dieses Eingabeformats."
            },
            {
              "q": "Wie trage ich einen Vierteljahrestarif ein?",
              "a": "Als 3 Monate. Jeder Zeitraum geht — ein Zweijahrestarif sind 24."
            },
            {
              "q": "Warum ist die Jahreszahl nicht das Zwölffache des gerundeten Monats?",
              "a": "Das Jahresmittel wird vor Rundung der Monatsanzeige multipliziert. 1 für 3 Monate ergibt etwa 0,33 monatlich und 4,00 jährlich, während 12×0,33 nur 3,96 ergibt. Ein Mittelwert, keine datierten Abbuchungen."
            },
            {
              "q": "Wird eine kostenlose Probezeit berücksichtigt?",
              "a": "Nicht unmittelbar. Trage den Preis ein, der dir tatsächlich berechnet wird; eine Probezeit mit null wird angenommen und steuert schlicht nichts bei."
            },
            {
              "q": "Ist der billigste Monatstarif immer der billigste?",
              "a": "Je Monat ja — genau das zeigt dieser Vergleich. Ob ein Jahrestarif, den du nach zwei Monaten nicht mehr nutzt, billiger war, ist eine andere Frage."
            }
          ],
          "disclaimer": "Durchschnittskosten in einer Währung, kein Zahlungsplan. Preise und Perioden sind manuell; eine kostenlose Zeile legt kein Probezeitende fest."
        },
        "help": {},
        "sources": [],
        "normal": {
          "inputs": {
            "items": "Annual plan 1200 12\nQuarterly plan 300 3\nMonthly plan 50 1"
          },
          "expected": {
            "kind": "number",
            "value": 250
          },
          "rows": [
            {
              "index": 0,
              "label": "Im Jahr",
              "expected": {
                "kind": "number",
                "value": 3000
              }
            },
            {
              "index": 1,
              "label": "Abonnements",
              "expected": {
                "kind": "number",
                "value": 3
              }
            },
            {
              "index": 3,
              "label": "Sein Anteil im Monat",
              "expected": {
                "kind": "number",
                "value": 100
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "unit": "€",
          "independentDerivation": "1200/12+300/3+50/1=250 permonth;12×250=3000 annualized same unchanged input expenses, first equal largest retained"
        },
        "boundary": {
          "inputs": {
            "items": "A 1.005 3"
          },
          "expected": {
            "kind": "number",
            "value": 0.34
          },
          "rows": [
            {
              "index": 0,
              "label": "Im Jahr",
              "expected": {
                "kind": "number",
                "value": 4.02
              }
            },
            {
              "index": 1,
              "label": "Abonnements",
              "expected": {
                "kind": "number",
                "value": 1
              }
            },
            {
              "index": 3,
              "label": "Sein Anteil im Monat",
              "expected": {
                "kind": "number",
                "value": 0.34
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "unit": "€",
          "table": [
            {
              "row": 0,
              "column": 3,
              "value": 0.34
            }
          ],
          "independentDerivation": "1.005/3=.335→.34 atfinaldisplay;annual.335×12=4.02"
        },
        "controls": [
          {
            "inputs": {
              "items": "A 1.005 3\nB 1.005 3\nC 1.005 3"
            },
            "expected": {
              "kind": "number",
              "value": 1.01
            },
            "rows": [
              {
                "index": 0,
                "label": "Im Jahr",
                "expected": {
                  "kind": "number",
                  "value": 12.06
                }
              },
              {
                "index": 1,
                "label": "Abonnements",
                "expected": {
                  "kind": "number",
                  "value": 3
                }
              }
            ],
            "inactive": [],
            "rowCount": 4,
            "unit": "€",
            "table": [
              {
                "row": 0,
                "column": 3,
                "value": 0.34
              },
              {
                "row": 1,
                "column": 3,
                "value": 0.34
              },
              {
                "row": 2,
                "column": 3,
                "value": 0.34
              }
            ],
            "independentDerivation": "3×.335=1.005→1.01;12×1.005=12.06;sumunroundedfractions,not3display.34"
          }
        ],
        "defaultExpected": {
          "kind": "number",
          "value": 633.83
        },
        "blankField": "items",
        "domainField": "items",
        "domainValue": "Broken row",
        "counts": []
      },
      {
        "locale": "es",
        "path": "/es/hogar/coste-de-suscripciones/",
        "h1": "Calculadora de coste de suscripciones",
        "body": {
          "longDescription": "Convierte suscripciones con distintos periodos de pago en un gasto mensual medio. Los dos últimos campos numéricos son precio y meses; lo anterior es el nombre. La cifra anual son 12 medias mensuales, no un calendario futuro de cargos: no predice pruebas, cancelaciones ni cambios de tarifa.",
          "howToUse": [
            "Introduce una línea por suscripción: nombre precio meses, por ejemplo «nube 1990 12».",
            "Precio y periodo son números separados, sin espacios internos: 1990, no 1 990. Se admite punto o coma decimal.",
            "Mensual es 1, trimestral 3 y anual 12. Se permite una fracción positiva como 0,5, conservada en la tabla.",
            "Usa una moneda en todos los precios. Se permite precio 0, pero el periodo debe ser positivo. Máximo 1000 líneas por cálculo."
          ],
          "howItWorks": "Aporte mensual = precio / meses. Los aportes se suman antes del redondeo monetario para mostrar; media anual = total mensual ×12. La tabla conserva periodos fraccionarios en lugar de redondearlos a meses enteros. Las razones monetarias decimales se redondean a dos cifras solo al mostrarlas; el cálculo conserva las razones sin redondear.",
          "example": "«streaming 299 1», «nube 1990 12» y «música 169 1» dan 633,83 al mes y 7606,00 al año. «medio mes 30 0,5» solo da 60,00 al mes, no 30,00; todo en la misma unidad monetaria elegida.",
          "faq": [
            {
              "q": "¿Por qué el periodo es un número y no «mensual» o «anual»?",
              "a": "El número define la duración cubierta por el precio: 1 mes, 3 meses o 12 meses. Palabras como «año» o «mensual» no son campos numéricos de este formato."
            },
            {
              "q": "¿Cómo introduzco un plan trimestral?",
              "a": "Como 3 meses. Vale cualquier periodo: un plan de dos años son 24."
            },
            {
              "q": "¿Por qué la cifra anual no es doce veces el mes redondeado?",
              "a": "La media anual se multiplica antes de redondear el mes mostrado. 1 por 3 meses da unos 0,33 mensuales y 4,00 anuales, mientras 12×0,33 da 3,96. Es una media, no cargos por fechas."
            },
            {
              "q": "¿Tiene en cuenta un periodo de prueba gratuito?",
              "a": "No directamente. Introduce el precio que se te va a cobrar de verdad; una prueba a cero se admite y simplemente no aporta nada."
            },
            {
              "q": "¿El plan mensual más barato es siempre el más barato?",
              "a": "Al mes sí, y eso es exactamente lo que muestra esta comparación. Si un plan anual que dejas de usar a los dos meses salía más barato es otra cuestión."
            }
          ],
          "disclaimer": "Coste medio en una moneda, no calendario de pagos. Precios y periodos son manuales; una línea gratuita no fija el fin de una prueba."
        },
        "help": {},
        "sources": [],
        "normal": {
          "inputs": {
            "items": "Annual plan 1200 12\nQuarterly plan 300 3\nMonthly plan 50 1"
          },
          "expected": {
            "kind": "number",
            "value": 250
          },
          "rows": [
            {
              "index": 0,
              "label": "Al año",
              "expected": {
                "kind": "number",
                "value": 3000
              }
            },
            {
              "index": 1,
              "label": "Suscripciones",
              "expected": {
                "kind": "number",
                "value": 3
              }
            },
            {
              "index": 3,
              "label": "Su aportación mensual",
              "expected": {
                "kind": "number",
                "value": 100
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "unit": "€",
          "independentDerivation": "1200/12+300/3+50/1=250 permonth;12×250=3000 annualized same unchanged input expenses, first equal largest retained"
        },
        "boundary": {
          "inputs": {
            "items": "A 1.005 3"
          },
          "expected": {
            "kind": "number",
            "value": 0.34
          },
          "rows": [
            {
              "index": 0,
              "label": "Al año",
              "expected": {
                "kind": "number",
                "value": 4.02
              }
            },
            {
              "index": 1,
              "label": "Suscripciones",
              "expected": {
                "kind": "number",
                "value": 1
              }
            },
            {
              "index": 3,
              "label": "Su aportación mensual",
              "expected": {
                "kind": "number",
                "value": 0.34
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "unit": "€",
          "table": [
            {
              "row": 0,
              "column": 3,
              "value": 0.34
            }
          ],
          "independentDerivation": "1.005/3=.335→.34 atfinaldisplay;annual.335×12=4.02"
        },
        "controls": [
          {
            "inputs": {
              "items": "A 1.005 3\nB 1.005 3\nC 1.005 3"
            },
            "expected": {
              "kind": "number",
              "value": 1.01
            },
            "rows": [
              {
                "index": 0,
                "label": "Al año",
                "expected": {
                  "kind": "number",
                  "value": 12.06
                }
              },
              {
                "index": 1,
                "label": "Suscripciones",
                "expected": {
                  "kind": "number",
                  "value": 3
                }
              }
            ],
            "inactive": [],
            "rowCount": 4,
            "unit": "€",
            "table": [
              {
                "row": 0,
                "column": 3,
                "value": 0.34
              },
              {
                "row": 1,
                "column": 3,
                "value": 0.34
              },
              {
                "row": 2,
                "column": 3,
                "value": 0.34
              }
            ],
            "independentDerivation": "3×.335=1.005→1.01;12×1.005=12.06;sumunroundedfractions,not3display.34"
          }
        ],
        "defaultExpected": {
          "kind": "number",
          "value": 633.83
        },
        "blankField": "items",
        "domainField": "items",
        "domainValue": "Broken row",
        "counts": []
      }
    ]
  },
  {
    "id": "tip",
    "defaults": {
      "bill": 3200,
      "tipPercent": 10,
      "people": 1,
      "roundPerPerson": "no"
    },
    "fields": [
      "bill",
      "tipPercent",
      "people",
      "roundPerPerson"
    ],
    "defaultInactive": [],
    "pages": [
      {
        "locale": "ru",
        "path": "/ru/household/tip/",
        "h1": "Калькулятор чаевых",
        "body": {
          "longDescription": "Прибавляет выбранные чаевые к счёту и делит итог поровну между целым числом людей. Если включить округление, каждая доля поднимается до целой денежной единицы, а общий итог пересчитывается. Это не округление до ближайшей купюры или цента и не выбор принятого процента чаевых.",
          "howToUse": [
            "Введите положительную сумму счёта в одной валюте.",
            "Задайте неотрицательный процент и целое число людей от одного; дробный участник не округляется автоматически.",
            "Выберите округление доли вверх или обычное деление. При включённом варианте округляется до целой денежной единицы.",
            "Проверьте уже включённое обслуживание самостоятельно: калькулятор не вычитает сервисный сбор."
          ],
          "howItWorks": "Чаевые = счёт × процент /100. Без округления итог = счёт + чаевые, доля = итог / люди. С округлением доля = округление этой доли вверх до целого, новый итог = доля × люди. Положительный излишек относительно исходного итога выводится отдельно. Десятичные денежные отношения округляются до двух знаков только при выводе; расчёт сохраняет неокруглённые отношения.",
          "example": "Счёт 5400 с чаевыми 15 % даёт 6210, по 1552,50 на четверых. Округление доли вверх даст 1553 с человека, итог 6212 и 2 сверх исходного итога.",
          "faq": [
            {
              "q": "Сколько принято оставлять на чай?",
              "a": "Это зависит от страны и заведения, поэтому процент выбираете вы. Калькулятор не подсказывает норму и не подставляет её за вас."
            },
            {
              "q": "Что делает округление доли вверх?",
              "a": "Округляет сумму каждого до целого, из-за чего на столе обычно оказывается чуть больше счёта. Этот излишек показан отдельной строкой, чтобы ничего не пряталось."
            },
            {
              "q": "Вычитается ли уже включённое обслуживание?",
              "a": "Нет. Заменяет ли сервисный сбор чаевые — решение по вашему счёту, а не вывод из арифметики."
            },
            {
              "q": "Можно ли считать без деления на компанию?",
              "a": "Да. Оставьте одного человека, и вы получите просто чаевые и итог."
            }
          ],
          "disclaimer": "Равные доли в одной валюте, без конвертации. Процент выбираете вы; местные правила, сервисный сбор и распределение по индивидуальным заказам не определяются."
        },
        "help": {},
        "sources": [],
        "normal": {
          "inputs": {
            "bill": 100,
            "tipPercent": 10,
            "people": 3,
            "roundPerPerson": "yes"
          },
          "expected": {
            "kind": "number",
            "value": 111
          },
          "rows": [
            {
              "index": 0,
              "label": "Чаевые",
              "expected": {
                "kind": "number",
                "value": 10
              }
            },
            {
              "index": 2,
              "label": "С человека",
              "expected": {
                "kind": "number",
                "value": 37
              }
            },
            {
              "index": 4,
              "label": "Сверх счёта из-за округления",
              "expected": {
                "kind": "number",
                "value": 1
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "unit": "₽",
          "independentDerivation": "ceil(100×1.1/3)=37 perperson;37×3=111;111−110=1 extra from chosen whole currencyunit rounding"
        },
        "boundary": {
          "inputs": {
            "bill": 1.005,
            "tipPercent": 0,
            "people": 3,
            "roundPerPerson": "no"
          },
          "expected": {
            "kind": "number",
            "value": 1.01
          },
          "rows": [
            {
              "index": 0,
              "label": "Чаевые",
              "expected": {
                "kind": "number",
                "value": 0
              }
            },
            {
              "index": 2,
              "label": "С человека",
              "expected": {
                "kind": "number",
                "value": 0.34
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "unit": "₽",
          "independentDerivation": "Bill1.005→1.01display;share1.005/3=.335→.34 withoutwholeunitrounding/centallocation"
        },
        "controls": [
          {
            "inputs": {
              "bill": 0.3,
              "tipPercent": 0,
              "people": 3,
              "roundPerPerson": "yes"
            },
            "expected": {
              "kind": "number",
              "value": 3
            },
            "rows": [
              {
                "index": 2,
                "label": "С человека",
                "expected": {
                  "kind": "number",
                  "value": 1
                }
              },
              {
                "index": 4,
                "label": "Сверх счёта из-за округления",
                "expected": {
                  "kind": "number",
                  "value": 2.7
                }
              }
            ],
            "inactive": [],
            "rowCount": 5,
            "unit": "₽",
            "independentDerivation": "Chosenwholeunitceilingceil(.3/3)=1perperson;total3;extra3−.3=2.7"
          }
        ],
        "defaultExpected": {
          "kind": "number",
          "value": 3520
        },
        "blankField": "bill",
        "domainField": "people",
        "domainValue": 0,
        "counts": [
          "people"
        ]
      },
      {
        "locale": "en",
        "path": "/en/household/tip-calculator/",
        "h1": "Tip calculator",
        "body": {
          "longDescription": "Adds your chosen tip and splits the total equally among a whole number of people. With rounding enabled, each share rises to a whole currency unit and the total is recalculated. It does not round to a banknote or cent and does not select a customary tip rate.",
          "howToUse": [
            "Enter a positive bill in one currency.",
            "Set a nonnegative percentage and a whole count of at least one person; fractional people are not rounded automatically.",
            "Choose upward share rounding or ordinary division. The rounding option uses a whole currency unit.",
            "Check any included service charge yourself; the calculator does not subtract it."
          ],
          "howItWorks": "Tip = bill × percentage /100. Without rounding, total = bill + tip and share = total / people. With rounding, share is rounded upward to a whole unit, and new total = share × people. Any positive excess over the original total is shown separately. Decimal monetary ratios are rounded to two places only for display; calculations retain the unrounded ratios.",
          "example": "5400 with 15% tip gives 6210, or 1552.50 each for four. Rounding upward gives 1553 each, total 6212 and 2 above the original total.",
          "faq": [
            {
              "q": "How much should I tip?",
              "a": "That depends on the country and the venue, so the percentage is yours to choose. The calculator does not suggest a norm or fill one in for you."
            },
            {
              "q": "What does rounding each share up do?",
              "a": "It rounds every person to a whole unit, which usually leaves a little more than the bill. That surplus is shown as its own line so nothing is hidden."
            },
            {
              "q": "Is service already included subtracted?",
              "a": "No. Whether a service charge replaces the tip is a judgement about your bill, not something the arithmetic can decide."
            },
            {
              "q": "Can I use it without splitting?",
              "a": "Yes. Leave the count at one and you simply get the tip and the total."
            }
          ],
          "disclaimer": "Equal shares in one currency without conversion. You choose the percentage; local customs, service charges and splitting by individual orders are not determined."
        },
        "help": {},
        "sources": [],
        "normal": {
          "inputs": {
            "bill": 100,
            "tipPercent": 10,
            "people": 3,
            "roundPerPerson": "yes"
          },
          "expected": {
            "kind": "number",
            "value": 111
          },
          "rows": [
            {
              "index": 0,
              "label": "Tip",
              "expected": {
                "kind": "number",
                "value": 10
              }
            },
            {
              "index": 2,
              "label": "Per person",
              "expected": {
                "kind": "number",
                "value": 37
              }
            },
            {
              "index": 4,
              "label": "Extra from rounding up",
              "expected": {
                "kind": "number",
                "value": 1
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "unit": "$",
          "independentDerivation": "ceil(100×1.1/3)=37 perperson;37×3=111;111−110=1 extra from chosen whole currencyunit rounding"
        },
        "boundary": {
          "inputs": {
            "bill": 1.005,
            "tipPercent": 0,
            "people": 3,
            "roundPerPerson": "no"
          },
          "expected": {
            "kind": "number",
            "value": 1.01
          },
          "rows": [
            {
              "index": 0,
              "label": "Tip",
              "expected": {
                "kind": "number",
                "value": 0
              }
            },
            {
              "index": 2,
              "label": "Per person",
              "expected": {
                "kind": "number",
                "value": 0.34
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "unit": "$",
          "independentDerivation": "Bill1.005→1.01display;share1.005/3=.335→.34 withoutwholeunitrounding/centallocation"
        },
        "controls": [
          {
            "inputs": {
              "bill": 0.3,
              "tipPercent": 0,
              "people": 3,
              "roundPerPerson": "yes"
            },
            "expected": {
              "kind": "number",
              "value": 3
            },
            "rows": [
              {
                "index": 2,
                "label": "Per person",
                "expected": {
                  "kind": "number",
                  "value": 1
                }
              },
              {
                "index": 4,
                "label": "Extra from rounding up",
                "expected": {
                  "kind": "number",
                  "value": 2.7
                }
              }
            ],
            "inactive": [],
            "rowCount": 5,
            "unit": "$",
            "independentDerivation": "Chosenwholeunitceilingceil(.3/3)=1perperson;total3;extra3−.3=2.7"
          }
        ],
        "defaultExpected": {
          "kind": "number",
          "value": 3520
        },
        "blankField": "bill",
        "domainField": "people",
        "domainValue": 0,
        "counts": [
          "people"
        ]
      },
      {
        "locale": "uk",
        "path": "/uk/pobut/chayovi/",
        "h1": "Калькулятор чайових",
        "body": {
          "longDescription": "Додає обрані чайові й ділить підсумок порівну між цілим числом людей. З округленням частка піднімається до цілої грошової одиниці, а загальна сума перераховується. Це не округлення до купюри чи копійки й не вибір прийнятого відсотка чайових.",
          "howToUse": [
            "Введіть додатний рахунок в одній валюті.",
            "Задайте невід’ємний відсоток і цілу кількість людей від одного; дробовий учасник автоматично не округлюється.",
            "Оберіть округлення частки вгору або звичайне ділення; округлення стосується цілої грошової одиниці.",
            "Самостійно перевірте включене обслуговування: сервісний збір не віднімається."
          ],
          "howItWorks": "Чайові = рахунок × відсоток /100. Без округлення підсумок = рахунок + чайові, частка = підсумок / люди. З округленням частка округлюється вгору до цілого, новий підсумок = частка × люди. Додатний надлишок показується окремо. Десяткові грошові відношення округлюються до двох знаків лише для виведення; розрахунок зберігає неокруглені відношення.",
          "example": "Рахунок 5400 із чайовими 15 % дає 6210, по 1552,50 на чотирьох. Округлення вгору дає 1553 на людину, разом 6212 і 2 понад початковий підсумок.",
          "faq": [
            {
              "q": "Скільки прийнято залишати?",
              "a": "Відсоток залежить від ваших умов і рішення. Калькулятор не встановлює норму для країни чи закладу; включений сервісний збір перевіряйте у своєму рахунку."
            },
            {
              "q": "Від якої суми рахувати відсоток?",
              "a": "Від суми рахунку. Якщо в ньому вже є рядок обслуговування, чайові понад нього залишають за бажанням, а не за правилом."
            },
            {
              "q": "Чому частка рахується від підсумку?",
              "a": "Бо ділиться вся сума, яку ви заплатите. Ділення самого рахунку залишило б чайові неврахованими, і хтось доплачував би за всіх."
            },
            {
              "q": "Як розділити нерівно?",
              "a": "Порахуйте підсумок і поділіть його пропорційно замовленому. Для цього зручніше окремий розрахунок поділу суми за частками."
            }
          ],
          "disclaimer": "Рівні частки в одній валюті без перетворення. Відсоток обираєте ви; місцеві звичаї, сервісний збір і поділ за індивідуальними замовленнями не визначаються."
        },
        "help": {},
        "sources": [],
        "normal": {
          "inputs": {
            "bill": 100,
            "tipPercent": 10,
            "people": 3,
            "roundPerPerson": "yes"
          },
          "expected": {
            "kind": "number",
            "value": 111
          },
          "rows": [
            {
              "index": 0,
              "label": "Чайові",
              "expected": {
                "kind": "number",
                "value": 10
              }
            },
            {
              "index": 2,
              "label": "З людини",
              "expected": {
                "kind": "number",
                "value": 37
              }
            },
            {
              "index": 4,
              "label": "Понад рахунок через округлення",
              "expected": {
                "kind": "number",
                "value": 1
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "unit": "₴",
          "independentDerivation": "ceil(100×1.1/3)=37 perperson;37×3=111;111−110=1 extra from chosen whole currencyunit rounding"
        },
        "boundary": {
          "inputs": {
            "bill": 1.005,
            "tipPercent": 0,
            "people": 3,
            "roundPerPerson": "no"
          },
          "expected": {
            "kind": "number",
            "value": 1.01
          },
          "rows": [
            {
              "index": 0,
              "label": "Чайові",
              "expected": {
                "kind": "number",
                "value": 0
              }
            },
            {
              "index": 2,
              "label": "З людини",
              "expected": {
                "kind": "number",
                "value": 0.34
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "unit": "₴",
          "independentDerivation": "Bill1.005→1.01display;share1.005/3=.335→.34 withoutwholeunitrounding/centallocation"
        },
        "controls": [
          {
            "inputs": {
              "bill": 0.3,
              "tipPercent": 0,
              "people": 3,
              "roundPerPerson": "yes"
            },
            "expected": {
              "kind": "number",
              "value": 3
            },
            "rows": [
              {
                "index": 2,
                "label": "З людини",
                "expected": {
                  "kind": "number",
                  "value": 1
                }
              },
              {
                "index": 4,
                "label": "Понад рахунок через округлення",
                "expected": {
                  "kind": "number",
                  "value": 2.7
                }
              }
            ],
            "inactive": [],
            "rowCount": 5,
            "unit": "₴",
            "independentDerivation": "Chosenwholeunitceilingceil(.3/3)=1perperson;total3;extra3−.3=2.7"
          }
        ],
        "defaultExpected": {
          "kind": "number",
          "value": 3520
        },
        "blankField": "bill",
        "domainField": "people",
        "domainValue": 0,
        "counts": [
          "people"
        ]
      },
      {
        "locale": "de",
        "path": "/de/haushalt/trinkgeld-rechner/",
        "h1": "Trinkgeldrechner",
        "body": {
          "longDescription": "Addiert das gewählte Trinkgeld und teilt gleichmäßig durch eine ganze Personenzahl. Beim Aufrunden steigt jeder Anteil auf eine ganze Geldeinheit und die Gesamtsumme wird neu berechnet. Es wird weder auf Banknoten noch auf Cent gerundet und kein üblicher Trinkgeldsatz gewählt.",
          "howToUse": [
            "Einen positiven Rechnungsbetrag in einer Währung eingeben.",
            "Nichtnegativen Prozentsatz und ganze Personenzahl ab eins angeben; Bruchteile von Personen werden nicht gerundet.",
            "Aufrunden je Anteil oder gewöhnliches Teilen wählen; Aufrunden gilt für ganze Geldeinheiten.",
            "Enthaltenen Servicezuschlag selbst prüfen; der Rechner zieht ihn nicht ab."
          ],
          "howItWorks": "Trinkgeld = Rechnung × Prozent /100. Ohne Aufrunden: Gesamt = Rechnung + Trinkgeld, Anteil = Gesamt / Personen. Mit Aufrunden wird der Anteil auf die nächste ganze Einheit erhöht; neues Gesamt = Anteil × Personen. Positiver Mehrbetrag steht separat. Dezimale Geldverhältnisse werden erst zur Anzeige auf zwei Stellen gerundet; die Rechnung behält ungerundete Verhältnisse.",
          "example": "5400 mit 15 % Trinkgeld ergibt 6210, also 1552,50 je Person bei vier Personen. Aufrunden ergibt 1553 je Person, Gesamt 6212 und 2 zusätzlich, alles in derselben gewählten Geldeinheit.",
          "faq": [
            {
              "q": "Wie viel Trinkgeld soll ich geben?",
              "a": "Das hängt von Land und Lokal ab, den Prozentsatz wählst du deshalb selbst. Der Rechner schlägt keine Norm vor und trägt keine für dich ein."
            },
            {
              "q": "Was bewirkt das Aufrunden je Anteil?",
              "a": "Es rundet jede Person auf eine glatte Einheit, was meist etwas mehr als die Rechnung ergibt. Dieser Überschuss steht in einer eigenen Zeile, damit nichts verborgen bleibt."
            },
            {
              "q": "Wird ein bereits enthaltener Bedienzuschlag abgezogen?",
              "a": "Nein. Ob ein Bedienzuschlag das Trinkgeld ersetzt, ist eine Beurteilung deiner Rechnung und nichts, was die Rechnerei entscheiden kann."
            },
            {
              "q": "Kann ich ihn ohne Aufteilen nutzen?",
              "a": "Ja. Lass die Zahl bei eins, und du bekommst schlicht das Trinkgeld und die Summe."
            }
          ],
          "disclaimer": "Gleiche Anteile in einer Währung, ohne Umrechnung. Den Prozentsatz wählen Sie; örtliche Gepflogenheiten, Servicezuschläge und individuelle Bestellungen werden nicht bestimmt."
        },
        "help": {},
        "sources": [],
        "normal": {
          "inputs": {
            "bill": 100,
            "tipPercent": 10,
            "people": 3,
            "roundPerPerson": "yes"
          },
          "expected": {
            "kind": "number",
            "value": 111
          },
          "rows": [
            {
              "index": 0,
              "label": "Trinkgeld",
              "expected": {
                "kind": "number",
                "value": 10
              }
            },
            {
              "index": 2,
              "label": "Je Person",
              "expected": {
                "kind": "number",
                "value": 37
              }
            },
            {
              "index": 4,
              "label": "Mehr als die Rechnung durch das Aufrunden",
              "expected": {
                "kind": "number",
                "value": 1
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "unit": "€",
          "independentDerivation": "ceil(100×1.1/3)=37 perperson;37×3=111;111−110=1 extra from chosen whole currencyunit rounding"
        },
        "boundary": {
          "inputs": {
            "bill": 1.005,
            "tipPercent": 0,
            "people": 3,
            "roundPerPerson": "no"
          },
          "expected": {
            "kind": "number",
            "value": 1.01
          },
          "rows": [
            {
              "index": 0,
              "label": "Trinkgeld",
              "expected": {
                "kind": "number",
                "value": 0
              }
            },
            {
              "index": 2,
              "label": "Je Person",
              "expected": {
                "kind": "number",
                "value": 0.34
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "unit": "€",
          "independentDerivation": "Bill1.005→1.01display;share1.005/3=.335→.34 withoutwholeunitrounding/centallocation"
        },
        "controls": [
          {
            "inputs": {
              "bill": 0.3,
              "tipPercent": 0,
              "people": 3,
              "roundPerPerson": "yes"
            },
            "expected": {
              "kind": "number",
              "value": 3
            },
            "rows": [
              {
                "index": 2,
                "label": "Je Person",
                "expected": {
                  "kind": "number",
                  "value": 1
                }
              },
              {
                "index": 4,
                "label": "Mehr als die Rechnung durch das Aufrunden",
                "expected": {
                  "kind": "number",
                  "value": 2.7
                }
              }
            ],
            "inactive": [],
            "rowCount": 5,
            "unit": "€",
            "independentDerivation": "Chosenwholeunitceilingceil(.3/3)=1perperson;total3;extra3−.3=2.7"
          }
        ],
        "defaultExpected": {
          "kind": "number",
          "value": 3520
        },
        "blankField": "bill",
        "domainField": "people",
        "domainValue": 0,
        "counts": [
          "people"
        ]
      },
      {
        "locale": "es",
        "path": "/es/hogar/calculadora-de-propina/",
        "h1": "Calculadora de propina",
        "body": {
          "longDescription": "Añade la propina elegida y reparte el total por igual entre un número entero de personas. Con redondeo, cada parte sube a una unidad monetaria entera y se recalcula el total. No redondea a billetes ni céntimos, ni elige un porcentaje habitual.",
          "howToUse": [
            "Introduce una cuenta positiva en una moneda.",
            "Fija porcentaje no negativo y número entero de personas desde una; no se redondean participantes fraccionarios.",
            "Elige redondeo al alza por persona o división normal; el redondeo usa unidades monetarias enteras.",
            "Comprueba por tu cuenta el servicio incluido; no se resta automáticamente."
          ],
          "howItWorks": "Propina = cuenta × porcentaje /100. Sin redondeo: total = cuenta + propina, parte = total / personas. Con redondeo se eleva cada parte al entero siguiente; nuevo total = parte × personas. El exceso positivo sobre el total inicial aparece aparte. Las razones monetarias decimales se redondean a dos cifras solo al mostrarlas; el cálculo conserva las razones sin redondear.",
          "example": "5400 con 15 % da 6210, o 1552,50 por persona entre cuatro. Redondear al alza da 1553 por persona, total 6212 y 2 adicionales, en la misma unidad monetaria.",
          "faq": [
            {
              "q": "¿Cuánta propina debo dejar?",
              "a": "Depende del país y del local, así que el porcentaje lo eliges tú. La calculadora no sugiere una norma ni la rellena por ti."
            },
            {
              "q": "¿Qué hace redondear al alza cada parte?",
              "a": "Redondea a cada persona a una unidad entera, lo que suele dejar algo más que la cuenta. Ese sobrante se muestra en su propia línea para que no quede nada oculto."
            },
            {
              "q": "¿Se resta el servicio ya incluido?",
              "a": "No. Si un cargo por servicio sustituye a la propina es un juicio sobre tu cuenta, no algo que la aritmética pueda decidir."
            },
            {
              "q": "¿Puedo usarla sin repartir?",
              "a": "Sí. Deja el número en uno y obtendrás simplemente la propina y el total."
            }
          ],
          "disclaimer": "Partes iguales en una moneda y sin conversión. El porcentaje lo eliges tú; no determina costumbres locales, servicio ni reparto según pedidos individuales."
        },
        "help": {},
        "sources": [],
        "normal": {
          "inputs": {
            "bill": 100,
            "tipPercent": 10,
            "people": 3,
            "roundPerPerson": "yes"
          },
          "expected": {
            "kind": "number",
            "value": 111
          },
          "rows": [
            {
              "index": 0,
              "label": "Propina",
              "expected": {
                "kind": "number",
                "value": 10
              }
            },
            {
              "index": 2,
              "label": "Por persona",
              "expected": {
                "kind": "number",
                "value": 37
              }
            },
            {
              "index": 4,
              "label": "De más por el redondeo",
              "expected": {
                "kind": "number",
                "value": 1
              }
            }
          ],
          "inactive": [],
          "rowCount": 5,
          "unit": "€",
          "independentDerivation": "ceil(100×1.1/3)=37 perperson;37×3=111;111−110=1 extra from chosen whole currencyunit rounding"
        },
        "boundary": {
          "inputs": {
            "bill": 1.005,
            "tipPercent": 0,
            "people": 3,
            "roundPerPerson": "no"
          },
          "expected": {
            "kind": "number",
            "value": 1.01
          },
          "rows": [
            {
              "index": 0,
              "label": "Propina",
              "expected": {
                "kind": "number",
                "value": 0
              }
            },
            {
              "index": 2,
              "label": "Por persona",
              "expected": {
                "kind": "number",
                "value": 0.34
              }
            }
          ],
          "inactive": [],
          "rowCount": 4,
          "unit": "€",
          "independentDerivation": "Bill1.005→1.01display;share1.005/3=.335→.34 withoutwholeunitrounding/centallocation"
        },
        "controls": [
          {
            "inputs": {
              "bill": 0.3,
              "tipPercent": 0,
              "people": 3,
              "roundPerPerson": "yes"
            },
            "expected": {
              "kind": "number",
              "value": 3
            },
            "rows": [
              {
                "index": 2,
                "label": "Por persona",
                "expected": {
                  "kind": "number",
                  "value": 1
                }
              },
              {
                "index": 4,
                "label": "De más por el redondeo",
                "expected": {
                  "kind": "number",
                  "value": 2.7
                }
              }
            ],
            "inactive": [],
            "rowCount": 5,
            "unit": "€",
            "independentDerivation": "Chosenwholeunitceilingceil(.3/3)=1perperson;total3;extra3−.3=2.7"
          }
        ],
        "defaultExpected": {
          "kind": "number",
          "value": 3520
        },
        "blankField": "bill",
        "domainField": "people",
        "domainValue": 0,
        "counts": [
          "people"
        ]
      }
    ]
  },
  {
    "id": "trip-budget",
    "defaults": {
      "nights": 4,
      "days": 5,
      "people": 2,
      "hotelPerNight": 3500,
      "foodPerDayPerPerson": 1200,
      "transport": 12000,
      "activities": 5000,
      "other": 0
    },
    "fields": [
      "nights",
      "days",
      "people",
      "hotelPerNight",
      "foodPerDayPerPerson",
      "transport",
      "activities",
      "other"
    ],
    "defaultInactive": [],
    "pages": [
      {
        "locale": "ru",
        "path": "/ru/household/trip-budget/",
        "h1": "Калькулятор бюджета поездки",
        "body": {
          "longDescription": "Собирает статьи с разной базой: проживание за фактические ночи, питание за дни и людей, транспорт и развлечения общей суммой. Ночи и дни задаются независимо: пять дней и четыре ночи — пример, а не обязательное соотношение. Доля на человека равная, стоимость в день — средняя вместе с разовыми тратами.",
          "howToUse": [
            "Введите целые неотрицательные ночи и целое положительное число людей. Дни положительные; дробный день допустим как выбранная длительность питания.",
            "Цена ночи относится ко всей группе, а питание — к одному человеку в день. Нулевые расходы допустимы.",
            "Транспорт и развлечения задайте общей суммой для всех; не вводите цену одного билета вместо суммы билетов.",
            "Прочие расходы необязательны: пустое поле означает 0. Все суммы должны быть в одной валюте."
          ],
          "howItWorks": "Проживание = ночи × цена ночи для группы. Питание = дни × люди × дневная цена на человека. Транспорт, развлечения и прочее добавляются общими суммами. Доля = итог / люди; среднее в день = итог / дни. Одинаковые ночи и дни не запрещены.",
          "example": "Двое на 5 дней и 4 ночи: 4×3500 =14000 проживание, 5×2×1200 =12000 питание, 12000 транспорт и 5000 развлечения; итог 43000; 21500 на человека и 8600 в день. Без отеля можно задать 0 ночей.",
          "faq": [
            {
              "q": "Почему ночи и дни вводятся отдельно?",
              "a": "Проживание оплачивается по вашим фактическим ночам, а питание моделируется по выбранным дням. Пять дней и четыре ночи — только пример; ночная дорога или иная организация меняют соотношение."
            },
            {
              "q": "Питание считается на всех сразу?",
              "a": "Нет, вводится сумма на одного человека в день, а калькулятор умножает её и на дни, и на количество людей."
            },
            {
              "q": "Куда отнести билеты на самолёт?",
              "a": "В транспорт — это сумма на всю поездку. Если билеты куплены на каждого отдельно, введите их общую стоимость."
            },
            {
              "q": "Что показывает стоимость в день?",
              "a": "Весь бюджет, поделённый на число дней, включая разовые траты вроде билетов. Это ориентир для сравнения поездок разной длины."
            },
            {
              "q": "Учитывается ли курс валюты?",
              "a": "Нет, вводите суммы в одной валюте. Для перевода из другой валюты воспользуйтесь конвертером."
            }
          ],
          "disclaimer": "Сценарий расходов в одной валюте, без курса и ценового прогноза. Равное деление не учитывает разные личные расходы; ночи, дни и ставки выбираете вы."
        },
        "help": {},
        "sources": [],
        "normal": {
          "inputs": {
            "nights": 2,
            "days": 2.5,
            "people": 3,
            "hotelPerNight": 100,
            "foodPerDayPerPerson": 20,
            "transport": 50,
            "activities": 25,
            "other": 10
          },
          "expected": {
            "kind": "number",
            "value": 435
          },
          "rows": [
            {
              "index": 2,
              "label": "Проживание",
              "expected": {
                "kind": "number",
                "value": 200
              }
            },
            {
              "index": 3,
              "label": "Питание",
              "expected": {
                "kind": "number",
                "value": 150
              }
            },
            {
              "index": 0,
              "label": "На человека",
              "expected": {
                "kind": "number",
                "value": 145
              }
            },
            {
              "index": 1,
              "label": "В день",
              "expected": {
                "kind": "number",
                "value": 174
              }
            }
          ],
          "inactive": [],
          "rowCount": 7,
          "unit": "₽",
          "independentDerivation": "2×100+2.5×3×20+50+25+10=435;435/3=145;435/2.5=174"
        },
        "boundary": {
          "inputs": {
            "nights": 0,
            "days": 1.5,
            "people": 2,
            "hotelPerNight": 0,
            "foodPerDayPerPerson": 4,
            "transport": 0,
            "activities": 0,
            "other": 0
          },
          "expected": {
            "kind": "number",
            "value": 12
          },
          "rows": [
            {
              "index": 2,
              "label": "Проживание",
              "expected": {
                "kind": "number",
                "value": 0
              }
            },
            {
              "index": 3,
              "label": "Питание",
              "expected": {
                "kind": "number",
                "value": 12
              }
            },
            {
              "index": 0,
              "label": "На человека",
              "expected": {
                "kind": "number",
                "value": 6
              }
            },
            {
              "index": 1,
              "label": "В день",
              "expected": {
                "kind": "number",
                "value": 8
              }
            }
          ],
          "inactive": [],
          "rowCount": 6,
          "unit": "₽",
          "independentDerivation": "Fractionalduration1.5×2travellers×4food=12;nights0→hotel0"
        },
        "controls": [],
        "defaultExpected": {
          "kind": "number",
          "value": 43000
        },
        "blankField": "nights",
        "domainField": "people",
        "domainValue": 0,
        "counts": [
          "nights",
          "people"
        ]
      },
      {
        "locale": "en",
        "path": "/en/household/trip-budget-calculator/",
        "h1": "Trip budget calculator",
        "body": {
          "longDescription": "Combines costs with different bases: accommodation for actual nights, food for days and people, and transport and activities as group totals. Nights and days are independent: five days and four nights is an example, not a mandatory relationship. Per-person shares are equal; per-day cost averages one-off expenses too.",
          "howToUse": [
            "Enter whole nonnegative nights and a whole positive traveller count. Days must be positive; fractional days are allowed as your chosen food duration.",
            "The nightly rate covers the whole group; food is per person per day. Zero costs are allowed.",
            "Enter transport and activities for everyone together; use total ticket cost rather than one ticket’s price.",
            "Other costs are optional; blank means 0. Enter all amounts in one currency."
          ],
          "howItWorks": "Accommodation = nights × group nightly rate. Food = days × people × daily rate per person. Transport, activities and other costs are added as group totals. Share = total / people; daily average = total / days. Equal night and day counts are permitted.",
          "example": "Two people for 5 days and 4 nights: 4×3500 =14000 accommodation, 5×2×1200 =12000 food, 12000 transport and 5000 activities; total 43000; 21500 each and 8600 per day. Without a hotel, enter 0 nights.",
          "faq": [
            {
              "q": "Why are nights and days entered separately?",
              "a": "Accommodation follows your actual booked nights, while food follows your chosen days. Five days and four nights is only an example; overnight travel or another arrangement changes the relationship."
            },
            {
              "q": "Is the food budget for everyone at once?",
              "a": "No — enter the amount for one traveller per day, and the calculator multiplies it by both the days and the number of travellers."
            },
            {
              "q": "Where do flights belong?",
              "a": "In transport, as a total for the whole trip. If tickets were bought individually, enter their combined cost."
            },
            {
              "q": "What does the cost per day show?",
              "a": "The whole budget divided by the number of days, one-off costs like tickets included. It is a yardstick for comparing trips of different lengths."
            },
            {
              "q": "Are exchange rates applied?",
              "a": "No — enter every amount in a single currency. Use the converter first if some costs are in another one."
            }
          ],
          "disclaimer": "A one-currency expense scenario without exchange or price forecasting. Equal splitting does not model different personal expenses; you choose nights, days and rates."
        },
        "help": {},
        "sources": [],
        "normal": {
          "inputs": {
            "nights": 2,
            "days": 2.5,
            "people": 3,
            "hotelPerNight": 100,
            "foodPerDayPerPerson": 20,
            "transport": 50,
            "activities": 25,
            "other": 10
          },
          "expected": {
            "kind": "number",
            "value": 435
          },
          "rows": [
            {
              "index": 2,
              "label": "Accommodation",
              "expected": {
                "kind": "number",
                "value": 200
              }
            },
            {
              "index": 3,
              "label": "Food",
              "expected": {
                "kind": "number",
                "value": 150
              }
            },
            {
              "index": 0,
              "label": "Per traveller",
              "expected": {
                "kind": "number",
                "value": 145
              }
            },
            {
              "index": 1,
              "label": "Per day",
              "expected": {
                "kind": "number",
                "value": 174
              }
            }
          ],
          "inactive": [],
          "rowCount": 7,
          "unit": "$",
          "independentDerivation": "2×100+2.5×3×20+50+25+10=435;435/3=145;435/2.5=174"
        },
        "boundary": {
          "inputs": {
            "nights": 0,
            "days": 1.5,
            "people": 2,
            "hotelPerNight": 0,
            "foodPerDayPerPerson": 4,
            "transport": 0,
            "activities": 0,
            "other": 0
          },
          "expected": {
            "kind": "number",
            "value": 12
          },
          "rows": [
            {
              "index": 2,
              "label": "Accommodation",
              "expected": {
                "kind": "number",
                "value": 0
              }
            },
            {
              "index": 3,
              "label": "Food",
              "expected": {
                "kind": "number",
                "value": 12
              }
            },
            {
              "index": 0,
              "label": "Per traveller",
              "expected": {
                "kind": "number",
                "value": 6
              }
            },
            {
              "index": 1,
              "label": "Per day",
              "expected": {
                "kind": "number",
                "value": 8
              }
            }
          ],
          "inactive": [],
          "rowCount": 6,
          "unit": "$",
          "independentDerivation": "Fractionalduration1.5×2travellers×4food=12;nights0→hotel0"
        },
        "controls": [],
        "defaultExpected": {
          "kind": "number",
          "value": 43000
        },
        "blankField": "nights",
        "domainField": "people",
        "domainValue": 0,
        "counts": [
          "nights",
          "people"
        ]
      },
      {
        "locale": "uk",
        "path": "/uk/pobut/byudzhet-podorozhi/",
        "h1": "Калькулятор бюджету подорожі",
        "body": {
          "longDescription": "Складає витрати з різною основою: проживання за фактичні ночі, харчування за дні й людей, транспорт і розваги загальними сумами. Ночі й дні незалежні: п’ять днів і чотири ночі — приклад, а не обов’язкова різниця. Частки рівні, середня ціна дня включає також разові витрати.",
          "howToUse": [
            "Введіть цілі невід’ємні ночі й цілу додатну кількість людей. Дні додатні; дробовий день допустимий як обрана тривалість харчування.",
            "Ціна ночі стосується всієї групи, харчування — однієї людини за день. Нульові витрати допустимі.",
            "Транспорт і розваги задайте сумами на всіх; не підставляйте ціну одного квитка замість загальної.",
            "Інші витрати необов’язкові: порожнє поле означає 0. Усі гроші мають бути в одній валюті."
          ],
          "howItWorks": "Проживання = ночі × ціна ночі для групи. Харчування = дні × люди × денна ціна на людину. Транспорт, розваги й інше додаються загальними сумами. Частка = підсумок / люди; середнє за день = підсумок / дні. Однакові ночі й дні допустимі.",
          "example": "Двоє на 5 днів і 4 ночі: 4×3500 =14000 проживання, 5×2×1200 =12000 їжа, 12000 транспорт і 5000 розваги; разом 43000; 21500 на людину й 8600 за день. Без готелю можна задати 0 ночей.",
          "faq": [
            {
              "q": "Чому ночей менше, ніж днів?",
              "a": "Ночі залежать від фактичного проживання, а дні — від вашої моделі витрат. П’ять днів і чотири ночі — лише приклад; нічна дорога або інша організація може дати інше чи навіть однакове число."
            },
            {
              "q": "Що зазвичай забувають закласти?",
              "a": "Окремо перевірте місцевий транспорт, страхування, візи, сувеніри й інші потрібні витрати. Обраний резерв внесіть сумою в поле інших витрат; універсальних 10–15 % модель не встановлює."
            },
            {
              "q": "Як рахувати харчування?",
              "a": "Введіть обрану суму на людину за день. Якщо частина харчування включена в проживання, не додавайте її вдруге. Оцінка залежить від вашого сценарію, а не від єдиного рекомендованого меню."
            },
            {
              "q": "Чи враховано курс валюти?",
              "a": "Ні, усі суми в одній валюті. Для закордонної поїздки закладіть запас на коливання курсу й комісії за конвертацію."
            }
          ],
          "disclaimer": "Сценарій витрат в одній валюті, без курсу й прогнозу цін. Рівний поділ не моделює різні особисті витрати; ночі, дні й ставки обираєте ви."
        },
        "help": {},
        "sources": [],
        "normal": {
          "inputs": {
            "nights": 2,
            "days": 2.5,
            "people": 3,
            "hotelPerNight": 100,
            "foodPerDayPerPerson": 20,
            "transport": 50,
            "activities": 25,
            "other": 10
          },
          "expected": {
            "kind": "number",
            "value": 435
          },
          "rows": [
            {
              "index": 2,
              "label": "Проживання",
              "expected": {
                "kind": "number",
                "value": 200
              }
            },
            {
              "index": 3,
              "label": "Харчування",
              "expected": {
                "kind": "number",
                "value": 150
              }
            },
            {
              "index": 0,
              "label": "На людину",
              "expected": {
                "kind": "number",
                "value": 145
              }
            },
            {
              "index": 1,
              "label": "На день",
              "expected": {
                "kind": "number",
                "value": 174
              }
            }
          ],
          "inactive": [],
          "rowCount": 7,
          "unit": "₴",
          "independentDerivation": "2×100+2.5×3×20+50+25+10=435;435/3=145;435/2.5=174"
        },
        "boundary": {
          "inputs": {
            "nights": 0,
            "days": 1.5,
            "people": 2,
            "hotelPerNight": 0,
            "foodPerDayPerPerson": 4,
            "transport": 0,
            "activities": 0,
            "other": 0
          },
          "expected": {
            "kind": "number",
            "value": 12
          },
          "rows": [
            {
              "index": 2,
              "label": "Проживання",
              "expected": {
                "kind": "number",
                "value": 0
              }
            },
            {
              "index": 3,
              "label": "Харчування",
              "expected": {
                "kind": "number",
                "value": 12
              }
            },
            {
              "index": 0,
              "label": "На людину",
              "expected": {
                "kind": "number",
                "value": 6
              }
            },
            {
              "index": 1,
              "label": "На день",
              "expected": {
                "kind": "number",
                "value": 8
              }
            }
          ],
          "inactive": [],
          "rowCount": 6,
          "unit": "₴",
          "independentDerivation": "Fractionalduration1.5×2travellers×4food=12;nights0→hotel0"
        },
        "controls": [],
        "defaultExpected": {
          "kind": "number",
          "value": 43000
        },
        "blankField": "nights",
        "domainField": "people",
        "domainValue": 0,
        "counts": [
          "nights",
          "people"
        ]
      },
      {
        "locale": "de",
        "path": "/de/haushalt/reisebudget-rechner/",
        "h1": "Rechner für das Reisebudget",
        "body": {
          "longDescription": "Verbindet Kosten mit verschiedenen Bezugsgrößen: Unterkunft je tatsächlicher Nacht, Essen je Tag und Person, Fahrt und Aktivitäten als Gruppensummen. Nächte und Tage sind unabhängig: fünf Tage und vier Nächte sind ein Beispiel, keine vorgeschriebene Beziehung. Pro Person wird gleich geteilt; das Tagesmittel enthält auch Einmalkosten.",
          "howToUse": [
            "Ganze nichtnegative Nächte und ganze positive Personenzahl eingeben. Tage müssen positiv sein; Teil eines Tages ist als gewählte Essensdauer zulässig.",
            "Nachtpreis gilt für die ganze Gruppe, Essenspreis je Person und Tag. Kosten 0 sind zulässig.",
            "Fahrt und Aktivitäten für alle zusammen angeben, nicht einen Ticketpreis statt aller Tickets.",
            "Sonstige Kosten sind optional; leer bedeutet 0. Alle Beträge in einer Währung angeben."
          ],
          "howItWorks": "Unterkunft = Nächte × Gruppennachtpreis. Essen = Tage × Personen × Tagessatz je Person. Fahrt, Aktivitäten und sonstige Kosten sind Gruppensummen. Anteil = Gesamt / Personen; Tagesmittel = Gesamt / Tage. Gleiche Nacht- und Tageszahlen sind möglich.",
          "example": "Zwei Personen für 5 Tage und 4 Nächte: 4×3500 =14000 Unterkunft, 5×2×1200 =12000 Essen, 12000 Fahrt und 5000 Aktivitäten; Gesamt 43000; 21500 je Person und 8600 je Tag, in einer gewählten Geldeinheit. Ohne Hotel sind 0 Nächte möglich.",
          "faq": [
            {
              "q": "Warum werden Nächte und Tage getrennt eingetragen?",
              "a": "Unterkunft folgt tatsächlichen gebuchten Nächten, Essen den gewählten Tagen. Fünf Tage und vier Nächte sind nur ein Beispiel; Nachtfahrten oder andere Planung ändern das Verhältnis."
            },
            {
              "q": "Gilt das Essensbudget für alle zusammen?",
              "a": "Nein — trage den Betrag für einen Reisenden je Tag ein, und der Rechner multipliziert ihn sowohl mit den Tagen als auch mit der Zahl der Reisenden."
            },
            {
              "q": "Wohin gehören Flüge?",
              "a": "In die Fahrt, als Summe für die ganze Reise. Wurden die Tickets einzeln gekauft, trage ihre Gesamtsumme ein."
            },
            {
              "q": "Was zeigen die Kosten je Tag?",
              "a": "Das ganze Budget geteilt durch die Zahl der Tage, einmalige Kosten wie Tickets eingeschlossen. Es ist ein Maßstab, um Reisen verschiedener Länge zu vergleichen."
            },
            {
              "q": "Werden Wechselkurse angewendet?",
              "a": "Nein — trage jeden Betrag in einer einzigen Währung ein. Nutze vorher den Umrechner, wenn manche Kosten in einer anderen anfallen."
            }
          ],
          "disclaimer": "Kostenszenario in einer Währung, ohne Wechselkurs- oder Preisprognose. Gleiches Teilen berücksichtigt keine unterschiedlichen persönlichen Ausgaben; Nächte, Tage und Sätze wählen Sie."
        },
        "help": {},
        "sources": [],
        "normal": {
          "inputs": {
            "nights": 2,
            "days": 2.5,
            "people": 3,
            "hotelPerNight": 100,
            "foodPerDayPerPerson": 20,
            "transport": 50,
            "activities": 25,
            "other": 10
          },
          "expected": {
            "kind": "number",
            "value": 435
          },
          "rows": [
            {
              "index": 2,
              "label": "Unterkunft",
              "expected": {
                "kind": "number",
                "value": 200
              }
            },
            {
              "index": 3,
              "label": "Essen",
              "expected": {
                "kind": "number",
                "value": 150
              }
            },
            {
              "index": 0,
              "label": "Je Reisendem",
              "expected": {
                "kind": "number",
                "value": 145
              }
            },
            {
              "index": 1,
              "label": "Je Tag",
              "expected": {
                "kind": "number",
                "value": 174
              }
            }
          ],
          "inactive": [],
          "rowCount": 7,
          "unit": "€",
          "independentDerivation": "2×100+2.5×3×20+50+25+10=435;435/3=145;435/2.5=174"
        },
        "boundary": {
          "inputs": {
            "nights": 0,
            "days": 1.5,
            "people": 2,
            "hotelPerNight": 0,
            "foodPerDayPerPerson": 4,
            "transport": 0,
            "activities": 0,
            "other": 0
          },
          "expected": {
            "kind": "number",
            "value": 12
          },
          "rows": [
            {
              "index": 2,
              "label": "Unterkunft",
              "expected": {
                "kind": "number",
                "value": 0
              }
            },
            {
              "index": 3,
              "label": "Essen",
              "expected": {
                "kind": "number",
                "value": 12
              }
            },
            {
              "index": 0,
              "label": "Je Reisendem",
              "expected": {
                "kind": "number",
                "value": 6
              }
            },
            {
              "index": 1,
              "label": "Je Tag",
              "expected": {
                "kind": "number",
                "value": 8
              }
            }
          ],
          "inactive": [],
          "rowCount": 6,
          "unit": "€",
          "independentDerivation": "Fractionalduration1.5×2travellers×4food=12;nights0→hotel0"
        },
        "controls": [],
        "defaultExpected": {
          "kind": "number",
          "value": 43000
        },
        "blankField": "nights",
        "domainField": "people",
        "domainValue": 0,
        "counts": [
          "nights",
          "people"
        ]
      },
      {
        "locale": "es",
        "path": "/es/hogar/presupuesto-de-viaje/",
        "h1": "Calculadora de presupuesto de viaje",
        "body": {
          "longDescription": "Combina gastos con bases distintas: alojamiento por noches reales, comida por días y personas, y transporte y actividades como totales del grupo. Noches y días son independientes: cinco días y cuatro noches es un ejemplo, no una relación obligatoria. El reparto por persona es igual y la media diaria incluye gastos puntuales.",
          "howToUse": [
            "Introduce noches enteras no negativas y personas enteras positivas. Los días deben ser positivos; se permite una fracción como duración elegida de comidas.",
            "La tarifa nocturna es para todo el grupo y la comida para una persona al día. Se permiten costes 0.",
            "Escribe transporte y actividades para todos; usa la suma de billetes, no el precio de uno.",
            "Otros gastos son opcionales; vacío significa 0. Introduce todos los importes en una moneda."
          ],
          "howItWorks": "Alojamiento = noches × tarifa nocturna del grupo. Comida = días × personas × tarifa diaria individual. Transporte, actividades y otros se añaden como totales grupales. Parte = total / personas; media diaria = total / días. Se permiten iguales cifras de noches y días.",
          "example": "Dos personas durante 5 días y 4 noches: 4×3500 =14000 alojamiento, 5×2×1200 =12000 comida, 12000 transporte y 5000 actividades; total 43000; 21500 por persona y 8600 al día, en una unidad monetaria elegida. Sin hotel se admiten 0 noches.",
          "faq": [
            {
              "q": "¿Por qué se introducen las noches y los días por separado?",
              "a": "El alojamiento usa noches reservadas reales y la comida los días elegidos. Cinco días y cuatro noches es solo un ejemplo; viajar de noche u organizarse de otra forma cambia la relación."
            },
            {
              "q": "¿El presupuesto de comida es para todos a la vez?",
              "a": "No: introduce el importe de un viajero al día, y la calculadora lo multiplica tanto por los días como por el número de viajeros."
            },
            {
              "q": "¿Dónde van los vuelos?",
              "a": "En transporte, como total de todo el viaje. Si los billetes se compraron por separado, introduce su coste conjunto."
            },
            {
              "q": "¿Qué indica el coste por día?",
              "a": "Todo el presupuesto dividido entre el número de días, gastos únicos como los billetes incluidos. Es una vara de medir para comparar viajes de distinta duración."
            },
            {
              "q": "¿Se aplican tipos de cambio?",
              "a": "No: introduce todos los importes en una misma moneda. Usa antes el conversor si algunos gastos están en otra."
            }
          ],
          "disclaimer": "Escenario de gastos en una moneda, sin prever cambios de divisa ni precios. El reparto igual no contempla gastos personales diferentes; noches, días y tarifas las eliges tú."
        },
        "help": {},
        "sources": [],
        "normal": {
          "inputs": {
            "nights": 2,
            "days": 2.5,
            "people": 3,
            "hotelPerNight": 100,
            "foodPerDayPerPerson": 20,
            "transport": 50,
            "activities": 25,
            "other": 10
          },
          "expected": {
            "kind": "number",
            "value": 435
          },
          "rows": [
            {
              "index": 2,
              "label": "Alojamiento",
              "expected": {
                "kind": "number",
                "value": 200
              }
            },
            {
              "index": 3,
              "label": "Comida",
              "expected": {
                "kind": "number",
                "value": 150
              }
            },
            {
              "index": 0,
              "label": "Por viajero",
              "expected": {
                "kind": "number",
                "value": 145
              }
            },
            {
              "index": 1,
              "label": "Por día",
              "expected": {
                "kind": "number",
                "value": 174
              }
            }
          ],
          "inactive": [],
          "rowCount": 7,
          "unit": "€",
          "independentDerivation": "2×100+2.5×3×20+50+25+10=435;435/3=145;435/2.5=174"
        },
        "boundary": {
          "inputs": {
            "nights": 0,
            "days": 1.5,
            "people": 2,
            "hotelPerNight": 0,
            "foodPerDayPerPerson": 4,
            "transport": 0,
            "activities": 0,
            "other": 0
          },
          "expected": {
            "kind": "number",
            "value": 12
          },
          "rows": [
            {
              "index": 2,
              "label": "Alojamiento",
              "expected": {
                "kind": "number",
                "value": 0
              }
            },
            {
              "index": 3,
              "label": "Comida",
              "expected": {
                "kind": "number",
                "value": 12
              }
            },
            {
              "index": 0,
              "label": "Por viajero",
              "expected": {
                "kind": "number",
                "value": 6
              }
            },
            {
              "index": 1,
              "label": "Por día",
              "expected": {
                "kind": "number",
                "value": 8
              }
            }
          ],
          "inactive": [],
          "rowCount": 6,
          "unit": "€",
          "independentDerivation": "Fractionalduration1.5×2travellers×4food=12;nights0→hotel0"
        },
        "controls": [],
        "defaultExpected": {
          "kind": "number",
          "value": 43000
        },
        "blankField": "nights",
        "domainField": "people",
        "domainValue": 0,
        "counts": [
          "nights",
          "people"
        ]
      }
    ]
  }
];
