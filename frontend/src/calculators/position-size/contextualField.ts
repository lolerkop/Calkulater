import { createFieldHelp } from '../../lib/platform/financeWave14Input';

export const contextualField = createFieldHelp({
  "ru": {
    "riskPct": "Ваш сценарий риска, более 0 до 100%; пригодность сделки не оценивается.",
    "stop": "Модель предполагает исполнение по этой цене, но стоп его не гарантирует."
  },
  "en": {
    "riskPct": "Your scenario risk above 0 up to 100%; suitability is not assessed.",
    "stop": "The model assumes execution at this price; a stop does not guarantee it."
  },
  "uk": {
    "riskPct": "Ваш сценарій ризику понад 0 до 100%; придатність угоди не оцінюється.",
    "stop": "Модель припускає виконання за цією ціною, але стоп його не гарантує."
  },
  "de": {
    "riskPct": "Dein Risikoszenario über 0 bis 100%; keine Eignungsbewertung.",
    "stop": "Das Modell nimmt Ausführung zu diesem Kurs an; ein Stopp garantiert sie nicht."
  },
  "es": {
    "riskPct": "Riesgo de tu escenario mayor que 0 hasta 100%; sin evaluar idoneidad.",
    "stop": "El modelo supone ejecución a este precio; el stop no la garantiza."
  }
});
