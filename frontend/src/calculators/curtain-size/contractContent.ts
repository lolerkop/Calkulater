// Individual subject copy; native human editorial review pending.
export const contract = {
  "ru": {
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
  "en": {
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
  "uk": {
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
  "de": {
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
  "es": {
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
  }
};
