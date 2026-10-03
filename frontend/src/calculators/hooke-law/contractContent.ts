// Individually reviewed against all five actual188 native bodies; human editorial review pending.
export const contract = {
  "ru": {
    "longDescription": "Решите линейную связь между деформацией, удерживающей силой и жёсткостью пружины. Здесь F=kx — внешняя сила, удерживающая пружину в заданном положении; возвращающая сила самой пружины равна −kx. При k>0 удвоение деформации удваивает силу и увеличивает запасённую энергию вчетверо. Линейный диапазон нужно знать из свойств элемента: он не обязательно совпадает со всем упругим диапазоном.",
    "howToUse": [
      "Выберите, какую из трёх величин ищете.",
      "Удлинение задавайте в метрах: 5 см — это 0,05.",
      "Введите два видимых известных параметра; искомый появится в результате. Положительное x означает растяжение, отрицательное — сжатие; F здесь направлена так же, как x."
    ],
    "howItWorks": "Для удерживающей силы F=kx, для деформации x=F/k, для жёсткости k=F/x. Возвращающая сила пружины имеет противоположный знак: −kx. Энергия U=kx²/2=Fx/2 неотрицательна. При поиске k нужны ненулевая деформация и сила того же знака; по паре F=x=0 жёсткость не определяется.",
    "example": "Пружина k=200 Н/м при растяжении x=0,05 м требует удерживающей силы +10 Н. Сила пружины равна −10 Н, запасённая энергия 0,25 Дж.",
    "faq": [
      {
        "q": "Чем это отличается от второго закона Ньютона?",
        "a": "Закон Гука связывает силу элемента с его деформацией, а второй закон Ньютона — сумму сил с ускорением тела. Их можно использовать вместе: сила пружины −kx входит в сумму сил, например m·a=−kx для идеального груза без других сил."
      },
      {
        "q": "Почему энергия растёт быстрее силы?",
        "a": "Потому что сила линейна по деформации, а энергия квадратична. Вдвое большее сжатие даёт вдвое большую силу и вчетверо большую энергию."
      },
      {
        "q": "До каких деформаций закон верен?",
        "a": "Только в области пропорциональности F и x для данного элемента. Упругая деформация может уже быть нелинейной, а пластическая необратима. По одному значению k калькулятор не определяет предельную деформацию."
      },
      {
        "q": "Что означает отрицательный знак?",
        "a": "В этой модели одинаковый k используется для двух знаков x. Это допущение, а не свойство любой реальной пружины: предварительный натяг и контакт витков меняют зависимость. Запасённая энергия остаётся неотрицательной при обоих знаках."
      }
    ],
    "disclaimer": "Идеальная линейная пружина без предварительного натяга в указанном диапазоне. Контакт витков, нелинейность, пластическая деформация и нагрузочная пригодность детали не проверяются."
  },
  "en": {
    "longDescription": "Solve the linear relation between deformation, holding force and spring rate. Here F=kx is the external force holding the spring in position; the spring’s restoring force is −kx. With k>0, doubling deformation doubles the force and quadruples stored energy. The element’s linear range must be known separately; it need not cover the whole elastic range.",
    "howToUse": [
      "Choose which of the three quantities you are after.",
      "Give the extension in metres: 5 cm is 0.05.",
      "Enter the two visible known quantities; the unknown appears in the result. Positive x means extension and negative x compression; F here points in the same direction as x."
    ],
    "howItWorks": "For holding force F=kx, deformation x=F/k, and rate k=F/x. The spring’s restoring force has the opposite sign, −kx. Stored energy U=kx²/2=Fx/2 is nonnegative. Finding k requires nonzero deformation and a force of the same sign; F=x=0 does not determine a spring rate.",
    "example": "For k=200 N/m and extension x=0.05 m, the holding force is +10 N. The spring force is −10 N and stored energy is 0.25 J.",
    "faq": [
      {
        "q": "How is this different from Newton's second law?",
        "a": "Hooke’s law relates an element’s force to its deformation; Newton’s second law relates net force to acceleration. They can be used together: the spring force −kx enters the force balance, for example m·a=−kx for an ideal attached mass with no other forces."
      },
      {
        "q": "Why does the energy grow faster than the force?",
        "a": "Because force is linear in deformation while energy is quadratic. Twice the compression gives twice the force and four times the energy."
      },
      {
        "q": "How far does the law hold?",
        "a": "Only within the element’s proportional F–x range. An elastic deformation may already be nonlinear, while plastic deformation is irreversible. A value of k alone does not tell this calculator the deformation limit."
      },
      {
        "q": "What does a negative sign mean?",
        "a": "This model uses the same k for both signs of x. That is an assumption, not a property of every real spring: preload and coil contact change the relation. Stored energy remains nonnegative for either sign."
      }
    ],
    "disclaimer": "Ideal linear spring with no preload in the stated range. Coil contact, nonlinearity, plastic deformation and component load suitability are not checked."
  },
  "uk": {
    "longDescription": "Розв’яжіть лінійний зв’язок деформації, утримувальної сили та жорсткості пружини. Тут F=kx — зовнішня сила, що утримує пружину в заданому положенні; повертальна сила самої пружини дорівнює −kx. За k>0 подвоєння деформації подвоює силу й учетверо збільшує енергію. Лінійний діапазон елемента потрібно знати окремо: він не обов’язково охоплює весь пружний діапазон.",
    "howToUse": [
      "Введіть жорсткість пружини в ньютонах на метр.",
      "Введіть деформацію — розтяг або стиск.",
      "Введіть два видимі відомі параметри; шуканий з’явиться в результаті. Додатне x означає розтяг, від’ємне — стиск; F тут спрямована так само, як x."
    ],
    "howItWorks": "Для утримувальної сили F=kx, для деформації x=F/k, для жорсткості k=F/x. Повертальна сила пружини має протилежний знак: −kx. Енергія U=kx²/2=Fx/2 невід’ємна. Для пошуку k потрібні ненульова деформація й сила того самого знака; пара F=x=0 не визначає жорсткість.",
    "example": "Пружина k=200 Н/м за розтягу x=0,05 м потребує утримувальної сили +10 Н. Сила пружини −10 Н, енергія 0,25 Дж; за x=0,10 м енергія становила б 1 Дж.",
    "faq": [
      {
        "q": "До якої межі працює закон Гука?",
        "a": "Лише в області пропорційності F та x для конкретного елемента. Пружна деформація вже може бути нелінійною, а пластична є незворотною. Саме значення k не визначає допустиму деформацію."
      },
      {
        "q": "Що означає жорсткість 200 Н/м?",
        "a": "Що для розтягу на один метр потрібна сила 200 Н. Жорсткість залежить від матеріалу, товщини дроту, діаметра витка й їхньої кількості."
      },
      {
        "q": "Чому енергія росте квадратично?",
        "a": "Бо сила зростає лінійно зі стиском, і робота дорівнює площі під графіком — трикутнику з катетами x і k·x. Звідси й половина добутку."
      },
      {
        "q": "Чи однакова жорсткість на розтяг і на стиск?",
        "a": "Ця модель використовує однакове k для обох знаків x. Це припущення, не властивість будь-якої реальної пружини: натяг і контакт витків змінюють залежність. Запасена енергія невід’ємна за обох знаків."
      }
    ],
    "disclaimer": "Ідеальна лінійна пружина без попереднього натягу в заданому діапазоні. Контакт витків, нелінійність, пластична деформація та допустимість навантаження деталі не перевіряються."
  },
  "de": {
    "longDescription": "Löse den linearen Zusammenhang zwischen Auslenkung, Haltekraft und Federkonstante. F=kx ist hier die äußere Kraft, welche die Feder in ihrer Lage hält; die Rückstellkraft der Feder ist −kx. Bei k>0 verdoppelt eine doppelte Auslenkung die Kraft und vervierfacht die gespeicherte Energie. Der lineare Bereich des Bauteils muss bekannt sein; er muss nicht den gesamten elastischen Bereich umfassen.",
    "howToUse": [
      "Wähle, welche der drei Größen du suchst.",
      "Gib die Auslenkung in Metern an: 5 cm sind 0,05.",
      "Trage die zwei sichtbaren bekannten Größen ein; die gesuchte erscheint im Ergebnis. Positives x steht für Dehnung, negatives für Stauchung; F zeigt hier in dieselbe Richtung wie x."
    ],
    "howItWorks": "Für die Haltekraft gilt F=kx, für die Auslenkung x=F/k und für die Federkonstante k=F/x. Die Rückstellkraft hat das entgegengesetzte Vorzeichen −kx. Die Energie U=kx²/2=Fx/2 ist nicht negativ. Zur Bestimmung von k sind eine Auslenkung ungleich null und eine gleichgerichtete Haltekraft nötig; F=x=0 bestimmt keine Federkonstante.",
    "example": "Für k=200 N/m und die Dehnung x=0,05 m beträgt die Haltekraft +10 N. Die Federkraft ist −10 N und die gespeicherte Energie 0,25 J.",
    "faq": [
      {
        "q": "Wie unterscheidet sich das vom zweiten newtonschen Gesetz?",
        "a": "Das hookesche Gesetz verknüpft die Bauteilkraft mit der Verformung, Newtons zweites Gesetz die Gesamtkraft mit der Beschleunigung. Beide können zusammen verwendet werden: −kx geht in die Kräftebilanz ein, etwa m·a=−kx für eine ideale angehängte Masse ohne weitere Kräfte."
      },
      {
        "q": "Warum wächst die Energie schneller als die Kraft?",
        "a": "Weil die Kraft linear in der Verformung ist und die Energie quadratisch. Doppelte Stauchung gibt doppelte Kraft und vierfache Energie."
      },
      {
        "q": "Wie weit gilt das Gesetz?",
        "a": "Nur im proportionalen F–x-Bereich des Bauteils. Eine elastische Verformung kann bereits nichtlinear sein; eine plastische ist bleibend. Aus k allein kann der Rechner keine Auslenkungsgrenze bestimmen."
      },
      {
        "q": "Was bedeutet ein negatives Vorzeichen?",
        "a": "Dieses Modell verwendet dasselbe k für beide Vorzeichen von x. Das ist eine Annahme und keine Eigenschaft jeder realen Feder: Vorspannung und Windungskontakt verändern den Zusammenhang. Die Energie bleibt bei beiden Vorzeichen nicht negativ."
      }
    ],
    "disclaimer": "Ideale lineare Feder ohne Vorspannung im angegebenen Bereich. Windungskontakt, Nichtlinearität, plastische Verformung und Belastbarkeit des Bauteils werden nicht geprüft."
  },
  "es": {
    "longDescription": "Resuelve la relación lineal entre deformación, fuerza de sujeción y constante elástica. Aquí F=kx es la fuerza externa que mantiene el muelle en su posición; la fuerza restauradora del propio muelle es −kx. Con k>0, duplicar la deformación duplica la fuerza y cuadruplica la energía. Hay que conocer el intervalo lineal del elemento: puede ser menor que todo su intervalo elástico.",
    "howToUse": [
      "Elige cuál de las tres magnitudes buscas.",
      "Da el alargamiento en metros: 5 cm son 0,05.",
      "Introduce las dos magnitudes conocidas visibles; la incógnita aparece en el resultado. x positivo indica alargamiento y negativo compresión; F apunta aquí en el mismo sentido que x."
    ],
    "howItWorks": "La fuerza de sujeción es F=kx, la deformación x=F/k y la constante k=F/x. La fuerza restauradora tiene signo opuesto: −kx. La energía U=kx²/2=Fx/2 no es negativa. Para hallar k se requiere deformación no nula y fuerza del mismo signo; F=x=0 no determina la constante.",
    "example": "Para k=200 N/m y alargamiento x=0,05 m, la fuerza de sujeción es +10 N. La fuerza del muelle es −10 N y la energía almacenada 0,25 J.",
    "faq": [
      {
        "q": "¿En qué se diferencia de la segunda ley de Newton?",
        "a": "La ley de Hooke relaciona la fuerza del elemento con la deformación; la segunda ley de Newton relaciona la fuerza neta con la aceleración. Se pueden combinar: −kx entra en el balance de fuerzas, por ejemplo m·a=−kx para una masa ideal sin otras fuerzas."
      },
      {
        "q": "¿Por qué la energía crece más deprisa que la fuerza?",
        "a": "Porque la fuerza es lineal en la deformación mientras que la energía es cuadrática. El doble de compresión da el doble de fuerza y cuatro veces la energía."
      },
      {
        "q": "¿Hasta dónde se cumple la ley?",
        "a": "Solo dentro del intervalo proporcional F–x del elemento. Una deformación elástica puede ser no lineal; una plástica es irreversible. El valor k por sí solo no permite determinar el límite de deformación."
      },
      {
        "q": "¿Qué significa un signo negativo?",
        "a": "El modelo usa el mismo k para ambos signos de x. Es una hipótesis, no una propiedad de cualquier muelle real: la precarga y el contacto de espiras cambian la relación. La energía sigue siendo no negativa con ambos signos."
      }
    ],
    "disclaimer": "Muelle lineal ideal sin precarga en el intervalo indicado. No se comprueban contacto de espiras, no linealidad, deformación plástica ni capacidad de carga de la pieza."
  }
};
