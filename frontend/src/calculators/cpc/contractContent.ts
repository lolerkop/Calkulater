import type { CalculatorDef } from '../../lib/types';
type Copy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;
export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Copy> = {
  ru: {
    longDescription: 'Средняя цена клика показывает фактические рекламные расходы на один зарегистрированный клик. Это не максимальная ставка аукциона и не стоимость клиента. Если известны показы той же кампании, рядом появляются CPM и CTR: они связывают стоимость размещения с числом кликов. Эти отношения помогают сравнить отчёты, но сами по себе не доказывают причину изменения цены или прибыльность рекламы.',
    howToUse: ['Возьмите фактически потраченные средства и клики из одного отчёта за один период.', 'Расход и число кликов должны быть положительными; клики и известные показы — целые количества в безопасном числовом диапазоне.', 'Если показы неизвестны, оставьте поле пустым или введите 0: дополнительные CPM и CTR не появятся.', 'Используйте одну валюту. Сравните ещё конверсии, стоимость привлечения и качество заказов: валютного пересчёта и оценки продаж здесь нет.'],
    howItWorks: 'CPC = расход C / клики K. При показах I > 0: CPM = 1000C/I и CTR = 100K/I процентов. Для одного набора данных CPC = CPM/(10 × CTR в процентах). Форма требует K ≤ I, если показы указаны; отчёты с другой системой подсчёта следует согласовать заранее. Промежуточные значения не округляются, обычные суммы и проценты показаны с двумя знаками; очень малые ненулевые результаты сохраняются.',
    example: 'Расход 36 000 денежных единиц, 1 450 кликов и 92 000 показов: CPC 24,83, CPM 391,30 и CTR 1,58 %. При расходе 5 200 и 260 кликах без показов CPC равен 20,00; CPM и CTR не рассчитываются. При нуле кликов средняя цена клика не имеет определённого значения.',
    faq: [
      { q: 'Средний CPC равен установленной ставке?', a: 'Нет. Ставка ограничивает или направляет участие в аукционе, а средний CPC делит фактические расходы на фактические клики. Они могут различаться.' },
      { q: 'Можно ли установить причину роста CPC по CPM и CTR?', a: 'Формула покажет, как изменились отношения при согласованной базе. Причины требуют проверки площадок, аудитории, ставок, формата и учёта кликов; изменение метрик само по себе не доказывает сбой объявления.' },
      { q: 'Что остаётся доступным без числа показов?', a: 'Цена клика по расходам и кликам. Пустое поле или 0 означает неизвестные показы, а не измеренный нулевой CPM. Нулевые клики для CPC не подходят.' },
      { q: 'Когда дешёвые клики могут быть невыгодными?', a: 'Когда они реже приводят к подходящим заказам или дают меньший доход. Сравнивайте кампании при одинаковой атрибуции и проверяйте стоимость результата; универсального порога CPC или CTR здесь нет.' },
    ],
    disclaimer: 'Средние показатели согласованного рекламного отчёта. Не прогнозирует аукционные ставки, продажи, прибыль или валютный курс.',
  },
  en: {
    longDescription: 'Average CPC divides observed advertising spend by recorded clicks. It describes the traffic purchased, rather than the maximum auction bid or the cost of acquiring a customer. Impressions from the same campaign add CPM and CTR, making the cost and click counts easier to reconcile. Those relationships help compare reports; they do not establish why an auction changed or whether a campaign makes money.',
    howToUse: ['Use actual spend and clicks from the same campaign report and reporting period.', 'Spend and clicks must be positive. Clicks and reported impressions must be whole counts within the supported safe integer range.', 'Leave impressions blank or enter 0 when unknown; CPM and CTR are then omitted.', 'Use one currency throughout. Review conversions and order quality alongside CPC; no exchange rate or sales forecast is applied.'],
    howItWorks: 'With spend C, clicks K and known impressions I: CPC = C/K, CPM = 1000C/I and CTR = 100K/I percent. On that same basis CPC = CPM/(10 × CTR expressed as a percentage). This form requires K ≤ I when impressions are supplied; reconcile a report using a different counting basis first. Intermediate values remain unrounded. Ordinary amounts and percentages use two decimal places, with smaller nonzero values retained.',
    example: 'Spend of 36,000 monetary units, 1,450 clicks and 92,000 impressions gives CPC 24.83, CPM 391.30 and CTR 1.58%. With spend 5,200 and 260 clicks but no impressions, CPC is 20.00 and the other two metrics are omitted. Zero clicks give no defined average CPC.',
    faq: [
      { q: 'Does average CPC equal the bid entered in the ad account?', a: 'No. A bid controls auction participation; average CPC uses actual spend and recorded clicks. It need not equal a maximum CPC bid.' },
      { q: 'Do CPM and CTR prove why CPC increased?', a: 'They show the arithmetic relationship on a matched reporting basis. Placement mix, targeting, bids, format and click measurement need separate investigation before assigning a cause.' },
      { q: 'Which calculation survives when impressions are missing?', a: 'CPC still uses spend and clicks. Blank or 0 impressions means unknown data, rather than a measured zero CPM. A zero click denominator is rejected.' },
      { q: 'Can cheaper clicks produce worse business results?', a: 'Yes, if fewer clicks lead to suitable orders or those orders generate less value. Compare acquisition outcomes using the same attribution rules; this calculator supplies no universal CPC or CTR benchmark.' },
    ],
    disclaimer: 'Matched-report averages. Auction bidding, conversions, profit and currency exchange are outside the calculation.',
  },
  uk: {
    longDescription: 'Середній CPC ділить фактичні рекламні витрати на зареєстровані кліки. Він описує ціну отриманого трафіку, а не максимальну ставку чи вартість клієнта. Покази тієї самої кампанії додають CPM та CTR і допомагають узгодити звіт. Самі ці відношення не встановлюють причину зміни аукціону та не підтверджують прибутковість реклами.',
    howToUse: ['Візьміть фактичні витрати й кліки за один період з узгодженого звіту.', 'Витрати та кліки мають бути додатними. Кліки й відомі покази — цілі кількості в безпечному числовому діапазоні.', 'Невідомі покази залиште порожніми або задайте 0; CPM та CTR тоді не виводяться.', 'Усі гроші задавайте в одній валюті. Окремо перевіряйте конверсії та якість замовлень: валютного обміну чи прогнозу продажів немає.'],
    howItWorks: 'За витрат C, кліків K і показів I > 0: CPC = C/K, CPM = 1000C/I, CTR = 100K/I відсотків. Для тієї самої бази CPC = CPM/(10 × CTR у відсотках). Якщо покази введено, форма вимагає K ≤ I; інші правила підрахунку треба узгодити до введення. Проміжні числа не округлюються, звичайні суми й відсотки показано з двома знаками, малі ненульові значення зберігаються.',
    example: 'Витрати 36 000 грошових одиниць, 1 450 кліків і 92 000 показів дають CPC 24,83, CPM 391,30 та CTR 1,58 %. За витрат 5 200 і 260 кліків без показів CPC дорівнює 20,00, інші два показники відсутні. Нуль кліків не дає визначеної середньої ціни.',
    faq: [
      { q: 'Чи збігається середній CPC зі ставкою в кабінеті?', a: 'Не обов’язково. Ставка впливає на участь в аукціоні, а середній CPC використовує фактичні витрати та отримані кліки.' },
      { q: 'Чи доводять CPM і CTR причину подорожчання кліка?', a: 'Вони показують арифметичний зв’язок за спільної бази. Для причини перевіряйте майданчики, аудиторію, ставки, формат та облік кліків, а не лише два відношення.' },
      { q: 'Що обчислюється без відомих показів?', a: 'CPC за витратами й кліками. Порожнє поле або 0 означає невідомі покази, а не виміряний нульовий CPM. За нуля кліків CPC не розраховується.' },
      { q: 'Коли дешевші кліки не покращують результат?', a: 'Коли вони рідше дають потрібні замовлення або приносять меншу цінність. Порівнюйте результати залучення за однакових правил атрибуції; універсального порога CPC чи CTR тут немає.' },
    ],
    disclaimer: 'Середні показники узгодженого рекламного звіту. Ставки, продажі, прибуток та обмін валют не прогнозуються.',
  },
  de: {
    longDescription: 'Der durchschnittliche CPC verteilt die tatsächlich angefallenen Werbeausgaben auf die erfassten Klicks. Er beschreibt den eingekauften Traffic, nicht das Höchstgebot oder die Kosten eines gewonnenen Kunden. Einblendungen derselben Kampagne ergänzen CPM und Klickrate. Damit lassen sich Berichte abstimmen; eine Ursache für teurere Klicks oder die Rentabilität der Werbung ist damit noch nicht nachgewiesen.',
    howToUse: ['Verwende tatsächliche Ausgaben und Klicks aus derselben Kampagne und demselben Berichtszeitraum.', 'Ausgaben und Klicks müssen positiv sein. Klicks und bekannte Einblendungen sind ganze Anzahlen im sicheren Zahlenbereich.', 'Lass unbekannte Einblendungen leer oder gib 0 ein; CPM und Klickrate werden dann ausgelassen.', 'Verwende dieselbe Währung. Prüfe auch Abschlüsse und Bestellqualität; es wird kein Wechselkurs und keine Umsatzprognose berechnet.'],
    howItWorks: 'Mit Ausgaben C, Klicks K und Einblendungen I > 0 gilt CPC = C/K, CPM = 1000C/I und CTR = 100K/I Prozent. Bei gleicher Datenbasis ist CPC = CPM/(10 × CTR in Prozent). Mit eingegebenen Einblendungen verlangt diese Form K ≤ I; abweichende Zählweisen müssen vorher abgestimmt werden. Zwischenwerte bleiben ungerundet. Übliche Beträge und Prozente erhalten zwei Dezimalstellen, kleine Werte bleiben von null unterscheidbar.',
    example: '36 000 Geldeinheiten, 1 450 Klicks und 92 000 Einblendungen ergeben CPC 24,83, CPM 391,30 und CTR 1,58 %. Bei Ausgaben von 5 200 und 260 Klicks ohne Einblendungszahl beträgt CPC 20,00; CPM und CTR fehlen. Ohne Klicks ist kein durchschnittlicher CPC berechenbar.',
    faq: [
      { q: 'Ist der durchschnittliche CPC gleich dem eingestellten Gebot?', a: 'Nein. Ein Gebot steuert die Teilnahme an der Auktion. Der durchschnittliche CPC verwendet tatsächliche Ausgaben und erfasste Klicks und kann vom Höchstgebot abweichen.' },
      { q: 'Beweisen CPM und CTR den Grund für einen höheren CPC?', a: 'Sie zeigen die rechnerische Beziehung bei gleicher Datenbasis. Platzierungen, Zielgruppe, Gebote, Format und Klickmessung müssen für eine Ursachenanalyse getrennt geprüft werden.' },
      { q: 'Welche Kennzahl bleibt ohne Einblendungszahl verfügbar?', a: 'CPC verwendet weiterhin Ausgaben und Klicks. Ein leeres Feld oder 0 bedeutet unbekannte Einblendungen, nicht einen gemessenen CPM von null. Null Klicks sind als Nenner ausgeschlossen.' },
      { q: 'Können günstigere Klicks wirtschaftlich schlechter sein?', a: 'Ja, wenn sie seltener zu passenden Bestellungen führen oder diese weniger Wert erzeugen. Vergleiche Abschlüsse mit gleicher Attribution; allgemeine CPC- oder CTR-Grenzwerte liefert der Rechner nicht.' },
    ],
    disclaimer: 'Durchschnitte eines abgestimmten Werbeberichts. Gebote, Abschlüsse, Gewinn und Währungsumrechnung werden nicht prognostiziert.',
  },
  es: {
    longDescription: 'El CPC medio reparte el gasto publicitario observado entre los clics registrados. Describe el tráfico obtenido, no la puja máxima ni el coste de captar un cliente. Las impresiones de la misma campaña añaden CPM y CTR para conciliar gasto y actividad. Estas relaciones ayudan a comparar informes, pero no demuestran la causa de un cambio en la subasta ni la rentabilidad de la campaña.',
    howToUse: ['Toma gasto real y clics de la misma campaña y del mismo periodo.', 'El gasto y los clics deben ser positivos. Clics e impresiones conocidas son cantidades enteras dentro del rango numérico seguro.', 'Deja las impresiones vacías o introduce 0 cuando no se conozcan; CPM y CTR se omiten.', 'Usa una moneda común. Comprueba también conversiones y calidad de los pedidos; no se aplica cambio de divisas ni una previsión de ventas.'],
    howItWorks: 'Con gasto C, clics K e impresiones I > 0: CPC = C/K, CPM = 1000C/I y CTR = 100K/I por ciento. Sobre la misma base CPC = CPM/(10 × CTR expresado en porcentaje). La forma exige K ≤ I cuando se aportan impresiones; concilia antes cualquier método de recuento diferente. Los valores intermedios no se redondean. Los importes y porcentajes habituales tienen dos decimales; se conservan los valores pequeños distintos de cero.',
    example: '36 000 unidades monetarias, 1 450 clics y 92 000 impresiones dan CPC 24,83, CPM 391,30 y CTR 1,58 %. Con gasto 5 200 y 260 clics sin impresiones, CPC es 20,00 y se omiten las otras dos métricas. Cero clics no permite calcular un CPC medio.',
    faq: [
      { q: '¿El CPC medio coincide con la puja configurada?', a: 'No necesariamente. La puja regula la participación en la subasta; el CPC medio usa el gasto real y los clics registrados, y puede diferir de la puja máxima.' },
      { q: '¿CPM y CTR demuestran por qué aumentó el CPC?', a: 'Muestran la relación aritmética en una base comparable. Para atribuir causas hay que revisar emplazamientos, audiencia, pujas, formato y medición de clics.' },
      { q: '¿Qué se calcula sin conocer las impresiones?', a: 'CPC sigue usando gasto y clics. Vacío o 0 significa impresiones desconocidas, no un CPM cero observado. Se rechaza un denominador de cero clics.' },
      { q: '¿Los clics más baratos pueden dar peores resultados?', a: 'Sí, si generan menos pedidos adecuados o de menor valor. Compara resultados de captación con la misma atribución; no se ofrece un umbral universal de CPC ni de CTR.' },
    ],
    disclaimer: 'Medias de un informe publicitario conciliado. No estima pujas, conversiones, beneficio ni cambio de divisas.',
  },
};
