import type { CalculatorContextualField } from '../../lib/platform/types';
const units = {ru:'ед. длины',en:'length unit',uk:'од. довжини',de:'Längeneinheit',es:'unidad de longitud'};
const help = {ru:'Одна выбранная вами единица для входа и выхода; перевода нет.',en:'Use one chosen unit for input and output; no conversion occurs.',uk:'Одна вибрана одиниця для входу й виходу; переведення немає.',de:'Eine gewählte Einheit für Ein- und Ausgabe; keine Umrechnung.',es:'Usa una unidad elegida para entrada y salida; no hay conversión.'};
export const contextualField: CalculatorContextualField = (field, _values, locale) => field.type === 'number' ? {...field,unit:units[locale as keyof typeof units] ?? units.en,help:help[locale as keyof typeof help] ?? help.en} : field;
