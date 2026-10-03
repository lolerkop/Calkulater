// Individually reviewed against all five actual188 native bodies; human editorial review pending.
export const contract = {
  "ru": {
    "longDescription": "Оцените плотность смеси сухого воздуха и водяного пара по фактическим температуре, абсолютному давлению и относительной влажности. При одинаковых температуре и давлении добавление водяного пара уменьшает плотность. Самолётный разбег и тяга двигателя этим расчётом не определяются.",
    "howToUse": [
      "Введите местное абсолютное давление, а не приведённое к уровню моря из погодной сводки.",
      "Сравните влажную и сухую плотности при одинаковых p и t.",
      "Опорные 1,225 кг/м³ относятся к сухому воздуху; отклонение не является аэродинамическим допуском."
    ],
    "howItWorks": "es=6,1078·10^(7,5 t/(t+237,3)) гПа; e=es·RH/100. Сумма парциальных плотностей: ρ=100(p −e)/(287,058·T)+100 e/(461,495·T), T=t+273,15 K. Коэффициент 100 переводит гПа в Па.",
    "example": "20 °C, 1013,25 гПа и 50% дают ρ≈1,1988 кг/м³, сухой воздух≈1,2041 кг/м³; e≈11,690 гПа. Относительно опорных 1,225 кг/м³ смесь легче примерно на 2,136%.",
    "faq": [
      {
        "q": "Почему влажный воздух легче сухого?",
        "a": "Потому что молекула воды легче средней молекулы воздуха: 18 против 29 атомных единиц. При том же давлении и температуре число молекул в кубометре одинаково, поэтому замена части тяжёлых молекул лёгкими уменьшает массу."
      },
      {
        "q": "Насколько плотность падает в жару?",
        "a": "Оцените плотность смеси сухого воздуха и водяного пара по фактическим температуре, абсолютному давлению и относительной влажности. При одинаковых температуре и давлении добавление водяного пара уменьшает плотность. Самолётный разбег и тяга двигателя этим расчётом не определяются. 20 °C, 1013,25 гПа и 50% дают ρ≈1,1988 кг/м³, сухой воздух≈1,2041 кг/м³; e≈11,690 гПа. Относительно опорных 1,225 кг/м³ смесь легче примерно на 2,136%."
      },
      {
        "q": "Что такое стандартная плотность 1,225?",
        "a": "Плотность сухого воздуха при 15 °C и 1013,25 гПа — опорная величина международной стандартной атмосферы. Через неё нормируют аэродинамические характеристики, чтобы сравнивать испытания в разную погоду."
      },
      {
        "q": "Влияет ли высота над уровнем моря?",
        "a": "Введите местное абсолютное давление, а не приведённое к уровню моря из погодной сводки."
      }
    ],
    "disclaimer": "Идеальная газовая смесь без аэрозолей. Тетенс здесь приближает насыщение над жидкой водой, не над льдом; универсальная погрешность не заявлена. Выбирается ветвь t>−237,3 °C без сингулярности; это алгебраический предел, не диапазон подтверждённой точности. Нужны p>0, RH 0–100% и e≤p."
  },
  "en": {
    "longDescription": "Estimate a dry-air/water-vapour mixture density from actual temperature, absolute pressure and relative humidity. At the same temperature and pressure, replacing dry air with water vapour lowers density. Aircraft take-off distance and engine thrust are not calculated.",
    "howToUse": [
      "Enter local absolute pressure, rather than a weather report’s sea-level reduction.",
      "Compare moist and dry densities at the same p and t.",
      "The 1.225 kg/m³ reference is dry air; its deviation is not an aerodynamic acceptance limit."
    ],
    "howItWorks": "es=6.1078·10^(7.5 t/(t+237.3)) hPa; e=es·RH/100. Add partial densities: ρ=100(p −e)/(287.058·T)+100 e/(461.495·T), T=t+273.15 K. The factor 100 converts hPa to Pa.",
    "example": "20 °C, 1013.25 hPa and 50% give ρ≈1.1988 kg/m³, dry air≈1.2041 kg/m³ and e≈11.690 hPa. The mixture is about 2.136% below the 1.225 kg/m³ reference.",
    "faq": [
      {
        "q": "Why is moist air lighter than dry air?",
        "a": "Because a water molecule is lighter than an average air molecule: 18 against 29 atomic units. At the same pressure and temperature a cubic metre holds the same number of molecules, so swapping heavy ones for light ones lowers the mass."
      },
      {
        "q": "How far does density fall in the heat?",
        "a": "Estimate a dry-air/water-vapour mixture density from actual temperature, absolute pressure and relative humidity. At the same temperature and pressure, replacing dry air with water vapour lowers density. Aircraft take-off distance and engine thrust are not calculated. 20 °C, 1013.25 hPa and 50% give ρ≈1.1988 kg/m³, dry air≈1.2041 kg/m³ and e≈11.690 hPa. The mixture is about 2.136% below the 1.225 kg/m³ reference."
      },
      {
        "q": "What is the standard 1.225 figure?",
        "a": "The density of dry air at 15 °C and 1013.25 hPa, the reference of the International Standard Atmosphere. Aerodynamic figures are normalised to it so that tests in different weather stay comparable."
      },
      {
        "q": "Does altitude matter?",
        "a": "Enter local absolute pressure, rather than a weather report’s sea-level reduction."
      }
    ],
    "disclaimer": "Ideal gas mixture without aerosols. Tetens approximates saturation over liquid water, not ice; no universal error bound is claimed. The branch t>−237.3 °C avoids the singularity and is an algebraic bound, not a validated accuracy range. Require p>0, RH 0–100% and e≤p."
  },
  "uk": {
    "longDescription": "Оцініть густину суміші сухого повітря й водяної пари за фактичними температурою, абсолютним тиском і відносною вологістю. За однакових температури й тиску водяна пара зменшує густину. Розбіг літака та тяга двигуна тут не визначаються.",
    "howToUse": [
      "Введіть місцевий абсолютний тиск, а не зведений до рівня моря з прогнозу.",
      "Порівняйте вологу й суху густини за однакових p та t.",
      "Опорні 1,225 кг/м³ стосуються сухого повітря; відхилення не є аеродинамічним допуском."
    ],
    "howItWorks": "es=6,1078·10^(7,5 t/(t+237,3)) гПа; e=es·RH/100. Сума парціальних густин: ρ=100(p −e)/(287,058·T)+100 e/(461,495·T), T=t+273,15 K. Множник 100 переводить гПа в Па.",
    "example": "20 °C, 1013,25 гПа та 50% дають ρ≈1,1988 кг/м³, сухе повітря≈1,2041 кг/м³; e≈11,690 гПа. Суміш приблизно на 2,136% легша за опорні 1,225 кг/м³.",
    "faq": [
      {
        "q": "Чому вологе повітря легше за сухе?",
        "a": "Бо молекула води важить 18 атомних одиниць проти 29 у середньої молекули повітря. За сталого тиску кожна молекула води витісняє важчу молекулу азоту чи кисню, і густина падає."
      },
      {
        "q": "Як густина впливає на політ?",
        "a": "Оцініть густину суміші сухого повітря й водяної пари за фактичними температурою, абсолютним тиском і відносною вологістю. За однакових температури й тиску водяна пара зменшує густину. Розбіг літака та тяга двигуна тут не визначаються. 20 °C, 1013,25 гПа та 50% дають ρ≈1,1988 кг/м³, сухе повітря≈1,2041 кг/м³; e≈11,690 гПа. Суміш приблизно на 2,136% легша за опорні 1,225 кг/м³."
      },
      {
        "q": "Що таке тиск насиченої пари?",
        "a": "Тиск насичення залежить від температури та фазового стану води. Тут es наближається формулою над рідкою водою; за RH=100% e=es. Іній за від’ємної температури потребує окремої моделі льоду."
      },
      {
        "q": "Чому в формулі дві газові сталі?",
        "a": "Бо сухе повітря й водяна пара — різні гази з різною молярною масою. Тому їхні внески рахуються окремо й додаються."
      }
    ],
    "disclaimer": "Ідеальна газова суміш без аерозолів. Тетенс наближує насичення над рідкою водою, не льодом; універсальну похибку не заявлено. Гілка t>−237,3 °C уникає сингулярності й є алгебраїчною межею, не перевіреним діапазоном точності. Потрібні p>0, RH 0–100% і e≤p."
  },
  "de": {
    "longDescription": "Schätze die Dichte eines Gemischs aus trockener Luft und Wasserdampf aus tatsächlicher Temperatur, Absolutdruck und relativer Feuchte. Bei gleicher Temperatur und gleichem Druck verringert Wasserdampf die Dichte. Startstrecke und Motorschub werden nicht berechnet.",
    "howToUse": [
      "Gib lokalen Absolutdruck ein, keinen auf Meereshöhe reduzierten Wetterwert.",
      "Vergleiche feuchte und trockene Dichte bei gleichem p und t.",
      "Der Bezug 1,225 kg/m³ gilt für trockene Luft; die Abweichung ist keine aerodynamische Zulässigkeitsgrenze."
    ],
    "howItWorks": "es=6,1078·10^(7,5 t/(t+237,3)) hPa; e=es·RH/100. Die Teildichten werden addiert: ρ=100(p −e)/(287,058·T)+100 e/(461,495·T), T=t+273,15 K. Faktor 100 wandelt hPa in Pa um.",
    "example": "20 °C, 1013,25 hPa und 50% ergeben ρ≈1,1988 kg/m³, trockene Luft≈1,2041 kg/m³ und e≈11,690 hPa. Das Gemisch liegt etwa 2,136% unter dem Bezug 1,225 kg/m³.",
    "faq": [
      {
        "q": "Warum ist feuchte Luft leichter als trockene?",
        "a": "Weil ein Wassermolekül leichter ist als ein mittleres Luftmolekül: 18 gegen 29 atomare Einheiten. Bei gleichem Druck und gleicher Temperatur enthält ein Kubikmeter gleich viele Moleküle, schwere gegen leichte zu tauschen senkt also die Masse."
      },
      {
        "q": "Wie stark fällt die Dichte in der Hitze?",
        "a": "Schätze die Dichte eines Gemischs aus trockener Luft und Wasserdampf aus tatsächlicher Temperatur, Absolutdruck und relativer Feuchte. Bei gleicher Temperatur und gleichem Druck verringert Wasserdampf die Dichte. Startstrecke und Motorschub werden nicht berechnet. 20 °C, 1013,25 hPa und 50% ergeben ρ≈1,1988 kg/m³, trockene Luft≈1,2041 kg/m³ und e≈11,690 hPa. Das Gemisch liegt etwa 2,136% unter dem Bezug 1,225 kg/m³."
      },
      {
        "q": "Was ist der Normwert 1,225?",
        "a": "Die Dichte trockener Luft bei 15 °C und 1013,25 hPa, der Bezug der internationalen Normatmosphäre. Aerodynamische Werte werden darauf normiert, damit Versuche bei verschiedenem Wetter vergleichbar bleiben."
      },
      {
        "q": "Spielt die Höhe eine Rolle?",
        "a": "Gib lokalen Absolutdruck ein, keinen auf Meereshöhe reduzierten Wetterwert."
      }
    ],
    "disclaimer": "Ideales Gasgemisch ohne Aerosole. Tetens nähert Sättigung über flüssigem Wasser, nicht Eis; eine allgemeine Fehlergrenze wird nicht behauptet. t>−237,3 °C vermeidet die Singularität und ist eine algebraische Grenze, kein validierter Genauigkeitsbereich. Erforderlich: p>0, RH 0–100%, e≤p."
  },
  "es": {
    "longDescription": "Estima la densidad de una mezcla de aire seco y vapor de agua con temperatura, presión absoluta y humedad relativa reales. A igual temperatura y presión, el vapor reduce la densidad. No se calculan carrera de despegue ni empuje del motor.",
    "howToUse": [
      "Introduce presión absoluta local, no la reducida al nivel del mar del parte meteorológico.",
      "Compara densidad húmeda y seca con los mismos p y t.",
      "La referencia 1,225 kg/m³ es de aire seco; la desviación no es un límite de aceptación aerodinámico."
    ],
    "howItWorks": "es=6,1078·10^(7,5 t/(t+237,3)) hPa; e=es·RH/100. Se suman densidades parciales: ρ=100(p −e)/(287,058·T)+100 e/(461,495·T), T=t+273,15 K. El factor 100 convierte hPa a Pa.",
    "example": "20 °C, 1013,25 hPa y 50% dan ρ≈1,1988 kg/m³, aire seco≈1,2041 kg/m³ y e≈11,690 hPa. La mezcla queda alrededor de 2,136% por debajo de la referencia 1,225 kg/m³.",
    "faq": [
      {
        "q": "¿Por qué el aire húmedo es más ligero que el seco?",
        "a": "Porque una molécula de agua es más ligera que una molécula media de aire: 18 frente a 29 unidades atómicas. A la misma presión y temperatura un metro cúbico contiene el mismo número de moléculas, así que cambiar pesadas por ligeras reduce la masa."
      },
      {
        "q": "¿Cuánto baja la densidad con el calor?",
        "a": "Estima la densidad de una mezcla de aire seco y vapor de agua con temperatura, presión absoluta y humedad relativa reales. A igual temperatura y presión, el vapor reduce la densidad. No se calculan carrera de despegue ni empuje del motor. 20 °C, 1013,25 hPa y 50% dan ρ≈1,1988 kg/m³, aire seco≈1,2041 kg/m³ y e≈11,690 hPa. La mezcla queda alrededor de 2,136% por debajo de la referencia 1,225 kg/m³."
      },
      {
        "q": "¿Qué es la cifra estándar de 1,225?",
        "a": "La densidad del aire seco a 15 °C y 1013,25 hPa, la referencia de la Atmósfera Estándar Internacional. Los datos aerodinámicos se normalizan a ella para que los ensayos con distinto tiempo sigan siendo comparables."
      },
      {
        "q": "¿Influye la altitud?",
        "a": "Introduce presión absoluta local, no la reducida al nivel del mar del parte meteorológico."
      }
    ],
    "disclaimer": "Mezcla ideal sin aerosoles. Tetens aproxima saturación sobre agua líquida, no hielo; no se afirma un error universal. La rama t>−237,3 °C evita la singularidad: es un límite algebraico, no un intervalo validado de precisión. Se requieren p>0, RH 0–100% y e≤p."
  }
};
