import type { CalculatorLocalization } from '../../lib/platform/types';
import { runtimeScalarPhrases } from '../../lib/platform/runtimeScalarPhrases';

// Final effective owned bundles; overwritten intermediate maps removed after deep equality proof.
export const localization:CalculatorLocalization={
  "en": {
    fields: {"begin": "Starting value", "end": "Ending value", "years": "Number of years"},
    results: { ...runtimeScalarPhrases("en",[6]),"Среднегодовой рост": "Annual growth rate", "Общий рост за срок": "Total growth over the period", "Множитель": "Multiple", "Начальная стоимость": "Starting value", "Конечная стоимость": "Ending value", "Срок": "Years" },
    values: { ...runtimeScalarPhrases("en",[0, 4, 7]),"Начальная стоимость должна быть больше нуля": "The starting value must be greater than zero", "Конечная стоимость должна быть больше нуля": "The ending value must be greater than zero", "Срок должен быть больше нуля": "The number of years must be greater than zero" },
    options: {},
  },
  "uk": {
    fields: {"begin": "Початкова вартість", "end": "Кінцева вартість", "years": "Кількість років"},
    results: { ...runtimeScalarPhrases("uk",[8]),"Среднегодовой рост": "Середньорічне зростання", "Общий рост за срок": "Загальне зростання за строк", "Множитель": "Множник", "Начальная стоимость": "Початкова вартість", "Конечная стоимость": "Кінцева вартість", "Срок": "Строк" },
    values: { ...runtimeScalarPhrases("uk",[11, 1, 6, 9]),"Начальная стоимость должна быть больше нуля": "Початкова вартість має бути більшою за нуль", "Конечная стоимость должна быть больше нуля": "Кінцева вартість має бути більшою за нуль" },
    options: {},
  },
  "de": {
    fields: {"begin": "Anfangswert", "end": "Endwert", "years": "Zahl der Jahre"},
    results: { ...runtimeScalarPhrases("de",[8]),"Среднегодовой рост": "Jährliche Wachstumsrate", "Общий рост за срок": "Gesamtwachstum über den Zeitraum", "Множитель": "Faktor", "Начальная стоимость": "Anfangswert", "Конечная стоимость": "Endwert", "Срок": "Jahre" },
    values: { ...runtimeScalarPhrases("de",[2, 6, 10]),"Начальная стоимость должна быть больше нуля": "Der Anfangswert muss größer als null sein", "Конечная стоимость должна быть больше нуля": "Der Endwert muss größer als null sein", "Срок должен быть больше нуля": "Die Zahl der Jahre muss größer als null sein" },
    options: {},
  },
  "es": {
    fields: {"begin": "Valor inicial", "end": "Valor final", "years": "Número de años"},
    options: {},
    results: { ...runtimeScalarPhrases("es",[7]),"Среднегодовой рост": "Crecimiento anual", "Общий рост за срок": "Crecimiento total del periodo", "Множитель": "Multiplicador", "Начальная стоимость": "Valor inicial", "Конечная стоимость": "Valor final", "Срок": "Años" },
    values: { ...runtimeScalarPhrases("es",[0, 4, 9]),"Начальная стоимость должна быть больше нуля": "El valor inicial debe ser mayor que cero", "Конечная стоимость должна быть больше нуля": "El valor final debe ser mayor que cero", "Срок должен быть больше нуля": "El número de años debe ser mayor que cero" },
  },
};
