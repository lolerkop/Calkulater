import type { CalculatorCopy } from '../../lib/platform/types';

// Existing native content individually reviewed; scoped model and input corrections.
export const automotiveWave10ContractContent = {
  "ru": {
    "longDescription": "Вылет ET — расстояние от привалочной плоскости до середины обода, и он бывает отрицательным: у глубоких дисков плоскость смещена внутрь. Практический вопрос почти всегда один: насколько колесо уйдёт наружу или внутрь, если поставить диск с другим вылетом. Ответ обманчив по знаку — МЕНЬШИЙ вылет выносит колесо НАРУЖУ, — поэтому направление показано словами, а не только числом.",
    "howItWorks": "Вылет назад = ширина/2 + ET + 12,7 мм; смещение = старый ET − новый ET. Ширина — номинальная ширина посадки в дюймах; перед формулой она умножается на 25,4. Добавка 12,7 мм предполагает по 0,5 дюйма на край обода и не измеряет конкретный диск. Сравнение смещения относится к одинаковой ширине: меняется только ET. Ширина положительна, ET может быть любого знака; отрицательный расчётный отступ до внутреннего края выходит за геометрию этой модели.",
    "howToUse": [
      "Ширина диска — в дюймах из маркировки, например 7J означает 7 дюймов.",
      "Вылет ET указан на диске цифрами после букв, бывает отрицательным.",
      "Добавка 12,7 мм — номинальный припуск на край, а не измерение фактической полной ширины.",
      "Проверьте реальные зазоры и разрешённое применение отдельно: изменение ET не является подтверждением совместимости."
    ],
    "example": "Диск 7 дюймов с ET 35 даёт вылет назад 136,6 мм; замена на ET 45 уводит колесо внутрь на 10 мм.",
    "faq": [
      {
        "q": "Почему меньший вылет выносит колесо наружу?",
        "a": "Вылет отсчитывается от привалочной плоскости — той, которой диск прижимается к ступице. Она закреплена на месте, поэтому уменьшение вылета сдвигает середину обода дальше от ступицы, то есть наружу."
      },
      {
        "q": "Насколько можно менять вылет?",
        "a": "Универсального допуска ±5 мм нет. Нужны разрешённые изготовителем размеры и проверка зазоров, крепежа, нагрузки и применимых правил. Этот расчёт не подтверждает совместимость диска с машиной."
      },
      {
        "q": "Чем ET отличается от вылета назад?",
        "a": "ET отсчитывается от середины обода, backspacing — от внутреннего края. Первый пишут на дисках в Европе, второй встречается в американских таблицах; связаны они через половину ширины обода."
      },
      {
        "q": "Спасут ли проставки?",
        "a": "Толщина проставки уменьшает эффективный ET в геометрическом сравнении, но сама по себе не гарантирует совместимость. Тип крепления, длина зацепления и разрешённое применение зависят от конкретной системы; следуйте её инструкции, а не универсальному совету о болтах."
      }
    ]
  },
  "en": {
    "longDescription": "Offset ET is the distance from the mounting face to the centre of the rim, and it can be negative: on deep-dish wheels the face sits inboard. The practical question is nearly always the same — how far will the wheel move in or out with a different offset. The sign is counter-intuitive: a SMALLER offset pushes the wheel OUTWARDS — so the direction is spelled out in words, not just as a number.",
    "howItWorks": "Backspacing = width/2 + ET + 12.7 mm; shift = old ET − new ET. Width is nominal bead-seat width in inches and is multiplied by 25.4 first. The 12.7 mm addition assumes 0.5 inch per rim edge and does not measure a particular wheel. The shift comparison holds width fixed and changes only ET. Width is positive and ET may have either sign; a negative calculated inner-edge distance is outside this model’s geometry.",
    "howToUse": [
      "Rim width in inches from the marking — 7J means 7 inches.",
      "The ET figure is stamped on the wheel and can be negative.",
      "The 12.7 mm addition is a nominal edge allowance, not a measurement of actual overall width.",
      "Check actual clearance and permitted use separately; changing ET does not establish compatibility."
    ],
    "example": "A 7-inch rim at ET 35 gives 136.6 mm backspacing; swapping to ET 45 pulls the wheel 10 mm inwards.",
    "faq": [
      {
        "q": "Why does a smaller offset push the wheel out?",
        "a": "Offset is measured from the mounting face, the surface that clamps to the hub. That face stays put, so reducing the offset moves the rim centre further from the hub — outwards."
      },
      {
        "q": "How much can the offset change?",
        "a": "There is no universal ±5 mm allowance. Manufacturer-approved dimensions and checks of clearance, fasteners, loads and applicable rules are required. This calculation does not establish wheel-to-vehicle compatibility."
      },
      {
        "q": "How does ET differ from backspacing?",
        "a": "ET is measured from the rim centre, backspacing from the inner edge. The first is stamped on European wheels, the second appears in American tables; half the rim width connects them."
      },
      {
        "q": "Do spacers help?",
        "a": "A spacer’s thickness reduces effective ET in the geometric comparison, but does not guarantee compatibility. Mounting type, engagement length and permitted use depend on the particular system; follow its instructions rather than universal bolt advice."
      }
    ]
  },
  "uk": {
    "longDescription": "Виліт ET — знакова відстань між серединою обода та площиною кріплення. За однакової ширини менший ET зміщує колесо назовні, більший — усередину. Інструмент порівнює це зміщення та номінальну відстань до внутрішнього краю, але не перевіряє зазори, міцність або сумісність із конкретним авто.",
    "howItWorks": "Виліт назад дорівнює ширина/2 + ET + 12,7 мм — це відстань від внутрішнього краю до площини кріплення. Зміщення колеса рахується як різниця вилетів: старий ET мінус новий. Ширина — номінальна посадкова ширина в дюймах; спершу вона множиться на 25,4. Доданок 12,7 мм припускає по 0,5 дюйма на край обода й не вимірює конкретний диск. Порівняння зміщення стосується однакової ширини: змінюється тільки ET. Ширина додатна, ET може мати будь-який знак; від’ємна розрахункова відстань до внутрішнього краю виходить за геометрію моделі.",
    "howToUse": [
      "Введіть ширину диска в дюймах.",
      "Введіть штатний виліт ET.",
      "Введіть новий виліт для порівняння."
    ],
    "example": "Диск 7 дюймів з ET 35 дає виліт назад 136,6 мм; заміна на ET 45 уводить колесо всередину на 10 мм.",
    "faq": [
      {
        "q": "Що означає ET 35?",
        "a": "Що площина кріплення зміщена на 35 мм назовні від середини диска. Більший ET уводить колесо всередину арки, менший — виводить назовні."
      },
      {
        "q": "Наскільки можна відхилятися від штатного?",
        "a": "Універсального допуску ±5 мм немає. Потрібні дозволені виробником розміри та перевірка зазорів, кріплення, навантажень і відповідних правил. Цей розрахунок не підтверджує сумісність диска з авто."
      },
      {
        "q": "Чим небезпечний малий виліт?",
        "a": "Зміна ET за однакової ширини змінює положення колеса й може змінити зазори та навантаження. Калькулятор не визначає знос підшипників, керованість або безпечність переобладнання: ці наслідки залежать від конструкції та потребують окремої перевірки."
      },
      {
        "q": "Звідки в формулі 12,7 мм?",
        "a": "12,7 мм — половина дюйма. Тут це номінальний припуск на край обода при переході від посадкової ширини до зовнішнього краю. Фактичні краї різних дисків можуть відрізнятися; для встановлення потрібне реальне вимірювання."
      }
    ]
  },
  "de": {
    "longDescription": "Die Einpresstiefe ET ist der Abstand von der Anlagefläche zur Mitte der Felge, und sie kann negativ sein: bei tief geschüsselten Rädern liegt die Anlagefläche weiter innen. Die praktische Frage ist fast immer dieselbe — wie weit rückt das Rad mit einer anderen ET nach innen oder außen. Das Vorzeichen ist unanschaulich: eine KLEINERE Einpresstiefe drückt das Rad nach AUSSEN — deshalb steht die Richtung hier in Worten und nicht nur als Zahl.",
    "howItWorks": "Rückmaß = Breite/2 + ET + 12,7 mm; Versatz = alte ET − neue ET. Die Breite ist die nominelle Maulweite in Zoll und wird zuerst mit 25,4 multipliziert. Der Zusatz von 12,7 mm nimmt 0,5 Zoll je Felgenrand an und vermisst keine konkrete Felge. Der Versatzvergleich hält die Breite fest und ändert nur ET. Die Breite ist positiv, ET darf beide Vorzeichen haben; ein negativer berechneter Innenrandabstand liegt außerhalb dieser Modellgeometrie.",
    "howToUse": [
      "Felgenbreite in Zoll aus der Kennzeichnung — 7J bedeutet 7 Zoll.",
      "Der ET-Wert ist auf dem Rad eingeprägt und kann negativ sein.",
      "Der Zusatz von 12,7 mm ist ein nomineller Randzuschlag, keine Messung der tatsächlichen Gesamtbreite.",
      "Prüfe tatsächliche Abstände und Freigaben gesondert; eine ET-Änderung bestätigt keine Verträglichkeit."
    ],
    "example": "Eine 7-Zoll-Felge mit ET 35 ergibt 136,6 mm Rückmaß; der Wechsel auf ET 45 zieht das Rad 10 mm nach innen.",
    "faq": [
      {
        "q": "Warum drückt eine kleinere Einpresstiefe das Rad nach außen?",
        "a": "Die ET wird von der Anlagefläche gemessen, also von der Fläche, die an der Nabe anliegt. Diese Fläche bleibt, wo sie ist; eine kleinere ET rückt die Felgenmitte also weiter von der Nabe weg — nach außen."
      },
      {
        "q": "Wie stark darf die Einpresstiefe abweichen?",
        "a": "Es gibt keine allgemeine Toleranz von ±5 mm. Benötigt werden Herstellerfreigaben sowie Prüfungen von Abständen, Befestigung, Lasten und einschlägigen Regeln. Die Rechnung bestätigt keine Fahrzeugverträglichkeit der Felge."
      },
      {
        "q": "Worin unterscheidet sich ET vom Rückmaß?",
        "a": "Die ET wird von der Felgenmitte gemessen, das Rückmaß von der inneren Kante. Das erste ist auf europäischen Rädern eingeprägt, das zweite steht in amerikanischen Tabellen; die halbe Felgenbreite verbindet beide."
      },
      {
        "q": "Helfen Distanzscheiben?",
        "a": "Die Dicke einer Distanzscheibe verringert die wirksame ET im geometrischen Vergleich, garantiert aber keine Verträglichkeit. Befestigungsart, Eingriffslänge und zulässige Nutzung hängen vom konkreten System ab; folge dessen Anleitung statt allgemeinen Schraubenratschlägen."
      }
    ]
  },
  "es": {
    "longDescription": "El ET es la distancia de la cara de apoyo al centro de la llanta, y puede ser negativo: en llantas de plato profundo la cara queda hacia dentro. La pregunta práctica es casi siempre la misma: cuánto se moverá la rueda hacia dentro o hacia fuera con otro ET. El signo es contraintuitivo: un ET MENOR empuja la rueda HACIA FUERA, así que el sentido se explica con palabras y no solo con un número.",
    "howItWorks": "Distancia al plano interior = anchura/2 + ET + 12,7 mm; desplazamiento = ET antiguo − ET nuevo. La anchura es la nominal entre asientos del talón en pulgadas y primero se multiplica por 25,4. Los 12,7 mm añadidos suponen 0,5 pulgadas por borde y no miden una llanta concreta. La comparación mantiene la anchura y cambia solo el ET. La anchura es positiva y el ET admite ambos signos; una distancia calculada negativa al borde interior queda fuera de esta geometría.",
    "howToUse": [
      "Anchura de la llanta en pulgadas según el marcado: 7J significa 7 pulgadas.",
      "La cifra ET va grabada en la llanta y puede ser negativa.",
      "Los 12,7 mm añadidos son un margen nominal de borde, no una medida de anchura total real.",
      "Comprueba holguras y uso autorizado por separado; cambiar el ET no confirma compatibilidad."
    ],
    "example": "Una llanta de 7 pulgadas con ET 35 da 136,6 mm al plano interior; pasar a ET 45 mete la rueda 10 mm hacia dentro.",
    "faq": [
      {
        "q": "¿Por qué un ET menor saca la rueda hacia fuera?",
        "a": "El ET se mide desde la cara de apoyo, la superficie que se aprieta contra la mangueta. Esa cara no se mueve, así que reducir el ET aleja el centro de la llanta de la mangueta: hacia fuera."
      },
      {
        "q": "¿Cuánto puede cambiar el ET?",
        "a": "No hay una tolerancia universal de ±5 mm. Se necesitan dimensiones autorizadas y comprobaciones de holguras, fijación, cargas y reglas aplicables. Este cálculo no confirma la compatibilidad de la llanta con el coche."
      },
      {
        "q": "¿En qué se diferencia el ET del backspacing?",
        "a": "El ET se mide desde el centro de la llanta y el backspacing, desde el borde interior. El primero va grabado en las llantas europeas y el segundo aparece en las tablas americanas; media anchura de llanta los relaciona."
      },
      {
        "q": "¿Ayudan los separadores?",
        "a": "El grosor de un separador reduce el ET efectivo en la comparación geométrica, pero no garantiza compatibilidad. Fijación, longitud de enganche y uso permitido dependen del sistema concreto; sigue sus instrucciones en vez de consejos universales sobre tornillos."
      }
    ]
  }
} satisfies Record<'ru' | 'en' | 'uk' | 'de' | 'es', Partial<CalculatorCopy>>;
