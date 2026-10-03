// Individual subject copy; native human editorial review pending.
export const contract = {
  "ru": {
    "longDescription": "Прибавляет выбранные чаевые к счёту и делит итог поровну между целым числом людей. Если включить округление, каждая доля поднимается до целой денежной единицы, а общий итог пересчитывается. Это не округление до ближайшей купюры или цента и не выбор принятого процента чаевых.",
    "howToUse": [
      "Введите положительную сумму счёта в одной валюте.",
      "Задайте неотрицательный процент и целое число людей от одного; дробный участник не округляется автоматически.",
      "Выберите округление доли вверх или обычное деление. При включённом варианте округляется до целой денежной единицы.",
      "Проверьте уже включённое обслуживание самостоятельно: калькулятор не вычитает сервисный сбор."
    ],
    "howItWorks": "Чаевые = счёт × процент /100. Без округления итог = счёт + чаевые, доля = итог / люди. С округлением доля = округление этой доли вверх до целого, новый итог = доля × люди. Положительный излишек относительно исходного итога выводится отдельно. Десятичные денежные отношения округляются до двух знаков только при выводе; расчёт сохраняет неокруглённые отношения.",
    "example": "Счёт 5400 с чаевыми 15 % даёт 6210, по 1552,50 на четверых. Округление доли вверх даст 1553 с человека, итог 6212 и 2 сверх исходного итога.",
    "faq": [
      {
        "q": "Сколько принято оставлять на чай?",
        "a": "Это зависит от страны и заведения, поэтому процент выбираете вы. Калькулятор не подсказывает норму и не подставляет её за вас."
      },
      {
        "q": "Что делает округление доли вверх?",
        "a": "Округляет сумму каждого до целого, из-за чего на столе обычно оказывается чуть больше счёта. Этот излишек показан отдельной строкой, чтобы ничего не пряталось."
      },
      {
        "q": "Вычитается ли уже включённое обслуживание?",
        "a": "Нет. Заменяет ли сервисный сбор чаевые — решение по вашему счёту, а не вывод из арифметики."
      },
      {
        "q": "Можно ли считать без деления на компанию?",
        "a": "Да. Оставьте одного человека, и вы получите просто чаевые и итог."
      }
    ],
    "disclaimer": "Равные доли в одной валюте, без конвертации. Процент выбираете вы; местные правила, сервисный сбор и распределение по индивидуальным заказам не определяются."
  },
  "en": {
    "longDescription": "Adds your chosen tip and splits the total equally among a whole number of people. With rounding enabled, each share rises to a whole currency unit and the total is recalculated. It does not round to a banknote or cent and does not select a customary tip rate.",
    "howToUse": [
      "Enter a positive bill in one currency.",
      "Set a nonnegative percentage and a whole count of at least one person; fractional people are not rounded automatically.",
      "Choose upward share rounding or ordinary division. The rounding option uses a whole currency unit.",
      "Check any included service charge yourself; the calculator does not subtract it."
    ],
    "howItWorks": "Tip = bill × percentage /100. Without rounding, total = bill + tip and share = total / people. With rounding, share is rounded upward to a whole unit, and new total = share × people. Any positive excess over the original total is shown separately. Decimal monetary ratios are rounded to two places only for display; calculations retain the unrounded ratios.",
    "example": "5400 with 15% tip gives 6210, or 1552.50 each for four. Rounding upward gives 1553 each, total 6212 and 2 above the original total.",
    "faq": [
      {
        "q": "How much should I tip?",
        "a": "That depends on the country and the venue, so the percentage is yours to choose. The calculator does not suggest a norm or fill one in for you."
      },
      {
        "q": "What does rounding each share up do?",
        "a": "It rounds every person to a whole unit, which usually leaves a little more than the bill. That surplus is shown as its own line so nothing is hidden."
      },
      {
        "q": "Is service already included subtracted?",
        "a": "No. Whether a service charge replaces the tip is a judgement about your bill, not something the arithmetic can decide."
      },
      {
        "q": "Can I use it without splitting?",
        "a": "Yes. Leave the count at one and you simply get the tip and the total."
      }
    ],
    "disclaimer": "Equal shares in one currency without conversion. You choose the percentage; local customs, service charges and splitting by individual orders are not determined."
  },
  "uk": {
    "longDescription": "Додає обрані чайові й ділить підсумок порівну між цілим числом людей. З округленням частка піднімається до цілої грошової одиниці, а загальна сума перераховується. Це не округлення до купюри чи копійки й не вибір прийнятого відсотка чайових.",
    "howToUse": [
      "Введіть додатний рахунок в одній валюті.",
      "Задайте невід’ємний відсоток і цілу кількість людей від одного; дробовий учасник автоматично не округлюється.",
      "Оберіть округлення частки вгору або звичайне ділення; округлення стосується цілої грошової одиниці.",
      "Самостійно перевірте включене обслуговування: сервісний збір не віднімається."
    ],
    "howItWorks": "Чайові = рахунок × відсоток /100. Без округлення підсумок = рахунок + чайові, частка = підсумок / люди. З округленням частка округлюється вгору до цілого, новий підсумок = частка × люди. Додатний надлишок показується окремо. Десяткові грошові відношення округлюються до двох знаків лише для виведення; розрахунок зберігає неокруглені відношення.",
    "example": "Рахунок 5400 із чайовими 15 % дає 6210, по 1552,50 на чотирьох. Округлення вгору дає 1553 на людину, разом 6212 і 2 понад початковий підсумок.",
    "faq": [
      {
        "q": "Скільки прийнято залишати?",
        "a": "Відсоток залежить від ваших умов і рішення. Калькулятор не встановлює норму для країни чи закладу; включений сервісний збір перевіряйте у своєму рахунку."
      },
      {
        "q": "Від якої суми рахувати відсоток?",
        "a": "Від суми рахунку. Якщо в ньому вже є рядок обслуговування, чайові понад нього залишають за бажанням, а не за правилом."
      },
      {
        "q": "Чому частка рахується від підсумку?",
        "a": "Бо ділиться вся сума, яку ви заплатите. Ділення самого рахунку залишило б чайові неврахованими, і хтось доплачував би за всіх."
      },
      {
        "q": "Як розділити нерівно?",
        "a": "Порахуйте підсумок і поділіть його пропорційно замовленому. Для цього зручніше окремий розрахунок поділу суми за частками."
      }
    ],
    "disclaimer": "Рівні частки в одній валюті без перетворення. Відсоток обираєте ви; місцеві звичаї, сервісний збір і поділ за індивідуальними замовленнями не визначаються."
  },
  "de": {
    "longDescription": "Addiert das gewählte Trinkgeld und teilt gleichmäßig durch eine ganze Personenzahl. Beim Aufrunden steigt jeder Anteil auf eine ganze Geldeinheit und die Gesamtsumme wird neu berechnet. Es wird weder auf Banknoten noch auf Cent gerundet und kein üblicher Trinkgeldsatz gewählt.",
    "howToUse": [
      "Einen positiven Rechnungsbetrag in einer Währung eingeben.",
      "Nichtnegativen Prozentsatz und ganze Personenzahl ab eins angeben; Bruchteile von Personen werden nicht gerundet.",
      "Aufrunden je Anteil oder gewöhnliches Teilen wählen; Aufrunden gilt für ganze Geldeinheiten.",
      "Enthaltenen Servicezuschlag selbst prüfen; der Rechner zieht ihn nicht ab."
    ],
    "howItWorks": "Trinkgeld = Rechnung × Prozent /100. Ohne Aufrunden: Gesamt = Rechnung + Trinkgeld, Anteil = Gesamt / Personen. Mit Aufrunden wird der Anteil auf die nächste ganze Einheit erhöht; neues Gesamt = Anteil × Personen. Positiver Mehrbetrag steht separat. Dezimale Geldverhältnisse werden erst zur Anzeige auf zwei Stellen gerundet; die Rechnung behält ungerundete Verhältnisse.",
    "example": "5400 mit 15 % Trinkgeld ergibt 6210, also 1552,50 je Person bei vier Personen. Aufrunden ergibt 1553 je Person, Gesamt 6212 und 2 zusätzlich, alles in derselben gewählten Geldeinheit.",
    "faq": [
      {
        "q": "Wie viel Trinkgeld soll ich geben?",
        "a": "Das hängt von Land und Lokal ab, den Prozentsatz wählst du deshalb selbst. Der Rechner schlägt keine Norm vor und trägt keine für dich ein."
      },
      {
        "q": "Was bewirkt das Aufrunden je Anteil?",
        "a": "Es rundet jede Person auf eine glatte Einheit, was meist etwas mehr als die Rechnung ergibt. Dieser Überschuss steht in einer eigenen Zeile, damit nichts verborgen bleibt."
      },
      {
        "q": "Wird ein bereits enthaltener Bedienzuschlag abgezogen?",
        "a": "Nein. Ob ein Bedienzuschlag das Trinkgeld ersetzt, ist eine Beurteilung deiner Rechnung und nichts, was die Rechnerei entscheiden kann."
      },
      {
        "q": "Kann ich ihn ohne Aufteilen nutzen?",
        "a": "Ja. Lass die Zahl bei eins, und du bekommst schlicht das Trinkgeld und die Summe."
      }
    ],
    "disclaimer": "Gleiche Anteile in einer Währung, ohne Umrechnung. Den Prozentsatz wählen Sie; örtliche Gepflogenheiten, Servicezuschläge und individuelle Bestellungen werden nicht bestimmt."
  },
  "es": {
    "longDescription": "Añade la propina elegida y reparte el total por igual entre un número entero de personas. Con redondeo, cada parte sube a una unidad monetaria entera y se recalcula el total. No redondea a billetes ni céntimos, ni elige un porcentaje habitual.",
    "howToUse": [
      "Introduce una cuenta positiva en una moneda.",
      "Fija porcentaje no negativo y número entero de personas desde una; no se redondean participantes fraccionarios.",
      "Elige redondeo al alza por persona o división normal; el redondeo usa unidades monetarias enteras.",
      "Comprueba por tu cuenta el servicio incluido; no se resta automáticamente."
    ],
    "howItWorks": "Propina = cuenta × porcentaje /100. Sin redondeo: total = cuenta + propina, parte = total / personas. Con redondeo se eleva cada parte al entero siguiente; nuevo total = parte × personas. El exceso positivo sobre el total inicial aparece aparte. Las razones monetarias decimales se redondean a dos cifras solo al mostrarlas; el cálculo conserva las razones sin redondear.",
    "example": "5400 con 15 % da 6210, o 1552,50 por persona entre cuatro. Redondear al alza da 1553 por persona, total 6212 y 2 adicionales, en la misma unidad monetaria.",
    "faq": [
      {
        "q": "¿Cuánta propina debo dejar?",
        "a": "Depende del país y del local, así que el porcentaje lo eliges tú. La calculadora no sugiere una norma ni la rellena por ti."
      },
      {
        "q": "¿Qué hace redondear al alza cada parte?",
        "a": "Redondea a cada persona a una unidad entera, lo que suele dejar algo más que la cuenta. Ese sobrante se muestra en su propia línea para que no quede nada oculto."
      },
      {
        "q": "¿Se resta el servicio ya incluido?",
        "a": "No. Si un cargo por servicio sustituye a la propina es un juicio sobre tu cuenta, no algo que la aritmética pueda decidir."
      },
      {
        "q": "¿Puedo usarla sin repartir?",
        "a": "Sí. Deja el número en uno y obtendrás simplemente la propina y el total."
      }
    ],
    "disclaimer": "Partes iguales en una moneda y sin conversión. El porcentaje lo eliges tú; no determina costumbres locales, servicio ni reparto según pedidos individuales."
  }
};
