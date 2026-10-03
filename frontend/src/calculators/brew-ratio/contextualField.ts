import { createFieldHelp } from '../../lib/platform/financeWave14Input';

const help = createFieldHelp({
  "ru": {
    "water": "Миллилитры воды, поданной на заваривание, не выход готовой чашки.",
    "ratio": "k = мл входной воды на 1 г сухого кофе; положительное значение, без температурной конвертации в массу."
  },
  "en": {
    "water": "Millilitres of input brewing water, not finished cup yield.",
    "ratio": "k = input water mL per 1 g dry coffee; positive, without temperature-based mass conversion."
  },
  "uk": {
    "water": "Мілілітри вхідної води для заварювання, не вихід готової чашки.",
    "ratio": "k = мл вхідної води на 1 г сухої кави; додатне, без температурного перерахунку в масу."
  },
  "de": {
    "water": "Milliliter zugeführtes Brühwasser, nicht fertige Tassenmenge.",
    "ratio": "k = ml Eingangswasser je 1 g trockenen Kaffee; positiv, ohne temperaturabhängige Massenumrechnung."
  },
  "es": {
    "water": "Mililitros de agua de entrada, no rendimiento final de taza.",
    "ratio": "k = ml de agua de entrada por 1 g de café seco; positivo, sin conversión de masa por temperatura."
  }
});
const suffix: Record<string, string> = { ru: ' (вычисляется)', en: ' (computed)', uk: ' (обчислюється)', de: ' (berechnet)', es: ' (calculado)' } as const;
export const contextualField: typeof help = (field, values, locale) => {
  const shown = help(field, values, locale);
  const mode = values.mode === undefined ? 'coffee' : values.mode;
  return shown.name === mode ? { ...shown, readOnly: true, label: shown.label + (suffix[locale] ?? suffix.en) } : shown;
};
