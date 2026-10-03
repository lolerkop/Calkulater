// Individually authored subject contracts; primary reading and independent evidence are recorded for wave12.
export const contract = {
  "ru": {
    "longDescription": "Найдите собственную частоту идеального LC-контура, период и характеристическое сопротивление ρ=√(L/C). Ввод — индуктивность в мкГн и ёмкость в нФ. Частоту определяет произведение LC, аρ характеризует соотношение амплитуд напряжения на конденсаторе и тока. Оно не равно входному импедансу контура на резонансе и не определяет допустимую нагрузку.",
    "howToUse": [
      "Вводите мкГн и нФ; перевод в Гн и Ф выполняется внутри.",
      "Проверяйте частоту саморезонанса и реальные характеристики элементов по паспортам.",
      "Строка «волновое сопротивление» означает ρ=√(L/C), а не сопротивление подключаемой нагрузки.",
      "Для добротности, затухания или нагруженного резонанса нужны потери и схема, которых здесь нет."
    ],
    "howItWorks": "L=LмкГн·10⁻⁶ Гн, C=CнФ·10⁻⁹ Ф; f₀=1/(2π√LC), T=2π√LC, ρ=√(L/C). Из равенства энергий CU_Cmax²/2=LImax²/2 следует U_Cmax/Imax=ρ. Оба параметра положительные; сопротивление и паразитные элементы не заданы.",
    "example": "100 мкГн и 100 нФ дают 50329,21 Гц, период 1,987·10⁻⁵ с иρ=31,623 Ом. 10 мкГн и 1000 нФ сохраняют частоту, но ρ=3,162 Ом. Если увеличить только L вчетверо, частота уменьшится вдвое, аρ вырастет вдвое.",
    "faq": [
      {
        "q": "Почему разные пары дают одну частоту?",
        "a": "Потому что в формулу входит произведение L·C, а не сами величины. Пары 100 мкГн + 100 нФ и 10 мкГн + 1000 нФ имеют одинаковое произведение, поэтому и частота совпадает — различаются они волновым сопротивлением."
      },
      {
        "q": "Что даёт волновое сопротивление?",
        "a": "ρ — отношение пикового напряжения конденсатора к амплитуде тока идеальных свободных колебаний. Напряжение и ток достигают пиков в разные моменты. Это не мгновенное U/I и не входной импеданс."
      },
      {
        "q": "Учитывается ли сопротивление проводов?",
        "a": "Нет. Для свободного затухающего последовательного RLC ωd=√(1/LC−(R/2 L)²) в колебательном режиме. Но максимум вынужденного тока идеального последовательного RLC остаётся при ω₀=1/√LC. Универсального «сдвига вниз» нет."
      },
      {
        "q": "Отличается ли последовательный контур от параллельного?",
        "a": "Идеальные последовательная и параллельная схемы с теми же L, C имеют f₀. Входной импеданс на этой частоте зависит от соединения и потерь: в идеале последовательный стремится к нулю, параллельный — к бесконечности."
      }
    ],
    "disclaimer": "Идеальный LC без потерь; без добротности, нагруженного импеданса и паразитных параметров."
  },
  "en": {
    "longDescription": "Find the natural frequency, period and characteristic impedance ρ=√(L/C) of an ideal LC circuit. Inputs are µH and nF. The product LC fixes frequency;ρ relates capacitor peak voltage to current amplitude. It is not the circuit input impedance at resonance and does not specify a permissible or matched load.",
    "howToUse": [
      "Enter µH and nF; conversion to H and F is internal.",
      "Check component self-resonance and actual specifications separately.",
      "The characteristic-impedance row means ρ=√(L/C), not the impedance of a load to connect.",
      "Q, damping and loaded resonance require losses and topology that are not entered here."
    ],
    "howItWorks": "L=LµH·10⁻⁶ H, C=CnF·10⁻⁹ F; f₀=1/(2π√LC), T=2π√LC, ρ=√(L/C). Equal peak energies CU_Cmax²/2=LImax²/2 give U_Cmax/Imax=ρ. Both values must be positive; resistance and parasitic elements are absent.",
    "example": "100 µH and 100 nF give 50329.21 Hz, period 1.987·10⁻⁵ s and ρ=31.623 Ω. 10 µH and 1000 nF keep the frequency but give ρ=3.162 Ω. Quadrupling only L halves frequency and doubles ρ.",
    "faq": [
      {
        "q": "Why do different pairs give one frequency?",
        "a": "Because the formula takes the L·C product, not the values themselves. The pairs 100 µH + 100 nF and 10 µH + 1000 nF share a product, so the frequency matches — what differs is the characteristic impedance."
      },
      {
        "q": "What is the characteristic impedance for?",
        "a": "ρ is capacitor peak voltage divided by current amplitude during ideal free oscillation. Those peaks occur at different instants. It is neither instantaneous U/I nor input impedance."
      },
      {
        "q": "Is wire resistance accounted for?",
        "a": "No. Free underdamped series RLC has ωd=√(1/LC−(R/2 L)²). The forced current maximum in an ideal series RLC remains at ω₀=1/√LC. Loss does not imply one universal downward shift for every resonance definition."
      },
      {
        "q": "Does a series circuit differ from a parallel one?",
        "a": "Ideal series and parallel configurations with the same L, C have f₀. Their input impedances depend on topology and losses: ideally series impedance tends to zero and parallel impedance to infinity."
      }
    ],
    "disclaimer": "Ideal lossless LC; no Q, loaded input impedance or parasitic parameters."
  },
  "uk": {
    "longDescription": "Знайдіть власну частоту ідеального LC-контуру, період і характеристичний опір ρ=√(L/C). Вхідні одиниці — мкГн і нФ. Частоту задає добуток LC, аρ пов’язує пікову напругу конденсатора з амплітудою струму. Це не вхідний імпеданс на резонансі й не критерій узгодженого навантаження.",
    "howToUse": [
      "Вводьте мкГн і нФ; переведення в Гн та Ф виконується всередині.",
      "Окремо звіряйте саморезонанс і реальні характеристики компонентів.",
      "Рядок хвильового опору означає ρ=√(L/C), а не імпеданс потрібного навантаження.",
      "Для добротності, загасання та навантаженого резонансу потрібні втрати й топологія."
    ],
    "howItWorks": "L=LмкГн·10⁻⁶ Гн, C=CнФ·10⁻⁹ Ф; f₀=1/(2π√LC), T=2π√LC, ρ=√(L/C). З рівності пікових енергій CU_Cmax²/2=LImax²/2 отримуємо U_Cmax/Imax=ρ. L, C додатні; опір і паразитні елементи не задані.",
    "example": "100 мкГн і 100 нФ дають 50329,21 Гц, період 1,987·10⁻⁵ с та ρ=31,623 Ом. 10 мкГн і 1000 нФ залишають ту саму частоту, але ρ=3,162 Ом. Чотирикратне збільшення лише L зменшує частоту вдвічі та збільшує ρ вдвічі.",
    "faq": [
      {
        "q": "Чому частота залежить від кореня?",
        "a": "Бо енергія періодично перетікає між котушкою й конденсатором, і період пропорційний кореню з добутку. Тому щоб знизити частоту вдвічі, добуток LC треба збільшити вчетверо."
      },
      {
        "q": "Що таке хвильовий опір?",
        "a": "ρ=U_Cmax/Imax для ідеальних вільних коливань; піки напруги конденсатора та струму настають у різний час. Це не миттєве U/I, не вхідний імпеданс і не визначене тут узгоджене навантаження."
      },
      {
        "q": "Що краще змінювати — L чи C?",
        "a": "У моделі зміна L чи C впливає на f₀ іρ. Збільшення L вчетверо зменшує f₀ вдвічі та подвоює ρ; збільшення C вчетверо зменшує обидві величини вдвічі. Вибір реального елемента залежить від його паспорта."
      },
      {
        "q": "Чи враховано втрати в котушці?",
        "a": "Ні. Для вільного недозагасаючого послідовного RLC ωd=√(1/LC−(R/2 L)²), але максимум вимушеного струму ідеального послідовного RLC залишається при ω₀=1/√LC. Тому зсув униз не універсальний."
      }
    ],
    "disclaimer": "Ідеальний LC без втрат; без добротності, навантаженого імпедансу та паразитних параметрів."
  },
  "de": {
    "longDescription": "Bestimme Eigenfrequenz, Periodendauer und charakteristisches Impedanzmaß ρ=√(L/C) eines idealen LC-Kreises. Die Eingaben sind µH und nF. Das Produkt LC bestimmt die Frequenz;ρ verknüpft Kondensatorspitzenspannung und Stromamplitude. Es ist weder Eingangsimpedanz bei Resonanz noch eine Angabe für die passende Last.",
    "howToUse": [
      "µH und nF eingeben; die Umrechnung in H und F erfolgt intern.",
      "Eigenresonanz und reale Bauteildaten separat prüfen.",
      "Die Wellenwiderstandszeile bezeichnet ρ=√(L/C), nicht eine anzuschließende Lastimpedanz.",
      "Güte, Dämpfung und belastete Resonanz benötigen Verluste und Schaltungstopologie."
    ],
    "howItWorks": "L=LµH·10⁻⁶ H, C=CnF·10⁻⁹ F; f₀=1/(2π√LC), T=2π√LC, ρ=√(L/C). Aus gleichen Spitzenenergien CU_Cmax²/2=LImax²/2 folgt U_Cmax/Imax=ρ. Beide Eingaben müssen positiv sein; Widerstand und Parasiten fehlen.",
    "example": "100 µH und 100 nF ergeben 50329,21 Hz, 1,987·10⁻⁵ s und ρ=31,623 Ω. 10 µH mit 1000 nF behält die Frequenz, ergibt aber ρ=3,162 Ω. Nur L vervierfachen halbiert die Frequenz und verdoppelt ρ.",
    "faq": [
      {
        "q": "Warum ergeben verschiedene Paare eine Frequenz?",
        "a": "Weil die Formel das Produkt L·C nimmt und nicht die Werte selbst. Die Paare 100 µH + 100 nF und 10 µH + 1000 nF teilen ein Produkt, die Frequenz stimmt also überein — verschieden ist der Kennwiderstand."
      },
      {
        "q": "Wozu der Kennwiderstand?",
        "a": "ρ ist Kondensatorspitzenspannung geteilt durch Stromamplitude bei idealer freier Schwingung. Die Spitzen treten zu verschiedenen Zeitpunkten auf;ρ ist weder momentanes U/I noch Eingangsimpedanz."
      },
      {
        "q": "Ist der Drahtwiderstand berücksichtigt?",
        "a": "Nein. Für die freie unterdämpfte Reihen-RLC-Schwingung gilt ωd=√(1/LC−(R/2 L)²). Das erzwungene Strommaximum des idealen Reihen-RLC liegt dagegen bei ω₀=1/√LC. Verluste verschieben nicht jede Resonanzdefinition allgemein nach unten."
      },
      {
        "q": "Unterscheidet sich ein Reihen- von einem Parallelkreis?",
        "a": "Ideale Reihen- und Parallelschaltungen mit gleichen L, C haben f₀. Die Eingangsimpedanz hängt von Topologie und Verlusten ab: ideal geht sie in Reihe gegen null, parallel gegen unendlich."
      }
    ],
    "disclaimer": "Idealer verlustloser LC-Kreis; ohne Güte, belastete Impedanz oder parasitäre Parameter."
  },
  "es": {
    "longDescription": "Obtén frecuencia natural, período y valor característico ρ=√(L/C) de un circuito LC ideal. Las entradas son µH y nF. El producto LC determina la frecuencia;ρ relaciona el pico de tensión del condensador con la amplitud de corriente. No es la impedancia de entrada en resonancia ni determina una carga adaptada.",
    "howToUse": [
      "Introduce µH y nF; la conversión a H y F es interna.",
      "Revisa por separado autorresonancia y características reales del componente.",
      "La fila de impedancia característica representa ρ=√(L/C), no una carga para conectar.",
      "Q, amortiguamiento y resonancia con carga requieren pérdidas y topología que no se introducen aquí."
    ],
    "howItWorks": "L=LµH·10⁻⁶ H, C=CnF·10⁻⁹ F; f₀=1/(2π√LC), T=2π√LC, ρ=√(L/C). La igualdad de energías máximas CU_Cmax²/2=LImax²/2 da U_Cmax/Imax=ρ. Ambas entradas deben ser positivas; no se incluyen resistencia ni parásitos.",
    "example": "100 µH y 100 nF dan 50329,21 Hz, período 1,987·10⁻⁵ s yρ=31,623 Ω. 10 µH y 1000 nF conservan la frecuencia pero dan ρ=3,162 Ω. Cuadruplicar solo L divide la frecuencia por dos y duplica ρ.",
    "faq": [
      {
        "q": "¿Por qué parejas distintas dan una misma frecuencia?",
        "a": "Porque la fórmula toma el producto L·C y no los valores en sí. Las parejas 100 µH + 100 nF y 10 µH + 1000 nF comparten producto, así que la frecuencia coincide; lo que cambia es la impedancia característica."
      },
      {
        "q": "¿Para qué sirve la impedancia característica?",
        "a": "ρ es el pico de tensión del condensador dividido por la amplitud de corriente en oscilación libre ideal. Los picos ocurren en instantes distintos; no es U/I instantáneo ni impedancia de entrada."
      },
      {
        "q": "¿Se tiene en cuenta la resistencia del hilo?",
        "a": "No. La oscilación libre subamortiguada del RLC serie tiene ωd=√(1/LC−(R/2 L)²). El máximo de corriente forzada del RLC serie ideal sigue en ω₀=1/√LC. Las pérdidas no implican un desplazamiento universal hacia abajo."
      },
      {
        "q": "¿Un circuito serie se diferencia de uno paralelo?",
        "a": "Las configuraciones ideales serie y paralelo con los mismos L, C comparten f₀. Su impedancia de entrada depende de conexión y pérdidas: idealmente tiende a cero en serie y a infinito en paralelo."
      }
    ],
    "disclaimer": "LC ideal sin pérdidas; no calcula Q, impedancia con carga ni parámetros parásitos."
  }
};
