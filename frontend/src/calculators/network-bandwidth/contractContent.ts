// Authored contract with individually retained effective legacy passages.
// AI review; human language and subject review remain pending.
export const contractContent = {
  "ru": {
    "shortDescription": "Оценка полосы по общему числу пользователей, доле активных и явному запасу.",
    "seoDescription": "Рассчитайте полосу в Мбит/с по общему числу пользователей, средней доле активных, потребности на активного пользователя и запасу.",
    "longDescription": "Умножает число пользователей на долю активных одновременно и на полосу, нужную каждому, а затем добавляет выбранный вами запас. Ничего не спрятано в коэффициент «на протокол»: реальные накладные расходы зависят от протокола, кодека и сети, поэтому каждый множитель, влияющий на ответ, вынесен видимым полем.",
    "howToUse": [
      "Укажите, сколько пользователей обслуживает канал.",
      "Введите полосу, нужную каждому.",
      "Задайте долю активных одновременно и запас."
    ],
    "howItWorks": "Ожидаемое число активных A = всего пользователей N·доля c/100. Базовая полоса = A·скорость на активного пользователя b; с запасом z% получается A·b·(100+z)/100. N — положительное безопасное целое, c от 0 до 100%, z≥0. A может быть дробным ожидаемым значением, а не числом реально подключённых людей. При c=0 полоса равна нулю. Все скорости относятся к одному выбранному направлению передачи.",
    "example": "50 пользователей по 5 Мбит/с дают 250 Мбит/с сырьём и 300 Мбит/с с запасом в 20 процентов.",
    "faq": [
      {
        "q": "Считать всех пользователей или только активных?",
        "a": "И тех и других, по отдельности. Введите общее число и задайте долю активных одновременно — сто рабочих мест редко смотрят видео разом."
      },
      {
        "q": "Куда идёт процент запаса?",
        "a": "Он добавляется поверх сырой величины. Больше за ним ничего не применяется: реальные накладные расходы протокола слишком разные, чтобы угадывать их за вас."
      },
      {
        "q": "Какой запас разумен?",
        "a": "Зависит от того, насколько неровный трафик. Поле существует именно для того, чтобы допущение осталось вашим и осталось видимым."
      },
      {
        "q": "Почему мегабиты, а не мегабайты?",
        "a": "Каналы продают в битах в секунду. Результат дополнительно показан в мегабайтах в секунду — для сравнения со скоростью загрузки."
      }
    ],
    "disclaimer": "Сценарная оценка среднего спроса, не гарантия достаточной полосы в пик. Не учитывает задержки, потери, протоколы и другой трафик сверх введённых предположений."
  },
  "en": {
    "shortDescription": "Estimate bandwidth from total users, their active share and explicit headroom.",
    "seoDescription": "Calculate Mbit/s from total users, mean active share, demand per active user and headroom.",
    "longDescription": "Multiplies the number of users by the share active at once and the bandwidth each one needs, then adds the headroom you choose. Nothing is hidden in a protocol coefficient: real overhead depends on protocol, codec and network, so every factor that changes the answer is a visible field.",
    "howToUse": [
      "Enter how many users the link serves.",
      "Enter the bandwidth each one needs.",
      "Set the share active at once and the headroom."
    ],
    "howItWorks": "Expected active users A = total users N·active share c/100. Raw bandwidth = A·rate per active user b; headroom z% gives A·b·(100+z)/100. N is a positive safe integer, c is 0–100% and z≥0. A may be a fractional expectation rather than an observed headcount. At c=0 bandwidth is zero. All rates refer to the same selected transfer direction.",
    "example": "50 users at 5 Mbit/s each is 250 Mbit/s raw, or 300 Mbit/s with 20 percent headroom.",
    "faq": [
      {
        "q": "Should I count all users or only active ones?",
        "a": "Both, separately. Enter the total and set the share active at once — a hundred seats rarely stream simultaneously."
      },
      {
        "q": "Where does the headroom percentage go?",
        "a": "It is added on top of the raw figure. Nothing else is applied behind it, because real protocol overhead varies too much to guess on your behalf."
      },
      {
        "q": "How much headroom is sensible?",
        "a": "That depends on how bursty the traffic is. The field exists so the assumption stays yours and stays visible."
      },
      {
        "q": "Why megabits and not megabytes?",
        "a": "Links are sold in bits per second. The result also shows megabytes per second for comparison with download speeds."
      }
    ],
    "disclaimer": "Scenario estimate of mean demand, not a peak-capacity guarantee. Latency, loss, protocols and other traffic are not modelled beyond the supplied assumptions."
  },
  "uk": {
    "shortDescription": "Оцінка смуги за загальною кількістю користувачів, часткою активних і явним запасом.",
    "seoDescription": "Обчисліть смугу в Mbit/s за загальною кількістю користувачів, середньою часткою активних, попитом на активного користувача й запасом.",
    "longDescription": "Оцінює середню смугу для загальної кількості користувачів з явно заданою часткою одночасно активних. Запас додається за вашим сценарієм і не гарантує пропускної здатності для всіх піків. Для завантаження та вивантаження можна повторити розрахунок із різними потребами на користувача.",
    "howToUse": [
      "Введіть кількість користувачів.",
      "Задайте частку одночасно активних.",
      "Введіть потребу на одного користувача й запас."
    ],
    "howItWorks": "Очікувана кількість активних A = загальна кількість N·частка c/100. Базова смуга = A·швидкість на активного користувача b; із запасом z% маємо A·b·(100+z)/100. N — додатне безпечне ціле, c від 0 до 100%, z≥0. A може бути дробовим очікуваним значенням, а не реальною кількістю підключених людей. За c=0 смуга нульова. Усі швидкості стосуються одного вибраного напрямку передачі.",
    "example": "50 користувачів по 5 Мбіт/с дають 250 Мбіт/с сирими і 300 Мбіт/с із запасом у 20 відсотків.",
    "faq": [
      {
        "q": "Яку частку активних брати?",
        "a": "Введіть частку, що відповідає вашому вимірюванню або явному сценарію. Інструмент не задає норматив для офісу чи готелю. Для сценарію «всі одночасно» використайте 100%; 0% дає нульову смугу."
      },
      {
        "q": "Навіщо потрібен запас?",
        "a": "Пікові навантаження, оновлення й резервні копії. Без запасу канал упирається в стелю саме в найгірший момент — коли всі одночасно щось відкрили."
      },
      {
        "q": "Чи вистачить каналу для відеозв’язку?",
        "a": "Потрібна швидкість залежить від конкретного сервісу, режиму й кількості потоків. Візьміть виміряну або опубліковану сервісом вимогу на активного користувача. Затримка, втрати пакетів і якість зв’язку тут не моделюються."
      },
      {
        "q": "Чому важливий канал вивантаження?",
        "a": "Завантаження та вивантаження можуть мати різний попит. Повторіть розрахунок окремо для кожного напрямку з його швидкістю на користувача; резервні копії не зобов’язані бути симетричними."
      }
    ],
    "disclaimer": "Сценарна оцінка середнього попиту, не гарантія достатньої смуги в пік. Затримки, втрати, протоколи й інший трафік поза введеними припущеннями не враховуються."
  },
  "de": {
    "shortDescription": "Bandbreitenschätzung aus Gesamtnutzerzahl, aktivem Anteil und ausdrücklicher Reserve.",
    "seoDescription": "Berechne Mbit/s aus der Gesamtzahl der Nutzer, dem mittleren aktiven Anteil, dem Bedarf je aktivem Nutzer und der Reserve.",
    "longDescription": "Multipliziert die Zahl der Nutzer mit dem gleichzeitig aktiven Anteil und der Bandbreite, die jeder braucht, und rechnet danach die von dir gewählte Reserve hinzu. Nichts steckt versteckt in einem Protokollfaktor: der tatsächliche Mehraufwand hängt von Protokoll, Codec und Netz ab, deshalb ist jeder Faktor, der die Antwort ändert, ein sichtbares Feld.",
    "howToUse": [
      "Trage ein, wie viele Nutzer die Leitung bedient.",
      "Trage die Bandbreite ein, die jeder braucht.",
      "Setze den gleichzeitig aktiven Anteil und die Reserve."
    ],
    "howItWorks": "Erwartete aktive Nutzer A = Gesamtzahl N·aktiver Anteil c/100. Grundbandbreite = A·Rate je aktivem Nutzer b; mit z% Reserve ergibt sich A·b·(100+z)/100. N ist eine positive sichere ganze Zahl, c liegt bei 0–100%, z≥0. A kann ein gebrochener Erwartungswert statt einer beobachteten Personenzahl sein. Bei c=0 ist die Bandbreite null. Alle Raten beziehen sich auf dieselbe Übertragungsrichtung.",
    "example": "50 Nutzer zu je 5 Mbit/s ergeben 250 Mbit/s roh, mit 20 Prozent Reserve also 300 Mbit/s.",
    "faq": [
      {
        "q": "Soll ich alle Nutzer zählen oder nur die aktiven?",
        "a": "Beides, getrennt. Trage die Gesamtzahl ein und setze den gleichzeitig aktiven Anteil — hundert Arbeitsplätze streamen selten alle zugleich."
      },
      {
        "q": "Wo geht der Reserveprozentsatz hinein?",
        "a": "Er kommt oben auf die Rohzahl. Dahinter wird nichts weiter angewendet, weil der tatsächliche Protokollaufwand zu stark schwankt, um ihn für dich zu raten."
      },
      {
        "q": "Wie viel Reserve ist sinnvoll?",
        "a": "Das hängt davon ab, wie stoßweise der Verkehr ist. Das Feld gibt es, damit die Annahme deine bleibt und sichtbar bleibt."
      },
      {
        "q": "Warum Megabit und nicht Megabyte?",
        "a": "Leitungen werden in Bit je Sekunde verkauft. Das Ergebnis zeigt zusätzlich Megabyte je Sekunde, damit sich der Wert mit Downloadgeschwindigkeiten vergleichen lässt."
      }
    ],
    "disclaimer": "Szenarioschätzung des mittleren Bedarfs, keine Garantie für Spitzenlasten. Latenz, Verluste, Protokolle und weiterer Verkehr werden außerhalb der Eingaben nicht modelliert."
  },
  "es": {
    "shortDescription": "Estima el ancho de banda con usuarios totales, proporción activa y margen explícito.",
    "seoDescription": "Calcula Mbit/s con usuarios totales, proporción activa media, demanda por usuario activo y margen.",
    "longDescription": "Multiplica el número de usuarios por la proporción que está activa a la vez y por el ancho de banda que necesita cada uno, y añade después el margen que elijas. Nada se esconde en un coeficiente de protocolo: la sobrecarga real depende del protocolo, el códec y la red, así que cada factor que cambia la respuesta es un campo visible.",
    "howToUse": [
      "Introduce a cuántos usuarios sirve el enlace.",
      "Introduce el ancho de banda que necesita cada uno.",
      "Fija la proporción activa a la vez y el margen."
    ],
    "howItWorks": "Usuarios activos esperados A = usuarios totales N·proporción activa c/100. Ancho de banda básico = A·tasa por usuario activo b; con margen z% se obtiene A·b·(100+z)/100. N es un entero positivo seguro, c va de 0 a 100% y z≥0. A puede ser una expectativa fraccionaria, no un recuento observado. Con c=0, el ancho de banda es cero. Todas las tasas pertenecen a la misma dirección de transmisión.",
    "example": "50 usuarios a 5 Mbit/s cada uno son 250 Mbit/s brutos, o 300 Mbit/s con un 20 por ciento de margen.",
    "faq": [
      {
        "q": "¿Cuento todos los usuarios o solo los activos?",
        "a": "Ambos, por separado. Introduce el total y fija la proporción activa a la vez: cien puestos rara vez transmiten a la vez."
      },
      {
        "q": "¿Adónde va el porcentaje de margen?",
        "a": "Se suma por encima de la cifra bruta. Detrás no se aplica nada más, porque la sobrecarga real del protocolo varía demasiado como para adivinarla por ti."
      },
      {
        "q": "¿Cuánto margen es razonable?",
        "a": "Depende de lo irregular que sea el tráfico. El campo existe para que la suposición siga siendo tuya y siga estando a la vista."
      },
      {
        "q": "¿Por qué megabits y no megabytes?",
        "a": "Los enlaces se venden en bits por segundo. El resultado muestra también megabytes por segundo para compararlo con las velocidades de descarga."
      }
    ],
    "disclaimer": "Estimación de demanda media por escenario, no garantía para picos. No modela latencia, pérdidas, protocolos ni otro tráfico fuera de las hipótesis indicadas."
  }
};
