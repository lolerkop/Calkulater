import type { CalcFunction } from '../../lib/types';
import { INPUT, RANGE, MODE, qty } from '../../lib/platform/measurementScalar';
import { read, mode, exact, add, negative, times, evaluated, sqrtRatio, finite } from '../../lib/platform/electronicsNumericInput';
/** No-drag constant-g trajectory to the ground y=0. Only exact cardinal input angles are snapped. */
export const compute:CalcFunction=inputs=>{
 const v=read(inputs.v0),angle=read(inputs.angle),h=read(inputs.h0);
 const fail=(value:string)=>({primary:{label:'Дальность',value:'—'},secondary:[{label:'Проверьте данные',value,accent:'red' as const}]});
 if(!finite(v,angle,h))return fail(INPUT);
 if(!(v>0))return fail('Начальная скорость должна быть больше нуля');
 if(angle<0||angle>90)return fail('Угол должен быть от 0 до 90 градусов');
 if(h<0)return fail('Высота броска не может быть отрицательной');
 const rad=evaluated(times(exact(angle),exact(Math.PI)),exact(180));
 if(!finite(rad))return fail(RANGE);
 const sine=angle===0?0:angle===90?1:Math.sin(rad),cosine=angle===90?0:angle===0?1:Math.cos(rad);
 const vy=evaluated(times(exact(v),exact(sine))),vx=evaluated(times(exact(v),exact(cosine)));
 if(!finite(vy,vx))return fail(RANGE);
 const g=exact(9.80665),square=times(exact(vy),exact(vy)),root=sqrtRatio(add(square,times(exact(2),g,exact(h))),exact(1));
 if(!finite(root))return fail(RANGE);
 const time=evaluated(add(exact(vy),exact(root)),g),peakTime=evaluated(exact(vy),g),rise=evaluated(square,times(exact(2),g));
 if(!finite(time,peakTime,rise))return fail(RANGE);
 const range=evaluated(times(exact(vx),exact(time))),peak=evaluated(add(exact(h),exact(rise)));
 if(!finite(range,peak))return fail(RANGE);
 const q=(n:number,u:string)=>`${qty(n)} ${u}`;
 return {primary:{label:'Дальность',value:q(range,'м')},secondary:[{label:'Время полёта',value:q(time,'с')},{label:'Высшая точка',value:q(peak,'м')},{label:'Горизонтальная составляющая',value:q(vx,'м/с')},{label:'Вертикальная составляющая',value:q(vy,'м/с')},{label:'Время до высшей точки',value:q(peakTime,'с')}]};
};
