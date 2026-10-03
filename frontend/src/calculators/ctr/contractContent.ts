import type { CalculatorDef } from '../../lib/types';
type Copy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;
export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Copy> = {
  ru: {
    longDescription: 'CTR связывает зарегистрированные клики с рекламными показами. Он полезен для сравнения отклика на объявление при согласованном учёте, но не измеряет долю покупателей и не заменяет стоимость продажи. Показ — событие, а не обязательно уникальный человек. Дополнительный расход позволяет увидеть CPC и CPM; результат с кликами больше показов сохраняется с предупреждением для проверки отчёта.',
    howToUse: ['Введите целое неотрицательное число кликов и положительное целое число показов за один период.', 'Используйте одну кампанию, площадку и правила фильтрации событий.', 'Расход необязателен: пустое поле или 0 отключает денежные строки; отрицательный расход не принимается.', 'Сопоставляйте CTR с конверсиями и качеством результата, а не с универсальным нормативом.'],
    howItWorks: 'CTR = 100 × клики K / показы I процентов. Показов на клик = I/K при K > 0. Если расход C > 0, CPC = C/K при K > 0 и CPM = 1000C/I. Нулевые клики дают CTR 0 и отсутствие CPC. Входные количества не округляются. Обычный CTR отображается с двумя знаками, положительный ниже 0,01 % — с четырьмя; меньшие ненулевые величины сохраняются.',
    example: '1 250 кликов на 84 000 показов: CTR = 1,488095… %, на экране 1,49 %. Расход 25 000 денежных единиц даёт CPC 20,00 и CPM 297,62. При 0 кликов на 5 000 показов CTR равен 0; при одном клике на миллион показов — 0,0001 %.',
    faq: [
      { q: 'Показы в CTR означают число разных людей?', a: 'Нет. Один человек может получить несколько показов. Подмена показов уникальным охватом меняет знаменатель и создаёт другую метрику.' },
      { q: 'Как читать CTR выше ста процентов?', a: 'Форма сохраняет отношение с предупреждением. Проверьте периоды, фильтры, повторные клики и правила площадки; такой отчёт нельзя автоматически понимать как долю уникальных людей, которые нажали.' },
      { q: 'Почему без кликов CPC отсутствует, а CTR равен нулю?', a: 'В CTR делитель — положительные показы, поэтому 0/I = 0. В CPC делитель — клики; деление расхода на 0 не имеет определённого значения.' },
      { q: 'Повышение CTR доказывает улучшение продаж?', a: 'Нет. Оно описывает отношение кликов к показам. Намерение посетителей, конверсия, цены и доход требуют отдельной проверки; причина изменения CTR тоже не следует из формулы.' },
    ],
    disclaimer: 'Отношение событий одного отчёта. Не оценивает уникальных покупателей, причины изменений, отраслевые нормативы или прибыль.',
  },
  en: {
    longDescription: 'CTR relates recorded clicks to ad impressions. It helps compare response to an ad on a matched reporting basis, but it does not measure the share of buyers or replace cost per sale. An impression is an event, not necessarily a unique person. Optional spend adds CPC and CPM. Clicks above impressions retain the ratio with a warning so that the report can be checked.',
    howToUse: ['Enter a nonnegative whole click count and a positive whole impression count for one period.', 'Match the campaign, placement and event-filtering rules of the two counts.', 'Spend is optional: blank or 0 omits the money rows; negative spend is rejected.', 'Review conversions and outcome quality alongside CTR rather than using a universal benchmark.'],
    howItWorks: 'CTR = 100 × clicks K / impressions I percent. Impressions per click = I/K when K > 0. If spend C > 0, CPC = C/K for K > 0 and CPM = 1000C/I. Zero clicks give CTR 0 and no defined CPC. Input counts are not rounded. Ordinary CTR uses two decimal places; a positive CTR below 0.01% uses four, with still smaller nonzero values retained.',
    example: '1,250 clicks and 84,000 impressions give CTR 1.488095…%, displayed as 1.49%. Spend of 25,000 monetary units gives CPC 20.00 and CPM 297.62. Zero clicks on 5,000 impressions give CTR 0; one click on a million impressions gives 0.0001%.',
    faq: [
      { q: 'Does the CTR impression count mean distinct people?', a: 'No. A person may receive repeated impressions. Replacing impressions with unique reach changes the denominator and the metric.' },
      { q: 'How should a CTR above a hundred percent be read?', a: 'The ratio is retained with a warning. Check dates, filters, repeated click events and platform definitions; do not automatically read it as the share of unique people who clicked.' },
      { q: 'Why can zero clicks give zero CTR but no CPC?', a: 'CTR divides zero by positive impressions. CPC would divide spend by zero clicks, so it has no defined value.' },
      { q: 'Does a higher CTR prove better sales performance?', a: 'No. It describes clicks relative to impressions. Visitor intent, conversions, prices and revenue need separate analysis; the formula does not establish the cause of a CTR change either.' },
    ],
    disclaimer: 'A ratio of matched reporting events. Unique buyers, causal explanations, industry thresholds and profit are not estimated.',
  },
  uk: {
    longDescription: 'CTR співвідносить зареєстровані кліки з рекламними показами. Він допомагає порівняти відгук на оголошення за узгодженого обліку, але не визначає частку покупців чи ціну продажу. Показ — подія, не обов’язково окрема людина. Витрати додають CPC та CPM. Якщо кліків більше за покази, відношення лишається з попередженням для перевірки звіту.',
    howToUse: ['Задайте цілу невід’ємну кількість кліків та додатну цілу кількість показів за один період.', 'Узгодьте кампанію, майданчик і правила фільтрації подій.', 'Витрати необов’язкові: порожнє поле або 0 прибирає грошові рядки; від’ємні витрати відхиляються.', 'Поряд із CTR перевіряйте конверсії та якість результату, без універсального нормативу.'],
    howItWorks: 'CTR = 100 × кліки K / покази I відсотків. Показів на клік = I/K за K > 0. За витрат C > 0: CPC = C/K, коли K > 0, а CPM = 1000C/I. Нуль кліків дає CTR 0 та відсутність CPC. Вхідні кількості не округлюються. Звичайний CTR має два знаки, додатний нижче 0,01 % — чотири; ще менші ненульові числа зберігаються.',
    example: '1 250 кліків на 84 000 показів дають CTR 1,488095… %, на екрані 1,49 %. Витрати 25 000 грошових одиниць дають CPC 20,00 та CPM 297,62. Нуль кліків на 5 000 показів дає CTR 0; один клік на мільйон показів — 0,0001 %.',
    faq: [
      { q: 'Чи означають покази в CTR різних людей?', a: 'Ні. Одна людина може побачити рекламу кілька разів. Заміна показів унікальним охопленням змінює дільник і сам показник.' },
      { q: 'Як тлумачити CTR понад сто відсотків?', a: 'Форма зберігає відношення з попередженням. Перевірте періоди, фільтри, повторні кліки й визначення майданчика; це не автоматично частка унікальних людей, що натиснули.' },
      { q: 'Чому за нульових кліків CTR є, а CPC немає?', a: 'Для CTR нуль ділиться на додатні покази. Для CPC довелося б ділити витрати на нуль кліків, тому визначеного значення немає.' },
      { q: 'Чи доводить підвищення CTR зростання продажів?', a: 'Ні. Показник описує кліки відносно показів. Намір відвідувачів, конверсія, ціни та дохід потребують окремої перевірки; причина зміни CTR із формули також не випливає.' },
    ],
    disclaimer: 'Відношення узгоджених подій звіту. Не оцінює унікальних покупців, причини змін, галузеві пороги або прибуток.',
  },
  de: {
    longDescription: 'CTR setzt erfasste Klicks zu Werbeeinblendungen ins Verhältnis. Bei gleicher Messgrundlage hilft sie, die Reaktion auf Anzeigen zu vergleichen, misst aber weder Käuferanteil noch Kosten je Verkauf. Eine Einblendung ist ein Ereignis, nicht zwingend eine andere Person. Optionale Ausgaben ergänzen CPC und CPM. Mehr Klicks als Einblendungen bleiben mit einem Prüfhinweis sichtbar.',
    howToUse: ['Gib eine nicht negative ganze Klickzahl und eine positive ganze Einblendungszahl für denselben Zeitraum ein.', 'Stimme Kampagne, Platzierung und Filterregeln der Ereignisse ab.', 'Ausgaben sind optional: leer oder 0 lässt Geldbeträge weg, negative Ausgaben werden abgewiesen.', 'Prüfe neben CTR die Abschlüsse und deren Qualität, statt einen allgemeinen Grenzwert anzuwenden.'],
    howItWorks: 'CTR = 100 × Klicks K / Einblendungen I Prozent. Einblendungen je Klick = I/K bei K > 0. Bei Ausgaben C > 0 gilt CPC = C/K für K > 0 und CPM = 1000C/I. Null Klicks ergeben CTR 0 und keinen berechenbaren CPC. Eingabezahlen bleiben ungerundet. Übliche CTR erhält zwei Dezimalstellen, positive Werte unter 0,01 % vier; noch kleinere Werte bleiben von null unterscheidbar.',
    example: '1 250 Klicks und 84 000 Einblendungen ergeben CTR 1,488095… %, angezeigt als 1,49 %. 25 000 Geldeinheiten Ausgaben ergeben CPC 20,00 und CPM 297,62. Null Klicks bei 5 000 Einblendungen ergeben CTR 0; ein Klick bei einer Million Einblendungen ergibt 0,0001 %.',
    faq: [
      { q: 'Zählt die Einblendungszahl verschiedene Personen?', a: 'Nein. Dieselbe Person kann mehrere Einblendungen erhalten. Ein Ersatz durch eindeutige Reichweite verändert Nenner und Kennzahl.' },
      { q: 'Wie ist eine Klickrate über hundert Prozent zu lesen?', a: 'Das Verhältnis bleibt mit einem Warnhinweis erhalten. Prüfe Zeitraum, Filter, wiederholte Klicks und Plattformdefinitionen; daraus folgt kein Anteil eindeutiger Personen, die geklickt haben.' },
      { q: 'Warum gibt es bei null Klicks CTR null, aber keinen CPC?', a: 'CTR teilt null durch positive Einblendungen. CPC würde Ausgaben durch null Klicks teilen und hat deshalb keinen berechenbaren Wert.' },
      { q: 'Belegt eine höhere Klickrate bessere Verkäufe?', a: 'Nein. Sie beschreibt Klicks relativ zu Einblendungen. Kaufabsicht, Abschlüsse, Preise und Umsatz benötigen eigene Auswertungen; auch die Ursache einer CTR-Änderung ergibt sich nicht aus der Formel.' },
    ],
    disclaimer: 'Verhältnis abgestimmter Berichtsvorgänge. Eindeutige Käufer, Ursachen, Branchenziele und Gewinn werden nicht berechnet.',
  },
  es: {
    longDescription: 'CTR relaciona los clics registrados con las impresiones publicitarias. Permite comparar la respuesta a anuncios con una medición coherente, pero no mide la proporción de compradores ni el coste por venta. Una impresión es un evento, no necesariamente una persona distinta. El gasto opcional añade CPC y CPM. Más clics que impresiones mantienen el cociente con un aviso para revisar el informe.',
    howToUse: ['Introduce un recuento entero no negativo de clics e impresiones enteras positivas del mismo periodo.', 'Haz coincidir campaña, emplazamiento y reglas de filtrado de eventos.', 'El gasto es opcional: vacío o 0 omite los importes; se rechaza el gasto negativo.', 'Revisa conversiones y calidad del resultado junto a CTR, sin aplicar un umbral universal.'],
    howItWorks: 'CTR = 100 × clics K / impresiones I por ciento. Impresiones por clic = I/K si K > 0. Con gasto C > 0: CPC = C/K cuando K > 0 y CPM = 1000C/I. Cero clics da CTR 0 y ningún CPC calculable. No se redondean los recuentos de entrada. CTR habitual usa dos decimales; si es positivo e inferior a 0,01 %, cuatro; se conservan también valores menores distintos de cero.',
    example: '1 250 clics y 84 000 impresiones dan CTR 1,488095… %, mostrado como 1,49 %. Un gasto de 25 000 unidades monetarias da CPC 20,00 y CPM 297,62. Cero clics en 5 000 impresiones produce CTR 0; un clic en un millón de impresiones produce 0,0001 %.',
    faq: [
      { q: '¿Las impresiones del CTR cuentan personas distintas?', a: 'No. Una persona puede recibir varias impresiones. Sustituirlas por alcance único cambia el denominador y la métrica.' },
      { q: '¿Cómo se interpreta un CTR superior al cien por cien?', a: 'Se conserva el cociente con un aviso. Revisa fechas, filtros, clics repetidos y definiciones de la plataforma; no representa automáticamente la proporción de personas únicas que hicieron clic.' },
      { q: '¿Por qué cero clics da CTR cero pero no CPC?', a: 'CTR divide cero entre impresiones positivas. CPC dividiría el gasto entre cero clics, por lo que no tiene un valor calculable.' },
      { q: '¿Un CTR mayor demuestra mejores ventas?', a: 'No. Describe clics respecto a impresiones. Intención, conversiones, precios e ingresos requieren otro análisis; la fórmula tampoco establece la causa del cambio de CTR.' },
    ],
    disclaimer: 'Cociente de eventos de un informe coherente. No estima compradores únicos, causas, objetivos sectoriales ni beneficio.',
  },
};
