import type { CalcFunction } from '../../lib/types';
import { read, optional, finite, decimal, dmul, dadd, ddiv, decimalValue, decimalMoney, scalar, INPUT, RANGE } from '../../lib/calculators/householdWave17Numeric';
export const compute: CalcFunction = inputs => {
 const g=read(inputs.grams),p=read(inputs.spoolPrice),s=read(inputs.spoolWeight),h=read(inputs.hours),w=read(inputs.powerW),tariff=read(inputs.kwhPrice),wearRate=optional(inputs.wearPerHour),pct=optional(inputs.markupPct);
 const fail=(value:string)=>({primary:{label:'Стоимость печати с наценкой',value:'—'},secondary:[{label:'Проверьте данные',value,accent:'red' as const}]});
 if(!finite(g,p,s,h,w,tariff,wearRate,pct))return fail(INPUT);
 if(g<=0)return fail('Вес детали должен быть больше нуля');if(s<=0)return fail('Вес катушки должен быть больше нуля');if(h<=0)return fail('Время печати должно быть больше нуля');
 if(p<0||w<0||tariff<0||wearRate<0||pct<0)return fail('Значение не может быть отрицательным');
 const gramD=ddiv(decimal(p),decimal(s)),materialD=dmul(decimal(g),gramD),kwhD=ddiv(dmul(decimal(w),decimal(h)),decimal(1000)),energyD=dmul(kwhD,decimal(tariff)),wearD=dmul(decimal(wearRate),decimal(h));
 const baseD=dadd(dadd(materialD,energyD),wearD),markupD=ddiv(dmul(baseD,decimal(pct)),decimal(100)),totalD=dadd(baseD,markupD);
 const gram=decimalValue(gramD),material=decimalValue(materialD),kwh=decimalValue(kwhD),energy=decimalValue(energyD),wear=decimalValue(wearD),total=decimalValue(totalD),markup=decimalValue(markupD);
 if(!finite(gram,material,kwh,energy,wear,total,markup))return fail(RANGE);
 return {primary:{label:'Стоимость печати с наценкой',value:decimalMoney(totalD)},secondary:[
 {label:'Пластик',value:decimalMoney(materialD)},{label:'Электричество',value:decimalMoney(energyD)},...(wearRate>0?[{label:'Амортизация принтера',value:decimalMoney(wearD)}]:[]),...(pct>0?[{label:'Наценка',value:decimalMoney(markupD)}]:[]),
 {label:'Израсходовано энергии',value:`${scalar(kwh,2)} кВт·ч`},{label:'Цена грамма пластика',value:decimalMoney(gramD)}]};
};
