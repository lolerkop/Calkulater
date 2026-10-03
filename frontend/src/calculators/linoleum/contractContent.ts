import type { CalculatorCopy } from '../../lib/platform/types';

// Actual 145 native body individually reviewed; scoped model and input corrections. Agent review is not human approval.
export const buildingWave13ContractContent = {
  "ru": {
    "longDescription": "У рулонного покрытия своя арифметика, не такая, как у ламината: покупаются погонные метры рулона постоянной ширины, а не площадь. Полосы кладутся вдоль длины комнаты, и их число — это ширина комнаты, делённая на ширину рулона и округлённая вверх; отсюда же берутся и швы, на один меньше числа полос, поэтому комната шириной ровно в рулон обходится без них. Обрезки показаны отдельно: разница между купленным и уложенным — это то, что останется свёрнутым в углу, и знать её лучше заранее, чем обнаружить при доставке.",
    "howItWorks": "Полос n=⌈B/R⌉, погонных метров=n·L·(1+w/100), купленная площадь=погонные метры·R. Площадь пола=L·B, обрезки=купленная площадь−площадь пола, швов=n−1. Размеры положительны и конечны, w от 0 до 50 %. Запас увеличивает только длину полос, не их ширину; направление вдоль L фиксировано.",
    "howToUse": [
      "Введите длину и ширину комнаты.",
      "Укажите фактическую ширину рулона в метрах.",
      "Укажите запас, увеличивающий только длину полос.",
      "Посмотрите на число швов: более широкий рулон может убрать их совсем."
    ],
    "example": "Комната 5 на 3,5 м из рулона 3 м с запасом 5 % забирает 10,5 погонных метров в двух полосах с одним швом.",
    "faq": [
      {
        "q": "Куда должны идти полосы?",
        "a": "Модель располагает полосы вдоль введённой длины L. Для другого направления поменяйте длину и ширину местами и пересчитайте. Рисунок и инструкции конкретного покрытия здесь не моделируются."
      },
      {
        "q": "Как избежать шва?",
        "a": "В этой геометрии одна полоса получается при R≥B. Но равенство ширин не оставляет бокового припуска: запас в поле добавляется только по длине. Размер фактического полотна определяют отдельно."
      },
      {
        "q": "Почему остаётся так много?",
        "a": "Потому что покупается вся ширина рулона. Комната 3,5 м из рулона 3 м требует второй полосы, от которой использовано лишь полметра; остальное — цена того, что шов именно там."
      },
      {
        "q": "Действительно ли нужен запас?",
        "a": "Его выбирают по фактическим замерам и раскладке. Калькулятор не назначает 5 % как обязательную норму и не учитывает раппорт рисунка, боковой припуск или неровную форму комнаты."
      },
      {
        "q": "Работает ли это для винила и ковролина?",
        "a": "Да: любое рулонное покрытие, продаваемое погонным метром при постоянной ширине, подчиняется той же арифметике."
      }
    ]
  },
  "en": {
    "longDescription": "Roll flooring has arithmetic of its own, unlike laminate: you buy running metres of a fixed-width roll, not an area. Strips run along the length of the room, and their number is the room width divided by the roll width, rounded up — which is also where the seams come from, one fewer than the strips, so a room exactly one roll wide has none. The offcut is shown separately: the difference between what you buy and what you lay is what ends up rolled in the corner, and it is better known in advance than discovered on delivery.",
    "howItWorks": "Strips n=⌈B/R⌉; running metres=n·L·(1+w/100); bought area=running metres·R. Floor area=L·B; offcuts=bought area−floor area; seams=n−1. Dimensions are positive and finite, w is 0–50%. Allowance increases strip length only, not width; strips always run along L.",
    "howToUse": [
      "Enter the room length and width.",
      "Enter the actual roll width in metres.",
      "Choose the allowance, which increases strip length only.",
      "Check the seam count: a wider roll may remove it entirely."
    ],
    "example": "A 5 by 3.5 m room on a 3 m roll with 5 % allowance takes 10.5 running metres in two strips with one seam.",
    "faq": [
      {
        "q": "Which way should the strips run?",
        "a": "The model runs strips along entered length L. Swap length and width and recalculate for the other orientation. Pattern matching and product installation instructions are not modeled."
      },
      {
        "q": "How do I avoid a seam?",
        "a": "One strip results when R≥B in this geometry. Equal widths leave no side-trimming margin: the allowance field adds length only. Determine actual cutting dimensions separately."
      },
      {
        "q": "Why is so much left over?",
        "a": "Because you buy whole roll width. A 3.5 m room on a 3 m roll needs a second strip of which only half a metre is used; the rest is the price of the seam being where it is."
      },
      {
        "q": "Is the allowance really needed?",
        "a": "Choose it from measurements and your layout. The calculator does not prescribe 5% or account for pattern repeat, side allowance or irregular room shape."
      },
      {
        "q": "Does this work for vinyl and carpet too?",
        "a": "Yes — any roll goods sold by running metre at a fixed width follow the same arithmetic."
      }
    ],
    "disclaimer": "Results are reference estimates. Verify the inputs before making important decisions."
  },
  "uk": {
    "longDescription": "У рулонного покриття своя арифметика, не така, як у ламінату: купуються погонні метри рулону сталої ширини, а не площа. Смуги кладуться вздовж довжини кімнати, і їхня кількість це ширина кімнати, поділена на ширину рулону й округлена вгору — звідси ж беруться і шви, на один менше за смуги, тож кімната завширшки рівно в рулон обходиться без них. Обрізки показано окремо: різниця між купленим і покладеним це те, що залишиться згорнутим у кутку, і знати її краще заздалегідь, ніж виявити при доставці.",
    "howItWorks": "Смуг n=⌈B/R⌉, погонних метрів=n·L·(1+w/100), куплена площа=погонні метри·R. Площа підлоги=L·B, обрізки=куплена площа−площа підлоги, швів=n−1. Розміри додатні та скінченні, w від 0 до 50 %. Запас збільшує лише довжину смуг, не ширину; напрям уздовж L фіксований.",
    "howToUse": [
      "Введіть довжину і ширину кімнати.",
      "Укажіть фактичну ширину рулону в метрах.",
      "Задайте запас, що збільшує лише довжину смуг.",
      "Погляньте на кількість швів: ширший рулон може прибрати їх зовсім."
    ],
    "example": "Кімната 5 на 3,5 м із рулону 3 м із запасом 5 % забирає 10,5 погонних метрів у двох смугах з одним швом.",
    "faq": [
      {
        "q": "Куди мають іти смуги?",
        "a": "Модель розташовує смуги вздовж введеної довжини L. Для іншого напряму поміняйте довжину й ширину місцями. Рисунок та інструкції конкретного покриття не моделюються."
      },
      {
        "q": "Як уникнути шва?",
        "a": "У цій геометрії одна смуга виходить за R≥B. Рівність ширин не залишає бокового припуску: поле запасу додає лише довжину. Фактичні розміри полотна визначають окремо."
      },
      {
        "q": "Чому лишається так багато?",
        "a": "Бо купується вся ширина рулону. Кімната 3,5 м із рулону 3 м потребує другої смуги, від якої використано лише пів метра; решта це ціна того, що шов саме там."
      },
      {
        "q": "Чи справді потрібен запас?",
        "a": "Його обирають за фактичними вимірами й розкладкою. Калькулятор не призначає 5 % як норму й не враховує рапорт, боковий припуск або неправильну форму кімнати."
      },
      {
        "q": "Чи працює це для вінілу і килима?",
        "a": "Так: будь-яке рулонне покриття, що продається погонним метром при сталій ширині, підпорядковується тій самій арифметиці."
      }
    ],
    "disclaimer": "Результати є орієнтовними оцінками. Перед важливими рішеннями перевіряйте вихідні дані."
  },
  "de": {
    "longDescription": "Bahnenbelag hat eine eigene Rechnung, anders als Laminat: du kaufst Laufmeter einer Rolle fester Breite und keine Fläche. Die Bahnen laufen entlang der Raumlänge, und ihre Zahl ist die Raumbreite geteilt durch die Bahnenbreite, aufgerundet — daher kommen auch die Nähte, eine weniger als Bahnen, ein Raum genau einer Bahnenbreite hat also keine. Der Verschnitt steht gesondert da: der Unterschied zwischen dem, was du kaufst, und dem, was du verlegst, ist das, was gerollt in der Ecke landet, und es ist besser, ihn vorher zu kennen, als ihn bei der Lieferung zu entdecken.",
    "howItWorks": "Bahnen n=⌈B/R⌉; Laufmeter=n·L·(1+w/100); Kauffläche=Laufmeter·R. Bodenfläche=L·B; Verschnitt=Kauffläche−Bodenfläche; Nähte=n−1. Maße sind positiv und endlich, w beträgt 0–50 %. Der Zuschlag erhöht nur die Bahnenlänge, nicht die Breite; die Richtung entlang L ist fest.",
    "howToUse": [
      "Trage Raumlänge und Raumbreite ein.",
      "Gib die tatsächliche Bahnenbreite in Metern ein.",
      "Wähle den Zuschlag, der nur die Bahnenlänge erhöht.",
      "Prüfe die Zahl der Nähte: eine breitere Bahn kann sie ganz vermeiden."
    ],
    "example": "Ein Raum von 5 mal 3,5 m braucht auf einer Bahn von 3 m mit 5 % Zuschlag 10,5 Laufmeter in zwei Bahnen mit einer Naht.",
    "faq": [
      {
        "q": "In welche Richtung sollen die Bahnen laufen?",
        "a": "Das Modell verlegt Bahnen entlang der eingegebenen Länge L. Tausche für die andere Richtung Länge und Breite. Musterabgleich und Produkt-Verlegevorgaben werden nicht modelliert."
      },
      {
        "q": "Wie vermeide ich eine Naht?",
        "a": "In dieser Geometrie genügt eine Bahn bei R≥B. Gleiche Breiten lassen aber keine seitliche Reserve: Das Zuschlagsfeld erhöht nur die Länge. Tatsächliche Zuschnittmaße bestimmst du separat."
      },
      {
        "q": "Warum bleibt so viel übrig?",
        "a": "Weil du die volle Bahnenbreite kaufst. Ein Raum von 3,5 m braucht auf einer Bahn von 3 m eine zweite Bahn, von der nur ein halber Meter gebraucht wird; der Rest ist der Preis dafür, wo die Naht liegt."
      },
      {
        "q": "Ist der Zuschlag wirklich nötig?",
        "a": "Wähle ihn anhand der Messungen und des Verlegeplans. Der Rechner schreibt keine 5 % vor und erfasst weder Rapport noch Seitenreserve oder unregelmäßige Raumformen."
      },
      {
        "q": "Gilt das auch für Vinyl und Teppichboden?",
        "a": "Ja — jede Rollenware, die nach Laufmetern in fester Breite verkauft wird, folgt derselben Rechnung."
      }
    ],
    "disclaimer": "Die Ergebnisse sind Orientierungswerte. Prüfe die Eingaben vor wichtigen Entscheidungen."
  },
  "es": {
    "longDescription": "El suelo en rollo tiene su propia aritmética, distinta a la del laminado: compras metros lineales de un rollo de ancho fijo, no una superficie. Las tiras corren a lo largo de la habitación, y su número es el ancho de la habitación dividido entre el del rollo, redondeado hacia arriba, que es también de donde salen las juntas: una menos que las tiras, así que una habitación exactamente igual de ancha que el rollo no tiene ninguna. El recorte se muestra aparte: la diferencia entre lo que compras y lo que colocas es lo que acaba enrollado en un rincón, y es mejor saberlo antes que descubrirlo con la entrega.",
    "howItWorks": "Tiras n=⌈B/R⌉; metros lineales=n·L·(1+w/100); área comprada=metros lineales·R. Área del suelo=L·B; recorte=área comprada−área del suelo; juntas=n−1. Las dimensiones son positivas y finitas, w va de 0 a 50%. El margen aumenta solo el largo de las tiras, no su ancho; siempre se colocan a lo largo de L.",
    "howToUse": [
      "Introduce el largo y el ancho de la habitación.",
      "Introduce el ancho real del rollo en metros.",
      "Elige el margen, que aumenta solo el largo de las tiras.",
      "Comprueba el número de juntas: un rollo más ancho puede eliminarla del todo."
    ],
    "example": "Una habitación de 5 por 3,5 m con un rollo de 3 m y un 5 % de margen lleva 10,5 metros lineales en dos tiras con una junta.",
    "faq": [
      {
        "q": "¿En qué sentido deben ir las tiras?",
        "a": "El modelo coloca las tiras a lo largo de L. Intercambia largo y ancho para probar la otra orientación. No se modelan dibujo ni instrucciones de colocación del producto."
      },
      {
        "q": "¿Cómo evito una junta?",
        "a": "Una tira basta en esta geometría si R≥B. La igualdad de anchos no deja margen lateral: el campo de margen añade solo largo. Determina por separado las dimensiones reales de corte."
      },
      {
        "q": "¿Por qué sobra tanto?",
        "a": "Porque compras el ancho entero del rollo. Una habitación de 3,5 m con un rollo de 3 m necesita una segunda tira de la que solo se usa medio metro; el resto es el precio de que la junta esté donde está."
      },
      {
        "q": "¿De verdad hace falta el margen?",
        "a": "Elígelo a partir de medidas y despiece. No se prescribe un 5% ni se incluyen repetición del dibujo, margen lateral o forma irregular de la habitación."
      },
      {
        "q": "¿Vale también para vinilo y moqueta?",
        "a": "Sí: cualquier material en rollo que se venda por metro lineal con un ancho fijo sigue la misma aritmética."
      }
    ],
    "disclaimer": "Los resultados son estimaciones orientativas. Verifica los datos de partida antes de tomar decisiones importantes."
  }
} satisfies Record<'ru'|'en'|'uk'|'de'|'es', Partial<CalculatorCopy>>;
