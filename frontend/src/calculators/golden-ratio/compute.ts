import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { read, valid, dim, exact, add, negative, number as rounded, ratio, product, INPUT, MODE, RANGE } from '../../lib/platform/geometryNumericInput';

import { formatStatistic } from '../../lib/platform/measurement';
const PHI=(1+Math.sqrt(5))/2;
const statistic=(value:number)=>value!==0&&(Math.abs(value)<1e-7||Math.abs(value)>=1e12)?dim(value):formatStatistic(value,fmtNumber);
export const compute: CalcFunction = (inputs) => {
 const fail=(message:string)=>({primary:{label:'Большая часть',value:'—'},secondary:[{label:'Проверьте данные',value:message,accent:'red' as const}]});
 const mode=inputs.mode === undefined ? 'split' : inputs.mode;if(mode!=='split'&&mode!=='grow')return fail(MODE);
 const known=read(inputs[mode==='split'?'total':'a']);if(!Number.isFinite(known))return fail(INPUT);
 if(!(known>0))return fail('Длина или известный размер должны быть больше нуля');
 const larger=mode==='split'?ratio(exact(known),exact(PHI)):product(known,PHI);
 const smaller=mode==='split'?rounded(add(exact(known),negative(exact(larger)))):ratio(exact(known),exact(PHI));
 if(!valid(larger,smaller))return fail(RANGE);
 return {primary:{label:mode==='split'?'Большая часть':'Больший отрезок',value:statistic(larger)},secondary:[
 {label:mode==='split'?'Меньшая часть':'Меньший отрезок',value:statistic(smaller)},{label:'φ',value:fmtNumber(PHI,6)}]};
};
