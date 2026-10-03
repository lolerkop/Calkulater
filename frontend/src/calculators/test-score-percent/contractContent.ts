import type { CalculatorCopy } from '../../lib/platform/types';
type Body = Pick<CalculatorCopy, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq'>;
export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Body> = {
  "ru": {
    "longDescription": "Делит правильные ответы на общее число вопросов и показывает процент, количество ошибок и их долю. Если задать проходной балл, к результату добавится вердикт. Знаменателем служат все вопросы теста, поэтому пропуск обходится так же дорого, как и неверный ответ.",
    "howToUse": [
      "Введите число правильных ответов.",
      "Введите общее число вопросов теста.",
      "При желании задайте проходной балл для вердикта."
    ],
    "howItWorks": "Процент = правильные / всего × 100; ошибки = всего − правильные. Все вопросы имеют одинаковый вес, ответы считаются целыми числами: частичные баллы не поддерживаются. Проходной балл сравнивается с неокруглённым процентом. Пустое поле или 0 отключают вердикт; порог должен быть от 0 до 100.",
    "example": "18 правильных из 20 вопросов дают 18 ÷ 20 × 100 = 90 процентов.",
    "faq": [
      {
        "q": "Почему нет перевода в оценку?",
        "a": "Шкалы оценок различаются от школы к школе и от страны к стране. Без справочника такой перевод был бы выдумкой, поэтому результат остаётся процентом."
      },
      {
        "q": "Считаются ли пропущенные вопросы?",
        "a": "Да. Знаменателем служит весь тест, поэтому неотвеченный вопрос стоит столько же, сколько неверный."
      },
      {
        "q": "Что будет, если правильных больше, чем вопросов?",
        "a": "Такой ввод отвергается. Арифметика спокойно вернула бы 105 процентов — число, похожее на ответ, но означающее ошибку ввода."
      },
      {
        "q": "Обязательно ли указывать проходной балл?",
        "a": "Нет, поле необязательное. Оставьте его пустым, и вы просто получите процент без вердикта."
      }
    ]
  },
  "en": {
    "longDescription": "Divides correct answers by the total number of questions and shows the percentage, the number of errors and the share they represent. Give a pass mark and the result gains a verdict. The denominator is every question on the test, so skipping one costs you the same as answering it wrongly.",
    "howToUse": [
      "Enter how many answers were correct.",
      "Enter how many questions the test had.",
      "Add a pass mark if you want a verdict."
    ],
    "howItWorks": "Percentage = correct / total × 100; wrong = total − correct. Every question has the same weight, and counts are integers; partial credit is not supported. The threshold is compared with the unrounded percentage. A blank threshold or 0 disables the verdict; the threshold must range from 0 to 100.",
    "example": "18 correct out of 20 questions is 18 ÷ 20 × 100 = 90 percent.",
    "faq": [
      {
        "q": "Why can I not get a letter grade?",
        "a": "Grade scales differ between schools and countries. Without a reference table the conversion would be made up, so the result stays a percentage."
      },
      {
        "q": "Do skipped questions count against me?",
        "a": "Yes. The denominator is the whole test, so an unanswered question counts the same as a wrong one."
      },
      {
        "q": "What happens if I enter more correct answers than questions?",
        "a": "That is rejected. The arithmetic would happily return 105 percent, which looks like an answer but is an input error."
      },
      {
        "q": "Is the pass mark required?",
        "a": "No, it is optional. Leave it empty and you simply get the percentage without a verdict."
      }
    ]
  },
  "uk": {
    "longDescription": "Переведення правильних відповідей у відсотки потрібне там, де тести мають різну кількість питань: 18 із 20 і 27 із 30 — це однакові 90 %, хоча числа різні. Саме у відсотках і задають пороги проходження.",
    "howToUse": [
      "Введіть кількість правильних відповідей.",
      "Введіть загальну кількість питань.",
      "Прочитайте відсоток і кількість помилок."
    ],
    "howItWorks": "Відсоток = правильні / всього × 100; помилки = всього − правильні. Усі питання мають однакову вагу, кількості — цілі числа; часткові бали не підтримуються. Поріг порівнюється з неокругленим відсотком. Порожнє поле або 0 вимикають висновок; поріг має бути від 0 до 100.",
    "example": "18 правильних із 20 питань дають 18 ÷ 20 × 100 = 90 відсотків.",
    "faq": [
      {
        "q": "Навіщо переводити у відсотки?",
        "a": "Щоб порівнювати тести різної довжини. 18 із 20 і 27 із 30 — це однакові 90 %, і саме у відсотках задають пороги проходження."
      },
      {
        "q": "Скільки помилок можна допустити?",
        "a": "За порога 80 % у тесті з 25 рівновагомих питань потрібно щонайменше 20 правильних, тобто можна мати 5 помилок. Калькулятор показує фактичну кількість помилок для вашого вводу, а не окремий максимум допустимих."
      },
      {
        "q": "Чи враховуються питання з частковим балом?",
        "a": "Ні, розрахунок припускає, що відповідь або правильна, або ні. Для тестів із частковим зарахуванням потрібен підрахунок за балами, а не за питаннями."
      },
      {
        "q": "Як округлювати результат?",
        "a": "Відсоток показується з двома десятковими знаками, але висновок використовує неокруглену частку. Тому 79,6 % за порога 80 % тут не проходить. Власні правила закладу щодо округлення не застосовуються."
      }
    ]
  },
  "de": {
    "longDescription": "Teilt die richtigen Antworten durch die Gesamtzahl der Fragen und zeigt den Prozentwert, die Zahl der Fehler und deren Anteil. Gibst du eine Bestehensgrenze an, kommt ein Urteil dazu. Im Nenner steht jede Frage des Tests, eine übersprungene kostet dich also genauso viel wie eine falsch beantwortete.",
    "howToUse": [
      "Trage ein, wie viele Antworten richtig waren.",
      "Trage ein, wie viele Fragen der Test hatte.",
      "Ergänze eine Bestehensgrenze, wenn du ein Urteil möchtest."
    ],
    "howItWorks": "Prozent = richtig / insgesamt × 100; falsch = insgesamt − richtig. Alle Fragen haben dasselbe Gewicht, die Anzahlen sind ganzzahlig; Teilpunkte werden nicht unterstützt. Der Grenzwert wird mit dem ungerundeten Prozentwert verglichen. Ein leeres Feld oder 0 deaktiviert die Bewertung; zulässig sind Grenzwerte von 0 bis 100.",
    "example": "18 richtige von 20 Fragen sind 18 ÷ 20 × 100 = 90 Prozent.",
    "faq": [
      {
        "q": "Warum bekomme ich keine Notenstufe?",
        "a": "Notenskalen unterscheiden sich nach Schule und Land. Ohne Referenztabelle wäre die Umrechnung erfunden, deshalb bleibt das Ergebnis ein Prozentwert."
      },
      {
        "q": "Zählen übersprungene Fragen gegen mich?",
        "a": "Ja. Im Nenner steht der ganze Test, eine unbeantwortete Frage zählt also wie eine falsche."
      },
      {
        "q": "Was passiert, wenn ich mehr richtige Antworten als Fragen eintrage?",
        "a": "Das wird abgewiesen. Die Rechnung würde bereitwillig 105 Prozent liefern — das sieht aus wie eine Antwort, ist aber ein Eingabefehler."
      },
      {
        "q": "Muss ich eine Bestehensgrenze angeben?",
        "a": "Nein, das Feld ist freiwillig. Lässt du es leer, bekommst du einfach den Prozentwert ohne Urteil."
      }
    ]
  },
  "es": {
    "longDescription": "Divide las respuestas correctas entre el número total de preguntas y muestra el porcentaje, el número de fallos y la proporción que representan. Indica una nota de corte y el resultado gana un veredicto. El denominador son todas las preguntas del test, así que dejar una en blanco cuesta lo mismo que fallarla.",
    "howToUse": [
      "Introduce cuántas respuestas fueron correctas.",
      "Introduce cuántas preguntas tenía el test.",
      "Añade una nota de corte si quieres un veredicto."
    ],
    "howItWorks": "Porcentaje = correctas / total × 100; errores = total − correctas. Todas las preguntas pesan lo mismo y las cantidades son enteras; no se admite crédito parcial. El umbral se compara con el porcentaje sin redondear. Un umbral vacío o 0 desactiva el veredicto; debe estar entre 0 y 100.",
    "example": "18 aciertos de 20 preguntas son 18 ÷ 20 × 100 = 90 por ciento.",
    "faq": [
      {
        "q": "¿Por qué no obtengo una calificación por letras?",
        "a": "Las escalas de calificación difieren entre centros y países. Sin una tabla de referencia la conversión sería inventada, así que el resultado se queda en porcentaje."
      },
      {
        "q": "¿Las preguntas en blanco cuentan en mi contra?",
        "a": "Sí. El denominador es todo el test, así que una pregunta sin responder cuenta igual que una fallada."
      },
      {
        "q": "¿Qué pasa si introduzco más respuestas correctas que preguntas?",
        "a": "Se rechaza. La aritmética devolvería tan tranquila un 105 por ciento, que parece una respuesta pero es un error de entrada."
      },
      {
        "q": "¿La nota de corte es obligatoria?",
        "a": "No, es opcional. Déjala vacía y obtendrás simplemente el porcentaje, sin veredicto."
      }
    ]
  }
};
