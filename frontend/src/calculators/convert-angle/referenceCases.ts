import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Соотношения известны из определения единиц и записаны вручную:
//   180° = π рад · 1 оборот = 360° · 1° = 60′ = 3600″ · 400 градов = 1 оборот
//   1 рад = 180 / π градуса = 57,29577951…°
export const angleReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'развёрнутый угол равен π радиан',
    inputs: { value: 180, from: 'deg', to: 'rad' },
    expectPrimary: '3,1416 рад',
  },
  {
    name: 'полный оборот равен 360 градусам',
    inputs: { value: 1, from: 'turn', to: 'deg' },
    expectPrimary: '360,0000 °',
  },
  {
    name: 'градус равен 60 угловым минутам',
    inputs: { value: 1, from: 'deg', to: 'arcmin' },
    expectPrimary: '60,0000 ′',
  },
  {
    name: 'градус равен 3600 угловым секундам',
    inputs: { value: 1, from: 'deg', to: 'arcsec' },
    expectPrimary: '3 600,00 ″',
  },
  {
    // Град существует именно ради этого равенства: прямой угол — ровно 100.
    name: '400 градов составляют полный оборот',
    inputs: { value: 400, from: 'grad', to: 'turn' },
    expectPrimary: '1,0000 об',
  },
  {
    name: 'радиан в градусах: 180 / π',
    inputs: { value: 1, from: 'rad', to: 'deg' },
    expectPrimary: '57,2958 °',
  },
  {
    name: 'ноль остаётся нулём',
    inputs: { value: 0, from: 'deg', to: 'rad' },
    expectPrimary: '0 рад',
  },
];
