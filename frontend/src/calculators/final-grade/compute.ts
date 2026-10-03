import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { number } from '../../lib/platform/scalarInputDisplay';
import { formatQuantity } from '../../lib/platform/measurement';
import { exact, add, negative, times, ratio } from '../../lib/platform/geometryNumericInput';
const percent = (n: number) => `${n!==0 && (Math.abs(n)<0.005 || Math.abs(n)>=1e12) ? formatQuantity(n,fmtNumber) : fmtNumber(n,2)}%`;
export const compute: CalcFunction = inputs => {
 const fail=(message:string)=>({primary:{label:'Нужный балл',value:'—'},secondary:[{label:'Проверьте данные',value:message,accent:'red' as const}]});
 const current=number(inputs.current), target=number(inputs.target), weight=number(inputs.weight);
 if(current===null||target===null||weight===null)return fail('Введите корректные числовые данные');
 if(current<0||current>100)return fail('Текущая оценка задаётся в диапазоне от 0 до 100');
 if(target<0||target>100)return fail('Желаемая оценка задаётся в диапазоне от 0 до 100');
 if(!(weight>0)||weight>100)return fail('Вес экзамена должен быть больше 0 и не больше 100 процентов');
 // Algebraically current + 100*(target-current)/weight. Exact binary sums
 // avoid losing the current-grade term when the exam weight is very small.
 const numerator=add(times(exact(current),exact(weight)),times(add(exact(target),negative(exact(current))),exact(100)));
 const needed=ratio(numerator,exact(weight));
 if(!Number.isFinite(needed)||(needed===0&&numerator.coefficient!==0n))return fail('Результат вне допустимого диапазона');
 const contribution=ratio(times(exact(current),add(exact(100),negative(exact(weight)))),exact(100));
 const secondary:{label:string;value:string;accent?:'red'}[]=[{label:'Вклад текущей оценки',value:percent(contribution)},{label:'Вес экзамена',value:percent(weight)}];
 if(needed>100)secondary.push({label:'Цель недостижима',value:'Одним экзаменом эту итоговую уже не набрать: нужен балл выше максимального',accent:'red'});
 else if(needed<=0)secondary.push({label:'Цель уже достигнута',value:'Итоговая выйдет не ниже желаемой при любом результате экзамена'});
 return {primary:{label:'Нужный балл',value:percent(needed)},secondary};
};
