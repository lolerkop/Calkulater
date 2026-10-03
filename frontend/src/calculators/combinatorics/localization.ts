import type { CalculatorLocalization } from '../../lib/platform/types';
import { runtimeScalarPhrases } from '../../lib/platform/runtimeScalarPhrases';

// Final effective owned bundles; overwritten intermediate maps removed after deep equality proof.
export const localization:CalculatorLocalization={
  "de": {
    fields: {"mode": "Was gezählt wird", "repetition": "Wiederholung erlauben", "n": "Größe der Menge n", "k": "Größe der Auswahl k"},
    options: {"combinations": "Kombinationen", "permutations": "Variationen", "no": "Nein", "yes": "Ja"},
    results: { ...runtimeScalarPhrases("de",[8]),"Количество вариантов": "Zahl der Möglichkeiten", "Формула": "Formel", "Научная форма": "Wissenschaftliche Schreibweise", "Порядок важен": "Reihenfolge zählt", "Повторения разрешены": "Wiederholung erlaubt", "Размещений из тех же чисел": "Variationen aus denselben Zahlen", "Сочетаний из тех же чисел": "Kombinationen aus denselben Zahlen" },
    values: {"да": "ja", "нет": "nein", "Оба числа должны быть целыми и неотрицательными": "Beide Zahlen müssen ganz und nicht negativ sein", "Числа больше тысячи выходят за практический предел расчёта": "Zahlen über tausend liegen jenseits der praktischen Grenze dieser Rechnung", "Без повторений выборка не может быть больше множества": "Ohne Wiederholung kann die Auswahl nicht größer als die Menge sein", "Выберите сочетания или размещения": "Wählen Sie Kombinationen oder Variationen", "Выберите, разрешены ли повторения": "Wählen Sie, ob Wiederholungen erlaubt sind", "Пустая выборка: 1 способ": "Leere Auswahl:1 Möglichkeit"},
  },
  "en": {
    fields: {"mode": "What to count", "repetition": "Allow repetition", "n": "Set size n", "k": "Sample size k"},
    options: {"combinations": "combinations", "permutations": "permutations", "no": "No", "yes": "Yes"},
    results: { ...runtimeScalarPhrases("en",[6]),"Количество вариантов": "Number of ways", "Формула": "Formula", "Научная форма": "Scientific form", "Порядок важен": "Order matters", "Повторения разрешены": "Repetition allowed", "Размещений из тех же чисел": "Permutations of the same numbers", "Сочетаний из тех же чисел": "Combinations of the same numbers" },
    values: {"да": "yes", "нет": "no", "Оба числа должны быть целыми и неотрицательными": "Both numbers must be whole and non-negative", "Числа больше тысячи выходят за практический предел расчёта": "Numbers above a thousand are beyond the practical limit here", "Без повторений выборка не может быть больше множества": "Without repetition the sample cannot exceed the set", "Выберите сочетания или размещения": "Choose combinations or permutations", "Выберите, разрешены ли повторения": "Choose whether repetition is allowed", "Пустая выборка: 1 способ": "Empty selection:1 way"},
  },
  "uk": {
    fields: {"mode": "Що рахуємо", "repetition": "Дозволити повторення", "n": "Розмір множини n", "k": "Розмір вибірки k"},
    options: {"combinations": "сполучення", "permutations": "розміщення", "no": "Ні", "yes": "Так"},
    results: { ...runtimeScalarPhrases("uk",[8]),"Количество вариантов": "Кількість варіантів", "Формула": "Формула", "Научная форма": "Наукова форма", "Порядок важен": "Порядок важливий", "Повторения разрешены": "Повторення дозволені", "Размещений из тех же чисел": "Розміщень із тих самих чисел", "Сочетаний из тех же чисел": "Сполучень із тих самих чисел" },
    values: {"да": "так", "нет": "ні", "Оба числа должны быть целыми и неотрицательными": "Обидва числа мають бути цілими й невід’ємними", "Числа больше тысячи выходят за практический предел расчёта": "Числа більші за тисячу виходять за практичну межу розрахунку", "Без повторений выборка не может быть больше множества": "Без повторень вибірка не може бути більшою за множину", "Выберите сочетания или размещения": "Виберіть сполучення або розміщення", "Выберите, разрешены ли повторения": "Виберіть, чи дозволені повторення", "Пустая выборка: 1 способ": "Порожня вибірка:1 спосіб"},
  },
  "es": {
    fields: {"mode": "Qué contar", "repetition": "Permitir repetición", "n": "Tamaño del conjunto n", "k": "Tamaño de la muestra k"},
    options: {"combinations": "combinaciones", "permutations": "permutaciones", "yes": "Sí", "no": "No"},
    results: { ...runtimeScalarPhrases("es",[7]),"Количество вариантов": "Número de posibilidades", "Формула": "Fórmula", "Научная форма": "Notación científica", "Порядок важен": "El orden importa", "Повторения разрешены": "Se permite repetición", "Размещений из тех же чисел": "Permutaciones con los mismos números", "Сочетаний из тех же чисел": "Combinaciones con los mismos números" },
    values: {"да": "sí", "нет": "no", "Оба числа должны быть целыми и неотрицательными": "Ambos números deben ser enteros y no negativos", "Числа больше тысячи выходят за практический предел расчёта": "Los números mayores de mil superan el límite práctico de este cálculo", "Без повторений выборка не может быть больше множества": "Sin repetición, la muestra no puede superar al conjunto", "Выберите сочетания или размещения": "Elija combinaciones o permutaciones", "Выберите, разрешены ли повторения": "Elija si se permiten repeticiones", "Пустая выборка: 1 способ": "Selección vacía:1 forma"},
  },
};
