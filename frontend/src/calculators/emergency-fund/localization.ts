import type { CalculatorLocalization } from '../../lib/platform/types';
import { runtimeScalarPhrases } from '../../lib/platform/runtimeScalarPhrases';

// Final effective owned bundles; overwritten intermediate maps removed after deep equality proof.
export const localization:CalculatorLocalization={
  "en": {
    fields: {"monthlyExpenses": "Monthly expenses", "months": "Months of cover wanted", "saved": "Already saved"},
    results: { ...runtimeScalarPhrases("en",[6]),"Цель подушки": "Fund target", "Не хватает": "Still needed", "Уже покрыто месяцев": "Months already covered", "Готовность": "Progress" },
    values: { ...runtimeScalarPhrases("en",[0, 4, 7]),"Месячные расходы должны быть больше нуля": "Monthly expenses must be greater than zero", "Запас должен быть не меньше одного месяца": "The cover must be at least one month", "Накопленное не может быть отрицательным": "The saved amount cannot be negative" },
    options: {},
  },
  "uk": {
    fields: {"monthlyExpenses": "Місячні витрати", "months": "Бажаний запас, місяців", "saved": "Уже накопичено"},
    results: { ...runtimeScalarPhrases("uk",[8]),"Цель подушки": "Ціль подушки", "Не хватает": "Не вистачає", "Уже покрыто месяцев": "Уже покрито місяців", "Готовность": "Готовність" },
    values: { ...runtimeScalarPhrases("uk",[1, 6, 9]),"Месячные расходы должны быть больше нуля": "Місячні витрати мають бути більшими за нуль", "Запас должен быть не меньше одного месяца": "Запас має бути не меншим за один місяць", "Накопленное не может быть отрицательным": "Накопичене не може бути від’ємним" },
    options: {},
  },
  "de": {
    fields: {"monthlyExpenses": "Monatsausgaben", "months": "Gewünschte Deckung, Monate", "saved": "Bereits zurückgelegt"},
    results: { ...runtimeScalarPhrases("de",[8]),"Цель подушки": "Ziel des Notgroschens", "Не хватает": "Noch fehlend", "Уже покрыто месяцев": "Bereits gedeckte Monate", "Готовность": "Fortschritt" },
    values: { ...runtimeScalarPhrases("de",[2, 6, 10]),"Месячные расходы должны быть больше нуля": "Die Monatsausgaben müssen größer als null sein", "Запас должен быть не меньше одного месяца": "Die Deckung muss mindestens einen Monat betragen", "Накопленное не может быть отрицательным": "Der zurückgelegte Betrag kann nicht negativ sein" },
    options: {},
  },
  "es": {
    fields: {"monthlyExpenses": "Gastos mensuales", "months": "Meses de cobertura deseados", "saved": "Ya ahorrado"},
    options: {},
    results: { ...runtimeScalarPhrases("es",[7]),"Цель подушки": "Objetivo del fondo", "Не хватает": "Falta", "Уже покрыто месяцев": "Meses ya cubiertos", "Готовность": "Avance" },
    values: { ...runtimeScalarPhrases("es",[0, 4, 9]),"Месячные расходы должны быть больше нуля": "Los gastos mensuales deben ser mayores que cero", "Запас должен быть не меньше одного месяца": "La cobertura debe ser de al menos un mes", "Накопленное не может быть отрицательным": "El importe ahorrado no puede ser negativo" },
  },
};
