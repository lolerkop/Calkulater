import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { formatQuantity } from '../../lib/platform/measurement';
import { readScalar,positiveRatio,option,finitePositive } from '../converterWave10Numeric';
const SCALES:Record<string,number>={unit:1,thousand:1e3,lakh:1e5,million:1e6,crore:1e7,billion:1e9};
export const compute:CalcFunction=(inputs)=>{
 const value=readScalar(inputs.value);
 const from=option(inputs.from,'lakh',Object.keys(SCALES)),to=option(inputs.to,'million',Object.keys(SCALES));
 const fail=(value:string)=>({primary:{label:'Результат',value:'—'},secondary:[{label:'Проверьте данные',value,accent:'red' as const}]});
 if(!finitePositive(value))return fail('Значение должно быть больше нуля');
 if(!from||!to)return fail('Неизвестная шкала');
 const fromK=SCALES[from],toK=SCALES[to],result=positiveRatio([value,fromK],[toK]);
 if(!finitePositive(result))return fail('Результат вне числового диапазона');
 const row=(label:string,toK:number)=>{const n=positiveRatio([value,fromK],[toK]);return {label,value:finitePositive(n)?formatQuantity(n,fmtNumber):'Вне числового диапазона'};};
 return {primary:{label:'Результат',value:formatQuantity(result,fmtNumber)},secondary:[
  row('В единицах',1),row('В лакхах',1e5),row('В крорах',1e7),
  {label:'Отношение шкал',value:formatQuantity(fromK/toK,fmtNumber)},
 ]};
};
