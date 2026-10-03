import type { CalcFunction } from '../../lib/types';
import { fmtInt, fmtNumber } from '../../lib/format';
import { integer, optionalNumber } from '../../lib/platform/scalarInputDisplay';
import { formatQuantity } from '../../lib/platform/measurement';
import { exact, add, times, negative } from '../../lib/platform/geometryNumericInput';
const percentText=(n:number)=>`${n!==0&&n<0.005?formatQuantity(n,fmtNumber):fmtNumber(n,2)}%`;
export const compute:CalcFunction=inputs=>{
 const fail=(message:string)=>({primary:{label:'Результат',value:'—'},secondary:[{label:'Проверьте данные',value:message,accent:'red' as const}]});
 const correct=integer(inputs.correct),total=integer(inputs.total),passMark=optionalNumber(inputs.passMark);
 if(correct===null||total===null)return fail('Количество должно быть целым в допустимом диапазоне');
 if(passMark===null)return fail('Введите корректные числовые данные');
 if(!(total>0))return fail('Всего вопросов должно быть больше нуля');
 if(correct<0)return fail('Число правильных ответов не может быть отрицательным');
 if(correct>total)return fail('Правильных ответов не может быть больше, чем вопросов');
 if(passMark<0||passMark>100)return fail('Проходной балл должен быть от 0 до 100 процентов');
 const percent=correct/total*100,wrong=total-correct;
 const secondary:{label:string;value:string;accent?:'red'}[]=[{label:'Правильных',value:`${fmtInt(correct)} из ${fmtInt(total)}`},{label:'Ошибок',value:fmtInt(wrong)},{label:'Доля ошибок',value:percentText(wrong/total*100)}];
 // Compare the exact integer ratio with the entered finite threshold. A
 // division rounded to binary64 can otherwise falsely pass a nearby boundary.
 const passed=add(times(exact(correct),exact(100)),negative(times(exact(passMark),exact(total)))).coefficient>=0n;
 if(passMark>0)secondary.push({label:'Проходной балл',value:passed?'Тест сдан':'Тест не сдан',...(passed?{}:{accent:'red' as const})});
 return{primary:{label:'Результат',value:percentText(percent)},secondary};
};
