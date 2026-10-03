import { createFieldHelp } from '../../lib/platform/financeWave14Input';

export const contextualField = createFieldHelp({
  "ru": {
    "rate": "Базовая оплата одного обычного рабочего часа; для сверхурочных применяется выбранный коэффициент.",
    "normalHours": "Часы обычного блока, в том числе дробные; календарный порог не подставляется.",
    "multiplier": "Один выбранный коэффициент от 1 для всего блока; 1,5 не является мировой нормой."
  },
  "en": {
    "rate": "Base pay for one regular work hour; the selected multiplier applies to overtime hours.",
    "normalHours": "Regular-block hours, including fractions; no calendar threshold is inserted.",
    "multiplier": "One chosen multiplier from 1 for the whole block; 1.5 is not a worldwide rule."
  },
  "uk": {
    "rate": "Базова оплата однієї звичайної робочої години; для надурочних застосовується вибраний коефіцієнт.",
    "normalHours": "Години звичайного блоку, також дробові; календарний поріг не підставляється.",
    "multiplier": "Один коефіцієнт від 1 для всього блоку; 1,5 не світова норма."
  },
  "de": {
    "rate": "Grundvergütung für eine reguläre Arbeitsstunde; für Überstunden wird der gewählte Faktor angewendet.",
    "normalHours": "Stunden des Regelblocks, auch gebrochen; keine Kalenderschwelle.",
    "multiplier": "Ein Faktor ab 1 für den ganzen Block; 1,5 ist keine weltweite Regel."
  },
  "es": {
    "rate": "Tarifa base por una hora ordinaria de trabajo; a las horas extra se aplica el multiplicador elegido.",
    "normalHours": "Horas del bloque ordinario, también fracciones; sin umbral automático.",
    "multiplier": "Un factor desde 1 para todo el bloque; 1,5 no es regla mundial."
  }
});
