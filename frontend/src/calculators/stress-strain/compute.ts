import type { CalcFunction } from '../../lib/types';
import { INPUT, RANGE, MODE, qty } from '../../lib/platform/measurementScalar';
import { read, mode, exact, add, negative, times, evaluated, sqrtRatio, finite } from '../../lib/platform/electronicsNumericInput';
/** Signed engineering normal stress and small axial strain; E must be positive in the linear model. */
const labels={stress:'Напряжение',modulus:'Модуль Юнга',elongation:'Удлинение'};
export const compute:CalcFunction=inputs=>{
 const selected=mode(inputs.mode,'stress',['stress','modulus','elongation']);
 const label=selected?labels[selected as keyof typeof labels]:labels.stress;
 const fail=(value:string)=>({primary:{label,value:'—'},secondary:[{label:'Проверьте данные',value,accent:'red' as const}]});
 if(!selected)return fail(MODE);
 const f=read(inputs.force),a=read(inputs.area);
 if(!finite(f,a))return fail(INPUT);
 if(!(a>0))return fail('Площадь сечения должна быть больше нуля');
 const stress=evaluated(exact(f),exact(a));
 let strain:number|null=null,modulus:number|null=null,elongation:number|null=null,value=stress;
 const optional=(raw:unknown)=>raw===undefined||(typeof raw==='string'&&raw.trim()==='')?0:read(raw);
 if(selected==='elongation'){
  const l=read(inputs.length),e=read(inputs.e);
  if(!finite(l,e))return fail(INPUT);
  if(!(l>0))return fail('Исходная длина должна быть больше нуля');
  if(!(e>0))return fail('Модуль Юнга должен быть больше нуля');
  strain=evaluated(exact(f),times(exact(a),exact(e)));
  elongation=evaluated(times(exact(f),exact(l)),times(exact(a),exact(e)));modulus=e;value=elongation;
 }else{
  const l=selected==='stress'?optional(inputs.length):read(inputs.length),d=selected==='stress'?optional(inputs.delta):read(inputs.delta);
  if(!finite(l,d))return fail(INPUT);
  if(selected==='modulus'||d!==0){
   if(!(l>0))return fail('Исходная длина должна быть больше нуля');
   if(d===0)return fail('Удлинение не может быть нулевым: делить на него нечего');
   if(f===0||Math.sign(f)!==Math.sign(d))return fail('Для положительного модуля сила и изменение длины должны быть ненулевыми и одного знака');
   strain=evaluated(exact(d),exact(l));modulus=evaluated(times(exact(f),exact(l)),times(exact(a),exact(d)));elongation=d;
   if(selected==='modulus')value=modulus;
  }else if(l<0)return fail('Исходная длина не может быть отрицательной');
 }
 if(!finite(stress,value,...[strain,modulus,elongation].filter((v):v is number=>v!==null)))return fail(RANGE);
 const q=(n:number,u:string)=>`${qty(n)} ${u}`;
 const secondary=[{label:'Напряжение',value:q(stress,'МПа')}];
 if(strain!==null)secondary.push({label:'Относительная деформация',value:qty(strain)});
 if(modulus!==null)secondary.push({label:'Модуль Юнга',value:q(modulus,'МПа')});
 if(elongation!==null)secondary.push({label:'Удлинение',value:q(elongation,'мм')});
 secondary.push({label:'Площадь сечения',value:q(a,'мм²')});
 return {primary:{label,value:q(value,selected==='elongation'?'мм':'МПа')},secondary};
};
