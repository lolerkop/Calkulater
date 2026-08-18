import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены из определений единиц, а не прогоном движка:
//   1 кВт·ч = 1000 Вт × 3600 с = 3 600 000 Дж · 1 ккал = 4184 Дж (точно)
//   1 BTU = 1055,05585262 Дж (International Table)
//   1 Дж = 1 / 1,602176634·10⁻¹⁹ эВ = 6,241509·10¹⁸
export const energyReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'киловатт-час равен 3 600 000 джоулей',
    inputs: { value: 1, from: 'kwh', to: 'j' },
    expectPrimary: '3 600 000,00 Дж',
  },
  {
    name: 'килокалория равна 4184 джоулям',
    inputs: { value: 1, from: 'kcal', to: 'j' },
    expectPrimary: '4 184,00 Дж',
  },
  {
    name: 'BTU в джоулях: 1055,06',
    inputs: { value: 1, from: 'btu', to: 'j' },
    expectPrimary: '1 055,06 Дж',
  },
  {
    name: 'киловатт-час в килокалориях: 3 600 000 / 4184',
    inputs: { value: 1, from: 'kwh', to: 'kcal' },
    expectPrimary: '860,4207 ккал',
  },
  {
    name: 'мегаджоуль — чуть больше четверти киловатт-часа',
    inputs: { value: 1, from: 'mj', to: 'kwh' },
    expectPrimary: '0,277778 кВт·ч',
  },
  {
    // Единственный случай, выходящий за пределы позиционной записи:
    // проверяет и множитель, и переключение на экспоненциальную форму.
    name: 'джоуль в электронвольтах требует экспоненциальной записи',
    inputs: { value: 1, from: 'j', to: 'ev' },
    expectPrimary: '6,241509·10^+18 эВ',
  },
  {
    name: 'ноль остаётся нулём',
    inputs: { value: 0, from: 'kwh', to: 'kcal' },
    expectPrimary: '0 ккал',
  },
];
