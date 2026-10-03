import { createFieldHelp } from '../../lib/platform/financeWave14Input';

export const contextualField = createFieldHelp({
  "ru": {
    "volume": "Оцените воду с учётом недолива и внешнего фильтра; калькулятор отдельно их не измеряет.",
    "changePct": "Более 0 до 100%; выбор доли не является назначением графика ухода или дозы средства."
  },
  "en": {
    "volume": "Estimate volume allowing for fill line and external filter; these are not measured separately.",
    "changePct": "Above 0 up to 100%; choosing a fraction prescribes no care schedule or product dose."
  },
  "uk": {
    "volume": "Оцініть об’єм з урахуванням недоливу й зовнішнього фільтра; окремо вони не вимірюються.",
    "changePct": "Понад 0 до 100%; вибір частки не призначає графіка догляду або дози засобу."
  },
  "de": {
    "volume": "Füllhöhe und Außenfilter in Volumenschätzung berücksichtigen; keine gesonderte Messung.",
    "changePct": "Über 0 bis 100%; Anteil bestimmt weder Pflegeplan noch Produktdosis."
  },
  "es": {
    "volume": "Estima volumen considerando llenado y filtro externo; no se miden por separado.",
    "changePct": "Más de 0 hasta 100%; la fracción no prescribe calendario de cuidado ni dosis."
  }
});
