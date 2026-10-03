import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { formatStatistic } from '../../lib/platform/measurement';
import { sqrt } from '../../lib/platform/geometryNumericInput';
import { INPUT, MODE, RANGE, finite, mode, read, exact, add, times, negative, evaluated, plus, minus, quotient, measure, quantity, sqrtRatio, type Dyadic } from '../rafters/buildingWave16Numeric';

/** Circular segment = 2 L ∫₀ʰ sqrt(d y - y²) dy. A bounded binomial
 * expansion avoids θ-sinθ cancellation when h/d <= .001. Twelve terms
 * have negligible truncation error there; IEEE-754 and entered dimensions
 * still bound the precision. Internal tiny h/d may round to zero only in
 * a correction whose effect is then below binary64 precision. */
function correction(t:number):number {
 let term=1,result=1;
 for(let k=1;k<=12;k++){term*=((0.5-(k-1))/k)*(-t);result+=term*3/(2*k+3);}
 return result;
}
function smallSegment(d:number,len:number,h:number,scale=1):number {
 if(h===0)return 0;
 const t=h/d;
 if(t<=0.001){
  const factor=4*correction(t)*scale/3;
  const result=sqrt(times(exact(d),exact(h),exact(h),exact(h),exact(len),exact(len),exact(factor),exact(factor)));
  return result===0?NaN:result;
 }
 const theta=2*Math.acos(1-2*t);
 return quotient([d,d,len,theta-Math.sin(theta),scale],[8]);
}
function smallPercent(d:number,h:number):number {
 if(h===0)return 0;
 const t=h/d;
 if(t<=0.001){
  const factor=1600*correction(t)/(3*Math.PI);
  return sqrtRatio(times(exact(h),exact(h),exact(h),exact(factor),exact(factor)),times(exact(d),exact(d),exact(d)));
 }
 const theta=2*Math.acos(1-2*t);
 return (theta-Math.sin(theta))*50/Math.PI;
}
export const compute:CalcFunction=inputs=>{
 const shape=mode(inputs.shape,'vertical-cylinder',['vertical-cylinder','horizontal-cylinder','rect','capsule']);
 const d=read(inputs.d),len=read(inputs.len),level=read(inputs.level);
 const fail=(value:string)=>({primary:{label:'Объём налитого',value:'—'},secondary:[{label:'Проверьте данные',value,accent:'red' as const}]});
 if(!shape)return fail(MODE);
 if(!finite(d,len,level))return fail(INPUT);
 if(!(d>0))return fail('Размер сечения должен быть больше нуля');
 if(!(len>0))return fail('Длина или высота должна быть больше нуля');
 if(level<0)return fail('Уровень не может быть отрицательным');
 const height=shape==='horizontal-cylinder'?d:shape==='capsule'?plus(len,d):len;
 if(!Number.isFinite(height))return fail(RANGE);
 if(level>height)return fail('Уровень не может быть выше самой ёмкости');
 let full:number,filled:number,free:number,litres:number,percent:number;
 if(shape==='horizontal-cylinder'){
  const capacity=times(exact(Math.PI),exact(d),exact(d),exact(len));
  full=evaluated(capacity,exact(4));
  const upper=level>d/2,depth=upper?minus(d,level):level;
  const small=smallSegment(d,len,depth),smallLitres=smallSegment(d,len,depth,1000),pct=smallPercent(d,depth);
  if(!finite(full,small,smallLitres,pct))return fail(RANGE);
  const largeFraction=1-pct/100;
  const large=evaluated(times(capacity,exact(largeFraction)),exact(4));
  filled=upper?large:small;free=upper?small:large;
  litres=upper?evaluated(times(capacity,exact(largeFraction),exact(1000)),exact(4)):smallLitres;
  percent=upper?100-pct:pct;
 }else{
  let capacity:Dyadic,base:Dyadic,denominator:Dyadic;
  if(shape==='rect'){base=times(exact(d),exact(d));capacity=times(base,exact(len));denominator=exact(1);}
  else if(shape==='capsule'){
   capacity=add(times(exact(Math.PI),exact(d),exact(d),exact(len),exact(3)),times(exact(Math.PI),exact(d),exact(d),exact(d),exact(2)));
   base=capacity;denominator=times(exact(12),exact(height));
  }else{base=times(exact(Math.PI),exact(d),exact(d));capacity=times(base,exact(len));denominator=exact(4);}
  full=evaluated(capacity,exact(shape==='rect'?1:shape==='capsule'?12:4));
  filled=evaluated(times(base,exact(level)),denominator);
  free=evaluated(times(base,add(exact(height),negative(exact(level)))),denominator);
  litres=evaluated(times(base,exact(level),exact(1000)),denominator);
  percent=quotient([level,100],[height]);
 }
 if(!finite(full,filled,free,litres,percent)||full<=0||(level>0&&filled<=0)||(level<height&&free<=0))return fail(RANGE);
 const m=(x:number,unit:string)=>`${measure(x)} ${unit}`;
 const pct=percent!==0&&(percent<1e-4||percent>=1e12)?quantity(percent):formatStatistic(percent,fmtNumber);
 return {primary:{label:'Объём налитого',value:m(filled,'м³')},secondary:[{label:'Полный объём',value:m(full,'м³')},{label:'Заполнено',value:`${pct} %`},{label:'В литрах',value:m(litres,'л')},{label:'Свободно',value:m(free,'м³')}],...(shape==='capsule'?{note:'Для капсулы налив оценён линейно по уровню: это приближение, а не точный объём сферических торцов.'}:{})};
};
