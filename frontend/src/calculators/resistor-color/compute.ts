import type { CalcFunction } from '../../lib/types';
import { read, finite, positive, exact, times, add, negative, evaluated, measure, integer, INPUT, RANGE } from '../../lib/platform/electronicsNumericInput';
const DIGIT=['чёрный','коричневый','красный','оранжевый','жёлтый','зелёный','синий','фиолетовый','серый','белый'];
const MULTIPLIER:Record<number,string>={[-2]:'серебристый',[-1]:'золотистый'};
const TOLERANCE:Record<number,string>={1:'коричневый',2:'красный',5:'золотистый',10:'серебристый'};
const asResistance=(ohms:number)=>{const [v,u]=Math.abs(ohms)>=1e6?[ohms/1e6,'МОм']:Math.abs(ohms)>=1e3?[ohms/1e3,'кОм']:[ohms,'Ом'];return `${measure(v)} ${u}`;};
const bandName=(code:number)=>MULTIPLIER[code]??DIGIT[code];
export const compute: CalcFunction = inputs => {
  const b1=integer(inputs.b1), b2=integer(inputs.b2), mult=integer(inputs.mult), tol=integer(inputs.tol);
  const fail=(message:string)=>({primary:{label:'Номинал',value:'—'},secondary:[{label:'Проверьте данные',value:message,accent:'red' as const}]});
  if (!Number.isSafeInteger(b1) || b1<0 || b1>9) return fail('Первая полоса — цифра от 0 до 9');
  if (!Number.isSafeInteger(b2) || b2<0 || b2>9) return fail('Вторая полоса — цифра от 0 до 9');
  if (!Number.isSafeInteger(mult) || mult< -2 || mult>7) return fail('Множитель — от серебристого до фиолетового');
  if (![1,2,5,10].includes(tol)) return fail('Выберите допуск 1, 2, 5 или 10 %');
  const ohms=(b1*10+b2)*10**mult, min=ohms*(1-tol/100), max=ohms*(1+tol/100);
  return {primary:{label:'Номинал',value:asResistance(ohms)},secondary:[
    {label:'Допуск',value:`±${measure(tol)} %`},{label:'Наименьшее допустимое',value:asResistance(min)},
    {label:'Наибольшее допустимое',value:asResistance(max)},{label:'Ширина поля допуска',value:asResistance(ohms*2*tol/100)},
    {label:'Множитель',value:`×${measure(10**mult)}`},{label:'Полосы',value:`${bandName(b1)} · ${bandName(b2)} · ${bandName(mult)} · ${TOLERANCE[tol]}`},
  ]};
};
