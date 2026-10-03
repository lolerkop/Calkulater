import type { CalculatorDef } from '../../lib/types';
type Copy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;
export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Copy> = {
  "ru": {
    "longDescription": "Финансовая подушка переводит выбранный запас месяцев в денежную цель по текущим расходам. При расходах 85 000 шесть месяцев означают 510 000; доход сам по себе эту цель не определяет. Отдельно видны недостающая сумма, покрытие и готовность. Покрытие и готовность ограничены выбранной целью: при запасе на пять месяцев и цели четыре инструмент покажет четыре месяца и 100 %. Это завершение указанной цели, а не гарантия защиты от любого события или вывод о том, что лишние деньги нужно инвестировать.",
    "howToUse": [
      "Введите настоящие месячные расходы, а не доход.",
      "Выберите, на сколько месяцев хотите запас.",
      "Укажите, сколько уже отложено именно на эту цель.",
      "Считайте только те деньги, до которых реально добраться за день-другой."
    ],
    "howItWorks": "Цель T = месячные расходы E × запас M месяцев. Не хватает = max(T−S,0), где S — накоплено. Готовность = min(S/T×100 %,100 %); покрытые месяцы = min(S/E,M). E>0, M≥1, S≥0; дробный запас, например 2,5 месяца, допускается. Накопления сверх цели не уменьшают её и не увеличивают две ограниченные строки. Все суммы — в одной валюте и сегодняшних ценах.",
    "example": "При расходах 85 000 ₽ и цели в шесть месяцев нужно 510 000 ₽; накопленные 210 000 ₽ покрывают 2,471 месяца. При расходах 50 000, цели четыре месяца и накопленных 250 000 цель равна 200 000, нехватка 0, готовность 100 %, покрытие ограничено четырьмя месяцами.",
    "faq": [
      {
        "q": "На сколько месяцев делать подушку?",
        "a": "Количество месяцев вы задаёте сами с учётом необходимых расходов, устойчивости дохода и возможных непредвиденных затрат. Значение шесть в форме — числовой пример, не персональная рекомендация. Универсальный срок расчёт не определяет."
      },
      {
        "q": "Считать по расходам или по доходу?",
        "a": "По расходам, причём настоящим. Доход завышает цель для всякого, кто часть его откладывает, а подушка существует, чтобы покрывать обязательные траты, а не заработок."
      },
      {
        "q": "Где держать подушку?",
        "a": "Там, откуда её можно забрать за день-другой и где она не зависит от колебаний цены. Подушка, до которой не добраться в день увольнения, не выполняет свою единственную задачу."
      },
      {
        "q": "Почему готовность ограничена сотней процентов?",
        "a": "Это прогресс к выбранной цели. Например, расходы 50 000, цель четыре месяца и накоплено 250 000 дают цель 200 000, нехватку 0, готовность 100 % и четыре покрытых месяца. Полный запас равен пяти месяцам, но эта строка ограничена целью."
      }
    ],
    "disclaimer": "Текущие расходы и заданная цель без начисления дохода и будущих взносов. Инфляция, срок накопления, ограничения снятия и риск хранения не моделируются. 100 % означает достижение выбранной суммы, не универсальную финансовую безопасность."
  },
  "en": {
    "longDescription": "An emergency fund translates a chosen number of months into a cash target using current expenses. Expenses of 85,000 require 510,000 for six months; income alone does not set this target. The shortfall, coverage and progress are separate. Both coverage and progress are capped at the chosen goal: five months of savings against a four-month goal shows four months and 100%. Reaching that goal does not guarantee protection from every emergency or imply that the excess should be invested.",
    "howToUse": [
      "Enter your real monthly expenses, not your income.",
      "Choose how many months of cover you want.",
      "Enter what you have already set aside for this purpose.",
      "Count only money you could actually reach within a day or two."
    ],
    "howItWorks": "Target T = monthly expenses E × M months of cover. Shortfall = max(T−S,0), where S is saved. Progress = min(S/T×100%,100%); covered months = min(S/E,M). Expenses must be positive, months at least 1 and savings nonnegative. Fractional cover such as 2.5 months is allowed. Savings above the goal neither reduce the target nor increase the two capped rows. All money uses one currency and today’s prices.",
    "example": "Expenses of 85,000 with a six-month goal need 510,000; 210,000 saved covers 2.471 months. Expenses of 50,000, a four-month goal and 250,000 saved give a 200,000 target, zero shortfall, 100% progress and coverage capped at four months.",
    "faq": [
      {
        "q": "How many months should the fund cover?",
        "a": "Choose the months for your necessary expenses, income stability and possible unexpected costs. The default of six is a numerical example, not a personal recommendation. The calculator does not determine a universally sufficient reserve."
      },
      {
        "q": "Should I use expenses or income?",
        "a": "Expenses, and the real ones. Income overstates the target for anyone who saves part of it, and the fund exists to cover what you must spend, not what you happen to earn."
      },
      {
        "q": "Where should the fund be kept?",
        "a": "Somewhere reachable within a day or two and not exposed to price swings. A fund you cannot access on the day you lose your job is not performing its only function."
      },
      {
        "q": "Why is progress capped at a hundred per cent?",
        "a": "It measures progress towards the selected goal. Expenses of 50,000, a four-month goal and 250,000 saved give a 200,000 target, no shortfall, 100% progress and four covered months. Total holdings cover five months, but this row is goal-capped."
      }
    ],
    "disclaimer": "Current expenses and a chosen target, without earnings or future contributions. Inflation, accumulation time, withdrawal restrictions and storage risk are not modelled. 100% means reaching the chosen amount, not universal financial safety."
  },
  "uk": {
    "longDescription": "Фінансова подушка переводить вибраний запас місяців у грошову ціль за поточними витратами. Витрати 85 000 означають 510 000 на шість місяців; сам дохід ціль не визначає. Окремо видно нестачу, покриття та готовність. Покриття й готовність обмежені ціллю: запас на п’ять місяців за цілі чотири покаже чотири місяці та 100 %. Досягнення цілі не гарантує захисту від кожної події та не означає, що надлишок потрібно інвестувати.",
    "howToUse": [
      "Введіть щомісячні витрати — саме витрати, а не дохід.",
      "Задайте бажаний запас у місяцях.",
      "Введіть уже накопичену суму."
    ],
    "howItWorks": "Ціль T = місячні витрати E × запас M місяців. Нестача = max(T−S,0), де S — накопичено. Готовність = min(S/T×100 %,100 %); покриті місяці = min(S/E,M). E>0, M≥1, S≥0; дробовий запас на кшталт 2,5 місяця допустимий. Надлишок не зменшує ціль і не збільшує два обмежені рядки. Усі суми в одній валюті та сьогоднішніх цінах.",
    "example": "За витрат 85 000 ₴ і цілі в шість місяців потрібно 510 000 ₴; накопичені 210 000 ₴ покривають 2,471 місяця. За витрат 50 000, цілі чотири місяці й накопичених 250 000 ціль 200 000, нестача 0, готовність 100 %, покриття обмежене чотирма місяцями.",
    "faq": [
      {
        "q": "Скільки місяців запасу потрібно?",
        "a": "Запас місяців обираєте ви з огляду на необхідні витрати, стійкість доходу та можливі несподівані затрати. Початкове значення шість є числовим прикладом, а не особистою рекомендацією. Універсальний достатній запас розрахунок не визначає."
      },
      {
        "q": "Чому рахувати від витрат, а не від доходу?",
        "a": "Бо подушка має покривати життя без доходу. Витрати — це те, що доведеться платити в будь-якому разі; дохід у цей момент відсутній за визначенням."
      },
      {
        "q": "Де тримати ці гроші?",
        "a": "Калькулятор не обирає рахунок або продукт. Перевірте доступність грошей, строки зняття, комісії та ризик зміни вартості. Сума, яку неможливо використати для потрібного платежу, не забезпечує такого покриття."
      },
      {
        "q": "Чи входять сюди борги?",
        "a": "Мінімальні регулярні платежі за боргами можна включити до місячних витрат, якщо резерв має їх покривати. Уникайте подвійного врахування тих самих платежів. Розрахунок не визначає, що слід погасити раніше за створення резерву."
      },
      {
        "q": "Чому покриття подушки залежить від заданої цілі?",
        "a": "Рядок дорівнює min(накопичено/витрати, ціль у місяцях). За витрат 50 000, цілі чотири місяці й накопичених 250 000 показано чотири, хоча повний запас покриває п’ять місяців."
      }
    ],
    "disclaimer": "Поточні витрати й обрана ціль без доходу та майбутніх внесків. Інфляція, строк накопичення, обмеження зняття й ризик зберігання не моделюються. 100 % означає досягнення обраної суми, а не загальну фінансову безпеку."
  },
  "de": {
    "longDescription": "Der Notgroschen übersetzt eine gewählte Monatszahl anhand der laufenden Ausgaben in ein Geldziel. Bei 1700 Monatsausgaben erfordern sechs Monate 10 200; Einkommen allein bestimmt dieses Ziel nicht. Fehlbetrag, Deckung und Fortschritt stehen separat. Deckung und Fortschritt werden beim Ziel gedeckelt: fünf Monate Rücklage bei einem Viermonatsziel ergeben vier Monate und 100 %. Das Erreichen des Ziels garantiert keinen Schutz vor jedem Notfall und bedeutet nicht, dass ein Überschuss angelegt werden muss.",
    "howToUse": [
      "Trage deine wirklichen Monatsausgaben ein und nicht dein Einkommen.",
      "Wähle, wie viele Monate an Deckung du willst.",
      "Trage ein, was du dafür bereits zurückgelegt hast.",
      "Zähle nur Geld, das du innerhalb eines oder zweier Tage erreichen könntest."
    ],
    "howItWorks": "Ziel T = Monatsausgaben E × M Monate Deckung. Fehlbetrag = max(T−S,0), mit Rücklage S. Fortschritt = min(S/T×100 %,100 %); gedeckte Monate = min(S/E,M). E>0, M≥1, S≥0; gebrochene Deckung wie 2,5 Monate ist zulässig. Ersparnisse über dem Ziel senken dieses nicht und erhöhen die zwei gedeckelten Zeilen nicht. Alle Beträge verwenden eine Währung und heutige Preise.",
    "example": "Ausgaben von 1700 € brauchen für sechs Monate 10 200 €; 4200 € zurückgelegt decken 2,471 Monate. Bei Ausgaben 50 000, Ziel vier Monate und Rücklage 250 000 lautet das Ziel 200 000: Fehlbetrag null, Fortschritt 100 %, Deckung auf vier Monate begrenzt.",
    "faq": [
      {
        "q": "Wie viele Monate soll der Notgroschen decken?",
        "a": "Wähle die Monate anhand notwendiger Ausgaben, Einkommensstabilität und möglicher unerwarteter Kosten. Der Standardwert sechs ist ein Zahlenbeispiel, keine persönliche Empfehlung. Der Rechner ermittelt keine universell ausreichende Reserve."
      },
      {
        "q": "Ausgaben oder Einkommen?",
        "a": "Ausgaben, und zwar die wirklichen. Das Einkommen setzt das Ziel für jeden zu hoch an, der einen Teil davon spart, und der Notgroschen deckt das, was du ausgeben musst, und nicht das, was du gerade verdienst."
      },
      {
        "q": "Wo soll der Notgroschen liegen?",
        "a": "Irgendwo, wo er innerhalb eines oder zweier Tage erreichbar ist und keinen Kursschwankungen ausgesetzt. Ein Notgroschen, an den du an dem Tag nicht herankommst, an dem du deine Stelle verlierst, erfüllt seine einzige Aufgabe nicht."
      },
      {
        "q": "Warum ist der Fortschritt bei hundert Prozent gedeckelt?",
        "a": "Gemessen wird der Fortschritt zum gewählten Ziel. Bei 50 000 Ausgaben, vier Zielmonaten und 250 000 Rücklage beträgt das Ziel 200 000: Fehlbetrag 0, Fortschritt 100 %, Deckung vier Monate. Insgesamt sind fünf Monate vorhanden; diese Zeile ist jedoch beim Ziel gedeckelt."
      }
    ],
    "disclaimer": "Laufende Ausgaben und gewähltes Ziel ohne Erträge oder künftige Einzahlungen. Inflation, Ansparzeit, Entnahmebeschränkungen und Verwahrrisiko werden nicht modelliert. 100 % bedeutet das gewählte Geldziel, keine allgemeine finanzielle Sicherheit."
  },
  "es": {
    "longDescription": "El fondo de emergencia convierte unos meses elegidos en un objetivo monetario según los gastos actuales. Gastos de 850 requieren 5100 para seis meses; los ingresos por sí solos no fijan esa meta. Se muestran por separado la falta, la cobertura y el progreso. La cobertura y el progreso se limitan al objetivo: cinco meses ahorrados frente a una meta de cuatro muestran cuatro meses y 100 %. Alcanzar la meta no garantiza protección frente a todo imprevisto ni implica que el exceso deba invertirse.",
    "howToUse": [
      "Introduce tus gastos mensuales reales, no tus ingresos.",
      "Elige cuántos meses de cobertura quieres.",
      "Introduce lo que ya has apartado para este fin.",
      "Cuenta solo el dinero al que podrías acceder de verdad en un día o dos."
    ],
    "howItWorks": "Meta T = gastos mensuales E × M meses de cobertura. Falta = max(T−S,0), con ahorro S. Progreso = min(S/T×100 %,100 %); meses cubiertos = min(S/E,M). E>0, M≥1, S≥0; se admiten meses fraccionarios, como 2,5. El exceso de ahorro no reduce la meta ni aumenta las dos filas limitadas. Los importes usan una moneda y precios actuales.",
    "example": "Unos gastos de 850 con un objetivo de seis meses necesitan 5100; 2100 ahorrados cubren 2,471 meses. Gastos de 50 000, meta de cuatro meses y ahorro de 250 000 dan objetivo de 200 000, falta cero, progreso 100 % y cobertura limitada a cuatro meses.",
    "faq": [
      {
        "q": "¿Cuántos meses debe cubrir el fondo?",
        "a": "Elige los meses según tus gastos necesarios, estabilidad de ingresos y posibles imprevistos. El valor inicial de seis es un ejemplo numérico, no una recomendación personal. La calculadora no determina una reserva suficiente para todo el mundo."
      },
      {
        "q": "¿Debo usar los gastos o los ingresos?",
        "a": "Los gastos, y los reales. Los ingresos exageran el objetivo de quien ahorra una parte, y el fondo existe para cubrir lo que tienes que gastar, no lo que da la casualidad de que ganas."
      },
      {
        "q": "¿Dónde debe guardarse el fondo?",
        "a": "En algún sitio accesible en un día o dos y no expuesto a oscilaciones de precio. Un fondo al que no puedes acceder el día que pierdes el trabajo no cumple su única función."
      },
      {
        "q": "¿Por qué el avance se limita al cien por cien?",
        "a": "Mide el avance hacia la meta elegida. Gastos de 50 000, meta de cuatro meses y ahorro de 250 000 dan objetivo de 200 000, falta 0, progreso 100 % y cuatro meses cubiertos. El ahorro total cubre cinco meses, pero esta fila se limita a la meta."
      }
    ],
    "disclaimer": "Gastos actuales y una meta elegida, sin rendimientos ni aportaciones futuras. No se modelan inflación, tiempo de acumulación, restricciones de retirada ni riesgo de custodia. El 100 % significa alcanzar la cantidad elegida, no seguridad financiera universal."
  }
};
