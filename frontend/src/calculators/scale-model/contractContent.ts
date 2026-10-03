import type { CalculatorCopy } from '../../lib/platform/types';
type Body=Pick<CalculatorCopy,'longDescription'|'howToUse'|'howItWorks'|'example'|'faq'>;
export const contractContent:Record<'ru' | 'en' | 'uk' | 'de' | 'es',Body> = {
  "ru": {
    "longDescription": "Пересчитывает размеры в три стороны: каким выйдет размер модели, какой размер был у натуры и в каком масштабе сделана уже готовая пара размеров. Знаменатель масштаба здесь первоклассный вход в словаре моделиста — 1:87, 1:43, 1:72, — а не безымянный член пропорции: переворачивать её в уме не нужно. Ответ приходит в миллиметрах, а найденный масштаб печатается привычной записью «1:N».",
    "howToUse": [
      "Выберите, что нужно найти: размер модели, размер натуры или сам масштаб.",
      "Вводите размеры в миллиметрах — так подписаны чертежи и так измеряют модели.",
      "Знаменатель масштаба — второе число записи: у 1:87 это 87.",
      "Вводятся только две известные величины; искомое поле скрыто и не участвует в расчёте."
    ],
    "howItWorks": "Размер модели = натура ÷ знаменатель; размер натуры = модель × знаменатель; масштаб = натура ÷ модель. Вводятся только две известные величины; искомое поле скрыто и не участвует в расчёте. Размеры в мм должны быть положительными, N>0. При N>1 модель меньше натуры, при 0<N<1 — больше. Это линейный масштаб; вывод округлён и не задаёт производственный допуск.",
    "example": "Вагон длиной 4350 мм в масштабе 1:87 даёт модель 50 мм.",
    "faq": [
      {
        "q": "Что означает вторая цифра в записи 1:87?",
        "a": "N задаёт отношение размера натуры к размеру модели. При 1:87 один миллиметр модели соответствует 87мм натуры; если 0<N<1, получается увеличение."
      },
      {
        "q": "Чем это отличается от калькулятора пропорции?",
        "a": "Пропорция решает безымянное a : b = c : d, и знаменатель приходится ставить самому. Здесь масштаб — отдельное поле, ответ идёт в миллиметрах, а найденный масштаб выводится записью «1:N»."
      },
      {
        "q": "Масштаб получился дробным — это ошибка?",
        "a": "Нет. Пара произвольных размеров редко даёт круглое число: 1:12,5 означает, что натура ровно в 12,5 раза больше. Для стандартных линеек выбирайте ближайший принятый масштаб."
      },
      {
        "q": "Работает ли расчёт для площадей и объёмов?",
        "a": "Поля считают линейные размеры. Площадь уменьшается в N², объём — в N³, поэтому подставлять сюда квадратные метры нельзя."
      }
    ]
  },
  "en": {
    "longDescription": "Converts three ways: what the model size will be, what the original measured, and what scale an existing pair of sizes represents. The scale denominator is a first-class input in a modeller's own vocabulary — 1:87, 1:43, 1:72 — not an anonymous term of a proportion you have to arrange yourself. Answers come in millimetres, and a scale you look up is printed the familiar way, as 1:N.",
    "howToUse": [
      "Choose what to find: the model size, the real size, or the scale itself.",
      "Enter sizes in millimetres — that is how drawings are marked and models are measured.",
      "The scale denominator is the second number of the notation: for 1:87 it is 87.",
      "Only the two known quantities are entered; the unknown field is hidden and ignored."
    ],
    "howItWorks": "Model = original ÷ denominator; original = model × denominator; scale = original ÷ model. Only the two known quantities are entered; the unknown field is hidden and ignored. Lengths in mm must be positive and N>0. N>1 reduces the model and 0<N<1 enlarges it. This is a linear scale; displayed rounding does not set a manufacturing tolerance.",
    "example": "A 4350 mm wagon at 1:87 gives a 50 mm model.",
    "faq": [
      {
        "q": "What does the second number in 1:87 mean?",
        "a": "N is the original length divided by model length. At 1:87 one model millimetre corresponds to 87mm of the original;0<N<1 produces an enlargement."
      },
      {
        "q": "How is this different from a proportion calculator?",
        "a": "A proportion solves an anonymous a : b = c : d and leaves you to place the denominator. Here the scale is its own field, answers carry millimetres, and a scale you look up prints as 1:N."
      },
      {
        "q": "The scale came out fractional — is that wrong?",
        "a": "No. An arbitrary pair of sizes rarely lands on a round number: 1:12.5 simply means the original is 12.5 times larger. For standard rulers pick the nearest accepted scale."
      },
      {
        "q": "Does it work for areas and volumes?",
        "a": "The fields handle linear sizes. Area shrinks by N² and volume by N³, so square metres must not be entered here."
      }
    ]
  },
  "uk": {
    "longDescription": "Масштаб 1:N пов’язує лінійний розмір натури й моделі. Калькулятор знаходить розмір моделі, розмір натури або знаменник N за двома відомими величинами в міліметрах. Він не вибирає стандарт чи типорозмір виробника; перевірте потрібне значення у своєму кресленні.",
    "howToUse": [
      "Виберіть, що шукати: розмір моделі, розмір натури чи сам масштаб.",
      "Введіть відомі величини в однакових одиницях.",
      "Прочитайте результат."
    ],
    "howItWorks": "Розмір моделі дорівнює натура ÷ знаменник масштабу; розмір натури — модель × знаменник; сам масштаб — натура ÷ модель. Усі три задачі розв’язуються одним співвідношенням, тому одиниці мають бути однаковими з обох боків. Вводяться лише дві відомі величини; невідоме поле приховане й не враховується. Розміри в мм мають бути додатними, N>0. При N>1 модель менша за натуру, при 0<N<1 — більша. Це лінійний масштаб; округлення показу не задає виробничого допуску.",
    "example": "Вагон завдовжки 4350мм у масштабі 1:87 дає модель 50мм. При 1:160 довжина дорівнює 27,1875мм, округлений показ 27,188мм.",
    "faq": [
      {
        "q": "Що означає запис 1:87?",
        "a": "N — це відношення розміру натури до розміру моделі. При 1:87 один міліметр моделі відповідає 87мм натури; при 0<N<1 виходить збільшення."
      },
      {
        "q": "Як масштаб впливає на площу й об’єм?",
        "a": "Для геометрично подібних тіл площа змінюється в N², об’єм — у N³. Маса так зміниться лише за однакової густини й подібної заповненості; порожниста модель з іншого матеріалу не підпорядковується цьому припущенню. Поля тут рахують лише довжину."
      },
      {
        "q": "Який масштаб обрати?",
        "a": "Використайте масштаб свого креслення або виробу. Значення 1:87,1:160 чи 1:72 можна ввести як 87,160 і 72; сторінка не визначає універсальний ряд для певного виду моделей."
      },
      {
        "q": "Чи можна змішувати масштаби?",
        "a": "Порівняйте лінійні розміри за кожним N. Придатність деталей і бажаний вигляд діорами залежать від конкретних виробів; калькулятор не перевіряє їх сумісність."
      }
    ]
  },
  "de": {
    "longDescription": "Rechnet in drei Richtungen: wie groß das Modellmaß wird, wie groß das Original war und welchen Maßstab ein vorhandenes Maßpaar darstellt. Der Nenner des Maßstabs ist ein eigenständiges Eingabefeld in der Sprache des Modellbaus — 1:87, 1:43, 1:72 — und kein namenloses Glied einer Verhältnisgleichung, das du selbst einsortieren müsstest. Die Antworten kommen in Millimetern, und ein ermittelter Maßstab wird in der vertrauten Form als 1:N ausgegeben.",
    "howToUse": [
      "Wähle, was gesucht ist: das Modellmaß, das Maß am Original oder der Maßstab selbst.",
      "Trage die Maße in Millimetern ein — so sind Zeichnungen beschriftet und so werden Modelle gemessen.",
      "Der Nenner des Maßstabs ist die zweite Zahl der Schreibweise: bei 1:87 ist er 87.",
      "Nur die beiden bekannten Größen werden eingegeben; das gesuchte Feld ist ausgeblendet und wird ignoriert."
    ],
    "howItWorks": "Modell = Original ÷ Nenner; Original = Modell × Nenner; Maßstab = Original ÷ Modell. Nur die beiden bekannten Größen werden eingegeben; das gesuchte Feld ist ausgeblendet und wird ignoriert. Längen in mm müssen positiv sein, N>0. N>1 verkleinert das Modell,0<N<1 vergrößert es. Dies ist ein linearer Maßstab; die Anzeigerundung ist keine Fertigungstoleranz.",
    "example": "Ein Waggon mit 4350 mm ergibt in 1:87 ein Modell von 50 mm.",
    "faq": [
      {
        "q": "Was bedeutet die zweite Zahl in 1:87?",
        "a": "N ist das Verhältnis von Original- zu Modelllänge. Bei 1:87 entspricht ein Modellmillimeter 87mm des Originals;0<N<1 ergibt eine Vergrößerung."
      },
      {
        "q": "Wie unterscheidet sich das von einem Rechner für Verhältnisse?",
        "a": "Ein Verhältnis löst ein namenloses a : b = c : d und überlässt dir, wo der Nenner hingehört. Hier ist der Maßstab ein eigenes Feld, die Antworten tragen Millimeter, und ein ermittelter Maßstab erscheint als 1:N."
      },
      {
        "q": "Der Maßstab kam gebrochen heraus — ist das falsch?",
        "a": "Nein. Ein beliebiges Maßpaar landet selten auf einer runden Zahl: 1:12,5 heißt schlicht, dass das Original 12,5-mal größer ist. Für die üblichen Baugrößen nimm den nächstgelegenen anerkannten Maßstab."
      },
      {
        "q": "Gilt das auch für Flächen und Volumen?",
        "a": "Die Felder behandeln lineare Maße. Eine Fläche schrumpft um N² und ein Volumen um N³, Quadratmeter dürfen hier also nicht eingetragen werden."
      }
    ]
  },
  "es": {
    "longDescription": "Convierte en tres sentidos: cuál será la medida de la maqueta, cuánto medía el original y qué escala representa un par de medidas ya existente. El denominador de la escala es una entrada de primera clase en el vocabulario propio del modelista —1:87, 1:43, 1:72— y no un término anónimo de una proporción que tengas que colocar tú. Las respuestas vienen en milímetros, y una escala que consultes se imprime de la manera habitual, como 1:N.",
    "howToUse": [
      "Elige qué hallar: la medida de la maqueta, la real o la propia escala.",
      "Introduce las medidas en milímetros: así se acotan los planos y se miden las maquetas.",
      "El denominador de la escala es el segundo número de la notación: en 1:87 es 87.",
      "Solo se introducen las dos magnitudes conocidas; el campo desconocido queda oculto y se ignora."
    ],
    "howItWorks": "Maqueta = original ÷ denominador; original = maqueta × denominador; escala = original ÷ maqueta. Solo se introducen las dos magnitudes conocidas; el campo desconocido queda oculto y se ignora. Las longitudes en mm deben ser positivas y N>0. N>1 reduce la maqueta y 0<N<1 la amplía. Es una escala lineal; el redondeo mostrado no fija una tolerancia de fabricación.",
    "example": "Un vagón de 4350 mm a escala 1:87 da una maqueta de 50 mm.",
    "faq": [
      {
        "q": "¿Qué significa el segundo número de 1:87?",
        "a": "N es la longitud del original dividida por la de la maqueta. A 1:87 un milímetro de maqueta corresponde a 87mm del original;0<N<1 produce una ampliación."
      },
      {
        "q": "¿En qué se diferencia de una calculadora de proporciones?",
        "a": "Una proporción resuelve un anónimo a : b = c : d y te deja a ti colocar el denominador. Aquí la escala es un campo propio, las respuestas llevan milímetros y una escala consultada se imprime como 1:N."
      },
      {
        "q": "La escala ha salido con decimales, ¿está mal?",
        "a": "No. Un par arbitrario de medidas rara vez cae en un número redondo: 1:12,5 significa simplemente que el original es 12,5 veces mayor. Para reglas normalizadas, elige la escala aceptada más próxima."
      },
      {
        "q": "¿Sirve para superficies y volúmenes?",
        "a": "Los campos manejan medidas lineales. La superficie se reduce por N² y el volumen por N³, así que aquí no deben introducirse metros cuadrados."
      }
    ]
  }
};
