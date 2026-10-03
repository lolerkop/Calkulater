import type { CalcFunction } from '../../lib/types';
import { fmtInt, fmtNumber } from '../../lib/format';
import { integer, number, optionalInteger } from '../../lib/platform/scalarInputDisplay';
import { formatMeasure, formatQuantity } from '../../lib/platform/measurement';
import { positiveRatio } from '../../lib/platform/scaledPositiveRatio';
const count=(n:number)=>!Number.isFinite(n)?'Значение выходит за числовой диапазон':n!==0&&(n<0.5||n>=1e21)?formatQuantity(n,fmtNumber):fmtInt(n);
const duration=(minutes:number)=>{const rounded=Math.round(minutes);if(rounded>Number.MAX_SAFE_INTEGER)return `${formatQuantity(minutes,fmtNumber)} мин`;const hours=Math.floor(rounded/60),remain=rounded%60;return hours>0?`${fmtInt(hours)} ч ${remain} мин`:`${rounded} мин`;};
export const compute:CalcFunction=inputs=>{
 const fail=(message:string)=>({primary:{label:'Скорость чтения',value:'—'},secondary:[{label:'Проверьте данные',value:message,accent:'red' as const}]});
 const words=integer(inputs.words),minutes=number(inputs.minutes),bookWords=optionalInteger(inputs.bookWords);
 if(words===null||bookWords===null)return fail('Количество должно быть целым в допустимом диапазоне');
 if(minutes===null)return fail('Введите корректные числовые данные');
 if(!(words>0))return fail('Число слов должно быть больше нуля');
 if(!(minutes>0))return fail('Время должно быть больше нуля');
 if(bookWords<0)return fail('Объём книги не может быть отрицательным');
 const wpm=positiveRatio([words],[minutes]);
 if(!Number.isFinite(wpm)||!(wpm>0))return fail('Результат вне допустимого диапазона');
 const secondary=[{label:'Слов в час',value:count(positiveRatio([words,60],[minutes]))},{label:'Знаков в минуту (примерно)',value:count(positiveRatio([words,6],[minutes]))}];
 if(bookWords>0){const bookMinutes=positiveRatio([bookWords,minutes],[words]);secondary.push({label:'Время на книгу',value:!Number.isFinite(bookMinutes)?'Значение выходит за числовой диапазон':bookMinutes===0?'Ненулевое значение меньше числового диапазона':bookMinutes<0.5?`${formatQuantity(bookMinutes,fmtNumber)} мин`:duration(bookMinutes)});}
 const displayedSpeed=wpm<1?(wpm<1e-4?formatQuantity(wpm,fmtNumber):formatMeasure(wpm,fmtNumber)):count(wpm);
 return{primary:{label:'Скорость чтения',value:`${displayedSpeed} слов/мин`},secondary};
};
