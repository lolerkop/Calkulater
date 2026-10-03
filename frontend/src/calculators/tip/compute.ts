import type { CalcFunction } from '../../lib/types';
import { fmtInt } from '../../lib/format';
import { read, integer, finite, mode, decimal, dmul, dadd, ddiv, dnegative, decimalValue, decimalMoney, ceiling, INPUT, RANGE, MODE, INTEGER } from '../../lib/calculators/householdWave17Numeric';
export const compute: CalcFunction = inputs => {
 const bill=read(inputs.bill),pct=read(inputs.tipPercent),people=integer(inputs.people),round=mode(inputs.roundPerPerson,'no',['no','yes']);
 const fail=(value:string)=>({primary:{label:'Итого к оплате',value:'—'},secondary:[{label:'Проверьте данные',value,accent:'red' as const}]});
 if(!round)return fail(MODE);if(!finite(bill,pct))return fail(INPUT);if(!finite(people))return fail(INTEGER);
 if(bill<=0)return fail('Сумма счёта должна быть больше нуля');if(pct<0)return fail('Процент чаевых не может быть отрицательным');if(people<1)return fail('Человек должно быть не меньше одного');
 const billD=decimal(bill),tipD=ddiv(dmul(billD,decimal(pct)),decimal(100)),plainD=dadd(billD,tipD);
 const shareD=ddiv(plainD,decimal(people)),perPerson=round==='yes'?ceiling(shareD):decimalValue(shareD);
 const finalShareD=round==='yes'&&finite(perPerson)?decimal(perPerson):shareD;
 const totalD=round==='yes'?dmul(finalShareD,decimal(people)):plainD;
 const extraD=round==='yes'?dadd(totalD,dnegative(plainD)):decimal(0);
 const tip=decimalValue(tipD),total=decimalValue(totalD),extra=extraD.n>0n?decimalValue(extraD):0;
 if(!finite(tip,perPerson,total,extra))return fail(RANGE);
 const secondary=[{label:'Чаевые',value:decimalMoney(tipD)},{label:'Счёт без чаевых',value:decimalMoney(billD)}];if(people>1){secondary.push({label:'С человека',value:decimalMoney(finalShareD)},{label:'Человек',value:fmtInt(people)});}if(extra>0)secondary.push({label:'Сверх счёта из-за округления',value:decimalMoney(extraD)});
 return {primary:{label:'Итого к оплате',value:decimalMoney(totalD)},secondary};
};
