import type { CalculatorLocalization } from '../../lib/platform/types';
import { runtimeScalarPhrases } from '../../lib/platform/runtimeScalarPhrases';

// Final effective owned bundles; overwritten intermediate maps removed after deep equality proof.
export const localization:CalculatorLocalization={
  "en": {
    fields: {"mode": "What to work out", "goal": "Goal amount", "initial": "Already saved", "rate": "Annual rate, %", "years": "Term, years", "monthly": "Monthly contribution"},
    options: {"payment": "Monthly contribution", "term": "How long it takes"},
    results: { ...runtimeScalarPhrases("en",[6]),"Взнос в месяц": "Monthly contribution", "Срок": "Term", "В годах": "In years", "Месяцев": "Months", "Всего взносов": "Contributions in total", "Начислено процентов": "Interest earned", "Итоговая сумма": "Final amount", "Цель": "Goal" },
    values: { ...runtimeScalarPhrases("en",[15, 10, 0, 4, 7, 5]),"мес": "mo", "Цель должна быть больше нуля": "The goal must be greater than zero", "Начальная сумма не может быть отрицательной": "The starting amount cannot be negative", "Ставка должна быть от 0 до 100 % годовых": "The rate must be between 0 and 100 % a year", "Ежемесячный взнос должен быть больше нуля": "The monthly contribution must be greater than zero", "За сто лет цель не достигается: увеличьте взнос": "The goal is not reached within a hundred years — increase the contribution" },
  },
  "uk": {
    fields: {"mode": "Що порахувати", "goal": "Сума цілі", "initial": "Уже накопичено", "rate": "Річна ставка, %", "years": "Строк, років", "monthly": "Щомісячний внесок"},
    options: {"payment": "Щомісячний внесок", "term": "За скільки накопиться"},
    results: { ...runtimeScalarPhrases("uk",[8]),"Взнос в месяц": "Внесок на місяць", "Срок": "Строк", "В годах": "У роках", "Месяцев": "Місяців", "Всего взносов": "Усього внесків", "Начислено процентов": "Нараховано відсотків", "Итоговая сумма": "Підсумкова сума", "Цель": "Ціль" },
    values: { ...runtimeScalarPhrases("uk",[16, 1, 6, 9, 7]),"мес": "міс", "Цель должна быть больше нуля": "Ціль має бути більшою за нуль", "Начальная сумма не может быть отрицательной": "Початкова сума не може бути від'ємною", "Ставка должна быть от 0 до 100 % годовых": "Ставка має бути від 0 до 100 % річних", "Ежемесячный взнос должен быть больше нуля": "Щомісячний внесок має бути більшим за нуль", "За сто лет цель не достигается: увеличьте взнос": "За сто років ціль не досягається — збільште внесок", "Срок должен быть не меньше месяца": "Строк має бути щонайменше місяць" },
  },
  "de": {
    fields: {"mode": "Was gesucht ist", "goal": "Zielbetrag", "initial": "Bereits gespart", "rate": "Jahreszins, %", "years": "Laufzeit, Jahre", "monthly": "Monatlicher Beitrag"},
    options: {"payment": "Monatlicher Beitrag", "term": "Wie lange es dauert"},
    results: { ...runtimeScalarPhrases("de",[8]),"Взнос в месяц": "Beitrag im Monat", "Срок": "Dauer", "В годах": "In Jahren", "Месяцев": "Monate", "Всего взносов": "Beiträge insgesamt", "Начислено процентов": "Erhaltene Zinsen", "Итоговая сумма": "Endbetrag", "Цель": "Ziel" },
    values: { ...runtimeScalarPhrases("de",[16, 11, 2, 6, 10, 7]),"мес": "Mon.", "Цель должна быть больше нуля": "Das Ziel muss größer als null sein", "Начальная сумма не может быть отрицательной": "Der Anfangsbetrag kann nicht negativ sein", "Ставка должна быть от 0 до 100 % годовых": "Der Zinssatz muss zwischen 0 und 100 % im Jahr liegen", "Ежемесячный взнос должен быть больше нуля": "Der monatliche Beitrag muss größer als null sein", "За сто лет цель не достигается: увеличьте взнос": "In hundert Jahren wird das Ziel nicht erreicht — erhöhe den Beitrag" },
  },
  "es": {
    fields: {"mode": "Qué calcular", "goal": "Importe objetivo", "initial": "Ya ahorrado", "rate": "Tipo anual, %", "years": "Plazo, años", "monthly": "Aportación mensual"},
    options: {"payment": "Aportación mensual", "term": "Cuánto tarda"},
    results: { ...runtimeScalarPhrases("es",[7]),"Взнос в месяц": "Aportación mensual", "Срок": "Plazo", "В годах": "En años", "Месяцев": "Meses", "Всего взносов": "Aportaciones en total", "Начислено процентов": "Intereses generados", "Итоговая сумма": "Importe final", "Цель": "Objetivo" },
    values: { ...runtimeScalarPhrases("es",[15, 11, 0, 4, 9, 6]),"мес": "mes", "Цель должна быть больше нуля": "El objetivo debe ser mayor que cero", "Начальная сумма не может быть отрицательной": "El importe inicial no puede ser negativo", "Ставка должна быть от 0 до 100 % годовых": "El tipo debe estar entre el 0 y el 100 % anual", "Ежемесячный взнос должен быть больше нуля": "La aportación mensual debe ser mayor que cero", "За сто лет цель не достигается: увеличьте взнос": "El objetivo no se alcanza en cien años: aumenta la aportación" },
  },
};
