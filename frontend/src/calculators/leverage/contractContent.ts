import type { CalculatorDef } from '../../lib/types';

type Copy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;
// Starts from the five actual145 public bodies; bounded model corrections
// and independently checked examples are authored per subject and locale.
export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Copy> = {
  "ru": {
    "longDescription": "Плечо увеличивает размер позиции: при залоге C и плече L начальная стоимость позиции равна C×L. Для длинной линейной позиции без расходов падение на 1/L от цены входа поглощает начальный залог: при 5× это 20%, при 20× — 5%. Показанный здесь порог использует постоянную поддерживающую сумму, заданную процентом от начальной стоимости позиции. Это учебная модель, а не точная цена ликвидации на бирже: расчёт по текущей стоимости, риск-уровни, mark price, комиссии и режим обеспечения могут давать другой результат.",
    "howToUse": [
      "Введите залог, который вы вносите.",
      "Укажите кратность плеча.",
      "Укажите цену входа в инструмент.",
      "Задайте поддерживающую долю именно начальной стоимости позиции для этой модели; биржевую формулу проверяйте отдельно."
    ],
    "howItWorks": "Позиция N=C×L, количество Q=N/E. Поддерживающая сумма M=N×m/100 остаётся постоянной в этой модели. Из C+Q(P−E)=M получается порог P=E×(1−1/L+m/100), а падение =100/L−m процентов. Требуется m/100<1/L, иначе начального залога уже недостаточно. Без поддерживающей суммы при 1× порог равен нулю; это граница формулы, а не гарантия биржевого механизма. Для короткой позиции, inverse-контракта или текущей стоимости M формула другая.",
    "example": "Залог 50 000, плечо 5×, вход 2400 и поддерживающая доля 0,5% от начальной стоимости дают позицию 250 000 и учебный порог 1932 — падение 19,5%. Биржевой порог с поддержкой от текущей стоимости отличался бы; здесь он не рассчитывается. При входе 100, плече 1× и фиксированной поддерживающей доле 0% модельный порог 0, расстояние 100%. Это предельная алгебраическая точка выбранной модели, а не обещание отсутствия ликвидации на бирже.",
    "faq": [
      {
        "q": "Почему при большем плече ликвидация настолько ближе?",
        "a": "Без поддерживающей суммы и расходов запас до исчерпания начального залога равен 100/L процентов. С положительным m модельный запас 100/L−m. При фиксированном m удвоение плеча не обязано вдвое сокращать этот второй запас; при m≥100/L модель отклоняет исходные условия."
      },
      {
        "q": "Для чего нужна поддерживающая маржа?",
        "a": "Это заданная пользователем доля начальной стоимости позиции, которую модель оставляет как минимальный остаток залога. Реальные площадки могут рассчитывать её от текущей стоимости и использовать риск-уровни или вычеты. Их требования нельзя подставлять сюда без проверки базы."
      },
      {
        "q": "Подходит ли расчёт для короткой позиции?",
        "a": "Арифметика зеркальна, но направление обратное: короткую позицию ликвидирует рост, а не падение. Этот расчёт написан для длинной позиции."
      },
      {
        "q": "Учитываются ли комиссии и фандинг?",
        "a": "Нет. Комиссии, проценты за заём и funding не включены. Funding может списываться или зачисляться в зависимости от контракта и периода; изменение обеспечения и его влияние на биржевой порог нужно оценивать по правилам площадки."
      }
    ],
    "disclaimer": "Показан только лонг с линейным результатом и поддерживающей суммой от начальной стоимости. Формулы биржи могут использовать текущую стоимость, mark price, ступени, комиссии и общий баланс; здесь нет биржевого прогноза или оценки допустимого риска."
  },
  "en": {
    "longDescription": "Leverage increases the position size: collateral C at leverage L gives initial notional C×L. For a linear long position without costs, a fall of 1/L from entry consumes the initial collateral: 20% at 5× or 5% at 20×. The threshold here assumes a fixed maintenance amount defined as a percentage of initial notional. This is a teaching model, not an exchange liquidation quote: current-notional maintenance, risk tiers, mark price, fees and margin mode can give another result.",
    "howToUse": [
      "Enter the margin you are putting up.",
      "Enter the leverage multiple.",
      "Enter the entry price of the instrument.",
      "Enter maintenance as a share of initial notional for this model; check the venue formula separately."
    ],
    "howItWorks": "Notional N=C×L and quantity Q=N/E. Maintenance M=N×m/100 stays fixed in this model. Solving C+Q(P−E)=M gives threshold P=E×(1−1/L+m/100), with drop 100/L−m percent. Require m/100<1/L so initial collateral exceeds maintenance. At 1× with zero maintenance the threshold is zero: a formula boundary, not a guaranteed exchange mechanism. A short position, inverse contract or maintenance based on current notional needs another formula.",
    "example": "Collateral 50,000, leverage 5×, entry 2,400 and 0.5% maintenance on initial notional give a 250,000 position and model threshold 1,932, a 19.5% drop. A venue using current-notional maintenance has a different threshold and is not simulated here. At entry 100, leverage 1× and fixed maintenance share 0%, the modeled threshold is 0 and distance 100%. This is the limiting point of the chosen algebra, not a promise of no exchange liquidation.",
    "faq": [
      {
        "q": "Why does higher leverage bring liquidation so much closer?",
        "a": "Without maintenance or costs, the move that consumes initial collateral is 100/L percent. With positive m the model cushion is 100/L−m. At fixed m, doubling leverage does not necessarily halve that second cushion; m≥100/L is rejected as initially insufficient collateral."
      },
      {
        "q": "What is the maintenance margin for?",
        "a": "Here it is a user-defined share of initial notional retained as a minimum collateral balance. Real venues can use current notional, risk tiers or deductions instead. Their quoted requirements cannot be substituted without checking the base."
      },
      {
        "q": "Does this apply to short positions too?",
        "a": "The arithmetic mirrors, but the direction reverses: a short is liquidated by a rise, not a fall. This calculation is written for a long position."
      },
      {
        "q": "Are funding and fees included?",
        "a": "No. Trading fees, borrowing charges and funding are excluded. Funding may debit or credit collateral depending on contract and period; its effect on a venue threshold must be assessed under venue rules."
      }
    ],
    "disclaimer": "Only a linear long with maintenance fixed from initial notional is shown. Venues may use current notional, mark price, tiers, fees and shared balances; this is not a venue liquidation forecast or risk assessment."
  },
  "uk": {
    "longDescription": "Плече збільшує розмір позиції: за застави C та плеча L початкова вартість становить C×L. Для лінійної довгої позиції без витрат падіння на 1/L від ціни входу поглинає початкову заставу: 20% за 5× або 5% за 20×. Поріг тут використовує сталу підтримувальну суму як відсоток від початкової вартості позиції. Це навчальна модель, не точна біржова ціна ліквідації: поточна вартість, рівні ризику, mark price, комісії та режим забезпечення можуть змінити результат.",
    "howToUse": [
      "Введіть розмір застави.",
      "Задайте плече й ціну входу.",
      "Задайте підтримувальну частку саме початкової вартості позиції для цієї моделі; біржову формулу перевіряйте окремо."
    ],
    "howItWorks": "Вартість N=C×L, кількість Q=N/E. Підтримувальна сума M=N×m/100 у цій моделі стала. Із C+Q(P−E)=M отримуємо поріг P=E×(1−1/L+m/100), падіння 100/L−m відсотків. Потрібно m/100<1/L, інакше початкової застави вже недостатньо. За 1× та нульової підтримувальної суми поріг нульовий: це межа формули, не гарантія біржового механізму. Коротка позиція, inverse-контракт або підтримка від поточної вартості потребують іншої формули.",
    "example": "Застава 50 000, плече 5×, вхід 2400 та підтримувальна частка 0,5% від початкової вартості дають позицію 250 000 і навчальний поріг 1932 — падіння 19,5%. Біржовий поріг із підтримкою від поточної вартості був би іншим і тут не розраховується. За входу 100, плеча 1× і фіксованої підтримувальної частки 0% модельний поріг 0, відстань 100%. Це гранична точка обраної алгебри, не обіцянка відсутності біржової ліквідації.",
    "faq": [
      {
        "q": "Що таке ціна ліквідації?",
        "a": "Показаний поріг — ціна, за якої модельний залишок застави дорівнює сталій підтримувальній сумі M. Біржова ліквідація залежить від mark price, режиму маржі та правил контракту; це число не є гарантією виконання за заданою ціною."
      },
      {
        "q": "Чому плече збільшує ризик сильніше, ніж прибуток?",
        "a": "Плече однаково масштабує прибуток і збиток від зміни ціни відносно початкової застави. Ліквідація може закрити позицію до подальшого відновлення ціни. Калькулятор показує лише навчальний поріг і не обмежує фактичний збиток величиною застави."
      },
      {
        "q": "Що таке підтримувальна маржа?",
        "a": "У цьому калькуляторі це відсоток початкової вартості позиції, що задає сталу мінімальну суму застави. На майданчику база й рівні вимог можуть бути іншими; їх треба перевірити за контрактом, а не вважати цю формулу універсальною."
      },
      {
        "q": "Чи можна втратити більше за заставу?",
        "a": "Розрахунок не визначає межі фактичних збитків. Прослизання, комісії, режим забезпечення й правила контракту можуть змінити результат; біржові захисні механізми тут не моделюються."
      }
    ],
    "disclaimer": "Показано лише лонг із лінійним результатом і підтримувальною сумою від початкової вартості. Біржа може використовувати поточну вартість, mark price, ступені, комісії та спільний баланс; це не біржовий прогноз чи оцінка ризику."
  },
  "de": {
    "longDescription": "Der Hebel erhöht die Positionsgröße: Sicherheit C mit Hebel L ergibt den Anfangswert C×L. Bei einer linearen Long-Position ohne Kosten verbraucht ein Rückgang um 1/L ab Einstieg die Anfangssicherheit:20% bei 5× oder 5% bei 20×. Der hier gezeigte Schwellenpreis verwendet einen festen Erhaltungsbetrag als Prozentsatz des anfänglichen Positionswerts. Es ist ein Lehrmodell, kein Liquidationskurs einer Börse: Bewertung zum aktuellen Kurs, Risikostufen, Mark Price, Gebühren und Margin-Modus können andere Werte ergeben.",
    "howToUse": [
      "Trage die Sicherheit ein, die du einsetzt.",
      "Trage den Hebelfaktor ein.",
      "Trage den Einstiegspreis des Instruments ein.",
      "Gib den Erhaltungsanteil am anfänglichen Positionswert für dieses Modell ein; prüfe die Plattformformel gesondert."
    ],
    "howItWorks": "Positionswert N=C×L, Menge Q=N/E. Der Erhaltungsbetrag M=N×m/100 bleibt im Modell konstant. Aus C+Q(P−E)=M folgt P=E×(1−1/L+m/100); der Rückgang beträgt 100/L−m Prozent. Es muss m/100<1/L gelten, sonst reicht die Anfangssicherheit bereits nicht. Bei 1× und null Erhaltungsbetrag ist der Schwellenpreis null; dies ist eine Formelgrenze, kein garantierter Börsenablauf. Für Short, inverse Kontrakte oder Erhaltung auf Basis des aktuellen Positionswerts gilt eine andere Formel.",
    "example": "Sicherheit 5000, Hebel 5×, Einstieg 2400 und 0,5% Erhaltung auf den Anfangswert ergeben eine Position 25000 und den Modellschwellenpreis 1932, also 19,5% Rückgang. Eine Plattform mit Erhaltung auf den aktuellen Positionswert hat einen anderen Schwellenpreis und wird hier nicht simuliert. Bei Einstieg 100, Hebel 1× und festem Erhaltungsanteil 0% ist die Modellschwelle 0, Abstand 100%. Das ist ein algebraischer Grenzpunkt, keine Zusage fehlender Börsenliquidation.",
    "faq": [
      {
        "q": "Warum rückt ein höherer Hebel die Liquidation so viel näher?",
        "a": "Ohne Erhaltungsbetrag und Kosten verbraucht ein Rückgang um 100/L Prozent die Anfangssicherheit. Bei positivem m ist das Modellpolster 100/L−m. Bei festem m halbiert doppelter Hebel dieses zweite Polster nicht unbedingt; m≥100/L wird als anfangs unzureichende Sicherheit abgewiesen."
      },
      {
        "q": "Wozu die Erhaltungsmarge?",
        "a": "Hier ist dies ein vom Nutzer gewählter Anteil des Anfangswerts, der als minimale verbleibende Sicherheit dient. Reale Plattformen können aktuelle Werte, Risikostufen oder Abzüge verwenden. Ihre Anforderungen dürfen nur bei passender Bezugsbasis eingesetzt werden."
      },
      {
        "q": "Gilt das auch für Short-Positionen?",
        "a": "Die Rechnung spiegelt sich, aber die Richtung kehrt sich um: eine Short-Position wird von einem Anstieg liquidiert und nicht von einem Rückgang. Diese Rechnung ist für eine Long-Position geschrieben."
      },
      {
        "q": "Sind Finanzierung und Gebühren enthalten?",
        "a": "Nein. Handelsgebühren, Kreditzinsen und Funding fehlen. Funding kann je nach Vertrag und Zeitraum belasten oder gutschreiben; die Wirkung auf die Handelsschwelle ist nach den Plattformregeln zu bestimmen."
      }
    ],
    "disclaimer": "Gezeigt wird nur ein linearer Long mit Erhaltung aus Anfangsnotional. Handelsplätze können aktuelles Notional, Mark Price, Stufen, Gebühren und gemeinsame Guthaben nutzen; dies prognostiziert keine Börsenliquidation und bewertet kein Risiko."
  },
  "es": {
    "longDescription": "El apalancamiento aumenta el tamaño: garantía C y múltiplo L dan un nominal inicial C×L. En una posición larga lineal sin gastos, una caída de 1/L desde la entrada consume la garantía inicial: 20% a 5× o 5% a 20×. El umbral mostrado usa un mantenimiento fijo como porcentaje del nominal inicial. Es un modelo educativo, no un precio de liquidación de una plataforma: el nominal actual, los niveles de riesgo, mark price, comisiones y modalidad de margen pueden dar otro resultado.",
    "howToUse": [
      "Introduce la garantía que vas a aportar.",
      "Introduce el múltiplo de apalancamiento.",
      "Introduce el precio de entrada del instrumento.",
      "Introduce mantenimiento como porcentaje del nominal inicial para este modelo; comprueba aparte la fórmula de la plataforma."
    ],
    "howItWorks": "Nominal N=C×L y cantidad Q=N/E. El mantenimiento M=N×m/100 permanece fijo en este modelo. Resolver C+Q(P−E)=M da P=E×(1−1/L+m/100), con caída 100/L−m por ciento. Se exige m/100<1/L; de lo contrario la garantía inicial ya sería insuficiente. A 1× y mantenimiento cero, el umbral es cero: una frontera de la fórmula, no un mecanismo garantizado de una plataforma. Cortos, contratos inversos y mantenimiento sobre nominal actual necesitan otra fórmula.",
    "example": "Garantía 5000, apalancamiento 5×, entrada 2400 y mantenimiento 0,5% sobre nominal inicial dan una posición 25000 y umbral del modelo 1932: caída 19,5%. Una plataforma con mantenimiento sobre nominal actual usa otro umbral, que aquí no se simula. Con entrada 100, apalancamiento 1× y mantenimiento fijo 0%, umbral modelado 0 y distancia 100%. Es un límite algebraico, no una promesa de ausencia de liquidación en la plataforma.",
    "faq": [
      {
        "q": "¿Por qué un apalancamiento mayor acerca tanto la liquidación?",
        "a": "Sin mantenimiento ni gastos, un movimiento del 100/L por ciento consume la garantía inicial. Con m positivo, el colchón del modelo es 100/L−m. Manteniendo m, duplicar el apalancamiento no necesariamente divide ese segundo colchón por dos; se rechaza m≥100/L por garantía inicialmente insuficiente."
      },
      {
        "q": "¿Para qué sirve el margen de mantenimiento?",
        "a": "Aquí es una proporción del nominal inicial elegida por el usuario que se conserva como garantía mínima. Las plataformas pueden usar nominal actual, niveles de riesgo o deducciones. No se deben trasladar sus requisitos sin comprobar la base."
      },
      {
        "q": "¿Vale también para posiciones cortas?",
        "a": "La aritmética es especular, pero el sentido se invierte: un corto se liquida con una subida y no con una caída. Este cálculo está escrito para una posición larga."
      },
      {
        "q": "¿Están incluidos el funding y las comisiones?",
        "a": "No. Se excluyen comisiones, costes de préstamo y funding. El funding puede cargar o abonar garantía según contrato y periodo; su efecto en el umbral real requiere las reglas de la plataforma."
      }
    ],
    "disclaimer": "Solo se muestra largo lineal con mantenimiento fijado sobre el nocional inicial. Las plataformas pueden usar nocional actual, mark price, tramos, comisiones y saldo compartido; no es una previsión de liquidación ni evaluación de riesgo."
  }
};
