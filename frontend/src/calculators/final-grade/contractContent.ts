import type { CalculatorCopy } from '../../lib/platform/types';
type Body = Pick<CalculatorCopy, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq'>;
export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Body> = {
  "ru": {
    "longDescription": "Считает от обратного: текущая оценка вносит свою долю, экзамен — оставшуюся, и разница показывает, что должен дать экзамен. Результат выше ста — это ответ, а не ошибка: он говорит, что цель одним экзаменом уже не берётся, и число сообщает, насколько именно.",
    "howToUse": [
      "Введите среднюю оценку завершённой части в процентах, до применения её веса.",
      "Введите итоговую оценку, к которой стремитесь.",
      "Укажите, какой вес имеет экзамен."
    ],
    "howItWorks": "Пусть C — средняя оценка за завершённую часть, T — цель, w — вес экзамена в процентах. Нужный балл X = [100T − C(100 − w)] / w. C и T находятся между 0 и 100; 0 < w ≤ 100. C — не уже начисленные взвешенные пункты. X > 100 означает недостижимую цель при максимуме экзамена 100; X ≤ 0 означает, что хватит нуля. Правила округления учреждения не учитываются.",
    "example": "При 78 процентах и весе экзамена 30 выход на 85 потребовал бы 101,33 — больше, чем экзамен может дать.",
    "faq": [
      {
        "q": "Что означает вес экзамена?",
        "a": "Долю, которую экзамен занимает в итоговой оценке. Остальное приходится на уже сделанную работу, и вместе они дают сто процентов."
      },
      {
        "q": "Почему ответ бывает больше ста?",
        "a": "Потому что цель этим экзаменом уже недостижима. Число сохраняется, чтобы был виден размер разрыва."
      },
      {
        "q": "Текущая оценка — это процент?",
        "a": "Да. Если курс оценивается по другой шкале, переведите её сначала: расчёт целиком ведётся в процентах."
      },
      {
        "q": "Переводится ли результат в оценку?",
        "a": "Нет. Шкалы различаются от школы к школе и от страны к стране, и без справочника любой перевод был бы выдумкой."
      }
    ]
  },
  "en": {
    "longDescription": "Works backwards from the grade you want: the current mark contributes its share, the exam contributes the rest, and the difference is what the exam has to deliver. A result above one hundred is an answer rather than an error — it says the target is out of reach with one exam, and the number tells you by how much.",
    "howToUse": [
      "Enter the percentage mean for the completed portion before weighting it.",
      "Enter the final grade you are aiming for.",
      "Enter how much the exam weighs."
    ],
    "howItWorks": "Let C be the mean for the completed portion, T the target, and w the exam weight in percent. Required score X = [100T − C(100 − w)] / w. C and T range from 0 to 100; 0 < w ≤ 100. C is not already weighted points earned. X > 100 is unattainable with an exam maximum of 100; X ≤ 0 means a zero exam score suffices. Institutional rounding rules are not included.",
    "example": "At 78 percent with an exam worth 30 percent, reaching 85 would need 101.33 — more than the exam can give.",
    "faq": [
      {
        "q": "What does exam weight mean?",
        "a": "The share the exam takes in the final grade. The rest comes from work already done, and the two add up to one hundred percent."
      },
      {
        "q": "Why can the answer exceed one hundred?",
        "a": "Because the target is no longer reachable with that single exam. The figure is kept so you can see how large the shortfall is."
      },
      {
        "q": "Is the current grade a percentage?",
        "a": "Yes. If your course marks out of a different scale, convert it first — the calculation works in percent throughout."
      },
      {
        "q": "Does this convert to a letter grade?",
        "a": "No. Letter scales differ by school and country, and without a reference table any conversion would be invented."
      }
    ]
  },
  "uk": {
    "longDescription": "Розрахунок відповідає на пряме питання: який бал потрібен на іспиті, щоб вийти на бажану підсумкову оцінку. Часто відповідь виявляється більшою за максимально можливу — і це теж корисний результат: ціль недосяжна, і краще знати про це заздалегідь.",
    "howToUse": [
      "Введіть середню оцінку завершеної частини у відсотках до застосування ваги.",
      "Введіть вагу іспиту у відсотках від підсумку.",
      "Введіть бажану підсумкову оцінку."
    ],
    "howItWorks": "Нехай C — середня оцінка завершеної частини, T — ціль, w — вага іспиту у відсотках. Потрібний бал X = [100T − C(100 − w)] / w. C і T від 0 до 100; 0 < w ≤ 100. C не є вже нарахованими зваженими пунктами. X > 100 означає недосяжну ціль за максимуму іспиту 100; X ≤ 0 означає, що достатньо нуля. Округлення закладу не враховується.",
    "example": "За 78 відсотків і ваги іспиту 30 вихід на 85 потребував би 101,33 — більше, ніж іспит може дати.",
    "faq": [
      {
        "q": "Що робити, якщо потрібен бал понад 100?",
        "a": "Ціль недосяжна: навіть максимум на іспиті її не дасть. Варіанти — перескласти попередні роботи, якщо це дозволено, або переглянути ціль."
      },
      {
        "q": "Чому вага іспиту так важлива?",
        "a": "Максимально можливе підвищення дорівнює w × (100 − C) / 100 процентних пунктів. Воно залежить і від поточної оцінки, і від ваги: за C = 60 та w = 20 максимум становить 8 пунктів."
      },
      {
        "q": "Чи можна цим рахувати кілька робіт?",
        "a": "Модель має одну майбутню оцінку. Об’єднати кілька робіт можна лише як їхній узгоджений зважений середній із сумарною вагою; послідовне застосування без перерахунку ваг може дати неправильний підсумок."
      },
      {
        "q": "Навіщо це знати заздалегідь?",
        "a": "Щоб розподілити зусилля. Якщо для потрібної оцінки достатньо 60 балів, розумніше витратити час на предмет, де ситуація критичніша."
      }
    ]
  },
  "de": {
    "longDescription": "Rechnet von der gewünschten Note rückwärts: die bisherige Leistung steuert ihren Anteil bei, die Prüfung den Rest, und die Differenz ist das, was die Prüfung liefern muss. Ein Ergebnis über hundert ist eine Antwort und kein Fehler — es sagt, dass das Ziel mit dieser einen Prüfung nicht mehr erreichbar ist, und die Zahl zeigt, um wie viel.",
    "howToUse": [
      "Trage den Prozentdurchschnitt des abgeschlossenen Teils vor der Gewichtung ein.",
      "Trage die angestrebte Endnote ein.",
      "Gib an, wie stark die Prüfung gewichtet wird."
    ],
    "howItWorks": "C ist der Durchschnitt des abgeschlossenen Teils, T das Ziel und w das Prüfungsgewicht in Prozent. Benötigte Note X = [100T − C(100 − w)] / w. C und T liegen zwischen 0 und 100; 0 < w ≤ 100. C bezeichnet keine bereits gewichteten Punkte. X > 100 ist bei höchstens 100 Prüfungspunkten unerreichbar; bei X ≤ 0 genügt eine null. Rundungsregeln einer Institution sind nicht enthalten.",
    "example": "Bei 78 Prozent und einer Prüfung mit 30 Prozent Gewicht bräuchte eine 85 als Endnote 101,33 — mehr, als die Prüfung hergeben kann.",
    "faq": [
      {
        "q": "Was bedeutet das Gewicht der Prüfung?",
        "a": "Den Anteil, den die Prüfung an der Endnote hat. Der Rest kommt aus bereits erbrachten Leistungen, zusammen ergeben beide hundert Prozent."
      },
      {
        "q": "Warum kann die Antwort über hundert liegen?",
        "a": "Weil das Ziel mit dieser einen Prüfung nicht mehr erreichbar ist. Die Zahl bleibt stehen, damit du siehst, wie groß der Rückstand ist."
      },
      {
        "q": "Wird die aktuelle Note in Prozent angegeben?",
        "a": "Ja. Wenn dein Kurs eine andere Skala benutzt, rechne sie vorher um — die Rechnung läuft durchgehend in Prozent."
      },
      {
        "q": "Wird das in eine Notenstufe umgerechnet?",
        "a": "Nein. Notenskalen unterscheiden sich nach Schule und Land, und ohne Referenztabelle wäre jede Umrechnung erfunden."
      }
    ]
  },
  "es": {
    "longDescription": "Trabaja hacia atrás desde la nota que quieres: la nota actual aporta su parte, el examen aporta el resto, y la diferencia es lo que tiene que dar el examen. Un resultado por encima de cien es una respuesta y no un error: dice que el objetivo queda fuera de alcance con un solo examen, y la cifra indica por cuánto.",
    "howToUse": [
      "Introduce la media porcentual de la parte completada antes de ponderarla.",
      "Introduce la nota final a la que aspiras.",
      "Introduce cuánto pesa el examen."
    ],
    "howItWorks": "C es la media de la parte completada, T el objetivo y w el peso del examen en porcentaje. Nota necesaria X = [100T − C(100 − w)] / w. C y T están entre 0 y 100; 0 < w ≤ 100. C no son puntos ya ponderados. X > 100 es inalcanzable si el examen tiene un máximo de 100; X ≤ 0 significa que basta un cero. No se aplican reglas institucionales de redondeo.",
    "example": "Con un 78 por ciento y un examen que pesa el 30 por ciento, llegar al 85 exigiría un 101,33: más de lo que el examen puede dar.",
    "faq": [
      {
        "q": "¿Qué significa el peso del examen?",
        "a": "La parte que ocupa el examen en la nota final. El resto viene del trabajo ya hecho, y los dos suman cien por cien."
      },
      {
        "q": "¿Por qué la respuesta puede pasar de cien?",
        "a": "Porque el objetivo ya no es alcanzable con ese único examen. La cifra se conserva para que veas cuán grande es el desfase."
      },
      {
        "q": "¿La nota actual va en porcentaje?",
        "a": "Sí. Si tu asignatura califica en otra escala, conviértela antes: el cálculo trabaja en porcentaje de principio a fin."
      },
      {
        "q": "¿Convierte a una calificación por letras?",
        "a": "No. Las escalas de letras varían según el centro y el país, y sin una tabla de referencia cualquier conversión sería inventada."
      }
    ]
  }
};
