import type { CalcFunction } from '../../lib/types';
import { INPUT, RANGE, MODE, qty } from '../../lib/platform/measurementScalar';
import { read, mode, exact, add, negative, times, evaluated, sqrtRatio, finite } from '../../lib/platform/electronicsNumericInput';
import { fmtInt } from '../../lib/format';
/** Incoherent/common-reference level sum and same-proportionality amplitude ratios. */
export const compute:CalcFunction=inputs=>{
 const selected=mode(inputs.mode,'sum',['sum','ratio']);
 const fail=(value:string)=>({primary:{label:'Уровень',value:'—'},secondary:[{label:'Проверьте данные',value,accent:'red' as const}]});
 if(!selected)return fail(MODE);
 const db=(n:number)=>`${qty(n)} дБ`;
 if(selected==='ratio'){
  const kind=mode(inputs.kind,'power',['power','amplitude']);if(!kind)return fail(MODE);
  const p1=read(inputs.p1),p2=read(inputs.p2);if(!finite(p1,p2))return fail(INPUT);
  if(!(p1>0))return fail('Исходная величина должна быть больше нуля');
  if(!(p2>0))return fail('Конечная величина должна быть больше нуля');
  const relative=evaluated(add(exact(p2),negative(exact(p1))),exact(p1));
  const log=Number.isFinite(relative)&&relative>-1?Math.log1p(relative)/Math.LN10:Math.log10(p2)-Math.log10(p1);
  const level=(kind==='amplitude'?20:10)*log;
  const power=kind==='amplitude'?evaluated(times(exact(p2),exact(p2)),times(exact(p1),exact(p1))):evaluated(exact(p2),exact(p1));
  const amplitude=kind==='amplitude'?evaluated(exact(p2),exact(p1)):sqrtRatio(exact(p2),exact(p1));
  if(!finite(level,power,amplitude)||!(power>0&&amplitude>0))return fail(RANGE);
  return {primary:{label:'Уровень',value:db(level)},secondary:[{label:'Во сколько раз по мощности',value:qty(power)},
  {label:'Во сколько раз по амплитуде',value:qty(amplitude)},{label:'Исходная величина',value:qty(p1)},{label:'Конечная величина',value:qty(p2)}]};
 }
 if(typeof inputs.levels!=='string')return fail('Введите хотя бы один уровень в децибелах');
 const tokens=inputs.levels.trim().split(/[\s,;]+/).filter(Boolean);
 if(!tokens.length)return fail('Введите хотя бы один уровень в децибелах');
 if(tokens.length>10000)return fail('Введите не более 10 000 уровней');
 const levels=tokens.map(read);if(!finite(...levels))return fail(INPUT);
 const max=levels.reduce((m,n)=>Math.max(m,n),-Infinity);
 // Remove one maximum term before log1p so a small positive contribution is not cancelled by1+tail.
 let removed=false;const tail=levels.reduce((s,n)=>{if(!removed&&n===max){removed=true;return s;}return s+Math.pow(10,(n-max)/10);},0);
 const correction=10*Math.log1p(tail)/Math.LN10,level=max+correction,arithmetic=evaluated(add(...levels.map(exact)));
 if(!finite(level,correction,arithmetic))return fail(RANGE);
 return {primary:{label:'Уровень',value:db(level)},secondary:[{label:'Источников',value:fmtInt(levels.length)},
 {label:'Самый громкий',value:db(max)},{label:'Прибавка к самому громкому',value:db(correction)},
 {label:'Арифметическая сумма (так НЕ считают)',value:db(arithmetic)}]};
};
