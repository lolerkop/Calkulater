import { createFieldHelp } from '../../lib/platform/financeWave14Input';

export const contextualField = createFieldHelp({
  "ru": {
    "income": "Выберите единую базу дохода и процента; gross-DTI использует доход до удержаний.",
    "dtiPct": "Доля именно нового платежа после учёта существующих долгов; не порог одобрения.",
    "rate": "Номинальная ставка с ежемесячным начислением, без комиссий и страхования.",
    "years": "Дробные годы переводятся в ближайшее целое число месяцев; минимум 1/12 года."
  },
  "en": {
    "income": "Use a consistent income/percentage basis; gross DTI uses income before deductions.",
    "dtiPct": "Share for the new payment after existing debts; not an approval threshold.",
    "rate": "Nominal annual rate with monthly accrual, without fees or insurance.",
    "years": "Fractional years round to whole months; minimum 1/12 year."
  },
  "uk": {
    "income": "Оберіть однакову базу доходу й відсотка; gross-DTI бере дохід до утримань.",
    "dtiPct": "Частка нового платежу після наявних боргів, не поріг схвалення.",
    "rate": "Номінальна ставка з місячним нарахуванням, без комісій і страхування.",
    "years": "Дробові роки округлюються до цілих місяців; мінімум 1/12 року."
  },
  "de": {
    "income": "Einheitliche Einkommens-/Prozentbasis; Brutto-DTI nutzt Einkommen vor Abzügen.",
    "dtiPct": "Anteil der neuen Rate nach bestehenden Schulden, keine Zusagegrenze.",
    "rate": "Nominaler Jahreszins mit Monatsperioden, ohne Gebühren und Versicherung.",
    "years": "Gebrochene Jahre runden auf ganze Monate; mindestens 1/12 Jahr."
  },
  "es": {
    "income": "Misma base de ingreso y porcentaje; DTI bruto usa ingreso antes de deducciones.",
    "dtiPct": "Porción para cuota nueva tras deudas existentes; no umbral de aprobación.",
    "rate": "Tipo nominal anual de devengo mensual, sin gastos ni seguros.",
    "years": "Años fraccionarios se redondean a meses enteros; mínimo 1/12 de año."
  }
});
