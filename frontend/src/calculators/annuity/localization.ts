import type { CalculatorLocalization } from '../../lib/platform/types';
import { runtimeScalarPhrases } from '../../lib/platform/runtimeScalarPhrases';

// Final effective owned bundles; overwritten intermediate maps removed after deep equality proof.
export const localization:CalculatorLocalization={
  "en": {
    fields: {"amount": "Debt amount", "rate": "Rate", "months": "Term, months"},
    options: {},
    results: { ...runtimeScalarPhrases("en",[6]),"Ежемесячный платёж": "Monthly payment", "Всего выплат": "Total paid", "Переплата": "Overpayment", "Первый месяц: проценты": "First month: interest", "Первый месяц: тело": "First month: principal", "Последний платёж": "Final payment", "График платежей": "Payment schedule", "Месяц": "Month", "Платёж": "Payment", "Проценты": "Interest", "Основной долг": "Principal", "Остаток": "Balance" },
    values: { ...runtimeScalarPhrases("en",[12, 11, 0, 4, 7]),"Срок должен быть хотя бы один месяц": "The term must be at least one month", "Срок не может превышать 480 месяцев": "The term cannot exceed 480 months" },
  },
  "uk": {
    fields: {"amount": "Сума боргу", "rate": "Ставка", "months": "Термін, міс."},
    options: {},
    results: { ...runtimeScalarPhrases("uk",[8]),"Ежемесячный платёж": "Щомісячний платіж", "Всего выплат": "Усього виплат", "Переплата": "Переплата", "Первый месяц: проценты": "Перший місяць: відсотки", "Первый месяц: тело": "Перший місяць: тіло", "Последний платёж": "Останній платіж", "График платежей": "Графік платежів", "Месяц": "Місяць", "Платёж": "Платіж", "Проценты": "Відсотки", "Основной долг": "Основний борг", "Остаток": "Залишок" },
    values: { ...runtimeScalarPhrases("uk",[13, 12, 1, 6, 9]),"Срок должен быть хотя бы один месяц": "Термін має бути щонайменше один місяць", "Срок не может превышать 480 месяцев": "Термін не може перевищувати 480 місяців" },
  },
  "de": {
    fields: {"amount": "Darlehenssumme", "rate": "Zinssatz", "months": "Laufzeit, Monate"},
    options: {},
    results: { ...runtimeScalarPhrases("de",[8]),"Ежемесячный платёж": "Monatliche Rate", "Всего выплат": "Summe aller Zahlungen", "Переплата": "Zinskosten", "Первый месяц: проценты": "Erster Monat: Zinsen", "Первый месяц: тело": "Erster Monat: Tilgung", "Последний платёж": "Schlussrate", "График платежей": "Tilgungsplan", "Месяц": "Monat", "Платёж": "Rate", "Проценты": "Zinsen", "Основной долг": "Tilgung", "Остаток": "Restschuld" },
    values: { ...runtimeScalarPhrases("de",[13, 2, 6, 10]),"Ставка не может быть отрицательной": "Der Zinssatz darf nicht negativ sein", "Срок должен быть хотя бы один месяц": "Die Laufzeit muss mindestens einen Monat betragen", "Срок не может превышать 480 месяцев": "Die Laufzeit darf 480 Monate nicht überschreiten" },
  },
  "es": {
    fields: {"amount": "Importe de la deuda", "rate": "Tipo de interés", "months": "Plazo, meses"},
    options: {},
    results: { ...runtimeScalarPhrases("es",[7]),"Ежемесячный платёж": "Cuota mensual", "Всего выплат": "Total pagado", "Переплата": "Intereses totales", "Первый месяц: проценты": "Primer mes: intereses", "Первый месяц: тело": "Primer mes: capital", "Последний платёж": "Última cuota", "График платежей": "Tabla de amortización", "Месяц": "Mes", "Платёж": "Cuota", "Проценты": "Intereses", "Основной долг": "Capital", "Остаток": "Saldo pendiente" },
    values: { ...runtimeScalarPhrases("es",[0, 4, 9]),"Сумма должна быть больше нуля": "El importe debe ser mayor que cero", "Ставка не может быть отрицательной": "El tipo de interés no puede ser negativo", "Срок должен быть хотя бы один месяц": "El plazo debe ser de al menos un mes", "Срок не может превышать 480 месяцев": "El plazo no puede superar los 480 meses" },
  },
};
