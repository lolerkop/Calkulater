// Единицы мощности. База — ватт.
//
// Лошадиных сил две, и они не равны. Механическая (hp) определена как
// 550 фут·фунт-сила в секунду и равна 745,6998715822702 Вт. Метрическая
// («лошадиная сила», PS) определена как 75 кгс·м/с и равна ровно 735,49875 Вт —
// именно она стоит в европейских техпаспортах. Разница около 1,4 %, поэтому
// единицы разведены, а не слиты в одну «л. с.».

import type { ConversionUnits } from '../../lib/platform/conversion';

export type PowerUnit = 'w' | 'kw' | 'mw' | 'hp' | 'ps' | 'btuh';

export const powerUnits: ConversionUnits<PowerUnit> = {
  w: { symbol: 'Вт', factor: 1 },
  kw: { symbol: 'кВт', factor: 1000 },
  mw: { symbol: 'МВт', factor: 1e6 },
  hp: { symbol: 'hp', factor: 745.6998715822702 },
  ps: { symbol: 'л.с.', factor: 735.49875 },
  btuh: { symbol: 'BTU/ч', factor: 0.29307107017 },
};

export const powerNames: Record<PowerUnit, string> = { w: 'Ватт', kw: 'Киловатт', mw: 'Мегаватт', hp: 'Лошадиная сила механическая', ps: 'Лошадиная сила метрическая', btuh: 'BTU в час' };
