import type { CalcFunction } from '../../lib/types';
import { INPUT, RANGE, qty } from '../../lib/platform/measurementScalar';
import { read, exact, times, evaluated, finite, mode, sqrtRatio } from '../../lib/platform/electronicsNumericInput';
const shapes={
 'rod-center':{n:1,d:12,label:'стержень через центр'},'rod-end':{n:1,d:3,label:'стержень через конец'},
 disk:{n:1,d:2,label:'сплошной диск'},ring:{n:1,d:1,label:'тонкое кольцо'},
 'sphere-solid':{n:2,d:5,label:'сплошной шар'},'sphere-hollow':{n:2,d:3,label:'полая сфера'},
} as const;
export const compute:CalcFunction=inputs=>{
 const selected=mode(inputs.shape,'disk',Object.keys(shapes)) as keyof typeof shapes|null;
 const mass=read(inputs.m),size=read(inputs.r);
 const fail=(value:string)=>({primary:{label:'Момент инерции',value:'—'},secondary:[{label:'Проверьте данные',value,accent:'red' as const}]});
 if(!selected)return fail('Неизвестное тело');
 if(!finite(mass,size))return fail(INPUT);
 if(!(mass>0))return fail('Масса должна быть больше нуля');
 if(!(size>0))return fail('Размер должен быть больше нуля');
 const body=shapes[selected],square=times(exact(size),exact(size),exact(body.n));
 const inertia=evaluated(times(exact(mass),square),exact(body.d)),gyration=sqrtRatio(square,exact(body.d));
 if(!finite(inertia,gyration)||gyration<=0)return fail(RANGE);
 return {primary:{label:'Момент инерции',value:`${qty(inertia)} кг·м²`},secondary:[
  {label:'Масса',value:`${qty(mass)} кг`},{label:'Размер',value:`${qty(size)} м`},
  {label:'Радиус инерции',value:`${qty(gyration)} м`},{label:'Тело',value:body.label},
 ]};
};
