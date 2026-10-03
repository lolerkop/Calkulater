import type { CalcFunction } from '../../lib/types';
import { INPUT, RANGE, MODE, qty } from '../../lib/platform/measurementScalar';
import { read, mode, exact, add, negative, times, evaluated, sqrtRatio, finite } from '../../lib/platform/electronicsNumericInput';
/** Paraxial thin lens, real object do>0, real/virtual image convention. Infinite image distance is not a finite result. */
export const compute:CalcFunction=inputs=>{
 const selected=mode(inputs.mode,'image',['image','focal']);
 const fail=(value:string)=>({primary:{label:'Расстояние до изображения',value:'—'},secondary:[{label:'Проверьте данные',value,accent:'red' as const}]});
 if(!selected)return fail(MODE);
 const o=read(inputs.do);if(!finite(o))return fail(INPUT);
 if(!(o>0))return fail('Расстояние до предмета должно быть больше нуля');
 const q=(n:number,u:string)=>`${qty(n)} ${u}`;
 if(selected==='image'){
  const f=read(inputs.f);if(!finite(f))return fail(INPUT);
  if(f===0)return fail('Фокусное расстояние не может быть нулевым');
  const den=add(exact(o),negative(exact(f)));
  if(den.coefficient===0n)return fail('Предмет в фокусе: изображение на бесконечности, конечной плоскости изображения нет');
  const di=evaluated(times(exact(f),exact(o)),den),mag=evaluated(negative(exact(f)),den);
  if(!finite(di,mag))return fail(RANGE);
  return {primary:{label:'Расстояние до изображения',value:q(di,'см')},secondary:[{label:'Увеличение',value:qty(mag)},{label:'Тип изображения',value:di>0?'действительное перевёрнутое':'мнимое прямое'},{label:'Фокусное расстояние',value:q(f,'см')},{label:'Расстояние до предмета',value:q(o,'см')}]};
 }
 const i=read(inputs.di);if(!finite(i))return fail(INPUT);
 if(i===0)return fail('Расстояние до изображения не может быть нулевым');
 const sum=add(exact(o),exact(i)),prod=times(exact(o),exact(i));
 if(sum.coefficient===0n)return fail('Такая пара расстояний фокуса не задаёт');
 const f=evaluated(prod,sum),mag=evaluated(negative(exact(i)),exact(o)),power=evaluated(times(exact(100),sum),prod);
 if(!finite(f,mag,power))return fail(RANGE);
 return {primary:{label:'Фокусное расстояние',value:q(f,'см')},secondary:[{label:'Увеличение',value:qty(mag)},{label:'Оптическая сила',value:q(power,'дптр')},{label:'Расстояние до предмета',value:q(o,'см')},{label:'Расстояние до изображения',value:q(i,'см')}]};
};
