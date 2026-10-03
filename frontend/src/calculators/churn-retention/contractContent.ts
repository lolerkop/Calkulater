import type { CalculatorDef } from '../../lib/types';

// Reviewed original public145 bodies are retained where factual. Native corrections
// are AI authored; human subject and language review remains pending.
type Copy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;
export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Copy> = {
  "ru": {
    "longDescription": "Отток измеряет потери исходной группы клиентов: знаменатель — клиенты на начало периода, числитель — ушедшие именно из этой группы. Новые клиенты в знаменатель не входят. Для числа клиентов на конец вводите новых клиентов, которые остались к концу периода; их ранний уход нужно учесть до ввода. Срок 1/c — отдельная геометрическая оценка при постоянной вероятности ухода c, с включённым первым активным периодом, а не установленный срок по одному наблюдению.",
    "howItWorks": "Для начальной группы S, её потерь L и новых оставшихся G: отток = L/S × 100 %, удержание = (S−L)/S × 100 %, на конец = S−L+G, чистый прирост = (G−L)/S × 100 %. Все количества — целые неотрицательные, S > 0 и L ≤ S. При c=L/S > 0 средний срок модели = 1 + (1−c) + (1−c)² + … = 1/c периодов; при c=0 конечная оценка не выводится.",
    "example": "Из 1 000 клиентов ушли 50, пришли 80: отток 5,00 %, удержание 95,00 %, на конец периода 1 030 клиентов. При 100 клиентах,100 ушедших из этой группы и 0 новых удержание 0 %, на конец 0, модельный срок 1 период.",
    "howToUse": [
      "Укажите, сколько клиентов было на начало периода.",
      "Укажите, сколько ушло за период.",
      "Укажите, сколько пришло за период.",
      "Пришедшие в знаменатель оттока не входят.",
      "Для «пришло» считайте только новых клиентов, оставшихся к концу; не включайте их потери в отток начальной группы."
    ],
    "faq": [
      {
        "q": "Почему в знаменателе клиенты на начало, а не на конец?",
        "a": "Чтобы сравнивать уход внутри одной исходной группы. Новички тоже могут уйти в тот же период, но это другая когорта: их потери не смешиваются с L, а уменьшают число G новых оставшихся клиентов."
      },
      {
        "q": "Как отток связан со сроком жизни клиента?",
        "a": "Только при постоянной вероятности ухода и одинаковой длительности периодов. 5 % за месяц дают модельные 20 активных месяцев; при 100 % остаётся первый активный месяц. Это не учитывает изменение оттока по возрасту когорты и не гарантирует будущие платежи."
      },
      {
        "q": "Почему при нулевом оттоке срок жизни не показан?",
        "a": "Формально он бесконечен, а бесконечность на экране означала бы обещание вечного клиента. Нулевой отток за один период — обычное дело, но выводить из него бессмертие нельзя."
      },
      {
        "q": "Чистый прирост может быть отрицательным?",
        "a": "Да, и это важный сигнал: значит, ушло больше, чем пришло, и база сокращается даже при неплохом удержании."
      },
      {
        "q": "Отток считать по клиентам или по деньгам?",
        "a": "Здесь по клиентам. Денежный отток считается отдельно и может отличаться в разы: уход одного крупного клиента почти не влияет на отток по головам."
      }
    ],
    "disclaimer": "Начальная когорта и новые оставшиеся клиенты. Срок 1/c предполагает постоянный отток, а не гарантирует жизнь или платежи клиента."
  },
  "en": {
    "longDescription": "Churn measures losses from the opening customer cohort: divide customers lost from that cohort by customers present at the start. New customers do not enter that denominator. To reconcile the ending count, enter new customers still present at the end, after any early departures. Lifetime 1/c is a separate geometric estimate under constant churn probability c, including the first active period; one observation does not establish a customer lifespan.",
    "howItWorks": "With opening cohort S, its losses L and retained newcomers G: churn = L/S × 100%, retention = (S−L)/S × 100%, ending count = S−L+G, net growth = (G−L)/S × 100%. Counts are whole and nonnegative, S > 0 and L ≤ S. For c=L/S > 0, model lifetime = 1 + (1−c) + (1−c)² + … = 1/c periods; c=0 has no finite estimate.",
    "example": "Of 1,000 customers 50 left and 80 arrived: churn 5.00%, retention 95.00%, ending with 1,030 customers. With 100 opening customers,100 lost and 0 retained newcomers, retention is 0%, ending count 0 and model lifetime 1 period.",
    "howToUse": [
      "Enter how many customers you had at the start of the period.",
      "Enter how many were lost during the period.",
      "Enter how many were gained during the period.",
      "Those gained do not enter the churn denominator.",
      "For newcomers, count only those still present at period end; do not mix their departures into the opening-cohort churn."
    ],
    "faq": [
      {
        "q": "Why the customers at the start rather than at the end?",
        "a": "To measure departures within the same opening cohort. New customers can leave in the same period too, but they form a different cohort: do not mix their departures into L; subtract them from retained newcomers G."
      },
      {
        "q": "How does churn relate to customer lifetime?",
        "a": "Only under constant churn probability and equal period lengths. Monthly churn of 5% gives 20 model active months; 100% still includes the first active month. Cohort-age changes and future payment guarantees are outside this estimate."
      },
      {
        "q": "Why is lifetime hidden at zero churn?",
        "a": "Formally it is infinite, and infinity on screen would promise an everlasting customer. Zero churn in a single period is ordinary enough, but immortality does not follow from it."
      },
      {
        "q": "Can net growth be negative?",
        "a": "Yes, and it is an important signal: more customers left than arrived, so the base is shrinking even with decent retention."
      },
      {
        "q": "Should churn be measured in customers or in revenue?",
        "a": "Here it is customers. Revenue churn is a separate figure and can differ several times over: losing one large account barely moves the headcount number."
      }
    ],
    "disclaimer": "Opening cohort and retained newcomers. Lifetime 1/c assumes constant churn and does not guarantee lifespan or payments."
  },
  "uk": {
    "longDescription": "Відтік вимірює втрати початкової групи: клієнти, що пішли саме з неї, діляться на кількість на початок періоду. Нові клієнти не входять у знаменник. Для підсумкової кількості вводьте нових клієнтів, які залишилися на кінець, уже після їхніх ранніх відходів. Строк 1/c є окремою геометричною оцінкою за сталої ймовірності відходу c, з першим активним періодом; один замір не встановлює фактичний строк життя.",
    "howItWorks": "Для початкової групи S, її втрат L і нових клієнтів, що залишилися, G: відтік = L/S × 100 %, утримання = (S−L)/S × 100 %, на кінець = S−L+G, чистий приріст = (G−L)/S × 100 %. Кількості цілі невід’ємні, S > 0 та L ≤ S. За c=L/S > 0 строк моделі = 1 + (1−c) + (1−c)² + … = 1/c періодів; за c=0 скінченної оцінки немає.",
    "example": "З 1000 клієнтів пішли 50, прийшли 80: відтік 5,00 %, утримання 95,00 %, на кінець періоду 1030 клієнтів. Середній строк життя за такого відтоку — 20 періодів. За 100 початкових клієнтів,100 відходів із групи й 0 нових утримання 0 %, на кінець 0, строк моделі 1 період.",
    "howToUse": [
      "Введіть кількість клієнтів на початок періоду.",
      "Введіть, скільки клієнтів пішло.",
      "За потреби введіть, скільки прийшло, щоб побачити чисте зростання.",
      "Для нових рахуйте лише тих, хто залишився на кінець; їхні втрати не включайте у відтік початкової групи."
    ],
    "faq": [
      {
        "q": "Чому знаменник — клієнти на початок періоду?",
        "a": "Щоб вимірювати відхід у тій самій початковій групі. Нові клієнти також можуть піти в цьому періоді, але їхні втрати не додаються до L: вони зменшують G нових клієнтів, що залишилися."
      },
      {
        "q": "Чим відтік клієнтів відрізняється від відтоку виторгу?",
        "a": "Відтік клієнтів рахує кількість, а відтік виторгу — втрату відповідного доходу. Вони мають різні чисельники. У цьому інструменті великі й малі клієнти мають однакову вагу; грошовий відтік потрібен окремо."
      },
      {
        "q": "Як відтік пов’язаний зі строком життя?",
        "a": "За сталої ймовірності відходу c строк моделі дорівнює 1/c активних періодів, з першим періодом включно. За 5 % на місяць це 20 місяців, за 100 % — один. За нульового відтоку скінченна оцінка не показується; фактичне життя потребує аналізу когорти."
      },
      {
        "q": "Що вважати хорошим утриманням?",
        "a": "Універсального хорошого рівня немає. Узгодьте тривалість періоду, визначення активного клієнта й початкову когорту, потім порівнюйте власну динаміку. Місячний і річний відтік не взаємозамінні."
      }
    ],
    "disclaimer": "Початкова когорта й нові клієнти, що залишилися. Строк 1/c припускає сталий відтік, а не гарантує життя чи платежі."
  },
  "de": {
    "longDescription": "Abwanderung erfasst Verluste der Anfangskohorte: deren Abgänge werden durch ihre Kundenzahl zu Beginn geteilt. Neue Kunden gehören nicht in diesen Nenner. Für den Endbestand werden nur neue Kunden eingegeben, die am Ende noch vorhanden sind, nach frühen Abgängen. Die Dauer 1/c ist eine getrennte geometrische Schätzung bei konstanter Austrittswahrscheinlichkeit c mit eingeschlossenem ersten aktiven Zeitraum; eine Beobachtung bestimmt keine tatsächliche Kundendauer.",
    "howItWorks": "Für Anfangskohorte S, deren Abgänge L und verbleibende neue Kunden G: Abwanderung = L/S × 100 %, Bindung = (S−L)/S × 100 %, Endbestand = S−L+G, Nettozuwachs = (G−L)/S × 100 %. Ganze nicht negative Anzahlen mit S > 0 und L ≤ S sind erforderlich. Bei c=L/S > 0 ist die Modelldauer 1 + (1−c) + (1−c)² + … = 1/c Zeiträume; bei c=0 entfällt eine endliche Schätzung.",
    "example": "Von 1000 Kunden gingen 50 und kamen 80: Abwanderung 5,00 %, Bindung 95,00 %, am Ende 1030 Kunden. Bei 100 Anfangskunden,100 Abgängen und 0 neuen Verbleibenden gelten 0 % Bindung,0 Endbestand und 1 Zeitraum Modelldauer.",
    "howToUse": [
      "Trage ein, wie viele Kunden du zu Beginn des Zeitraums hattest.",
      "Trage ein, wie viele im Zeitraum verloren gingen.",
      "Trage ein, wie viele im Zeitraum hinzukamen.",
      "Die Hinzugekommenen gehen nicht in den Nenner der Abwanderung ein.",
      "Zähle bei neuen Kunden nur die am Ende verbliebenen; mische ihre Abgänge nicht in die Anfangskohorte."
    ],
    "faq": [
      {
        "q": "Warum die Kunden am Anfang und nicht am Ende?",
        "a": "Um Abgänge innerhalb derselben Anfangskohorte zu messen. Auch Neukunden können früh gehen, gehören jedoch zu einer anderen Kohorte: ihre Abgänge werden von G abgezogen und nicht in L gemischt."
      },
      {
        "q": "Wie hängt die Abwanderung mit der Kundendauer zusammen?",
        "a": "Nur bei konstanter Austrittswahrscheinlichkeit und gleichen Zeiträumen. Monatliche 5 % ergeben zwanzig modellierte aktive Monate; bei 100 % bleibt der erste aktive Monat. Änderungen nach Kohortenalter und garantierte Zahlungen sind nicht enthalten."
      },
      {
        "q": "Warum entfällt die Dauer bei einer Abwanderung von null?",
        "a": "Formal ist sie unendlich, und Unendlichkeit auf dem Bildschirm verspräche einen ewigen Kunden. Null Abwanderung in einem einzelnen Zeitraum ist gewöhnlich genug, Unsterblichkeit folgt daraus aber nicht."
      },
      {
        "q": "Darf der Nettozuwachs negativ sein?",
        "a": "Ja, und das ist ein wichtiges Zeichen: es gingen mehr Kunden, als hinzukamen, die Grundlage schrumpft also selbst bei anständiger Bindung."
      },
      {
        "q": "Soll die Abwanderung in Kunden oder in Umsatz gemessen werden?",
        "a": "Hier in Kunden. Die Umsatzabwanderung ist eine eigene Zahl und kann um ein Mehrfaches abweichen: ein einzelner großer Kunde bewegt die Kopfzahl kaum."
      }
    ],
    "disclaimer": "Anfangskohorte und verbleibende Neukunden. Dauer 1/c setzt konstante Abwanderung voraus und garantiert weder Bindung noch Zahlungen."
  },
  "es": {
    "longDescription": "La tasa de bajas mide pérdidas de la cohorte inicial: clientes que abandonaron esa cohorte divididos por los presentes al inicio. Los nuevos no entran en ese denominador. Para conciliar la cantidad final, introduce nuevos clientes que permanecen al final, descontando sus bajas tempranas. La permanencia 1/c es una estimación geométrica separada con probabilidad constante c e incluye el primer periodo activo; una observación no establece la permanencia real.",
    "howItWorks": "Para cohorte inicial S, bajas de ella L y nuevos clientes que permanecen G: bajas = L/S × 100%, retención = (S−L)/S × 100%, cantidad final = S−L+G y crecimiento neto = (G−L)/S × 100%. Las cantidades son enteras no negativas, S > 0 y L ≤ S. Con c=L/S > 0, permanencia del modelo = 1 + (1−c) + (1−c)² + … = 1/c periodos; c=0 no da una estimación finita.",
    "example": "De 1000 clientes se fueron 50 y llegaron 80: rotación del 5,00 %, retención del 95,00 % y 1030 clientes al final. Con 100 clientes iniciales,100 bajas y 0 nuevos que permanecen, retención 0%, cantidad final 0 y permanencia del modelo 1 periodo.",
    "howToUse": [
      "Introduce cuántos clientes tenías al inicio del periodo.",
      "Introduce cuántos se perdieron durante el periodo.",
      "Introduce cuántos se ganaron durante el periodo.",
      "Los ganados no entran en el denominador de la rotación.",
      "Cuenta como nuevos solo los que permanecen al final; no mezcles sus bajas con las de la cohorte inicial."
    ],
    "faq": [
      {
        "q": "¿Por qué los clientes al inicio y no al final?",
        "a": "Para medir bajas de una misma cohorte inicial. Los nuevos también pueden irse en ese periodo, pero son otra cohorte: sus bajas reducen G, no se mezclan con L."
      },
      {
        "q": "¿Qué relación tiene la rotación con la vida del cliente?",
        "a": "Solo con probabilidad de abandono constante y periodos iguales. El 5% mensual da veinte meses activos del modelo; el 100% aún incluye el primer mes. No contempla variaciones por edad de cohorte ni garantiza cobros futuros."
      },
      {
        "q": "¿Por qué se oculta la vida con rotación cero?",
        "a": "Formalmente es infinita, y un infinito en pantalla prometería un cliente eterno. Una rotación de cero en un solo periodo es bastante corriente, pero de ahí no se sigue la inmortalidad."
      },
      {
        "q": "¿El crecimiento neto puede ser negativo?",
        "a": "Sí, y es una señal importante: se fueron más clientes de los que llegaron, así que la base se encoge aun con una retención decente."
      },
      {
        "q": "¿La rotación se mide en clientes o en ingresos?",
        "a": "Aquí, en clientes. La rotación de ingresos es otra cifra y puede diferir varias veces: perder una cuenta grande apenas mueve el recuento de personas."
      }
    ],
    "disclaimer": "Cohorte inicial y nuevos que permanecen. Permanencia 1/c supone bajas constantes, sin garantizar duración ni pagos."
  }
};
