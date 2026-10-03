import type { CalculatorDef } from '../../lib/types';
type Copy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;
export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Copy> = {
  "ru": {
    "longDescription": "Семьдесят два, делённые на ставку, дают срок удвоения в годах — приближение, которое считается в уме. Рядом стоит точное значение через логарифм и расхождение между ними: не чтобы подменить правило, а чтобы было видно, где оно начинает вводить в заблуждение. На восьми процентах расхождение меньше недели, на половине процента правило ошибается на пять лет.",
    "howToUse": [
      "Введите годовую ставку.",
      "Прочитайте оценку по правилу 72.",
      "Сравните её с точным значением рядом."
    ],
    "howItWorks": "Оценка в годах = 72/r, где r — положительная годовая доходность в процентах. Логарифмический срок = ln(2)/ln(1+r/100); расхождение — абсолютная разность двух сроков. Предполагаются постоянный годовой множитель и реинвестирование процентов без взносов. Дробный точный срок — математическое продолжение кривой роста: при начислении только по итогам целого года фактическое удвоение впервые наблюдается в следующую целую годовую дату. Начальная сумма необязательна и влияет только на строку «Сумма после удвоения».",
    "example": "При 8 процентах правило даёт 72 ÷ 8 = 9 лет, а точный ответ — 9,01. При 0,5 % оценка 144 года отличается от логарифмических 138,98 на 5,02 года; нулевая ставка не даёт конечного удвоения.",
    "faq": [
      {
        "q": "Почему 72, а не 70?",
        "a": "Семьдесят два нацело делятся на многие ходовые ставки — 2, 3, 4, 6, 8, 9, 12, — и именно поэтому приём считается в уме."
      },
      {
        "q": "Когда правило перестаёт работать?",
        "a": "У правила нет универсальной допустимой погрешности. При 6 % оценка 12 лет отличается от 11,8957 на 0,1043 года; при 10 % оценка 7,2 отличается от 7,2725 на 0,0725 года. Сравните показанное расхождение с точностью, которая нужна вашей задаче."
      },
      {
        "q": "Это то же самое, что калькулятор сложного процента?",
        "a": "Нет. Тот наращивает сумму за выбранный срок, а этот отвечает на один вопрос — когда она удвоится."
      },
      {
        "q": "Какая капитализация предполагается?",
        "a": "Используется эффективный годовой множитель 1+r/100. Если известна номинальная ставка с более частым начислением, сначала переведите её в эффективную годовую. Один и тот же эффективный годовой темп даёт одну и ту же кривую этого расчёта."
      }
    ],
    "disclaimer": "Приближение для постоянной положительной годовой доходности. Не учитывает взносы, снятия, комиссии, налоги и изменение ставки. Дробный срок не обещает дату договорного зачисления процентов или гарантированную доходность."
  },
  "en": {
    "longDescription": "Seventy-two divided by the rate gives the doubling time in years — an approximation you can do in your head. The exact figure from logarithms sits beside it along with the gap between them, not to replace the rule but to show where it starts to mislead. At eight percent the gap is under a week; at half a percent the rule is five years out.",
    "howToUse": [
      "Enter the annual rate.",
      "Read the rule-of-72 estimate.",
      "Compare it with the exact figure beside it."
    ],
    "howItWorks": "Estimated years = 72/r, where r is a positive annual return in percent. Logarithmic time = ln(2)/ln(1+r/100); the gap is the absolute difference between the two times. The model assumes a constant annual growth factor and reinvested interest without contributions. A fractional exact time extends the growth curve mathematically: if interest is credited only at whole-year ends, doubling is first observed at the next whole-year date. The optional starting amount only controls the doubled-amount row.",
    "example": "At 8 percent the rule gives 72 ÷ 8 = 9 years, and the exact answer is 9.01. At 0.5%, the 144-year estimate differs from 138.98 logarithmic years by 5.02 years; a zero rate cannot produce finite doubling.",
    "faq": [
      {
        "q": "Why 72 and not 70?",
        "a": "Seventy-two divides evenly by many common rates — 2, 3, 4, 6, 8, 9, 12 — which is what makes the shortcut usable in your head."
      },
      {
        "q": "When does the rule stop working?",
        "a": "There is no universal acceptable error. At 6%, 12 years differs from 11.8957 by 0.1043 years; at 10%, 7.2 differs from 7.2725 by 0.0725 years. Compare the displayed gap with the precision your task needs."
      },
      {
        "q": "Is this the same as a compound interest calculator?",
        "a": "No. A compound interest calculator grows a balance over a period you choose; this one answers a single question — when does it double."
      },
      {
        "q": "What compounding does it assume?",
        "a": "The model uses the effective annual factor 1+r/100. Convert a nominal rate with more frequent compounding to its effective annual rate first. The same effective annual growth gives the same curve here."
      }
    ],
    "disclaimer": "A shortcut for a constant positive annual return. Contributions, withdrawals, fees, taxes and rate changes are excluded. Fractional time does not promise a contractual interest-crediting date or a guaranteed return."
  },
  "uk": {
    "longDescription": "Правило 72 оцінює строк подвоєння без складного рахунку: поділіть 72 на річну ставку у відсотках. Поряд показано строк із логарифма та фактичну розбіжність. За 8 % це 9 років проти 9,0065, а за 0,5 % — 144 проти 138,98 року; тому точність перевіряється для конкретної ставки.",
    "howToUse": [
      "Введіть річну ставку у відсотках.",
      "Прочитайте оцінку за правилом і точний строк.",
      "Порівняйте їх — розбіжність показує межі застосовності правила."
    ],
    "howItWorks": "Оцінка в роках = 72/r, де r — додатна річна дохідність у відсотках. Логарифмічний строк = ln(2)/ln(1+r/100); розбіжність — абсолютна різниця строків. Припускаються сталий річний множник і реінвестування відсотків без внесків. Дробовий точний строк продовжує криву математично: за зарахування лише наприкінці цілого року подвоєння вперше спостерігається на наступну цілу річну дату. Необов’язкова початкова сума впливає лише на рядок подвоєної суми.",
    "example": "За 8 відсотків правило дає 72 ÷ 8 = 9 років, а точна відповідь — 9,01. За 2 % правило дало б 36 років проти точних 35, а за 30 % — 2,4 проти 2,64. За 0,5 % оцінка 144 роки відрізняється від логарифмічних 138,98 на 5,02 року; нульова ставка не дає скінченного подвоєння.",
    "faq": [
      {
        "q": "Чому саме 72, а не 70?",
        "a": "Для дуже малих ставок 100·ln(2) ≈ 69,3 є граничною константою. Але краща константа залежить від ставки: за 8 % число 72 майже збігається з логарифмічним строком. Його зручно ділити на багато цілих ставок."
      },
      {
        "q": "У якому діапазоні правило працює добре?",
        "a": "Універсальної допустимої похибки немає. За 6 % оцінка 12 років відрізняється від 11,8957 на 0,1043 року; за 10 % оцінка 7,2 відрізняється від 7,2725 на 0,0725 року. Це більше за кілька сотих року. Порівняйте показану розбіжність із потрібною точністю."
      },
      {
        "q": "Чи можна застосувати правило до інфляції?",
        "a": "Так, воно покаже, за скільки років ціни подвояться. За інфляції 6 % це близько дванадцяти років — і той самий розрахунок працює для будь-якого експоненційного процесу."
      },
      {
        "q": "А правило 114 і 144?",
        "a": "Це інші приблизні константи для потроєння й учетверення. За дуже малих ставок граничні константи дорівнюють 100·ln(3) ≈ 109,86 і 100·ln(4) ≈ 138,63; числа 114 та 144 є поправленими мнемонічними орієнтирами, а не тотожностями. Точний строк для множника K — ln(K)/ln(1+r/100)."
      }
    ],
    "disclaimer": "Наближення для сталої додатної річної дохідності. Внески, зняття, комісії, податки та зміну ставки не враховано. Дробовий строк не гарантує договірної дати зарахування відсотків чи дохідності."
  },
  "de": {
    "longDescription": "Zweiundsiebzig geteilt durch den Zinssatz ergibt die Verdopplungszeit in Jahren — eine Näherung, die im Kopf gelingt. Der genaue Wert aus dem Logarithmus steht daneben, zusammen mit dem Abstand zwischen beiden, nicht um die Faustregel zu ersetzen, sondern um zu zeigen, wo sie in die Irre führt. Bei acht Prozent liegt der Abstand unter einer Woche, bei einem halben Prozent schätzt die Regel fünf Jahre falsch.",
    "howToUse": [
      "Trage den Jahreszins ein.",
      "Lies die Schätzung nach der Regel von 72 ab.",
      "Vergleiche sie mit dem genauen Wert daneben."
    ],
    "howItWorks": "Geschätzte Jahre = 72/r, wobei r eine positive Jahresrendite in Prozent ist. Logarithmische Dauer = ln(2)/ln(1+r/100); die Abweichung ist der absolute Zeitunterschied. Angenommen werden ein konstanter jährlicher Wachstumsfaktor und wiederangelegte Zinsen ohne Einzahlungen. Eine gebrochene genaue Dauer setzt die Wachstumskurve mathematisch fort: bei Gutschrift nur am Ende ganzer Jahre wird die Verdopplung erstmals am nächsten ganzen Jahrestermin beobachtet. Der optionale Anfangsbetrag bestimmt nur die Zeile des verdoppelten Betrags.",
    "example": "Bei 8 Prozent nennt die Regel 72 ÷ 8 = 9 Jahre, und der genaue Wert ist 9,01. Bei 0,5 % weicht die Schätzung 144 Jahre um 5,02 von 138,98 logarithmischen Jahren ab; Zins null ergibt keine endliche Verdopplung.",
    "faq": [
      {
        "q": "Warum 72 und nicht 70?",
        "a": "Zweiundsiebzig lässt sich durch viele gebräuchliche Sätze glatt teilen — 2, 3, 4, 6, 8, 9, 12 — und genau das macht die Faustregel im Kopf brauchbar."
      },
      {
        "q": "Wann versagt die Regel?",
        "a": "Es gibt keine universelle zulässige Abweichung. Bei 6 % weichen 12 Jahre um 0,1043 von 11,8957 Jahren ab; bei 10 % weichen 7,2 um 0,0725 von 7,2725 Jahren ab. Vergleiche den angezeigten Abstand mit der benötigten Genauigkeit."
      },
      {
        "q": "Ist das dasselbe wie ein Zinseszinsrechner?",
        "a": "Nein. Ein Zinseszinsrechner lässt einen Betrag über einen Zeitraum wachsen, den du wählst; hier geht es um eine einzige Frage — wann verdoppelt er sich."
      },
      {
        "q": "Von welcher Verzinsung wird ausgegangen?",
        "a": "Verwendet wird der effektive Jahresfaktor 1+r/100. Rechne einen Nominalzins mit häufigerer Verzinsung zuerst in den effektiven Jahreszins um. Derselbe effektive Jahreszuwachs ergibt hier dieselbe Kurve."
      }
    ],
    "disclaimer": "Näherung für eine konstante positive Jahresrendite. Einzahlungen, Entnahmen, Gebühren, Steuern und Zinsänderungen bleiben unberücksichtigt. Die gebrochene Dauer ist weder vertraglicher Zinsgutschrifttermin noch Renditegarantie."
  },
  "es": {
    "longDescription": "Setenta y dos dividido entre el tipo da el tiempo de duplicación en años: una aproximación que puedes hacer de cabeza. La cifra exacta, sacada de logaritmos, aparece al lado junto con la diferencia entre ambas, no para sustituir a la regla sino para mostrar dónde empieza a inducir a error. Al ocho por ciento la diferencia no llega a una semana; al medio por ciento la regla se desvía cinco años.",
    "howToUse": [
      "Introduce el tipo anual.",
      "Consulta la estimación de la regla del 72.",
      "Compárala con la cifra exacta que aparece al lado."
    ],
    "howItWorks": "Años estimados = 72/r, con rentabilidad anual positiva r en porcentaje. Plazo logarítmico = ln(2)/ln(1+r/100); el desvío es la diferencia absoluta entre ambos plazos. Se supone un factor anual constante y reinversión de intereses sin aportaciones. El plazo exacto fraccionario prolonga matemáticamente la curva: si los intereses solo se abonan al terminar años completos, la duplicación se observa en la siguiente fecha anual entera. La cantidad inicial opcional solo determina la fila del importe duplicado.",
    "example": "Al 8 por ciento la regla da 72 ÷ 8 = 9 años, y la respuesta exacta es 9,01. Al 0,5 %, la estimación de 144 años difiere de los 138,98 logarítmicos en 5,02 años; una tasa cero no permite duplicar en un plazo finito.",
    "faq": [
      {
        "q": "¿Por qué 72 y no 70?",
        "a": "Setenta y dos se divide exacto entre muchos tipos habituales —2, 3, 4, 6, 8, 9, 12—, y eso es lo que hace usable el atajo de cabeza."
      },
      {
        "q": "¿Cuándo deja de funcionar la regla?",
        "a": "No hay un error admisible universal. Al 6 %, 12 años difieren de 11,8957 en 0,1043 años; al 10 %, 7,2 difieren de 7,2725 en 0,0725 años. Compara el desvío mostrado con la precisión necesaria para tu caso."
      },
      {
        "q": "¿Es lo mismo que una calculadora de interés compuesto?",
        "a": "No. Una calculadora de interés compuesto hace crecer un saldo durante un periodo que eliges; esta responde a una sola pregunta: cuándo se duplica."
      },
      {
        "q": "¿Qué capitalización supone?",
        "a": "Se usa el factor anual efectivo 1+r/100. Convierte primero una tasa nominal con capitalización más frecuente a su tasa anual efectiva. Un mismo crecimiento anual efectivo produce la misma curva aquí."
      }
    ],
    "disclaimer": "Atajo para rentabilidad anual positiva constante. Se excluyen aportaciones, retiradas, comisiones, impuestos y cambios de tasa. El plazo fraccionario no promete una fecha contractual de abono ni rentabilidad garantizada."
  }
};
