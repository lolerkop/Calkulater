import type { CalculatorCopy } from '../../lib/platform/types';

// Actual 145 native body individually reviewed; scoped model and input corrections. Agent review is not human approval.
export const buildingWave13ContractContent = {
  "ru": {
    "longDescription": "Рассчитывает равномерное заполнение пролёта балясинами одинаковой ширины. Просветы между ними и у двух крайних опор одинаковы. Находит минимальное число балясин, начиная с одной, при котором положительный просвет не превышает введённый предел. Сам предел задаётся по вашему проекту: расчёт не подтверждает безопасность ограждения.",
    "howItWorks": "Для n балясин шириной b в пролёте L: g = (L−n·b)/(n+1). Выбираем минимальное n от 1 до 10 000 с 0 < g ≤ gmax; шаг осей p = b+g = (L+b)/(n+1). Все размеры — положительные конечные миллиметры, b < L.",
    "howToUse": [
      "Введите чистый пролёт между крайними опорами в миллиметрах.",
      "Укажите ширину балясины и допустимый по проекту просвет.",
      "Отличайте свободный просвет от шага осей: шаг включает ширину балясины."
    ],
    "example": "Пролёт 3000 мм со стойками 40 мм и просветом до 100 мм требует 21 балясину — фактический зазор 98,18 мм.",
    "faq": [
      {
        "q": "Почему просветов на один больше?",
        "a": "Кроме промежутков между балясинами есть два крайних промежутка. Поэтому у n балясин n+1 равных просветов."
      },
      {
        "q": "Может ли просвет быть равен пределу?",
        "a": "Да. В модели действует «не более»: равенство допустимо. Например, L=300 мм, b=40 мм и предел 130 мм дают одну балясину и два просвета по 130 мм."
      },
      {
        "q": "Что означает шаг для одной балясины?",
        "a": "Это расчётный шаг повторяющегося расположения b+g, здесь 170 мм. При одной балясине фактической соседней пары осей нет."
      },
      {
        "q": "Это проверка требований к ограждению?",
        "a": "Нет. Высота, нагрузки, крепления и применимые ограничения не проверяются. В модели минимум одна балясина, максимум 10 000; при отсутствии положительных просветов результат отклоняется."
      }
    ]
  },
  "en": {
    "longDescription": "Calculates an evenly spaced run of equal-width balusters with equal gaps between them and at both ends. It finds the smallest count, starting at one, whose positive clear gap does not exceed your chosen limit. The limit comes from your project; the calculation does not certify a guard as safe.",
    "howItWorks": "For n balusters of width b in run L: g = (L−n·b)/(n+1). Choose the smallest n from 1 to 10,000 satisfying 0 < g ≤ gmax; centre pitch p = b+g = (L+b)/(n+1). All dimensions are positive finite millimetres, with b < L.",
    "howToUse": [
      "Enter the clear run between the end supports in millimetres.",
      "Specify baluster width and the clear gap allowed by your project.",
      "Distinguish clear gap from centre pitch: pitch includes the baluster width."
    ],
    "example": "A 3000 mm run with 40 mm balusters and a 100 mm limit takes 21 balusters — an actual gap of 98.18 mm.",
    "faq": [
      {
        "q": "Why is there one more gap than balusters?",
        "a": "There are two end gaps as well as the spaces between balusters. Thus n balusters have n+1 equal clear gaps."
      },
      {
        "q": "May the gap equal the limit?",
        "a": "Yes: the rule is no greater than the limit. L=300 mm, b=40 mm and a 130 mm limit give one baluster and two 130 mm gaps."
      },
      {
        "q": "What does pitch mean with one baluster?",
        "a": "It is the theoretical repeat pitch b+g, here 170 mm. With one baluster there is no actual adjacent pair of centres."
      },
      {
        "q": "Does this check guard requirements?",
        "a": "No. Height, loads, fixings and applicable restrictions are not checked. The model uses at least one and at most 10,000 balusters and rejects layouts with no positive gaps."
      }
    ],
    "disclaimer": "Results are reference estimates. Verify the inputs before making important decisions."
  },
  "uk": {
    "longDescription": "Розраховує рівномірне заповнення прольоту балясинами однакової ширини з рівними просвітами між ними та біля двох опор. Шукає найменше число, починаючи з однієї, за якого додатний просвіт не перевищує задану межу. Межу беруть із вашого проєкту; розрахунок не підтверджує безпечність огорожі.",
    "howItWorks": "Для n балясин завширшки b у прольоті L: g = (L−n·b)/(n+1). Обираємо найменше n від 1 до 10 000 з 0 < g ≤ gmax; крок осей p = b+g = (L+b)/(n+1). Розміри — додатні скінченні міліметри, b < L.",
    "howToUse": [
      "Введіть чистий проліт між крайніми опорами в міліметрах.",
      "Задайте ширину балясини й дозволений проєктом просвіт.",
      "Відрізняйте вільний просвіт від кроку осей: крок включає ширину балясини."
    ],
    "example": "Проліт 3000 мм зі стійками 40 мм і просвітом до 100 мм потребує 21 балясину — фактичний зазор 98,18 мм.",
    "faq": [
      {
        "q": "Чому просвітів на один більше?",
        "a": "Є два крайні проміжки та проміжки між балясинами. Отже, n балясин мають n+1 рівних просвітів."
      },
      {
        "q": "Чи може просвіт дорівнювати межі?",
        "a": "Так, умова означає «не більше». L=300 мм, b=40 мм і межа 130 мм дають одну балясину й два просвіти по 130 мм."
      },
      {
        "q": "Що означає крок для однієї балясини?",
        "a": "Це теоретичний крок повторення b+g, тут 170 мм. За однієї балясини фактичної сусідньої пари осей немає."
      },
      {
        "q": "Це перевірка вимог до огорожі?",
        "a": "Ні. Висота, навантаження, кріплення й застосовні обмеження не перевіряються. Модель має мінімум одну та максимум 10 000 балясин і відхиляє розташування без додатних просвітів."
      }
    ],
    "disclaimer": "Результати є орієнтовними оцінками. Перед важливими рішеннями перевіряйте дані."
  },
  "de": {
    "longDescription": "Berechnet die gleichmäßige Füllung eines Feldes mit gleich breiten Geländerstäben und gleichen Lücken zwischen den Stäben und an beiden Enden. Gesucht wird die kleinste Anzahl ab einem Stab, bei der die positive Lücke den gewählten Grenzwert nicht überschreitet. Den Grenzwert liefert dein Projekt; die Rechnung bestätigt keine Geländersicherheit.",
    "howItWorks": "Für n Stäbe der Breite b im Feld L gilt g = (L−n·b)/(n+1). Gesucht ist das kleinste n von 1 bis 10.000 mit 0 < g ≤ gmax; Achsabstand p = b+g = (L+b)/(n+1). Alle Maße sind positive endliche Millimeterwerte, b < L.",
    "howToUse": [
      "Gib die lichte Länge zwischen den Endstützen in Millimetern ein.",
      "Trage Stabbreite und die laut Projekt erlaubte Lücke ein.",
      "Unterscheide lichte Lücke und Achsabstand: Der Achsabstand enthält die Stabbreite."
    ],
    "example": "Ein Feld von 3000 mm mit 40 mm breiten Stäben und einer Grenze von 100 mm braucht 21 Stäbe — eine tatsächliche Lücke von 98,18 mm.",
    "faq": [
      {
        "q": "Warum gibt es eine Lücke mehr als Stäbe?",
        "a": "Zu den Zwischenräumen kommen zwei Randlücken. Deshalb haben n Stäbe n+1 gleiche lichte Lücken."
      },
      {
        "q": "Darf die Lücke gleich dem Grenzwert sein?",
        "a": "Ja, die Bedingung lautet höchstens. L=300 mm, b=40 mm und 130 mm Grenzwert ergeben einen Stab und zwei Lücken von je 130 mm."
      },
      {
        "q": "Was bedeutet der Achsabstand bei nur einem Stab?",
        "a": "Es ist der theoretische Wiederholabstand b+g, hier 170 mm. Bei nur einem Stab existiert tatsächlich kein benachbartes Achspaar."
      },
      {
        "q": "Werden Geländeranforderungen geprüft?",
        "a": "Nein. Höhe, Lasten, Befestigungen und geltende Einschränkungen werden nicht geprüft. Das Modell verwendet mindestens einen und höchstens 10.000 Stäbe und lehnt Anordnungen ohne positive Lücken ab."
      }
    ],
    "disclaimer": "Die Ergebnisse sind Orientierungswerte. Prüfe die Eingaben vor wichtigen Entscheidungen."
  },
  "es": {
    "longDescription": "Calcula un tramo de balaustres del mismo ancho con huecos iguales entre ellos y en los dos extremos. Busca la cantidad mínima, desde un balaustre, cuyo hueco positivo no supere el límite elegido. El límite procede de tu proyecto; el cálculo no certifica la seguridad de la barandilla.",
    "howItWorks": "Para n balaustres de ancho b en un tramo L: g = (L−n·b)/(n+1). Se toma el menor n entre 1 y 10.000 con 0 < g ≤ gmax; paso entre ejes p = b+g = (L+b)/(n+1). Las medidas son milímetros positivos y finitos, con b < L.",
    "howToUse": [
      "Introduce la distancia libre entre los apoyos extremos en milímetros.",
      "Indica el ancho del balaustre y el hueco permitido por el proyecto.",
      "Distingue el hueco libre del paso entre ejes: el paso incluye el ancho del balaustre."
    ],
    "example": "Un tramo de 3000 mm con balaustres de 40 mm y un límite de 100 mm lleva 21 balaustres: una separación real de 98,18 mm.",
    "faq": [
      {
        "q": "¿Por qué hay un hueco más que balaustres?",
        "a": "Hay dos huecos extremos además de los situados entre balaustres. Por eso n balaustres tienen n+1 huecos iguales."
      },
      {
        "q": "¿Puede el hueco coincidir con el límite?",
        "a": "Sí, la condición es no superar el límite. L=300 mm, b=40 mm y un límite de 130 mm dan un balaustre y dos huecos de 130 mm."
      },
      {
        "q": "¿Qué significa el paso con un solo balaustre?",
        "a": "Es el paso teórico de repetición b+g, aquí 170 mm. Con un único balaustre no existe una pareja real de ejes vecinos."
      },
      {
        "q": "¿Se comprueban los requisitos de una barandilla?",
        "a": "No. No se revisan altura, cargas, fijaciones ni restricciones aplicables. El modelo utiliza entre uno y 10.000 balaustres y rechaza distribuciones sin huecos positivos."
      }
    ],
    "disclaimer": "Los resultados son estimaciones orientativas. Verifica los datos de partida antes de tomar decisiones importantes."
  }
} satisfies Record<'ru'|'en'|'uk'|'de'|'es', Partial<CalculatorCopy>>;
