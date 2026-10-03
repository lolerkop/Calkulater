import type { CalculatorContextualField } from '../../lib/platform/types';
const native: Record<string, readonly [string,string]> = {
 ru: ['общая единица', 'Обе величины должны использовать одну выбранную единицу; множитель 20 требует одинакового коэффициента связи мощности с квадратом амплитуды.'],
 en: ['same chosen unit', 'Use the same chosen unit for both values; factor 20 requires the same power-to-amplitude-squared proportionality.'],
 uk: ['спільна одиниця', 'Обидві величини мають використовувати одну обрану одиницю; множник 20 потребує однакової пропорції між потужністю та квадратом амплітуди.'],
 de: ['gleiche gewählte Einheit', 'Nutze dieselbe gewählte Einheit für beide Größen; Faktor 20 erfordert gleiche Proportionalität zwischen Leistung und Amplitudenquadrat.'],
 es: ['misma unidad elegida', 'Usa la misma unidad para ambas magnitudes; el factor 20 requiere igual proporcionalidad entre potencia y amplitud al cuadrado.'],
};
export const contextualField: CalculatorContextualField = (field, _values, locale) => {
 if (field.name !== 'p1' && field.name !== 'p2') return field;
 const [unit, help] = native[locale] ?? native.en;
 return { ...field, unit, help };
};
