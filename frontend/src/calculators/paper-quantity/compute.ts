import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { formatQuantity,formatMeasure } from '../../lib/platform/measurement';
import { readScalar,whole,positiveRatio,option,finitePositive } from '../converterWave10Numeric';
// Nominal whole-millimetre ISO216 table, not idealized exact powers of half an m².
const SHEETS:Record<string,readonly[number,number]>={a0:[841,1189],a1:[594,841],a2:[420,594],a3:[297,420],a4:[210,297],a5:[148,210],a6:[105,148]};
export const compute:CalcFunction=(inputs)=>{
 const format=option(inputs.format,'a4',Object.keys(SHEETS));
 const grammage=readScalar(inputs.grammage),sheets=whole(inputs.sheets);
 const fail=(value:string)=>({primary:{label:'Масса пачки',value:'—'},secondary:[{label:'Проверьте данные',value,accent:'red' as const}]});
 if(!format)return fail('Выберите формат листа из списка');
 if(!finitePositive(grammage))return fail('Плотность бумаги должна быть больше нуля');
 if(!(sheets>=1))return fail('Листов должно быть целое число, не меньше одного');
 const [w,h]=SHEETS[format],area=w*h/1e6;
 const total=positiveRatio([w,h,grammage,sheets],[1e9]);
 if(!finitePositive(total))return fail('Результат вне числового диапазона');
 const sheetMass=positiveRatio([w,h,grammage],[1e6]),perKg=positiveRatio([1e9],[w,h,grammage]);
 const q=(n:number,unit:string)=>finitePositive(n)?`${formatQuantity(n,fmtNumber)} ${unit}`:'Вне числового диапазона';
 return {primary:{label:'Масса пачки',value:q(total,'кг')},secondary:[
  {label:'Масса одного листа',value:q(sheetMass,'г')},
  {label:'Площадь листа',value:`${formatMeasure(area,fmtNumber)} м²`},
  {label:'Размер листа',value:`${w}×${h} мм`},
  {label:'Листов в килограмме',value:q(perKg,'шт')},
 ]};
};
