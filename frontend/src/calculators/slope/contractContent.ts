import type { CalculatorCopy } from '../../lib/platform/types';

type Body = Pick<CalculatorCopy, 'shortDescription' | 'seoDescription' | 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;

// Subject-specific retained and amended copy; source and calculation limits are explicit.
export const contractContent: Record<'ru'|'en'|'uk'|'de'|'es', Body> = {
  "ru": {
    "longDescription": "Уклон — отношение вертикального перепада к горизонтальному, выраженное в процентах. Это не градусы: 100 % соответствуют 45°, а 15 % — около 8,53°. Калькулятор также показывает подписанный угол в интервале от −90° до 90° и геометрическую длину участка. Оба перепада задаются в метрах и могут иметь знак; разворот обоих знаков оставляет уклон той же прямой прежним. Длина всегда неотрицательна.",
    "howToUse": [
      "Введите вертикальный перепад в метрах: положительный вверх, отрицательный вниз.",
      "Введите горизонтальный перепад в метрах, не длину по скату. Он не должен быть нулём.",
      "Отрицательное заложение описывает смену горизонтального направления; знак уклона определяется отношением двух перепадов.",
      "Используйте гипотенузу как геометрическую длину участка. Проверка норм, припусков и пригодности конструкции требует других данных."
    ],
    "howItWorks": "Уклон = подъём ÷ заложение × 100 процентов. Угол — арктангенс этого отношения, длина — гипотенуза подъёма и заложения.",
    "example": "Подъём 1,2 м на 8 м — это уклон 15 %, угол 8,531° и длина наклона 8,089 м.",
    "faq": [
      {
        "q": "Как связаны проценты и градусы уклона?",
        "a": "p = 100tan(α), α = arctan(p/100) в градусах. Например, 5 % ≈ 2,862°, 10 % ≈ 5,711°, 100 % = 45°. При малых углах линейно приближается угол в радианах, а не равенство чисел процентов и градусов."
      },
      {
        "q": "Какой уклон допустим для пандуса?",
        "a": "Эта страница рассчитывает геометрию, но не проверяет допустимость пандуса. Требования зависят от страны, типа объекта, высоты подъёма, площадок и других параметров. Отношение 1:12 математически равно 8,333… %, а не ровно 8 %. Применимое требование проверяют отдельно."
      },
      {
        "q": "Заложение мерить по горизонтали или по земле?",
        "a": "По горизонтали. Измерение вдоль ската даёт длину наклона, и подстановка её вместо заложения занижает уклон."
      },
      {
        "q": "Может ли подъём быть отрицательным?",
        "a": "Да, и это спуск. Процент и угол выходят отрицательными — честное описание движения вниз."
      }
    ],
    "shortDescription": "Уклон в процентах и градусах по подъёму и заложению.",
    "seoDescription": "Рассчитайте уклон в процентах и градусах по подъёму и заложению вместе с отношением и настоящей длиной наклонного участка.",
    "disclaimer": "Один прямой участок в вертикальной плоскости, горизонтальный перепад ненулевой. Угол arctan(подъём/заложение) описывает наклон прямой, не азимут движения. Формула не проверяет строительные нормы или доступность; единица ввода фиксирована в метрах."
  },
  "en": {
    "longDescription": "Gradient is vertical change divided by horizontal change, expressed as a percentage. It is not degrees: 100% corresponds to 45°, and 15% to about 8.53°. This calculator also gives a signed angle between −90° and 90° and the geometric segment length. Both changes are in metres and may be signed; reversing both signs leaves the same line gradient. Length is non-negative.",
    "howToUse": [
      "Enter vertical change in metres: positive upward, negative downward.",
      "Enter horizontal change in metres, not distance along the incline. It must be nonzero.",
      "A negative run reverses horizontal direction; the ratio of both changes determines the slope sign.",
      "Use the hypotenuse as geometric segment length. Standards, allowances and structural suitability require other data."
    ],
    "howItWorks": "Slope = rise ÷ run × 100 per cent. The angle is the arctangent of that ratio, and the length is the hypotenuse of rise and run.",
    "example": "A rise of 1.2 m over 8 m is a 15% slope, 8.531 degrees, with a slope length of 8.089 m.",
    "faq": [
      {
        "q": "How do per cent and degrees relate?",
        "a": "p = 100tan(α), with α = arctan(p/100) converted to degrees. For example, 5% ≈ 2.862°, 10% ≈ 5.711° and 100% = 45°. Small-angle linearization applies to radians, not equality of percentage and degree numbers."
      },
      {
        "q": "What slope is acceptable for a wheelchair ramp?",
        "a": "This page calculates geometry and does not establish whether a ramp is permissible. Requirements depend on jurisdiction, building use, rise, landings and other parameters. The ratio 1:12 is mathematically 8.333…%, not exactly 8%. Check the applicable requirement separately."
      },
      {
        "q": "Should the run be measured horizontally or along the ground?",
        "a": "Horizontally. Measuring along the incline gives the slope length instead, and using it as the run understates the gradient."
      },
      {
        "q": "Can the rise be negative?",
        "a": "Yes, and it means a descent. The percentage and the angle both come out negative, which is the honest description of going down."
      }
    ],
    "shortDescription": "Slope in per cent and degrees from rise and run.",
    "seoDescription": "Calculate slope in per cent and degrees from rise and run, together with the ratio and the true length of the inclined section.",
    "disclaimer": "One straight segment in a vertical plane with nonzero horizontal change. The angle arctan(rise/run) describes line inclination, not a travel bearing. The formula does not assess building standards or accessibility; inputs are fixed in metres."
  },
  "uk": {
    "longDescription": "Ухил — відношення вертикального перепаду до горизонтального, виражене у відсотках. Це не градуси: 100 % відповідають 45°, а 15 % — приблизно 8,53°. Калькулятор також показує знаковий кут між −90° і 90° та геометричну довжину ділянки. Обидва перепади вводяться в метрах і можуть мати знак; зміна обох знаків зберігає ухил тієї самої прямої. Довжина невід’ємна.",
    "howToUse": [
      "Уведіть вертикальний перепад у метрах: додатний угору, від’ємний униз.",
      "Уведіть горизонтальний перепад у метрах, а не довжину схилу. Він має бути ненульовим.",
      "Від’ємне закладення змінює горизонтальний напрямок; знак ухилу визначає відношення двох перепадів.",
      "Використовуйте гіпотенузу як геометричну довжину ділянки. Норми, припуски й придатність конструкції потребують інших даних."
    ],
    "howItWorks": "Ухил дорівнює підйом ÷ закладення × 100 відсотків. Кут — це арктангенс того самого відношення, переведений у градуси. Довжина схилу є гіпотенузою підйому й закладення, тому вона більша за закладення й саме її купують погонними метрами.",
    "example": "Підйом 1,2 м на 8 м — це ухил 15 %, кут 8,531° і довжина схилу 8,089 м. Різниця між закладенням і довжиною схилу тут майже 9 см — саме стільки не вистачило б поручня.",
    "faq": [
      {
        "q": "Чому 100 % — це лише 45 градусів?",
        "a": "Відсоток ухилу — це відношення підйому до закладення, а не частка від прямого кута. Коли вони рівні, відношення дорівнює одиниці, тобто 100 %, а кут — 45°. Ухили понад 100 % цілком можливі."
      },
      {
        "q": "Що вводити: закладення чи довжину схилу?",
        "a": "Закладення — горизонтальну проєкцію. Довжина схилу довша за неї й виводиться окремим результатом; підстановка її замість закладення занизить ухил."
      },
      {
        "q": "Навіщо потрібна довжина схилу?",
        "a": "Її купують погонними метрами: поручень, обшивка, кабель уздовж скату. Підстановка закладення замість неї залишить роботу недоробленою."
      },
      {
        "q": "Як перевести відсотки в градуси?",
        "a": "Через арктангенс: кут = arctg(відсотки/100). Лінійного співвідношення між ними немає, тому ділити відсотки на постійний множник не можна."
      }
    ],
    "shortDescription": "Ухил у відсотках і градусах за підйомом і закладенням.",
    "seoDescription": "Розрахунок ухилу у відсотках і градусах за підйомом і закладенням разом із співвідношенням і довжиною похилої ділянки.",
    "disclaimer": "Одна пряма ділянка у вертикальній площині з ненульовим горизонтальним перепадом. Кут arctan(підйом/закладення) описує нахил прямої, а не азимут руху. Формула не перевіряє будівельні норми чи доступність; одиниця вводу фіксована в метрах."
  },
  "de": {
    "longDescription": "Steigung ist die vertikale Änderung geteilt durch die horizontale Änderung in Prozent. Das sind keine Grad: 100 % entsprechen 45°, 15 % etwa 8,53°. Zusätzlich liefert der Rechner einen vorzeichenbehafteten Winkel zwischen −90° und 90° sowie die geometrische Streckenlänge. Beide Änderungen stehen in Metern und dürfen ein Vorzeichen haben; beide Vorzeichen umzukehren lässt die Steigung derselben Geraden unverändert. Die Länge ist nicht negativ.",
    "howToUse": [
      "Gib die vertikale Änderung in Metern ein: positiv aufwärts, negativ abwärts.",
      "Gib die horizontale Änderung in Metern ein, nicht die schräge Strecke. Sie darf nicht null sein.",
      "Eine negative waagerechte Änderung kehrt die horizontale Richtung um; das Verhältnis beider Änderungen bestimmt das Vorzeichen.",
      "Verwende die Hypotenuse als geometrische Streckenlänge. Vorschriften, Zugaben und bauliche Eignung benötigen andere Daten."
    ],
    "howItWorks": "Steigung = Höhenunterschied ÷ waagerechte Strecke × 100 Prozent. Der Winkel ist der Arkustangens dieses Verhältnisses, und die Länge ist die Hypotenuse aus Höhenunterschied und waagerechter Strecke.",
    "example": "Ein Höhenunterschied von 1,2 m auf 8 m ergibt 15 % Steigung, 8,531 Grad und eine Neigungslänge von 8,089 m.",
    "faq": [
      {
        "q": "Wie hängen Prozent und Grad zusammen?",
        "a": "p = 100tan(α), α = arctan(p/100), umgerechnet in Grad. Zum Beispiel: 5 % ≈ 2,862°, 10 % ≈ 5,711°, 100 % = 45°. Die lineare Kleinwinkelnäherung gilt im Bogenmaß, nicht als Zahlengleichheit von Prozent und Grad."
      },
      {
        "q": "Welche Steigung ist für eine Rollstuhlrampe zulässig?",
        "a": "Diese Seite berechnet Geometrie und beurteilt nicht die Zulässigkeit einer Rampe. Anforderungen hängen von Rechtsraum, Gebäudenutzung, Höhe, Podesten und weiteren Größen ab. Das Verhältnis 1:12 ist rechnerisch 8,333… % und nicht genau 8 %. Die anwendbare Vorgabe ist separat zu prüfen."
      },
      {
        "q": "Wird die Strecke waagerecht oder am Gelände entlang gemessen?",
        "a": "Waagerecht. Entlang der Neigung gemessen ergibt sich stattdessen die Neigungslänge, und sie als waagerechte Strecke zu nehmen setzt die Steigung zu niedrig an."
      },
      {
        "q": "Kann der Höhenunterschied negativ sein?",
        "a": "Ja, und dann bedeutet er ein Gefälle. Prozentwert und Winkel kommen beide negativ heraus, und das beschreibt das Abwärtsgehen ehrlich."
      }
    ],
    "shortDescription": "Steigung in Prozent und Grad aus Höhenunterschied und waagerechter Strecke.",
    "seoDescription": "Berechne die Steigung in Prozent und Grad aus Höhenunterschied und waagerechter Strecke, samt Verhältnis und wahrer Länge des geneigten Abschnitts.",
    "disclaimer": "Eine gerade Strecke in einer vertikalen Ebene mit horizontaler Änderung ungleich null. arctan(Höhenänderung/Horizontaländerung) beschreibt die Neigung der Geraden, keinen Bewegungsazimut. Die Formel prüft weder Bauvorschriften noch Barrierefreiheit; Eingaben stehen fest in Metern."
  },
  "es": {
    "longDescription": "La pendiente es el cambio vertical dividido por el horizontal, expresado en porcentaje. No son grados: 100 % corresponde a 45° y 15 % a unos 8,53°. También se muestra un ángulo con signo entre −90° y 90° y la longitud geométrica del tramo. Ambos cambios están en metros y pueden tener signo; invertir ambos signos conserva la pendiente de la misma recta. La longitud es no negativa.",
    "howToUse": [
      "Introduce el cambio vertical en metros: positivo hacia arriba y negativo hacia abajo.",
      "Introduce el cambio horizontal en metros, no la distancia por la inclinación. Debe ser distinto de cero.",
      "Un cambio horizontal negativo invierte esa dirección; la razón de los dos cambios determina el signo de pendiente.",
      "Usa la hipotenusa como longitud geométrica. Las normas, márgenes y aptitud constructiva requieren otros datos."
    ],
    "howItWorks": "Pendiente = desnivel ÷ distancia horizontal × 100 por ciento. El ángulo es el arcotangente de esa relación, y la longitud es la hipotenusa del desnivel y la distancia.",
    "example": "Un desnivel de 1,2 m en 8 m es una pendiente del 15 %, 8,531 grados, con una longitud inclinada de 8,089 m.",
    "faq": [
      {
        "q": "¿Qué relación hay entre el porcentaje y los grados?",
        "a": "p = 100tan(α), con α = arctan(p/100) convertido a grados. Por ejemplo, 5 % ≈ 2,862°, 10 % ≈ 5,711° y 100 % = 45°. La aproximación lineal de ángulo pequeño usa radianes, no igualdad entre números de porcentaje y grados."
      },
      {
        "q": "¿Qué pendiente es aceptable para una rampa de silla de ruedas?",
        "a": "Esta página calcula geometría y no determina si una rampa es admisible. Los requisitos dependen del lugar, uso del edificio, desnivel, descansillos y otros parámetros. La razón 1:12 es matemáticamente 8,333… %, no exactamente 8 %. Comprueba aparte el requisito aplicable."
      },
      {
        "q": "¿La distancia se mide en horizontal o por el suelo?",
        "a": "En horizontal. Medir por la pendiente da la longitud inclinada, y usarla como distancia horizontal subestima la pendiente."
      },
      {
        "q": "¿El desnivel puede ser negativo?",
        "a": "Sí, y significa un descenso. El porcentaje y el ángulo salen negativos, que es la descripción honesta de bajar."
      }
    ],
    "shortDescription": "Pendiente en porcentaje y en grados a partir del desnivel y la distancia horizontal.",
    "seoDescription": "Calcula la pendiente en porcentaje y en grados a partir del desnivel y la distancia horizontal, junto con la relación y la longitud real del tramo inclinado.",
    "disclaimer": "Un tramo recto en un plano vertical con cambio horizontal no nulo. arctan(desnivel/cambio horizontal) describe la inclinación de la recta, no el rumbo de movimiento. La fórmula no verifica normas constructivas ni accesibilidad; las entradas están fijadas en metros."
  }
};
