import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { INPUT, MODE, RANGE, finite, mode, read, mul, quotient, measure } from '../rafters/buildingWave16Numeric';
// Every slope must have the same pitch above a non-overlapping complete projection.
export const compute:CalcFunction=inputs=>{
 const roof=mode(inputs.mode,'gable',['shed','gable','hip']),slopeMode=mode(inputs.slopeMode,'degrees',['degrees','percent']);
 const length=read(inputs.length),width=read(inputs.width);
 const fail=(value:string)=>({primary:{label:'Площадь крыши',value:'—'},secondary:[{label:'Проверьте данные',value,accent:'red' as const}]});
 if(!roof||!slopeMode)return fail(MODE);
 const pitch=read(inputs[slopeMode==='percent'?'slopePercent':'angle']);
 if(!finite(length,width,pitch))return fail(INPUT);
 if(!(length>0)||!(width>0))return fail('Размеры основания должны быть больше нуля');
 if(pitch<0)return fail('Уклон не может быть отрицательным');
 if(slopeMode==='degrees'&&pitch>=90)return fail('Уклон должен быть меньше 90 градусов');
 const plan=mul(length,width);
 const angle=slopeMode==='degrees'?pitch:pitch<1e-6?quotient([pitch,180],[100,Math.PI]):Math.atan2(pitch,100)*180/Math.PI;
 const total=slopeMode==='percent'?quotient([length,width,Math.hypot(100,pitch)],[100]):quotient([length,width],[Math.cos(pitch*Math.PI/180)]);
 const half=roof!=='gable'?0:slopeMode==='percent'?quotient([length,width,Math.hypot(100,pitch)],[200]):quotient([length,width],[2,Math.cos(pitch*Math.PI/180)]);
 if(!finite(plan,angle,total,half)||plan<=0||total<=0||(pitch>0&&angle<=0)||(roof==='gable'&&half<=0))return fail(RANGE);
 const m2=(x:number)=>`${measure(x)} м²`;
 return {primary:{label:'Площадь крыши',value:m2(total)},secondary:[
 ...(roof==='gable'?[{label:'Площадь одного ската',value:m2(half)}]:[]),
 {label:'Скатов',value:roof==='shed'?'1':roof==='hip'?'4':'2'},
 {label:'Площадь основания',value:m2(plan)},{label:'Уклон',value:`${measure(angle)}°`} ]};
};
