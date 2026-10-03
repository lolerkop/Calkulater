import type { CalculatorCopy } from '../../lib/platform/types';
// Individually read actual immutable145 body; agent-authored amendment is not human approval.
export const buildingWave16ContractContent = {
  "ru": {
    "longDescription": "Делит общий подъём прямого марша на число одинаковых подступенков. Число округляется вверх, чтобы фактическая высота не превысила выбранный вами предел. Верхняя площадка заменяет последнюю проступь, поэтому проступей на одну меньше. Рядом показаны горизонтальная длина, угол одной ступени и 2h + b с выбранным диапазоном модели 0,60–0,65 м; это не проверка строительных норм.",
    "howItWorks": "Один прямой марш: n = ceil(H/hmax) подступенков, h = H/n, проступей n − 1, горизонтальная длина (n − 1)b. Угол atan2(h, b) относится к геометрии одной ступени. Проверка 2h + b в диапазоне 0,60–0,65 м — выбранный ориентир модели, не проверка строительных норм. H, b и hmax положительны и конечны, n — безопасное целое. Один подступенок допускает нулевые проступи и длину; проём, высота прохода и ограждение не рассчитаны.",
    "howToUse": [
      "Измерьте общий подъём между уровнями чистого пола.",
      "Введите глубину проступи в м.",
      "Введите выбранную максимальную высоту подступенка в м.",
      "Сверьте фактическую высоту, длину и ориентир 2h + b; требования проекта проверяются отдельно."
    ],
    "example": "Подъём 2,8 м при пределе 0,18 м даёт 16 подступенков по 0,175 м, 15 проступей и марш длиной 4,2 м.",
    "faq": [
      {
        "q": "Почему проступей на одну меньше, чем подступенков?",
        "a": "Потому что последний подступенок выходит на площадку верхнего этажа, и отдельной ступени там уже нет."
      },
      {
        "q": "Почему число ступеней округляется вверх?",
        "a": "Округление вниз превысило бы введённую максимальную высоту. Это ваш параметр для выбранной модели, а не автоматически проверенная нормативная граница. После ceil общая высота делится поровну между подступенками."
      },
      {
        "q": "Что означает формула 2h + b?",
        "a": "Это удвоенная высота подступенка плюс глубина проступи. Здесь диапазон 0,60–0,65 м используется только как выбранный ориентир шага. Попадание в него не доказывает соответствие нормам или безопасность лестницы."
      },
      {
        "q": "Какой угол наклона считается нормальным?",
        "a": "Калькулятор не назначает нормативный угол. Показано atan2(высота подступенка, проступь); это угол одной ступени, а не atan(полный подъём/длина марша), поскольку проступей на одну меньше. Допустимые параметры и высоту прохода проверяют для конкретного объекта."
      }
    ],
    "disclaimer": "Это геометрический подсчёт в описанной модели. Он не подтверждает несущую способность, безопасность или соответствие требованиям проекта; конструктивные параметры проверяют отдельно."
  },
  "en": {
    "longDescription": "Divides the total rise of one straight flight into equal risers. Their count rounds up so the actual height does not exceed your chosen limit. The upper landing replaces the last tread, giving one fewer tread than risers. It also shows horizontal run, one-step angle and 2h + b against the selected model range of 0.60–0.65 m; this is not a building-code check.",
    "howItWorks": "One straight flight: n = ceil(H/hmax) risers, h = H/n, n − 1 treads and horizontal run (n − 1)b. Angle atan2(h, b) describes one-step geometry. Testing 2h + b against 0.60–0.65 m is a chosen model guideline, not building-code approval. H, b and hmax are positive and finite; n is a safe integer. One riser permits zero treads and run. Opening size, headroom and guards are not calculated.",
    "howToUse": [
      "Measure total rise between finished floor levels.",
      "Enter tread depth in m.",
      "Enter your chosen maximum riser height in m.",
      "Check actual height, run and the 2h + b guideline; project requirements need a separate check."
    ],
    "example": "A 2.8 m rise with a 0.18 m limit gives 16 risers of 0.175 m, 15 treads and a 4.2 m run.",
    "faq": [
      {
        "q": "Why is there one tread fewer than risers?",
        "a": "Because the last riser lands on the upper floor, and there is no separate step there."
      },
      {
        "q": "Why round the step count up?",
        "a": "Rounding down would exceed the entered maximum riser. That is your parameter for this model, not an automatically verified code limit. After ceil, the total height is divided evenly among risers."
      },
      {
        "q": "What does the 2h + b rule mean?",
        "a": "It is twice the riser height plus tread depth. This product uses 0.60–0.65 m only as a selected step guideline. Falling inside it does not establish code compliance or stair safety."
      },
      {
        "q": "What pitch angle is normal?",
        "a": "The calculator does not select a code pitch. It shows atan2(riser height, tread), the angle of one step rather than atan(total rise/run), because there is one fewer tread. Check permitted parameters and headroom for the actual project."
      }
    ],
    "disclaimer": "This is a geometric quantity calculation within the described model. It does not establish load capacity, safety or project compliance; check design parameters separately."
  },
  "uk": {
    "longDescription": "Ділить загальний підйом прямого маршу на однакові підступенки. Кількість округлюється вгору, щоб фактична висота не перевищила обрану вами межу. Верхній майданчик замінює останню проступь, тому проступей на одну менше. Поруч показано горизонтальну довжину, кут однієї сходинки та 2h + b з обраним діапазоном моделі 0,60–0,65 м; це не перевірка будівельних норм.",
    "howItWorks": "Один прямий марш: n = ceil(H/hmax) підступенків, h = H/n, проступей n − 1, горизонтальна довжина (n − 1)b. Кут atan2(h, b) описує геометрію однієї сходинки. Перевірка 2h + b у діапазоні 0,60–0,65 м — обраний орієнтир моделі, не перевірка будівельних норм. H, b та hmax додатні й скінченні, n — безпечне ціле. Один підступенок допускає нульові проступі та довжину. Проріз, висоту проходу й огорожу не розраховано.",
    "howToUse": [
      "Виміряйте загальний підйом між рівнями чистої підлоги.",
      "Введіть глибину проступі в м.",
      "Введіть обрану максимальну висоту підступенка в м.",
      "Перевірте висоту, довжину та орієнтир 2h + b; вимоги проєкту перевіряються окремо."
    ],
    "example": "Підйом 2,8 м за межі 0,18 м дає 16 підступенків по 0,175 м, 15 проступей і марш довжиною 4,2 м.",
    "faq": [
      {
        "q": "Чому проступей на одну менше?",
        "a": "Бо остання сходинка — це вже рівень верхньої підлоги, і окремої проступі для неї не потрібно. Підступенків завжди рівно на один більше."
      },
      {
        "q": "Що таке формула Блонделя?",
        "a": "Це орієнтир 2h + b: подвійна висота підступенка плюс глибина проступі. Тут 600–650 мм — обраний діапазон моделі, не універсальна будівельна норма. За h = 175 мм він відповідає b = 250–300 мм; потрапляння в діапазон не підтверджує безпечність."
      },
      {
        "q": "Яка гранична висота сходинки?",
        "a": "Введіть обрану максимальну висоту для свого проєкту. Калькулятор не призначає універсальні 180 мм і не перевіряє вимоги конкретної будівлі. Після округлення кількості вгору фактична висота дорівнює загальному підйому, поділеному на число підступенків."
      },
      {
        "q": "Чи вистачить місця під марш?",
        "a": "Горизонтальна довжина 4,2 м — проєкція проступей, не потрібна довжина прорізу. Проріз залежить також від висоти проходу, перекриття та розташування маршу. Ці параметри тут не вводяться; окремо перевірте геометрію проєкту."
      }
    ],
    "disclaimer": "Це геометричний підрахунок в описаній моделі. Він не підтверджує несучу здатність, безпечність чи відповідність проєктним вимогам; конструктивні параметри перевіряють окремо."
  },
  "de": {
    "longDescription": "Teilt die Gesamthöhe eines geraden Laufs in gleich hohe Steigungen. Ihre Zahl wird aufgerundet, damit die tatsächliche Höhe deine gewählte Grenze nicht überschreitet. Das obere Podest ersetzt den letzten Auftritt; es gibt einen Auftritt weniger. Daneben stehen waagerechte Länge, Einzelstufenwinkel und 2h + b im gewählten Modellbereich 0,60–0,65 m; dies ist keine Vorschriftenprüfung.",
    "howItWorks": "Ein gerader Lauf: n = ceil(H/hmax) Steigungen, h = H/n, n − 1 Auftritte und waagerechte Länge (n − 1)b. Der Winkel atan2(h, b) beschreibt eine einzelne Stufe. Der Test von 2h + b auf 0,60–0,65 m ist eine gewählte Modellorientierung, keine Bauvorschriftenprüfung. H, b und hmax sind positiv und endlich, n eine sichere ganze Zahl. Eine Steigung erlaubt null Auftritte und Lauflänge. Deckenöffnung, Kopfhöhe und Geländer fehlen.",
    "howToUse": [
      "Gesamthöhe zwischen Fertigfußbodenebenen messen.",
      "Auftrittstiefe in m eingeben.",
      "Gewählte maximale Steigungshöhe in m eingeben.",
      "Tatsächliche Höhe, Länge und 2h + b prüfen; Planungsanforderungen gesondert kontrollieren."
    ],
    "example": "Eine Geschosshöhe von 2,8 m ergibt bei einer Grenze von 0,18 m sechzehn Steigungen zu 0,175 m, fünfzehn Auftritte und eine Lauflänge von 4,2 m.",
    "faq": [
      {
        "q": "Warum gibt es einen Auftritt weniger als Steigungen?",
        "a": "Weil die letzte Steigung auf dem oberen Geschoss endet und es dort keine eigene Stufe gibt."
      },
      {
        "q": "Warum wird die Zahl der Stufen aufgerundet?",
        "a": "Abrunden würde die eingegebene maximale Steigung überschreiten. Sie ist dein Modellparameter, keine automatisch bestätigte Normgrenze. Nach ceil wird die Gesamthöhe gleichmäßig auf die Steigungen verteilt."
      },
      {
        "q": "Was bedeutet die Regel 2h + b?",
        "a": "Es ist die doppelte Steigung plus Auftrittstiefe. Hier dienen 0,60–0,65 m nur als gewählte Schrittorientierung. Ein Wert darin bestätigt weder Vorschriftenkonformität noch Treppensicherheit."
      },
      {
        "q": "Welcher Neigungswinkel ist üblich?",
        "a": "Der Rechner legt keinen normgerechten Winkel fest. Angezeigt wird atan2(Steigung, Auftritt), der Winkel einer Stufe statt atan(Gesamthöhe/Lauflänge), da es einen Auftritt weniger gibt. Zulässige Maße und Kopfhöhe objektspezifisch prüfen."
      }
    ],
    "disclaimer": "Dies ist eine geometrische Mengenberechnung im beschriebenen Modell. Tragfähigkeit, Sicherheit und Planungskonformität werden damit nicht bestätigt; Konstruktionsparameter gesondert prüfen.",
    "seoDescription": "Berechne Steigungszahl, Steigungshöhe und Lauflänge einer geraden Treppe aus Gesamthöhe, gewählter Maximalsteigung und Auftrittstiefe."
  },
  "es": {
    "longDescription": "Divide el desnivel de un tramo recto en contrahuellas iguales. Su número se redondea hacia arriba para no superar el límite que eliges. El rellano superior sustituye la última huella, de modo que hay una huella menos. También muestra desarrollo horizontal, ángulo de una grada y 2h + b frente al intervalo elegido de 0,60–0,65 m; no comprueba normativa.",
    "howItWorks": "Un tramo recto: n = ceil(H/hmax) contrahuellas, h = H/n, n − 1 huellas y desarrollo horizontal (n − 1)b. El ángulo atan2(h, b) describe una sola grada. Comprobar 2h + b entre 0,60 y 0,65 m es una orientación elegida del modelo, no una aprobación normativa. H, b y hmax son positivos y finitos; n es un entero seguro. Una contrahuella admite cero huellas y desarrollo. No calcula el hueco, altura libre ni protecciones.",
    "howToUse": [
      "Mide el desnivel entre pavimentos acabados.",
      "Introduce profundidad de huella en m.",
      "Introduce la contrahuella máxima elegida en m.",
      "Comprueba altura, desarrollo y orientación 2h + b; revisa aparte los requisitos del proyecto."
    ],
    "example": "Un desnivel de 2,8 m con un límite de 0,18 m da 16 contrahuellas de 0,175 m, 15 huellas y un tramo de 4,2 m.",
    "faq": [
      {
        "q": "¿Por qué hay una huella menos que contrahuellas?",
        "a": "Porque la última contrahuella llega al piso superior, y allí no hay ningún peldaño aparte."
      },
      {
        "q": "¿Por qué se redondea hacia arriba el número de peldaños?",
        "a": "Redondear hacia abajo superaría la contrahuella máxima introducida. Es tu parámetro del modelo, no un límite normativo comprobado. Tras ceil, la altura total se reparte por igual entre contrahuellas."
      },
      {
        "q": "¿Qué significa la regla 2h + b?",
        "a": "Es el doble de la contrahuella más la huella. Este producto usa 0,60–0,65 m solo como orientación de paso elegida. Estar dentro no acredita cumplimiento normativo ni seguridad."
      },
      {
        "q": "¿Qué ángulo de inclinación es normal?",
        "a": "La calculadora no fija un ángulo normativo. Muestra atan2(contrahuella, huella), el ángulo de una grada, no atan(altura total/desarrollo), pues hay una huella menos. Comprueba parámetros permitidos y altura libre para el proyecto concreto."
      }
    ],
    "disclaimer": "Es un cálculo geométrico de cantidades en el modelo descrito. No acredita capacidad resistente, seguridad ni conformidad con el proyecto; comprueba aparte los parámetros de diseño."
  }
} satisfies Record<'ru'|'en'|'uk'|'de'|'es',Partial<CalculatorCopy>>;
