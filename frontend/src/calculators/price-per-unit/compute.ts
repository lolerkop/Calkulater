import type { CalcFunction } from '../../lib/types';
import { read, finite, mode, decimal, evaluated, scalar, money, decimalMoney, INPUT, RANGE, MODE } from '../../lib/calculators/householdWave17Numeric';
const suffixes={kg:'за кг',l:'за л',pcs:'за шт'};
const unitFraction=(price:number,amount:number)=>{const p=decimal(price),a=decimal(amount);return {n:p.n*a.d,d:p.d*a.n};};
const value=(n:bigint,d:bigint)=>evaluated({coefficient:n,exponent:0},{coefficient:d,exponent:0});
export const compute: CalcFunction = inputs => {
 const m=mode(inputs.mode,'single',['single','compare']),u=mode(inputs.unit,'kg',['kg','l','pcs']);
 const fail=(value:string)=>({primary:{label:'Цена за единицу',value:'—'},secondary:[{label:'Проверьте данные',value,accent:'red' as const}]});
 if(!m||!u)return fail(MODE);const suffix=suffixes[u as keyof typeof suffixes];
 if(m==='single'){
  const p=read(inputs.price),a=read(inputs.amount);if(!finite(p,a))return fail(INPUT);
  if(p<=0)return fail('Цена должна быть больше нуля');if(a<=0)return fail('Количество должно быть больше нуля');
  const fraction=unitFraction(p,a),unit=value(fraction.n,fraction.d);if(!finite(unit))return fail(RANGE);
  return {primary:{label:'Цена за единицу',value:`${decimalMoney(fraction)} ${suffix}`},secondary:[{label:'Цена упаковки',value:money(p)},{label:'Количество в упаковке',value:scalar(a,2)}]};
 }
 const p=read(inputs.priceA),a=read(inputs.amountA),q=read(inputs.priceB),b=read(inputs.amountB);if(!finite(p,a,q,b))return fail(INPUT);
 if(p<=0||q<=0)return fail('Цена должна быть больше нуля');if(a<=0||b<=0)return fail('Количество должно быть больше нуля');
 const fa=unitFraction(p,a),fb=unitFraction(q,b),delta=fa.n*fb.d-fb.n*fa.d;
 const ua=value(fa.n,fa.d),ub=value(fb.n,fb.d),difference=value(delta<0n?-delta:delta,fa.d*fb.d);
 if(!finite(ua,ub,difference))return fail(RANGE);
 return {primary:{label:'Выгоднее',value:delta===0n?'одинаково':delta<0n?'A':'B'},secondary:[
 {label:'Упаковка A',value:`${decimalMoney(fa)} ${suffix}`},{label:'Упаковка B',value:`${decimalMoney(fb)} ${suffix}`},{label:'Переплата за единицу',value:`${decimalMoney({n:delta<0n?-delta:delta,d:fa.d*fb.d})} ${suffix}`}]};
};
