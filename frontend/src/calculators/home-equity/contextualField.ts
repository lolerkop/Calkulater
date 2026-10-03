import { createFieldHelp } from '../../lib/platform/financeWave14Input';

export const contextualField = createFieldHelp({
  "ru": {
    "value": "Оценка объекта в той же валюте, что и долг; её здесь не проверяют.",
    "ltv": "Выбранный предел общего долга, не универсальная норма кредитора.",
    "rate": "Постоянная номинальная годовая ставка; месячная равна ставке/1200.",
    "years": "Не меньше 1/12 года; срок округляется до ближайшего целого месяца."
  },
  "en": {
    "value": "Property valuation in the debt currency; it is not verified here.",
    "ltv": "Selected combined-debt limit, not a universal lender rule.",
    "rate": "Constant nominal annual percentage; monthly rate is entered rate/1200.",
    "years": "At least 1/12 year; term rounds to the nearest whole month."
  },
  "uk": {
    "value": "Оцінка об’єкта у валюті боргу; тут її не перевіряють.",
    "ltv": "Обрана межа загального боргу, не універсальна норма.",
    "rate": "Постійна номінальна річна ставка; місячна дорівнює ставці/1200.",
    "years": "Не менше 1/12 року; строк округлюється до найближчого цілого місяця."
  },
  "de": {
    "value": "Objektbewertung in der Schuldwährung; hier ungeprüft.",
    "ltv": "Gewählte Gesamtschuldengrenze, keine allgemeine Bankregel.",
    "rate": "Konstanter jährlicher Nominalzins; monatlich Eingabe/1200.",
    "years": "Mindestens 1/12 Jahr; Rundung auf den nächsten ganzen Monat."
  },
  "es": {
    "value": "Valoración en moneda de la deuda; no se verifica aquí.",
    "ltv": "Tope de deuda conjunta elegido, no regla universal.",
    "rate": "Tipo nominal anual constante; mensual = valor/1200.",
    "years": "Mínimo 1/12 de año; se redondea al mes entero más próximo."
  }
});
