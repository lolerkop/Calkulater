// Individually reviewed against all five actual188 native bodies; human editorial review pending.
export const contract = {
  "ru": {
    "longDescription": "Найдите полный период движения туда и обратно для математического маятника в приближении малых углов. Длина измеряется от точки подвеса до центра массы компактного груза. Полный период 1 с требует около 24,84 см при g=9,80665 м/с²; традиционный секундный маятник делает половину колебания за секунду и имеет полный период 2 с, то есть длину около 99,36 см.",
    "howToUse": [
      "Ускорение свободного падения можно менять: на Луне 1,62, на Марсе 3,72 м/с².",
      "Масса груза на период не влияет — её в формуле нет.",
      "Угол здесь не вводится: рост периода при большой амплитуде не рассчитывается. Масса сокращается только в этой модели математического маятника."
    ],
    "howItWorks": "T = 2π√(L/g); частота = 1/T.",
    "example": "Метровый подвес качается с периодом 2,006 с — почти две секунды, а не одну.",
    "faq": [
      {
        "q": "Почему масса не влияет на период?",
        "a": "Тяжёлый груз сильнее притягивается, но и разогнать его труднее ровно во столько же раз. Масса входит и в силу, и в инертность, поэтому сокращается — как и при свободном падении."
      },
      {
        "q": "Какой длины секундный маятник?",
        "a": "Название традиционно означает полупериод 1 с, то есть полный период 2 с. L=gT²/(4π²) даёт 0,9936 м при g=9,80665 м/с². Строка калькулятора «Длина для периода 1 с» относится к полному периоду и даёт вчетверо меньшую длину 0,2484 м."
      },
      {
        "q": "Почему формула верна только для малых отклонений?",
        "a": "Используется sinθ≈θ при θ в радианах. Ошибка растёт непрерывно с амплитудой, резкой границы 15° нет. Полный нелинейный период зависит от амплитуды; этот калькулятор его не вычисляет."
      },
      {
        "q": "Как маятником измеряли g?",
        "a": "Измеряли длину и период — и получали g из формулы. Метод давал точность до долей процента и позволил обнаружить, что на экваторе тяжесть слабее, чем у полюсов."
      }
    ],
    "disclaimer": "Компактный груз, невесомый нерастяжимый подвес, малые углы и постоянное g; сопротивление воздуха и потери не учитываются. Это полный период, не время одного прохода между крайними точками."
  },
  "en": {
    "longDescription": "Find the full out-and-back period of a simple pendulum in the small-angle approximation. Measure length from the pivot to the centre of mass of a compact bob. A full 1 s period needs about 24.84 cm at g=9.80665 m/s²; a traditional seconds pendulum takes 1 s for half a swing, has a full 2 s period and is about 99.36 cm long.",
    "howToUse": [
      "Gravity is adjustable: 1.62 on the Moon, 3.72 m/s² on Mars.",
      "The mass of the bob does not affect the period — it is not in the formula.",
      "No angle is entered, so large-amplitude period growth is not computed. Mass cancels in this simple-pendulum model."
    ],
    "howItWorks": "T = 2π√(L/g); frequency = 1/T.",
    "example": "A one-metre string swings with a period of 2.006 s — nearly two seconds, not one.",
    "faq": [
      {
        "q": "Why does mass not affect the period?",
        "a": "A heavier bob is pulled harder but is exactly that much harder to accelerate. Mass enters both the force and the inertia, so it cancels — just as it does in free fall."
      },
      {
        "q": "How long is a seconds pendulum?",
        "a": "The traditional name means a 1 s half-period, hence a full 2 s period. L=gT²/(4π²) gives 0.9936 m at g=9.80665 m/s². The calculator’s “Length for a 1 s period” row uses a full period and gives one quarter of that length, 0.2484 m."
      },
      {
        "q": "Why only small swings?",
        "a": "It uses sinθ≈θ with θ in radians. Error grows continuously with amplitude; there is no sharp 15° boundary. The full nonlinear period depends on amplitude and is not computed here."
      },
      {
        "q": "How was g measured with a pendulum?",
        "a": "By measuring length and period and solving the formula. The method reached a fraction of a per cent and revealed that gravity is weaker at the equator than at the poles."
      }
    ],
    "disclaimer": "Compact bob, massless inextensible suspension, small angles and constant g; no air drag or damping. This is the full period, not the time between opposite turning points."
  },
  "uk": {
    "longDescription": "Знайдіть повний період руху туди й назад для математичного маятника в наближенні малих кутів. Довжину вимірюйте від точки підвісу до центра маси компактного вантажу. Повний період 1 с потребує близько 24,84 см за g=9,80665 м/с²; традиційний секундний маятник має півперіод 1 с, повний період 2 с і довжину близько 99,36 см.",
    "howToUse": [
      "Введіть довжину підвісу в метрах.",
      "За потреби змініть прискорення вільного падіння.",
      "Прочитайте період і частоту коливань.",
      "Кут не вводиться, тому збільшення періоду за великої амплітуди не розраховується. Маса скорочується саме в цій моделі математичного маятника."
    ],
    "howItWorks": "Період рахується як T = 2π√(L/g), частота дорівнює 1/T. Формула справедлива для малих коливань — приблизно до 15 градусів, де синус кута можна замінити самим кутом.",
    "example": "Метровий підвіс має повний період 2,006 с. Для повного періоду 1 с довжина становить 0,2484 м; для традиційного секундного маятника з півперіодом 1 с — 0,9936 м.",
    "faq": [
      {
        "q": "Чому період не залежить від маси?",
        "a": "Бо маса входить і в силу тяжіння, і в інерцію тіла, і в рівнянні руху скорочується. Той самий підвіс із важким і легким вантажем гойдається однаково."
      },
      {
        "q": "Чи залежить період від амплітуди?",
        "a": "Використовується sinθ≈θ для θ у радіанах. Похибка зростає безперервно з амплітудою; різкої межі 15° немає. Повний нелінійний період залежить від амплітуди й тут не обчислюється."
      },
      {
        "q": "Чому маятник довший за метр гойдається повільніше?",
        "a": "Бо період росте як корінь із довжини. Щоб подвоїти період, підвіс треба зробити вчетверо довшим."
      },
      {
        "q": "Навіщо змінювати прискорення вільного падіння?",
        "a": "Щоб порахувати маятник на іншій широті, у горах або на іншому небесному тілі. На Місяці з g = 1,62 м/с² той самий метровий підвіс гойдався б із періодом близько 4,9 с."
      }
    ],
    "disclaimer": "Компактний вантаж, невагомий нерозтяжний підвіс, малі кути та стале g; без опору повітря й втрат. Це повний період, не час між протилежними крайніми точками."
  },
  "de": {
    "longDescription": "Berechne die vollständige Hin-und-zurück-Schwingungsdauer eines Fadenpendels in der Kleinwinkelnäherung. Die Länge reicht vom Aufhängepunkt zum Massenmittelpunkt eines kompakten Pendelkörpers. Für einen vollen Zeitraum von 1 s sind bei g=9,80665 m/s² etwa 24,84 cm nötig. Ein traditionelles Sekundenpendel braucht 1 s pro Halbschwingung, insgesamt 2 s, und ist etwa 99,36 cm lang.",
    "howToUse": [
      "Die Fallbeschleunigung ist einstellbar: 1,62 auf dem Mond, 3,72 m/s² auf dem Mars.",
      "Die Masse des Pendelkörpers wirkt sich nicht auf die Dauer aus — sie steht nicht in der Formel.",
      "Ein Winkel wird nicht eingegeben; die Verlängerung der Periode bei großer Amplitude wird daher nicht berechnet. Die Masse kürzt sich in diesem Fadenpendelmodell heraus."
    ],
    "howItWorks": "T = 2π√(L/g); Frequenz = 1/T.",
    "example": "Ein Faden von einem Meter schwingt mit einer Dauer von 2,006 s — beinahe zwei Sekunden und nicht eine.",
    "faq": [
      {
        "q": "Warum wirkt sich die Masse nicht auf die Dauer aus?",
        "a": "Ein schwererer Körper wird stärker gezogen, ist aber genau so viel schwerer zu beschleunigen. Die Masse geht sowohl in die Kraft als auch in die Trägheit ein und kürzt sich heraus — genauso wie beim freien Fall."
      },
      {
        "q": "Wie lang ist ein Sekundenpendel?",
        "a": "Die traditionelle Bezeichnung meint eine Halbperiode von 1 s, also eine volle Periode von 2 s. L=gT²/(4π²) ergibt bei g=9,80665 m/s² 0,9936 m. Die Rechnerzeile „Länge für eine Periode von 1 s“ nutzt die volle Periode und liefert ein Viertel davon: 0,2484 m."
      },
      {
        "q": "Warum nur kleine Ausschläge?",
        "a": "Es gilt sinθ≈θ für θ im Bogenmaß. Der Fehler wächst stetig mit der Amplitude; bei 15° gibt es keine scharfe Grenze. Die vollständige nichtlineare Periode hängt von der Amplitude ab und wird hier nicht berechnet."
      },
      {
        "q": "Wie wurde g mit einem Pendel gemessen?",
        "a": "Durch Messen von Länge und Dauer und Auflösen der Formel. Das Verfahren erreichte Bruchteile eines Prozents und zeigte, dass die Schwerkraft am Äquator schwächer ist als an den Polen."
      }
    ],
    "disclaimer": "Kompakter Pendelkörper, masselose nicht dehnbare Aufhängung, kleine Winkel und konstantes g; ohne Luftwiderstand und Dämpfung. Dies ist die volle Periode, nicht die Zeit zwischen gegenüberliegenden Umkehrpunkten."
  },
  "es": {
    "longDescription": "Calcula el periodo completo de ida y vuelta de un péndulo simple con la aproximación de ángulos pequeños. Mide la longitud desde el punto de suspensión hasta el centro de masas de una lenteja compacta. Un periodo completo de 1 s necesita unos 24,84 cm con g=9,80665 m/s²; el péndulo de segundos tradicional tarda 1 s por medio ciclo, tiene periodo total de 2 s y mide unos 99,36 cm.",
    "howToUse": [
      "La gravedad es ajustable: 1,62 en la Luna y 3,72 m/s² en Marte.",
      "La masa de la lenteja no afecta al periodo: no está en la fórmula.",
      "No se introduce un ángulo, por lo que no se calcula el aumento del periodo con gran amplitud. La masa se cancela en este modelo de péndulo simple."
    ],
    "howItWorks": "T = 2π√(L/g); frecuencia = 1/T.",
    "example": "Un hilo de un metro oscila con un periodo de 2,006 s: casi dos segundos, no uno.",
    "faq": [
      {
        "q": "¿Por qué la masa no afecta al periodo?",
        "a": "Una lenteja más pesada es atraída con más fuerza, pero cuesta exactamente eso mismo más acelerarla. La masa entra tanto en la fuerza como en la inercia, así que se cancela, igual que en la caída libre."
      },
      {
        "q": "¿Cuánto mide un péndulo de segundos?",
        "a": "El nombre tradicional significa medio periodo de 1 s, por tanto un periodo completo de 2 s. L=gT²/(4π²) da 0,9936 m con g=9,80665 m/s². La fila «Longitud para un periodo de 1 s» usa el periodo completo y da una cuarta parte: 0,2484 m."
      },
      {
        "q": "¿Por qué solo oscilaciones pequeñas?",
        "a": "Usa sinθ≈θ con θ en radianes. El error aumenta continuamente con la amplitud; no hay un límite brusco en 15°. El periodo no lineal completo depende de la amplitud y no se calcula aquí."
      },
      {
        "q": "¿Cómo se medía g con un péndulo?",
        "a": "Midiendo longitud y periodo y despejando la fórmula. El método llegaba a fracciones de por ciento y reveló que la gravedad es menor en el ecuador que en los polos."
      }
    ],
    "disclaimer": "Lenteja compacta, suspensión sin masa e inextensible, ángulos pequeños y g constante; sin resistencia del aire ni amortiguamiento. Es el periodo completo, no el tiempo entre extremos opuestos."
  }
};
