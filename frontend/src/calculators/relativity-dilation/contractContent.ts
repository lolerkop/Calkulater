import type { CalculatorCopy } from '../../lib/platform/types';

// Owned native explanations reviewed against this calculator’s model.
// Human editorial review is still pending; this file makes no publication claim.
export const relativityDilationContractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Pick<CalculatorCopy, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq'>> = {
  "ru": {
    "longDescription": "Для двух событий на одних движущихся часах собственный интервал τ преобразуется в t=γτ в инерциальной системе, где часы движутся со скоростью v. Введите β=v/c и τ в секундах. Результат показывает t, γ, разность t−τ и долю продольной длины L/L₀. Гравитация, ускорение и маршрут путешествия здесь не моделируются.",
    "howToUse": [
      "Скорость вводится долей скорости света, собственный интервал — в секундах.0,5 означает половину скорости света;1 недопустима.",
      "Строка «Длина от собственной» показывает оставшиеся 100/γ процентов, а не процент уменьшения. При β=0,5 длина составляет 86,6025% от L₀, то есть уменьшение≈13,3975%."
    ],
    "howItWorks": "γ=1/√((1−β)(1+β)); t=γτ; t−τ=τβ²/[√(1−β²)(1+√(1−β²))]; L/L₀=1/γ. Допустимо 0≤β<1 и τ>0.",
    "example": "На половине скорости света секунда движущихся часов растягивается до 1,155 с.",
    "faq": [
      {
        "q": "Почему на бытовых скоростях эффекта не видно?",
        "a": "При β≪1 имеем γ−1≈β²/2. Например, при 250 м/с за час собственных часов разница≈1,252 наносекунды. Малый эффект может быть измерим; это не универсальный порог видимости."
      },
      {
        "q": "Что такое собственное время?",
        "a": "Собственный интервал измеряется между двумя событиями в одном месте системы часов. В системе, где они движутся, тот же интервал равен γτ. Ни одна из этих инерциальных систем не является универсально «настоящей»."
      },
      {
        "q": "Почему нельзя достичь скорости света?",
        "a": "На единице подкоренное выражение обращается в нуль, а множитель — в бесконечность. Физически это значит, что для разгона тела с массой потребовалась бы бесконечная энергия."
      },
      {
        "q": "Сокращается ли длина на самом деле?",
        "a": "Да, но только вдоль направления движения и только с точки зрения неподвижного наблюдателя. Для самого движущегося тела ничего не меняется — сокращается уже окружающий мир."
      },
      {
        "q": "Почему небольшая разность времени не обязана равняться нулю?",
        "a": "При малом β округлённый γ может выглядеть как 1. Разность считается устойчивой формулой отдельно: при β=10⁻⁹ и τ=10²⁰ с она≈50 с. Это предел машинного округления γ, а не исчезновение эффекта."
      }
    ]
  },
  "en": {
    "longDescription": "For two events on one moving clock, its proper interval τ becomes t=γτ in the inertial frame where the clock travels at speed v. Enter β=v/c and τ in seconds. The output gives t, γ, t−τ and the longitudinal length fraction L/L₀. Gravity, acceleration and the itinerary of a journey are not modelled.",
    "howToUse": [
      "Enter speed as a fraction of light speed and the proper interval in seconds.0.5 means half light speed;1 is outside the domain.",
      "The length-fraction row reports the remaining 100/γ per cent, not the percentage decrease. At β=0.5, the length is 86.6025% of L₀, a decrease of≈13.3975%."
    ],
    "howItWorks": "γ=1/√((1−β)(1+β)); t=γτ; t−τ=τβ²/[√(1−β²)(1+√(1−β²))]; L/L₀=1/γ. The domain is 0≤β<1 and τ>0.",
    "example": "At half the speed of light one second on the moving clock stretches to 1.155 s.",
    "faq": [
      {
        "q": "Why is nothing visible at everyday speeds?",
        "a": "For β≪1, γ−1≈β²/2. At 250 m/s over one hour of proper time the difference is≈1.252 nanoseconds. Small effects can be measured; there is no universal visibility threshold."
      },
      {
        "q": "What is proper time?",
        "a": "A proper interval is measured between two events at one location in the clock’s own frame. In a frame where that clock moves, the same interval is γτ. Neither inertial frame is universally the real one."
      },
      {
        "q": "Why can the speed of light not be reached?",
        "a": "At one the expression under the root goes to zero and the factor to infinity. Physically that means accelerating a massive body would take infinite energy."
      },
      {
        "q": "Does length really contract?",
        "a": "Yes, but only along the direction of motion and only from the stationary observer’s point of view. For the moving body nothing changes — it is the surrounding world that contracts."
      },
      {
        "q": "Why can a small time difference remain nonzero?",
        "a": "At small β, rounded γ may display as 1. The difference uses a separate stable expression: β=10⁻⁹ and τ=10²⁰ s give≈50 s. The rounded factor hides digits, not the physical effect."
      }
    ]
  },
  "uk": {
    "longDescription": "Для двох подій на одному рухомому годиннику власний інтервал τ перетворюється на t=γτ в інерціальній системі, де годинник рухається зі швидкістю v. Введіть β=v/c та τ у секундах. Результат містить t, γ, різницю t−τ і частку поздовжньої довжини L/L₀. Гравітація, прискорення та маршрут подорожі не моделюються.",
    "howToUse": [
      "Швидкість задається часткою швидкості світла, власний інтервал — секундами.0,5 означає половину швидкості світла;1 не допускається.",
      "Рядок довжини показує залишок 100/γ відсотків, а не відсоток зменшення. За β=0,5 довжина становить 86,6025% від L₀, зменшення≈13,3975%."
    ],
    "howItWorks": "γ=1/√((1−β)(1+β)); t=γτ; t−τ=τβ²/[√(1−β²)(1+√(1−β²))]; L/L₀=1/γ. Діапазон 0≤β<1 та τ>0.",
    "example": "На половині швидкості світла секунда рухомого годинника розтягується до 1,155 с. На 0,99 c вона розтягнеться вже до 7,09 с.",
    "faq": [
      {
        "q": "Чому ефект непомітний у побуті?",
        "a": "За β≪1 маємо γ−1≈β²/2. Наприклад, при 250 м/с за годину власного часу різниця≈1,252 наносекунди. Малий ефект можна виміряти; універсального порога помітності немає."
      },
      {
        "q": "Чи враховують це супутники навігації?",
        "a": "Так, навігація враховує і швидкість, і гравітацію. Цей інструмент описує лише кінематичний ефект спеціальної теорії відносності в інерціальних системах; повної поправки для супутникової навігації він не дає."
      },
      {
        "q": "Чи можна досягти швидкості світла?",
        "a": "Ні для тіла з масою: коефіцієнт Лоренца прямує до нескінченності, і потрібна енергія теж. Швидкість світла лишається недосяжною межею."
      },
      {
        "q": "Чи це справжнє уповільнення чи ілюзія?",
        "a": "Справжнє. Ефект перевірено прямо: нестабільні частинки в прискорювачах живуть довше рівно в γ разів, а атомні годинники на літаках розходяться з наземними на передбачену величину."
      },
      {
        "q": "Що таке власний час?",
        "a": "Власний інтервал вимірюється між двома подіями в одному місці системи годинника. У системі, де він рухається, той самий інтервал дорівнює γτ. Жодна інерціальна система не є універсально «справжньою»."
      },
      {
        "q": "Чому мала різниця часу може залишатися ненульовою?",
        "a": "За малого β округлений γ може виглядати як 1. Різниця обчислюється окремим стійким виразом: β=10⁻⁹ та τ=10²⁰ с дають≈50 с. Округлення приховує розряди, а не фізичний ефект."
      }
    ]
  },
  "de": {
    "longDescription": "Für zwei Ereignisse an derselben bewegten Uhr wird deren Eigenzeitintervall τ zu t=γτ im Inertialsystem, in dem sich die Uhr mit v bewegt. Gib β=v/c und τ in Sekunden ein. Ausgegeben werden t, γ, t−τ und der Längsanteil L/L₀. Gravitation, Beschleunigung und der Ablauf einer Reise werden nicht modelliert.",
    "howToUse": [
      "Die Geschwindigkeit ist ein Anteil der Lichtgeschwindigkeit, die Eigenzeit wird in Sekunden eingegeben.0,5 bedeutet die halbe Lichtgeschwindigkeit;1 ist unzulässig.",
      "Die Längenzeile zeigt die verbleibenden 100/γ Prozent, nicht die prozentuale Verkürzung. Bei β=0,5 beträgt die Länge 86,6025% von L₀, die Abnahme also≈13,3975%."
    ],
    "howItWorks": "γ=1/√((1−β)(1+β)); t=γτ; t−τ=τβ²/[√(1−β²)(1+√(1−β²))]; L/L₀=1/γ. Zulässig sind 0≤β<1 und τ>0.",
    "example": "Bei der halben Lichtgeschwindigkeit dehnt sich eine Sekunde auf der bewegten Uhr auf 1,155 s.",
    "faq": [
      {
        "q": "Warum ist bei alltäglichen Geschwindigkeiten nichts zu sehen?",
        "a": "Für β≪1 gilt γ−1≈β²/2. Bei 250 m/s und einer Stunde Eigenzeit beträgt die Differenz≈1,252 Nanosekunden. Kleine Effekte sind messbar; es gibt keine allgemeine Sichtbarkeitsschwelle."
      },
      {
        "q": "Was ist die Eigenzeit?",
        "a": "Das Eigenzeitintervall wird zwischen zwei Ereignissen am selben Ort im Ruhesystem der Uhr gemessen. Im System, in dem die Uhr bewegt ist, beträgt dasselbe Intervall γτ. Keines der Inertialsysteme ist allgemein das wirkliche."
      },
      {
        "q": "Warum lässt sich die Lichtgeschwindigkeit nicht erreichen?",
        "a": "Bei eins geht der Ausdruck unter der Wurzel auf null und der Faktor gegen unendlich. Physikalisch heißt das, dass es unendlich viel Energie kostete, einen massebehafteten Körper zu beschleunigen."
      },
      {
        "q": "Verkürzt sich die Länge wirklich?",
        "a": "Ja, aber nur in Bewegungsrichtung und nur aus Sicht des ruhenden Beobachters. Für den bewegten Körper ändert sich nichts — für ihn verkürzt sich die umgebende Welt."
      },
      {
        "q": "Warum kann eine kleine Zeitdifferenz ungleich null bleiben?",
        "a": "Bei kleinem β kann das gerundete γ als 1 erscheinen. Die Differenz wird separat mit einem stabilen Ausdruck berechnet: β=10⁻⁹ und τ=10²⁰ s ergeben≈50 s. Die Rundung verdeckt Stellen, nicht den physikalischen Effekt."
      }
    ]
  },
  "es": {
    "longDescription": "Para dos sucesos en un mismo reloj móvil, el intervalo propio τ pasa a t=γτ en el sistema inercial donde el reloj se mueve con velocidad v. Introduce β=v/c y τ en segundos. Se muestran t, γ, t−τ y la fracción de longitud longitudinal L/L₀. No se modelan gravedad, aceleración ni el recorrido de un viaje.",
    "howToUse": [
      "La velocidad es una fracción de la velocidad de la luz y el intervalo propio se introduce en segundos.0,5 es la mitad;1 no se admite.",
      "La fila de longitud muestra el 100/γ por ciento restante, no el porcentaje de reducción. Con β=0,5 queda el 86,6025% de L₀: la disminución es≈13,3975%."
    ],
    "howItWorks": "γ=1/√((1−β)(1+β)); t=γτ; t−τ=τβ²/[√(1−β²)(1+√(1−β²))]; L/L₀=1/γ. Se admite 0≤β<1 y τ>0.",
    "example": "A la mitad de la velocidad de la luz un segundo del reloj en movimiento se estira hasta 1,155 s.",
    "faq": [
      {
        "q": "¿Por qué no se nota nada a velocidades cotidianas?",
        "a": "Para β≪1, γ−1≈β²/2. A 250 m/s durante una hora de tiempo propio la diferencia es≈1,252 nanosegundos. Los efectos pequeños se pueden medir; no existe un umbral universal de visibilidad."
      },
      {
        "q": "¿Qué es el tiempo propio?",
        "a": "El intervalo propio se mide entre dos sucesos en un mismo lugar del sistema del reloj. En el sistema donde se mueve, el intervalo es γτ. Ningún sistema inercial es universalmente el real."
      },
      {
        "q": "¿Por qué no se puede alcanzar la velocidad de la luz?",
        "a": "En uno la expresión bajo la raíz se hace cero y el factor tiende a infinito. Físicamente eso significa que acelerar un cuerpo con masa costaría una energía infinita."
      },
      {
        "q": "¿La longitud se contrae de verdad?",
        "a": "Sí, pero solo en la dirección del movimiento y solo desde el punto de vista del observador en reposo. Para el cuerpo en movimiento nada cambia: lo que se contrae es el mundo que lo rodea."
      },
      {
        "q": "¿Por qué una diferencia pequeña puede seguir siendo distinta de cero?",
        "a": "Con β pequeño, γ redondeado puede aparecer como 1. La diferencia se calcula por separado con una expresión estable: β=10⁻⁹ y τ=10²⁰ s dan≈50 s. El redondeo oculta cifras, no el efecto físico."
      }
    ]
  }
};
