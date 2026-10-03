import type { CalcFunction } from '../../lib/types';
import {fmtNumber} from '../../lib/format';
import {formatQuantity,formatMeasure} from '../../lib/platform/measurement';
import {readScalar,positiveRatio,option,finitePositive} from '../converterWave10Numeric';
const LABEL:Record<string,string>={toModel:'Размер модели',toReal:'Размер натуры',findScale:'Масштаб'};
export const compute:CalcFunction=(inputs)=>{
 const mode=option(inputs.mode,'toModel',Object.keys(LABEL)),label=mode?LABEL[mode]:LABEL.toModel;
 const fail=(value:string)=>({primary:{label,value:'—'},secondary:[{label:'Проверьте данные',value,accent:'red' as const}]});
 if(!mode)return fail('Выберите режим расчёта');
 let real:number,model:number,scale:number;
 if(mode==='findScale'){
  real=readScalar(inputs.real);model=readScalar(inputs.model);
  if(!finitePositive(real))return fail('Размер натуры должен быть больше нуля');
  if(!finitePositive(model))return fail('Размер модели должен быть больше нуля');
  scale=positiveRatio([real],[model]);
 }else{
  scale=readScalar(inputs.scale);if(!finitePositive(scale))return fail('Знаменатель масштаба должен быть больше нуля');
  if(mode==='toReal'){
   model=readScalar(inputs.model);if(!finitePositive(model))return fail('Размер модели должен быть больше нуля');
   real=positiveRatio([model,scale],[]);
  }else{
   real=readScalar(inputs.real);if(!finitePositive(real))return fail('Размер натуры должен быть больше нуля');
   model=positiveRatio([real],[scale]);
  }
 }
 if(![real,model,scale].every(finitePositive))return fail('Результат вне числового диапазона');
 // Keep ordinary historical measure formatting, and retain small/large nonzero values.
 const q=(n:number)=>n<1e-4||n>=1e12?formatQuantity(n,fmtNumber):formatMeasure(n,fmtNumber);
 const mm=(n:number)=>`${q(n)} мм`;
 return {primary:{label,value:mode==='findScale'?`1:${q(scale)}`:mm(mode==='toReal'?real:model)},secondary:[
  {label:'Масштаб',value:`1:${q(scale)}`},{label:'Размер натуры',value:mm(real)},
  {label:'Размер модели',value:mm(model)},{label:'Отношение натуры к модели',value:q(scale)},
 ]};
};
