import type { CalculatorDef } from '../../lib/types';
type Copy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;
export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Copy> = {
  ru: {
    longDescription: 'Первоначальный взнос делит цену покупки на собственную оплату и оставшуюся сумму. Можно задать долю или сумму, которую вы применяете именно к цене. Калькулятор не знает требуемого банком минимума, доходов покупателя или правил программы, поэтому он не определяет достаточность взноса и одобрение кредита. Деньги на оформление и резерв планируются сверх этой части цены.',
    howToUse: ['Выберите известную долю или сумму взноса в цену покупки.','Введите положительную цену в одной валюте со взносом.','Доля допускается от 0 до 100 %, сумма — от 0 до цены.','Сравните полученную долю с условиями своей программы отдельно; резерв и расходы сделки не включайте в применяемый к цене взнос.'],
    howItWorks: 'По доле p: взнос D = цена × p/100. По сумме D: доля p = 100D/цена. Оставшаяся сумма = цена − D. В режиме доли поле суммы не используется, в режиме суммы не используется поле доли. Границы 0 и 100 % допустимы арифметически и не обещают наличие кредитной программы. Ставка и срок в этом разбиении отсутствуют.',
    example: 'Цена 5 000 000 денежных единиц и взнос 20 % дают 1 000 000 собственных средств и остаток 4 000 000. При сумме взноса 1 500 000 доля — 30 %, остаток — 3 500 000. Взнос 0 % оставляет всю цену; 100 % даёт нулевой остаток. Накопления 5 500 000 можно разделить на оплату цены 5 000 000 и резерв 500 000, не вводя резерв как взнос.',
    faq: [
      { q: 'Учитывает ли первоначальный взнос ставку будущего кредита?', a: 'Нет. Здесь только разбиение цены. Месячный платёж определяется суммой кредита, ставкой, сроком и схемой погашения в отдельном расчёте.' },
      { q: 'Как использовать накопления в режиме суммы взноса?', a: 'Введите только часть накоплений, применяемую к цене. Полученную долю можно сопоставить с известным вам требованием кредитора, но самого требования калькулятор не получает.' },
      { q: 'Почему применяемый взнос ограничен ценой покупки?', a: 'Остаток не должен становиться отрицательным. Накопления выше цены допустимы в жизни: излишек можно оставить на расходы или резерв, а в поле вводится лишь оплата цены.' },
      { q: 'Где учитывать расходы оформления рядом с первоначальным взносом?', a: 'Отдельно: применимые налоги, оценку, регистрацию, страховку и комиссии. Их состав зависит от страны, программы и договора; универсальная надбавка здесь не задаётся.' },
      { q: 'Доказывает ли рассчитанная доля, что банк одобрит покупку?', a: 'Нет. Минимум, источник средств, доходы и другие условия проверяются кредитором. Заёмные средства на взнос создают отдельный долг, которого это разбиение цены не учитывает.' },
    ],
    disclaimer: 'Арифметическое разделение цены, без ставки, срока, расходов сделки и проверки кредитоспособности. Одна валюта; обменные курсы и универсальный минимум взноса не заданы.',
  },
  en: {
    longDescription: 'A down payment splits the purchase price into an amount paid upfront and the amount left to fund. Enter either a share or the amount applied specifically to that price. The calculator has no lender minimum, buyer income or programme rules, so it cannot establish a sufficient deposit or loan approval. Closing expenses and reserves sit outside this price allocation.',
    howToUse: ['Choose the known down-payment share or amount applied to the price.','Enter a positive price in the same currency as the contribution.','Use a share from 0 to 100%, or an amount from zero to the price.','Compare the share with your programme separately; exclude reserves and closing expenses from the price contribution.'],
    howItWorks: 'From share p, D = price × p/100. From amount D, p = 100D/price. Remaining amount = price − D. Share mode ignores the amount field; amount mode ignores the share field. Zero and 100% are arithmetic boundaries, not promises of available financing. No rate or loan term enters this split.',
    example: 'Price 5,000,000 monetary units and share 20% give down payment 1,000,000 and remainder 4,000,000. An amount of 1,500,000 gives share 30% and remainder 3,500,000. At 0% the entire price remains; at 100% the remainder is zero. Savings 5,500,000 can fund price 5,000,000 plus reserve 500,000; the reserve is not entered as down payment.',
    faq: [
      { q: 'Does the down-payment split include the future loan rate?', a: 'No. It only allocates the price. Monthly instalments need a separate calculation using principal, rate, duration and repayment method.' },
      { q: 'How should savings be entered as a down-payment amount?', a: 'Enter only savings applied to the price. Compare the calculated share with a lender requirement you already know; that requirement is not an input here.' },
      { q: 'Why is the applied down payment capped at the purchase price?', a: 'The remainder must not become negative. Savings above the price are possible: retain the surplus for costs or reserves and enter only the price contribution.' },
      { q: 'Where do closing expenses belong beside the down payment?', a: 'Separately: applicable taxes, valuation, registration, insurance and fees. The mix depends on jurisdiction, programme and contract; no universal surcharge is supplied.' },
      { q: 'Does the calculated share prove a lender will approve the purchase?', a: 'No. The lender checks minimums, source of funds, income and other requirements. Borrowing the down payment creates another debt omitted from this price split.' },
    ],
    disclaimer: 'Arithmetic price allocation without loan rate, term, closing costs or affordability checks. One currency; no exchange rate or universal minimum deposit is specified.',
  },
  uk: {
    longDescription: 'Перший внесок ділить ціну покупки на власну оплату й решту для фінансування. Можна задати частку або суму, спрямовану саме на ціну. Мінімум банку, доходи покупця й правила програми не введені, тому калькулятор не визначає достатність внеску або схвалення кредиту. Витрати оформлення та резерв плануються окремо від цієї частини ціни.',
    howToUse: ['Оберіть відому частку або суму внеску в ціну покупки.','Введіть додатну ціну в одній валюті з внеском.','Частка може бути від 0 до 100 %, сума — від 0 до ціни.','Порівняйте частку з вимогами своєї програми окремо; резерв і витрати угоди не додавайте до внеску в ціну.'],
    howItWorks: 'За часткою p внесок D = ціна × p/100. За сумою D частка p = 100D/ціна. Решта = ціна − D. У режимі частки поле суми не використовується, у режимі суми — поле частки. Межі 0 і 100 % арифметично допустимі, але не гарантують наявність кредитної програми. Ставка й строк тут відсутні.',
    example: 'Ціна 5 000 000 грошових одиниць і внесок 20 %: власна оплата 1 000 000, решта 4 000 000. Сума 1 500 000 дає 30 % і решту 3 500 000. За 0 % залишається вся ціна, за 100 % — нуль. Накопичені 5 500 000 можна розділити на ціну 5 000 000 і резерв 500 000; резерв не є внеском у ціну.',
    faq: [
      { q: 'Який мінімум першого внеску визначає цей калькулятор?', a: 'Жодного універсального мінімуму. Вимоги залежать від кредитора, країни й програми. Тут визначається лише частка ціни; ставка й майбутній платіж потребують окремого розрахунку.' },
      { q: 'Як використати накопичені кошти в режимі суми внеску?', a: 'Введіть тільки частину, спрямовану на ціну. Частку порівняйте з відомою вам вимогою кредитора; саму вимогу калькулятор не отримує.' },
      { q: 'Чому внесок у ціну не може перевищувати саму ціну?', a: 'Решта не має бути від’ємною. Накопичення понад ціну не є помилкою: надлишок можна залишити на витрати або резерв, а ввести лише оплату ціни.' },
      { q: 'Чи належать витрати угоди до першого внеску в ціну?', a: 'Ні. Застосовні податки, оцінку, реєстрацію, страховку та комісії плануйте окремо. Їх склад залежить від країни, програми й договору.' },
      { q: 'Чи враховується кредит на сам перший внесок?', a: 'Ні. Він створює окремий борг і впливає на здатність платити. Допустимість джерела коштів, доходи та схвалення перевіряє кредитор; більша частка не гарантує кращої ставки.' },
    ],
    disclaimer: 'Арифметичний поділ ціни без ставки, строку, витрат угоди та перевірки платоспроможності. Одна валюта; курс і універсальний мінімум внеску не задані.',
  },
  de: {
    longDescription: 'Die Anzahlung teilt den Kaufpreis in eigene Zahlung und verbleibenden Finanzierungsbetrag. Bekannt sein kann der Anteil oder der ausdrücklich auf den Preis angewendete Betrag. Bankminimum, Einkommen und Programmregeln fehlen; ausreichendes Eigenkapital oder Kreditzusage werden daher nicht bestimmt. Nebenkosten und Reserve liegen außerhalb dieser Preisaufteilung.',
    howToUse: ['Wähle bekannten Anteil oder Betrag der Anzahlung auf den Preis.','Gib einen positiven Preis in derselben Währung ein.','Anteil von 0 bis 100 %, Betrag von null bis zum Preis.','Vergleiche den Anteil separat mit den Programmregeln; Reserve und Kaufnebenkosten gehören nicht in die Anzahlung auf den Preis.'],
    howItWorks: 'Aus Anteil p folgt D = Preis × p/100. Aus Betrag D folgt p = 100D/Preis. Rest = Preis − D. Im Anteilsmodus bleibt das Betragsfeld unberücksichtigt, im Betragsmodus das Anteilsfeld. Null und 100 % sind Rechengrenzen, keine Zusage eines Finanzierungsprogramms. Zins und Laufzeit fehlen in dieser Aufteilung.',
    example: 'Preis 400.000 Geldeinheiten und 20 % Anzahlung ergeben 80.000 eigene Zahlung und 320.000 Rest. Bei 120.000 Anzahlung sind es 30 % und 280.000 Rest. Null Prozent lassen den gesamten Preis offen, 100 % keinen Rest. Ersparnisse über dem Preis können separat als Reserve bleiben; sie werden nicht vollständig als Anzahlung eingetragen.',
    faq: [
      { q: 'Berücksichtigt die Anzahlung den Zinssatz des künftigen Darlehens?', a: 'Nein. Die Preisaufteilung enthält keinen Zins. Monatsraten brauchen eine eigene Rechnung aus Kreditbetrag, Zinssatz, Laufzeit und Tilgungsart.' },
      { q: 'Wie werden Ersparnisse als Anzahlungsbetrag verwendet?', a: 'Trage nur den auf den Kaufpreis angewendeten Teil ein. Den Anteil vergleichst du mit einer bekannten Bankanforderung; diese wird hier nicht eingegeben.' },
      { q: 'Warum endet die Anzahlung auf den Preis beim Kaufpreis?', a: 'Der Restbetrag darf nicht negativ werden. Höhere Ersparnisse sind möglich: Überschuss für Kosten oder Reserve zurückhalten und nur die Preiszahlung eingeben.' },
      { q: 'Wo stehen Kaufnebenkosten neben der Anzahlung?', a: 'Separat: gegebenenfalls Steuern, Bewertung, Registrierung, Versicherung und Gebühren. Land, Programm und Vertrag bestimmen den Umfang; kein allgemeiner Aufschlag wird vorgegeben.' },
      { q: 'Beweist der Anzahlungsanteil eine Kreditzusage?', a: 'Nein. Mindestanteil, Herkunft der Mittel, Einkommen und weitere Regeln prüft der Kreditgeber. Ein Darlehen für die Anzahlung wäre eine zusätzliche Schuld außerhalb dieser Aufteilung.' },
    ],
    disclaimer: 'Arithmetische Preisaufteilung ohne Zins, Laufzeit, Nebenkosten oder Bonitätsprüfung. Eine Währung; kein Wechselkurs oder allgemeiner Mindestanteil wird festgelegt.',
  },
  es: {
    longDescription: 'La entrada divide el precio de compra entre pago propio e importe pendiente de financiación. Puedes indicar porcentaje o cantidad aplicada específicamente al precio. No se conocen mínimo del prestamista, ingresos ni reglas del programa, por lo que no se determina suficiencia de entrada ni aprobación. Gastos de cierre y reservas se presupuestan aparte.',
    howToUse: ['Elige porcentaje conocido o importe de entrada aplicado al precio.','Introduce un precio positivo en la misma moneda.','Usa porcentaje del 0 al 100 %, o importe entre cero y el precio.','Compara la proporción con tu programa aparte; no incluyas reservas ni gastos de cierre en el aporte al precio.'],
    howItWorks: 'Con porcentaje p, D = precio × p/100. Con importe D, p = 100D/precio. Pendiente = precio − D. El modo porcentaje ignora el importe y el modo importe ignora el porcentaje. Cero y 100 % son límites aritméticos, no garantías de financiación disponible. Tipo y plazo no intervienen.',
    example: 'Precio 200.000 unidades monetarias y entrada 20 % dan 40.000 propios y 160.000 pendientes. Una entrada 60.000 da 30 % y 140.000 pendientes. El 0 % deja todo el precio; el 100 % deja cero. Ahorros superiores al precio pueden mantenerse como reserva; no se introducen íntegramente como entrada.',
    faq: [
      { q: '¿La entrada incluye el tipo de interés del préstamo futuro?', a: 'No. Solo reparte el precio. La cuota requiere otro cálculo con capital, tipo, plazo y método de amortización.' },
      { q: '¿Cómo usar los ahorros en el modo de importe de entrada?', a: 'Introduce solo lo aplicado al precio. Compara el porcentaje con un requisito del prestamista que conozcas; dicho requisito no es una entrada aquí.' },
      { q: '¿Por qué se limita la entrada aplicada al precio de compra?', a: 'El pendiente no debe ser negativo. Ahorrar más que el precio es posible: guarda el exceso para gastos o reserva e introduce únicamente el pago del precio.' },
      { q: '¿Dónde van los gastos de cierre junto a la entrada?', a: 'Aparte: impuestos, tasación, registro, seguros y comisiones aplicables. Dependen del país, programa y contrato; no se impone un recargo universal.' },
      { q: '¿El porcentaje de entrada prueba la aprobación del préstamo?', a: 'No. El prestamista revisa mínimo, origen de fondos, ingresos y otras reglas. Pedir otro préstamo para la entrada crea una deuda adicional fuera de este reparto.' },
    ],
    disclaimer: 'Reparto aritmético del precio, sin tipo, plazo, gastos ni análisis de solvencia. Una moneda; no se fija cambio ni entrada mínima universal.',
  },
};
