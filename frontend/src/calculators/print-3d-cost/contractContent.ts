// Individual subject copy; native human editorial review pending.
export const contract = {
  "ru": {
    "longDescription": "Складывает пластик, электричество и введённый износ принтера, затем применяет выбранную наценку к полной базовой сумме. Главный результат — стоимость с наценкой; при 0 % он совпадает с базовой себестоимостью. Расход материала и средняя мощность задаются вами: фактические затраты зависят от печати, а не только от массы готовой детали.",
    "howToUse": [
      "Возьмите из слайсера расход всего материала, включая поддержки и отходы; массу детали и катушки вводите в граммах.",
      "Введите цену катушки и часы печати; масса и время должны быть положительными, нулевая цена допустима.",
      "Укажите среднюю потребляемую мощность в ваттах и тариф за кВт·ч. Пиковая паспортная мощность не обязательно равна среднему потреблению.",
      "Износ за час и наценка необязательны: пустое поле означает 0. Все денежные суммы задаются в одной валюте."
    ],
    "howItWorks": "Пластик = граммы × цена катушки / граммы катушки. Энергия в кВт·ч = Вт × часы /1000; её цена = энергия × тариф. Износ = часы × ставка. База = пластик + электричество + износ; итог = база ×(1 + наценка/100). Наценка не является процентом прибыли от итоговой цены. Десятичные денежные отношения округляются до двух знаков только при выводе; расчёт сохраняет неокруглённые отношения.",
    "example": "85 г, катушка 1800 за 1000 г, 6,5 ч, 120 Вт и тариф 5,5: пластик 153, энергия 0,78 кВт·ч за 4,29, итог 157,29 при нулевых износе и наценке. При наценке 25 % эта же база даёт 196,61.",
    "faq": [
      {
        "q": "Почему цена грамма не вводится напрямую?",
        "a": "Цена грамма выводится как цена катушки / её масса. Указывайте именно массу материала, а не массу упаковки; другое исходное ценообразование нужно привести к той же базе."
      },
      {
        "q": "Какую мощность принтера указывать?",
        "a": "Среднюю за полный цикл печати. Её можно оценить по измеренной энергии и времени; разные материалы, нагрев и окружающие условия меняют потребление. Универсальных 100–150 Вт нет."
      },
      {
        "q": "Что относить к амортизации?",
        "a": "Вашу оценку износа и обслуживания на час работы. Это не бухгалтерская амортизация по нормативам; пустое поле или 0 убирают эту составляющую."
      },
      {
        "q": "Наценка считается от пластика?",
        "a": "Наценка применяется к пластику, электричеству и введённому износу вместе. Это выбор цены, а не доказательство покрытия труда, налогов или всех прочих расходов."
      },
      {
        "q": "Учитывается ли брак?",
        "a": "Только если вы включили их расход материала и время в поля. Поддержки, продувка и неудачные попытки требуют соответствующих исходных данных."
      }
    ],
    "disclaimer": "Оценка введённых расходов в одной валюте. Труд, налоги, простои и неуказанные неудачные попытки автоматически не добавляются; средняя мощность не гарантируется спецификацией.",
    "shortDescription": "Материал, электричество, износ и выбранная наценка в стоимости печати."
  },
  "en": {
    "longDescription": "Adds filament, electricity and the entered printer wear, then applies your markup to the complete base cost. The main result includes markup; at 0% it equals the base cost. You supply consumed material and average power: actual expenses depend on the print, not just the finished part’s weight.",
    "howToUse": [
      "Use total slicer material including supports and waste; enter part and spool amounts in grams.",
      "Enter spool price and print hours; material weight and time must be positive, while zero price is allowed.",
      "Enter average power in watts and tariff per kWh. A rated peak is not necessarily the average draw.",
      "Hourly wear and markup are optional; blank means 0. Use one currency for all money inputs."
    ],
    "howItWorks": "Filament = grams × spool price / spool grams. Energy in kWh = watts × hours /1000; energy cost = energy × tariff. Wear = hours × hourly rate. Base = filament + electricity + wear; total = base ×(1 + markup/100). Markup is not profit margin as a percentage of the final price. Decimal monetary ratios are rounded to two places only for display; calculations retain the unrounded ratios.",
    "example": "85 g from a spool priced 1800 for 1000 g, 6.5 h at 120 W and tariff 5.5: filament 153, energy 0.78 kWh costing 4.29, total 157.29 at zero wear and markup. A 25% markup on that base gives 196.61.",
    "faq": [
      {
        "q": "Why is the price per gram not entered directly?",
        "a": "Price per gram is spool price / material weight. Use filament weight, not packaging weight; convert a different pricing basis to the same inputs."
      },
      {
        "q": "Which printer power should I enter?",
        "a": "The average over the full print. Measured energy divided by time can estimate it; material, heating and ambient conditions affect consumption. There is no universal 100–150 W range."
      },
      {
        "q": "What counts as wear?",
        "a": "Your estimated wear and maintenance per operating hour. This is not statutory accounting depreciation; blank or 0 removes the component."
      },
      {
        "q": "Is markup applied to filament only?",
        "a": "Markup applies to filament, electricity and entered wear together. It sets a price, without proving that labour, taxes or all other expenses are covered."
      },
      {
        "q": "Are failed prints included?",
        "a": "Only when their consumed material and time are included in the inputs. Supports, purging and failed attempts require corresponding usage data."
      }
    ],
    "disclaimer": "Estimate of entered expenses in one currency. Labour, taxes, idle time and unentered failed prints are not added automatically; a specification does not guarantee average power.",
    "shortDescription": "Material, electricity, wear and chosen markup in a printing-cost estimate."
  },
  "uk": {
    "longDescription": "Додає матеріал, електрику та введене зношування принтера, потім застосовує націнку до всієї базової суми. Головний результат включає націнку; за 0 % він дорівнює базовій собівартості. Витрату матеріалу й середню потужність задаєте ви: фактична ціна залежить не лише від маси готової деталі.",
    "howToUse": [
      "Візьміть загальну витрату матеріалу зі слайсера, включно з підтримками й відходами; маси деталі та котушки вводьте в грамах.",
      "Введіть ціну котушки й години друку; маси та час додатні, нульова ціна допустима.",
      "Задайте середню потужність у ватах і тариф за кВт·год; пікова паспортна потужність не обов’язково є середньою.",
      "Зношування за годину й націнка необов’язкові: порожнє поле означає 0. Усі гроші вводьте в одній валюті."
    ],
    "howItWorks": "Матеріал = грами × ціна котушки / грами котушки. Енергія = Вт × години /1000 у кВт·год; її вартість = енергія × тариф. Зношування = години × ставка. База = матеріал + електрика + зношування; підсумок = база ×(1 + націнка/100). Націнка не дорівнює частці прибутку в кінцевій ціні. Десяткові грошові відношення округлюються до двох знаків лише для виведення; розрахунок зберігає неокруглені відношення.",
    "example": "85 г, котушка 1800 за 1000 г, 6,5 год, 120 Вт і тариф 5,5: матеріал 153, енергія 0,78 кВт·год за 4,29, разом 157,29 за нульових зношування й націнки. Націнка 25 % до цієї бази дає 196,61.",
    "faq": [
      {
        "q": "Чому електрика така дешева?",
        "a": "Ціна електрики залежить від виміряного середнього споживання, тривалості й вашого тарифу. Вона не завжди мала: універсальної потужності чи частки витрат для всіх принтерів немає."
      },
      {
        "q": "Що ще входить у реальну собівартість?",
        "a": "Враховано матеріал, електрику та введене зношування, а націнка змінює кінцеву ціну. Праця, податки, відходи й брак включені лише настільки, наскільки ви внесли відповідні витрати; універсальна подвійна надбавка не застосовується."
      },
      {
        "q": "Як дізнатися вагу деталі до друку?",
        "a": "Слайсер оцінює витрату за налаштуваннями матеріалу, заповнення й підтримок. Перевірте, що число означає всю потрібну витрату; це оцінка, а не гарантія фактичної маси."
      },
      {
        "q": "Чи враховано підтримки?",
        "a": "Лише якщо вони включені у введені грами. Окремо врахуйте підтримки, продувку й відходи: налаштування слайсера визначають, що входить у його підсумок."
      }
    ],
    "disclaimer": "Оцінка введених витрат в одній валюті. Праця, податки, простої та невведені невдалі спроби не додаються автоматично; специфікація не гарантує середню потужність.",
    "shortDescription": "Матеріал, електрика, зношування й обрана націнка у вартості друку."
  },
  "de": {
    "longDescription": "Addiert Material, Strom und eingegebenen Druckerverschleiß und wendet den Aufschlag auf die ganze Kostenbasis an. Das Hauptergebnis enthält den Aufschlag; bei 0 % entspricht es den Basiskosten. Verbrauch und mittlere Leistung sind Ihre Eingaben: tatsächliche Kosten hängen nicht nur vom Gewicht des fertigen Teils ab.",
    "howToUse": [
      "Gesamten Materialverbrauch des Slicers mit Stützen und Abfall verwenden; Teil und Spule in Gramm eingeben.",
      "Spulenpreis und Druckstunden eingeben; Massen und Zeit müssen positiv sein, Preis 0 ist zulässig.",
      "Mittlere Leistung in Watt und Preis pro kWh angeben. Eine Nennspitze ist nicht zwingend die durchschnittliche Aufnahme.",
      "Verschleiß pro Stunde und Aufschlag sind optional; leer bedeutet 0. Alle Geldbeträge in einer Währung angeben."
    ],
    "howItWorks": "Material = Gramm × Spulenpreis / Spulengramm. Energie = Watt × Stunden /1000 in kWh; Stromkosten = Energie × Tarif. Verschleiß = Stunden × Satz. Basis = Material + Strom + Verschleiß; Gesamt = Basis ×(1 + Aufschlag/100). Der Aufschlag ist nicht die Gewinnmarge bezogen auf den Endpreis. Dezimale Geldverhältnisse werden erst zur Anzeige auf zwei Stellen gerundet; die Rechnung behält ungerundete Verhältnisse.",
    "example": "85 g, Spule 1800 für 1000 g, 6,5 h, 120 W und Tarif 5,5 in einer gewählten Geldeinheit: Material 153, Energie 0,78 kWh für 4,29, Gesamt 157,29 ohne Verschleiß oder Aufschlag. 25 % Aufschlag ergibt 196,61; es findet keine Währungsumrechnung statt.",
    "faq": [
      {
        "q": "Warum wird der Preis je Gramm nicht unmittelbar eingetragen?",
        "a": "Grammkosten = Spulenpreis / Materialgewicht. Das Verpackungsgewicht gehört nicht hinein; andere Preisgrundlagen zuerst entsprechend umrechnen."
      },
      {
        "q": "Welche Leistung des Druckers soll ich eintragen?",
        "a": "Den Mittelwert des gesamten Drucks. Gemessene Energie geteilt durch Zeit kann ihn abschätzen; Material, Heizung und Umgebung ändern den Verbrauch. 100–150 W ist keine allgemeine Norm."
      },
      {
        "q": "Was zählt als Verschleiß?",
        "a": "Ihre Schätzung von Verschleiß und Wartung je Betriebsstunde, keine gesetzliche Abschreibung. Leer oder 0 entfernt diesen Posten."
      },
      {
        "q": "Gilt der Aufschlag nur für das Filament?",
        "a": "Aufschlag gilt für Material, Strom und eingegebenen Verschleiß gemeinsam. Damit wird ein Preis gesetzt, ohne nachzuweisen, dass Arbeit, Steuern und alle weiteren Kosten gedeckt sind."
      },
      {
        "q": "Sind fehlgeschlagene Drucke enthalten?",
        "a": "Nur wenn Materialverbrauch und Dauer dieser Versuche mit eingegeben werden. Stützen, Spülen und Fehlversuche benötigen passende Verbrauchsdaten."
      }
    ],
    "disclaimer": "Schätzung eingegebener Kosten in einer Währung. Arbeit, Steuern, Leerlauf und nicht eingegebene Fehldrucke fehlen; ein Datenblatt garantiert keine mittlere Aufnahme.",
    "shortDescription": "Material, Strom, Verschleiß und gewählter Aufschlag in den Druckkosten."
  },
  "es": {
    "longDescription": "Suma material, electricidad y desgaste introducido, y aplica el recargo a toda la base de costes. El resultado principal incluye el recargo; con 0 % coincide con el coste base. Tú indicas material consumido y potencia media: los gastos reales no dependen solo del peso de la pieza terminada.",
    "howToUse": [
      "Usa el material total del laminador, incluidos soportes y residuos; introduce pieza y bobina en gramos.",
      "Indica precio de bobina y horas de impresión; masas y tiempo deben ser positivos, pero se permite precio 0.",
      "Escribe potencia media en vatios y tarifa por kWh. Una potencia máxima nominal no tiene que ser el consumo medio.",
      "Desgaste horario y recargo son opcionales; vacío significa 0. Usa una moneda en todos los importes."
    ],
    "howItWorks": "Material = gramos × precio de bobina / gramos de bobina. Energía = vatios × horas /1000 en kWh; coste eléctrico = energía × tarifa. Desgaste = horas × tarifa horaria. Base = material + electricidad + desgaste; total = base ×(1 + recargo/100). El recargo no es el margen de beneficio sobre el precio final. Las razones monetarias decimales se redondean a dos cifras solo al mostrarlas; el cálculo conserva las razones sin redondear.",
    "example": "85 g, bobina 1800 por 1000 g, 6,5 h, 120 W y tarifa 5,5: material 153, energía 0,78 kWh por 4,29, total 157,29 sin desgaste ni recargo. Un 25 % de recargo da 196,61, en la misma unidad monetaria y sin convertir divisas.",
    "faq": [
      {
        "q": "¿Por qué no se introduce directamente el precio por gramo?",
        "a": "Precio por gramo = precio de bobina / peso del material. No incluyas el embalaje; adapta cualquier otra forma de precio a estos datos."
      },
      {
        "q": "¿Qué potencia de impresora debo introducir?",
        "a": "La media del ciclo completo. La energía medida dividida entre tiempo puede estimarla; material, calentamiento y ambiente cambian el consumo. 100–150 W no es una norma universal."
      },
      {
        "q": "¿Qué cuenta como desgaste?",
        "a": "Tu estimación de desgaste y mantenimiento por hora, no una depreciación legal. Vacío o 0 elimina el componente."
      },
      {
        "q": "¿El margen se aplica solo al filamento?",
        "a": "El recargo se aplica a material, electricidad y desgaste introducido juntos. Fija un precio, pero no demuestra que cubra trabajo, impuestos ni todos los demás gastos."
      },
      {
        "q": "¿Se incluyen las impresiones fallidas?",
        "a": "Solo si incluyes material y tiempo de esos intentos. Soportes, purgas y fallos requieren sus datos de consumo."
      }
    ],
    "disclaimer": "Estimación de gastos introducidos en una moneda. Mano de obra, impuestos, inactividad e intentos fallidos no introducidos no se añaden automáticamente; una ficha no garantiza potencia media.",
    "shortDescription": "Material, electricidad, desgaste y recargo elegido en el coste de impresión."
  }
};
