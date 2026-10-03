import type { CalculatorCopy } from '../../lib/platform/types';

// Existing native content individually reviewed; scoped model and input corrections.
export const automotiveWave10ContractContent = {
  "ru": {
    "longDescription": "Переводит расстояние и расход в литры, оценивает их по цене на колонке и добавляет платные дороги. Считается только то, что действительно тратится в дороге: амортизация, износ и налоги на километр зависят от машины и пробега, и подставить их значило бы выдать догадку за расчёт.",
    "howItWorks": "Литры = расстояние ÷ 100 × расход; стоимость = литры × цена + платные дороги; доля — это итог, делённый на пассажиров. Переключатель «туда и обратно» удваивает только расстояние. Платные дороги вводятся итогом за весь маршрут и добавляются один раз. Цена за литр и плата за дороги должны быть в одной валюте. Участников деления — целое число не меньше 1; цена, расход и расстояние положительны, плата за дороги неотрицательна.",
    "howToUse": [
      "Введите расстояние и свой расход.",
      "Укажите цену топлива, по которой заправляетесь.",
      "Добавьте платные дороги и пассажиров, если они есть.",
      "Число участников — число людей, между которыми делится итог, включая водителя, если он участвует в оплате."
    ],
    "example": "800 км при 7,5 л на 100 и цене 62 требуют 60 литров и обходятся в 3720.",
    "faq": [
      {
        "q": "Учитывается ли износ и амортизация?",
        "a": "Нет, только топливо и платные дороги. Стоимость километра по износу сильно зависит от машины и была бы догадкой, а не расчётом."
      },
      {
        "q": "Как посчитать дорогу обратно?",
        "a": "Включите режим «туда и обратно» — расстояние удвоится вместе с нужным топливом."
      },
      {
        "q": "Какой расход указывать?",
        "a": "Тот, что замерили сами. Трасса и город различаются достаточно, чтобы паспортная цифра редко совпадала с реальной поездкой."
      },
      {
        "q": "Платные дороги — за одну сторону или всего?",
        "a": "Всего. Введите то, во что обойдётся вся поездка, включая обратный путь, если он выбран."
      }
    ]
  },
  "en": {
    "longDescription": "Turns distance and consumption into litres, prices them at the pump and adds tolls. Only what you actually spend on the road is counted: depreciation, wear and tax per kilometre depend on the car and the mileage, and putting a figure on them would pass a guess off as a calculation.",
    "howItWorks": "Litres = distance ÷ 100 × consumption; cost = litres × price + tolls; the share is that divided by passengers. The return-trip switch doubles only distance. Enter total tolls for the whole route; they are added once. Price per litre and tolls must use the same currency. Split participants are a whole number of at least 1; price, consumption and distance are positive and tolls are nonnegative.",
    "howToUse": [
      "Enter the distance and your consumption.",
      "Enter the fuel price you pay.",
      "Add tolls and passengers if they apply.",
      "The count means the people sharing the total, including the driver if participating in the split."
    ],
    "example": "800 km at 7.5 L/100 km and 62 per litre uses 60 litres and costs 3720.",
    "faq": [
      {
        "q": "Is wear and depreciation included?",
        "a": "No, only fuel and tolls. Cost per kilometre for wear depends heavily on the car and would be a guess rather than a calculation."
      },
      {
        "q": "How do I count the return journey?",
        "a": "Turn on the return option and the distance is doubled, along with the fuel it needs."
      },
      {
        "q": "Which consumption figure should I use?",
        "a": "The one you measured yourself. Motorway and city driving differ enough that the manufacturer figure rarely matches a real trip."
      },
      {
        "q": "Are tolls per direction or total?",
        "a": "Total. Enter what the whole journey costs in tolls, including the way back if you selected a return trip."
      }
    ]
  },
  "uk": {
    "longDescription": "Рахує сценарний бюджет пального та платних доріг і ділить його між заданою кількістю учасників. Це не повна вартість володіння або гарантована фактична ціна: ремонт, знос, амортизація, паркування та інші платежі не додаються автоматично. Використовуйте витрату й ціну для свого маршруту, а не очікуйте отримання актуальної ціни пального.",
    "howItWorks": "Літри дорівнюють відстань ÷ 100 × витрата. Вартість — це літри × ціна плюс платні дороги. Частка на людину рахується як підсумок, поділений на кількість пасажирів. Перемикач «туди й назад» подвоює лише відстань. Платні дороги вводяться сумою за весь маршрут і додаються один раз. Ціна за літр і плата за дороги мають бути в одній валюті. Учасників поділу — ціле число від 1; ціна, витрата й відстань додатні, плата за дороги невід’ємна.",
    "howToUse": [
      "Введіть відстань і витрату палива.",
      "Введіть ціну палива.",
      "Додайте платні дороги й кількість пасажирів.",
      "Кількість учасників — люди, між якими ділиться підсумок, включаючи водія, якщо він бере участь в оплаті."
    ],
    "example": "800 км за 7,5 л на 100 і ціни 62 ₴ потребують 60 літрів і обходяться в 3720 ₴.",
    "faq": [
      {
        "q": "Чи це повна вартість поїздки?",
        "a": "Ні. Включені лише пальне за заданою витратою й ціною та введена сума платних доріг. Інші витрати залежать від сценарію; немає універсального множника, що робить повну вартість удвічі більшою."
      },
      {
        "q": "Чи враховано дорогу назад?",
        "a": "Перемикач «туди й назад» удвоює введену відстань. Якщо ви вже вписали загальний шлях в обидва боки, залиште його вимкненим. Плату за дороги задайте сумою за всю поїздку: вона не подвоюється."
      },
      {
        "q": "Як порівняти з потягом?",
        "a": "За часткою на людину. Автомобіль виграє від кількості пасажирів: та сама поїздка вчотирьох коштує кожному вчетверо менше, тоді як квитків потрібно чотири."
      },
      {
        "q": "Чому фактична витрата вища?",
        "a": "На трасі витрата зазвичай нижча за міську, але завантажений автомобіль, багажник на даху й швидкість понад 110 км/год помітно її підвищують."
      }
    ]
  },
  "de": {
    "longDescription": "Macht aus Strecke und Verbrauch Liter, bepreist sie an der Zapfsäule und rechnet die Maut hinzu. Gezählt wird nur, was du unterwegs tatsächlich ausgibst: Wertverlust, Verschleiß und Steuer je Kilometer hängen vom Auto und von der Laufleistung ab, und sie mit einer Zahl zu versehen hieße, eine Schätzung als Rechnung auszugeben.",
    "howItWorks": "Liter = Strecke ÷ 100 × Verbrauch; Kosten = Liter × Preis + Maut; der Anteil ist das geteilt durch die Zahl der Mitfahrenden. Der Rückfahrtschalter verdoppelt nur die Strecke. Gib die gesamte Maut für die ganze Route ein; sie wird einmal addiert. Literpreis und Maut müssen dieselbe Währung verwenden. Teilnehmende sind eine ganze Zahl ab 1; Preis, Verbrauch und Strecke sind positiv, Maut ist nichtnegativ.",
    "howToUse": [
      "Trage die Strecke und deinen Verbrauch ein.",
      "Trage den Kraftstoffpreis ein, den du zahlst.",
      "Ergänze Maut und Mitfahrende, wenn sie anfallen.",
      "Die Anzahl meint die Personen, die den Gesamtbetrag teilen, einschließlich des Fahrers, falls er mitbezahlt."
    ],
    "example": "800 km bei 7,5 l/100 km und 1,75 € je Liter brauchen 60 Liter und kosten 105 €.",
    "faq": [
      {
        "q": "Sind Verschleiß und Wertverlust enthalten?",
        "a": "Nein, nur Kraftstoff und Maut. Die Kosten je Kilometer für Verschleiß hängen stark vom Auto ab und wären eine Schätzung statt einer Rechnung."
      },
      {
        "q": "Wie zähle ich die Rückfahrt mit?",
        "a": "Schalte die Rückfahrt ein, dann verdoppelt sich die Strecke samt dem Kraftstoff, den sie braucht."
      },
      {
        "q": "Welchen Verbrauch soll ich eintragen?",
        "a": "Den, den du selbst gemessen hast. Autobahn und Stadt unterscheiden sich so stark, dass der Herstellerwert selten zu einer echten Fahrt passt."
      },
      {
        "q": "Ist die Maut je Richtung oder insgesamt?",
        "a": "Insgesamt. Trage ein, was die ganze Fahrt an Maut kostet, einschließlich des Rückwegs, wenn du eine Rückfahrt gewählt hast."
      }
    ]
  },
  "es": {
    "longDescription": "Convierte la distancia y el consumo en litros, los valora al precio de surtidor y suma los peajes. Solo se cuenta lo que gastas de verdad en la carretera: la depreciación, el desgaste y los impuestos por kilómetro dependen del coche y del kilometraje, y ponerles cifra haría pasar una suposición por un cálculo.",
    "howItWorks": "Litros = distancia ÷ 100 × consumo; coste = litros × precio + peajes; la parte de cada uno es eso dividido entre los ocupantes. El interruptor de ida y vuelta duplica solo la distancia. Introduce el total de peajes de toda la ruta: se suma una vez. Precio por litro y peajes deben usar la misma moneda. El reparto requiere un entero de al menos 1; precio, consumo y distancia son positivos y los peajes no negativos.",
    "howToUse": [
      "Introduce la distancia y tu consumo.",
      "Introduce el precio del combustible que pagas.",
      "Añade los peajes y los ocupantes si procede.",
      "El número corresponde a quienes comparten el total, incluido el conductor si participa en el reparto."
    ],
    "example": "800 km a 7,5 l/100 km y 1,62 el litro consumen 60 litros y cuestan 97,20.",
    "faq": [
      {
        "q": "¿Se incluyen el desgaste y la depreciación?",
        "a": "No, solo el combustible y los peajes. El coste por kilómetro del desgaste depende mucho del coche y sería una suposición y no un cálculo."
      },
      {
        "q": "¿Cómo cuento el viaje de vuelta?",
        "a": "Activa la opción de ida y vuelta y la distancia se duplica, junto con el combustible que necesita."
      },
      {
        "q": "¿Qué cifra de consumo debo usar?",
        "a": "La que hayas medido tú. La autopista y la ciudad difieren lo bastante como para que la cifra del fabricante rara vez coincida con un viaje real."
      },
      {
        "q": "¿Los peajes son por sentido o en total?",
        "a": "En total. Introduce lo que cuesta el viaje entero en peajes, incluida la vuelta si has elegido ida y vuelta."
      }
    ]
  }
} satisfies Record<'ru' | 'en' | 'uk' | 'de' | 'es', Partial<CalculatorCopy>>;
