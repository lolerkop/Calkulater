import type { CalcFunction, CalcResultTable } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { read, finite, exact, times, add, evaluated, scalar, decimal, ddiv, dadd, dmul, decimalValue, decimalScalar, decimalMoney, type Decimal, INPUT, RANGE } from '../../lib/calculators/householdWave17Numeric';
export const compute: CalcFunction = inputs => {
 const fail=(value:string)=>({primary:{label:'В месяц',value:'—'},secondary:[{label:'Проверьте данные',value,accent:'red' as const}]});
 if(typeof inputs.items!=='string')return fail(INPUT);
 const lines=inputs.items.split('\n').map(x=>x.trim()).filter(Boolean);if(!lines.length)return fail('Введите хотя бы одну подписку');if(lines.length>1000)return fail('Не больше 1000 подписок за один расчёт');
 const rows:{name:string;price:number;months:number;perMonth:number;fraction:Decimal}[]=[];
 for(const line of lines){const t=line.replace(/,(?=\s|$)/g,' ').split(/[\s;]+/).filter(Boolean);if(t.length<3)return fail('Нужны название, цена и период в месяцах');
  const price=read(t.at(-2)),months=read(t.at(-1));if(!finite(price,months))return fail('Цена и период должны быть конечными числами');if(price<0)return fail('Цена не может быть отрицательной');if(months<=0)return fail('Период в месяцах должен быть больше нуля');
  const fraction=ddiv(decimal(price),decimal(months)),perMonth=decimalValue(fraction);if(!finite(perMonth))return fail(RANGE);rows.push({name:t.slice(0,-2).join(' '),price,months,perMonth,fraction});}
 const monthlyD=rows.reduce((a,r)=>dadd(a,r.fraction),decimal(0)),monthly=decimalValue(monthlyD),annualD=dmul(monthlyD,decimal(12)),annual=decimalValue(annualD);if(!finite(monthly,annual))return fail(RANGE);
 const top=rows.reduce((a,b)=>b.fraction.n*a.fraction.d>a.fraction.n*b.fraction.d?b:a);
 const table:CalcResultTable={title:'Подписки в пересчёте на месяц',columns:['Подписка','Цена','Месяцев','В месяц'],rows:rows.map(r=>[r.name,scalar(r.price,2),r.months===Math.trunc(r.months)&&Number.isSafeInteger(r.months)?fmtNumber(r.months,0):r.months.toString().replace('.',','),decimalScalar(r.fraction,2)])};
 return {primary:{label:'В месяц',value:decimalMoney(monthlyD)},secondary:[{label:'В год',value:decimalMoney(annualD)},{label:'Подписок',value:fmtNumber(rows.length,0)},{label:'Самая дорогая',value:top.name},{label:'Её вклад в месяц',value:decimalMoney(top.fraction)}],table};
};
