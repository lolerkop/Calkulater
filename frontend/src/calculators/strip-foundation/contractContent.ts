import type { CalculatorCopy } from '../../lib/platform/types';
// Individually read actual immutable145 body; agent-authored amendment is not human approval.
export const buildingWave16ContractContent = {
  "ru": {
    "longDescription": "Считает объём бетонной ленты постоянного прямоугольного сечения. Важно задать длину всех участков по плану, а не автоматически подставить внешний периметр здания. Пересечения требуют коррекции, чтобы не повторить один объём дважды. Чистый объём и добавленный запас показаны раздельно; глубина и ширина берутся из проекта, а не подбираются калькулятором.",
    "howItWorks": "Постоянное прямоугольное сечение: чистый объём V = L·b·h, площадь сечения b·h, с запасом Vₛ = V(1 + w/100), 0 ≤ w ≤ 50 %. L — эквивалентная длина неперекрывающихся участков одинакового сечения. Простое сложение осей пересекающихся лент может повторно посчитать узлы; автоматического вычета пересечений нет. Все размеры положительны и конечны. Выбор глубины, грунт, нагрузки, арматура и опалубка не входят в модель.",
    "howToUse": [
      "Определите эквивалентную длину неперекрывающихся участков одинакового сечения.",
      "Введите ширину и высоту именно бетонной ленты в м.",
      "Выберите собственный запас от 0 до 50 %; проверьте пересечения по плану."
    ],
    "example": "Лента длиной 40 м сечением 0,4 × 0,8 м — это 12,8 м³ бетона; с запасом 5 % заказать нужно 13,44 м³.",
    "faq": [
      {
        "q": "Длину ленты или периметр здания вводить?",
        "a": "Нужна эквивалентная длина всех неперекрывающихся участков одинакового сечения. Внутренние ленты добавляют объём, но пересечения могут считаться дважды при простом сложении осей. Скорректируйте узлы по плану; только наружный периметр не описывает любую сеть лент."
      },
      {
        "q": "Чем это отличается от калькулятора бетона?",
        "a": "Калькулятор бетона считает три формы заливки вообще. Здесь только лента, зато от той величины, которой её реально меряют, и с подписями, которые не дают перепутать длину ленты с габаритом дома."
      },
      {
        "q": "Как учесть песчаную подушку?",
        "a": "Никак — она не бетон. Посчитайте её объём отдельно по той же длине ленты и толщине подсыпки."
      },
      {
        "q": "Нужно ли вычитать арматуру?",
        "a": "Здесь объём арматуры не вычитается: результат — внешний геометрический объём бетонного сечения. Это явное допущение модели, а не утверждение, что сталь всегда несущественна. Для другой учётной модели её вытеснение считайте отдельно."
      }
    ],
    "disclaimer": "Это геометрический подсчёт в описанной модели. Он не подтверждает несущую способность, безопасность или соответствие требованиям проекта; конструктивные параметры проверяют отдельно."
  },
  "en": {
    "longDescription": "Calculates concrete in a strip of constant rectangular section. Use the length of all planned portions rather than automatically entering the building perimeter. Correct intersections so the same volume is not counted twice. Net volume and added reserve are shown separately; depth and width come from the design, not from calculator selection.",
    "howItWorks": "Constant rectangular section: net volume V = L·b·h, section area b·h, with reserve Vₛ = V(1 + w/100), 0 ≤ w ≤ 50%. L is the equivalent length of non-overlapping portions with the same section. Simply summing intersecting strip centrelines can count junctions twice; intersections are not automatically deducted. Dimensions are positive and finite. Depth selection, soil, loads, rebar and formwork are outside this model.",
    "howToUse": [
      "Determine equivalent length of non-overlapping portions of the same section.",
      "Enter width and height of the concrete strip itself in m.",
      "Choose your reserve from 0 to 50%; check intersections against the plan."
    ],
    "example": "A 40 m strip with a 0.4 × 0.8 m section is 12.8 m³ of concrete; with a 5 % allowance you order 13.44 m³.",
    "faq": [
      {
        "q": "Do I enter the strip length or the building perimeter?",
        "a": "Use the equivalent length of all non-overlapping portions of the same section. Internal strips add volume, but simply summing centrelines can count intersections twice. Correct junctions from the plan; the outer perimeter alone does not describe every strip network."
      },
      {
        "q": "How is this different from the concrete calculator?",
        "a": "The concrete calculator covers three pour shapes in general. This one covers only the strip, but from the quantity it is actually measured by, and with labels that stop the strip length being confused with the size of the house."
      },
      {
        "q": "How do I allow for the sand bed?",
        "a": "You do not — it is not concrete. Work its volume out separately from the same strip length and the bedding thickness."
      },
      {
        "q": "Should reinforcement be subtracted?",
        "a": "Rebar volume is not deducted here: the result is the external geometric volume of the concrete section. This is a stated model assumption, not a claim that steel is always negligible. Count displaced volume separately if your accounting requires it."
      }
    ],
    "disclaimer": "This is a geometric quantity calculation within the described model. It does not establish load capacity, safety or project compliance; check design parameters separately."
  },
  "uk": {
    "longDescription": "Рахує бетонну стрічку сталого прямокутного січення. Потрібна довжина всіх ділянок за планом, а не автоматично зовнішній периметр будівлі. Перетини треба скоригувати, щоб не повторити один об’єм двічі. Чистий об’єм і запас показані окремо; глибину та ширину беруть із проєкту, калькулятор їх не підбирає.",
    "howItWorks": "Стале прямокутне січення: чистий об’єм V = L·b·h, площа січення b·h, із запасом Vₛ = V(1 + w/100), 0 ≤ w ≤ 50 %. L — еквівалентна довжина неперекривних ділянок однакового січення. Просте додавання осей перехресних стрічок може двічі врахувати вузли; автоматичного віднімання перетинів немає. Розміри додатні й скінченні. Вибір глибини, ґрунт, навантаження, арматура й опалубка поза моделлю.",
    "howToUse": [
      "Визначте еквівалентну довжину неперекривних ділянок однакового січення.",
      "Введіть ширину й висоту саме бетонної стрічки в м.",
      "Оберіть власний запас від 0 до 50 %; перевірте перетини за планом."
    ],
    "example": "Стрічка довжиною 40 м перерізом 0,4 × 0,8 м — це 12,8 м³ бетону; із запасом 5 % замовити треба 13,44 м³.",
    "faq": [
      {
        "q": "Яку довжину брати?",
        "a": "Введіть еквівалентну довжину неперекривних ділянок однакового січення, включно з внутрішніми стрічками. Недорахунок від одного зовнішнього периметра залежить від плану, а не має універсального мінімуму в чверть. Перетини треба скоригувати окремо."
      },
      {
        "q": "Як рахувати кути?",
        "a": "Самі осьові довжини не гарантують відсутності подвійного підрахунку перетинів. Дві стрічки 10×1 м, що перехрещуються під прямим кутом, мають площу об’єднання 19 м², а не 20 м². Розбийте план на неперекривні частини або визначте еквівалентну довжину."
      },
      {
        "q": "Яка має бути глибина?",
        "a": "Глибину задають за проєктом з урахуванням ґрунту, навантажень та місцевих вимог. Калькулятор об’єму не обирає конструкцію чи глибину закладання; поле — висота саме бетонного січення, без піщаної підготовки."
      },
      {
        "q": "Чи входить сюди опалубка й арматура?",
        "a": "Ні, рахується лише бетон. Дошку на опалубку й арматуру треба рахувати окремо."
      }
    ],
    "disclaimer": "Це геометричний підрахунок в описаній моделі. Він не підтверджує несучу здатність, безпечність чи відповідність проєктним вимогам; конструктивні параметри перевіряють окремо."
  },
  "de": {
    "longDescription": "Berechnet Beton eines Streifens mit konstantem rechteckigem Querschnitt. Länge aller geplanten Teile verwenden statt automatisch des Gebäudeumfangs. Kreuzungen korrigieren, um Volumen nicht doppelt zu zählen. Nettovolumen und Zusatzmenge stehen getrennt; Tiefe und Breite stammen aus der Planung, nicht aus der Rechnerauswahl.",
    "howItWorks": "Konstanter rechteckiger Querschnitt: Nettovolumen V = L·b·h, Querschnitt b·h, mit Zuschlag Vₛ = V(1 + w/100), 0 ≤ w ≤ 50 %. L ist die äquivalente Länge überlappungsfreier Teile gleichen Querschnitts. Das bloße Addieren sich kreuzender Mittellinien kann Knoten doppelt zählen; Kreuzungen werden nicht automatisch abgezogen. Maße sind positiv und endlich. Tiefe, Baugrund, Lasten, Bewehrung und Schalung werden nicht bemessen.",
    "howToUse": [
      "Äquivalente Länge überlappungsfreier Teile gleichen Querschnitts bestimmen.",
      "Breite und Höhe des Betonstreifens selbst in m eingeben.",
      "Eigenen Zuschlag von 0 bis 50 % wählen; Kreuzungen am Plan prüfen."
    ],
    "example": "Ein Streifen von 40 m mit einem Querschnitt von 0,4 × 0,8 m sind 12,8 m³ Beton; mit 5 % Zuschlag bestellst du 13,44 m³.",
    "faq": [
      {
        "q": "Trage ich die Streifenlänge oder den Gebäudeumfang ein?",
        "a": "Äquivalente Länge aller überlappungsfreien Teile gleichen Querschnitts verwenden. Innere Streifen ergänzen Volumen; das bloße Addieren der Mittellinien kann Kreuzungen doppelt zählen. Knoten nach Plan korrigieren; der Außenumfang beschreibt nicht jedes Streifennetz."
      },
      {
        "q": "Wie unterscheidet sich das vom Betonrechner?",
        "a": "Der Betonrechner deckt drei Formen allgemein ab. Dieser deckt nur den Streifen ab, aber über die Größe, in der er tatsächlich gemessen wird, und mit Beschriftungen, die verhindern, dass die Streifenlänge mit der Größe des Hauses verwechselt wird."
      },
      {
        "q": "Wie berücksichtige ich das Sandbett?",
        "a": "Gar nicht — es ist kein Beton. Rechne sein Volumen gesondert aus derselben Streifenlänge und der Bettungsdicke."
      },
      {
        "q": "Soll die Bewehrung abgezogen werden?",
        "a": "Das Stahlvolumen wird hier nicht abgezogen; berechnet wird das äußere geometrische Betonvolumen. Das ist eine Modellannahme, keine Aussage, Stahl sei stets vernachlässigbar. Verdrängtes Volumen bei anderem Mengenansatz gesondert berechnen."
      }
    ],
    "disclaimer": "Dies ist eine geometrische Mengenberechnung im beschriebenen Modell. Tragfähigkeit, Sicherheit und Planungskonformität werden damit nicht bestätigt; Konstruktionsparameter gesondert prüfen."
  },
  "es": {
    "longDescription": "Calcula hormigón de una zapata corrida con sección rectangular constante. Usa la longitud de todos los tramos del plano, no automáticamente el perímetro del edificio. Corrige las intersecciones para no contar dos veces el mismo volumen. Volumen neto y margen aparecen separados; profundidad y anchura proceden del proyecto, no de una selección de la calculadora.",
    "howItWorks": "Sección rectangular constante: volumen neto V = L·b·h, área de sección b·h, con margen Vₛ = V(1 + w/100), 0 ≤ w ≤ 50 %. L es la longitud equivalente de tramos sin solapamiento y con igual sección. Sumar las líneas centrales de zapatas que se cruzan puede contar dos veces las uniones; no se descuentan automáticamente. Las dimensiones son positivas y finitas. No dimensiona profundidad, terreno, cargas, armadura ni encofrado.",
    "howToUse": [
      "Determina longitud equivalente de tramos sin solapamiento e igual sección.",
      "Introduce anchura y altura de la propia sección de hormigón en m.",
      "Elige margen del 0 al 50 %; comprueba intersecciones según plano."
    ],
    "example": "Una zapata de 40 m con sección de 0,4 × 0,8 m son 12,8 m³ de hormigón; con un 5 % de margen pides 13,44 m³.",
    "faq": [
      {
        "q": "¿Introduzco la longitud de la zapata o el perímetro del edificio?",
        "a": "Usa longitud equivalente de todos los tramos sin solapamiento de igual sección. Las zapatas interiores añaden volumen, pero sumar ejes puede contar dos veces las intersecciones. Corrige las uniones según plano; el perímetro exterior no describe cualquier red."
      },
      {
        "q": "¿En qué se diferencia de la calculadora de hormigón?",
        "a": "La calculadora de hormigón cubre tres formas de vertido en general. Esta cubre solo la zapata, pero a partir de la magnitud con la que se mide de verdad, y con etiquetas que impiden confundir la longitud de la zapata con el tamaño de la casa."
      },
      {
        "q": "¿Cómo tengo en cuenta la cama de arena?",
        "a": "No se tiene en cuenta: no es hormigón. Calcula su volumen aparte con la misma longitud de zapata y el espesor de la cama."
      },
      {
        "q": "¿Hay que restar la armadura?",
        "a": "No se descuenta el acero: el resultado es el volumen geométrico exterior de la sección de hormigón. Es una hipótesis declarada, no que el acero siempre sea despreciable. Calcula aparte su desplazamiento si lo exige tu criterio de medición."
      }
    ],
    "disclaimer": "Es un cálculo geométrico de cantidades en el modelo descrito. No acredita capacidad resistente, seguridad ni conformidad con el proyecto; comprueba aparte los parámetros de diseño."
  }
} satisfies Record<'ru'|'en'|'uk'|'de'|'es',Partial<CalculatorCopy>>;
