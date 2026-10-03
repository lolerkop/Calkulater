import type { CalculatorLocalization } from '../../lib/platform/types';
import { runtimeScalarPhrases } from '../../lib/platform/runtimeScalarPhrases';

// Final effective owned bundles; overwritten intermediate maps removed after deep equality proof.
export const localization:CalculatorLocalization={
  "en": {
    fields: {"amount": "Loan amount", "rate": "Annual rate, %", "years": "Term, years", "extra": "Extra principal per month"},
    results: { ...runtimeScalarPhrases("en",[6]),"Экономия на процентах": "Interest saved", "Платёж по графику": "Scheduled payment", "Платежей вместо графика": "Payments actually made", "Платежей по графику": "Payments scheduled", "Всего выплат": "Total paid" },
    values: { ...runtimeScalarPhrases("en",[11, 9, 0, 4, 7, 10]),"Сумма кредита должна быть больше нуля": "The loan amount must be greater than zero", "Доплата не может быть отрицательной": "The extra payment cannot be negative", "Платёж с доплатой не покрывает проценты — долг не уменьшается": "The payment does not cover the interest, so the debt never falls" },
    options: {},
  },
  "uk": {
    fields: {"amount": "Сума кредиту", "rate": "Річна ставка, %", "years": "Строк, років", "extra": "Додаткове погашення щомісяця"},
    results: { ...runtimeScalarPhrases("uk",[8]),"Экономия на процентах": "Економія на відсотках", "Платёж по графику": "Платіж за графіком", "Платежей вместо графика": "Платежів фактично", "Платежей по графику": "Платежів за графіком", "Всего выплат": "Усього виплат" },
    values: { ...runtimeScalarPhrases("uk",[12, 11, 1, 6, 9]),"Сумма кредита должна быть больше нуля": "Сума кредиту має бути більшою за нуль", "Доплата не может быть отрицательной": "Доплата не може бути від’ємною", "Платёж с доплатой не покрывает проценты — долг не уменьшается": "Платіж не покриває відсотки, тож борг не зменшується", "Срок должен быть не меньше месяца": "Строк має бути не менше місяця" },
    options: {},
  },
  "de": {
    fields: {"amount": "Darlehenssumme", "rate": "Jahreszins, %", "years": "Laufzeit, Jahre", "extra": "Zusätzliche monatliche Tilgung"},
    results: { ...runtimeScalarPhrases("de",[8]),"Экономия на процентах": "Ersparte Zinsen", "Платёж по графику": "Rate nach Plan", "Платежей вместо графика": "Tatsächlich geleistete Raten", "Платежей по графику": "Raten nach Plan", "Всего выплат": "Insgesamt gezahlt" },
    values: { ...runtimeScalarPhrases("de",[12, 2, 6, 10, 11]),"Сумма кредита должна быть больше нуля": "Die Darlehenssumme muss größer als null sein", "Срок должен быть больше нуля": "Die Laufzeit muss größer als null sein", "Доплата не может быть отрицательной": "Die Sondertilgung kann nicht negativ sein", "Платёж с доплатой не покрывает проценты — долг не уменьшается": "Die Rate deckt die Zinsen nicht, die Schuld sinkt also nie" },
    options: {},
  },
  "es": {
    fields: {"amount": "Importe del préstamo", "rate": "Tipo anual, %", "years": "Plazo, años", "extra": "Amortización adicional al mes"},
    options: {},
    results: { ...runtimeScalarPhrases("es",[7]),"Экономия на процентах": "Intereses ahorrados", "Платёж по графику": "Cuota del cuadro", "Платежей вместо графика": "Cuotas realmente pagadas", "Платежей по графику": "Cuotas previstas", "Всего выплат": "Total pagado" },
    values: { ...runtimeScalarPhrases("es",[12, 10, 0, 4, 9, 11]),"Сумма кредита должна быть больше нуля": "El importe del préstamo debe ser mayor que cero", "Доплата не может быть отрицательной": "La amortización adicional no puede ser negativa", "Платёж с доплатой не покрывает проценты — долг не уменьшается": "La cuota con la amortización adicional no cubre los intereses: la deuda no baja" },
  },
};
