import type { CalculatorCopy } from '../../lib/platform/types';

// Owned native explanations reviewed against this calculator’s model.
// Human editorial review is still pending; this file makes no publication claim.
export const coulombContractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Pick<CalculatorCopy, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq'>> = {
  "ru": {
    "longDescription": "Закон Кулона оценивает электростатическую силу между двумя точечными зарядами в вакууме. Заряды вводятся в нКл, расстояние — в см. Главное число — модуль силы; строка характера различает притяжение, отталкивание и отсутствие силы при нулевом заряде. Поле первого заряда и потенциальная энергия помогают отделить свойства источника от взаимодействия пары.",
    "howToUse": [
      "Введите два заряда в нКл. Положительные, отрицательные и нулевые заряды допустимы; разные знаки дают притяжение, одинаковые — отталкивание.",
      "Введите положительное расстояние в сантиметрах:10 означает 0,1 м. НКл и Кл отличаются в миллиард раз; ошибка единиц обоих зарядов изменяет силу в 10¹⁸ раз.",
      "Сравните модуль силы, поле первого заряда и потенциальную энергию. При q₂=0 сила равна нулю, но поле первого заряда может сохраняться."
],
    "howItWorks": "F=k|q₁q₂|/r²; E₁=k|q₁|/r²; U=kq₁q₂/r. НКл умножаются на 10⁻⁹, см — на 0,01. k≈8,9875517862·10⁹ Н·м²/Кл², округлено из CODATA 2022; нуль U выбран на бесконечности.",
    "example": "Заряды 1 и −1 нКл на расстоянии 10 см притягиваются с силой 8,988·10⁻⁷ Н.",
    "faq": [
      {
        "q": "Чем закон Кулона похож на закон всемирного тяготения?",
        "a": "Обе силы убывают как квадрат расстояния и пропорциональны произведению «зарядов» — электрического или массы. Различие принципиальное: масса всегда положительна, поэтому тяготение только притягивает, а электрический заряд бывает двух знаков."
      },
      {
        "q": "Какие параметры отличают поле от силы?",
        "a": "Поле первого заряда зависит от q₁ и r, а сила пары — ещё и от q₂. В строке поля дан модуль; направление определяется знаком q₁. Если q₂=0, сила нулевая, но поле первого заряда остаётся."
      },
      {
        "q": "Что такое напряжённость поля?",
        "a": "Сила, которая действовала бы на единичный положительный заряд в этой точке. Она не зависит от второго заряда и описывает само поле, а не пару тел — по ней удобно сравнивать источники между собой."
      },
      {
        "q": "Почему потенциальная энергия может быть отрицательной?",
        "a": "Она отсчитывается от бесконечности. Для притягивающихся зарядов, чтобы развести их бесконечно далеко, нужно совершить работу — значит, сейчас энергия ниже нуля."
      },
      {
        "q": "Что меняется для среды и протяжных тел?",
        "a": "Реализована модель точечных зарядов в вакууме. Для однородного линейного диэлектрика используют εᵣ, но такого поля здесь нет. У проводящих шаров соседний заряд перераспределяет поверхностный заряд, поэтому расстояние между центрами само по себе не делает точечную формулу точной."
      }
    ]
  },
  "en": {
    "longDescription": "Coulomb’s law estimates electrostatic force between two point charges in vacuum. Enter charges in nC and distance in cm. The main number is the force magnitude; a separate row distinguishes attraction, repulsion and zero force when a charge is zero. The first charge’s field and the pair’s potential energy separate source properties from interaction.",
    "howToUse": [
      "Enter two charges in nC. Positive, negative and zero charges are allowed; opposite signs attract and equal signs repel.",
      "Enter a positive distance in centimetres:10 means 0.1 m. nC and C differ by a billion; misreading both charge units changes the force by 10¹⁸.",
      "Read the force magnitude, the first charge’s field and potential energy separately. With q₂=0 the force is zero, while the first charge’s field can remain."
],
    "howItWorks": "F=k|q₁q₂|/r²; E₁=k|q₁|/r²; U=kq₁q₂/r. Multiply nC by 10⁻⁹ and cm by 0.01. k≈8.9875517862·10⁹ N·m²/C², rounded from CODATA 2022; U is zero at infinity.",
    "example": "Charges of 1 and −1 nC 10 cm apart attract with 8.988·10⁻⁷ N.",
    "faq": [
      {
        "q": "How is Coulomb's law like gravitation?",
        "a": "Both fall off as the square of the distance and scale with the product of the \"charges\" — electric or mass. The key difference: mass is always positive, so gravity only attracts, while electric charge comes in two signs."
      },
      {
        "q": "Which inputs distinguish field from force?",
        "a": "The first charge’s field depends on q₁ and r; the force also depends on q₂. The field row is a magnitude, with direction set by the sign of q₁. A zero q₂ means zero force without removing the first charge’s field."
      },
      {
        "q": "What is field strength?",
        "a": "The force that would act on a unit positive charge at that point. It does not depend on the second charge and describes the field itself rather than a pair of bodies, which makes sources comparable."
      },
      {
        "q": "Why can potential energy be negative?",
        "a": "It is measured from infinity. For attracting charges you must do work to pull them infinitely apart, so their present energy sits below zero."
      },
      {
        "q": "What changes for a medium or extended objects?",
        "a": "The implemented model is point charges in vacuum. A homogeneous linear dielectric uses relative permittivity εᵣ, but there is no such input here. Neighbouring charges redistribute charge on conducting spheres; centre-to-centre distance alone does not make the point formula exact."
      }
    ]
  },
  "uk": {
    "longDescription": "Закон Кулона оцінює електростатичну силу між двома точковими зарядами у вакуумі. Заряди вводяться в нКл, відстань — у см. Головне число є модулем сили; окремий рядок розрізняє притягання, відштовхування та відсутність сили за нульового заряду. Поле першого заряду та потенціальна енергія розділяють властивості джерела й взаємодію пари.",
    "howToUse": [
      "Введіть два заряди в нКл. Додатні, від’ємні й нульові заряди допустимі; різні знаки означають притягання, однакові — відштовхування.",
      "Введіть додатну відстань у сантиметрах:10 означає 0,1 м. НКл та Кл відрізняються в мільярд разів; помилка одиниць обох зарядів змінює силу в 10¹⁸ разів.",
      "Окремо прочитайте модуль сили, поле першого заряду та потенціальну енергію. За q₂=0 сила нульова, але поле першого заряду може залишатися."
],
    "howItWorks": "F=k|q₁q₂|/r²; E₁=k|q₁|/r²; U=kq₁q₂/r. НКл множаться на 10⁻⁹, см — на 0,01. k≈8,9875517862·10⁹ Н·м²/Кл², округлено за CODATA 2022; нуль U обрано на нескінченності.",
    "example": "Заряди 1 і −1 нКл на відстані 10 см притягуються з силою 8,988·10⁻⁷ Н. Ті самі заряди на відстані 1 см взаємодіяли б у сто разів сильніше.",
    "faq": [
      {
        "q": "Що означає знак зарядів?",
        "a": "За ненульових зарядів різні знаки означають притягання, однакові — відштовхування. Головний результат показує додатний модуль сили, а не її знак. За нульового заряду сила дорівнює нулю."
      },
      {
        "q": "Від чого залежить поле першого заряду?",
        "a": "Від q₁ та відстані r; не від q₂. Рядок поля показує його модуль, а знак q₁ визначає напрямок електричного поля."
      },
      {
        "q": "Чому потенціальна енергія від’ємна?",
        "a": "Нуль енергії обрано на нескінченності. Для різнойменних зарядів U=kq₁q₂/r від’ємна; для їх розділення треба виконати роботу."
      },
      {
        "q": "Що змінюється для середовища та протяжних тіл?",
        "a": "Реалізовано модель точкових зарядів у вакуумі. Для однорідного лінійного діелектрика використовують εᵣ, але такого поля тут немає. На провідних кулях сусідній заряд перерозподіляє поверхневий заряд, тому сама відстань між центрами не робить точкову формулу точною."
      }
    ]
  },
  "de": {
    "longDescription": "Das Coulomb-Gesetz beschreibt die elektrostatische Kraft zwischen zwei Punktladungen im Vakuum. Ladungen werden in nC und der Abstand in cm eingegeben. Die Hauptzahl ist der Kraftbetrag; eine eigene Zeile unterscheidet Anziehung, Abstoßung und Nullkraft bei einer ungeladenen Quelle. Feldstärke der ersten Ladung und potentielle Energie trennen Quelleigenschaften von der Wechselwirkung.",
    "howToUse": [
      "Gib zwei Ladungen in nC ein. Positive, negative und ungeladene Werte sind zulässig; unterschiedliche Vorzeichen ziehen sich an, gleiche stoßen sich ab.",
      "Gib einen positiven Abstand in Zentimetern ein:10 bedeutet 0,1 m. nC und C unterscheiden sich um eine Milliarde; eine falsche Einheit beider Ladungen ändert die Kraft um 10¹⁸.",
      "Lies Kraftbetrag, Feldstärke der ersten Ladung und potentielle Energie getrennt. Bei q₂=0 ist die Kraft null, während das Feld der ersten Ladung bestehen kann."
],
    "howItWorks": "F=k|q₁q₂|/r²; E₁=k|q₁|/r²; U=kq₁q₂/r. nC werden mit 10⁻⁹, cm mit 0,01 multipliziert. k≈8,9875517862·10⁹ N·m²/C², aus CODATA 2022 gerundet; U ist im Unendlichen null.",
    "example": "Ladungen von 1 und −1 nC im Abstand von 10 cm ziehen sich mit 8,988·10⁻⁷ N an.",
    "faq": [
      {
        "q": "Wie ähnelt das coulombsche Gesetz der Gravitation?",
        "a": "Beide fallen mit dem Quadrat des Abstands und wachsen mit dem Produkt der „Ladungen“ — elektrisch oder als Masse. Der wesentliche Unterschied: Masse ist immer positiv, die Schwerkraft zieht also nur an, während elektrische Ladung zwei Vorzeichen hat."
      },
      {
        "q": "Welche Eingaben unterscheiden Feld und Kraft?",
        "a": "Das Feld der ersten Ladung hängt von q₁ und r ab, die Kraft zusätzlich von q₂. Angezeigt wird der Feldbetrag; q₁ bestimmt die Richtung. Bei q₂=0 ist die Kraft null, das Feld der ersten Ladung bleibt bestehen."
      },
      {
        "q": "Was ist die Feldstärke?",
        "a": "Die Kraft, die an dieser Stelle auf eine positive Einheitsladung wirken würde. Sie hängt nicht von der zweiten Ladung ab und beschreibt das Feld selbst statt eines Körperpaares, was Quellen vergleichbar macht."
      },
      {
        "q": "Warum kann die potentielle Energie negativ sein?",
        "a": "Sie wird vom Unendlichen aus gemessen. Bei sich anziehenden Ladungen musst du Arbeit verrichten, um sie unendlich weit auseinanderzuziehen, ihre jetzige Energie liegt also unter null."
      },
      {
        "q": "Was ändert sich bei einem Medium oder ausgedehnten Körpern?",
        "a": "Implementiert sind Punktladungen im Vakuum. Ein homogenes lineares Dielektrikum erfordert εᵣ, dafür gibt es hier kein Eingabefeld. Benachbarte Ladungen verändern die Oberflächenverteilung auf leitenden Kugeln. Der Abstand der Mittelpunkte macht die Punktformel daher nicht automatisch exakt."
      }
    ]
  },
  "es": {
    "longDescription": "La ley de Coulomb estima la fuerza electrostática entre dos cargas puntuales en el vacío. Introduce cargas en nC y distancia en cm. El número principal es el módulo de la fuerza; otra fila distingue atracción, repulsión y fuerza nula si una carga es cero. El campo de la primera carga y la energía potencial separan propiedades de la fuente e interacción del par.",
    "howToUse": [
      "Introduce dos cargas en nC. Se admiten cargas positivas, negativas y nulas; los signos opuestos atraen y los iguales repelen.",
      "Introduce una distancia positiva en centímetros:10 significa 0,1 m. nC y C difieren por mil millones; confundir las unidades de ambas cargas cambia la fuerza por 10¹⁸.",
      "Lee por separado el módulo de la fuerza, el campo de la primera carga y la energía potencial. Con q₂=0 la fuerza es nula, aunque el campo de la primera carga puede mantenerse."
],
    "howItWorks": "F=k|q₁q₂|/r²; E₁=k|q₁|/r²; U=kq₁q₂/r. Multiplica nC por 10⁻⁹ y cm por 0,01. k≈8,9875517862·10⁹ N·m²/C², redondeado a partir de CODATA 2022; U se fija en cero en el infinito.",
    "example": "Cargas de 1 y −1 nC separadas 10 cm se atraen con 8,988·10⁻⁷ N.",
    "faq": [
      {
        "q": "¿En qué se parece la ley de Coulomb a la gravitación?",
        "a": "Ambas decaen con el cuadrado de la distancia y escalan con el producto de las «cargas», eléctricas o másicas. La diferencia clave: la masa siempre es positiva, así que la gravedad solo atrae, mientras que la carga eléctrica tiene dos signos."
      },
      {
        "q": "¿Qué entradas distinguen campo y fuerza?",
        "a": "El campo de la primera carga depende de q₁ y r; la fuerza también de q₂. Se muestra el módulo del campo, cuya dirección depende del signo de q₁. Con q₂=0 no hay fuerza, pero el campo de la primera carga permanece."
      },
      {
        "q": "¿Qué es la intensidad del campo?",
        "a": "La fuerza que actuaría sobre una carga positiva unidad en ese punto. No depende de la segunda carga y describe el campo en sí más que a una pareja de cuerpos, lo que hace comparables las fuentes."
      },
      {
        "q": "¿Por qué la energía potencial puede ser negativa?",
        "a": "Se mide desde el infinito. Con cargas que se atraen hay que hacer trabajo para separarlas infinitamente, así que su energía actual queda por debajo de cero."
      },
      {
        "q": "¿Qué cambia en un medio o con cuerpos extensos?",
        "a": "El modelo implementado usa cargas puntuales en el vacío. Un dieléctrico lineal homogéneo requiere εᵣ, pero no existe ese campo. Las cargas vecinas redistribuyen la carga superficial de las esferas conductoras; la distancia entre centros no convierte por sí sola la fórmula puntual en exacta."
      }
    ]
  }
};
