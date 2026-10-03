import type { CalculatorCopy } from '../../lib/platform/types';

// Owned native explanations reviewed against this calculator’s model.
// Human editorial review is still pending; this file makes no publication claim.
export const waveContractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Pick<CalculatorCopy, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq'>> = {
  "ru": {
    "longDescription": "Для периодической волны фазовая скорость, частота и длина волны связаны v=fλ. Выберите искомую величину и введите две известные: третье поле скрывается и его старое значение не влияет на ответ. Единицы фиксированы: м/с, Гц и м; период показан в секундах. Скорость берите для нужной волны, среды и частоты — универсальной скорости для всех волн нет.",
    "howToUse": [
      "Выберите, какую из трёх величин ищете. Введите две известные — третья будет вычислена. Скорость берите для среды, а не для источника. Период T=1/f — время одного полного колебания в секундах.",
      "Проверьте перевод:1 кГц=1000 Гц,1 см=0,01 м. Например,50 Гц дают T=0,02 с независимо от λ."
    ],
    "howItWorks": "Используется фазовая скорость v=fλ; λ=v/f, f=v/λ, T=1/f. Все известные величины должны быть положительными. Групповая скорость пакета волн может отличаться от фазовой и здесь не вычисляется.",
    "example": "При скорости 343 м/с в воздухе нота 440 Гц имеет длину волны 0,7795 м и период 0,002273 с.",
    "faq": [
      {
        "q": "Какую скорость волны подставлять?",
        "a": "Скорость в той среде, где волна распространяется: около 343 м/с для звука в воздухе при комнатной температуре, порядка 1 500 в воде и 299 792 458 для света в вакууме."
      },
      {
        "q": "Всегда ли высокая частота означает ту же скорость?",
        "a": "В недиспергирующей модели скорость одинакова и увеличение частоты уменьшает λ. В диспергирующей среде фазовая скорость зависит от частоты; тогда нужно подставить скорость именно для неё. При переходе через неподвижную границу частота сохраняется, а длина меняется с фазовой скоростью."
      },
      {
        "q": "Чем частота отличается от периода?",
        "a": "Это взаимно обратные величины. Пятьдесят герц — это период 0,02 секунды; первая считает колебания в секунду, вторая измеряет одно колебание."
      },
      {
        "q": "Подходит ли расчёт для света и радио?",
        "a": "Да, при подходящей скорости. В вакууме берите 299 792 458 м/с; внутри стекла или кабеля скорость ниже, и длина волны соответственно укорачивается."
      }
    ]
  },
  "en": {
    "longDescription": "For a periodic wave, phase speed, frequency and wavelength satisfy v=fλ. Choose the unknown and enter the two known quantities; the third field is hidden and its previous value is ignored. Units are fixed: m/s, Hz and m, with period in seconds. Use the speed for the relevant wave, medium and frequency; there is no universal speed for every wave.",
    "howToUse": [
      "Choose which of the three quantities you are looking for. Enter the two you already know. Use the speed of the medium, not of the source. The period T=1/f is the time of one complete cycle, in seconds.",
      "Check unit conversion:1 kHz=1000 Hz and 1 cm=0.01 m. For example,50 Hz gives T=0.02 s regardless of λ."
    ],
    "howItWorks": "The phase-speed relation is v=fλ; λ=v/f, f=v/λ and T=1/f. All known quantities must be positive. A wave packet’s group speed can differ from phase speed and is not calculated here.",
    "example": "At 343 m/s in air, a 440 Hz note has a wavelength of 0.7795 m and a period of 0.002273 s.",
    "faq": [
      {
        "q": "What wave speed should I use?",
        "a": "The speed in the medium the wave travels through: roughly 343 m/s for sound in air at room temperature, about 1,500 in water, and 299,792,458 for light in vacuum."
      },
      {
        "q": "Does higher frequency always mean unchanged speed?",
        "a": "In a nondispersive model the speed is unchanged and greater frequency shortens λ. In a dispersive medium, phase speed depends on frequency, so use the speed at that frequency. Across a stationary boundary the frequency remains unchanged while wavelength follows the phase speed."
      },
      {
        "q": "What is the difference between frequency and period?",
        "a": "They are reciprocals of one another. Fifty hertz is a period of 0.02 seconds; the first counts cycles per second, the second measures one cycle."
      },
      {
        "q": "Does this work for light and radio?",
        "a": "Yes, with the appropriate speed. In vacuum use 299,792,458 m/s; inside glass or cable the speed is lower and the wavelength shortens accordingly."
      }
    ]
  },
  "uk": {
    "longDescription": "Для періодичної хвилі фазова швидкість, частота та довжина пов’язані v=fλ. Виберіть невідому та введіть дві відомі величини: третє поле приховане, його старе значення не впливає на відповідь. Одиниці фіксовані: м/с, Гц і м; період показано в секундах. Швидкість беріть для потрібної хвилі, середовища та частоти — універсальної швидкості для всіх хвиль немає.",
    "howToUse": [
      "Виберіть, що шукати: швидкість, довжину хвилі чи частоту. Введіть дві відомі величини. Прочитайте результат разом із періодом.",
      "Перевірте одиниці:1 кГц=1000 Гц,1 см=0,01 м. Наприклад,50 Гц дають T=0,02 с незалежно від λ."
    ],
    "howItWorks": "Використовується фазова швидкість v=fλ; λ=v/f, f=v/λ, T=1/f. Відомі величини мають бути додатними. Групова швидкість хвильового пакета може відрізнятися від фазової та тут не обчислюється.",
    "example": "За швидкості 343 м/с у повітрі нота 440 Гц має довжину хвилі 0,7795 м і період 0,002273 с. У воді та сама нота дала б довжину близько 3,4 м.",
    "faq": [
      {
        "q": "Чи завжди більша частота означає ту саму швидкість?",
        "a": "У недисперсійному наближенні швидкість незмінна, а більша частота зменшує λ. У дисперсійному середовищі фазова швидкість залежить від частоти, тому вводьте швидкість саме для неї. На нерухомій межі частота зберігається, а довжина змінюється разом із фазовою швидкістю."
      },
      {
        "q": "Чим період відрізняється від частоти?",
        "a": "Це обернені величини: період — час одного коливання, частота — кількість коливань за секунду. Частота 440 Гц означає період 1/440 ≈ 0,00227 с."
      },
      {
        "q": "Чи працює співвідношення для світла?",
        "a": "Так, із швидкістю світла 299 792 458 м/с у вакуумі. Червоному світлу відповідає довжина близько 700 нм, фіолетовому — близько 400 нм."
      },
      {
        "q": "Чому низькі звуки огинають перешкоди краще?",
        "a": "Дифракція помітна, коли довжина хвилі порівнянна з розміром перешкоди. Передавання звуку крізь стіну залежить також від її матеріалу й конструкції; цей калькулятор не моделює звукоізоляцію."
      }
    ]
  },
  "de": {
    "longDescription": "Bei einer periodischen Welle gilt zwischen Phasengeschwindigkeit, Frequenz und Wellenlänge v=fλ. Wähle die gesuchte Größe und gib die zwei bekannten ein; das dritte Feld wird verborgen und sein alter Wert ignoriert. Die Einheiten sind m/s, Hz und m, die Periodendauer steht in Sekunden. Verwende die Geschwindigkeit für Wellenart, Medium und Frequenz; es gibt keine allgemeine Geschwindigkeit für alle Wellen.",
    "howToUse": [
      "Wähle, welche der drei Größen du suchst. Trage die beiden bekannten ein. Nimm die Geschwindigkeit des Mediums und nicht die der Quelle. Die Periodendauer T=1/f ist die Zeit einer vollständigen Schwingung in Sekunden.",
      "Prüfe die Einheiten:1 kHz=1000 Hz und 1 cm=0,01 m. Beispielsweise ergeben 50 Hz eine Periodendauer T=0,02 s unabhängig von λ."
    ],
    "howItWorks": "Es gilt die Phasengeschwindigkeit v=fλ; λ=v/f, f=v/λ und T=1/f. Alle bekannten Größen müssen positiv sein. Die Gruppengeschwindigkeit eines Wellenpakets kann abweichen und wird hier nicht berechnet.",
    "example": "Bei 343 m/s in Luft hat ein Ton mit 440 Hz eine Wellenlänge von 0,7795 m und eine Periodendauer von 0,002273 s.",
    "faq": [
      {
        "q": "Welche Wellengeschwindigkeit soll ich nehmen?",
        "a": "Die Geschwindigkeit im Medium, durch das die Welle läuft: rund 343 m/s für Schall in Luft bei Zimmertemperatur, rund 1500 in Wasser und 299 792 458 für Licht im Vakuum."
      },
      {
        "q": "Bedeutet eine höhere Frequenz immer dieselbe Geschwindigkeit?",
        "a": "Im nichtdispersiven Modell bleibt die Geschwindigkeit gleich und höhere Frequenz verkürzt λ. In einem dispersiven Medium hängt die Phasengeschwindigkeit von der Frequenz ab; verwende den dafür passenden Wert. An einer ruhenden Grenzfläche bleibt die Frequenz gleich, die Wellenlänge folgt der Phasengeschwindigkeit."
      },
      {
        "q": "Was ist der Unterschied zwischen Frequenz und Periodendauer?",
        "a": "Sie sind Kehrwerte voneinander. Fünfzig Hertz sind eine Periodendauer von 0,02 Sekunden; die erste zählt Schwingungen je Sekunde, die zweite misst eine Schwingung."
      },
      {
        "q": "Gilt das auch für Licht und Funk?",
        "a": "Ja, mit der passenden Geschwindigkeit. Im Vakuum nimm 299 792 458 m/s; in Glas oder Kabel ist die Geschwindigkeit niedriger, und die Wellenlänge verkürzt sich entsprechend."
      }
    ]
  },
  "es": {
    "longDescription": "Para una onda periódica, velocidad de fase, frecuencia y longitud satisfacen v=fλ. Elige la incógnita e introduce las dos magnitudes conocidas; el tercer campo se oculta y su valor anterior se ignora. Las unidades son fijas: m/s, Hz y m, con periodo en segundos. Utiliza la velocidad correspondiente al tipo de onda, medio y frecuencia; no existe una velocidad universal para todas las ondas.",
    "howToUse": [
      "Elige cuál de las tres magnitudes buscas. Introduce las dos que ya conoces. Usa la velocidad del medio, no la de la fuente. El periodo T=1/f es el tiempo de un ciclo completo, en segundos.",
      "Revisa las unidades:1 kHz=1000 Hz y 1 cm=0,01 m. Por ejemplo,50 Hz da T=0,02 s con independencia de λ."
    ],
    "howItWorks": "Se utiliza velocidad de fase v=fλ; λ=v/f, f=v/λ y T=1/f. Las magnitudes conocidas deben ser positivas. La velocidad de grupo de un paquete de ondas puede diferir y no se calcula aquí.",
    "example": "A 343 m/s en el aire, una nota de 440 Hz tiene una longitud de onda de 0,7795 m y un periodo de 0,002273 s.",
    "faq": [
      {
        "q": "¿Qué velocidad de onda debo usar?",
        "a": "La velocidad en el medio por el que viaja la onda: unos 343 m/s para el sonido en el aire a temperatura ambiente, unos 1500 en el agua y 299 792 458 para la luz en el vacío."
      },
      {
        "q": "¿Una frecuencia mayor siempre mantiene la velocidad?",
        "a": "En un modelo no dispersivo la velocidad es constante y aumentar frecuencia reduce λ. En un medio dispersivo la velocidad de fase depende de frecuencia: introduce el valor correspondiente. En una frontera estacionaria la frecuencia se conserva y la longitud cambia con la velocidad de fase."
      },
      {
        "q": "¿Qué diferencia hay entre frecuencia y periodo?",
        "a": "Son inversos el uno del otro. Cincuenta hercios son un periodo de 0,02 segundos; la primera cuenta ciclos por segundo y el segundo mide un ciclo."
      },
      {
        "q": "¿Vale para la luz y la radio?",
        "a": "Sí, con la velocidad adecuada. En el vacío usa 299 792 458 m/s; dentro del vidrio o de un cable la velocidad es menor y la longitud de onda se acorta en consecuencia."
      }
    ]
  }
};
