import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения взяты из международных определений, а не получены прогоном движка:
//   1 м = 100 см (по определению приставки)
//   1 дюйм = 2,54 см (точно)
//   1 миля = 1609,344 м (точно, 1760 ярдов)
//   1 фут = 30,48 см (точно, 12 дюймов)
//   1 морская миля = 1852 м (точно)
export const lengthReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'метр в сантиметры: ровно 100',
    inputs: { value: 1, from: 'm', to: 'cm' },
    expectPrimary: '100,0000 см',
  },
  {
    name: 'дюйм в сантиметры: точно 2,54',
    inputs: { value: 1, from: 'in', to: 'cm' },
    expectPrimary: '2,5400 см',
  },
  {
    name: 'обратно: 2,54 сантиметра в дюймы даёт единицу',
    inputs: { value: 2.54, from: 'cm', to: 'in' },
    expectPrimary: '1,0000 дюйм',
  },
  {
    name: 'миля в метры: точно 1609,344',
    inputs: { value: 1, from: 'mi', to: 'm' },
    expectPrimary: '1 609,34 м',
  },
  {
    name: 'совпадение единиц возвращает значение без изменений',
    inputs: { value: 36.6, from: 'm', to: 'm' },
    expectPrimary: '36,6000 м',
  },
  {
    name: 'ноль переводится в ноль',
    inputs: { value: 0, from: 'km', to: 'mi' },
    expectPrimary: '0 миля',
  },
  {
    name: 'неизвестная единица не считается',
    inputs: { value: 1, from: 'm', to: 'parsec' },
    expectPrimary: '—',
    expectSecondary: [{ label: 'Проверьте данные', value: 'Выберите единицы из списка' }],
  },
];
