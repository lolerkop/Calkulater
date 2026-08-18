import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены из определений единиц, а не прогоном движка:
//   1 hp = 550 фут·фунт-сила/с = 745,6998715822702 Вт
//   1 л. с. (метрическая) = 75 кгс·м/с = 735,49875 Вт (точно)
//   1 BTU/ч = 0,29307107017 Вт
export const powerReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'киловатт равен 1000 ватт',
    inputs: { value: 1, from: 'kw', to: 'w' },
    expectPrimary: '1 000,00 Вт',
  },
  {
    name: 'метрическая лошадиная сила в киловаттах: 0,73549875',
    inputs: { value: 1, from: 'ps', to: 'kw' },
    expectPrimary: '0,735499 кВт',
  },
  {
    name: 'механическая лошадиная сила в ваттах: 745,6999',
    inputs: { value: 1, from: 'hp', to: 'w' },
    expectPrimary: '745,6999 Вт',
  },
  {
    // Главный случай этого конвертера: если бы обе лошадиные силы были слиты
    // в одну единицу, здесь стояла бы ровная единица и ошибка осталась бы
    // незамеченной.
    name: 'механическая и метрическая лошадиные силы различаются на 1,4 %',
    inputs: { value: 1, from: 'hp', to: 'ps' },
    expectPrimary: '1,0139 л.с.',
  },
  {
    name: 'мегаватт равен 1000 киловатт',
    inputs: { value: 1, from: 'mw', to: 'kw' },
    expectPrimary: '1 000,00 кВт',
  },
  {
    name: 'киловатт в BTU в час: 3412,14',
    inputs: { value: 1, from: 'kw', to: 'btuh' },
    expectPrimary: '3 412,14 BTU/ч',
  },
  {
    name: 'ноль остаётся нулём',
    inputs: { value: 0, from: 'kw', to: 'hp' },
    expectPrimary: '0 hp',
  },
];
