// Individually reviewed against all five actual188 native bodies; human editorial review pending.
export const contract = {
  "ru": {
    "longDescription": "Момент инерции зависит от распределения массы и выбранной оси, а не только от массы тела. Здесь тела однородные: тонкий стержень вращается вокруг перпендикулярной оси через центр или конец; диск и тонкое кольцо — вокруг центральной оси, перпендикулярной плоскости; шар и тонкая сферическая оболочка — вокруг диаметра. Размер означает длину L для стержня и радиус r для остальных форм.",
    "howToUse": [
      "Выберите тело: ось вращения задана самим выбором.",
      "Для диска, кольца и шара вводите радиус, для стержня — его длину.",
      "Радиус инерции показывает, на каком расстоянии от оси нужно собрать всю массу, чтобы момент не изменился.",
      "Для составного тела считайте части отдельно и складывайте моменты относительно одной оси."
    ],
    "howItWorks": "Стержень через центр mL²/12, через конец mL²/3, диск mr²/2, кольцо mr², сплошной шар 2 mr²/5, полая сфера 2 mr²/3.",
    "example": "Диск массой 2 кг радиусом 15 см имеет момент инерции 0,0225 кг·м².",
    "faq": [
      {
        "q": "Почему у кольца момент вдвое больше, чем у диска?",
        "a": "У кольца вся масса на радиусе, а у диска она размазана от центра к краю. Момент растёт как квадрат расстояния, поэтому внутренние слои диска вносят вклад заметно меньше."
      },
      {
        "q": "Зачем два варианта для стержня?",
        "a": "Iконец=Iцентр+m(L/2)²=mL²/3, то есть вчетверо больше mL²/12. Это сравнение двух осей; удобство прикладывания силы зависит ещё от плеча и не следует из одного момента инерции."
      },
      {
        "q": "Что показывает радиус инерции?",
        "a": "Расстояние от оси, на котором нужно сосредоточить всю массу тела точкой, чтобы момент инерции остался прежним. Это удобная замена сложной формы одним числом."
      },
      {
        "q": "Как считать составное тело?",
        "a": "Сложить моменты частей относительно одной и той же оси. Если ось не проходит через центр части, к её моменту добавляется масса на квадрат смещения — теорема Штейнера, которая здесь не считается."
      }
    ],
    "disclaimer": "Однородные идеальные формы и перечисленные оси. «Полая сфера» означает тонкую оболочку; толстая оболочка требует внутреннего радиуса. Произвольная ось, неоднородность и теорема Штейнера автоматически не рассчитываются."
  },
  "en": {
    "longDescription": "Moment of inertia depends on mass distribution and the chosen axis, not just mass. Bodies here are uniform: a thin rod uses a perpendicular axis through its centre or end; a disk and thin ring use a central axis normal to their plane; a solid sphere and thin spherical shell use a diameter. Size means length L for rods and radius r for the other forms.",
    "howToUse": [
      "Pick the body: the axis of rotation is set by that choice.",
      "For a disk, ring or sphere enter the radius; for a rod enter its length.",
      "The radius of gyration tells you how far from the axis all the mass would have to sit to give the same moment.",
      "For a compound body work out the parts separately and add their moments about the same axis."
    ],
    "howItWorks": "Rod about centre mL²/12, about end mL²/3, disk mr²/2, ring mr², solid sphere 2 mr²/5, hollow sphere 2 mr²/3.",
    "example": "A disk of 2 kg and 15 cm radius has a moment of inertia of 0.0225 kg·m².",
    "faq": [
      {
        "q": "Why is a ring twice a disk?",
        "a": "A ring has all of its mass at the radius, while a disk spreads it from centre to rim. The moment grows as the square of distance, so the inner layers of a disk contribute far less."
      },
      {
        "q": "Why two options for a rod?",
        "a": "Iend=Icentre+m(L/2)²=mL²/3, four times mL²/12. This compares two axes; how easily an applied force turns the body also depends on its lever arm, not only inertia."
      },
      {
        "q": "What does the radius of gyration show?",
        "a": "The distance from the axis at which the whole mass would have to be concentrated as a point to leave the moment unchanged. It replaces a complicated shape with one number."
      },
      {
        "q": "How do I handle a compound body?",
        "a": "Add the moments of the parts about the same axis. If the axis does not pass through a part's centre, add its mass times the offset squared — the parallel axis theorem, which is not computed here."
      }
    ],
    "disclaimer": "Uniform ideal forms and the listed axes. “Hollow sphere” means a thin shell; a thick shell needs an inner radius. Arbitrary axes, nonuniform density and the parallel-axis theorem are not automatically calculated."
  },
  "uk": {
    "longDescription": "Момент інерції залежить від розподілу маси й обраної осі, не лише від маси. Тіла тут однорідні: тонкий стрижень має перпендикулярну вісь через центр або кінець; диск і тонке кільце — центральну вісь перпендикулярно площині; куля та тонка сферична оболонка — вісь уздовж діаметра. Розмір є довжиною L для стрижня й радіусом r для решти форм.",
    "howToUse": [
      "Виберіть форму тіла та вісь обертання.",
      "Введіть масу.",
      "Введіть характерний розмір: довжину для стрижня або радіус для диска, кільця й кулі."
    ],
    "howItWorks": "Для кожної форми використано класичну формулу: стрижень через центр mL²/12, стрижень через кінець mL²/3, диск mr²/2, кільце mr², суцільна куля 2 mr²/5, порожниста сфера 2 mr²/3. Розмір усюди входить у квадраті.",
    "example": "Диск масою 2 кг радіусом 15 см має момент інерції 0,0225 кг·м². Кільце тієї самої маси й радіуса дало б удвічі більше — 0,045 кг·м².",
    "faq": [
      {
        "q": "Чому в кільця момент інерції більший, ніж у диска?",
        "a": "Бо вся його маса зосереджена на краю, максимально далеко від осі, а відстань входить у квадраті. У диска частина маси розташована близько до центра й майже не заважає обертанню."
      },
      {
        "q": "Чому стрижень через кінець важче розкрутити?",
        "a": "Iкінець=Iцентр+m(L/2)²=mL²/3, учетверо більше mL²/12. Це порівняння двох осей; дія прикладеної сили залежить також від плеча, не лише від інерції."
      },
      {
        "q": "Чим момент інерції схожий на масу?",
        "a": "Він грає ту саму роль в обертанні, що маса в поступальному русі: момент сили ділиться на нього й дає кутове прискорення, як сила ділиться на масу."
      },
      {
        "q": "Чи можна складати моменти інерції?",
        "a": "Так, якщо вісь спільна: момент складеного тіла дорівнює сумі моментів частин. Для зсунутої осі потрібна теорема Штейнера з поправкою на квадрат зсуву."
      }
    ],
    "disclaimer": "Однорідні ідеальні форми та зазначені осі. «Порожниста сфера» означає тонку оболонку; товста оболонка потребує внутрішнього радіуса. Довільна вісь, неоднорідність і теорема Штейнера автоматично не обчислюються."
  },
  "de": {
    "longDescription": "Das Trägheitsmoment hängt von Massenverteilung und Drehachse ab, nicht allein von der Masse. Die Körper sind homogen: Ein dünner Stab dreht um eine senkrechte Achse durch Mitte oder Ende; Scheibe und dünner Ring um die zentrale Achse normal zur Ebene; Vollkugel und dünne Kugelschale um einen Durchmesser. Größe bedeutet Stablänge L, bei den anderen Formen Radius r.",
    "howToUse": [
      "Wähle den Körper: die Drehachse ist damit festgelegt.",
      "Bei Scheibe, Ring oder Kugel trägst du den Radius ein; bei einem Stab seine Länge.",
      "Der Trägheitsradius sagt dir, wie weit von der Achse die ganze Masse liegen müsste, um dasselbe Moment zu ergeben.",
      "Bei einem zusammengesetzten Körper rechne die Teile einzeln und addiere ihre Momente um dieselbe Achse."
    ],
    "howItWorks": "Stab um die Mitte mL²/12, um das Ende mL²/3, Scheibe mr²/2, Ring mr², Vollkugel 2 mr²/5, Hohlkugel 2 mr²/3.",
    "example": "Eine Scheibe mit 2 kg und 15 cm Radius hat ein Trägheitsmoment von 0,0225 kg·m².",
    "faq": [
      {
        "q": "Warum ist ein Ring doppelt so groß wie eine Scheibe?",
        "a": "Ein Ring hat seine ganze Masse am Radius, während eine Scheibe sie von der Mitte bis zum Rand verteilt. Das Moment wächst mit dem Quadrat des Abstands, die inneren Lagen einer Scheibe steuern also weit weniger bei."
      },
      {
        "q": "Warum zwei Möglichkeiten für einen Stab?",
        "a": "IEnde=IMitte+m(L/2)²=mL²/3, also viermal mL²/12. Das vergleicht zwei Achsen; wie leicht eine Kraft den Körper dreht, hängt zusätzlich vom Hebelarm ab und nicht allein von der Trägheit."
      },
      {
        "q": "Was zeigt der Trägheitsradius?",
        "a": "Den Abstand von der Achse, in dem die ganze Masse als Punkt liegen müsste, damit das Moment unverändert bliebe. Er ersetzt eine verwickelte Form durch eine Zahl."
      },
      {
        "q": "Wie behandle ich einen zusammengesetzten Körper?",
        "a": "Addiere die Momente der Teile um dieselbe Achse. Läuft die Achse nicht durch die Mitte eines Teils, addiere seine Masse mal dem Versatz im Quadrat — der Satz von Steiner, der hier nicht berechnet wird."
      }
    ],
    "disclaimer": "Homogene ideale Formen und die genannten Achsen. „Hohlkugel“ meint eine dünne Schale; eine dicke Schale benötigt den Innenradius. Beliebige Achsen, inhomogene Dichte und der Satz von Steiner werden nicht automatisch berechnet."
  },
  "es": {
    "longDescription": "El momento de inercia depende de la distribución de masa y del eje, no solo de la masa. Los cuerpos son uniformes: una barra fina usa un eje perpendicular por el centro o extremo; disco y aro fino, un eje central normal al plano; esfera maciza y cáscara esférica fina, un diámetro. El tamaño es la longitud L de la barra y el radio r de las demás formas.",
    "howToUse": [
      "Elige el cuerpo: esa elección fija el eje de giro.",
      "Para un disco, un aro o una esfera introduce el radio; para una barra, su longitud.",
      "El radio de giro indica a qué distancia del eje debería estar toda la masa para dar el mismo momento.",
      "Para un cuerpo compuesto, calcula las partes por separado y suma sus momentos respecto al mismo eje."
    ],
    "howItWorks": "Barra respecto al centro mL²/12, respecto al extremo mL²/3, disco mr²/2, aro mr², esfera maciza 2 mr²/5, esfera hueca 2 mr²/3.",
    "example": "Un disco de 2 kg y 15 cm de radio tiene un momento de inercia de 0,0225 kg·m².",
    "faq": [
      {
        "q": "¿Por qué un aro es el doble que un disco?",
        "a": "Un aro tiene toda su masa en el radio, mientras que un disco la reparte desde el centro hasta el borde. El momento crece con el cuadrado de la distancia, así que las capas interiores de un disco aportan mucho menos."
      },
      {
        "q": "¿Por qué hay dos opciones para una barra?",
        "a": "Iextremo=Icentro+m(L/2)²=mL²/3, cuatro veces mL²/12. Se comparan dos ejes; la facilidad de giro por una fuerza depende también de su brazo, no solo de la inercia."
      },
      {
        "q": "¿Qué indica el radio de giro?",
        "a": "La distancia al eje a la que habría que concentrar toda la masa como un punto para que el momento no cambiara. Sustituye una forma complicada por un solo número."
      },
      {
        "q": "¿Cómo trato un cuerpo compuesto?",
        "a": "Suma los momentos de las partes respecto al mismo eje. Si el eje no pasa por el centro de una parte, añade su masa por el desplazamiento al cuadrado: es el teorema de los ejes paralelos, que aquí no se calcula."
      }
    ],
    "disclaimer": "Formas ideales uniformes y los ejes indicados. «Esfera hueca» significa una cáscara fina; una gruesa requiere el radio interior. No se calculan automáticamente ejes arbitrarios, densidad no uniforme ni el teorema de ejes paralelos."
  }
};
