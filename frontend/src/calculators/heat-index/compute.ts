import type { CalcFunction } from '../../lib/types';
import { INPUT, RANGE, MODE, qty } from '../../lib/platform/measurementScalar';
import { read, mode, exact, add, negative, times, evaluated, sqrtRatio, finite } from '../../lib/platform/electronicsNumericInput';
/** Unadjusted nine-term Rothfusz regression; not the complete NWS algorithm. */
const C=[-42.379,2.04901523,10.14333127,-0.22475541,-0.00683783,-0.05481717,0.00122874,0.00085282,-0.00000199];
export const compute:CalcFunction=inputs=>{
 const t=read(inputs.t),rh=read(inputs.rh);
 const fail=(value:string)=>({primary:{label:'Ощущается как',value:'—'},secondary:[{label:'Проверьте данные',value,accent:'red' as const}]});
 if(!finite(t,rh))return fail(INPUT);
 if(rh<0||rh>100)return fail('Влажность должна быть от 0 до 100 %');
 if(t<20||t>60)return fail('Температура должна быть от 20 до 60 °C');
 const tf=t*9/5+32;if(tf<80)return fail('Этот режим регрессии принимает температуру от 80 °F (около 26,7 °C)');
 const hi=C[0]+C[1]*tf+C[2]*rh+C[3]*tf*rh+C[4]*tf*tf+C[5]*rh*rh+C[6]*tf*tf*rh+C[7]*tf*rh*rh+C[8]*tf*tf*rh*rh;
 const hiC=(hi-32)*5/9,delta=hiC-t;if(!finite(hi,hiC,delta))return fail(RANGE);
 const category=hi<80?'ниже шкалы':hi<90?'осторожность':hi<103?'повышенная осторожность':hi<125?'опасность':'крайняя опасность';
 return {primary:{label:'Ощущается как',value:`${qty(hiC)} °C`},secondary:[
 {label:'Прибавка к термометру',value:`${qty(delta)} °C`},{label:'В градусах Фаренгейта',value:`${qty(hi)} °F`},
 {label:'Термометр по Фаренгейту',value:`${qty(tf)} °F`},{label:'Категория индекса',value:category,accent:hi>=103?'red' as const:'neutral' as const}]};
};
