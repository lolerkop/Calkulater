import { createFieldHelp } from '../../lib/platform/financeWave14Input';

export const contextualField = createFieldHelp({
  "ru": {
    "oldSalary": "Обе суммы должны относиться к одному периоду и одной базе до/после удержаний.",
    "raisePct": "Понижение допустимо строго выше −100%; новый оклад должен оставаться положительным."
  },
  "en": {
    "oldSalary": "Both amounts need the same period and gross/net basis.",
    "raisePct": "A decrease is allowed strictly above −100%; new pay must remain positive."
  },
  "uk": {
    "oldSalary": "Обидві суми мають однаковий період і базу до/після утримань.",
    "raisePct": "Зниження дозволено строго понад −100%; нова сума має бути додатною."
  },
  "de": {
    "oldSalary": "Beide Beträge brauchen gleichen Zeitraum und Brutto-/Nettobasis.",
    "raisePct": "Kürzungen strikt über −100% erlaubt; neuer Betrag bleibt positiv."
  },
  "es": {
    "oldSalary": "Ambos importes deben tener igual periodo y base bruta/neta.",
    "raisePct": "Descenso admitido estrictamente por encima de −100%; el sueldo sigue positivo."
  }
});
