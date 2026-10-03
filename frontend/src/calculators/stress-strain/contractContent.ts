// Individually reviewed against all five actual188 native bodies; human editorial review pending.
export const contract = {
  "ru": {
    "longDescription": "Рассчитайте инженерное осевое напряжение F/A, измеренный модуль E=FL/(AΔL) или изменение длины ΔL=FL/(AE). Положительные сила и ΔL означают растяжение, отрицательные — сжатие. В режиме напряжения длину и измеренное изменение можно пропустить или оставить нулевыми: тогда выводится только F/A. Модуль оценивается лишь по ненулевой согласованной паре силы и изменения длины.",
    "howToUse": [
      "Выберите, что нужно найти: напряжение, модуль или удлинение.",
      "Введите силу в ньютонах и площадь сечения в квадратных миллиметрах.",
      "Рассчитайте инженерное осевое напряжение F/A, измеренный модуль E=FL/(AΔL) или изменение длины ΔL=FL/(AE). Положительные сила и ΔL означают растяжение, отрицательные — сжатие. В режиме напряжения длину и измеренное изменение можно пропустить или оставить нулевыми: тогда выводится только F/A. Модуль оценивается лишь по ненулевой согласованной паре силы и изменения длины.",
      "Малая одноосная деформация и линейная связь σ=Eε с положительным E. Исходная площадь, температура и свойства материала считаются постоянными. Граница линейности не обязательно совпадает с пределом текучести; ни её, ни прочность детали калькулятор не определяет."
    ],
    "howItWorks": "σ=F/A в МПа, ε=ΔL/L, E=FL/(AΔL) и ΔL=FL/(AE). Измерение модуля относится к линейному участку осевого испытания, не автоматически ко всей области до текучести.",
    "example": "10 кН на сечении 100 мм² дают 100 МПа, а удлинение 0,5 мм на метре — модуль 200 ГПа, как у стали.",
    "faq": [
      {
        "q": "Чем модуль Юнга отличается от жёсткости пружины?",
        "a": "Жёсткость детали зависит от геометрии: для однородного стержня k=EA/L. Модуль E характеризует материал при заданных условиях, но может зависеть от температуры, направления, состава и способа испытания. Его нельзя объявить неизменным для любого образца."
      },
      {
        "q": "Почему ньютоны на мм² сразу дают мегапаскали?",
        "a": "Потому что паскаль — это ньютон на квадратный метр, а квадратный миллиметр в миллион раз меньше. Единицы совпадают ровно, и переводить ничего не нужно."
      },
      {
        "q": "До какой нагрузки расчёт верен?",
        "a": "Малая одноосная деформация и линейная связь σ=Eε с положительным E. Исходная площадь, температура и свойства материала считаются постоянными. Граница линейности не обязательно совпадает с пределом текучести; ни её, ни прочность детали калькулятор не определяет."
      },
      {
        "q": "Годится ли это для сжатия?",
        "a": "Для многих металлов модуль при сжатии практически тот же, и формулы совпадают. Но бетон, чугун и композиты ведут себя по-разному на растяжение и на сжатие, и переносить результат на них нельзя."
      }
    ],
    "disclaimer": "Малая одноосная деформация и линейная связь σ=Eε с положительным E. Исходная площадь, температура и свойства материала считаются постоянными. Граница линейности не обязательно совпадает с пределом текучести; ни её, ни прочность детали калькулятор не определяет."
  },
  "en": {
    "longDescription": "Calculate engineering axial stress F/A, measured modulus E=FL/(AΔL), or length change ΔL=FL/(AE). Positive force and ΔL denote tension, negative values compression. In stress mode, length and measured change may be omitted or zero; then only F/A is reported. Modulus is estimated only from a nonzero force and length change with matching signs.",
    "howToUse": [
      "Choose what to solve for: stress, modulus or elongation.",
      "Enter the force in newtons and the cross-section in square millimetres.",
      "Calculate engineering axial stress F/A, measured modulus E=FL/(AΔL), or length change ΔL=FL/(AE). Positive force and ΔL denote tension, negative values compression. In stress mode, length and measured change may be omitted or zero; then only F/A is reported. Modulus is estimated only from a nonzero force and length change with matching signs.",
      "Small uniaxial deformation and the linear relation σ=Eε with positive E. Original area, temperature and material properties are constant. The linear limit need not coincide with yield; neither limit nor component strength is determined here."
    ],
    "howItWorks": "σ=F/A in MPa, ε=ΔL/L, E=FL/(AΔL), and ΔL=FL/(AE). A measured modulus refers to the linear part of an axial test, not automatically the whole range up to yield.",
    "example": "10 kN on 100 mm² gives 100 MPa, and 0.5 mm of stretch over a metre gives a modulus of 200 GPa — steel.",
    "faq": [
      {
        "q": "How does Young's modulus differ from spring stiffness?",
        "a": "Component stiffness depends on geometry: for a uniform rod k=EA/L. E characterises material under stated conditions, but may depend on temperature, direction, composition and test procedure. It is not automatically identical for every specimen."
      },
      {
        "q": "Why do newtons per mm² come out as megapascals directly?",
        "a": "Because a pascal is a newton per square metre, and a square millimetre is a million times smaller. The units coincide exactly, so nothing needs converting."
      },
      {
        "q": "Up to what load is this valid?",
        "a": "Small uniaxial deformation and the linear relation σ=Eε with positive E. Original area, temperature and material properties are constant. The linear limit need not coincide with yield; neither limit nor component strength is determined here."
      },
      {
        "q": "Does it apply to compression?",
        "a": "For many metals the modulus in compression is practically the same and the formulas coincide. Concrete, cast iron and composites behave differently in tension and compression, so the result cannot be carried across."
      }
    ],
    "disclaimer": "Small uniaxial deformation and the linear relation σ=Eε with positive E. Original area, temperature and material properties are constant. The linear limit need not coincide with yield; neither limit nor component strength is determined here."
  },
  "uk": {
    "longDescription": "Розрахуйте інженерне осьове напруження F/A, виміряний модуль E=FL/(AΔL) або зміну довжини ΔL=FL/(AE). Додатні сила й ΔL означають розтяг, від’ємні — стиск. У режимі напруження довжину та виміряну зміну можна пропустити або лишити нульовими: тоді виводиться тільки F/A. Модуль оцінюється лише за ненульовими силою й зміною довжини однакового знака.",
    "howToUse": [
      "Виберіть, що потрібно знайти: напругу, модуль чи подовження.",
      "Введіть силу в ньютонах і площу перерізу у квадратних міліметрах.",
      "Розрахуйте інженерне осьове напруження F/A, виміряний модуль E=FL/(AΔL) або зміну довжини ΔL=FL/(AE). Додатні сила й ΔL означають розтяг, від’ємні — стиск. У режимі напруження довжину та виміряну зміну можна пропустити або лишити нульовими: тоді виводиться тільки F/A. Модуль оцінюється лише за ненульовими силою й зміною довжини однакового знака.",
      "Мала одновісна деформація й лінійний зв’язок σ=Eε з додатним E. Початкова площа, температура й властивості матеріалу сталі. Межа лінійності не обов’язково збігається з межею текучості; жодну з них або міцність деталі тут не визначено."
    ],
    "howItWorks": "σ=F/A у МПа, ε=ΔL/L, E=FL/(AΔL), ΔL=FL/(AE). Вимірювання модуля стосується лінійної ділянки осьового випробування, не автоматично всієї області до текучості.",
    "example": "10 кН на перерізі 100 мм² дають 100 МПа, а подовження 0,5 мм на метрі — модуль 200 ГПа, як у сталі.",
    "faq": [
      {
        "q": "Що таке модуль Юнга?",
        "a": "Жорсткість деталі залежить від геометрії: для однорідного стрижня k=EA/L. E характеризує матеріал за заданих умов, але може залежати від температури, напрямку, складу й випробування. Він не є автоматично однаковим для кожного зразка."
      },
      {
        "q": "До якої межі працює розрахунок?",
        "a": "Мала одновісна деформація й лінійний зв’язок σ=Eε з додатним E. Початкова площа, температура й властивості матеріалу сталі. Межа лінійності не обов’язково збігається з межею текучості; жодну з них або міцність деталі тут не визначено."
      },
      {
        "q": "Чому напруга рахується в мегапаскалях?",
        "a": "Бо ньютон на квадратний міліметр — це рівно один мегапаскаль. Ця збіжність робить розрахунок зручним: сила в ньютонах, поділена на переріз у мм², одразу дає МПа."
      },
      {
        "q": "Чи залежить подовження від довжини деталі?",
        "a": "Так, пропорційно: двометровий стрижень за тієї самої напруги видовжиться вдвічі більше за метровий. Відносна ж деформація буде однаковою."
      }
    ],
    "disclaimer": "Мала одновісна деформація й лінійний зв’язок σ=Eε з додатним E. Початкова площа, температура й властивості матеріалу сталі. Межа лінійності не обов’язково збігається з межею текучості; жодну з них або міцність деталі тут не визначено."
  },
  "de": {
    "longDescription": "Berechne technische axiale Spannung F/A, gemessenen Modul E=FL/(AΔL) oder Längenänderung ΔL=FL/(AE). Positive Kraft und ΔL bedeuten Zug, negative Werte Druck. Im Spannungsmodus dürfen Länge und gemessene Änderung fehlen oder null sein; dann erscheint nur F/A. Ein Modul wird nur aus einer von null verschiedenen Kraft und Längenänderung gleichen Vorzeichens bestimmt.",
    "howToUse": [
      "Wähle, was gesucht ist: Spannung, Modul oder Verlängerung.",
      "Trage die Kraft in Newton und den Querschnitt in Quadratmillimetern ein.",
      "Berechne technische axiale Spannung F/A, gemessenen Modul E=FL/(AΔL) oder Längenänderung ΔL=FL/(AE). Positive Kraft und ΔL bedeuten Zug, negative Werte Druck. Im Spannungsmodus dürfen Länge und gemessene Änderung fehlen oder null sein; dann erscheint nur F/A. Ein Modul wird nur aus einer von null verschiedenen Kraft und Längenänderung gleichen Vorzeichens bestimmt.",
      "Kleine einachsige Verformung und linearer Zusammenhang σ=Eε bei positivem E. Ursprünglicher Querschnitt, Temperatur und Stoffeigenschaften sind konstant. Linearitätsgrenze und Streckgrenze müssen nicht zusammenfallen; beide und die Bauteilfestigkeit werden hier nicht bestimmt."
    ],
    "howItWorks": "σ=F/A in MPa, ε=ΔL/L, E=FL/(AΔL) und ΔL=FL/(AE). Ein gemessener Modul gilt für den linearen Abschnitt des axialen Versuchs, nicht automatisch für den gesamten Bereich bis zur Streckgrenze.",
    "example": "10 kN auf 100 mm² ergeben 100 MPa, und 0,5 mm Dehnung über einen Meter ergeben einen Modul von 200 GPa — Stahl.",
    "faq": [
      {
        "q": "Wie unterscheidet sich der Elastizitätsmodul von der Federkonstante?",
        "a": "Die Bauteilsteifigkeit hängt von der Geometrie ab: Beim homogenen Stab gilt k=EA/L. E beschreibt den Werkstoff unter gegebenen Bedingungen, kann aber von Temperatur, Richtung, Zusammensetzung und Prüfverfahren abhängen. Er ist nicht automatisch für jede Probe identisch."
      },
      {
        "q": "Warum ergeben Newton je mm² unmittelbar Megapascal?",
        "a": "Weil ein Pascal ein Newton je Quadratmeter ist und ein Quadratmillimeter millionenfach kleiner. Die Einheiten fallen genau zusammen, es ist also nichts umzurechnen."
      },
      {
        "q": "Bis zu welcher Last gilt das?",
        "a": "Kleine einachsige Verformung und linearer Zusammenhang σ=Eε bei positivem E. Ursprünglicher Querschnitt, Temperatur und Stoffeigenschaften sind konstant. Linearitätsgrenze und Streckgrenze müssen nicht zusammenfallen; beide und die Bauteilfestigkeit werden hier nicht bestimmt."
      },
      {
        "q": "Gilt das auch für Druck?",
        "a": "Bei vielen Metallen ist der Modul im Druck praktisch derselbe, und die Formeln fallen zusammen. Beton, Gusseisen und Verbundwerkstoffe verhalten sich im Zug und im Druck verschieden, das Ergebnis lässt sich dort also nicht übertragen."
      }
    ],
    "disclaimer": "Kleine einachsige Verformung und linearer Zusammenhang σ=Eε bei positivem E. Ursprünglicher Querschnitt, Temperatur und Stoffeigenschaften sind konstant. Linearitätsgrenze und Streckgrenze müssen nicht zusammenfallen; beide und die Bauteilfestigkeit werden hier nicht bestimmt."
  },
  "es": {
    "longDescription": "Calcula tensión axial de ingeniería F/A, módulo medido E=FL/(AΔL) o cambio de longitud ΔL=FL/(AE). Fuerza y ΔL positivos indican tracción; negativos, compresión. En el modo de tensión pueden omitirse longitud y cambio medido o dejarlos a cero: se presenta solo F/A. El módulo se estima únicamente con fuerza y cambio no nulos y del mismo signo.",
    "howToUse": [
      "Elige qué despejar: tensión, módulo o alargamiento.",
      "Introduce la fuerza en newtons y la sección en milímetros cuadrados.",
      "Calcula tensión axial de ingeniería F/A, módulo medido E=FL/(AΔL) o cambio de longitud ΔL=FL/(AE). Fuerza y ΔL positivos indican tracción; negativos, compresión. En el modo de tensión pueden omitirse longitud y cambio medido o dejarlos a cero: se presenta solo F/A. El módulo se estima únicamente con fuerza y cambio no nulos y del mismo signo.",
      "Deformación uniaxial pequeña y relación lineal σ=Eε con E positivo. Se mantienen constantes sección inicial, temperatura y propiedades. El límite lineal no tiene por qué coincidir con la fluencia; aquí no se determina ninguno ni la resistencia de la pieza."
    ],
    "howItWorks": "σ=F/A en MPa, ε=ΔL/L, E=FL/(AΔL) y ΔL=FL/(AE). El módulo medido corresponde al tramo lineal del ensayo axial, no automáticamente a todo el intervalo hasta la fluencia.",
    "example": "10 kN sobre 100 mm² dan 100 MPa, y 0,5 mm de estiramiento en un metro dan un módulo de 200 GPa: acero.",
    "faq": [
      {
        "q": "¿En qué se diferencia el módulo de Young de la rigidez de un muelle?",
        "a": "La rigidez de la pieza depende de su geometría: en una barra uniforme k=EA/L. E caracteriza el material bajo condiciones dadas, pero puede variar con temperatura, dirección, composición y ensayo. No es automáticamente idéntico para todas las probetas."
      },
      {
        "q": "¿Por qué los newtons por mm² salen directamente en megapascales?",
        "a": "Porque un pascal es un newton por metro cuadrado, y un milímetro cuadrado es un millón de veces menor. Las unidades coinciden exactamente, así que no hay que convertir nada."
      },
      {
        "q": "¿Hasta qué carga vale esto?",
        "a": "Deformación uniaxial pequeña y relación lineal σ=Eε con E positivo. Se mantienen constantes sección inicial, temperatura y propiedades. El límite lineal no tiene por qué coincidir con la fluencia; aquí no se determina ninguno ni la resistencia de la pieza."
      },
      {
        "q": "¿Vale para compresión?",
        "a": "En muchos metales el módulo a compresión es prácticamente el mismo y las fórmulas coinciden. El hormigón, la fundición y los materiales compuestos se comportan de forma distinta a tracción y a compresión, así que el resultado no puede trasladarse."
      }
    ],
    "disclaimer": "Deformación uniaxial pequeña y relación lineal σ=Eε con E positivo. Se mantienen constantes sección inicial, temperatura y propiedades. El límite lineal no tiene por qué coincidir con la fluencia; aquí no se determina ninguno ni la resistencia de la pieza."
  }
};
