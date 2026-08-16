import type { CalcFunction, CalcResultRow } from '../types';
import { fmtInt, fmtMoney, fmtNumber, toNumber, toStr } from '../format';
import { ceilUnits } from '../rounding';

// Кладка одного слоя стены: сколько кирпичей или блоков закроют видимую
// плоскость. Модель намеренно ограничена одним слоем — толщина кладки в полкирпича,
// в кирпич и полтора не моделируется, потому что для этого нужна геометрия
// перевязки, а не площадь. Ограничение сказано в контенте страницы прямо.
//
// Каждому камню в кладке принадлежит один шов справа и один сверху: соседний шов
// принадлежит следующему камню. Поэтому расчётный модуль равен размеру камня плюс
// толщина шва по каждой стороне, а не плюс два шва.
export function masonryModuleArea(
  unitLengthMm: number,
  unitHeightMm: number,
  jointMm: number,
): number {
  const length = (unitLengthMm + jointMm) / 1000;
  const height = (unitHeightMm + jointMm) / 1000;
  return length * height;
}

const invalid = (message: string) => ({
  primary: { label: 'Количество камней', value: '—' },
  secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
});

export const calcBrick: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'dimensions');
  const wallLength = toNumber(inputs.wallLength);
  const wallHeight = toNumber(inputs.wallHeight);
  const manualArea = toNumber(inputs.manualArea);
  const openingsArea = toNumber(inputs.openingsArea);
  const unitLength = toNumber(inputs.unitLength);
  const unitHeight = toNumber(inputs.unitHeight);
  const joint = toNumber(inputs.joint);
  const reserve = toNumber(inputs.reserve);
  const unitPrice = toNumber(inputs.unitPrice);

  const wallArea = mode === 'area' ? manualArea : wallLength * wallHeight;

  if (!Number.isFinite(wallArea) || wallArea <= 0) {
    return invalid('Введите положительные размеры стены');
  }
  if (!Number.isFinite(unitLength) || unitLength <= 0 || !Number.isFinite(unitHeight) || unitHeight <= 0) {
    return invalid('Введите положительные размеры камня');
  }
  if (!Number.isFinite(joint) || joint < 0) {
    return invalid('Толщина шва не может быть отрицательной');
  }
  if (!Number.isFinite(openingsArea) || openingsArea < 0) {
    return invalid('Площадь проёмов не может быть отрицательной');
  }
  if (!Number.isFinite(reserve) || reserve < 0) {
    return invalid('Запас не может быть отрицательным');
  }

  // Проёмы не могут занимать больше самой стены: отрицательной площади кладки
  // не бывает, поэтому результат ограничен нулём снизу по смыслу задачи.
  const effectiveArea = Math.max(0, wallArea - openingsArea);
  if (effectiveArea === 0) {
    return invalid('Проёмы занимают всю стену — кладка не требуется');
  }

  const moduleArea = masonryModuleArea(unitLength, unitHeight, joint);
  const bare = ceilUnits(effectiveArea / moduleArea);
  const withReserve = ceilUnits((effectiveArea / moduleArea) * (1 + reserve / 100));

  const secondary: CalcResultRow[] = [
    { label: 'Площадь кладки', value: `${fmtNumber(effectiveArea, 2)} м²` },
    { label: 'Камней без запаса', value: `${fmtInt(bare)} шт.` },
    { label: 'Запас', value: `${fmtInt(withReserve - bare)} шт.` },
    { label: 'Расчётный модуль камня', value: `${fmtNumber(moduleArea, 4)} м²` },
    { label: 'Камней на квадратный метр', value: fmtNumber(1 / moduleArea, 1) },
  ];
  if (openingsArea > 0) {
    secondary.splice(1, 0, { label: 'Площадь проёмов', value: `${fmtNumber(openingsArea, 2)} м²` });
  }
  if (unitPrice > 0) {
    secondary.push({ label: 'Ориентировочная стоимость', value: fmtMoney(withReserve * unitPrice) });
  }

  return {
    primary: { label: 'Количество камней', value: `${fmtInt(withReserve)} шт.` },
    secondary,
    note: 'Расчёт выполнен для одного слоя кладки по видимой плоскости стены. Кладка в кирпич и толще, перевязка, простенки и доборные элементы не моделируются, поэтому перед закупкой сверьтесь с проектом.',
  };
};
