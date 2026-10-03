import type { CalcFunction } from '../../lib/types';
import { read, finite, exact, times, add, negative, decimal, dadd, dnegative, decimalValue, evaluated, measure, INPUT, RANGE } from '../../lib/calculators/householdWave17Numeric';
export const compute: CalcFunction = inputs => {
 const l=read(inputs.l),w=read(inputs.w),h=read(inputs.h),limit=read(inputs.limit);
 const fail=(value:string)=>({primary:{label:'Линейные габариты',value:'—'},secondary:[{label:'Проверьте данные',value,accent:'red' as const}]});
 if(!finite(l,w,h,limit))return fail(INPUT);
 if(l<=0||w<=0||h<=0)return fail('Все три стороны должны быть больше нуля');
 if(limit<=0)return fail('Норма авиакомпании должна быть больше нуля');
 const sumD=dadd(dadd(decimal(l),decimal(w)),decimal(h)),leftD=dadd(decimal(limit),dnegative(sumD));
 const sum=decimalValue(sumD),left=decimalValue(leftD),inches=evaluated({coefficient:sumD.n*100n,exponent:0},{coefficient:sumD.d*254n,exponent:0}),volume=evaluated(times(exact(l),exact(w),exact(h)),exact(1000));
 if(!finite(sum,left,inches,volume))return fail(RANGE);
 return {primary:{label:'Линейные габариты',value:`${measure(sum)} см`},secondary:[
 {label:'Запас до предела',value:`${measure(left)} см`},{label:'В дюймах',value:`${measure(inches)} дюйма`},
 {label:'Объём коробки',value:`${measure(volume)} л`},{label:'По введённому пределу',value:leftD.n>=0n?'проходит':'превышена'}]};
};
