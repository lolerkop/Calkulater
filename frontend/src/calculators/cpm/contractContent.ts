import type { CalculatorDef } from '../../lib/types';
type Copy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;
export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Copy> = {
  ru: {
    longDescription: 'CPM выражает рекламные расходы на тысячу показов. Прямой режим оценивает среднюю стоимость по фактическому отчёту; два обратных режима находят бюджет или ожидаемые показы при заданной неизменной цене. Показы могут повторяться у одного человека, поэтому это не цена тысячи уникальных зрителей. Видимые показы и все зарегистрированные показы тоже могут быть разными базами.',
    howToUse: ['Выберите CPM, бюджет или показы; заполните только две исходные величины выбранного режима.', 'Фактическое число показов задавайте положительным целым числом. Бюджет может быть нулевым, заданный CPM в обратных режимах должен быть положительным.', 'Для оценки бюджета или показов заранее проверьте предположение о неизменном CPM.', 'Денежные входы используют одну валюту без пересчёта. Сравнивайте размещения с одинаковым определением показа.'],
    howItWorks: 'При расходе C, показах I и цене M за тысячу: M = 1000C/I, C = M × I/1000, I = 1000C/M. Стоимость одного показа = M/1000. В обратном режиме число показов — математическая оценка, отображаемая с округлением до ближайшего целого; она не обещает доставку рекламы. Известные показы не округляются перед расчётом. Обычные суммы имеют два знака, цена одного показа — четыре.',
    example: '45 000 денежных единиц за 1 200 000 показов: CPM 37,50, один показ 0,0375. Бюджет 30 000 при CPM 250 даёт оценку 120 000 показов; 1 000 000 показов при CPM 37,50 требуют 37 500. При бюджете 0 и 15 000 зарегистрированных показов CPM равен 0.',
    faq: [
      { q: 'Какой знаменатель отличает CPM от CPC?', a: 'CPM относится к тысяче показов, CPC — к кликам. Дешёвые показы не означают дешёвые клики или продажи, поэтому сравнение требует других результатов кампании.' },
      { q: 'Является ли расчёт показов обещанием рекламной платформы?', a: 'Нет. Это обратная формула при постоянном CPM. Аукцион, доступная аудитория, ограничения показа и изменение цены могут изменить фактическую доставку.' },
      { q: 'Можно ли рассчитать CPM бесплатного размещения?', a: 'Да: нулевые расходы и положительные показы дают CPM 0. Но обратный расчёт показов по CPM 0 потребовал бы деления на ноль и не принимается.' },
      { q: 'Можно ли заменить показы охватом или видимыми показами?', a: 'Охват считает уникальную аудиторию, а показы могут повторяться. Для видимых показов используется отдельная база vCPM. Числа из разных баз нельзя без пояснений сравнивать как один CPM.' },
    ],
    disclaimer: 'Средняя стоимость и оценка при постоянном CPM. Не прогнозирует уникальный охват, видимость, клики, продажи или результат аукциона.',
  },
  en: {
    longDescription: 'CPM states advertising spend per thousand impressions. The direct mode uses a reported spend and count; the inverse modes estimate a budget or impression count at a fixed rate. Repeated impressions can belong to the same person, so CPM is not the price of reaching a thousand unique people. Viewable impressions can also use a different reporting basis.',
    howToUse: ['Select CPM, budget or impressions and enter only that mode’s two known inputs.', 'Reported impressions must be a positive whole count. Spend may be zero; a supplied CPM for an inverse calculation must be positive.', 'Before estimating delivery or budget, check whether a constant CPM is a reasonable assumption.', 'Use one currency and the same definition of an impression. No currency conversion takes place.'],
    howItWorks: 'For spend C, impressions I and CPM M: M = 1000C/I, C = M × I/1000 and I = 1000C/M. Cost per impression is M/1000. The inverse impression result is a mathematical estimate displayed to the nearest whole impression, not a delivery commitment. Actual input counts are not rounded. Ordinary money uses two decimal places and cost per impression four.',
    example: '45,000 monetary units for 1,200,000 impressions gives CPM 37.50 and cost per impression 0.0375. A budget of 30,000 at CPM 250 estimates 120,000 impressions; 1,000,000 impressions at CPM 37.50 require 37,500. Zero spend with 15,000 recorded impressions gives CPM 0.',
    faq: [
      { q: 'Which denominator separates CPM from CPC?', a: 'CPM uses a thousand impressions, while CPC uses clicks. Cheap impressions do not establish cheap clicks or sales; review the campaign’s other outcomes too.' },
      { q: 'Does the inverse result guarantee an impression delivery?', a: 'No. It rearranges a constant-rate equation. Auction prices, available audience and serving constraints can make actual delivery different.' },
      { q: 'Can free placement have a CPM of zero?', a: 'Yes, with zero spend and a positive recorded impression count. Solving for impressions using CPM 0 would require division by zero and is rejected.' },
      { q: 'Can reach or viewable impressions replace ordinary impressions?', a: 'Reach describes unique audience members, whereas impressions can repeat. Viewable CPM uses a separate viewability basis. Comparing these as one metric requires an explicit adjustment and definition.' },
    ],
    disclaimer: 'Observed average or fixed-CPM estimate. Unique reach, viewability, clicks, sales and auction delivery are not forecast.',
  },
  uk: {
    longDescription: 'CPM показує рекламні витрати на тисячу показів. Прямий режим використовує фактичний звіт, зворотні режими оцінюють бюджет або покази за незмінної заданої ціни. Одна людина може отримати повторні покази, тому CPM не є ціною тисячі унікальних глядачів. Видимі покази також можуть становити окрему базу.',
    howToUse: ['Оберіть CPM, бюджет або покази та введіть лише дві відомі величини цього режиму.', 'Відомі покази мають бути додатною цілою кількістю. Бюджет може бути нульовим, заданий CPM у зворотних режимах — лише додатним.', 'Для прогнозної оцінки перевірте припущення про сталу ціну тисячі показів.', 'Використовуйте спільну валюту та визначення показу. Валютний обмін не виконується.'],
    howItWorks: 'За витрат C, показів I та CPM M: M = 1000C/I, C = M × I/1000, I = 1000C/M. Один показ коштує M/1000. Зворотний результат показів — математична оцінка з округленням до найближчого цілого, а не гарантія доставки. Фактичні введені покази не округлюються. Звичайні гроші показано з двома знаками, ціну одного показу — з чотирма.',
    example: '45 000 грошових одиниць і 1 200 000 показів дають CPM 37,50 та 0,0375 за показ. Бюджет 30 000 за CPM 250 дає оцінку 120 000 показів. Для 1 000 000 показів за CPM 37,50 потрібно 37 500. Нуль витрат і 15 000 показів дають CPM 0.',
    faq: [
      { q: 'Який дільник відрізняє CPM від CPC?', a: 'У CPM це тисяча показів, у CPC — кліки. Дешеві покази не доводять дешевизну кліків чи продажів; перевіряйте також інші результати кампанії.' },
      { q: 'Чи гарантує зворотний режим отримання показів?', a: 'Ні. Формула передбачає незмінний CPM. Аукціон, доступна аудиторія та обмеження доставки можуть змінити фактичне число показів.' },
      { q: 'Чи допустиме безкоштовне розміщення з CPM 0?', a: 'Так, якщо витрати нульові, а фактичні покази додатні. Зворотний розрахунок показів із CPM 0 потребує ділення на нуль і не допускається.' },
      { q: 'Чи можна замість показів ввести охоплення?', a: 'Охоплення рахує унікальну аудиторію, покази можуть повторюватись. Видимі покази мають окрему базу vCPM. Не порівнюйте ці бази як один показник без пояснення.' },
    ],
    disclaimer: 'Середня ціна або оцінка за сталого CPM. Унікальне охоплення, видимість, кліки, продажі й аукціон не прогнозуються.',
  },
  de: {
    longDescription: 'CPM bezeichnet Werbeausgaben je tausend Einblendungen. Der direkte Modus nutzt einen tatsächlichen Bericht, die umgekehrten Modi schätzen Budget oder Einblendungen bei konstantem Preis. Wiederholte Einblendungen können dieselbe Person betreffen; CPM ist daher kein Preis für tausend verschiedene Zuschauer. Sichtbare Einblendungen bilden ebenfalls eine eigene Messgrundlage.',
    howToUse: ['Wähle CPM, Budget oder Einblendungen und trage die zwei bekannten Größen dieses Modus ein.', 'Bekannte Einblendungen sind eine positive ganze Anzahl. Das Budget darf null sein; vorgegebener CPM für die Rückrechnung muss positiv sein.', 'Prüfe für eine Planung, ob ein unveränderlicher CPM angenommen werden kann.', 'Nutze eine gemeinsame Währung und dieselbe Definition der Einblendung. Es erfolgt kein Währungswechsel.'],
    howItWorks: 'Für Ausgaben C, Einblendungen I und CPM M gilt M = 1000C/I, C = M × I/1000 und I = 1000C/M. Eine Einblendung kostet M/1000. Die rückgerechnete Anzahl ist eine mathematische Schätzung, auf die nächste ganze Einblendung gerundet, keine Lieferzusage. Tatsächliche Eingabezahlen werden nicht gerundet. Geldbeträge erhalten gewöhnlich zwei, Kosten je Einblendung vier Dezimalstellen.',
    example: '45 000 Geldeinheiten für 1 200 000 Einblendungen ergeben CPM 37,50 und 0,0375 je Einblendung. 30 000 Budget bei CPM 250 ergeben geschätzte 120 000 Einblendungen. 1 000 000 Einblendungen bei CPM 37,50 kosten 37 500. Null Ausgaben und 15 000 Einblendungen ergeben CPM 0.',
    faq: [
      { q: 'Welcher Nenner unterscheidet CPM und CPC?', a: 'CPM bezieht sich auf tausend Einblendungen, CPC auf Klicks. Günstige Einblendungen belegen weder günstige Klicks noch Verkäufe; weitere Kampagnenergebnisse gehören zum Vergleich.' },
      { q: 'Garantiert die berechnete Anzahl eine Werbeauslieferung?', a: 'Nein. Die Umkehrung setzt einen konstanten CPM voraus. Auktionspreise, verfügbare Zielgruppe und Auslieferungsgrenzen können das tatsächliche Ergebnis verändern.' },
      { q: 'Kann kostenlose Werbung einen CPM von null haben?', a: 'Ja, bei null Ausgaben und positiver erfasster Einblendungszahl. Aus CPM 0 eine Anzahl zu berechnen würde durch null teilen und ist ausgeschlossen.' },
      { q: 'Kann Reichweite anstelle von Einblendungen eingesetzt werden?', a: 'Reichweite zählt verschiedene Personen, Einblendungen können sich wiederholen. Sichtbarer CPM hat eine eigene Sichtbarkeitsbasis. Solche Grundlagen sind nicht ohne Erläuterung austauschbar.' },
    ],
    disclaimer: 'Durchschnittspreis oder Schätzung mit konstantem CPM. Reichweite, Sichtbarkeit, Klicks, Verkäufe und Auktionsauslieferung werden nicht vorhergesagt.',
  },
  es: {
    longDescription: 'CPM expresa el gasto publicitario por mil impresiones. El modo directo utiliza un informe observado; los modos inversos estiman presupuesto o impresiones con una tarifa constante. Una persona puede recibir varias impresiones, así que no representa el precio de llegar a mil personas distintas. Las impresiones visibles también pueden constituir otra base de medición.',
    howToUse: ['Selecciona CPM, presupuesto o impresiones e introduce las dos cantidades conocidas de ese modo.', 'Las impresiones observadas deben ser una cantidad entera positiva. El gasto puede ser cero; el CPM indicado para un cálculo inverso debe ser positivo.', 'Antes de planificar, comprueba la suposición de que el CPM permanece constante.', 'Usa una sola moneda y la misma definición de impresión. No hay conversión de divisas.'],
    howItWorks: 'Con gasto C, impresiones I y CPM M: M = 1000C/I, C = M × I/1000 e I = 1000C/M. El coste de una impresión es M/1000. La cantidad inversa es una estimación matemática redondeada a la impresión entera más próxima, no una garantía de entrega. Los recuentos observados no se redondean. Los importes suelen tener dos decimales y el coste por impresión cuatro.',
    example: '45 000 unidades monetarias y 1 200 000 impresiones dan CPM 37,50 y coste por impresión 0,0375. Un presupuesto de 30 000 con CPM 250 estima 120 000 impresiones. Para 1 000 000 de impresiones con CPM 37,50 hacen falta 37 500. Gasto cero y 15 000 impresiones producen CPM 0.',
    faq: [
      { q: '¿Qué denominador distingue CPM de CPC?', a: 'CPM utiliza mil impresiones y CPC utiliza clics. Impresiones baratas no demuestran clics ni ventas baratos; revisa también los resultados de la campaña.' },
      { q: '¿El número calculado garantiza la entrega publicitaria?', a: 'No. La operación inversa supone un CPM constante. Las subastas, la audiencia disponible y los límites de entrega pueden alterar el resultado real.' },
      { q: '¿Una publicación gratuita puede tener CPM cero?', a: 'Sí, con gasto cero e impresiones observadas positivas. Calcular impresiones a partir de CPM 0 exigiría dividir entre cero y no se admite.' },
      { q: '¿Se puede sustituir impresiones por alcance?', a: 'El alcance cuenta personas distintas; las impresiones pueden repetirse. El CPM visible utiliza su propia base de visibilidad. No compares bases distintas como una sola métrica sin aclaración.' },
    ],
    disclaimer: 'Media observada o estimación con CPM constante. No pronostica alcance único, visibilidad, clics, ventas ni entrega en subastas.',
  },
};
