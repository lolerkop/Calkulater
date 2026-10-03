import type { CalculatorCopy } from '../../lib/platform/types';

type ContractContent = Pick<CalculatorCopy, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;

export const contractContent = {
  "ru": {
    "longDescription": "Приводит паспортную мощность прибора к киловаттам один раз, а затем умножает на часы работы и число дней. Ватты и киловатт-часы легко перепутать — первое это мощность, второе энергия, накопленная за время, — поэтому перевод сделан одним видимым шагом. Укажите тариф, и появится стоимость.",
    "howToUse": [
      "Возьмите мощность выбранного режима с наклейки или измерьте среднюю мощность за свои часы работы.",
      "Укажите, сколько часов в сутки он работает и за сколько дней считаем.",
      "Добавьте тариф, чтобы увидеть стоимость."
    ],
    "howItWorks": "Мощность P в ваттах делится на 1000; введённые киловатты остаются без перевода. Суточная энергия=PкВт×h, энергия периода=PкВт×h×d, где 0≤h≤24 и d — положительное целое число дней. Строка за 30 дней всегда использует 30, независимо от выбранного периода. Стоимость добавляется только при тарифе>0; пустой тариф и 0 оставляют её скрытой. Модель предполагает указанную среднюю мощность в течение h часов.",
    "example": "Обогреватель 2000 Вт по 3 часа в сутки за 30 дней съедает 2 × 3 × 30 = 180 кВт·ч. При нуле часов энергия и стоимость равны 0; пустой тариф скрывает стоимость, а дробное число дней отклоняется.",
    "faq": [
      {
        "q": "Откуда взять тариф?",
        "a": "Из квитанции за электроэнергию, там указана цена за киловатт-час. Многотарифные счётчики здесь не учитываются, считайте по нужной зоне отдельно."
      },
      {
        "q": "Паспортная мощность — это реальное потребление?",
        "a": "Не обязательно. Шильдик может задавать номинальную мощность или несколько режимов, а не среднюю энергию за сутки. Для техники с циклами используйте измеренные кВт·ч или фактическое время и мощность активного режима."
      },
      {
        "q": "Чем ватт отличается от киловатт-часа?",
        "a": "Ватт — это скорость расхода, а киловатт-час — энергия, накопленная за время. Прибор на 1000 Вт за один час съедает ровно 1 кВт·ч."
      },
      {
        "q": "Обязательно ли указывать тариф?",
        "a": "Нет. Без него вы всё равно получите потребление в киловатт-часах, просто без строки стоимости."
      }
    ]
  },
  "en": {
    "longDescription": "Converts an appliance rating into kilowatts once, then multiplies by the hours it runs and the days you are counting. Watts and kilowatt-hours are easy to confuse — one is power, the other is energy accumulated over time — so the conversion happens in one visible step. Add your tariff and the cost follows.",
    "howToUse": [
      "Use the selected operating power from the label or measure average power over your operating hours.",
      "Enter how many hours a day it runs and over how many days.",
      "Add your tariff for the cost."
    ],
    "howItWorks": "Divide watts P by 1000; entered kilowatts need no conversion. Daily energy=P_kW×h and period energy=P_kW×h×d, with 0≤h≤24 and positive whole days d. The 30-day row always uses 30, independently of the chosen period. Costs appear only for a positive tariff; blank or 0 omits them. The model holds the entered average power for h hours.",
    "example": "A 2000 W heater for 3 hours a day over 30 days uses 2 × 3 × 30 = 180 kWh. Zero hours gives zero energy and zero cost; a blank tariff omits costs, while fractional days are rejected.",
    "faq": [
      {
        "q": "Where do I find my tariff?",
        "a": "On your electricity bill, as a price per kilowatt-hour. Multi-rate meters are not modelled, so work out each rate band separately."
      },
      {
        "q": "Is the label power what it actually draws?",
        "a": "Not necessarily. A label may state rated power or several operating settings, rather than average daily energy. For cycling appliances use measured kWh or actual active time and power."
      },
      {
        "q": "What is the difference between a watt and a kilowatt-hour?",
        "a": "A watt is a rate of use; a kilowatt-hour is the energy that rate accumulates over time. A 1000 W device running one hour uses exactly 1 kWh."
      },
      {
        "q": "Is the tariff required?",
        "a": "No. Without it you still get the consumption in kilowatt-hours, just no cost line."
      }
    ],
    "disclaimer": "Results are reference estimates. Verify the inputs before making important decisions."
  },
  "uk": {
    "longDescription": "Витрата електроенергії рахується як потужність у кіловатах, помножена на години роботи. Головна складність не в арифметиці, а в тому, що прилад рідко працює постійно: холодильник вмикається циклами, а обігрівач із термостатом гріє лише частину часу.",
    "howToUse": [
      "Візьміть потужність обраного режиму зі шильдика або виміряйте середню за свої години роботи.",
      "Введіть кількість годин фактичної роботи на добу.",
      "Введіть кількість днів і тариф."
    ],
    "howItWorks": "Вати P діляться на 1000; введені кіловати не переводяться. Добова енергія=PкВт×h, енергія періоду=PкВт×h×d, де 0≤h≤24, а d — додатне ціле число днів. Рядок за 30 днів завжди використовує 30, незалежно від обраного періоду. Вартість з’являється лише за тарифу>0; порожній тариф і 0 приховують її. Модель тримає введену середню потужність протягом h годин.",
    "example": "Обігрівач 2000 Вт по 3 години на добу за 30 днів з’їдає 2 × 3 × 30 = 180 кВт·год. За нуля годин енергія й вартість 0; порожній тариф приховує вартість, дробові дні відхиляються.",
    "faq": [
      {
        "q": "Скільки годин ставити для холодильника?",
        "a": "Універсальної частки немає. Компресор працює циклами, які залежать від моделі й умов. Річні кВт·год з етикетки, поділені на 365, дають оцінку середнього дня за умовами тесту; ватметр показує фактичний період."
      },
      {
        "q": "Чи враховано режим очікування?",
        "a": "Очікування окремо не додається. Для його оцінки порахуйте виміряну потужність очікування та її години окремим запуском. Якщо введена середня потужність уже включає очікування, вдруге його не додавайте."
      },
      {
        "q": "Чому фактичний рахунок відрізняється?",
        "a": "Через режими, цикли, умови роботи та інші прилади. Потужність на шильдику не обов’язково є середньою чи універсальним максимумом. Один постійний тариф також не відтворює всі збори та часові зони рахунку."
      },
      {
        "q": "Як виміряти реальне споживання?",
        "a": "Розетковим ватметром: він рахує саме кіловат-години з урахуванням циклів і очікування. Це надійніше за будь-який розрахунок за паспортом."
      }
    ],
    "disclaimer": "Результати є орієнтовними оцінками. Перед важливими рішеннями перевіряйте дані."
  },
  "de": {
    "longDescription": "Rechnet die Leistungsangabe eines Geräts einmal in Kilowatt um und multipliziert sie danach mit den Betriebsstunden und den gezählten Tagen. Watt und Kilowattstunden lassen sich leicht verwechseln — das eine ist Leistung, das andere über die Zeit angesammelte Energie —, deshalb geschieht die Umrechnung in einem sichtbaren Schritt. Trage deinen Tarif ein, und die Kosten folgen.",
    "howToUse": [
      "Leistung der gewählten Stufe vom Typenschild oder gemessene mittlere Betriebsleistung verwenden.",
      "Trage ein, wie viele Stunden am Tag es läuft und über wie viele Tage.",
      "Ergänze deinen Tarif für die Kosten."
    ],
    "howItWorks": "Watt P werden durch 1000 geteilt; eingegebene Kilowatt bleiben unverändert. Tagesenergie=P_kW×h, Periodenenergie=P_kW×h×d mit 0≤h≤24 und positiver ganzer Tageszahl d. Die 30-Tage-Zeile verwendet immer 30, unabhängig vom gewählten Zeitraum. Kosten erscheinen nur bei positivem Tarif; leer oder 0 blendet sie aus. Für h Stunden wird die eingegebene mittlere Leistung angenommen.",
    "example": "Ein Heizgerät mit 2000 W über 3 Stunden am Tag an 30 Tagen verbraucht 2 × 3 × 30 = 180 kWh. Bei null Stunden sind Energie und Kosten 0; leerer Tarif blendet Kosten aus, gebrochene Tageszahlen werden abgelehnt.",
    "faq": [
      {
        "q": "Wo finde ich meinen Tarif?",
        "a": "Auf deiner Stromabrechnung, als Preis je Kilowattstunde. Zweitarifzähler sind nicht abgebildet, rechne die Tarifzeiten also getrennt."
      },
      {
        "q": "Ist die Leistung vom Typenschild das, was tatsächlich fließt?",
        "a": "Nicht zwingend. Das Typenschild kann Nennleistung oder mehrere Betriebsstufen nennen, statt des mittleren Tagesverbrauchs. Bei taktenden Geräten gemessene kWh oder tatsächliche aktive Dauer und Leistung nutzen."
      },
      {
        "q": "Was ist der Unterschied zwischen Watt und Kilowattstunde?",
        "a": "Watt ist eine Leistung; eine Kilowattstunde ist die Energie, die diese Leistung über die Zeit ansammelt. Ein Gerät mit 1000 W verbraucht in einer Stunde genau 1 kWh."
      },
      {
        "q": "Ist der Tarif nötig?",
        "a": "Nein. Ohne ihn bekommst du weiterhin den Verbrauch in Kilowattstunden, nur ohne die Zeile mit den Kosten."
      }
    ],
    "disclaimer": "Die Ergebnisse sind Orientierungswerte. Prüfe die Eingaben vor wichtigen Entscheidungen."
  },
  "es": {
    "longDescription": "Convierte la potencia nominal de un aparato en kilovatios una sola vez y la multiplica después por las horas que funciona y los días que cuentas. Los vatios y los kilovatios hora se confunden con facilidad —uno es potencia y el otro, energía acumulada en el tiempo—, así que la conversión ocurre en un paso visible. Añade tu tarifa y sale el coste.",
    "howToUse": [
      "Usa la potencia del modo elegido de la placa o mide la potencia media durante tus horas de uso.",
      "Introduce cuántas horas al día funciona y durante cuántos días.",
      "Añade tu tarifa para obtener el coste."
    ],
    "howItWorks": "Los vatios P se dividen entre 1000; los kilovatios no se convierten. Energía diaria=P_kW×h y del periodo=P_kW×h×d, con 0≤h≤24 y días enteros positivos d. La fila de 30 días siempre usa 30, sea cual sea el periodo elegido. Los costes aparecen solo con tarifa positiva; en blanco o 0 se omiten. Se supone la potencia media introducida durante h horas.",
    "example": "Un calefactor de 2000 W durante 3 horas al día a lo largo de 30 días consume 2 × 3 × 30 = 180 kWh. Con cero horas, energía y coste son 0; tarifa en blanco omite costes y días fraccionarios se rechazan.",
    "faq": [
      {
        "q": "¿Dónde encuentro mi tarifa?",
        "a": "En tu factura de la luz, como precio por kilovatio hora. Los contadores con discriminación horaria no se modelan, así que calcula cada tramo por separado."
      },
      {
        "q": "¿La potencia de la etiqueta es lo que consume de verdad?",
        "a": "No necesariamente. La placa puede indicar potencia nominal o varios modos, en vez de energía media diaria. Para equipos que funcionan por ciclos usa kWh medidos o tiempo y potencia activos reales."
      },
      {
        "q": "¿Qué diferencia hay entre un vatio y un kilovatio hora?",
        "a": "Un vatio es un ritmo de consumo; un kilovatio hora es la energía que ese ritmo acumula en el tiempo. Un aparato de 1000 W en marcha una hora consume exactamente 1 kWh."
      },
      {
        "q": "¿La tarifa es obligatoria?",
        "a": "No. Sin ella obtienes igualmente el consumo en kilovatios hora, solo que sin línea de coste."
      }
    ],
    "disclaimer": "Los resultados son estimaciones orientativas. Verifica los datos de partida antes de tomar decisiones importantes."
  }
} satisfies Record<'ru' | 'en' | 'uk' | 'de' | 'es', ContractContent>;
