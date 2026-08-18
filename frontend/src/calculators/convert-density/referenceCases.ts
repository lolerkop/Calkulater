import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены из точных определений, а не прогоном движка:
//   1 г/см³ = 1000 кг/м³ (перевод приставок) · 1 кг/л = 1000 кг/м³ · 1 т/м³ = 1000 кг/м³
//   1 lb/ft³ = 0,45359237 / 0,3048³ = 16,018463373960138 кг/м³
//   1 lb/гал (США) = 0,45359237 / 0,003785411784 = 119,82642731689663 кг/м³
export const densityReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'грамм на кубический сантиметр — тысяча килограммов на кубометр',
    inputs: { value: 1, from: 'gcm3', to: 'kgm3' },
    expectPrimary: '1 000,00 кг/м³',
  },
  {
    name: 'вода: 1 г/см³ равна 1 кг/л',
    inputs: { value: 1, from: 'gcm3', to: 'kgl' },
    expectPrimary: '1,0000 кг/л',
  },
  {
    name: 'фунт на кубический фут в килограммах на кубометр',
    inputs: { value: 1, from: 'lbft3', to: 'kgm3' },
    expectPrimary: '16,0185 кг/м³',
  },
  {
    name: 'обратно: плотность воды в фунтах на кубический фут',
    inputs: { value: 1, from: 'gcm3', to: 'lbft3' },
    expectPrimary: '62,4280 lb/ft³',
  },
  {
    name: 'совпадение единиц не даёт дрейфа',
    inputs: { value: 36.6, from: 'kgm3', to: 'kgm3' },
    expectPrimary: '36,6000 кг/м³',
  },
  {
    name: 'ноль остаётся нулём',
    inputs: { value: 0, from: 'gcm3', to: 'lbgal' },
    expectPrimary: '0 lb/гал',
  },
];
