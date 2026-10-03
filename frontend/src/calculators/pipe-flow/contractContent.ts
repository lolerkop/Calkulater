// Individually reviewed against all five actual188 native bodies; human editorial review pending.
export const contract = {
  "ru": {
    "longDescription": "Переведите объёмный расход в среднюю скорость через круглое сечение: v=Q/A. Используется внутренний диаметр и расход при условиях в этом сечении. Скорость в отдельных точках профиля может отличаться от средней. Результат не назначает допустимый диаметр, предел шума или режим течения: для этого нужны свойства жидкости и всей системы.",
    "howToUse": [
      "Диаметр берите ВНУТРЕННИЙ: у полипропилена и металлопластика он заметно меньше наружного.",
      "Расход задаётся в кубометрах в час — так его пишут насосы и счётчики.",
      "Единой нормы для всех труб нет. Требования зависят от среды, температуры, материала, назначения, потерь напора и шума. Эта страница даёт среднюю скорость; сравнивайте её с требованиями конкретной системы, а не с автоматическим порогом."
    ],
    "howItWorks": "Скорость = расход / площадь сечения, площадь = πd²/4.",
    "example": "10 м³/ч по трубе с внутренним диаметром 50 мм дают 1,415 м/с.",
    "faq": [
      {
        "q": "Какая скорость считается нормальной?",
        "a": "Единой нормы для всех труб нет. Требования зависят от среды, температуры, материала, назначения, потерь напора и шума. Эта страница даёт среднюю скорость; сравнивайте её с требованиями конкретной системы, а не с автоматическим порогом."
      },
      {
        "q": "Почему важен именно внутренний диаметр?",
        "a": "Потому что течёт жидкость внутри. У полипропиленовой трубы с наружным диаметром 32 мм внутренний может быть 21 мм — сечение меньше в 2,3 раза, а скорость во столько же раз выше расчётной по наружному размеру."
      },
      {
        "q": "Как уменьшить скорость?",
        "a": "Увеличить диаметр. Площадь растёт как квадрат: переход с 50 на 63 мм снижает скорость примерно в 1,6 раза. Уменьшать расход обычно нельзя — он задан потребителями."
      },
      {
        "q": "Учитываются ли потери напора?",
        "a": "Нет. Для потерь нужны длина, шероховатость, вязкость и местные сопротивления. Один ответ v=Q/A не доказывает, что диаметр занижен, а скорость 2 м/с сама по себе не предсказывает шум."
      }
    ],
    "disclaimer": "Средняя скорость по положительному объёмному расходу и круглому внутреннему сечению. Вязкость, профиль, число Рейнольдса, потери напора и акустика не вычисляются. Универсальная граница 2 м/с из этой формулы не следует."
  },
  "en": {
    "longDescription": "Convert volume flow into mean velocity through a circular cross-section: v=Q/A. Use inner diameter and volume flow at conditions in that section. Local velocity within the profile may differ from the mean. The result does not specify an acceptable bore, noise limit or flow regime; those need fluid and system properties.",
    "howToUse": [
      "Use the INNER diameter: on polypropylene and multilayer pipe it is noticeably smaller than the outer.",
      "Flow rate is in cubic metres per hour — the unit pumps and meters are rated in.",
      "There is no single normal speed for all pipes. Requirements depend on fluid, temperature, material, purpose, head loss and noise. This page supplies mean velocity; compare it with the requirements of the particular system, not an automatic threshold."
    ],
    "howItWorks": "Velocity = flow rate / cross-section area, area = πd²/4.",
    "example": "10 m³/h through a 50 mm inner diameter gives 1.415 m/s.",
    "faq": [
      {
        "q": "What velocity is normal?",
        "a": "There is no single normal speed for all pipes. Requirements depend on fluid, temperature, material, purpose, head loss and noise. This page supplies mean velocity; compare it with the requirements of the particular system, not an automatic threshold."
      },
      {
        "q": "Why the inner diameter specifically?",
        "a": "Because that is where the water goes. A polypropylene pipe with a 32 mm outer diameter may have a 21 mm bore — 2.3 times less area and 2.3 times the velocity you would get from the outer figure."
      },
      {
        "q": "How do I bring the velocity down?",
        "a": "Increase the diameter. Area grows as the square: going from 50 to 63 mm cuts velocity by about 1.6 times. Reducing the flow is usually not an option — the consumers set it."
      },
      {
        "q": "Is head loss included?",
        "a": "No. Losses need length, roughness, viscosity and fittings. A result v=Q/A alone does not prove that the bore is undersized, and 2 m/s alone does not predict noise."
      }
    ],
    "disclaimer": "Mean velocity from positive volume flow and a circular inner section. Viscosity, velocity profile, Reynolds number, head loss and acoustics are not computed. This formula provides no universal 2 m/s limit."
  },
  "uk": {
    "longDescription": "Перетворіть об’ємну витрату на середню швидкість у круглому перерізі: v=Q/A. Використовується внутрішній діаметр і витрата за умов цього перерізу. Швидкість в окремих точках профілю може відрізнятися від середньої. Результат не визначає допустимий діаметр, межу шуму або режим течії: потрібні властивості рідини й усієї системи.",
    "howToUse": [
      "Діаметр беріть ВНУТРІШНІЙ: у поліпропілену й металопластику він помітно менший за зовнішній.",
      "Витрату задавайте в кубометрах на годину — саме так її пишуть насоси й лічильники.",
      "Єдиної норми для всіх труб немає. Вимоги залежать від середовища, температури, матеріалу, призначення, втрат напору й шуму. Тут отримуємо середню швидкість; порівнюйте її з вимогами конкретної системи, не з автоматичним порогом."
    ],
    "howItWorks": "Швидкість дорівнює витрата ÷ площа перерізу, а площа рахується як πd²/4. Квадрат діаметра означає, що труба на розмір більша знижує швидкість набагато сильніше, ніж здається: перехід із 50 на 63 мм зменшує швидкість більш ніж у півтора раза.",
    "example": "10 м³/год у трубі внутрішнього діаметра 50 мм дають середню швидкість 1,415 м/с. За 32 мм та тієї самої витрати виходить 3,45 м/с; сама зміна не визначає рівень шуму.",
    "faq": [
      {
        "q": "Який діаметр вводити?",
        "a": "Внутрішній діаметр фактичної труби. Він залежить від товщини стінки: наприклад, за зовнішніх 32 мм і внутрішніх 21 мм використання зовнішнього розміру занизило б швидкість у (32/21)²≈2,32 раза."
      },
      {
        "q": "Чому швидкість понад 2 м/с небажана?",
        "a": "Єдиної норми для всіх труб немає. Вимоги залежать від середовища, температури, матеріалу, призначення, втрат напору й шуму. Тут отримуємо середню швидкість; порівнюйте її з вимогами конкретної системи, не з автоматичним порогом."
      },
      {
        "q": "Як швидкість пов’язана з діаметром?",
        "a": "За сталої витрати швидкість обернено пропорційна квадрату діаметра: подвоєння діаметра зменшує її учетверо. Це геометрична залежність, не гарантія зникнення шуму."
      },
      {
        "q": "Чи враховано в’язкість і тертя?",
        "a": "Ні. Для втрат потрібні довжина, шорсткість, в’язкість і місцеві опори. Сам результат v=Q/A не доводить замалий діаметр, а 2 м/с самі по собі не прогнозують шум."
      }
    ],
    "disclaimer": "Середня швидкість за додатною об’ємною витратою та круглим внутрішнім перерізом. В’язкість, профіль, число Рейнольдса, втрати напору й акустика не обчислюються. Універсальна межа 2 м/с із цієї формули не випливає."
  },
  "de": {
    "longDescription": "Rechne Volumenstrom in mittlere Geschwindigkeit durch einen Kreisquerschnitt um: v=Q/A. Verwende Innendurchmesser und Volumenstrom unter den Bedingungen in diesem Querschnitt. Die örtliche Profilgeschwindigkeit kann vom Mittelwert abweichen. Das Ergebnis legt keinen zulässigen Durchmesser, keine Geräuschgrenze und kein Strömungsregime fest; dafür sind Stoff- und Systemeigenschaften nötig.",
    "howToUse": [
      "Nimm den INNEREN Durchmesser: bei Polypropylen und Mehrschichtverbundrohr ist er merklich kleiner als der äußere.",
      "Der Durchfluss steht in Kubikmetern je Stunde — der Einheit, in der Pumpen und Zähler angegeben werden.",
      "Eine einheitliche Normalgeschwindigkeit für alle Rohre gibt es nicht. Anforderungen hängen von Medium, Temperatur, Werkstoff, Nutzung, Druckverlust und Geräusch ab. Diese Seite liefert den Mittelwert; vergleiche ihn mit den Anforderungen der Anlage und nicht mit einer automatischen Schwelle."
    ],
    "howItWorks": "Geschwindigkeit = Durchfluss / Querschnittsfläche, Fläche = πd²/4.",
    "example": "10 m³/h durch einen Innendurchmesser von 50 mm ergeben 1,415 m/s.",
    "faq": [
      {
        "q": "Welche Geschwindigkeit ist üblich?",
        "a": "Eine einheitliche Normalgeschwindigkeit für alle Rohre gibt es nicht. Anforderungen hängen von Medium, Temperatur, Werkstoff, Nutzung, Druckverlust und Geräusch ab. Diese Seite liefert den Mittelwert; vergleiche ihn mit den Anforderungen der Anlage und nicht mit einer automatischen Schwelle."
      },
      {
        "q": "Warum gerade der Innendurchmesser?",
        "a": "Weil dort das Wasser fließt. Ein Polypropylenrohr mit 32 mm Außendurchmesser kann eine Bohrung von 21 mm haben — 2,3-mal weniger Fläche und die 2,3-fache Geschwindigkeit gegenüber dem Außenmaß."
      },
      {
        "q": "Wie senke ich die Geschwindigkeit?",
        "a": "Vergrößere den Durchmesser. Die Fläche wächst im Quadrat: von 50 auf 63 mm senkt die Geschwindigkeit um rund das 1,6-Fache. Den Durchfluss zu verringern kommt meist nicht infrage — ihn setzen die Verbraucher."
      },
      {
        "q": "Ist der Druckverlust enthalten?",
        "a": "Nein. Dafür sind Länge, Rauheit, Viskosität und örtliche Widerstände nötig. v=Q/A allein beweist keinen zu kleinen Durchmesser; 2 m/s allein sagt kein Geräusch voraus."
      }
    ],
    "disclaimer": "Mittlere Geschwindigkeit aus positivem Volumenstrom und kreisförmigem Innenquerschnitt. Viskosität, Profil, Reynolds-Zahl, Druckverlust und Akustik werden nicht berechnet. Die Formel begründet keine allgemeine Grenze von 2 m/s."
  },
  "es": {
    "longDescription": "Convierte el caudal volumétrico en velocidad media por una sección circular: v=Q/A. Usa el diámetro interior y el caudal en las condiciones de esa sección. La velocidad local del perfil puede diferir de la media. El resultado no fija un diámetro admisible, límite de ruido ni régimen de flujo; se necesitan propiedades del fluido y del sistema.",
    "howToUse": [
      "Usa el diámetro INTERIOR: en polipropileno y en tubo multicapa es bastante menor que el exterior.",
      "El caudal va en metros cúbicos por hora, la unidad en la que se etiquetan bombas y contadores.",
      "No existe una velocidad normal única para todas las tuberías. Depende del fluido, temperatura, material, uso, pérdida de carga y ruido. Esta página da la velocidad media; compárala con los requisitos del sistema concreto, no con un umbral automático."
    ],
    "howItWorks": "Velocidad = caudal / área de la sección, con el área = πd²/4.",
    "example": "10 m³/h por un diámetro interior de 50 mm dan 1,415 m/s.",
    "faq": [
      {
        "q": "¿Qué velocidad es normal?",
        "a": "No existe una velocidad normal única para todas las tuberías. Depende del fluido, temperatura, material, uso, pérdida de carga y ruido. Esta página da la velocidad media; compárala con los requisitos del sistema concreto, no con un umbral automático."
      },
      {
        "q": "¿Por qué el diámetro interior precisamente?",
        "a": "Porque es por donde va el agua. Un tubo de polipropileno con 32 mm de diámetro exterior puede tener 21 mm de paso: 2,3 veces menos área y 2,3 veces la velocidad que darías por el dato exterior."
      },
      {
        "q": "¿Cómo bajo la velocidad?",
        "a": "Aumentando el diámetro. El área crece con el cuadrado: pasar de 50 a 63 mm reduce la velocidad alrededor de 1,6 veces. Reducir el caudal no suele ser una opción: lo fijan los consumos."
      },
      {
        "q": "¿Está incluida la pérdida de carga?",
        "a": "No. Se requieren longitud, rugosidad, viscosidad y accesorios. v=Q/A por sí solo no demuestra que el diámetro sea insuficiente; 2 m/s por sí solo tampoco predice ruido."
      }
    ],
    "disclaimer": "Velocidad media a partir de caudal positivo y sección interior circular. No se calculan viscosidad, perfil, número de Reynolds, pérdida de carga ni acústica. La fórmula no establece un límite universal de 2 m/s."
  }
};
