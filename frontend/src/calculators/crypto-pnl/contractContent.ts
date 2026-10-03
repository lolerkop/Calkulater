import type { CalculatorDef } from '../../lib/types';
type Copy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;
export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Copy> = {
  "ru": {
    "longDescription": "Считает линейный результат сделки по заданной модели: с направлением, двумя комиссиями и плечом. В шорте прибыль даёт падение цены, поэтому знак разности меняется — расчёт «по росту» показал бы там убыток вместо дохода. Комиссия удерживается дважды, на входе и на выходе, и берётся от оборота каждой стороны, а не от результата, так что убыточная сделка тоже стоит денег. Плечо не меняет саму прибыль, но меняет её отношение к собственным средствам — именно это отношение и показывает доходность позиции. Линейная позиция с фиксированным объёмом и одинаковой процентной комиссией на обеих сторонах. Не моделируются ликвидация, фандинг, заёмные проценты, проскальзывание, инверсные контракты и налоги. Начальная маржа не равна всему необходимому денежному обеспечению; расчёт не подтверждает возможность удержать позицию.",
    "howToUse": [
      "Выберите направление: лонг зарабатывает на росте, шорт — на падении.",
      "Введите цену входа, цену выхода и объём в монетах.",
      "Укажите комиссию биржи за одну сторону сделки.",
      "Поставьте плечо, если позиция открывалась с заёмными средствами."
    ],
    "howItWorks": "Результат до комиссий = (выход − вход) × объём для лонга и обратная разность для шорта. Комиссии = (цена входа × объём + цена выхода × объём) × ставка одной стороны / 100. Чистый результат вычитает только эти комиссии. Строка «Вложено» означает расчётную начальную маржу: цена входа × объём / плечо. Доходность позиции = чистый результат / эта маржа × 100; начальная комиссия не включена в знаменатель. При фиксированном объёме плечо меняет знаменатель, а не денежный результат.",
    "example": "Лонг 0,5 монеты с 30 000 до 34 500 при комиссии 0,1 % даёт 2217,75 чистыми и доходность 14,79 %.",
    "faq": [
      {
        "q": "Почему в шорте знак меняется?",
        "a": "Потому что шорт зарабатывает на падении: прибыль появляется, когда цена выхода ниже цены входа. Расчёт «по росту» показал бы там убыток вместо дохода."
      },
      {
        "q": "Почему комиссия считается дважды?",
        "a": "Модель задаёт одинаковый процентный сбор с оборота открытия и закрытия. Реальная биржа может устанавливать разные maker/taker-ставки, скидки или другую базу; такие условия здесь не выбираются."
      },
      {
        "q": "Как плечо влияет на результат?",
        "a": "При неизменном объёме сделки денежный результат не меняется. Плечо 2 вдвое уменьшает расчётную начальную маржу и удваивает отношение результата к ней. Если вместо объёма фиксировать собственный капитал, размер позиции меняется — это другая постановка."
      },
      {
        "q": "Учитывается ли ставка финансирования?",
        "a": "Нет, фандинг зависит от биржи и времени удержания позиции. Здесь считается результат самой сделки."
      },
      {
        "q": "Что показывает изменение цены?",
        "a": "Насколько выросла или упала цена между входом и выходом, независимо от направления сделки и плеча."
      }
    ],
    "disclaimer": "Линейная позиция с фиксированным объёмом и одинаковой процентной комиссией на обеих сторонах. Не моделируются ликвидация, фандинг, заёмные проценты, проскальзывание, инверсные контракты и налоги. Начальная маржа не равна всему необходимому денежному обеспечению; расчёт не подтверждает возможность удержать позицию."
  },
  "en": {
    "longDescription": "Models the linear result of a fixed-size trade: with direction, two fees and leverage. A short earns on a falling price, so the sign of the difference flips — computing it as a rise would report a loss where there was a gain. The fee is charged twice, on entry and on exit, and is taken from each side's turnover rather than from the result, so a losing trade still costs money. Leverage does not change the profit itself, only its ratio to your own funds — and that ratio is what the position return shows. A linear fixed-size position with the same percentage fee on both sides. Liquidation, funding, borrowing interest, slippage, inverse contracts and taxes are excluded. Initial margin is not the entire cash requirement; the calculation does not establish that a position can stay open.",
    "howToUse": [
      "Choose the direction: a long earns on a rise, a short on a fall.",
      "Enter the entry price, the exit price and the size in coins.",
      "Enter the exchange fee for one side of the trade.",
      "Set the leverage if the position was opened with borrowed funds."
    ],
    "howItWorks": "Before-fee result = (exit − entry) × size for a long, with the difference reversed for a short. Fees = (entry price × size + exit price × size) × per-side fee percentage / 100. The net result subtracts only these fees. The invested row is calculated initial margin: entry price × size / leverage. Position return = net result / this margin × 100; the entry fee is not in that denominator. For a fixed position size, leverage changes the denominator rather than the monetary result.",
    "example": "A long of 0.5 coin from 30000 to 34500 at a 0.1% fee nets 2217.75 and returns 14.79%.",
    "faq": [
      {
        "q": "Why does the sign flip on a short?",
        "a": "Because a short earns on a fall: the profit appears when the exit price is below the entry price. Computing it as a rise would report a loss where there was a gain."
      },
      {
        "q": "Why is the fee charged twice?",
        "a": "The model assumes the same percentage charge on entry and exit notionals. A real exchange can use different maker/taker rates, discounts or another base; these terms are not selected here."
      },
      {
        "q": "How does leverage change the result?",
        "a": "For an unchanged position size, the monetary result stays the same. Leverage 2 halves calculated initial margin and doubles the result-to-margin ratio. Fixing your own capital instead changes position size, which is a different setup."
      },
      {
        "q": "Is the funding rate included?",
        "a": "No. Funding depends on the exchange and on how long the position is held; this calculator settles the trade itself."
      },
      {
        "q": "What does the price change show?",
        "a": "How far the price moved between entry and exit, regardless of the direction of the trade or the leverage."
      }
    ],
    "disclaimer": "A linear fixed-size position with the same percentage fee on both sides. Liquidation, funding, borrowing interest, slippage, inverse contracts and taxes are excluded. Initial margin is not the entire cash requirement; the calculation does not establish that a position can stay open."
  },
  "uk": {
    "longDescription": "Розрахунок показує результат угоди після комісій, і саме комісії й роблять картину чеснішою: вони беруться двічі — на вході й на виході, — тому на коротких рухах з’їдають помітну частку прибутку. Лінійна позиція фіксованого обсягу з однаковою відсотковою комісією з обох боків. Ліквідація, фандинг, позикові проценти, прослизання, інверсні контракти й податки не моделюються. Початкова маржа не дорівнює всьому потрібному забезпеченню; розрахунок не підтверджує можливість утримати позицію.",
    "howToUse": [
      "Виберіть напрямок: лонг чи шорт.",
      "Введіть ціну входу, ціну виходу й обсяг.",
      "Задайте ставку комісії — вона застосується двічі."
    ],
    "howItWorks": "Результат до комісій = (вихід − вхід) × обсяг для лонга та обернена різниця для шорта. Комісії = (ціна входу × обсяг + ціна виходу × обсяг) × ставка однієї сторони / 100. Чистий результат віднімає лише ці комісії. Рядок вкладення означає розрахункову початкову маржу: ціна входу × обсяг / плече. Дохідність позиції = чистий результат / ця маржа × 100; комісія входу не входить до знаменника. За фіксованого обсягу плече змінює знаменник, а не грошовий результат.",
    "example": "Лонг 0,5 монети з 30 000 до 34 500 за комісії 0,1 % дає 2217,75 чистими і дохідність 14,79 %. Комісії забрали тут 32,25 ₴.",
    "faq": [
      {
        "q": "Чому комісія береться двічі?",
        "a": "Модель припускає однакову ставку збору на відкритті та закритті. За 0,1% комісія дорівнює 0,1% суми двох оборотів, а не універсальним 0,2% їхньої суми. На малому русі ціни збори можуть перевищити валовий результат."
      },
      {
        "q": "Чим шорт відрізняється в розрахунку?",
        "a": "Знаком: прибуток виникає за падіння ціни, тому різниця береться як вхід мінус вихід. Ризик при цьому теоретично необмежений — ціна може зрости в рази."
      },
      {
        "q": "Чи враховано плече?",
        "a": "Так, плече змінює розрахункову початкову маржу та дохідність від неї, але за фіксованого введеного обсягу не змінює результат у грошах. Ціна ліквідації та підтримувальна маржа не розраховуються."
      },
      {
        "q": "Чи враховано податок на дохід від операцій?",
        "a": "Ні. Податок на дохід від операцій рахується окремо й залежить від юрисдикції та строку володіння."
      }
    ],
    "disclaimer": "Лінійна позиція фіксованого обсягу з однаковою відсотковою комісією з обох боків. Ліквідація, фандинг, позикові проценти, прослизання, інверсні контракти й податки не моделюються. Початкова маржа не дорівнює всьому потрібному забезпеченню; розрахунок не підтверджує можливість утримати позицію."
  },
  "de": {
    "longDescription": "Berechnet das lineare Ergebnis eines Handels mit fester Menge: mit Richtung, zwei Gebühren und Hebel. Eine Short-Position gewinnt bei fallendem Preis, das Vorzeichen der Differenz kippt also — sie als Anstieg zu rechnen meldete einen Verlust, wo ein Gewinn war. Die Gebühr fällt zweimal an, beim Ein- und beim Ausstieg, und wird vom Umsatz jeder Seite genommen und nicht vom Ergebnis, ein Verlustgeschäft kostet also trotzdem Geld. Der Hebel ändert den Gewinn selbst nicht, nur sein Verhältnis zu deinem eigenen Geld — und dieses Verhältnis zeigt die Rendite der Position. Lineare Position mit fester Menge und gleichem Gebührensatz auf beiden Seiten. Liquidation, Finanzierung, Kreditzinsen, Slippage, inverse Kontrakte und Steuern werden nicht modelliert. Die Anfangsmargin ist nicht der gesamte Geldbedarf; die Rechnung bestätigt nicht, dass die Position offen bleiben kann.",
    "howToUse": [
      "Wähle die Richtung: long gewinnt bei steigendem, short bei fallendem Preis.",
      "Trage Einstiegspreis, Ausstiegspreis und Menge ein.",
      "Trage die Gebühr der Börse für eine Seite des Handels ein.",
      "Setze den Hebel, wenn die Position mit geliehenem Geld eröffnet wurde."
    ],
    "howItWorks": "Ergebnis vor Gebühren = (Ausstieg − Einstieg) × Menge bei Long; bei Short ist die Differenz umgekehrt. Gebühren = (Einstiegspreis × Menge + Ausstiegspreis × Menge) × Gebührensatz je Seite / 100. Das Nettoergebnis zieht nur diese Gebühren ab. Der eingesetzte Betrag bezeichnet die berechnete Anfangsmargin: Einstiegspreis × Menge / Hebel. Positionsrendite = Nettoergebnis / Anfangsmargin × 100; die Einstiegsgebühr steht nicht im Nenner. Bei fester Positionsmenge ändert der Hebel den Nenner, nicht das Geldresultat.",
    "example": "Eine Long-Position über 0,5 Einheiten von 30 000 auf 34 500 bei 0,1 % Gebühr bringt netto 2217,75 und eine Rendite von 14,79 %.",
    "faq": [
      {
        "q": "Warum kippt das Vorzeichen bei short?",
        "a": "Weil eine Short-Position bei fallendem Preis gewinnt: der Gewinn entsteht, wenn der Ausstiegspreis unter dem Einstiegspreis liegt. Sie als Anstieg zu rechnen meldete einen Verlust, wo ein Gewinn war."
      },
      {
        "q": "Warum fällt die Gebühr zweimal an?",
        "a": "Das Modell setzt denselben prozentualen Satz auf Einstiegs- und Ausstiegswert an. Eine Börse kann andere Maker-/Taker-Sätze, Rabatte oder Grundlagen verwenden; diese Bedingungen werden hier nicht gewählt."
      },
      {
        "q": "Wie ändert der Hebel das Ergebnis?",
        "a": "Bei unveränderter Positionsmenge bleibt das Geldresultat gleich. Hebel 2 halbiert die berechnete Anfangsmargin und verdoppelt das Verhältnis von Ergebnis zu Margin. Festes Eigenkapital statt fester Menge verändert dagegen die Positionsgröße; das ist eine andere Fragestellung."
      },
      {
        "q": "Ist die Finanzierungsrate enthalten?",
        "a": "Nein. Die Finanzierung hängt von der Börse und von der Haltedauer ab; dieser Rechner rechnet den Handel selbst ab."
      },
      {
        "q": "Was zeigt die Preisänderung?",
        "a": "Wie weit sich der Preis zwischen Ein- und Ausstieg bewegt hat, unabhängig von der Richtung des Handels und vom Hebel."
      }
    ],
    "disclaimer": "Lineare Position mit fester Menge und gleichem Gebührensatz auf beiden Seiten. Liquidation, Finanzierung, Kreditzinsen, Slippage, inverse Kontrakte und Steuern werden nicht modelliert. Die Anfangsmargin ist nicht der gesamte Geldbedarf; die Rechnung bestätigt nicht, dass die Position offen bleiben kann."
  },
  "es": {
    "longDescription": "Modela el resultado lineal de una operación de cantidad fija: con sentido, dos comisiones y apalancamiento. Un corto gana con un precio a la baja, así que el signo de la diferencia se invierte; calcularlo como una subida daría una pérdida donde hubo ganancia. La comisión se cobra dos veces, a la entrada y a la salida, y se toma del volumen de cada lado y no del resultado, así que una operación perdedora también cuesta dinero. El apalancamiento no cambia el beneficio en sí, solo su relación con tus propios fondos, y esa relación es lo que muestra la rentabilidad de la posición. Posición lineal de cantidad fija y mismo porcentaje de comisión por ambos lados. Se excluyen liquidación, financiación periódica, intereses del préstamo, deslizamiento, contratos inversos e impuestos. El margen inicial no es todo el efectivo necesario; el cálculo no confirma que la posición pueda mantenerse abierta.",
    "howToUse": [
      "Elige el sentido: un largo gana si sube y un corto, si baja.",
      "Introduce el precio de entrada, el de salida y el tamaño en monedas.",
      "Introduce la comisión del exchange por un lado de la operación.",
      "Fija el apalancamiento si la posición se abrió con fondos prestados."
    ],
    "howItWorks": "Resultado antes de comisiones = (salida − entrada) × cantidad en un largo; en un corto se invierte la diferencia. Comisiones = (precio de entrada × cantidad + precio de salida × cantidad) × porcentaje por lado / 100. El resultado neto solo descuenta esas comisiones. La inversión indicada representa el margen inicial calculado: precio de entrada × cantidad / apalancamiento. Rentabilidad de la posición = resultado neto / ese margen × 100; la comisión de entrada no está en el denominador. Con una cantidad fija, el apalancamiento cambia el denominador y no el resultado monetario.",
    "example": "Un largo de 0,5 monedas de 30 000 a 34 500 con un 0,1 % de comisión deja 2217,75 netos y una rentabilidad del 14,79 %.",
    "faq": [
      {
        "q": "¿Por qué se invierte el signo en un corto?",
        "a": "Porque un corto gana si el precio baja: el beneficio aparece cuando el precio de salida está por debajo del de entrada. Calcularlo como una subida daría una pérdida donde hubo ganancia."
      },
      {
        "q": "¿Por qué la comisión se cobra dos veces?",
        "a": "El modelo supone el mismo cargo porcentual sobre los importes de entrada y salida. Un exchange puede aplicar tipos maker/taker distintos, descuentos u otra base; aquí no se seleccionan esas condiciones."
      },
      {
        "q": "¿Cómo cambia el resultado el apalancamiento?",
        "a": "Con una cantidad fija, el resultado monetario no cambia. El apalancamiento 2 reduce a la mitad el margen inicial calculado y duplica el cociente resultado/margen. Mantener fijo el capital propio cambia la cantidad de la posición: es otra situación."
      },
      {
        "q": "¿Está incluido el funding?",
        "a": "No. El funding depende del exchange y del tiempo que se mantenga la posición; esta calculadora liquida la operación en sí."
      },
      {
        "q": "¿Qué muestra la variación del precio?",
        "a": "Cuánto se movió el precio entre la entrada y la salida, con independencia del sentido de la operación y del apalancamiento."
      }
    ],
    "disclaimer": "Posición lineal de cantidad fija y mismo porcentaje de comisión por ambos lados. Se excluyen liquidación, financiación periódica, intereses del préstamo, deslizamiento, contratos inversos e impuestos. El margen inicial no es todo el efectivo necesario; el cálculo no confirma que la posición pueda mantenerse abierta."
  }
};
