import { createFieldHelp } from '../../lib/platform/financeWave14Input';

export const contextualField = createFieldHelp({
  "ru": {
    "down": "Пустое поле означает 0; взнос меньше цены и не входит в график платежей.",
    "months": "Целое число от 1 до 60; последний платёж выравнивает сумму до копейки.",
    "markup": "Разовая наценка на цену минус взнос, не годовая ставка."
  },
  "en": {
    "down": "Blank means 0; down payment is below price and outside the schedule.",
    "months": "Whole number 1–60; the last payment reconciles the total to cents.",
    "markup": "One-time markup on price minus down payment, not an annual rate."
  },
  "uk": {
    "down": "Порожнє поле означає 0; внесок менший за ціну й поза графіком.",
    "months": "Ціле число 1–60; останній платіж узгоджує суму до копійки.",
    "markup": "Одноразова націнка на ціну мінус внесок, не річна ставка."
  },
  "de": {
    "down": "Leer bedeutet 0; Anzahlung unter Preis und außerhalb des Ratenplans.",
    "months": "Ganze Zahl 1–60; letzte Rate gleicht die Cent-Summe aus.",
    "markup": "Einmaliger Aufschlag auf Preis minus Anzahlung, kein Jahreszins."
  },
  "es": {
    "down": "Vacío significa 0; entrada inferior al precio y fuera del cuadro.",
    "months": "Entero de 1 a 60; la última cuota ajusta el total al céntimo.",
    "markup": "Recargo único sobre precio menos entrada, no tipo anual."
  }
});
