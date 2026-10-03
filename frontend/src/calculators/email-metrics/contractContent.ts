import type { CalculatorDef } from '../../lib/types';

// Reviewed original public145 bodies are retained where factual. Native corrections
// are AI authored; human subject and language review remains pending.
type Copy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;
export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Copy> = {
  "ru": {
    "longDescription": "Знаменатели метрик рассылки различаются: доставляемость делится на отправленные письма, открываемость и кликабельность — на доставленные, а CTOR — на письма с зарегистрированным открытием. Введите уникальные письма хотя бы с одним событием, не все повторные открытия или клики. Открытия зависят от пикселя и защиты приватности; клики тоже могут включать ботов. Эти отношения описывают зарегистрированные события, но сами по себе не доказывают качество темы или текста.",
    "howItWorks": "Доставляемость = D/S × 100 %, открываемость = O/D × 100 %, кликабельность = K/D × 100 %, CTOR = K/O × 100 %. S > 0, 0 ≤ D ≤ S, 0 ≤ O ≤ D, 0 ≤ K ≤ D; все счётчики целые. K может превышать O из-за разных правил отслеживания. При D=0 открываемость и кликабельность не выводятся; при O=0 CTOR не выводится. CTOR может превышать 100 % на такой несогласованной по событиям базе и не является вероятностью.",
    "example": "Из 12 000 отправленных 11 640 доставлено, 3 025 открыто и 412 кликов — доставляемость 97 %, открываемость 25,99 %. При 100 отправленных и 0 доставленных доставляемость 0 %; открываемость, кликабельность и CTOR не выводятся.",
    "howToUse": [
      "Введите, сколько писем было отправлено.",
      "Укажите, сколько из них действительно доставлено.",
      "Введите уникальные письма с открытием и уникальные письма с кликом за ту же кампанию; повторные события не складывайте.",
      "Согласуйте уникальные счётчики и фильтрацию ботов; клик без пиксельного открытия не нужно автоматически считать ошибкой выгрузки."
    ],
    "faq": [
      {
        "q": "Почему открываемость делится на доставленные, а не на отправленные?",
        "a": "Деление на доставленные отделяет доставку от последующих зарегистрированных действий. Проверьте, что платформа использует те же уникальные счётчики и период: её собственная метрика может иметь другую базу. Сам знаменатель не превращает открытия в точную оценку темы."
      },
      {
        "q": "Чем кликабельность отличается от отношения кликов к открытиям?",
        "a": "Кликабельность делит уникальные письма с кликом на доставленные, CTOR — на письма с открытием. Это разные знаменатели. Ни одно отношение отдельно не определяет причину слабого результата: влияют аудитория, предложение, отслеживание и боты."
      },
      {
        "q": "Насколько сегодня надёжна открываемость?",
        "a": "Не всякая зарегистрированная загрузка пикселя означает чтение, а блокировка изображений может скрыть реальное открытие. Автоматические загрузки и боты меняют и временную динамику. Сохраняйте правила фильтрации и проверяйте результат по независимым действиям клиентов."
      },
      {
        "q": "Почему у меня следующий шаг воронки больше предыдущего?",
        "a": "Общее число событий может превышать число писем: тогда нужны уникальные счётчики. Уникальных открытых или кликнутых писем не может быть больше доставленных. Но кликов может быть больше зарегистрированных открытий: изображения блокируются, а некоторые платформы, напротив, добавляют открытие по факту клика."
      }
    ],
    "disclaimer": "Уникальные зарегистрированные события одной кампании. Приватность, блокировки и боты ограничивают интерпретацию; ставки с нулевым знаменателем не выводятся."
  },
  "en": {
    "longDescription": "Email metrics use different denominators: delivery rate uses sent emails, open and click rates use delivered emails, and CTOR uses emails with a recorded open. Enter unique emails with at least one event, not repeated open or click events. Pixel loading and privacy protection affect opens; bots can affect clicks too. The ratios describe recorded events and do not establish the quality of a subject line or message by themselves.",
    "howItWorks": "Delivery = D/S × 100%, open rate = O/D × 100%, click rate = K/D × 100%, CTOR = K/O × 100%. S > 0, 0 ≤ D ≤ S, 0 ≤ O ≤ D, 0 ≤ K ≤ D; all counts are whole. K may exceed O under different tracking rules. D=0 omits open and click rates; O=0 omits CTOR. CTOR can exceed 100% on this event basis and is not a probability.",
    "example": "Of 12,000 sent, 11,640 delivered, 3,025 opened and 412 clicked gives a 97% delivery rate and a 25.99% open rate. With 100 sent and 0 delivered, delivery is 0%; open rate, click rate and CTOR are omitted.",
    "howToUse": [
      "Enter how many emails were sent.",
      "Enter how many were actually delivered.",
      "Enter unique opened and unique clicked emails for the same campaign; do not add repeated events.",
      "Align unique counts and bot filtering; a click without a pixel-recorded open is not automatically an export error."
    ],
    "faq": [
      {
        "q": "Why divide the open rate by delivered rather than sent?",
        "a": "Using delivered emails separates delivery from later recorded actions. Check that your provider uses the same unique counts and period; its own metric may have a different definition. This denominator does not make recorded opens a precise subject-line assessment."
      },
      {
        "q": "What is the difference between the click rate and the click-to-open rate?",
        "a": "Click rate divides unique clicked emails by delivered emails; CTOR divides them by emails with a recorded open. Different denominators answer different descriptive questions. Neither ratio alone diagnoses weak performance: audience, offer, tracking and bots matter."
      },
      {
        "q": "How reliable are open rates now?",
        "a": "A recorded pixel load does not always mean a person read the email; image blocking can hide a real open. Automatic loading and bots can also change trends over time. Keep filtering rules consistent and check independent customer actions."
      },
      {
        "q": "Why is a step in my funnel larger than the one before it?",
        "a": "Total events can exceed email counts, so use unique counts. Unique opened or clicked emails cannot exceed delivered emails. Clicked emails can exceed recorded opens when images are blocked; some providers instead infer an open from a click."
      }
    ],
    "disclaimer": "Unique recorded events from one campaign. Privacy, blocking and bots limit interpretation; zero-denominator rates are omitted."
  },
  "uk": {
    "longDescription": "Знаменники метрик розсилки різні: доставлюваність ділиться на надіслані листи, відкриваність і клікабельність — на доставлені, а CTOR — на листи із зареєстрованим відкриттям. Вводьте унікальні листи хоча б з однією подією, не суму повторних відкриттів чи кліків. Піксель і захист приватності впливають на відкриття, боти можуть впливати й на кліки. Самі відношення не доводять якість теми або тексту.",
    "howItWorks": "Доставлюваність = D/S × 100 %, відкриваність = O/D × 100 %, клікабельність = K/D × 100 %, CTOR = K/O × 100 %. S > 0, 0 ≤ D ≤ S, 0 ≤ O ≤ D, 0 ≤ K ≤ D; усі кількості цілі. K може перевищувати O через різні правила відстеження. За D=0 відкриваність і клікабельність не показуються, за O=0 не показується CTOR. На такій базі подій CTOR може перевищувати 100 % і не є ймовірністю.",
    "example": "З 12 000 надісланих 11 640 доставлено, 3025 відкрито і 412 кліків — доставлюваність 97 %, відкриваність 25,99 %, клікабельність 3,54 %. За 100 надісланих і 0 доставлених доставка 0 %; відкриваність, клікабельність і CTOR не показуються.",
    "howToUse": [
      "Введіть кількість надісланих листів.",
      "Введіть кількість доставлених.",
      "Введіть унікальні листи з відкриттям та з кліком за ту саму кампанію; повторні події не підсумовуйте.",
      "Узгодьте унікальні лічильники й фільтрування ботів; клік без піксельного відкриття не є автоматично помилкою експорту."
    ],
    "faq": [
      {
        "q": "Чому відкриття діляться на доставлені, а не на надіслані?",
        "a": "Доставлені листи є базою подальших зареєстрованих дій, а надіслані — базою доставки. Перевірте унікальні лічильники й один період у своїй платформі. Сам знаменник не робить відкриття точною оцінкою теми."
      },
      {
        "q": "Наскільки надійна статистика відкриттів?",
        "a": "Відкриття можуть завищуватися автоматичним завантаженням або не реєструватися через блокування зображень. Кліки також можуть містити ботів. Порівнюйте метрики з однаковими правилами фільтрації та фактичними діями клієнтів."
      },
      {
        "q": "Що показує відношення кліків до відкриттів?",
        "a": "Це K/O × 100 % за O > 0. Через різне відстеження чисельник може перевищити знаменник, тому відношення не доводить переконливість тексту й може бути понад 100 %. За нульових відкриттів воно не показується."
      },
      {
        "q": "Чому падає доставлюваність?",
        "a": "Причини можуть включати адреси, правила приймального сервера чи технічні налаштування, але сам відсоток їх не встановлює. Перевірте звіт про відмови й визначення доставленого листа. За нульової доставки дві наступні ставки не обчислюються."
      }
    ],
    "disclaimer": "Унікальні зареєстровані події однієї кампанії. Приватність, блокування й боти обмежують висновки; ставки з нульовим знаменником не показуються."
  },
  "de": {
    "longDescription": "E-Mail-Kennzahlen nutzen verschiedene Nenner: Zustellrate bezieht sich auf gesendete E-Mails, Öffnungs- und Klickrate auf zugestellte, CTOR auf E-Mails mit erfasster Öffnung. Gib je E-Mail mindestens ein Ereignis einmal gezählt ein, keine wiederholten Öffnungen oder Klicks. Pixelabruf und Datenschutz verändern Öffnungsdaten; Bots können auch Klicks beeinflussen. Die Quoten beschreiben erfasste Ereignisse und beweisen allein keine Qualität von Betreff oder Inhalt.",
    "howItWorks": "Zustellung = D/S × 100 %, Öffnung = O/D × 100 %, Klickrate = K/D × 100 %, CTOR = K/O × 100 %. S > 0, 0 ≤ D ≤ S, 0 ≤ O ≤ D und 0 ≤ K ≤ D mit ganzen Anzahlen. Unterschiedliche Erfassung kann K > O ergeben. Bei D=0 entfallen Öffnungs- und Klickrate, bei O=0 CTOR. Auf dieser Ereignisbasis kann CTOR über 100 % liegen und ist keine Wahrscheinlichkeit.",
    "example": "Von 12 000 versandten kamen 11 640 an, 3025 wurden geöffnet und 412 geklickt — 97 % Zustellrate und 25,99 % Öffnungsrate. Bei 100 gesendeten und 0 zugestellten beträgt die Zustellrate 0 %; Öffnung, Klickrate und CTOR entfallen.",
    "howToUse": [
      "Trage ein, wie viele E-Mails versandt wurden.",
      "Trage ein, wie viele tatsächlich zugestellt wurden.",
      "Gib einmalig gezählte E-Mails mit Öffnung und mit Klick aus derselben Kampagne ein, keine Summe wiederholter Ereignisse.",
      "Stimme Einzelzählungen und Botfilter ab; ein Klick ohne Pixelöffnung ist nicht automatisch ein Exportfehler."
    ],
    "faq": [
      {
        "q": "Warum teilt die Öffnungsrate durch zugestellt und nicht durch versandt?",
        "a": "Der Nenner zugestellter E-Mails trennt Zustellung von später erfassten Aktionen. Prüfe gleiche Einzelzählung und Zeitraum beim Anbieter; dessen Kennzahl kann anders definiert sein. Öffnungen werden dadurch nicht zur genauen Betreffbewertung."
      },
      {
        "q": "Was ist der Unterschied zwischen Klickrate und Klicks je Öffnung?",
        "a": "Die Klickrate teilt einmalig gezählte E-Mails mit Klick durch Zustellungen, CTOR durch E-Mails mit Öffnung. Die unterschiedlichen Nenner beschreiben verschiedene Beziehungen. Keine Quote allein erklärt schlechte Ergebnisse; Zielgruppe, Angebot, Erfassung und Bots spielen mit."
      },
      {
        "q": "Wie verlässlich sind Öffnungsraten heute?",
        "a": "Ein erfasster Pixelabruf bedeutet nicht immer menschliches Lesen; blockierte Bilder können echte Öffnungen verbergen. Automatische Abrufe und Bots können auch Zeittrends verändern. Nutze gleichbleibende Filter und prüfe unabhängige Kundenaktionen."
      },
      {
        "q": "Warum ist eine Stufe meines Trichters größer als die vorige?",
        "a": "Gesamte Ereignisse können die Zahl der E-Mails übersteigen; nutze Einzelzählungen. E-Mails mit Öffnung oder Klick dürfen Zustellungen nicht übersteigen. Klicks können erfasste Öffnungen übersteigen, wenn Bilder blockiert sind; andere Anbieter leiten eine Öffnung aus einem Klick ab."
      }
    ],
    "disclaimer": "Einmalig gezählte erfasste Ereignisse einer Kampagne; Datenschutz, Blockierung und Bots begrenzen Aussagen. Quoten mit Nullnenner entfallen."
  },
  "es": {
    "longDescription": "Las métricas de correo usan denominadores distintos: entrega sobre enviados, apertura y clic sobre entregados, CTOR sobre correos con apertura registrada. Introduce correos únicos con al menos un evento, no aperturas o clics repetidos. La carga de imágenes y protección de privacidad afectan aperturas; los bots también pueden afectar clics. Estos cocientes describen eventos registrados y no demuestran por sí solos la calidad del asunto o del contenido.",
    "howItWorks": "Entrega = D/S × 100%, apertura = O/D × 100%, clic = K/D × 100%, CTOR = K/O × 100%. S > 0, 0 ≤ D ≤ S, 0 ≤ O ≤ D y 0 ≤ K ≤ D, con cantidades enteras. Distintas reglas de seguimiento pueden dar K > O. Con D=0 se omiten tasas de apertura y clic; con O=0 se omite CTOR. En esta base de eventos CTOR puede superar el 100% y no representa una probabilidad.",
    "example": "De 12 000 enviados, 11 640 entregados, 3025 abiertos y 412 con clic salen un 97 % de entrega y un 25,99 % de apertura. Con 100 enviados y 0 entregados, entrega 0%; se omiten apertura, clic y CTOR.",
    "howToUse": [
      "Introduce cuántos correos se enviaron.",
      "Introduce cuántos se entregaron de verdad.",
      "Introduce correos únicos abiertos y con clic de la misma campaña; no sumes eventos repetidos.",
      "Unifica cantidades únicas y filtros de bots; un clic sin apertura registrada por píxel no es automáticamente un error de exportación."
    ],
    "faq": [
      {
        "q": "¿Por qué la tasa de apertura se divide entre los entregados y no entre los enviados?",
        "a": "Usar entregados separa entrega de acciones posteriores registradas. Comprueba cantidades únicas y periodo del proveedor, cuya métrica puede tener otra base. Ese denominador no convierte aperturas en una evaluación precisa del asunto."
      },
      {
        "q": "¿Qué diferencia hay entre la tasa de clics y la de clics sobre aperturas?",
        "a": "La tasa de clic divide correos únicos con clic entre entregados; CTOR los divide entre correos con apertura registrada. Son denominadores distintos. Ningún cociente diagnostica por sí solo un mal resultado: influyen audiencia, oferta, seguimiento y bots."
      },
      {
        "q": "¿Qué fiabilidad tienen hoy las tasas de apertura?",
        "a": "Una carga registrada del píxel no siempre significa lectura humana; bloquear imágenes puede ocultar una apertura real. Cargas automáticas y bots también cambian tendencias. Mantén filtros coherentes y comprueba acciones independientes del cliente."
      },
      {
        "q": "¿Por qué un paso de mi embudo es mayor que el anterior?",
        "a": "Los eventos totales pueden superar el número de correos; usa cantidades únicas. Los correos únicos abiertos o con clic no superan entregados. Los clics sí pueden superar aperturas registradas con imágenes bloqueadas; algunos proveedores deducen una apertura de un clic."
      }
    ],
    "disclaimer": "Eventos únicos registrados de una campaña; privacidad, bloqueos y bots limitan su interpretación. Se omiten tasas con denominador cero."
  }
};
