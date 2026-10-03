import type { CalcFunction, CalcResultRow } from '../types';
import { fmtInt, fmtMoney, fmtNumber, toNumber, toStr } from '../format';
import {read,optional,mode,positive,finite,decimal,dmul,dadd,div,sub,factor,value,ceiling,scalar,INPUT,MODE,RANGE} from './buildingLegacy17NumericCore';

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
  const selected=mode(inputs.mode,'dimensions',['dimensions','area']);if(!selected)return invalid(MODE);
  const wallLength=selected==='dimensions'?read(inputs.wallLength):1,wallHeight=selected==='dimensions'?read(inputs.wallHeight):1,manualArea=selected==='area'?read(inputs.manualArea):1,openingsArea=optional(inputs.openingsArea),unitLength=read(inputs.unitLength),unitHeight=read(inputs.unitHeight),joint=optional(inputs.joint),reserve=optional(inputs.reserve),unitPrice=optional(inputs.unitPrice);
  if(!finite(wallLength,wallHeight,manualArea,openingsArea,unitLength,unitHeight,joint,reserve,unitPrice))return invalid(INPUT);
  if(!positive(wallLength,wallHeight,manualArea))return invalid('Введите положительные размеры стены');
  if(unitPrice<0)return invalid('Цена камня должна быть неотрицательной');
  const wallD=selected==='area'?decimal(manualArea):dmul(decimal(wallLength),decimal(wallHeight)),wallArea=value(wallD);

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
  const effectiveD=sub(wallD,decimal(openingsArea)),effectiveArea=effectiveD.n>0n?value(effectiveD):0;
  if (effectiveD.n <= 0n) {
    return invalid('Проёмы занимают всю стену — кладка не требуется');
  }

  const moduleD=div(dmul(dadd(decimal(unitLength),decimal(joint)),dadd(decimal(unitHeight),decimal(joint))),decimal(1000000));
  const moduleArea=value(moduleD),bare=ceiling(effectiveD,moduleD),withReserve=ceiling(dmul(effectiveD,factor(reserve)),moduleD),perMetre=value(div(decimal(1),moduleD)),cost=Number.isFinite(withReserve)?value(dmul(decimal(withReserve),decimal(unitPrice))):NaN;
  if(!positive(moduleArea,effectiveArea,perMetre)||!finite(bare,withReserve,cost)||unitPrice>0&&cost===0)return invalid(RANGE);

  const secondary: CalcResultRow[] = [
    { label: 'Площадь кладки', value: `${scalar(effectiveArea, 2)} м²` },
    { label: 'Камней без запаса', value: `${fmtInt(bare)} шт.` },
    { label: 'Запас', value: `${fmtInt(withReserve - bare)} шт.` },
    { label: 'Расчётный модуль камня', value: `${scalar(moduleArea, 4)} м²` },
    { label: 'Камней на квадратный метр', value: scalar(perMetre, 1) },
  ];
  if (openingsArea > 0) {
    secondary.splice(1, 0, { label: 'Площадь проёмов', value: `${scalar(openingsArea, 2)} м²` });
  }
  if (unitPrice > 0) {
    secondary.push({ label: 'Ориентировочная стоимость', value: `${scalar(cost,2)} ₽` });
  }

  return {
    primary: { label: 'Количество камней', value: `${fmtInt(withReserve)} шт.` },
    secondary,
    note: 'Расчёт выполнен для одного слоя кладки по видимой плоскости стены. Кладка в кирпич и толще, перевязка, простенки и доборные элементы не моделируются, поэтому перед закупкой сверьтесь с проектом.',
  };
};
