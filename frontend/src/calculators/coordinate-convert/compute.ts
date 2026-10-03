import type { CalcFunction } from '../../lib/types';
import { fmtInt, fmtNumber } from '../../lib/format';
import { formatStatistic,formatQuantity } from '../../lib/platform/measurement';
import { readScalar, whole, option } from '../converterWave10Numeric';
const stat=(n:number)=>n!==0&&Math.abs(n)<1e-4?formatQuantity(n,fmtNumber):formatStatistic(n,fmtNumber);
const HEMISPHERE_LABEL:Record<string,string>={N:'северное или восточное',S:'южное или западное'};
// One angular component, not an axis-aware latitude/longitude or GPX validator.
export const compute:CalcFunction=(inputs)=>{
 const mode=option(inputs.mode,'toDecimal',['toDecimal','toDms']);
 const label=mode==='toDms'?'Градусы, минуты, секунды':'Десятичные градусы';
 const fail=(value:string)=>({primary:{label,value:'—'},secondary:[{label:'Проверьте данные',value,accent:'red' as const}]});
 const dms=(d:number,m:number,s:number)=>`${fmtInt(d)}° ${fmtInt(m)}′ ${stat(s)}″`;
 if(!mode)return fail('Выберите направление перевода');
 if(mode==='toDms'){
  const decimal=readScalar(inputs.decimal);
  if(!Number.isFinite(decimal)||Math.abs(decimal)>180)return fail('Десятичные градусы должны быть от −180 до 180');
  const abs=Math.abs(decimal);let d=Math.floor(abs),m=Math.floor((abs-d)*60);
  // Round to the same four decimal places as the displayed seconds before carrying.
  const rawSeconds=((abs-d)*60-m)*60;
  let s=rawSeconds>0&&rawSeconds<.00005?rawSeconds:Number(rawSeconds.toFixed(4));
  if(s>=60){s=0;m++;}if(m>=60){m=0;d++;}
  return {primary:{label,value:dms(d,m,s)},secondary:[
   {label:'Десятичные градусы',value:`${stat(decimal)}°`},
   {label:'Полушарие',value:HEMISPHERE_LABEL[decimal<0?'S':'N']},
   {label:'Только градусы и минуты',value:`${fmtInt(d)}° ${stat(m+s/60)}′`},
  ]};
 }
 const deg=whole(inputs.deg),minutes=whole(inputs.minutes),seconds=readScalar(inputs.seconds);
 const hemisphere=option(inputs.hemisphere,'N',['N','S']);
 if(!hemisphere)return fail('Выберите полушарие');
 if(!(deg>=0&&deg<=180))return fail('Градусы должны быть от 0 до 180');
 if(!(minutes>=0&&minutes<60))return fail('Минуты должны быть от 0 до 59');
 if(!(seconds>=0&&seconds<60))return fail('Секунды должны быть от 0 до менее 60');
 const value=deg+minutes/60+seconds/3600;
 if(value===0&&(deg>0||minutes>0||seconds>0))return fail('Ненулевой угол меньше числового диапазона');
 // At180°, even a tiny positive remainder is outside the accepted range.
 if(value>180||(deg===180&&(minutes>0||seconds>0)))return fail('Итог превышает 180 градусов');
 const signed=hemisphere==='S'?-value:value;
 return {primary:{label,value:`${stat(signed)}°`},secondary:[
  {label:'Градусы, минуты, секунды',value:dms(deg,minutes,seconds)},
  {label:'Полушарие',value:HEMISPHERE_LABEL[hemisphere]},
  {label:'Только градусы и минуты',value:`${fmtInt(deg)}° ${stat(minutes+seconds/60)}′`},
 ]};
};
