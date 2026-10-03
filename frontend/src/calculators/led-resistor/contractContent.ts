// Individually authored subject contracts; primary reading and independent evidence are recorded for wave12.
export const contract = {
  "ru": {
    "longDescription": "Найдите расчётный резистор для одного светодиода в простой последовательной цепи постоянного тока. Прямое напряжение Uf считается заданным при выбранном токе и температуре. Страница показывает падение напряжения, рассеиваемую мощность резистора и электрическую мощность светодиода; стандартный номинал и тепловой запас автоматически не выбираются.",
    "howToUse": [
      "Возьмите Uf из паспорта при нужном токе и температуре, не только по цвету свечения.",
      "Выберите мА или А до ввода тока.",
      "Для выбранного реального номинала пересчитайте ток и проверьте предельные Us, Uf и допуск R.",
      "Мощность PR не является готовой мощностью корпуса: примените паспортное тепловое снижение и условия монтажа."
    ],
    "howItWorks": "ΔU=Us−Uf>0, R=ΔU/I, PR=ΔU·I, PLED=Uf·I. Ток из мА делится на 1000; при вводе в А пересчёта нет. Us, Uf, I положительные. Модель фиксированного Uf не решает реальную нелинейную I–V-характеристику.",
    "example": "5 В, Uf=2 В и 20 мА дают 150 Ом, 0,06 Вт на резисторе и 0,04 Вт электрической мощности LED. Ввод 0,02 А даёт тот же ответ. При Us=Uf положительного резистора для заданного тока эта модель не определяет.",
    "faq": [
      {
        "q": "Почему прямое напряжение должно быть меньше питания?",
        "a": "Резистор гасит разницу между ними. Если разницы нет, гасить нечего и рабочая точка не задаётся."
      },
      {
        "q": "Какой номинал брать на практике?",
        "a": "Следующий стандартный номинал не меньше расчётного уменьшает номинальный ток при тех же Us, Uf. Это не гарантия максимального тока: проверяют Us, max, Uf, min и R, min, затем мощность и тепловое снижение по паспорту."
      },
      {
        "q": "Важно ли, в чём вводить ток?",
        "a": "Только для удобства: миллиамперы и амперы дают одинаковый ответ, перевод калькулятор делает сам."
      },
      {
        "q": "Почему мощность светодиода отличается от мощности резистора?",
        "a": "Ток одинаковый: PR=(Us−Uf)I, PLED=UfI, а сумма равна UsI. PLED — электрическая входная мощность, часть которой может стать светом; называть её целиком теплом неверно."
      }
    ],
    "disclaimer": "Один LED, постоянный ток и заданное Uf; без автоматического выбора ряда номиналов, теплового расчёта или гарантии тока."
  },
  "en": {
    "longDescription": "Find the nominal series resistor for one LED on a DC supply. Forward voltage Uf is assumed known at the chosen current and temperature. The page shows voltage drop, resistor dissipation and LED electrical input power; it does not select a standard resistor value or thermal margin.",
    "howToUse": [
      "Use datasheet Uf at the relevant current and temperature, not colour alone.",
      "Choose mA or A before entering current.",
      "For an actual resistor value, recalculate current with supply, LED and resistance tolerances.",
      "PR is not a ready-made component rating; apply datasheet derating and mounting conditions."
    ],
    "howItWorks": "ΔU=Us−Uf>0, R=ΔU/I, PR=ΔU·I, PLED=Uf·I. Convert mA to A by dividing by 1000; an A input needs no conversion. Us, Uf, I must be positive. A fixed Uf model does not solve the actual nonlinear I–V curve.",
    "example": "5 V, Uf=2 V and 20 mA give 150 Ω, 0.06 W resistor loss and 0.04 W LED electrical power. Entering 0.02 A gives the same result. When Us=Uf, this model cannot determine a positive resistor for the requested current.",
    "faq": [
      {
        "q": "Why must the forward voltage be below the supply?",
        "a": "The resistor exists to drop the difference. With no difference there is nothing to drop and no operating point to set."
      },
      {
        "q": "Which resistor should I actually buy?",
        "a": "The next standard value at or above the result lowers nominal current at unchanged Us, Uf. It does not guarantee maximum current: check Us, max, Uf, min and R, min, then dissipation and thermal derating."
      },
      {
        "q": "Does the current unit matter?",
        "a": "Only for entry. Milliamps and amps give the same answer once converted, and the calculator converts for you."
      },
      {
        "q": "Is the LED power the same as the resistor power?",
        "a": "The same current flows through both: PR=(Us−Uf)I and PLED=UfI, whose sum is UsI. PLED is electrical input power; some may become light, so it is not all heat."
      }
    ],
    "disclaimer": "One LED, DC and assumed Uf; no automatic preferred value, thermal design or guaranteed operating current."
  },
  "uk": {
    "longDescription": "Знайдіть номінальний послідовний резистор для одного LED від джерела постійної напруги. Uf вважається заданим за обраного струму й температури. Показано падіння напруги, втрати резистора та електричну потужність LED; стандартний номінал і тепловий запас не підбираються.",
    "howToUse": [
      "Беріть Uf із паспорта для потрібних струму й температури, а не лише за кольором.",
      "Перед вводом струму виберіть мА чи А.",
      "Для реального номіналу перевірте струм за Us, max, Uf, min та R, min.",
      "Звірте втрати PR із паспортним тепловим зниженням потужності та умовами монтажу."
    ],
    "howItWorks": "ΔU=Us−Uf>0, R=ΔU/I, PR=ΔU·I, PLED=Uf·I. Струм у мА ділиться на 1000; ввод у А не потребує перерахунку. Us, Uf, I додатні. Модель сталого Uf не розв’язує реальну нелінійну I–V-характеристику.",
    "example": "5 В, Uf=2 В і 20 мА дають 150 Ом, 0,06 Вт на резисторі та 0,04 Вт електричної потужності LED. 0,02 А дають той самий результат. За Us=Uf ця модель не визначає додатного резистора для бажаного струму.",
    "faq": [
      {
        "q": "Чому світлодіод не можна вмикати без резистора?",
        "a": "LED потребує контрольованого струму. У цій простій схемі його обмежує резистор; спеціальний драйвер струму — інша схема, тому резистор не є універсально обов’язковим елементом для кожного LED."
      },
      {
        "q": "Яка пряма напруга в різних кольорів?",
        "a": "Колір не задає точного Uf. Використайте паспортну I–V-криву для струму й температури. За малого Us−Uf навіть невеликий розкид сильно змінює струм; калькулятор не рекомендує автоматично підвищувати живлення."
      },
      {
        "q": "Що робити з кількома світлодіодами?",
        "a": "Послідовна гілка потребує сумарного Uf та перевірки кожного LED. Паралельні гілки можуть мати різні I–V-криві, тому спільний струм не гарантує рівного розподілу. Тут явно моделюється один LED."
      },
      {
        "q": "Який струм обирати?",
        "a": "Використайте робочий струм і граничні умови конкретного LED та охолодження. 20 мА не є універсальною нормою. PLED=UfI є електричною потужністю, а не лише теплом."
      }
    ],
    "disclaimer": "Один LED, постійний струм і задане Uf; без підбору номіналів, теплової моделі та гарантії струму."
  },
  "de": {
    "longDescription": "Bestimme den nominalen Vorwiderstand für eine LED an einer Gleichspannungsquelle. Uf wird bei gewähltem Strom und Temperatur als bekannt angenommen. Angezeigt werden Spannungsabfall, Widerstandsverlust und elektrische LED-Eingangsleistung; Normwert und thermische Reserve werden nicht ausgewählt.",
    "howToUse": [
      "Uf aus dem Datenblatt bei relevantem Strom und Temperatur verwenden.",
      "Vor der Stromeingabe mA oder A wählen.",
      "Für einen realen Normwert den Strom mit Versorgung-, LED- und Widerstandstoleranzen nachrechnen.",
      "PR ist keine fertige Bauteilleistungsangabe; Datenblatt-Derating und Einbaubedingungen prüfen."
    ],
    "howItWorks": "ΔU=Us−Uf>0, R=ΔU/I, PR=ΔU·I, PLED=Uf·I. mA werden durch 1000 geteilt; eine A-Eingabe braucht keine Umrechnung. Us, Uf, I müssen positiv sein. Das feste Uf löst keine reale nichtlineare I–V-Kennlinie.",
    "example": "5 V, Uf=2 V und 20 mA ergeben 150 Ω, 0,06 W am Widerstand und 0,04 W elektrische LED-Leistung. 0,02 A ergeben dasselbe. Bei Us=Uf bestimmt dieses Modell keinen positiven Widerstand für den gewünschten Strom.",
    "faq": [
      {
        "q": "Warum muss die Flussspannung unter der Versorgung liegen?",
        "a": "Der Widerstand ist dazu da, die Differenz abzufangen. Ohne Differenz gibt es nichts abzufangen und keinen Arbeitspunkt einzustellen."
      },
      {
        "q": "Welchen Widerstand soll ich tatsächlich kaufen?",
        "a": "Der nächste Normwert oberhalb des Ergebnisses senkt bei unverändertem Us, Uf den nominalen Strom. Das garantiert keinen Maximalstrom: Us, max, Uf, min und R, min sowie Verlust und thermisches Derating prüfen."
      },
      {
        "q": "Spielt die Einheit des Stroms eine Rolle?",
        "a": "Nur bei der Eingabe. Milliampere und Ampere ergeben nach der Umrechnung dieselbe Antwort, und der Rechner rechnet für dich um."
      },
      {
        "q": "Ist die Leistung in der LED dieselbe wie im Widerstand?",
        "a": "Beide führen denselben Strom: PR=(Us−Uf)I und PLED=UfI ergeben zusammen UsI. PLED ist elektrische Eingangsleistung, die teilweise Licht werden kann; sie ist nicht vollständig Wärme."
      }
    ],
    "disclaimer": "Eine LED, Gleichstrom und angenommenes Uf; ohne Normwertwahl, thermische Auslegung oder garantierten Strom."
  },
  "es": {
    "longDescription": "Calcula la resistencia serie nominal para un LED alimentado en continua. Se supone conocido Uf para la corriente y temperatura elegidas. Se muestran caída de tensión, disipación de resistencia y potencia eléctrica del LED; no se elige valor normalizado ni margen térmico.",
    "howToUse": [
      "Toma Uf de la ficha para corriente y temperatura relevantes, no solo del color.",
      "Selecciona mA o A antes de introducir corriente.",
      "Para un valor real, recalcula corriente con tolerancias de alimentación, LED y resistencia.",
      "PR no es una clasificación final del componente: aplica reducción térmica y condiciones de montaje de su ficha."
    ],
    "howItWorks": "ΔU=Us−Uf>0, R=ΔU/I, PR=ΔU·I, PLED=Uf·I. Convierte mA a A dividiendo entre 1000; una entrada en A no requiere conversión. Us, Uf, I deben ser positivos. Uf fijo no resuelve la curva I–V no lineal real.",
    "example": "5 V, Uf=2 V y 20 mA dan 150 Ω, 0,06 W en resistencia y 0,04 W eléctricos en LED. Introducir 0,02 A da lo mismo. Con Us=Uf este modelo no determina una resistencia positiva para la corriente solicitada.",
    "faq": [
      {
        "q": "¿Por qué la tensión directa debe ser menor que la de alimentación?",
        "a": "La resistencia existe para absorber la diferencia. Sin diferencia no hay nada que absorber ni punto de trabajo que fijar."
      },
      {
        "q": "¿Qué resistencia debo comprar en realidad?",
        "a": "El siguiente valor normalizado igual o mayor reduce la corriente nominal si Us, Uf permanecen iguales. No garantiza corriente máxima: verifica Us, max, Uf, min y R, min, además de disipación y reducción térmica."
      },
      {
        "q": "¿Importa la unidad de corriente?",
        "a": "Solo para introducirla. Los miliamperios y los amperios dan la misma respuesta una vez convertidos, y la calculadora convierte por ti."
      },
      {
        "q": "¿La potencia del LED es la misma que la de la resistencia?",
        "a": "Comparten corriente: PR=(Us−Uf)I y PLED=UfI suman UsI. PLED es potencia eléctrica de entrada; parte puede convertirse en luz, por lo que no es todo calor."
      }
    ],
    "disclaimer": "Un LED en continua con Uf supuesto; sin elección de valor normalizado, cálculo térmico o corriente garantizada."
  }
};
