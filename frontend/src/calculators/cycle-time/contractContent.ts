import type { CalculatorDef } from '../../lib/types';

// Reviewed original public145 bodies are retained where factual. Native corrections
// are AI authored; human subject and language review remains pending.
type Copy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;
export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Copy> = {
  "ru": {
    "longDescription": "Такт задаёт не линия, а заказчик: это доступное время смены, поделённое на то, сколько единиц за эту смену нужно отгрузить. Дальше фактический цикл сравнивается с тактом — и если он больше, участок не успевает независимо от того, насколько он «быстрый» сам по себе. Именно поэтому загрузка выше ста процентов означает нехватку времени, а не переработку: сокращать нужно цикл или добавлять параллельные посты.",
    "howItWorks": "Такт = чистое доступное время T ÷ спрос D. Требуемый выпуск в час = 60/такт. При известном положительном цикле C: загрузка такта = C/такт × 100 %, возможный средний выпуск = T/C. D — целое число от 1. C=0 означает неизвестный цикл: сравнение и выпуск не выводятся, но такт рассчитан. Выпуск — оценка для постоянного цикла без дополнительных остановок, не гарантированное целое число изделий.",
    "example": "Смена 480 минут на 120 изделий даёт такт 4 минуты; фактические 3,5 минуты — загрузка 87,5 %. При времени 480, спросе 120 и неизвестном цикле 0 такт остаётся 4 минуты, а оценка выпуска не выводится.",
    "howToUse": [
      "Доступное время — это чистое время работы: обеды, пересменки и плановые остановки вычитайте заранее.",
      "Спрос берите за ту же смену, за которую посчитано доступное время, иначе такт выйдет бессмысленным.",
      "Фактический цикл — среднее время на единицу, которое участок показывает сейчас.",
      "Загрузка выше ста процентов означает нехватку времени, а не переработку.",
      "Если фактический цикл неизвестен, введите 0: получите такт без выдуманного выпуска. Дробный возможный выпуск является оценкой, а не обещанием отгрузки."
    ],
    "faq": [
      {
        "q": "Чем такт отличается от времени цикла?",
        "a": "Такт — это требование заказчика, время цикла — способность участка. Такт нельзя «улучшить»: он меняется только вместе со спросом или с длиной смены. Улучшают именно цикл, подтягивая его под такт."
      },
      {
        "q": "Что делать, если цикл больше такта?",
        "a": "Три пути: сократить цикл, добавить параллельный пост или увеличить доступное время. Расчёт показывает, насколько велика нехватка, — из этого видно, хватит ли одной меры."
      },
      {
        "q": "Нужно ли закладывать запас?",
        "a": "Резерв помогает учитывать вариацию цикла, неисправности и потери, но подходящая величина зависит от процесса и измерений. Универсальной нормы 85–95 % такта нет. Для нескольких параллельных постов и разных изделий нужна более подробная модель мощности."
      },
      {
        "q": "Считается ли время наладки?",
        "a": "Только если вы вычли его из доступного времени. Такт считается от чистого времени работы — переналадки, уборка и плановое обслуживание в него входить не должны."
      }
    ],
    "disclaimer": "Одна последовательная линия, чистое время и постоянный цикл. Не модель параллельных мощностей и не гарантия целого выпуска."
  },
  "en": {
    "longDescription": "Takt is set by the customer, not by the line: available shift time divided by the units that shift has to ship. The actual cycle time is then compared against it — and if it is larger, the cell cannot keep up however \"fast\" it feels. That is why a utilisation above one hundred per cent means a shortfall rather than overtime: you must cut the cycle or add parallel stations.",
    "howItWorks": "Takt = net available minutes T ÷ demand D. Required units per hour = 60/takt. For a known positive cycle C, takt utilisation = C/takt × 100% and average possible output = T/C. D is a whole count of at least 1. C=0 means unknown cycle: comparison and capacity rows are omitted while takt remains available. Capacity assumes constant cycle without extra downtime and is not a guaranteed whole output count.",
    "example": "A 480-minute shift for 120 units gives a 4-minute takt; an actual 3.5 minutes is 87.5 % utilisation. With 480 minutes, demand 120 and unknown cycle 0, takt remains 4 minutes and capacity is omitted.",
    "howToUse": [
      "Available time means net working time: subtract breaks, shift handovers and planned stops first.",
      "Take demand for the same shift the available time covers, or the takt is meaningless.",
      "Actual cycle time is the average time per unit the cell currently achieves.",
      "Utilisation above one hundred per cent means a shortfall, not overtime.",
      "If actual cycle is unknown, enter 0 to get takt without an invented output estimate. Fractional capacity is an estimate, not a shipping commitment."
    ],
    "faq": [
      {
        "q": "How does takt differ from cycle time?",
        "a": "Takt is the customer's requirement, cycle time is the cell's ability. Takt cannot be \"improved\": it only moves with demand or shift length. What you improve is the cycle, pulling it under the takt."
      },
      {
        "q": "What if the cycle exceeds the takt?",
        "a": "Three routes: shorten the cycle, add a parallel station, or extend the available time. The calculation shows how large the shortfall is, which tells you whether one measure will do."
      },
      {
        "q": "Should I plan in a margin?",
        "a": "A reserve can account for cycle variation, failures and losses, but its size depends on the process and measurements. There is no universal 85–95% takt target. Parallel stations and mixed products need a more detailed capacity model."
      },
      {
        "q": "Is changeover time included?",
        "a": "Only if you subtracted it from the available time. Takt is computed from net working time — changeovers, cleaning and planned maintenance should not be in it."
      }
    ],
    "disclaimer": "One sequential line, net time and constant cycle. Not a parallel-capacity model or a guarantee of whole completed output."
  },
  "uk": {
    "longDescription": "Такт задає не лінія, а замовник: це доступний час зміни, поділений на те, скільки одиниць за цю зміну потрібно відвантажити. Далі фактичний цикл порівнюється з тактом — і саме це відношення показує, встигає виробництво чи ні.",
    "howItWorks": "Такт = чистий доступний час T ÷ попит D. Потрібний випуск за годину = 60/такт. За відомого додатного циклу C: завантаження = C/такт × 100 %, можливий середній випуск = T/C. D — ціла кількість від 1. C=0 означає невідомий цикл: порівняння й випуск не показуються, але такт обчислено. Випуск припускає сталий цикл без додаткових зупинок і не гарантує цілу кількість виробів.",
    "example": "Зміна 480 хвилин на 120 виробів дає такт 4 хвилини; фактичні 3,5 хвилини — завантаження 87,5 %. Виробництво встигає із запасом у півхвилини на одиницю. За 480 хвилин, попиту 120 та невідомого циклу 0 такт залишається 4 хвилини, випуск не показується.",
    "howToUse": [
      "Введіть доступний час зміни у хвилинах — без перерв і планових зупинок.",
      "Введіть попит: скільки одиниць треба випустити за зміну.",
      "Введіть фактичний час циклу, щоб побачити завантаження.",
      "Якщо фактичний цикл невідомий, введіть 0: отримаєте такт без вигаданого випуску. Дробова потужність є оцінкою, а не обіцянкою відвантаження."
    ],
    "faq": [
      {
        "q": "Чим такт відрізняється від часу циклу?",
        "a": "Такт задає замовник: це темп, у якому треба випускати, щоб покрити попит. Час циклу — те, з якою швидкістю лінія випускає насправді. Виробництво здорове, коли цикл трохи менший за такт."
      },
      {
        "q": "Що входить у доступний час?",
        "a": "Чистий час після перерв, планового обслуговування й переналагоджень. Повна тривалість зміни завищить доступний час і такт, створюючи зайвий уявний запас. Не віднімайте одну зупинку одночасно з часу й повторно з циклу."
      },
      {
        "q": "Що означає завантаження понад 100 %?",
        "a": "Цикл довший за такт, тому за введених часу й попиту одна послідовна лінія не встигає. Можна змінювати цикл, доступний час або кількість паралельних постів; калькулятор не моделює їхнє спільне завантаження."
      },
      {
        "q": "Чому не варто прагнути завантаження рівно 100 %?",
        "a": "За роботи рівно в такт будь-яка незапланована втрата часу може зірвати план. Розмір резерву визначають за реальною мінливістю й допустимим ризиком; автоматичної норми 10–15 % тут немає."
      }
    ],
    "disclaimer": "Одна послідовна лінія, чистий час і сталий цикл. Не модель паралельних потужностей і не гарантія цілого випуску."
  },
  "de": {
    "longDescription": "Den Takt setzt der Kunde und nicht die Linie: die verfügbare Schichtzeit geteilt durch die Einheiten, die diese Schicht ausliefern muss. Die tatsächliche Zykluszeit wird dann dagegen gehalten — ist sie größer, kann die Zelle nicht mithalten, wie „schnell“ sie sich auch anfühlt. Deshalb bedeutet eine Auslastung über hundert Prozent eine Unterdeckung und keine Überstunden: du musst den Zyklus verkürzen oder parallele Stationen hinzufügen.",
    "howItWorks": "Takt = netto verfügbare Minuten T ÷ Nachfrage D. Erforderliche Stückzahl je Stunde = 60/Takt. Für bekannten positiven Zyklus C: Taktauslastung = C/Takt × 100 % und möglicher mittlerer Ausstoß = T/C. D ist eine ganze Anzahl ab 1. C=0 bedeutet unbekannten Zyklus; Vergleich und Kapazität entfallen, der Takt bleibt berechenbar. Kapazität setzt einen konstanten Zyklus ohne zusätzliche Stillstände voraus und garantiert keine ganze Stückzahl.",
    "example": "Eine Schicht von 480 Minuten für 120 Einheiten ergibt einen Takt von 4 Minuten; ein tatsächlicher Zyklus von 3,5 Minuten sind 87,5 % Auslastung. Bei 480 Minuten, Nachfrage 120 und unbekanntem Zyklus 0 bleibt der Takt 4 Minuten; Ausstoß entfällt.",
    "howToUse": [
      "Verfügbare Zeit heißt reine Arbeitszeit: zieh Pausen, Schichtübergaben und geplante Stillstände vorher ab.",
      "Nimm die Nachfrage derselben Schicht, die die verfügbare Zeit abdeckt, sonst ist der Takt sinnlos.",
      "Die tatsächliche Zykluszeit ist die mittlere Zeit je Einheit, die die Zelle derzeit erreicht.",
      "Eine Auslastung über hundert Prozent bedeutet Unterdeckung und keine Überstunden.",
      "Gib bei unbekanntem Zyklus 0 ein: der Takt bleibt ohne erfundenen Ausstoß. Gebrochene Kapazität ist eine Schätzung, keine Lieferzusage."
    ],
    "faq": [
      {
        "q": "Wie unterscheidet sich der Takt von der Zykluszeit?",
        "a": "Der Takt ist die Anforderung des Kunden, die Zykluszeit das Können der Zelle. Der Takt lässt sich nicht „verbessern“: er bewegt sich nur mit der Nachfrage oder der Schichtlänge. Verbessert wird der Zyklus, indem man ihn unter den Takt zieht."
      },
      {
        "q": "Was, wenn der Zyklus den Takt übersteigt?",
        "a": "Drei Wege: den Zyklus verkürzen, eine parallele Station hinzufügen oder die verfügbare Zeit verlängern. Die Rechnung zeigt, wie groß die Unterdeckung ist, und das sagt dir, ob eine Maßnahme reicht."
      },
      {
        "q": "Soll ich eine Reserve einplanen?",
        "a": "Eine Reserve kann Zyklusschwankungen, Ausfälle und Verluste abfangen; ihre Größe hängt von Prozess und Messungen ab. Ein allgemeines Ziel von 85–95 % des Takts gibt es nicht. Parallele Stationen und Produktmix benötigen ein genaueres Kapazitätsmodell."
      },
      {
        "q": "Ist die Rüstzeit enthalten?",
        "a": "Nur, wenn du sie von der verfügbaren Zeit abgezogen hast. Der Takt wird aus reiner Arbeitszeit gerechnet — Rüsten, Reinigen und geplante Wartung gehören nicht hinein."
      }
    ],
    "disclaimer": "Eine sequenzielle Linie, Nettozeit und konstanter Zyklus; kein Modell paralleler Kapazität und keine Garantie ganzer Fertigstücke."
  },
  "es": {
    "longDescription": "El takt lo fija el cliente, no la línea: el tiempo disponible del turno dividido entre las unidades que ese turno tiene que entregar. El tiempo de ciclo real se compara después con él, y si es mayor la célula no puede seguir el ritmo por «rápida» que parezca. Por eso una utilización por encima del cien por cien significa un déficit y no horas extra: hay que recortar el ciclo o añadir puestos en paralelo.",
    "howItWorks": "Takt = minutos netos disponibles T ÷ demanda D. Unidades necesarias por hora = 60/takt. Con ciclo positivo conocido C, utilización = C/takt × 100% y producción media posible = T/C. D es un entero desde 1. C=0 significa ciclo desconocido: se omiten comparación y capacidad, conservando el takt. La capacidad supone ciclo constante sin más paradas y no garantiza una cantidad entera de piezas.",
    "example": "Un turno de 480 minutos para 120 unidades da un takt de 4 minutos; un ciclo real de 3,5 minutos es un 87,5 % de utilización. Con 480 minutos, demanda 120 y ciclo desconocido 0, el takt sigue siendo 4 minutos y se omite capacidad.",
    "howToUse": [
      "El tiempo disponible es el tiempo neto de trabajo: resta antes las pausas, los relevos y las paradas previstas.",
      "Toma la demanda del mismo turno que cubre el tiempo disponible, o el takt pierde sentido.",
      "El tiempo de ciclo real es el tiempo medio por unidad que consigue ahora la célula.",
      "Una utilización por encima del cien por cien significa un déficit, no horas extra.",
      "Si desconoces el ciclo real, introduce 0: obtendrás takt sin una producción inventada. La capacidad fraccionaria es una estimación, no una promesa de entrega."
    ],
    "faq": [
      {
        "q": "¿En qué se diferencia el takt del tiempo de ciclo?",
        "a": "El takt es el requisito del cliente y el tiempo de ciclo, la capacidad de la célula. El takt no se puede «mejorar»: solo se mueve con la demanda o con la duración del turno. Lo que se mejora es el ciclo, llevándolo por debajo del takt."
      },
      {
        "q": "¿Y si el ciclo supera al takt?",
        "a": "Tres caminos: acortar el ciclo, añadir un puesto en paralelo o ampliar el tiempo disponible. El cálculo muestra cuán grande es el déficit, lo que dice si bastará con una sola medida."
      },
      {
        "q": "¿Debo dejar margen en la planificación?",
        "a": "Un margen permite contemplar variación del ciclo, fallos y pérdidas, pero su tamaño depende del proceso y las mediciones. No hay un objetivo universal del 85–95% del takt. Puestos paralelos y productos distintos requieren un modelo más detallado."
      },
      {
        "q": "¿Se incluye el tiempo de cambio de formato?",
        "a": "Solo si lo has restado del tiempo disponible. El takt se calcula con el tiempo neto de trabajo: los cambios de formato, la limpieza y el mantenimiento previsto no deben estar dentro."
      }
    ],
    "disclaimer": "Una línea secuencial, tiempo neto y ciclo constante; no modelo de capacidad paralela ni garantía de unidades completas."
  }
};
